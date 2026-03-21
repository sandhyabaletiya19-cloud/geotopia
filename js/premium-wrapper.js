// ========================================
// PREMIUM CONTENT WRAPPER - FIXED VERSION
// 5 FREE items, rest LOCKED with blur
// Hides original cards and applies blur
// ========================================

(function() {
    
    // CONFIGURATION - Change these numbers as needed
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

    var hasApplied = false;

    window.addEventListener('DOMContentLoaded', function() {
        setTimeout(startWrapper, 1000);
    });

    // Also run when page fully loads
    window.addEventListener('load', function() {
        setTimeout(startWrapper, 500);
    });

    function startWrapper() {
        if (hasApplied) return;
        
        var category = detectCategory();
        if (!category) {
            console.log('⚠️ No category detected');
            return;
        }

        console.log('🔐 Premium wrapper starting for:', category);

        // Check if user is premium
        if (isUserPremium()) {
            console.log('👑 Premium user - showing all content');
            return;
        }

        // Try multiple times to catch dynamic content
        applyLockToCards(category);
        setTimeout(function() { applyLockToCards(category); }, 1000);
        setTimeout(function() { applyLockToCards(category); }, 2000);
        setTimeout(function() { applyLockToCards(category); }, 3000);
    }

    function isUserPremium() {
        if (window.GeoAccess && window.GeoAccess.isPremium && window.GeoAccess.isPremium()) return true;
        if (localStorage.getItem('geo_premium') === 'true') return true;
        if (localStorage.getItem('userPremium') === 'true') return true;
        if (localStorage.getItem('isPremium') === 'true') return true;
        if (window.userIsPremium === true) return true;
        return false;
    }

    function detectCategory() {
        var path = window.location.pathname.toLowerCase();
        
        if (path.includes('coral-reefs') || path.includes('coralreefs')) return 'coralReefs';
        if (path.includes('deserts')) return 'deserts';
        if (path.includes('encyclopedia') || path.includes('countries')) return 'encyclopedia';
        if (path.includes('forests')) return 'forests';
        if (path.includes('games')) return 'games';
        if (path.includes('islands')) return 'islands';
        if (path.includes('lakes')) return 'lakes';
        if (path.includes('mountains')) return 'mountains';
        if (path.includes('oceans')) return 'oceans';
        if (path.includes('rivers')) return 'rivers';
        if (path.includes('upsc')) return 'upsc';
        if (path.includes('volcanoes')) return 'volcanoes';
        if (path.includes('atlas')) return 'atlas';
        if (path.includes('waterfalls')) return 'waterfalls';
        if (path.includes('glaciers')) return 'glaciers';
        if (path.includes('caves')) return 'caves';
        if (path.includes('parks')) return 'parks';
        
        return null;
    }

    function applyLockToCards(category) {
        var container = findContainer();
        
        if (!container) {
            console.log('⚠️ No container found');
            return;
        }

        // Find all cards in the container
        var allCards = container.querySelectorAll('.card, .item, .country-card, .forest-card, .mountain-card, .river-card, .lake-card, .island-card, .desert-card, .volcano-card, .ocean-card, .game-card, [class*="-card"], [class*="Card"]');
        
        if (allCards.length === 0) {
            // Try getting direct children
            allCards = container.children;
        }

        var freeLimit = FREE_LIMITS[category] || 5;
        var totalCards = allCards.length;
        
        if (totalCards === 0) {
            console.log('⚠️ No cards found yet...');
            return;
        }

        // Skip if already processed
        if (container.getAttribute('data-premium-applied') === 'true') {
            return;
        }

        console.log('📊 Found', totalCards, 'cards. Keeping', freeLimit, 'free');

        var lockedCount = 0;

        // Process each card
        for (var i = 0; i < allCards.length; i++) {
            var card = allCards[i];
            
            // Skip if it's not a real card (like CTA we add)
            if (card.classList.contains('geo-upgrade-cta') || 
                card.classList.contains('geo-processed')) {
                continue;
            }

            if (i < freeLimit) {
                // FREE - Keep visible, add a subtle badge
                card.classList.add('geo-processed', 'geo-free-item');
                card.style.position = 'relative';
                
                // Optional: Add "Free" badge
                if (!card.querySelector('.geo-free-badge')) {
                    var freeBadge = document.createElement('div');
                    freeBadge.className = 'geo-free-badge';
                    freeBadge.innerHTML = '✓ Free';
                    freeBadge.style.cssText = 'position:absolute;top:10px;left:10px;background:#22c55e;color:white;padding:4px 10px;border-radius:20px;font-size:11px;font-weight:bold;z-index:10;';
                    card.style.position = 'relative';
                    card.insertBefore(freeBadge, card.firstChild);
                }
            } else {
                // LOCKED - Apply blur and lock overlay
                card.classList.add('geo-processed', 'geo-locked-item');
                lockedCount++;
                applyLockOverlay(card);
            }
        }

        // Mark container as processed
        container.setAttribute('data-premium-applied', 'true');

        // Remove any existing CTA first
        var existingCTA = container.querySelector('.geo-upgrade-cta');
        if (existingCTA) existingCTA.remove();

        // Add upgrade CTA at the end
        if (lockedCount > 0) {
            var cta = createUpgradeCTA(lockedCount, category, freeLimit, totalCards);
            container.appendChild(cta);
        }

        hasApplied = true;
        console.log('✅ Applied: ' + freeLimit + ' free, ' + lockedCount + ' locked');
    }

    function applyLockOverlay(card) {
        // Skip if already has overlay
        if (card.querySelector('.geo-lock-overlay')) return;

        // Store original styles
        card.setAttribute('data-original-style', card.getAttribute('style') || '');
        
        // Apply locked styles
        card.style.position = 'relative';
        card.style.overflow = 'hidden';
        card.style.cursor = 'pointer';

        // Blur the content inside
        var children = card.children;
        for (var i = 0; i < children.length; i++) {
            if (!children[i].classList.contains('geo-lock-overlay')) {
                children[i].style.filter = 'blur(6px)';
                children[i].style.pointerEvents = 'none';
                children[i].style.userSelect = 'none';
            }
        }

        // Create lock overlay
        var overlay = document.createElement('div');
        overlay.className = 'geo-lock-overlay';
        overlay.style.cssText = 
            'position: absolute;' +
            'top: 0;' +
            'left: 0;' +
            'width: 100%;' +
            'height: 100%;' +
            'background: linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 100%);' +
            'display: flex;' +
            'flex-direction: column;' +
            'align-items: center;' +
            'justify-content: center;' +
            'z-index: 10;' +
            'border-radius: inherit;';

        overlay.innerHTML = 
            '<div style="width:70px;height:70px;background:rgba(255,255,255,0.15);border-radius:50%;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(10px);border:2px solid rgba(255,255,255,0.2);">' +
                '<span style="font-size:32px;">🔒</span>' +
            '</div>' +
            '<div style="background:linear-gradient(135deg,#FFD700,#FFA500);color:#000;padding:6px 16px;border-radius:20px;font-size:12px;font-weight:bold;margin-top:12px;text-transform:uppercase;letter-spacing:0.5px;">Premium</div>' +
            '<div style="color:white;font-size:13px;margin-top:10px;opacity:0.9;">Tap to Unlock</div>';

        card.appendChild(overlay);

        // Click handler
        card.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            showUpgradeModal();
        });
    }

    function findContainer() {
        var selectors = [
            '.cards-grid',
            '.grid',
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
            '[class*="grid"]',
            '[class*="Grid"]',
            '.cards-container',
            '.cards',
            '.content-grid',
            'main .container'
        ];

        for (var i = 0; i < selectors.length; i++) {
            var el = document.querySelector(selectors[i]);
            if (el && el.children.length > 0) {
                return el;
            }
        }
        return null;
    }

    function createUpgradeCTA(lockedCount, category, freeCount, totalCount) {
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

        var categoryName = categoryNames[category] || category;
        
        var cta = document.createElement('div');
        cta.className = 'geo-upgrade-cta';
        
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
                '<p style="font-size:18px;opacity:0.95;margin-bottom:8px;">more ' + categoryName.toLowerCase() + ' waiting for you!</p>' +
                '<p style="font-size:14px;opacity:0.8;margin-bottom:30px;">Currently viewing ' + freeCount + ' of ' + totalCount + ' total</p>' +
                '<button class="btn-upgrade-main" style="background:white;color:#667eea;border:none;padding:18px 60px;border-radius:50px;font-size:20px;font-weight:bold;cursor:pointer;transition:all 0.3s;box-shadow:0 10px 30px rgba(0,0,0,0.2);">' +
                    '🚀 Upgrade to Premium' +
                '</button>' +
                '<div style="margin-top:30px;display:flex;justify-content:center;gap:25px;flex-wrap:wrap;">' +
                    '<span style="font-size:14px;">✅ All ' + totalCount + ' ' + categoryName + '</span>' +
                    '<span style="font-size:14px;">✅ All Categories</span>' +
                    '<span style="font-size:14px;">✅ Lifetime Access</span>' +
                '</div>' +
            '</div>';

        var btn = cta.querySelector('.btn-upgrade-main');
        
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 15px 40px rgba(0,0,0,0.3)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
        });

        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            showUpgradeModal();
        });

        return cta;
    }

    function showUpgradeModal() {
        console.log('🔓 Opening upgrade modal...');
        
        // Try various payment methods
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

        // Fallback modal
        createFallbackModal();
    }

    function createFallbackModal() {
        var existing = document.getElementById('geo-premium-modal');
        if (existing) existing.remove();

        var modal = document.createElement('div');
        modal.id = 'geo-premium-modal';
        modal.style.cssText = 
            'position:fixed;top:0;left:0;width:100%;height:100%;' +
            'background:rgba(0,0,0,0.85);display:flex;align-items:center;' +
            'justify-content:center;z-index:999999;backdrop-filter:blur(8px);';

        modal.innerHTML = 
            '<div style="background:white;border-radius:24px;padding:40px;max-width:420px;width:90%;text-align:center;position:relative;box-shadow:0 25px 80px rgba(0,0,0,0.4);animation:slideUp 0.3s ease;">' +
                '<button id="close-premium-modal" style="position:absolute;top:15px;right:20px;background:none;border:none;font-size:28px;cursor:pointer;color:#999;transition:color 0.2s;">×</button>' +
                '<div style="font-size:72px;margin-bottom:15px;">👑</div>' +
                '<h2 style="font-size:28px;margin:0 0 10px 0;color:#333;">Go Premium</h2>' +
                '<p style="color:#666;margin-bottom:25px;font-size:15px;">Unlock everything across all categories!</p>' +
                
                '<div style="background:linear-gradient(135deg,#f8f9fa,#e9ecef);border-radius:16px;padding:25px;margin-bottom:25px;">' +
                    '<div style="font-size:42px;font-weight:bold;color:#667eea;">₹299</div>' +
                    '<div style="color:#888;font-size:14px;margin-top:5px;">One-time payment • Lifetime access</div>' +
                '</div>' +
                
                '<ul style="text-align:left;margin:0 0 25px 0;padding:0;list-style:none;">' +
                    '<li style="padding:10px 0;color:#444;border-bottom:1px solid #f0f0f0;"><span style="color:#22c55e;margin-right:12px;font-size:18px;">✓</span> All Mountains, Rivers, Lakes</li>' +
                    '<li style="padding:10px 0;color:#444;border-bottom:1px solid #f0f0f0;"><span style="color:#22c55e;margin-right:12px;font-size:18px;">✓</span> All Countries & UPSC Content</li>' +
                    '<li style="padding:10px 0;color:#444;border-bottom:1px solid #f0f0f0;"><span style="color:#22c55e;margin-right:12px;font-size:18px;">✓</span> All Interactive Games</li>' +
                    '<li style="padding:10px 0;color:#444;"><span style="color:#22c55e;margin-right:12px;font-size:18px;">✓</span> Future Updates Included</li>' +
                '</ul>' +
                
                '<button id="btn-go-premium" style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:white;border:none;padding:18px 40px;border-radius:50px;font-size:18px;font-weight:bold;cursor:pointer;width:100%;transition:all 0.3s;box-shadow:0 10px 30px rgba(102,126,234,0.4);">Unlock Everything Now</button>' +
                
                '<p style="margin-top:20px;font-size:12px;color:#999;">🔒 Secure Payment • Instant Access</p>' +
            '</div>' +
            '<style>@keyframes slideUp{from{opacity:0;transform:translateY(20px);}to{opacity:1;transform:translateY(0);}}</style>';

        document.body.appendChild(modal);

        // Close handlers
        document.getElementById('close-premium-modal').addEventListener('click', function() {
            modal.remove();
        });

        modal.addEventListener('click', function(e) {
            if (e.target === modal) modal.remove();
        });

        // Upgrade button
        document.getElementById('btn-go-premium').addEventListener('click', function() {
            // Try to go to pricing page
            window.location.href = '/pricing.html';
        });

        // Hover effect
        var premiumBtn = document.getElementById('btn-go-premium');
        premiumBtn.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.boxShadow = '0 15px 40px rgba(102,126,234,0.5)';
        });
        premiumBtn.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 10px 30px rgba(102,126,234,0.4)';
        });
    }

    // Expose globally
    window.GeoPremiumWrapper = {
        showUpgradeModal: showUpgradeModal,
        isUserPremium: isUserPremium,
        reapply: function() {
            hasApplied = false;
            var containers = document.querySelectorAll('[data-premium-applied]');
            containers.forEach(function(c) { c.removeAttribute('data-premium-applied'); });
            startWrapper();
        }
    };

})();
