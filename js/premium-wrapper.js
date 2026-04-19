// ============================================
// /js/premium-wrapper.js
// DharaVerse — Disabled (replaced by dv-lock.js)
// ============================================

console.log('💜 premium-wrapper.js: Disabled. dv-lock.js handles all locking.');

// Keep public API so nothing breaks
window.DharaversePremium = {
    version:      '5.0-dv',
    isPremium:    function() { return window.DVLock ? window.DVLock.isPremium() : false; },
    isLocked:     function() { return false; },
    check:        function() {},
    setPremium:   function() { return 'Use DVLock 💜'; },
    removePremium:function() { return 'Use DVLock 💜'; },
    adminUnlock:  function() { return 'Use DVLock 💜'; }
};
