/**
 * ═══════════════════════════════════════════════════════════════
 * DHARAVERSE UPSC MAPS — MASTER APP ENGINE (FIXED)
 * Handles all UI, Map Rendering, Navigation & Interactions
 * Version 2026.2 — All bugs fixed
 * ═══════════════════════════════════════════════════════════════
 */

class DharaVerseMapsApp {

  constructor() {
    this.map = null;
    this.currentCategory = null;
    this.currentMapData = null;
    this.currentMapIndex = -1;
    this.allMaps = [];
    this.activeLayers = [];
    this.labelLayers = [];       // separate array for label/info layers
    this.labelsVisible = true;   // toggle state
    this.isLegendVisible = false;
    this.isInfoVisible = false;
    this.isSidebarOpen = false;
    this.isDark = true;
    this.viewedMaps = new Set();

    this.init();
  }

  // ══════════════════════════════════
  // INITIALIZATION
  // ══════════════════════════════════

  init() {
    this.simulatePreloader(() => {
      this.allMaps = window.getAllMaps();
      this.buildSidebar();
      this.buildCategoryDropdown();
      this.bindEvents();
      this.injectLabelToggleButton();
      this.showToast('DharaVerse Maps Ready — ' + this.allMaps.length + ' Maps Loaded', 'success');
    });
  }

  simulatePreloader(callback) {
    const fill = document.getElementById('preloaderFill');
    const status = document.getElementById('preloaderStatus');
    if (!fill || !status) { callback(); return; }

    const messages = [
      'Initializing cartographic engine...',
      'Loading India boundary data...',
      'Registering maps...',
      'Calibrating coordinate systems...',
      'Loading UPSC data layers...',
      'Preparing interactive overlays...',
      'DharaVerse Maps Ready!'
    ];

    let progress = 0;
    let msgIdx = 0;

    const interval = setInterval(() => {
      progress += 100 / messages.length;
      fill.style.width = Math.min(progress, 100) + '%';
      if (msgIdx < messages.length) {
        status.textContent = messages[msgIdx++];
      }
    }, 280);

    setTimeout(() => {
      clearInterval(interval);
      fill.style.width = '100%';
      status.textContent = messages[messages.length - 1];

      setTimeout(() => {
        const preloader = document.getElementById('preloader');
        if (preloader) preloader.classList.add('hidden');
        callback();
      }, 400);
    }, 280 * messages.length + 200);
  }

  // ══════════════════════════════════
  // LEAFLET MAP INIT
  // ══════════════════════════════════

  initLeafletMap(center, zoom, tileStyle) {
    const mapEl = document.getElementById('leafletMap');
    if (!mapEl) return null;

    mapEl.classList.add('visible');

    // Force map container to proper z-index
    mapEl.style.zIndex = '1';
    mapEl.style.position = 'relative';

    if (this.map) {
      this.map.remove();
      this.map = null;
    }

    this.map = L.map('leafletMap', {
      center: center || [22, 82],
      zoom: zoom || 5,
      zoomControl: true,
      attributionControl: true,
      maxZoom: 18,
      minZoom: 2
    });

    // Tile layer
    const tiles = this.getTileLayer(tileStyle || 'dark');
    tiles.addTo(this.map);

    // Zoom control position
    this.map.zoomControl.setPosition('topright');

    // Fix: invalidate size after a tick to avoid rendering issues
    setTimeout(() => {
      if (this.map) this.map.invalidateSize();
    }, 200);

    return this.map;
  }

  getTileLayer(style) {
    const tiles = {
      dark: L.tileLayer(
        'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
        { attribution: '&copy; OpenStreetMap &copy; CARTO', maxZoom: 18 }
      ),
      light: L.tileLayer(
        'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
        { attribution: '&copy; OpenStreetMap &copy; CARTO', maxZoom: 18 }
      ),
      terrain: L.tileLayer(
        'https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.png',
        { attribution: 'Map tiles by Stamen Design', maxZoom: 18 }
      ),
      satellite: L.tileLayer(
        'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        { attribution: 'Tiles &copy; Esri', maxZoom: 18 }
      ),
      topo: L.tileLayer(
        'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
        { attribution: '&copy; OpenTopoMap', maxZoom: 17 }
      )
    };
    return tiles[style] || tiles.dark;
  }

  // ══════════════════════════════════
  // SIDEBAR BUILD
  // ══════════════════════════════════

  buildSidebar() {
    const container = document.getElementById('sidebarCategories');
    if (!container) return;
    container.innerHTML = '';

    window.DHARAVERSE_MAPS.categories.forEach(cat => {
      const maps = window.getMapsByCategory(cat.id);
      const group = document.createElement('div');
      group.className = 'cat-group';
      group.setAttribute('data-cat-id', cat.id);

      group.innerHTML =
        '<div class="cat-group-header" data-cat-id="' + cat.id + '">' +
          '<div class="cat-group-left">' +
            '<div class="cat-icon" style="background:' + cat.colorLight + '; color:' + cat.color + '">' +
              '<i class="' + cat.icon + '"></i>' +
            '</div>' +
            '<div class="cat-info">' +
              '<h4>' + cat.label + '</h4>' +
              '<p>' + cat.mapCount + ' maps &middot; MAP ' + cat.mapRange[0] + '&ndash;' + cat.mapRange[1] + '</p>' +
            '</div>' +
          '</div>' +
          '<i class="fas fa-chevron-down cat-chevron"></i>' +
        '</div>' +
        '<div class="cat-maps-list" id="catMaps_' + cat.id + '">' +
          maps.map(function(m, idx) {
            return '<div class="map-item" data-cat="' + cat.id + '" data-map-idx="' + idx + '" data-map-num="' + m.mapNum + '">' +
              '<span class="map-num">MAP ' + m.mapNum + '</span>' +
              '<span class="map-item-text">' + m.title + '</span>' +
            '</div>';
          }).join('') +
        '</div>';

      // Toggle group
      group.querySelector('.cat-group-header').addEventListener('click', function() {
        group.classList.toggle('open');
      });

      // Map item click
      var self = this;
      group.querySelectorAll('.map-item').forEach(function(item) {
        item.addEventListener('click', function() {
          var catId = item.dataset.cat;
          var mapIdx = parseInt(item.dataset.mapIdx);
          self.loadMap(catId, mapIdx);
          self.closeSidebar();
        });
      });

      container.appendChild(group);
    });
  }

  // ══════════════════════════════════
  // CATEGORY DROPDOWN
  // ══════════════════════════════════

  buildCategoryDropdown() {
    const menu = document.getElementById('categoryDropMenu');
    if (!menu) return;
    menu.innerHTML = '';

    var self = this;
    window.DHARAVERSE_MAPS.categories.forEach(function(cat) {
      const item = document.createElement('div');
      item.className = 'drop-item';
      item.setAttribute('data-cat-id', cat.id);
      item.innerHTML =
        '<i class="' + cat.icon + '" style="color:' + cat.color + '; width:16px"></i>' +
        '<span>' + cat.label + '</span>' +
        '<span style="margin-left:auto; font-size:0.65rem; color:var(--text-muted)">' + cat.mapCount + ' maps</span>';
      item.addEventListener('click', function() {
        self.selectCategory(cat.id);
        self.closeDropdown('categoryDropBtn', 'categoryDropMenu');
      });
      menu.appendChild(item);
    });
  }

  selectCategory(catId) {
    this.currentCategory = catId;
    const cat = window.DHARAVERSE_MAPS.getCategoryById(catId);
    const maps = window.getMapsByCategory(catId);

    var el = document.getElementById('categoryDropLabel');
    if (el) el.textContent = cat.label;

    document.querySelectorAll('#categoryDropMenu .drop-item').forEach(function(item) {
      item.classList.toggle('selected', item.dataset.catId === catId);
    });

    this.buildMapDropdown(catId, maps);

    var bcCat = document.getElementById('bcCategory');
    var bcMap = document.getElementById('bcMap');
    var bcNum = document.getElementById('bcMapNum');
    if (bcCat) bcCat.textContent = cat.label;
    if (bcMap) bcMap.textContent = 'Select a Map';
    if (bcNum) bcNum.textContent = '—';

    this.openSidebarCategory(catId);
  }

  buildMapDropdown(catId, maps) {
    const btn = document.getElementById('mapDropBtn');
    const menu = document.getElementById('mapDropMenu');
    const label = document.getElementById('mapDropLabel');
    if (!btn || !menu || !label) return;

    btn.disabled = false;
    label.textContent = 'Select Map';
    menu.innerHTML = '';

    var self = this;
    maps.forEach(function(m, idx) {
      const item = document.createElement('div');
      item.className = 'drop-item';
      item.setAttribute('data-map-idx', idx);
      item.innerHTML =
        '<span class="drop-num">' + m.mapNum + '</span>' +
        '<span>' + m.title + '</span>';
      item.addEventListener('click', function() {
        self.loadMap(catId, idx);
        self.closeDropdown('mapDropBtn', 'mapDropMenu');
      });
      menu.appendChild(item);
    });
  }

  // ══════════════════════════════════
  // MAP LOADING
  // ══════════════════════════════════

  async loadMap(catId, mapIdx) {
    const maps = window.getMapsByCategory(catId);
    if (!maps || !maps[mapIdx]) {
      this.showToast('Map data not available', 'error');
      return;
    }

    const mapData = maps[mapIdx];
    this.currentMapData = mapData;
    this.currentCategory = catId;
    this.currentMapIndex = mapIdx;

    // Show loading
    this.showMapLoading('Loading ' + mapData.title + '...');
    this.hideWelcome();

    // Wait for UI
    await new Promise(function(r) { setTimeout(r, 100); });

    try {
      // Init map
      const mapConfig = mapData.mapConfig || {};
      this.initLeafletMap(
        mapConfig.center || [22, 82],
        mapConfig.zoom || 5,
        mapConfig.tileStyle || 'dark'
      );

      // Clear old layers
      this.clearLayers();

      // Reset label visibility
      this.labelsVisible = true;
      this.updateLabelToggleButton();

      // Render map
      if (typeof mapData.render === 'function') {
        mapData.render(this.map, this);
      }

      // Update UI
      this.updateMapUI(catId, mapIdx, mapData);

      // Legend
      this.buildLegend(mapData);

      // Mark viewed
      this.viewedMaps.add(mapData.mapNum);
      this.updateProgress();

    } catch (err) {
      console.error('Map render error:', err);
      this.showToast('Error rendering map: ' + err.message, 'error');
    } finally {
      this.hideMapLoading();
    }
  }

  updateMapUI(catId, mapIdx, mapData) {
    const cat = window.DHARAVERSE_MAPS.getCategoryById(catId);

    // Header pill
    var cmn = document.getElementById('currentMapName');
    if (cmn) cmn.textContent = 'MAP ' + mapData.mapNum;

    // Breadcrumb
    var bcCat = document.getElementById('bcCategory');
    var bcMap = document.getElementById('bcMap');
    var bcNum = document.getElementById('bcMapNum');
    if (bcCat) bcCat.textContent = cat.label;
    if (bcMap) bcMap.textContent = mapData.title;
    if (bcNum) bcNum.textContent = 'MAP ' + mapData.mapNum;

    // Dropdown labels
    var cdl = document.getElementById('categoryDropLabel');
    var mdl = document.getElementById('mapDropLabel');
    if (cdl) cdl.textContent = cat.label;
    if (mdl) mdl.textContent = mapData.title;

    // Map counter
    var allCount = this.allMaps.length;
    var globalIdx = this.allMaps.findIndex(function(m) { return m.mapNum === mapData.mapNum; });
    var mc = document.getElementById('mapCounter');
    if (mc) mc.textContent = (globalIdx + 1) + '/' + allCount;

    // Nav buttons
    var btnPrev = document.getElementById('btnPrevMap');
    var btnNext = document.getElementById('btnNextMap');
    if (btnPrev) btnPrev.disabled = (globalIdx <= 0);
    if (btnNext) btnNext.disabled = (globalIdx >= allCount - 1);

    // Sidebar active
    document.querySelectorAll('.map-item').forEach(function(item) {
      item.classList.toggle(
        'active',
        item.dataset.cat === catId && parseInt(item.dataset.mapIdx) === mapIdx
      );
    });

    // Dropdown active
    document.querySelectorAll('#mapDropMenu .drop-item').forEach(function(item, idx) {
      item.classList.toggle('selected', idx === mapIdx);
    });

    // Category header active
    document.querySelectorAll('.cat-group-header').forEach(function(h) {
      h.classList.toggle('active', h.dataset.catId === catId);
    });

    // Page title
    document.title = 'MAP ' + mapData.mapNum + ' — ' + mapData.title + ' | DharaVerse UPSC';
  }

  updateProgress() {
    var viewed = this.viewedMaps.size;
    var el = document.getElementById('mapProgress');
    if (el) el.textContent = viewed + ' / ' + this.allMaps.length;
  }

  // ══════════════════════════════════
  // LAYER MANAGEMENT — FIXED
  // ══════════════════════════════════

  clearLayers() {
    var self = this;
    if (!this.map) return;

    this.activeLayers.forEach(function(layer) {
      try { self.map.removeLayer(layer); } catch(e) {}
    });
    this.activeLayers = [];

    this.labelLayers.forEach(function(layer) {
      try { self.map.removeLayer(layer); } catch(e) {}
    });
    this.labelLayers = [];
  }

  addLayer(layer) {
    if (!this.map || !layer) return layer;
    layer.addTo(this.map);
    this.activeLayers.push(layer);
    return layer;
  }

  // ══════════════════════════════════
  // LABEL MARKER — COMPLETELY FIXED
  // ══════════════════════════════════

  labelMarker(latlng, label, color, size) {
    if (!this.map) return null;

    color = color || '#F0A500';
    size = size || '11px';

    // Calculate approximate width based on text length
    var fontSize = parseInt(size) || 11;
    var approxWidth = label.length * fontSize * 0.62;
    var approxHeight = fontSize + 6;

    var icon = L.divIcon({
      className: 'dv-label-marker',
      html: '<div style="' +
        'font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;' +
        'font-size:' + size + ';' +
        'font-weight:600;' +
        'color:' + color + ';' +
        'white-space:nowrap;' +
        'display:inline-block;' +
        'text-shadow:' +
          '0 1px 3px rgba(0,0,0,0.9),' +
          '0 0 6px rgba(0,0,0,0.8),' +
          '1px 1px 2px rgba(0,0,0,0.9),' +
          '-1px -1px 2px rgba(0,0,0,0.9);' +
        'pointer-events:none;' +
        'line-height:1.2;' +
        'letter-spacing:0.3px;' +
      '">' + label + '</div>',
      iconSize: [approxWidth, approxHeight],
      iconAnchor: [approxWidth / 2, approxHeight / 2]
    });

    var marker = L.marker(latlng, { icon: icon, interactive: false, zIndexOffset: 500 });
    marker.addTo(this.map);
    this.labelLayers.push(marker);
    this.activeLayers.push(marker);
    return marker;
  }

  // ══════════════════════════════════
  // INFO BOX ON MAP — NEW HELPER
  // ══════════════════════════════════

  infoBox(latlng, html, options) {
    if (!this.map) return null;

    options = options || {};
    var maxWidth = options.maxWidth || 220;
    var fontSize = options.fontSize || '10px';

    var icon = L.divIcon({
      className: 'dv-info-box',
      html: '<div style="' +
        'background:rgba(5,11,26,0.92);' +
        'border:1px solid #FFD700;' +
        'border-radius:8px;' +
        'padding:8px 12px;' +
        'font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;' +
        'font-size:' + fontSize + ';' +
        'color:#FFD700;' +
        'max-width:' + maxWidth + 'px;' +
        'line-height:1.5;' +
        'white-space:normal;' +
        'word-wrap:break-word;' +
        'pointer-events:auto;' +
        'cursor:default;' +
        'box-shadow:0 4px 16px rgba(0,0,0,0.5);' +
      '">' + html + '</div>',
      iconSize: [maxWidth, 0],
      iconAnchor: [0, 0]
    });

    var marker = L.marker(latlng, { icon: icon, interactive: true, zIndexOffset: 600 });
    marker.addTo(this.map);
    this.labelLayers.push(marker);
    this.activeLayers.push(marker);
    return marker;
  }

  // ══════════════════════════════════
  // TOGGLE LABELS ON/OFF
  // ══════════════════════════════════

  injectLabelToggleButton() {
    // Find the toolbar or create button next to existing buttons
    var toolbar = document.querySelector('.map-toolbar') ||
                  document.querySelector('.toolbar-actions') ||
                  document.querySelector('.header-actions');

    if (!toolbar) {
      // Try to find any container with the other buttons
      var resetBtn = document.getElementById('btnResetView');
      if (resetBtn && resetBtn.parentElement) {
        toolbar = resetBtn.parentElement;
      }
    }

    if (!toolbar) return;

    // Check if button already exists
    if (document.getElementById('btnToggleLabels')) return;

    var btn = document.createElement('button');
    btn.id = 'btnToggleLabels';
    btn.className = 'tool-btn';
    btn.title = 'Toggle Labels & Info Boxes';
    btn.innerHTML = '<i class="fas fa-tags"></i>';
    btn.style.cssText = 'position:relative;';

    var self = this;
    btn.addEventListener('click', function() {
      self.toggleLabels();
    });

    toolbar.appendChild(btn);
  }

  updateLabelToggleButton() {
    var btn = document.getElementById('btnToggleLabels');
    if (!btn) return;

    if (this.labelsVisible) {
      btn.innerHTML = '<i class="fas fa-tags"></i>';
      btn.title = 'Hide Labels & Info Boxes';
      btn.classList.remove('active-off');
    } else {
      btn.innerHTML = '<i class="fas fa-eye-slash"></i>';
      btn.title = 'Show Labels & Info Boxes';
      btn.classList.add('active-off');
    }
  }

  toggleLabels() {
    this.labelsVisible = !this.labelsVisible;
    var self = this;

    this.labelLayers.forEach(function(layer) {
      if (!self.map) return;
      try {
        if (self.labelsVisible) {
          if (!self.map.hasLayer(layer)) {
            layer.addTo(self.map);
          }
        } else {
          if (self.map.hasLayer(layer)) {
            self.map.removeLayer(layer);
          }
        }
      } catch(e) {}
    });

    this.updateLabelToggleButton();

    if (this.labelsVisible) {
      this.showToast('Labels & Info visible', 'info');
    } else {
      this.showToast('Labels & Info hidden — cleaner map view', 'info');
    }
  }

  // ══════════════════════════════════
  // LEGEND
  // ══════════════════════════════════

  buildLegend(mapData) {
    const panel = document.getElementById('legendPanel');
    const title = document.getElementById('legendTitle');
    const body = document.getElementById('legendBody');
    if (!panel || !title || !body) return;

    if (!mapData.legend || mapData.legend.length === 0) {
      panel.classList.remove('visible');
      this.isLegendVisible = false;
      return;
    }

    title.textContent = mapData.title + ' — Legend';
    body.innerHTML = '';

    mapData.legend.forEach(function(section) {
      if (section.sectionTitle) {
        var st = document.createElement('div');
        st.className = 'legend-section-title';
        st.textContent = section.sectionTitle;
        body.appendChild(st);
      }

      if (section.items) {
        section.items.forEach(function(item) {
          var div = document.createElement('div');
          div.className = 'legend-item';

          var swatch = '';
          if (item.color) {
            swatch = '<div class="legend-color" style="background:' + item.color + '"></div>';
          } else if (item.dot) {
            swatch = '<div class="legend-dot" style="background:' + item.dot + '"></div>';
          } else if (item.line) {
            swatch = '<div class="legend-line" style="background:' + item.line + '"></div>';
          }

          div.innerHTML = swatch + '<span>' + item.label + '</span>';
          body.appendChild(div);
        });
      }
    });

    panel.classList.add('visible');
    this.isLegendVisible = true;
  }

  // ══════════════════════════════════
  // INFO PANEL
  // ══════════════════════════════════

  showInfoPanel(mapData) {
    const panel = document.getElementById('infoPanel');
    const title = document.getElementById('infoPanelTitle');
    const body = document.getElementById('infoPanelBody');
    if (!panel || !title || !body) return;

    title.textContent = mapData.title;
    body.innerHTML = '';

    if (mapData.info) {
      mapData.info.forEach(function(section) {
        var sec = document.createElement('div');
        sec.className = 'info-section';

        var secTitle = document.createElement('div');
        secTitle.className = 'info-section-title';
        secTitle.textContent = section.title;
        sec.appendChild(secTitle);

        if (section.items) {
          section.items.forEach(function(item) {
            var div = document.createElement('div');
            div.className = 'info-item';
            div.innerHTML = '<i class="fas fa-chevron-right"></i><span>' + item + '</span>';
            sec.appendChild(div);
          });
        }

        if (section.facts) {
          section.facts.forEach(function(fact) {
            var card = document.createElement('div');
            card.className = 'info-fact-card';
            card.innerHTML =
              '<div class="info-fact-title">' + fact.label + '</div>' +
              '<div class="info-fact-value">' + fact.value + '</div>';
            sec.appendChild(card);
          });
        }

        body.appendChild(sec);
      });
    }

    panel.classList.add('visible');
    this.isInfoVisible = true;
  }

  // ══════════════════════════════════
  // UI STATE
  // ══════════════════════════════════

  showWelcome() {
    var el = document.getElementById('welcomeScreen');
    if (el) el.classList.remove('hidden');
    var mapEl = document.getElementById('leafletMap');
    if (mapEl) mapEl.classList.remove('visible');
  }

  hideWelcome() {
    var el = document.getElementById('welcomeScreen');
    if (el) el.classList.add('hidden');
  }

  showMapLoading(text) {
    var loading = document.getElementById('mapLoading');
    var mlText = document.getElementById('mlText');
    if (mlText) mlText.textContent = text || 'Loading...';
    if (loading) loading.classList.add('visible');
  }

  hideMapLoading() {
    var loading = document.getElementById('mapLoading');
    if (loading) loading.classList.remove('visible');
  }

  openSidebar() {
    var sidebar = document.getElementById('sidebar');
    var overlay = document.getElementById('sidebarOverlay');
    if (sidebar) {
      sidebar.classList.remove('collapsed');
      sidebar.classList.add('mobile-open');
    }
    if (overlay) overlay.classList.add('visible');
    this.isSidebarOpen = true;
  }

  closeSidebar() {
    var sidebar = document.getElementById('sidebar');
    var overlay = document.getElementById('sidebarOverlay');
    if (sidebar) {
      sidebar.classList.add('collapsed');
      sidebar.classList.remove('mobile-open');
    }
    if (overlay) overlay.classList.remove('visible');
    this.isSidebarOpen = false;
  }

  openSidebarCategory(catId) {
    document.querySelectorAll('.cat-group').forEach(function(g) {
      if (g.dataset.catId === catId) {
        g.classList.add('open');
      }
    });
  }

  openDropdown(btnId, menuId) {
    var el = document.getElementById(btnId);
    if (el) {
      var wrap = el.closest('.dropdown-wrap');
      if (wrap) wrap.classList.add('open');
    }
  }

  closeDropdown(btnId, menuId) {
    var el = document.getElementById(btnId);
    if (el) {
      var wrap = el.closest('.dropdown-wrap');
      if (wrap) wrap.classList.remove('open');
    }
  }

  // ══════════════════════════════════
  // NAVIGATION
  // ══════════════════════════════════

  navigatePrev() {
    if (!this.currentMapData) return;
    var self = this;
    var globalIdx = this.allMaps.findIndex(function(m) { return m.mapNum === self.currentMapData.mapNum; });
    if (globalIdx > 0) {
      var prevMap = this.allMaps[globalIdx - 1];
      this.loadMap(prevMap.categoryId, this.getLocalIndex(prevMap));
    }
  }

  navigateNext() {
    if (!this.currentMapData) return;
    var self = this;
    var globalIdx = this.allMaps.findIndex(function(m) { return m.mapNum === self.currentMapData.mapNum; });
    if (globalIdx < this.allMaps.length - 1) {
      var nextMap = this.allMaps[globalIdx + 1];
      this.loadMap(nextMap.categoryId, this.getLocalIndex(nextMap));
    }
  }

  getLocalIndex(mapData) {
    var maps = window.getMapsByCategory(mapData.categoryId);
    return maps.findIndex(function(m) { return m.mapNum === mapData.mapNum; });
  }

  // ══════════════════════════════════
  // TOAST
  // ══════════════════════════════════

  showToast(message, type, duration) {
    type = type || 'info';
    duration = duration || 3000;

    var container = document.getElementById('toastContainer');
    if (!container) return;

    var toast = document.createElement('div');
    toast.className = 'toast ' + type;

    var icons = {
      info: 'fas fa-info-circle',
      success: 'fas fa-check-circle',
      error: 'fas fa-exclamation-circle'
    };

    toast.innerHTML =
      '<i class="' + (icons[type] || icons.info) + '"></i>' +
      '<span>' + message + '</span>';

    container.appendChild(toast);

    setTimeout(function() {
      toast.style.animation = 'toastOut 0.3s ease forwards';
      setTimeout(function() { toast.remove(); }, 300);
    }, duration);
  }

  // ══════════════════════════════════
  // HELPER: POPUP BUILDER
  // ══════════════════════════════════

  buildPopup(title, body, tags) {
    tags = tags || [];
    var tagHTML = tags.map(function(t) {
      return '<span class="popup-tag">' + t + '</span>';
    }).join('');
    return '<div class="custom-popup">' +
      '<div class="popup-title">' + title + '</div>' +
      '<div class="popup-body">' + body + '</div>' +
      (tagHTML ? '<div style="margin-top:8px">' + tagHTML + '</div>' : '') +
    '</div>';
  }

  // ══════════════════════════════════
  // HELPER: POLYGON STYLE
  // ══════════════════════════════════

  polygonStyle(color, fillOpacity, weight) {
    return {
      color: color,
      fillColor: color,
      fillOpacity: fillOpacity !== undefined ? fillOpacity : 0.25,
      weight: weight !== undefined ? weight : 2,
      opacity: 0.9
    };
  }

  // ══════════════════════════════════
  // HELPER: CIRCLE MARKER
  // ══════════════════════════════════

  circleMarker(latlng, options) {
    options = options || {};
    return L.circleMarker(latlng, {
      radius: options.radius || 7,
      color: options.borderColor || '#000',
      fillColor: options.color || '#FFD166',
      fillOpacity: options.opacity || 0.9,
      weight: options.weight || 2
    });
  }

  // ══════════════════════════════════
  // EVENTS — FULLY FIXED
  // ══════════════════════════════════

  bindEvents() {
    var self = this;

    // Sidebar toggle
    var btnSidebar = document.getElementById('btnSidebar');
    if (btnSidebar) {
      btnSidebar.addEventListener('click', function() {
        if (self.isSidebarOpen) self.closeSidebar();
        else self.openSidebar();
      });
    }

    var btnCloseSidebar = document.getElementById('btnCloseSidebar');
    if (btnCloseSidebar) {
      btnCloseSidebar.addEventListener('click', function() {
        self.closeSidebar();
      });
    }

    var sidebarOverlay = document.getElementById('sidebarOverlay');
    if (sidebarOverlay) {
      sidebarOverlay.addEventListener('click', function() {
        self.closeSidebar();
      });
    }

    // Theme toggle
    var btnTheme = document.getElementById('btnTheme');
    if (btnTheme) {
      btnTheme.addEventListener('click', function() {
        self.isDark = !self.isDark;
        document.body.classList.toggle('light-theme', !self.isDark);
        var icon = btnTheme.querySelector('i');
        if (icon) icon.className = self.isDark ? 'fas fa-moon' : 'fas fa-sun';

        // Reload tile layer
        if (self.map && self.currentMapData) {
          var style = self.isDark ? 'dark' : 'light';
          self.map.eachLayer(function(l) {
            if (l instanceof L.TileLayer) self.map.removeLayer(l);
          });
          self.getTileLayer(style).addTo(self.map);
        }
      });
    }

    // Fullscreen
    var btnFullscreen = document.getElementById('btnFullscreen');
    if (btnFullscreen) {
      btnFullscreen.addEventListener('click', function() {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen().catch(function(){});
          var fi = btnFullscreen.querySelector('i');
          if (fi) fi.className = 'fas fa-compress';
        } else {
          document.exitFullscreen();
          var fi2 = btnFullscreen.querySelector('i');
          if (fi2) fi2.className = 'fas fa-expand';
        }
      });
    }

    // Category dropdown
    var catDropBtn = document.getElementById('categoryDropBtn');
    if (catDropBtn) {
      catDropBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        var wrap = catDropBtn.closest('.dropdown-wrap');
        if (wrap) wrap.classList.toggle('open');
      });
    }

    // Map dropdown
    var mapDropBtn = document.getElementById('mapDropBtn');
    if (mapDropBtn) {
      mapDropBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        if (!mapDropBtn.disabled) {
          var wrap = mapDropBtn.closest('.dropdown-wrap');
          if (wrap) wrap.classList.toggle('open');
        }
      });
    }

    // Close dropdowns on outside click
    document.addEventListener('click', function() {
      document.querySelectorAll('.dropdown-wrap.open').forEach(function(d) {
        d.classList.remove('open');
      });
    });

    // Nav buttons
    var btnPrev = document.getElementById('btnPrevMap');
    var btnNext = document.getElementById('btnNextMap');
    if (btnPrev) btnPrev.addEventListener('click', function() { self.navigatePrev(); });
    if (btnNext) btnNext.addEventListener('click', function() { self.navigateNext(); });

    // Reset view
    var btnReset = document.getElementById('btnResetView');
    if (btnReset) {
      btnReset.addEventListener('click', function() {
        if (self.map && self.currentMapData) {
          var cfg = self.currentMapData.mapConfig || {};
          self.map.setView(cfg.center || [22, 82], cfg.zoom || 5);
        }
      });
    }

    // Legend
    var btnLegend = document.getElementById('btnLegend');
    if (btnLegend) {
      btnLegend.addEventListener('click', function() {
        var panel = document.getElementById('legendPanel');
        if (!panel) return;
        if (self.isLegendVisible) {
          panel.classList.remove('visible');
          self.isLegendVisible = false;
        } else {
          if (self.currentMapData && self.currentMapData.legend) {
            panel.classList.add('visible');
            self.isLegendVisible = true;
          }
        }
      });
    }

    var btnCloseLegend = document.getElementById('btnCloseLegend');
    if (btnCloseLegend) {
      btnCloseLegend.addEventListener('click', function() {
        var panel = document.getElementById('legendPanel');
        if (panel) panel.classList.remove('visible');
        self.isLegendVisible = false;
      });
    }

    // Info
    var btnInfo = document.getElementById('btnInfo');
    if (btnInfo) {
      btnInfo.addEventListener('click', function() {
        if (self.isInfoVisible) {
          var panel = document.getElementById('infoPanel');
          if (panel) panel.classList.remove('visible');
          self.isInfoVisible = false;
        } else if (self.currentMapData) {
          self.showInfoPanel(self.currentMapData);
        }
      });
    }

    var btnCloseInfo = document.getElementById('btnCloseInfo');
    if (btnCloseInfo) {
      btnCloseInfo.addEventListener('click', function() {
        var panel = document.getElementById('infoPanel');
        if (panel) panel.classList.remove('visible');
        self.isInfoVisible = false;
      });
    }

    // Search
    var searchInput = document.getElementById('mapSearch');
    if (searchInput) {
      searchInput.addEventListener('input', function(e) {
        self.searchMaps(e.target.value);
        var clearBtn = document.getElementById('btnClearSearch');
        if (clearBtn) clearBtn.classList.toggle('visible', e.target.value.length > 0);
      });
    }

    var btnClearSearch = document.getElementById('btnClearSearch');
    if (btnClearSearch) {
      btnClearSearch.addEventListener('click', function() {
        var input = document.getElementById('mapSearch');
        if (input) input.value = '';
        btnClearSearch.classList.remove('visible');
        self.searchMaps('');
      });
    }

    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.key === 'ArrowLeft') self.navigatePrev();
      if (e.key === 'ArrowRight') self.navigateNext();
      if (e.key === 'f' || e.key === 'F') {
        var fb = document.getElementById('btnFullscreen');
        if (fb) fb.click();
      }
      if (e.key === 'l' || e.key === 'L') {
        var lb = document.getElementById('btnLegend');
        if (lb) lb.click();
      }
      if (e.key === 'i' || e.key === 'I') {
        var ib = document.getElementById('btnInfo');
        if (ib) ib.click();
      }
      if (e.key === 't' || e.key === 'T') {
        self.toggleLabels();
      }
      if (e.key === 'Escape') {
        self.closeSidebar();
        var infoPanel = document.getElementById('infoPanel');
        if (infoPanel) infoPanel.classList.remove('visible');
        self.isInfoVisible = false;
        var legendPanel = document.getElementById('legendPanel');
        if (legendPanel) legendPanel.classList.remove('visible');
        self.isLegendVisible = false;
      }
    });
  }

  // ══════════════════════════════════
  // SEARCH
  // ══════════════════════════════════

  searchMaps(query) {
    var q = query.toLowerCase().trim();

    document.querySelectorAll('.cat-group').forEach(function(group) {
      var groupVisible = false;

      group.querySelectorAll('.map-item').forEach(function(item) {
        var textEl = item.querySelector('.map-item-text');
        var numEl = item.querySelector('.map-num');
        var text = textEl ? textEl.textContent.toLowerCase() : '';
        var num = numEl ? numEl.textContent.toLowerCase() : '';
        var match = !q || text.indexOf(q) !== -1 || num.indexOf(q) !== -1;

        item.style.display = match ? '' : 'none';
        if (match) groupVisible = true;
      });

      group.style.display = groupVisible ? '' : 'none';

      if (q && groupVisible) {
        group.classList.add('open');
      }
    });
  }
}

// ── BOOT ──
window.addEventListener('DOMContentLoaded', function() {
  window.app = new DharaVerseMapsApp();
});
