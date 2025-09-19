// Simple in-memory rate limiter for development
// In production, use Redis or external rate limiting service
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

export function rateLimit(identifier: string, limit: number = 100, window: number = 15 * 60 * 1000): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(identifier);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(identifier, { count: 1, resetTime: now + window });
    return true;
  }

  if (record.count >= limit) {
    return false;
  }

  record.count++;
  return true;
}

export function getRateLimitHeaders(identifier: string, limit: number = 100, window: number = 15 * 60 * 1000) {
  const record = rateLimitMap.get(identifier);
  const now = Date.now();

  if (!record || now > record.resetTime) {
    return {
      'X-RateLimit-Limit': limit.toString(),
      'X-RateLimit-Remaining': (limit - 1).toString(),
      'X-RateLimit-Reset': Math.ceil((now + window) / 1000).toString(),
    };
  }

  return {
    'X-RateLimit-Limit': limit.toString(),
    'X-RateLimit-Remaining': Math.max(0, limit - record.count).toString(),
    'X-RateLimit-Reset': Math.ceil(record.resetTime / 1000).toString(),
  };
}