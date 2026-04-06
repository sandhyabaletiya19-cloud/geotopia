// ============================================
// GEOTOPIA - MAIN APPLICATION
// Initializes and coordinates all systems
// ============================================

class GeotopiaApp {
  constructor() {
    this.initialized = false;
    this.loadingPhase = 0;
    this.dependencies = {
      d3: false,
      three: false,
      gsap: false,
      topojson: false
    };
    
    // References to engine instances (will be created)
    this.dataEngine = null;
    this.timelineEngine = null;
    this.mapEngine = null;
    this.animationEngine = null;
    this.uiControls = null;
    this.infoPanel = null;
    this.legend = null;
  }
  
  // ============================================
  // INITIALIZATION SEQUENCE
  // ============================================
  
  /**
   * Start the application
   */
  async init() {
    console.log('🌍 GEOTOPIA Starting...');
    
    try {
      // Phase 1: Check dependencies
      await this.checkDependencies();
      
      // Phase 2: Show loading screen
      await this.startLoadingSequence();
      
      // Phase 3: Initialize data engine
      await this.initializeDataEngine();
      
      // Phase 4: Initialize map engine
      await this.initializeMapEngine();
      
      // Phase 5: Initialize timeline engine
      await this.initializeTimelineEngine();
      
      // Phase 6: Initialize UI
      await this.initializeUI();
      
      // Phase 7: Connect event listeners
      this.connectEventListeners();
      
      // Phase 8: Load user preferences
      this.loadUserPreferences();
      
      // Phase 9: Complete loading
      await this.completeLoading();
      
      // Phase 10: Start autoplay if enabled
      if (state.settings.autoplay) {
        this.startAutoplay();
      }
      
      this.initialized = true;
      console.log('✅ GEOTOPIA Ready!');
      
    } catch (error) {
      console.error('❌ GEOTOPIA Initialization Failed:', error);
      this.showError(error);
    }
  }
  
  // ============================================
  // DEPENDENCY CHECKING
  // ============================================
  
  /**
   * Verify all required libraries are loaded
   */
  async checkDependencies() {
    console.log('Checking dependencies...');
    
    // Check D3.js
    if (typeof d3 !== 'undefined') {
      this.dependencies.d3 = true;
      console.log('✓ D3.js loaded');
    } else {
      throw new Error('D3.js not loaded');
    }
    
    // Check Three.js
    if (typeof THREE !== 'undefined') {
      this.dependencies.three = true;
      console.log('✓ Three.js loaded');
    } else {
      throw new Error('Three.js not loaded');
    }
    
    // Check GSAP
    if (typeof gsap !== 'undefined') {
      this.dependencies.gsap = true;
      console.log('✓ GSAP loaded');
    } else {
      throw new Error('GSAP not loaded');
    }
    
    // Check TopoJSON
    if (typeof topojson !== 'undefined') {
      this.dependencies.topojson = true;
      console.log('✓ TopoJSON loaded');
    } else {
      throw new Error('TopoJSON not loaded');
    }
    
    // Check WebGL support
    if (!GeoUtils.supportsWebGL()) {
      console.warn('⚠ WebGL not supported - 3D features disabled');
      state.mapMode = '2d'; // Force 2D mode
    }
    
    return true;
  }
  
  // ============================================
  // LOADING SEQUENCE
  // ============================================
  
  /**
   * Play cinematic loading animation
   */
  async startLoadingSequence() {
    console.log('Starting loading sequence...');
    
    const loadingScreen = document.getElementById('loading-screen');
    if (!loadingScreen) return;
    
    loadingScreen.style.display = 'flex';
    
    // Create animation engine instance
    // (Will be implemented in animation-engine.js)
    if (typeof LoadingSequence !== 'undefined') {
      const loader = new LoadingSequence();
      await loader.play();
    } else {
      // Fallback: simple delay
      await new Promise(resolve => setTimeout(resolve, 3000));
    }
  }
  
  /**
   * Hide loading screen and reveal app
   */
  async completeLoading() {
    console.log('Completing loading...');
    
    const loadingScreen = document.getElementById('loading-screen');
    
    // Fade out loading screen
    await gsap.to(loadingScreen, {
      opacity: 0,
      duration: 1,
      ease: 'power2.out'
    });
    
    loadingScreen.style.display = 'none';
    
    // Fade in main app
    const mainContent = document.getElementById('geotopia-app');
    await gsap.from(mainContent, {
      opacity: 0,
      duration: 1.5,
      ease: 'power2.out'
    });
    
    state.completeLoading();
  }
  
  // ============================================
  // ENGINE INITIALIZATION
  // ============================================
  
  /**
   * Initialize data engine
   */
  async initializeDataEngine() {
    console.log('Initializing data engine...');
    
    if (typeof DataEngine === 'function') {
      this.dataEngine = new DataEngine();
      await this.dataEngine.loadAll();
      console.log('✓ Data engine ready');
    } else {
      console.warn('DataEngine not loaded yet');
    }
  }
  
  /**
   * Initialize map rendering engine
   */
  async initializeMapEngine() {
    console.log('Initializing map engine...');
    
    if (typeof MapEngine === 'function') {
      this.mapEngine = new MapEngine();
      await this.mapEngine.initialize();
      console.log('✓ Map engine ready');
    } else {
      console.warn('MapEngine not loaded yet');
    }
  }
  
  /**
   * Initialize timeline engine
   */
  async initializeTimelineEngine() {
    console.log('Initializing timeline engine...');
    
    if (typeof TimelineEngine === 'function') {
      this.timelineEngine = new TimelineEngine();
      this.timelineEngine.initialize();
      console.log('✓ Timeline engine ready');
    } else {
      console.warn('TimelineEngine not loaded yet');
    }
  }
  
  /**
   * Initialize UI components
   */
  async initializeUI() {
    console.log('Initializing UI...');
    
    // Controls (play/pause, speed, etc.)
    if (typeof UIControls === 'function') {
      this.uiControls = new UIControls();
      this.uiControls.initialize();
    }
    
    // Info panel
    if (typeof InfoPanel === 'function') {
      this.infoPanel = new InfoPanel();
      this.infoPanel.initialize();
    }
    
    // Legend
    if (typeof LegendUI === 'function') {
      this.legend = new LegendUI();
      this.legend.initialize();
    }
    
    console.log('✓ UI ready');
  }
  
  // ============================================
  // EVENT LISTENERS
  // ============================================
  
  /**
   * Connect all event listeners
   */
  connectEventListeners() {
    console.log('Connecting event listeners...');
    
    // Timeline changes → Update map
    state.on('yearChange', (data) => {
      if (this.mapEngine) {
        this.mapEngine.updateYear(data.year);
      }
      if (this.infoPanel) {
        this.infoPanel.updateYear(data.year);
      }
    });
    
    // Map updates → Redraw
    state.on('mapUpdate', (data) => {
      if (this.mapEngine) {
        this.mapEngine.update(data);
      }
    });
    
    // Selection changes → Show info
    state.on('selectionChange', (data) => {
      if (this.infoPanel) {
        this.infoPanel.show(data);
      }
    });
    
    // Filter changes → Redraw map
    state.on('filterChange', (data) => {
      if (this.mapEngine) {
        this.mapEngine.applyFilters(data);
      }
    });
    
    // Settings changes → Apply
    state.on('settingsChange', (data) => {
      this.applySettings(data);
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => this.handleKeyboard(e));
    
    // Window resize
    window.addEventListener('resize', GeoUtils.debounce(() => {
      if (this.mapEngine) {
        this.mapEngine.resize();
      }
    }, 250));
    
    // Visibility change (pause when tab hidden)
    document.addEventListener('visibilitychange', () => {
      if (document.hidden && state.isPlaying) {
        state.pause();
      }
    });
  }
  
  /**
   * Handle keyboard shortcuts
   * @param {KeyboardEvent} e 
   */
  handleKeyboard(e) {
    // Ignore if typing in input
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
      return;
    }
    
    switch(e.key) {
      case ' ':
        e.preventDefault();
        state.togglePlay();
        break;
        
      case 'ArrowLeft':
        e.preventDefault();
        this.stepBackward();
        break;
        
      case 'ArrowRight':
        e.preventDefault();
        this.stepForward();
        break;
        
      case 'Escape':
        state.closeModals();
        state.clearSelection();
        break;
        
      case 'f':
        this.toggleFullscreen();
        break;
        
      case 's':
        state.openModal('search');
        break;
        
      case '?':
        state.openModal('about');
        break;
        
      case 'z':
        if (e.ctrlKey || e.metaKey) {
          e.preventDefault();
          state.undo();
        }
        break;
        
      case 'y':
        if (e.ctrlKey || e.metaKey) {
          e.preventDefault();
          state.redo();
        }
        break;
    }
  }
  
  // ============================================
  // PLAYBACK CONTROLS
  // ============================================
  
  /**
   * Step backward in time
   */
  stepBackward() {
    const currentEra = state.getCurrentEra();
    const step = this.calculateStep(currentEra);
    const newYear = state.currentYear - step;
    
    if (newYear >= -4500000000) {
      state.setYear(newYear, true);
    }
  }
  
  /**
   * Step forward in time
   */
  stepForward() {
    const currentEra = state.getCurrentEra();
    const step = this.calculateStep(currentEra);
    const newYear = state.currentYear + step;
    
    if (newYear <= 2026) {
      state.setYear(newYear, true);
    }
  }
  
  /**
   * Calculate appropriate step size based on era
   * @param {object} era 
   * @returns {number}
   */
  calculateStep(era) {
    const absYear = Math.abs(state.currentYear);
    
    if (absYear > 1000000000) return 10000000; // 10 million years
    if (absYear > 100000000) return 1000000;   // 1 million years
    if (absYear > 10000000) return 100000;     // 100k years
    if (absYear > 1000000) return 10000;       // 10k years
    if (absYear > 10000) return 1000;          // 1k years
    if (absYear > 1000) return 100;            // 100 years
    return 10; // 10 years
  }
  
  /**
   * Start autoplay
   */
  startAutoplay() {
    state.play(1);
    
    // Animate through history
    const animate = () => {
      if (!state.isPlaying) return;
      
      const currentEra = state.getCurrentEra();
      const step = this.calculateStep(currentEra) * state.playbackSpeed;
      const newYear = state.currentYear + (step * state.playbackDirection);
      
      // Check bounds
      if (newYear > 2026) {
        state.pause();
        return;
      }
      if (newYear < -4500000000) {
        state.pause();
        return;
      }
      
      state.setYear(newYear);
      
      requestAnimationFrame(animate);
    };
    
    animate();
  }
  
  // ============================================
  // SETTINGS
  // ============================================
  
  /**
   * Load user preferences from storage
   */
  loadUserPreferences() {
    // Preferences already loaded by state.js
    // Apply any app-specific preferences here
    
    if (state.settings.theme === 'light') {
      document.body.classList.add('light-theme');
    }
    
    if (state.settings.reducedMotion) {
      document.body.classList.add('reduced-motion');
    }
  }
  
  /**
   * Apply settings changes
   * @param {object} data 
   */
  applySettings(data) {
    Object.keys(data).forEach(key => {
      switch(key) {
        case 'theme':
          if (data[key] === 'light') {
            document.body.classList.add('light-theme');
          } else {
            document.body.classList.remove('light-theme');
          }
          break;
          
        case 'reducedMotion':
          if (data[key]) {
            document.body.classList.add('reduced-motion');
          } else {
            document.body.classList.remove('reduced-motion');
          }
          break;
          
        case 'animationsEnabled':
          if (this.mapEngine) {
            this.mapEngine.setAnimations(data[key]);
          }
          break;
          
        case 'particlesEnabled':
          if (this.mapEngine) {
            this.mapEngine.setParticles(data[key]);
          }
          break;
      }
    });
  }
  
  // ============================================
  // UTILITIES
  // ============================================
  
  /**
   * Toggle fullscreen mode
   */
  toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }
  
  /**
   * Show error message
   * @param {Error} error 
   */
  showError(error) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.innerHTML = `
      <h2>Error Loading GEOTOPIA</h2>
      <p>${error.message}</p>
      <button onclick="location.reload()">Reload</button>
    `;
    document.body.appendChild(errorDiv);
  }
  
  /**
   * Take screenshot
   */
  takeScreenshot() {
    if (this.mapEngine && this.mapEngine.canvas) {
      const link = document.createElement('a');
      link.download = `geotopia_${state.currentYear}.png`;
      link.href = this.mapEngine.canvas.toDataURL();
      link.click();
    }
  }
  
  /**
   * Export current state as JSON
   */
  exportState() {
    const stateData = state.getState();
    const json = JSON.stringify(stateData, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.download = `geotopia_state_${Date.now()}.json`;
    link.href = url;
    link.click();
    
    URL.revokeObjectURL(url);
  }
}

// ============================================
// AUTO-START
// ============================================

// Wait for DOM to be ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startGeotopia);
} else {
  startGeotopia();
}

/**
 * Start GEOTOPIA application
 */
function startGeotopia() {
  window.geotopiaApp = new GeotopiaApp();
  window.geotopiaApp.init();
}

// Global access for debugging
window.GEOTOPIA = {
  version: '1.0.0',
  state: () => state.getState(),
  jumpTo: (year) => state.jumpToYear(year),
  play: () => state.play(),
  pause: () => state.pause(),
  screenshot: () => window.geotopiaApp.takeScreenshot(),
  export: () => window.geotopiaApp.exportState()
};

console.log('GEOTOPIA v1.0.0 loaded. Type GEOTOPIA in console for debug commands.');
