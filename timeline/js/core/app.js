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
      if (typeof state !== 'undefined' && state.settings && state.settings.autoplay) {
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
    if (typeof GeoUtils !== 'undefined' && typeof GeoUtils.supportsWebGL === 'function') {
      if (!GeoUtils.supportsWebGL()) {
        console.warn('⚠ WebGL not supported - 3D features disabled');
        if (typeof state !== 'undefined') {
          state.mapMode = '2d';
        }
      }
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
    if (!loadingScreen) {
      console.warn('Loading screen element not found');
      return;
    }
    
    loadingScreen.style.display = 'flex';
    loadingScreen.style.opacity = '1';
    
    // Create animation engine instance
    if (typeof LoadingSequence === 'function') {
      try {
        const loader = new LoadingSequence();
        await loader.play();
      } catch (error) {
        console.warn('Loading sequence error:', error);
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    } else {
      // Fallback: simple delay
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }
  
  /**
   * Hide loading screen and reveal app
   */
  async completeLoading() {
    console.log('Completing loading...');
    
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('geotopia-app');
    
    console.log('Loading screen element:', loadingScreen);
    console.log('Main content element:', mainContent);
    
    // Hide loading screen
    if (loadingScreen) {
      try {
        await gsap.to(loadingScreen, {
          opacity: 0,
          duration: 0.5,
          ease: 'power2.out'
        });
      } catch (error) {
        console.warn('Loading screen animation error:', error);
      }
      loadingScreen.style.display = 'none';
      loadingScreen.style.visibility = 'hidden';
      loadingScreen.style.pointerEvents = 'none';
      loadingScreen.style.zIndex = '-1';
    }
    
    // Show main app
    if (mainContent) {
      mainContent.style.display = 'block';
      mainContent.style.visibility = 'visible';
      mainContent.style.opacity = '1';
      mainContent.style.zIndex = '1';
      console.log('✓ Main content shown');
    } else {
      console.error('ERROR: #geotopia-app element not found!');
      // Create fallback container
      this.createFallbackUI();
    }
    
    // Force map redraw after a short delay
    setTimeout(() => {
      if (this.mapEngine) {
        if (typeof this.mapEngine.resize === 'function') {
          this.mapEngine.resize();
        }
        if (typeof this.mapEngine.render === 'function') {
          this.mapEngine.render();
        }
        if (typeof this.mapEngine.drawMap === 'function') {
          this.mapEngine.drawMap();
        }
        console.log('✓ Map refreshed');
      }
      
      if (this.timelineEngine) {
        if (typeof this.timelineEngine.render === 'function') {
          this.timelineEngine.render();
        }
        if (typeof this.timelineEngine.update === 'function') {
          this.timelineEngine.update();
        }
        console.log('✓ Timeline refreshed');
      }
    }, 200);
    
    // Complete loading state
    if (typeof state !== 'undefined' && typeof state.completeLoading === 'function') {
      state.completeLoading();
    }
  }
  
  /**
   * Create fallback UI if main content doesn't exist
   */
  createFallbackUI() {
    console.log('Creating fallback UI...');
    
    const app = document.createElement('div');
    app.id = 'geotopia-app';
    app.style.cssText = 'width:100%;height:100vh;position:relative;background:#0a1628;';
    
    const mapContainer = document.createElement('div');
    mapContainer.id = 'map-container';
    mapContainer.style.cssText = 'width:100%;height:100%;position:absolute;top:0;left:0;';
    
    const mapSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    mapSvg.id = 'map-svg';
    mapSvg.style.cssText = 'width:100%;height:100%;background:#0a1628;';
    
    const timeline = document.createElement('div');
    timeline.id = 'timeline-container';
    timeline.style.cssText = 'position:absolute;bottom:0;left:0;width:100%;height:120px;background:rgba(0,0,0,0.8);';
    
    mapContainer.appendChild(mapSvg);
    app.appendChild(mapContainer);
    app.appendChild(timeline);
    document.body.appendChild(app);
    
    console.log('✓ Fallback UI created');
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
      
      // Force initial render
      setTimeout(() => {
        if (this.mapEngine) {
          if (typeof this.mapEngine.render === 'function') {
            this.mapEngine.render();
          }
          if (typeof this.mapEngine.drawMap === 'function') {
            this.mapEngine.drawMap();
          }
        }
      }, 100);
      
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
    
    // Check if state exists and has event system
    if (typeof state !== 'undefined' && typeof state.on === 'function') {
      
      // Timeline changes → Update map
      state.on('yearChange', (data) => {
        if (this.mapEngine && typeof this.mapEngine.updateYear === 'function') {
          this.mapEngine.updateYear(data.year);
        }
        if (this.infoPanel && typeof this.infoPanel.updateYear === 'function') {
          this.infoPanel.updateYear(data.year);
        }
      });
      
      // Map updates → Redraw
      state.on('mapUpdate', (data) => {
        if (this.mapEngine && typeof this.mapEngine.update === 'function') {
          this.mapEngine.update(data);
        }
      });
      
      // Selection changes → Show info
      state.on('selectionChange', (data) => {
        if (this.infoPanel && typeof this.infoPanel.show === 'function') {
          this.infoPanel.show(data);
        }
      });
      
      // Filter changes → Redraw map
      state.on('filterChange', (data) => {
        if (this.mapEngine && typeof this.mapEngine.applyFilters === 'function') {
          this.mapEngine.applyFilters(data);
        }
      });
      
      // Settings changes → Apply
      state.on('settingsChange', (data) => {
        this.applySettings(data);
      });
    }
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => this.handleKeyboard(e));
    
    // Window resize with debounce
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (this.mapEngine && typeof this.mapEngine.resize === 'function') {
          this.mapEngine.resize();
        }
      }, 250);
    });
    
    // Visibility change (pause when tab hidden)
    document.addEventListener('visibilitychange', () => {
      if (document.hidden && typeof state !== 'undefined' && state.isPlaying) {
        if (typeof state.pause === 'function') {
          state.pause();
        }
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
    
    // Check if state exists
    if (typeof state === 'undefined') {
      return;
    }
    
    switch(e.key) {
      case ' ':
        e.preventDefault();
        if (typeof state.togglePlay === 'function') {
          state.togglePlay();
        }
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
        if (typeof state.closeModals === 'function') {
          state.closeModals();
        }
        if (typeof state.clearSelection === 'function') {
          state.clearSelection();
        }
        break;
        
      case 'f':
        this.toggleFullscreen();
        break;
        
      case 's':
        if (typeof state.openModal === 'function') {
          state.openModal('search');
        }
        break;
        
      case '?':
        if (typeof state.openModal === 'function') {
          state.openModal('about');
        }
        break;
        
      case 'z':
        if (e.ctrlKey || e.metaKey) {
          e.preventDefault();
          if (typeof state.undo === 'function') {
            state.undo();
          }
        }
        break;
        
      case 'y':
        if (e.ctrlKey || e.metaKey) {
          e.preventDefault();
          if (typeof state.redo === 'function') {
            state.redo();
          }
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
    if (typeof state === 'undefined') return;
    
    const currentEra = typeof state.getCurrentEra === 'function' ? state.getCurrentEra() : null;
    const step = this.calculateStep(currentEra);
    const currentYear = state.currentYear || 2000;
    const newYear = currentYear - step;
    
    if (newYear >= -4500000000) {
      if (typeof state.setYear === 'function') {
        state.setYear(newYear, true);
      }
    }
  }
  
  /**
   * Step forward in time
   */
  stepForward() {
    if (typeof state === 'undefined') return;
    
    const currentEra = typeof state.getCurrentEra === 'function' ? state.getCurrentEra() : null;
    const step = this.calculateStep(currentEra);
    const currentYear = state.currentYear || 2000;
    const newYear = currentYear + step;
    
    if (newYear <= 2026) {
      if (typeof state.setYear === 'function') {
        state.setYear(newYear, true);
      }
    }
  }
  
  /**
   * Calculate appropriate step size based on era
   * @param {object} era 
   * @returns {number}
   */
  calculateStep(era) {
    const currentYear = (typeof state !== 'undefined' && state.currentYear) ? state.currentYear : 2000;
    const absYear = Math.abs(currentYear);
    
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
    if (typeof state === 'undefined') return;
    if (typeof state.play !== 'function') return;
    
    state.play(1);
    
    // Animate through history
    const animate = () => {
      if (!state.isPlaying) return;
      
      const currentEra = typeof state.getCurrentEra === 'function' ? state.getCurrentEra() : null;
      const playbackSpeed = state.playbackSpeed || 1;
      const playbackDirection = state.playbackDirection || 1;
      const step = this.calculateStep(currentEra) * playbackSpeed;
      const currentYear = state.currentYear || 2000;
      const newYear = currentYear + (step * playbackDirection);
      
      // Check bounds
      if (newYear > 2026) {
        if (typeof state.pause === 'function') {
          state.pause();
        }
        return;
      }
      if (newYear < -4500000000) {
        if (typeof state.pause === 'function') {
          state.pause();
        }
        return;
      }
      
      if (typeof state.setYear === 'function') {
        state.setYear(newYear);
      }
      
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
    if (typeof state === 'undefined' || !state.settings) return;
    
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
    if (!data) return;
    
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
          if (this.mapEngine && typeof this.mapEngine.setAnimations === 'function') {
            this.mapEngine.setAnimations(data[key]);
          }
          break;
          
        case 'particlesEnabled':
          if (this.mapEngine && typeof this.mapEngine.setParticles === 'function') {
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
      document.documentElement.requestFullscreen().catch(err => {
        console.warn('Fullscreen error:', err);
      });
    } else {
      document.exitFullscreen().catch(err => {
        console.warn('Exit fullscreen error:', err);
      });
    }
  }
  
  /**
   * Show error message
   * @param {Error} error 
   */
  showError(error) {
    // Hide loading screen first
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
      loadingScreen.style.display = 'none';
    }
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1a1a2e;color:white;padding:30px;border-radius:10px;z-index:99999;text-align:center;border:2px solid #ff4444;max-width:400px;';
    errorDiv.innerHTML = `
      <h2 style="color:#ff4444;margin-bottom:15px;">Error Loading GEOTOPIA</h2>
      <p style="margin-bottom:20px;">${error.message}</p>
      <button onclick="location.reload()" style="padding:12px 24px;background:#4CAF50;color:white;border:none;border-radius:5px;cursor:pointer;font-size:16px;">Reload</button>
    `;
    document.body.appendChild(errorDiv);
  }
  
  /**
   * Take screenshot
   */
  takeScreenshot() {
    if (this.mapEngine && this.mapEngine.canvas) {
      const currentYear = (typeof state !== 'undefined' && state.currentYear) ? state.currentYear : 'unknown';
      const link = document.createElement('a');
      link.download = `geotopia_${currentYear}.png`;
      link.href = this.mapEngine.canvas.toDataURL();
      link.click();
    }
  }
  
  /**
   * Export current state as JSON
   */
  exportState() {
    if (typeof state === 'undefined' || typeof state.getState !== 'function') {
      console.warn('State not available for export');
      return;
    }
    
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
  state: () => (typeof state !== 'undefined' && typeof state.getState === 'function' ? state.getState() : null),
  jumpTo: (year) => (typeof state !== 'undefined' && typeof state.jumpToYear === 'function' ? state.jumpToYear(year) : null),
  play: () => (typeof state !== 'undefined' && typeof state.play === 'function' ? state.play() : null),
  pause: () => (typeof state !== 'undefined' && typeof state.pause === 'function' ? state.pause() : null),
  screenshot: () => (window.geotopiaApp ? window.geotopiaApp.takeScreenshot() : null),
  export: () => (window.geotopiaApp ? window.geotopiaApp.exportState() : null)
};

console.log('GEOTOPIA v1.0.0 loaded. Type GEOTOPIA in console for debug commands.');
