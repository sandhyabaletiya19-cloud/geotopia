// ============================================
// DHARAVERSE - NEW PREMIUM WRAPPER
// File: /js/p-w.js
// Safe bridge layer
// ============================================

(function(){

    if (!window.DV) {
        console.warn("DV not ready yet");
        return;
    }

    window.DVWrapper = {

        async refresh() {
            if (window.premiumCheck?.clearPremiumCache) {
                window.premiumCheck.clearPremiumCache();
            }
            console.log("✅ Premium cache cleared");
        }

    };

})();
