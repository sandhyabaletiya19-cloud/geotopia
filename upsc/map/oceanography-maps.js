// oceanography-maps.js — MAP 085-094
// DharaVerse UPSC Maps — Oceanography Series
// Responsive & zoom-adaptive labels and features

(function () {
  'use strict';

  // ═══════════════════════════════════════════════════════════
  // RESPONSIVE ZOOM-ADAPTIVE HELPER SYSTEM
  // ═══════════════════════════════════════════════════════════
  
  function getDevice() {
    var w = window.innerWidth;
    if (w <= 480) return 'phone';
    if (w <= 1024) return 'tablet';
    return 'desktop';
  }

  function baseFontSize() {
    var d = getDevice();
    if (d === 'phone') return 11;
    if (d === 'tablet') return 10;
    return 9;
  }

  // Scale font size based on zoom level relative to initial zoom
  function zoomFont(map, baseZoom, basePx) {
    var cur = map.getZoom();
    var diff = cur - baseZoom;
    var scaled = basePx + diff * 2.5;
    return Math.max(8, Math.min(scaled, 28));
  }

  // Create a zoom-adaptive label that grows/shrinks with zoom
  function adaptiveLabel(map, app, latlng, text, color, initialZoom, opts) {
    opts = opts || {};
    var base = opts.basePx || baseFontSize();
    var bold = opts.bold ? 'font-weight:700;' : 'font-weight:600;';
    var maxW = opts.maxWidth || (getDevice() === 'phone' ? 180 : 230);
    var bg = opts.bg || 'transparent';
    var border = opts.border || 'none';
    var padding = opts.padding || '2px 4px';
    var extraCSS = opts.css || '';

    var fontSize = zoomFont(map, initialZoom, base);

    var icon = L.divIcon({
      className: 'dv-adaptive-label',
      html: '<div style="' +
        'font-size:' + fontSize + 'px;' +
        'color:' + color + ';' +
        bold +
        'font-family:Inter,system-ui,sans-serif;' +
        'white-space:nowrap;' +
        'text-shadow:0 0 6px rgba(0,0,0,0.9), 0 0 12px rgba(0,0,0,0.7);' +
        'background:' + bg + ';' +
        'border:' + border + ';' +
        'border-radius:6px;' +
        'padding:' + padding + ';' +
        'max-width:' + maxW + 'px;' +
        'pointer-events:none;' +
        extraCSS +
        '">' + text + '</div>',
      iconSize: [0, 0],
      iconAnchor: opts.anchor || [0, 0]
    });

    var marker = L.marker(latlng, { icon: icon, interactive: false });
    app.addLayer(marker);
    return marker;
  }

  // Create zoom-adaptive info box (the gold-bordered boxes)
  function adaptiveInfoBox(map, app, latlng, html, initialZoom, opts) {
    opts = opts || {};
    var base = opts.basePx || baseFontSize();
    var maxW = getDevice() === 'phone' ? 200 : 250;
    var fontSize = zoomFont(map, initialZoom, base);

    var icon = L.divIcon({
      className: 'dv-adaptive-infobox',
      html: '<div style="' +
        'background:rgba(0,0,0,0.88);' +
        'border:1px solid #FFD700;' +
        'border-radius:10px;' +
        'padding:' + (getDevice() === 'phone' ? '8px 10px' : '10px 14px') + ';' +
        'font-size:' + fontSize + 'px;' +
        'color:#FFD700;' +
        'max-width:' + maxW + 'px;' +
        'line-height:1.5;' +
        'font-family:Inter,system-ui,sans-serif;' +
        'pointer-events:auto;' +
        'white-space:normal;' +
        'text-shadow:none;' +
        '">' + html + '</div>',
      iconSize: [0, 0],
      iconAnchor: opts.anchor || [0, 0]
    });

    var marker = L.marker(latlng, { icon: icon, interactive: true });
    app.addLayer(marker);
    return marker;
  }

  // Re-render all adaptive elements on zoom — stores references
  function setupZoomHandler(map, elements, initialZoom) {
    map.on('zoomend', function () {
      elements.forEach(function (el) {
        if (el.marker && el.rebuild) {
          var newMarker = el.rebuild(map);
          if (el.marker._map) {
            el.marker._map.removeLayer(el.marker);
          }
          if (newMarker) {
            newMarker.addTo(map);
            el.marker = newMarker;
          }
        }
      });
    });
  }

  // Adaptive circle marker — radius grows with zoom
  function adaptiveCircle(map, app, latlng, opts, initialZoom) {
    var baseRadius = opts.radius || 6;
    var cur = map.getZoom();
    var diff = cur - initialZoom;
    var r = Math.max(4, Math.min(baseRadius + diff * 1.5, 22));

    var cm = L.circleMarker(latlng, {
      radius: r,
      color: opts.color || '#000',
      fillColor: opts.fillColor || '#F0A500',
      fillOpacity: opts.fillOpacity || 0.9,
      weight: opts.weight || 2
    });

    if (opts.popup) cm.bindPopup(opts.popup);
    app.addLayer(cm);
    return cm;
  }

  // ═══════════════════════════════════════════════════════════
  // MASTER DATA OBJECT
  // ═══════════════════════════════════════════════════════════

  var DATA = {

    // ── MAP 085 — World Oceans ──
    oceans: [
      { name: 'Pacific Ocean', lat: 0, lng: -160, area: '165.25 M km²', depth: 'Avg 4,280m', deepest: 'Mariana Trench 11,034m', pct: '46.6%', color: '#1E90FF' },
      { name: 'Atlantic Ocean', lat: 5, lng: -30, area: '106.46 M km²', depth: 'Avg 3,646m', deepest: 'Puerto Rico Trench 8,376m', pct: '23.5%', color: '#4169E1' },
      { name: 'Indian Ocean', lat: -15, lng: 75, area: '70.56 M km²', depth: 'Avg 3,741m', deepest: 'Java Trench 7,725m', pct: '19.5%', color: '#6495ED' },
      { name: 'Southern Ocean', lat: -65, lng: 0, area: '21.96 M km²', depth: 'Avg 3,270m', deepest: 'S. Sandwich Trench 7,235m', pct: '6.1%', color: '#87CEEB' },
      { name: 'Arctic Ocean', lat: 80, lng: 0, area: '14.06 M km²', depth: 'Avg 1,205m', deepest: 'Molloy Deep 5,607m', pct: '4.3%', color: '#B0E0E6' }
    ],

    majorSeas: [
      { name: 'South China Sea', lat: 12, lng: 114, area: '3.5 M km²' },
      { name: 'Caribbean Sea', lat: 15, lng: -75, area: '2.75 M km²' },
      { name: 'Mediterranean Sea', lat: 35, lng: 18, area: '2.5 M km²' },
      { name: 'Bering Sea', lat: 58, lng: -175, area: '2.3 M km²' },
      { name: 'Sea of Okhotsk', lat: 55, lng: 150, area: '1.58 M km²' },
      { name: 'Arabian Sea', lat: 15, lng: 65, area: '3.86 M km²' },
      { name: 'Bay of Bengal', lat: 15, lng: 88, area: '2.17 M km²' },
      { name: 'Red Sea', lat: 20, lng: 38, area: '0.44 M km²' },
      { name: 'Persian Gulf', lat: 27, lng: 51, area: '0.25 M km²' },
      { name: 'Sea of Japan', lat: 40, lng: 135, area: '0.98 M km²' },
      { name: 'Black Sea', lat: 43, lng: 34, area: '0.44 M km²' },
      { name: 'Caspian Sea', lat: 42, lng: 51, area: '0.37 M km²' },
      { name: 'Coral Sea', lat: -18, lng: 155, area: '4.79 M km²' },
      { name: 'Tasman Sea', lat: -38, lng: 163, area: '2.3 M km²' }
    ],

    // ── MAP 086 — Bathymetry ──
    bathymetryZones: [
      { name: 'Continental Shelf', depth: '0–200m', color: '#90EE90', desc: 'Richest fishing grounds, 8% of ocean floor, oil/gas reserves', examples: 'Grand Banks, Sunda Shelf, Sahul Shelf, India western shelf' },
      { name: 'Continental Slope', depth: '200–4,000m', color: '#3CB371', desc: 'Steep descent from shelf to deep ocean, submarine canyons', examples: 'Hudson Canyon, Congo Canyon, Indus Canyon' },
      { name: 'Abyssal Plain', depth: '4,000–6,000m', color: '#1E3A5F', desc: 'Flattest areas on Earth, covers 50% of ocean floor, sediment covered', examples: 'Sohm Plain (Atlantic), Wharton Basin (Indian)' },
      { name: 'Oceanic Trench', depth: '>6,000m', color: '#0D0D3B', desc: 'Subduction zones, deepest ocean features, convergent boundaries', examples: 'Mariana, Tonga, Philippine, Peru-Chile' },
      { name: 'Mid-Ocean Ridge', depth: '2,000–3,000m', color: '#FF6347', desc: 'Divergent boundaries, new crust formed, volcanic activity', examples: 'Mid-Atlantic Ridge, East Pacific Rise, Indian Ridge' }
    ],

    shelfRegions: [
      { name: 'Grand Banks', lat: 46, lng: -52, note: 'Historic cod fishing' },
      { name: 'Sunda Shelf', lat: 2, lng: 110, note: 'SE Asia shallow sea' },
      { name: 'India Western Shelf', lat: 18, lng: 70, note: 'Bombay High oil' },
      { name: 'Sahul Shelf', lat: -12, lng: 132, note: 'Australia-New Guinea' },
      { name: 'North Sea Shelf', lat: 56, lng: 3, note: 'Oil & gas rich' },
      { name: 'Patagonian Shelf', lat: -48, lng: -62, note: 'Rich fishing' }
    ],

    // ── MAP 087 — Ocean Trenches ──
    trenches: [
      { name: 'Mariana Trench', lat: 11.35, lng: 142.2, depth: 11034, ocean: 'Pacific', note: 'Deepest point: Challenger Deep. First explored by Piccard & Walsh (1960), James Cameron (2012)' },
      { name: 'Tonga Trench', lat: -23, lng: -174, depth: 10882, ocean: 'Pacific', note: 'Second deepest, near Tonga Islands. Horizon Deep.' },
      { name: 'Philippine Trench', lat: 10, lng: 127, depth: 10540, ocean: 'Pacific', note: 'Also called Mindanao Trench. Galathea Deep.' },
      { name: 'Kuril-Kamchatka Trench', lat: 46, lng: 157, depth: 10542, ocean: 'Pacific', note: 'Part of Pacific Ring of Fire' },
      { name: 'Kermadec Trench', lat: -32, lng: -177, depth: 10047, ocean: 'Pacific', note: 'Connected to Tonga Trench system' },
      { name: 'Puerto Rico Trench', lat: 19.7, lng: -66, depth: 8376, ocean: 'Atlantic', note: 'Deepest in Atlantic. Milwaukee Deep.' },
      { name: 'South Sandwich Trench', lat: -57, lng: -25, depth: 8265, ocean: 'Atlantic/Southern', note: 'Deepest in Southern Ocean region' },
      { name: 'Peru-Chile Trench', lat: -20, lng: -71, depth: 8065, ocean: 'Pacific', note: 'Also Atacama Trench. Nazca Plate subduction.' },
      { name: 'Java/Sunda Trench', lat: -10, lng: 108, depth: 7725, ocean: 'Indian', note: 'Deepest in Indian Ocean. 2004 tsunami origin zone.' },
      { name: 'Japan Trench', lat: 36, lng: 143, depth: 8412, ocean: 'Pacific', note: '2011 Tohoku earthquake source zone' },
      { name: 'Aleutian Trench', lat: 51, lng: -177, depth: 7679, ocean: 'Pacific', note: 'Pacific Plate subducting under North American Plate' }
    ],

    // ── MAP 088 — Mid-Ocean Ridges ──
    ridges: [
      {
        name: 'Mid-Atlantic Ridge',
        color: '#FF6347',
        coords: [
          [87, -10], [80, -5], [70, -15], [65, -17], [63, -19],
          [55, -32], [45, -28], [35, -35], [30, -42], [20, -45],
          [10, -40], [0, -14], [-10, -13], [-20, -12], [-30, -14],
          [-40, -16], [-50, -1], [-55, 0], [-60, -1]
        ],
        length: '16,000 km',
        note: 'Longest mountain range on Earth. Iceland sits atop it. Divergent boundary: North American & Eurasian plates (N), South American & African plates (S).'
      },
      {
        name: 'East Pacific Rise',
        color: '#FF4500',
        coords: [
          [50, -130], [40, -120], [30, -113], [20, -109],
          [10, -104], [0, -102], [-10, -110], [-20, -113],
          [-30, -112], [-40, -110], [-50, -118], [-60, -130]
        ],
        length: '9,000 km',
        note: 'Fastest spreading ridge (15 cm/yr at some points). Pacific & Nazca plate divergence.'
      },
      {
        name: 'Central Indian Ridge',
        color: '#FF8C00',
        coords: [
          [10, 57], [5, 60], [0, 63], [-5, 66], [-10, 68],
          [-15, 66], [-20, 64], [-25, 60]
        ],
        length: '3,000 km',
        note: 'Separates African and Indo-Australian plates. Triple junction at Rodrigues.'
      },
      {
        name: 'Southeast Indian Ridge',
        color: '#FFA500',
        coords: [
          [-25, 60], [-30, 70], [-35, 80], [-40, 90],
          [-45, 100], [-50, 115], [-50, 130], [-48, 145]
        ],
        length: '6,000 km',
        note: 'Between Indo-Australian and Antarctic plates.'
      },
      {
        name: 'Southwest Indian Ridge',
        color: '#DAA520',
        coords: [
          [-25, 60], [-30, 50], [-35, 40], [-40, 30],
          [-45, 20], [-50, 10], [-52, 0], [-55, -5]
        ],
        length: '7,700 km',
        note: 'Slowest spreading ridge. Between African and Antarctic plates.'
      },
      {
        name: 'Pacific-Antarctic Ridge',
        color: '#CD853F',
        coords: [
          [-55, -130], [-55, -140], [-58, -150], [-62, -160],
          [-65, -170], [-65, -180]
        ],
        length: '5,000 km',
        note: 'Between Pacific and Antarctic plates.'
      }
    ],

    ridgePoints: [
      { name: 'Iceland', lat: 64.5, lng: -18.5, note: 'Only place Mid-Atlantic Ridge is above sea level. Thingvellir rift visible.' },
      { name: 'Afar Triple Junction', lat: 11.5, lng: 42, note: 'Red Sea, Gulf of Aden, East African Rift meeting point. Active rifting.' },
      { name: 'Rodrigues Triple Junction', lat: -25.5, lng: 70, note: 'Where 3 Indian Ocean ridges meet.' },
      { name: 'Azores', lat: 38.7, lng: -27.2, note: 'Volcanic islands on Mid-Atlantic Ridge.' },
      { name: 'Galápagos Rift', lat: 0, lng: -86, note: 'First hydrothermal vents discovered here (1977). Chemosynthesis discovery.' }
    ],

    // ── MAP 089 — Ocean Currents ──
    currentGyres: [
      { name: 'North Atlantic Gyre', center: [30, -45], color: '#FF6347', rotation: 'Clockwise' },
      { name: 'South Atlantic Gyre', center: [-25, -15], color: '#FF8C00', rotation: 'Counter-clockwise' },
      { name: 'North Pacific Gyre', center: [30, -170], color: '#FFD700', rotation: 'Clockwise' },
      { name: 'South Pacific Gyre', center: [-30, -130], color: '#00CED1', rotation: 'Counter-clockwise' },
      { name: 'Indian Ocean Gyre', center: [-20, 75], color: '#9370DB', rotation: 'Counter-clockwise' }
    ],

    currents: [
      // North Atlantic
      { name: 'Gulf Stream', coords: [[25, -80], [30, -75], [35, -70], [40, -60], [45, -45], [50, -30]], color: '#FF4444', type: 'warm', note: 'Speed: 2.5 m/s. Warms W. Europe. Discovered by B. Franklin.' },
      { name: 'North Atlantic Drift', coords: [[50, -30], [55, -20], [60, -10], [65, 0]], color: '#FF6666', type: 'warm', note: 'Extension of Gulf Stream. Keeps Norway ice-free.' },
      { name: 'Canary Current', coords: [[45, -15], [40, -16], [35, -17], [30, -18], [25, -18], [20, -18]], color: '#4488FF', type: 'cold', note: 'Cold current off NW Africa. Rich upwelling zone.' },
      { name: 'North Equatorial Current', coords: [[15, -20], [15, -35], [15, -50], [15, -65], [15, -75]], color: '#FF8888', type: 'warm', note: 'Driven by NE trade winds. Feeds Gulf Stream.' },
      { name: 'Labrador Current', coords: [[65, -60], [60, -57], [55, -55], [50, -52], [45, -50], [40, -50]], color: '#2266FF', type: 'cold', note: 'Carries icebergs south. Met Gulf Stream → Grand Banks fog.' },

      // South Atlantic
      { name: 'Brazil Current', coords: [[-5, -35], [-10, -36], [-15, -37], [-20, -38], [-30, -45]], color: '#FF6644', type: 'warm', note: 'Warm current along Brazil coast.' },
      { name: 'Benguela Current', coords: [[-35, 15], [-30, 14], [-25, 13], [-20, 12], [-15, 12]], color: '#4488FF', type: 'cold', note: 'Cold upwelling current. Rich fishing — Namibia, S. Africa.' },
      { name: 'South Equatorial Current', coords: [[-5, 5], [-5, -5], [-5, -15], [-5, -25], [-5, -33]], color: '#FF8844', type: 'warm', note: 'Trade wind driven. Splits at Brazil coast.' },

      // North Pacific
      { name: 'Kuroshio Current', coords: [[20, 125], [25, 130], [30, 135], [35, 140], [40, 145]], color: '#FF4444', type: 'warm', note: 'Japan Current. Pacific equivalent of Gulf Stream. Speed 1-3 knots.' },
      { name: 'California Current', coords: [[48, -125], [43, -126], [38, -124], [33, -120], [28, -117], [23, -115]], color: '#4488FF', type: 'cold', note: 'Cold current. Coastal fog in San Francisco. Rich marine life.' },
      { name: 'North Pacific Current', coords: [[42, 150], [43, 160], [43, 170], [43, 180], [43, -170], [43, -160], [45, -140]], color: '#FF8866', type: 'warm', note: 'Extension of Kuroshio. West Wind Drift.' },
      { name: 'Oyashio Current', coords: [[55, 155], [50, 152], [45, 150], [40, 147]], color: '#2266FF', type: 'cold', note: 'Cold current off Kamchatka & Japan. Rich nutrients.' },

      // South Pacific
      { name: 'East Australian Current', coords: [[-15, 155], [-20, 155], [-25, 154], [-30, 153], [-35, 152]], color: '#FF6644', type: 'warm', note: 'Warm current. Weakening due to climate change.' },
      { name: 'Peru/Humboldt Current', coords: [[-50, -75], [-45, -75], [-40, -74], [-35, -73], [-30, -72], [-25, -72], [-20, -73], [-15, -76]], color: '#2266FF', type: 'cold', note: 'World\'s most productive current. Anchovy fisheries. El Niño disruption.' },

      // Indian Ocean
      { name: 'Agulhas Current', coords: [[-27, 33], [-30, 32], [-33, 28], [-35, 25], [-38, 20]], color: '#FF4444', type: 'warm', note: 'Strongest western boundary current. Agulhas Return.' },
      { name: 'West Australian Current', coords: [[-35, 115], [-30, 113], [-25, 112], [-20, 112]], color: '#4488FF', type: 'cold', note: 'Weak cold current off W. Australia.' },
      { name: 'SW Monsoon Current', coords: [[5, 55], [8, 65], [10, 72], [12, 78], [10, 85]], color: '#FF8800', type: 'warm', note: 'Reverses seasonally. June–Sept. Indian Ocean unique monsoon current.' },
      { name: 'NE Monsoon Current', coords: [[10, 85], [8, 78], [5, 70], [3, 60], [2, 52]], color: '#FFAA44', type: 'warm', note: 'Nov–Feb. Reverses the SW monsoon current.' },

      // Circumpolar
      { name: 'Antarctic Circumpolar Current', coords: [[-58, -60], [-58, -30], [-56, 0], [-55, 30], [-55, 60], [-56, 90], [-58, 120], [-60, 150], [-60, 180], [-58, -150], [-58, -120], [-58, -90], [-58, -60]], color: '#00BFFF', type: 'cold', note: 'Largest ocean current (130 Sv). Connects all oceans. West Wind Drift.' }
    ],

    // ── MAP 090 — Thermohaline Circulation ──
    thermohaline: {
      surfaceWarm: [
        [45, -50], [35, -55], [25, -65], [15, -75], [8, -80],
        [0, -45], [-5, -35], [-10, -20], [0, -5], [10, 5],
        [15, 30], [10, 42], [5, 50], [0, 60], [-5, 70],
        [-10, 80], [-5, 95], [0, 105], [10, 115], [15, 120],
        [5, 130], [-10, 140], [-20, 150]
      ],
      deepCold: [
        [65, -20], [55, -35], [45, -50], [35, -50], [25, -45],
        [15, -35], [5, -25], [-5, -15], [-15, -5], [-25, 5],
        [-35, 15], [-45, 30], [-55, 40], [-65, 50], [-65, 70],
        [-60, 90], [-55, 100], [-45, 110], [-35, 120], [-25, 130],
        [-15, 140], [-10, 150]
      ],
      formationPoints: [
        { name: 'NADW Formation', lat: 67, lng: -20, note: 'North Atlantic Deep Water. Dense cold salty water sinks near Greenland & Iceland. Main driver of thermohaline circulation.' },
        { name: 'AABW Formation', lat: -70, lng: -30, note: 'Antarctic Bottom Water. Densest water mass. Forms near Weddell Sea. Flows along ocean bottom worldwide.' },
        { name: 'Upwelling Zone — Pacific', lat: -10, lng: -100, note: 'Deep cold water rises. Nutrients brought to surface. Supports fisheries.' },
        { name: 'Upwelling Zone — Indian', lat: -10, lng: 60, note: 'Deep water returns to surface in Indian Ocean.' }
      ]
    },

    // ── MAP 091 — Coral Reefs ──
    coralReefs: [
      { name: 'Great Barrier Reef', lat: -18, lng: 147, area: '344,400 km²', type: 'Barrier', country: 'Australia', note: 'World\'s largest coral reef system. 2,900 individual reefs. UNESCO WHS. Severe bleaching 2016, 2017, 2020, 2022.' },
      { name: 'Mesoamerican Reef', lat: 17, lng: -87, area: '1,000 km long', type: 'Barrier', country: 'Mexico-Belize-Guatemala-Honduras', note: '2nd largest barrier reef. High biodiversity.' },
      { name: 'Red Sea Coral Reef', lat: 22, lng: 37, area: '~4,250 km long', type: 'Fringing', country: 'Egypt-Saudi Arabia', note: 'Most heat-resistant corals. Potential climate refugia.' },
      { name: 'New Caledonia Reef', lat: -21, lng: 165, area: '1,500 km long', type: 'Barrier', country: 'France (NC)', note: 'UNESCO WHS. 2nd longest double barrier reef.' },
      { name: 'Andaman Reef', lat: 11, lng: 92.5, area: '~600 km²', type: 'Fringing', country: 'India', note: 'India\'s richest coral ecosystem. 200+ coral species.' },
      { name: 'Gulf of Kutch Reef', lat: 22.5, lng: 69.5, area: '~460 km²', type: 'Fringing/Platform', country: 'India', note: 'Northernmost reef in Indian Ocean. Marine NP established 1982.' },
      { name: 'Lakshadweep Reef', lat: 10.5, lng: 72.5, area: '~4,200 km²', type: 'Atoll', country: 'India', note: 'Only atoll system in India. 36 islands, 12 atolls.' },
      { name: 'Gulf of Mannar Reef', lat: 9, lng: 79, area: '~630 km²', type: 'Fringing', country: 'India', note: 'Biosphere Reserve. 117 coral species. Pearl fishing.' },
      { name: 'Raja Ampat', lat: -1, lng: 130, area: '~40,000 km²', type: 'Fringing', country: 'Indonesia', note: 'Highest marine biodiversity on Earth. Coral Triangle heart.' },
      { name: 'Maldives Reef', lat: 4, lng: 73, area: '~21,000 km²', type: 'Atoll', country: 'Maldives', note: '26 atolls. 1,192 islands. Most vulnerable to sea level rise.' },
      { name: 'Florida Keys Reef', lat: 25, lng: -81, area: '~1,400 km²', type: 'Barrier', country: 'USA', note: '3rd largest barrier reef. Florida Keys NMS.' },
      { name: 'Coral Triangle', lat: -2, lng: 125, area: '5.7 M km²', type: 'Region', country: 'Indonesia-Malaysia-Philippines-PNG-Solomon Is-Timor Leste', note: 'Global center of marine biodiversity. 76% of all reef-building coral species.' },
      { name: 'Tubbataha Reef', lat: 8.9, lng: 120, area: '~970 km²', type: 'Atoll', country: 'Philippines', note: 'UNESCO WHS. Pristine reef. Sulu Sea.' },
      { name: 'Aldabra Atoll', lat: -9.4, lng: 46.4, area: '~155 km²', type: 'Atoll', country: 'Seychelles', note: 'UNESCO WHS. World\'s 2nd largest atoll. Giant tortoises.' }
    ],

    coralTrianglePolygon: [
      [20, 115], [20, 135], [5, 140], [-2, 142], [-10, 145],
      [-12, 140], [-10, 125], [-5, 118], [0, 110], [5, 110],
      [15, 115], [20, 115]
    ],

    // ── MAP 092 — EEZ ──
    eezData: [
      { name: 'India', lat: 12, lng: 75, eez: '2.02 M km²', coastline: '7,516 km', note: 'UNCLOS ratified 1995. 9 coastal states, 4 UTs. Sagarmala Programme for port-led development.' },
      { name: 'USA', lat: 30, lng: -120, eez: '11.35 M km²', coastline: '19,924 km', note: 'Largest EEZ. Includes Pacific territories.' },
      { name: 'France', lat: 20, lng: -50, eez: '11.04 M km²', coastline: '4,853 km', note: '2nd largest due to overseas territories (French Polynesia, New Caledonia).' },
      { name: 'Australia', lat: -25, lng: 140, eez: '8.15 M km²', coastline: '25,760 km', note: '3rd largest EEZ.' },
      { name: 'Russia', lat: 62, lng: 110, eez: '7.57 M km²', coastline: '37,653 km', note: 'Longest coastline nation.' },
      { name: 'Canada', lat: 55, lng: -100, eez: '5.6 M km²', coastline: '202,080 km', note: 'Longest coastline.' },
      { name: 'Japan', lat: 35, lng: 140, eez: '4.48 M km²', coastline: '29,751 km', note: 'Okinotorishima controversy.' },
      { name: 'New Zealand', lat: -42, lng: 174, eez: '4.08 M km²', coastline: '15,134 km', note: 'Includes Tokelau, Cook Islands.' },
      { name: 'UK', lat: 55, lng: -2, eez: '6.81 M km²', coastline: '12,429 km', note: 'Due to overseas territories.' },
      { name: 'Indonesia', lat: -2, lng: 118, eez: '6.16 M km²', coastline: '54,716 km', note: 'Largest archipelagic state.' },
      { name: 'China', lat: 30, lng: 122, eez: '0.88 M km²', coastline: '14,500 km', note: 'Nine-dash line claims exceed UNCLOS EEZ.' },
      { name: 'Brazil', lat: -15, lng: -38, eez: '3.66 M km²', coastline: '7,491 km', note: 'Blue Amazon concept.' }
    ],

    eezDisputes: [
      { name: 'South China Sea', lat: 12, lng: 114, parties: 'China vs Vietnam, Philippines, Malaysia, Brunei, Taiwan', note: 'PCA Ruling 2016 rejected China\'s 9-dash line. $5.3 trillion annual trade passes through.' },
      { name: 'East China Sea', lat: 28, lng: 125, parties: 'China vs Japan', note: 'Senkaku/Diaoyu Islands dispute. Rich gas deposits.' },
      { name: 'Sir Creek', lat: 23.5, lng: 68.5, parties: 'India vs Pakistan', note: '96 km marshy creek in Rann of Kutch. Affects maritime boundary.' },
      { name: 'Arctic Claims', lat: 85, lng: 0, parties: 'Russia, Canada, USA, Norway, Denmark', note: 'Resource-rich under ice. Lomonosov Ridge claim by Russia.' }
    ],

    // ── MAP 093 — Sea Level Change ──
    seaLevelData: {
      risingCoasts: [
        { name: 'Sundarbans, India', lat: 22, lng: 89, rate: '3.14 mm/yr', note: 'Islands disappearing. 4 islands lost since 2000. 10,000+ climate refugees.' },
        { name: 'Maldives', lat: 4, lng: 73, rate: '3.5 mm/yr', note: 'Average height 1.5m above sea level. May be uninhabitable by 2100.' },
        { name: 'Tuvalu', lat: -8, lng: 179, rate: '3.9 mm/yr', note: 'Signed Australia deal for climate refuge. Population ~11,000.' },
        { name: 'Kiribati', lat: 1.4, lng: 173, rate: '4 mm/yr', note: 'Purchased land in Fiji as contingency.' },
        { name: 'Marshall Islands', lat: 7, lng: 171, rate: '3.4 mm/yr', note: 'US military base at Kwajalein at risk.' },
        { name: 'Bangladesh Coast', lat: 22, lng: 91, rate: '5 mm/yr', note: '17% land may be submerged by 2050. 20M displaced.' },
        { name: 'Lakshadweep', lat: 10, lng: 72, rate: '1.75 mm/yr', note: 'India\'s lowest-lying territory. Avg elevation 1-2m.' }
      ],
      sinkingCities: [
        { name: 'Jakarta', lat: -6.2, lng: 106.8, rate: '25 cm/yr (subsidence)', note: 'Fastest sinking city. Moving capital to Nusantara.' },
        { name: 'Venice', lat: 45.4, lng: 12.3, rate: '1-2 mm/yr + subsidence', note: 'MOSE flood barrier system. Acqua alta events increasing.' },
        { name: 'Mumbai', lat: 19, lng: 72.8, rate: '3.7 mm/yr', note: 'Coastal flooding increasing. 2.8M at risk by 2050.' },
        { name: 'Shanghai', lat: 31.2, lng: 121.5, rate: '5-10 mm/yr subsidence', note: 'Land subsidence from groundwater pumping.' },
        { name: 'New Orleans', lat: 30, lng: -90, rate: '6 mm/yr subsidence', note: 'Below sea level. Hurricane Katrina 2005 devastation.' },
        { name: 'Bangkok', lat: 13.7, lng: 100.5, rate: '2-3 cm/yr subsidence', note: 'May be partially submerged by 2030.' },
        { name: 'Lagos', lat: 6.5, lng: 3.4, rate: '3-10 mm/yr', note: 'Population 15M+. Eko Atlantic reclamation project.' },
        { name: 'Kolkata', lat: 22.5, lng: 88.4, rate: '3.5 mm/yr', note: 'Subsidence + sea level rise. Hooghly estuary flooding.' },
        { name: 'Chennai', lat: 13, lng: 80.3, rate: '0.3 mm/yr', note: 'Increasing coastal erosion. 2015 floods.' }
      ]
    },

    // ── MAP 094 — Marine Protected Areas ──
    mpas: [
      { name: 'Papahānaumokuākea', lat: 25, lng: -170, area: '1,510,000 km²', country: 'USA', note: 'World\'s largest MPA. NW Hawaiian Islands. UNESCO WHS. Obama expanded 2016.' },
      { name: 'Ross Sea MPA', lat: -75, lng: 175, area: '1,550,000 km²', country: 'International (CCAMLR)', note: 'World\'s largest in 2016. Protects Antarctic marine ecosystem.' },
      { name: 'Phoenix Islands PA', lat: -3, lng: -171, area: '408,250 km²', country: 'Kiribati', note: 'One of world\'s largest. Deep sea coral & seamounts.' },
      { name: 'Natural Park of Coral Sea', lat: -20, lng: 162, area: '1,300,000 km²', country: 'France (New Caledonia)', note: '3rd largest MPA globally.' },
      { name: 'British Indian Ocean Territory', lat: -6, lng: 71, area: '640,000 km²', country: 'UK (Chagos)', note: 'World\'s largest no-take reserve. Mauritius sovereignty dispute (ICJ 2019).' },
      { name: 'Great Barrier Reef MP', lat: -18, lng: 147, area: '344,400 km²', country: 'Australia', note: 'UNESCO WHS. Multi-use zoning. Bleaching crisis.' },
      { name: 'Galápagos Marine Reserve', lat: -1, lng: -90, area: '133,000 km²', country: 'Ecuador', note: 'UNESCO WHS. Unique marine life. Darwin & Wolf islands.' },
      // India MPAs
      { name: 'Gulf of Mannar MNP', lat: 9, lng: 79, area: '560 km²', country: 'India', note: 'India\'s first Marine NP (1980). 21 islands. Dugong habitat.' },
      { name: 'Gulf of Kutch MNP', lat: 22.5, lng: 69.5, area: '458 km²', country: 'India', note: 'Est. 1982. 42 islands. Coral reefs, mangroves. Northernmost reef in India.' },
      { name: 'Mahatma Gandhi MNP', lat: 11.5, lng: 92.5, area: '281.5 km²', country: 'India', note: 'Wandoor, Andaman. Open-ocean reserve. Coral reefs.' },
      { name: 'Rani Jhansi MNP', lat: 12, lng: 93, area: '256 km²', country: 'India', note: 'Andaman Islands. Mangrove-coral complex.' },
      { name: 'Sundarbans Biosphere', lat: 21.9, lng: 89, area: '9,630 km²', country: 'India-Bangladesh', note: 'UNESCO WHS. Largest mangrove. Royal Bengal Tiger. Marine-terrestrial interface.' },
      { name: 'Malvan MPA', lat: 16.1, lng: 73.4, area: '29 km²', country: 'India', note: 'Maharashtra. Sindhudurg Fort. Coral reef conservation.' }
    ]
  };

  // ═══════════════════════════════════════════════════════════
  // MAP DEFINITIONS
  // ═══════════════════════════════════════════════════════════

  var MAPS = [
    // ─────────────────────────────────────────────────────────
    // MAP 085 — World Ocean Map
    // ─────────────────────────────────────────────────────────
    {
      mapNum: 85,
      title: 'World Ocean Map',
      subtitle: 'All 5 Oceans, Major Seas & Depths',
      mapConfig: { center: [20, 0], zoom: 2, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Oceans',
          items: [
            { dot: '#1E90FF', label: 'Pacific Ocean (46.6%)' },
            { dot: '#4169E1', label: 'Atlantic Ocean (23.5%)' },
            { dot: '#6495ED', label: 'Indian Ocean (19.5%)' },
            { dot: '#87CEEB', label: 'Southern Ocean (6.1%)' },
            { dot: '#B0E0E6', label: 'Arctic Ocean (4.3%)' }
          ]
        },
        {
          sectionTitle: 'Features',
          items: [
            { dot: '#FFD700', label: 'Major Seas' },
            { dot: '#FF4466', label: 'Deepest Points' }
          ]
        }
      ],
      info: [
        {
          title: 'World Oceans — Key Facts',
          facts: [
            { label: 'Total Ocean Area', value: '361.9 M km² (71% of Earth)' },
            { label: 'Total Volume', value: '1.335 billion km³' },
            { label: 'Average Depth', value: '3,688 meters' },
            { label: 'Deepest Point', value: 'Mariana Trench — 11,034m' },
            { label: 'Largest Ocean', value: 'Pacific — 165.25 M km²' },
            { label: 'Smallest Ocean', value: 'Arctic — 14.06 M km²' },
            { label: 'Saltiest', value: 'Atlantic Ocean (35.5 ppt avg)' }
          ]
        },
        {
          title: 'UPSC Relevance',
          items: [
            'Oceans regulate global climate via heat distribution',
            'Thermohaline circulation — global conveyor belt',
            'UNCLOS 1982 — maritime zones & EEZ (200 nm)',
            'International Seabed Authority (ISA) — deep sea mining',
            'Blue Economy — India\'s Vision 2030',
            'India\'s Samudrayaan — deep ocean mission (6000m)',
            'Polymetallic nodules — Central Indian Ocean Basin',
            'Indian Ocean Dipole (IOD) affects Indian monsoon'
          ]
        }
      ],
      render: function (map, app) {
        var Z = map.getZoom();

        // Oceans
        DATA.oceans.forEach(function (o) {
          var c = L.circle([o.lat, o.lng], {
            radius: 2500000,
            color: o.color,
            fillColor: o.color,
            fillOpacity: 0.12,
            weight: 1,
            dashArray: '6,4'
          });
          c.bindPopup(app.buildPopup(
            o.name,
            '<b>Area:</b> ' + o.area + '<br>' +
            '<b>Avg Depth:</b> ' + o.depth + '<br>' +
            '<b>Deepest:</b> ' + o.deepest + '<br>' +
            '<b>% of World Ocean:</b> ' + o.pct,
            ['Ocean', 'UPSC']
          ));
          c.on('mouseover', function () { this.setStyle({ fillOpacity: 0.25, weight: 2 }); });
          c.on('mouseout', function () { this.setStyle({ fillOpacity: 0.12, weight: 1 }); });
          app.addLayer(c);

          adaptiveLabel(map, app, [o.lat, o.lng], o.name, o.color, Z, { bold: true, basePx: 13 });
          adaptiveLabel(map, app, [o.lat - 5, o.lng], o.area, '#AACCFF', Z, { basePx: 10 });
        });

        // Major Seas
        DATA.majorSeas.forEach(function (s) {
          var cm = L.circleMarker([s.lat, s.lng], {
            radius: 5,
            color: '#000',
            fillColor: '#FFD700',
            fillOpacity: 0.9,
            weight: 2
          });
          cm.bindPopup(app.buildPopup(
            s.name,
            '<b>Area:</b> ' + s.area,
            ['Sea', 'Geography']
          ));
          app.addLayer(cm);

          adaptiveLabel(map, app, [s.lat + 2, s.lng], s.name, '#FFD700', Z, { basePx: 8 });
        });

        // Info box
        adaptiveInfoBox(map, app, [5, -160],
          '<b style="color:#1E90FF">🌊 Pacific Ocean</b><br>' +
          '• Largest & deepest ocean<br>' +
          '• Contains Mariana Trench (11,034m)<br>' +
          '• Ring of Fire — 75% world volcanoes<br>' +
          '• Covers > 30% of Earth\'s surface<br>' +
          '• Named by Magellan (1521) — "peaceful sea"',
          Z
        );

        adaptiveInfoBox(map, app, [-40, 60],
          '<b style="color:#6495ED">🌊 Indian Ocean</b><br>' +
          '• 3rd largest ocean<br>' +
          '• Monsoon current reversal — unique<br>' +
          '• India\'s EEZ: 2.02 M km²<br>' +
          '• Central Indian Ridge system<br>' +
          '• Strategic: 40% offshore oil, 65% oil tanker traffic',
          Z
        );

        app.showToast('MAP 085 — World Ocean Map loaded', 'success');
      }
    },

    // ─────────────────────────────────────────────────────────
    // MAP 086 — Ocean Depth Map (Bathymetry)
    // ─────────────────────────────────────────────────────────
    {
      mapNum: 86,
      title: 'Ocean Depth Map (Bathymetry)',
      subtitle: 'Continental Shelf, Slope, Abyssal Plains, Trenches & Ridges',
      mapConfig: { center: [15, 0], zoom: 2, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Depth Zones',
          items: [
            { color: '#90EE90', label: 'Continental Shelf (0–200m)' },
            { color: '#3CB371', label: 'Continental Slope (200–4,000m)' },
            { color: '#1E3A5F', label: 'Abyssal Plain (4,000–6,000m)' },
            { color: '#0D0D3B', label: 'Oceanic Trench (>6,000m)' },
            { color: '#FF6347', label: 'Mid-Ocean Ridge (2,000–3,000m)' }
          ]
        },
        {
          sectionTitle: 'Features',
          items: [
            { dot: '#FFD700', label: 'Key Shelf Regions' }
          ]
        }
      ],
      info: [
        {
          title: 'Bathymetric Zones — Key Facts',
          facts: [
            { label: 'Continental Shelf', value: '0–200m, 8% ocean floor, richest biologically' },
            { label: 'Continental Slope', value: '200–4,000m, submarine canyons, sediment transport' },
            { label: 'Abyssal Plain', value: '4,000–6,000m, 50% of ocean floor' },
            { label: 'Hadal Zone', value: '>6,000m, only in trenches' },
            { label: 'Mid-Ocean Ridge', value: '~65,000 km total length worldwide' },
            { label: 'Shelf Width India', value: 'Western coast wider (340km Gujarat) vs Eastern (60-80km)' }
          ]
        },
        {
          title: 'UPSC Relevance',
          items: [
            'Continental shelf — fishing, oil, mineral resources',
            'UNCLOS defines shelf: max 350 nm from baseline',
            'India\'s Extended Continental Shelf claim — CLCS submission',
            'Submarine canyons: Hudson, Congo, Indus — sediment transport',
            'Turbidity currents — sediment fans on abyssal plains',
            'Polymetallic nodules — Mn, Ni, Co on abyssal plains',
            'India allocated 75,000 km² in Central Indian Ocean Basin (CIOB)',
            'Seamounts — underwater volcanoes, hotspots of biodiversity'
          ]
        }
      ],
      render: function (map, app) {
        var Z = map.getZoom();

        // Depth zones — represented as labeled info regions
        DATA.bathymetryZones.forEach(function (zone, i) {
          var latOffset = 45 - i * 20;
          var infoBoxLng = -160;

          adaptiveInfoBox(map, app, [latOffset, infoBoxLng],
            '<b style="color:' + zone.color + '">' + zone.name + '</b><br>' +
            '<span style="color:#F0F4FF">Depth: ' + zone.depth + '</span><br>' +
            '<span style="color:#AAB8D0">' + zone.desc + '</span><br>' +
            '<span style="color:#8899BB">e.g. ' + zone.examples + '</span>',
            Z
          );
        });

        // Shelf regions
        DATA.shelfRegions.forEach(function (s) {
          var cm = L.circleMarker([s.lat, s.lng], {
            radius: 7,
            color: '#000',
            fillColor: '#90EE90',
            fillOpacity: 0.9,
            weight: 2
          });
          cm.bindPopup(app.buildPopup(
            s.name + ' (Continental Shelf)',
            '<b>Note:</b> ' + s.note,
            ['Shelf', 'Bathymetry']
          ));
          cm.on('mouseover', function () { this.setStyle({ radius: 10, weight: 3 }); });
          cm.on('mouseout', function () { this.setStyle({ radius: 7, weight: 2 }); });
          app.addLayer(cm);

          adaptiveLabel(map, app, [s.lat + 3, s.lng], s.name, '#90EE90', Z, { basePx: 9 });
        });

        // Schematic cross-section ridge line (Mid-Atlantic)
        var ridgeLine = L.polyline(
          [[65, -17], [45, -28], [20, -45], [0, -14], [-30, -14], [-55, 0]],
          { color: '#FF6347', weight: 3, dashArray: '8,5', opacity: 0.8 }
        );
        ridgeLine.bindPopup(app.buildPopup(
          'Mid-Atlantic Ridge',
          'Longest mountain chain on Earth (16,000 km).<br>Divergent plate boundary. Seafloor spreading.',
          ['Ridge', 'Plate Tectonics']
        ));
        app.addLayer(ridgeLine);
        adaptiveLabel(map, app, [35, -38], 'Mid-Atlantic Ridge', '#FF6347', Z, { bold: true, basePx: 10 });

        // India shelf detail
        var indiaShelfPoly = L.polygon([
          [23, 67], [20, 68], [17, 72], [14, 73], [10, 75], [8, 77],
          [8, 78], [10, 76], [14, 74], [17, 73], [20, 69], [23, 68]
        ], {
          color: '#90EE90', fillColor: '#90EE90', fillOpacity: 0.25, weight: 2, dashArray: '4,4'
        });
        indiaShelfPoly.bindPopup(app.buildPopup(
          'India Western Continental Shelf',
          '<b>Width:</b> Up to 340 km off Gujarat<br>' +
          '<b>Key features:</b> Bombay High oil field, Mumbai Offshore Basin<br>' +
          '<b>Resources:</b> Oil, gas, fish, polymetallic nodules',
          ['India', 'Shelf', 'Resources']
        ));
        indiaShelfPoly.on('mouseover', function () { this.setStyle({ fillOpacity: 0.45, weight: 3 }); });
        indiaShelfPoly.on('mouseout', function () { this.setStyle({ fillOpacity: 0.25, weight: 2 }); });
        app.addLayer(indiaShelfPoly);
        adaptiveLabel(map, app, [18, 69], 'India Western Shelf', '#90EE90', Z, { basePx: 9 });

        // Trench markers on map
        var trenchSample = [
          { name: 'Mariana', lat: 11.35, lng: 142.2, depth: '11,034m' },
          { name: 'Puerto Rico', lat: 19.7, lng: -66, depth: '8,376m' },
          { name: 'Java/Sunda', lat: -10, lng: 108, depth: '7,725m' }
        ];
        trenchSample.forEach(function (t) {
          var cm = L.circleMarker([t.lat, t.lng], {
            radius: 6,
            color: '#000',
            fillColor: '#0D0D3B',
            fillOpacity: 0.9,
            weight: 2
          });
          cm.bindPopup(app.buildPopup(t.name + ' Trench', 'Depth: ' + t.depth, ['Trench', 'Deep']));
          app.addLayer(cm);
          adaptiveLabel(map, app, [t.lat - 3, t.lng], t.name + ' (' + t.depth + ')', '#AABBDD', Z, { basePx: 8 });
        });

        adaptiveInfoBox(map, app, [-35, -80],
          '<b style="color:#F0A500">📊 Ocean Floor Facts</b><br>' +
          '• 71% of Earth covered by oceans<br>' +
          '• Avg depth: 3,688m<br>' +
          '• Continental shelf: richest zone — 90% of fish catch<br>' +
          '• India\'s CIOB allocation: 75,000 km² for nodules<br>' +
          '• Samudrayaan mission targets 6,000m depth',
          Z
        );

        app.showToast('MAP 086 — Ocean Depth Map loaded', 'success');
      }
    },

    // ─────────────────────────────────────────────────────────
    // MAP 087 — Major Ocean Trenches Map
    // ─────────────────────────────────────────────────────────
    {
      mapNum: 87,
      title: 'Major Ocean Trenches Map',
      subtitle: 'Deepest Points on Earth — Subduction Zones',
      mapConfig: { center: [10, 140], zoom: 3, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Trench Depth',
          items: [
            { dot: '#FF0040', label: '> 10,000m (Ultra-deep)' },
            { dot: '#FF4466', label: '8,000–10,000m' },
            { dot: '#FF6688', label: '6,000–8,000m' },
            { dot: '#FF88AA', label: '< 6,000m' }
          ]
        },
        {
          sectionTitle: 'Features',
          items: [
            { line: '#FF4466', label: 'Ring of Fire zone' },
            { dot: '#FFD700', label: 'Named deep points' }
          ]
        }
      ],
      info: [
        {
          title: 'Oceanic Trenches — Key Facts',
          facts: [
            { label: 'Deepest', value: 'Mariana Trench — 11,034m (Challenger Deep)' },
            { label: 'Longest', value: 'Peru-Chile Trench — 5,900 km' },
            { label: 'Formation', value: 'Oceanic-oceanic or oceanic-continental subduction' },
            { label: 'Hadal Zone', value: 'Depth >6,000m — named after Hades' },
            { label: 'First Human Visit', value: 'Piccard & Walsh — 1960 (Trieste)' },
            { label: 'Solo Dive', value: 'James Cameron — 2012 (Deepsea Challenger)' }
          ]
        },
        {
          title: 'UPSC Relevance',
          items: [
            'Trenches form at convergent plate boundaries',
            'Benioff Zone — inclined seismic zone at subduction',
            'Island arcs form parallel to trenches (Japan, Mariana)',
            'Accretionary wedge — sediments scraped off subducting plate',
            '2004 Indian Ocean tsunami — Java Trench subduction zone',
            '2011 Tohoku earthquake — Japan Trench (9.1 Mw)',
            'Deep sea extremophiles — potential for biotechnology',
            'Polymetallic nodules & hydrothermal vents near trenches'
          ]
        }
      ],
      render: function (map, app) {
        var Z = map.getZoom();

        // Ring of Fire outline
        var ringOfFire = L.polyline([
          [-45, -75], [-35, -73], [-25, -72], [-15, -76], [-5, -80],
          [0, -80], [10, -85], [20, -105], [35, -120], [50, -130],
          [55, -165], [60, -170], [55, 165], [50, 155], [45, 150],
          [38, 142], [30, 135], [20, 125], [10, 127], [0, 125],
          [-10, 120], [-20, 118], [-30, 175], [-40, 178], [-45, -178]
        ], {
          color: '#FF4466',
          weight: 2,
          opacity: 0.5,
          dashArray: '10,6'
        });
        ringOfFire.bindPopup(app.buildPopup(
          'Ring of Fire',
          'Circum-Pacific Belt — 40,000 km<br>75% of world\'s volcanoes<br>90% of world\'s earthquakes',
          ['Tectonic', 'Seismic']
        ));
        app.addLayer(ringOfFire);

        // Trenches
        DATA.trenches.forEach(function (t) {
          var depthColor;
          if (t.depth > 10000) depthColor = '#FF0040';
          else if (t.depth > 8000) depthColor = '#FF4466';
          else if (t.depth > 6000) depthColor = '#FF6688';
          else depthColor = '#FF88AA';

          var radius = Math.max(5, Math.min(t.depth / 1200, 10));

          var cm = L.circleMarker([t.lat, t.lng], {
            radius: radius,
            color: '#000',
            fillColor: depthColor,
            fillOpacity: 0.9,
            weight: 2
          });

          cm.bindPopup(app.buildPopup(
            t.name,
            '<b>Depth:</b> ' + t.depth.toLocaleString() + 'm<br>' +
            '<b>Ocean:</b> ' + t.ocean + '<br>' +
            '<b>Notes:</b> ' + t.note,
            ['Trench', t.ocean, 'Subduction']
          ));
          cm.on('mouseover', function () { this.setStyle({ radius: radius + 4, weight: 3 }); });
          cm.on('mouseout', function () { this.setStyle({ radius: radius, weight: 2 }); });
          app.addLayer(cm);

          adaptiveLabel(map, app, [t.lat + 3, t.lng], t.name, depthColor, Z, { bold: true, basePx: 10 });
          adaptiveLabel(map, app, [t.lat - 2, t.lng], t.depth.toLocaleString() + 'm', '#CCDDFF', Z, { basePx: 9 });
        });

        // Depth comparison info box
        adaptiveInfoBox(map, app, [-30, -140],
          '<b style="color:#FF0040">📏 Depth Comparison</b><br>' +
          '• Mariana: 11,034m — deeper than Everest is tall<br>' +
          '• Tonga: 10,882m — 2nd deepest<br>' +
          '• Philippine: 10,540m<br>' +
          '• If Everest placed in Mariana, 2,185m still submerged<br>' +
          '• Pressure at bottom: 1,086 atm (16,000 psi)',
          Z
        );

        adaptiveInfoBox(map, app, [50, 100],
          '<b style="color:#FFD700">🇮🇳 India & Trenches</b><br>' +
          '• Java/Sunda Trench nearest to India (7,725m)<br>' +
          '• 2004 tsunami: Indo-Australian plate subducted under Burma plate<br>' +
          '• Andaman-Nicobar arc — volcanic island arc<br>' +
          '• Barren Island — India\'s only active volcano',
          Z
        );

        app.showToast('MAP 087 — Major Ocean Trenches loaded', 'success');
      }
    },

    // ─────────────────────────────────────────────────────────
    // MAP 088 — Mid Ocean Ridges Map
    // ─────────────────────────────────────────────────────────
    {
      mapNum: 88,
      title: 'Mid-Ocean Ridges Map',
      subtitle: 'Divergent Plate Boundaries & Seafloor Spreading',
      mapConfig: { center: [10, -20], zoom: 2, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Ridge Systems',
          items: [
            { line: '#FF6347', label: 'Mid-Atlantic Ridge (16,000 km)' },
            { line: '#FF4500', label: 'East Pacific Rise (9,000 km)' },
            { line: '#FF8C00', label: 'Central Indian Ridge (3,000 km)' },
            { line: '#FFA500', label: 'SE Indian Ridge (6,000 km)' },
            { line: '#DAA520', label: 'SW Indian Ridge (7,700 km)' },
            { line: '#CD853F', label: 'Pacific-Antarctic Ridge (5,000 km)' }
          ]
        },
        {
          sectionTitle: 'Key Points',
          items: [
            { dot: '#00FF88', label: 'Exposed Ridge / Triple Junction' },
            { dot: '#FFD700', label: 'Hydrothermal Vents' }
          ]
        }
      ],
      info: [
        {
          title: 'Mid-Ocean Ridges — Key Facts',
          facts: [
            { label: 'Total Length', value: '~65,000 km worldwide' },
            { label: 'Longest', value: 'Mid-Atlantic Ridge — 16,000 km' },
            { label: 'Fastest Spreading', value: 'East Pacific Rise — 15 cm/yr' },
            { label: 'Slowest Spreading', value: 'SW Indian Ridge — 1.5 cm/yr' },
            { label: 'Discovery', value: 'Sonar mapping post-WWII (1950s)' },
            { label: 'Theory', value: 'Harry Hess — Seafloor Spreading (1962)' }
          ]
        },
        {
          title: 'UPSC Relevance',
          items: [
            'Wegener\'s Continental Drift (1912) → Hess\'s Seafloor Spreading (1962)',
            'Vine-Matthews-Morley — magnetic stripes prove spreading',
            'Paleomagnetism — alternating normal/reverse magnetic bands',
            'Transform faults — perpendicular to ridges',
            'Hydrothermal vents — chemosynthesis-based ecosystems',
            'Black smokers — 350°C mineral-rich water jets',
            'Iceland — Mid-Atlantic Ridge above sea level',
            'Afar Triangle — triple junction (active rifting today)'
          ]
        }
      ],
      render: function (map, app) {
        var Z = map.getZoom();

        // Ridge polylines
        DATA.ridges.forEach(function (r) {
          var line = L.polyline(r.coords, {
            color: r.color,
            weight: 3.5,
            opacity: 0.85,
            dashArray: '1'
          });
          line.bindPopup(app.buildPopup(
            r.name,
            '<b>Length:</b> ' + r.length + '<br>' + r.note,
            ['Ridge', 'Divergent', 'Seafloor Spreading']
          ));
          line.on('mouseover', function () { this.setStyle({ weight: 6, opacity: 1 }); });
          line.on('mouseout', function () { this.setStyle({ weight: 3.5, opacity: 0.85 }); });
          app.addLayer(line);

          // Ridge label at midpoint
          var mid = Math.floor(r.coords.length / 2);
          adaptiveLabel(map, app, [r.coords[mid][0] + 4, r.coords[mid][1]], r.name, r.color, Z, { bold: true, basePx: 10 });
        });

        // Key points
        DATA.ridgePoints.forEach(function (p) {
          var cm = L.circleMarker([p.lat, p.lng], {
            radius: 7,
            color: '#000',
            fillColor: '#00FF88',
            fillOpacity: 0.9,
            weight: 2
          });
          cm.bindPopup(app.buildPopup(
            p.name,
            p.note,
            ['Ridge Point', 'Tectonic']
          ));
          cm.on('mouseover', function () { this.setStyle({ radius: 10, weight: 3 }); });
          cm.on('mouseout', function () { this.setStyle({ radius: 7, weight: 2 }); });
          app.addLayer(cm);

          adaptiveLabel(map, app, [p.lat + 3, p.lng], p.name, '#00FF88', Z, { basePx: 9, bold: true });
        });

        // Info boxes
        adaptiveInfoBox(map, app, [70, 40],
          '<b style="color:#FF6347">🌋 Iceland</b><br>' +
          '• Only place Mid-Atlantic Ridge is exposed<br>' +
          '• Thingvellir — visible rift valley<br>' +
          '• North American & Eurasian plates diverge 2.5 cm/yr<br>' +
          '• Geothermal energy capital of the world',
          Z
        );

        adaptiveInfoBox(map, app, [-15, -85],
          '<b style="color:#00FF88">🔬 Hydrothermal Vents</b><br>' +
          '• First discovered: Galápagos Rift (1977)<br>' +
          '• Black smokers: 350°C, mineral-rich<br>' +
          '• Chemosynthesis — life without sunlight<br>' +
          '• Giant tube worms, vent shrimp, extremophiles<br>' +
          '• Potential for rare mineral extraction',
          Z
        );

        adaptiveInfoBox(map, app, [15, 40],
          '<b style="color:#FFA500">🔺 Afar Triple Junction</b><br>' +
          '• Where 3 plates meet: African, Arabian, Somali<br>' +
          '• Red Sea, Gulf of Aden, E. African Rift<br>' +
          '• Most accessible spreading center on land<br>' +
          '• Danakil Depression — hottest place on Earth',
          Z
        );

        app.showToast('MAP 088 — Mid-Ocean Ridges loaded', 'success');
      }
    },

    // ─────────────────────────────────────────────────────────
    // MAP 089 — Ocean Currents Detailed
    // ─────────────────────────────────────────────────────────
    {
      mapNum: 89,
      title: 'Ocean Currents — Detailed World Map',
      subtitle: '5 Major Gyres, Warm & Cold Currents',
      mapConfig: { center: [15, 0], zoom: 2, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Current Types',
          items: [
            { line: '#FF4444', label: 'Warm Current' },
            { line: '#4488FF', label: 'Cold Current' }
          ]
        },
        {
          sectionTitle: 'Gyres',
          items: [
            { dot: '#FF6347', label: 'N. Atlantic Gyre (CW)' },
            { dot: '#FF8C00', label: 'S. Atlantic Gyre (CCW)' },
            { dot: '#FFD700', label: 'N. Pacific Gyre (CW)' },
            { dot: '#00CED1', label: 'S. Pacific Gyre (CCW)' },
            { dot: '#9370DB', label: 'Indian Ocean Gyre (CCW)' }
          ]
        }
      ],
      info: [
        {
          title: 'Ocean Currents — Key Facts',
          facts: [
            { label: 'Fastest', value: 'Gulf Stream — up to 2.5 m/s' },
            { label: 'Largest', value: 'Antarctic Circumpolar Current (130 Sv)' },
            { label: 'Most Productive', value: 'Humboldt/Peru Current (upwelling)' },
            { label: 'NH Gyre Rotation', value: 'Clockwise (Coriolis force)' },
            { label: 'SH Gyre Rotation', value: 'Counter-clockwise' },
            { label: 'Driving Forces', value: 'Wind, Coriolis, thermohaline, density' }
          ]
        },
        {
          title: 'UPSC Important Concepts',
          items: [
            'Coriolis Effect: deflects currents right (NH), left (SH)',
            'Ekman Spiral: wind-driven surface flow at angle to wind',
            'Western Boundary Currents: Gulf Stream, Kuroshio (warm, fast, deep)',
            'Eastern Boundary Currents: California, Canary (cold, slow, shallow)',
            'Upwelling: cold nutrient-rich water rises → rich fishing',
            'El Niño: weakened trade winds → warm water shifts east (Pacific)',
            'La Niña: stronger trade winds → cold upwelling intensified',
            'Indian Ocean Dipole (IOD): affects Indian monsoon',
            'Labrador + Gulf Stream meeting → Grand Banks fog & fishing',
            'Humboldt disruption during El Niño → anchovy collapse'
          ]
        }
      ],
      render: function (map, app) {
        var Z = map.getZoom();

        // Gyre centers
        DATA.currentGyres.forEach(function (g) {
          var c = L.circle(g.center, {
            radius: 1500000,
            color: g.color,
            fillColor: g.color,
            fillOpacity: 0.08,
            weight: 1,
            dashArray: '6,6'
          });
          c.bindPopup(app.buildPopup(
            g.name,
            '<b>Rotation:</b> ' + g.rotation + '<br>' +
            'Subtropical gyre driven by trade winds and westerlies.',
            ['Gyre', 'Current']
          ));
          app.addLayer(c);
          adaptiveLabel(map, app, g.center, g.name, g.color, Z, { bold: true, basePx: 10 });
        });

        // Current polylines
        DATA.currents.forEach(function (cur) {
          var line = L.polyline(cur.coords, {
            color: cur.color,
            weight: 3,
            opacity: 0.8
          });
          line.bindPopup(app.buildPopup(
            cur.name + ' (' + cur.type.toUpperCase() + ')',
            cur.note,
            [cur.type === 'warm' ? 'Warm' : 'Cold', 'Current', 'Oceanography']
          ));
          line.on('mouseover', function () { this.setStyle({ weight: 5, opacity: 1 }); });
          line.on('mouseout', function () { this.setStyle({ weight: 3, opacity: 0.8 }); });
          app.addLayer(line);

          // Arrow heads via small triangles
          var lastIdx = cur.coords.length - 1;
          var arrowLat = cur.coords[lastIdx][0];
          var arrowLng = cur.coords[lastIdx][1];
          var arrowIcon = L.divIcon({
            className: 'dv-arrow',
            html: '<div style="color:' + cur.color + ';font-size:14px;text-shadow:0 0 4px #000;">▶</div>',
            iconSize: [14, 14],
            iconAnchor: [7, 7]
          });
          app.addLayer(L.marker([arrowLat, arrowLng], { icon: arrowIcon, interactive: false }));

          // Current name label at midpoint
          var midIdx = Math.floor(cur.coords.length / 2);
          adaptiveLabel(map, app, [cur.coords[midIdx][0] + 2, cur.coords[midIdx][1]],
            cur.name, cur.color, Z, { basePx: 8 }
          );
        });

        // Info boxes
        adaptiveInfoBox(map, app, [55, -90],
          '<b style="color:#FF4444">🌊 Gulf Stream</b><br>' +
          '• Discovered by Benjamin Franklin<br>' +
          '• Transports 30 Sv (30 million m³/s)<br>' +
          '• Warms Western Europe by 5-10°C<br>' +
          '• London (51°N) warmer than Labrador (53°N)<br>' +
          '• Weakening risk due to AMOC slowdown',
          Z
        );

        adaptiveInfoBox(map, app, [-40, -100],
          '<b style="color:#2266FF">🐟 Humboldt Current</b><br>' +
          '• World\'s most productive fishery<br>' +
          '• 18-20% of global fish catch<br>' +
          '• El Niño disrupts → anchovy collapse<br>' +
          '• Cold upwelling: nutrient-rich water<br>' +
          '• Atacama Desert aridity due to cold current',
          Z
        );

        adaptiveInfoBox(map, app, [5, 50],
          '<b style="color:#FF8800">🇮🇳 Indian Ocean Currents</b><br>' +
          '• Unique monsoon reversal of currents<br>' +
          '• SW Monsoon Current: Jun–Sep<br>' +
          '• NE Monsoon Current: Nov–Feb<br>' +
          '• Somali Current reverses direction seasonally<br>' +
          '• Agulhas Current: strongest W boundary current',
          Z
        );

        app.showToast('MAP 089 — Ocean Currents Detailed loaded', 'success');
      }
    },

    // ─────────────────────────────────────────────────────────
    // MAP 090 — Thermohaline Circulation
    // ─────────────────────────────────────────────────────────
    {
      mapNum: 90,
      title: 'Thermohaline Circulation',
      subtitle: 'Global Ocean Conveyor Belt — Deep Water Formation',
      mapConfig: { center: [10, -20], zoom: 2, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Circulation',
          items: [
            { line: '#FF4444', label: 'Surface Warm Flow' },
            { line: '#2266FF', label: 'Deep Cold Flow' }
          ]
        },
        {
          sectionTitle: 'Formation Points',
          items: [
            { dot: '#00FF88', label: 'Deep Water Formation' },
            { dot: '#FFD700', label: 'Upwelling Zone' }
          ]
        }
      ],
      info: [
        {
          title: 'Thermohaline Circulation — Key Facts',
          facts: [
            { label: 'Also called', value: 'Global Ocean Conveyor Belt' },
            { label: 'Cycle Time', value: '~1,000 years for complete circuit' },
            { label: 'NADW', value: 'North Atlantic Deep Water — main driver' },
            { label: 'AABW', value: 'Antarctic Bottom Water — densest water mass' },
            { label: 'Volume Flow', value: '~20 Sv (Sverdrups) for NADW' },
            { label: 'Depth', value: 'Deep flow at 2,000-4,000m' }
          ]
        },
        {
          title: 'UPSC Relevance',
          items: [
            'Thermohaline = thermo (temperature) + haline (salinity)',
            'Dense cold salty water sinks near Greenland → drives circulation',
            'AMOC: Atlantic Meridional Overturning Circulation',
            'AMOC slowdown threat — climate change melting Greenland ice',
            'Heinrich Events: past AMOC shutdowns → rapid cooling in Europe',
            'Younger Dryas: 12,800 years ago — AMOC shutdown episode',
            'Movie "The Day After Tomorrow" — dramatizes AMOC collapse',
            'Carries heat from tropics to poles — regulates global climate',
            'CO₂ absorption: deep water stores carbon for centuries',
            'Weakening AMOC → could cool Europe by 5-10°C'
          ]
        }
      ],
      render: function (map, app) {
        var Z = map.getZoom();

        // Surface warm flow
        var warmLine = L.polyline(DATA.thermohaline.surfaceWarm, {
          color: '#FF4444',
          weight: 4,
          opacity: 0.8,
          dashArray: '12,6'
        });
        warmLine.bindPopup(app.buildPopup(
          'Surface Warm Current',
          'Carries warm water from tropics towards poles. Avg depth: 0-500m. Temperature: 10-25°C.',
          ['Warm', 'Surface', 'Thermohaline']
        ));
        warmLine.on('mouseover', function () { this.setStyle({ weight: 7, opacity: 1 }); });
        warmLine.on('mouseout', function () { this.setStyle({ weight: 4, opacity: 0.8 }); });
        app.addLayer(warmLine);

        // Deep cold flow
        var coldLine = L.polyline(DATA.thermohaline.deepCold, {
          color: '#2266FF',
          weight: 4,
          opacity: 0.8,
          dashArray: '4,8'
        });
        coldLine.bindPopup(app.buildPopup(
          'Deep Cold Current',
          'Dense cold salty water flows along ocean floor. Depth: 2,000-4,000m. Temperature: 1-4°C.',
          ['Cold', 'Deep', 'Thermohaline']
        ));
        coldLine.on('mouseover', function () { this.setStyle({ weight: 7, opacity: 1 }); });
        coldLine.on('mouseout', function () { this.setStyle({ weight: 4, opacity: 0.8 }); });
        app.addLayer(coldLine);

        // Formation points
        DATA.thermohaline.formationPoints.forEach(function (fp) {
          var isFormation = fp.name.indexOf('Formation') > -1;
          var cm = L.circleMarker([fp.lat, fp.lng], {
            radius: 9,
            color: '#000',
            fillColor: isFormation ? '#00FF88' : '#FFD700',
            fillOpacity: 0.9,
            weight: 2
          });
          cm.bindPopup(app.buildPopup(
            fp.name,
            fp.note,
            ['Thermohaline', isFormation ? 'Deep Water' : 'Upwelling']
          ));
          cm.on('mouseover', function () { this.setStyle({ radius: 13, weight: 3 }); });
          cm.on('mouseout', function () { this.setStyle({ radius: 9, weight: 2 }); });
          app.addLayer(cm);

          adaptiveLabel(map, app, [fp.lat + 4, fp.lng], fp.name,
            isFormation ? '#00FF88' : '#FFD700', Z, { bold: true, basePx: 10 }
          );
        });

        // Labels along flow
        adaptiveLabel(map, app, [30, -55], '← Surface Warm →', '#FF6666', Z, { bold: true, basePx: 11 });
        adaptiveLabel(map, app, [30, -50], '← Deep Cold →', '#6688FF', Z, { basePx: 10 });

        // Info boxes
        adaptiveInfoBox(map, app, [75, -60],
          '<b style="color:#00FF88">❄️ NADW Formation</b><br>' +
          '• North Atlantic near Greenland & Iceland<br>' +
          '• Cold salty water sinks (thermohaline forcing)<br>' +
          '• Gulf Stream brings warm salty water north<br>' +
          '• Evaporation + cooling → density increases → sinking<br>' +
          '• Main engine of the conveyor belt',
          Z
        );

        adaptiveInfoBox(map, app, [-55, -60],
          '<b style="color:#2266FF">🧊 AABW Formation</b><br>' +
          '• Weddell Sea near Antarctica<br>' +
          '• Densest water mass in the world<br>' +
          '• Temperature: -0.8°C<br>' +
          '• Flows along the very bottom of all oceans<br>' +
          '• Antarctic ice sheet melting could disrupt formation',
          Z
        );

        adaptiveInfoBox(map, app, [40, 90],
          '<b style="color:#FF4466">⚠️ Climate Change Risk</b><br>' +
          '• AMOC has weakened 15% since mid-20th century<br>' +
          '• Greenland meltwater dilutes salinity → less sinking<br>' +
          '• Potential tipping point: complete AMOC shutdown<br>' +
          '• Would cool Europe by 5-10°C rapidly<br>' +
          '• IPCC AR6: Low likelihood but catastrophic impact',
          Z
        );

        app.showToast('MAP 090 — Thermohaline Circulation loaded', 'success');
      }
    },

    // ─────────────────────────────────────────────────────────
    // MAP 091 — Coral Reef Distribution World
    // ─────────────────────────────────────────────────────────
    {
      mapNum: 91,
      title: 'World Coral Reef Distribution',
      subtitle: 'Major Reef Systems, Coral Triangle & Bleaching Threats',
      mapConfig: { center: [5, 100], zoom: 3, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Reef Types',
          items: [
            { dot: '#FF6B6B', label: 'Barrier Reef' },
            { dot: '#4ECDC4', label: 'Fringing Reef' },
            { dot: '#45B7D1', label: 'Atoll' },
            { dot: '#F7DC6F', label: 'Platform/Patch Reef' }
          ]
        },
        {
          sectionTitle: 'Zones',
          items: [
            { color: '#FF6347', label: 'Coral Triangle (Biodiversity Hotspot)' },
            { dot: '#FFD700', label: 'India\'s Reef Areas' }
          ]
        }
      ],
      info: [
        {
          title: 'Coral Reefs — Key Facts',
          facts: [
            { label: 'Total Area', value: '~284,300 km² worldwide' },
            { label: 'Biodiversity', value: '25% of all marine species' },
            { label: 'Largest', value: 'Great Barrier Reef — 344,400 km²' },
            { label: 'Temperature', value: '20-28°C optimal (tropical)' },
            { label: 'Depth', value: 'Usually <50m (photic zone)' },
            { label: 'Threat', value: '75% reefs threatened by 2050' }
          ]
        },
        {
          title: 'UPSC Relevance',
          items: [
            'Coral bleaching: expulsion of zooxanthellae due to heat stress',
            'Great Barrier Reef: mass bleaching 2016, 2017, 2020, 2022',
            'India coral areas: Gulf of Kutch, Gulf of Mannar, Andaman, Lakshadweep',
            'Coral Triangle: 76% of all reef-building coral species',
            'ICRI — International Coral Reef Initiative (India is member)',
            'Reef types: Fringing, Barrier, Atoll (Darwin\'s subsidence theory)',
            'Lakshadweep: only atoll system in India (36 islands, 12 atolls)',
            'Gulf of Mannar Biosphere Reserve — India\'s first marine BR',
            'Ocean acidification: CO₂ → carbonic acid → dissolves coral',
            'Paris Agreement 1.5°C target crucial for coral survival'
          ]
        }
      ],
      render: function (map, app) {
        var Z = map.getZoom();

        // Coral Triangle polygon
        var ctPoly = L.polygon(DATA.coralTrianglePolygon, {
          color: '#FF6347',
          fillColor: '#FF6347',
          fillOpacity: 0.12,
          weight: 2,
          dashArray: '8,4'
        });
        ctPoly.bindPopup(app.buildPopup(
          'Coral Triangle',
          '<b>Area:</b> 5.7 M km²<br>' +
          '<b>Countries:</b> Indonesia, Malaysia, Philippines, PNG, Solomon Islands, Timor-Leste<br>' +
          '<b>Biodiversity:</b> 76% of all reef-building coral species, 37% of reef fish species<br>' +
          '• Called "Amazon of the Seas"<br>' +
          '• CT6 — 6-nation Coral Triangle Initiative (2009)',
          ['Coral Triangle', 'Biodiversity', 'Conservation']
        ));
        ctPoly.on('mouseover', function () { this.setStyle({ fillOpacity: 0.3, weight: 3 }); });
        ctPoly.on('mouseout', function () { this.setStyle({ fillOpacity: 0.12, weight: 2 }); });
        app.addLayer(ctPoly);
        adaptiveLabel(map, app, [-3, 127], 'CORAL TRIANGLE', '#FF6347', Z, { bold: true, basePx: 12 });

        // Reef markers
        DATA.coralReefs.forEach(function (r) {
          var typeColor;
          if (r.type === 'Barrier') typeColor = '#FF6B6B';
          else if (r.type === 'Fringing' || r.type === 'Fringing/Platform') typeColor = '#4ECDC4';
          else if (r.type === 'Atoll') typeColor = '#45B7D1';
          else typeColor = '#F7DC6F';

          var isIndia = r.country === 'India';
          var cm = L.circleMarker([r.lat, r.lng], {
            radius: isIndia ? 8 : 6,
            color: isIndia ? '#FFD700' : '#000',
            fillColor: typeColor,
            fillOpacity: 0.9,
            weight: isIndia ? 3 : 2
          });
          cm.bindPopup(app.buildPopup(
            r.name,
            '<b>Type:</b> ' + r.type + '<br>' +
            '<b>Area:</b> ' + r.area + '<br>' +
            '<b>Country:</b> ' + r.country + '<br>' +
            '<b>Notes:</b> ' + r.note,
            [r.type, 'Coral', isIndia ? 'India' : 'World']
          ));
          cm.on('mouseover', function () { this.setStyle({ radius: isIndia ? 11 : 9, weight: 3 }); });
          cm.on('mouseout', function () { this.setStyle({ radius: isIndia ? 8 : 6, weight: isIndia ? 3 : 2 }); });
          app.addLayer(cm);

          adaptiveLabel(map, app, [r.lat + 2.5, r.lng], r.name,
            isIndia ? '#FFD700' : typeColor, Z, { basePx: isIndia ? 9 : 8 }
          );
        });

        // Bleaching threat band (tropical belt)
        var bleachBand = L.polygon([
          [30, -180], [30, 180], [25, 180], [25, -180]
        ], {
          color: '#FF4466',
          fillColor: '#FF4466',
          fillOpacity: 0.05,
          weight: 0
        });
        app.addLayer(bleachBand);
        var bleachBand2 = L.polygon([
          [-25, -180], [-25, 180], [-30, 180], [-30, -180]
        ], {
          color: '#FF4466',
          fillColor: '#FF4466',
          fillOpacity: 0.05,
          weight: 0
        });
        app.addLayer(bleachBand2);

        // Info boxes
        adaptiveInfoBox(map, app, [-28, 155],
          '<b style="color:#FF6B6B">🐠 Great Barrier Reef</b><br>' +
          '• World\'s largest coral reef system<br>' +
          '• 2,900 individual reefs, 900 islands<br>' +
          '• 1,500 fish species, 400 coral species<br>' +
          '• UNESCO WHS since 1981<br>' +
          '• 5 mass bleaching events (2016-2024)<br>' +
          '• Threat: warming, acidification, runoff',
          Z
        );

        adaptiveInfoBox(map, app, [20, 60],
          '<b style="color:#FFD700">🇮🇳 India\'s Coral Reefs</b><br>' +
          '• 4 major reef areas:<br>' +
          '  1. Gulf of Kutch (northernmost in Indian Ocean)<br>' +
          '  2. Gulf of Mannar (1st Marine Biosphere)<br>' +
          '  3. Lakshadweep (only atolls in India)<br>' +
          '  4. Andaman & Nicobar (richest diversity)<br>' +
          '• Total: ~2% of world coral area<br>' +
          '• 208 coral species identified',
          Z
        );

        adaptiveInfoBox(map, app, [25, -100],
          '<b style="color:#FF4466">⚠️ Bleaching Threat</b><br>' +
          '• 1°C above max monthly mean → bleaching<br>' +
          '• 2°C above → mass mortality<br>' +
          '• 2016: worst global bleaching event<br>' +
          '• 14% of global reefs lost (2009-2018)<br>' +
          '• Ocean pH dropped 0.1 since pre-industrial',
          Z
        );

        app.showToast('MAP 091 — Coral Reef Distribution loaded', 'success');
      }
    },

    // ─────────────────────────────────────────────────────────
    // MAP 092 — Exclusive Economic Zones
    // ─────────────────────────────────────────────────────────
    {
      mapNum: 92,
      title: 'Exclusive Economic Zones (EEZ)',
      subtitle: 'UNCLOS 1982 — Maritime Zones & Disputes',
      mapConfig: { center: [15, 75], zoom: 3, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'EEZ Size',
          items: [
            { dot: '#00FF88', label: 'EEZ > 5 M km²' },
            { dot: '#F0A500', label: 'EEZ 2-5 M km²' },
            { dot: '#FF8C00', label: 'EEZ 1-2 M km²' },
            { dot: '#FF4466', label: 'EEZ Disputes' }
          ]
        },
        {
          sectionTitle: 'Maritime Zones',
          items: [
            { color: '#4488FF', label: 'Territorial Sea (12 nm)' },
            { color: '#6699FF', label: 'Contiguous Zone (24 nm)' },
            { color: '#88BBFF', label: 'EEZ (200 nm)' }
          ]
        }
      ],
      info: [
        {
          title: 'UNCLOS & EEZ — Key Facts',
          facts: [
            { label: 'UNCLOS', value: 'UN Convention on Law of the Sea, 1982' },
            { label: 'Enforcement', value: 'Came into force 16 Nov 1994' },
            { label: 'Parties', value: '168 parties (USA not ratified)' },
            { label: 'Territorial Sea', value: '12 nautical miles from baseline' },
            { label: 'Contiguous Zone', value: '24 nm — customs, immigration' },
            { label: 'EEZ', value: '200 nm — sovereign resource rights' },
            { label: 'Continental Shelf', value: 'Max 350 nm or 100 nm from 2500m isobath' },
            { label: 'High Seas', value: 'Beyond EEZ — common heritage of mankind' }
          ]
        },
        {
          title: 'UPSC Relevance — India\'s Maritime Domain',
          items: [
            'India ratified UNCLOS in 1995',
            'India\'s EEZ: 2.02 million km² (7,516 km coastline)',
            'Maritime Zones of India Act, 1976',
            'India\'s Extended Continental Shelf claim — CLCS (2009)',
            'Blue Economy: ~4% of India\'s GDP',
            'Sagarmala Programme: port-led development',
            'Indian Ocean Naval Symposium (IONS)',
            'SAGAR: Security And Growth for All in the Region',
            'Sir Creek dispute with Pakistan — affects EEZ',
            'Deep Ocean Mission: polymetallic nodules in CIOB (75,000 km²)'
          ]
        }
      ],
      render: function (map, app) {
        var Z = map.getZoom();

        // EEZ markers
        DATA.eezData.forEach(function (e) {
          var eezNum = parseFloat(e.eez);
          var dotColor;
          if (eezNum >= 5) dotColor = '#00FF88';
          else if (eezNum >= 2) dotColor = '#F0A500';
          else dotColor = '#FF8C00';

          var cm = L.circleMarker([e.lat, e.lng], {
            radius: Math.max(6, Math.min(eezNum * 1.2, 12)),
            color: '#000',
            fillColor: dotColor,
            fillOpacity: 0.9,
            weight: 2
          });
          cm.bindPopup(app.buildPopup(
            e.name + ' — EEZ',
            '<b>EEZ Area:</b> ' + e.eez + '<br>' +
            '<b>Coastline:</b> ' + e.coastline + '<br>' +
            '<b>Notes:</b> ' + e.note,
            ['EEZ', 'UNCLOS', e.name]
          ));
          cm.on('mouseover', function () { this.setStyle({ radius: 14, weight: 3 }); });
          cm.on('mouseout', function () { this.setStyle({ radius: Math.max(6, Math.min(eezNum * 1.2, 12)), weight: 2 }); });
          app.addLayer(cm);

          adaptiveLabel(map, app, [e.lat + 3, e.lng], e.name + ' (' + e.eez + ')',
            dotColor, Z, { basePx: 9 }
          );
        });

        // Disputes
        DATA.eezDisputes.forEach(function (d) {
          var cm = L.circleMarker([d.lat, d.lng], {
            radius: 8,
            color: '#FF4466',
            fillColor: '#FF4466',
            fillOpacity: 0.7,
            weight: 3,
            dashArray: '4,4'
          });
          cm.bindPopup(app.buildPopup(
            '⚠️ ' + d.name + ' — EEZ Dispute',
            '<b>Parties:</b> ' + d.parties + '<br>' +
            '<b>Details:</b> ' + d.note,
            ['Dispute', 'EEZ', 'Geopolitics']
          ));
          cm.on('mouseover', function () { this.setStyle({ radius: 12, weight: 4 }); });
          cm.on('mouseout', function () { this.setStyle({ radius: 8, weight: 3 }); });
          app.addLayer(cm);

          adaptiveLabel(map, app, [d.lat - 3, d.lng], '⚠️ ' + d.name, '#FF4466', Z, { bold: true, basePx: 9 });
        });

        // India EEZ schematic
        var indiaEEZSchematic = L.polygon([
          [24, 62], [22, 64], [18, 66], [14, 68], [10, 72], [8, 74],
          [6, 76], [6, 80], [8, 82], [10, 84], [14, 87], [18, 89],
          [21, 90], [22, 89], [21, 88], [18, 86], [15, 83], [12, 81],
          [9, 80], [8, 78], [9, 76], [12, 74], [15, 72], [18, 70],
          [21, 67], [24, 64]
        ], {
          color: '#F0A500',
          fillColor: '#F0A500',
          fillOpacity: 0.12,
          weight: 2,
          dashArray: '8,4'
        });
        indiaEEZSchematic.bindPopup(app.buildPopup(
          'India\'s Exclusive Economic Zone',
          '<b>Area:</b> 2.02 million km²<br>' +
          '<b>Coastline:</b> 7,516 km (9 states, 4 UTs)<br>' +
          '<b>Key features:</b><br>' +
          '• 13 major ports + 200+ minor ports<br>' +
          '• Bombay High oil field<br>' +
          '• Andaman & Nicobar strategic position<br>' +
          '• Lakshadweep EEZ contribution significant',
          ['India', 'EEZ', 'Maritime', 'UNCLOS']
        ));
        indiaEEZSchematic.on('mouseover', function () { this.setStyle({ fillOpacity: 0.3, weight: 3 }); });
        indiaEEZSchematic.on('mouseout', function () { this.setStyle({ fillOpacity: 0.12, weight: 2 }); });
        app.addLayer(indiaEEZSchematic);

        adaptiveLabel(map, app, [14, 72], 'INDIA EEZ', '#F0A500', Z, { bold: true, basePx: 12 });
        adaptiveLabel(map, app, [12, 72], '2.02 M km²', '#FFD700', Z, { basePx: 10 });

        // UNCLOS maritime zones diagram (info box)
        adaptiveInfoBox(map, app, [38, 130],
          '<b style="color:#F0A500">📜 UNCLOS Maritime Zones</b><br>' +
          '━━━━━━━━━━━━━━━━━<br>' +
          '<span style="color:#4488FF">■ Territorial Sea: 12 nm</span><br>' +
          '  → Full sovereignty<br>' +
          '<span style="color:#6699FF">■ Contiguous Zone: 24 nm</span><br>' +
          '  → Customs, immigration control<br>' +
          '<span style="color:#88BBFF">■ EEZ: 200 nm</span><br>' +
          '  → Resource sovereignty<br>' +
          '<span style="color:#AADDFF">■ Continental Shelf: max 350 nm</span><br>' +
          '  → Seabed resources',
          Z
        );

        adaptiveInfoBox(map, app, [-25, -60],
          '<b style="color:#FF4466">⚡ Key Dispute: South China Sea</b><br>' +
          '• $5.3 trillion annual trade<br>' +
          '• China\'s 9-dash line vs UNCLOS<br>' +
          '• PCA Ruling 2016: Rejected China claims<br>' +
          '• Overlapping claims: 6 nations<br>' +
          '• India\'s ONGC Videsh operates in Vietnam\'s blocks',
          Z
        );

        app.showToast('MAP 092 — Exclusive Economic Zones loaded', 'success');
      }
    },

    // ─────────────────────────────────────────────────────────
    // MAP 093 — Sea Level Change Map
    // ─────────────────────────────────────────────────────────
    {
      mapNum: 93,
      title: 'Sea Level Change Map',
      subtitle: 'Rising Coastlines, Sinking Cities & Vulnerable Islands',
      mapConfig: { center: [15, 80], zoom: 3, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Sea Level Rise',
          items: [
            { dot: '#FF0040', label: 'High Risk Coastline (>5 mm/yr)' },
            { dot: '#FF6644', label: 'Moderate Risk (3-5 mm/yr)' },
            { dot: '#FFD700', label: 'Vulnerable Islands' }
          ]
        },
        {
          sectionTitle: 'Sinking Cities',
          items: [
            { dot: '#FF4466', label: 'Subsidence + Sea Level Rise' },
            { dot: '#AABBDD', label: 'At-Risk Urban Areas' }
          ]
        }
      ],
      info: [
        {
          title: 'Sea Level Rise — Key Data',
          facts: [
            { label: 'Current Rate', value: '3.6 mm/yr (satellite era, accelerating)' },
            { label: 'Since 1900', value: '~20 cm total rise' },
            { label: 'IPCC 2100 Projection', value: '0.3-1.1m (depending on emissions)' },
            { label: 'Main Causes', value: 'Thermal expansion (42%), glaciers (21%), ice sheets (37%)' },
            { label: 'Greenland Melt', value: 'Would raise sea level by 7.2m if fully melted' },
            { label: 'Antarctica', value: 'Would raise sea level by 58m if fully melted' },
            { label: 'People at Risk', value: '~1 billion live <10m above sea level' }
          ]
        },
        {
          title: 'UPSC Relevance',
          items: [
            'IPCC AR6 (2021): sea level rise is "irreversible for centuries"',
            'Sundarbans: 4 islands lost since 2000, 10,000+ displaced',
            'India Coastal Regulation Zone (CRZ) Notification 2019',
            'ICZM — Integrated Coastal Zone Management programme',
            'Lakshadweep & Andaman particularly vulnerable',
            'Mumbai: 2.8 million people at risk by 2050 (C40 Cities)',
            'Chennai, Kolkata, Kochi in high-risk list',
            'Jakarta moving capital to Nusantara (Borneo) — subsidence',
            'Small Island Developing States (SIDS) — climate justice',
            'Alliance of Small Island States (AOSIS) — COP advocacy'
          ]
        }
      ],
      render: function (map, app) {
        var Z = map.getZoom();

        // Rising coastlines
        DATA.seaLevelData.risingCoasts.forEach(function (r) {
          var rate = parseFloat(r.rate);
          var dotColor = rate >= 5 ? '#FF0040' : rate >= 3 ? '#FF6644' : '#FFD700';
          var radius = Math.max(6, Math.min(rate * 2, 12));

          var cm = L.circleMarker([r.lat, r.lng], {
            radius: radius,
            color: '#000',
            fillColor: dotColor,
            fillOpacity: 0.9,
            weight: 2
          });
          cm.bindPopup(app.buildPopup(
            '🌊 ' + r.name,
            '<b>Sea Level Rise Rate:</b> ' + r.rate + '<br>' +
            '<b>Impact:</b> ' + r.note,
            ['Sea Level', 'Climate', 'Vulnerable']
          ));
          cm.on('mouseover', function () { this.setStyle({ radius: radius + 4, weight: 3 }); });
          cm.on('mouseout', function () { this.setStyle({ radius: radius, weight: 2 }); });
          app.addLayer(cm);

          adaptiveLabel(map, app, [r.lat + 3, r.lng], r.name, dotColor, Z, { basePx: 9 });
        });

        // Sinking cities
        DATA.seaLevelData.sinkingCities.forEach(function (c) {
          var cm = L.circleMarker([c.lat, c.lng], {
            radius: 7,
            color: '#FF4466',
            fillColor: '#FF4466',
            fillOpacity: 0.8,
            weight: 2,
            dashArray: '3,3'
          });
          cm.bindPopup(app.buildPopup(
            '🏙️ ' + c.name + ' — Sinking City',
            '<b>Subsidence/Rise Rate:</b> ' + c.rate + '<br>' +
            '<b>Details:</b> ' + c.note,
            ['Sinking City', 'Subsidence', 'Climate Risk']
          ));
          cm.on('mouseover', function () { this.setStyle({ radius: 11, weight: 3 }); });
          cm.on('mouseout', function () { this.setStyle({ radius: 7, weight: 2 }); });
          app.addLayer(cm);

          adaptiveLabel(map, app, [c.lat - 2.5, c.lng], c.name, '#FF4466', Z, { basePx: 8 });
        });

        // Sea level rise timeline info box
        adaptiveInfoBox(map, app, [-35, -70],
          '<b style="color:#FF0040">📈 Sea Level Rise Timeline</b><br>' +
          '• Last Ice Age (20,000 yrs ago): 120m lower<br>' +
          '• 1900-2018: ~20 cm rise<br>' +
          '• 1993-2018: 3.1 mm/yr (satellite data)<br>' +
          '• 2006-2018: 3.6 mm/yr (accelerating)<br>' +
          '• 2100 projection: +30 to 110 cm<br>' +
          '• 2°C warming: 2-6m rise over centuries',
          Z
        );

        adaptiveInfoBox(map, app, [30, 50],
          '<b style="color:#FFD700">🇮🇳 India — Sea Level Impact</b><br>' +
          '• Sundarbans losing islands yearly<br>' +
          '• Mumbai: 2.8M at risk (McKinsey 2020)<br>' +
          '• Lakshadweep avg 1-2m elevation<br>' +
          '• CRZ 2019: 500m restriction from HTL<br>' +
          '• INCOIS monitors Indian Ocean levels<br>' +
          '• National Adaptation Fund for Climate Change (NAFCC)',
          Z
        );

        adaptiveInfoBox(map, app, [-10, 160],
          '<b style="color:#FF6644">🏝️ Small Island States</b><br>' +
          '• Tuvalu: may need complete relocation<br>' +
          '• Kiribati: bought land in Fiji<br>' +
          '• Maldives: avg 1.5m above sea level<br>' +
          '• Marshall Islands: $1.1B adaptation need<br>' +
          '• AOSIS: 44 member states in COP negotiations<br>' +
          '• Loss & Damage Fund — COP27 breakthrough',
          Z
        );

        // Jakarta special marker
        var jakartaMarker = L.circleMarker([-6.2, 106.8], {
          radius: 10,
          color: '#FF0040',
          fillColor: '#FF0040',
          fillOpacity: 0.9,
          weight: 3
        });
        jakartaMarker.bindPopup(app.buildPopup(
          '🏙️ Jakarta — World\'s Fastest Sinking City',
          '<b>Subsidence Rate:</b> Up to 25 cm/year in northern areas<br>' +
          '<b>Cause:</b> Groundwater extraction + sea level rise<br>' +
          '<b>Solution:</b> New capital Nusantara (IKN) on Borneo<br>' +
          '<b>Population:</b> 10.5 million at risk<br>' +
          '<b>Giant Sea Wall:</b> $40 billion project proposed',
          ['Subsidence', 'Sinking', 'Indonesia', 'Climate']
        ));
        app.addLayer(jakartaMarker);
        adaptiveLabel(map, app, [-3, 107], 'Jakarta — 25cm/yr ↓', '#FF0040', Z, { bold: true, basePx: 10 });

        app.showToast('MAP 093 — Sea Level Change Map loaded', 'success');
      }
    },

    // ─────────────────────────────────────────────────────────
    // MAP 094 — Marine Protected Areas
    // ─────────────────────────────────────────────────────────
    {
      mapNum: 94,
      title: 'Marine Protected Areas (MPAs)',
      subtitle: 'World\'s Largest MPAs, India\'s Marine Reserves & Biodiversity Hotspots',
      mapConfig: { center: [10, 80], zoom: 3, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'MPA Size',
          items: [
            { dot: '#00FF88', label: 'Mega MPA (>500,000 km²)' },
            { dot: '#4ECDC4', label: 'Large MPA (100,000-500,000 km²)' },
            { dot: '#45B7D1', label: 'Medium MPA (10,000-100,000 km²)' }
          ]
        },
        {
          sectionTitle: 'India\'s MPAs',
          items: [
            { dot: '#FFD700', label: 'India Marine National Parks' },
            { dot: '#F0A500', label: 'India Marine Sanctuaries' }
          ]
        }
      ],
      info: [
        {
          title: 'MPAs — Key Facts',
          facts: [
            { label: 'Global MPA Coverage', value: '~8.16% of oceans (2023)' },
            { label: 'Target', value: '30% by 2030 (Kunming-Montreal GBF)' },
            { label: 'Largest MPA', value: 'Ross Sea — 1.55 M km² (CCAMLR 2016)' },
            { label: 'India MPAs', value: '31 Marine Protected Areas' },
            { label: 'India Marine NPs', value: '5 (Gulf of Kutch, Mannar, Wandoor, etc.)' },
            { label: 'MPA Definition', value: 'IUCN: area managed for long-term nature conservation' }
          ]
        },
        {
          title: 'UPSC Relevance',
          items: [
            'Kunming-Montreal Global Biodiversity Framework (COP15, 2022): 30x30 target',
            'India: Wildlife Protection Act 1972 — marine species protected',
            'Gulf of Mannar: India\'s first Marine Biosphere Reserve (1989)',
            'Gulf of Kutch MNP: India\'s first Marine National Park (1982)',
            'National Marine Turtle Action Plan (2021)',
            'BBNJ Treaty (2023): High Seas Treaty for biodiversity beyond national jurisdiction',
            'Marine Spatial Planning: balance conservation with fisheries & shipping',
            'IMO: Particularly Sensitive Sea Areas (PSSA)',
            'Coral Reef Recovery Plan — India\'s MoEFCC initiative',
            'Dugong Conservation Reserve — Gulf of Mannar & Palk Bay'
          ]
        }
      ],
      render: function (map, app) {
        var Z = map.getZoom();

        DATA.mpas.forEach(function (m) {
          var area = parseFloat(m.area.replace(/[^0-9.]/g, ''));
          var isIndia = m.country === 'India' || m.country === 'India-Bangladesh';
          var dotColor, radius;

          if (isIndia) {
            dotColor = '#FFD700';
            radius = 7;
          } else if (area >= 500000) {
            dotColor = '#00FF88';
            radius = 10;
          } else if (area >= 100000) {
            dotColor = '#4ECDC4';
            radius = 8;
          } else {
            dotColor = '#45B7D1';
            radius = 6;
          }

          var cm = L.circleMarker([m.lat, m.lng], {
            radius: radius,
            color: isIndia ? '#F0A500' : '#000',
            fillColor: dotColor,
            fillOpacity: 0.9,
            weight: isIndia ? 3 : 2
          });

          // Larger circle for mega MPAs
          if (area >= 500000) {
            var radiusCircle = L.circle([m.lat, m.lng], {
              radius: Math.sqrt(area) * 400,
              color: dotColor,
              fillColor: dotColor,
              fillOpacity: 0.08,
              weight: 1,
              dashArray: '6,4'
            });
            radiusCircle.on('mouseover', function () { this.setStyle({ fillOpacity: 0.2, weight: 2 }); });
            radiusCircle.on('mouseout', function () { this.setStyle({ fillOpacity: 0.08, weight: 1 }); });
            app.addLayer(radiusCircle);
          }

          cm.bindPopup(app.buildPopup(
            '🛡️ ' + m.name,
            '<b>Area:</b> ' + m.area + '<br>' +
            '<b>Country:</b> ' + m.country + '<br>' +
            '<b>Notes:</b> ' + m.note,
            ['MPA', isIndia ? 'India' : 'World', 'Conservation']
          ));
          cm.on('mouseover', function () { this.setStyle({ radius: radius + 4, weight: 3 }); });
          cm.on('mouseout', function () { this.setStyle({ radius: radius, weight: isIndia ? 3 : 2 }); });
          app.addLayer(cm);

          adaptiveLabel(map, app, [m.lat + (isIndia ? 1.5 : 3), m.lng], m.name,
            dotColor, Z, { basePx: isIndia ? 9 : 8 }
          );
        });

        // 30x30 target explanation
        adaptiveInfoBox(map, app, [-40, -140],
          '<b style="color:#00FF88">🎯 30x30 Target</b><br>' +
          '• Kunming-Montreal GBF (COP15, 2022)<br>' +
          '• Protect 30% of oceans by 2030<br>' +
          '• Current: ~8.16% protected<br>' +
          '• Need to protect additional 22% (~80M km²)<br>' +
          '• BBNJ Treaty 2023: enables high seas MPAs<br>' +
          '• India committed to enhanced marine conservation',
          Z
        );

        adaptiveInfoBox(map, app, [25, 55],
          '<b style="color:#FFD700">🇮🇳 India\'s Marine Conservation</b><br>' +
          '• 31 MPAs covering ~10,000 km²<br>' +
          '• 5 Marine National Parks<br>' +
          '• 106 Marine Sanctuaries under WPA 1972<br>' +
          '• National Marine Turtle Action Plan 2021<br>' +
          '• Coastal Regulation Zone (CRZ) 2019<br>' +
          '• ICZM — World Bank funded<br>' +
          '• Deep Ocean Mission (2021) — ₹4,077 crore',
          Z
        );

        adaptiveInfoBox(map, app, [-60, 130],
          '<b style="color:#4ECDC4">🧊 Ross Sea MPA</b><br>' +
          '• World\'s largest MPA (1.55 M km²)<br>' +
          '• Established 2016 by CCAMLR<br>' +
          '• 72% no-take zone<br>' +
          '• Protects Antarctic marine ecosystem<br>' +
          '• Emperor penguins, Weddell seals, orcas<br>' +
          '• 35 year duration (expires 2051)',
          Z
        );

        // India zoom detail — connect MPAs
        var indiaCoastline = L.polyline([
          [23.5, 68.5], [22.5, 69.5], [21, 72], [19, 72.8], [17, 73.3],
          [16, 73.4], [15, 74], [14, 74.5], [12, 75], [10, 76],
          [8.5, 77], [8, 77.5], [8.5, 78.5], [9, 79], [10, 80],
          [11, 80], [12, 80.2], [13, 80.3], [14, 80.2], [16, 81],
          [17, 82.5], [18, 83.5], [19.5, 85], [20, 86.5], [21, 87],
          [21.5, 88], [22, 89]
        ], {
          color: '#8899BB',
          weight: 1.5,
          opacity: 0.5,
          dashArray: '4,4'
        });
        app.addLayer(indiaCoastline);

        app.showToast('MAP 094 — Marine Protected Areas loaded', 'success');
      }
    }
  ];

  // ═══════════════════════════════════════════════════════════
  // REGISTER MAPS
  // ═══════════════════════════════════════════════════════════

  window.registerMaps('oceanography', MAPS);
  console.log('oceanography-maps.js registered ' + MAPS.length + ' maps (085-094)');

})();
