// js/auto-inject.js
(function() {
    console.log('🔵 auto-inject.js loaded!');
    
    // Detect if we're in a subfolder
    var currentPath = window.location.pathname;
    var basePath = currentPath.includes('/forests/') || 
                   currentPath.includes('/deserts/') || 
                   currentPath.includes('/oceans/') ||
                   currentPath.includes('/mountains/') ||
                   currentPath.includes('/islands/') ||
                   currentPath.includes('/lakes/') ||
                   currentPath.includes('/rivers/') ||
                   currentPath.includes('/volcanoes/') ||
                   currentPath.includes('/coral-reefs/')
                   ? '../js/' : 'js/';
    
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
