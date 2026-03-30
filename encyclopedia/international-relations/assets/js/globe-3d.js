/* ===================================
   UNITY ATLAS - 3D GLOBE VISUALIZATION
   Path: geotopia/encyclopedia/international-relations/assets/js/globe-3d.js
   =================================== */

// ===================================
// GLOBE CONFIGURATION
// ===================================

const GlobeConfig = {
    radius: 200,
    segments: 64,
    rotationSpeed: 0.001,
    autoRotate: true,
    
    colors: {
        globe: 0x1a1a2e,
        atmosphere: 0x3498db,
        allies: 0x2ecc71,
        trade: 0xf1c40f,
        complex: 0xe67e22,
        conflict: 0xe74c3c,
        connection: 0x3498db
    },
    
    camera: {
        fov: 45,
        near: 1,
        far: 10000,
        position: { x: 0, y: 0, z: 600 }
    }
};

// ===================================
// GLOBE CLASS
// ===================================

class UnityGlobe {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        if (!this.container) {
            console.error('Globe container not found');
            return;
        }
        
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.globe = null;
        this.countries = [];
        this.connections = [];
        this.markers = [];
        this.currentFilter = 'all';
        this.selectedOrg = null;
        this.mouse = new THREE.Vector2();
        this.raycaster = new THREE.Raycaster();
        this.hoveredCountry = null;
        
        this.init();
    }
    
    // ===================================
    // INITIALIZATION
    // ===================================
    
    init() {
        console.log('🌍 Initializing 3D Globe...');
        
        this.setupScene();
        this.setupCamera();
        this.setupRenderer();
        this.setupLights();
        this.createGlobe();
        this.createAtmosphere();
        this.loadCountries();
        this.setupEventListeners();
        this.animate();
        
        console.log('✅ Globe Ready!');
    }
    
    setupScene() {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x0a0a0f);
        
        // Add stars
        this.addStars();
    }
    
    setupCamera() {
        const aspect = this.container.clientWidth / this.container.clientHeight;
        this.camera = new THREE.PerspectiveCamera(
            GlobeConfig.camera.fov,
            aspect,
            GlobeConfig.camera.near,
            GlobeConfig.camera.far
        );
        
        this.camera.position.set(
            GlobeConfig.camera.position.x,
            GlobeConfig.camera.position.y,
            GlobeConfig.camera.position.z
        );
    }
    
    setupRenderer() {
        this.renderer = new THREE.WebGLRenderer({ 
            antialias: true,
            alpha: true 
        });
        
        this.renderer.setSize(
            this.container.clientWidth,
            this.container.clientHeight
        );
        this.renderer.setPixelRatio(window.devicePixelRatio);
        
        this.container.appendChild(this.renderer.domElement);
    }
    
    setupLights() {
        // Ambient light
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        this.scene.add(ambientLight);
        
        // Directional light (sun)
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(5, 3, 5);
        this.scene.add(directionalLight);
        
        // Point light for glow
        const pointLight = new THREE.PointLight(0x3498db, 0.3, 1000);
        pointLight.position.set(0, 0, 300);
        this.scene.add(pointLight);
    }
    
    // ===================================
    // GLOBE CREATION
    // ===================================
    
    createGlobe() {
        const geometry = new THREE.SphereGeometry(
            GlobeConfig.radius,
            GlobeConfig.segments,
            GlobeConfig.segments
        );
        
        // Load Earth texture or use colored globe
        const material = new THREE.MeshPhongMaterial({
            color: GlobeConfig.colors.globe,
            emissive: 0x112244,
            specular: 0x333333,
            shininess: 15,
            transparent: true,
            opacity: 0.9
        });
        
        // Try to load Earth texture
        const textureLoader = new THREE.TextureLoader();
        textureLoader.load(
            'https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg',
            (texture) => {
                material.map = texture;
                material.needsUpdate = true;
            },
            undefined,
            (error) => {
                console.log('Using colored globe (texture failed to load)');
            }
        );
        
        this.globe = new THREE.Mesh(geometry, material);
        this.scene.add(this.globe);
        
        // Add grid lines
        this.addGridLines();
    }
    
    addGridLines() {
        const gridHelper = new THREE.GridHelper(
            GlobeConfig.radius * 2.2,
            20,
            0x3498db,
            0x2c3e50
        );
        gridHelper.rotation.x = Math.PI / 2;
        gridHelper.material.transparent = true;
        gridHelper.material.opacity = 0.1;
        this.scene.add(gridHelper);
    }
    
    createAtmosphere() {
        const geometry = new THREE.SphereGeometry(
            GlobeConfig.radius * 1.1,
            GlobeConfig.segments,
            GlobeConfig.segments
        );
        
        const material = new THREE.ShaderMaterial({
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
                    gl_FragColor = vec4(0.2, 0.6, 1.0, 1.0) * intensity;
                }
            `,
            side: THREE.BackSide,
            blending: THREE.AdditiveBlending,
            transparent: true
        });
        
        const atmosphere = new THREE.Mesh(geometry, material);
        this.scene.add(atmosphere);
    }
    
    addStars() {
        const starsGeometry = new THREE.BufferGeometry();
        const starsMaterial = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 2,
            transparent: true,
            opacity: 0.8
        });
        
        const starsVertices = [];
        for (let i = 0; i < 10000; i++) {
            const x = (Math.random() - 0.5) * 2000;
            const y = (Math.random() - 0.5) * 2000;
            const z = (Math.random() - 0.5) * 2000;
            
            starsVertices.push(x, y, z);
        }
        
        starsGeometry.setAttribute(
            'position',
            new THREE.Float32BufferAttribute(starsVertices, 3)
        );
        
        const stars = new THREE.Points(starsGeometry, starsMaterial);
        this.scene.add(stars);
    }
    
    // ===================================
    // COUNTRY DATA & MARKERS
    // ===================================
    
    loadCountries() {
        // Sample country data with coordinates
        const countryData = this.getCountryCoordinates();
        
        countryData.forEach(country => {
            this.addCountryMarker(country);
        });
        
        // Create initial connections
        this.createConnections();
    }
    
    getCountryCoordinates() {
        // Major countries with lat/long (abbreviated list - you'll need all 197)
        return [
            { code: 'USA', name: 'United States', lat: 38, lon: -97, flag: '🇺🇸', strength: 85 },
            { code: 'CHN', name: 'China', lat: 35, lon: 105, flag: '🇨🇳', strength: 75 },
            { code: 'IND', name: 'India', lat: 20, lon: 77, flag: '🇮🇳', strength: 80 },
            { code: 'RUS', name: 'Russia', lat: 60, lon: 100, flag: '🇷🇺', strength: 70 },
            { code: 'BRA', name: 'Brazil', lat: -10, lon: -55, flag: '🇧🇷', strength: 65 },
            { code: 'GBR', name: 'United Kingdom', lat: 54, lon: -2, flag: '🇬🇧', strength: 85 },
            { code: 'FRA', name: 'France', lat: 46, lon: 2, flag: '🇫🇷', strength: 85 },
            { code: 'DEU', name: 'Germany', lat: 51, lon: 10, flag: '🇩🇪', strength: 85 },
            { code: 'JPN', name: 'Japan', lat: 36, lon: 138, flag: '🇯🇵', strength: 85 },
            { code: 'AUS', name: 'Australia', lat: -25, lon: 133, flag: '🇦🇺', strength: 85 },
            { code: 'CAN', name: 'Canada', lat: 56, lon: -106, flag: '🇨🇦', strength: 90 },
            { code: 'MEX', name: 'Mexico', lat: 23, lon: -102, flag: '🇲🇽', strength: 70 },
            { code: 'ARG', name: 'Argentina', lat: -34, lon: -64, flag: '🇦🇷', strength: 60 },
            { code: 'ZAF', name: 'South Africa', lat: -29, lon: 24, flag: '🇿🇦', strength: 65 },
            { code: 'EGY', name: 'Egypt', lat: 26, lon: 30, flag: '🇪🇬', strength: 60 },
            { code: 'SAU', name: 'Saudi Arabia', lat: 24, lon: 45, flag: '🇸🇦', strength: 75 },
            { code: 'IRN', name: 'Iran', lat: 32, lon: 53, flag: '🇮🇷', strength: 40 },
            { code: 'TUR', name: 'Turkey', lat: 39, lon: 35, flag: '🇹🇷', strength: 65 },
            { code: 'KOR', name: 'South Korea', lat: 37, lon: 127, flag: '🇰🇷', strength: 85 },
            { code: 'IDN', name: 'Indonesia', lat: -2, lon: 118, flag: '🇮🇩', strength: 70 },
            { code: 'PAK', name: 'Pakistan', lat: 30, lon: 70, flag: '🇵🇰', strength: 35 },
            { code: 'ISR', name: 'Israel', lat: 31, lon: 35, flag: '🇮🇱', strength: 80 },
            { code: 'ITA', name: 'Italy', lat: 42, lon: 12, flag: '🇮🇹', strength: 85 },
            { code: 'ESP', name: 'Spain', lat: 40, lon: -4, flag: '🇪🇸', strength: 80 },
            { code: 'POL', name: 'Poland', lat: 52, lon: 19, flag: '🇵🇱', strength: 75 },
            { code: 'NGA', name: 'Nigeria', lat: 9, lon: 8, flag: '🇳🇬', strength: 60 },
            { code: 'KEN', name: 'Kenya', lat: 1, lon: 38, flag: '🇰🇪', strength: 65 },
            { code: 'VNM', name: 'Vietnam', lat: 16, lon: 106, flag: '🇻🇳', strength: 70 },
            { code: 'THA', name: 'Thailand', lat: 15, lon: 100, flag: '🇹🇭', strength: 75 },
            { code: 'PHL', name: 'Philippines', lat: 12, lon: 122, flag: '🇵🇭', strength: 75 },
            // Add remaining 167 countries here with actual coordinates
        ];
    }
    
    addCountryMarker(country) {
        // Convert lat/lon to 3D coordinates
        const position = this.latLonToVector3(
            country.lat,
            country.lon,
            GlobeConfig.radius + 5
        );
        
        // Create marker
        const markerGeometry = new THREE.SphereGeometry(3, 16, 16);
        const markerMaterial = new THREE.MeshBasicMaterial({
            color: getRelationshipColor(country.strength),
            transparent: true,
            opacity: 0.9
        });
        
        const marker = new THREE.Mesh(markerGeometry, markerMaterial);
        marker.position.copy(position);
        
        // Store country data
        marker.userData = country;
        
        this.markers.push(marker);
        this.scene.add(marker);
        
        // Add pulsing animation
        this.animateMarker(marker);
    }
    
    animateMarker(marker) {
        const initialScale = marker.scale.clone();
        let scale = 1;
        let growing = true;
        
        const animate = () => {
            if (growing) {
                scale += 0.01;
                if (scale >= 1.3) growing = false;
            } else {
                scale -= 0.01;
                if (scale <= 1) growing = true;
            }
            
            marker.scale.set(
                initialScale.x * scale,
                initialScale.y * scale,
                initialScale.z * scale
            );
            
            requestAnimationFrame(animate);
        };
        
        // Stagger animation start
        setTimeout(() => animate(), Math.random() * 2000);
    }
    
    latLonToVector3(lat, lon, radius) {
        const phi = (90 - lat) * (Math.PI / 180);
        const theta = (lon + 180) * (Math.PI / 180);
        
        const x = -(radius * Math.sin(phi) * Math.cos(theta));
        const z = (radius * Math.sin(phi) * Math.sin(theta));
        const y = (radius * Math.cos(phi));
        
        return new THREE.Vector3(x, y, z);
    }
    
    // ===================================
    // CONNECTIONS
    // ===================================
    
    createConnections() {
        // Create sample connections between countries
        // In production, this would be based on relationship data
        
        const connectionPairs = [
            ['USA', 'GBR'],
            ['USA', 'JPN'],
            ['USA', 'AUS'],
            ['CHN', 'RUS'],
            ['IND', 'USA'],
            ['GBR', 'FRA'],
            ['DEU', 'FRA'],
            // Add more connections based on relationship strength
        ];
        
        connectionPairs.forEach(([code1, code2]) => {
            const country1 = this.markers.find(m => m.userData.code === code1);
            const country2 = this.markers.find(m => m.userData.code === code2);
            
            if (country1 && country2) {
                this.createConnection(country1, country2);
            }
        });
    }
    
    createConnection(marker1, marker2) {
        const curve = new THREE.QuadraticBezierCurve3(
            marker1.position,
            new THREE.Vector3(
                (marker1.position.x + marker2.position.x) / 2,
                (marker1.position.y + marker2.position.y) / 2 + 50,
                (marker1.position.z + marker2.position.z) / 2
            ),
            marker2.position
        );
        
        const points = curve.getPoints(50);
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        
        const material = new THREE.LineBasicMaterial({
            color: GlobeConfig.colors.connection,
            transparent: true,
            opacity: 0.3,
            linewidth: 2
        });
        
        const line = new THREE.Line(geometry, material);
        this.connections.push(line);
        this.scene.add(line);
        
        // Animate connection
        this.animateConnection(line);
    }
    
    animateConnection(line) {
        let opacity = 0.3;
        let increasing = true;
        
        const animate = () => {
            if (increasing) {
                opacity += 0.01;
                if (opacity >= 0.6) increasing = false;
            } else {
                opacity -= 0.01;
                if (opacity <= 0.3) increasing = true;
            }
            
            line.material.opacity = opacity;
            requestAnimationFrame(animate);
        };
        
        animate();
    }
    
    // ===================================
    // INTERACTION
    // ===================================
    
    setupEventListeners() {
        // Mouse move for hover
        this.container.addEventListener('mousemove', (event) => {
            this.onMouseMove(event);
        });
        
        // Click for selection
        this.container.addEventListener('click', (event) => {
            this.onMouseClick(event);
        });
        
        // Resize
        window.addEventListener('resize', () => {
            this.onWindowResize();
        });
        
        // Mouse wheel for zoom
        this.container.addEventListener('wheel', (event) => {
            this.onMouseWheel(event);
        });
    }
    
    onMouseMove(event) {
        const rect = this.container.getBoundingClientRect();
        this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
        
        this.checkHover();
    }
    
    checkHover() {
        this.raycaster.setFromCamera(this.mouse, this.camera);
        const intersects = this.raycaster.intersectObjects(this.markers);
        
        if (intersects.length > 0) {
            const marker = intersects[0].object;
            
            if (this.hoveredCountry !== marker) {
                // Reset previous hover
                if (this.hoveredCountry) {
                    this.hoveredCountry.scale.set(1, 1, 1);
                }
                
                // Set new hover
                this.hoveredCountry = marker;
                marker.scale.set(1.5, 1.5, 1.5);
                
                // Show tooltip
                this.showTooltip(marker.userData);
            }
        } else {
            if (this.hoveredCountry) {
                this.hoveredCountry.scale.set(1, 1, 1);
                this.hoveredCountry = null;
                this.hideTooltip();
            }
        }
    }
    
    onMouseClick(event) {
        this.raycaster.setFromCamera(this.mouse, this.camera);
        const intersects = this.raycaster.intersectObjects(this.markers);
        
        if (intersects.length > 0) {
            const marker = intersects[0].object;
            const country = marker.userData;
            
            console.log('🌐 Clicked:', country.name);
            
            // Redirect to country page
            window.location.href = `country.html?code=${country.code}`;
        }
    }
    
    onWindowResize() {
        const width = this.container.clientWidth;
        const height = this.container.clientHeight;
        
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        
        this.renderer.setSize(width, height);
    }
    
    onMouseWheel(event) {
        event.preventDefault();
        
        const delta = event.deltaY;
        const zoomSpeed = 0.1;
        
        this.camera.position.z += delta * zoomSpeed;
        
        // Clamp zoom
        this.camera.position.z = Math.max(300, Math.min(1000, this.camera.position.z));
    }
    
    // ===================================
    // TOOLTIP
    // ===================================
    
    showTooltip(country) {
        const tooltip = document.getElementById('country-tooltip');
        if (!tooltip) return;
        
        tooltip.querySelector('.tooltip-flag').textContent = country.flag;
        tooltip.querySelector('.tooltip-name').textContent = country.name;
        tooltip.querySelector('.tooltip-stats').innerHTML = `
            <div>Relationship Strength: <strong>${country.strength}%</strong></div>
            <div>Status: <strong>${getRelationshipStatus(country.strength)}</strong></div>
            <div style="margin-top: 0.5rem; font-size: 0.75rem; opacity: 0.7;">Click to explore →</div>
        `;
        
        tooltip.classList.remove('hidden');
        
        // Position tooltip near mouse
        tooltip.style.left = event.clientX + 20 + 'px';
        tooltip.style.top = event.clientY + 20 + 'px';
    }
    
    hideTooltip() {
        const tooltip = document.getElementById('country-tooltip');
        if (tooltip) {
            tooltip.classList.add('hidden');
        }
    }
    
    // ===================================
    // FILTERS
    // ===================================
    
    applyFilter(filter) {
        this.currentFilter = filter;
        
        this.markers.forEach(marker => {
            const strength = marker.userData.strength;
            let visible = true;
            
            switch(filter) {
                case 'allies':
                    visible = strength >= 80;
                    break;
                case 'trade':
                    visible = strength >= 60 && strength < 80;
                    break;
                case 'complex':
                    visible = strength >= 40 && strength < 60;
                    break;
                case 'conflict':
                    visible = strength < 40;
                    break;
                default:
                    visible = true;
            }
            
            marker.visible = visible;
        });
        
        // Update connections visibility
        this.updateConnectionsVisibility();
    }
    
    filterByOrganization(org) {
        this.selectedOrg = org;
        
        if (!org) {
            // Show all
            this.markers.forEach(m => m.visible = true);
            return;
        }
        
        // Organization membership (sample data)
        const orgMembers = {
            'un': ['USA', 'CHN', 'IND', 'RUS', 'BRA', 'GBR', 'FRA', 'DEU', 'JPN', 'etc...'],
            'nato': ['USA', 'GBR', 'FRA', 'DEU', 'ITA', 'ESP', 'POL', 'TUR'],
            'eu': ['GBR', 'FRA', 'DEU', 'ITA', 'ESP', 'POL'],
            'brics': ['BRA', 'RUS', 'IND', 'CHN', 'ZAF'],
            'sco': ['CHN', 'RUS', 'IND', 'PAK', 'KAZ'],
            'asean': ['IDN', 'THA', 'VNM', 'PHL', 'SGP'],
            'au': ['ZAF', 'EGY', 'NGA', 'KEN']
        };
        
        const members = orgMembers[org] || [];
        
        this.markers.forEach(marker => {
            marker.visible = members.includes(marker.userData.code);
        });
        
        this.updateConnectionsVisibility();
    }
    
    updateConnectionsVisibility() {
        this.connections.forEach(connection => {
            connection.visible = this.currentFilter === 'all' && !this.selectedOrg;
        });
    }
    
    // ===================================
    // ANIMATION LOOP
    // ===================================
    
    animate() {
        requestAnimationFrame(() => this.animate());
        
        // Auto-rotate globe
        if (GlobeConfig.autoRotate) {
            this.globe.rotation.y += GlobeConfig.rotationSpeed;
        }
        
        // Render
        this.renderer.render(this.scene, this.camera);
    }
}

// ===================================
// INITIALIZE GLOBE
// ===================================

let globeInstance = null;

function initializeGlobe() {
    const globeCanvas = document.getElementById('globe-canvas');
    if (globeCanvas && !globeInstance) {
        globeInstance = new UnityGlobe('globe-canvas');
        window.UnityGlobe = globeInstance;
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeGlobe);
} else {
    initializeGlobe();
}

// Expose for external access
window.UnityGlobeClass = UnityGlobe;
