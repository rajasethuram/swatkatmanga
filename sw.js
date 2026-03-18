// SwatkatManga Service Worker v4.0
const CACHE = 'swatkat-v4';
const STATIC = [
  '/',
  '/index.html',
  '/manifest.json',
];

// Install — cache static assets
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(STATIC).catch(() => {}))
  );
  self.skipWaiting();
});

// Activate — clean old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch — serve from cache, fallback to network
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // Always network-first for manga APIs
  const apiHosts = ['api.mangadex.org', 'uploads.mangadex.org', 'api.comick.fun', 'meo.comick.pictures'];
  if (apiHosts.some(h => url.hostname.includes(h))) {
    e.respondWith(
      fetch(e.request).catch(() => caches.match(e.request))
    );
    return;
  }

  // Cache-first for app shell
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request).then(res => {
      // Cache successful responses
      if (res.ok && e.request.method === 'GET') {
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
      }
      return res;
    })).catch(() => caches.match('/index.html'))
  );
});

// Background sync for library updates
self.addEventListener('sync', e => {
  if (e.tag === 'sync-library') {
    console.log('Background sync: library');
  }
});
