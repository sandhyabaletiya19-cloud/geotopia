// ============================================
// GEOTOPIA FIX - Makes Everything Work
// Add this as the LAST script in your HTML
// ============================================

(function() {
  console.log('🔧 Applying fixes...');
  
  // Wait for DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFix);
  } else {
    initFix();
  }
  
  function initFix() {
    // Wait a bit for other scripts to load
    setTimeout(applyFixes, 500);
  }
  
  function applyFixes() {
    console.log('🔧 Fixing controls...');
    
    // ============================================
    // STATE FIX
    // ============================================
    if (typeof window.state === 'undefined') {
      window.state = {
        currentYear: -4500000000,
        isPlaying: false,
        playbackSpeed: 1,
        playbackDirection: 1,
        listeners: {},
        
        setYear: function(year, animate) {
          this.currentYear = Math.max(-4500000000, Math.min(2026, year));
          this.emit('yearChange', { year: this.currentYear });
          updateDisplays(this.currentYear);
        },
        
        on: function(event, callback) {
          if (!this.listeners[event]) this.listeners[event] = [];
          this.listeners[event].push(callback);
        },
        
        emit: function(event, data) {
          if (this.listeners[event]) {
            this.listeners[event].forEach(cb => cb(data));
          }
        },
        
        play: function() {
          this.isPlaying = true;
          startAnimation();
          updatePlayButton(true);
        },
        
        pause: function() {
          this.isPlaying = false;
          updatePlayButton(false);
        },
        
        togglePlay: function() {
          if (this.isPlaying) this.pause();
          else this.play();
        }
      };
    }
    
    // ============================================
    // CALCULATE STEP
    // ============================================
    function calculateStep() {
      const absYear = Math.abs(state.currentYear);
      if (absYear > 1000000000) return 50000000;
      if (absYear > 100000000) return 5000000;
      if (absYear > 10000000) return 500000;
      if (absYear > 1000000) return 50000;
      if (absYear > 100000) return 5000;
      if (absYear > 10000) return 500;
      if (absYear > 1000) return 50;
      return 5;
    }
    
    // ============================================
    // FORMAT YEAR
    // ============================================
    function formatYear(year) {
      const absYear = Math.abs(year);
      if (absYear >= 1000000000) return (absYear / 1000000000).toFixed(1) + ' BYA';
      if (absYear >= 1000000) return (absYear / 1000000).toFixed(1) + ' MYA';
      if (absYear >= 10000 && year < 0) return Math.round(absYear / 1000) + 'K BCE';
      if (year < 0) return absYear.toLocaleString() + ' BCE';
      return year.toLocaleString() + ' CE';
    }
    
    // ============================================
    // GET ERA
    // ============================================
    function getEra(year) {
      if (year < -4000000000) return { name: 'HADEAN EON', color: '#ff4500' };
      if (year < -2500000000) return { name: 'ARCHEAN EON', color: '#8b0000' };
      if (year < -541000000) return { name: 'PROTEROZOIC EON', color: '#4b0082' };
      if (year < -252000000) return { name: 'PALEOZOIC ERA', color: '#006400' };
      if (year < -66000000) return { name: 'MESOZOIC ERA', color: '#228b22' };
      if (year < -10000) return { name: 'CENOZOIC ERA', color: '#4682b4' };
      return { name: 'HUMAN ERA', color: '#2e8b57' };
    }
    
    // ============================================
    // UPDATE DISPLAYS
    // ============================================
    function updateDisplays(year) {
      // Year display
      const yearDisplay = document.getElementById('current-year-display');
      if (yearDisplay) yearDisplay.textContent = formatYear(year);
      
      // Era display
      const eraDisplay = document.getElementById('current-era');
      if (eraDisplay) {
        const era = getEra(year);
        eraDisplay.textContent = era.name;
        eraDisplay.style.color = era.color;
      }
      
      // Timeline handle
      updateTimelineHandle(year);
      
      // Map
      if (window.geotopiaApp && window.geotopiaApp.mapEngine) {
        window.geotopiaApp.mapEngine.currentYear = year;
        window.geotopiaApp.mapEngine.render();
      }
    }
    
    // ============================================
    // TIMELINE HANDLE
    // ============================================
    function yearToPosition(year) {
      const minYear = -4500000000;
      const maxYear = 2026;
      const minLog = Math.log10(Math.abs(minYear) + 1);
      
      if (year <= 0) {
        const yearLog = Math.log10(Math.abs(year) + 1);
        return 1 - (yearLog / minLog);
      } else {
        return 0.98 + (year / maxYear) * 0.02;
      }
    }
    
    function positionToYear(position) {
      const minYear = -4500000000;
      const minLog = Math.log10(Math.abs(minYear) + 1);
      
      if (position < 0.98) {
        const logYear = (1 - position) * minLog;
        return -Math.pow(10, logYear) + 1;
      } else {
        return ((position - 0.98) / 0.02) * 2026;
      }
    }
    
    function updateTimelineHandle(year) {
      const handle = document.getElementById('timeline-handle');
      if (handle) {
        const pos = yearToPosition(year);
        handle.style.left = (pos * 100) + '%';
      }
    }
    
    // ============================================
    // UPDATE PLAY BUTTON
    // ============================================
    function updatePlayButton(isPlaying) {
      const playIcon = document.getElementById('play-icon');
      if (playIcon) {
        playIcon.textContent = isPlaying ? '⏸' : '▶';
      }
    }
    
    // ============================================
    // ANIMATION
    // ============================================
    let animationId = null;
    
    function startAnimation() {
      if (animationId) cancelAnimationFrame(animationId);
      
      function animate() {
        if (!state.isPlaying) return;
        
        const step = calculateStep() * state.playbackSpeed * 0.05;
        const newYear = state.currentYear + step;
        
        if (newYear > 2026) {
          state.currentYear = 2026;
          state.pause();
          return;
        }
        
        state.currentYear = newYear;
        updateDisplays(newYear);
        
        animationId = requestAnimationFrame(animate);
      }
      
      animationId = requestAnimationFrame(animate);
    }
    
    // ============================================
    // BIND BUTTONS
    // ============================================
    
    // Play/Pause
    const btnPlayPause = document.getElementById('btn-play-pause');
    if (btnPlayPause) {
      btnPlayPause.onclick = function() {
        console.log('Play/Pause clicked');
        state.togglePlay();
      };
    }
    
    // Step Back
    const btnStepBack = document.getElementById('btn-step-back');
    if (btnStepBack) {
      btnStepBack.onclick = function() {
        console.log('Step back clicked');
        const step = calculateStep();
        const newYear = state.currentYear - step;
        if (newYear >= -4500000000) {
          state.setYear(newYear);
        }
      };
    }
    
    // Step Forward
    const btnStepForward = document.getElementById('btn-step-forward');
    if (btnStepForward) {
      btnStepForward.onclick = function() {
        console.log('Step forward clicked');
        const step = calculateStep();
        const newYear = state.currentYear + step;
        if (newYear <= 2026) {
          state.setYear(newYear);
        }
      };
    }
    
    // Era Select
    const eraSelect = document.getElementById('era-select');
    if (eraSelect) {
      eraSelect.onchange = function() {
        const year = parseInt(this.value);
        console.log('Era selected:', year);
        state.setYear(year);
      };
    }
    
    // Speed Slider
    const speedSlider = document.getElementById('speed-slider');
    const speedDisplay = document.getElementById('speed-display');
    if (speedSlider) {
      speedSlider.oninput = function() {
        state.playbackSpeed = parseInt(this.value);
        if (speedDisplay) speedDisplay.textContent = this.value + 'x';
      };
    }
    
    // Zoom In
    const btnZoomIn = document.getElementById('btn-zoom-in');
    if (btnZoomIn) {
      btnZoomIn.onclick = function() {
        console.log('Zoom in');
        if (window.geotopiaApp && window.geotopiaApp.mapEngine && window.geotopiaApp.mapEngine.projection) {
          const scale = window.geotopiaApp.mapEngine.projection.scale();
          window.geotopiaApp.mapEngine.projection.scale(scale * 1.3);
          window.geotopiaApp.mapEngine.render();
        }
      };
    }
    
    // Zoom Out
    const btnZoomOut = document.getElementById('btn-zoom-out');
    if (btnZoomOut) {
      btnZoomOut.onclick = function() {
        console.log('Zoom out');
        if (window.geotopiaApp && window.geotopiaApp.mapEngine && window.geotopiaApp.mapEngine.projection) {
          const scale = window.geotopiaApp.mapEngine.projection.scale();
          window.geotopiaApp.mapEngine.projection.scale(scale / 1.3);
          window.geotopiaApp.mapEngine.render();
        }
      };
    }
    
    // Reset View
    const btnResetView = document.getElementById('btn-reset-view');
    if (btnResetView) {
      btnResetView.onclick = function() {
        console.log('Reset view');
        if (window.geotopiaApp && window.geotopiaApp.mapEngine) {
          const me = window.geotopiaApp.mapEngine;
          if (me.projection && me.container) {
            me.projection.rotate([0, -20]);
            me.projection.scale(Math.min(me.container.clientWidth, me.container.clientHeight) / 2.5);
            me.render();
          }
        }
      };
    }
    
    // Toggle 3D
    const btnToggle3D = document.getElementById('btn-toggle-3d');
    if (btnToggle3D) {
      btnToggle3D.onclick = function() {
        console.log('Toggle 3D');
        if (window.geotopiaApp && window.geotopiaApp.mapEngine) {
          const me = window.geotopiaApp.mapEngine;
          const newMode = me.mode === '2d' ? '3d' : '2d';
          me.setMode(newMode);
          this.textContent = newMode === '3d' ? '🗺️' : '🌐';
        }
      };
    }
    
    // Search button
    const btnSearch = document.getElementById('btn-search');
    if (btnSearch) {
      btnSearch.onclick = function() {
        const modal = document.getElementById('search-modal');
        if (modal) modal.classList.add('active');
      };
    }
    
    // About button
    const btnInfo = document.getElementById('btn-info');
    if (btnInfo) {
      btnInfo.onclick = function() {
        const modal = document.getElementById('about-modal');
        if (modal) modal.classList.add('active');
      };
    }
    
    // Settings button
    const btnSettings = document.getElementById('btn-settings');
    if (btnSettings) {
      btnSettings.onclick = function() {
        const modal = document.getElementById('settings-modal');
        if (modal) modal.classList.add('active');
      };
    }
    
    // Modal close buttons
    document.querySelectorAll('.modal-close').forEach(btn => {
      btn.onclick = function() {
        const modal = this.closest('.modal');
        if (modal) modal.classList.remove('active');
      };
    });
    
    // Click outside modal to close
    document.querySelectorAll('.modal').forEach(modal => {
      modal.onclick = function(e) {
        if (e.target === this) this.classList.remove('active');
      };
    });
    
    // ============================================
    // TIMELINE DRAG
    // ============================================
    const track = document.getElementById('timeline-track');
    const handle = document.getElementById('timeline-handle');
    let isDragging = false;
    
    if (handle && track) {
      handle.onmousedown = function(e) {
        e.preventDefault();
        isDragging = true;
        state.pause();
      };
      
      document.onmousemove = function(e) {
        if (!isDragging) return;
        const rect = track.getBoundingClientRect();
        const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
        const year = positionToYear(pos);
        state.setYear(year);
      };
      
      document.onmouseup = function() {
        isDragging = false;
      };
      
      track.onclick = function(e) {
        if (e.target === handle) return;
        const rect = track.getBoundingClientRect();
        const pos = (e.clientX - rect.left) / rect.width;
        const year = positionToYear(pos);
        state.setYear(year);
      };
    }
    
    // ============================================
    // KEYBOARD
    // ============================================
    document.onkeydown = function(e) {
      if (e.target.tagName === 'INPUT') return;
      
      switch(e.key) {
        case ' ':
          e.preventDefault();
          state.togglePlay();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          if (btnStepBack) btnStepBack.click();
          break;
        case 'ArrowRight':
          e.preventDefault();
          if (btnStepForward) btnStepForward.click();
          break;
        case 'Escape':
          document.querySelectorAll('.modal.active').forEach(m => m.classList.remove('active'));
          break;
      }
    };
    
    // ============================================
    // INITIAL UPDATE
    // ============================================
    updateDisplays(state.currentYear);
    
    console.log('✅ All fixes applied! Controls should work now.');
  }
})();
