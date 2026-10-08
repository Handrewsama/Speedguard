// SpeedGuard DGT — Service Worker V14
// Update-safe strategy: HTML/navigation is network-first so GitHub Pages cannot keep an old app shell.
const CACHE = 'speedguard-sw-v14';
const OLD_CACHE_PREFIX = 'speedguard-';
const APP_VERSION = '14';
const ASSETS = [
  './',
  './index.html?v=14',
  './manifest.json?v=14',
  'https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;600;700&family=Share+Tech+Mono&display=swap'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys
          .filter(key => key !== CACHE && key.startsWith(OLD_CACHE_PREFIX))
          .map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

function isAppShell(request) {
  const url = new URL(request.url);
  return request.mode === 'navigate' || url.pathname.endsWith('/index.html') || url.pathname.endsWith('/');
}

self.addEventListener('fetch', event => {
  const request = event.request;

  // APIs must always use the network; never serve stale radar data.
  if (request.url.includes('overpass-api.de')) {
    event.respondWith(
      fetch(request).catch(() => new Response('{}', { headers: { 'Content-Type': 'application/json' } }))
    );
    return;
  }

  // The HTML app shell is network-first. If offline, fall back to the cached shell.
  if (isAppShell(request)) {
    event.respondWith(
      fetch(request, { cache: 'no-store' })
        .then(response => {
          if (response && response.ok) {
            const clone = response.clone();
            caches.open(CACHE).then(cache => cache.put('./index.html?v=14', clone)).catch(() => {});
          }
          return response;
        })
        .catch(() => caches.match('./index.html?v=14').then(cached => cached || caches.match('./index.html')))
    );
    return;
  }

  // Static assets: cache-first, with network fallback.
  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;
      return fetch(request).then(response => {
        if (response && response.ok && new URL(request.url).origin === self.location.origin) {
          const clone = response.clone();
          caches.open(CACHE).then(cache => cache.put(request, clone)).catch(() => {});
        }
        return response;
      });
    })
  );
});
