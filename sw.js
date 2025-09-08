const CACHE = 'pokedex-v2';
const ASSETS = [
  './',
  './index.html',
  './css/styles.css',
  './js/app.js',
  './js/modules/api.js',
  './js/modules/store.js',
  './js/modules/router.js',
  './js/modules/theme.js',
  './js/modules/ui-details.js',
  './js/modules/ui-list.js',
  './js/modules/map.js',
];

self.addEventListener('install', (e)=>{
  e.waitUntil(caches.open(CACHE).then(c=> c.addAll(ASSETS)).then(()=> self.skipWaiting()));
});
self.addEventListener('activate', (e)=>{
  e.waitUntil(caches.keys().then(keys=> Promise.all(keys.filter(k=>k!==CACHE).map(k=> caches.delete(k)))));
  self.clients.claim();
});

self.addEventListener('fetch', (e)=>{
  const url = new URL(e.request.url);
  if (url.origin === location.origin) {
    e.respondWith(caches.match(e.request).then(res=> res || fetch(e.request).then(resp=>{
      const clone = resp.clone(); caches.open(CACHE).then(c=> c.put(e.request, clone)); return resp;
    })));
    return;
  }
  // API: stale-while-revalidate
  if (/pokeapi\.co|pokemontcg\.io|raw\.githubusercontent\.com/.test(url.host)){
    e.respondWith((async ()=>{
      const cache = await caches.open(CACHE);
      const cached = await cache.match(e.request);
      const fetchPromise = fetch(e.request).then(resp=>{ cache.put(e.request, resp.clone()); return resp; }).catch(()=> cached);
      return cached || fetchPromise;
    })());
  }
});
