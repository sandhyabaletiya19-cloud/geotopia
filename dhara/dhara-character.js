// /dhara/dhara-character.js
// ═══════════════════════════════════════════════════════
// DHARA CHARACTER - Visual, poses, movement
// ═══════════════════════════════════════════════════════

window.DharaCharacter = (function() {

    var position = { x: 100, y: 0, mode: 'floor' };
    var isMoving = false;
    var speechTimeout;
    var currentPoseImage = null;

    // ───────────────────────────────────────
    // INJECT HTML
    // ───────────────────────────────────────
    function injectHTML() {
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
                '<input type="text" id="dharaChatInput" placeholder="Type your message...">' +
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
    // POSE & FACING
    // ───────────────────────────────────────
    function setPose(poseName) {
        var body = document.getElementById('dharaBody');
        if (!body) return;
        var facing = body.classList.contains('facing-left') ? 'facing-left' : 'facing-right';
        body.className = 'dhara-body ' + poseName + ' ' + facing;

        // Optionally swap image based on pose
        swapImageForPose(poseName);
    }

    function swapImageForPose(poseName) {
        var img = document.getElementById('dharaImage');
        if (!img) return;
        var cfg = window.DHARA_CONFIG;
        
        var poseImageMap = {
            'idle': cfg.images.idle,
            'walking': cfg.images.idle,
            'talking': cfg.images.talking || cfg.images.idle,
            'excited': cfg.images.happy || cfg.images.idle,
            'sad': cfg.images.sad || cfg.images.idle,
            'sitting': cfg.images.sitting || cfg.images.idle,
            'pointing': cfg.images.pointing || cfg.images.idle,
            'waving': cfg.images.waving || cfg.images.idle,
            'listening': cfg.images.idle,
            'dancing': cfg.images.happy || cfg.images.idle,
            'fox': cfg.images.fox
        };
        
        var targetImg = poseImageMap[poseName] || cfg.images.idle;
        if (img.src.indexOf(targetImg) === -1) {
            // Smooth transition
            img.style.opacity = '0.7';
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
        bubble.textContent = text;
        bubble.classList.add('show');
        clearTimeout(speechTimeout);
        var dur = duration || Math.max(3500, text.length * 65);
        speechTimeout = setTimeout(function() { bubble.classList.remove('show'); }, dur);
    }

    // ───────────────────────────────────────
    // MOVEMENT
    // ───────────────────────────────────────
    function walkTo(x, callback) {
        if (isMoving) return;
        isMoving = true;
        
        var dhara = document.getElementById('dhara-living');
        var direction = x > position.x ? 'right' : 'left';
        
        setFacing(direction);
        setPose('walking');
        dhara.classList.add('walking-fast');
        
        dhara.style.top = 'auto';
        dhara.style.bottom = '0';
        dhara.style.left = x + 'px';
        
        position = { x: x, y: 0, mode: 'floor' };
        
        setTimeout(function() {
            setPose('idle');
            dhara.classList.remove('walking-fast');
            isMoving = false;
            if (callback) callback();
        }, 2200);
    }

    function walkToElement(element, callback) {
        if (!element || isMoving) return;
        isMoving = true;
        
        var rect = element.getBoundingClientRect();
        var targetX = Math.max(50, Math.min(rect.left + rect.width / 2 - 70, window.innerWidth - 200));
        
        var dhara = document.getElementById('dhara-living');
        var direction = targetX > position.x ? 'right' : 'left';
        
        setFacing(direction);
        setPose('walking');
        dhara.classList.add('walking-fast');
        
        dhara.style.left = targetX + 'px';
        
        if (rect.top < window.innerHeight - 300 && rect.top > 50) {
            dhara.style.bottom = 'auto';
            dhara.style.top = Math.max(20, rect.top - 100) + 'px';
            position = { x: targetX, y: rect.top - 100, mode: 'sitting' };
        } else {
            dhara.style.bottom = '0';
            dhara.style.top = 'auto';
            position = { x: targetX, y: 0, mode: 'floor' };
        }
        
        setTimeout(function() {
            setPose('sitting');
            dhara.classList.remove('walking-fast');
            element.classList.add('dhara-highlight');
            isMoving = false;
            if (callback) callback();
        }, 2200);
    }

    function leaveAfter(element, delay) {
        setTimeout(function() {
            element.classList.remove('dhara-highlight');
            var newX = 100 + Math.random() * Math.max(100, window.innerWidth - 400);
            walkTo(newX);
        }, delay);
    }

    function randomWalk() {
        if (isMoving) return;
        var minX = 50;
        var maxX = Math.max(100, window.innerWidth - 200);
        var randomX = minX + Math.random() * (maxX - minX);
        walkTo(randomX);
    }

    // ───────────────────────────────────────
    // DANCE!
    // ───────────────────────────────────────
    function dance() {
        var body = document.getElementById('dharaBody');
        if (!body) return;
        var facing = body.classList.contains('facing-left') ? 'facing-left' : 'facing-right';
        body.className = 'dhara-body dancing ' + facing;
        swapImageForPose('dancing');
        
        var msg = "Look at me go! Woo!";
        showSpeech(msg);
        window.DharaCore.speak(msg);
        
        setTimeout(function() {
            setPose('idle');
        }, 6000);
    }

    // ───────────────────────────────────────
    // SIZE CHANGE
    // ───────────────────────────────────────
    function setSize(sizeName) {
        var dhara = document.getElementById('dhara-living');
        if (!dhara) return;
        dhara.classList.remove('size-mini', 'size-small', 'size-medium', 'size-large', 'size-fullscreen');
        dhara.classList.add('size-' + sizeName);
    }

    // ───────────────────────────────────────
    // INIT
    // ───────────────────────────────────────
    function init() {
        injectHTML();
    }

    return {
        init: init,
        setPose: setPose,
        setFacing: setFacing,
        showSpeech: showSpeech,
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
