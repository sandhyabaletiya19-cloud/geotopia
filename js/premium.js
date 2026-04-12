// ============================================
// DHARAVERSE - ADMIN OVERRIDE
// If admin is logged in → unlock EVERYTHING
// ============================================

(function adminOverride() {
    const isAdmin   = localStorage.getItem('dv_admin');
    const loginTime = parseInt(localStorage.getItem('dv_admin_time') || '0');
    const SESSION   = 24 * 60 * 60 * 1000;
    const elapsed   = Date.now() - loginTime;

    // If admin session is valid
    if (isAdmin === 'true' && elapsed < SESSION) {

        // Give ultimate access silently
        localStorage.setItem('dv_plan', 'ultimate');
        localStorage.setItem('dv_premium', 'true');
        localStorage.setItem('dv_plan_expiry',
            new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString()
        );

        const ultimateFeatures = {
            games:           Infinity,
            upsc:            Infinity,
            landscapes:      Infinity,
            continents:      Infinity,
            encyclopedia:    Infinity,
            atlas:           Infinity,
            exploreCountries:Infinity,
            bharat:          Infinity,
            spinGlobe:       Infinity,
            timeline:        Infinity,
            earthSystems:    Infinity,
            earthSimulator:  Infinity,
            adfree:          true
        };

        localStorage.setItem('dv_plan_features',
            JSON.stringify(ultimateFeatures)
        );

        console.log('👑 Admin detected → All features unlocked');
    }
})();

// ============================================
// DHARAVERSE - PREMIUM ACCESS CONTROL
// js/premium.js
// Add to EVERY page: <script src="/js/premium.js"></script>
// ============================================

(function () {
    'use strict';

    // ══════════════════════════════════════════
    // PLAN ACCESS RULES
    // 0         = fully locked
    // number    = that many items free
    // Infinity  = fully unlocked
    // ══════════════════════════════════════════
    const PLAN_ACCESS = {

        basic: {
            games:           3,         // 3 games free
            upsc:            3,         // 3 topics free
            landscapes:      7,         // 7 per category
            continents:      Infinity,  // ALL free
            encyclopedia:    2,         // 2 sections per category
            atlas:           7,         // 7 maps
            exploreCountries:7,         // 7 countries
            bharat:          3,         // Himalayas, Plateaus, Northern Plains
            spinGlobe:       Infinity,  // FREE
            timeline:        Infinity,  // FREE
            earthSystems:    Infinity,  // FREE
            earthSimulator:  Infinity,  // FREE
            adfree:          false
        },

        games: {
            games:           Infinity,  // ALL games
            upsc:            3,         // still 3 free
            landscapes:      7,         // still basic
            continents:      Infinity,
            encyclopedia:    2,         // still basic
            atlas:           7,         // still basic
            exploreCountries:7,         // still basic
            bharat:          3,         // still basic
            spinGlobe:       Infinity,
            timeline:        Infinity,
            earthSystems:    Infinity,
            earthSimulator:  Infinity,
            adfree:          false
        },

        upsc: {
            games:           3,         // still 3 free
            upsc:            Infinity,  // ALL UPSC unlocked
            landscapes:      7,         // still basic
            continents:      Infinity,
            encyclopedia:    2,         // still basic
            atlas:           7,         // still basic
            exploreCountries:7,         // still basic
            bharat:          3,         // still basic
            spinGlobe:       Infinity,
            timeline:        Infinity,
            earthSystems:    Infinity,
            earthSimulator:  Infinity,
            adfree:          false
        },

        pro: {
            games:           Infinity,  // ALL
            upsc:            0,         // FULLY LOCKED (not in Pro)
            landscapes:      Infinity,  // ALL
            continents:      Infinity,  // ALL
            encyclopedia:    Infinity,  // ALL
            atlas:           Infinity,  // ALL
            exploreCountries:Infinity,  // ALL
            bharat:          Infinity,  // ALL
            spinGlobe:       Infinity,
            timeline:        Infinity,
            earthSystems:    Infinity,
            earthSimulator:  Infinity,
            adfree:          true
        },

        ultimate: {
            games:           Infinity,  // ALL
            upsc:            Infinity,  // ALL
            landscapes:      Infinity,  // ALL
            continents:      Infinity,  // ALL
            encyclopedia:    Infinity,  // ALL
            atlas:           Infinity,  // ALL
            exploreCountries:Infinity,  // ALL
            bharat:          Infinity,  // ALL
            spinGlobe:       Infinity,
            timeline:        Infinity,
            earthSystems:    Infinity,
            earthSimulator:  Infinity,
            adfree:          true
        }
    };

    // ══════════════════════════════════════════
    // CORE FUNCTIONS
    // ══════════════════════════════════════════

    function getCurrentPlan() {
        return localStorage.getItem('dv_plan') || 'basic';
    }

    function getAccess() {
        const plan = getCurrentPlan();
        return PLAN_ACCESS[plan] || PLAN_ACCESS.basic;
    }

    function getLimit(section) {
        const access = getAccess();
        if (access[section] !== undefined) return access[section];
        return 0; // unknown section = locked by default
    }

    function canAccess(section) {
        return getLimit(section) === Infinity;
    }

    function canAccessIndex(section, index) {
        const limit = getLimit(section);
        if (limit === Infinity) return true;
        if (limit === 0) return false;
        return index < limit;
    }

    // ══════════════════════════════════════════
    // INJECT CSS
    // ══════════════════════════════════════════

    function injectStyles() {
        if (document.getElementById('dv-prem-css')) return;

        const css = `
            /* ── Item Lock Overlay ── */
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

            /* ── Full Page Lock ── */
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

            /* ── Plan Badge in Header ── */
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

            /* ── Ad Banner (for non-premium) ── */
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

            .dv-ad-banner a:hover { text-decoration: underline; }
        `;

        const style = document.createElement('style');
        style.id = 'dv-prem-css';
        style.textContent = css;
        document.head.appendChild(style);
    }

    // ══════════════════════════════════════════
    // LOCK ITEMS IN A CONTAINER
    // Usage: DV.lockItems('#container', 'landscapes')
    // ══════════════════════════════════════════

    function lockItems(selector, section) {
        const container = document.querySelector(selector);
        if (!container) return;

        const limit = getLimit(section);

        // If fully unlocked, nothing to do
        if (limit === Infinity) return;

        const items = Array.from(container.children);

        items.forEach((item, index) => {
            if (index >= limit) {
                addItemLock(item);
            }
        });
    }

    function addItemLock(el) {
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

        // Prevent clicks going through
        overlay.addEventListener('click', e => e.stopPropagation());

        el.appendChild(overlay);
    }

    // ══════════════════════════════════════════
    // LOCK ENTIRE SECTION (for UPSC in Pro plan)
    // Usage: DV.lockSection('upsc', 'UPSC Section')
    // ══════════════════════════════════════════

    function lockSection(section, sectionName) {
        const limit = getLimit(section);
        if (limit !== 0) return; // Not fully locked, skip

        const plan     = getCurrentPlan();
        const planInfo = getPlanInfo();

        const overlay = document.createElement('div');
        overlay.className = 'dv-page-lock';
        overlay.innerHTML = `
            <div class="dv-page-lock-card">
                <div class="lock-icon">🔒</div>
                <h2>${sectionName || 'Premium Content'}</h2>
                <p class="lock-plan">Your plan: ${planInfo.icon} ${planInfo.name}</p>
                <p>This section is not included in your current plan.<br>Upgrade to access it.</p>
                <a href="/pricing.html" class="dv-upgrade-btn">
                    <i class="fas fa-crown"></i> View Plans & Upgrade
                </a>
                <a href="/" class="dv-back-link">← Go back to home</a>
            </div>
        `;

        document.body.appendChild(overlay);
        document.body.style.overflow = 'hidden';
    }

    // ══════════════════════════════════════════
    // AD BANNER (show for non-premium users)
    // Usage: DV.showAd('#ad-slot')
    // ══════════════════════════════════════════

    function showAd(selector) {
        if (getAccess().adfree) return; // Premium = no ads

        const slot = document.querySelector(selector);
        if (!slot) return;

        slot.innerHTML = `
            <div class="dv-ad-banner">
                📢 Advertisement &nbsp;·&nbsp;
                <a href="/pricing.html">Go ad-free with Pro or Ultimate</a>
            </div>
        `;
    }

    // ══════════════════════════════════════════
    // SHOW PLAN BADGE IN HEADER
    // ══════════════════════════════════════════

    function showHeaderBadge() {
        const plan = getCurrentPlan();
        if (plan === 'basic') return; // No badge for free users

        const info   = getPlanInfo();
        const header = document.querySelector('.header-container');
        if (!header) return;

        // Don't add twice
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

    // ══════════════════════════════════════════
    // PLAN INFO
    // ══════════════════════════════════════════

    function getPlanInfo() {
        const plan = getCurrentPlan();
        const map  = {
            basic:   { name:'Basic',   icon:'🆓', color:'#6B7280' },
            games:   { name:'Games',   icon:'🎮', color:'#06B6D4' },
            upsc:    { name:'UPSC',    icon:'📚', color:'#8B5CF6' },
            pro:     { name:'Pro',     icon:'⭐', color:'#EC4899' },
            ultimate:{ name:'Ultimate',icon:'👑', color:'#FFD700' }
        };
        return map[plan] || map.basic;
    }

    // ══════════════════════════════════════════
    // PUBLIC API
    // ══════════════════════════════════════════

    window.DV = {

        // Lock items in a list beyond the plan limit
        // DV.lockItems('#mountainsList', 'landscapes')
        lockItems,

        // Lock entire section (shows fullscreen overlay)
        // DV.lockSection('upsc', 'UPSC Preparation')
        lockSection,

        // Show ad slot (only for non-premium users)
        // DV.showAd('#ad-slot-1')
        showAd,

        // Check if user can access a section at all
        // DV.canAccess('upsc') → true/false
        canAccess,

        // Check if user can access a specific index
        // DV.canAccessIndex('landscapes', 8) → true/false
        canAccessIndex,

        // Get limit number for a section
        // DV.getLimit('games') → 3 or Infinity
        getLimit,

        // Get current plan string
        // DV.getPlan() → 'basic', 'games', 'pro', etc.
        getPlan: getCurrentPlan,

        // Check if any paid plan
        // DV.isPremium() → true/false
        isPremium: () => getCurrentPlan() !== 'basic',

        // Check if ad-free
        // DV.isAdFree() → true/false
        isAdFree: () => getAccess().adfree,

        // Get plan display info
        // DV.getPlanInfo() → { name, icon, color }
        getPlanInfo
    };

    // ══════════════════════════════════════════
    // AUTO INIT
    // ══════════════════════════════════════════

    function init() {
        injectStyles();
        showHeaderBadge();
        const info = getPlanInfo();
        console.log(`🌍 DharaVerse | ${info.icon} ${info.name} Plan`);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
