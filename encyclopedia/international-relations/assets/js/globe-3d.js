// assets/js/globe-3d.js

/* ============================================
   UNITY ATLAS - 3D GLOBE VISUALIZATION
   Stunning WebGL Globe with Connections
   ============================================ */

class UnityGlobe {
    constructor(containerId, options = {}) {
        this.container = document.getElementById(containerId);
        if (!this.container) return;
        
        this.options = {
            isHero: options.isHero || false,
            autoRotate: options.autoRotate !== false,
            showConnections: options.showConnections !== false,
            connectionColor: options.connectionColor || '#00d4ff',
            globeColor: options.globeColor || '#1a1a2e',
            ...options
        };
        
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.globe = null;
        this.connections = [];
        this.points = [];
        this.mouseX = 0;
        this.mouseY = 0;
        this.targetRotationX = 0;
        this.targetRotationY = 0;
        
        this.init();
    }
    
    init() {
        this.createScene();
        this.createGlobe();
        this.createAtmosphere();
        this.createStars();
        this.createCountryPoints();
        this.createConnections();
        this.addEventListeners();
        this.animate();
    }
    
    createScene() {
        // Scene
        this.scene = new THREE.Scene();
        
        // Camera
        const aspect = this.container.clientWidth / this.container.clientHeight;
        this.camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 1000);
        this.camera.position.z = this.options.isHero ? 3 : 2.5;
        
        // Renderer
        this.renderer = new THREE.WebGLRenderer({ 
            antialias: true, 
            alpha: true 
        });
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.setClearColor(0x000000, 0);
        this.container.appendChild(this.renderer.domElement);
        
        // Ambient Light
        const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
        this.scene.add(ambientLight);
        
        // Point Light (Sun)
        const pointLight = new THREE.PointLight(0x00d4ff, 2, 100);
        pointLight.position.set(5, 3, 5);
        this.scene.add(pointLight);
        
        // Secondary Light
        const secondaryLight = new THREE.PointLight(0xff006e, 1, 100);
        secondaryLight.position.set(-5, -3, -5);
        this.scene.add(secondaryLight);
    }
    
    createGlobe() {
        // Globe Geometry
        const geometry = new THREE.SphereGeometry(1, 64, 64);
        
        // Custom Shader Material for Glowing Effect
        const material = new THREE.ShaderMaterial({
            uniforms: {
                time: { value: 0 },
                globeColor: { value: new THREE.Color(0x1a1a2e) },
                glowColor: { value: new THREE.Color(0x00d4ff) },
                glowIntensity: { value: 0.3 }
            },
            vertexShader: `
                varying vec3 vNormal;
                varying vec3 vPosition;
                varying vec2 vUv;
                
                void main() {
                    vNormal = normalize(normalMatrix * normal);
                    vPosition = position;
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform float time;
                uniform vec3 globeColor;
                uniform vec3 glowColor;
                uniform float glowIntensity;
                
                varying vec3 vNormal;
                varying vec3 vPosition;
                varying vec2 vUv;
                
                // Simplex noise function
                vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
                vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
                vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }
                
                float snoise(vec2 v) {
                    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                                       -0.577350269189626, 0.024390243902439);
                    vec2 i  = floor(v + dot(v, C.yy));
                    vec2 x0 = v - i + dot(i, C.xx);
                    vec2 i1;
                    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
                    vec4 x12 = x0.xyxy + C.xxzz;
                    x12.xy -= i1;
                    i = mod289(i);
                    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
                                           + i.x + vec3(0.0, i1.x, 1.0));
                    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
                                           dot(x12.zw,x12.zw)), 0.0);
                    m = m*m;
                    m = m*m;
                    vec3 x = 2.0 * fract(p * C.www) - 1.0;
                    vec3 h = abs(x) - 0.5;
                    vec3 ox = floor(x + 0.5);
                    vec3 a0 = x - ox;
                    m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
                    vec3 g;
                    g.x = a0.x * x0.x + h.x * x0.y;
                    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
                    return 130.0 * dot(m, g);
                }
                
                void main() {
                    // Base color with noise pattern
                    float noise = snoise(vUv * 10.0 + time * 0.1) * 0.5 + 0.5;
                    vec3 baseColor = mix(globeColor, globeColor * 1.3, noise * 0.3);
                    
                    // Edge glow
                    float edgeFactor = 1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0)));
                    float glow = pow(edgeFactor, 3.0) * glowIntensity;
                    
                    // Grid lines
                    float latLines = abs(sin(vUv.y * 3.14159 * 18.0));
                    float lonLines = abs(sin(vUv.x * 3.14159 * 36.0));
                    float grid = max(
                        smoothstep(0.95, 1.0, latLines),
                        smoothstep(0.95, 1.0, lonLines)
                    ) * 0.2;
                    
                    vec3 finalColor = baseColor + glowColor * glow + glowColor * grid;
                    
                    gl_FragColor = vec4(finalColor, 1.0);
                }
            `,
            transparent: true
        });
        
        this.globe = new THREE.Mesh(geometry, material);
        this.scene.add(this.globe);
        
        // Wireframe overlay
        const wireGeometry = new THREE.SphereGeometry(1.002, 32, 32);
        const wireMaterial = new THREE.MeshBasicMaterial({
            color: 0x00d4ff,
            wireframe: true,
            transparent: true,
            opacity: 0.05
        });
        const wireframe = new THREE.Mesh(wireGeometry, wireMaterial);
        this.globe.add(wireframe);
    }
    
    createAtmosphere() {
        // Atmosphere glow
        const atmosphereGeometry = new THREE.SphereGeometry(1.15, 64, 64);
        const atmosphereMaterial = new THREE.ShaderMaterial({
            uniforms: {
                glowColor: { value: new THREE.Color(0x00d4ff) }
            },
            vertexShader: `
                varying vec3 vNormal;
                void main() {
                    vNormal = normalize(normalMatrix * normal);
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform vec3 glowColor;
                varying vec3 vNormal;
                void main() {
                    float intensity = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
                    gl_FragColor = vec4(glowColor, intensity * 0.4);
                }
            `,
            side: THREE.BackSide,
            blending: THREE.AdditiveBlending,
            transparent: true
        });
        
        const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
        this.scene.add(atmosphere);
    }
    
    createStars() {
        const starGeometry = new THREE.BufferGeometry();
        const starCount = 2000;
        const positions = new Float32Array(starCount * 3);
        const colors = new Float32Array(starCount * 3);
        
        for (let i = 0; i < starCount; i++) {
            const i3 = i * 3;
            // Spread stars in a sphere around the globe
            const radius = 5 + Math.random() * 10;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            
            positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
            positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
            positions[i3 + 2] = radius * Math.cos(phi);
            
            // Random star colors (white, cyan, pink)
            const colorChoice = Math.random();
            if (colorChoice > 0.8) {
                colors[i3] = 0; colors[i3 + 1] = 0.83; colors[i3 + 2] = 1; // Cyan
            } else if (colorChoice > 0.6) {
                colors[i3] = 1; colors[i3 + 1] = 0; colors[i3 + 2] = 0.43; // Pink
            } else {
                colors[i3] = 1; colors[i3 + 1] = 1; colors[i3 + 2] = 1; // White
            }
        }
        
        starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        starGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        
        const starMaterial = new THREE.PointsMaterial({
            size: 0.02,
            vertexColors: true,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending
        });
        
        const stars = new THREE.Points(starGeometry, starMaterial);
        this.scene.add(stars);
    }
    
    createCountryPoints() {
        // Sample country coordinates (lat, lon)
        const countries = [
            { name: 'USA', lat: 38.9072, lon: -77.0369, color: 0x00d4ff },
            { name: 'China', lat: 39.9042, lon: 116.4074, color: 0xff006e },
            { name: 'India', lat: 28.6139, lon: 77.2090, color: 0x00ff88 },
            { name: 'Russia', lat: 55.7558, lon: 37.6173, color: 0xffd60a },
            { name: 'Brazil', lat: -15.8267, lon: -47.9218, color: 0x00d4ff },
            { name: 'UK', lat: 51.5074, lon: -0.1278, color: 0x7b2cbf },
            { name: 'France', lat: 48.8566, lon: 2.3522, color: 0x00d4ff },
            { name: 'Germany', lat: 52.5200, lon: 13.4050, color: 0xffd60a },
            { name: 'Japan', lat: 35.6762, lon: 139.6503, color: 0xff006e },
            { name: 'Australia', lat: -35.2809, lon: 149.1300, color: 0x00ff88 },
            { name: 'South Africa', lat: -25.7479, lon: 28.2293, color: 0xffd60a },
            { name: 'Egypt', lat: 30.0444, lon: 31.2357, color: 0x00d4ff },
            { name: 'Nigeria', lat: 9.0820, lon: 7.4951, color: 0x00ff88 },
            { name: 'Kenya', lat: -1.2921, lon: 36.8219, color: 0xff006e },
            { name: 'Mexico', lat: 19.4326, lon: -99.1332, color: 0x00d4ff },
            { name: 'Argentina', lat: -34.6037, lon: -58.3816, color: 0x7b2cbf },
            { name: 'Canada', lat: 45.4215, lon: -75.6972, color: 0xff006e },
            { name: 'Saudi Arabia', lat: 24.7136, lon: 46.6753, color: 0x00ff88 },
            { name: 'UAE', lat: 24.4539, lon: 54.3773, color: 0xffd60a },
            { name: 'Singapore', lat: 1.3521, lon: 103.8198, color: 0x00d4ff }
        ];
        
        const pointGeometry = new THREE.SphereGeometry(0.015, 16, 16);
        
        countries.forEach(country => {
            const position = this.latLonToVector3(country.lat, country.lon, 1.01);
            
            // Point
            const pointMaterial = new THREE.MeshBasicMaterial({ 
                color: country.color,
                transparent: true,
                opacity: 0.9
            });
            const point = new THREE.Mesh(pointGeometry, pointMaterial);
            point.position.copy(position);
            point.userData = country;
            this.globe.add(point);
            this.points.push(point);
            
            // Glow ring
            const ringGeometry = new THREE.RingGeometry(0.02, 0.035, 32);
            const ringMaterial = new THREE.MeshBasicMaterial({
                color: country.color,
                transparent: true,
                opacity: 0.5,
                side: THREE.DoubleSide
            });
            const ring = new THREE.Mesh(ringGeometry, ringMaterial);
            ring.position.copy(position);
            ring.lookAt(new THREE.Vector3(0, 0, 0));
            this.globe.add(ring);
        });
    }
    
    createConnections() {
        // Create animated connections between some countries
        const connectionPairs = [
            [0, 2],   // USA - India
            [1, 3],   // China - Russia
            [2, 8],   // India - Japan
            [0, 5],   // USA - UK
            [4, 15],  // Brazil - Argentina
            [6, 7],   // France - Germany
            [10, 12], // South Africa - Nigeria
            [0, 1],   // USA - China
            [3, 7],   // Russia - Germany
            [9, 8],   // Australia - Japan
        ];
        
        connectionPairs.forEach((pair, index) => {
            if (this.points[pair[0]] && this.points[pair[1]]) {
                const curve = this.createCurvedLine(
                    this.points[pair[0]].position,
                    this.points[pair[1]].position,
                    index
                );
                this.connections.push(curve);
            }
        });
    }
    
    createCurvedLine(start, end, index) {
        const midPoint = new THREE.Vector3()
            .addVectors(start, end)
            .multiplyScalar(0.5);
        
        // Push midpoint outward for curve
        const distance = start.distanceTo(end);
        midPoint.normalize().multiplyScalar(1 + distance * 0.3);
        
        const curve = new THREE.QuadraticBezierCurve3(start, midPoint, end);
        const points = curve.getPoints(50);
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        
        // Gradient colors
        const colors = [0x00d4ff, 0xff006e, 0x00ff88, 0xffd60a, 0x7b2cbf];
        const color = colors[index % colors.length];
        
        const material = new THREE.LineBasicMaterial({
            color: color,
            transparent: true,
            opacity: 0.4,
            linewidth: 1
        });
        
        const line = new THREE.Line(geometry, material);
        this.globe.add(line);
        
        // Animated particle along the line
        const particleGeometry = new THREE.SphereGeometry(0.008, 8, 8);
        const particleMaterial = new THREE.MeshBasicMaterial({
            color: color,
            transparent: true,
            opacity: 0.9
        });
        const particle = new THREE.Mesh(particleGeometry, particleMaterial);
        particle.userData = { curve, progress: Math.random() };
        this.globe.add(particle);
        
        return { line, particle, curve };
    }
    
    latLonToVector3(lat, lon, radius) {
        const phi = (90 - lat) * (Math.PI / 180);
        const theta = (lon + 180) * (Math.PI / 180);
        
        return new THREE.Vector3(
            -radius * Math.sin(phi) * Math.cos(theta),
            radius * Math.cos(phi),
            radius * Math.sin(phi) * Math.sin(theta)
        );
    }
    
    addEventListeners() {
        // Mouse move for subtle rotation
        this.container.addEventListener('mousemove', (e) => {
            const rect = this.container.getBoundingClientRect();
            this.mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
            this.mouseY = ((e.clientY - rect.top) / rect.height) * 2 - 1;
        });
        
        // Resize handler
        window.addEventListener('resize', () => {
            this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
        });
    }
    
    animate() {
        requestAnimationFrame(() => this.animate());
        
        const time = Date.now() * 0.001;
        
        // Update shader time
        if (this.globe.material.uniforms) {
            this.globe.material.uniforms.time.value = time;
        }
        
        // Auto rotation
        if (this.options.autoRotate) {
            this.globe.rotation.y += 0.002;
        }
        
        // Mouse interaction
        this.targetRotationX += (this.mouseY * 0.3 - this.targetRotationX) * 0.05;
        this.targetRotationY += (this.mouseX * 0.3 - this.targetRotationY) * 0.05;
        
        this.globe.rotation.x = this.targetRotationX;
        this.globe.rotation.y += this.targetRotationY * 0.01;
        
        // Animate connection particles
        this.connections.forEach(conn => {
            if (conn.particle && conn.curve) {
                conn.particle.userData.progress += 0.005;
                if (conn.particle.userData.progress > 1) {
                    conn.particle.userData.progress = 0;
                }
                const point = conn.curve.getPoint(conn.particle.userData.progress);
                conn.particle.position.copy(point);
            }
        });
        
        // Pulse effect on points
        this.points.forEach((point, i) => {
            const scale = 1 + Math.sin(time * 2 + i) * 0.2;
            point.scale.setScalar(scale);
        });
        
        this.renderer.render(this.scene, this.camera);
    }
}

// Initialize globes when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Hero Globe
    const heroGlobeContainer = document.querySelector('.hero-content');
    if (heroGlobeContainer) {
        // Create container for hero globe
        const globeDiv = document.createElement('div');
        globeDiv.id = 'hero-globe-container';
        heroGlobeContainer.appendChild(globeDiv);
        
        new UnityGlobe('hero-globe-container', {
            isHero: true,
            autoRotate: true,
            showConnections: true
        });
    }
    
    // Main Globe Section
    if (document.getElementById('globe-canvas')) {
        new UnityGlobe('globe-canvas', {
            isHero: false,
            autoRotate: true,
            showConnections: true
        });
    }
});
