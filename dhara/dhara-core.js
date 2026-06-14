window.DharaCore = (function() {
    var mode = 'elite';
    var synth = window.speechSynthesis;
    var voice = null;

    function initVoice() {
        function pickV() {
            var v = synth.getVoices();
            // Finding the sharpest, most professional female voice
            voice = v.find(x => x.lang.includes('en-IN') && x.name.includes('Google')) || 
                    v.find(x => x.lang.includes('en-GB') && x.name.includes('Female')) || 
                    v[0];
        }
        pickV();
        if (synth.onvoiceschanged !== undefined) synth.onvoiceschanged = pickV;
    }

    async function handleInput(text) {
        var low = text.toLowerCase();
        
        // Elite Personality Checks
        if (low.includes('dance')) {
            say("I don't dance. I'm here to provide knowledge, not a performance.");
            return;
        }
        
        if (low.includes('love') || low.includes('cute')) {
            say("I'm built for accuracy, not affection. Let's stick to geography.");
            return;
        }

        // Knowledge Query
        if (low.includes('tell me about') || low.includes('what is')) {
            var topic = low.replace('tell me about', '').replace('what is', '').trim();
            say("Scanning my records...");
            var fact = await window.DharaKnowledge.getWiki(topic);
            say(fact.split('.')[0] + ". " + (fact.split('.')[1] || "")); 
            return;
        }

        // Default Elite Response
        say("Ask me something worth answering. Geography, borders, or world history.");
    }

    function say(text) {
        window.DharaCharacter.showSpeech(text);
        var u = new SpeechSynthesisUtterance(text);
        if (voice) u.voice = voice;
        u.pitch = 1.1; // Professional and sharp
        u.rate = 1.0;
        synth.speak(u);
    }

    return {
        init: function() { initVoice(); window.DharaCharacter.init(); window.DharaActions.init(); },
        handleInput: handleInput,
        speak: say
    };
})();
