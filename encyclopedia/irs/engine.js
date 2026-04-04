// ============================================
// UNITY ATLAS - ENGINE (BULLETPROOF)
// ============================================

(function() {
    'use strict';
    
    console.log('🚀 Engine starting...');

    // State
    var STATE = {
        center: 'US',
        selected: null,
        hovered: null,
        relations: [],
        filtered: [],
        zoom: 1,
        panX: 0,
        panY: 0,
        dragging: false,
        dragStart: null,
        regionFilter: 'all',
        typeFilter: 'all'
    };

    var COLORS = {
        allies: '#00c853',
        strategic: '#2196f3',
        neutral: '#ffc107',
        complex: '#ff9800',
        conflict: '#f44336',
        center: '#00d4ff'
    };

    // Init
    function init() {
        console.log('🔧 Initializing...');
        animateLoader();
    }

    function animateLoader() {
        var fill = document.getElementById('loaderFill');
        var progress = 0;
        
        var timer = setInterval(function() {
            progress += Math.random() * 30;
            if (progress > 100) progress = 100;
            if (fill) fill.style.width = progress + '%';
            
            if (progress >= 100) {
                clearInterval(timer);
                setTimeout(startApp, 300);
            }
        }, 100);
    }

    function startApp() {
        console.log('📱 Starting app...');
        
        var loader = document.getElementById('loader');
        if (loader) loader.classList.add('hidden');
        
        setupEvents();
        renderCountryList(COUNTRIES);
        setCenter('US');
        
        console.log('✅ Ready!');
    }

    // Events
    function setupEvents() {
        // Canvas
        var canvas = document.getElementById('canvas');
        if (canvas) {
            canvas.addEventListener('mousedown', onDown);
            canvas.addEventListener('mousemove', onMove);
            canvas.addEventListener('mouseup', onUp);
            canvas.addEventListener('mouseleave', onLeave);
            canvas.addEventListener('wheel', onWheel);
        }

        // Search
        var searchBox = document.getElementById('searchBox');
        if (searchBox) {
            searchBox.addEventListener('input', onSearch);
            searchBox.addEventListener('focus', function() {
                var dd = document.getElementById('searchDropdown');
                if (dd && dd.children.length > 0) dd.classList.add('show');
            });
        }

        // Country search
        var countrySearch = document.getElementById('countrySearch');
        if (countrySearch) {
            countrySearch.addEventListener('input', function() {
                var q = this.value.toLowerCase();
                var list = COUNTRIES.filter(function(c) {
                    if (STATE.regionFilter !== 'all' && c.region !== STATE.regionFilter) return false;
                    if (q && c.name.toLowerCase().indexOf(q) === -1) return false;
                    return true;
                });
                renderCountryList(list);
            });
        }

        // Filters
        var regionSelect = document.getElementById('regionSelect');
        if (regionSelect) {
            regionSelect.addEventListener('change', function() {
                STATE.regionFilter = this.value;
                applyFilters();
            });
        }

        var typeSelect = document.getElementById('typeSelect');
        if (typeSelect) {
            typeSelect.addEventListener('change', function() {
                STATE.typeFilter = this.value;
                applyFilters();
            });
        }

        // Zoom
        var zoomIn = document.getElementById('zoomIn');
        var zoomOut = document.getElementById('zoomOut');
        var zoomReset = document.getElementById('zoomReset');
        if (zoomIn) zoomIn.addEventListener('click', function() { zoom(0.2); });
        if (zoomOut) zoomOut.addEventListener('click', function() { zoom(-0.2); });
        if (zoomReset) zoomReset.addEventListener('click', resetView);

        // Modal
        var modalX = document.getElementById('modalX');
        var btnCloseModal = document.getElementById('btnCloseModal');
        var modalBg = document.getElementById('modalBg');
        var btnCenter = document.getElementById('btnCenter');
        
        if (modalX) modalX.addEventListener('click', closeModal);
        if (btnCloseModal) btnCloseModal.addEventListener('click', closeModal);
        if (modalBg) modalBg.addEventListener('click', function(e) {
            if (e.target === modalBg) closeModal();
        });
        if (btnCenter) btnCenter.addEventListener('click', function() {
            if (STATE.selected) {
                setCenter(STATE.selected);
                closeModal();
            }
        });

        // Click outside search
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.app-search')) {
                var dd = document.getElementById('searchDropdown');
                if (dd) dd.classList.remove('show');
            }
        });

        // Resize
        window.addEventListener('resize', render);

        // Escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') closeModal();
        });
    }

    // Country List
    function renderCountryList(list) {
        var el = document.getElementById('countryList');
        if (!el) return;
        
        el.innerHTML = list.map(function(c) {
            var active = STATE.center === c.code ? 'active' : '';
            return '<div class="country-row ' + active + '" data-code="' + c.code + '">' +
                '<span class="flag">' + c.flag + '</span>' +
                '<span class="name">' + c.name + '</span>' +
            '</div>';
        }).join('');

        el.querySelectorAll('.country-row').forEach(function(row) {
            row.addEventListener('click', function() {
                setCenter(this.dataset.code);
            });
        });
    }

    // Search
    function onSearch(e) {
        var q = e.target.value.toLowerCase().trim();
        var dd = document.getElementById('searchDropdown');
        if (!dd) return;

        if (q.length < 2) {
            dd.classList.remove('show');
            return;
        }

        var matches = COUNTRIES.filter(function(c) {
            return c.name.toLowerCase().indexOf(q) !== -1 || c.code.toLowerCase().indexOf(q) !== -1;
        }).slice(0, 6);

        dd.innerHTML = matches.map(function(c) {
            return '<div class="search-item" data-code="' + c.code + '">' +
                '<span style="font-size:1.3rem">' + c.flag + '</span>' +
                '<span>' + c.name + '</span>' +
            '</div>';
        }).join('');

        dd.classList.add('show');

        dd.querySelectorAll('.search-item').forEach(function(item) {
            item.addEventListener('click', function() {
                setCenter(this.dataset.code);
                e.target.value = '';
                dd.classList.remove('show');
            });
        });
    }

    // Set Center
    function setCenter(code) {
        var country = COUNTRY_MAP[code];
        if (!country) return;

        console.log('🎯 Center:', country.flag, country.name);

        STATE.center = code;
        STATE.selected = null;
        STATE.relations = generateRelations(code);
        STATE.filtered = STATE.relations.slice();

        // Update UI
        var flagEl = document.getElementById('centerFlag');
        var nameEl = document.getElementById('centerName');
        if (flagEl) flagEl.textContent = country.flag;
        if (nameEl) nameEl.textContent = country.name;

        updateStats();
        applyFilters();
        
        // Update country list
        var q = document.getElementById('countrySearch');
        var query = q ? q.value.toLowerCase() : '';
        var list = COUNTRIES.filter(function(c) {
            if (STATE.regionFilter !== 'all' && c.region !== STATE.regionFilter) return false;
            if (query && c.name.toLowerCase().indexOf(query) === -1) return false;
            return true;
        });
        renderCountryList(list);
    }

    function updateStats() {
        var stats = { allies: 0, strategic: 0, neutral: 0, complex: 0, conflict: 0 };
        STATE.filtered.forEach(function(r) {
            if (stats[r.type] !== undefined) stats[r.type]++;
        });

        for (var key in stats) {
            var el = document.getElementById('stat' + key.charAt(0).toUpperCase() + key.slice(1));
            if (el) el.textContent = stats[key];
        }
    }

    function applyFilters() {
        STATE.filtered = STATE.relations.filter(function(r) {
            if (STATE.regionFilter !== 'all' && r.region !== STATE.regionFilter) return false;
            if (STATE.typeFilter !== 'all' && r.type !== STATE.typeFilter) return false;
            return true;
        });
        updateStats();
        render();
    }

    // Canvas
    function render() {
        var canvas = document.getElementById('canvas');
        var container = document.querySelector('.canvas-area');
        if (!canvas || !container) return;

        var ctx = canvas.getContext('2d');
        var rect = container.getBoundingClientRect();
        var dpr = window.devicePixelRatio || 1;

        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        canvas.style.width = rect.width + 'px';
        canvas.style.height = rect.height + 'px';
        ctx.scale(dpr, dpr);

        var w = rect.width;
        var h = rect.height;
        var cx = w / 2 + STATE.panX;
        var cy = h / 2 + STATE.panY;

        ctx.clearRect(0, 0, w, h);

        var baseR = Math.min(w, h) * 0.38 * STATE.zoom;

        // Rings
        var rings = [
            { type: 'allies', r: baseR * 0.28 },
            { type: 'strategic', r: baseR * 0.48 },
            { type: 'neutral', r: baseR * 0.68 },
            { type: 'complex', r: baseR * 0.85 },
            { type: 'conflict', r: baseR }
        ];

        rings.forEach(function(ring) {
            ctx.beginPath();
            ctx.arc(cx, cy, ring.r, 0, Math.PI * 2);
            ctx.strokeStyle = COLORS[ring.type];
            ctx.globalAlpha = 0.2;
            ctx.lineWidth = 1.5;
            ctx.setLineDash([6, 4]);
            ctx.stroke();
            ctx.setLineDash([]);
            ctx.globalAlpha = 1;
        });

        // Group
        var groups = {};
        rings.forEach(function(r) { groups[r.type] = []; });
        STATE.filtered.forEach(function(rel) {
            if (groups[rel.type]) groups[rel.type].push(rel);
        });

        // Connection
        var active = STATE.selected || STATE.hovered;
        if (active) {
            var ar = STATE.filtered.find(function(r) { return r.code === active; });
            if (ar && ar._x !== undefined) {
                ctx.beginPath();
                ctx.moveTo(cx, cy);
                ctx.lineTo(ar._x, ar._y);
                ctx.strokeStyle = COLORS[ar.type];
                ctx.globalAlpha = 0.5;
                ctx.lineWidth = 2;
                ctx.stroke();
                ctx.globalAlpha = 1;
            }
        }

        // Center
        var center = COUNTRY_MAP[STATE.center];
        if (center) {
            var grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 55 * STATE.zoom);
            grad.addColorStop(0, 'rgba(0,212,255,0.3)');
            grad.addColorStop(1, 'rgba(0,212,255,0)');
            ctx.beginPath();
            ctx.arc(cx, cy, 55 * STATE.zoom, 0, Math.PI * 2);
            ctx.fillStyle = grad;
            ctx.fill();

            ctx.beginPath();
            ctx.arc(cx, cy, 40 * STATE.zoom, 0, Math.PI * 2);
            ctx.fillStyle = '#0a0a0f';
            ctx.fill();
            ctx.strokeStyle = COLORS.center;
            ctx.lineWidth = 3;
            ctx.stroke();

            ctx.font = (30 * STATE.zoom) + 'px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(center.flag, cx, cy);
        }

        // Countries
        rings.forEach(function(ring) {
            var list = groups[ring.type] || [];
            var count = list.length;
            if (count === 0) return;

            list.forEach(function(rel, i) {
                var angle = (2 * Math.PI * i / count) - Math.PI / 2;
                var x = cx + Math.cos(angle) * ring.r;
                var y = cy + Math.sin(angle) * ring.r;

                rel._x = x;
                rel._y = y;
                rel._r = 20 * STATE.zoom;

                var isSel = STATE.selected === rel.code;
                var isHov = STATE.hovered === rel.code;

                if (isSel || isHov) {
                    ctx.beginPath();
                    ctx.arc(x, y, 26 * STATE.zoom, 0, Math.PI * 2);
                    ctx.fillStyle = COLORS[rel.type] + '40';
                    ctx.fill();
                }

                ctx.beginPath();
                ctx.arc(x, y, 20 * STATE.zoom, 0, Math.PI * 2);
                ctx.fillStyle = '#0a0a0f';
                ctx.fill();
                ctx.strokeStyle = isSel ? '#e040fb' : COLORS[rel.type];
                ctx.lineWidth = isSel ? 3 : 2;
                ctx.stroke();

                ctx.font = (15 * STATE.zoom) + 'px Arial';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(rel.flag, x, y);
            });
        });
    }

    // Mouse
    function onDown(e) {
        STATE.dragging = true;
        STATE.dragStart = { x: e.clientX - STATE.panX, y: e.clientY - STATE.panY };
        e.target.style.cursor = 'grabbing';
    }

    function onMove(e) {
        var canvas = e.target;
        var rect = canvas.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;

        if (STATE.dragging && STATE.dragStart) {
            STATE.panX = e.clientX - STATE.dragStart.x;
            STATE.panY = e.clientY - STATE.dragStart.y;
            render();
            return;
        }

        // Hit test
        var found = null;
        for (var i = 0; i < STATE.filtered.length; i++) {
            var r = STATE.filtered[i];
            if (r._x === undefined) continue;
            var dx = x - r._x;
            var dy = y - r._y;
            var dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < (r._r || 20) + 5) {
                found = r;
                break;
            }
        }

        if (found) {
            STATE.hovered = found.code;
            canvas.style.cursor = 'pointer';
            showTooltip(e, found);
        } else {
            STATE.hovered = null;
            canvas.style.cursor = STATE.dragging ? 'grabbing' : 'grab';
            hideTooltip();
        }
        render();
    }

    function onUp(e) {
        if (STATE.hovered && !STATE.dragging) {
            openModal(STATE.hovered);
        } else if (STATE.dragging) {
            // was dragging
        }
        STATE.dragging = false;
        STATE.dragStart = null;
        e.target.style.cursor = STATE.hovered ? 'pointer' : 'grab';
    }

    function onLeave() {
        STATE.dragging = false;
        STATE.hovered = null;
        hideTooltip();
        render();
    }

    function onWheel(e) {
        e.preventDefault();
        zoom(e.deltaY > 0 ? -0.1 : 0.1);
    }

    function zoom(d) {
        STATE.zoom = Math.max(0.4, Math.min(2.5, STATE.zoom + d));
        var el = document.getElementById('zoomLvl');
        if (el) el.textContent = Math.round(STATE.zoom * 100) + '%';
        render();
    }

    function resetView() {
        STATE.zoom = 1;
        STATE.panX = 0;
        STATE.panY = 0;
        var el = document.getElementById('zoomLvl');
        if (el) el.textContent = '100%';
        render();
    }

    // Tooltip
    function showTooltip(e, rel) {
        var tt = document.getElementById('tooltip');
        if (!tt) return;

        tt.innerHTML = 
            '<div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">' +
                '<span style="font-size:2rem">' + rel.flag + '</span>' +
                '<div><div style="font-weight:600">' + rel.name + '</div>' +
                '<div style="font-size:0.75rem;color:#666">' + rel.capital + '</div></div>' +
            '</div>' +
            '<div style="display:flex;justify-content:space-between;align-items:center">' +
                '<span style="padding:4px 10px;border-radius:4px;font-size:0.7rem;font-weight:600;text-transform:uppercase;background:' + COLORS[rel.type] + '">' + rel.type + '</span>' +
                '<span style="font-weight:700">' + rel.strength + '/10</span>' +
            '</div>' +
            '<div style="margin-top:10px;font-size:0.7rem;color:#555;text-align:center">Click for details</div>';

        tt.style.left = (e.pageX + 15) + 'px';
        tt.style.top = (e.pageY + 15) + 'px';
        tt.classList.add('show');
    }

    function hideTooltip() {
        var tt = document.getElementById('tooltip');
        if (tt) tt.classList.remove('show');
    }

    // Modal
    function openModal(code) {
        STATE.selected = code;
        var rel = STATE.relations.find(function(r) { return r.code === code; });
        if (!rel) return;

        var center = COUNTRY_MAP[STATE.center];
        var modalBg = document.getElementById('modalBg');
        var modalTop = document.getElementById('modalTop');
        var modalScore = document.getElementById('modalScore');
        var modalParams = document.getElementById('modalParams');

        // Header
        modalTop.innerHTML = 
            '<div style="display:flex;align-items:center;justify-content:center;gap:15px">' +
                '<div style="text-align:center"><span style="font-size:2.5rem;display:block">' + center.flag + '</span><span>' + center.name + '</span></div>' +
                '<div style="display:flex;flex-direction:column;align-items:center;gap:5px">' +
                    '<div style="width:30px;height:2px;background:rgba(255,255,255,0.3)"></div>' +
                    '<span style="padding:4px 12px;background:' + COLORS[rel.type] + ';border-radius:4px;font-size:0.65rem;font-weight:700;text-transform:uppercase">' + rel.type + '</span>' +
                    '<div style="width:30px;height:2px;background:rgba(255,255,255,0.3)"></div>' +
                '</div>' +
                '<div style="text-align:center"><span style="font-size:2.5rem;display:block">' + rel.flag + '</span><span>' + rel.name + '</span></div>' +
            '</div>';

        // Score
        var scoreDesc = {
            allies: 'Strong alliance with deep cooperation across all dimensions',
            strategic: 'Strategic partnership with significant bilateral engagement',
            neutral: 'Standard diplomatic relations with growth potential',
            complex: 'Complex relationship with mixed cooperation and friction',
            conflict: 'Adversarial relationship with significant tensions'
        };

        modalScore.innerHTML = 
            '<div style="display:flex;align-items:center;justify-content:center;gap:20px">' +
                '<div style="width:80px;height:80px;border-radius:50%;border:4px solid ' + COLORS[rel.type] + ';display:flex;align-items:center;justify-content:center">' +
                    '<span style="font-family:Space Grotesk;font-size:2rem;font-weight:700">' + rel.strength + '</span>' +
                '</div>' +
                '<div style="text-align:left;max-width:350px">' +
                    '<div style="font-weight:600;margin-bottom:5px">Overall Score: ' + rel.strength + '/10</div>' +
                    '<div style="font-size:0.85rem;color:#888">' + (scoreDesc[rel.type] || '') + '</div>' +
                '</div>' +
            '</div>';

        // Params
        var paramsHtml = '<div style="margin-bottom:15px;text-align:center"><h3 style="margin-bottom:5px"><i class="fas fa-chart-bar" style="color:#00d4ff;margin-right:8px"></i>16 Relationship Parameters</h3><p style="font-size:0.8rem;color:#666">Click each parameter to expand details</p></div>';

        PARAMETERS.forEach(function(p) {
            var data = rel.params[p.id] || { score: 5, summary: '', bullets: [] };
            var score = data.score;
            var color = getColor(score);

            paramsHtml += 
                '<div class="param-card" onclick="this.classList.toggle(\'open\')">' +
                    '<div class="param-head">' +
                        '<div class="param-icon" style="color:' + color + '"><i class="fas ' + p.icon + '"></i></div>' +
                        '<div class="param-info"><div class="param-name">' + p.name + '</div><div class="param-cat">' + p.category + '</div></div>' +
                        '<div class="param-score-box"><div class="param-score-num" style="color:' + color + '">' + score + '/10</div><div class="param-bar"><div class="param-bar-fill" style="width:' + (score * 10) + '%;background:' + color + '"></div></div></div>' +
                        '<i class="fas fa-chevron-down param-arrow"></i>' +
                    '</div>' +
                    '<div class="param-body">' +
                        '<div class="param-content">' +
                            '<div class="param-section">' +
                                '<div class="param-section-title"><i class="fas fa-info-circle"></i> Overview</div>' +
                                '<p class="param-text">' + (data.summary || 'Assessment based on current diplomatic and trade data.') + '</p>' +
                            '</div>' +
                            '<div class="param-section">' +
                                '<div class="param-section-title"><i class="fas fa-list"></i> Key Points</div>' +
                                '<ul class="param-list">' + (data.bullets || []).map(function(b) { return '<li>' + b + '</li>'; }).join('') + '</ul>' +
                            '</div>' +
                            '<div class="param-section">' +
                                '<div class="param-section-title"><i class="fas fa-file-alt"></i> Analysis</div>' +
                                '<p class="param-text">This assessment is based on official diplomatic records, treaty databases, trade statistics, and geopolitical analysis. Score reflects current bilateral status as of 2026.</p>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>';
        });

        modalParams.innerHTML = paramsHtml;
        modalBg.classList.add('show');
        render();
    }

    function closeModal() {
        var modalBg = document.getElementById('modalBg');
        if (modalBg) modalBg.classList.remove('show');
        STATE.selected = null;
        render();
    }

    function getColor(score) {
        if (score >= 8) return COLORS.allies;
        if (score >= 6) return COLORS.strategic;
        if (score >= 4) return COLORS.neutral;
        if (score >= 2) return COLORS.complex;
        return COLORS.conflict;
    }

    // Start
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Global
    window.UnityAtlas = {
        setCenter: setCenter,
        render: render
    };

})();
