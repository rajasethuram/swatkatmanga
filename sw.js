// SwatkatManga Service Worker v4.1
const CACHE = 'swatkat-v4.1';

// Hosts that should NEVER be intercepted — always go direct to network
const BYPASS_HOSTS = [
  'api.mangadex.org',
  'uploads.mangadex.org',
  'api.comick.fun',
  'meo.comick.pictures',
  'fonts.googleapis.com',
  'fonts.gstatic.com',
  'raw.githubusercontent.com',
];

// Install — skip waiting immediately
self.addEventListener('install', e => {
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

// Fetch — only cache app shell files, bypass ALL external APIs
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // Bypass service worker entirely for all API hosts
  if (BYPASS_HOSTS.some(h => url.hostname.includes(h))) {
    return; // Let browser handle it directly — no interception
  }

  // Only cache same-origin requests (index.html, sw.js, manifest.json)
  if (url.origin !== self.location.origin) {
    return; // Let browser handle all cross-origin requests
  }

  // Cache-first for app shell only
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(res => {
        if (res.ok && e.request.method === 'GET') {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return res;
      });
    }).catch(() => caches.match('/index.html'))
  );
});
