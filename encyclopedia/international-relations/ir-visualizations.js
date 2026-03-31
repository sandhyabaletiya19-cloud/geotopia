/* =====================================================
   GEOTOPIA INTERNATIONAL RELATIONS - VISUALIZATIONS
   ===================================================== */

const IR_VISUALIZATIONS = {
    
    // Color schemes
    colors: {
        positive: ['#2ec4b6', '#57c5b6', '#8dd6cd'],
        negative: ['#e63946', '#f07167', '#f4a5ab'],
        neutral: ['#8d99ae', '#adb5bd', '#ced4da'],
        accent: ['#ffc857', '#ffdd87', '#fff1b8']
    },

    // Create relationship strength gauge
    createStrengthGauge: function(containerId, strength) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const color = this.getStrengthColor(strength);
        
        container.innerHTML = `
            <div class="gauge-container">
                <svg viewBox="0 0 100 60" class="gauge-svg">
                    <path d="M10,50 A40,40 0 0,1 90,50" 
                          fill="none" 
                          stroke="#2a3a5a" 
                          stroke-width="8"
                          stroke-linecap="round"/>
                    <path d="M10,50 A40,40 0 0,1 90,50" 
                          fill="none" 
                          stroke="${color}" 
                          stroke-width="8"
                          stroke-linecap="round"
                          stroke-dasharray="${strength * 1.26}, 126"
                          class="gauge-fill"/>
                </svg>
                <div class="gauge-value">${strength}</div>
                <div class="gauge-label">${this.getStrengthLabel(strength)}</div>
            </div>
        `;
    },

    // Get color based on strength
    getStrengthColor: function(strength) {
        if (strength >= 80) return '#2ec4b6';
        if (strength >= 60) return '#57c5b6';
        if (strength >= 40) return '#ffc857';
        if (strength >= 20) return '#ff9f1c';
        return '#e63946';
    },

    // Get label based on strength
    getStrengthLabel: function(strength) {
        if (strength >= 80) return 'Strong Alliance';
        if (strength >= 60) return 'Friendly Relations';
        if (strength >= 40) return 'Complex Relationship';
        if (strength >= 20) return 'Strained Relations';
        return 'Hostile';
    },

    // Create timeline visualization
    createTimeline: function(containerId, events) {
        const container = document.getElementById(containerId);
        if (!container || !events.length) return;

        let html = '<div class="timeline">';
        
        events.forEach((event, index) => {
            const side = index % 2 === 0 ? 'left' : 'right';
            html += `
                <div class="timeline-item ${side}">
                    <div class="timeline-marker ${event.type || 'neutral'}"></div>
                    <div class="timeline-content">
                        <div class="timeline-date">${event.date}</div>
                        <h4>${event.title}</h4>
                        <p>${event.description}</p>
                    </div>
                </div>
            `;
        });
        
        html += '</div>';
        container.innerHTML = html;
    },

    // Create trade flow chart
    createTradeChart: function(containerId, tradeData) {
        const ctx = document.getElementById(containerId);
        if (!ctx) return;

        return new Chart(ctx, {
            type: 'line',
            data: {
                labels: tradeData.years,
                datasets: [
                    {
                        label: 'Exports',
                        data: tradeData.exports,
                        borderColor: '#2ec4b6',
                        backgroundColor: 'rgba(46, 196, 182, 0.1)',
                        fill: true,
                        tension: 0.4
                    },
                    {
                        label: 'Imports',
                        data: tradeData.imports,
                        borderColor: '#e63946',
                        backgroundColor: 'rgba(230, 57, 70, 0.1)',
                        fill: true,
                        tension: 0.4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: { color: '#a0aec0' }
                    }
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
    },

    // Create military comparison chart
    createMilitaryComparison: function(containerId, country1Data, country2Data) {
        const ctx = document.getElementById(containerId);
        if (!ctx) return;

        return new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['Active Military', 'Defense Budget', 'Nuclear Arsenal', 'Air Power', 'Naval Power', 'Land Power'],
                datasets: [
                    {
                        label: country1Data.name,
                        data: country1Data.values,
                        borderColor: '#2ec4b6',
                        backgroundColor: 'rgba(46, 196, 182, 0.2)',
                        pointBackgroundColor: '#2ec4b6'
                    },
                    {
                        label: country2Data.name,
                        data: country2Data.values,
                        borderColor: '#ffc857',
                        backgroundColor: 'rgba(255, 200, 87, 0.2)',
                        pointBackgroundColor: '#ffc857'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: { color: '#a0aec0' }
                    }
                },
                scales: {
                    r: {
                        angleLines: { color: 'rgba(255,255,255,0.1)' },
                        grid: { color: 'rgba(255,255,255,0.1)' },
                        pointLabels: { color: '#a0aec0' },
                        ticks: { display: false }
                    }
                }
            }
        });
    },

    // Create diplomatic missions map (placeholder)
    createDiplomaticMap: function(containerId, missions) {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = `
            <div class="map-placeholder">
                <i class="fas fa-map-marked-alt"></i>
                <p>Interactive Map Coming Soon</p>
                <p class="small">Will show embassies, consulates, and diplomatic missions</p>
            </div>
        `;
    },

    // Create diaspora pie chart
    createDiasporaChart: function(containerId, diasporaData) {
        const ctx = document.getElementById(containerId);
        if (!ctx) return;

        return new Chart(ctx, {
            type: 'pie',
            data: {
                labels: diasporaData.map(d => d.region),
                datasets: [{
                    data: diasporaData.map(d => d.population),
                    backgroundColor: [
                        '#2ec4b6', '#57c5b6', '#ffc857', 
                        '#ff9f1c', '#e63946', '#8d99ae'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'right',
                        labels: { color: '#a0aec0' }
                    }
                }
            }
        });
    },

    // Create comparison table
    createComparisonTable: function(containerId, data) {
        const container = document.getElementById(containerId);
        if (!container) return;

        let html = `
            <table class="comparison-table">
                <thead>
                    <tr>
                        <th>Metric</th>
                        <th>${data.country1.name}</th>
                        <th>${data.country2.name}</th>
                    </tr>
                </thead>
                <tbody>
        `;

        for (const metric of data.metrics) {
            html += `
                <tr>
                    <td>${metric.label}</td>
                    <td>${metric.value1}</td>
                    <td>${metric.value2}</td>
                </tr>
            `;
        }

        html += '</tbody></table>';
        container.innerHTML = html;
    }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = IR_VISUALIZATIONS;
}
