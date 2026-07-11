/**
 * In-memory sliding-window rate limiter for the contact API route.
 * Sufficient for a single-instance deployment. If PulsarIP scales to
 * multiple instances, swap this for a shared store (e.g. Redis) —
 * the call site (src/app/api/contact/route.ts) is already isolated.
 */

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;

const hits = new Map<string, number[]>();

export function isRateLimited(identifier: string): boolean {
  const now = Date.now();
  const timestamps = (hits.get(identifier) ?? []).filter((t) => now - t < WINDOW_MS);

  if (timestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    hits.set(identifier, timestamps);
    return true;
  }

  timestamps.push(now);
  hits.set(identifier, timestamps);

  if (hits.size > 5000) {
    for (const [key, value] of hits) {
      if (value.every((t) => now - t > WINDOW_MS)) hits.delete(key);
    }
  }

  return false;
}
