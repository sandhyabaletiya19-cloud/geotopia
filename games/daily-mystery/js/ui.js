/* ═══════════════════════════════════════════════════════════
   DHARAVERSE MAP MYSTERY — UI CONTROLLER
   File: /games/daily-mystery/js/ui.js
   
   DEPENDS ON: data.js, logic.js (must be loaded first)
   EXPORTS: window.UI
   ═══════════════════════════════════════════════════════════ */

(function() {
  'use strict';

  // ═══════════════════════════════════════════════════════════
  // TILE PROVIDERS FOR EACH THEME
  // ═══════════════════════════════════════════════════════════
  const TILE_PROVIDERS = {
    galaxy: {
      url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
      attribution: '© <a href="https://carto.com/">CARTO</a>'
    },
    candy: {
      url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
      attribution: '© <a href="https://carto.com/">CARTO</a>'
    },
    ocean: {
      url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
      attribution: '© <a href="https://carto.com/">CARTO</a>'
    },
    jungle: {
      url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      attribution: '© <a href="https://www.esri.com/">Esri</a>'
    },
    sunset: {
      url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
      attribution: '© <a href="https://carto.com/">CARTO</a>'
    },
    lemon: {
      url: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
      attribution: '© <a href="https://carto.com/">CARTO</a>'
    }
  };

  // ═══════════════════════════════════════════════════════════
  // DIRECTION ARROWS (8-point compass)
  // ═══════════════════════════════════════════════════════════
  const DIRECTION_ARROWS = {
    'N': '⬆️',
    'NE': '↗️',
    'E': '➡️',
    'SE': '↘️',
    'S': '⬇️',
    'SW': '↙️',
    'W': '⬅️',
    'NW': '↖️'
  };

  // ═══════════════════════════════════════════════════════════
  // UI CONTROLLER
  // ═══════════════════════════════════════════════════════════
  const UI = {
    // References
    map: null,
    tileLayer: null,
    markers: [],
    lines: [],
    
    // DOM Elements (cached)
    elements: {},
    
    // State
    currentTheme: 'galaxy',
    autocompleteIndex: -1,
    
    // ─────────────────────────────────────────────────────────
    // INITIALIZATION
    // ─────────────────────────────────────────────────────────
    init: function() {
      this.cacheElements();
      this.loadTheme();
      this.initMap();
      this.initAutocomplete();
      this.initEventListeners();
      this.updateGuessDots(0);
      
      console.log('[UI] Initialized');
    },
    
    // Cache all DOM elements for performance
    cacheElements: function() {
      this.elements = {
        // Containers
        gameContainer: document.querySelector('.game-container'),
        mapSection: document.querySelector('.map-section'),
        mapElement: document.getElementById('game-map'),
        guessesList: document.querySelector('.guesses-list'),
        
        // Input
        countryInput: document.getElementById('country-input'),
        submitBtn: document.getElementById('submit-btn'),
        autocompleteDropdown: document.querySelector('.autocomplete-dropdown'),
        
        // Header
        streakBadge: document.querySelector('.streak-badge'),
        streakCount: document.querySelector('.streak-count'),
        themeBtn: document.querySelector('.theme-btn'),
        
        // Map overlay
        guessCounter: document.querySelector('.guess-counter'),
        guessDots: document.querySelectorAll('.guess-dot'),
        
        // Modals
        resultModal: document.getElementById('result-modal'),
        themeModal: document.getElementById('theme-modal'),
        
        // News ticker
        newsText: document.querySelector('.news-text')
      };
    },
    
    // ─────────────────────────────────────────────────────────
    // MAP INITIALIZATION — CRITICAL MOBILE FIX
    // ─────────────────────────────────────────────────────────
    initMap: function() {
      if (!this.elements.mapElement) {
        console.error('[UI] Map element not found');
        return;
      }
      
      // Destroy existing map if any
      if (this.map) {
        this.map.remove();
        this.map = null;
      }
      
      // Wait for DOM to be ready
      requestAnimationFrame(() => {
        // Set explicit height in pixels (mobile fix)
        const mapHeight = this.elements.mapElement.offsetHeight;
        if (mapHeight < 100) {
          this.elements.mapElement.style.height = '200px';
        }
        
        // Initialize map
        this.map = L.map('game-map', {
          center: [20, 0],
          zoom: 2,
          minZoom: 1,
          maxZoom: 8,
          zoomControl: true,
          scrollWheelZoom: false,    // Prevent scroll hijacking on mobile
          dragging: true,
          tap: true,                  // iOS touch support
          touchZoom: true,
          doubleClickZoom: true,
          attributionControl: true
        });
        
        // Add tile layer
        this.setMapTiles(this.currentTheme);
        
        // CRITICAL: Force map to recalculate size
        setTimeout(() => {
          this.map.invalidateSize();
        }, 100);
        
        // Also invalidate on window resize
        window.addEventListener('resize', () => {
          if (this.map) {
            this.map.invalidateSize();
          }
        });
        
        // Invalidate when orientation changes (mobile)
        window.addEventListener('orientationchange', () => {
          setTimeout(() => {
            if (this.map) {
              this.map.invalidateSize();
            }
          }, 200);
        });
        
        console.log('[UI] Map initialized');
      });
    },
    
    // Set map tiles based on theme
    setMapTiles: function(theme) {
      if (!this.map) return;
      
      const provider = TILE_PROVIDERS[theme] || TILE_PROVIDERS.galaxy;
      
      // Remove old tile layer
      if (this.tileLayer) {
        this.map.removeLayer(this.tileLayer);
      }
      
      // Add new tile layer
      this.tileLayer = L.tileLayer(provider.url, {
        attribution: provider.attribution,
        maxZoom: 18,
        subdomains: 'abcd'
      }).addTo(this.map);
    },
    
    // ─────────────────────────────────────────────────────────
    // AUTOCOMPLETE
    // ─────────────────────────────────────────────────────────
    initAutocomplete: function() {
      const input = this.elements.countryInput;
      const dropdown = this.elements.autocompleteDropdown;
      
      if (!input || !dropdown) return;
      
      // Input event — show suggestions
      input.addEventListener('input', (e) => {
        const query = e.target.value.trim();
        
        if (query.length < 2) {
          this.hideAutocomplete();
          return;
        }
        
        const matches = window.searchCountry(query);
        this.showAutocomplete(matches.slice(0, 8)); // Max 8 results
      });
      
      // Keyboard navigation
      input.addEventListener('keydown', (e) => {
        const items = dropdown.querySelectorAll('.autocomplete-item');
        
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          this.autocompleteIndex = Math.min(this.autocompleteIndex + 1, items.length - 1);
          this.highlightAutocompleteItem(items);
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          this.autocompleteIndex = Math.max(this.autocompleteIndex - 1, 0);
          this.highlightAutocompleteItem(items);
        } else if (e.key === 'Enter') {
          e.preventDefault();
          if (this.autocompleteIndex >= 0 && items[this.autocompleteIndex]) {
            this.selectCountry(items[this.autocompleteIndex].dataset.id);
          } else if (items.length === 1) {
            this.selectCountry(items[0].dataset.id);
          }
        } else if (e.key === 'Escape') {
          this.hideAutocomplete();
        }
      });
      
      // Focus event
      input.addEventListener('focus', () => {
        if (input.value.length >= 2) {
          const matches = window.searchCountry(input.value);
          this.showAutocomplete(matches.slice(0, 8));
        }
      });
      
      // Click outside to close
      document.addEventListener('click', (e) => {
        if (!e.target.closest('.input-wrapper')) {
          this.hideAutocomplete();
        }
      });
    },
    
    showAutocomplete: function(countries) {
      const dropdown = this.elements.autocompleteDropdown;
      if (!dropdown) return;
      
      if (countries.length === 0) {
        this.hideAutocomplete();
        return;
      }
      
      dropdown.innerHTML = countries.map(c => `
        <div class="autocomplete-item" data-id="${c.id}">
          <span class="autocomplete-flag">${c.flag}</span>
          <span class="autocomplete-name">${c.name}</span>
        </div>
      `).join('');
      
      // Add click listeners
      dropdown.querySelectorAll('.autocomplete-item').forEach(item => {
        item.addEventListener('click', () => {
          this.selectCountry(item.dataset.id);
        });
      });
      
      dropdown.classList.add('active');
      this.autocompleteIndex = -1;
    },
    
    hideAutocomplete: function() {
      if (this.elements.autocompleteDropdown) {
        this.elements.autocompleteDropdown.classList.remove('active');
        this.elements.autocompleteDropdown.innerHTML = '';
      }
      this.autocompleteIndex = -1;
    },
    
    highlightAutocompleteItem: function(items) {
      items.forEach((item, index) => {
        item.classList.toggle('highlighted', index === this.autocompleteIndex);
      });
      
      // Scroll into view
      if (items[this.autocompleteIndex]) {
        items[this.autocompleteIndex].scrollIntoView({ block: 'nearest' });
      }
    },
    
    selectCountry: function(countryId) {
      const country = window.COUNTRY_LOOKUP[countryId];
      if (!country) return;
      
      this.elements.countryInput.value = country.name;
      this.elements.countryInput.dataset.selectedId = countryId;
      this.hideAutocomplete();
      
      // Focus submit button
      if (this.elements.submitBtn) {
        this.elements.submitBtn.focus();
      }
    },
    
    // ─────────────────────────────────────────────────────────
    // EVENT LISTENERS
    // ─────────────────────────────────────────────────────────
    initEventListeners: function() {
      // Submit button
      if (this.elements.submitBtn) {
        this.elements.submitBtn.addEventListener('click', () => {
          this.handleSubmit();
        });
      }
      
      // Theme button
      if (this.elements.themeBtn) {
        this.elements.themeBtn.addEventListener('click', () => {
          this.showThemeModal();
        });
      }
      
      // Enter key on input
      if (this.elements.countryInput) {
        this.elements.countryInput.addEventListener('keypress', (e) => {
          if (e.key === 'Enter' && !this.elements.autocompleteDropdown.classList.contains('active')) {
            this.handleSubmit();
          }
        });
      }
    },
    
    handleSubmit: function() {
      const input = this.elements.countryInput;
      const countryId = input.dataset.selectedId;
      
      if (!countryId) {
        // Try to find country by name
        const matches = window.searchCountry(input.value.trim());
        if (matches.length === 1) {
          input.dataset.selectedId = matches[0].id;
          this.handleSubmit();
          return;
        } else if (matches.length > 1) {
          this.showAutocomplete(matches.slice(0, 8));
          return;
        } else {
          this.shakeInput();
          return;
        }
      }
      
      // Dispatch custom event for game logic to handle
      const event = new CustomEvent('guess-submitted', {
        detail: { countryId: countryId }
      });
      document.dispatchEvent(event);
      
      // Clear input
      input.value = '';
      input.dataset.selectedId = '';
    },
    
    shakeInput: function() {
      const input = this.elements.countryInput;
      if (!input) return;
      
      input.style.animation = 'none';
      input.offsetHeight; // Trigger reflow
      input.style.animation = 'shake 0.5s ease';
      
      setTimeout(() => {
        input.style.animation = '';
      }, 500);
    },
    
    // ─────────────────────────────────────────────────────────
    // GUESS RENDERING
    // ─────────────────────────────────────────────────────────
    
    /**
     * Add a guess row to the UI
     * @param {Object} guessData - { guessedCountry, targetCountry, distance, bearing, direction, guessNumber, isCorrect }
     */
    addGuessRow: function(guessData) {
      const { guessedCountry, targetCountry, distance, bearing, direction, guessNumber, isCorrect } = guessData;
      
      // Get distance color class
      const distanceClass = this.getDistanceClass(distance);
      
      // Build hint chips based on guess number
      const hintsHtml = this.buildHintChips(guessNumber, targetCountry, guessedCountry, direction);
      
      // Create guess card HTML
      const cardHtml = `
        <div class="guess-card ${distanceClass} ${isCorrect ? 'correct' : ''}" data-guess="${guessNumber}">
          <div class="guess-main">
            <span class="guess-flag">${guessedCountry.flag}</span>
            <div class="guess-info">
              <div class="guess-country">${guessedCountry.name}</div>
              <div class="guess-meta">
                <span>Guess #${guessNumber}</span>
              </div>
            </div>
            <div class="guess-distance">
              <div class="distance-value ${isCorrect ? 'correct' : ''}" style="color: var(--distance-color);">
                ${isCorrect ? '🎯 CORRECT!' : this.formatDistance(distance)}
              </div>
              ${!isCorrect ? `
                <div class="direction-arrow animate" style="transform: rotate(${bearing}deg);" title="${direction}">
                  🧭
                </div>
              ` : ''}
            </div>
          </div>
          
          ${!isCorrect ? `
            <div class="distance-meter">
              <div class="distance-meter-fill" style="width: ${this.getDistancePercent(distance)}%; background: var(--distance-color);"></div>
            </div>
          ` : ''}
          
          ${hintsHtml ? `<div class="hints-row">${hintsHtml}</div>` : ''}
        </div>
      `;
      
      // Add to list
      if (this.elements.guessesList) {
        this.elements.guessesList.insertAdjacentHTML('beforeend', cardHtml);
        
        // Scroll to new card
        const newCard = this.elements.guessesList.lastElementChild;
        if (newCard) {
          newCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }
      
      // Update guess dots
      this.updateGuessDots(guessNumber, isCorrect);
      
      // Add marker to map
      this.addMapMarker(guessedCountry, targetCountry, distance, isCorrect);
    },
    
    // Get CSS class based on distance
    getDistanceClass: function(distance) {
      if (distance === 0) return 'distance-correct';
      if (distance < 1000) return 'distance-very-close';
      if (distance < 4000) return 'distance-close';
      if (distance < 8000) return 'distance-medium';
      return 'distance-far';
    },
    
    // Get percentage for distance meter (closer = more filled)
    getDistancePercent: function(distance) {
      // Max distance on Earth is ~20,000 km
      const maxDistance = 20000;
      const percent = Math.max(5, 100 - (distance / maxDistance) * 100);
      return Math.round(percent);
    },
    
    // Format distance nicely
    formatDistance: function(distance) {
      if (distance < 1) return '< 1 km';
      if (distance < 100) return Math.round(distance) + ' km';
      return Math.round(distance).toLocaleString() + ' km';
    },
    
    // ─────────────────────────────────────────────────────────
    // HINT CHIPS (Progressive Reveal)
    // ─────────────────────────────────────────────────────────
    
    /**
     * Build hint chips HTML based on guess number
     * 
     * HINT 1 — Amazing fact (animal/flag)
     * HINT 2 — Direction from guessed country
     * HINT 3 — Climate + Landlocked
     * HINT 4 — Sports fact
     * HINT 5 — Continent
     * HINT 6 — First/Last letter + Landmark + Warning
     */
    buildHintChips: function(guessNumber, targetCountry, guessedCountry, direction) {
      const chips = [];
      
      // HINT 1 — Amazing fact (after guess 1)
      if (guessNumber >= 1) {
        chips.push(`
          <span class="hint-chip amazing-fact" title="Fun Fact">
            🦁 ${this.truncateText(targetCountry.amazingFact, 50)}
          </span>
        `);
      }
      
      // HINT 2 — Direction (after guess 2)
      if (guessNumber >= 2) {
        chips.push(`
          <span class="hint-chip direction" title="Direction from your guess">
            🧭 Head ${direction} from ${guessedCountry.name}
          </span>
        `);
      }
      
      // HINT 3 — Climate + Landlocked (after guess 3)
      if (guessNumber >= 3) {
        const climateEmoji = this.getClimateEmoji(targetCountry.climate);
        chips.push(`
          <span class="hint-chip climate" title="Climate">
            ${climateEmoji} ${targetCountry.climate}
          </span>
        `);
        
        const landlockedChip = targetCountry.landlocked 
          ? '<span class="hint-chip landlocked" title="Landlocked">🏔️ Landlocked</span>'
          : '<span class="hint-chip landlocked" title="Has coastline">🏖️ Has coastline</span>';
        chips.push(landlockedChip);
      }
      
      // HINT 4 — Sports fact (after guess 4)
      if (guessNumber >= 4) {
        chips.push(`
          <span class="hint-chip sports" title="Sports Fact">
            ⚽ ${this.truncateText(targetCountry.sportsFact, 60)}
          </span>
        `);
      }
      
      // HINT 5 — Continent (after guess 5)
      if (guessNumber >= 5) {
        chips.push(`
          <span class="hint-chip continent" title="Continent">
            📍 ${targetCountry.continent}
          </span>
        `);
      }
      
      // HINT 6 — First/Last letter + Landmark + Warning (guess 6)
      if (guessNumber >= 6) {
        chips.push(`
          <span class="hint-chip first-last" title="First & Last Letter">
            🔤 ${targetCountry.firstLast}
          </span>
        `);
        
        chips.push(`
          <span class="hint-chip landmark" title="Famous Landmark">
            ${targetCountry.landmark}
          </span>
        `);
        
        chips.push(`
          <span class="hint-chip warning">
            ⚠️ LAST CHANCE!
          </span>
        `);
      }
      
      return chips.join('');
    },
    
    getClimateEmoji: function(climate) {
      const emojis = {
        'Tropical': '🌴',
        'Arid': '🏜️',
        'Temperate': '🌤️',
        'Continental': '❄️',
        'Polar': '🧊',
        'Mediterranean': '☀️'
      };
      return emojis[climate] || '🌡️';
    },
    
    truncateText: function(text, maxLength) {
      if (!text) return '';
      if (text.length <= maxLength) return text;
      return text.substring(0, maxLength) + '...';
    },
    
    // ─────────────────────────────────────────────────────────
    // MAP MARKERS
    // ─────────────────────────────────────────────────────────
    addMapMarker: function(guessedCountry, targetCountry, distance, isCorrect) {
      if (!this.map) return;
      
      // Create marker icon
      const markerColor = isCorrect ? '#22C55E' : '#EF4444';
      const markerIcon = L.divIcon({
        className: 'custom-marker',
        html: `
          <div style="
            width: 24px;
            height: 24px;
            background: ${markerColor};
            border: 3px solid white;
            border-radius: 50%;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
          ">${isCorrect ? '⭐' : ''}</div>
        `,
        iconSize: [24, 24],
        iconAnchor: [12, 12]
      });
      
      // Add marker
      const marker = L.marker([guessedCountry.lat, guessedCountry.lng], {
        icon: markerIcon
      }).addTo(this.map);
      
      // Add popup
      marker.bindPopup(`
        <div style="text-align: center; font-family: 'Nunito', sans-serif;">
          <strong>${guessedCountry.flag} ${guessedCountry.name}</strong><br>
          ${isCorrect ? '🎯 Correct!' : `${this.formatDistance(distance)} away`}
        </div>
      `);
      
      this.markers.push(marker);
      
      // Draw line from guess to target (if not correct)
      if (!isCorrect) {
        const distanceClass = this.getDistanceClass(distance);
        const lineColor = distanceClass === 'distance-far' ? '#EF4444' 
          : distanceClass === 'distance-medium' ? '#F97316'
          : distanceClass === 'distance-close' ? '#EAB308'
          : '#22C55E';
        
        const line = L.polyline([
          [guessedCountry.lat, guessedCountry.lng],
          [targetCountry.lat, targetCountry.lng]
        ], {
          color: lineColor,
          weight: 2,
          opacity: 0.6,
          dashArray: '5, 10'
        }).addTo(this.map);
        
        this.lines.push(line);
      }
      
      // Pan to show the guess
      this.map.panTo([guessedCountry.lat, guessedCountry.lng], {
        animate: true,
        duration: 0.5
      });
      
      // If correct, zoom in on target
      if (isCorrect) {
        setTimeout(() => {
          this.map.flyTo([targetCountry.lat, targetCountry.lng], 5, {
            animate: true,
            duration: 1
          });
        }, 500);
      }
    },
    
    // Clear all markers and lines
    clearMap: function() {
      this.markers.forEach(marker => {
        if (this.map) this.map.removeLayer(marker);
      });
      this.lines.forEach(line => {
        if (this.map) this.map.removeLayer(line);
      });
      this.markers = [];
      this.lines = [];
    },
    
    // ─────────────────────────────────────────────────────────
    // GUESS DOTS (Progress Indicator)
    // ─────────────────────────────────────────────────────────
    updateGuessDots: function(guessCount, isCorrect = false) {
      if (!this.elements.guessDots) return;
      
      this.elements.guessDots.forEach((dot, index) => {
        dot.classList.remove('used', 'correct');
        
        if (index < guessCount) {
          if (isCorrect && index === guessCount - 1) {
            dot.classList.add('correct');
          } else {
            dot.classList.add('used');
          }
        }
      });
      
      // Update counter text
      if (this.elements.guessCounter) {
        const counter = this.elements.guessCounter.querySelector('.guess-count');
        if (counter) {
          counter.textContent = `${guessCount}/6`;
        }
      }
    },
    
    // ─────────────────────────────────────────────────────────
    // STREAK BADGE
    // ─────────────────────────────────────────────────────────
    updateStreak: function(streak) {
      if (!this.elements.streakBadge) return;
      
      const countEl = this.elements.streakBadge.querySelector('.streak-count');
      if (countEl) {
        countEl.textContent = streak;
      }
      
      // Add active class if streak > 0
      if (streak > 0) {
        this.elements.streakBadge.classList.add('active');
      } else {
        this.elements.streakBadge.classList.remove('active');
      }
    },
    
    // ─────────────────────────────────────────────────────────
    // THEME MANAGEMENT
    // ─────────────────────────────────────────────────────────
    loadTheme: function() {
      const savedTheme = localStorage.getItem('dv-theme') || 'galaxy';
      this.setTheme(savedTheme);
    },
    
    setTheme: function(theme) {
      this.currentTheme = theme;
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('dv-theme', theme);
      
      // Update map tiles
      this.setMapTiles(theme);
      
      // Update meta theme-color
      const metaThemeColor = document.querySelector('meta[name="theme-color"]');
      if (metaThemeColor) {
        const colors = {
          galaxy: '#0F0F23',
          candy: '#FFF0FB',
          ocean: '#F0FAFF',
          jungle: '#F0FDF4',
          sunset: '#FFF7F0',
          lemon: '#FEFCE8'
        };
        metaThemeColor.setAttribute('content', colors[theme] || colors.galaxy);
      }
      
      console.log('[UI] Theme set to:', theme);
    },
    
    showThemeModal: function() {
      const modal = this.elements.themeModal;
      if (!modal) {
        this.createThemeModal();
        return;
      }
      
      modal.classList.add('active');
      
      // Update active theme indicator
      modal.querySelectorAll('.theme-option').forEach(option => {
        option.classList.toggle('active', option.dataset.theme === this.currentTheme);
      });
    },
    
    hideThemeModal: function() {
      if (this.elements.themeModal) {
        this.elements.themeModal.classList.remove('active');
      }
    },
    
    createThemeModal: function() {
      const modalHtml = `
        <div class="modal-overlay" id="theme-modal">
          <div class="modal">
            <div class="modal-icon">🎨</div>
            <h2 class="modal-title">Choose Theme</h2>
            <p class="modal-subtitle">Pick your favorite color scheme</p>
            
            <div class="theme-grid">
              <button class="theme-option ${this.currentTheme === 'galaxy' ? 'active' : ''}" data-theme="galaxy">
                <div class="theme-preview galaxy"></div>
                <span class="theme-name">Galaxy 🌌</span>
              </button>
              <button class="theme-option ${this.currentTheme === 'candy' ? 'active' : ''}" data-theme="candy">
                <div class="theme-preview candy"></div>
                <span class="theme-name">Candy 🍬</span>
              </button>
              <button class="theme-option ${this.currentTheme === 'ocean' ? 'active' : ''}" data-theme="ocean">
                <div class="theme-preview ocean"></div>
                <span class="theme-name">Ocean 🌊</span>
              </button>
              <button class="theme-option ${this.currentTheme === 'jungle' ? 'active' : ''}" data-theme="jungle">
                <div class="theme-preview jungle"></div>
                <span class="theme-name">Jungle 🌿</span>
              </button>
              <button class="theme-option ${this.currentTheme === 'sunset' ? 'active' : ''}" data-theme="sunset">
                <div class="theme-preview sunset"></div>
                <span class="theme-name">Sunset 🌅</span>
              </button>
              <button class="theme-option ${this.currentTheme === 'lemon' ? 'active' : ''}" data-theme="lemon">
                <div class="theme-preview lemon"></div>
                <span class="theme-name">Lemon 🍋</span>
              </button>
            </div>
            
            <div class="modal-actions">
              <button class="btn btn-secondary w-full" id="close-theme-modal">Close</button>
            </div>
          </div>
        </div>
      `;
      
      document.body.insertAdjacentHTML('beforeend', modalHtml);
      this.elements.themeModal = document.getElementById('theme-modal');
      
      // Add event listeners
      this.elements.themeModal.querySelectorAll('.theme-option').forEach(option => {
        option.addEventListener('click', () => {
          this.setTheme(option.dataset.theme);
          this.elements.themeModal.querySelectorAll('.theme-option').forEach(o => {
            o.classList.toggle('active', o.dataset.theme === option.dataset.theme);
          });
        });
      });
      
      document.getElementById('close-theme-modal').addEventListener('click', () => {
        this.hideThemeModal();
      });
      
      // Close on overlay click
      this.elements.themeModal.addEventListener('click', (e) => {
        if (e.target === this.elements.themeModal) {
          this.hideThemeModal();
        }
      });
      
      // Show it
      setTimeout(() => {
        this.elements.themeModal.classList.add('active');
      }, 10);
    },
    
    // ─────────────────────────────────────────────────────────
    // RESULT MODAL (Win/Lose)
    // ─────────────────────────────────────────────────────────
    showResultModal: function(isWin, targetCountry, guessCount, streak) {
      const existingModal = document.getElementById('result-modal');
      if (existingModal) {
        existingModal.remove();
      }
      
      const icon = isWin ? '🎉' : '😢';
      const title = isWin ? 'Congratulations!' : 'Game Over';
      const subtitle = isWin 
        ? `You found it in ${guessCount} ${guessCount === 1 ? 'guess' : 'guesses'}!`
        : `The country was ${targetCountry.name}`;
      
      const modalHtml = `
        <div class="modal-overlay active" id="result-modal">
          <div class="modal">
            <div class="modal-icon">${icon}</div>
            <h2 class="modal-title">${title}</h2>
            <p class="modal-subtitle">${subtitle}</p>
            
            <div class="country-reveal">
              <span class="country-reveal-flag">${targetCountry.flag}</span>
              <span class="country-reveal-name">${targetCountry.name}</span>
            </div>
            
            <div class="stats-grid">
              <div class="stat-item">
                <div class="stat-value">${guessCount}</div>
                <div class="stat-label">Guesses</div>
              </div>
              <div class="stat-item">
                <div class="stat-value">${streak}</div>
                <div class="stat-label">Streak</div>
              </div>
              <div class="stat-item">
                <div class="stat-value">${isWin ? '✓' : '✗'}</div>
                <div class="stat-label">Today</div>
              </div>
            </div>
            
            <div class="modal-actions">
              <button class="btn btn-primary w-full" id="share-result-btn">
                📤 Share Result
              </button>
              <button class="btn btn-secondary w-full" id="close-result-modal">
                Close
              </button>
            </div>
            
            <div class="countdown-section mt-4">
              <div class="countdown-label">Next puzzle in</div>
              <div class="countdown-timer" id="countdown-timer">
                <div class="countdown-unit">
                  <span class="countdown-value" id="countdown-hours">--</span>
                  <span class="countdown-label-small">Hours</span>
                </div>
                <div class="countdown-unit">
                  <span class="countdown-value" id="countdown-minutes">--</span>
                  <span class="countdown-label-small">Mins</span>
                </div>
                <div class="countdown-unit">
                  <span class="countdown-value" id="countdown-seconds">--</span>
                  <span class="countdown-label-small">Secs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
      
      document.body.insertAdjacentHTML('beforeend', modalHtml);
      
      // Start countdown
      this.startCountdown();
      
      // Event listeners
      document.getElementById('share-result-btn').addEventListener('click', () => {
        this.shareResult(isWin, targetCountry, guessCount);
      });
      
      document.getElementById('close-result-modal').addEventListener('click', () => {
        document.getElementById('result-modal').classList.remove('active');
      });
      
      // Confetti if win
      if (isWin) {
        this.showConfetti();
      }
    },
    
    // ─────────────────────────────────────────────────────────
    // COUNTDOWN TIMER
    // ─────────────────────────────────────────────────────────
    startCountdown: function() {
      const updateCountdown = () => {
        const now = new Date();
        
        // Get midnight IST (UTC+5:30)
        const istOffset = 5.5 * 60 * 60 * 1000; // 5 hours 30 minutes in ms
        const utcNow = now.getTime() + (now.getTimezoneOffset() * 60 * 1000);
        const istNow = new Date(utcNow + istOffset);
        
        // Tomorrow midnight IST
        const tomorrow = new Date(istNow);
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(0, 0, 0, 0);
        
        const diff = tomorrow.getTime() - istNow.getTime();
        
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        const hoursEl = document.getElementById('countdown-hours');
        const minutesEl = document.getElementById('countdown-minutes');
        const secondsEl = document.getElementById('countdown-seconds');
        
        if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
        if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
        if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
      };
      
      updateCountdown();
      setInterval(updateCountdown, 1000);
    },
    
    // ─────────────────────────────────────────────────────────
    // SHARE RESULT
    // ─────────────────────────────────────────────────────────
    shareResult: function(isWin, targetCountry, guessCount) {
      // This will be handled by share.js
      const event = new CustomEvent('share-result', {
        detail: { isWin, targetCountry, guessCount }
      });
      document.dispatchEvent(event);
    },
    
    // ─────────────────────────────────────────────────────────
    // CONFETTI
    // ─────────────────────────────────────────────────────────
    showConfetti: function() {
      const container = document.createElement('div');
      container.className = 'confetti-container';
      document.body.appendChild(container);
      
      const colors = ['#FF2D87', '#7C3AED', '#22C55E', '#EAB308', '#0284C7', '#EA580C'];
      const confettiCount = 100;
      
      for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
          position: absolute;
          width: ${Math.random() * 10 + 5}px;
          height: ${Math.random() * 10 + 5}px;
          background: ${colors[Math.floor(Math.random() * colors.length)]};
          left: ${Math.random() * 100}%;
          top: -20px;
          border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
          animation: confetti-fall ${Math.random() * 2 + 2}s linear forwards;
          animation-delay: ${Math.random() * 0.5}s;
        `;
        container.appendChild(confetti);
      }
      
      // Add animation keyframes if not exists
      if (!document.getElementById('confetti-styles')) {
        const style = document.createElement('style');
        style.id = 'confetti-styles';
        style.textContent = `
          @keyframes confetti-fall {
            0% {
              transform: translateY(0) rotate(0deg);
              opacity: 1;
            }
            100% {
              transform: translateY(100vh) rotate(720deg);
              opacity: 0;
            }
          }
        `;
        document.head.appendChild(style);
      }
      
      // Remove after animation
      setTimeout(() => {
        container.remove();
      }, 4000);
    },
    
    // ─────────────────────────────────────────────────────────
    // DISABLE INPUT (Game Over)
    // ─────────────────────────────────────────────────────────
    disableInput: function() {
      if (this.elements.countryInput) {
        this.elements.countryInput.disabled = true;
        this.elements.countryInput.placeholder = 'Game over for today!';
      }
      if (this.elements.submitBtn) {
        this.elements.submitBtn.disabled = true;
      }
    },
    
    enableInput: function() {
      if (this.elements.countryInput) {
        this.elements.countryInput.disabled = false;
        this.elements.countryInput.placeholder = 'Type country name...';
      }
      if (this.elements.submitBtn) {
        this.elements.submitBtn.disabled = false;
      }
    },
    
    // ─────────────────────────────────────────────────────────
    // CLEAR GUESSES (New Game)
    // ─────────────────────────────────────────────────────────
    clearGuesses: function() {
      if (this.elements.guessesList) {
        this.elements.guessesList.innerHTML = '';
      }
      this.clearMap();
      this.updateGuessDots(0);
    },
    
    // ─────────────────────────────────────────────────────────
    // NEWS TICKER
    // ─────────────────────────────────────────────────────────
    setNewsText: function(text) {
      if (this.elements.newsText) {
        this.elements.newsText.textContent = text;
      }
    }
  };
  
  // Add shake animation CSS
  const shakeStyle = document.createElement('style');
  shakeStyle.textContent = `
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
      20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
  `;
  document.head.appendChild(shakeStyle);
  
  // Export
  window.UI = UI;
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => UI.init());
  } else {
    UI.init();
  }
  
})();
