/**
 * =====================================================
 * UNITY ATLAS - COUNTRY PAGE JAVASCRIPT
 * Version: 1.0.0 | April 2026
 * Individual country foreign policy and relations
 * =====================================================
 */

'use strict';

// =====================================================
// COUNTRY PAGE CLASS
// =====================================================

class CountryPage {
    constructor() {
        this.countryCode = null;
        this.countryData = null;
        this.relatedCountries = [];
        this.currentFilter = 'all';
        this.displayedRelations = 12;
        this.orbitalPositions = [];
        
        this.init();
    }
    
    async init() {
        // Get country code from URL
        const urlParams = new URLSearchParams(window.location.search);
        this.countryCode = urlParams.get('c')?.toUpperCase();
        
        if (!this.countryCode) {
            this.showError('No country specified');
            return;
        }
        
        // Show loading screen
        this.showLoading();
        
        try {
            // Load country data
            await this.loadCountryData();
            
            // Render all sections
            this.renderHero();
            this.renderOrbitalVisualization();
            this.renderForeignPolicy();
            this.renderOrganizations();
            this.renderRelations();
            this.renderStatistics();
            this.renderTimeline();
            this.renderWhatIf();
            
            // Setup interactions
            this.setupInteractions();
            
            // Initialize animations
            this.initAnimations();
            
            // Hide loading screen
            this.hideLoading();
            
        } catch (error) {
            console.error('Error loading country page:', error);
            this.showError('Failed to load country data');
        }
    }
    
    // =====================================================
// DATA LOADING - ENHANCED VERSION
// =====================================================

async loadCountryData() {
    try {
        // Show loading indicator
        this.showLoadingState('Loading country data...');
        
        // Get basic country info from fallback list
        const countryInfo = GeoTopia.utils.getCountryByCode(this.countryCode);
        if (!countryInfo) {
            throw new Error(`Country ${this.countryCode} not found in database`);
        }
        
        // Load detailed data from JSON files
        try {
            this.countryData = await GeoTopia.dataManager.getCountryData(this.countryCode);
            this.countryData.info = countryInfo;
            
            // Validate data structure
            this.validateCountryData(this.countryData);
            
        } catch (error) {
            console.warn(`⚠️ No JSON data for ${this.countryCode}, using fallback`);
            // Create fallback data structure
            this.countryData = this.createFallbackData(countryInfo);
        }
        
        // Get related countries from relationships
        this.relatedCountries = await GeoTopia.dataManager.getRelatedCountries(this.countryCode);
        
        // If no relations in data, generate intelligent relations
        if (!this.relatedCountries || this.relatedCountries.length === 0) {
            console.log('📊 Generating intelligent relations for', this.countryCode);
            this.relatedCountries = this.generateIntelligentRelations(countryInfo);
        }
        
        // Limit to top 50 relations for performance
        this.relatedCountries = this.relatedCountries.slice(0, 50);
        
        // Get international organizations
        this.countryData.organizations = GeoTopia.utils.getCountryOrganizations(this.countryCode);
        
        // Add metadata
        this.countryData.metadata = {
            dataSource: this.countryData.data_sources || ['GeoTopia Database'],
            lastUpdated: this.countryData.last_updated || new Date().toISOString(),
            relationshipCount: this.relatedCountries.length,
            hasRealData: !!this.countryData.foreign_policy
        };
        
        console.log('✅ Country data loaded:', this.countryCode);
        
    } catch (error) {
        console.error('❌ Error loading country data:', error);
        this.showError(`Failed to load data for ${this.countryCode}: ${error.message}`);
        throw error;
    }
}

/**
 * Validate country data structure
 */
validateCountryData(data) {
    const requiredFields = ['country_code', 'country_name'];
    const missing = requiredFields.filter(field => !data[field]);
    
    if (missing.length > 0) {
        console.warn('⚠️ Missing required fields:', missing);
    }
    
    // Check data freshness
    if (data.last_updated) {
        const lastUpdate = new Date(data.last_updated);
        const daysSinceUpdate = (Date.now() - lastUpdate.getTime()) / (1000 * 60 * 60 * 24);
        
        if (daysSinceUpdate > 90) {
            console.warn(`⚠️ Data is ${Math.floor(daysSinceUpdate)} days old`);
        }
    }
}

/**
 * Create fallback data when JSON doesn't exist
 */
createFallbackData(countryInfo) {
    return {
        country_code: countryInfo.code,
        country_name: countryInfo.name,
        last_updated: new Date().toISOString(),
        data_sources: ['GeoTopia Fallback Data'],
        
        foreign_policy: {
            core_principles: [
                'National sovereignty',
                'International cooperation',
                'Economic development'
            ],
            key_priorities: [
                'Regional stability',
                'Economic growth',
                'Trade expansion'
            ],
            strategic_vision: 'Peaceful development and mutual prosperity'
        },
        
        relationships: {},
        
        isFallback: true
    };
}

/**
 * Generate intelligent relations based on geographic, economic, and political factors
 */
generateIntelligentRelations(countryInfo) {
    const relations = [];
    const allCountries = GeoTopia.COUNTRIES || this.getFallbackCountryList();
    
    // Relation type weights
    const relationTypes = {
        'Strategic Ally': { weight: 0.05, strength: [8, 10] },
        'Strategic Partner': { weight: 0.15, strength: [7, 9] },
        'Friendly Relations': { weight: 0.30, strength: [6, 8] },
        'Cooperative': { weight: 0.25, strength: [5, 7] },
        'Neutral': { weight: 0.20, strength: [4, 6] },
        'Developing Relations': { weight: 0.05, strength: [3, 5] }
    };
    
    allCountries.forEach((country) => {
        if (country.code === this.countryCode) return;
        
        // Calculate base relation strength
        let baseStrength = this.calculateRelationStrength(countryInfo, country);
        
        // Determine relation type based on strength
        let relationType = this.getRelationTypeByStrength(baseStrength);
        
        // Add some randomness within realistic bounds
        const variation = (Math.random() - 0.5) * 1.5;
        const finalStrength = Math.max(1, Math.min(10, baseStrength + variation));
        
        // Generate realistic trade volume based on country sizes and proximity
        const tradeVolume = this.estimateTradeVolume(countryInfo, country, finalStrength);
        
        relations.push({
            code: country.code,
            name: country.name,
            region: country.region,
            continent: country.continent,
            capital: country.capital,
            
            // Relationship metrics
            relationStrength: parseFloat(finalStrength.toFixed(1)),
            relationType: relationType,
            
            // Economic data
            trade: tradeVolume,
            tradeGrowth: (Math.random() * 20 - 5).toFixed(1), // -5% to +15%
            
            // Diplomatic data
            treaties: this.estimateTreaties(finalStrength),
            embassies: finalStrength > 6 ? 'Full Embassy' : finalStrength > 4 ? 'Consulate' : 'Limited',
            
            // People-to-people
            diaspora: this.estimateDiaspora(countryInfo, country, finalStrength),
            touristFlow: Math.floor(Math.random() * 1000000) + 10000,
            
            // Multilateral cooperation
            sharedOrganizations: this.findSharedOrganizations(countryInfo.code, country.code),
            
            // Recent activity
            lastMajorEvent: this.generateRecentEvent(country.name, relationType),
            
            // Metadata
            isGenerated: true,
            confidenceScore: this.calculateConfidenceScore(countryInfo, country)
        });
    });
    
    // Sort by relation strength (highest first)
    relations.sort((a, b) => b.relationStrength - a.relationStrength);
    
    return relations;
}

/**
 * Calculate relation strength based on multiple factors
 */
calculateRelationStrength(country1, country2) {
    let strength = 5; // Base neutral
    
    // 1. Geographic proximity (same region = stronger)
    if (country1.region === country2.region) {
        strength += 2;
    }
    if (country1.continent === country2.continent) {
        strength += 1;
    }
    
    // 2. Major powers get higher relations
    const majorPowers = ['USA', 'CHN', 'RUS', 'IND', 'GBR', 'FRA', 'DEU', 'JPN'];
    if (majorPowers.includes(country1.code) || majorPowers.includes(country2.code)) {
        strength += 1;
    }
    
    // 3. Both major powers = very strong
    if (majorPowers.includes(country1.code) && majorPowers.includes(country2.code)) {
        strength += 1;
    }
    
    // 4. Regional hubs
    const regionalHubs = ['SAU', 'BRA', 'ZAF', 'AUS', 'TUR', 'IDN', 'MEX'];
    if (regionalHubs.includes(country1.code) || regionalHubs.includes(country2.code)) {
        strength += 0.5;
    }
    
    // 5. Known tensions (reduce strength)
    const tensions = {
        'IND': ['PAK', 'CHN'],
        'PAK': ['IND'],
        'ISR': ['IRN', 'SYR', 'LBN'],
        'IRN': ['ISR', 'SAU', 'USA'],
        'PRK': ['KOR', 'USA', 'JPN'],
        'RUS': ['UKR', 'GEO'],
        'CHN': ['TWN', 'IND']
    };
    
    if (tensions[country1.code]?.includes(country2.code)) {
        strength = Math.max(2, strength - 4);
    }
    
    // 6. Known alliances (increase strength)
    const alliances = {
        'USA': ['GBR', 'CAN', 'AUS', 'JPN', 'KOR', 'ISR', 'FRA', 'DEU'],
        'GBR': ['USA', 'CAN', 'AUS', 'NZL'],
        'RUS': ['BLR', 'KAZ', 'ARM'],
        'CHN': ['PAK', 'RUS', 'KAZ'],
        'IND': ['USA', 'JPN', 'FRA', 'ISR', 'ARE', 'BTN']
    };
    
    if (alliances[country1.code]?.includes(country2.code)) {
        strength = Math.min(10, strength + 2);
    }
    
    return Math.max(1, Math.min(10, strength));
}

/**
 * Get relation type based on strength
 */
getRelationTypeByStrength(strength) {
    if (strength >= 9) return 'Strategic Ally';
    if (strength >= 7.5) return 'Strategic Partner';
    if (strength >= 6) return 'Friendly Relations';
    if (strength >= 5) return 'Cooperative';
    if (strength >= 3.5) return 'Neutral';
    return 'Developing Relations';
}

/**
 * Estimate bilateral trade volume
 */
estimateTradeVolume(country1, country2, strength) {
    // Major economies base trade
    const majorEconomies = {
        'USA': 1000000, 'CHN': 900000, 'JPN': 500000, 'DEU': 450000,
        'GBR': 350000, 'IND': 300000, 'FRA': 280000, 'BRA': 200000
    };
    
    const base1 = majorEconomies[country1.code] || 50000;
    const base2 = majorEconomies[country2.code] || 50000;
    
    // Trade volume correlates with relation strength and economy size
    const baseVolume = Math.sqrt(base1 * base2) / 100;
    const strengthMultiplier = strength / 10;
    
    // Regional proximity bonus
    const proximityBonus = country1.region === country2.region ? 1.5 : 1;
    
    const volume = baseVolume * strengthMultiplier * proximityBonus;
    
    return Math.floor(volume * (0.8 + Math.random() * 0.4)); // Add 20% variance
}

/**
 * Estimate number of bilateral treaties
 */
estimateTreaties(strength) {
    const base = Math.floor(strength * 3);
    const variance = Math.floor(Math.random() * 5);
    return Math.max(1, base + variance);
}

/**
 * Estimate diaspora population
 */
estimateDiaspora(country1, country2, strength) {
    // Major diaspora destinations
    const destinations = ['USA', 'GBR', 'CAN', 'AUS', 'ARE', 'SAU'];
    const sources = ['IND', 'CHN', 'MEX', 'PHL', 'PAK', 'BGD'];
    
    let base = 10000;
    
    if (destinations.includes(country2.code) && sources.includes(country1.code)) {
        base = 500000;
    } else if (destinations.includes(country2.code)) {
        base = 100000;
    }
    
    const strengthFactor = strength / 10;
    const diaspora = Math.floor(base * strengthFactor * (0.5 + Math.random()));
    
    return diaspora;
}

/**
 * Find shared international organizations
 */
findSharedOrganizations(code1, code2) {
    const orgs1 = GeoTopia.utils.getCountryOrganizations?.(code1) || ['UN'];
    const orgs2 = GeoTopia.utils.getCountryOrganizations?.(code2) || ['UN'];
    
    const shared = orgs1.filter(org => orgs2.includes(org));
    return shared.length > 0 ? shared : ['UN'];
}

/**
 * Generate a realistic recent event
 */
generateRecentEvent(countryName, relationType) {
    const events = {
        'Strategic Ally': [
            `Joint military exercise conducted`,
            `Defense cooperation agreement signed`,
            `Annual strategic dialogue held`
        ],
        'Strategic Partner': [
            `High-level bilateral summit`,
            `Trade agreement expansion`,
            `Technology partnership announced`
        ],
        'Friendly Relations': [
            `Foreign Minister visit`,
            `Cultural exchange program launched`,
            `Economic cooperation discussed`
        ],
        'Cooperative': [
            `Working group meeting held`,
            `Trade delegation visit`,
            `Consular services expanded`
        ],
        'Neutral': [
            `Diplomatic channels maintained`,
            `Annual consultation`,
            `Standard bilateral engagement`
        ],
        'Developing Relations': [
            `First diplomatic contact`,
            `Exploratory talks initiated`,
            `Potential cooperation discussed`
        ]
    };
    
    const eventList = events[relationType] || events['Neutral'];
    const event = eventList[Math.floor(Math.random() * eventList.length)];
    
    // Generate recent date (within last 6 months)
    const daysAgo = Math.floor(Math.random() * 180);
    const date = new Date();
    date.setDate(date.getDate() - daysAgo);
    
    return `${date.toISOString().split('T')[0]}: ${event}`;
}

/**
 * Calculate confidence score for generated data
 */
calculateConfidenceScore(country1, country2) {
    // Higher confidence for:
    // - Major powers
    // - Same region
    // - Known relationships
    
    let confidence = 50; // Base 50%
    
    const majorPowers = ['USA', 'CHN', 'RUS', 'IND', 'GBR', 'FRA', 'DEU', 'JPN'];
    
    if (majorPowers.includes(country1.code)) confidence += 15;
    if (majorPowers.includes(country2.code)) confidence += 15;
    if (country1.region === country2.region) confidence += 10;
    if (country1.continent === country2.continent) confidence += 5;
    
    return Math.min(95, confidence); // Max 95% for generated data
}

/**
 * Get fallback country list
 */
getFallbackCountryList() {
    // Return the 197 countries list from data-manager.js
    return GeoTopia.dataManager?.getFallbackCountryList?.() || [];
}

/**
 * Show loading state
 */
showLoadingState(message) {
    const loader = document.getElementById('page-loader');
    if (loader) {
        loader.querySelector('.loader-text').textContent = message || 'Loading...';
        loader.style.display = 'flex';
    }
}

/**
 * Show error message
 */
showError(message) {
    const errorDiv = document.getElementById('error-message');
    if (errorDiv) {
        errorDiv.textContent = message;
        errorDiv.style.display = 'block';
    }
    
    // Also log to console
    console.error('❌', message);
}
    
    // =====================================================
    // RENDER METHODS
    // =====================================================
    
    renderHero() {
        const country = this.countryData.info;
        
        // Update page title
        document.title = `${country.name} | Unity Atlas - GeoTopia`;
        
        // Update breadcrumb
        document.getElementById('breadcrumb-country').textContent = country.name;
        
        // Update hero section
        const flagImg = document.getElementById('main-country-flag');
        flagImg.src = GeoTopia.utils.getFlagUrl(country.code);
        flagImg.alt = `${country.name} flag`;
        
        document.getElementById('country-name-large').textContent = country.name;
        document.getElementById('country-region').textContent = `${country.region} • ${country.subregion}`;
        
        // Quick stats
        const quickStats = document.getElementById('country-quick-stats');
        quickStats.innerHTML = `
            <div class="quick-stat">
                <span class="quick-stat-value">${this.relatedCountries.length}</span>
                <span class="quick-stat-label">Relations</span>
            </div>
            <div class="quick-stat">
                <span class="quick-stat-value">${this.countryData.organizations?.length || 0}</span>
                <span class="quick-stat-label">Organizations</span>
            </div>
            <div class="quick-stat">
                <span class="quick-stat-value">${this.countryData.foreign_policy?.key_priorities?.length || 0}</span>
                <span class="quick-stat-label">Priorities</span>
            </div>
        `;
    }
    
    renderOrbitalVisualization() {
        const container = document.getElementById('orbital-countries');
        const svgConnections = document.getElementById('orbital-connections');
        
        if (!container) return;
        
        // Clear existing
        container.innerHTML = '';
        svgConnections.innerHTML = '';
        
        // Get top relations for orbital display (max 24)
        const topRelations = this.relatedCountries.slice(0, 24);
        
        // Calculate positions on three orbital rings
        const centerX = 350;
        const centerY = 350;
        const rings = [
            { radius: 150, count: 6 },   // Inner ring
            { radius: 225, count: 8 },   // Middle ring
            { radius: 300, count: 10 }   // Outer ring
        ];
        
        let relationIndex = 0;
        this.orbitalPositions = [];
        
        rings.forEach((ring, ringIndex) => {
            for (let i = 0; i < ring.count && relationIndex < topRelations.length; i++) {
                const relation = topRelations[relationIndex];
                const angle = (i / ring.count) * Math.PI * 2 - Math.PI / 2;
                const x = centerX + Math.cos(angle) * ring.radius;
                const y = centerY + Math.sin(angle) * ring.radius;
                
                // Store position for connection lines
                this.orbitalPositions.push({
                    code: relation.code,
                    x, y,
                    relation
                });
                
                // Create orbital country element
                const countryEl = document.createElement('div');
                countryEl.className = 'orbital-country';
                countryEl.dataset.code = relation.code;
                countryEl.dataset.ring = ringIndex;
                countryEl.style.left = `${x}px`;
                countryEl.style.top = `${y}px`;
                countryEl.style.animationDelay = `${relationIndex * 0.05}s`;
                
                // Determine relation class
                const relationClass = this.getRelationClass(relation.relationStrength);
                
                countryEl.innerHTML = `
                    <div class="orbital-country-flag" style="border-color: var(--relation-${relationClass})">
                        <img src="${GeoTopia.utils.getFlagUrl(relation.code)}" 
                             alt="${relation.name}"
                             loading="lazy"
                             onerror="this.parentElement.innerHTML='${GeoTopia.utils.getFlagEmoji(relation.code)}'">
                    </div>
                    <span class="orbital-country-name">${relation.name}</span>
                `;
                
                container.appendChild(countryEl);
                
                // Create connection line
                const line = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                line.classList.add('connection-line', relationClass);
                line.dataset.country = relation.code;
                
                // Create curved path to center
                const midX = (centerX + x) / 2;
                const midY = (centerY + y) / 2;
                const curveOffset = 20;
                const perpX = -(y - centerY) / ring.radius * curveOffset;
                const perpY = (x - centerX) / ring.radius * curveOffset;
                
                line.setAttribute('d', `M ${centerX} ${centerY} Q ${midX + perpX} ${midY + perpY} ${x} ${y}`);
                
                svgConnections.appendChild(line);
                
                relationIndex++;
            }
        });
        
        // Add animation classes
        setTimeout(() => {
            container.querySelectorAll('.orbital-country').forEach((el, i) => {
                setTimeout(() => {
                    el.classList.add('active');
                }, i * 50);
            });
        }, 500);
    }
    
    getRelationClass(strength) {
        if (strength >= 9) return 'ally';
        if (strength >= 7) return 'strategic';
        if (strength >= 5) return 'friendly';
        if (strength >= 3) return 'neutral';
        return 'tense';
    }
    
    renderForeignPolicy() {
        const fp = this.countryData.foreign_policy || {};
        
        // Core Principles
        const principlesEl = document.getElementById('fp-principles');
        if (fp.core_principles && fp.core_principles.length > 0) {
            principlesEl.innerHTML = `
                <ul>
                    ${fp.core_principles.map(p => `<li>${p}</li>`).join('')}
                </ul>
            `;
        } else {
            principlesEl.innerHTML = `
                <ul>
                    <li>Sovereign equality of nations</li>
                    <li>Peaceful resolution of disputes</li>
                    <li>Non-interference in internal affairs</li>
                    <li>Mutual respect and cooperation</li>
                </ul>
            `;
        }
        
        // Key Priorities
        const prioritiesEl = document.getElementById('fp-priorities');
        if (fp.key_priorities && fp.key_priorities.length > 0) {
            prioritiesEl.innerHTML = `
                <ul>
                    ${fp.key_priorities.map(p => `<li>${p}</li>`).join('')}
                </ul>
            `;
        } else {
            prioritiesEl.innerHTML = `
                <ul>
                    <li>Economic development partnerships</li>
                    <li>Regional stability and security</li>
                    <li>Climate change cooperation</li>
                    <li>Technology and innovation exchange</li>
                </ul>
            `;
        }
        
        // Strategic Vision
        const visionEl = document.getElementById('fp-vision');
        if (fp.strategic_vision) {
            visionEl.innerHTML = `<p style="font-size: var(--text-base); line-height: 1.8;">${fp.strategic_vision}</p>`;
        } else {
            visionEl.innerHTML = `<p style="font-size: var(--text-base); line-height: 1.8;">Building a peaceful, prosperous, and sustainable future through multilateral cooperation, economic integration, and cultural exchange with nations across the globe.</p>`;
        }
        
        // Render Mind Map
        this.renderFPMindMap();
    }
    
    renderFPMindMap() {
        const container = document.getElementById('fp-mindmap');
        if (!container) return;
        
        const countryName = this.countryData.info.name;
        
        // Create a simple mind map structure
        container.innerHTML = `
            <div class="mindmap-node central" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
                ${countryName}<br>Foreign Policy
            </div>
            
            <div class="mindmap-branch" style="position: absolute; top: 20%; left: 20%;">
                <div class="mindmap-node">Bilateral<br>Relations</div>
            </div>
            
            <div class="mindmap-branch" style="position: absolute; top: 20%; left: 70%;">
                <div class="mindmap-node">Multilateral<br>Engagement</div>
            </div>
            
            <div class="mindmap-branch" style="position: absolute; top: 70%; left: 15%;">
                <div class="mindmap-node">Economic<br>Diplomacy</div>
            </div>
            
            <div class="mindmap-branch" style="position: absolute; top: 70%; left: 50%; transform: translateX(-50%);">
                <div class="mindmap-node">Security<br>Cooperation</div>
            </div>
            
            <div class="mindmap-branch" style="position: absolute; top: 70%; left: 80%;">
                <div class="mindmap-node">Cultural<br>Exchange</div>
            </div>
            
            <svg class="mindmap-lines" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none;">
                <line x1="50%" y1="50%" x2="20%" y2="25%" stroke="var(--primary-400)" stroke-width="2" stroke-dasharray="5,5" opacity="0.5"/>
                <line x1="50%" y1="50%" x2="70%" y2="25%" stroke="var(--primary-400)" stroke-width="2" stroke-dasharray="5,5" opacity="0.5"/>
                <line x1="50%" y1="50%" x2="15%" y2="70%" stroke="var(--primary-400)" stroke-width="2" stroke-dasharray="5,5" opacity="0.5"/>
                <line x1="50%" y1="50%" x2="50%" y2="75%" stroke="var(--primary-400)" stroke-width="2" stroke-dasharray="5,5" opacity="0.5"/>
                <line x1="50%" y1="50%" x2="80%" y2="70%" stroke="var(--primary-400)" stroke-width="2" stroke-dasharray="5,5" opacity="0.5"/>
            </svg>
        `;
        
        // Add styles for mind map nodes
        const style = document.createElement('style');
        style.textContent = `
            .mindmap-node {
                padding: 1rem 1.5rem;
                background: var(--bg-secondary);
                border: 2px solid var(--border-medium);
                border-radius: var(--radius-xl);
                font-size: var(--text-sm);
                font-weight: var(--font-medium);
                color: var(--text-primary);
                text-align: center;
                line-height: 1.4;
                cursor: pointer;
                transition: all 0.3s ease;
            }
            
            .mindmap-node:hover {
                border-color: var(--primary-400);
                box-shadow: var(--shadow-glow);
                transform: scale(1.05);
            }
            
            .mindmap-node.central {
                background: var(--gradient-primary);
                border-color: var(--primary-500);
                font-size: var(--text-base);
                font-weight: var(--font-bold);
                padding: 1.5rem 2rem;
            }
        `;
        document.head.appendChild(style);
    }
    
    renderOrganizations() {
        const container = document.getElementById('org-membership-grid');
        if (!container) return;
        
        const orgs = this.countryData.organizations || [];
        
        if (orgs.length === 0) {
            container.innerHTML = '<p class="text-center" style="grid-column: 1/-1; color: var(--text-muted);">Organization data loading...</p>';
            return;
        }
        
        container.innerHTML = orgs.map(org => `
            <div class="org-membership-card" data-org="${org.id}">
                <div class="org-membership-logo" style="background: ${org.color}20; color: ${org.color};">
                    ${org.name}
                </div>
                <div class="org-membership-name">${org.fullName}</div>
                <div class="org-membership-type">${org.type}</div>
            </div>
        `).join('');
    }
    
    renderRelations() {
        const container = document.getElementById('relations-grid');
        if (!container) return;
        
        // Filter relations based on current filter
        let filteredRelations = this.relatedCountries;
        
        if (this.currentFilter !== 'all') {
            filteredRelations = this.relatedCountries.filter(r => {
                const relClass = this.getRelationClass(r.relationStrength);
                return relClass === this.currentFilter;
            });
        }
        
        // Limit displayed relations
        const displayRelations = filteredRelations.slice(0, this.displayedRelations);
        
        container.innerHTML = displayRelations.map(relation => {
            const relClass = this.getRelationClass(relation.relationStrength);
            const strengthPercent = (relation.relationStrength / 10) * 100;
            
            return `
                <a href="relationship.html?from=${this.countryCode}&to=${relation.code}" class="relation-card" data-code="${relation.code}">
                    <div class="relation-card-header">
                        <div class="relation-card-flag">
                            <img src="${GeoTopia.utils.getFlagUrl(relation.code)}" 
                                 alt="${relation.name}"
                                 loading="lazy">
                        </div>
                        <div class="relation-card-info">
                            <div class="relation-card-name">${relation.name}</div>
                            <span class="relation-card-type ${relClass}">${relation.relationType}</span>
                        </div>
                    </div>
                    <div class="relation-card-stats">
                        <div class="relation-stat">
                            <div class="relation-stat-value">$${GeoTopia.utils.formatNumber(relation.trade || 0)}</div>
                            <div class="relation-stat-label">Trade (M)</div>
                        </div>
                        <div class="relation-stat">
                            <div class="relation-stat-value">${relation.treaties || 0}</div>
                            <div class="relation-stat-label">Treaties</div>
                        </div>
                        <div class="relation-stat">
                            <div class="relation-stat-value">${GeoTopia.utils.formatNumber(relation.diaspora || 0)}</div>
                            <div class="relation-stat-label">Diaspora</div>
                        </div>
                    </div>
                    <div class="relation-card-strength">
                        <div class="strength-bar">
                            <div class="strength-fill" style="width: ${strengthPercent}%; background: var(--relation-${relClass});"></div>
                        </div>
                    </div>
                </a>
            `;
        }).join('');
        
        // Show/hide load more button
        const loadMoreContainer = document.getElementById('load-more-container');
        if (filteredRelations.length > this.displayedRelations) {
            loadMoreContainer.style.display = 'block';
        } else {
            loadMoreContainer.style.display = 'none';
        }
    }
    
    renderStatistics() {
        const container = document.getElementById('country-stats-grid');
        if (!container) return;
        
        const totalTrade = this.relatedCountries.reduce((sum, r) => sum + (r.trade || 0), 0);
        const totalTreaties = this.relatedCountries.reduce((sum, r) => sum + (r.treaties || 0), 0);
        const totalDiaspora = this.relatedCountries.reduce((sum, r) => sum + (r.diaspora || 0), 0);
        
        container.innerHTML = `
            <div class="stat-card" data-aos="zoom-in">
                <div class="stat-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                </div>
                <div class="stat-value" data-counter="${this.relatedCountries.length}">0</div>
                <div class="stat-label">Bilateral Relations</div>
            </div>
            
            <div class="stat-card" data-aos="zoom-in" data-aos-delay="100">
                <div class="stat-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                </div>
                <div class="stat-value">$<span data-counter="${Math.round(totalTrade / 1000)}">0</span>B</div>
                <div class="stat-label">Total Trade Volume</div>
            </div>
            
            <div class="stat-card" data-aos="zoom-in" data-aos-delay="200">
                <div class="stat-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                    </svg>
                </div>
                <div class="stat-value" data-counter="${totalTreaties}">0</div>
                <div class="stat-label">Active Treaties</div>
            </div>
            
            <div class="stat-card" data-aos="zoom-in" data-aos-delay="300">
                <div class="stat-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                </div>
                <div class="stat-value" data-counter="${Math.round(totalDiaspora / 1000000)}">0</div>
                <div class="stat-label">Diaspora (Millions)</div>
            </div>
        `;
        
        // Render charts placeholder
        this.renderCharts();
    }
    
    renderCharts() {
        // Trade chart placeholder
        const tradeChart = document.getElementById('trade-chart');
        if (tradeChart) {
            tradeChart.innerHTML = this.generateBarChart();
        }
        
        // Diplomacy chart placeholder
        const diplomacyChart = document.getElementById('diplomacy-chart');
        if (diplomacyChart) {
            diplomacyChart.innerHTML = this.generateLineChart();
        }
    }
    
    generateBarChart() {
        const regions = ['Asia', 'Europe', 'Americas', 'Africa', 'Oceania'];
        const maxVal = 100;
        
        return `
            <div style="display: flex; align-items: flex-end; justify-content: space-around; height: 100%; padding: 2rem 0;">
                ${regions.map((region, i) => {
                    const value = Math.floor(Math.random() * 80) + 20;
                    const height = (value / maxVal) * 200;
                    return `
                        <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
                            <div style="width: 40px; height: ${height}px; background: linear-gradient(180deg, var(--primary-400), var(--primary-600)); border-radius: 4px 4px 0 0; transition: height 1s ease;" class="chart-bar-grow"></div>
                            <span style="font-size: 12px; color: var(--text-muted);">${region}</span>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
    }
    
    generateLineChart() {
        return `
            <div style="position: relative; height: 100%; padding: 1rem;">
                <svg width="100%" height="200" viewBox="0 0 400 200" preserveAspectRatio="none">
                    <!-- Grid lines -->
                    <g stroke="var(--border-light)" stroke-width="1">
                        <line x1="0" y1="50" x2="400" y2="50" />
                        <line x1="0" y1="100" x2="400" y2="100" />
                        <line x1="0" y1="150" x2="400" y2="150" />
                    </g>
                    
                    <!-- Line chart -->
                    <path d="M 0 150 L 66 130 L 133 100 L 200 110 L 266 70 L 333 50 L 400 30" 
                          fill="none" 
                          stroke="var(--primary-400)" 
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="chart-line-draw" />
                    
                    <!-- Area fill -->
                    <path d="M 0 150 L 66 130 L 133 100 L 200 110 L 266 70 L 333 50 L 400 30 L 400 200 L 0 200 Z" 
                          fill="url(#gradient)" 
                          opacity="0.3" />
                    
                    <!-- Gradient definition -->
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" style="stop-color:var(--primary-400);stop-opacity:0.5" />
                            <stop offset="100%" style="stop-color:var(--primary-400);stop-opacity:0" />
                        </linearGradient>
                    </defs>
                    
                    <!-- Data points -->
                    <g fill="var(--primary-400)">
                        <circle cx="0" cy="150" r="4" />
                        <circle cx="66" cy="130" r="4" />
                        <circle cx="133" cy="100" r="4" />
                        <circle cx="200" cy="110" r="4" />
                        <circle cx="266" cy="70" r="4" />
                        <circle cx="333" cy="50" r="4" />
                        <circle cx="400" cy="30" r="4" />
                    </g>
                </svg>
                
                <!-- X-axis labels -->
                <div style="display: flex; justify-content: space-between; font-size: 12px; color: var(--text-muted); margin-top: 0.5rem;">
                    <span>2020</span>
                    <span>2021</span>
                    <span>2022</span>
                    <span>2023</span>
                    <span>2024</span>
                    <span>2025</span>
                    <span>2026</span>
                </div>
            </div>
        `;
    }
    
    renderTimeline() {
        const container = document.getElementById('diplomatic-timeline');
        if (!container) return;
        
        // Sample timeline events (would come from data in production)
        const events = [
            { year: '2026', title: 'G20 Summit Participation', description: 'Active participation in shaping global economic policies and climate action frameworks.', milestone: true },
            { year: '2025', title: 'New Trade Agreement Signed', description: 'Comprehensive economic partnership agreement with major trading partners.' },
            { year: '2024', title: 'Defense Cooperation Expanded', description: 'Strengthened security partnerships and joint military exercises.' },
            { year: '2023', title: 'Climate Commitment', description: 'Pledged ambitious carbon reduction targets at COP28.' },
            { year: '2022', title: 'Digital Cooperation Framework', description: 'Established technology partnership agreements focusing on AI and cybersecurity.' },
            { year: '2020', title: 'COVID-19 Response', description: 'International cooperation in vaccine distribution and pandemic response.', milestone: true }
        ];
        
        container.innerHTML = events.map(event => `
            <div class="timeline-item ${event.milestone ? 'milestone' : ''}" data-aos="fade-up">
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                    <div class="timeline-date">${event.year}</div>
                    <div class="timeline-title">${event.title}</div>
                    <div class="timeline-description">${event.description}</div>
                </div>
            </div>
        `).join('');
    }
    
    renderWhatIf() {
        const countryName = this.countryData.info.name;
        
        // Update What If content based on country
        document.getElementById('whatif-economic').textContent = 
            `If ${countryName} and its partners eliminated all trade barriers, regional GDP could grow by an additional 15-20%, creating millions of jobs.`;
        
        document.getElementById('whatif-peace').textContent = 
            `Resolving regional disputes could redirect billions from defense to healthcare and education, transforming quality of life for millions.`;
        
        document.getElementById('whatif-innovation').textContent = 
            `Joint research initiatives between ${countryName} and global partners could accelerate breakthroughs in renewable energy and medicine.`;
        
        document.getElementById('whatif-human').textContent = 
            `Easier visa regimes and cultural exchanges would foster understanding, reduce prejudice, and create a generation of global citizens.`;
    }
    
    // =====================================================
    // INTERACTIONS
    // =====================================================
    
    setupInteractions() {
        // Orbital country hover/click
        this.setupOrbitalInteractions();
        
        // Relations filter
        this.setupRelationsFilter();
        
        // Relations search
        this.setupRelationsSearch();
        
        // Load more button
        this.setupLoadMore();
        
        // Scroll animations
        this.setupScrollAnimations();
    }
    
    setupOrbitalInteractions() {
        const countries = document.querySelectorAll('.orbital-country');
        const connections = document.querySelectorAll('.connection-line');
        
        countries.forEach(country => {
            // Hover effect
            country.addEventListener('mouseenter', () => {
                const code = country.dataset.code;
                
                // Highlight this country's connection
                connections.forEach(line => {
                    if (line.dataset.country === code) {
                        line.classList.add('highlighted');
                    } else {
                        line.style.opacity = '0.1';
                    }
                });
                
                // Show tooltip
                this.showTooltip(country, code);
            });
            
            country.addEventListener('mouseleave', () => {
                // Reset connections
                connections.forEach(line => {
                    line.classList.remove('highlighted');
                    line.style.opacity = '';
                });
                
                // Hide tooltip
                this.hideTooltip();
            });
            
            // Click to navigate
            country.addEventListener('click', () => {
                const code = country.dataset.code;
                window.location.href = `relationship.html?from=${this.countryCode}&to=${code}`;
            });
        });
    }
    
    showTooltip(element, countryCode) {
        const container = document.getElementById('tooltip-container');
        const relation = this.relatedCountries.find(r => r.code === countryCode);
        
        if (!relation) return;
        
        const rect = element.getBoundingClientRect();
        
        container.innerHTML = `
            <div class="tooltip tooltip-animate" style="position: fixed; top: ${rect.bottom + 10}px; left: ${rect.left - 100}px;">
                <div class="tooltip-header">
                    <div class="tooltip-flag">
                        <img src="${GeoTopia.utils.getFlagUrl(countryCode)}" alt="${relation.name}">
                    </div>
                    <div class="tooltip-name">${relation.name}</div>
                </div>
                <div class="tooltip-content">
                    <div class="tooltip-stat">
                        <span class="tooltip-stat-label">Relation Type</span>
                        <span class="tooltip-stat-value">${relation.relationType}</span>
                    </div>
                    <div class="tooltip-stat">
                        <span class="tooltip-stat-label">Trade Volume</span>
                        <span class="tooltip-stat-value">$${GeoTopia.utils.formatNumber(relation.trade || 0)}M</span>
                    </div>
                    <div class="tooltip-stat">
                        <span class="tooltip-stat-label">Strength</span>
                        <span class="tooltip-stat-value">${relation.relationStrength}/10</span>
                    </div>
                </div>
            </div>
        `;
    }
    
    hideTooltip() {
        const container = document.getElementById('tooltip-container');
        container.innerHTML = '';
    }
    
    setupRelationsFilter() {
        const filterBtns = document.querySelectorAll('.relations-filters .filter-btn');
        
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                this.currentFilter = btn.dataset.filter;
                this.displayedRelations = 12;
                this.renderRelations();
            });
        });
    }
    
    setupRelationsSearch() {
        const searchInput = document.getElementById('relations-search');
        if (!searchInput) return;
        
        searchInput.addEventListener('input', GeoTopia.utils.debounce((e) => {
            const query = e.target.value.toLowerCase().trim();
            
            if (!query) {
                this.renderRelations();
                return;
            }
            
            // Filter relations by search
            const filtered = this.relatedCountries.filter(r => 
                r.name.toLowerCase().includes(query) ||
                r.code.toLowerCase().includes(query) ||
                r.region.toLowerCase().includes(query)
            );
            
            // Render filtered results
            const container = document.getElementById('relations-grid');
            container.innerHTML = filtered.slice(0, 20).map(relation => {
                const relClass = this.getRelationClass(relation.relationStrength);
                const strengthPercent = (relation.relationStrength / 10) * 100;
                
                return `
                    <a href="relationship.html?from=${this.countryCode}&to=${relation.code}" class="relation-card">
                        <div class="relation-card-header">
                            <div class="relation-card-flag">
                                <img src="${GeoTopia.utils.getFlagUrl(relation.code)}" alt="${relation.name}">
                            </div>
                            <div class="relation-card-info">
                                <div class="relation-card-name">${relation.name}</div>
                                <span class="relation-card-type ${relClass}">${relation.relationType}</span>
                            </div>
                        </div>
                        <div class="relation-card-strength">
                            <div class="strength-bar">
                                <div class="strength-fill" style="width: ${strengthPercent}%; background: var(--relation-${relClass});"></div>
                            </div>
                        </div>
                    </a>
                `;
            }).join('');
            
            // Hide load more
            document.getElementById('load-more-container').style.display = 'none';
            
        }, 300));
    }
    
    setupLoadMore() {
        const btn = document.getElementById('load-more-btn');
        if (!btn) return;
        
        btn.addEventListener('click', () => {
            this.displayedRelations += 12;
            this.renderRelations();
        });
    }
    
    setupScrollAnimations() {
        // Animate elements on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('aos-animate');
                    
                    // Animate counters
                    entry.target.querySelectorAll('[data-counter]').forEach(counter => {
                        const target = parseInt(counter.dataset.counter, 10);
                        GeoTopia.utils.animateCounter(counter, target);
                    });
                }
            });
        }, { threshold: 0.1 });
        
        document.querySelectorAll('[data-aos]').forEach(el => observer.observe(el));
    }
    
    // =====================================================
    // ANIMATIONS
    // =====================================================
    
    initAnimations() {
        // Add entrance animations to orbital countries
        setTimeout(() => {
            document.querySelectorAll('.orbital-country').forEach((el, i) => {
                el.style.opacity = '0';
                el.style.transform = 'translate(-50%, -50%) scale(0)';
                
                setTimeout(() => {
                    el.style.transition = 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
                    el.style.opacity = '1';
                    el.style.transform = 'translate(-50%, -50%) scale(1)';
                }, i * 50);
            });
        }, 500);
        
        // Animate connection lines
        document.querySelectorAll('.connection-line').forEach((line, i) => {
            const length = line.getTotalLength ? line.getTotalLength() : 500;
            line.style.strokeDasharray = length;
            line.style.strokeDashoffset = length;
            
            setTimeout(() => {
                line.style.transition = 'stroke-dashoffset 1s ease';
                line.style.strokeDashoffset = '0';
            }, 800 + i * 30);
        });
    }
    
    // =====================================================
    // LOADING & ERROR STATES
    // =====================================================
    
    showLoading() {
        const loader = document.getElementById('loading-screen');
        if (loader) {
            loader.classList.remove('hidden');
        }
    }
    
    hideLoading() {
        const loader = document.getElementById('loading-screen');
        if (loader) {
            setTimeout(() => {
                loader.classList.add('hidden');
            }, 500);
        }
    }
    
    showError(message) {
        this.hideLoading();
        
        document.body.innerHTML = `
            <div style="min-height: 100vh; display: flex; align-items: center; justify-content: center; background: var(--bg-primary); color: var(--text-primary); text-align: center; padding: 2rem;">
                <div>
                    <div style="font-size: 4rem; margin-bottom: 1rem;">🌐</div>
                    <h1 style="margin-bottom: 1rem;">Oops!</h1>
                    <p style="color: var(--text-muted); margin-bottom: 2rem;">${message}</p>
                    <a href="index.html" class="btn btn-primary">Back to Unity Atlas</a>
                </div>
            </div>
        `;
    }
}

// =====================================================
// INITIALIZE
// =====================================================

document.addEventListener('DOMContentLoaded', () => {
    window.countryPage = new CountryPage();
});
