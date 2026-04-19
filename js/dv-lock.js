// ============================================
// /js/dv-lock.js
// DharaVerse — Complete Plan-Based Lock System
// Replaces: premium-wrapper.js (old broken system)
// Version: 1.0
// ============================================

(function () {
    'use strict';

    // ==========================================
    // PLAN DEFINITIONS
    // ==========================================

    var PLANS = {
        free:     0,
        games:    1,
        upsc:     2,
        pro:      3,
        ultimate: 4
    };

    var PRICING = {
        games:    { monthly: 49,   yearly: 299  },
        upsc:     { monthly: 99,   yearly: 799  },
        pro:      { monthly: 149,  yearly: 1399 },
        ultimate: { monthly: 399,  yearly: 2100 }
    };

    // ==========================================
    // FREE CARD LIMITS
    // ==========================================

    var FREE_LIMITS = {
        landscape: 7,
        games:     3,
        upsc:      3
    };

    // ==========================================
    // PAGE CLASSIFICATION
    // ==========================================

    // These pages are completely free — no locking at all
    var FULLY_FREE_PAGES = [
        '/',
        '/index.html',
        '/auth.html',
        '/auth-new.html',
        '/pricing.html',
        '/contact.html',
        '/payment-success.html',
        '/payment-failed.html',
        '/dashboard.html',
        '/user-dashboard.html',
        '/admin-login.html',
        '/admin-dashboard.html',
        '/legal/privacy-policy.html',
        '/legal/terms-and-conditions.html',
        '/africa.html',
        '/asia.html',
        '/europe.html',
        '/australia.html',
        '/north-america.html',
        '/south-america.html',
        '/antarctica.html',
        '/atlas/atlas.html',
        '/atlas.html',
        '/kids-zone.html',
        '/junior-zone.html',
        '/teen-zone.html',
        '/spin-globe.html',
        '/mystery.html',
        '/timeline/index.html',
        '/timeline.html',
        '/timeline-part1.html',
        '/timeline-part2.html',
        '/timeline-part3.html',
        '/encyclopedia/bts.html',
        '/encyclopedia/earth-simulator.html'
    ];

    // These pages show cards — first N free, rest locked
    var CARD_LOCK_PAGES = {
        // path-match → page type
        '/mountains/mountains.html': 'landscape',
        '/rivers/rivers.html':       'landscape',
        '/lakes/lakes.html':         'landscape',
        '/oceans/oceans.html':       'landscape',
        '/oceans/seas.html':         'landscape',
        '/islands/islands.html':     'landscape',
        '/volcanoes/volcanoes.html': 'landscape',
        '/deserts/deserts.html':     'landscape',
        '/forests/forests.html':     'landscape',
        '/coral-reefs/coral-reefs.html': 'landscape',
        '/games/games.html':         'games',
        '/games.html':               'games',
        '/upsc/upsc.html':           'upsc'
    };

    // Encyclopedia index pages — free
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

    // ==========================================
    // BTS MESSAGES 💜
    // ==========================================

    var BTS_MESSAGES = [
        { title: "Keep Swimming! 🌊",           subtitle: "The ocean of knowledge awaits 💜" },
        { title: "Dream, Believe, Achieve! ✨",  subtitle: "Unlock your potential 💜" },
        { title: "Purple You! 보라해 💜",         subtitle: "We believe in your dreams" },
        { title: "Magic Shop Awaits! ✨",         subtitle: "Unlock all wonders 💜" },
        { title: "Beyond The Scene! 🌟",          subtitle: "Go beyond with premium 💜" },
        { title: "Mikrokosmos! 🌌",               subtitle: "You are a shining star 💜" },
        { title: "Life Goes On! 🌿",              subtitle: "Keep exploring, go premium 💜" },
        { title: "Yet To Come! 🎶",               subtitle: "The best is yet to come 💜" },
        { title: "Permission to Dance! 💃",       subtitle: "Dance into full access 💜" },
        { title: "Euphoria! 🦋",                  subtitle: "Feel the euphoria of learning 💜" }
    ];

    function getRandomBTS() {
        return BTS_MESSAGES[Math.floor(Math.random() * BTS_MESSAGES.length)];
    }

    // ==========================================
    // GET CURRENT PATH
    // ==========================================

    function getPath() {
        var p = window.location.pathname.toLowerCase();
        if (p !== '/' && p.endsWith('/')) p = p.slice(0, -1);
        return p;
    }

    // ==========================================
    // GET CURRENT PLAN FROM SUPABASE
    // ==========================================

    var _currentPlan = 'free';
    var _planLoaded  = false;
    var _onReadyCbs  = [];

    async function loadPlan() {
        try {
            if (!window.premiumCheck) return;
            var status   = await window.premiumCheck.getPremiumStatus();
            _currentPlan = status.plan || 'free';
            _planLoaded  = true;
            console.log('💜 dv-lock: Plan loaded:', _currentPlan);

            // Run queued callbacks
            _onReadyCbs.forEach(function(fn) {
                try { fn(_currentPlan); } catch(e) {}
            });
            _onReadyCbs = [];

        } catch(e) {
            console.warn('dv-lock: Plan load failed:', e.message);
            _currentPlan = 'free';
            _planLoaded  = true;
        }
    }

    function getPlanLevel() {
        return PLANS[_currentPlan] || 0;
    }

    // ==========================================
    // PAGE TYPE DETECTION
    // ==========================================

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
        var landscapePrefixes = [
            '/mountains/', '/rivers/', '/lakes/',
            '/oceans/', '/islands/', '/volcanoes/',
            '/deserts/', '/forests/', '/coral-reefs/'
        ];
        for (var i = 0; i < landscapePrefixes.length; i++) {
            if (path.includes(landscapePrefixes[i])) {
                // It's in a landscape folder
                // Check it's NOT the index page
                var indexPages = [
                    'mountains.html', 'rivers.html', 'lakes.html',
                    'oceans.html', 'seas.html', 'islands.html',
                    'volcanoes.html', 'deserts.html', 'forests.html',
                    'coral-reefs.html'
                ];
                var isIndex = false;
                for (var j = 0; j < indexPages.length; j++) {
                    if (path.endsWith(indexPages[j])) {
                        isIndex = true;
                        break;
                    }
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
    // ACCESS CHECKING
    // ==========================================

    function canAccessLandscapeDetail() {
        // Pro + Ultimate only
        return getPlanLevel() >= PLANS.pro;
    }

    function canAccessUpscDetail() {
        // UPSC + Ultimate only (NOT Pro)
        return _currentPlan === 'upsc' || _currentPlan === 'ultimate';
    }

    function canAccessEncyclopedia() {
        // Pro + Ultimate only
        return getPlanLevel() >= PLANS.pro;
    }

    function canAccessGamesCards() {
        // Games + Pro + Ultimate
        return _currentPlan === 'games' ||
               getPlanLevel() >= PLANS.pro;
    }

    function canAccessUpscCards() {
        // UPSC + Ultimate only
        return _currentPlan === 'upsc' || _currentPlan === 'ultimate';
    }

    function canAccessLandscapeCards() {
        // Pro + Ultimate only
        return getPlanLevel() >= PLANS.pro;
    }

    // ==========================================
    // UPGRADE POPUP
    // ==========================================

    function getRequiredPlanText(lockType) {
        if (lockType === 'upsc') {
            return {
                plan:  'UPSC Plan',
                price: '₹99/month or ₹799/year',
                link:  '/pricing.html'
            };
        }
        if (lockType === 'games') {
            return {
                plan:  'Games Plan',
                price: '₹49/month or ₹299/year',
                link:  '/pricing.html'
            };
        }
        if (lockType === 'pro') {
            return {
                plan:  'Pro Plan',
                price: '₹149/month or ₹1399/year',
                link:  '/pricing.html'
            };
        }
        return {
            plan:  'Premium Plan',
            price: 'Starting ₹49/month',
            link:  '/pricing.html'
        };
    }

    function showUpgradePopup(lockType, cardName) {
        var existing = document.getElementById('dv-lock-popup');
        if (existing) existing.remove();

        var bts  = getRandomBTS();
        var info = getRequiredPlanText(lockType);

        var popup = document.createElement('div');
        popup.id  = 'dv-lock-popup';
        popup.innerHTML =
            '<div class="dvl-backdrop"></div>' +
            '<div class="dvl-box">' +
                '<button class="dvl-close" ' +
                    'onclick="document.getElementById(\'dv-lock-popup\').remove()">×</button>' +
                '<div class="dvl-emoji">🔒</div>' +
                '<p class="dvl-bts-title">' + bts.title + '</p>' +
                '<p class="dvl-bts-sub">' + bts.subtitle + '</p>' +
                '<h3 class="dvl-heading">Premium Content</h3>' +
                (cardName
                    ? '<p class="dvl-card-name">"' + cardName + '"</p>'
                    : '') +
                '<p class="dvl-desc">This content requires <strong>' +
                    info.plan + '</strong></p>' +
                '<p class="dvl-price">' + info.price + '</p>' +
                '<a href="' + info.link + '" class="dvl-btn-primary">' +
                    '👑 Unlock with ' + info.plan +
                '</a>' +
                '<a href="/auth-new.html" class="dvl-btn-secondary">' +
                    'Already subscribed? Log in 보라해 💜' +
                '</a>' +
            '</div>';

        document.body.appendChild(popup);

        requestAnimationFrame(function() {
            popup.classList.add('dvl-show');
        });

        popup.querySelector('.dvl-backdrop')
            .addEventListener('click', function() {
                popup.remove();
            });

        document.addEventListener('keydown', function escHandler(e) {
            if (e.key === 'Escape') {
                popup.remove();
                document.removeEventListener('keydown', escHandler);
            }
        });
    }

    // ==========================================
    // PAGE-LEVEL LOCK
    // ==========================================

    function lockPage(lockType) {
        if (document.getElementById('dvl-page-overlay')) return;

        document.body.classList.add('dvl-page-locked');

        var bts  = getRandomBTS();
        var info = getRequiredPlanText(lockType);

        var overlay = document.createElement('div');
        overlay.id  = 'dvl-page-overlay';
        overlay.innerHTML =
            '<div class="dvl-page-box">' +
                '<span class="dvl-page-icon">🔒</span>' +
                '<span class="dvl-page-badge">★ PREMIUM</span>' +
                '<p class="dvl-bts-title">' + bts.title + '</p>' +
                '<p class="dvl-bts-sub">' + bts.subtitle + '</p>' +
                '<h2 class="dvl-page-heading">Unlock Full Access</h2>' +
                '<p class="dvl-page-desc">' +
                    'This content requires <strong>' + info.plan + '</strong>' +
                '</p>' +
                '<p class="dvl-price">' + info.price + '</p>' +
                '<a href="' + info.link + '" class="dvl-btn-primary">' +
                    '🌟 Get ' + info.plan +
                '</a>' +
                '<a href="/" class="dvl-btn-secondary">← Back to Home</a>' +
                '<a href="/auth-new.html" class="dvl-btn-login">' +
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
    // CARD-LEVEL LOCKING
    // ==========================================

    var _cardsLocked = false;

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

        var freeLimit = FREE_LIMITS[pageType] || 7;

        // Check if user can access beyond free limit
        var canUnlockAll = false;
        if (pageType === 'games')     canUnlockAll = canAccessGamesCards();
        if (pageType === 'upsc')      canUnlockAll = canAccessUpscCards();
        if (pageType === 'landscape') canUnlockAll = canAccessLandscapeCards();

        var lockType = pageType === 'games'     ? 'games' :
                       pageType === 'upsc'      ? 'upsc'  : 'pro';

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

                var overlay = document.createElement('div');
                overlay.className = 'dvl-card-overlay';

                var cardName = '';
                var nameEl = card.querySelector(
                    'h2, h3, h4, .card-title, .name, .title'
                );
                if (nameEl) cardName = nameEl.textContent.trim();

                overlay.innerHTML =
                    '<div class="dvl-card-inner">' +
                        '<span class="dvl-card-icon">🔒</span>' +
                        '<p class="dvl-card-text">Premium</p>' +
                        '<p class="dvl-card-sub">Tap to unlock 💜</p>' +
                    '</div>';

                var badge = document.createElement('span');
                badge.className   = 'dvl-card-badge';
                badge.textContent = '★ PRO';

                card.appendChild(overlay);
                card.appendChild(badge);

                // Click handlers
                var clickFn = function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    showUpgradePopup(lockType, cardName);
                };

                overlay.addEventListener('click', clickFn);
                card.addEventListener('click', function(e) {
                    if (card.classList.contains('dvl-locked')) clickFn(e);
                });

                if (card.tagName === 'A') {
                    card.addEventListener('click', function(e) {
                        if (card.classList.contains('dvl-locked')) {
                            e.preventDefault();
                        }
                    });
                }

                card.querySelectorAll('a').forEach(function(link) {
                    link.addEventListener('click', function(e) {
                        if (card.classList.contains('dvl-locked')) {
                            e.preventDefault();
                            e.stopPropagation();
                            showUpgradePopup(lockType, cardName);
                        }
                    });
                });
            }
        });

        // Add counter bar if anything locked
        if (lockedCount > 0) {
            addCounterBar(unique.length, freeLimit, lockedCount, pageType);
        }

        _cardsLocked = true;

        console.log(
            '💜 dv-lock: Cards locked |',
            pageType, '|',
            freeLimit, 'free |',
            lockedCount, 'locked'
        );
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
            if (attempts >= 50) { clearInterval(interval); }
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

        observer.observe(document.body, {
            childList: true,
            subtree:   true
        });
    }

    // ==========================================
    // COUNTER BAR
    // ==========================================

    function addCounterBar(total, free, locked, pageType) {
        if (document.querySelector('.dvl-counter-bar')) return;

        var pct      = Math.round((free / total) * 100);
        var typeLabel = pageType === 'games'     ? 'Games' :
                        pageType === 'upsc'      ? 'UPSC Topics' :
                        'Landscapes';

        var planText  = pageType === 'games'     ? 'Games Plan ₹49/mo' :
                        pageType === 'upsc'      ? 'UPSC Plan ₹99/mo'  :
                        'Pro Plan ₹149/mo';

        var bar = document.createElement('div');
        bar.className = 'dvl-counter-bar';
        bar.innerHTML =
            '<div class="dvl-counter-text">' +
                '🌍 <strong>' + free + '</strong> of ' + total + ' ' +
                typeLabel + ' free • ' +
                '<span class="dvl-counter-locked">' +
                    locked + ' locked 💜' +
                '</span>' +
            '</div>' +
            '<a href="/pricing.html" class="dvl-counter-btn">' +
                '🔓 Unlock All — ' + planText +
            '</a>' +
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
            var target = document.querySelector(targets[i]);
            if (target) {
                target.insertBefore(bar, target.firstChild);
                inserted = true;
                break;
            }
        }

        if (!inserted) document.body.insertBefore(bar, document.body.firstChild);
    }

    // ==========================================
    // MAIN INIT
    // ==========================================

    async function init() {
        var path = getPath();

        console.log('💜 dv-lock v1.0 |', path);

        // Load plan from Supabase
        await loadPlan();

        var plan  = _currentPlan;
        var level = getPlanLevel();

        // 1. Fully free page — do nothing
        if (isFullyFreePage(path)) {
            console.log('💜 dv-lock: Fully free page');
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
            console.log('💜 dv-lock: Card lock page —', cardType);
            applyCardLocks(cardType);
            return;
        }

        // 4. UPSC detail page
        if (isUpscDetailPage(path)) {
            if (canAccessUpscDetail()) {
                unlockPage();
                console.log('💜 dv-lock: UPSC detail — UNLOCKED');
            } else {
                lockPage('upsc');
                console.log('💜 dv-lock: UPSC detail — LOCKED');
            }
            return;
        }

        // 5. Landscape detail page
        if (isLandscapeDetailPage(path)) {
            if (canAccessLandscapeDetail()) {
                unlockPage();
                console.log('💜 dv-lock: Landscape detail — UNLOCKED');
            } else {
                lockPage('pro');
                console.log('💜 dv-lock: Landscape detail — LOCKED');
            }
            return;
        }

        // 6. Encyclopedia content page
        if (isEncyclopediaContentPage(path)) {
            if (canAccessEncyclopedia()) {
                unlockPage();
                console.log('💜 dv-lock: Encyclopedia content — UNLOCKED');
            } else {
                lockPage('pro');
                console.log('💜 dv-lock: Encyclopedia content — LOCKED');
            }
            return;
        }

        // 7. Everything else — free
        console.log('💜 dv-lock: Default free page');
    }

    // ==========================================
    // STYLES
    // ==========================================

    var style = document.createElement('style');
    style.textContent =

        // Page lock overlay
        '#dvl-page-overlay{' +
            'position:fixed;inset:0;z-index:99999;' +
            'background:rgba(10,0,21,0.97);' +
            'display:flex;align-items:center;justify-content:center;' +
            'padding:20px;' +
        '}' +

        '.dvl-page-box{' +
            'background:linear-gradient(135deg,#110022,#1a0033);' +
            'border:1px solid rgba(124,58,237,0.4);' +
            'border-radius:24px;padding:48px 40px;' +
            'max-width:480px;width:100%;text-align:center;color:white;' +
        '}' +

        '.dvl-page-icon{font-size:48px;display:block;margin-bottom:12px;}' +

        '.dvl-page-badge{' +
            'display:inline-block;' +
            'background:linear-gradient(135deg,#7C3AED,#C084FC);' +
            'color:white;padding:4px 16px;border-radius:50px;' +
            'font-size:11px;font-weight:700;letter-spacing:1px;' +
            'margin-bottom:16px;' +
        '}' +

        '.dvl-bts-title{' +
            'font-size:18px;font-weight:800;color:#C084FC;margin:0 0 4px;' +
        '}' +

        '.dvl-bts-sub{' +
            'font-size:13px;color:rgba(255,255,255,0.5);margin:0 0 20px;' +
        '}' +

        '.dvl-page-heading{' +
            'font-size:26px;font-weight:800;color:white;margin:0 0 12px;' +
        '}' +

        '.dvl-page-desc{' +
            'font-size:15px;color:rgba(255,255,255,0.7);margin:0 0 8px;' +
        '}' +

        '.dvl-price{' +
            'font-size:14px;color:#FFD700;font-weight:700;margin:0 0 24px;' +
        '}' +

        '.dvl-btn-primary{' +
            'display:block;padding:14px 32px;' +
            'background:linear-gradient(135deg,#FFD700,#FFA500);' +
            'color:#0a0015;text-decoration:none;' +
            'border-radius:50px;font-size:15px;font-weight:700;' +
            'margin-bottom:12px;transition:transform 0.3s;' +
        '}' +

        '.dvl-btn-primary:hover{transform:translateY(-2px);}' +

        '.dvl-btn-secondary{' +
            'display:block;padding:12px 32px;' +
            'background:rgba(255,255,255,0.05);' +
            'color:rgba(255,255,255,0.6);text-decoration:none;' +
            'border-radius:50px;font-size:13px;' +
            'margin-bottom:8px;border:1px solid rgba(255,255,255,0.1);' +
        '}' +

        '.dvl-btn-login{' +
            'display:block;font-size:12px;' +
            'color:rgba(255,255,255,0.3);text-decoration:none;' +
            'margin-top:8px;' +
        '}' +

        '.dvl-btn-login:hover{color:#C084FC;}' +

        // Popup
        '#dv-lock-popup{' +
            'position:fixed;inset:0;z-index:99999;' +
            'display:flex;align-items:center;justify-content:center;' +
            'padding:20px;opacity:0;transition:opacity 0.3s;' +
        '}' +

        '#dv-lock-popup.dvl-show{opacity:1;}' +

        '.dvl-backdrop{' +
            'position:absolute;inset:0;' +
            'background:rgba(0,0,0,0.8);backdrop-filter:blur(4px);' +
        '}' +

        '.dvl-box{' +
            'position:relative;' +
            'background:linear-gradient(135deg,#110022,#1a0033);' +
            'border:1px solid rgba(124,58,237,0.4);' +
            'border-radius:24px;padding:40px;' +
            'max-width:420px;width:100%;text-align:center;color:white;' +
        '}' +

        '.dvl-close{' +
            'position:absolute;top:16px;right:16px;' +
            'width:32px;height:32px;border:none;' +
            'background:rgba(255,255,255,0.1);color:white;' +
            'border-radius:50%;font-size:20px;cursor:pointer;' +
            'display:flex;align-items:center;justify-content:center;' +
        '}' +

        '.dvl-emoji{font-size:40px;margin-bottom:12px;}' +

        '.dvl-heading{' +
            'font-size:20px;font-weight:800;color:white;margin:12px 0 8px;' +
        '}' +

        '.dvl-card-name{' +
            'font-size:13px;color:rgba(255,255,255,0.5);' +
            'font-style:italic;margin:0 0 12px;' +
        '}' +

        '.dvl-desc{' +
            'font-size:14px;color:rgba(255,255,255,0.7);margin:0 0 8px;' +
        '}' +

        // Card lock overlay
        '.dvl-card-overlay{' +
            'position:absolute;inset:0;' +
            'display:flex;align-items:center;justify-content:center;' +
            'background:rgba(10,0,21,0.85);' +
            'backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);' +
            'z-index:10;cursor:pointer;border-radius:inherit;' +
            'transition:background 0.3s;' +
        '}' +

        '.dvl-card-overlay:hover{background:rgba(124,58,237,0.5);}' +

        '.dvl-card-inner{text-align:center;color:white;}' +

        '.dvl-card-icon{font-size:26px;display:block;margin-bottom:4px;}' +

        '.dvl-card-text{' +
            'font-size:13px;font-weight:700;color:white;margin:0 0 2px;' +
        '}' +

        '.dvl-card-sub{' +
            'font-size:11px;color:rgba(255,255,255,0.6);margin:0;' +
        '}' +

        '.dvl-card-badge{' +
            'position:absolute;top:8px;right:8px;' +
            'background:linear-gradient(135deg,#7C3AED,#C084FC);' +
            'color:white;padding:3px 8px;border-radius:20px;' +
            'font-size:10px;font-weight:700;z-index:11;' +
        '}' +

        // Counter bar
        '.dvl-counter-bar{' +
            'background:linear-gradient(135deg,#110022,#1a0033);' +
            'border:1px solid rgba(124,58,237,0.3);' +
            'border-radius:16px;padding:16px 20px;' +
            'margin:16px 0;display:flex;' +
            'align-items:center;justify-content:space-between;' +
            'flex-wrap:wrap;gap:12px;' +
        '}' +

        '.dvl-counter-text{' +
            'font-size:13px;color:rgba(255,255,255,0.7);' +
        '}' +

        '.dvl-counter-locked{color:#C084FC;font-weight:600;}' +

        '.dvl-counter-btn{' +
            'display:inline-block;padding:8px 20px;' +
            'background:linear-gradient(135deg,#7C3AED,#9D5FF5);' +
            'color:white;text-decoration:none;' +
            'border-radius:50px;font-size:12px;font-weight:700;' +
            'white-space:nowrap;' +
        '}' +

        '.dvl-counter-progress{' +
            'width:100%;height:4px;' +
            'background:rgba(255,255,255,0.1);' +
            'border-radius:2px;margin-top:8px;' +
        '}' +

        '.dvl-counter-fill{' +
            'height:100%;' +
            'background:linear-gradient(90deg,#7C3AED,#C084FC);' +
            'border-radius:2px;' +
        '}' +

        // Page locked body
        '.dvl-page-locked{overflow:hidden;}' +

        // Mobile
        '@media(max-width:600px){' +
            '.dvl-page-box,.dvl-box{padding:32px 24px;}' +
            '.dvl-counter-bar{flex-direction:column;text-align:center;}' +
        '}';

    document.head.appendChild(style);

    // ==========================================
    // START
    // ==========================================

    function start() {
        if (window.premiumCheck) {
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', init);
            } else {
                init();
            }
        } else {
            window.addEventListener('dvCoreReady', function() {
                var attempts = 0;
                var poll = setInterval(function() {
                    attempts++;
                    if (window.premiumCheck) {
                        clearInterval(poll);
                        if (document.readyState === 'loading') {
                            document.addEventListener('DOMContentLoaded', init);
                        } else {
                            init();
                        }
                    }
                    if (attempts > 100) { clearInterval(poll); }
                }, 100);
            });
        }
    }

    // ==========================================
    // PUBLIC API
    // ==========================================

    window.DVLock = {
        version:    '1.0',
        getPlan:    function() { return _currentPlan; },
        getLevel:   function() { return getPlanLevel(); },
        isPremium:  function() { return _currentPlan !== 'free'; },
        refresh:    init,
        showUpgrade: showUpgradePopup
    };

    start();

    console.log('✅ dv-lock loaded');

})();
