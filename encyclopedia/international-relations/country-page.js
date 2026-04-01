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
    }

    // ==================== INITIALIZATION ====================
    async function init() {
        cacheElements();
        initTheme();
        
        // Get country code from URL
        const urlParams = new URLSearchParams(window.location.search);
        state.countryCode = urlParams.get('code');
        
        if (!state.countryCode) {
            showError('No country specified');
            return;
        }
        
        // Get basic country data
        state.countryData = getCountryByCode(state.countryCode);
        
        if (!state.countryData) {
            showError('Country not found');
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

    function initTheme() {
        document.documentElement.setAttribute('data-theme', state.theme);
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
    }

    // ==================== DATA LOADING ====================
    async function loadForeignPolicyData() {
        try {
            const response = await fetch(`countries/${state.countryCode}/foreign-policy.json`);
            
            if (!response.ok) {
                console.warn('Foreign policy data not available');
                renderPlaceholderData();
                return;
            }
            
            state.foreignPolicyData = await response.json();
            renderForeignPolicyData();
            
        } catch (error) {
            console.warn('Error loading foreign policy data:', error);
            renderPlaceholderData();
        }
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
    }

    function renderBadges(country) {
        let badgesHTML = '';
        
        // Region badge
        badgesHTML += `<span class="country-badge">${getRegionDisplayName(country.region)}</span>`;
        
        // UNSC permanent member
        if (country.unsc_permanent) {
            badgesHTML += `<span class="country-badge secondary">UNSC P5</span>`;
        }
        
        // Key groupings
        if (country.groupings) {
            const keyGroupings = ['g20', 'g7', 'brics', 'nato', 'quad'];
            country.groupings.forEach(g => {
                if (keyGroupings.includes(g)) {
                    badgesHTML += `<span class="country-badge success">${getGroupingDisplayName(g)}</span>`;
                }
            });
        }
        
        // Data available
        if (country.data_available) {
            badgesHTML += `<span class="country-badge warning">Full Data Available</span>`;
        }
        
        elements.countryBadges.innerHTML = badgesHTML;
    }

    function renderForeignPolicyData() {
        const data = state.foreignPolicyData;
        
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
        const overview = data['01_overview'] || {};
        
        // Foreign Policy Doctrine
        const doctrineEl = document.getElementById('foreignPolicyDoctrine');
        if (overview.foreign_policy_doctrine) {
            doctrineEl.innerHTML = `<p>${overview.foreign_policy_doctrine}</p>`;
        }
        
        // Key Principles
        const principlesEl = document.getElementById('keyPrinciples');
        if (overview.key_principles && overview.key_principles.length > 0) {
            principlesEl.innerHTML = `<ul>${overview.key_principles.map(p => `<li>${p}</li>`).join('')}</ul>`;
        }
        
        // Strategic Objectives
        const objectivesEl = document.getElementById('strategicObjectives');
        if (overview.strategic_objectives && overview.strategic_objectives.length > 0) {
            objectivesEl.innerHTML = `<ul>${overview.strategic_objectives.map(o => `<li>${o}</li>`).join('')}</ul>`;
        }
        
        // Global Positioning
        const positioningEl = document.getElementById('globalPositioning');
        if (overview.global_positioning) {
            positioningEl.innerHTML = `<p>${overview.global_positioning}</p>`;
        }
        
        // Historical Context
        const historyEl = document.getElementById('historicalContext');
        if (overview.historical_context) {
            historyEl.innerHTML = `<p>${overview.historical_context}</p>`;
        }
    }

    function renderNeighbours(data) {
        const neighbours = data['02_immediate_neighbours'] || {};
        
        // Update stats
        document.getElementById('totalNeighbours').textContent = `${neighbours.total || 0} Countries`;
        document.getElementById('totalBorderLength').textContent = `${formatNumber(neighbours.border_length_km || 0)} km border`;
        
        // Render neighbour cards
        const grid = document.getElementById('neighboursGrid');
        if (neighbours.countries && neighbours.countries.length > 0) {
            grid.innerHTML = neighbours.countries.map(n => renderNeighbourCard(n)).join('');
        } else {
            grid.innerHTML = '<p class="no-data">No land borders (Island nation)</p>';
        }
    }

    function renderNeighbourCard(neighbour) {
        const country = getCountryByCode(neighbour.code);
        const relationshipClass = neighbour.relationship_type?.toLowerCase().replace(' ', '-') || 'neutral';
        
        return `
            <div class="neighbour-card">
                <div class="neighbour-header">
                    <span class="neighbour-flag">${country?.flag || '🏳️'}</span>
                    <div class="neighbour-info">
                        <h3>${neighbour.name}</h3>
                        <span class="relationship-type ${relationshipClass}">${neighbour.relationship_type || 'Neutral'}</span>
                    </div>
                </div>
                <div class="neighbour-details">
                    <div class="detail-item">
                        <span class="detail-label">Border Length</span>
                        <span class="detail-value">${formatNumber(neighbour.border_length_km || 0)} km</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Border Status</span>
                        <span class="detail-value">${neighbour.border_status || '-'}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Trade Volume</span>
                        <span class="detail-value">${neighbour.trade_volume_usd || '-'}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Visa Regime</span>
                        <span class="detail-value">${neighbour.people_to_people?.visa_regime || '-'}</span>
                    </div>
                </div>
                ${neighbour.key_issues?.length ? `
                    <div class="neighbour-issues">
                        <h4>Key Issues</h4>
                        <div class="tag-list">
                            ${neighbour.key_issues.map(i => `<span class="tag issue">${i}</span>`).join('')}
                        </div>
                    </div>
                ` : ''}
                ${neighbour.cooperation_areas?.length ? `
                    <div class="neighbour-cooperation">
                        <h4>Cooperation Areas</h4>
                        <div class="tag-list">
                            ${neighbour.cooperation_areas.map(c => `<span class="tag cooperation">${c}</span>`).join('')}
                        </div>
                    </div>
                ` : ''}
                <div class="neighbour-footer">
                    <a href="country.html?code=${neighbour.code}" class="view-details">
                        View ${neighbour.name}'s Profile <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        `;
    }

        function renderMajorPowers(data) {
        const powers = data['04_major_powers'] || {};
        const grid = document.getElementById('majorPowersGrid');
        
        const powerCodes = Object.keys(powers);
        if (powerCodes.length === 0) {
            grid.innerHTML = '<p class="no-data">Major power relations data coming soon</p>';
            return;
        }
        
        grid.innerHTML = powerCodes.map(code => {
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
                            <h3 class="power-name">${power.name || country?.name || code}</h3>
                            <span class="relationship-framework">${power.relationship_framework || 'Bilateral Relations'}</span>
                        </div>
                    </div>
                    <div class="strength-indicator">
                        <span class="strength-score">${power.strength_score || '-'}</span>
                        <span class="strength-label">Strength Score</span>
                    </div>
                </div>
                <div class="power-content">
                    <div class="power-sections">
                        <div class="power-section">
                            <h4><i class="fas fa-shield-alt"></i> Defense</h4>
                            <ul>
                                ${power.defense_cooperation?.joint_exercises?.slice(0, 3).map(ex => `<li>${ex}</li>`).join('') || '<li>Data pending</li>'}
                            </ul>
                        </div>
                        <div class="power-section">
                            <h4><i class="fas fa-chart-bar"></i> Economic</h4>
                            <ul>
                                <li>Trade: ${power.economic_ties?.trade_volume_usd || '-'}</li>
                                <li>FDI: ${power.economic_ties?.fdi_usd || '-'}</li>
                            </ul>
                        </div>
                        <div class="power-section">
                            <h4><i class="fas fa-handshake"></i> Political</h4>
                            <ul>
                                ${power.political_engagement?.convergence_areas?.slice(0, 3).map(area => `<li>${area}</li>`).join('') || '<li>Data pending</li>'}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    function renderGroupings(data) {
        const regional = data['05_regional_groupings'] || {};
        const global = data['06_global_groupings'] || {};
        const exportControl = data['08_export_control_regimes'] || {};
        
        // Render regional by default
        renderGroupingCards('regional', regional);
    }

    function renderGroupingCards(type, groupings) {
        const container = document.getElementById('groupingsContent');
        
        const codes = Object.keys(groupings);
        if (codes.length === 0) {
            container.innerHTML = '<p class="no-data">Grouping data coming soon</p>';
            return;
        }
        
        container.innerHTML = codes.map(code => {
            const group = groupings[code];
            return `
                <div class="grouping-card">
                    <div class="grouping-header">
                        <div class="grouping-name">
                            <h3>${group.name || code.toUpperCase()}</h3>
                            <span>Joined: ${group.year_joined || '-'}</span>
                        </div>
                        <span class="membership-status ${(group.membership_status || 'member').toLowerCase()}">${group.membership_status || 'Member'}</span>
                    </div>
                    <div class="grouping-content">
                        <p>${group.role || ''}</p>
                        ${group.key_initiatives?.length ? `
                            <div class="initiatives">
                                <h4>Key Initiatives</h4>
                                <ul>
                                    ${group.key_initiatives.slice(0, 4).map(i => `<li>${i}</li>`).join('')}
                                </ul>
                            </div>
                        ` : ''}
                    </div>
                </div>
            `;
        }).join('');
    }

    function renderDiaspora(data) {
        const diaspora = data['10_diaspora'] || {};
        const container = document.getElementById('diasporaOverview');
        
        if (!diaspora.total_population) {
            container.innerHTML = '<p class="no-data">Diaspora data coming soon</p>';
            return;
        }
        
        container.innerHTML = `
            <div class="diaspora-stats">
                <div class="diaspora-stat-card">
                    <i class="fas fa-users"></i>
                    <div>
                        <span class="stat-value">${formatNumber(diaspora.total_population)}</span>
                        <span class="stat-label">Total Diaspora Population</span>
                    </div>
                </div>
                <div class="diaspora-stat-card">
                    <i class="fas fa-percentage"></i>
                    <div>
                        <span class="stat-value">${diaspora.percentage_of_homeland || '-'}%</span>
                        <span class="stat-label">Of Home Population</span>
                    </div>
                </div>
                <div class="diaspora-stat-card">
                    <i class="fas fa-money-bill-wave"></i>
                    <div>
                        <span class="stat-value">${diaspora.remittances_usd || '-'}</span>
                        <span class="stat-label">Annual Remittances</span>
                    </div>
                </div>
            </div>
            
            ${diaspora.top_destinations?.length ? `
                <div class="diaspora-destinations">
                    <h3>Top Destinations</h3>
                    <div class="destinations-grid">
                        ${diaspora.top_destinations.slice(0, 6).map(dest => `
                            <div class="destination-card">
                                <span class="dest-country">${dest.country}</span>
                                <span class="dest-population">${formatNumber(dest.population)}</span>
                                <span class="dest-percentage">${dest.percentage}% of diaspora</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
            
            ${diaspora.diaspora_engagement_policies?.length ? `
                <div class="diaspora-policies">
                    <h3>Engagement Policies</h3>
                    <ul>
                        ${diaspora.diaspora_engagement_policies.map(p => `<li>${p}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}
        `;
    }

    function renderTimeline(data) {
        const developments = data['11_contemporary_developments'] || {};
        renderTimelineEvents('2025', developments);
    }

    function renderTimelineEvents(year, developments) {
        const container = document.getElementById('timelineContainer');
        
        let events = [];
        if (year === 'all') {
            Object.keys(developments).forEach(y => {
                if (Array.isArray(developments[y])) {
                    events = events.concat(developments[y].map(e => ({...e, year: y})));
                }
            });
        } else if (developments[year] && Array.isArray(developments[year])) {
            events = developments[year];
        }
        
        if (events.length === 0) {
            container.innerHTML = '<p class="no-data">No events recorded for this period</p>';
            return;
        }
        
        // Sort by date descending
        events.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        container.innerHTML = events.map(event => `
            <div class="timeline-event">
                <span class="event-date">${formatDate(event.date)}</span>
                <div class="event-card">
                    <span class="event-category">${event.category || 'General'}</span>
                    <h4 class="event-title">${event.event}</h4>
                    <p class="event-description">${event.significance || ''}</p>
                    ${event.countries_involved?.length ? `
                        <div class="event-countries">
                            <span>Countries involved: ${event.countries_involved.join(', ')}</span>
                        </div>
                    ` : ''}
                    ${event.exam_relevance ? `
                        <span class="event-exam-tag">${event.exam_relevance}</span>
                    ` : ''}
                </div>
            </div>
        `).join('');
    }

    function renderExamFocus(data) {
        const examFocus = data['13_exam_focus'] || {};
        renderExamContent('upsc', examFocus);
    }

    function renderExamContent(examType, examFocus) {
        const container = document.getElementById('examContent');
        
        let content = '';
        
        if (examType === 'upsc') {
            const upscPrelims = examFocus.upsc_prelims || {};
            const upscMains = examFocus.upsc_mains || {};
            
            content = `
                <div class="exam-card">
                    <h3><i class="fas fa-list-check"></i> Prelims Focus</h3>
                    <ul class="exam-list">
                        ${upscPrelims.important_facts?.slice(0, 10).map(f => `<li>${f}</li>`).join('') || '<li>Content coming soon</li>'}
                    </ul>
                </div>
                <div class="exam-card">
                    <h3><i class="fas fa-pen"></i> Mains Topics (${upscMains.gs_papers?.join(', ') || 'GS2'})</h3>
                    <ul class="exam-list">
                        ${upscMains.topics?.slice(0, 8).map(t => `<li>${t}</li>`).join('') || '<li>Content coming soon</li>'}
                    </ul>
                </div>
                <div class="exam-card">
                    <h3><i class="fas fa-star"></i> Must Know Facts</h3>
                    <ul class="exam-list">
                        ${examFocus.must_know_facts?.slice(0, 10).map(f => `<li>${f}</li>`).join('') || '<li>Content coming soon</li>'}
                    </ul>
                </div>
            `;
        } else if (examType === 'ssc') {
            const ssc = examFocus.ssc_cgl || {};
            
            content = `
                <div class="exam-card">
                    <h3><i class="fas fa-book"></i> Important Topics</h3>
                    <ul class="exam-list">
                        ${ssc.important_topics?.map(t => `<li>${t}</li>`).join('') || '<li>Content coming soon</li>'}
                    </ul>
                </div>
                <div class="exam-card">
                    <h3><i class="fas fa-database"></i> Fact-Based Points</h3>
                    <ul class="exam-list">
                        ${ssc.fact_based_points?.slice(0, 15).map(f => `<li>${f}</li>`).join('') || '<li>Content coming soon</li>'}
                    </ul>
                </div>
            `;
        } else if (examType === 'state') {
            const state = examFocus.state_psc || {};
            
            content = `
                <div class="exam-card">
                    <h3><i class="fas fa-map-marker-alt"></i> State Relevance</h3>
                    <p>${state.relevance || 'Content coming soon'}</p>
                </div>
                <div class="exam-card">
                    <h3><i class="fas fa-bullseye"></i> Focus Areas</h3>
                    <ul class="exam-list">
                        ${state.focus_areas?.map(f => `<li>${f}</li>`).join('') || '<li>Content coming soon</li>'}
                    </ul>
                </div>
            `;
        }
        
        container.innerHTML = content;
    }

    function renderMetadata(data) {
        const metadata = data.metadata || {};
        
        elements.lastUpdated.textContent = data.last_updated || '-';
        elements.dataCompleteness.textContent = metadata.data_completeness || '-';
    }

    function renderPlaceholderData() {
        // Show placeholder message when JSON data isn't available
        const sections = ['foreignPolicyDoctrine', 'keyPrinciples', 'strategicObjectives', 
                          'globalPositioning', 'historicalContext'];
        
        sections.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.innerHTML = `<p class="no-data">Comprehensive foreign policy data for ${state.countryData.name} is being compiled. Check back soon!</p>`;
            }
        });
        
        // Neighbours based on country data
        renderNeighboursFromBasicData();
    }

    function renderNeighboursFromBasicData() {
        const country = state.countryData;
        const grid = document.getElementById('neighboursGrid');
        
        if (!country.neighbors || country.neighbors.length === 0) {
            document.getElementById('totalNeighbours').textContent = '0 Countries';
            document.getElementById('totalBorderLength').textContent = 'Island Nation';
            grid.innerHTML = '<p class="no-data">This is an island nation with no land borders</p>';
            return;
        }
        
        document.getElementById('totalNeighbours').textContent = `${country.neighbors.length} Countries`;
        
        grid.innerHTML = country.neighbors.map(code => {
            const neighbor = getCountryByCode(code);
            if (!neighbor) return '';
            
            return `
                <div class="neighbour-card">
                    <div class="neighbour-header">
                        <span class="neighbour-flag">${neighbor.flag}</span>
                        <div class="neighbour-info">
                            <h3>${neighbor.name}</h3>
                            <span class="relationship-type">Bilateral Relations</span>
                        </div>
                    </div>
                    <div class="neighbour-details">
                        <div class="detail-item">
                            <span class="detail-label">Capital</span>
                            <span class="detail-value">${neighbor.capital}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Population</span>
                            <span class="detail-value">${formatNumber(neighbor.population)}</span>
                        </div>
                    </div>
                    <div class="neighbour-footer">
                        <a href="country.html?code=${neighbor.code}" class="view-details">
                            View ${neighbor.name}'s Profile <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            `;
        }).join('');
    }

    // ==================== EVENT HANDLERS ====================
    function switchSection(sectionId) {
        state.activeSection = sectionId;
        
        // Update tabs
        elements.navTabs.forEach(tab => {
            tab.classList.toggle('active', tab.dataset.section === sectionId);
        });
        
        // Update sections
        elements.contentSections.forEach(section => {
            section.classList.toggle('active', section.id === sectionId);
        });
        
        // Scroll to top of content
        window.scrollTo({
            top: document.querySelector('.country-nav').offsetTop - 70,
            behavior: 'smooth'
        });
    }

    function handleGroupingTabClick(tab) {
        document.querySelectorAll('.grouping-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        const type = tab.dataset.type;
        const data = state.foreignPolicyData || {};
        
        let groupings = {};
        if (type === 'regional') {
            groupings = data['05_regional_groupings'] || {};
        } else if (type === 'global') {
            groupings = data['06_global_groupings'] || {};
        } else if (type === 'export-control') {
            groupings = data['08_export_control_regimes'] || {};
        }
        
        renderGroupingCards(type, groupings);
    }

    function handleTimelineFilterClick(filter) {
        document.querySelectorAll('.timeline-filter').forEach(f => f.classList.remove('active'));
        filter.classList.add('active');
        
        const year = filter.dataset.year;
        const developments = state.foreignPolicyData?.['11_contemporary_developments'] || {};
        renderTimelineEvents(year, developments);
    }

    function handleExamTabClick(tab) {
        document.querySelectorAll('.exam-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        const examType = tab.dataset.exam;
        const examFocus = state.foreignPolicyData?.['13_exam_focus'] || {};
        renderExamContent(examType, examFocus);
    }

    function handleScroll() {
        const header = document.querySelector('.main-header');
        header?.classList.toggle('scrolled', window.scrollY > 50);
    }

    function toggleTheme() {
        state.theme = state.theme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', state.theme);
        localStorage.setItem('theme', state.theme);
        updateThemeIcon();
    }

    function updateThemeIcon() {
        const icon = elements.themeToggle?.querySelector('i');
        if (icon) {
            icon.className = state.theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
        }
    }

    // ==================== UTILITIES ====================
    function showError(message) {
        elements.pageLoader.innerHTML = `
            <div class="error-message">
                <i class="fas fa-exclamation-circle"></i>
                <h2>Error</h2>
                <p>${message}</p>
                <a href="index.html" class="btn-primary">← Back to Home</a>
            </div>
        `;
    }

    function formatDate(dateString) {
        if (!dateString) return '-';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    }

    // ==================== START ====================
    document.addEventListener('DOMContentLoaded', init);

})();
