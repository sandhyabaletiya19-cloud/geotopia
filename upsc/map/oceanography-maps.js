// ============================================================
// oceanography-maps.js — MAP 085-094
// DharaVerse UPSC Maps — Oceanography Series
// Uses ONLY: app.addLayer(), app.labelMarker(), 
//            app.buildPopup(), app.circleMarker(),
//            app.infoBox(), app.showToast()
// ============================================================

(function () {
  'use strict';

  // ══════════════════════════════════════════════════════════
  // MASTER DATA
  // ══════════════════════════════════════════════════════════

  var DATA = {

    oceans: [
      { name: 'Pacific Ocean',  lat: 5,   lng: -160, area: '165.25 M km²', depth: 'Avg 4,280m', deepest: 'Mariana Trench 11,034m', pct: '46.6%', color: '#1E90FF' },
      { name: 'Atlantic Ocean', lat: 10,  lng: -30,  area: '106.46 M km²', depth: 'Avg 3,646m', deepest: 'Puerto Rico Trench 8,376m', pct: '23.5%', color: '#4169E1' },
      { name: 'Indian Ocean',   lat: -20, lng: 80,   area: '70.56 M km²',  depth: 'Avg 3,741m', deepest: 'Java Trench 7,725m', pct: '19.5%', color: '#6495ED' },
      { name: 'Southern Ocean', lat: -65, lng: 0,    area: '21.96 M km²',  depth: 'Avg 3,270m', deepest: 'S. Sandwich Trench 7,235m', pct: '6.1%', color: '#87CEEB' },
      { name: 'Arctic Ocean',   lat: 82,  lng: 0,    area: '14.06 M km²',  depth: 'Avg 1,205m', deepest: 'Molloy Deep 5,607m', pct: '4.3%', color: '#B0E0E6' }
    ],

    majorSeas: [
      { name: 'Arabian Sea',      lat: 15,  lng: 65,   area: '3.86 M km²' },
      { name: 'Bay of Bengal',    lat: 14,  lng: 88,   area: '2.17 M km²' },
      { name: 'South China Sea',  lat: 12,  lng: 114,  area: '3.5 M km²'  },
      { name: 'Caribbean Sea',    lat: 15,  lng: -75,  area: '2.75 M km²' },
      { name: 'Mediterranean',    lat: 35,  lng: 18,   area: '2.5 M km²'  },
      { name: 'Bering Sea',       lat: 57,  lng: -175, area: '2.3 M km²'  },
      { name: 'Red Sea',          lat: 20,  lng: 38,   area: '0.44 M km²' },
      { name: 'Persian Gulf',     lat: 27,  lng: 51,   area: '0.25 M km²' },
      { name: 'Coral Sea',        lat: -18, lng: 155,  area: '4.79 M km²' },
      { name: 'Sea of Japan',     lat: 40,  lng: 135,  area: '0.98 M km²' }
    ],

    trenches: [
      { name: 'Mariana Trench',        lat: 11.3,  lng: 142.2,  depth: 11034, ocean: 'Pacific',  note: 'Deepest point: Challenger Deep. Explored by Piccard & Walsh (1960), James Cameron (2012).' },
      { name: 'Tonga Trench',          lat: -23,   lng: -174,   depth: 10882, ocean: 'Pacific',  note: 'Second deepest. Horizon Deep.' },
      { name: 'Philippine Trench',     lat: 10,    lng: 127,    depth: 10540, ocean: 'Pacific',  note: 'Also called Mindanao Trench. Galathea Deep.' },
      { name: 'Kuril-Kamchatka',       lat: 46,    lng: 157,    depth: 10542, ocean: 'Pacific',  note: 'Part of Pacific Ring of Fire.' },
      { name: 'Japan Trench',          lat: 36,    lng: 143,    depth: 8412,  ocean: 'Pacific',  note: '2011 Tohoku earthquake (9.1 Mw) source zone.' },
      { name: 'Puerto Rico Trench',    lat: 19.7,  lng: -66,    depth: 8376,  ocean: 'Atlantic', note: 'Deepest in Atlantic Ocean. Milwaukee Deep.' },
      { name: 'Peru-Chile Trench',     lat: -20,   lng: -71,    depth: 8065,  ocean: 'Pacific',  note: 'Also Atacama Trench. Nazca Plate subduction.' },
      { name: 'Java/Sunda Trench',     lat: -10,   lng: 108,    depth: 7725,  ocean: 'Indian',   note: 'Deepest in Indian Ocean. 2004 tsunami origin zone.' },
      { name: 'S. Sandwich Trench',    lat: -57,   lng: -25,    depth: 8265,  ocean: 'Southern', note: 'Deepest in Southern Ocean region.' },
      { name: 'Aleutian Trench',       lat: 51,    lng: -177,   depth: 7679,  ocean: 'Pacific',  note: 'Pacific Plate subducting under North American Plate.' },
      { name: 'Kermadec Trench',       lat: -32,   lng: -177,   depth: 10047, ocean: 'Pacific',  note: 'Connected to Tonga Trench system.' }
    ],

    ridges: [
      {
        name: 'Mid-Atlantic Ridge',
        color: '#FF6347',
        length: '16,000 km',
        coords: [
          [70,-15],[65,-17],[60,-25],[55,-32],[45,-28],
          [35,-35],[25,-44],[15,-45],[5,-38],[0,-14],
          [-10,-13],[-20,-12],[-30,-14],[-40,-16],[-55,-1]
        ],
        note: 'Longest mountain range on Earth. Iceland sits atop it. Divergent boundary.'
      },
      {
        name: 'East Pacific Rise',
        color: '#FF4500',
        length: '9,000 km',
        coords: [
          [30,-113],[20,-109],[10,-104],[0,-102],
          [-10,-110],[-20,-113],[-35,-111],[-50,-118]
        ],
        note: 'Fastest spreading ridge (15 cm/yr). Pacific & Nazca plate divergence.'
      },
      {
        name: 'Central Indian Ridge',
        color: '#FF8C00',
        length: '3,000 km',
        coords: [
          [10,57],[5,60],[0,63],[-5,66],[-10,68],[-20,64],[-25,60]
        ],
        note: 'Separates African and Indo-Australian plates.'
      },
      {
        name: 'SE Indian Ridge',
        color: '#FFA500',
        length: '6,000 km',
        coords: [
          [-25,60],[-30,70],[-35,80],[-40,90],[-45,100],[-48,130]
        ],
        note: 'Between Indo-Australian and Antarctic plates.'
      },
      {
        name: 'SW Indian Ridge',
        color: '#DAA520',
        length: '7,700 km',
        coords: [
          [-25,60],[-30,50],[-35,40],[-40,30],[-45,20],[-52,0]
        ],
        note: 'Slowest spreading ridge. African and Antarctic plates.'
      }
    ],

    ridgePoints: [
      { name: 'Iceland',         lat: 64.5, lng: -18.5, note: 'Only place Mid-Atlantic Ridge is above sea level.' },
      { name: 'Afar Triple Jn.', lat: 11.5, lng: 42,    note: 'Red Sea, Gulf of Aden, E. African Rift meeting point.' },
      { name: 'Galápagos Rift',  lat: 0,    lng: -86,   note: 'First hydrothermal vents discovered 1977. Chemosynthesis discovery.' },
      { name: 'Azores',          lat: 38.7, lng: -27.2, note: 'Volcanic islands on Mid-Atlantic Ridge.' }
    ],

    currents: [
      // WARM
      { name: 'Gulf Stream',           coords: [[25,-80],[32,-75],[38,-70],[43,-55],[50,-30]], color: '#FF4444', type: 'warm', note: 'Speed 2.5 m/s. Warms W. Europe. Discovered by Benjamin Franklin.' },
      { name: 'N. Atlantic Drift',     coords: [[50,-30],[55,-18],[60,-8],[65,0]],            color: '#FF6666', type: 'warm', note: 'Extension of Gulf Stream. Keeps Norway ice-free.' },
      { name: 'N. Equatorial (Atl)',   coords: [[15,-18],[15,-35],[15,-55],[15,-70]],         color: '#FF8888', type: 'warm', note: 'NE trade wind driven.' },
      { name: 'Brazil Current',        coords: [[-5,-35],[-15,-37],[-25,-43]],               color: '#FF6644', type: 'warm', note: 'Warm current along Brazil coast.' },
      { name: 'Kuroshio Current',      coords: [[20,125],[28,132],[35,140],[42,148]],         color: '#FF4444', type: 'warm', note: 'Japan Current. Pacific equivalent of Gulf Stream.' },
      { name: 'N. Pacific Current',    coords: [[42,150],[43,165],[43,-175],[44,-155]],       color: '#FF8866', type: 'warm', note: 'Extension of Kuroshio. West Wind Drift.' },
      { name: 'E. Australian Current', coords: [[-15,155],[-22,155],[-30,153]],              color: '#FF6644', type: 'warm', note: 'Warm current. Weakening due to climate change.' },
      { name: 'Agulhas Current',       coords: [[-27,33],[-30,30],[-34,27],[-38,22]],        color: '#FF4444', type: 'warm', note: 'Strongest W. boundary current. S. Indian Ocean.' },
      { name: 'SW Monsoon Current',    coords: [[5,55],[8,65],[10,72],[10,80]],              color: '#FF8800', type: 'warm', note: 'Jun-Sep. Unique seasonal reversal in Indian Ocean.' },
      // COLD
      { name: 'Labrador Current',      coords: [[65,-60],[58,-55],[50,-52],[42,-50]],         color: '#4488FF', type: 'cold', note: 'Carries icebergs south. Grand Banks fog & fishing.' },
      { name: 'Canary Current',        coords: [[45,-15],[38,-17],[30,-18],[20,-18]],         color: '#4488FF', type: 'cold', note: 'Cold current NW Africa. Upwelling zone.' },
      { name: 'Benguela Current',      coords: [[-35,15],[-28,13],[-20,12],[-15,12]],        color: '#2266FF', type: 'cold', note: 'Cold upwelling. Rich fishing off Namibia & S. Africa.' },
      { name: 'California Current',    coords: [[48,-125],[40,-124],[32,-120],[24,-115]],     color: '#4488FF', type: 'cold', note: 'Cold current. Coastal fog in San Francisco.' },
      { name: 'Oyashio Current',       coords: [[55,155],[50,152],[45,150],[40,147]],         color: '#2266FF', type: 'cold', note: 'Cold current off Kamchatka & Japan. Rich nutrients.' },
      { name: 'Peru/Humboldt',         coords: [[-50,-76],[-40,-74],[-30,-72],[-18,-76]],    color: '#2266FF', type: 'cold', note: "World's most productive current. El Niño disruption." },
      { name: 'W. Australian Current', coords: [[-35,115],[-28,113],[-20,112]],              color: '#4488FF', type: 'cold', note: 'Weak cold current off W. Australia.' },
      { name: 'Antarctic Circumpolar', coords: [[-58,-60],[-56,0],[-55,60],[-55,120],[-56,180],[-58,-120],[-58,-60]], color: '#00BFFF', type: 'cold', note: 'Largest ocean current (130 Sv). Connects all oceans.' }
    ],

    gyres: [
      { name: 'North Atlantic Gyre',  lat: 30,  lng: -40,  color: '#FF6347', rot: 'Clockwise' },
      { name: 'South Atlantic Gyre',  lat: -25, lng: -15,  color: '#FF8C00', rot: 'Anti-clockwise' },
      { name: 'North Pacific Gyre',   lat: 30,  lng: -170, color: '#FFD700', rot: 'Clockwise' },
      { name: 'South Pacific Gyre',   lat: -30, lng: -130, color: '#00CED1', rot: 'Anti-clockwise' },
      { name: 'Indian Ocean Gyre',    lat: -20, lng: 75,   color: '#9370DB', rot: 'Anti-clockwise' }
    ],

    thermoclinePoints: [
      { name: 'NADW Formation',    lat: 67,  lng: -25, note: 'North Atlantic Deep Water. Cold salty water sinks near Greenland. Main driver of thermohaline circulation.' },
      { name: 'AABW Formation',    lat: -72, lng: -30, note: 'Antarctic Bottom Water. Densest water mass. Forms in Weddell Sea. Flows along ocean floor worldwide.' },
      { name: 'Pacific Upwelling', lat: -10, lng: -100, note: 'Deep cold water rises. Nutrients brought to surface. Supports fisheries.' },
      { name: 'Indian Upwelling',  lat: -10, lng: 60,  note: 'Deep water returns to surface in Indian Ocean.' }
    ],

    coralReefs: [
      { name: 'Great Barrier Reef',  lat: -18,  lng: 147,   area: '344,400 km²', type: 'Barrier', country: 'Australia',  note: "World's largest. 2,900 reefs. UNESCO WHS. Severe bleaching 2016-2024." },
      { name: 'Mesoamerican Reef',   lat: 17,   lng: -87,   area: '1,000 km',    type: 'Barrier', country: 'Mexico/Belize', note: '2nd largest barrier reef.' },
      { name: 'Red Sea Reef',        lat: 22,   lng: 37,    area: '4,250 km',    type: 'Fringing', country: 'Egypt/Saudi', note: 'Most heat-resistant corals. Climate refugia potential.' },
      { name: 'Coral Triangle',      lat: -2,   lng: 128,   area: '5.7 M km²',   type: 'Region',  country: 'Indo-Pacific', note: '76% of all reef-building coral species. Amazon of the Seas.' },
      { name: 'Andaman Reef',        lat: 11,   lng: 92.5,  area: '600 km²',     type: 'Fringing', country: 'India',      note: "India's richest coral. 200+ coral species." },
      { name: 'Gulf of Kutch Reef',  lat: 22.5, lng: 69.5,  area: '460 km²',     type: 'Platform', country: 'India',     note: 'Northernmost reef in Indian Ocean. Marine NP 1982.' },
      { name: 'Lakshadweep Reef',    lat: 10.5, lng: 72.5,  area: '4,200 km²',   type: 'Atoll',   country: 'India',      note: 'Only atoll system in India. 36 islands, 12 atolls.' },
      { name: 'Gulf of Mannar',      lat: 9,    lng: 79,    area: '630 km²',     type: 'Fringing', country: 'India',     note: 'Biosphere Reserve. 117 coral species. Pearl fishing.' },
      { name: 'Raja Ampat',          lat: -1,   lng: 130,   area: '40,000 km²',  type: 'Fringing', country: 'Indonesia', note: 'Highest marine biodiversity on Earth.' },
      { name: 'Maldives Reef',       lat: 4,    lng: 73,    area: '21,000 km²',  type: 'Atoll',   country: 'Maldives',  note: '26 atolls. Most vulnerable to sea level rise.' }
    ],

    eezData: [
      { name: 'USA',       lat: 30,  lng: -120, eez: '11.35 M km²', note: 'Largest EEZ. Includes Pacific territories.' },
      { name: 'France',    lat: 20,  lng: -50,  eez: '11.04 M km²', note: '2nd largest due to overseas territories.' },
      { name: 'Australia', lat: -25, lng: 140,  eez: '8.15 M km²',  note: '3rd largest EEZ.' },
      { name: 'Russia',    lat: 62,  lng: 110,  eez: '7.57 M km²',  note: 'Longest coastline nation.' },
      { name: 'India',     lat: 12,  lng: 75,   eez: '2.02 M km²',  note: 'UNCLOS ratified 1995. 9 coastal states, 4 UTs. Sagarmala Programme.' },
      { name: 'Indonesia', lat: -2,  lng: 118,  eez: '6.16 M km²',  note: 'Largest archipelagic state.' },
      { name: 'Canada',    lat: 55,  lng: -100, eez: '5.6 M km²',   note: 'Longest coastline.' },
      { name: 'Japan',     lat: 35,  lng: 140,  eez: '4.48 M km²',  note: 'Okinotorishima controversy.' },
      { name: 'Brazil',    lat: -15, lng: -38,  eez: '3.66 M km²',  note: 'Blue Amazon concept.' },
      { name: 'China',     lat: 30,  lng: 122,  eez: '0.88 M km²',  note: 'Nine-dash line claims exceed UNCLOS EEZ.' }
    ],

    seaLevelRising: [
      { name: 'Sundarbans, India', lat: 22,   lng: 89,    rate: '3.14 mm/yr', note: '4 islands lost since 2000. 10,000+ displaced.' },
      { name: 'Maldives',         lat: 4,    lng: 73,    rate: '3.5 mm/yr',  note: 'Avg height 1.5m above sea level. May be uninhabitable by 2100.' },
      { name: 'Tuvalu',           lat: -8,   lng: 179,   rate: '3.9 mm/yr',  note: 'Signed Australia deal for climate refuge.' },
      { name: 'Kiribati',         lat: 1.4,  lng: 173,   rate: '4 mm/yr',    note: 'Purchased land in Fiji as contingency.' },
      { name: 'Bangladesh Coast', lat: 22,   lng: 91,    rate: '5 mm/yr',    note: '17% land may submerge by 2050. 20M displaced.' },
      { name: 'Lakshadweep',      lat: 10,   lng: 72,    rate: '1.75 mm/yr', note: 'Avg elevation 1-2m. Very vulnerable.' },
      { name: 'Jakarta',          lat: -6.2, lng: 106.8, rate: '25 cm/yr',   note: 'Fastest sinking city (subsidence). Moving capital to Nusantara.' },
      { name: 'Mumbai',           lat: 19,   lng: 72.8,  rate: '3.7 mm/yr',  note: '2.8M at risk by 2050.' },
      { name: 'Chennai',          lat: 13,   lng: 80.3,  rate: '0.3 mm/yr',  note: 'Increasing coastal erosion.' },
      { name: 'Kolkata',          lat: 22.5, lng: 88.4,  rate: '3.5 mm/yr',  note: 'Subsidence + sea level rise.' }
    ],

    mpas: [
      { name: 'Ross Sea MPA',             lat: -75,  lng: 175,   area: '1,550,000 km²', country: 'CCAMLR',     note: "World's largest MPA. Est. 2016. Protects Antarctic ecosystem." },
      { name: 'Papahānaumokuākea',        lat: 25,   lng: -170,  area: '1,510,000 km²', country: 'USA',        note: 'NW Hawaiian Islands. UNESCO WHS. Obama expanded 2016.' },
      { name: 'Natural Park Coral Sea',   lat: -20,  lng: 162,   area: '1,300,000 km²', country: 'France/NC',  note: '3rd largest MPA globally.' },
      { name: 'Chagos/BIOT',             lat: -6,   lng: 71,    area: '640,000 km²',   country: 'UK',         note: "World's largest no-take reserve. Sovereignty dispute (ICJ 2019)." },
      { name: 'Great Barrier Reef MP',    lat: -18,  lng: 147,   area: '344,400 km²',   country: 'Australia',  note: 'UNESCO WHS. Multi-use zoning. Bleaching crisis.' },
      { name: 'Galápagos Reserve',        lat: -1,   lng: -90,   area: '133,000 km²',   country: 'Ecuador',    note: 'UNESCO WHS. Unique marine life.' },
      { name: 'Gulf of Mannar MNP',       lat: 9,    lng: 79,    area: '560 km²',       country: 'India',      note: "India's first Marine NP (1980). 21 islands. Dugong habitat." },
      { name: 'Gulf of Kutch MNP',        lat: 22.5, lng: 69.5,  area: '458 km²',       country: 'India',      note: 'Est. 1982. 42 islands. Northernmost reef in India.' },
      { name: 'Mahatma Gandhi MNP',       lat: 11.5, lng: 92.5,  area: '281.5 km²',     country: 'India',      note: 'Wandoor, Andaman. Coral reefs.' },
      { name: 'Sundarbans Biosphere',     lat: 21.9, lng: 89,    area: '9,630 km²',     country: 'India-BD',   note: 'UNESCO WHS. Largest mangrove. Royal Bengal Tiger.' }
    ]
  };

  // ══════════════════════════════════════════════════════════
  // MAPS ARRAY
  // ══════════════════════════════════════════════════════════

  var MAPS = [

    // ──────────────────────────────────────────────────────
    // MAP 085 — World Ocean Map
    // ──────────────────────────────────────────────────────
    {
      mapNum: 85,
      title: 'World Ocean Map',
      subtitle: 'All 5 Oceans, Major Seas & Key Facts',
      mapConfig: { center: [20, 0], zoom: 2, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'The 5 Oceans',
          items: [
            { dot: '#1E90FF', label: 'Pacific Ocean — 46.6%' },
            { dot: '#4169E1', label: 'Atlantic Ocean — 23.5%' },
            { dot: '#6495ED', label: 'Indian Ocean — 19.5%' },
            { dot: '#87CEEB', label: 'Southern Ocean — 6.1%' },
            { dot: '#B0E0E6', label: 'Arctic Ocean — 4.3%' },
            { dot: '#FFD700', label: 'Major Seas' }
          ]
        }
      ],
      info: [
        {
          title: 'World Oceans — Key Facts',
          facts: [
            { label: 'Total Ocean Area',  value: '361.9 M km² (71% of Earth)' },
            { label: 'Largest Ocean',     value: 'Pacific — 165.25 M km²' },
            { label: 'Smallest Ocean',    value: 'Arctic — 14.06 M km²' },
            { label: 'Average Depth',     value: '3,688 meters' },
            { label: 'Deepest Point',     value: 'Mariana Trench — 11,034m' },
            { label: 'Saltiest Ocean',    value: 'Atlantic (35.5 ppt avg)' }
          ]
        },
        {
          title: 'UPSC Key Points',
          items: [
            'UNCLOS 1982 — Law of the Sea Convention',
            'EEZ = 200 nautical miles from baseline',
            'India EEZ = 2.02 million km²',
            'Blue Economy — India Vision 2030',
            'Samudrayaan — India deep ocean mission (6000m)',
            'Indian Ocean Dipole (IOD) affects Indian monsoon',
            'Thermohaline circulation — global conveyor belt',
            'ISA — International Seabed Authority (deep sea mining)'
          ]
        }
      ],
      render: function (map, app) {

        // Ocean circles
        DATA.oceans.forEach(function (o) {
          var circle = L.circle([o.lat, o.lng], {
            radius: 2500000,
            color: o.color,
            fillColor: o.color,
            fillOpacity: 0.10,
            weight: 1.5,
            dashArray: '8,6'
          });
          circle.bindPopup(app.buildPopup(
            o.name,
            '<b>Area:</b> ' + o.area + '<br>' +
            '<b>Avg Depth:</b> ' + o.depth + '<br>' +
            '<b>Deepest:</b> ' + o.deepest + '<br>' +
            '<b>% of World Ocean:</b> ' + o.pct,
            ['Ocean']
          ));
          circle.on('mouseover', function () { this.setStyle({ fillOpacity: 0.22, weight: 2 }); });
          circle.on('mouseout', function () { this.setStyle({ fillOpacity: 0.10, weight: 1.5 }); });
          app.addLayer(circle);
          app.labelMarker([o.lat, o.lng], o.name, o.color, '13px');
          app.labelMarker([o.lat - 6, o.lng], o.area, '#AACCFF', '10px');
        });

        // Major seas
        DATA.majorSeas.forEach(function (s) {
          var cm = L.circleMarker([s.lat, s.lng], {
            radius: 5,
            color: '#000',
            fillColor: '#FFD700',
            fillOpacity: 0.9,
            weight: 1.5
          });
          cm.bindPopup(app.buildPopup(s.name, '<b>Area:</b> ' + s.area, ['Sea']));
          cm.on('mouseover', function () { this.setStyle({ radius: 8 }); });
          cm.on('mouseout', function () { this.setStyle({ radius: 5 }); });
          app.addLayer(cm);
          app.labelMarker([s.lat + 2, s.lng], s.name, '#FFD700', '9px');
        });

        // Info boxes
        app.infoBox([55, -140],
          '<b style="color:#1E90FF">Pacific Ocean</b><br>' +
          '• Largest — 30% of Earth surface<br>' +
          '• Contains Mariana Trench (11,034m)<br>' +
          '• Ring of Fire — 75% world volcanoes<br>' +
          '• Named by Magellan 1521'
        );

        app.infoBox([-30, 30],
          '<b style="color:#6495ED">Indian Ocean</b><br>' +
          '• 3rd largest ocean<br>' +
          '• Monsoon current reversal — unique<br>' +
          '• India EEZ: 2.02 M km²<br>' +
          '• 40% world offshore oil through here'
        );

        app.showToast('MAP 085 — World Ocean Map loaded', 'success');
      }
    },

    // ──────────────────────────────────────────────────────
    // MAP 086 — Ocean Depth / Bathymetry
    // ──────────────────────────────────────────────────────
    {
      mapNum: 86,
      title: 'Ocean Depth Map (Bathymetry)',
      subtitle: 'Continental Shelf → Slope → Abyssal Plain → Trench → Ridge',
      mapConfig: { center: [15, 10], zoom: 2, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Depth Zones',
          items: [
            { color: '#90EE90', label: 'Continental Shelf (0–200m)' },
            { color: '#3CB371', label: 'Continental Slope (200–4,000m)' },
            { color: '#1E3A5F', label: 'Abyssal Plain (4,000–6,000m)' },
            { color: '#05050F', label: 'Oceanic Trench (>6,000m)' },
            { color: '#FF6347', label: 'Mid-Ocean Ridge' }
          ]
        }
      ],
      info: [
        {
          title: 'Bathymetric Zones',
          facts: [
            { label: 'Continental Shelf', value: '0–200m | 8% ocean floor | Richest zone' },
            { label: 'Continental Slope', value: '200–4,000m | Submarine canyons' },
            { label: 'Abyssal Plain',     value: '4,000–6,000m | 50% of ocean floor' },
            { label: 'Hadal Zone',        value: '>6,000m | Only in trenches' },
            { label: 'Mid-Ocean Ridge',   value: '~65,000 km total worldwide' },
            { label: 'India W. Shelf',    value: 'Up to 340 km wide off Gujarat' }
          ]
        },
        {
          title: 'UPSC Key Points',
          items: [
            'Continental shelf — fishing, oil, mineral resources',
            'UNCLOS continental shelf max 350 nm from baseline',
            'India Extended Continental Shelf claim — CLCS 2009',
            'Submarine canyons: Hudson, Congo, Indus',
            'Turbidity currents — sediment transport mechanism',
            'Polymetallic nodules on abyssal plains (Mn, Ni, Co, Cu)',
            'India allocated 75,000 km² in Central Indian Ocean Basin',
            'Seamounts — biodiversity hotspots, fishing grounds'
          ]
        }
      ],
      render: function (map, app) {

        // Continental shelf regions
        var shelfRegions = [
          { name: 'Grand Banks', lat: 46, lng: -52 },
          { name: 'Sunda Shelf', lat: 2, lng: 110 },
          { name: 'India W. Shelf', lat: 18, lng: 70 },
          { name: 'North Sea', lat: 56, lng: 3 },
          { name: 'Sahul Shelf', lat: -12, lng: 132 }
        ];

        shelfRegions.forEach(function (s) {
          var cm = L.circleMarker([s.lat, s.lng], {
            radius: 7,
            color: '#000',
            fillColor: '#90EE90',
            fillOpacity: 0.9,
            weight: 2
          });
          cm.bindPopup(app.buildPopup(
            s.name + ' — Continental Shelf',
            'Rich fishing grounds. Oil & gas potential. 0–200m depth.',
            ['Shelf', 'Bathymetry']
          ));
          cm.on('mouseover', function () { this.setStyle({ radius: 10 }); });
          cm.on('mouseout', function () { this.setStyle({ radius: 7 }); });
          app.addLayer(cm);
          app.labelMarker([s.lat + 3, s.lng], s.name, '#90EE90', '9px');
        });

        // India western shelf polygon
        var indiaShelf = L.polygon([
          [23,67],[20,68],[17,72],[14,73],[10,75],[8,77],
          [8,78],[10,76],[14,74],[17,73],[20,69],[23,68]
        ], {
          color: '#90EE90', fillColor: '#90EE90',
          fillOpacity: 0.2, weight: 2, dashArray: '5,4'
        });
        indiaShelf.bindPopup(app.buildPopup(
          'India Western Continental Shelf',
          '<b>Width:</b> Up to 340 km off Gujarat<br>' +
          '<b>Features:</b> Bombay High oil field, Mumbai Offshore Basin<br>' +
          '<b>Resources:</b> Oil, gas, fish',
          ['India', 'Shelf']
        ));
        indiaShelf.on('mouseover', function () { this.setStyle({ fillOpacity: 0.4, weight: 3 }); });
        indiaShelf.on('mouseout', function () { this.setStyle({ fillOpacity: 0.2, weight: 2 }); });
        app.addLayer(indiaShelf);
        app.labelMarker([18, 69.5], 'India W. Shelf', '#90EE90', '10px');

        // Mid Atlantic Ridge line
        var ridgeLine = L.polyline(
          [[60,-25],[45,-28],[20,-45],[0,-14],[-30,-14],[-52,0]],
          { color: '#FF6347', weight: 3, opacity: 0.85 }
        );
        ridgeLine.bindPopup(app.buildPopup(
          'Mid-Atlantic Ridge',
          'Longest mountain range on Earth (16,000 km). Divergent plate boundary. Seafloor spreading.',
          ['Ridge', 'Tectonics']
        ));
        app.addLayer(ridgeLine);
        app.labelMarker([35, -35], 'Mid-Atlantic Ridge', '#FF6347', '10px');

        // Trench markers (sample 3)
        var sampleTrenches = [
          { name: 'Mariana 11,034m', lat: 11.3, lng: 142.2 },
          { name: 'Puerto Rico 8,376m', lat: 19.7, lng: -66 },
          { name: 'Java 7,725m', lat: -10, lng: 108 }
        ];
        sampleTrenches.forEach(function (t) {
          var cm = L.circleMarker([t.lat, t.lng], {
            radius: 6, color: '#000', fillColor: '#050515', fillOpacity: 1, weight: 2
          });
          cm.bindPopup(app.buildPopup(t.name, 'Oceanic trench — deepest zone (>6000m)', ['Trench']));
          app.addLayer(cm);
          app.labelMarker([t.lat - 3, t.lng], t.name, '#AABBDD', '8px');
        });

        // Info boxes
        app.infoBox([60, -170],
          '<b style="color:#F0A500">Bathymetry Zones</b><br>' +
          '• Shelf: 0–200m — 90% fish catch<br>' +
          '• Slope: 200–4,000m<br>' +
          '• Abyssal: 4,000–6,000m<br>' +
          '• Trench: >6,000m (Hadal zone)<br>' +
          '• Ridge: 2,000–3,000m'
        );

        app.infoBox([-30, -130],
          '<b style="color:#F0A500">India Deep Ocean Mission</b><br>' +
          '• Samudrayaan — ₹4,077 crore<br>' +
          '• Manned submersible Matsya 6000<br>' +
          '• Target depth: 6,000m<br>' +
          '• CIOB: 75,000 km² allocated<br>' +
          '• Polymetallic nodules: Mn, Ni, Co, Cu'
        );

        app.showToast('MAP 086 — Bathymetry Map loaded', 'success');
      }
    },

    // ──────────────────────────────────────────────────────
    // MAP 087 — Major Ocean Trenches
    // ──────────────────────────────────────────────────────
    {
      mapNum: 87,
      title: 'Major Ocean Trenches Map',
      subtitle: 'Deepest Points on Earth — Subduction Zones',
      mapConfig: { center: [10, 150], zoom: 3, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Trench Depth',
          items: [
            { dot: '#FF0040', label: '> 10,000m' },
            { dot: '#FF4466', label: '8,000–10,000m' },
            { dot: '#FF6688', label: '6,000–8,000m' },
            { line: '#FF4466', label: 'Ring of Fire' }
          ]
        }
      ],
      info: [
        {
          title: 'Ocean Trenches — Key Facts',
          facts: [
            { label: 'Deepest',         value: 'Mariana — 11,034m (Challenger Deep)' },
            { label: 'Longest',         value: 'Peru-Chile — 5,900 km' },
            { label: 'Formation',       value: 'Convergent plate boundaries (subduction)' },
            { label: 'Hadal Zone',      value: 'Depth >6,000m — named after Hades' },
            { label: 'First Human Dive', value: 'Piccard & Walsh — 1960 (Trieste)' },
            { label: 'Solo Dive',       value: 'James Cameron — 2012 (Deepsea Challenger)' }
          ]
        },
        {
          title: 'UPSC Key Points',
          items: [
            'Trenches form at convergent plate boundaries',
            'Benioff Zone — inclined seismic zone at subduction',
            'Island arcs parallel to trenches (Japan, Mariana)',
            '2004 Indian Ocean tsunami — Java Trench subduction',
            '2011 Tohoku earthquake — Japan Trench (9.1 Mw)',
            'Ring of Fire — 75% volcanoes, 90% earthquakes',
            'Accretionary wedge — sediments on subducting plate',
            'Barren Island — India only active volcano (Andaman)'
          ]
        }
      ],
      render: function (map, app) {

        // Ring of Fire
        var ringCoords = [
          [-45,-75],[-25,-72],[-5,-80],[10,-85],[20,-105],
          [35,-120],[50,-130],[58,-165],[55,165],[50,155],
          [45,150],[38,142],[30,135],[20,125],[10,127],
          [0,125],[-10,120],[-20,118],[-35,175],[-45,-178]
        ];
        var ring = L.polyline(ringCoords, {
          color: '#FF4466', weight: 2, opacity: 0.5, dashArray: '10,6'
        });
        ring.bindPopup(app.buildPopup(
          'Ring of Fire',
          'Circum-Pacific Belt — 40,000 km<br>75% world volcanoes<br>90% world earthquakes',
          ['Tectonic', 'Seismic']
        ));
        app.addLayer(ring);
        app.labelMarker([55, 145], 'Ring of Fire', '#FF4466', '11px');

        // Trenches
        DATA.trenches.forEach(function (t) {
          var col;
          if (t.depth > 10000) col = '#FF0040';
          else if (t.depth > 8000) col = '#FF4466';
          else col = '#FF6688';

          var radius = t.depth > 10000 ? 10 : t.depth > 8000 ? 8 : 6;

          var cm = L.circleMarker([t.lat, t.lng], {
            radius: radius,
            color: '#000',
            fillColor: col,
            fillOpacity: 0.9,
            weight: 2
          });
          cm.bindPopup(app.buildPopup(
            t.name,
            '<b>Depth:</b> ' + t.depth.toLocaleString() + 'm<br>' +
            '<b>Ocean:</b> ' + t.ocean + '<br>' +
            t.note,
            ['Trench', t.ocean]
          ));
          cm.on('mouseover', function () { this.setStyle({ radius: radius + 4, weight: 3 }); });
          cm.on('mouseout', function () { this.setStyle({ radius: radius, weight: 2 }); });
          app.addLayer(cm);
          app.labelMarker([t.lat + 2.5, t.lng], t.name, col, '10px');
          app.labelMarker([t.lat - 1.5, t.lng], t.depth.toLocaleString() + 'm', '#CCDDFF', '9px');
        });

        // Info box
        app.infoBox([-30, -140],
          '<b style="color:#FF0040">Depth Comparison</b><br>' +
          '• Mariana: 11,034m deep<br>' +
          '• Mt Everest: 8,849m tall<br>' +
          '• If Everest placed in Mariana:<br>' +
          '  2,185m still submerged!<br>' +
          '• Pressure at bottom: 1,086 atm'
        );

        app.infoBox([50, 100],
          '<b style="color:#FFD700">India & Trenches</b><br>' +
          '• Java/Sunda Trench nearest (7,725m)<br>' +
          '• 2004 tsunami: Indo-Australian plate<br>' +
          '  subducted under Burma plate<br>' +
          '• Andaman arc — volcanic island arc<br>' +
          '• Barren Island — India only active volcano'
        );

        app.showToast('MAP 087 — Ocean Trenches loaded', 'success');
      }
    },

    // ──────────────────────────────────────────────────────
    // MAP 088 — Mid-Ocean Ridges
    // ──────────────────────────────────────────────────────
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
            { dot: '#00FF88', label: 'Key Points / Triple Junctions' }
          ]
        }
      ],
      info: [
        {
          title: 'Mid-Ocean Ridges — Key Facts',
          facts: [
            { label: 'Total Length',      value: '~65,000 km worldwide' },
            { label: 'Longest',           value: 'Mid-Atlantic Ridge — 16,000 km' },
            { label: 'Fastest Spreading', value: 'East Pacific Rise — 15 cm/yr' },
            { label: 'Slowest Spreading', value: 'SW Indian Ridge — 1.5 cm/yr' },
            { label: 'Theory',            value: 'Harry Hess — Seafloor Spreading (1962)' },
            { label: 'Evidence',          value: 'Vine-Matthews-Morley — magnetic stripes' }
          ]
        },
        {
          title: 'UPSC Key Points',
          items: [
            "Wegener's Continental Drift (1912) → Hess's Seafloor Spreading (1962)",
            'Paleomagnetism — alternating magnetic bands prove spreading',
            'Transform faults — perpendicular to ridges',
            'Iceland — Mid-Atlantic Ridge above sea level',
            'Hydrothermal vents discovered Galápagos 1977',
            'Black smokers — 350°C mineral-rich jets',
            'Chemosynthesis — life without sunlight at vents',
            'Afar Triangle — active rifting visible on land today'
          ]
        }
      ],
      render: function (map, app) {

        // Ridges
        DATA.ridges.forEach(function (r) {
          var line = L.polyline(r.coords, {
            color: r.color, weight: 3.5, opacity: 0.9
          });
          line.bindPopup(app.buildPopup(
            r.name,
            '<b>Length:</b> ' + r.length + '<br>' + r.note,
            ['Ridge', 'Divergent']
          ));
          line.on('mouseover', function () { this.setStyle({ weight: 6, opacity: 1 }); });
          line.on('mouseout', function () { this.setStyle({ weight: 3.5, opacity: 0.9 }); });
          app.addLayer(line);

          var mid = Math.floor(r.coords.length / 2);
          app.labelMarker(
            [r.coords[mid][0] + 4, r.coords[mid][1]],
            r.name, r.color, '10px'
          );
        });

        // Key points
        DATA.ridgePoints.forEach(function (p) {
          var cm = L.circleMarker([p.lat, p.lng], {
            radius: 7, color: '#000',
            fillColor: '#00FF88', fillOpacity: 0.9, weight: 2
          });
          cm.bindPopup(app.buildPopup(p.name, p.note, ['Ridge Point']));
          cm.on('mouseover', function () { this.setStyle({ radius: 10 }); });
          cm.on('mouseout', function () { this.setStyle({ radius: 7 }); });
          app.addLayer(cm);
          app.labelMarker([p.lat + 3, p.lng], p.name, '#00FF88', '10px');
        });

        // Info boxes
        app.infoBox([72, 30],
          '<b style="color:#00FF88">Iceland</b><br>' +
          '• Only exposed Mid-Atlantic Ridge<br>' +
          '• Thingvellir — visible rift valley<br>' +
          '• Plates diverge 2.5 cm/yr<br>' +
          '• Geothermal energy capital'
        );

        app.infoBox([-15, -85],
          '<b style="color:#00FF88">Hydrothermal Vents</b><br>' +
          '• First found: Galápagos 1977<br>' +
          '• Black smokers: 350°C<br>' +
          '• Chemosynthesis — no sunlight needed<br>' +
          '• Giant tube worms, vent shrimp'
        );

        app.showToast('MAP 088 — Mid-Ocean Ridges loaded', 'success');
      }
    },

    // ──────────────────────────────────────────────────────
    // MAP 089 — Ocean Currents
    // ──────────────────────────────────────────────────────
    {
      mapNum: 89,
      title: 'Ocean Currents — Detailed World Map',
      subtitle: '5 Major Gyres, Warm & Cold Currents, Directions',
      mapConfig: { center: [15, 0], zoom: 2, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Current Type',
          items: [
            { line: '#FF4444', label: 'Warm Current' },
            { line: '#4488FF', label: 'Cold Current' }
          ]
        },
        {
          sectionTitle: 'Gyres',
          items: [
            { dot: '#FF6347', label: 'N. Atlantic Gyre (Clockwise)' },
            { dot: '#FF8C00', label: 'S. Atlantic Gyre (Anti-CW)' },
            { dot: '#FFD700', label: 'N. Pacific Gyre (Clockwise)' },
            { dot: '#00CED1', label: 'S. Pacific Gyre (Anti-CW)' },
            { dot: '#9370DB', label: 'Indian Ocean Gyre (Anti-CW)' }
          ]
        }
      ],
      info: [
        {
          title: 'Ocean Currents — Key Facts',
          facts: [
            { label: 'Fastest Current',     value: 'Gulf Stream — 2.5 m/s' },
            { label: 'Largest Current',      value: 'Antarctic Circumpolar — 130 Sv' },
            { label: 'Most Productive',      value: 'Humboldt/Peru (upwelling)' },
            { label: 'NH Gyres Rotate',      value: 'Clockwise (Coriolis effect)' },
            { label: 'SH Gyres Rotate',      value: 'Anti-clockwise' },
            { label: 'Driving Forces',       value: 'Wind, Coriolis, thermohaline, density' }
          ]
        },
        {
          title: 'UPSC Key Concepts',
          items: [
            'Coriolis: deflects currents right (NH), left (SH)',
            'Ekman Spiral: wind-driven flow at angle to wind',
            'W. Boundary Currents: Gulf Stream, Kuroshio (warm, fast)',
            'E. Boundary Currents: California, Canary (cold, slow)',
            'Upwelling: cold nutrient-rich water rises → fishing',
            'El Niño: weakened trades → warm water shifts E. Pacific',
            'La Niña: stronger trades → cold upwelling intensified',
            'Indian Ocean Dipole (IOD) affects SW monsoon',
            'Grand Banks: Labrador + Gulf Stream → fog & rich fishing',
            'Somali Current reverses direction seasonally'
          ]
        }
      ],
      render: function (map, app) {

        // Gyres as dashed circles
        DATA.gyres.forEach(function (g) {
          var circle = L.circle([g.lat, g.lng], {
            radius: 1800000,
            color: g.color,
            fillColor: g.color,
            fillOpacity: 0.06,
            weight: 1.5,
            dashArray: '8,8'
          });
          circle.bindPopup(app.buildPopup(
            g.name,
            '<b>Rotation:</b> ' + g.rot + '<br>Subtropical gyre driven by trade winds & westerlies.',
            ['Gyre']
          ));
          app.addLayer(circle);
          app.labelMarker([g.lat, g.lng], g.name, g.color, '10px');
          app.labelMarker([g.lat - 5, g.lng], g.rot, '#888', '9px');
        });

        // Current lines
        DATA.currents.forEach(function (cur) {
          var line = L.polyline(cur.coords, {
            color: cur.color, weight: 2.5, opacity: 0.85
          });
          line.bindPopup(app.buildPopup(
            cur.name + ' (' + (cur.type === 'warm' ? 'WARM' : 'COLD') + ')',
            cur.note,
            [cur.type === 'warm' ? 'Warm' : 'Cold', 'Current']
          ));
          line.on('mouseover', function () { this.setStyle({ weight: 5, opacity: 1 }); });
          line.on('mouseout', function () { this.setStyle({ weight: 2.5, opacity: 0.85 }); });
          app.addLayer(line);

          // Arrow at end of current
          var last = cur.coords[cur.coords.length - 1];
          var arrowIcon = L.divIcon({
            className: '',
            html: '<div style="color:' + cur.color + ';font-size:14px;line-height:1;text-shadow:0 0 4px #000">▶</div>',
            iconSize: [14, 14],
            iconAnchor: [7, 7]
          });
          app.addLayer(L.marker(last, { icon: arrowIcon, interactive: false }));

          // Label at midpoint
          var mid = Math.floor(cur.coords.length / 2);
          app.labelMarker(
            [cur.coords[mid][0] + 2, cur.coords[mid][1]],
            cur.name, cur.color, '9px'
          );
        });

        // Info boxes
        app.infoBox([55, -90],
          '<b style="color:#FF4444">Gulf Stream</b><br>' +
          '• Discovered by Benjamin Franklin<br>' +
          '• Transports 30 Sv (million m³/s)<br>' +
          '• Warms W. Europe by 5–10°C<br>' +
          '• AMOC slowdown = climate risk'
        );

        app.infoBox([-40, -100],
          '<b style="color:#4488FF">Humboldt Current</b><br>' +
          '• 18–20% of global fish catch<br>' +
          '• El Niño disrupts → collapse<br>' +
          '• Cold upwelling: nutrients<br>' +
          '• Atacama Desert aridity'
        );

        app.infoBox([5, 50],
          '<b style="color:#FF8800">Indian Ocean — Unique</b><br>' +
          '• Only ocean with reversing currents<br>' +
          '• SW Monsoon Current: Jun–Sep<br>' +
          '• NE Monsoon Current: Nov–Feb<br>' +
          '• Somali Current reverses seasonally'
        );

        app.showToast('MAP 089 — Ocean Currents loaded', 'success');
      }
    },

    // ──────────────────────────────────────────────────────
    // MAP 090 — Thermohaline Circulation
    // ──────────────────────────────────────────────────────
    {
      mapNum: 90,
      title: 'Thermohaline Circulation',
      subtitle: 'Global Ocean Conveyor Belt — NADW, AABW & Climate Risk',
      mapConfig: { center: [10, -20], zoom: 2, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Flow',
          items: [
            { line: '#FF4444', label: 'Surface Warm Flow' },
            { line: '#2266FF', label: 'Deep Cold Flow (bottom)' },
            { dot: '#00FF88', label: 'Deep Water Formation' },
            { dot: '#FFD700', label: 'Upwelling Zone' }
          ]
        }
      ],
      info: [
        {
          title: 'Thermohaline — Key Facts',
          facts: [
            { label: 'Also called',   value: 'Global Ocean Conveyor Belt' },
            { label: 'Cycle Time',    value: '~1,000 years for complete circuit' },
            { label: 'NADW',          value: 'North Atlantic Deep Water — main driver' },
            { label: 'AABW',          value: 'Antarctic Bottom Water — densest water mass' },
            { label: 'AMOC',          value: 'Atlantic Meridional Overturning Circulation' },
            { label: 'Risk',          value: 'Greenland meltwater weakening AMOC (IPCC AR6)' }
          ]
        },
        {
          title: 'UPSC Key Points',
          items: [
            'Thermohaline = thermo (temperature) + haline (salinity)',
            'Dense cold salty water sinks near Greenland → drives flow',
            'AMOC slowdown — Greenland ice melting threat',
            'Heinrich Events — past AMOC shutdowns (rapid cooling)',
            'Younger Dryas — 12,800 years ago AMOC shutdown',
            'IPCC AR6: AMOC collapse unlikely but catastrophic',
            'Carries heat from tropics to poles — climate regulation',
            'CO₂ absorption: deep water stores carbon for centuries'
          ]
        }
      ],
      render: function (map, app) {

        // Surface warm flow
        var warmCoords = [
          [45,-50],[35,-55],[25,-65],[15,-75],[5,-80],
          [0,-45],[-5,-35],[0,-5],[10,5],[15,30],
          [10,42],[5,50],[0,60],[-5,70],[-10,80],
          [0,105],[10,115],[5,130],[-10,140]
        ];
        var warmLine = L.polyline(warmCoords, {
          color: '#FF4444', weight: 4, opacity: 0.85, dashArray: '12,6'
        });
        warmLine.bindPopup(app.buildPopup(
          'Surface Warm Current',
          'Carries warm water from tropics towards poles.<br>Avg depth: 0-500m. Temperature: 10-25°C.',
          ['Warm', 'Surface', 'Thermohaline']
        ));
        warmLine.on('mouseover', function () { this.setStyle({ weight: 7 }); });
        warmLine.on('mouseout', function () { this.setStyle({ weight: 4 }); });
        app.addLayer(warmLine);

        // Deep cold flow
        var coldCoords = [
          [65,-20],[55,-35],[45,-50],[35,-50],[25,-45],
          [15,-35],[5,-25],[-5,-15],[-15,-5],[-25,5],
          [-35,15],[-45,30],[-55,40],[-65,50],[-65,70],
          [-55,100],[-45,110],[-35,120],[-20,130],[-10,140]
        ];
        var coldLine = L.polyline(coldCoords, {
          color: '#2266FF', weight: 4, opacity: 0.85, dashArray: '4,8'
        });
        coldLine.bindPopup(app.buildPopup(
          'Deep Cold Current',
          'Dense cold salty water flows along ocean floor.<br>Depth: 2,000-4,000m. Temperature: 1-4°C.',
          ['Cold', 'Deep', 'Thermohaline']
        ));
        coldLine.on('mouseover', function () { this.setStyle({ weight: 7 }); });
        coldLine.on('mouseout', function () { this.setStyle({ weight: 4 }); });
        app.addLayer(coldLine);

        app.labelMarker([30, -55], '← Surface Warm Current →', '#FF6666', '11px');
        app.labelMarker([20, -45], '← Deep Cold Current →', '#6688FF', '10px');

        // Formation points
        DATA.thermoclinePoints.forEach(function (fp) {
          var isFormation = fp.name.indexOf('Formation') > -1;
          var cm = L.circleMarker([fp.lat, fp.lng], {
            radius: 9, color: '#000',
            fillColor: isFormation ? '#00FF88' : '#FFD700',
            fillOpacity: 0.9, weight: 2
          });
          cm.bindPopup(app.buildPopup(fp.name, fp.note, ['Thermohaline']));
          cm.on('mouseover', function () { this.setStyle({ radius: 13 }); });
          cm.on('mouseout', function () { this.setStyle({ radius: 9 }); });
          app.addLayer(cm);
          app.labelMarker([fp.lat + 4, fp.lng], fp.name,
            isFormation ? '#00FF88' : '#FFD700', '10px');
        });

        // Info boxes
        app.infoBox([75, -50],
          '<b style="color:#00FF88">NADW Formation</b><br>' +
          '• Near Greenland & Iceland<br>' +
          '• Cold salty water sinks<br>' +
          '• Gulf Stream brings warm salty water N<br>' +
          '• Main engine of conveyor belt'
        );

        app.infoBox([-55, -60],
          '<b style="color:#2266FF">AABW Formation</b><br>' +
          '• Weddell Sea near Antarctica<br>' +
          '• Densest water mass (-0.8°C)<br>' +
          '• Flows along very bottom of all oceans'
        );

        app.infoBox([40, 90],
          '<b style="color:#FF4466">Climate Risk</b><br>' +
          '• AMOC weakened 15% since 1950<br>' +
          '• Greenland melt dilutes salinity<br>' +
          '• Less sinking → weakened circulation<br>' +
          '• Could cool Europe 5-10°C rapidly<br>' +
          '• IPCC AR6: Low likelihood, high impact'
        );

        app.showToast('MAP 090 — Thermohaline Circulation loaded', 'success');
      }
    },

    // ──────────────────────────────────────────────────────
    // MAP 091 — Coral Reef Distribution
    // ──────────────────────────────────────────────────────
    {
      mapNum: 91,
      title: 'World Coral Reef Distribution',
      subtitle: 'Major Reef Systems, Coral Triangle & Bleaching Threats',
      mapConfig: { center: [5, 120], zoom: 3, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Reef Types',
          items: [
            { dot: '#FF6B6B', label: 'Barrier Reef' },
            { dot: '#4ECDC4', label: 'Fringing Reef' },
            { dot: '#45B7D1', label: 'Atoll' },
            { dot: '#FFD700', label: 'India Reef Areas' },
            { color: '#FF634740', label: 'Coral Triangle Zone' }
          ]
        }
      ],
      info: [
        {
          title: 'Coral Reefs — Key Facts',
          facts: [
            { label: 'Total Area',         value: '~284,300 km² worldwide' },
            { label: 'Biodiversity',        value: '25% of all marine species' },
            { label: 'Largest',            value: 'Great Barrier Reef — 344,400 km²' },
            { label: 'Optimal Temp',       value: '20–28°C (tropical)' },
            { label: 'Bleaching Trigger',  value: '1°C above monthly mean' },
            { label: 'India Reef Types',   value: '4 areas: Kutch, Mannar, Lakshadweep, Andaman' }
          ]
        },
        {
          title: 'UPSC Key Points',
          items: [
            'Coral bleaching: expulsion of zooxanthellae due to heat stress',
            'Great Barrier Reef: bleaching 2016, 2017, 2020, 2022',
            'Darwin Theory: fringing → barrier → atoll (subsidence)',
            'Coral Triangle — Amazon of the Seas (6 nations)',
            'Lakshadweep: only atoll system in India',
            'Gulf of Mannar: India first Marine Biosphere Reserve (1989)',
            'Gulf of Kutch MNP: India first Marine NP (1982)',
            'Ocean acidification: CO₂ → carbonic acid → dissolves coral',
            'ICRI — International Coral Reef Initiative (India member)',
            'Paris Agreement 1.5°C target crucial for coral survival'
          ]
        }
      ],
      render: function (map, app) {

        // Coral Triangle region
        var ctPoly = L.polygon([
          [20,115],[20,135],[5,140],[-2,142],[-10,145],
          [-12,140],[-10,125],[-5,118],[0,110],[5,110],[15,115],[20,115]
        ], {
          color: '#FF6347', fillColor: '#FF6347',
          fillOpacity: 0.10, weight: 2, dashArray: '8,4'
        });
        ctPoly.bindPopup(app.buildPopup(
          'Coral Triangle',
          '<b>Area:</b> 5.7 M km²<br>' +
          '<b>Countries:</b> Indonesia, Malaysia, Philippines, PNG, Solomon Is, Timor-Leste<br>' +
          '• 76% of all reef-building coral species<br>' +
          '• 37% of reef fish species<br>' +
          '• CT6 Initiative (2009)',
          ['Coral Triangle', 'Biodiversity']
        ));
        ctPoly.on('mouseover', function () { this.setStyle({ fillOpacity: 0.25, weight: 3 }); });
        ctPoly.on('mouseout', function () { this.setStyle({ fillOpacity: 0.10, weight: 2 }); });
        app.addLayer(ctPoly);
        app.labelMarker([-3, 127], 'CORAL TRIANGLE', '#FF6347', '12px');

        // Reef markers
        DATA.coralReefs.forEach(function (r) {
          var typeColor;
          if (r.type === 'Barrier') typeColor = '#FF6B6B';
          else if (r.type === 'Fringing') typeColor = '#4ECDC4';
          else if (r.type === 'Atoll') typeColor = '#45B7D1';
          else typeColor = '#FF6347';

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
            r.note,
            [r.type, 'Coral', isIndia ? 'India' : 'World']
          ));
          cm.on('mouseover', function () { this.setStyle({ radius: isIndia ? 12 : 9 }); });
          cm.on('mouseout', function () { this.setStyle({ radius: isIndia ? 8 : 6 }); });
          app.addLayer(cm);
          app.labelMarker([r.lat + 2.5, r.lng], r.name,
            isIndia ? '#FFD700' : typeColor, isIndia ? '10px' : '9px');
        });

        // Info boxes
        app.infoBox([-30, 155],
          '<b style="color:#FF6B6B">Great Barrier Reef</b><br>' +
          '• 2,900 individual reefs, 900 islands<br>' +
          '• 1,500 fish, 400 coral species<br>' +
          '• UNESCO WHS since 1981<br>' +
          '• 5 mass bleaching events 2016–2024'
        );

        app.infoBox([18, 62],
          '<b style="color:#FFD700">India Coral Reefs</b><br>' +
          '• Gulf of Kutch — northernmost in Indian Ocean<br>' +
          '• Gulf of Mannar — 1st Marine Biosphere Reserve<br>' +
          '• Lakshadweep — only atolls in India<br>' +
          '• Andaman — richest coral diversity<br>' +
          '• 208 coral species identified'
        );

        app.showToast('MAP 091 — Coral Reefs loaded', 'success');
      }
    },

    // ──────────────────────────────────────────────────────
    // MAP 092 — Exclusive Economic Zones
    // ──────────────────────────────────────────────────────
    {
      mapNum: 92,
      title: 'Exclusive Economic Zones (EEZ)',
      subtitle: 'UNCLOS 1982 — Maritime Sovereignty & Disputes',
      mapConfig: { center: [15, 75], zoom: 3, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'EEZ Size',
          items: [
            { dot: '#00FF88', label: 'EEZ > 5 M km²' },
            { dot: '#F0A500', label: 'EEZ 2–5 M km²' },
            { dot: '#FF8C00', label: 'EEZ < 2 M km²' },
            { dot: '#FF4466', label: 'Disputed EEZ' }
          ]
        }
      ],
      info: [
        {
          title: 'UNCLOS Maritime Zones',
          facts: [
            { label: 'UNCLOS',              value: 'UN Convention on Law of Sea, 1982' },
            { label: 'Came into Force',     value: '16 November 1994' },
            { label: 'Territorial Sea',     value: '12 nautical miles — full sovereignty' },
            { label: 'Contiguous Zone',     value: '24 nm — customs, immigration' },
            { label: 'EEZ',                 value: '200 nm — sovereign resource rights' },
            { label: 'Continental Shelf',   value: 'Max 350 nm or 100 nm from 2500m isobath' },
            { label: 'India EEZ',           value: '2.02 M km² | UNCLOS ratified 1995' },
            { label: 'India Coastline',     value: '7,516 km — 9 states, 4 UTs' }
          ]
        },
        {
          title: 'UPSC Key Points',
          items: [
            'Maritime Zones of India Act, 1976',
            'India Extended Continental Shelf claim — CLCS 2009',
            'Blue Economy: ~4% of India GDP',
            'Sagarmala Programme: port-led development',
            'SAGAR: Security And Growth for All in the Region',
            'Indian Ocean Naval Symposium (IONS)',
            'Sir Creek dispute with Pakistan — affects EEZ',
            'South China Sea: PCA Ruling 2016 rejected China 9-dash line',
            'ONGC Videsh operates in Vietnam EEZ blocks',
            'Deep Ocean Mission: ₹4,077 crore for CIOB nodules'
          ]
        }
      ],
      render: function (map, app) {

        // EEZ markers
        DATA.eezData.forEach(function (e) {
          var eezVal = parseFloat(e.eez);
          var dotColor = eezVal >= 5 ? '#00FF88' : eezVal >= 2 ? '#F0A500' : '#FF8C00';
          var radius = Math.max(6, Math.min(eezVal * 1.2, 12));

          var isIndia = e.name === 'India';
          if (isIndia) { dotColor = '#F0A500'; radius = 10; }

          var cm = L.circleMarker([e.lat, e.lng], {
            radius: radius, color: '#000',
            fillColor: dotColor, fillOpacity: 0.9, weight: 2
          });
          cm.bindPopup(app.buildPopup(
            e.name + ' — EEZ',
            '<b>EEZ Area:</b> ' + e.eez + '<br>' + e.note,
            ['EEZ', 'UNCLOS']
          ));
          cm.on('mouseover', function () { this.setStyle({ radius: radius + 4, weight: 3 }); });
          cm.on('mouseout', function () { this.setStyle({ radius: radius, weight: 2 }); });
          app.addLayer(cm);
          app.labelMarker([e.lat + 3, e.lng],
            e.name + ' ' + e.eez, dotColor, isIndia ? '10px' : '9px');
        });

        // India EEZ schematic outline
        var indiaEEZ = L.polygon([
          [24,62],[22,64],[18,66],[14,68],[10,72],[8,74],
          [6,76],[6,80],[8,82],[10,84],[14,87],[18,89],
          [21,90],[22,89],[18,86],[15,83],[12,81],[9,80],
          [8,78],[9,76],[12,74],[15,72],[18,70],[21,67],[24,64]
        ], {
          color: '#F0A500', fillColor: '#F0A500',
          fillOpacity: 0.10, weight: 2, dashArray: '8,4'
        });
        indiaEEZ.bindPopup(app.buildPopup(
          "India's Exclusive Economic Zone",
          '<b>Area:</b> 2.02 million km²<br>' +
          '<b>Coastline:</b> 7,516 km<br>' +
          '• 13 major ports + 200+ minor ports<br>' +
          '• Bombay High oil field<br>' +
          '• Andaman strategic position',
          ['India', 'EEZ', 'Maritime']
        ));
        indiaEEZ.on('mouseover', function () { this.setStyle({ fillOpacity: 0.25, weight: 3 }); });
        indiaEEZ.on('mouseout', function () { this.setStyle({ fillOpacity: 0.10, weight: 2 }); });
        app.addLayer(indiaEEZ);

        // Dispute markers
        var disputes = [
          { name: 'S. China Sea Dispute', lat: 12,   lng: 114,  note: 'China 9-dash line rejected by PCA 2016. $5.3T trade.' },
          { name: 'Sir Creek Dispute',    lat: 23.5, lng: 68.5, note: 'India vs Pakistan. 96 km marshy creek. Affects maritime boundary.' },
          { name: 'Arctic EEZ Dispute',   lat: 85,   lng: 0,    note: 'Russia, Canada, USA, Norway, Denmark. Lomonosov Ridge.' }
        ];
        disputes.forEach(function (d) {
          var cm = L.circleMarker([d.lat, d.lng], {
            radius: 8, color: '#FF4466',
            fillColor: '#FF4466', fillOpacity: 0.8, weight: 2
          });
          cm.bindPopup(app.buildPopup('⚠️ ' + d.name, d.note, ['Dispute', 'EEZ']));
          cm.on('mouseover', function () { this.setStyle({ radius: 12 }); });
          cm.on('mouseout', function () { this.setStyle({ radius: 8 }); });
          app.addLayer(cm);
          app.labelMarker([d.lat - 3, d.lng], '⚠️ ' + d.name, '#FF4466', '9px');
        });

        // UNCLOS zones diagram
        app.infoBox([40, 130],
          '<b style="color:#F0A500">UNCLOS Maritime Zones</b><br>' +
          '• Territorial Sea: 12 nm (full sovereignty)<br>' +
          '• Contiguous Zone: 24 nm<br>' +
          '• EEZ: 200 nm (resource rights)<br>' +
          '• Continental Shelf: max 350 nm<br>' +
          '• High Seas: beyond EEZ (common heritage)'
        );

        app.showToast('MAP 092 — EEZ Map loaded', 'success');
      }
    },

    // ──────────────────────────────────────────────────────
    // MAP 093 — Sea Level Change
    // ──────────────────────────────────────────────────────
    {
      mapNum: 93,
      title: 'Sea Level Change Map',
      subtitle: 'Rising Coastlines, Sinking Cities & Vulnerable Islands',
      mapConfig: { center: [15, 80], zoom: 3, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Risk Level',
          items: [
            { dot: '#FF0040', label: 'Critical Risk (>5 mm/yr)' },
            { dot: '#FF6644', label: 'High Risk (3–5 mm/yr)' },
            { dot: '#FFD700', label: 'Moderate Risk (1–3 mm/yr)' },
            { dot: '#FF4466', label: 'Sinking Cities (subsidence)' }
          ]
        }
      ],
      info: [
        {
          title: 'Sea Level Rise — Key Data',
          facts: [
            { label: 'Current Rate',    value: '3.6 mm/yr (satellite era, accelerating)' },
            { label: 'Since 1900',      value: '~20 cm total rise' },
            { label: '2100 Projection', value: '0.3–1.1m (IPCC AR6)' },
            { label: 'Main Causes',     value: 'Thermal expansion, glaciers, ice sheets' },
            { label: 'Greenland Melt',  value: 'Would raise 7.2m if fully melted' },
            { label: 'Antarctica',      value: 'Would raise 58m if fully melted' }
          ]
        },
        {
          title: 'UPSC Key Points',
          items: [
            'IPCC AR6 (2021): rise is irreversible for centuries',
            'CRZ Notification 2019 — Coastal Regulation Zone',
            'ICZM — Integrated Coastal Zone Management',
            'Sundarbans: 4 islands lost, 10,000+ displaced',
            'Mumbai: 2.8 million at risk by 2050 (C40 Cities)',
            'Jakarta moving capital to Nusantara — subsidence',
            'AOSIS — Alliance of Small Island States (COP)',
            'Loss & Damage Fund — COP27 breakthrough 2022',
            'INCOIS — monitors Indian Ocean sea levels',
            'NAFCC — National Adaptation Fund for Climate Change'
          ]
        }
      ],
      render: function (map, app) {

        DATA.seaLevelRising.forEach(function (r) {
          var rate = parseFloat(r.rate);
          var dotColor, radius;

          if (r.name === 'Jakarta') {
            dotColor = '#FF4466'; radius = 10;
          } else if (rate >= 5) {
            dotColor = '#FF0040'; radius = 8;
          } else if (rate >= 3) {
            dotColor = '#FF6644'; radius = 7;
          } else {
            dotColor = '#FFD700'; radius = 6;
          }

          var cm = L.circleMarker([r.lat, r.lng], {
            radius: radius, color: '#000',
            fillColor: dotColor, fillOpacity: 0.9, weight: 2
          });
          cm.bindPopup(app.buildPopup(
            '🌊 ' + r.name,
            '<b>Rate:</b> ' + r.rate + '<br>' + r.note,
            ['Sea Level', 'Climate', 'Vulnerable']
          ));
          cm.on('mouseover', function () { this.setStyle({ radius: radius + 4, weight: 3 }); });
          cm.on('mouseout', function () { this.setStyle({ radius: radius, weight: 2 }); });
          app.addLayer(cm);
          app.labelMarker([r.lat + 2.5, r.lng], r.name, dotColor, '9px');
        });

        // Info boxes
        app.infoBox([-35, -70],
          '<b style="color:#FF0040">Sea Level Timeline</b><br>' +
          '• Last Ice Age: 120m lower than today<br>' +
          '• 1900–2018: +20 cm total rise<br>' +
          '• 1993–2018: 3.1 mm/yr (satellite)<br>' +
          '• 2006–2018: 3.6 mm/yr (accelerating)<br>' +
          '• 2100: +30 to 110 cm projected'
        );

        app.infoBox([30, 50],
          '<b style="color:#FFD700">India — Sea Level Risk</b><br>' +
          '• Sundarbans losing islands yearly<br>' +
          '• Mumbai: 2.8M at risk by 2050<br>' +
          '• Lakshadweep: avg 1–2m elevation<br>' +
          '• CRZ 2019: 500m from HTL<br>' +
          '• INCOIS monitors Indian Ocean levels'
        );

        app.infoBox([-10, 165],
          '<b style="color:#FF6644">Small Island States</b><br>' +
          '• Tuvalu: may fully relocate<br>' +
          '• Kiribati: bought land in Fiji<br>' +
          '• Maldives: avg 1.5m above sea level<br>' +
          '• AOSIS: 44 members in COP<br>' +
          '• Loss & Damage Fund: COP27 2022'
        );

        app.showToast('MAP 093 — Sea Level Change loaded', 'success');
      }
    },

    // ──────────────────────────────────────────────────────
    // MAP 094 — Marine Protected Areas
    // ──────────────────────────────────────────────────────
    {
      mapNum: 94,
      title: 'Marine Protected Areas (MPAs)',
      subtitle: "World's Largest MPAs, India's Marine Reserves & 30×30 Target",
      mapConfig: { center: [10, 80], zoom: 3, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'MPA Size',
          items: [
            { dot: '#00FF88', label: 'Mega MPA (>500,000 km²)' },
            { dot: '#4ECDC4', label: 'Large MPA (>100,000 km²)' },
            { dot: '#45B7D1', label: 'Medium MPA' },
            { dot: '#FFD700', label: "India's Marine NPs" }
          ]
        }
      ],
      info: [
        {
          title: 'MPAs — Key Facts',
          facts: [
            { label: 'Global Coverage', value: '~8.16% of oceans (2023)' },
            { label: '30×30 Target',    value: '30% by 2030 (Kunming-Montreal GBF)' },
            { label: 'Largest MPA',     value: 'Ross Sea — 1.55 M km² (CCAMLR 2016)' },
            { label: 'India MPAs',      value: '31 Marine Protected Areas' },
            { label: 'India Marine NPs', value: '5 — Kutch, Mannar, Wandoor, etc.' },
            { label: 'BBNJ Treaty',     value: 'High Seas Treaty 2023 — enables high seas MPAs' }
          ]
        },
        {
          title: 'UPSC Key Points',
          items: [
            'Kunming-Montreal GBF (COP15, 2022): 30×30 target',
            'Wildlife Protection Act 1972 — marine species protected',
            'Gulf of Mannar: India first Marine Biosphere Reserve 1989',
            'Gulf of Kutch MNP: India first Marine National Park 1982',
            'National Marine Turtle Action Plan 2021',
            'Marine Spatial Planning: balance conservation & fisheries',
            'IMO: Particularly Sensitive Sea Areas (PSSA)',
            'Dugong Conservation Reserve — Gulf of Mannar & Palk Bay',
            'CCAMLR — manages Southern Ocean resources',
            'Deep Ocean Mission 2021 — ₹4,077 crore'
          ]
        }
      ],
      render: function (map, app) {

        DATA.mpas.forEach(function (m) {
          var areaVal = parseFloat(m.area.replace(/[^0-9.]/g, ''));
          var isIndia = m.country === 'India' || m.country === 'India-BD';

          var dotColor, radius;
          if (isIndia) {
            dotColor = '#FFD700'; radius = 7;
          } else if (areaVal >= 500000) {
            dotColor = '#00FF88'; radius = 11;
          } else if (areaVal >= 100000) {
            dotColor = '#4ECDC4'; radius = 9;
          } else {
            dotColor = '#45B7D1'; radius = 7;
          }

          // Big circle for mega MPAs
          if (!isIndia && areaVal >= 100000) {
            var radiusM = Math.sqrt(areaVal) * 350;
            var bigCircle = L.circle([m.lat, m.lng], {
              radius: radiusM,
              color: dotColor, fillColor: dotColor,
              fillOpacity: 0.07, weight: 1, dashArray: '6,4'
            });
            bigCircle.on('mouseover', function () { this.setStyle({ fillOpacity: 0.18, weight: 2 }); });
            bigCircle.on('mouseout', function () { this.setStyle({ fillOpacity: 0.07, weight: 1 }); });
            app.addLayer(bigCircle);
          }

          var cm = L.circleMarker([m.lat, m.lng], {
            radius: radius, color: isIndia ? '#F0A500' : '#000',
            fillColor: dotColor, fillOpacity: 0.9, weight: isIndia ? 3 : 2
          });
          cm.bindPopup(app.buildPopup(
            '🛡️ ' + m.name,
            '<b>Area:</b> ' + m.area + '<br>' +
            '<b>Country:</b> ' + m.country + '<br>' +
            m.note,
            ['MPA', isIndia ? 'India' : 'World', 'Conservation']
          ));
          cm.on('mouseover', function () { this.setStyle({ radius: radius + 4, weight: 3 }); });
          cm.on('mouseout', function () { this.setStyle({ radius: radius, weight: isIndia ? 3 : 2 }); });
          app.addLayer(cm);
          app.labelMarker([m.lat + 2.5, m.lng], m.name,
            dotColor, isIndia ? '10px' : '9px');
        });

        // Info boxes
        app.infoBox([-40, -140],
          '<b style="color:#00FF88">30×30 Target</b><br>' +
          '• Kunming-Montreal GBF (COP15, 2022)<br>' +
          '• Protect 30% of oceans by 2030<br>' +
          '• Current: ~8.16% protected<br>' +
          '• BBNJ Treaty 2023: enables high seas MPAs<br>' +
          '• Need to protect 22% more (~80M km²)'
        );

        app.infoBox([25, 55],
          '<b style="color:#FFD700">India Marine Conservation</b><br>' +
          '• 31 MPAs covering ~10,000 km²<br>' +
          '• 5 Marine National Parks<br>' +
          '• WPA 1972 protects marine species<br>' +
          '• Dugong Conservation Reserve (2022)<br>' +
          '• National Marine Turtle Action Plan 2021'
        );

        app.infoBox([-65, 140],
          '<b style="color:#4ECDC4">Ross Sea MPA</b><br>' +
          '• World largest MPA — 1.55 M km²<br>' +
          '• Est. 2016 by CCAMLR<br>' +
          '• 72% no-take zone<br>' +
          '• Emperor penguins, orcas, seals<br>' +
          '• Duration: 35 years (expires 2051)'
        );

        app.showToast('MAP 094 — Marine Protected Areas loaded', 'success');
      }
    }

  ]; // end MAPS array

  // ══════════════════════════════════════════════════════════
  // REGISTER
  // ══════════════════════════════════════════════════════════

  window.registerMaps('oceanography', MAPS);
  console.log('oceanography-maps.js: registered ' + MAPS.length + ' maps (085–094)');

})();
