// ============================================
// GEOTOPIA HUMAN GEOGRAPHY - MASTER JAVASCRIPT
// Real-time data, interactive features & live counters
// ============================================

(function() {
    'use strict';

    // ============================================
    // CONFIGURATION
    // ============================================
    
    const CONFIG = {
        // API Endpoints
        worldBankAPI: 'https://api.worldbank.org/v2',
        restCountriesAPI: 'https://restcountries.com/v3.1',
        
        // Population Settings (2026 estimates)
        populationBase: 8100000000,
        populationDate: new Date('2026-01-01T00:00:00Z'),
        birthsPerSecond: 4.3,
        deathsPerSecond: 1.8,
        
        // Update Intervals
        populationUpdateInterval: 1000,
        statsUpdateInterval: 60000,
        
        // Cache Duration (15 minutes)
        cacheDuration: 900000
    };

    // ============================================
    // UTILITY FUNCTIONS
    // ============================================
    
    /**
     * Format large numbers with appropriate suffix
     */
    function formatNumber(num, decimals = 2) {
        if (num >= 1000000000) {
            return (num / 1000000000).toFixed(decimals) + 'B';
        } else if (num >= 1000000) {
            return (num / 1000000).toFixed(decimals) + 'M';
        } else if (num >= 1000) {
            return (num / 1000).toFixed(decimals) + 'K';
        }
        return num.toLocaleString();
    }

    /**
     * Format number with commas
     */
    function formatWithCommas(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    /**
     * Animate number counting
     */
    function animateNumber(element, start, end, duration, suffix = '') {
        const startTime = performance.now();
        const difference = end - start;
        
        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(start + (difference * easeOutQuart));
            
            element.textContent = formatWithCommas(current) + suffix;
            
            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }
        
        requestAnimationFrame(update);
    }

    /**
     * Fetch with caching
     */
    async function fetchWithCache(url, cacheKey) {
        const cached = localStorage.getItem(cacheKey);
        const cacheTime = localStorage.getItem(cacheKey + '_time');
        
        if (cached && cacheTime && (Date.now() - parseInt(cacheTime)) < CONFIG.cacheDuration) {
            return JSON.parse(cached);
        }
        
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            
            localStorage.setItem(cacheKey, JSON.stringify(data));
            localStorage.setItem(cacheKey + '_time', Date.now().toString());
            
            return data;
        } catch (error) {
            console.warn('Fetch error:', error);
            return cached ? JSON.parse(cached) : null;
        }
    }

    /**
     * Debounce function
     */
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // ============================================
    // LIVE POPULATION COUNTER
    // ============================================
    
    const PopulationCounter = {
        elements: [],
        currentPopulation: CONFIG.populationBase,
        
        init() {
            // Find all population counter elements
            this.elements = [
                document.getElementById('hero-population'),
                document.getElementById('world-pop'),
                document.getElementById('world-pop-display'),
                document.getElementById('world-pop-hero')
            ].filter(el => el !== null);
            
            if (this.elements.length === 0) return;
            
            // Calculate current population
            this.calculateCurrentPopulation();
            
            // Start counter
            this.startCounter();
        },
        
        calculateCurrentPopulation() {
            const now = new Date();
            const secondsElapsed = (now - CONFIG.populationDate) / 1000;
            const netGrowthPerSecond = CONFIG.birthsPerSecond - CONFIG.deathsPerSecond;
            this.currentPopulation = Math.floor(CONFIG.populationBase + (secondsElapsed * netGrowthPerSecond));
        },
        
        startCounter() {
            // Update immediately
            this.updateDisplay();
            
            // Update every second
            setInterval(() => {
                this.currentPopulation += Math.round(CONFIG.birthsPerSecond - CONFIG.deathsPerSecond);
                this.updateDisplay();
            }, CONFIG.populationUpdateInterval);
        },
        
        updateDisplay() {
            this.elements.forEach(el => {
                if (el) {
                    el.textContent = formatWithCommas(this.currentPopulation);
                    el.classList.add('counter-pulse');
                    setTimeout(() => el.classList.remove('counter-pulse'), 200);
                }
            });
        }
    };

    // ============================================
    // PRELOADER
    // ============================================
    
    const Preloader = {
        element: null,
        
        init() {
            this.element = document.getElementById('preloader');
            if (!this.element) return;
            
            // Hide preloader after page load
            window.addEventListener('load', () => {
                setTimeout(() => this.hide(), 500);
            });
            
            // Fallback - hide after 3 seconds
            setTimeout(() => this.hide(), 3000);
        },
        
        hide() {
            if (this.element) {
                this.element.classList.add('fade-out');
                setTimeout(() => {
                    this.element.style.display = 'none';
                }, 500);
            }
        }
    };

    // ============================================
    // NAVIGATION
    // ============================================
    
    const Navigation = {
        nav: null,
        mobileToggle: null,
        mobileMenu: null,
        lastScrollY: 0,
        
        init() {
            this.nav = document.getElementById('mainNav');
            this.mobileToggle = document.getElementById('mobileMenuToggle');
            this.mobileMenu = document.getElementById('mobileMenu');
            
            if (!this.nav) return;
            
            // Scroll behavior
            this.initScrollBehavior();
            
            // Mobile menu
            this.initMobileMenu();
        },
        
        initScrollBehavior() {
            window.addEventListener('scroll', debounce(() => {
                const currentScrollY = window.scrollY;
                
                // Add background on scroll
                if (currentScrollY > 50) {
                    this.nav.classList.add('scrolled');
                } else {
                    this.nav.classList.remove('scrolled');
                }
                
                // Hide/show on scroll direction
                if (currentScrollY > this.lastScrollY && currentScrollY > 200) {
                    this.nav.classList.add('nav-hidden');
                } else {
                    this.nav.classList.remove('nav-hidden');
                }
                
                this.lastScrollY = currentScrollY;
            }, 10));
        },
        
        initMobileMenu() {
            if (!this.mobileToggle || !this.mobileMenu) return;
            
            this.mobileToggle.addEventListener('click', () => {
                this.mobileToggle.classList.toggle('active');
                this.mobileMenu.classList.toggle('active');
                document.body.classList.toggle('menu-open');
            });
            
            // Close menu on link click
            this.mobileMenu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    this.mobileToggle.classList.remove('active');
                    this.mobileMenu.classList.remove('active');
                    document.body.classList.remove('menu-open');
                });
            });
        }
    };

    // ============================================
    // THEME TOGGLE
    // ============================================
    
    const ThemeToggle = {
        toggle: null,
        icon: null,
        
        init() {
            this.toggle = document.getElementById('themeToggle');
            if (!this.toggle) return;
            
            this.icon = this.toggle.querySelector('.theme-icon');
            
            // Check saved preference
            const savedTheme = localStorage.getItem('theme') || 'light';
            this.setTheme(savedTheme);
            
            // Toggle event
            this.toggle.addEventListener('click', () => {
                const currentTheme = document.documentElement.getAttribute('data-theme');
                const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                this.setTheme(newTheme);
            });
        },
        
        setTheme(theme) {
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
            
            if (this.icon) {
                this.icon.textContent = theme === 'dark' ? '☀️' : '🌙';
            }
        }
    };

    // ============================================
    // BACK TO TOP BUTTON
    // ============================================
    
    const BackToTop = {
        button: null,
        
        init() {
            this.button = document.getElementById('backToTop');
            if (!this.button) return;
            
            // Show/hide on scroll
            window.addEventListener('scroll', debounce(() => {
                if (window.scrollY > 500) {
                    this.button.classList.add('visible');
                } else {
                    this.button.classList.remove('visible');
                }
            }, 100));
            
            // Click to scroll
            this.button.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    };

    // ============================================
    // HERO STATS ANIMATION
    // ============================================
    
    const HeroStats = {
        init() {
            const statNumbers = document.querySelectorAll('.hero-stats .stat-number[data-count]');
            
            if (statNumbers.length === 0) return;
            
            // Intersection Observer for animation
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const el = entry.target;
                        const target = parseInt(el.getAttribute('data-count'));
                        animateNumber(el, 0, target, 2000);
                        observer.unobserve(el);
                    }
                });
            }, { threshold: 0.5 });
            
            statNumbers.forEach(stat => observer.observe(stat));
        }
    };

    // ============================================
    // SCROLL ANIMATIONS
    // ============================================
    
    const ScrollAnimations = {
        init() {
            const animatedElements = document.querySelectorAll(
                '.topic-card, .stat-card, .agri-card, .hub-card, .org-card, .bloc-card, .crop-card'
            );
            
            if (animatedElements.length === 0) return;
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add('animate-in');
                        }, index * 50);
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1, rootMargin: '50px' });
            
            animatedElements.forEach(el => {
                el.classList.add('animate-ready');
                observer.observe(el);
            });
        }
    };

    // ============================================
    // SMOOTH SCROLL
    // ============================================
    
    const SmoothScroll = {
        init() {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    const href = this.getAttribute('href');
                    if (href === '#') return;
                    
                    const target = document.querySelector(href);
                    if (target) {
                        e.preventDefault();
                        const navHeight = document.getElementById('mainNav')?.offsetHeight || 80;
                        const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        }
    };

    // ============================================
    // HERO PARTICLES (Optional Enhancement)
    // ============================================
    
    const HeroParticles = {
        canvas: null,
        ctx: null,
        particles: [],
        
        init() {
            const container = document.getElementById('heroParticles');
            if (!container) return;
            
            // Create canvas
            this.canvas = document.createElement('canvas');
            this.canvas.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;';
            container.appendChild(this.canvas);
            
            this.ctx = this.canvas.getContext('2d');
            this.resize();
            this.createParticles();
            this.animate();
            
            window.addEventListener('resize', debounce(() => this.resize(), 200));
        },
        
        resize() {
            if (!this.canvas) return;
            this.canvas.width = this.canvas.offsetWidth;
            this.canvas.height = this.canvas.offsetHeight;
        },
        
        createParticles() {
            const count = Math.floor((this.canvas.width * this.canvas.height) / 20000);
            this.particles = [];
            
            for (let i = 0; i < count; i++) {
                this.particles.push({
                    x: Math.random() * this.canvas.width,
                    y: Math.random() * this.canvas.height,
                    radius: Math.random() * 2 + 1,
                    speedX: (Math.random() - 0.5) * 0.5,
                    speedY: (Math.random() - 0.5) * 0.5,
                    opacity: Math.random() * 0.5 + 0.2
                });
            }
        },
        
        animate() {
            if (!this.ctx) return;
            
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            
            this.particles.forEach(particle => {
                particle.x += particle.speedX;
                particle.y += particle.speedY;
                
                // Wrap around
                if (particle.x < 0) particle.x = this.canvas.width;
                if (particle.x > this.canvas.width) particle.x = 0;
                if (particle.y < 0) particle.y = this.canvas.height;
                if (particle.y > this.canvas.height) particle.y = 0;
                
                this.ctx.beginPath();
                this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                this.ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
                this.ctx.fill();
            });
            
            requestAnimationFrame(() => this.animate());
        }
    };

    // ============================================
    // LIVE STATS UPDATES (For Quick Stats Section)
    // ============================================
    
    const LiveStats = {
        init() {
            // Update timestamp
            this.updateTimestamp();
            
            // Simulate live data updates
            setInterval(() => {
                this.simulateUpdates();
            }, 30000);
        },
        
        updateTimestamp() {
            const timestamps = document.querySelectorAll('.last-updated, #update-time');
            const now = new Date();
            const formatted = now.toLocaleString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
            
            timestamps.forEach(el => {
                el.textContent = formatted;
            });
        },
        
        simulateUpdates() {
            // Add subtle pulse to stat cards
            document.querySelectorAll('.stat-card').forEach(card => {
                card.classList.add('data-update');
                setTimeout(() => card.classList.remove('data-update'), 500);
            });
        }
    };

    // ============================================
    // SEARCH FUNCTIONALITY
    // ============================================
    
    const Search = {
        input: null,
        
        init() {
            this.input = document.getElementById('searchInput') || document.querySelector('.search-input');
            if (!this.input) return;
            
            this.input.addEventListener('input', debounce((e) => {
                this.filterContent(e.target.value);
            }, 300));
        },
        
        filterContent(query) {
            const normalizedQuery = query.toLowerCase().trim();
            const cards = document.querySelectorAll('.topic-card, .hub-card, .org-card');
            
            cards.forEach(card => {
                const text = card.textContent.toLowerCase();
                const matches = text.includes(normalizedQuery);
                
                card.style.display = matches || normalizedQuery === '' ? '' : 'none';
                card.classList.toggle('search-highlight', matches && normalizedQuery !== '');
            });
        }
    };

    // ============================================
    // TOOLTIP SYSTEM
    // ============================================
    
    const Tooltips = {
        init() {
            document.querySelectorAll('[data-tooltip]').forEach(el => {
                el.addEventListener('mouseenter', (e) => this.show(e));
                el.addEventListener('mouseleave', () => this.hide());
            });
        },
        
        show(e) {
            const text = e.target.getAttribute('data-tooltip');
            if (!text) return;
            
            const tooltip = document.createElement('div');
            tooltip.className = 'custom-tooltip';
            tooltip.textContent = text;
            document.body.appendChild(tooltip);
            
            const rect = e.target.getBoundingClientRect();
            tooltip.style.top = (rect.top - tooltip.offsetHeight - 10) + 'px';
            tooltip.style.left = (rect.left + rect.width / 2 - tooltip.offsetWidth / 2) + 'px';
            
            setTimeout(() => tooltip.classList.add('visible'), 10);
        },
        
        hide() {
            document.querySelectorAll('.custom-tooltip').forEach(t => t.remove());
        }
    };

    // ============================================
    // CHART.JS INTEGRATION (For Topic Pages)
    // ============================================
    
    const Charts = {
        chartInstances: {},
        
        init() {
            // Check if Chart.js is loaded
            if (typeof Chart === 'undefined') return;
            
            // Set global defaults
            this.setDefaults();
            
            // Initialize specific charts if elements exist
            this.initAgeDistributionChart();
            this.initBirthDeathChart();
            this.initUrbanizationChart();
            this.initMigrationChart();
            this.initGDPChart();
        },
        
        setDefaults() {
            Chart.defaults.font.family = "'Poppins', sans-serif";
            Chart.defaults.color = '#1f2937';
            Chart.defaults.plugins.legend.labels.usePointStyle = true;
            Chart.defaults.plugins.tooltip.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            Chart.defaults.plugins.tooltip.padding = 12;
            Chart.defaults.plugins.tooltip.cornerRadius = 8;
        },
        
        initAgeDistributionChart() {
            const ctx = document.getElementById('age-distribution-chart');
            if (!ctx) return;
            
            this.chartInstances.ageDistribution = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['India', 'China', 'USA', 'Indonesia', 'Brazil', 'Nigeria', 'Bangladesh', 'Russia', 'Japan', 'Germany'],
                    datasets: [
                        {
                            label: '0-14 years',
                            data: [26.3, 17.3, 18.1, 23.5, 19.7, 42.3, 26.1, 17.8, 12.1, 14.2],
                            backgroundColor: '#3b82f6',
                            borderRadius: 4
                        },
                        {
                            label: '15-64 years',
                            data: [67.8, 70.4, 64.6, 68.7, 69.5, 54.6, 68.5, 66.1, 59.1, 64.3],
                            backgroundColor: '#22c55e',
                            borderRadius: 4
                        },
                        {
                            label: '65+ years',
                            data: [6.9, 12.3, 17.3, 7.8, 10.8, 3.1, 5.4, 16.1, 28.8, 21.5],
                            backgroundColor: '#f59e0b',
                            borderRadius: 4
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: { stacked: true, grid: { display: false } },
                        y: { stacked: true, title: { display: true, text: 'Percentage (%)' } }
                    },
                    plugins: {
                        title: { display: true, text: 'Age Distribution by Country (2026)', font: { size: 16 } }
                    }
                }
            });
        },
        
        initBirthDeathChart() {
            const ctx = document.getElementById('birth-death-chart');
            if (!ctx) return;
            
            this.chartInstances.birthDeath = new Chart(ctx, {
                type: 'scatter',
                data: {
                    datasets: [
                        {
                            label: 'Stage 5 (Declining)',
                            data: [
                                { x: 8.2, y: 10.1, country: 'Japan' },
                                { x: 8.3, y: 9.7, country: 'Germany' },
                                { x: 7.8, y: 10.5, country: 'Italy' }
                            ],
                            backgroundColor: '#ef4444',
                            pointRadius: 10
                        },
                        {
                            label: 'Stage 4 (Low Stationary)',
                            data: [
                                { x: 10.9, y: 9.5, country: 'USA' },
                                { x: 10.8, y: 9.1, country: 'UK' },
                                { x: 10.7, y: 9.3, country: 'France' }
                            ],
                            backgroundColor: '#22c55e',
                            pointRadius: 10
                        },
                        {
                            label: 'Stage 3 (Late Expanding)',
                            data: [
                                { x: 17.6, y: 7.1, country: 'India' },
                                { x: 10.9, y: 7.4, country: 'China' },
                                { x: 14.8, y: 6.3, country: 'Brazil' }
                            ],
                            backgroundColor: '#f59e0b',
                            pointRadius: 10
                        },
                        {
                            label: 'Stage 2 (Early Expanding)',
                            data: [
                                { x: 36.9, y: 8.4, country: 'Nigeria' },
                                { x: 32.1, y: 6.2, country: 'DR Congo' },
                                { x: 38.5, y: 9.1, country: 'Niger' }
                            ],
                            backgroundColor: '#3b82f6',
                            pointRadius: 10
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: { title: { display: true, text: 'Birth Rate (per 1000)' }, min: 0, max: 45 },
                        y: { title: { display: true, text: 'Death Rate (per 1000)' }, min: 0, max: 15 }
                    },
                    plugins: {
                        tooltip: {
                            callbacks: {
                                label: (ctx) => `${ctx.raw.country}: BR ${ctx.raw.x}, DR ${ctx.raw.y}`
                            }
                        }
                    }
                }
            });
        },
        
        initUrbanizationChart() {
            const ctx = document.getElementById('urbanization-timeline');
            if (!ctx) return;
            
            this.chartInstances.urbanization = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['1800', '1850', '1900', '1950', '1980', '2000', '2010', '2020', '2026'],
                    datasets: [
                        {
                            label: 'Urban Population %',
                            data: [3, 6, 14, 30, 40, 47, 52, 56, 57.2],
                            borderColor: '#3b82f6',
                            backgroundColor: 'rgba(59, 130, 246, 0.1)',
                            fill: true,
                            tension: 0.4
                        },
                        {
                            label: 'Rural Population %',
                            data: [97, 94, 86, 70, 60, 53, 48, 44, 42.8],
                            borderColor: '#22c55e',
                            backgroundColor: 'rgba(34, 197, 94, 0.1)',
                            fill: true,
                            tension: 0.4
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        title: { display: true, text: 'Global Urban vs Rural Population (1800-2026)', font: { size: 16 } }
                    },
                    scales: {
                        y: { min: 0, max: 100, title: { display: true, text: 'Percentage' } }
                    }
                }
            });
        },
        
        initMigrationChart() {
            const ctx = document.getElementById('migration-chart');
            if (!ctx) return;
            
            this.chartInstances.migration = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['MEX→USA', 'SYR→TUR', 'IND→UAE', 'UKR→RUS', 'VEN→COL', 'AFG→PAK', 'PHL→USA', 'BGD→IND'],
                    datasets: [{
                        label: 'Migrants (Millions)',
                        data: [11.2, 3.7, 3.5, 2.9, 2.5, 2.2, 2.0, 1.8],
                        backgroundColor: [
                            '#3b82f6', '#ef4444', '#f59e0b', '#8b5cf6',
                            '#ec4899', '#22c55e', '#06b6d4', '#84cc16'
                        ],
                        borderRadius: 8
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    indexAxis: 'y',
                    plugins: {
                        title: { display: true, text: 'Top Migration Corridors (2026)', font: { size: 16 } },
                        legend: { display: false }
                    }
                }
            });
        },
        
        initGDPChart() {
            const ctx = document.getElementById('gdp-chart');
            if (!ctx) return;
            
            this.chartInstances.gdp = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ['USA', 'China', 'Japan', 'Germany', 'India', 'UK', 'France', 'Others'],
                    datasets: [{
                        data: [25.5, 18.3, 4.2, 4.1, 3.7, 3.2, 2.8, 38.2],
                        backgroundColor: [
                            '#3b82f6', '#ef4444', '#f59e0b', '#22c55e',
                            '#8b5cf6', '#ec4899', '#06b6d4', '#94a3b8'
                        ]
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        title: { display: true, text: 'Share of World GDP (2026)', font: { size: 16 } },
                        tooltip: {
                            callbacks: {
                                label: (ctx) => `${ctx.label}: ${ctx.raw}% ($${(ctx.raw * 1.12).toFixed(1)}T)`
                            }
                        }
                    }
                }
            });
        }
    };

    // ============================================
    // LEAFLET MAP INTEGRATION (For Topic Pages)
    // ============================================
    
    const Maps = {
        instances: {},
        
        init() {
            // Check if Leaflet is loaded
            if (typeof L === 'undefined') return;
            
            // Initialize specific maps if elements exist
            this.initPopulationMap();
            this.initMigrationMap();
            this.initTradeMap();
        },
        
        initPopulationMap() {
            const container = document.getElementById('population-map');
            if (!container) return;
            
            const map = L.map('population-map').setView([20, 0], 2);
            
            L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
                attribution: '© OpenStreetMap, © CARTO',
                maxZoom: 18
            }).addTo(map);
            
            // Add population markers for major cities
            const cities = [
                { name: 'Tokyo', pop: '37.4M', coords: [35.6762, 139.6503] },
                { name: 'Delhi', pop: '32.9M', coords: [28.6139, 77.2090] },
                { name: 'Shanghai', pop: '28.5M', coords: [31.2304, 121.4737] },
                { name: 'São Paulo', pop: '22.4M', coords: [-23.5505, -46.6333] },
                { name: 'Mexico City', pop: '21.8M', coords: [19.4326, -99.1332] },
                { name: 'Cairo', pop: '21.3M', coords: [30.0444, 31.2357] },
                { name: 'Mumbai', pop: '21.0M', coords: [19.0760, 72.8777] },
                { name: 'Beijing', pop: '20.9M', coords: [39.9042, 116.4074] },
                { name: 'Dhaka', pop: '22.5M', coords: [23.8103, 90.4125] },
                { name: 'Lagos', pop: '15.4M', coords: [6.5244, 3.3792] }
            ];
            
            cities.forEach(city => {
                const size = parseInt(city.pop) / 2;
                L.circleMarker(city.coords, {
                    radius: Math.min(size, 20),
                    fillColor: '#3b82f6',
                    color: '#1e40af',
                    weight: 2,
                    opacity: 1,
                    fillOpacity: 0.6
                })
                .bindPopup(`<strong>${city.name}</strong><br>Population: ${city.pop}`)
                .addTo(map);
            });
            
            this.instances.population = map;
        },
        
        initMigrationMap() {
            const container = document.getElementById('migration-map');
            if (!container) return;
            
            const map = L.map('migration-map').setView([20, 0], 2);
            
            L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
                attribution: '© OpenStreetMap, © CARTO'
            }).addTo(map);
            
            // Migration routes
            const routes = [
                { from: [23.6345, -102.5528], to: [37.0902, -95.7129], color: '#3b82f6', label: 'Mexico → USA' },
                { from: [34.8021, 38.9968], to: [38.9637, 35.2433], color: '#ef4444', label: 'Syria → Turkey' },
                { from: [20.5937, 78.9629], to: [23.4241, 53.8478], color: '#f59e0b', label: 'India → UAE' }
            ];
            
            routes.forEach(route => {
                L.polyline([route.from, route.to], {
                    color: route.color,
                    weight: 3,
                    opacity: 0.7,
                    dashArray: '10, 10'
                }).bindPopup(route.label).addTo(map);
            });
            
            this.instances.migration = map;
        },
        
        initTradeMap() {
            const container = document.getElementById('trade-map');
            if (!container) return;
            
            const map = L.map('trade-map').setView([20, 0], 2);
            
            L.tileLayer('https://{s}.basemaps.cartocdn.com/voyager/{z}/{x}/{y}{r}.png', {
                attribution: '© OpenStreetMap, © CARTO'
            }).addTo(map);
            
            // Major ports
            const ports = [
                { name: 'Shanghai', coords: [31.2, 121.5], volume: '47M TEU' },
                { name: 'Singapore', coords: [1.3, 103.8], volume: '37M TEU' },
                { name: 'Rotterdam', coords: [51.9, 4.5], volume: '14M TEU' },
                { name: 'Los Angeles', coords: [33.7, -118.2], volume: '10M TEU' }
            ];
            
            ports.forEach(port => {
                L.marker(port.coords)
                    .bindPopup(`<strong>${port.name}</strong><br>Volume: ${port.volume}`)
                    .addTo(map);
            });
            
            this.instances.trade = map;
        }
    };

    // ============================================
    // ACCORDION SECTIONS (For Topic Pages)
    // ============================================
    
    const Accordions = {
        init() {
            const details = document.querySelectorAll('details');
            if (details.length === 0) return;
            
            details.forEach(detail => {
                detail.addEventListener('toggle', () => {
                    if (detail.open) {
                        // Close others if needed
                        details.forEach(other => {
                            if (other !== detail && other.hasAttribute('data-exclusive')) {
                                other.removeAttribute('open');
                            }
                        });
                        
                        // Scroll into view
                        setTimeout(() => {
                            detail.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }, 100);
                    }
                });
            });
        }
    };

    // ============================================
    // COMPARISON TOOL (For Hub Page)
    // ============================================
    
    const ComparisonTool = {
        init() {
            const compareBtn = document.getElementById('compareBtn');
            if (!compareBtn) return;
            
            compareBtn.addEventListener('click', () => this.compare());
        },
        
        async compare() {
            const country1 = document.getElementById('country1')?.value;
            const country2 = document.getElementById('country2')?.value;
            const resultsDiv = document.getElementById('comparison-results');
            
            if (!country1 || !country2 || !resultsDiv) {
                if (resultsDiv) resultsDiv.innerHTML = '<p class="error">Please select both countries</p>';
                return;
            }
            
            resultsDiv.innerHTML = '<div class="loading"><span class="spinner"></span> Loading...</div>';
            
            try {
                const [data1, data2] = await Promise.all([
                    fetchWithCache(`${CONFIG.restCountriesAPI}/alpha/${country1}`, `country_${country1}`),
                    fetchWithCache(`${CONFIG.restCountriesAPI}/alpha/${country2}`, `country_${country2}`)
                ]);
                
                if (!data1 || !data2) throw new Error('Failed to fetch data');
                
                const c1 = data1[0];
                const c2 = data2[0];
                
                resultsDiv.innerHTML = `
                    <table class="comparison-table">
                        <thead>
                            <tr>
                                <th>Indicator</th>
                                <th>${c1.name.common} ${c1.flag}</th>
                                <th>${c2.name.common} ${c2.flag}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Population</td>
                                <td>${formatNumber(c1.population)}</td>
                                <td>${formatNumber(c2.population)}</td>
                            </tr>
                            <tr>
                                <td>Area (km²)</td>
                                <td>${formatWithCommas(c1.area)}</td>
                                <td>${formatWithCommas(c2.area)}</td>
                            </tr>
                            <tr>
                                <td>Capital</td>
                                <td>${c1.capital?.[0] || 'N/A'}</td>
                                <td>${c2.capital?.[0] || 'N/A'}</td>
                            </tr>
                            <tr>
                                <td>Region</td>
                                <td>${c1.region}</td>
                                <td>${c2.region}</td>
                            </tr>
                            <tr>
                                <td>Languages</td>
                                <td>${Object.values(c1.languages || {}).slice(0, 3).join(', ')}</td>
                                <td>${Object.values(c2.languages || {}).slice(0, 3).join(', ')}</td>
                            </tr>
                            <tr>
                                <td>Currencies</td>
                                <td>${Object.values(c1.currencies || {})[0]?.name || 'N/A'}</td>
                                <td>${Object.values(c2.currencies || {})[0]?.name || 'N/A'}</td>
                            </tr>
                        </tbody>
                    </table>
                `;
            } catch (error) {
                resultsDiv.innerHTML = '<p class="error">Error loading comparison data. Please try again.</p>';
                console.error('Comparison error:', error);
            }
        }
    };

    // ============================================
    // KEYBOARD NAVIGATION
    // ============================================
    
    const KeyboardNav = {
        init() {
            document.addEventListener('keydown', (e) => {
                // Escape to close mobile menu
                if (e.key === 'Escape') {
                    document.getElementById('mobileMenu')?.classList.remove('active');
                    document.getElementById('mobileMenuToggle')?.classList.remove('active');
                    document.body.classList.remove('menu-open');
                }
                
                // Slash to focus search
                if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
                    e.preventDefault();
                    document.querySelector('.search-input, #searchInput')?.focus();
                }
            });
        }
    };

    // ============================================
    // PERFORMANCE OPTIMIZATION
    // ============================================
    
    const Performance = {
        init() {
            // Lazy load images
            this.lazyLoadImages();
            
            // Prefetch links on hover
            this.prefetchLinks();
        },
        
        lazyLoadImages() {
            if ('IntersectionObserver' in window) {
                const imageObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const img = entry.target;
                            if (img.dataset.src) {
                                img.src = img.dataset.src;
                                img.removeAttribute('data-src');
                            }
                            img.classList.remove('lazy');
                            imageObserver.unobserve(img);
                        }
                    });
                });
                
                document.querySelectorAll('img.lazy, img[data-src]').forEach(img => {
                    imageObserver.observe(img);
                });
            }
        },
        
        prefetchLinks() {
            document.querySelectorAll('a[href]').forEach(link => {
                link.addEventListener('mouseenter', () => {
                    const href = link.getAttribute('href');
                    if (href && href.startsWith('/') || href.endsWith('.html')) {
                        const prefetch = document.createElement('link');
                        prefetch.rel = 'prefetch';
                        prefetch.href = href;
                        document.head.appendChild(prefetch);
                    }
                }, { once: true });
            });
        }
    };

    // ============================================
    // ERROR HANDLING
    // ============================================
    
    const ErrorHandler = {
        init() {
            window.addEventListener('error', (e) => {
                console.error('Global error:', e.error);
            });
            
            window.addEventListener('unhandledrejection', (e) => {
                console.error('Unhandled promise rejection:', e.reason);
            });
        }
    };

    // ============================================
    // INITIALIZATION
    // ============================================
    
    function init() {
        console.log('🌍 Geotopia Human Geography initializing...');
        
        // Core features
        ErrorHandler.init();
        Preloader.init();
        Navigation.init();
        ThemeToggle.init();
        BackToTop.init();
        
        // Content features
        PopulationCounter.init();
        HeroStats.init();
        ScrollAnimations.init();
        SmoothScroll.init();
        LiveStats.init();
        
        // Optional enhancements
        HeroParticles.init();
        Search.init();
        Tooltips.init();
        Accordions.init();
        ComparisonTool.init();
        KeyboardNav.init();
        
        // Data visualizations
        Charts.init();
        Maps.init();
        
        // Performance
        Performance.init();
        
        console.log('✅ Geotopia Human Geography initialized successfully!');
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Expose for debugging
    window.Geotopia = {
        PopulationCounter,
        Charts,
        Maps,
        CONFIG
    };

})();
