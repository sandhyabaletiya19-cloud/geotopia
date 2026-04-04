// ============================================
// UNITY ATLAS - MAIN ENGINE
// Stable, Professional, Working
// ============================================

(function() {
    'use strict';

    // ============================================
    // STATE
    // ============================================
    const STATE = {
        centerCountry: 'US',
        selectedCountry: null,
        hoveredCountry: null,
        relations: [],
        filteredRelations: [],
        filterRegion: 'all',
        filterType: 'all',
        zoom: 1,
        panX: 0,
        panY: 0,
        isDragging: false,
        dragStart: null
    };

    const COLORS = {
        allies: '#00c853',
        strategic: '#2196f3',
        neutral: '#ffc107',
        complex: '#ff9800',
        conflict: '#f44336',
        center: '#00d4ff',
        selected: '#e040fb'
    };

    // ============================================
    // INITIALIZATION
    // ============================================
    function init() {
        console.log('🚀 Unity Atlas Starting...');
        animateLoader();
    }

    function animateLoader() {
        const progress = document.getElementById('loaderProgress');
        let p = 0;

        const interval = setInterval(() => {
            p += Math.random() * 25;
            if (p > 100) p = 100;
            if (progress) progress.style.width = p + '%';

            if (p >= 100) {
                clearInterval(interval);
                setTimeout(startApp, 400);
            }
        }, 150);
    }

    function startApp() {
        const loader = document.getElementById('loader');
        if (loader) loader.classList.add('hidden');

        setupEventListeners();
        populateCountryList();
        setCenter('US');
        
        console.log('✅ Unity Atlas Ready!');
    }

    // ============================================
    // EVENT LISTENERS
    // ============================================
    function setupEventListeners() {
        // Canvas
        const canvas = document.getElementById('mainCanvas');
        if (canvas) {
            canvas.addEventListener('mousedown', onMouseDown);
            canvas.addEventListener('mousemove', onMouseMove);
            canvas.addEventListener('mouseup', onMouseUp);
            canvas.addEventListener('mouseleave', onMouseLeave);
            canvas.addEventListener('wheel', onWheel);
        }

        // Search
        const search = document.getElementById('searchInput');
        if (search) {
            search.addEventListener('input', onSearch);
            search.addEventListener('focus', () => {
                const results = document.getElementById('searchResults');
                if (results && results.children.length > 0) results.classList.add('active');
            });
        }

        // Country filter
        const countrySearch = document.getElementById('countrySearchInput');
        if (countrySearch) {
            countrySearch.addEventListener('input', filterCountryList);
        }

        // Region filter
        const regionFilter = document.getElementById('regionFilter');
        if (regionFilter) {
            regionFilter.addEventListener('change', (e) => {
                STATE.filterRegion = e.target.value;
                filterCountryList();
                applyFilters();
            });
        }

        // Type filter
        const typeFilter = document.getElementById('typeFilter');
        if (typeFilter) {
            typeFilter.addEventListener('change', (e) => {
                STATE.filterType = e.target.value;
                applyFilters();
            });
        }

        // Zoom
        document.getElementById('zoomIn')?.addEventListener('click', () => adjustZoom(0.2));
        document.getElementById('zoomOut')?.addEventListener('click', () => adjustZoom(-0.2));
        document.getElementById('zoomReset')?.addEventListener('click', resetView);

        // Modal
        document.getElementById('modalClose')?.addEventListener('click', closeModal);
        document.getElementById('btnClose')?.addEventListener('click', closeModal);
        document.getElementById('modalOverlay')?.addEventListener('click', (e) => {
            if (e.target.id === 'modalOverlay') closeModal();
        });
        document.getElementById('btnSetAsCenter')?.addEventListener('click', () => {
            if (STATE.selectedCountry) {
                setCenter(STATE.selectedCountry);
                closeModal();
            }
        });

        // Legend
        document.querySelectorAll('.legend-item').forEach(item => {
            item.addEventListener('click', () => {
                const type = item.dataset.type;
                const filter = document.getElementById('typeFilter');
                if (STATE.filterType === type) {
                    STATE.filterType = 'all';
                    if (filter) filter.value = 'all';
                } else {
                    STATE.filterType = type;
                    if (filter) filter.value = type;
                }
                applyFilters();
            });
        });

        // Close search on outside click
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.app-search')) {
                document.getElementById('searchResults')?.classList.remove('active');
            }
        });

        // Resize
        window.addEventListener('resize', render);

        // Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeModal();
        });
    }

    // ============================================
    // COUNTRY LIST
    // ============================================
    function populateCountryList() {
        renderCountryList(COUNTRIES);
    }

    function renderCountryList(countries) {
        const list = document.getElementById('countryList');
        if (!list) return;

        list.innerHTML = countries.map(c => `
            <div class="country-item ${STATE.centerCountry === c.code ? 'active' : ''}" data-code="${c.code}">
                <span class="country-item-flag">${c.flag}</span>
                <div class="country-item-info">
                    <div class="country-item-name">${c.name}</div>
                    <div class="country-item-region">${c.region}</div>
                </div>
            </div>
        `).join('');

        list.querySelectorAll('.country-item').forEach(item => {
            item.addEventListener('click', () => setCenter(item.dataset.code));
        });
    }

    function filterCountryList() {
        const searchInput = document.getElementById('countrySearchInput');
        const query = searchInput ? searchInput.value.toLowerCase() : '';

        let filtered = COUNTRIES;

        if (STATE.filterRegion !== 'all') {
            filtered = filtered.filter(c => c.region === STATE.filterRegion);
        }

        if (query) {
            filtered = filtered.filter(c => 
                c.name.toLowerCase().includes(query) || 
                c.code.toLowerCase().includes(query)
            );
        }

        renderCountryList(filtered);
    }

    // ============================================
    // SEARCH
    // ============================================
    function onSearch(e) {
        const query = e.target.value.toLowerCase().trim();
        const results = document.getElementById('searchResults');
        if (!results) return;

        if (query.length < 2) {
            results.classList.remove('active');
            return;
        }

        const matches = COUNTRIES.filter(c => 
            c.name.toLowerCase().includes(query) ||
            c.code.toLowerCase().includes(query) ||
            c.capital.toLowerCase().includes(query)
        ).slice(0, 8);

        results.innerHTML = matches.map(c => `
            <div class="search-result-item" data-code="${c.code}">
                <span class="search-result-flag">${c.flag}</span>
                <div class="search-result-info">
                    <div class="search-result-name">${c.name}</div>
                    <div class="search-result-meta">${c.capital} • ${c.region}</div>
                </div>
            </div>
        `).join('');

        results.classList.add('active');

        results.querySelectorAll('.search-result-item').forEach(item => {
            item.addEventListener('click', () => {
                setCenter(item.dataset.code);
                e.target.value = '';
                results.classList.remove('active');
            });
        });
    }

    // ============================================
    // SET CENTER
    // ============================================
    function setCenter(code) {
        const country = COUNTRY_MAP[code];
        if (!country) return;

        STATE.centerCountry = code;
        STATE.selectedCountry = null;

        // Generate relations
        STATE.relations = generateRelationsForCountry(code);
        STATE.filteredRelations = [...STATE.relations];

        // Update UI
        updateCenterDisplay(country);
        updateStats();
        render();
        filterCountryList();

        console.log('🎯 Center:', country.flag, country.name);
    }

    function updateCenterDisplay(country) {
        const flag = document.getElementById('centerFlag');
        const name = document.getElementById('centerName');
        if (flag) flag.textContent = country.flag;
        if (name) name.textContent = country.name;
    }

    function updateStats() {
        const stats = { allies: 0, strategic: 0, neutral: 0, complex: 0, conflict: 0 };
        STATE.filteredRelations.forEach(r => {
            if (stats[r.type] !== undefined) stats[r.type]++;
        });

        document.getElementById('countAllies').textContent = stats.allies;
        document.getElementById('countStrategic').textContent = stats.strategic;
        document.getElementById('countNeutral').textContent = stats.neutral;
        document.getElementById('countComplex').textContent = stats.complex;
        document.getElementById('countConflict').textContent = stats.conflict;
    }

    // ============================================
    // FILTERING
    // ============================================
    function applyFilters() {
        STATE.filteredRelations = STATE.relations.filter(r => {
            if (STATE.filterRegion !== 'all' && r.region !== STATE.filterRegion) return false;
            if (STATE.filterType !== 'all' && r.type !== STATE.filterType) return false;
            return true;
        });
        updateStats();
        render();
    }

    // ============================================
    // CANVAS RENDERING
    // ============================================
    function render() {
        const canvas = document.getElementById('mainCanvas');
        const container = document.getElementById('vizContainer');
        if (!canvas || !container) return;

        const ctx = canvas.getContext('2d');
        const rect = container.getBoundingClientRect();

        // Set size
        const dpr = window.devicePixelRatio || 1;
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        canvas.style.width = rect.width + 'px';
        canvas.style.height = rect.height + 'px';
        ctx.scale(dpr, dpr);

        const width = rect.width;
        const height = rect.height;
        const cx = width / 2 + STATE.panX;
        const cy = height / 2 + STATE.panY;

        // Clear
        ctx.clearRect(0, 0, width, height);

        // Base radius
        const baseRadius = Math.min(width, height) * 0.4 * STATE.zoom;

        // Rings
        const rings = [
            { type: 'allies', radius: baseRadius * 0.28, label: 'Allies' },
            { type: 'strategic', radius: baseRadius * 0.48, label: 'Strategic' },
            { type: 'neutral', radius: baseRadius * 0.68, label: 'Neutral' },
            { type: 'complex', radius: baseRadius * 0.85, label: 'Complex' },
            { type: 'conflict', radius: baseRadius, label: 'Conflict' }
        ];

        // Draw rings
        rings.forEach(ring => {
            ctx.beginPath();
            ctx.arc(cx, cy, ring.radius, 0, Math.PI * 2);
            ctx.strokeStyle = COLORS[ring.type];
            ctx.globalAlpha = 0.2;
            ctx.lineWidth = 1.5;
            ctx.setLineDash([6, 4]);
            ctx.stroke();
            ctx.setLineDash([]);
            ctx.globalAlpha = 1;

            // Label
            ctx.font = '10px Inter, sans-serif';
            ctx.fillStyle = COLORS[ring.type];
            ctx.globalAlpha = 0.5;
            ctx.textAlign = 'center';
            ctx.fillText(ring.label, cx, cy - ring.radius - 8);
            ctx.globalAlpha = 1;
        });

        // Group by type
        const groups = {};
        rings.forEach(r => groups[r.type] = []);
        STATE.filteredRelations.forEach(rel => {
            if (groups[rel.type]) groups[rel.type].push(rel);
        });

        // Draw connection for hovered/selected
        const activeCode = STATE.selectedCountry || STATE.hoveredCountry;
        if (activeCode) {
            const activeRel = STATE.filteredRelations.find(r => r.code === activeCode);
            if (activeRel && activeRel._x !== undefined) {
                ctx.beginPath();
                ctx.moveTo(cx, cy);
                ctx.lineTo(activeRel._x, activeRel._y);
                ctx.strokeStyle = COLORS[activeRel.type];
                ctx.globalAlpha = 0.5;
                ctx.lineWidth = 2;
                ctx.stroke();
                ctx.globalAlpha = 1;
            }
        }

        // Draw center
        const center = COUNTRY_MAP[STATE.centerCountry];
        if (center) {
            // Glow
            const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, 55 * STATE.zoom);
            gradient.addColorStop(0, 'rgba(0, 212, 255, 0.3)');
            gradient.addColorStop(1, 'rgba(0, 212, 255, 0)');
            ctx.beginPath();
            ctx.arc(cx, cy, 55 * STATE.zoom, 0, Math.PI * 2);
            ctx.fillStyle = gradient;
            ctx.fill();

            // Circle
            ctx.beginPath();
            ctx.arc(cx, cy, 42 * STATE.zoom, 0, Math.PI * 2);
            ctx.fillStyle = '#0a0a0f';
            ctx.fill();
            ctx.strokeStyle = COLORS.center;
            ctx.lineWidth = 3;
            ctx.stroke();

            // Flag
            ctx.font = `${32 * STATE.zoom}px Arial`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(center.flag, cx, cy);
        }

        // Draw countries on rings
        rings.forEach(ring => {
            const countries = groups[ring.type] || [];
            const count = countries.length;
            if (count === 0) return;

            countries.forEach((rel, i) => {
                const angle = (2 * Math.PI * i / count) - Math.PI / 2;
                const x = cx + Math.cos(angle) * ring.radius;
                const y = cy + Math.sin(angle) * ring.radius;

                // Store position
                rel._x = x;
                rel._y = y;
                rel._r = 22 * STATE.zoom;

                const isSelected = STATE.selectedCountry === rel.code;
                const isHovered = STATE.hoveredCountry === rel.code;

                // Highlight
                if (isSelected || isHovered) {
                    ctx.beginPath();
                    ctx.arc(x, y, 28 * STATE.zoom, 0, Math.PI * 2);
                    ctx.fillStyle = COLORS[rel.type] + '40';
                    ctx.fill();
                }

                // Node
                ctx.beginPath();
                ctx.arc(x, y, 22 * STATE.zoom, 0, Math.PI * 2);
                ctx.fillStyle = '#0a0a0f';
                ctx.fill();
                ctx.strokeStyle = isSelected ? COLORS.selected : COLORS[rel.type];
                ctx.lineWidth = isSelected ? 3 : 2;
                ctx.stroke();

                // Flag
                ctx.font = `${16 * STATE.zoom}px Arial`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(rel.flag, x, y);
            });
        });
    }

    // ============================================
    // CANVAS INTERACTION
    // ============================================
    function onMouseDown(e) {
        STATE.isDragging = true;
        STATE.dragStart = { x: e.clientX - STATE.panX, y: e.clientY - STATE.panY };
        e.target.style.cursor = 'grabbing';
    }

    function onMouseMove(e) {
        const canvas = e.target;
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (STATE.isDragging && STATE.dragStart) {
            STATE.panX = e.clientX - STATE.dragStart.x;
            STATE.panY = e.clientY - STATE.dragStart.y;
            render();
            return;
        }

        // Hit detection
        let found = null;
        for (const rel of STATE.filteredRelations) {
            if (rel._x === undefined) continue;
            const dx = x - rel._x;
            const dy = y - rel._y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < (rel._r || 22) + 5) {
                found = rel;
                break;
            }
        }

        if (found) {
            STATE.hoveredCountry = found.code;
            canvas.style.cursor = 'pointer';
            showTooltip(e, found);
        } else {
            STATE.hoveredCountry = null;
            canvas.style.cursor = STATE.isDragging ? 'grabbing' : 'grab';
            hideTooltip();
        }

        render();
    }

    function onMouseUp(e) {
        if (STATE.hoveredCountry && !STATE.isDragging) {
            openModal(STATE.hoveredCountry);
        }
        STATE.isDragging = false;
        STATE.dragStart = null;
        e.target.style.cursor = STATE.hoveredCountry ? 'pointer' : 'grab';
    }

    function onMouseLeave() {
        STATE.isDragging = false;
        STATE.hoveredCountry = null;
        hideTooltip();
        render();
    }

    function onWheel(e) {
        e.preventDefault();
        adjustZoom(e.deltaY > 0 ? -0.1 : 0.1);
    }

    function adjustZoom(delta) {
        STATE.zoom = Math.max(0.4, Math.min(2.5, STATE.zoom + delta));
        document.getElementById('zoomLevel').textContent = Math.round(STATE.zoom * 100) + '%';
        render();
    }

    function resetView() {
        STATE.zoom = 1;
        STATE.panX = 0;
        STATE.panY = 0;
        document.getElementById('zoomLevel').textContent = '100%';
        render();
    }

    // ============================================
    // TOOLTIP
    // ============================================
    function showTooltip(e, rel) {
        const tooltip = document.getElementById('tooltip');
        if (!tooltip) return;

        tooltip.querySelector('.tooltip-flag').textContent = rel.flag;
        tooltip.querySelector('.tooltip-name').textContent = rel.name;
        tooltip.querySelector('.tooltip-capital').textContent = rel.capital;

        const typeEl = tooltip.querySelector('.tooltip-type');
        typeEl.textContent = rel.type;
        typeEl.className = 'tooltip-type ' + rel.type;

        tooltip.querySelector('.tooltip-score').textContent = rel.strength + '/10';

        tooltip.style.left = (e.pageX + 15) + 'px';
        tooltip.style.top = (e.pageY + 15) + 'px';
        tooltip.classList.add('visible');
    }

    function hideTooltip() {
        document.getElementById('tooltip')?.classList.remove('visible');
    }

    // ============================================
    // MODAL
    // ============================================
    function openModal(code) {
        STATE.selectedCountry = code;
        const rel = STATE.relations.find(r => r.code === code);
        if (!rel) return;

        const overlay = document.getElementById('modalOverlay');
        const center = COUNTRY_MAP[STATE.centerCountry];

        // Header
        document.getElementById('modalFlag1').textContent = center.flag;
        document.getElementById('modalName1').textContent = center.name;
        document.getElementById('modalFlag2').textContent = rel.flag;
        document.getElementById('modalName2').textContent = rel.name;

        const typeEl = document.getElementById('modalType');
        typeEl.textContent = rel.type.toUpperCase();
        typeEl.style.background = COLORS[rel.type];

        // Score
        document.getElementById('modalScoreValue').textContent = rel.strength;
        const scoreFill = document.getElementById('modalScoreFill');
        const circumference = 2 * Math.PI * 52;
        scoreFill.style.strokeDasharray = circumference;
        scoreFill.style.strokeDashoffset = circumference - (rel.strength / 10) * circumference;
        scoreFill.style.stroke = COLORS[rel.type];

        const descriptions = {
            allies: 'Strong alliance characterized by deep institutional ties, mutual defense commitments, and extensive cooperation across all dimensions.',
            strategic: 'Strategic partnership with significant cooperation on shared interests and growing bilateral engagement.',
            neutral: 'Standard diplomatic relations with normal bilateral ties and potential for expanded cooperation.',
            complex: 'Complex relationship characterized by both cooperation and friction, requiring careful management.',
            conflict: 'Adversarial relationship marked by significant tensions, disputes, and limited constructive engagement.'
        };
        document.getElementById('modalScoreDesc').textContent = descriptions[rel.type] || '';

        // Parameters
        renderParameters(rel);

        overlay.classList.add('active');
        render();
    }

    function renderParameters(rel) {
        const list = document.getElementById('parametersList');
        if (!list) return;

        list.innerHTML = PARAMETERS.map(param => {
            const data = rel.params?.[param.id] || {};
            const score = data.score || 5;
            const color = getScoreColor(score);
            const bullets = data.bullets || [];

            return `
                <div class="param-card">
                    <div class="param-header" onclick="this.parentElement.classList.toggle('open')">
                        <div class="param-icon" style="color: ${color}">
                            <i class="fas ${param.icon}"></i>
                        </div>
                        <div class="param-info">
                            <div class="param-name">${param.name}</div>
                            <div class="param-category">${param.category}</div>
                        </div>
                        <div class="param-score-wrap">
                            <div class="param-score-num" style="color: ${color}">${score}/10</div>
                            <div class="param-score-bar">
                                <div class="param-score-fill" style="width: ${score * 10}%; background: ${color}"></div>
                            </div>
                        </div>
                        <i class="fas fa-chevron-down param-toggle"></i>
                    </div>
                    <div class="param-details">
                        <div class="param-details-content">
                            <div class="param-section">
                                <div class="param-section-title">
                                    <i class="fas fa-info-circle"></i> Overview
                                </div>
                                <p class="param-text">${data.summary || param.description}</p>
                            </div>
                            
                            <div class="param-section">
                                <div class="param-section-title">
                                    <i class="fas fa-list"></i> Key Points
                                </div>
                                <ul class="param-bullets">
                                    ${bullets.map(b => `<li>${b}</li>`).join('')}
                                </ul>
                            </div>
                            
                            <div class="param-section">
                                <div class="param-section-title">
                                    <i class="fas fa-clipboard-check"></i> Assessment Factors
                                </div>
                                <ul class="param-bullets">
                                    ${param.factors.slice(0, 5).map(f => `<li>${f}</li>`).join('')}
                                </ul>
                            </div>
                            
                            <div class="param-section">
                                <div class="param-section-title">
                                    <i class="fas fa-file-alt"></i> Analysis
                                </div>
                                <p class="param-text">${data.details || 'Comprehensive assessment based on official diplomatic records, treaty databases, trade statistics, and geopolitical analysis as of 2026.'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        // Add toggle functionality via CSS (already handled by onclick in header)
    }

    function closeModal() {
        document.getElementById('modalOverlay')?.classList.remove('active');
        STATE.selectedCountry = null;
        render();
    }

    function getScoreColor(score) {
        if (score >= 8) return COLORS.allies;
        if (score >= 6) return COLORS.strategic;
        if (score >= 4) return COLORS.neutral;
        if (score >= 2) return COLORS.complex;
        return COLORS.conflict;
    }

    // ============================================
    // PUBLIC API
    // ============================================
    window.UnityAtlas = {
        setCenter,
        openModal,
        closeModal,
        render,
        getState: () => ({ ...STATE })
    };

    // ============================================
    // START
    // ============================================
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
