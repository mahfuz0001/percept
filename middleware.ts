import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { rateLimit, getRateLimitHeaders } from './lib/rate-limiter';

const publicRoutes = createRouteMatcher([
  '/',
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/api/public(.*)',
]);

function getClientIP(request: NextRequest): string {
  const xForwardedFor = request.headers.get('x-forwarded-for');
  const xRealIp = request.headers.get('x-real-ip');
  const cfConnectingIp = request.headers.get('cf-connecting-ip');
  
  if (xForwardedFor) {
    return xForwardedFor.split(',')[0].trim();
  }
  if (xRealIp) {
    return xRealIp;
  }
  if (cfConnectingIp) {
    return cfConnectingIp;
  }
  
  return 'unknown';
}

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth(); // Await the auth() function
  const ip = getClientIP(req);
  const url = req.nextUrl.pathname;

  // Apply rate limiting to all API routes and authentication routes.
  if (url.startsWith('/api') || url.startsWith('/sign-')) {
    const identifier = `${ip}:${url}`;
    const limit = url.startsWith('/api') ? 60 : 30; // 60 requests per 15min for API, 30 for auth
    
    if (!rateLimit(identifier, limit)) {
      const headers = getRateLimitHeaders(identifier, limit);
      return new NextResponse(
        JSON.stringify({ 
          error: 'Too many requests', 
          message: 'Rate limit exceeded. Please try again later.' 
        }),
        { 
          status: 429, 
          headers: {
            'Content-Type': 'application/json',
            ...headers,
          }
        }
      );
    }
    
    const response = NextResponse.next();
    const headers = getRateLimitHeaders(identifier, limit);
    Object.entries(headers).forEach(([key, value]) => {
      response.headers.set(key, value);
    });
    return response;
  }

  // Allow access to public routes without authentication.
  if (publicRoutes(req)) {
    return NextResponse.next();
  }

  // If the user is not signed in and tries to access a protected route, redirect them.
  if (!userId) {
    const signInUrl = new URL('/sign-in', req.url);
    signInUrl.searchParams.set('redirect_url', req.url);
    return NextResponse.redirect(signInUrl);
  }
});

export const config = {
  matcher: [
    // Include all routes except static files and Next.js internals.
    '/((?!.*\\..*|_next).*)',
    '/',
    '/(api|trpc)(.*)',
  ],
};