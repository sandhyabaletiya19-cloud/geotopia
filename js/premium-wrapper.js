// ========================================
// 💜 PREMIUM WRAPPER - NUCLEAR FIX v2
// ========================================

(function() {
    'use strict';
    
    console.log('💜 Premium Wrapper Loading...');
    
    // ==========================================
    // CONFIG
    // ==========================================
    
    var FREE_LIMITS = {
        mountains: 7, rivers: 7, lakes: 7, oceans: 7,
        forests: 7, deserts: 7, volcanoes: 7, islands: 7,
        coralReefs: 7, encyclopedia: 7, upsc: 7, games: 3,
        atlas: 7, waterfalls: 7, glaciers: 7, caves: 7, parks: 7
    };

    var BTS_MESSAGES = [
        { title: "Keep Swimming! 🌊", subtitle: "The ocean of knowledge awaits 💜" },
        { title: "Dream, Believe, Achieve! ✨", subtitle: "Unlock your potential 💜" },
        { title: "Purple You! 보라해 💜", subtitle: "We believe in your dreams" },
        { title: "Magic Shop Awaits! ✨", subtitle: "Unlock all wonders 💜" },
        { title: "Beyond The Scene! 🌟", subtitle: "Go beyond with premium 💜" }
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

    function isPremium() {
        return localStorage.getItem('geo_premium') === 'true';
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
    // GLOBAL CLICK BLOCKER - RUNS FIRST
    // ==========================================
    
    function installGlobalClickBlocker() {
        if (state.globalClickHandler) return; // Already installed
        
        state.globalClickHandler = function(e) {
            var target = e.target;
            
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
        
        // Install on capture phase (runs BEFORE other handlers)
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
            .geo-sash {
                position: absolute !important;
                top: 0 !important;
                left: -30% !important;
                width: 160% !important;
                height: 28px !important;
                background: linear-gradient(90deg, #7c3aed, #a855f7, #7c3aed) !important;
                transform: rotate(-35deg) translateY(20px) !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                color: white !important;
                font-size: 10px !important;
                font-weight: bold !important;
                letter-spacing: 1px !important;
                box-shadow: 0 2px 10px rgba(124,58,237,0.5) !important;
                z-index: 999 !important;
                pointer-events: none !important;
            }
            
            .geo-heart {
                position: absolute !important;
                bottom: 8px !important;
                right: 8px !important;
                width: 32px !important;
                height: 32px !important;
                background: linear-gradient(135deg, #7c3aed, #a855f7) !important;
                border-radius: 50% !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                font-size: 16px !important;
                box-shadow: 0 3px 12px rgba(124,58,237,0.5) !important;
                z-index: 999 !important;
                pointer-events: none !important;
            }
            
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
            
            /* CRITICAL: Lock the entire card */
            .geo-locked-card {
                position: relative !important;
                cursor: pointer !important;
                pointer-events: auto !important;
            }
            
            /* Disable ALL clicks inside locked cards */
            .geo-locked-card * {
                pointer-events: none !important;
            }
            
            .geo-free-card {
                position: relative !important;
            }
            
            /* Ensure free cards remain clickable */
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

    function addFreeItem(name) {
        if (!name) return false;
        
        var normalized = name.toLowerCase().trim();
        var limit = FREE_LIMITS[state.category] || 7;
        
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
            '.rivers-grid',
            '.mountains-grid',
            '.lakes-grid',
            '.forests-grid',
            '.deserts-grid',
            '.volcanoes-grid',
            '.islands-grid',
            '.oceans-grid',
            '.games-grid',
            '.atlas-grid',
            '.reefs-grid',
            '.coral-grid',
            '.cards-grid',
            '.items-grid',
            '.grid',
            '#grid',
            '#cardsGrid',
            '[class*="-grid"]'
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
        // Try data attributes first
        var name = card.getAttribute('data-name') || 
                   card.getAttribute('data-title') ||
                   card.getAttribute('data-item');
        
        if (name) return name.trim();
        
        // Try direct child headings
        var headings = card.querySelectorAll(':scope > h1, :scope > h2, :scope > h3, :scope > .title, :scope > .name');
        if (headings.length > 0) {
            return headings[0].textContent.trim();
        }
        
        // Try any heading
        var anyHeading = card.querySelector('h1, h2, h3, h4, h5');
        if (anyHeading) {
            return anyHeading.textContent.trim();
        }
        
        // Fallback
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
        // Remove any existing locks first
        card.classList.remove('geo-locked-card');
        var oldSash = card.querySelector('.geo-sash');
        var oldHeart = card.querySelector('.geo-heart');
        if (oldSash) oldSash.remove();
        if (oldHeart) oldHeart.remove();
        
        if (card.querySelector('.geo-free-badge')) return; // Already done
        
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
        
        if (card.querySelector('.geo-sash')) return; // Already done
        
        card.classList.add('geo-locked-card', 'geo-processed');
        
        // Remove href to prevent navigation
        if (card.tagName === 'A') {
            card.removeAttribute('href');
            card.style.cursor = 'pointer';
        }
        
        var sash = document.createElement('div');
        sash.className = 'geo-sash';
        sash.textContent = '💜 PREMIUM 💜';
        card.appendChild(sash);
        
        var heart = document.createElement('div');
        heart.className = 'geo-heart';
        heart.textContent = '💜';
        card.appendChild(heart);
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
        
        // Add CTA if needed
        if (stats.locked > 0) {
            addUpgradeCTA(container, stats.locked, stats.free, validCards.length);
        }
    }

    // ==========================================
    // UPGRADE CTA
    // ==========================================
    
    function addUpgradeCTA(container, locked, free, total) {
        // Remove old CTA
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
        
        document.getElementById('geo-pricing-btn').addEventListener('click', function() {
            window.location.href = getBasePath() + 'pricing.html';
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
        
        // CRITICAL: Install click blocker FIRST
        installGlobalClickBlocker();
        
        injectStyles();
        loadFreeItems();
        
        // Process immediately (before any clicks possible)
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
