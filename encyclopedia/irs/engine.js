// ============================================
// UNITY ATLAS - FIXED ENGINE
// ============================================

(function() {
    'use strict';

    console.log('🌍 Unity Atlas Loading...');

    // ============================================
    // STATE
    // ============================================
    const STATE = {
        centerCountry: 'US',
        selectedCountry: null,
        hoveredCountry: null,
        relations: [],
        filteredRelations: [],
        filterType: 'all',
        filterRegion: 'all',
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
        selected: '#e040fb',
        center: '#00d4ff'
    };

    // ============================================
    // INITIALIZATION
    // ============================================
    function init() {
        console.log('🚀 Initializing...');
        
        // Animate loading bar
        let progress = 0;
        const progressBar = document.querySelector('.loader-progress');
        
        const loadInterval = setInterval(() => {
            progress += Math.random() * 30;
            if (progress > 100) progress = 100;
            
            if (progressBar) {
                progressBar.style.width = progress + '%';
            }
            
            if (progress >= 100) {
                clearInterval(loadInterval);
                
                // Wait a moment then show app
                setTimeout(() => {
                    startApp();
                }, 500);
            }
        }, 200);
    }

    function startApp() {
        console.log('📱 Starting App...');
        
        // Hide loader, show app
        const loader = document.getElementById('loader');
        const app = document.getElementById('app');
        
        if (loader) {
            loader.style.opacity = '0';
            loader.style.visibility = 'hidden';
        }
        
        if (app) {
            app.style.opacity = '1';
        }
        
        // Setup everything
        setupEventListeners();
        populateCountryList();
        setCenter('US');
        
        console.log('✅ App Ready!');
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
            canvas.addEventListener('click', onClick);
            canvas.addEventListener('wheel', onWheel);
            canvas.addEventListener('dblclick', onDoubleClick);
        }

        // Search
        const globalSearch = document.getElementById('globalSearch');
        if (globalSearch) {
            globalSearch.addEventListener('input', onSearch);
        }

        // Country filter
        const countryFilter = document.getElementById('countryFilter');
        if (countryFilter) {
            countryFilter.addEventListener('input', onCountryFilter);
        }

        // Region tabs
        document.querySelectorAll('.region-tab').forEach(tab => {
            tab.addEventListener('click', function() {
                document.querySelectorAll('.region-tab').forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                STATE.filterRegion = this.dataset.region;
                filterCountryList();
                applyFilters();
            });
        });

        // Type filter
        const filterType = document.getElementById('filterType');
        if (filterType) {
            filterType.addEventListener('change', function() {
                STATE.filterType = this.value;
                applyFilters();
            });
        }

        // Zoom buttons
        document.getElementById('zoomIn')?.addEventListener('click', () => zoom(0.2));
        document.getElementById('zoomOut')?.addEventListener('click', () => zoom(-0.2));
        document.getElementById('zoomReset')?.addEventListener('click', resetView);

        // Panel close
        document.getElementById('panelClose')?.addEventListener('click', closePanel);

        // Set as center button
        document.getElementById('btnSetCenter')?.addEventListener('click', () => {
            if (STATE.selectedCountry) {
                setCenter(STATE.selectedCountry);
            }
        });

        // Panel tabs
        document.querySelectorAll('.panel-tab').forEach(tab => {
            tab.addEventListener('click', function() {
                document.querySelectorAll('.panel-tab').forEach(t => t.classList.remove('active'));
                document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
                this.classList.add('active');
                const tabId = 'tab' + this.dataset.tab.charAt(0).toUpperCase() + this.dataset.tab.slice(1);
                document.getElementById(tabId)?.classList.add('active');
            });
        });

        // Legend items
        document.querySelectorAll('.legend-item').forEach(item => {
            item.addEventListener('click', function() {
                const type = this.dataset.type;
                const filterSelect = document.getElementById('filterType');
                if (STATE.filterType === type) {
                    STATE.filterType = 'all';
                    if (filterSelect) filterSelect.value = 'all';
                } else {
                    STATE.filterType = type;
                    if (filterSelect) filterSelect.value = type;
                }
                applyFilters();
            });
        });

        // Window resize
        window.addEventListener('resize', render);

        // Click outside to close search
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.header-search')) {
                const results = document.getElementById('searchResults');
                if (results) results.classList.remove('active');
            }
        });
    }

    // ============================================
    // COUNTRY LIST
    // ============================================
    function populateCountryList() {
        filterCountryList();
    }

    function filterCountryList() {
        const list = document.getElementById('countryList');
        if (!list) return;

        const filter = document.getElementById('countryFilter');
        const query = filter ? filter.value.toLowerCase() : '';
        
        let countries = COUNTRIES;
        
        if (STATE.filterRegion !== 'all') {
            countries = countries.filter(c => c.region === STATE.filterRegion);
        }
        
        if (query) {
            countries = countries.filter(c => 
                c.name.toLowerCase().includes(query) || 
                c.code.toLowerCase().includes(query)
            );
        }

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

    function onCountryFilter() {
        filterCountryList();
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

        results.innerHTML = matches.map(c => {
            const rel = STATE.relations.find(r => r.code === c.code);
            return `
                <div class="search-item" data-code="${c.code}">
                    <span class="search-item-flag">${c.flag}</span>
                    <div class="search-item-info">
                        <div class="search-item-name">${c.name}</div>
                        <div class="search-item-meta">${c.capital} • ${c.region}</div>
                    </div>
                    ${rel ? `<span class="search-item-badge ${rel.type}">${rel.type}</span>` : ''}
                </div>
            `;
        }).join('');

        results.classList.add('active');

        results.querySelectorAll('.search-item').forEach(item => {
            item.addEventListener('click', () => {
                setCenter(item.dataset.code);
                e.target.value = '';
                results.classList.remove('active');
            });
        });
    }

    // ============================================
    // SET CENTER COUNTRY
    // ============================================
    function setCenter(code) {
        const country = COUNTRY_MAP[code];
        if (!country) {
            console.error('Country not found:', code);
            return;
        }

        console.log('🎯 Setting center to:', country.name);

        STATE.centerCountry = code;
        STATE.selectedCountry = null;

        // Generate relations
        STATE.relations = generateRelationsForCountry(code);
        STATE.filteredRelations = [...STATE.relations];

        // Update UI
        updateCenterDisplay();
        updateStats();
        applyFilters();
        filterCountryList();
        closePanel();

        // Update title
        const title = document.getElementById('vizTitle');
        if (title) {
            title.textContent = `${country.flag} ${country.name} - Global Relations`;
        }
    }

    function updateCenterDisplay() {
        const display = document.getElementById('centerDisplay');
        const country = COUNTRY_MAP[STATE.centerCountry];
        
        if (display && country) {
            display.innerHTML = `
                <span class="center-flag">${country.flag}</span>
                <span class="center-name">${country.name}</span>
            `;
        }
    }

    function updateStats() {
        const stats = { allies: 0, strategic: 0, neutral: 0, complex: 0, conflict: 0 };
        
        STATE.filteredRelations.forEach(r => {
            if (stats[r.type] !== undefined) stats[r.type]++;
        });

        const grid = document.getElementById('statsGrid');
        if (grid) {
            grid.innerHTML = Object.entries(stats).map(([type, count]) => `
                <div class="stat-item ${type}">
                    <span class="stat-num">${count}</span>
                    <span class="stat-label">${type}</span>
                </div>
            `).join('');
        }
    }

    // ============================================
    // FILTERING
    // ============================================
    function applyFilters() {
        STATE.filteredRelations = STATE.relations.filter(r => {
            if (STATE.filterType !== 'all' && r.type !== STATE.filterType) return false;
            if (STATE.filterRegion !== 'all' && r.region !== STATE.filterRegion) return false;
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
        
        // Set canvas size
        canvas.width = rect.width * window.devicePixelRatio;
        canvas.height = rect.height * window.devicePixelRatio;
        canvas.style.width = rect.width + 'px';
        canvas.style.height = rect.height + 'px';
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

        const width = rect.width;
        const height = rect.height;
        const cx = width / 2 + STATE.panX;
        const cy = height / 2 + STATE.panY;

        // Clear
        ctx.clearRect(0, 0, width, height);

        // Base radius
        const baseRadius = Math.min(width, height) * 0.38 * STATE.zoom;

        // Ring config
        const rings = [
            { type: 'allies', radius: baseRadius * 0.28, label: 'Allies' },
            { type: 'strategic', radius: baseRadius * 0.48, label: 'Strategic' },
            { type: 'neutral', radius: baseRadius * 0.68, label: 'Neutral' },
            { type: 'complex', radius: baseRadius * 0.85, label: 'Complex' },
            { type: 'conflict', radius: baseRadius * 1.0, label: 'Conflict' }
        ];

        // Draw rings
        rings.forEach(ring => {
            ctx.beginPath();
            ctx.arc(cx, cy, ring.radius, 0, Math.PI * 2);
            ctx.strokeStyle = COLORS[ring.type];
            ctx.globalAlpha = 0.25;
            ctx.lineWidth = 1.5;
            ctx.setLineDash([6, 4]);
            ctx.stroke();
            ctx.setLineDash([]);
            ctx.globalAlpha = 1;

            // Label
            ctx.font = '10px Inter, sans-serif';
            ctx.fillStyle = COLORS[ring.type];
            ctx.globalAlpha = 0.6;
            ctx.textAlign = 'center';
            ctx.fillText(ring.label, cx, cy - ring.radius - 6);
            ctx.globalAlpha = 1;
        });

        // Group relations by type
        const groups = {};
        rings.forEach(r => groups[r.type] = []);
        
        STATE.filteredRelations.forEach(rel => {
            if (groups[rel.type]) {
                groups[rel.type].push(rel);
            }
        });

        // Draw connection if selected/hovered
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

        // Draw center country
        const center = COUNTRY_MAP[STATE.centerCountry];
        if (center) {
            // Glow
            const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, 50 * STATE.zoom);
            gradient.addColorStop(0, 'rgba(0, 212, 255, 0.3)');
            gradient.addColorStop(1, 'rgba(0, 212, 255, 0)');
            ctx.beginPath();
            ctx.arc(cx, cy, 50 * STATE.zoom, 0, Math.PI * 2);
            ctx.fillStyle = gradient;
            ctx.fill();

            // Circle
            ctx.beginPath();
            ctx.arc(cx, cy, 38 * STATE.zoom, 0, Math.PI * 2);
            ctx.fillStyle = '#12121a';
            ctx.fill();
            ctx.strokeStyle = COLORS.center;
            ctx.lineWidth = 3;
            ctx.stroke();

            // Flag
            ctx.font = `${30 * STATE.zoom}px Arial`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(center.flag, cx, cy);
        }

        // Draw country nodes
        rings.forEach(ring => {
            const countries = groups[ring.type] || [];
            const count = countries.length;
            if (count === 0) return;

            countries.forEach((rel, i) => {
                const angle = (2 * Math.PI * i / count) - Math.PI / 2;
                const x = cx + Math.cos(angle) * ring.radius;
                const y = cy + Math.sin(angle) * ring.radius;

                // Store position for hit detection
                rel._x = x;
                rel._y = y;
                rel._r = 20 * STATE.zoom;

                const isSelected = STATE.selectedCountry === rel.code;
                const isHovered = STATE.hoveredCountry === rel.code;

                // Highlight
                if (isSelected || isHovered) {
                    ctx.beginPath();
                    ctx.arc(x, y, 26 * STATE.zoom, 0, Math.PI * 2);
                    ctx.fillStyle = COLORS[rel.type] + '40';
                    ctx.fill();
                }

                // Node background
                ctx.beginPath();
                ctx.arc(x, y, 20 * STATE.zoom, 0, Math.PI * 2);
                ctx.fillStyle = '#12121a';
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
            if (dist < (rel._r || 20) + 5) {
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
        STATE.isDragging = false;
        STATE.dragStart = null;
        e.target.style.cursor = 'grab';
    }

    function onMouseLeave() {
        STATE.isDragging = false;
        STATE.hoveredCountry = null;
        hideTooltip();
        render();
    }

    function onClick() {
        if (STATE.hoveredCountry) {
            selectCountry(STATE.hoveredCountry);
        }
    }

    function onDoubleClick() {
        if (STATE.hoveredCountry) {
            setCenter(STATE.hoveredCountry);
        }
    }

    function onWheel(e) {
        e.preventDefault();
        zoom(e.deltaY > 0 ? -0.1 : 0.1);
    }

    function zoom(delta) {
        STATE.zoom = Math.max(0.3, Math.min(2.5, STATE.zoom + delta));
        const level = document.getElementById('zoomLevel');
        if (level) level.textContent = Math.round(STATE.zoom * 100) + '%';
        render();
    }

    function resetView() {
        STATE.zoom = 1;
        STATE.panX = 0;
        STATE.panY = 0;
        const level = document.getElementById('zoomLevel');
        if (level) level.textContent = '100%';
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
        tooltip.querySelector('.tooltip-region').textContent = rel.region;

        const typeEl = tooltip.querySelector('.tooltip-type');
        typeEl.textContent = rel.type;
        typeEl.className = 'tooltip-type ' + rel.type;

        tooltip.querySelector('.tooltip-strength').textContent = rel.strength + '/10';

        tooltip.style.left = (e.pageX + 15) + 'px';
        tooltip.style.top = (e.pageY + 15) + 'px';
        tooltip.classList.add('visible');
    }

    function hideTooltip() {
        const tooltip = document.getElementById('tooltip');
        if (tooltip) tooltip.classList.remove('visible');
    }

    // ============================================
    // DETAIL PANEL
    // ============================================
    function selectCountry(code) {
        STATE.selectedCountry = code;
        const rel = STATE.relations.find(r => r.code === code);
        if (rel) showPanel(rel);
        render();
    }

    function showPanel(rel) {
        const placeholder = document.getElementById('panelPlaceholder');
        const content = document.getElementById('panelContent');
        
        if (placeholder) placeholder.style.display = 'none';
        if (content) content.classList.add('active');

        const center = COUNTRY_MAP[STATE.centerCountry];

        // Header
        const f1 = document.getElementById('bilateralFlag1');
        const n1 = document.getElementById('bilateralName1');
        const f2 = document.getElementById('bilateralFlag2');
        const n2 = document.getElementById('bilateralName2');
        const type = document.getElementById('bilateralType');

        if (f1) f1.textContent = center.flag;
        if (n1) n1.textContent = center.name;
        if (f2) f2.textContent = rel.flag;
        if (n2) n2.textContent = rel.name;
        if (type) {
            type.textContent = rel.type;
            type.style.background = COLORS[rel.type];
        }

        // Score
        const scoreNum = document.getElementById('scoreNum');
        const scoreFill = document.getElementById('scoreFill');
        const scoreSummary = document.getElementById('scoreSummary');

        if (scoreNum) scoreNum.textContent = rel.strength;
        if (scoreFill) {
            const circumference = 2 * Math.PI * 45;
            scoreFill.style.strokeDasharray = circumference;
            scoreFill.style.strokeDashoffset = circumference - (rel.strength / 10) * circumference;
            scoreFill.style.stroke = COLORS[rel.type];
        }
        if (scoreSummary) {
            const summaries = {
                allies: 'Strong alliance with deep cooperation',
                strategic: 'Strategic partnership with significant ties',
                neutral: 'Standard bilateral relations',
                complex: 'Complex relationship with mixed dynamics',
                conflict: 'Adversarial relationship with tensions'
            };
            scoreSummary.textContent = summaries[rel.type] || '';
        }

        // Parameters
        renderParameters(rel);
        renderHistory(rel);
        renderAgreements(rel);
    }

    function renderParameters(rel) {
        const container = document.getElementById('tabParameters');
        if (!container) return;

        container.innerHTML = PARAMETERS.map(param => {
            const data = rel.params?.[param.id] || { score: 5, summary: '', details: '' };
            const score = data.score;
            const color = getScoreColor(score);

            return `
                <div class="param-card">
                    <div class="param-header">
                        <div class="param-icon" style="color: ${color}">
                            <i class="fas ${param.icon}"></i>
                        </div>
                        <div class="param-info">
                            <div class="param-name">${param.name}</div>
                            <div class="param-brief">${data.summary || param.description}</div>
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
                            <h5>Analysis</h5>
                            <p>${data.details || 'Assessment based on diplomatic records and geopolitical analysis.'}</p>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        // Toggle functionality
        container.querySelectorAll('.param-card').forEach(card => {
            const header = card.querySelector('.param-header');
            const details = card.querySelector('.param-details');
            const toggle = card.querySelector('.param-toggle');

            header.addEventListener('click', () => {
                const isOpen = details.classList.contains('open');
                
                container.querySelectorAll('.param-details').forEach(d => d.classList.remove('open'));
                container.querySelectorAll('.param-toggle').forEach(t => t.classList.remove('open'));

                if (!isOpen) {
                    details.classList.add('open');
                    toggle.classList.add('open');
                }
            });
        });
    }

    function renderHistory(rel) {
        const container = document.getElementById('tabHistory');
        if (!container) return;

        const historyText = {
            allies: 'Long-standing alliance with deep historical ties and cooperation across multiple domains.',
            strategic: 'Growing strategic partnership developed over recent decades.',
            neutral: 'Standard diplomatic relations with limited historical engagement.',
            complex: 'History of both cooperation and competition, with ongoing challenges.',
            conflict: 'History marked by disputes, conflicts, or significant disagreements.'
        };

        container.innerHTML = `
            <div class="history-section">
                <h4>Historical Context</h4>
                <p>${historyText[rel.type] || 'Historical data being compiled.'}</p>
            </div>
            ${rel.reasons && rel.reasons.length > 0 ? `
                <div class="history-section">
                    <h4>Key Connections</h4>
                    <ul>
                        ${rel.reasons.map(r => `<li>${r}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}
        `;
    }

    function renderAgreements(rel) {
        const container = document.getElementById('tabAgreements');
        if (!container) return;

        const shared = [];
        for (const [key, alliance] of Object.entries(ALLIANCES)) {
            if (alliance.members.includes(STATE.centerCountry) && alliance.members.includes(rel.code)) {
                shared.push(alliance);
            }
        }

        if (shared.length === 0) {
            container.innerHTML = '<p style="color: var(--text-muted); padding: 20px; text-align: center;">No shared organizational memberships found.</p>';
        } else {
            container.innerHTML = shared.map(a => `
                <div class="agreement-item" style="padding: 12px; background: var(--bg-tertiary); border-radius: 8px; margin-bottom: 8px;">
                    <div style="font-weight: 600; margin-bottom: 4px;">${a.name}</div>
                    <div style="font-size: 0.75rem; color: var(--text-muted);">${a.type} • Founded ${a.founded}</div>
                </div>
            `).join('');
        }
    }

    function closePanel() {
        STATE.selectedCountry = null;
        const placeholder = document.getElementById('panelPlaceholder');
        const content = document.getElementById('panelContent');
        if (placeholder) placeholder.style.display = 'flex';
        if (content) content.classList.remove('active');
        render();
    }

    // ============================================
    // UTILITIES
    // ============================================
    function getScoreColor(score) {
        if (score >= 8) return COLORS.allies;
        if (score >= 6) return COLORS.strategic;
        if (score >= 4) return COLORS.neutral;
        if (score >= 2) return COLORS.complex;
        return COLORS.conflict;
    }

    // ============================================
    // START
    // ============================================
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Expose globally
    window.UnityAtlas = { setCenter, selectCountry, render };

})();
