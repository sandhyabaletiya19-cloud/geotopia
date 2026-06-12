/**
 * DHARAVERSE DAILY MAP MYSTERY
 * File: js/state.js
 * Purpose: Game state management — LocalStorage persistence,
 *          daily reset, guess history, game status
 * Depends on: js/data.js (must load first)
 * Used by: app.js, ui.js, share.js, streak.js
 * Version: 1.0
 */

'use strict';

// ═══════════════════════════════════════════
// GUARD
// ═══════════════════════════════════════════

if (typeof window.DharaData === 'undefined') {
  throw new Error('[DharaState] data.js must load before state.js');
}

const { getDailyCountry, getTodayDayNumber, COUNTRIES } = window.DharaData;

// ═══════════════════════════════════════════
// STORAGE KEYS
// All stored under these exact keys in localStorage
// ═══════════════════════════════════════════

const STORAGE_KEYS = {
  DAILY_STATE:   'dharaverse_daily_state',   // Today's game
  STREAK:        'dharaverse_streak',         // Streak data
  STATS:         'dharaverse_stats',          // All-time stats
  SETTINGS:      'dharaverse_settings',       // User prefs
  PLAYED_DAYS:   'dharaverse_played_days',    // Array of day numbers
  DAILY_FACT:    'dharaverse_daily_fact',     // Today's news fact
};

// ═══════════════════════════════════════════
// DEFAULT STATE SHAPES
// ═══════════════════════════════════════════

const DEFAULT_DAILY_STATE = {
  dayNumber:       null,       // Today's day number
  targetCode:      null,       // ISO code of answer
  guesses:         [],         // Array of guess results
  status:          'playing',  // 'playing'|'won'|'lost'
  startedAt:       null,       // ISO timestamp
  finishedAt:      null,       // ISO timestamp
  revealedTarget:  false,      // True after win/lose
  currentAttempt:  0,          // 0-5
  score:           0,          // Final score
};

const DEFAULT_STATS = {
  totalPlayed:   0,
  totalWon:      0,
  totalLost:     0,
  winRate:       0,
  avgAttempts:   0,
  bestAttempt:   6,
  distribution:  { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 },
  lastPlayed:    null,
  highScore:     0,
};

const DEFAULT_SETTINGS = {
  language:      'auto',        // 'auto'|'en'|'hi'
  colorblind:    false,
  reducedMotion: false,
  notifications: false,
  darkMode:      true,          // Always true for now
};

// ═══════════════════════════════════════════
// SAFE LOCALSTORAGE WRAPPER
// ═══════════════════════════════════════════

const Storage = {
  get(key, defaultValue = null) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (err) {
      console.warn(`[DharaState] Storage.get failed for key "${key}":`, err);
      return defaultValue;
    }
  },
  
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (err) {
      console.warn(`[DharaState] Storage.set failed for key "${key}":`, err);
      return false;
    }
  },
  
  remove(key) {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (err) {
      return false;
    }
  },
  
  clear() {
    try {
      // Only clear dharaverse keys, not entire localStorage
      Object.values(STORAGE_KEYS).forEach(key => localStorage.removeItem(key));
      return true;
    } catch (err) {
      return false;
    }
  }
};

// ═══════════════════════════════════════════
// DAILY STATE MANAGEMENT
// ═══════════════════════════════════════════

/**
 * Initialize or load today's game state
 * Called once on page load by app.js
 * @returns {Object} Current game state
 */
function initDailyState() {
  const todayNum   = getTodayDayNumber();
  const target     = getDailyCountry(todayNum);
  const saved      = Storage.get(STORAGE_KEYS.DAILY_STATE);
  
  // Check if saved state is for TODAY
  if (saved && saved.dayNumber === todayNum) {
    // Resume today's game
    console.log(`[DharaState] Resuming Day #${todayNum} — ${saved.status}`);
    return saved;
  }
  
  // New day or first time — fresh state
  const freshState = {
    ...DEFAULT_DAILY_STATE,
    dayNumber:    todayNum,
    targetCode:   target.code,
    startedAt:    new Date().toISOString(),
    guesses:      [],
    status:       'playing',
    currentAttempt: 0,
  };
  
  Storage.set(STORAGE_KEYS.DAILY_STATE, freshState);
  console.log(`[DharaState] New game — Day #${todayNum}, target: [hidden]`);
  return freshState;
}

/**
 * Save current game state
 * @param {Object} state - Updated state object
 */
function saveDailyState(state) {
  Storage.set(STORAGE_KEYS.DAILY_STATE, state);
}

/**
 * Get current game state (read-only)
 * @returns {Object} Game state
 */
function getDailyState() {
  return Storage.get(STORAGE_KEYS.DAILY_STATE, DEFAULT_DAILY_STATE);
}

// ═══════════════════════════════════════════
// GUESS RECORDING
// ═══════════════════════════════════════════

/**
 * Record a new guess to state
 * Called by app.js after evaluateGuess()
 * 
 * @param {Object} state       - Current game state
 * @param {Object} guessResult - Output of evaluateGuess() from logic.js
 * @returns {Object}           - Updated state
 */
function recordGuess(state, guessResult) {
  if (state.status !== 'playing') {
    console.warn('[DharaState] Cannot record guess — game already over');
    return state;
  }
  
  const updatedState = { ...state };
  
  // Add guess result to history
  // Store serializable version (no circular refs)
  updatedState.guesses = [...state.guesses, {
    guessCode:    guessResult.guess.code,
    guessName:    guessResult.guess.name,
    guessFlag:    guessResult.guess.flag,
    isCorrect:    guessResult.isCorrect,
    km:           guessResult.distance.km,
    formatted:    guessResult.distance.formatted,
    distanceTone: guessResult.distance.tier.tone,
    dirEmoji:     guessResult.direction.emoji,
    dirLabel:     guessResult.direction.label,
    dirDegrees:   guessResult.direction.degrees,
    continentMatch: guessResult.continent.match,
    continentEmoji: guessResult.continent.emoji,
    continentLabel: guessResult.continent.label,
    continentTile:  guessResult.continent.tile,
    sizeLabel:    guessResult.size.label,
    sizeEmoji:    guessResult.size.emoji,
    sizeDesc:     guessResult.size.description,
    popDesc:      guessResult.population.description,
    message:      guessResult.message,
    tileColor:    guessResult.tileColor,
    timestamp:    new Date().toISOString()
  }];
  
  updatedState.currentAttempt = updatedState.guesses.length;
  
  // Check win/lose
  if (guessResult.isCorrect) {
    updatedState.status         = 'won';
    updatedState.finishedAt     = new Date().toISOString();
    updatedState.revealedTarget = true;
  } else if (updatedState.currentAttempt >= 6) {
    updatedState.status         = 'lost';
    updatedState.finishedAt     = new Date().toISOString();
    updatedState.revealedTarget = true;
  }
  
  saveDailyState(updatedState);
  return updatedState;
}

// ═══════════════════════════════════════════
// STATS MANAGEMENT
// ═══════════════════════════════════════════

/**
 * Get all-time statistics
 * @returns {Object} Stats object
 */
function getStats() {
  return { ...DEFAULT_STATS, ...Storage.get(STORAGE_KEYS.STATS, {}) };
}

/**
 * Update stats after game ends
 * Called by app.js when status changes to won/lost
 * @param {Object} state - Final game state
 */
function updateStats(state) {
  const stats = getStats();
  
  stats.totalPlayed++;
  stats.lastPlayed = new Date().toISOString();
  
  if (state.status === 'won') {
    stats.totalWon++;
    const attempts = state.currentAttempt;
    
    // Update distribution
    stats.distribution[attempts] = (stats.distribution[attempts] || 0) + 1;
    
    // Update average
    stats.avgAttempts = (
      (stats.avgAttempts * (stats.totalWon - 1) + attempts) / stats.totalWon
    );
    
    // Update best
    if (attempts < stats.bestAttempt || stats.bestAttempt === 6) {
      stats.bestAttempt = attempts;
    }
    
    // Update high score
    if (state.score > stats.highScore) {
      stats.highScore = state.score;
    }
  } else {
    stats.totalLost++;
  }
  
  stats.winRate = Math.round((stats.totalWon / stats.totalPlayed) * 100);
  
  Storage.set(STORAGE_KEYS.STATS, stats);
  
  // Track played days
  const playedDays = Storage.get(STORAGE_KEYS.PLAYED_DAYS, []);
  if (!playedDays.includes(state.dayNumber)) {
    playedDays.push(state.dayNumber);
    Storage.set(STORAGE_KEYS.PLAYED_DAYS, playedDays);
  }
  
  return stats;
}

// ═══════════════════════════════════════════
// SETTINGS MANAGEMENT
// ═══════════════════════════════════════════

/**
 * Get user settings
 * @returns {Object}
 */
function getSettings() {
  return { ...DEFAULT_SETTINGS, ...Storage.get(STORAGE_KEYS.SETTINGS, {}) };
}

/**
 * Update a single setting
 * @param {string} key   - Setting key
 * @param {*}      value - New value
 */
function updateSetting(key, value) {
  const settings = getSettings();
  settings[key] = value;
  Storage.set(STORAGE_KEYS.SETTINGS, settings);
  return settings;
}

// ═══════════════════════════════════════════
// DAILY FACT (from Supabase/API)
// ═══════════════════════════════════════════

/**
 * Cache today's daily fact locally
 * @param {Object} fact - {country_code, headline, joke, source}
 */
function cacheDailyFact(fact) {
  const cached = {
    ...fact,
    dayNumber:  getTodayDayNumber(),
    cachedAt:   new Date().toISOString()
  };
  Storage.set(STORAGE_KEYS.DAILY_FACT, cached);
}

/**
 * Get cached daily fact (if today's)
 * @returns {Object|null}
 */
function getCachedDailyFact() {
  const cached = Storage.get(STORAGE_KEYS.DAILY_FACT);
  if (!cached) return null;
  if (cached.dayNumber !== getTodayDayNumber()) return null;
  return cached;
}

// ═══════════════════════════════════════════
// TARGET COUNTRY ACCESSOR
// ═══════════════════════════════════════════

/**
 * Get today's target country object
 * IMPORTANT: Only call after game is over (won/lost)
 * During game, this is intentionally hidden from UI
 * @returns {Object} Country from data.js
 */
function getTodayTarget() {
  const todayNum = getTodayDayNumber();
  return getDailyCountry(todayNum);
}

/**
 * Get target country code (used for comparison in app.js)
 * @returns {string} ISO 2-letter code
 */
function getTodayTargetCode() {
  return getTodayTarget().code;
}

// ═══════════════════════════════════════════
// UTILITY: GUESS HISTORY FORMATTING
// ═══════════════════════════════════════════

/**
 * Get all guesses from current state, enriched with Country objects
 * @param {Object} state - Current game state
 * @returns {Array} Array of enriched guess objects
 */
function getEnrichedGuesses(state) {
  const { COUNTRIES } = window.DharaData;
  return state.guesses.map((g, index) => ({
    ...g,
    number:       index + 1,
    countryObj:   COUNTRIES.find(c => c.code === g.guessCode) || null
  }));
}

/**
 * Check if player has already played today
 * @returns {boolean}
 */
function hasPlayedToday() {
  const state = getDailyState();
  if (!state || !state.dayNumber) return false;
  return state.dayNumber === getTodayDayNumber() && 
         state.status !== 'playing';
}

/**
 * Check if game is still in progress today
 * @returns {boolean}
 */
function isGameInProgress() {
  const state = getDailyState();
  if (!state) return false;
  return state.dayNumber === getTodayDayNumber() && 
         state.status === 'playing';
}

// ═══════════════════════════════════════════
// DEBUG HELPERS (development only)
// ═══════════════════════════════════════════

/**
 * Reset today's game (for testing)
 * Remove in production or guard with flag
 */
function debugResetToday() {
  Storage.remove(STORAGE_KEYS.DAILY_STATE);
  console.log('[DharaState] ⚠️ Daily state reset for debugging');
}

/**
 * Reveal today's target in console (dev only)
 */
function debugRevealTarget() {
  const target = getTodayTarget();
  console.log('[DharaState] 🎯 Today\'s target:', target.name, target.flag);
  return target;
}

// ═══════════════════════════════════════════
// EXPORTS
// ═══════════════════════════════════════════

// Names used by other files:
// - app.js:    initDailyState, recordGuess, updateStats, 
//              getDailyState, getTodayTarget, getTodayTargetCode,
//              hasPlayedToday, getEnrichedGuesses
// - ui.js:     getDailyState, getStats, getSettings, hasPlayedToday
// - share.js:  getDailyState, getStats, getTodayTarget,
//              getTodayDayNumber
// - streak.js: getDailyState, getStats, updateStats,
//              hasPlayedToday

window.DharaState = {
  // Storage keys (for streak.js reference)
  STORAGE_KEYS,
  Storage,
  
  // Daily state
  initDailyState,
  getDailyState,
  saveDailyState,
  recordGuess,
  
  // Target
  getTodayTarget,
  getTodayTargetCode,
  
  // Guesses
  getEnrichedGuesses,
  
  // Stats
  getStats,
  updateStats,
  
  // Settings
  getSettings,
  updateSetting,
  
  // Daily fact cache
  cacheDailyFact,
  getCachedDailyFact,
  
  // Status checks
  hasPlayedToday,
  isGameInProgress,
  
  // Debug (remove in prod)
  debugResetToday,
  debugRevealTarget
};

console.log('[DharaState] State manager loaded ✓');
