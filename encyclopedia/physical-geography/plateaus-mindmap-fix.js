// ============================================
// 🧠 FIXED MIND MAP FOR PLATEAUS
// ============================================
// Resolves overlapping issue with proper spacing
// ============================================

function initFixedMindMap() {
    const container = document.querySelector('.mindmap-container');
    if (!container) return;

    const svg = d3.select('#mindmap-svg');
    if (svg.empty()) return;

    // Clear existing
    svg.selectAll('*').remove();

    // Get dimensions
    const width = container.clientWidth || 1000;
    const height = 700; // Increased height

    svg.attr('width', width).attr('height', height);

    const centerX = width / 2;
    const centerY = height / 2;

    // Mind map data with better structure
    const mindMapData = {
        center: {
            name: "PLATEAUS",
            icon: "🏔️",
            description: "Elevated flat landforms"
        },
        branches: [
            {
                id: 1,
                name: "Definition",
                icon: "📖",
                color: "#ef4444",
                children: [
                    "Elevated flat terrain",
                    "Table-like topography", 
                    "Steep edges (escarpments)",
                    ">300m above surroundings",
                    "Also called tablelands"
                ]
            },
            {
                id: 2,
                name: "Formation",
                icon: "⚙️",
                color: "#f59e0b",
                children: [
                    "Tectonic uplift",
                    "Volcanic activity",
                    "Erosion over time",
                    "Isostatic rebound",
                    "Continental collision"
                ]
            },
            {
                id: 3,
                name: "Types",
                icon: "📊",
                color: "#10b981",
                children: [
                    "Intermontane",
                    "Volcanic (Lava)",
                    "Dissected",
                    "Piedmont",
                    "Continental",
                    "Dome/Upwarped"
                ]
            },
            {
                id: 4,
                name: "Distribution",
                icon: "🌍",
                color: "#3b82f6",
                children: [
                    "All 7 continents",
                    "197 countries",
                    "37% land surface",
                    "55 million km² total"
                ]
            },
            {
                id: 5,
                name: "Major Examples",
                icon: "📍",
                color: "#8b5cf6",
                children: [
                    "Tibetan (largest)",
                    "Deccan (volcanic)",
                    "Colorado (scenic)",
                    "Altiplano (2nd highest)",
                    "Ethiopian (Africa)"
                ]
            },
            {
                id: 6,
                name: "Significance",
                icon: "💎",
                color: "#ec4899",
                children: [
                    "Water sources",
                    "Mineral deposits",
                    "Climate influence",
                    "Biodiversity hotspots",
                    "Human civilizations"
                ]
            },
            {
                id: 7,
                name: "Climate Impact",
                icon: "🌡️",
                color: "#06b6d4",
                children: [
                    "Rain shadow effect",
                    "Monsoon patterns",
                    "Temperature extremes",
                    "Permafrost zones"
                ]
            },
            {
                id: 8,
                name: "Research",
                icon: "🔬",
                color: "#84cc16",
                children: [
                    "Paleoclimate",
                    "Plate tectonics",
                    "Human evolution",
                    "Erosion rates",
                    "Climate change"
                ]
            }
        ]
    };

    // Create gradient definitions
    const defs = svg.append('defs');
    
    // Center gradient
    const centerGradient = defs.append('linearGradient')
        .attr('id', 'centerGradient')
        .attr('x1', '0%').attr('y1', '0%')
        .attr('x2', '100%').attr('y2', '100%');
    centerGradient.append('stop').attr('offset', '0%').attr('stop-color', '#cf6f4f');
    centerGradient.append('stop').attr('offset', '100%').attr('stop-color', '#9d4830');

    // Shadow filter
    const filter = defs.append('filter')
        .attr('id', 'dropShadow')
        .attr('x', '-50%').attr('y', '-50%')
        .attr('width', '200%').attr('height', '200%');
    filter.append('feDropShadow')
        .attr('dx', 0).attr('dy', 2)
        .attr('stdDeviation', 3)
        .attr('flood-color', 'rgba(0,0,0,0.3)');

    // Calculate positions with proper spacing
    const branches = mindMapData.branches;
    const numBranches = branches.length;
    const angleStep = (2 * Math.PI) / numBranches;
    const innerRadius = 140; // Distance from center to branch
    const outerRadius = 100; // Distance from branch to children

    // Draw connections first (so they appear behind nodes)
    const connectionsGroup = svg.append('g').attr('class', 'connections');

    branches.forEach((branch, i) => {
        const angle = i * angleStep - Math.PI / 2; // Start from top
        const branchX = centerX + Math.cos(angle) * innerRadius;
        const branchY = centerY + Math.sin(angle) * innerRadius;

        // Draw curved connection from center to branch
        const midX = centerX + Math.cos(angle) * (innerRadius / 2);
        const midY = centerY + Math.sin(angle) * (innerRadius / 2);

        connectionsGroup.append('path')
            .attr('d', `M ${centerX} ${centerY} Q ${midX} ${midY} ${branchX} ${branchY}`)
            .attr('fill', 'none')
            .attr('stroke', branch.color)
            .attr('stroke-width', 3)
            .attr('opacity', 0.5);

        // Draw connections from branch to children
        const numChildren = branch.children.length;
        const childAngleSpread = Math.PI / 4; // Total spread for children
        const childAngleStep = numChildren > 1 ? childAngleSpread / (numChildren - 1) : 0;
        const childStartAngle = angle - childAngleSpread / 2;

        branch.children.forEach((child, j) => {
            const childAngle = numChildren > 1 ? childStartAngle + j * childAngleStep : angle;
            const childX = branchX + Math.cos(childAngle) * outerRadius;
            const childY = branchY + Math.sin(childAngle) * outerRadius;

            connectionsGroup.append('line')
                .attr('x1', branchX)
                .attr('y1', branchY)
                .attr('x2', childX)
                .attr('y2', childY)
                .attr('stroke', branch.color)
                .attr('stroke-width', 1.5)
                .attr('opacity', 0.3);
        });
    });

    // Draw center node
    const centerGroup = svg.append('g')
        .attr('class', 'center-node')
        .attr('transform', `translate(${centerX}, ${centerY})`);

    centerGroup.append('circle')
        .attr('r', 55)
        .attr('fill', 'url(#centerGradient)')
        .attr('stroke', '#fff')
        .attr('stroke-width', 4)
        .attr('filter', 'url(#dropShadow)');

    centerGroup.append('text')
        .attr('text-anchor', 'middle')
        .attr('dy', '-5')
        .attr('fill', 'white')
        .attr('font-size', '28px')
        .text(mindMapData.center.icon);

    centerGroup.append('text')
        .attr('text-anchor', 'middle')
        .attr('dy', '22')
        .attr('fill', 'white')
        .attr('font-size', '13px')
        .attr('font-weight', '700')
        .attr('font-family', 'Quicksand, sans-serif')
        .text(mindMapData.center.name);

    // Draw branch nodes and children
    branches.forEach((branch, i) => {
        const angle = i * angleStep - Math.PI / 2;
        const branchX = centerX + Math.cos(angle) * innerRadius;
        const branchY = centerY + Math.sin(angle) * innerRadius;

        // Branch node group
        const branchGroup = svg.append('g')
            .attr('class', 'branch-node')
            .attr('transform', `translate(${branchX}, ${branchY})`)
            .style('cursor', 'pointer');

        // Branch background
        branchGroup.append('rect')
            .attr('x', -45)
            .attr('y', -22)
            .attr('width', 90)
            .attr('height', 44)
            .attr('rx', 10)
            .attr('fill', branch.color)
            .attr('filter', 'url(#dropShadow)');

        // Branch icon
        branchGroup.append('text')
            .attr('text-anchor', 'middle')
            .attr('dy', '-2')
            .attr('fill', 'white')
            .attr('font-size', '18px')
            .text(branch.icon);

        // Branch name
        branchGroup.append('text')
            .attr('text-anchor', 'middle')
            .attr('dy', '15')
            .attr('fill', 'white')
            .attr('font-size', '10px')
            .attr('font-weight', '600')
            .attr('font-family', 'Quicksand, sans-serif')
            .text(branch.name);

        // Draw children nodes
        const numChildren = branch.children.length;
        const childAngleSpread = Math.PI / 4;
        const childAngleStep = numChildren > 1 ? childAngleSpread / (numChildren - 1) : 0;
        const childStartAngle = angle - childAngleSpread / 2;

        branch.children.forEach((child, j) => {
            const childAngle = numChildren > 1 ? childStartAngle + j * childAngleStep : angle;
            const childX = branchX + Math.cos(childAngle) * outerRadius;
            const childY = branchY + Math.sin(childAngle) * outerRadius;

            const childGroup = svg.append('g')
                .attr('class', 'child-node')
                .attr('transform', `translate(${childX}, ${childY})`)
                .style('cursor', 'pointer');

            // Calculate text width for proper sizing
            const textLength = Math.min(child.length * 6 + 16, 120);

            // Child background
            childGroup.append('rect')
                .attr('x', -textLength / 2)
                .attr('y', -11)
                .attr('width', textLength)
                .attr('height', 22)
                .attr('rx', 11)
                .attr('fill', document.body.getAttribute('data-theme') === 'dark' ? '#1f2937' : '#ffffff')
                .attr('stroke', branch.color)
                .attr('stroke-width', 2);

            // Child text
            const displayText = child.length > 16 ? child.substring(0, 14) + '...' : child;
            childGroup.append('text')
                .attr('text-anchor', 'middle')
                .attr('dy', '4')
                .attr('fill', document.body.getAttribute('data-theme') === 'dark' ? '#e5e7eb' : '#374151')
                .attr('font-size', '9px')
                .attr('font-weight', '500')
                .text(displayText);

            // Child hover effects
            childGroup.on('mouseover', function() {
                d3.select(this).select('rect')
                    .attr('fill', branch.color);
                d3.select(this).select('text')
                    .attr('fill', 'white');
            });

            childGroup.on('mouseout', function() {
                d3.select(this).select('rect')
                    .attr('fill', document.body.getAttribute('data-theme') === 'dark' ? '#1f2937' : '#ffffff');
                d3.select(this).select('text')
                    .attr('fill', document.body.getAttribute('data-theme') === 'dark' ? '#e5e7eb' : '#374151');
            });
        });

        // Branch hover effects
        branchGroup.on('mouseover', function() {
            d3.select(this).select('rect')
                .attr('transform', 'scale(1.05)')
                .attr('filter', 'url(#dropShadow)');
        });

        branchGroup.on('mouseout', function() {
            d3.select(this).select('rect')
                .attr('transform', 'scale(1)');
        });
    });

    // Animation - fade in elements
    svg.selectAll('.branch-node, .child-node')
        .style('opacity', 0)
        .transition()
        .duration(600)
        .delay((d, i) => i * 30)
        .style('opacity', 1);
}

// Alternative: Hierarchical Mind Map (Tree Layout)
function initTreeMindMap() {
    const container = document.querySelector('.mindmap-container');
    if (!container) return;

    const svg = d3.select('#mindmap-svg');
    if (svg.empty()) return;

    svg.selectAll('*').remove();

    const width = container.clientWidth || 1000;
    const height = 800;

    svg.attr('width', width).attr('height', height);

    // Hierarchical data structure
    const data = {
        name: "🏔️ PLATEAUS",
        children: [
            {
                name: "📖 Definition",
                children: [
                    { name: "Elevated flat terrain" },
                    { name: "Table-like topography" },
                    { name: "Steep escarpments" },
                    { name: ">300m elevation" }
                ]
            },
            {
                name: "⚙️ Formation",
                children: [
                    { name: "Tectonic uplift" },
                    { name: "Volcanic activity" },
                    { name: "Erosion processes" },
                    { name: "Isostatic rebound" }
                ]
            },
            {
                name: "📊 Types",
                children: [
                    { name: "Intermontane" },
                    { name: "Volcanic (Lava)" },
                    { name: "Dissected" },
                    { name: "Piedmont" },
                    { name: "Continental" },
                    { name: "Dome" }
                ]
            },
            {
                name: "🌍 Distribution",
                children: [
                    { name: "All continents" },
                    { name: "197 countries" },
                    { name: "37% land area" },
                    { name: "55M km² total" }
                ]
            },
            {
                name: "📍 Examples",
                children: [
                    { name: "Tibetan Plateau" },
                    { name: "Deccan Plateau" },
                    { name: "Colorado Plateau" },
                    { name: "Altiplano" },
                    { name: "Ethiopian Highlands" }
                ]
            },
            {
                name: "💎 Significance",
                children: [
                    { name: "Water sources" },
                    { name: "Mineral deposits" },
                    { name: "Climate influence" },
                    { name: "Biodiversity" },
                    { name: "Civilizations" }
                ]
            }
        ]
    };

    // Create tree layout
    const margin = { top: 40, right: 120, bottom: 40, left: 120 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const g = svg.append('g')
        .attr('transform', `translate(${margin.left}, ${margin.top})`);

    // Create hierarchy
    const root = d3.hierarchy(data);
    
    // Tree layout
    const treeLayout = d3.tree()
        .size([innerHeight, innerWidth]);

    treeLayout(root);

    // Colors for branches
    const colors = ['#ef4444', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6', '#ec4899'];

    // Draw links
    g.selectAll('.link')
        .data(root.links())
        .enter()
        .append('path')
        .attr('class', 'link')
        .attr('fill', 'none')
        .attr('stroke', d => {
            const parentIndex = root.children ? root.children.indexOf(d.source) : 0;
            return parentIndex >= 0 ? colors[parentIndex % colors.length] : '#999';
        })
        .attr('stroke-width', d => d.source.depth === 0 ? 3 : 2)
        .attr('stroke-opacity', 0.5)
        .attr('d', d3.linkHorizontal()
            .x(d => d.y)
            .y(d => d.x)
        );

    // Draw nodes
    const node = g.selectAll('.node')
        .data(root.descendants())
        .enter()
        .append('g')
        .attr('class', 'node')
        .attr('transform', d => `translate(${d.y}, ${d.x})`);

    // Node circles/rectangles
    node.each(function(d) {
        const nodeG = d3.select(this);
        
        if (d.depth === 0) {
            // Root node
            nodeG.append('rect')
                .attr('x', -60)
                .attr('y', -25)
                .attr('width', 120)
                .attr('height', 50)
                .attr('rx', 10)
                .attr('fill', 'linear-gradient(135deg, #cf6f4f, #9d4830)')
                .attr('stroke', '#fff')
                .attr('stroke-width', 3);
        } else if (d.depth === 1) {
            // Branch nodes
            const parentIndex = root.children.indexOf(d);
            nodeG.append('rect')
                .attr('x', -50)
                .attr('y', -18)
                .attr('width', 100)
                .attr('height', 36)
                .attr('rx', 8)
                .attr('fill', colors[parentIndex % colors.length]);
        } else {
            // Leaf nodes
            const parentIndex = root.children.indexOf(d.parent);
            nodeG.append('rect')
                .attr('x', -55)
                .attr('y', -12)
                .attr('width', 110)
                .attr('height', 24)
                .attr('rx', 12)
                .attr('fill', document.body.getAttribute('data-theme') === 'dark' ? '#1f2937' : '#fff')
                .attr('stroke', colors[parentIndex >= 0 ? parentIndex % colors.length : 0])
                .attr('stroke-width', 2);
        }
    });

    // Node text
    node.append('text')
        .attr('text-anchor', 'middle')
        .attr('dy', d => d.depth === 0 ? 5 : 4)
        .attr('fill', d => d.depth <= 1 ? 'white' : (document.body.getAttribute('data-theme') === 'dark' ? '#e5e7eb' : '#374151'))
        .attr('font-size', d => d.depth === 0 ? '14px' : d.depth === 1 ? '11px' : '9px')
        .attr('font-weight', d => d.depth <= 1 ? '600' : '500')
        .attr('font-family', 'Quicksand, sans-serif')
        .text(d => {
            const text = d.data.name;
            if (d.depth === 2 && text.length > 16) {
                return text.substring(0, 14) + '...';
            }
            return text;
        });
}

// Export functions
if (typeof window !== 'undefined') {
    window.initFixedMindMap = initFixedMindMap;
    window.initTreeMindMap = initTreeMindMap;
}

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Replace the original mind map with the fixed version
    if (typeof initMindMap === 'function') {
        // Override original function
        window.initMindMap = initFixedMindMap;
    }
    
    // Initialize
    initFixedMindMap();
});

console.log('🧠 Fixed Mind Map module loaded!');
