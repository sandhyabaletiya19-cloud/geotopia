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
       updateSidebarStats(), updateDistribution(),
       disableInput(), shakeInput(),
       renderHints()
     }
   ═══════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ─────────────────────────────────────────────
     INTERNAL STATE
     ───────────────────────────────────────────── */
  var _autocompleteItems = [];
  var _highlightedIndex  = -1;
  var _toastQueue        = [];
  var _confettiTimeout   = null;
  var _countdownInterval = null;

  /* ─────────────────────────────────────────────
     TILE LAYER — CartoDB Dark (no key needed)
     ───────────────────────────────────────────── */
  var TILE_URL  = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';
  var TILE_ATTR = '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>';

  /* ─────────────────────────────────────────────
     HINT CONFIG — matches SECTION 6 spec
     ───────────────────────────────────────────── */
  var HINT_CONFIG = {
    1: { color: 'hint-blue',   label: '💡 Fun Fact'   },
    2: { color: 'hint-orange', label: '🧭 Direction'  },
    3: { color: 'hint-green',  label: '🌡️ Climate'    },
    4: { color: 'hint-purple', label: '🏆 Sports'     },
    5: { color: 'hint-pink',   label: '📍 Continent'  },
    6: { color: 'hint-red',    label: '🔤 Last Clue'  }
  };

  /* ─────────────────────────────────────────────
     HELPERS
     ───────────────────────────────────────────── */
  function el(id) { return document.getElementById(id); }

  function qs(selector, parent) {
    return (parent || document).querySelector(selector);
  }

  function tempClass(element, className, duration) {
    if (!element) return;
    element.classList.add(className);
    setTimeout(function () {
      if (element) element.classList.remove(className);
    }, duration || 600);
  }

  function cleanupAnimation(element, delay) {
    setTimeout(function () {
      if (element) element.classList.add('animation-done');
    }, delay || 600);
  }

  function escapeHtml(str) {
    if (!str) return '';
    var d = document.createElement('div');
    d.appendChild(document.createTextNode(String(str)));
    return d.innerHTML;
  }

  /* Make a DOM element shorthand */
  function make(tag, className, text) {
    var e = document.createElement(tag);
    if (className) e.className = className;
    if (text !== undefined) e.textContent = text;
    return e;
  }

  /* ─────────────────────────────────────────────
     HINT BUILDER
     Builds hint text for a given hint number
     using the country data fields from data.js
     ───────────────────────────────────────────── */
  function buildHintText(hintNumber, targetCountry, guessedCountry) {
    if (!targetCountry) return null;

    switch (hintNumber) {

      /* ── HINT 1: Fun fact / national animal / flag ── */
      case 1:
        return targetCountry.hint1_fact || null;

      /* ── HINT 2: Direction from guessed → target ── */
      case 2:
        if (!guessedCountry) return null;
        var bearing = _calculateBearing(
          guessedCountry.lat, guessedCountry.lng,
          targetCountry.lat,  targetCountry.lng
        );
        var dirText = _bearingToDirection(bearing);
        return '🧭 Head ' + dirText +
               ' from ' + guessedCountry.name +
               ' to reach the answer';

      /* ── HINT 3: Climate + Landlocked ── */
      case 3:
        var climate  = targetCountry.climate || 'Temperate';
        var ll       = targetCountry.landlocked;
        var island   = targetCountry.island;
        var llText   = ll     ? '🏔️ Landlocked'
                     : island ? '🏝️ Island nation'
                     :          '🏖️ Has coastline';
        var climIcon = _climateIcon(climate);
        return climIcon + ' ' + climate + ' climate  •  ' + llText;

      /* ── HINT 4: Sports ── */
      case 4:
        return targetCountry.hint4_sports || null;

      /* ── HINT 5: Continent ── */
      case 5:
        return '📍 Located in ' + targetCountry.continent;

      /* ── HINT 6: First + last letter + landmark ── */
      case 6:
        var name    = targetCountry.name;
        var first   = name.charAt(0).toUpperCase();
        var last    = name.charAt(name.length - 1).toUpperCase();
        var dashes  = Array(Math.max(0, name.length - 2)).fill('—').join('');
        var letters = '🔤 ' + first + ' ' + dashes + ' ' + last;
        var landmark = targetCountry.hint6_landmark || '';
        return letters + (landmark ? '\n' + landmark : '');

      default:
        return null;
    }
  }

  /* Climate icon helper */
  function _climateIcon(climate) {
    var map = {
      'Tropical':     '🌴',
      'Arid':         '🏜️',
      'Temperate':    '🌤️',
      'Continental':  '❄️',
      'Polar':        '🧊',
      'Mediterranean':'☀️'
    };
    return map[climate] || '🌡️';
  }

  /* Bearing degrees → compass direction */
  function _bearingToDirection(deg) {
    var dirs = [
      'North', 'North-East', 'East', 'South-East',
      'South', 'South-West', 'West', 'North-West'
    ];
    var idx = Math.round(((deg % 360) + 360) % 360 / 45) % 8;
    return dirs[idx];
  }

  /* Calculate bearing between two lat/lng points */
  function _calculateBearing(lat1, lng1, lat2, lng2) {
    var toRad = function (d) { return d * Math.PI / 180; };
    var dLng  = toRad(lng2 - lng1);
    var rLat1 = toRad(lat1);
    var rLat2 = toRad(lat2);
    var y = Math.sin(dLng) * Math.cos(rLat2);
    var x = Math.cos(rLat1) * Math.sin(rLat2) -
            Math.sin(rLat1) * Math.cos(rLat2) * Math.cos(dLng);
    var bearing = Math.atan2(y, x) * 180 / Math.PI;
    return (bearing + 360) % 360;
  }

  /* ─────────────────────────────────────────────
     CREATE A HINT CHIP DOM ELEMENT
     ───────────────────────────────────────────── */
  function makeHintChip(colorClass, text, isWarning) {
    var chip = make('span', 'hint-chip ' + (isWarning ? 'hint-warning' : colorClass));
    chip.textContent = text;
    chip.setAttribute('data-lazy', 'scale');
    /* Trigger in-view after paint */
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        chip.classList.add('in-view');
      });
    });
    return chip;
  }

  /* ─────────────────────────────────────────────
     CREATE DISTANCE CHIP
     Shows how far the guessed country is
     ───────────────────────────────────────────── */
  function makeDistanceChip(distanceFormatted, directionLabel) {
    var text = '📏 ' + distanceFormatted;
    if (directionLabel) text += '  ' + directionLabel;
    return makeHintChip('hint-distance', text, false);
  }


  /* ══════════════════════════════════════════════════════════
     UIController — exported to window
     ══════════════════════════════════════════════════════════ */
  window.UIController = {

    /** Leaflet map instance */
    map: null,

    /** All markers currently on the map */
    markers: [],

    /* ════════════════════════════════════════════
       1. MAP INIT
       ID: #game-map
       Called by: app.js → init()
       ════════════════════════════════════════════ */
    initMap: function () {
      var mapEl = el('game-map');
      if (!mapEl) { console.error('[ui.js] #game-map not found'); return; }

      this.map = L.map('game-map', {
        center: [20, 0],
        zoom: 2,
        minZoom: 1,
        maxZoom: 8,
        zoomControl: true,
        attributionControl: true,
        worldCopyJump: false,
        tap: true,
        tapTolerance: 15,
        touchZoom: true,
        bounceAtZoomLimits: false,
        doubleClickZoom: false
      });

      L.tileLayer(TILE_URL, {
        attribution: TILE_ATTR,
        subdomains: 'abcd',
        maxZoom: 19,
        crossOrigin: true
      }).addTo(this.map);

      this.map.zoomControl.setPosition('bottomright');

      /* Fix map size after CSS renders (iOS needs this) */
      var self = this;
      setTimeout(function () { if (self.map) self.map.invalidateSize(); }, 150);
      window.addEventListener('resize', function () {
        if (self.map) self.map.invalidateSize();
      });

      console.log('[ui.js] Map initialized');
    },


    /* ════════════════════════════════════════════
       2. ADD GUESS MARKER
       Called by: app.js → handleGuessSubmit()
       ════════════════════════════════════════════ */
    addGuessMarker: function (lat, lng, label, isCorrect) {
      if (!this.map) return null;

      var color  = isCorrect ? '#34D399' : '#FB7185';
      var radius = isCorrect ? 14 : 10;

      var marker = L.circleMarker([lat, lng], {
        radius:      radius,
        fillColor:   color,
        color:       '#ffffff',
        weight:      2.5,
        opacity:     1,
        fillOpacity: 0.92
      });

      marker.bindPopup(
        '<strong style="color:#F8FAFC;font-family:Inter,sans-serif;font-size:13px">' +
        escapeHtml(label) + '</strong>',
        { className: 'dark-popup', maxWidth: 200 }
      );

      marker.addTo(this.map);
      this.markers.push(marker);

      /* Pulse animation */
      var markerEl = marker.getElement ? marker.getElement() : null;
      if (markerEl) {
        markerEl.classList.add(isCorrect ? 'marker-ping-green' : 'marker-ping-red');
        cleanupAnimation(markerEl, 1200);
      }

      setTimeout(function () {
        marker.openPopup();
        setTimeout(function () { marker.closePopup(); }, 2200);
      }, 350);

      return marker;
    },


    /* ════════════════════════════════════════════
       3. FIT MAP BOUNDS
       Called by: app.js → after each guess
       ════════════════════════════════════════════ */
    fitMapBounds: function (markers) {
      if (!this.map || !markers || !markers.length) return;

      if (markers.length === 1) {
        var pos = markers[0].getLatLng();
        this.map.setView(pos, 4, { animate: true, duration: 0.9 });
        return;
      }

      var group = L.featureGroup(markers);
      this.map.fitBounds(group.getBounds(), {
        padding: [48, 48],
        animate: true,
        duration: 0.9,
        maxZoom: 5
      });
    },


    /* ════════════════════════════════════════════
       4. RENDER ATTEMPT ROW
       ID: #attempts-container
       Called by: app.js → handleGuessSubmit()

       Layout (5 columns):
         Country | Distance | Direction | Continent | Size

       Hints shown UNDER the row via .hint-chips-row
       ════════════════════════════════════════════ */
    renderAttemptRow: function (evalResult, attemptNumber, targetCountry) {
      var container = el('attempts-container');
      if (!container) return;

      /* Hide empty state */
      var emptyState = el('attempts-empty');
      if (emptyState) { emptyState.hidden = true; emptyState.setAttribute('aria-hidden', 'true'); }

      /* Show column headers */
      var headers = el('attempt-headers');
      if (headers) { headers.hidden = false; headers.removeAttribute('hidden'); }

      /* ── Build row ── */
      var row = document.createElement('div');
      row.className = 'attempt-row lazy-load';
      row.setAttribute('role', 'listitem');
      row.setAttribute('aria-label',
        'Guess ' + attemptNumber + ': ' + evalResult.guessName +
        ', ' + evalResult.distanceFormatted + ' away'
      );
      row.setAttribute('data-attempt', attemptNumber);

      if (evalResult.isCorrect)  row.classList.add('correct-row');
      else if (evalResult.distanceFeedback &&
               (evalResult.distanceFeedback.tier === 'burning' ||
                evalResult.distanceFeedback.tier === 'hot')) {
        row.classList.add('close-row');
      }

      /* ── Cell 1: Country Flag + Name ── */
      var cellCountry = make('div', 'attempt-cell cell-country');

      var flagEl  = make('span', 'cell-flag');
      flagEl.setAttribute('aria-hidden', 'true');
      flagEl.textContent = evalResult.guessFlag || '🏳️';

      var nameWrap = make('div', 'cell-name-wrap');
      var nameLabel = make('span', 'cell-label', evalResult.guessName);
      nameLabel.title = evalResult.guessName;

      /* Subregion as subtle sub-label */
      var guessData = window.COUNTRY_LOOKUP
        ? window.COUNTRY_LOOKUP[evalResult.guessId]
        : null;
      if (guessData && guessData.subregion) {
        var subLabel = make('span', 'cell-sub', guessData.subregion);
        nameWrap.appendChild(nameLabel);
        nameWrap.appendChild(subLabel);
      } else {
        nameWrap.appendChild(nameLabel);
      }

      cellCountry.appendChild(flagEl);
      cellCountry.appendChild(nameWrap);

      /* ── Cell 2: Distance ── */
      var distColor = evalResult.distanceFeedback
        ? 'cell-' + evalResult.distanceFeedback.color
        : 'cell-wrong';

      var cellDistance = make('div', 'attempt-cell cell-distance ' + distColor + ' flip-in flip-delay-1');

      var distEmoji = make('span', 'cell-emoji');
      distEmoji.setAttribute('aria-hidden', 'true');
      distEmoji.textContent = (evalResult.distanceFeedback && evalResult.distanceFeedback.emoji)
        ? evalResult.distanceFeedback.emoji : '📏';

      var distLabel = make('span', 'cell-label', evalResult.distanceFormatted);
      var distSub   = make('span', 'cell-sub',
        evalResult.distanceFeedback ? evalResult.distanceFeedback.label : '');

      cellDistance.appendChild(distEmoji);
      cellDistance.appendChild(distLabel);
      cellDistance.appendChild(distSub);

      /* ── Cell 3: Direction Arrow ── */
      var cellDirection = make('div', 'attempt-cell cell-direction flip-in flip-delay-2');

      var arrowEl = make('span', 'cell-emoji arrow-spin');
      if (evalResult.bearingRotation !== undefined) {
        arrowEl.style.setProperty('--arrow-rotation', evalResult.bearingRotation + 'deg');
      }
      arrowEl.setAttribute('aria-label', 'Direction: ' + (evalResult.direction || ''));
      arrowEl.textContent = evalResult.arrow || '➡️';

      var dirSub = make('span', 'cell-sub');
      dirSub.setAttribute('aria-hidden', 'true');
      /* Show two-letter compass e.g. "SE" */
      var dirShort = (evalResult.direction || '').replace('-', '').toUpperCase().substring(0, 2);
      dirSub.textContent = dirShort;

      cellDirection.appendChild(arrowEl);
      cellDirection.appendChild(dirSub);

      /* ── Cell 4: Continent Match ── */
      var contColor = evalResult.continentMatch
        ? 'cell-' + evalResult.continentMatch.color
        : 'cell-wrong';

      var cellContinent = make('div', 'attempt-cell cell-continent ' + contColor + ' flip-in flip-delay-3');

      var contEmoji = make('span', 'cell-emoji');
      contEmoji.setAttribute('aria-label',
        'Continent: ' + (evalResult.continentMatch ? evalResult.continentMatch.message : ''));
      contEmoji.textContent = evalResult.continentMatch
        ? evalResult.continentMatch.emoji : '🌍';

      cellContinent.appendChild(contEmoji);

      /* ── Cell 5: Size Comparison ── */
      var sizeClass = 'cell-wrong';
      if (evalResult.sizeComparison) {
        if (evalResult.sizeComparison.type === 'same') sizeClass = 'cell-correct';
        else if (evalResult.sizeComparison.ratio < 2)  sizeClass = 'cell-close';
      }

      var cellSize = make('div', 'attempt-cell cell-size flip-in flip-delay-4 ' + sizeClass);

      var sizeEmoji = make('span', 'cell-emoji');
      sizeEmoji.setAttribute('aria-hidden', 'true');
      sizeEmoji.textContent = evalResult.sizeComparison
        ? evalResult.sizeComparison.emoji : '📐';

      var sizeSub = make('span', 'cell-sub');
      if (evalResult.sizeComparison && evalResult.sizeComparison.type !== 'same') {
        sizeSub.textContent =
          (evalResult.sizeComparison.type === 'bigger' ? '▲' : '▼') +
          evalResult.sizeComparison.ratio + 'x';
      } else {
        sizeSub.textContent = '≈';
      }

      cellSize.appendChild(sizeEmoji);
      cellSize.appendChild(sizeSub);

      /* ── Assemble main cells ── */
      row.appendChild(cellCountry);
      row.appendChild(cellDistance);
      row.appendChild(cellDirection);
      row.appendChild(cellContinent);
      row.appendChild(cellSize);

      /* ── Hint chips row (unlocked after this guess) ── */
      this._appendHintChips(row, attemptNumber, evalResult, targetCountry);

      /* ── Append + lazy-load fade-in ── */
      container.appendChild(row);

      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          row.classList.add('loaded');
        });
      });

      /* Cleanup flip animations */
      var flips = row.querySelectorAll('.flip-in');
      for (var f = 0; f < flips.length; f++) {
        cleanupAnimation(flips[f], 900 + f * 80);
      }

      /* Scroll newest row into view */
      setTimeout(function () {
        row.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 220);
    },


    /* ════════════════════════════════════════════
       RENDER HINT CHIPS (internal)
       Appends hint chips below the attempt row.

       Hint unlocks:
         After guess 1 → hint 1 shown on row 1
         After guess 2 → hint 2 shown on row 2
         etc.
       ════════════════════════════════════════════ */
    _appendHintChips: function (row, attemptNumber, evalResult, targetCountry) {
      /* We only show the hint for THIS attempt number.
         All previous hints remain on their own rows (already rendered). */

      var hintNumber = attemptNumber; /* hint N unlocks after guess N */
      if (hintNumber < 1 || hintNumber > 6) return;

      var chipsRow = make('div', 'hint-chips-row');
      chipsRow.setAttribute('data-hint', hintNumber);
      chipsRow.style.setProperty('--chip-delay', (hintNumber * 120) + 'ms');

      var cfg = HINT_CONFIG[hintNumber];
      if (!cfg) return;

      /* ── Distance chip (always shown, changes per guess) ── */
      if (!evalResult.isCorrect && evalResult.distanceFormatted) {
        var dirLabel = evalResult.direction
          ? '↗ ' + evalResult.direction
          : '';
        chipsRow.appendChild(makeDistanceChip(evalResult.distanceFormatted, dirLabel));
      }

      /* ── Hint-specific chip ── */
      var hintText = buildHintText(
        hintNumber,
        targetCountry,
        guessDataFor(evalResult.guessId)
      );

      if (!hintText) {
        /* No hint available → skip */
        if (!chipsRow.childElementCount) return;
      } else {

        /* Hint 6 has two lines: letter pattern + landmark */
        if (hintNumber === 6) {
          var lines = hintText.split('\n');

          /* Letter pattern chip */
          var letterChip = makeHintChip(cfg.color, lines[0], false);
          chipsRow.appendChild(letterChip);

          /* Landmark chip */
          if (lines[1]) {
            var landmarkChip = makeHintChip('hint-gold', lines[1], false);
            chipsRow.appendChild(landmarkChip);
          }

          /* Warning chip */
          var warnChip = makeHintChip('', '⚠️ LAST CHANCE — Think hard!', true);
          chipsRow.appendChild(warnChip);

        } else if (hintNumber === 3) {
          /* Hint 3: two chips — climate + landlocked */
          var parts = hintText.split('  •  ');
          parts.forEach(function (p, idx) {
            var chipClass = idx === 0 ? 'hint-blue' : 'hint-green';
            chipsRow.appendChild(makeHintChip(chipClass, p.trim(), false));
          });

        } else {
          /* Standard single chip */
          var isWarningHint = false;
          var mainChip = makeHintChip(cfg.color, hintText, isWarningHint);
          chipsRow.appendChild(mainChip);
        }
      }

      /* Only append if we have chips */
      if (chipsRow.childElementCount > 0) {
        /* Span full row width */
        chipsRow.style.gridColumn = '1 / -1';
        row.appendChild(chipsRow);
      }
    },


    /* ════════════════════════════════════════════
       5. UPDATE ATTEMPTS REMAINING
       ID: #attempts-remaining
       Called by: app.js → after each guess
       ════════════════════════════════════════════ */
    updateAttemptsRemaining: function (n) {
      var remainEl = el('attempts-remaining');
      if (!remainEl) return;

      var text;
      if (window.i18n) {
        if (n === 1)      text = window.i18n.t('attempts_left_one');
        else if (n === 0) text = window.i18n.t('attempts_left_zero');
        else              text = window.i18n.t('attempts_left', { n: n });
      } else {
        text = n === 1 ? '1 guess left!' : n + ' guesses left';
      }

      remainEl.textContent = text;
      tempClass(remainEl, 'pop-in', 400);

      /* Color coding */
      remainEl.style.color = '';
      if (n <= 0)      remainEl.style.color = 'var(--candy-red)';
      else if (n === 1) remainEl.style.color = 'var(--candy-red)';
      else if (n === 2) remainEl.style.color = 'var(--game-yellow)';
    },


    /* ════════════════════════════════════════════
       6. SHOW TOAST
       ID: #toast-container
       Called by: app.js → various events
       ════════════════════════════════════════════ */
    showToast: function (message, type, duration) {
      var container = el('toast-container');
      if (!container) return;

      type     = type     || 'info';
      duration = duration || 3200;

      var toast = make('div', 'toast ' + type);
      toast.setAttribute('role', 'alert');
      toast.setAttribute('aria-live', 'polite');
      toast.textContent = message;

      container.appendChild(toast);
      _toastQueue.push(toast);

      var removeToast = function () {
        toast.classList.add('removing');
        setTimeout(function () {
          if (toast.parentNode) toast.parentNode.removeChild(toast);
          var idx = _toastQueue.indexOf(toast);
          if (idx > -1) _toastQueue.splice(idx, 1);
        }, 320);
      };

      var timer = setTimeout(removeToast, duration);
      toast.addEventListener('click', function () { clearTimeout(timer); removeToast(); });

      /* Max 3 toasts at once */
      while (_toastQueue.length > 3) {
        var oldest = _toastQueue.shift();
        if (oldest && oldest.parentNode) oldest.parentNode.removeChild(oldest);
      }
    },


    /* ════════════════════════════════════════════
       7. SHOW GAME OVER BANNER
       ID: #game-over-banner
       Called by: app.js → handleGameEnd()
       ════════════════════════════════════════════ */
    showGameOver: function (won, answer) {
      var banner = el('game-over-banner');
      if (!banner) return;

      banner.hidden = false;
      banner.removeAttribute('hidden');

      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          banner.classList.add('visible');
        });
      });

      if (won) {
        var wonPanel = el('game-over-won');
        if (wonPanel) {
          wonPanel.hidden = false;
          wonPanel.removeAttribute('hidden');
          tempClass(wonPanel, 'bounce-in', 800);
        }

        var winMsg = el('game-over-win-message');
        if (winMsg && window.i18n) {
          var numGuesses = window.GameState ? window.GameState.guesses.length : 1;
          winMsg.textContent = window.i18n.t('correct_message', { n: numGuesses });
        }

        this.triggerConfetti();
        document.body.classList.add('game-won');

      } else {
        var lostPanel = el('game-over-lost');
        if (lostPanel) {
          lostPanel.hidden = false;
          lostPanel.removeAttribute('hidden');
          tempClass(lostPanel, 'bounce-in', 800);
        }

        /* Reveal answer with flag */
        var answerEl = el('game-over-answer');
        if (answerEl && answer) {
          answerEl.textContent = answer.flag + ' ' + answer.name;
          tempClass(answerEl, 'pop-in', 600);
        }

        document.body.classList.add('game-lost');
      }

      /* Streak counter in banner */
      var streakCountEl = el('game-over-streak-count');
      if (streakCountEl && window.StreakManager) {
        streakCountEl.textContent = window.StreakManager.data.current;
        tempClass(streakCountEl, 'number-tick', 500);
      }

      /* Share button wiggle */
      var shareBtn = el('share-btn');
      if (shareBtn) tempClass(shareBtn, 'wiggle', 2000);

      /* Start countdown */
      this._startCountdown();

      /* Update sidebar */
      if (window.GameState) {
        this.updateSidebarStats();
        this.updateDistribution();
      }
    },


    /* ════════════════════════════════════════════
       COUNTDOWN TIMER (internal)
       ID: #next-game-countdown
       ════════════════════════════════════════════ */
    _startCountdown: function () {
      var countdownEl = el('next-game-countdown');
      if (!countdownEl) return;

      if (_countdownInterval) clearInterval(_countdownInterval);

      var updateTimer = function () {
        var ms = window.getMillisUntilNextGame
          ? window.getMillisUntilNextGame()
          : 0;
        var formatted = window.formatCountdown
          ? window.formatCountdown(ms)
          : '00:00:00';
        countdownEl.textContent = formatted;
        if (ms <= 0) {
          clearInterval(_countdownInterval);
          countdownEl.textContent = '00:00:00';
        }
      };

      updateTimer();
      _countdownInterval = setInterval(updateTimer, 1000);
    },


    /* ════════════════════════════════════════════
       8. CONFETTI — Candy-crush celebration
       Called by: showGameOver(true)
       ════════════════════════════════════════════ */
    triggerConfetti: function () {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      /* Burst flash */
      var burst = make('div', 'celebration-burst');
      document.body.appendChild(burst);
      setTimeout(function () { if (burst.parentNode) burst.parentNode.removeChild(burst); }, 1200);

      /* Container */
      var container = make('div', 'confetti-container');
      document.body.appendChild(container);

      /* Candy palette */
      var colors = [
        '#A855F7','#F472B6','#34D399','#FBBF24',
        '#60A5FA','#FB7185','#10B981','#F59E0B',
        '#C084FC','#22D3EE','#ffffff'
      ];
      var shapes = ['confetti-square', 'confetti-circle', 'confetti-strip'];
      var sways  = ['confetti-sway-left', 'confetti-sway-right', ''];

      for (var i = 0; i < 90; i++) {
        var piece = make('div',
          'confetti-piece ' +
          shapes[Math.floor(Math.random() * shapes.length)] + ' ' +
          sways[Math.floor(Math.random() * sways.length)]
        );

        piece.style.left = (Math.random() * 100) + 'vw';

        var size = 6 + Math.random() * 9;
        piece.style.width  = size + 'px';
        piece.style.height = piece.className.indexOf('confetti-strip') !== -1
          ? (size * 2.5) + 'px'
          : size + 'px';

        piece.style.backgroundColor =
          colors[Math.floor(Math.random() * colors.length)];

        piece.style.setProperty('--confetti-duration', (2 + Math.random() * 2.5) + 's');
        piece.style.setProperty('--confetti-delay',    (Math.random() * 1.8) + 's');

        container.appendChild(piece);
      }

      if (_confettiTimeout) clearTimeout(_confettiTimeout);
      _confettiTimeout = setTimeout(function () {
        if (container.parentNode) container.parentNode.removeChild(container);
      }, 7000);
    },


    /* ════════════════════════════════════════════
       9. LOADING SCREEN
       ID: #loading-screen
       Called by: app.js → init()
       ════════════════════════════════════════════ */
    showLoadingScreen: function (show) {
      var screen = el('loading-screen');
      if (!screen) return;

      if (show) {
        screen.hidden = false;
        screen.removeAttribute('hidden');
        screen.classList.remove('hide');
      } else {
        screen.classList.add('hide');
        setTimeout(function () { screen.hidden = true; }, 500);
      }
    },


    /* ════════════════════════════════════════════
       10. RENDER NEWS FACT BANNER
       ID: #news-fact .news-text
       Called by: app.js → loadDailyFact()
       ════════════════════════════════════════════ */
    renderNewsFact: function (factText) {
      var newsEl = el('news-fact');
      if (!newsEl) return;

      var textEl = qs('.news-text', newsEl);
      if (!textEl) return;

      var text = factText ||
        (window.i18n ? window.i18n.t('news_fallback') : 'Today\'s geography mystery awaits!');

      textEl.style.opacity = '0';
      textEl.textContent   = text;

      requestAnimationFrame(function () {
        textEl.style.transition = 'opacity 0.45s ease';
        textEl.style.opacity    = '1';
      });
    },


    /* ════════════════════════════════════════════
       11. UPDATE STREAK DISPLAY
       ID: #streak-display .streak-count
       Called by: app.js → after streak.update()
       ════════════════════════════════════════════ */
    updateStreakDisplay: function (streakData) {
      var countEl = qs('#streak-display .streak-count');
      if (!countEl) return;

      var newCount = streakData ? streakData.current : 0;
      var oldCount = parseInt(countEl.textContent, 10) || 0;

      countEl.textContent = newCount;

      if (newCount > oldCount) {
        tempClass(countEl, 'number-tick', 500);
        tempClass(el('streak-display'), 'streak-glow', 1600);
      }
    },


    /* ════════════════════════════════════════════
       12. UPDATE DAY NUMBER
       ID: #day-number
       Called by: app.js → init()
       ════════════════════════════════════════════ */
    updateDayNumber: function (n) {
      var dayEl = el('day-number');
      if (!dayEl) return;
      dayEl.textContent = window.i18n
        ? window.i18n.t('day_label', { n: n })
        : 'Day #' + n;
    },


    /* ════════════════════════════════════════════
       13. AUTOCOMPLETE
       IDs: #guess-input, #autocomplete-list, #input-clear-btn
       Called by: app.js → init()
       ════════════════════════════════════════════ */
    initAutocomplete: function () {
      var input    = el('guess-input');
      var list     = el('autocomplete-list');
      var clearBtn = el('input-clear-btn');
      var form     = el('guess-form');

      if (!input || !list) return;

      var self = this;

      /* ── Input ── */
      input.addEventListener('input', function () {
        var query = input.value.trim();
        if (clearBtn) clearBtn.hidden = query.length === 0;

        if (query.length < 1) { self._hideAutocomplete(list, input); return; }

        _autocompleteItems = self._filterCountries(query);
        _highlightedIndex  = -1;

        if (!_autocompleteItems.length) { self._hideAutocomplete(list, input); return; }
        self._renderAutocomplete(list, input, _autocompleteItems, query);
      });

      /* ── Keyboard ── */
      input.addEventListener('keydown', function (e) {
        var isOpen = !list.hidden;

        if (e.key === 'ArrowDown') {
          e.preventDefault();
          if (!isOpen) {
            _autocompleteItems = self._filterCountries(input.value.trim() || '');
            if (_autocompleteItems.length) {
              _highlightedIndex = -1;
              self._renderAutocomplete(list, input, _autocompleteItems, input.value.trim());
            }
          } else {
            _highlightedIndex = Math.min(_highlightedIndex + 1, _autocompleteItems.length - 1);
            self._updateHighlight(list);
          }
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          if (isOpen) {
            _highlightedIndex = Math.max(_highlightedIndex - 1, -1);
            self._updateHighlight(list);
          }
        } else if (e.key === 'Enter') {
          if (isOpen && _highlightedIndex >= 0) {
            e.preventDefault();
            var selected = _autocompleteItems[_highlightedIndex];
            if (selected) {
              input.value = selected.name;
              self._hideAutocomplete(list, input);
              if (form) form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
            }
          }
        } else if (e.key === 'Escape') {
          self._hideAutocomplete(list, input);
          input.value = '';
          if (clearBtn) clearBtn.hidden = true;
        } else if (e.key === 'Tab') {
          if (isOpen && _highlightedIndex >= 0) {
            var tabSel = _autocompleteItems[_highlightedIndex];
            if (tabSel) { input.value = tabSel.name; self._hideAutocomplete(list, input); }
          }
        }
      });

      /* ── Close on outside interaction ── */
      document.addEventListener('click', function (e) {
        if (!input.contains(e.target) && !list.contains(e.target))
          self._hideAutocomplete(list, input);
      });
      document.addEventListener('touchstart', function (e) {
        if (!input.contains(e.target) && !list.contains(e.target))
          self._hideAutocomplete(list, input);
      }, { passive: true });

      /* ── Clear button ── */
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

    _filterCountries: function (query) {
      if (!query) return [];
      var q       = query.toLowerCase().trim();
      var starts  = [];
      var contains= [];

      for (var i = 0; i < window.COUNTRIES.length; i++) {
        var c    = window.COUNTRIES[i];
        var name = c.name.toLowerCase();
        if (name.startsWith(q))          starts.push(c);
        else if (name.indexOf(q) !== -1) contains.push(c);
        if (starts.length + contains.length >= 10) break;
      }

      return starts.concat(contains).slice(0, 8);
    },

    _renderAutocomplete: function (list, input, items, query) {
      list.innerHTML = '';
      list.hidden    = false;
      list.removeAttribute('hidden');
      input.setAttribute('aria-expanded', 'true');

      var self = this;
      var q    = query.toLowerCase();

      items.forEach(function (country, i) {
        var li = make('li', 'autocomplete-item');
        li.setAttribute('role', 'option');
        li.setAttribute('data-index', i);
        li.setAttribute('data-id', country.id);

        var flagSpan = make('span', 'autocomplete-flag');
        flagSpan.setAttribute('aria-hidden', 'true');
        flagSpan.textContent = country.flag;

        var nameSpan   = make('span', 'autocomplete-name');
        var nameLower  = country.name.toLowerCase();
        var matchIdx   = nameLower.indexOf(q);

        if (matchIdx !== -1 && q.length > 0) {
          var before = escapeHtml(country.name.substring(0, matchIdx));
          var match  = escapeHtml(country.name.substring(matchIdx, matchIdx + q.length));
          var after  = escapeHtml(country.name.substring(matchIdx + q.length));
          nameSpan.innerHTML = before + '<mark>' + match + '</mark>' + after;
        } else {
          nameSpan.textContent = country.name;
        }

        li.appendChild(flagSpan);
        li.appendChild(nameSpan);

        /* Click + touch handler */
        var selectCountry = function (c) {
          return function (e) {
            e.preventDefault();
            input.value = c.name;
            self._hideAutocomplete(list, input);
            var form = el('guess-form');
            if (form) form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
          };
        };

        li.addEventListener('click',    selectCountry(country));
        li.addEventListener('touchend', selectCountry(country));

        list.appendChild(li);
      });
    },

    _updateHighlight: function (list) {
      var items = list.querySelectorAll('.autocomplete-item');
      items.forEach(function (item, i) {
        item.classList.toggle('highlighted', i === _highlightedIndex);
        if (i === _highlightedIndex) {
          item.setAttribute('aria-selected', 'true');
          item.scrollIntoView({ block: 'nearest' });
        } else {
          item.removeAttribute('aria-selected');
        }
      });
    },

    _hideAutocomplete: function (list, input) {
      if (!list) return;
      list.hidden    = true;
      list.innerHTML = '';
      _highlightedIndex  = -1;
      _autocompleteItems = [];
      if (input) input.setAttribute('aria-expanded', 'false');
    },


    /* ════════════════════════════════════════════
       14. CLEAR INPUT
       Called by: app.js → after successful guess
       ════════════════════════════════════════════ */
    clearInput: function () {
      var input    = el('guess-input');
      var list     = el('autocomplete-list');
      var clearBtn = el('input-clear-btn');

      if (input)    input.value = '';
      if (clearBtn) clearBtn.hidden = true;
      this._hideAutocomplete(list, input);
    },


    /* ════════════════════════════════════════════
       15. SHOW MODAL
       ID: #modal-overlay
       Called by: app.js event listeners
       ════════════════════════════════════════════ */
    showModal: function (show) {
      var overlay = el('modal-overlay');
      if (!overlay) return;

      if (show) {
        overlay.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';

        var modal = el('how-to-play-modal');
        if (modal) {
          setTimeout(function () {
            var focusable = modal.querySelector(
              'button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])'
            );
            if (focusable) focusable.focus();
          }, 320);
        }
      } else {
        overlay.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        var triggerBtn = el('how-to-play-btn');
        if (triggerBtn) triggerBtn.focus();
      }
    },


    /* ════════════════════════════════════════════
       16. RESTORE GAME STATE
       Called by: app.js → restoreGame()
       ════════════════════════════════════════════ */
    restoreGameState: function (guesses, targetCountry) {
      if (!guesses || !Array.isArray(guesses)) return;

      var self = this;

      guesses.forEach(function (evalResult, i) {
        var delay = i * 160;
        setTimeout(function () {
          self.renderAttemptRow(evalResult, i + 1, targetCountry);

          if (self.map) {
            self.addGuessMarker(
              evalResult.guessLat,
              evalResult.guessLng,
              evalResult.guessName,
              evalResult.isCorrect
            );
          }
        }, delay);
      });

      /* Fit map after all rows rendered */
      setTimeout(function () {
        if (self.markers.length) self.fitMapBounds(self.markers);
      }, guesses.length * 160 + 250);

      /* Update remaining */
      var maxGuesses  = window.MAX_GUESSES || 6;
      var remaining   = Math.max(0, maxGuesses - guesses.length);
      this.updateAttemptsRemaining(remaining);
    },


    /* ════════════════════════════════════════════
       17. UPDATE SIDEBAR STATS
       IDs: #stat-total-games, #stat-win-pct,
            #stat-streak, #stat-best-streak
       ════════════════════════════════════════════ */
    updateSidebarStats: function () {
      var stats  = window.getStats ? window.getStats() : null;
      if (!stats) return;

      var streak = window.StreakManager ? window.StreakManager.data : null;

      var update = function (id, val) {
        var e = el(id);
        if (e) { e.textContent = val; tempClass(e, 'count-up', 800); }
      };

      update('stat-total-games', stats.totalGames);

      var pct = stats.totalGames > 0
        ? Math.round((stats.totalWins / stats.totalGames) * 100) : 0;
      update('stat-win-pct',      pct + '%');
      update('stat-streak',       streak ? streak.current : stats.currentStreak);
      update('stat-best-streak',  streak ? streak.best    : stats.bestStreak);
    },


    /* ════════════════════════════════════════════
       18. UPDATE DISTRIBUTION BARS
       ID: #guess-distribution
       ════════════════════════════════════════════ */
    updateDistribution: function () {
      var container = el('guess-distribution');
      if (!container) return;

      var stats = window.getStats ? window.getStats() : null;
      if (!stats) return;

      var dist = stats.guessDistribution || {};
      var max  = 1;
      for (var g = 1; g <= 6; g++) {
        if ((dist[g] || 0) > max) max = dist[g];
      }

      var currentGuesses = window.GameState ? window.GameState.guesses.length : 0;
      var currentWon     = window.GameState ? window.GameState.gameStatus === 'won' : false;

      for (var n = 1; n <= 6; n++) {
        var row = container.querySelector('[data-guess="' + n + '"]');
        if (!row) continue;

        var bar = row.querySelector('.dist-bar');
        if (!bar) continue;

        var count    = dist[n] || 0;
        var widthPct = count > 0 ? Math.max(Math.round((count / max) * 100), 8) : 0;

        bar.style.setProperty('--dist-width', widthPct + '%');
        bar.style.setProperty('--dist-delay',  (n * 100) + 'ms');
        bar.classList.add('dist-bar-grow');

        var span = bar.querySelector('span');
        if (span) span.textContent = count;

        if (currentWon && n === currentGuesses) bar.classList.add('highlight');
      }
    },


    /* ════════════════════════════════════════════
       19. DISABLE INPUT (after game ends)
       Called by: app.js → handleGameEnd()
       ════════════════════════════════════════════ */
    disableInput: function () {
      var input     = el('guess-input');
      var submitBtn = el('guess-submit-btn');

      if (input) {
        input.disabled   = true;
        input.placeholder = '🎉 Come back tomorrow!';
      }
      if (submitBtn) submitBtn.disabled = true;
    },


    /* ════════════════════════════════════════════
       20. SHAKE INPUT (invalid guess)
       Called by: app.js → handleGuessSubmit()
       ════════════════════════════════════════════ */
    shakeInput: function () {
      var form  = el('guess-form');
      var input = el('guess-input');
      var target = form || input;

      if (!target) return;

      target.classList.remove('shake');
      void target.offsetWidth; /* Force reflow */
      target.classList.add('shake');

      setTimeout(function () { target.classList.remove('shake'); }, 520);
    },


    /* ════════════════════════════════════════════
       21. PUBLIC: RENDER HINTS
       Exposed so app.js can call if needed
       Usually called internally via renderAttemptRow
       ════════════════════════════════════════════ */
    renderHints: function (attemptNumber, evalResult, targetCountry) {
      var container = el('attempts-container');
      if (!container) return;

      /* Find the row for this attempt */
      var row = container.querySelector('[data-attempt="' + attemptNumber + '"]');
      if (!row) return;

      /* Remove existing chips for this attempt */
      var existing = row.querySelector('.hint-chips-row[data-hint="' + attemptNumber + '"]');
      if (existing) existing.parentNode.removeChild(existing);

      /* Re-append */
      this._appendHintChips(row, attemptNumber, evalResult, targetCountry);
    },


    /* ════════════════════════════════════════════
       22. LAZY LOAD OBSERVER
       Sets up IntersectionObserver for [data-lazy]
       Called by: app.js → init()
       ════════════════════════════════════════════ */
    initLazyObserver: function () {
      if (!('IntersectionObserver' in window)) {
        /* Fallback: show everything */
        var lazyEls = document.querySelectorAll('[data-lazy], .lazy-load');
        lazyEls.forEach(function (e) {
          e.classList.add('loaded', 'in-view', 'visible');
        });
        return;
      }

      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view', 'visible', 'loaded');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold:  0.08,
        rootMargin: '0px 0px -20px 0px'
      });

      /* Observe existing elements */
      document.querySelectorAll('[data-lazy], .lazy-load').forEach(function (el_) {
        observer.observe(el_);
      });

      /* Watch for new elements (hint chips etc.) */
      var mutationObs = new MutationObserver(function (mutations) {
        mutations.forEach(function (m) {
          m.addedNodes.forEach(function (node) {
            if (node.nodeType !== 1) return;
            if (node.matches('[data-lazy], .lazy-load')) observer.observe(node);
            node.querySelectorAll('[data-lazy], .lazy-load').forEach(function (child) {
              observer.observe(child);
            });
          });
        });
      });

      mutationObs.observe(document.body, { childList: true, subtree: true });

      console.log('[ui.js] Lazy observer initialized');
    }

  }; // end UIController


  /* ─────────────────────────────────────────────
     MODULE HELPER (used by _appendHintChips)
     Returns country data for a given id
     ───────────────────────────────────────────── */
  function guessDataFor(id) {
    if (!id || !window.COUNTRY_LOOKUP) return null;
    return window.COUNTRY_LOOKUP[id] || null;
  }


  console.log('[ui.js] UI Controller loaded');

})();
