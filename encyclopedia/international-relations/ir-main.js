/* =====================================================
   GEOTOPIA INTERNATIONAL RELATIONS - MAIN MODULE
   ===================================================== */

document.addEventListener('DOMContentLoaded', function() {
    console.log('🌍 Geotopia IR Module Initialized');
    
    // Initialize all components
    initCountrySelectors();
    initFilters();
    initFeaturedRelations();
    initMajorCountries();
    initCharts();
    initEventListeners();
});

/* =====================================================
   COUNTRY SELECTORS
   ===================================================== */

function initCountrySelectors() {
    const select1 = document.getElementById('country1Select');
    const select2 = document.getElementById('country2Select');
    
    if (!select1 || !select2) return;
    
    // Populate both selects with all countries
    populateCountrySelect(select1);
    populateCountrySelect(select2);
    
    // Search functionality
    const search1 = document.getElementById('country1Search');
    const search2 = document.getElementById('country2Search');
    
    if (search1) {
        search1.addEventListener('input', (e) => filterCountrySelect(select1, e.target.value));
    }
    if (search2) {
        search2.addEventListener('input', (e) => filterCountrySelect(select2, e.target.value));
    }
    
    // Selection change handlers
    select1.addEventListener('change', () => updateCountryPreview(1));
    select2.addEventListener('change', () => updateCountryPreview(2));
}

function populateCountrySelect(selectElement) {
    // Clear existing options except first
    selectElement.innerHTML = '<option value="">-- Choose a country --</option>';
    
    // Group countries by region
    const regions = {
        'asia': { label: '🌏 Asia', countries: [] },
        'europe': { label: '🌍 Europe', countries: [] },
        'americas': { label: '🌎 Americas', countries: [] },
        'africa': { label: '🌍 Africa', countries: [] },
        'middle-east': { label: '🕌 Middle East', countries: [] },
        'oceania': { label: '🏝️ Oceania', countries: [] }
    };
    
    // Sort countries into regions
    for (const [code, data] of Object.entries(IR_DATA.countries)) {
        const region = data.region;
        if (regions[region]) {
            regions[region].countries.push({ code, ...data });
        }
    }
    
    // Sort countries within each region
    for (const region of Object.values(regions)) {
        region.countries.sort((a, b) => a.name.localeCompare(b.name));
    }
    
    // Create optgroups
    for (const [regionKey, regionData] of Object.entries(regions)) {
        if (regionData.countries.length === 0) continue;
        
        const optgroup = document.createElement('optgroup');
        optgroup.label = regionData.label;
        
        for (const country of regionData.countries) {
            const option = document.createElement('option');
            option.value = country.code;
            option.textContent = `${country.flag} ${country.name}`;
            option.dataset.region = regionKey;
            option.dataset.name = country.name.toLowerCase();
            optgroup.appendChild(option);
        }
        
        selectElement.appendChild(optgroup);
    }
}

function filterCountrySelect(selectElement, query) {
    const lowerQuery = query.toLowerCase();
    const options = selectElement.querySelectorAll('option');
    
    options.forEach(option => {
        if (!option.value) return; // Skip placeholder
        const name = option.dataset.name || option.textContent.toLowerCase();
        option.style.display = name.includes(lowerQuery) ? '' : 'none';
    });
}

function updateCountryPreview(num) {
    const select = document.getElementById(`country${num}Select`);
    const flagImg = document.getElementById(`country${num}Flag`);
    const nameSpan = document.getElementById(`country${num}Name`);
    
    const code = select.value;
    const country = IR_DATA.getCountry(code);
    
    if (country) {
        flagImg.src = IR_DATA.getFlagUrl(code);
        flagImg.alt = country.name;
        flagImg.style.display = 'block';
        nameSpan.textContent = country.name;
    } else {
        flagImg.style.display = 'none';
        nameSpan.textContent = 'Select a country';
    }
    
    // Check if both countries are selected
    checkSelectionComplete();
}

function checkSelectionComplete() {
    const code1 = document.getElementById('country1Select').value;
    const code2 = document.getElementById('country2Select').value;
    const exploreBtn = document.getElementById('exploreBtn');
    const exploreHint = document.getElementById('exploreHint');
    
    if (code1 && code2 && code1 !== code2) {
        exploreBtn.disabled = false;
        exploreHint.textContent = 'Click to explore this relationship!';
        exploreHint.style.color = 'var(--success-color)';
    } else if (code1 === code2 && code1) {
        exploreBtn.disabled = true;
        exploreHint.textContent = 'Please select two different countries';
        exploreHint.style.color = 'var(--warning-color)';
    } else {
        exploreBtn.disabled = true;
        exploreHint.textContent = 'Select two different countries to explore';
        exploreHint.style.color = '';
    }
}

/* =====================================================
   FILTERS
   ===================================================== */

function initFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Apply filter
            const filter = btn.dataset.filter;
            applyRegionFilter(filter);
        });
    });
}

function applyRegionFilter(region) {
    const selects = [
        document.getElementById('country1Select'),
        document.getElementById('country2Select')
    ];
    
    selects.forEach(select => {
        const options = select.querySelectorAll('option');
        const optgroups = select.querySelectorAll('optgroup');
        
        optgroups.forEach(group => {
            group.style.display = '';
        });
        
        options.forEach(option => {
            if (!option.value) return;
            const optRegion = option.dataset.region;
            if (region === 'all' || optRegion === region) {
                option.style.display = '';
            } else {
                option.style.display = 'none';
            }
        });
        
        // Hide empty optgroups
        optgroups.forEach(group => {
            const visibleOptions = group.querySelectorAll('option:not([style*="display: none"])');
            group.style.display = visibleOptions.length > 0 ? '' : 'none';
        });
    });
}

/* =====================================================
   FEATURED RELATIONS
   ===================================================== */

function initFeaturedRelations() {
    const grid = document.getElementById('featuredGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    IR_DATA.featuredRelations.forEach(relation => {
        const c1 = IR_DATA.getCountry(relation.country1);
        const c2 = IR_DATA.getCountry(relation.country2);
        
        if (!c1 || !c2) return;
        
        const card = document.createElement('a');
        card.href = `relationship.html?c1=${relation.country1}&c2=${relation.country2}`;
        card.className = 'featured-card';
        
        card.innerHTML = `
            <div class="flags">
                <img src="${IR_DATA.getFlagUrl(relation.country1)}" alt="${c1.name}">
                <span>⇄</span>
                <img src="${IR_DATA.getFlagUrl(relation.country2)}" alt="${c2.name}">
            </div>
            <h4>${c1.name} & ${c2.name}</h4>
            <div class="type-badge ${relation.type}">${relation.label}</div>
        `;
        
        grid.appendChild(card);
    });
}

/* =====================================================
   MAJOR COUNTRIES
   ===================================================== */

function initMajorCountries() {
    const grid = document.getElementById('majorCountriesGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    IR_DATA.majorCountries.forEach(code => {
        const country = IR_DATA.getCountry(code);
        if (!country) return;
        
        const card = document.createElement('div');
        card.className = 'major-country-card';
        card.onclick = () => selectMajorCountry(code);
        
        card.innerHTML = `
            <img src="${IR_DATA.getFlagUrl(code)}" alt="${country.name}">
            <p>${country.name}</p>
        `;
        
        grid.appendChild(card);
    });
}

function selectMajorCountry(code) {
    const select1 = document.getElementById('country1Select');
    if (select1.value) {
        // If country 1 is already selected, set country 2
        const select2 = document.getElementById('country2Select');
        select2.value = code;
        updateCountryPreview(2);
    } else {
        // Set country 1
        select1.value = code;
        updateCountryPreview(1);
    }
    
    // Scroll to selector
    document.querySelector('.selector-section').scrollIntoView({ behavior: 'smooth' });
}

/* =====================================================
   EXPLORE BUTTON & RELATIONSHIP DISPLAY
   ===================================================== */

function initEventListeners() {
    // Explore button
    const exploreBtn = document.getElementById('exploreBtn');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', showRelationshipPreview);
    }
    
    // Close button
    const closeBtn = document.getElementById('closeSelection');
    if (closeBtn) {
        closeBtn.addEventListener('click', hideRelationshipPreview);
    }
}

async function showRelationshipPreview() {
    const code1 = document.getElementById('country1Select').value;
    const code2 = document.getElementById('country2Select').value;
    
    if (!code1 || !code2) return;
    
    const c1 = IR_DATA.getCountry(code1);
    const c2 = IR_DATA.getCountry(code2);
    
    // Update display
    document.getElementById('pair1Flag').src = IR_DATA.getFlagUrl(code1);
    document.getElementById('pair1Name').textContent = c1.name;
    document.getElementById('pair2Flag').src = IR_DATA.getFlagUrl(code2);
    document.getElementById('pair2Name').textContent = c2.name;
    
    // Get relationship strength
    const strength = IR_DATA.getRelationshipStrength(code1, code2);
    const strengthFill = document.getElementById('strengthFill');
    const strengthValue = document.getElementById('strengthValue');
    
    strengthFill.style.width = `${strength}%`;
    strengthValue.textContent = `${strength}/100`;
    
    // Set relationship type
    const relationshipType = document.getElementById('relationshipType');
    if (strength >= 80) {
        relationshipType.textContent = '🤝 Strong Alliance';
    } else if (strength >= 60) {
        relationshipType.textContent = '👥 Friendly Relations';
    } else if (strength >= 40) {
        relationshipType.textContent = '🤔 Complex Relationship';
    } else if (strength >= 20) {
        relationshipType.textContent = '😐 Strained Relations';
    } else {
        relationshipType.textContent = '⚔️ Hostile/Conflict';
    }
    
    // Update view button
    const viewBtn = document.getElementById('viewRelationshipBtn');
    viewBtn.href = `relationship.html?c1=${code1}&c2=${code2}`;
    
    // Show display
    document.getElementById('selectionDisplay').style.display = 'block';
    
    // Scroll to display
    document.getElementById('selectionDisplay').scrollIntoView({ behavior: 'smooth' });
}

function hideRelationshipPreview() {
    document.getElementById('selectionDisplay').style.display = 'none';
}

/* =====================================================
   CHARTS (using Chart.js)
   ===================================================== */

function initCharts() {
    // Relations by Type Chart
    const relationsCtx = document.getElementById('relationsChart');
    if (relationsCtx) {
        new Chart(relationsCtx, {
            type: 'doughnut',
            data: {
                labels: ['Allies', 'Partners', 'Neutral', 'Strained', 'Hostile'],
                datasets: [{
                    data: [2500, 5000, 8000, 2800, 1006],
                    backgroundColor: [
                        '#2ec4b6',
                        '#ffc857',
                        '#8d99ae',
                        '#ff9f1c',
                        '#e63946'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: { color: '#a0aec0' }
                    }
                }
            }
        });
    }
    
    // Countries by Region Chart
    const regionsCtx = document.getElementById('regionsChart');
    if (regionsCtx) {
        // Count countries per region
        const regionCounts = {};
        for (const country of Object.values(IR_DATA.countries)) {
            regionCounts[country.region] = (regionCounts[country.region] || 0) + 1;
        }
        
        new Chart(regionsCtx, {
            type: 'bar',
            data: {
                labels: ['Africa', 'Asia', 'Europe', 'Americas', 'Middle East', 'Oceania'],
                datasets: [{
                    label: 'Countries',
                    data: [
                        regionCounts['africa'] || 0,
                        regionCounts['asia'] || 0,
                        regionCounts['europe'] || 0,
                        regionCounts['americas'] || 0,
                        regionCounts['middle-east'] || 0,
                        regionCounts['oceania'] || 0
                    ],
                    backgroundColor: '#57c5b6'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: { color: '#a0aec0' },
                        grid: { color: 'rgba(255,255,255,0.1)' }
                    },
                    x: {
                        ticks: { color: '#a0aec0' },
                        grid: { display: false }
                    }
                }
            }
        });
    }
}

/* =====================================================
   UTILITY FUNCTIONS
   ===================================================== */

function showLoading(element) {
    element.innerHTML = '<div class="loading"><div class="spinner"></div></div>';
}

function showError(element, message) {
    element.innerHTML = `<div class="error-message"><i class="fas fa-exclamation-circle"></i> ${message}</div>`;
}
