// SpeedGuard DGT — Service Worker V43
const CACHE = 'speedguard-sw-v43';
const OLD_PREFIX = 'speedguard-';
const ASSETS = ['./', './index.html?v=42', './manifest.json?v=42', './icon-192.png', './icon-512.png', './logo-mark.png'];
self.addEventListener('install', event => { event.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())); });
self.addEventListener('activate', event => { event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith(OLD_PREFIX) && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', event => {
  const req=event.request, url=new URL(req.url);
  if(url.hostname.includes('overpass-api')) return;
  if(req.mode==='navigate'||url.pathname.endsWith('/index.html')||url.pathname.endsWith('index.html')){
    event.respondWith(fetch(req,{cache:'no-store'}).then(res=>{const copy=res.clone();caches.open(CACHE).then(c=>c.put('./index.html?v=42',copy));return res;}).catch(()=>caches.match('./index.html?v=42').then(r=>r||caches.match('./'))));
    return;
  }
  event.respondWith(caches.match(req).then(cached=>cached||fetch(req).then(res=>{const copy=res.clone();caches.open(CACHE).then(c=>c.put(req,copy));return res;})));
});
