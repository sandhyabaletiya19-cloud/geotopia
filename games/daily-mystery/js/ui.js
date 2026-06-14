/* ═══════════════════════════════════════════════════════════
   DHARAVERSE MAP MYSTERY — UI CONTROLLER
   File: /games/daily-mystery/js/ui.js
   
   DEPENDS ON: data.js, logic.js, state.js, i18n.js
   USED BY: app.js (calls all UIController methods)
   
   EXPORTS:
     window.UIController = {
       map, markers, initMap(), addGuessMarker(),
       fitMapBounds(), renderAttemptRow(),
       updateAttemptsRemaining(), showToast(),
       showGameOver(), triggerConfetti(),
       showLoadingScreen(), renderNewsFact(),
       updateStreakDisplay(), updateDayNumber(),
       initAutocomplete(), clearInput(),
       showModal(), restoreGameState(),
       updateSidebarStats(), updateDistribution()
     }
   ═══════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  // ─────────────────────────────────────────────
  // INTERNAL STATE
  // ─────────────────────────────────────────────
  var _autocompleteItems = [];  // filtered country list
  var _highlightedIndex  = -1;  // keyboard nav index
  var _toastQueue        = [];  // active toast elements
  var _confettiTimeout   = null;
  var _countdownInterval = null;

  // ═══════════════════════════════════════════════
  // HELPER: Get element safely
  // ═══════════════════════════════════════════════
  function el(id) {
    return document.getElementById(id);
  }

  // ═══════════════════════════════════════════════
  // HELPER: Add class then remove after duration
  // ═══════════════════════════════════════════════
  function tempClass(element, className, duration) {
    if (!element) return;
    element.classList.add(className);
    setTimeout(function () {
      element.classList.remove(className);
    }, duration || 600);
  }

  // ═══════════════════════════════════════════════
  // HELPER: Remove will-change after animation
  // ═══════════════════════════════════════════════
  function cleanupAnimation(element, delay) {
    setTimeout(function () {
      if (element) element.classList.add('animation-done');
    }, delay || 600);
  }

  // ═══════════════════════════════════════════════
  // HELPER: Escape HTML
  // ═══════════════════════════════════════════════
  function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  // ─────────────────────────────────────────────
  // TILE LAYER OPTIONS
  // Dark tile from CartoDB — free, no key needed
  // ─────────────────────────────────────────────
  var TILE_URL = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';
  var TILE_ATTR = '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>';


  // ═══════════════════════════════════════════════
  // UIController — exported to window
  // ═══════════════════════════════════════════════
  window.UIController = {

    /** Leaflet map instance */
    map: null,

    /** All markers on the map */
    markers: [],


    // ═══════════════════════════════════════════
    // 1. MAP INIT
    // ID: #game-map
    // Called by: app.js → init()
    // ═══════════════════════════════════════════
    initMap: function () {
      var mapEl = el('game-map');
      if (!mapEl) {
        console.error('[ui.js] #game-map not found');
        return;
      }

      // Create Leaflet map
      this.map = L.map('game-map', {
        center: [20, 0],
        zoom: 2,
        minZoom: 1,
        maxZoom: 8,
        zoomControl: true,
        attributionControl: true,
        worldCopyJump: false,
        // Mobile optimizations
        tap: true,
        tapTolerance: 15,
        touchZoom: true,
        bounceAtZoomLimits: false,
        // Disable double-click zoom (conflicts with mobile)
        doubleClickZoom: false
      });

      // Dark tile layer
      L.tileLayer(TILE_URL, {
        attribution: TILE_ATTR,
        subdomains: 'abcd',
        maxZoom: 19,
        crossOrigin: true
      }).addTo(this.map);

      // Move zoom control to bottom-right on mobile
      this.map.zoomControl.setPosition('bottomright');

      // Fix map size after CSS renders
      var self = this;
      setTimeout(function () {
        if (self.map) self.map.invalidateSize();
      }, 100);

      console.log('[ui.js] Map initialized');
    },


    // ═══════════════════════════════════════════
    // 2. ADD GUESS MARKER
    // Called by: app.js → handleGuessSubmit()
    // ═══════════════════════════════════════════
    addGuessMarker: function (lat, lng, label, isCorrect) {
      if (!this.map) return null;

      // Choose color based on result
      var color = isCorrect ? '#00C896' : '#E94560';
      var size = isCorrect ? 16 : 12;

      // Create custom circle marker
      var marker = L.circleMarker([lat, lng], {
        radius: size,
        fillColor: color,
        color: '#ffffff',
        weight: 2,
        opacity: 1,
        fillOpacity: 0.9
      });

      // Popup with country name
      marker.bindPopup(
        '<strong style="color:#fff;font-family:Inter,sans-serif">' +
        escapeHtml(label) + '</strong>',
        { className: 'dark-popup', maxWidth: 200 }
      );

      marker.addTo(this.map);
      this.markers.push(marker);

      // Ping animation via CSS class on wrapper
      var markerEl = marker.getElement
        ? marker.getElement()
        : null;

      if (markerEl) {
        markerEl.classList.add(
          isCorrect ? 'marker-ping-green' : 'marker-ping-red'
        );
        cleanupAnimation(markerEl, 1200);
      }

      // Open popup briefly
      setTimeout(function () {
        marker.openPopup();
        setTimeout(function () {
          marker.closePopup();
        }, 2000);
      }, 300);

      return marker;
    },


    // ═══════════════════════════════════════════
    // 3. FIT MAP BOUNDS
    // Called by: app.js → after each guess
    // ═══════════════════════════════════════════
    fitMapBounds: function (markers) {
      if (!this.map || !markers || markers.length === 0) return;

      if (markers.length === 1) {
        // Single marker — center and zoom in a little
        var pos = markers[0].getLatLng();
        this.map.setView(pos, 4, { animate: true, duration: 0.8 });
        return;
      }

      // Multiple markers — fit all in view
      var group = L.featureGroup(markers);
      this.map.fitBounds(group.getBounds(), {
        padding: [40, 40],
        animate: true,
        duration: 0.8,
        maxZoom: 5
      });
    },


    // ═══════════════════════════════════════════
    // 4. RENDER ATTEMPT ROW
    // ID: #attempts-container
    // Called by: app.js → handleGuessSubmit()
    // Creates one .attempt-row with 5 cells
    // ═══════════════════════════════════════════
    renderAttemptRow: function (evalResult, attemptNumber) {
      var container = el('attempts-container');
      if (!container) return;

      // Hide empty state on first guess
      var emptyState = el('attempts-empty');
      if (emptyState) {
        emptyState.hidden = true;
        emptyState.setAttribute('aria-hidden', 'true');
      }

      // Show column headers on first guess
      var headers = el('attempt-headers');
      if (headers) {
        headers.hidden = false;
        headers.removeAttribute('hidden');
      }

      // ── Build row ──────────────────────────────
      var row = document.createElement('div');
      row.className = 'attempt-row';
      row.setAttribute('role', 'listitem');
      row.setAttribute('aria-label',
        'Guess ' + attemptNumber + ': ' + evalResult.guessName +
        ', ' + evalResult.distanceFormatted + ' away'
      );

      // Add color class to row
      if (evalResult.isCorrect) {
        row.classList.add('correct-row', 'glow-border-green');
      } else if (evalResult.distanceFeedback.tier === 'burning' ||
                 evalResult.distanceFeedback.tier === 'hot') {
        row.classList.add('close-row');
      }

      // Entrance animation with delay based on attempt number
      row.style.setProperty('--row-delay', ((attemptNumber - 1) * 80) + 'ms');
      row.classList.add('row-enter');
      cleanupAnimation(row, 500);

      // ── Cell 1: Country Name + Flag ────────────
      var cellCountry = document.createElement('div');
      cellCountry.className = 'attempt-cell cell-country';

      var flagEl = document.createElement('span');
      flagEl.className = 'cell-flag';
      flagEl.setAttribute('aria-hidden', 'true');
      flagEl.textContent = evalResult.guessFlag || '🏳️';

      var nameWrap = document.createElement('div');
      nameWrap.className = 'cell-name-wrap';

      var nameLabel = document.createElement('span');
      nameLabel.className = 'cell-label';
      nameLabel.textContent = evalResult.guessName;

      nameWrap.appendChild(nameLabel);
      cellCountry.appendChild(flagEl);
      cellCountry.appendChild(nameWrap);

      // ── Cell 2: Distance ───────────────────────
      var cellDistance = document.createElement('div');
      cellDistance.className =
        'attempt-cell cell-distance ' +
        'cell-' + evalResult.distanceFeedback.color;
      cellDistance.classList.add('flip-in', 'flip-delay-1');

      var distEmoji = document.createElement('span');
      distEmoji.className = 'cell-emoji';
      distEmoji.setAttribute('aria-hidden', 'true');
      distEmoji.textContent = evalResult.distanceFeedback.emoji;

      var distLabel = document.createElement('span');
      distLabel.className = 'cell-label';
      distLabel.textContent = evalResult.distanceFormatted;

      var distSub = document.createElement('span');
      distSub.className = 'cell-sub';
      distSub.textContent = evalResult.distanceFeedback.label;

      cellDistance.appendChild(distEmoji);
      cellDistance.appendChild(distLabel);
      cellDistance.appendChild(distSub);

      // ── Cell 3: Direction Arrow ────────────────
      var cellDirection = document.createElement('div');
      cellDirection.className = 'attempt-cell cell-direction';
      cellDirection.classList.add('flip-in', 'flip-delay-2');

      var arrowEl = document.createElement('span');
      arrowEl.className = 'cell-emoji arrow-spin';
      arrowEl.style.setProperty(
        '--arrow-rotation',
        evalResult.bearingRotation + 'deg'
      );
      arrowEl.setAttribute(
        'aria-label',
        'Direction: ' + evalResult.direction
      );
      arrowEl.textContent = evalResult.arrow;

      var dirSub = document.createElement('span');
      dirSub.className = 'cell-sub';
      dirSub.setAttribute('aria-hidden', 'true');
      // Short direction label (first 2 letters)
      dirSub.textContent = evalResult.direction.substring(0, 2).toUpperCase();

      cellDirection.appendChild(arrowEl);
      cellDirection.appendChild(dirSub);

      // ── Cell 4: Continent Zone ─────────────────
      var cellContinent = document.createElement('div');
      cellContinent.className =
        'attempt-cell cell-continent ' +
        'cell-' + evalResult.continentMatch.color;
      cellContinent.classList.add('flip-in', 'flip-delay-3');

      var contEmoji = document.createElement('span');
      contEmoji.className = 'cell-emoji';
      contEmoji.setAttribute(
        'aria-label',
        'Continent: ' + evalResult.continentMatch.message
      );
      contEmoji.textContent = evalResult.continentMatch.emoji;

      cellContinent.appendChild(contEmoji);

      // ── Cell 5: Size Comparison ────────────────
      var cellSize = document.createElement('div');
      cellSize.className = 'attempt-cell cell-size';
      cellSize.classList.add('flip-in', 'flip-delay-4');

      // Color based on how close the size is
      if (evalResult.sizeComparison.type === 'same') {
        cellSize.classList.add('cell-correct');
      } else if (evalResult.sizeComparison.ratio < 2) {
        cellSize.classList.add('cell-close');
      } else {
        cellSize.classList.add('cell-wrong');
      }

      var sizeEmoji = document.createElement('span');
      sizeEmoji.className = 'cell-emoji';
      sizeEmoji.setAttribute('aria-hidden', 'true');
      sizeEmoji.textContent = evalResult.sizeComparison.emoji;

      var sizeSub = document.createElement('span');
      sizeSub.className = 'cell-sub';
      // Show ratio if not "same"
      if (evalResult.sizeComparison.type !== 'same') {
        sizeSub.textContent =
          (evalResult.sizeComparison.type === 'bigger' ? '▲' : '▼') +
          evalResult.sizeComparison.ratio + 'x';
      } else {
        sizeSub.textContent = '≈';
      }

      cellSize.appendChild(sizeEmoji);
      cellSize.appendChild(sizeSub);

      // ── Assemble row ───────────────────────────
      row.appendChild(cellCountry);
      row.appendChild(cellDistance);
      row.appendChild(cellDirection);
      row.appendChild(cellContinent);
      row.appendChild(cellSize);

      // ── Add flip animation to all cells ────────
      var cells = row.querySelectorAll('.flip-in');
      for (var i = 0; i < cells.length; i++) {
        cleanupAnimation(cells[i], 800 + i * 100);
      }

      // ── Insert row at top (newest first) ───────
      // OR append at bottom (oldest first)
      // Decision: append at bottom (like Wordle)
      container.appendChild(row);

      // Scroll to show newest row
      setTimeout(function () {
        row.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 200);
    },


    // ═══════════════════════════════════════════
    // 5. UPDATE ATTEMPTS REMAINING
    // ID: #attempts-remaining
    // Called by: app.js → after each guess
    // ═══════════════════════════════════════════
    updateAttemptsRemaining: function (n) {
      var el_remain = el('attempts-remaining');
      if (!el_remain) return;

      var text;
      if (n === 1) {
        text = window.i18n.t('attempts_left_one');
      } else if (n === 0) {
        text = window.i18n.t('attempts_left_zero');
      } else {
        text = window.i18n.t('attempts_left', { n: n });
      }

      el_remain.textContent = text;

      // Flash animation on update
      tempClass(el_remain, 'pop-in', 400);

      // Color coding: red when low
      el_remain.style.color = '';
      if (n === 1) {
        el_remain.style.color = 'var(--game-red)';
      } else if (n === 2) {
        el_remain.style.color = 'var(--game-yellow)';
      }
    },


    // ═══════════════════════════════════════════
    // 6. SHOW TOAST
    // ID: #toast-container
    // Called by: app.js → various events
    // ═══════════════════════════════════════════
    showToast: function (message, type, duration) {
      var container = el('toast-container');
      if (!container) return;

      type = type || 'info';
      duration = duration || 3000;

      var toast = document.createElement('div');
      toast.className = 'toast ' + type + ' toast-bounce';
      toast.setAttribute('role', 'alert');
      toast.textContent = message;

      container.appendChild(toast);
      _toastQueue.push(toast);

      // Auto remove
      var removeToast = function () {
        toast.classList.add('removing');
        setTimeout(function () {
          if (toast.parentNode) {
            toast.parentNode.removeChild(toast);
          }
          var idx = _toastQueue.indexOf(toast);
          if (idx > -1) _toastQueue.splice(idx, 1);
        }, 300);
      };

      var timer = setTimeout(removeToast, duration);

      // Click to dismiss
      toast.addEventListener('click', function () {
        clearTimeout(timer);
        removeToast();
      });

      // Limit max toasts
      if (_toastQueue.length > 3) {
        var oldest = _toastQueue.shift();
        if (oldest && oldest.parentNode) {
          oldest.parentNode.removeChild(oldest);
        }
      }
    },


    // ═══════════════════════════════════════════
    // 7. SHOW GAME OVER BANNER
    // ID: #game-over-banner, #game-over-won, #game-over-lost
    // Called by: app.js → handleGameEnd()
    // ═══════════════════════════════════════════
    showGameOver: function (won, answer) {
      var banner = el('game-over-banner');
      if (!banner) return;

      // Show banner
      banner.hidden = false;
      banner.removeAttribute('hidden');

      // Use requestAnimationFrame for smooth animation trigger
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          banner.classList.add('visible');
        });
      });

      if (won) {
        // Show win panel
        var wonPanel = el('game-over-won');
        if (wonPanel) {
          wonPanel.hidden = false;
          wonPanel.removeAttribute('hidden');
          tempClass(wonPanel, 'bounce-in', 800);
        }

        // Win message
        var winMsg = el('game-over-win-message');
        if (winMsg) {
          var numGuesses = window.GameState.guesses.length;
          winMsg.textContent = window.i18n.t('correct_message', { n: numGuesses });
        }

        // Trigger confetti
        this.triggerConfetti();

        // Add won class to body
        document.body.classList.add('game-won');

      } else {
        // Show lose panel
        var lostPanel = el('game-over-lost');
        if (lostPanel) {
          lostPanel.hidden = false;
          lostPanel.removeAttribute('hidden');
          tempClass(lostPanel, 'bounce-in', 800);
        }

        // Show answer
        var answerEl = el('game-over-answer');
        if (answerEl && answer) {
          answerEl.textContent = answer.flag + ' ' + answer.name;
          tempClass(answerEl, 'pop-in', 600);
        }

        // Add lost class to body
        document.body.classList.add('game-lost');
      }

      // Update streak count in banner
      var streakEl = el('game-over-streak-count');
      if (streakEl && window.StreakManager) {
        streakEl.textContent = window.StreakManager.data.current;
        tempClass(streakEl, 'number-tick', 500);
      }

      // Show share button with wiggle
      var shareBtn = el('share-btn');
      if (shareBtn) {
        shareBtn.classList.add('wiggle');
      }

      // Start countdown timer
      this._startCountdown();

      // Update sidebar stats on game end
      if (window.GameState) {
        this.updateSidebarStats();
        this.updateDistribution();
      }
    },


    // ═══════════════════════════════════════════
    // 8. COUNTDOWN TIMER (internal)
    // ID: #next-game-countdown
    // ═══════════════════════════════════════════
    _startCountdown: function () {
      var countdownEl = el('next-game-countdown');
      if (!countdownEl) return;

      if (_countdownInterval) clearInterval(_countdownInterval);

      var updateTimer = function () {
        var ms = window.getMillisUntilNextGame();
        var formatted = window.formatCountdown(ms);
        countdownEl.textContent = formatted;
        tempClass(countdownEl, 'tick', 300);

        if (ms <= 0) {
          clearInterval(_countdownInterval);
          countdownEl.textContent = '00:00:00';
        }
      };

      updateTimer();
      _countdownInterval = setInterval(updateTimer, 1000);
    },


    // ═══════════════════════════════════════════
    // 9. CONFETTI
    // Called by: showGameOver(true)
    // Creates .confetti-container with .confetti-piece elements
    // ═══════════════════════════════════════════
    triggerConfetti: function () {
      // Check reduced motion preference
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
      }

      // Celebration burst first
      var burst = document.createElement('div');
      burst.className = 'celebration-burst';
      document.body.appendChild(burst);
      setTimeout(function () {
        if (burst.parentNode) burst.parentNode.removeChild(burst);
      }, 1200);

      // Confetti container
      var container = document.createElement('div');
      container.className = 'confetti-container';
      document.body.appendChild(container);

      // Colors
      var colors = [
        '#8B5CF6', '#EC4899', '#00C896',
        '#F5A623', '#3B82F6', '#EF4444',
        '#10B981', '#F59E0B', '#ffffff'
      ];

      // Shapes
      var shapes = ['confetti-square', 'confetti-circle', 'confetti-strip'];

      // Sway directions
      var sways = ['confetti-sway-left', 'confetti-sway-right', ''];

      var COUNT = 80;

      for (var i = 0; i < COUNT; i++) {
        var piece = document.createElement('div');

        // Random shape
        var shape = shapes[Math.floor(Math.random() * shapes.length)];
        var sway = sways[Math.floor(Math.random() * sways.length)];
        piece.className = 'confetti-piece ' + shape + ' ' + sway;

        // Random position
        piece.style.left = Math.random() * 100 + 'vw';

        // Random size 6-14px
        var size = 6 + Math.random() * 8;
        piece.style.width = size + 'px';
        piece.style.height = shape === 'confetti-strip' ? (size * 2) + 'px' : size + 'px';

        // Random color
        piece.style.backgroundColor =
          colors[Math.floor(Math.random() * colors.length)];

        // Random duration 2-4s
        var duration = 2 + Math.random() * 2;
        piece.style.setProperty('--confetti-duration', duration + 's');

        // Random delay 0-1.5s
        var delay = Math.random() * 1.5;
        piece.style.setProperty('--confetti-delay', delay + 's');

        container.appendChild(piece);
      }

      // Remove confetti after 6 seconds
      if (_confettiTimeout) clearTimeout(_confettiTimeout);
      _confettiTimeout = setTimeout(function () {
        if (container.parentNode) {
          container.parentNode.removeChild(container);
        }
      }, 6000);
    },


    // ═══════════════════════════════════════════
    // 10. LOADING SCREEN
    // ID: #loading-screen
    // Called by: app.js → init() start/end
    // ═══════════════════════════════════════════
    showLoadingScreen: function (show) {
      var screen = el('loading-screen');
      if (!screen) return;

      if (show) {
        screen.hidden = false;
        screen.removeAttribute('hidden');
        screen.classList.remove('hide');
      } else {
        screen.classList.add('hide');
        setTimeout(function () {
          screen.hidden = true;
        }, 450);
      }
    },


    // ═══════════════════════════════════════════
    // 11. RENDER NEWS FACT
    // ID: #news-fact .news-text
    // Called by: app.js → loadDailyFact()
    // ═══════════════════════════════════════════
    renderNewsFact: function (factText) {
      var newsEl = el('news-fact');
      if (!newsEl) return;

      var textEl = newsEl.querySelector('.news-text');
      if (!textEl) return;

      if (!factText) {
        textEl.textContent = window.i18n.t('news_fallback');
        return;
      }

      // Animate in
      textEl.style.opacity = '0';
      textEl.textContent = factText;

      requestAnimationFrame(function () {
        textEl.style.transition = 'opacity 0.4s ease';
        textEl.style.opacity = '1';
      });
    },


    // ═══════════════════════════════════════════
    // 12. UPDATE STREAK DISPLAY
    // ID: #streak-display .streak-count
    // Called by: app.js → after streak.update()
    // ═══════════════════════════════════════════
    updateStreakDisplay: function (streakData) {
      var countEl = document.querySelector('#streak-display .streak-count');
      if (!countEl) return;

      var newCount = streakData ? streakData.current : 0;
      var oldCount = parseInt(countEl.textContent) || 0;

      countEl.textContent = newCount;

      // Animate if increased
      if (newCount > oldCount) {
        tempClass(countEl, 'number-tick', 500);
        tempClass(el('streak-display'), 'streak-glow', 1500);
      }
    },


    // ═══════════════════════════════════════════
    // 13. UPDATE DAY NUMBER
    // ID: #day-number
    // Called by: app.js → init()
    // ═══════════════════════════════════════════
    updateDayNumber: function (n) {
      var dayEl = el('day-number');
      if (!dayEl) return;
      dayEl.textContent = window.i18n.t('day_label', { n: n });
    },


    // ═══════════════════════════════════════════
    // 14. AUTOCOMPLETE
    // IDs: #guess-input, #autocomplete-list, #input-clear-btn
    // Called by: app.js → init()
    // ═══════════════════════════════════════════
    initAutocomplete: function () {
      var input    = el('guess-input');
      var list     = el('autocomplete-list');
      var clearBtn = el('input-clear-btn');
      var form     = el('guess-form');

      if (!input || !list) return;

      var self = this;

      // ── Input handler ──────────────────────────
      input.addEventListener('input', function () {
        var query = input.value.trim();

        // Show/hide clear button
        if (clearBtn) {
          clearBtn.hidden = query.length === 0;
        }

        if (query.length < 1) {
          self._hideAutocomplete(list, input);
          return;
        }

        // Filter countries
        _autocompleteItems = self._filterCountries(query);
        _highlightedIndex = -1;

        if (_autocompleteItems.length === 0) {
          self._hideAutocomplete(list, input);
          return;
        }

        // Render dropdown
        self._renderAutocomplete(list, input, _autocompleteItems, query);
      });

      // ── Keyboard navigation ────────────────────
      input.addEventListener('keydown', function (e) {
        var isOpen = !list.hidden;

        switch (e.key) {
          case 'ArrowDown':
            e.preventDefault();
            if (!isOpen) {
              // Open with all countries on arrow down
              _autocompleteItems = self._filterCountries(input.value.trim() || '');
              if (_autocompleteItems.length > 0) {
                _highlightedIndex = -1;
                self._renderAutocomplete(list, input, _autocompleteItems, input.value.trim());
              }
            } else {
              _highlightedIndex = Math.min(
                _highlightedIndex + 1,
                _autocompleteItems.length - 1
              );
              self._updateHighlight(list);
            }
            break;

          case 'ArrowUp':
            e.preventDefault();
            if (isOpen) {
              _highlightedIndex = Math.max(_highlightedIndex - 1, -1);
              self._updateHighlight(list);
            }
            break;

          case 'Enter':
            if (isOpen && _highlightedIndex >= 0) {
              e.preventDefault();
              var selected = _autocompleteItems[_highlightedIndex];
              if (selected) {
                input.value = selected.name;
                self._hideAutocomplete(list, input);
                // Submit the form
                if (form) {
                  form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
                }
              }
            }
            break;

          case 'Escape':
            self._hideAutocomplete(list, input);
            input.value = '';
            if (clearBtn) clearBtn.hidden = true;
            break;

          case 'Tab':
            // Select highlighted item on tab
            if (isOpen && _highlightedIndex >= 0) {
              var tabSelected = _autocompleteItems[_highlightedIndex];
              if (tabSelected) {
                input.value = tabSelected.name;
                self._hideAutocomplete(list, input);
              }
            }
            break;
        }
      });

      // ── Close on outside click ─────────────────
      document.addEventListener('click', function (e) {
        if (!input.contains(e.target) && !list.contains(e.target)) {
          self._hideAutocomplete(list, input);
        }
      });

      // ── Touch outside to close ─────────────────
      document.addEventListener('touchstart', function (e) {
        if (!input.contains(e.target) && !list.contains(e.target)) {
          self._hideAutocomplete(list, input);
        }
      }, { passive: true });

      // ── Clear button ───────────────────────────
      if (clearBtn) {
        clearBtn.addEventListener('click', function () {
          input.value = '';
          clearBtn.hidden = true;
          self._hideAutocomplete(list, input);
          input.focus();
        });
      }

      console.log('[ui.js] Autocomplete initialized');
    },

    // ── Filter countries by query ──────────────
    _filterCountries: function (query) {
      if (!query) return [];
      var q = query.toLowerCase().trim();
      var results = [];

      for (var i = 0; i < window.COUNTRIES.length; i++) {
        var country = window.COUNTRIES[i];
        var name = country.name.toLowerCase();

        // Starts with query — highest priority
        if (name.startsWith(q)) {
          results.unshift(country);
        }
        // Contains query — lower priority
        else if (name.indexOf(q) !== -1) {
          results.push(country);
        }

        // Limit to 8 results for performance
        if (results.length >= 8) break;
      }

      return results;
    },

    // ── Render autocomplete dropdown ───────────
    _renderAutocomplete: function (list, input, items, query) {
      list.innerHTML = '';
      list.hidden = false;
      list.removeAttribute('hidden');
      list.classList.add('slide-down');

      input.setAttribute('aria-expanded', 'true');

      var self = this;
      var q = query.toLowerCase();

      for (var i = 0; i < items.length; i++) {
        var country = items[i];
        var li = document.createElement('li');
        li.className = 'autocomplete-item';
        li.setAttribute('role', 'option');
        li.setAttribute('data-index', i);
        li.setAttribute('data-id', country.id);

        // Flag
        var flagSpan = document.createElement('span');
        flagSpan.className = 'autocomplete-flag';
        flagSpan.setAttribute('aria-hidden', 'true');
        flagSpan.textContent = country.flag;

        // Name with highlight
        var nameSpan = document.createElement('span');
        nameSpan.className = 'autocomplete-name';

        var nameLower = country.name.toLowerCase();
        var matchIdx = nameLower.indexOf(q);

        if (matchIdx !== -1 && q.length > 0) {
          // Highlight matching portion
          var before = escapeHtml(country.name.substring(0, matchIdx));
          var match  = escapeHtml(country.name.substring(matchIdx, matchIdx + q.length));
          var after  = escapeHtml(country.name.substring(matchIdx + q.length));
          nameSpan.innerHTML = before + '<mark>' + match + '</mark>' + after;
        } else {
          nameSpan.textContent = country.name;
        }

        li.appendChild(flagSpan);
        li.appendChild(nameSpan);

        // Click handler
        (function (c, item) {
          item.addEventListener('click', function () {
            input.value = c.name;
            self._hideAutocomplete(list, input);
            // Submit form
            var form = el('guess-form');
            if (form) {
              form.dispatchEvent(
                new Event('submit', { bubbles: true, cancelable: true })
              );
            }
          });

          // Touch handler
          item.addEventListener('touchend', function (e) {
            e.preventDefault();
            input.value = c.name;
            self._hideAutocomplete(list, input);
            var form = el('guess-form');
            if (form) {
              form.dispatchEvent(
                new Event('submit', { bubbles: true, cancelable: true })
              );
            }
          });
        })(country, li);

        list.appendChild(li);
      }
    },

    // ── Update keyboard highlight ──────────────
    _updateHighlight: function (list) {
      var items = list.querySelectorAll('.autocomplete-item');

      for (var i = 0; i < items.length; i++) {
        items[i].classList.remove('highlighted');
        items[i].removeAttribute('aria-selected');
      }

      if (_highlightedIndex >= 0 && _highlightedIndex < items.length) {
        items[_highlightedIndex].classList.add('highlighted');
        items[_highlightedIndex].setAttribute('aria-selected', 'true');
        items[_highlightedIndex].scrollIntoView({ block: 'nearest' });
      }
    },

    // ── Hide autocomplete ──────────────────────
    _hideAutocomplete: function (list, input) {
      if (!list) return;
      list.hidden = true;
      list.innerHTML = '';
      _highlightedIndex = -1;
      _autocompleteItems = [];

      if (input) {
        input.setAttribute('aria-expanded', 'false');
      }
    },


    // ═══════════════════════════════════════════
    // 15. CLEAR INPUT
    // Called by: app.js → after successful guess
    // ═══════════════════════════════════════════
    clearInput: function () {
      var input    = el('guess-input');
      var list     = el('autocomplete-list');
      var clearBtn = el('input-clear-btn');

      if (input) input.value = '';
      if (clearBtn) clearBtn.hidden = true;
      this._hideAutocomplete(list, input);
    },


    // ═══════════════════════════════════════════
    // 16. SHOW MODAL
    // IDs: #modal-overlay, #how-to-play-modal
    // Called by: app.js event listeners
    // ═══════════════════════════════════════════
    showModal: function (show) {
      var overlay = el('modal-overlay');
      if (!overlay) return;

      if (show) {
        overlay.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';

        // Focus trap — focus first focusable element
        var modal = el('how-to-play-modal');
        if (modal) {
          setTimeout(function () {
            var focusable = modal.querySelector(
              'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            if (focusable) focusable.focus();
          }, 300);
        }
      } else {
        overlay.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';

        // Return focus to trigger button
        var triggerBtn = el('how-to-play-btn');
        if (triggerBtn) triggerBtn.focus();
      }
    },


    // ═══════════════════════════════════════════
    // 17. RESTORE GAME STATE
    // Called by: app.js → restoreGame()
    // Re-renders all past guesses from localStorage
    // ═══════════════════════════════════════════
    restoreGameState: function (guesses) {
      if (!guesses || !Array.isArray(guesses)) return;

      var self = this;

      // Re-render each guess row
      for (var i = 0; i < guesses.length; i++) {
        // Set staggered delay via CSS variable
        var delay = i * 150;

        (function (evalResult, attemptNum, rowDelay) {
          setTimeout(function () {
            self.renderAttemptRow(evalResult, attemptNum);

            // Re-add map marker
            if (self.map) {
              self.addGuessMarker(
                evalResult.guessLat,
                evalResult.guessLng,
                evalResult.guessName,
                evalResult.isCorrect
              );
            }
          }, rowDelay);
        })(guesses[i], i + 1, delay);
      }

      // Fit map to all markers after restore
      var self2 = this;
      setTimeout(function () {
        if (self2.markers.length > 0) {
          self2.fitMapBounds(self2.markers);
        }
      }, guesses.length * 150 + 200);

      // Update attempts remaining
      var remaining = window.MAX_GUESSES
        ? window.MAX_GUESSES - guesses.length
        : 6 - guesses.length;
      this.updateAttemptsRemaining(Math.max(0, remaining));
    },


    // ═══════════════════════════════════════════
    // 18. UPDATE SIDEBAR STATS
    // IDs: #stat-total-games, #stat-win-pct,
    //      #stat-streak, #stat-best-streak
    // Called by: showGameOver(), app.js init
    // ═══════════════════════════════════════════
    updateSidebarStats: function () {
      var stats = window.getStats ? window.getStats() : null;
      if (!stats) return;

      var streak = window.StreakManager ? window.StreakManager.data : null;

      var totalEl   = el('stat-total-games');
      var winPctEl  = el('stat-win-pct');
      var streakEl  = el('stat-streak');
      var bestEl    = el('stat-best-streak');

      if (totalEl) {
        totalEl.textContent = stats.totalGames;
        tempClass(totalEl, 'count-up', 800);
      }

      if (winPctEl) {
        var pct = stats.totalGames > 0
          ? Math.round((stats.totalWins / stats.totalGames) * 100)
          : 0;
        winPctEl.textContent = pct + '%';
        tempClass(winPctEl, 'count-up', 800);
      }

      if (streakEl) {
        streakEl.textContent = streak ? streak.current : stats.currentStreak;
        tempClass(streakEl, 'count-up', 800);
      }

      if (bestEl) {
        bestEl.textContent = streak ? streak.best : stats.bestStreak;
        tempClass(bestEl, 'count-up', 800);
      }
    },


    // ═══════════════════════════════════════════
    // 19. UPDATE DISTRIBUTION BARS
    // ID: #guess-distribution .dist-bar
    // Called by: showGameOver(), app.js init
    // ═══════════════════════════════════════════
    updateDistribution: function () {
      var container = el('guess-distribution');
      if (!container) return;

      var stats = window.getStats ? window.getStats() : null;
      if (!stats) return;

      var dist = stats.guessDistribution || {};

      // Find max count for scaling
      var max = 0;
      for (var g = 1; g <= 6; g++) {
        if ((dist[g] || 0) > max) max = dist[g] || 0;
      }
      if (max === 0) max = 1; // Prevent division by zero

      // Get current game's guess count (to highlight)
      var currentGuesses = window.GameState
        ? window.GameState.guesses.length
        : 0;
      var currentWon = window.GameState
        ? window.GameState.gameStatus === 'won'
        : false;

      for (var n = 1; n <= 6; n++) {
        var row = container.querySelector('[data-guess="' + n + '"]');
        if (!row) continue;

        var bar = row.querySelector('.dist-bar');
        if (!bar) continue;

        var count = dist[n] || 0;
        var widthPct = Math.round((count / max) * 100);
        // Minimum width so the bar is always visible
        widthPct = count > 0 ? Math.max(widthPct, 8) : 0;

        // Set CSS variable and animate
        bar.style.setProperty('--dist-width', widthPct + '%');
        bar.style.setProperty(
          '--dist-delay',
          (n * 100) + 'ms'
        );
        bar.classList.add('dist-bar-grow');

        // Update count text
        var countSpan = bar.querySelector('span');
        if (countSpan) countSpan.textContent = count;

        // Highlight current game's bar
        if (currentWon && n === currentGuesses) {
          bar.classList.add('highlight');
        }
      }
    },


    // ═══════════════════════════════════════════
    // 20. DISABLE INPUT (after game over)
    // Called by: app.js → handleGameEnd()
    // ═══════════════════════════════════════════
    disableInput: function () {
      var input     = el('guess-input');
      var submitBtn = el('guess-submit-btn');

      if (input) {
        input.disabled = true;
        input.placeholder = 'Game over for today!';
      }
      if (submitBtn) {
        submitBtn.disabled = true;
      }
    },

    // ═══════════════════════════════════════════
    // 21. SHOW SHAKE (invalid input)
    // Called by: app.js → handleGuessSubmit()
    // ═══════════════════════════════════════════
    shakeInput: function () {
      var input = el('guess-input');
      var form  = el('guess-form');
      var target = form || input;

      if (target) {
        target.classList.remove('shake');
        // Force reflow to restart animation
        void target.offsetWidth;
        target.classList.add('shake');
        setTimeout(function () {
          target.classList.remove('shake');
        }, 500);
      }
    }

  }; // end UIController


  console.log('[ui.js] UI Controller loaded');

})();
