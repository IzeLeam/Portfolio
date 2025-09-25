// Lightweight in-memory fetch de-duplication helper.
// Ensures rapid successive requests for the same URL (e.g. React 18 Strict Mode double mount)
// share a single inflight promise. A short TTL lets immediate remounts reuse the
// resolved value without keeping stale data around for long.

type CacheEntry = { expires: number; promise: Promise<any> };
const cache = new Map<string, CacheEntry>();

/**
 * Fetch JSON once within a short window.
 * @param url Request URL
 * @param options Fetch options
 * @param ttlMs Time (ms) the cached promise/result remains reusable (default 4000)
 */
export function fetchJSONOnce<T = any>(url: string, options?: RequestInit, ttlMs = 4000): Promise<T> {
  const now = Date.now();
  const cached = cache.get(url);
  if (cached && cached.expires > now) {
    return cached.promise as Promise<T>;
  }

  const controller = new AbortController();
  if (options?.signal) {
    const ext = options.signal;
    if (!ext.aborted) {
      ext.addEventListener('abort', () => controller.abort(), { once: true });
    } else {
      controller.abort();
    }
  }

  const promise: Promise<T> = fetch(url, { ...options, signal: controller.signal })
    .then(r => {
      if (!r.ok) throw new Error(`Request failed: ${r.status}`);
      return r.json();
    })
    .catch(err => {
      // On error, remove immediately so future retries aren't blocked
      cache.delete(url);
      throw err;
    });

  cache.set(url, { expires: now + ttlMs, promise });
  return promise;
}

export function clearFetchOnceCache() {
  cache.clear();
}
