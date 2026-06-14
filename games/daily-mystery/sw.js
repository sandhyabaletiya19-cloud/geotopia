/* ═══════════════════════════════════════════════════════════
   DHARAVERSE MAP MYSTERY — SERVICE WORKER
   File: /games/daily-mystery/sw.js
   ═══════════════════════════════════════════════════════════ */

var CACHE_NAME = 'dmm-v2';

var ASSETS_TO_CACHE = [
  '/games/daily-mystery/',
  '/games/daily-mystery/index.html',
  '/games/daily-mystery/result.html',
  '/games/daily-mystery/country.html',
  '/games/daily-mystery/css/game.css',
  '/games/daily-mystery/css/animations.css',
  '/games/daily-mystery/js/data.js',
  '/games/daily-mystery/js/logic.js',
  '/games/daily-mystery/js/state.js',
  '/games/daily-mystery/js/i18n.js',
  '/games/daily-mystery/js/ui.js',
  '/games/daily-mystery/js/share.js',
  '/games/daily-mystery/js/streak.js',
  '/games/daily-mystery/js/app.js',
  '/public/logo192.png',
  '/public/logo512.png'
];

// Install — cache all assets
self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) {
        console.log('[SW] Caching assets');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .then(function () {
        return self.skipWaiting();
      })
  );
});

// Activate — clean old caches
self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys()
      .then(function (keys) {
        return Promise.all(
          keys
            .filter(function (key) { return key !== CACHE_NAME; })
            .map(function (key) {
              console.log('[SW] Deleting old cache:', key);
              return caches.delete(key);
            })
        );
      })
      .then(function () {
        return self.clients.claim();
      })
  );
});

// Fetch — cache first for assets, network first for API
self.addEventListener('fetch', function (e) {
  var url = e.request.url;

  // Network first for Supabase API calls
  if (url.includes('supabase.co')) {
    e.respondWith(
      fetch(e.request)
        .catch(function () {
          return new Response(
            JSON.stringify([]),
            { headers: { 'Content-Type': 'application/json' } }
          );
        })
    );
    return;
  }

  // Network first for Leaflet tiles
  if (url.includes('tile') || url.includes('carto')) {
    e.respondWith(
      fetch(e.request)
        .catch(function () {
          return caches.match(e.request);
        })
    );
    return;
  }

  // Cache first for everything else
  e.respondWith(
    caches.match(e.request)
      .then(function (cached) {
        if (cached) return cached;

        return fetch(e.request)
          .then(function (response) {
            // Only cache valid responses
            if (!response || response.status !== 200) {
              return response;
            }

            var toCache = response.clone();
            caches.open(CACHE_NAME)
              .then(function (cache) {
                cache.put(e.request, toCache);
              });

            return response;
          })
          .catch(function () {
            // Offline fallback
            if (e.request.destination === 'document') {
              return caches.match('/games/daily-mystery/index.html');
            }
          });
      })
  );
});
