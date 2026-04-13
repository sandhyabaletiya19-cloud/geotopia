// ========================================
// 💜 PREMIUM WRAPPER - DHARAVERSE FINAL
// ========================================

(function() {
    'use strict';

    console.log('💜 Premium Wrapper Loading...');

    // ==========================================
    // FREE IDs FOR PROFILE PAGES
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
        lockingDone:        false,
        filterClickBound:   false
    };

    // ==========================================
    // DETECT PAGE TYPE
    // ==========================================

    function detectPageType() {
        var path = window.location.pathname.toLowerCase();

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
        if (path.endsWith('/volcanoes/volcanoes.html'))       return 'grid';

        // ── PROFILE PAGES ──
        if (path.endsWith('-profile.html'))                   return 'profile';

        // ── ENCYCLOPEDIA SUB-PAGES (country pages, map pages etc) ──
        if (path.includes('/encyclopedia/') &&
            !path.endsWith('/encyclopedia/encyclopedia.html')) {
            return 'encyc-blur';
        }

        // ── FREE PAGES ──
        return 'free';
    }

    // ==========================================
    // DETECT CATEGORY
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
        if (path.includes('/volcanoes/'))   return 'volcanoes';
        if (path.includes('/games/'))       return 'games';
        if (path.includes('/upsc/'))        return 'upsc';
        if (path.includes('/atlas/'))       return 'atlas';
        if (path.includes('/encyclopedia/')) return 'encyclopedia';

        return null;
    }

    // ==========================================
    // CHECK PREMIUM STATUS
    // ==========================================

    function isPremium() {
        var plan      = localStorage.getItem('dv_plan') || 'basic';
        var isAdmin   = localStorage.getItem('dv_admin');
        var adminTime = parseInt(localStorage.getItem('dv_admin_time') || '0');
        var adminOk   = isAdmin === 'true' &&
                       (Date.now() - adminTime) < 86400000;
        if (adminOk) return true;

        var expiry = localStorage.getItem('dv_plan_expiry');
        if (expiry && new Date(expiry) < new Date()) {
            localStorage.setItem('dv_plan', 'basic');
            localStorage.removeItem('dv_premium');
            return false;
        }

        var cat = detectCategory();

        if (plan === 'ultimate') return true;
        if (plan === 'pro') {
            if (cat === 'upsc') return false;
            return true;
        }
        if (plan === 'games' && cat === 'games') return true;
        if (plan === 'upsc'  && cat === 'upsc')  return true;

        if (localStorage.getItem('geo_premium') === 'true') return true;
        if (localStorage.getItem('dv_premium') === 'true' &&
            plan !== 'basic') return true;

        return false;
    }

    // ==========================================
    // GET FREE LIMIT FOR CATEGORY
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
    // CHECK IF PROFILE ID IS FREE
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
    // GLOBAL CLICK BLOCKER
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
    // INJECT ALL STYLES
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
    // GRID CARD HELPERS
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
        return true;
    }

    function stripCardLockUI(card) {
        card.classList.remove('geo-locked-card', 'geo-free-card', 'geo-processed');
        card.querySelectorAll(
            '.geo-gift-overlay,.geo-ribbon-v,' +
            '.geo-ribbon-h,.geo-ribbon-knot,.geo-ribbon-dot,.geo-free-badge'
        ).forEach(function(el) { el.remove(); });
    }

    function makeCardFree(card) {
        stripCardLockUI(card);
        card.classList.add('geo-free-card', 'geo-processed');

        var badge         = document.createElement('div');
        badge.className   = 'geo-free-badge';
        badge.textContent = '✨ Free';
        card.appendChild(badge);
    }

    function makeCardLocked(card) {
        stripCardLockUI(card);
        card.classList.add('geo-locked-card', 'geo-processed');

        if (card.tagName === 'A') {
            card.removeAttribute('href');
            card.style.cursor = 'pointer';
        }

        var ov         = document.createElement('div');
        ov.className   = 'geo-gift-overlay';
        card.appendChild(ov);

        var rv         = document.createElement('div');
        rv.className   = 'geo-ribbon-v';
        card.appendChild(rv);

        var rh         = document.createElement('div');
        rh.className   = 'geo-ribbon-h';
        card.appendChild(rh);

        var knot           = document.createElement('div');
        knot.className     = 'geo-ribbon-knot';
        knot.textContent   = '🌍';
        card.appendChild(knot);

        ['tl','tr','bl','br'].forEach(function(pos) {
            var dot       = document.createElement('div');
            dot.className = 'geo-ribbon-dot ' + pos;
            card.appendChild(dot);
        });
    }

    // ==========================================
    // ✅ PROCESS GRID CARDS - FIXED
    // 
    // KEY FIX: We count ALL cards in the grid 
    // toward the free limit, NOT per-filter.
    // We use a GLOBAL index counter that persists
    // across filter clicks. The first N cards by
    // DOM order are always free.
    // ==========================================

    function processCards() {
        var container = findContainer();
        if (!container) {
            console.log('💜 No container found, retrying...');
            return;
        }

        var limit = getFreeLimit(state.category);
        
        // ✅ Get ALL cards in the container (not just visible)
        var allCards = Array.from(container.children).filter(isValidCard);
        console.log('💜 Total cards in grid:', allCards.length, '| Free limit:', limit);

        if (allCards.length === 0) return;

        // ✅ KEY FIX: Build the free list ONCE from the FIRST N cards 
        // in the original DOM order. This list NEVER changes on filter.
        if (!state.lockingDone) {
            state.freeItems = [];
            for (var i = 0; i < allCards.length && state.freeItems.length < limit; i++) {
                var name = getCardName(allCards[i]).toLowerCase().trim();
                if (state.freeItems.indexOf(name) === -1) {
                    state.freeItems.push(name);
                }
            }
            state.lockingDone = true;
            console.log('💜 Free items locked:', state.freeItems);
        }

        // ✅ Now apply free/locked to ALL cards based on the fixed list
        var stats = { free: 0, locked: 0 };

        allCards.forEach(function(card) {
            var name       = getCardName(card).toLowerCase().trim();
            var isFree     = state.freeItems.indexOf(name) !== -1;

            if (isFree) {
                makeCardFree(card);
                stats.free++;
            } else {
                makeCardLocked(card);
                stats.locked++;
            }
        });

        console.log('💜 Free:', stats.free, '| Locked:', stats.locked);

        if (stats.locked > 0) {
            addUpgradeCTA(container, stats.locked, stats.free, allCards.length);
        }
    }

    // ==========================================
    // UPGRADE CTA (grid pages)
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
    // ✅ ENCYCLOPEDIA BLUR LOCK - COMPLETELY REWRITTEN
    //
    // This finds ALL content on the page and
    // blurs 7/8 of it. Works with ANY structure:
    // tables, cards, maps, lists, sections, etc.
    // ==========================================

    function applyBlurLock() {
        if (state.blurApplied) return;
        state.blurApplied = true;

        console.log('💜 Applying encyclopedia blur lock...');

        // ─── Strategy: Find the best content wrapper ───
        // Try increasingly broad selectors
        var contentEl = null;
        var contentSelectors = [
            'main',
            'article',
            '.content-main',
            '.main-content',
            '.page-content',
            '.article-body',
            '.content-wrapper',
            '.content',
            '#content',
            '#main',
            '.container',
            '.wrapper'
        ];

        for (var i = 0; i < contentSelectors.length; i++) {
            var el = document.querySelector(contentSelectors[i]);
            if (el && el.children.length > 1) {
                contentEl = el;
                console.log('💜 Found content wrapper:', contentSelectors[i], 
                           'with', el.children.length, 'children');
                break;
            }
        }

        // ─── Fallback: use document.body ───
        if (!contentEl) {
            contentEl = document.body;
            console.log('💜 Using body as content wrapper');
        }

        // ─── Collect ALL direct children that are actual content ───
        var children = Array.from(contentEl.children).filter(function(child) {
            var tag = child.tagName.toUpperCase();
            // Skip scripts, styles, nav, header, footer, our own elements
            if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'LINK' || 
                tag === 'META' || tag === 'NOSCRIPT') return false;
            if (child.id === 'geo-premium-styles') return false;
            if (child.id === 'geo-fullpage-lock') return false;
            if (child.id === 'geo-premium-modal') return false;
            if (child.classList.contains('geo-blur-fade')) return false;
            if (child.classList.contains('geo-blur-section')) return false;
            // Skip if it's invisible
            var style = window.getComputedStyle(child);
            if (style.display === 'none') return false;
            return true;
        });

        console.log('💜 Content children found:', children.length);

        if (children.length < 2) {
            console.log('💜 Not enough children to blur, trying deeper...');
            // Try going one level deeper
            var deeper = contentEl.querySelector('div, section, article');
            if (deeper && deeper.children.length > 2) {
                contentEl = deeper;
                children = Array.from(contentEl.children).filter(function(child) {
                    var tag = child.tagName.toUpperCase();
                    if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'LINK') return false;
                    return true;
                });
                console.log('💜 Deeper children found:', children.length);
            }
        }

        if (children.length < 2) {
            console.log('💜 Still not enough children, applying body-level blur');
            applyBodyBlur();
            return;
        }

        // ─── Calculate 1/8 free, 7/8 locked ───
        var freeCount = Math.max(1, Math.floor(children.length / 8));
        var freeChildren  = children.slice(0, freeCount);
        var lockedChildren = children.slice(freeCount);

        console.log('💜 Free sections:', freeCount,
                    '| Locked sections:', lockedChildren.length);

        if (lockedChildren.length === 0) {
            console.log('💜 Nothing to lock');
            return;
        }

        // ─── Create the blur wrapper ───
        var blurWrapper = document.createElement('div');
        blurWrapper.className = 'geo-blur-section';
        blurWrapper.style.position = 'relative';

        // ─── Create fade divider ───
        var fade = document.createElement('div');
        fade.className = 'geo-blur-fade';

        // ─── Insert fade BEFORE the first locked child ───
        var firstLocked = lockedChildren[0];
        contentEl.insertBefore(fade, firstLocked);

        // ─── Move all locked children into blur wrapper ───
        lockedChildren.forEach(function(child) {
            blurWrapper.appendChild(child);
        });

        // ─── Insert blur wrapper after fade ───
        contentEl.insertBefore(blurWrapper, fade.nextSibling);

        // ─── Build overlay ───
        var overlay       = document.createElement('div');
        overlay.className = 'geo-blur-overlay';
        overlay.style.position = 'absolute';

        // Purple ribbon
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

        // ─── Append overlay OUTSIDE the blur wrapper (so it's not blurred) ───
        // We need a container that holds both
        var outerWrapper = document.createElement('div');
        outerWrapper.style.position = 'relative';
        
        // Replace blurWrapper in DOM with outerWrapper
        contentEl.insertBefore(outerWrapper, blurWrapper);
        outerWrapper.appendChild(blurWrapper);
        outerWrapper.appendChild(overlay);

        // Button events
        document.getElementById('geo-blur-unlock')
            .addEventListener('click', function(e) {
                e.stopPropagation();
                showUpgradeModal();
            });

        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) showUpgradeModal();
        });

        console.log('💜 Encyclopedia blur lock applied!');
    }

    // ─── Fallback: blur everything below viewport ───
    function applyBodyBlur() {
        console.log('💜 Applying body-level blur fallback');

        var msg = BTS_MESSAGES[Math.floor(Math.random() * BTS_MESSAGES.length)];

        // Create a fixed overlay at the bottom portion of the page
        var overlay = document.createElement('div');
        overlay.style.cssText =
            'position:fixed;bottom:0;left:0;right:0;height:75vh;' +
            'z-index:99999;pointer-events:auto;cursor:pointer;' +
            'background:linear-gradient(to bottom,' +
                'transparent 0%,' +
                'rgba(10,10,20,0.5) 10%,' +
                'rgba(10,10,20,0.85) 30%,' +
                'rgba(10,10,20,0.95) 100%);' +
            'display:flex;align-items:center;justify-content:center;' +
            'flex-direction:column;';

        // Ribbon
        var ribbon = document.createElement('div');
        ribbon.style.cssText =
            'position:absolute;top:40px;left:0;right:0;height:50px;' +
            'background:linear-gradient(90deg,' +
                '#4c1d95,#7c3aed,#a855f7,#c084fc,#a855f7,#7c3aed,#4c1d95);' +
            'display:flex;align-items:center;justify-content:center;gap:16px;' +
            'box-shadow:0 4px 20px rgba(124,58,237,0.6);pointer-events:none;';
        ribbon.innerHTML =
            '<div style="width:36px;height:36px;background:linear-gradient(' +
                '135deg,#1e3a5f,#2563eb,#1e40af);border-radius:50%;' +
                'display:flex;align-items:center;justify-content:center;' +
                'font-size:20px;box-shadow:0 0 0 2px white;">🌍</div>' +
            '<span style="color:white;font-size:13px;font-weight:800;' +
                'letter-spacing:2px;text-transform:uppercase;">' +
                '✦ Premium Content ✦</span>' +
            '<div style="width:36px;height:36px;background:linear-gradient(' +
                '135deg,#1e3a5f,#2563eb,#1e40af);border-radius:50%;' +
                'display:flex;align-items:center;justify-content:center;' +
                'font-size:20px;box-shadow:0 0 0 2px white;">🌍</div>';

        var box = document.createElement('div');
        box.className = 'geo-blur-box';
        box.style.marginTop = '100px';
        box.innerHTML =
            '<div style="font-size:48px;">💜</div>' +
            '<h3 style="color:white;font-size:22px;font-weight:800;margin:12px 0 10px;">' + 
                msg.title + '</h3>' +
            '<p style="color:rgba(255,255,255,0.7);font-size:14px;line-height:1.6;margin:0 0 20px;">' + 
                msg.subtitle + '<br><br>Unlock the full content with Premium!</p>' +
            '<button id="geo-blur-unlock" style="background:linear-gradient(135deg,#a855f7,#7c3aed);' +
                'color:white;border:none;padding:13px 32px;border-radius:30px;font-size:15px;' +
                'font-weight:700;cursor:pointer;width:100%;">' +
                '💜 Unlock Full Access</button>' +
            '<p style="color:rgba(255,255,255,0.35);font-size:11px;margin-top:10px;">' +
                '보라해 💜 · Plans from ₹299/year</p>';

        overlay.appendChild(ribbon);
        overlay.appendChild(box);
        document.body.appendChild(overlay);

        // Prevent scrolling past the free portion
        document.body.style.overflow = 'hidden';
        document.body.style.maxHeight = '100vh';

        document.getElementById('geo-blur-unlock')
            .addEventListener('click', function(e) {
                e.stopPropagation();
                showUpgradeModal();
            });

        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) showUpgradeModal();
        });

        console.log('💜 Body blur fallback applied');
    }

    // ==========================================
    // FULL PAGE LOCK (profile - locked)
    // ==========================================

    function applyFullPageLock() {
        console.log('💜 Applying full page lock...');

        var msg = BTS_MESSAGES[Math.floor(Math.random() * BTS_MESSAGES.length)];

        document.body.style.cssText +=
            'filter:blur(8px);' +
            'pointer-events:none;' +
            'user-select:none;' +
            'overflow:hidden;';

        var overlay           = document.createElement('div');
        overlay.id            = 'geo-fullpage-lock';
        overlay.style.cssText =
            'position:fixed;inset:0;z-index:999999;' +
            'display:flex;align-items:center;justify-content:center;' +
            'background:rgba(10,10,20,0.85);' +
            'backdrop-filter:blur(4px);' +
            'pointer-events:auto;';

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

        // Determine back URL
        var path = window.location.pathname;
        var backUrl = '/';
        if (path.includes('/mountains/'))   backUrl = '/mountains/mountains.html';
        else if (path.includes('/rivers/'))      backUrl = '/rivers/rivers.html';
        else if (path.includes('/lakes/'))       backUrl = '/lakes/lakes.html';
        else if (path.includes('/deserts/'))     backUrl = '/deserts/deserts.html';
        else if (path.includes('/forests/'))     backUrl = '/forests/forests.html';
        else if (path.includes('/islands/'))     backUrl = '/islands/islands.html';
        else if (path.includes('/oceans/'))      backUrl = '/oceans/oceans.html';
        else if (path.includes('/coral-reefs/')) backUrl = '/coral-reefs/coral-reefs.html';
        else if (path.includes('/upsc/'))        backUrl = '/upsc/upsc.html';
        else if (path.includes('/volcanoes/'))   backUrl = '/volcanoes/volcanoes.html';

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
            '<a href="' + backUrl + '" style="display:inline-block;' +
                'color:rgba(255,255,255,0.4);font-size:12px;' +
                'text-decoration:none;pointer-events:auto;">← Go Back</a>' +
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
    // UPGRADE MODAL
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
    // ✅ OBSERVER - FIXED (limited runs)
    // ==========================================

    function startObserver() {
        if (state.observer) state.observer.disconnect();

        var timer;
        var processCount = 0;

        state.observer = new MutationObserver(function() {
            clearTimeout(timer);
            timer = setTimeout(function() {
                if (processCount >= 3) {
                    console.log('💜 Observer: max runs reached, stopping');
                    state.observer.disconnect();
                    return;
                }
                processCount++;
                console.log('💜 Observer run #' + processCount);
                processCards();
            }, 600);
        });

        state.observer.observe(document.body, {
            childList: true, subtree: true
        });
    }

    // ==========================================
    // ✅ FILTER HANDLER - FIXED
    //
    // When a filter/category button is clicked,
    // we DON'T reset freeItems. We just re-apply
    // the same free/locked state to whatever 
    // cards are now visible.
    // ==========================================

    function bindFilterHandler() {
        if (state.filterClickBound) return;
        state.filterClickBound = true;

        document.addEventListener('click', function(e) {
            // Check if clicked element is a filter/tab button
            var isFilter = e.target.matches(
                '[data-filter],[data-category],.filter-btn,.tab-btn,' +
                '.category-btn,.cat-btn,[data-tab],.tab,[role="tab"],' +
                'button[class*="filter"],button[class*="tab"],' +
                'a[class*="filter"],a[class*="tab"],' +
                '.filter-item,.category-item,.nav-pill,.nav-tab'
            ) || e.target.closest(
                '[data-filter],[data-category],.filter-btn,.tab-btn,' +
                '.category-btn,.cat-btn,[data-tab]'
            );

            if (isFilter) {
                console.log('💜 Filter clicked - re-applying locks (NOT resetting freeItems)');
                
                // ✅ KEY: We do NOT reset state.freeItems or state.lockingDone
                // We just wait for DOM to update, then re-apply same free/locked
                setTimeout(function() {
                    processCards();
                }, 300);

                // Second pass in case of animation delay
                setTimeout(function() {
                    processCards();
                }, 800);
            }
        });

        console.log('💜 Filter handler bound');
    }

    // ==========================================
    // MAIN INITIALIZE
    // ==========================================

    function initialize() {
        console.log('💜 Initializing...');

        state.pageType = detectPageType();
        state.category = detectCategory();

        console.log('💜 Page type:', state.pageType);
        console.log('💜 Category:', state.category);

        // ── FREE PAGE ──
        if (state.pageType === 'free') {
            console.log('💜 Free page - exiting');
            return;
        }

        // ── PREMIUM USER ──
        if (isPremium()) {
            console.log('💜 Premium user - no locks');
            return;
        }

        // ── GRID PAGE ──
        if (state.pageType === 'grid') {
            console.log('💜 Grid page - applying card locks');

            var plan = localStorage.getItem('dv_plan') || 'basic';
            if (plan === 'pro' && state.category === 'upsc') {
                FREE_LIMITS.upsc = 0;
            }

            injectStyles();
            installGlobalClickBlocker();

            // ✅ Reset state for fresh page load
            state.freeItems   = [];
            state.lockingDone = false;

            // Initial processing
            processCards();

            // Observer for dynamically loaded cards
            startObserver();

            // ✅ Bind filter handler (does NOT reset freeItems)
            bindFilterHandler();

            // ✅ Retry in case cards load late
            setTimeout(processCards, 1000);
            setTimeout(processCards, 2500);

            return;
        }

        // ── PROFILE PAGE ──
        if (state.pageType === 'profile') {
            console.log('💜 Profile page - checking if free...');

            if (isProfileFree()) {
                console.log('💜 Profile is in free list');
                return;
            } else {
                console.log('💜 Profile is locked');
                injectStyles();
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
            console.log('💜 Encyclopedia sub-page - applying blur lock');
            injectStyles();

            // ✅ Must wait for page to fully load
            if (document.readyState === 'complete') {
                setTimeout(applyBlurLock, 500); // Small delay for JS-rendered content
            } else {
                window.addEventListener('load', function() {
                    setTimeout(applyBlurLock, 500);
                });
            }

            // ✅ Fallback retry
            setTimeout(function() {
                if (!state.blurApplied) {
                    console.log('💜 Blur retry...');
                    applyBlurLock();
                }
            }, 3000);

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
            state.freeItems   = [];
            state.lockingDone = false;
            processCards();
        }
    };

    console.log('💜 Premium Wrapper Loaded');

})();
