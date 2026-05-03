(function () {
  'use strict';

  // ═══════════════════════════════════════════════════════════════
  // DATA: ECONOMIC GEOGRAPHY — MAPS 095-103
  // ═══════════════════════════════════════════════════════════════

  var DATA = {

    gdpCenters: [
      { name: 'United States', coords: [39.0, -98.0], gdp: 28.78, rank: 1, color: '#4FC3F7', share: '26.1%', notes: 'Largest economy, tech+services driven' },
      { name: 'China', coords: [35.0, 105.0], gdp: 18.53, rank: 2, color: '#FF7043', share: '16.8%', notes: 'Slowdown 2024-25, services shift' },
      { name: 'Germany', coords: [51.0, 10.0], gdp: 4.59, rank: 3, color: '#4FC3F7', share: '4.2%', notes: 'Largest EU economy, mfg hub' },
      { name: 'India', coords: [22.0, 78.0], gdp: 4.27, rank: 4, color: '#00FF88', share: '3.9%', notes: '4th largest 2025, overtook Japan' },
      { name: 'Japan', coords: [36.5, 138.0], gdp: 4.07, rank: 5, color: '#4FC3F7', share: '3.7%', notes: 'Overtaken by India 2025' },
      { name: 'United Kingdom', coords: [54.0, -2.0], gdp: 3.50, rank: 6, color: '#4FC3F7', share: '3.2%', notes: 'Services-dominant economy' },
      { name: 'France', coords: [46.5, 2.5], gdp: 3.13, rank: 7, color: '#4FC3F7', share: '2.8%', notes: 'Diversified economy' },
      { name: 'Brazil', coords: [-10.0, -52.0], gdp: 2.33, rank: 8, color: '#FFEB3B', share: '2.1%', notes: 'BRICS, agri powerhouse' },
      { name: 'Italy', coords: [42.5, 12.5], gdp: 2.33, rank: 9, color: '#4FC3F7', share: '2.1%', notes: 'EU major economy' },
      { name: 'Canada', coords: [56.0, -96.0], gdp: 2.24, rank: 10, color: '#4FC3F7', share: '2.0%', notes: 'Resource-rich economy' },
      { name: 'Russia', coords: [62.0, 100.0], gdp: 1.86, rank: 11, color: '#FF6B6B', share: '1.7%', notes: 'Sanctions impact, Asia pivot' },
      { name: 'South Korea', coords: [36.5, 127.5], gdp: 1.76, rank: 12, color: '#4FC3F7', share: '1.6%', notes: 'Tech+semiconductor hub' },
      { name: 'Australia', coords: [-25.0, 135.0], gdp: 1.72, rank: 13, color: '#4FC3F7', share: '1.6%', notes: 'Mining + services' },
      { name: 'Indonesia', coords: [-2.0, 118.0], gdp: 1.48, rank: 15, color: '#FFEB3B', share: '1.3%', notes: 'Rising ASEAN power' },
      { name: 'Saudi Arabia', coords: [24.0, 45.0], gdp: 1.11, rank: 17, color: '#FFA500', share: '1.0%', notes: 'BRICS 2024, Vision 2030' },
      { name: 'Nigeria', coords: [9.5, 7.5], gdp: 0.47, rank: 27, color: '#FFEB3B', share: '0.4%', notes: 'Africa largest economy' },
      { name: 'Egypt', coords: [26.0, 30.0], gdp: 0.40, rank: 33, color: '#FFA500', share: '0.36%', notes: 'BRICS 2024 member' },
      { name: 'UAE', coords: [24.0, 54.5], gdp: 0.53, rank: 25, color: '#FFA500', share: '0.48%', notes: 'BRICS 2024 member' },
      { name: 'Ethiopia', coords: [9.0, 39.5], gdp: 0.16, rank: 57, color: '#FFA500', share: '0.14%', notes: 'BRICS 2024 member' },
      { name: 'Vietnam', coords: [16.0, 107.5], gdp: 0.47, rank: 28, color: '#00FF88', share: '0.4%', notes: 'China+1 beneficiary' },
      { name: 'Bangladesh', coords: [24.0, 90.0], gdp: 0.46, rank: 29, color: '#FFEB3B', share: '0.4%', notes: 'Garments + fast growth' },
      { name: 'Mexico', coords: [23.5, -102.0], gdp: 1.79, rank: 14, color: '#FFEB3B', share: '1.6%', notes: 'Nearshoring beneficiary' },
      { name: 'South Africa', coords: [-29.0, 25.0], gdp: 0.37, rank: 36, color: '#FFEB3B', share: '0.34%', notes: 'BRICS founder' },
      { name: 'Iran', coords: [32.5, 53.5], gdp: 0.40, rank: 34, color: '#FFA500', share: '0.36%', notes: 'BRICS 2024 member' }
    ],

    bricsOriginal: [
      { name: 'Brazil', coords: [-10.0, -52.0], color: '#FFEB3B' },
      { name: 'Russia', coords: [62.0, 100.0], color: '#FFEB3B' },
      { name: 'India', coords: [22.0, 78.0], color: '#FFEB3B' },
      { name: 'China', coords: [35.0, 105.0], color: '#FFEB3B' },
      { name: 'South Africa', coords: [-29.0, 25.0], color: '#FFEB3B' }
    ],

    bricsNew2024: [
      { name: 'Egypt', coords: [26.0, 30.0], color: '#FFA500' },
      { name: 'UAE', coords: [24.0, 54.5], color: '#FFA500' },
      { name: 'Iran', coords: [32.5, 53.5], color: '#FFA500' },
      { name: 'Ethiopia', coords: [9.0, 39.5], color: '#FFA500' },
      { name: 'Saudi Arabia', coords: [24.0, 45.0], color: '#FFA500' }
    ],

    tradeRoutes: {
      suezRoute: [
        [48.0, -5.0], [36.0, -6.0], [35.8, 5.6], [37.5, 15.5], [35.0, 24.0],
        [31.5, 32.0], [30.0, 32.5], [27.0, 34.0], [12.5, 43.5], [10.0, 51.0],
        [8.0, 62.0], [15.0, 72.0], [6.0, 80.0], [1.5, 104.0], [5.0, 120.0],
        [22.0, 114.0], [31.0, 122.0], [35.0, 130.0]
      ],
      capeRoute: [
        [48.0, -5.0], [36.0, -6.0], [28.0, -15.5], [15.0, -17.5],
        [0.0, -5.0], [-15.0, 5.0], [-34.5, 18.5], [-35.0, 25.0],
        [-30.0, 35.0], [-20.0, 45.0], [-10.0, 55.0], [0.0, 65.0],
        [8.0, 72.0], [6.0, 80.0], [1.5, 104.0]
      ],
      imec: [
        [19.0, 72.8], [18.0, 68.0], [25.0, 56.0], [24.5, 47.0],
        [29.0, 36.0], [31.5, 35.0], [32.0, 34.8], [35.0, 33.5],
        [37.5, 24.0], [38.0, 23.5]
      ],
      instc: [
        [19.0, 72.8], [22.0, 60.0], [25.5, 57.5], [27.0, 56.5],
        [37.5, 49.5], [38.5, 48.5], [39.0, 49.5], [41.5, 50.0],
        [42.0, 47.5], [55.5, 37.5]
      ],
      northernSeaRoute: [
        [69.0, 33.0], [72.0, 50.0], [73.0, 70.0], [74.0, 90.0],
        [75.0, 110.0], [73.0, 135.0], [70.0, 160.0], [66.0, 170.0],
        [65.5, -169.0]
      ],
      panamaRoute: [
        [35.0, -118.0], [25.0, -110.0], [15.0, -95.0], [9.0, -79.5],
        [10.0, -75.0], [15.0, -65.0], [25.0, -50.0], [35.0, -30.0],
        [48.0, -5.0]
      ]
    },

    chokepoints: [
      { name: 'Strait of Malacca', coords: [2.5, 101.5], color: '#FF6B6B', note: '~25% global trade' },
      { name: 'Strait of Hormuz', coords: [26.5, 56.5], color: '#FF6B6B', note: '~21% global oil' },
      { name: 'Suez Canal', coords: [30.5, 32.3], color: '#FF6B6B', note: '~12% global trade' },
      { name: 'Bab-el-Mandeb', coords: [12.6, 43.3], color: '#FF6B6B', note: 'Houthi attacks 2024-25' },
      { name: 'Panama Canal', coords: [9.1, -79.7], color: '#FFA500', note: 'Drought 2023-24, reduced capacity' },
      { name: 'Cape of Good Hope', coords: [-34.4, 18.5], color: '#00FF88', note: 'Alternate route 2024-25' },
      { name: 'Turkish Straits', coords: [41.1, 29.0], color: '#FF6B6B', note: 'Bosphorus + Dardanelles' },
      { name: 'Lombok Strait', coords: [-8.5, 115.7], color: '#FFEB3B', note: 'Alternate to Malacca' }
    ],

    majorPorts: {
      india: [
        { name: 'Mumbai (JNPT)', coords: [18.95, 72.95], type: 'major', traffic: '87 MT', color: '#4FC3F7' },
        { name: 'Mundra', coords: [22.74, 69.72], type: 'private', traffic: '166 MT', color: '#4FC3F7', note: 'India largest port by cargo' },
        { name: 'Kandla-Deendayal', coords: [23.03, 70.22], type: 'major', traffic: '138 MT', color: '#4FC3F7' },
        { name: 'Chennai', coords: [13.1, 80.3], type: 'major', traffic: '47 MT', color: '#4FC3F7' },
        { name: 'Visakhapatnam', coords: [17.69, 83.3], type: 'major', traffic: '74 MT', color: '#4FC3F7' },
        { name: 'Paradip', coords: [20.27, 86.7], type: 'major', traffic: '135 MT', color: '#4FC3F7' },
        { name: 'Kolkata-Haldia', coords: [22.0, 88.1], type: 'major', traffic: '45 MT', color: '#4FC3F7' },
        { name: 'Cochin', coords: [9.97, 76.27], type: 'major', traffic: '32 MT', color: '#4FC3F7' },
        { name: 'Mormugao', coords: [15.4, 73.8], type: 'major', traffic: '18 MT', color: '#4FC3F7' },
        { name: 'New Mangalore', coords: [12.92, 74.8], type: 'major', traffic: '45 MT', color: '#4FC3F7' },
        { name: 'Tuticorin (VOC)', coords: [8.76, 78.19], type: 'major', traffic: '38 MT', color: '#4FC3F7' },
        { name: 'Kamarajar (Ennore)', coords: [13.22, 80.32], type: 'major', traffic: '38 MT', color: '#4FC3F7' },
        { name: 'Vizhinjam', coords: [8.38, 76.94], type: 'new', traffic: 'New', color: '#00FF88', note: 'Partially operational 2024-25, deepest natural port' }
      ],
      world: [
        { name: 'Shanghai', coords: [31.2, 121.5], traffic: '47.3M TEU', color: '#FF7043' },
        { name: 'Singapore', coords: [1.26, 103.84], traffic: '39.0M TEU', color: '#FF7043' },
        { name: 'Ningbo-Zhoushan', coords: [29.87, 121.96], traffic: '35.3M TEU', color: '#FF7043' },
        { name: 'Shenzhen', coords: [22.5, 114.1], traffic: '30.0M TEU', color: '#FF7043' },
        { name: 'Guangzhou', coords: [23.1, 113.3], traffic: '25.0M TEU', color: '#FF7043' },
        { name: 'Busan', coords: [35.1, 129.0], traffic: '22.7M TEU', color: '#4FC3F7' },
        { name: 'Rotterdam', coords: [51.9, 4.5], traffic: '14.5M TEU', color: '#4FC3F7' },
        { name: 'Dubai (Jebel Ali)', coords: [25.0, 55.1], traffic: '14.0M TEU', color: '#FFEB3B' },
        { name: 'Port Klang', coords: [3.0, 101.4], traffic: '13.2M TEU', color: '#FFEB3B' },
        { name: 'Antwerp', coords: [51.3, 4.3], traffic: '13.0M TEU', color: '#4FC3F7' },
        { name: 'Chancay (Peru)', coords: [-11.57, -77.27], traffic: 'New', color: '#FFA500', note: 'China-backed, nearing completion 2025' },
        { name: 'Duqm (Oman)', coords: [19.67, 57.7], traffic: 'Growing', color: '#00FF88', note: 'India-linked strategic hub' },
        { name: 'Gwadar (Pakistan)', coords: [25.12, 62.33], traffic: 'Strategic', color: '#FF6B6B', note: 'China CPEC, String of Pearls' },
        { name: 'Hambantota', coords: [6.12, 81.1], traffic: 'Strategic', color: '#FF6B6B', note: 'China 99-yr lease' }
      ]
    },

    sezIndia: [
      { name: 'GIFT City IFSC', coords: [23.15, 72.68], color: '#00FF88', type: 'IFSC', note: 'Operational global financial hub' },
      { name: 'Cochin SEZ', coords: [10.0, 76.3], color: '#4FC3F7', type: 'IT/Electronics' },
      { name: 'Noida SEZ', coords: [28.57, 77.36], color: '#4FC3F7', type: 'IT/ITES' },
      { name: 'SEEPZ Mumbai', coords: [19.15, 72.87], color: '#4FC3F7', type: 'Gems & Jewelry' },
      { name: 'Visakhapatnam SEZ', coords: [17.73, 83.4], color: '#4FC3F7', type: 'Pharma/IT' },
      { name: 'Mahindra World City Chennai', coords: [12.74, 80.0], color: '#4FC3F7', type: 'Multi-product' },
      { name: 'Falta SEZ Kolkata', coords: [22.18, 88.1], color: '#4FC3F7', type: 'Multi-product' },
      { name: 'Kandla SEZ', coords: [23.03, 70.2], color: '#4FC3F7', type: 'Multi-product' },
      { name: 'Sri City AP', coords: [13.55, 80.0], color: '#4FC3F7', type: 'Multi-product' },
      { name: 'Adani Mundra SEZ', coords: [22.74, 69.7], color: '#4FC3F7', type: 'Port-based' }
    ],

    semiconductorClusters: [
      { name: 'Dholera (Gujarat)', coords: [22.25, 72.19], color: '#00FF88', note: 'Tata Electronics Fab, PLI' },
      { name: 'Sanand (Gujarat)', coords: [22.98, 72.38], color: '#00FF88', note: 'Micron ATMP Plant' },
      { name: 'Hosur (Tamil Nadu)', coords: [12.74, 77.83], color: '#00FF88', note: 'Tata Electronics OSAT' },
      { name: 'Morigaon (Assam)', coords: [26.25, 92.35], color: '#FFA500', note: 'Proposed semiconductor unit' }
    ],

    pliSectors: [
      { name: 'Mobile & Electronics', hubs: ['Noida', 'Chennai', 'Bengaluru'] },
      { name: 'Automobiles & Components', hubs: ['Chennai', 'Pune', 'Gurugram'] },
      { name: 'Pharmaceuticals', hubs: ['Hyderabad', 'Ahmedabad', 'Mumbai'] },
      { name: 'Textiles', hubs: ['Surat', 'Tiruppur', 'Ludhiana'] },
      { name: 'Food Processing', hubs: ['Punjab', 'UP', 'Maharashtra'] },
      { name: 'Solar PV', hubs: ['Gujarat', 'Rajasthan', 'Tamil Nadu'] },
      { name: 'White Goods (AC/LED)', hubs: ['Noida', 'Pune', 'Dehradun'] },
      { name: 'Steel', hubs: ['Jharkhand', 'Odisha', 'Chhattisgarh'] },
      { name: 'Telecom', hubs: ['Bengaluru', 'Chennai', 'Hyderabad'] },
      { name: 'Drones', hubs: ['Bengaluru', 'Hyderabad', 'Pune'] }
    ],

    highwaysIndia: {
      goldenQuadrilateral: [
        [28.61, 77.2], [23.02, 72.57], [19.07, 72.87], [12.97, 77.59],
        [13.08, 80.27], [22.57, 88.36], [25.61, 85.14], [28.61, 77.2]
      ],
      northSouthCorridor: [
        [32.73, 74.87], [28.61, 77.2], [26.92, 75.78], [23.26, 77.41],
        [17.38, 78.49], [12.97, 77.59], [11.02, 76.97], [8.52, 76.94]
      ],
      eastWestCorridor: [
        [26.19, 91.75], [25.61, 85.14], [25.44, 81.85], [23.35, 85.33],
        [22.57, 88.36]
      ],
      majorExpressways: [
        { name: 'Delhi-Mumbai Expressway', coords: [[28.61, 77.2], [26.92, 75.78], [23.02, 72.57], [19.07, 72.87]], color: '#00FF88', length: '1,386 km', status: 'Phases operational 2023-25' },
        { name: 'Amritsar-Jamnagar Expy', coords: [[31.63, 74.87], [28.61, 77.2], [23.02, 72.57], [22.47, 70.07]], color: '#FFA500', length: '~1,258 km', status: 'Under construction' },
        { name: 'Bengaluru-Chennai Expy', coords: [[12.97, 77.59], [13.08, 80.27]], color: '#00FF88', length: '262 km', status: 'Operational 2024' },
        { name: 'Bundelkhand Expy', coords: [[26.45, 80.35], [25.45, 78.57]], color: '#00FF88', length: '296 km', status: 'Operational 2024' }
      ]
    },

    railwayZones: [
      { name: 'Northern Railway', hq: 'New Delhi', coords: [28.63, 77.22], color: '#E53935' },
      { name: 'North Eastern Railway', hq: 'Gorakhpur', coords: [26.76, 83.37], color: '#AB47BC' },
      { name: 'Northeast Frontier Railway', hq: 'Maligaon', coords: [26.18, 91.75], color: '#7E57C2' },
      { name: 'Eastern Railway', hq: 'Kolkata', coords: [22.56, 88.35], color: '#42A5F5' },
      { name: 'South Eastern Railway', hq: 'Kolkata', coords: [22.55, 88.34], color: '#26C6DA' },
      { name: 'South Central Railway', hq: 'Secunderabad', coords: [17.44, 78.50], color: '#66BB6A' },
      { name: 'Southern Railway', hq: 'Chennai', coords: [13.08, 80.27], color: '#FFA726' },
      { name: 'Central Railway', hq: 'Mumbai CST', coords: [18.94, 72.84], color: '#FFCA28' },
      { name: 'Western Railway', hq: 'Mumbai Churchgate', coords: [18.93, 72.83], color: '#8D6E63' },
      { name: 'South Western Railway', hq: 'Hubli', coords: [15.36, 75.12], color: '#78909C' },
      { name: 'North Western Railway', hq: 'Jaipur', coords: [26.92, 75.78], color: '#EF5350' },
      { name: 'West Central Railway', hq: 'Jabalpur', coords: [23.17, 79.95], color: '#EC407A' },
      { name: 'North Central Railway', hq: 'Prayagraj', coords: [25.44, 81.85], color: '#5C6BC0' },
      { name: 'South East Central Railway', hq: 'Bilaspur', coords: [22.08, 82.15], color: '#29B6F6' },
      { name: 'East Central Railway', hq: 'Hajipur', coords: [25.69, 85.22], color: '#26A69A' },
      { name: 'East Coast Railway', hq: 'Bhubaneswar', coords: [20.27, 85.84], color: '#9CCC65' },
      { name: 'Konkan Railway', hq: 'Navi Mumbai', coords: [19.03, 73.03], color: '#FFA000' },
      { name: 'South Coast Railway', hq: 'Visakhapatnam', coords: [17.69, 83.22], color: '#00FF88', note: '18th zone, newest' }
    ],

    dfcRoutes: {
      western: { coords: [[28.67, 77.0], [27.18, 76.0], [26.92, 75.78], [24.58, 73.69], [23.02, 72.57], [22.3, 73.2], [21.17, 72.83], [19.07, 72.87]], color: '#00FF88', status: 'Almost complete 2024', length: '1,504 km' },
      eastern: { coords: [[25.26, 86.98], [25.61, 85.14], [25.37, 83.0], [25.44, 81.85], [26.85, 80.91], [28.67, 77.0]], color: '#FFA500', status: 'Nearing full ops', length: '1,856 km' }
    },

    bulletTrain: {
      route: [[19.07, 72.87], [20.0, 73.0], [21.17, 72.83], [22.3, 73.2], [23.02, 72.57]],
      color: '#FFD700',
      length: '508 km',
      status: 'Under active construction'
    },

    airportsIndia: {
      major: [
        { name: 'Indira Gandhi (DEL)', coords: [28.56, 77.1], pax: '73.7M', color: '#4FC3F7' },
        { name: 'Chhatrapati Shivaji (BOM)', coords: [19.09, 72.87], pax: '52.3M', color: '#4FC3F7' },
        { name: 'Kempegowda (BLR)', coords: [13.2, 77.71], pax: '37.5M', color: '#4FC3F7', note: 'T2 opened 2023' },
        { name: 'Rajiv Gandhi (HYD)', coords: [17.24, 78.43], pax: '25.3M', color: '#4FC3F7' },
        { name: 'Netaji Subhas (CCU)', coords: [22.65, 88.45], pax: '23.5M', color: '#4FC3F7' },
        { name: 'Anna Intl (MAA)', coords: [12.99, 80.17], pax: '24.0M', color: '#4FC3F7' },
        { name: 'Cochin Intl (COK)', coords: [10.15, 76.39], pax: '10.5M', color: '#4FC3F7' },
        { name: 'Sardar Patel (AMD)', coords: [23.07, 72.63], pax: '12.0M', color: '#4FC3F7' },
        { name: 'Goa (Manohar)', coords: [15.38, 73.83], pax: '4.5M', color: '#00FF88', note: 'New Mopa Airport operational' },
        { name: 'Pune (PNQ)', coords: [18.58, 73.92], pax: '11.0M', color: '#4FC3F7' },
        { name: 'Jaipur (JAI)', coords: [26.82, 75.81], pax: '7.5M', color: '#4FC3F7' },
        { name: 'Lucknow (LKO)', coords: [26.76, 80.88], pax: '6.5M', color: '#4FC3F7' }
      ],
      upcoming: [
        { name: 'Jewar/Noida Intl (NIA)', coords: [28.18, 77.58], color: '#FFA500', status: 'Under construction, Phase ops 2025-26' },
        { name: 'Navi Mumbai (NMIA)', coords: [18.87, 73.12], color: '#FFA500', status: 'Nearing completion' },
        { name: 'Dholera Intl', coords: [22.25, 72.19], color: '#FFA500', status: 'Greenfield, under construction' },
        { name: 'Bhogapuram (Vizag)', coords: [18.0, 83.5], color: '#FFA500', status: 'Greenfield, under construction' }
      ],
      udan: [
        { name: 'Pakyong', coords: [27.23, 88.59], color: '#FFEB3B' },
        { name: 'Kishangarh', coords: [26.45, 74.85], color: '#FFEB3B' },
        { name: 'Jharsuguda', coords: [21.91, 84.05], color: '#FFEB3B' },
        { name: 'Hubli', coords: [15.36, 75.12], color: '#FFEB3B' },
        { name: 'Kannur', coords: [11.92, 75.55], color: '#FFEB3B' },
        { name: 'Deoghar', coords: [24.48, 86.69], color: '#FFEB3B' },
        { name: 'Donyi Polo (Itanagar)', coords: [27.07, 93.69], color: '#FFEB3B' },
        { name: 'Shivamogga', coords: [13.93, 75.57], color: '#FFEB3B' }
      ]
    },

    worldAgriculture: {
      wheatBelt: [
        { name: 'USA Great Plains', coords: [40.0, -100.0], color: '#FFCA28' },
        { name: 'Canadian Prairies', coords: [52.0, -110.0], color: '#FFCA28' },
        { name: 'Ukraine-Russia Steppe', coords: [50.0, 35.0], color: '#FF6B6B', note: 'Black Sea crisis' },
        { name: 'Punjab India', coords: [31.0, 75.5], color: '#FFCA28' },
        { name: 'Argentine Pampas', coords: [-34.0, -63.0], color: '#FFCA28' },
        { name: 'Australia Wheat Belt', coords: [-32.0, 148.0], color: '#FFCA28' },
        { name: 'France', coords: [48.0, 2.0], color: '#FFCA28' }
      ],
      riceBelt: [
        { name: 'Indo-Gangetic Plain', coords: [26.0, 82.0], color: '#66BB6A', note: 'India rice export ban 2023-24' },
        { name: 'Mekong Delta', coords: [10.0, 106.0], color: '#66BB6A' },
        { name: 'Yangtze Basin China', coords: [30.0, 115.0], color: '#66BB6A' },
        { name: 'Thailand Central', coords: [14.0, 100.0], color: '#66BB6A' },
        { name: 'Myanmar Irrawaddy', coords: [17.0, 96.0], color: '#66BB6A' },
        { name: 'Indonesia Java', coords: [-7.0, 110.0], color: '#66BB6A' }
      ],
      soybeanBelt: [
        { name: 'Brazil Cerrado', coords: [-15.0, -48.0], color: '#FF7043', note: 'Top soybean exporter 2023' },
        { name: 'US Midwest', coords: [41.0, -90.0], color: '#FF7043' },
        { name: 'Argentine Pampas', coords: [-33.0, -62.0], color: '#FF7043' }
      ],
      coffeeZones: [
        { name: 'Brazil (Minas Gerais)', coords: [-18.0, -44.0], color: '#8D6E63' },
        { name: 'Colombia', coords: [5.0, -75.0], color: '#8D6E63' },
        { name: 'Ethiopia', coords: [8.0, 38.0], color: '#8D6E63' },
        { name: 'Vietnam', coords: [12.0, 108.0], color: '#8D6E63' },
        { name: 'India (Coorg)', coords: [12.4, 75.7], color: '#8D6E63' }
      ],
      rubberZones: [
        { name: 'Kerala India', coords: [10.0, 76.5], color: '#4CAF50', note: 'Dominant but declining' },
        { name: 'Thailand', coords: [8.0, 99.0], color: '#4CAF50' },
        { name: 'Indonesia', coords: [-2.0, 104.0], color: '#4CAF50' },
        { name: 'Malaysia', coords: [3.5, 102.0], color: '#4CAF50' }
      ]
    },

    blackSeaCrisis: {
      grainRoutes: [
        { from: [46.5, 31.0], to: [41.0, 29.0], label: 'Blocked Route', color: '#FF6B6B' },
        { from: [46.5, 31.0], to: [42.0, 42.0], label: 'Alternate via Georgia', color: '#FFA500' }
      ],
      note: 'Black Sea Grain Initiative suspended Jul 2023'
    },

    redSeaCrisis: {
      zone: [13.0, 43.0],
      note: 'Houthi attacks 2024-25, ships diverted to Cape of Good Hope, cost +200%'
    }
  };

  // ═══════════════════════════════════════════════════════════════
  // MAPS ARRAY
  // ═══════════════════════════════════════════════════════════════

  var MAPS = [

    // ─────────────────────────────────────────────────────────────
    // MAP 095 — WORLD GDP DISTRIBUTION
    // ─────────────────────────────────────────────────────────────
    {
      mapNum: 95,
      title: 'World GDP Distribution',
      subtitle: 'Top economies by nominal GDP (2025 IMF) & BRICS expansion',
      mapConfig: { center: [20.0, 15.0], zoom: 2, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'GDP Tier',
          items: [
            { dot: '#4FC3F7', label: 'Advanced Economy' },
            { dot: '#FFEB3B', label: 'Emerging Economy' },
            { dot: '#FF7043', label: 'China' },
            { dot: '#00FF88', label: 'India (4th, New 2025)' },
            { dot: '#FFA500', label: 'BRICS New Members 2024' },
            { dot: '#FF6B6B', label: 'Sanctions-affected' }
          ]
        },
        {
          sectionTitle: 'Current Affairs',
          items: [
            { dot: '#00FF88', label: 'New 2024-25' },
            { dot: '#FF6B6B', label: 'Disputed/Changed' },
            { dot: '#FFA500', label: 'BRICS 2024 Expansion' }
          ]
        }
      ],
      info: [
        {
          title: 'Key Facts',
          facts: [
            { label: 'World GDP (2025)', value: '~$110 trillion' },
            { label: 'India GDP rank', value: '4th (overtook Japan)' },
            { label: 'India GDP nominal', value: '~$4.27 trillion' },
            { label: 'USA share', value: '~26.1%' },
            { label: 'China share', value: '~16.8%' },
            { label: 'BRICS share', value: '~35% of global GDP (PPP ~40%)' },
            { label: 'G7 share', value: '~43% (declining)' }
          ]
        },
        {
          title: 'UPSC Key Points',
          items: [
            'India: 4th largest economy by nominal GDP in 2025 (IMF), overtaking Japan',
            'BRICS expanded 2024: Egypt, UAE, Iran, Ethiopia, Saudi Arabia joined',
            'BRICS now represents ~45% of world population',
            'Global South economic assertion rising — multilateral rebalancing',
            'China GDP slowdown → shift from manufacturing to services',
            'EU relative GDP share shrinking globally',
            'Africa rising: Nigeria & Egypt as continental hubs'
          ]
        },
        {
          title: 'Current Affairs 2023-26',
          items: [
            '2025: India overtakes Japan as 4th largest economy (IMF)',
            '2024: BRICS expansion — Egypt, UAE, Iran, Ethiopia, Saudi Arabia',
            '2023: India G20 Presidency — "One Earth One Family One Future"',
            'China population decline since 2022 → demographic drag on GDP',
            'Russia sanctions → GDP resilience but structural damage',
            'Global South demands reform of IMF, World Bank governance',
            'India projected to become 3rd largest economy by 2028-30'
          ]
        }
      ],
      render: function (map, app) {
        // GDP circle markers — size based on GDP
        DATA.gdpCenters.forEach(function (c) {
          var radius = Math.max(5, Math.sqrt(c.gdp) * 4);
          var marker = L.circleMarker(c.coords, {
            radius: radius,
            color: '#000',
            fillColor: c.color,
            fillOpacity: 0.85,
            weight: 2
          }).addTo(map);

          marker.bindPopup(app.buildPopup(
            c.name + ' (#' + c.rank + ')',
            'GDP: $' + c.gdp + ' trillion<br>Global Share: ' + c.share + '<br>' + c.notes,
            c.color === '#00FF88' ? ['2025', 'India', 'new'] :
            c.color === '#FFA500' ? ['BRICS 2024', 'new member'] :
            c.color === '#FF6B6B' ? ['sanctions', 'changed'] : ['economy']
          ));

          marker.on('mouseover', function () {
            this.setStyle({ fillOpacity: 1, weight: 3 });
            this.setRadius(radius + 4);
          });
          marker.on('mouseout', function () {
            this.setStyle({ fillOpacity: 0.85, weight: 2 });
            this.setRadius(radius);
          });

          // Label for top 10 + India
          if (c.rank <= 10 || c.name === 'India') {
            app.addLayer(app.labelMarker(
              [c.coords[0] + 2.5, c.coords[1]],
              c.name + ' $' + c.gdp + 'T',
              c.color,
              c.rank <= 5 ? '11px' : '9px'
            ));
          }
        });

        // BRICS original members highlight ring
        DATA.bricsOriginal.forEach(function (b) {
          var ring = L.circleMarker(b.coords, {
            radius: 22,
            color: '#FFEB3B',
            fillColor: 'transparent',
            fillOpacity: 0,
            weight: 2,
            dashArray: '5,5'
          }).addTo(map);
          app.addLayer(ring);
        });

        // BRICS new 2024 members highlight
        DATA.bricsNew2024.forEach(function (b) {
          var ring = L.circleMarker(b.coords, {
            radius: 18,
            color: '#FFA500',
            fillColor: '#FFA500',
            fillOpacity: 0.2,
            weight: 3,
            dashArray: '8,4'
          }).addTo(map);
          app.addLayer(ring);

          app.addLayer(app.labelMarker(
            [b.coords[0] - 2.5, b.coords[1]],
            b.name + ' (BRICS 2024)',
            '#FFA500',
            '9px'
          ));
        });

        // BRICS connectivity lines (light)
        var bricsAll = DATA.bricsOriginal.concat(DATA.bricsNew2024);
        for (var i = 0; i < bricsAll.length; i++) {
          for (var j = i + 1; j < bricsAll.length; j++) {
            var line = L.polyline([bricsAll[i].coords, bricsAll[j].coords], {
              color: '#FFEB3B',
              weight: 0.5,
              opacity: 0.15,
              dashArray: '2,6'
            }).addTo(map);
            app.addLayer(line);
          }
        }

        // India special info box
        app.addLayer(app.infoBox([28.0, 78.0],
          '<b style="color:#00FF88">🇮🇳 India 2025</b><br>' +
          '4th largest economy<br>' +
          'GDP: $4.27T • Overtook Japan<br>' +
          '<span style="color:#FFD700">Projected 3rd by 2028-30</span>'
        ));

        // BRICS expansion info
        app.addLayer(app.infoBox([5.0, 42.0],
          '<b style="color:#FFA500">BRICS+ 2024</b><br>' +
          'Expanded: Egypt, UAE, Iran<br>' +
          'Ethiopia, Saudi Arabia joined<br>' +
          '~45% world population'
        ));

        // G7 vs BRICS comparison label
        app.addLayer(app.infoBox([55.0, -30.0],
          '<b style="color:#4FC3F7">G7 Share</b><br>' +
          '~43% nominal GDP (declining)<br>' +
          'vs BRICS ~35% nominal<br>' +
          '<span style="color:#FFEB3B">BRICS > G7 in PPP terms</span>'
        ));

        // Global South assertion marker
        app.addLayer(app.circleMarker([0, 25], {
          radius: 6,
          color: '#00FF88',
          borderColor: '#000'
        }));
        app.addLayer(app.labelMarker([0, 28], 'Global South Rising', '#00FF88', '10px'));

        app.showToast('Map 095: World GDP Distribution loaded', 'success');
      }
    },

    // ─────────────────────────────────────────────────────────────
    // MAP 096 — WORLD TRADE ROUTES
    // ─────────────────────────────────────────────────────────────
    {
      mapNum: 96,
      title: 'World Trade Routes & Maritime Corridors',
      subtitle: 'Major trade routes, chokepoints, Red Sea crisis, IMEC & INSTC',
      mapConfig: { center: [20.0, 50.0], zoom: 3, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Trade Routes',
          items: [
            { line: '#4FC3F7', label: 'Suez Route (traditional)' },
            { line: '#FF6B6B', label: 'Cape of Good Hope (diverted)' },
            { line: '#00FF88', label: 'IMEC Corridor (new 2023)' },
            { line: '#FFA500', label: 'INSTC (India-Iran-Russia)' },
            { line: '#AB47BC', label: 'Northern Sea Route (Arctic)' },
            { line: '#FFEB3B', label: 'Panama Canal Route' }
          ]
        },
        {
          sectionTitle: 'Chokepoints & Crisis',
          items: [
            { dot: '#FF6B6B', label: 'Strategic Chokepoint' },
            { dot: '#00FF88', label: 'New 2024-25' },
            { dot: '#FFA500', label: 'Under Construction/Disrupted' }
          ]
        }
      ],
      info: [
        {
          title: 'Key Facts',
          facts: [
            { label: 'Global maritime trade', value: '~80% of world trade by volume' },
            { label: 'Suez Canal traffic', value: '~12% of global trade' },
            { label: 'Strait of Hormuz', value: '~21% of global oil transits' },
            { label: 'Malacca Strait', value: '~25% of global trade' },
            { label: 'Red Sea disruption cost', value: '+200% shipping cost 2024' },
            { label: 'IMEC', value: 'India→UAE→Saudi→Jordan→Israel→Greece→Europe' },
            { label: 'INSTC', value: 'India→Iran→Russia (7,200 km)' }
          ]
        },
        {
          title: 'UPSC Key Points',
          items: [
            'Corridor-based geography replacing traditional country-based trade geography',
            'Red Sea Crisis (2024-25): Houthi attacks → ships rerouted via Cape of Good Hope',
            'IMEC announced at G20 2023: India-Middle East-Europe Economic Corridor',
            'INSTC: India-Iran-Russia multimodal corridor, trial runs 2024-25',
            'Panama Canal drought 2023-24 reduced daily ship transits significantly',
            'Northern Sea Route gaining seasonal relevance due to Arctic warming',
            'Russia energy pivot to Asia → new pipelines and shipping routes bypassing Europe'
          ]
        },
        {
          title: 'Current Affairs 2023-26',
          items: [
            '2024-25: Red Sea crisis — Houthi attacks on shipping, cost +200%, delay +2 weeks',
            '2023: IMEC MoU signed at G20 New Delhi summit',
            '2024-25: INSTC operational trials increased',
            '2023-24: Panama Canal drought → reduced capacity, significant delays',
            '2024: Bab-el-Mandeb → highest risk chokepoint (Yemen disruptions)',
            '2025: Northern Sea Route opens ~4-5 months/year (Arctic warming)',
            'China BRI 2.0 → expanding Belt & Road corridors in Africa, Central Asia'
          ]
        }
      ],
      render: function (map, app) {
        // 1. Suez traditional route
        var suezLine = L.polyline(DATA.tradeRoutes.suezRoute, {
          color: '#4FC3F7',
          weight: 3,
          opacity: 0.8,
          dashArray: null
        }).addTo(map);
        suezLine.bindPopup(app.buildPopup('Suez Canal Route', 'Traditional Europe-Asia trade route<br>~12% of global trade<br>Disrupted 2024-25 by Houthi attacks', ['trade', 'suez']));
        app.addLayer(suezLine);

        // 2. Cape of Good Hope diverted route
        var capeLine = L.polyline(DATA.tradeRoutes.capeRoute, {
          color: '#FF6B6B',
          weight: 3,
          opacity: 0.75,
          dashArray: '10,6'
        }).addTo(map);
        capeLine.bindPopup(app.buildPopup('Cape of Good Hope Route', 'Diverted route 2024-25 due to Red Sea crisis<br>+2 weeks transit time<br>+200% shipping costs', ['2024', 'crisis', 'diverted']));
        app.addLayer(capeLine);

        // 3. IMEC
        var imecLine = L.polyline(DATA.tradeRoutes.imec, {
          color: '#00FF88',
          weight: 4,
          opacity: 0.9,
          dashArray: '12,4'
        }).addTo(map);
        imecLine.bindPopup(app.buildPopup('IMEC – India-Middle East-Europe Corridor', 'Announced G20 2023, New Delhi<br>India→UAE→Saudi→Jordan→Israel→Greece→Europe<br>Rail + shipping multimodal<br>Status: MoU signed, implementation ongoing', ['2023', 'IMEC', 'new', 'G20']));
        app.addLayer(imecLine);

        // IMEC node markers
        var imecNodes = [
          { name: 'Mumbai', coords: [19.0, 72.8] },
          { name: 'Dubai/UAE', coords: [25.0, 56.0] },
          { name: 'Riyadh/Saudi', coords: [24.5, 47.0] },
          { name: 'Haifa/Israel', coords: [32.0, 34.8] },
          { name: 'Piraeus/Greece', coords: [38.0, 23.5] }
        ];
        imecNodes.forEach(function (n) {
          var m = L.circleMarker(n.coords, {
            radius: 7,
            color: '#000',
            fillColor: '#00FF88',
            fillOpacity: 0.9,
            weight: 2
          }).addTo(map);
          m.bindPopup(app.buildPopup('IMEC Node: ' + n.name, 'Part of India-Middle East-Europe Economic Corridor', ['IMEC', '2023']));
          m.on('mouseover', function () { this.setRadius(11); this.setStyle({ fillOpacity: 1 }); });
          m.on('mouseout', function () { this.setRadius(7); this.setStyle({ fillOpacity: 0.9 }); });
          app.addLayer(m);
        });

        // 4. INSTC
        var instcLine = L.polyline(DATA.tradeRoutes.instc, {
          color: '#FFA500',
          weight: 3.5,
          opacity: 0.85,
          dashArray: '8,6'
        }).addTo(map);
        instcLine.bindPopup(app.buildPopup('INSTC – International North-South Transport Corridor', 'India→Iran (Chabahar)→Azerbaijan→Russia<br>7,200 km multimodal corridor<br>40% shorter than Suez route<br>Trial runs increased 2024-25', ['2024', 'INSTC', 'new']));
        app.addLayer(instcLine);

        // INSTC nodes
        var instcNodes = [
          { name: 'Mumbai', coords: [19.0, 72.8] },
          { name: 'Chabahar (Iran)', coords: [25.5, 57.5] },
          { name: 'Baku (Azerbaijan)', coords: [40.5, 50.0] },
          { name: 'Moscow', coords: [55.5, 37.5] }
        ];
        instcNodes.forEach(function (n) {
          var m = L.circleMarker(n.coords, {
            radius: 6,
            color: '#000',
            fillColor: '#FFA500',
            fillOpacity: 0.9,
            weight: 2
          }).addTo(map);
          m.bindPopup(app.buildPopup('INSTC Node: ' + n.name, 'International North-South Transport Corridor node', ['INSTC']));
          m.on('mouseover', function () { this.setRadius(10); });
          m.on('mouseout', function () { this.setRadius(6); });
          app.addLayer(m);
        });

        // 5. Northern Sea Route
        var nsrLine = L.polyline(DATA.tradeRoutes.northernSeaRoute, {
          color: '#AB47BC',
          weight: 2.5,
          opacity: 0.7,
          dashArray: '6,8'
        }).addTo(map);
        nsrLine.bindPopup(app.buildPopup('Northern Sea Route (Arctic)', 'Seasonal route: ~4-5 months/year<br>Gaining importance with Arctic warming<br>Europe-Asia via Arctic → 40% shorter than Suez', ['Arctic', 'climate', '2025']));
        app.addLayer(nsrLine);

        // 6. Panama Canal Route
        var panamaLine = L.polyline(DATA.tradeRoutes.panamaRoute, {
          color: '#FFEB3B',
          weight: 2.5,
          opacity: 0.65,
          dashArray: '4,8'
        }).addTo(map);
        panamaLine.bindPopup(app.buildPopup('Panama Canal Route', 'Key Americas ↔ Asia/Europe route<br>Drought 2023-24 reduced daily transits<br>From ~38 to ~24 ships/day', ['Panama', 'drought', '2023']));
        app.addLayer(panamaLine);

        // Chokepoints
        DATA.chokepoints.forEach(function (cp) {
          var marker = L.circleMarker(cp.coords, {
            radius: 9,
            color: '#000',
            fillColor: cp.color,
            fillOpacity: 0.9,
            weight: 2
          }).addTo(map);

          marker.bindPopup(app.buildPopup(
            '⚠ ' + cp.name,
            cp.note,
            cp.color === '#FF6B6B' ? ['chokepoint', 'critical'] :
            cp.color === '#FFA500' ? ['disrupted', '2024'] :
            ['chokepoint', 'alternate']
          ));

          marker.on('mouseover', function () {
            this.setRadius(13);
            this.setStyle({ fillOpacity: 1, weight: 3 });
          });
          marker.on('mouseout', function () {
            this.setRadius(9);
            this.setStyle({ fillOpacity: 0.9, weight: 2 });
          });

          app.addLayer(app.labelMarker(
            [cp.coords[0] + 2, cp.coords[1]],
            cp.name,
            cp.color,
            '9px'
          ));
        });

        // Red Sea Crisis info box
        app.addLayer(app.infoBox([16.0, 48.0],
          '<b style="color:#FF6B6B">⚠ Red Sea Crisis 2024-25</b><br>' +
          'Houthi attacks on shipping<br>' +
          'Ships diverted via Cape of Good Hope<br>' +
          '<span style="color:#FFEB3B">Cost +200%, Delay +2 weeks</span>'
        ));

        // IMEC announcement info box
        app.addLayer(app.infoBox([35.0, 40.0],
          '<b style="color:#00FF88">IMEC 2023</b><br>' +
          'Announced at G20 New Delhi<br>' +
          'India→UAE→Saudi→Israel→Europe<br>' +
          'MoU signed, implementation ongoing'
        ));

        // Panama drought info box
        app.addLayer(app.infoBox([14.0, -82.0],
          '<b style="color:#FFA500">Panama Canal 2023-24</b><br>' +
          'Severe drought reduced capacity<br>' +
          'Daily transits cut from ~38 to ~24<br>' +
          'El Niño + low Gatun Lake levels'
        ));

        app.showToast('Map 096: World Trade Routes loaded', 'success');
      }
    },

    // ─────────────────────────────────────────────────────────────
    // MAP 097 — MAJOR PORTS OF THE WORLD & INDIA
    // ─────────────────────────────────────────────────────────────
    {
      mapNum: 97,
      title: 'Major Ports — World & India',
      subtitle: 'Top global container ports, India major/minor ports, strategic facilities',
      mapConfig: { center: [18.0, 75.0], zoom: 4, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Port Types',
          items: [
            { dot: '#4FC3F7', label: 'India Major Port' },
            { dot: '#FF7043', label: 'Top World Container Port' },
            { dot: '#00FF88', label: 'New Port (2024-25)' },
            { dot: '#FFA500', label: 'Under Construction / Planned' },
            { dot: '#FF6B6B', label: 'Strategic (China-linked)' },
            { dot: '#FFEB3B', label: 'India Private / World Port' }
          ]
        },
        {
          sectionTitle: 'Current Affairs',
          items: [
            { dot: '#00FF88', label: 'Vizhinjam Port 2024-25' },
            { dot: '#FFA500', label: 'Chancay Peru (China)' },
            { dot: '#FF6B6B', label: 'String of Pearls' }
          ]
        }
      ],
      info: [
        {
          title: 'Key Facts',
          facts: [
            { label: 'India Major Ports', value: '13 (under Central Govt)' },
            { label: 'India Minor Ports', value: '200+ (under State Govts)' },
            { label: 'India total cargo 2024', value: '~820 MT (major ports)' },
            { label: 'Largest India port', value: 'Mundra (Adani, 166 MT)' },
            { label: 'World #1 container', value: 'Shanghai (47.3M TEU)' },
            { label: 'Vizhinjam', value: 'Deepest natural port, partial ops 2024-25' },
            { label: 'Maritime India Vision', value: '2030 target plan' }
          ]
        },
        {
          title: 'UPSC Key Points',
          items: [
            'India: 7,500+ km coastline, 13 major + 200+ minor ports',
            'Sagarmala Programme: port-led development, coast-linked industrialization',
            'Vizhinjam Port Kerala: India\'s first deep-water transshipment port',
            'Mundra (private): largest by cargo volume, overtaking JNPT',
            'Smart/green ports: automation, renewable energy adoption expanding',
            'Strategic ports: China\'s String of Pearls encirclement concern',
            'India\'s Necklace of Diamonds counter-strategy: Duqm, Sabang, Agaléga'
          ]
        },
        {
          title: 'Current Affairs 2023-26',
          items: [
            '2024-25: Vizhinjam Port partially operational (deepest natural port India)',
            '2025: Chancay Port Peru (China-backed) nearing completion — strategic Pacific access',
            '2024: Duqm Port Oman — rising India-linked strategic naval/logistics hub',
            'Gwadar (Pakistan, China CPEC) — String of Pearls, dual-use concerns',
            'Hambantota (Sri Lanka) — 99-year Chinese lease, strategic Indian Ocean',
            'Maritime India Vision 2030: 23 waterways, 2x major port capacity target',
            'India port automation push: Mundra, JNPT digitalization leading'
          ]
        }
      ],
      render: function (map, app) {
        // India Major Ports
        DATA.majorPorts.india.forEach(function (p) {
          var rad = p.type === 'new' ? 9 : (p.type === 'private' ? 8 : 7);
          var marker = L.circleMarker(p.coords, {
            radius: rad,
            color: '#000',
            fillColor: p.color,
            fillOpacity: 0.9,
            weight: 2
          }).addTo(map);

          var popBody = 'Traffic: ' + p.traffic + (p.note ? '<br>' + p.note : '') + '<br>Type: ' + p.type;
          marker.bindPopup(app.buildPopup(
            '⚓ ' + p.name,
            popBody,
            p.color === '#00FF88' ? ['2024', 'new', 'Vizhinjam'] : ['port', 'India']
          ));

          marker.on('mouseover', function () {
            this.setRadius(rad + 4);
            this.setStyle({ fillOpacity: 1, weight: 3 });
          });
          marker.on('mouseout', function () {
            this.setRadius(rad);
            this.setStyle({ fillOpacity: 0.9, weight: 2 });
          });

          app.addLayer(app.labelMarker(
            [p.coords[0] + 0.8, p.coords[1] + 0.5],
            p.name,
            p.color,
            '9px'
          ));
        });

        // World Ports
        DATA.majorPorts.world.forEach(function (p) {
          var rad = p.color === '#FF6B6B' ? 8 : (p.traffic === 'New' || p.traffic === 'Growing' || p.traffic === 'Strategic' ? 7 : Math.min(10, 5 + parseInt(p.traffic) / 8));
          if (isNaN(rad)) rad = 7;

          var marker = L.circleMarker(p.coords, {
            radius: rad,
            color: '#000',
            fillColor: p.color,
            fillOpacity: 0.85,
            weight: 2
          }).addTo(map);

          var popBody = 'Traffic: ' + p.traffic + (p.note ? '<br>' + p.note : '');
          marker.bindPopup(app.buildPopup(
            '⚓ ' + p.name,
            popBody,
            p.color === '#FFA500' ? ['2025', 'China', 'new'] :
            p.color === '#00FF88' ? ['India', 'strategic'] :
            p.color === '#FF6B6B' ? ['China', 'strategic'] : ['world', 'port']
          ));

          marker.on('mouseover', function () { this.setRadius(rad + 3); });
          marker.on('mouseout', function () { this.setRadius(rad); });

          app.addLayer(app.labelMarker(
            [p.coords[0] - 1.5, p.coords[1]],
            p.name,
            p.color,
            '9px'
          ));
        });

        // India coastline outline (approximate polyline)
        var indiaCoastWest = [
          [23.5, 68.5], [22.5, 69.0], [21.5, 69.5], [20.5, 70.5], [19.8, 72.8],
          [18.0, 73.0], [16.0, 73.4], [15.0, 73.8], [14.0, 74.3], [12.5, 75.0],
          [10.5, 76.0], [8.5, 76.9]
        ];
        var indiaCoastEast = [
          [8.5, 77.5], [9.5, 79.0], [10.5, 80.0], [12.5, 80.3], [13.5, 80.3],
          [15.5, 80.2], [17.0, 82.5], [18.5, 84.0], [19.5, 85.0], [20.5, 87.0],
          [21.5, 87.5], [22.0, 88.0]
        ];

        L.polyline(indiaCoastWest, { color: '#4FC3F7', weight: 1.5, opacity: 0.4, dashArray: '4,4' }).addTo(map);
        L.polyline(indiaCoastEast, { color: '#4FC3F7', weight: 1.5, opacity: 0.4, dashArray: '4,4' }).addTo(map);

        // Vizhinjam special info box
        app.addLayer(app.infoBox([7.0, 78.5],
          '<b style="color:#00FF88">🆕 Vizhinjam Port 2024-25</b><br>' +
          'Deepest natural draft: 20m<br>' +
          'First transshipment hub India<br>' +
          'Reduces dependence on Colombo/Singapore'
        ));

        // Sagarmala label
        app.addLayer(app.infoBox([25.0, 72.0],
          '<b style="color:#FFD700">Sagarmala Programme</b><br>' +
          'Port-led development<br>' +
          'Coast-linked industrialization<br>' +
          '13 major + 200+ minor ports'
        ));

        // String of Pearls warning
        app.addLayer(app.infoBox([10.0, 85.0],
          '<b style="color:#FF6B6B">⚠ String of Pearls</b><br>' +
          'China: Gwadar, Hambantota,<br>' +
          'Djibouti, Kyaukpyu<br>' +
          '<span style="color:#00FF88">India counter: Necklace of Diamonds</span>'
        ));

        app.showToast('Map 097: Major Ports loaded', 'success');
      }
    },

    // ─────────────────────────────────────────────────────────────
    // MAP 098 — SEZ & INDUSTRIAL CLUSTERS OF INDIA
    // ─────────────────────────────────────────────────────────────
    {
      mapNum: 98,
      title: 'SEZ, Semiconductor & PLI Clusters of India',
      subtitle: 'Special Economic Zones, semiconductor hubs, PLI-linked manufacturing',
      mapConfig: { center: [22.0, 80.0], zoom: 5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Industrial Zones',
          items: [
            { dot: '#4FC3F7', label: 'Established SEZ' },
            { dot: '#00FF88', label: 'GIFT City IFSC (New Hub)' },
            { dot: '#FF7043', label: 'Semiconductor Cluster (New)' },
            { dot: '#FFA500', label: 'Under Development' },
            { dot: '#FFEB3B', label: 'PLI Sector Hub' },
            { dot: '#AB47BC', label: 'Industrial Corridor Node' }
          ]
        },
        {
          sectionTitle: 'Current Affairs',
          items: [
            { dot: '#00FF88', label: 'New 2024-25' },
            { dot: '#FF6B6B', label: 'Disputed/Changed' },
            { dot: '#FFA500', label: 'Under Construction' }
          ]
        }
      ],
      info: [
        {
          title: 'Key Facts',
          facts: [
            { label: 'Total SEZs India', value: '~270 operational (2024)' },
            { label: 'SEZ exports', value: '~₹16 lakh crore (2023-24)' },
            { label: 'DESH Bill', value: 'SEZ 2.0 reform — pending Parliament' },
            { label: 'GIFT City', value: 'India\'s only operational IFSC' },
            { label: 'PLI Scheme', value: '14 sectors, ₹1.97 lakh crore outlay' },
            { label: 'Semiconductor Mission', value: '₹76,000 crore allocation' },
            { label: 'Industrial Corridors', value: 'DMIC, CBIC, AKIC, VCIC, AMHIC' }
          ]
        },
        {
          title: 'UPSC Key Points',
          items: [
            'SEZ Act 2005 → multiple zones across states, tax + duty benefits',
            'DESH Bill: proposed to replace SEZ Act — broader development hubs concept',
            'GIFT City Gujarat: India\'s only International Financial Services Centre (IFSC)',
            'Semiconductor clusters: Tata (Dholera, Hosur), Micron (Sanand) — India Semiconductor Mission',
            'PLI scheme: 14 sectors including mobile, auto, pharma, textiles, food processing',
            'Industrial corridors: DMIC (Delhi-Mumbai), CBIC (Chennai-Bengaluru), VCIC (Vizag-Chennai)',
            'China+1 strategy benefiting India → FDI into electronics, pharma manufacturing'
          ]
        },
        {
          title: 'Current Affairs 2023-26',
          items: [
            '2024: Tata Electronics semiconductor fab at Dholera (Gujarat) — construction begun',
            '2024: Micron ATMP plant at Sanand (Gujarat) — operational progress',
            '2024: Tata OSAT plant at Hosur (Tamil Nadu) — under construction',
            '2025: GIFT City IFSC — growing as global financial hub, aircraft leasing, bullion exchange',
            'PLI scheme results: mobile phone production ₹4+ lakh crore, Apple 14%+ iPhones made in India',
            'India: 2nd largest mobile phone manufacturer globally (2024)',
            'DESH Bill to transform SEZs into Development of Enterprise & Service Hubs'
          ]
        }
      ],
      render: function (map, app) {
        // SEZ markers
        DATA.sezIndia.forEach(function (sez) {
          var marker = L.circleMarker(sez.coords, {
            radius: 8,
            color: '#000',
            fillColor: sez.color,
            fillOpacity: 0.9,
            weight: 2
          }).addTo(map);

          marker.bindPopup(app.buildPopup(
            'SEZ: ' + sez.name,
            'Type: ' + sez.type + (sez.note ? '<br>' + sez.note : ''),
            sez.color === '#00FF88' ? ['GIFT', 'IFSC', '2025'] : ['SEZ', 'India']
          ));

          marker.on('mouseover', function () { this.setRadius(12); this.setStyle({ weight: 3 }); });
          marker.on('mouseout', function () { this.setRadius(8); this.setStyle({ weight: 2 }); });

          app.addLayer(app.labelMarker(
            [sez.coords[0] + 0.5, sez.coords[1] + 0.5],
            sez.name,
            sez.color,
            '9px'
          ));
        });

        // Semiconductor clusters (special emphasis)
        DATA.semiconductorClusters.forEach(function (sc) {
          // Pulsing outer ring
          var outerRing = L.circleMarker(sc.coords, {
            radius: 16,
            color: sc.color,
            fillColor: sc.color,
            fillOpacity: 0.15,
            weight: 2,
            dashArray: '4,4'
          }).addTo(map);
          app.addLayer(outerRing);

          var marker = L.circleMarker(sc.coords, {
            radius: 9,
            color: '#000',
            fillColor: sc.color,
            fillOpacity: 0.95,
            weight: 2
          }).addTo(map);

          marker.bindPopup(app.buildPopup(
            '🔬 Semiconductor: ' + sc.name,
            sc.note,
            ['semiconductor', '2024', 'PLI', 'new']
          ));

          marker.on('mouseover', function () { this.setRadius(13); this.setStyle({ fillOpacity: 1 }); });
          marker.on('mouseout', function () { this.setRadius(9); this.setStyle({ fillOpacity: 0.95 }); });

          app.addLayer(app.labelMarker(
            [sc.coords[0] - 0.7, sc.coords[1]],
            '🔬 ' + sc.name,
            sc.color,
            '10px'
          ));
        });

        // Industrial Corridors (polylines)
        var corridors = [
          {
            name: 'DMIC (Delhi-Mumbai)', color: '#AB47BC',
            path: [[28.61, 77.2], [27.18, 75.78], [24.58, 73.69], [23.02, 72.57], [21.17, 72.83], [19.07, 72.87]]
          },
          {
            name: 'CBIC (Chennai-Bengaluru)', color: '#AB47BC',
            path: [[13.08, 80.27], [12.97, 77.59]]
          },
          {
            name: 'VCIC (Vizag-Chennai)', color: '#AB47BC',
            path: [[17.69, 83.3], [15.83, 80.04], [13.08, 80.27]]
          },
          {
            name: 'AKIC (Amritsar-Kolkata)', color: '#AB47BC',
            path: [[31.63, 74.87], [30.73, 76.78], [28.61, 77.2], [26.85, 80.91], [25.44, 81.85], [25.61, 85.14], [22.57, 88.36]]
          }
        ];

        corridors.forEach(function (cor) {
          var line = L.polyline(cor.path, {
            color: cor.color,
            weight: 3,
            opacity: 0.6,
            dashArray: '8,6'
          }).addTo(map);
          line.bindPopup(app.buildPopup('Industrial Corridor: ' + cor.name, 'Key industrial development corridor<br>Part of India\'s manufacturing push', ['corridor', 'industry']));
          app.addLayer(line);
        });

        // Corridor labels
        app.addLayer(app.labelMarker([24.0, 73.5], 'DMIC', '#AB47BC', '10px'));
        app.addLayer(app.labelMarker([13.0, 79.0], 'CBIC', '#AB47BC', '9px'));
        app.addLayer(app.labelMarker([16.0, 81.5], 'VCIC', '#AB47BC', '9px'));
        app.addLayer(app.labelMarker([28.0, 79.0], 'AKIC', '#AB47BC', '9px'));

        // PLI sector markers (representative locations)
        var pliMarkers = [
          { name: 'Mobile/Electronics', coords: [28.6, 77.4], color: '#FFEB3B' },
          { name: 'Auto Components', coords: [13.0, 80.2], color: '#FFEB3B' },
          { name: 'Pharma', coords: [17.4, 78.5], color: '#FFEB3B' },
          { name: 'Textiles', coords: [21.2, 72.8], color: '#FFEB3B' },
          { name: 'Solar PV', coords: [23.5, 72.0], color: '#FFEB3B' },
          { name: 'Steel', coords: [22.8, 86.2], color: '#FFEB3B' },
          { name: 'Food Processing', coords: [30.9, 75.8], color: '#FFEB3B' }
        ];

        pliMarkers.forEach(function (p) {
          var m = L.circleMarker(p.coords, {
            radius: 6,
            color: '#000',
            fillColor: p.color,
            fillOpacity: 0.8,
            weight: 1.5
          }).addTo(map);
          m.bindPopup(app.buildPopup('PLI Sector: ' + p.name, 'Production-Linked Incentive scheme<br>14 sectors total, ₹1.97 lakh crore', ['PLI', 'manufacturing']));
          m.on('mouseover', function () { this.setRadius(10); });
          m.on('mouseout', function () { this.setRadius(6); });
          app.addLayer(m);
        });

        // GIFT City special info box
        app.addLayer(app.infoBox([24.5, 74.0],
          '<b style="color:#00FF88">🏛 GIFT City IFSC</b><br>' +
          'India\'s only International Financial<br>' +
          'Services Centre (Gujarat)<br>' +
          '<span style="color:#FFD700">Aircraft leasing, bullion, fintech hub</span>'
        ));

        // Semiconductor Mission info box
        app.addLayer(app.infoBox([20.0, 76.0],
          '<b style="color:#FF7043">🔬 India Semiconductor Mission</b><br>' +
          '₹76,000 crore outlay<br>' +
          'Tata: Dholera fab + Hosur OSAT<br>' +
          'Micron: Sanand ATMP<br>' +
          '<span style="color:#00FF88">India enters global chip supply chain</span>'
        ));

        // Apple in India marker
        app.addLayer(app.circleMarker([13.0, 80.3], { radius: 5, color: '#00FF88', borderColor: '#000' }));
        app.addLayer(app.labelMarker([13.5, 81.5], 'Apple: 14%+ iPhones made in India 2025', '#00FF88', '9px'));

        app.showToast('Map 098: SEZ & Industrial Clusters loaded', 'success');
      }
    },

    // ─────────────────────────────────────────────────────────────
    // MAP 099 — NATIONAL HIGHWAYS OF INDIA (Part 1)
    // ─────────────────────────────────────────────────────────────
    {
      mapNum: 99,
      title: 'National Highways of India — Golden Quadrilateral & Corridors',
      subtitle: 'GQ, NS-EW Corridors, Bharatmala, expressways network',
      mapConfig: { center: [23.0, 80.0], zoom: 5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Highway Network',
          items: [
            { line: '#FFD700', label: 'Golden Quadrilateral (GQ)' },
            { line: '#4FC3F7', label: 'NS-EW Corridors' },
            { line: '#00FF88', label: 'New Expressways (2023-25)' },
            { line: '#FFA500', label: 'Under Construction' },
            { dot: '#AB47BC', label: 'Major Junction City' },
            { dot: '#FF6B6B', label: 'Border Road (BRO)' }
          ]
        },
        {
          sectionTitle: 'Current Affairs',
          items: [
            { dot: '#00FF88', label: 'New 2024-25' },
            { dot: '#FFA500', label: 'Under Construction' }
          ]
        }
      ],
      info: [
        {
          title: 'Key Facts',
          facts: [
            { label: 'Total NH length', value: '~1.45 lakh km (2025)' },
            { label: 'GQ length', value: '5,846 km (completed 2012)' },
            { label: 'NS-EW Corridor', value: '7,142 km' },
            { label: 'Delhi-Mumbai Expy', value: '1,386 km (phases operational)' },
            { label: 'Bharatmala Phase I', value: '34,800 km (nearing completion)' },
            { label: 'NH share of traffic', value: '~40% on just ~2% of road network' },
            { label: 'BRO border roads', value: 'Record construction 2023-25' }
          ]
        },
        {
          title: 'UPSC Key Points',
          items: [
            'Golden Quadrilateral: Delhi-Mumbai-Chennai-Kolkata-Delhi (5,846 km)',
            'NS Corridor: Srinagar→Kanyakumari | EW Corridor: Silchar→Porbandar',
            'Bharatmala Pariyojana: comprehensive highway development, border + coastal + expressways',
            'Delhi-Mumbai Expressway: India\'s longest expressway (1,386 km), phases operational 2023-25',
            'PM Gati Shakti: multimodal connectivity planning, integrated infrastructure',
            'BRO (Border Roads Organisation): record road construction near LAC 2023-25',
            'EV highways + green corridors emerging — solar-powered toll plazas'
          ]
        },
        {
          title: 'Current Affairs 2023-26',
          items: [
            '2023-25: Delhi-Mumbai Expressway phases becoming operational (1,386 km)',
            '2024: Bengaluru-Chennai Expressway operational (262 km)',
            '2024: Bundelkhand Expressway operational (296 km)',
            '2024-25: Amritsar-Jamnagar Expressway under construction',
            '2025: BRO constructing record border roads near LAC (Ladakh, Arunachal)',
            'Bharatmala Phase I nearing completion — 34,800 km target',
            'PM Gati Shakti National Master Plan → 16 ministries integrated planning'
          ]
        }
      ],
      render: function (map, app) {
        // Golden Quadrilateral
        var gqLine = L.polyline(DATA.highwaysIndia.goldenQuadrilateral, {
          color: '#FFD700',
          weight: 4,
          opacity: 0.9
        }).addTo(map);
        gqLine.bindPopup(app.buildPopup('Golden Quadrilateral', '5,846 km connecting 4 metros<br>Delhi-Mumbai-Chennai-Kolkata<br>Completed 2012 (NHDP Phase I)', ['GQ', 'NHDP']));
        app.addLayer(gqLine);

        // NS Corridor
        var nsLine = L.polyline(DATA.highwaysIndia.northSouthCorridor, {
          color: '#4FC3F7',
          weight: 3,
          opacity: 0.8,
          dashArray: '8,4'
        }).addTo(map);
        nsLine.bindPopup(app.buildPopup('North-South Corridor', 'Srinagar to Kanyakumari<br>4,000+ km<br>Part of NHDP', ['NS', 'corridor']));
        app.addLayer(nsLine);

        // EW Corridor
        var ewLine = L.polyline(DATA.highwaysIndia.eastWestCorridor, {
          color: '#4FC3F7',
          weight: 3,
          opacity: 0.8,
          dashArray: '8,4'
        }).addTo(map);
        ewLine.bindPopup(app.buildPopup('East-West Corridor', 'Silchar to Porbandar<br>3,300+ km<br>Part of NHDP', ['EW', 'corridor']));
        app.addLayer(ewLine);

        // Add Srinagar and Kanyakumari NS endpoints
        app.addLayer(app.labelMarker([33.5, 74.9], 'Srinagar', '#4FC3F7', '10px'));
        app.addLayer(app.labelMarker([8.1, 77.5], 'Kanyakumari', '#4FC3F7', '10px'));

        // GQ city nodes
        var gqCities = [
          { name: 'Delhi', coords: [28.61, 77.2] },
          { name: 'Mumbai', coords: [19.07, 72.87] },
          { name: 'Chennai', coords: [13.08, 80.27] },
          { name: 'Kolkata', coords: [22.57, 88.36] },
          { name: 'Ahmedabad', coords: [23.02, 72.57] },
          { name: 'Bengaluru', coords: [12.97, 77.59] },
          { name: 'Jaipur', coords: [26.92, 75.78] },
          { name: 'Bhopal', coords: [23.26, 77.41] },
          { name: 'Patna', coords: [25.61, 85.14] },
          { name: 'Hyderabad', coords: [17.38, 78.49] }
        ];

        gqCities.forEach(function (city) {
          var m = L.circleMarker(city.coords, {
            radius: 7,
            color: '#000',
            fillColor: '#AB47BC',
            fillOpacity: 0.9,
            weight: 2
          }).addTo(map);
          m.bindPopup(app.buildPopup(city.name, 'Major highway junction', ['city', 'junction']));
          m.on('mouseover', function () { this.setRadius(11); });
          m.on('mouseout', function () { this.setRadius(7); });
          app.addLayer(m);

          app.addLayer(app.labelMarker(
            [city.coords[0] + 0.5, city.coords[1] + 0.5],
            city.name,
            '#AB47BC',
            '10px'
          ));
        });

        // New Expressways
        DATA.highwaysIndia.majorExpressways.forEach(function (ex) {
          var line = L.polyline(ex.coords, {
            color: ex.color,
            weight: 4,
            opacity: 0.85,
            dashArray: ex.color === '#FFA500' ? '10,6' : null
          }).addTo(map);
          line.bindPopup(app.buildPopup(
            '🛣 ' + ex.name,
            'Length: ' + ex.length + '<br>Status: ' + ex.status,
            ex.color === '#00FF88' ? ['2024', 'new', 'expressway'] : ['under construction', 'expressway']
          ));
          app.addLayer(line);

          // Label at midpoint
          var mid = Math.floor(ex.coords.length / 2);
          app.addLayer(app.labelMarker(
            [ex.coords[mid][0] + 0.5, ex.coords[mid][1] + 1],
            ex.name,
            ex.color,
            '9px'
          ));
        });

        // BRO border roads (representative points)
        var broPoints = [
          { name: 'Atal Tunnel', coords: [32.4, 77.15], status: 'Operational', color: '#00FF88' },
          { name: 'Sela Tunnel', coords: [27.5, 92.1], status: 'Opened 2024', color: '#00FF88' },
          { name: 'Nimmu-Padum-Darcha', coords: [33.5, 77.0], status: 'Near completion', color: '#FFA500' },
          { name: 'Zojila Tunnel', coords: [34.3, 75.5], status: 'Under construction', color: '#FFA500' },
          { name: 'Shinku La Tunnel', coords: [32.7, 77.3], status: 'Proposed', color: '#FFA500' }
        ];

        broPoints.forEach(function (b) {
          var m = L.circleMarker(b.coords, {
            radius: 7,
            color: '#000',
            fillColor: b.color,
            fillOpacity: 0.9,
            weight: 2
          }).addTo(map);
          m.bindPopup(app.buildPopup('BRO: ' + b.name, 'Status: ' + b.status + '<br>Strategic border infrastructure', ['BRO', 'border', '2024']));
          m.on('mouseover', function () { this.setRadius(11); });
          m.on('mouseout', function () { this.setRadius(7); });
          app.addLayer(m);

          app.addLayer(app.labelMarker([b.coords[0] + 0.3, b.coords[1] + 0.3], b.name, b.color, '9px'));
        });

        // Delhi-Mumbai Expressway info box
        app.addLayer(app.infoBox([25.0, 74.0],
          '<b style="color:#00FF88">🛣 Delhi-Mumbai Expressway</b><br>' +
          '1,386 km — India\'s longest<br>' +
          'Phases operational 2023-25<br>' +
          '<span style="color:#FFD700">Cuts travel: 24h → 12h</span>'
        ));

        // Bharatmala info
        app.addLayer(app.infoBox([16.0, 74.0],
          '<b style="color:#FFD700">Bharatmala Pariyojana</b><br>' +
          'Phase I: 34,800 km target<br>' +
          'Border, coastal, port roads<br>' +
          'Nearing completion 2025'
        ));

        // Gati Shakti info
        app.addLayer(app.infoBox([26.0, 83.0],
          '<b style="color:#4FC3F7">PM Gati Shakti</b><br>' +
          'National Master Plan<br>' +
          '16 ministries integrated<br>' +
          'Multimodal connectivity planning'
        ));

        app.showToast('Map 099: National Highways loaded', 'success');
      }
    },

    // ─────────────────────────────────────────────────────────────
    // MAP 100 — NATIONAL HIGHWAYS PART 2 (Important NHs)
    // ─────────────────────────────────────────────────────────────
    {
      mapNum: 100,
      title: 'Important National Highways & Expressway Network',
      subtitle: 'Major NHs, green corridors, EV highways, border connectivity',
      mapConfig: { center: [23.0, 80.0], zoom: 5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Highway Types',
          items: [
            { line: '#E53935', label: 'NH-44 (Srinagar-Kanyakumari)' },
            { line: '#42A5F5', label: 'NH-48/8 (Delhi-Mumbai)' },
            { line: '#66BB6A', label: 'NH-2/19 (Delhi-Kolkata)' },
            { line: '#FFA726', label: 'NH-5/16 (Chennai-Kolkata)' },
            { line: '#AB47BC', label: 'NH-7/44 (Varanasi-Kanyakumari)' },
            { dot: '#00FF88', label: 'EV Charging Hub (New)' },
            { dot: '#FFD700', label: 'Major Junction' }
          ]
        },
        {
          sectionTitle: 'Current Affairs',
          items: [
            { dot: '#00FF88', label: 'New 2024-25' },
            { dot: '#FFA500', label: 'Under Construction' }
          ]
        }
      ],
      info: [
        {
          title: 'Key Facts',
          facts: [
            { label: 'NH-44 (longest NH)', value: '3,745 km (Srinagar-Kanyakumari)' },
            { label: 'NH-27 (2nd longest)', value: '3,507 km (Porbandar-Silchar)' },
            { label: 'Total NHs', value: '~600 designated NHs' },
            { label: 'NH length (2025)', value: '~1.45 lakh km' },
            { label: 'NHAI toll collection', value: '~₹64,000 crore (2024-25)' },
            { label: 'FASTag penetration', value: '97%+ (2025)' },
            { label: 'EV charging stations', value: '12,000+ planned on NHs' }
          ]
        },
        {
          title: 'UPSC Key Points',
          items: [
            'NH-44: Srinagar→Delhi→Agra→Nagpur→Hyderabad→Bengaluru→Kanyakumari (longest)',
            'NH numbering reformed 2010: odd=NS direction, even=EW direction',
            'NHs carry ~40% of total road traffic on ~2% of road network',
            'NHAI: National Highways Authority of India — construction + management',
            'BOT, HAM, EPC models for highway construction PPP',
            'Green highways: solar toll plazas, EV corridors, plantation along NHs',
            'FASTag mandatory → 97%+ electronic toll collection'
          ]
        },
        {
          title: 'Current Affairs 2023-26',
          items: [
            '2024-25: Record NH construction pace — ~12,500 km/year target',
            '2024: FASTag penetration crosses 97%',
            '2025: EV highways — 12,000+ charging stations planned on NHs',
            '2024: Green corridor initiative — solar-powered toll plazas expanding',
            'NH-44 six-laning: multiple stretches completed 2023-25',
            'Amritsar-Jamnagar Expressway: major new EW link under construction',
            'Nagpur-Mumbai Expressway (Samruddhi Mahamarg): phases operational'
          ]
        }
      ],
      render: function (map, app) {
        // Major NHs
        var majorNHs = [
          {
            name: 'NH-44 (Srinagar→Kanyakumari)',
            path: [[34.08, 74.79], [32.73, 74.87], [30.73, 76.78], [28.61, 77.2], [27.18, 75.78], [26.92, 75.78], [23.26, 77.41], [21.15, 79.09], [17.38, 78.49], [15.35, 75.12], [12.97, 77.59], [10.0, 77.5], [8.08, 77.55]],
            color: '#E53935',
            length: '3,745 km',
            note: 'India\'s longest National Highway'
          },
          {
            name: 'NH-48/8 (Delhi→Mumbai)',
            path: [[28.61, 77.2], [26.92, 75.78], [24.58, 73.69], [23.02, 72.57], [21.17, 72.83], [19.07, 72.87]],
            color: '#42A5F5',
            length: '1,428 km',
            note: 'Major economic corridor'
          },
          {
            name: 'NH-2/19 (Delhi→Kolkata)',
            path: [[28.61, 77.2], [27.18, 77.97], [26.85, 80.91], [25.44, 81.85], [25.61, 85.14], [22.57, 88.36]],
            color: '#66BB6A',
            length: '1,465 km',
            note: 'GT Road alignment (historic)'
          },
          {
            name: 'NH-5/16 (Chennai→Kolkata)',
            path: [[13.08, 80.27], [15.83, 80.04], [17.69, 83.3], [20.27, 85.84], [21.5, 87.0], [22.57, 88.36]],
            color: '#FFA726',
            length: '1,684 km',
            note: 'East coast route'
          },
          {
            name: 'NH-27 (Porbandar→Silchar)',
            path: [[21.64, 69.6], [23.02, 72.57], [24.58, 73.69], [26.92, 75.78], [26.85, 80.91], [25.44, 81.85], [26.19, 91.75], [24.82, 92.78]],
            color: '#AB47BC',
            length: '3,507 km',
            note: '2nd longest NH (EW Corridor)'
          }
        ];

        majorNHs.forEach(function (nh) {
          var line = L.polyline(nh.path, {
            color: nh.color,
            weight: 3.5,
            opacity: 0.85
          }).addTo(map);
          line.bindPopup(app.buildPopup(
            nh.name,
            'Length: ' + nh.length + '<br>' + nh.note,
            ['NH', 'highway']
          ));
          app.addLayer(line);

          // Label at midpoint
          var midIdx = Math.floor(nh.path.length / 2);
          app.addLayer(app.labelMarker(
            [nh.path[midIdx][0] + 0.8, nh.path[midIdx][1]],
            nh.name.split('(')[0].trim(),
            nh.color,
            '9px'
          ));
        });

        // Major junction cities
        var junctions = [
          { name: 'Delhi', coords: [28.61, 77.2] },
          { name: 'Mumbai', coords: [19.07, 72.87] },
          { name: 'Chennai', coords: [13.08, 80.27] },
          { name: 'Kolkata', coords: [22.57, 88.36] },
          { name: 'Bengaluru', coords: [12.97, 77.59] },
          { name: 'Ahmedabad', coords: [23.02, 72.57] },
          { name: 'Jaipur', coords: [26.92, 75.78] },
          { name: 'Lucknow', coords: [26.85, 80.91] },
          { name: 'Nagpur', coords: [21.15, 79.09] },
          { name: 'Hyderabad', coords: [17.38, 78.49] },
          { name: 'Varanasi', coords: [25.32, 83.01] },
          { name: 'Agra', coords: [27.18, 77.97] },
          { name: 'Bhopal', coords: [23.26, 77.41] },
          { name: 'Patna', coords: [25.61, 85.14] },
          { name: 'Srinagar', coords: [34.08, 74.79] },
          { name: 'Kanyakumari', coords: [8.08, 77.55] },
          { name: 'Guwahati', coords: [26.19, 91.75] }
        ];

        junctions.forEach(function (j) {
          var m = L.circleMarker(j.coords, {
            radius: 6,
            color: '#000',
            fillColor: '#FFD700',
            fillOpacity: 0.9,
            weight: 2
          }).addTo(map);
          m.bindPopup(app.buildPopup(j.name, 'Major NH junction city', ['junction']));
          m.on('mouseover', function () { this.setRadius(10); });
          m.on('mouseout', function () { this.setRadius(6); });
          app.addLayer(m);

          app.addLayer(app.labelMarker(
            [j.coords[0] + 0.4, j.coords[1] + 0.4],
            j.name,
            '#FFD700',
            '9px'
          ));
        });

        // EV Charging hubs (new)
        var evHubs = [
          { name: 'Delhi-NCR EV Hub', coords: [28.5, 77.3] },
          { name: 'Mumbai-Pune EV Corridor', coords: [18.8, 73.3] },
          { name: 'Bengaluru EV Hub', coords: [13.0, 77.6] },
          { name: 'Chennai EV Hub', coords: [13.1, 80.3] },
          { name: 'Ahmedabad EV Hub', coords: [23.1, 72.6] },
          { name: 'Hyderabad EV Hub', coords: [17.4, 78.5] }
        ];

        evHubs.forEach(function (ev) {
          var m = L.circleMarker(ev.coords, {
            radius: 5,
            color: '#000',
            fillColor: '#00FF88',
            fillOpacity: 0.85,
            weight: 1.5
          }).addTo(map);
          m.bindPopup(app.buildPopup('⚡ ' + ev.name, 'EV charging infrastructure expanding<br>Part of green highways initiative', ['EV', '2025', 'green']));
          m.on('mouseover', function () { this.setRadius(9); });
          m.on('mouseout', function () { this.setRadius(5); });
          app.addLayer(m);
        });

        // Samruddhi Expressway (Nagpur-Mumbai)
        var samruddhi = L.polyline([
          [21.15, 79.09], [20.5, 77.5], [19.88, 75.32], [19.07, 72.87]
        ], {
          color: '#00FF88',
          weight: 3.5,
          opacity: 0.8
        }).addTo(map);
        samruddhi.bindPopup(app.buildPopup('Samruddhi Mahamarg (Nagpur-Mumbai)', '701 km expressway<br>Phases operational 2023-25', ['2024', 'expressway']));
        app.addLayer(samruddhi);
        app.addLayer(app.labelMarker([20.3, 76.5], 'Samruddhi Expy', '#00FF88', '9px'));

        // Info boxes
        app.addLayer(app.infoBox([30.0, 72.0],
          '<b style="color:#E53935">NH-44: India\'s Longest</b><br>' +
          'Srinagar → Kanyakumari<br>' +
          '3,745 km • Six-laning ongoing<br>' +
          'Connects 6 states + 2 UTs'
        ));

        app.addLayer(app.infoBox([15.0, 84.0],
          '<b style="color:#FFD700">NH Statistics 2025</b><br>' +
          'Total: ~1.45 lakh km<br>' +
          'FASTag: 97%+ penetration<br>' +
          'Construction: ~12,500 km/year'
        ));

        app.showToast('Map 100: Important NHs & Expressways loaded', 'success');
      }
    },

    // ─────────────────────────────────────────────────────────────
    // MAP 101 — INDIAN RAILWAY ZONES
    // ─────────────────────────────────────────────────────────────
    {
      mapNum: 101,
      title: 'Indian Railway Zones & Modern Infrastructure',
      subtitle: '18 Railway Zones, DFC, Vande Bharat, Bullet Train project',
      mapConfig: { center: [22.0, 80.0], zoom: 5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Railway Zones',
          items: [
            { dot: '#E53935', label: 'Northern / North Western' },
            { dot: '#42A5F5', label: 'Eastern / East Central' },
            { dot: '#66BB6A', label: 'Southern / South Central' },
            { dot: '#FFA726', label: 'Western / Central' },
            { dot: '#AB47BC', label: 'NE / NE Frontier' },
            { dot: '#00FF88', label: 'South Coast (18th Zone, New)' }
          ]
        },
        {
          sectionTitle: 'Modern Projects',
          items: [
            { line: '#00FF88', label: 'Western DFC (near complete)' },
            { line: '#FFA500', label: 'Eastern DFC (nearing ops)' },
            { line: '#FFD700', label: 'Bullet Train (under construction)' },
            { dot: '#4FC3F7', label: 'Vande Bharat Route' },
            { dot: '#00FF88', label: 'New 2024-25' }
          ]
        }
      ],
      info: [
        {
          title: 'Key Facts',
          facts: [
            { label: 'Railway Zones', value: '18 zones' },
            { label: 'Route km', value: '~68,000 km' },
            { label: 'Stations', value: '~7,300+' },
            { label: 'Daily passengers', value: '~23 million' },
            { label: 'Electrification', value: '~95%+ (2025)' },
            { label: 'Vande Bharat trains', value: '100+ by 2025' },
            { label: 'DFC total', value: '~3,360 km (Western + Eastern)' }
          ]
        },
        {
          title: 'UPSC Key Points',
          items: [
            '18 railway zones: South Coast Railway (Visakhapatnam) is newest (18th zone)',
            'Dedicated Freight Corridors: Western (1,504 km) + Eastern (1,856 km)',
            'Railway electrification: target 100% — already ~95%+ achieved',
            'Vande Bharat semi-high speed (160-200 km/h): 100+ trains operational/ordered',
            'Mumbai-Ahmedabad Bullet Train: 508 km, Shinkansen tech, under active construction',
            'Hydrogen train trials initiated — green energy push',
            'Kavach: indigenous automatic train protection system deployment'
          ]
        },
        {
          title: 'Current Affairs 2023-26',
          items: [
            '2024: Western DFC almost complete — transforming freight logistics',
            '2024-25: Eastern DFC nearing full operation',
            '2025: Vande Bharat Express: 100+ trains commissioned/ordered',
            '2024-25: Bullet Train Mumbai-Ahmedabad: tunneling + viaduct construction active',
            '2024: Railway electrification crosses 95% of broad gauge network',
            '2024: South Coast Railway Zone HQ at Visakhapatnam (18th zone functional)',
            '2025: Namo Bharat (RRTS) Delhi-Meerut: partially operational',
            'Kavach (TCAS) deployment expanding — collision prevention system'
          ]
        }
      ],
      render: function (map, app) {
        // Railway zone HQ markers
        DATA.railwayZones.forEach(function (zone) {
          var rad = zone.note ? 9 : 7;
          var marker = L.circleMarker(zone.coords, {
            radius: rad,
            color: '#000',
            fillColor: zone.color,
            fillOpacity: 0.9,
            weight: 2
          }).addTo(map);

          marker.bindPopup(app.buildPopup(
            '🚂 ' + zone.name,
            'HQ: ' + zone.hq + (zone.note ? '<br><b style="color:#00FF88">' + zone.note + '</b>' : ''),
            zone.note ? ['2024', 'new', 'railway'] : ['railway', 'zone']
          ));

          marker.on('mouseover', function () {
            this.setRadius(rad + 4);
            this.setStyle({ fillOpacity: 1, weight: 3 });
          });
          marker.on('mouseout', function () {
            this.setRadius(rad);
            this.setStyle({ fillOpacity: 0.9, weight: 2 });
          });

          app.addLayer(app.labelMarker(
            [zone.coords[0] + 0.5, zone.coords[1] + 0.5],
            zone.hq,
            zone.color,
            '9px'
          ));
        });

        // Western DFC
        var wdfc = L.polyline(DATA.dfcRoutes.western.coords, {
          color: DATA.dfcRoutes.western.color,
          weight: 5,
          opacity: 0.9
        }).addTo(map);
        wdfc.bindPopup(app.buildPopup(
          '🚛 Western DFC',
          'Length: ' + DATA.dfcRoutes.western.length + '<br>Status: ' + DATA.dfcRoutes.western.status + '<br>JNPT→Dadri (Uttar Pradesh)<br>Reduces freight transit by 50%',
          ['DFC', '2024', 'freight']
        ));
        app.addLayer(wdfc);
        app.addLayer(app.labelMarker([24.0, 73.0], 'Western DFC', '#00FF88', '11px'));

        // Eastern DFC
        var edfc = L.polyline(DATA.dfcRoutes.eastern.coords, {
          color: DATA.dfcRoutes.eastern.color,
          weight: 5,
          opacity: 0.85,
          dashArray: '10,4'
        }).addTo(map);
        edfc.bindPopup(app.buildPopup(
          '🚛 Eastern DFC',
          'Length: ' + DATA.dfcRoutes.eastern.length + '<br>Status: ' + DATA.dfcRoutes.eastern.status + '<br>Ludhiana→Dankuni<br>Coal + mineral corridor',
          ['DFC', '2024', 'freight']
        ));
        app.addLayer(edfc);
        app.addLayer(app.labelMarker([26.5, 82.5], 'Eastern DFC', '#FFA500', '11px'));

        // Bullet Train Mumbai-Ahmedabad
        var btLine = L.polyline(DATA.bulletTrain.route, {
          color: DATA.bulletTrain.color,
          weight: 4,
          opacity: 0.9,
          dashArray: '12,6'
        }).addTo(map);
        btLine.bindPopup(app.buildPopup(
          '🚄 Bullet Train (Mumbai-Ahmedabad)',
          'Length: ' + DATA.bulletTrain.length + '<br>Status: ' + DATA.bulletTrain.status + '<br>Shinkansen technology (Japan)<br>Max speed: 320 km/h<br>Estimated completion: 2028-29',
          ['bullet train', '2025', 'under construction']
        ));
        app.addLayer(btLine);
        app.addLayer(app.labelMarker([20.5, 73.3], '🚄 Bullet Train', '#FFD700', '11px'));

        // Vande Bharat representative routes
        var vandeBharatRoutes = [
          { from: [28.61, 77.2], to: [25.32, 83.01], name: 'Delhi-Varanasi' },
          { from: [28.61, 77.2], to: [30.73, 76.78], name: 'Delhi-Chandigarh' },
          { from: [13.08, 80.27], to: [9.92, 78.12], name: 'Chennai-Madurai' },
          { from: [19.07, 72.87], to: [15.35, 73.91], name: 'Mumbai-Goa' },
          { from: [22.57, 88.36], to: [25.61, 85.14], name: 'Kolkata-Patna' },
          { from: [23.02, 72.57], to: [19.07, 72.87], name: 'Ahmedabad-Mumbai' }
        ];

        vandeBharatRoutes.forEach(function (vb) {
          var line = L.polyline([vb.from, vb.to], {
            color: '#4FC3F7',
            weight: 2,
            opacity: 0.5,
            dashArray: '4,6'
          }).addTo(map);
          line.bindPopup(app.buildPopup('Vande Bharat: ' + vb.name, 'Semi-high speed train<br>160-200 km/h', ['Vande Bharat']));
          app.addLayer(line);
        });

        // Namo Bharat (RRTS) Delhi-Meerut
        var namo = L.polyline([[28.61, 77.2], [28.98, 77.7]], {
          color: '#00FF88',
          weight: 3,
          opacity: 0.8
        }).addTo(map);
        namo.bindPopup(app.buildPopup('Namo Bharat (RRTS)', 'Delhi-Meerut: 82 km<br>Partially operational 2024<br>India\'s first RRTS corridor', ['RRTS', '2024', 'new']));
        app.addLayer(namo);
        app.addLayer(app.labelMarker([29.0, 77.8], 'Namo Bharat RRTS', '#00FF88', '9px'));

        // DFC Info box
        app.addLayer(app.infoBox([27.0, 70.0],
          '<b style="color:#00FF88">Dedicated Freight Corridors</b><br>' +
          'Western: 1,504 km (near complete)<br>' +
          'Eastern: 1,856 km (nearing ops)<br>' +
          '<span style="color:#FFD700">Game-changer for logistics</span>'
        ));

        // Electrification info
        app.addLayer(app.infoBox([18.0, 85.0],
          '<b style="color:#4FC3F7">Railway Electrification</b><br>' +
          '~95%+ of BG electrified (2025)<br>' +
          'Target: 100% by 2025-26<br>' +
          'Net-zero railway commitment'
        ));

        // Kavach marker
        app.addLayer(app.circleMarker([22.0, 77.0], { radius: 5, color: '#00FF88', borderColor: '#000' }));
        app.addLayer(app.labelMarker([22.5, 77.0], 'Kavach TCAS (deploying)', '#00FF88', '9px'));

        app.showToast('Map 101: Indian Railway Zones loaded', 'success');
      }
    },

    // ─────────────────────────────────────────────────────────────
    // MAP 102 — AIRPORTS OF INDIA
    // ─────────────────────────────────────────────────────────────
    {
      mapNum: 102,
      title: 'Airports of India — Aviation Infrastructure',
      subtitle: '3rd largest aviation market, greenfield airports, UDAN scheme',
      mapConfig: { center: [22.0, 80.0], zoom: 5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Airport Categories',
          items: [
            { dot: '#4FC3F7', label: 'Major International Airport' },
            { dot: '#00FF88', label: 'New/Recent (2023-25)' },
            { dot: '#FFA500', label: 'Under Construction/Greenfield' },
            { dot: '#FFEB3B', label: 'UDAN Scheme Airport' },
            { dot: '#AB47BC', label: 'Defense Conversion Airport' }
          ]
        },
        {
          sectionTitle: 'Current Affairs',
          items: [
            { dot: '#00FF88', label: 'T2 Bengaluru (2023)' },
            { dot: '#FFA500', label: 'Jewar NIA (2025-26)' },
            { dot: '#FFA500', label: 'Navi Mumbai (nearing)' }
          ]
        }
      ],
      info: [
        {
          title: 'Key Facts',
          facts: [
            { label: 'Aviation market rank', value: '3rd largest globally (2025)' },
            { label: 'Total airports', value: '~150 operational (civil)' },
            { label: 'International airports', value: '~30' },
            { label: 'AAI airports', value: '~137 managed' },
            { label: 'UDAN connectivity', value: '70+ airports connected' },
            { label: 'Passenger traffic', value: '~380 million (2024-25)' },
            { label: 'Delhi IGI', value: 'Busiest (73.7M pax)' }
          ]
        },
        {
          title: 'UPSC Key Points',
          items: [
            'India: 3rd largest aviation market globally (after USA, China) in 2025',
            'UDAN (Ude Desh ka Aam Nagrik): regional connectivity scheme, 70+ airports',
            'Greenfield airports: Jewar (Noida), Navi Mumbai, Dholera, Bhogapuram',
            'Kempegowda Bengaluru T2 opened 2023 — world-class terminal',
            'AAI modernizing 50+ airports — terminal expansion, runway upgrades',
            'Renewable energy at airports: solar power adoption (Cochin 100% solar)',
            'Open sky policy, bilateral agreements expanding international connectivity'
          ]
        },
        {
          title: 'Current Affairs 2023-26',
          items: [
            '2023: Kempegowda Bengaluru Terminal 2 opened — iconic design',
            '2025-26: Jewar (Noida International Airport) — under construction, India\'s largest planned',
            '2025: Navi Mumbai Airport nearing completion — relieve BOM congestion',
            '2024: Mopa Goa (Manohar International) fully operational',
            'Dholera International Airport: greenfield, Gujarat — linked to DMIC',
            'UDAN scheme: 70+ airports connected, several in NE India',
            'India targeting 300+ airports by 2030 (NABH Nirman)'
          ]
        }
      ],
      render: function (map, app) {
        // Major airports
        DATA.airportsIndia.major.forEach(function (apt) {
          var paxNum = parseFloat(apt.pax);
          var rad = isNaN(paxNum) ? 7 : Math.max(6, Math.min(12, paxNum / 8));

          var marker = L.circleMarker(apt.coords, {
            radius: rad,
            color: '#000',
            fillColor: apt.color,
            fillOpacity: 0.9,
            weight: 2
          }).addTo(map);

          marker.bindPopup(app.buildPopup(
            '✈ ' + apt.name,
            'Passengers: ' + apt.pax + '/year' + (apt.note ? '<br>' + apt.note : ''),
            apt.color === '#00FF88' ? ['2023', 'new', 'airport'] : ['airport', 'major']
          ));

          marker.on('mouseover', function () {
            this.setRadius(rad + 4);
            this.setStyle({ fillOpacity: 1, weight: 3 });
          });
          marker.on('mouseout', function () {
            this.setRadius(rad);
            this.setStyle({ fillOpacity: 0.9, weight: 2 });
          });

          app.addLayer(app.labelMarker(
            [apt.coords[0] + 0.5, apt.coords[1] + 0.5],
            apt.name.split('(')[0].trim(),
            apt.color,
            rad >= 9 ? '10px' : '9px'
          ));
        });

        // Upcoming airports (under construction)
        DATA.airportsIndia.upcoming.forEach(function (apt) {
          // Dashed ring for under construction
          var ring = L.circleMarker(apt.coords, {
            radius: 14,
            color: apt.color,
            fillColor: apt.color,
            fillOpacity: 0.15,
            weight: 2,
            dashArray: '6,4'
          }).addTo(map);
          app.addLayer(ring);

          var marker = L.circleMarker(apt.coords, {
            radius: 8,
            color: '#000',
            fillColor: apt.color,
            fillOpacity: 0.9,
            weight: 2
          }).addTo(map);

          marker.bindPopup(app.buildPopup(
            '🏗 ' + apt.name,
            'Status: ' + apt.status,
            ['under construction', '2025', 'greenfield']
          ));

          marker.on('mouseover', function () { this.setRadius(12); });
          marker.on('mouseout', function () { this.setRadius(8); });
          app.addLayer(marker);

          app.addLayer(app.labelMarker(
            [apt.coords[0] - 0.6, apt.coords[1]],
            '🏗 ' + apt.name.split('(')[0].trim(),
            apt.color,
            '10px'
          ));
        });

        // UDAN airports
        DATA.airportsIndia.udan.forEach(function (apt) {
          var marker = L.circleMarker(apt.coords, {
            radius: 5,
            color: '#000',
            fillColor: apt.color,
            fillOpacity: 0.85,
            weight: 1.5
          }).addTo(map);

          marker.bindPopup(app.buildPopup(
            'UDAN: ' + apt.name,
            'Regional Connectivity Scheme airport<br>Affordable air travel to smaller cities',
            ['UDAN', 'regional']
          ));

          marker.on('mouseover', function () { this.setRadius(9); });
          marker.on('mouseout', function () { this.setRadius(5); });
          app.addLayer(marker);

          app.addLayer(app.labelMarker(
            [apt.coords[0] + 0.3, apt.coords[1] + 0.3],
            apt.name,
            apt.color,
            '8px'
          ));
        });

        // Connectivity lines (hub-spoke from Delhi and Mumbai)
        var hubSpoke = [
          [[28.56, 77.1], [19.09, 72.87]],
          [[28.56, 77.1], [13.2, 77.71]],
          [[28.56, 77.1], [22.65, 88.45]],
          [[28.56, 77.1], [17.24, 78.43]],
          [[19.09, 72.87], [13.2, 77.71]],
          [[19.09, 72.87], [12.99, 80.17]],
          [[19.09, 72.87], [10.15, 76.39]]
        ];

        hubSpoke.forEach(function (hs) {
          var line = L.polyline(hs, {
            color: '#4FC3F7',
            weight: 1,
            opacity: 0.2,
            dashArray: '3,6'
          }).addTo(map);
          app.addLayer(line);
        });

        // Jewar special info box
        app.addLayer(app.infoBox([29.5, 79.0],
          '<b style="color:#FFA500">🏗 Jewar (Noida Intl) Airport</b><br>' +
          'India\'s largest planned airport<br>' +
          'Phase ops: 2025-26<br>' +
          '<span style="color:#FFD700">70M pax capacity (full build)</span>'
        ));

        // Bengaluru T2 info
        app.addLayer(app.infoBox([11.5, 79.0],
          '<b style="color:#00FF88">🆕 Bengaluru T2 (2023)</b><br>' +
          'World-class terminal opened<br>' +
          'Inspired by Kempe Gowda\'s garden city<br>' +
          'Capacity: 25M pax/year additional'
        ));

        // UDAN scheme info
        app.addLayer(app.infoBox([27.0, 86.0],
          '<b style="color:#FFEB3B">UDAN Scheme</b><br>' +
          '70+ airports connected<br>' +
          'Affordable regional connectivity<br>' +
          'Focus: NE India, hill states, islands'
        ));

        // India aviation rank
        app.addLayer(app.infoBox([18.0, 68.0],
          '<b style="color:#4FC3F7">India Aviation 2025</b><br>' +
          '3rd largest market globally<br>' +
          '~380M passengers (2024-25)<br>' +
          'Target: 300+ airports by 2030'
        ));

        app.showToast('Map 102: Airports of India loaded', 'success');
      }
    },

    // ─────────────────────────────────────────────────────────────
    // MAP 103 — WORLD AGRICULTURE ZONES
    // ─────────────────────────────────────────────────────────────
    {
      mapNum: 103,
      title: 'World Agriculture — Major Crop Zones & Trade',
      subtitle: 'Wheat, rice, soybean, coffee, rubber zones & Black Sea grain crisis',
      mapConfig: { center: [20.0, 30.0], zoom: 2, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Crop Zones',
          items: [
            { dot: '#FFCA28', label: 'Wheat Belt' },
            { dot: '#66BB6A', label: 'Rice Belt' },
            { dot: '#FF7043', label: 'Soybean Belt' },
            { dot: '#8D6E63', label: 'Coffee Zone' },
            { dot: '#4CAF50', label: 'Natural Rubber Zone' }
          ]
        },
        {
          sectionTitle: 'Crisis & Trade',
          items: [
            { dot: '#FF6B6B', label: 'Black Sea Crisis (2023)' },
            { dot: '#00FF88', label: 'New 2024-25 Change' },
            { dot: '#FFA500', label: 'El Niño Impact Zone' }
          ]
        }
      ],
      info: [
        {
          title: 'Key Facts',
          facts: [
            { label: 'Top wheat producers', value: 'China, India, Russia, USA, France' },
            { label: 'Top rice producers', value: 'China, India, Bangladesh, Indonesia' },
            { label: 'Top soybean exporter', value: 'Brazil (surpassed USA 2023)' },
            { label: 'World food trade', value: '~$1.8 trillion (2024)' },
            { label: 'Global grain routes', value: 'Black Sea, Gulf of Mexico, SE Asia' },
            { label: 'India rubber', value: 'Kerala dominant, declining trend' },
            { label: 'Global fertilizer crisis', value: 'Russia/Belarus sanctions impact' }
          ]
        },
        {
          title: 'UPSC Key Points',
          items: [
            'Wheat: temperate grasslands — USA Great Plains, Canadian Prairies, Indo-Gangetic, Steppe',
            'Rice: tropical/subtropical monsoon — Indo-Gangetic, Mekong Delta, Yangtze basin',
            'Soybean: Brazil Cerrado now top global exporter, surpassing USA (2023)',
            'Coffee: tropical highlands — Brazil (world\'s largest), Colombia, Ethiopia, Vietnam',
            'Natural rubber: equatorial regions — Thailand #1, Kerala declining in India',
            'Black Sea Grain Initiative suspended Jul 2023 → global grain trade disrupted',
            'El Niño 2023-24 → crop failures in Australia, S. America, SE Asia'
          ]
        },
        {
          title: 'Current Affairs 2023-26',
          items: [
            '2023: Black Sea Grain Initiative suspended → Ukraine grain routes disrupted',
            '2023-24: India rice export ban → global rice prices surged 30%+',
            '2023: Brazil surpassed USA as top soybean exporter',
            '2023-24: El Niño caused crop failures — Australia, SE Asia, S. America',
            '2024: Global fertilizer crisis persists — Russia/Belarus sanctions',
            'Africa: "Future food zone" — CGIAR investment in agriculture R&D',
            'India: wheat buffer policy changes, MSP debates continue',
            'India natural rubber: Kerala dominates but production declining vs SE Asia'
          ]
        }
      ],
      render: function (map, app) {
        // Wheat belt markers
        DATA.worldAgriculture.wheatBelt.forEach(function (w) {
          var marker = L.circleMarker(w.coords, {
            radius: 9,
            color: '#000',
            fillColor: w.color,
            fillOpacity: 0.85,
            weight: 2
          }).addTo(map);

          marker.bindPopup(app.buildPopup(
            '🌾 Wheat: ' + w.name,
            'Major wheat producing region' + (w.note ? '<br><b style="color:#FF6B6B">' + w.note + '</b>' : ''),
            w.note ? ['wheat', '2023', 'crisis'] : ['wheat', 'agriculture']
          ));

          marker.on('mouseover', function () { this.setRadius(13); this.setStyle({ fillOpacity: 1 }); });
          marker.on('mouseout', function () { this.setRadius(9); this.setStyle({ fillOpacity: 0.85 }); });

          app.addLayer(app.labelMarker(
            [w.coords[0] + 2, w.coords[1]],
            w.name,
            w.color,
            '9px'
          ));
        });

        // Rice belt markers
        DATA.worldAgriculture.riceBelt.forEach(function (r) {
          var marker = L.circleMarker(r.coords, {
            radius: 8,
            color: '#000',
            fillColor: r.color,
            fillOpacity: 0.85,
            weight: 2
          }).addTo(map);

          marker.bindPopup(app.buildPopup(
            '🍚 Rice: ' + r.name,
            'Major rice producing region' + (r.note ? '<br><b style="color:#FF6B6B">' + r.note + '</b>' : ''),
            r.note ? ['rice', '2023', 'export ban'] : ['rice', 'agriculture']
          ));

          marker.on('mouseover', function () { this.setRadius(12); });
          marker.on('mouseout', function () { this.setRadius(8); });

          app.addLayer(app.labelMarker(
            [r.coords[0] - 2.5, r.coords[1]],
            r.name,
            r.color,
            '9px'
          ));
        });

        // Soybean belt markers
        DATA.worldAgriculture.soybeanBelt.forEach(function (s) {
          var marker = L.circleMarker(s.coords, {
            radius: 9,
            color: '#000',
            fillColor: s.color,
            fillOpacity: 0.85,
            weight: 2
          }).addTo(map);

          marker.bindPopup(app.buildPopup(
            '🫘 Soybean: ' + s.name,
            'Major soybean zone' + (s.note ? '<br><b style="color:#00FF88">' + s.note + '</b>' : ''),
            s.note ? ['soybean', '2023', 'new'] : ['soybean']
          ));

          marker.on('mouseover', function () { this.setRadius(13); });
          marker.on('mouseout', function () { this.setRadius(9); });

          app.addLayer(app.labelMarker(
            [s.coords[0] + 2.5, s.coords[1]],
            s.name,
            s.color,
            '9px'
          ));
        });

        // Coffee zones
        DATA.worldAgriculture.coffeeZones.forEach(function (c) {
          var marker = L.circleMarker(c.coords, {
            radius: 7,
            color: '#000',
            fillColor: c.color,
            fillOpacity: 0.85,
            weight: 2
          }).addTo(map);

          marker.bindPopup(app.buildPopup('☕ Coffee: ' + c.name, 'Major coffee producing zone', ['coffee']));
          marker.on('mouseover', function () { this.setRadius(11); });
          marker.on('mouseout', function () { this.setRadius(7); });

          app.addLayer(app.labelMarker([c.coords[0] - 2, c.coords[1]], c.name, c.color, '9px'));
        });

        // Rubber zones
        DATA.worldAgriculture.rubberZones.forEach(function (r) {
          var marker = L.circleMarker(r.coords, {
            radius: 7,
            color: '#000',
            fillColor: r.color,
            fillOpacity: 0.85,
            weight: 2
          }).addTo(map);

          marker.bindPopup(app.buildPopup(
            '🌳 Rubber: ' + r.name,
            'Natural rubber zone' + (r.note ? '<br>' + r.note : ''),
            ['rubber']
          ));
          marker.on('mouseover', function () { this.setRadius(11); });
          marker.on('mouseout', function () { this.setRadius(7); });
        });

        // Black Sea Grain Crisis zone
        var bsCircle = L.circle([46.5, 33.0], {
          radius: 500000,
          color: '#FF6B6B',
          fillColor: '#FF6B6B',
          fillOpacity: 0.15,
          weight: 2,
          dashArray: '8,4'
        }).addTo(map);
        bsCircle.bindPopup(app.buildPopup(
          '⚠ Black Sea Grain Crisis',
          'Grain Initiative suspended Jul 2023<br>Ukraine grain exports disrupted<br>Global wheat, corn, sunflower oil prices surged<br>Alternate routes via Romania, Georgia',
          ['2023', 'crisis', 'grain', 'Ukraine']
        ));
        app.addLayer(bsCircle);

        // Grain route lines
        DATA.blackSeaCrisis.grainRoutes.forEach(function (gr) {
          var line = L.polyline([gr.from, gr.to], {
            color: gr.color,
            weight: 3,
            opacity: 0.7,
            dashArray: '6,4'
          }).addTo(map);
          line.bindPopup(app.buildPopup(gr.label, 'Black Sea grain route', ['grain', 'crisis']));
          app.addLayer(line);
        });

        // El Niño impact zones
        var elNinoZones = [
          { name: 'Australia (drought)', coords: [-28.0, 140.0] },
          { name: 'SE Asia (dry)', coords: [5.0, 115.0] },
          { name: 'S. America (floods)', coords: [-20.0, -55.0] },
          { name: 'E. Africa (floods)', coords: [0, 38.0] }
        ];

        elNinoZones.forEach(function (ez) {
          var m = L.circleMarker(ez.coords, {
            radius: 10,
            color: '#FFA500',
            fillColor: '#FFA500',
            fillOpacity: 0.2,
            weight: 2,
            dashArray: '4,4'
          }).addTo(map);
          m.bindPopup(app.buildPopup('El Niño 2023-24: ' + ez.name, 'Climate-driven crop impact', ['El Niño', '2023', 'climate']));
          app.addLayer(m);
          app.addLayer(app.labelMarker([ez.coords[0] - 3, ez.coords[1]], 'El Niño: ' + ez.name, '#FFA500', '9px'));
        });

        // India rice export ban info
        app.addLayer(app.infoBox([30.0, 80.0],
          '<b style="color:#FF6B6B">India Rice Export Ban</b><br>' +
          '2023-24: Non-basmati ban<br>' +
          'Global rice prices surged 30%+<br>' +
          '<span style="color:#FFEB3B">India = 40% of world rice exports</span>'
        ));

        // Black Sea crisis info
        app.addLayer(app.infoBox([52.0, 35.0],
          '<b style="color:#FF6B6B">⚠ Black Sea Crisis 2023</b><br>' +
          'Grain Initiative suspended Jul 2023<br>' +
          'Ukraine wheat/corn disrupted<br>' +
          'Global food security threatened'
        ));

        // Brazil soybean info
        app.addLayer(app.infoBox([-8.0, -55.0],
          '<b style="color:#00FF88">Brazil 2023</b><br>' +
          'Top soybean exporter (surpassed USA)<br>' +
          'Cerrado expansion driving growth<br>' +
          '<span style="color:#FFA500">Deforestation concerns</span>'
        ));

        // Global fertilizer crisis
        app.addLayer(app.infoBox([60.0, 55.0],
          '<b style="color:#FF6B6B">Fertilizer Crisis</b><br>' +
          'Russia/Belarus sanctions 2022+<br>' +
          '~30% of global potash disrupted<br>' +
          'African farming hardest hit'
        ));

        // Tropic of Cancer & Capricorn for reference
        L.polyline([[23.43, -180], [23.43, 180]], {
          color: '#FFD700', weight: 0.5, opacity: 0.3, dashArray: '4,8'
        }).addTo(map);
        L.polyline([[-23.43, -180], [-23.43, 180]], {
          color: '#FFD700', weight: 0.5, opacity: 0.3, dashArray: '4,8'
        }).addTo(map);
        app.addLayer(app.labelMarker([23.43, -140], 'Tropic of Cancer', '#FFD700', '8px'));
        app.addLayer(app.labelMarker([-23.43, -140], 'Tropic of Capricorn', '#FFD700', '8px'));

        app.showToast('Map 103: World Agriculture Zones loaded', 'success');
      }
    }

  ];

  // ═══════════════════════════════════════════════════════════════
  // REGISTER
  // ═══════════════════════════════════════════════════════════════

  window.registerMaps('economic', MAPS);
  console.log('economic-maps.js: registered ' + MAPS.length + ' maps');

})();
