// ═══════════════════════════════════════════════════════
// DHARA - MAIN ENGINE
// Connects: Character + Voice + Knowledge + Memory
// No external APIs. Pure browser magic.
// ═══════════════════════════════════════════════════════

const Dhara = (() => {

    let isOpen = false;
    let mode = 'reply'; // 'reply' or 'mimic'
    let memory = {};
    let idleTimer = null;
    let blinkTimer = null;
    let character = null;
    let isFirstMessage = true;
    let isProcessing = false;

    // ── INITIALIZE ──
    function init() {
        memory = DharaMemory.getMemory();
        createWidget();
        setupEventListeners();
        startIdleAnimations();

        // Initialize voice
        DharaVoice.init({
            onMouthChange: setMouthShape,
            onSpeakStart: () => setCharacterState('talking'),
            onSpeakEnd: () => setCharacterState('idle'),
            onListenStart: () => {
                setCharacterState('listening');
                document.querySelector('.dhara-voice-btn')?.classList.add('recording');
            },
            onListenEnd: () => {
                setCharacterState('idle');
                document.querySelector('.dhara-voice-btn')?.classList.remove('recording');
            },
            onResult: (text, isFinal) => {
                if (isFinal) {
                    handleVoiceResult(text);
                } else {
                    // Show interim text
                    const input = document.querySelector('.dhara-text-input');
                    if (input) input.value = text;
                }
            }
        });

        console.log('🦊 Dhara initialized! Memory:', memory);
    }

    // ── CREATE THE WIDGET HTML ──
    function createWidget() {
        const widget = document.createElement('div');
        widget.id = 'dhara-widget';

        widget.innerHTML = `
            <!-- Collapsed Bubble -->
            <div class="dhara-bubble" id="dhara-bubble" title="Talk to Dhara 🦊">
            </div>

            <!-- Expanded Window -->
            <div class="dhara-window" id="dhara-window">
                
                <!-- Header with Character -->
                <div class="dhara-header">
                    <div class="dhara-header-bar">
                        <div class="dhara-header-info">
                            <div class="dhara-status-dot"></div>
                            <span class="dhara-name-label">Dhara</span>
                            <span class="dhara-streak-badge" id="dhara-streak">🔥 ${memory.streak || 0}</span>
                        </div>
                        <button class="dhara-close-btn" id="dhara-close" title="Close">✕</button>
                    </div>

                    <!-- THE CHARACTER -->
                    <div class="dhara-character" id="dhara-character">
                        
                        <!-- Rain Cloud (sad mood) -->
                        <div class="dhara-rain-cloud"></div>
                        
                        <!-- Fox Ears -->
                        <div class="dhara-ear-left"></div>
                        <div class="dhara-ear-right"></div>
                        
                        <!-- Hair -->
                        <div class="dhara-hair"></div>
                        <div class="dhara-hair-left"></div>
                        <div class="dhara-hair-right"></div>
                        
                        <!-- Face -->
                        <div class="dhara-face">
                            <!-- Eyebrows -->
                            <div class="dhara-eyebrow-left"></div>
                            <div class="dhara-eyebrow-right"></div>
                            
                            <!-- Eyes -->
                            <div class="dhara-eyes">
                                <div class="dhara-eye"></div>
                                <div class="dhara-eye"></div>
                            </div>
                            <div class="dhara-eye-shine left"></div>
                            <div class="dhara-eye-shine right"></div>
                            
                            <!-- Blush -->
                            <div class="dhara-blush-left"></div>
                            <div class="dhara-blush-right"></div>
                            
                            <!-- Nose -->
                            <div class="dhara-nose"></div>
                            
                            <!-- Mouth -->
                            <div class="dhara-mouth">
                                <div class="dhara-mouth-shape"></div>
                            </div>
                            
                            <!-- Sunglasses (high streak) -->
                            <div class="dhara-sunglasses"></div>
                        </div>
                        
                        <!-- Compass Necklace -->
                        <div class="dhara-compass"></div>
                        
                        <!-- Body -->
                        <div class="dhara-body">
                            <div class="dhara-jacket"></div>
                        </div>
                        
                        <!-- Floating Globe -->
                        <div class="dhara-globe" id="dhara-globe" title="Spin me!"></div>
                    </div>

                    <div class="dhara-mood-bar"></div>
                </div>

                <!-- Chat Messages -->
                <div class="dhara-messages" id="dhara-messages">
                </div>

                <!-- Typing Indicator -->
                <div class="dhara-typing" id="dhara-typing">
                    <div class="dhara-typing-dot"></div>
                    <div class="dhara-typing-dot"></div>
                    <div class="dhara-typing-dot"></div>
                </div>

                <!-- Input Area -->
                <div class="dhara-input-area">
                    <button class="dhara-mode-toggle ${mode === 'mimic' ? 'mimic-mode' : 'reply-mode'}" 
                            id="dhara-mode-btn" 
                            title="Switch: Mimic ↔ Reply">
                        ${mode === 'mimic' ? '🦜' : '🧠'}
                    </button>
                    <input type="text" 
                           class="dhara-text-input" 
                           id="dhara-input" 
                           placeholder="${mode === 'mimic' ? 'Say something for Dhara to mimic...' : 'Ask Dhara anything about the world...'}"
                           autocomplete="off"
                           maxlength="200">
                    <button class="dhara-voice-btn" id="dhara-voice-btn" title="Hold to speak">
                        🎤
                    </button>
                    <button class="dhara-send-btn" id="dhara-send-btn" title="Send">
                        ➤
                    </button>
                </div>

                <!-- Mode Bar -->
                <div class="dhara-mode-bar">
                    <div class="dhara-mode-indicator">
                        <div class="dhara-mode-dot ${mode === 'reply' ? 'reply' : 'mimic'}"></div>
                        <span id="dhara-mode-label">${mode === 'mimic' ? 'Mimic Mode — I repeat what you say!' : 'Reply Mode — Ask me anything'}</span>
                    </div>
                </div>

                <!-- Confetti container -->
                <div class="dhara-confetti" id="dhara-confetti"></div>
            </div>
        `;

        document.body.appendChild(widget);
        character = document.getElementById('dhara-character');

        // Apply mood
        const currentMood = DharaMemory.calculateMood(memory);
        applyMood(currentMood);

        // Check if user closed last time
        const wasClosed = localStorage.getItem('dhara_closed');
        if (wasClosed === 'true') {
            // Don't auto-open, but reset for new day
            const lastClosed = localStorage.getItem('dhara_closed_date');
            const today = new Date().toDateString();
            if (lastClosed !== today) {
                localStorage.setItem('dhara_closed', 'false');
            }
        }
    }

    // ── EVENT LISTENERS ──
    function setupEventListeners() {
        // Bubble click → Open
        document.getElementById('dhara-bubble')?.addEventListener('click', () => {
            toggleOpen(true);
            if (isFirstMessage) {
                sendGreeting();
                isFirstMessage = false;
            }
        });

        // Close button
        document.getElementById('dhara-close')?.addEventListener('click', () => {
            toggleOpen(false);
            localStorage.setItem('dhara_closed', 'true');
            localStorage.setItem('dhara_closed_date', new Date().toDateString());
        });

        // Send button
        document.getElementById('dhara-send-btn')?.addEventListener('click', sendMessage);

        // Enter key
        document.getElementById('dhara-input')?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage();
        });

        // Input change → activate send button
        document.getElementById('dhara-input')?.addEventListener('input', (e) => {
            const sendBtn = document.getElementById('dhara-send-btn');
            if (e.target.value.trim()) {
                sendBtn?.classList.add('active');
            } else {
                sendBtn?.classList.remove('active');
            }
        });

        // Mode toggle
        document.getElementById('dhara-mode-btn')?.addEventListener('click', toggleMode);

        // Voice button (hold to speak)
        const voiceBtn = document.getElementById('dhara-voice-btn');
        if (voiceBtn) {
            voiceBtn.addEventListener('mousedown', () => DharaVoice.startListening());
            voiceBtn.addEventListener('mouseup', () => DharaVoice.stopListening());
            voiceBtn.addEventListener('touchstart', (e) => { e.preventDefault(); DharaVoice.startListening(); });
            voiceBtn.addEventListener('touchend', () => DharaVoice.stopListening());
        }

        // Globe click
        document.getElementById('dhara-globe')?.addEventListener('click', () => {
            pokeReaction('globe');
        });

        // Character poke
        document.getElementById('dhara-character')?.addEventListener('click', (e) => {
            if (e.target.id !== 'dhara-globe') {
                pokeReaction('character');
            }
        });

        // Track mouse for eye follow
        document.addEventListener('mousemove', handleEyeFollow);
    }

    // ── TOGGLE OPEN/CLOSE ──
    function toggleOpen(open) {
        isOpen = open;
        const bubble = document.getElementById('dhara-bubble');
        const window = document.getElementById('dhara-window');

        if (open) {
            bubble.style.display = 'none';
            window.classList.add('active');
        } else {
            bubble.style.display = 'flex';
            window.classList.remove('active');
        }
    }

    // ── SEND GREETING ──
    function sendGreeting() {
        const greeting = DharaKnowledge.generateResponse('hi', memory);
        addMessageToChat('dhara', greeting);
        DharaVoice.speak(greeting);
    }

    // ── SEND MESSAGE ──
    function sendMessage() {
        const input = document.getElementById('dhara-input');
        const text = input?.value?.trim();
        if (!text || isProcessing) return;

        isProcessing = true;
        input.value = '';
        document.getElementById('dhara-send-btn')?.classList.remove('active');

        // Add user message
        addMessageToChat('user', text);
        DharaMemory.addMessage('user', text);

        // Check for name
        const detectedName = DharaMemory.detectName(text, memory);
        if (detectedName && !memory.name) {
            memory.name = detectedName;
            DharaMemory.saveMemory(memory);
        }

        // Show typing
        showTyping(true);
        setCharacterState('thinking');

        // Simulate thinking delay (400-1200ms for realism)
        const thinkTime = 400 + Math.random() * 800;

        setTimeout(() => {
            showTyping(false);

            if (mode === 'mimic') {
                // MIMIC MODE: Repeat in funny voice
                addMessageToChat('dhara', `*repeats in chipmunk voice* "${text}" 🦜`);
                setCharacterState('excited');
                DharaVoice.mimicSpeak(text).then(() => {
                    setCharacterState('idle');
                    isProcessing = false;
                });
            } else {
                // REPLY MODE: Smart response
                const response = DharaKnowledge.generateResponse(text, memory);
                addMessageToChat('dhara', response);
                DharaMemory.addMessage('dhara', response);
                DharaMemory.saveMemory(memory);

                // Check for special reactions
                if (response.includes('CORRECT') || response.includes('YES!') || response.includes('RIGHT!')) {
                    triggerConfetti();
                    setCharacterState('excited');
                }

                DharaVoice.speak(response).then(() => {
                    setCharacterState('idle');
                    isProcessing = false;
                });
            }
        }, thinkTime);
    }

    // ── HANDLE VOICE RESULT ──
    function handleVoiceResult(text) {
        const input = document.getElementById('dhara-input');
        if (input) {
            input.value = text;
            document.getElementById('dhara-send-btn')?.classList.add('active');
            // Auto send after voice
            setTimeout(sendMessage, 300);
        }
    }

    // ── ADD MESSAGE TO CHAT ──
    function addMessageToChat(role, content) {
        const container = document.getElementById('dhara-messages');
        if (!container) return;

        const msg = document.createElement('div');
        msg.className = `dhara-msg ${role}`;
        msg.textContent = content;

        container.appendChild(msg);
        container.scrollTop = container.scrollHeight;

        // Reset idle timer
        resetIdleTimer();
    }

    // ── SHOW/HIDE TYPING ──
    function showTyping(show) {
        const typing = document.getElementById('dhara-typing');
        if (typing) {
            typing.classList.toggle('active', show);
        }
    }

    // ── MODE TOGGLE ──
    function toggleMode() {
        mode = mode === 'reply' ? 'mimic' : 'reply';

        const btn = document.getElementById('dhara-mode-btn');
        const label = document.getElementById('dhara-mode-label');
        const input = document.getElementById('dhara-input');
        const dot = document.querySelector('.dhara-mode-dot');

        if (btn) {
            btn.className = `dhara-mode-toggle ${mode === 'mimic' ? 'mimic-mode' : 'reply-mode'}`;
            btn.textContent = mode === 'mimic' ? '🦜' : '🧠';
        }

        if (label) {
            label.textContent = mode === 'mimic'
                ? 'Mimic Mode — I repeat what you say!'
                : 'Reply Mode — Ask me anything';
        }

        if (input) {
            input.placeholder = mode === 'mimic'
                ? 'Say something for Dhara to mimic...'
                : 'Ask Dhara anything about the world...';
        }

        if (dot) {
            dot.className = `dhara-mode-dot ${mode === 'mimic' ? 'mimic' : 'reply'}`;
        }

        // Dhara reacts to mode switch
        const modeMsg = mode === 'mimic'
            ? "Mimic mode ON! Say something and I'll copy you in my special voice 🦜"
            : "Reply mode ON! Ask me anything about the world 🌍";

        addMessageToChat('dhara', modeMsg);
        DharaVoice.speak(modeMsg);
    }

    // ── CHARACTER STATES ──
    function setCharacterState(state) {
        if (!character) return;

        // Remove all states
        character.className = 'dhara-character';

        switch (state) {
            case 'idle':
                break;
            case 'talking':
                character.classList.add('talking');
                break;
            case 'listening':
                character.classList.add('listening');
                break;
            case 'thinking':
                character.classList.add('suspicious');
                break;
            case 'excited':
                character.classList.add('excited', 'happy');
                break;
            case 'sad':
                character.classList.add('sad');
                break;
            case 'sassy':
                character.classList.add('sassy');
                break;
        }
    }

    // ── MOUTH SHAPES ──
    function setMouthShape(shape) {
        if (!character) return;
        // Remove all mouth classes
        character.classList.remove('mouth-open', 'mouth-wide', 'mouth-small', 'mouth-smile', 'mouth-grin');
        if (shape) character.classList.add(shape);
    }

    // ── POKE REACTION ──
    function pokeReaction(target) {
        const reactions = target === 'globe'
            ? [
                "Hey! That's my globe. Spin your own 🌍",
                "Careful! That globe contains 195 countries of knowledge.",
                "You just spun my globe. Now I'm dizzy AND wise."
            ]
            : [
                "Hey! Personal space. I'm made of code but still 🦊",
                "Did you just poke a fox-eared geography goddess? Bold.",
                "Touch the globe, not me! I'm not a touchscreen... wait."
            ];

        const reaction = reactions[Math.floor(Math.random() * reactions.length)];
        addMessageToChat('dhara', reaction);

        // Visual reaction
        setCharacterState('sassy');
        const window = document.getElementById('dhara-window');
        window?.classList.add('shake');
        setTimeout(() => {
            window?.classList.remove('shake');
            setCharacterState('idle');
        }, 500);

        DharaVoice.speak(reaction);
    }

    // ── EYE FOLLOW CURSOR ──
    function handleEyeFollow(e) {
        if (!character || !isOpen) return;

        const rect = character.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;

        if (e.clientX < centerX - 50) {
            character.classList.add('look-left');
            character.classList.remove('look-right');
        } else if (e.clientX > centerX + 50) {
            character.classList.add('look-right');
            character.classList.remove('look-left');
        } else {
            character.classList.remove('look-left', 'look-right');
        }
    }

    // ── MOOD APPLICATION ──
    function applyMood(mood) {
        if (!character) return;

        switch (mood) {
            case 'EXCITED':
                character.classList.add('excited', 'happy');
                if (memory.streak >= 5) character.classList.add('streak-high');
                break;
            case 'DRAMATIC_SAD':
                character.classList.add('sad');
                break;
            default:
                break;
        }
    }

    // ── IDLE ANIMATIONS ──
    function startIdleAnimations() {
        // Blink every 3-5 seconds
        blinkTimer = setInterval(() => {
            if (!character || DharaVoice.isSpeaking) return;
            character.classList.add('blink');
            setTimeout(() => character.classList.remove('blink'), 150);
        }, 3000 + Math.random() * 2000);
    }

    function resetIdleTimer() {
        clearTimeout(idleTimer);

        // After 10 seconds of silence
        idleTimer = setTimeout(() => {
            if (!isOpen || DharaVoice.isSpeaking) return;

            const idleMessages = [
                "Still there? My globe is getting bored 🌍",
                "The silence is louder than a volcano. Ask me something!",
                "*yawns* I have 195 countries of facts waiting. Don't waste my knowledge.",
                "I'll just be here... knowing everything... alone... dramatically..."
            ];

            const msg = idleMessages[Math.floor(Math.random() * idleMessages.length)];
            addMessageToChat('dhara', msg);
            DharaVoice.speak(msg);
        }, 15000);
    }

    // ── CONFETTI EFFECT ──
    function triggerConfetti() {
        const container = document.getElementById('dhara-confetti');
        if (!container) return;

        const colors = ['#ff8c00', '#e74c3c', '#2ecc71', '#3498db', '#f39c12', '#9b59b6'];

        for (let i = 0; i < 30; i++) {
            const piece = document.createElement('div');
            piece.className = 'confetti-piece';
            piece.style.left = Math.random() * 100 + '%';
            piece.style.background = colors[Math.floor(Math.random() * colors.length)];
            piece.style.setProperty('--drift', (Math.random() * 100 - 50) + 'px');
            piece.style.animationDelay = Math.random() * 0.5 + 's';
            piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
            container.appendChild(piece);
        }

        setTimeout(() => { container.innerHTML = ''; }, 2500);
    }

    // ── PAGE CONTEXT AWARENESS ──
    function getPageContext() {
        const path = window.location.pathname.toLowerCase();

        if (path.includes('/country/')) return 'country-page';
        if (path.includes('/map')) return 'map-page';
        if (path.includes('/quiz') || path.includes('/game')) return 'game-page';
        if (path.includes('/globe') || path.includes('/spin')) return 'globe-page';
        if (path === '/' || path === '') return 'homepage';
        return 'other';
    }

    // ── PUBLIC API ──
    return {
        init,
        toggleOpen,
        getMemory: () => memory,
        getMode: () => mode,
        sendMessage,
        resetMemory: () => {
            DharaMemory.reset();
            memory = DharaMemory.getMemory();
            console.log('🦊 Memory reset!');
        }
    };
})();
