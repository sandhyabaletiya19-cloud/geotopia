// ============================================
// UNITY ATLAS - ADVANCED VISUALIZATIONS
// ============================================

// This file contains advanced D3.js and Chart.js visualizations

class UnityAtlasViz {
    constructor() {
        this.colors = {
            primary: '#F39C12',
            secondary: '#3498DB',
            success: '#27AE60',
            warning: '#F1C40F',
            danger: '#E74C3C',
            info: '#9B59B6',
            ocean: '#1A5276',
            forest: '#2D5016'
        };
    }
    
    // ============================================
    // RELATIONSHIP NETWORK GRAPH
    // ============================================
    
    createNetworkGraph(containerId, data) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        const width = container.offsetWidth;
        const height = 500;
        
        // Clear previous content
        container.innerHTML = '';
        
        const svg = d3.select(`#${containerId}`)
            .append('svg')
            .attr('width', width)
            .attr('height', height)
            .attr('viewBox', `0 0 ${width} ${height}`);
        
        // Create nodes and links from data
        const nodes = this.extractNodes(data);
        const links = this.extractLinks(data, nodes);
        
        // Create force simulation
        const simulation = d3.forceSimulation(nodes)
            .force('link', d3.forceLink(links).id(d => d.id).distance(100))
            .force('charge', d3.forceManyBody().strength(-300))
            .force('center', d3.forceCenter(width / 2, height / 2))
            .force('collision', d3.forceCollide().radius(40));
        
        // Create links
        const link = svg.append('g')
            .selectAll('line')
            .data(links)
            .join('line')
            .attr('stroke', d => this.getRelationshipStrokeColor(d.type))
            .attr('stroke-opacity', 0.6)
            .attr('stroke-width', d => Math.sqrt(d.strength / 20));
        
        // Create nodes
        const node = svg.append('g')
            .selectAll('g')
            .data(nodes)
            .join('g')
            .call(this.drag(simulation));
        
        // Add circles to nodes
        node.append('circle')
            .attr('r', d => d.isCenter ? 25 : 18)
            .attr('fill', d => d.isCenter ? this.colors.primary : this.colors.secondary)
            .attr('stroke', '#fff')
            .attr('stroke-width', 2);
        
        // Add text to nodes
        node.append('text')
            .text(d => d.flag || d.id)
            .attr('text-anchor', 'middle')
            .attr('dy', '0.35em')
            .attr('font-size', d => d.isCenter ? '1.5rem' : '1.2rem');
        
        // Add labels
        node.append('text')
            .text(d => d.name)
            .attr('text-anchor', 'middle')
            .attr('dy', '2.5em')
            .attr('fill', '#fff')
            .attr('font-size', '0.7rem');
        
        // Update positions on tick
        simulation.on('tick', () => {
            link
                .attr('x1', d => d.source.x)
                .attr('y1', d => d.source.y)
                .attr('x2', d => d.target.x)
                .attr('y2', d => d.target.y);
            
            node.attr('transform', d => `translate(${d.x},${d.y})`);
        });
    }
    
    extractNodes(data) {
        const nodes = [{
            id: data.country_code,
            name: data.country_name,
            flag: data.flag,
            isCenter: true
        }];
        
        // Add neighbours
        const neighbours = data['02_immediate_neighbours']?.countries || [];
        neighbours.forEach(n => {
            nodes.push({
                id: n.code,
                name: n.name,
                flag: n.flag,
                isCenter: false
            });
        });
        
        return nodes;
    }
    
    extractLinks(data, nodes) {
        const links = [];
        const nodeIds = new Set(nodes.map(n => n.id));
        
        // Add links for neighbours
        const neighbours = data['02_immediate_neighbours']?.countries || [];
        neighbours.forEach(n => {
            if (nodeIds.has(n.code)) {
                links.push({
                    source: data.country_code,
                    target: n.code,
                    type: n.relationship_type,
                    strength: 75
                });
            }
        });
        
        return links;
    }
    
    getRelationshipStrokeColor(type) {
        if (!type) return '#666';
        const lower = type.toLowerCase();
        if (lower.includes('strategic') || lower.includes('excellent')) return this.colors.success;
        if (lower.includes('adversarial') || lower.includes('hostile')) return this.colors.danger;
        if (lower.includes('complex') || lower.includes('strained')) return this.colors.warning;
        return this.colors.info;
    }
    
    drag(simulation) {
        function dragstarted(event) {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            event.subject.fx = event.subject.x;
            event.subject.fy = event.subject.y;
        }
        
        function dragged(event) {
            event.subject.fx = event.x;
            event.subject.fy = event.y;
        }
        
        function dragended(event) {
            if (!event.active) simulation.alphaTarget(0);
            event.subject.fx = null;
            event.subject.fy = null;
        }
        
        return d3.drag()
            .on('start', dragstarted)
            .on('drag', dragged)
            .on('end', dragended);
    }
    
    // ============================================
    // RADAR CHART - Foreign Policy Dimensions
    // ============================================
    
    createRadarChart(canvasId, data) {
        const canvas = document.getElementById(canvasId);
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        
        // Extract dimensions from visualizations data
        let dimensions = ['Defense', 'Trade', 'Diplomacy', 'Soft Power', 'Regional', 'Global'];
        let values = [75, 85, 80, 70, 85, 75]; // Default values
        
        if (data['14_visualizations']) {
            const radarViz = data['14_visualizations'].find(v => v.type === 'radar_chart');
            if (radarViz && radarViz.data) {
                dimensions = radarViz.data.dimensions || dimensions;
                values = radarViz.data.values || values;
            }
        }
        
        new Chart(ctx, {
            type: 'radar',
            data: {
                labels: dimensions,
                datasets: [{
                    label: 'Foreign Policy Dimensions',
                    data: values,
                    backgroundColor: 'rgba(243, 156, 18, 0.2)',
                    borderColor: 'rgba(243, 156, 18, 1)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(243, 156, 18, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(243, 156, 18, 1)'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            stepSize: 20,
                            color: 'rgba(255, 255, 255, 0.5)',
                            backdropColor: 'transparent'
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        angleLines: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        pointLabels: {
                            color: 'rgba(255, 255, 255, 0.8)',
                            font: {
                                size: 12
                            }
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }
    
    // ============================================
    // TIMELINE VISUALIZATION
    // ============================================
    
    createTimeline(containerId, data) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        const developments = data['11_contemporary_developments'] || {};
        let events = [];
        
        // Flatten events
        Object.entries(developments).forEach(([year, yearEvents]) => {
            if (Array.isArray(yearEvents)) {
                yearEvents.forEach(e => {
                    events.push({
                        date: e.date || year,
                        event: e.event,
                        category: e.category,
                        significance: e.significance
                    });
                });
            }
        });
        
        // Sort by date
        events.sort((a, b) => b.date.localeCompare(a.date));
        events = events.slice(0, 15);
        
        if (events.length === 0) {
            container.innerHTML = '<p>No timeline data available.</p>';
            return;
        }
        
        const width = container.offsetWidth;
        const height = events.length * 80 + 100;
        
        container.innerHTML = '';
        
        const svg = d3.select(`#${containerId}`)
            .append('svg')
            .attr('width', width)
            .attr('height', height);
        
        // Draw timeline line
        svg.append('line')
            .attr('x1', 50)
            .attr('y1', 30)
            .attr('x2', 50)
            .attr('y2', height - 30)
            .attr('stroke', this.colors.primary)
            .attr('stroke-width', 3);
        
        // Add events
        events.forEach((event, i) => {
            const y = 50 + i * 70;
            
            // Circle
            svg.append('circle')
                .attr('cx', 50)
                .attr('cy', y)
                .attr('r', 8)
                .attr('fill', this.colors.primary)
                .attr('stroke', '#fff')
                .attr('stroke-width', 2);
            
            // Date
            svg.append('text')
                .attr('x', 70)
                .attr('y', y - 10)
                .attr('fill', this.colors.primary)
                .attr('font-size', '0.85rem')
                .attr('font-weight', '600')
                .text(event.date);
            
            // Event text
            svg.append('text')
                .attr('x', 70)
                .attr('y', y + 10)
                .attr('fill', '#fff')
                .attr('font-size', '0.9rem')
                .text(event.event.substring(0, 80) + (event.event.length > 80 ? '...' : ''));
            
            // Category tag
            if (event.category) {
                svg.append('rect')
                    .attr('x', 70)
                    .attr('y', y + 18)
                    .attr('width', event.category.length * 7 + 16)
                    .attr('height', 20)
                    .attr('rx', 10)
                    .attr('fill', 'rgba(52, 152, 219, 0.3)');
                
                svg.append('text')
                    .attr('x', 78)
                    .attr('y', y + 32)
                    .attr('fill', this.colors.secondary)
                    .attr('font-size', '0.7rem')
                    .text(event.category);
            }
        });
    }
    
    // ============================================
    // SANKEY DIAGRAM - Trade Flows
    // ============================================
    
    createSankeyDiagram(containerId, data) {
        // Simplified Sankey using D3
        const container = document.getElementById(containerId);
        if (!container) return;
        
        // This is a simplified version - full Sankey would require d3-sankey plugin
        container.innerHTML = '<p style="text-align: center; padding: 2rem; color: rgba(255,255,255,0.7);">Sankey diagram visualization coming soon...</p>';
    }
    
    // ============================================
    // WORLD HEAT MAP
    // ============================================
    
    createWorldHeatMap(containerId, data) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        // Initialize Leaflet map with heat coloring
        const map = L.map(containerId, {
            center: [20, 0],
            zoom: 2,
            minZoom: 1,
            maxZoom: 6
        });
        
        // Add dark tiles
        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; OpenStreetMap, &copy; CARTO'
        }).addTo(map);
        
        // Add country markers based on relationship strength
        // This would require GeoJSON data for full implementation
    }
}

// Initialize visualizations
const unityViz = new UnityAtlasViz();

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = UnityAtlasViz;
}
