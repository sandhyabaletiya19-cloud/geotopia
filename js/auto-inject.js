// js/auto-inject.js
(function() {
    console.log('🔵 auto-inject.js loaded!');

    // ✅ FIXED: Absolute paths - works from ANY page, ANY depth!
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
    // ALL DOM FEATURES BELOW
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
            if (href &&
                href.startsWith("http") &&
                !href.includes("dharaverse.com")) {
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
                    setTimeout(function () {
                        copyBtn.innerText = "Copy";
                    }, 2000);
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

        // ========== 11. PAGE LOAD TIME (Dev Helper) ==========
        var loadTime = performance.now();
        console.log("⚡ Page ready in: " + Math.round(loadTime) + "ms");


        console.log("✅ DharaVerse auto-inject complete!");
    });

})();
