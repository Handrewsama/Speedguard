// SpeedGuard V49.1 — aggressive update / stale-cache protection
const CACHE = 'speedguard-sw-v49.1';
const BUILD = '49.1';
const OLD_PREFIX = 'speedguard-';
const ASSETS = [
  './',
  `./index.html?v=${BUILD}`,
  `./manifest.json?v=${BUILD}`,
  './icon-192.png',
  './icon-512.png',
  './logo-mark.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k.startsWith(OLD_PREFIX) && k !== CACHE)
          .map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', event => {
  const req = event.request;
  const url = new URL(req.url);

  // Never cache live external radar/map/API data.
  if (
    url.hostname.includes('overpass-api') ||
    url.hostname.includes('overpass.kumi.systems') ||
    url.hostname.includes('geiserx.github.io') ||
    url.hostname.includes('dgt.es') ||
    url.hostname.includes('datos.gob.es')
  ) return;

  // Navigation and index.html must always prefer the network. This is the
  // critical part that prevents an old PWA shell from surviving indefinitely.
  if (
    req.mode === 'navigate' ||
    url.pathname.endsWith('/index.html') ||
    url.pathname.endsWith('index.html')
  ) {
    event.respondWith(
      fetch(req, { cache: 'no-store' })
        .then(res => {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(`./index.html?v=${BUILD}`, copy)).catch(() => {});
          return res;
        })
        .catch(() => caches.match(`./index.html?v=${BUILD}`).then(r => r || caches.match('./')))
    );
    return;
  }

  // sw.js itself must never be served from the application cache.
  if (url.pathname.endsWith('/sw.js')) return;

  event.respondWith(
    caches.match(req).then(cached => {
      if (cached) return cached;
      return fetch(req).then(res => {
        if (!res || !res.ok || req.method !== 'GET') return res;
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
        return res;
      });
    })
  );
});
