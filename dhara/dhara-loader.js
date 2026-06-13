// /dhara/dhara-loader.js
// ═══════════════════════════════════════════════════════
// DHARA LOADER - Loads all Dhara files
// Like Google AdSense pattern - one file, loads all
// ═══════════════════════════════════════════════════════

(function() {
    'use strict';

    // Prevent double load
    if (window.__dharaLoaded) return;
    window.__dharaLoaded = true;

    console.log('🦊 Dhara loader starting...');

    // ───────────────────────────────────────
    // CONFIG
    // ───────────────────────────────────────
    window.DHARA_CONFIG = {
        basePath: '/dhara',
        images: {
            idle: '/dhara/poses/dhara-idle.png',
            talking: '/dhara/poses/dhara-talking.png',
            happy: '/dhara/poses/dhara-happy.png',
            sad: '/dhara/poses/dhara-sad.png',
            sitting: '/dhara/poses/dhara-sitting.png',
            pointing: '/dhara/poses/dhara-pointing.png',
            waving: '/dhara/poses/dhara-waving.png',
            fox: '/dhara/dhara-fox.png'
        },
        defaultImage: '/dhara/poses/dhara-idle.png',
        sizes: {
            mini: { w: 80, h: 120 },      // Tiny corner
            small: { w: 140, h: 220 },    // Default walking
            medium: { w: 250, h: 400 },   // When focused
            large: { w: 400, h: 600 },    // Big presence
            fullscreen: { w: '70vw', h: '90vh' }  // Takeover mode
        }
    };

    // ───────────────────────────────────────
    // LOAD CSS
    // ───────────────────────────────────────
    function loadCSS(href) {
        return new Promise(function(resolve) {
            var link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = href;
            link.onload = resolve;
            link.onerror = resolve;
            document.head.appendChild(link);
        });
    }

    // ───────────────────────────────────────
    // LOAD JS in order
    // ───────────────────────────────────────
    function loadJS(src) {
        return new Promise(function(resolve, reject) {
            var script = document.createElement('script');
            script.src = src;
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }

    // ───────────────────────────────────────
    // BOOT SEQUENCE
    // ───────────────────────────────────────
    async function boot() {
        try {
            // 1. Load CSS first
            await loadCSS('/dhara/dhara-styles.css');
            console.log('✓ Dhara CSS loaded');

            // 2. Load knowledge base
            await loadJS('/dhara/dhara-knowledge.js');
            console.log('✓ Dhara knowledge loaded');

            // 3. Load core (memory, voice, brain)
            await loadJS('/dhara/dhara-core.js');
            console.log('✓ Dhara core loaded');

            // 4. Load character (poses, animations, movement)
            await loadJS('/dhara/dhara-character.js');
            console.log('✓ Dhara character loaded');

            // 5. Load actions (clicks, swipes, drags, fullscreen)
            await loadJS('/dhara/dhara-actions.js');
            console.log('✓ Dhara actions loaded');

            // 6. Initialize when DOM ready
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', initDhara);
            } else {
                initDhara();
            }

        } catch(err) {
            console.error('❌ Dhara load failed:', err);
        }
    }

    function initDhara() {
        if (window.DharaCore && window.DharaCore.init) {
            window.DharaCore.init();
            console.log('✅ Dhara is alive!');
        }
    }

    // Start the boot
    boot();

})();
