/**
 * In-memory rate limiter for form submissions.
 * Limits by IP per form type. For multi-instance deployments, use Redis or similar.
 */

const WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS = 5;

type Entry = { count: number; windowStart: number };

const store = new Map<string, Entry>();

function prune(key: string) {
  const entry = store.get(key);
  if (!entry) return;
  if (Date.now() - entry.windowStart >= WINDOW_MS) {
    store.delete(key);
  }
}

export function checkRateLimit(ip: string, formType: "lead" | "contact"): { allowed: boolean; retryAfter?: number } {
  const key = `${formType}:${ip}`;
  const now = Date.now();
  prune(key);

  const entry = store.get(key);
  if (!entry) {
    store.set(key, { count: 1, windowStart: now });
    return { allowed: true };
  }

  if (now - entry.windowStart >= WINDOW_MS) {
    store.set(key, { count: 1, windowStart: now });
    return { allowed: true };
  }

  if (entry.count >= MAX_REQUESTS) {
    const retryAfter = Math.ceil((entry.windowStart + WINDOW_MS - now) / 1000);
    return { allowed: false, retryAfter };
  }

  entry.count += 1;
  return { allowed: true };
}

export function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  const realIp = request.headers.get("x-real-ip");
  if (realIp) return realIp.trim();
  return "unknown";
}
