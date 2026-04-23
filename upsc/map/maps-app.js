/**
 * ═══════════════════════════════════════════════════════════════
 * DHARAVERSE UPSC MAPS — MASTER APP ENGINE
 * Handles all UI, Map Rendering, Navigation & Interactions
 * Version 2026
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
    this.activeMarkers = [];
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
      this.showToast('DharaVerse Maps Ready — 134 Maps Loaded', 'success');
    });
  }

  simulatePreloader(callback) {
    const fill = document.getElementById('preloaderFill');
    const status = document.getElementById('preloaderStatus');
    const messages = [
      'Initializing cartographic engine...',
      'Loading India boundary data...',
      'Registering 134 maps...',
      'Calibrating coordinate systems...',
      'Loading UPSC data layers...',
      'Preparing interactive overlays...',
      'DharaVerse Maps Ready!'
    ];

    let progress = 0;
    let msgIdx = 0;

    const interval = setInterval(() => {
      progress += 100 / messages.length;
      fill.style.width = `${Math.min(progress, 100)}%`;
      if (msgIdx < messages.length) {
        status.textContent = messages[msgIdx++];
      }
    }, 280);

    setTimeout(() => {
      clearInterval(interval);
      fill.style.width = '100%';
      status.textContent = messages[messages.length - 1];

      setTimeout(() => {
        document.getElementById('preloader').classList.add('hidden');
        callback();
      }, 400);
    }, 280 * messages.length + 200);
  }

  // ══════════════════════════════════
  // LEAFLET MAP INIT
  // ══════════════════════════════════

  initLeafletMap(center, zoom, tileStyle) {
    const mapEl = document.getElementById('leafletMap');
    mapEl.classList.add('visible');

    if (this.map) {
      this.map.remove();
      this.map = null;
    }

    this.map = L.map('leafletMap', {
      center: center || [22, 82],
      zoom: zoom || 5,
      zoomControl: true,
      attributionControl: true
    });

    // Tile layers
    const tiles = this.getTileLayer(tileStyle || 'dark');
    tiles.addTo(this.map);

    // Fix zoom control style
    this.map.zoomControl.setPosition('topright');

    return this.map;
  }

  getTileLayer(style) {
    const tiles = {
      dark: L.tileLayer(
        'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
        { attribution: '© OpenStreetMap © CARTO', maxZoom: 18 }
      ),
      light: L.tileLayer(
        'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
        { attribution: '© OpenStreetMap © CARTO', maxZoom: 18 }
      ),
      terrain: L.tileLayer(
        'https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.png',
        { attribution: 'Map tiles by Stamen Design', maxZoom: 18 }
      ),
      satellite: L.tileLayer(
        'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        { attribution: 'Tiles © Esri', maxZoom: 18 }
      ),
      topo: L.tileLayer(
        'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
        { attribution: '© OpenTopoMap', maxZoom: 17 }
      )
    };
    return tiles[style] || tiles.dark;
  }

  // ══════════════════════════════════
  // SIDEBAR BUILD
  // ══════════════════════════════════

  buildSidebar() {
    const container = document.getElementById('sidebarCategories');
    container.innerHTML = '';

    window.DHARAVERSE_MAPS.categories.forEach(cat => {
      const maps = window.getMapsByCategory(cat.id);
      const group = document.createElement('div');
      group.className = 'cat-group';
      group.setAttribute('data-cat-id', cat.id);

      group.innerHTML = `
        <div class="cat-group-header" data-cat-id="${cat.id}">
          <div class="cat-group-left">
            <div class="cat-icon" style="background:${cat.colorLight}; color:${cat.color}">
              <i class="${cat.icon}"></i>
            </div>
            <div class="cat-info">
              <h4>${cat.label}</h4>
              <p>${cat.mapCount} maps · MAP ${cat.mapRange[0]}–${cat.mapRange[1]}</p>
            </div>
          </div>
          <i class="fas fa-chevron-down cat-chevron"></i>
        </div>
        <div class="cat-maps-list" id="catMaps_${cat.id}">
          ${maps.map((m, idx) => `
            <div class="map-item" data-cat="${cat.id}" data-map-idx="${idx}" data-map-num="${m.mapNum}">
              <span class="map-num">MAP ${m.mapNum}</span>
              <span class="map-item-text">${m.title}</span>
            </div>
          `).join('')}
        </div>
      `;

      // Toggle group
      group.querySelector('.cat-group-header').addEventListener('click', () => {
        group.classList.toggle('open');
      });

      // Map item click
      group.querySelectorAll('.map-item').forEach(item => {
        item.addEventListener('click', () => {
          const catId = item.dataset.cat;
          const mapIdx = parseInt(item.dataset.mapIdx);
          this.loadMap(catId, mapIdx);
          this.closeSidebar();
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
    menu.innerHTML = '';

    window.DHARAVERSE_MAPS.categories.forEach(cat => {
      const item = document.createElement('div');
      item.className = 'drop-item';
      item.setAttribute('data-cat-id', cat.id);
      item.innerHTML = `
        <i class="${cat.icon}" style="color:${cat.color}; width:16px"></i>
        <span>${cat.label}</span>
        <span style="margin-left:auto; font-family:var(--font-mono); font-size:0.65rem; color:var(--text-muted)">${cat.mapCount} maps</span>
      `;
      item.addEventListener('click', () => {
        this.selectCategory(cat.id);
        this.closeDropdown('categoryDropBtn', 'categoryDropMenu');
      });
      menu.appendChild(item);
    });
  }

  selectCategory(catId) {
    this.currentCategory = catId;
    const cat = window.DHARAVERSE_MAPS.getCategoryById(catId);
    const maps = window.getMapsByCategory(catId);

    // Update category dropdown label
    document.getElementById('categoryDropLabel').textContent = cat.label;

    // Mark selected in dropdown
    document.querySelectorAll('#categoryDropMenu .drop-item').forEach(item => {
      item.classList.toggle('selected', item.dataset.catId === catId);
    });

    // Build map dropdown
    this.buildMapDropdown(catId, maps);

    // Update breadcrumb
    document.getElementById('bcCategory').textContent = cat.label;
    document.getElementById('bcMap').textContent = 'Select a Map';
    document.getElementById('bcMapNum').textContent = '—';

    // Open cat in sidebar
    this.openSidebarCategory(catId);
  }

  buildMapDropdown(catId, maps) {
    const btn = document.getElementById('mapDropBtn');
    const menu = document.getElementById('mapDropMenu');
    const label = document.getElementById('mapDropLabel');

    btn.disabled = false;
    label.textContent = 'Select Map';
    menu.innerHTML = '';

    maps.forEach((m, idx) => {
      const item = document.createElement('div');
      item.className = 'drop-item';
      item.setAttribute('data-map-idx', idx);
      item.innerHTML = `
        <span class="drop-num">${m.mapNum}</span>
        <span>${m.title}</span>
      `;
      item.addEventListener('click', () => {
        this.loadMap(catId, idx);
        this.closeDropdown('mapDropBtn', 'mapDropMenu');
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
    this.showMapLoading(`Loading ${mapData.title}...`);
    this.hideWelcome();

    // Await a tick for UI update
    await new Promise(r => setTimeout(r, 100));

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

      // Toast
      this.showToast(`MAP ${mapData.mapNum} — ${mapData.title}`, 'success');

    } catch (err) {
      console.error('Map render error:', err);
      this.showToast('Error rendering map', 'error');
    } finally {
      this.hideMapLoading();
    }
  }

  updateMapUI(catId, mapIdx, mapData) {
    const cat = window.DHARAVERSE_MAPS.getCategoryById(catId);
    const maps = window.getMapsByCategory(catId);

    // Header pill
    document.getElementById('currentMapName').textContent = `MAP ${mapData.mapNum}`;

    // Breadcrumb
    document.getElementById('bcCategory').textContent = cat.label;
    document.getElementById('bcMap').textContent = mapData.title;
    document.getElementById('bcMapNum').textContent = `MAP ${mapData.mapNum}`;

    // Dropdown labels
    document.getElementById('categoryDropLabel').textContent = cat.label;
    document.getElementById('mapDropLabel').textContent = mapData.title;

    // Map counter
    const allMapsCount = this.allMaps.length;
    const globalIdx = this.allMaps.findIndex(m => m.mapNum === mapData.mapNum);
    document.getElementById('mapCounter').textContent = `${globalIdx + 1}/${allMapsCount}`;

    // Nav buttons
    const btnPrev = document.getElementById('btnPrevMap');
    const btnNext = document.getElementById('btnNextMap');
    btnPrev.disabled = (globalIdx <= 0);
    btnNext.disabled = (globalIdx >= allMapsCount - 1);

    // Sidebar active
    document.querySelectorAll('.map-item').forEach(item => {
      item.classList.toggle(
        'active',
        item.dataset.cat === catId && parseInt(item.dataset.mapIdx) === mapIdx
      );
    });

    // Dropdown active
    document.querySelectorAll('#mapDropMenu .drop-item').forEach((item, idx) => {
      item.classList.toggle('selected', idx === mapIdx);
    });

    // Category header active
    document.querySelectorAll('.cat-group-header').forEach(h => {
      h.classList.toggle('active', h.dataset.catId === catId);
    });

    // Page title
    document.title = `MAP ${mapData.mapNum} — ${mapData.title} | DharaVerse UPSC`;
  }

  updateProgress() {
    const viewed = this.viewedMaps.size;
    document.getElementById('mapProgress').textContent = `${viewed} / 134`;
  }

  // ══════════════════════════════════
  // LAYER MANAGEMENT
  // ══════════════════════════════════

  clearLayers() {
    if (!this.map) return;
    this.activeLayers.forEach(layer => {
      try { this.map.removeLayer(layer); } catch(e) {}
    });
    this.activeLayers = [];
  }

  addLayer(layer) {
    if (!this.map) return;
    layer.addTo(this.map);
    this.activeLayers.push(layer);
    return layer;
  }

  // ══════════════════════════════════
  // LEGEND
  // ══════════════════════════════════

  buildLegend(mapData) {
    const panel = document.getElementById('legendPanel');
    const title = document.getElementById('legendTitle');
    const body = document.getElementById('legendBody');

    if (!mapData.legend || mapData.legend.length === 0) {
      panel.classList.remove('visible');
      this.isLegendVisible = false;
      return;
    }

    title.textContent = mapData.title + ' — Legend';
    body.innerHTML = '';

    mapData.legend.forEach(section => {
      if (section.sectionTitle) {
        const st = document.createElement('div');
        st.className = 'legend-section-title';
        st.textContent = section.sectionTitle;
        body.appendChild(st);
      }

      if (section.items) {
        section.items.forEach(item => {
          const div = document.createElement('div');
          div.className = 'legend-item';

          let swatch = '';
          if (item.color) {
            swatch = `<div class="legend-color" style="background:${item.color}"></div>`;
          } else if (item.dot) {
            swatch = `<div class="legend-dot" style="background:${item.dot}"></div>`;
          } else if (item.line) {
            swatch = `<div class="legend-line" style="background:${item.line}"></div>`;
          }

          div.innerHTML = `${swatch}<span>${item.label}</span>`;
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

    title.textContent = mapData.title;
    body.innerHTML = '';

    if (mapData.info) {
      mapData.info.forEach(section => {
        const sec = document.createElement('div');
        sec.className = 'info-section';

        const secTitle = document.createElement('div');
        secTitle.className = 'info-section-title';
        secTitle.textContent = section.title;
        sec.appendChild(secTitle);

        if (section.items) {
          section.items.forEach(item => {
            const div = document.createElement('div');
            div.className = 'info-item';
            div.innerHTML = `<i class="fas fa-chevron-right"></i><span>${item}</span>`;
            sec.appendChild(div);
          });
        }

        if (section.facts) {
          section.facts.forEach(fact => {
            const card = document.createElement('div');
            card.className = 'info-fact-card';
            card.innerHTML = `
              <div class="info-fact-title">${fact.label}</div>
              <div class="info-fact-value">${fact.value}</div>
            `;
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
    document.getElementById('welcomeScreen').classList.remove('hidden');
    document.getElementById('leafletMap').classList.remove('visible');
  }

  hideWelcome() {
    document.getElementById('welcomeScreen').classList.add('hidden');
  }

  showMapLoading(text) {
    const loading = document.getElementById('mapLoading');
    document.getElementById('mlText').textContent = text || 'Loading...';
    loading.classList.add('visible');
  }

  hideMapLoading() {
    document.getElementById('mapLoading').classList.remove('visible');
  }

  openSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    sidebar.classList.remove('collapsed');
    sidebar.classList.add('mobile-open');
    overlay.classList.add('visible');
    this.isSidebarOpen = true;
  }

  closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    sidebar.classList.add('collapsed');
    sidebar.classList.remove('mobile-open');
    overlay.classList.remove('visible');
    this.isSidebarOpen = false;
  }

  openSidebarCategory(catId) {
    document.querySelectorAll('.cat-group').forEach(g => {
      if (g.dataset.catId === catId) {
        g.classList.add('open');
      }
    });
  }

  openDropdown(btnId, menuId) {
    document.getElementById(btnId)?.closest('.dropdown-wrap')?.classList.add('open');
  }

  closeDropdown(btnId, menuId) {
    document.getElementById(btnId)?.closest('.dropdown-wrap')?.classList.remove('open');
  }

  // ══════════════════════════════════
  // NAVIGATION
  // ══════════════════════════════════

  navigatePrev() {
    const globalIdx = this.allMaps.findIndex(m => m.mapNum === this.currentMapData?.mapNum);
    if (globalIdx > 0) {
      const prevMap = this.allMaps[globalIdx - 1];
      this.loadMap(prevMap.categoryId, this.getLocalIndex(prevMap));
    }
  }

  navigateNext() {
    const globalIdx = this.allMaps.findIndex(m => m.mapNum === this.currentMapData?.mapNum);
    if (globalIdx < this.allMaps.length - 1) {
      const nextMap = this.allMaps[globalIdx + 1];
      this.loadMap(nextMap.categoryId, this.getLocalIndex(nextMap));
    }
  }

  getLocalIndex(mapData) {
    const maps = window.getMapsByCategory(mapData.categoryId);
    return maps.findIndex(m => m.mapNum === mapData.mapNum);
  }

  // ══════════════════════════════════
  // TOAST
  // ══════════════════════════════════

  showToast(message, type = 'info', duration = 3000) {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    const icons = {
      info: 'fas fa-info-circle',
      success: 'fas fa-check-circle',
      error: 'fas fa-exclamation-circle'
    };

    toast.innerHTML = `
      <i class="${icons[type] || icons.info}"></i>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.animation = 'toastOut 0.3s ease forwards';
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }

  // ══════════════════════════════════
  // HELPER: POPUP BUILDER
  // ══════════════════════════════════

  buildPopup(title, body, tags = []) {
    const tagHTML = tags.map(t => `<span class="popup-tag">${t}</span>`).join('');
    return `
      <div class="custom-popup">
        <div class="popup-title">${title}</div>
        <div class="popup-body">${body}</div>
        ${tagHTML ? `<div style="margin-top:8px">${tagHTML}</div>` : ''}
      </div>
    `;
  }

  // ══════════════════════════════════
  // HELPER: POLYGON STYLE
  // ══════════════════════════════════

  polygonStyle(color, fillOpacity = 0.25, weight = 2) {
    return {
      color,
      fillColor: color,
      fillOpacity,
      weight,
      opacity: 0.9
    };
  }

  // ══════════════════════════════════
  // HELPER: CIRCLE MARKER
  // ══════════════════════════════════

  circleMarker(latlng, options = {}) {
    return L.circleMarker(latlng, {
      radius: options.radius || 7,
      color: options.borderColor || '#000',
      fillColor: options.color || '#FFD166',
      fillOpacity: options.opacity || 0.9,
      weight: options.weight || 2
    });
  }

  // ══════════════════════════════════
  // HELPER: LABEL MARKER
  // ══════════════════════════════════

  labelMarker(latlng, label, color = '#F0A500', size = '11px') {
    const icon = L.divIcon({
      className: '',
      html: `<div style="
        font-family:'Inter',sans-serif;
        font-size:${size};
        font-weight:600;
        color:${color};
        white-space:nowrap;
        text-shadow:0 1px 4px #000,0 0 8px rgba(0,0,0,0.8);
        pointer-events:none;
      ">${label}</div>`,
      iconAnchor: [0, 0]
    });
    return L.marker(latlng, { icon, interactive: false });
  }

  // ══════════════════════════════════
  // EVENTS
  // ══════════════════════════════════

  bindEvents() {
    // Sidebar toggle
    document.getElementById('btnSidebar').addEventListener('click', () => {
      if (this.isSidebarOpen) this.closeSidebar();
      else this.openSidebar();
    });

    document.getElementById('btnCloseSidebar').addEventListener('click', () => {
      this.closeSidebar();
    });

    document.getElementById('sidebarOverlay').addEventListener('click', () => {
      this.closeSidebar();
    });

    // Theme toggle
    document.getElementById('btnTheme').addEventListener('click', () => {
      this.isDark = !this.isDark;
      document.body.classList.toggle('light-theme', !this.isDark);
      const icon = document.getElementById('btnTheme').querySelector('i');
      icon.className = this.isDark ? 'fas fa-moon' : 'fas fa-sun';

      // Reload tile layer if map active
      if (this.map && this.currentMapData) {
        const style = this.isDark ? 'dark' : 'light';
        this.map.eachLayer(l => {
          if (l instanceof L.TileLayer) this.map.removeLayer(l);
        });
        this.getTileLayer(style).addTo(this.map);
      }
    });

    // Fullscreen
    document.getElementById('btnFullscreen').addEventListener('click', () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        document.getElementById('btnFullscreen').querySelector('i').className = 'fas fa-compress';
      } else {
        document.exitFullscreen();
        document.getElementById('btnFullscreen').querySelector('i').className = 'fas fa-expand';
      }
    });

    // Category dropdown
    document.getElementById('categoryDropBtn').addEventListener('click', (e) => {
      e.stopPropagation();
      document.getElementById('categoryDropBtn').closest('.dropdown-wrap').classList.toggle('open');
    });

    // Map dropdown
    document.getElementById('mapDropBtn').addEventListener('click', (e) => {
      e.stopPropagation();
      if (!document.getElementById('mapDropBtn').disabled) {
        document.getElementById('mapDropBtn').closest('.dropdown-wrap').classList.toggle('open');
      }
    });

    // Close dropdowns on outside click
    document.addEventListener('click', () => {
      document.querySelectorAll('.dropdown-wrap.open').forEach(d => d.classList.remove('open'));
    });

    // Nav buttons
    document.getElementById('btnPrevMap').addEventListener('click', () => this.navigatePrev());
    document.getElementById('btnNextMap').addEventListener('click', () => this.navigateNext());

    // Reset view
    document.getElementById('btnResetView').addEventListener('click', () => {
      if (this.map && this.currentMapData) {
        const cfg = this.currentMapData.mapConfig || {};
        this.map.setView(cfg.center || [22, 82], cfg.zoom || 5);
      }
    });

    // Legend
    document.getElementById('btnLegend').addEventListener('click', () => {
      const panel = document.getElementById('legendPanel');
      if (this.isLegendVisible) {
        panel.classList.remove('visible');
        this.isLegendVisible = false;
      } else {
        if (this.currentMapData && this.currentMapData.legend) {
          panel.classList.add('visible');
          this.isLegendVisible = true;
        }
      }
    });

    document.getElementById('btnCloseLegend').addEventListener('click', () => {
      document.getElementById('legendPanel').classList.remove('visible');
      this.isLegendVisible = false;
    });

    // Info
    document.getElementById('btnInfo').addEventListener('click', () => {
      if (this.isInfoVisible) {
        document.getElementById('infoPanel').classList.remove('visible');
        this.isInfoVisible = false;
      } else if (this.currentMapData) {
        this.showInfoPanel(this.currentMapData);
      }
    });

    document.getElementById('btnCloseInfo').addEventListener('click', () => {
      document.getElementById('infoPanel').classList.remove('visible');
      this.isInfoVisible = false;
    });

    // Search
    document.getElementById('mapSearch').addEventListener('input', (e) => {
      this.searchMaps(e.target.value);
      const clearBtn = document.getElementById('btnClearSearch');
      clearBtn.classList.toggle('visible', e.target.value.length > 0);
    });

    document.getElementById('btnClearSearch').addEventListener('click', () => {
      document.getElementById('mapSearch').value = '';
      document.getElementById('btnClearSearch').classList.remove('visible');
      this.searchMaps('');
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT') return;
      if (e.key === 'ArrowLeft') this.navigatePrev();
      if (e.key === 'ArrowRight') this.navigateNext();
      if (e.key === 'f' || e.key === 'F') document.getElementById('btnFullscreen').click();
      if (e.key === 'l' || e.key === 'L') document.getElementById('btnLegend').click();
      if (e.key === 'i' || e.key === 'I') document.getElementById('btnInfo').click();
      if (e.key === 'Escape') {
        this.closeSidebar();
        document.getElementById('infoPanel').classList.remove('visible');
        this.isInfoVisible = false;
      }
    });
  }

  // ══════════════════════════════════
  // SEARCH
  // ══════════════════════════════════

  searchMaps(query) {
    const q = query.toLowerCase().trim();

    document.querySelectorAll('.cat-group').forEach(group => {
      let groupVisible = false;

      group.querySelectorAll('.map-item').forEach(item => {
        const text = item.querySelector('.map-item-text').textContent.toLowerCase();
        const num = item.querySelector('.map-num').textContent.toLowerCase();
        const match = !q || text.includes(q) || num.includes(q);

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
window.addEventListener('DOMContentLoaded', () => {
  window.app = new DharaVerseMapsApp();
});
