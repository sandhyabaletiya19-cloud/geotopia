(function () {
  'use strict';

  // ═══════════════════════════════════════════════════════════════
  // DATA: WORLD LANDFORMS — MAPS 122-128
  // ═══════════════════════════════════════════════════════════════

  var DATA = {

    majorMountains: [
      { name: 'Himalayas', coords: [28.5, 84.0], height: '8,849m (Everest)', age: 'Young Fold (Cenozoic)', color: '#FF7043', type: 'Fold', plates: 'Indian + Eurasian', length: '2,400 km' },
      { name: 'Karakoram', coords: [36.0, 76.5], height: '8,611m (K2)', age: 'Young Fold', color: '#FF7043', type: 'Fold', plates: 'Indian + Eurasian', length: '500 km' },
      { name: 'Andes', coords: [-15.0, -70.0], height: '6,961m (Aconcagua)', age: 'Young Fold (Cenozoic)', color: '#FF7043', type: 'Fold', plates: 'Nazca + S. American', length: '7,000 km (longest)' },
      { name: 'Rocky Mountains', coords: [45.0, -113.0], height: '4,401m (Elbert)', age: 'Young Fold (Laramide)', color: '#FF7043', type: 'Fold', plates: 'Pacific + N. American', length: '4,800 km' },
      { name: 'Alps', coords: [46.5, 9.5], height: '4,809m (Mont Blanc)', age: 'Young Fold (Alpine)', color: '#FF7043', type: 'Fold', plates: 'African + Eurasian', length: '1,200 km' },
      { name: 'Atlas Mountains', coords: [32.0, -2.0], height: '4,167m (Toubkal)', age: 'Young Fold', color: '#FF7043', type: 'Fold', plates: 'African + Eurasian', length: '2,500 km' },
      { name: 'Caucasus', coords: [42.5, 44.5], height: '5,642m (Elbrus)', age: 'Young Fold', color: '#FF7043', type: 'Fold', plates: 'Arabian + Eurasian', length: '1,200 km' },
      { name: 'Appalachians', coords: [37.0, -81.0], height: '2,037m (Mitchell)', age: 'Old Fold (Paleozoic)', color: '#8D6E63', type: 'Old Fold', length: '2,400 km' },
      { name: 'Urals', coords: [60.0, 59.0], height: '1,895m (Narodnaya)', age: 'Old Fold (Paleozoic)', color: '#8D6E63', type: 'Old Fold', length: '2,500 km' },
      { name: 'Scandinavian Mts', coords: [65.0, 15.0], height: '2,469m (Galdhøpiggen)', age: 'Old Fold (Caledonian)', color: '#8D6E63', type: 'Old Fold', length: '1,700 km' },
      { name: 'Great Dividing Range', coords: [-25.0, 148.0], height: '2,228m (Kosciuszko)', age: 'Old Fold', color: '#8D6E63', type: 'Old Fold', length: '3,500 km' },
      { name: 'Drakensberg', coords: [-29.5, 29.0], height: '3,482m (Thabana Ntlenyana)', age: 'Block/Residual', color: '#AB47BC', type: 'Block', length: '1,125 km' },
      { name: 'Western Ghats', coords: [12.0, 75.5], height: '2,695m (Anamudi)', age: 'Block/Residual', color: '#AB47BC', type: 'Block', length: '1,600 km' },
      { name: 'Eastern Ghats', coords: [15.0, 80.0], height: '1,680m (Arma Konda)', age: 'Residual', color: '#AB47BC', type: 'Residual', length: '1,750 km (discontinuous)' },
      { name: 'Aravalli', coords: [25.5, 73.5], height: '1,722m (Guru Shikhar)', age: 'Oldest fold (Precambrian)', color: '#FFEB3B', type: 'Oldest Fold', length: '692 km' },
      { name: 'Zagros Mountains', coords: [33.0, 49.0], height: '4,409m (Dena)', age: 'Young Fold', color: '#FF7043', type: 'Fold', plates: 'Arabian + Eurasian', length: '1,600 km' },
      { name: 'Hindu Kush', coords: [36.5, 71.0], height: '7,708m (Tirich Mir)', age: 'Young Fold', color: '#FF7043', type: 'Fold', length: '800 km' },
      { name: 'Altai Mountains', coords: [49.0, 88.0], height: '4,506m (Belukha)', age: 'Old Fold (rejuvenated)', color: '#8D6E63', type: 'Old Fold', length: '2,000 km' }
    ],

    majorPlateaus: [
      { name: 'Tibetan Plateau', coords: [33.0, 88.0], elev: '4,500m avg', color: '#E91E63', note: 'Highest + largest plateau ("Roof of the World")', area: '2.5M km²' },
      { name: 'Deccan Plateau', coords: [17.0, 78.0], elev: '600m avg', color: '#AB47BC', note: 'Peninsular India, basaltic trap', area: '1.9M km²' },
      { name: 'Brazilian Highlands', coords: [-15.0, -47.0], elev: '1,000m avg', color: '#66BB6A', note: 'Old dissected plateau', area: '4.5M km²' },
      { name: 'East African Plateau', coords: [-2.0, 35.0], elev: '1,200m avg', color: '#FFEB3B', note: 'Rift Valley associated', area: 'Large' },
      { name: 'Colorado Plateau', coords: [37.0, -111.0], elev: '1,500m avg', color: '#FFA726', note: 'Grand Canyon region', area: '337,000 km²' },
      { name: 'Altiplano', coords: [-16.0, -68.0], elev: '3,750m avg', color: '#E91E63', note: 'High Andean plateau', area: '100,000 km²' },
      { name: 'Mongolian Plateau', coords: [47.0, 105.0], elev: '1,350m avg', color: '#FFA726', note: 'Steppe grassland plateau', area: '2.6M km²' },
      { name: 'Iranian Plateau', coords: [33.0, 54.0], elev: '1,000m avg', color: '#FFA726', note: 'Intermontane plateau', area: '3.7M km²' },
      { name: 'Patagonian Plateau', coords: [-45.0, -69.0], elev: '700m avg', color: '#66BB6A', note: 'Wind-swept semi-arid', area: '673,000 km²' },
      { name: 'Kimberley Plateau', coords: [-16.0, 126.0], elev: '300m avg', color: '#FFA726', note: 'Australian ancient plateau', area: '423,000 km²' },
      { name: 'Massif Central', coords: [45.0, 3.0], elev: '1,000m avg', color: '#66BB6A', note: 'France, old volcanic plateau', area: '85,000 km²' },
      { name: 'Chota Nagpur Plateau', coords: [23.5, 85.5], elev: '700m avg', color: '#AB47BC', note: 'India mineral-rich, Jharkhand', area: '65,000 km²' }
    ],

    majorPlains: [
      { name: 'Indo-Gangetic Plain', coords: [27.0, 80.0], color: '#4FC3F7', note: 'Alluvial plain, most fertile India', area: '700,000 km²' },
      { name: 'Great Plains (USA)', coords: [40.0, -100.0], color: '#4FC3F7', note: 'Prairie grassland, wheat belt', area: '1.3M km²' },
      { name: 'North European Plain', coords: [52.0, 15.0], color: '#4FC3F7', note: 'France to Russia, flat terrain', area: '2M+ km²' },
      { name: 'West Siberian Plain', coords: [62.0, 73.0], color: '#4FC3F7', note: 'Largest plain on Earth', area: '2.7M km²' },
      { name: 'Amazon Basin', coords: [-3.0, -62.0], color: '#66BB6A', note: 'Tropical alluvial plain, rainforest', area: '5.5M km²' },
      { name: 'La Plata (Pampas)', coords: [-34.0, -60.0], color: '#4FC3F7', note: 'Argentine grassland plain', area: '750,000 km²' },
      { name: 'North China Plain', coords: [36.0, 117.0], color: '#4FC3F7', note: 'Yellow River alluvial', area: '310,000 km²' },
      { name: 'Mississippi Plain', coords: [35.0, -90.0], color: '#4FC3F7', note: 'Alluvial floodplain', area: '3.2M km² basin' },
      { name: 'Nile Valley/Delta', coords: [30.0, 31.0], color: '#66BB6A', note: 'Narrow fertile strip', area: '~24,000 km² delta' },
      { name: 'Mesopotamian Plain', coords: [32.0, 44.0], color: '#FFEB3B', note: 'Tigris-Euphrates, cradle of civilization', area: '116,000 km²' }
    ],

    tectonicPlates: [
      { name: 'Pacific Plate', coords: [0.0, -160.0], color: '#42A5F5', type: 'Oceanic', note: 'Largest tectonic plate' },
      { name: 'North American Plate', coords: [45.0, -100.0], color: '#66BB6A', type: 'Continental+Oceanic' },
      { name: 'South American Plate', coords: [-15.0, -55.0], color: '#FFA726', type: 'Continental+Oceanic' },
      { name: 'Eurasian Plate', coords: [55.0, 70.0], color: '#AB47BC', type: 'Continental+Oceanic' },
      { name: 'African Plate', coords: [5.0, 20.0], color: '#FFEB3B', type: 'Continental+Oceanic' },
      { name: 'Indo-Australian Plate', coords: [-10.0, 110.0], color: '#FF7043', type: 'Continental+Oceanic', note: 'Indian Plate separating from Australian' },
      { name: 'Antarctic Plate', coords: [-75.0, 0.0], color: '#4FC3F7', type: 'Continental+Oceanic' },
      { name: 'Nazca Plate', coords: [-15.0, -100.0], color: '#E91E63', type: 'Oceanic', note: 'Subducting under S. American' },
      { name: 'Philippine Plate', coords: [15.0, 130.0], color: '#E91E63', type: 'Oceanic' },
      { name: 'Arabian Plate', coords: [25.0, 45.0], color: '#8D6E63', type: 'Continental' },
      { name: 'Indian Plate', coords: [22.0, 78.0], color: '#00FF88', type: 'Continental', note: 'Colliding with Eurasian → Himalayas' }
    ],

    ringOfFire: [
      [54.0, 159.0], [48.0, 153.0], [42.0, 144.0], [35.0, 140.0],
      [30.0, 132.0], [22.0, 121.0], [15.0, 120.0], [5.0, 127.0],
      [-5.0, 130.0], [-10.0, 120.0], [-20.0, 115.0], [-35.0, 150.0],
      [-45.0, 167.0], [-50.0, -75.0], [-40.0, -73.0], [-25.0, -71.0],
      [-10.0, -78.0], [5.0, -82.0], [15.0, -95.0], [20.0, -106.0],
      [35.0, -118.0], [45.0, -122.0], [55.0, -135.0], [60.0, -150.0],
      [55.0, -163.0], [52.0, 175.0], [54.0, 159.0]
    ],

    majorEarthquakes2022_25: [
      { name: 'Turkey-Syria Feb 2023', coords: [37.17, 37.04], magnitude: '7.8+7.5 Mw', deaths: '59,000+', color: '#FF6B6B', note: 'Anatolian Plate boundary, major UPSC case study', year: 2023 },
      { name: 'Morocco Sep 2023', coords: [31.06, -8.4], magnitude: '6.8 Mw', deaths: '2,900+', color: '#FF6B6B', note: 'Atlas Mountains, rare intraplate', year: 2023 },
      { name: 'Japan Noto Jan 2024', coords: [37.5, 137.3], magnitude: '7.6 Mw', deaths: '200+', color: '#FF6B6B', note: 'Noto Peninsula, tsunami warning', year: 2024 },
      { name: 'Afghanistan Oct 2023', coords: [32.0, 66.0], magnitude: '6.3 Mw (multiple)', deaths: '1,400+', color: '#FF6B6B', note: 'Hindu Kush seismic zone', year: 2023 },
      { name: 'Nepal Nov 2023', coords: [29.2, 82.1], magnitude: '6.4 Mw', deaths: '150+', color: '#FFA500', note: 'Himalayan seismic gap', year: 2023 },
      { name: 'Vanuatu Dec 2024', coords: [-17.7, 168.3], magnitude: '7.3 Mw', deaths: '14+', color: '#FFA500', note: 'Pacific Ring of Fire', year: 2024 },
      { name: 'Myanmar Mar 2025', coords: [20.9, 97.0], magnitude: '7.7 Mw', deaths: '3,500+', color: '#FF6B6B', note: 'Sagaing Fault, devastating', year: 2025 },
      { name: 'Taiwan Apr 2024', coords: [23.77, 121.6], magnitude: '7.4 Mw', deaths: '17+', color: '#FFA500', note: 'Strongest in 25 years', year: 2024 }
    ],

    activeVolcanoes2022_25: [
      { name: 'Iceland (Reykjanes)', coords: [63.87, -22.4], status: 'Series of eruptions 2023-25', color: '#FF6B6B', note: 'Near Grindavik, evacuations multiple times', year: '2023-25' },
      { name: 'Ruang (Indonesia)', coords: [2.3, 125.37], status: 'Major eruption Apr 2024', color: '#FF6B6B', note: 'North Sulawesi, evacuations', year: '2024' },
      { name: 'Mauna Loa (Hawaii)', coords: [19.48, -155.6], status: 'Erupted Nov 2022', color: '#FFA500', note: 'First eruption in 38 years', year: '2022' },
      { name: 'Hunga Tonga', coords: [-20.54, -175.38], status: 'Massive eruption Jan 2022', color: '#FFA500', note: 'Underwater, tsunami, ionospheric shock, global pressure wave', year: '2022' },
      { name: 'Mt Etna (Italy)', coords: [37.75, 14.99], status: 'Frequent activity 2024', color: '#FFA500', note: 'Europe\'s most active', year: '2024' },
      { name: 'Barren Island (India)', coords: [12.28, 93.86], status: 'Periodic activity', color: '#00FF88', note: 'Only active volcano in India, Andaman Sea', year: 'ongoing' },
      { name: 'Taal (Philippines)', coords: [14.0, 120.99], status: 'Elevated activity', color: '#FFA500', note: 'Volcano within a lake within a volcano', year: '2024' },
      { name: 'Kilauea (Hawaii)', coords: [19.42, -155.29], status: 'Ongoing eruptions', color: '#FFA500', note: 'Shield volcano, continuous', year: 'ongoing' },
      { name: 'Krakatoa (Indonesia)', coords: [-6.1, 105.42], status: 'Anak Krakatau activity', color: '#FFA500', note: 'Child of Krakatoa, rebuilding', year: 'ongoing' },
      { name: 'Mt Fuji (Japan)', coords: [35.36, 138.73], status: 'Dormant (monitored)', color: '#FFEB3B', note: 'Last eruption 1707, monitoring intensified', year: 'dormant' }
    ],

    deserts: [
      { name: 'Sahara', coords: [23.0, 12.0], area: '9.2M km²', color: '#FFA726', type: 'Hot', note: 'World\'s largest hot desert, expanding southward' },
      { name: 'Arabian Desert', coords: [23.0, 47.0], area: '2.3M km²', color: '#FFA726', type: 'Hot' },
      { name: 'Thar (Great Indian)', coords: [27.0, 71.0], area: '200,000 km²', color: '#FFA726', type: 'Hot', note: 'Slight stabilization (Indira Gandhi Canal)' },
      { name: 'Gobi', coords: [43.0, 105.0], area: '1.3M km²', color: '#FFEB3B', type: 'Cold', note: 'Rain shadow, expansion somewhat controlled by China afforestation' },
      { name: 'Kalahari', coords: [-23.0, 22.0], area: '930,000 km²', color: '#FFA726', type: 'Hot/semi-arid' },
      { name: 'Patagonian', coords: [-47.0, -69.0], area: '673,000 km²', color: '#FFEB3B', type: 'Cold', note: 'Rain shadow of Andes' },
      { name: 'Great Basin', coords: [40.0, -117.0], area: '492,000 km²', color: '#FFEB3B', type: 'Cold', note: 'USA intermontane' },
      { name: 'Antarctic', coords: [-80.0, 0.0], area: '14M km²', color: '#4FC3F7', type: 'Polar (largest desert)', note: 'Technically world\'s largest desert' },
      { name: 'Arctic', coords: [78.0, 0.0], area: '13.9M km²', color: '#4FC3F7', type: 'Polar' },
      { name: 'Atacama', coords: [-24.0, -69.0], area: '105,000 km²', color: '#E91E63', type: 'Hot', note: 'Driest place on Earth' },
      { name: 'Namib', coords: [-24.0, 15.0], area: '81,000 km²', color: '#FFA726', type: 'Coastal', note: 'Oldest desert (~55M years)' },
      { name: 'Great Victorian', coords: [-29.0, 130.0], area: '647,000 km²', color: '#FFA726', type: 'Hot' }
    ],

    glaciersAndCryosphere: [
      { name: 'Antarctic Ice Sheet', coords: [-80.0, 0.0], volume: '~26.5M km³', color: '#4FC3F7', note: '90% of world\'s ice, instability ↑' },
      { name: 'Greenland Ice Sheet', coords: [72.0, -40.0], volume: '~2.85M km³', color: '#4FC3F7', note: 'Accelerated melting 2023-25' },
      { name: 'Himalayan Glaciers', coords: [30.0, 80.0], volume: '~12,000 glaciers', color: '#FF6B6B', note: 'Rapid retreat confirmed, GLOF risk ↑' },
      { name: 'Siachen Glacier', coords: [35.4, 77.1], volume: '76 km long', color: '#00FF88', note: 'World\'s highest battlefield, India-controlled' },
      { name: 'Gangotri Glacier', coords: [30.9, 79.1], volume: '30 km long', color: '#FF6B6B', note: 'Source of Ganga, retreating ~22m/year' },
      { name: 'Arctic Sea Ice', coords: [85.0, 0.0], volume: 'Declining', color: '#FF6B6B', note: 'Decline continuing, Northern Sea Route opening' },
      { name: 'Kilimanjaro Ice Cap', coords: [-3.07, 37.35], volume: 'Shrinking rapidly', color: '#FF6B6B', note: 'May disappear by 2040' },
      { name: 'Glacier Bay (Alaska)', coords: [58.7, -136.1], volume: 'Retreating', color: '#FFA500', note: 'Visible retreat documented' },
      { name: 'Patagonian Ice Fields', coords: [-49.0, -73.5], volume: 'Retreating', color: '#FFA500', note: 'S. America\'s largest ice mass' },
      { name: 'Thwaites Glacier', coords: [-75.0, -107.0], volume: '"Doomsday Glacier"', color: '#FF6B6B', note: 'Collapse could raise sea level by ~65 cm' }
    ],

    desertification: [
      { name: 'Sahel (Sahara expansion)', coords: [14.0, 5.0], color: '#FF6B6B', note: 'Sahara expanding southward, Great Green Wall project' },
      { name: 'Central India degradation', coords: [22.0, 79.0], color: '#FFA500', note: 'Land degradation increasing' },
      { name: 'Gobi expansion', coords: [43.0, 105.0], color: '#FFA500', note: 'China afforestation somewhat controlling' },
      { name: 'Australia interior', coords: [-25.0, 133.0], color: '#FFA500', note: 'Increasing aridity' },
      { name: 'Central Asia aridification', coords: [42.0, 62.0], color: '#FFA500', note: 'Aral Sea region desertification' }
    ],

    seismicZonesIndia: [
      { zone: 'V (Very High)', coords: [34.0, 76.0], region: 'Kashmir, NE India, Kutch', color: '#E53935' },
      { zone: 'V', coords: [26.5, 93.0], region: 'NE India (Assam)', color: '#E53935' },
      { zone: 'V', coords: [23.2, 69.7], region: 'Kutch (Gujarat)', color: '#E53935' },
      { zone: 'IV (High)', coords: [28.6, 77.2], region: 'Delhi NCR, Indo-Gangetic', color: '#FF7043' },
      { zone: 'IV', coords: [30.5, 79.0], region: 'Uttarakhand', color: '#FF7043' },
      { zone: 'III (Moderate)', coords: [19.0, 73.0], region: 'Mumbai, W. Maharashtra', color: '#FFA726' },
      { zone: 'III', coords: [22.0, 88.0], region: 'Kolkata', color: '#FFA726' },
      { zone: 'II (Low)', coords: [17.0, 78.0], region: 'Deccan Plateau (most)', color: '#66BB6A' }
    ]
  };

  // ═══════════════════════════════════════════════════════════════
  // MAPS ARRAY
  // ═══════════════════════════════════════════════════════════════

  var MAPS = [

    // ─────────────────────────────────────────────────────────────
    // MAP 122 — WORLD MOUNTAIN SYSTEMS
    // ─────────────────────────────────────────────────────────────
    {
      mapNum: 122,
      title: 'World Mountain Systems',
      subtitle: 'Young fold, old fold, block mountains, plate boundaries & orogenesis',
      mapConfig: { center: [25.0, 30.0], zoom: 2, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Mountain Types',
          items: [
            { dot: '#FF7043', label: 'Young Fold Mountains (Cenozoic)' },
            { dot: '#8D6E63', label: 'Old Fold Mountains (Paleozoic)' },
            { dot: '#AB47BC', label: 'Block / Residual Mountains' },
            { dot: '#FFEB3B', label: 'Oldest Fold (Precambrian)' }
          ]
        },
        {
          sectionTitle: 'Current Affairs',
          items: [
            { dot: '#00FF88', label: 'Glacier Retreat Areas' },
            { dot: '#FF6B6B', label: 'Seismic Activity 2023-25' }
          ]
        }
      ],
      info: [
        {
          title: 'Key Facts',
          facts: [
            { label: 'Longest range', value: 'Andes (7,000 km)' },
            { label: 'Highest peak', value: 'Mt Everest (8,849m)' },
            { label: 'Oldest fold', value: 'Aravalli (~1,500 Ma)' },
            { label: 'Young fold belt', value: 'Alpine-Himalayan + Circum-Pacific' },
            { label: 'Orogenic phase', value: 'Alpine Orogeny (ongoing)' },
            { label: 'Western Ghats', value: 'Block/residual, UNESCO Biodiversity hotspot' },
            { label: 'Mountain glaciers', value: 'Retreating globally (climate change)' }
          ]
        },
        {
          title: 'UPSC Key Points',
          items: [
            'Young Fold: Himalayas, Alps, Andes, Rockies — formed by plate convergence (Cenozoic)',
            'Old Fold: Appalachians, Urals, Aravallis — Paleozoic/Precambrian, eroded, lower elevation',
            'Block/Residual: Western Ghats, Drakensberg — formed by faulting or erosion remnants',
            'Alpine-Himalayan Belt: Mediterranean → Iran → Himalayas — collision zone',
            'Circum-Pacific Belt: Ring of Fire — subduction-driven fold mountains + volcanoes',
            'Aravallis: world\'s oldest fold mountain system (~1,500 Ma, Precambrian)',
            'Mountain building (orogeny): convergent plate boundaries → compression → folding'
          ]
        },
        {
          title: 'Current Affairs 2023-26',
          items: [
            '2023-25: Himalayan glacier rapid retreat confirmed (multiple studies)',
            '2023: Turkey-Syria earthquake (7.8 Mw) — Alpine-Himalayan belt',
            '2024: GLOFs (Glacial Lake Outburst Floods) increasing in Nepal, NE India',
            '2024: Morocco earthquake (Atlas Mountains) — rare intraplate event',
            'Mountain ecosystems under climate stress — snowline rising globally',
            'Aravalli rejuvenation: ecological restoration projects ongoing',
            'Western Ghats: Supreme Court on ESA (Ecologically Sensitive Areas) demarcation'
          ]
        }
      ],
      render: function (map, app) {
        DATA.majorMountains.forEach(function (mt) {
          var rad = mt.type === 'Fold' ? 9 : mt.type === 'Old Fold' ? 7 : 6;
          var marker = L.circleMarker(mt.coords, {
            radius: rad,
            color: '#000',
            fillColor: mt.color,
            fillOpacity: 0.85,
            weight: 2
          }).addTo(map);

          var popBody = 'Height: ' + mt.height +
            '<br>Type: ' + mt.type + ' (' + mt.age + ')' +
            '<br>Length: ' + mt.length +
            (mt.plates ? '<br>Plates: ' + mt.plates : '');

          marker.bindPopup(app.buildPopup('⛰ ' + mt.name, popBody, [mt.type, 'mountain']));

          marker.on('mouseover', function () {
            this.setRadius(rad + 4);
            this.setStyle({ fillOpacity: 1, weight: 3 });
          });
          marker.on('mouseout', function () {
            this.setRadius(rad);
            this.setStyle({ fillOpacity: 0.85, weight: 2 });
          });

          app.addLayer(app.labelMarker(
            [mt.coords[0] + 2.5, mt.coords[1]],
            mt.name,
            mt.color,
            '9px'
          ));
        });

        // Alpine-Himalayan Belt line
        var alpineHimalayan = [
          [36.0, -6.0], [37.0, 5.0], [43.0, 12.0], [42.5, 20.0],
          [39.0, 30.0], [38.0, 40.0], [33.0, 49.0], [36.5, 71.0],
          [36.0, 76.5], [28.5, 84.0], [27.0, 92.0], [28.5, 97.0]
        ];
        var ahLine = L.polyline(alpineHimalayan, {
          color: '#FF7043', weight: 2.5, opacity: 0.5, dashArray: '8,4'
        }).addTo(map);
        ahLine.bindPopup(app.buildPopup('Alpine-Himalayan Orogenic Belt', 'Young fold mountain chain from Mediterranean to SE Asia<br>Active collision zone — earthquakes + mountain building', ['orogenic', 'belt']));
        app.addLayer(ahLine);
        app.addLayer(app.labelMarker([35.0, 45.0], 'Alpine-Himalayan Belt', '#FF7043', '10px'));

        // Aravalli special marker
        var aravalli = DATA.majorMountains.find(function (m) { return m.name === 'Aravalli'; });
        if (aravalli) {
          var ring = L.circleMarker(aravalli.coords, {
            radius: 16, color: '#FFEB3B', fillColor: '#FFEB3B',
            fillOpacity: 0.1, weight: 2, dashArray: '4,4'
          }).addTo(map);
          app.addLayer(ring);
        }

        // Glacier retreat zones
        var glacierRetreat = [
          { name: 'Himalayan glaciers retreating', coords: [30.0, 80.0] },
          { name: 'Alps glacier loss', coords: [46.5, 9.5] },
          { name: 'Andes glacier retreat', coords: [-15.0, -70.0] }
        ];
        glacierRetreat.forEach(function (gr) {
          var m = L.circleMarker(gr.coords, {
            radius: 6, color: '#00FF88', fillColor: '#00FF88', fillOpacity: 0.6, weight: 1.5
          }).addTo(map);
          m.bindPopup(app.buildPopup('🧊 ' + gr.name, 'Climate change impact', ['glacier', 'retreat', '2024']));
          m.on('mouseover', function () { this.setRadius(10); });
          m.on('mouseout', function () { this.setRadius(6); });
          app.addLayer(m);
        });

        app.addLayer(app.infoBox([33.0, 85.0],
          '<b style="color:#FFEB3B">Aravalli: World\'s Oldest</b><br>' +
          '~1,500 Ma (Precambrian)<br>' +
          'Guru Shikhar: 1,722m<br>' +
          'Heavily eroded, restoration ongoing'
        ));

        app.addLayer(app.infoBox([22.0, -60.0],
          '<b style="color:#FF7043">Andes: World\'s Longest</b><br>' +
          '7,000 km along South America<br>' +
          'Nazca-S. American subduction<br>' +
          'Aconcagua: 6,961m'
        ));

        app.showToast('Map 122: World Mountain Systems loaded', 'success');
      }
    },

    // ─────────────────────────────────────────────────────────────
    // MAP 123 — WORLD PLATEAUS & PLAINS
    // ─────────────────────────────────────────────────────────────
    {
      mapNum: 123,
      title: 'World Plateaus & Plains',
      subtitle: 'Major plateaus, alluvial plains, and lowlands of the world',
      mapConfig: { center: [20.0, 30.0], zoom: 2, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Landform Types',
          items: [
            { dot: '#E91E63', label: 'High Plateau (>3,000m)' },
            { dot: '#AB47BC', label: 'Medium Plateau (600-3,000m)' },
            { dot: '#FFA726', label: 'Low Plateau (<600m)' },
            { dot: '#66BB6A', label: 'Dissected/Old Plateau' },
            { dot: '#4FC3F7', label: 'Major Alluvial Plain' },
            { dot: '#FFEB3B', label: 'Historic Floodplain' }
          ]
        },
        {
          sectionTitle: 'Current Affairs',
          items: [
            { dot: '#00FF88', label: 'New 2024-25' },
            { dot: '#FF6B6B', label: 'Degradation Concern' }
          ]
        }
      ],
      info: [
        {
          title: 'Key Facts',
          facts: [
            { label: 'Highest plateau', value: 'Tibetan (4,500m avg, "Roof of the World")' },
            { label: 'Largest plateau', value: 'Tibetan (2.5M km²)' },
            { label: 'Largest plain', value: 'West Siberian (2.7M km²)' },
            { label: 'Most fertile plain', value: 'Indo-Gangetic (alluvial)' },
            { label: 'India plateau', value: 'Deccan (600m avg, basaltic trap)' },
            { label: 'Mineral plateau', value: 'Chota Nagpur (Jharkhand, India)' },
            { label: 'Amazon Basin', value: 'Largest tropical lowland (5.5M km²)' }
          ]
        },
        {
          title: 'UPSC Key Points',
          items: [
            'Plateaus: elevated flat-topped landforms, formed by uplift/lava flows/erosion',
            'Tibetan Plateau: formed by India-Eurasian collision, drives Asian monsoon',
            'Deccan Plateau: Cretaceous basaltic lava flows (Deccan Traps)',
            'Chota Nagpur Plateau: India\'s mineral heartland (coal, iron, mica)',
            'Plains: depositional landforms by rivers, wind, glaciers',
            'Indo-Gangetic Plain: most productive agricultural region of India',
            'Intermontane plateaus: between mountain ranges (Iranian, Colorado)'
          ]
        },
        {
          title: 'Current Affairs 2023-26',
          items: [
            'Tibetan Plateau warming: 2x global rate, permafrost thawing',
            'Indo-Gangetic Plain: groundwater depletion crisis (Punjab, Haryana)',
            'Deccan Plateau: land degradation in central India increasing',
            'Chota Nagpur: mining vs tribal rights debates continuing',
            'Amazon Basin: deforestation declining under Lula (2023-25) but still significant',
            'Sahel desertification: Great Green Wall project ongoing',
            'Central India land degradation: UNCCD COP 2024 focus'
          ]
        }
      ],
      render: function (map, app) {
        // Plateaus
        DATA.majorPlateaus.forEach(function (pl) {
          var rad = pl.color === '#E91E63' ? 10 : 8;
          var marker = L.circleMarker(pl.coords, {
            radius: rad,
            color: '#000',
            fillColor: pl.color,
            fillOpacity: 0.8,
            weight: 2
          }).addTo(map);

          marker.bindPopup(app.buildPopup(
            '🏔 ' + pl.name,
            'Elevation: ' + pl.elev + '<br>Area: ' + pl.area + '<br>' + pl.note,
            ['plateau', pl.color === '#E91E63' ? 'high' : 'medium']
          ));

          marker.on('mouseover', function () { this.setRadius(rad + 4); this.setStyle({ fillOpacity: 1, weight: 3 }); });
          marker.on('mouseout', function () { this.setRadius(rad); this.setStyle({ fillOpacity: 0.8, weight: 2 }); });

          app.addLayer(app.labelMarker([pl.coords[0] + 2.5, pl.coords[1]], pl.name, pl.color, '9px'));
        });

        // Plains
        DATA.majorPlains.forEach(function (pl) {
          var marker = L.circleMarker(pl.coords, {
            radius: 8,
            color: '#000',
            fillColor: pl.color,
            fillOpacity: 0.75,
            weight: 2
          }).addTo(map);

          marker.bindPopup(app.buildPopup(
            '🌾 ' + pl.name,
            'Area: ' + pl.area + '<br>' + pl.note,
            ['plain', 'alluvial']
          ));

          marker.on('mouseover', function () { this.setRadius(12); this.setStyle({ fillOpacity: 1 }); });
          marker.on('mouseout', function () { this.setRadius(8); this.setStyle({ fillOpacity: 0.75 }); });

          app.addLayer(app.labelMarker([pl.coords[0] - 2.5, pl.coords[1]], pl.name, pl.color, '9px'));
        });

        // Tibetan Plateau outline (approximate)
        var tibetOutline = L.polygon([
          [37.0, 75.0], [37.0, 100.0], [30.0, 100.0], [28.0, 88.0], [30.0, 78.0]
        ], {
          color: '#E91E63', fillColor: '#E91E63', fillOpacity: 0.06,
          weight: 1.5, dashArray: '6,4'
        }).addTo(map);
        tibetOutline.bindPopup(app.buildPopup('Tibetan Plateau', '"Roof of the World"<br>4,500m avg | 2.5M km²<br>Drives Asian monsoon system', ['Tibet', 'plateau']));
        app.addLayer(tibetOutline);

        // Deccan Plateau outline
        var deccanOutline = L.polygon([
          [21.0, 73.0], [21.0, 86.0], [15.0, 80.0], [8.5, 77.0], [10.0, 75.5], [16.0, 73.5]
        ], {
          color: '#AB47BC', fillColor: '#AB47BC', fillOpacity: 0.06,
          weight: 1.5, dashArray: '4,4'
        }).addTo(map);
        deccanOutline.bindPopup(app.buildPopup('Deccan Plateau', 'India\'s peninsular plateau<br>600m avg | Basaltic Deccan Traps<br>Black soil (regur) from lava weathering', ['Deccan', 'India']));
        app.addLayer(deccanOutline);

        app.addLayer(app.infoBox([35.0, 92.0],
          '<b style="color:#E91E63">Tibetan Plateau</b><br>' +
          'Roof of the World: 4,500m avg<br>' +
          'Drives Asian monsoon<br>' +
          '<span style="color:#FF6B6B">Warming 2x global rate</span>'
        ));

        app.addLayer(app.infoBox([30.0, 80.0],
          '<b style="color:#4FC3F7">Indo-Gangetic Plain</b><br>' +
          '700,000 km² alluvial plain<br>' +
          'India\'s food bowl<br>' +
          '<span style="color:#FF6B6B">Groundwater depletion crisis</span>'
        ));

        app.addLayer(app.infoBox([25.0, 86.0],
          '<b style="color:#AB47BC">Chota Nagpur Plateau</b><br>' +
          'India\'s mineral heartland<br>' +
          'Coal, iron, mica, copper<br>' +
          'Mining vs tribal rights debate'
        ));

        app.showToast('Map 123: World Plateaus & Plains loaded', 'success');
      }
    },

    // ─────────────────────────────────────────────────────────────
    // MAP 124 — TECTONIC PLATES & RING OF FIRE
    // ─────────────────────────────────────────────────────────────
    {
      mapNum: 124,
      title: 'Tectonic Plates & Pacific Ring of Fire',
      subtitle: 'Major plates, plate boundaries, seismic & volcanic zones',
      mapConfig: { center: [15.0, 0.0], zoom: 2, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Plate Features',
          items: [
            { dot: '#42A5F5', label: 'Oceanic Plate' },
            { dot: '#66BB6A', label: 'Continental Plate' },
            { dot: '#FF7043', label: 'Continental + Oceanic' },
            { dot: '#E91E63', label: 'Subducting Plate' },
            { dot: '#00FF88', label: 'Indian Plate' },
            { line: '#FF6B6B', label: 'Ring of Fire' }
          ]
        },
        {
          sectionTitle: 'Current Affairs',
          items: [
            { dot: '#FF6B6B', label: 'Major Earthquakes 2023-25' },
            { dot: '#FFA500', label: 'Active Volcanism' }
          ]
        }
      ],
      info: [
        {
          title: 'Key Facts',
          facts: [
            { label: 'Major plates', value: '7 (+ several minor)' },
            { label: 'Largest plate', value: 'Pacific Plate (oceanic)' },
            { label: 'Ring of Fire', value: '40,000 km, ~75% world earthquakes' },
            { label: 'Ring of Fire volcanoes', value: '~450 active volcanoes (75% total)' },
            { label: 'Indian Plate speed', value: '~5 cm/year northward' },
            { label: 'Mid-Atlantic Ridge', value: '~16,000 km divergent boundary' },
            { label: 'San Andreas Fault', value: '1,300 km transform boundary' }
          ]
        },
        {
          title: 'UPSC Key Points',
          items: [
            '7 major plates: Pacific, N. American, S. American, Eurasian, African, Indo-Australian, Antarctic',
            'Plate boundaries: convergent (collision/subduction), divergent (spreading), transform (sliding)',
            'Ring of Fire: Circum-Pacific belt — 75% earthquakes + 75% volcanoes',
            'Indian Plate: moving NE at ~5 cm/year, colliding with Eurasian → Himalayas rising',
            'Indian Plate may be splitting from Australian Plate (recent research)',
            'Subduction zones: deepest ocean trenches (Mariana Trench 10,994m)',
            'Hotspot volcanism: Hawaii, Yellowstone — not at plate boundaries'
          ]
        },
        {
          title: 'Current Affairs 2023-26',
          items: [
            '2023: Turkey earthquake 7.8 Mw — Anatolian-Arabian-Eurasian triple junction',
            '2024: Japan Noto 7.6 Mw — Pacific Plate subduction zone',
            '2025: Myanmar 7.7 Mw — Sagaing Fault (Indian-Eurasian boundary)',
            '2024: Taiwan 7.4 Mw — Philippine-Eurasian convergence',
            '2023-25: Iceland eruptions — Mid-Atlantic Ridge surface expression',
            'Indian Plate research: possible splitting from Australian Plate',
            'Monitoring intensified: Pacific Ring of Fire, Himalayan seismic gap'
          ]
        }
      ],
      render: function (map, app) {
        // Tectonic plate markers
        DATA.tectonicPlates.forEach(function (tp) {
          var rad = tp.name === 'Indian Plate' ? 10 : 8;
          var marker = L.circleMarker(tp.coords, {
            radius: rad,
            color: '#000',
            fillColor: tp.color,
            fillOpacity: 0.8,
            weight: 2
          }).addTo(map);

          marker.bindPopup(app.buildPopup(
            '🌍 ' + tp.name,
            'Type: ' + tp.type + (tp.note ? '<br>' + tp.note : ''),
            tp.color === '#00FF88' ? ['Indian', 'plate', 'collision'] : ['plate', 'tectonic']
          ));

          marker.on('mouseover', function () { this.setRadius(rad + 4); this.setStyle({ fillOpacity: 1 }); });
          marker.on('mouseout', function () { this.setRadius(rad); this.setStyle({ fillOpacity: 0.8 }); });

          app.addLayer(app.labelMarker([tp.coords[0] + 2.5, tp.coords[1]], tp.name, tp.color, '10px'));
        });

        // Ring of Fire
        var rofLine = L.polyline(DATA.ringOfFire, {
          color: '#FF6B6B', weight: 3, opacity: 0.7, dashArray: '6,4'
        }).addTo(map);
        rofLine.bindPopup(app.buildPopup('🔥 Pacific Ring of Fire', '~40,000 km<br>~75% of world earthquakes<br>~75% of active volcanoes<br>~450 volcanoes', ['Ring of Fire', 'seismic']));
        app.addLayer(rofLine);
        app.addLayer(app.labelMarker([30.0, -150.0], 'Ring of Fire', '#FF6B6B', '12px'));

        // Mid-Atlantic Ridge (simplified)
        var marLine = L.polyline([
          [65.0, -18.0], [50.0, -30.0], [30.0, -42.0], [0.0, -20.0],
          [-30.0, -14.0], [-55.0, -5.0]
        ], {
          color: '#42A5F5', weight: 2.5, opacity: 0.6, dashArray: '8,6'
        }).addTo(map);
        marLine.bindPopup(app.buildPopup('Mid-Atlantic Ridge', 'Divergent boundary<br>~16,000 km<br>Iceland sits on this ridge', ['divergent', 'ridge']));
        app.addLayer(marLine);
        app.addLayer(app.labelMarker([20.0, -35.0], 'Mid-Atlantic Ridge', '#42A5F5', '10px'));

        // Indian-Eurasian collision zone
        var collisionLine = L.polyline([
          [37.0, 68.0], [36.0, 76.0], [30.0, 82.0], [28.0, 88.0], [27.0, 96.0]
        ], {
          color: '#00FF88', weight: 4, opacity: 0.7
        }).addTo(map);
        collisionLine.bindPopup(app.buildPopup('India-Eurasia Collision Zone', 'Indian Plate → 5 cm/year NE<br>Created Himalayas<br>Ongoing convergence → seismic risk', ['collision', 'Himalayas']));
        app.addLayer(collisionLine);
        app.addLayer(app.labelMarker([32.0, 82.0], 'India-Eurasia Collision', '#00FF88', '10px'));

        // San Andreas Fault
        app.addLayer(app.circleMarker([37.0, -122.0], { radius: 6, color: '#FF6B6B', borderColor: '#000' }));
        app.addLayer(app.labelMarker([38.0, -118.0], 'San Andreas (Transform)', '#FF6B6B', '9px'));

        // Mariana Trench
        app.addLayer(app.circleMarker([11.3, 142.2], { radius: 6, color: '#42A5F5', borderColor: '#000' }));
        app.addLayer(app.labelMarker([13.0, 145.0], 'Mariana Trench (10,994m)', '#42A5F5', '9px'));

        app.addLayer(app.infoBox([28.0, 85.0],
          '<b style="color:#00FF88">Indian Plate</b><br>' +
          'Moving NE at ~5 cm/year<br>' +
          'Colliding with Eurasian Plate<br>' +
          'Himalayas still rising<br>' +
          '<span style="color:#FF6B6B">May be splitting from Australian</span>'
        ));

        app.addLayer(app.infoBox([40.0, -165.0],
          '<b style="color:#FF6B6B">Ring of Fire</b><br>' +
          '~40,000 km horseshoe belt<br>' +
          '75% earthquakes globally<br>' +
          '~450 active volcanoes'
        ));

        app.showToast('Map 124: Tectonic Plates & Ring of Fire loaded', 'success');
      }
    },

    // ─────────────────────────────────────────────────────────────
    // MAP 125 — MAJOR EARTHQUAKES (2022-2025)
    // ─────────────────────────────────────────────────────────────
    {
      mapNum: 125,
      title: 'Major Earthquakes 2022-2025',
      subtitle: 'Significant seismic events, plate boundary correlation, India zones',
      mapConfig: { center: [25.0, 50.0], zoom: 3, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Earthquake Severity',
          items: [
            { dot: '#FF6B6B', label: 'Major (7.0+ Mw, high deaths)' },
            { dot: '#FFA500', label: 'Significant (6.0-7.0+ Mw)' },
            { dot: '#FFEB3B', label: 'Notable (5.5-6.0 Mw)' }
          ]
        },
        {
          sectionTitle: 'India Seismic Zones',
          items: [
            { dot: '#E53935', label: 'Zone V (Very High Risk)' },
            { dot: '#FF7043', label: 'Zone IV (High Risk)' },
            { dot: '#FFA726', label: 'Zone III (Moderate)' },
            { dot: '#66BB6A', label: 'Zone II (Low)' }
          ]
        }
      ],
      info: [
        {
          title: 'Key Facts',
          facts: [
            { label: 'Turkey 2023', value: '7.8 Mw + 7.5 Mw, 59,000+ deaths' },
            { label: 'Myanmar 2025', value: '7.7 Mw, 3,500+ deaths' },
            { label: 'Japan Noto 2024', value: '7.6 Mw, Noto Peninsula' },
            { label: 'Morocco 2023', value: '6.8 Mw, Atlas Mountains' },
            { label: 'Delhi seismic zone', value: 'Zone IV (high risk)' },
            { label: 'Himalayan seismic gap', value: 'Central Himalayas overdue for major event' },
            { label: 'Ring of Fire share', value: '~75% of global earthquakes' }
          ]
        },
        {
          title: 'UPSC Key Points',
          items: [
            'Turkey-Syria 2023: deadliest in region in decades, Anatolian Plate triple junction',
            'Myanmar 2025: Sagaing Fault — Indian-Eurasian boundary, devastating impact',
            'Morocco 2023: rare intraplate earthquake in Atlas Mountains',
            'Himalayan seismic gap: central Himalayas overdue for 8.0+ Mw event',
            'India Seismic Zoning: Zone V (Kashmir, NE, Kutch) to Zone II (Deccan)',
            'Delhi: Zone IV — periodic tremors, high-rise vulnerability',
            'Earthquake prediction: impossible, but preparedness + early warning systems advancing'
          ]
        },
        {
          title: 'Current Affairs 2023-26',
          items: [
            'Feb 2023: Turkey 7.8 + 7.5 Mw → 59,000+ deaths, major case study',
            'Sep 2023: Morocco 6.8 Mw → 2,900+ deaths, Atlas Mountains',
            'Jan 2024: Japan Noto 7.6 Mw → 200+ deaths',
            'Apr 2024: Taiwan 7.4 Mw → strongest in 25 years',
            'Mar 2025: Myanmar 7.7 Mw → 3,500+ deaths, Sagaing Fault',
            'Delhi NCR: periodic tremors felt 2023-25, Zone IV concern',
            'India: NDMA earthquake preparedness guidelines updated'
          ]
        }
      ],
      render: function (map, app) {
        // Major earthquakes
        DATA.majorEarthquakes2022_25.forEach(function (eq) {
          var rad = eq.color === '#FF6B6B' ? 12 : 9;
          var marker = L.circleMarker(eq.coords, {
            radius: rad,
            color: '#000',
            fillColor: eq.color,
            fillOpacity: 0.9,
            weight: 2
          }).addTo(map);

          marker.bindPopup(app.buildPopup(
            '🔴 ' + eq.name,
            'Magnitude: ' + eq.magnitude + '<br>Deaths: ' + eq.deaths + '<br>' + eq.note,
            [eq.year.toString(), 'earthquake', 'seismic']
          ));

          marker.on('mouseover', function () {
            this.setRadius(rad + 5);
            this.setStyle({ fillOpacity: 1, weight: 3 });
          });
          marker.on('mouseout', function () {
            this.setRadius(rad);
            this.setStyle({ fillOpacity: 0.9, weight: 2 });
          });

          // Shockwave ring
          var shockRing = L.circle(eq.coords, {
            radius: eq.color === '#FF6B6B' ? 300000 : 200000,
            color: eq.color, fillColor: eq.color, fillOpacity: 0.05,
            weight: 1, dashArray: '4,6'
          }).addTo(map);
          app.addLayer(shockRing);

          app.addLayer(app.labelMarker(
            [eq.coords[0] + 2.5, eq.coords[1]],
            eq.name.split(' ').slice(0, 2).join(' ') + ' ' + eq.magnitude,
            eq.color,
            '9px'
          ));
        });

        // India Seismic Zones
        DATA.seismicZonesIndia.forEach(function (sz) {
          var m = L.circleMarker(sz.coords, {
            radius: 7,
            color: '#000',
            fillColor: sz.color,
            fillOpacity: 0.7,
            weight: 1.5
          }).addTo(map);
          m.bindPopup(app.buildPopup(
            'India Zone ' + sz.zone,
            'Region: ' + sz.region,
            ['seismic', 'India', 'zone']
          ));
          m.on('mouseover', function () { this.setRadius(11); });
          m.on('mouseout', function () { this.setRadius(7); });
          app.addLayer(m);
        });

        // Himalayan Seismic Gap
        var gapLine = L.polyline([
          [29.0, 78.0], [29.5, 80.0], [29.0, 82.0], [28.5, 84.0]
        ], {
          color: '#FFD700', weight: 4, opacity: 0.6, dashArray: '12,6'
        }).addTo(map);
        gapLine.bindPopup(app.buildPopup('⚠ Himalayan Seismic Gap', 'Central Himalayas overdue for major 8.0+ event<br>Last major: 1934 Bihar earthquake<br>High accumulation of seismic stress', ['seismic gap', 'Himalaya', 'overdue']));
        app.addLayer(gapLine);
        app.addLayer(app.labelMarker([29.5, 81.0], '⚠ Seismic Gap', '#FFD700', '10px'));

        app.addLayer(app.infoBox([42.0, 38.0],
          '<b style="color:#FF6B6B">Turkey 2023: Deadliest</b><br>' +
          '7.8 + 7.5 Mw twin quakes<br>' +
          '59,000+ deaths<br>' +
          'Anatolian-Arabian-Eurasian junction<br>' +
          '<span style="color:#FFD700">Major UPSC case study</span>'
        ));

        app.addLayer(app.infoBox([18.0, 98.0],
          '<b style="color:#FF6B6B">Myanmar 2025</b><br>' +
          '7.7 Mw, Sagaing Fault<br>' +
          '3,500+ deaths<br>' +
          'Indian-Eurasian boundary'
        ));

        app.addLayer(app.infoBox([32.0, 73.0],
          '<b style="color:#FF7043">Delhi: Zone IV</b><br>' +
          'High seismic risk<br>' +
          'Periodic tremors 2023-25<br>' +
          'High-rise vulnerability concern'
        ));

        app.showToast('Map 125: Major Earthquakes 2022-25 loaded', 'success');
      }
    },

    // ─────────────────────────────────────────────────────────────
    // MAP 126 — WORLD VOLCANOES (Active 2022-25)
    // ─────────────────────────────────────────────────────────────
    {
      mapNum: 126,
      title: 'World Volcanoes — Active & Recent Eruptions',
      subtitle: 'Major eruptions 2022-25, volcanic belts, Barren Island (India)',
      mapConfig: { center: [15.0, 30.0], zoom: 2, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Volcanic Activity',
          items: [
            { dot: '#FF6B6B', label: 'Major Eruption 2023-25' },
            { dot: '#FFA500', label: 'Active/Erupting 2022-24' },
            { dot: '#FFEB3B', label: 'Dormant (Monitored)' },
            { dot: '#00FF88', label: 'India — Barren Island' },
            { line: '#FF6B6B', label: 'Ring of Fire Volcanic Belt' }
          ]
        },
        {
          sectionTitle: 'Current Affairs',
          items: [
            { dot: '#FF6B6B', label: 'Eruptions 2023-25' },
            { dot: '#00FF88', label: 'Barren Island (India only)' }
          ]
        }
      ],
      info: [
        {
          title: 'Key Facts',
          facts: [
            { label: 'Active volcanoes', value: '~1,350 potentially active' },
            { label: 'Currently erupting', value: '~45-50 at any time' },
            { label: 'Ring of Fire', value: '~75% of world\'s volcanoes' },
            { label: 'Iceland eruptions', value: 'Series 2023-25 (Reykjanes)' },
            { label: 'Hunga Tonga 2022', value: 'Massive underwater, global shockwave' },
            { label: 'Barren Island', value: 'Only active volcano in India (Andaman)' },
            { label: 'Deccan Traps', value: 'Ancient LIP volcanism (~66 Ma)' }
          ]
        },
        {
          title: 'UPSC Key Points',
          items: [
            'Volcanic distribution: Ring of Fire (75%), Mid-oceanic ridges, Hotspots',
            'Types: Shield (Hawaii), Composite/Stratovolcano (Fuji), Cinder cone, Caldera',
            'Iceland: divergent boundary volcanism (Mid-Atlantic Ridge surface)',
            'Hunga Tonga 2022: underwater eruption → tsunami + ionospheric disturbance',
            'Barren Island: India\'s only active volcano, Andaman Sea',
            'Deccan Traps: flood basalt volcanism ~66 Ma, linked to mass extinction',
            'Volcanic winters: major eruptions can cool global temperatures'
          ]
        },
        {
          title: 'Current Affairs 2023-26',
          items: [
            '2023-25: Iceland Reykjanes eruptions — series of events near Grindavik',
            '2024: Ruang Volcano Indonesia — major eruption, evacuations',
            '2022: Mauna Loa Hawaii — first eruption in 38 years',
            '2022: Hunga Tonga — massive underwater eruption, global pressure wave',
            '2024: Mt Etna frequent activity — Europe\'s most active',
            'Barren Island (India): periodic activity continues',
            'Volcanic aerosol monitoring: climate impact assessment improving'
          ]
        }
      ],
      render: function (map, app) {
        // Ring of Fire (volcanic context)
        var rofLine = L.polyline(DATA.ringOfFire, {
          color: '#FF6B6B', weight: 2, opacity: 0.4, dashArray: '6,6'
        }).addTo(map);
        app.addLayer(rofLine);

        // Active volcanoes
        DATA.activeVolcanoes2022_25.forEach(function (v) {
          var rad = v.color === '#FF6B6B' ? 10 : v.color === '#00FF88' ? 9 : 8;
          var marker = L.circleMarker(v.coords, {
            radius: rad,
            color: '#000',
            fillColor: v.color,
            fillOpacity: 0.9,
            weight: 2
          }).addTo(map);

          marker.bindPopup(app.buildPopup(
            '🌋 ' + v.name,
            'Status: ' + v.status + '<br>' + v.note + '<br>Year: ' + v.year,
            [v.year, 'volcano', 'eruption']
          ));

          marker.on('mouseover', function () {
            this.setRadius(rad + 4);
            this.setStyle({ fillOpacity: 1, weight: 3 });
          });
          marker.on('mouseout', function () {
            this.setRadius(rad);
            this.setStyle({ fillOpacity: 0.9, weight: 2 });
          });

          // Eruption glow
          if (v.color === '#FF6B6B') {
            var glow = L.circleMarker(v.coords, {
              radius: 18, color: v.color, fillColor: v.color,
              fillOpacity: 0.08, weight: 1
            }).addTo(map);
            app.addLayer(glow);
          }

          app.addLayer(app.labelMarker(
            [v.coords[0] + 2.5, v.coords[1]],
            v.name,
            v.color,
            '9px'
          ));
        });

        // Additional classic volcanoes (for context)
        var classicVolcanoes = [
          { name: 'Vesuvius (Italy)', coords: [40.82, 14.43], color: '#FFEB3B', note: 'Dormant, near Naples' },
          { name: 'Mt Rainier (USA)', coords: [46.85, -121.76], color: '#FFEB3B', note: 'Cascade Range, monitored' },
          { name: 'Pinatubo (Philippines)', coords: [15.14, 120.35], color: '#FFEB3B', note: '1991 eruption, VEI-6' },
          { name: 'Mt St Helens (USA)', coords: [46.2, -122.18], color: '#FFEB3B', note: '1980 eruption, monitored' },
          { name: 'Yellowstone (USA)', coords: [44.43, -110.59], color: '#FFEB3B', note: 'Supervolcano caldera, dormant' },
          { name: 'Merapi (Indonesia)', coords: [-7.54, 110.45], color: '#FFA500', note: 'Most active in Indonesia' },
          { name: 'Nyiragongo (DRC)', coords: [-1.52, 29.25], color: '#FFA500', note: 'Lava lake, East African Rift' }
        ];

        classicVolcanoes.forEach(function (cv) {
          var m = L.circleMarker(cv.coords, {
            radius: 6, color: '#000', fillColor: cv.color, fillOpacity: 0.7, weight: 1.5
          }).addTo(map);
          m.bindPopup(app.buildPopup('🌋 ' + cv.name, cv.note, ['volcano']));
          m.on('mouseover', function () { this.setRadius(10); });
          m.on('mouseout', function () { this.setRadius(6); });
          app.addLayer(m);
        });

        // Barren Island special
        app.addLayer(app.infoBox([10.0, 96.0],
          '<b style="color:#00FF88">🌋 Barren Island</b><br>' +
          'India\'s ONLY active volcano<br>' +
          'Andaman Sea, periodic eruptions<br>' +
          '354m height, stratovolcano'
        ));

        app.addLayer(app.infoBox([68.0, -20.0],
          '<b style="color:#FF6B6B">Iceland 2023-25</b><br>' +
          'Reykjanes Peninsula series<br>' +
          'Grindavik evacuated multiple times<br>' +
          'Mid-Atlantic Ridge volcanism'
        ));

        app.addLayer(app.infoBox([-15.0, -175.0],
          '<b style="color:#FFA500">Hunga Tonga 2022</b><br>' +
          'Massive underwater eruption<br>' +
          'Tsunami + ionospheric shock<br>' +
          'Global pressure wave recorded<br>' +
          '<span style="color:#FFD700">Unique UPSC case study</span>'
        ));

        app.showToast('Map 126: World Volcanoes loaded', 'success');
      }
    },

    // ─────────────────────────────────────────────────────────────
    // MAP 127 — WORLD DESERTS & DESERTIFICATION
    // ─────────────────────────────────────────────────────────────
    {
      mapNum: 127,
      title: 'World Deserts & Desertification',
      subtitle: 'Hot, cold, polar deserts, Sahel expansion, Great Green Wall',
      mapConfig: { center: [20.0, 30.0], zoom: 2, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Desert Types',
          items: [
            { dot: '#FFA726', label: 'Hot Desert' },
            { dot: '#FFEB3B', label: 'Cold Desert' },
            { dot: '#4FC3F7', label: 'Polar Desert' },
            { dot: '#E91E63', label: 'Extreme Arid (Atacama)' },
            { dot: '#FF6B6B', label: 'Desertification Zone' },
            { dot: '#00FF88', label: 'Stabilization Effort' }
          ]
        },
        {
          sectionTitle: 'Current Affairs',
          items: [
            { dot: '#FF6B6B', label: 'Expansion/Degradation' },
            { dot: '#00FF88', label: 'Green Wall/Restoration' }
          ]
        }
      ],
      info: [
        {
          title: 'Key Facts',
          facts: [
            { label: 'World\'s largest desert', value: 'Antarctic (14M km², polar)' },
            { label: 'Largest hot desert', value: 'Sahara (9.2M km²)' },
            { label: 'Driest place', value: 'Atacama, Chile' },
            { label: 'Oldest desert', value: 'Namib (~55 million years)' },
            { label: 'India desert', value: 'Thar (200,000 km²)' },
            { label: 'Global desertification', value: '~12M hectares/year lost' },
            { label: 'Great Green Wall', value: 'Africa — 8,000 km afforestation' }
          ]
        },
        {
          title: 'UPSC Key Points',
          items: [
            'Desert classification: Hot (Sahara, Thar), Cold (Gobi, Patagonia), Polar (Antarctic, Arctic)',
            'Causes: subtropical high pressure (Hadley Cell), rain shadow, cold currents, continentality',
            'Sahara: expanding southward into Sahel (desertification + climate change)',
            'Great Green Wall: Africa\'s 8,000 km afforestation belt (Sahel protection)',
            'Thar Desert: slight stabilization due to Indira Gandhi Canal irrigation',
            'Desertification: UNCCD (UN Convention to Combat Desertification)',
            'Land degradation neutrality: SDG target 15.3'
          ]
        },
        {
          title: 'Current Affairs 2023-26',
          items: [
            'Sahel: Sahara expanding southward — climate change + overgrazing',
            'Great Green Wall Project: ongoing, partial progress in West Africa',
            'India: Thar slight stabilization (Indira Gandhi Canal effect)',
            'Central India: land degradation increasing (ISRO mapping)',
            'UNCCD COP 16 (2024, Riyadh): desertification + land degradation focus',
            'Gobi: China afforestation somewhat controlling expansion',
            'Aral Sea region: desertification catastrophe (Central Asia)'
          ]
        }
      ],
      render: function (map, app) {
        // Desert markers
        DATA.deserts.forEach(function (d) {
          var rad = d.name === 'Sahara' || d.name === 'Antarctic' ? 12 : 8;
          var marker = L.circleMarker(d.coords, {
            radius: rad,
            color: '#000',
            fillColor: d.color,
            fillOpacity: 0.8,
            weight: 2
          }).addTo(map);

          marker.bindPopup(app.buildPopup(
            '🏜 ' + d.name,
            'Area: ' + d.area + '<br>Type: ' + d.type + (d.note ? '<br>' + d.note : ''),
            [d.type, 'desert']
          ));

          marker.on('mouseover', function () { this.setRadius(rad + 4); this.setStyle({ fillOpacity: 1, weight: 3 }); });
          marker.on('mouseout', function () { this.setRadius(rad); this.setStyle({ fillOpacity: 0.8, weight: 2 }); });

          app.addLayer(app.labelMarker(
            [d.coords[0] + 2.5, d.coords[1]],
            d.name + (d.area ? ' (' + d.area + ')' : ''),
            d.color,
            '9px'
          ));
        });

        // Tropical latitudes (desert belt)
        [[23.43, -180, 23.43, 180], [-23.43, -180, -23.43, 180]].forEach(function (t) {
          L.polyline([[t[0], t[1]], [t[2], t[3]]], {
            color: '#FFA726', weight: 1, opacity: 0.3, dashArray: '4,8'
          }).addTo(map);
        });
        app.addLayer(app.labelMarker([23.43, -150], 'Tropic of Cancer', '#FFA726', '8px'));
        app.addLayer(app.labelMarker([-23.43, -150], 'Tropic of Capricorn', '#FFA726', '8px'));

        // Desertification zones
        DATA.desertification.forEach(function (df) {
          var cir = L.circle(df.coords, {
            radius: 400000, color: df.color, fillColor: df.color,
            fillOpacity: 0.1, weight: 2, dashArray: '6,4'
          }).addTo(map);
          cir.bindPopup(app.buildPopup('⚠ ' + df.name, df.note, ['desertification', 'land degradation']));
          app.addLayer(cir);
          app.addLayer(app.labelMarker([df.coords[0] + 3, df.coords[1]], df.name, df.color, '9px'));
        });

        // Great Green Wall line
        var ggwLine = L.polyline([
          [14.0, -17.0], [14.0, -5.0], [14.0, 5.0], [14.0, 15.0],
          [14.0, 25.0], [14.0, 35.0], [14.0, 43.0]
        ], {
          color: '#00FF88', weight: 4, opacity: 0.7, dashArray: '8,4'
        }).addTo(map);
        ggwLine.bindPopup(app.buildPopup('🌳 Great Green Wall', '8,000 km afforestation across Sahel<br>Senegal to Djibouti<br>Combating Sahara expansion<br>Progress ongoing but challenging', ['Great Green Wall', 'Sahel']));
        app.addLayer(ggwLine);
        app.addLayer(app.labelMarker([15.5, 10.0], '🌳 Great Green Wall', '#00FF88', '10px'));

        // Thar stabilization
        app.addLayer(app.infoBox([29.0, 73.0],
          '<b style="color:#00FF88">Thar Desert (India)</b><br>' +
          '200,000 km²<br>' +
          'Slight stabilization<br>' +
          'Indira Gandhi Canal effect<br>' +
          'Solar energy hub emerging'
        ));

        app.addLayer(app.infoBox([20.0, 10.0],
          '<b style="color:#FF6B6B">Sahel Desertification</b><br>' +
          'Sahara expanding southward<br>' +
          'Climate change + overgrazing<br>' +
          '<span style="color:#00FF88">Great Green Wall response</span>'
        ));

        app.addLayer(app.infoBox([-75.0, 30.0],
          '<b style="color:#4FC3F7">Antarctic: Largest Desert</b><br>' +
          '14M km² polar desert<br>' +
          'Technically world\'s largest<br>' +
          '<2cm precipitation/year'
        ));

        app.showToast('Map 127: World Deserts loaded', 'success');
      }
    },

    // ─────────────────────────────────────────────────────────────
    // MAP 128 — GLACIERS & CRYOSPHERE
    // ─────────────────────────────────────────────────────────────
    {
      mapNum: 128,
      title: 'World Glaciers & Cryosphere',
      subtitle: 'Ice sheets, glacier retreat, GLOFs, sea ice decline, sea level rise',
      mapConfig: { center: [35.0, 30.0], zoom: 2, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Cryosphere Features',
          items: [
            { dot: '#4FC3F7', label: 'Major Ice Sheet' },
            { dot: '#FF6B6B', label: 'Rapid Retreat / Instability' },
            { dot: '#FFA500', label: 'Significant Retreat' },
            { dot: '#00FF88', label: 'India Strategic / Notable' },
            { dot: '#FFEB3B', label: 'Monitored Glacier' }
          ]
        },
        {
          sectionTitle: 'Current Affairs',
          items: [
            { dot: '#FF6B6B', label: 'Retreat 2023-25' },
            { dot: '#00FF88', label: 'GLOF Risk Zones' }
          ]
        }
      ],
      info: [
        {
          title: 'Key Facts',
          facts: [
            { label: 'Antarctic ice', value: '~26.5M km³ (90% of world\'s ice)' },
            { label: 'Greenland ice', value: '~2.85M km³' },
            { label: 'Himalayan glaciers', value: '~12,000 (retreating rapidly)' },
            { label: 'Gangotri retreat', value: '~22m/year (source of Ganga)' },
            { label: 'Siachen Glacier', value: '76 km, world\'s highest battlefield' },
            { label: 'Thwaites Glacier', value: '"Doomsday Glacier" — collapse risk' },
            { label: 'Sea level rise', value: '~3.6 mm/year (accelerating)' }
          ]
        },
        {
          title: 'UPSC Key Points',
          items: [
            'Cryosphere: all frozen water on Earth — ice sheets, glaciers, sea ice, permafrost, snow',
            'Antarctic Ice Sheet: 26.5M km³, if melted → ~58m sea level rise',
            'Himalayan glaciers: Third Pole — retreating rapidly, GLOF risk increasing',
            'Gangotri Glacier: source of Ganga, retreating ~22m/year',
            'GLOFs: Glacial Lake Outburst Floods — increasing events in Nepal, NE India',
            'Arctic sea ice: summer minimum declining — Northern Sea Route opening',
            'Permafrost thawing: releases methane → positive feedback loop (climate change)'
          ]
        },
        {
          title: 'Current Affairs 2023-26',
          items: [
            '2023-25: Himalayan glacier retreat confirmed accelerating (ICIMOD reports)',
            '2024: Multiple GLOF events in Nepal, Sikkim (Teesta GLOF 2023)',
            '2024: Arctic sea ice summer minimum — among lowest on record',
            '2024: Thwaites Glacier ("Doomsday") instability increasing',
            '2023: Antarctica — record low sea ice extent (Feb 2023)',
            'Kilimanjaro ice cap: may disappear by 2040 (latest assessment)',
            'India: National Mission for Sustaining the Himalayan Ecosystem (NMSHE)'
          ]
        }
      ],
      render: function (map, app) {
        // Glaciers and cryosphere features
        DATA.glaciersAndCryosphere.forEach(function (gc) {
          var rad = gc.color === '#4FC3F7' ? 12 : gc.color === '#FF6B6B' ? 10 : 8;
          var marker = L.circleMarker(gc.coords, {
            radius: rad,
            color: '#000',
            fillColor: gc.color,
            fillOpacity: 0.85,
            weight: 2
          }).addTo(map);

          marker.bindPopup(app.buildPopup(
            '🧊 ' + gc.name,
            'Volume/Size: ' + gc.volume + '<br>' + gc.note,
            gc.color === '#FF6B6B' ? ['retreat', 'climate', '2024'] :
            gc.color === '#00FF88' ? ['India', 'strategic'] :
            ['cryosphere', 'ice']
          ));

          marker.on('mouseover', function () {
            this.setRadius(rad + 4);
            this.setStyle({ fillOpacity: 1, weight: 3 });
          });
          marker.on('mouseout', function () {
            this.setRadius(rad);
            this.setStyle({ fillOpacity: 0.85, weight: 2 });
          });

          app.addLayer(app.labelMarker(
            [gc.coords[0] + 3, gc.coords[1]],
            gc.name,
            gc.color,
            '9px'
          ));
        });

        // GLOF risk zones (Himalayas)
        var glofZones = [
          { name: 'Sikkim GLOF zone', coords: [27.5, 88.5], note: 'Teesta GLOF Oct 2023' },
          { name: 'Nepal GLOF zone', coords: [28.0, 86.0], note: 'Multiple glacial lakes expanding' },
          { name: 'Arunachal GLOF zone', coords: [28.0, 93.0], note: 'Eastern Himalaya risk' }
        ];

        glofZones.forEach(function (gz) {
          var m = L.circleMarker(gz.coords, {
            radius: 8, color: '#FF6B6B', fillColor: '#FF6B6B',
            fillOpacity: 0.25, weight: 2, dashArray: '4,4'
          }).addTo(map);
          m.bindPopup(app.buildPopup('⚠ GLOF Risk: ' + gz.name, gz.note + '<br>Glacial Lake Outburst Flood risk', ['GLOF', '2024', 'risk']));
          m.on('mouseover', function () { this.setRadius(12); });
          m.on('mouseout', function () { this.setRadius(8); });
          app.addLayer(m);
          app.addLayer(app.labelMarker([gz.coords[0] + 1, gz.coords[1]], gz.name, '#FF6B6B', '8px'));
        });

        // Northern Sea Route (opening)
        var nsrLine = L.polyline([
          [69.0, 33.0], [72.0, 50.0], [73.0, 70.0], [74.0, 90.0],
          [75.0, 110.0], [73.0, 135.0], [70.0, 160.0], [66.0, 170.0]
        ], {
          color: '#00FF88', weight: 2, opacity: 0.5, dashArray: '6,8'
        }).addTo(map);
        nsrLine.bindPopup(app.buildPopup('Northern Sea Route', 'Opening seasonally due to Arctic ice decline<br>4-5 months/year navigable<br>40% shorter than Suez route', ['Arctic', 'NSR', '2025']));
        app.addLayer(nsrLine);
        app.addLayer(app.labelMarker([76.0, 100.0], 'Northern Sea Route (opening)', '#00FF88', '9px'));

        // Sea level rise visualization
        var seaLevelCities = [
          { name: 'Mumbai', coords: [19.07, 72.87], risk: 'High' },
          { name: 'Kolkata', coords: [22.57, 88.36], risk: 'Very High' },
          { name: 'Dhaka', coords: [23.81, 90.41], risk: 'Very High' },
          { name: 'Jakarta', coords: [-6.21, 106.85], risk: 'Very High (sinking)' },
          { name: 'Miami', coords: [25.76, -80.19], risk: 'High' },
          { name: 'Shanghai', coords: [31.23, 121.47], risk: 'High' }
        ];

        seaLevelCities.forEach(function (slc) {
          var m = L.circleMarker(slc.coords, {
            radius: 5, color: '#FF6B6B', fillColor: '#FF6B6B',
            fillOpacity: 0.5, weight: 1.5
          }).addTo(map);
          m.bindPopup(app.buildPopup('🌊 Sea Level Risk: ' + slc.name, 'Risk: ' + slc.risk + '<br>Sea level rising ~3.6 mm/year', ['sea level', 'climate']));
          m.on('mouseover', function () { this.setRadius(9); });
          m.on('mouseout', function () { this.setRadius(5); });
          app.addLayer(m);
        });

        // Info boxes
        app.addLayer(app.infoBox([32.0, 82.0],
          '<b style="color:#FF6B6B">Himalayan Glaciers</b><br>' +
          '~12,000 glaciers retreating<br>' +
          'Gangotri: ~22m/year retreat<br>' +
          'GLOF risk increasing<br>' +
          '<span style="color:#FFEB3B">Teesta GLOF Oct 2023 (Sikkim)</span>'
        ));

        app.addLayer(app.infoBox([-70.0, -100.0],
          '<b style="color:#FF6B6B">Thwaites "Doomsday Glacier"</b><br>' +
          'Collapse could raise sea level ~65cm<br>' +
          'Instability increasing 2023-25<br>' +
          'West Antarctic Ice Sheet concern'
        ));

        app.addLayer(app.infoBox([80.0, -30.0],
          '<b style="color:#4FC3F7">Arctic Sea Ice Decline</b><br>' +
          'Summer minimum declining<br>' +
          'Northern Sea Route opening<br>' +
          'Permafrost thawing → methane<br>' +
          '<span style="color:#FF6B6B">Feedback loop: more warming</span>'
        ));

        app.addLayer(app.infoBox([36.0, 77.5],
          '<b style="color:#00FF88">Siachen Glacier</b><br>' +
          '76 km — world\'s highest battlefield<br>' +
          'India-controlled since 1984<br>' +
          'Strategic importance'
        ));

        app.showToast('Map 128: Glaciers & Cryosphere loaded', 'success');
      }
    }

  ];

  // ═══════════════════════════════════════════════════════════════
  // REGISTER
  // ═══════════════════════════════════════════════════════════════

  window.registerMaps('world-landforms', MAPS);
  console.log('world-landforms-maps.js: registered ' + MAPS.length + ' maps');

})();
