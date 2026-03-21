// ========================================
// PREMIUM WRAPPER - FIXED
// 5 FREE TOTAL per category (not per filter)
// ========================================

(function() {
    
    // CONFIGURATION - Total free items per MAIN category
    var FREE_LIMITS = {
        mountains: 5,
        rivers: 5,
        lakes: 5,
        oceans: 5,
        forests: 5,
        deserts: 5,
        volcanoes: 5,
        islands: 5,
        coralReefs: 5,
        encyclopedia: 5,
        upsc: 5,
        games: 3,
        atlas: 5,
        waterfalls: 5,
        glaciers: 5,
        caves: 5,
        parks: 5
    };

    var currentCategory = null;
    var freeItemsList = []; // Store which items are free (by name/id)
    var isInitialized = false;
    var observer = null;

    // ==========================================
    // INITIALIZATION
    // ==========================================
    
    window.addEventListener('DOMContentLoaded', function() {
        setTimeout(init, 1000);
    });

    window.addEventListener('load', function() {
        setTimeout(init, 500);
    });

    function init() {
        if (isInitialized) return;
        
        currentCategory = detectCategory();
        
        if (!currentCategory) {
            console.log('⚠️ No category detected');
            return;
        }

        console.log('🔐 Premium wrapper active for:', currentCategory);

        if (isUserPremium()) {
            console.log('👑 Premium user - full access');
            return;
        }

        // Load saved free items for this category (if any)
        loadFreeItems();

        // Apply locks
        applyLocks();

        // Watch for filter changes
        watchFilters();

        // Watch for DOM changes
        watchDOMChanges();

        // Intercept clicks
        interceptClicks();

        isInitialized = true;
    }

    function isUserPremium() {
        if (window.GeoAccess && window.GeoAccess.isPremium && window.GeoAccess.isPremium()) return true;
        if (localStorage.getItem('geo_premium') === 'true') return true;
        if (localStorage.getItem('userPremium') === 'true') return true;
        if (localStorage.getItem('isPremium') === 'true') return true;
        if (localStorage.getItem('premium') === 'true') return true;
        if (window.userIsPremium === true) return true;
        return false;
    }

    function detectCategory() {
        var path = window.location.pathname.toLowerCase();
        
        if (path.includes('coral-reefs') || path.includes('coralreefs') || path.includes('coral')) return 'coralReefs';
        if (path.includes('desert')) return 'deserts';
        if (path.includes('encyclopedia') || path.includes('countries') || path.includes('country')) return 'encyclopedia';
        if (path.includes('forest')) return 'forests';
        if (path.includes('game')) return 'games';
        if (path.includes('island')) return 'islands';
        if (path.includes('lake')) return 'lakes';
        if (path.includes('mountain')) return 'mountains';
        if (path.includes('ocean')) return 'oceans';
        if (path.includes('river')) return 'rivers';
        if (path.includes('upsc')) return 'upsc';
        if (path.includes('volcano')) return 'volcanoes';
        if (path.includes('atlas')) return 'atlas';
        if (path.includes('waterfall')) return 'waterfalls';
        if (path.includes('glacier')) return 'glaciers';
        if (path.includes('cave')) return 'caves';
        if (path.includes('park')) return 'parks';
        
        return null;
    }

    // ==========================================
    // FREE ITEMS MANAGEMENT
    // Store which specific items are free
    // ==========================================

    function loadFreeItems() {
        // Try to load from sessionStorage (resets when browser closes)
        var saved = sessionStorage.getItem('geo_free_' + currentCategory);
        if (saved) {
            try {
                freeItemsList = JSON.parse(saved);
                console.log('📋 Loaded free items:', freeItemsList);
            } catch(e) {
                freeItemsList = [];
            }
        }
    }

    function saveFreeItems() {
        sessionStorage.setItem('geo_free_' + currentCategory, JSON.stringify(freeItemsList));
    }

    function isItemFree(itemName) {
        if (!itemName) return false;
        var normalizedName = itemName.toLowerCase().trim();
        return freeItemsList.some(function(name) {
            return name.toLowerCase().trim() === normalizedName;
        });
    }

    function addFreeItem(itemName) {
        if (!itemName) return;
        var normalizedName = itemName.trim();
        if (!isItemFree(normalizedName)) {
            freeItemsList.push(normalizedName);
            saveFreeItems();
        }
    }

    function canAddMoreFreeItems() {
        var limit = FREE_LIMITS[currentCategory] || 5;
        return freeItemsList.length < limit;
    }

    // ==========================================
    // WATCH FOR FILTER CHANGES
    // ==========================================

    function watchFilters() {
        var filterSelectors = [
            '.filter-btn',
            '.filter-button',
            '.category-btn',
            '.category-button',
            '.tab-btn',
            '.tab-button',
            '.continent-btn',
            '.region-btn',
            '.filter-tab',
            '.sub-category',
            '.subcategory',
            '[data-filter]',
            '[data-category]',
            '[data-continent]',
            '[data-region]',
            '[data-subcategory]',
            '.filters button',
            '.filter-buttons button',
            '.categories button',
            '.tabs button',
            '.nav-tabs button',
            '.nav-tabs a',
            '.tab-list button',
            '.tab-list a',
            'button[class*="filter"]',
            'button[class*="tab"]',
            'button[class*="category"]',
            'a[class*="filter"]',
            'a[class*="tab"]'
        ];

        filterSelectors.forEach(function(selector) {
            var buttons = document.querySelectorAll(selector);
            buttons.forEach(function(btn) {
                btn.addEventListener('click', function() {
                    console.log('🔄 Filter clicked, reapplying locks...');
                    setTimeout(applyLocks, 100);
                    setTimeout(applyLocks, 300);
                    setTimeout(applyLocks, 600);
                    setTimeout(applyLocks, 1000);
                });
            });
        });

        console.log('👀 Watching filter buttons');
    }

    // ==========================================
    // WATCH FOR DOM CHANGES
    // ==========================================

    function watchDOMChanges() {
        var container = findContainer();
        
        if (!container) return;

        if (observer) observer.disconnect();

        observer = new MutationObserver(function(mutations) {
            var hasChanges = false;
            
            mutations.forEach(function(mutation) {
                if (mutation.addedNodes.length > 0 || mutation.removedNodes.length > 0) {
                    hasChanges = true;
                }
            });

            if (hasChanges) {
                console.log('🔄 DOM changed, reapplying locks...');
                setTimeout(applyLocks, 150);
            }
        });

        observer.observe(container, {
            childList: true,
            subtree: true
        });
    }

    // ==========================================
    // INTERCEPT CLICKS
    // ==========================================

    function interceptClicks() {
        document.addEventListener('click', function(e) {
            var lockedCard = e.target.closest('.geo-locked-item');
            var lockOverlay = e.target.closest('.geo-lock-overlay');
            
            if (lockedCard || lockOverlay) {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
                showUpgradeModal();
                return false;
            }
        }, true);

        console.log('👆 Click interceptor active');
    }

    // ==========================================
    // APPLY LOCKS
    // ==========================================

    function applyLocks() {
        var container = findContainer();
        
        if (!container) {
            console.log('⚠️ No container found');
            return;
        }

        // Remove old CTA
        var oldCTA = container.querySelector('.geo-upgrade-cta');
        if (oldCTA) oldCTA.remove();

        // Find all cards
        var allCards = findAllCards(container);
        
        if (allCards.length === 0) {
            console.log('⚠️ No cards found');
            return;
        }

        var freeLimit = FREE_LIMITS[currentCategory] || 5;
        var lockedCount = 0;
        var freeCount = 0;
        var totalCount = allCards.length;

        console.log('📊 Processing', totalCount, 'cards. Free limit:', freeLimit);
        console.log('📋 Currently free items:', freeItemsList.length);

        // Process each card
        allCards.forEach(function(card) {
            if (card.classList.contains('geo-upgrade-cta')) return;
            
            // Clean up card first
            cleanCard(card);

            // Get item name/identifier
            var itemName = getItemName(card);
            
            // Decide if free or locked
            var shouldBeFree = false;

            if (itemName && isItemFree(itemName)) {
                // This item was already marked as free
                shouldBeFree = true;
            } else if (canAddMoreFreeItems() && itemName) {
                // We can still add more free items
                addFreeItem(itemName);
                shouldBeFree = true;
            }

            if (shouldBeFree) {
                makeFreeCard(card);
                freeCount++;
            } else {
                makeLockedCard(card);
                lockedCount++;
            }

            card.classList.add('geo-processed');
        });

        // Add CTA if there are locked items
        if (lockedCount > 0) {
            var cta = createUpgradeCTA(lockedCount, freeCount, totalCount);
            container.appendChild(cta);
        }

        console.log('✅ Applied: ' + freeCount + ' free, ' + lockedCount + ' locked');
        console.log('📋 Free items list:', freeItemsList);
    }

    function getItemName(card) {
        // Try various ways to get item name
        var name = null;
        
        // From data attribute
        name = card.getAttribute('data-name') || 
               card.getAttribute('data-title') || 
               card.getAttribute('data-id');
        
        if (name) return name;

        // From title/heading elements
        var titleEl = card.querySelector('h1, h2, h3, h4, .title, .name, .card-title, .item-title, [class*="title"], [class*="name"]');
        if (titleEl) {
            name = titleEl.textContent.trim();
            if (name) return name;
        }

        // From any heading
        var heading = card.querySelector('h1, h2, h3, h4, h5');
        if (heading) {
            name = heading.textContent.trim();
            if (name) return name;
        }

        // Fallback: use first significant text
        var text = card.textContent.trim().substring(0, 50);
        return text || null;
    }

    function cleanCard(card) {
        card.classList.remove('geo-processed', 'geo-free-item', 'geo-locked-item');
        
        // Remove overlays and badges
        var overlay = card.querySelector('.geo-lock-overlay');
        if (overlay) overlay.remove();
        
        var badge = card.querySelector('.geo-free-badge');
        if (badge) badge.remove();

        // Reset blur
        var children = card.children;
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            if (!child.classList.contains('geo-lock-overlay')) {
                child.style.filter = '';
                child.style.pointerEvents = '';
                child.style.userSelect = '';
            }
        }

        card.style.cursor = '';
    }

    function findContainer() {
        var selectors = [
            '.cards-grid',
            '.items-grid',
            '.countries-grid',
            '.forests-grid',
            '.islands-grid',
            '.lakes-grid',
            '.mountains-grid',
            '.rivers-grid',
            '.deserts-grid',
            '.volcanoes-grid',
            '.oceans-grid',
            '.games-grid',
            '.topics-grid',
            '.chapters-grid',
            '#forestsGrid',
            '#desertsGrid',
            '#lakesGrid',
            '#islandsGrid',
            '#mountainsGrid',
            '#riversGrid',
            '#volcanoesGrid',
            '#oceansGrid',
            '#countriesGrid',
            '#gamesGrid',
            '#topicsGrid',
            '#cardsGrid',
            '#grid',
            '.grid',
            '[class*="-grid"]',
            '[class*="Grid"]',
            '[id*="Grid"]',
            '[id*="grid"]',
            '.cards-container',
            '.cards',
            '.content-grid',
            '.topics-container',
            'main .container .grid',
            'main .grid'
        ];

        for (var i = 0; i < selectors.length; i++) {
            var el = document.querySelector(selectors[i]);
            if (el && el.children.length > 0) {
                return el;
            }
        }
        return null;
    }

    function findAllCards(container) {
        var cardSelectors = [
            '.card',
            '.item',
            '.topic-card',
            '.chapter-card',
            '.country-card',
            '.forest-card',
            '.mountain-card',
            '.river-card',
            '.lake-card',
            '.island-card',
            '.desert-card',
            '.volcano-card',
            '.ocean-card',
            '.game-card',
            '[class*="-card"]',
            '[class*="Card"]'
        ];

        var cards = [];
        
        cardSelectors.forEach(function(selector) {
            var found = container.querySelectorAll(selector);
            found.forEach(function(card) {
                if (!cards.includes(card) && !card.classList.contains('geo-upgrade-cta')) {
                    cards.push(card);
                }
            });
        });

        if (cards.length === 0) {
            cards = Array.from(container.children).filter(function(el) {
                return !el.classList.contains('geo-upgrade-cta');
            });
        }

        return cards;
    }

    // ==========================================
    // FREE CARD
    // ==========================================

    function makeFreeCard(card) {
        card.classList.add('geo-free-item');
        card.style.position = 'relative';
        
        var badge = document.createElement('div');
        badge.className = 'geo-free-badge';
        badge.innerHTML = '✓ Free';
        badge.style.cssText = 
            'position: absolute;' +
            'top: 10px;' +
            'left: 10px;' +
            'background: linear-gradient(135deg, #22c55e, #16a34a);' +
            'color: white;' +
            'padding: 5px 12px;' +
            'border-radius: 20px;' +
            'font-size: 11px;' +
            'font-weight: bold;' +
            'z-index: 10;' +
            'box-shadow: 0 2px 8px rgba(34, 197, 94, 0.4);' +
            'text-transform: uppercase;' +
            'letter-spacing: 0.5px;';
        
        card.insertBefore(badge, card.firstChild);
    }

    // ==========================================
    // LOCKED CARD
    // ==========================================

    function makeLockedCard(card) {
        card.classList.add('geo-locked-item');
        card.style.position = 'relative';
        card.style.overflow = 'hidden';
        card.style.cursor = 'pointer';

        // Blur children
        var children = card.children;
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            if (!child.classList.contains('geo-lock-overlay')) {
                child.style.filter = 'blur(6px)';
                child.style.pointerEvents = 'none';
                child.style.userSelect = 'none';
            }
        }

        // Create overlay
        var overlay = document.createElement('div');
        overlay.className = 'geo-lock-overlay';
        overlay.style.cssText = 
            'position: absolute;' +
            'top: 0;' +
            'left: 0;' +
            'width: 100%;' +
            'height: 100%;' +
            'background: linear-gradient(135deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.55) 100%);' +
            'display: flex;' +
            'flex-direction: column;' +
            'align-items: center;' +
            'justify-content: center;' +
            'z-index: 100;' +
            'border-radius: inherit;' +
            'cursor: pointer;';

        overlay.innerHTML = 
            '<div style="width:70px;height:70px;background:rgba(255,255,255,0.15);border-radius:50%;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(10px);border:2px solid rgba(255,255,255,0.3);">' +
                '<span style="font-size:32px;">🔒</span>' +
            '</div>' +
            '<div style="background:linear-gradient(135deg,#FFD700,#FFA500);color:#000;padding:6px 16px;border-radius:20px;font-size:12px;font-weight:bold;margin-top:15px;text-transform:uppercase;">Premium</div>' +
            '<div style="color:white;font-size:14px;margin-top:12px;font-weight:500;">👆 Tap to Unlock</div>';

        card.appendChild(overlay);

        overlay.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            showUpgradeModal();
            return false;
        };
    }

    // ==========================================
    // UPGRADE CTA
    // ==========================================

    function createUpgradeCTA(lockedCount, freeCount, totalCount) {
        var categoryNames = {
            mountains: 'Mountains',
            rivers: 'Rivers',
            lakes: 'Lakes',
            oceans: 'Ocean Features',
            forests: 'Forests',
            deserts: 'Deserts',
            volcanoes: 'Volcanoes',
            islands: 'Islands',
            coralReefs: 'Coral Reefs',
            encyclopedia: 'Countries',
            upsc: 'UPSC Topics',
            games: 'Games',
            atlas: 'Atlas Maps',
            waterfalls: 'Waterfalls',
            glaciers: 'Glaciers',
            caves: 'Caves',
            parks: 'National Parks'
        };

        var categoryName = categoryNames[currentCategory] || 'Items';
        
        var cta = document.createElement('div');
        cta.className = 'geo-upgrade-cta geo-processed';
        
        cta.style.cssText = 
            'grid-column: 1 / -1;' +
            'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);' +
            'border-radius: 24px;' +
            'padding: 50px 30px;' +
            'text-align: center;' +
            'color: white;' +
            'margin: 30px 0;' +
            'box-shadow: 0 20px 60px rgba(102, 126, 234, 0.4);' +
            'position: relative;' +
            'overflow: hidden;';

        cta.innerHTML = 
            '<div style="position:absolute;top:-50px;right:-50px;width:150px;height:150px;background:rgba(255,255,255,0.1);border-radius:50%;"></div>' +
            '<div style="position:absolute;bottom:-30px;left:-30px;width:100px;height:100px;background:rgba(255,255,255,0.1);border-radius:50%;"></div>' +
            '<div style="position:relative;z-index:1;">' +
                '<div style="font-size:80px;margin-bottom:20px;">👑</div>' +
                '<h3 style="font-size:32px;margin:0 0 15px 0;font-weight:bold;">Unlock All ' + categoryName + '</h3>' +
                '<div style="font-size:64px;font-weight:bold;margin:20px 0;">' + lockedCount + '</div>' +
                '<p style="font-size:18px;opacity:0.95;margin-bottom:8px;">more ' + categoryName.toLowerCase() + ' waiting!</p>' +
                '<p style="font-size:14px;opacity:0.8;margin-bottom:30px;">Free preview: ' + freeCount + ' of ' + totalCount + '</p>' +
                '<button id="geo-cta-btn" style="background:white;color:#667eea;border:none;padding:18px 60px;border-radius:50px;font-size:20px;font-weight:bold;cursor:pointer;transition:all 0.3s;box-shadow:0 10px 30px rgba(0,0,0,0.2);">' +
                    '🚀 Upgrade to Premium' +
                '</button>' +
                '<div style="margin-top:30px;display:flex;justify-content:center;gap:25px;flex-wrap:wrap;">' +
                    '<span style="font-size:14px;">✅ All ' + categoryName + '</span>' +
                    '<span style="font-size:14px;">✅ All Categories</span>' +
                    '<span style="font-size:14px;">✅ Lifetime Access</span>' +
                '</div>' +
            '</div>';

        setTimeout(function() {
            var btn = cta.querySelector('#geo-cta-btn');
            if (btn) {
                btn.onmouseover = function() {
                    this.style.transform = 'scale(1.05)';
                    this.style.boxShadow = '0 15px 40px rgba(0,0,0,0.3)';
                };
                btn.onmouseout = function() {
                    this.style.transform = 'scale(1)';
                    this.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
                };
                btn.onclick = function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    showUpgradeModal();
                };
            }
        }, 100);

        return cta;
    }

    // ==========================================
    // UPGRADE MODAL
    // ==========================================

    function showUpgradeModal() {
        console.log('🔓 Opening upgrade modal...');
        
        if (window.GeoPayment && typeof window.GeoPayment.showModal === 'function') {
            window.GeoPayment.showModal();
            return;
        }
        
        if (window.GeoAccess && typeof window.GeoAccess.showUpgradePrompt === 'function') {
            window.GeoAccess.showUpgradePrompt();
            return;
        }

        if (typeof window.showPaymentModal === 'function') {
            window.showPaymentModal();
            return;
        }

        if (window.PaymentModal && typeof window.PaymentModal.show === 'function') {
            window.PaymentModal.show();
            return;
        }

        createUpgradeModal();
    }

    function createUpgradeModal() {
        var existing = document.getElementById('geo-premium-modal');
        if (existing) existing.remove();

        var modal = document.createElement('div');
        modal.id = 'geo-premium-modal';
        modal.style.cssText = 
            'position: fixed;' +
            'top: 0;' +
            'left: 0;' +
            'width: 100%;' +
            'height: 100%;' +
            'background: rgba(0,0,0,0.9);' +
            'display: flex;' +
            'align-items: center;' +
            'justify-content: center;' +
            'z-index: 9999999;' +
            'backdrop-filter: blur(10px);';

        modal.innerHTML = 
            '<div style="background:white;border-radius:24px;padding:40px;max-width:440px;width:90%;text-align:center;position:relative;box-shadow:0 25px 80px rgba(0,0,0,0.5);animation:geoSlideUp 0.3s ease;max-height:90vh;overflow-y:auto;">' +
                '<button id="geo-close-modal" style="position:absolute;top:15px;right:20px;background:#f0f0f0;border:none;width:36px;height:36px;border-radius:50%;font-size:20px;cursor:pointer;color:#666;display:flex;align-items:center;justify-content:center;">×</button>' +
                
                '<div style="font-size:72px;margin-bottom:15px;">👑</div>' +
                '<h2 style="font-size:28px;margin:0 0 10px 0;color:#333;">Go Premium</h2>' +
                '<p style="color:#666;margin-bottom:25px;font-size:15px;">Unlock ALL content across ALL categories!</p>' +
                
                '<div style="background:linear-gradient(135deg,#667eea,#764ba2);border-radius:16px;padding:25px;margin-bottom:25px;color:white;">' +
                    '<div style="font-size:14px;text-decoration:line-through;opacity:0.7;">₹999</div>' +
                    '<div style="font-size:48px;font-weight:bold;">₹299</div>' +
                    '<div style="font-size:14px;margin-top:5px;opacity:0.9;">One-time • Lifetime Access</div>' +
                '</div>' +
                
                '<ul style="text-align:left;margin:0 0 25px 0;padding:0;list-style:none;">' +
                    '<li style="padding:12px 0;color:#444;border-bottom:1px solid #f0f0f0;"><span style="color:#22c55e;margin-right:12px;font-size:20px;">✓</span> All Mountains, Rivers, Lakes</li>' +
                    '<li style="padding:12px 0;color:#444;border-bottom:1px solid #f0f0f0;"><span style="color:#22c55e;margin-right:12px;font-size:20px;">✓</span> Complete UPSC Syllabus</li>' +
                    '<li style="padding:12px 0;color:#444;border-bottom:1px solid #f0f0f0;"><span style="color:#22c55e;margin-right:12px;font-size:20px;">✓</span> All Countries Encyclopedia</li>' +
                    '<li style="padding:12px 0;color:#444;border-bottom:1px solid #f0f0f0;"><span style="color:#22c55e;margin-right:12px;font-size:20px;">✓</span> All Interactive Games</li>' +
                    '<li style="padding:12px 0;color:#444;"><span style="color:#22c55e;margin-right:12px;font-size:20px;">✓</span> All Future Updates</li>' +
                '</ul>' +
                
                '<button id="geo-buy-btn" style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:white;border:none;padding:18px 40px;border-radius:50px;font-size:18px;font-weight:bold;cursor:pointer;width:100%;transition:all 0.3s;box-shadow:0 10px 30px rgba(102,126,234,0.4);">🚀 Unlock Everything - ₹299</button>' +
                
                '<p style="margin-top:20px;font-size:12px;color:#999;">🔒 Secure Payment via Razorpay</p>' +
            '</div>' +
            '<style>@keyframes geoSlideUp{from{opacity:0;transform:translateY(30px);}to{opacity:1;transform:translateY(0);}}</style>';

        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden';

        // Close handlers
        document.getElementById('geo-close-modal').onclick = function() {
            modal.remove();
            document.body.style.overflow = '';
        };

        modal.onclick = function(e) {
            if (e.target === modal) {
                modal.remove();
                document.body.style.overflow = '';
            }
        };

        document.onkeydown = function(e) {
            if (e.key === 'Escape') {
                modal.remove();
                document.body.style.overflow = '';
            }
        };

        // Buy button
        var buyBtn = document.getElementById('geo-buy-btn');
        
        buyBtn.onmouseover = function() {
            this.style.transform = 'scale(1.02)';
            this.style.boxShadow = '0 15px 40px rgba(102,126,234,0.5)';
        };
        
        buyBtn.onmouseout = function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 10px 30px rgba(102,126,234,0.4)';
        };
        
        buyBtn.onclick = function() {
            window.location.href = '/pricing.html';
        };
    }

    // ==========================================
    // GLOBAL FUNCTIONS
    // ==========================================

    window.GeoPremiumWrapper = {
        showUpgradeModal: showUpgradeModal,
        isUserPremium: isUserPremium,
        getFreeItems: function() { return freeItemsList; },
        resetFreeItems: function() {
            freeItemsList = [];
            sessionStorage.removeItem('geo_free_' + currentCategory);
            applyLocks();
        },
        reapply: applyLocks,
        FREE_LIMITS: FREE_LIMITS
    };

    window.showGeoUpgrade = showUpgradeModal;

})();
