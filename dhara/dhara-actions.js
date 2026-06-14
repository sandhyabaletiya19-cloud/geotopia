// /dhara/dhara-actions.js
window.DharaActions = (function() {

    var isFullscreenMode = false;
    var isDragging = false;
    var dragOffsetX, dragOffsetY;
    var swipeStartX, swipeStartY, swipeStartTime;

    // ───────────────────────────────────────
    // DRAG & SWIPE
    // ───────────────────────────────────────
    function initDragAndSwipe() {
        var dhara = document.getElementById('dhara-living');
        var body = document.getElementById('dharaBody');
        if (!dhara || !body) return;

        function startDrag(e) {
            isDragging = false; // reset
            var touch = e.touches ? e.touches[0] : e;

            var rect = dhara.getBoundingClientRect();
            dragOffsetX = touch.clientX - rect.left;
            dragOffsetY = touch.clientY - rect.top;

            swipeStartX = touch.clientX;
            swipeStartY = touch.clientY;
            swipeStartTime = Date.now();

            isDragging = true;
            dhara.classList.add('dragging');
            e.preventDefault();
        }

        function doDrag(e) {
            if (!isDragging) return;
            var touch = e.touches ? e.touches[0] : e;

            var newX = touch.clientX - dragOffsetX;
            var newY = touch.clientY - dragOffsetY;

            // Keep her ALWAYS visible on screen
            newX = Math.max(10, Math.min(newX, window.innerWidth - 160));
            newY = Math.max(10, Math.min(newY, window.innerHeight - 230));

            dhara.style.left = newX + 'px';
            dhara.style.top = newY + 'px';
            dhara.style.bottom = 'auto';
            dhara.style.right = 'auto';

            e.preventDefault();
        }

        function endDrag(e) {
            if (!isDragging) return;
            isDragging = false;
            dhara.classList.remove('dragging');

            var touch = e.changedTouches ? e.changedTouches[0] : e;
            var deltaX = touch.clientX - swipeStartX;
            var deltaY = touch.clientY - swipeStartY;
            var deltaTime = Date.now() - swipeStartTime;
            var totalMove = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

            // Only handle as swipe if fast AND short distance (not a drag)
            if (deltaTime < 400 && totalMove > 80 && totalMove < 300) {
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

    // ───────────────────────────────────────
    // SWIPE HANDLER
    // ───────────────────────────────────────
    function handleSwipe(dx, dy) {
        var absX = Math.abs(dx);
        var absY = Math.abs(dy);

        if (absX > absY) {
            // Horizontal swipe
            if (dx > 0) {
                // Right swipe
                window.DharaCore.sayAndShow("Interesting.");
            } else {
                // Left swipe — move left a bit but STAY visible
                var currentX = window.DharaCharacter.getPosition().x || (window.innerWidth - 200);
                var newX = Math.max(50, currentX - 150);
                window.DharaCharacter.walkTo(newX);
            }
        } else {
            // Vertical swipe
            if (dy < 0) {
                // Up swipe
                window.DharaCore.sayAndShow("Noted.");
                window.DharaCharacter.setPose('idle');
            } else {
                // Down swipe — sit
                window.DharaCharacter.setPose('sitting');
                window.DharaCore.sayAndShow("Sitting. Not because you asked.");
                setTimeout(function() {
                    window.DharaCharacter.setPose('idle');
                }, 3000);
            }
        }
    }

    // ───────────────────────────────────────
    // FULLSCREEN
    // ───────────────────────────────────────
    function fullscreen() {
        if (isFullscreenMode) return;
        isFullscreenMode = true;

        var overlay = document.getElementById('dharaFullscreenOverlay');
        var exitBtn = document.getElementById('dharaExitFullscreen');

        if (overlay) overlay.classList.add('show');
        if (exitBtn) exitBtn.classList.add('visible');
        window.DharaCharacter.setSize('fullscreen');

        setTimeout(function() {
            window.DharaCore.sayAndShow("You have my full attention. Ask anything.", 6000);
        }, 800);
    }

    function exitFullscreen() {
        if (!isFullscreenMode) return;
        isFullscreenMode = false;

        var overlay = document.getElementById('dharaFullscreenOverlay');
        var exitBtn = document.getElementById('dharaExitFullscreen');

        if (overlay) overlay.classList.remove('show');
        if (exitBtn) exitBtn.classList.remove('visible');
        window.DharaCharacter.setSize('small');
        window.DharaCharacter.setPose('idle');

        // Restore position
        var dhara = document.getElementById('dhara-living');
        if (dhara) {
            dhara.style.left = (window.innerWidth - 200) + 'px';
            dhara.style.bottom = '20px';
            dhara.style.top = 'auto';
            dhara.style.right = 'auto';
        }
    }

    function shrink() {
        window.DharaCharacter.setSize('mini');
        window.DharaCore.sayAndShow("Smaller. Not less capable.");
    }

    function expand() {
        window.DharaCharacter.setSize('large');
        window.DharaCore.sayAndShow("Better view now.");
    }

    // ───────────────────────────────────────
    // RUN AWAY AS FOX
    // ONLY triggers from X button or voice command
    // ───────────────────────────────────────
    function runAwayAsFox() {
        var dhara = document.getElementById('dhara-living');
        var img = document.getElementById('dharaImage');
        var body = document.getElementById('dharaBody');
        if (!dhara || !img || !body) return;

        window.DharaCore.sayAndShow("Fine. You know where to find me.");

        setTimeout(function() {
            window.DharaCharacter.setSize('mini');
            img.src = window.DHARA_CONFIG.images.fox;
            body.className = 'dhara-body running-fox';

            dhara.style.transition = 'left 2.5s ease-in-out';
            dhara.style.left = '-200px';
            dhara.style.bottom = '20px';
            dhara.style.top = 'auto';

            setTimeout(function() {
                // Hide her
                dhara.style.display = 'none';

                // Show the fox button
                var showBtn = document.getElementById('dharaShowBtn');
                if (showBtn) showBtn.classList.add('visible');

                // Reset everything silently
                setTimeout(function() {
                    img.src = window.DHARA_CONFIG.images.idle;
                    body.className = 'dhara-body idle facing-right';
                    window.DharaCharacter.setSize('small');

                    // Reset position to right side
                    dhara.style.transition = 'none';
                    dhara.style.left = (window.innerWidth - 200) + 'px';
                    dhara.style.bottom = '20px';
                    dhara.style.top = 'auto';
                    dhara.style.right = 'auto';
                }, 500);

            }, 2600);
        }, 2000);
    }

    // ───────────────────────────────────────
    // COME HERE
    // ───────────────────────────────────────
    function comeHere() {
        window.DharaCore.sayAndShow("Coming.");
        var centerX = Math.floor(window.innerWidth / 2) - 70;
        window.DharaCharacter.walkTo(centerX);
    }

    // ───────────────────────────────────────
    // POINT AT ELEMENT
    // ───────────────────────────────────────
    function pointAt(element) {
        var pointer = document.getElementById('dharaPointer');
        if (!pointer || !element) return;

        var rect = element.getBoundingClientRect();
        pointer.style.left = (rect.left + rect.width / 2 - 30) + 'px';
        pointer.style.top = (rect.top - 70) + 'px';
        pointer.classList.add('show');
        element.classList.add('dhara-highlight');

        window.DharaCore.sayAndShow(window.DharaCore.pick([
            "This. Right here.",
            "Look at this.",
            "Worth your attention."
        ]));

        setTimeout(function() {
            pointer.classList.remove('show');
            element.classList.remove('dhara-highlight');
        }, 5000);
    }

    // ───────────────────────────────────────
    // HOVER REACTIONS
    // ───────────────────────────────────────
    function detectElementType(element) {
        var text = (element.textContent || '').toLowerCase().trim();
        var classes = (element.className || '').toLowerCase();
        var id = (element.id || '').toLowerCase();
        var combined = text + ' ' + classes + ' ' + id;

        if (window.DharaKnowledge) {
            for (var country in window.DharaKnowledge.COUNTRIES) {
                if (combined.indexOf(country) !== -1) {
                    return { type: 'country', country: country };
                }
            }
        }

        if (/quiz|test|trivia/.test(combined)) return { type: 'quiz' };
        if (/map|globe|earth|world/.test(combined)) return { type: 'map' };
        if (/premium|pro|upgrade|subscribe/.test(combined)) return { type: 'premium' };
        if (/login|sign in|signup|register/.test(combined)) return { type: 'login' };

        var tag = element.tagName.toLowerCase();
        if (tag === 'h1') return { type: 'heading' };
        if (tag === 'button') return { type: 'button' };

        return null;
    }

    function reactToElement(element) {
        if (!window.DharaCharacter || !window.DharaCore) return;
        if (window.DharaCharacter.isMoving()) return;
        if (window.DharaCore.isSpeaking()) return;
        if (isFullscreenMode) return;

        var detected = detectElementType(element);
        if (!detected) return;

        var reactions = {
            country: function() {
                var info = window.DharaKnowledge.COUNTRIES[detected.country];
                if (!info) return;
                window.DharaCharacter.walkToElement(element, function() {
                    window.DharaCore.sayAndShow(info.name + ". " + info.weird + ".");
                    window.DharaCharacter.leaveAfter(element, 6000);
                });
            },
            quiz: function() {
                window.DharaCharacter.walkToElement(element, function() {
                    window.DharaCore.sayAndShow("A quiz. Let us see what you actually know.");
                    window.DharaCharacter.leaveAfter(element, 5000);
                });
            },
            map: function() {
                window.DharaCharacter.walkToElement(element, function() {
                    window.DharaCore.sayAndShow("Maps. My territory.");
                    window.DharaCharacter.leaveAfter(element, 5000);
                });
            },
            premium: function() {
                window.DharaCharacter.walkToElement(element, function() {
                    window.DharaCore.sayAndShow("Premium exists for a reason. Consider it.");
                    window.DharaCharacter.leaveAfter(element, 5000);
                });
            },
            login: function() {
                window.DharaCharacter.walkToElement(element, function() {
                    window.DharaCore.sayAndShow("Sign in. I remember returning users.");
                    window.DharaCharacter.leaveAfter(element, 5000);
                });
            },
            heading: function() {
                window.DharaCharacter.walkToElement(element, function() {
                    window.DharaCore.sayAndShow("Noted.");
                    window.DharaCharacter.leaveAfter(element, 4000);
                });
            },
            button: function() {
                window.DharaCharacter.walkToElement(element, function() {
                    window.DharaCore.sayAndShow(window.DharaCore.pick([
                        "That exists for a reason.",
                        "Worth exploring."
                    ]));
                    window.DharaCharacter.leaveAfter(element, 4000);
                });
            }
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
                }, 1200);
            });
            el.addEventListener('mouseleave', function() {
                clearTimeout(hoverTimer);
            });
        });
    }

    // ───────────────────────────────────────
    // UI LISTENERS
    // ───────────────────────────────────────
    function attachUIListeners() {
        var bodyEl = document.getElementById('dharaBody');
        if (bodyEl) {
            bodyEl.addEventListener('click', function(e) {
                if (e.target.id === 'dharaHideBtn') return;
                if (isDragging) return;

                var menu = document.getElementById('dharaMenu');
                if (menu) menu.classList.toggle('show');

                window.DharaCharacter.setPose('poked');
                window.DharaCore.sayAndShow(window.DharaCore.pick([
                    "What?",
                    "I am listening.",
                    "Go ahead. Ask.",
                    "You have my attention."
                ]));
                setTimeout(function() {
                    window.DharaCharacter.setPose('idle');
                }, 800);
            });
        }

        // X button — ONLY way to trigger fox exit
        var hideBtn = document.getElementById('dharaHideBtn');
        if (hideBtn) {
            hideBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                runAwayAsFox();
            });
        }

        // Show button (fox icon) — bring her back
        var showBtn = document.getElementById('dharaShowBtn');
        if (showBtn) {
            showBtn.addEventListener('click', function() {
                var dhara = document.getElementById('dhara-living');
                if (dhara) {
                    dhara.style.display = 'block';
                }
                showBtn.classList.remove('visible');
                window.DharaCharacter.setPose('idle');
                window.DharaCore.sayAndShow("I am back. What do you need?");
            });
        }

        // Menu buttons
        document.querySelectorAll('.dhara-menu-btn').forEach(function(btn) {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                var action = btn.dataset.dharaAction;
                var menu = document.getElementById('dharaMenu');

                if (action === 'chat') {
                    var chatBar = document.getElementById('dharaChatBar');
                    if (chatBar) chatBar.classList.add('show');
                    setTimeout(function() {
                        var input = document.getElementById('dharaChatInput');
                        if (input) input.focus();
                    }, 300);
                    if (menu) menu.classList.remove('show');
                }
                else if (action === 'mic') {
                    if (window.DharaCore) window.DharaCore.startListening();
                    if (menu) menu.classList.remove('show');
                }
                else if (action === 'quiz') {
                    if (window.DharaKnowledge) {
                        var quizList = window.DharaKnowledge.QUIZ;
                        var q = quizList[Math.floor(Math.random() * quizList.length)];
                        window.DharaCore.setActiveQuiz(q);
                        window.DharaCore.sayAndShow("Let us test you. " + q.q, 8000);
                        var chatBar2 = document.getElementById('dharaChatBar');
                        if (chatBar2) chatBar2.classList.add('show');
                        if (menu) menu.classList.remove('show');
                    }
                }
                else if (action === 'fullscreen') {
                    fullscreen();
                    if (menu) menu.classList.remove('show');
                }
            });
        });

        // Exit fullscreen
        var exitFS = document.getElementById('dharaExitFullscreen');
        if (exitFS) exitFS.addEventListener('click', exitFullscreen);

        var overlay = document.getElementById('dharaFullscreenOverlay');
        if (overlay) overlay.addEventListener('click', exitFullscreen);

        // Chat send button
        var sendBtn = document.getElementById('dharaSendBtn');
        if (sendBtn) {
            sendBtn.addEventListener('click', function() {
                var input = document.getElementById('dharaChatInput');
                if (input && input.value.trim()) {
                    window.DharaCore.handleInput(input.value.trim());
                    input.value = '';
                }
            });
        }

        // Chat enter key
        var chatInput = document.getElementById('dharaChatInput');
        if (chatInput) {
            chatInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter' && e.target.value.trim()) {
                    window.DharaCore.handleInput(e.target.value.trim());
                    e.target.value = '';
                }
            });
        }

        // Close chat
        var closeChat = document.getElementById('dharaCloseChatBtn');
        if (closeChat) {
            closeChat.addEventListener('click', function() {
                var chatBar = document.getElementById('dharaChatBar');
                if (chatBar) chatBar.classList.remove('show');
            });
        }

        // Click outside closes menu
        document.addEventListener('click', function(e) {
            if (!e.target.closest('#dhara-living') && !e.target.closest('.dhara-chat-bar')) {
                var menu = document.getElementById('dharaMenu');
                if (menu) menu.classList.remove('show');
            }
        });
    }

    // ───────────────────────────────────────
    // GLOBAL API
    // ───────────────────────────────────────
    function setupGlobalAPI() {
        window.Dhara = {
            say: function(text) {
                window.DharaCore.sayAndShow(text);
            },
            ask: function(text) {
                window.DharaCore.handleInput(text);
            },
            walkTo: function(x) {
                window.DharaCharacter.walkTo(x);
            },
            comeHere: comeHere,
            fullscreen: fullscreen,
            exitFullscreen: exitFullscreen,
            shrink: shrink,
            expand: expand,
            leave: runAwayAsFox,
            hide: function() {
                var d = document.getElementById('dhara-living');
                if (d) d.style.display = 'none';
                var s = document.getElementById('dharaShowBtn');
                if (s) s.classList.add('visible');
            },
            show: function() {
                var d = document.getElementById('dhara-living');
                if (d) d.style.display = 'block';
                var s = document.getElementById('dharaShowBtn');
                if (s) s.classList.remove('visible');
            },
            reset: function() {
                localStorage.removeItem('dhara_mem_v8');
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

        // Rescan for new elements every 5 seconds
        setInterval(attachHoverListeners, 5000);
    }

    // ───────────────────────────────────────
    // PUBLIC API
    // ───────────────────────────────────────
    return {
        init: init,
        fullscreen: fullscreen,
        exitFullscreen: exitFullscreen,
        shrink: shrink,
        expand: expand,
        runAwayAsFox: runAwayAsFox,
        comeHere: comeHere,
        pointAt: pointAt,
        isFullscreen: function() { return isFullscreenMode; },
        isDragging: function() { return isDragging; }
    };

})();

console.log('🦊 Dhara Actions loaded');
