// ============================================
// /js/core/access-control.js
// DharaVerse — Unified Access Control
// (Replaces old GeoAccess system)
// ============================================

(function() {
    'use strict';

    var PLAN_LEVELS = {
        'free':     0,
        'games':    1,
        'upsc':     2,
        'pro':      3,
        'ultimate': 4
    };

    var FREE_LIMITS = {
        'landscape': 7,
        'games':     3,
        'upsc':      3
    };

    var DVAccess = {

        _plan:      'free',
        _ready:     false,
        _callbacks: [],

        init: async function() {
            try {
                if (!window.premiumCheck) return;

                var status = await window.premiumCheck.getPremiumStatus();
                DVAccess._plan  = status.plan || 'free';
                DVAccess._ready = true;

                console.log('✅ DVAccess ready. Plan:', DVAccess._plan);

                DVAccess._callbacks.forEach(function(fn) {
                    try { fn(DVAccess._plan); } catch(e) {}
                });
                DVAccess._callbacks = [];

                DVAccess.applyToPage();

            } catch(e) {
                console.warn('DVAccess init error:', e);
            }
        },

        onReady: function(fn) {
            if (DVAccess._ready) {
                fn(DVAccess._plan);
            } else {
                DVAccess._callbacks.push(fn);
            }
        },

        getPlan: function() {
            return DVAccess._plan;
        },

        getLevel: function() {
            return PLAN_LEVELS[DVAccess._plan] || 0;
        },

        hasAccess: function(requiredPlan) {
            var userLevel = PLAN_LEVELS[DVAccess._plan] || 0;
            var reqLevel  = PLAN_LEVELS[requiredPlan]  || 0;
            return userLevel >= reqLevel;
        },

        isPremium: function() {
            return DVAccess._plan !== 'free';
        },

        getFreeLimit: function(pageType) {
            return FREE_LIMITS[pageType] || 7;
        },

        isWithinFreeLimit: function(index, pageType) {
            return index < DVAccess.getFreeLimit(pageType);
        },

        applyToPage: function() {
            var plan  = DVAccess._plan;
            var level = DVAccess.getLevel();
            var path  = window.location.pathname;

            var pageType = 'landscape';
            if (path.includes('games')) pageType = 'games';
            if (path.includes('upsc'))  pageType = 'upsc';

            if (level >= 3) {
                DVAccess.unlockAll();
            } else if (pageType === 'games' && level >= 1) {
                DVAccess.unlockAll();
            } else if (pageType === 'upsc' && level >= 2) {
                DVAccess.unlockAll();
            } else {
                DVAccess.applyFreeLimits(pageType);
            }

            if (DVAccess.isPremium()) {
                document.body.classList.add('dv-premium-user');
                document.body.classList.remove('dv-free-user');
            } else {
                document.body.classList.add('dv-free-user');
                document.body.classList.remove('dv-premium-user');
            }

            if (DVAccess.isPremium()) {
                document.querySelectorAll(
                    '.geo-upgrade-cta, .geo-locked-overlay,' +
                    '.dv-upgrade-cta, .dv-locked-overlay,' +
                    '.upgrade-prompt, .premium-lock'
                ).forEach(function(el) {
                    el.style.display = 'none';
                });

                document.querySelectorAll('.geo-locked-item').forEach(function(el) {
                    el.classList.remove('geo-locked-item');
                    el.style.filter        = '';
                    el.style.pointerEvents = '';
                });
            }

            console.log('✅ DVAccess applied. Page:', pageType, 'Plan:', plan);
        },

        unlockAll: function() {
            document.querySelectorAll(
                '.geo-locked-overlay, .dv-locked-overlay,' +
                '.premium-lock, .lock-overlay, .dv-lock-overlay'
            ).forEach(function(el) { el.remove(); });

            document.querySelectorAll(
                '.geo-locked-item, .dv-locked,' +
                '.locked-card, .premium-card'
            ).forEach(function(el) {
                el.classList.remove(
                    'geo-locked-item','dv-locked',
                    'locked-card','premium-card'
                );
                el.style.filter        = '';
                el.style.pointerEvents = '';
                el.style.display       = '';
            });

            document.querySelectorAll(
                '.geo-upgrade-cta, .dv-upgrade-cta,' +
                '.upgrade-prompt, .upgrade-banner'
            ).forEach(function(el) { el.remove(); });

            console.log('🔓 All content unlocked for plan:', DVAccess._plan);
        },

        applyFreeLimits: function(pageType) {
            var limit = DVAccess.getFreeLimit(pageType);

            var cards = document.querySelectorAll(
                '.card, .content-card, .topic-card,' +
                '.game-card, .upsc-card, .landscape-card,' +
                '.info-card, .geo-card'
            );

            cards.forEach(function(card, index) {
                if (index >= limit) {
                    if (!card.querySelector('.dv-lock-overlay')) {
                        card.style.position = 'relative';
                        card.style.overflow  = 'hidden';

                        var overlay = document.createElement('div');
                        overlay.className = 'dv-lock-overlay';
                        overlay.innerHTML =
                            '<div class="dv-lock-inner">' +
                                '<div class="dv-lock-icon">🔒</div>' +
                                '<div class="dv-lock-text">Premium</div>' +
                            '</div>';

                        overlay.addEventListener('click', function() {
                            DVAccess.showUpgradePrompt();
                        });

                        card.appendChild(overlay);
                    }
                }
            });

            console.log('🔐 Free limits applied:', limit, 'for', pageType);
        },

        showUpgradePrompt: function() {
            if (document.querySelector('.dv-upgrade-modal')) return;

            var modal = document.createElement('div');
            modal.className = 'dv-upgrade-modal';
            modal.innerHTML =
                '<div class="dv-modal-backdrop"></div>' +
                '<div class="dv-modal-box">' +
                    '<button class="dv-modal-close" ' +
                        'onclick="this.closest(\'.dv-upgrade-modal\').remove()">×</button>' +
                    '<div class="dv-modal-emoji">🌍</div>' +
                    '<h2 class="dv-modal-title">Unlock Full Access</h2>' +
                    '<p class="dv-modal-sub">' +
                        'Get unlimited access to all geography content' +
                    '</p>' +
                    '<a href="/pricing.html" class="dv-modal-btn">' +
                        '👑 View Plans' +
                    '</a>' +
                    '<p class="dv-modal-quote">' +
                        '"No matter where you are, you can always begin." — RM, BTS' +
                    '</p>' +
                '</div>';

            document.body.appendChild(modal);

            modal.querySelector('.dv-modal-backdrop')
                .addEventListener('click', function() {
                    modal.remove();
                });
        }
    };

    // ═══════════════════════════════════════
    // STYLES
    // ═══════════════════════════════════════
    var style = document.createElement('style');
    style.textContent =
        '.dv-lock-overlay{' +
            'position:absolute;inset:0;' +
            'display:flex;align-items:center;justify-content:center;' +
            'background:rgba(10,0,21,0.85);' +
            'backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);' +
            'z-index:10;cursor:pointer;border-radius:inherit;transition:background 0.3s;' +
        '}' +
        '.dv-lock-overlay:hover{background:rgba(124,58,237,0.5);}' +
        '.dv-lock-inner{text-align:center;color:white;}' +
        '.dv-lock-icon{font-size:28px;margin-bottom:6px;}' +
        '.dv-lock-text{font-size:13px;font-weight:600;color:rgba(255,255,255,0.8);}' +
        '.dv-upgrade-modal{' +
            'position:fixed;inset:0;z-index:99999;' +
            'display:flex;align-items:center;justify-content:center;' +
        '}' +
        '.dv-modal-backdrop{' +
            'position:absolute;inset:0;' +
            'background:rgba(0,0,0,0.75);backdrop-filter:blur(4px);' +
        '}' +
        '.dv-modal-box{' +
            'position:relative;' +
            'background:linear-gradient(135deg,#110022,#1a0033);' +
            'border:1px solid rgba(124,58,237,0.4);' +
            'border-radius:24px;padding:40px;' +
            'max-width:420px;width:90%;text-align:center;color:white;' +
        '}' +
        '.dv-modal-close{' +
            'position:absolute;top:16px;right:16px;' +
            'width:32px;height:32px;border:none;' +
            'background:rgba(255,255,255,0.1);color:white;' +
            'border-radius:50%;font-size:20px;cursor:pointer;' +
        '}' +
        '.dv-modal-emoji{font-size:48px;margin-bottom:16px;}' +
        '.dv-modal-title{font-size:24px;font-weight:800;margin:0 0 8px;color:white;}' +
        '.dv-modal-sub{font-size:14px;color:rgba(255,255,255,0.6);margin:0 0 24px;}' +
        '.dv-modal-btn{' +
            'display:inline-block;padding:14px 36px;' +
            'background:linear-gradient(135deg,#FFD700,#FFA500);' +
            'color:#0a0015;text-decoration:none;' +
            'border-radius:50px;font-size:15px;font-weight:700;' +
            'margin-bottom:20px;transition:transform 0.3s;' +
        '}' +
        '.dv-modal-btn:hover{transform:translateY(-2px);}' +
        '.dv-modal-quote{font-size:12px;font-style:italic;color:rgba(255,255,255,0.3);margin:0;}' +
        '.dv-premium-user .dv-lock-overlay,' +
        '.dv-premium-user .geo-locked-overlay,' +
        '.dv-premium-user .geo-upgrade-cta,' +
        '.dv-premium-user .upgrade-prompt,' +
        '.dv-premium-user .premium-lock{display:none!important;}' +
        '.dv-premium-user .geo-locked-item{filter:none!important;pointer-events:auto!important;}';

    document.head.appendChild(style);

    // ═══════════════════════════════════════
    // LEGACY SUPPORT
    // keeps old GeoAccess calls working
    // ═══════════════════════════════════════
    window.DVAccess = DVAccess;

    window.GeoAccess = {
        isPremium:         function() { return DVAccess.isPremium(); },
        getCurrentPlan:    function() { return DVAccess.getPlan(); },
        hasFullAccess:     function() { return DVAccess.isPremium(); },
        showUpgradePrompt: function() { DVAccess.showUpgradePrompt(); },
        refreshUI:         function() { DVAccess.applyToPage(); },
        isAdmin:           function() { return false; },
        emit:              function() {},
        saveSubscription:  function() {},
        getFilteredData:   function(data) {
            return { visible: data, locked: [], total: data.length };
        }
    };

    window.geoCheckPremium    = function() { return DVAccess.isPremium(); };
    window.geoGetFilteredData = function(data) { return { visible: data, locked: [] }; };
    window.geoShowUpgrade     = function() { DVAccess.showUpgradePrompt(); };
    window.checkAccess        = function() {
        return {
            allowed: DVAccess.isPremium(),
            plan:    DVAccess.getPlan()
        };
    };

    // ═══════════════════════════════════════
    // START — wait for premiumCheck
    // ═══════════════════════════════════════
    function startDVAccess() {
        if (window.premiumCheck) {
            DVAccess.init();
            return;
        }

        var fired = false;

        window.addEventListener('dvCoreReady', function() {
            var attempts = 0;
            var poll = setInterval(function() {
                attempts++;
                if (window.premiumCheck) {
                    clearInterval(poll);
                    if (!fired) { fired = true; DVAccess.init(); }
                }
                if (attempts > 50) { clearInterval(poll); }
            }, 100);
        });

        var fb = 0;
        var fallback = setInterval(function() {
            fb++;
            if (window.premiumCheck) {
                clearInterval(fallback);
                if (!fired) { fired = true; DVAccess.init(); }
            }
            if (fb > 100) { clearInterval(fallback); }
        }, 100);
    }

    startDVAccess();

    console.log('✅ DharaVerse Access Control loaded');

})();
