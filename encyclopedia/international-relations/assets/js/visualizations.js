/**
 * GEOTOPIA UNITY ATLAS - VISUALIZATION LIBRARY
 * Complete chart rendering system for bilateral relationships
 * Dependencies: D3.js v7, Chart.js v4, D3-Sankey
 */

const VisualizationLibrary = {
    
    /**
     * 1. INTERACTIVE TIMELINE (D3.js)
     * Displays historical events with zoom and hover
     */
    createTimeline(containerId, data) {
        const container = document.getElementById(containerId);
        if (!container) return;

        // Clear existing
        container.innerHTML = '';

        const margin = { top: 40, right: 40, bottom: 60, left: 60 };
        const width = container.clientWidth - margin.left - margin.right;
        const height = 400 - margin.top - margin.bottom;

        const svg = d3.select(`#${containerId}`)
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        // Parse years
        const parseYear = d3.timeParse("%Y");
        data.events.forEach(d => {
            d.date = parseYear(d.year);
        });

        // Scales
        const xScale = d3.scaleTime()
            .domain(d3.extent(data.events, d => d.date))
            .range([0, width]);

        const yScale = d3.scaleLinear()
            .domain([0, 1])
            .range([height, 0]);

        // Axes
        svg.append('g')
            .attr('transform', `translate(0,${height})`)
            .call(d3.axisBottom(xScale).tickFormat(d3.timeFormat("%Y")))
            .selectAll('text')
            .attr('transform', 'rotate(-45)')
            .style('text-anchor', 'end');

        // Timeline line
        svg.append('line')
            .attr('x1', 0)
            .attr('x2', width)
            .attr('y1', height / 2)
            .attr('y2', height / 2)
            .attr('stroke', '#2563eb')
            .attr('stroke-width', 2);

        // Tooltip
        const tooltip = d3.select('body').append('div')
            .attr('class', 'timeline-tooltip')
            .style('position', 'absolute')
            .style('background', 'rgba(0,0,0,0.8)')
            .style('color', 'white')
            .style('padding', '10px')
            .style('border-radius', '5px')
            .style('pointer-events', 'none')
            .style('opacity', 0);

        // Event circles
        svg.selectAll('.event')
            .data(data.events)
            .enter()
            .append('circle')
            .attr('class', 'event')
            .attr('cx', d => xScale(d.date))
            .attr('cy', (d, i) => i % 2 === 0 ? height / 2 - 30 : height / 2 + 30)
            .attr('r', 8)
            .attr('fill', d => this.getImpactColor(d.impact))
            .attr('stroke', 'white')
            .attr('stroke-width', 2)
            .style('cursor', 'pointer')
            .on('mouseover', function(event, d) {
                d3.select(this)
                    .transition()
                    .duration(200)
                    .attr('r', 12);

                tooltip.transition()
                    .duration(200)
                    .style('opacity', 1);

                tooltip.html(`
                    <strong>${d.year}</strong><br/>
                    ${d.event}<br/>
                    <em>Impact: ${d.impact}</em>
                `)
                    .style('left', (event.pageX + 10) + 'px')
                    .style('top', (event.pageY - 28) + 'px');
            })
            .on('mouseout', function() {
                d3.select(this)
                    .transition()
                    .duration(200)
                    .attr('r', 8);

                tooltip.transition()
                    .duration(200)
                    .style('opacity', 0);
            });

        // Event labels
        svg.selectAll('.event-label')
            .data(data.events)
            .enter()
            .append('text')
            .attr('class', 'event-label')
            .attr('x', d => xScale(d.date))
            .attr('y', (d, i) => i % 2 === 0 ? height / 2 - 45 : height / 2 + 45)
            .attr('text-anchor', 'middle')
            .style('font-size', '10px')
            .style('fill', '#374151')
            .text(d => d.year);
    },

    /**
     * 2. TRADE FLOW SANKEY DIAGRAM (D3-Sankey)
     */
    createSankey(containerId, data) {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = '';

        const margin = { top: 20, right: 20, bottom: 20, left: 20 };
        const width = container.clientWidth - margin.left - margin.right;
        const height = 500 - margin.top - margin.bottom;

        const svg = d3.select(`#${containerId}`)
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        const sankey = d3.sankey()
            .nodeWidth(20)
            .nodePadding(10)
            .extent([[0, 0], [width, height]]);

        const { nodes, links } = sankey({
            nodes: data.nodes.map(d => Object.assign({}, d)),
            links: data.links.map(d => Object.assign({}, d))
        });

        // Links
        svg.append('g')
            .selectAll('path')
            .data(links)
            .enter()
            .append('path')
            .attr('d', d3.sankeyLinkHorizontal())
            .attr('fill', 'none')
            .attr('stroke', d => this.getTradeColor(d.source.name))
            .attr('stroke-width', d => Math.max(1, d.width))
            .attr('opacity', 0.5)
            .on('mouseover', function() {
                d3.select(this).attr('opacity', 0.8);
            })
            .on('mouseout', function() {
                d3.select(this).attr('opacity', 0.5);
            });

        // Nodes
        svg.append('g')
            .selectAll('rect')
            .data(nodes)
            .enter()
            .append('rect')
            .attr('x', d => d.x0)
            .attr('y', d => d.y0)
            .attr('width', d => d.x1 - d.x0)
            .attr('height', d => d.y1 - d.y0)
            .attr('fill', '#2563eb')
            .attr('stroke', '#1e40af');

        // Labels
        svg.append('g')
            .selectAll('text')
            .data(nodes)
            .enter()
            .append('text')
            .attr('x', d => d.x0 < width / 2 ? d.x1 + 6 : d.x0 - 6)
            .attr('y', d => (d.y1 + d.y0) / 2)
            .attr('dy', '0.35em')
            .attr('text-anchor', d => d.x0 < width / 2 ? 'start' : 'end')
            .text(d => d.name)
            .style('font-size', '12px')
            .style('fill', '#374151');
    },

    /**
     * 3. COMPARISON RADAR CHART (Chart.js)
     */
    createRadar(containerId, data) {
        const canvas = document.getElementById(containerId);
        if (!canvas) return;

        const ctx = canvas.getContext('2d');

        new Chart(ctx, {
            type: 'radar',
            data: {
                labels: data.labels,
                datasets: [
                    {
                        label: data.country1,
                        data: data.country1_values,
                        fill: true,
                        backgroundColor: 'rgba(37, 99, 235, 0.2)',
                        borderColor: '#2563eb',
                        borderWidth: 2,
                        pointBackgroundColor: '#2563eb',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: '#2563eb'
                    },
                    {
                        label: data.country2,
                        data: data.country2_values,
                        fill: true,
                        backgroundColor: 'rgba(245, 158, 11, 0.2)',
                        borderColor: '#f59e0b',
                        borderWidth: 2,
                        pointBackgroundColor: '#f59e0b',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: '#f59e0b'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            stepSize: 20
                        }
                    }
                },
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: data.title || 'Comparison Analysis'
                    }
                }
            }
        });
    },

    /**
     * 4. BAR CHART COMPARISON (Chart.js)
     */
    createBar(containerId, data) {
        const canvas = document.getElementById(containerId);
        if (!canvas) return;

        const ctx = canvas.getContext('2d');

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: data.labels,
                datasets: [
                    {
                        label: data.country1,
                        data: data.country1_values,
                        backgroundColor: '#2563eb',
                        borderColor: '#1e40af',
                        borderWidth: 1
                    },
                    {
                        label: data.country2,
                        data: data.country2_values,
                        backgroundColor: '#f59e0b',
                        borderColor: '#d97706',
                        borderWidth: 1
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: data.title || 'Statistical Comparison'
                    }
                }
            }
        });
    },

    /**
     * 5. NETWORK GRAPH (D3.js Force-Directed)
     */
    createNetwork(containerId, data) {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = '';

        const width = container.clientWidth;
        const height = 500;

        const svg = d3.select(`#${containerId}`)
            .attr('width', width)
            .attr('height', height);

        const simulation = d3.forceSimulation(data.nodes)
            .force('link', d3.forceLink(data.links).id(d => d.id).distance(100))
            .force('charge', d3.forceManyBody().strength(-300))
            .force('center', d3.forceCenter(width / 2, height / 2));

        // Links
        const link = svg.append('g')
            .selectAll('line')
            .data(data.links)
            .enter()
            .append('line')
            .attr('stroke', '#999')
            .attr('stroke-width', d => Math.sqrt(d.value))
            .attr('stroke-opacity', 0.6);

        // Nodes
        const node = svg.append('g')
            .selectAll('circle')
            .data(data.nodes)
            .enter()
            .append('circle')
            .attr('r', 10)
            .attr('fill', d => d.type === 'primary' ? '#2563eb' : '#10b981')
            .attr('stroke', '#fff')
            .attr('stroke-width', 2)
            .call(this.drag(simulation));

        // Labels
        const label = svg.append('g')
            .selectAll('text')
            .data(data.nodes)
            .enter()
            .append('text')
            .text(d => d.name)
            .style('font-size', '10px')
            .style('fill', '#374151')
            .attr('dx', 12)
            .attr('dy', 4);

        // Tooltip
        node.append('title')
            .text(d => d.name);

        simulation.on('tick', () => {
            link
                .attr('x1', d => d.source.x)
                .attr('y1', d => d.source.y)
                .attr('x2', d => d.target.x)
                .attr('y2', d => d.target.y);

            node
                .attr('cx', d => d.x)
                .attr('cy', d => d.y);

            label
                .attr('x', d => d.x)
                .attr('y', d => d.y);
        });
    },

    /**
     * 6. PIE CHART (Chart.js)
     */
    createPie(containerId, data) {
        const canvas = document.getElementById(containerId);
        if (!canvas) return;

        const ctx = canvas.getContext('2d');

        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: data.labels,
                datasets: [{
                    data: data.values,
                    backgroundColor: [
                        '#2563eb',
                        '#10b981',
                        '#f59e0b',
                        '#ef4444',
                        '#8b5cf6',
                        '#06b6d4'
                    ],
                    borderColor: '#fff',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'right',
                    },
                    title: {
                        display: true,
                        text: data.title || 'Distribution Analysis'
                    }
                }
            }
        });
    },

    /**
     * 7. LINE CHART (Chart.js) - Trends over time
     */
    createLine(containerId, data) {
        const canvas = document.getElementById(containerId);
        if (!canvas) return;

        const ctx = canvas.getContext('2d');

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.years,
                datasets: [{
                    label: data.metric,
                    data: data.values,
                    fill: true,
                    backgroundColor: 'rgba(37, 99, 235, 0.1)',
                    borderColor: '#2563eb',
                    borderWidth: 2,
                    tension: 0.4,
                    pointBackgroundColor: '#2563eb',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: data.title || 'Trend Analysis'
                    }
                }
            }
        });
    },

    /**
     * 8. STACKED BAR CHART (Chart.js)
     */
    createStackedBar(containerId, data) {
        const canvas = document.getElementById(containerId);
        if (!canvas) return;

        const ctx = canvas.getContext('2d');

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: data.labels,
                datasets: data.datasets.map((dataset, i) => ({
                    label: dataset.label,
                    data: dataset.values,
                    backgroundColor: this.getColorByIndex(i),
                    borderColor: this.getBorderColorByIndex(i),
                    borderWidth: 1
                }))
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        stacked: true,
                    },
                    y: {
                        stacked: true,
                        beginAtZero: true
                    }
                },
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: data.title || 'Stacked Analysis'
                    }
                }
            }
        });
    },

    /**
     * 9. HEATMAP (D3.js)
     */
    createHeatmap(containerId, data) {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = '';

        const margin = { top: 60, right: 20, bottom: 60, left: 120 };
        const width = container.clientWidth - margin.left - margin.right;
        const height = 400 - margin.top - margin.bottom;

        const svg = d3.select(`#${containerId}`)
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        // Scales
        const xScale = d3.scaleBand()
            .domain(data.columns)
            .range([0, width])
            .padding(0.05);

        const yScale = d3.scaleBand()
            .domain(data.rows)
            .range([0, height])
            .padding(0.05);

        const colorScale = d3.scaleSequential()
            .interpolator(d3.interpolateBlues)
            .domain([0, d3.max(data.values.flat())]);

        // Axes
        svg.append('g')
            .attr('transform', `translate(0,${height})`)
            .call(d3.axisBottom(xScale))
            .selectAll('text')
            .attr('transform', 'rotate(-45)')
            .style('text-anchor', 'end');

        svg.append('g')
            .call(d3.axisLeft(yScale));

        // Cells
        data.rows.forEach((row, i) => {
            data.columns.forEach((col, j) => {
                svg.append('rect')
                    .attr('x', xScale(col))
                    .attr('y', yScale(row))
                    .attr('width', xScale.bandwidth())
                    .attr('height', yScale.bandwidth())
                    .attr('fill', colorScale(data.values[i][j]))
                    .attr('stroke', '#fff')
                    .attr('stroke-width', 1)
                    .on('mouseover', function() {
                        d3.select(this).attr('stroke', '#000').attr('stroke-width', 2);
                    })
                    .on('mouseout', function() {
                        d3.select(this).attr('stroke', '#fff').attr('stroke-width', 1);
                    })
                    .append('title')
                    .text(`${row} - ${col}: ${data.values[i][j]}`);
            });
        });
    },

    /**
     * 10. GEOGRAPHIC MAP (D3.js with GeoJSON)
     */
    createGeoMap(containerId, data) {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = '';

        const width = container.clientWidth;
        const height = 500;

        const svg = d3.select(`#${containerId}`)
            .attr('width', width)
            .attr('height', height);

        const projection = d3.geoMercator()
            .center(data.center || [0, 0])
            .scale(data.scale || 150)
            .translate([width / 2, height / 2]);

        const path = d3.geoPath().projection(projection);

        // Draw countries
        if (data.geojson) {
            svg.append('g')
                .selectAll('path')
                .data(data.geojson.features)
                .enter()
                .append('path')
                .attr('d', path)
                .attr('fill', '#e5e7eb')
                .attr('stroke', '#fff')
                .attr('stroke-width', 0.5);
        }

        // Highlight specific countries
        if (data.highlights) {
            data.highlights.forEach(country => {
                svg.append('circle')
                    .attr('cx', projection([country.lon, country.lat])[0])
                    .attr('cy', projection([country.lon, country.lat])[1])
                    .attr('r', 8)
                    .attr('fill', '#2563eb')
                    .attr('stroke', '#fff')
                    .attr('stroke-width', 2)
                    .append('title')
                    .text(country.name);
            });
        }

        // Draw connections
        if (data.connections) {
            data.connections.forEach(conn => {
                const source = projection([conn.from.lon, conn.from.lat]);
                const target = projection([conn.to.lon, conn.to.lat]);

                svg.append('line')
                    .attr('x1', source[0])
                    .attr('y1', source[1])
                    .attr('x2', target[0])
                    .attr('y2', target[1])
                    .attr('stroke', '#2563eb')
                    .attr('stroke-width', 2)
                    .attr('stroke-dasharray', '5,5')
                    .attr('opacity', 0.6);
            });
        }
    },

    /**
     * 11. MINDMAP (D3.js Tree Layout)
     */
    createMindmap(containerId, data) {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = '';

        const width = container.clientWidth;
        const height = 600;

        const svg = d3.select(`#${containerId}`)
            .attr('width', width)
            .attr('height', height)
            .append('g')
            .attr('transform', `translate(${width / 2},${height / 2})`);

        const tree = d3.tree()
            .size([360, Math.min(width, height) / 2 - 100])
            .separation((a, b) => (a.parent == b.parent ? 1 : 2) / a.depth);

        const root = d3.hierarchy(data);
        tree(root);

        // Links
        svg.append('g')
            .selectAll('path')
            .data(root.links())
            .enter()
            .append('path')
            .attr('d', d3.linkRadial()
                .angle(d => d.x / 180 * Math.PI)
                .radius(d => d.y))
            .attr('fill', 'none')
            .attr('stroke', '#2563eb')
            .attr('stroke-width', 2);

        // Nodes
        const node = svg.append('g')
            .selectAll('g')
            .data(root.descendants())
            .enter()
            .append('g')
            .attr('transform', d => `rotate(${d.x - 90}) translate(${d.y},0)`);

        node.append('circle')
            .attr('r', 6)
            .attr('fill', d => d.children ? '#2563eb' : '#10b981')
            .attr('stroke', '#fff')
            .attr('stroke-width', 2);

        node.append('text')
            .attr('dy', '0.31em')
            .attr('x', d => d.x < 180 === !d.children ? 10 : -10)
            .attr('text-anchor', d => d.x < 180 === !d.children ? 'start' : 'end')
            .attr('transform', d => d.x >= 180 ? 'rotate(180)' : null)
            .text(d => d.data.name)
            .style('font-size', '11px')
            .style('fill', '#374151');
    },

    /**
     * HELPER FUNCTIONS
     */
    getImpactColor(impact) {
        const impacts = {
            'positive': '#10b981',
            'negative': '#ef4444',
            'neutral': '#f59e0b',
            'mixed': '#8b5cf6'
        };
        return impacts[impact.toLowerCase()] || '#6b7280';
    },

    getTradeColor(category) {
        const colors = {
            'exports': '#2563eb',
            'imports': '#10b981',
            'services': '#f59e0b'
        };
        return colors[category.toLowerCase()] || '#6b7280';
    },

    getColorByIndex(index) {
        const colors = ['#2563eb', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'];
        return colors[index % colors.length];
    },

    getBorderColorByIndex(index) {
        const colors = ['#1e40af', '#059669', '#d97706', '#dc2626', '#7c3aed', '#0891b2'];
        return colors[index % colors.length];
    },

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
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = VisualizationLibrary;
}
