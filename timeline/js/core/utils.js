// ============================================
// GEOTOPIA UTILITY FUNCTIONS
// Helper functions used throughout the app
// ============================================

const GeoUtils = {
  
  // ============================================
  // DATE & TIME FORMATTING
  // ============================================
  
  /**
   * Format year for display (handles negative years, billions)
   * @param {number} year - Year to format
   * @returns {string} - Formatted year string
   */
  formatYear(year) {
    const absYear = Math.abs(year);
    
    // Billions of years ago
    if (absYear >= 1000000000) {
      const billions = (absYear / 1000000000).toFixed(2);
      return `${billions} billion years ago`;
    }
    
    // Millions of years ago
    if (absYear >= 1000000) {
      const millions = (absYear / 1000000).toFixed(1);
      return `${millions} million years ago`;
    }
    
    // Thousands of years ago
    if (absYear >= 10000) {
      const thousands = Math.round(absYear / 1000);
      return `${thousands},000 years ago`;
    }
    
    // BCE/CE
    if (year < 0) {
      return `${absYear} BCE`;
    } else if (year > 0) {
      return `${year} CE`;
    } else {
      return '1 BCE/CE';
    }
  },
  
  /**
   * Short year format for timeline labels
   * @param {number} year 
   * @returns {string}
   */
  formatYearShort(year) {
    const absYear = Math.abs(year);
    
    if (absYear >= 1000000000) {
      return `${(absYear / 1000000000).toFixed(1)}Ga`; // Gigayears
    }
    if (absYear >= 1000000) {
      return `${(absYear / 1000000).toFixed(0)}Ma`; // Megayears
    }
    if (absYear >= 1000) {
      return `${(absYear / 1000).toFixed(0)}Ka`; // Kiloyears
    }
    
    return year < 0 ? `${absYear} BCE` : `${year} CE`;
  },
  
  /**
   * Get duration between two years as human-readable string
   * @param {number} startYear 
   * @param {number} endYear 
   * @returns {string}
   */
  formatDuration(startYear, endYear) {
    const duration = Math.abs(endYear - startYear);
    
    if (duration >= 1000000000) {
      return `${(duration / 1000000000).toFixed(1)} billion years`;
    }
    if (duration >= 1000000) {
      return `${(duration / 1000000).toFixed(1)} million years`;
    }
    if (duration >= 1000) {
      return `${(duration / 1000).toFixed(0)} thousand years`;
    }
    
    return `${duration} years`;
  },
  
  // ============================================
  // TIMELINE SCALE CONVERSION
  // ============================================
  
  /**
   * Convert year to timeline position (0-1)
   * Uses logarithmic scale for 4.5 billion years
   * @param {number} year 
   * @returns {number} - Position from 0 (start) to 1 (now)
   */
  yearToPosition(year) {
    const START_YEAR = -4500000000; // 4.5 billion years ago
    const END_YEAR = 2026;
    
    // Normalize year to positive range
    const offsetYear = year - START_YEAR;
    const totalRange = END_YEAR - START_YEAR;
    
    // Apply logarithmic scale (makes recent history easier to explore)
    const logValue = Math.log10(offsetYear + 1);
    const logMax = Math.log10(totalRange + 1);
    
    return logValue / logMax;
  },
  
  /**
   * Convert timeline position (0-1) back to year
   * @param {number} position - 0 to 1
   * @returns {number} - Year
   */
  positionToYear(position) {
    const START_YEAR = -4500000000;
    const END_YEAR = 2026;
    const totalRange = END_YEAR - START_YEAR;
    
    const logMax = Math.log10(totalRange + 1);
    const logValue = position * logMax;
    const offsetYear = Math.pow(10, logValue) - 1;
    
    return Math.round(START_YEAR + offsetYear);
  },
  
  // ============================================
  // GEOLOGICAL ERA DETECTION
  // ============================================
  
  /**
   * Get geological era for a given year
   * @param {number} year 
   * @returns {object} - Era object with name, color, etc.
   */
  getEra(year) {
    const ERAS = [
      { 
        name: 'Hadean', 
        start: -4500000000, 
        end: -4000000000,
        color: '#FF4500',
        description: 'Formation of Earth, molten surface'
      },
      { 
        name: 'Archean', 
        start: -4000000000, 
        end: -2500000000,
        color: '#8B0000',
        description: 'First continents, early life'
      },
      { 
        name: 'Proterozoic', 
        start: -2500000000, 
        end: -541000000,
        color: '#4B0082',
        description: 'Oxygenation, multicellular life'
      },
      { 
        name: 'Paleozoic', 
        start: -541000000, 
        end: -252000000,
        color: '#006400',
        description: 'Cambrian explosion, fish, amphibians'
      },
      { 
        name: 'Mesozoic', 
        start: -252000000, 
        end: -66000000,
        color: '#228B22',
        description: 'Age of Dinosaurs'
      },
      { 
        name: 'Cenozoic', 
        start: -66000000, 
        end: 2026,
        color: '#4682B4',
        description: 'Age of Mammals, Human civilization'
      }
    ];
    
    for (let era of ERAS) {
      if (year >= era.start && year <= era.end) {
        return era;
      }
    }
    
    return ERAS[ERAS.length - 1]; // Default to Cenozoic
  },
  
  // ============================================
  // GEOGRAPHIC CALCULATIONS
  // ============================================
  
  /**
   * Calculate distance between two coordinates (Haversine formula)
   * @param {number} lat1 
   * @param {number} lng1 
   * @param {number} lat2 
   * @param {number} lng2 
   * @returns {number} - Distance in kilometers
   */
  calculateDistance(lat1, lng1, lat2, lng2) {
    const R = 6371; // Earth radius in km
    const dLat = this.toRadians(lat2 - lat1);
    const dLng = this.toRadians(lng2 - lng1);
    
    const a = 
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.toRadians(lat1)) * Math.cos(this.toRadians(lat2)) *
      Math.sin(dLng / 2) * Math.sin(dLng / 2);
    
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    
    return R * c;
  },
  
  /**
   * Convert degrees to radians
   * @param {number} degrees 
   * @returns {number}
   */
  toRadians(degrees) {
    return degrees * (Math.PI / 180);
  },
  
  /**
   * Convert radians to degrees
   * @param {number} radians 
   * @returns {number}
   */
  toDegrees(radians) {
    return radians * (180 / Math.PI);
  },
  
  // ============================================
  // COLOR UTILITIES
  // ============================================
  
  /**
   * Interpolate between two colors
   * @param {string} color1 - Hex color
   * @param {string} color2 - Hex color
   * @param {number} factor - 0 to 1
   * @returns {string} - Interpolated hex color
   */
  interpolateColor(color1, color2, factor) {
    const c1 = this.hexToRgb(color1);
    const c2 = this.hexToRgb(color2);
    
    const r = Math.round(c1.r + factor * (c2.r - c1.r));
    const g = Math.round(c1.g + factor * (c2.g - c1.g));
    const b = Math.round(c1.b + factor * (c2.b - c1.b));
    
    return this.rgbToHex(r, g, b);
  },
  
  /**
   * Convert hex color to RGB object
   * @param {string} hex 
   * @returns {object} - {r, g, b}
   */
  hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : { r: 0, g: 0, b: 0 };
  },
  
  /**
   * Convert RGB to hex color
   * @param {number} r 
   * @param {number} g 
   * @param {number} b 
   * @returns {string}
   */
  rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  },
  
  // ============================================
  // DATA MANIPULATION
  // ============================================
  
  /**
   * Deep clone an object
   * @param {object} obj 
   * @returns {object}
   */
  deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  },
  
  /**
   * Debounce function calls
   * @param {function} func 
   * @param {number} wait - Milliseconds
   * @returns {function}
   */
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },
  
  /**
   * Throttle function calls
   * @param {function} func 
   * @param {number} limit - Milliseconds
   * @returns {function}
   */
  throttle(func, limit) {
    let inThrottle;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  },
  
  /**
   * Generate unique ID
   * @returns {string}
   */
  generateId() {
    return `geotopia_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  },
  
  /**
   * Clamp number between min and max
   * @param {number} value 
   * @param {number} min 
   * @param {number} max 
   * @returns {number}
   */
  clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  },
  
  /**
   * Linear interpolation
   * @param {number} start 
   * @param {number} end 
   * @param {number} factor - 0 to 1
   * @returns {number}
   */
  lerp(start, end, factor) {
    return start + (end - start) * factor;
  },
  
  // ============================================
  // SEARCH & FILTER
  // ============================================
  
  /**
   * Fuzzy search in text
   * @param {string} searchTerm 
   * @param {string} text 
   * @returns {boolean}
   */
  fuzzyMatch(searchTerm, text) {
    const search = searchTerm.toLowerCase();
    const target = text.toLowerCase();
    
    let searchIndex = 0;
    for (let i = 0; i < target.length; i++) {
      if (target[i] === search[searchIndex]) {
        searchIndex++;
      }
      if (searchIndex === search.length) {
        return true;
      }
    }
    return false;
  },
  
  /**
   * Score search relevance (0-100)
   * @param {string} searchTerm 
   * @param {string} text 
   * @returns {number}
   */
  scoreMatch(searchTerm, text) {
    const search = searchTerm.toLowerCase();
    const target = text.toLowerCase();
    
    // Exact match = 100
    if (target === search) return 100;
    
    // Starts with = 80
    if (target.startsWith(search)) return 80;
    
    // Contains = 60
    if (target.includes(search)) return 60;
    
    // Fuzzy match = 40
    if (this.fuzzyMatch(search, target)) return 40;
    
    return 0;
  },
  
  // ============================================
  // VALIDATION
  // ============================================
  
  /**
   * Check if year is valid
   * @param {number} year 
   * @returns {boolean}
   */
  isValidYear(year) {
    return typeof year === 'number' && 
           year >= -4500000000 && 
           year <= 2026 &&
           !isNaN(year);
  },
  
  /**
   * Check if coordinates are valid
   * @param {number} lat 
   * @param {number} lng 
   * @returns {boolean}
   */
  isValidCoordinates(lat, lng) {
    return typeof lat === 'number' &&
           typeof lng === 'number' &&
           lat >= -90 && lat <= 90 &&
           lng >= -180 && lng <= 180 &&
           !isNaN(lat) && !isNaN(lng);
  },
  
  // ============================================
  // PERFORMANCE
  // ============================================
  
  /**
   * Request animation frame with fallback
   * @param {function} callback 
   * @returns {number}
   */
  requestFrame(callback) {
    return window.requestAnimationFrame(callback) ||
           window.setTimeout(callback, 1000 / 60);
  },
  
  /**
   * Cancel animation frame
   * @param {number} id 
   */
  cancelFrame(id) {
    window.cancelAnimationFrame(id) || window.clearTimeout(id);
  },
  
  // ============================================
  // BROWSER DETECTION
  // ============================================
  
  /**
   * Check if device is mobile
   * @returns {boolean}
   */
  isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  },
  
  /**
   * Check if browser supports WebGL
   * @returns {boolean}
   */
  supportsWebGL() {
    try {
      const canvas = document.createElement('canvas');
      return !!(window.WebGLRenderingContext && 
                (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
    } catch(e) {
      return false;
    }
  },
  
  /**
   * Get device pixel ratio
   * @returns {number}
   */
  getPixelRatio() {
    return window.devicePixelRatio || 1;
  },
  
  // ============================================
  // LOCAL STORAGE
  // ============================================
  
  /**
   * Save to localStorage with error handling
   * @param {string} key 
   * @param {*} value 
   * @returns {boolean} - Success
   */
  saveToStorage(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      console.warn('LocalStorage save failed:', e);
      return false;
    }
  },
  
  /**
   * Load from localStorage
   * @param {string} key 
   * @param {*} defaultValue 
   * @returns {*}
   */
  loadFromStorage(key, defaultValue = null) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (e) {
      console.warn('LocalStorage load failed:', e);
      return defaultValue;
    }
  },
  
  /**
   * Remove from localStorage
   * @param {string} key 
   */
  removeFromStorage(key) {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.warn('LocalStorage remove failed:', e);
    }
  }
};

// Export for use in other modules
window.GeoUtils = GeoUtils;
