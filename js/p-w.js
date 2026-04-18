// ============================================
// DHARAVERSE - PREMIUM WRAPPER BRIDGE
// File: /js/p-w.js
// Connects new system → window.DVWrapper
// ============================================

(function () {
    'use strict';

    if (window.DVWrapper) return;

    // ✅ Wait for DV to be ready (fixes race condition)
    function waitForDV(callback) {
        if (window.DV) {
            callback();
            return;
        }

        let attempts = 0;
        const interval = setInterval(function () {
            attempts++;
            if (window.DV) {
                clearInterval(interval);
                callback();
            }
            if (attempts > 50) { // 5 seconds max
                clearInterval(interval);
                console.warn("⚠️ p-w.js: DV never loaded");
            }
        }, 100);
    }

    waitForDV(function () {

        window.DVWrapper = {

            // Refresh premium status after payment
            refresh: async function () {
                if (window.DV?.refresh) {
                    await window.DV.refresh();
                } else if (window.premiumCheck?.clearPremiumCache) {
                    window.premiumCheck.clearPremiumCache();
                }
                console.log("✅ Premium cache cleared & refreshed");
            },

            // Get current plan
            getPlan: async function () {
                if (window.DV?.getPlan) {
                    return await window.DV.getPlan();
                }
                return 'free';
            },

            // Check premium
            isPremium: async function () {
                if (window.DV?.isPremium) {
                    return await window.DV.isPremium();
                }
                return false;
            },

            // Manual plan set (admin use)
            setPlan: function (plan) {
                localStorage.setItem('dv_plan', plan);
                if (window.DV?.refresh) window.DV.refresh();
                console.log("Plan set to:", plan);
            }
        };

        console.log("✅ DVWrapper ready");
    });

})();
