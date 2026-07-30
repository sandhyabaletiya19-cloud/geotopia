// js/auto-inject.js
// DharaVerse — Complete Auto Inject
// Handles: CSS, AdSense, SEO, GSC, Dhara,
//          Premium scripts, UI features, Translator

(function() {
    'use strict';

    console.log('🔵 auto-inject.js loaded!');

    // ==========================================
    // SEO CONFIG
    // ==========================================
    var SEO = {
        primaryDomain: 'https://www.dharaverse.com',
        siteName: 'DharaVerse',

        // Pages Google should NOT index
        noindexPaths: [
            '/auth.html',
            '/auth-new.html',
            '/dashboard.html',
            '/admin-dashboard.html',
            '/admin-login.html',
            '/user-dashboard.html',
            '/payment-failed.html',
            '/payment-success.html',
            '/pricing.html',
            '/fix.html',
            '/disable-sw.html',
            '/blank.html',
            '/terms.html',
            '/privacy.html',
            '/195.html',
            '/games/index.html',
            '/mountains/legal/privacy-policy.html',
            '/forests/legal/terms-and-conditions.html'
        ]
    };


    // ==========================================
    // SEO BLOCK 1: WWW REDIRECT
    // Must run FIRST before anything else
    // ==========================================

    // TEMPORARILY DISABLED - causing redirect loop
/*
    (function fixWWWRedirect() {
        var hostname = window.location.hostname;

        if (
            hostname === 'dharaverse.com' ||
            hostname === 'sandhyabaletiya19-cloud.github.io'
        ) {
            var wwwURL = 'https://www.dharaverse.com' +
                         window.location.pathname +
                         window.location.search;
            console.log('🔀 Redirecting to www:', wwwURL);
            window.location.replace(wwwURL);
            return; // Stop all other code running
        }
    })();
*/

    // ==========================================
    // SEO BLOCK 2: CANONICAL TAG
    // ==========================================
    (function injectCanonical() {
        // Remove any existing canonical (prevent duplicates)
        var existing = document.querySelector('link[rel="canonical"]');
        if (existing) {
            existing.remove();
        }

        // Build canonical URL
        var path = window.location.pathname;
        var canonical = SEO.primaryDomain + path;

        // Remove trailing slash (except homepage)
        if (path !== '/' && canonical.endsWith('/')) {
            canonical = canonical.slice(0, -1);
        }

        // If URL has no extension → add .html
        // (fixes /rivers being duplicate of /rivers.html)
        if (
            path !== '/' &&
            !path.endsWith('.html') &&
            !path.endsWith('.xml') &&
            !path.endsWith('.txt') &&
            !path.endsWith('.js') &&
            !path.endsWith('.css') &&
            !path.includes('.')
        ) {
            canonical = canonical + '.html';
        }

        var link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        link.setAttribute('href', canonical);
        document.head.appendChild(link);

        console.log('✅ Canonical injected:', canonical);
    })();


    // ==========================================
    // SEO BLOCK 3: META ROBOTS
    // ==========================================
    (function injectMetaRobots() {
        // Remove existing robots meta
        var existing = document.querySelector('meta[name="robots"]');
        if (existing) {
            existing.remove();
        }

        var path = window.location.pathname;

        // Check if this page should be noindex
        var isNoIndex = SEO.noindexPaths.some(function(noindexPath) {
            return path === noindexPath ||
                   path.endsWith(noindexPath);
        });

        var meta = document.createElement('meta');
        meta.setAttribute('name', 'robots');
        meta.setAttribute(
            'content',
            isNoIndex ? 'noindex, nofollow' : 'index, follow'
        );
        document.head.appendChild(meta);

        console.log('✅ Meta robots injected:',
            isNoIndex ? 'noindex' : 'index, follow'
        );
    })();


    // ==========================================
    // SEO BLOCK 4: OG:URL TAG
    // Fixes WhatsApp / Facebook share previews
    // ==========================================
    (function injectOGURL() {
        var existing = document.querySelector('meta[property="og:url"]');
        if (existing) {
            existing.remove();
        }

        var path = window.location.pathname;
        var ogURL = SEO.primaryDomain + path;

        var meta = document.createElement('meta');
        meta.setAttribute('property', 'og:url');
        meta.setAttribute('content', ogURL);
        document.head.appendChild(meta);

        // Also inject og:site_name if missing
        if (!document.querySelector('meta[property="og:site_name"]')) {
            var siteMeta = document.createElement('meta');
            siteMeta.setAttribute('property', 'og:site_name');
            siteMeta.setAttribute('content', SEO.siteName);
            document.head.appendChild(siteMeta);
        }

        console.log('✅ OG URL injected:', ogURL);
    })();


    // ==========================================
    // INJECT GLOBAL CSS
    // ==========================================
    (function injectCSS() {
        if (document.getElementById('dv-global-css')) return;
        var link = document.createElement('link');
        link.id = 'dv-global-css';
        link.rel = 'stylesheet';
        link.href = '/css/global.css';
        document.head.appendChild(link);
        console.log('✅ Global CSS injected!');
    })();


    // ==========================================
    // INJECT GOOGLE ADSENSE
    // ==========================================
    (function injectAdSense() {
        if (document.getElementById('dv-adsense-script')) return;
        var adScript = document.createElement('script');
        adScript.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8567396490753612';
        adScript.async = true;
        adScript.crossOrigin = 'anonymous';
        adScript.id = 'dv-adsense-script';
        document.head.appendChild(adScript);
        console.log('✅ AdSense injected!');
    })();


    // ==========================================
    // INJECT GSC VERIFICATION
    // ✅ BUG FIXED: only the code, not the tag
    // ==========================================
    (function injectSearchConsole() {
        if (document.querySelector(
            'meta[name="google-site-verification"]'
        )) return;

        var meta = document.createElement('meta');
        meta.name = 'google-site-verification';

        // ✅ FIXED: Only paste the verification CODE here
        // NOT the entire <meta> tag
        meta.content = 'BrJLdMZBeGPNYi_kIz91WnBBxjzHPjUKeSR5NVnTtmY';

        document.head.appendChild(meta);
        console.log('✅ GSC Verification injected!');
    })();


    // ==========================================
    // INJECT DHARA CHARACTER
    // ==========================================
    (function injectDhara() {
        if (document.getElementById('dhara-loader-script')) return;
        var dharaScript = document.createElement('script');
        dharaScript.src = '/dhara/dhara-loader.js';
        dharaScript.id = 'dhara-loader-script';
        dharaScript.defer = true;
        dharaScript.onerror = function() {
            console.error('❌ Dhara loader failed!');
        };
        dharaScript.onload = function() {
            console.log('✅ Dhara loader downloaded');
        };
        document.head.appendChild(dharaScript);
        console.log('🦊 Dhara loader injecting...');
    })();


    // ==========================================
    // FIX VIEWPORT
    // ==========================================
    (function fixViewport() {
        var viewport = document.querySelector("meta[name='viewport']");
        if (viewport) {
            var content = viewport.getAttribute('content');
            content = content.replace(
                /,?\s*user-scalable\s*=\s*(no|0)/gi, ''
            );
            content = content.replace(
                /,?\s*maximum-scale\s*=\s*[\d.]+/gi, ''
            );
            content = content.trim().replace(/,\s*$/, '');
            viewport.setAttribute('content', content);
        } else {
            var meta = document.createElement('meta');
            meta.name = 'viewport';
            meta.content = 'width=device-width, initial-scale=1.0';
            document.head.appendChild(meta);
        }
        console.log('✅ Viewport fixed!');
    })();


    // ==========================================
    // LOAD PREMIUM SCRIPTS
    // ==========================================
    var scriptsToLoad = [
        '/js/dv-core.js',
        '/js/new-payment.js',
        '/js/new-premium.js',
        '/js/p-w.js',
        '/js/config/plans-config.js',
        '/js/core/access-control.js',
        '/js/core/payment-handler.js',
        '/js/core/geo-helpers.js',
        '/js/dv-lock.js'
    ];

    function loadScript(index) {
        if (index >= scriptsToLoad.length) {
            console.log('✅ All premium scripts loaded');
            return;
        }
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


    // ==========================================
    // DOM FEATURES — runs after page loads
    // ==========================================
    document.addEventListener('DOMContentLoaded', function() {


        // ===== 1. MOBILE TABLE SCROLL =====
        var tables = document.querySelectorAll('table');
        tables.forEach(function(table) {
            if (table.parentElement.classList.contains(
                'table-wrapper'
            )) return;
            var wrapper = document.createElement('div');
            wrapper.classList.add('table-wrapper');
            table.parentNode.insertBefore(wrapper, table);
            wrapper.appendChild(table);
        });
        console.log('✅ Tables wrapped for mobile scroll');


        // ===== 2. SCROLL TO TOP BUTTON =====
        var scrollBtn = document.createElement('div');
        scrollBtn.id = 'dv-scroll-top';
        scrollBtn.innerHTML = '↑';
        scrollBtn.title = 'Back to top';
        document.body.appendChild(scrollBtn);

        window.addEventListener('scroll', function() {
            if (window.scrollY > 400) {
                scrollBtn.classList.add('visible');
            } else {
                scrollBtn.classList.remove('visible');
            }
        });

        scrollBtn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        console.log('✅ Scroll to top ready');


        // ===== 3. READING PROGRESS BAR =====
        var progressBar = document.createElement('div');
        progressBar.id = 'dv-progress-bar';
        document.body.appendChild(progressBar);

        window.addEventListener('scroll', function() {
            var scrollTop = window.scrollY;
            var docHeight =
                document.documentElement.scrollHeight -
                window.innerHeight;
            var progress = (scrollTop / docHeight) * 100;
            progressBar.style.width = progress + '%';
        });
        console.log('✅ Reading progress bar ready');


        // ===== 4. LAZY LOAD IMAGES =====
        var images = document.querySelectorAll('img');
        images.forEach(function(img) {
            if (!img.getAttribute('loading')) {
                img.setAttribute('loading', 'lazy');
            }
        });
        console.log('✅ Lazy loading set on all images');


        // ===== 5. EXTERNAL LINKS → NEW TAB =====
        var links = document.querySelectorAll('a[href]');
        links.forEach(function(link) {
            var href = link.getAttribute('href');
            if (
                href &&
                href.startsWith('http') &&
                !href.includes('dharaverse.com')
            ) {
                link.setAttribute('target', '_blank');
                link.setAttribute('rel', 'noopener noreferrer');
            }
        });
        console.log('✅ External links → new tab');


        // ===== 6. SCROLL RESET ON BACK BUTTON =====
        window.addEventListener('pageshow', function(e) {
            if (e.persisted) {
                window.scrollTo(0, 0);
            }
        });


        // ===== 7. ACTIVE NAV LINK HIGHLIGHT =====
        var currentPath = window.location.pathname;
        var navLinks = document.querySelectorAll(
            'nav a, .nav a, .navbar a'
        );
        navLinks.forEach(function(link) {
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('active');
            }
        });
        console.log('✅ Active nav link highlighted');


        // ===== 8. SMOOTH SCROLL FOR ANCHORS =====
        var anchorLinks = document.querySelectorAll('a[href^="#"]');
        anchorLinks.forEach(function(anchor) {
            anchor.addEventListener('click', function(e) {
                var targetId = this.getAttribute('href');
                var target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        console.log('✅ Smooth scroll ready');


        // ===== 9. COPY CODE BLOCKS =====
        var codeBlocks = document.querySelectorAll('pre, code');
        codeBlocks.forEach(function(block) {
            block.style.position = 'relative';
            var copyBtn = document.createElement('button');
            copyBtn.innerText = 'Copy';
            copyBtn.className = 'dv-copy-btn';
            copyBtn.addEventListener('click', function() {
                navigator.clipboard.writeText(
                    block.innerText
                ).then(function() {
                    copyBtn.innerText = 'Copied!';
                    setTimeout(function() {
                        copyBtn.innerText = 'Copy';
                    }, 2000);
                });
            });
            block.appendChild(copyBtn);
        });


        // ===== 10. SCROLL REVEAL ANIMATION =====
        var revealElements = document.querySelectorAll(
            '.card, .stat-box, .info-card, ' +
            '.feature-card, .section-header, table'
        );

        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('dv-revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        revealElements.forEach(function(el) {
            el.classList.add('dv-reveal');
            observer.observe(el);
        });
        console.log('✅ Scroll reveal animations ready');


        // ===== 11. PAGE LOAD TIME =====
        var loadTime = performance.now();
        console.log('⚡ Page ready in: ' +
            Math.round(loadTime) + 'ms'
        );


        // ==========================================
        // 12. DHARAVERSE AI TRANSLATOR
        // ==========================================

        var dvLanguages = [
            { code: 'en', name: 'English',      flag: '🇬🇧', dir: 'ltr' },
            { code: 'hi', name: 'हिन्दी',         flag: '🇮🇳', dir: 'ltr' },
            { code: 'bn', name: 'বাংলা',          flag: '🇮🇳', dir: 'ltr' },
            { code: 'te', name: 'తెలుగు',         flag: '🇮🇳', dir: 'ltr' },
            { code: 'mr', name: 'मराठी',          flag: '🇮🇳', dir: 'ltr' },
            { code: 'ta', name: 'தமிழ்',          flag: '🇮🇳', dir: 'ltr' },
            { code: 'gu', name: 'ગુજરાતી',        flag: '🇮🇳', dir: 'ltr' },
            { code: 'kn', name: 'ಕನ್ನಡ',          flag: '🇮🇳', dir: 'ltr' },
            { code: 'ml', name: 'മലയാളം',         flag: '🇮🇳', dir: 'ltr' },
            { code: 'pa', name: 'ਪੰਜਾਬੀ',         flag: '🇮🇳', dir: 'ltr' },
            { code: 'ur', name: 'اردو',           flag: '🇵🇰', dir: 'rtl' },
            { code: 'ar', name: 'العربية',        flag: '🇸🇦', dir: 'rtl' },
            { code: 'zh', name: '中文',            flag: '🇨🇳', dir: 'ltr' },
            { code: 'ja', name: '日本語',          flag: '🇯🇵', dir: 'ltr' },
            { code: 'ko', name: '한국어',          flag: '🇰🇷', dir: 'ltr' },
            { code: 'fr', name: 'Français',       flag: '🇫🇷', dir: 'ltr' },
            { code: 'de', name: 'Deutsch',        flag: '🇩🇪', dir: 'ltr' },
            { code: 'es', name: 'Español',        flag: '🇪🇸', dir: 'ltr' },
            { code: 'pt', name: 'Português',      flag: '🇵🇹', dir: 'ltr' },
            { code: 'ru', name: 'Русский',        flag: '🇷🇺', dir: 'ltr' },
            { code: 'id', name: 'Bahasa',         flag: '🇮🇩', dir: 'ltr' },
            { code: 'tr', name: 'Türkçe',         flag: '🇹🇷', dir: 'ltr' },
            { code: 'vi', name: 'Tiếng Việt',     flag: '🇻🇳', dir: 'ltr' },
            { code: 'th', name: 'ภาษาไทย',        flag: '🇹🇭', dir: 'ltr' },
            { code: 'sw', name: 'Kiswahili',      flag: '🇰🇪', dir: 'ltr' }
        ];

        // Translation cache
        var translationCache = {};
        try {
            var savedCache = localStorage.getItem(
                'dv-translation-cache'
            );
            if (savedCache) {
                translationCache = JSON.parse(savedCache);
                console.log('📦 Loaded ' +
                    Object.keys(translationCache).length +
                    ' cached translations'
                );
            }
        } catch(e) {}

        // Save cache every 10 seconds
        setInterval(function() {
            try {
                var keys = Object.keys(translationCache);
                if (keys.length > 500) {
                    var newCache = {};
                    keys.slice(-500).forEach(function(k) {
                        newCache[k] = translationCache[k];
                    });
                    translationCache = newCache;
                }
                localStorage.setItem(
                    'dv-translation-cache',
                    JSON.stringify(translationCache)
                );
            } catch(e) {}
        }, 10000);


        // API 1: LibreTranslate
        function tryLibreTranslate(text, targetLang) {
            return fetch('https://libretranslate.com/translate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    q: text,
                    source: 'en',
                    target: targetLang,
                    format: 'text'
                })
            })
            .then(function(r) { return r.json(); })
            .then(function(data) {
                if (data.translatedText) return data.translatedText;
                throw new Error('No translation');
            });
        }

        // API 2: MyMemory
        function tryMyMemory(text, targetLang) {
            var url = 'https://api.mymemory.translated.net/get?q=' +
                encodeURIComponent(text) +
                '&langpair=en|' + targetLang;
            return fetch(url)
                .then(function(r) { return r.json(); })
                .then(function(data) {
                    if (
                        data.responseData &&
                        data.responseData.translatedText
                    ) {
                        return data.responseData.translatedText;
                    }
                    throw new Error('No translation');
                });
        }

        // API 3: Lingva
        function tryLingva(text, targetLang) {
            var url = 'https://lingva.ml/api/v1/en/' +
                targetLang + '/' + encodeURIComponent(text);
            return fetch(url)
                .then(function(r) { return r.json(); })
                .then(function(data) {
                    if (data.translation) return data.translation;
                    throw new Error('No translation');
                });
        }

        // Smart translate (tries all 3)
        function translateText(text, targetLang) {
            return new Promise(function(resolve, reject) {
                var cacheKey = targetLang + ':' +
                    text.substring(0, 50);
                if (translationCache[cacheKey]) {
                    resolve(translationCache[cacheKey]);
                    return;
                }

                tryLibreTranslate(text, targetLang)
                    .then(function(result) {
                        translationCache[cacheKey] = result;
                        resolve(result);
                    })
                    .catch(function() {
                        tryMyMemory(text, targetLang)
                            .then(function(result) {
                                translationCache[cacheKey] = result;
                                resolve(result);
                            })
                            .catch(function() {
                                tryLingva(text, targetLang)
                                    .then(function(result) {
                                        translationCache[cacheKey] =
                                            result;
                                        resolve(result);
                                    })
                                    .catch(function() {
                                        reject('All APIs failed');
                                    });
                            });
                    });
            });
        }

        // Filter non-translatable elements
        function shouldTranslate(el) {
            if (el.closest('script'))               return false;
            if (el.closest('style'))                return false;
            if (el.closest('code'))                 return false;
            if (el.closest('pre'))                  return false;
            if (el.closest('#dv-translator-panel')) return false;
            if (el.closest('#dv-translate-loader')) return false;
            if (el.closest('.no-translate'))        return false;
            if (el.classList.contains('notranslate')) return false;

            var text = el.textContent.trim();
            if (/^[\d\s,.\-+%°]+$/.test(text))     return false;
            if (text.length < 2)                    return false;
            if (text.length > 500)                  return false;

            return true;
        }

        // Get all translatable elements
        function getTranslatableElements() {
            var all = document.querySelectorAll(
                'h1, h2, h3, h4, h5, h6, ' +
                'p, li, td, th, button, label, ' +
                '.hero-title, .hero-description, ' +
                '.section-title, .section-subtitle, ' +
                '.stat-box-label, .stat-box-desc'
            );

            var result = [];
            all.forEach(function(el) {
                if (shouldTranslate(el)) {
                    var hasChildElements = false;
                    el.querySelectorAll('*').forEach(function(child) {
                        if (child.textContent.trim().length > 0) {
                            hasChildElements = true;
                        }
                    });
                    if (!hasChildElements) {
                        result.push(el);
                    }
                }
            });
            return result;
        }

        var originalTexts = new Map();
        var isTranslated = false;
        var dvCurrentLang =
            localStorage.getItem('dv-language') || 'en';

        // Translate full page
        function translatePage(langCode) {
            if (langCode === 'en') {
                restoreOriginal();
                return;
            }

            var langObj = dvLanguages.find(function(l) {
                return l.code === langCode;
            });
            if (!langObj) return;

            showTranslatingLoader(langObj);

            var toTranslate = getTranslatableElements();
            var total = toTranslate.length;
            var done = 0;

            if (total === 0) {
                hideTranslatingLoader();
                return;
            }

            var batchSize = 5;
            var batchIndex = 0;

            function translateBatch() {
                var batch = toTranslate.slice(
                    batchIndex, batchIndex + batchSize
                );

                if (batch.length === 0) {
                    isTranslated = true;
                    dvCurrentLang = langCode;
                    localStorage.setItem('dv-language', langCode);
                    document.documentElement.dir = langObj.dir;
                    hideTranslatingLoader();
                    updateTranslatorUI(langCode);
                    console.log('✅ Translated to ' + langObj.name);
                    return;
                }

                var promises = batch.map(function(el) {
                    var text = el.textContent.trim();
                    if (!originalTexts.has(el)) {
                        originalTexts.set(el, text);
                    }

                    return translateText(text, langCode)
                        .then(function(translated) {
                            el.textContent = translated;
                            done++;
                            updateProgress(done, total);
                        })
                        .catch(function() {
                            done++;
                            updateProgress(done, total);
                        });
                });

                Promise.all(promises).then(function() {
                    batchIndex += batchSize;
                    setTimeout(translateBatch, 300);
                });
            }

            translateBatch();
        }

        // Restore to English
        function restoreOriginal() {
            originalTexts.forEach(function(text, el) {
                el.textContent = text;
            });
            isTranslated = false;
            dvCurrentLang = 'en';
            localStorage.setItem('dv-language', 'en');
            document.documentElement.dir = 'ltr';
            updateTranslatorUI('en');
            console.log('✅ Restored to English');
        }

        // Show loading screen
        function showTranslatingLoader(langObj) {
            var existing = document.getElementById(
                'dv-translate-loader'
            );
            if (existing) existing.remove();

            var loader = document.createElement('div');
            loader.id = 'dv-translate-loader';
            loader.innerHTML =
                '<div class="dv-loader-content">' +
                    '<div class="dv-loader-spinner"></div>' +
                    '<div class="dv-loader-text">' +
                        '<strong>Translating to ' +
                            langObj.flag + ' ' +
                            langObj.name +
                        '</strong>' +
                        '<div class="dv-loader-progress-bar">' +
                            '<div class="dv-loader-progress-fill"' +
                                ' id="dv-loader-fill"></div>' +
                        '</div>' +
                        '<span id="dv-loader-percent">0%</span>' +
                    '</div>' +
                '</div>';
            document.body.appendChild(loader);
        }

        // Update progress bar
        function updateProgress(done, total) {
            var percent = Math.round((done / total) * 100);
            var fill = document.getElementById('dv-loader-fill');
            var text = document.getElementById('dv-loader-percent');
            if (fill) fill.style.width = percent + '%';
            if (text) text.textContent = percent + '%';
        }

        // Hide loading screen
        function hideTranslatingLoader() {
            setTimeout(function() {
                var loader = document.getElementById(
                    'dv-translate-loader'
                );
                if (loader) {
                    loader.classList.add('fade-out');
                    setTimeout(function() {
                        loader.remove();
                    }, 500);
                }
            }, 500);
        }

        // Update translator UI
        function updateTranslatorUI(langCode) {
            var langObj = dvLanguages.find(function(l) {
                return l.code === langCode;
            }) || dvLanguages[0];

            var badge = document.querySelector(
                '.dv-trans-current-badge'
            );
            if (badge) {
                badge.textContent = langObj.flag + ' ' + langObj.name;
            }

            var items = document.querySelectorAll('.dv-trans-lang');
            items.forEach(function(item) {
                var code = item.getAttribute('data-code');
                item.classList.remove('active');
                var check = item.querySelector('.dv-trans-check');
                if (check) check.remove();

                if (code === langCode) {
                    item.classList.add('active');
                    var checkSpan = document.createElement('span');
                    checkSpan.className = 'dv-trans-check';
                    checkSpan.textContent = '✓';
                    item.appendChild(checkSpan);
                }
            });

            var panel = document.getElementById(
                'dv-translator-panel'
            );
            if (panel) panel.style.display = 'none';
        }

        // Create translator UI
        function createTranslatorUI() {

            var floatBtn = document.createElement('div');
            floatBtn.id = 'dv-translator-btn';
            floatBtn.innerHTML = '🌐';
            floatBtn.title = 'Translate Page';
            document.body.appendChild(floatBtn);

            var panel = document.createElement('div');
            panel.id = 'dv-translator-panel';

            var currentLangObj = dvLanguages.find(function(l) {
                return l.code === dvCurrentLang;
            }) || dvLanguages[0];

            var panelHTML = '';

            panelHTML += '<div class="dv-trans-header">';
            panelHTML +=   '<div class="dv-trans-header-left">';
            panelHTML +=     '<span class="dv-trans-globe">🌐</span>';
            panelHTML +=     '<div>';
            panelHTML +=       '<strong>DharaVerse AI</strong>';
            panelHTML +=       '<p>Read in your language</p>';
            panelHTML +=     '</div>';
            panelHTML +=   '</div>';
            panelHTML +=   '<span class="dv-trans-close" ';
            panelHTML +=     'id="dv-trans-close">✕</span>';
            panelHTML += '</div>';

            panelHTML += '<div class="dv-trans-current">';
            panelHTML +=   '<span>Currently: </span>';
            panelHTML +=   '<span class="dv-trans-current-badge">';
            panelHTML +=     currentLangObj.flag + ' ' +
                             currentLangObj.name;
            panelHTML +=   '</span>';
            panelHTML += '</div>';

            panelHTML += '<div class="dv-trans-features">';
            panelHTML +=   '<span>🚫 No cookies</span>';
            panelHTML +=   '<span>⚡ Fast</span>';
            panelHTML +=   '<span>🔒 Private</span>';
            panelHTML += '</div>';

            panelHTML += '<input type="text" ';
            panelHTML +=   'id="dv-trans-search" ';
            panelHTML +=   'placeholder="🔍 Search language..." ';
            panelHTML +=   'class="dv-trans-search">';

            panelHTML += '<div class="dv-trans-grid" ' +
                'id="dv-trans-grid">';
            dvLanguages.forEach(function(lang) {
                var isActive = lang.code === dvCurrentLang;
                panelHTML += '<div class="dv-trans-lang ' +
                    (isActive ? 'active' : '') + '" ';
                panelHTML +=   'data-code="' + lang.code + '" ';
                panelHTML +=   'data-name="' + lang.name + '">';
                panelHTML +=   '<span class="dv-trans-flag">' +
                    lang.flag + '</span>';
                panelHTML +=   '<span class="dv-trans-name">' +
                    lang.name + '</span>';
                if (isActive) {
                    panelHTML += '<span class="dv-trans-check">✓</span>';
                }
                panelHTML += '</div>';
            });
            panelHTML += '</div>';

            panelHTML += '<div class="dv-trans-footer">';
            panelHTML +=   '🛡️ No cookies · No tracking · DharaVerse AI';
            panelHTML += '</div>';

            panel.innerHTML = panelHTML;
            panel.style.display = 'none';
            document.body.appendChild(panel);

            // First visit tooltip
            var hasSeenTranslator = localStorage.getItem(
                'dv-seen-translator'
            );
            if (!hasSeenTranslator) {
                var tooltip = document.createElement('div');
                tooltip.id = 'dv-trans-tooltip';
                tooltip.innerHTML = '🌐 Read in your language! ' +
                    '<span id="dv-tooltip-close">✕</span>';
                document.body.appendChild(tooltip);

                setTimeout(function() {
                    tooltip.classList.add('show');
                }, 2000);

                setTimeout(function() {
                    tooltip.classList.remove('show');
                }, 7000);

                document.getElementById('dv-tooltip-close')
                    .addEventListener('click', function() {
                        tooltip.classList.remove('show');
                        localStorage.setItem(
                            'dv-seen-translator', 'true'
                        );
                    });

                localStorage.setItem('dv-seen-translator', 'true');
            }

            // Toggle panel
            floatBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                if (panel.style.display === 'none') {
                    panel.style.display = 'flex';
                    document.getElementById(
                        'dv-trans-search'
                    ).focus();
                } else {
                    panel.style.display = 'none';
                }
            });

            // Close button
            document.getElementById('dv-trans-close')
                .addEventListener('click', function() {
                    panel.style.display = 'none';
                });

            // Click outside to close
            document.addEventListener('click', function(e) {
                if (
                    !panel.contains(e.target) &&
                    e.target !== floatBtn
                ) {
                    panel.style.display = 'none';
                }
            });

            // Language selected
            document.getElementById('dv-trans-grid')
                .addEventListener('click', function(e) {
                    var langItem = e.target.closest(
                        '.dv-trans-lang'
                    );
                    if (langItem) {
                        var code = langItem.getAttribute('data-code');
                        translatePage(code);
                    }
                });

            // Search filter
            document.getElementById('dv-trans-search')
                .addEventListener('input', function() {
                    var query = this.value.toLowerCase();
                    var items = document.querySelectorAll(
                        '.dv-trans-lang'
                    );
                    items.forEach(function(item) {
                        var name = item.getAttribute(
                            'data-name'
                        ).toLowerCase();
                        item.style.display =
                            name.includes(query) ? 'flex' : 'none';
                    });
                });

        } // end createTranslatorUI


        // START TRANSLATOR
        createTranslatorUI();

        if (dvCurrentLang !== 'en') {
            setTimeout(function() {
                translatePage(dvCurrentLang);
            }, 1000);
        }

        console.log('✅ DharaVerse AI Translator ready!');
        console.log('✅ DharaVerse auto-inject complete!');


    }); // END DOMContentLoaded

})(); // END IIFE
