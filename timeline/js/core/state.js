// ============================================
// GEOTOPIA STATE MANAGEMENT
// Central state for the entire application
// ============================================

class GeotopiaState {
  constructor() {
    // Current state
    this.currentYear = -4500000000;
    this.isPlaying = false;
    this.playbackSpeed = 1;
    this.playbackDirection = 1;
    this.mapMode = '2d';
    
    // Selection
    this.selectedCivilization = null;
    this.selectedEvent = null;
    
    // UI state
    this.activeModal = null;
    this.isLoading = true;
    
    // Settings
    this.settings = {
      theme: 'dark',
      autoplay: false,
      reducedMotion: false,
      animationsEnabled: true,
      particlesEnabled: true
    };
    
    // Event listeners
    this.listeners = {};
    
    // Animation frame
    this.animationId = null;
    
    console.log('📊 State initialized');
  }
  
  // ============================================
  // EVENT SYSTEM
  // ============================================
  
  on(event, callback) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
  }
  
  off(event, callback) {
    if (!this.listeners[event]) return;
    this.listeners[event] = this.listeners[event].filter(cb => cb !== callback);
  }
  
  emit(event, data) {
    if (!this.listeners[event]) return;
    this.listeners[event].forEach(callback => {
      try {
        callback(data);
      } catch (error) {
        console.error(`Error in event listener for ${event}:`, error);
      }
    });
  }
  
  // ============================================
  // YEAR / TIME CONTROL
  // ============================================
  
  setYear(year, animate = false) {
    const oldYear = this.currentYear;
    this.currentYear = Math.max(-4500000000, Math.min(2026, year));
    
    this.emit('yearChange', {
      year: this.currentYear,
      oldYear: oldYear,
      animate: animate
    });
    
    // Update display
    this.updateYearDisplay();
  }
  
  jumpToYear(year) {
    this.setYear(year, true);
  }
  
  getCurrentEra() {
    const year = this.currentYear;
    
    if (year < -4000000000) return { name: 'Hadean', color: '#ff4500' };
    if (year < -2500000000) return { name: 'Archean', color: '#8b0000' };
    if (year < -541000000) return { name: 'Proterozoic', color: '#4b0082' };
    if (year < -252000000) return { name: 'Paleozoic', color: '#006400' };
    if (year < -66000000) return { name: 'Mesozoic', color: '#228b22' };
    if (year < -10000) return { name: 'Cenozoic', color: '#4682b4' };
    return { name: 'Human Era', color: '#2e8b57' };
  }
  
  updateYearDisplay() {
    const yearDisplay = document.getElementById('current-year-display');
    const eraDisplay = document.getElementById('current-era');
    
    if (yearDisplay) {
      yearDisplay.textContent = this.formatYear(this.currentYear);
    }
    
    if (eraDisplay) {
      const era = this.getCurrentEra();
      eraDisplay.textContent = era.name.toUpperCase();
      eraDisplay.style.color = era.color;
    }
  }
  
  formatYear(year) {
    if (year < -1000000000) {
      return (Math.abs(year) / 1000000000).toFixed(1) + ' BYA';
    }
    if (year < -1000000) {
      return (Math.abs(year) / 1000000).toFixed(1) + ' MYA';
    }
    if (year < -10000) {
      return Math.round(Math.abs(year) / 1000) + ',000 BCE';
    }
    if (year < 0) {
      return Math.abs(year).toLocaleString() + ' BCE';
    }
    return year.toLocaleString() + ' CE';
  }
  
  // ============================================
  // PLAYBACK CONTROL
  // ============================================
  
  play(direction = 1) {
    this.isPlaying = true;
    this.playbackDirection = direction;
    this.emit('playStateChange', { isPlaying: true, direction });
    this.startPlayback();
    this.updatePlayButton();
  }
  
  pause() {
    this.isPlaying = false;
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
    this.emit('playStateChange', { isPlaying: false });
    this.updatePlayButton();
  }
  
  togglePlay() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play(this.playbackDirection);
    }
  }
  
  startPlayback() {
    const animate = () => {
      if (!this.isPlaying) return;
      
      const step = this.calculateStep() * this.playbackSpeed * this.playbackDirection;
      const newYear = this.currentYear + step;
      
      // Check bounds
      if (newYear > 2026 || newYear < -4500000000) {
        this.pause();
        return;
      }
      
      this.setYear(newYear);
      
      this.animationId = requestAnimationFrame(animate);
    };
    
    this.animationId = requestAnimationFrame(animate);
  }
  
  calculateStep() {
    const absYear = Math.abs(this.currentYear);
    
    if (absYear > 1000000000) return 50000000;  // 50 million years
    if (absYear > 100000000) return 5000000;    // 5 million years
    if (absYear > 10000000) return 500000;      // 500k years
    if (absYear > 1000000) return 50000;        // 50k years
    if (absYear > 100000) return 5000;          // 5k years
    if (absYear > 10000) return 500;            // 500 years
    if (absYear > 1000) return 50;              // 50 years
    return 5;                                    // 5 years
  }
  
  setSpeed(speed) {
    this.playbackSpeed = speed;
    this.emit('speedChange', { speed });
  }
  
  updatePlayButton() {
    const playIcon = document.getElementById('play-icon');
    if (playIcon) {
      playIcon.textContent = this.isPlaying ? '⏸' : '▶';
    }
  }
  
  // ============================================
  // SELECTION
  // ============================================
  
  selectCivilization(civ) {
    this.selectedCivilization = civ;
    this.selectedEvent = null;
    this.emit('selectionChange', { type: 'civilization', data: civ });
  }
  
  selectEvent(event) {
    this.selectedEvent = event;
    this.selectedCivilization = null;
    this.emit('selectionChange', { type: 'event', data: event });
  }
  
  clearSelection() {
    this.selectedCivilization = null;
    this.selectedEvent = null;
    this.emit('selectionChange', { type: null, data: null });
  }
  
  // ============================================
  // MODALS
  // ============================================
  
  openModal(modalId) {
    this.closeModals();
    const modal = document.getElementById(modalId + '-modal');
    if (modal) {
      modal.classList.add('active');
      this.activeModal = modalId;
    }
  }
  
  closeModals() {
    document.querySelectorAll('.modal').forEach(modal => {
      modal.classList.remove('active');
    });
    this.activeModal = null;
  }
  
  // ============================================
  // MAP MODE
  // ============================================
  
  setMapMode(mode) {
    this.mapMode = mode;
    this.emit('mapUpdate', { mode });
  }
  
  toggleMapMode() {
    this.setMapMode(this.mapMode === '2d' ? '3d' : '2d');
  }
  
  // ============================================
  // LOADING
  // ============================================
  
  completeLoading() {
    this.isLoading = false;
    this.emit('loadingComplete', {});
  }
  
  // ============================================
  // STATE
  // ============================================
  
  getState() {
    return {
      currentYear: this.currentYear,
      isPlaying: this.isPlaying,
      playbackSpeed: this.playbackSpeed,
      mapMode: this.mapMode,
      selectedCivilization: this.selectedCivilization,
      selectedEvent: this.selectedEvent,
      settings: this.settings
    };
  }
  
  // ============================================
  // UNDO/REDO (placeholder)
  // ============================================
  
  undo() {
    console.log('Undo not implemented yet');
  }
  
  redo() {
    console.log('Redo not implemented yet');
  }
}

// Create global state instance
window.state = new GeotopiaState();

console.log('✅ State module loaded');
