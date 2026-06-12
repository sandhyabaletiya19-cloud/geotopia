/**
 * DHARAVERSE DAILY MAP MYSTERY
 * File: js/logic.js
 * Purpose: All game math — distance, direction, 
 *          size comparison, continent check, feedback
 * Depends on: js/data.js (must load first)
 * Used by: app.js, ui.js
 * Version: 1.0
 */

'use strict';

// ═══════════════════════════════════════════
// GUARD — Ensure data.js loaded first
// ═══════════════════════════════════════════

if (typeof window.DharaData === 'undefined') {
  throw new Error('[DharaLogic] data.js must load before logic.js');
}

const { COUNTRIES, CONTINENTS, getHemisphere, getSizeCategory } = window.DharaData;

// ═══════════════════════════════════════════
// CONSTANTS
// ═══════════════════════════════════════════

const EARTH_RADIUS_KM = 6371;

// Distance thresholds for feedback (km)
const DISTANCE_TIERS = [
  { max: 0,     label: "FOUND IT! 🎯",      emoji: "🎯", tone: "exact"    },
  { max: 500,   label: "BURNING HOT 🔥",     emoji: "🔥", tone: "burning"  },
  { max: 1500,  label: "VERY WARM ♨️",       emoji: "♨️", tone: "warm"     },
  { max: 3000,  label: "GETTING WARM 🌤️",   emoji: "🌤️", tone: "lukewarm" },
  { max: 6000,  label: "COLD ❄️",            emoji: "❄️", tone: "cold"     },
  { max: 10000, label: "FREEZING 🧊",        emoji: "🧊", tone: "freezing" },
  { max: Infinity, label: "ON MARS? 🚀",     emoji: "🚀", tone: "mars"     }
];

// Direction bearings → emoji + label
const DIRECTION_MAP = [
  { min: 0,    max: 22.5,  emoji: "⬆️",  label: "North"      },
  { min: 22.5, max: 67.5,  emoji: "↗️",  label: "Northeast"  },
  { min: 67.5, max: 112.5, emoji: "➡️",  label: "East"       },
  { min: 112.5,max: 157.5, emoji: "↘️",  label: "Southeast"  },
  { min: 157.5,max: 202.5, emoji: "⬇️",  label: "South"      },
  { min: 202.5,max: 247.5, emoji: "↙️",  label: "Southwest"  },
  { min: 247.5,max: 292.5, emoji: "⬅️",  label: "West"       },
  { min: 292.5,max: 337.5, emoji: "↖️",  label: "Northwest"  },
  { min: 337.5,max: 360,   emoji: "⬆️",  label: "North"      }
];

// Size ratio feedback thresholds
const SIZE_RATIO_TIERS = [
  { max: 0.1,  label: "MASSIVELY BIGGER",  emoji: "🐋", multiplier: true  },
  { max: 0.3,  label: "MUCH BIGGER",       emoji: "🐘", multiplier: true  },
  { max: 0.6,  label: "BIGGER",            emoji: "📈", multiplier: true  },
  { max: 0.8,  label: "SLIGHTLY BIGGER",   emoji: "↑",  multiplier: true  },
  { max: 1.2,  label: "SIMILAR SIZE",      emoji: "↔️", multiplier: false },
  { max: 1.7,  label: "SLIGHTLY SMALLER",  emoji: "↓",  multiplier: false },
  { max: 3.0,  label: "SMALLER",           emoji: "📉", multiplier: false },
  { max: 10.0, label: "MUCH SMALLER",      emoji: "🐁", multiplier: false },
  { max: Infinity, label: "TINY vs TARGET",emoji: "🔬", multiplier: false }
];

// ═══════════════════════════════════════════
// CORE MATH: HAVERSINE DISTANCE
// ═══════════════════════════════════════════

/**
 * Calculate great-circle distance between two points
 * Uses Haversine formula — accurate to <0.3%
 * @param {number} lat1 - Latitude of point 1 (degrees)
 * @param {number} lng1 - Longitude of point 1 (degrees)
 * @param {number} lat2 - Latitude of point 2 (degrees)
 * @param {number} lng2 - Longitude of point 2 (degrees)
 * @returns {number} Distance in kilometers
 */
function haversineDistance(lat1, lng1, lat2, lng2) {
  const toRad = deg => (deg * Math.PI) / 180;
  
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2);
    
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(EARTH_RADIUS_KM * c);
}

// ═══════════════════════════════════════════
// CORE MATH: BEARING (DIRECTION)
// ═══════════════════════════════════════════

/**
 * Calculate bearing from guess to target
 * Returns 0-360° clockwise from North
 * @param {number} lat1 - Guess latitude
 * @param {number} lng1 - Guess longitude
 * @param {number} lat2 - Target latitude
 * @param {number} lng2 - Target longitude
 * @returns {number} Bearing in degrees (0-360)
 */
function calculateBearing(lat1, lng1, lat2, lng2) {
  const toRad = deg => (deg * Math.PI) / 180;
  const toDeg = rad => (rad * 180) / Math.PI;
  
  const dLng = toRad(lng2 - lng1);
  const lat1Rad = toRad(lat1);
  const lat2Rad = toRad(lat2);
  
  const y = Math.sin(dLng) * Math.cos(lat2Rad);
  const x = Math.cos(lat1Rad) * Math.sin(lat2Rad) -
            Math.sin(lat1Rad) * Math.cos(lat2Rad) * Math.cos(dLng);
            
  const bearing = (toDeg(Math.atan2(y, x)) + 360) % 360;
  return Math.round(bearing);
}

/**
 * Convert bearing degrees to direction info
 * @param {number} bearing - 0-360 degrees
 * @returns {{emoji: string, label: string, degrees: number}}
 */
function bearingToDirection(bearing) {
  const dir = DIRECTION_MAP.find(d => bearing >= d.min && bearing < d.max) 
    || DIRECTION_MAP[0];
  return { ...dir, degrees: bearing };
}

// ═══════════════════════════════════════════
// DISTANCE FEEDBACK
// ═══════════════════════════════════════════

/**
 * Get distance tier info for a given km distance
 * @param {number} km
 * @returns {{max: number, label: string, emoji: string, tone: string}}
 */
function getDistanceTier(km) {
  return DISTANCE_TIERS.find(t => km <= t.max) || DISTANCE_TIERS[DISTANCE_TIERS.length - 1];
}

/**
 * Format distance for display
 * @param {number} km
 * @returns {string} e.g. "1,234 km"
 */
function formatDistance(km) {
  if (km === 0) return "0 km";
  if (km < 1000) return `${km} km`;
  return `${(km / 1000).toFixed(1).replace(/\.0$/, '')}K km`;
}

// ═══════════════════════════════════════════
// SIZE COMPARISON
// ═══════════════════════════════════════════

/**
 * Compare size of guess country vs target country
 * @param {Object} guessCountry  - Country object (from data.js)
 * @param {Object} targetCountry - Country object (from data.js)
 * @returns {{
 *   ratio: number,
 *   label: string,
 *   emoji: string,
 *   description: string,
 *   guessSize: Object,
 *   targetSize: Object
 * }}
 */
function compareSizes(guessCountry, targetCountry) {
  const ratio = guessCountry.area / targetCountry.area;
  
  let tier;
  if (ratio < 1) {
    // Guess is smaller than target
    tier = SIZE_RATIO_TIERS.find(t => ratio <= t.max) 
      || SIZE_RATIO_TIERS[SIZE_RATIO_TIERS.length - 1];
  } else {
    // Guess is larger or same
    const inverseRatio = targetCountry.area / guessCountry.area;
    tier = SIZE_RATIO_TIERS.find(t => inverseRatio <= t.max) 
      || SIZE_RATIO_TIERS[SIZE_RATIO_TIERS.length - 1];
  }
  
  // Build human-readable description
  let description;
  if (Math.abs(ratio - 1) < 0.2) {
    description = "About the same size";
  } else if (ratio < 1) {
    const times = (1 / ratio).toFixed(1);
    description = `Target is ${times}× bigger`;
  } else {
    const times = ratio.toFixed(1);
    description = `Target is ${times}× smaller`;
  }
  
  return {
    ratio,
    label: tier.label,
    emoji: tier.emoji,
    description,
    guessSize:  getSizeCategory(guessCountry),
    targetSize: getSizeCategory(targetCountry)
  };
}

// ═══════════════════════════════════════════
// CONTINENT COMPARISON
// ═══════════════════════════════════════════

/**
 * Compare continents between guess and target
 * @param {Object} guessCountry
 * @param {Object} targetCountry
 * @returns {{
 *   match: "exact"|"hemisphere"|"wrong",
 *   color: string,
 *   emoji: string,
 *   label: string,
 *   tile: "green"|"yellow"|"red"
 * }}
 */
function compareContinent(guessCountry, targetCountry) {
  if (guessCountry.continent === targetCountry.continent) {
    return {
      match:  "exact",
      color:  "var(--game-green)",
      emoji:  "🟢",
      label:  guessCountry.continent,
      tile:   "green"
    };
  }
  
  // Check hemisphere similarity
  const guessHem  = getHemisphere(guessCountry);
  const targetHem = getHemisphere(targetCountry);
  
  // Also check if continents share a landmass broadly
  const sameBroadRegion = checkBroadRegion(
    guessCountry.continent, 
    targetCountry.continent
  );
  
  if (guessHem === targetHem || sameBroadRegion) {
    return {
      match:  "hemisphere",
      color:  "var(--game-gold)",
      emoji:  "🟡",
      label:  `${guessCountry.continent} (nearby)`,
      tile:   "yellow"
    };
  }
  
  return {
    match:  "wrong",
    color:  "var(--game-red)",
    emoji:  "🔴",
    label:  guessCountry.continent,
    tile:   "red"
  };
}

/**
 * Check if two continents share a broad region
 * @param {string} cont1
 * @param {string} cont2
 * @returns {boolean}
 */
function checkBroadRegion(cont1, cont2) {
  const REGIONS = [
    ["Europe", "Asia"],            // Eurasia
    ["North America", "South America"], // Americas
    ["Africa", "Europe"],          // Mediterranean region
  ];
  return REGIONS.some(region => 
    region.includes(cont1) && region.includes(cont2)
  );
}

// ═══════════════════════════════════════════
// POPULATION COMPARISON
// ═══════════════════════════════════════════

/**
 * Compare population of guess vs target
 * @param {Object} guessCountry
 * @param {Object} targetCountry
 * @returns {{label: string, emoji: string, description: string}}
 */
function comparePopulation(guessCountry, targetCountry) {
  const ratio = guessCountry.population / targetCountry.population;
  
  if (Math.abs(ratio - 1) < 0.2) {
    return { label: "Similar population", emoji: "≈", description: "About the same" };
  } else if (ratio < 1) {
    const times = (1 / ratio).toFixed(1);
    return { 
      label: `Target has ${times}× more people`, 
      emoji: "📈", 
      description: `Target has ${times}× more people` 
    };
  } else {
    const times = ratio.toFixed(1);
    return { 
      label: `Target has ${times}× fewer people`, 
      emoji: "📉", 
      description: `Target has ${times}× fewer people` 
    };
  }
}

// ═══════════════════════════════════════════
// MAIN GUESS EVALUATOR
// ═══════════════════════════════════════════

/**
 * Evaluate a single guess against the target
 * This is the CORE function called on each guess
 * 
 * @param {Object} guessCountry  - The guessed country (from data.js)
 * @param {Object} targetCountry - Today's answer (from data.js)
 * @returns {GuessResult}
 * 
 * @typedef {Object} GuessResult
 * @property {boolean} isCorrect
 * @property {Object}  distance    - {km, formatted, tier}
 * @property {Object}  direction   - {degrees, emoji, label}
 * @property {Object}  continent   - {match, emoji, label, tile}
 * @property {Object}  size        - {ratio, label, emoji, description}
 * @property {Object}  population  - {label, emoji, description}
 * @property {Object}  guess       - The guess country object
 * @property {string}  message     - Fun Hinglish/English feedback
 * @property {string}  tileColor   - "green"|"yellow"|"red"
 */
function evaluateGuess(guessCountry, targetCountry) {
  // Perfect match
  if (guessCountry.code === targetCountry.code) {
    return {
      isCorrect:  true,
      distance:   { km: 0, formatted: "0 km", tier: DISTANCE_TIERS[0] },
      direction:  { degrees: 0, emoji: "🎯", label: "Found it!" },
      continent:  { match: "exact", emoji: "🟢", label: guessCountry.continent, tile: "green" },
      size:       { ratio: 1, label: "EXACT MATCH", emoji: "✅", description: "Same country!" },
      population: { label: "Same!", emoji: "✅", description: "Exact match" },
      guess:      guessCountry,
      message:    generateWinMessage(targetCountry),
      tileColor:  "green"
    };
  }
  
  // Calculate all metrics
  const km        = haversineDistance(guessCountry.lat, guessCountry.lng, targetCountry.lat, targetCountry.lng);
  const bearing   = calculateBearing(guessCountry.lat, guessCountry.lng, targetCountry.lat, targetCountry.lng);
  const direction = bearingToDirection(bearing);
  const tier      = getDistanceTier(km);
  const continent = compareContinent(guessCountry, targetCountry);
  const size      = compareSizes(guessCountry, targetCountry);
  const population = comparePopulation(guessCountry, targetCountry);
  
  // Overall tile color (for emoji grid in share)
  const tileColor = continent.match === "exact" ? "green"
    : km < 3000 ? "yellow"
    : "red";
  
  return {
    isCorrect:  false,
    distance:   { km, formatted: formatDistance(km), tier },
    direction,
    continent,
    size,
    population,
    guess:      guessCountry,
    message:    generateGuessMessage(km, tier, guessCountry, targetCountry),
    tileColor
  };
}

// ═══════════════════════════════════════════
// FUN MESSAGE GENERATOR
// Hinglish + English mixed tone (Zomato style)
// ═══════════════════════════════════════════

/**
 * Generate funny feedback message for a wrong guess
 * @param {number} km
 * @param {Object} tier - Distance tier
 * @param {Object} guessCountry
 * @param {Object} targetCountry
 * @returns {string}
 */
function generateGuessMessage(km, tier, guessCountry, targetCountry) {
  const messages = {
    burning: [
      `${tier.emoji} LAGBHAG! Only ${formatDistance(km)} away!`,
      `${tier.emoji} Bahut close ho yaar! ${formatDistance(km)} ka gap!`,
      `${tier.emoji} So close! ${formatDistance(km)} and you'd be there!`,
      `${tier.emoji} Ek kadam aur! Just ${formatDistance(km)} to go!`
    ],
    warm: [
      `♨️ Garam garam! ${formatDistance(km)} away bhai`,
      `♨️ You're in the zone! ${formatDistance(km)} off`,
      `♨️ Getting warmer! ${formatDistance(km)} to target`,
    ],
    lukewarm: [
      `🌤️ Thoda aur! ${formatDistance(km)} door hai target`,
      `🌤️ Not bad! ${formatDistance(km)} away`,
      `🌤️ Keep trying! ${formatDistance(km)} to go`,
    ],
    cold: [
      `❄️ Bhai… ${formatDistance(km)} door? Geography padho!`,
      `❄️ That's ${formatDistance(km)} away. Try a different continent?`,
      `❄️ Cold! ${formatDistance(km)} off. Hint: wrong direction 👀`,
    ],
    freezing: [
      `🧊 Freezing! ${formatDistance(km)} door. Mars pe gire ho kya?`,
      `🧊 ${formatDistance(km)} away! That's basically a different planet`,
      `🧊 Bhai ${formatDistance(km)}?! Uss country ka naam bhi suna hai?`,
    ],
    mars: [
      `🚀 ${formatDistance(km)}?! Tumhara guess Mars pe land hua 🚀`,
      `🚀 Bhai itna door? Space mission chahiye wahan pahunchne ko`,
      `🚀 That's ${formatDistance(km)} away. Even Elon can't help you now`,
    ]
  };
  
  const pool = messages[tier.tone] || messages.cold;
  return pool[Math.floor(Math.random() * pool.length)];
}

/**
 * Generate win message 
 * @param {Object} targetCountry
 * @returns {string}
 */
function generateWinMessage(targetCountry) {
  const messages = [
    `🎯 SAHI JAWAB! You found ${targetCountry.flag} ${targetCountry.name}!`,
    `🎉 GENIUS! ${targetCountry.flag} ${targetCountry.name} was the answer!`,
    `🌍 HAA BHAI! ${targetCountry.flag} ${targetCountry.name}! You're a geographic GOD!`,
    `✅ CORRECT! ${targetCountry.flag} ${targetCountry.name} — you knew it!`,
    `🔥 Geography master! ${targetCountry.flag} ${targetCountry.name} nailed it!`
  ];
  return messages[Math.floor(Math.random() * messages.length)];
}

/**
 * Generate lose message (after 6 wrong guesses)
 * @param {Object} targetCountry
 * @returns {string}
 */
function generateLoseMessage(targetCountry) {
  const messages = [
    `😔 The answer was ${targetCountry.flag} ${targetCountry.name}. Kal try karna!`,
    `💀 Game over! It was ${targetCountry.flag} ${targetCountry.name}. Better luck tomorrow!`,
    `🌍 ${targetCountry.flag} ${targetCountry.name} was hiding in plain sight! Come back tomorrow!`,
    `😅 ${targetCountry.name} got you! Tomorrow is another day bhai.`
  ];
  return messages[Math.floor(Math.random() * messages.length)];
}

// ═══════════════════════════════════════════
// PROXIMITY SCORE (for leaderboard)
// ═══════════════════════════════════════════

/**
 * Calculate score based on guesses and total distance
 * @param {number} attempts    - Number of guesses used (1-6)
 * @param {number} totalKm     - Sum of all distances guessed
 * @param {boolean} won        - Whether player won
 * @returns {number} Score (higher = better)
 */
function calculateScore(attempts, totalKm, won) {
  if (!won) return 0;
  const attemptBonus = (7 - attempts) * 1000; // Max 6000 for 1 guess
  const distancePenalty = Math.floor(totalKm / 100); // -1 per 100km total
  return Math.max(0, attemptBonus - distancePenalty);
}

// ═══════════════════════════════════════════
// MAP HELPERS
// ═══════════════════════════════════════════

/**
 * Get bounds to fit on map given guessed country and target
 * Used to auto-zoom the Leaflet map after each guess
 * @param {Object[]} guessedCountries - Array of guessed Country objects
 * @param {Object|null} targetCountry - Target (revealed on win/lose)
 * @returns {Array} Leaflet-compatible bounds [[lat,lng],[lat,lng]]
 */
function calculateMapBounds(guessedCountries, targetCountry = null) {
  const points = [...guessedCountries];
  if (targetCountry) points.push(targetCountry);
  
  if (points.length === 0) {
    // Default world view
    return [[-60, -180], [75, 180]];
  }
  
  if (points.length === 1) {
    const p = points[0];
    const pad = 15;
    return [[p.lat - pad, p.lng - pad], [p.lat + pad, p.lng + pad]];
  }
  
  const lats = points.map(p => p.lat);
  const lngs = points.map(p => p.lng);
  const pad = 5;
  
  return [
    [Math.min(...lats) - pad, Math.min(...lngs) - pad],
    [Math.max(...lats) + pad, Math.max(...lngs) + pad]
  ];
}

/**
 * Get marker color based on guess result
 * @param {GuessResult} result
 * @returns {string} CSS color value
 */
function getMarkerColor(result) {
  if (result.isCorrect)              return 'var(--game-green)';
  if (result.distance.km < 1500)    return 'var(--game-gold)';
  if (result.distance.km < 4000)    return '#FF8C42';
  return 'var(--game-red)';
}

// ═══════════════════════════════════════════
// EXPORTS
// ═══════════════════════════════════════════

// Names used by other files:
// - app.js:  evaluateGuess, calculateScore, calculateMapBounds, 
//            getMarkerColor, generateLoseMessage
// - ui.js:   DISTANCE_TIERS, DIRECTION_MAP (for display)

window.DharaLogic = {
  // Core calculations
  haversineDistance,
  calculateBearing,
  bearingToDirection,
  getDistanceTier,
  formatDistance,
  
  // Comparisons
  compareSizes,
  compareContinent,
  comparePopulation,
  
  // Main evaluator
  evaluateGuess,
  
  // Messages
  generateGuessMessage,
  generateWinMessage,
  generateLoseMessage,
  
  // Scoring
  calculateScore,
  
  // Map helpers
  calculateMapBounds,
  getMarkerColor,
  
  // Constants (for UI reference)
  DISTANCE_TIERS,
  DIRECTION_MAP,
  SIZE_RATIO_TIERS
};

console.log('[DharaLogic] Game math engine loaded ✓');
