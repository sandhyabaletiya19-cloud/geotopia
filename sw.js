const CACHE_NAME = 'geotopia-v1';
const urlsToCache = [
  '/geotopia/',
  '/geotopia/index.html',
  '/geotopia/public/logo192.png',
  '/geotopia/public/logo512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
