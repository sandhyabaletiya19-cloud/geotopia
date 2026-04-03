// ==================== UNITY ATLAS APPLICATION ====================

class UnityAtlas {
    constructor() {
        this.countries = {};
        this.relationships = {};
        this.currentCenter = null;
        this.currentBilateral = null;
        this.svg = null;
        this.width = 1200;
        this.height = 700;
        this.centerX = this.width / 2;
        this.centerY = this.height / 2;
        
        this.rings = [
            { name: 'Allied', min: 80, max: 100, radius: 120, color: '#10b981' },
            { name: 'Strategic', min: 60, max: 79, radius: 200, color: '#3b82f6' },
            { name: 'Friendly', min: 40, max: 59, radius: 280, color: '#06b6d4' },
            { name: 'Neutral', min: 20, max: 39, radius: 360, color: '#f59e0b' },
            { name: 'Hostile', min: 0, max: 19, radius: 440, color: '#ef4444' }
        ];
        
        this.parameters = [
            { id: '00_overview', icon: '📋', name: 'Overview' },
            { id: '01_historical', icon: '📜', name: 'Historical Background' },
            { id: '02_bilateral', icon: '🤝', name: 'Bilateral Ties' },
            { id: '03_agreements', icon: '📝', name: 'Agreements & Treaties' },
            { id: '04_political', icon: '🏛️', name: 'Political Relations' },
            { id: '05_economic', icon: '💰', name: 'Economic & Trade' },
            { id: '06_defense', icon: '🛡️', name: 'Defense & Security' },
            { id: '07_people', icon: '👥', name: 'People to People' },
            { id: '08_connectivity', icon: '✈️', name: 'Connectivity' },
            { id: '09_multilateral', icon: '🌐', name: 'Multilateral Forums' },
            { id: '10_sectoral', icon: '🔧', name: 'Sectoral Cooperation' },
            { id: '11_thirdparty', icon: '🔺', name: 'Third Party Influence' },
            { id: '12_concerns', icon: '⚠️', name: 'Areas of Concern' },
            { id: '13_future', icon: '🔮', name: 'Future Outlook' },
            { id: '14_peace', icon: '✨', name: 'Imagine Peace' },
            { id: '15_external', icon: '🌍', name: 'External Interventions' }
        ];
        
        this.init();
    }
    
    async init() {
        await this.loadData();
        this.setupSVG();
        this.populateDropdown();
        this.bindEvents();
        
        // Default: Show India
        this.setCenter('IND');
    }
    
    // ==================== DATA LOADING ====================
    async loadData() {
        try {
            const [countriesRes, relationshipsRes] = await Promise.all([
                fetch('data/countries.json'),
                fetch('data/relationships.json')
            ]);
            
            this.countries = await countriesRes.json();
            this.relationships = await relationshipsRes.json();
            
            console.log(`Loaded ${Object.keys(this.countries).length} countries`);
            console.log(`Loaded ${Object.keys(this.relationships).length} relationships`);
        } catch (error) {
            console.error('Error loading data:', error);
            this.showError('Failed to load data. Please refresh the page.');
        }
    }
    
    // ==================== SVG SETUP ====================
    setupSVG() {
        const container = document.getElementById('radialMap');
        this.width = container.clientWidth || 1200;
        this.height = 700;
        this.centerX = this.width / 2;
        this.centerY = this.height / 2;
        
        this.svg = d3.select('#radialMap')
            .attr('viewBox', `0 0 ${this.width} ${this.height}`)
            .attr('preserveAspectRatio', 'xMidYMid meet');
        
        // Draw rings
        this.drawRings();
    }
    
    drawRings() {
        const ringsGroup = this.svg.append('g').attr('class', 'rings');
        
        this.rings.forEach(ring => {
            // Ring circle
            ringsGroup.append('circle')
                .attr('cx', this.centerX)
                .attr('cy', this.centerY)
                .attr('r', ring.radius)
                .attr('fill', 'none')
                .attr('stroke', ring.color)
                .attr('stroke-width', 1)
                .attr('stroke-dasharray', '5,5')
                .attr('opacity', 0.3);
            
            // Ring label
            ringsGroup.append('text')
                .attr('class', 'ring-label')
                .attr('x', this.centerX)
                .attr('y', this.centerY - ring.radius - 10)
                .text(ring.name)
                .attr('fill', ring.color)
                .attr('opacity', 0.7);
        });
    }
    
    // ==================== DROPDOWN ====================
    populateDropdown() {
        const dropdown = document.getElementById('countryDropdown');
        const sortedCountries = Object.values(this.countries)
            .sort((a, b) => a.name.localeCompare(b.name));
        
        dropdown.innerHTML = sortedCountries.map(country => `
            <div class="dropdown-item" data-code="${country.code}">
                <span class="flag">${country.flag}</span>
                <span class="name">${country.name}</span>
            </div>
        `).join('');
    }
    
    // ==================== EVENT BINDING ====================
    bindEvents() {
        // Dropdown toggle
        document.getElementById('countryDropdownBtn').addEventListener('click', (e) => {
            e.stopPropagation();
            document.getElementById('countryDropdown').classList.toggle('show');
        });
        
        // Dropdown item click
        document.getElementById('countryDropdown').addEventListener('click', (e) => {
            const item = e.target.closest('.dropdown-item');
            if (item) {
                const code = item.dataset.code;
                this.setCenter(code);
                document.getElementById('countryDropdown').classList.remove('show');
            }
        });
        
        // Close dropdown on outside click
        document.addEventListener('click', () => {
            document.getElementById('countryDropdown').classList.remove('show');
        });
        
        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.filterByContinent(btn.dataset.filter);
            });
        });
        
        // Close bilateral panel
        document.getElementById('closePanel').addEventListener('click', () => {
            this.closeBilateralPanel();
        });
        
        // Window resize
        window.addEventListener('resize', () => {
            this.handleResize();
        });
    }
    
    // ==================== SET CENTER COUNTRY ====================
    setCenter(code) {
        this.currentCenter = code;
        const country = this.countries[code];
        
        // Update center display
        document.getElementById('centerFlag').textContent = country.flag;
        document.getElementById('centerName').textContent = country.name;
        document.getElementById('centerSubtitle').textContent = 
            `${country.relations.length} international relationships`;
        
        // Clear existing nodes and lines
        this.svg.selectAll('.country-node').remove();
        this.svg.selectAll('.connection-line').remove();
        
        // Draw new relationships
        this.drawRelationships(code);
        
        // Close any open bilateral panel
        this.closeBilateralPanel();
    }
    
    // ==================== DRAW RELATIONSHIPS ====================
    drawRelationships(centerCode) {
        const country = this.countries[centerCode];
        const relations = country.relations || [];
        
        // Group by ring
        const grouped = this.rings.map(ring => ({
            ...ring,
            countries: []
        }));
        
        relations.forEach(otherCode => {
            const relKey = this.getRelationshipKey(centerCode, otherCode);
            const rel = this.relationships[relKey];
            const otherCountry = this.countries[otherCode];
            
            if (!otherCountry) return;
            
            const strength = rel ? rel.strength : 50; // Default to neutral if no data
            
            // Find appropriate ring
            for (const ring of grouped) {
                if (strength >= ring.min && strength <= ring.max) {
                    ring.countries.push({
                        code: otherCode,
                        country: otherCountry,
                        strength: strength,
                        relationship: rel
                    });
                    break;
                }
            }
        });
        
        // Draw connections and nodes
        const linesGroup = this.svg.append('g').attr('class', 'connections');
        const nodesGroup = this.svg.append('g').attr('class', 'nodes');
        
        grouped.forEach(ring => {
            const count = ring.countries.length;
            if (count === 0) return;
            
            ring.countries.forEach((item, index) => {
                // Calculate position on ring
                const angle = (2 * Math.PI * index / count) - Math.PI / 2;
                const x = this.centerX + ring.radius * Math.cos(angle);
                const y = this.centerY + ring.radius * Math.sin(angle);
                
                // Draw connection line
                linesGroup.append('line')
                    .attr('class', 'connection-line')
                    .attr('x1', this.centerX)
                    .attr('y1', this.centerY)
                    .attr('x2', x)
                    .attr('y2', y)
                    .attr('stroke', ring.color)
                    .attr('data-country', item.code);
                
                // Draw country node
                const nodeGroup = nodesGroup.append('g')
                    .attr('class', 'country-node')
                    .attr('transform', `translate(${x}, ${y})`)
                    .attr('data-code', item.code)
                    .on('click', () => this.handleNodeClick(item.code));
                
                // Background circle
                nodeGroup.append('circle')
                    .attr('r', 35)
                    .attr('fill', ring.color)
                    .attr('opacity', 0.2);
                
                // Flag emoji
                nodeGroup.append('text')
                    .attr('text-anchor', 'middle')
                    .attr('dominant-baseline', 'central')
                    .attr('font-size', '28px')
                    .text(item.country.flag);
                
                // Country name (shown on hover)
                nodeGroup.append('text')
                    .attr('text-anchor', 'middle')
                    .attr('y', 50)
                    .attr('font-size', '11px')
                    .attr('fill', 'white')
                    .text(item.country.name.substring(0, 12));
            });
        });
    }
    
    // ==================== HANDLE NODE CLICK ====================
    handleNodeClick(code) {
        const centerCode = this.currentCenter;
        
        // Highlight this relationship
        this.highlightRelationship(centerCode, code);
        
        // Show bilateral panel
        this.showBilateralPanel(centerCode, code);
    }
    
    // ==================== HIGHLIGHT RELATIONSHIP ====================
    highlightRelationship(code1, code2) {
        // Fade all nodes and lines
        this.svg.selectAll('.country-node').classed('faded', true);
        this.svg.selectAll('.connection-line').classed('faded', true);
        
        // Highlight the selected country
        this.svg.selectAll('.country-node')
            .filter(function() {
                return d3.select(this).attr('data-code') === code2;
            })
            .classed('faded', false)
            .classed('highlighted', true);
        
        // Highlight the connection line
        this.svg.selectAll('.connection-line')
            .filter(function() {
                return d3.select(this).attr('data-country') === code2;
            })
            .classed('faded', false)
            .classed('highlighted', true);
    }
    
    // ==================== SHOW BILATERAL PANEL ====================
    showBilateralPanel(code1, code2) {
        const country1 = this.countries[code1];
        const country2 = this.countries[code2];
        const relKey = this.getRelationshipKey(code1, code2);
        const rel = this.relationships[relKey] || this.generateBasicRelationship(code1, code2);
        
        this.currentBilateral = { code1, code2, rel };
        
        // Update header
        document.getElementById('country1Flag').textContent = country1.flag;
        document.getElementById('country1Name').textContent = country1.name;
        document.getElementById('country2Flag').textContent = country2.flag;
        document.getElementById('country2Name').textContent = country2.name;
        document.getElementById('relationEmoji').textContent = rel.emoji || '🤝';
        document.getElementById('strengthValue').textContent = `${rel.strength}/100`;
        document.getElementById('relationStatus').textContent = rel.status || 'Diplomatic Relations';
        
        // Strength bar
        const strengthFill = document.getElementById('strengthFill');
        strengthFill.style.width = `${rel.strength}%`;
        strengthFill.style.background = this.getStrengthColor(rel.strength);
        
        // Generate parameter cards
        this.generateParameterCards(rel);
        
        // Show panel
        document.getElementById('bilateralPanel').classList.add('show');
    }
    
    // ==================== GENERATE PARAMETER CARDS ====================
    generateParameterCards(rel) {
        const grid = document.getElementById('parametersGrid');
        
        grid.innerHTML = this.parameters.map(param => {
            const data = rel[param.id] || {};
            const hasData = Object.keys(data).length > 0;
            
            return `
                <div class="parameter-card" data-param="${param.id}">
                    <div class="parameter-header">
                        <h4>
                            <span class="icon">${param.icon}</span>
                            ${param.name}
                        </h4>
                        <span class="expand-icon">${hasData ? '▼' : '—'}</span>
                    </div>
                    <div class="parameter-content">
                        ${this.renderParameterContent(param.id, data, rel)}
                    </div>
                </div>
            `;
        }).join('');
        
        // Bind click events
        grid.querySelectorAll('.parameter-card').forEach(card => {
            card.addEventListener('click', () => {
                const wasExpanded = card.classList.contains('expanded');
                // Close all others
                grid.querySelectorAll('.parameter-card').forEach(c => c.classList.remove('expanded'));
                // Toggle this one
                if (!wasExpanded) {
                    card.classList.add('expanded');
                }
            });
        });
    }
    
    // ==================== RENDER PARAMETER CONTENT ====================
    renderParameterContent(paramId, data, rel) {
        switch(paramId) {
            case '00_overview':
                return `
                    <p>${rel.overview || 'Diplomatic relations exist between these nations.'}</p>
                    ${rel.keyFacts ? `
                        <ul>
                            ${rel.keyFacts.map(fact => `<li>✓ ${fact}</li>`).join('')}
                        </ul>
                    ` : ''}
                `;
            
            case '01_historical':
                if (rel.timeline && rel.timeline.length > 0) {
                    return `
                        <div class="timeline-mini">
                            ${rel.timeline.map(event => `
                                <div class="event">
                                    <span class="year">${event.year}</span>
                                    <p>${event.event}</p>
                                </div>
                            `).join('')}
                        </div>
                    `;
                }
                return '<p>Historical data not yet available.</p>';
            
            case '05_economic':
                if (rel.trade) {
                    return `
                        <div class="stat-grid">
                            <div class="stat-item">
                                <div class="value">$${rel.trade.total}B</div>
                                <div class="label">Total Trade</div>
                            </div>
                            ${rel.trade.exports ? Object.entries(rel.trade.exports).map(([code, value]) => `
                                <div class="stat-item">
                                    <div class="value">$${value}B</div>
                                    <div class="label">${this.countries[code]?.name || code} Exports</div>
                                </div>
                            `).join('') : ''}
                            ${rel.trade.balance !== undefined ? `
                                <div class="stat-item">
                                    <div class="value" style="color: ${rel.trade.balance >= 0 ? '#10b981' : '#ef4444'}">
                                        ${rel.trade.balance >= 0 ? '+' : ''}$${rel.trade.balance}B
                                    </div>
                                    <div class="label">Trade Balance</div>
                                </div>
                            ` : ''}
                        </div>
                    `;
                }
                return '<p>Trade data not yet available.</p>';
            
            case '06_defense':
                if (rel.defense && rel.defense.deals) {
                    return `
                        <ul>
                            ${rel.defense.deals.map(deal => `
                                <li>
                                    <strong>${deal.item}</strong> - 
                                    ${deal.qty} units 
                                    ($${deal.value}B)
                                </li>
                            `).join('')}
                        </ul>
                    `;
                }
                return '<p>Defense cooperation data not yet available.</p>';
            
            case '13_future':
                return `<p>${rel.future || 'Future outlook analysis coming soon.'}</p>`;
            
            case '14_peace':
                if (rel.peace) {
                    return `
                        <p><strong>Vision:</strong> ${rel.peace.vision}</p>
                        ${rel.peace.benefits ? `
                            <ul>
                                ${rel.peace.benefits.map(b => `<li>✨ ${b}</li>`).join('')}
                            </ul>
                        ` : ''}
                    `;
                }
                return '<p>Peace scenario analysis coming soon.</p>';
            
            default:
                return '<p>Detailed data coming soon.</p>';
        }
    }
    
    // ==================== CLOSE BILATERAL PANEL ====================
    closeBilateralPanel() {
        document.getElementById('bilateralPanel').classList.remove('show');
        
        // Remove highlights
        this.svg.selectAll('.country-node')
            .classed('faded', false)
            .classed('highlighted', false);
        this.svg.selectAll('.connection-line')
            .classed('faded', false)
            .classed('highlighted', false);
        
        this.currentBilateral = null;
    }
    
    // ==================== FILTER BY CONTINENT ====================
    filterByContinent(continent) {
        if (continent === 'all') {
            this.svg.selectAll('.country-node').classed('faded', false);
            this.svg.selectAll('.connection-line').classed('faded', false);
            return;
        }
        
        // Continent mapping
        const continentMap = {
            'africa': ['ZAF', 'NGA', 'EGY', 'KEN', 'ETH', 'GHA', 'TZA', 'UGA', 'DZA', 'MAR', 'TUN', 'LBY', 'SDN', 'AGO', 'MOZ', 'ZWE', 'ZMB', 'BWA', 'NAM', 'SEN', 'MLI', 'NER', 'TCD', 'CMR', 'COD', 'COG', 'GAB', 'GNQ', 'CAF', 'SSD', 'ERI', 'DJI', 'SOM', 'RWA', 'BDI', 'MWI', 'MDG', 'MUS', 'SYC', 'COM', 'CPV', 'GNB', 'GMB', 'SLE', 'LBR', 'CIV', 'BFA', 'TGO', 'BEN', 'MRT', 'LSO', 'SWZ'],
            'asia': ['CHN', 'IND', 'JPN', 'KOR', 'PRK', 'MNG', 'VNM', 'THA', 'MYS', 'SGP', 'IDN', 'PHL', 'MMR', 'LAO', 'KHM', 'BGD', 'PAK', 'AFG', 'NPL', 'BTN', 'LKA', 'MDV', 'IRN', 'IRQ', 'SAU', 'ARE', 'QAT', 'KWT', 'BHR', 'OMN', 'YEM', 'JOR', 'SYR', 'LBN', 'ISR', 'PSE', 'TUR', 'GEO', 'ARM', 'AZE', 'KAZ', 'UZB', 'TKM', 'KGZ', 'TJK', 'RUS'],
            'europe': ['GBR', 'FRA', 'DEU', 'ITA', 'ESP', 'PRT', 'NLD', 'BEL', 'CHE', 'AUT', 'POL', 'CZE', 'SVK', 'HUN', 'ROU', 'BGR', 'GRC', 'SRB', 'HRV', 'SVN', 'BIH', 'MNE', 'MKD', 'ALB', 'UKR', 'BLR', 'MDA', 'LTU', 'LVA', 'EST', 'FIN', 'SWE', 'NOR', 'DNK', 'ISL', 'IRL', 'LUX', 'MLT', 'CYP', 'AND', 'MCO', 'SMR', 'VAT', 'LIE'],
            'north-america': ['USA', 'CAN', 'MEX', 'GTM', 'BLZ', 'SLV', 'HND', 'NIC', 'CRI', 'PAN', 'CUB', 'JAM', 'HTI', 'DOM', 'BHS', 'TTO', 'BRB', 'GRD', 'LCA', 'VCT', 'ATG', 'DMA', 'KNA'],
            'south-america': ['BRA', 'ARG', 'CHL', 'COL', 'PER', 'VEN', 'ECU', 'BOL', 'PRY', 'URY', 'GUY', 'SUR'],
            'oceania': ['AUS', 'NZL', 'FJI', 'PNG', 'SLB', 'VUT', 'WSM', 'TON', 'KIR', 'FSM', 'MHL', 'PLW', 'NRU', 'TUV'],
            'antarctica': []
        };
        
        const countriesInContinent = continentMap[continent] || [];
        
        this.svg.selectAll('.country-node').each(function() {
            const code = d3.select(this).attr('data-code');
            const inContinent = countriesInContinent.includes(code);
            d3.select(this).classed('faded', !inContinent);
        });
        
        this.svg.selectAll('.connection-line').each(function() {
            const code = d3.select(this).attr('data-country');
            const inContinent = countriesInContinent.includes(code);
            d3.select(this).classed('faded', !inContinent);
        });
    }
    
    // ==================== UTILITY FUNCTIONS ====================
    getRelationshipKey(code1, code2) {
        return [code1, code2].sort().join('-');
    }
    
    getStrengthColor(strength) {
        if (strength >= 80) return '#10b981';
        if (strength >= 60) return '#3b82f6';
        if (strength >= 40) return '#06b6d4';
        if (strength >= 20) return '#f59e0b';
        return '#ef4444';
    }
    
    generateBasicRelationship(code1, code2) {
        return {
            countries: [code1, code2],
            status: 'Diplomatic Relations',
            strength: 50,
            emoji: '🤝',
            overview: `${this.countries[code1].name} and ${this.countries[code2].name} maintain diplomatic relations.`
        };
    }
    
    handleResize() {
        const container = document.getElementById('radialMap');
        this.width = container.clientWidth || 1200;
        this.centerX = this.width / 2;
        
        this.svg.attr('viewBox', `0 0 ${this.width} ${this.height}`);
        
        if (this.currentCenter) {
            this.setCenter(this.currentCenter);
        }
    }
    
    showError(message) {
        document.querySelector('.map-container').innerHTML = `
            <div style="text-align: center; padding: 50px; color: #ef4444;">
                <h2>⚠️ Error</h2>
                <p>${message}</p>
            </div>
        `;
    }
}

// ==================== INITIALIZE APP ====================
document.addEventListener('DOMContentLoaded', () => {
    window.unityAtlas = new UnityAtlas();
});
