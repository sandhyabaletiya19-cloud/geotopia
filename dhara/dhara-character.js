// /dhara/dhara-character.js
// ═══════════════════════════════════════════════════════
// DHARA CHARACTER - Poses, Movement, Speech, Animation
// ═══════════════════════════════════════════════════════

window.DharaCharacter = (function() {

    var position = { x: null, y: 20 };
    var isMoving = false;
    var speechTimeout = null;
    var walkInterval = null;
    var leaveTimer = null;

    // ───────────────────────────────────────
    // INJECT HTML
    // ───────────────────────────────────────
    function injectHTML() {
        if (document.getElementById('dhara-living')) return;
        
        var cfg = window.DHARA_CONFIG;
        var html =
            '<div id="dhara-living">' +
                '<button class="dhara-hide-x" id="dharaHideBtn">✕</button>' +
                '<div class="dhara-speech" id="dharaSpeech"></div>' +
                '<div class="dhara-body idle facing-right" id="dharaBody">' +
                    '<img src="' + cfg.defaultImage + '" alt="Dhara" id="dharaImage" class="notranslate" onerror="this.src=\'' + cfg.images.idle + '\'">' +
                '</div>' +
                '<div class="dhara-menu" id="dharaMenu">' +
                    '<button class="dhara-menu-btn" data-dhara-action="chat" title="Chat">💬</button>' +
                    '<button class="dhara-menu-btn" data-dhara-action="mic" title="Talk">🎤</button>' +
                    '<button class="dhara-menu-btn" data-dhara-action="quiz" title="Quiz">🧠</button>' +
                    '<button class="dhara-menu-btn" data-dhara-action="fullscreen" title="Big">⛶</button>' +
                    '<button class="dhara-menu-btn" data-dhara-action="dance" title="Dance">💃</button>' +
                '</div>' +
            '</div>' +
            '<div class="dhara-chat-bar" id="dharaChatBar">' +
                '<input type="text" id="dharaChatInput" placeholder="Talk to Dhara...">' +
                '<button class="dhara-send" id="dharaSendBtn">➤</button>' +
                '<button class="dhara-close" id="dharaCloseChatBtn">✕</button>' +
            '</div>' +
            '<button class="dhara-show-btn" id="dharaShowBtn">🦊</button>' +
            '<div class="dhara-confetti-area" id="dharaConfettiArea"></div>' +
            '<div class="dhara-pointer-arrow" id="dharaPointer"></div>' +
            '<div class="dhara-fullscreen-overlay" id="dharaFullscreenOverlay"></div>' +
            '<button class="dhara-exit-fullscreen" id="dharaExitFullscreen">✕</button>';

        var wrapper = document.createElement('div');
        wrapper.innerHTML = html;
        while (wrapper.firstChild) {
            document.body.appendChild(wrapper.firstChild);
        }
    }

    // ───────────────────────────────────────
    // SET STARTING POSITION
    // ───────────────────────────────────────
    function setStartPosition() {
        var dhara = document.getElementById('dhara-living');
        if (!dhara) return;

        // Start at right side of screen
        var startX = window.innerWidth - 200;
        position.x = startX;
        position.y = 20;

        dhara.style.position = 'fixed';
        dhara.style.left = startX + 'px';
        dhara.style.bottom = '20px';
        dhara.style.top = 'auto';
        dhara.style.right = 'auto';
        dhara.style.width = '140px';
        dhara.style.height = '220px';
        dhara.style.zIndex = '999999';
        dhara.style.display = 'block';
        dhara.style.pointerEvents = 'auto';
        
        console.log('✅ Dhara positioned at x:', startX);
    }

    // ───────────────────────────────────────
    // POSE & FACING
    // ───────────────────────────────────────
    function setPose(poseName) {
        var body = document.getElementById('dharaBody');
        if (!body) return;
        var facing = body.classList.contains('facing-left') ? 'facing-left' : 'facing-right';
        body.className = 'dhara-body ' + poseName + ' ' + facing;
        swapImageForPose(poseName);
    }

    function swapImageForPose(poseName) {
        var img = document.getElementById('dharaImage');
        if (!img) return;
        var cfg = window.DHARA_CONFIG;

        var poseImageMap = {
            'idle':      cfg.images.idle,
            'walking':   cfg.images.idle,
            'talking':   cfg.images.talking  || cfg.images.idle,
            'excited':   cfg.images.happy    || cfg.images.idle,
            'poked':     cfg.images.happy    || cfg.images.idle,
            'sad':       cfg.images.sad      || cfg.images.idle,
            'sitting':   cfg.images.sitting  || cfg.images.idle,
            'pointing':  cfg.images.pointing || cfg.images.idle,
            'waving':    cfg.images.waving   || cfg.images.idle,
            'listening': cfg.images.idle,
            'dancing':   cfg.images.happy    || cfg.images.idle,
            'fox':       cfg.images.fox
        };

        var targetImg = poseImageMap[poseName] || cfg.images.idle;
        
        // Only swap if different image
        var currentSrc = img.src.split('/').pop();
        var targetSrc = targetImg.split('/').pop();
        
        if (currentSrc !== targetSrc) {
            img.style.opacity = '0';
            setTimeout(function() {
                img.src = targetImg;
                img.style.opacity = '1';
            }, 150);
        }
    }

    function setFacing(direction) {
        var body = document.getElementById('dharaBody');
        if (!body) return;
        body.classList.remove('facing-left', 'facing-right');
        body.classList.add('facing-' + direction);
    }

    // ───────────────────────────────────────
    // SPEECH BUBBLE
    // ───────────────────────────────────────
    function showSpeech(text, duration) {
        var bubble = document.getElementById('dharaSpeech');
        if (!bubble) return;
        
        if (speechTimeout) clearTimeout(speechTimeout);
        
        bubble.textContent = text;
        bubble.classList.add('show');
        
        var dur = duration || 5000;
        speechTimeout = setTimeout(function() {
            bubble.classList.remove('show');
        }, dur);
    }

    function hideSpeech() {
        var bubble = document.getElementById('dharaSpeech');
        if (bubble) bubble.classList.remove('show');
        if (speechTimeout) clearTimeout(speechTimeout);
    }

    // ───────────────────────────────────────
    // WALK TO X POSITION
    // ───────────────────────────────────────
    function walkTo(targetX, callback) {
        var dhara = document.getElementById('dhara-living');
        if (!dhara) { if (callback) callback(); return; }

        // Clamp target to viewport
        var maxX = window.innerWidth - 160;
        targetX = Math.max(10, Math.min(targetX, maxX));

        if (isMoving) {
            // Already moving - just update position
            if (callback) callback();
            return;
        }

        isMoving = true;
        setPose('walking');

        // Set facing direction
        if (targetX < position.x) {
            setFacing('left');
        } else {
            setFacing('right');
        }

        // Smooth CSS transition walk
        dhara.style.transition = 'left 1.5s cubic-bezier(0.45, 0, 0.55, 1)';
        dhara.style.left = targetX + 'px';
        dhara.style.bottom = '20px';
        dhara.style.top = 'auto';

        position.x = targetX;

        // After walk completes
        setTimeout(function() {
            isMoving = false;
            setPose('idle');
            dhara.style.transition = 'all 0.3s ease';
            if (callback) callback();
        }, 1600);
    }

    // ───────────────────────────────────────
    // WALK TO ELEMENT
    // ───────────────────────────────────────
    function walkToElement(element, callback) {
        if (!element) { if (callback) callback(); return; }
        
        var rect = element.getBoundingClientRect();
        var targetX = rect.left + (rect.width / 2) - 70;
        
        // Clamp to viewport
        targetX = Math.max(10, Math.min(targetX, window.innerWidth - 160));
        
        walkTo(targetX, callback);
    }

    // ───────────────────────────────────────
    // LEAVE AFTER DELAY
    // ───────────────────────────────────────
    function leaveAfter(element, delay) {
        if (leaveTimer) clearTimeout(leaveTimer);
        leaveTimer = setTimeout(function() {
            randomWalk();
        }, delay || 5000);
    }

    // ───────────────────────────────────────
    // RANDOM WALK (Idle wandering)
    // ───────────────────────────────────────
    function randomWalk() {
        if (isMoving) return;
        
        var maxX = window.innerWidth - 160;
        var minX = 10;
        
        // Pick random position
        var targetX = Math.floor(Math.random() * (maxX - minX)) + minX;
        
        walkTo(targetX, function() {
            setPose('idle');
        });
    }

    // ───────────────────────────────────────
    // DANCE
    // ───────────────────────────────────────
    function dance() {
        if (isMoving) return;
        
        setPose('dancing');
        var msg = window.DharaCore.pick([
            "Watch my moves!",
            "I was born to dance!",
            "Geography and dance — my two talents!",
            "Don't judge my moves!"
        ]);
        showSpeech(msg, 4000);
        window.DharaCore.speak(msg);

        // Dance for 4 seconds then stop
        setTimeout(function() {
            setPose('idle');
        }, 4000);
    }

    // ───────────────────────────────────────
    // SET SIZE
    // ───────────────────────────────────────
    function setSize(sizeName) {
        var dhara = document.getElementById('dhara-living');
        if (!dhara) return;
        
        var sizes = window.DHARA_CONFIG.sizes;
        
        // Remove all size classes
        dhara.classList.remove('size-mini', 'size-small', 'size-medium', 'size-large', 'size-fullscreen');
        dhara.classList.add('size-' + sizeName);

        // Apply inline size for non-fullscreen
        if (sizeName !== 'fullscreen') {
            var s = sizes[sizeName];
            if (s) {
                dhara.style.width = s.w + 'px';
                dhara.style.height = s.h + 'px';
            }
        }
    }

    // ───────────────────────────────────────
    // INIT
    // ───────────────────────────────────────
    function init() {
        injectHTML();
        
        // Small delay to ensure DOM is ready
        setTimeout(function() {
            setStartPosition();
        }, 100);
    }

    // ───────────────────────────────────────
    // PUBLIC API
    // ───────────────────────────────────────
    return {
        init: init,
        setPose: setPose,
        setFacing: setFacing,
        showSpeech: showSpeech,
        hideSpeech: hideSpeech,
        walkTo: walkTo,
        walkToElement: walkToElement,
        leaveAfter: leaveAfter,
        randomWalk: randomWalk,
        dance: dance,
        setSize: setSize,
        isMoving: function() { return isMoving; },
        getPosition: function() { return position; }
    };

})();

console.log('🦊 Dhara Character loaded');
