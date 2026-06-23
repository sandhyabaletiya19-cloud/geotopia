/* ═══════════════════════════════════════════════════════════
   DHARAVERSE MAP MYSTERY — SERVICE WORKER
   File: /games/daily-mystery/sw.js
   
   ★ CHANGE CACHE_VERSION to force update on all devices ★
   ═══════════════════════════════════════════════════════════ */

var CACHE_VERSION = 'dmm-v6';  // ← INCREMENT THIS every deploy

var CACHE_FILES = [
  '/games/daily-mystery/',
  '/games/daily-mystery/index.html',
  '/games/daily-mystery/css/game.css',
  '/games/daily-mystery/css/animations.css',
  '/games/daily-mystery/js/data.js',
  '/games/daily-mystery/js/logic.js',
  '/games/daily-mystery/js/state.js',
  '/games/daily-mystery/js/i18n.js',
  '/games/daily-mystery/js/ui.js',
  '/games/daily-mystery/js/share.js',
  '/games/daily-mystery/js/streak.js',
  '/games/daily-mystery/js/app.js'
];

/* ── INSTALL: cache new files ── */
self.addEventListener('install', function (event) {
  console.log('[SW] Installing version:', CACHE_VERSION);

  /* Skip waiting — activate immediately */
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_VERSION).then(function (cache) {
      console.log('[SW] Caching files');
      return cache.addAll(CACHE_FILES);
    })
  );
});

/* ── ACTIVATE: delete ALL old caches ── */
self.addEventListener('activate', function (event) {
  console.log('[SW] Activating version:', CACHE_VERSION);

  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (name) {
          if (name !== CACHE_VERSION) {
            console.log('[SW] Deleting old cache:', name);
            return caches.delete(name);
          }
        })
      );
    }).then(function () {
      /* Take control of all tabs immediately */
      return self.clients.claim();
    })
  );
});

/* ── FETCH: Network-first strategy ──
   Try network first. If fails, use cache.
   This ensures users always get fresh files. */
self.addEventListener('fetch', function (event) {
  var request = event.request;

  /* Skip non-GET requests */
  if (request.method !== 'GET') return;

  /* Skip external requests (fonts, leaflet CDN, etc) */
  if (!request.url.startsWith(self.location.origin)) return;

  /* Skip Supabase API calls */
  if (request.url.indexOf('supabase') !== -1) return;

  event.respondWith(
    fetch(request)
      .then(function (networkResponse) {
        /* Got fresh response — update cache */
        if (networkResponse && networkResponse.status === 200) {
          var responseClone = networkResponse.clone();
          caches.open(CACHE_VERSION).then(function (cache) {
            cache.put(request, responseClone);
          });
        }
        return networkResponse;
      })
      .catch(function () {
        /* Network failed — try cache */
        return caches.match(request).then(function (cachedResponse) {
          return cachedResponse || new Response('Offline', {
            status: 503,
            statusText: 'Offline'
          });
        });
      })
  );
});

/* ── MESSAGE: Force refresh from page ── */
self.addEventListener('message', function (event) {
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
  }
  if (event.data === 'clearCache') {
    caches.keys().then(function (names) {
      names.forEach(function (name) {
        caches.delete(name);
      });
    });
  }
});
