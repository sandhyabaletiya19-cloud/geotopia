/* ═══════════════════════════════════════════════════════════
   DHARAVERSE MAP MYSTERY — SERVICE WORKER
   File: /games/daily-mystery/sw.js
   
   Strategy:
   - Cache-first for all static assets (css, js, fonts)
   - Network-first for Supabase API calls
   - Offline fallback: serve cached index.html
   ═══════════════════════════════════════════════════════════ */

var CACHE_NAME    = 'dmm-v1';
var STATIC_ASSETS = [
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
  '/games/daily-mystery/manifest.json'
];

/* Requests that should NEVER be cached */
var NETWORK_ONLY = [
  'supabase.co',
  'gnews.io',
  'groq.com'
];

/* ── INSTALL ───────────────────────────────────── */
self.addEventListener('install', function (e) {
  console.log('[SW] Installing cache:', CACHE_NAME);

  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) {
        console.log('[SW] Caching static assets');
        /* addAll fails if any resource fails — use individual adds */
        var promises = STATIC_ASSETS.map(function (url) {
          return cache.add(url).catch(function (err) {
            console.warn('[SW] Failed to cache:', url, err);
          });
        });
        return Promise.all(promises);
      })
      .then(function () {
        /* Activate immediately without waiting for old SW to die */
        return self.skipWaiting();
      })
  );
});

/* ── ACTIVATE ──────────────────────────────────── */
self.addEventListener('activate', function (e) {
  console.log('[SW] Activating:', CACHE_NAME);

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
        /* Take control of all clients immediately */
        return self.clients.claim();
      })
  );
});

/* ── FETCH ─────────────────────────────────────── */
self.addEventListener('fetch', function (e) {
  var url = e.request.url;

  /* Skip non-GET requests */
  if (e.request.method !== 'GET') return;

  /* Skip chrome-extension and other non-http */
  if (!url.startsWith('http')) return;

  /* Network-only for API calls */
  for (var i = 0; i < NETWORK_ONLY.length; i++) {
    if (url.indexOf(NETWORK_ONLY[i]) !== -1) {
      e.respondWith(networkOnly(e.request));
      return;
    }
  }

  /* Network-only for Leaflet CDN (always latest tiles) */
  if (url.indexOf('cartocdn.com') !== -1 ||
      url.indexOf('openstreetmap.org') !== -1) {
    e.respondWith(networkWithCacheFallback(e.request));
    return;
  }

  /* Cache-first for static assets */
  if (isStaticAsset(url)) {
    e.respondWith(cacheFirst(e.request));
    return;
  }

  /* Network-first for everything else */
  e.respondWith(networkFirst(e.request));
});

/* ── STRATEGIES ────────────────────────────────── */

/**
 * Cache-first: serve from cache, fallback to network.
 * Used for: js, css, fonts, images
 */
function cacheFirst(request) {
  return caches.match(request)
    .then(function (cached) {
      if (cached) return cached;

      return fetch(request)
        .then(function (response) {
          if (response && response.status === 200) {
            var toCache = response.clone();
            caches.open(CACHE_NAME).then(function (cache) {
              cache.put(request, toCache);
            });
          }
          return response;
        })
        .catch(function () {
          return offlineFallback(request);
        });
    });
}

/**
 * Network-first: try network, fallback to cache.
 * Used for: HTML pages
 */
function networkFirst(request) {
  return fetch(request)
    .then(function (response) {
      if (response && response.status === 200) {
        var toCache = response.clone();
        caches.open(CACHE_NAME).then(function (cache) {
          cache.put(request, toCache);
        });
      }
      return response;
    })
    .catch(function () {
      return caches.match(request)
        .then(function (cached) {
          return cached || offlineFallback(request);
        });
    });
}

/**
 * Network-only: always fetch, no caching.
 * Used for: API calls
 */
function networkOnly(request) {
  return fetch(request).catch(function () {
    /* Return empty JSON for API calls that fail offline */
    return new Response('[]', {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  });
}

/**
 * Network with cache fallback: try network, use cache if offline.
 * Used for: map tiles
 */
function networkWithCacheFallback(request) {
  return fetch(request)
    .then(function (response) {
      if (response && response.status === 200) {
        var toCache = response.clone();
        caches.open(CACHE_NAME).then(function (cache) {
          cache.put(request, toCache);
        });
      }
      return response;
    })
    .catch(function () {
      return caches.match(request);
    });
}

/**
 * Offline fallback: serve index.html for navigation requests.
 */
function offlineFallback(request) {
  if (request.headers.get('Accept') &&
      request.headers.get('Accept').indexOf('text/html') !== -1) {
    return caches.match('/games/daily-mystery/index.html');
  }
  return new Response('', { status: 503, statusText: 'Offline' });
}

/* ── HELPERS ───────────────────────────────────── */

function isStaticAsset(url) {
  return url.indexOf('/games/daily-mystery/css/') !== -1 ||
         url.indexOf('/games/daily-mystery/js/')  !== -1 ||
         url.indexOf('/games/daily-mystery/icons/')!== -1 ||
         url.indexOf('fonts.googleapis.com')       !== -1 ||
         url.indexOf('fonts.gstatic.com')          !== -1 ||
         url.indexOf('unpkg.com/leaflet')           !== -1;
}
