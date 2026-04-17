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
    // SECTION RULES
    // =====================================================

    const SECTION_RULES = {

        landscapes: 7,      // mountains, lakes, etc.
        games: 3,
        upsc: 3,

        encyclopedia_category: 2,
        bharat: 2,

        dictionary: 0,      // fully locked

        free_forever: Infinity
    };

    // =====================================================
    // PLAN ACCESS MATRIX
    // =====================================================

    function getPlanMatrix(plan) {

        return {

            free: {
                landscapes: 7,
                games: 3,
                upsc: 3,
                encyclopedia_category: 2,
                bharat: 2,
                dictionary: 0,
                adfree: false
            },

            games: {
                landscapes: 7,
                games: Infinity,
                upsc: 3,
                encyclopedia_category: 2,
                bharat: 2,
                dictionary: 0,
                adfree: false
            },

            upsc: {
                landscapes: 7,
                games: 3,
                upsc: Infinity,
                encyclopedia_category: 2,
                bharat: 2,
                dictionary: 0,
                adfree: false
            },

            pro: {
                landscapes: Infinity,
                games: Infinity,
                upsc: 0, // ✅ fully locked
                encyclopedia_category: Infinity,
                bharat: Infinity,
                dictionary: Infinity,
                adfree: true
            },

            ultimate: {
                landscapes: Infinity,
                games: Infinity,
                upsc: Infinity,
                encyclopedia_category: Infinity,
                bharat: Infinity,
                dictionary: Infinity,
                adfree: true
            }
        }[plan] || null;
    }

    // =====================================================
    // PREMIUM STATUS (from premiumCheck.js)
    // =====================================================

    let cachedStatus = null;

    async function getStatus() {

        if (cachedStatus) return cachedStatus;

        if (!window.premiumCheck) {
            console.warn("premiumCheck not ready");
            return { plan: 'free', isPremium: false };
        }

        const status = await window.premiumCheck.getPremiumStatus();

        // ✅ Trial = Ultimate access
        if (status.isTrial) {
            status.plan = 'ultimate';
            status.isPremium = true;
        }

        cachedStatus = status;
        return status;
    }

    // =====================================================
    // CORE ACCESS FUNCTIONS
    // =====================================================

    async function getLimit(section) {

        const status = await getStatus();
        const plan   = status.plan || 'free';
        const matrix = getPlanMatrix(plan);

        if (!matrix) return 0;

        if (matrix[section] !== undefined)
            return matrix[section];

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
    // LOCK UI
    // =====================================================

    function injectStyles() {

        if (document.getElementById('dv-new-prem-css')) return;

        const style = document.createElement('style');
        style.id = 'dv-new-prem-css';

        style.textContent = `
            .dv-lock-wrap { position: relative; overflow: hidden; }

            .dv-lock-overlay {
                position: absolute;
                inset: 0;
                background: rgba(10,10,26,0.85);
                backdrop-filter: blur(6px);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10;
                border-radius: inherit;
            }

            .dv-lock-btn {
                padding: 8px 18px;
                background: linear-gradient(135deg,#8B5CF6,#7C3AED);
                color: #fff;
                text-decoration: none;
                border-radius: 8px;
                font-size: 12px;
                font-weight: 600;
            }
        `;

        document.head.appendChild(style);
    }

    function addItemLock(el) {

        if (el.querySelector('.dv-lock-overlay')) return;

        el.classList.add('dv-lock-wrap');

        const overlay = document.createElement('div');
        overlay.className = 'dv-lock-overlay';
        overlay.innerHTML = `
            <a href="/pricing.html" class="dv-lock-btn">Unlock Premium</a>
        `;

        overlay.addEventListener('click', e => e.stopPropagation());
        el.appendChild(overlay);
    }

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

    async function lockSection(section, sectionName) {

        const limit = await getLimit(section);
        if (limit !== 0) return;

        const overlay = document.createElement('div');
        overlay.style.position = "fixed";
        overlay.style.inset = "0";
        overlay.style.background = "rgba(10,10,26,0.96)";
        overlay.style.zIndex = "99999";
        overlay.style.display = "flex";
        overlay.style.alignItems = "center";
        overlay.style.justifyContent = "center";

        overlay.innerHTML = `
            <div style="text-align:center;color:white">
                <h2>${sectionName || 'Premium Content'}</h2>
                <p>This section requires a subscription.</p>
                <a href="/pricing.html"
                   style="padding:14px 28px;
                          background:#FFD700;
                          color:#000;
                          text-decoration:none;
                          border-radius:10px;">
                   View Plans
                </a>
            </div>
        `;

        document.body.appendChild(overlay);
        document.body.style.overflow = 'hidden';
    }

    // =====================================================
    // PUBLIC API (same as old premium.js)
    // =====================================================

    window.DV = {

        lockItems,
        lockSection,
        canAccess,
        canAccessIndex,
        getLimit,

        getPlan: async () => {
            const status = await getStatus();
            return status.plan || 'free';
        },

        isPremium: async () => {
            const status = await getStatus();
            return status.isPremium || false;
        },

        isAdFree: async () => {
            const status = await getStatus();
            const matrix = getPlanMatrix(status.plan || 'free');
            return matrix?.adfree || false;
        }
    };

    // =====================================================
    // INIT
    // =====================================================

    async function init() {
        injectStyles();
        const status = await getStatus();
        console.log("🌍 New Premium System Active | Plan:", status.plan);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
