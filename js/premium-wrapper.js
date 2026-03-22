// ========================================
// 💜 PREMIUM WRAPPER - MISS WORLD SASH EDITION
// Elegant ribbon + Fixed duplicate issue
// ========================================

(function() {
    
    // Base path for GitHub Pages
    function getBasePath() {
        var path = window.location.pathname;
        if (path.includes('/geotopia/')) {
            return '/geotopia/';
        }
        return '/';
    }

    // CONFIGURATION
    var FREE_LIMITS = {
        mountains: 7,
        rivers: 7,
        lakes: 7,
        oceans: 7,
        forests: 7,
        deserts: 7,
        volcanoes: 7,
        islands: 7,
        coralReefs: 7,
        encyclopedia: 7,
        upsc: 7,
        games: 3,
        atlas: 7,
        waterfalls: 7,
        glaciers: 7,
        caves: 7,
        parks: 7
    };

    // BTS Messages
    var BTS_MESSAGES = [
        { title: "Keep Swimming, Keep Discovering! 🌊", subtitle: "The ocean of knowledge awaits you 💜" },
        { title: "Dream, Believe, Achieve! ✨", subtitle: "Unlock your full potential today 💜" },
        { title: "You're Doing Amazing! 💜", subtitle: "Take the next step in your journey" },
        { title: "Purple You! 보라해 💜", subtitle: "We believe in your dreams" },
        { title: "Speak Yourself! 🎤", subtitle: "Learn more, grow more, be more 💜" },
        { title: "Magic Shop Awaits! ✨", subtitle: "Unlock all the wonders inside 💜" },
        { title: "Love Yourself, Learn Yourself! 💜", subtitle: "Education is self-love" },
        { title: "Beyond The Scene! 🌟", subtitle: "Go beyond with premium access 💜" },
        { title: "Mikrokosmos ✨", subtitle: "You have galaxies inside you 💜" },
        { title: "Life Goes On 🌸", subtitle: "Keep learning, keep growing 💜" }
    ];

    var currentCategory = null;
    var freeItemsList = [];
    var isInitialized = false;
    var isProcessing = false;

    // ==========================================
    // INITIALIZATION
    // ==========================================
    
    window.addEventListener('DOMContentLoaded', function() {
        setTimeout(init, 1200);
    });

    window.addEventListener('load', function() {
        setTimeout(init, 800);
    });

    function init() {
        if (isInitialized) return;
        
        currentCategory = detectCategory();
        
        if (!currentCategory) {
            console.log('💜 No category detected');
            return;
        }

        console.log('💜 Premium wrapper active for:', currentCategory);

        if (isUserPremium()) {
            console.log('👑 Premium user - full access!');
            return;
        }

        // Add styles once
        addStyles();
        
        // Load free items
        loadFreeItems();
        
        // Apply locks once
        applyLocksOnce();
        
        // Watch for filter changes
        watchFilters();

        isInitialized = true;
    }

    function addStyles() {
        if (document.getElementById('geo-premium-styles')) return;
        
        var style = document.createElement('style');
        style.id = 'geo-premium-styles';
        style.textContent = 
            '.geo-locked-item { position: relative !important; overflow: hidden !important; }' +
            '.geo-locked-item > *:not(.geo-sash):not(.geo-heart-badge) { pointer-events: none; }' +
            '.geo-sash {' +
                'position: absolute !important;' +
                'top: 0 !important;' +
                'left: 0 !important;' +
                'width: 150% !important;' +
                'height: 32px !important;' +
                'background: linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #7c3aed 100%) !important;' +
                'transform: rotate(-35deg) translateX(-20%) translateY(15px) !important;' +
                'display: flex !important;' +
                'align-items: center !important;' +
                'justify-content: center !important;' +
                'color: white !important;' +
                'font-size: 11px !important;' +
                'font-weight: bold !important;' +
                'letter-spacing: 1px !important;' +
                'text-transform: uppercase !important;' +
                'box-shadow: 0 3px 15px rgba(124, 58, 237, 0.5) !important;' +
                'z-index: 1000 !important;' +
                'cursor: pointer !important;' +
                'border-top: 2px solid rgba(255,255,255,0.3) !important;' +
                'border-bottom: 2px solid rgba(255,255,255,0.3) !important;' +
            '}' +
            '.geo-sash:hover {' +
                'background: linear-gradient(135deg, #8b5cf6 0%, #c084fc 50%, #8b5cf6 100%) !important;' +
            '}' +
            '.geo-heart-badge {' +
                'position: absolute !important;' +
                'bottom: 10px !important;' +
                'right: 10px !important;' +
                'width: 40px !important;' +
                'height: 40px !important;' +
                'background: linear-gradient(135deg, #7c3aed, #a855f7) !important;' +
                'border-radius: 50% !important;' +
                'display: flex !important;' +
                'align-items: center !important;' +
                'justify-content: center !important;' +
                'font-size: 20px !important;' +
                'box-shadow: 0 4px 15px rgba(124, 58, 237, 0.6) !important;' +
                'z-index: 1000 !important;' +
                'cursor: pointer !important;' +
                'border: 2px solid rgba(255,255,255,0.3) !important;' +
                'transition: transform 0.3s ease !important;' +
            '}' +
            '.geo-heart-badge:hover {' +
                'transform: scale(1.2) rotate(10deg) !important;' +
            '}' +
            '.geo-free-badge {' +
                'position: absolute !important;' +
                'top: 10px !important;' +
                'left: 10px !important;' +
                'background: linear-gradient(135deg, #22c55e, #16a34a) !important;' +
                'color: white !important;' +
                'padding: 5px 12px !important;' +
                'border-radius: 20px !important;' +
                'font-size: 11px !important;' +
                'font-weight: bold !important;' +
                'z-index: 100 !important;' +
                'box-shadow: 0 3px 10px rgba(34, 197, 94, 0.4) !important;' +
            '}';
        
        document.head.appendChild(style);
    }

    function isUserPremium() {
        if (window.GeoAccess && window.GeoAccess.isPremium && window.GeoAccess.isPremium()) return true;
        if (localStorage.getItem('geo_premium') === 'true') return true;
        if (localStorage.getItem('userPremium') === 'true') return true;
        if (localStorage.getItem('isPremium') === 'true') return true;
        return false;
    }

    function detectCategory() {
        var path = window.location.pathname.toLowerCase();
        var href = window.location.href.toLowerCase();
        var checkString = path + ' ' + href;
        
        if (checkString.includes('coral-reefs') || checkString.includes('coral')) return 'coralReefs';
        if (checkString.includes('desert')) return 'deserts';
        if (checkString.includes('encyclopedia') || checkString.includes('countries')) return 'encyclopedia';
        if (checkString.includes('forest')) return 'forests';
        if (checkString.includes('game')) return 'games';
        if (checkString.includes('island')) return 'islands';
        if (checkString.includes('lake')) return 'lakes';
        if (checkString.includes('mountain')) return 'mountains';
        if (checkString.includes('ocean')) return 'oceans';
        if (checkString.includes('river')) return 'rivers';
        if (checkString.includes('upsc')) return 'upsc';
        if (checkString.includes('volcano')) return 'volcanoes';
        if (checkString.includes('atlas')) return 'atlas';
        if (checkString.includes('waterfall')) return 'waterfalls';
        if (checkString.includes('glacier')) return 'glaciers';
        if (checkString.includes('cave')) return 'caves';
        if (checkString.includes('park')) return 'parks';
        
        return null;
    }

    // ==========================================
    // FREE ITEMS MANAGEMENT
    // ==========================================

    function loadFreeItems() {
        var saved = sessionStorage.getItem('geo_free_' + currentCategory);
        if (saved) {
            try {
                freeItemsList = JSON.parse(saved);
            } catch(e) {
                freeItemsList = [];
            }
        } else {
            freeItemsList = [];
        }
    }

    function saveFreeItems() {
        sessionStorage.setItem('geo_free_' + currentCategory, JSON.stringify(freeItemsList));
    }

    function isItemFree(itemName) {
        if (!itemName) return false;
        return freeItemsList.some(function(name) {
            return name.toLowerCase().trim() === itemName.toLowerCase().trim();
        });
    }

    function addFreeItem(itemName) {
        if (!itemName) return;
        if (!isItemFree(itemName)) {
            freeItemsList.push(itemName.trim());
            saveFreeItems();
        }
    }

    function canAddMoreFreeItems() {
        return freeItemsList.length < (FREE_LIMITS[currentCategory] || 7);
    }

    // ==========================================
    // WATCH FILTERS
    // ==========================================

    function watchFilters() {
        document.addEventListener('click', function(e) {
            var target = e.target;
            
            // Check if clicked on filter/tab button
            if (target.matches('button, a, [role="tab"], [data-filter], [data-category]') ||
                target.closest('button, a, [role="tab"], [data-filter], [data-category]')) {
                
                var isFilter = target.className && (
                    target.className.includes('filter') ||
                    target.className.includes('tab') ||
                    target.className.includes('category') ||
                    target.className.includes('btn')
                );
                
                if (isFilter || target.hasAttribute('data-filter') || target.hasAttribute('data-category')) {
                    console.log('💜 Filter clicked, reapplying...');
                    setTimeout(reapplyLocks, 200);
                    setTimeout(reapplyLocks, 500);
                    setTimeout(reapplyLocks, 1000);
                }
            }
        });
    }

    function reapplyLocks() {
        if (isProcessing) return;
        
        var container = findContainer();
        if (!container) return;
        
        // Remove processed flag to allow reprocessing
        container.removeAttribute('data-geo-done');
        
        // Clear cards' processed status
        var cards = container.querySelectorAll('.geo-processed');
        cards.forEach(function(card) {
            // Only remove our stuff
            var sash = card.querySelector('.geo-sash');
            var heart = card.querySelector('.geo-heart-badge');
            var freeBadge = card.querySelector('.geo-free-badge');
            
            if (sash) sash.remove();
            if (heart) heart.remove();
            if (freeBadge) freeBadge.remove();
            
            card.classList.remove('geo-processed', 'geo-locked-item', 'geo-free-item');
            card.onclick = null;
        });
        
        // Remove old CTA
        var cta = container.querySelector('.geo-upgrade-cta');
        if (cta) cta.remove();
        
        // Reapply
        applyLocksOnce();
    }

    // ==========================================
    // APPLY LOCKS - SINGLE PASS
    // ==========================================

    function applyLocksOnce() {
        if (isProcessing) return;
        isProcessing = true;
        
        var container = findContainer();
        if (!container) {
            console.log('💜 No container found');
            isProcessing = false;
            return;
        }
        
        // Check if already done
        if (container.getAttribute('data-geo-done') === 'true') {
            console.log('💜 Already processed');
            isProcessing = false;
            return;
        }
        
        var allCards = findAllCards(container);
        if (allCards.length === 0) {
            console.log('💜 No cards found');
            isProcessing = false;
            return;
        }
        
        console.log('💜 Processing', allCards.length, 'cards');
        
        var freeLimit = FREE_LIMITS[currentCategory] || 7;
        var lockedCount = 0;
        var freeCount = 0;
        
        allCards.forEach(function(card, index) {
            // Skip if already processed
            if (card.classList.contains('geo-processed')) {
                return;
            }
            
            // Skip CTA
            if (card.classList.contains('geo-upgrade-cta')) {
                return;
            }
            
            var itemName = getItemName(card);
            var shouldBeFree = false;
            
            // Check if already in free list
            if (itemName && isItemFree(itemName)) {
                shouldBeFree = true;
            }
            // Or if we can add more free items
            else if (canAddMoreFreeItems() && itemName) {
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
        
        // Add CTA
        if (lockedCount > 0) {
            var existingCta = container.querySelector('.geo-upgrade-cta');
            if (existingCta) existingCta.remove();
            
            var cta = createCTA(lockedCount, freeCount, allCards.length);
            container.appendChild(cta);
        }
        
        // Mark done
        container.setAttribute('data-geo-done', 'true');
        
        console.log('💜 Done:', freeCount, 'free,', lockedCount, 'locked');
        isProcessing = false;
    }

    function findContainer() {
        var selectors = [
            '.cards-grid', '.items-grid', '.grid',
            '.rivers-grid', '.mountains-grid', '.lakes-grid',
            '.forests-grid', '.deserts-grid', '.volcanoes-grid',
            '.islands-grid', '.oceans-grid', '.games-grid',
            '.atlas-grid', '.reefs-grid', '.coral-grid',
            '#grid', '#cardsGrid', '#riversGrid', '#mountainsGrid',
            '[class*="-grid"]', '[class*="Grid"]',
            '.cards-container', '.cards', '.content-grid'
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
        var cards = [];
        var found = container.querySelectorAll('.card, [class*="-card"], [class*="Card"]');
        
        found.forEach(function(card) {
            if (!cards.includes(card) && 
                !card.classList.contains('geo-upgrade-cta') &&
                !card.classList.contains('geo-processed')) {
                cards.push(card);
            }
        });
        
        // Fallback
        if (cards.length === 0) {
            var children = Array.from(container.children);
            children.forEach(function(child) {
                if (child.tagName !== 'SCRIPT' && 
                    child.tagName !== 'STYLE' &&
                    !child.classList.contains('geo-upgrade-cta')) {
                    cards.push(child);
                }
            });
        }
        
        return cards;
    }

    function getItemName(card) {
        var name = card.getAttribute('data-name') || card.getAttribute('data-title');
        if (name) return name;
        
        var title = card.querySelector('h1, h2, h3, h4, h5, .title, .name, .card-title');
        if (title) return title.textContent.trim();
        
        return card.textContent.trim().substring(0, 40);
    }

    // ==========================================
    // 💜 FREE CARD
    // ==========================================

    function makeFreeCard(card) {
        card.classList.add('geo-free-item');
        card.style.position = 'relative';
        
        // Add free badge
        var badge = document.createElement('div');
        badge.className = 'geo-free-badge';
        badge.textContent = '✨ Free';
        card.appendChild(badge);
    }

    // ==========================================
    // 🎀 MISS WORLD SASH LOCKED CARD
    // ==========================================

    function makeLockedCard(card) {
        card.classList.add('geo-locked-item');
        
        // Create Miss World style sash (diagonal ribbon)
        var sash = document.createElement('div');
        sash.className = 'geo-sash';
        sash.innerHTML = '💜 PREMIUM 💜';
        card.appendChild(sash);
        
        // Create heart badge at bottom
        var heart = document.createElement('div');
        heart.className = 'geo-heart-badge';
        heart.innerHTML = '💜';
        card.appendChild(heart);
        
        // Click handlers
        var clickHandler = function(e) {
            e.preventDefault();
            e.stopPropagation();
            showPurpleMessage();
        };
        
        sash.onclick = clickHandler;
        heart.onclick = clickHandler;
        card.onclick = clickHandler;
    }

    // ==========================================
    // 💜 PURPLE MESSAGE POPUP
    // ==========================================

    function showPurpleMessage() {
        // Remove if exists
        var existing = document.getElementById('geo-purple-modal');
        if (existing) existing.remove();
        
        var msg = BTS_MESSAGES[Math.floor(Math.random() * BTS_MESSAGES.length)];
        
        var modal = document.createElement('div');
        modal.id = 'geo-purple-modal';
        modal.style.cssText = 
            'position:fixed;top:0;left:0;width:100%;height:100%;' +
            'background:rgba(88,28,135,0.95);display:flex;align-items:center;' +
            'justify-content:center;z-index:9999999;backdrop-filter:blur(10px);';
        
        modal.innerHTML = 
            '<div style="background:linear-gradient(145deg,#1e1b4b,#312e81);' +
            'border-radius:30px;padding:50px 40px;max-width:450px;width:90%;' +
            'text-align:center;box-shadow:0 30px 80px rgba(0,0,0,0.6);">' +
                '<button id="geo-close-btn" style="position:absolute;top:20px;right:25px;' +
                'background:rgba(255,255,255,0.1);border:none;width:40px;height:40px;' +
                'border-radius:50%;font-size:24px;color:white;cursor:pointer;">&times;</button>' +
                '<div style="font-size:80px;margin-bottom:20px;">💜</div>' +
                '<h2 style="font-size:28px;color:white;margin:0 0 15px 0;">' + msg.title + '</h2>' +
                '<p style="color:rgba(255,255,255,0.85);font-size:16px;margin-bottom:30px;">' + msg.subtitle + '</p>' +
                '<div style="background:rgba(255,255,255,0.05);border-radius:15px;padding:20px;margin-bottom:25px;">' +
                    '<p style="color:rgba(255,255,255,0.7);font-size:13px;margin:0 0 8px 0;">✨ Premium members unlock everything ✨</p>' +
                    '<p style="color:#a855f7;font-size:26px;font-weight:bold;margin:0;">Starting at ₹0.82/day</p>' +
                '</div>' +
                '<button id="geo-upgrade-btn" style="background:linear-gradient(135deg,#a855f7,#7c3aed);' +
                'color:white;border:none;padding:16px 45px;border-radius:50px;font-size:17px;' +
                'font-weight:bold;cursor:pointer;width:100%;">💜 View Plans & Unlock</button>' +
                '<p style="margin-top:20px;color:rgba(255,255,255,0.4);font-size:12px;">보라해 • I Purple You 💜</p>' +
            '</div>';
        
        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden';
        
        // Close button
        document.getElementById('geo-close-btn').onclick = function() {
            modal.remove();
            document.body.style.overflow = '';
        };
        
        // Click outside
        modal.onclick = function(e) {
            if (e.target === modal) {
                modal.remove();
                document.body.style.overflow = '';
            }
        };
        
        // Upgrade button
        document.getElementById('geo-upgrade-btn').onclick = function() {
            window.location.href = getBasePath() + 'pricing.html';
        };
        
        // ESC key
        document.onkeydown = function(e) {
            if (e.key === 'Escape') {
                modal.remove();
                document.body.style.overflow = '';
            }
        };
    }

    // ==========================================
    // 💜 UPGRADE CTA BANNER
    // ==========================================

    function createCTA(lockedCount, freeCount, totalCount) {
        var names = {
            mountains: 'Mountains', rivers: 'Rivers', lakes: 'Lakes',
            oceans: 'Oceans', forests: 'Forests', deserts: 'Deserts',
            volcanoes: 'Volcanoes', islands: 'Islands', coralReefs: 'Coral Reefs',
            encyclopedia: 'Countries', upsc: 'UPSC Topics', games: 'Games',
            atlas: 'Maps', waterfalls: 'Waterfalls', glaciers: 'Glaciers',
            caves: 'Caves', parks: 'Parks'
        };
        
        var catName = names[currentCategory] || 'Items';
        
        var cta = document.createElement('div');
        cta.className = 'geo-upgrade-cta geo-processed';
        cta.style.cssText = 
            'grid-column:1/-1;background:linear-gradient(135deg,#7c3aed,#6d28d9,#5b21b6);' +
            'border-radius:25px;padding:50px 30px;text-align:center;color:white;' +
            'margin:30px 0;box-shadow:0 20px 60px rgba(124,58,237,0.5);';
        
        cta.innerHTML = 
            '<div style="font-size:70px;margin-bottom:20px;">💜</div>' +
            '<h3 style="font-size:30px;margin:0 0 15px 0;">Keep Discovering!</h3>' +
            '<div style="font-size:60px;font-weight:bold;margin:20px 0;">' + lockedCount + '</div>' +
            '<p style="font-size:18px;opacity:0.9;margin-bottom:30px;">more ' + catName.toLowerCase() + ' waiting for you!</p>' +
            '<button id="geo-cta-btn" style="background:white;color:#7c3aed;border:none;' +
            'padding:18px 50px;border-radius:50px;font-size:18px;font-weight:bold;cursor:pointer;">' +
            '💜 Unlock Everything</button>' +
            '<p style="margin-top:25px;font-size:13px;opacity:0.6;">Viewing ' + freeCount + ' of ' + totalCount + ' • 보라해</p>';
        
        // Button handler
        setTimeout(function() {
            var btn = document.getElementById('geo-cta-btn');
            if (btn) {
                btn.onclick = function() {
                    showPurpleMessage();
                };
            }
        }, 100);
        
        return cta;
    }

    // Global access
    window.GeoPremiumWrapper = {
        showMessage: showPurpleMessage,
        reapply: reapplyLocks,
        isUserPremium: isUserPremium
    };

})();
