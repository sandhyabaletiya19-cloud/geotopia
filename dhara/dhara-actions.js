// /dhara/dhara-actions.js
// ═══════════════════════════════════════════════════════
// DHARA ACTIONS - Clicks, swipes, drag, fullscreen, fox
// ═══════════════════════════════════════════════════════

window.DharaActions = (function() {

    var isFullscreenMode = false;
    var isDragging = false;
    var dragStartX, dragStartY, dragOffsetX, dragOffsetY;
    var swipeStartX, swipeStartY, swipeStartTime;

    // ───────────────────────────────────────
    // DRAG & SWIPE
    // ───────────────────────────────────────
    function initDragAndSwipe() {
        var dhara = document.getElementById('dhara-living');
        var body = document.getElementById('dharaBody');
        if (!dhara || !body) return;

        function startDrag(e) {
            isDragging = true;
            dhara.classList.add('dragging');
            
            var touch = e.touches ? e.touches[0] : e;
            dragStartX = touch.clientX;
            dragStartY = touch.clientY;
            
            var rect = dhara.getBoundingClientRect();
            dragOffsetX = touch.clientX - rect.left;
            dragOffsetY = touch.clientY - rect.top;

            // Track for swipe
            swipeStartX = touch.clientX;
            swipeStartY = touch.clientY;
            swipeStartTime = Date.now();

            e.preventDefault();
        }

        function doDrag(e) {
            if (!isDragging) return;
            var touch = e.touches ? e.touches[0] : e;
            
            var newX = touch.clientX - dragOffsetX;
            var newY = touch.clientY - dragOffsetY;
            
            // Constrain to viewport
            newX = Math.max(0, Math.min(newX, window.innerWidth - dhara.offsetWidth));
            newY = Math.max(0, Math.min(newY, window.innerHeight - dhara.offsetHeight));
            
            dhara.style.left = newX + 'px';
            dhara.style.top = newY + 'px';
            dhara.style.bottom = 'auto';
            
            e.preventDefault();
        }

        function endDrag(e) {
            if (!isDragging) return;
            isDragging = false;
            dhara.classList.remove('dragging');

            // Check for swipe
            var touch = e.changedTouches ? e.changedTouches[0] : e;
            var deltaX = touch.clientX - swipeStartX;
            var deltaY = touch.clientY - swipeStartY;
            var deltaTime = Date.now() - swipeStartTime;
            
            // Fast swipe detection (under 300ms, more than 100px)
            if (deltaTime < 400 && (Math.abs(deltaX) > 100 || Math.abs(deltaY) > 100)) {
                handleSwipe(deltaX, deltaY);
            }
        }

        body.addEventListener('mousedown', startDrag);
        body.addEventListener('touchstart', startDrag, { passive: false });
        
        document.addEventListener('mousemove', doDrag);
        document.addEventListener('touchmove', doDrag, { passive: false });
        
        document.addEventListener('mouseup', endDrag);
        document.addEventListener('touchend', endDrag);
    }

    function handleSwipe(dx, dy) {
        var absX = Math.abs(dx);
        var absY = Math.abs(dy);
        var dhara = document.getElementById('dhara-living');
        
        if (absX > absY) {
            // Horizontal swipe
            if (dx > 0) {
                // Right swipe - spin!
                dhara.classList.add('spinning');
                var msg = "Wheee! Spinning!";
                window.DharaCharacter.showSpeech(msg);
                window.DharaCore.speak(msg);
                setTimeout(function() { dhara.classList.remove('spinning'); }, 2000);
            } else {
                // Left swipe - go away
                var msg2 = "Okay okay, I'm going!";
                window.DharaCharacter.showSpeech(msg2);
                window.DharaCore.speak(msg2);
                window.DharaCharacter.walkTo(50);
            }
        } else {
            // Vertical swipe
            if (dy < 0) {
                // Up swipe - jump
                window.DharaCharacter.setPose('excited');
                var msg3 = "Whee! Watch me jump!";
                window.DharaCharacter.showSpeech(msg3);
                window.DharaCore.speak(msg3);
                setTimeout(function() { window.DharaCharacter.setPose('idle'); }, 2000);
            } else {
                // Down swipe - sit
                window.DharaCharacter.setPose('sitting');
                var msg4 = "Taking a seat!";
                window.DharaCharacter.showSpeech(msg4);
                window.DharaCore.speak(msg4);
            }
        }
    }

    // ───────────────────────────────────────
    // FULLSCREEN MODE (Homepage takeover)
    // ───────────────────────────────────────
    function fullscreen() {
        if (isFullscreenMode) return;
        isFullscreenMode = true;
        
        var overlay = document.getElementById('dharaFullscreenOverlay');
        var exitBtn = document.getElementById('dharaExitFullscreen');
        
        overlay.classList.add('show');
        exitBtn.classList.add('visible');
        window.DharaCharacter.setSize('fullscreen');
        window.DharaCharacter.setPose('waving');
        
        setTimeout(function() {
            var msg = "Welcome to my world! I'm taking over the screen. Click anything and I'll show you around!";
            window.DharaCharacter.showSpeech(msg, 6000);
            window.DharaCore.speak(msg);
        }, 800);
    }

    function exitFullscreen() {
        if (!isFullscreenMode) return;
        isFullscreenMode = false;
        
        var overlay = document.getElementById('dharaFullscreenOverlay');
        var exitBtn = document.getElementById('dharaExitFullscreen');
        
        overlay.classList.remove('show');
        exitBtn.classList.remove('visible');
        window.DharaCharacter.setSize('small');
        window.DharaCharacter.setPose('idle');
    }

    function shrink() {
        window.DharaCharacter.setSize('mini');
        var msg = "I'm tiny now!";
        window.DharaCharacter.showSpeech(msg);
        window.DharaCore.speak(msg);
    }

    function expand() {
        window.DharaCharacter.setSize('large');
        var msg = "Look how big I am!";
        window.DharaCharacter.showSpeech(msg);
        window.DharaCore.speak(msg);
    }

    // ───────────────────────────────────────
    // RUN AWAY AS FOX 🦊💨
    // ───────────────────────────────────────
    function runAwayAsFox() {
        var dhara = document.getElementById('dhara-living');
        var img = document.getElementById('dharaImage');
        var body = document.getElementById('dharaBody');
        if (!dhara || !img) return;

        var msg = "Bye! I'm going fox mode!";
        window.DharaCharacter.showSpeech(msg);
        window.DharaCore.speak(msg);

        setTimeout(function() {
            // Transform to fox
            window.DharaCharacter.setSize('mini');
            img.src = window.DHARA_CONFIG.images.fox;
            body.className = 'dhara-body running-fox';
            
            // Run off screen
            dhara.style.transition = 'all 2s cubic-bezier(0.45, 0, 0.55, 1)';
            dhara.style.left = -200 + 'px';
            dhara.style.bottom = '0';
            dhara.style.top = 'auto';
            
            setTimeout(function() {
                dhara.style.display = 'none';
                document.getElementById('dharaShowBtn').classList.add('visible');
                // Reset
                setTimeout(function() {
                    img.src = window.DHARA_CONFIG.images.idle;
                    window.DharaCharacter.setSize('small');
                    window.DharaCharacter.setPose('idle');
                }, 500);
            }, 2000);
        }, 1500);
    }

    // ───────────────────────────────────────
    // COME HERE (centers her on screen)
    // ───────────────────────────────────────
    function comeHere() {
        var msg = "Coming!";
        window.DharaCharacter.showSpeech(msg);
        window.DharaCore.speak(msg);
        
        var centerX = window.innerWidth / 2 - 70;
        window.DharaCharacter.walkTo(centerX);
    }

    // ───────────────────────────────────────
    // EFFECTS
    // ───────────────────────────────────────
    function confetti() {
        var area = document.getElementById('dharaConfettiArea');
        if (!area) return;
        var colors = ['#ff6b9d', '#ffd93d', '#6bcf7f', '#4d96ff', '#c66fbc'];
        for (var i = 0; i < 40; i++) {
            var p = document.createElement('div');
            p.className = 'dhara-conf';
            p.style.left = Math.random() * 100 + '%';
            p.style.background = colors[Math.floor(Math.random() * colors.length)];
            p.style.setProperty('--dx', (Math.random() * 200 - 100) + 'px');
            p.style.animationDelay = Math.random() * 0.5 + 's';
            p.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
            area.appendChild(p);
        }
        setTimeout(function() { area.innerHTML = ''; }, 3500);
    }

    function showHearts() {
        var world = document.getElementById('dhara-living');
        if (!world) return;
        var emojis = ['💖', '💕', '✨'];
        for (var i = 0; i < 5; i++) {
            (function(idx) {
                setTimeout(function() {
                    var h = document.createElement('div');
                    h.className = 'dhara-effect';
                    h.textContent = emojis[Math.floor(Math.random() * emojis.length)];
                    h.style.left = (40 + Math.random() * 60) + 'px';
                    h.style.bottom = '180px';
                    world.appendChild(h);
                    setTimeout(function() { h.remove(); }, 2000);
                }, idx * 200);
            })(i);
        }
    }

    // ───────────────────────────────────────
    // POINT AT ELEMENT (Click this! Click this!)
    // ───────────────────────────────────────
    function pointAt(element) {
        var pointer = document.getElementById('dharaPointer');
        if (!pointer || !element) return;
        
        var rect = element.getBoundingClientRect();
        pointer.style.left = (rect.left + rect.width / 2 - 30) + 'px';
        pointer.style.top = (rect.top - 70) + 'px';
        pointer.classList.add('show');
        element.classList.add('dhara-highlight');
        
        var msg = window.DharaCore.pick([
            "Click this! Click it!",
            "This one! Right here!",
            "Look! This thing!",
            "Press this, press this!",
            "Don't miss this one!"
        ]);
        window.DharaCharacter.showSpeech(msg);
        window.DharaCore.speak(msg);
        
        setTimeout(function() {
            pointer.classList.remove('show');
            element.classList.remove('dhara-highlight');
        }, 5000);
    }

    // ───────────────────────────────────────
    // SMART HOVER REACTIONS
    // ───────────────────────────────────────
    function detectElementType(element) {
        var text = (element.textContent || '').toLowerCase().trim();
        var classes = (element.className || '').toLowerCase();
        var id = (element.id || '').toLowerCase();
        var combined = text + ' ' + classes + ' ' + id;

        for (var country in window.DharaKnowledge.COUNTRIES) {
            if (combined.indexOf(country) !== -1) {
                return { type: 'country', country: country };
            }
        }

        if (/quiz|test|trivia/i.test(combined)) return { type: 'quiz' };
        if (/map|globe|earth|world/i.test(combined)) return { type: 'map' };
        if (/spin|rotate/i.test(combined)) return { type: 'spin' };
        if (/mystery|riddle|puzzle/i.test(combined)) return { type: 'mystery' };
        if (/premium|pro|upgrade|subscribe/i.test(combined)) return { type: 'premium' };
        if (/login|sign in|signup|register/i.test(combined)) return { type: 'login' };
        if (/start|begin|play|launch|explore/i.test(text)) return { type: 'startBtn' };
        
        var tag = element.tagName.toLowerCase();
        if (tag === 'h1') return { type: 'heading-main' };
        if (tag === 'button') return { type: 'button' };
        
        return null;
    }

    function reactToElement(element) {
        if (window.DharaCharacter.isMoving() || window.DharaCore.isSpeaking()) return;
        if (isFullscreenMode) return;
        
        var detected = detectElementType(element);
        if (!detected) return;
        
        var pick = window.DharaCore.pick;
        
        var reactions = {
            country: function() {
                var info = window.DharaKnowledge.COUNTRIES[detected.country];
                if (!info) return;
                window.DharaCharacter.walkToElement(element, function() {
                    var msg = info.name + "! " + info.weird + ".";
                    window.DharaCharacter.showSpeech(msg);
                    window.DharaCore.speak(msg);
                    window.DharaCharacter.leaveAfter(element, 6000);
                });
            },
            quiz: function() { window.DharaCharacter.walkToElement(element, function() {
                var msg = pick(["A quiz! Finally something I can beat you at.", "Quiz time!"]);
                window.DharaCharacter.showSpeech(msg); window.DharaCore.speak(msg);
                window.DharaCharacter.leaveAfter(element, 5000);
            });},
            map: function() { window.DharaCharacter.walkToElement(element, function() {
                var msg = "Maps! My favorite thing.";
                window.DharaCharacter.showSpeech(msg); window.DharaCore.speak(msg);
                window.DharaCharacter.leaveAfter(element, 5000);
            });},
            premium: function() { window.DharaCharacter.walkToElement(element, function() {
                var msg = "Premium! Treat yourself.";
                window.DharaCharacter.showSpeech(msg); window.DharaCore.speak(msg);
                window.DharaCharacter.leaveAfter(element, 5000);
            });},
            startBtn: function() { window.DharaCharacter.walkToElement(element, function() {
                var msg = pick(["Press it!", "I dare you to click it.", "Click this!"]);
                window.DharaCharacter.showSpeech(msg); window.DharaCore.speak(msg);
                window.DharaCharacter.leaveAfter(element, 4000);
            });},
            button: function() { window.DharaCharacter.walkToElement(element, function() {
                var msg = pick(["Click it!", "This button is calling your name."]);
                window.DharaCharacter.showSpeech(msg); window.DharaCore.speak(msg);
                window.DharaCharacter.leaveAfter(element, 4000);
            });},
            'heading-main': function() { window.DharaCharacter.walkToElement(element, function() {
                var msg = "I like this heading. Bold choice.";
                window.DharaCharacter.showSpeech(msg); window.DharaCore.speak(msg);
                window.DharaCharacter.leaveAfter(element, 5000);
            });}
        };
        
        if (reactions[detected.type]) reactions[detected.type]();
    }

    function attachHoverListeners() {
        var selectors = 'h1, button, a[href], .card, .feature, .tile, .feature-card, .stat-box, .info-card';
        var elements = document.querySelectorAll(selectors);
        
        elements.forEach(function(el) {
            if (el.closest('#dhara-living, .dhara-chat-bar, .dhara-show-btn, #dv-translator-panel, #dv-translator-btn, .dhara-confetti-area, .dhara-fullscreen-overlay')) return;
            if (el.__dharaListenerAttached) return;
            el.__dharaListenerAttached = true;
            
            var hoverTimer;
            el.addEventListener('mouseenter', function() {
                hoverTimer = setTimeout(function() {
                    reactToElement(el);
                }, 1000);
            });
            el.addEventListener('mouseleave', function() {
                clearTimeout(hoverTimer);
            });
        });
    }

    // ───────────────────────────────────────
    // EVENT LISTENERS
    // ───────────────────────────────────────
    function attachUIListeners() {
        // Character click (toggle menu)
        var bodyEl = document.getElementById('dharaBody');
        if (bodyEl) {
            bodyEl.addEventListener('click', function(e) {
                if (e.target.id === 'dharaHideBtn') return;
                if (isDragging) return;
                
                var menu = document.getElementById('dharaMenu');
                menu.classList.toggle('show');
                
                window.DharaCharacter.setPose('poked');
                var msg = window.DharaCore.pick([
                    "Hey! What was that for?",
                    "Did you just poke me?",
                    "Easy! I'm walking here.",
                    "Hello to you too."
                ]);
                window.DharaCharacter.showSpeech(msg);
                window.DharaCore.speak(msg);
                setTimeout(function() { window.DharaCharacter.setPose('idle'); }, 600);
            });
        }

        // Hide button
        document.getElementById('dharaHideBtn')?.addEventListener('click', function(e) {
            e.stopPropagation();
            runAwayAsFox();
        });

        // Show button
        document.getElementById('dharaShowBtn')?.addEventListener('click', function() {
            document.getElementById('dhara-living').style.display = 'block';
            document.getElementById('dharaShowBtn').classList.remove('visible');
            window.DharaCharacter.setPose('waving');
            var msg = "I'm back! Did you miss me?";
            window.DharaCharacter.showSpeech(msg);
            window.DharaCore.speak(msg);
            setTimeout(function() { window.DharaCharacter.setPose('idle'); }, 1000);
        });

        // Menu buttons
        document.querySelectorAll('.dhara-menu-btn').forEach(function(btn) {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                var action = btn.dataset.dharaAction;
                
                if (action === 'chat') {
                    document.getElementById('dharaChatBar').classList.add('show');
                    setTimeout(function() {
                        document.getElementById('dharaChatInput').focus();
                    }, 300);
                    document.getElementById('dharaMenu').classList.remove('show');
                }
                else if (action === 'mic') {
                    window.DharaCore.startListening();
                    document.getElementById('dharaMenu').classList.remove('show');
                }
                else if (action === 'quiz') {
                    var q = window.DharaKnowledge.QUIZ[Math.floor(Math.random() * window.DharaKnowledge.QUIZ.length)];
                    window.DharaCore.setActiveQuiz(q);
                    var qmsg = "Quiz time! " + q.q;
                    window.DharaCharacter.showSpeech(qmsg);
                    window.DharaCore.speak(qmsg);
                    document.getElementById('dharaChatBar').classList.add('show');
                }
                else if (action === 'fullscreen') {
                    fullscreen();
                }
                else if (action === 'dance') {
                    window.DharaCharacter.dance();
                }
            });
        });

        // Exit fullscreen
        document.getElementById('dharaExitFullscreen')?.addEventListener('click', exitFullscreen);
        document.getElementById('dharaFullscreenOverlay')?.addEventListener('click', exitFullscreen);

        // Chat
        document.getElementById('dharaSendBtn')?.addEventListener('click', function() {
            var input = document.getElementById('dharaChatInput');
            window.DharaCore.handleInput(input.value);
            input.value = '';
        });

        document.getElementById('dharaChatInput')?.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                window.DharaCore.handleInput(e.target.value);
                e.target.value = '';
            }
        });

        document.getElementById('dharaCloseChatBtn')?.addEventListener('click', function() {
            document.getElementById('dharaChatBar').classList.remove('show');
        });

        // Click outside closes menu
        document.addEventListener('click', function(e) {
            if (!e.target.closest('#dhara-living') && !e.target.closest('.dhara-chat-bar')) {
                document.getElementById('dharaMenu')?.classList.remove('show');
            }
        });
    }

    // ───────────────────────────────────────
    // GLOBAL API
    // ───────────────────────────────────────
    function setupGlobalAPI() {
        window.Dhara = {
            say: function(text) { 
                window.DharaCharacter.showSpeech(text); 
                window.DharaCore.speak(text); 
            },
            walkTo: window.DharaCharacter.walkTo,
            pointAt: function(selector) {
                var el = typeof selector === 'string' ? document.querySelector(selector) : selector;
                if (el) pointAt(el);
            },
            comeHere: comeHere,
            dance: window.DharaCharacter.dance,
            fullscreen: fullscreen,
            exitFullscreen: exitFullscreen,
            shrink: shrink,
            expand: expand,
            runAway: runAwayAsFox,
            hide: function() {
                document.getElementById('dhara-living').style.display = 'none';
                document.getElementById('dharaShowBtn').classList.add('visible');
            },
            show: function() {
                document.getElementById('dhara-living').style.display = 'block';
                document.getElementById('dharaShowBtn').classList.remove('visible');
            },
            reset: function() {
                localStorage.removeItem('dhara_mem_v7');
                location.reload();
            }
        };
    }

    // ───────────────────────────────────────
    // INIT
    // ───────────────────────────────────────
    function init() {
        initDragAndSwipe();
        attachUIListeners();
        attachHoverListeners();
        setupGlobalAPI();
        
        // Re-scan for new elements
        setInterval(attachHoverListeners, 5000);
    }

    return {
        init: init,
        fullscreen: fullscreen,
        exitFullscreen: exitFullscreen,
        shrink: shrink,
        expand: expand,
        runAwayAsFox: runAwayAsFox,
        comeHere: comeHere,
        confetti: confetti,
        showHearts: showHearts,
        pointAt: pointAt,
        isFullscreen: function() { return isFullscreenMode; },
        isDragging: function() { return isDragging; }
    };

})();

console.log('🦊 Dhara Actions loaded');
