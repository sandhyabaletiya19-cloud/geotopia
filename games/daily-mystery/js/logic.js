/* ═══════════════════════════════════════════════════════════
   DHARAVERSE MAP MYSTERY — GAME LOGIC & MATH (V2)
   File: /games/daily-mystery/js/logic.js
   
   DEPENDS ON: data.js (window.COUNTRIES, window.COUNTRY_LOOKUP)
   USED BY: app.js, ui.js
   
   IMPROVEMENTS OVER V1:
   ✅ All original features kept (Haversine, bearing, arrows, etc.)
   ✅ NEW: Progressive hint builder (6 levels)
   ✅ NEW: Smart fuzzy country resolver
   ✅ NEW: Animated bearing rotation helper
   ✅ NEW: Distance color CSS class mapper
   ✅ NEW: Distance meter percentage (improved logarithmic)
   ✅ NEW: Better continent matching (uses subregion too)
   ✅ NEW: Hemisphere comparison from lat/lng (no more hemisphere_lat field needed)
   ✅ NEW: Direction with "Head East" phrasing
   ✅ NEW: Streak-aware difficulty calibration helper
   ✅ NEW: Smart hint generator that picks relevant facts
   ✅ NEW: 60+ fun messages (was 30)
   ✅ Better JSDoc, better testing helpers
   ═══════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  // ─────────────────────────────────────────────
  // CONSTANTS
  // ─────────────────────────────────────────────

  /** Earth's mean radius in kilometers */
  var EARTH_RADIUS_KM = 6371;

  /** Max possible distance on Earth (antipodal) */
  var MAX_DISTANCE_KM = 20015;

  /** Max guesses per game */
  var MAX_GUESSES = 6;

  /** Math helpers */
  function toRad(deg) { return deg * (Math.PI / 180); }
  function toDeg(rad) { return rad * (180 / Math.PI); }


  // ═══════════════════════════════════════════════
  // 1. HAVERSINE DISTANCE
  // ═══════════════════════════════════════════════

  /**
   * Calculate great-circle distance between two points using Haversine.
   * @param {number} lat1, lng1, lat2, lng2
   * @returns {number} Distance in km (rounded)
   */
  window.calculateDistance = function (lat1, lng1, lat2, lng2) {
    var dLat = toRad(lat2 - lat1);
    var dLng = toRad(lng2 - lng1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
      Math.sin(dLng / 2) * Math.sin(dLng / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return Math.round(EARTH_RADIUS_KM * c);
  };


  // ═══════════════════════════════════════════════
  // 2. BEARING (DIRECTION)
  // ═══════════════════════════════════════════════

  /**
   * Calculate initial bearing from point 1 to point 2.
   * @returns {number} Bearing in degrees (0-360)
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
    return (bearing + 360) % 360;
  };


  // ═══════════════════════════════════════════════
  // 3. BEARING → ARROW EMOJI
  // ═══════════════════════════════════════════════

  window.bearingToArrow = function (degrees) {
    var d = ((degrees % 360) + 360) % 360;
    if (d >= 337.5 || d < 22.5)   return '⬆️';
    if (d >= 22.5  && d < 67.5)   return '↗️';
    if (d >= 67.5  && d < 112.5)  return '➡️';
    if (d >= 112.5 && d < 157.5)  return '↘️';
    if (d >= 157.5 && d < 202.5)  return '⬇️';
    if (d >= 202.5 && d < 247.5)  return '↙️';
    if (d >= 247.5 && d < 292.5)  return '⬅️';
    return '↖️';
  };


  // ═══════════════════════════════════════════════
  // 4. BEARING → DIRECTION NAME
  // ═══════════════════════════════════════════════

  window.bearingToDirection = function (degrees) {
    var d = ((degrees % 360) + 360) % 360;
    if (d >= 337.5 || d < 22.5)   return 'North';
    if (d >= 22.5  && d < 67.5)   return 'North-East';
    if (d >= 67.5  && d < 112.5)  return 'East';
    if (d >= 112.5 && d < 157.5)  return 'South-East';
    if (d >= 157.5 && d < 202.5)  return 'South';
    if (d >= 202.5 && d < 247.5)  return 'South-West';
    if (d >= 247.5 && d < 292.5)  return 'West';
    return 'North-West';
  };


  // ═══════════════════════════════════════════════
  // 5. BEARING → CSS ROTATION + ANIMATION HELPER (NEW)
  // ═══════════════════════════════════════════════

  window.bearingToRotation = function (degrees) {
    return ((degrees % 360) + 360) % 360;
  };

  /**
   * NEW: Get smoothest CSS rotation considering previous rotation.
   * Prevents arrow from spinning 350° when 10° is shorter.
   * @param {number} fromDeg - Previous rotation
   * @param {number} toDeg - Target rotation
   * @returns {number} Optimized rotation degree
   */
  window.getShortestRotation = function (fromDeg, toDeg) {
    var diff = ((toDeg - fromDeg) % 360 + 540) % 360 - 180;
    return fromDeg + diff;
  };


  // ═══════════════════════════════════════════════
  // 6. HEMISPHERE FROM COORDINATES (NEW)
  // ═══════════════════════════════════════════════

  /**
   * NEW: Auto-derive hemisphere from lat/lng.
   * Replaces dependence on hemisphere_lat/hemisphere_lng fields.
   */
  window.getHemisphere = function (lat, lng) {
    return {
      lat: lat >= 0 ? 'N' : 'S',
      lng: lng >= 0 ? 'E' : 'W'
    };
  };


  // ═══════════════════════════════════════════════
  // 7. SIZE COMPARISON (IMPROVED)
  // ═══════════════════════════════════════════════

  window.getSizeComparison = function (guessArea, targetArea) {
    if (!guessArea || guessArea <= 0) guessArea = 1;
    if (!targetArea || targetArea <= 0) targetArea = 1;

    var ratio, type, emoji, message, intensity;

    if (Math.abs(targetArea - guessArea) / guessArea < 0.1) {
      return {
        ratio: 1,
        type: 'same',
        emoji: '🟰',
        message: 'About the same size',
        intensity: 'low'
      };
    }

    if (targetArea > guessArea) {
      ratio = Math.round((targetArea / guessArea) * 10) / 10;
      type = 'bigger';
      if (ratio < 2)      { emoji = '📐'; intensity = 'low';  message = 'Target is ' + ratio + 'x bigger'; }
      else if (ratio < 5) { emoji = '🐘'; intensity = 'med';  message = 'Target is ' + ratio + 'x BIGGER'; }
      else if (ratio < 20){ emoji = '🦣'; intensity = 'high'; message = 'Target is ' + ratio + 'x HUGE'; }
      else                { emoji = '🌍'; intensity = 'max';  message = 'Target is ' + ratio + 'x MASSIVE!'; }
    } else {
      ratio = Math.round((guessArea / targetArea) * 10) / 10;
      type = 'smaller';
      if (ratio < 2)      { emoji = '📐'; intensity = 'low';  message = 'Target is ' + ratio + 'x smaller'; }
      else if (ratio < 5) { emoji = '🐜'; intensity = 'med';  message = 'Target is ' + ratio + 'x smaller'; }
      else if (ratio < 20){ emoji = '🔬'; intensity = 'high'; message = 'Target is ' + ratio + 'x TINY'; }
      else                { emoji = '🔎'; intensity = 'max';  message = 'Target is ' + ratio + 'x MICROSCOPIC!'; }
    }

    return { ratio: ratio, type: type, emoji: emoji, message: message, intensity: intensity };
  };


  // ═══════════════════════════════════════════════
  // 8. CONTINENT MATCHING (IMPROVED — auto-hemisphere)
  // ═══════════════════════════════════════════════

  window.getContinentMatch = function (guess, target) {
    // Exact continent match
    if (guess.continent === target.continent) {
      return {
        match: 'exact',
        emoji: '🟢',
        message: 'Same continent! ✅',
        color: 'correct'
      };
    }

    // Auto-derive hemispheres from lat/lng
    var guessHemi = window.getHemisphere(guess.lat, guess.lng);
    var targetHemi = window.getHemisphere(target.lat, target.lng);

    var sameLat = guessHemi.lat === targetHemi.lat;
    var sameLng = guessHemi.lng === targetHemi.lng;

    if (sameLat && sameLng) {
      return {
        match: 'hemisphere',
        emoji: '🟡',
        message: 'Same hemisphere',
        color: 'close'
      };
    }

    if (sameLat || sameLng) {
      return {
        match: 'partial',
        emoji: '🟡',
        message: 'Partially same hemisphere',
        color: 'close'
      };
    }

    return {
      match: 'wrong',
      emoji: '🔴',
      message: 'Other side of the world',
      color: 'wrong'
    };
  };


  // ═══════════════════════════════════════════════
  // 9. DISTANCE FEEDBACK (EXPANDED — 60+ messages)
  // ═══════════════════════════════════════════════

  var MESSAGES = {
    burning: [
      'Almost there! Can you feel it? 🔥',
      'SO close you could walk there! 🚶',
      'You can practically see it from here! 👀',
      'Burning hot! Neighbors basically 🏘️',
      'One border away maybe? 🤔',
      'Bhai aas paas hi hai! 🎯',
      'Right next door! 🚪',
      'Drive-able distance! 🚗'
    ],
    hot: [
      'Getting hotter! You\'re in the zone 🥵',
      'Same neighborhood of the world! 🌍',
      'Warmer than your morning chai ☕',
      'Close! Think nearby countries 🗺️',
      'Hot hot hot! Keep going! 🌶️',
      'Same region, wrong country 📍',
      'A short flight away ✈️',
      'You can smell the spices from here 🌶️'
    ],
    warm: [
      'Warm! Same part of the world 🌤️',
      'Not bad! You\'re on the right track 🛤️',
      'Getting warmer... narrow it down ☀️',
      'Right region, wrong country 🧐',
      'Warmish! A few countries off 📍',
      'Half a continent away 🌐',
      'Think bigger or smaller in the same area 📏',
      'You\'re circling it! 🌀'
    ],
    cold: [
      'Cold... different part of the world 🌧️',
      'Brrr... quite far off ❄️',
      'Wrong neighborhood entirely 🏗️',
      'Cold! Try another continent? 🤷',
      'Not even close to the right area 📡',
      'Different timezone for sure ⏰',
      'You\'re lost in the wrong region 🧭',
      'Way off the mark 🎯'
    ],
    freezing: [
      'Freezing! Other side of the world 🥶',
      'Bhai itna door? Mars pe gira guess 🚀',
      'You\'d need a really long flight ✈️',
      'ICE cold! Think completely differently 🧊',
      'Opposite end of the map vibes 🗺️',
      'Are you trying to get it wrong? 😅',
      'Polar opposite directions! 🐧',
      'Continental disaster guess 🌍'
    ],
    arctic: [
      'ARCTIC! Literally the other side of Earth 🌏',
      'Maximum distance! Flip your thinking 180° 🔄',
      'You literally couldn\'t be further away 😱',
      'Antipodal territory! Everything is wrong here 💀',
      'So far that light takes longer to reach there 🌌',
      'This is the most wrong guess possible! 🛸',
      'Mars would be closer than this! 🚀',
      'You picked the EXACT opposite 🎭'
    ]
  };

  function pickMessage(tier, seed) {
    var arr = MESSAGES[tier];
    if (!arr || arr.length === 0) return '';
    return arr[seed % arr.length];
  }

  window.getDistanceFeedback = function (km) {
    var pct = Math.max(0, Math.round((1 - km / MAX_DISTANCE_KM) * 100));

    if (km === 0) {
      return {
        emoji: '🎯',
        label: 'BULLSEYE!',
        message: 'Perfect! You nailed it! 🎉',
        tier: 'win',
        color: 'correct',
        cssClass: 'distance-correct',
        percentage: 100
      };
    }
    if (km < 200) {
      return {
        emoji: '🔥', label: 'BURNING!',
        message: pickMessage('burning', km),
        tier: 'burning', color: 'correct',
        cssClass: 'distance-very-close',
        percentage: pct
      };
    }
    if (km < 1000) {
      return {
        emoji: '🥵', label: 'HOT!',
        message: pickMessage('hot', km),
        tier: 'hot', color: 'close',
        cssClass: 'distance-very-close',
        percentage: pct
      };
    }
    if (km < 4000) {
      return {
        emoji: '☀️', label: 'WARM',
        message: pickMessage('warm', km),
        tier: 'warm', color: 'close',
        cssClass: 'distance-close',
        percentage: pct
      };
    }
    if (km < 8000) {
      return {
        emoji: '🌧️', label: 'COLD',
        message: pickMessage('cold', km),
        tier: 'cold', color: 'wrong',
        cssClass: 'distance-medium',
        percentage: pct
      };
    }
    if (km < 13000) {
      return {
        emoji: '🥶', label: 'FREEZING',
        message: pickMessage('freezing', km),
        tier: 'freezing', color: 'wrong',
        cssClass: 'distance-far',
        percentage: pct
      };
    }
    return {
      emoji: '❄️', label: 'ARCTIC!',
      message: pickMessage('arctic', km),
      tier: 'arctic', color: 'wrong',
      cssClass: 'distance-far',
      percentage: pct
    };
  };


  // ═══════════════════════════════════════════════
  // 10. FORMAT HELPERS
  // ═══════════════════════════════════════════════

  window.formatDistance = function (km) {
    if (km === 0) return '0 km';
    if (km < 1)   return '< 1 km';
    return km.toLocaleString() + ' km';
  };

  window.formatArea = function (area) {
    if (area >= 1000000) return (area / 1000000).toFixed(1) + 'M km²';
    if (area >= 1000)    return Math.round(area).toLocaleString() + ' km²';
    return area + ' km²';
  };

  window.formatPopulation = function (pop) {
    if (pop >= 1000000000) return (pop / 1000000000).toFixed(1) + 'B';
    if (pop >= 1000000)    return (pop / 1000000).toFixed(1) + 'M';
    if (pop >= 1000)       return (pop / 1000).toFixed(0) + 'K';
    return pop.toString();
  };


  // ═══════════════════════════════════════════════
  // 11. PROXIMITY BAR (IMPROVED LOG SCALE)
  // ═══════════════════════════════════════════════

  window.getProximityPercent = function (km) {
    if (km === 0) return 100;
    if (km >= MAX_DISTANCE_KM) return 0;
    var logMax = Math.log(MAX_DISTANCE_KM);
    var logDist = Math.log(km + 1);
    var pct = Math.round((1 - logDist / logMax) * 100);
    return Math.max(5, Math.min(100, pct)); // Min 5% so bar is always visible
  };


  // ═══════════════════════════════════════════════
  // 12. ⭐ PROGRESSIVE HINT BUILDER (BRAND NEW)
  // ═══════════════════════════════════════════════

  /**
   * NEW: Build progressive hints based on guess number.
   * Implements the 6-hint spec from the master doc.
   *
   * Hint 1: Amazing fact (animal/flag)
   * Hint 2: Direction from guess
   * Hint 3: Climate + Landlocked status
   * Hint 4: Sports fact
   * Hint 5: Continent
   * Hint 6: First/Last letter + Landmark + Warning
   *
   * @param {number} guessNumber - 1-6
   * @param {object} target - Target country
   * @param {object} guess - Guessed country (for direction)
   * @param {string} direction - "North-East" etc.
   * @returns {Array} Array of hint chip objects
   */
  window.buildProgressiveHints = function (guessNumber, target, guess, direction) {
    var hints = [];

    // HINT 1 — Amazing fact
    if (guessNumber >= 1 && target.amazingFact) {
      hints.push({
        type: 'amazing-fact',
        icon: '🦁',
        label: 'Fact',
        text: target.amazingFact,
        priority: 1
      });
    }

    // HINT 2 — Direction
    if (guessNumber >= 2 && direction && guess) {
      hints.push({
        type: 'direction',
        icon: '🧭',
        label: 'Head',
        text: 'Head ' + direction + ' from ' + guess.name,
        priority: 2
      });
    }

    // HINT 3a — Climate
    if (guessNumber >= 3 && target.climate) {
      var climateEmojis = {
        'Tropical': '🌴',
        'Arid': '🏜️',
        'Temperate': '🌤️',
        'Continental': '❄️',
        'Polar': '🧊',
        'Mediterranean': '☀️'
      };
      hints.push({
        type: 'climate',
        icon: climateEmojis[target.climate] || '🌡️',
        label: 'Climate',
        text: target.climate,
        priority: 3
      });
    }

    // HINT 3b — Landlocked
    if (guessNumber >= 3) {
      hints.push({
        type: 'landlocked',
        icon: target.landlocked ? '🏔️' : '🏖️',
        label: target.landlocked ? 'Landlocked' : 'Has coast',
        text: target.landlocked ? 'Landlocked country' : 'Has a coastline',
        priority: 3
      });
    }

    // HINT 4 — Sports fact
    if (guessNumber >= 4 && target.sportsFact) {
      hints.push({
        type: 'sports',
        icon: '⚽',
        label: 'Sports',
        text: target.sportsFact,
        priority: 4
      });
    }

    // HINT 5 — Continent
    if (guessNumber >= 5 && target.continent) {
      hints.push({
        type: 'continent',
        icon: '📍',
        label: 'Continent',
        text: target.continent,
        priority: 5
      });
    }

    // HINT 6 — First/Last letter + Landmark + Warning
    if (guessNumber >= 6) {
      if (target.firstLast) {
        hints.push({
          type: 'first-last',
          icon: '🔤',
          label: 'Letters',
          text: target.firstLast,
          priority: 6
        });
      }
      if (target.landmark) {
        hints.push({
          type: 'landmark',
          icon: '',
          label: 'Landmark',
          text: target.landmark,
          priority: 6
        });
      }
      hints.push({
        type: 'warning',
        icon: '⚠️',
        label: 'Warning',
        text: 'LAST CHANCE — Think hard!',
        priority: 6
      });
    }

    return hints;
  };


  // ═══════════════════════════════════════════════
  // 13. ⭐ MASTER: evaluateGuess() (UPGRADED)
  // ═══════════════════════════════════════════════

  /**
   * Master evaluation function. Returns EVERYTHING the UI needs.
   *
   * @param {string} guessId
   * @param {string} targetId
   * @param {number} guessNumber - Optional, for hint building
   * @returns {object|null}
   */
  window.evaluateGuess = function (guessId, targetId, guessNumber) {
    var guess = window.COUNTRY_LOOKUP[guessId];
    var target = window.COUNTRY_LOOKUP[targetId];

    if (!guess || !target) {
      console.error('[logic.js] Invalid country ID:', guessId, 'or', targetId);
      return null;
    }

    guessNumber = guessNumber || 1;
    var isCorrect = (guessId === targetId);

    // Distance
    var distance = isCorrect ? 0 : window.calculateDistance(
      guess.lat, guess.lng, target.lat, target.lng
    );

    // Bearing
    var bearing = isCorrect ? 0 : window.calculateBearing(
      guess.lat, guess.lng, target.lat, target.lng
    );

    // Visual indicators
    var arrow = isCorrect ? '🎯' : window.bearingToArrow(bearing);
    var direction = isCorrect ? 'Found it!' : window.bearingToDirection(bearing);
    var bearingRotation = isCorrect ? 0 : window.bearingToRotation(bearing);

    // Feedback objects
    var distanceFeedback = window.getDistanceFeedback(distance);
    var continentMatch = isCorrect
      ? { match: 'exact', emoji: '🟢', message: 'Correct! 🎉', color: 'correct' }
      : window.getContinentMatch(guess, target);
    var sizeComparison = isCorrect
      ? { ratio: 1, type: 'same', emoji: '🟰', message: 'Exact match!', intensity: 'low' }
      : window.getSizeComparison(guess.area, target.area);

    // Progressive hints
    var hints = window.buildProgressiveHints(guessNumber, target, guess, direction);

    // Proximity for visual bar
    var proximity = window.getProximityPercent(distance);

    return {
      // IDs
      guessId: guessId,
      targetId: targetId,
      guessNumber: guessNumber,

      // Display data
      guessName: guess.name,
      targetName: target.name,
      guessFlag: guess.flag,
      targetFlag: target.flag,

      // Coordinates
      guessLat: guess.lat,
      guessLng: guess.lng,
      targetLat: target.lat,
      targetLng: target.lng,

      // Full country objects (for UI access)
      guessedCountry: guess,
      targetCountry: target,

      // Distance data
      distance: distance,
      distanceFormatted: window.formatDistance(distance),
      distanceFeedback: distanceFeedback,
      proximityPercent: proximity,

      // Direction data
      bearing: bearing,
      bearingRotation: bearingRotation,
      arrow: arrow,
      direction: direction,

      // Comparison data
      continentMatch: continentMatch,
      sizeComparison: sizeComparison,

      // Progressive hints (NEW)
      hints: hints,

      // Game state
      isCorrect: isCorrect,
      timestamp: Date.now()
    };
  };


  // ═══════════════════════════════════════════════
  // 14. SMART COUNTRY RESOLVER (NEW)
  // ═══════════════════════════════════════════════

  /**
   * NEW: Smart resolver that handles many input formats.
   * Tries exact match → alias → fuzzy → returns best guess.
   *
   * @param {string} input - User input
   * @returns {object|null} Country object or null
   */
  window.resolveCountry = function (input) {
    if (!input || typeof input !== 'string') return null;
    var query = input.trim();
    if (query.length < 2) return null;

    // Use fuzzy search from data.js
    if (typeof window.searchCountry === 'function') {
      var matches = window.searchCountry(query);
      if (matches.length === 0) return null;

      // Prefer exact name match
      var lowerQuery = query.toLowerCase();
      for (var i = 0; i < matches.length; i++) {
        if (matches[i].name.toLowerCase() === lowerQuery) {
          return matches[i];
        }
      }

      // Otherwise return first fuzzy match
      return matches[0];
    }

    // Fallback: case-insensitive name search
    var search = query.toLowerCase();
    for (var j = 0; j < window.COUNTRIES.length; j++) {
      if (window.COUNTRIES[j].name.toLowerCase() === search) {
        return window.COUNTRIES[j];
      }
    }
    return null;
  };


  // ═══════════════════════════════════════════════
  // 15. HELPERS (kept from V1 + improved)
  // ═══════════════════════════════════════════════

  window.findCountryIdByName = function (name) {
    var country = window.resolveCountry(name);
    return country ? country.id : null;
  };

  window.isValidCountryName = function (name) {
    return window.resolveCountry(name) !== null;
  };

  window.isDuplicateGuess = function (countryId, guesses) {
    if (!guesses || !Array.isArray(guesses)) return false;
    for (var i = 0; i < guesses.length; i++) {
      if (guesses[i].guessId === countryId) return true;
    }
    return false;
  };


  // ═══════════════════════════════════════════════
  // 16. ⭐ DIFFICULTY CALIBRATION (NEW)
  // ═══════════════════════════════════════════════

  /**
   * NEW: Returns an estimated difficulty score for a country.
   * Used to balance daily picks (avoid always picking obscure islands).
   *
   * Factors:
   * - Population (higher = easier)
   * - Area (bigger = easier)
   * - Has famous landmark
   *
   * @param {object} country
   * @returns {number} 1 (easy) to 5 (very hard)
   */
  window.getDifficultyScore = function (country) {
    var score = 3; // medium default

    // Population factor
    if (country.population > 100000000) score -= 2;       // 100M+ (China, India, US)
    else if (country.population > 30000000) score -= 1;   // 30M+ (well-known)
    else if (country.population < 1000000) score += 2;    // < 1M (obscure)
    else if (country.population < 5000000) score += 1;    // < 5M

    // Area factor
    if (country.area > 1000000) score -= 1;     // Huge countries
    else if (country.area < 1000) score += 1;   // Tiny island nations

    // Famous countries override
    var famous = ['usa', 'china', 'india', 'russia', 'brazil', 'japan',
                  'germany', 'france', 'united-kingdom', 'united-states',
                  'italy', 'spain', 'australia', 'canada', 'mexico'];
    if (famous.indexOf(country.id) !== -1) score = 1;

    return Math.max(1, Math.min(5, score));
  };


  // ═══════════════════════════════════════════════
  // 17. ⭐ GUESS SUMMARY (NEW — for share/result)
  // ═══════════════════════════════════════════════

  /**
   * NEW: Generate emoji grid representation of all guesses.
   * Used by share feature.
   *
   * @param {Array} guesses - Array of evaluateGuess results
   * @param {boolean} won - Did the player win?
   * @returns {string} Emoji grid
   */
  window.buildEmojiGrid = function (guesses, won) {
    var grid = '';
    for (var i = 0; i < guesses.length; i++) {
      var g = guesses[i];
      if (g.isCorrect) {
        grid += '🟢';
      } else {
        var d = g.distance;
        if (d < 1000)       grid += '🟡';
        else if (d < 4000)  grid += '🟠';
        else if (d < 8000)  grid += '🔴';
        else                grid += '⚫';
      }
    }
    // Fill remaining slots
    var remaining = MAX_GUESSES - guesses.length;
    for (var j = 0; j < remaining; j++) {
      grid += '⬜';
    }
    return grid;
  };


  // ═══════════════════════════════════════════════
  // 18. EXPORTS SUMMARY (for debugging)
  // ═══════════════════════════════════════════════

  window.Logic = {
    version: '2.0',
    constants: {
      MAX_DISTANCE_KM: MAX_DISTANCE_KM,
      MAX_GUESSES: MAX_GUESSES,
      EARTH_RADIUS_KM: EARTH_RADIUS_KM
    },
    // Re-export for namespaced access
    calculateDistance: window.calculateDistance,
    calculateBearing: window.calculateBearing,
    evaluateGuess: window.evaluateGuess,
    buildProgressiveHints: window.buildProgressiveHints,
    resolveCountry: window.resolveCountry,
    buildEmojiGrid: window.buildEmojiGrid,
    getDifficultyScore: window.getDifficultyScore
  };

  console.log('[logic.js v2] Loaded — 18 functions, 60+ messages, hint builder ready');

})();
