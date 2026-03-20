// js/auto-inject.js
(function() {
    console.log('🔵 auto-inject.js loaded!');
    
    // Auto-detect path based on current location
    var path = window.location.pathname;
    var basePath = 'js/';
    
    // If we're in a subfolder, adjust path
    if (path.includes('/forests/') || 
        path.includes('/deserts/') || 
        path.includes('/oceans/') ||
        path.includes('/mountains/') ||
        path.includes('/islands/') ||
        path.includes('/lakes/') ||
        path.includes('/rivers/') ||
        path.includes('/volcanoes/') ||
        path.includes('/coral-reefs/') ||
        path.includes('/encyclopedia/')) {
        basePath = '../js/';
    }
    
    var scriptsToLoad = [
        basePath + 'config/plans-config.js',
        basePath + 'core/access-control.js',
        basePath + 'core/payment-handler.js',
        basePath + 'core/geo-helpers.js'
    ];
    
    function loadScript(index) {
        if (index >= scriptsToLoad.length) {
            console.log('✅ All premium scripts loaded');
            return;
        }
        
        console.log('📥 Loading:', scriptsToLoad[index]);
        var script = document.createElement('script');
        script.src = scriptsToLoad[index];
        script.onload = function() {
            console.log('✓ Loaded:', scriptsToLoad[index]);
            loadScript(index + 1);
        };
        script.onerror = function() {
            console.error('❌ Failed:', scriptsToLoad[index]);
            loadScript(index + 1);
        };
        document.head.appendChild(script);
    }
    
    loadScript(0);
})();
