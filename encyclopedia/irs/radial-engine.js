// ============================================
// UNITY ATLAS - Radial Engine
// High-Performance Canvas Rendering
// ============================================

class RadialEngine {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        
        // State
        this.centerCountry = null;
        this.nodes = [];
        this.visibleNodes = [];
        this.hoveredNode = null;
        this.selectedRelation = null;
        this.focusMode = false;
        
        // View settings
        this.zoom = 1;
        this.minZoom = 0.3;
        this.maxZoom = 3;
        this.panX = 0;
        this.panY = 0;
        this.centerX = 0;
        this.centerY = 0;
        
        // Display settings
        this.maxVisibleNodes = 50;
        this.showAllNodes = false;
        this.showConnections = false; // Only show on hover
        this.animationProgress = 1;
        
        // Interaction
        this.isDragging = false;
        this.dragStartX = 0;
        this.dragStartY = 0;
        this.lastPanX = 0;
        this.lastPanY = 0;
        
        // Ring configuration
        this.ringConfig = {
            1: { maxNodes: 8, baseRadius: 0.15, color: '#10B981', label: 'Closest Allies' },
            2: { maxNodes: 12, baseRadius: 0.30, color: '#3B82F6', label: 'Strong Relations' },
            3: { maxNodes: 15, baseRadius: 0.50, color: '#F59E0B', label: 'Neutral' },
            4: { maxNodes: 10, baseRadius: 0.70, color: '#F97316', label: 'Tense' },
            5: { maxNodes: 5, baseRadius: 0.88, color: '#EF4444', label: 'Conflict' }
        };
        
        // Colors
        this.colors = {
            allies: '#10B981',
            strategic: '#3B82F6',
            neutral: '#F59E0B',
            complex: '#F97316',
            conflict: '#EF4444',
            selected: '#EC4899',
            center: '#EC4899',
            connection: 'rgba(100, 116, 139, 0.15)',
            connectionHover: 'rgba(100, 116, 139, 0.5)',
            ring: 'rgba(148, 163, 184, 0.1)',
            ringBorder: 'rgba(148, 163, 184, 0.3)'
        };
        
        // Initialize
        this.init();
    }
    
    init() {
        this.setupCanvas();
        this.setupEventListeners();
        this.startRenderLoop();
    }
    
    setupCanvas() {
        this.resize();
        window.addEventListener('resize', () => this.resize());
    }
    
    resize() {
        const rect = this.canvas.parentElement.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;
        
        this.canvas.width = rect.width * dpr;
        this.canvas.height = rect.height * dpr;
        this.canvas.style.width = rect.width + 'px';
        this.canvas.style.height = rect.height + 'px';
        
        this.ctx.scale(dpr, dpr);
        
        this.width = rect.width;
        this.height = rect.height;
        this.centerX = this.width / 2;
        this.centerY = this.height / 2;
        this.maxRadius = Math.min(this.width, this.height) / 2 - 80;
    }
    
    setupEventListeners() {
        // Mouse events
        this.canvas.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        this.canvas.addEventListener('mousedown', (e) => this.handleMouseDown(e));
        this.canvas.addEventListener('mouseup', () => this.handleMouseUp());
        this.canvas.addEventListener('mouseleave', () => this.handleMouseLeave());
        this.canvas.addEventListener('wheel', (e) => this.handleWheel(e), { passive: false });
        this.canvas.addEventListener('click', (e) => this.handleClick(e));
        this.canvas.addEventListener('dblclick', (e) => this.handleDoubleClick(e));
        
        // Touch events
        this.canvas.addEventListener('touchstart', (e) => this.handleTouchStart(e));
        this.canvas.addEventListener('touchmove', (e) => this.handleTouchMove(e));
        this.canvas.addEventListener('touchend', () => this.handleTouchEnd());
    }
    
    // ==========================================
    // CORE: Set Center Country
    // ==========================================
    setCenterCountry(countryCode) {
        if (!countryCode) return;
        
        const country = COUNTRY_BY_CODE[countryCode];
        if (!country) return;
        
        this.centerCountry = country;
        this.buildNodes(countryCode);
        this.animateIn();
        
        // Update UI
        this.updateCountryUI(country);
        
        return this.getRelationshipStats();
    }
    
    buildNodes(centerCode) {
        const relations = RELATIONSHIPS_DATABASE[centerCode];
        if (!relations) {
            this.nodes = [];
            this.visibleNodes = [];
            return;
        }
        
        // Sort relations by strength (descending) and type priority
        const typePriority = { conflict: 5, complex: 4, allies: 3, strategic: 2, neutral: 1 };
        const sortedRelations = [...relations.relations].sort((a, b) => {
            // First by type priority (conflict/allies first)
            const priorityDiff = typePriority[b.type] - typePriority[a.type];
            if (priorityDiff !== 0) return priorityDiff;
            // Then by strength
            return b.strength - a.strength;
        });
        
        // Group by ring
        const ringGroups = { 1: [], 2: [], 3: [], 4: [], 5: [] };
        
        sortedRelations.forEach(rel => {
            const ring = rel.ring || 3;
            ringGroups[ring].push(rel);
        });
        
        // Build nodes with proper spacing
        this.nodes = [];
        let totalVisible = 0;
        
        Object.keys(ringGroups).forEach(ringNum => {
            const ring = parseInt(ringNum);
            const config = this.ringConfig[ring];
            const ringRelations = ringGroups[ring];
            
            // Limit nodes per ring
            const maxForRing = this.showAllNodes ? ringRelations.length : config.maxNodes;
            const visibleRelations = ringRelations.slice(0, maxForRing);
            
            // Calculate dynamic radius based on node count
            const nodeCount = visibleRelations.length;
            const minSpacing = 50; // Minimum pixels between nodes
            const circumference = nodeCount * minSpacing;
            const minRadius = circumference / (2 * Math.PI);
            const baseRadiusPixels = config.baseRadius * this.maxRadius;
            const actualRadius = Math.max(baseRadiusPixels, minRadius);
            
            // Position nodes
            visibleRelations.forEach((rel, index) => {
                const angle = (index / nodeCount) * Math.PI * 2 - Math.PI / 2;
                
                this.nodes.push({
                    ...rel,
                    ring: ring,
                    angle: angle,
                    targetRadius: actualRadius,
                    currentRadius: 0,
                    x: 0,
                    y: 0,
                    size: this.getNodeSize(ring),
                    visible: true
                });
                
                totalVisible++;
            });
        });
        
        // Calculate hidden count
        const totalRelations = relations.relations.length;
        this.hiddenCount = totalRelations - totalVisible;
        
        // Update visible nodes
        this.visibleNodes = this.nodes.filter(n => n.visible);
        
        // Update "more" indicator
        this.updateMoreIndicator();
    }
    
    getNodeSize(ring) {
        const sizes = { 1: 22, 2: 20, 3: 18, 4: 16, 5: 14 };
        return sizes[ring] || 16;
    }
    
    // ==========================================
    // ANIMATION
    // ==========================================
    animateIn() {
        this.animationProgress = 0;
        const startTime = performance.now();
        const duration = 600;
        
        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            this.animationProgress = Math.min(elapsed / duration, 1);
            
            // Easing function
            this.animationProgress = this.easeOutBack(this.animationProgress);
            
            // Update node positions
            this.nodes.forEach(node => {
                node.currentRadius = node.targetRadius * this.animationProgress;
                node.x = Math.cos(node.angle) * node.currentRadius;
                node.y = Math.sin(node.angle) * node.currentRadius;
            });
            
            if (elapsed < duration) {
                requestAnimationFrame(animate);
            }
        };
        
        requestAnimationFrame(animate);
    }
    
    easeOutBack(t) {
        const c1 = 1.70158;
        const c3 = c1 + 1;
        return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
    }
    
    // ==========================================
    // RENDER LOOP
    // ==========================================
    startRenderLoop() {
        const render = () => {
            this.render();
            requestAnimationFrame(render);
        };
        requestAnimationFrame(render);
    }
    
    render() {
        const ctx = this.ctx;
        const width = this.width;
        const height = this.height;
        
        // Clear
        ctx.clearRect(0, 0, width, height);
        
        // Apply transformations
        ctx.save();
        ctx.translate(this.centerX + this.panX, this.centerY + this.panY);
        ctx.scale(this.zoom, this.zoom);
        
        // Draw rings (background)
        this.drawRings();
        
        // Draw connections (only for hovered or focused)
        this.drawConnections();
        
        // Draw center node
        this.drawCenterNode();
        
        // Draw country nodes
        this.drawNodes();
        
        ctx.restore();
    }
    
    drawRings() {
        const ctx = this.ctx;
        
        Object.keys(this.ringConfig).forEach(ringNum => {
            const config = this.ringConfig[ringNum];
            const radius = config.baseRadius * this.maxRadius;
            
            // Ring fill
            ctx.beginPath();
            ctx.arc(0, 0, radius, 0, Math.PI * 2);
            ctx.fillStyle = this.colors.ring;
            ctx.fill();
            
            // Ring border
            ctx.beginPath();
            ctx.arc(0, 0, radius, 0, Math.PI * 2);
            ctx.strokeStyle = this.colors.ringBorder;
            ctx.lineWidth = 1;
            ctx.setLineDash([5, 5]);
            ctx.stroke();
            ctx.setLineDash([]);
        });
    }
    
    drawConnections() {
        const ctx = this.ctx;
        
        this.nodes.forEach(node => {
            if (!node.visible) return;
            
            const isHovered = this.hoveredNode && this.hoveredNode.code === node.code;
            const isFocused = this.selectedRelation && this.selectedRelation.code === node.code;
            
            // Only draw connection if hovered or focused
            if (!isHovered && !isFocused && !this.showConnections) {
                // Draw very faint line
                ctx.beginPath();
                ctx.moveTo(0, 0);
                ctx.lineTo(node.x, node.y);
                ctx.strokeStyle = 'rgba(148, 163, 184, 0.08)';
                ctx.lineWidth = 1;
                ctx.stroke();
                return;
            }
            
            // Draw prominent connection
            const color = this.colors[node.type] || this.colors.neutral;
            
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(node.x, node.y);
            
            // Style based on relationship
            if (isHovered || isFocused) {
                ctx.strokeStyle = color;
                ctx.lineWidth = 3;
                ctx.shadowColor = color;
                ctx.shadowBlur = 10;
            } else {
                ctx.strokeStyle = this.colors.connection;
                ctx.lineWidth = 1;
            }
            
            ctx.stroke();
            ctx.shadowBlur = 0;
        });
    }
    
    drawCenterNode() {
        if (!this.centerCountry) return;
        
        const ctx = this.ctx;
        const size = 40;
        
        // Glow
        ctx.shadowColor = this.colors.center;
        ctx.shadowBlur = 25;
        
        // Circle
        ctx.beginPath();
        ctx.arc(0, 0, size, 0, Math.PI * 2);
        ctx.fillStyle = this.colors.center;
        ctx.fill();
        
        ctx.shadowBlur = 0;
        
        // Border
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 4;
        ctx.stroke();
        
        // Flag
        ctx.font = '28px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(this.centerCountry.flag, 0, 0);
    }
    
    drawNodes() {
        const ctx = this.ctx;
        
        this.nodes.forEach(node => {
            if (!node.visible) return;
            
            const isHovered = this.hoveredNode && this.hoveredNode.code === node.code;
            const isFocused = this.selectedRelation && this.selectedRelation.code === node.code;
            
            // In focus mode, fade other nodes
            if (this.focusMode && !isFocused && this.selectedRelation) {
                ctx.globalAlpha = 0.2;
            }
            
            const color = this.colors[node.type] || this.colors.neutral;
            const size = node.size * (isHovered ? 1.3 : 1);
            
            // Glow for hovered/focused
            if (isHovered || isFocused) {
                ctx.shadowColor = color;
                ctx.shadowBlur = 15;
            }
            
            // Circle
            ctx.beginPath();
            ctx.arc(node.x, node.y, size, 0, Math.PI * 2);
            ctx.fillStyle = color;
            ctx.fill();
            
            ctx.shadowBlur = 0;
            
            // Border
            ctx.strokeStyle = '#fff';
            ctx.lineWidth = 2;
            ctx.stroke();
            
            // Flag inside circle
            ctx.font = `${size * 0.9}px Arial`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = '#fff';
            ctx.fillText(node.flag, node.x, node.y);
            
            // Show country code on zoom (not full name)
            if (this.zoom > 1.2 || isHovered) {
                ctx.font = `bold ${isHovered ? 12 : 10}px Inter, sans-serif`;
                ctx.fillStyle = 'rgba(30, 41, 59, 0.9)';
                
                // Background for text
                const text = node.code;
                const textWidth = ctx.measureText(text).width + 8;
                ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
                ctx.fillRect(node.x - textWidth / 2, node.y + size + 4, textWidth, 16);
                
                // Text
                ctx.fillStyle = 'rgba(30, 41, 59, 0.9)';
                ctx.fillText(text, node.x, node.y + size + 12);
            }
            
            ctx.globalAlpha = 1;
        });
    }
    
    // ==========================================
    // MOUSE HANDLERS
    // ==========================================
    handleMouseMove(e) {
        const rect = this.canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        
        if (this.isDragging) {
            this.panX = this.lastPanX + (mouseX - this.dragStartX);
            this.panY = this.lastPanY + (mouseY - this.dragStartY);
            return;
        }
        
        // Convert to canvas coordinates
        const canvasX = (mouseX - this.centerX - this.panX) / this.zoom;
        const canvasY = (mouseY - this.centerY - this.panY) / this.zoom;
        
        // Check for node hover
        let foundNode = null;
        
        for (const node of this.nodes) {
            if (!node.visible) continue;
            
            const dx = canvasX - node.x;
            const dy = canvasY - node.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < node.size + 5) {
                foundNode = node;
                break;
            }
        }
        
        // Check center node
        if (!foundNode && this.centerCountry) {
            const dx = canvasX;
            const dy = canvasY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 45) {
                // Hovering center - could show center info
            }
        }
        
        if (foundNode !== this.hoveredNode) {
            this.hoveredNode = foundNode;
            this.canvas.style.cursor = foundNode ? 'pointer' : 'grab';
            this.updateTooltip(foundNode, e.clientX, e.clientY);
        } else if (foundNode) {
            // Update tooltip position
            this.updateTooltipPosition(e.clientX, e.clientY);
        }
    }
    
    handleMouseDown(e) {
        if (!this.hoveredNode) {
            this.isDragging = true;
            this.dragStartX = e.clientX - this.canvas.getBoundingClientRect().left;
            this.dragStartY = e.clientY - this.canvas.getBoundingClientRect().top;
            this.lastPanX = this.panX;
            this.lastPanY = this.panY;
            this.canvas.style.cursor = 'grabbing';
        }
    }
    
    handleMouseUp() {
        this.isDragging = false;
        this.canvas.style.cursor = this.hoveredNode ? 'pointer' : 'grab';
    }
    
    handleMouseLeave() {
        this.isDragging = false;
        this.hoveredNode = null;
        this.hideTooltip();
        this.canvas.style.cursor = 'grab';
    }
    
    handleWheel(e) {
        e.preventDefault();
        
        const delta = e.deltaY > 0 ? -0.1 : 0.1;
        const newZoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.zoom + delta));
        
        // Zoom towards mouse position
        const rect = this.canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left - this.centerX;
        const mouseY = e.clientY - rect.top - this.centerY;
        
        const zoomRatio = newZoom / this.zoom;
        this.panX = mouseX - (mouseX - this.panX) * zoomRatio;
        this.panY = mouseY - (mouseY - this.panY) * zoomRatio;
        
        this.zoom = newZoom;
        this.updateZoomUI();
    }
    
    handleClick(e) {
        if (this.hoveredNode) {
            if (e.shiftKey) {
                // Shift+Click: Make this country the new center
                if (window.unityAtlas) {
                    window.unityAtlas.selectCountry(this.hoveredNode.code);
                }
            } else {
                // Regular click: Show relationship details
                this.showRelationshipDetails(this.hoveredNode);
            }
        } else if (this.selectedRelation) {
            // Click on empty space: Clear selection
            this.clearSelection();
        }
    }
    
    handleDoubleClick(e) {
        if (this.hoveredNode) {
            // Double-click: Make this country the new center
            if (window.unityAtlas) {
                window.unityAtlas.selectCountry(this.hoveredNode.code);
            }
        }
    }
    
    // Touch handlers
    handleTouchStart(e) {
        if (e.touches.length === 1) {
            const touch = e.touches[0];
            this.isDragging = true;
            this.dragStartX = touch.clientX;
            this.dragStartY = touch.clientY;
            this.lastPanX = this.panX;
            this.lastPanY = this.panY;
        }
    }
    
    handleTouchMove(e) {
        if (this.isDragging && e.touches.length === 1) {
            const touch = e.touches[0];
            this.panX = this.lastPanX + (touch.clientX - this.dragStartX);
            this.panY = this.lastPanY + (touch.clientY - this.dragStartY);
        }
    }
    
    handleTouchEnd() {
        this.isDragging = false;
    }
    
    // ==========================================
    // UI UPDATES
    // ==========================================
    updateTooltip(node, x, y) {
        const tooltip = document.getElementById('node-tooltip');
        
        if (node) {
            tooltip.querySelector('.tooltip-flag').textContent = node.flag;
            tooltip.querySelector('.tooltip-name').textContent = node.country;
            
            const typeEl = tooltip.querySelector('.tooltip-type');
            typeEl.textContent = node.type.charAt(0).toUpperCase() + node.type.slice(1);
            typeEl.className = 'tooltip-type ' + node.type;
            
            tooltip.querySelector('.strength-fill').style.width = (node.strength * 10) + '%';
            tooltip.querySelector('.strength-fill').style.background = this.colors[node.type];
            tooltip.querySelector('.tooltip-strength .value').textContent = node.strength + '/10';
            
            tooltip.style.left = (x + 15) + 'px';
            tooltip.style.top = (y + 15) + 'px';
            tooltip.classList.remove('hidden');
        } else {
            tooltip.classList.add('hidden');
        }
    }
    
    updateTooltipPosition(x, y) {
        const tooltip = document.getElementById('node-tooltip');
        tooltip.style.left = (x + 15) + 'px';
        tooltip.style.top = (y + 15) + 'px';
    }
    
    hideTooltip() {
        document.getElementById('node-tooltip').classList.add('hidden');
    }
    
    updateZoomUI() {
        document.getElementById('zoom-percent').textContent = Math.round(this.zoom * 100) + '%';
    }
    
    updateCountryUI(country) {
        document.getElementById('selected-flag').textContent = country.flag;
        document.getElementById('selected-name').textContent = country.name;
        document.getElementById('selected-region').textContent = COUNTRIES_DATABASE.regions[country.region];
        document.getElementById('mini-label').textContent = country.name;
    }
    
    updateMoreIndicator() {
        const indicator = document.getElementById('more-indicator');
        
        if (this.hiddenCount > 0 && !this.showAllNodes) {
            indicator.querySelector('.more-count').textContent = '+' + this.hiddenCount;
            indicator.classList.remove('hidden');
        } else {
            indicator.classList.add('hidden');
        }
    }
    
    getRelationshipStats() {
        const stats = { allies: 0, strategic: 0, neutral: 0, complex: 0, conflict: 0 };
        
        if (this.centerCountry) {
            const relations = RELATIONSHIPS_DATABASE[this.centerCountry.code];
            if (relations) {
                relations.relations.forEach(rel => {
                    if (stats.hasOwnProperty(rel.type)) {
                        stats[rel.type]++;
                    }
                });
            }
        }
        
        return stats;
    }
    
    // ==========================================
    // PUBLIC METHODS
    // ==========================================
    setShowAll(show) {
        this.showAllNodes = show;
        if (this.centerCountry) {
            this.buildNodes(this.centerCountry.code);
            this.animateIn();
        }
    }
    
    setMaxNodes(count) {
        this.maxVisibleNodes = count;
        if (this.centerCountry) {
            this.buildNodes(this.centerCountry.code);
        }
    }
    
    zoomIn() {
        this.zoom = Math.min(this.zoom + 0.2, this.maxZoom);
        this.updateZoomUI();
    }
    
    zoomOut() {
        this.zoom = Math.max(this.zoom - 0.2, this.minZoom);
        this.updateZoomUI();
    }
    
    resetView() {
        this.zoom = 1;
        this.panX = 0;
        this.panY = 0;
        this.updateZoomUI();
    }
    
    fitView() {
        // Calculate bounds and fit
        if (this.nodes.length === 0) return;
        
        let maxDist = 0;
        this.nodes.forEach(node => {
            const dist = Math.sqrt(node.x * node.x + node.y * node.y) + node.size;
            if (dist > maxDist) maxDist = dist;
        });
        
        const padding = 80;
        const availableSize = Math.min(this.width, this.height) / 2 - padding;
        this.zoom = availableSize / maxDist;
        this.zoom = Math.max(this.minZoom, Math.min(1.5, this.zoom));
        this.panX = 0;
        this.panY = 0;
        this.updateZoomUI();
    }
    
    showRelationshipDetails(node) {
        this.selectedRelation = node;
        this.focusMode = true;
        
        // Emit event for app.js to handle
        window.dispatchEvent(new CustomEvent('showRelationship', { 
            detail: { 
                from: this.centerCountry,
                to: node 
            }
        }));
    }
    
    clearSelection() {
        this.selectedRelation = null;
        this.focusMode = false;
        
        window.dispatchEvent(new CustomEvent('clearRelationship'));
    }
    
    toggleConnections(show) {
        this.showConnections = show;
    }
}

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { RadialEngine };
}
