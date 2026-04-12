// ========================================
// 💜 PREMIUM WRAPPER - NUCLEAR FIX v3
// ========================================

(function() {
    'use strict';
    
    console.log('💜 Premium Wrapper Loading...');
    
    // ==========================================
    // CONFIG
    // ==========================================
    
    // Keep old variable for backward compatibility
    var FREE_LIMITS = {
        mountains: 7, rivers: 7, lakes: 7, oceans: 2,
        forests: 7, deserts: 7, volcanoes: 7, islands: 7,
        coralReefs: 7, encyclopedia: 2, upsc: 3, games: 3,
        atlas: 7, waterfalls: 7, glaciers: 7, caves: 3, parks: 3
    };

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

    var state = {
        category: null,
        freeItems: [],
        observer: null,
        styleInjected: false,
        lastProcessTime: 0,
        globalClickHandler: null
    };

    // ==========================================
    // UTILITY FUNCTIONS
    // ==========================================
    
    function getBasePath() {
        var path = window.location.pathname;
        return path.includes('/geotopia/') ? '/geotopia/' : '/';
    }

    function detectCategory() {
        var url = window.location.href.toLowerCase();
        var map = {
            'river': 'rivers',
            'mountain': 'mountains',
            'lake': 'lakes',
            'forest': 'forests',
            'desert': 'deserts',
            'volcano': 'volcanoes',
            'island': 'islands',
            'ocean': 'oceans',
            'coral': 'coralReefs',
            'game': 'games',
            'atlas': 'atlas',
            'upsc': 'upsc',
            'encyclopedia': 'encyclopedia',
            'countr': 'encyclopedia'
        };
        
        for (var key in map) {
            if (url.includes(key)) {
                return map[key];
            }
        }
        return null;
    }

    // ==========================================
    // ✅ NEW: PLAN-AWARE isPremium()
    // ==========================================

    function isPremium() {
        // New payment system
        var plan = localStorage.getItem('dv_plan') || 'basic';

        // Admin override
        var isAdmin   = localStorage.getItem('dv_admin');
        var adminTime = parseInt(localStorage.getItem('dv_admin_time') || '0');
        var adminOk   = isAdmin === 'true' && (Date.now() - adminTime) < 86400000;
        if (adminOk) return true;

        // Check expiry
        var expiry = localStorage.getItem('dv_plan_expiry');
        if (expiry && new Date(expiry) < new Date()) {
            // Expired - reset
            localStorage.setItem('dv_plan', 'basic');
            localStorage.removeItem('dv_premium');
            return false;
        }

        // Check based on plan + current page
        var category = detectCategory();

        // Ultimate = everything unlocked
        if (plan === 'ultimate') return true;

        // Pro = everything except UPSC
        if (plan === 'pro') {
            if (category === 'upsc') return false;
            return true;
        }

        // Games plan = only games unlocked
        if (plan === 'games' && category === 'games') return true;

        // UPSC plan = only UPSC unlocked
        if (plan === 'upsc' && category === 'upsc') return true;

        // Old system fallback
        if (localStorage.getItem('geo_premium') === 'true') return true;
        if (localStorage.getItem('dv_premium') === 'true' && plan !== 'basic') return true;

        return false;
    }

    // ==========================================
    // ✅ NEW: DYNAMIC FREE LIMITS
    // ==========================================

    function getFreeLimit(category) {
        var plan = localStorage.getItem('dv_plan') || 'basic';

        // Admin = unlimited
        var isAdmin   = localStorage.getItem('dv_admin');
        var adminTime = parseInt(localStorage.getItem('dv_admin_time') || '0');
        if (isAdmin === 'true' && (Date.now() - adminTime) < 86400000) {
            return 9999;
        }

        // Plan-specific limits
        var PLAN_LIMITS = {
            basic: {
                mountains: 7, rivers: 7, lakes: 7, oceans: 2,
                forests: 7, deserts: 7, volcanoes: 7, islands: 7,
                coralReefs: 7, encyclopedia: 2, upsc: 3, games: 3,
                atlas: 7, waterfalls: 7, glaciers: 7, caves: 3, parks: 3
            },
            games: {
                mountains: 7, rivers: 7, lakes: 7, oceans: 2,
                forests: 7, deserts: 7, volcanoes: 7, islands: 7,
                coralReefs: 7, encyclopedia: 2, upsc: 3, games: 9999,
                atlas: 7, waterfalls: 7, glaciers: 7, caves: 3, parks: 3
            },
            upsc: {
                mountains: 7, rivers: 7, lakes: 7, oceans: 2,
                forests: 7, deserts: 7, volcanoes: 7, islands: 7,
                coralReefs: 7, encyclopedia: 2, upsc: 9999, games: 3,
                atlas: 7, waterfalls: 7, glaciers: 7, caves: 3, parks: 3
            },
            pro: {
                mountains: 9999, rivers: 9999, lakes: 9999, oceans: 9999,
                forests: 9999, deserts: 9999, volcanoes: 9999, islands: 9999,
                coralReefs: 9999, encyclopedia: 9999, upsc: 0, games: 9999,
                atlas: 9999, waterfalls: 9999, glaciers: 9999, caves: 9999, parks: 9999
            },
            ultimate: {
                mountains: 9999, rivers: 9999, lakes: 9999, oceans: 9999,
                forests: 9999, deserts: 9999, volcanoes: 9999, islands: 9999,
                coralReefs: 9999, encyclopedia: 9999, upsc: 9999, games: 9999,
                atlas: 9999, waterfalls: 9999, glaciers: 9999, caves: 9999, parks: 9999
            }
        };

        var limits = PLAN_LIMITS[plan] || PLAN_LIMITS.basic;
        return limits[category] || 7;
    }

    // ==========================================
    // GLOBAL CLICK BLOCKER - RUNS FIRST
    // ==========================================

    if (target.closest('.geo-free-card')) return;
    state.globalClickHandler = function(e) {
    var target = e.target;
    
    // ✅ FREE CARD — always let through
    if (target.closest('.geo-free-card')) {
        return;
    }
    
    // Walk up to find if this is inside a locked card
    var card = target.closest('.geo-locked-card');
    
    if (card) {
        console.log('💜 BLOCKED: Click on locked card');
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
    // STYLES - INJECTED ONCE
    // ==========================================
    
    function injectStyles() {
        if (state.styleInjected) return;
        
        var style = document.createElement('style');
        style.id = 'geo-premium-styles';
        style.textContent = `

            /* ── Horizontal ribbon across the card ── */
            .geo-ribbon-wrap {
                position: absolute !important;
                top: 50% !important;
                left: 0 !important;
                width: 100% !important;
                transform: translateY(-50%) !important;
                z-index: 998 !important;
                pointer-events: none !important;
                display: flex !important;
                flex-direction: column !important;
                align-items: center !important;
            }

            /* Top ribbon strip */
            .geo-ribbon-top {
                width: 100% !important;
                height: 6px !important;
                background: linear-gradient(90deg,
                    #4c1d95, #7c3aed, #a855f7, #c084fc, #a855f7, #7c3aed, #4c1d95
                ) !important;
                box-shadow: 0 2px 8px rgba(124,58,237,0.6) !important;
            }

            /* Center band with label */
            .geo-ribbon-center {
                width: 100% !important;
                background: linear-gradient(90deg,
                    rgba(76,29,149,0.92),
                    rgba(124,58,237,0.96),
                    rgba(168,85,247,0.98),
                    rgba(124,58,237,0.96),
                    rgba(76,29,149,0.92)
                ) !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                gap: 10px !important;
                padding: 8px 0 !important;
                box-shadow:
                    0 4px 18px rgba(124,58,237,0.55),
                    0 -4px 18px rgba(124,58,237,0.55) !important;
            }

            /* Earth icon knot */
            .geo-ribbon-earth {
                width: 34px !important;
                height: 34px !important;
                background: linear-gradient(135deg, #1e3a5f, #2563eb, #1e40af) !important;
                border-radius: 50% !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                font-size: 20px !important;
                box-shadow:
                    0 0 0 3px rgba(255,255,255,0.25),
                    0 0 12px rgba(37,99,235,0.7) !important;
                flex-shrink: 0 !important;
            }

            .geo-ribbon-text {
                color: white !important;
                font-size: 11px !important;
                font-weight: 800 !important;
                letter-spacing: 2px !important;
                text-transform: uppercase !important;
                text-shadow: 0 1px 4px rgba(0,0,0,0.4) !important;
            }

            /* Bottom ribbon strip */
            .geo-ribbon-bottom {
                width: 100% !important;
                height: 6px !important;
                background: linear-gradient(90deg,
                    #4c1d95, #7c3aed, #a855f7, #c084fc, #a855f7, #7c3aed, #4c1d95
                ) !important;
                box-shadow: 0 -2px 8px rgba(124,58,237,0.6) !important;
            }

            /* Subtle overlay — still shows card content */
            .geo-ribbon-overlay {
                position: absolute !important;
                inset: 0 !important;
                background: rgba(109, 40, 217, 0.12) !important;
                z-index: 996 !important;
                pointer-events: none !important;
                border-radius: inherit !important;
            }

            /* Corner shimmer dots */
            .geo-ribbon-dot {
                position: absolute !important;
                width: 8px !important;
                height: 8px !important;
                background: radial-gradient(circle, #c084fc, #7c3aed) !important;
                border-radius: 50% !important;
                box-shadow: 0 0 6px rgba(192,132,252,0.8) !important;
                z-index: 999 !important;
                pointer-events: none !important;
            }
            .geo-ribbon-dot.tl { top: 6px !important; left: 6px !important; }
            .geo-ribbon-dot.tr { top: 6px !important; right: 6px !important; }
            .geo-ribbon-dot.bl { bottom: 6px !important; left: 6px !important; }
            .geo-ribbon-dot.br { bottom: 6px !important; right: 6px !important; }

            /* Free badge */
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

            /* LOCKED CARD */
            .geo-locked-card {
                position: relative !important;
                cursor: pointer !important;
                pointer-events: auto !important;
                overflow: hidden !important;
            }

            /* Disable ALL clicks inside locked cards */
            .geo-locked-card * {
                pointer-events: none !important;
            }

            /* FREE CARD */
            .geo-free-card {
                position: relative !important;
            }

            .geo-free-card * {
                pointer-events: auto !important;
            }
        `;
        
        document.head.appendChild(style);
        state.styleInjected = true;
        console.log('💜 Styles injected');
    }

    // ==========================================
    // FREE ITEMS MANAGEMENT
    // ==========================================
    
    function loadFreeItems() {
        if (!state.category) return;
        var key = 'geo_free_' + state.category;
        var saved = sessionStorage.getItem(key);
        state.freeItems = saved ? JSON.parse(saved) : [];
        console.log('💜 Loaded free items:', state.freeItems.length);
    }

    function saveFreeItems() {
        if (!state.category) return;
        var key = 'geo_free_' + state.category;
        sessionStorage.setItem(key, JSON.stringify(state.freeItems));
    }

    function isItemFree(name) {
        if (!name) return false;
        var normalized = name.toLowerCase().trim();
        return state.freeItems.indexOf(normalized) !== -1;
    }

    // ✅ NEW: Uses getFreeLimit() instead of FREE_LIMITS
    function addFreeItem(name) {
        if (!name) return false;
        var normalized = name.toLowerCase().trim();
        var limit = getFreeLimit(state.category);

        if (state.freeItems.length >= limit) return false;
        if (state.freeItems.indexOf(normalized) !== -1) return false;

        state.freeItems.push(normalized);
        saveFreeItems();
        return true;
    }

    // ==========================================
    // CARD DETECTION & NAMING
    // ==========================================
    
    function findContainer() {
        var selectors = [
            '.rivers-grid', '.mountains-grid', '.lakes-grid',
            '.forests-grid', '.deserts-grid', '.volcanoes-grid',
            '.islands-grid', '.oceans-grid', '.games-grid',
            '.atlas-grid', '.reefs-grid', '.coral-grid',
            '.cards-grid', '.items-grid', '.grid',
            '#grid', '#cardsGrid', '[class*="-grid"]'
        ];
        
        for (var i = 0; i < selectors.length; i++) {
            var container = document.querySelector(selectors[i]);
            if (container && container.children.length > 0) {
                console.log('💜 Found container:', selectors[i], '(' + container.children.length + ' children)');
                return container;
            }
        }
        
        console.log('💜 No container found');
        return null;
    }

    function getCardName(card) {
        var name = card.getAttribute('data-name') || 
                   card.getAttribute('data-title') ||
                   card.getAttribute('data-item');
        if (name) return name.trim();
        
        var headings = card.querySelectorAll(':scope > h1, :scope > h2, :scope > h3, :scope > .title, :scope > .name');
        if (headings.length > 0) return headings[0].textContent.trim();
        
        var anyHeading = card.querySelector('h1, h2, h3, h4, h5');
        if (anyHeading) return anyHeading.textContent.trim();
        
        return card.textContent.trim().substring(0, 30);
    }

    function isValidCard(element) {
        if (!element || !element.tagName) return false;
        var tag = element.tagName.toUpperCase();
        if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'LINK') return false;
        if (element.classList.contains('geo-upgrade-cta')) return false;
        if (element.classList.contains('geo-processed')) return false;
        return true;
    }

    // ==========================================
    // APPLY LOCKS TO CARDS
    // ==========================================
    
    function makeCardFree(card) {
        card.classList.remove('geo-locked-card');

        // Remove any ribbon elements if re-processing
        var toRemove = card.querySelectorAll(
            '.geo-ribbon-wrap, .geo-ribbon-overlay, .geo-ribbon-dot'
        );
        toRemove.forEach(function(el) { el.remove(); });

        if (card.querySelector('.geo-free-badge')) return;

        card.classList.add('geo-free-card', 'geo-processed');

        var badge = document.createElement('div');
        badge.className = 'geo-free-badge';
        badge.textContent = '✨ Free';
        card.appendChild(badge);
    }

    function makeCardLocked(card) {
        // Remove free badge if exists
        var oldBadge = card.querySelector('.geo-free-badge');
        if (oldBadge) oldBadge.remove();

        if (card.querySelector('.geo-ribbon-wrap')) return; // Already done

        card.classList.add('geo-locked-card', 'geo-processed');

        // Remove href to prevent navigation
        if (card.tagName === 'A') {
            card.removeAttribute('href');
            card.style.cursor = 'pointer';
        }

        // Subtle purple overlay (card still visible)
        var overlay = document.createElement('div');
        overlay.className = 'geo-ribbon-overlay';
        card.appendChild(overlay);

        // ── Corner shimmer dots ──
        ['tl','tr','bl','br'].forEach(function(pos) {
            var dot = document.createElement('div');
            dot.className = 'geo-ribbon-dot ' + pos;
            card.appendChild(dot);
        });

        // ── Ribbon wrapper ──
        var ribbonWrap = document.createElement('div');
        ribbonWrap.className = 'geo-ribbon-wrap';

        // Top strip
        var topStrip = document.createElement('div');
        topStrip.className = 'geo-ribbon-top';

        // Center band
        var center = document.createElement('div');
        center.className = 'geo-ribbon-center';

        var earth = document.createElement('div');
        earth.className = 'geo-ribbon-earth';
        earth.textContent = '🌍';

        var text = document.createElement('span');
        text.className = 'geo-ribbon-text';
        text.textContent = 'Premium';

        var earth2 = document.createElement('div');
        earth2.className = 'geo-ribbon-earth';
        earth2.textContent = '🌍';

        center.appendChild(earth);
        center.appendChild(text);
        center.appendChild(earth2);

        // Bottom strip
        var bottomStrip = document.createElement('div');
        bottomStrip.className = 'geo-ribbon-bottom';

        ribbonWrap.appendChild(topStrip);
        ribbonWrap.appendChild(center);
        ribbonWrap.appendChild(bottomStrip);

        card.appendChild(ribbonWrap);
    }

    // ==========================================
    // MAIN PROCESSING LOGIC
    // ==========================================
    
    function processCards() {
        console.log('💜 Processing cards...');
        
        var container = findContainer();
        if (!container) return;
        
        var children = Array.from(container.children);
        var validCards = children.filter(isValidCard);
        
        console.log('💜 Valid cards:', validCards.length);
        if (validCards.length === 0) return;
        
        var stats = { free: 0, locked: 0 };
        
        validCards.forEach(function(card) {
            var name = getCardName(card);
            
            if (isItemFree(name)) {
                makeCardFree(card);
                stats.free++;
            } else if (addFreeItem(name)) {
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
        var oldCTA = container.querySelector('.geo-upgrade-cta');
        if (oldCTA) oldCTA.remove();
        
        var categoryNames = {
            rivers: 'Rivers', mountains: 'Mountains', lakes: 'Lakes',
            forests: 'Forests', deserts: 'Deserts', oceans: 'Oceans',
            volcanoes: 'Volcanoes', islands: 'Islands', coralReefs: 'Coral Reefs',
            games: 'Games', atlas: 'Maps', upsc: 'Topics', encyclopedia: 'Countries'
        };
        
        var cta = document.createElement('div');
        cta.className = 'geo-upgrade-cta geo-processed';
        cta.style.cssText = 
            'grid-column: 1 / -1;' +
            'background: linear-gradient(135deg, #7c3aed, #5b21b6);' +
            'border-radius: 20px;' +
            'padding: 40px 25px;' +
            'text-align: center;' +
            'color: white;' +
            'margin: 25px 0;';
        
        cta.innerHTML = 
            '<div style="font-size: 50px; margin-bottom: 15px;">💜</div>' +
            '<h3 style="font-size: 24px; margin: 0 0 10px;">Keep Discovering!</h3>' +
            '<div style="font-size: 50px; font-weight: bold; margin: 15px 0;">' + locked + '</div>' +
            '<p style="font-size: 16px; margin-bottom: 20px;">more ' + (categoryNames[state.category] || 'items') + ' waiting!</p>' +
            '<button id="geo-unlock-btn" style="background: white; color: #7c3aed; border: none; padding: 14px 40px; border-radius: 30px; font-size: 16px; font-weight: bold; cursor: pointer;">💜 Unlock All</button>' +
            '<p style="font-size: 12px; opacity: 0.6; margin-top: 15px;">' + free + ' of ' + total + ' free</p>';
        
        container.appendChild(cta);
        
        document.getElementById('geo-unlock-btn').addEventListener('click', showUpgradeModal);
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
            'position: fixed; top: 0; left: 0; width: 100%; height: 100%;' +
            'background: rgba(88, 28, 135, 0.95); z-index: 999999;' +
            'display: flex; align-items: center; justify-content: center;';
        
        modal.innerHTML = 
            '<div style="background: linear-gradient(145deg, #1e1b4b, #312e81); border-radius: 25px; padding: 40px; max-width: 400px; width: 90%; text-align: center;">' +
                '<div style="font-size: 60px; margin-bottom: 15px;">💜</div>' +
                '<h2 style="color: white; font-size: 24px; margin: 0 0 10px;">' + msg.title + '</h2>' +
                '<p style="color: rgba(255,255,255,0.8); font-size: 14px; margin-bottom: 25px;">' + msg.subtitle + '</p>' +
                '<button id="geo-pricing-btn" style="background: linear-gradient(135deg, #a855f7, #7c3aed); color: white; border: none; padding: 14px 35px; border-radius: 30px; font-size: 16px; font-weight: bold; cursor: pointer; width: 100%;">💜 View Plans</button>' +
                '<p style="color: rgba(255,255,255,0.4); font-size: 11px; margin-top: 15px;">보라해 💜</p>' +
            '</div>';
        
        document.body.appendChild(modal);
        
        modal.addEventListener('click', function(e) {
            if (e.target === modal) modal.remove();
        });

        // ✅ Updated to absolute /pricing.html
        document.getElementById('geo-pricing-btn').addEventListener('click', function() {
            window.location.href = '/pricing.html';
        });
    }

    // ==========================================
    // MUTATION OBSERVER
    // ==========================================
    
    function startObserver() {
        if (state.observer) {
            state.observer.disconnect();
        }
        
        var debounceTimer;
        
        state.observer = new MutationObserver(function(mutations) {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(function() {
                console.log('💜 DOM changed, reprocessing...');
                processCards();
            }, 300);
        });
        
        state.observer.observe(document.body, {
            childList: true,
            subtree: true
        });
        
        console.log('💜 Observer started');
    }

    // ==========================================
    // INIT
    // ==========================================
    
    function initialize() {
        console.log('💜 Initializing...');
        
        state.category = detectCategory();
        
        if (!state.category) {
            console.log('💜 No category detected - exiting');
            return;
        }
        
        console.log('💜 Category:', state.category);
        
        if (isPremium()) {
            console.log('💜 Premium user - no locks needed');
            return;
        }

        // ✅ Special case: Pro plan — UPSC fully locked (0 items)
        var plan = localStorage.getItem('dv_plan') || 'basic';
        if (plan === 'pro' && state.category === 'upsc') {
            console.log('💜 Pro plan — UPSC fully locked');
            FREE_LIMITS.upsc = 0;
        }
        
        // CRITICAL: Install click blocker FIRST
        installGlobalClickBlocker();
        
        injectStyles();
        loadFreeItems();
        
        // Process immediately
        processCards();
        
        // Then start watching
        startObserver();
        
        // Watch for filter clicks
        document.addEventListener('click', function(e) {
            var target = e.target;
            if (target.matches('[data-filter], [data-category], .filter-btn, .tab-btn')) {
                console.log('💜 Filter clicked');
                setTimeout(function() {
                    document.querySelectorAll('.geo-processed').forEach(function(el) {
                        el.classList.remove('geo-processed');
                    });
                    processCards();
                }, 400);
            }
        });
        
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
    
    // Global API
    window.GeoPremiumWrapper = {
        showUpgrade: showUpgradeModal,
        reprocess: processCards,
        reset: function() {
            sessionStorage.clear();
            location.reload();
        }
    };
    
    console.log('💜 Premium Wrapper Loaded');

})();
