/**
 * GEOTOPIA MAP ENGINE - FIXED VERSION
 * 3D Globe with morphing continents + 2D fallback
 * Debugging enabled, CORS-free, guaranteed to show SOMETHING
 */

class MapEngine {
    constructor() {
        this.mode = '3d'; // '3d' or '2d'
        this.currentYear = -4500000000;
        
        // THREE.js setup
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.globe = null;
        this.controls = null;
        
        // D3.js setup (2D fallback)
        this.svg = null;
        this.projection = null;
        this.path = null;
        
        // Current state
        this.continents = new Map();
        this.currentContinentMeshes = [];
        this.civilizationMarkers = [];
        this.eventMarkers = [];
        
        // Animation
        this.isAnimating = false;
        this.rotationSpeed = 0.001;
        this.isDragging = false;
        
        // Performance
        this.renderQuality = 'high'; // high, medium, low
        
        // Debug
        this.debugMode = true;
    }

    /**
     * Initialize the map engine
     */
    async init() {
        console.log('🗺️ MAP ENGINE: Starting initialization...');
        
        const container = document.getElementById('map-container');
        
        if (!container) {
            console.error('❌ MAP ENGINE: Container not found!');
            return;
        }

        console.log('✅ MAP ENGINE: Container found:', container);

        // Try 3D first, fallback to 2D if WebGL not supported
        if (this.isWebGLAvailable()) {
            console.log('✅ MAP ENGINE: WebGL available, initializing 3D...');
            await this.init3D(container);
        } else {
            console.warn('⚠️ MAP ENGINE: WebGL not available, using 2D fallback');
            this.mode = '2d';
            await this.init2D(container);
        }

        // Start render loop
        console.log('🎬 MAP ENGINE: Starting animation loop...');
        this.animate();
        
        // Handle window resize
        window.addEventListener('resize', () => this.onWindowResize());
        
        // Load initial year
        console.log('📅 MAP ENGINE: Loading initial year...');
        await this.renderYear(this.currentYear);
        
        console.log('✅ MAP ENGINE: Initialization complete!');
    }

    /**
     * Check WebGL support
     */
    isWebGLAvailable() {
        try {
            const canvas = document.createElement('canvas');
            const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
            const available = !!gl;
            console.log(`🔍 MAP ENGINE: WebGL available: ${available}`);
            return available;
        } catch (e) {
            console.error('❌ MAP ENGINE: WebGL check failed:', e);
            return false;
        }
    }

    /**
     * Initialize 3D mode (THREE.js)
     */
    async init3D(container) {
        console.log('🌐 MAP ENGINE: Initializing 3D mode...');

        // Scene
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x000011);
        console.log('  ✓ Scene created');

        // Camera
        const aspect = container.clientWidth / container.clientHeight;
        this.camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 1000);
        this.camera.position.z = 5;
        console.log('  ✓ Camera created at position:', this.camera.position);

        // Renderer
        this.renderer = new THREE.WebGLRenderer({ 
            antialias: this.renderQuality === 'high',
            alpha: true,
            powerPreference: 'high-performance'
        });
        this.renderer.setSize(container.clientWidth, container.clientHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // ⚠️ CRITICAL: Clear container and add canvas
    console.log('  🧹 Clearing container...');
    container.innerHTML = '';  // <-- THIS LINE IS CRITICAL
    container.appendChild(this.renderer.domElement);
    console.log('  ✓ Renderer created and added to DOM');
    console.log('  ✓ Canvas dimensions:', this.renderer.domElement.width, 'x', this.renderer.domElement.height);
        
        // Clear container and add canvas
        container.innerHTML = '';
        container.appendChild(this.renderer.domElement);
        console.log('  ✓ Renderer created and added to DOM');

        // Lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        this.scene.add(ambientLight);
        console.log('  ✓ Ambient light added');

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(5, 3, 5);
        this.scene.add(directionalLight);
        console.log('  ✓ Directional light added');

        // Add stars background
        this.addStarfield();

        // Create globe base
        await this.createGlobe();

        // Mouse controls (orbit)
        this.addOrbitControls();

        console.log('✅ MAP ENGINE: 3D initialization complete');
    }

    /**
     * Add starfield background
     */
    addStarfield() {
        console.log('⭐ MAP ENGINE: Adding starfield...');
        
        const starGeometry = new THREE.BufferGeometry();
        const starCount = 5000;
        const positions = new Float32Array(starCount * 3);

        for (let i = 0; i < starCount * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 200;
        }

        starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        
        const starMaterial = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 0.15,
            transparent: true,
            opacity: 0.8
        });

        const stars = new THREE.Points(starGeometry, starMaterial);
        this.scene.add(stars);
        
        console.log('  ✓ Starfield added with', starCount, 'stars');
    }

    /**
     * Create the base globe
     */
    async createGlobe() {
        console.log('🌍 MAP ENGINE: Creating globe...');
        
        // Sphere geometry
        const geometry = new THREE.SphereGeometry(2, 64, 64);
        
        // BRIGHT ocean material so we can see it!
        const oceanMaterial = new THREE.MeshPhongMaterial({
            color: 0x2a5f8f,      // Deep blue
            emissive: 0x1a3f5f,   // Self-glow
            emissiveIntensity: 0.2,
            shininess: 100,
            transparent: false
        });

        this.globe = new THREE.Mesh(geometry, oceanMaterial);
        this.scene.add(this.globe);
        
        console.log('  ✓ Globe mesh created and added to scene');
        console.log('  ✓ Globe position:', this.globe.position);
        console.log('  ✓ Globe visible:', this.globe.visible);

        // Add atmosphere glow
        this.addAtmosphere();
        
        console.log('✅ MAP ENGINE: Globe creation complete');
    }

    /**
     * Add atmospheric glow effect
     */
    addAtmosphere() {
        console.log('💨 MAP ENGINE: Adding atmosphere...');
        
        const atmosphereGeometry = new THREE.SphereGeometry(2.15, 64, 64);
        const atmosphereMaterial = new THREE.ShaderMaterial({
            vertexShader: `
                varying vec3 vNormal;
                void main() {
                    vNormal = normalize(normalMatrix * normal);
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                varying vec3 vNormal;
                void main() {
                    float intensity = pow(0.6 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
                    gl_FragColor = vec4(0.3, 0.6, 1.0, 1.0) * intensity;
                }
            `,
            blending: THREE.AdditiveBlending,
            side: THREE.BackSide,
            transparent: true
        });

        const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
        this.scene.add(atmosphere);
        
        console.log('  ✓ Atmosphere glow added');
    }

    /**
     * Add orbit controls
     */
    addOrbitControls() {
        console.log('🖱️ MAP ENGINE: Setting up orbit controls...');
        
        let isDragging = false;
        let previousMousePosition = { x: 0, y: 0 };
        let rotation = { x: 0, y: 0 };

        this.renderer.domElement.addEventListener('mousedown', (e) => {
            isDragging = true;
            this.isDragging = true;
            previousMousePosition = { x: e.clientX, y: e.clientY };
            this.renderer.domElement.style.cursor = 'grabbing';
        });

        this.renderer.domElement.addEventListener('mousemove', (e) => {
            if (isDragging) {
                const deltaX = e.clientX - previousMousePosition.x;
                const deltaY = e.clientY - previousMousePosition.y;

                rotation.y += deltaX * 0.005;
                rotation.x += deltaY * 0.005;

                // Clamp X rotation
                rotation.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, rotation.x));

                this.globe.rotation.y = rotation.y;
                this.globe.rotation.x = rotation.x;

                // Rotate continents too
                this.currentContinentMeshes.forEach(mesh => {
                    mesh.rotation.y = rotation.y;
                    mesh.rotation.x = rotation.x;
                });

                previousMousePosition = { x: e.clientX, y: e.clientY };
            }
        });

        this.renderer.domElement.addEventListener('mouseup', () => {
            isDragging = false;
            this.isDragging = false;
            this.renderer.domElement.style.cursor = 'grab';
        });

        this.renderer.domElement.addEventListener('mouseleave', () => {
            isDragging = false;
            this.isDragging = false;
            this.renderer.domElement.style.cursor = 'grab';
        });

        // Zoom with mouse wheel
        this.renderer.domElement.addEventListener('wheel', (e) => {
            e.preventDefault();
            const delta = e.deltaY * 0.001;
            this.camera.position.z = Math.max(3, Math.min(10, this.camera.position.z + delta));
        });

        this.renderer.domElement.style.cursor = 'grab';
        
        console.log('  ✓ Orbit controls ready');
    }

    /**
     * Initialize 2D mode (D3.js fallback)
     */
    async init2D(container) {
        console.log('🗾 MAP ENGINE: Initializing 2D mode...');
        
        const width = container.clientWidth;
        const height = container.clientHeight;

        // Create SVG
        this.svg = d3.select(container)
            .append('svg')
            .attr('width', width)
            .attr('height', height);

        // Projection (orthographic for globe-like appearance)
        this.projection = d3.geoOrthographic()
            .scale(Math.min(width, height) / 2.5)
            .translate([width / 2, height / 2])
            .clipAngle(90);

        // Path generator
        this.path = d3.geoPath().projection(this.projection);

        // Add ocean
        this.svg.append('circle')
            .attr('cx', width / 2)
            .attr('cy', height / 2)
            .attr('r', this.projection.scale())
            .attr('fill', '#1a4d7a');

        // Add graticule (grid lines)
        const graticule = d3.geoGraticule();
        this.svg.append('path')
            .datum(graticule)
            .attr('class', 'graticule')
            .attr('d', this.path)
            .attr('fill', 'none')
            .attr('stroke', '#333')
            .attr('stroke-width', 0.5)
            .attr('opacity', 0.3);

        // Add drag to rotate
        const drag = d3.drag()
            .on('drag', (event) => {
                const rotate = this.projection.rotate();
                this.projection.rotate([rotate[0] + event.dx * 0.5, rotate[1] - event.dy * 0.5]);
                this.svg.selectAll('path').attr('d', this.path);
            });

        this.svg.call(drag);

        console.log('✅ MAP ENGINE: 2D initialization complete');
    }

    /**
     * Render specific year
     */
    async renderYear(year) {
        console.log(`\n🗓️ MAP ENGINE: Rendering year ${year}...`);
        this.currentYear = year;

        // Get continental positions for this year
        const continentalData = await dataEngine.getContinentalPositions(year);
        
        console.log('📊 MAP ENGINE: Continental data received:', continentalData);
        
        if (!continentalData) {
            console.error('❌ MAP ENGINE: No continental data for year', year);
            return;
        }

        // Determine rendering mode based on year
        const renderMode = this.getRenderMode(year);
        console.log(`🎨 MAP ENGINE: Render mode: ${renderMode}`);

        try {
            switch (renderMode) {
                case 'molten':
                    await this.renderMoltenEarth();
                    break;
                case 'early':
                    await this.renderEarlyEarth(continentalData);
                    break;
                case 'geological':
                    await this.renderGeologicalEarth(continentalData);
                    break;
                case 'modern':
                    await this.renderModernEarth(continentalData);
                    break;
            }

            // Add events/markers for this year
            await this.renderEvents(year);

            // Update UI
            this.updateMapLegend(year, renderMode);
            
            console.log('✅ MAP ENGINE: Year rendered successfully\n');
            
        } catch (error) {
            console.error('❌ MAP ENGINE: Error rendering year:', error);
        }
    }

    /**
     * Determine render mode based on year
     */
    getRenderMode(year) {
        if (year < -4000000000) return 'molten'; // Hadean - molten Earth
        if (year < -2500000000) return 'early';  // Archean - early continents
        if (year < -10000) return 'geological';  // Geological time
        return 'modern';                          // Historical time
    }

    /**
     * Render molten Earth (Hadean Eon)
     */
    async renderMoltenEarth() {
        console.log('🌋 MAP ENGINE: Rendering molten Earth...');
        
        if (this.mode === '3d') {
            // Clear existing continents
            this.clearContinents();

            // BRIGHT molten material
            const moltenMaterial = new THREE.MeshPhongMaterial({
                color: 0xff4500,        // Bright orange-red
                emissive: 0x8b0000,     // Dark red glow
                emissiveIntensity: 0.6,
                shininess: 30
            });

            this.globe.material = moltenMaterial;
            
            console.log('  ✓ Molten material applied');

        } else {
            // 2D: Red/orange
            this.svg.select('circle').attr('fill', '#ff4500');
        }
        
        console.log('✅ MAP ENGINE: Molten Earth rendered');
    }

    /**
     * Render early Earth (Archean - early continents forming)
     */
    async renderEarlyEarth(continentalData) {
        console.log('🏔️ MAP ENGINE: Rendering early Earth...');
        
        if (this.mode === '3d') {
            // Darker ocean, proto-continents in brown/grey
            this.globe.material = new THREE.MeshPhongMaterial({
                color: 0x2a1a5e,      // Dark purple ocean
                emissive: 0x1a0a3e,
                emissiveIntensity: 0.2,
                shininess: 50
            });

            await this.renderContinents3D(continentalData, {
                color: 0x4a3728,      // Brown
                height: 0.05,
                roughness: 0.9
            });

        } else {
            this.svg.select('circle').attr('fill', '#2a1a5e');
            await this.renderContinents2D(continentalData, '#4a3728');
        }
        
        console.log('✅ MAP ENGINE: Early Earth rendered');
    }

    /**
     * Render geological Earth (Proterozoic - Cenozoic)
     */
    async renderGeologicalEarth(continentalData) {
        console.log('🌿 MAP ENGINE: Rendering geological Earth...');
        
        const era = this.getGeologicalEra(this.currentYear);
        const colors = this.getEraColors(era);

        if (this.mode === '3d') {
            this.globe.material = new THREE.MeshPhongMaterial({
                color: colors.ocean,
                emissive: colors.ocean,
                emissiveIntensity: 0.1,
                shininess: 100
            });

            await this.renderContinents3D(continentalData, {
                color: colors.land,
                height: 0.08,
                roughness: 0.7
            });

        } else {
            this.svg.select('circle').attr('fill', `#${colors.ocean.toString(16).padStart(6, '0')}`);
            await this.renderContinents2D(continentalData, `#${colors.land.toString(16).padStart(6, '0')}`);
        }
        
        console.log('✅ MAP ENGINE: Geological Earth rendered');
    }

    /**
     * Render modern Earth (last 10,000 years)
     */
    async renderModernEarth(continentalData) {
        console.log('🌏 MAP ENGINE: Rendering modern Earth...');
        
        if (this.mode === '3d') {
            // Modern blue ocean
            this.globe.material = new THREE.MeshPhongMaterial({
                color: 0x1a4d7a,      // Ocean blue
                emissive: 0x0a2d5a,
                emissiveIntensity: 0.15,
                shininess: 100
            });

            await this.renderContinents3D(continentalData, {
                color: 0x3d8b3d,      // Green land
                height: 0.1,
                roughness: 0.6
            });

            // Add civilization territories
            await this.renderCivilizations(this.currentYear);

        } else {
            this.svg.select('circle').attr('fill', '#1a4d7a');
            await this.renderContinents2D(continentalData, '#3d8b3d');
            await this.renderCivilizations2D(this.currentYear);
        }
        
        console.log('✅ MAP ENGINE: Modern Earth rendered');
    }

    /**
     * Get geological era for a year
     */
    getGeologicalEra(year) {
        if (year >= -66000000) return 'cenozoic';
        if (year >= -252000000) return 'mesozoic';
        if (year >= -541000000) return 'paleozoic';
        if (year >= -2500000000) return 'proterozoic';
        if (year >= -4000000000) return 'archean';
        return 'hadean';
    }

    /**
     * Get color scheme for geological era
     */
    getEraColors(era) {
        const schemes = {
            hadean: { ocean: 0x8b0000, land: 0x4a0000 },
            archean: { ocean: 0x2a1a5e, land: 0x4a3728 },
            proterozoic: { ocean: 0x1a3a5a, land: 0x5a4a3a },
            paleozoic: { ocean: 0x1a4a6a, land: 0x4a6a3a },
            mesozoic: { ocean: 0x1a5a7a, land: 0x3a7a3a },
            cenozoic: { ocean: 0x1a4d7a, land: 0x3d8b3d }
        };
        return schemes[era] || schemes.cenozoic;
    }

    /**
     * Render continents in 3D
     */
    async renderContinents3D(continentalData, style) {
        console.log('🗺️ MAP ENGINE: Rendering continents in 3D...');
        console.log('  📦 Data structure:', continentalData);
        
        // Clear existing continents
        this.clearContinents();

        if (!continentalData) {
            console.warn('⚠️ MAP ENGINE: No continental data to render');
            return;
        }

        // Handle different data structures
        let continentsToRender = {};
        
        if (continentalData.continents) {
            continentsToRender = continentalData.continents;
        } else if (continentalData.supercontinent) {
            continentsToRender = { supercontinent: continentalData.supercontinent };
        } else if (continentalData.pangaea) {
            continentsToRender = { pangaea: continentalData.pangaea };
        } else if (continentalData.laurasia || continentalData.gondwana) {
            continentsToRender = {
                laurasia: continentalData.laurasia,
                gondwana: continentalData.gondwana
            };
        } else {
            // Data is directly the continents object
            continentsToRender = continentalData;
        }

        console.log('  🌍 Continents to render:', Object.keys(continentsToRender));

        let renderedCount = 0;
        
        for (const [name, points] of Object.entries(continentsToRender)) {
            if (name === 'year' || !Array.isArray(points) || points.length === 0) {
                continue;
            }
            
            console.log(`  ↳ Rendering ${name} with ${points.length} points`);
            await this.createContinentMesh(points, style);
            renderedCount++;
        }
        
        console.log(`✅ MAP ENGINE: Rendered ${renderedCount} continents`);
    }

    /**
     * Create a 3D mesh for a continent
     */
    async createContinentMesh(points, style) {
        if (points.length < 3) {
            console.warn('  ⚠️ Not enough points to create mesh');
            return;
        }

        // Convert lat/lng points to 3D positions on sphere
        const vertices = [];
        const indices = [];

        points.forEach(([lat, lng]) => {
            const phi = (90 - lat) * (Math.PI / 180);
            const theta = (lng + 180) * (Math.PI / 180);
            const radius = 2 + style.height;

            const x = -radius * Math.sin(phi) * Math.cos(theta);
            const y = radius * Math.cos(phi);
            const z = radius * Math.sin(phi) * Math.sin(theta);

            vertices.push(x, y, z);
        });

        // Simple triangulation (fan triangulation from first vertex)
        for (let i = 1; i < points.length - 1; i++) {
            indices.push(0, i, i + 1);
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
        geometry.setIndex(indices);
        geometry.computeVertexNormals();

        const material = new THREE.MeshPhongMaterial({
            color: style.color,
            side: THREE.DoubleSide,
            shininess: 20
        });

        const mesh = new THREE.Mesh(geometry, material);
        mesh.rotation.copy(this.globe.rotation);
        this.scene.add(mesh);
        this.currentContinentMeshes.push(mesh);
        
        console.log(`    ✓ Mesh created with ${vertices.length / 3} vertices`);
    }

    /**
     * Render continents in 2D
     */
    async renderContinents2D(continentalData, color) {
        // Remove existing continents
        this.svg.selectAll('.continent').remove();

        const continents = continentalData.continents || continentalData;

        for (const [name, points] of Object.entries(continents)) {
            if (name === 'year' || !Array.isArray(points) || points.length === 0) continue;

            // Convert to GeoJSON
            const geojson = {
                type: 'Feature',
                geometry: {
                    type: 'Polygon',
                    coordinates: [[...points.map(p => [p[1], p[0]]), points[0].map(p => [p[1], p[0]])[0]]]
                }
            };

            this.svg.append('path')
                .datum(geojson)
                .attr('class', 'continent')
                .attr('d', this.path)
                .attr('fill', color)
                .attr('stroke', '#000')
                .attr('stroke-width', 0.5);
        }
    }

    /**
     * Clear continent meshes
     */
    clearContinents() {
        console.log(`  🧹 Clearing ${this.currentContinentMeshes.length} continent meshes...`);
        
        this.currentContinentMeshes.forEach(mesh => {
            this.scene.remove(mesh);
            mesh.geometry.dispose();
            mesh.material.dispose();
        });
        this.currentContinentMeshes = [];
    }

    /**
     * Render civilizations for modern times
     */
    async renderCivilizations(year) {
        if (year < -10000) return; // No civilizations before agriculture

        const events = dataEngine.getEventsNear(year, 500);
        const civilizationEvents = events.filter(e => 
            e.type === 'civilization' && e.coordinates
        );

        civilizationEvents.forEach(event => {
            this.addMarker3D(event.coordinates, {
                color: 0xffd700,
                size: 0.05,
                type: 'civilization'
            });
        });
    }

    /**
     * Render civilizations in 2D
     */
    async renderCivilizations2D(year) {
        if (year < -10000) return;

        const events = dataEngine.getEventsNear(year, 500);
        const civilizationEvents = events.filter(e => 
            e.type === 'civilization' && e.coordinates
        );

        civilizationEvents.forEach(event => {
            const coords = this.projection([event.coordinates.lng, event.coordinates.lat]);
            if (coords) {
                this.svg.append('circle')
                    .attr('class', 'civilization-marker')
                    .attr('cx', coords[0])
                    .attr('cy', coords[1])
                    .attr('r', 5)
                    .attr('fill', '#ffd700');
            }
        });
    }

    /**
     * Add 3D marker
     */
    addMarker3D(coords, style) {
        const { lat, lng } = coords;
        const phi = (90 - lat) * (Math.PI / 180);
        const theta = (lng + 180) * (Math.PI / 180);
        const radius = 2.15;

        const x = -radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.cos(phi);
        const z = radius * Math.sin(phi) * Math.sin(theta);

        const geometry = new THREE.SphereGeometry(style.size, 16, 16);
        const material = new THREE.MeshBasicMaterial({ color: style.color });
        const marker = new THREE.Mesh(geometry, material);

        marker.position.set(x, y, z);
        marker.userData = { type: style.type };

        this.scene.add(marker);
        this.civilizationMarkers.push(marker);
    }

    /**
     * Render events
     */
    async renderEvents(year) {
        // Clear old markers
        this.civilizationMarkers.forEach(marker => this.scene.remove(marker));
        this.civilizationMarkers = [];

        const events = dataEngine.getEventsNear(year, 1000000);

        events.forEach(event => {
            if (event.coordinates && this.mode === '3d') {
                const color = this.getEventColor(event.type);
                this.addMarker3D(event.coordinates, {
                    color: color,
                    size: event.importance * 0.01,
                    type: event.type
                });
            }
        });
    }

    /**
     * Get color for event type
     */
    getEventColor(type) {
        const colors = {
            geological: 0x8b4513,
            biological: 0x00ff00,
            catastrophic: 0xff0000,
            civilization: 0xffd700,
            political: 0x4169e1
        };
        return colors[type] || 0xffffff;
    }

    /**
     * Animation loop
     */
    animate() {
        requestAnimationFrame(() => this.animate());

        if (this.mode === '3d' && this.renderer && this.scene && this.camera) {
            // Auto-rotate slowly (only when not dragging)
            if (!this.isDragging) {
                this.globe.rotation.y += this.rotationSpeed;
                this.currentContinentMeshes.forEach(mesh => {
                    mesh.rotation.y += this.rotationSpeed;
                });
            }

            this.renderer.render(this.scene, this.camera);
        }
    }

    /**
     * Handle window resize
     */
    onWindowResize() {
        const container = document.getElementById('map-container');
        if (!container) return;

        if (this.mode === '3d' && this.camera && this.renderer) {
            const aspect = container.clientWidth / container.clientHeight;
            this.camera.aspect = aspect;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(container.clientWidth, container.clientHeight);
        } else if (this.mode === '2d' && this.svg) {
            const width = container.clientWidth;
            const height = container.clientHeight;
            this.svg.attr('width', width).attr('height', height);
            this.projection
                .scale(Math.min(width, height) / 2.5)
                .translate([width / 2, height / 2]);
            this.svg.selectAll('path').attr('d', this.path);
        }
    }

    /**
     * Smooth transition to new year
     */
    async transitionToYear(targetYear, duration = 1000) {
        const startYear = this.currentYear;
        const startTime = Date.now();

        const animate = async () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function
            const eased = this.easeInOutCubic(progress);
            
            const currentYear = startYear + (targetYear - startYear) * eased;
            await this.renderYear(Math.round(currentYear));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        animate();
    }

    /**
     * Easing function
     */
    easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    /**
     * Update map legend
     */
    updateMapLegend(year, mode) {
        const legendEl = document.querySelector('.map-legend-content');
        if (!legendEl) return;

        const era = this.getGeologicalEra(year);
        const yearFormatted = this.formatYear(year);

        legendEl.innerHTML = `
            <div class="legend-item">
                <strong>Year:</strong> ${yearFormatted}
            </div>
            <div class="legend-item">
                <strong>Era:</strong> ${this.capitalizeEra(era)}
            </div>
            <div class="legend-item">
                <strong>Mode:</strong> ${mode}
            </div>
        `;
    }

    /**
     * Format year for display
     */
    formatYear(year) {
        if (year === null || year === undefined) return '???';

        const absYear = Math.abs(year);

        if (absYear >= 1000000000) {
            return `${(absYear / 1000000000).toFixed(1)} Ga`;
        }
        if (absYear >= 1000000) {
            return `${(absYear / 1000000).toFixed(1)} Ma`;
        }
        if (absYear >= 10000) {
            return `${(absYear / 1000).toFixed(0)}K ${year < 0 ? 'BCE' : 'CE'}`;
        }
        if (year < 0) {
            return `${absYear.toLocaleString()} BCE`;
        }
        return `${year} CE`;
    }

    /**
     * Capitalize era name
     */
    capitalizeEra(era) {
        return era.charAt(0).toUpperCase() + era.slice(1);
    }

    /**
     * Toggle between 2D and 3D
     */
    toggle2D3D() {
        console.log('🔄 MAP ENGINE: Toggling view mode...');
        // Reinitialize in opposite mode
        const container = document.getElementById('map-container');
        if (this.mode === '3d') {
            this.mode = '2d';
            this.init2D(container);
        } else {
            this.mode = '3d';
            this.init3D(container);
        }
        this.renderYear(this.currentYear);
    }

    /**
     * Set render quality
     */
    setQuality(quality) {
        this.renderQuality = quality;
        console.log(`🎨 MAP ENGINE: Quality set to ${quality}`);
    }
}

// Create singleton
const mapEngine = new MapEngine();

// ============================================================
// EMERGENCY TEST FUNCTION (for debugging)
// ============================================================
window.testGlobe = function() {
    console.log('🧪 Running emergency test globe...');
    
    const container = document.getElementById('map-container');
    if (!container) {
        console.error('❌ No map container found!');
        return;
    }
    
    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000033);
    
    // Camera
    const camera = new THREE.PerspectiveCamera(
        75,
        container.clientWidth / container.clientHeight,
        0.1,
        1000
    );
    camera.position.z = 5;
    
    // Renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.innerHTML = '';
    container.appendChild(renderer.domElement);
    
    // BRIGHT ORANGE SPHERE
    const geometry = new THREE.SphereGeometry(2, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0xff6600 });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);
    
    // Light
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 3, 5);
    scene.add(light);
    
    // Animate
    function animate() {
        requestAnimationFrame(animate);
        sphere.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();
    
    console.log('✅ Test globe running! You should see a spinning orange sphere.');
};

console.log('💡 MAP ENGINE: Run testGlobe() in console to verify THREE.js works');

// Add at the very end of the file, after the mapEngine creation

window.debugMap = function() {
    console.log('\n🔍 MAP ENGINE DEBUG:');
    console.log('=====================================');
    console.log('Mode:', mapEngine.mode);
    console.log('Scene exists:', !!mapEngine.scene);
    console.log('Camera exists:', !!mapEngine.camera);
    console.log('Renderer exists:', !!mapEngine.renderer);
    console.log('Globe exists:', !!mapEngine.globe);
    
    if (mapEngine.scene) {
        console.log('Scene children count:', mapEngine.scene.children.length);
        console.log('Scene children:', mapEngine.scene.children.map(c => c.type));
    }
    
    if (mapEngine.globe) {
        console.log('Globe position:', mapEngine.globe.position);
        console.log('Globe visible:', mapEngine.globe.visible);
        console.log('Globe material:', mapEngine.globe.material.type);
        console.log('Globe material color:', mapEngine.globe.material.color);
    }
    
    if (mapEngine.camera) {
        console.log('Camera position:', mapEngine.camera.position);
        console.log('Camera looking at:', mapEngine.camera.rotation);
    }
    
    if (mapEngine.renderer) {
        console.log('Renderer size:', mapEngine.renderer.getSize(new THREE.Vector2()));
        console.log('Renderer pixel ratio:', mapEngine.renderer.getPixelRatio());
        console.log('Renderer DOM element:', mapEngine.renderer.domElement);
    }
    
    console.log('Continent meshes:', mapEngine.currentContinentMeshes.length);
    console.log('=====================================\n');
};

console.log('💡 Run debugMap() in console to see map state');
