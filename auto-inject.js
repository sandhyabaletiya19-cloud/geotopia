// auto-inject.js - Smart Auto-Loader
(function() {
    // Auto-detect base path
    var scripts = document.getElementsByTagName('script');
    var thisScript = scripts[scripts.length - 1];
    var basePath = thisScript.src.substring(0, thisScript.src.lastIndexOf('/') + 1);
    
    // If auto-inject.js is in root, adjust path
    if (basePath.indexOf('/js/') === -1) {
        basePath = 'js/';
    }
    
    // Scripts to load in order
    var scriptsToLoad = [
        basePath + 'config/plans-config.js',
        basePath + 'core/access-control.js',
        basePath + 'core/payment-handler.js',
        basePath + 'core/geo-helpers.js'
    ];
    
    // Load scripts sequentially
    function loadScript(index) {
        if (index >= scriptsToLoad.length) {
            console.log('✅ All premium systems loaded');
            return;
        }
        
        var script = document.createElement('script');
        script.src = scriptsToLoad[index];
        script.onload = function() {
            loadScript(index + 1);
        };
        script.onerror = function() {
            console.error('❌ Failed to load:', scriptsToLoad[index]);
            loadScript(index + 1);
        };
        document.head.appendChild(script);
    }
    
    loadScript(0);
})();
