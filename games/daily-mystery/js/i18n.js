/* ═══════════════════════════════════════════════════════════
   DHARAVERSE MAP MYSTERY — INTERNATIONALIZATION (i18n)
   File: /games/daily-mystery/js/i18n.js
   
   DEPENDS ON: Nothing (standalone)
   USED BY: app.js, ui.js, share.js, streak.js
   
   EXPORTS:
     window.i18n = {
       lang:      string   — current language code
       detect()   → sets i18n.lang based on browser
       t(key)     → returns translated string
       t(key, vars) → returns translated string with {var} replaced
       setLang(code) → manually switch language
       getLang()  → returns current language code
     }
   ═══════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  // ═══════════════════════════════════════════════
  // 1. LANGUAGE STRINGS
  // ═══════════════════════════════════════════════

  var STRINGS = {

    // ─────────────────────────────────────────
    // ENGLISH (default fallback)
    // ─────────────────────────────────────────
    en: {
      // Header
      game_title: 'Map Mystery',
      day_label: 'Day #{n}',
      back_games: 'Games',

      // Input
      guess_placeholder: 'Type a country name...',
      guess_button: 'Guess',
      guess_button_arrow: 'Guess →',

      // Attempts
      attempts_left: '{n} guesses left',
      attempts_left_one: '1 guess left — make it count!',
      attempts_left_zero: 'No guesses left',
      empty_state_title: 'Your guesses will appear here',
      empty_state_sub: 'Start with any country!',

      // Column headers
      col_country: 'Country',
      col_distance: 'Distance',
      col_direction: 'Dir.',
      col_continent: 'Zone',
      col_size: 'Size',

      // Feedback
      correct_title: 'You got it!',
      correct_message: 'Found in {n}/6 tries! 🎉',
      lost_title: 'So close!',
      lost_message: 'The answer was:',
      streak_label: '{n} day streak',

      // Distance tiers
      dist_burning: 'BURNING!',
      dist_hot: 'HOT!',
      dist_warm: 'WARM',
      dist_cold: 'COLD',
      dist_freezing: 'FREEZING',
      dist_arctic: 'ARCTIC!',
      dist_bullseye: 'BULLSEYE!',

      // Direction
      dir_north: 'North',
      dir_northeast: 'Northeast',
      dir_east: 'East',
      dir_southeast: 'Southeast',
      dir_south: 'South',
      dir_southwest: 'Southwest',
      dir_west: 'West',
      dir_northwest: 'Northwest',
      dir_found: 'Found it!',

      // Continent
      continent_exact: 'Same continent! ✅',
      continent_hemi: 'Same hemisphere',
      continent_wrong: 'Wrong side!',

      // Size
      size_bigger: 'Target is {n}x bigger',
      size_smaller: 'Target is {n}x smaller',
      size_same: 'Same size!',

      // Game over
      share_button: 'Share Result 📤',
      stats_button: 'Full Stats 📊',
      next_game_label: 'Next mystery in:',
      play_again_tomorrow: 'Come back tomorrow!',

      // Share text
      share_header: '🌍 Map Mystery #{day}',
      share_result: '{n}/6 🎯',
      share_failed: 'X/6 😅',
      share_streak: '🔥 {n} day streak',
      share_link: 'Play: dharaverse.com/games/daily-mystery',
      share_copied: 'Copied to clipboard! 📋',
      share_error: 'Could not share. Try copying manually.',

      // Streak milestones
      streak_3: 'On a Roll 🎯',
      streak_7: 'Explorer 🗺️',
      streak_30: 'Cartographer 🧭',
      streak_100: 'Globe Master 🌍',
      streak_365: 'Legend 🏆',
      streak_milestone: 'New badge unlocked: {badge}!',

      // Stats sidebar
      stats_title: 'Your Stats',
      stats_played: 'Played',
      stats_win_rate: 'Win Rate',
      stats_streak: 'Streak 🔥',
      stats_best: 'Best',
      stats_distribution: 'Guess Distribution',

      // Toasts
      toast_invalid: 'Not a valid country name',
      toast_duplicate: 'You already guessed {name}!',
      toast_game_over: 'Game is already over for today',
      toast_loading: 'Loading...',
      toast_error: 'Something went wrong. Try refreshing.',

      // News
      news_loading: 'Loading today\'s hint...',
      news_fallback: 'Today\'s mystery country made headlines recently 📰',
      news_error: 'Hint unavailable today',

      // Modal
      modal_title: 'How to Play 🗺️',
      modal_intro: 'Guess the mystery country in <strong>6 tries</strong>. A new country every day!',
      modal_step1_title: 'Type any country',
      modal_step1_desc: 'Start with any guess — no hints given upfront',
      modal_step2_title: 'Get distance feedback',
      modal_step2_desc: 'See how many km away your guess is from the target',
      modal_step3_title: 'Follow the arrow',
      modal_step3_desc: 'Arrow points toward the mystery country',
      modal_step4_title: 'Continent clue',
      modal_step4_desc: '🟢 Same continent  🟡 Same hemisphere  🔴 Wrong side',
      modal_play: 'Let\'s Play! 🚀',

      // Loading
      loading_text: 'Finding today\'s mystery country...',

      // Country page
      country_capital: 'Capital',
      country_continent: 'Continent',
      country_population: 'Population',
      country_area: 'Area',
      country_neighbors: 'Neighbors',
      country_fun_fact: 'Fun Fact',
      country_back: '← Back to game',

      // Result page
      result_title_won: 'Nailed It! 🎉',
      result_title_lost: 'Better Luck Tomorrow! 😅',
      result_attempts: 'Found in {n}/6 tries',
      result_failed: 'Used all 6 tries',
      result_country_link: 'Learn about {name} →',
      result_play_tomorrow: 'New puzzle tomorrow at midnight UTC'
    },

    // ─────────────────────────────────────────
    // HINDI (हिंदी)
    // ─────────────────────────────────────────
    hi: {
      game_title: 'मैप मिस्ट्री',
      day_label: 'दिन #{n}',
      back_games: 'गेम्स',
      guess_placeholder: 'देश का नाम टाइप करें...',
      guess_button: 'गेस',
      guess_button_arrow: 'गेस →',
      attempts_left: '{n} मौके बाकी',
      attempts_left_one: 'आखिरी मौका — सोच के खेलो!',
      attempts_left_zero: 'कोई मौका नहीं बचा',
      empty_state_title: 'आपके गेस यहाँ दिखेंगे',
      empty_state_sub: 'किसी भी देश से शुरू करो!',
      col_country: 'देश',
      col_distance: 'दूरी',
      col_direction: 'दिशा',
      col_continent: 'क्षेत्र',
      col_size: 'आकार',
      correct_title: 'सही जवाब! 🎉',
      correct_message: '{n}/6 में मिला!',
      lost_title: 'अगली बार!',
      lost_message: 'सही जवाब था:',
      streak_label: '{n} दिन की स्ट्रीक',
      dist_burning: 'बहुत करीब!',
      dist_hot: 'गरम!',
      dist_warm: 'गुनगुना',
      dist_cold: 'ठंडा',
      dist_freezing: 'बर्फीला',
      dist_arctic: 'आर्कटिक!',
      dist_bullseye: 'बिल्कुल सही!',
      share_button: 'शेयर करो 📤',
      stats_button: 'पूरे स्टैट्स 📊',
      next_game_label: 'अगली मिस्ट्री:',
      share_header: '🌍 मैप मिस्ट्री #{day}',
      share_result: '{n}/6 🎯',
      share_failed: 'X/6 😅',
      share_streak: '🔥 {n} दिन की स्ट्रीक',
      share_copied: 'कॉपी हो गया! 📋',
      toast_invalid: 'ये तो कोई देश नहीं है',
      toast_duplicate: '{name} पहले ही बोल चुके हो!',
      toast_game_over: 'आज का गेम खत्म हो चुका है',
      news_loading: 'आज का हिंट लोड हो रहा है...',
      news_fallback: 'आज का देश हाल ही में खबरों में था 📰',
      modal_title: 'कैसे खेलें 🗺️',
      modal_intro: 'रोज़ एक नया देश — <strong>6 मौकों</strong> में पहचानो!',
      modal_play: 'चलो खेलते हैं! 🚀',
      loading_text: 'आज का रहस्यमय देश ढूंढ रहे हैं...',
      stats_title: 'तुम्हारे स्टैट्स',
      stats_played: 'खेले',
      stats_win_rate: 'जीत %',
      stats_streak: 'स्ट्रीक 🔥',
      stats_best: 'बेस्ट',
      stats_distribution: 'गेस डिस्ट्रीब्यूशन',
      result_title_won: 'शाबाश! 🎉',
      result_title_lost: 'कल फिर आना! 😅'
    },

    // ─────────────────────────────────────────
    // HINGLISH (Hindi + English mix)
    // Popular with Indian youth
    // ─────────────────────────────────────────
    hinglish: {
      game_title: 'Map Mystery',
      day_label: 'Day #{n}',
      back_games: 'Games',
      guess_placeholder: 'Country ka naam type karo...',
      guess_button: 'Guess',
      guess_button_arrow: 'Guess →',
      attempts_left: '{n} guesses baaki',
      attempts_left_one: 'Last guess — soch ke khelo!',
      attempts_left_zero: 'Koi guess nahi bacha',
      empty_state_title: 'Tumhare guesses yahan dikhenge',
      empty_state_sub: 'Kisi bhi country se shuru karo!',
      col_country: 'Country',
      col_distance: 'Doori',
      col_direction: 'Dir.',
      col_continent: 'Zone',
      col_size: 'Size',
      correct_title: 'Sahi pakde hain! 🎉',
      correct_message: '{n}/6 mein pakda! Kya baat hai!',
      lost_title: 'Arey yaar!',
      lost_message: 'Answer tha:',
      streak_label: '{n} din ki streak',
      dist_burning: 'BAHUT CLOSE!',
      dist_hot: 'GARAM!',
      dist_warm: 'THODA PAAS',
      dist_cold: 'THANDA',
      dist_freezing: 'BARF!',
      dist_arctic: 'MARS PE HAI KYA!',
      dist_bullseye: 'SEEDHA NISHANA!',
      share_button: 'Share Kar 📤',
      stats_button: 'Full Stats 📊',
      next_game_label: 'Next mystery:',
      share_header: '🌍 Map Mystery #{day}',
      share_result: '{n}/6 🎯',
      share_failed: 'X/6 😅',
      share_streak: '🔥 {n} din streak',
      share_copied: 'Copy ho gaya bhai! 📋',
      toast_invalid: 'Bhai ye kaunsa country hai?',
      toast_duplicate: '{name} toh pehle bol chuke ho!',
      toast_game_over: 'Aaj ka game khatam bhai',
      news_loading: 'Hint load ho raha hai...',
      news_fallback: 'Aaj ka country recently news mein tha 📰',
      modal_title: 'Kaise Khele 🗺️',
      modal_intro: 'Roz ek naya country — <strong>6 chances</strong> mein guess karo!',
      modal_play: 'Chalo Shuru! 🚀',
      loading_text: 'Aaj ka mystery country dhundh rahe hain...',
      stats_title: 'Tumhare Stats',
      stats_played: 'Khele',
      stats_win_rate: 'Win %',
      stats_streak: 'Streak 🔥',
      stats_best: 'Best',
      stats_distribution: 'Guess Distribution',
      result_title_won: 'Kya Baat Hai! 🎉',
      result_title_lost: 'Kal Aana Phir! 😅',

      // Hinglish-specific fun messages
      toast_close_guess: 'Bhai paas mein hi hai! 🔥',
      toast_far_guess: 'Itna door? Flight book kar! ✈️',
      toast_wrong_continent: 'Galat continent pe ho bhai! 🗺️',
      streak_3: 'On Fire 🎯',
      streak_7: 'Explorer Bhai 🗺️',
      streak_30: 'Cartographer Sahab 🧭',
      streak_100: 'Globe Master Ji 🌍',
      streak_365: 'Legend Ho Tum 🏆',
      streak_milestone: 'Naya badge mila: {badge}! 🎊'
    }
  };

  // ═══════════════════════════════════════════════
  // 2. i18n CONTROLLER
  // ═══════════════════════════════════════════════

  window.i18n = {

    /** Current active language code */
    lang: 'en',

    /**
     * Detect user's preferred language from browser.
     * Maps navigator.language to our supported languages.
     *
     * Priority:
     * 1. Saved preference (from localStorage via state.js)
     * 2. navigator.language
     * 3. navigator.languages array
     * 4. Default: English
     *
     * @returns {string} Detected language code: "en"|"hi"|"hinglish"
     *
     * Called by: app.js → init()
     */
    detect: function () {
      // Check saved preference first
      try {
        var savedPrefs = localStorage.getItem('dmm_prefs');
        if (savedPrefs) {
          var prefs = JSON.parse(savedPrefs);
          if (prefs.language && STRINGS[prefs.language]) {
            this.lang = prefs.language;
            console.log('[i18n] Using saved language:', this.lang);
            return this.lang;
          }
        }
      } catch (e) {
        // Ignore localStorage errors
      }

      // Detect from browser
      var browserLang = (
        navigator.language ||
        navigator.userLanguage ||
        'en'
      ).toLowerCase();

      // Also check navigator.languages array
      var languages = navigator.languages || [browserLang];

      for (var i = 0; i < languages.length; i++) {
        var lang = languages[i].toLowerCase();

        // Hindi detection
        if (lang === 'hi' || lang === 'hi-in' || lang.startsWith('hi-')) {
          this.lang = 'hinglish'; // Default Hindi users to Hinglish
          break;
        }

        // English India → Hinglish
        if (lang === 'en-in') {
          this.lang = 'hinglish';
          break;
        }

        // English (any variant)
        if (lang.startsWith('en')) {
          this.lang = 'en';
          break;
        }
      }

      console.log('[i18n] Detected language:', this.lang, '(browser:', browserLang, ')');
      return this.lang;
    },

    /**
     * Get a translated string by key.
     * Supports variable interpolation with {varName} syntax.
     *
     * @param {string} key - Translation key (e.g. "guess_placeholder")
     * @param {object} [vars] - Variables to interpolate (e.g. { n: 5 })
     * @returns {string} Translated string, or key if not found
     *
     * Examples:
     *   i18n.t('guess_placeholder')
     *     → "Type a country name..." (en)
     *     → "Country ka naam type karo..." (hinglish)
     *
     *   i18n.t('attempts_left', { n: 4 })
     *     → "4 guesses left" (en)
     *     → "4 guesses baaki" (hinglish)
     *
     *   i18n.t('day_label', { n: 47 })
     *     → "Day #47"
     *
     * Used by: ui.js, app.js, share.js, streak.js
     */
    t: function (key, vars) {
      // Try current language
      var str = null;
      var langStrings = STRINGS[this.lang];

      if (langStrings && langStrings[key] !== undefined) {
        str = langStrings[key];
      }
      // Fallback to English
      else if (STRINGS.en[key] !== undefined) {
        str = STRINGS.en[key];
      }
      // Key not found at all
      else {
        console.warn('[i18n] Missing key:', key, 'for lang:', this.lang);
        return key;
      }

      // Interpolate variables
      if (vars && typeof vars === 'object') {
        for (var varName in vars) {
          if (vars.hasOwnProperty(varName)) {
            var placeholder = '{' + varName + '}';
            // Replace all occurrences
            while (str.indexOf(placeholder) !== -1) {
              str = str.replace(placeholder, String(vars[varName]));
            }
          }
        }
      }

      return str;
    },

    /**
     * Manually set the active language.
     *
     * @param {string} code - Language code: "en"|"hi"|"hinglish"
     * @returns {boolean} true if language was set, false if invalid
     *
     * Called by: settings UI, preferences
     */
    setLang: function (code) {
      if (!STRINGS[code]) {
        console.warn('[i18n] Invalid language code:', code);
        return false;
      }

      this.lang = code;

      // Save preference
      try {
        var savedPrefs = localStorage.getItem('dmm_prefs');
        var prefs = savedPrefs ? JSON.parse(savedPrefs) : {};
        prefs.language = code;
        localStorage.setItem('dmm_prefs', JSON.stringify(prefs));
      } catch (e) {
        // Ignore
      }

      console.log('[i18n] Language set to:', code);
      return true;
    },

    /**
     * Get the current language code.
     *
     * @returns {string} "en"|"hi"|"hinglish"
     */
    getLang: function () {
      return this.lang;
    },

    /**
     * Get all available language codes.
     *
     * @returns {Array} ["en", "hi", "hinglish"]
     */
    getAvailableLangs: function () {
      return Object.keys(STRINGS);
    },

    /**
     * Get the display name for a language code.
     *
     * @param {string} code - Language code
     * @returns {string} Display name
     */
    getLangName: function (code) {
      var names = {
        en: 'English',
        hi: 'हिंदी',
        hinglish: 'Hinglish'
      };
      return names[code] || code;
    },

    /**
     * Check if a translation key exists for current language.
     *
     * @param {string} key - Translation key
     * @returns {boolean}
     */
    has: function (key) {
      var langStrings = STRINGS[this.lang];
      if (langStrings && langStrings[key] !== undefined) return true;
      if (STRINGS.en[key] !== undefined) return true;
      return false;
    },

    /**
     * Get a random fun message for distance feedback.
     * These are extra fun messages beyond the basic translations.
     * Language-aware.
     *
     * @param {string} tier - "burning"|"hot"|"warm"|"cold"|"freezing"|"arctic"
     * @param {number} seed - For deterministic pick (usually distance km)
     * @returns {string} Fun message
     *
     * Used by: ui.js → rendering toast after guess
     */
    getFunMessage: function (tier, seed) {
      var messages = FUN_MESSAGES[this.lang] || FUN_MESSAGES.en;
      var tierMsgs = messages[tier];

      if (!tierMsgs || tierMsgs.length === 0) {
        return this.t('dist_' + tier);
      }

      var index = Math.abs(seed || 0) % tierMsgs.length;
      return tierMsgs[index];
    }
  };


  // ═══════════════════════════════════════════════
  // 3. FUN MESSAGES PER LANGUAGE
  // ═══════════════════════════════════════════════

  var FUN_MESSAGES = {
    en: {
      burning: [
        'Almost there! Can you feel it? 🔥',
        'SO close you could walk there! 🚶',
        'Practically neighbors! 🏘️',
        'One border away maybe? 🤔',
        'You can almost see it from here! 👀'
      ],
      hot: [
        'Getting hotter! 🥵',
        'Same neighborhood of the world! 🌍',
        'Close! Think nearby countries 🗺️',
        'Hot hot hot! Keep going! 🌶️',
        'You\'re in the right zone! 📍'
      ],
      warm: [
        'Warm! Right track 🛤️',
        'Getting there... ☀️',
        'Right region, wrong country 🧐',
        'Keep narrowing it down! 🎯',
        'Not bad at all! 👍'
      ],
      cold: [
        'Cold... try elsewhere 🌧️',
        'Wrong neighborhood 🏗️',
        'Maybe try another continent? 🤷',
        'Quite far off! 📡',
        'Keep exploring! 🧭'
      ],
      freezing: [
        'Freezing! Way off 🥶',
        'You\'d need a very long flight ✈️',
        'ICE cold! 🧊',
        'Other side of the world vibes 🗺️',
        'Nope, think bigger! 🌏'
      ],
      arctic: [
        'ARCTIC! Maximum distance! 🌏',
        'Literally couldn\'t be further 😱',
        'Flip your thinking 180° 🔄',
        'Wrong everything! 💀',
        'Try the opposite direction! 🧭'
      ]
    },

    hinglish: {
      burning: [
        'Bhai bahut paas hai! 🔥',
        'Walk karke ja sakte ho! 🚶',
        'Padosi country shayad? 🤔',
        'Lag gaya almost! Ek aur try! 👀',
        'Ghar ke paas hi hai bhai! 🏘️'
      ],
      hot: [
        'Garam ho raha hai! 🥵',
        'Same area mein ho! 🌍',
        'Paas ki country try karo! 🗺️',
        'Hot hot hot! Jaldi guess kar! 🌶️',
        'Sahi zone mein ho! 📍'
      ],
      warm: [
        'Thoda garam hai! ☀️',
        'Right track pe ho 🛤️',
        'Sahi region, galat country 🧐',
        'Aur narrow karo! 🎯',
        'Bad nahi hai! 👍'
      ],
      cold: [
        'Thanda padh gaya bhai 🌧️',
        'Galat jagah pe ho 🏗️',
        'Doosra continent try kar? 🤷',
        'Bahut door hai yaar! 📡',
        'Explore karte raho! 🧭'
      ],
      freezing: [
        'Barf mein hai bhai! 🥶',
        'Flight book karo itni door! ✈️',
        'Ice cold! Bilkul galat! 🧊',
        'Duniya ke doosre side pe 🗺️',
        'Ulta sochna padega! 🌏'
      ],
      arctic: [
        'Bhai Mars pe gira tumhara guess! 🚀',
        'Itna door? GPS kharab hai kya? 😱',
        'Bilkul opposite direction! 🔄',
        'Sab kuch galat hai! 💀',
        'Ulta chal re baba! 🧭'
      ]
    },

    hi: {
      burning: [
        'बहुत करीब! 🔥',
        'पैदल जा सकते हो! 🚶',
        'पड़ोसी देश शायद? 🤔',
        'लगभग मिल गया! 👀',
        'बस थोड़ा और! 🏘️'
      ],
      hot: [
        'गरम हो रहा है! 🥵',
        'सही इलाके में हो! 🌍',
        'पास के देश आज़माओ! 🗺️',
        'और करीब आओ! 🌶️',
        'सही दिशा! 📍'
      ],
      warm: [
        'गुनगुना है! ☀️',
        'सही रास्ते पर हो 🛤️',
        'सही क्षेत्र, गलत देश 🧐',
        'और सोचो! 🎯',
        'बुरा नहीं है! 👍'
      ],
      cold: [
        'ठंडा! कहीं और आज़माओ 🌧️',
        'गलत जगह 🏗️',
        'दूसरा महाद्वीप? 🤷',
        'काफी दूर है! 📡',
        'खोजते रहो! 🧭'
      ],
      freezing: [
        'बर्फ़ीला! बहुत दूर! 🥶',
        'बहुत लंबी उड़ान चाहिए! ✈️',
        'बिल्कुल गलत! 🧊',
        'दुनिया के दूसरी तरफ 🗺️',
        'उल्टा सोचो! 🌏'
      ],
      arctic: [
        'आर्कटिक! अधिकतम दूरी! 🌏',
        'इतना दूर? 😱',
        'एकदम उल्टा! 🔄',
        'सब कुछ गलत! 💀',
        'विपरीत दिशा! 🧭'
      ]
    }
  };


  // ═══════════════════════════════════════════════
  // 4. AUTO-DETECT ON LOAD
  // ═══════════════════════════════════════════════

  // Run detection immediately
  window.i18n.detect();

  console.log('[i18n] Module loaded, lang:', window.i18n.lang);

})();
