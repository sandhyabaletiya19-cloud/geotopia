// ============================================
// GEOTOPIA MAP ENGINE
// Renders 2D and 3D maps with D3.js + Three.js
// ============================================

class MapEngine {
  constructor() {
    // DOM elements
    this.container = null;
    this.canvas3D = null;
    
    // D3.js (2D mode)
    this.svg = null;
    this.projection = null;
    this.path = null;
    this.zoom = null;
    
    // Three.js (3D mode)
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.globe = null;
    this.controls = null;
    
    // Data
    this.geoData = null;
    this.currentYear = -4500000000;
    this.currentEra = null;
    
    // Layers
    this.layers = {
      ocean: null,
      continents: null,
      graticule: null,
      civilizations: null,
      events: null,
      routes: null
    };
    
    // Settings
    this.mode = '2d'; // '2d' or '3d'
    this.animationsEnabled = true;
    this.particlesEnabled = true;
    this.isInitialized = false;
  }
  
  // ============================================
  // INITIALIZATION
  // ============================================
  
  /**
   * Initialize map engine
   */
  async initialize() {
    console.log('Initializing map engine...');
    
    this.container = document.getElementById('map-container');
    if (!this.container) {
      console.error('Map container not found');
      return;
    }
    
    // Initialize 2D first (primary view)
    await this.initialize2D();
    
    // Initialize 3D
    await this.initialize3D();
    
    // Load map data
    await this.loadMapData();
    
    // Set initial mode
    const initialMode = (typeof state !== 'undefined' && state.mapMode) ? state.mapMode : '2d';
    this.setMode(initialMode);
    
    // Listen to state changes
    if (typeof state !== 'undefined' && typeof state.on === 'function') {
      state.on('mapUpdate', (data) => this.onMapUpdate(data));
    }
    
    this.isInitialized = true;
    
    // Initial render
    this.render();
    
    console.log('✓ Map engine ready');
  }
  
  /**
   * Initialize 2D map (D3.js)
   */
  async initialize2D() {
    // Use existing SVG or create new one
    let svgElement = document.getElementById('map-svg');
    
    if (svgElement) {
      this.svg = d3.select(svgElement);
    } else {
      this.svg = d3.select(this.container)
        .append('svg')
        .attr('id', 'map-svg');
    }
    
    // Set dimensions
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;
    
    this.svg
      .attr('width', width)
      .attr('height', height)
      .style('background', '#0a1628');
    
    // Create projection (orthographic for globe-like view)
    this.projection = d3.geoOrthographic()
      .scale(Math.min(width, height) / 2.5)
      .center([0, 0])
      .rotate([0, -20])
      .translate([width / 2, height / 2]);
    
    // Create path generator
    this.path = d3.geoPath().projection(this.projection);
    
    // Create zoom behavior
    this.zoom = d3.zoom()
      .scaleExtent([0.5, 8])
      .on('zoom', (event) => this.handleZoom2D(event));
    
    this.svg.call(this.zoom);
    
    // Enable drag rotation
    this.svg.call(
      d3.drag()
        .on('drag', (event) => this.handleDrag(event))
    );
    
    // Create layer groups (order matters for z-index)
    this.layers.ocean = this.svg.append('g').attr('class', 'layer-ocean');
    this.layers.graticule = this.svg.append('g').attr('class', 'layer-graticule');
    this.layers.continents = this.svg.append('g').attr('class', 'layer-continents');
    this.layers.routes = this.svg.append('g').attr('class', 'layer-routes');
    this.layers.civilizations = this.svg.append('g').attr('class', 'layer-civilizations');
    this.layers.events = this.svg.append('g').attr('class', 'layer-events');
    
    // Draw ocean background (visible sphere)
    this.drawOcean();
    
    // Draw graticule (latitude/longitude lines)
    this.drawGraticule();
    
    console.log('✓ 2D map initialized');
  }
  
  /**
   * Draw ocean sphere
   */
  drawOcean() {
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;
    
    this.layers.ocean.selectAll('*').remove();
    
    // Ocean circle
    this.layers.ocean
      .append('circle')
      .attr('cx', width / 2)
      .attr('cy', height / 2)
      .attr('r', this.projection.scale())
      .attr('fill', '#1a3a5c')
      .attr('stroke', '#2a5a8c')
      .attr('stroke-width', 2);
  }
  
  /**
   * Draw graticule (grid lines)
   */
  drawGraticule() {
    this.layers.graticule.selectAll('*').remove();
    
    const graticule = d3.geoGraticule();
    
    this.layers.graticule
      .append('path')
      .datum(graticule())
      .attr('d', this.path)
      .attr('fill', 'none')
      .attr('stroke', '#2a4a6c')
      .attr('stroke-width', 0.3)
      .attr('stroke-opacity', 0.5);
  }
  
  /**
   * Initialize 3D globe (Three.js)
   */
  async initialize3D() {
    // Check if Three.js is available
    if (typeof THREE === 'undefined') {
      console.warn('Three.js not available, 3D mode disabled');
      return;
    }
    
    // Create scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x000510);
    
    // Create camera
    this.camera = new THREE.PerspectiveCamera(
      45,
      this.container.clientWidth / this.container.clientHeight,
      0.1,
      1000
    );
    this.camera.position.z = 500;
    
    // Create renderer
    this.renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    });
    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    
    this.canvas3D = this.renderer.domElement;
    this.canvas3D.id = 'map-3d';
    this.canvas3D.style.display = 'none';
    this.canvas3D.style.position = 'absolute';
    this.canvas3D.style.top = '0';
    this.canvas3D.style.left = '0';
    this.container.appendChild(this.canvas3D);
    
    // Create globe
    this.createGlobe();
    
    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 3, 5);
    this.scene.add(directionalLight);
    
    // Add stars
    this.createStarfield();
    
    // Start animation loop
    this.animate3D();
    
    console.log('✓ 3D map initialized');
  }
  
  /**
   * Create 3D globe
   */
  createGlobe() {
    const geometry = new THREE.SphereGeometry(200, 64, 64);
    
    const material = new THREE.MeshPhongMaterial({
      color: 0x1a3a5c,
      emissive: 0x112244,
      specular: 0x333333,
      shininess: 15
    });
    
    this.globe = new THREE.Mesh(geometry, material);
    this.scene.add(this.globe);
    
    // Add wireframe for continents feel
    const wireGeometry = new THREE.SphereGeometry(201, 32, 32);
    const wireMaterial = new THREE.MeshBasicMaterial({
      color: 0x2a5a8c,
      wireframe: true,
      transparent: true,
      opacity: 0.3
    });
    const wireGlobe = new THREE.Mesh(wireGeometry, wireMaterial);
    this.scene.add(wireGlobe);
  }
  
  /**
   * Create starfield background
   */
  createStarfield() {
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 10000;
    const positions = new Float32Array(starCount * 3);
    
    for (let i = 0; i < starCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 2000;
      positions[i + 1] = (Math.random() - 0.5) * 2000;
      positions[i + 2] = (Math.random() - 0.5) * 2000;
    }
    
    starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 1,
      transparent: true,
      opacity: 0.8
    });
    
    const stars = new THREE.Points(starGeometry, starMaterial);
    this.scene.add(stars);
  }
  
  // ============================================
  // DATA LOADING
  // ============================================
  
  /**
   * Load map data
   */
  async loadMapData() {
    try {
      // Try to load world topology
      const response = await fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json');
      
      if (!response.ok) {
        throw new Error('Failed to fetch map data');
      }
      
      this.geoData = await response.json();
      console.log('✓ Map data loaded');
      
      // Draw continents with real data
      this.drawContinents();
      
    } catch (error) {
      console.warn('Could not load external map data:', error);
      console.log('Using fallback map...');
      
      // Create simple fallback
      this.drawFallbackMap();
    }
  }
  
  /**
   * Draw fallback map when external data fails
   */
  drawFallbackMap() {
    this.layers.continents.selectAll('*').remove();
    
    // Simple continent shapes (approximate)
    const continents = [
      // Africa
      { name: 'Africa', cx: 15, cy: 5, rx: 20, ry: 25 },
      // Europe
      { name: 'Europe', cx: 15, cy: 50, rx: 15, ry: 10 },
      // Asia
      { name: 'Asia', cx: 80, cy: 40, rx: 40, ry: 25 },
      // North America
      { name: 'North America', cx: -100, cy: 45, rx: 25, ry: 20 },
      // South America
      { name: 'South America', cx: -60, cy: -15, rx: 15, ry: 25 },
      // Australia
      { name: 'Australia', cx: 135, cy: -25, rx: 15, ry: 12 },
      // Antarctica
      { name: 'Antarctica', cx: 0, cy: -80, rx: 40, ry: 10 }
    ];
    
    continents.forEach(cont => {
      const projected = this.projection([cont.cx, cont.cy]);
      if (projected) {
        this.layers.continents
          .append('ellipse')
          .attr('cx', projected[0])
          .attr('cy', projected[1])
          .attr('rx', cont.rx * 2)
          .attr('ry', cont.ry * 2)
          .attr('fill', this.getEraColor())
          .attr('stroke', '#fff')
          .attr('stroke-width', 0.5)
          .attr('opacity', 0.8);
      }
    });
  }
  
  // ============================================
  // RENDERING
  // ============================================
  
  /**
   * Main render function
   */
  render() {
    if (this.mode === '2d') {
      this.render2D();
    } else {
      this.render3D();
    }
  }
  
  /**
   * Draw map (alias for render)
   */
  drawMap() {
    this.render();
  }
  
  /**
   * Render 2D map
   */
  render2D() {
    // Redraw ocean
    this.drawOcean();
    
    // Redraw graticule
    this.drawGraticule();
    
    // Draw continents
    this.drawContinents();
    
    // Render civilizations
    this.renderCivilizations2D();
    
    // Render events
    this.renderEvents2D();
    
    // Update era display
    this.updateEraDisplay();
  }
  
  /**
   * Draw continents
   */
  drawContinents() {
    this.layers.continents.selectAll('*').remove();
    
    if (!this.geoData) {
      this.drawFallbackMap();
      return;
    }
    
    try {
      const countries = topojson.feature(this.geoData, this.geoData.objects.countries);
      
      this.layers.continents
        .selectAll('path')
        .data(countries.features)
        .enter()
        .append('path')
        .attr('d', this.path)
        .attr('class', 'country')
        .attr('fill', this.getEraColor())
        .attr('stroke', '#ffffff')
        .attr('stroke-width', 0.5)
        .attr('opacity', 0.9)
        .on('mouseover', function() {
          d3.select(this).attr('opacity', 1).attr('stroke-width', 1);
        })
        .on('mouseout', function() {
          d3.select(this).attr('opacity', 0.9).attr('stroke-width', 0.5);
        });
        
    } catch (error) {
      console.warn('Error drawing continents:', error);
      this.drawFallbackMap();
    }
  }
  
  /**
   * Render 3D globe
   */
  render3D() {
    this.updateGlobeAppearance();
  }
  
  /**
   * 3D animation loop
   */
  animate3D() {
    if (!this.renderer) return;
    
    requestAnimationFrame(() => this.animate3D());
    
    // Auto-rotate
    if (this.globe && this.animationsEnabled) {
      this.globe.rotation.y += 0.002;
    }
    
    this.renderer.render(this.scene, this.camera);
  }
  
  // ============================================
  // ERA-SPECIFIC RENDERING
  // ============================================
  
  /**
   * Get color for current era
   */
  getEraColor() {
    const year = this.currentYear;
    
    if (year < -4000000000) return '#ff4500'; // Hadean - molten
    if (year < -2500000000) return '#8b0000'; // Archean - volcanic
    if (year < -541000000) return '#4b0082';  // Proterozoic - purple
    if (year < -252000000) return '#006400';  // Paleozoic - green
    if (year < -66000000) return '#228b22';   // Mesozoic - forest green
    if (year < -10000) return '#4682b4';      // Cenozoic - blue
    return '#2e8b57';                          // Human era - sea green
  }
  
  /**
   * Get era name
   */
  getEraName() {
    const year = this.currentYear;
    
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
   * Update era display
   */
  updateEraDisplay() {
    const eraElement = document.getElementById('current-era');
    const yearElement = document.getElementById('current-year-display');
    
    if (eraElement) {
      eraElement.textContent = this.getEraName();
      eraElement.style.color = this.getEraColor();
    }
    
    if (yearElement) {
      yearElement.textContent = this.formatYear(this.currentYear);
    }
  }
  
  /**
   * Format year for display
   */
  formatYear(year) {
    if (year < -1000000000) {
      return (Math.abs(year) / 1000000000).toFixed(1) + ' BYA';
    }
    if (year < -1000000) {
      return (Math.abs(year) / 1000000).toFixed(1) + ' MYA';
    }
    if (year < -10000) {
      return (Math.abs(year) / 1000).toFixed(0) + ',000 BCE';
    }
    if (year < 0) {
      return Math.abs(year).toLocaleString() + ' BCE';
    }
    return year.toLocaleString() + ' CE';
  }
  
  /**
   * Update globe appearance for current era
   */
  updateGlobeAppearance() {
    if (!this.globe) return;
    
    const color = this.getEraColor();
    this.globe.material.color.setStyle(color);
    
    // Adjust emissive based on era
    if (this.currentYear < -4000000000) {
      this.globe.material.emissive.setHex(0xcc0000);
    } else if (this.currentYear < -2500000000) {
      this.globe.material.emissive.setHex(0x4b0000);
    } else {
      this.globe.material.emissive.setHex(0x112244);
    }
  }
  
  // ============================================
  // CIVILIZATION & EVENT RENDERING
  // ============================================
  
  /**
   * Render civilizations (2D)
   */
  renderCivilizations2D() {
    this.layers.civilizations.selectAll('*').remove();
    
    // Get data from GEOTOPIA_DATA if available
    if (typeof GEOTOPIA_DATA !== 'undefined') {
      const civs = GEOTOPIA_DATA.getActiveCivilizationsAtYear(this.currentYear);
      
      civs.forEach(civ => {
        if (!civ.coordinates) return;
        
        const pos = this.projection([civ.coordinates.lng, civ.coordinates.lat]);
        if (!pos) return;
        
        // Draw civilization marker
        this.layers.civilizations
          .append('circle')
          .attr('cx', pos[0])
          .attr('cy', pos[1])
          .attr('r', 8)
          .attr('fill', civ.regionColor || '#FFD700')
          .attr('stroke', '#fff')
          .attr('stroke-width', 2)
          .attr('class', 'civilization-marker')
          .style('cursor', 'pointer')
          .on('click', () => {
            console.log('Clicked civilization:', civ.name);
            if (typeof state !== 'undefined' && state.selectCivilization) {
              state.selectCivilization(civ);
            }
          })
          .append('title')
          .text(civ.name);
        
        // Add label
        this.layers.civilizations
          .append('text')
          .attr('x', pos[0])
          .attr('y', pos[1] - 12)
          .attr('text-anchor', 'middle')
          .attr('fill', '#fff')
          .attr('font-size', '10px')
          .attr('font-weight', 'bold')
          .text(civ.name);
      });
    }
  }
  
  /**
   * Render events (2D)
   */
  renderEvents2D() {
    this.layers.events.selectAll('*').remove();
    
    // Get events from GEOTOPIA_DATA if available
    if (typeof GEOTOPIA_DATA !== 'undefined') {
      const events = GEOTOPIA_DATA.getEventsAtYear(this.currentYear);
      
      events.forEach(event => {
        if (!event.coordinates) return;
        
        const pos = this.projection([event.coordinates.lng, event.coordinates.lat]);
        if (!pos) return;
        
        // Event type colors
        const typeColors = {
          'geological': '#ff6600',
          'biological': '#00ff00',
          'political': '#ff0000',
          'cultural': '#ffff00',
          'military': '#ff0000',
          'technological': '#00ffff',
          'catastrophic': '#ff00ff'
        };
        
        const color = typeColors[event.type] || '#ffffff';
        
        // Draw event marker
        this.layers.events
          .append('circle')
          .attr('cx', pos[0])
          .attr('cy', pos[1])
          .attr('r', 5)
          .attr('fill', color)
          .attr('stroke', '#fff')
          .attr('stroke-width', 1)
          .attr('class', 'event-marker')
          .style('cursor', 'pointer')
          .append('title')
          .text(event.name || event.event || 'Event');
      });
    }
  }
  
  // ============================================
  // INTERACTION
  // ============================================
  
  /**
   * Handle 2D zoom
   */
  handleZoom2D(event) {
    const transform = event.transform;
    const newScale = Math.min(this.container.clientWidth, this.container.clientHeight) / 2.5 * transform.k;
    this.projection.scale(newScale);
    this.render2D();
  }
  
  /**
   * Handle drag rotation
   */
  handleDrag(event) {
    const rotate = this.projection.rotate();
    const sensitivity = 0.5;
    
    this.projection.rotate([
      rotate[0] + event.dx * sensitivity,
      rotate[1] - event.dy * sensitivity
    ]);
    
    this.render2D();
  }
  
  // ============================================
  // STATE UPDATES
  // ============================================
  
  /**
   * Update year
   */
  updateYear(year) {
    this.currentYear = year;
    this.render();
  }
  
  /**
   * Handle map updates from state
   */
  onMapUpdate(data) {
    if (data.mode) {
      this.setMode(data.mode);
    }
    
    if (data.rotation) {
      this.rotateGlobe(data.rotation);
    }
    
    if (data.zoom) {
      this.setZoom(data.zoom);
    }
  }
  
  /**
   * Set map mode
   */
  setMode(mode) {
    this.mode = mode;
    
    const svg = document.getElementById('map-svg');
    
    if (mode === '2d') {
      if (svg) svg.style.display = 'block';
      if (this.canvas3D) this.canvas3D.style.display = 'none';
      this.render2D();
    } else {
      if (svg) svg.style.display = 'none';
      if (this.canvas3D) this.canvas3D.style.display = 'block';
      this.render3D();
    }
  }
  
  /**
   * Rotate 3D globe
   */
  rotateGlobe(rotation) {
    if (this.globe) {
      this.globe.rotation.x = rotation.phi || 0;
      this.globe.rotation.y = rotation.lambda || 0;
      this.globe.rotation.z = rotation.gamma || 0;
    }
  }
  
  /**
   * Set zoom level
   */
  setZoom(zoom) {
    if (this.mode === '2d') {
      const baseScale = Math.min(this.container.clientWidth, this.container.clientHeight) / 2.5;
      this.projection.scale(baseScale * zoom);
      this.render2D();
    } else if (this.camera) {
      this.camera.position.z = 500 / zoom;
    }
  }
  
  // ============================================
  // UTILITIES
  // ============================================
  
  /**
   * Resize map
   */
  resize() {
    if (!this.container) return;
    
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;
    
    // Resize 2D
    if (this.svg) {
      this.svg.attr('width', width).attr('height', height);
      this.projection
        .scale(Math.min(width, height) / 2.5)
        .translate([width / 2, height / 2]);
    }
    
    // Resize 3D
    if (this.camera && this.renderer) {
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(width, height);
    }
    
    this.render();
  }
  
  /**
   * Apply filters
   */
  applyFilters(filters) {
    this.render();
  }
  
  /**
   * Set animations enabled
   */
  setAnimations(enabled) {
    this.animationsEnabled = enabled;
  }
  
  /**
   * Set particles enabled
   */
  setParticles(enabled) {
    this.particlesEnabled = enabled;
  }
}

// Make MapEngine available globally
window.MapEngine = MapEngine;

console.log('🗺️ Map Engine module loaded');
