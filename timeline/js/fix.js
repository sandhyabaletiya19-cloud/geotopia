// ============================================
// GEOTOPIA MASTER FIX
// This file makes EVERYTHING work together
// Add as LAST script in HTML
// ============================================

(function() {
  'use strict';
  
  console.log('🔧 GEOTOPIA Master Fix Loading...');
  
  // ============================================
  // WAIT FOR EVERYTHING TO LOAD
  // ============================================
  
  function waitForApp() {
    return new Promise(resolve => {
      function check() {
        if (window.geotopiaApp && 
            window.geotopiaApp.mapEngine && 
            window.geotopiaApp.mapEngine.isInitialized &&
            typeof d3 !== 'undefined') {
          resolve();
        } else {
          setTimeout(check, 100);
        }
      }
      check();
    });
  }
  
  // ============================================
  // MAIN INITIALIZATION
  // ============================================
  
  async function initializeFix() {
    console.log('🔧 Waiting for app to load...');
    
    // Wait max 10 seconds
    const timeout = setTimeout(() => {
      console.log('🔧 Timeout - applying fixes anyway');
      applyFixes();
    }, 10000);
    
    try {
      await waitForApp();
      clearTimeout(timeout);
      console.log('🔧 App loaded, applying fixes...');
      applyFixes();
    } catch (e) {
      console.error('Fix error:', e);
      applyFixes();
    }
  }
  
  // ============================================
  // CORE STATE (Ensure it exists and works)
  // ============================================
  
  function ensureState() {
    if (!window.state) {
      window.state = {};
    }
    
    // Core properties
    if (window.state.currentYear === undefined) {
      window.state.currentYear = -4500000000;
    }
    if (window.state.isPlaying === undefined) {
      window.state.isPlaying = false;
    }
    if (window.state.playbackSpeed === undefined) {
      window.state.playbackSpeed = 1;
    }
    if (window.state.playbackDirection === undefined) {
      window.state.playbackDirection = 1;
    }
    if (!window.state.listeners) {
      window.state.listeners = {};
    }
    
    // Event system
    if (typeof window.state.on !== 'function') {
      window.state.on = function(event, callback) {
        if (!this.listeners[event]) this.listeners[event] = [];
        this.listeners[event].push(callback);
      };
    }
    
    if (typeof window.state.emit !== 'function') {
      window.state.emit = function(event, data) {
        if (this.listeners[event]) {
          this.listeners[event].forEach(cb => {
            try { cb(data); } catch(e) { console.error(e); }
          });
        }
      };
    }
    
    // Year setter
    if (typeof window.state.setYear !== 'function') {
      window.state.setYear = function(year, animate) {
        const oldYear = this.currentYear;
        this.currentYear = Math.max(-4500000000, Math.min(2026, year));
        this.emit('yearChange', { year: this.currentYear, oldYear: oldYear });
      };
    }
    
    // Playback controls
    if (typeof window.state.play !== 'function') {
      window.state.play = function() {
        this.isPlaying = true;
        this.emit('playStateChange', { isPlaying: true });
      };
    }
    
    if (typeof window.state.pause !== 'function') {
      window.state.pause = function() {
        this.isPlaying = false;
        this.emit('playStateChange', { isPlaying: false });
      };
    }
    
    if (typeof window.state.togglePlay !== 'function') {
      window.state.togglePlay = function() {
        if (this.isPlaying) this.pause();
        else this.play();
      };
    }
    
    console.log('✅ State ensured');
  }
  
  // ============================================
  // UTILITY FUNCTIONS
  // ============================================
  
  function calculateStep() {
    const absYear = Math.abs(window.state.currentYear);
    if (absYear > 1000000000) return 100000000;  // 100M years
    if (absYear > 100000000) return 10000000;    // 10M years
    if (absYear > 10000000) return 1000000;      // 1M years
    if (absYear > 1000000) return 100000;        // 100K years
    if (absYear > 100000) return 10000;          // 10K years
    if (absYear > 10000) return 1000;            // 1K years
    if (absYear > 1000) return 100;              // 100 years
    if (absYear > 100) return 10;                // 10 years
    return 1;                                     // 1 year
  }
  
  function formatYear(year) {
    const absYear = Math.abs(year);
    if (absYear >= 1000000000) return (absYear / 1000000000).toFixed(2) + ' BYA';
    if (absYear >= 1000000) return (absYear / 1000000).toFixed(1) + ' MYA';
    if (absYear >= 10000 && year < 0) return (absYear / 1000).toFixed(0) + 'K BCE';
    if (year < 0) return absYear.toLocaleString() + ' BCE';
    return year.toLocaleString() + ' CE';
  }
  
  function getEra(year) {
    if (year < -4000000000) return { name: 'HADEAN EON', color: '#ff4500', bg: 'linear-gradient(135deg, #FF4500, #DC143C)' };
    if (year < -2500000000) return { name: 'ARCHEAN EON', color: '#8b0000', bg: 'linear-gradient(135deg, #8B0000, #4B0082)' };
    if (year < -541000000) return { name: 'PROTEROZOIC EON', color: '#4b0082', bg: 'linear-gradient(135deg, #4B0082, #006400)' };
    if (year < -252000000) return { name: 'PALEOZOIC ERA', color: '#006400', bg: 'linear-gradient(135deg, #006400, #228B22)' };
    if (year < -66000000) return { name: 'MESOZOIC ERA', color: '#228b22', bg: 'linear-gradient(135deg, #228B22, #32CD32)' };
    if (year < -10000) return { name: 'CENOZOIC ERA', color: '#4682b4', bg: 'linear-gradient(135deg, #4682B4, #1E90FF)' };
    if (year < -3000) return { name: 'PREHISTORIC', color: '#8b4513', bg: 'linear-gradient(135deg, #8B4513, #D2691E)' };
    if (year < 500) return { name: 'ANCIENT ERA', color: '#daa520', bg: 'linear-gradient(135deg, #DAA520, #FFD700)' };
    if (year < 1500) return { name: 'MEDIEVAL ERA', color: '#708090', bg: 'linear-gradient(135deg, #708090, #778899)' };
    if (year < 1900) return { name: 'EARLY MODERN', color: '#2f4f4f', bg: 'linear-gradient(135deg, #2F4F4F, #4682B4)' };
    return { name: 'CONTEMPORARY', color: '#1e90ff', bg: 'linear-gradient(135deg, #1E90FF, #00BFFF)' };
  }
  
  function yearToPosition(year) {
    const minYear = -4500000000;
    const minLog = Math.log10(Math.abs(minYear) + 1);
    
    if (year <= 0) {
      const yearLog = Math.log10(Math.abs(year) + 1);
      return 1 - (yearLog / minLog);
    } else {
      return 0.98 + (year / 2026) * 0.02;
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
  
  // ============================================
  // UPDATE ALL DISPLAYS
  // ============================================
  
  function updateAllDisplays(year) {
    // Year display
    const yearDisplay = document.getElementById('current-year-display');
    if (yearDisplay) {
      yearDisplay.textContent = formatYear(year);
    }
    
    // Era display
    const eraDisplay = document.getElementById('current-era');
    if (eraDisplay) {
      const era = getEra(year);
      eraDisplay.textContent = era.name;
      eraDisplay.style.color = era.color;
      eraDisplay.style.textShadow = `0 0 20px ${era.color}`;
    }
    
    // Timeline handle
    const handle = document.getElementById('timeline-handle');
    if (handle) {
      const pos = yearToPosition(year);
      handle.style.left = (pos * 100) + '%';
    }
    
    // Play button
    const playIcon = document.getElementById('play-icon');
    if (playIcon) {
      playIcon.textContent = window.state.isPlaying ? '⏸' : '▶';
    }
    
    // Update map
    updateMap(year);
    
    // Update info panel
    updateInfoPanel(year);
  }
  
  // ============================================
  // MAP UPDATE
  // ============================================
  
  function updateMap(year) {
    if (window.geotopiaApp && window.geotopiaApp.mapEngine) {
      const mapEngine = window.geotopiaApp.mapEngine;
      mapEngine.currentYear = year;
      
      if (typeof mapEngine.render === 'function') {
        mapEngine.render();
      }
    }
  }
  
  // ============================================
  // INFO PANEL UPDATE
  // ============================================
  
  function updateInfoPanel(year) {
    const infoTitle = document.getElementById('info-title');
    const infoBody = document.getElementById('info-body');
    
    if (!infoTitle || !infoBody) return;
    
    const era = getEra(year);
    infoTitle.textContent = era.name;
    
    // Get events near this year
    let eventsHtml = '';
    
    if (typeof GEOTOPIA_DATA !== 'undefined' && GEOTOPIA_DATA.timeline) {
      const nearbyEvents = GEOTOPIA_DATA.timeline.filter(e => {
        const diff = Math.abs(e.year - year);
        const tolerance = calculateStep() * 2;
        return diff <= tolerance;
      }).slice(0, 5);
      
      if (nearbyEvents.length > 0) {
        eventsHtml = '<h4>Events Near This Time:</h4><ul>';
        nearbyEvents.forEach(e => {
          eventsHtml += `<li><strong>${formatYear(e.year)}</strong>: ${e.name || e.event || 'Event'}</li>`;
        });
        eventsHtml += '</ul>';
      }
    }
    
    // Get active civilizations
    let civsHtml = '';
    if (typeof GEOTOPIA_DATA !== 'undefined' && year > -10000) {
      const activeCivs = GEOTOPIA_DATA.getActiveCivilizationsAtYear ? 
        GEOTOPIA_DATA.getActiveCivilizationsAtYear(year) : [];
      
      if (activeCivs.length > 0) {
        civsHtml = '<h4>Active Civilizations:</h4><ul>';
        activeCivs.slice(0, 10).forEach(c => {
          civsHtml += `<li style="color:${c.regionColor || '#fff'}">${c.name}</li>`;
        });
        civsHtml += '</ul>';
      }
    }
    
    infoBody.innerHTML = `
      <p class="era-description">${getEraDescription(year)}</p>
      ${eventsHtml}
      ${civsHtml}
    `;
  }
  
  function getEraDescription(year) {
    if (year < -4000000000) return 'Earth is a molten ball of rock and metal, constantly bombarded by asteroids. The Moon forms from a giant impact. Temperatures exceed 1000°C.';
    if (year < -2500000000) return 'The crust solidifies. First oceans form. Primitive single-celled life appears. The atmosphere is toxic with no oxygen.';
    if (year < -541000000) return 'Oxygen builds up in the atmosphere. First complex cells evolve. Snowball Earth events freeze the entire planet multiple times.';
    if (year < -252000000) return 'Life explodes in diversity. Fish, plants, insects, amphibians, and reptiles evolve. Continents shift dramatically.';
    if (year < -66000000) return 'The age of dinosaurs. Pangaea breaks apart. Flowering plants appear. Birds evolve from dinosaurs.';
    if (year < -10000) return 'Mammals dominate after the asteroid extinction. Primates evolve. Ice ages come and go. Humans emerge in Africa.';
    if (year < 0) return 'Human civilizations rise across the globe. Agriculture, writing, cities, empires, and religions develop.';
    return 'The modern era of rapid technological advancement, global connectivity, and unprecedented human impact on the planet.';
  }
  
  // ============================================
  // ANIMATION LOOP
  // ============================================
  
  let animationId = null;
  let lastFrameTime = 0;
  
  function startAnimation() {
    if (animationId) cancelAnimationFrame(animationId);
    lastFrameTime = performance.now();
    animate();
  }
  
  function stopAnimation() {
    if (animationId) {
      cancelAnimationFrame(animationId);
      animationId = null;
    }
  }
  
  function animate() {
    if (!window.state.isPlaying) {
      animationId = null;
      return;
    }
    
    const now = performance.now();
    const delta = (now - lastFrameTime) / 1000; // seconds
    lastFrameTime = now;
    
    // Calculate year change based on speed
    const baseStep = calculateStep();
    const yearChange = baseStep * window.state.playbackSpeed * window.state.playbackDirection * delta * 60;
    
    let newYear = window.state.currentYear + yearChange;
    
    // Bounds check
    if (newYear > 2026) {
      newYear = 2026;
      window.state.pause();
    } else if (newYear < -4500000000) {
      newYear = -4500000000;
      window.state.pause();
    }
    
    // Update state and displays
    window.state.currentYear = newYear;
    updateAllDisplays(newYear);
    
    animationId = requestAnimationFrame(animate);
  }
  
  // ============================================
  // BIND ALL CONTROLS
  // ============================================
  
  function bindControls() {
    console.log('🔧 Binding controls...');
    
    // ========== PLAY/PAUSE ==========
    const btnPlayPause = document.getElementById('btn-play-pause');
    if (btnPlayPause) {
      // Remove old listeners
      btnPlayPause.replaceWith(btnPlayPause.cloneNode(true));
      const newBtn = document.getElementById('btn-play-pause');
      
      newBtn.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('▶️ Play/Pause clicked');
        
        if (window.state.isPlaying) {
          window.state.pause();
          stopAnimation();
        } else {
          window.state.play();
          startAnimation();
        }
        
        updateAllDisplays(window.state.currentYear);
      });
      console.log('  ✓ Play/Pause bound');
    }
    
    // ========== STEP BACK ==========
    const btnStepBack = document.getElementById('btn-step-back');
    if (btnStepBack) {
      btnStepBack.replaceWith(btnStepBack.cloneNode(true));
      const newBtn = document.getElementById('btn-step-back');
      
      newBtn.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('⏮️ Step back clicked');
        
        const step = calculateStep();
        const newYear = Math.max(-4500000000, window.state.currentYear - step);
        window.state.currentYear = newYear;
        updateAllDisplays(newYear);
      });
      console.log('  ✓ Step back bound');
    }
    
    // ========== STEP FORWARD ==========
    const btnStepForward = document.getElementById('btn-step-forward');
    if (btnStepForward) {
      btnStepForward.replaceWith(btnStepForward.cloneNode(true));
      const newBtn = document.getElementById('btn-step-forward');
      
      newBtn.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('⏭️ Step forward clicked');
        
        const step = calculateStep();
        const newYear = Math.min(2026, window.state.currentYear + step);
        window.state.currentYear = newYear;
        updateAllDisplays(newYear);
      });
      console.log('  ✓ Step forward bound');
    }
    
    // ========== ERA SELECT ==========
    const eraSelect = document.getElementById('era-select');
    if (eraSelect) {
      eraSelect.addEventListener('change', function(e) {
        const year = parseInt(this.value);
        console.log('📅 Era selected:', year);
        
        window.state.currentYear = year;
        updateAllDisplays(year);
      });
      console.log('  ✓ Era select bound');
    }
    
    // ========== SPEED SLIDER ==========
    const speedSlider = document.getElementById('speed-slider');
    const speedDisplay = document.getElementById('speed-display');
    if (speedSlider) {
      speedSlider.addEventListener('input', function(e) {
        const speed = parseInt(this.value);
        window.state.playbackSpeed = speed;
        if (speedDisplay) speedDisplay.textContent = speed + 'x';
        console.log('⚡ Speed:', speed);
      });
      console.log('  ✓ Speed slider bound');
    }
    
    // ========== ZOOM IN ==========
    const btnZoomIn = document.getElementById('btn-zoom-in');
    if (btnZoomIn) {
      btnZoomIn.replaceWith(btnZoomIn.cloneNode(true));
      const newBtn = document.getElementById('btn-zoom-in');
      
      newBtn.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('🔍+ Zoom in');
        
        if (window.geotopiaApp && window.geotopiaApp.mapEngine) {
          const me = window.geotopiaApp.mapEngine;
          if (me.projection) {
            const scale = me.projection.scale();
            me.projection.scale(scale * 1.5);
            me.render();
          }
        }
      });
      console.log('  ✓ Zoom in bound');
    }
    
    // ========== ZOOM OUT ==========
    const btnZoomOut = document.getElementById('btn-zoom-out');
    if (btnZoomOut) {
      btnZoomOut.replaceWith(btnZoomOut.cloneNode(true));
      const newBtn = document.getElementById('btn-zoom-out');
      
      newBtn.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('🔍- Zoom out');
        
        if (window.geotopiaApp && window.geotopiaApp.mapEngine) {
          const me = window.geotopiaApp.mapEngine;
          if (me.projection) {
            const scale = me.projection.scale();
            me.projection.scale(scale / 1.5);
            me.render();
          }
        }
      });
      console.log('  ✓ Zoom out bound');
    }
    
    // ========== RESET VIEW ==========
    const btnResetView = document.getElementById('btn-reset-view');
    if (btnResetView) {
      btnResetView.replaceWith(btnResetView.cloneNode(true));
      const newBtn = document.getElementById('btn-reset-view');
      
      newBtn.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('🔄 Reset view');
        
        if (window.geotopiaApp && window.geotopiaApp.mapEngine) {
          const me = window.geotopiaApp.mapEngine;
          if (me.projection && me.container) {
            me.projection.rotate([0, -20]);
            me.projection.scale(Math.min(me.container.clientWidth, me.container.clientHeight) / 2.5);
            me.render();
          }
        }
      });
      console.log('  ✓ Reset view bound');
    }
    
    // ========== TOGGLE 3D ==========
    const btnToggle3D = document.getElementById('btn-toggle-3d');
    if (btnToggle3D) {
      btnToggle3D.replaceWith(btnToggle3D.cloneNode(true));
      const newBtn = document.getElementById('btn-toggle-3d');
      
      newBtn.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('🌐 Toggle 3D');
        
        if (window.geotopiaApp && window.geotopiaApp.mapEngine) {
          const me = window.geotopiaApp.mapEngine;
          const newMode = me.mode === '2d' ? '3d' : '2d';
          me.setMode(newMode);
          this.textContent = newMode === '3d' ? '🗺️' : '🌐';
        }
      });
      console.log('  ✓ Toggle 3D bound');
    }
    
    // ========== MODALS ==========
    const btnSearch = document.getElementById('btn-search');
    if (btnSearch) {
      btnSearch.addEventListener('click', () => openModal('search-modal'));
      console.log('  ✓ Search button bound');
    }
    
    const btnInfo = document.getElementById('btn-info');
    if (btnInfo) {
      btnInfo.addEventListener('click', () => openModal('about-modal'));
      console.log('  ✓ About button bound');
    }
    
    const btnSettings = document.getElementById('btn-settings');
    if (btnSettings) {
      btnSettings.addEventListener('click', () => openModal('settings-modal'));
      console.log('  ✓ Settings button bound');
    }
    
    // Modal close buttons
    document.querySelectorAll('.modal-close').forEach(btn => {
      btn.addEventListener('click', function() {
        const modal = this.closest('.modal');
        if (modal) modal.classList.remove('active');
      });
    });
    
    // Click outside modal to close
    document.querySelectorAll('.modal').forEach(modal => {
      modal.addEventListener('click', function(e) {
        if (e.target === this) this.classList.remove('active');
      });
    });
    
    // Info panel close
    const infoClose = document.getElementById('info-close');
    if (infoClose) {
      infoClose.addEventListener('click', () => {
        const panel = document.getElementById('info-panel');
        if (panel) panel.classList.remove('expanded');
      });
    }
    
    console.log('✅ All controls bound');
  }
  
  function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
      modal.classList.add('active');
      
      // Focus search input
      if (id === 'search-modal') {
        const input = document.getElementById('search-input');
        if (input) setTimeout(() => input.focus(), 100);
      }
    }
  }
  
  // ============================================
  // TIMELINE DRAG
  // ============================================
  
  function setupTimelineDrag() {
    const track = document.getElementById('timeline-track');
    const handle = document.getElementById('timeline-handle');
    
    if (!track || !handle) {
      console.warn('Timeline elements not found');
      return;
    }
    
    let isDragging = false;
    
    // Mouse down on handle
    handle.addEventListener('mousedown', function(e) {
      e.preventDefault();
      isDragging = true;
      handle.classList.add('dragging');
      window.state.pause();
      stopAnimation();
    });
    
    // Touch start
    handle.addEventListener('touchstart', function(e) {
      e.preventDefault();
      isDragging = true;
      handle.classList.add('dragging');
      window.state.pause();
      stopAnimation();
    }, { passive: false });
    
    // Mouse move
    document.addEventListener('mousemove', function(e) {
      if (!isDragging) return;
      
      const rect = track.getBoundingClientRect();
      const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      const year = positionToYear(pos);
      
      window.state.currentYear = year;
      updateAllDisplays(year);
    });
    
    // Touch move
    document.addEventListener('touchmove', function(e) {
      if (!isDragging) return;
      
      const touch = e.touches[0];
      const rect = track.getBoundingClientRect();
      const pos = Math.max(0, Math.min(1, (touch.clientX - rect.left) / rect.width));
      const year = positionToYear(pos);
      
      window.state.currentYear = year;
      updateAllDisplays(year);
    }, { passive: false });
    
    // Mouse up
    document.addEventListener('mouseup', function() {
      if (isDragging) {
        isDragging = false;
        handle.classList.remove('dragging');
      }
    });
    
    // Touch end
    document.addEventListener('touchend', function() {
      if (isDragging) {
        isDragging = false;
        handle.classList.remove('dragging');
      }
    });
    
    // Click on track to jump
    track.addEventListener('click', function(e) {
      if (e.target === handle || e.target.closest('.timeline-handle')) return;
      
      const rect = track.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      const year = positionToYear(pos);
      
      console.log('Timeline clicked, jumping to:', formatYear(year));
      
      window.state.currentYear = year;
      updateAllDisplays(year);
    });
    
    // Mouse wheel on track
    track.addEventListener('wheel', function(e) {
      e.preventDefault();
      
      const direction = e.deltaY > 0 ? -1 : 1;
      const step = calculateStep();
      const newYear = window.state.currentYear + (step * direction);
      
      if (newYear >= -4500000000 && newYear <= 2026) {
        window.state.currentYear = newYear;
        updateAllDisplays(newYear);
      }
    }, { passive: false });
    
    console.log('✅ Timeline drag setup complete');
  }
  
  // ============================================
  // KEYBOARD SHORTCUTS
  // ============================================
  
  function setupKeyboard() {
    document.addEventListener('keydown', function(e) {
      // Ignore if typing in input
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        return;
      }
      
      switch(e.key) {
        case ' ':
          e.preventDefault();
          if (window.state.isPlaying) {
            window.state.pause();
            stopAnimation();
          } else {
            window.state.play();
            startAnimation();
          }
          updateAllDisplays(window.state.currentYear);
          break;
          
        case 'ArrowLeft':
          e.preventDefault();
          const stepBack = calculateStep();
          const yearBack = Math.max(-4500000000, window.state.currentYear - stepBack);
          window.state.currentYear = yearBack;
          updateAllDisplays(yearBack);
          break;
          
        case 'ArrowRight':
          e.preventDefault();
          const stepFwd = calculateStep();
          const yearFwd = Math.min(2026, window.state.currentYear + stepFwd);
          window.state.currentYear = yearFwd;
          updateAllDisplays(yearFwd);
          break;
          
        case 'ArrowUp':
          e.preventDefault();
          document.getElementById('btn-zoom-in')?.click();
          break;
          
        case 'ArrowDown':
          e.preventDefault();
          document.getElementById('btn-zoom-out')?.click();
          break;
          
        case 'Escape':
          document.querySelectorAll('.modal.active').forEach(m => m.classList.remove('active'));
          break;
          
        case 'f':
        case 'F':
          if (!e.ctrlKey && !e.metaKey) {
            e.preventDefault();
            if (document.fullscreenElement) {
              document.exitFullscreen();
            } else {
              document.documentElement.requestFullscreen().catch(() => {});
            }
          }
          break;
          
        case '/':
          e.preventDefault();
          openModal('search-modal');
          break;
          
        case '1': window.state.currentYear = -4500000000; updateAllDisplays(-4500000000); break;
        case '2': window.state.currentYear = -4000000000; updateAllDisplays(-4000000000); break;
        case '3': window.state.currentYear = -2500000000; updateAllDisplays(-2500000000); break;
        case '4': window.state.currentYear = -541000000; updateAllDisplays(-541000000); break;
        case '5': window.state.currentYear = -252000000; updateAllDisplays(-252000000); break;
        case '6': window.state.currentYear = -66000000; updateAllDisplays(-66000000); break;
        case '7': window.state.currentYear = -10000; updateAllDisplays(-10000); break;
        case '8': window.state.currentYear = 1; updateAllDisplays(1); break;
        case '9': window.state.currentYear = 1500; updateAllDisplays(1500); break;
        case '0': window.state.currentYear = 2026; updateAllDisplays(2026); break;
      }
    });
    
    console.log('✅ Keyboard shortcuts setup complete');
  }
  
  // ============================================
  // SEARCH FUNCTIONALITY
  // ============================================
  
  function setupSearch() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    
    if (!searchInput || !searchResults) return;
    
    let timeout;
    
    searchInput.addEventListener('input', function() {
      clearTimeout(timeout);
      const query = this.value.trim().toLowerCase();
      
      if (query.length < 2) {
        searchResults.innerHTML = '<p style="color:#888;padding:10px;">Type at least 2 characters...</p>';
        return;
      }
      
      timeout = setTimeout(() => {
        const results = [];
        
        // Search GEOTOPIA_DATA
        if (typeof GEOTOPIA_DATA !== 'undefined' && GEOTOPIA_DATA.timeline) {
          GEOTOPIA_DATA.timeline.forEach(event => {
            const name = (event.name || event.event || '').toLowerCase();
            if (name.includes(query)) {
              results.push({
                name: event.name || event.event,
                year: event.year,
                type: 'event'
              });
            }
          });
        }
        
        // Search eras
        ['Hadean', 'Archean', 'Proterozoic', 'Paleozoic', 'Mesozoic', 'Cenozoic'].forEach(era => {
          if (era.toLowerCase().includes(query)) {
            const years = {
              'Hadean': -4500000000,
              'Archean': -4000000000,
              'Proterozoic': -2500000000,
              'Paleozoic': -541000000,
              'Mesozoic': -252000000,
              'Cenozoic': -66000000
            };
            results.push({ name: era + ' Eon/Era', year: years[era], type: 'era' });
          }
        });
        
        // Display results
        if (results.length === 0) {
          searchResults.innerHTML = '<p style="color:#888;padding:10px;">No results found</p>';
        } else {
          let html = `<p style="color:#888;padding:5px 10px;">${results.length} results</p>`;
          html += '<ul style="list-style:none;padding:0;margin:0;">';
          
          results.slice(0, 20).forEach(r => {
            const icon = r.type === 'era' ? '🌍' : '📅';
            html += `
              <li class="search-result-item" data-year="${r.year}" style="padding:10px;border-bottom:1px solid #333;cursor:pointer;">
                <span>${icon}</span>
                <strong>${r.name}</strong>
                <span style="float:right;color:#888;">${formatYear(r.year)}</span>
              </li>
            `;
          });
          
          html += '</ul>';
          searchResults.innerHTML = html;
          
          // Bind clicks
          searchResults.querySelectorAll('.search-result-item').forEach(item => {
            item.addEventListener('click', function() {
              const year = parseInt(this.dataset.year);
              window.state.currentYear = year;
              updateAllDisplays(year);
              document.getElementById('search-modal').classList.remove('active');
            });
            
            item.addEventListener('mouseenter', function() {
              this.style.background = '#333';
            });
            item.addEventListener('mouseleave', function() {
              this.style.background = '';
            });
          });
        }
      }, 300);
    });
    
    console.log('✅ Search setup complete');
  }
  
  // ============================================
  // CREATE TIMELINE ERA MARKERS
  // ============================================
  
  function createEraMarkers() {
    const track = document.getElementById('timeline-track');
    if (!track) return;
    
    // Add gradient background
    track.style.background = 'linear-gradient(90deg, #ff4500 0%, #8b0000 10%, #4b0082 25%, #006400 50%, #228b22 75%, #4682b4 90%, #2e8b57 100%)';
    track.style.borderRadius = '10px';
    track.style.position = 'relative';
    track.style.height = '40px';
    
    console.log('✅ Era markers created');
  }
  
  // ============================================
  // APPLY ALL FIXES
  // ============================================
  
  function applyFixes() {
    console.log('🔧 Applying all fixes...');
    
    // 1. Ensure state exists
    ensureState();
    
    // 2. Bind all controls
    bindControls();
    
    // 3. Setup timeline drag
    setupTimelineDrag();
    
    // 4. Setup keyboard shortcuts
    setupKeyboard();
    
    // 5. Setup search
    setupSearch();
    
    // 6. Create era markers
    createEraMarkers();
    
    // 7. Initial display update
    updateAllDisplays(window.state.currentYear);
    
    // 8. Listen for state changes
    window.state.on('yearChange', function(data) {
      updateAllDisplays(data.year);
    });
    
    console.log('');
    console.log('═══════════════════════════════════════════');
    console.log('   ✅ GEOTOPIA FIX APPLIED SUCCESSFULLY!');
    console.log('═══════════════════════════════════════════');
    console.log('');
    console.log('Controls should now work:');
    console.log('  ▶️  Play/Pause');
    console.log('  ⏮️  Step Back');
    console.log('  ⏭️  Step Forward');
    console.log('  🔍  Zoom In/Out');
    console.log('  🎚️  Speed Slider');
    console.log('  📅  Era Dropdown');
    console.log('  🖱️  Timeline Drag');
    console.log('  ⌨️  Keyboard Shortcuts');
    console.log('');
    console.log('Keyboard:');
    console.log('  SPACE    = Play/Pause');
    console.log('  ← →      = Step Back/Forward');
    console.log('  ↑ ↓      = Zoom In/Out');
    console.log('  1-0      = Jump to Era');
    console.log('  F        = Fullscreen');
    console.log('  /        = Search');
    console.log('  ESC      = Close Modals');
    console.log('');
  }
  
  // ============================================
  // START
  // ============================================
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeFix);
  } else {
    initializeFix();
  }
  
})();
