// ========================================
// 💜 PREMIUM WRAPPER - BTS PURPLE HEART EDITION
// Complete Payment Integration Ready
// ========================================

(function() {
    
    // CONFIGURATION
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

    // 💜 BTS-Style Inspirational Messages
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
        { title: "Life Goes On 🌸", subtitle: "Keep learning, keep growing 💜" },
        { title: "Dynamite Your Knowledge! 💥", subtitle: "Explode with learning 💜" },
        { title: "Permission to Learn! 💜", subtitle: "Dance through your studies" },
        { title: "Yet To Come 🌅", subtitle: "The best knowledge is yet to come 💜" },
        { title: "Butter Smooth Learning! 🧈", subtitle: "Slide into premium content 💜" },
        { title: "Spring Day is Here! 🌸", subtitle: "Bloom with knowledge 💜" }
    ];

    var currentCategory = null;
    var freeItemsList = [];
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
            console.log('💜 No category detected');
            return;
        }

        console.log('💜 Purple Heart wrapper active for:', currentCategory);

        if (isUserPremium()) {
            console.log('👑 Premium ARMY member - full access! 보라해');
            return;
        }

        loadFreeItems();
        applyLocks();
        watchFilters();
        watchDOMChanges();
        interceptClicks();
        addPurpleStyles();

        isInitialized = true;
    }

    function addPurpleStyles() {
        var style = document.createElement('style');
        style.textContent = `
            @keyframes purpleGlow {
                0%, 100% { box-shadow: 0 0 20px rgba(124, 58, 237, 0.5); }
                50% { box-shadow: 0 0 40px rgba(124, 58, 237, 0.8); }
            }
            @keyframes heartBeat {
                0%, 100% { transform: scale(1); }
                25% { transform: scale(1.1); }
                50% { transform: scale(1); }
                75% { transform: scale(1.15); }
            }
            @keyframes floatUp {
                0% { opacity: 0; transform: translateY(20px); }
                100% { opacity: 1; transform: translateY(0); }
            }
            @keyframes sparkle {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.5; }
            }
            .purple-heart-icon {
                animation: heartBeat 1.5s ease-in-out infinite;
            }
            .geo-purple-overlay:hover .purple-heart-icon {
                animation: heartBeat 0.8s ease-in-out infinite;
            }
            .purple-star {
                animation: sparkle 1s ease-in-out infinite;
            }
        `;
        document.head.appendChild(style);
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
    // ==========================================

    function loadFreeItems() {
        var saved = sessionStorage.getItem('geo_free_' + currentCategory);
        if (saved) {
            try {
                freeItemsList = JSON.parse(saved);
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
    // WATCHERS
    // ==========================================

    function watchFilters() {
        var filterSelectors = [
            '.filter-btn', '.filter-button', '.category-btn', '.category-button',
            '.tab-btn', '.tab-button', '.continent-btn', '.region-btn',
            '.filter-tab', '.sub-category', '.subcategory', '[data-filter]',
            '[data-category]', '[data-continent]', '[data-region]', '[data-subcategory]',
            '.filters button', '.filter-buttons button', '.categories button',
            '.tabs button', '.nav-tabs button', '.nav-tabs a', '.tab-list button',
            '.tab-list a', 'button[class*="filter"]', 'button[class*="tab"]',
            'button[class*="category"]', 'a[class*="filter"]', 'a[class*="tab"]'
        ];

        filterSelectors.forEach(function(selector) {
            var buttons = document.querySelectorAll(selector);
            buttons.forEach(function(btn) {
                btn.addEventListener('click', function() {
                    setTimeout(applyLocks, 100);
                    setTimeout(applyLocks, 300);
                    setTimeout(applyLocks, 600);
                    setTimeout(applyLocks, 1000);
                });
            });
        });
    }

    function watchDOMChanges() {
        var container = findContainer();
        if (!container) return;

        if (observer) observer.disconnect();

        observer = new MutationObserver(function(mutations) {
            var hasChanges = mutations.some(function(m) {
                return m.addedNodes.length > 0 || m.removedNodes.length > 0;
            });
            if (hasChanges) {
                setTimeout(applyLocks, 150);
            }
        });

        observer.observe(container, { childList: true, subtree: true });
    }

    function interceptClicks() {
        document.addEventListener('click', function(e) {
            var lockedCard = e.target.closest('.geo-locked-item');
            var lockOverlay = e.target.closest('.geo-purple-overlay');
            
            if (lockedCard || lockOverlay) {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
                showPurpleMessage();
                return false;
            }
        }, true);
    }

    // ==========================================
    // APPLY LOCKS
    // ==========================================

    function applyLocks() {
        var container = findContainer();
        if (!container) return;

        var oldCTA = container.querySelector('.geo-upgrade-cta');
        if (oldCTA) oldCTA.remove();

        var allCards = findAllCards(container);
        if (allCards.length === 0) return;

        var freeLimit = FREE_LIMITS[currentCategory] || 5;
        var lockedCount = 0;
        var freeCount = 0;

        allCards.forEach(function(card) {
            if (card.classList.contains('geo-upgrade-cta')) return;
            
            cleanCard(card);
            var itemName = getItemName(card);
            var shouldBeFree = false;

            if (itemName && isItemFree(itemName)) {
                shouldBeFree = true;
            } else if (canAddMoreFreeItems() && itemName) {
                addFreeItem(itemName);
                shouldBeFree = true;
            }

            if (shouldBeFree) {
                makeFreeCard(card);
                freeCount++;
            } else {
                makePurpleCard(card);
                lockedCount++;
            }

            card.classList.add('geo-processed');
        });

        if (lockedCount > 0) {
            var cta = createPurpleCTA(lockedCount, freeCount, allCards.length);
            container.appendChild(cta);
        }

        console.log('💜 Applied: ' + freeCount + ' free, ' + lockedCount + ' premium');
    }

    function getItemName(card) {
        var name = card.getAttribute('data-name') || 
                   card.getAttribute('data-title') || 
                   card.getAttribute('data-id');
        if (name) return name;

        var titleEl = card.querySelector('h1, h2, h3, h4, .title, .name, .card-title, .item-title');
        if (titleEl) return titleEl.textContent.trim();

        var heading = card.querySelector('h1, h2, h3, h4, h5');
        if (heading) return heading.textContent.trim();

        return card.textContent.trim().substring(0, 50) || null;
    }

    function cleanCard(card) {
        card.classList.remove('geo-processed', 'geo-free-item', 'geo-locked-item');
        
        var overlay = card.querySelector('.geo-purple-overlay');
        if (overlay) overlay.remove();
        
        var badge = card.querySelector('.geo-free-badge');
        if (badge) badge.remove();

        var children = card.children;
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            if (!child.classList.contains('geo-purple-overlay')) {
                child.style.filter = '';
                child.style.pointerEvents = '';
                child.style.userSelect = '';
            }
        }
        card.style.cursor = '';
    }

    function findContainer() {
        var selectors = [
            '.cards-grid', '.items-grid', '.countries-grid', '.forests-grid',
            '.islands-grid', '.lakes-grid', '.mountains-grid', '.rivers-grid',
            '.deserts-grid', '.volcanoes-grid', '.oceans-grid', '.games-grid',
            '.topics-grid', '.chapters-grid', '#forestsGrid', '#desertsGrid',
            '#lakesGrid', '#islandsGrid', '#mountainsGrid', '#riversGrid',
            '#volcanoesGrid', '#oceansGrid', '#countriesGrid', '#gamesGrid',
            '#topicsGrid', '#cardsGrid', '#grid', '.grid', '[class*="-grid"]',
            '[class*="Grid"]', '[id*="Grid"]', '[id*="grid"]', '.cards-container',
            '.cards', '.content-grid', '.topics-container', 'main .container .grid', 'main .grid'
        ];

        for (var i = 0; i < selectors.length; i++) {
            var el = document.querySelector(selectors[i]);
            if (el && el.children.length > 0) return el;
        }
        return null;
    }

    function findAllCards(container) {
        var cardSelectors = [
            '.card', '.item', '.topic-card', '.chapter-card', '.country-card',
            '.forest-card', '.mountain-card', '.river-card', '.lake-card',
            '.island-card', '.desert-card', '.volcano-card', '.ocean-card',
            '.game-card', '[class*="-card"]', '[class*="Card"]'
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
    // 💜 FREE CARD
    // ==========================================

    function makeFreeCard(card) {
        card.classList.add('geo-free-item');
        card.style.position = 'relative';
        
        var badge = document.createElement('div');
        badge.className = 'geo-free-badge';
        badge.innerHTML = '✨ Free';
        badge.style.cssText = 
            'position: absolute;' +
            'top: 10px;' +
            'left: 10px;' +
            'background: linear-gradient(135deg, #a855f7, #7c3aed);' +
            'color: white;' +
            'padding: 5px 14px;' +
            'border-radius: 20px;' +
            'font-size: 11px;' +
            'font-weight: bold;' +
            'z-index: 10;' +
            'box-shadow: 0 4px 15px rgba(168, 85, 247, 0.4);' +
            'text-transform: uppercase;' +
            'letter-spacing: 0.5px;';
        
        card.insertBefore(badge, card.firstChild);
    }

    // ==========================================
    // 💜 PURPLE HEART LOCKED CARD
    // ==========================================

    function makePurpleCard(card) {
        card.classList.add('geo-locked-item');
        card.style.position = 'relative';
        card.style.overflow = 'hidden';
        card.style.cursor = 'pointer';

        var children = card.children;
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            if (!child.classList.contains('geo-purple-overlay')) {
                child.style.filter = 'blur(5px)';
                child.style.pointerEvents = 'none';
                child.style.userSelect = 'none';
            }
        }

        var overlay = document.createElement('div');
        overlay.className = 'geo-purple-overlay';
        overlay.style.cssText = 
            'position: absolute;' +
            'top: 0;' +
            'left: 0;' +
            'width: 100%;' +
            'height: 100%;' +
            'background: linear-gradient(135deg, rgba(124, 58, 237, 0.85) 0%, rgba(139, 92, 246, 0.75) 50%, rgba(168, 85, 247, 0.85) 100%);' +
            'display: flex;' +
            'flex-direction: column;' +
            'align-items: center;' +
            'justify-content: center;' +
            'z-index: 100;' +
            'border-radius: inherit;' +
            'cursor: pointer;' +
            'transition: all 0.3s ease;';

        overlay.innerHTML = 
            '<div class="purple-heart-icon" style="font-size: 56px; margin-bottom: 10px; filter: drop-shadow(0 4px 20px rgba(255,255,255,0.3));">💜</div>' +
            '<div style="color: white; font-size: 14px; font-weight: 600; text-shadow: 0 2px 10px rgba(0,0,0,0.3); letter-spacing: 0.5px;">Premium Content</div>' +
            '<div style="color: rgba(255,255,255,0.9); font-size: 12px; margin-top: 8px; display: flex; align-items: center; gap: 5px;">' +
                '<span class="purple-star">✨</span> Tap to discover <span class="purple-star">✨</span>' +
            '</div>';

        card.appendChild(overlay);

        overlay.addEventListener('mouseenter', function() {
            this.style.background = 'linear-gradient(135deg, rgba(139, 92, 246, 0.9) 0%, rgba(168, 85, 247, 0.85) 50%, rgba(192, 132, 252, 0.9) 100%)';
        });

        overlay.addEventListener('mouseleave', function() {
            this.style.background = 'linear-gradient(135deg, rgba(124, 58, 237, 0.85) 0%, rgba(139, 92, 246, 0.75) 50%, rgba(168, 85, 247, 0.85) 100%)';
        });

        overlay.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            showPurpleMessage();
            return false;
        };
    }

    // ==========================================
    // 💜 BTS-STYLE MESSAGE POPUP
    // ==========================================

    function showPurpleMessage() {
        var existing = document.getElementById('purple-message-modal');
        if (existing) existing.remove();

        var randomMessage = BTS_MESSAGES[Math.floor(Math.random() * BTS_MESSAGES.length)];

        var modal = document.createElement('div');
        modal.id = 'purple-message-modal';
        modal.style.cssText = 
            'position: fixed;' +
            'top: 0;' +
            'left: 0;' +
            'width: 100%;' +
            'height: 100%;' +
            'background: rgba(88, 28, 135, 0.95);' +
            'display: flex;' +
            'align-items: center;' +
            'justify-content: center;' +
            'z-index: 9999999;' +
            'backdrop-filter: blur(15px);' +
            'animation: purpleFadeIn 0.4s ease;';

        modal.innerHTML = `
            <style>
                @keyframes purpleFadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes messageSlideUp {
                    from { opacity: 0; transform: translateY(40px) scale(0.95); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }
                @keyframes floatingHearts {
                    0% { transform: translateY(0) rotate(0deg); opacity: 1; }
                    100% { transform: translateY(-100px) rotate(20deg); opacity: 0; }
                }
                @keyframes pulseGlow {
                    0%, 100% { box-shadow: 0 0 30px rgba(168, 85, 247, 0.5), 0 0 60px rgba(139, 92, 246, 0.3); }
                    50% { box-shadow: 0 0 50px rgba(168, 85, 247, 0.8), 0 0 100px rgba(139, 92, 246, 0.5); }
                }
                .floating-heart {
                    position: absolute;
                    font-size: 24px;
                    animation: floatingHearts 3s ease-out forwards;
                    pointer-events: none;
                }
            </style>
            <div id="floating-hearts-container" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; pointer-events: none;"></div>
            <div style="background: linear-gradient(145deg, #1e1b4b, #312e81); border-radius: 30px; padding: 50px 40px; max-width: 500px; width: 90%; text-align: center; position: relative; box-shadow: 0 25px 80px rgba(0,0,0,0.5); animation: messageSlideUp 0.5s ease, pulseGlow 2s ease-in-out infinite; border: 2px solid rgba(168, 85, 247, 0.3);">
                
                <button id="purple-close-btn" style="position: absolute; top: 20px; right: 25px; background: rgba(255,255,255,0.1); border: none; width: 40px; height: 40px; border-radius: 50%; font-size: 20px; cursor: pointer; color: rgba(255,255,255,0.7); transition: all 0.3s;">×</button>
                
                <div style="font-size: 80px; margin-bottom: 20px; filter: drop-shadow(0 10px 30px rgba(168, 85, 247, 0.5));">💜</div>
                
                <h2 style="font-size: 32px; margin: 0 0 15px 0; color: white; font-weight: bold; text-shadow: 0 2px 20px rgba(168, 85, 247, 0.5);">${randomMessage.title}</h2>
                
                <p style="color: rgba(255,255,255,0.9); font-size: 18px; margin-bottom: 35px; line-height: 1.6;">${randomMessage.subtitle}</p>
                
                <div style="background: rgba(255,255,255,0.05); border-radius: 20px; padding: 25px; margin-bottom: 30px; border: 1px solid rgba(255,255,255,0.1);">
                    <p style="color: rgba(255,255,255,0.8); font-size: 14px; margin: 0 0 10px 0;">✨ Premium members unlock everything ✨</p>
                    <p style="color: #a855f7; font-size: 28px; font-weight: bold; margin: 0;">Starting at just ₹1.1/day</p>
                    <p style="color: rgba(255,255,255,0.6); font-size: 13px; margin-top: 5px;">Less than a cup of chai! ☕</p>
                </div>
                
                <button id="purple-upgrade-btn" style="background: linear-gradient(135deg, #a855f7 0%, #7c3aed 50%, #6d28d9 100%); color: white; border: none; padding: 18px 50px; border-radius: 50px; font-size: 18px; font-weight: bold; cursor: pointer; width: 100%; transition: all 0.3s; box-shadow: 0 10px 40px rgba(168, 85, 247, 0.5); text-transform: uppercase; letter-spacing: 1px;">
                    💜 View Plans & Unlock
                </button>
                
                <p style="margin-top: 25px; font-size: 13px; color: rgba(255,255,255,0.5);">보라해 • I Purple You 💜</p>
            </div>
        `;

        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden';

        // Create floating hearts
        var heartsContainer = document.getElementById('floating-hearts-container');
        for (var i = 0; i < 15; i++) {
            setTimeout(function() {
                var heart = document.createElement('div');
                heart.className = 'floating-heart';
                heart.textContent = '💜';
                heart.style.left = Math.random() * 100 + '%';
                heart.style.top = Math.random() * 100 + '%';
                heart.style.animationDelay = Math.random() * 2 + 's';
                heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
                heartsContainer.appendChild(heart);
            }, i * 200);
        }

        // Close button
        document.getElementById('purple-close-btn').onclick = function() {
            modal.style.animation = 'purpleFadeIn 0.3s ease reverse';
            setTimeout(function() {
                modal.remove();
                document.body.style.overflow = '';
            }, 250);
        };

        document.getElementById('purple-close-btn').onmouseenter = function() {
            this.style.background = 'rgba(255,255,255,0.2)';
            this.style.color = 'white';
        };
        document.getElementById('purple-close-btn').onmouseleave = function() {
            this.style.background = 'rgba(255,255,255,0.1)';
            this.style.color = 'rgba(255,255,255,0.7)';
        };

        // Click outside
        modal.onclick = function(e) {
            if (e.target === modal) {
                modal.style.animation = 'purpleFadeIn 0.3s ease reverse';
                setTimeout(function() {
                    modal.remove();
                    document.body.style.overflow = '';
                }, 250);
            }
        };

        // Upgrade button - GO TO PRICING PAGE (ROOT LEVEL)
        document.getElementById('purple-upgrade-btn').onclick = function() {
            // Always go to root level pricing.html
            window.location.href = window.location.origin + '/pricing.html';
        };

        // Hover effect
        var btn = document.getElementById('purple-upgrade-btn');
        btn.onmouseenter = function() {
            this.style.transform = 'scale(1.02)';
            this.style.boxShadow = '0 15px 50px rgba(168, 85, 247, 0.7)';
        };
        btn.onmouseleave = function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 10px 40px rgba(168, 85, 247, 0.5)';
        };

        // ESC key
        document.onkeydown = function(e) {
            if (e.key === 'Escape' && document.getElementById('purple-message-modal')) {
                document.getElementById('purple-message-modal').remove();
                document.body.style.overflow = '';
            }
        };
    }

    // ==========================================
    // 💜 PURPLE CTA BANNER
    // ==========================================

    function createPurpleCTA(lockedCount, freeCount, totalCount) {
        var categoryNames = {
            mountains: 'Mountains', rivers: 'Rivers', lakes: 'Lakes',
            oceans: 'Ocean Features', forests: 'Forests', deserts: 'Deserts',
            volcanoes: 'Volcanoes', islands: 'Islands', coralReefs: 'Coral Reefs',
            encyclopedia: 'Countries', upsc: 'UPSC Topics', games: 'Games',
            atlas: 'Atlas Maps', waterfalls: 'Waterfalls', glaciers: 'Glaciers',
            caves: 'Caves', parks: 'National Parks'
        };

        var categoryName = categoryNames[currentCategory] || 'Items';
        
        var cta = document.createElement('div');
        cta.className = 'geo-upgrade-cta geo-processed';
        
        cta.style.cssText = 
            'grid-column: 1 / -1;' +
            'background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 50%, #5b21b6 100%);' +
            'border-radius: 30px;' +
            'padding: 60px 40px;' +
            'text-align: center;' +
            'color: white;' +
            'margin: 40px 0;' +
            'box-shadow: 0 25px 80px rgba(124, 58, 237, 0.5);' +
            'position: relative;' +
            'overflow: hidden;' +
            'border: 2px solid rgba(168, 85, 247, 0.3);';

        cta.innerHTML = `
            <div style="position: absolute; top: -80px; right: -80px; width: 200px; height: 200px; background: rgba(255,255,255,0.05); border-radius: 50%;"></div>
            <div style="position: absolute; bottom: -50px; left: -50px; width: 150px; height: 150px; background: rgba(255,255,255,0.05); border-radius: 50%;"></div>
            <div style="position: absolute; top: 20px; left: 20px; font-size: 30px; opacity: 0.3;">💜</div>
            <div style="position: absolute; bottom: 20px; right: 20px; font-size: 30px; opacity: 0.3;">💜</div>
            
            <div style="position: relative; z-index: 1;">
                <div class="purple-heart-icon" style="font-size: 90px; margin-bottom: 25px; filter: drop-shadow(0 10px 30px rgba(168, 85, 247, 0.5));">💜</div>
                
                <h3 style="font-size: 36px; margin: 0 0 15px 0; font-weight: bold; text-shadow: 0 2px 20px rgba(0,0,0,0.3);">Keep Discovering, ARMY!</h3>
                
                <div style="font-size: 72px; font-weight: bold; margin: 25px 0; text-shadow: 0 4px 30px rgba(0,0,0,0.3);">${lockedCount}</div>
                
                <p style="font-size: 20px; opacity: 0.95; margin-bottom: 10px;">more ${categoryName.toLowerCase()} waiting for you!</p>
                <p style="font-size: 15px; opacity: 0.75; margin-bottom: 35px;">✨ Currently previewing ${freeCount} of ${totalCount} ✨</p>
                
                <button id="purple-cta-btn" style="background: white; color: #7c3aed; border: none; padding: 20px 70px; border-radius: 50px; font-size: 20px; font-weight: bold; cursor: pointer; transition: all 0.3s; box-shadow: 0 15px 50px rgba(0,0,0,0.3);">
                    💜 Unlock Everything
                </button>
                
                <div style="margin-top: 35px; display: flex; justify-content: center; gap: 30px; flex-wrap: wrap;">
                    <span style="font-size: 15px; display: flex; align-items: center; gap: 8px;"><span style="color: #a855f7;">✓</span> All ${categoryName}</span>
                    <span style="font-size: 15px; display: flex; align-items: center; gap: 8px;"><span style="color: #a855f7;">✓</span> All Categories</span>
                    <span style="font-size: 15px; display: flex; align-items: center; gap: 8px;"><span style="color: #a855f7;">✓</span> 보라해 Forever</span>
                </div>
                
                <p style="margin-top: 25px; font-size: 14px; opacity: 0.6;">Starting at just ₹1.1/day ☕</p>
            </div>
        `;

        setTimeout(function() {
            var btn = cta.querySelector('#purple-cta-btn');
            if (btn) {
                btn.onmouseenter = function() {
                    this.style.transform = 'scale(1.05)';
                    this.style.boxShadow = '0 20px 60px rgba(0,0,0,0.4)';
                };
                btn.onmouseleave = function() {
                    this.style.transform = 'scale(1)';
                    this.style.boxShadow = '0 15px 50px rgba(0,0,0,0.3)';
                };
                btn.onclick = function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    showPurpleMessage();
                };
            }
        }, 100);

        return cta;
    }

    // ==========================================
    // GLOBAL FUNCTIONS
    // ==========================================

    window.GeoPremiumWrapper = {
        showMessage: showPurpleMessage,
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

    window.showPurpleMessage = showPurpleMessage;

})();
