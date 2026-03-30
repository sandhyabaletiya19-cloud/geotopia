/* ====================================
   GEOTOPIA IR - VISUALIZATIONS
   D3.js Network + Chart.js Analytics
   ==================================== */

const IR_VIZ = {

  // ==========================================
  // GLOBAL NETWORK VISUALIZATION (D3.js)
  // ==========================================
  
  networkGraph: null,
  simulation: null,
  
  initGlobalNetwork: function() {
    const container = document.getElementById('network-canvas');
    if (!container) return;
    
    const width = container.offsetWidth;
    const height = container.offsetHeight;
    
    // Clear existing
    d3.select('#network-canvas').selectAll('*').remove();
    
    // Create SVG
    const svg = d3.select('#network-canvas')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', [0, 0, width, height]);
    
    // Add zoom behavior
    const g = svg.append('g');
    
    svg.call(d3.zoom()
      .scaleExtent([0.5, 5])
      .on('zoom', (event) => {
        g.attr('transform', event.transform);
      })
    );
    
    // Prepare data
    const nodes = this.prepareNodes();
    const links = this.prepareLinks();
    
    // Create force simulation
    this.simulation = d3.forceSimulation(nodes)
      .force('link', d3.forceLink(links).id(d => d.id).distance(d => this.getLinkDistance(d)))
      .force('charge', d3.forceManyBody().strength(-300))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collision', d3.forceCollide().radius(25));
    
    // Create links
    const link = g.append('g')
      .attr('class', 'links')
      .selectAll('line')
      .data(links)
      .enter()
      .append('line')
      .attr('stroke', d => this.getLinkColor(d.strength))
      .attr('stroke-width', d => Math.max(1, d.strength / 2))
      .attr('opacity', 0.6)
      .attr('class', 'network-link');
    
    // Create node groups
    const node = g.append('g')
      .attr('class', 'nodes')
      .selectAll('g')
      .data(nodes)
      .enter()
      .append('g')
      .attr('class', 'network-node')
      .call(this.drag(this.simulation));
    
    // Add circles for nodes (colored by tier)
    node.append('circle')
      .attr('r', d => this.getNodeSize(d.tier))
      .attr('fill', d => this.getNodeColor(d.tier))
      .attr('stroke', '#fff')
      .attr('stroke-width', 2)
      .style('cursor', 'pointer');
    
    // Add country flags as text (emoji)
    node.append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', 5)
      .style('font-size', d => this.getNodeSize(d.tier) * 1.2 + 'px')
      .style('pointer-events', 'none')
      .text(d => d.flag);
    
    // Add country labels
    node.append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', d => this.getNodeSize(d.tier) + 15)
      .style('font-size', '10px')
      .style('fill', '#fff')
      .style('pointer-events', 'none')
      .attr('class', 'country-label')
      .text(d => d.code);
    
    // Add tooltips on hover
    node.on('mouseenter', (event, d) => {
      this.showTooltip(event, d);
      // Highlight connected links
      link.style('opacity', l => {
        return (l.source.id === d.id || l.target.id === d.id) ? 1 : 0.1;
      });
      node.style('opacity', n => {
        return this.isConnected(n, d, links) ? 1 : 0.3;
      });
    })
    .on('mouseleave', () => {
      this.hideTooltip();
      link.style('opacity', 0.6);
      node.style('opacity', 1);
    })
    .on('click', (event, d) => {
      this.handleCountryClick(d.code);
    });
    
    // Update positions on tick
    this.simulation.on('tick', () => {
      link
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y);
      
      node.attr('transform', d => `translate(${d.x},${d.y})`);
    });
    
    this.networkGraph = {svg, g, node, link, width, height};
  },
  
  prepareNodes: function() {
    const nodes = [];
    for (let code in IR_DATA.countries) {
      const country = IR_DATA.countries[code];
      nodes.push({
        id: code,
        code: code,
        name: country.name,
        flag: country.flag,
        tier: country.tier,
        region: country.region,
        population: country.population
      });
    }
    return nodes;
  },
  
  prepareLinks: function() {
    const links = [];
    const processed = new Set();
    
    for (let relKey in IR_DATA.relationships) {
      const rel = IR_DATA.relationships[relKey];
      const key = [rel.countryA, rel.countryB].sort().join('-');
      
      if (!processed.has(key)) {
        links.push({
          source: rel.countryA,
          target: rel.countryB,
          strength: rel.strength,
          type: rel.type
        });
        processed.add(key);
      }
    }
    
    return links;
  },
  
  getLinkDistance: function(link) {
    // Stronger relationships = shorter distance
    return 100 + (10 - link.strength) * 20;
  },
  
  getLinkColor: function(strength) {
    if (strength >= 8) return '#4ade80'; // Green - strong allies
    if (strength >= 5) return '#fbbf24'; // Yellow - neutral
    if (strength >= 3) return '#fb923c'; // Orange - strained
    return '#f87171'; // Red - conflict
  },
  
  getNodeSize: function(tier) {
    if (tier === 1) return 20;
    if (tier === 2) return 15;
    return 10;
  },
  
  getNodeColor: function(tier) {
    if (tier === 1) return '#667eea';
    if (tier === 2) return '#764ba2';
    return '#9333ea';
  },
  
  isConnected: function(nodeA, nodeB, links) {
    if (nodeA.id === nodeB.id) return true;
    return links.some(l => {
      return (l.source.id === nodeA.id && l.target.id === nodeB.id) ||
             (l.target.id === nodeA.id && l.source.id === nodeB.id);
    });
  },
  
  drag: function(simulation) {
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
  },
  
  showTooltip: function(event, data) {
    let tooltip = document.getElementById('network-tooltip');
    if (!tooltip) {
      tooltip = document.createElement('div');
      tooltip.id = 'network-tooltip';
      tooltip.style.cssText = `
        position: absolute;
        background: rgba(26, 26, 46, 0.95);
        backdrop-filter: blur(10px);
        color: white;
        padding: 1rem;
        border-radius: 10px;
        border: 1px solid rgba(255,255,255,0.2);
        pointer-events: none;
        z-index: 10000;
        font-size: 14px;
        max-width: 250px;
      `;
      document.body.appendChild(tooltip);
    }
    
    tooltip.innerHTML = `
      <div style="font-size: 24px; margin-bottom: 5px;">${data.flag}</div>
      <div style="font-weight: 700; margin-bottom: 5px;">${data.name}</div>
      <div style="opacity: 0.8; font-size: 12px;">
        Region: ${data.region}<br>
        Population: ${data.population}<br>
        Tier: ${data.tier}
      </div>
      <div style="margin-top: 8px; color: #fbbf24; font-size: 11px;">
        Click to explore relationships →
      </div>
    `;
    
    tooltip.style.left = (event.pageX + 15) + 'px';
    tooltip.style.top = (event.pageY - 50) + 'px';
    tooltip.style.display = 'block';
  },
  
  hideTooltip: function() {
    const tooltip = document.getElementById('network-tooltip');
    if (tooltip) tooltip.style.display = 'none';
  },
  
  handleCountryClick: function(countryCode) {
    // Trigger main app function
    if (typeof selectMainCountry === 'function') {
      selectMainCountry(countryCode);
    }
  },
  
  filterByStrength: function(minStrength) {
    if (!this.networkGraph) return;
    
    const {link} = this.networkGraph;
    
    link.style('display', d => {
      return d.strength >= minStrength ? 'block' : 'none';
    });
  },
  
  resetNetwork: function() {
    if (this.simulation) {
      this.simulation.alpha(1).restart();
    }
  },
  
  toggleLabels: function() {
    const labels = document.querySelectorAll('.country-label');
    labels.forEach(label => {
      const currentDisplay = window.getComputedStyle(label).display;
      label.style.display = currentDisplay === 'none' ? 'block' : 'none';
    });
  },
  
  
  // ==========================================
  // COUNTRY-SPECIFIC MINI NETWORK
  // ==========================================
  
  createCountryNetwork: function(countryCode) {
    const container = document.getElementById('country-mini-network');
    if (!container) return;
    
    const width = container.offsetWidth;
    const height = container.offsetHeight;
    
    d3.select('#country-mini-network').selectAll('*').remove();
    
    const svg = d3.select('#country-mini-network')
      .append('svg')
      .attr('width', width)
      .attr('height', height);
    
    const g = svg.append('g');
    
    // Get relationships for this country
    const relationships = this.getCountryRelationships(countryCode);
    
    // Create nodes: center country + all partners
    const centerNode = {
      id: countryCode,
      ...IR_DATA.countries[countryCode],
      x: width / 2,
      y: height / 2,
      fx: width / 2,
      fy: height / 2
    };
    
    const partnerNodes = relationships.map((rel, i) => {
      const partnerId = rel.countryA === countryCode ? rel.countryB : rel.countryA;
      const angle = (Math.PI * 2 * i) / relationships.length;
      const radius = Math.min(width, height) * 0.35;
      
      return {
        id: partnerId,
        ...IR_DATA.countries[partnerId],
        strength: rel.strength,
        angle: angle,
        targetX: width/2 + Math.cos(angle) * radius,
        targetY: height/2 + Math.sin(angle) * radius
      };
    });
    
    const nodes = [centerNode, ...partnerNodes];
    
    // Create links
    const links = partnerNodes.map(partner => ({
      source: countryCode,
      target: partner.id,
      strength: partner.strength
    }));
    
    // Force simulation
    const simulation = d3.forceSimulation(nodes)
      .force('link', d3.forceLink(links).id(d => d.id).distance(200))
      .force('charge', d3.forceManyBody().strength(-100))
      .force('collision', d3.forceCollide().radius(30))
      .force('r', d3.forceRadial(d => d.id === countryCode ? 0 : Math.min(width, height) * 0.35, width/2, height/2).strength(0.8));
    
    // Draw links
    const link = g.append('g')
      .selectAll('line')
      .data(links)
      .enter()
      .append('line')
      .attr('stroke', d => this.getLinkColor(d.strength))
      .attr('stroke-width', d => Math.max(2, d.strength / 1.5))
      .attr('opacity', 0.7);
    
    // Draw nodes
    const node = g.append('g')
      .selectAll('g')
      .data(nodes)
      .enter()
      .append('g')
      .style('cursor', d => d.id === countryCode ? 'default' : 'pointer');
    
    // Add circles
    node.append('circle')
      .attr('r', d => d.id === countryCode ? 40 : 25)
      .attr('fill', d => d.id === countryCode ? '#667eea' : this.getNodeColor(d.tier))
      .attr('stroke', '#fff')
      .attr('stroke-width', d => d.id === countryCode ? 4 : 2);
    
    // Add flags
    node.append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', 8)
      .style('font-size', d => d.id === countryCode ? '32px' : '20px')
      .style('pointer-events', 'none')
      .text(d => d.flag);
    
    // Add labels
    node.append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', d => d.id === countryCode ? 60 : 40)
      .style('font-size', d => d.id === countryCode ? '14px' : '11px')
      .style('fill', '#fff')
      .style('font-weight', d => d.id === countryCode ? '700' : '500')
      .style('pointer-events', 'none')
      .text(d => d.name);
    
    // Add strength badges
    node.filter(d => d.id !== countryCode)
      .append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', -30)
      .style('font-size', '10px')
      .style('fill', d => this.getLinkColor(d.strength))
      .style('font-weight', '700')
      .style('pointer-events', 'none')
      .text(d => d.strength.toFixed(1));
    
    // Click handler for partner countries
    node.filter(d => d.id !== countryCode)
      .on('click', (event, d) => {
        if (typeof loadBilateralRelation === 'function') {
          document.getElementById('partner-select').value = d.id;
          loadBilateralRelation(d.id);
        }
      });
    
    // Update positions
    simulation.on('tick', () => {
      link
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y);
      
      node.attr('transform', d => `translate(${d.x},${d.y})`);
    });
  },
  
  getCountryRelationships: function(countryCode) {
    const relationships = [];
    for (let key in IR_DATA.relationships) {
      const rel = IR_DATA.relationships[key];
      if (rel.countryA === countryCode || rel.countryB === countryCode) {
        relationships.push(rel);
      }
    }
    return relationships;
  },
  
  
  // ==========================================
  // CHART.JS VISUALIZATIONS
  // ==========================================
  
  createTradeChart: function(data) {
    const ctx = document.getElementById('trade-chart');
    if (!ctx) return;
    
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['2024', '2025', '2026'],
        datasets: [
          {
            label: 'Total Trade',
            data: [data.trade['2024'], data.trade['2025'], data.trade['2026']],
            borderColor: '#667eea',
            backgroundColor: 'rgba(102, 126, 234, 0.1)',
            tension: 0.4,
            fill: true
          },
          {
            label: 'Exports',
            data: [data.tradeBalance.indiaExports * 0.9, data.tradeBalance.indiaExports * 0.95, data.tradeBalance.indiaExports],
            borderColor: '#4ade80',
            tension: 0.4
          },
          {
            label: 'Imports',
            data: [data.tradeBalance.indiaImports * 0.9, data.tradeBalance.indiaImports * 0.95, data.tradeBalance.indiaImports],
            borderColor: '#f87171',
            tension: 0.4
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {color: '#fff'}
          },
          title: {
            display: true,
            text: 'Trade Volume Trends',
            color: '#fff',
            font: {size: 16}
          }
        },
        scales: {
          y: {
            ticks: {color: '#fff'},
            grid: {color: 'rgba(255,255,255,0.1)'}
          },
          x: {
            ticks: {color: '#fff'},
            grid: {color: 'rgba(255,255,255,0.1)'}
          }
        }
      }
    });
  },
  
  createMilitaryComparison: function(data) {
    const ctx = document.getElementById('military-chart');
    if (!ctx) return;
    
    const countries = Object.keys(data);
    const metrics = ['activeTroops', 'defenseBudget2026', 'aircraftTotal', 'tanks'];
    
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: metrics.map(m => m.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())),
        datasets: countries.map((country, i) => ({
          label: country.toUpperCase(),
          data: metrics.map(metric => data[country][metric]),
          backgroundColor: i === 0 ? 'rgba(102, 126, 234, 0.7)' : 'rgba(248, 113, 113, 0.7)',
          borderColor: i === 0 ? '#667eea' : '#f87171',
          borderWidth: 2
        }))
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {labels: {color: '#fff'}},
          title: {
            display: true,
            text: 'Military Comparison',
            color: '#fff',
            font: {size: 16}
          }
        },
        scales: {
          y: {
            ticks: {color: '#fff'},
            grid: {color: 'rgba(255,255,255,0.1)'}
          },
          x: {
            ticks: {color: '#fff'},
            grid: {color: 'rgba(255,255,255,0.1)'}
          }
        }
      }
    });
  },
  
  createExportPieChart: function(data) {
    const ctx = document.getElementById('exports-chart');
    if (!ctx) return;
    
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: data.map(item => item.item),
        datasets: [{
          data: data.map(item => item.value),
          backgroundColor: [
            '#667eea', '#764ba2', '#4ade80', '#fbbf24', 
            '#f87171', '#fb923c', '#a78bfa', '#34d399'
          ],
          borderWidth: 2,
          borderColor: '#1a1a2e'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right',
            labels: {color: '#fff', font: {size: 11}}
          },
          title: {
            display: true,
            text: 'Top Export Commodities',
            color: '#fff',
            font: {size: 16}
          }
        }
      }
    });
  },
  
  createTimelineVisualization: function(events) {
    const container = document.getElementById('timeline-viz');
    if (!container) return;
    
    container.innerHTML = '';
    
    const timeline = document.createElement('div');
    timeline.className = 'timeline';
    
    events.forEach(event => {
      const item = document.createElement('div');
      item.className = 'timeline-item';
      item.innerHTML = `
        <div class="year">${event.year}</div>
        <div class="event">${event.event}</div>
        <div class="impact">${event.impact}</div>
      `;
      timeline.appendChild(item);
    });
    
    container.appendChild(timeline);
  },
  
  createIssuesHeatmap: function(issues) {
    const container = document.getElementById('issues-heatmap');
    if (!container) return;
    
    container.innerHTML = '<h4>Major Issues by Severity</h4>';
    
    const heatmap = document.createElement('div');
    heatmap.style.cssText = 'display: grid; gap: 1rem; margin-top: 1rem;';
    
    issues.forEach(issue => {
      const item = document.createElement('div');
      const intensity = (issue.severity / 10) * 100;
      item.style.cssText = `
        padding: 1rem;
        background: linear-gradient(90deg, 
          rgba(248, 113, 113, ${intensity/100}) 0%, 
          rgba(248, 113, 113, 0.1) 100%);
        border-left: 4px solid ${this.getSeverityColor(issue.severity)};
        border-radius: 8px;
      `;
      item.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <strong>${issue.issue}</strong>
          <span style="background: ${this.getSeverityColor(issue.severity)}; 
                       padding: 0.25rem 0.75rem; 
                       border-radius: 20px; 
                       font-size: 0.85rem;">
            ${issue.severity}/10
          </span>
        </div>
        ${issue.description ? `<p style="margin-top: 0.5rem; opacity: 0.8; font-size: 0.9rem;">${issue.description}</p>` : ''}
      `;
      heatmap.appendChild(item);
    });
    
    container.appendChild(heatmap);
  },
  
  getSeverityColor: function(severity) {
    if (severity >= 8) return '#dc2626';
    if (severity >= 6) return '#fb923c';
    if (severity >= 4) return '#fbbf24';
    return '#4ade80';
  },
  
  createCeasefireChart: function(data) {
    const ctx = document.getElementById('ceasefire-chart');
    if (!ctx) return;
    
    const years = Object.keys(data);
    const values = Object.values(data);
    
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: years,
        datasets: [{
          label: 'Ceasefire Violations',
          data: values,
          borderColor: '#f87171',
          backgroundColor: 'rgba(248, 113, 113, 0.2)',
          fill: true,
          tension: 0.4,
          pointRadius: 5,
          pointHoverRadius: 7
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {labels: {color: '#fff'}},
          title: {
            display: true,
            text: 'Ceasefire Violations Over Time',
            color: '#fff'
          },
          annotation: {
            annotations: {
              line1: {
                type: 'line',
                xMin: '2021',
                xMax: '2021',
                borderColor: '#4ade80',
                borderWidth: 2,
                label: {
                  display: true,
                  content: '2021 Agreement',
                  position: 'top'
                }
              }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {color: '#fff'},
            grid: {color: 'rgba(255,255,255,0.1)'}
          },
          x: {
            ticks: {color: '#fff'},
            grid: {color: 'rgba(255,255,255,0.1)'}
          }
        }
      }
    });
  },
  
  createWaterFlowDiagram: function(data) {
    const container = document.getElementById('water-flow');
    if (!container) return;
    
    // Simple visual representation of Indus Waters Treaty
    container.innerHTML = `
      <div style="text-align: center; padding: 2rem;">
        <h4 style="margin-bottom: 2rem; color: #667eea;">Indus Waters Treaty - River Allocation</h4>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; max-width: 600px; margin: 0 auto;">
          <div style="padding: 1.5rem; background: rgba(74, 222, 128, 0.2); border-radius: 15px; border: 2px solid #4ade80;">
            <div style="font-size: 2rem; margin-bottom: 1rem;">🇵🇰</div>
            <strong style="color: #4ade80;">Pakistan Rivers (80%)</strong>
            <ul style="list-style: none; padding: 0; margin-top: 1rem;">
              <li>🌊 Indus</li>
              <li>🌊 Jhelum</li>
              <li>🌊 Chenab</li>
            </ul>
          </div>
          <div style="padding: 1.5rem; background: rgba(102, 126, 234, 0.2); border-radius: 15px; border: 2px solid #667eea;">
            <div style="font-size: 2rem; margin-bottom: 1rem;">🇮🇳</div>
            <strong style="color: #667eea;">India Rivers (20%)</strong>
            <ul style="list-style: none; padding: 0; margin-top: 1rem;">
              <li>🌊 Ravi</li>
              <li>🌊 Beas</li>
              <li>🌊 Sutlej</li>
            </ul>
          </div>
        </div>
        <p style="margin-top: 2rem; opacity: 0.8; font-size: 0.9rem;">
          Treaty signed: September 19, 1960 | Mediator: World Bank<br>
          Only water-sharing treaty to survive 4 wars
        </p>
      </div>
    `;
  },
  
  
  // ==========================================
  // UTILITY FUNCTIONS
  // ==========================================
  
  destroyChart: function(chartId) {
    const canvas = document.getElementById(chartId);
    if (canvas) {
      const existingChart = Chart.getChart(canvas);
      if (existingChart) {
        existingChart.destroy();
      }
    }
  },
  
  clearContainer: function(containerId) {
    const container = document.getElementById(containerId);
    if (container) {
      container.innerHTML = '';
    }
  }
};

// Initialize on load
document.addEventListener('DOMContentLoaded', function() {
  if (document.getElementById('network-canvas')) {
    IR_VIZ.initGlobalNetwork();
  }
});

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = IR_VIZ;
}
