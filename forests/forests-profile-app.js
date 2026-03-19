/**
 * ================================================
 * FORESTS PROFILE PAGE - Application Script
 * ================================================
 */

const ForestProfile = {
    // State
    state: {
        forest: null,
        forestId: null,
        map: null,
        currentExploreScene: 0,
        comparisonPosition: 50
    },

    // Initialize
    init() {
        this.getForestId();
        this.loadForestData();
        this.setupEventListeners();
        this.hidePreloader();
    },

    // Get Forest ID from URL
    getForestId() {
        const urlParams = new URLSearchParams(window.location.search);
        this.state.forestId = parseInt(urlParams.get('forest')) || 1;
    },

    // Load Forest Data
    loadForestData() {
        // Combine all forest data
        const allForests = [
            ...(typeof forestsData1 !== 'undefined' ? forestsData1 : []),
            ...(typeof forestsData2 !== 'undefined' ? forestsData2 : [])
        ];

        // Find the forest
        this.state.forest = allForests.find(f => f.id === this.state.forestId);

        if (this.state.forest) {
            this.renderForestProfile();
            this.initMap();
            this.loadRelatedForests(allForests);
        } else {
            this.showError();
        }
    },

    // Render Forest Profile
    renderForestProfile() {
        const forest = this.state.forest;

        // Update page title
        document.title = `${forest.name} | Forests Explorer`;

        // Hero Section
        document.getElementById('heroImage').src = forest.image;
        document.getElementById('heroImage').alt = `${forest.name} aerial view`;
        document.getElementById('forestTitle').textContent = forest.name;
        document.getElementById('breadcrumbRegion').textContent = forest.region;

        // Meta items
        document.querySelector('#forestType .meta-text').textContent = forest.type;
        document.querySelector('#forestRegion .meta-text').textContent = forest.region;
        document.querySelector('#forestArea .meta-text').textContent = this.formatArea(forest.area);

        // Quick Stats
        if (forest.climate) {
            document.getElementById('statTemp').textContent = forest.climate.temperature || '--';
            document.getElementById('statRainfall').textContent = forest.climate.rainfall || '--';
            document.getElementById('statHumidity').textContent = forest.climate.humidity || '--';
        }
        
        const speciesCount = this.calculateSpeciesCount(forest);
        document.getElementById('statSpecies').textContent = speciesCount + '+';

        // Description
        document.getElementById('forestDescription').textContent = forest.description || 'No description available.';

        // Map Info
        document.getElementById('mapForestName').textContent = forest.name;
        if (forest.coordinates) {
            document.getElementById('mapCoordinates').textContent = 
                `${forest.coordinates.lat.toFixed(4)}°, ${forest.coordinates.lng.toFixed(4)}°`;
        }

        // Countries
        this.renderCountries(forest.countries);

        // Mind Map Data
        this.renderMindMap(forest);

        // Center Node
        document.getElementById('centerNodeName').textContent = forest.name;
    },

    // Render Countries
    renderCountries(countries) {
        const container = document.getElementById('legendCountries');
        if (countries && countries.length > 0) {
            container.innerHTML = countries.map(country => 
                `<span class="country-tag">🏳️ ${country}</span>`
            ).join('');
        }
    },

    // Render Mind Map
    renderMindMap(forest) {
        // Location
        document.getElementById('infoContinent').textContent = this.getContinent(forest.region);
        this.renderTags('infoCountries', forest.countries);

        // Type
        document.getElementById('infoType').textContent = forest.type;
        document.getElementById('infoCharacteristics').textContent = this.getCharacteristics(forest.type);

        // Area
        document.getElementById('infoArea').textContent = this.formatArea(forest.area);
        document.getElementById('infoComparison').textContent = this.getAreaComparison(forest.area);

        // Climate
        if (forest.climate) {
            document.getElementById('infoTemp').textContent = forest.climate.temperature || '--';
            document.getElementById('infoRainfall').textContent = forest.climate.rainfall || '--';
            document.getElementById('infoHumidity').textContent = forest.climate.humidity || '--';
        }

        // Biodiversity
        if (forest.biodiversity) {
            this.renderTags('infoAnimals', forest.biodiversity.animals);
            this.renderTags('infoBirds', forest.biodiversity.birds);
            this.renderTags('infoTrees', forest.biodiversity.trees);
        }

        // Rivers
        this.renderTags('infoRivers', forest.rivers);

        // Indigenous
        this.renderTags('infoIndigenous', forest.indigenous);

        // Issues
        this.renderTags('infoIssues', forest.issues);

        // Conservation
        this.renderTags('infoConservation', forest.conservation);
    },

    // Render Tags
    renderTags(elementId, items) {
        const container = document.getElementById(elementId);
        if (container && items && items.length > 0) {
            container.innerHTML = items.map(item => 
                `<span class="item-tag">${item}</span>`
            ).join('');
        }
    },

    // Calculate Species Count
    calculateSpeciesCount(forest) {
        let count = 0;
        if (forest.biodiversity) {
            count += (forest.biodiversity.animals?.length || 0) * 50;
            count += (forest.biodiversity.birds?.length || 0) * 100;
            count += (forest.biodiversity.trees?.length || 0) * 30;
        }
        return Math.max(count, 100);
    },

    // Get Continent
    getContinent(region) {
        const continentMap = {
            'South America': 'South America',
            'Central Africa': 'Africa',
            'Northern Hemisphere': 'Multiple Continents',
            'Southeast Asia': 'Asia',
            'Alaska': 'North America',
            'Australia': 'Oceania',
            'Bangladesh': 'Asia',
            'India': 'Asia',
            'Chile': 'South America',
            'Germany': 'Europe',
            'Poland': 'Europe',
            'Canada': 'North America',
            'England': 'Europe',
            'Costa Rica': 'Central America',
            'Tasmania': 'Oceania',
            'Sri Lanka': 'Asia',
            'Japan': 'Asia',
            'California': 'North America',
            'Borneo': 'Asia',
            'USA': 'North America',
            'New Guinea': 'Oceania',
            'Europe': 'Europe',
            'Washington': 'North America',
            'Brazil': 'South America',
            'Kenya': 'Africa',
            'Malaysia': 'Asia',
            'New Zealand': 'Oceania',
            'Sabah': 'Asia',
            'Madagascar': 'Africa',
            'Uganda': 'Africa',
            'Mexico': 'North America',
            'Indonesia': 'Asia',
            'Rwanda': 'Africa',
            'Guyana': 'South America',
            'Thailand': 'Asia',
            'Belize': 'Central America',
            'Vietnam': 'Asia',
            'Peru': 'South America',
            'Ecuador': 'South America',
            'Cameroon': 'Africa',
            'China': 'Asia',
            'Venezuela': 'South America',
            'Gabon': 'Africa',
            'Croatia': 'Europe',
            'Russia': 'Asia/Europe',
            'Scotland': 'Europe',
            'Brunei': 'Asia',
            'Puerto Rico': 'Caribbean',
            'Côte d\'Ivoire': 'Africa'
        };

        for (const [key, value] of Object.entries(continentMap)) {
            if (region.includes(key)) {
                return value;
            }
        }
        return 'Unknown';
    },

    // Get Characteristics
    getCharacteristics(type) {
        const characteristics = {
            'Tropical Rainforest': 'High rainfall, warm temperatures, incredible biodiversity',
            'Boreal Forest': 'Cold climate, coniferous trees, long winters',
            'Temperate Rainforest': 'Moderate climate, high rainfall, moss-covered trees',
            'Temperate Forest': 'Four distinct seasons, deciduous trees',
            'Mangrove Forest': 'Coastal, salt-tolerant trees, tidal environment',
            'Montane Forest': 'High altitude, unique adaptations, cloud cover',
            'Cloud Forest': 'Persistent cloud cover, epiphytes, high humidity'
        };

        for (const [key, value] of Object.entries(characteristics)) {
            if (type.toLowerCase().includes(key.toLowerCase().split(' ')[0])) {
                return value;
            }
        }
        return 'Unique forest ecosystem';
    },

    // Get Area Comparison
    getAreaComparison(area) {
        if (area >= 1000000) {
            return `About ${(area / 10000).toFixed(0)} times the size of Singapore`;
        } else if (area >= 100000) {
            return `Larger than ${Math.floor(area / 10000)} Singapores`;
        } else if (area >= 10000) {
            return `About the size of ${Math.floor(area / 1000)} Hong Kongs`;
        } else {
            return `About ${area} soccer fields`;
        }
    },

    // Format Area
    formatArea(area) {
        if (area >= 1000000) {
            return `${(area / 1000000).toFixed(2)} million km²`;
        } else if (area >= 1000) {
            return `${(area / 1000).toFixed(1)}K km²`;
        }
        return `${area.toLocaleString()} km²`;
    },

    // Initialize Map
    initMap() {
        const forest = this.state.forest;
        if (!forest.coordinates) return;

        const mapContainer = document.getElementById('forestMap');
        if (!mapContainer || typeof L === 'undefined') return;

        // Initialize map
        this.state.map = L.map('forestMap', {
            center: [forest.coordinates.lat, forest.coordinates.lng],
            zoom: 6,
            scrollWheelZoom: true
        });

        // Add satellite layer
        L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            attribution: 'Tiles © Esri'
        }).addTo(this.state.map);

        // Add marker
        const forestIcon = L.divIcon({
            className: 'forest-marker-large',
            html: '<div class="marker-pulse"></div><span>🌲</span>',
            iconSize: [50, 50],
            iconAnchor: [25, 25]
        });

        L.marker([forest.coordinates.lat, forest.coordinates.lng], { icon: forestIcon })
            .addTo(this.state.map)
            .bindPopup(`<strong>${forest.name}</strong><br>${forest.type}`);

        // Add approximate forest area (circle)
        const radius = Math.sqrt(forest.area * 1000000 / Math.PI);
        L.circle([forest.coordinates.lat, forest.coordinates.lng], {
            radius: Math.min(radius, 500000),
            color: '#2d5016',
            fillColor: '#4f772d',
            fillOpacity: 0.3,
            weight: 2
        }).addTo(this.state.map);
    },

    // Load Related Forests
    loadRelatedForests(allForests) {
        const forest = this.state.forest;
        const container = document.getElementById('relatedForests');

        // Find similar forests (same type or nearby)
        const related = allForests
            .filter(f => f.id !== forest.id)
            .filter(f => 
                f.type.includes(forest.type.split(' ')[0]) || 
                f.region === forest.region
            )
            .slice(0, 4);

        container.innerHTML = related.map(f => `
            <div class="related-card" onclick="window.location.href='forests-profile.html?forest=${f.id}'">
                <div class="related-card-image">
                    <img src="${f.image}" alt="${f.name}" loading="lazy">
                </div>
                <div class="related-card-content">
                    <h4>${f.name}</h4>
                    <p>${f.region}</p>
                </div>
            </div>
        `).join('');
    },

    // Setup Event Listeners
    setupEventListeners() {
        // Mind Map Branch Toggle
        document.querySelectorAll('.branch-header').forEach(header => {
            header.addEventListener('click', () => {
                const branch = header.parentElement;
                branch.classList.toggle('expanded');
                const toggle = header.querySelector('.branch-toggle');
                toggle.textContent = branch.classList.contains('expanded') ? '−' : '+';
            });
        });

        // Climate Toggle
        const climateToggle = document.getElementById('climateToggle');
        const climateContent = document.getElementById('climateContent');
        if (climateToggle && climateContent) {
            climateToggle.addEventListener('change', () => {
                climateContent.classList.toggle('active', climateToggle.checked);
                if (climateToggle.checked) {
                    this.animateClimateBars();
                }
            });
        }

        // Explore Button
        const exploreBtn = document.getElementById('exploreBtn');
        const exploreModal = document.getElementById('exploreModal');
        const exploreClose = document.getElementById('exploreClose');
        
        if (exploreBtn && exploreModal) {
            exploreBtn.addEventListener('click', () => {
                exploreModal.classList.add('active');
                this.startExploreExperience();
            });

            exploreClose.addEventListener('click', () => {
                exploreModal.classList.remove('active');
            });
        }

        // Explore Navigation
        const explorePrev = document.getElementById('explorePrev');
        const exploreNext = document.getElementById('exploreNext');
        
        if (explorePrev && exploreNext) {
            explorePrev.addEventListener('click', () => this.navigateExplore(-1));
            exploreNext.addEventListener('click', () => this.navigateExplore(1));
        }

        // Comparison Slider
        this.initComparisonSlider();

        // Map View Button
        const mapViewBtn = document.getElementById('mapViewBtn');
        if (mapViewBtn) {
            mapViewBtn.addEventListener('click', () => {
                document.querySelector('.map-section').scrollIntoView({ behavior: 'smooth' });
            });
        }

        // Back to Top
        const backToTop = document.getElementById('backToTop');
        if (backToTop) {
            window.addEventListener('scroll', () => {
                backToTop.classList.toggle('visible', window.scrollY > 500);
            });
            backToTop.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

        // Navigation Scroll
        const mainNav = document.getElementById('mainNav');
        window.addEventListener('scroll', () => {
            mainNav.classList.toggle('scrolled', window.scrollY > 50);
        });

        // Share Button
        const shareBtn = document.getElementById('shareBtn');
        if (shareBtn) {
            shareBtn.addEventListener('click', () => {
                if (navigator.share) {
                    navigator.share({
                        title: `${this.state.forest.name} | Forests Explorer`,
                        text: `Explore the ${this.state.forest.name} - ${this.state.forest.description}`,
                        url: window.location.href
                    });
                } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Link copied to clipboard!');
                }
            });
        }
    },

    // Initialize Comparison Slider
    initComparisonSlider() {
        const slider = document.getElementById('comparisonSlider');
        const handle = document.getElementById('comparisonHandle');
        const afterImage = slider?.querySelector('.comparison-image.after');
        
        if (!slider || !handle || !afterImage) return;

        let isDragging = false;

        const updatePosition = (x) => {
            const rect = slider.getBoundingClientRect();
            let position = ((x - rect.left) / rect.width) * 100;
            position = Math.max(0, Math.min(100, position));
            
            handle.style.left = position + '%';
            afterImage.style.clipPath = `inset(0 ${100 - position}% 0 0)`;
        };

        handle.addEventListener('mousedown', () => isDragging = true);
        handle.addEventListener('touchstart', () => isDragging = true);

        document.addEventListener('mouseup', () => isDragging = false);
        document.addEventListener('touchend', () => isDragging = false);

        slider.addEventListener('mousemove', (e) => {
            if (isDragging) updatePosition(e.clientX);
        });

        slider.addEventListener('touchmove', (e) => {
            if (isDragging) updatePosition(e.touches[0].clientX);
        });

        slider.addEventListener('click', (e) => updatePosition(e.clientX));
    },

    // Animate Climate Bars
    animateClimateBars() {
        const forest = this.state.forest;
        
        setTimeout(() => {
            // Rainfall bar (based on mm, max ~5000mm)
            const rainfallPercent = forest.climate?.rainfall 
                ? Math.min((parseInt(forest.climate.rainfall) / 5000) * 100, 100)
                : 50;
            document.getElementById('rainfallBar').style.width = rainfallPercent + '%';

            // Temperature bar (normalize around 0-35°C range)
            const tempPercent = forest.climate?.temperature
                ? Math.min((parseInt(forest.climate.temperature) / 35) * 100, 100)
                : 50;
            document.getElementById('temperatureBar').style.width = tempPercent + '%';

            // Density bar (based on area - larger = likely denser)
            const densityPercent = Math.min((forest.area / 1000000) * 50 + 50, 100);
            document.getElementById('densityBar').style.width = densityPercent + '%';
        }, 100);
    },

    // Start Explore Experience
    startExploreExperience() {
        const scenes = document.querySelectorAll('.explore-scene');
        this.state.currentExploreScene = 0;
        
        scenes.forEach((scene, index) => {
            scene.classList.toggle('active', index === 0);
        });

        this.updateExploreInfo();
        this.updateExploreProgress();
    },

    // Navigate Explore
    navigateExplore(direction) {
        const scenes = document.querySelectorAll('.explore-scene');
        const total = scenes.length;
        
        this.state.currentExploreScene += direction;
        
        if (this.state.currentExploreScene < 0) {
            this.state.currentExploreScene = total - 1;
        } else if (this.state.currentExploreScene >= total) {
            this.state.currentExploreScene = 0;
        }

        scenes.forEach((scene, index) => {
            scene.classList.toggle('active', index === this.state.currentExploreScene);
        });

        this.updateExploreInfo();
        this.updateExploreProgress();
    },

    // Update Explore Info
    updateExploreInfo() {
        const info = document.getElementById('exploreInfo');
        const forest = this.state.forest;
        
        const scenes = [
            {
                title: 'Aerial Canopy View',
                description: `Flying over the vast ${forest.name}, you can see the dense canopy stretching to the horizon.`
            },
            {
                title: 'Dense Forest Interior',
                description: 'Descending into the forest, you encounter the incredible biodiversity hidden beneath the canopy.'
            },
            {
                title: 'River Systems',
                description: `The ${forest.rivers?.[0] || 'rivers'} flow through the forest, supporting countless species.`
            },
            {
                title: 'Wildlife Hotspot',
                description: `Home to ${forest.biodiversity?.animals?.[0] || 'diverse wildlife'} and many other species.`
            }
        ];

        const scene = scenes[this.state.currentExploreScene];
        info.innerHTML = `
            <h3>${scene.title}</h3>
            <p>${scene.description}</p>
        `;
    },

    // Update Explore Progress
    updateExploreProgress() {
        const progress = document.getElementById('exploreProgress');
        const percent = ((this.state.currentExploreScene + 1) / 4) * 100;
        progress.style.width = percent + '%';
    },

    // Hide Preloader
    hidePreloader() {
        const preloader = document.getElementById('preloader');
        setTimeout(() => {
            preloader.classList.add('hidden');
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }, 1000);
    },

    // Show Error
    showError() {
        document.getElementById('forestTitle').textContent = 'Forest Not Found';
        document.getElementById('forestDescription').textContent = 
            'Sorry, we could not find information about this forest. Please go back and try another forest.';
    }
};

// Initialize on DOM Load
document.addEventListener('DOMContentLoaded', () => {
    ForestProfile.init();
});
