// ========================================
// 💜 PREMIUM WRAPPER - DHARAVERSE FINAL
// ========================================

(function() {
    'use strict';

    console.log('💜 Premium Wrapper Loading...');

    // ==========================================
    // FREE IDs FOR PROFILE PAGES
    // First N items from each category
    // These MUST match exactly what appears in
    // the ?id= parameter of profile URLs
    // ==========================================

    var FREE_PROFILE_IDS = {
        mountains: [
            'mount-everest', 'k2', 'kangchenjunga',
            'lhotse', 'makalu', 'cho-oyu', 'dhaulagiri'
        ],
        rivers: [
            'amazon', 'nile', 'yangtze',
            'mississippi', 'yenisei', 'yellow-river', 'ob-river'
        ],
        lakes: [
            'caspian-sea', 'lake-superior', 'lake-victoria',
            'lake-huron', 'lake-michigan', 'lake-tanganyika', 'lake-baikal'
        ],
        oceans: [
            'pacific-ocean', 'atlantic-ocean'
        ],
        deserts: [
            'sahara', 'arabian-desert', 'gobi-desert',
            'patagonian-desert', 'great-victoria-desert',
            'syrian-desert', 'great-basin-desert'
        ],
        forests: [
            'amazon-rainforest', 'congo-rainforest', 'daintree-rainforest',
            'tongass-forest', 'valdivian-forest', 'sundarban-forest', 'taiga-forest'
        ],
        islands: [
            'greenland', 'new-guinea', 'borneo',
            'madagascar', 'baffin-island', 'sumatra', 'honshu'
        ],
        volcanoes: [
            'mauna-loa', 'mount-etna', 'mount-vesuvius',
            'krakatoa', 'mount-fuji', 'eyjafjallajokull', 'mount-pinatubo'
        ],
        'coral-reefs': [
            'great-barrier-reef', 'mesoamerican-reef', 'new-caledonia-reef',
            'andros-reef', 'red-sea-reef', 'pulley-ridge', 'florida-reef'
        ],
        upsc: [
            'physical-geography', 'human-geography', 'economic-geography'
        ],
        games: [
            'flagforge', 'geoblitz', 'geodetective'
        ]
    };

    // ==========================================
    // FREE LIMITS FOR GRID PAGES
    // ==========================================

    var FREE_LIMITS = {
        mountains: 7, rivers: 7, lakes: 7, oceans: 2,
        forests: 7, deserts: 7, volcanoes: 7, islands: 7,
        'coral-reefs': 7, upsc: 3, games: 3, atlas: 7
    };

    // ==========================================
    // BTS MESSAGES
    // ==========================================

    var BTS_MESSAGES = [
        { title: "Keep Swimming! 🌊",           subtitle: "The ocean of knowledge awaits 💜" },
        { title: "Dream, Believe, Achieve! ✨",  subtitle: "Unlock your potential 💜" },
        { title: "Purple You! 보라해 💜",         subtitle: "We believe in your dreams" },
        { title: "Magic Shop Awaits! ✨",         subtitle: "Unlock all wonders 💜" },
        { title: "Beyond The Scene! 🌟",          subtitle: "Go beyond with premium 💜" },
        { title: "You Are The Best! 🌸",          subtitle: "Best comes with premium 💜" },
        { title: "Life Goes On! 🌿",              subtitle: "Keep exploring, go premium 💜" },
        { title: "Dynamite! 💥",                  subtitle: "Explode into full knowledge 💜" },
        { title: "Butter! 🧈",                    subtitle: "Smooth access to everything 💜" },
        { title: "Run BTS! 🏃",                   subtitle: "Run towards all knowledge 💜" }
    ];

    // ==========================================
    // STATE
    // ==========================================

    var state = {
    pageType:           null,
    category:           null,
    freeItems:          [],
    observer:           null,
    styleInjected:      false,
    globalClickHandler: null,
    blurApplied:        false,
    lockingDone:        false  // ✅ ADD THIS
};

    // ==========================================
    // STEP 1: DETECT PAGE TYPE
    // This is the most important function.
    // It reads the URL and decides what to do.
    // ==========================================

    function detectPageType() {
        var path = window.location.pathname.toLowerCase();
        var url  = window.location.href.toLowerCase();

        // ── GRID PAGES ──
        if (path.endsWith('/mountains/mountains.html'))       return 'grid';
        if (path.endsWith('/rivers/rivers.html'))             return 'grid';
        if (path.endsWith('/lakes/lakes.html'))               return 'grid';
        if (path.endsWith('/oceans/oceans.html'))             return 'grid';
        if (path.endsWith('/oceans/seas.html'))               return 'grid';
        if (path.endsWith('/coral-reefs/coral-reefs.html'))   return 'grid';
        if (path.endsWith('/deserts/deserts.html'))           return 'grid';
        if (path.endsWith('/islands/islands.html'))           return 'grid';
        if (path.endsWith('/forests/forests.html'))           return 'grid';
        if (path.endsWith('/games/games.html'))               return 'grid';
        if (path.endsWith('/upsc/upsc.html'))                 return 'grid';
        if (path.endsWith('/atlas/atlas.html'))               return 'grid';
        if (path.endsWith('/encyclopedia/encyclopedia.html')) return 'grid';

        // ── PROFILE PAGES ──
        if (path.endsWith('/mountains/mountains-profile.html'))       return 'profile';
        if (path.endsWith('/rivers/rivers-profile.html'))             return 'profile';
        if (path.endsWith('/lakes/lakes-profile.html'))               return 'profile';
        if (path.endsWith('/oceans/oceans-profile.html'))             return 'profile';
        if (path.endsWith('/oceans/seas-profile.html'))               return 'profile';
        if (path.endsWith('/coral-reefs/coral-reefs-profile.html'))   return 'profile';
        if (path.endsWith('/deserts/deserts-profile.html'))           return 'profile';
        if (path.endsWith('/islands/islands-profile.html'))           return 'profile';
        if (path.endsWith('/forests/forests-profile.html'))           return 'profile';
        if (path.endsWith('/upsc/upsc-profile.html'))                 return 'profile';

        // ── ENCYCLOPEDIA BLUR PAGES ──
        // Everything inside /encyclopedia/ EXCEPT encyclopedia.html itself
        if (path.includes('/encyclopedia/') &&
            !path.endsWith('/encyclopedia/encyclopedia.html')) {
            return 'encyc-blur';
        }

        // ── FREE PAGES ──
        return 'free';
    }

    // ==========================================
    // STEP 2: DETECT CATEGORY
    // Works for both grid and profile pages
    // ==========================================

    function detectCategory() {
        var path = window.location.pathname.toLowerCase();

        if (path.includes('/mountains/'))   return 'mountains';
        if (path.includes('/rivers/'))      return 'rivers';
        if (path.includes('/lakes/'))       return 'lakes';
        if (path.includes('/oceans/'))      return 'oceans';
        if (path.includes('/coral-reefs/')) return 'coral-reefs';
        if (path.includes('/deserts/'))     return 'deserts';
        if (path.includes('/islands/'))     return 'islands';
        if (path.includes('/forests/'))     return 'forests';
        if (path.includes('/games/'))       return 'games';
        if (path.includes('/upsc/'))        return 'upsc';
        if (path.includes('/atlas/'))       return 'atlas';
        if (path.includes('/encyclopedia/')) return 'encyclopedia';

        return null;
    }

    // ==========================================
    // STEP 3: CHECK PREMIUM STATUS
    // ==========================================

    function isPremium() {
        var plan      = localStorage.getItem('dv_plan') || 'basic';
        var isAdmin   = localStorage.getItem('dv_admin');
        var adminTime = parseInt(localStorage.getItem('dv_admin_time') || '0');
        var adminOk   = isAdmin === 'true' &&
                       (Date.now() - adminTime) < 86400000;
        if (adminOk) return true;

        // Check expiry
        var expiry = localStorage.getItem('dv_plan_expiry');
        if (expiry && new Date(expiry) < new Date()) {
            localStorage.setItem('dv_plan', 'basic');
            localStorage.removeItem('dv_premium');
            return false;
        }

        var cat = detectCategory();

        if (plan === 'ultimate') return true;

        if (plan === 'pro') {
            // Pro = everything EXCEPT upsc
            if (cat === 'upsc') return false;
            return true;
        }

        if (plan === 'games' && cat === 'games') return true;
        if (plan === 'upsc'  && cat === 'upsc')  return true;

        // Old system fallback
        if (localStorage.getItem('geo_premium') === 'true') return true;
        if (localStorage.getItem('dv_premium') === 'true' &&
            plan !== 'basic') return true;

        return false;
    }

    // ==========================================
    // STEP 4: GET FREE LIMIT FOR CATEGORY
    // ==========================================

    function getFreeLimit(category) {
        var plan      = localStorage.getItem('dv_plan') || 'basic';
        var isAdmin   = localStorage.getItem('dv_admin');
        var adminTime = parseInt(localStorage.getItem('dv_admin_time') || '0');
        if (isAdmin === 'true' &&
           (Date.now() - adminTime) < 86400000) return 9999;

        var PLAN_LIMITS = {
            basic: {
                mountains: 7, rivers: 7, lakes: 7, oceans: 2,
                forests: 7, deserts: 7, volcanoes: 7, islands: 7,
                'coral-reefs': 7, upsc: 3, games: 3, atlas: 7,
                encyclopedia: 7
            },
            games: {
                mountains: 7, rivers: 7, lakes: 7, oceans: 2,
                forests: 7, deserts: 7, volcanoes: 7, islands: 7,
                'coral-reefs': 7, upsc: 3, games: 9999, atlas: 7,
                encyclopedia: 7
            },
            upsc: {
                mountains: 7, rivers: 7, lakes: 7, oceans: 2,
                forests: 7, deserts: 7, volcanoes: 7, islands: 7,
                'coral-reefs': 7, upsc: 9999, games: 3, atlas: 7,
                encyclopedia: 7
            },
            pro: {
                mountains: 9999, rivers: 9999, lakes: 9999, oceans: 9999,
                forests: 9999, deserts: 9999, volcanoes: 9999, islands: 9999,
                'coral-reefs': 9999, upsc: 0, games: 9999, atlas: 9999,
                encyclopedia: 9999
            },
            ultimate: {
                mountains: 9999, rivers: 9999, lakes: 9999, oceans: 9999,
                forests: 9999, deserts: 9999, volcanoes: 9999, islands: 9999,
                'coral-reefs': 9999, upsc: 9999, games: 9999, atlas: 9999,
                encyclopedia: 9999
            }
        };

        var limits = PLAN_LIMITS[plan] || PLAN_LIMITS.basic;
        return limits[category] !== undefined ? limits[category] : 7;
    }

    // ==========================================
    // STEP 5: CHECK IF PROFILE ID IS FREE
    // ==========================================

    function isProfileFree() {
        var params   = new URLSearchParams(window.location.search);
        var id       = params.get('id');
        var category = detectCategory();

        if (!id || !category) return false;

        var freeIds = FREE_PROFILE_IDS[category] || [];
        return freeIds.indexOf(id.toLowerCase()) !== -1;
    }

    // ==========================================
    // STEP 6: GLOBAL CLICK BLOCKER
    // ==========================================

    function installGlobalClickBlocker() {
        if (state.globalClickHandler) return;

        state.globalClickHandler = function(e) {
            var card = e.target.closest('.geo-locked-card');
            if (card) {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
                showUpgradeModal();
                return false;
            }
        };

        document.addEventListener('click', state.globalClickHandler, true);
        console.log('💜 Click blocker installed');
    }

    // ==========================================
    // STEP 7: INJECT ALL STYLES
    // ==========================================

    function injectStyles() {
        if (state.styleInjected) return;

        var style = document.createElement('style');
        style.id  = 'geo-premium-styles';
        style.textContent = `

            /* ══ FREE BADGE ══ */
            .geo-free-badge {
                position: absolute !important;
                top: 8px !important;
                left: 8px !important;
                background: linear-gradient(135deg, #22c55e, #16a34a) !important;
                color: white !important;
                padding: 4px 10px !important;
                border-radius: 15px !important;
                font-size: 10px !important;
                font-weight: bold !important;
                z-index: 999 !important;
                pointer-events: none !important;
            }

            /* ══ LOCKED CARD (grid) ══ */
            .geo-locked-card {
                position: relative !important;
                cursor: pointer !important;
                pointer-events: auto !important;
                overflow: hidden !important;
            }

            .geo-locked-card * {
                pointer-events: none !important;
            }

            /* ══ FREE CARD ══ */
            .geo-free-card {
                position: relative !important;
            }

            .geo-free-card * {
                pointer-events: auto !important;
            }

            /* ══ GIFT WRAP OVERLAY ══ */
            .geo-gift-overlay {
                position: absolute !important;
                inset: 0 !important;
                background: rgba(109,40,217,0.10) !important;
                z-index: 10 !important;
                pointer-events: none !important;
                border-radius: inherit !important;
            }

            /* ══ VERTICAL RIBBON ══ */
            .geo-ribbon-v {
                position: absolute !important;
                top: 0 !important;
                bottom: 0 !important;
                left: 50% !important;
                transform: translateX(-50%) !important;
                width: 22px !important;
                background: linear-gradient(180deg,
                    #4c1d95,#7c3aed,#a855f7,
                    #c084fc,#a855f7,#7c3aed,#4c1d95
                ) !important;
                box-shadow:
                     2px 0 8px rgba(124,58,237,0.5),
                    -2px 0 8px rgba(124,58,237,0.5) !important;
                z-index: 11 !important;
                pointer-events: none !important;
            }

            /* ══ HORIZONTAL RIBBON ══ */
            .geo-ribbon-h {
                position: absolute !important;
                left: 0 !important;
                right: 0 !important;
                top: 50% !important;
                transform: translateY(-50%) !important;
                height: 22px !important;
                background: linear-gradient(90deg,
                    #4c1d95,#7c3aed,#a855f7,
                    #c084fc,#a855f7,#7c3aed,#4c1d95
                ) !important;
                box-shadow:
                    0  2px 8px rgba(124,58,237,0.5),
                    0 -2px 8px rgba(124,58,237,0.5) !important;
                z-index: 11 !important;
                pointer-events: none !important;
            }

            /* ══ EARTH KNOT ══ */
            .geo-ribbon-knot {
                position: absolute !important;
                top: 50% !important;
                left: 50% !important;
                transform: translate(-50%,-50%) !important;
                width: 44px !important;
                height: 44px !important;
                background: linear-gradient(135deg,
                    #1e3a5f,#2563eb,#1e40af) !important;
                border-radius: 50% !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                font-size: 22px !important;
                box-shadow:
                    0 0 0 3px white,
                    0 0 0 5px #7c3aed,
                    0 4px 16px rgba(124,58,237,0.7) !important;
                z-index: 12 !important;
                pointer-events: none !important;
            }

            /* ══ CORNER DOTS ══ */
            .geo-ribbon-dot {
                position: absolute !important;
                width: 9px !important;
                height: 9px !important;
                background: radial-gradient(circle,#e9d5ff,#7c3aed) !important;
                border-radius: 50% !important;
                box-shadow: 0 0 6px rgba(192,132,252,0.9) !important;
                z-index: 13 !important;
                pointer-events: none !important;
            }
            .geo-ribbon-dot.tl { top:6px    !important; left:6px   !important; }
            .geo-ribbon-dot.tr { top:6px    !important; right:6px  !important; }
            .geo-ribbon-dot.bl { bottom:6px !important; left:6px   !important; }
            .geo-ribbon-dot.br { bottom:6px !important; right:6px  !important; }

            /* ══ BLUR LOCK (encyclopedia + profile) ══ */
            .geo-blur-section {
                position: relative !important;
                filter: blur(5px) !important;
                -webkit-filter: blur(5px) !important;
                user-select: none !important;
                -webkit-user-select: none !important;
                pointer-events: none !important;
            }

            .geo-blur-overlay {
                position: absolute !important;
                top: 0 !important;
                left: 0 !important;
                width: 100% !important;
                height: 100% !important;
                z-index: 100 !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                background: linear-gradient(
                    to bottom,
                    transparent 0%,
                    rgba(10,10,20,0.7) 20%,
                    rgba(10,10,20,0.93) 50%,
                    rgba(10,10,20,0.98) 100%
                ) !important;
                pointer-events: auto !important;
                cursor: pointer !important;
            }

            /* Purple ribbon across blur overlay */
            .geo-blur-ribbon {
                position: absolute !important;
                top: 30px !important;
                left: 0 !important;
                right: 0 !important;
                height: 50px !important;
                background: linear-gradient(90deg,
                    #4c1d95,#7c3aed,#a855f7,
                    #c084fc,#a855f7,#7c3aed,#4c1d95
                ) !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                gap: 16px !important;
                box-shadow:
                    0  4px 20px rgba(124,58,237,0.6),
                    0 -4px 20px rgba(124,58,237,0.6) !important;
                pointer-events: none !important;
            }

            .geo-blur-ribbon-earth {
                width: 36px !important;
                height: 36px !important;
                background: linear-gradient(135deg,
                    #1e3a5f,#2563eb,#1e40af) !important;
                border-radius: 50% !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                font-size: 20px !important;
                box-shadow:
                    0 0 0 2px white,
                    0 0 12px rgba(37,99,235,0.8) !important;
                pointer-events: none !important;
            }

            .geo-blur-ribbon-text {
                color: white !important;
                font-size: 13px !important;
                font-weight: 800 !important;
                letter-spacing: 2px !important;
                text-transform: uppercase !important;
                pointer-events: none !important;
            }

            .geo-blur-box {
                background: linear-gradient(135deg,
                    rgba(124,58,237,0.15),
                    rgba(168,85,247,0.1)
                ) !important;
                border: 1px solid rgba(124,58,237,0.4) !important;
                border-radius: 20px !important;
                padding: 32px 40px !important;
                text-align: center !important;
                max-width: 400px !important;
                width: 90% !important;
                box-shadow: 0 20px 60px rgba(124,58,237,0.3) !important;
                margin-top: 80px !important;
            }

            .geo-blur-box h3 {
                color: white !important;
                font-size: 22px !important;
                font-weight: 800 !important;
                margin: 12px 0 10px !important;
            }

            .geo-blur-box p {
                color: rgba(255,255,255,0.7) !important;
                font-size: 14px !important;
                line-height: 1.6 !important;
                margin: 0 0 20px !important;
            }

            .geo-blur-btn {
                background: linear-gradient(135deg,#a855f7,#7c3aed) !important;
                color: white !important;
                border: none !important;
                padding: 13px 32px !important;
                border-radius: 30px !important;
                font-size: 15px !important;
                font-weight: 700 !important;
                cursor: pointer !important;
                font-family: inherit !important;
                width: 100% !important;
            }

            .geo-blur-note {
                color: rgba(255,255,255,0.35) !important;
                font-size: 11px !important;
                margin-top: 10px !important;
            }

            .geo-blur-fade {
                height: 80px !important;
                background: linear-gradient(
                    to bottom, transparent,
                    rgba(10,10,20,0.4)
                ) !important;
                pointer-events: none !important;
            }
        `;

        document.head.appendChild(style);
        state.styleInjected = true;
        console.log('💜 Styles injected');
    }

    // ==========================================
    // STEP 8: GRID CARD FUNCTIONS
    // ==========================================

    function findContainer() {
        var selectors = [
            '.topics-grid',
            '.rivers-grid',    '.mountains-grid',
            '.lakes-grid',     '.forests-grid',
            '.deserts-grid',   '.volcanoes-grid',
            '.islands-grid',   '.oceans-grid',
            '.games-grid',     '.atlas-grid',
            '.reefs-grid',     '.coral-grid',
            '.cards-grid',     '.items-grid',
            '.grid',           '#grid',
            '#cardsGrid',      '[class*="-grid"]'
        ];

        for (var i = 0; i < selectors.length; i++) {
            var c = document.querySelector(selectors[i]);
            if (c && c.children.length > 0) {
                console.log('💜 Container:', selectors[i]);
                return c;
            }
        }
        return null;
    }

    function getCardName(card) {
        var name = card.getAttribute('data-name') ||
                   card.getAttribute('data-title') ||
                   card.getAttribute('data-item');
        if (name) return name.trim();
        var h = card.querySelector('h1,h2,h3,h4,h5,.topic-title,.card-title,.name,.title');
        if (h) return h.textContent.trim();
        return card.textContent.trim().substring(0, 30);
    }

    function isValidCard(el) {
        if (!el || !el.tagName) return false;
        var tag = el.tagName.toUpperCase();
        if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'LINK') return false;
        if (el.classList.contains('geo-upgrade-cta')) return false;
        if (el.classList.contains('geo-processed'))  return false;
        return true;
    }

    function makeCardFree(card) {
        card.classList.remove('geo-locked-card');
        card.querySelectorAll(
            '.geo-gift-overlay,.geo-ribbon-v,' +
            '.geo-ribbon-h,.geo-ribbon-knot,.geo-ribbon-dot'
        ).forEach(function(el) { el.remove(); });

        if (card.querySelector('.geo-free-badge')) return;
        card.classList.add('geo-free-card', 'geo-processed');

        var badge         = document.createElement('div');
        badge.className   = 'geo-free-badge';
        badge.textContent = '✨ Free';
        card.appendChild(badge);
    }

    function makeCardLocked(card) {
        var old = card.querySelector('.geo-free-badge');
        if (old) old.remove();
        if (card.querySelector('.geo-ribbon-knot')) return;

        card.classList.add('geo-locked-card', 'geo-processed');

        if (card.tagName === 'A') {
            card.removeAttribute('href');
            card.style.cursor = 'pointer';
        }

        // Overlay
        var ov         = document.createElement('div');
        ov.className   = 'geo-gift-overlay';
        card.appendChild(ov);

        // Vertical ribbon
        var rv         = document.createElement('div');
        rv.className   = 'geo-ribbon-v';
        card.appendChild(rv);

        // Horizontal ribbon
        var rh         = document.createElement('div');
        rh.className   = 'geo-ribbon-h';
        card.appendChild(rh);

        // Earth knot
        var knot           = document.createElement('div');
        knot.className     = 'geo-ribbon-knot';
        knot.textContent   = '🌍';
        card.appendChild(knot);

        // Corner dots
        ['tl','tr','bl','br'].forEach(function(pos) {
            var dot       = document.createElement('div');
            dot.className = 'geo-ribbon-dot ' + pos;
            card.appendChild(dot);
        });
    }

    // ==========================================
    // STEP 9: PROCESS GRID CARDS
    // ==========================================

    function processCards() {
    var container = findContainer();
    if (!container) {
        console.log('💜 No container found');
        return;
    }

    var validCards = Array.from(container.children).filter(isValidCard);
    console.log('💜 Cards found:', validCards.length);
    if (validCards.length === 0) return;

    // ✅ If locking already done, only lock NEW cards
    // Don't reset freeItems - keep existing free list
    if (!state.lockingDone) {
        state.freeItems = []; // Fresh count only on first run
    }
    
    var limit = getFreeLimit(state.category);
    var stats = { free: 0, locked: 0 };

    validCards.forEach(function(card) {
        var name       = getCardName(card);
        var normalized = name.toLowerCase().trim();

        // Already processed - skip
        if (card.classList.contains('geo-processed')) return;

        if (state.freeItems.length < limit &&
            state.freeItems.indexOf(normalized) === -1) {
            state.freeItems.push(normalized);
            makeCardFree(card);
            stats.free++;
        } else {
            makeCardLocked(card);
            stats.locked++;
        }
    });

    console.log('💜 Free:', stats.free, '| Locked:', stats.locked);
    
    // ✅ Mark locking as done
    state.lockingDone = true;

    if (stats.locked > 0) {
        addUpgradeCTA(container, stats.locked, stats.free, validCards.length);
    }
}

    // ==========================================
    // STEP 10: UPGRADE CTA (grid pages)
    // ==========================================

    function addUpgradeCTA(container, locked, free, total) {
        var old = container.querySelector('.geo-upgrade-cta');
        if (old) old.remove();

        var names = {
            mountains: 'Mountains',   rivers: 'Rivers',
            lakes: 'Lakes',           oceans: 'Oceans',
            forests: 'Forests',       deserts: 'Deserts',
            volcanoes: 'Volcanoes',   islands: 'Islands',
            'coral-reefs': 'Coral Reefs',
            games: 'Games',           upsc: 'Topics',
            atlas: 'Maps',            encyclopedia: 'Countries'
        };

        var cta       = document.createElement('div');
        cta.className = 'geo-upgrade-cta geo-processed';
        cta.style.cssText =
            'grid-column:1/-1;' +
            'background:linear-gradient(135deg,#7c3aed,#5b21b6);' +
            'border-radius:20px;padding:40px 25px;' +
            'text-align:center;color:white;margin:25px 0;';

        cta.innerHTML =
            '<div style="font-size:50px;margin-bottom:15px;">💜</div>' +
            '<h3 style="font-size:24px;margin:0 0 10px;">Keep Discovering!</h3>' +
            '<div style="font-size:50px;font-weight:bold;margin:15px 0;">' +
                locked + '</div>' +
            '<p style="font-size:16px;margin-bottom:20px;">more ' +
                (names[state.category] || 'items') + ' waiting!</p>' +
            '<button id="geo-unlock-btn" style="background:white;color:#7c3aed;' +
                'border:none;padding:14px 40px;border-radius:30px;' +
                'font-size:16px;font-weight:bold;cursor:pointer;">' +
                '💜 Unlock All</button>' +
            '<p style="font-size:12px;opacity:0.6;margin-top:15px;">' +
                free + ' of ' + total + ' free</p>';

        container.appendChild(cta);
        document
            .getElementById('geo-unlock-btn')
            .addEventListener('click', showUpgradeModal);
    }

    // ==========================================
    // STEP 11: BLUR LOCK (encyclopedia + profile)
    // Splits page: first 1/8 visible, rest blurred
    // ==========================================

    function applyBlurLock() {
        if (state.blurApplied) return;
        state.blurApplied = true;

        console.log('💜 Applying blur lock...');

        // Find main content wrapper
        var contentSelectors = [
            'main', 'article', '.content-main',
            '.main-content', '.page-content',
            '.article-body', '#content', '#main',
            '.container', '.wrapper', 'body'
        ];

        var contentEl = null;
        for (var i = 0; i < contentSelectors.length; i++) {
            var el = document.querySelector(contentSelectors[i]);
            if (el && el.children.length > 1) {
                contentEl = el;
                break;
            }
        }

        if (!contentEl) {
            console.log('💜 No content element found');
            return;
        }

        var children = Array.from(contentEl.children);
        if (children.length < 2) return;

        // First 1/8 of children are free
        var freeCount  = Math.max(1, Math.floor(children.length / 8));
        var lockedKids = children.slice(freeCount);

        if (lockedKids.length === 0) return;

        console.log('💜 Free sections:', freeCount,
                    '| Locked sections:', lockedKids.length);

        // Fade line
        var fade       = document.createElement('div');
        fade.className = 'geo-blur-fade';

        // Locked wrapper
        var wrapper         = document.createElement('div');
        wrapper.style.cssText = 'position:relative;';
        wrapper.classList.add('geo-blur-section');

        // Move locked children into wrapper
        lockedKids.forEach(function(child) {
            wrapper.appendChild(child);
        });

        // Build overlay
        var overlay       = document.createElement('div');
        overlay.className = 'geo-blur-overlay';

        // Purple ribbon inside overlay
        var ribbon       = document.createElement('div');
        ribbon.className = 'geo-blur-ribbon';

        var earth1           = document.createElement('div');
        earth1.className     = 'geo-blur-ribbon-earth';
        earth1.textContent   = '🌍';

        var ribbonText           = document.createElement('span');
        ribbonText.className     = 'geo-blur-ribbon-text';
        ribbonText.textContent   = '✦ Premium Content ✦';

        var earth2           = document.createElement('div');
        earth2.className     = 'geo-blur-ribbon-earth';
        earth2.textContent   = '🌍';

        ribbon.appendChild(earth1);
        ribbon.appendChild(ribbonText);
        ribbon.appendChild(earth2);

        // Premium box
        var msg = BTS_MESSAGES[Math.floor(Math.random() * BTS_MESSAGES.length)];

        var box       = document.createElement('div');
        box.className = 'geo-blur-box';
        box.innerHTML =
            '<div style="font-size:48px;">💜</div>' +
            '<h3>' + msg.title + '</h3>' +
            '<p>' + msg.subtitle + '<br><br>' +
                'Unlock the full content with Premium!</p>' +
            '<button class="geo-blur-btn" id="geo-blur-unlock">' +
                '💜 Unlock Full Access</button>' +
            '<p class="geo-blur-note">보라해 💜 · Plans from ₹299/year</p>';

        overlay.appendChild(ribbon);
        overlay.appendChild(box);
        wrapper.appendChild(overlay);

        // Insert into page
        contentEl.insertBefore(fade, lockedKids[0] || null);
        contentEl.appendChild(wrapper);

        // Button events
        document.getElementById('geo-blur-unlock')
            .addEventListener('click', function(e) {
                e.stopPropagation();
                showUpgradeModal();
            });

        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) showUpgradeModal();
        });

        console.log('💜 Blur lock applied!');
    }

    // ==========================================
    // STEP 12: FULL PAGE LOCK (profile - locked)
    // Shows a full page overlay for locked profiles
    // ==========================================

    function applyFullPageLock() {
        console.log('💜 Applying full page lock...');

        var msg = BTS_MESSAGES[Math.floor(Math.random() * BTS_MESSAGES.length)];

        // Blur the whole body
        document.body.style.cssText +=
            'filter:blur(8px);' +
            'pointer-events:none;' +
            'user-select:none;' +
            'overflow:hidden;';

        // Full screen overlay
        var overlay           = document.createElement('div');
        overlay.id            = 'geo-fullpage-lock';
        overlay.style.cssText =
            'position:fixed;inset:0;z-index:999999;' +
            'display:flex;align-items:center;justify-content:center;' +
            'background:rgba(10,10,20,0.85);' +
            'backdrop-filter:blur(4px);' +
            'pointer-events:auto;';

        // Purple ribbon across overlay
        var ribbon           = document.createElement('div');
        ribbon.style.cssText =
            'position:absolute;top:0;left:0;right:0;height:55px;' +
            'background:linear-gradient(90deg,' +
                '#4c1d95,#7c3aed,#a855f7,#c084fc,#a855f7,#7c3aed,#4c1d95);' +
            'display:flex;align-items:center;justify-content:center;gap:16px;' +
            'box-shadow:0 4px 20px rgba(124,58,237,0.6);';

        ribbon.innerHTML =
            '<div style="width:36px;height:36px;background:linear-gradient(' +
                '135deg,#1e3a5f,#2563eb,#1e40af);border-radius:50%;' +
                'display:flex;align-items:center;justify-content:center;' +
                'font-size:20px;box-shadow:0 0 0 2px white;">🌍</div>' +
            '<span style="color:white;font-size:14px;font-weight:800;' +
                'letter-spacing:2px;text-transform:uppercase;">' +
                '✦ Premium Content ✦</span>' +
            '<div style="width:36px;height:36px;background:linear-gradient(' +
                '135deg,#1e3a5f,#2563eb,#1e40af);border-radius:50%;' +
                'display:flex;align-items:center;justify-content:center;' +
                'font-size:20px;box-shadow:0 0 0 2px white;">🌍</div>';

        var box           = document.createElement('div');
        box.style.cssText =
            'background:linear-gradient(145deg,#1e1b4b,#312e81);' +
            'border-radius:24px;padding:40px;max-width:420px;width:90%;' +
            'text-align:center;' +
            'box-shadow:0 20px 60px rgba(124,58,237,0.4);';

        box.innerHTML =
            '<div style="font-size:56px;margin-bottom:14px;">💜</div>' +
            '<h2 style="color:white;font-size:24px;font-weight:800;' +
                'margin:0 0 10px;">' + msg.title + '</h2>' +
            '<p style="color:rgba(255,255,255,0.7);font-size:14px;' +
                'line-height:1.7;margin:0 0 24px;">' +
                msg.subtitle + '<br><br>' +
                'This content is for Premium members only.</p>' +
            '<button id="geo-fp-unlock" style="background:linear-gradient(' +
                '135deg,#a855f7,#7c3aed);color:white;border:none;' +
                'padding:14px 32px;border-radius:30px;font-size:15px;' +
                'font-weight:700;cursor:pointer;width:100%;' +
                'margin-bottom:12px;">💜 Unlock Full Access</button>' +
            '<a href="' + (window.location.pathname.includes('/mountains/')
                ? '/mountains/mountains.html'
                : window.location.pathname.includes('/rivers/')
                ? '/rivers/rivers.html'
                : window.location.pathname.includes('/lakes/')
                ? '/lakes/lakes.html'
                : window.location.pathname.includes('/deserts/')
                ? '/deserts/deserts.html'
                : window.location.pathname.includes('/forests/')
                ? '/forests/forests.html'
                : window.location.pathname.includes('/islands/')
                ? '/islands/islands.html'
                : window.location.pathname.includes('/oceans/')
                ? '/oceans/oceans.html'
                : window.location.pathname.includes('/coral-reefs/')
                ? '/coral-reefs/coral-reefs.html'
                : window.location.pathname.includes('/upsc/')
                ? '/upsc/upsc.html'
                : '/') +
            '" style="display:inline-block;color:rgba(255,255,255,0.4);' +
                'font-size:12px;text-decoration:none;pointer-events:auto;">' +
                '← Go Back</a>' +
            '<p style="color:rgba(255,255,255,0.3);font-size:11px;' +
                'margin-top:10px;">보라해 💜</p>';

        overlay.appendChild(ribbon);
        overlay.appendChild(box);
        document.body.appendChild(overlay);

        document.getElementById('geo-fp-unlock')
            .addEventListener('click', function() {
                window.location.href = '/pricing.html';
            });
    }

    // ==========================================
    // STEP 13: UPGRADE MODAL
    // ==========================================

    function showUpgradeModal() {
        var existing = document.getElementById('geo-premium-modal');
        if (existing) existing.remove();

        var msg = BTS_MESSAGES[Math.floor(Math.random() * BTS_MESSAGES.length)];

        var modal     = document.createElement('div');
        modal.id      = 'geo-premium-modal';
        modal.style.cssText =
            'position:fixed;top:0;left:0;width:100%;height:100%;' +
            'background:rgba(88,28,135,0.95);z-index:999999;' +
            'display:flex;align-items:center;justify-content:center;';

        modal.innerHTML =
            '<div style="background:linear-gradient(145deg,#1e1b4b,#312e81);' +
                'border-radius:25px;padding:40px;max-width:400px;' +
                'width:90%;text-align:center;">' +
                '<div style="font-size:60px;margin-bottom:15px;">💜</div>' +
                '<h2 style="color:white;font-size:24px;margin:0 0 10px;">' +
                    msg.title + '</h2>' +
                '<p style="color:rgba(255,255,255,0.8);font-size:14px;' +
                    'margin-bottom:25px;">' + msg.subtitle + '</p>' +
                '<button id="geo-pricing-btn" style="background:linear-gradient(' +
                    '135deg,#a855f7,#7c3aed);color:white;border:none;' +
                    'padding:14px 35px;border-radius:30px;font-size:16px;' +
                    'font-weight:bold;cursor:pointer;width:100%;">' +
                    '💜 View Plans</button>' +
                '<p style="color:rgba(255,255,255,0.4);font-size:11px;' +
                    'margin-top:15px;">보라해 💜</p>' +
            '</div>';

        document.body.appendChild(modal);

        modal.addEventListener('click', function(e) {
            if (e.target === modal) modal.remove();
        });

        document.getElementById('geo-pricing-btn')
            .addEventListener('click', function() {
                window.location.href = '/pricing.html';
            });
    }

    // ==========================================
    // STEP 14: OBSERVER (grid pages only)
    // ==========================================

    function startObserver() {
    if (state.observer) state.observer.disconnect();

    var timer;
    var processCount = 0; // ✅ Count how many times we process

    state.observer = new MutationObserver(function() {
        clearTimeout(timer);
        timer = setTimeout(function() {
            
            // ✅ Only process MAX 2 times total
            if (processCount >= 2) {
                console.log('💜 Observer: max runs reached, stopping');
                state.observer.disconnect();
                return;
            }
            
            processCount++;
            console.log('💜 Observer run #' + processCount);
            
            // Reset processed flags so cards can be re-evaluated
            document.querySelectorAll('.geo-processed').forEach(function(el) {
                el.classList.remove('geo-processed');
            });
            
            processCards();
            
        }, 500); // ✅ Increased delay to 500ms
    });

    state.observer.observe(document.body, {
        childList: true, subtree: true
    });
}

    // ==========================================
    // STEP 15: MAIN INITIALIZE
    // This is the entry point. Reads page type
    // and routes to correct handler.
    // ==========================================

    function initialize() {
        console.log('💜 Initializing...');

        state.pageType = detectPageType();
        state.category = detectCategory();

        console.log('💜 Page type:', state.pageType);
        console.log('💜 Category:', state.category);

        // ── FREE PAGE - do nothing ──
        if (state.pageType === 'free') {
            console.log('💜 Free page - exiting');
            return;
        }

        // ── PREMIUM USER - no locks ──
        if (isPremium()) {
            console.log('💜 Premium user - no locks');
            return;
        }

        // ── GRID PAGE ──
        if (state.pageType === 'grid') {
            console.log('💜 Grid page - applying card locks');

            // Pro plan UPSC = fully locked
            var plan = localStorage.getItem('dv_plan') || 'basic';
            if (plan === 'pro' && state.category === 'upsc') {
                FREE_LIMITS.upsc = 0;
            }

            injectStyles();
            installGlobalClickBlocker();
            state.freeItems = [];
            processCards();
            startObserver();

            // Filter click handler
            document.addEventListener('click', function(e) {
                if (e.target.matches(
                    '[data-filter],[data-category],.filter-btn,.tab-btn'
                )) {
                    setTimeout(function() {
                        document.querySelectorAll('.geo-processed')
                            .forEach(function(el) {
                                el.classList.remove('geo-processed');
                            });
                        processCards();
                    }, 400);
                }
            });

            return;
        }

        // ── PROFILE PAGE ──
        if (state.pageType === 'profile') {
            console.log('💜 Profile page - checking if free...');

            if (isProfileFree()) {
                console.log('💜 Profile is in free list - showing full page');
                return; // Show full page - no lock
            } else {
                console.log('💜 Profile is locked - applying full page lock');
                injectStyles();
                // Wait for page to load then lock
                if (document.readyState === 'complete') {
                    applyFullPageLock();
                } else {
                    window.addEventListener('load', applyFullPageLock);
                }
                return;
            }
        }

        // ── ENCYCLOPEDIA BLUR PAGE ──
        if (state.pageType === 'encyc-blur') {
            console.log('💜 Encyclopedia page - applying blur lock');
            injectStyles();

            if (document.readyState === 'complete') {
                applyBlurLock();
            } else {
                window.addEventListener('load', applyBlurLock);
            }
            return;
        }

        console.log('💜 Init complete');
    }

    // ==========================================
    // START
    // ==========================================

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initialize);
    } else {
        initialize();
    }

    // Global API
    window.GeoPremiumWrapper = {
        showUpgrade:  showUpgradeModal,
        reprocess:    processCards,
        reset: function() {
            state.freeItems = [];
            processCards();
        }
    };

    console.log('💜 Premium Wrapper Loaded');

})();
