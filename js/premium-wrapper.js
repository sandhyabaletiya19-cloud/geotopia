// ========================================
// 💜 PREMIUM WRAPPER - COMPLETE FINAL v5
// ========================================

(function() {
    'use strict';

    console.log('💜 Premium Wrapper Loading...');

    // ==========================================
    // CONFIG
    // ==========================================

    var FREE_LIMITS = {
        mountains: 7, rivers: 7, lakes: 7, oceans: 2,
        forests: 7, deserts: 7, volcanoes: 7, islands: 7,
        coralReefs: 7, upsc: 3, games: 3,
        atlas: 7, waterfalls: 7, glaciers: 7, caves: 3, parks: 3,
        // Encyclopedia category pages
        encyc_physical: 2,
        encyc_climate: 2,
        encyc_human: 2,
        encyc_environment: 2,
        encyc_space: 2,
        encyc_maps: 2,
        encyc_historical: 2
    };

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

    var state = {
        category:           null,
        pageType:           null,
        freeItems:          [],
        observer:           null,
        styleInjected:      false,
        globalClickHandler: null,
        encyclopediaLocked: false
    };

    // ==========================================
    // DETECT PAGE TYPE
    // ==========================================

    function detectPageType() {
        var path = window.location.pathname.toLowerCase();

        // ── Comparative geography = fully free ──
        if (path.includes('comparative-geography')) {
            return 'encyc-free';
        }

        // ── Encyclopedia MAIN index page ──
        // e.g. /encyclopedia/index.html or /encyclopedia/
        if (path.match(/\/encyclopedia\/index\.html$/) ||
            path.match(/\/encyclopedia\/?$/)) {
            return 'encyc-main';
        }

        // ── Encyclopedia CATEGORY index page ──
        // e.g. /encyclopedia/physical-geography/index.html
        // These show TOPIC CARDS — lock after first 2
        if (path.includes('/encyclopedia/') &&
            path.includes('/index.html') &&
            !path.match(/\/encyclopedia\/index\.html$/)) {
            return 'encyc-category';
        }

        // ── Encyclopedia CONCEPT/CONTENT page ──
        // e.g. /encyclopedia/physical-geography/concept.html
        if (path.includes('/encyclopedia/') &&
            !path.includes('/index.html')) {
            return 'encyc-content';
        }

        // ── Grid category pages ──
        var category = detectCategory();
        if (category) return 'grid';

        return null;
    }

    function detectCategory() {
        var url = window.location.href.toLowerCase();
        var map = {
            'mountain':  'mountains',
            'river':     'rivers',
            'lake':      'lakes',
            'forest':    'forests',
            'desert':    'deserts',
            'volcano':   'volcanoes',
            'island':    'islands',
            'ocean':     'oceans',
            'coral':     'coralReefs',
            'game':      'games',
            'atlas':     'atlas',
            'upsc':      'upsc'
        };
        for (var key in map) {
            if (url.indexOf(key) !== -1) return map[key];
        }
        return null;
    }

    function detectEncycCategory() {
        var path = window.location.pathname.toLowerCase();
        if (path.includes('physical'))    return 'encyc_physical';
        if (path.includes('climate'))     return 'encyc_climate';
        if (path.includes('human'))       return 'encyc_human';
        if (path.includes('environment')) return 'encyc_environment';
        if (path.includes('space'))       return 'encyc_space';
        if (path.includes('maps'))        return 'encyc_maps';
        if (path.includes('historical'))  return 'encyc_historical';
        return 'encyc_physical'; // fallback
    }

    // ==========================================
    // PLAN-AWARE isPremium()
    // ==========================================

    function isPremium() {
        var plan      = localStorage.getItem('dv_plan') || 'basic';
        var isAdmin   = localStorage.getItem('dv_admin');
        var adminTime = parseInt(localStorage.getItem('dv_admin_time') || '0');
        var adminOk   = isAdmin === 'true' && (Date.now() - adminTime) < 86400000;
        if (adminOk) return true;

        var expiry = localStorage.getItem('dv_plan_expiry');
        if (expiry && new Date(expiry) < new Date()) {
            localStorage.setItem('dv_plan', 'basic');
            localStorage.removeItem('dv_premium');
            return false;
        }

        var category = detectCategory();
        if (plan === 'ultimate') return true;
        if (plan === 'pro') {
            // Pro unlocks everything including encyclopedia
            if (category === 'upsc') return false;
            return true;
        }
        if (plan === 'games' && category === 'games') return true;
        if (plan === 'upsc'  && category === 'upsc')  return true;
        if (localStorage.getItem('geo_premium') === 'true') return true;
        if (localStorage.getItem('dv_premium')  === 'true' && plan !== 'basic') return true;

        return false;
    }

    // ==========================================
    // DYNAMIC FREE LIMITS
    // ==========================================

    function getFreeLimit(category) {
        var plan      = localStorage.getItem('dv_plan') || 'basic';
        var isAdmin   = localStorage.getItem('dv_admin');
        var adminTime = parseInt(localStorage.getItem('dv_admin_time') || '0');
        if (isAdmin === 'true' && (Date.now() - adminTime) < 86400000) return 9999;

        var PLAN_LIMITS = {
            basic: {
                mountains: 7, rivers: 7, lakes: 7, oceans: 2,
                forests: 7, deserts: 7, volcanoes: 7, islands: 7,
                coralReefs: 7, upsc: 3, games: 3,
                atlas: 7, waterfalls: 7, glaciers: 7, caves: 3, parks: 3,
                encyc_physical: 2, encyc_climate: 2, encyc_human: 2,
                encyc_environment: 2, encyc_space: 2, encyc_maps: 2,
                encyc_historical: 2
            },
            games: {
                mountains: 7, rivers: 7, lakes: 7, oceans: 2,
                forests: 7, deserts: 7, volcanoes: 7, islands: 7,
                coralReefs: 7, upsc: 3, games: 9999,
                atlas: 7, waterfalls: 7, glaciers: 7, caves: 3, parks: 3,
                encyc_physical: 2, encyc_climate: 2, encyc_human: 2,
                encyc_environment: 2, encyc_space: 2, encyc_maps: 2,
                encyc_historical: 2
            },
            upsc: {
                mountains: 7, rivers: 7, lakes: 7, oceans: 2,
                forests: 7, deserts: 7, volcanoes: 7, islands: 7,
                coralReefs: 7, upsc: 9999, games: 3,
                atlas: 7, waterfalls: 7, glaciers: 7, caves: 3, parks: 3,
                encyc_physical: 2, encyc_climate: 2, encyc_human: 2,
                encyc_environment: 2, encyc_space: 2, encyc_maps: 2,
                encyc_historical: 2
            },
            pro: {
                mountains: 9999, rivers: 9999, lakes: 9999, oceans: 9999,
                forests: 9999, deserts: 9999, volcanoes: 9999, islands: 9999,
                coralReefs: 9999, upsc: 0, games: 9999,
                atlas: 9999, waterfalls: 9999, glaciers: 9999,
                caves: 9999, parks: 9999,
                encyc_physical: 9999, encyc_climate: 9999, encyc_human: 9999,
                encyc_environment: 9999, encyc_space: 9999, encyc_maps: 9999,
                encyc_historical: 9999
            },
            ultimate: {
                mountains: 9999, rivers: 9999, lakes: 9999, oceans: 9999,
                forests: 9999, deserts: 9999, volcanoes: 9999, islands: 9999,
                coralReefs: 9999, upsc: 9999, games: 9999,
                atlas: 9999, waterfalls: 9999, glaciers: 9999,
                caves: 9999, parks: 9999,
                encyc_physical: 9999, encyc_climate: 9999, encyc_human: 9999,
                encyc_environment: 9999, encyc_space: 9999, encyc_maps: 9999,
                encyc_historical: 9999
            }
        };

        var limits = PLAN_LIMITS[plan] || PLAN_LIMITS.basic;
        return limits[category] !== undefined ? limits[category] : 7;
    }

    // ==========================================
    // GLOBAL CLICK BLOCKER
    // ==========================================

    function installGlobalClickBlocker() {
        if (state.globalClickHandler) return;

        state.globalClickHandler = function(e) {
            var target = e.target;
            var card   = target.closest('.geo-locked-card');
            if (card) {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
                showUpgradeModal();
                return false;
            }
        };

        document.addEventListener('click', state.globalClickHandler, true);
        console.log('💜 Global click blocker installed');
    }

    // ==========================================
    // STYLES
    // ==========================================

    function injectStyles() {
        if (state.styleInjected) return;

        var style = document.createElement('style');
        style.id  = 'geo-premium-styles';
        style.textContent = `

            /* ── FREE BADGE ── */
            .geo-free-badge {
                position: absolute !important;
                top: 8px !important; left: 8px !important;
                background: linear-gradient(135deg, #22c55e, #16a34a) !important;
                color: white !important;
                padding: 4px 10px !important;
                border-radius: 15px !important;
                font-size: 10px !important;
                font-weight: bold !important;
                z-index: 999 !important;
                pointer-events: none !important;
            }

            /* ── LOCKED CARD ── */
            .geo-locked-card {
                position: relative !important;
                cursor: pointer !important;
                pointer-events: auto !important;
                overflow: hidden !important;
            }

            .geo-locked-card * {
                pointer-events: none !important;
            }

            /* ── FREE CARD ── */
            .geo-free-card {
                position: relative !important;
            }

            .geo-free-card * {
                pointer-events: auto !important;
            }

            /* ── GIFT WRAP OVERLAY ── */
            .geo-gift-overlay {
                position: absolute !important;
                inset: 0 !important;
                background: rgba(109,40,217,0.10) !important;
                z-index: 10 !important;
                pointer-events: none !important;
                border-radius: inherit !important;
            }

            /* ── VERTICAL RIBBON ── */
            .geo-ribbon-v {
                position: absolute !important;
                top: 0 !important; bottom: 0 !important;
                left: 50% !important;
                transform: translateX(-50%) !important;
                width: 22px !important;
                background: linear-gradient(180deg,
                    #4c1d95,#7c3aed,#a855f7,#c084fc,#a855f7,#7c3aed,#4c1d95
                ) !important;
                box-shadow: 2px 0 8px rgba(124,58,237,0.5),
                           -2px 0 8px rgba(124,58,237,0.5) !important;
                z-index: 11 !important;
                pointer-events: none !important;
            }

            /* ── HORIZONTAL RIBBON ── */
            .geo-ribbon-h {
                position: absolute !important;
                left: 0 !important; right: 0 !important;
                top: 50% !important;
                transform: translateY(-50%) !important;
                height: 22px !important;
                background: linear-gradient(90deg,
                    #4c1d95,#7c3aed,#a855f7,#c084fc,#a855f7,#7c3aed,#4c1d95
                ) !important;
                box-shadow: 0 2px 8px rgba(124,58,237,0.5),
                            0 -2px 8px rgba(124,58,237,0.5) !important;
                z-index: 11 !important;
                pointer-events: none !important;
            }

            /* ── EARTH KNOT ── */
            .geo-ribbon-knot {
                position: absolute !important;
                top: 50% !important; left: 50% !important;
                transform: translate(-50%,-50%) !important;
                width: 44px !important; height: 44px !important;
                background: linear-gradient(135deg,#1e3a5f,#2563eb,#1e40af) !important;
                border-radius: 50% !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                font-size: 22px !important;
                box-shadow: 0 0 0 3px white,
                            0 0 0 5px #7c3aed,
                            0 4px 16px rgba(124,58,237,0.7) !important;
                z-index: 12 !important;
                pointer-events: none !important;
            }

            /* ── CORNER DOTS ── */
            .geo-ribbon-dot {
                position: absolute !important;
                width: 9px !important; height: 9px !important;
                background: radial-gradient(circle,#e9d5ff,#7c3aed) !important;
                border-radius: 50% !important;
                box-shadow: 0 0 6px rgba(192,132,252,0.9) !important;
                z-index: 13 !important;
                pointer-events: none !important;
            }
            .geo-ribbon-dot.tl { top:6px !important;    left:6px !important;   }
            .geo-ribbon-dot.tr { top:6px !important;    right:6px !important;  }
            .geo-ribbon-dot.bl { bottom:6px !important; left:6px !important;   }
            .geo-ribbon-dot.br { bottom:6px !important; right:6px !important;  }

            /* ══════════════════════════════════════
               ENCYCLOPEDIA CONTENT PAGE LOCK SYSTEM
               ══════════════════════════════════════ */

            .geo-encyc-locked {
                position: relative !important;
                filter: blur(5px) !important;
                -webkit-filter: blur(5px) !important;
                user-select: none !important;
                -webkit-user-select: none !important;
                pointer-events: none !important;
            }

            .geo-encyc-overlay {
                position: absolute !important;
                top: 0 !important; left: 0 !important;
                width: 100% !important; height: 100% !important;
                z-index: 100 !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                background: linear-gradient(
                    to bottom,
                    transparent 0%,
                    rgba(10,10,20,0.6) 20%,
                    rgba(10,10,20,0.92) 50%,
                    rgba(10,10,20,0.97) 100%
                ) !important;
                cursor: pointer !important;
                pointer-events: auto !important;
            }

            .geo-encyc-box {
                background: linear-gradient(135deg,
                    rgba(124,58,237,0.15),rgba(168,85,247,0.1)
                ) !important;
                border: 1px solid rgba(124,58,237,0.4) !important;
                border-radius: 20px !important;
                padding: 32px 40px !important;
                text-align: center !important;
                max-width: 400px !important;
                width: 90% !important;
                box-shadow: 0 20px 60px rgba(124,58,237,0.3) !important;
                pointer-events: auto !important;
            }

            .geo-encyc-box h3 {
                color: white !important;
                font-size: 22px !important;
                font-weight: 800 !important;
                margin: 12px 0 10px !important;
            }

            .geo-encyc-box p {
                color: rgba(255,255,255,0.7) !important;
                font-size: 14px !important;
                line-height: 1.6 !important;
                margin: 0 0 20px !important;
            }

            .geo-encyc-btn {
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

            .geo-encyc-note {
                color: rgba(255,255,255,0.35) !important;
                font-size: 11px !important;
                margin-top: 10px !important;
            }

            .geo-encyc-fade {
                height: 80px !important;
                background: linear-gradient(to bottom, transparent, rgba(10,10,20,0.4)) !important;
                pointer-events: none !important;
                margin-bottom: -2px !important;
            }
        `;

        document.head.appendChild(style);
        state.styleInjected = true;
        console.log('💜 Styles injected');
    }

    // ==========================================
    // FREE ITEMS (MEMORY ONLY - NO SESSIONSTORAGE)
    // ==========================================

    function addFreeItem(name) {
        if (!name) return false;
        var normalized = name.toLowerCase().trim();
        var limit      = getFreeLimit(state.category);
        if (state.freeItems.length >= limit) return false;
        if (state.freeItems.indexOf(normalized) !== -1) return false;
        state.freeItems.push(normalized);
        return true;
    }

    // ==========================================
    // CONTAINER FINDER
    // ==========================================

    function findContainer() {
        var selectors = [
            // Encyclopedia category pages
            '.topics-grid',
            '.concepts-grid',
            '.category-grid',
            '.encyc-grid',
            // Regular grid pages
            '.rivers-grid', '.mountains-grid', '.lakes-grid',
            '.forests-grid', '.deserts-grid', '.volcanoes-grid',
            '.islands-grid', '.oceans-grid', '.games-grid',
            '.atlas-grid', '.reefs-grid', '.coral-grid',
            '.cards-grid', '.items-grid', '.grid',
            '#grid', '#cardsGrid', '[class*="-grid"]'
        ];
        for (var i = 0; i < selectors.length; i++) {
            var c = document.querySelector(selectors[i]);
            if (c && c.children.length > 0) {
                console.log('💜 Container found:', selectors[i]);
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
        var h = card.querySelector('h1,h2,h3,h4,h5,.topic-title,.card-title');
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

    // ==========================================
    // MAKE CARDS FREE / LOCKED
    // ==========================================

    function makeCardFree(card) {
        card.classList.remove('geo-locked-card');
        card.querySelectorAll(
            '.geo-gift-overlay,.geo-ribbon-v,.geo-ribbon-h,.geo-ribbon-knot,.geo-ribbon-dot'
        ).forEach(function(el) { el.remove(); });
        if (card.querySelector('.geo-free-badge')) return;
        card.classList.add('geo-free-card', 'geo-processed');
        var badge       = document.createElement('div');
        badge.className = 'geo-free-badge';
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

        var overlay = document.createElement('div');
        overlay.className = 'geo-gift-overlay';
        card.appendChild(overlay);

        var rv = document.createElement('div');
        rv.className = 'geo-ribbon-v';
        card.appendChild(rv);

        var rh = document.createElement('div');
        rh.className = 'geo-ribbon-h';
        card.appendChild(rh);

        var knot = document.createElement('div');
        knot.className   = 'geo-ribbon-knot';
        knot.textContent = '🌍';
        card.appendChild(knot);

        ['tl','tr','bl','br'].forEach(function(pos) {
            var dot       = document.createElement('div');
            dot.className = 'geo-ribbon-dot ' + pos;
            card.appendChild(dot);
        });
    }

    // ==========================================
    // PROCESS CARDS (GRID + ENCYC-CATEGORY)
    // ==========================================

    function processCards() {
        console.log('💜 Processing cards...');

        var container = findContainer();
        if (!container) {
            console.log('💜 No container found');
            return;
        }

        var validCards = Array.from(container.children).filter(isValidCard);
        console.log('💜 Valid cards:', validCards.length);
        if (validCards.length === 0) return;

        // Fresh every time - no sessionStorage
        state.freeItems = [];

        var stats = { free: 0, locked: 0 };

        validCards.forEach(function(card) {
            var name = getCardName(card);
            if (addFreeItem(name)) {
                makeCardFree(card);
                stats.free++;
            } else {
                makeCardLocked(card);
                stats.locked++;
            }
        });

        console.log('💜 Results:', stats.free, 'free,', stats.locked, 'locked');

        if (stats.locked > 0) {
            addUpgradeCTA(container, stats.locked, stats.free, validCards.length);
        }
    }

    // ==========================================
    // UPGRADE CTA
    // ==========================================

    function addUpgradeCTA(container, locked, free, total) {
        var old = container.querySelector('.geo-upgrade-cta');
        if (old) old.remove();

        var categoryNames = {
            mountains: 'Mountains', rivers: 'Rivers', lakes: 'Lakes',
            forests: 'Forests', deserts: 'Deserts', oceans: 'Oceans',
            volcanoes: 'Volcanoes', islands: 'Islands', coralReefs: 'Coral Reefs',
            games: 'Games', atlas: 'Maps', upsc: 'Topics',
            encyc_physical: 'Topics', encyc_climate: 'Topics',
            encyc_human: 'Topics', encyc_environment: 'Topics',
            encyc_space: 'Topics', encyc_maps: 'Topics',
            encyc_historical: 'Topics'
        };

        var cta           = document.createElement('div');
        cta.className     = 'geo-upgrade-cta geo-processed';
        cta.style.cssText =
            'grid-column:1/-1;' +
            'background:linear-gradient(135deg,#7c3aed,#5b21b6);' +
            'border-radius:20px;padding:40px 25px;' +
            'text-align:center;color:white;margin:25px 0;';

        cta.innerHTML =
            '<div style="font-size:50px;margin-bottom:15px;">💜</div>' +
            '<h3 style="font-size:24px;margin:0 0 10px;">Keep Discovering!</h3>' +
            '<div style="font-size:50px;font-weight:bold;margin:15px 0;">' + locked + '</div>' +
            '<p style="font-size:16px;margin-bottom:20px;">more ' +
                (categoryNames[state.category] || 'topics') + ' waiting!</p>' +
            '<button id="geo-unlock-btn" style="background:white;color:#7c3aed;border:none;' +
                'padding:14px 40px;border-radius:30px;font-size:16px;font-weight:bold;' +
                'cursor:pointer;">💜 Unlock All</button>' +
            '<p style="font-size:12px;opacity:0.6;margin-top:15px;">' +
                free + ' of ' + total + ' free</p>';

        container.appendChild(cta);
        document.getElementById('geo-unlock-btn').addEventListener('click', showUpgradeModal);
    }

    // ==========================================
    // ENCYCLOPEDIA CONTENT LOCK (1/8 FREE)
    // ==========================================

    function lockEncyclopediaContent() {
        if (state.encyclopediaLocked) return;
        state.encyclopediaLocked = true;

        console.log('💜 Locking encyclopedia content page...');

        // Find content element - specific to your structure
        var contentSelectors = [
            'main', '.topics-main', '.content-main',
            'article', '.article', '.content',
            '.page-content', '.main-content',
            '#content', '#main'
        ];

        var contentEl = null;
        for (var i = 0; i < contentSelectors.length; i++) {
            var el = document.querySelector(contentSelectors[i]);
            if (el) {
                contentEl = el;
                break;
            }
        }

        if (!contentEl) {
            console.log('💜 No content element found for encyclopedia lock');
            return;
        }

        var children = Array.from(contentEl.children);
        if (children.length === 0) return;

        // Show first 1/8 of children free
        var freeCount  = Math.max(1, Math.floor(children.length / 8));
        var lockedKids = children.slice(freeCount);

        if (lockedKids.length === 0) {
            console.log('💜 Not enough content to lock');
            return;
        }

        console.log('💜 Free sections:', freeCount, '| Locked sections:', lockedKids.length);

        // Create locked wrapper
        var wrapper       = document.createElement('div');
        wrapper.style.cssText = 'position:relative;';

        // Fade line
        var fade       = document.createElement('div');
        fade.className = 'geo-encyc-fade';

        // Move locked children into wrapper
        lockedKids.forEach(function(child) {
            wrapper.appendChild(child);
        });

        wrapper.classList.add('geo-encyc-locked');

        // Overlay
        var overlay       = document.createElement('div');
        overlay.className = 'geo-encyc-overlay';

        var msg = BTS_MESSAGES[Math.floor(Math.random() * BTS_MESSAGES.length)];

        overlay.innerHTML =
            '<div class="geo-encyc-box">' +
                '<div style="font-size:48px;">💜</div>' +
                '<h3>' + msg.title + '</h3>' +
                '<p>' + msg.subtitle + '<br><br>' +
                    'Unlock full access to all encyclopedia content!</p>' +
                '<button class="geo-encyc-btn" id="geo-encyc-unlock">💜 Unlock Full Access</button>' +
                '<p class="geo-encyc-note">보라해 💜 · Plans from ₹299/year</p>' +
            '</div>';

        wrapper.appendChild(overlay);

        // Insert fade then wrapper after free content
        contentEl.insertBefore(fade, lockedKids[0] || null);
        contentEl.appendChild(wrapper);

        document.getElementById('geo-encyc-unlock').addEventListener('click', function(e) {
            e.stopPropagation();
            showUpgradeModal();
        });

        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) showUpgradeModal();
        });

        console.log('💜 Encyclopedia content locked!');
    }

    // ==========================================
    // UPGRADE MODAL
    // ==========================================

    function showUpgradeModal() {
        var existing = document.getElementById('geo-premium-modal');
        if (existing) existing.remove();

        var msg = BTS_MESSAGES[Math.floor(Math.random() * BTS_MESSAGES.length)];

        var modal = document.createElement('div');
        modal.id  = 'geo-premium-modal';
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
                    'color:white;border:none;padding:14px 35px;border-radius:30px;' +
                    'font-size:16px;font-weight:bold;cursor:pointer;width:100%;">💜 View Plans</button>' +
                '<p style="color:rgba(255,255,255,0.4);font-size:11px;margin-top:15px;">보라해 💜</p>' +
            '</div>';

        document.body.appendChild(modal);

        modal.addEventListener('click', function(e) {
            if (e.target === modal) modal.remove();
        });

        document.getElementById('geo-pricing-btn').addEventListener('click', function() {
            window.location.href = '/pricing.html';
        });
    }

    // ==========================================
    // OBSERVER
    // ==========================================

    function startObserver() {
        if (state.observer) state.observer.disconnect();
        var debounceTimer;
        state.observer = new MutationObserver(function() {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(processCards, 300);
        });
        state.observer.observe(document.body, { childList: true, subtree: true });
        console.log('💜 Observer started');
    }

    // ==========================================
    // INITIALIZE
    // ==========================================

    function initialize() {
        console.log('💜 Initializing...');

        state.pageType = detectPageType();
        console.log('💜 Page type:', state.pageType);

        if (!state.pageType) {
            console.log('💜 Not a managed page - exiting');
            return;
        }

        // Fully free pages - do nothing
        if (state.pageType === 'encyc-free' ||
            state.pageType === 'encyc-main') {
            console.log('💜 Free page - no locks');
            return;
        }

        // Premium user - no locks
        if (isPremium()) {
            console.log('💜 Premium user - no locks needed');
            return;
        }

        injectStyles();
        installGlobalClickBlocker();

        // ── Encyclopedia CATEGORY page ──
        // Shows topic cards - lock after first 2
        if (state.pageType === 'encyc-category') {
            state.category = detectEncycCategory();
            console.log('💜 Encyclopedia category:', state.category);
            state.freeItems = [];
            processCards();
            startObserver();
            return;
        }

        // ── Encyclopedia CONTENT page ──
        // Blur 7/8 of content
        if (state.pageType === 'encyc-content') {
            console.log('💜 Encyclopedia content page - applying blur lock');
            if (document.readyState === 'complete') {
                lockEncyclopediaContent();
            } else {
                window.addEventListener('load', lockEncyclopediaContent);
            }
            return;
        }

        // ── GRID page ──
        if (state.pageType === 'grid') {
            state.category = detectCategory();
            console.log('💜 Grid page category:', state.category);

            var plan = localStorage.getItem('dv_plan') || 'basic';
            if (plan === 'pro' && state.category === 'upsc') {
                FREE_LIMITS.upsc = 0;
            }

            state.freeItems = [];
            processCards();
            startObserver();

            document.addEventListener('click', function(e) {
                var t = e.target;
                if (t.matches('[data-filter],[data-category],.filter-btn,.tab-btn')) {
                    setTimeout(function() {
                        document.querySelectorAll('.geo-processed').forEach(function(el) {
                            el.classList.remove('geo-processed');
                        });
                        processCards();
                    }, 400);
                }
            });
        }

        console.log('💜 Initialization complete');
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
        reprocess:   processCards,
        reset: function() {
            state.freeItems = [];
            processCards();
        }
    };

    console.log('💜 Premium Wrapper Loaded');

})();
