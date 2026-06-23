/* ═══════════════════════════════════════════════════════════
   DHARAVERSE MAP MYSTERY — GAME STATE MANAGER
   File: /games/daily-mystery/js/state.js

   DEPENDS ON: data.js (window.COUNTRIES, COUNTRY_LOOKUP)
   USED BY: app.js, ui.js, share.js, streak.js

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
     window.getMillisUntilNextGame() → ms until midnight UTC
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

  /** Game launch date — Day #1 (UTC) */
  var LAUNCH_DATE = new Date(Date.UTC(2026, 0, 1));

  /** Maximum guesses per game */
  var MAX_GUESSES = 6;

  /** LocalStorage key prefixes / names */
  var LS_PREFIX = 'dmm_progress_';
  var LS_STREAK = 'dmm_streak';   /* used by streak.js */
  var LS_STATS  = 'dmm_stats';
  var LS_PREFS  = 'dmm_prefs';

  /** How many days of old saves to keep */
  var CLEANUP_DAYS = 30;


  /* ══════════════════════════════════════════════
     1. CENTRAL GAME STATE OBJECT
     Read by: ui.js, share.js, streak.js, app.js
     Written by: initState(), saveGuess()
     ══════════════════════════════════════════════ */
  window.GameState = {
    /* Country object from data.js (with hint fields) */
    todayAnswer:   null,

    /* Index of today's country in window.COUNTRIES */
    todayIndex:    null,

    /* Day number since LAUNCH_DATE (1-based) */
    dayNumber:     null,

    /* "YYYY-MM-DD" UTC date string */
    todayDate:     null,

    /* Array of evaluateGuess() result objects */
    guesses:       [],

    /* "playing" | "won" | "lost" */
    gameStatus:    'playing',

    /* Maximum allowed guesses */
    maxGuesses:    MAX_GUESSES,

    /* Unix timestamps */
    startTime:     null,
    endTime:       null
  };

  /* Expose MAX_GUESSES so app.js / ui.js can read it */
  window.MAX_GUESSES = MAX_GUESSES;


  /* ══════════════════════════════════════════════
     2. DATE / TIME UTILITIES
     ══════════════════════════════════════════════ */

  /**
   * Today's date as "YYYY-MM-DD" (UTC).
   * @returns {string}
   */
  function _todayString() {
    var n = new Date();
    return n.getUTCFullYear() + '-' +
      _pad(n.getUTCMonth() + 1) + '-' +
      _pad(n.getUTCDate());
  }

  /**
   * Unix ms at UTC midnight today.
   * @returns {number}
   */
  function _todayMidnightUTC() {
    var n = new Date();
    return Date.UTC(n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate());
  }

  /** Zero-pad a number to 2 digits. */
  function _pad(n) { return String(n).padStart(2, '0'); }

  /**
   * Milliseconds until the next UTC midnight.
   * Used by: app.js → countdown timer in game-over banner.
   * @returns {number}
   */
  window.getMillisUntilNextGame = function () {
    return Math.max(0, _todayMidnightUTC() + 86400000 - Date.now());
  };

  /**
   * Format milliseconds as "HH:MM:SS".
   * Used by: app.js / ui.js → #next-game-countdown display.
   * @param {number} ms
   * @returns {string}
   */
  window.formatCountdown = function (ms) {
    if (ms <= 0) return '00:00:00';
    var s = Math.floor(ms / 1000);
    return _pad(Math.floor(s / 3600)) + ':' +
           _pad(Math.floor((s % 3600) / 60)) + ':' +
           _pad(s % 60);
  };


  /* ══════════════════════════════════════════════
     3. DAY NUMBER
     ══════════════════════════════════════════════ */

  /**
   * Days elapsed since LAUNCH_DATE, 1-based.
   * Day #1 = 2026-06-01 ITC.
   *
   * @returns {number}
   * Used by: app.js → UIController.updateDayNumber()
   *          app.js → hint seed
   *          ui.js  → buildHintText() seed
   */
  window.getDayNumber = function () {
    var diff = _todayMidnightUTC() - LAUNCH_DATE.getTime();
    return Math.floor(diff / 86400000) + 1;
  };


  /* ══════════════════════════════════════════════
     4. SEEDED DAILY COUNTRY PICKER
     ══════════════════════════════════════════════ */

  /**
   * Mulberry32 seeded PRNG — fast, deterministic.
   * Same seed → same sequence on every device.
   * @param {number} seed
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
   * Fisher-Yates shuffle using seeded RNG.
   * Returns a shuffled copy of [0 … length-1].
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
   *  • Divide days into cycles of COUNTRIES.length days each.
   *  • Each cycle uses a different seed so the order is reshuffled.
   *  • Within a cycle, dayNumber maps to one unique country.
   *  • Guaranteed: no repeat until every country has been used.
   *
   * @returns {object} Country object from window.COUNTRIES
   *                   (includes hint1_fact, hint4_sports,
   *                    hint6_landmark, climate — from data.js)
   *
   * Used by: initState()
   */
  window.getTodayCountry = function () {
    var total    = window.COUNTRIES.length;
    var dayNum   = window.getDayNumber();
    var cycle    = Math.floor((dayNum - 1) / total);
    var position = (dayNum - 1) % total;

    /* Seed changes per cycle → different order each round */
    var seed     = 20260601 + cycle * 997;

    var shuffled = _seededShuffle(total, seed);
    return window.COUNTRIES[shuffled[position]];
  };


  /* ══════════════════════════════════════════════
     5. LOCALSTORAGE HELPERS
     ══════════════════════════════════════════════ */

  /** Safe JSON read. @returns {*|null} */
  function lsGet(key) {
    try {
      var raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      console.warn('[state.js] lsGet failed:', key, e.message);
      return null;
    }
  }

  /** Safe JSON write. */
  function lsSet(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.warn('[state.js] lsSet failed:', key, e.message);
    }
  }

  /** Test localStorage availability. @returns {boolean} */
  function lsAvailable() {
    try {
      var k = '__dmm__';
      localStorage.setItem(k, '1');
      localStorage.removeItem(k);
      return true;
    } catch (e) {
      return false;
    }
  }


  /* ══════════════════════════════════════════════
     6. DAILY PROGRESS KEY
     ══════════════════════════════════════════════ */

  /**
   * LocalStorage key for today's progress.
   * @returns {string} e.g. "dmm_progress_2026-06-15"
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
   * Shape of a saved-progress object:
   * {
   *   version:    1,
   *   date:       "2026-06-15",
   *   dayNumber:  166,
   *   countryId:  "india",
   *   guesses:    [ ...evaluateGuess() results ],
   *   gameStatus: "playing"|"won"|"lost",
   *   startTime:  1234567890123,
   *   endTime:    1234567890456 | null
   * }
   */

  /**
   * Load today's saved progress from localStorage.
   *
   * Validates:
   *  • Date matches today (UTC)
   *  • Saved country matches today's seeded pick
   *    (protects against data.js updates mid-cycle)
   *
   * @returns {object|null}
   *
   * Used by: initState(), hasPlayedToday()
   */
  window.loadTodayProgress = function () {
    var saved = lsGet(window.getTodayKey());
    if (!saved) return null;

    /* Date check */
    if (saved.date !== _todayString()) return null;

    /* Country integrity check */
    var expected = window.getTodayCountry();
    if (saved.countryId !== expected.id) {
      console.warn('[state.js] Saved country mismatch — resetting progress');
      return null;
    }

    return saved;
  };

  /**
   * Persist current GameState to localStorage.
   *
   * Called by:
   *  • saveGuess()     → after each guess
   *  • initState()     → on fresh game start
   */
  window.saveTodayProgress = function () {
    var gs = window.GameState;
    if (!gs.todayAnswer) return;

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
   * True if today's game is already won or lost.
   * Used by: app.js → init() to decide restore vs fresh.
   * @returns {boolean}
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
   * Updates gameStatus to "won" or "lost" when appropriate.
   * Also saves hint data (from data.js fields) embedded in result.
   *
   * @param {object} evalResult - Output of logic.js → evaluateGuess()
   *   Expected shape (at minimum):
   *   {
   *     guessId:          string,
   *     guessName:        string,
   *     guessFlag:        string,
   *     guessLat:         number,
   *     guessLng:         number,
   *     isCorrect:        boolean,
   *     distance:         number,
   *     distanceFormatted:string,
   *     distanceFeedback: { tier, color, emoji, label },
   *     direction:        string,
   *     arrow:            string,
   *     bearingRotation:  number,
   *     continentMatch:   { color, emoji, message },
   *     sizeComparison:   { type, ratio, emoji }
   *   }
   *
   * Called by: app.js → handleGuessSubmit()
   */
  window.saveGuess = function (evalResult) {
    if (!evalResult) return;

    /* Append to guesses array */
    window.GameState.guesses.push(evalResult);

    /* Check win */
    if (evalResult.isCorrect) {
      window.GameState.gameStatus = 'won';
      window.GameState.endTime    = Date.now();
    }
    /* Check max guesses reached → lose */
    else if (window.GameState.guesses.length >= MAX_GUESSES) {
      window.GameState.gameStatus = 'lost';
      window.GameState.endTime    = Date.now();
    }

    /* Persist */
    window.saveTodayProgress();
  };


  /* ══════════════════════════════════════════════
     10. ALL-TIME STATISTICS
     ══════════════════════════════════════════════ */

  /** Default shape — merged with saved data to handle missing keys. */
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
   * Read all-time stats from localStorage.
   * Merges with defaults so old saves don't break.
   * @returns {object}
   *
   * Used by: app.js, ui.js → sidebar stat cards
   */
  window.getStats = function () {
    var saved  = lsGet(LS_STATS);
    var stats  = JSON.parse(JSON.stringify(_defaultStats));

    if (!saved) return stats;

    /* Shallow merge */
    var k;
    for (k in saved) {
      if (!saved.hasOwnProperty(k)) continue;
      if (k === 'guessDistribution' && typeof saved[k] === 'object') {
        for (var g in saved[k]) {
          if (saved[k].hasOwnProperty(g)) stats.guessDistribution[g] = saved[k][g];
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
   * Used by: updateStats()
   */
  window.saveStats = function (stats) {
    lsSet(LS_STATS, stats);
  };

  /**
   * Record the result of a finished game into all-time stats.
   * Prevents double-counting if called more than once per day.
   *
   * @param {boolean} won        - Did the player win?
   * @param {number}  numGuesses - How many guesses were needed?
   * @returns {object} Updated stats
   *
   * Called by: app.js → _handleGameEnd()
   */
  window.updateStats = function (won, numGuesses) {
    var stats = window.getStats();
    var today = _todayString();

    /* Guard: don't count same day twice */
    if (stats.lastPlayedDate === today) return stats;

    stats.totalGames++;
    stats.lastPlayedDate = today;

    if (!stats.firstPlayedDate) stats.firstPlayedDate = today;

    if (won) {
      stats.totalWins++;

      /* Guess distribution (keys 1–6) */
      var slot = Math.min(Math.max(numGuesses, 1), 6);
      stats.guessDistribution[slot] =
        (stats.guessDistribution[slot] || 0) + 1;

      /* Recalculate weighted average */
      var totalG = 0;
      var totalW = 0;
      for (var g = 1; g <= 6; g++) {
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
   * Used by: ui.js → updateSidebarStats()
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
    theme:           'default'   /* matches CSS data-theme values */
  };

  /**
   * Read user preferences (merged with defaults).
   * @returns {object}
   * Used by: app.js → first-time tutorial check
   */
  window.getPrefs = function () {
    var saved = lsGet(LS_PREFS);
    var prefs = JSON.parse(JSON.stringify(_defaultPrefs));
    if (!saved) return prefs;

    for (var k in saved) {
      if (saved.hasOwnProperty(k)) prefs[k] = saved[k];
    }
    return prefs;
  };

  /**
   * Persist user preferences.
   * @param {object} prefs
   * Used by: app.js → after tutorial seen, theme change
   */
  window.savePrefs = function (prefs) {
    lsSet(LS_PREFS, prefs);
  };


  /* ══════════════════════════════════════════════
     12. INIT STATE — main entry point
     Called once by app.js → init()
     ══════════════════════════════════════════════ */

  /**
   * Initialize (or restore) the full game state.
   *
   * Flow:
   *  1. Warn if localStorage unavailable
   *  2. Determine today's country (seeded pick from data.js)
   *  3. Populate GameState base fields
   *  4. Try to load saved progress for today
   *     → If found: restore guesses + status
   *     → If not:   start fresh, save initial state
   *  5. Clean up old saves (>30 days)
   *
   * After this call:
   *  • GameState.todayAnswer  is a full country object
   *    (includes hint1_fact, hint4_sports, hint6_landmark, climate)
   *  • GameState.dayNumber    is set
   *  • GameState.guesses      may have restored data
   *  • GameState.gameStatus   may be "won"|"lost" if already played
   *
   * Used by: app.js → init() (step 3)
   */
  window.initState = function () {

    /* Warn if storage unavailable (game still playable, won't save) */
    if (!lsAvailable()) {
      console.warn('[state.js] localStorage not available — progress will not be saved.');
    }

    var today      = _todayString();
    var dayNumber  = window.getDayNumber();
    var country    = window.getTodayCountry();

    /* country comes from data.js and includes:
       id, name, capital, continent, subregion,
       lat, lng, area, population, neighbors, flag,
       hemisphere_lat, hemisphere_lng,
       landlocked, island, climate,
       hint1_fact, hint4_sports, hint6_landmark,
       fun_fact                                       */

    /* Log without revealing the country */
    console.log(
      '[state.js] Day #' + dayNumber +
      ' | Date: '        + today +
      ' | Continent: '   + country.continent +
      ' | Status: initializing'
    );

    /* ── Populate base state ── */
    window.GameState.todayAnswer = country;
    window.GameState.todayIndex  = window.COUNTRIES.indexOf(country);
    window.GameState.dayNumber   = dayNumber;
    window.GameState.todayDate   = today;
    window.GameState.maxGuesses  = MAX_GUESSES;

    /* ── Try to restore saved progress ── */
    var saved = window.loadTodayProgress();

    if (saved && Array.isArray(saved.guesses)) {
      /* Restore */
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

      /* Persist initial state immediately */
      window.saveTodayProgress();

      console.log('[state.js] New game started');
    }

    /* Clean up stale saves silently */
    _cleanupOldProgress();
  };


  /* ══════════════════════════════════════════════
     13. CLEANUP OLD SAVES
     Runs silently during initState — non-critical
     ══════════════════════════════════════════════ */

  function _cleanupOldProgress() {
    try {
      var cutoff  = new Date(Date.now() - CLEANUP_DAYS * 86400000);
      var toRemove = [];

      for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        if (!key || key.indexOf(LS_PREFIX) !== 0) continue;

        var dateStr = key.replace(LS_PREFIX, '');
        var keyDate = new Date(dateStr + 'T00:00:00Z');

        if (!isNaN(keyDate.getTime()) && keyDate < cutoff) {
          toRemove.push(key);
        }
      }

      for (var j = 0; j < toRemove.length; j++) {
        localStorage.removeItem(toRemove[j]);
      }

      if (toRemove.length) {
        console.log('[state.js] Removed ' + toRemove.length + ' old saves');
      }
    } catch (e) {
      /* Silently fail — cleanup is cosmetic */
    }
  }


  /* ══════════════════════════════════════════════
     14. RUNTIME HELPERS
     ══════════════════════════════════════════════ */

  /**
   * Guesses remaining (0 – MAX_GUESSES).
   * Used by: ui.js → updateAttemptsRemaining()
   * @returns {number}
   */
  window.getRemainingGuesses = function () {
    return Math.max(0, MAX_GUESSES - window.GameState.guesses.length);
  };

  /**
   * True if game is still in progress.
   * Used by: app.js → input validation guard.
   * @returns {boolean}
   */
  window.isGameActive = function () {
    return window.GameState.gameStatus === 'playing';
  };

  /**
   * Seconds taken from first guess to game end.
   * @returns {number|null}
   */
  window.getTimeTaken = function () {
    var gs = window.GameState;
    if (!gs.startTime || !gs.endTime) return null;
    return Math.round((gs.endTime - gs.startTime) / 1000);
  };


  console.log('[state.js] State manager loaded');

})();
