// ============================================
// /js/dv-lock.js
// DharaVerse — Complete Plan-Based Lock System
// Version: 1.0 💜
// ============================================

(function () {
'use strict';

// ==========================================
// PLAN LEVELS
// ==========================================
var PLAN_LEVELS = {
    free:     0,
    games:    1,
    upsc:     2,
    pro:      3,
    ultimate: 4
};

var FREE_LIMITS = {
    landscape: 7,
    games:     3,
    upsc:      3
};

// ==========================================
// BTS MESSAGES 💜 (all 25 from original)
// ==========================================
var BTS_MESSAGES = [
    { title: "Keep Swimming! 🌊",                subtitle: "The ocean of knowledge awaits 💜" },
    { title: "Dream, Believe, Achieve! ✨",       subtitle: "Unlock your potential 💜" },
    { title: "Purple You! 보라해 💜",              subtitle: "We believe in your dreams" },
    { title: "Magic Shop Awaits! ✨",              subtitle: "Unlock all wonders 💜" },
    { title: "Beyond The Scene! 🌟",               subtitle: "Go beyond with premium 💜" },
    { title: "You Are The Best! 🌸",               subtitle: "Best comes with premium 💜" },
    { title: "Life Goes On! 🌿",                   subtitle: "Keep exploring, go premium 💜" },
    { title: "Dynamite! 💥",                       subtitle: "Explode into full knowledge 💜" },
    { title: "Butter! 🧈",                         subtitle: "Smooth access to everything 💜" },
    { title: "Run BTS! 🏃",                        subtitle: "Run towards all knowledge 💜" },
    { title: "Mikrokosmos! 🌌",                    subtitle: "You are a shining star 💜" },
    { title: "Spring Day 🌸",                      subtitle: "Warm knowledge awaits you 💜" },
    { title: "Permission to Dance! 💃",            subtitle: "Dance into full access 💜" },
    { title: "Yet To Come! 🎶",                    subtitle: "The best is yet to come 💜" },
    { title: "Idol! 👑",                           subtitle: "Be the idol of knowledge 💜" },
    { title: "DNA! 🧬",                            subtitle: "Geography is in your DNA 💜" },
    { title: "Fire! 🔥",                           subtitle: "Set your learning on fire 💜" },
    { title: "Boy With Luv! 💕",                   subtitle: "Fall in love with Earth 💜" },
    { title: "Euphoria! 🦋",                       subtitle: "Feel the euphoria of learning 💜" },
    { title: "Black Swan! 🦢",                     subtitle: "Discover the unseen beauty 💜" },
    { title: "ON! 💜",                             subtitle: "Bring the pain, bring the knowledge!" },
    { title: "Fake Love? Real Knowledge! 💔➡️💜",  subtitle: "Get the real thing here" },
    { title: "Blood Sweat & Tears! 💧",            subtitle: "Worth every drop 💜" },
    { title: "Airplane pt.2 ✈️",                   subtitle: "Fly across all continents 💜" },
    { title: "Dis-ease → Ease! 💊",                subtitle: "Cure your curiosity 💜" }
];

function getRandomBTS() {
    return BTS_MESSAGES[Math.floor(Math.random() * BTS_MESSAGES.length)];
}

// ==========================================
// PAGE LISTS
// ==========================================

var FULLY_FREE_PAGES = [
    '/', '/index.html', '/geotopia.html',
    '/auth.html', '/auth-new.html',
    '/pricing.html', '/contact.html',
    '/payment-success.html', '/payment-failed.html',
    '/dashboard.html', '/user-dashboard.html',
    '/admin-login.html', '/admin-dashboard.html',
    '/disable-sw.html', '/test.html',
    '/legal/privacy-policy.html',
    '/legal/terms-and-conditions.html',
    '/africa.html', '/asia.html', '/europe.html',
    '/australia.html', '/north-america.html',
    '/south-america.html', '/antarctica.html',
    '/atlas/atlas.html', '/atlas.html',
    '/kids-zone.html', '/junior-zone.html', '/teen-zone.html',
    '/spin-globe.html', '/mystery.html',
    '/timeline/index.html', '/timeline.html',
    '/timeline-part1.html', '/timeline-part2.html',
    '/timeline-part3.html',
    '/encyclopedia/bts.html',
    '/encyclopedia/earth-simulator.html'
];

var ENCYCLOPEDIA_INDEX_PAGES = [
    '/encyclopedia/encyclopedia.html',
    '/encyclopedia/bharat/index.html',
    '/encyclopedia/biogeography/index.html',
    '/encyclopedia/climate/index.html',
    '/encyclopedia/dictionary/index.html',
    '/encyclopedia/environment-geography/environment-geography.html',
    '/encyclopedia/geology/index.html',
    '/encyclopedia/historical-geography/historical-geo.html',
    '/encyclopedia/human-geography/index.html',
    '/encyclopedia/hydrology/hydrology.html',
    '/encyclopedia/map-science/index.html',
    '/encyclopedia/organizations/index.html',
    '/encyclopedia/physical-geography/index.html',
    '/encyclopedia/space-geography/index.html',
    '/encyclopedia/space-geography/celestial-effects.html',
    '/encyclopedia/strategic-locations/index.html',
    '/encyclopedia/strategic-locations/straits/gibraltar.html'
];

// Card lock pages → type
var CARD_LOCK_PAGES = {
    '/mountains/mountains.html':     'landscape',
    '/rivers/rivers.html':           'landscape',
    '/lakes/lakes.html':             'landscape',
    '/oceans/oceans.html':           'landscape',
    '/oceans/seas.html':             'landscape',
    '/islands/islands.html':         'landscape',
    '/volcanoes/volcanoes.html':     'landscape',
    '/deserts/deserts.html':         'landscape',
    '/forests/forests.html':         'landscape',
    '/coral-reefs/coral-reefs.html': 'landscape',
    '/games/games.html':             'games',
    '/games.html':                   'games',
    '/upsc/upsc.html':               'upsc'
};

// ==========================================
// HELPERS
// ==========================================

function getPath() {
    var p = window.location.pathname.toLowerCase();
    if (p !== '/' && p.endsWith('/')) p = p.slice(0, -1);
    return p;
}

function isFullyFreePage(path) {
    for (var i = 0; i < FULLY_FREE_PAGES.length; i++) {
        var fp = FULLY_FREE_PAGES[i].toLowerCase();
        if (path === fp || path.endsWith(fp)) return true;
    }
    return false;
}

function isEncyclopediaIndexPage(path) {
    for (var i = 0; i < ENCYCLOPEDIA_INDEX_PAGES.length; i++) {
        var ep = ENCYCLOPEDIA_INDEX_PAGES[i].toLowerCase();
        if (path === ep || path.endsWith(ep)) return true;
    }
    return false;
}

function getCardLockType(path) {
    for (var key in CARD_LOCK_PAGES) {
        if (path.endsWith(key.toLowerCase())) {
            return CARD_LOCK_PAGES[key];
        }
    }
    return null;
}

function isLandscapeDetailPage(path) {
    var prefixes = [
        '/mountains/', '/rivers/', '/lakes/',
        '/oceans/', '/islands/', '/volcanoes/',
        '/deserts/', '/forests/', '/coral-reefs/'
    ];
    var indexes = [
        'mountains.html', 'rivers.html', 'lakes.html',
        'oceans.html', 'seas.html', 'islands.html',
        'volcanoes.html', 'deserts.html', 'forests.html',
        'coral-reefs.html'
    ];
    for (var i = 0; i < prefixes.length; i++) {
        if (path.includes(prefixes[i])) {
            var isIndex = false;
            for (var j = 0; j < indexes.length; j++) {
                if (path.endsWith(indexes[j])) { isIndex = true; break; }
            }
            if (!isIndex) return true;
        }
    }
    return false;
}

function isUpscDetailPage(path) {
    return path.includes('/upsc/') &&
           !path.endsWith('/upsc/upsc.html') &&
           !path.endsWith('/upsc.html');
}

function isEncyclopediaContentPage(path) {
    return path.includes('/encyclopedia/') &&
           !isEncyclopediaIndexPage(path) &&
           !path.endsWith('/encyclopedia/bts.html') &&
           !path.endsWith('/encyclopedia/earth-simulator.html');
}

// ==========================================
// PLAN STATE
// ==========================================

var _plan   = 'free';
var _ready  = false;
var _cbs    = [];

async function loadPlan() {
    try {
        if (!window.premiumCheck) return;
        var status = await window.premiumCheck.getPremiumStatus();
        _plan  = status.plan || 'free';
        _ready = true;
        console.log('💜 dv-lock: Plan:', _plan);
        _cbs.forEach(function(fn) { try { fn(_plan); } catch(e) {} });
        _cbs = [];
    } catch(e) {
        console.warn('dv-lock: Plan load error:', e.message);
        _plan  = 'free';
        _ready = true;
    }
}

function getLevel() { return PLAN_LEVELS[_plan] || 0; }

// ==========================================
// ACCESS CHECKS
// ==========================================

function canAccessLandscapeDetail() { return getLevel() >= PLAN_LEVELS.pro; }
function canAccessUpscDetail()      { return _plan === 'upsc' || _plan === 'ultimate'; }
function canAccessEncyclopedia()    { return getLevel() >= PLAN_LEVELS.pro; }
function canAccessGamesCards()      { return _plan === 'games' || getLevel() >= PLAN_LEVELS.pro; }
function canAccessUpscCards()       { return _plan === 'upsc' || _plan === 'ultimate'; }
function canAccessLandscapeCards()  { return getLevel() >= PLAN_LEVELS.pro; }

// ==========================================
// PLAN TEXT FOR POPUPS
// ==========================================

function getPlanInfo(lockType) {
    if (lockType === 'upsc') return {
        plan:  'UPSC Plan',
        price: '₹99/month or ₹799/year',
        emoji: '📚'
    };
    if (lockType === 'games') return {
        plan:  'Games Plan',
        price: '₹49/month or ₹299/year',
        emoji: '🎮'
    };
    return {
        plan:  'Pro Plan',
        price: '₹149/month or ₹1399/year',
        emoji: '⭐'
    };
}

// ==========================================
// CARD LOCK OVERLAY (Earth icon, purple)
// ==========================================

var CARD_SELECTORS = [
    '.card', '.item-card', '.grid-card', '.feature-card',
    '.mountain-card', '.river-card', '.lake-card', '.ocean-card',
    '.island-card', '.volcano-card', '.desert-card', '.forest-card',
    '.coral-card', '.game-card', '.upsc-card', '.topic-card',
    '.category-card', '.quiz-card', '[data-card]',
    '.cards-container > div', '.cards-container > a',
    '.card-grid > div', '.card-grid > a',
    '.grid > div', '.grid > a',
    '.items-grid > div', '.items-grid > a'
].join(', ');

var _cardsLocked = false;

function applyCardLocks(pageType) {
    if (_cardsLocked) return;

    var cards = document.querySelectorAll(CARD_SELECTORS);
    if (cards.length === 0) {
        waitForCards(pageType);
        return;
    }

    // Deduplicate
    var unique = [];
    var seen   = new Set();
    cards.forEach(function(c) {
        if (!seen.has(c)) { seen.add(c); unique.push(c); }
    });

    var freeLimit    = FREE_LIMITS[pageType] || 7;
    var canUnlockAll = pageType === 'games'     ? canAccessGamesCards()     :
                       pageType === 'upsc'      ? canAccessUpscCards()      :
                       pageType === 'landscape' ? canAccessLandscapeCards() : false;

    var lockType = pageType === 'games' ? 'games' :
                   pageType === 'upsc'  ? 'upsc'  : 'pro';

    var lockedCount = 0;

    unique.forEach(function(card, index) {
        if (card.classList.contains('dvl-free') ||
            card.classList.contains('dvl-locked')) return;

        if (index < freeLimit || canUnlockAll) {
            card.classList.add('dvl-free');
        } else {
            card.classList.add('dvl-locked');
            lockedCount++;

            card.style.position = 'relative';
            card.style.overflow  = 'hidden';

            // Get card name for popup
            var cardName = '';
            var nameEl   = card.querySelector('h2,h3,h4,.card-title,.name,.title');
            if (nameEl) cardName = nameEl.textContent.trim();

            // Create earth icon overlay
            var overlay = document.createElement('div');
            overlay.className = 'dvl-card-overlay';
            overlay.innerHTML =
                '<div class="dvl-card-inner">' +
                    '<div class="dvl-card-earth">🌍</div>' +
                    '<p class="dvl-card-text">Premium</p>' +
                    '<p class="dvl-card-sub">Tap to unlock 💜</p>' +
                '</div>';

            card.appendChild(overlay);

            // Click → BTS popup
            var clickFn = function(e) {
                e.preventDefault();
                e.stopPropagation();
                showBTSPopup(lockType, cardName);
            };

            overlay.addEventListener('click', clickFn);
            card.addEventListener('click', function(e) {
                if (card.classList.contains('dvl-locked')) clickFn(e);
            });

            if (card.tagName === 'A') {
                card.addEventListener('click', function(e) {
                    if (card.classList.contains('dvl-locked')) e.preventDefault();
                });
            }

            card.querySelectorAll('a').forEach(function(link) {
                link.addEventListener('click', function(e) {
                    if (card.classList.contains('dvl-locked')) {
                        e.preventDefault();
                        e.stopPropagation();
                        showBTSPopup(lockType, cardName);
                    }
                });
            });
        }
    });

    if (lockedCount > 0) {
        addCounterBar(unique.length, freeLimit, lockedCount, pageType);
    }

    _cardsLocked = true;

    console.log('💜 dv-lock: Cards |', pageType, '|',
        freeLimit, 'free |', lockedCount, 'locked');
}

function waitForCards(pageType) {
    var attempts = 0;
    var interval = setInterval(function() {
        if (_cardsLocked) { clearInterval(interval); return; }
        attempts++;
        var cards = document.querySelectorAll(CARD_SELECTORS);
        if (cards.length > 0) {
            clearInterval(interval);
            applyCardLocks(pageType);
        }
        if (attempts >= 50) clearInterval(interval);
    }, 100);

    var observer = new MutationObserver(function() {
        if (_cardsLocked) { observer.disconnect(); return; }
        var cards = document.querySelectorAll(CARD_SELECTORS);
        if (cards.length > 0) {
            observer.disconnect();
            clearInterval(interval);
            setTimeout(function() {
                if (!_cardsLocked) applyCardLocks(pageType);
            }, 200);
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
}

// ==========================================
// COUNTER BAR
// ==========================================

function addCounterBar(total, free, locked, pageType) {
    if (document.querySelector('.dvl-counter-bar')) return;

    var pct      = Math.round((free / total) * 100);
    var label    = pageType === 'games' ? 'Games' :
                   pageType === 'upsc'  ? 'UPSC Topics' : 'Landscapes';
    var planText = pageType === 'games' ? 'Games Plan ₹49/mo' :
                   pageType === 'upsc'  ? 'UPSC Plan ₹99/mo'  :
                   'Pro Plan ₹149/mo';

    var bar = document.createElement('div');
    bar.className = 'dvl-counter-bar';
    bar.innerHTML =
        '<div class="dvl-counter-text">' +
            '🌍 <strong>' + free + '</strong> of ' + total + ' ' +
            label + ' are free • ' +
            '<span class="dvl-counter-locked">' + locked + ' locked 💜</span>' +
        '</div>' +
        '<a href="/pricing.html" class="dvl-counter-btn">🔓 Unlock All — ' + planText + '</a>' +
        '<div class="dvl-counter-progress">' +
            '<div class="dvl-counter-fill" style="width:' + pct + '%"></div>' +
        '</div>';

    var targets = [
        'main', '.content', '.content-wrapper',
        '.cards-container', '.card-grid',
        '.container', '.page-content'
    ];

    var inserted = false;
    for (var i = 0; i < targets.length; i++) {
        var t = document.querySelector(targets[i]);
        if (t) { t.insertBefore(bar, t.firstChild); inserted = true; break; }
    }

    if (!inserted) document.body.insertBefore(bar, document.body.firstChild);
}

// ==========================================
// BTS POPUP (click locked card)
// ==========================================

function showBTSPopup(lockType, cardName) {
    var existing = document.getElementById('dvl-bts-popup');
    if (existing) existing.remove();

    var bts  = getRandomBTS();
    var info = getPlanInfo(lockType);

    // Floating hearts
    var hearts    = ['💜','💜','🤍','💜','✨','💜','🌍','💜'];
    var heartsHTML = '<div class="dvl-hearts">';
    hearts.forEach(function(h, i) {
        var left     = 10 + Math.random() * 80;
        var delay    = Math.random() * 3;
        var duration = 3 + Math.random() * 2;
        heartsHTML += '<span class="dvl-heart" style="left:' + left + '%;' +
            'animation-delay:' + delay + 's;' +
            'animation-duration:' + duration + 's">' + h + '</span>';
    });
    heartsHTML += '</div>';

    var popup = document.createElement('div');
    popup.id  = 'dvl-bts-popup';
    popup.innerHTML =
        '<div class="dvl-popup-backdrop"></div>' +
        '<div class="dvl-popup-box">' +
            heartsHTML +
            '<button class="dvl-popup-close" ' +
                'onclick="document.getElementById(\'dvl-bts-popup\').remove()">×</button>' +
            '<span class="dvl-popup-moon">💜</span>' +
            '<p class="dvl-popup-bts-title">' + bts.title + '</p>' +
            '<p class="dvl-popup-bts-sub">' + bts.subtitle + '</p>' +
            '<h3 class="dvl-popup-heading">🌍 Premium Content</h3>' +
            (cardName
                ? '<p class="dvl-popup-card-name">"' + cardName + '"</p>'
                : '') +
            '<p class="dvl-popup-desc">' +
                'Unlock with <strong>' + info.plan + '</strong>' +
            '</p>' +
            '<p class="dvl-popup-price">' + info.price + '</p>' +
            '<a href="/pricing.html" class="dvl-popup-btn-primary">' +
                info.emoji + ' Get ' + info.plan +
            '</a>' +
            '<a href="/auth-new.html" class="dvl-popup-btn-secondary">' +
                'Already subscribed? Log in 보라해 💜' +
            '</a>' +
            '<p class="dvl-popup-counter">Free includes ' +
                (lockType === 'games' ? '3' : lockType === 'upsc' ? '3' : '7') +
                ' · Rest locked 💜' +
            '</p>' +
        '</div>';

    document.body.appendChild(popup);

    requestAnimationFrame(function() { popup.classList.add('dvl-show'); });

    popup.querySelector('.dvl-popup-backdrop').addEventListener('click', function() {
        popup.remove();
    });

    document.addEventListener('keydown', function escFn(e) {
        if (e.key === 'Escape') {
            popup.remove();
            document.removeEventListener('keydown', escFn);
        }
    });
}

// ==========================================
// PAGE LOCK (entire page locked)
// ==========================================

function lockPage(lockType) {
    if (document.getElementById('dvl-page-overlay')) return;

    document.body.classList.add('dvl-page-locked');

    var bts  = getRandomBTS();
    var info = getPlanInfo(lockType);

    var overlay = document.createElement('div');
    overlay.id  = 'dvl-page-overlay';
    overlay.innerHTML =
        '<div class="dvl-page-box">' +
            '<span class="dvl-page-earth">🌍</span>' +
            '<span class="dvl-page-badge">★ PREMIUM</span>' +
            '<p class="dvl-popup-bts-title">' + bts.title + '</p>' +
            '<p class="dvl-popup-bts-sub">' + bts.subtitle + '</p>' +
            '<h2 class="dvl-page-heading">Unlock Full Access</h2>' +
            '<p class="dvl-page-desc">' +
                'This content requires <strong>' + info.plan + '</strong>' +
            '</p>' +
            '<p class="dvl-popup-price">' + info.price + '</p>' +
            '<a href="/pricing.html" class="dvl-popup-btn-primary">' +
                '🌟 Get ' + info.plan +
            '</a>' +
            '<a href="/" class="dvl-popup-btn-secondary">← Back to Home</a>' +
            '<a href="/auth-new.html" class="dvl-page-login">' +
                'Already Premium? Log In' +
            '</a>' +
        '</div>';

    document.body.appendChild(overlay);
}

function unlockPage() {
    document.body.classList.remove('dvl-page-locked');
    var overlay = document.getElementById('dvl-page-overlay');
    if (overlay) overlay.remove();
}

// ==========================================
// MAIN INIT
// ==========================================

async function init() {
    var path = getPath();

    console.log('💜 dv-lock v1.0 |', path);

    await loadPlan();

    // 1. Fully free page
    if (isFullyFreePage(path)) {
        console.log('💜 dv-lock: Free page');
        return;
    }

    // 2. Encyclopedia index — free
    if (isEncyclopediaIndexPage(path)) {
        console.log('💜 dv-lock: Encyclopedia index — free');
        return;
    }

    // 3. Card lock pages
    var cardType = getCardLockType(path);
    if (cardType) {
        console.log('💜 dv-lock: Card lock —', cardType);
        applyCardLocks(cardType);
        return;
    }

    // 4. UPSC detail page
    if (isUpscDetailPage(path)) {
        if (canAccessUpscDetail()) {
            unlockPage();
            console.log('💜 dv-lock: UPSC — UNLOCKED');
        } else {
            lockPage('upsc');
            console.log('💜 dv-lock: UPSC — LOCKED');
        }
        return;
    }

    // 5. Landscape detail page
    if (isLandscapeDetailPage(path)) {
        if (canAccessLandscapeDetail()) {
            unlockPage();
            console.log('💜 dv-lock: Landscape — UNLOCKED');
        } else {
            lockPage('pro');
            console.log('💜 dv-lock: Landscape — LOCKED');
        }
        return;
    }

    // 6. Encyclopedia content
    if (isEncyclopediaContentPage(path)) {
        if (canAccessEncyclopedia()) {
            unlockPage();
            console.log('💜 dv-lock: Encyclopedia — UNLOCKED');
        } else {
            lockPage('pro');
            console.log('💜 dv-lock: Encyclopedia — LOCKED');
        }
        return;
    }

    // 7. Default — free
    console.log('💜 dv-lock: Default free');
}

// ==========================================
// STYLES
// ==========================================

var style = document.createElement('style');
style.textContent =

    // Card overlay — purple with earth icon
    '.dvl-card-overlay{' +
        'position:absolute;inset:0;' +
        'display:flex;align-items:center;justify-content:center;' +
        'background:linear-gradient(135deg,rgba(100,65,165,0.92),rgba(74,45,122,0.95));' +
        'backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);' +
        'z-index:10;cursor:pointer;border-radius:inherit;' +
        'transition:all 0.3s ease;' +
        'border:1px solid rgba(155,89,182,0.3);' +
    '}' +

    '.dvl-card-overlay:hover{' +
        'background:linear-gradient(135deg,rgba(155,89,182,0.95),rgba(100,65,165,0.98));' +
        'box-shadow:0 0 30px rgba(155,89,182,0.4);' +
    '}' +

    '.dvl-card-inner{text-align:center;color:white;padding:16px;}' +

    '.dvl-card-earth{' +
        'font-size:36px;margin-bottom:8px;' +
        'animation:dvlFloat 3s ease-in-out infinite;' +
        'display:block;' +
    '}' +

    '@keyframes dvlFloat{' +
        '0%,100%{transform:translateY(0);}' +
        '50%{transform:translateY(-6px);}' +
    '}' +

    '.dvl-card-text{' +
        'font-size:14px;font-weight:700;color:white;' +
        'margin:0 0 4px;font-family:Inter,sans-serif;' +
    '}' +

    '.dvl-card-sub{' +
        'font-size:11px;color:rgba(255,255,255,0.7);' +
        'margin:0;font-family:Inter,sans-serif;' +
    '}' +

    // Counter bar
    '.dvl-counter-bar{' +
        'background:linear-gradient(135deg,rgba(100,65,165,0.15),rgba(74,45,122,0.1));' +
        'border:1px solid rgba(155,89,182,0.3);' +
        'border-radius:16px;padding:16px 20px;' +
        'margin:16px 0;display:flex;' +
        'align-items:center;justify-content:space-between;' +
        'flex-wrap:wrap;gap:12px;font-family:Inter,sans-serif;' +
    '}' +

    '.dvl-counter-text{font-size:13px;color:rgba(255,255,255,0.7);}' +
    '.dvl-counter-locked{color:#C084FC;font-weight:600;}' +

    '.dvl-counter-btn{' +
        'display:inline-block;padding:8px 20px;' +
        'background:linear-gradient(135deg,#6441A5,#4A2D7A);' +
        'color:white;text-decoration:none;' +
        'border-radius:50px;font-size:12px;font-weight:700;' +
        'font-family:Inter,sans-serif;white-space:nowrap;' +
        'transition:transform 0.3s;' +
    '}' +

    '.dvl-counter-btn:hover{transform:translateY(-2px);}' +

    '.dvl-counter-progress{' +
        'width:100%;height:4px;' +
        'background:rgba(255,255,255,0.1);' +
        'border-radius:2px;margin-top:8px;' +
    '}' +

    '.dvl-counter-fill{' +
        'height:100%;' +
        'background:linear-gradient(90deg,#6441A5,#C084FC);' +
        'border-radius:2px;' +
    '}' +

    // BTS Popup
    '#dvl-bts-popup{' +
        'position:fixed;inset:0;z-index:99999;' +
        'display:flex;align-items:center;justify-content:center;' +
        'padding:20px;opacity:0;transition:opacity 0.3s;' +
    '}' +

    '#dvl-bts-popup.dvl-show{opacity:1;}' +

    '.dvl-popup-backdrop{' +
        'position:absolute;inset:0;' +
        'background:rgba(10,10,20,0.9);' +
        'backdrop-filter:blur(8px);' +
    '}' +

    '.dvl-popup-box{' +
        'position:relative;' +
        'background:linear-gradient(135deg,#1a0a2e,#2d1554);' +
        'border:1px solid rgba(155,89,182,0.4);' +
        'border-radius:28px;padding:44px 36px;' +
        'max-width:440px;width:100%;text-align:center;' +
        'color:white;overflow:hidden;' +
        'box-shadow:0 20px 60px rgba(100,65,165,0.4);' +
    '}' +

    '.dvl-popup-close{' +
        'position:absolute;top:16px;right:16px;' +
        'width:34px;height:34px;border:none;' +
        'background:rgba(255,255,255,0.1);color:white;' +
        'border-radius:50%;font-size:18px;cursor:pointer;' +
        'display:flex;align-items:center;justify-content:center;' +
        'font-family:Inter,sans-serif;transition:background 0.3s;' +
    '}' +

    '.dvl-popup-close:hover{background:rgba(255,255,255,0.2);}' +

    // Floating hearts
    '.dvl-hearts{' +
        'position:absolute;inset:0;pointer-events:none;overflow:hidden;' +
    '}' +

    '.dvl-heart{' +
        'position:absolute;top:-20px;' +
        'font-size:18px;opacity:0.6;' +
        'animation:dvlHeartFloat linear infinite;' +
    '}' +

    '@keyframes dvlHeartFloat{' +
        '0%{transform:translateY(0) rotate(0deg);opacity:0.6;}' +
        '100%{transform:translateY(500px) rotate(360deg);opacity:0;}' +
    '}' +

    '.dvl-popup-moon{font-size:40px;display:block;margin-bottom:8px;}' +

    '.dvl-popup-bts-title{' +
        'font-size:20px;font-weight:800;color:#C084FC;' +
        'margin:0 0 6px;font-family:Inter,sans-serif;' +
    '}' +

    '.dvl-popup-bts-sub{' +
        'font-size:13px;color:rgba(255,255,255,0.5);' +
        'margin:0 0 20px;font-family:Inter,sans-serif;' +
    '}' +

    '.dvl-popup-heading{' +
        'font-size:18px;font-weight:800;color:white;' +
        'margin:0 0 8px;font-family:Inter,sans-serif;' +
    '}' +

    '.dvl-popup-card-name{' +
        'font-size:13px;color:rgba(255,255,255,0.5);' +
        'font-style:italic;margin:0 0 12px;font-family:Inter,sans-serif;' +
    '}' +

    '.dvl-popup-desc{' +
        'font-size:14px;color:rgba(255,255,255,0.7);' +
        'margin:0 0 6px;font-family:Inter,sans-serif;' +
    '}' +

    '.dvl-popup-price{' +
        'font-size:13px;color:#FFD700;font-weight:700;' +
        'margin:0 0 20px;font-family:Inter,sans-serif;' +
    '}' +

    '.dvl-popup-btn-primary{' +
        'display:block;padding:14px 32px;' +
        'background:linear-gradient(135deg,#6441A5,#9B59B6);' +
        'color:white;text-decoration:none;' +
        'border-radius:50px;font-size:15px;font-weight:700;' +
        'margin-bottom:10px;font-family:Inter,sans-serif;' +
        'transition:transform 0.3s;' +
        'box-shadow:0 8px 25px rgba(100,65,165,0.4);' +
    '}' +

    '.dvl-popup-btn-primary:hover{transform:translateY(-2px);}' +

    '.dvl-popup-btn-secondary{' +
        'display:block;font-size:13px;' +
        'color:rgba(255,255,255,0.5);text-decoration:none;' +
        'padding:10px;font-family:Inter,sans-serif;' +
        'transition:color 0.3s;' +
    '}' +

    '.dvl-popup-btn-secondary:hover{color:#C084FC;}' +

    '.dvl-popup-counter{' +
        'font-size:11px;color:rgba(255,255,255,0.3);' +
        'margin:10px 0 0;font-family:Inter,sans-serif;' +
    '}' +

    // Page lock overlay
    '#dvl-page-overlay{' +
        'position:fixed;inset:0;z-index:99998;' +
        'background:linear-gradient(135deg,rgba(10,0,21,0.98),rgba(26,10,46,0.98));' +
        'display:flex;align-items:center;justify-content:center;' +
        'padding:20px;' +
    '}' +

    '.dvl-page-box{' +
        'background:linear-gradient(135deg,#1a0a2e,#2d1554);' +
        'border:1px solid rgba(155,89,182,0.4);' +
        'border-radius:28px;padding:48px 40px;' +
        'max-width:480px;width:100%;text-align:center;' +
        'color:white;' +
        'box-shadow:0 20px 60px rgba(100,65,165,0.4);' +
    '}' +

    '.dvl-page-earth{font-size:52px;display:block;margin-bottom:12px;}' +

    '.dvl-page-badge{' +
        'display:inline-block;' +
        'background:linear-gradient(135deg,#6441A5,#9B59B6);' +
        'color:white;padding:5px 16px;border-radius:50px;' +
        'font-size:11px;font-weight:700;letter-spacing:1px;' +
        'margin-bottom:16px;font-family:Inter,sans-serif;' +
    '}' +

    '.dvl-page-heading{' +
        'font-size:26px;font-weight:800;color:white;' +
        'margin:16px 0 10px;font-family:Inter,sans-serif;' +
    '}' +

    '.dvl-page-desc{' +
        'font-size:15px;color:rgba(255,255,255,0.7);' +
        'margin:0 0 8px;font-family:Inter,sans-serif;' +
    '}' +

    '.dvl-page-login{' +
        'display:block;font-size:12px;' +
        'color:rgba(255,255,255,0.3);text-decoration:none;' +
        'margin-top:12px;font-family:Inter,sans-serif;' +
    '}' +

    '.dvl-page-login:hover{color:#C084FC;}' +

    // Body locked
    '.dvl-page-locked{overflow:hidden;}' +

    // Mobile
    '@media(max-width:600px){' +
        '.dvl-popup-box,.dvl-page-box{padding:32px 22px;}' +
        '.dvl-counter-bar{flex-direction:column;text-align:center;}' +
    '}';

document.head.appendChild(style);

// ==========================================
// START
// ==========================================

function start() {
    function run() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
        } else {
            init();
        }
    }

    if (window.premiumCheck) {
        run();
    } else {
        var fired = false;

        window.addEventListener('dvCoreReady', function() {
            var attempts = 0;
            var poll = setInterval(function() {
                attempts++;
                if (window.premiumCheck) {
                    clearInterval(poll);
                    if (!fired) { fired = true; run(); }
                }
                if (attempts > 100) clearInterval(poll);
            }, 100);
        });

        var fb = 0;
        var fallback = setInterval(function() {
            fb++;
            if (window.premiumCheck) {
                clearInterval(fallback);
                if (!fired) { fired = true; run(); }
            }
            if (fb > 150) clearInterval(fallback);
        }, 100);
    }
}

// ==========================================
// PUBLIC API
// ==========================================

window.DVLock = {
    version:     '1.0',
    getPlan:     function() { return _plan; },
    getLevel:    function() { return getLevel(); },
    isPremium:   function() { return _plan !== 'free'; },
    refresh:     init,
    showPopup:   showBTSPopup
};

// Legacy support
window.DharaversePremium = {
    version:  '5.0-dvlock',
    isPremium: function() { return _plan !== 'free'; },
    isLocked:  function() { return false; },
    check:     function() {},
    getPlan:   function() { return _plan; }
};

start();

console.log('✅ dv-lock loaded 💜');

})();
