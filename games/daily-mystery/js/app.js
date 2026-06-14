/* ═══════════════════════════════════════════════════════════
   DHARAVERSE MAP MYSTERY — MAIN APPLICATION CONTROLLER
   File: /games/daily-mystery/js/app.js
   
   DEPENDS ON: ALL other JS files (loaded last)
     data.js    → window.COUNTRIES, COUNTRY_LOOKUP, COUNTRY_NAMES
     logic.js   → window.evaluateGuess, findCountryIdByName,
                  isValidCountryName, isDuplicateGuess
     state.js   → window.GameState, initState, saveGuess,
                  hasPlayedToday, getRemainingGuesses,
                  isGameActive, updateStats, getStats,
                  getMillisUntilNextGame, formatCountdown
     i18n.js    → window.i18n
     ui.js      → window.UIController
     share.js   → window.shareResult, generateShareText
     streak.js  → window.StreakManager, showBadgeToast
   
   EXPORTS: Nothing (runs on DOMContentLoaded)
   
   EVENT LISTENERS WIRED:
     #guess-form       → submit → handleGuessSubmit()
     #share-btn        → click  → shareResult()
     #how-to-play-btn  → click  → UIController.showModal(true)
     #close-modal-btn  → click  → UIController.showModal(false)
     #close-modal-btn-bottom → click → UIController.showModal(false)
     #modal-overlay    → click  → UIController.showModal(false)
     keyboard Enter    → submit
     keyboard Escape   → clearInput()
   ═══════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  // ═══════════════════════════════════════════════
  // SUPABASE CONFIG
  // Replace with your actual Supabase URL and anon key
  // ═══════════════════════════════════════════════
  var SUPABASE_URL = 'https://uubgjhchndervaamizzk.supabase.co';
  var SUPABASE_ANON_KEY = 'sb_publishable_L-bJ9sLh-hFvB_x0YSePsQ_Kaq34Okv';


  // ═══════════════════════════════════════════════
  // 1. MAIN INIT
  // Entry point — called on DOMContentLoaded
  // ═══════════════════════════════════════════════

  /**
   * Initialize the entire game.
   * Calls every module in dependency order.
   *
   * Flow:
   * 1. Show loading screen
   * 2. Detect language
   * 3. Initialize game state (daily country picker)
   * 4. Load streak data
   * 5. Initialize map
   * 6. Initialize autocomplete
   * 7. Update UI with day/streak info
   * 8. Load daily AI fact from Supabase
   * 9. Check if already played today → restore
   * 10. Wire all event listeners
   * 11. Hide loading screen
   */
  function init() {
    // Step 1: Show loading screen immediately
    UIController.showLoadingScreen(true);

    // Step 2: Detect language
    i18n.detect();

    // Step 3: Initialize game state (picks today's country)
    initState();

    // Step 4: Load streak data
    StreakManager.load();

    // Step 5: Initialize Leaflet map
    UIController.initMap();

    // Step 6: Initialize autocomplete on input
    UIController.initAutocomplete();

    // Step 7: Update header UI
    UIController.updateDayNumber(getDayNumber());
    UIController.updateStreakDisplay(StreakManager.data);
    UIController.updateSidebarStats();

    // Step 8: Load daily fact from Supabase (async)
    loadDailyFact();

    // Step 9: Check if already played today
    if (hasPlayedToday()) {
      restoreGame();
    } else {
      // Fresh game — show tutorial if first time
      var prefs = getPrefs();
      if (!prefs.hasSeenTutorial) {
        setTimeout(function () {
          UIController.showModal(true);
          // Mark tutorial as seen
          prefs.hasSeenTutorial = true;
          savePrefs(prefs);
        }, 800);
      }
    }

    // Step 10: Wire event listeners
    wireEventListeners();

    // Step 11: Hide loading screen
    setTimeout(function () {
      UIController.showLoadingScreen(false);
    }, 600);

    console.log('[app.js] Game initialized — Day #' + getDayNumber());
  }


  // ═══════════════════════════════════════════════
  // 2. WIRE ALL EVENT LISTENERS
  // ═══════════════════════════════════════════════

  function wireEventListeners() {

    // ── Guess Form Submit ──────────────────────
    var guessForm = document.getElementById('guess-form');
    if (guessForm) {
      guessForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var input = document.getElementById('guess-input');
        if (input) {
          handleGuessSubmit(input.value.trim());
        }
      });
    }

    // ── Share Button ───────────────────────────
    var shareBtn = document.getElementById('share-btn');
    if (shareBtn) {
      shareBtn.addEventListener('click', function () {
        shareResult();
      });
    }

    // ── How to Play Button ─────────────────────
    var howToPlayBtn = document.getElementById('how-to-play-btn');
    if (howToPlayBtn) {
      howToPlayBtn.addEventListener('click', function () {
        UIController.showModal(true);
      });
    }

    // ── Close Modal (X button) ─────────────────
    var closeModalBtn = document.getElementById('close-modal-btn');
    if (closeModalBtn) {
      closeModalBtn.addEventListener('click', function () {
        UIController.showModal(false);
      });
    }

    // ── Close Modal (bottom button) ────────────
    var closeModalBtnBottom = document.getElementById('close-modal-btn-bottom');
    if (closeModalBtnBottom) {
      closeModalBtnBottom.addEventListener('click', function () {
        UIController.showModal(false);
      });
    }

    // ── Modal Overlay (click outside) ─────────
    var modalOverlay = document.getElementById('modal-overlay');
    if (modalOverlay) {
      modalOverlay.addEventListener('click', function (e) {
        // Only close if clicking the overlay itself, not the modal
        if (e.target === modalOverlay) {
          UIController.showModal(false);
        }
      });
    }

    // ── Global Keyboard Shortcuts ──────────────
    document.addEventListener('keydown', function (e) {
      // Escape: close modal or clear input
      if (e.key === 'Escape') {
        var overlay = document.getElementById('modal-overlay');
        if (overlay && overlay.getAttribute('aria-hidden') === 'false') {
          UIController.showModal(false);
          return;
        }
        UIController.clearInput();
      }

      // Slash: focus search input (desktop shortcut)
      if (e.key === '/' && document.activeElement.tagName !== 'INPUT') {
        e.preventDefault();
        var input = document.getElementById('guess-input');
        if (input && !input.disabled) {
          input.focus();
        }
      }
    });

    // ── Input Clear Button (handled in ui.js) ──
    // Already wired in UIController.initAutocomplete()

    // ── Visibility change (page focus) ────────
    // Reload if date has changed (new day)
    document.addEventListener('visibilitychange', function () {
      if (document.visibilityState === 'visible') {
        checkForNewDay();
      }
    });

    console.log('[app.js] Event listeners wired');
  }


  // ═══════════════════════════════════════════════
  // 3. HANDLE GUESS SUBMIT
  // Core game logic — called on form submit
  // ═══════════════════════════════════════════════

  /**
   * Process a country name guess.
   *
   * Validation:
   * 1. Game must be active (not over)
   * 2. Input must not be empty
   * 3. Country name must be valid
   * 4. Country must not be a duplicate guess
   *
   * On valid guess:
   * 1. Evaluate against target
   * 2. Save to state
   * 3. Render attempt row
   * 4. Add map marker
   * 5. Update UI
   * 6. Check win/lose → handleGameEnd()
   *
   * @param {string} countryName - Raw input from #guess-input
   * @returns {void}
   */
  function handleGuessSubmit(countryName) {

    // ── Guard: game must be active ─────────────
    if (!isGameActive()) {
      UIController.showToast(
        i18n.t('toast_game_over'),
        'info',
        2000
      );
      return;
    }

    // ── Guard: input not empty ─────────────────
    if (!countryName || countryName.length === 0) {
      UIController.shakeInput();
      return;
    }

    // ── Guard: valid country name ──────────────
    if (!isValidCountryName(countryName)) {
      UIController.shakeInput();
      UIController.showToast(
        i18n.t('toast_invalid'),
        'error',
        2500
      );
      UIController.clearInput();
      return;
    }

    // ── Get country ID from name ───────────────
    var guessId = findCountryIdByName(countryName);
    if (!guessId) {
      UIController.shakeInput();
      UIController.showToast(i18n.t('toast_invalid'), 'error', 2500);
      UIController.clearInput();
      return;
    }

    // ── Guard: no duplicate guesses ────────────
    if (isDuplicateGuess(guessId, GameState.guesses)) {
      UIController.shakeInput();
      UIController.showToast(
        i18n.t('toast_duplicate', { name: countryName }),
        'warning',
        2500
      );
      UIController.clearInput();
      return;
    }

    // ── Get target ID ──────────────────────────
    var targetId = GameState.todayAnswer.id;

    // ── Evaluate guess ─────────────────────────
    var result = evaluateGuess(guessId, targetId);
    if (!result) {
      UIController.showToast(i18n.t('toast_error'), 'error', 3000);
      return;
    }

    // ── Save guess to state + localStorage ─────
    saveGuess(result);

    // ── Clear input ────────────────────────────
    UIController.clearInput();

    // ── Render attempt row ─────────────────────
    var attemptNumber = GameState.guesses.length;
    UIController.renderAttemptRow(result, attemptNumber);

    // ── Add marker to map ──────────────────────
    var marker = UIController.addGuessMarker(
      result.guessLat,
      result.guessLng,
      result.guessName,
      result.isCorrect
    );

    // ── Fit map to all markers ─────────────────
    UIController.fitMapBounds(UIController.markers);

    // ── Update attempts remaining ──────────────
    UIController.updateAttemptsRemaining(getRemainingGuesses());

    // ── Show fun distance toast ────────────────
    if (!result.isCorrect) {
      var funMsg = i18n.getFunMessage(
        result.distanceFeedback.tier,
        result.distance
      );
      UIController.showToast(
        result.distanceFeedback.emoji + ' ' + funMsg,
        result.distanceFeedback.color === 'correct' ? 'success' :
        result.distanceFeedback.color === 'close'   ? 'warning' : 'info',
        3000
      );
    }

    // ── Check game end conditions ──────────────
    if (GameState.gameStatus === 'won' || GameState.gameStatus === 'lost') {
      handleGameEnd(GameState.gameStatus === 'won');
    }
  }


  // ═══════════════════════════════════════════════
  // 4. HANDLE GAME END
  // Called when game is won or lost
  // ═══════════════════════════════════════════════

  /**
   * Handle end of game — win or lose.
   * Updates streak, stats, shows game over UI.
   *
   * @param {boolean} won - true if player won
   * @returns {void}
   *
   * Called by:
   * - handleGuessSubmit() when win/lose detected
   * - restoreGame() when restoring a finished game
   */
  function handleGameEnd(won) {
    var answer     = GameState.todayAnswer;
    var numGuesses = GameState.guesses.length;

    // Small delay so the last row animation completes
    var delay = won ? 800 : 400;

    setTimeout(function () {

      // ── Show game over banner ────────────────
      UIController.showGameOver(won, answer);

      // ── Disable input ────────────────────────
      UIController.disableInput();

      // ── Update streak ────────────────────────
      var streakResult = StreakManager.update(won);

      // ── Update streak display in header ──────
      UIController.updateStreakDisplay(StreakManager.data);

      // ── Show badge toast if new badge ────────
      var newBadge = StreakManager.checkMilestone();
      if (newBadge) {
        showBadgeToast(newBadge);
      }

      // ── If streak broke, show toast ──────────
      if (streakResult.streakBroke && !won) {
        setTimeout(function () {
          UIController.showToast(
            '💔 Streak ended. Start again tomorrow!',
            'error',
            4000
          );
        }, 2000);
      }

      // ── If new best streak ───────────────────
      if (streakResult.isNewBest && won && streakResult.newStreak > 1) {
        setTimeout(function () {
          UIController.showToast(
            '🏆 New best streak: ' + streakResult.newStreak + ' days!',
            'success',
            4000
          );
        }, won ? 3000 : 1500);
      }

      // ── Update all-time stats ────────────────
      updateStats(won, numGuesses);

      // ── Update sidebar stats ─────────────────
      UIController.updateSidebarStats();
      UIController.updateDistribution();

      // ── Show correct answer on lose ──────────
      if (!won) {
        setTimeout(function () {
          UIController.showToast(
            '🌍 It was ' + answer.flag + ' ' + answer.name +
            '! Learn more →',
            'info',
            6000
          );
        }, 1000);
      }

      // ── Win message ──────────────────────────
      if (won) {
        var msgs = [
          'Geography legend! 🧭',
          'Map Master in the making! 🗺️',
          'Nailed it! Your teachers would be proud 📚',
          'You really know your countries! 🌍',
          'Incredible! Google Maps could hire you 😄'
        ];
        var msg = msgs[numGuesses % msgs.length];
        setTimeout(function () {
          UIController.showToast(msg, 'success', 4000);
        }, 1500);
      }

      console.log('[app.js] Game ended. Won:', won, '| Guesses:', numGuesses);

    }, delay);
  }


  // ═══════════════════════════════════════════════
  // 5. RESTORE SAVED GAME
  // Called when hasPlayedToday() returns true
  // ═══════════════════════════════════════════════

  /**
   * Restore a saved game from localStorage.
   * Re-renders all guesses and restores map markers.
   *
   * @returns {void}
   *
   * Called by: init() when hasPlayedToday() === true
   */
  function restoreGame() {
    var guesses = GameState.guesses;
    var status  = GameState.gameStatus;

    if (!guesses || guesses.length === 0) return;

    console.log('[app.js] Restoring game:', guesses.length, 'guesses, status:', status);

    // Re-render all rows with staggered animation
    UIController.restoreGameState(guesses);

    // Update attempts remaining
    UIController.updateAttemptsRemaining(
      Math.max(0, GameState.maxGuesses - guesses.length)
    );

    // If game was already over, show game over state
    if (status === 'won' || status === 'lost') {
      // Delay to let rows render first
      setTimeout(function () {
        handleGameEnd(status === 'won');
      }, guesses.length * 150 + 500);
    }
  }


  // ═══════════════════════════════════════════════
  // 6. LOAD DAILY FACT FROM SUPABASE
  // ═══════════════════════════════════════════════

  /**
   * Fetch today's AI-generated fact from Supabase.
   * Falls back gracefully if unavailable.
   *
   * Supabase table: daily_facts
   * Columns: date, country_id, fact_en, fact_hi, source_url
   *
   * @returns {void}
   *
   * Called by: init()
   */
  function loadDailyFact() {
    // Show loading state
    UIController.renderNewsFact(null);

    // Get today's date and country
    var today     = GameState.todayDate;
    var countryId = GameState.todayAnswer ? GameState.todayAnswer.id : null;

    if (!today || !countryId) {
      UIController.renderNewsFact(i18n.t('news_fallback'));
      return;
    }

    // Determine language for fact
    var lang = i18n.getLang();
    var factField = (lang === 'hi') ? 'fact_hi' : 'fact_en';

    // Build Supabase REST query
    var url = SUPABASE_URL +
      '/rest/v1/daily_facts' +
      '?date=eq.' + today +
      '&select=' + factField + ',source_url' +
      '&limit=1';

    // Fetch with timeout
    var fetchTimeout = setTimeout(function () {
      // Timeout after 5s — use fallback
      UIController.renderNewsFact(
        GameState.todayAnswer
          ? GameState.todayAnswer.fun_fact
          : i18n.t('news_fallback')
      );
    }, 5000);

    fetch(url, {
      method: 'GET',
      headers: {
        'apikey':        SUPABASE_ANON_KEY,
        'Authorization': 'Bearer ' + SUPABASE_ANON_KEY,
        'Content-Type':  'application/json'
      }
    })
    .then(function (response) {
      clearTimeout(fetchTimeout);
      if (!response.ok) throw new Error('Supabase error: ' + response.status);
      return response.json();
    })
    .then(function (data) {
      if (data && data.length > 0 && data[0][factField]) {
        UIController.renderNewsFact(data[0][factField]);
      } else {
        // No fact for today — use static fun fact from data.js
        UIController.renderNewsFact(
          GameState.todayAnswer
            ? GameState.todayAnswer.fun_fact
            : i18n.t('news_fallback')
        );
      }
    })
    .catch(function (err) {
      clearTimeout(fetchTimeout);
      console.warn('[app.js] Could not load daily fact:', err);
      // Fallback to static fun fact
      UIController.renderNewsFact(
        GameState.todayAnswer
          ? GameState.todayAnswer.fun_fact
          : i18n.t('news_fallback')
      );
    });
  }


  // ═══════════════════════════════════════════════
  // 7. CHECK FOR NEW DAY
  // Called on page visibility change
  // ═══════════════════════════════════════════════

  /**
   * Check if the date has changed since the game was loaded.
   * If yes — reload the page so user gets the new puzzle.
   *
   * @returns {void}
   */
  function checkForNewDay() {
    var savedDate = GameState.todayDate;

    var now   = new Date();
    var year  = now.getUTCFullYear();
    var month = String(now.getUTCMonth() + 1).padStart(2, '0');
    var day   = String(now.getUTCDate()).padStart(2, '0');
    var today = year + '-' + month + '-' + day;

    if (savedDate && savedDate !== today) {
      console.log('[app.js] New day detected! Reloading...');
      UIController.showToast(
        '🌍 New mystery country available! Reloading...',
        'info',
        2000
      );
      setTimeout(function () {
        window.location.reload();
      }, 2000);
    }
  }


  // ═══════════════════════════════════════════════
  // 8. SHORTHAND REFERENCES
  // Local aliases for global functions/objects
  // (keeps code readable, avoids window. everywhere)
  // ═══════════════════════════════════════════════

  var UIController  = window.UIController;
  var StreakManager  = window.StreakManager;
  var GameState      = window.GameState;
  var i18n           = window.i18n;

  // state.js functions
  var initState      = window.initState;
  var saveGuess      = window.saveGuess;
  var hasPlayedToday = window.hasPlayedToday;
  var isGameActive   = window.isGameActive;
  var updateStats    = window.updateStats;
  var getStats       = window.getStats;
  var getPrefs       = window.getPrefs;
  var savePrefs      = window.savePrefs;
  var getRemainingGuesses = window.getRemainingGuesses;
  var getDayNumber   = window.getDayNumber;

  // logic.js functions
  var evaluateGuess       = window.evaluateGuess;
  var findCountryIdByName = window.findCountryIdByName;
  var isValidCountryName  = window.isValidCountryName;
  var isDuplicateGuess    = window.isDuplicateGuess;

  // share.js functions
  var shareResult = window.shareResult;

  // streak.js functions
  var showBadgeToast = window.showBadgeToast;


  // ═══════════════════════════════════════════════
  // 9. EXPOSE KEY FUNCTIONS FOR result.html
  // result.html needs access to some app functions
  // ═══════════════════════════════════════════════

  window.AppController = {
    handleGameEnd:  handleGameEnd,
    loadDailyFact:  loadDailyFact,
    restoreGame:    restoreGame
  };


  // ═══════════════════════════════════════════════
  // 10. START — DOMContentLoaded
  // ═══════════════════════════════════════════════

  /**
   * Wait for DOM to be ready before initializing.
   * If DOM is already ready (script is deferred), run now.
   */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    // DOM already parsed
    init();
  }


  // ═══════════════════════════════════════════════
  // 11. ERROR BOUNDARY
  // Catch any uncaught errors and show graceful message
  // ═══════════════════════════════════════════════

  window.addEventListener('error', function (e) {
    console.error('[app.js] Uncaught error:', e.error || e.message);

    // Don't show toast for map tile load errors (common + harmless)
    if (e.filename && e.filename.indexOf('tile') !== -1) return;
    if (e.message && e.message.indexOf('ResizeObserver') !== -1) return;

    // Show user-friendly error
    if (window.UIController && window.UIController.showToast) {
      window.UIController.showToast(
        '⚠️ Something went wrong. Try refreshing!',
        'error',
        5000
      );
    }
  });

  window.addEventListener('unhandledrejection', function (e) {
    console.warn('[app.js] Unhandled promise rejection:', e.reason);
    // Silently handle — most are network errors
  });


  console.log('[app.js] Main controller loaded');

})();
