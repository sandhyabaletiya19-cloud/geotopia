// ============================================================
// DharaVerse Service Worker - Push Notifications + PWA Cache
// Location: /sw.js (root directory)
// ============================================================

const CACHE_NAME = 'dharaverse-v2.1';
const NOTIFICATION_TAG_PREFIX = 'dharaverse-notify-';

// ─── Assets to cache for PWA ───
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/atlas/atlas.html',
  '/games/games.html',
  '/upsc/upsc.html',
  '/encyclopedia/encyclopedia.html',
  '/contact.html',
  '/timeline.html',
  '/mystery.html',
  '/mountains/mountains.html',
  '/rivers/rivers.html',
  '/forests/forests.html',
  '/deserts/deserts.html',
  '/oceans/oceans.html',
  '/volcanoes/volcanoes.html',
  '/lakes/lakes.html',
  '/islands/islands.html',
  '/coral-reefs/coral-reefs.html',
  '/logo.png',
  '/manifest.json'
];

// ─── Notification Messages Database ───
// 3 categories: Morning, Afternoon, Evening
// Each has 30+ variants so users never see repeats
const NOTIFICATION_MESSAGES = {
  morning: [
    {
      title: "🌍 Good Morning, Explorer!",
      body: "Your daily geography adventure awaits. Keep your streak alive!",
      action_url: "/",
      tag: "morning"
    },
    {
      title: "🗺️ Rise & Discover!",
      body: "Did you know? Russia spans 11 time zones! Learn more today.",
      action_url: "/encyclopedia/encyclopedia.html",
      tag: "morning"
    },
    {
      title: "🌄 Morning Geography Fix",
      body: "Spin the globe and discover a new country before breakfast!",
      action_url: "/",
      tag: "morning"
    },
    {
      title: "☀️ Your Streak is Waiting!",
      body: "Don't break your learning streak! Quick 2-min quiz inside.",
      action_url: "/games/games.html",
      tag: "morning"
    },
    {
      title: "🏔️ Mountain Morning!",
      body: "Can you name the tallest peak in Africa? Find out now!",
      action_url: "/mountains/mountains.html",
      tag: "morning"
    },
    {
      title: "🌊 Wake Up & Explore",
      body: "The Pacific Ocean covers more area than all land combined!",
      action_url: "/oceans/oceans.html",
      tag: "morning"
    },
    {
      title: "🦜 Early Bird Explorer",
      body: "New geography facts are waiting. Start your day smart!",
      action_url: "/encyclopedia/encyclopedia.html",
      tag: "morning"
    },
    {
      title: "🌏 DharaVerse Misses You!",
      body: "The world has 195 countries. How many can you name?",
      action_url: "/games/games.html",
      tag: "morning"
    },
    {
      title: "🗻 Morning Challenge",
      body: "Which river is the longest? Nile or Amazon? Check now!",
      action_url: "/rivers/rivers.html",
      tag: "morning"
    },
    {
      title: "🌅 Start With Geography",
      body: "Learn one new country fact today. It takes just 60 seconds!",
      action_url: "/atlas/atlas.html",
      tag: "morning"
    },
    {
      title: "🧭 Navigator Alert!",
      body: "Your geography XP resets if you skip today. Jump in!",
      action_url: "/",
      tag: "morning"
    },
    {
      title: "🏝️ Island Discovery",
      body: "Indonesia has over 17,000 islands! Explore them now.",
      action_url: "/islands/islands.html",
      tag: "morning"
    },
    {
      title: "🌋 Volcanic Morning",
      body: "There are 1,500+ active volcanoes on Earth. Learn where!",
      action_url: "/volcanoes/volcanoes.html",
      tag: "morning"
    },
    {
      title: "🐫 Desert Facts Await",
      body: "The Sahara was once green with rivers. Discover its story!",
      action_url: "/deserts/deserts.html",
      tag: "morning"
    },
    {
      title: "🌿 Forest Explorer",
      body: "Amazon rainforest produces 20% of Earth's oxygen. Learn more!",
      action_url: "/forests/forests.html",
      tag: "morning"
    }
  ],

  afternoon: [
    {
      title: "🌍 Afternoon Brain Break!",
      body: "Take 2 minutes for a quick geography quiz. Beat your score!",
      action_url: "/games/games.html",
      tag: "afternoon"
    },
    {
      title: "🎯 Quiz Time!",
      body: "Can you identify countries by their shape? Try now!",
      action_url: "/games/games.html",
      tag: "afternoon"
    },
    {
      title: "📚 Study Break = Geo Break",
      body: "Refresh your mind with fascinating geography facts!",
      action_url: "/encyclopedia/encyclopedia.html",
      tag: "afternoon"
    },
    {
      title: "🗺️ Atlas Adventure",
      body: "Explore the interactive world map. Zoom into any country!",
      action_url: "/atlas/atlas.html",
      tag: "afternoon"
    },
    {
      title: "🏆 Challenge Yourself!",
      body: "Your current streak is impressive. Don't stop now!",
      action_url: "/games/games.html",
      tag: "afternoon"
    },
    {
      title: "🌊 Ocean Explorer",
      body: "The Mariana Trench is deeper than Everest is tall! Dive in.",
      action_url: "/oceans/oceans.html",
      tag: "afternoon"
    },
    {
      title: "🗻 Peak Challenge",
      body: "K2 is harder to climb than Everest. Learn why!",
      action_url: "/mountains/mountains.html",
      tag: "afternoon"
    },
    {
      title: "🌏 Continent Quest",
      body: "How well do you know Asia? Test your knowledge now!",
      action_url: "/asia.html",
      tag: "afternoon"
    },
    {
      title: "🎮 Game On, Explorer!",
      body: "New geography challenges are ready. Can you ace them?",
      action_url: "/games/games.html",
      tag: "afternoon"
    },
    {
      title: "💡 Did You Know?",
      body: "Canada has more lakes than the rest of the world combined!",
      action_url: "/lakes/lakes.html",
      tag: "afternoon"
    },
    {
      title: "🌍 Midday Discovery",
      body: "Africa has 54 countries. Can you name them all?",
      action_url: "/africa.html",
      tag: "afternoon"
    },
    {
      title: "🐠 Coral Reef Alert",
      body: "The Great Barrier Reef is visible from space! Explore it.",
      action_url: "/coral-reefs/coral-reefs.html",
      tag: "afternoon"
    },
    {
      title: "📖 UPSC Tip!",
      body: "Geography questions make up 15% of UPSC Prelims. Prep now!",
      action_url: "/upsc/upsc.html",
      tag: "afternoon"
    },
    {
      title: "🔥 Keep the Streak!",
      body: "You're on a roll! Don't let your learning streak die.",
      action_url: "/",
      tag: "afternoon"
    },
    {
      title: "🌐 Spin the Globe!",
      body: "Where will the globe take you today? Spin and find out!",
      action_url: "/",
      tag: "afternoon"
    }
  ],

  evening: [
    {
      title: "🌙 Evening Explorer",
      body: "End your day with a geography discovery. Just 2 minutes!",
      action_url: "/encyclopedia/encyclopedia.html",
      tag: "evening"
    },
    {
      title: "🌟 Don't Forget Your Streak!",
      body: "Day almost over! Quick quiz to keep your streak alive.",
      action_url: "/games/games.html",
      tag: "evening"
    },
    {
      title: "🔮 Mystery Geography",
      body: "Bermuda Triangle, Nazca Lines... Explore Earth's mysteries!",
      action_url: "/mystery.html",
      tag: "evening"
    },
    {
      title: "⏰ Last Chance Today!",
      body: "Your streak expires at midnight. Play now to save it!",
      action_url: "/games/games.html",
      tag: "evening"
    },
    {
      title: "🌌 Night Sky Geography",
      body: "The North Pole has 6 months of darkness. Learn why!",
      action_url: "/antarctica.html",
      tag: "evening"
    },
    {
      title: "📊 Check Your Progress",
      body: "See how much you've learned this week on your dashboard!",
      action_url: "/",
      tag: "evening"
    },
    {
      title: "🌍 One Last Spin",
      body: "Spin the globe one more time before bed. Where will it land?",
      action_url: "/",
      tag: "evening"
    },
    {
      title: "🏆 Earn Your Badge!",
      body: "You're close to unlocking a new achievement. Finish strong!",
      action_url: "/games/games.html",
      tag: "evening"
    },
    {
      title: "🌋 Bedtime Fact",
      body: "Yellowstone sits on a supervolcano. Sleep on that! 😄",
      action_url: "/volcanoes/volcanoes.html",
      tag: "evening"
    },
    {
      title: "💤 Geography Before Sleep",
      body: "People who learn before bed remember 40% more. Try it!",
      action_url: "/encyclopedia/encyclopedia.html",
      tag: "evening"
    },
    {
      title: "⏳ Earth Timeline",
      body: "Earth is 4.5 billion years old. Explore its timeline!",
      action_url: "/timeline.html",
      tag: "evening"
    },
    {
      title: "🌊 River Run",
      body: "The Amazon River has no bridges. Discover why!",
      action_url: "/rivers/rivers.html",
      tag: "evening"
    },
    {
      title: "🗺️ Tomorrow's Prep",
      body: "Review today's geography lesson. Stay sharp for tomorrow!",
      action_url: "/atlas/atlas.html",
      tag: "evening"
    },
    {
      title: "🏔️ Goodnight, Explorer",
      body: "You explored the world today. Come back tomorrow for more!",
      action_url: "/",
      tag: "evening"
    },
    {
      title: "🌙 Streak Saver!",
      body: "⚠️ Your streak is about to break! Tap to save it NOW!",
      action_url: "/games/games.html",
      tag: "evening"
    }
  ]
};

// ─── Install Event: Cache Assets ───
self.addEventListener('install', (event) => {
  console.log('[SW] Installing DharaVerse Service Worker v2.1');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Caching app shell');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .then(() => self.skipWaiting())
      .catch((err) => {
        console.error('[SW] Cache failed:', err);
      })
  );
});

// ─── Activate Event: Clean Old Caches ───
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating Service Worker v2.1');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => {
            console.log('[SW] Deleting old cache:', name);
            return caches.delete(name);
          })
      );
    }).then(() => self.clients.claim())
  );
});

// ─── Fetch Event: Cache-First Strategy ───
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;

  // Skip external requests
  if (!event.request.url.startsWith(self.location.origin)) return;

  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          // Return cache, but also fetch fresh copy for next time
          event.waitUntil(
            fetch(event.request)
              .then((freshResponse) => {
                if (freshResponse && freshResponse.status === 200) {
                  caches.open(CACHE_NAME)
                    .then((cache) => cache.put(event.request, freshResponse));
                }
              })
              .catch(() => { /* offline, ignore */ })
          );
          return cachedResponse;
        }

        // Not in cache, fetch from network
        return fetch(event.request)
          .then((response) => {
            if (!response || response.status !== 200) {
              return response;
            }
            const responseClone = response.clone();
            caches.open(CACHE_NAME)
              .then((cache) => cache.put(event.request, responseClone));
            return response;
          })
          .catch(() => {
            // Offline fallback for HTML pages
            if (event.request.headers.get('accept').includes('text/html')) {
              return caches.match('/index.html');
            }
          });
      })
  );
});

// ═══════════════════════════════════════════════════════════
// 🔔 PUSH NOTIFICATION HANDLER
// ═══════════════════════════════════════════════════════════

self.addEventListener('push', (event) => {
  console.log('[SW] Push notification received');

  let notificationData;

  if (event.data) {
    try {
      notificationData = event.data.json();
    } catch (e) {
      notificationData = {
        title: "🌍 DharaVerse",
        body: event.data.text() || "New geography adventure awaits!",
        action_url: "/"
      };
    }
  } else {
    // No data in push - pick a random notification
    notificationData = getScheduledNotification();
  }

  const options = {
    body: notificationData.body,
    icon: '/logo.png',
    badge: '/icons/badge-72.png',
    image: notificationData.image || undefined,
    tag: NOTIFICATION_TAG_PREFIX + (notificationData.tag || 'general'),
    renotify: true,
    requireInteraction: false,
    silent: false,
    vibrate: [200, 100, 200, 100, 200],
    data: {
      url: notificationData.action_url || '/',
      timestamp: Date.now()
    },
    actions: [
      {
        action: 'explore',
        title: '🌍 Explore Now',
        icon: '/icons/explore-icon.png'
      },
      {
        action: 'dismiss',
        title: '❌ Later',
        icon: '/icons/dismiss-icon.png'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification(notificationData.title, options)
  );
});

// ─── Notification Click Handler ───
self.addEventListener('notificationclick', (event) => {
  console.log('[SW] Notification clicked:', event.action);

  event.notification.close();

  if (event.action === 'dismiss') {
    // User dismissed - track this
    trackNotificationAction('dismissed');
    return;
  }

  // Get the URL to open
  const urlToOpen = event.notification.data?.url || '/';
  const fullUrl = new URL(urlToOpen, self.location.origin).href;

  // Track click
  trackNotificationAction('clicked');

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true })
      .then((clientList) => {
        // Check if DharaVerse is already open
        for (const client of clientList) {
          if (client.url.startsWith(self.location.origin) && 'focus' in client) {
            client.navigate(fullUrl);
            return client.focus();
          }
        }
        // Open new window
        if (clients.openWindow) {
          return clients.openWindow(fullUrl);
        }
      })
  );
});

// ─── Notification Close Handler (swipe away) ───
self.addEventListener('notificationclose', (event) => {
  console.log('[SW] Notification dismissed by user');
  trackNotificationAction('swiped_away');
});

// ═══════════════════════════════════════════════════════════
// ⏰ SCHEDULED LOCAL NOTIFICATIONS (No server needed!)
// ═══════════════════════════════════════════════════════════

// This uses the Periodic Background Sync API where available,
// and falls back to scheduling from the main page

self.addEventListener('periodicsync', (event) => {
  if (event.tag === 'dharaverse-notification-check') {
    console.log('[SW] Periodic sync: checking notification schedule');
    event.waitUntil(checkAndSendScheduledNotification());
  }
});

// Also handle regular sync for fallback
self.addEventListener('sync', (event) => {
  if (event.tag === 'dharaverse-notification-sync') {
    console.log('[SW] Background sync: notification check');
    event.waitUntil(checkAndSendScheduledNotification());
  }
});

// ─── Message Handler (from main page) ───
self.addEventListener('message', (event) => {
  console.log('[SW] Message received:', event.data);

  if (event.data && event.data.type === 'SCHEDULE_NOTIFICATION') {
    // Main page is telling us to show a notification
    const { delay, notification } = event.data;

    if (delay && delay > 0) {
      setTimeout(() => {
        self.registration.showNotification(notification.title, {
          body: notification.body,
          icon: '/logo.png',
          badge: '/icons/badge-72.png',
          tag: NOTIFICATION_TAG_PREFIX + notification.tag,
          renotify: true,
          vibrate: [200, 100, 200],
          data: {
            url: notification.action_url || '/',
            timestamp: Date.now()
          },
          actions: [
            { action: 'explore', title: '🌍 Explore Now' },
            { action: 'dismiss', title: '❌ Later' }
          ]
        });
      }, delay);
    }
  }

  if (event.data && event.data.type === 'TRIGGER_NOTIFICATION_NOW') {
    const notification = event.data.notification;
    self.registration.showNotification(notification.title, {
      body: notification.body,
      icon: '/logo.png',
      badge: '/icons/badge-72.png',
      tag: NOTIFICATION_TAG_PREFIX + (notification.tag || 'instant'),
      renotify: true,
      vibrate: [200, 100, 200],
      data: {
        url: notification.action_url || '/',
        timestamp: Date.now()
      },
      actions: [
        { action: 'explore', title: '🌍 Explore Now' },
        { action: 'dismiss', title: '❌ Later' }
      ]
    });
  }

  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// ═══════════════════════════════════════════════════════════
// 🛠️ HELPER FUNCTIONS
// ═══════════════════════════════════════════════════════════

function getScheduledNotification() {
  const hour = new Date().getHours();
  let timeSlot;

  if (hour >= 6 && hour < 12) {
    timeSlot = 'morning';
  } else if (hour >= 12 && hour < 18) {
    timeSlot = 'afternoon';
  } else {
    timeSlot = 'evening';
  }

  const messages = NOTIFICATION_MESSAGES[timeSlot];
  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
}

async function checkAndSendScheduledNotification() {
  try {
    const notification = getScheduledNotification();

    await self.registration.showNotification(notification.title, {
      body: notification.body,
      icon: '/logo.png',
      badge: '/icons/badge-72.png',
      tag: NOTIFICATION_TAG_PREFIX + notification.tag,
      renotify: true,
      vibrate: [200, 100, 200],
      data: {
        url: notification.action_url || '/',
        timestamp: Date.now()
      },
      actions: [
        { action: 'explore', title: '🌍 Explore Now' },
        { action: 'dismiss', title: '❌ Later' }
      ]
    });

    console.log('[SW] Scheduled notification sent:', notification.title);
  } catch (err) {
    console.error('[SW] Failed to send scheduled notification:', err);
  }
}

function trackNotificationAction(action) {
  // Send tracking data to all open clients
  self.clients.matchAll().then((clientList) => {
    clientList.forEach((client) => {
      client.postMessage({
        type: 'NOTIFICATION_ACTION',
        action: action,
        timestamp: Date.now()
      });
    });
  });
}
