/* ═══════════════════════════════════════════════════════════
   DHARAVERSE MAP MYSTERY — GAME STATE MANAGER
   File: /games/daily-mystery/js/state.js
   
   DEPENDS ON: data.js (window.COUNTRIES)
   USED BY: app.js, ui.js, share.js, streak.js
   
   EXPORTS:
     window.GameState          → state object
     window.initState()        → initialize/restore state
     window.getTodayCountry()  → seeded daily pick
     window.getDayNumber()     → day since launch
     window.saveGuess(result)  → store guess + update status
     window.loadTodayProgress()→ read from localStorage
     window.saveTodayProgress()→ write to localStorage
     window.hasPlayedToday()   → boolean
     window.getTodayKey()      → "dmm_progress_YYYY-MM-DD"
     window.getStats()         → all-time stats object
     window.saveStats(stats)   → persist stats
     window.getPrefs()         → user preferences
     window.savePrefs(prefs)   → persist preferences
   
   LOCALSTORAGE KEYS:
     "dmm_progress_YYYY-MM-DD" → daily game state
     "dmm_streak"              → streak data (read by streak.js)
     "dmm_stats"               → all-time statistics
     "dmm_prefs"               → user preferences
   ═══════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  // ─────────────────────────────────────────────
  // CONSTANTS
  // ─────────────────────────────────────────────

  /** Game launch date — Day #1 */
  var LAUNCH_DATE = new Date(Date.UTC(2025, 0, 1)); // January 1, 2025

  /** Maximum guesses per game */
  var MAX_GUESSES = 6;

  /** LocalStorage key prefixes */
  var LS_PREFIX = 'dmm_progress_';
  var LS_STREAK = 'dmm_streak';
  var LS_STATS = 'dmm_stats';
  var LS_PREFS = 'dmm_prefs';


  // ═══════════════════════════════════════════════
  // 1. GAME STATE OBJECT
  // ═══════════════════════════════════════════════

  /**
   * The central game state.
   * Read by: ui.js, share.js, streak.js, app.js
   * Written by: initState(), saveGuess()
   */
  window.GameState = {
    todayAnswer: null,       // Country object from data.js
    todayIndex: null,        // Index into COUNTRIES array
    dayNumber: null,         // Day # since launch (1, 2, 3...)
    guesses: [],             // Array of evaluateGuess() results
    gameStatus: 'playing',   // "playing" | "won" | "lost"
    maxGuesses: MAX_GUESSES,
    startTime: null,         // Timestamp when game started
    endTime: null,           // Timestamp when game ended
    todayDate: null          // "YYYY-MM-DD" string
  };


  // ═══════════════════════════════════════════════
  // 2. DATE UTILITIES
  // ═══════════════════════════════════════════════

  /**
   * Get today's date as "YYYY-MM-DD" string in UTC.
   * @returns {string}
   */
  function getTodayDateString() {
    var now = new Date();
    var year = now.getUTCFullYear();
    var month = String(now.getUTCMonth() + 1).padStart(2, '0');
    var day = String(now.getUTCDate()).padStart(2, '0');
    return year + '-' + month + '-' + day;
  }

  /**
   * Get milliseconds since epoch at UTC midnight today.
   * @returns {number}
   */
  function getTodayMidnightUTC() {
    var now = new Date();
    return Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
  }

  /**
   * Get milliseconds until next UTC midnight.
   * Used by: app.js → countdown timer
   * @returns {number} milliseconds remaining
   */
  window.getMillisUntilNextGame = function () {
    var now = Date.now();
    var todayMidnight = getTodayMidnightUTC();
    var tomorrowMidnight = todayMidnight + 86400000; // +24 hours
    return Math.max(0, tomorrowMidnight - now);
  };

  /**
   * Format milliseconds into HH:MM:SS string.
   * Used by: app.js → countdown display
   * @param {number} ms - milliseconds
   * @returns {string} "HH:MM:SS"
   */
  window.formatCountdown = function (ms) {
    if (ms <= 0) return '00:00:00';

    var totalSeconds = Math.floor(ms / 1000);
    var hours = Math.floor(totalSeconds / 3600);
    var minutes = Math.floor((totalSeconds % 3600) / 60);
    var seconds = totalSeconds % 60;

    return (
      String(hours).padStart(2, '0') + ':' +
      String(minutes).padStart(2, '0') + ':' +
      String(seconds).padStart(2, '0')
    );
  };


  // ═══════════════════════════════════════════════
  // 3. DAILY COUNTRY PICKER (deterministic)
  // ═══════════════════════════════════════════════

  /**
   * Get the day number since game launch.
   * Day #1 = LAUNCH_DATE (Jan 1, 2025)
   *
   * @returns {number} Day number (1-based)
   *
   * Used by: app.js → UIController.updateDayNumber()
   */
  window.getDayNumber = function () {
    var todayMs = getTodayMidnightUTC();
    var launchMs = LAUNCH_DATE.getTime();
    var diffDays = Math.floor((todayMs - launchMs) / 86400000);
    return diffDays + 1; // 1-based
  };

  /**
   * Seeded pseudo-random number generator.
   * Mulberry32 algorithm — deterministic, same seed = same sequence.
   *
   * @param {number} seed - Integer seed
   * @returns {function} Generator function returning 0-1 float
   */
  function seededRandom(seed) {
    return function () {
      seed |= 0;
      seed = (seed + 0x6D2B79F5) | 0;
      var t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  /**
   * Fisher-Yates shuffle with seeded RNG.
   * Creates a deterministic permutation of array indices.
   *
   * @param {number} length - Array length
   * @param {number} seed - RNG seed
   * @returns {Array} Shuffled array of indices [0..length-1]
   */
  function seededShuffle(length, seed) {
    var rng = seededRandom(seed);
    var indices = [];
    var i, j, temp;

    for (i = 0; i < length; i++) {
      indices[i] = i;
    }

    for (i = length - 1; i > 0; i--) {
      j = Math.floor(rng() * (i + 1));
      temp = indices[i];
      indices[i] = indices[j];
      indices[j] = temp;
    }

    return indices;
  }

  /**
   * Get today's mystery country using a seeded shuffle.
   *
   * Algorithm:
   * 1. Use a fixed seed to create a shuffled order of all countries
   * 2. dayNumber maps to a position in the shuffled array
   * 3. Same day = same country worldwide
   * 4. Countries cycle after all 197 are used, with different seed
   *
   * This ensures:
   * - No repeat until all countries shown
   * - Deterministic (same result for all users)
   * - Not predictable by looking at data.js order
   *
   * @returns {object} Country object from window.COUNTRIES
   *
   * Used by: initState()
   */
  window.getTodayCountry = function () {
    var countryCount = window.COUNTRIES.length;
    var dayNum = window.getDayNumber();

    // Which cycle are we in? (each cycle covers all countries)
    var cycle = Math.floor((dayNum - 1) / countryCount);

    // Position within current cycle
    var position = (dayNum - 1) % countryCount;

    // Seed changes each cycle so order is different
    var seed = 20250101 + cycle;

    // Get shuffled indices for this cycle
    var shuffled = seededShuffle(countryCount, seed);

    // Pick country at this position
    var countryIndex = shuffled[position];

    return window.COUNTRIES[countryIndex];
  };


  // ═══════════════════════════════════════════════
  // 4. LOCALSTORAGE HELPERS
  // ═══════════════════════════════════════════════

  /**
   * Safely read from localStorage.
   * @param {string} key
   * @returns {*} Parsed value or null
   */
  function lsGet(key) {
    try {
      var data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (e) {
      console.warn('[state.js] Error reading localStorage:', key, e);
      return null;
    }
  }

  /**
   * Safely write to localStorage.
   * @param {string} key
   * @param {*} value - Will be JSON-stringified
   */
  function lsSet(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.warn('[state.js] Error writing localStorage:', key, e);
    }
  }

  /**
   * Check if localStorage is available.
   * @returns {boolean}
   */
  function lsAvailable() {
    try {
      var test = '__dmm_test__';
      localStorage.setItem(test, '1');
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  }


  // ═══════════════════════════════════════════════
  // 5. TODAY'S KEY
  // ═══════════════════════════════════════════════

  /**
   * Get the localStorage key for today's game progress.
   *
   * @returns {string} e.g. "dmm_progress_2025-01-15"
   *
   * Used by: loadTodayProgress(), saveTodayProgress()
   */
  window.getTodayKey = function () {
    return LS_PREFIX + getTodayDateString();
  };


  // ═══════════════════════════════════════════════
  // 6. SAVE / LOAD TODAY'S PROGRESS
  // ═══════════════════════════════════════════════

  /**
   * Load saved progress for today from localStorage.
   *
   * @returns {object|null} Saved state or null if no save exists
   *
   * Saved shape:
   * {
   *   date: "2025-01-15",
   *   dayNumber: 15,
   *   countryId: "india",
   *   guesses: [ ...evaluateGuess results ],
   *   gameStatus: "playing"|"won"|"lost",
   *   startTime: timestamp,
   *   endTime: timestamp|null
   * }
   */
  window.loadTodayProgress = function () {
    var key = window.getTodayKey();
    var saved = lsGet(key);

    if (!saved) return null;

    // Verify it's actually for today
    if (saved.date !== getTodayDateString()) {
      return null;
    }

    // Verify the country hasn't changed (edge case: data update)
    var todayCountry = window.getTodayCountry();
    if (saved.countryId !== todayCountry.id) {
      console.warn('[state.js] Saved country mismatch, resetting');
      return null;
    }

    return saved;
  };

  /**
   * Save current progress to localStorage.
   *
   * @returns {void}
   *
   * Called by: saveGuess(), handleGameEnd() in app.js
   */
  window.saveTodayProgress = function () {
    var key = window.getTodayKey();

    var saveData = {
      date: getTodayDateString(),
      dayNumber: window.GameState.dayNumber,
      countryId: window.GameState.todayAnswer.id,
      guesses: window.GameState.guesses,
      gameStatus: window.GameState.gameStatus,
      startTime: window.GameState.startTime,
      endTime: window.GameState.endTime
    };

    lsSet(key, saveData);
  };


  // ═══════════════════════════════════════════════
  // 7. HAS PLAYED TODAY
  // ═══════════════════════════════════════════════

  /**
   * Check if the user has already completed today's game.
   *
   * @returns {boolean} true if game is won or lost
   *
   * Used by: app.js → init() to decide whether to restore
   */
  window.hasPlayedToday = function () {
    var saved = window.loadTodayProgress();
    if (!saved) return false;
    return saved.gameStatus === 'won' || saved.gameStatus === 'lost';
  };


  // ═══════════════════════════════════════════════
  // 8. SAVE A GUESS
  // ═══════════════════════════════════════════════

  /**
   * Store a guess result in GameState and persist to localStorage.
   * Also updates gameStatus if the game is now won or lost.
   *
   * @param {object} evaluationResult - From evaluateGuess()
   * @returns {void}
   *
   * Called by: app.js → handleGuessSubmit()
   */
  window.saveGuess = function (evaluationResult) {
    if (!evaluationResult) return;

    // Add to guesses array
    window.GameState.guesses.push(evaluationResult);

    // Check win condition
    if (evaluationResult.isCorrect) {
      window.GameState.gameStatus = 'won';
      window.GameState.endTime = Date.now();
    }
    // Check lose condition
    else if (window.GameState.guesses.length >= MAX_GUESSES) {
      window.GameState.gameStatus = 'lost';
      window.GameState.endTime = Date.now();
    }

    // Persist
    window.saveTodayProgress();
  };


  // ═══════════════════════════════════════════════
  // 9. ALL-TIME STATISTICS
  // ═══════════════════════════════════════════════

  /**
   * Default stats object shape.
   * Stored in localStorage under "dmm_stats".
   */
  var DEFAULT_STATS = {
    totalGames: 0,
    totalWins: 0,
    totalLosses: 0,
    currentStreak: 0,
    bestStreak: 0,
    guessDistribution: {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0
    },
    averageGuesses: 0,
    lastPlayedDate: null,
    firstPlayedDate: null
  };

  /**
   * Get all-time stats from localStorage.
   *
   * @returns {object} Stats object (merged with defaults)
   *
   * Used by: app.js, ui.js → sidebar stats
   */
  window.getStats = function () {
    var saved = lsGet(LS_STATS);
    if (!saved) return JSON.parse(JSON.stringify(DEFAULT_STATS));

    // Merge with defaults to handle missing keys from old saves
    var stats = JSON.parse(JSON.stringify(DEFAULT_STATS));
    for (var key in saved) {
      if (saved.hasOwnProperty(key)) {
        if (key === 'guessDistribution' && typeof saved[key] === 'object') {
          for (var g in saved[key]) {
            if (saved[key].hasOwnProperty(g)) {
              stats.guessDistribution[g] = saved[key][g];
            }
          }
        } else {
          stats[key] = saved[key];
        }
      }
    }

    return stats;
  };

  /**
   * Save all-time stats to localStorage.
   *
   * @param {object} stats - Stats object
   * @returns {void}
   *
   * Called by: app.js → handleGameEnd()
   */
  window.saveStats = function (stats) {
    lsSet(LS_STATS, stats);
  };

  /**
   * Update stats after a game ends.
   *
   * @param {boolean} won - Whether the player won
   * @param {number} numGuesses - Number of guesses taken
   * @returns {object} Updated stats
   *
   * Called by: app.js → handleGameEnd()
   */
  window.updateStats = function (won, numGuesses) {
    var stats = window.getStats();
    var today = getTodayDateString();

    // Prevent double-counting same day
    if (stats.lastPlayedDate === today) {
      return stats;
    }

    stats.totalGames++;

    if (won) {
      stats.totalWins++;

      // Update guess distribution
      if (numGuesses >= 1 && numGuesses <= 6) {
        stats.guessDistribution[numGuesses] =
          (stats.guessDistribution[numGuesses] || 0) + 1;
      }

      // Recalculate average guesses
      var totalGuesses = 0;
      var totalWinsCount = 0;
      for (var g = 1; g <= 6; g++) {
        var count = stats.guessDistribution[g] || 0;
        totalGuesses += g * count;
        totalWinsCount += count;
      }
      stats.averageGuesses = totalWinsCount > 0
        ? Math.round((totalGuesses / totalWinsCount) * 10) / 10
        : 0;
    } else {
      stats.totalLosses++;
    }

    stats.lastPlayedDate = today;

    if (!stats.firstPlayedDate) {
      stats.firstPlayedDate = today;
    }

    window.saveStats(stats);
    return stats;
  };

  /**
   * Get win percentage.
   *
   * @returns {number} Percentage 0-100
   */
  window.getWinPercentage = function () {
    var stats = window.getStats();
    if (stats.totalGames === 0) return 0;
    return Math.round((stats.totalWins / stats.totalGames) * 100);
  };


  // ═══════════════════════════════════════════════
  // 10. USER PREFERENCES
  // ═══════════════════════════════════════════════

  /** Default preferences */
  var DEFAULT_PREFS = {
    language: 'en',
    hasSeenTutorial: false,
    soundEnabled: true,
    theme: 'dark'
  };

  /**
   * Get user preferences from localStorage.
   *
   * @returns {object} Preferences object
   */
  window.getPrefs = function () {
    var saved = lsGet(LS_PREFS);
    if (!saved) return JSON.parse(JSON.stringify(DEFAULT_PREFS));

    // Merge with defaults
    var prefs = JSON.parse(JSON.stringify(DEFAULT_PREFS));
    for (var key in saved) {
      if (saved.hasOwnProperty(key)) {
        prefs[key] = saved[key];
      }
    }
    return prefs;
  };

  /**
   * Save user preferences.
   *
   * @param {object} prefs - Preferences object
   * @returns {void}
   */
  window.savePrefs = function (prefs) {
    lsSet(LS_PREFS, prefs);
  };


  // ═══════════════════════════════════════════════
  // 11. INIT STATE (main entry point)
  // ═══════════════════════════════════════════════

  /**
   * Initialize the game state.
   * Called ONCE by app.js → init() at startup.
   *
   * Flow:
   * 1. Determine today's country
   * 2. Check for saved progress
   * 3. Restore or start fresh
   *
   * @returns {void}
   *
   * After calling:
   * - GameState.todayAnswer is set
   * - GameState.dayNumber is set
   * - GameState.guesses may have restored data
   * - GameState.gameStatus may be "won"/"lost" if already played
   */
  window.initState = function () {
    // Check localStorage availability
    if (!lsAvailable()) {
      console.warn('[state.js] localStorage not available. Game will work but won\'t save.');
    }

    // Get today's date and country
    var today = getTodayDateString();
    var dayNumber = window.getDayNumber();
    var todayCountry = window.getTodayCountry();

    console.log('[state.js] Day #' + dayNumber + ' | Date: ' + today + ' | Country: [hidden]');

    // Set base state
    window.GameState.todayAnswer = todayCountry;
    window.GameState.todayIndex = window.COUNTRIES.indexOf(todayCountry);
    window.GameState.dayNumber = dayNumber;
    window.GameState.todayDate = today;
    window.GameState.maxGuesses = MAX_GUESSES;

    // Try to restore saved progress
    var saved = window.loadTodayProgress();

    if (saved) {
      // Restore saved game
      window.GameState.guesses = saved.guesses || [];
      window.GameState.gameStatus = saved.gameStatus || 'playing';
      window.GameState.startTime = saved.startTime || Date.now();
      window.GameState.endTime = saved.endTime || null;

      console.log('[state.js] Restored saved game: ' +
        window.GameState.guesses.length + ' guesses, status: ' +
        window.GameState.gameStatus);
    } else {
      // Fresh game
      window.GameState.guesses = [];
      window.GameState.gameStatus = 'playing';
      window.GameState.startTime = Date.now();
      window.GameState.endTime = null;

      // Save initial state
      window.saveTodayProgress();

      console.log('[state.js] New game started');
    }

    // Clean up old progress entries (keep last 30 days)
    cleanupOldProgress();
  };


  // ═══════════════════════════════════════════════
  // 12. CLEANUP OLD SAVES
  // ═══════════════════════════════════════════════

  /**
   * Remove localStorage entries older than 30 days.
   * Prevents localStorage bloat over time.
   * Runs silently during init.
   */
  function cleanupOldProgress() {
    try {
      var keysToRemove = [];
      var today = new Date();
      var cutoff = new Date(today.getTime() - 30 * 86400000);

      for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        if (key && key.startsWith(LS_PREFIX)) {
          var dateStr = key.replace(LS_PREFIX, '');
          var keyDate = new Date(dateStr + 'T00:00:00Z');

          if (!isNaN(keyDate.getTime()) && keyDate < cutoff) {
            keysToRemove.push(key);
          }
        }
      }

      for (var j = 0; j < keysToRemove.length; j++) {
        localStorage.removeItem(keysToRemove[j]);
      }

      if (keysToRemove.length > 0) {
        console.log('[state.js] Cleaned up ' + keysToRemove.length + ' old saves');
      }
    } catch (e) {
      // Silently fail — cleanup is non-critical
    }
  }


  // ═══════════════════════════════════════════════
  // 13. HELPER: Get remaining guesses
  // ═══════════════════════════════════════════════

  /**
   * Get the number of guesses remaining.
   *
   * @returns {number} 0-6
   *
   * Used by: ui.js → updateAttemptsRemaining()
   */
  window.getRemainingGuesses = function () {
    return Math.max(0, MAX_GUESSES - window.GameState.guesses.length);
  };

  /**
   * Check if the game is still in progress.
   *
   * @returns {boolean}
   *
   * Used by: app.js → input validation
   */
  window.isGameActive = function () {
    return window.GameState.gameStatus === 'playing';
  };

  /**
   * Get the time taken to complete the game (in seconds).
   *
   * @returns {number|null} Seconds, or null if game not finished
   */
  window.getTimeTaken = function () {
    if (!window.GameState.endTime || !window.GameState.startTime) {
      return null;
    }
    return Math.round(
      (window.GameState.endTime - window.GameState.startTime) / 1000
    );
  };


  // Log initialization
  console.log('[state.js] State manager loaded');

})();
