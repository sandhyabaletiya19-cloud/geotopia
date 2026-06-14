/* ═══════════════════════════════════════════════════════════
   DHARAVERSE MAP MYSTERY — GAME LOGIC & MATH
   File: /games/daily-mystery/js/logic.js
   
   DEPENDS ON: data.js (window.COUNTRIES, window.COUNTRY_LOOKUP)
   USED BY: app.js → handleGuessSubmit()
   
   EXPORTS:
     window.calculateDistance(lat1, lng1, lat2, lng2) → km
     window.calculateBearing(lat1, lng1, lat2, lng2) → degrees
     window.bearingToArrow(degrees) → arrow string
     window.bearingToDirection(degrees) → direction name
     window.getSizeComparison(guessArea, targetArea) → object
     window.getContinentMatch(guessCont, targetCont, guessHemi, targetHemi) → object
     window.getDistanceFeedback(km) → object
     window.evaluateGuess(guessId, targetId) → full result object
   ═══════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  // ─────────────────────────────────────────────
  // CONSTANTS
  // ─────────────────────────────────────────────

  /** Earth's mean radius in kilometers */
  var EARTH_RADIUS_KM = 6371;

  /** Convert degrees to radians */
  function toRad(deg) {
    return deg * (Math.PI / 180);
  }

  /** Convert radians to degrees */
  function toDeg(rad) {
    return rad * (180 / Math.PI);
  }


  // ═══════════════════════════════════════════════
  // 1. HAVERSINE DISTANCE
  // ═══════════════════════════════════════════════

  /**
   * Calculate great-circle distance between two points
   * using the Haversine formula.
   *
   * @param {number} lat1 - Latitude of point 1
   * @param {number} lng1 - Longitude of point 1
   * @param {number} lat2 - Latitude of point 2
   * @param {number} lng2 - Longitude of point 2
   * @returns {number} Distance in kilometers (rounded to nearest integer)
   *
   * Used by: evaluateGuess()
   */
  window.calculateDistance = function (lat1, lng1, lat2, lng2) {
    var dLat = toRad(lat2 - lat1);
    var dLng = toRad(lng2 - lng1);

    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) *
        Math.cos(toRad(lat2)) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);

    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var distance = EARTH_RADIUS_KM * c;

    return Math.round(distance);
  };


  // ═══════════════════════════════════════════════
  // 2. BEARING (DIRECTION)
  // ═══════════════════════════════════════════════

  /**
   * Calculate initial bearing from point 1 to point 2.
   * Returns the compass direction you need to travel
   * FROM your guess TO the target.
   *
   * @param {number} lat1 - Latitude of guess
   * @param {number} lng1 - Longitude of guess
   * @param {number} lat2 - Latitude of target
   * @param {number} lng2 - Longitude of target
   * @returns {number} Bearing in degrees (0-360, where 0=North, 90=East)
   *
   * Used by: evaluateGuess()
   */
  window.calculateBearing = function (lat1, lng1, lat2, lng2) {
    var dLng = toRad(lng2 - lng1);
    var radLat1 = toRad(lat1);
    var radLat2 = toRad(lat2);

    var y = Math.sin(dLng) * Math.cos(radLat2);
    var x =
      Math.cos(radLat1) * Math.sin(radLat2) -
      Math.sin(radLat1) * Math.cos(radLat2) * Math.cos(dLng);

    var bearing = toDeg(Math.atan2(y, x));

    // Normalize to 0-360
    return (bearing + 360) % 360;
  };


  // ═══════════════════════════════════════════════
  // 3. BEARING → ARROW EMOJI
  // ═══════════════════════════════════════════════

  /**
   * Convert bearing degrees to a compass arrow.
   * 8 directions, each covering 45°.
   *
   * @param {number} degrees - Bearing (0-360)
   * @returns {string} Arrow character
   *
   * Mapping:
   *   337.5 - 22.5   → ⬆️  North
   *    22.5 - 67.5   → ↗️  Northeast
   *    67.5 - 112.5  → ➡️  East
   *   112.5 - 157.5  → ↘️  Southeast
   *   157.5 - 202.5  → ⬇️  South
   *   202.5 - 247.5  → ↙️  Southwest
   *   247.5 - 292.5  → ⬅️  West
   *   292.5 - 337.5  → ↖️  Northwest
   *
   * Used by: evaluateGuess(), ui.js
   */
  window.bearingToArrow = function (degrees) {
    // Normalize
    var d = ((degrees % 360) + 360) % 360;

    if (d >= 337.5 || d < 22.5)   return '⬆️';
    if (d >= 22.5  && d < 67.5)   return '↗️';
    if (d >= 67.5  && d < 112.5)  return '➡️';
    if (d >= 112.5 && d < 157.5)  return '↘️';
    if (d >= 157.5 && d < 202.5)  return '⬇️';
    if (d >= 202.5 && d < 247.5)  return '↙️';
    if (d >= 247.5 && d < 292.5)  return '⬅️';
    if (d >= 292.5 && d < 337.5)  return '↖️';

    return '⬆️'; // fallback
  };


  // ═══════════════════════════════════════════════
  // 4. BEARING → DIRECTION NAME
  // ═══════════════════════════════════════════════

  /**
   * Convert bearing degrees to human-readable direction.
   *
   * @param {number} degrees - Bearing (0-360)
   * @returns {string} Direction name ("North", "Northeast", etc.)
   *
   * Used by: evaluateGuess(), ui.js for accessibility
   */
  window.bearingToDirection = function (degrees) {
    var d = ((degrees % 360) + 360) % 360;

    if (d >= 337.5 || d < 22.5)   return 'North';
    if (d >= 22.5  && d < 67.5)   return 'Northeast';
    if (d >= 67.5  && d < 112.5)  return 'East';
    if (d >= 112.5 && d < 157.5)  return 'Southeast';
    if (d >= 157.5 && d < 202.5)  return 'South';
    if (d >= 202.5 && d < 247.5)  return 'Southwest';
    if (d >= 247.5 && d < 292.5)  return 'West';
    if (d >= 292.5 && d < 337.5)  return 'Northwest';

    return 'North'; // fallback
  };


  // ═══════════════════════════════════════════════
  // 5. BEARING → CSS ROTATION DEGREES
  // ═══════════════════════════════════════════════

  /**
   * Get the CSS rotation angle for the direction arrow.
   * Used by ui.js to set --arrow-rotation CSS variable
   * for the .arrow-spin animation.
   *
   * @param {number} degrees - Bearing (0-360)
   * @returns {number} CSS rotation in degrees
   *
   * Mapping: 0°=up, 90°=right, 180°=down, 270°=left
   */
  window.bearingToRotation = function (degrees) {
    return ((degrees % 360) + 360) % 360;
  };


  // ═══════════════════════════════════════════════
  // 6. SIZE COMPARISON
  // ═══════════════════════════════════════════════

  /**
   * Compare the area of the guessed country to the target.
   *
   * @param {number} guessArea - Area of guessed country (km²)
   * @param {number} targetArea - Area of target country (km²)
   * @returns {object} {
   *   ratio:   number  — how many times bigger/smaller
   *   type:    string  — "bigger"|"smaller"|"same"
   *   emoji:   string  — visual indicator
   *   message: string  — human-readable description
   * }
   *
   * Thresholds:
   *   ratio < 1.1 → "same" (within 10%)
   *   target bigger → "bigger"
   *   target smaller → "smaller"
   *
   * Used by: evaluateGuess()
   */
  window.getSizeComparison = function (guessArea, targetArea) {
    // Prevent division by zero
    if (!guessArea || guessArea <= 0) guessArea = 1;
    if (!targetArea || targetArea <= 0) targetArea = 1;

    var ratio;
    var type;
    var emoji;
    var message;

    if (targetArea > guessArea) {
      ratio = Math.round((targetArea / guessArea) * 10) / 10;

      if (ratio < 1.1) {
        type = 'same';
        emoji = '🟰';
        message = 'About the same size';
      } else if (ratio < 2) {
        type = 'bigger';
        emoji = '📐';
        message = 'Target is ' + ratio + 'x bigger';
      } else if (ratio < 5) {
        type = 'bigger';
        emoji = '🐘';
        message = 'Target is ' + ratio + 'x BIGGER';
      } else if (ratio < 20) {
        type = 'bigger';
        emoji = '🦣';
        message = 'Target is ' + ratio + 'x BIGGER!';
      } else {
        type = 'bigger';
        emoji = '🌍';
        message = 'Target is ' + ratio + 'x MASSIVE!';
      }
    } else if (guessArea > targetArea) {
      ratio = Math.round((guessArea / targetArea) * 10) / 10;

      if (ratio < 1.1) {
        type = 'same';
        emoji = '🟰';
        message = 'About the same size';
      } else if (ratio < 2) {
        type = 'smaller';
        emoji = '📐';
        message = 'Target is ' + ratio + 'x smaller';
      } else if (ratio < 5) {
        type = 'smaller';
        emoji = '🐜';
        message = 'Target is ' + ratio + 'x smaller';
      } else if (ratio < 20) {
        type = 'smaller';
        emoji = '🔬';
        message = 'Target is ' + ratio + 'x SMALLER!';
      } else {
        type = 'smaller';
        emoji = '🔎';
        message = 'Target is ' + ratio + 'x TINY!';
      }
    } else {
      ratio = 1;
      type = 'same';
      emoji = '🟰';
      message = 'Exact same size!';
    }

    return {
      ratio: ratio,
      type: type,
      emoji: emoji,
      message: message
    };
  };


  // ═══════════════════════════════════════════════
  // 7. CONTINENT MATCHING
  // ═══════════════════════════════════════════════

  /**
   * Check if the guessed country matches the target's continent.
   * Three tiers: exact match, same hemisphere, completely wrong.
   *
   * @param {string} guessContinent - Continent of guess
   * @param {string} targetContinent - Continent of target
   * @param {object} guessHemi - { lat: "N"|"S", lng: "E"|"W" }
   * @param {object} targetHemi - { lat: "N"|"S", lng: "E"|"W" }
   * @returns {object} {
   *   match:   string  — "exact"|"hemisphere"|"wrong"
   *   emoji:   string  — 🟢|🟡|🔴
   *   message: string
   *   color:   string  — for CSS class: "correct"|"close"|"wrong"
   * }
   *
   * Used by: evaluateGuess()
   */
  window.getContinentMatch = function (guessContinent, targetContinent, guessHemi, targetHemi) {
    // Exact continent match
    if (guessContinent === targetContinent) {
      return {
        match: 'exact',
        emoji: '🟢',
        message: 'Same continent! ✅',
        color: 'correct'
      };
    }

    // Check hemisphere match (at least same half of the globe)
    var sameLat = guessHemi.lat === targetHemi.lat;
    var sameLng = guessHemi.lng === targetHemi.lng;

    if (sameLat && sameLng) {
      return {
        match: 'hemisphere',
        emoji: '🟡',
        message: 'Same hemisphere, wrong continent',
        color: 'close'
      };
    }

    if (sameLat || sameLng) {
      return {
        match: 'hemisphere',
        emoji: '🟡',
        message: 'Partially same hemisphere',
        color: 'close'
      };
    }

    // Completely wrong
    return {
      match: 'wrong',
      emoji: '🔴',
      message: 'Wrong side of the world! 🌏',
      color: 'wrong'
    };
  };


  // ═══════════════════════════════════════════════
  // 8. DISTANCE FEEDBACK (with fun messages)
  // ═══════════════════════════════════════════════

  /**
   * Get distance-based feedback with emoji and message.
   * Uses a tiered system for increasingly specific hints.
   *
   * @param {number} km - Distance in kilometers
   * @returns {object} {
   *   emoji:      string  — heat emoji
   *   label:      string  — short label
   *   message:    string  — fun message (Zomato/Blinkit style)
   *   tier:       string  — "win"|"burning"|"hot"|"warm"|"cold"|"freezing"|"arctic"
   *   color:      string  — CSS class: "correct"|"close"|"wrong"
   *   percentage: number  — 0-100, how close (100 = exact, 0 = max distance)
   * }
   *
   * Distance tiers:
   *   0       → WIN 🎯
   *   < 200   → BURNING 🔥
   *   < 500   → HOT 🥵
   *   < 1000  → WARM ☀️
   *   < 3000  → COLD 🌧️
   *   < 8000  → FREEZING 🥶
   *   8000+   → ARCTIC ❄️
   *
   * Used by: evaluateGuess()
   */

  /** Max possible distance on Earth (half circumference) */
  var MAX_DISTANCE = 20015;

  /** Fun messages per tier — randomly picked */
  var MESSAGES = {
    burning: [
      'Almost there! Can you feel it? 🔥',
      'SO close you could walk there! 🚶',
      'You can practically see it from here! 👀',
      'Burning hot! Neighbors basically 🏘️',
      'One border away maybe? 🤔'
    ],
    hot: [
      'Getting hotter! You\'re in the zone 🥵',
      'Same neighborhood of the world! 🌍',
      'Warmer than your morning chai ☕',
      'Close! Think nearby countries 🗺️',
      'Hot hot hot! Keep going! 🌶️'
    ],
    warm: [
      'Warm! Same part of the world 🌤️',
      'Not bad! You\'re on the right track 🛤️',
      'Getting warmer... keep narrowing it down ☀️',
      'Right region, wrong country 🧐',
      'Warmish! A few countries off 📍'
    ],
    cold: [
      'Cold... different part of the world 🌧️',
      'Brrr... you\'re quite far off ❄️',
      'Wrong neighborhood entirely 🏗️',
      'Cold! Maybe try another continent? 🤷',
      'Not even close to the right area 📡'
    ],
    freezing: [
      'Freezing! Other side of the world almost 🥶',
      'Bhai itna door? Mars pe gira guess 🚀',
      'You\'d need a really long flight ✈️',
      'ICE cold! Think completely differently 🧊',
      'Opposite end of the map vibes 🗺️'
    ],
    arctic: [
      'ARCTIC! Literally the other side of Earth 🌏',
      'Maximum distance! Flip your thinking 180° 🔄',
      'You literally couldn\'t be further away 😱',
      'Antipodal territory! Everything is wrong here 💀',
      'So far that light takes longer to reach there 🌌'
    ]
  };

  /**
   * Pick a random message from a tier array.
   * Uses a simple deterministic approach based on distance
   * so the same distance always gives the same message.
   */
  function pickMessage(tier, km) {
    var arr = MESSAGES[tier];
    if (!arr || arr.length === 0) return '';
    var index = km % arr.length;
    return arr[index];
  }

  window.getDistanceFeedback = function (km) {
    // Calculate percentage (100 = on target, 0 = max distance)
    var pct = Math.max(0, Math.round((1 - km / MAX_DISTANCE) * 100));

    if (km === 0) {
      return {
        emoji: '🎯',
        label: 'BULLSEYE!',
        message: 'Perfect! You nailed it! 🎉',
        tier: 'win',
        color: 'correct',
        percentage: 100
      };
    }

    if (km < 200) {
      return {
        emoji: '🔥',
        label: 'BURNING!',
        message: pickMessage('burning', km),
        tier: 'burning',
        color: 'correct',
        percentage: pct
      };
    }

    if (km < 500) {
      return {
        emoji: '🥵',
        label: 'HOT!',
        message: pickMessage('hot', km),
        tier: 'hot',
        color: 'close',
        percentage: pct
      };
    }

    if (km < 1000) {
      return {
        emoji: '☀️',
        label: 'WARM',
        message: pickMessage('warm', km),
        tier: 'warm',
        color: 'close',
        percentage: pct
      };
    }

    if (km < 3000) {
      return {
        emoji: '🌧️',
        label: 'COLD',
        message: pickMessage('cold', km),
        tier: 'cold',
        color: 'wrong',
        percentage: pct
      };
    }

    if (km < 8000) {
      return {
        emoji: '🥶',
        label: 'FREEZING',
        message: pickMessage('freezing', km),
        tier: 'freezing',
        color: 'wrong',
        percentage: pct
      };
    }

    return {
      emoji: '❄️',
      label: 'ARCTIC!',
      message: pickMessage('arctic', km),
      tier: 'arctic',
      color: 'wrong',
      percentage: pct
    };
  };


  // ═══════════════════════════════════════════════
  // 9. FORMAT DISTANCE FOR DISPLAY
  // ═══════════════════════════════════════════════

  /**
   * Format a distance number for human-friendly display.
   * Adds commas and unit.
   *
   * @param {number} km - Distance in kilometers
   * @returns {string} Formatted string like "1,234 km" or "< 1 km"
   *
   * Used by: ui.js → renderAttemptRow()
   */
  window.formatDistance = function (km) {
    if (km === 0) return '0 km';
    if (km < 1) return '< 1 km';

    // Add commas for thousands
    var parts = km.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return parts.join('.') + ' km';
  };


  // ═══════════════════════════════════════════════
  // 10. FORMAT AREA FOR DISPLAY
  // ═══════════════════════════════════════════════

  /**
   * Format an area number for display.
   *
   * @param {number} area - Area in km²
   * @returns {string} Formatted string like "1.2M km²" or "298 km²"
   *
   * Used by: country.html, ui.js
   */
  window.formatArea = function (area) {
    if (area >= 1000000) {
      return (area / 1000000).toFixed(1) + 'M km²';
    }
    if (area >= 1000) {
      return Math.round(area).toLocaleString() + ' km²';
    }
    return area + ' km²';
  };


  // ═══════════════════════════════════════════════
  // 11. FORMAT POPULATION FOR DISPLAY
  // ═══════════════════════════════════════════════

  /**
   * Format a population number for display.
   *
   * @param {number} pop - Population
   * @returns {string} Formatted string like "1.4B" or "39K"
   *
   * Used by: country.html, ui.js
   */
  window.formatPopulation = function (pop) {
    if (pop >= 1000000000) {
      return (pop / 1000000000).toFixed(1) + 'B';
    }
    if (pop >= 1000000) {
      return (pop / 1000000).toFixed(1) + 'M';
    }
    if (pop >= 1000) {
      return (pop / 1000).toFixed(0) + 'K';
    }
    return pop.toString();
  };


  // ═══════════════════════════════════════════════
  // 12. MASTER: evaluateGuess()
  // ═══════════════════════════════════════════════

  /**
   * The main game evaluation function.
   * Takes a guess country ID and the target country ID,
   * calculates ALL feedback data.
   *
   * @param {string} guessId - ID of the guessed country (from data.js)
   * @param {string} targetId - ID of the target country (from state.js)
   * @returns {object|null} Full evaluation result, or null if invalid
   *
   * Return shape:
   * {
   *   guessId:           string  — "brazil"
   *   targetId:          string  — "india"
   *   guessName:         string  — "Brazil"
   *   targetName:        string  — "India"
   *   guessFlag:         string  — "🇧🇷"
   *   guessLat:          number
   *   guessLng:          number
   *   targetLat:         number
   *   targetLng:         number
   *   distance:          number  — km
   *   distanceFormatted: string  — "8,456 km"
   *   bearing:           number  — degrees
   *   bearingRotation:   number  — CSS rotation degrees
   *   arrow:             string  — "↗️"
   *   direction:         string  — "Northeast"
   *   distanceFeedback:  object  — { emoji, label, message, tier, color, percentage }
   *   continentMatch:    object  — { match, emoji, message, color }
   *   sizeComparison:    object  — { ratio, type, emoji, message }
   *   isCorrect:         boolean — true if guessId === targetId
   *   timestamp:         number  — Date.now()
   * }
   *
   * Used by: app.js → handleGuessSubmit()
   * Result stored by: state.js → saveGuess()
   * Rendered by: ui.js → renderAttemptRow()
   * Shared by: share.js → generateEmojiGrid()
   */
  window.evaluateGuess = function (guessId, targetId) {
    // Validate inputs
    var guess = window.COUNTRY_LOOKUP[guessId];
    var target = window.COUNTRY_LOOKUP[targetId];

    if (!guess || !target) {
      console.error('[logic.js] Invalid country ID:', guessId, 'or', targetId);
      return null;
    }

    // Check if correct
    var isCorrect = (guessId === targetId);

    // Calculate distance
    var distance = window.calculateDistance(
      guess.lat, guess.lng,
      target.lat, target.lng
    );

    // If correct, distance is 0 (override rounding artifacts)
    if (isCorrect) {
      distance = 0;
    }

    // Calculate bearing (direction FROM guess TO target)
    var bearing = 0;
    if (!isCorrect) {
      bearing = window.calculateBearing(
        guess.lat, guess.lng,
        target.lat, target.lng
      );
    }

    // Get arrow and direction
    var arrow = isCorrect ? '🎯' : window.bearingToArrow(bearing);
    var direction = isCorrect ? 'Found it!' : window.bearingToDirection(bearing);
    var bearingRotation = isCorrect ? 0 : window.bearingToRotation(bearing);

    // Get distance feedback
    var distanceFeedback = window.getDistanceFeedback(distance);

    // Get continent match
    var guessHemi = {
      lat: guess.hemisphere_lat,
      lng: guess.hemisphere_lng
    };
    var targetHemi = {
      lat: target.hemisphere_lat,
      lng: target.hemisphere_lng
    };
    var continentMatch = window.getContinentMatch(
      guess.continent,
      target.continent,
      guessHemi,
      targetHemi
    );

    // If correct, override continent match
    if (isCorrect) {
      continentMatch = {
        match: 'exact',
        emoji: '🟢',
        message: 'Correct! 🎉',
        color: 'correct'
      };
    }

    // Get size comparison
    var sizeComparison = window.getSizeComparison(guess.area, target.area);

    // If correct, override size comparison
    if (isCorrect) {
      sizeComparison = {
        ratio: 1,
        type: 'same',
        emoji: '🟰',
        message: 'Exact match!'
      };
    }

    // Build result
    return {
      guessId: guessId,
      targetId: targetId,
      guessName: guess.name,
      targetName: target.name,
      guessFlag: guess.flag,
      guessLat: guess.lat,
      guessLng: guess.lng,
      targetLat: target.lat,
      targetLng: target.lng,
      distance: distance,
      distanceFormatted: window.formatDistance(distance),
      bearing: bearing,
      bearingRotation: bearingRotation,
      arrow: arrow,
      direction: direction,
      distanceFeedback: distanceFeedback,
      continentMatch: continentMatch,
      sizeComparison: sizeComparison,
      isCorrect: isCorrect,
      timestamp: Date.now()
    };
  };


  // ═══════════════════════════════════════════════
  // 13. HELPER: Find country ID by name
  // ═══════════════════════════════════════════════

  /**
   * Look up a country ID from its display name.
   * Case-insensitive, trimmed.
   *
   * @param {string} name - Country display name (e.g. "Brazil")
   * @returns {string|null} Country ID (e.g. "brazil") or null
   *
   * Used by: app.js → handleGuessSubmit()
   */
  window.findCountryIdByName = function (name) {
    if (!name || typeof name !== 'string') return null;

    var search = name.trim().toLowerCase();

    for (var i = 0; i < window.COUNTRIES.length; i++) {
      if (window.COUNTRIES[i].name.toLowerCase() === search) {
        return window.COUNTRIES[i].id;
      }
    }

    return null;
  };


  // ═══════════════════════════════════════════════
  // 14. HELPER: Check if country name is valid
  // ═══════════════════════════════════════════════

  /**
   * Check if a given name matches any country.
   * Case-insensitive.
   *
   * @param {string} name - Country name to validate
   * @returns {boolean}
   *
   * Used by: app.js → input validation
   */
  window.isValidCountryName = function (name) {
    return window.findCountryIdByName(name) !== null;
  };


  // ═══════════════════════════════════════════════
  // 15. HELPER: Check if guess was already made
  // ═══════════════════════════════════════════════

  /**
   * Check if a country ID has already been guessed
   * in the current game session.
   *
   * @param {string} countryId - Country ID to check
   * @param {Array} guesses - Array of previous evaluation results
   * @returns {boolean}
   *
   * Used by: app.js → duplicate guess prevention
   */
  window.isDuplicateGuess = function (countryId, guesses) {
    if (!guesses || !Array.isArray(guesses)) return false;

    for (var i = 0; i < guesses.length; i++) {
      if (guesses[i].guessId === countryId) {
        return true;
      }
    }

    return false;
  };


  // ═══════════════════════════════════════════════
  // 16. HELPER: Get proximity percentage for visual bar
  // ═══════════════════════════════════════════════

  /**
   * Calculate a visual proximity percentage.
   * Uses logarithmic scale so nearby guesses show more difference.
   *
   * @param {number} km - Distance in kilometers
   * @returns {number} Percentage 0-100 (100 = on target)
   *
   * Used by: ui.js → distance bar width
   */
  window.getProximityPercent = function (km) {
    if (km === 0) return 100;
    if (km >= MAX_DISTANCE) return 0;

    // Logarithmic scale for better visual feedback
    // Close distances should show big bar, far = small bar
    var logMax = Math.log(MAX_DISTANCE);
    var logDist = Math.log(km + 1); // +1 to avoid log(0)
    var pct = Math.round((1 - logDist / logMax) * 100);

    return Math.max(0, Math.min(100, pct));
  };


  // Log initialization
  console.log('[logic.js] Game logic loaded');

})();
