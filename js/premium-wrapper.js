// ========================================
// 💜 PREMIUM WRAPPER - DHARAVERSE v8
// ========================================

(function () {
    'use strict';

    var DEBUG = true;
    function log() {
        if (!DEBUG) return;
        var a = Array.prototype.slice.call(arguments);
        a.unshift('💜');
        console.log.apply(console, a);
    }

    log('v8 LOADING | URL:', window.location.href);

    // ==========================================
    // FREE PROFILE IDs
    // ==========================================
    var FREE_PROFILE_IDS = {
        mountains:    ['mount-everest','k2','kangchenjunga','lhotse','makalu','cho-oyu','dhaulagiri'],
        rivers:       ['amazon','nile','yangtze','mississippi','yenisei','yellow-river','ob-river'],
        lakes:        ['caspian-sea','lake-superior','lake-victoria','lake-huron','lake-michigan','lake-tanganyika','lake-baikal'],
        oceans:       ['pacific-ocean','atlantic-ocean'],
        deserts:      ['sahara','arabian-desert','gobi-desert','patagonian-desert','great-victoria-desert','syrian-desert','great-basin-desert'],
        forests:      ['amazon-rainforest','congo-rainforest','daintree-rainforest','tongass-forest','valdivian-forest','sundarban-forest','taiga-forest'],
        islands:      ['greenland','new-guinea','borneo','madagascar','baffin-island','sumatra','honshu'],
        volcanoes:    ['mauna-loa','mount-etna','mount-vesuvius','krakatoa','mount-fuji','eyjafjallajokull','mount-pinatubo'],
        'coral-reefs':['great-barrier-reef','mesoamerican-reef','new-caledonia-reef','andros-reef','red-sea-reef','pulley-ridge','florida-reef'],
        upsc:         ['physical-geography','human-geography','economic-geography'],
        games:        ['flagforge','geoblitz','geodetective']
    };

    // ==========================================
    // FREE ENCYCLOPEDIA FILENAMES
    // ==========================================
    var FREE_ENCYC_FILENAMES = [
        'index.html',
        'encyclopedia.html',
        'historical-geo.html',
        'celestial-effects.html',
        'gibralter.html'
    ];

    // ==========================================
    // PLAN LIMITS
    // ==========================================
    var PLAN_LIMITS = {
        basic: {
            mountains:7, rivers:7, lakes:7, oceans:2,
            forests:7, deserts:7, volcanoes:7, islands:7,
            'coral-reefs':7, upsc:3, games:3, atlas:7
        },
        games: {
            mountains:7, rivers:7, lakes:7, oceans:2,
            forests:7, deserts:7, volcanoes:7, islands:7,
            'coral-reefs':7, upsc:3, games:9999, atlas:7
        },
        upsc: {
            mountains:7, rivers:7, lakes:7, oceans:2,
            forests:7, deserts:7, volcanoes:7, islands:7,
            'coral-reefs':7, upsc:9999, games:3, atlas:7
        },
        pro: {
            mountains:9999, rivers:9999, lakes:9999, oceans:9999,
            forests:9999, deserts:9999, volcanoes:9999, islands:9999,
            'coral-reefs':9999, upsc:0, games:9999, atlas:9999
        },
        ultimate: {
            mountains:9999, rivers:9999, lakes:9999, oceans:9999,
            forests:9999, deserts:9999, volcanoes:9999, islands:9999,
            'coral-reefs':9999, upsc:9999, games:9999, atlas:9999
        }
    };

    // ==========================================
    // BTS MESSAGES
    // ==========================================
    var BTS = [
        {title:'Keep Swimming! 🌊',         sub:'The ocean of knowledge awaits 💜'},
        {title:'Dream, Believe, Achieve! ✨', sub:'Unlock your potential 💜'},
        {title:'Purple You! 보라해 💜',       sub:'We believe in your dreams'},
        {title:'Magic Shop Awaits! ✨',       sub:'Unlock all wonders 💜'},
        {title:'Beyond The Scene! 🌟',       sub:'Go beyond with premium 💜'},
        {title:'You Are The Best! 🌸',       sub:'Best comes with premium 💜'},
        {title:'Life Goes On! 🌿',           sub:'Keep exploring, go premium 💜'},
        {title:'Dynamite! 💥',               sub:'Explode into full knowledge 💜'},
        {title:'Butter! 🧈',                sub:'Smooth access to everything 💜'},
        {title:'Run BTS! 🏃',               sub:'Run towards all knowledge 💜'}
    ];
    function bts() { return BTS[Math.floor(Math.random() * BTS.length)]; }

    // ==========================================
    // STATE
    // ==========================================
    var S = {
        type: null,
        cat: null,
        freeIDs: [],
        scanned: false,
        clickHandler: null,
        styled: false,
        waitTimer: null,
        waitCount: 0
    };

    // ==========================================
    // HELPERS
    // ==========================================
    function pathLC()   { return window.location.pathname.toLowerCase(); }
    function filename() { var p = pathLC().split('/'); return p[p.length-1] || ''; }
    function has(str)   { return pathLC().indexOf(str.toLowerCase()) !== -1; }

    // ==========================================
    // DETECT CATEGORY
    // ==========================================
    function detectCat() {
        if (has('/mountains/'))    return 'mountains';
        if (has('/rivers/'))       return 'rivers';
        if (has('/lakes/'))        return 'lakes';
        if (has('/oceans/'))       return 'oceans';
        if (has('/coral-reefs/'))  return 'coral-reefs';
        if (has('/deserts/'))      return 'deserts';
        if (has('/islands/'))      return 'islands';
        if (has('/forests/'))      return 'forests';
        if (has('/volcanoes/'))    return 'volcanoes';
        if (has('/games/'))        return 'games';
        if (has('/upsc/'))         return 'upsc';
        if (has('/atlas/'))        return 'atlas';
        if (has('/encyclopedia/')) return 'encyclopedia';
        return null;
    }

    // ==========================================
    // DETECT PAGE TYPE
    // ==========================================
    function detectType() {
        var fn = filename();
        var p  = pathLC();

        // ── ENCYCLOPEDIA ──
        if (has('/encyclopedia/')) {
            if (p.endsWith('/') || fn === '') return 'free';
            for (var i = 0; i < FREE_ENCYC_FILENAMES.length; i++) {
                if (fn === FREE_ENCYC_FILENAMES[i]) return 'free';
            }
            return 'encyc-locked';
        }

        // ── GRID PAGES ──
        var GRIDS = [
            '/mountains/mountains.html', '/rivers/rivers.html',
            '/lakes/lakes.html', '/oceans/oceans.html', '/oceans/seas.html',
            '/coral-reefs/coral-reefs.html', '/deserts/deserts.html',
            '/islands/islands.html', '/forests/forests.html',
            '/volcanoes/volcanoes.html', '/games/games.html',
            '/upsc/upsc.html', '/atlas/atlas.html'
        ];
        for (var g = 0; g < GRIDS.length; g++) {
            if (p.indexOf(GRIDS[g]) !== -1) return 'grid';
        }

        // ── PROFILE ──
        if (fn.indexOf('-profile.html') !== -1) return 'profile';

        return 'free';
    }

    // ==========================================
    // PREMIUM CHECK
    // ==========================================
    function isPremium() {
        var plan  = (localStorage.getItem('dv_plan') || 'basic').toLowerCase().trim();
        var admin = localStorage.getItem('dv_admin');
        var adminT= parseInt(localStorage.getItem('dv_admin_time') || '0', 10);

        if (admin === 'true' && (Date.now() - adminT) < 86400000) return true;

        var expiry = localStorage.getItem('dv_plan_expiry');
        if (expiry && new Date(expiry) < new Date()) {
            localStorage.setItem('dv_plan', 'basic');
            localStorage.removeItem('dv_premium');
            plan = 'basic';
        }

        var cat = S.cat || detectCat();
        if (plan === 'ultimate') return true;
        if (plan === 'pro') return cat !== 'upsc';
        if (plan === 'games' && cat === 'games') return true;
        if (plan === 'upsc'  && cat === 'upsc')  return true;

        // Legacy flags ONLY if plan is not basic
        if (plan !== 'basic') {
            if (localStorage.getItem('geo_premium') === 'true') return true;
            if (localStorage.getItem('dv_premium')  === 'true') return true;
        }

        return false;
    }

    // ==========================================
    // GET FREE CARD LIMIT
    // ==========================================
    function getLimit(cat) {
        var plan  = (localStorage.getItem('dv_plan') || 'basic').toLowerCase().trim();
        var admin = localStorage.getItem('dv_admin');
        var adminT= parseInt(localStorage.getItem('dv_admin_time') || '0', 10);
        if (admin === 'true' && (Date.now() - adminT) < 86400000) return 9999;
        var limits = PLAN_LIMITS[plan] || PLAN_LIMITS.basic;
        return (limits[cat] !== undefined) ? limits[cat] : 7;
    }

    // ==========================================
    // PROFILE FREE CHECK
    // ==========================================
    function isProfileFree() {
        var id  = new URLSearchParams(window.location.search).get('id');
        var cat = S.cat;
        if (!id || !cat) return false;
        var free = FREE_PROFILE_IDS[cat] || [];
        return free.indexOf(id.toLowerCase()) !== -1;
    }

    // ==========================================
    // GET CARD UID
    // ==========================================
    function uid(card) {
        var v = card.getAttribute('data-id') ||
                card.getAttribute('data-slug') ||
                card.getAttribute('data-name') ||
                card.getAttribute('data-title') ||
                card.getAttribute('data-item') ||
                card.getAttribute('data-topic');
        if (v) return v.toLowerCase().trim();

        var href = card.getAttribute('href');
        if (href) {
            var m = href.match(/[?&]id=([^&]+)/);
            return (m ? m[1] : href).toLowerCase().trim();
        }

        var a = card.querySelector('a[href]');
        if (a) {
            var ah = a.getAttribute('href');
            var am = ah.match(/[?&]id=([^&]+)/);
            return (am ? am[1] : ah).toLowerCase().trim();
        }

        var h = card.querySelector('h1,h2,h3,h4,h5,.title,.name,.card-title,.topic-title');
        if (h) return h.textContent.toLowerCase().trim();

        return card.textContent.toLowerCase().trim().substring(0, 60);
    }

    // ==========================================
    // STYLES
    // ==========================================
    function injectStyles() {
        if (S.styled) return;
        var el = document.createElement('style');
        el.id  = 'geo-premium-styles';
        el.textContent =
            '.geo-free-badge{position:absolute!important;top:8px!important;left:8px!important;' +
            'background:linear-gradient(135deg,#22c55e,#16a34a)!important;color:#fff!important;' +
            'padding:4px 10px!important;border-radius:15px!important;font-size:10px!important;' +
            'font-weight:bold!important;z-index:999!important;pointer-events:none!important;}' +
            '.geo-free-card{position:relative!important;}' +
            '.geo-locked-card{position:relative!important;cursor:pointer!important;' +
            'pointer-events:auto!important;overflow:hidden!important;}' +
            '.geo-locked-card>*:not(.geo-lock-overlay):not(.geo-ribbon-v):not(.geo-ribbon-h)' +
            ':not(.geo-ribbon-knot):not(.geo-ribbon-dot){pointer-events:none!important;}' +
            '.geo-lock-overlay{position:absolute!important;inset:0!important;' +
            'background:rgba(109,40,217,0.10)!important;z-index:10!important;' +
            'pointer-events:none!important;border-radius:inherit!important;}' +
            '.geo-ribbon-v{position:absolute!important;top:0!important;bottom:0!important;' +
            'left:50%!important;transform:translateX(-50%)!important;width:22px!important;' +
            'background:linear-gradient(180deg,#4c1d95,#7c3aed,#a855f7,#c084fc,#a855f7,#7c3aed,#4c1d95)!important;' +
            'box-shadow:2px 0 8px rgba(124,58,237,.5),-2px 0 8px rgba(124,58,237,.5)!important;' +
            'z-index:11!important;pointer-events:none!important;}' +
            '.geo-ribbon-h{position:absolute!important;left:0!important;right:0!important;' +
            'top:50%!important;transform:translateY(-50%)!important;height:22px!important;' +
            'background:linear-gradient(90deg,#4c1d95,#7c3aed,#a855f7,#c084fc,#a855f7,#7c3aed,#4c1d95)!important;' +
            'box-shadow:0 2px 8px rgba(124,58,237,.5),0 -2px 8px rgba(124,58,237,.5)!important;' +
            'z-index:11!important;pointer-events:none!important;}' +
            '.geo-ribbon-knot{position:absolute!important;top:50%!important;left:50%!important;' +
            'transform:translate(-50%,-50%)!important;width:44px!important;height:44px!important;' +
            'background:linear-gradient(135deg,#1e3a5f,#2563eb,#1e40af)!important;' +
            'border-radius:50%!important;display:flex!important;align-items:center!important;' +
            'justify-content:center!important;font-size:22px!important;' +
            'box-shadow:0 0 0 3px white,0 0 0 5px #7c3aed,0 4px 16px rgba(124,58,237,.7)!important;' +
            'z-index:12!important;pointer-events:none!important;}' +
            '.geo-ribbon-dot{position:absolute!important;width:9px!important;height:9px!important;' +
            'background:radial-gradient(circle,#e9d5ff,#7c3aed)!important;border-radius:50%!important;' +
            'box-shadow:0 0 6px rgba(192,132,252,.9)!important;z-index:13!important;pointer-events:none!important;}' +
            '.geo-ribbon-dot.tl{top:6px!important;left:6px!important;}' +
            '.geo-ribbon-dot.tr{top:6px!important;right:6px!important;}' +
            '.geo-ribbon-dot.bl{bottom:6px!important;left:6px!important;}' +
            '.geo-ribbon-dot.br{bottom:6px!important;right:6px!important;}';
        document.head.appendChild(el);
        S.styled = true;
    }

    // ==========================================
    // CLICK BLOCKER
    // ==========================================
    function installClickBlocker() {
        if (S.clickHandler) return;
        S.clickHandler = function (e) {
            var card = e.target.closest('.geo-locked-card');
            if (card) {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
                showModal();
            }
        };
        document.addEventListener('click', S.clickHandler, true);
    }

    // ==========================================
    // CARD HELPERS
    // ==========================================
    function strip(card) {
        card.classList.remove('geo-locked-card', 'geo-free-card');
        card.querySelectorAll(
            '.geo-lock-overlay,.geo-ribbon-v,.geo-ribbon-h,' +
            '.geo-ribbon-knot,.geo-ribbon-dot,.geo-free-badge'
        ).forEach(function (el) { el.remove(); });
    }

    function makeFree(card) {
        strip(card);
        card.classList.add('geo-free-card');
        if (card.tagName === 'A' && card.getAttribute('data-original-href')) {
            card.setAttribute('href', card.getAttribute('data-original-href'));
        }
        card.querySelectorAll('[data-original-href]').forEach(function (a) {
            a.setAttribute('href', a.getAttribute('data-original-href'));
        });
        var b = document.createElement('div');
        b.className = 'geo-free-badge';
        b.textContent = '✨ Free';
        card.appendChild(b);
    }

    function makeLocked(card) {
        strip(card);
        card.classList.add('geo-locked-card');
        if (card.tagName === 'A') {
            card.setAttribute('data-original-href', card.getAttribute('href') || '');
            card.removeAttribute('href');
        }
        card.querySelectorAll('a[href]').forEach(function (a) {
            a.setAttribute('data-original-href', a.getAttribute('href') || '');
            a.removeAttribute('href');
        });
        var ov = document.createElement('div'); ov.className = 'geo-lock-overlay';
        var rv = document.createElement('div'); rv.className = 'geo-ribbon-v';
        var rh = document.createElement('div'); rh.className = 'geo-ribbon-h';
        var kn = document.createElement('div'); kn.className = 'geo-ribbon-knot'; kn.textContent = '🌍';
        card.appendChild(ov); card.appendChild(rv);
        card.appendChild(rh); card.appendChild(kn);
        ['tl','tr','bl','br'].forEach(function (p) {
            var d = document.createElement('div');
            d.className = 'geo-ribbon-dot ' + p;
            card.appendChild(d);
        });
    }

    // ==========================================
    // FIND GRID CONTAINER
    // ==========================================
    function findContainer() {
        var sel = [
            '.topics-grid','.rivers-grid','.mountains-grid','.lakes-grid',
            '.forests-grid','.deserts-grid','.volcanoes-grid','.islands-grid',
            '.oceans-grid','.games-grid','.atlas-grid','.reefs-grid',
            '.coral-grid','.cards-grid','.items-grid','.categories-grid',
            '.sections-grid','.modules-grid','.content-grid','.main-grid',
            '.grid','#grid','#cardsGrid','[class*="-grid"]'
        ];
        for (var i = 0; i < sel.length; i++) {
            var c = document.querySelector(sel[i]);
            if (c && c.children.length > 0) return c;
        }
        return null;
    }

    // ==========================================
    // ✅ CHECK IF CARD IS A REAL CARD
    //    (not a loading placeholder, not a
    //     "no results" message, not script/style)
    // ==========================================
    function isRealCard(el) {
        if (!el || !el.tagName) return false;
        var tag = el.tagName.toUpperCase();

        // Skip non-content elements
        if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'LINK' || tag === 'BR' || tag === 'HR') {
            return false;
        }

        // Skip our own CTA
        if (el.classList.contains('geo-upgrade-cta')) return false;

        // ── KEY FIX: Skip loading/empty/placeholder elements ──
        var text = (el.textContent || '').toLowerCase().trim();

        // Common loading/placeholder patterns
        var placeholderPatterns = [
            'loading',
            'please wait',
            'fetching',
            'no results',
            'no items',
            'not found',
            'no mountains',
            'no rivers',
            'no lakes',
            'no oceans',
            'no forests',
            'no deserts',
            'no volcanoes',
            'no islands',
            'no reefs',
            'no games',
            'coming soon',
            'empty'
        ];

        for (var i = 0; i < placeholderPatterns.length; i++) {
            if (text.indexOf(placeholderPatterns[i]) !== -1 && text.length < 100) {
                log('Skipping placeholder card:', text.substring(0, 50));
                return false;
            }
        }

        // Must have EITHER a link, an image, or a data attribute to be a real card
        var hasLink  = el.querySelector('a[href]') || (tag === 'A' && el.getAttribute('href'));
        var hasImage = el.querySelector('img');
        var hasData  = el.getAttribute('data-id') || el.getAttribute('data-slug') ||
                       el.getAttribute('data-name') || el.getAttribute('data-topic');

        if (hasLink || hasImage || hasData) {
            return true;
        }

        // If it has very little text and no link/image, it's probably a placeholder
        if (text.length < 80) {
            log('Skipping tiny element (no link/img/data):', text.substring(0, 50));
            return false;
        }

        return true;
    }

    // ==========================================
    // ✅ PROCESS GRID CARDS
    //    Now with smart waiting for real cards
    // ==========================================
    function processCards() {
        var container = findContainer();
        if (!container) {
            log('processCards: no container found yet');
            return false;
        }

        var cards = Array.from(container.children).filter(isRealCard);

        log('processCards: found', cards.length, 'REAL cards (total children:', container.children.length, ')');

        // ── If no real cards yet, DON'T scan - return false ──
        if (cards.length === 0) {
            log('processCards: no real cards yet - will retry');
            return false;
        }

        var lim = getLimit(S.cat);
        log('processCards: limit =', lim, '| cat:', S.cat);

        // Build free list ONCE (only when we have real cards)
        if (!S.scanned) {
            S.freeIDs = [];
            for (var i = 0; i < cards.length; i++) {
                if (S.freeIDs.length >= lim) break;
                var id = uid(cards[i]);
                if (id && S.freeIDs.indexOf(id) === -1) {
                    S.freeIDs.push(id);
                }
            }
            S.scanned = true;
            log('✅ FREE IDs LOCKED (' + S.freeIDs.length + '):', S.freeIDs);
        }

        // Apply free/locked state
        var nFree = 0, nLocked = 0;
        cards.forEach(function (card) {
            var id = uid(card);
            if (S.freeIDs.indexOf(id) !== -1) {
                makeFree(card);
                nFree++;
            } else {
                makeLocked(card);
                nLocked++;
            }
        });

        log('Grid result → free:', nFree, '| locked:', nLocked);
        if (nLocked > 0) addCTA(container, nLocked, nFree, cards.length);

        return true; // success
    }

    // ==========================================
    // ✅ WAIT FOR REAL CARDS TO LOAD
    //    Polls until real cards appear, then processes
    // ==========================================
    function waitForCards() {
        S.waitCount++;
        log('waitForCards attempt', S.waitCount);

        var success = processCards();

        if (!success && S.waitCount < 30) {
            // Try again - increasing intervals
            var delay = S.waitCount < 5 ? 300 :
                        S.waitCount < 10 ? 500 :
                        S.waitCount < 20 ? 1000 : 2000;
            S.waitTimer = setTimeout(waitForCards, delay);
        } else if (!success) {
            log('⚠️ Gave up waiting for cards after 30 attempts');
        }
    }

    // ==========================================
    // CTA BANNER
    // ==========================================
    function addCTA(container, locked, free, total) {
        var old = container.querySelector('.geo-upgrade-cta');
        if (old) old.remove();
        var NAMES = {
            mountains:'Mountains', rivers:'Rivers', lakes:'Lakes', oceans:'Oceans',
            forests:'Forests', deserts:'Deserts', volcanoes:'Volcanoes', islands:'Islands',
            'coral-reefs':'Coral Reefs', games:'Games', upsc:'Topics',
            atlas:'Maps', encyclopedia:'Sections'
        };
        var el = document.createElement('div');
        el.className = 'geo-upgrade-cta';
        el.style.cssText =
            'grid-column:1/-1;background:linear-gradient(135deg,#7c3aed,#5b21b6);' +
            'border-radius:20px;padding:40px 25px;text-align:center;color:white;margin:25px 0;';
        el.innerHTML =
            '<div style="font-size:50px;margin-bottom:15px">💜</div>' +
            '<h3 style="font-size:24px;margin:0 0 10px">Keep Discovering!</h3>' +
            '<div style="font-size:50px;font-weight:bold;margin:15px 0">' + locked + '</div>' +
            '<p style="font-size:16px;margin-bottom:20px">more ' +
                (NAMES[S.cat] || 'items') + ' waiting!</p>' +
            '<button id="geo-unlock-btn" style="background:white;color:#7c3aed;border:none;' +
                'padding:14px 40px;border-radius:30px;font-size:16px;font-weight:bold;cursor:pointer">' +
                '💜 Unlock All</button>' +
            '<p style="font-size:12px;opacity:.6;margin-top:15px">' + free + ' of ' + total + ' free</p>';
        container.appendChild(el);
        document.getElementById('geo-unlock-btn').addEventListener('click', showModal);
    }

    // ==========================================
    // FULL PAGE LOCK
    // ==========================================
    function applyFullPageLock() {
        if (document.getElementById('geo-fullpage-lock')) return;
        log('🔒 Applying full page lock');
        var msg = bts();
        document.body.style.overflow = 'hidden';
        var wrap = document.createElement('div');
        wrap.id = 'geo-blur-wrap';
        wrap.style.cssText = 'filter:blur(8px);pointer-events:none;user-select:none;';
        Array.from(document.body.children).forEach(function (c) { wrap.appendChild(c); });
        document.body.appendChild(wrap);

        var p    = window.location.pathname;
        var back = '/';
        if (has('/encyclopedia/')) {
            var parts = p.split('/').filter(Boolean);
            if (parts.length >= 3) {
                var folder = parts[parts.length - 2];
                var base   = '/' + parts.slice(0, -1).join('/');
                back = (folder === 'historical-geography')
                    ? base + '/historical-geo.html'
                    : base + '/index.html';
            } else { back = '/encyclopedia/encyclopedia.html'; }
        }
        else if (has('/mountains/'))   back = '/mountains/mountains.html';
        else if (has('/rivers/'))      back = '/rivers/rivers.html';
        else if (has('/lakes/'))       back = '/lakes/lakes.html';
        else if (has('/deserts/'))     back = '/deserts/deserts.html';
        else if (has('/forests/'))     back = '/forests/forests.html';
        else if (has('/islands/'))     back = '/islands/islands.html';
        else if (has('/oceans/'))      back = '/oceans/oceans.html';
        else if (has('/coral-reefs/')) back = '/coral-reefs/coral-reefs.html';
        else if (has('/upsc/'))        back = '/upsc/upsc.html';
        else if (has('/volcanoes/'))   back = '/volcanoes/volcanoes.html';

        var ov = document.createElement('div');
        ov.id  = 'geo-fullpage-lock';
        ov.style.cssText =
            'position:fixed!important;inset:0!important;z-index:999999!important;' +
            'display:flex!important;align-items:center!important;justify-content:center!important;' +
            'background:rgba(10,10,20,.87)!important;pointer-events:auto!important;';
        var rib = document.createElement('div');
        rib.style.cssText =
            'position:absolute;top:0;left:0;right:0;height:55px;' +
            'background:linear-gradient(90deg,#4c1d95,#7c3aed,#a855f7,#c084fc,#a855f7,#7c3aed,#4c1d95);' +
            'display:flex;align-items:center;justify-content:center;gap:16px;' +
            'box-shadow:0 4px 20px rgba(124,58,237,.6);';
        rib.innerHTML =
            '<div style="width:36px;height:36px;background:linear-gradient(135deg,#1e3a5f,#2563eb);' +
                'border-radius:50%;display:flex;align-items:center;justify-content:center;' +
                'font-size:20px;box-shadow:0 0 0 2px white">🌍</div>' +
            '<span style="color:white;font-size:14px;font-weight:800;letter-spacing:2px;' +
                'text-transform:uppercase">✦ Premium Content ✦</span>' +
            '<div style="width:36px;height:36px;background:linear-gradient(135deg,#1e3a5f,#2563eb);' +
                'border-radius:50%;display:flex;align-items:center;justify-content:center;' +
                'font-size:20px;box-shadow:0 0 0 2px white">🌍</div>';
        var box = document.createElement('div');
        box.style.cssText =
            'background:linear-gradient(145deg,#1e1b4b,#312e81);border-radius:24px;' +
            'padding:40px;max-width:420px;width:90%;text-align:center;' +
            'box-shadow:0 20px 60px rgba(124,58,237,.4);';
        box.innerHTML =
            '<div style="font-size:56px;margin-bottom:14px">💜</div>' +
            '<h2 style="color:white;font-size:24px;font-weight:800;margin:0 0 10px">' + msg.title + '</h2>' +
            '<p style="color:rgba(255,255,255,.7);font-size:14px;line-height:1.7;margin:0 0 24px">' +
                msg.sub + '<br><br>This content is for Premium members only.</p>' +
            '<button id="geo-fp-unlock" style="background:linear-gradient(135deg,#a855f7,#7c3aed);' +
                'color:white;border:none;padding:14px 32px;border-radius:30px;font-size:15px;' +
                'font-weight:700;cursor:pointer;width:100%;margin-bottom:12px;pointer-events:auto">' +
                '💜 Unlock Full Access</button>' +
            '<a href="' + back + '" style="display:inline-block;color:rgba(255,255,255,.4);' +
                'font-size:12px;text-decoration:none;pointer-events:auto">← Go Back</a>' +
            '<p style="color:rgba(255,255,255,.3);font-size:11px;margin-top:10px">보라해 💜</p>';
        ov.appendChild(rib);
        ov.appendChild(box);
        document.body.appendChild(ov);
        document.getElementById('geo-fp-unlock').addEventListener('click', function () {
            window.location.href = '/pricing.html';
        });
    }

    // ==========================================
    // UPGRADE MODAL
    // ==========================================
    function showModal() {
        var ex = document.getElementById('geo-premium-modal');
        if (ex) ex.remove();
        var msg = bts();
        var m = document.createElement('div');
        m.id = 'geo-premium-modal';
        m.style.cssText =
            'position:fixed;inset:0;background:rgba(88,28,135,.95);z-index:999999;' +
            'display:flex;align-items:center;justify-content:center;';
        m.innerHTML =
            '<div style="background:linear-gradient(145deg,#1e1b4b,#312e81);border-radius:25px;' +
                'padding:40px;max-width:400px;width:90%;text-align:center">' +
            '<div style="font-size:60px;margin-bottom:15px">💜</div>' +
            '<h2 style="color:white;font-size:24px;margin:0 0 10px">' + msg.title + '</h2>' +
            '<p style="color:rgba(255,255,255,.8);font-size:14px;margin-bottom:25px">' + msg.sub + '</p>' +
            '<button id="geo-pricing-btn" style="background:linear-gradient(135deg,#a855f7,#7c3aed);' +
                'color:white;border:none;padding:14px 35px;border-radius:30px;font-size:16px;' +
                'font-weight:bold;cursor:pointer;width:100%">💜 View Plans</button>' +
            '<p style="color:rgba(255,255,255,.4);font-size:11px;margin-top:15px">보라해 💜</p></div>';
        document.body.appendChild(m);
        m.addEventListener('click', function (e) { if (e.target === m) m.remove(); });
        document.getElementById('geo-pricing-btn').addEventListener('click', function () {
            window.location.href = '/pricing.html';
        });
    }

    // ==========================================
    // ✅ MUTATION OBSERVER
    //    Watches for new cards being added
    //    Re-processes when DOM changes
    // ==========================================
    function startObserver() {
        var timer;
        var obs = new MutationObserver(function (muts) {
            var hasNew = false;
            for (var i = 0; i < muts.length; i++) {
                if (muts[i].addedNodes.length > 0) {
                    // Check if any added node is a real card
                    for (var j = 0; j < muts[i].addedNodes.length; j++) {
                        var node = muts[i].addedNodes[j];
                        if (node.nodeType === 1 && isRealCard(node)) {
                            hasNew = true;
                            break;
                        }
                    }
                }
                if (hasNew) break;
            }

            if (hasNew) {
                log('Observer: new real cards detected');
                clearTimeout(timer);
                timer = setTimeout(function () {
                    processCards();
                }, 200);
            }
        });

        // Observe body broadly - we need to catch dynamically loaded cards
        obs.observe(document.body, { childList: true, subtree: true });
        log('Observer started (body-wide)');
    }

    // ==========================================
    // FILTER INTERCEPTOR
    // ==========================================
    function interceptFilters() {
        var filterSel =
            '[data-filter],[data-category],[data-sort],[data-order],' +
            '.filter-btn,.tab-btn,.category-btn,.cat-btn,.sort-btn,' +
            '[data-tab],.tab,[role="tab"],.nav-pill,.nav-tab,' +
            'button[class*="filter"],button[class*="tab"],button[class*="sort"],' +
            'a[class*="filter"],a[class*="tab"],.filter-item,.category-item,' +
            '.sort-option,.dropdown-item';

        document.addEventListener('click', function (e) {
            if (e.target.matches && (e.target.matches(filterSel) || e.target.closest(filterSel))) {
                log('Filter clicked - reprocessing');
                [200, 500, 1000, 2000].forEach(function (d) {
                    setTimeout(processCards, d);
                });
            }
        }, true);

        document.addEventListener('change', function (e) {
            if (e.target.tagName === 'SELECT') {
                [200, 500, 1000].forEach(function (d) {
                    setTimeout(processCards, d);
                });
            }
        }, true);
    }

    // ==========================================
    // ✅ INITIALIZE
    // ==========================================
    function initialize() {
        S.type = detectType();
        S.cat  = detectCat();

        log('══ INIT ══');
        log('type:', S.type, '| cat:', S.cat);
        log('isPremium:', isPremium());
        log('dv_plan:', localStorage.getItem('dv_plan'),
            '| dv_premium:', localStorage.getItem('dv_premium'),
            '| geo_premium:', localStorage.getItem('geo_premium'),
            '| dv_admin:', localStorage.getItem('dv_admin'));

        if (S.type === 'free') {
            log('✅ FREE page');
            return;
        }

        if (isPremium()) {
            log('✅ Premium user');
            return;
        }

        // ── GRID ──
        if (S.type === 'grid') {
            log('🔒 GRID page');
            injectStyles();
            installClickBlocker();
            S.freeIDs = [];
            S.scanned = false;
            S.waitCount = 0;

            // Start waiting for real cards to appear
            waitForCards();

            // Also watch for DOM changes
            startObserver();
            interceptFilters();
            return;
        }

        // ── ENCYCLOPEDIA LOCKED ──
        if (S.type === 'encyc-locked') {
            log('🔒 ENCYCLOPEDIA locked');
            injectStyles();
            applyFullPageLock();
            setTimeout(applyFullPageLock, 500);
            setTimeout(applyFullPageLock, 1500);
            return;
        }

        // ── PROFILE ──
        if (S.type === 'profile') {
            if (isProfileFree()) { log('✅ Free profile'); return; }
            log('🔒 LOCKED profile');
            injectStyles();
            applyFullPageLock();
            setTimeout(applyFullPageLock, 500);
            setTimeout(applyFullPageLock, 1500);
            return;
        }
    }

    // ==========================================
    // START
    // ==========================================
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initialize);
    } else {
        initialize();
    }

    window.addEventListener('load', function () {
        if ((S.type === 'encyc-locked' || S.type === 'profile') &&
            !document.getElementById('geo-fullpage-lock')) {
            log('⚠️ Lock missing on load - reapplying');
            applyFullPageLock();
        }
        // Also retry grid processing on load
        if (S.type === 'grid' && !S.scanned) {
            log('⚠️ Grid not scanned by load - retrying');
            waitForCards();
        }
    });

    // ==========================================
    // PUBLIC API
    // ==========================================
    window.GeoPremiumWrapper = {
        showUpgrade: showModal,
        reprocess: processCards,
        getState: function () { return S; },
        reset: function () {
            S.freeIDs = [];
            S.scanned = false;
            S.waitCount = 0;
            waitForCards();
        },
        debug: function () {
            console.log('=== GEO PREMIUM DEBUG ===');
            console.log('URL:', window.location.href);
            console.log('type:', S.type, '| cat:', S.cat);
            console.log('isPremium:', isPremium());
            console.log('scanned:', S.scanned);
            console.log('freeIDs:', S.freeIDs);
            console.log('waitCount:', S.waitCount);
            console.log('dv_plan:', localStorage.getItem('dv_plan'));
            console.log('dv_premium:', localStorage.getItem('dv_premium'));
            console.log('geo_premium:', localStorage.getItem('geo_premium'));
            console.log('dv_admin:', localStorage.getItem('dv_admin'));
            var container = findContainer();
            if (container) {
                var all = container.children.length;
                var real = Array.from(container.children).filter(isRealCard).length;
                console.log('Container children:', all, '| Real cards:', real);
            } else {
                console.log('Container: NOT FOUND');
            }
        },
        clearPremium: function () {
            localStorage.removeItem('dv_plan');
            localStorage.removeItem('dv_premium');
            localStorage.removeItem('geo_premium');
            localStorage.removeItem('dv_admin');
            localStorage.removeItem('dv_plan_expiry');
            console.log('💜 All premium flags cleared. Reload page.');
        }
    };

    log('v8 Ready ✓');
})();
