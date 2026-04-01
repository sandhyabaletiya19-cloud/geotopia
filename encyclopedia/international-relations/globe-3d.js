/**
 * Unity Atlas - 3D Globe Visualization
 * Three.js implementation for interactive globe
 */

(function() {
    'use strict';

    // Check if Three.js is loaded
    if (typeof THREE === 'undefined') {
        console.warn('Three.js not loaded. Globe visualization disabled.');
        return;
    }

    // ==================== CONFIGURATION ====================
    const CONFIG = {
        radius: 200,
        segments: 64,
        rotationSpeed: 0.001,
        markerSize: 3,
        connectionColor: 0x3b82f6,
        atmosphereColor: 0x3b82f6,
        countryColors: {
            default: 0x4ade80,
            highlighted: 0xfbbf24,
            selected: 0xef4444
        }
    };

    // ==================== GLOBE CLASS ====================
    class Globe {
        constructor(container) {
            this.container = container;
            this.scene = null;
            this.camera = null;
            this.renderer = null;
            this.globe = null;
            this.markers = [];
            this.connections = [];
            this.isRotating = true;
            this.mouse = new THREE.Vector2();
            this.raycaster = new THREE.Raycaster();
            
            this.init();
        }

        init() {
            this.createScene();
            this.createCamera();
            this.createRenderer();
            this.createGlobe();
            this.createAtmosphere();
            this.createStars();
            this.addMarkers();
            this.addEventListeners();
            this.animate();
        }

        createScene() {
            this.scene = new THREE.Scene();
        }

        createCamera() {
            const width = this.container.clientWidth;
            const height = this.container.clientHeight;
            
            this.camera = new THREE.PerspectiveCamera(45, width / height, 1, 2000);
            this.camera.position.z = 600;
        }

        createRenderer() {
            this.renderer = new THREE.WebGLRenderer({ 
                antialias: true, 
                alpha: true 
            });
            
            this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
            this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            this.container.appendChild(this.renderer.domElement);
        }

        createGlobe() {
            // Globe geometry
            const geometry = new THREE.SphereGeometry(CONFIG.radius, CONFIG.segments, CONFIG.segments);
            
            // Create a gradient material for the globe
            const material = new THREE.ShaderMaterial({
                uniforms: {
                    color1: { value: new THREE.Color(0x1e3a5f) },
                    color2: { value: new THREE.Color(0x0f172a) }
                },
                vertexShader: `
                    varying vec2 vUv;
                    void main() {
                        vUv = uv;
                        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                    }
                `,
                fragmentShader: `
                    uniform vec3 color1;
                    uniform vec3 color2;
                    varying vec2 vUv;
                    void main() {
                        gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
                    }
                `
            });
            
            this.globe = new THREE.Mesh(geometry, material);
            this.scene.add(this.globe);
            
            // Add wireframe
            const wireframeGeometry = new THREE.SphereGeometry(CONFIG.radius + 1, 32, 32);
            const wireframeMaterial = new THREE.MeshBasicMaterial({
                color: 0x3b82f6,
                wireframe: true,
                transparent: true,
                opacity: 0.1
            });
            const wireframe = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
            this.globe.add(wireframe);
        }

        createAtmosphere() {
            const geometry = new THREE.SphereGeometry(CONFIG.radius * 1.15, CONFIG.segments, CONFIG.segments);
            
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
                        float intensity = pow(0.6 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
                        gl_FragColor = vec4(0.23, 0.51, 0.96, 1.0) * intensity;
                    }
                `,
                blending: THREE.AdditiveBlending,
                side: THREE.BackSide,
                transparent: true
            });
            
            const atmosphere = new THREE.Mesh(geometry, material);
            this.scene.add(atmosphere);
        }

        createStars() {
            const starsGeometry = new THREE.BufferGeometry();
            const starsCount = 2000;
            const positions = new Float32Array(starsCount * 3);
            
            for (let i = 0; i < starsCount * 3; i += 3) {
                positions[i] = (Math.random() - 0.5) * 2000;
                positions[i + 1] = (Math.random() - 0.5) * 2000;
                positions[i + 2] = (Math.random() - 0.5) * 2000;
            }
            
            starsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            
            const starsMaterial = new THREE.PointsMaterial({
                color: 0xffffff,
                size: 1,
                transparent: true,
                opacity: 0.8
            });
            
            const stars = new THREE.Points(starsGeometry, starsMaterial);
            this.scene.add(stars);
        }

        addMarkers() {
            // Add markers for key countries
            const keyCountries = [
                { code: 'IND', lat: 20.5937, lng: 78.9629, color: 0xff6b35 },
                { code: 'USA', lat: 37.0902, lng: -95.7129, color: 0x3b82f6 },
                { code: 'CHN', lat: 35.8617, lng: 104.1954, color: 0xef4444 },
                { code: 'RUS', lat: 61.5240, lng: 105.3188, color: 0x22c55e },
                { code: 'GBR', lat: 55.3781, lng: -3.4360, color: 0x8b5cf6 },
                { code: 'FRA', lat: 46.2276, lng: 2.2137, color: 0x06b6d4 },
                { code: 'DEU', lat: 51.1657, lng: 10.4515, color: 0xfbbf24 },
                { code: 'JPN', lat: 36.2048, lng: 138.2529, color: 0xec4899 },
                { code: 'BRA', lat: -14.2350, lng: -51.9253, color: 0x10b981 },
                { code: 'AUS', lat: -25.2744, lng: 133.7751, color: 0xf97316 }
            ];
            
            keyCountries.forEach(country => {
                const marker = this.createMarker(country.lat, country.lng, country.color);
                marker.userData = { code: country.code };
                this.markers.push(marker);
                this.globe.add(marker);
            });
            
            // Add some connections
            this.addConnection(keyCountries[0], keyCountries[1]); // IND-USA
            this.addConnection(keyCountries[0], keyCountries[7]); // IND-JPN
            this.addConnection(keyCountries[1], keyCountries[2]); // USA-CHN
            this.addConnection(keyCountries[3], keyCountries[2]); // RUS-CHN
        }

        createMarker(lat, lng, color) {
            const geometry = new THREE.SphereGeometry(CONFIG.markerSize, 16, 16);
            const material = new THREE.MeshBasicMaterial({ color: color });
            const marker = new THREE.Mesh(geometry, material);
            
            const position = this.latLngToVector3(lat, lng, CONFIG.radius + 5);
            marker.position.copy(position);
            
            // Add glow
            const glowGeometry = new THREE.SphereGeometry(CONFIG.markerSize * 2, 16, 16);
            const glowMaterial = new THREE.MeshBasicMaterial({
                color: color,
                transparent: true,
                opacity: 0.3
            });
            const glow = new THREE.Mesh(glowGeometry, glowMaterial);
            marker.add(glow);
            
            return marker;
        }

        addConnection(country1, country2) {
            const start = this.latLngToVector3(country1.lat, country1.lng, CONFIG.radius + 5);
            const end = this.latLngToVector3(country2.lat, country2.lng, CONFIG.radius + 5);
            
            // Create curved line
            const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
            mid.normalize().multiplyScalar(CONFIG.radius + 50);
            
            const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
            const points = curve.getPoints(50);
            const geometry = new THREE.BufferGeometry().setFromPoints(points);
            
            const material = new THREE.LineBasicMaterial({
                color: CONFIG.connectionColor,
                transparent: true,
                opacity: 0.5
            });
            
            const line = new THREE.Line(geometry, material);
            this.connections.push(line);
            this.globe.add(line);
        }

        latLngToVector3(lat, lng, radius) {
            const phi = (90 - lat) * (Math.PI / 180);
            const theta = (lng + 180) * (Math.PI / 180);
            
            return new THREE.Vector3(
                -radius * Math.sin(phi) * Math.cos(theta),
                radius * Math.cos(phi),
                radius * Math.sin(phi) * Math.sin(theta)
            );
        }

        addEventListeners() {
            window.addEventListener('resize', () => this.onResize());
            this.container.addEventListener('mousemove', (e) => this.onMouseMove(e));
            this.container.addEventListener('mouseenter', () => this.isRotating = false);
            this.container.addEventListener('mouseleave', () => this.isRotating = true);
        }

        onResize() {
            const width = this.container.clientWidth;
            const height = this.container.clientHeight;
            
            this.camera.aspect = width / height;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(width, height);
        }

        onMouseMove(event) {
            const rect = this.container.getBoundingClientRect();
            this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
            this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
            
            // Rotate globe based on mouse position
            if (!this.isRotating) {
                this.globe.rotation.y = this.mouse.x * 0.5;
                this.globe.rotation.x = this.mouse.y * 0.3;
            }
        }

        animate() {
            requestAnimationFrame(() => this.animate());
            
            if (this.isRotating) {
                this.globe.rotation.y += CONFIG.rotationSpeed;
            }
            
            // Animate markers (pulse effect)
            this.markers.forEach(marker => {
                const scale = 1 + Math.sin(Date.now() * 0.003) * 0.1;
                marker.scale.setScalar(scale);
            });
            
            this.renderer.render(this.scene, this.camera);
        }
    }

    // ==================== INITIALIZE ====================
    function init() {
        const container = document.getElementById('globeContainer');
        if (container) {
            new Globe(container);
        }
    }

    // Wait for DOM
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
