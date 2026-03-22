// ========================================
// 💜 PREMIUM WRAPPER - FINAL FIX
// Only targets DIRECT children (no nested)
// ========================================

(function() {
    
    function getBasePath() {
        var path = window.location.pathname;
        if (path.includes('/geotopia/')) {
            return '/geotopia/';
        }
        return '/';
    }

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

    var currentCategory = null;
    var freeItemsList = [];
    var hasRun = false;

    // ==========================================
    // STYLES
    // ==========================================
    
    function addStyles() {
        if (document.getElementById('geo-styles')) return;
        
        var css = document.createElement('style');
        css.id = 'geo-styles';
        css.textContent = 
            '.geo-sash {' +
                'position: absolute;' +
                'top: 0;' +
                'left: -30%;' +
                'width: 160%;' +
                'height: 28px;' +
                'background: linear-gradient(90deg, #7c3aed, #a855f7, #7c3aed);' +
                'transform: rotate(-35deg) translateY(20px);' +
                'display: flex;' +
                'align-items: center;' +
                'justify-content: center;' +
                'color: white;' +
                'font-size: 10px;' +
                'font-weight: bold;' +
                'letter-spacing: 1px;' +
                'box-shadow: 0 2px 10px rgba(124,58,237,0.5);' +
                'z-index: 999;' +
                'pointer-events: auto;' +
                'cursor: pointer;' +
            '}' +
            '.geo-heart {' +
                'position: absolute;' +
                'bottom: 8px;' +
                'right: 8px;' +
                'width: 32px;' +
                'height: 32px;' +
                'background: linear-gradient(135deg, #7c3aed, #a855f7);' +
                'border-radius: 50%;' +
                'display: flex;' +
                'align-items: center;' +
                'justify-content: center;' +
                'font-size: 16px;' +
                'box-shadow: 0 3px 12px rgba(124,58,237,0.5);' +
                'z-index: 999;' +
                'cursor: pointer;' +
            '}' +
            '.geo-free {' +
                'position: absolute;' +
                'top: 8px;' +
                'left: 8px;' +
                'background: linear-gradient(135deg, #22c55e, #16a34a);' +
                'color: white;' +
                'padding: 4px 10px;' +
                'border-radius: 15px;' +
                'font-size: 10px;' +
                'font-weight: bold;' +
                'z-index: 999;' +
            '}' +
            '.geo-locked {' +
                'position: relative;' +
                'overflow: hidden;' +
                'cursor: pointer;' +
            '}';
        
        document.head.appendChild(css);
    }

    // ==========================================
    // INIT
    // ==========================================
    
    function init() {
        if (hasRun) return;
        
        currentCategory = detectCategory();
        if (!currentCategory) {
            console.log('💜 No category');
            return;
        }
        
        console.log('💜 Category:', currentCategory);
        
        if (isUserPremium()) {
            console.log('👑 Premium user');
            return;
        }
        
        addStyles();
        loadFreeItems();
        cleanAll();
        applyLocks();
        watchFilters();
        
        hasRun = true;
    }

    function isUserPremium() {
        return localStorage.getItem('geo_premium') === 'true';
    }

    function detectCategory() {
        var url = window.location.href.toLowerCase();
        if (url.includes('river')) return 'rivers';
        if (url.includes('mountain')) return 'mountains';
        if (url.includes('lake')) return 'lakes';
        if (url.includes('forest')) return 'forests';
        if (url.includes('desert')) return 'deserts';
        if (url.includes('volcano')) return 'volcanoes';
        if (url.includes('island')) return 'islands';
        if (url.includes('ocean')) return 'oceans';
        if (url.includes('coral')) return 'coralReefs';
        if (url.includes('game')) return 'games';
        if (url.includes('atlas')) return 'atlas';
        if (url.includes('upsc')) return 'upsc';
        if (url.includes('encyclopedia') || url.includes('countr')) return 'encyclopedia';
        return null;
    }

    // ==========================================
    // FREE ITEMS
    // ==========================================

    function loadFreeItems() {
        var saved = sessionStorage.getItem('geo_free_' + currentCategory);
        freeItemsList = saved ? JSON.parse(saved) : [];
    }

    function saveFreeItems() {
        sessionStorage.setItem('geo_free_' + currentCategory, JSON.stringify(freeItemsList));
    }

    function isItemFree(name) {
        if (!name) return false;
        return freeItemsList.indexOf(name.toLowerCase().trim()) !== -1;
    }

    function addFreeItem(name) {
        if (!name) return;
        var n = name.toLowerCase().trim();
        if (freeItemsList.indexOf(n) === -1) {
            freeItemsList.push(n);
            saveFreeItems();
        }
    }

    function canAddFree() {
        return freeItemsList.length < (FREE_LIMITS[currentCategory] || 7);
    }

    // ==========================================
    // CLEAN ALL
    // ==========================================

    function cleanAll() {
        document.querySelectorAll('.geo-sash, .geo-heart, .geo-free, .geo-upgrade-cta').forEach(function(el) {
            el.remove();
        });
        
        document.querySelectorAll('.geo-locked, .geo-done').forEach(function(el) {
            el.classList.remove('geo-locked', 'geo-done');
            el.onclick = null;
        });
    }

    // ==========================================
    // APPLY LOCKS - ONLY DIRECT CHILDREN
    // ==========================================

    function applyLocks() {
        var container = findContainer();
        if (!container) {
            console.log('💜 No container');
            return;
        }
        
        // ⭐ KEY FIX: Only get DIRECT children, not nested cards
        var directChildren = container.children;
        var cards = [];
        
        for (var i = 0; i < directChildren.length; i++) {
            var child = directChildren[i];
            
            // Skip script, style, and our CTA
            if (child.tagName === 'SCRIPT' || 
                child.tagName === 'STYLE' ||
                child.classList.contains('geo-upgrade-cta') ||
                child.classList.contains('geo-done')) {
                continue;
            }
            
            cards.push(child);
        }
        
        console.log('💜 Found', cards.length, 'DIRECT children (ignoring nested)');
        
        if (cards.length === 0) return;
        
        var freeCount = 0;
        var lockedCount = 0;
        
        for (var j = 0; j < cards.length; j++) {
            var card = cards[j];
            
            // Skip if already done
            if (card.classList.contains('geo-done')) continue;
            
            var name = getCardName(card);
            var isFree = false;
            
            if (isItemFree(name)) {
                isFree = true;
            } else if (canAddFree() && name) {
                addFreeItem(name);
                isFree = true;
            }
            
            if (isFree) {
                makeCardFree(card);
                freeCount++;
            } else {
                makeCardLocked(card);
                lockedCount++;
            }
            
            card.classList.add('geo-done');
        }
        
        // Add CTA
        if (lockedCount > 0) {
            var cta = createCTA(lockedCount, freeCount, cards.length);
            container.appendChild(cta);
        }
        
        console.log('💜 Result:', freeCount, 'free,', lockedCount, 'locked');
    }

    function findContainer() {
        var selectors = [
            '.rivers-grid', '.mountains-grid', '.lakes-grid',
            '.forests-grid', '.deserts-grid', '.volcanoes-grid',
            '.islands-grid', '.oceans-grid', '.games-grid',
            '.atlas-grid', '.reefs-grid', '.coral-grid',
            '.cards-grid', '.items-grid', '.grid',
            '#grid', '#cardsGrid',
            '[class*="-grid"]'
        ];
        
        for (var i = 0; i < selectors.length; i++) {
            var el = document.querySelector(selectors[i]);
            if (el && el.children.length > 2) {
                console.log('💜 Container:', el.className);
                return el;
            }
        }
        return null;
    }

    function getCardName(card) {
        var name = card.getAttribute('data-name') || card.getAttribute('data-title');
        if (name) return name;
        
        // Get FIRST h2/h3 only (not from nested cards)
        var headings = card.querySelectorAll(':scope > h1, :scope > h2, :scope > h3, :scope > h4, :scope > .title, :scope > .name');
        if (headings.length > 0) {
            return headings[0].textContent.trim();
        }
        
        // Try any heading but only first one
        var anyH = card.querySelector('h1, h2, h3, h4, h5');
        if (anyH) return anyH.textContent.trim();
        
        return card.textContent.trim().substring(0, 30);
    }

    // ==========================================
    // MAKE CARDS
    // ==========================================

    function makeCardFree(card) {
        card.style.position = 'relative';
        card.style.overflow = 'hidden';
        
        var badge = document.createElement('div');
        badge.className = 'geo-free';
        badge.textContent = '✨ Free';
        card.appendChild(badge);
    }

    function makeCardLocked(card) {
        card.style.position = 'relative';
        card.style.overflow = 'hidden';
        card.classList.add('geo-locked');
        
        // ONE sash only
        var sash = document.createElement('div');
        sash.className = 'geo-sash';
        sash.textContent = '💜 PREMIUM 💜';
        card.appendChild(sash);
        
        // ONE heart only
        var heart = document.createElement('div');
        heart.className = 'geo-heart';
        heart.textContent = '💜';
        card.appendChild(heart);
        
        // Click handler on the CARD
        card.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            showMessage();
        };
    }

    // ==========================================
    // WATCH FILTERS
    // ==========================================

    function watchFilters() {
        document.addEventListener('click', function(e) {
            var t = e.target;
            var isFilter = false;
            
            // Check if it's a filter button
            if (t.tagName === 'BUTTON' || t.tagName === 'A') {
                if (t.className && (
                    t.className.includes('filter') || 
                    t.className.includes('tab') ||
                    t.className.includes('category'))) {
                    isFilter = true;
                }
            }
            
            if (t.hasAttribute('data-filter') || t.hasAttribute('data-category')) {
                isFilter = true;
            }
            
            if (isFilter) {
                console.log('💜 Filter clicked');
                setTimeout(function() {
                    hasRun = false;
                    cleanAll();
                    loadFreeItems();
                    applyLocks();
                    hasRun = true;
                }, 500);
            }
        });
    }

    // ==========================================
    // MESSAGE POPUP
    // ==========================================

    function showMessage() {
        var old = document.getElementById('geo-modal');
        if (old) old.remove();
        
        var msg = BTS_MESSAGES[Math.floor(Math.random() * BTS_MESSAGES.length)];
        
        var modal = document.createElement('div');
        modal.id = 'geo-modal';
        modal.style.cssText = 
            'position:fixed;top:0;left:0;width:100%;height:100%;' +
            'background:rgba(88,28,135,0.95);z-index:9999999;' +
            'display:flex;align-items:center;justify-content:center;';
        
        modal.innerHTML = 
            '<div style="background:linear-gradient(145deg,#1e1b4b,#312e81);' +
            'border-radius:25px;padding:40px;max-width:400px;width:90%;text-align:center;">' +
                '<div style="font-size:60px;margin-bottom:15px;">💜</div>' +
                '<h2 style="color:white;font-size:24px;margin:0 0 10px;">' + msg.title + '</h2>' +
                '<p style="color:rgba(255,255,255,0.8);font-size:14px;margin-bottom:25px;">' + msg.subtitle + '</p>' +
                '<button id="geo-go-btn" style="background:linear-gradient(135deg,#a855f7,#7c3aed);' +
                'color:white;border:none;padding:14px 35px;border-radius:30px;' +
                'font-size:16px;font-weight:bold;cursor:pointer;width:100%;">💜 View Plans</button>' +
                '<p style="color:rgba(255,255,255,0.4);font-size:11px;margin-top:15px;">보라해 💜</p>' +
            '</div>';
        
        document.body.appendChild(modal);
        
        modal.onclick = function(e) {
            if (e.target === modal) modal.remove();
        };
        
        document.getElementById('geo-go-btn').onclick = function() {
            window.location.href = getBasePath() + 'pricing.html';
        };
    }

    // ==========================================
    // CTA BANNER
    // ==========================================

    function createCTA(locked, free, total) {
        var names = {
            rivers: 'Rivers', mountains: 'Mountains', lakes: 'Lakes',
            forests: 'Forests', deserts: 'Deserts', oceans: 'Oceans',
            volcanoes: 'Volcanoes', islands: 'Islands', coralReefs: 'Coral Reefs',
            games: 'Games', atlas: 'Maps', upsc: 'Topics', encyclopedia: 'Countries'
        };
        
        var cta = document.createElement('div');
        cta.className = 'geo-upgrade-cta geo-done';
        cta.style.cssText = 
            'grid-column:1/-1;background:linear-gradient(135deg,#7c3aed,#5b21b6);' +
            'border-radius:20px;padding:40px 25px;text-align:center;color:white;margin:25px 0;';
        
        cta.innerHTML = 
            '<div style="font-size:50px;margin-bottom:15px;">💜</div>' +
            '<h3 style="font-size:24px;margin:0 0 10px;">Keep Discovering!</h3>' +
            '<div style="font-size:50px;font-weight:bold;margin:15px 0;">' + locked + '</div>' +
            '<p style="font-size:16px;margin-bottom:20px;">more ' + (names[currentCategory] || 'items') + ' waiting!</p>' +
            '<button onclick="window.GeoPremiumWrapper.showMessage()" style="background:white;color:#7c3aed;' +
            'border:none;padding:14px 40px;border-radius:30px;font-size:16px;font-weight:bold;cursor:pointer;">' +
            '💜 Unlock All</button>' +
            '<p style="font-size:12px;opacity:0.6;margin-top:15px;">' + free + ' of ' + total + ' free</p>';
        
        return cta;
    }

    // ==========================================
    // START
    // ==========================================

    window.addEventListener('DOMContentLoaded', function() {
        setTimeout(init, 1000);
    });
    
    window.addEventListener('load', function() {
        setTimeout(init, 600);
    });

    window.GeoPremiumWrapper = {
        showMessage: showMessage,
        reapply: function() {
            hasRun = false;
            cleanAll();
            loadFreeItems();
            applyLocks();
            hasRun = true;
        }
    };

})();
