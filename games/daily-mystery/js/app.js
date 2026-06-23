
/* ═══════════════════════════════════════════════════════════
   DHARAVERSE MAP MYSTERY — MAIN APPLICATION CONTROLLER
   File: /games/daily-mystery/js/app.js

   DEPENDS ON: ALL other JS files (loaded last)
     data.js  → window.COUNTRIES, COUNTRY_LOOKUP, COUNTRY_NAMES
                + hint1_fact, hint4_sports, hint6_landmark, climate
     logic.js → window.evaluateGuess, findCountryIdByName,
                isValidCountryName, isDuplicateGuess
     state.js → window.GameState, initState, saveGuess,
                hasPlayedToday, getRemainingGuesses,
                isGameActive, updateStats, getStats,
                getMillisUntilNextGame, formatCountdown,
                getDayNumber, getPrefs, savePrefs
     i18n.js  → window.i18n
     ui.js    → window.UIController (with renderHints,
                initLazyObserver, candy-crush rendering)
     share.js → window.shareResult
     streak.js→ window.StreakManager, showBadgeToast
   ═══════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ─────────────────────────────────────────────
     SUPABASE CONFIG
     ───────────────────────────────────────────── */
 var SUPABASE_URL = 'https://uubgjhchndervaamizzk.supabase.co';
  var SUPABASE_ANON_KEY = 'sb_publishable_L-bJ9sLh-hFvB_x0YSePsQ_Kaq34Okv';


  /* ─────────────────────────────────────────────
     MAP TILE SETS PER THEME
     ───────────────────────────────────────────── */
  var MAP_TILES = {
    'default': 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
    'candy':   'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
    'ocean':   'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
    'jungle':  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    'lemon':   'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'
  };

  var _currentTileLayer = null;

  /* ─────────────────────────────────────────────
     LOCAL ALIASES — avoids window. everywhere
     Assigned after DOMContentLoaded so all scripts
     are guaranteed to have run first.
     ───────────────────────────────────────────── */
  var UI;            /* UIController  */
  var Streak;        /* StreakManager  */
  var GS;            /* GameState      */
  var I18N;          /* i18n           */

  /* state.js */
  var _initState;
  var _saveGuess;
  var _hasPlayedToday;
  var _isGameActive;
  var _updateStats;
  var _getStats;
  var _getPrefs;
  var _savePrefs;
  var _getRemainingGuesses;
  var _getDayNumber;

  /* logic.js */
  var _evaluateGuess;
  var _findCountryIdByName;
  var _isValidCountryName;
  var _isDuplicateGuess;

  /* share.js */
  var _shareResult;

  /* streak.js */
  var _showBadgeToast;


  /* ══════════════════════════════════════════════
     1. MAIN INIT
     Entry point — runs on DOMContentLoaded
     ══════════════════════════════════════════════ */
  function init() {

    /* Bind local aliases now that all scripts are loaded */
    _bindAliases();

    /* Show loading immediately */
    UI.showLoadingScreen(true);

    /* Detect language */
    if (I18N && I18N.detect) I18N.detect();

    /* Initialize game state (picks today's country) */
    if (_initState) _initState();

    /* Load streak data */
    if (Streak && Streak.load) Streak.load();

    /* Init Leaflet map */
    UI.initMap();

    /* Init autocomplete */
    UI.initAutocomplete();

    /* Init lazy-load IntersectionObserver */
    if (UI.initLazyObserver) UI.initLazyObserver();

    /* Init sparkle field (decorative) */
    _initSparkles();

    /* Apply saved theme (CSS + map tiles) */
    _initTheme();

    /* Update header */
    UI.updateDayNumber(_getDayNumber ? _getDayNumber() : 1);
    UI.updateStreakDisplay(Streak ? Streak.data : null);
    UI.updateSidebarStats();

    /* Load news banner hint (never reveals country name) */
    loadDailyFact();

    /* Restore or fresh game */
    if (_hasPlayedToday && _hasPlayedToday()) {
      _restoreGame();
    } else {
      /* First-time tutorial */
      var prefs = _getPrefs ? _getPrefs() : {};
      if (!prefs.hasSeenTutorial) {
        setTimeout(function () {
          UI.showModal(true);
          prefs.hasSeenTutorial = true;
          if (_savePrefs) _savePrefs(prefs);
        }, 900);
      }
    }

    /* Wire all event listeners */
    _wireEventListeners();

    /* Hide loading screen */
    setTimeout(function () {
      UI.showLoadingScreen(false);
    }, 650);

    console.log('[app.js] Game initialized — Day #' + (_getDayNumber ? _getDayNumber() : 1));
  }


  /* ══════════════════════════════════════════════
     2. BIND LOCAL ALIASES
     ══════════════════════════════════════════════ */
  function _bindAliases() {
    UI              = window.UIController;
    Streak          = window.StreakManager;
    GS              = window.GameState;
    I18N            = window.i18n;

    _initState           = window.initState;
    _saveGuess           = window.saveGuess;
    _hasPlayedToday      = window.hasPlayedToday;
    _isGameActive        = window.isGameActive;
    _updateStats         = window.updateStats;
    _getStats            = window.getStats;
    _getPrefs            = window.getPrefs;
    _savePrefs           = window.savePrefs;
    _getRemainingGuesses = window.getRemainingGuesses;
    _getDayNumber        = window.getDayNumber;

    _evaluateGuess       = window.evaluateGuess;
    _findCountryIdByName = window.findCountryIdByName;
    _isValidCountryName  = window.isValidCountryName;
    _isDuplicateGuess    = window.isDuplicateGuess;

    _shareResult   = window.shareResult;
    _showBadgeToast = window.showBadgeToast;
  }

  /* Helper: t() shorthand */
  function t(key, params) {
    if (I18N && I18N.t) return I18N.t(key, params);
    return key;
  }


  /* ══════════════════════════════════════════════
     3. WIRE ALL EVENT LISTENERS
     ══════════════════════════════════════════════ */
  function _wireEventListeners() {

    /* ── Guess Form Submit ── */
    var guessForm = document.getElementById('guess-form');
    if (guessForm) {
      guessForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var input = document.getElementById('guess-input');
        if (input) handleGuessSubmit(input.value.trim());
      });
    }

    /* ── Share Button ── */
    var shareBtn = document.getElementById('share-btn');
    if (shareBtn) {
      shareBtn.addEventListener('click', function () {
        if (_shareResult) _shareResult();
      });
    }

    /* ── How to Play ── */
    var howToPlayBtn = document.getElementById('how-to-play-btn');
    if (howToPlayBtn) {
      howToPlayBtn.addEventListener('click', function () {
        UI.showModal(true);
      });
    }

    /* ── Close Modal (X) ── */
    var closeModalBtn = document.getElementById('close-modal-btn');
    if (closeModalBtn) {
      closeModalBtn.addEventListener('click', function () {
        UI.showModal(false);
      });
    }

    /* ── Close Modal (bottom btn) ── */
    var closeModalBtnBottom = document.getElementById('close-modal-btn-bottom');
    if (closeModalBtnBottom) {
      closeModalBtnBottom.addEventListener('click', function () {
        UI.showModal(false);
      });
    }

    /* ── Modal Overlay (click outside) ── */
    var modalOverlay = document.getElementById('modal-overlay');
    if (modalOverlay) {
      modalOverlay.addEventListener('click', function (e) {
        if (e.target === modalOverlay) UI.showModal(false);
      });
    }

    /* ── Theme Switcher ── */
    var themeSwitcher = document.getElementById('theme-switcher');
    if (themeSwitcher) {
      themeSwitcher.addEventListener('click', function (e) {
        var swatch = e.target.closest('.theme-swatch');
        if (swatch && swatch.dataset.theme) {
          _applyTheme(swatch.dataset.theme);
        }
      });
    }

    /* ── Global Keyboard Shortcuts ── */
    document.addEventListener('keydown', function (e) {
      /* Escape: close modal OR clear input */
      if (e.key === 'Escape') {
        var overlay = document.getElementById('modal-overlay');
        if (overlay && overlay.getAttribute('aria-hidden') === 'false') {
          UI.showModal(false);
          return;
        }
        UI.clearInput();
        return;
      }

      /* / → focus search (desktop shortcut) */
      if (e.key === '/' && document.activeElement.tagName !== 'INPUT') {
        e.preventDefault();
        var input = document.getElementById('guess-input');
        if (input && !input.disabled) input.focus();
      }
    });

    /* ── Visibility change → check for new day ── */
    document.addEventListener('visibilitychange', function () {
      if (document.visibilityState === 'visible') _checkForNewDay();
    });

    console.log('[app.js] Event listeners wired');
  }


  /* ══════════════════════════════════════════════
     4. HANDLE GUESS SUBMIT
     Core game loop
     ══════════════════════════════════════════════ */
  function handleGuessSubmit(countryName) {

    /* Re-sync GS in case state.js updated it */
    GS = window.GameState;

    /* Guard: game active */
    if (!_isGameActive || !_isGameActive()) {
      UI.showToast(t('toast_game_over'), 'info', 2000);
      return;
    }

    /* Guard: not empty */
    if (!countryName || countryName.length === 0) {
      UI.shakeInput();
      return;
    }

    /* Guard: valid country */
    if (!_isValidCountryName || !_isValidCountryName(countryName)) {
      UI.shakeInput();
      UI.showToast(t('toast_invalid'), 'error', 2600);
      UI.clearInput();
      return;
    }

    /* Get country id */
    var guessId = _findCountryIdByName
      ? _findCountryIdByName(countryName)
      : null;

    if (!guessId) {
      UI.shakeInput();
      UI.showToast(t('toast_invalid'), 'error', 2600);
      UI.clearInput();
      return;
    }

    /* Guard: no duplicate */
    if (_isDuplicateGuess && _isDuplicateGuess(guessId, GS.guesses)) {
      UI.shakeInput();
      UI.showToast(t('toast_duplicate', { name: countryName }), 'warning', 2600);
      UI.clearInput();
      return;
    }

    /* Evaluate */
    var targetId = GS.todayAnswer.id;
    var result   = _evaluateGuess ? _evaluateGuess(guessId, targetId) : null;

    if (!result) {
      UI.showToast(t('toast_error'), 'error', 3000);
      return;
    }

    /* Save to state + localStorage */
    if (_saveGuess) _saveGuess(result);

    /* Clear input immediately */
    UI.clearInput();

    /* Re-sync GS after save */
    GS = window.GameState;

    /* Current attempt number */
    var attemptNumber = GS.guesses.length;

    /* Get target country data for hints */
    var targetCountry = window.COUNTRY_LOOKUP
      ? window.COUNTRY_LOOKUP[targetId]
      : null;

    /* Render attempt row (includes hint chips for this guess) */
    UI.renderAttemptRow(result, attemptNumber, targetCountry);

    /* Add marker to map */
    UI.addGuessMarker(
      result.guessLat,
      result.guessLng,
      result.guessName,
      result.isCorrect
    );

    /* Fit map bounds */
    UI.fitMapBounds(UI.markers);

    /* Update attempts pill */
    UI.updateAttemptsRemaining(
      _getRemainingGuesses ? _getRemainingGuesses() : 0
    );

    /* Fun toast feedback (distance / direction) */
    if (!result.isCorrect && result.distanceFeedback) {
      var funMsg = _getFunDistanceMessage(
        result.distanceFeedback.tier,
        result.distanceFormatted
      );
      UI.showToast(
        result.distanceFeedback.emoji + ' ' + funMsg,
        _distanceTierToToastType(result.distanceFeedback.tier),
        3000
      );
    }

    /* Check game end */
    GS = window.GameState;
    if (GS.gameStatus === 'won' || GS.gameStatus === 'lost') {
      _handleGameEnd(GS.gameStatus === 'won');
    }
  }


  /* ══════════════════════════════════════════════
     5. HANDLE GAME END
     Called when game is won or lost
     ══════════════════════════════════════════════ */
  function _handleGameEnd(won) {
    GS = window.GameState;

    var answer     = GS.todayAnswer;
    var numGuesses = GS.guesses.length;

    /* Delay so last row animation completes */
    var delay = won ? 900 : 450;

    setTimeout(function () {

      /* Show candy game-over banner */
      UI.showGameOver(won, answer);

      /* Disable input */
      UI.disableInput();

      /* Update streak */
      var streakResult = Streak && Streak.update ? Streak.update(won) : {};

      /* Update streak display in header */
      if (Streak) UI.updateStreakDisplay(Streak.data);

      /* Badge milestone? */
      var newBadge = Streak && Streak.checkMilestone ? Streak.checkMilestone() : null;
      if (newBadge && _showBadgeToast) _showBadgeToast(newBadge);

      /* Streak broke */
      if (streakResult && streakResult.streakBroke && !won) {
        setTimeout(function () {
          UI.showToast('💔 Streak ended. Start again tomorrow!', 'error', 4000);
        }, 2200);
      }

      /* New best streak */
      if (streakResult && streakResult.isNewBest && won &&
          streakResult.newStreak > 1) {
        setTimeout(function () {
          UI.showToast(
            '🏆 New best streak: ' + streakResult.newStreak + ' days!',
            'success',
            4200
          );
        }, 3200);
      }

      /* Save all-time stats */
      if (_updateStats) _updateStats(won, numGuesses);

      /* Update sidebar */
      UI.updateSidebarStats();
      UI.updateDistribution();

      /* Reveal answer on lose */
      if (!won && answer) {
        setTimeout(function () {
          UI.showToast(
            '🌍 It was ' + answer.flag + ' ' + answer.name + '!',
            'info',
            6000
          );
        }, 1200);
      }

      /* Win celebration message */
      if (won) {
        var winMsgs = [
          '🧭 Geography legend!',
          '🗺️ Map Master in the making!',
          '📚 Your teachers would be proud!',
          '🌍 You really know your countries!',
          '😄 Google Maps could hire you!',
          '🎯 Spot on! Incredible!',
          '🏆 Champion of continents!'
        ];
        var winMsg = winMsgs[numGuesses % winMsgs.length];
        setTimeout(function () {
          UI.showToast(winMsg, 'success', 4200);
        }, 1600);
      }

      console.log(
        '[app.js] Game ended. Won:', won,
        '| Guesses:', numGuesses
      );

    }, delay);
  }


  /* ══════════════════════════════════════════════
     6. RESTORE SAVED GAME
     Called when hasPlayedToday() === true
     ══════════════════════════════════════════════ */
  function _restoreGame() {
    GS = window.GameState;

    var guesses = GS.guesses;
    var status  = GS.gameStatus;

    if (!guesses || !guesses.length) return;

    console.log(
      '[app.js] Restoring game:',
      guesses.length, 'guesses, status:', status
    );

    /* Get target country for hint rendering */
    var targetCountry = window.COUNTRY_LOOKUP && GS.todayAnswer
      ? window.COUNTRY_LOOKUP[GS.todayAnswer.id]
      : null;

    /* Re-render all rows */
    UI.restoreGameState(guesses, targetCountry);

    /* Update attempts pill */
    UI.updateAttemptsRemaining(
      Math.max(0, (GS.maxGuesses || 6) - guesses.length)
    );

    /* If game already finished */
    if (status === 'won' || status === 'lost') {
      setTimeout(function () {
        _handleGameEnd(status === 'won');
      }, guesses.length * 160 + 550);
    }
  }


    /* ══════════════════════════════════════════════
     7. LOAD DAILY FACT — Enhanced with jokes & news
     ══════════════════════════════════════════════ */
  function loadDailyFact() {
    GS = window.GameState;
    var answer = GS ? GS.todayAnswer : null;

    if (!answer) {
      UI.renderNewsFact('🌍 A mystery country awaits you today!');
      return;
    }

    /* Generate multiple hints — show one in banner, rest in popup */
    var bannerHint = _generateBannerHint(answer);
    var detailHint = _generateDetailHint(answer);
    var joke       = _generateGeographyJoke();

    /* Set banner text */
    UI.renderNewsFact(bannerHint);

    /* Store for popup */
    window._dailyHints = {
      banner:  bannerHint,
      detail:  detailHint,
      joke:    joke,
      funFact: answer.fun_fact || ''
    };

    /* Wire up news banner click → popup */
    _wireNewsBanner();

    console.log('[app.js] News banner + fun facts loaded');

    /* Try Supabase for AI-generated news (async) */
    _trySupabaseFact(answer);
  }

  /* ── Banner hint (short, catchy, one-liner) ── */
  function _generateBannerHint(c) {
    var dayNum = _getDayNumber ? _getDayNumber() : 1;
    var hints = [];

    /* Geography hints that DON'T reveal the name */
    hints.push('🌍 Today\'s country is in ' + c.continent + '! Can you guess?');
    hints.push('📍 Hiding somewhere in ' + c.subregion + '… hunt it down!');

    var hLat = c.hemisphere_lat === 'N' ? 'Northern' : 'Southern';
    hints.push('🧭 Look in the ' + hLat + ' Hemisphere today!');

    if (c.island) hints.push('🏝️ Today\'s mystery is an island nation!');
    if (c.landlocked) hints.push('🏔️ No beaches here — today\'s country is landlocked!');

    if (c.population > 100000000)
      hints.push('👥 Over 100 million people live in today\'s mystery!');
    else if (c.population < 1000000)
      hints.push('🤫 Tiny population — under 1 million people!');

    if (c.area > 1000000) hints.push('🐘 This country is MASSIVE — over 1M km²!');
    else if (c.area < 10000) hints.push('🔬 Today\'s country is TINY!');

    if (c.neighbors && c.neighbors.length > 6)
      hints.push('🤝 So many borders! ' + c.neighbors.length + ' neighboring countries!');
    else if (c.neighbors && c.neighbors.length === 0)
      hints.push('🏝️ Zero land borders — completely surrounded by water!');

    /* Capital first letter */
    if (c.capital) {
      hints.push('🏛️ Its capital starts with "' + c.capital.charAt(0).toUpperCase() + '"');
    }

    /* Climate */
    var climEmoji = {
      'Tropical': '🌴', 'Arid': '🏜️', 'Temperate': '🌤️',
      'Continental': '❄️', 'Polar': '🧊', 'Mediterranean': '☀️'
    };
    if (c.climate && climEmoji[c.climate]) {
      hints.push(climEmoji[c.climate] + ' ' + c.climate + ' climate today!');
    }

    /* Name letter count */
    hints.push('🔤 The country name has ' + c.name.length + ' letters — starting with "' + c.name.charAt(0).toUpperCase() + '"');

    /* Flag hint */
    hints.push(c.flag + ' Recognize this flag? It belongs to today\'s mystery!');

    /* Neighbor reveal */
    if (c.neighbors && c.neighbors.length > 0) {
      var rn = c.neighbors[dayNum % c.neighbors.length];
      var nd = window.COUNTRY_LOOKUP ? window.COUNTRY_LOOKUP[rn] : null;
      if (nd) {
        hints.push(nd.flag + ' ' + nd.name + ' is a neighbor of today\'s mystery!');
      }
    }

    /* Pick based on day — different hint each day */
    var idx = dayNum % hints.length;
    return hints[idx];
  }

  /* ── Detail hint (longer, for popup) ── */
  function _generateDetailHint(c) {
    var details = [];

    details.push('This mystery country is located in ' + c.subregion + ', ' + c.continent + '.');

    if (c.area > 1000000) details.push('It\'s a large country covering over ' + Math.round(c.area / 1000) + ',000 km².');
    else details.push('It covers about ' + c.area.toLocaleString() + ' km².');

    details.push('Population: approximately ' + (c.population / 1000000).toFixed(1) + ' million people.');

    if (c.climate) details.push('Climate type: ' + c.climate);

    if (c.landlocked) details.push('It\'s landlocked — no direct access to the ocean.');
    if (c.island) details.push('It\'s an island nation, surrounded by water.');

    if (c.neighbors && c.neighbors.length > 0) {
      details.push('It borders ' + c.neighbors.length + ' countries.');
    }

    return details.join(' ');
  }

  /* ── Geography jokes (fun, random) ── */
  function _generateGeographyJoke() {
    var jokes = [
      '😄 Why did the map go to therapy? It had too many issues with borders!',
      '🌍 What\'s a geographer\'s favorite snack? Map-le syrup!',
      '🧭 I got lost reading a map… I guess I took a wrong turn at the legend!',
      '🗺️ Why don\'t maps ever win arguments? They always fold!',
      '🌊 What did the ocean say to the beach? Nothing, it just waved!',
      '🏔️ I tried to write a joke about mountains, but I couldn\'t peak!',
      '🐘 Why don\'t elephants use maps? They never forget where they\'ve been!',
      '🏝️ What\'s an island\'s favorite letter? "i" — because it\'s surrounded by "sea"!',
      '🌋 Did you hear about the volcano? It just blew up on social media!',
      '🐧 Why do penguins know all the capitals? They\'re always at the South Pole of knowledge!',
      '🦁 What\'s a lion\'s favorite country? Mane-anmar! 🇲🇲',
      '🍕 Why does Italy look like a boot? Because you can\'t fit that many people in a sneaker!',
      '🎭 Geography class is the only place where "capital" punishment means studying!',
      '🌮 What do you call a map expert who loves tacos? A Mexi-cartographer!',
      '📚 I failed my geography test because I couldn\'t find my way through it!',
      '🗻 Mount Everest: the world\'s tallest thing nobody asked to climb!',
      '🌊 The Dead Sea isn\'t dead, it just can\'t swim!',
      '🏖️ I\'d tell you a joke about the equator, but it\'s too long!',
      '🐫 Why do camels live in the desert? Because they can\'t afford the rent in Dubai!',
      '🦘 Australia: where even the cute animals are trying to fight you!',
      '🧊 Iceland isn\'t icy and Greenland isn\'t green. Geography: the original clickbait!',
      '🇫🇷 France gave us the Statue of Liberty. We gave them Jerry Lewis. Fair trade?',
      '🗺️ My geography teacher was the best — she really knew how to put me in my place!',
      '🌍 Earth has 197 countries. Today you only need to find ONE!',
      '📍 Fun fact: You\'re closer to the answer than you think… probably!',
      '🧠 Pro tip: The answer is NOT Atlantis. We checked.',
      '🔥 Your geography skills are about to be tested. No pressure!',
      '🎯 Remember: it\'s not about winning — wait, yes it is!',
      '☕ Geography is best served with coffee. Trust us.',
      '🧭 Columbus didn\'t have Google Maps. You don\'t either. Good luck!'
    ];

    var dayNum = _getDayNumber ? _getDayNumber() : 1;
    return jokes[dayNum % jokes.length];
  }

  /* ── Wire news banner → fun fact popup ── */
  function _wireNewsBanner() {
    var banner = document.getElementById('news-fact');
    var popup  = document.getElementById('fun-fact-popup');
    var closeBtn = document.getElementById('fun-fact-close');

    if (!banner || !popup) return;

    /* Add tap hint */
    var tapHint = banner.querySelector('.news-tap-hint');
    if (!tapHint) {
      tapHint = document.createElement('span');
      tapHint.className = 'news-tap-hint';
      tapHint.textContent = 'tap for more';
      banner.appendChild(tapHint);
    }

    /* Open popup */
    banner.addEventListener('click', function () {
      var hints = window._dailyHints;
      if (!hints) return;

      var textEl = document.getElementById('fun-fact-text');
      var jokeEl = document.getElementById('fun-fact-joke');

      if (textEl) textEl.textContent = hints.detail || hints.banner;
      if (jokeEl) jokeEl.textContent = hints.joke || '';

      popup.classList.add('visible');
      popup.setAttribute('aria-hidden', 'false');
    });

    /* Close popup */
    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        popup.classList.remove('visible');
        popup.setAttribute('aria-hidden', 'true');
      });
    }

    /* Close on backdrop click */
    popup.addEventListener('click', function (e) {
      if (e.target === popup) {
        popup.classList.remove('visible');
        popup.setAttribute('aria-hidden', 'true');
      }
    });
  }

  /* ── Try Supabase for AI news fact (async) ── */
  function _trySupabaseFact(answer) {
    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) return;
    if (SUPABASE_URL.indexOf('XXXX') !== -1) return;

    GS = window.GameState;
    var today     = GS.todayDate;
    var lang      = I18N && I18N.getLang ? I18N.getLang() : 'en';
    var factField = (lang === 'hi' || lang === 'hinglish') ? 'fact_hi' : 'fact_en';

    var url = SUPABASE_URL + '/rest/v1/daily_facts?date=eq.' + today + '&select=' + factField + '&limit=1';

    fetch(url, {
      method: 'GET',
      headers: {
        'apikey':        SUPABASE_ANON_KEY,
        'Authorization': 'Bearer ' + SUPABASE_ANON_KEY,
        'Content-Type':  'application/json'
      }
    })
    .then(function (res) {
      if (!res.ok) throw new Error('Supabase ' + res.status);
      return res.json();
    })
    .then(function (data) {
      if (!data || !data.length || !data[0][factField]) return;

      var fact = data[0][factField];
      var name = answer.name.toLowerCase();

      /* Safety: must NOT contain the country name */
      if (fact.toLowerCase().indexOf(name) === -1) {
        UI.renderNewsFact('📰 ' + fact);

        /* Also update popup detail */
        if (window._dailyHints) {
          window._dailyHints.detail = fact;
        }
      }
    })
    .catch(function (err) {
      console.warn('[app.js] Supabase fact fetch failed:', err.message);
    });
  }


  /* ══════════════════════════════════════════════
     8. SAFE HINT GENERATOR
     Generates a hint that NEVER mentions the
     country name. Uses data.js fields.
     Day number used as seed → same hint all day.
     ══════════════════════════════════════════════ */
  function _generateSafeHint(country) {
    if (!country) return 'A mystery country awaits! 🌍';

    var c    = country;
    var hints = [];

    /* ── Continent ── */
    hints.push('This country is somewhere in ' + c.continent + ' 🌍');
    hints.push('Look for this one in ' + c.continent + '! 🗺️');
    hints.push('Today\'s mystery is hiding in ' + c.continent + ' 👀');

    if (c.subregion) {
      hints.push('This country is in ' + c.subregion + ' — can you find it? 🔍');
      hints.push('Somewhere in ' + c.subregion + ', a mystery awaits 🧭');
    }

    /* ── Hemisphere ── */
    var hLat = c.hemisphere_lat === 'N' ? 'Northern' : 'Southern';
    var hLng = c.hemisphere_lng === 'E' ? 'Eastern'  : 'Western';
    hints.push('This country is in the ' + hLat + ' Hemisphere 🧭');
    hints.push('Look in the ' + hLng + ' half of the world 🌐');
    hints.push(hLat + ' Hemisphere, ' + hLng + ' side — start there! 📍');

    /* ── Size (area) ── */
    if (c.area > 5000000) {
      hints.push('This is one of the BIGGEST countries on Earth 🐘');
      hints.push('A massive country — think BIG! 🦣');
    } else if (c.area > 1000000) {
      hints.push('A large country — over 1 million km² 📐');
    } else if (c.area > 100000) {
      hints.push('A medium-sized country — not too big, not too small 📏');
    } else if (c.area > 10000) {
      hints.push('A smaller country — don\'t overlook the little ones! 🔍');
    } else {
      hints.push('This is a TINY country — blink and you\'ll miss it! 🔬');
      hints.push('One of the smallest countries in the world! 🐜');
    }

    /* ── Population ── */
    if (c.population > 500000000) {
      hints.push('Over 500 million people live here 🏙️');
    } else if (c.population > 100000000) {
      hints.push('Over 100 million people call this place home 🏘️');
    } else if (c.population > 10000000) {
      hints.push('Tens of millions of people live in this country 🌆');
    } else if (c.population > 1000000) {
      hints.push('A few million people live here 🏡');
    } else {
      hints.push('Tiny population — under 1 million people! 🏝️');
    }

    /* ── Island / Landlocked ── */
    if (c.island) {
      hints.push('This country is an island nation! 🏝️');
      hints.push('Surrounded by water on all sides 🌊');
    }
    if (c.landlocked) {
      hints.push('This country is completely landlocked — no coastline! 🏔️');
      hints.push('No beach here — it\'s landlocked! 🚫🏖️');
    }
    if (!c.island && !c.landlocked) {
      hints.push('This country has both land borders and coastline 🌊🏔️');
    }

    /* ── Climate ── */
    if (c.climate) {
      var climIcons = {
        'Tropical':     '🌴',
        'Arid':         '🏜️',
        'Temperate':    '🌤️',
        'Continental':  '❄️',
        'Polar':        '🧊',
        'Mediterranean':'☀️'
      };
      var icon = climIcons[c.climate] || '🌡️';
      hints.push(icon + ' ' + c.climate + ' climate — that narrows it down!');
    }

    /* ── Neighbors ── */
    if (c.neighbors && c.neighbors.length > 0) {
      var nc = c.neighbors.length;
      if (nc === 1) {
        hints.push('This country only borders ONE other country 🤝');
      } else if (nc >= 8) {
        hints.push('This country borders ' + nc + ' countries — so many neighbors! 🤯');
      } else {
        hints.push('This country borders ' + nc + ' other countries 🗺️');
      }

      /* Hint using a neighbor name */
      var rn = c.neighbors[Math.floor(Math.random() * c.neighbors.length)];
      var nd = window.COUNTRY_LOOKUP ? window.COUNTRY_LOOKUP[rn] : null;
      if (nd) {
        hints.push(nd.flag + ' ' + nd.name + ' is next door to today\'s mystery! 🚪');
        hints.push('One of its neighbors is ' + nd.name + ' — does that help? 🤔');
      }
    }

    /* ── Name letter hints ── */
    var firstLetter = c.name.charAt(0).toUpperCase();
    var nameLength  = c.name.length;
    hints.push('The country name starts with "' + firstLetter + '" 🔤');
    hints.push('The country name has ' + nameLength + ' letters 📝');

    /* ── Capital letter hint ── */
    if (c.capital) {
      var capFirst = c.capital.charAt(0).toUpperCase();
      hints.push('Its capital city starts with "' + capFirst + '" 🏛️');
      hints.push('The capital has ' + c.capital.length + ' letters in its name 🏙️');
    }

    /* ── Latitude climate zone ── */
    if (Math.abs(c.lat) < 10) {
      hints.push('This country sits right near the equator! ☀️');
    } else if (Math.abs(c.lat) > 55) {
      hints.push('Way up near the poles — a cold country! 🥶');
    } else if (c.lat > 30) {
      hints.push('This country is in the mid-northern latitudes 🌤️');
    } else if (c.lat < -30) {
      hints.push('This country is in the mid-southern latitudes 🌤️');
    }

    /* ── Flag emoji hint (always safe) ── */
    hints.push('Here\'s the flag: ' + c.flag + ' — recognize it? 🏁');
    hints.push(c.flag + ' ← this flag belongs to today\'s mystery!');

    /* ── Generic ── */
    hints.push('Think like a geographer — where in the world? 🧠');
    hints.push('Every country has a story — today\'s is waiting! 📖');
    hints.push('Zoom into ' + c.continent + ' and look carefully 🔍');

    /* Seed by day number → stable hint all day for all users */
    var dayNum = _getDayNumber ? _getDayNumber() : 1;
    var idx    = dayNum % hints.length;
    return hints[idx];
  }


  /* ══════════════════════════════════════════════
     9. THEME SYSTEM — CSS vars + map tiles
     ══════════════════════════════════════════════ */
  function _initTheme() {
    var saved = localStorage.getItem('dv-theme') || 'default';
    _applyTheme(saved);
  }

  function _applyTheme(theme) {
    /* 1. CSS custom properties via data attribute */
    if (theme === 'default') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', theme);
    }

    /* 2. Highlight active swatch */
    document.querySelectorAll('.theme-swatch').forEach(function (s) {
      s.classList.toggle('active', s.dataset.theme === theme);
    });

    /* 3. Swap Leaflet tile layer */
    var tileUrl = MAP_TILES[theme] || MAP_TILES['default'];
    var mapInst = UI && UI.map ? UI.map : null;

    if (mapInst && tileUrl) {
      if (_currentTileLayer) {
        mapInst.removeLayer(_currentTileLayer);
      }
      _currentTileLayer = L.tileLayer(tileUrl, {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>',
        subdomains: 'abcd',
        maxZoom: 19,
        crossOrigin: true
      }).addTo(mapInst);
    }

    /* 4. Persist */
    localStorage.setItem('dv-theme', theme);

    console.log('[app.js] Theme applied:', theme);
  }


  /* ══════════════════════════════════════════════
     10. SPARKLE FIELD (decorative bg particles)
     ══════════════════════════════════════════════ */
  function _initSparkles() {
    var field = document.getElementById('sparkle-field');
    if (!field) return;

    /* Skip if reduced motion */
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    for (var i = 0; i < 18; i++) {
      var s = document.createElement('div');
      s.className = 'sparkle';
      s.style.left = (Math.random() * 100) + '%';
      s.style.setProperty('--sp-dur',   (4 + Math.random() * 6) + 's');
      s.style.setProperty('--sp-delay', (Math.random() * 8)      + 's');
      field.appendChild(s);
    }
  }


  /* ══════════════════════════════════════════════
     11. CHECK FOR NEW DAY
     Reloads if UTC date changed since game loaded
     ══════════════════════════════════════════════ */
    function _checkForNewDay() {
    GS = window.GameState;
    if (!GS || !GS.todayDate) return;

    /* Use state.js exposed helper — same IST 8 AM logic */
    var currentGameDate = window.getTodayGameDate
      ? window.getTodayGameDate()
      : GS.todayDate;

    if (GS.todayDate !== currentGameDate) {
      console.log('[app.js] New game day (8 AM IST) — reloading…');
      UI.showToast('🌍 New puzzle available at 8 AM IST! Reloading…', 'info', 2500);
      setTimeout(function () { window.location.reload(); }, 2500);
    }
  }


  /* ══════════════════════════════════════════════
     12. DISTANCE FEEDBACK HELPERS
     ══════════════════════════════════════════════ */
   var _distanceMsgs = {
    'burning': [
      'OMG you\'re basically THERE! 🔥🔥🔥',
      'SO close you can smell the local food! 🫣',
      'Practically standing on the border! 🔥',
      'Just a stone\'s throw away! ⚡',
      'Your geography teacher would CRY tears of joy! 😭'
    ],
    'hot': [
      'Getting REALLY warm! You\'re on fire! 🥵',
      'Sizzling! Just a bit further! 🌡️',
      'Almost there — don\'t give up now! 🎯',
      'You can almost see it from here! 👀',
      'Warmer warmer warmer… HOT! 🔥'
    ],
    'warm': [
      'Warming up! You\'re heading the right direction! 🌤️',
      'Not bad! You\'re in the neighborhood! 🏘️',
      'Getting closer! Keep going! 😏',
      'The compass is smiling! You\'re on track! 🧭',
      'Warm like a summer breeze! 🌊'
    ],
    'cold': [
      'Brrr… that\'s a bit far! Keep exploring! 🌬️',
      'Wrong neighborhood! Try another continent maybe? 🗺️',
      'The answer just texted: "I\'m not even close to there" 📱',
      'Cold but not hopeless! Think bigger! ❄️',
      'Geography is hard, isn\'t it? Keep trying! 📚'
    ],
    'freezing': [
      'Ice cold! 🥶 You\'re on a completely different planet!',
      'That\'s SO far away the answer filed a restraining order! 😂',
      'Wrong side of the world! Try spinning the globe! 🌍',
      'Even a GPS would be confused by this guess! 📡',
      'That guess just got its own ZIP code… in a different universe! 🚀',
      'Plot twist: the answer is NOT there! 🎬'
    ]
  };

  function _getFunDistanceMessage(tier, distanceFormatted) {
    var pool = _distanceMsgs[tier] || _distanceMsgs['cold'];
    var idx  = Math.floor(Math.random() * pool.length);
    return pool[idx] + ' (' + distanceFormatted + ')';
  }

  function _distanceTierToToastType(tier) {
    if (tier === 'burning')  return 'success';
    if (tier === 'hot')      return 'success';
    if (tier === 'warm')     return 'warning';
    if (tier === 'cold')     return 'info';
    if (tier === 'freezing') return 'info';
    return 'info';
  }


  /* ══════════════════════════════════════════════
     13. PUBLIC API — exposed for result.html
     ══════════════════════════════════════════════ */
  window.AppController = {
    handleGameEnd:  _handleGameEnd,
    loadDailyFact:  loadDailyFact,
    restoreGame:    _restoreGame,
    applyTheme:     _applyTheme
  };


  /* ══════════════════════════════════════════════
     14. GLOBAL ERROR BOUNDARY
     ══════════════════════════════════════════════ */
  window.addEventListener('error', function (e) {
    console.error('[app.js] Uncaught error:', e.error || e.message);

    /* Ignore map tile / ResizeObserver noise */
    if (e.filename && e.filename.indexOf('tile') !== -1) return;
    if (e.message  && e.message.indexOf('ResizeObserver') !== -1) return;

    if (UI && UI.showToast) {
      UI.showToast('⚠️ Something went wrong. Try refreshing!', 'error', 5000);
    }
  });

  window.addEventListener('unhandledrejection', function (e) {
    console.warn('[app.js] Unhandled promise rejection:', e.reason);
  });


  /* ══════════════════════════════════════════════
     15. BOOT — DOMContentLoaded (or immediate)
     ══════════════════════════════════════════════ */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  console.log('[app.js] Main controller loaded');

})();

