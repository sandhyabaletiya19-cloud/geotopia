// ============================================
// UNITY ATLAS - COUNTRY PAGE LOGIC
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    initCountryPage();
});

// Global variable to store country data
let currentCountryData = null;

// ============================================
// INITIALIZATION
// ============================================

async function initCountryPage() {
    // Get country code from URL
    const urlParams = new URLSearchParams(window.location.search);
    const countryCode = urlParams.get('code');
    
    if (!countryCode) {
        showError('No country specified. Please select a country from the home page.');
        return;
    }
    
    try {
        // Load country data
        const data = await loadCountryData(countryCode);
        currentCountryData = data;
        
        // Update page
        updatePageTitle(data);
        updateHeroSection(data);
        updateNavDropdown(countryCode);
        populateOverview(data);
        populateNeighbours(data);
        populateMajorRelations(data);
        populateGroupings(data);
        populateTimeline(data);
        populateDiaspora(data);
        populateExamFocus(data);
        
        // Initialize visualizations
        initWorldMap(data);
        initTradeCharts(data);
        
        // Hide loading screen
        document.getElementById('loadingScreen').classList.add('hidden');
        
        // Init scroll effects
        initScrollEffects();
        
    } catch (error) {
        console.error('Error loading country data:', error);
        showError(`Unable to load data for country: ${countryCode}. The data file may not exist yet.`);
    }
}

// ============================================
// DATA LOADING
// ============================================

async function loadCountryData(countryCode) {
    const response = await fetch(`assets/data/countries/${countryCode}/foreign-policy.json`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
}

// ============================================
// PAGE UPDATES
// ============================================

function updatePageTitle(data) {
    document.title = `${data.country_name} - Foreign Policy | Unity Atlas`;
}

function updateHeroSection(data) {
    // Country Flag
    document.getElementById('countryFlag').textContent = data.flag;
    
    // Country Name
    document.getElementById('countryName').textContent = data.country_name;
    
    // Subtitle
    const subtitle = document.getElementById('countrySubtitle');
    if (data.local_name && data.local_name !== data.country_name) {
        subtitle.textContent = `${data.local_name} | ${data.government_type}`;
    } else {
        subtitle.textContent = data.government_type || '';
    }
    
    // Background image based on country
    const heroBackground = document.getElementById('heroBackground');
    const backgroundImages = {
        'IND': 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1920',
        'CHN': 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1920',
        'USA': 'https://images.unsplash.com/photo-1501466044931-62695aada8e9?w=1920',
        'GBR': 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1920',
        'FRA': 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1920',
        'DEU': 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1920',
        'RUS': 'https://images.unsplash.com/photo-1513326738677-b964603b136d?w=1920',
        'JPN': 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1920',
        'BRA': 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1920',
        'TUR': 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=1920'
    };
    
    const bgUrl = backgroundImages[data.country_code] || 
                  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920';
    heroBackground.innerHTML = `<img src="${bgUrl}" alt="${data.country_name}">`;
    
    // Quick Stats
    const quickStats = document.getElementById('quickStats');
    const stats = [];
    
    if (data.gdp_usd) {
        stats.push({ value: data.gdp_usd, label: 'GDP (USD)' });
    }
    if (data.population) {
        stats.push({ value: data.population, label: 'Population' });
    }
    if (data['02_immediate_neighbours']?.total) {
        stats.push({ value: data['02_immediate_neighbours'].total, label: 'Neighbours' });
    }
    if (data.gdp_rank) {
        stats.push({ value: `#${data.gdp_rank}`, label: 'Economy Rank' });
    }
    
    quickStats.innerHTML = stats.map(stat => `
        <div class="quick-stat">
            <div class="quick-stat-value">${stat.value}</div>
            <div class="quick-stat-label">${stat.label}</div>
        </div>
    `).join('');
}

function updateNavDropdown(currentCode) {
    const selector = document.getElementById('navCountrySelector');
    
    // All countries list (simplified - in production, import from country-data.js)
    const countries = [
        { code: 'IND', name: 'India', flag: '🇮🇳' },
        { code: 'CHN', name: 'China', flag: '🇨🇳' },
        { code: 'USA', name: 'United States', flag: '🇺🇸' },
        { code: 'GBR', name: 'United Kingdom', flag: '🇬🇧' },
        { code: 'FRA', name: 'France', flag: '🇫🇷' },
        { code: 'DEU', name: 'Germany', flag: '🇩🇪' },
        { code: 'RUS', name: 'Russia', flag: '🇷🇺' },
        { code: 'JPN', name: 'Japan', flag: '🇯🇵' },
        { code: 'BRA', name: 'Brazil', flag: '🇧🇷' },
        { code: 'TUR', name: 'Turkey', flag: '🇹🇷' },
        { code: 'AUS', name: 'Australia', flag: '🇦🇺' },
        { code: 'CAN', name: 'Canada', flag: '🇨🇦' },
        // Add more countries as data is created
    ];
    
    countries.sort((a, b) => a.name.localeCompare(b.name));
    
    countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country.code;
        option.textContent = `${country.flag} ${country.name}`;
        if (country.code === currentCode) {
            option.selected = true;
        }
        selector.appendChild(option);
    });
    
    selector.addEventListener('change', function() {
        if (this.value) {
            window.location.href = `country.html?code=${this.value}`;
        }
    });
}

// ============================================
// POPULATE SECTIONS
// ============================================

function populateOverview(data) {
    const grid = document.getElementById('overviewGrid');
    const overview = data['01_overview'];
    
    if (!overview) {
        grid.innerHTML = '<p>Overview data not available.</p>';
        return;
    }
    
    let html = '';
    
    // Foreign Policy Doctrine
    if (overview.foreign_policy_doctrine) {
        html += `
            <div class="overview-card">
                <h3><i class="fas fa-flag"></i> Foreign Policy Doctrine</h3>
                <p>${overview.foreign_policy_doctrine}</p>
            </div>
        `;
    }
    
    // Key Principles
    if (overview.key_principles && overview.key_principles.length > 0) {
        html += `
            <div class="overview-card">
                <h3><i class="fas fa-balance-scale"></i> Key Principles</h3>
                <ul>
                    ${overview.key_principles.slice(0, 6).map(p => `
                        <li><i class="fas fa-check"></i> ${p}</li>
                    `).join('')}
                </ul>
            </div>
        `;
    }
    
    // Strategic Objectives
    if (overview.strategic_objectives && overview.strategic_objectives.length > 0) {
        html += `
            <div class="overview-card">
                <h3><i class="fas fa-bullseye"></i> Strategic Objectives</h3>
                <ul>
                    ${overview.strategic_objectives.slice(0, 6).map(o => `
                        <li><i class="fas fa-arrow-right"></i> ${o}</li>
                    `).join('')}
                </ul>
            </div>
        `;
    }
    
    // Global Positioning
    if (overview.global_positioning) {
        html += `
            <div class="overview-card">
                <h3><i class="fas fa-globe"></i> Global Positioning</h3>
                <p>${overview.global_positioning}</p>
            </div>
        `;
    }
    
    // Leader Info
    if (data.head_of_state) {
        html += `
            <div class="overview-card">
                <h3><i class="fas fa-user-tie"></i> Leadership</h3>
                <ul>
                    <li><i class="fas fa-crown"></i> <strong>Head of State:</strong> ${data.head_of_state}</li>
                    ${data.head_of_government ? `<li><i class="fas fa-landmark"></i> <strong>Head of Government:</strong> ${data.head_of_government}</li>` : ''}
                    ${data.foreign_minister ? `<li><i class="fas fa-handshake"></i> <strong>Foreign Minister:</strong> ${data.foreign_minister}</li>` : ''}
                </ul>
            </div>
        `;
    }
    
    // Diplomatic Missions
    if (overview.diplomatic_missions) {
        const missions = overview.diplomatic_missions;
        html += `
            <div class="overview-card">
                <h3><i class="fas fa-building"></i> Diplomatic Network</h3>
                <ul>
                    ${missions.embassies_abroad ? `<li><i class="fas fa-building"></i> <strong>Embassies Abroad:</strong> ${missions.embassies_abroad}</li>` : ''}
                    ${missions.consulates_abroad ? `<li><i class="fas fa-building"></i> <strong>Consulates:</strong> ${missions.consulates_abroad}</li>` : ''}
                    ${missions.foreign_embassies_in_country ? `<li><i class="fas fa-flag"></i> <strong>Foreign Embassies:</strong> ${missions.foreign_embassies_in_country}</li>` : ''}
                </ul>
            </div>
        `;
    }
    
    grid.innerHTML = html;
}

function populateNeighbours(data) {
    const container = document.getElementById('neighboursContainer');
    const neighbours = data['02_immediate_neighbours'];
    
    if (!neighbours || !neighbours.countries || neighbours.countries.length === 0) {
        container.innerHTML = '<p>Neighbour data not available.</p>';
        return;
    }
    
    let html = `
        <div class="neighbours-summary" style="margin-bottom: 2rem; padding: 1.5rem; background: rgba(255,255,255,0.05); border-radius: 15px; display: flex; flex-wrap: wrap; gap: 2rem; justify-content: center;">
            <div class="summary-stat">
                <span style="font-size: 2rem; font-weight: 700; color: var(--golden-hour);">${neighbours.total}</span>
                <span style="display: block; font-size: 0.9rem; color: rgba(255,255,255,0.7);">Land Neighbours</span>
            </div>
            ${neighbours.total_land_border_length_km ? `
            <div class="summary-stat">
                <span style="font-size: 2rem; font-weight: 700; color: var(--sky-blue);">${neighbours.total_land_border_length_km.toLocaleString()} km</span>
                <span style="display: block; font-size: 0.9rem; color: rgba(255,255,255,0.7);">Total Border Length</span>
            </div>
            ` : ''}
        </div>
    `;
    
    html += '<div class="neighbours-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">';
    
    neighbours.countries.forEach(neighbour => {
        const relationshipClass = getRelationshipClass(neighbour.relationship_type);
        const borderLength = neighbour.border_length_km ? `${neighbour.border_length_km.toLocaleString()} km` : 'N/A';
        const tradeVolume = neighbour.trade_volume_usd?.total || neighbour.trade_volume_usd || 'N/A';
        
        html += `
            <div class="neighbour-card" onclick="window.location.href='country.html?code=${neighbour.code}'">
                <div class="neighbour-header">
                    <span class="neighbour-flag">${neighbour.flag || getCountryFlag(neighbour.code)}</span>
                    <div class="neighbour-info">
                        <h4>${neighbour.name}</h4>
                        <span class="neighbour-type ${relationshipClass}">${neighbour.relationship_type || 'Partnership'}</span>
                    </div>
                </div>
                <div class="neighbour-body">
                    <div class="neighbour-stat">
                        <span class="neighbour-stat-label">Border Length</span>
                        <span class="neighbour-stat-value">${borderLength}</span>
                    </div>
                    <div class="neighbour-stat">
                        <span class="neighbour-stat-label">Border Status</span>
                        <span class="neighbour-stat-value">${neighbour.border_status || 'N/A'}</span>
                    </div>
                    <div class="neighbour-stat">
                        <span class="neighbour-stat-label">Trade Volume</span>
                        <span class="neighbour-stat-value">${typeof tradeVolume === 'string' ? tradeVolume : '$' + tradeVolume}</span>
                    </div>
                    ${neighbour.key_issues && neighbour.key_issues.length > 0 ? `
                    <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid rgba(255,255,255,0.1);">
                        <span style="font-size: 0.85rem; color: rgba(255,255,255,0.5);">Key Issues:</span>
                        <div style="margin-top: 0.5rem; display: flex; flex-wrap: wrap; gap: 0.3rem;">
                            ${neighbour.key_issues.slice(0, 3).map(issue => `
                                <span style="font-size: 0.75rem; padding: 0.2rem 0.5rem; background: rgba(255,255,255,0.1); border-radius: 20px;">${truncateText(issue, 25)}</span>
                            `).join('')}
                        </div>
                    </div>
                    ` : ''}
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    container.innerHTML = html;
}

function populateMajorRelations(data) {
    const grid = document.getElementById('relationsGrid');
    const majorPowers = data['04_major_powers'];
    
    if (!majorPowers || Object.keys(majorPowers).length === 0) {
        grid.innerHTML = '<p>Major powers relations data not available.</p>';
        return;
    }
    
    let html = '';
    
    Object.entries(majorPowers).forEach(([code, relation]) => {
        // Skip if it's just a reference to another section
        if (relation.note && !relation.relationship_type) {
            return;
        }
        
        const strengthScore = relation.relationship_strength_score || 50;
        const strengthClass = strengthScore >= 70 ? 'high' : (strengthScore >= 40 ? 'medium' : 'low');
        const flag = relation.flag || getCountryFlag(code);
        
        // Get trade volume
        let tradeDisplay = 'N/A';
        if (relation.trade_volume_usd) {
            if (typeof relation.trade_volume_usd === 'object') {
                tradeDisplay = '$' + relation.trade_volume_usd.total;
            } else {
                tradeDisplay = '$' + relation.trade_volume_usd;
            }
        }
        
        // Get key issues and cooperation areas
        const keyIssues = relation.key_issues || [];
        const cooperationAreas = relation.cooperation_areas || relation.areas_of_cooperation || [];
        
        html += `
            <div class="relation-card" onclick="window.location.href='country.html?code=${code}'">
                <div class="relation-header">
                    <span class="relation-flag">${flag}</span>
                    <div class="relation-title">
                        <h4>${relation.name}</h4>
                        <span class="relation-type">${relation.relationship_type || 'Partnership'}</span>
                    </div>
                    <div class="relation-strength ${strengthClass}">${strengthScore}</div>
                </div>
                <div class="relation-body">
                    ${keyIssues.length > 0 ? `
                    <div class="relation-issues">
                        <h5>Key Issues</h5>
                        <div class="relation-tags">
                            ${keyIssues.slice(0, 4).map(issue => `
                                <span class="relation-tag issue">${truncateText(issue, 20)}</span>
                            `).join('')}
                        </div>
                    </div>
                    ` : ''}
                    
                    ${cooperationAreas.length > 0 ? `
                    <div class="relation-cooperation">
                        <h5>Cooperation Areas</h5>
                        <div class="relation-tags">
                            ${(Array.isArray(cooperationAreas) ? cooperationAreas : Object.keys(cooperationAreas)).slice(0, 4).map(area => `
                                <span class="relation-tag cooperation">${truncateText(typeof area === 'string' ? area : area.toString(), 20)}</span>
                            `).join('')}
                        </div>
                    </div>
                    ` : ''}
                    
                    <div class="relation-trade">
                        <span class="trade-label">Bilateral Trade</span>
                        <span class="trade-value">${tradeDisplay}</span>
                    </div>
                </div>
            </div>
        `;
    });
    
    grid.innerHTML = html || '<p>No major power relations data available.</p>';
}

function populateGroupings(data) {
    const container = document.getElementById('groupingsContent');
    const regionalGroupings = data['05_regional_groupings'] || {};
    const globalGroupings = data['06_global_groupings'] || {};
    
    // Tab functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            tabBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            if (this.dataset.tab === 'regional') {
                renderGroupings(regionalGroupings, container);
            } else {
                renderGroupings(globalGroupings, container);
            }
        });
    });
    
    // Initial render - regional
    renderGroupings(regionalGroupings, container);
}

function renderGroupings(groupings, container) {
    if (!groupings || Object.keys(groupings).length === 0) {
        container.innerHTML = '<p>Groupings data not available.</p>';
        return;
    }
    
    let html = '';
    
    Object.entries(groupings).forEach(([key, group]) => {
        const name = group.name || key.toUpperCase();
        const status = group.membership_status || group.status || 'Member';
        const yearJoined = group.year_joined || group.membership_year || '';
        const role = group.role || '';
        
        // Get icon based on grouping type
        const icon = getGroupingIcon(key);
        
        html += `
            <div class="grouping-card">
                <div class="grouping-header">
                    <div class="grouping-logo">${icon}</div>
                    <div>
                        <div class="grouping-name">${name}</div>
                        <div class="grouping-status">${status} ${yearJoined ? `(since ${yearJoined})` : ''}</div>
                    </div>
                </div>
                <div class="grouping-body">
                    ${role ? `<p>${truncateText(role, 150)}</p>` : ''}
                    ${group.key_positions ? `
                        <div style="margin-top: 0.75rem;">
                            <span style="font-size: 0.8rem; color: rgba(255,255,255,0.5);">Key Positions:</span>
                            <ul style="margin-top: 0.5rem; padding-left: 1rem;">
                                ${(Array.isArray(group.key_positions) ? group.key_positions : []).slice(0, 3).map(p => `
                                    <li style="font-size: 0.85rem; color: rgba(255,255,255,0.7);">${truncateText(p, 50)}</li>
                                `).join('')}
                            </ul>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html || '<p>No groupings data available.</p>';
}

function populateTimeline(data) {
    const container = document.getElementById('timelineContainer');
    const developments = data['11_contemporary_developments'] || {};
    
    // Flatten all years into one array
    let allEvents = [];
    
    Object.entries(developments).forEach(([year, events]) => {
        if (Array.isArray(events)) {
            events.forEach(event => {
                allEvents.push({
                    ...event,
                    year: year
                });
            });
        }
    });
    
    // Sort by date (most recent first)
    allEvents.sort((a, b) => {
        const dateA = a.date || a.year;
        const dateB = b.date || b.year;
        return dateB.localeCompare(dateA);
    });
    
    // Take top 10 events
    allEvents = allEvents.slice(0, 10);
    
    if (allEvents.length === 0) {
        container.innerHTML = '<p>No recent developments data available.</p>';
        return;
    }
    
    let html = '';
    
    allEvents.forEach(event => {
        html += `
            <div class="timeline-item">
                <div class="timeline-date">${event.date || event.year}</div>
                <div class="timeline-content">
                    <h4>${event.event}</h4>
                    ${event.significance ? `<p>${event.significance}</p>` : ''}
                    ${event.category ? `<span class="timeline-tag">${event.category}</span>` : ''}
                    ${event.countries_involved ? `
                        <div style="margin-top: 0.5rem;">
                            ${event.countries_involved.slice(0, 5).map(c => `<span style="margin-right: 0.3rem;">${getCountryFlag(c)}</span>`).join('')}
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

function populateDiaspora(data) {
    const container = document.getElementById('diasporaContent');
    const diaspora = data['10_diaspora'];
    
    if (!diaspora) {
        container.innerHTML = '<p>Diaspora data not available.</p>';
        return;
    }
    
    let html = '';
    
    // Overview card
    html += `
        <div class="diaspora-card">
            <h3><i class="fas fa-globe-americas"></i> Diaspora Overview</h3>
            ${diaspora.total_population ? `
                <div class="diaspora-stat">
                    <span>Total Population Abroad</span>
                    <span class="diaspora-count">${typeof diaspora.total_population === 'number' ? diaspora.total_population.toLocaleString() : diaspora.total_population}</span>
                </div>
            ` : ''}
            ${diaspora.percentage_of_homeland ? `
                <div class="diaspora-stat">
                    <span>Percentage of Homeland</span>
                    <span class="diaspora-count">${diaspora.percentage_of_homeland}%</span>
                </div>
            ` : ''}
            ${diaspora.remittances_usd ? `
                <div class="diaspora-stat">
                    <span>Remittances</span>
                    <span class="diaspora-count">${typeof diaspora.remittances_usd === 'object' ? diaspora.remittances_usd.total || diaspora.remittances_usd.inward : diaspora.remittances_usd}</span>
                </div>
            ` : ''}
        </div>
    `;
    
    // Top destinations
    if (diaspora.top_destinations && diaspora.top_destinations.length > 0) {
        html += `
            <div class="diaspora-card">
                <h3><i class="fas fa-map-marker-alt"></i> Top Destinations</h3>
                ${diaspora.top_destinations.slice(0, 8).map(dest => `
                    <div class="diaspora-stat">
                        <div class="diaspora-country">
                            <span>${getCountryFlag(dest.country) || '🌍'}</span>
                            <span>${dest.country}</span>
                        </div>
                        <span class="diaspora-count">${typeof dest.population === 'number' ? dest.population.toLocaleString() : dest.population}</span>
                    </div>
                `).join('')}
            </div>
        `;
    }
    
    // Engagement policies
    if (diaspora.diaspora_engagement_policies && diaspora.diaspora_engagement_policies.length > 0) {
        html += `
            <div class="diaspora-card">
                <h3><i class="fas fa-hands-helping"></i> Engagement Policies</h3>
                <ul style="list-style: none;">
                    ${diaspora.diaspora_engagement_policies.slice(0, 6).map(policy => `
                        <li style="padding: 0.5rem 0; border-bottom: 1px solid rgba(255,255,255,0.1);">
                            <i class="fas fa-check" style="color: var(--leaf-green); margin-right: 0.5rem;"></i>
                            ${policy}
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
    }
    
    container.innerHTML = html;
}

function populateExamFocus(data) {
    const grid = document.getElementById('examGrid');
    const examFocus = data['13_exam_focus'];
    
    if (!examFocus) {
        grid.innerHTML = '<p>Exam focus data not available.</p>';
        return;
    }
    
    let html = '';
    
    // UPSC Prelims
    if (examFocus.upsc_prelims) {
        const prelims = examFocus.upsc_prelims;
        html += `
            <div class="exam-card">
                <h3><i class="fas fa-file-alt"></i> UPSC Prelims</h3>
                ${prelims.topics ? `
                    <h4 style="font-size: 0.9rem; color: rgba(255,255,255,0.6); margin-bottom: 0.5rem;">Important Topics:</h4>
                    <ul>
                        ${prelims.topics.slice(0, 8).map(t => `<li>${t}</li>`).join('')}
                    </ul>
                ` : ''}
            </div>
        `;
    }
    
    // UPSC Mains
    if (examFocus.upsc_mains) {
        const mains = examFocus.upsc_mains;
        html += `
            <div class="exam-card">
                <h3><i class="fas fa-pen"></i> UPSC Mains (GS2)</h3>
                ${mains.topics ? `
                    <h4 style="font-size: 0.9rem; color: rgba(255,255,255,0.6); margin-bottom: 0.5rem;">Essay/Answer Topics:</h4>
                    <ul>
                        ${mains.topics.slice(0, 6).map(t => `<li>${t}</li>`).join('')}
                    </ul>
                ` : ''}
            </div>
        `;
    }
    
    // Important Facts
    if (examFocus.upsc_prelims?.important_facts || examFocus.must_know_facts) {
        const facts = examFocus.must_know_facts || examFocus.upsc_prelims?.important_facts || [];
        html += `
            <div class="exam-card must-know-facts">
                <h3><i class="fas fa-exclamation-circle"></i> Must-Know Facts</h3>
                <ul>
                    ${facts.slice(0, 10).map(f => `<li>${f}</li>`).join('')}
                </ul>
            </div>
        `;
    }
    
    // SSC
    if (examFocus.ssc_cgl) {
        const ssc = examFocus.ssc_cgl;
        html += `
            <div class="exam-card">
                <h3><i class="fas fa-clipboard-list"></i> SSC CGL</h3>
                ${ssc.fact_based_points ? `
                    <ul>
                        ${ssc.fact_based_points.slice(0, 8).map(f => `<li>${f}</li>`).join('')}
                    </ul>
                ` : ''}
            </div>
        `;
    }
    
    grid.innerHTML = html || '<p>No exam focus data available.</p>';
}

// ============================================
// WORLD MAP VISUALIZATION
// ============================================

function initWorldMap(data) {
    const mapContainer = document.getElementById('worldMap');
    
    // Initialize Leaflet map
    const map = L.map('worldMap', {
        center: [20, 0],
        zoom: 2,
        minZoom: 2,
        maxZoom: 8,
        scrollWheelZoom: true,
        zoomControl: true
    });
    
    // Dark theme tiles
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap, &copy; CARTO',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(map);
    
    // Add markers for relationships
    const neighbours = data['02_immediate_neighbours']?.countries || [];
    const majorPowers = data['04_major_powers'] || {};
    
    // Country coordinates (simplified - you'd want a full database)
    const countryCoords = {
        'IND': [20.5937, 78.9629],
        'CHN': [35.8617, 104.1954],
        'USA': [37.0902, -95.7129],
        'RUS': [61.5240, 105.3188],
        'GBR': [55.3781, -3.4360],
        'FRA': [46.2276, 2.2137],
        'DEU': [51.1657, 10.4515],
        'JPN': [36.2048, 138.2529],
        'BRA': [-14.2350, -51.9253],
        'AUS': [-25.2744, 133.7751],
        'CAN': [56.1304, -106.3468],
        'PAK': [30.3753, 69.3451],
        'BGD': [23.6850, 90.3563],
        'NPL': [28.3949, 84.1240],
        'LKA': [7.8731, 80.7718],
        'MMR': [21.9162, 95.9560],
        'AFG': [33.9391, 67.7100],
        'BTN': [27.5142, 90.4336],
        'TUR': [38.9637, 35.2433],
        'IRN': [32.4279, 53.6880],
        'SAU': [23.8859, 45.0792],
        'ARE': [23.4241, 53.8478],
        'ISR': [31.0461, 34.8516],
        'EGY': [26.8206, 30.8025],
        'ZAF': [-30.5595, 22.9375],
        'NGA': [9.0820, 8.6753],
        'KEN': [-0.0236, 37.9062],
        'ARG': [-38.4161, -63.6167],
        'MEX': [23.6345, -102.5528],
        // Add more as needed
    };
    
    // Get current country coordinates
    const currentCode = data.country_code;
    const currentCoords = countryCoords[currentCode];
    
    if (currentCoords) {
        // Center map on current country
        map.setView(currentCoords, 4);
        
        // Add marker for current country
        const currentMarker = L.circleMarker(currentCoords, {
            radius: 12,
            fillColor: '#F39C12',
            color: '#fff',
            weight: 3,
            opacity: 1,
            fillOpacity: 0.9
        }).addTo(map);
        
        currentMarker.bindPopup(`<b>${data.flag} ${data.country_name}</b><br>Current Country`);
        
        // Add lines to neighbours
        neighbours.forEach(neighbour => {
            const coords = countryCoords[neighbour.code];
            if (coords) {
                // Draw line
                const line = L.polyline([currentCoords, coords], {
                    color: getRelationshipColor(neighbour.relationship_type),
                    weight: 2,
                    opacity: 0.6,
                    dashArray: '5, 5'
                }).addTo(map);
                
                // Add marker
                const marker = L.circleMarker(coords, {
                    radius: 8,
                    fillColor: getRelationshipColor(neighbour.relationship_type),
                    color: '#fff',
                    weight: 2,
                    opacity: 1,
                    fillOpacity: 0.8
                }).addTo(map);
                
                marker.bindPopup(`
                    <b>${neighbour.flag || ''} ${neighbour.name}</b><br>
                    ${neighbour.relationship_type || 'Neighbour'}<br>
                    Border: ${neighbour.border_length_km ? neighbour.border_length_km + ' km' : 'N/A'}
                `);
            }
        });
        
        // Add markers for major powers
        Object.entries(majorPowers).forEach(([code, relation]) => {
            if (code === currentCode || relation.note) return;
            
            const coords = countryCoords[code];
            if (coords) {
                const marker = L.circleMarker(coords, {
                    radius: 6,
                    fillColor: '#3498DB',
                    color: '#fff',
                    weight: 1,
                    opacity: 1,
                    fillOpacity: 0.7
                }).addTo(map);
                
                marker.bindPopup(`
                    <b>${relation.flag || ''} ${relation.name}</b><br>
                    ${relation.relationship_type || 'Major Power'}
                `);
            }
        });
    }
    
    // Update legend
    const legend = document.getElementById('mapLegend');
    legend.innerHTML = `
        <div class="legend-item">
            <div class="legend-color" style="background: #F39C12;"></div>
            <span>Current Country</span>
        </div>
        <div class="legend-item">
            <div class="legend-color" style="background: #27AE60;"></div>
            <span>Friendly Relations</span>
        </div>
        <div class="legend-item">
            <div class="legend-color" style="background: #F1C40F;"></div>
            <span>Complex Relations</span>
        </div>
        <div class="legend-item">
            <div class="legend-color" style="background: #E74C3C;"></div>
            <span>Tense Relations</span>
        </div>
        <div class="legend-item">
            <div class="legend-color" style="background: #3498DB;"></div>
            <span>Major Powers</span>
        </div>
    `;
}

// ============================================
// TRADE CHARTS
// ============================================

function initTradeCharts(data) {
    // Collect trade data from neighbours and major powers
    const tradeData = [];
    
    // From neighbours
    const neighbours = data['02_immediate_neighbours']?.countries || [];
    neighbours.forEach(n => {
        if (n.trade_volume_usd) {
            const value = typeof n.trade_volume_usd === 'object' 
                ? parseFloat(n.trade_volume_usd.total?.replace(/[^0-9.]/g, '')) 
                : parseFloat(n.trade_volume_usd.toString().replace(/[^0-9.]/g, ''));
            if (!isNaN(value) && value > 0) {
                tradeData.push({
                    country: n.name,
                    flag: n.flag || getCountryFlag(n.code),
                    value: value,
                    type: 'Neighbour'
                });
            }
        }
    });
    
    // From major powers
    const majorPowers = data['04_major_powers'] || {};
    Object.entries(majorPowers).forEach(([code, relation]) => {
        if (relation.trade_volume_usd && !relation.note) {
            const tradeObj = relation.trade_volume_usd;
            const value = typeof tradeObj === 'object'
                ? parseFloat(tradeObj.total?.replace(/[^0-9.]/g, ''))
                : parseFloat(tradeObj.toString().replace(/[^0-9.]/g, ''));
            if (!isNaN(value) && value > 0) {
                tradeData.push({
                    country: relation.name,
                    flag: relation.flag || getCountryFlag(code),
                    value: value,
                    type: 'Major Power'
                });
            }
        }
    });
    
    // Sort by value and take top 10
    tradeData.sort((a, b) => b.value - a.value);
    const topTrade = tradeData.slice(0, 10);
    
    if (topTrade.length === 0) {
        document.getElementById('tradeChart').parentElement.innerHTML = '<p style="text-align: center; padding: 2rem;">Trade data not available.</p>';
        document.getElementById('balanceChart').parentElement.innerHTML = '<p style="text-align: center; padding: 2rem;">Trade balance data not available.</p>';
        return;
    }
    
    // Trade Partners Bar Chart
    const tradeCtx = document.getElementById('tradeChart').getContext('2d');
    new Chart(tradeCtx, {
        type: 'bar',
        data: {
            labels: topTrade.map(t => t.country),
            datasets: [{
                label: 'Trade Volume (USD Billions)',
                data: topTrade.map(t => t.value),
                backgroundColor: topTrade.map((t, i) => {
                    const colors = [
                        'rgba(243, 156, 18, 0.8)',
                        'rgba(52, 152, 219, 0.8)',
                        'rgba(39, 174, 96, 0.8)',
                        'rgba(155, 89, 182, 0.8)',
                        'rgba(231, 76, 60, 0.8)',
                        'rgba(26, 188, 156, 0.8)',
                        'rgba(241, 196, 15, 0.8)',
                        'rgba(46, 204, 113, 0.8)',
                        'rgba(142, 68, 173, 0.8)',
                        'rgba(230, 126, 34, 0.8)'
                    ];
                    return colors[i % colors.length];
                }),
                borderColor: 'rgba(255, 255, 255, 0.3)',
                borderWidth: 1,
                borderRadius: 5
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            indexAxis: 'y',
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    callbacks: {
                        label: function(context) {
                            return `$${context.raw.toFixed(1)} billion`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: 'rgba(255, 255, 255, 0.7)',
                        callback: function(value) {
                            return '$' + value + 'B';
                        }
                    }
                },
                y: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: 'rgba(255, 255, 255, 0.9)'
                    }
                }
            }
        }
    });
    
    // Pie chart for trade distribution
    const balanceCtx = document.getElementById('balanceChart').getContext('2d');
    new Chart(balanceCtx, {
        type: 'doughnut',
        data: {
            labels: topTrade.slice(0, 6).map(t => t.country),
            datasets: [{
                data: topTrade.slice(0, 6).map(t => t.value),
                backgroundColor: [
                    'rgba(243, 156, 18, 0.9)',
                    'rgba(52, 152, 219, 0.9)',
                    'rgba(39, 174, 96, 0.9)',
                    'rgba(155, 89, 182, 0.9)',
                    'rgba(231, 76, 60, 0.9)',
                    'rgba(26, 188, 156, 0.9)'
                ],
                borderColor: 'rgba(255, 255, 255, 0.2)',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: 'rgba(255, 255, 255, 0.8)',
                        padding: 15,
                        usePointStyle: true
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    callbacks: {
                        label: function(context) {
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((context.raw / total) * 100).toFixed(1);
                            return `$${context.raw.toFixed(1)}B (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
}

// ============================================
// HELPER FUNCTIONS
// ============================================

function getRelationshipClass(type) {
    if (!type) return 'neutral';
    const lowerType = type.toLowerCase();
    
    if (lowerType.includes('strategic') || lowerType.includes('excellent') || lowerType.includes('friendly') || lowerType.includes('alliance') || lowerType.includes('exceptional')) {
        return 'friendly';
    } else if (lowerType.includes('adversarial') || lowerType.includes('hostile') || lowerType.includes('frozen') || lowerType.includes('no diplomatic')) {
        return 'adversarial';
    } else if (lowerType.includes('complex') || lowerType.includes('strained') || lowerType.includes('tense')) {
        return 'complex';
    }
    return 'neutral';
}

function getRelationshipColor(type) {
    const relClass = getRelationshipClass(type);
    switch (relClass) {
        case 'friendly': return '#27AE60';
        case 'adversarial': return '#E74C3C';
        case 'complex': return '#F1C40F';
        default: return '#3498DB';
    }
}

function getCountryFlag(code) {
    const flags = {
        'IND': '🇮🇳', 'CHN': '🇨🇳', 'USA': '🇺🇸', 'RUS': '🇷🇺', 'GBR': '🇬🇧',
        'FRA': '🇫🇷', 'DEU': '🇩🇪', 'JPN': '🇯🇵', 'BRA': '🇧🇷', 'AUS': '🇦🇺',
        'CAN': '🇨🇦', 'PAK': '🇵🇰', 'BGD': '🇧🇩', 'NPL': '🇳🇵', 'LKA': '🇱🇰',
        'MMR': '🇲🇲', 'AFG': '🇦🇫', 'BTN': '🇧🇹', 'TUR': '🇹🇷', 'IRN': '🇮🇷',
        'SAU': '🇸🇦', 'ARE': '🇦🇪', 'ISR': '🇮🇱', 'EGY': '🇪🇬', 'ZAF': '🇿🇦',
        'NGA': '🇳🇬', 'KEN': '🇰🇪', 'ARG': '🇦🇷', 'MEX': '🇲🇽', 'KOR': '🇰🇷',
        'IDN': '🇮🇩', 'THA': '🇹🇭', 'VNM': '🇻🇳', 'MYS': '🇲🇾', 'SGP': '🇸🇬',
        'PHL': '🇵🇭', 'ITA': '🇮🇹', 'ESP': '🇪🇸', 'NLD': '🇳🇱', 'BEL': '🇧🇪',
        'POL': '🇵🇱', 'UKR': '🇺🇦', 'GRC': '🇬🇷', 'PRT': '🇵🇹', 'SWE': '🇸🇪',
        'NOR': '🇳🇴', 'DNK': '🇩🇰', 'FIN': '🇫🇮', 'CHE': '🇨🇭', 'AUT': '🇦🇹',
        'IRQ': '🇮🇶', 'SYR': '🇸🇾', 'JOR': '🇯🇴', 'LBN': '🇱🇧', 'KWT': '🇰🇼',
        'QAT': '🇶🇦', 'OMN': '🇴🇲', 'BHR': '🇧🇭', 'YEM': '🇾🇪', 'MNG': '🇲🇳',
        'PRK': '🇰🇵', 'KAZ': '🇰🇿', 'UZB': '🇺🇿', 'TKM': '🇹🇲', 'TJK': '🇹🇯',
        'KGZ': '🇰🇬', 'AZE': '🇦🇿', 'GEO': '🇬🇪', 'ARM': '🇦🇲', 'MDV': '🇲🇻',
        'LAO': '🇱🇦', 'KHM': '🇰🇭', 'BRN': '🇧🇳', 'TLS': '🇹🇱', 'NZL': '🇳🇿',
        'FJI': '🇫🇯', 'PNG': '🇵🇬', 'SLB': '🇸🇧', 'BGR': '🇧🇬', 'ROU': '🇷🇴',
        'HUN': '🇭🇺', 'CZE': '🇨🇿', 'SVK': '🇸🇰', 'HRV': '🇭🇷', 'SRB': '🇷🇸',
        'BIH': '🇧🇦', 'MNE': '🇲🇪', 'MKD': '🇲🇰', 'ALB': '🇦🇱', 'XKX': '🇽🇰',
        'LBY': '🇱🇾', 'TUN': '🇹🇳', 'DZA': '🇩🇿', 'MAR': '🇲🇦', 'SDN': '🇸🇩',
        'ETH': '🇪🇹', 'SOM': '🇸🇴', 'DJI': '🇩🇯'
    };
    return flags[code] || '🏳️';
}

function getGroupingIcon(key) {
    const icons = {
        'un': '🇺🇳',
        'nato': '🛡️',
        'eu': '🇪🇺',
        'brics': '🌍',
        'sco': '🏛️',
        'g20': '💼',
        'g7': '🏦',
        'asean': '🌏',
        'ots': '🐺',
        'oic': '☪️',
        'wto': '📦',
        'imf': '💰',
        'world_bank': '🏛️',
        'aiib': '🏗️',
        'saarc': '🌸',
        'bimstec': '🌊',
        'iora': '🌊',
        'commonwealth': '👑',
        'nam': '✊',
        'francophonie': '🇫🇷',
        'd8': '🤝',
        'bsec': '⚓',
        'eco': '🛤️',
        'apec': '🌐',
        'rcep': '📊'
    };
    return icons[key.toLowerCase()] || '🌐';
}

function truncateText(text, maxLength) {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
}

function showError(message) {
    document.getElementById('loadingScreen').classList.add('hidden');
    document.body.innerHTML = `
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh; padding: 2rem; text-align: center; background: #0a1628; color: #fff;">
            <i class="fas fa-exclamation-triangle" style="font-size: 4rem; color: #E74C3C; margin-bottom: 2rem;"></i>
            <h1 style="font-family: 'Playfair Display', serif; margin-bottom: 1rem;">Error Loading Data</h1>
            <p style="color: rgba(255,255,255,0.7); max-width: 500px; margin-bottom: 2rem;">${message}</p>
            <a href="index.html" style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 1rem 2rem; background: linear-gradient(135deg, #F39C12, #E67E22); color: #fff; text-decoration: none; border-radius: 50px; font-weight: 600;">
                <i class="fas fa-home"></i> Return Home
            </a>
        </div>
    `;
}

function initScrollEffects() {
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}
