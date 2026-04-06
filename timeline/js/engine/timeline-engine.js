// ============================================
// GEOTOPIA TIMELINE ENGINE
// Controls timeline playback and scrubbing
// ============================================

class TimelineEngine {
  constructor() {
    // DOM elements
    this.container = null;
    this.track = null;
    this.handle = null;
    this.yearLabel = null;
    this.eraLabel = null;
    this.progressBar = null;
    
    // State
    this.isDragging = false;
    this.isHovering = false;
    this.animationFrameId = null;
    
    // Playback
    this.lastFrameTime = 0;
    this.accumulatedTime = 0;
    
    // Constants
    this.MIN_YEAR = -4500000000;
    this.MAX_YEAR = 2026;
    
    // Event markers
    this.markers = [];
    this.visibleMarkers = [];
  }
  
  // ============================================
  // INITIALIZATION
  // ============================================
  
  /**
   * Initialize timeline UI
   */
  initialize() {
    console.log('Initializing timeline engine...');
    
    // Get DOM elements
    this.container = document.getElementById('timeline');
    this.track = document.querySelector('.timeline-track');
    this.handle = document.querySelector('.timeline-handle');
    this.yearLabel = document.querySelector('.timeline-year');
    this.eraLabel = document.querySelector('.timeline-era');
    this.progressBar = document.querySelector('.timeline-progress');
    
    if (!this.track || !this.handle) {
      console.error('Timeline elements not found');
      return;
    }
    
    // Setup interaction
    this.setupInteraction();
    
    // Setup era markers
    this.createEraMarkers();
    
    // Setup event markers
    this.createEventMarkers();
    
    // Listen to state changes
    state.on('yearChange', (data) => this.onYearChange(data));
    
    // Initial position
    this.updateUI(state.currentYear);
    
    console.log('✓ Timeline engine ready');
  }
  
  // ============================================
  // INTERACTION SETUP
  // ============================================
  
  /**
   * Setup mouse/touch interaction
   */
  setupInteraction() {
    // Mouse/Touch events
    this.handle.addEventListener('mousedown', (e) => this.startDrag(e));
    this.handle.addEventListener('touchstart', (e) => this.startDrag(e), { passive: false });
    
    document.addEventListener('mousemove', (e) => this.drag(e));
    document.addEventListener('touchmove', (e) => this.drag(e), { passive: false });
    
    document.addEventListener('mouseup', () => this.endDrag());
    document.addEventListener('touchend', () => this.endDrag());
    
    // Click on track to jump
    this.track.addEventListener('click', (e) => this.jumpToPosition(e));
    
    // Hover for preview
    this.track.addEventListener('mouseenter', () => this.isHovering = true);
    this.track.addEventListener('mouseleave', () => this.isHovering = false);
    this.track.addEventListener('mousemove', (e) => this.showPreview(e));
    
    // Mouse wheel for precision control
    this.track.addEventListener('wheel', (e) => this.handleWheel(e), { passive: false });
  }
  
  /**
   * Start dragging timeline handle
   */
  startDrag(e) {
    e.preventDefault();
    this.isDragging = true;
    this.handle.classList.add('dragging');
    state.pause(); // Pause playback while dragging
  }
  
  /**
   * Handle drag movement
   */
  drag(e) {
    if (!this.isDragging) return;
    
    e.preventDefault();
    
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const rect = this.track.getBoundingClientRect();
    const position = (clientX - rect.left) / rect.width;
    const clampedPosition = GeoUtils.clamp(position, 0, 1);
    
    const year = GeoUtils.positionToYear(clampedPosition);
    state.setYear(year);
  }
  
  /**
   * End dragging
   */
  endDrag() {
    if (this.isDragging) {
      this.isDragging = false;
      this.handle.classList.remove('dragging');
      state.addToHistory({ currentYear: state.currentYear });
    }
  }
  
  /**
   * Jump to clicked position
   */
  jumpToPosition(e) {
    if (e.target === this.handle) return; // Don't jump if clicking handle
    
    const rect = this.track.getBoundingClientRect();
    const position = (e.clientX - rect.left) / rect.width;
    const clampedPosition = GeoUtils.clamp(position, 0, 1);
    const year = GeoUtils.positionToYear(clampedPosition);
    
    state.jumpToYear(year);
  }
  
  /**
   * Show preview tooltip on hover
   */
  showPreview(e) {
    if (!this.isHovering || this.isDragging) return;
    
    const rect = this.track.getBoundingClientRect();
    const position = (e.clientX - rect.left) / rect.width;
    const year = GeoUtils.positionToYear(position);
    
    // Find or create preview element
    let preview = document.querySelector('.timeline-preview');
    if (!preview) {
      preview = document.createElement('div');
      preview.className = 'timeline-preview';
      this.track.appendChild(preview);
    }
    
    // Update content
    const era = GeoUtils.getEra(year);
    preview.innerHTML = `
      <div class="preview-year">${GeoUtils.formatYear(year)}</div>
      <div class="preview-era">${era.name}</div>
    `;
    
    // Position
    preview.style.left = `${position * 100}%`;
    preview.style.display = 'block';
  }
  
  /**
   * Handle mouse wheel for precision
   */
  handleWheel(e) {
    e.preventDefault();
    
    const delta = e.deltaY > 0 ? -1 : 1;
    const currentEra = state.getCurrentEra();
    
    // Calculate step based on current era
    let step;
    const absYear = Math.abs(state.currentYear);
    
    if (absYear > 1000000000) step = 10000000;      // 10M years
    else if (absYear > 100000000) step = 1000000;   // 1M years
    else if (absYear > 10000000) step = 100000;     // 100k years
    else if (absYear > 1000000) step = 10000;       // 10k years
    else if (absYear > 10000) step = 1000;          // 1k years
    else if (absYear > 1000) step = 100;            // 100 years
    else step = 10;                                 // 10 years
    
    const newYear = state.currentYear + (step * delta);
    
    if (newYear >= this.MIN_YEAR && newYear <= this.MAX_YEAR) {
      state.setYear(newYear);
    }
  }
  
  // ============================================
  // ERA MARKERS
  // ============================================
  
  /**
   * Create era boundary markers
   */
  createEraMarkers() {
    const eras = [
      { name: 'Hadean', start: -4500000000, end: -4000000000 },
      { name: 'Archean', start: -4000000000, end: -2500000000 },
      { name: 'Proterozoic', start: -2500000000, end: -541000000 },
      { name: 'Paleozoic', start: -541000000, end: -252000000 },
      { name: 'Mesozoic', start: -252000000, end: -66000000 },
      { name: 'Cenozoic', start: -66000000, end: 2026 }
    ];
    
    const markerContainer = document.querySelector('.timeline-markers');
    if (!markerContainer) return;
    
    eras.forEach(era => {
      const startPos = GeoUtils.yearToPosition(era.start);
      const endPos = GeoUtils.yearToPosition(era.end);
      
      // Create era label
      const label = document.createElement('div');
      label.className = 'era-marker';
      label.textContent = era.name;
      label.style.left = `${startPos * 100}%`;
      label.style.width = `${(endPos - startPos) * 100}%`;
      
      markerContainer.appendChild(label);
    });
  }
  
  /**
   * Create event markers
   */
  createEventMarkers() {
    if (typeof GEOTOPIA_DATA === 'undefined') {
      // Retry when data is loaded
      setTimeout(() => this.createEventMarkers(), 1000);
      return;
    }
    
    const markers = GEOTOPIA_DATA.getEventsInRange(this.MIN_YEAR, this.MAX_YEAR);
    const markerContainer = document.querySelector('.timeline-events');
    if (!markerContainer) return;
    
    markers.forEach(event => {
      const position = GeoUtils.yearToPosition(event.year);
      
      const marker = document.createElement('div');
      marker.className = `event-dot event-${event.type}`;
      marker.style.left = `${position * 100}%`;
      marker.title = `${event.name} (${GeoUtils.formatYear(event.year)})`;
      
      marker.addEventListener('click', () => {
        state.jumpToYear(event.year);
        state.selectEvent(event);
      });
      
      markerContainer.appendChild(marker);
      this.markers.push({ element: marker, event });
    });
  }
  
  // ============================================
  // PLAYBACK
  // ============================================
  
  /**
   * Start timeline animation loop
   */
  startPlayback() {
    if (this.animationFrameId) return;
    
    this.lastFrameTime = performance.now();
    this.animate();
  }
  
  /**
   * Stop timeline animation
   */
  stopPlayback() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
  }
  
  /**
   * Animation loop
   */
  /**
 * Step back one increment
 */
stepBack() {
  const step = this.calculateStep();
  const newYear = state.currentYear - step;
  if (newYear >= this.MIN_YEAR) {
    state.setYear(newYear, true);
  }
}

/**
 * Step forward one increment
 */
stepForward() {
  const step = this.calculateStep();
  const newYear = state.currentYear + step;
  if (newYear <= this.MAX_YEAR) {
    state.setYear(newYear, true);
  }
}

/**
 * Calculate step size based on current year
 */
calculateStep() {
  const absYear = Math.abs(state.currentYear);
  
  if (absYear > 1000000000) return 50000000;   // 50M years
  if (absYear > 100000000) return 5000000;     // 5M years
  if (absYear > 10000000) return 500000;       // 500k years
  if (absYear > 1000000) return 50000;         // 50k years
  if (absYear > 100000) return 5000;           // 5k years
  if (absYear > 10000) return 500;             // 500 years
  if (absYear > 1000) return 50;               // 50 years
  return 5;                                     // 5 years
}

/**
 * Start timeline playback
 */
play() {
  state.play();
  this.startPlayback();
}

/**
 * Pause timeline playback
 */
pause() {
  state.pause();
  this.stopPlayback();
}

/**
 * Set playback speed
 */
setSpeed(speed) {
  state.setSpeed(speed);
}

/**
 * Go to specific year
 */
goToYear(year) {
  state.jumpToYear(year);
}
  animate() {
    const currentTime = performance.now();
    const deltaTime = currentTime - this.lastFrameTime;
    this.lastFrameTime = currentTime;
    
    if (state.isPlaying) {
      // Calculate year increment based on speed and era
      const baseSpeed = 1000000; // 1M years per second at speed 1x
      const speed = baseSpeed * state.playbackSpeed;
      const yearDelta = (speed * deltaTime / 1000) * state.playbackDirection;
      
      // Update year
      let newYear = state.currentYear + yearDelta;
      
      // Check bounds
      if (newYear > this.MAX_YEAR) {
        newYear = this.MAX_YEAR;
        state.pause();
      } else if (newYear < this.MIN_YEAR) {
        newYear = this.MIN_YEAR;
        state.pause();
      }
      
      state.setYear(newYear);
    }
    
    this.animationFrameId = requestAnimationFrame(() => this.animate());
  }
  
  // ============================================
  // UI UPDATES
  // ============================================
  
  /**
   * Handle year change from state
   */
  onYearChange(data) {
    this.updateUI(data.year);
    
    // Start/stop animation loop
    if (data.playing !== undefined) {
      if (data.playing) {
        this.startPlayback();
      } else {
        this.stopPlayback();
      }
    }
  }
  
  /**
   * Update timeline UI
   */
  updateUI(year) {
    // Update handle position
    const position = GeoUtils.yearToPosition(year);
    
    if (this.handle) {
      this.handle.style.left = `${position * 100}%`;
    }
    
    if (this.progressBar) {
      this.progressBar.style.width = `${position * 100}%`;
    }
    
    // Update labels
    if (this.yearLabel) {
      this.yearLabel.textContent = GeoUtils.formatYear(year);
    }
    
    const era = GeoUtils.getEra(year);
    if (this.eraLabel) {
      this.eraLabel.textContent = era.name;
      this.eraLabel.style.color = era.color;
    }
    
    // Update visible markers
    this.updateVisibleMarkers(year);
  }
  
  /**
   * Update which event markers are visible
   */
  updateVisibleMarkers(year) {
    const tolerance = this.calculateMarkerTolerance(year);
    
    this.markers.forEach(({ element, event }) => {
      const distance = Math.abs(event.year - year);
      const visible = distance <= tolerance;
      
      element.style.opacity = visible ? '1' : '0.3';
      element.style.transform = visible ? 'scale(1)' : 'scale(0.5)';
    });
  }
  
  /**
   * Calculate marker visibility tolerance based on zoom level
   */
  calculateMarkerTolerance(year) {
    const absYear = Math.abs(year);
    
    if (absYear > 1000000000) return 500000000;  // 500M years
    if (absYear > 100000000) return 50000000;    // 50M years
    if (absYear > 10000000) return 5000000;      // 5M years
    if (absYear > 1000000) return 500000;        // 500k years
    if (absYear > 100000) return 50000;          // 50k years
    if (absYear > 10000) return 5000;            // 5k years
    return 1000;                                 // 1k years
  }
  
  // ============================================
  // SPECIAL EFFECTS
  // ============================================
  
  /**
   * Pulse animation on handle
   */
  pulseHandle() {
    if (!this.handle) return;
    
    gsap.to(this.handle, {
      scale: 1.2,
      duration: 0.3,
      yoyo: true,
      repeat: 1,
      ease: 'power2.out'
    });
  }
  
  /**
   * Flash era label on era change
   */
  flashEraLabel() {
    if (!this.eraLabel) return;
    
    gsap.fromTo(this.eraLabel,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.7)' }
    );
  }
  
  // ============================================
  // UTILITIES
  // ============================================
  
  /**
   * Resize timeline (called on window resize)
   */
  resize() {
    // Update UI
    this.updateUI(state.currentYear);
  }
  
  /**
   * Clean up
   */
  destroy() {
    this.stopPlayback();
    // Remove event listeners if needed
  }
}

// Create global instance
window.timelineEngine = null; // Will be created by app.js
