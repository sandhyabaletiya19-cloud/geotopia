// ============================================
// GEOTOPIA STATE MANAGER
// Global application state with event system
// ============================================

class GeoState {
  constructor() {
    // ============================================
    // TIMELINE STATE
    // ============================================
    this.currentYear = -4500000000; // Start at Earth's formation
    this.isPlaying = false;
    this.playbackSpeed = 1; // Multiplier
    this.playbackDirection = 1; // 1 = forward, -1 = backward
    
    // ============================================
    // MAP STATE
    // ============================================
    this.mapMode = '3d'; // '3d' or '2d'
    this.mapProjection = 'orthographic'; // D3 projection type
    this.mapRotation = { lambda: 0, phi: 0, gamma: 0 }; // 3D rotation
    this.mapZoom = 1;
    this.mapCenter = { lat: 0, lng: 0 };
    
    // ============================================
    // VIEW STATE
    // ============================================
    this.activePanel = 'timeline'; // 'timeline', 'info', 'legend'
    this.selectedEvent = null; // Currently selected event
    this.selectedCivilization = null; // Currently selected civilization
    this.hoveredElement = null; // Mouse hover target
    
    // ============================================
    // FILTER STATE
    // ============================================
    this.filters = {
      showGeological: true,
      showCivilizations: true,
      showModern: true,
      eventTypes: {
        catastrophic: true,
        biological: true,
        geological: true,
        political: true,
        cultural: true,
        technological: true
      },
      regions: {
        africa: true,
        mediterranean: true,
        middleEast: true,
        southAsia: true,
        eastAsia: true,
        southeastAsia: true,
        europe: true,
        americas: true,
        oceania: true,
        centralAsia: true
      }
    };
    
    // ============================================
    // UI STATE
    // ============================================
    this.ui = {
      timelineVisible: true,
      legendVisible: true,
      infoPanelVisible: false,
      searchOpen: false,
      aboutOpen: false,
      settingsOpen: false,
      loadingComplete: false,
      isMobile: GeoUtils.isMobile()
    };
    
    // ============================================
    // SETTINGS
    // ============================================
    this.settings = {
      autoplay: false,
      soundEnabled: true,
      particlesEnabled: true,
      animationsEnabled: true,
      reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
      language: 'en',
      theme: 'dark',
      showTooltips: true,
      showEventDots: true,
      showTradeRoutes: true,
      showMigrations: true
    };
    
    // ============================================
    // EVENT LISTENERS
    // ============================================
    this.listeners = {
      yearChange: [],
      mapUpdate: [],
      selectionChange: [],
      filterChange: [],
      uiChange: [],
      settingsChange: []
    };
    
    // ============================================
    // HISTORY (for undo/redo)
    // ============================================
    this.history = {
      past: [],
      future: []
    };
    
    // Load saved settings
    this.loadSettings();
    
    // Initialize
    this.init();
  }
  
  // ============================================
  // INITIALIZATION
  // ============================================
  
  init() {
    // Listen for reduced motion preference changes
    window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (e) => {
      this.setSetting('reducedMotion', e.matches);
    });
    
    // Listen for window resize
    window.addEventListener('resize', GeoUtils.debounce(() => {
      this.ui.isMobile = GeoUtils.isMobile();
      this.emit('uiChange', { isMobile: this.ui.isMobile });
    }, 250));
  }
  
  // ============================================
  // TIMELINE METHODS
  // ============================================
  
  /**
   * Set current year and notify listeners
   * @param {number} year 
   * @param {boolean} addToHistory - Save to undo history
   */
  setYear(year, addToHistory = false) {
    if (!GeoUtils.isValidYear(year)) {
      console.warn('Invalid year:', year);
      return;
    }
    
    const oldYear = this.currentYear;
    
    if (addToHistory) {
      this.addToHistory({ currentYear: oldYear });
    }
    
    this.currentYear = year;
    this.emit('yearChange', { 
      year, 
      oldYear,
      era: GeoUtils.getEra(year)
    });
  }
  
  /**
   * Jump to specific year (with animation)
   * @param {number} year 
   */
  jumpToYear(year) {
    this.setYear(year, true);
  }
  
  /**
   * Start timeline playback
   * @param {number} speed - Playback speed multiplier
   */
  play(speed = 1) {
    this.isPlaying = true;
    this.playbackSpeed = speed;
    this.emit('yearChange', { playing: true, speed });
  }
  
  /**
   * Pause timeline playback
   */
  pause() {
    this.isPlaying = false;
    this.emit('yearChange', { playing: false });
  }
  
  /**
   * Toggle play/pause
   */
  togglePlay() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }
  
  /**
   * Set playback speed
   * @param {number} speed 
   */
  setSpeed(speed) {
    this.playbackSpeed = speed;
    this.emit('yearChange', { speed });
  }
  
  /**
   * Reverse playback direction
   */
  reverseDirection() {
    this.playbackDirection *= -1;
    this.emit('yearChange', { direction: this.playbackDirection });
  }
  
  // ============================================
  // MAP METHODS
  // ============================================
  
  /**
   * Toggle between 2D and 3D map
   */
  toggleMapMode() {
    this.mapMode = this.mapMode === '3d' ? '2d' : '3d';
    this.emit('mapUpdate', { mode: this.mapMode });
  }
  
  /**
   * Set map projection (for 2D mode)
   * @param {string} projection - D3 projection name
   */
  setProjection(projection) {
    this.mapProjection = projection;
    this.emit('mapUpdate', { projection });
  }
  
  /**
   * Rotate 3D globe
   * @param {object} rotation - { lambda, phi, gamma }
   */
  rotateMap(rotation) {
    this.mapRotation = { ...this.mapRotation, ...rotation };
    this.emit('mapUpdate', { rotation: this.mapRotation });
  }
  
  /**
   * Set map zoom level
   * @param {number} zoom 
   */
  setZoom(zoom) {
    this.mapZoom = GeoUtils.clamp(zoom, 0.5, 10);
    this.emit('mapUpdate', { zoom: this.mapZoom });
  }
  
  /**
   * Center map on coordinates
   * @param {number} lat 
   * @param {number} lng 
   */
  centerMap(lat, lng) {
    if (GeoUtils.isValidCoordinates(lat, lng)) {
      this.mapCenter = { lat, lng };
      this.emit('mapUpdate', { center: this.mapCenter });
    }
  }
  
  // ============================================
  // SELECTION METHODS
  // ============================================
  
  /**
   * Select an event
   * @param {object} event 
   */
  selectEvent(event) {
    this.selectedEvent = event;
    this.selectedCivilization = null; // Deselect civilization
    this.ui.infoPanelVisible = true;
    
    this.emit('selectionChange', { 
      type: 'event', 
      data: event 
    });
    this.emit('uiChange', { infoPanelVisible: true });
  }
  
  /**
   * Select a civilization
   * @param {object} civilization 
   */
  selectCivilization(civilization) {
    this.selectedCivilization = civilization;
    this.selectedEvent = null; // Deselect event
    this.ui.infoPanelVisible = true;
    
    this.emit('selectionChange', { 
      type: 'civilization', 
      data: civilization 
    });
    this.emit('uiChange', { infoPanelVisible: true });
  }
  
  /**
   * Clear all selections
   */
  clearSelection() {
    this.selectedEvent = null;
    this.selectedCivilization = null;
    
    this.emit('selectionChange', { 
      type: 'none', 
      data: null 
    });
  }
  
  /**
   * Set hovered element (for tooltips)
   * @param {object} element 
   */
  setHover(element) {
    this.hoveredElement = element;
  }
  
  /**
   * Clear hover
   */
  clearHover() {
    this.hoveredElement = null;
  }
  
  // ============================================
  // FILTER METHODS
  // ============================================
  
  /**
   * Toggle event type filter
   * @param {string} eventType 
   */
  toggleEventType(eventType) {
    if (this.filters.eventTypes.hasOwnProperty(eventType)) {
      this.filters.eventTypes[eventType] = !this.filters.eventTypes[eventType];
      this.emit('filterChange', { eventTypes: this.filters.eventTypes });
    }
  }
  
  /**
   * Toggle region filter
   * @param {string} region 
   */
  toggleRegion(region) {
    if (this.filters.regions.hasOwnProperty(region)) {
      this.filters.regions[region] = !this.filters.regions[region];
      this.emit('filterChange', { regions: this.filters.regions });
    }
  }
  
  /**
   * Toggle geological events
   */
  toggleGeological() {
    this.filters.showGeological = !this.filters.showGeological;
    this.emit('filterChange', { showGeological: this.filters.showGeological });
  }
  
  /**
   * Toggle civilizations
   */
  toggleCivilizations() {
    this.filters.showCivilizations = !this.filters.showCivilizations;
    this.emit('filterChange', { showCivilizations: this.filters.showCivilizations });
  }
  
  /**
   * Toggle modern history
   */
  toggleModern() {
    this.filters.showModern = !this.filters.showModern;
    this.emit('filterChange', { showModern: this.filters.showModern });
  }
  
  /**
   * Reset all filters
   */
  resetFilters() {
    this.filters = {
      showGeological: true,
      showCivilizations: true,
      showModern: true,
      eventTypes: {
        catastrophic: true,
        biological: true,
        geological: true,
        political: true,
        cultural: true,
        technological: true
      },
      regions: {
        africa: true,
        mediterranean: true,
        middleEast: true,
        southAsia: true,
        eastAsia: true,
        southeastAsia: true,
        europe: true,
        americas: true,
        oceania: true,
        centralAsia: true
      }
    };
    
    this.emit('filterChange', this.filters);
  }
  
  // ============================================
  // UI METHODS
  // ============================================
  
  /**
   * Toggle UI panel visibility
   * @param {string} panel - Panel name
   */
  togglePanel(panel) {
    const key = `${panel}Visible`;
    if (this.ui.hasOwnProperty(key)) {
      this.ui[key] = !this.ui[key];
      this.emit('uiChange', { [key]: this.ui[key] });
    }
  }
  
  /**
   * Open modal
   * @param {string} modal - 'search', 'about', 'settings'
   */
  openModal(modal) {
    const key = `${modal}Open`;
    if (this.ui.hasOwnProperty(key)) {
      // Close other modals
      this.ui.searchOpen = false;
      this.ui.aboutOpen = false;
      this.ui.settingsOpen = false;
      
      // Open requested modal
      this.ui[key] = true;
      this.emit('uiChange', { modal, open: true });
    }
  }
  
  /**
   * Close all modals
   */
  closeModals() {
    this.ui.searchOpen = false;
    this.ui.aboutOpen = false;
    this.ui.settingsOpen = false;
    this.emit('uiChange', { modal: 'none' });
  }
  
  /**
   * Mark loading as complete
   */
  completeLoading() {
    this.ui.loadingComplete = true;
    this.emit('uiChange', { loadingComplete: true });
  }
  
  // ============================================
  // SETTINGS METHODS
  // ============================================
  
  /**
   * Update a setting
   * @param {string} key 
   * @param {*} value 
   */
  setSetting(key, value) {
    if (this.settings.hasOwnProperty(key)) {
      this.settings[key] = value;
      this.saveSettings();
      this.emit('settingsChange', { [key]: value });
    }
  }
  
  /**
   * Toggle a boolean setting
   * @param {string} key 
   */
  toggleSetting(key) {
    if (typeof this.settings[key] === 'boolean') {
      this.setSetting(key, !this.settings[key]);
    }
  }
  
  /**
   * Save settings to localStorage
   */
  saveSettings() {
    GeoUtils.saveToStorage('geotopia_settings', this.settings);
  }
  
  /**
   * Load settings from localStorage
   */
  loadSettings() {
    const saved = GeoUtils.loadFromStorage('geotopia_settings');
    if (saved) {
      this.settings = { ...this.settings, ...saved };
    }
  }
  
  /**
   * Reset settings to defaults
   */
  resetSettings() {
    this.settings = {
      autoplay: false,
      soundEnabled: true,
      particlesEnabled: true,
      animationsEnabled: true,
      reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
      language: 'en',
      theme: 'dark',
      showTooltips: true,
      showEventDots: true,
      showTradeRoutes: true,
      showMigrations: true
    };
    this.saveSettings();
    this.emit('settingsChange', this.settings);
  }
  
  // ============================================
  // HISTORY (UNDO/REDO)
  // ============================================
  
  /**
   * Add state to history
   * @param {object} state 
   */
  addToHistory(state) {
    this.history.past.push(state);
    this.history.future = []; // Clear redo stack
    
    // Limit history size
    if (this.history.past.length > 50) {
      this.history.past.shift();
    }
  }
  
  /**
   * Undo last action
   */
  undo() {
    if (this.history.past.length > 0) {
      const previousState = this.history.past.pop();
      const currentState = { currentYear: this.currentYear };
      
      this.history.future.push(currentState);
      
      // Restore previous state
      if (previousState.currentYear !== undefined) {
        this.setYear(previousState.currentYear);
      }
    }
  }
  
  /**
   * Redo last undone action
   */
  redo() {
    if (this.history.future.length > 0) {
      const nextState = this.history.future.pop();
      const currentState = { currentYear: this.currentYear };
      
      this.history.past.push(currentState);
      
      // Restore next state
      if (nextState.currentYear !== undefined) {
        this.setYear(nextState.currentYear);
      }
    }
  }
  
  // ============================================
  // EVENT SYSTEM
  // ============================================
  
  /**
   * Register event listener
   * @param {string} event - Event name
   * @param {function} callback 
   */
  on(event, callback) {
    if (this.listeners[event]) {
      this.listeners[event].push(callback);
    }
  }
  
  /**
   * Remove event listener
   * @param {string} event 
   * @param {function} callback 
   */
  off(event, callback) {
    if (this.listeners[event]) {
      this.listeners[event] = this.listeners[event].filter(cb => cb !== callback);
    }
  }
  
  /**
   * Emit event to all listeners
   * @param {string} event 
   * @param {*} data 
   */
  emit(event, data) {
    if (this.listeners[event]) {
      this.listeners[event].forEach(callback => {
        try {
          callback(data);
        } catch (e) {
          console.error(`Error in ${event} listener:`, e);
        }
      });
    }
  }
  
  // ============================================
  // GETTERS
  // ============================================
  
  /**
   * Get current state snapshot
   * @returns {object}
   */
  getState() {
    return {
      currentYear: this.currentYear,
      era: GeoUtils.getEra(this.currentYear),
      isPlaying: this.isPlaying,
      mapMode: this.mapMode,
      selectedEvent: this.selectedEvent,
      selectedCivilization: this.selectedCivilization,
      filters: this.filters,
      settings: this.settings
    };
  }
  
  /**
   * Get current era
   * @returns {object}
   */
  getCurrentEra() {
    return GeoUtils.getEra(this.currentYear);
  }
  
  /**
   * Check if event type is visible
   * @param {string} type 
   * @returns {boolean}
   */
  isEventTypeVisible(type) {
    return this.filters.eventTypes[type] !== false;
  }
  
  /**
   * Check if region is visible
   * @param {string} region 
   * @returns {boolean}
   */
  isRegionVisible(region) {
    return this.filters.regions[region] !== false;
  }
}

// Create global instance
window.state = new GeoState();
