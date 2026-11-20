interface RateLimitEntry {
  count: number;
  resetAt: number;
}

const store = new Map<string, RateLimitEntry>();

const WINDOW_MS = 60_000; // 1 minute
const MAX_REQUESTS = 10; // 10 requests per minute per IP

function getClientIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }
  return "unknown";
}

export function checkRateLimit(req: Request): {
  allowed: boolean;
  limit: number;
  remaining: number;
  resetAt: number;
} {
  const ip = getClientIp(req);
  const now = Date.now();
  const key = ip;

  let entry = store.get(key);
  if (!entry || now > entry.resetAt) {
    entry = { count: 0, resetAt: now + WINDOW_MS };
    store.set(key, entry);
  }

  entry.count++;
  const remaining = Math.max(0, MAX_REQUESTS - entry.count);
  const allowed = entry.count <= MAX_REQUESTS;

  // Periodic cleanup of expired entries to prevent memory leaks
  if (store.size > 10_000 && Math.random() < 0.01) {
    for (const [k, v] of store.entries()) {
      if (now > v.resetAt) store.delete(k);
    }
  }

  return { allowed, limit: MAX_REQUESTS, remaining, resetAt: entry.resetAt };
}
