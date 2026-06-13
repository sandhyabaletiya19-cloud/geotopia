// /dhara/dhara-loader.js
// ═══════════════════════════════════════════════════════
// DHARA LOADER - Safer, more compatible version
// ═══════════════════════════════════════════════════════

(function() {
    'use strict';

    if (window.__dharaLoaded) {
        console.log('🦊 Dhara already loaded, skipping');
        return;
    }
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
            mini: { w: 80, h: 120 },
            small: { w: 140, h: 220 },
            medium: { w: 250, h: 400 },
            large: { w: 400, h: 600 },
            fullscreen: { w: '70vw', h: '90vh' }
        }
    };

    // ───────────────────────────────────────
    // SAFER LOADERS (No async/await)
    // ───────────────────────────────────────
    function loadCSS(href, callback) {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        link.onload = function() {
            console.log('✓ CSS loaded:', href);
            if (callback) callback();
        };
        link.onerror = function() {
            console.error('❌ CSS failed:', href);
            if (callback) callback(); // continue anyway
        };
        document.head.appendChild(link);
    }

    function loadJS(src, callback) {
        var script = document.createElement('script');
        script.src = src;
        script.onload = function() {
            console.log('✓ JS loaded:', src);
            if (callback) callback();
        };
        script.onerror = function() {
            console.error('❌ JS failed:', src);
            if (callback) callback(); // continue anyway
        };
        document.head.appendChild(script);
    }

    // ───────────────────────────────────────
    // LOAD IN ORDER (callback chain, not async)
    // ───────────────────────────────────────
    function bootDhara() {
        console.log('🦊 Loading Dhara files...');

        loadCSS('/dhara/dhara-styles.css', function() {
            loadJS('/dhara/dhara-knowledge.js', function() {
                loadJS('/dhara/dhara-core.js', function() {
                    loadJS('/dhara/dhara-character.js', function() {
                        loadJS('/dhara/dhara-actions.js', function() {
                            // All files loaded - now initialize
                            initDhara();
                        });
                    });
                });
            });
        });
    }

    function initDhara() {
        console.log('🦊 All files loaded, initializing...');
        
        if (!window.DharaCore || !window.DharaCore.init) {
            console.error('❌ DharaCore not found!');
            return;
        }
        
        try {
            window.DharaCore.init();
            console.log('✅ Dhara is alive!');
        } catch(err) {
            console.error('❌ Dhara init failed:', err);
        }
    }

    // ───────────────────────────────────────
    // START WHEN DOM IS READY
    // ───────────────────────────────────────
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', bootDhara);
    } else {
        bootDhara();
    }

})();
