// ============================================
// GEOTOPIA MAP ENGINE
// Renders 2D and 3D maps with D3.js + Three.js
// ============================================

class MapEngine {
  constructor() {
    // DOM elements
    this.container = null;
    this.canvas2D = null;
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
      continents: null,
      civilizations: [],
      events: [],
      tradeRoutes: [],
      migrations: []
    };
    
    // Settings
    this.mode = '3d'; // '2d' or '3d'
    this.animationsEnabled = true;
    this.particlesEnabled = true;
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
    
    // Initialize both 2D and 3D
    await this.initialize2D();
    await this.initialize3D();
    
    // Load map data
    await this.loadMapData();
    
    // Set initial mode
    this.setMode(state.mapMode);
    
    // Listen to state changes
    state.on('mapUpdate', (data) => this.onMapUpdate(data));
    
    // Initial render
    this.render();
    
    console.log('✓ Map engine ready');
  }
  
  /**
   * Initialize 2D map (D3.js)
   */
  async initialize2D() {
    // Create SVG
    this.svg = d3.select(this.container)
      .append('svg')
      .attr('id', 'map-2d')
      .attr('width', this.container.clientWidth)
      .attr('height', this.container.clientHeight);
    
    // Create projection
    this.projection = d3.geoOrthographic()
      .scale(250)
      .center([0, 0])
      .rotate([0, -30])
      .translate([this.container.clientWidth / 2, this.container.clientHeight / 2]);
    
    // Create path generator
    this.path = d3.geoPath().projection(this.projection);
    
    // Create zoom behavior
    this.zoom = d3.zoom()
      .scaleExtent([0.5, 10])
      .on('zoom', (event) => this.handleZoom2D(event));
    
    this.svg.call(this.zoom);
    
    // Create groups for layers
    this.layers.continents = this.svg.append('g').attr('class', 'continents');
    this.layers.civilizationsGroup = this.svg.append('g').attr('class', 'civilizations');
    this.layers.eventsGroup = this.svg.append('g').attr('class', 'events');
    this.layers.routesGroup = this.svg.append('g').attr('class', 'routes');
  }
  
  /**
   * Initialize 3D globe (Three.js)
   */
  async initialize3D() {
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
  }
  
  /**
   * Create 3D globe
   */
  createGlobe() {
    const geometry = new THREE.SphereGeometry(200, 64, 64);
    
    // Earth texture (will be updated based on era)
    const material = new THREE.MeshPhongMaterial({
      color: 0x2233ff,
      emissive: 0x112244,
      specular: 0x333333,
      shininess: 15
    });
    
    this.globe = new THREE.Mesh(geometry, material);
    this.scene.add(this.globe);
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
      // Load world topology
      const response = await fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json');
      this.geoData = await response.json();
      
      console.log('✓ Map data loaded');
    } catch (error) {
      console.error('Failed to load map data:', error);
      // Create fallback simple sphere
    }
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
   * Render 2D map
   */
  render2D() {
    if (!this.geoData) return;
    
    const features = topojson.feature(this.geoData, this.geoData.objects.countries);
    
    // Clear previous
    this.layers.continents.selectAll('path').remove();
    
    // Draw continents
    this.layers.continents
      .selectAll('path')
      .data(features.features)
      .enter()
      .append('path')
      .attr('d', this.path)
      .attr('class', 'continent')
      .attr('fill', this.getContinentColor())
      .attr('stroke', '#ffffff')
      .attr('stroke-width', 0.5);
    
    // Render civilizations
    this.renderCivilizations2D();
    
    // Render events
    this.renderEvents2D();
    
    // Render trade routes
    this.renderTradeRoutes2D();
  }
  
  /**
   * Render 3D globe
   */
  render3D() {
    // Update globe appearance based on era
    this.updateGlobeAppearance();
  }
  
  /**
   * 3D animation loop
   */
  animate3D() {
    requestAnimationFrame(() => this.animate3D());
    
    // Auto-rotate
    if (this.animationsEnabled && !state.isPlaying) {
      this.globe.rotation.y += 0.001;
    }
    
    this.renderer.render(this.scene, this.camera);
  }
  
  // ============================================
  // ERA-SPECIFIC RENDERING
  // ============================================
  
  /**
   * Update globe appearance for current era
   */
  updateGlobeAppearance() {
    if (!this.globe) return;
    
    const era = GeoUtils.getEra(this.currentYear);
    
    switch(era.name) {
      case 'Hadean':
        this.globe.material.color.setHex(0xff4500);
        this.globe.material.emissive.setHex(0xcc0000);
        break;
        
      case 'Archean':
        this.globe.material.color.setHex(0x8b0000);
        this.globe.material.emissive.setHex(0x4b0000);
        break;
        
      case 'Proterozoic':
        this.globe.material.color.setHex(0x4b0082);
        this.globe.material.emissive.setHex(0x2b0042);
        break;
        
      case 'Paleozoic':
        this.globe.material.color.setHex(0x006400);
        this.globe.material.emissive.setHex(0x003200);
        break;
        
      case 'Mesozoic':
        this.globe.material.color.setHex(0x228b22);
        this.globe.material.emissive.setHex(0x114b11);
        break;
        
      case 'Cenozoic':
        this.globe.material.color.setHex(0x4682b4);
        this.globe.material.emissive.setHex(0x234159);
        break;
    }
  }
  
  /**
   * Get continent color for current era
   */
  getContinentColor() {
    const era = GeoUtils.getEra(this.currentYear);
    return era.color;
  }
  
  // ============================================
  // CIVILIZATION RENDERING
  // ============================================
  
  /**
   * Render civilizations (2D)
   */
  renderCivilizations2D() {
    if (!window.dataEngine) return;
    
    const civilizations = dataEngine.getActiveCivilizationsAt(this.currentYear);
    
    this.layers.civilizationsGroup.selectAll('.civilization').remove();
    
    civilizations.forEach(civ => {
      if (!civ.territory) return;
      
      // Draw territory
      this.layers.civilizationsGroup
        .append('circle')
        .attr('class', 'civilization')
        .attr('cx', this.projection([civ.coordinates.lng, civ.coordinates.lat])[0])
        .attr('cy', this.projection([civ.coordinates.lng, civ.coordinates.lat])[1])
        .attr('r', 5)
        .attr('fill', civ.color || '#FFD700')
        .on('click', () => state.selectCivilization(civ));
    });
  }
  
  /**
   * Render events (2D)
   */
  renderEvents2D() {
    if (!window.dataEngine) return;
    
    const events = dataEngine.getEventsNear(this.currentYear, 100);
    
    this.layers.eventsGroup.selectAll('.event-marker').remove();
    
    events.forEach(event => {
      if (!event.coordinates) return;
      
      const pos = this.projection([event.coordinates.lng, event.coordinates.lat]);
      
      this.layers.eventsGroup
        .append('circle')
        .attr('class', `event-marker event-${event.type}`)
        .attr('cx', pos[0])
        .attr('cy', pos[1])
        .attr('r', 3)
        .on('click', () => state.selectEvent(event));
    });
  }
  
  /**
   * Render trade routes (2D)
   */
  renderTradeRoutes2D() {
    if (!window.dataEngine) return;
    
    const routes = dataEngine.getActiveTradeRoutes(this.currentYear);
    
    this.layers.routesGroup.selectAll('.trade-route').remove();
    
    routes.forEach(route => {
      const from = dataEngine.getCivilization(route.from);
      const to = dataEngine.getCivilization(route.to);
      
      if (!from || !to) return;
      
      const line = d3.line()
        .x(d => this.projection([d.lng, d.lat])[0])
        .y(d => this.projection([d.lng, d.lat])[1]);
      
      this.layers.routesGroup
        .append('path')
        .attr('class', 'trade-route')
        .attr('d', line([
          { lng: from.coordinates.lng, lat: from.coordinates.lat },
          { lng: to.coordinates.lng, lat: to.coordinates.lat }
        ]))
        .attr('stroke', '#ffd700')
        .attr('stroke-width', 1)
        .attr('fill', 'none');
    });
  }
  
  // ============================================
  // INTERACTION
  // ============================================
  
  /**
   * Handle 2D zoom
   */
  handleZoom2D(event) {
    const transform = event.transform;
    this.projection.scale(250 * transform.k);
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
    this.currentEra = GeoUtils.getEra(year);
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
    
    if (mode === '2d') {
      this.svg.style('display', 'block');
      this.canvas3D.style.display = 'none';
      this.render2D();
    } else {
      this.svg.style('display', 'none');
      this.canvas3D.style.display = 'block';
      this.render3D();
    }
  }
  
  /**
   * Rotate 3D globe
   */
  rotateGlobe(rotation) {
    if (this.globe) {
      this.globe.rotation.x = rotation.phi;
      this.globe.rotation.y = rotation.lambda;
      this.globe.rotation.z = rotation.gamma;
    }
  }
  
  /**
   * Set zoom level
   */
  setZoom(zoom) {
    if (this.mode === '2d') {
      this.projection.scale(250 * zoom);
      this.render2D();
    } else {
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
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;
    
    // Resize 2D
    this.svg.attr('width', width).attr('height', height);
    this.projection.translate([width / 2, height / 2]);
    
    // Resize 3D
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
    
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

// Create global instance
window.mapEngine = null; // Will be created by app.js
