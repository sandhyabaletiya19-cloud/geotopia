// ============================================
// DHARAVERSE - NEW PREMIUM SYSTEM (Supabase)
// File: /js/new-premium.js
// SAFE: Does NOT touch old premium.js
// ============================================

(function () {
    'use strict';

    if (window.DV_NEW_INITIALIZED) return;
    window.DV_NEW_INITIALIZED = true;

    // =====================================================
    // PLAN ACCESS MATRIX
    // ✅ COMPLETE: matches old premium.js sections exactly
    // =====================================================

    function getPlanMatrix(plan) {
        const matrices = {

            free: {
                games:            3,
                upsc:             3,
                landscapes:       7,
                continents:       Infinity,  // always free
                encyclopedia:     2,
                encyclopedia_category: 2,
                atlas:            7,
                exploreCountries: 7,
                bharat:           2,
                spinGlobe:        Infinity,  // always free
                timeline:         Infinity,  // always free
                earthSystems:     Infinity,  // always free
                earthSimulator:   Infinity,  // always free
                dictionary:       0,         // fully locked
                adfree:           false
            },

            games: {
                games:            Infinity,
                upsc:             3,
                landscapes:       7,
                continents:       Infinity,
                encyclopedia:     2,
                encyclopedia_category: 2,
                atlas:            7,
                exploreCountries: 7,
                bharat:           2,
                spinGlobe:        Infinity,
                timeline:         Infinity,
                earthSystems:     Infinity,
                earthSimulator:   Infinity,
                dictionary:       0,
                adfree:           false
            },

            upsc: {
                games:            3,
                upsc:             Infinity,
                landscapes:       7,
                continents:       Infinity,
                encyclopedia:     2,
                encyclopedia_category: 2,
                atlas:            7,
                exploreCountries: 7,
                bharat:           2,
                spinGlobe:        Infinity,
                timeline:         Infinity,
                earthSystems:     Infinity,
                earthSimulator:   Infinity,
                dictionary:       0,
                adfree:           false
            },

            pro: {
                games:            Infinity,
                upsc:             0,         // NOT in Pro plan
                landscapes:       Infinity,
                continents:       Infinity,
                encyclopedia:     Infinity,
                encyclopedia_category: Infinity,
                atlas:            Infinity,
                exploreCountries: Infinity,
                bharat:           Infinity,
                spinGlobe:        Infinity,
                timeline:         Infinity,
                earthSystems:     Infinity,
                earthSimulator:   Infinity,
                dictionary:       Infinity,
                adfree:           true
            },

            ultimate: {
                games:            Infinity,
                upsc:             Infinity,
                landscapes:       Infinity,
                continents:       Infinity,
                encyclopedia:     Infinity,
                encyclopedia_category: Infinity,
                atlas:            Infinity,
                exploreCountries: Infinity,
                bharat:           Infinity,
                spinGlobe:        Infinity,
                timeline:         Infinity,
                earthSystems:     Infinity,
                earthSimulator:   Infinity,
                dictionary:       Infinity,
                adfree:           true
            }
        };

        return matrices[plan] || matrices.free;
    }

    // =====================================================
    // PREMIUM STATUS (from window.premiumCheck / Supabase)
    // =====================================================

    let cachedStatus = null;

    async function getStatus() {
        if (cachedStatus) return cachedStatus;

        // Wait for premiumCheck to be ready
        if (!window.premiumCheck) {
            await waitForPremiumCheck();
        }

        if (!window.premiumCheck) {
            console.warn("⚠️ premiumCheck not available, defaulting to free");
            return { plan: 'free', isPremium: false, isTrial: false };
        }

        try {
            const status = await window.premiumCheck.getPremiumStatus();

            // ✅ Trial = Ultimate access
            if (status.isTrial) {
                status.plan = 'ultimate';
                status.isPremium = true;
            }

            // ✅ Normalize plan name
            // old system used 'basic', new uses 'free'
            if (!status.plan || status.plan === 'basic') {
                status.plan = 'free';
            }

            cachedStatus = status;
            console.log("🌍 Plan loaded from Supabase:", status.plan);
            return status;

        } catch (err) {
            console.warn("⚠️ Could not get premium status:", err);
            return { plan: 'free', isPremium: false, isTrial: false };
        }
    }

    function waitForPremiumCheck() {
        return new Promise((resolve) => {
            if (window.premiumCheck) { resolve(); return; }
            let attempts = 0;
            const interval = setInterval(() => {
                attempts++;
                if (window.premiumCheck) {
                    clearInterval(interval);
                    resolve();
                }
                if (attempts > 20) { // 2 seconds max
                    clearInterval(interval);
                    resolve(); // continue anyway
                }
            }, 100);
        });
    }

    // =====================================================
    // CORE ACCESS FUNCTIONS
    // =====================================================

    async function getLimit(section) {
        const status = await getStatus();
        const plan   = status.plan || 'free';
        const matrix = getPlanMatrix(plan);
        if (matrix[section] !== undefined) return matrix[section];
        return 0;
    }

    async function canAccess(section) {
        const limit = await getLimit(section);
        return limit === Infinity;
    }

    async function canAccessIndex(section, index) {
        const limit = await getLimit(section);
        if (limit === Infinity) return true;
        if (limit === 0) return false;
        return index < limit;
    }

    // =====================================================
    // PLAN INFO (same as old premium.js)
    // =====================================================

    async function getPlanInfo() {
        const status = await getStatus();
        const plan = status.plan || 'free';

        const map = {
            free:    { name: 'Free',     icon: '🆓', color: '#6B7280' },
            basic:   { name: 'Free',     icon: '🆓', color: '#6B7280' },
            games:   { name: 'Games',    icon: '🎮', color: '#06B6D4' },
            upsc:    { name: 'UPSC',     icon: '📚', color: '#8B5CF6' },
            pro:     { name: 'Pro',      icon: '⭐', color: '#EC4899' },
            ultimate:{ name: 'Ultimate', icon: '👑', color: '#FFD700' }
        };

        return map[plan] || map.free;
    }

    async function getPlan() {
        const status = await getStatus();
        return status.plan || 'free';
    }

    async function isPremium() {
        const status = await getStatus();
        return status.isPremium || false;
    }

    async function isAdFree() {
        const status = await getStatus();
        const matrix = getPlanMatrix(status.plan || 'free');
        return matrix.adfree || false;
    }

    // =====================================================
    // INJECT CSS
    // =====================================================

    function injectStyles() {
        if (document.getElementById('dv-new-prem-css')) return;

        const style = document.createElement('style');
        style.id = 'dv-new-prem-css';
        style.textContent = `
            .dv-lock-wrap {
                position: relative;
                overflow: hidden;
            }

            .dv-lock-overlay {
                position: absolute;
                inset: 0;
                background: rgba(10,10,26,0.82);
                backdrop-filter: blur(6px);
                -webkit-backdrop-filter: blur(6px);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10;
                border-radius: inherit;
                cursor: default;
            }

            .dv-lock-inner {
                text-align: center;
                padding: 10px;
            }

            .dv-lock-inner i {
                font-size: 22px;
                color: #FFD700;
                display: block;
                margin-bottom: 6px;
            }

            .dv-lock-inner p {
                font-size: 11px;
                color: rgba(255,255,255,0.55);
                margin-bottom: 10px;
                font-family: 'Inter', sans-serif;
            }

            .dv-lock-btn {
                display: inline-block;
                padding: 7px 16px;
                background: linear-gradient(135deg,#8B5CF6,#7C3AED);
                color: #fff;
                text-decoration: none;
                border-radius: 8px;
                font-size: 12px;
                font-weight: 600;
                font-family: 'Inter', sans-serif;
                transition: 0.3s;
            }

            .dv-lock-btn:hover {
                transform: scale(1.05);
                box-shadow: 0 4px 16px rgba(139,92,246,0.4);
            }

            .dv-page-lock {
                position: fixed;
                inset: 0;
                background: rgba(10,10,26,0.96);
                backdrop-filter: blur(20px);
                -webkit-backdrop-filter: blur(20px);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 99999;
                padding: 20px;
            }

            .dv-page-lock-card {
                text-align: center;
                max-width: 440px;
                padding: 50px 36px;
                background: rgba(255,255,255,0.04);
                border: 1px solid rgba(255,255,255,0.1);
                border-radius: 24px;
                font-family: 'Inter', sans-serif;
            }

            .dv-page-lock-card .lock-icon {
                font-size: 52px;
                margin-bottom: 18px;
            }

            .dv-page-lock-card h2 {
                font-size: 26px;
                font-weight: 800;
                color: #fff;
                margin-bottom: 10px;
            }

            .dv-page-lock-card .lock-plan {
                font-size: 13px;
                color: rgba(255,255,255,0.4);
                margin-bottom: 8px;
            }

            .dv-page-lock-card p {
                font-size: 15px;
                color: rgba(255,255,255,0.6);
                line-height: 1.6;
                margin-bottom: 0;
            }

            .dv-upgrade-btn {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                padding: 15px 34px;
                background: linear-gradient(135deg,#FFD700,#FFA500);
                color: #0a0a1a;
                text-decoration: none;
                border-radius: 14px;
                font-size: 16px;
                font-weight: 700;
                margin-top: 24px;
                transition: 0.3s;
                font-family: 'Inter', sans-serif;
            }

            .dv-upgrade-btn:hover {
                transform: translateY(-3px);
                box-shadow: 0 10px 30px rgba(255,215,0,0.3);
            }

            .dv-back-link {
                display: block;
                margin-top: 16px;
                color: rgba(255,255,255,0.4);
                text-decoration: none;
                font-size: 13px;
                font-family: 'Inter', sans-serif;
                transition: 0.3s;
            }

            .dv-back-link:hover { color: rgba(255,255,255,0.8); }

            .dv-header-badge {
                display: inline-flex;
                align-items: center;
                gap: 5px;
                padding: 4px 12px;
                border-radius: 50px;
                font-size: 12px;
                font-weight: 700;
                font-family: 'Inter', sans-serif;
                margin-left: 12px;
            }

            .dv-ad-banner {
                width: 100%;
                padding: 12px 20px;
                background: rgba(255,255,255,0.04);
                border: 1px dashed rgba(255,255,255,0.12);
                border-radius: 10px;
                text-align: center;
                font-size: 13px;
                color: rgba(255,255,255,0.4);
                font-family: 'Inter', sans-serif;
                margin: 16px 0;
            }

            .dv-ad-banner a {
                color: #8B5CF6;
                text-decoration: none;
                font-weight: 600;
            }
        `;
        document.head.appendChild(style);
    }

    // =====================================================
    // LOCK ITEMS IN CONTAINER
    // Usage: DV.lockItems('#container', 'landscapes')
    // =====================================================

    async function lockItems(selector, section) {
        const container = document.querySelector(selector);
        if (!container) return;

        const limit = await getLimit(section);
        if (limit === Infinity) return;

        const items = Array.from(container.children);
        items.forEach((item, index) => {
            if (index >= limit) addItemLock(item);
        });
    }

    function addItemLock(el) {
        if (el.querySelector('.dv-lock-overlay')) return;
        el.classList.add('dv-lock-wrap');

        const overlay = document.createElement('div');
        overlay.className = 'dv-lock-overlay';
        overlay.innerHTML = `
            <div class="dv-lock-inner">
                <i class="fas fa-lock"></i>
                <p>Premium Content</p>
                <a href="/pricing.html" class="dv-lock-btn">Unlock</a>
            </div>
        `;
        overlay.addEventListener('click', e => e.stopPropagation());
        el.appendChild(overlay);
    }

    // =====================================================
    // LOCK ENTIRE SECTION
    // Usage: DV.lockSection('upsc', 'UPSC Section')
    // =====================================================

    async function lockSection(section, sectionName) {
        const limit = await getLimit(section);
        if (limit !== 0) return;

        const info = await getPlanInfo();

        const overlay = document.createElement('div');
        overlay.className = 'dv-page-lock';
        overlay.innerHTML = `
            <div class="dv-page-lock-card">
                <div class="lock-icon">🔒</div>
                <h2>${sectionName || 'Premium Content'}</h2>
                <p class="lock-plan">
                    Your plan: ${info.icon} ${info.name}
                </p>
                <p>
                    This section is not included in your 
                    current plan.<br>Upgrade to access it.
                </p>
                <a href="/pricing.html" class="dv-upgrade-btn">
                    <i class="fas fa-crown"></i> 
                    View Plans & Upgrade
                </a>
                <a href="/" class="dv-back-link">
                    ← Go back to home
                </a>
            </div>
        `;
        document.body.appendChild(overlay);
        document.body.style.overflow = 'hidden';
    }

    // =====================================================
    // SHOW AD (for non-premium users)
    // Usage: DV.showAd('#ad-slot')
    // =====================================================

    async function showAd(selector) {
        const adFree = await isAdFree();
        if (adFree) return;

        const slot = document.querySelector(selector);
        if (!slot) return;

        slot.innerHTML = `
            <div class="dv-ad-banner">
                📢 Advertisement &nbsp;·&nbsp;
                <a href="/pricing.html">
                    Go ad-free with Pro or Ultimate
                </a>
            </div>
        `;
    }

    // =====================================================
    // SHOW PLAN BADGE IN HEADER
    // =====================================================

    async function showHeaderBadge() {
        const info = await getPlanInfo();
        if (info.name === 'Free') return;

        const header = document.querySelector('.header-container');
        if (!header) return;
        if (header.querySelector('.dv-header-badge')) return;

        const badge = document.createElement('span');
        badge.className = 'dv-header-badge';
        badge.style.background = info.color + '22';
        badge.style.border     = `1px solid ${info.color}44`;
        badge.style.color      = info.color;
        badge.innerHTML        = `${info.icon} ${info.name}`;

        const logo = header.querySelector('.logo');
        if (logo) logo.insertAdjacentElement('afterend', badge);
        else header.prepend(badge);
    }

    // =====================================================
    // PUBLIC API
    // ✅ Same shape as old premium.js → drop-in replacement
    // =====================================================

    window.DV = {
        lockItems,
        lockSection,
        showAd,
        canAccess,
        canAccessIndex,
        getLimit,
        getPlan,
        isPremium,
        isAdFree,
        getPlanInfo,
        showHeaderBadge,

        // ✅ Refresh status (call after payment)
        refresh: function() {
            cachedStatus = null;
            if (window.premiumCheck?.clearPremiumCache) {
                window.premiumCheck.clearPremiumCache();
            }
            return getStatus();
        }
    };

    // =====================================================
    // INIT
    // =====================================================

    async function init() {
        injectStyles();
        const status = await getStatus();
        const info   = await getPlanInfo();
        await showHeaderBadge();
        console.log(
            '🌍 DharaVerse | ' + info.icon + 
            ' ' + info.name + ' Plan | Source:', 
            status.source || 'supabase'
        );
    }

        // ✅ Smart init with polling backup
    function tryInitPremium() {
        if (window.premiumCheck) {
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', init);
            } else {
                init();
            }
        } else {
            window.addEventListener('dvCoreReady', function() {
                if (document.readyState === 'loading') {
                    document.addEventListener('DOMContentLoaded', init);
                } else {
                    init();
                }
            });

            // Backup poll every 100ms
            var attempts = 0;
            var poll = setInterval(function() {
                attempts++;
                if (window.premiumCheck) {
                    clearInterval(poll);
                    if (!window.DV_NEW_INITIALIZED) {
                        if (document.readyState === 'loading') {
                            document.addEventListener('DOMContentLoaded', init);
                        } else {
                            init();
                        }
                    }
                }
                if (attempts > 100) {
                    clearInterval(poll);
                    console.error('❌ premiumCheck never loaded');
                }
            }, 100);
        }
    }

    tryInitPremium();

})();
