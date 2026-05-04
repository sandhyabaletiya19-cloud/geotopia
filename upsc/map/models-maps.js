(function () {
  'use strict';

  // ═══════════════════════════════════════════════════════════════
  // DATA: MODELS MAPS — MAPS 129-134
  // ═══════════════════════════════════════════════════════════════

  var DATA = {

    vonThunen: {
      center: [52.52, 13.4], // Berlin as model center
      rings: [
        { name: 'Ring 1: Market Gardening & Dairy', radius: 50000, color: '#66BB6A', fill: 0.25, note: 'Perishable, high transport cost, near city' },
        { name: 'Ring 2: Forestry (Firewood/Timber)', radius: 100000, color: '#8D6E63', fill: 0.2, note: 'Heavy, bulky — close access needed (historic)' },
        { name: 'Ring 3: Intensive Arable (Grain)', radius: 170000, color: '#FFCA28', fill: 0.15, note: 'Crop rotation, moderate transport' },
        { name: 'Ring 4: Extensive Arable', radius: 250000, color: '#FFA726', fill: 0.12, note: 'Less intensive grain, larger farms' },
        { name: 'Ring 5: Ranching/Livestock', radius: 340000, color: '#FF7043', fill: 0.1, note: 'Animals walk to market, lowest rent' },
        { name: 'Ring 6: Wilderness', radius: 420000, color: '#78909C', fill: 0.06, note: 'Beyond economic cultivation' }
      ],
      modernDisruptions: [
        { name: 'Cold Chain Logistics', coords: [48.0, 11.0], note: 'Refrigeration allows distant perishable supply', color: '#00FF88' },
        { name: 'E-commerce Disruption', coords: [50.0, 8.0], note: 'Online platforms bypass traditional market access', color: '#00FF88' },
        { name: 'Global Supply Chains', coords: [46.0, 6.0], note: 'Perishable goods exported globally (flowers, fruits)', color: '#00FF88' },
        { name: 'Pune Floriculture → World', coords: [18.52, 73.86], note: 'India: flowers from Pune supply global markets', color: '#00FF88' },
        { name: 'Israel Drip Irrigation', coords: [31.5, 34.8], note: 'Technology overcoming aridity, intensive near desert', color: '#00FF88' },
        { name: 'Netherlands Greenhouses', coords: [52.0, 4.8], note: '#2 agri exporter — technology eliminates distance', color: '#00FF88' }
      ]
    },

    rostowStages: {
      countries: [
        // Stage 5: High Mass Consumption
        { name: 'USA', coords: [39.0, -98.0], stage: 5, color: '#4FC3F7', note: 'Mature consumer economy' },
        { name: 'Japan', coords: [36.5, 138.0], stage: 5, color: '#4FC3F7', note: 'Advanced but ageing' },
        { name: 'Germany', coords: [51.0, 10.0], stage: 5, color: '#4FC3F7', note: 'Industrial + services' },
        { name: 'UK', coords: [54.0, -2.0], stage: 5, color: '#4FC3F7', note: 'First to industrialize' },
        { name: 'Australia', coords: [-25.0, 135.0], stage: 5, color: '#4FC3F7', note: 'High living standards' },
        { name: 'S. Korea', coords: [36.5, 127.5], stage: 5, color: '#4FC3F7', note: 'Rapid transition from Stage 2→5' },

        // Stage 4: Drive to Maturity
        { name: 'China', coords: [35.0, 105.0], stage: 4, color: '#AB47BC', note: 'Manufacturing → services transition' },
        { name: 'Brazil', coords: [-10.0, -52.0], stage: 4, color: '#AB47BC', note: 'Uneven development' },
        { name: 'Mexico', coords: [23.5, -102.0], stage: 4, color: '#AB47BC', note: 'Nearshoring beneficiary' },
        { name: 'Turkey', coords: [39.0, 35.0], stage: 4, color: '#AB47BC', note: 'Diversifying economy' },
        { name: 'Malaysia', coords: [3.5, 102.0], stage: 4, color: '#AB47BC', note: 'Advanced ASEAN economy' },

        // Stage 3: Take-off (India transitioning 3→4)
        { name: 'India', coords: [22.0, 78.0], stage: 3, color: '#00FF88', note: 'Transitioning 3→4, rising middle class, digital boom' },
        { name: 'Vietnam', coords: [16.0, 107.5], stage: 3, color: '#FFEB3B', note: 'China+1 beneficiary, rapid industrialization' },
        { name: 'Bangladesh', coords: [24.0, 90.0], stage: 3, color: '#FFEB3B', note: 'Garments-driven, faster than expected' },
        { name: 'Indonesia', coords: [-2.0, 118.0], stage: 3, color: '#FFEB3B', note: 'Diversifying from commodities' },
        { name: 'Philippines', coords: [12.0, 122.0], stage: 3, color: '#FFEB3B', note: 'BPO + remittance economy' },
        { name: 'Egypt', coords: [26.0, 30.0], stage: 3, color: '#FFEB3B', note: 'Suez + services growth' },

        // Stage 2: Preconditions for Take-off
        { name: 'Nigeria', coords: [9.5, 7.5], stage: 2, color: '#FF7043', note: 'Oil-dependent, diversifying slowly' },
        { name: 'Ethiopia', coords: [9.0, 39.5], stage: 2, color: '#FF7043', note: 'Manufacturing investment rising' },
        { name: 'Kenya', coords: [-1.0, 37.0], stage: 2, color: '#FF7043', note: 'Mobile money innovation' },
        { name: 'Pakistan', coords: [30.0, 69.0], stage: 2, color: '#FF7043', note: 'Structural challenges' },
        { name: 'Myanmar', coords: [20.0, 96.0], stage: 2, color: '#FF7043', note: 'Civil war → regression' },

        // Stage 1: Traditional Society (few remain pure Stage 1)
        { name: 'Afghanistan', coords: [34.5, 69.0], stage: 1, color: '#E53935', note: 'Subsistence, conflict-affected' },
        { name: 'South Sudan', coords: [7.0, 30.0], stage: 1, color: '#E53935', note: 'Newest country, conflict' },
        { name: 'Niger', coords: [17.5, 8.0], stage: 1, color: '#E53935', note: 'Subsistence agriculture dominant' }
      ],
      stageLabels: [
        { stage: 1, label: 'Stage 1: Traditional Society', desc: 'Subsistence agriculture, pre-Newtonian, limited trade' },
        { stage: 2, label: 'Stage 2: Preconditions for Take-off', desc: 'Education, infrastructure, extractive industries begin' },
        { stage: 3, label: 'Stage 3: Take-off', desc: 'Industrialization surge, savings >10% GDP, growth sectors' },
        { stage: 4, label: 'Stage 4: Drive to Maturity', desc: 'Diversified industry, technology adoption, 10-20% GDP invested' },
        { stage: 5, label: 'Stage 5: High Mass Consumption', desc: 'Consumer goods, services dominant, welfare state' }
      ]
    },

    corePeripheryIndia: {
      core: [
        { name: 'Maharashtra', coords: [19.5, 76.0], gdpShare: '~14%', color: '#4FC3F7', note: 'Financial capital, Mumbai' },
        { name: 'Gujarat', coords: [22.5, 71.5], gdpShare: '~8%', color: '#4FC3F7', note: 'Industrial, Mundra, GIFT City' },
        { name: 'Karnataka', coords: [14.5, 76.0], gdpShare: '~9%', color: '#4FC3F7', note: 'IT capital, Bengaluru' },
        { name: 'Tamil Nadu', coords: [11.0, 78.5], gdpShare: '~9%', color: '#4FC3F7', note: 'Manufacturing + IT' },
        { name: 'Delhi NCR', coords: [28.7, 77.2], gdpShare: '~4% (UT)', color: '#4FC3F7', note: 'National capital, services hub' },
        { name: 'Telangana', coords: [17.8, 79.0], gdpShare: '~5%', color: '#4FC3F7', note: 'Hyderabad IT corridor' }
      ],
      semiPeriphery: [
        { name: 'Rajasthan', coords: [26.5, 73.5], color: '#FFEB3B', note: 'Mining, tourism, solar energy' },
        { name: 'Madhya Pradesh', coords: [23.5, 78.5], color: '#FFEB3B', note: 'Emerging manufacturing' },
        { name: 'Odisha', coords: [20.5, 84.0], color: '#FFEB3B', note: 'Mineral-rich, ports' },
        { name: 'Kerala', coords: [10.0, 76.5], color: '#FFEB3B', note: 'High HDI but lower industrialization' },
        { name: 'West Bengal', coords: [23.0, 87.5], color: '#FFEB3B', note: 'Kolkata declining industrially' },
        { name: 'Punjab', coords: [31.0, 75.5], color: '#FFEB3B', note: 'Agri-dominant, diversifying' },
        { name: 'Andhra Pradesh', coords: [16.0, 80.0], color: '#FFEB3B', note: 'Capital city construction' },
        { name: 'Haryana', coords: [29.0, 76.0], color: '#FFEB3B', note: 'NCR spillover, auto hub' }
      ],
      periphery: [
        { name: 'Bihar', coords: [25.6, 85.5], color: '#FF7043', note: 'Low GSDP, high migration outflow' },
        { name: 'Uttar Pradesh', coords: [27.0, 80.5], color: '#FF7043', note: 'Large but low per capita, improving' },
        { name: 'Jharkhand', coords: [23.5, 85.5], color: '#FF7043', note: 'Mineral-rich but underdeveloped' },
        { name: 'Chhattisgarh', coords: [21.5, 82.0], color: '#FF7043', note: 'Tribal, mining, Naxal areas' },
        { name: 'Assam', coords: [26.2, 92.5], color: '#FF7043', note: 'Tea, oil, but low industrialization' },
        { name: 'Manipur', coords: [24.8, 93.9], color: '#FF7043', note: 'Ethnic violence 2023, remote' },
        { name: 'Nagaland', coords: [26.0, 94.5], color: '#FF7043', note: 'Insurgency legacy, developing' },
        { name: 'Meghalaya', coords: [25.5, 91.8], color: '#FF7043', note: 'Mining, tourism potential' }
      ]
    },

    corePeripheryWorld: {
      core: [
        { name: 'USA', coords: [39.0, -98.0], color: '#4FC3F7', note: 'Global economic hegemon' },
        { name: 'EU (Germany/France)', coords: [50.0, 8.0], color: '#4FC3F7', note: 'Advanced economies' },
        { name: 'Japan', coords: [36.5, 138.0], color: '#4FC3F7', note: 'Tech + manufacturing' },
        { name: 'South Korea', coords: [36.5, 127.5], color: '#4FC3F7', note: 'Semiconductor + tech' },
        { name: 'UK', coords: [54.0, -2.0], color: '#4FC3F7', note: 'Financial services' },
        { name: 'Canada', coords: [56.0, -96.0], color: '#4FC3F7', note: 'Resources + services' },
        { name: 'Australia', coords: [-25.0, 135.0], color: '#4FC3F7', note: 'Mining + services' }
      ],
      semiPeriphery: [
        { name: 'China', coords: [35.0, 105.0], color: '#FFA500', note: 'Semi→Core transition, world factory → innovation' },
        { name: 'India', coords: [22.0, 78.0], color: '#00FF88', note: 'Rising semi-periphery, digital + manufacturing' },
        { name: 'Brazil', coords: [-10.0, -52.0], color: '#FFEB3B', note: 'BRICS, agri powerhouse' },
        { name: 'Indonesia', coords: [-2.0, 118.0], color: '#FFEB3B', note: 'Largest ASEAN economy' },
        { name: 'Vietnam', coords: [16.0, 107.5], color: '#00FF88', note: 'China+1 major beneficiary' },
        { name: 'Bangladesh', coords: [24.0, 90.0], color: '#FFEB3B', note: 'Garment + BPO growth' },
        { name: 'Mexico', coords: [23.5, -102.0], color: '#FFEB3B', note: 'Nearshoring beneficiary' },
        { name: 'Turkey', coords: [39.0, 35.0], color: '#FFEB3B', note: 'Manufacturing + services' },
        { name: 'South Africa', coords: [-29.0, 25.0], color: '#FFEB3B', note: 'BRICS, mining + services' }
      ],
      periphery: [
        { name: 'Sub-Saharan Africa', coords: [5.0, 20.0], color: '#FF7043', note: 'Resource extraction, low processing' },
        { name: 'Afghanistan', coords: [34.5, 69.0], color: '#E53935', note: 'Conflict-ridden periphery' },
        { name: 'Haiti', coords: [19.0, -72.0], color: '#E53935', note: 'Failed state dynamics' },
        { name: 'Myanmar', coords: [20.0, 96.0], color: '#FF7043', note: 'Civil war → economic collapse' },
        { name: 'Sahel region', coords: [14.0, 5.0], color: '#FF7043', note: 'Instability, drought, conflict' },
        { name: 'Central America', coords: [14.0, -87.0], color: '#FF7043', note: 'Migration source, limited industry' }
      ],
      supplyChainShifts: [
        { name: 'China+1 → Vietnam', from: [35.0, 105.0], to: [16.0, 107.5], color: '#00FF88' },
        { name: 'China+1 → India', from: [35.0, 105.0], to: [22.0, 78.0], color: '#00FF88' },
        { name: 'China+1 → Bangladesh', from: [35.0, 105.0], to: [24.0, 90.0], color: '#00FF88' },
        { name: 'China+1 → Mexico', from: [35.0, 105.0], to: [23.5, -102.0], color: '#00FF88' },
        { name: 'Nearshoring → Mexico', from: [39.0, -98.0], to: [23.5, -102.0], color: '#FFEB3B' },
        { name: 'Friendshoring → India', from: [39.0, -98.0], to: [22.0, 78.0], color: '#FFEB3B' }
      ],
      semiconductorChain: [
        { name: 'Taiwan (TSMC)', coords: [23.5, 121.0], color: '#E91E63', note: '~90% advanced chips' },
        { name: 'S. Korea (Samsung)', coords: [36.5, 127.5], color: '#E91E63', note: 'Memory chips dominant' },
        { name: 'USA (design/IP)', coords: [37.4, -122.0], color: '#4FC3F7', note: 'Qualcomm, Apple, Nvidia' },
        { name: 'Japan (materials/equip)', coords: [36.5, 138.0], color: '#4FC3F7', note: 'Photoresists, equipment' },
        { name: 'India (ATMP/Fab)', coords: [22.25, 72.19], color: '#00FF88', note: 'Tata, Micron — emerging' },
        { name: 'Netherlands (ASML)', coords: [51.4, 5.5], color: '#4FC3F7', note: 'EUV lithography monopoly' }
      ]
    },

    dtmStages: [
      { stage: 1, label: 'Stage 1: Pre-transition', br: 40, dr: 38, growth: 'Minimal', color: '#E53935', examples: 'No country currently (historic: pre-1800s all nations)' },
      { stage: 2, label: 'Stage 2: Early transition', br: 38, dr: 15, growth: 'Explosive', color: '#FF7043', examples: 'Niger, DRC, Chad, Mali, Afghanistan' },
      { stage: 3, label: 'Stage 3: Late transition', br: 22, dr: 8, growth: 'Slowing', color: '#FFEB3B', examples: 'India (TFR 2.0), Bangladesh, Brazil, Mexico, Indonesia' },
      { stage: 4, label: 'Stage 4: Low stationary', br: 12, dr: 10, growth: 'Very low', color: '#66BB6A', examples: 'USA, UK, France, Australia, China' },
      { stage: 5, label: 'Stage 5: Decline', br: 8, dr: 12, growth: 'Negative', color: '#4FC3F7', examples: 'Japan (1.2), S.Korea (0.7), Germany, Italy, Spain, China (entering)' }
    ],

    dtmIndia: {
      south: [
        { name: 'Kerala', tfr: 1.5, coords: [10.0, 76.5], stage: 4, color: '#66BB6A' },
        { name: 'Tamil Nadu', tfr: 1.4, coords: [11.0, 78.5], stage: 4, color: '#66BB6A' },
        { name: 'Andhra Pradesh', tfr: 1.7, coords: [16.0, 80.0], stage: 4, color: '#66BB6A' },
        { name: 'Karnataka', tfr: 1.7, coords: [14.5, 76.0], stage: 4, color: '#66BB6A' },
        { name: 'Telangana', tfr: 1.7, coords: [17.8, 79.0], stage: 4, color: '#66BB6A' },
        { name: 'West Bengal', tfr: 1.6, coords: [23.0, 87.5], stage: 4, color: '#66BB6A' }
      ],
      north: [
        { name: 'Bihar', tfr: 3.0, coords: [25.6, 85.5], stage: 2, color: '#FF7043' },
        { name: 'UP', tfr: 2.4, coords: [27.0, 80.5], stage: 3, color: '#FFEB3B' },
        { name: 'MP', tfr: 2.0, coords: [23.5, 78.5], stage: 3, color: '#FFEB3B' },
        { name: 'Rajasthan', tfr: 2.0, coords: [26.5, 73.5], stage: 3, color: '#FFEB3B' },
        { name: 'Jharkhand', tfr: 2.3, coords: [23.5, 85.5], stage: 3, color: '#FFEB3B' },
        { name: 'Chhattisgarh', tfr: 2.0, coords: [21.5, 82.0], stage: 3, color: '#FFEB3B' }
      ]
    }
  };

  // ═══════════════════════════════════════════════════════════════
  // MAPS ARRAY
  // ═══════════════════════════════════════════════════════════════

  var MAPS = [

    // ─────────────────────────────────────────────────────────────
    // MAP 129 — VON THÜNEN MODEL
    // ─────────────────────────────────────────────────────────────
    {
      mapNum: 129,
      title: 'Von Thünen Model — Agricultural Land Use',
      subtitle: 'Concentric rings, modern disruptions, India examples',
      mapConfig: { center: [48.0, 10.0], zoom: 4, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Von Thünen Rings',
          items: [
            { dot: '#66BB6A', label: 'Ring 1: Market Gardening & Dairy' },
            { dot: '#8D6E63', label: 'Ring 2: Forestry' },
            { dot: '#FFCA28', label: 'Ring 3: Intensive Arable' },
            { dot: '#FFA726', label: 'Ring 4: Extensive Arable' },
            { dot: '#FF7043', label: 'Ring 5: Ranching/Livestock' },
            { dot: '#78909C', label: 'Ring 6: Wilderness' }
          ]
        },
        {
          sectionTitle: 'Modern Disruptions',
          items: [
            { dot: '#00FF88', label: 'Tech Disruption (2024-25)' },
            { dot: '#FF6B6B', label: 'Model Breakdown Zone' }
          ]
        }
      ],
      info: [
        {
          title: 'Key Facts',
          facts: [
            { label: 'Author', value: 'Johann Heinrich von Thünen (1826)' },
            { label: 'Core idea', value: 'Land use = f(distance to market, transport cost)' },
            { label: 'Assumptions', value: 'Isolated state, flat terrain, single market, rational farmers' },
            { label: 'Ring 1', value: 'Perishable goods (dairy, vegetables) — closest' },
            { label: 'Ring 6', value: 'Wilderness — beyond economic cultivation' },
            { label: 'Modern status', value: 'Disrupted by cold chains, e-commerce, global trade' },
            { label: 'India example', value: 'Pune floriculture → global export markets' }
          ]
        },
        {
          title: 'UPSC Key Points',
          items: [
            'Von Thünen (1826): first spatial model of agricultural land use',
            'Concentric rings based on land rent (bid-rent curve) vs distance to market',
            'Transport cost determines which crop is profitable at each distance',
            'Assumptions: isotropic plain, single central market, rational farmers, uniform fertility',
            'Modifications: navigable river (elongates rings), second city (distorts pattern)',
            'Modern applicability: largely disrupted by technology, cold storage, global supply chains',
            'Still useful for understanding: peri-urban agriculture, land rent gradient concept'
          ]
        },
        {
          title: 'Current Affairs 2023-26',
          items: [
            'Cold chain logistics: perishable goods now travel 1000s of km (negating Ring 1 logic)',
            'E-commerce platforms (Amazon Fresh, BigBasket): farm-to-door bypasses market proximity',
            'Global supply chains: Dutch flowers, Israeli vegetables, Indian spices → worldwide',
            'India: Pune floriculture (roses, carnations) supplying European markets',
            'Urban farming + vertical agriculture: Ring 1 within the city itself',
            'Precision agriculture + drones: technology overcoming distance barrier',
            'Model remains conceptually useful for land rent theory (Mains answer framework)'
          ]
        }
      ],
      render: function (map, app) {
        // Von Thünen rings (centered on Berlin as model city)
        var center = DATA.vonThunen.center;

        DATA.vonThunen.rings.forEach(function (ring) {
          var circle = L.circle(center, {
            radius: ring.radius,
            color: ring.color,
            fillColor: ring.color,
            fillOpacity: ring.fill,
            weight: 2,
            dashArray: '6,4'
          }).addTo(map);

          circle.bindPopup(app.buildPopup(
            ring.name,
            ring.note + '<br>Radius: ' + (ring.radius / 1000) + ' km from market',
            ['Von Thünen', 'ring']
          ));

          circle.on('mouseover', function () { this.setStyle({ fillOpacity: ring.fill + 0.2, weight: 3 }); });
          circle.on('mouseout', function () { this.setStyle({ fillOpacity: ring.fill, weight: 2 }); });
          app.addLayer(circle);
        });

        // Central market
        var centerMarker = L.circleMarker(center, {
          radius: 10, color: '#000', fillColor: '#FFD700', fillOpacity: 1, weight: 3
        }).addTo(map);
        centerMarker.bindPopup(app.buildPopup('🏙 Central Market', 'Von Thünen\'s "Isolated State" center<br>All trade flows to/from this point', ['Von Thünen', 'center']));
        app.addLayer(centerMarker);
        app.addLayer(app.labelMarker([center[0] + 0.3, center[1] + 0.3], 'Market Center', '#FFD700', '11px'));

        // Ring labels
        DATA.vonThunen.rings.forEach(function (ring, i) {
          var angle = (i * 60) * Math.PI / 180;
          var labelLat = center[0] + (ring.radius / 111000) * Math.cos(angle) * 0.7;
          var labelLng = center[1] + (ring.radius / (111000 * Math.cos(center[0] * Math.PI / 180))) * Math.sin(angle) * 0.7;
          app.addLayer(app.labelMarker([labelLat, labelLng], ring.name.split(':')[1].trim(), ring.color, '9px'));
        });

        // Navigable river modification (line through rings)
        var riverLine = L.polyline([
          [center[0] + 3.5, center[1] - 1], [center[0], center[1]], [center[0] - 3.5, center[1] + 1]
        ], {
          color: '#42A5F5', weight: 3, opacity: 0.6
        }).addTo(map);
        riverLine.bindPopup(app.buildPopup('River Modification', 'Navigable river elongates rings along its course<br>Reduces effective transport cost<br>Von Thünen\'s key modification', ['river', 'modification']));
        app.addLayer(riverLine);
        app.addLayer(app.labelMarker([center[0] + 2, center[1] - 0.5], '↕ River (elongates rings)', '#42A5F5', '9px'));

        // Modern disruption markers
        DATA.vonThunen.modernDisruptions.forEach(function (md) {
          var m = L.circleMarker(md.coords, {
            radius: 8, color: '#000', fillColor: md.color, fillOpacity: 0.9, weight: 2
          }).addTo(map);
          m.bindPopup(app.buildPopup('🔄 ' + md.name, md.note + '<br><b>Disrupts classical Von Thünen model</b>', ['disruption', '2025', 'modern']));
          m.on('mouseover', function () { this.setRadius(12); this.setStyle({ weight: 3 }); });
          m.on('mouseout', function () { this.setRadius(8); this.setStyle({ weight: 2 }); });
          app.addLayer(m);
          app.addLayer(app.labelMarker([md.coords[0] + 0.5, md.coords[1] + 0.5], md.name, md.color, '9px'));
        });

        // "Model Broken" cross markers at distant production zones
        var brokenZones = [
          { name: 'Kenya flowers → Europe', coords: [-1.0, 37.0] },
          { name: 'Chile grapes → USA', coords: [-33.0, -71.0] },
          { name: 'NZ dairy → Asia', coords: [-41.0, 174.0] }
        ];
        brokenZones.forEach(function (bz) {
          var m = L.circleMarker(bz.coords, {
            radius: 6, color: '#FF6B6B', fillColor: '#FF6B6B', fillOpacity: 0.7, weight: 2
          }).addTo(map);
          m.bindPopup(app.buildPopup('❌ Model Breakdown: ' + bz.name, 'Perishable goods from thousands of km away<br>Cold chain + air freight breaks Ring 1 logic', ['breakdown', 'modern']));
          m.on('mouseover', function () { this.setRadius(10); });
          m.on('mouseout', function () { this.setRadius(6); });
          app.addLayer(m);
        });

        // Info boxes
        app.addLayer(app.infoBox([55.0, 18.0],
          '<b style="color:#FFD700">Von Thünen Model (1826)</b><br>' +
          'Agricultural land use rings<br>' +
          'Based on transport cost + land rent<br>' +
          '<span style="color:#00FF88">Modern: disrupted by technology</span>'
        ));

        app.addLayer(app.infoBox([43.0, -2.0],
          '<b style="color:#00FF88">Modern Disruptions</b><br>' +
          'Cold chain → distant perishables<br>' +
          'E-commerce → no market proximity needed<br>' +
          'Global supply chains → all rings global<br>' +
          'Vertical farming → Ring 1 inside cities'
        ));

        app.addLayer(app.infoBox([17.0, 76.0],
          '<b style="color:#00FF88">India Example</b><br>' +
          'Pune floriculture → Europe/Gulf<br>' +
          'Ring 1 goods exported globally<br>' +
          'Model assumptions violated'
        ));

        app.showToast('Map 129: Von Thünen Model loaded', 'success');
      }
    },

    // ─────────────────────────────────────────────────────────────
    // MAP 130 — ROSTOW'S STAGES OF GROWTH
    // ─────────────────────────────────────────────────────────────
    {
      mapNum: 130,
      title: 'Rostow\'s Stages of Economic Growth',
      subtitle: 'Five stages worldwide, India transitioning Stage 3→4',
      mapConfig: { center: [20.0, 30.0], zoom: 2, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Rostow Stages',
          items: [
            { dot: '#E53935', label: 'Stage 1: Traditional Society' },
            { dot: '#FF7043', label: 'Stage 2: Preconditions for Take-off' },
            { dot: '#FFEB3B', label: 'Stage 3: Take-off' },
            { dot: '#AB47BC', label: 'Stage 4: Drive to Maturity' },
            { dot: '#4FC3F7', label: 'Stage 5: High Mass Consumption' },
            { dot: '#00FF88', label: 'India (Stage 3→4 transition)' }
          ]
        },
        {
          sectionTitle: 'Current Affairs',
          items: [
            { dot: '#00FF88', label: 'New 2024-25' },
            { dot: '#FF6B6B', label: 'Regression / Conflict' }
          ]
        }
      ],
      info: [
        {
          title: 'Key Facts',
          facts: [
            { label: 'Author', value: 'W.W. Rostow (1960)' },
            { label: 'Stages', value: '5 stages: Traditional → High Mass Consumption' },
            { label: 'India status', value: 'Stage 3 → transitioning toward Stage 4' },
            { label: 'Key indicator', value: 'Investment rate >10% GDP for take-off' },
            { label: 'Criticisms', value: 'Linear, Western-centric, ignores dependency' },
            { label: 'S. Korea example', value: 'Fastest transition Stage 2→5 (~40 years)' },
            { label: 'Bangladesh', value: 'Faster than expected advancement' }
          ]
        },
        {
          title: 'UPSC Key Points',
          items: [
            'Rostow (1960): linear model — all countries follow same 5-stage path',
            'Stage 1: subsistence, limited trade, pre-Newtonian science',
            'Stage 2: education, infrastructure, commercial agriculture begins',
            'Stage 3: take-off — industrialization surge, >10% GDP savings/investment',
            'Stage 4: drive to maturity — diversified industry, technology adoption',
            'Stage 5: high mass consumption — services dominant, consumer goods, welfare',
            'Criticisms: ignores colonialism/dependency, assumes Western path universal, oversimplified'
          ]
        },
        {
          title: 'Current Affairs 2023-26',
          items: [
            'India: transitioning Stage 3→4 — rising middle class, digital economy boom',
            'India investment rate ~30% GDP → above take-off threshold',
            'Bangladesh: stage 3 advancement faster than expected (garments, remittances)',
            'S. Korea: model success story — Stage 2→5 in ~40 years',
            'Sub-Saharan Africa: mostly Stage 2, some pockets advancing',
            'Myanmar: regression from Stage 2 due to civil war (model limitation)',
            'Criticism relevant: China\'s path ≠ Western sequence, planned economy'
          ]
        }
      ],
      render: function (map, app) {
        // Country markers by stage
        DATA.rostowStages.countries.forEach(function (c) {
          var rad = c.name === 'India' ? 12 : Math.max(6, 12 - c.stage);
          var marker = L.circleMarker(c.coords, {
            radius: rad,
            color: '#000',
            fillColor: c.color,
            fillOpacity: 0.85,
            weight: 2
          }).addTo(map);

          marker.bindPopup(app.buildPopup(
            c.name + ' — Stage ' + c.stage,
            c.note,
            c.color === '#00FF88' ? ['India', 'transition', '2025'] :
            c.color === '#E53935' ? ['Stage 1', 'traditional'] :
            ['Stage ' + c.stage, 'Rostow']
          ));

          marker.on('mouseover', function () {
            this.setRadius(rad + 4);
            this.setStyle({ fillOpacity: 1, weight: 3 });
          });
          marker.on('mouseout', function () {
            this.setRadius(rad);
            this.setStyle({ fillOpacity: 0.85, weight: 2 });
          });

          if (c.stage <= 2 || c.name === 'India' || c.name === 'China' || c.name === 'S. Korea' || c.name === 'USA' || c.name === 'Bangladesh' || c.name === 'Vietnam') {
            app.addLayer(app.labelMarker(
              [c.coords[0] + 2.5, c.coords[1]],
              c.name + ' (S' + c.stage + ')',
              c.color,
              c.name === 'India' ? '11px' : '9px'
            ));
          }
        });

        // Stage progression arrows (conceptual)
        var progressionArrows = [
          { from: [9.5, 7.5], to: [22.0, 78.0], label: 'Stage 2→3' },
          { from: [22.0, 78.0], to: [35.0, 105.0], label: 'Stage 3→4' },
          { from: [35.0, 105.0], to: [36.5, 127.5], label: 'Stage 4→5' }
        ];

        progressionArrows.forEach(function (pa) {
          var line = L.polyline([pa.from, pa.to], {
            color: '#FFD700', weight: 1.5, opacity: 0.3, dashArray: '6,8'
          }).addTo(map);
          app.addLayer(line);
        });

        // India special highlight
        app.addLayer(app.infoBox([28.0, 85.0],
          '<b style="color:#00FF88">🇮🇳 India: Stage 3→4</b><br>' +
          'Rising middle class<br>' +
          'Digital economy boom<br>' +
          'Investment >30% GDP<br>' +
          '<span style="color:#FFD700">Uneven: states at different stages</span>'
        ));

        // S. Korea success story
        app.addLayer(app.infoBox([40.0, 130.0],
          '<b style="color:#4FC3F7">S. Korea: Model Success</b><br>' +
          'Stage 2→5 in ~40 years<br>' +
          'Samsung, Hyundai, TSMC<br>' +
          'Fastest transition globally'
        ));

        // Criticism box
        app.addLayer(app.infoBox([50.0, -30.0],
          '<b style="color:#FF6B6B">Model Criticisms</b><br>' +
          'Linear → ignores dependency theory<br>' +
          'Western-centric path assumed<br>' +
          'Ignores colonialism impact<br>' +
          'China/India paths differ from West'
        ));

        // Stage legend boxes on map
        DATA.rostowStages.stageLabels.forEach(function (sl, i) {
          var lat = -35 + (i * 12);
          app.addLayer(app.labelMarker([lat, -170], sl.label, DATA.dtmStages[i] ? DATA.dtmStages[i].color : '#FFF', '9px'));
        });

        app.showToast('Map 130: Rostow\'s Stages of Growth loaded', 'success');
      }
    },

    // ─────────────────────────────────────────────────────────────
    // MAP 131 — CORE-PERIPHERY MODEL (INDIA)
    // ─────────────────────────────────────────────────────────────
    {
      mapNum: 131,
      title: 'Core-Periphery Model — India',
      subtitle: 'Economic core (W+S), semi-periphery, periphery (BIMARU+NE)',
      mapConfig: { center: [22.0, 80.0], zoom: 5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Core-Periphery Zones',
          items: [
            { dot: '#4FC3F7', label: 'Core (High GDP, industrial)' },
            { dot: '#FFEB3B', label: 'Semi-periphery (emerging)' },
            { dot: '#FF7043', label: 'Periphery (low dev, outmigration)' }
          ]
        },
        {
          sectionTitle: 'Current Affairs',
          items: [
            { dot: '#00FF88', label: 'Emerging Growth (2024-25)' },
            { dot: '#FF6B6B', label: 'Concern Zone' }
          ]
        }
      ],
      info: [
        {
          title: 'Key Facts',
          facts: [
            { label: 'Theory', value: 'Friedmann (1966), Wallerstein (1974)' },
            { label: 'India Core', value: 'Maharashtra, Gujarat, Karnataka, TN, Delhi' },
            { label: 'Core GDP share', value: '~50%+ of India\'s GDP' },
            { label: 'Semi-periphery', value: 'Rajasthan, MP, Odisha, Kerala, Punjab' },
            { label: 'Periphery', value: 'Bihar, UP, Jharkhand, NE states' },
            { label: 'Pattern', value: 'Western + Southern India = economic core' },
            { label: 'Migration flow', value: 'Periphery → Core (dominant)' }
          ]
        },
        {
          title: 'UPSC Key Points',
          items: [
            'Core-Periphery: uneven spatial development — core exploits periphery resources/labor',
            'India Core: Maharashtra (Mumbai), Gujarat (industry), Karnataka (IT), TN (mfg), Delhi (services)',
            'Periphery: BIMARU + NE states — low GSDP per capita, outmigration, resource extraction',
            'Semi-periphery: transitioning states with emerging industrial/service base',
            'Mechanisms: cumulative causation (Myrdal) → core attracts more investment → widens gap',
            'Spread effects: some trickle-down (IT in tier-2 cities) but limited',
            'Policy: Finance Commission transfers, MGNREGA, backward region grants aim to reduce gap'
          ]
        },
        {
          title: 'Current Affairs 2023-26',
          items: [
            'Core states (MH, GJ, KA, TN) contributing ~50%+ of India\'s GDP',
            'Semi-periphery rising: Rajasthan (solar), Odisha (ports, minerals), MP (manufacturing)',
            'Periphery shifting: UP improving infrastructure, Bihar still lagging',
            'Finance Commission: North-South debate on resource sharing',
            'PM Gati Shakti: infrastructure corridors connecting periphery to core',
            'NE states: Act East Policy aiming to reduce peripheral status',
            'Aspirational Districts Programme: targeting peripheral development'
          ]
        }
      ],
      render: function (map, app) {
        // Core states
        DATA.corePeripheryIndia.core.forEach(function (c) {
          var marker = L.circleMarker(c.coords, {
            radius: 10, color: '#000', fillColor: c.color, fillOpacity: 0.85, weight: 2
          }).addTo(map);
          marker.bindPopup(app.buildPopup(
            '🔵 Core: ' + c.name,
            'GDP Share: ' + c.gdpShare + '<br>' + c.note,
            ['core', 'India']
          ));
          marker.on('mouseover', function () { this.setRadius(14); this.setStyle({ fillOpacity: 1, weight: 3 }); });
          marker.on('mouseout', function () { this.setRadius(10); this.setStyle({ fillOpacity: 0.85, weight: 2 }); });
          app.addLayer(marker);
          app.addLayer(app.labelMarker([c.coords[0] + 0.5, c.coords[1] + 0.5], c.name, c.color, '10px'));
        });

        // Semi-periphery
        DATA.corePeripheryIndia.semiPeriphery.forEach(function (sp) {
          var marker = L.circleMarker(sp.coords, {
            radius: 8, color: '#000', fillColor: sp.color, fillOpacity: 0.75, weight: 2
          }).addTo(map);
          marker.bindPopup(app.buildPopup('🟡 Semi-periphery: ' + sp.name, sp.note, ['semi-periphery']));
          marker.on('mouseover', function () { this.setRadius(12); });
          marker.on('mouseout', function () { this.setRadius(8); });
          app.addLayer(marker);
          app.addLayer(app.labelMarker([sp.coords[0] + 0.4, sp.coords[1] + 0.4], sp.name, sp.color, '9px'));
        });

        // Periphery
        DATA.corePeripheryIndia.periphery.forEach(function (p) {
          var marker = L.circleMarker(p.coords, {
            radius: 8, color: '#000', fillColor: p.color, fillOpacity: 0.75, weight: 2
          }).addTo(map);
          marker.bindPopup(app.buildPopup('🔴 Periphery: ' + p.name, p.note, ['periphery', 'low development']));
          marker.on('mouseover', function () { this.setRadius(12); });
          marker.on('mouseout', function () { this.setRadius(8); });
          app.addLayer(marker);
          app.addLayer(app.labelMarker([p.coords[0] + 0.4, p.coords[1] + 0.4], p.name, p.color, '9px'));
        });

        // Migration arrows (periphery → core)
        var migrationArrows = [
          { from: [25.6, 85.5], to: [19.07, 72.87], color: '#FF7043' },
          { from: [27.0, 80.5], to: [28.7, 77.2], color: '#FF7043' },
          { from: [23.5, 85.5], to: [22.57, 88.36], color: '#FF7043' },
          { from: [26.2, 92.5], to: [12.97, 77.59], color: '#FF7043' }
        ];

        migrationArrows.forEach(function (ma) {
          var line = L.polyline([ma.from, ma.to], {
            color: ma.color, weight: 2, opacity: 0.5, dashArray: '4,6'
          }).addTo(map);
          app.addLayer(line);
          // Arrow head
          app.addLayer(L.circleMarker(ma.to, {
            radius: 3, color: ma.color, fillColor: ma.color, fillOpacity: 1, weight: 0
          }).addTo(map));
        });

        // Gradient zones (approximate shading)
        var corePoly = L.polygon([
          [28.7, 77.2], [23.0, 72.0], [15.0, 73.5], [8.5, 77.0],
          [11.0, 80.0], [17.8, 79.0], [19.5, 76.0], [23.0, 72.0]
        ], {
          color: '#4FC3F7', fillColor: '#4FC3F7', fillOpacity: 0.06,
          weight: 1.5, dashArray: '6,4'
        }).addTo(map);
        corePoly.bindPopup(app.buildPopup('Core Zone', 'Western + Southern India<br>~50%+ of GDP<br>Industrial + IT + financial hub', ['core']));
        app.addLayer(corePoly);

        var peripheryPoly = L.polygon([
          [28.0, 80.0], [28.0, 88.0], [25.0, 88.0], [22.0, 84.0],
          [22.0, 80.0]
        ], {
          color: '#FF7043', fillColor: '#FF7043', fillOpacity: 0.06,
          weight: 1.5, dashArray: '6,4'
        }).addTo(map);
        peripheryPoly.bindPopup(app.buildPopup('Periphery Zone', 'BIMARU belt<br>Low GSDP per capita<br>Major outmigration source', ['periphery']));
        app.addLayer(peripheryPoly);

        // Info boxes
        app.addLayer(app.infoBox([15.0, 71.0],
          '<b style="color:#4FC3F7">India Economic Core</b><br>' +
          'MH, GJ, KA, TN, Delhi<br>' +
          '~50%+ national GDP<br>' +
          'Attracts migration + investment'
        ));

        app.addLayer(app.infoBox([28.0, 86.0],
          '<b style="color:#FF7043">Periphery: BIMARU + NE</b><br>' +
          'Bihar, UP, Jharkhand, NE states<br>' +
          'Low GSDP, outmigration<br>' +
          '<span style="color:#FFEB3B">Aspirational Districts Programme</span>'
        ));

        app.addLayer(app.infoBox([32.0, 73.0],
          '<b style="color:#FFEB3B">Policy Response</b><br>' +
          'Finance Commission transfers<br>' +
          'Gati Shakti corridors<br>' +
          'Aspirational Districts<br>' +
          'Act East for NE'
        ));

        app.showToast('Map 131: Core-Periphery India loaded', 'success');
      }
    },

    // ─────────────────────────────────────────────────────────────
    // MAP 132 — WORLD SYSTEMS THEORY (WALLERSTEIN)
    // ─────────────────────────────────────────────────────────────
    {
      mapNum: 132,
      title: 'World Systems Theory — Wallerstein (2025)',
      subtitle: 'Core, semi-periphery, periphery — supply chain shifts, China+1',
      mapConfig: { center: [20.0, 30.0], zoom: 2, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'World System Zones',
          items: [
            { dot: '#4FC3F7', label: 'Core (advanced economies)' },
            { dot: '#FFA500', label: 'China (semi→core transition)' },
            { dot: '#00FF88', label: 'Rising Semi-periphery (India)' },
            { dot: '#FFEB3B', label: 'Semi-periphery (BRICS etc.)' },
            { dot: '#FF7043', label: 'Periphery (resource extraction)' },
            { dot: '#E53935', label: 'Deep Periphery (conflict)' }
          ]
        },
        {
          sectionTitle: 'Supply Chain Shifts',
          items: [
            { line: '#00FF88', label: 'China+1 Diversification' },
            { line: '#FFEB3B', label: 'Nearshoring/Friendshoring' },
            { dot: '#E91E63', label: 'Semiconductor Chain Node' }
          ]
        }
      ],
      info: [
        {
          title: 'Key Facts',
          facts: [
            { label: 'Theory', value: 'Immanuel Wallerstein (1974)' },
            { label: 'Core', value: 'USA, EU, Japan, S. Korea, Australia' },
            { label: 'Semi-periphery rising', value: 'India, Brazil, Indonesia, Vietnam' },
            { label: 'China', value: 'Semi-periphery → core transition' },
            { label: 'China+1 strategy', value: 'Diversifying from China → India, Vietnam, Mexico' },
            { label: 'Apple in India', value: '14%+ iPhones manufactured (2025)' },
            { label: 'India remittances', value: '$120B (2023) — semi-periphery evidence' }
          ]
        },
        {
          title: 'UPSC Key Points',
          items: [
            'Wallerstein (1974): capitalist world-economy divided into core, semi-periphery, periphery',
            'Core: high-skill manufacturing, capital-intensive, high wages (USA, EU, Japan)',
            'Periphery: raw material extraction, cheap labor, low value-added (Sub-Saharan Africa)',
            'Semi-periphery: mix of both, acts as buffer between core and periphery',
            'India: rising semi-periphery — IT services, manufacturing, digital economy',
            'China: transitioning from semi-periphery to core (Belt and Road, tech innovation)',
            'China+1: supply chain diversification → Vietnam, India, Bangladesh, Mexico benefiting'
          ]
        },
        {
          title: 'Current Affairs 2023-26',
          items: [
            'China+1: Apple 14%+ iPhones made in India (2025), Samsung in Vietnam',
            'Nearshoring: Mexico benefiting from US-China decoupling',
            'Friendshoring: India-USA-Japan semiconductor alliance (Chip 4 concept)',
            'India G20 2023: "Voice of the Global South" → challenging core hegemony',
            'BRICS expansion: counter-hegemonic block challenging Wallerstein\'s core',
            'Semiconductor supply chain: USA-India-Japan-Taiwan-S.Korea realignment',
            'India remittances $120B: Global South labor exported to core → value extraction'
          ]
        }
      ],
      render: function (map, app) {
        // Core countries
        DATA.corePeripheryWorld.core.forEach(function (c) {
          var marker = L.circleMarker(c.coords, {
            radius: 10, color: '#000', fillColor: c.color, fillOpacity: 0.85, weight: 2
          }).addTo(map);
          marker.bindPopup(app.buildPopup('🔵 Core: ' + c.name, c.note, ['core', 'Wallerstein']));
          marker.on('mouseover', function () { this.setRadius(14); this.setStyle({ weight: 3 }); });
          marker.on('mouseout', function () { this.setRadius(10); this.setStyle({ weight: 2 }); });
          app.addLayer(marker);
          app.addLayer(app.labelMarker([c.coords[0] + 2.5, c.coords[1]], c.name, c.color, '9px'));
        });

        // Semi-periphery
        DATA.corePeripheryWorld.semiPeriphery.forEach(function (sp) {
          var rad = sp.name === 'India' ? 12 : sp.name === 'China' ? 11 : 8;
          var marker = L.circleMarker(sp.coords, {
            radius: rad, color: '#000', fillColor: sp.color, fillOpacity: 0.85, weight: 2
          }).addTo(map);
          marker.bindPopup(app.buildPopup(
            (sp.color === '#00FF88' ? '🟢' : sp.color === '#FFA500' ? '🟠' : '🟡') + ' Semi-periphery: ' + sp.name,
            sp.note,
            sp.color === '#00FF88' ? ['India', 'rising', '2025'] : sp.color === '#FFA500' ? ['China', 'transition'] : ['semi-periphery']
          ));
          marker.on('mouseover', function () { this.setRadius(rad + 4); });
          marker.on('mouseout', function () { this.setRadius(rad); });
          app.addLayer(marker);
          app.addLayer(app.labelMarker([sp.coords[0] + 2.5, sp.coords[1]], sp.name, sp.color, sp.name === 'India' || sp.name === 'China' ? '11px' : '9px'));
        });

        // Periphery
        DATA.corePeripheryWorld.periphery.forEach(function (p) {
          var marker = L.circleMarker(p.coords, {
            radius: 7, color: '#000', fillColor: p.color, fillOpacity: 0.7, weight: 2
          }).addTo(map);
          marker.bindPopup(app.buildPopup('🔴 Periphery: ' + p.name, p.note, ['periphery']));
          marker.on('mouseover', function () { this.setRadius(11); });
          marker.on('mouseout', function () { this.setRadius(7); });
          app.addLayer(marker);
          app.addLayer(app.labelMarker([p.coords[0] - 2.5, p.coords[1]], p.name, p.color, '9px'));
        });

        // Supply chain shift arrows (China+1)
        DATA.corePeripheryWorld.supplyChainShifts.forEach(function (sc) {
          var line = L.polyline([sc.from, sc.to], {
            color: sc.color, weight: 2.5, opacity: 0.6, dashArray: '8,6'
          }).addTo(map);
          line.bindPopup(app.buildPopup('📦 ' + sc.label, 'Supply chain diversification', ['China+1', '2024']));
          app.addLayer(line);
          // Arrow heads
          app.addLayer(L.circleMarker(sc.to, {
            radius: 4, color: sc.color, fillColor: sc.color, fillOpacity: 0.9, weight: 0
          }).addTo(map));
        });

        // Semiconductor supply chain
        DATA.corePeripheryWorld.semiconductorChain.forEach(function (sc) {
          var outerRing = L.circleMarker(sc.coords, {
            radius: 14, color: sc.color, fillColor: sc.color,
            fillOpacity: 0.1, weight: 2, dashArray: '4,4'
          }).addTo(map);
          app.addLayer(outerRing);

          var m = L.circleMarker(sc.coords, {
            radius: 7, color: '#000', fillColor: sc.color, fillOpacity: 0.9, weight: 2
          }).addTo(map);
          m.bindPopup(app.buildPopup('🔬 Chip Chain: ' + sc.name, sc.note, ['semiconductor', '2025']));
          m.on('mouseover', function () { this.setRadius(11); });
          m.on('mouseout', function () { this.setRadius(7); });
          app.addLayer(m);
        });

        // Semiconductor chain connections
        for (var i = 0; i < DATA.corePeripheryWorld.semiconductorChain.length - 1; i++) {
          var chipLine = L.polyline(
            [DATA.corePeripheryWorld.semiconductorChain[i].coords, DATA.corePeripheryWorld.semiconductorChain[i + 1].coords],
            { color: '#E91E63', weight: 1, opacity: 0.2, dashArray: '3,6' }
          ).addTo(map);
          app.addLayer(chipLine);
        }

        // Info boxes
        app.addLayer(app.infoBox([28.0, 85.0],
          '<b style="color:#00FF88">🇮🇳 India Rising</b><br>' +
          'Semi-periphery → potential core<br>' +
          'Apple 14%+ iPhones made here<br>' +
          'Remittances: $120B<br>' +
          '<span style="color:#FFD700">China+1 major beneficiary</span>'
        ));

        app.addLayer(app.infoBox([40.0, 110.0],
          '<b style="color:#FFA500">China Transition</b><br>' +
          'Semi-periphery → Core<br>' +
          'World\'s factory → innovation<br>' +
          'BRI: extending influence<br>' +
          '<span style="color:#FF6B6B">China+1 = others diversifying away</span>'
        ));

        app.addLayer(app.infoBox([45.0, -30.0],
          '<b style="color:#4FC3F7">Core Dominance</b><br>' +
          'USA, EU, Japan, S. Korea<br>' +
          'High-value services + IP<br>' +
          'Chip 4: semiconductor alliance<br>' +
          'Friendshoring strategy'
        ));

        app.addLayer(app.infoBox([-5.0, 25.0],
          '<b style="color:#FF7043">Periphery Challenge</b><br>' +
          'Sub-Saharan Africa: resource extraction<br>' +
          'Limited value-addition<br>' +
          'BRICS may alter dynamics'
        ));

        app.showToast('Map 132: World Systems Theory loaded', 'success');
      }
    },

    // ─────────────────────────────────────────────────────────────
    // MAP 133 — DEMOGRAPHIC TRANSITION MODEL (DETAILED)
    // ─────────────────────────────────────────────────────────────
    {
      mapNum: 133,
      title: 'Demographic Transition Model — Detailed',
      subtitle: 'Five stages globally, India internal DTM variation',
      mapConfig: { center: [20.0, 30.0], zoom: 2, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'DTM Stages',
          items: [
            { dot: '#E53935', label: 'Stage 1: Pre-transition' },
            { dot: '#FF7043', label: 'Stage 2: Early (falling DR)' },
            { dot: '#FFEB3B', label: 'Stage 3: Late (falling BR)' },
            { dot: '#66BB6A', label: 'Stage 4: Low stationary' },
            { dot: '#4FC3F7', label: 'Stage 5: Decline (neg. growth)' },
            { dot: '#00FF88', label: 'India (TFR 2.0, Stage 3→4)' }
          ]
        },
        {
          sectionTitle: 'Current Affairs',
          items: [
            { dot: '#00FF88', label: 'Transition 2024-25' },
            { dot: '#FF6B6B', label: 'Population Decline' }
          ]
        }
      ],
      info: [
        {
          title: 'Key Facts',
          facts: [
            { label: 'World TFR (2024)', value: '2.3' },
            { label: 'Replacement TFR', value: '2.1' },
            { label: 'India TFR', value: '2.0 (NFHS-5)' },
            { label: 'S. Korea TFR', value: '0.7 (world lowest)' },
            { label: 'Niger TFR', value: '6.8 (world highest)' },
            { label: 'China', value: 'Entering Stage 5 (declining)' },
            { label: 'India internal', value: 'South Stage 4, North Stage 2-3' }
          ]
        },
        {
          title: 'UPSC Key Points',
          items: [
            'DTM: describes population transition through 5 stages',
            'Stage 2 → 3 transition: caused by urbanization, education, women empowerment, healthcare',
            'India: national TFR 2.0 but South India < 1.7 (Stage 4) vs Bihar > 3.0 (Stage 2)',
            'Demographic dividend: when working-age population > dependents (India\'s current window)',
            'Stage 5: Japan, S. Korea, Germany — population declining, ageing crisis',
            'Bangladesh: faster demographic transition than India (same TFR 2.0 but from higher base)',
            'Africa: last major region in Stage 2 — population doubling by 2050'
          ]
        },
        {
          title: 'Current Affairs 2023-26',
          items: [
            'India TFR 2.0: below replacement but regional variation enormous',
            'S. Korea TFR 0.72 (2023): unprecedented — emergency policies failing',
            'China: negative growth since 2022 — rapidly entering Stage 5',
            'Japan: population below 123M, 30% age >65 by 2030',
            'Bangladesh TFR 2.0: faster transition than India (garments, education, family planning)',
            'Sub-Saharan Africa: TFR 4.0-6.8, Stage 2 — demographic explosion',
            'India\'s demographic dividend window: 2020-2055 (key UPSC concept)'
          ]
        }
      ],
      render: function (map, app) {
        // World DTM overview — representative countries
        var dtmWorld = [
          { name: 'Japan', coords: [36.5, 138.0], stage: 5, tfr: 1.2, color: '#4FC3F7' },
          { name: 'S. Korea', coords: [36.5, 127.5], stage: 5, tfr: 0.7, color: '#4FC3F7', note: 'Lowest TFR globally' },
          { name: 'Germany', coords: [51.0, 10.0], stage: 5, tfr: 1.4, color: '#4FC3F7' },
          { name: 'Italy', coords: [42.5, 12.5], stage: 5, tfr: 1.2, color: '#4FC3F7' },
          { name: 'China', coords: [35.0, 105.0], stage: 5, tfr: 1.0, color: '#FF6B6B', note: 'Entering Stage 5, declining' },
          { name: 'USA', coords: [39.0, -98.0], stage: 4, tfr: 1.6, color: '#66BB6A' },
          { name: 'UK', coords: [54.0, -2.0], stage: 4, tfr: 1.6, color: '#66BB6A' },
          { name: 'Australia', coords: [-25.0, 135.0], stage: 4, tfr: 1.6, color: '#66BB6A' },
          { name: 'Thailand', coords: [15.0, 100.0], stage: 4, tfr: 1.3, color: '#66BB6A' },
          { name: 'India', coords: [22.0, 78.0], stage: 3, tfr: 2.0, color: '#00FF88', note: 'TFR 2.0, transitioning 3→4' },
          { name: 'Bangladesh', coords: [24.0, 90.0], stage: 3, tfr: 2.0, color: '#FFEB3B' },
          { name: 'Brazil', coords: [-10.0, -52.0], stage: 3, tfr: 1.7, color: '#FFEB3B' },
          { name: 'Indonesia', coords: [-2.0, 118.0], stage: 3, tfr: 2.2, color: '#FFEB3B' },
          { name: 'Mexico', coords: [23.5, -102.0], stage: 3, tfr: 1.8, color: '#FFEB3B' },
          { name: 'Egypt', coords: [26.0, 30.0], stage: 3, tfr: 2.8, color: '#FFEB3B' },
          { name: 'Nigeria', coords: [9.5, 7.5], stage: 2, tfr: 5.1, color: '#FF7043' },
          { name: 'DRC', coords: [-3.0, 23.0], stage: 2, tfr: 5.6, color: '#FF7043' },
          { name: 'Ethiopia', coords: [9.0, 39.5], stage: 2, tfr: 4.0, color: '#FF7043' },
          { name: 'Niger', coords: [17.5, 8.0], stage: 2, tfr: 6.8, color: '#FF7043', note: 'Highest TFR globally' },
          { name: 'Pakistan', coords: [30.0, 69.0], stage: 2, tfr: 3.5, color: '#FF7043' },
          { name: 'Afghanistan', coords: [34.5, 69.0], stage: 2, tfr: 4.0, color: '#FF7043' }
        ];

        dtmWorld.forEach(function (c) {
          var rad = c.name === 'India' ? 12 : 8;
          var marker = L.circleMarker(c.coords, {
            radius: rad, color: '#000', fillColor: c.color, fillOpacity: 0.85, weight: 2
          }).addTo(map);
          marker.bindPopup(app.buildPopup(
            c.name + ' — Stage ' + c.stage,
            'TFR: ' + c.tfr + (c.note ? '<br>' + c.note : ''),
            [c.color === '#00FF88' ? 'India' : 'Stage ' + c.stage, 'DTM']
          ));
          marker.on('mouseover', function () { this.setRadius(rad + 4); this.setStyle({ fillOpacity: 1, weight: 3 }); });
          marker.on('mouseout', function () { this.setRadius(rad); this.setStyle({ fillOpacity: 0.85, weight: 2 }); });
          app.addLayer(marker);

          if (c.stage <= 2 || c.name === 'India' || c.name === 'China' || c.name === 'S. Korea' || c.name === 'USA' || c.name === 'Bangladesh') {
            app.addLayer(app.labelMarker([c.coords[0] + 2.5, c.coords[1]], c.name + ' TFR:' + c.tfr, c.color, c.name === 'India' ? '11px' : '9px'));
          }
        });

        // Stage bar/legend on side
        DATA.dtmStages.forEach(function (ds, idx) {
          var lat = 55 - (idx * 10);
          app.addLayer(app.circleMarker([lat, -165], { radius: 6, color: ds.color, borderColor: '#000' }));
          app.addLayer(app.labelMarker([lat, -155], ds.label, ds.color, '9px'));
        });

        // India internal DTM mini-map
        app.addLayer(app.infoBox([28.0, 85.0],
          '<b style="color:#00FF88">🇮🇳 India DTM Internal</b><br>' +
          '<span style="color:#66BB6A">South: TFR <1.7 (Stage 4)</span><br>' +
          '<span style="color:#FFEB3B">North: TFR >2.0 (Stage 3)</span><br>' +
          '<span style="color:#FF7043">Bihar: TFR 3.0 (Stage 2!)</span><br>' +
          '<span style="color:#FFD700">Demographic dividend window open</span>'
        ));

        app.addLayer(app.infoBox([42.0, 130.0],
          '<b style="color:#FF6B6B">Stage 5 Crisis</b><br>' +
          'S. Korea TFR 0.7<br>' +
          'Japan TFR 1.2<br>' +
          'China: declining since 2022<br>' +
          'Ageing → economic burden'
        ));

        app.addLayer(app.infoBox([5.0, 15.0],
          '<b style="color:#FF7043">Africa: Last Stage 2</b><br>' +
          'TFR 4.0-6.8<br>' +
          'Population to double by 2050<br>' +
          'Youngest continent<br>' +
          'Niger: 6.8 (highest globally)'
        ));

        app.addLayer(app.infoBox([50.0, -30.0],
          '<b style="color:#FFD700">Replacement TFR = 2.1</b><br>' +
          'Below → eventual population decline<br>' +
          'India: 2.0 (just below)<br>' +
          'World: 2.3 (falling)'
        ));

        app.showToast('Map 133: DTM Detailed loaded', 'success');
      }
    },

    // ─────────────────────────────────────────────────────────────
    // MAP 134 — DTM INDIA INTERNAL + DEMOGRAPHIC DIVIDEND
    // ─────────────────────────────────────────────────────────────
    {
      mapNum: 134,
      title: 'India Demographic Transition & Dividend',
      subtitle: 'State-level DTM stages, North-South divide, demographic window',
      mapConfig: { center: [22.0, 80.0], zoom: 5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'India DTM Stages',
          items: [
            { dot: '#FF7043', label: 'Stage 2 (Bihar TFR 3.0)' },
            { dot: '#FFEB3B', label: 'Stage 3 (UP, MP, Rajasthan)' },
            { dot: '#66BB6A', label: 'Stage 4 (Kerala, TN, AP)' },
            { dot: '#00FF88', label: 'National TFR 2.0' }
          ]
        },
        {
          sectionTitle: 'Demographic Dividend',
          items: [
            { dot: '#FFD700', label: 'Dividend Window (2020-2055)' },
            { dot: '#4FC3F7', label: 'High HDI + Low TFR (South)' },
            { dot: '#FF6B6B', label: 'High TFR + Low HDI (North)' }
          ]
        }
      ],
      info: [
        {
          title: 'Key Facts',
          facts: [
            { label: 'India TFR (national)', value: '2.0 (NFHS-5)' },
            { label: 'Replacement TFR', value: '2.1' },
            { label: 'Bihar TFR', value: '3.0 (highest)' },
            { label: 'Tamil Nadu TFR', value: '1.4 (lowest major state)' },
            { label: 'Median age', value: '~28 years (2025)' },
            { label: 'Demographic dividend window', value: '2020-2055' },
            { label: '65% pop', value: 'Under 35 years' }
          ]
        },
        {
          title: 'UPSC Key Points',
          items: [
            'India TFR 2.0: national average at replacement, but huge state variation',
            'Southern states (Kerala, TN, AP, KA): Stage 4, TFR < 1.7, ageing beginning',
            'Northern states (Bihar, UP, Jharkhand): Stage 2-3, TFR > 2.0, still growing',
            'Demographic dividend: working-age population > dependents → economic opportunity',
            'Window: 2020-2055 — India must invest in education, health, skills',
            'North-South divide: North provides labor, South provides capital (current pattern)',
            'Finance Commission: population-based formula → North-South tension on seat/resource sharing'
          ]
        },
        {
          title: 'Current Affairs 2023-26',
          items: [
            'India median age ~28 (2025): youngest major economy',
            'Bihar TFR 3.0: only large state significantly above replacement',
            'Kerala, TN already entering Stage 4: ageing population concerns',
            'Demographic dividend realization depends on skilling (Skill India 2.0)',
            'NEP 2020 implementation: foundational literacy critical for dividend capture',
            'MPI declining: poverty reduction supporting DTM transition',
            'Census 2021 pending: demographic data gap hindering planning'
          ]
        }
      ],
      render: function (map, app) {
        // South India (Stage 4) states
        DATA.dtmIndia.south.forEach(function (s) {
          var marker = L.circleMarker(s.coords, {
            radius: 9, color: '#000', fillColor: s.color, fillOpacity: 0.85, weight: 2
          }).addTo(map);
          marker.bindPopup(app.buildPopup(
            s.name + ' — Stage ' + s.stage,
            'TFR: ' + s.tfr + '<br>Category: Low fertility, ageing emerging',
            ['Stage 4', 'South India', 'low TFR']
          ));
          marker.on('mouseover', function () { this.setRadius(13); this.setStyle({ fillOpacity: 1, weight: 3 }); });
          marker.on('mouseout', function () { this.setRadius(9); this.setStyle({ fillOpacity: 0.85, weight: 2 }); });
          app.addLayer(marker);
          app.addLayer(app.labelMarker([s.coords[0] + 0.5, s.coords[1] + 0.5], s.name + ' TFR:' + s.tfr, s.color, '9px'));
        });

        // North India (Stage 2-3) states
        DATA.dtmIndia.north.forEach(function (n) {
          var marker = L.circleMarker(n.coords, {
            radius: 9, color: '#000', fillColor: n.color, fillOpacity: 0.85, weight: 2
          }).addTo(map);
          marker.bindPopup(app.buildPopup(
            n.name + ' — Stage ' + n.stage,
            'TFR: ' + n.tfr + '<br>Category: ' + (n.stage === 2 ? 'High growth, early transition' : 'Falling birth rate'),
            ['Stage ' + n.stage, 'North India']
          ));
          marker.on('mouseover', function () { this.setRadius(13); this.setStyle({ fillOpacity: 1, weight: 3 }); });
          marker.on('mouseout', function () { this.setRadius(9); this.setStyle({ fillOpacity: 0.85, weight: 2 }); });
          app.addLayer(marker);
          app.addLayer(app.labelMarker([n.coords[0] + 0.5, n.coords[1] + 0.5], n.name + ' TFR:' + n.tfr, n.color, '9px'));
        });

        // North-South divide line
        var divideLine = L.polyline(
          [[22.0, 68.0], [22.0, 97.0]],
          { color: '#FFD700', weight: 3, opacity: 0.6, dashArray: '10,6' }
        ).addTo(map);
        divideLine.bindPopup(app.buildPopup('Demographic Divide', 'North: High TFR >2.0, younger, Stage 2-3<br>South: Low TFR <1.7, ageing, Stage 4', ['divide', 'India']));
        app.addLayer(divideLine);

        // Divide annotations
        app.addLayer(app.labelMarker([22.5, 68.0], '↑ NORTH: High TFR, Stage 2-3', '#FF7043', '10px'));
        app.addLayer(app.labelMarker([21.3, 68.0], '↓ SOUTH: Low TFR, Stage 4', '#66BB6A', '10px'));

        // National TFR marker (center India)
        var nationalMarker = L.circleMarker([22.0, 80.0], {
          radius: 12, color: '#FFD700', fillColor: '#00FF88',
          fillOpacity: 0.3, weight: 3, dashArray: '6,4'
        }).addTo(map);
        nationalMarker.bindPopup(app.buildPopup('🇮🇳 India National TFR: 2.0', 'At replacement level<br>But enormous internal variation<br>North: >2.5 | South: <1.7', ['India', 'TFR', 'national']));
        app.addLayer(nationalMarker);
        app.addLayer(app.labelMarker([22.5, 80.0], 'India TFR: 2.0', '#00FF88', '12px'));

        // Demographic dividend visualization
        var dividendBox = L.polygon([
          [33.0, 68.0], [33.0, 97.0], [8.0, 97.0], [8.0, 68.0]
        ], {
          color: '#FFD700', fillColor: '#FFD700', fillOpacity: 0.03,
          weight: 1, dashArray: '8,6'
        }).addTo(map);
        dividendBox.bindPopup(app.buildPopup('📊 Demographic Dividend Window', 'India: 2020-2055<br>65% population under 35<br>Median age ~28 (vs China ~39)<br>Must invest in education + skills to realize', ['dividend', 'India']));
        app.addLayer(dividendBox);

        // Bihar highlight (Stage 2)
        var biharRing = L.circleMarker([25.6, 85.5], {
          radius: 18, color: '#FF7043', fillColor: '#FF7043',
          fillOpacity: 0.1, weight: 2, dashArray: '4,4'
        }).addTo(map);
        app.addLayer(biharRing);

        // Kerala highlight (Stage 4 advanced)
        var keralaRing = L.circleMarker([10.0, 76.5], {
          radius: 18, color: '#66BB6A', fillColor: '#66BB6A',
          fillOpacity: 0.1, weight: 2, dashArray: '4,4'
        }).addTo(map);
        app.addLayer(keralaRing);

        // Dependency ratio concept markers
        var depMarkers = [
          { name: 'Youth Bulge (North)', coords: [28.0, 80.0], color: '#FFEB3B', note: 'High young dependency' },
          { name: 'Ageing (South)', coords: [12.0, 77.0], color: '#4FC3F7', note: 'Rising old-age dependency' },
          { name: 'Dividend Peak (West)', coords: [19.5, 73.0], color: '#FFD700', note: 'Optimal ratio: working > dependents' }
        ];

        depMarkers.forEach(function (dm) {
          var m = L.circleMarker(dm.coords, {
            radius: 6, color: '#000', fillColor: dm.color, fillOpacity: 0.8, weight: 1.5
          }).addTo(map);
          m.bindPopup(app.buildPopup(dm.name, dm.note, ['dependency', 'dividend']));
          m.on('mouseover', function () { this.setRadius(10); });
          m.on('mouseout', function () { this.setRadius(6); });
          app.addLayer(m);
        });

        // Info boxes
        app.addLayer(app.infoBox([32.0, 73.0],
          '<b style="color:#FFD700">Demographic Dividend</b><br>' +
          'Window: 2020-2055<br>' +
          'Median age: ~28 years<br>' +
          '65% under 35 years<br>' +
          '<span style="color:#00FF88">Key: Skill India, NEP 2020</span>'
        ));

        app.addLayer(app.infoBox([27.0, 87.0],
          '<b style="color:#FF7043">Bihar: Stage 2</b><br>' +
          'TFR: 3.0 (highest major state)<br>' +
          'Only state significantly above 2.1<br>' +
          'High dependency ratio'
        ));

        app.addLayer(app.infoBox([8.0, 78.0],
          '<b style="color:#66BB6A">Kerala: Stage 4+</b><br>' +
          'TFR: 1.5 (well below replacement)<br>' +
          'Ageing population emerging<br>' +
          'High HDI but low growth<br>' +
          '<span style="color:#4FC3F7">Model for health/education</span>'
        ));

        app.addLayer(app.infoBox([15.0, 84.0],
          '<b style="color:#FF6B6B">Census 2021 Pending</b><br>' +
          'Last demographic data: 2011<br>' +
          'NFHS-5 used as proxy<br>' +
          'Major planning gap<br>' +
          'Finance Commission impact'
        ));

        app.showToast('Map 134: India DTM & Demographic Dividend loaded', 'success');
      }
    }

  ];

  // ═══════════════════════════════════════════════════════════════
  // REGISTER
  // ═══════════════════════════════════════════════════════════════

  window.registerMaps('models', MAPS);
  console.log('models-maps.js: registered ' + MAPS.length + ' maps');

})();
