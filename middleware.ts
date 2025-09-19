import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { rateLimit, getRateLimitHeaders } from './lib/rate-limiter';

const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
  '/challenges(.*)',
  '/profile(.*)',
  '/analytics(.*)',
]);

const isPublicApiRoute = createRouteMatcher([
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
  try {
    const ip = getClientIP(req);
    const url = req.nextUrl.pathname;

    if (url.startsWith('/api') || url.startsWith('/sign-') || isPublicApiRoute(req)) {
      const identifier = `${ip}:${url}`;
      const limit = url.startsWith('/api') ? 60 : 30;

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
    }

    if (isProtectedRoute(req)) {
      await auth.protect();
    }

    return NextResponse.next();
  } catch (error) {
    if (error instanceof Error && error.message.includes('NEXT_REDIRECT')) {
      // Re-throw the redirect error to let Next.js handle it
      throw error;
    }
    console.error('Middleware error:', error);

    return new NextResponse(
      JSON.stringify({
        error: 'Internal server error',
        message: 'Something went wrong. Please try again.'
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
