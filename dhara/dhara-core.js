// /dhara/dhara-core.js
// ═══════════════════════════════════════════════════════
// DHARA CORE - Brain, Memory, Voice
// ═══════════════════════════════════════════════════════

window.DharaCore = (function() {

    var MEM_KEY = 'dhara_mem_v7';
    var mem;
    var activeQuiz = null;
    var mode = 'chat';
    var synth = window.speechSynthesis;
    var voice = null;
    var recognition = null;
    var isSpeaking = false;

    // ───────────────────────────────────────
    // MEMORY
    // ───────────────────────────────────────
    function loadMem() {
        try {
            mem = JSON.parse(localStorage.getItem(MEM_KEY)) || 
                  { name: null, streak: 0, visits: 1, lastSeen: null };
        } catch(e) {
            mem = { name: null, streak: 0, visits: 1, lastSeen: null };
        }
        mem.lastSeen = new Date().toISOString();
        saveMem();
    }

    function saveMem() {
        try { localStorage.setItem(MEM_KEY, JSON.stringify(mem)); } catch(e) {}
    }

    // ───────────────────────────────────────
    // VOICE
    // ───────────────────────────────────────
    function initVoice() {
        function pickV() {
            var v = synth.getVoices();
            var tests = [
                function(x) { return x.lang.includes('en-IN') && /female/i.test(x.name); },
                function(x) { return x.lang.includes('en-IN'); },
                function(x) { return x.lang.includes('en-GB') && /female|kate|hazel/i.test(x.name); },
                function(x) { return x.lang.includes('en-GB'); },
                function(x) { return x.lang.startsWith('en') && /female|samantha|karen|zira/i.test(x.name); },
                function(x) { return x.lang.startsWith('en'); }
            ];
            for (var i = 0; i < tests.length; i++) {
                var m = v.find(tests[i]);
                if (m) { voice = m; return; }
            }
            if (v.length) voice = v[0];
        }
        pickV();
        if (synth.onvoiceschanged !== undefined) synth.onvoiceschanged = pickV;

        var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SR) {
            recognition = new SR();
            recognition.continuous = false;
            recognition.interimResults = false;
            recognition.lang = 'en-US';

            recognition.onstart = function() {
                window.DharaCharacter.setPose('listening');
                var btn = document.querySelector('[data-dhara-action="mic"]');
                if (btn) btn.classList.add('recording');
            };
            recognition.onend = function() {
                window.DharaCharacter.setPose('idle');
                var btn = document.querySelector('[data-dhara-action="mic"]');
                if (btn) btn.classList.remove('recording');
            };
            recognition.onresult = function(e) {
                var txt = '';
                for (var i = 0; i < e.results.length; i++) {
                    if (e.results[i].isFinal) txt += e.results[i][0].transcript;
                }
                if (txt) {
                    // CHECK FOR VOICE COMMANDS FIRST
                    var lower = txt.toLowerCase();
                    if (/close dhara|stop dhara|go away|leave|bye dhara/i.test(lower)) {
                        window.DharaActions.runAwayAsFox();
                        return;
                    }
                    if (/come here|come to me/i.test(lower)) {
                        window.DharaActions.comeHere();
                        return;
                    }
                    if (/dance|party/i.test(lower)) {
                        window.DharaCharacter.dance();
                        return;
                    }
                    if (/big|full screen|fullscreen|grow/i.test(lower)) {
                        window.DharaActions.fullscreen();
                        return;
                    }
                    if (/small|shrink|tiny/i.test(lower)) {
                        window.DharaActions.shrink();
                        return;
                    }
                    handleInput(txt);
                }
            };
            recognition.onerror = function() {
                var btn = document.querySelector('[data-dhara-action="mic"]');
                if (btn) btn.classList.remove('recording');
                window.DharaCharacter.setPose('idle');
            };
        }
    }

    function cleanForSpeech(text) {
        return text
            .replace(/[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{1F900}-\u{1F9FF}]|[\u{1FA70}-\u{1FAFF}]/gu, '')
            .replace(/\*+/g, '').replace(/_/g, ' ').replace(/\s+/g, ' ').trim();
    }

    function speak(text, mimicMode) {
        return new Promise(function(resolve) {
            if (!synth) { resolve(); return; }
            synth.cancel();
            var cleanText = cleanForSpeech(text);
            if (!cleanText) { resolve(); return; }
            
            var u = new SpeechSynthesisUtterance(cleanText);
            if (voice) u.voice = voice;
            u.rate = mimicMode ? 1.5 : 1.0;
            u.pitch = mimicMode ? 1.9 : 1.15;
            u.volume = 0.95;

            u.onstart = function() {
                isSpeaking = true;
                if (!mimicMode) window.DharaCharacter.setPose('talking');
            };
            u.onend = function() {
                isSpeaking = false;
                window.DharaCharacter.setPose('idle');
                resolve();
            };
            u.onerror = function() {
                isSpeaking = false;
                window.DharaCharacter.setPose('idle');
                resolve();
            };
            synth.speak(u);
        });
    }

    function startListening() {
        if (recognition) {
            try { recognition.start(); } catch(e) {}
        }
    }

    // ───────────────────────────────────────
    // RESPONSE ENGINE
    // ───────────────────────────────────────
    function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

    function respond(input) {
        var low = input.toLowerCase().trim();

        if (activeQuiz) {
            var q = activeQuiz;
            activeQuiz = null;
            if (low.indexOf(q.a) !== -1) {
                window.DharaCharacter.setPose('excited');
                window.DharaActions.confetti();
                return "Yes! That's right! I'm actually impressed.";
            } else {
                return "Not quite. It was " + q.a + ". Want to try another?";
            }
        }

        if (/^(hi|hello|hey|morning|namaste)/i.test(low)) {
            if (!mem.name) return "Hi! I'm Dhara. What's your name?";
            return "Hey " + mem.name + "! Good to see you again.";
        }

        var nameM = low.match(/(?:i'm|i am|my name is|call me)\s+(\w+)/i);
        if (nameM) {
            var n = nameM[1];
            if (n.length > 1 && ['the','a','yes','no','ok'].indexOf(n.toLowerCase()) === -1) {
                mem.name = n.charAt(0).toUpperCase() + n.slice(1);
                saveMem();
                window.DharaCharacter.setPose('excited');
                return mem.name + "! Nice to meet you. Now we are proper friends.";
            }
        }

        if (/tell me about|what about|facts about/i.test(low)) {
            var c = window.DharaKnowledge.findCountry(low);
            if (!c) return "Which country? Tell me a name.";
            return c.name + "! " + c.fact + ". " + c.weird + ".";
        }

        if (/capital of/i.test(low)) {
            var c2 = window.DharaKnowledge.findCountry(low);
            if (!c2) return "Which country's capital?";
            return "The capital of " + c2.name + " is " + c2.capital + ".";
        }

        if (/who are you|what are you|are you ai/i.test(low)) {
            return "I'm Dhara. Twenty-seven, fox-eared, and I know every country on this planet.";
        }

        if (/smart|amazing|love you|cute|pretty/i.test(low)) {
            window.DharaCharacter.setPose('excited');
            window.DharaActions.showHearts();
            return "Aww, thank you. You just made my day.";
        }

        if (/bye|goodbye|see you/i.test(low)) {
            return "Bye! I'll be here when you come back.";
        }

        var keys = Object.keys(window.DharaKnowledge.COUNTRIES);
        var rc = window.DharaKnowledge.COUNTRIES[keys[Math.floor(Math.random() * keys.length)]];
        return "Fun fact: " + rc.weird + ". That's " + rc.name + ".";
    }

    // ───────────────────────────────────────
    // CHAT HANDLER
    // ───────────────────────────────────────
    var isProcessing = false;
    function handleInput(text) {
        if (!text || !text.trim() || isProcessing) return;
        isProcessing = true;

        if (mode === 'mimic') {
            window.DharaCharacter.showSpeech('Listen: "' + text + '"');
            window.DharaCharacter.setPose('excited');
            speak(text, true).then(function() {
                window.DharaCharacter.setPose('idle');
                isProcessing = false;
            });
        } else {
            var reply = respond(text);
            window.DharaCharacter.showSpeech(reply);
            speak(reply).then(function() {
                isProcessing = false;
            });
        }
    }

    // ───────────────────────────────────────
    // INIT
    // ───────────────────────────────────────
    function init() {
        loadMem();
        initVoice();
        window.DharaCharacter.init();
        window.DharaActions.init();

        // First greeting
        setTimeout(function() {
            window.DharaCharacter.setPose('waving');
            var greet = mem.name 
                ? "Hey " + mem.name + ", I'm back! Hover over anything, I'll come check it out."
                : "Hi! I'm Dhara. Click me, drag me around, or just say 'come here'!";
            window.DharaCharacter.showSpeech(greet, 6000);
            speak(greet);
            setTimeout(function() { window.DharaCharacter.setPose('idle'); }, 1500);
        }, 2500);

        // Random wandering
        setInterval(function() {
            if (isSpeaking || window.DharaCharacter.isMoving() || isProcessing) return;
            if (document.querySelector('.dhara-menu.show')) return;
            if (document.querySelector('.dhara-chat-bar.show')) return;
            if (window.DharaActions.isFullscreen()) return;
            
            if (Math.random() > 0.5) {
                window.DharaCharacter.randomWalk();
            } else {
                var msg = pick([
                    "Hover over something, I'll come check it out.",
                    "Click me. Drag me. I dare you.",
                    "Say 'come here' and I'll come to you.",
                    "Say 'dance' and I'll show off.",
                    "Say 'big' and I'll fill your screen!",
                    "I'm bored. Entertain me."
                ]);
                window.DharaCharacter.showSpeech(msg);
                speak(msg);
            }
        }, 35000);
    }

    // ───────────────────────────────────────
    // PUBLIC API
    // ───────────────────────────────────────
    return {
        init: init,
        speak: speak,
        respond: respond,
        handleInput: handleInput,
        startListening: startListening,
        getMem: function() { return mem; },
        saveMem: saveMem,
        setMode: function(m) { mode = m; },
        getMode: function() { return mode; },
        setActiveQuiz: function(q) { activeQuiz = q; },
        pick: pick,
        isSpeaking: function() { return isSpeaking; }
    };

})();

console.log('🦊 Dhara Core loaded');
