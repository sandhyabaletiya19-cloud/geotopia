// ========================================
// 💜 PREMIUM WRAPPER - DHARAVERSE v4 FINAL
// ========================================

(function() {
    'use strict';

    console.log('💜 Premium Wrapper v4 Loading...');

    // ==========================================
    // FREE PROFILE IDs
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
    // ✅ FREE ENCYCLOPEDIA PAGES
    // Exact paths that are always FREE
    // Everything else in /encyclopedia/ is LOCKED
    // ==========================================

    var FREE_ENCYCLOPEDIA_PAGES = [
        // Main grid
        '/encyclopedia/encyclopedia.html',
        '/encyclopedia/',
        '/encyclopedia/index.html',

        // All index.html pages (entry points)
        'index.html',

        // Historical geography main page
        'historical-geo.html',

        // Two specific free sub-pages
        'celestial-effects.html',
        'gibralter.html'
    ];

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
        freeItemIDs: [],
        styleInjected: false,
        globalClickHandler: null,
        initialScanDone: false
    };

    // ==========================================
    // ✅ DETECT PAGE TYPE - SIMPLE CLEAR LOGIC
    // ==========================================

    function detectPageType() {
        var path = window.location.pathname.toLowerCase();
        var filename = path.split('/').pop(); // e.g. "index.html", "rivers.html"

        // ══════════════════════════════════════
        // ENCYCLOPEDIA PAGES
        // ══════════════════════════════════════
        if (path.includes('/encyclopedia/')) {

            // Main grid page = FREE
            if (path.endsWith('/encyclopedia/encyclopedia.html') ||
                path.endsWith('/encyclopedia/') ||
                path === '/encyclopedia') {
                console.log('💜 DETECT: Encyclopedia main grid = FREE');
                return 'free';
            }

            // Check if this exact filename is in the free list
            var isFree = false;
            for (var i = 0; i < FREE_ENCYCLOPEDIA_PAGES.length; i++) {
                var freePage = FREE_ENCYCLOPEDIA_PAGES[i];
                if (filename === freePage || path.endsWith(freePage)) {
                    isFree = true;
                    break;
                }
            }

            if (isFree) {
                console.log('💜 DETECT: Encyclopedia FREE page:', filename);
                return 'free';
            }

            // Everything else in encyclopedia = LOCKED
            console.log('💜 DETECT: Encyclopedia LOCKED page:', filename);
            return 'encyc-locked';
        }

        // ══════════════════════════════════════
        // GRID PAGES (mountains, rivers, upsc etc)
        // ══════════════════════════════════════
        var gridPages = [
            'mountains.html', 'rivers.html', 'lakes.html',
            'oceans.html', 'seas.html', 'coral-reefs.html',
            'deserts.html', 'islands.html', 'forests.html',
            'volcanoes.html', 'games.html', 'upsc.html',
            'atlas.html'
        ];

        // Only match if the file is directly inside its category folder
        for (var j = 0; j < gridPages.length; j++) {
            if (filename === gridPages[j]) {
                // Make sure it's the grid page, not a sub-page
                var isGrid = (
                    path.endsWith('/mountains/mountains.html') ||
                    path.endsWith('/rivers/rivers.html') ||
                    path.endsWith('/lakes/lakes.html') ||
                    path.endsWith('/oceans/oceans.html') ||
                    path.endsWith('/oceans/seas.html') ||
                    path.endsWith('/coral-reefs/coral-reefs.html') ||
                    path.endsWith('/deserts/deserts.html') ||
                    path.endsWith('/islands/islands.html') ||
                    path.endsWith('/forests/forests.html') ||
                    path.endsWith('/volcanoes/volcanoes.html') ||
                    path.endsWith('/games/games.html') ||
                    path.endsWith('/upsc/upsc.html') ||
                    path.endsWith('/atlas/atlas.html')
                );
                if (isGrid) return 'grid';
            }
        }

        // ══════════════════════════════════════
        // PROFILE PAGES
        // ══════════════════════════════════════
        if (filename.endsWith('-profile.html')) return 'profile';

        // ══════════════════════════════════════
        // EVERYTHING ELSE = FREE
        // ══════════════════════════════════════
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
    // GET UNIQUE CARD ID
    // ==========================================

    function getCardUID(card) {
        var uid = card.getAttribute('data-id') ||
                  card.getAttribute('data-slug') ||
                  card.getAttribute('data-name') ||
                  card.getAttribute('data-title') ||
                  card.getAttribute('data-item') ||
                  card.getAttribute('data-topic');
        if (uid) return uid.toLowerCase().trim();

        var href = card.getAttribute('href');
        if (href) {
            var match = href.match(/[?&]id=([^&]+)/);
            if (match) return match[1].toLowerCase().trim();
            return href.toLowerCase().trim();
        }

        var link = card.querySelector('a[href]');
        if (link) {
            var lhref = link.getAttribute('href');
            var lmatch = lhref.match(/[?&]id=([^&]+)/);
            if (lmatch) return lmatch[1].toLowerCase().trim();
            return lhref.toLowerCase().trim();
        }

        var h = card.querySelector('h1,h2,h3,h4,h5,.topic-title,.card-title,.name,.title');
        if (h) return h.textContent.toLowerCase().trim();

        return card.textContent.toLowerCase().trim().substring(0, 50);
    }

    // ==========================================
    // CLICK BLOCKER
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
        style.textContent = [
            '.geo-free-badge{position:absolute!important;top:8px!important;left:8px!important;background:linear-gradient(135deg,#22c55e,#16a34a)!important;color:white!important;padding:4px 10px!important;border-radius:15px!important;font-size:10px!important;font-weight:bold!important;z-index:999!important;pointer-events:none!important;}',
            '.geo-locked-card{position:relative!important;cursor:pointer!important;pointer-events:auto!important;overflow:hidden!important;}',
            '.geo-locked-card>*:not(.geo-gift-overlay):not(.geo-ribbon-v):not(.geo-ribbon-h):not(.geo-ribbon-knot):not(.geo-ribbon-dot){pointer-events:none!important;}',
            '.geo-free-card{position:relative!important;}',
            '.geo-gift-overlay{position:absolute!important;inset:0!important;background:rgba(109,40,217,0.10)!important;z-index:10!important;pointer-events:none!important;border-radius:inherit!important;}',
            '.geo-ribbon-v{position:absolute!important;top:0!important;bottom:0!important;left:50%!important;transform:translateX(-50%)!important;width:22px!important;background:linear-gradient(180deg,#4c1d95,#7c3aed,#a855f7,#c084fc,#a855f7,#7c3aed,#4c1d95)!important;box-shadow:2px 0 8px rgba(124,58,237,0.5),-2px 0 8px rgba(124,58,237,0.5)!important;z-index:11!important;pointer-events:none!important;}',
            '.geo-ribbon-h{position:absolute!important;left:0!important;right:0!important;top:50%!important;transform:translateY(-50%)!important;height:22px!important;background:linear-gradient(90deg,#4c1d95,#7c3aed,#a855f7,#c084fc,#a855f7,#7c3aed,#4c1d95)!important;box-shadow:0 2px 8px rgba(124,58,237,0.5),0 -2px 8px rgba(124,58,237,0.5)!important;z-index:11!important;pointer-events:none!important;}',
            '.geo-ribbon-knot{position:absolute!important;top:50%!important;left:50%!important;transform:translate(-50%,-50%)!important;width:44px!important;height:44px!important;background:linear-gradient(135deg,#1e3a5f,#2563eb,#1e40af)!important;border-radius:50%!important;display:flex!important;align-items:center!important;justify-content:center!important;font-size:22px!important;box-shadow:0 0 0 3px white,0 0 0 5px #7c3aed,0 4px 16px rgba(124,58,237,0.7)!important;z-index:12!important;pointer-events:none!important;}',
            '.geo-ribbon-dot{position:absolute!important;width:9px!important;height:9px!important;background:radial-gradient(circle,#e9d5ff,#7c3aed)!important;border-radius:50%!important;box-shadow:0 0 6px rgba(192,132,252,0.9)!important;z-index:13!important;pointer-events:none!important;}',
            '.geo-ribbon-dot.tl{top:6px!important;left:6px!important;}',
            '.geo-ribbon-dot.tr{top:6px!important;right:6px!important;}',
            '.geo-ribbon-dot.bl{bottom:6px!important;left:6px!important;}',
            '.geo-ribbon-dot.br{bottom:6px!important;right:6px!important;}'
        ].join('\n');
        document.head.appendChild(style);
        state.styleInjected = true;
    }

    // ==========================================
    // FIND GRID CONTAINER
    // ==========================================

    function findContainer() {
        var selectors = [
            '.topics-grid','.rivers-grid','.mountains-grid',
            '.lakes-grid','.forests-grid','.deserts-grid',
            '.volcanoes-grid','.islands-grid','.oceans-grid',
            '.games-grid','.atlas-grid','.reefs-grid',
            '.coral-grid','.cards-grid','.items-grid',
            '.categories-grid','.sections-grid','.modules-grid',
            '.content-grid','.main-grid',
            '.grid','#grid','#cardsGrid','[class*="-grid"]'
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
    // CARD UI
    // ==========================================

    function stripCard(card) {
        card.classList.remove('geo-locked-card','geo-free-card');
        card.querySelectorAll('.geo-gift-overlay,.geo-ribbon-v,.geo-ribbon-h,.geo-ribbon-knot,.geo-ribbon-dot,.geo-free-badge')
            .forEach(function(el) { el.remove(); });
    }

    function makeCardFree(card) {
        stripCard(card);
        card.classList.add('geo-free-card');
        var badge = document.createElement('div');
        badge.className = 'geo-free-badge';
        badge.textContent = '✨ Free';
        card.appendChild(badge);
    }

    function makeCardLocked(card) {
        stripCard(card);
        card.classList.add('geo-locked-card');
        if (card.tagName === 'A') {
            card.setAttribute('data-original-href', card.getAttribute('href') || '');
            card.removeAttribute('href');
        }
        card.querySelectorAll('a[href]').forEach(function(a) {
            a.setAttribute('data-original-href', a.getAttribute('href') || '');
            a.removeAttribute('href');
        });

        var ov = document.createElement('div'); ov.className='geo-gift-overlay'; card.appendChild(ov);
        var rv = document.createElement('div'); rv.className='geo-ribbon-v'; card.appendChild(rv);
        var rh = document.createElement('div'); rh.className='geo-ribbon-h'; card.appendChild(rh);
        var knot = document.createElement('div'); knot.className='geo-ribbon-knot'; knot.textContent='🌍'; card.appendChild(knot);
        ['tl','tr','bl','br'].forEach(function(pos) {
            var dot = document.createElement('div'); dot.className='geo-ribbon-dot '+pos; card.appendChild(dot);
        });
    }

    // ==========================================
    // PROCESS GRID CARDS (mountains, rivers, upsc etc)
    // ==========================================

    function processCards() {
        var container = findContainer();
        if (!container) return;

        var allCards = Array.from(container.children).filter(isValidCard);
        if (allCards.length === 0) return;

        var limit = getFreeLimit(state.category);

        // First run: freeze the free list
        if (!state.initialScanDone) {
            state.freeItemIDs = [];
            for (var i = 0; i < allCards.length && state.freeItemIDs.length < limit; i++) {
                var uid = getCardUID(allCards[i]);
                if (uid && state.freeItemIDs.indexOf(uid) === -1) {
                    state.freeItemIDs.push(uid);
                }
            }
            state.initialScanDone = true;
            console.log('💜 FREE LIST LOCKED:', state.freeItemIDs);
        }

        // Apply
        var stats = { free: 0, locked: 0 };
        allCards.forEach(function(card) {
            var uid = getCardUID(card);
            if (state.freeItemIDs.indexOf(uid) !== -1) {
                makeCardFree(card);
                stats.free++;
            } else {
                makeCardLocked(card);
                stats.locked++;
            }
        });

        console.log('💜 Grid - Free:', stats.free, '| Locked:', stats.locked);
        if (stats.locked > 0) addUpgradeCTA(container, stats.locked, stats.free, allCards.length);
    }

    // ==========================================
    // UPGRADE CTA
    // ==========================================

    function addUpgradeCTA(container, locked, free, total) {
        var old = container.querySelector('.geo-upgrade-cta');
        if (old) old.remove();

        var names = {
            mountains:'Mountains',rivers:'Rivers',lakes:'Lakes',
            oceans:'Oceans',forests:'Forests',deserts:'Deserts',
            volcanoes:'Volcanoes',islands:'Islands',
            'coral-reefs':'Coral Reefs',games:'Games',
            upsc:'Topics',atlas:'Maps',encyclopedia:'Sections'
        };

        var cta = document.createElement('div');
        cta.className = 'geo-upgrade-cta';
        cta.style.cssText =
            'grid-column:1/-1;background:linear-gradient(135deg,#7c3aed,#5b21b6);' +
            'border-radius:20px;padding:40px 25px;text-align:center;color:white;margin:25px 0;';
        cta.innerHTML =
            '<div style="font-size:50px;margin-bottom:15px;">💜</div>' +
            '<h3 style="font-size:24px;margin:0 0 10px;">Keep Discovering!</h3>' +
            '<div style="font-size:50px;font-weight:bold;margin:15px 0;">'+locked+'</div>' +
            '<p style="font-size:16px;margin-bottom:20px;">more '+(names[state.category]||'items')+' waiting!</p>' +
            '<button id="geo-unlock-btn" style="background:white;color:#7c3aed;border:none;padding:14px 40px;border-radius:30px;font-size:16px;font-weight:bold;cursor:pointer;">💜 Unlock All</button>' +
            '<p style="font-size:12px;opacity:0.6;margin-top:15px;">'+free+' of '+total+' free</p>';
        container.appendChild(cta);
        document.getElementById('geo-unlock-btn').addEventListener('click', showUpgradeModal);
    }

    // ==========================================
    // ✅ FULL PAGE LOCK
    // Used for:
    //   - Locked encyclopedia sub-pages
    //   - Locked profile pages
    // ==========================================

    function applyFullPageLock() {
        // Don't double-apply
        if (document.getElementById('geo-fullpage-lock')) return;

        var msg = BTS_MESSAGES[Math.floor(Math.random() * BTS_MESSAGES.length)];

        // Blur body
        document.body.style.filter = 'blur(8px)';
        document.body.style.pointerEvents = 'none';
        document.body.style.userSelect = 'none';
        document.body.style.overflow = 'hidden';

        // Overlay
        var overlay = document.createElement('div');
        overlay.id = 'geo-fullpage-lock';
        overlay.style.cssText =
            'position:fixed;inset:0;z-index:999999;display:flex;' +
            'align-items:center;justify-content:center;' +
            'background:rgba(10,10,20,0.85);backdrop-filter:blur(4px);pointer-events:auto;';

        // Ribbon
        var ribbon = document.createElement('div');
        ribbon.style.cssText =
            'position:absolute;top:0;left:0;right:0;height:55px;' +
            'background:linear-gradient(90deg,#4c1d95,#7c3aed,#a855f7,#c084fc,#a855f7,#7c3aed,#4c1d95);' +
            'display:flex;align-items:center;justify-content:center;gap:16px;' +
            'box-shadow:0 4px 20px rgba(124,58,237,0.6);';
        ribbon.innerHTML =
            '<div style="width:36px;height:36px;background:linear-gradient(135deg,#1e3a5f,#2563eb,#1e40af);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:20px;box-shadow:0 0 0 2px white;">🌍</div>' +
            '<span style="color:white;font-size:14px;font-weight:800;letter-spacing:2px;text-transform:uppercase;">✦ Premium Content ✦</span>' +
            '<div style="width:36px;height:36px;background:linear-gradient(135deg,#1e3a5f,#2563eb,#1e40af);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:20px;box-shadow:0 0 0 2px white;">🌍</div>';

        // Back URL
        var path = window.location.pathname;
        var backUrl = '/';
        if (path.includes('/encyclopedia/')) {
            // Go back to the index.html of the current encyclopedia folder
            var parts = path.split('/');
            parts.pop(); // remove current file
            backUrl = parts.join('/') + '/index.html';
            // If that would be /encyclopedia/index.html, go to encyclopedia.html
            if (backUrl === '/encyclopedia/index.html' || backUrl.endsWith('/encyclopedia/index.html')) {
                backUrl = '/encyclopedia/encyclopedia.html';
            }
        }
        else if (path.includes('/mountains/'))    backUrl = '/mountains/mountains.html';
        else if (path.includes('/rivers/'))       backUrl = '/rivers/rivers.html';
        else if (path.includes('/lakes/'))        backUrl = '/lakes/lakes.html';
        else if (path.includes('/deserts/'))      backUrl = '/deserts/deserts.html';
        else if (path.includes('/forests/'))      backUrl = '/forests/forests.html';
        else if (path.includes('/islands/'))      backUrl = '/islands/islands.html';
        else if (path.includes('/oceans/'))       backUrl = '/oceans/oceans.html';
        else if (path.includes('/coral-reefs/'))  backUrl = '/coral-reefs/coral-reefs.html';
        else if (path.includes('/upsc/'))         backUrl = '/upsc/upsc.html';
        else if (path.includes('/volcanoes/'))    backUrl = '/volcanoes/volcanoes.html';

        // Box
        var box = document.createElement('div');
        box.style.cssText =
            'background:linear-gradient(145deg,#1e1b4b,#312e81);border-radius:24px;' +
            'padding:40px;max-width:420px;width:90%;text-align:center;' +
            'box-shadow:0 20px 60px rgba(124,58,237,0.4);';
        box.innerHTML =
            '<div style="font-size:56px;margin-bottom:14px;">💜</div>' +
            '<h2 style="color:white;font-size:24px;font-weight:800;margin:0 0 10px;">'+msg.title+'</h2>' +
            '<p style="color:rgba(255,255,255,0.7);font-size:14px;line-height:1.7;margin:0 0 24px;">' +
                msg.subtitle+'<br><br>This content is for Premium members only.</p>' +
            '<button id="geo-fp-unlock" style="background:linear-gradient(135deg,#a855f7,#7c3aed);color:white;border:none;padding:14px 32px;border-radius:30px;font-size:15px;font-weight:700;cursor:pointer;width:100%;margin-bottom:12px;">💜 Unlock Full Access</button>' +
            '<a href="'+backUrl+'" style="display:inline-block;color:rgba(255,255,255,0.4);font-size:12px;text-decoration:none;pointer-events:auto;">← Go Back</a>' +
            '<p style="color:rgba(255,255,255,0.3);font-size:11px;margin-top:10px;">보라해 💜</p>';

        overlay.appendChild(ribbon);
        overlay.appendChild(box);
        document.body.appendChild(overlay);

        document.getElementById('geo-fp-unlock')
            .addEventListener('click', function() { window.location.href = '/pricing.html'; });

        console.log('💜 Full page lock applied. Back URL:', backUrl);
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
            '<div style="background:linear-gradient(145deg,#1e1b4b,#312e81);border-radius:25px;padding:40px;max-width:400px;width:90%;text-align:center;">' +
                '<div style="font-size:60px;margin-bottom:15px;">💜</div>' +
                '<h2 style="color:white;font-size:24px;margin:0 0 10px;">'+msg.title+'</h2>' +
                '<p style="color:rgba(255,255,255,0.8);font-size:14px;margin-bottom:25px;">'+msg.subtitle+'</p>' +
                '<button id="geo-pricing-btn" style="background:linear-gradient(135deg,#a855f7,#7c3aed);color:white;border:none;padding:14px 35px;border-radius:30px;font-size:16px;font-weight:bold;cursor:pointer;width:100%;">💜 View Plans</button>' +
                '<p style="color:rgba(255,255,255,0.4);font-size:11px;margin-top:15px;">보라해 💜</p>' +
            '</div>';
        document.body.appendChild(modal);
        modal.addEventListener('click', function(e) { if (e.target === modal) modal.remove(); });
        document.getElementById('geo-pricing-btn')
            .addEventListener('click', function() { window.location.href = '/pricing.html'; });
    }

    // ==========================================
    // OBSERVER + FILTER INTERCEPTOR
    // ==========================================

    function startObserver() {
        var timer;
        var obs = new MutationObserver(function(mutations) {
            var dominated = false;
            for (var i = 0; i < mutations.length; i++) {
                if (mutations[i].addedNodes.length > 0) { dominated = true; break; }
            }
            if (!dominated) return;
            clearTimeout(timer);
            timer = setTimeout(processCards, 300);
        });

        var container = findContainer();
        if (container) {
            obs.observe(container, { childList: true });
        } else {
            obs.observe(document.body, { childList: true, subtree: true });
        }
    }

    function interceptFilters() {
        document.addEventListener('click', function(e) {
            var t = e.target;
            var isFilter =
                t.matches('[data-filter],[data-category],[data-sort],[data-order],' +
                    '.filter-btn,.tab-btn,.category-btn,.cat-btn,.sort-btn,' +
                    '[data-tab],.tab,[role="tab"],.nav-pill,.nav-tab,' +
                    'button[class*="filter"],button[class*="tab"],button[class*="sort"],' +
                    'a[class*="filter"],a[class*="tab"],.filter-item,.category-item,' +
                    '.sort-option,.dropdown-item') ||
                t.closest('[data-filter],[data-category],[data-sort],[data-order],' +
                    '.filter-btn,.tab-btn,.category-btn,.sort-btn,[data-tab],.tab');

            if (isFilter) {
                setTimeout(processCards, 100);
                setTimeout(processCards, 300);
                setTimeout(processCards, 600);
                setTimeout(processCards, 1000);
            }
        }, true);

        document.addEventListener('change', function(e) {
            if (e.target.tagName === 'SELECT') {
                setTimeout(processCards, 100);
                setTimeout(processCards, 300);
                setTimeout(processCards, 600);
            }
        }, true);
    }

    // ==========================================
    // ✅ MAIN INITIALIZE
    // ==========================================

    function initialize() {
        console.log('💜 ════════════════════════════════');
        console.log('💜 Premium Wrapper v4');

        state.pageType = detectPageType();
        state.category = detectCategory();

        console.log('💜 URL:', window.location.pathname);
        console.log('💜 Type:', state.pageType);
        console.log('💜 Category:', state.category);

        // ── FREE ──
        if (state.pageType === 'free') {
            console.log('💜 ✅ FREE page - no locks applied');
            return;
        }

        // ── PREMIUM USER ──
        if (isPremium()) {
            console.log('💜 ✅ Premium user - no locks');
            return;
        }

        // ── GRID PAGE (mountains, rivers, upsc etc) ──
        if (state.pageType === 'grid') {
            console.log('💜 🔒 GRID page - locking cards');
            injectStyles();
            installGlobalClickBlocker();
            state.freeItemIDs = [];
            state.initialScanDone = false;

            processCards();
            startObserver();
            interceptFilters();

            setTimeout(function() { if (!state.initialScanDone) processCards(); }, 1000);
            setTimeout(function() { if (!state.initialScanDone) processCards(); }, 2500);
            return;
        }

        // ── ENCYCLOPEDIA LOCKED PAGE ──
        if (state.pageType === 'encyc-locked') {
            console.log('💜 🔒 ENCYCLOPEDIA locked page - full page lock');
            injectStyles();
            if (document.readyState === 'complete') {
                applyFullPageLock();
            } else {
                window.addEventListener('load', applyFullPageLock);
            }
            return;
        }

        // ── PROFILE PAGE ──
        if (state.pageType === 'profile') {
            if (isProfileFree()) {
                console.log('💜 ✅ Free profile');
                return;
            }
            console.log('💜 🔒 Locked profile - full page lock');
            injectStyles();
            if (document.readyState === 'complete') {
                applyFullPageLock();
            } else {
                window.addEventListener('load', applyFullPageLock);
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

    console.log('💜 Premium Wrapper v4 Loaded');
})();
