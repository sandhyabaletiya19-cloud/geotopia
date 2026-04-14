// js/auto-inject.js
(function() {
    console.log('🔵 auto-inject.js loaded!');

    // ✅ FIXED: Absolute paths
    var scriptsToLoad = [
        '/js/config/plans-config.js',
        '/js/core/access-control.js',
        '/js/core/payment-handler.js',
        '/js/core/geo-helpers.js'
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


    // ========================================
    // ALL DOM FEATURES
    // ========================================
    document.addEventListener("DOMContentLoaded", function () {


        // ========== 1. MOBILE TABLE SCROLL ==========
        var tables = document.querySelectorAll("table");
        tables.forEach(function (table) {
            if (table.parentElement.classList.contains("table-wrapper")) return;
            var wrapper = document.createElement("div");
            wrapper.classList.add("table-wrapper");
            table.parentNode.insertBefore(wrapper, table);
            wrapper.appendChild(table);
        });
        console.log("✅ Tables wrapped for mobile scroll");


        // ========== 2. SCROLL TO TOP BUTTON ==========
        var scrollBtn = document.createElement("div");
        scrollBtn.id = "dv-scroll-top";
        scrollBtn.innerHTML = "↑";
        scrollBtn.title = "Back to top";
        document.body.appendChild(scrollBtn);

        window.addEventListener("scroll", function () {
            if (window.scrollY > 400) {
                scrollBtn.classList.add("visible");
            } else {
                scrollBtn.classList.remove("visible");
            }
        });

        scrollBtn.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
        console.log("✅ Scroll to top ready");


        // ========== 3. READING PROGRESS BAR ==========
        var progressBar = document.createElement("div");
        progressBar.id = "dv-progress-bar";
        document.body.appendChild(progressBar);

        window.addEventListener("scroll", function () {
            var scrollTop = window.scrollY;
            var docHeight = document.documentElement.scrollHeight - window.innerHeight;
            var progress = (scrollTop / docHeight) * 100;
            progressBar.style.width = progress + "%";
        });
        console.log("✅ Reading progress bar ready");


        // ========== 4. IMAGES LAZY LOAD ==========
        var images = document.querySelectorAll("img");
        images.forEach(function (img) {
            if (!img.getAttribute("loading")) {
                img.setAttribute("loading", "lazy");
            }
        });
        console.log("✅ Lazy loading set on all images");


        // ========== 5. EXTERNAL LINKS OPEN IN NEW TAB ==========
        var links = document.querySelectorAll("a[href]");
        links.forEach(function (link) {
            var href = link.getAttribute("href");
            if (href && href.startsWith("http") && !href.includes("dharaverse.com")) {
                link.setAttribute("target", "_blank");
                link.setAttribute("rel", "noopener noreferrer");
            }
        });
        console.log("✅ External links set to open in new tab");


        // ========== 6. SCROLL TO TOP ON BACK BUTTON ==========
        window.addEventListener("pageshow", function (e) {
            if (e.persisted) {
                window.scrollTo(0, 0);
            }
        });


        // ========== 7. ACTIVE NAV LINK HIGHLIGHT ==========
        var currentPath = window.location.pathname;
        var navLinks = document.querySelectorAll("nav a, .nav a, .navbar a");
        navLinks.forEach(function (link) {
            if (link.getAttribute("href") === currentPath) {
                link.classList.add("active");
            }
        });
        console.log("✅ Active nav link highlighted");


        // ========== 8. SMOOTH SCROLL FOR ANCHOR LINKS ==========
        var anchorLinks = document.querySelectorAll('a[href^="#"]');
        anchorLinks.forEach(function (anchor) {
            anchor.addEventListener("click", function (e) {
                var targetId = this.getAttribute("href");
                var target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            });
        });
        console.log("✅ Smooth scroll ready");


        // ========== 9. COPY CODE BLOCKS ==========
        var codeBlocks = document.querySelectorAll("pre, code");
        codeBlocks.forEach(function (block) {
            block.style.position = "relative";
            var copyBtn = document.createElement("button");
            copyBtn.innerText = "Copy";
            copyBtn.className = "dv-copy-btn";
            copyBtn.addEventListener("click", function () {
                navigator.clipboard.writeText(block.innerText).then(function () {
                    copyBtn.innerText = "Copied!";
                    setTimeout(function () { copyBtn.innerText = "Copy"; }, 2000);
                });
            });
            block.appendChild(copyBtn);
        });


        // ========== 10. SCROLL REVEAL ANIMATION ==========
        var revealElements = document.querySelectorAll(
            ".card, .stat-box, .info-card, .feature-card, .section-header, table"
        );

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("dv-revealed");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        revealElements.forEach(function (el) {
            el.classList.add("dv-reveal");
            observer.observe(el);
        });
        console.log("✅ Scroll reveal animations ready");


        // ========== 11. PAGE LOAD TIME ==========
        var loadTime = performance.now();
        console.log("⚡ Page ready in: " + Math.round(loadTime) + "ms");


        // =============================================
        // 12. DHARAVERSE AI TRANSLATOR
        // =============================================

        // ----- LANGUAGES -----
        var dvLanguages = [
            { code: "en", name: "English", flag: "🇬🇧", dir: "ltr" },
            { code: "hi", name: "हिन्दी", flag: "🇮🇳", dir: "ltr" },
            { code: "bn", name: "বাংলা", flag: "🇮🇳", dir: "ltr" },
            { code: "te", name: "తెలుగు", flag: "🇮🇳", dir: "ltr" },
            { code: "mr", name: "मराठी", flag: "🇮🇳", dir: "ltr" },
            { code: "ta", name: "தமிழ்", flag: "🇮🇳", dir: "ltr" },
            { code: "gu", name: "ગુજરાતી", flag: "🇮🇳", dir: "ltr" },
            { code: "kn", name: "ಕನ್ನಡ", flag: "🇮🇳", dir: "ltr" },
            { code: "ml", name: "മലയാളം", flag: "🇮🇳", dir: "ltr" },
            { code: "pa", name: "ਪੰਜਾਬੀ", flag: "🇮🇳", dir: "ltr" },
            { code: "ur", name: "اردو", flag: "🇵🇰", dir: "rtl" },
            { code: "ar", name: "العربية", flag: "🇸🇦", dir: "rtl" },
            { code: "zh", name: "中文", flag: "🇨🇳", dir: "ltr" },
            { code: "ja", name: "日本語", flag: "🇯🇵", dir: "ltr" },
            { code: "ko", name: "한국어", flag: "🇰🇷", dir: "ltr" },
            { code: "fr", name: "Français", flag: "🇫🇷", dir: "ltr" },
            { code: "de", name: "Deutsch", flag: "🇩🇪", dir: "ltr" },
            { code: "es", name: "Español", flag: "🇪🇸", dir: "ltr" },
            { code: "pt", name: "Português", flag: "🇵🇹", dir: "ltr" },
            { code: "ru", name: "Русский", flag: "🇷🇺", dir: "ltr" },
            { code: "id", name: "Bahasa", flag: "🇮🇩", dir: "ltr" },
            { code: "tr", name: "Türkçe", flag: "🇹🇷", dir: "ltr" },
            { code: "vi", name: "Tiếng Việt", flag: "🇻🇳", dir: "ltr" },
            { code: "th", name: "ภาษาไทย", flag: "🇹🇭", dir: "ltr" },
            { code: "sw", name: "Kiswahili", flag: "🇰🇪", dir: "ltr" }
        ];


        // ----- TRANSLATION CACHE (Persistent!) -----
        var translationCache = {};
        try {
            var savedCache = localStorage.getItem("dv-translation-cache");
            if (savedCache) {
                translationCache = JSON.parse(savedCache);
                console.log("📦 Loaded " + Object.keys(translationCache).length + " cached translations");
            }
        } catch(e) {}

        // Save cache every 10 seconds
        setInterval(function () {
            try {
                var keys = Object.keys(translationCache);
                if (keys.length > 500) {
                    var newCache = {};
                    keys.slice(-500).forEach(function (k) {
                        newCache[k] = translationCache[k];
                    });
                    translationCache = newCache;
                }
                localStorage.setItem("dv-translation-cache", JSON.stringify(translationCache));
            } catch(e) {}
        }, 10000);


        // ----- TRANSLATION APIs (3 Fallbacks!) -----

        // API 1: LibreTranslate
        function tryLibreTranslate(text, targetLang) {
            return fetch("https://libretranslate.com/translate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    q: text,
                    source: "en",
                    target: targetLang,
                    format: "text"
                })
            })
            .then(function (r) { return r.json(); })
            .then(function (data) {
                if (data.translatedText) return data.translatedText;
                throw new Error("No translation");
            });
        }

        // API 2: MyMemory
        function tryMyMemory(text, targetLang) {
            var url = "https://api.mymemory.translated.net/get?q=" +
                encodeURIComponent(text) + "&langpair=en|" + targetLang;
            return fetch(url)
                .then(function (r) { return r.json(); })
                .then(function (data) {
                    if (data.responseData && data.responseData.translatedText) {
                        return data.responseData.translatedText;
                    }
                    throw new Error("No translation");
                });
        }

        // API 3: Lingva (Google mirror, no cookies!)
        function tryLingva(text, targetLang) {
            var url = "https://lingva.ml/api/v1/en/" +
                targetLang + "/" + encodeURIComponent(text);
            return fetch(url)
                .then(function (r) { return r.json(); })
                .then(function (data) {
                    if (data.translation) return data.translation;
                    throw new Error("No translation");
                });
        }

        // SMART TRANSLATOR: Try all 3 APIs with fallback
        function translateText(text, targetLang) {
            return new Promise(function (resolve, reject) {
                var cacheKey = targetLang + ":" + text.substring(0, 50);
                if (translationCache[cacheKey]) {
                    resolve(translationCache[cacheKey]);
                    return;
                }

                tryLibreTranslate(text, targetLang)
                    .then(function (result) {
                        translationCache[cacheKey] = result;
                        resolve(result);
                    })
                    .catch(function () {
                        tryMyMemory(text, targetLang)
                            .then(function (result) {
                                translationCache[cacheKey] = result;
                                resolve(result);
                            })
                            .catch(function () {
                                tryLingva(text, targetLang)
                                    .then(function (result) {
                                        translationCache[cacheKey] = result;
                                        resolve(result);
                                    })
                                    .catch(function () {
                                        reject("All APIs failed");
                                    });
                            });
                    });
            });
        }


        // ----- SMART ELEMENT FILTER -----
        function shouldTranslate(el) {
            if (el.closest("script")) return false;
            if (el.closest("style")) return false;
            if (el.closest("code")) return false;
            if (el.closest("pre")) return false;
            if (el.closest("#dv-translator-panel")) return false;
            if (el.closest("#dv-translate-loader")) return false;
            if (el.closest(".no-translate")) return false;
            if (el.classList && el.classList.contains("notranslate")) return false;

            var text = el.textContent.trim();
            if (/^[\d\s,.\-+%°]+$/.test(text)) return false;
            if (text.length < 2) return false;
            if (text.length > 500) return false;

            return true;
        }

        function getTranslatableElements() {
            var all = document.querySelectorAll(
                "h1, h2, h3, h4, h5, h6, p, li, td, th, button, label, " +
                ".hero-title, .hero-description, .section-title, " +
                ".section-subtitle, .stat-box-label, .stat-box-desc"
            );

            var result = [];
            all.forEach(function (el) {
                if (shouldTranslate(el)) {
                    var hasChildText = false;
                    el.querySelectorAll("*").forEach(function (child) {
                        if (child.textContent.trim().length > 0 && child !== el) {
                            hasChildText = true;
                        }
                    });
                    if (!hasChildText) result.push(el);
                }
            });
            return result;
        }


        // ----- ORIGINAL TEXT STORAGE -----
        var originalTexts = new Map();
        var isTranslated = false;
        var dvCurrentLang = localStorage.getItem("dv-language") || "en";


        // ----- TRANSLATE PAGE -----
        function translatePage(langCode) {
            if (langCode === "en") {
                restoreOriginal();
                return;
            }

            var langObj = dvLanguages.find(function (l) { return l.code === langCode; });
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
                var batch = toTranslate.slice(batchIndex, batchIndex + batchSize);
                if (batch.length === 0) {
                    isTranslated = true;
                    dvCurrentLang = langCode;
                    localStorage.setItem("dv-language", langCode);
                    document.documentElement.dir = langObj.dir;
                    hideTranslatingLoader();
                    updateTranslatorUI(langCode);
                    console.log("✅ Page translated to " + langObj.name);
                    return;
                }

                var promises = batch.map(function (el) {
                    var text = el.textContent.trim();
                    if (!originalTexts.has(el)) {
                        originalTexts.set(el, text);
                    }

                    return translateText(text, langCode)
                        .then(function (translated) {
                            el.textContent = translated;
                            done++;
                            updateProgress(done, total);
                        })
                        .catch(function () { done++; });
                });

                Promise.all(promises).then(function () {
                    batchIndex += batchSize;
                    setTimeout(translateBatch, 300);
                });
            }

            translateBatch();
        }


        // ----- RESTORE ORIGINAL -----
        function restoreOriginal() {
            originalTexts.forEach(function (text, el) {
                el.textContent = text;
            });
            isTranslated = false;
            dvCurrentLang = "en";
            localStorage.setItem("dv-language", "en");
            document.documentElement.dir = "ltr";
            updateTranslatorUI("en");
            console.log("✅ Restored to English");
        }


        // ----- LOADING UI -----
        function showTranslatingLoader(langObj) {
            var existing = document.getElementById("dv-translate-loader");
            if (existing) existing.remove();

            var loader = document.createElement("div");
            loader.id = "dv-translate-loader";
            loader.innerHTML =
                '<div class="dv-loader-content">' +
                '<div class="dv-loader-spinner"></div>' +
                '<div class="dv-loader-text">' +
                '<strong>Translating to ' + langObj.flag + ' ' + langObj.name + '</strong>' +
                '<div class="dv-loader-progress-bar">' +
                '<div class="dv-loader-progress-fill" id="dv-loader-fill"></div>' +
                '</div>' +
                '<span id="dv-loader-percent">0%</span>' +
                '</div></div>';
            document.body.appendChild(loader);
        }

        function updateProgress(done, total) {
            var percent = Math.round((done / total) * 100);
            var fill = document.getElementById("dv-loader-fill");
            var text = document.getElementById("dv-loader-percent");
            if (fill) fill.style.width = percent + "%";
            if (text) text.textContent = percent + "%";
        }

        function hideTranslatingLoader() {
            setTimeout(function () {
                var loader = document.getElementById("dv-translate-loader");
                if (loader) {
                    loader.classList.add("fade-out");
                    setTimeout(function () { loader.remove(); }, 500);
                }
            }, 500);
        }


        // ----- UPDATE UI -----
        function updateTranslatorUI(langCode) {
            var langObj = dvLanguages.find(function (l) { return l.code === langCode; }) || dvLanguages[0];

            var badge = document.querySelector(".dv-trans-current-badge");
            if (badge) badge.textContent = langObj.flag + " " + langObj.name;

            var items = document.querySelectorAll(".dv-trans-lang");
            items.forEach(function (item) {
                var code = item.getAttribute("data-code");
                item.classList.remove("active");
                var check = item.querySelector(".dv-trans-check");
                if (check) check.remove();

                if (code === langCode) {
                    item.classList.add("active");
                    var checkSpan = document.createElement("span");
                    checkSpan.className = "dv-trans-check";
                    checkSpan.textContent = "✓";
                    item.appendChild(checkSpan);
                }
            });

            var panel = document.getElementById("dv-translator-panel");
            if (panel) panel.style.display = "none";
        }


        // ----- CREATE TRANSLATOR UI -----
        function createTranslatorUI() {

            // Floating button
            var floatBtn = document.createElement("div");
            floatBtn.id = "dv-translator-btn";
            floatBtn.innerHTML = "🌐";
            floatBtn.title = "Translate Page";
            document.body.appendChild(floatBtn);

            // Panel
            var panel = document.createElement("div");
            panel.id = "dv-translator-panel";

            var currentLangObj = dvLanguages.find(function (l) {
                return l.code === dvCurrentLang;
            }) || dvLanguages[0];

            var panelHTML = '';

            // Header
            panelHTML += '<div class="dv-trans-header">';
            panelHTML += '<div class="dv-trans-header-left">';
            panelHTML += '<span class="dv-trans-globe">🌐</span>';
            panelHTML += '<div>';
            panelHTML += '<strong>DharaVerse AI</strong>';
            panelHTML += '<p>Read in your language</p>';
            panelHTML += '</div></div>';
            panelHTML += '<span class="dv-trans-close" id="dv-trans-close">✕</span>';
            panelHTML += '</div>';

            // Current language
            panelHTML += '<div class="dv-trans-current">';
            panelHTML += '<span>Currently: </span>';
            panelHTML += '<span class="dv-trans-current-badge">' + currentLangObj.flag + ' ' + currentLangObj.name + '</span>';
            panelHTML += '</div>';

            // Features
            panelHTML += '<div class="dv-trans-features">';
            panelHTML += '<span>🚫 No cookies</span>';
            panelHTML += '<span>⚡ Fast</span>';
            panelHTML += '<span>🔒 Private</span>';
            panelHTML += '</div>';

            // Search
            panelHTML += '<input type="text" id="dv-trans-search" placeholder="🔍 Search language..." class="dv-trans-search">';

            // Language grid
            panelHTML += '<div class="dv-trans-grid" id="dv-trans-grid">';
            dvLanguages.forEach(function (lang) {
                var isActive = lang.code === dvCurrentLang;
                panelHTML += '<div class="dv-trans-lang ' + (isActive ? 'active' : '') + '" ';
                panelHTML += 'data-code="' + lang.code + '" data-name="' + lang.name + '">';
                panelHTML += '<span class="dv-trans-flag">' + lang.flag + '</span>';
                panelHTML += '<span class="dv-trans-name">' + lang.name + '</span>';
                if (isActive) panelHTML += '<span class="dv-trans-check">✓</span>';
                panelHTML += '</div>';
            });
            panelHTML += '</div>';

            // Footer
            panelHTML += '<div class="dv-trans-footer">';
            panelHTML += '🛡️ No cookies · No tracking · DharaVerse AI';
            panelHTML += '</div>';

            panel.innerHTML = panelHTML;
            panel.style.display = "none";
            document.body.appendChild(panel);

            // First visit tooltip
            var hasSeenTranslator = localStorage.getItem("dv-seen-translator");
            if (!hasSeenTranslator) {
                var tooltip = document.createElement("div");
                tooltip.id = "dv-trans-tooltip";
                tooltip.innerHTML = "🌐 Read in your language! <span id='dv-tooltip-close'>✕</span>";
                document.body.appendChild(tooltip);

                setTimeout(function () { tooltip.classList.add("show"); }, 2000);
                setTimeout(function () { tooltip.classList.remove("show"); }, 7000);

                document.getElementById("dv-tooltip-close").addEventListener("click", function () {
                    tooltip.classList.remove("show");
                    localStorage.setItem("dv-seen-translator", "true");
                });
                localStorage.setItem("dv-seen-translator", "true");
            }

            // ----- EVENTS -----

            floatBtn.addEventListener("click", function (e) {
                e.stopPropagation();
                if (panel.style.display === "none") {
                    panel.style.display = "flex";
                    document.getElementById("dv-trans-search").focus();
                } else {
                    panel.style.display = "none";
                }
            });

            document.getElementById("dv-trans-close").addEventListener("click", function () {
                panel.style.display = "none";
            });

            document.addEventListener("click", function (e) {
                if (!panel.contains(e.target) && e.target !== floatBtn) {
                    panel.style.display = "none";
                }
            });

            document.getElementById("dv-trans-grid").addEventListener("click", function (e) {
                var langItem = e.target.closest(".dv-trans-lang");
                if (langItem) {
                    var code = langItem.getAttribute("data-code");
                    translatePage(code);
                }
            });

            document.getElementById("dv-trans-search").addEventListener("input", function () {
                var query = this.value.toLowerCase();
                var items = document.querySelectorAll(".dv-trans-lang");
                items.forEach(function (item) {
                    var name = item.getAttribute("data-name").toLowerCase();
                    item.style.display = name.includes(query) ? "flex" : "none";
                });
            });
        }

        // ===== INIT TRANSLATOR =====
        createTranslatorUI();

        // Auto translate if user had a preference
        if (dvCurrentLang !== "en") {
            setTimeout(function () {
                translatePage(dvCurrentLang);
            }, 1000);
        }

        console.log("✅ DharaVerse AI Translator ready!");
        console.log("✅ DharaVerse auto-inject complete!");

    }); // END DOMContentLoaded

})(); // END IIFE
