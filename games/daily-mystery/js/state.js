/* ═══════════════════════════════════════════════════════════
   DHARAVERSE MAP MYSTERY — GAME STATE MANAGER
   File: /games/daily-mystery/js/state.js

   DEPENDS ON: data.js (window.COUNTRIES, COUNTRY_LOOKUP)
   USED BY: app.js, ui.js, share.js, streak.js

   GAME RESETS AT: 8:00 AM IST every day
   (8:00 AM IST = 2:30 AM UTC)

   EXPORTS:
     window.GameState            → central state object
     window.initState()          → initialize / restore state
     window.getTodayCountry()    → seeded daily pick
     window.getDayNumber()       → days since launch (1-based)
     window.saveGuess(result)    → store guess, update status
     window.loadTodayProgress()  → read from localStorage
     window.saveTodayProgress()  → write to localStorage
     window.hasPlayedToday()     → boolean (won or lost)
     window.getTodayKey()        → "dmm_progress_YYYY-MM-DD"
     window.getStats()           → all-time stats object
     window.saveStats(stats)     → persist stats
     window.updateStats(w,n)     → record game result
     window.getWinPercentage()   → 0-100
     window.getPrefs()           → user preferences
     window.savePrefs(prefs)     → persist preferences
     window.getRemainingGuesses()→ 0-6
     window.isGameActive()       → boolean
     window.getTimeTaken()       → seconds | null
     window.getMillisUntilNextGame() → ms until 8 AM IST
     window.formatCountdown(ms)  → "HH:MM:SS"

   LOCALSTORAGE KEYS:
     "dmm_progress_YYYY-MM-DD"  → daily game state
     "dmm_streak"               → streak (used by streak.js)
     "dmm_stats"                → all-time statistics
     "dmm_prefs"                → user preferences
   ═══════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ─────────────────────────────────────────────
     CONSTANTS
     ───────────────────────────────────────────── */

  /** Game launch date — Day #1 (IST) */
  var LAUNCH_DATE = new Date(Date.UTC(2025, 0, 1)); // Jan 1 2025 UTC

  /** Maximum guesses per game */
  var MAX_GUESSES = 6;

  /** LocalStorage key prefixes / names */
  var LS_PREFIX = 'dmm_progress_';
  var LS_STREAK = 'dmm_streak';
  var LS_STATS  = 'dmm_stats';
  var LS_PREFS  = 'dmm_prefs';

  /** Days of old saves to keep */
  var CLEANUP_DAYS = 30;

  /* ─────────────────────────────────────────────
     IST / RESET CONSTANTS
     Game resets at 8:00 AM IST every day.
     8:00 AM IST = 02:30 AM UTC same day.
     ───────────────────────────────────────────── */
  var IST_OFFSET_MS  = 5.5 * 60 * 60 * 1000; // UTC+5:30
  var RESET_HOUR_IST = 8;                      // 8 AM IST


  /* ══════════════════════════════════════════════
     1. CENTRAL GAME STATE OBJECT
     ══════════════════════════════════════════════ */
  window.GameState = {
    todayAnswer:  null,      // Country object from data.js
    todayIndex:   null,      // Index in window.COUNTRIES
    dayNumber:    null,      // Day # since launch (1-based)
    todayDate:    null,      // "YYYY-MM-DD" IST game date
    guesses:      [],        // Array of evaluateGuess() results
    gameStatus:   'playing', // "playing" | "won" | "lost"
    maxGuesses:   MAX_GUESSES,
    startTime:    null,      // Unix ms
    endTime:      null       // Unix ms
  };

  /** Expose MAX_GUESSES for app.js / ui.js */
  window.MAX_GUESSES = MAX_GUESSES;


  /* ══════════════════════════════════════════════
     2. IST DATE / TIME HELPERS
     All date logic uses IST with 8 AM reset.
     ══════════════════════════════════════════════ */

  /**
   * Zero-pad a number to 2 digits.
   * @param {number} n
   * @returns {string}
   */
  function _pad(n) {
    return String(n).padStart(2, '0');
  }

  /**
   * Get the current IST Date object.
   * @returns {Date} Date shifted to IST
   */
  function _nowIST() {
    return new Date(Date.now() + IST_OFFSET_MS);
  }

  /**
   * Get the "game date" in IST accounting for 8 AM reset.
   *
   * Rules:
   *   Before 8:00 AM IST → still yesterday's game
   *   8:00 AM IST onward → today's game
   *
   * @returns {Date} IST Date object for current game session
   */
  function _gameDate() {
    var nowIST = _nowIST();
    var hour   = nowIST.getUTCHours();

    if (hour < RESET_HOUR_IST) {
      /* Before 8 AM IST — still on previous day's game */
      return new Date(nowIST.getTime() - 86400000);
    }

    return nowIST;
  }

  /**
   * Today's game date as "YYYY-MM-DD" string (IST, 8 AM reset).
   *
   * Used by:
   *   getTodayKey() → localStorage key
   *   loadTodayProgress() → date validation
   *   updateStats() → prevent double-counting
   *
   * @returns {string} e.g. "2025-06-23"
   */
  function _todayString() {
    var gd = _gameDate();
    return gd.getUTCFullYear() + '-' +
      _pad(gd.getUTCMonth() + 1) + '-' +
      _pad(gd.getUTCDate());
  }

  /**
   * UTC timestamp of today's 8 AM IST reset.
   *
   * 8 AM IST = (8 * 60 - 330) mins from UTC midnight
   *           = 2h 30m UTC
   *
   * @returns {number} UTC ms of today's reset
   */
  function _todayResetUTC() {
    var gd = _gameDate();

    /* Build 8:00 AM IST on game date as UTC timestamp */
    var resetIST = Date.UTC(
      gd.getUTCFullYear(),
      gd.getUTCMonth(),
      gd.getUTCDate(),
      RESET_HOUR_IST, 0, 0, 0
    );

    /* Subtract IST offset → actual UTC time */
    return resetIST - IST_OFFSET_MS;
  }

  /**
   * Milliseconds until the NEXT 8 AM IST reset.
   *
   * Examples:
   *   Current time 6:00 AM IST  → ~2 hours (same day)
   *   Current time 9:00 AM IST  → ~23 hours (next day)
   *   Current time 8:00 PM IST  → ~12 hours (next day)
   *
   * Used by: app.js → countdown timer display
   * @returns {number} milliseconds ≥ 0
   */
  window.getMillisUntilNextGame = function () {
    var nowUTC  = Date.now();
    var nowIST  = _nowIST();
    var hour    = nowIST.getUTCHours();
    var min     = nowIST.getUTCMinutes();

    var nextResetIST;

    if (hour < RESET_HOUR_IST) {
      /* Before 8 AM → next reset is TODAY at 8 AM IST */
      nextResetIST = Date.UTC(
        nowIST.getUTCFullYear(),
        nowIST.getUTCMonth(),
        nowIST.getUTCDate(),
        RESET_HOUR_IST, 0, 0, 0
      );
    } else {
      /* 8 AM or later → next reset is TOMORROW at 8 AM IST */
      var tomorrowIST = new Date(nowIST.getTime() + 86400000);
      nextResetIST = Date.UTC(
        tomorrowIST.getUTCFullYear(),
        tomorrowIST.getUTCMonth(),
        tomorrowIST.getUTCDate(),
        RESET_HOUR_IST, 0, 0, 0
      );
    }

    /* Convert IST reset time to actual UTC */
    var nextResetUTC = nextResetIST - IST_OFFSET_MS;

    return Math.max(0, nextResetUTC - nowUTC);
  };

  /**
   * Format milliseconds as "HH:MM:SS" string.
   *
   * Used by: app.js / ui.js → #next-game-countdown
   * @param {number} ms
   * @returns {string} "HH:MM:SS"
   */
  window.formatCountdown = function (ms) {
    if (ms <= 0) return '00:00:00';
    var s = Math.floor(ms / 1000);
    return _pad(Math.floor(s / 3600)) + ':' +
           _pad(Math.floor((s % 3600) / 60)) + ':' +
           _pad(s % 60);
  };


  /* ══════════════════════════════════════════════
     3. DAY NUMBER (IST + 8 AM reset)
     ══════════════════════════════════════════════ */

  /**
   * Days since LAUNCH_DATE, 1-based.
   * Uses IST with 8 AM reset as the day boundary.
   *
   * Day #1 = Jan 1 2025, from 8 AM IST onward.
   *
   * @returns {number} e.g. 174
   *
   * Used by:
   *   app.js → UIController.updateDayNumber()
   *   ui.js  → buildHintText() seed
   *   getTodayCountry() → position in shuffle
   */
  window.getDayNumber = function () {
    var gd = _gameDate();

    /* Game day as UTC midnight */
    var gameDayMs = Date.UTC(
      gd.getUTCFullYear(),
      gd.getUTCMonth(),
      gd.getUTCDate()
    );

    /* Launch date as UTC midnight */
    var launchMs  = Date.UTC(
      LAUNCH_DATE.getUTCFullYear(),
      LAUNCH_DATE.getUTCMonth(),
      LAUNCH_DATE.getUTCDate()
    );

    var diffDays = Math.floor((gameDayMs - launchMs) / 86400000);
    return Math.max(1, diffDays + 1);
  };


  /* ══════════════════════════════════════════════
     4. SEEDED DAILY COUNTRY PICKER
     ══════════════════════════════════════════════ */

  /**
   * Mulberry32 seeded PRNG.
   * Deterministic: same seed → same number sequence.
   * @param {number} seed - integer
   * @returns {function} → float in [0, 1)
   */
  function _seededRng(seed) {
    return function () {
      seed = (seed + 0x6D2B79F5) | 0;
      var t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  /**
   * Fisher-Yates shuffle with seeded RNG.
   * Returns shuffled copy of indices [0 … length-1].
   * @param {number} length
   * @param {number} seed
   * @returns {number[]}
   */
  function _seededShuffle(length, seed) {
    var rng = _seededRng(seed);
    var arr = [];
    var i, j, tmp;

    for (i = 0; i < length; i++) arr[i] = i;

    for (i = length - 1; i > 0; i--) {
      j      = Math.floor(rng() * (i + 1));
      tmp    = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }

    return arr;
  }

  /**
   * Pick today's mystery country — deterministically.
   *
   * Algorithm:
   *  • Countries are divided into cycles of COUNTRIES.length days.
   *  • Each cycle has a unique seed → different order per cycle.
   *  • Within a cycle, dayNumber maps to exactly one country.
   *  • Guarantees: no repeats until all countries used once.
   *
   * @returns {object} Full country object from window.COUNTRIES
   *   (includes hint1_fact, hint4_sports, hint6_landmark, climate)
   *
   * Used by: initState()
   */
  window.getTodayCountry = function () {
    var total    = window.COUNTRIES.length;
    var dayNum   = window.getDayNumber();
    var cycle    = Math.floor((dayNum - 1) / total);
    var position = (dayNum - 1) % total;

    /* Different seed per cycle → reshuffled order */
    var seed     = 20250101 + cycle * 997;

    var shuffled = _seededShuffle(total, seed);
    return window.COUNTRIES[shuffled[position]];
  };


  /* ══════════════════════════════════════════════
     5. LOCALSTORAGE HELPERS
     ══════════════════════════════════════════════ */

  /**
   * Safe JSON read from localStorage.
   * @param {string} key
   * @returns {*|null}
   */
  function lsGet(key) {
    try {
      var raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      console.warn('[state.js] lsGet failed:', key, e.message);
      return null;
    }
  }

  /**
   * Safe JSON write to localStorage.
   * @param {string} key
   * @param {*} value
   */
  function lsSet(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.warn('[state.js] lsSet failed:', key, e.message);
    }
  }

  /**
   * Test if localStorage is available and writable.
   * @returns {boolean}
   */
  function lsAvailable() {
    try {
      var k = '__dmm_test__';
      localStorage.setItem(k, '1');
      localStorage.removeItem(k);
      return true;
    } catch (e) {
      return false;
    }
  }


  /* ══════════════════════════════════════════════
     6. TODAY'S LOCALSTORAGE KEY
     ══════════════════════════════════════════════ */

  /**
   * localStorage key for today's game progress.
   * Based on IST game date with 8 AM reset.
   *
   * @returns {string} e.g. "dmm_progress_2025-06-23"
   *
   * Used by: loadTodayProgress(), saveTodayProgress()
   */
  window.getTodayKey = function () {
    return LS_PREFIX + _todayString();
  };


  /* ══════════════════════════════════════════════
     7. SAVE / LOAD DAILY PROGRESS
     ══════════════════════════════════════════════ */

  /**
   * Saved progress object shape:
   * {
   *   version:    1,
   *   date:       "2025-06-23",   ← IST game date
   *   dayNumber:  174,
   *   countryId:  "kenya",
   *   guesses:    [ ...evaluateGuess() results ],
   *   gameStatus: "playing" | "won" | "lost",
   *   startTime:  1234567890123,
   *   endTime:    1234567890456 | null
   * }
   */

  /**
   * Load today's saved progress from localStorage.
   *
   * Validates:
   *   • Date matches today's IST game date
   *   • Country matches today's seeded pick
   *
   * @returns {object|null} Saved state or null
   *
   * Used by: initState(), hasPlayedToday()
   */
  window.loadTodayProgress = function () {
    var saved = lsGet(window.getTodayKey());
    if (!saved) return null;

    /* Date integrity check */
    if (saved.date !== _todayString()) {
      return null;
    }

    /* Country integrity check — protects against data.js updates */
    var expected = window.getTodayCountry();
    if (saved.countryId !== expected.id) {
      console.warn('[state.js] Country mismatch in save — resetting');
      return null;
    }

    return saved;
  };

  /**
   * Persist current GameState to localStorage.
   *
   * Called by:
   *   saveGuess()    → after every guess
   *   initState()    → on fresh game start
   */
  window.saveTodayProgress = function () {
    var gs = window.GameState;
    if (!gs || !gs.todayAnswer) return;

    lsSet(window.getTodayKey(), {
      version:    1,
      date:       gs.todayDate,
      dayNumber:  gs.dayNumber,
      countryId:  gs.todayAnswer.id,
      guesses:    gs.guesses,
      gameStatus: gs.gameStatus,
      startTime:  gs.startTime,
      endTime:    gs.endTime
    });
  };


  /* ══════════════════════════════════════════════
     8. HAS PLAYED TODAY
     ══════════════════════════════════════════════ */

  /**
   * True if today's game is already finished (won or lost).
   *
   * @returns {boolean}
   * Used by: app.js → init() decides restore vs fresh game
   */
  window.hasPlayedToday = function () {
    var saved = window.loadTodayProgress();
    if (!saved) return false;
    return saved.gameStatus === 'won' || saved.gameStatus === 'lost';
  };


  /* ══════════════════════════════════════════════
     9. SAVE A SINGLE GUESS
     ══════════════════════════════════════════════ */

  /**
   * Record one guess result in GameState and persist.
   *
   * Updates gameStatus:
   *   isCorrect         → "won"
   *   guesses === MAX   → "lost"
   *   otherwise         → remains "playing"
   *
   * @param {object} evalResult - From logic.js → evaluateGuess()
   *
   * Expected fields (minimum):
   * {
   *   guessId, guessName, guessFlag,
   *   guessLat, guessLng,
   *   isCorrect,
   *   distance, distanceFormatted,
   *   distanceFeedback: { tier, color, emoji, label },
   *   direction, arrow, bearingRotation,
   *   continentMatch:  { color, emoji, message },
   *   sizeComparison:  { type, ratio, emoji }
   * }
   *
   * Called by: app.js → handleGuessSubmit()
   */
  window.saveGuess = function (evalResult) {
    if (!evalResult) return;

    window.GameState.guesses.push(evalResult);

    if (evalResult.isCorrect) {
      window.GameState.gameStatus = 'won';
      window.GameState.endTime    = Date.now();
    } else if (window.GameState.guesses.length >= MAX_GUESSES) {
      window.GameState.gameStatus = 'lost';
      window.GameState.endTime    = Date.now();
    }

    window.saveTodayProgress();
  };


  /* ══════════════════════════════════════════════
     10. ALL-TIME STATISTICS
     ══════════════════════════════════════════════ */

  /** Default stats shape — merged with saved data */
  var _defaultStats = {
    totalGames:        0,
    totalWins:         0,
    totalLosses:       0,
    currentStreak:     0,
    bestStreak:        0,
    averageGuesses:    0,
    lastPlayedDate:    null,
    firstPlayedDate:   null,
    guessDistribution: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 }
  };

  /**
   * Read all-time stats, merged with defaults.
   *
   * @returns {object}
   * Used by: app.js, ui.js → sidebar stat cards
   */
  window.getStats = function () {
    var saved = lsGet(LS_STATS);
    var stats = JSON.parse(JSON.stringify(_defaultStats));

    if (!saved) return stats;

    var k;
    for (k in saved) {
      if (!saved.hasOwnProperty(k)) continue;
      if (k === 'guessDistribution' && typeof saved[k] === 'object') {
        var g;
        for (g in saved[k]) {
          if (saved[k].hasOwnProperty(g)) {
            stats.guessDistribution[g] = saved[k][g];
          }
        }
      } else {
        stats[k] = saved[k];
      }
    }

    return stats;
  };

  /**
   * Persist stats to localStorage.
   * @param {object} stats
   */
  window.saveStats = function (stats) {
    lsSet(LS_STATS, stats);
  };

  /**
   * Record result of a finished game.
   * Prevents double-counting if called more than once per day.
   *
   * @param {boolean} won        - Player won?
   * @param {number}  numGuesses - Guesses taken
   * @returns {object} Updated stats
   *
   * Called by: app.js → _handleGameEnd()
   */
  window.updateStats = function (won, numGuesses) {
    var stats = window.getStats();
    var today = _todayString();

    /* Guard: same IST game date = don't double-count */
    if (stats.lastPlayedDate === today) return stats;

    stats.totalGames++;
    stats.lastPlayedDate = today;

    if (!stats.firstPlayedDate) stats.firstPlayedDate = today;

    if (won) {
      stats.totalWins++;

      /* Guess distribution */
      var slot = Math.min(Math.max(numGuesses, 1), 6);
      stats.guessDistribution[slot] =
        (stats.guessDistribution[slot] || 0) + 1;

      /* Recalculate weighted average */
      var totalG = 0, totalW = 0;
      var g;
      for (g = 1; g <= 6; g++) {
        var cnt  = stats.guessDistribution[g] || 0;
        totalG  += g * cnt;
        totalW  += cnt;
      }
      stats.averageGuesses = totalW > 0
        ? Math.round((totalG / totalW) * 10) / 10
        : 0;

    } else {
      stats.totalLosses++;
    }

    window.saveStats(stats);
    return stats;
  };

  /**
   * Win percentage as integer 0–100.
   * @returns {number}
   */
  window.getWinPercentage = function () {
    var s = window.getStats();
    return s.totalGames === 0
      ? 0
      : Math.round((s.totalWins / s.totalGames) * 100);
  };


  /* ══════════════════════════════════════════════
     11. USER PREFERENCES
     ══════════════════════════════════════════════ */

  var _defaultPrefs = {
    language:        'en',
    hasSeenTutorial: false,
    soundEnabled:    true,
    theme:           'default'
  };

  /**
   * Read preferences merged with defaults.
   * @returns {object}
   */
  window.getPrefs = function () {
    var saved = lsGet(LS_PREFS);
    var prefs = JSON.parse(JSON.stringify(_defaultPrefs));
    if (!saved) return prefs;
    var k;
    for (k in saved) {
      if (saved.hasOwnProperty(k)) prefs[k] = saved[k];
    }
    return prefs;
  };

  /**
   * Persist preferences.
   * @param {object} prefs
   */
  window.savePrefs = function (prefs) {
    lsSet(LS_PREFS, prefs);
  };


  /* ══════════════════════════════════════════════
     12. INIT STATE — main entry point
     Called once by app.js → init()
     ══════════════════════════════════════════════ */

  /**
   * Initialize or restore the full game state.
   *
   * Flow:
   *  1. Warn if localStorage unavailable
   *  2. Determine today's IST game date (8 AM reset)
   *  3. Pick today's country (seeded shuffle)
   *  4. Populate GameState
   *  5. Try to restore saved progress
   *     → Found: restore guesses + status
   *     → Not found: fresh game, save initial state
   *  6. Clean up old saves (>30 days)
   *
   * After this call:
   *  • GameState.todayAnswer  is a full country object
   *    (includes hint1_fact, hint4_sports, hint6_landmark, climate)
   *  • GameState.dayNumber    is set (IST 8 AM boundary)
   *  • GameState.todayDate    is "YYYY-MM-DD" IST game date
   *  • GameState.guesses      may have restored data
   *  • GameState.gameStatus   may be "won"|"lost" if already played
   *
   * Used by: app.js → init()
   */
  window.initState = function () {

    if (!lsAvailable()) {
      console.warn('[state.js] localStorage unavailable — progress will not be saved.');
    }

    var today      = _todayString();
    var dayNumber  = window.getDayNumber();
    var country    = window.getTodayCountry();

    /*
      country object from data.js includes:
        id, name, capital, continent, subregion,
        lat, lng, area, population, neighbors, flag,
        hemisphere_lat, hemisphere_lng,
        landlocked, island,
        climate,          ← for hint 3
        hint1_fact,       ← fun fact / national animal
        hint4_sports,     ← sports achievement
        hint6_landmark,   ← famous landmark
        fun_fact          ← fallback
    */

    /* Log without revealing answer */
    console.log(
      '[state.js] Day #' + dayNumber +
      ' | Date: '        + today +
      ' | Continent: '   + country.continent +
      ' | Reset: 8 AM IST' +
      ' | Status: initializing'
    );

    /* ── Set base state ── */
    window.GameState.todayAnswer = country;
    window.GameState.todayIndex  = window.COUNTRIES.indexOf(country);
    window.GameState.dayNumber   = dayNumber;
    window.GameState.todayDate   = today;
    window.GameState.maxGuesses  = MAX_GUESSES;

    /* ── Restore or fresh ── */
    var saved = window.loadTodayProgress();

    if (saved && Array.isArray(saved.guesses)) {
      /* Restore saved game */
      window.GameState.guesses    = saved.guesses;
      window.GameState.gameStatus = saved.gameStatus  || 'playing';
      window.GameState.startTime  = saved.startTime   || Date.now();
      window.GameState.endTime    = saved.endTime      || null;

      console.log(
        '[state.js] Restored: ' + saved.guesses.length +
        ' guesses, status: '    + saved.gameStatus
      );
    } else {
      /* Fresh game */
      window.GameState.guesses    = [];
      window.GameState.gameStatus = 'playing';
      window.GameState.startTime  = Date.now();
      window.GameState.endTime    = null;

      window.saveTodayProgress();

      console.log('[state.js] New game started');
    }

    /* Clean up stale saves */
    _cleanupOldProgress();
  };


  /* ══════════════════════════════════════════════
     13. CLEANUP OLD SAVES
     ══════════════════════════════════════════════ */

  /**
   * Remove localStorage entries older than CLEANUP_DAYS.
   * Runs silently during initState — non-critical.
   */
  function _cleanupOldProgress() {
    try {
      var cutoff   = new Date(Date.now() - CLEANUP_DAYS * 86400000);
      var toRemove = [];
      var i, key, dateStr, keyDate;

      for (i = 0; i < localStorage.length; i++) {
        key = localStorage.key(i);
        if (!key || key.indexOf(LS_PREFIX) !== 0) continue;

        dateStr = key.replace(LS_PREFIX, '');
        keyDate = new Date(dateStr + 'T00:00:00Z');

        if (!isNaN(keyDate.getTime()) && keyDate < cutoff) {
          toRemove.push(key);
        }
      }

      for (i = 0; i < toRemove.length; i++) {
        localStorage.removeItem(toRemove[i]);
      }

      if (toRemove.length > 0) {
        console.log('[state.js] Removed ' + toRemove.length + ' old saves');
      }
    } catch (e) {
      /* Silently fail — cosmetic only */
    }
  }


  /* ══════════════════════════════════════════════
     14. RUNTIME HELPERS
     ══════════════════════════════════════════════ */

  /**
   * Remaining guesses (0 to MAX_GUESSES).
   * @returns {number}
   * Used by: ui.js → updateAttemptsRemaining()
   */
  window.getRemainingGuesses = function () {
    return Math.max(0, MAX_GUESSES - window.GameState.guesses.length);
  };

  /**
   * True if game is still in progress.
   * @returns {boolean}
   * Used by: app.js → input validation guard
   */
  window.isGameActive = function () {
    return window.GameState.gameStatus === 'playing';
  };

  /**
   * Seconds from game start to game end.
   * @returns {number|null}
   */
  window.getTimeTaken = function () {
    var gs = window.GameState;
    if (!gs.startTime || !gs.endTime) return null;
    return Math.round((gs.endTime - gs.startTime) / 1000);
  };

  /**
   * Expose _todayString for app.js → _checkForNewDay()
   * so it can compare against saved game date.
   * @returns {string} "YYYY-MM-DD" IST game date
   */
  window.getTodayGameDate = function () {
    return _todayString();
  };


  console.log('[state.js] State manager loaded');

})();
