// ============================================
// /js/dv-sync.js
// DharaVerse — Premium Sync Bridge
// Syncs Supabase subscription → localStorage
// So premium-wrapper.js can read it
// ============================================

(function() {
    'use strict';

    // ── WRITE PREMIUM TO LOCALSTORAGE ──
    // premium-wrapper.js reads dharaverse_premium
    function writePremiumToStorage(sub) {
        try {
            localStorage.setItem('dharaverse_premium', JSON.stringify({
                isPremium:  true,
                expiryDate: sub.expires_at,
                plan:       sub.plan,
                period:     sub.period,
                source:     'supabase'
            }));
            console.log('💜 dv-sync: Premium written to localStorage:', sub.plan);
        } catch(e) {
            console.warn('dv-sync: Write failed:', e.message);
        }
    }

    // ── CLEAR PREMIUM FROM LOCALSTORAGE ──
    function clearPremiumFromStorage() {
        try {
            localStorage.removeItem('dharaverse_premium');
            console.log('ℹ️ dv-sync: Premium cleared from localStorage');
        } catch(e) {}
    }

    // ── MAIN SYNC FUNCTION ──
    async function syncPremium() {
        try {
            if (!window.dharaverseDB) return;

            var user = await window.dharaverseDB.getCurrentUser();
            if (!user) {
                clearPremiumFromStorage();
                return;
            }

            var sub = await window.dharaverseDB.getActiveSubscription(user.id);

            if (sub && sub.status === 'active') {
                // Check not expired
                var expiry = new Date(sub.expires_at);
                if (expiry > new Date()) {
                    writePremiumToStorage(sub);
                } else {
                    clearPremiumFromStorage();
                }
            } else {
                clearPremiumFromStorage();
            }

        } catch(e) {
            console.warn('dv-sync: Sync failed (non-critical):', e.message);
        }
    }

    // ── LISTEN FOR AUTH STATE CHANGES ──
    function setupAuthListener() {
        if (!window.dharaverseDB || !window.dharaverseDB.client) return;

        window.dharaverseDB.client.auth.onAuthStateChange(
            async function(event, session) {

                if (event === 'SIGNED_IN') {
                    console.log('💜 dv-sync: Sign in detected — syncing premium');
                    await syncPremium();
                }

                if (event === 'SIGNED_OUT') {
                    console.log('ℹ️ dv-sync: Sign out detected — clearing premium');
                    clearPremiumFromStorage();
                    localStorage.removeItem('dv_premium_cache');
                }
            }
        );
    }

    // ── EXPORT PUBLIC API ──
    window.dvSync = {
        sync:  syncPremium,
        write: writePremiumToStorage,
        clear: clearPremiumFromStorage
    };

    // ── START ──
    function start() {
        if (window.dharaverseDB) {
            syncPremium();
            setupAuthListener();
            console.log('✅ dv-sync: Bridge ready');
        } else {
            window.addEventListener('dvCoreReady', function() {
                var attempts = 0;
                var poll = setInterval(function() {
                    attempts++;
                    if (window.dharaverseDB) {
                        clearInterval(poll);
                        syncPremium();
                        setupAuthListener();
                        console.log('✅ dv-sync: Bridge ready');
                    }
                    if (attempts > 50) { clearInterval(poll); }
                }, 100);
            });
        }
    }

    start();

})();
