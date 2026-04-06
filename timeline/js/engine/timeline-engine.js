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
    this.progressBar = null;
    
    // State
    this.isDragging = false;
    this.isHovering = false;
    this.animationFrameId = null;
    this.isInitialized = false;
    
    // Playback
    this.lastFrameTime = 0;
    
    // Constants
    this.MIN_YEAR = -4500000000;
    this.MAX_YEAR = 2026;
    
    // Event markers
    this.markers = [];
    
    // Retry tracking
    this.markerRetryCount = 0;
    this.maxRetries = 5;
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
    this.container = document.getElementById('timeline-container') || document.querySelector('.timeline-section');
    this.track = document.getElementById('timeline-track') || document.querySelector('.timeline-track');
    this.handle = document.getElementById('timeline-handle') || document.querySelector('.timeline-handle');
    this.progressBar = document.querySelector('.timeline-progress');
    
    if (!this.track) {
      console.warn('Timeline track not found, creating...');
      this.createTimelineDOM();
    }
    
    if (!this.handle) {
      console.warn('Timeline handle not found');
      return;
    }
    
    // Setup interaction
    this.setupInteraction();
    
    // Setup era markers
    this.createEraMarkers();
    
    // Setup event markers (with retry limit)
    this.createEventMarkers();
    
    // Listen to state changes
    if (typeof state !== 'undefined') {
      state.on('yearChange', (data) => this.onYearChange(data));
    }
    
    // Initial position
    this.updateUI(typeof state !== 'undefined' ? state.currentYear : this.MIN_YEAR);
    
    this.isInitialized = true;
    console.log('✓ Timeline engine ready');
  }
  
  /**
   * Create timeline DOM if missing
   */
  createTimelineDOM() {
    const container = document.querySelector('.timeline-section') || document.getElementById('timeline-container');
    if (!container) {
      console.error('Timeline container not found');
      return;
    }
    
    // Check if timeline-wrapper exists
    let wrapper = container.querySelector('.timeline-wrapper');
    if (!wrapper) {
      wrapper = document.createElement('div');
      wrapper.className = 'timeline-wrapper';
      container.appendChild(wrapper);
    }
    
    // Create track
    this.track = document.createElement('div');
    this.track.id = 'timeline-track';
    this.track.className = 'timeline-track';
    
    // Create markers container
    const markersDiv = document.createElement('div');
    markersDiv.className = 'timeline-markers';
    markersDiv.id = 'era-markers';
    this.track.appendChild(markersDiv);
    
    // Create events container
    const eventsDiv = document.createElement('div');
    eventsDiv.className = 'timeline-events';
    eventsDiv.id = 'event-dots';
    this.track.appendChild(eventsDiv);
    
    // Create progress bar
    this.progressBar = document.createElement('div');
    this.progressBar.className = 'timeline-progress';
    this.track.appendChild(this.progressBar);
    
    // Create handle
    this.handle = document.createElement('div');
    this.handle.id = 'timeline-handle';
    this.handle.className = 'timeline-handle';
    this.handle.innerHTML = `
      <div class="handle-line"></div>
      <div class="handle-grip"></div>
    `;
    this.track.appendChild(this.handle);
    
    wrapper.appendChild(this.track);
    
    // Create labels
    const labels = document.createElement('div');
    labels.className = 'timeline-labels';
    labels.id = 'timeline-labels';
    wrapper.appendChild(labels);
    
    console.log('✓ Timeline DOM created');
  }
  
  // ============================================
  // INTERACTION SETUP
  // ============================================
  
  /**
   * Setup mouse/touch interaction
   */
  setupInteraction() {
    if (!this.handle || !this.track) return;
    
    // Mouse events for handle
    this.handle.addEventListener('mousedown', (e) => this.startDrag(e));
    this.handle.addEventListener('touchstart', (e) => this.startDrag(e), { passive: false });
    
    // Document-level events for drag
    document.addEventListener('mousemove', (e) => this.drag(e));
    document.addEventListener('touchmove', (e) => this.drag(e), { passive: false });
    
    document.addEventListener('mouseup', () => this.endDrag());
    document.addEventListener('touchend', () => this.endDrag());
    
    // Click on track to jump
    this.track.addEventListener('click', (e) => this.jumpToPosition(e));
    
    // Hover for preview
    this.track.addEventListener('mouseenter', () => this.isHovering = true);
    this.track.addEventListener('mouseleave', () => {
      this.isHovering = false;
      this.hidePreview();
    });
    this.track.addEventListener('mousemove', (e) => this.showPreview(e));
    
    // Mouse wheel for precision control
    this.track.addEventListener('wheel', (e) => this.handleWheel(e), { passive: false });
    
    console.log('✓ Timeline interaction setup');
  }
  
  /**
   * Start dragging timeline handle
   */
  startDrag(e) {
    e.preventDefault();
    e.stopPropagation();
    this.isDragging = true;
    this.handle.classList.add('dragging');
    
    // Pause playback while dragging
    if (typeof state !== 'undefined' && state.isPlaying) {
      state.pause();
    }
  }
  
  /**
   * Handle drag movement
   */
  drag(e) {
    if (!this.isDragging || !this.track) return;
    
    e.preventDefault();
    
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const rect = this.track.getBoundingClientRect();
    const position = (clientX - rect.left) / rect.width;
    const clampedPosition = Math.max(0, Math.min(1, position));
    
    const year = this.positionToYear(clampedPosition);
    
    if (typeof state !== 'undefined') {
      state.setYear(year);
    }
  }
  
  /**
   * End dragging
   */
  endDrag() {
    if (this.isDragging) {
      this.isDragging = false;
      this.handle.classList.remove('dragging');
    }
  }
  
  /**
   * Jump to clicked position
   */
  jumpToPosition(e) {
    if (!this.track) return;
    if (e.target === this.handle || e.target.closest('.timeline-handle')) return;
    
    const rect = this.track.getBoundingClientRect();
    const position = (e.clientX - rect.left) / rect.width;
    const clampedPosition = Math.max(0, Math.min(1, position));
    const year = this.positionToYear(clampedPosition);
    
    console.log('Jumping to year:', year);
    
    if (typeof state !== 'undefined') {
      state.setYear(year, true);
    }
  }
  
  /**
   * Show preview tooltip on hover
   */
  showPreview(e) {
    if (!this.isHovering || this.isDragging || !this.track) return;
    
    const rect = this.track.getBoundingClientRect();
    const position = (e.clientX - rect.left) / rect.width;
    const year = this.positionToYear(position);
    
    // Find or create preview element
    let preview = document.querySelector('.timeline-preview');
    if (!preview) {
      preview = document.createElement('div');
      preview.className = 'timeline-preview';
      preview.style.cssText = `
        position: absolute;
        bottom: 100%;
        transform: translateX(-50%);
        background: rgba(0,0,0,0.9);
        color: white;
        padding: 5px 10px;
        border-radius: 5px;
        font-size: 12px;
        white-space: nowrap;
        pointer-events: none;
        z-index: 100;
        margin-bottom: 10px;
      `;
      this.track.appendChild(preview);
    }
    
    // Update content
    const era = this.getEraName(year);
    preview.innerHTML = `
      <div class="preview-year" style="font-weight:bold;">${this.formatYear(year)}</div>
      <div class="preview-era" style="font-size:10px;color:#aaa;">${era}</div>
    `;
    
    // Position
    preview.style.left = `${position * 100}%`;
    preview.style.display = 'block';
  }
  
  /**
   * Hide preview tooltip
   */
  hidePreview() {
    const preview = document.querySelector('.timeline-preview');
    if (preview) {
      preview.style.display = 'none';
    }
  }
  
  /**
   * Handle mouse wheel for precision
   */
  handleWheel(e) {
    e.preventDefault();
    
    const delta = e.deltaY > 0 ? -1 : 1;
    const step = this.calculateStep();
    
    const currentYear = (typeof state !== 'undefined') ? state.currentYear : 0;
    const newYear = currentYear + (step * delta);
    
    if (newYear >= this.MIN_YEAR && newYear <= this.MAX_YEAR) {
      if (typeof state !== 'undefined') {
        state.setYear(newYear);
      }
    }
  }
  
  // ============================================
  // YEAR/POSITION CONVERSION
  // ============================================
  
  /**
   * Convert year to position (0-1)
   * Uses logarithmic scale for geological time
   */
  yearToPosition(year) {
    // Normalize to 0-1 range using log scale
    const minLog = Math.log10(Math.abs(this.MIN_YEAR) + 1);
    
    if (year <= 0) {
      const yearLog = Math.log10(Math.abs(year) + 1);
      return 1 - (yearLog / minLog);
    } else {
      // Linear for recent years (last bit of timeline)
      return 0.98 + (year / this.MAX_YEAR) * 0.02;
    }
  }
  
  /**
   * Convert position (0-1) to year
   */
  positionToYear(position) {
    const minLog = Math.log10(Math.abs(this.MIN_YEAR) + 1);
    
    if (position < 0.98) {
      const logYear = (1 - position) * minLog;
      return -Math.pow(10, logYear) + 1;
    } else {
      // Linear for recent years
      return ((position - 0.98) / 0.02) * this.MAX_YEAR;
    }
  }
  
  /**
   * Calculate step size based on current year
   */
  calculateStep() {
    const currentYear = (typeof state !== 'undefined') ? state.currentYear : 0;
    const absYear = Math.abs(currentYear);
    
    if (absYear > 1000000000) return 50000000;   // 50M years
    if (absYear > 100000000) return 5000000;     // 5M years
    if (absYear > 10000000) return 500000;       // 500k years
    if (absYear > 1000000) return 50000;         // 50k years
    if (absYear > 100000) return 5000;           // 5k years
    if (absYear > 10000) return 500;             // 500 years
    if (absYear > 1000) return 50;               // 50 years
    return 5;                                     // 5 years
  }
  
  // ============================================
  // ERA MARKERS
  // ============================================
  
  /**
   * Create era boundary markers
   */
  createEraMarkers() {
    const markerContainer = document.getElementById('era-markers') || document.querySelector('.timeline-markers');
    if (!markerContainer) {
      console.warn('Era marker container not found');
      return;
    }
    
    // Clear existing
    markerContainer.innerHTML = '';
    
    const eras = [
      { name: 'Hadean', start: -4500000000, end: -4000000000, color: '#ff4500' },
      { name: 'Archean', start: -4000000000, end: -2500000000, color: '#8b0000' },
      { name: 'Proterozoic', start: -2500000000, end: -541000000, color: '#4b0082' },
      { name: 'Paleozoic', start: -541000000, end: -252000000, color: '#006400' },
      { name: 'Mesozoic', start: -252000000, end: -66000000, color: '#228b22' },
      { name: 'Cenozoic', start: -66000000, end: -10000, color: '#4682b4' },
      { name: 'Human', start: -10000, end: 2026, color: '#2e8b57' }
    ];
    
    eras.forEach(era => {
      const startPos = this.yearToPosition(era.start);
      const endPos = this.yearToPosition(era.end);
      const width = Math.max(endPos - startPos, 0.01); // Minimum 1%
      
      const marker = document.createElement('div');
      marker.className = 'era-marker';
      marker.title = era.name;
      marker.style.cssText = `
        position: absolute;
        left: ${startPos * 100}%;
        width: ${width * 100}%;
        height: 100%;
        background: ${era.color};
        opacity: 0.7;
      `;
      
      markerContainer.appendChild(marker);
    });
    
    // Create labels
    this.createEraLabels();
    
    console.log('✓ Era markers created');
  }
  
  /**
   * Create era labels
   */
  createEraLabels() {
    const labelsContainer = document.getElementById('timeline-labels') || document.querySelector('.timeline-labels');
    if (!labelsContainer) return;
    
    // Clear existing
    labelsContainer.innerHTML = '';
    
    const labels = [
      { year: -4500000000, text: '4.5 BYA' },
      { year: -2500000000, text: '2.5 BYA' },
      { year: -541000000, text: '541 MYA' },
      { year: -66000000, text: '66 MYA' },
      { year: -10000, text: '10K BCE' },
      { year: 0, text: '0' },
      { year: 2000, text: 'Now' }
    ];
    
    labels.forEach(label => {
      const pos = this.yearToPosition(label.year);
      
      const el = document.createElement('span');
      el.className = 'timeline-label';
      el.textContent = label.text;
      el.style.cssText = `
        position: absolute;
        left: ${pos * 100}%;
        transform: translateX(-50%);
        font-size: 10px;
        color: #888;
        white-space: nowrap;
      `;
      
      labelsContainer.appendChild(el);
    });
  }
  
  /**
   * Create event markers
   */
  createEventMarkers() {
    const eventsContainer = document.getElementById('event-dots') || document.querySelector('.timeline-events');
    if (!eventsContainer) {
      console.warn('Events container not found');
      return;
    }
    
    // Check if GEOTOPIA_DATA is available
    if (typeof GEOTOPIA_DATA === 'undefined' || !GEOTOPIA_DATA.timeline) {
      this.markerRetryCount++;
      
      if (this.markerRetryCount <= this.maxRetries) {
        console.log(`GEOTOPIA_DATA not available yet, retry ${this.markerRetryCount}/${this.maxRetries}...`);
        setTimeout(() => this.createEventMarkers(), 1000);
      } else {
        console.warn('GEOTOPIA_DATA not available after max retries, skipping event markers');
      }
      return;
    }
    
    // Clear existing
    eventsContainer.innerHTML = '';
    
    // Get major events (limit to prevent performance issues)
    const events = GEOTOPIA_DATA.timeline.slice(0, 200);
    
    events.forEach(event => {
      if (!event.year) return;
      
      const position = this.yearToPosition(event.year);
      
      // Event type colors
      const typeColors = {
        'geological': '#ff6600',
        'biological': '#00ff00',
        'catastrophic': '#ff0000',
        'cultural': '#ffff00',
        'political': '#ff00ff',
        'technological': '#00ffff'
      };
      
      const color = typeColors[event.type] || '#ffffff';
      
      const marker = document.createElement('div');
      marker.className = `event-dot event-${event.type || 'unknown'}`;
      marker.title = `${event.name || event.event || 'Event'} (${this.formatYear(event.year)})`;
      marker.style.cssText = `
        position: absolute;
        left: ${position * 100}%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 6px;
        height: 6px;
        background: ${color};
        border-radius: 50%;
        cursor: pointer;
        transition: transform 0.2s;
      `;
      
      marker.addEventListener('click', (e) => {
        e.stopPropagation();
        if (typeof state !== 'undefined') {
          state.setYear(event.year, true);
          state.selectEvent(event);
        }
      });
      
      eventsContainer.appendChild(marker);
      this.markers.push({ element: marker, event });
    });
    
    console.log(`✓ Created ${this.markers.length} event markers`);
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
  animate() {
    if (typeof state === 'undefined' || !state.isPlaying) {
      this.animationFrameId = null;
      return;
    }
    
    const currentTime = performance.now();
    const deltaTime = currentTime - this.lastFrameTime;
    this.lastFrameTime = currentTime;
    
    // Calculate year increment based on speed and current position
    const speed = state.playbackSpeed || 1;
    const direction = state.playbackDirection || 1;
    const step = this.calculateStep() * speed * direction * (deltaTime / 1000);
    
    // Update year
    let newYear = state.currentYear + step;
    
    // Check bounds
    if (newYear > this.MAX_YEAR) {
      newYear = this.MAX_YEAR;
      state.pause();
    } else if (newYear < this.MIN_YEAR) {
      newYear = this.MIN_YEAR;
      state.pause();
    }
    
    state.setYear(newYear);
    
    this.animationFrameId = requestAnimationFrame(() => this.animate());
  }
  
  /**
   * Play timeline
   */
  play() {
    if (typeof state !== 'undefined') {
      state.isPlaying = true;
      this.startPlayback();
    }
  }
  
  /**
   * Pause timeline
   */
  pause() {
    if (typeof state !== 'undefined') {
      state.isPlaying = false;
    }
    this.stopPlayback();
  }
  
  /**
   * Step backward
   */
  stepBack() {
    if (typeof state === 'undefined') return;
    
    const step = this.calculateStep();
    const newYear = state.currentYear - step;
    
    if (newYear >= this.MIN_YEAR) {
      state.setYear(newYear, true);
    }
  }
  
  /**
   * Step forward
   */
  stepForward() {
    if (typeof state === 'undefined') return;
    
    const step = this.calculateStep();
    const newYear = state.currentYear + step;
    
    if (newYear <= this.MAX_YEAR) {
      state.setYear(newYear, true);
    }
  }
  
  /**
   * Go to specific year
   */
  goToYear(year) {
    if (typeof state !== 'undefined') {
      state.setYear(year, true);
    }
  }
  
  /**
   * Set playback speed
   */
  setSpeed(speed) {
    if (typeof state !== 'undefined') {
      state.playbackSpeed = speed;
    }
  }
  
  // ============================================
  // UI UPDATES
  // ============================================
  
  /**
   * Handle year change from state
   */
  onYearChange(data) {
    this.updateUI(data.year);
  }
  
  /**
   * Update timeline UI
   */
  updateUI(year) {
    if (!this.handle) return;
    
    // Update handle position
    const position = this.yearToPosition(year);
    this.handle.style.left = `${position * 100}%`;
    
    // Update progress bar
    if (this.progressBar) {
      this.progressBar.style.width = `${position * 100}%`;
    }
    
    // Update year display
    const yearDisplay = document.getElementById('current-year-display');
    if (yearDisplay) {
      yearDisplay.textContent = this.formatYear(year);
    }
    
    // Update era display
    const eraDisplay = document.getElementById('current-era');
    if (eraDisplay) {
      const era = this.getEraName(year);
      eraDisplay.textContent = era;
    }
  }
  
  /**
   * Render timeline (alias for update)
   */
  render() {
    if (typeof state !== 'undefined') {
      this.updateUI(state.currentYear);
    }
  }
  
  /**
   * Update (alias)
   */
  update() {
    this.render();
  }
  
  // ============================================
  // UTILITIES
  // ============================================
  
  /**
   * Format year for display
   */
  formatYear(year) {
    const absYear = Math.abs(year);
    
    if (absYear >= 1000000000) {
      return (absYear / 1000000000).toFixed(1) + ' BYA';
    } else if (absYear >= 1000000) {
      return (absYear / 1000000).toFixed(1) + ' MYA';
    } else if (absYear >= 10000 && year < 0) {
      return Math.round(absYear / 1000) + 'K BCE';
    } else if (year < 0) {
      return absYear.toLocaleString() + ' BCE';
    } else {
      return year.toLocaleString() + ' CE';
    }
  }
  
  /**
   * Get era name for year
   */
  getEraName(year) {
    if (year < -4000000000) return 'HADEAN EON';
    if (year < -2500000000) return 'ARCHEAN EON';
    if (year < -541000000) return 'PROTEROZOIC EON';
    if (year < -252000000) return 'PALEOZOIC ERA';
    if (year < -66000000) return 'MESOZOIC ERA';
    if (year < -10000) return 'CENOZOIC ERA';
    if (year < -3000) return 'PREHISTORIC';
    if (year < 500) return 'ANCIENT ERA';
    if (year < 1500) return 'MEDIEVAL ERA';
    if (year < 1900) return 'MODERN ERA';
    return 'CONTEMPORARY';
  }
  
  /**
   * Resize timeline
   */
  resize() {
    if (typeof state !== 'undefined') {
      this.updateUI(state.currentYear);
    }
  }
  
  /**
   * Clean up
   */
  destroy() {
    this.stopPlayback();
    this.markers = [];
  }
}

// Make TimelineEngine available globally
window.TimelineEngine = TimelineEngine;

console.log('⏱️ Timeline Engine module loaded');
