/**
 * GEOTOPIA MAP ENGINE
 * 3D Globe with morphing continents + 2D fallback
 * Bharat Ratna worthy rendering
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
        
        // Performance
        this.renderQuality = 'high'; // high, medium, low
        
        this.init();
    }

    /**
     * Initialize the map engine
     */
    async init() {
        const container = document.getElementById('map-container');
        
        if (!container) {
            console.error('Map container not found');
            return;
        }

        // Try 3D first, fallback to 2D if WebGL not supported
        if (this.isWebGLAvailable()) {
            await this.init3D(container);
        } else {
            this.mode = '2d';
            await this.init2D(container);
        }

        // Start render loop
        this.animate();
        
        // Handle window resize
        window.addEventListener('resize', () => this.onWindowResize());
        
        // Load initial year
        await this.renderYear(this.currentYear);
    }

    /**
     * Check WebGL support
     */
    isWebGLAvailable() {
        try {
            const canvas = document.createElement('canvas');
            return !!(window.WebGLRenderingContext && 
                (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
        } catch (e) {
            return false;
        }
    }

    /**
     * Initialize 3D mode (THREE.js)
     */
    async init3D(container) {
        // Scene
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x000000);

        // Camera
        const aspect = container.clientWidth / container.clientHeight;
        this.camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 1000);
        this.camera.position.z = 5;

        // Renderer
        this.renderer = new THREE.WebGLRenderer({ 
            antialias: this.renderQuality === 'high',
            alpha: true,
            powerPreference: 'high-performance'
        });
        this.renderer.setSize(container.clientWidth, container.clientHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        container.appendChild(this.renderer.domElement);

        // Lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        this.scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(5, 3, 5);
        this.scene.add(directionalLight);

        // Add stars background
        this.addStarfield();

        // Create globe base
        await this.createGlobe();

        // Mouse controls (orbit)
        this.addOrbitControls();

        console.log('3D Map Engine initialized');
    }

    /**
     * Add starfield background
     */
    addStarfield() {
        const starGeometry = new THREE.BufferGeometry();
        const starCount = 10000;
        const positions = new Float32Array(starCount * 3);

        for (let i = 0; i < starCount * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 200;
        }

        starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        
        const starMaterial = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 0.1,
            transparent: true,
            opacity: 0.8
        });

        const stars = new THREE.Points(starGeometry, starMaterial);
        this.scene.add(stars);
    }

    /**
     * Create the base globe
     */
    async createGlobe() {
        // Sphere geometry
        const geometry = new THREE.SphereGeometry(2, 64, 64);
        
        // Ocean material
        const oceanMaterial = new THREE.MeshPhongMaterial({
            color: 0x1a4d7a,
            transparent: true,
            opacity: 0.9,
            shininess: 100
        });

        this.globe = new THREE.Mesh(geometry, oceanMaterial);
        this.scene.add(this.globe);

        // Add atmosphere glow
        this.addAtmosphere();
    }

    /**
     * Add atmospheric glow effect
     */
    addAtmosphere() {
        const atmosphereGeometry = new THREE.SphereGeometry(2.1, 64, 64);
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
                    float intensity = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
                    gl_FragColor = vec4(0.3, 0.6, 1.0, 1.0) * intensity;
                }
            `,
            blending: THREE.AdditiveBlending,
            side: THREE.BackSide,
            transparent: true
        });

        const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
        this.scene.add(atmosphere);
    }

    /**
     * Add orbit controls
     */
    addOrbitControls() {
        // Simple mouse drag to rotate
        let isDragging = false;
        let previousMousePosition = { x: 0, y: 0 };
        let rotation = { x: 0, y: 0 };

        this.renderer.domElement.addEventListener('mousedown', (e) => {
            isDragging = true;
            previousMousePosition = { x: e.clientX, y: e.clientY };
        });

        this.renderer.domElement.addEventListener('mousemove', (e) => {
            if (isDragging) {
                const deltaX = e.clientX - previousMousePosition.x;
                const deltaY = e.clientY - previousMousePosition.y;

                rotation.y += deltaX * 0.005;
                rotation.x += deltaY * 0.005;

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
        });

        // Zoom with mouse wheel
        this.renderer.domElement.addEventListener('wheel', (e) => {
            e.preventDefault();
            const delta = e.deltaY * 0.001;
            this.camera.position.z = Math.max(3, Math.min(10, this.camera.position.z + delta));
        });
    }

    /**
     * Initialize 2D mode (D3.js fallback)
     */
    async init2D(container) {
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

        console.log('2D Map Engine initialized');
    }

    /**
     * Render specific year
     */
    async renderYear(year) {
        this.currentYear = year;

        // Get continental positions for this year
        const continentalData = await dataEngine.getContinentalPositions(year);
        
        if (!continentalData) {
            console.warn('No continental data for year', year);
            return;
        }

        // Determine rendering mode based on year
        const renderMode = this.getRenderMode(year);

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
        if (this.mode === '3d') {
            // Clear existing continents
            this.clearContinents();

            // Molten material with animated lava
            const moltenMaterial = new THREE.ShaderMaterial({
                uniforms: {
                    time: { value: 0 },
                    color1: { value: new THREE.Color(0xff4500) },
                    color2: { value: new THREE.Color(0x8b0000) }
                },
                vertexShader: `
                    varying vec2 vUv;
                    varying vec3 vPosition;
                    void main() {
                        vUv = uv;
                        vPosition = position;
                        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                    }
                `,
                fragmentShader: `
                    uniform float time;
                    uniform vec3 color1;
                    uniform vec3 color2;
                    varying vec2 vUv;
                    varying vec3 vPosition;
                    
                    void main() {
                        float noise = sin(vPosition.x * 5.0 + time) * 
                                     sin(vPosition.y * 5.0 + time * 0.7) * 
                                     sin(vPosition.z * 5.0 + time * 0.5);
                        vec3 color = mix(color1, color2, noise * 0.5 + 0.5);
                        gl_FragColor = vec4(color, 1.0);
                    }
                `
            });

            this.globe.material = moltenMaterial;

            // Animate lava
            const animateLava = () => {
                if (this.getRenderMode(this.currentYear) === 'molten') {
                    moltenMaterial.uniforms.time.value += 0.01;
                    requestAnimationFrame(animateLava);
                }
            };
            animateLava();

        } else {
            // 2D: Red/orange gradient
            this.svg.select('circle')
                .attr('fill', 'url(#molten-gradient)');

            if (!this.svg.select('#molten-gradient').node()) {
                const gradient = this.svg.append('defs')
                    .append('radialGradient')
                    .attr('id', 'molten-gradient');
                
                gradient.append('stop')
                    .attr('offset', '0%')
                    .attr('stop-color', '#ff6600');
                
                gradient.append('stop')
                    .attr('offset', '100%')
                    .attr('stop-color', '#8b0000');
            }
        }
    }

    /**
     * Render early Earth (Archean - early continents forming)
     */
    async renderEarlyEarth(continentalData) {
        if (this.mode === '3d') {
            // Darker ocean, proto-continents in brown/grey
            this.globe.material = new THREE.MeshPhongMaterial({
                color: 0x2a1a5e, // Dark purple ocean
                transparent: true,
                opacity: 0.9,
                shininess: 50
            });

            await this.renderContinents3D(continentalData, {
                color: 0x4a3728,
                height: 0.05,
                roughness: 0.9
            });

        } else {
            this.svg.select('circle').attr('fill', '#2a1a5e');
            await this.renderContinents2D(continentalData, '#4a3728');
        }
    }

    /**
     * Render geological Earth (Proterozoic - Cenozoic)
     */
    async renderGeologicalEarth(continentalData) {
        const era = this.getGeologicalEra(this.currentYear);
        const colors = this.getEraColors(era);

        if (this.mode === '3d') {
            this.globe.material = new THREE.MeshPhongMaterial({
                color: colors.ocean,
                transparent: true,
                opacity: 0.9,
                shininess: 100
            });

            await this.renderContinents3D(continentalData, {
                color: colors.land,
                height: 0.08,
                roughness: 0.7
            });

        } else {
            this.svg.select('circle').attr('fill', colors.ocean);
            await this.renderContinents2D(continentalData, colors.land);
        }
    }

    /**
     * Render modern Earth (last 10,000 years)
     */
    async renderModernEarth(continentalData) {
        if (this.mode === '3d') {
            // Modern blue ocean
            this.globe.material = new THREE.MeshPhongMaterial({
                color: 0x1a4d7a,
                transparent: true,
                opacity: 0.9,
                shininess: 100
            });

            await this.renderContinents3D(continentalData, {
                color: 0x3d8b3d,
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
        // Clear existing continents
        this.clearContinents();

        if (!continentalData.continents && !continentalData.supercontinent && !continentalData.pangaea && !continentalData.laurasia) {
            // Handle case where continentalData has continent arrays directly
            for (const [name, points] of Object.entries(continentalData)) {
                if (name === 'year' || !Array.isArray(points) || points.length === 0) continue;
                await this.createContinentMesh(points, style);
            }
        } else {
            // Handle structured data
            const continents = continentalData.continents || 
                             { supercontinent: continentalData.supercontinent } ||
                             { pangaea: continentalData.pangaea } ||
                             { laurasia: continentalData.laurasia, gondwana: continentalData.gondwana };

            for (const [name, points] of Object.entries(continents)) {
                if (!Array.isArray(points) || points.length === 0) continue;
                await this.createContinentMesh(points, style);
            }
        }
    }

    /**
     * Create a 3D mesh for a continent
     */
    async createContinentMesh(points, style) {
        if (points.length < 3) return;

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
            roughness: style.roughness,
            side: THREE.DoubleSide
        });

        const mesh = new THREE.Mesh(geometry, material);
        mesh.rotation.copy(this.globe.rotation);
        this.scene.add(mesh);
        this.currentContinentMeshes.push(mesh);
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
            // Auto-rotate slowly
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

        if (this.mode === '3d') {
            const aspect = container.clientWidth / container.clientHeight;
            this.camera.aspect = aspect;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(container.clientWidth, container.clientHeight);
        } else {
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
        if (year < 0) {
            const absYear = Math.abs(year);
            if (absYear > 1000000) {
                return `${(absYear / 1000000).toFixed(1)} Ma`;
            }
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
        // This would reinitialize in the other mode
        // For now, just a placeholder
        console.log('Toggle 2D/3D mode');
    }

    /**
     * Set render quality
     */
    setQuality(quality) {
        this.renderQuality = quality;
        // Would adjust renderer settings
    }
}

// Create singleton
const mapEngine = new MapEngine();
