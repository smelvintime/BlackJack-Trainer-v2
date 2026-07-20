/* Blackjack Trainer service worker.
 *
 * Strategy:
 *  - HTML/navigations: NETWORK-FIRST. An online visitor always gets the freshly
 *    deployed index.html (which points at the latest hashed JS/CSS), so existing
 *    users are never stuck on an old version. Offline, we fall back to the cached
 *    shell so the app still opens.
 *  - Hashed static assets (main.<hash>.js/css, media): CACHE-FIRST. The filename
 *    changes every build, so a cached copy is only ever the correct copy; a new
 *    build is reached via the new index.html.
 *  - On activate we delete every cache except the current version, so a bumped
 *    CACHE_VERSION wipes stale assets. skipWaiting() means an updated worker takes
 *    over promptly instead of waiting for every tab to close.
 *
 * Bump CACHE_VERSION whenever you want to force-evict the offline cache.
 */
const CACHE_VERSION = 'v1';
const CACHE_NAME = `bj-trainer-${CACHE_VERSION}`;

// Minimal shell cached up front so the app can cold-start offline.
const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './favicon.ico',
  './apple-touch-icon.png',
  './logo192.png',
  './logo512.png',
];

self.addEventListener('install', (event) => {
  // Don't sit in "waiting" — a new worker should become active right away.
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)).catch(() => {})
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)));
    })()
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  // Leave cross-origin requests (e.g. analytics) entirely alone.
  if (url.origin !== self.location.origin) return;

  // Navigations -> network-first so the newest deploy always wins.
  if (request.mode === 'navigate') {
    event.respondWith(
      (async () => {
        try {
          const fresh = await fetch(request, { cache: 'no-store' });
          const cache = await caches.open(CACHE_NAME);
          cache.put('./index.html', fresh.clone());
          return fresh;
        } catch (e) {
          const cache = await caches.open(CACHE_NAME);
          return (
            (await cache.match('./index.html')) ||
            (await cache.match(request)) ||
            Response.error()
          );
        }
      })()
    );
    return;
  }

  // Everything else (hashed assets) -> cache-first, populate on miss.
  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      const cached = await cache.match(request);
      if (cached) return cached;
      try {
        const fresh = await fetch(request);
        if (fresh && fresh.status === 200 && fresh.type === 'basic') {
          cache.put(request, fresh.clone());
        }
        return fresh;
      } catch (e) {
        return cached || Response.error();
      }
    })()
  );
});
