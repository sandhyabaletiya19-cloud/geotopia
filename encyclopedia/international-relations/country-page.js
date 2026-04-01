/**
 * Unity Atlas - Country Page JavaScript
 * Handles country profile page functionality
 */

(function() {
    'use strict';

    // ==================== STATE ====================
    const state = {
        countryCode: null,
        countryData: null,
        foreignPolicyData: null,
        activeSection: 'overview',
        theme: localStorage.getItem('theme') || 'light'
    };

    // ==================== DOM ELEMENTS ====================
    const elements = {};

    function cacheElements() {
        elements.pageLoader = document.getElementById('pageLoader');
        elements.app = document.getElementById('app');
        elements.breadcrumbCountry = document.getElementById('breadcrumbCountry');
        elements.countryFlag = document.getElementById('countryFlag');
        elements.countryName = document.getElementById('countryName');
        elements.officialName = document.getElementById('officialName');
        elements.countryBadges = document.getElementById('countryBadges');
        elements.capitalCity = document.getElementById('capitalCity');
        elements.population = document.getElementById('population');
        elements.gdp = document.getElementById('gdp');
        elements.area = document.getElementById('area');
        elements.navTabs = document.querySelectorAll('.nav-tab');
        elements.contentSections = document.querySelectorAll('.content-section');
        elements.themeToggle = document.getElementById('themeToggle');
        elements.lastUpdated = document.getElementById('lastUpdated');
        elements.dataCompleteness = document.getElementById('dataCompleteness');
        
        // Section-specific elements
        elements.foreignPolicyDoctrine = document.getElementById('foreignPolicyDoctrine');
        elements.keyPrinciples = document.getElementById('keyPrinciples');
        elements.strategicObjectives = document.getElementById('strategicObjectives');
        elements.globalPositioning = document.getElementById('globalPositioning');
        elements.historicalContext = document.getElementById('historicalContext');
        elements.neighboursGrid = document.getElementById('neighboursGrid');
        elements.majorPowersGrid = document.getElementById('majorPowersGrid');
        elements.groupingsContent = document.getElementById('groupingsContent');
        elements.diasporaOverview = document.getElementById('diasporaOverview');
        elements.timelineContainer = document.getElementById('timelineContainer');
        elements.examContent = document.getElementById('examContent');
    }

    // ==================== INITIALIZATION ====================
    async function init() {
        cacheElements();
        initTheme();
        
        // Get country code from URL
        const urlParams = new URLSearchParams(window.location.search);
        state.countryCode = urlParams.get('code');
        
        if (!state.countryCode) {
            showError('No country specified. Please select a country from the homepage.');
            return;
        }
        
        // Get basic country data from our local array
        state.countryData = getCountryByCode(state.countryCode.toUpperCase());
        
        if (!state.countryData) {
            showError(`Country with code "${state.countryCode}" not found.`);
            return;
        }
        
        // Render basic info immediately
        renderBasicInfo();
        
        // Load foreign policy data
        await loadForeignPolicyData();
        
        // Initialize event listeners
        initEventListeners();
        
        // Hide loader
        setTimeout(() => {
            elements.pageLoader.classList.add('hidden');
            elements.app.classList.add('loaded');
        }, 500);
    }

    function showError(message) {
        elements.pageLoader.innerHTML = `
            <div class="error-state">
                <i class="fas fa-exclamation-triangle"></i>
                <h2>Error</h2>
                <p>${message}</p>
                <a href="index.html" class="btn-primary">← Back to Homepage</a>
            </div>
        `;
    }

    function initTheme() {
        document.documentElement.setAttribute('data-theme', state.theme);
        updateThemeIcon();
    }

    function updateThemeIcon() {
        const icon = elements.themeToggle?.querySelector('i');
        if (icon) {
            icon.className = state.theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
        }
    }

    function toggleTheme() {
        state.theme = state.theme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', state.theme);
        localStorage.setItem('theme', state.theme);
        updateThemeIcon();
    }

    function initEventListeners() {
        // Navigation tabs
        elements.navTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const section = tab.dataset.section;
                switchSection(section);
            });
        });
        
        // Theme toggle
        elements.themeToggle?.addEventListener('click', toggleTheme);
        
        // Scroll behavior for sticky nav
        window.addEventListener('scroll', handleScroll);
        
        // Grouping tabs
        document.querySelectorAll('.grouping-tab').forEach(tab => {
            tab.addEventListener('click', () => handleGroupingTabClick(tab));
        });
        
        // Timeline filters
        document.querySelectorAll('.timeline-filter').forEach(filter => {
            filter.addEventListener('click', () => handleTimelineFilterClick(filter));
        });
        
        // Exam tabs
        document.querySelectorAll('.exam-tab').forEach(tab => {
            tab.addEventListener('click', () => handleExamTabClick(tab));
        });

        // Download and share buttons
        document.getElementById('downloadData')?.addEventListener('click', downloadCountryData);
        document.getElementById('shareBtn')?.addEventListener('click', shareCountry);
    }

    function handleScroll() {
        const header = document.querySelector('.main-header');
        header?.classList.toggle('scrolled', window.scrollY > 50);
    }

    function switchSection(sectionId) {
        // Update tabs
        elements.navTabs.forEach(tab => {
            tab.classList.toggle('active', tab.dataset.section === sectionId);
        });
        
        // Update sections
        elements.contentSections.forEach(section => {
            section.classList.toggle('active', section.id === sectionId);
        });
        
        state.activeSection = sectionId;
        
        // Scroll to top of content
        document.querySelector('.country-content')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // ==================== DATA LOADING ====================
    async function loadForeignPolicyData() {
        try {
            // NEW SIMPLER PATH: countries/ind-fp.json
            const url = `countries/${state.countryCode.toLowerCase()}-fp.json`;
            console.log('Loading foreign policy data from:', url);
            
            const response = await fetch(url);
            
            if (!response.ok) {
                console.warn(`Foreign policy data not available for ${state.countryCode}`);
                renderPlaceholderData();
                return;
            }
            
            state.foreignPolicyData = await response.json();
            console.log('Foreign policy data loaded successfully');
            renderForeignPolicyData();
            
        } catch (error) {
            console.warn('Error loading foreign policy data:', error);
            renderPlaceholderData();
        }
    }

    function renderPlaceholderData() {
        // Show placeholder content when data is not available
        const placeholderHTML = `
            <div class="placeholder-content">
                <i class="fas fa-database"></i>
                <h3>Data Coming Soon</h3>
                <p>Comprehensive foreign policy data for ${state.countryData.name} is being compiled.</p>
                <p>Check back soon for complete coverage.</p>
            </div>
        `;
        
        elements.foreignPolicyDoctrine.innerHTML = placeholderHTML;
        elements.keyPrinciples.innerHTML = '<p>Data being compiled...</p>';
        elements.strategicObjectives.innerHTML = '<p>Data being compiled...</p>';
        elements.globalPositioning.innerHTML = '<p>Data being compiled...</p>';
        elements.historicalContext.innerHTML = '<p>Data being compiled...</p>';
        
        // Basic neighbour info from country-data.js
        if (state.countryData.neighbors && state.countryData.neighbors.length > 0) {
            elements.neighboursGrid.innerHTML = state.countryData.neighbors.map(code => {
                const n = getCountryByCode(code);
                if (!n) return '';
                return `
                    <div class="neighbour-card">
                        <div class="neighbour-header">
                            <span class="neighbour-flag">${n.flag}</span>
                            <div class="neighbour-info">
                                <h3>${n.name}</h3>
                                <span class="relationship-type neutral">Data Pending</span>
                            </div>
                        </div>
                        <div class="neighbour-footer">
                            <a href="country.html?code=${n.code}" class="view-details">
                                View ${n.name}'s Profile <i class="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                `;
            }).join('');
        } else {
            elements.neighboursGrid.innerHTML = '<p class="no-data">Island nation - No land borders</p>';
        }
        
        // Update footer
        elements.lastUpdated.textContent = 'Pending';
        elements.dataCompleteness.textContent = '0%';
    }

    // ==================== RENDERING ====================
    function renderBasicInfo() {
        const country = state.countryData;
        
        // Update document title
        document.title = `${country.name} - Foreign Policy | Unity Atlas`;
        
        // Hero section
        elements.breadcrumbCountry.textContent = country.name;
        elements.countryFlag.textContent = country.flag;
        elements.countryName.textContent = country.name;
        elements.officialName.textContent = country.official_name;
        
        // Quick stats
        elements.capitalCity.textContent = country.capital;
        elements.population.textContent = formatNumber(country.population);
        elements.gdp.textContent = '$' + formatNumber(country.gdp_usd);
        elements.area.textContent = formatNumber(country.area_km2);
        
        // Badges
        renderBadges(country);
        
        // Setup navigation arrows
        setupCountryNavigation();
    }

    function renderBadges(country) {
        let badgesHTML = '';
        
        // Region badge
        badgesHTML += `<span class="country-badge">${getRegionDisplayName(country.region)}</span>`;
        
        // UNSC permanent member
        if (country.unsc_permanent) {
            badgesHTML += `<span class="country-badge secondary">UNSC P5</span>`;
        }
        
        // Key groupings (show max 4)
        if (country.groupings) {
            const keyGroupings = ['g20', 'g7', 'brics', 'nato', 'quad', 'eu', 'asean'];
            let count = 0;
            country.groupings.forEach(g => {
                if (keyGroupings.includes(g) && count < 4) {
                    badgesHTML += `<span class="country-badge success">${getGroupingDisplayName(g)}</span>`;
                    count++;
                }
            });
        }
        
        // Data available
        if (country.data_available) {
            badgesHTML += `<span class="country-badge warning"><i class="fas fa-check"></i> Full Data</span>`;
        }
        
        elements.countryBadges.innerHTML = badgesHTML;
    }

    function setupCountryNavigation() {
        // Find current country index
        const currentIndex = COUNTRIES_DATA.findIndex(c => c.code === state.countryCode.toUpperCase());
        
        const prevBtn = document.getElementById('prevCountry');
        const nextBtn = document.getElementById('nextCountry');
        
        if (currentIndex > 0) {
            const prevCountry = COUNTRIES_DATA[currentIndex - 1];
            prevBtn.href = `country.html?code=${prevCountry.code}`;
            prevBtn.innerHTML = `<i class="fas fa-chevron-left"></i> ${prevCountry.name}`;
        } else {
            prevBtn.style.visibility = 'hidden';
        }
        
        if (currentIndex < COUNTRIES_DATA.length - 1) {
            const nextCountry = COUNTRIES_DATA[currentIndex + 1];
            nextBtn.href = `country.html?code=${nextCountry.code}`;
            nextBtn.innerHTML = `${nextCountry.name} <i class="fas fa-chevron-right"></i>`;
        } else {
            nextBtn.style.visibility = 'hidden';
        }
    }

    function renderForeignPolicyData() {
        const data = state.foreignPolicyData;
        
        if (!data) {
            renderPlaceholderData();
            return;
        }
        
        // Overview section
        renderOverview(data);
        
        // Neighbours section
        renderNeighbours(data);
        
        // Major powers section
        renderMajorPowers(data);
        
        // Groupings section
        renderGroupings(data);
        
        // Diaspora section
        renderDiaspora(data);
        
        // Timeline section
        renderTimeline(data);
        
        // Exam section
        renderExamFocus(data);
        
        // Footer metadata
        renderMetadata(data);
    }

    function renderOverview(data) {
        const overview = data['01_overview'] || data.overview || {};
        
        // Foreign Policy Doctrine
        if (overview.foreign_policy_doctrine) {
            elements.foreignPolicyDoctrine.innerHTML = `<p>${overview.foreign_policy_doctrine}</p>`;
        } else {
            elements.foreignPolicyDoctrine.innerHTML = '<p class="no-data">Doctrine information being compiled...</p>';
        }
        
        // Key Principles
        if (overview.key_principles && overview.key_principles.length > 0) {
            elements.keyPrinciples.innerHTML = `
                <ul>
                    ${overview.key_principles.map(p => `<li>${p}</li>`).join('')}
                </ul>
            `;
        } else {
            elements.keyPrinciples.innerHTML = '<p class="no-data">Data being compiled...</p>';
        }
        
        // Strategic Objectives
        if (overview.strategic_objectives && overview.strategic_objectives.length > 0) {
            elements.strategicObjectives.innerHTML = `
                <ul>
                    ${overview.strategic_objectives.map(o => `<li>${o}</li>`).join('')}
                </ul>
            `;
        } else {
            elements.strategicObjectives.innerHTML = '<p class="no-data">Data being compiled...</p>';
        }
        
        // Global Positioning
        if (overview.global_positioning) {
            elements.globalPositioning.innerHTML = `<p>${overview.global_positioning}</p>`;
        }
        
        // Historical Context
        if (overview.historical_context) {
            elements.historicalContext.innerHTML = `<p>${overview.historical_context}</p>`;
        }
    }

    function renderNeighbours(data) {
        const neighbours = data['02_immediate_neighbours'] || data.immediate_neighbours || {};
        
        // Update stats
        const totalEl = document.getElementById('totalNeighbours');
        const borderEl = document.getElementById('totalBorderLength');
        
        if (totalEl) totalEl.textContent = `${neighbours.total || state.countryData.neighbors?.length || 0} Countries`;
        if (borderEl) borderEl.textContent = `${formatNumber(neighbours.border_length_km || 0)} km border`;
        
        // Render neighbour cards
        const countries = neighbours.countries || [];
        
        if (countries.length > 0) {
            elements.neighboursGrid.innerHTML = countries.map(n => renderNeighbourCard(n)).join('');
        } else if (state.countryData.neighbors && state.countryData.neighbors.length > 0) {
            // Fallback to basic data
            elements.neighboursGrid.innerHTML = state.countryData.neighbors.map(code => {
                const c = getCountryByCode(code);
                if (!c) return '';
                return `
                    <div class="neighbour-card">
                        <div class="neighbour-header">
                            <span class="neighbour-flag">${c.flag}</span>
                            <div class="neighbour-info">
                                <h3>${c.name}</h3>
                            </div>
                        </div>
                        <div class="neighbour-footer">
                            <a href="country.html?code=${c.code}" class="view-details">
                                View Profile <i class="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                `;
            }).join('');
        } else {
            elements.neighboursGrid.innerHTML = `
                <div class="no-data-card">
                    <i class="fas fa-water"></i>
                    <p>Island Nation - No Land Borders</p>
                </div>
            `;
        }
    }

    function renderNeighbourCard(neighbour) {
        const country = getCountryByCode(neighbour.code);
        const relationshipClass = (neighbour.relationship_type || 'neutral').toLowerCase().replace(/\s+/g, '-');
        
        return `
            <div class="neighbour-card">
                <div class="neighbour-header">
                    <span class="neighbour-flag">${country?.flag || '🏳️'}</span>
                    <div class="neighbour-info">
                        <h3>${neighbour.name || country?.name || 'Unknown'}</h3>
                        <span class="relationship-type ${relationshipClass}">
                            ${neighbour.relationship_type || 'Neutral'}
                        </span>
                    </div>
                </div>
                
                <div class="neighbour-details">
                    ${neighbour.border_length_km ? `
                        <div class="detail-item">
                            <span class="detail-label">Border Length</span>
                            <span class="detail-value">${formatNumber(neighbour.border_length_km)} km</span>
                        </div>
                    ` : ''}
                    ${neighbour.border_status ? `
                        <div class="detail-item">
                            <span class="detail-label">Border Status</span>
                            <span class="detail-value">${neighbour.border_status}</span>
                        </div>
                    ` : ''}
                    ${neighbour.trade_volume_usd ? `
                        <div class="detail-item">
                            <span class="detail-label">Trade Volume</span>
                            <span class="detail-value">${neighbour.trade_volume_usd}</span>
                        </div>
                    ` : ''}
                    ${neighbour.people_to_people?.visa_regime ? `
                        <div class="detail-item">
                            <span class="detail-label">Visa Regime</span>
                            <span class="detail-value">${neighbour.people_to_people.visa_regime}</span>
                        </div>
                    ` : ''}
                </div>
                
                ${neighbour.key_issues && neighbour.key_issues.length > 0 ? `
                    <div class="neighbour-issues">
                        <h4>Key Issues</h4>
                        <div class="tag-list">
                            ${neighbour.key_issues.slice(0, 4).map(i => `<span class="tag issue">${i}</span>`).join('')}
                        </div>
                    </div>
                ` : ''}
                
                ${neighbour.cooperation_areas && neighbour.cooperation_areas.length > 0 ? `
                    <div class="neighbour-cooperation">
                        <h4>Cooperation Areas</h4>
                        <div class="tag-list">
                            ${neighbour.cooperation_areas.slice(0, 4).map(c => `<span class="tag cooperation">${c}</span>`).join('')}
                        </div>
                    </div>
                ` : ''}
                
                <div class="neighbour-footer">
                    <a href="country.html?code=${neighbour.code}" class="view-details">
                        View ${neighbour.name || 'Country'}'s Profile <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        `;
    }

    function renderMajorPowers(data) {
        const powers = data['04_major_powers'] || data.major_powers || {};
        const powerCodes = Object.keys(powers);
        
        if (powerCodes.length === 0) {
            elements.majorPowersGrid.innerHTML = `
                <div class="no-data-card full-width">
                    <i class="fas fa-handshake"></i>
                    <p>Major power relations data coming soon</p>
                </div>
            `;
            return;
        }
        
        elements.majorPowersGrid.innerHTML = powerCodes.map(code => {
            const power = powers[code];
            const country = getCountryByCode(code);
            return renderMajorPowerCard(code, power, country);
        }).join('');
    }

    function renderMajorPowerCard(code, power, country) {
        return `
            <div class="power-card">
                <div class="power-header">
                    <div class="power-identity">
                        <span class="power-flag">${country?.flag || '🏳️'}</span>
                        <div>
                            <span class="power-name">${power.name || country?.name || code}</span>
                            ${power.relationship_framework ? `
                                <span class="relationship-framework">${power.relationship_framework}</span>
                            ` : ''}
                        </div>
                    </div>
                    ${power.strength_score ? `
                        <div class="strength-indicator">
                            <span class="strength-score">${power.strength_score}</span>
                            <span class="strength-label">Strength</span>
                        </div>
                    ` : ''}
                </div>
                
                <div class="power-content">
                    <div class="power-sections">
                        ${power.defense_cooperation ? `
                            <div class="power-section">
                                <h4><i class="fas fa-shield-alt"></i> Defense</h4>
                                <ul>
                                    ${power.defense_cooperation.joint_exercises?.slice(0, 3).map(e => `<li>${e}</li>`).join('') || '<li>Data pending</li>'}
                                </ul>
                            </div>
                        ` : ''}
                        
                        ${power.economic_ties ? `
                            <div class="power-section">
                                <h4><i class="fas fa-chart-line"></i> Economic</h4>
                                <ul>
                                    ${power.economic_ties.trade_volume_usd ? `<li>Trade: ${power.economic_ties.trade_volume_usd}</li>` : ''}
                                    ${power.economic_ties.fdi_usd ? `<li>FDI: ${power.economic_ties.fdi_usd}</li>` : ''}
                                </ul>
                            </div>
                        ` : ''}
                        
                        ${power.political_engagement ? `
                            <div class="power-section">
                                <h4><i class="fas fa-landmark"></i> Political</h4>
                                <ul>
                                    ${power.political_engagement.convergence_areas?.slice(0, 3).map(a => `<li>${a}</li>`).join('') || '<li>Data pending</li>'}
                                </ul>
                            </div>
                        ` : ''}
                    </div>
                </div>
                
                <div class="power-footer">
                    <a href="country.html?code=${code}" class="view-details">
                        View Full Relations <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        `;
    }

    function renderGroupings(data) {
        const regional = data['05_regional_groupings'] || data.regional_groupings || {};
        const global = data['06_global_groupings'] || data.global_groupings || {};
        const exportControl = data['08_export_control_regimes'] || data.export_control_regimes || {};
        
        // Default to regional view
        renderGroupingsContent('regional', regional, global, exportControl);
    }

    function handleGroupingTabClick(tab) {
        document.querySelectorAll('.grouping-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        const type = tab.dataset.type;
        const data = state.foreignPolicyData;
        
        const regional = data['05_regional_groupings'] || data.regional_groupings || {};
        const global = data['06_global_groupings'] || data.global_groupings || {};
        const exportControl = data['08_export_control_regimes'] || data.export_control_regimes || {};
        
        renderGroupingsContent(type, regional, global, exportControl);
    }

    function renderGroupingsContent(type, regional, global, exportControl) {
        let groupings = {};
        
        switch(type) {
            case 'regional':
                groupings = regional;
                break;
            case 'global':
                groupings = global;
                break;
            case 'export-control':
                groupings = exportControl;
                break;
        }
        
        const keys = Object.keys(groupings);
        
        if (keys.length === 0) {
            elements.groupingsContent.innerHTML = `
                <div class="no-data-card">
                    <i class="fas fa-sitemap"></i>
                    <p>No ${type} groupings data available</p>
                </div>
            `;
            return;
        }
        
        elements.groupingsContent.innerHTML = keys.map(key => {
            const g = groupings[key];
            return `
                <div class="grouping-card">
                    <div class="grouping-header">
                        <div class="grouping-name">
                            <h3>${g.name || getGroupingDisplayName(key)}</h3>
                            ${g.year_joined ? `<span>Member since ${g.year_joined}</span>` : ''}
                        </div>
                        <span class="membership-status ${(g.membership_status || 'member').toLowerCase()}">
                            ${g.membership_status || 'Member'}
                        </span>
                    </div>
                    
                    ${g.role ? `<p class="grouping-role">${g.role}</p>` : ''}
                    
                    ${g.contributions && g.contributions.length > 0 ? `
                        <div class="grouping-section">
                            <h4>Contributions</h4>
                            <ul>
                                ${g.contributions.slice(0, 3).map(c => `<li>${c}</li>`).join('')}
                            </ul>
                        </div>
                    ` : ''}
                    
                    ${g.key_initiatives && g.key_initiatives.length > 0 ? `
                        <div class="grouping-section">
                            <h4>Key Initiatives</h4>
                            <div class="tag-list">
                                ${g.key_initiatives.slice(0, 4).map(i => `<span class="tag">${i}</span>`).join('')}
                            </div>
                        </div>
                    ` : ''}
                </div>
            `;
        }).join('');
    }

    function renderDiaspora(data) {
        const diaspora = data['10_diaspora'] || data.diaspora || {};
        
        if (!diaspora.total_population) {
            elements.diasporaOverview.innerHTML = `
                <div class="no-data-card">
                    <i class="fas fa-globe"></i>
                    <p>Diaspora data being compiled</p>
                </div>
            `;
            return;
        }
        
        elements.diasporaOverview.innerHTML = `
            <div class="diaspora-stats">
                <div class="diaspora-stat">
                    <span class="stat-value">${formatNumber(diaspora.total_population)}</span>
                    <span class="stat-label">Total Diaspora</span>
                </div>
                ${diaspora.remittances_usd ? `
                    <div class="diaspora-stat">
                        <span class="stat-value">${diaspora.remittances_usd}</span>
                        <span class="stat-label">Remittances</span>
                    </div>
                ` : ''}
            </div>
            
            ${diaspora.top_destinations && diaspora.top_destinations.length > 0 ? `
                <div class="diaspora-destinations">
                    <h3>Top Destinations</h3>
                    <div class="destinations-grid">
                        ${diaspora.top_destinations.slice(0, 6).map(d => `
                            <div class="destination-card">
                                <span class="destination-country">${d.country}</span>
                                <span class="destination-population">${formatNumber(d.population)}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
        `;
    }

    function renderTimeline(data) {
        const developments = data['11_contemporary_developments'] || data.contemporary_developments || {};
        
        // Get events from all years
        let allEvents = [];
        Object.keys(developments).forEach(year => {
            if (Array.isArray(developments[year])) {
                developments[year].forEach(event => {
                    allEvents.push({ ...event, year });
                });
            }
        });
        
        // Sort by date (most recent first)
        allEvents.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        if (allEvents.length === 0) {
            elements.timelineContainer.innerHTML = `
                <div class="no-data-card">
                    <i class="fas fa-clock"></i>
                    <p>Contemporary developments being documented</p>
                </div>
            `;
            return;
        }
        
        elements.timelineContainer.innerHTML = allEvents.slice(0, 10).map(event => `
            <div class="timeline-event">
                <span class="event-date">${event.date}</span>
                <div class="event-card">
                    <span class="event-category">${event.category || 'General'}</span>
                    <h4 class="event-title">${event.event}</h4>
                    ${event.significance ? `<p class="event-description">${event.significance}</p>` : ''}
                    ${event.countries_involved && event.countries_involved.length > 0 ? `
                        <div class="event-countries">
                            ${event.countries_involved.map(c => `<span class="country-tag">${c}</span>`).join('')}
                        </div>
                    ` : ''}
                </div>
            </div>
        `).join('');
    }

    function handleTimelineFilterClick(filter) {
        document.querySelectorAll('.timeline-filter').forEach(f => f.classList.remove('active'));
        filter.classList.add('active');
        
        const year = filter.dataset.year;
        const developments = state.foreignPolicyData?.['11_contemporary_developments'] || 
                            state.foreignPolicyData?.contemporary_developments || {};
        
        let events = [];
        
        if (year === 'all') {
            Object.keys(developments).forEach(y => {
                if (Array.isArray(developments[y])) {
                    developments[y].forEach(event => events.push({ ...event, year: y }));
                }
            });
        } else if (developments[year]) {
            events = developments[year].map(e => ({ ...e, year }));
        }
        
        events.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        if (events.length === 0) {
            elements.timelineContainer.innerHTML = `
                <div class="no-data-card">
                    <i class="fas fa-clock"></i>
                    <p>No events recorded for ${year}</p>
                </div>
            `;
            return;
        }
        
        elements.timelineContainer.innerHTML = events.map(event => `
            <div class="timeline-event">
                <span class="event-date">${event.date}</span>
                <div class="event-card">
                    <span class="event-category">${event.category || 'General'}</span>
                    <h4 class="event-title">${event.event}</h4>
                    ${event.significance ? `<p class="event-description">${event.significance}</p>` : ''}
                </div>
            </div>
        `).join('');
    }

    function renderExamFocus(data) {
        const exam = data['13_exam_focus'] || data.exam_focus || {};
        
        // Default to UPSC view
        renderExamContent('upsc', exam);
    }

    function handleExamTabClick(tab) {
        document.querySelectorAll('.exam-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        const examType = tab.dataset.exam;
        const exam = state.foreignPolicyData?.['13_exam_focus'] || 
                    state.foreignPolicyData?.exam_focus || {};
        
        renderExamContent(examType, exam);
    }

    function renderExamContent(examType, examData) {
        let content = '';
        
        switch(examType) {
            case 'upsc':
                const upscPrelims = examData.upsc_prelims || {};
                const upscMains = examData.upsc_mains || {};
                
                content = `
                    <div class="exam-card">
                        <h3><i class="fas fa-list-check"></i> Prelims Focus</h3>
                        ${upscPrelims.important_facts && upscPrelims.important_facts.length > 0 ? `
                            <ul class="exam-list">
                                ${upscPrelims.important_facts.map(f => `<li>${f}</li>`).join('')}
                            </ul>
                        ` : '<p>Data being compiled...</p>'}
                    </div>
                    
                    <div class="exam-card">
                        <h3><i class="fas fa-pen"></i> Mains Focus</h3>
                        ${upscMains.topics && upscMains.topics.length > 0 ? `
                            <ul class="exam-list">
                                ${upscMains.topics.map(t => `<li>${t}</li>`).join('')}
                            </ul>
                        ` : '<p>Data being compiled...</p>'}
                    </div>
                    
                    ${examData.must_know_facts && examData.must_know_facts.length > 0 ? `
                        <div class="exam-card">
                            <h3><i class="fas fa-star"></i> Must-Know Facts</h3>
                            <ul class="exam-list">
                                ${examData.must_know_facts.map(f => `<li>${f}</li>`).join('')}
                            </ul>
                        </div>
                    ` : ''}
                `;
                break;
                
            case 'ssc':
                const ssc = examData.ssc_cgl || {};
                content = `
                    <div class="exam-card">
                        <h3><i class="fas fa-book"></i> Important Topics</h3>
                        ${ssc.important_topics && ssc.important_topics.length > 0 ? `
                            <ul class="exam-list">
                                ${ssc.important_topics.map(t => `<li>${t}</li>`).join('')}
                            </ul>
                        ` : '<p>Data being compiled...</p>'}
                    </div>
                    
                    <div class="exam-card">
                        <h3><i class="fas fa-database"></i> Fact-Based Points</h3>
                        ${ssc.fact_based_points && ssc.fact_based_points.length > 0 ? `
                            <ul class="exam-list">
                                ${ssc.fact_based_points.map(f => `<li>${f}</li>`).join('')}
                            </ul>
                        ` : '<p>Data being compiled...</p>'}
                    </div>
                `;
                break;
                
            case 'state':
                const statePsc = examData.state_psc || {};
                content = `
                    <div class="exam-card">
                        <h3><i class="fas fa-map-marker-alt"></i> State PSC Relevance</h3>
                        <p>${statePsc.relevance || 'Data being compiled...'}</p>
                    </div>
                    
                    ${statePsc.focus_areas && statePsc.focus_areas.length > 0 ? `
                        <div class="exam-card">
                            <h3><i class="fas fa-bullseye"></i> Focus Areas</h3>
                            <ul class="exam-list">
                                ${statePsc.focus_areas.map(a => `<li>${a}</li>`).join('')}
                            </ul>
                        </div>
                    ` : ''}
                `;
                break;
        }
        
        elements.examContent.innerHTML = content || `
            <div class="no-data-card full-width">
                <i class="fas fa-graduation-cap"></i>
                <p>Exam-focused content being compiled</p>
            </div>
        `;
    }

    function renderMetadata(data) {
        const metadata = data.metadata || {};
        
        elements.lastUpdated.textContent = metadata.last_verified || data.last_updated || 'Unknown';
        elements.dataCompleteness.textContent = metadata.data_completeness || '0%';
    }

    // ==================== UTILITIES ====================
    function downloadCountryData() {
        if (!state.foreignPolicyData) {
            alert('No data available to download');
            return;
        }
        
        const dataStr = JSON.stringify(state.foreignPolicyData, null, 2);
        const blob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = `${state.countryCode.toLowerCase()}-foreign-policy.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    function shareCountry() {
        const url = window.location.href;
        const title = `${state.countryData.name} - Foreign Policy | Unity Atlas`;
        
        if (navigator.share) {
            navigator.share({ title, url });
        } else {
            navigator.clipboard.writeText(url).then(() => {
                alert('Link copied to clipboard!');
            });
        }
    }

    // ==================== START ====================
    document.addEventListener('DOMContentLoaded', init);

})();
