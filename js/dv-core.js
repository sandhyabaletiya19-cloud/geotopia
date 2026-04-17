// ============================================
// js/dv-core.js
// DharaVerse — Core Auth + Premium Loader
// Loads: Supabase + Auth + Premium Check
// This runs on ALL pages via auto-inject.js
// ============================================

(function() {
    'use strict';

    // Already loaded? Skip
    if (window._dvCoreLoaded) return;
    window._dvCoreLoaded = true;

    console.log('🚀 DV Core loading...');

    // Scripts to load in order
    var coreScripts = [
        'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2',
        '/js/supabase-client.js',
        '/js/auth-supabase.js',
        '/js/premium-check.js'
    ];

    var loadIndex = 0;

    function loadNext() {
        if (loadIndex >= coreScripts.length) {
            console.log('✅ DV Core ready!');
            // Fire custom event so other scripts know core is ready
            window.dispatchEvent(new Event('dvCoreReady'));
            return;
        }

        var src = coreScripts[loadIndex];

        // Skip if already loaded (e.g. Supabase CDN)
        var existing = document.querySelector('script[src="' + src + '"]');
        if (existing) {
            console.log('⏭️ Already loaded:', src);
            loadIndex++;
            loadNext();
            return;
        }

        var script = document.createElement('script');
        script.src = src;

        script.onload = function() {
            console.log('✓ DV Core loaded:', src.split('/').pop());
            loadIndex++;
            loadNext();
        };

        script.onerror = function() {
            console.error('❌ DV Core failed:', src);
            loadIndex++;
            loadNext(); // Continue anyway
        };

        document.head.appendChild(script);
    }

    // Start loading
    loadNext();

})();
