// ========================================
// 💜 PREMIUM WRAPPER - DHARAVERSE FINAL v2
// ========================================

(function() {
    'use strict';

    console.log('💜 Premium Wrapper v2 Loading...');

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
    // BTS MESSAGES
    // ==========================================

    var BTS_MESSAGES = [
        { title: "Keep Swimming! 🌊", subtitle: "The ocean of knowledge awaits 💜" },
        { title: "Dream, Believe, Achieve! ✨", subtitle: "Unlock your potential 💜" },
        { title: "Purple You! 보라해 💜", subtitle: "We believe in your dreams" },
        { title: "Magic Shop Awaits! ✨", subtitle: "Unlock all wonders 💜" },
        { title: "Beyond The Scene! 🌟", subtitle: "Go beyond with premium 💜" },
        { title: "You Are The Best! 🌸", subtitle: "Best comes with premium 💜" },
        { title: "Life Goes On! 🌿", subtitle: "Keep exploring, go premium 💜" },
        { title: "Dynamite! 💥", subtitle: "Explode into full knowledge 💜" },
        { title: "Butter! 🧈", subtitle: "Smooth access to everything 💜" },
        { title: "Run BTS! 🏃", subtitle: "Run towards all knowledge 💜" }
    ];

    // ==========================================
    // STATE
    // ==========================================

    var state = {
        pageType: null,
        category: null,
        freeItemIDs: [],      // ✅ Store UNIQUE IDs not names
        styleInjected: false,
        globalClickHandler: null,
        blurApplied: false,
        initialScanDone: false
    };

    // ==========================================
    // DETECT PAGE TYPE
    // ==========================================

    function detectPageType() {
        var path = window.location.pathname.toLowerCase();

        // ── ENCYCLOPEDIA MAIN = FREE (just categories) ──
        if (path.endsWith('/encyclopedia/encyclopedia.html')) return 'free';

        // ── ENCYCLOPEDIA SUB-PAGES = BLUR ──
        if (path.includes('/encyclopedia/') &&
            !path.endsWith('/encyclopedia/encyclopedia.html')) {
            return 'encyc-blur';
        }

        // ── GRID PAGES ──
        var gridPages = [
            '/mountains/mountains.html',
            '/rivers/rivers.html',
            '/lakes/lakes.html',
            '/oceans/oceans.html',
            '/oceans/seas.html',
            '/coral-reefs/coral-reefs.html',
            '/deserts/deserts.html',
            '/islands/islands.html',
            '/forests/forests.html',
            '/volcanoes/volcanoes.html',
            '/games/games.html',
            '/upsc/upsc.html',
            '/atlas/atlas.html'
        ];

        for (var i = 0; i < gridPages.length; i++) {
            if (path.endsWith(gridPages[i])) return 'grid';
        }

        // ── PROFILE PAGES ──
        if (path.endsWith('-profile.html')) return 'profile';

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
    // CHECK PREMIUM
    // ==========================================

    function isPremium() {
        var plan = localStorage.getItem('dv_plan') || 'basic';
        var isAdmin = localStorage.getItem('dv_admin');
        var adminTime = parseInt(localStorage.getItem('dv_admin_time') || '0');
        if (isAdmin === 'true' && (Date.now() - adminTime) < 86400000) return true;

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
        if (plan === 'upsc' && cat === 'upsc') return true;
        if (localStorage.getItem('geo_premium') === 'true') return true;
        if (localStorage.getItem('dv_premium') === 'true' && plan !== 'basic') return true;

        return false;
    }

    // ==========================================
    // GET FREE LIMIT
    // ==========================================

    function getFreeLimit(category) {
        var plan = localStorage.getItem('dv_plan') || 'basic';
        var isAdmin = localStorage.getItem('dv_admin');
        var adminTime = parseInt(localStorage.getItem('dv_admin_time') || '0');
        if (isAdmin === 'true' && (Date.now() - adminTime) < 86400000) return 9999;

        var PLAN_LIMITS = {
            basic: {
                mountains: 7, rivers: 7, lakes: 7, oceans: 2,
                forests: 7, deserts: 7, volcanoes: 7, islands: 7,
                'coral-reefs': 7, upsc: 3, games: 3, atlas: 7
            },
            games: {
                mountains: 7, rivers: 7, lakes: 7, oceans: 2,
                forests: 7, deserts: 7, volcanoes: 7, islands: 7,
                'coral-reefs': 7, upsc: 3, games: 9999, atlas: 7
            },
            upsc: {
                mountains: 7, rivers: 7, lakes: 7, oceans: 2,
                forests: 7, deserts: 7, volcanoes: 7, islands: 7,
                'coral-reefs': 7, upsc: 9999, games: 3, atlas: 7
            },
            pro: {
                mountains: 9999, rivers: 9999, lakes: 9999, oceans: 9999,
                forests: 9999, deserts: 9999, volcanoes: 9999, islands: 9999,
                'coral-reefs': 9999, upsc: 0, games: 9999, atlas: 9999
            },
            ultimate: {
                mountains: 9999, rivers: 9999, lakes: 9999, oceans: 9999,
                forests: 9999, deserts: 9999, volcanoes: 9999, islands: 9999,
                'coral-reefs': 9999, upsc: 9999, games: 9999, atlas: 9999
            }
        };

        var limits = PLAN_LIMITS[plan] || PLAN_LIMITS.basic;
        return limits[category] !== undefined ? limits[category] : 7;
    }

    // ==========================================
    // CHECK IF PROFILE ID IS FREE
    // ==========================================

    function isProfileFree() {
        var params = new URLSearchParams(window.location.search);
        var id = params.get('id');
        var category = detectCategory();
        if (!id || !category) return false;
        var freeIds = FREE_PROFILE_IDS[category] || [];
        return freeIds.indexOf(id.toLowerCase()) !== -1;
    }

    // ==========================================
    // ✅ GET UNIQUE CARD ID
    // This creates a fingerprint for each card
    // that survives filter/sort/re-render
    // ==========================================

    function getCardUID(card) {
        // Try data attributes first (most reliable)
        var uid = card.getAttribute('data-id') ||
                  card.getAttribute('data-slug') ||
                  card.getAttribute('data-name') ||
                  card.getAttribute('data-title') ||
                  card.getAttribute('data-item') ||
                  card.getAttribute('data-topic');

        if (uid) return uid.toLowerCase().trim();

        // Try href (for <a> cards)
        var href = card.getAttribute('href');
        if (href) {
            // Extract ?id= parameter
            var match = href.match(/[?&]id=([^&]+)/);
            if (match) return match[1].toLowerCase().trim();
            // Use full href as ID
            return href.toLowerCase().trim();
        }

        // Try link inside card
        var link = card.querySelector('a[href]');
        if (link) {
            var lhref = link.getAttribute('href');
            var lmatch = lhref.match(/[?&]id=([^&]+)/);
            if (lmatch) return lmatch[1].toLowerCase().trim();
            return lhref.toLowerCase().trim();
        }

        // Fallback: heading text
        var h = card.querySelector('h1,h2,h3,h4,h5,.topic-title,.card-title,.name,.title');
        if (h) return h.textContent.toLowerCase().trim();

        // Last resort: all text content
        return card.textContent.toLowerCase().trim().substring(0, 50);
    }

    // ==========================================
    // INSTALL CLICK BLOCKER
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
    }

    // ==========================================
    // INJECT STYLES
    // ==========================================

    function injectStyles() {
        if (state.styleInjected) return;
        var style = document.createElement('style');
        style.id = 'geo-premium-styles';
        style.textContent = `
            .geo-free-badge {
                position: absolute !important;
                top: 8px !important; left: 8px !important;
                background: linear-gradient(135deg, #22c55e, #16a34a) !important;
                color: white !important; padding: 4px 10px !important;
                border-radius: 15px !important; font-size: 10px !important;
                font-weight: bold !important; z-index: 999 !important;
                pointer-events: none !important;
            }
            .geo-locked-card {
                position: relative !important; cursor: pointer !important;
                pointer-events: auto !important; overflow: hidden !important;
            }
            .geo-locked-card > *:not(.geo-gift-overlay):not(.geo-ribbon-v):not(.geo-ribbon-h):not(.geo-ribbon-knot):not(.geo-ribbon-dot) {
                pointer-events: none !important;
            }
            .geo-free-card { position: relative !important; }
            .geo-gift-overlay {
                position: absolute !important; inset: 0 !important;
                background: rgba(109,40,217,0.10) !important;
                z-index: 10 !important; pointer-events: none !important;
                border-radius: inherit !important;
            }
            .geo-ribbon-v {
                position: absolute !important; top: 0 !important; bottom: 0 !important;
                left: 50% !important; transform: translateX(-50%) !important;
                width: 22px !important;
                background: linear-gradient(180deg,#4c1d95,#7c3aed,#a855f7,#c084fc,#a855f7,#7c3aed,#4c1d95) !important;
                box-shadow: 2px 0 8px rgba(124,58,237,0.5),-2px 0 8px rgba(124,58,237,0.5) !important;
                z-index: 11 !important; pointer-events: none !important;
            }
            .geo-ribbon-h {
                position: absolute !important; left: 0 !important; right: 0 !important;
                top: 50% !important; transform: translateY(-50%) !important;
                height: 22px !important;
                background: linear-gradient(90deg,#4c1d95,#7c3aed,#a855f7,#c084fc,#a855f7,#7c3aed,#4c1d95) !important;
                box-shadow: 0 2px 8px rgba(124,58,237,0.5),0 -2px 8px rgba(124,58,237,0.5) !important;
                z-index: 11 !important; pointer-events: none !important;
            }
            .geo-ribbon-knot {
                position: absolute !important; top: 50% !important; left: 50% !important;
                transform: translate(-50%,-50%) !important;
                width: 44px !important; height: 44px !important;
                background: linear-gradient(135deg,#1e3a5f,#2563eb,#1e40af) !important;
                border-radius: 50% !important; display: flex !important;
                align-items: center !important; justify-content: center !important;
                font-size: 22px !important;
                box-shadow: 0 0 0 3px white,0 0 0 5px #7c3aed,0 4px 16px rgba(124,58,237,0.7) !important;
                z-index: 12 !important; pointer-events: none !important;
            }
            .geo-ribbon-dot {
                position: absolute !important; width: 9px !important; height: 9px !important;
                background: radial-gradient(circle,#e9d5ff,#7c3aed) !important;
                border-radius: 50% !important;
                box-shadow: 0 0 6px rgba(192,132,252,0.9) !important;
                z-index: 13 !important; pointer-events: none !important;
            }
            .geo-ribbon-dot.tl { top:6px !important; left:6px !important; }
            .geo-ribbon-dot.tr { top:6px !important; right:6px !important; }
            .geo-ribbon-dot.bl { bottom:6px !important; left:6px !important; }
            .geo-ribbon-dot.br { bottom:6px !important; right:6px !important; }

            /* ══ BLUR FOR ENCYCLOPEDIA ══ */
            .geo-blur-wrapper {
                position: relative !important;
            }
            .geo-blur-content {
                filter: blur(6px) !important;
                -webkit-filter: blur(6px) !important;
                user-select: none !important;
                -webkit-user-select: none !important;
                pointer-events: none !important;
            }
            .geo-blur-overlay {
                position: absolute !important;
                top: 0 !important; left: 0 !important;
                width: 100% !important; height: 100% !important;
                z-index: 100 !important;
                display: flex !important;
                align-items: flex-start !important;
                justify-content: center !important;
                padding-top: 120px !important;
                background: linear-gradient(
                    to bottom,
                    rgba(10,10,20,0.3) 0%,
                    rgba(10,10,20,0.7) 15%,
                    rgba(10,10,20,0.9) 40%,
                    rgba(10,10,20,0.97) 100%
                ) !important;
                pointer-events: auto !important;
                cursor: pointer !important;
            }
            .geo-blur-ribbon {
                position: absolute !important;
                top: 30px !important; left: 0 !important; right: 0 !important;
                height: 50px !important;
                background: linear-gradient(90deg,#4c1d95,#7c3aed,#a855f7,#c084fc,#a855f7,#7c3aed,#4c1d95) !important;
                display: flex !important; align-items: center !important;
                justify-content: center !important; gap: 16px !important;
                box-shadow: 0 4px 20px rgba(124,58,237,0.6),0 -4px 20px rgba(124,58,237,0.6) !important;
                pointer-events: none !important;
            }
            .geo-blur-ribbon-earth {
                width: 36px !important; height: 36px !important;
                background: linear-gradient(135deg,#1e3a5f,#2563eb,#1e40af) !important;
                border-radius: 50% !important; display: flex !important;
                align-items: center !important; justify-content: center !important;
                font-size: 20px !important;
                box-shadow: 0 0 0 2px white,0 0 12px rgba(37,99,235,0.8) !important;
            }
            .geo-blur-ribbon-text {
                color: white !important; font-size: 13px !important;
                font-weight: 800 !important; letter-spacing: 2px !important;
                text-transform: uppercase !important;
            }
            .geo-blur-box {
                background: linear-gradient(135deg,rgba(124,58,237,0.2),rgba(168,85,247,0.15)) !important;
                border: 1px solid rgba(124,58,237,0.4) !important;
                border-radius: 20px !important; padding: 32px 40px !important;
                text-align: center !important; max-width: 400px !important;
                width: 90% !important;
                box-shadow: 0 20px 60px rgba(124,58,237,0.3) !important;
            }
            .geo-blur-box h3 {
                color: white !important; font-size: 22px !important;
                font-weight: 800 !important; margin: 12px 0 10px !important;
            }
            .geo-blur-box p {
                color: rgba(255,255,255,0.7) !important; font-size: 14px !important;
                line-height: 1.6 !important; margin: 0 0 20px !important;
            }
            .geo-blur-btn {
                background: linear-gradient(135deg,#a855f7,#7c3aed) !important;
                color: white !important; border: none !important;
                padding: 13px 32px !important; border-radius: 30px !important;
                font-size: 15px !important; font-weight: 700 !important;
                cursor: pointer !important; width: 100% !important;
            }
            .geo-blur-note {
                color: rgba(255,255,255,0.35) !important;
                font-size: 11px !important; margin-top: 10px !important;
            }
            .geo-blur-fade {
                height: 60px !important;
                background: linear-gradient(to bottom, transparent, rgba(10,10,20,0.3)) !important;
                pointer-events: none !important;
            }
        `;
        document.head.appendChild(style);
        state.styleInjected = true;
    }

    // ==========================================
    // FIND GRID CONTAINER
    // ==========================================

    function findContainer() {
        var selectors = [
            '.topics-grid', '.rivers-grid', '.mountains-grid',
            '.lakes-grid', '.forests-grid', '.deserts-grid',
            '.volcanoes-grid', '.islands-grid', '.oceans-grid',
            '.games-grid', '.atlas-grid', '.reefs-grid',
            '.coral-grid', '.cards-grid', '.items-grid',
            '.grid', '#grid', '#cardsGrid', '[class*="-grid"]'
        ];
        for (var i = 0; i < selectors.length; i++) {
            var c = document.querySelector(selectors[i]);
            if (c && c.children.length > 0) return c;
        }
        return null;
    }

    function isValidCard(el) {
        if (!el || !el.tagName) return false;
        var tag = el.tagName.toUpperCase();
        if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'LINK') return false;
        if (el.classList.contains('geo-upgrade-cta')) return false;
        return true;
    }

    // ==========================================
    // STRIP ALL LOCK UI FROM A CARD
    // ==========================================

    function stripCard(card) {
        card.classList.remove('geo-locked-card', 'geo-free-card');
        card.querySelectorAll(
            '.geo-gift-overlay,.geo-ribbon-v,.geo-ribbon-h,' +
            '.geo-ribbon-knot,.geo-ribbon-dot,.geo-free-badge'
        ).forEach(function(el) { el.remove(); });
    }

    // ==========================================
    // MAKE CARD FREE
    // ==========================================

    function makeCardFree(card) {
        stripCard(card);
        card.classList.add('geo-free-card');
        var badge = document.createElement('div');
        badge.className = 'geo-free-badge';
        badge.textContent = '✨ Free';
        card.appendChild(badge);
    }

    // ==========================================
    // MAKE CARD LOCKED
    // ==========================================

    function makeCardLocked(card) {
        stripCard(card);
        card.classList.add('geo-locked-card');

        // Kill the link
        if (card.tagName === 'A') {
            card.setAttribute('data-original-href', card.getAttribute('href') || '');
            card.removeAttribute('href');
        }
        var links = card.querySelectorAll('a[href]');
        links.forEach(function(a) {
            a.setAttribute('data-original-href', a.getAttribute('href') || '');
            a.removeAttribute('href');
        });

        card.appendChild(createEl('div', 'geo-gift-overlay'));
        card.appendChild(createEl('div', 'geo-ribbon-v'));
        card.appendChild(createEl('div', 'geo-ribbon-h'));

        var knot = createEl('div', 'geo-ribbon-knot');
        knot.textContent = '🌍';
        card.appendChild(knot);

        ['tl','tr','bl','br'].forEach(function(pos) {
            card.appendChild(createEl('div', 'geo-ribbon-dot ' + pos));
        });
    }

    function createEl(tag, className) {
        var el = document.createElement(tag);
        el.className = className;
        return el;
    }

    // ==========================================
    // ✅ PROCESS CARDS - THE FIX
    //
    // STEP 1: On FIRST run, scan ALL cards in 
    //         default order. Pick first N UIDs.
    //         Save them forever.
    //
    // STEP 2: On EVERY run (filter/sort/re-render),
    //         check each card's UID against the
    //         saved list. If in list → free.
    //         If not → locked. PERIOD.
    // ==========================================

    function processCards() {
        var container = findContainer();
        if (!container) {
            console.log('💜 No grid container found');
            return;
        }

        var allCards = Array.from(container.children).filter(isValidCard);
        if (allCards.length === 0) return;

        var limit = getFreeLimit(state.category);

        // ════════════════════════════════════════
        // STEP 1: INITIAL SCAN - runs ONCE only
        // Pick the first N card UIDs as free
        // ════════════════════════════════════════
        if (!state.initialScanDone) {
            state.freeItemIDs = [];

            for (var i = 0; i < allCards.length && state.freeItemIDs.length < limit; i++) {
                var uid = getCardUID(allCards[i]);
                if (uid && state.freeItemIDs.indexOf(uid) === -1) {
                    state.freeItemIDs.push(uid);
                }
            }

            state.initialScanDone = true;
            console.log('💜 FREE LIST LOCKED (' + state.freeItemIDs.length + '):', state.freeItemIDs);
        }

        // ════════════════════════════════════════
        // STEP 2: APPLY free/locked to ALL cards
        // This runs on every filter/sort change
        // ════════════════════════════════════════
        var stats = { free: 0, locked: 0 };

        allCards.forEach(function(card) {
            var uid = getCardUID(card);
            var isFree = state.freeItemIDs.indexOf(uid) !== -1;

            if (isFree) {
                makeCardFree(card);
                stats.free++;
            } else {
                makeCardLocked(card);
                stats.locked++;
            }
        });

        console.log('💜 Applied - Free:', stats.free, '| Locked:', stats.locked);

        // Add/update CTA
        if (stats.locked > 0) {
            addUpgradeCTA(container, stats.locked, stats.free, allCards.length);
        }
    }

    // ==========================================
    // UPGRADE CTA
    // ==========================================

    function addUpgradeCTA(container, locked, free, total) {
        var old = container.querySelector('.geo-upgrade-cta');
        if (old) old.remove();

        var names = {
            mountains: 'Mountains', rivers: 'Rivers', lakes: 'Lakes',
            oceans: 'Oceans', forests: 'Forests', deserts: 'Deserts',
            volcanoes: 'Volcanoes', islands: 'Islands',
            'coral-reefs': 'Coral Reefs', games: 'Games',
            upsc: 'Topics', atlas: 'Maps'
        };

        var cta = document.createElement('div');
        cta.className = 'geo-upgrade-cta';
        cta.style.cssText =
            'grid-column:1/-1;background:linear-gradient(135deg,#7c3aed,#5b21b6);' +
            'border-radius:20px;padding:40px 25px;text-align:center;color:white;margin:25px 0;';

        cta.innerHTML =
            '<div style="font-size:50px;margin-bottom:15px;">💜</div>' +
            '<h3 style="font-size:24px;margin:0 0 10px;">Keep Discovering!</h3>' +
            '<div style="font-size:50px;font-weight:bold;margin:15px 0;">' + locked + '</div>' +
            '<p style="font-size:16px;margin-bottom:20px;">more ' +
                (names[state.category] || 'items') + ' waiting!</p>' +
            '<button id="geo-unlock-btn" style="background:white;color:#7c3aed;' +
                'border:none;padding:14px 40px;border-radius:30px;font-size:16px;' +
                'font-weight:bold;cursor:pointer;">💜 Unlock All</button>' +
            '<p style="font-size:12px;opacity:0.6;margin-top:15px;">' +
                free + ' of ' + total + ' free</p>';

        container.appendChild(cta);
        document.getElementById('geo-unlock-btn')
            .addEventListener('click', showUpgradeModal);
    }

    // ==========================================
    // ✅ ENCYCLOPEDIA BLUR - COMPLETELY REWRITTEN
    //
    // Strategy: Don't try to find a "content wrapper"
    // Instead, measure total page height,
    // show first 1/8, cover the rest with
    // a fixed overlay + blur backdrop
    // ==========================================

    function applyBlurLock() {
        if (state.blurApplied) return;
        state.blurApplied = true;

        console.log('💜 Applying encyclopedia blur...');

        // ─── Calculate page dimensions ───
        var totalHeight = Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight,
            document.body.offsetHeight
        );

        var freeHeight = Math.floor(totalHeight / 8);
        var cutoffPoint = freeHeight;

        console.log('💜 Page height:', totalHeight, '| Free:', freeHeight, '| Cutoff:', cutoffPoint);

        // ─── Prevent scrolling past the cutoff ───
        document.documentElement.style.overflow = 'hidden';
        document.documentElement.style.height = '100vh';

        // ─── Create a clipping container ───
        // We allow scrolling within the free zone only
        document.body.style.maxHeight = cutoffPoint + 'px';
        document.body.style.overflow = 'hidden';

        // ─── Build the blur overlay ───
        var overlay = document.createElement('div');
        overlay.id = 'geo-encyc-blur-overlay';
        overlay.style.cssText =
            'position:fixed;' +
            'bottom:0;left:0;right:0;' +
            'height:' + Math.max(window.innerHeight - cutoffPoint + 100, window.innerHeight * 0.5) + 'px;' +
            'z-index:99999;' +
            'display:flex;align-items:center;justify-content:center;flex-direction:column;' +
            'background:linear-gradient(to bottom,' +
                'rgba(10,10,20,0.2) 0%,' +
                'rgba(10,10,20,0.6) 10%,' +
                'rgba(10,10,20,0.85) 25%,' +
                'rgba(10,10,20,0.95) 50%,' +
                'rgba(10,10,20,0.98) 100%);' +
            'pointer-events:auto;' +
            'backdrop-filter:blur(4px);' +
            '-webkit-backdrop-filter:blur(4px);';

        // ─── Purple ribbon ───
        var ribbon = document.createElement('div');
        ribbon.className = 'geo-blur-ribbon';
        ribbon.style.cssText =
            'position:absolute;top:20px;left:0;right:0;height:50px;' +
            'background:linear-gradient(90deg,#4c1d95,#7c3aed,#a855f7,#c084fc,#a855f7,#7c3aed,#4c1d95);' +
            'display:flex;align-items:center;justify-content:center;gap:16px;' +
            'box-shadow:0 4px 20px rgba(124,58,237,0.6),0 -4px 20px rgba(124,58,237,0.6);' +
            'pointer-events:none;';

        ribbon.innerHTML =
            '<div style="width:36px;height:36px;background:linear-gradient(135deg,#1e3a5f,#2563eb,#1e40af);' +
                'border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:20px;' +
                'box-shadow:0 0 0 2px white;">🌍</div>' +
            '<span style="color:white;font-size:13px;font-weight:800;letter-spacing:2px;text-transform:uppercase;">' +
                '✦ Premium Content ✦</span>' +
            '<div style="width:36px;height:36px;background:linear-gradient(135deg,#1e3a5f,#2563eb,#1e40af);' +
                'border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:20px;' +
                'box-shadow:0 0 0 2px white;">🌍</div>';

        // ─── Premium box ───
        var msg = BTS_MESSAGES[Math.floor(Math.random() * BTS_MESSAGES.length)];

        var box = document.createElement('div');
        box.style.cssText =
            'background:linear-gradient(135deg,rgba(124,58,237,0.2),rgba(168,85,247,0.15));' +
            'border:1px solid rgba(124,58,237,0.4);border-radius:20px;' +
            'padding:32px 40px;text-align:center;max-width:400px;width:90%;' +
            'box-shadow:0 20px 60px rgba(124,58,237,0.3);margin-top:90px;';

        box.innerHTML =
            '<div style="font-size:48px;">💜</div>' +
            '<h3 style="color:white;font-size:22px;font-weight:800;margin:12px 0 10px;">' +
                msg.title + '</h3>' +
            '<p style="color:rgba(255,255,255,0.7);font-size:14px;line-height:1.6;margin:0 0 20px;">' +
                msg.subtitle + '<br><br>Unlock the full content with Premium!</p>' +
            '<button id="geo-blur-unlock" style="background:linear-gradient(135deg,#a855f7,#7c3aed);' +
                'color:white;border:none;padding:13px 32px;border-radius:30px;font-size:15px;' +
                'font-weight:700;cursor:pointer;width:100%;">💜 Unlock Full Access</button>' +
            '<p style="color:rgba(255,255,255,0.35);font-size:11px;margin-top:10px;">' +
                '보라해 💜 · Plans from ₹299/year</p>';

        overlay.appendChild(ribbon);
        overlay.appendChild(box);

        // ─── Append to html (not body, so it's outside the overflow:hidden) ───
        document.documentElement.appendChild(overlay);

        // ─── Events ───
        document.getElementById('geo-blur-unlock')
            .addEventListener('click', function(e) {
                e.stopPropagation();
                showUpgradeModal();
            });

        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) showUpgradeModal();
        });

        // ─── Block scroll attempts ───
        window.addEventListener('scroll', function() {
            if (window.scrollY > cutoffPoint - 50) {
                window.scrollTo(0, cutoffPoint - 50);
            }
        });

        // ─── Block keyboard scrolling ───
        window.addEventListener('keydown', function(e) {
            var scrollKeys = [32, 33, 34, 35, 36, 38, 40]; // space, pgup, pgdn, home, end, up, down
            if (scrollKeys.indexOf(e.keyCode) !== -1) {
                if (window.scrollY > cutoffPoint - 100) {
                    e.preventDefault();
                }
            }
        });

        console.log('💜 Encyclopedia blur applied! Cutoff at ' + cutoffPoint + 'px');
    }

    // ==========================================
    // FULL PAGE LOCK (locked profiles)
    // ==========================================

    function applyFullPageLock() {
        var msg = BTS_MESSAGES[Math.floor(Math.random() * BTS_MESSAGES.length)];

        document.body.style.cssText +=
            'filter:blur(8px);pointer-events:none;user-select:none;overflow:hidden;';

        var overlay = document.createElement('div');
        overlay.id = 'geo-fullpage-lock';
        overlay.style.cssText =
            'position:fixed;inset:0;z-index:999999;display:flex;' +
            'align-items:center;justify-content:center;' +
            'background:rgba(10,10,20,0.85);backdrop-filter:blur(4px);pointer-events:auto;';

        var ribbon = document.createElement('div');
        ribbon.style.cssText =
            'position:absolute;top:0;left:0;right:0;height:55px;' +
            'background:linear-gradient(90deg,#4c1d95,#7c3aed,#a855f7,#c084fc,#a855f7,#7c3aed,#4c1d95);' +
            'display:flex;align-items:center;justify-content:center;gap:16px;' +
            'box-shadow:0 4px 20px rgba(124,58,237,0.6);';
        ribbon.innerHTML =
            '<div style="width:36px;height:36px;background:linear-gradient(135deg,#1e3a5f,#2563eb,#1e40af);' +
                'border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:20px;' +
                'box-shadow:0 0 0 2px white;">🌍</div>' +
            '<span style="color:white;font-size:14px;font-weight:800;letter-spacing:2px;text-transform:uppercase;">' +
                '✦ Premium Content ✦</span>' +
            '<div style="width:36px;height:36px;background:linear-gradient(135deg,#1e3a5f,#2563eb,#1e40af);' +
                'border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:20px;' +
                'box-shadow:0 0 0 2px white;">🌍</div>';

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

        var box = document.createElement('div');
        box.style.cssText =
            'background:linear-gradient(145deg,#1e1b4b,#312e81);border-radius:24px;' +
            'padding:40px;max-width:420px;width:90%;text-align:center;' +
            'box-shadow:0 20px 60px rgba(124,58,237,0.4);';
        box.innerHTML =
            '<div style="font-size:56px;margin-bottom:14px;">💜</div>' +
            '<h2 style="color:white;font-size:24px;font-weight:800;margin:0 0 10px;">' +
                msg.title + '</h2>' +
            '<p style="color:rgba(255,255,255,0.7);font-size:14px;line-height:1.7;margin:0 0 24px;">' +
                msg.subtitle + '<br><br>This content is for Premium members only.</p>' +
            '<button id="geo-fp-unlock" style="background:linear-gradient(135deg,#a855f7,#7c3aed);' +
                'color:white;border:none;padding:14px 32px;border-radius:30px;font-size:15px;' +
                'font-weight:700;cursor:pointer;width:100%;margin-bottom:12px;">💜 Unlock Full Access</button>' +
            '<a href="' + backUrl + '" style="display:inline-block;color:rgba(255,255,255,0.4);' +
                'font-size:12px;text-decoration:none;pointer-events:auto;">← Go Back</a>' +
            '<p style="color:rgba(255,255,255,0.3);font-size:11px;margin-top:10px;">보라해 💜</p>';

        overlay.appendChild(ribbon);
        overlay.appendChild(box);
        document.body.appendChild(overlay);

        document.getElementById('geo-fp-unlock')
            .addEventListener('click', function() { window.location.href = '/pricing.html'; });
    }

    // ==========================================
    // UPGRADE MODAL
    // ==========================================

    function showUpgradeModal() {
        var existing = document.getElementById('geo-premium-modal');
        if (existing) existing.remove();

        var msg = BTS_MESSAGES[Math.floor(Math.random() * BTS_MESSAGES.length)];

        var modal = document.createElement('div');
        modal.id = 'geo-premium-modal';
        modal.style.cssText =
            'position:fixed;top:0;left:0;width:100%;height:100%;' +
            'background:rgba(88,28,135,0.95);z-index:999999;' +
            'display:flex;align-items:center;justify-content:center;';

        modal.innerHTML =
            '<div style="background:linear-gradient(145deg,#1e1b4b,#312e81);' +
                'border-radius:25px;padding:40px;max-width:400px;width:90%;text-align:center;">' +
                '<div style="font-size:60px;margin-bottom:15px;">💜</div>' +
                '<h2 style="color:white;font-size:24px;margin:0 0 10px;">' + msg.title + '</h2>' +
                '<p style="color:rgba(255,255,255,0.8);font-size:14px;margin-bottom:25px;">' +
                    msg.subtitle + '</p>' +
                '<button id="geo-pricing-btn" style="background:linear-gradient(135deg,#a855f7,#7c3aed);' +
                    'color:white;border:none;padding:14px 35px;border-radius:30px;font-size:16px;' +
                    'font-weight:bold;cursor:pointer;width:100%;">💜 View Plans</button>' +
                '<p style="color:rgba(255,255,255,0.4);font-size:11px;margin-top:15px;">보라해 💜</p>' +
            '</div>';

        document.body.appendChild(modal);

        modal.addEventListener('click', function(e) {
            if (e.target === modal) modal.remove();
        });

        document.getElementById('geo-pricing-btn')
            .addEventListener('click', function() { window.location.href = '/pricing.html'; });
    }

    // ==========================================
    // ✅ OBSERVER - watches for DOM changes
    // Re-applies locks using the SAME free list
    // ==========================================

    function startObserver() {
        var timer;
        var observer = new MutationObserver(function(mutations) {
            // Only care about childList changes in the grid
            var dominated = false;
            for (var i = 0; i < mutations.length; i++) {
                if (mutations[i].addedNodes.length > 0) {
                    dominated = true;
                    break;
                }
            }
            if (!dominated) return;

            clearTimeout(timer);
            timer = setTimeout(function() {
                console.log('💜 DOM changed - re-applying locks');
                processCards();
            }, 300);
        });

        var container = findContainer();
        if (container) {
            // Watch the grid container specifically
            observer.observe(container, { childList: true, subtree: false });
            console.log('💜 Observer watching grid container');
        } else {
            // Fallback: watch body
            observer.observe(document.body, { childList: true, subtree: true });
            console.log('💜 Observer watching body');
        }

        state.observer = observer;
    }

    // ==========================================
    // ✅ INTERCEPT YOUR PAGE'S FILTER/SORT JS
    //
    // This is the NUCLEAR option. We intercept
    // ALL ways your page JS can show/hide/reorder
    // cards: display changes, appendChild, etc.
    //
    // After any DOM change, we re-apply locks.
    // The free list NEVER changes.
    // ==========================================

    function interceptFiltersAndSorts() {
        // Intercept clicks on ANYTHING that looks like a filter/sort
        document.addEventListener('click', function(e) {
            var target = e.target;

            // Check if it's a filter/sort button
            var isFilterSort =
                target.matches('[data-filter],[data-category],[data-sort],[data-order],' +
                    '.filter-btn,.tab-btn,.category-btn,.cat-btn,.sort-btn,' +
                    '[data-tab],.tab,[role="tab"],.nav-pill,.nav-tab,' +
                    'button[class*="filter"],button[class*="tab"],button[class*="sort"],' +
                    'a[class*="filter"],a[class*="tab"],.filter-item,.category-item,' +
                    '.sort-option,.dropdown-item,select,option') ||
                target.closest('[data-filter],[data-category],[data-sort],[data-order],' +
                    '.filter-btn,.tab-btn,.category-btn,.sort-btn,[data-tab],.tab');

            if (isFilterSort) {
                console.log('💜 Filter/Sort detected:', target.textContent.trim().substring(0, 30));

                // Re-apply after DOM updates
                setTimeout(processCards, 100);
                setTimeout(processCards, 300);
                setTimeout(processCards, 600);
                setTimeout(processCards, 1000);
            }
        }, true); // Capture phase

        // Also intercept select/dropdown changes
        document.addEventListener('change', function(e) {
            if (e.target.tagName === 'SELECT') {
                console.log('💜 Select changed');
                setTimeout(processCards, 100);
                setTimeout(processCards, 300);
                setTimeout(processCards, 600);
            }
        }, true);

        console.log('💜 Filter/Sort interceptor installed');
    }

    // ==========================================
    // ✅ MAIN INITIALIZE
    // ==========================================

    function initialize() {
        console.log('💜 ════════════════════════════════');
        console.log('💜 Premium Wrapper v2 Init');

        state.pageType = detectPageType();
        state.category = detectCategory();

        console.log('💜 URL:', window.location.pathname);
        console.log('💜 Page type:', state.pageType);
        console.log('💜 Category:', state.category);

        // ── FREE PAGE ──
        if (state.pageType === 'free') {
            console.log('💜 Free page - no locks');
            return;
        }

        // ── PREMIUM USER ──
        if (isPremium()) {
            console.log('💜 Premium user - no locks');
            return;
        }

        // ── GRID PAGE ──
        if (state.pageType === 'grid') {
            console.log('💜 === GRID PAGE ===');

            var plan = localStorage.getItem('dv_plan') || 'basic';
            if (plan === 'pro' && state.category === 'upsc') {
                console.log('💜 Pro plan + UPSC = 0 free');
            }

            injectStyles();
            installGlobalClickBlocker();

            // Reset for fresh page
            state.freeItemIDs = [];
            state.initialScanDone = false;

            // Process cards
            processCards();

            // Start observer
            startObserver();

            // Install filter/sort interceptor
            interceptFiltersAndSorts();

            // Retry for late-loading cards
            setTimeout(function() {
                if (!state.initialScanDone) processCards();
            }, 1000);
            setTimeout(function() {
                if (!state.initialScanDone) processCards();
            }, 2500);

            return;
        }

        // ── PROFILE PAGE ──
        if (state.pageType === 'profile') {
            if (isProfileFree()) {
                console.log('💜 Free profile');
                return;
            }
            console.log('💜 Locked profile');
            injectStyles();
            if (document.readyState === 'complete') {
                applyFullPageLock();
            } else {
                window.addEventListener('load', applyFullPageLock);
            }
            return;
        }

        // ── ENCYCLOPEDIA SUB-PAGE ──
        if (state.pageType === 'encyc-blur') {
            console.log('💜 === ENCYCLOPEDIA SUB-PAGE ===');
            injectStyles();

            // Must wait for full page load
            function tryBlur() {
                if (state.blurApplied) return;
                var h = document.body.scrollHeight;
                console.log('💜 Page height:', h);
                if (h > 200) {
                    applyBlurLock();
                } else {
                    console.log('💜 Page not ready, retrying...');
                    setTimeout(tryBlur, 500);
                }
            }

            if (document.readyState === 'complete') {
                setTimeout(tryBlur, 300);
            } else {
                window.addEventListener('load', function() {
                    setTimeout(tryBlur, 300);
                });
            }

            // Fallback retries
            setTimeout(tryBlur, 2000);
            setTimeout(tryBlur, 4000);

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

    window.GeoPremiumWrapper = {
        showUpgrade: showUpgradeModal,
        reprocess: processCards,
        getState: function() { return state; },
        reset: function() {
            state.freeItemIDs = [];
            state.initialScanDone = false;
            processCards();
        }
    };

    console.log('💜 Premium Wrapper v2 Loaded');
})();
