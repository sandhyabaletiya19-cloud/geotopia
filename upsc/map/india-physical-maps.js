/**
 * ═══════════════════════════════════════════════════════════════
 * DHARAVERSE UPSC MAPS — INDIA PHYSICAL MAPS
 * MAP 001 to MAP 010 | Complete UPSC Physical Geography
 * All mountains, plains, plateaus, coasts, islands
 * Version 2026 | Gateway to IAS
 * ═══════════════════════════════════════════════════════════════
 */

(function () {

  // ══════════════════════════════════════════════════════════════
  // SHARED DATA BANK — INDIA PHYSICAL
  // ══════════════════════════════════════════════════════════════

  const DATA = {

    // ── STATE BOUNDARIES (simplified polygon points) ──
    indiaBoundary: [
      [35.5, 77.8], [35.0, 78.5], [34.5, 78.8], [34.2, 79.5],
      [33.9, 80.2], [33.5, 81.0], [33.2, 82.0], [32.8, 84.0],
      [32.5, 85.0], [32.0, 86.0], [31.5, 87.0], [31.2, 88.0],
      [31.0, 88.5], [30.2, 89.0], [29.5, 89.5], [28.5, 90.5],
      [27.8, 91.5], [27.3, 92.0], [27.0, 93.0], [26.8, 94.0],
      [26.5, 95.0], [26.0, 96.0], [25.5, 97.0], [24.5, 97.5],
      [23.8, 97.0], [23.0, 96.5], [22.0, 96.0], [21.5, 95.5],
      [20.5, 95.0], [20.0, 94.5], [19.5, 93.5], [18.5, 93.0],
      [17.5, 93.5], [16.5, 94.0], [15.5, 94.0], [14.5, 93.5],
      [13.5, 93.0], [12.5, 92.5], [10.5, 92.0], [8.5, 77.5],
      [8.0, 77.0], [8.5, 76.5], [9.0, 76.0], [10.0, 75.5],
      [11.0, 75.0], [12.0, 74.5], [13.0, 74.5], [14.0, 74.0],
      [15.0, 73.8], [16.0, 73.5], [17.0, 73.0], [18.0, 72.8],
      [19.0, 72.6], [20.0, 72.5], [21.0, 72.0], [21.5, 71.5],
      [22.0, 71.0], [22.5, 70.5], [23.0, 70.0], [23.5, 69.5],
      [23.7, 68.5], [24.0, 68.0], [24.5, 67.5], [25.0, 67.0],
      [25.5, 66.5], [26.0, 66.0], [26.5, 67.0], [27.0, 68.0],
      [27.5, 69.0], [28.0, 70.0], [28.5, 71.5], [29.0, 72.5],
      [29.5, 73.0], [30.0, 73.5], [30.5, 74.0], [31.0, 74.5],
      [31.5, 75.0], [32.0, 75.5], [32.5, 76.0], [33.0, 76.5],
      [33.5, 77.0], [34.0, 77.5], [34.5, 77.8], [35.5, 77.8]
    ],

    // ── MAJOR PEAKS ──
    peaks: [
      { name: 'K2', lat: 35.88, lng: 76.51, elev: '8,611 m', range: 'Karakoram', upsc: 'Second highest peak in world, in PoK' },
      { name: 'Kangchenjunga', lat: 27.70, lng: 88.15, elev: '8,586 m', range: 'Eastern Himalayas', upsc: 'Highest peak in India, Sikkim-Nepal border' },
      { name: 'Nanda Devi', lat: 30.38, lng: 79.96, elev: '7,816 m', range: 'Garhwal Himalayas', upsc: 'Highest peak entirely in India' },
      { name: 'Kamet', lat: 30.92, lng: 79.59, elev: '7,756 m', range: 'Garhwal Himalayas', upsc: 'Second highest in Uttarakhand' },
      { name: 'Saltoro Kangri', lat: 35.40, lng: 76.85, elev: '7,742 m', range: 'Karakoram', upsc: 'In Siachen area' },
      { name: 'Saser Kangri', lat: 34.84, lng: 77.75, elev: '7,672 m', range: 'Karakoram', upsc: 'Ladakh' },
      { name: 'Mamostong Kangri', lat: 35.09, lng: 76.97, elev: '7,516 m', range: 'Karakoram', upsc: 'Eastern Karakoram' },
      { name: 'Rimo Sar', lat: 35.18, lng: 77.08, elev: '7,385 m', range: 'Karakoram', upsc: 'Ladakh' },
      { name: 'Hardeol', lat: 30.41, lng: 80.00, elev: '7,151 m', range: 'Kumaon Himalayas', upsc: 'Uttarakhand' },
      { name: 'Chaukhamba', lat: 30.89, lng: 79.45, elev: '7,138 m', range: 'Garhwal', upsc: 'Source of Gangotri Glacier' },
      { name: 'Trisul', lat: 30.31, lng: 79.78, elev: '7,120 m', range: 'Kumaon', upsc: 'Near Nanda Devi' },
      { name: 'Dunagiri', lat: 30.54, lng: 79.89, elev: '7,066 m', range: 'Garhwal', upsc: 'Uttarakhand' },
      { name: 'Mount Everest', lat: 27.99, lng: 86.93, elev: '8,849 m', range: 'Mahalangur Himalayas', upsc: 'Highest in world, Nepal-Tibet border' },
      { name: 'Doda Betta', lat: 11.40, lng: 76.73, elev: '2,637 m', range: 'Nilgiris', upsc: 'Highest in Tamil Nadu' },
      { name: 'Anamudi', lat: 10.17, lng: 77.07, elev: '2,695 m', range: 'Western Ghats', upsc: 'Highest in Peninsular India, Kerala' },
      { name: 'Guru Shikhar', lat: 24.66, lng: 72.77, elev: '1,722 m', range: 'Aravalli', upsc: 'Highest in Aravalli range, Rajasthan' },
      { name: 'Sandakphu', lat: 27.10, lng: 88.00, elev: '3,636 m', range: 'Singalila', upsc: 'Highest in West Bengal' },
      { name: 'Namcha Barwa', lat: 29.63, lng: 95.03, elev: '7,782 m', range: 'Eastern Himalayas', upsc: 'Eastern anchor of Himalayas' }
    ],

    // ── MOUNTAIN PASSES ──
    passes: [
      { name: 'Karakoram Pass', lat: 35.51, lng: 77.84, elev: '5,540 m', connects: 'India-China (Xinjiang)', strategic: 'Ancient trade route to Central Asia' },
      { name: 'Chang La', lat: 33.98, lng: 77.59, elev: '5,360 m', connects: 'Leh to Pangong Lake', strategic: 'World\'s 3rd highest motorable road' },
      { name: 'Khardung La', lat: 34.28, lng: 77.60, elev: '5,359 m', connects: 'Leh to Nubra Valley', strategic: 'One of highest motorable passes' },
      { name: 'Rohtang Pass', lat: 32.37, lng: 77.24, elev: '3,978 m', connects: 'Kullu to Lahaul-Spiti', strategic: 'NH-3, closed in winter' },
      { name: 'Zoji La', lat: 34.22, lng: 75.47, elev: '3,528 m', connects: 'Srinagar to Leh', strategic: 'Only pass connecting Kashmir to Ladakh' },
      { name: 'Bara Lacha La', lat: 32.74, lng: 77.39, elev: '4,890 m', connects: 'Lahaul to Leh', strategic: 'On Manali-Leh highway' },
      { name: 'Nathu La', lat: 27.39, lng: 88.83, elev: '4,310 m', connects: 'Sikkim to Tibet', strategic: 'India-China trade route, border post' },
      { name: 'Jelep La', lat: 27.29, lng: 88.80, elev: '4,267 m', connects: 'Sikkim to Tibet', strategic: 'Near Nathu La, historical trade route' },
      { name: 'Bomdi La', lat: 27.26, lng: 92.41, elev: '2,415 m', connects: 'Arunachal to Tibet', strategic: 'Key pass in Arunachal Pradesh' },
      { name: 'Diphu Pass', lat: 28.20, lng: 97.36, elev: '4,587 m', connects: 'Arunachal to Myanmar', strategic: 'Trijunction India-China-Myanmar' },
      { name: 'Shipki La', lat: 31.76, lng: 78.77, elev: '4,608 m', connects: 'Himachal to Tibet', strategic: 'Sutlej river enters India here' },
      { name: 'Lipu Lekh', lat: 30.23, lng: 80.95, elev: '5,334 m', connects: 'Uttarakhand to Tibet', strategic: 'Kailash Mansarovar route, disputed' },
      { name: 'Mana Pass', lat: 30.89, lng: 79.56, elev: '5,610 m', connects: 'Uttarakhand to Tibet', strategic: 'Near Badrinath' },
      { name: 'Niti Pass', lat: 30.73, lng: 80.04, elev: '5,068 m', connects: 'Uttarakhand to Tibet', strategic: 'Kumaon Himalayas' },
      { name: 'Thaga La', lat: 27.85, lng: 89.27, elev: '4,800 m', connects: 'Arunachal to Bhutan', strategic: 'Disputed with China' },
      { name: 'Sela Pass', lat: 27.52, lng: 92.04, elev: '4,170 m', connects: 'Tawang to Guwahati', strategic: 'Strategic in 1962 war' },
      { name: 'Palakkad Gap', lat: 10.78, lng: 76.65, elev: '140 m', connects: 'Kerala to Tamil Nadu', strategic: 'Only major gap in Western Ghats, SW monsoon entry' }
    ],

    // ── PHYSIOGRAPHIC REGIONS ──
    physiographicRegions: [
      {
        id: 'northern-mountains',
        name: 'Northern Mountain Wall',
        color: '#8B4513',
        fillColor: '#8B4513',
        description: 'The Great Himalayan System — world\'s youngest & highest mountains',
        area: '5,00,000 sq km',
        length: '2,400 km',
        width: '150-400 km',
        includes: ['Greater Himalayas', 'Middle Himalayas', 'Outer Himalayas', 'Trans-Himalayas', 'Karakoram', 'Hindukush'],
        upscFacts: [
          'Formed by collision of Indian & Eurasian plates',
          'Age: ~50 million years (young fold mountains)',
          'Still rising at ~5 mm per year',
          'Source of perennial rivers — lifeline of India'
        ],
        coords: [
          [36, 70], [36, 80], [36, 88], [35, 92], [33, 96],
          [29, 97], [27, 95], [26.5, 92], [26.5, 88],
          [27, 85], [27.5, 82], [28, 78], [30, 76],
          [32, 74], [34, 72], [35, 71], [36, 70]
        ]
      },
      {
        id: 'northern-plains',
        name: 'Northern Plains',
        color: '#DAA520',
        fillColor: '#DAA520',
        description: 'Great Indo-Gangetic-Brahmaputra Plains — world\'s largest alluvial plains',
        area: '7,00,000 sq km',
        length: '3,200 km',
        width: '150-300 km',
        includes: ['Punjab Plains', 'Haryana Plains', 'Gangetic Plains', 'Brahmaputra Plains'],
        upscFacts: [
          'Formed by deposition of Himalayan rivers',
          'Age: Quaternary (very recent geologically)',
          'World\'s most fertile agricultural land',
          'Home to 40% of India\'s population'
        ],
        coords: [
          [30, 76], [28, 78], [27.5, 82], [27, 85],
          [26.5, 88], [26.5, 92], [27, 95],
          [25, 95], [24, 91], [23, 88], [23, 85],
          [24, 82], [24, 78], [25, 76], [27, 75],
          [28, 73], [29, 72], [29.5, 73], [30, 74], [30, 76]
        ]
      },
      {
        id: 'peninsular-plateau',
        name: 'Peninsular Plateau',
        color: '#CD853F',
        fillColor: '#CD853F',
        description: 'Oldest landmass — part of ancient Gondwanaland supercontinent',
        area: '16,00,000 sq km',
        includes: ['Deccan Plateau', 'Central Highlands', 'Chota Nagpur', 'Malwa Plateau'],
        upscFacts: [
          'Oldest & most stable geological unit of India',
          'Part of ancient Gondwana supercontinent',
          'Rich in mineral deposits — coal, iron, bauxite',
          'Covered by Deccan Traps (volcanic basalt)'
        ],
        coords: [
          [24, 82], [24, 78], [25, 76], [23, 73],
          [22, 73], [21, 72.5], [20, 72.5],
          [18, 73], [16, 73.5], [14, 74.5],
          [12, 75], [10, 76], [8.5, 77.5],
          [10, 80], [12, 80.5], [14, 80],
          [16, 80.5], [18, 83], [19, 85],
          [20, 86.5], [21, 86], [22, 87],
          [23, 87], [24, 85], [24, 82]
        ]
      },
      {
        id: 'coastal-plains',
        name: 'Coastal Plains',
        color: '#20B2AA',
        fillColor: '#20B2AA',
        description: 'Eastern & Western coastal strips bordering Arabian Sea & Bay of Bengal',
        area: '1,00,000 sq km',
        upscFacts: [
          'Western coast: narrow, rocky, steep — 10-25 km wide',
          'Eastern coast: broad, deltaic, fertile — 100-130 km wide',
          'Major deltas: Mahanadi, Godavari, Krishna, Kaveri'
        ],
        coords: []
      },
      {
        id: 'thar-desert',
        name: 'Thar Desert / Arid Region',
        color: '#F4A460',
        fillColor: '#F4A460',
        description: 'Great Indian Desert — 7th largest desert in world',
        area: '2,00,000 sq km',
        upscFacts: [
          'Annual rainfall < 150 mm',
          'Hottest part of India in summer',
          'Inhabited — 83 persons per sq km (high density desert)',
          'Indira Gandhi Canal brings water from Sutlej-Beas'
        ],
        coords: [
          [29.5, 73], [29, 72], [28, 73], [27, 75],
          [25, 76], [23, 73], [22, 72],
          [23, 70], [24, 69], [25, 68.5],
          [26, 69], [27, 70], [27.5, 71],
          [28, 72], [28.5, 72.5], [29.5, 73]
        ]
      },
      {
        id: 'islands',
        name: 'Islands',
        color: '#00CED1',
        fillColor: '#00CED1',
        description: 'Andaman & Nicobar + Lakshadweep Island groups',
        upscFacts: [
          'Andaman & Nicobar: 572 islands, Bay of Bengal',
          'Lakshadweep: 36 islands, Arabian Sea',
          'Andaman — submerged hill ranges of Arakan Yoma',
          'Lakshadweep — coral origin'
        ],
        coords: []
      }
    ],

    // ── HIMALAYAN RANGES ──
    himalayanRanges: [
      {
        name: 'Trans-Himalaya (Tethys)',
        color: '#4B0082',
        description: 'Northernmost zone — Karakoram, Ladakh, Zanskar ranges',
        avgHeight: '3,000-5,000 m',
        features: 'Sparsely vegetated, cold desert, Tibetan plateau edge',
        coords: [
          [35.5, 77.8], [35.0, 80], [34.5, 83],
          [34.0, 87], [33.5, 91], [33.0, 95],
          [32.5, 95], [33.0, 91], [33.5, 87],
          [34.0, 83], [34.5, 79], [35.0, 76],
          [35.5, 77.8]
        ]
      },
      {
        name: 'Greater Himalayas (Himadri)',
        color: '#8B0000',
        description: 'Highest zone — perennially snow covered, all highest peaks here',
        avgHeight: '6,000 m average',
        features: 'Never completely without snow, granite core, fold mountains',
        coords: [
          [34.5, 76], [34.0, 79], [33.5, 83],
          [33.0, 87], [32.5, 91], [32.0, 95],
          [29.0, 97], [27.5, 95], [27.0, 91],
          [27.0, 87], [27.5, 83], [28.0, 79],
          [30.0, 77], [32.0, 75.5], [34.5, 76]
        ]
      },
      {
        name: 'Middle Himalayas (Himachal)',
        color: '#B22222',
        description: 'Famous for hill stations — Shimla, Mussoorie, Darjeeling, Nainital',
        avgHeight: '3,700-4,500 m',
        features: 'Rich forests, permanent settlements, Dhauladhar, Pir Panjal',
        coords: [
          [33.0, 75.5], [32.5, 79], [32.0, 83],
          [31.5, 87], [30.5, 91], [29.5, 95],
          [27.5, 95], [28.5, 92], [29.0, 88],
          [29.5, 84], [30.0, 80], [31.0, 76.5],
          [33.0, 75.5]
        ]
      },
      {
        name: 'Outer Himalayas (Shivalik)',
        color: '#CD5C5C',
        description: 'Southernmost Himalayan range, youngest & lowest',
        avgHeight: '600-1,500 m',
        features: 'Duns (valleys) between Shivalik & Middle Himalayas, Dehra Dun',
        coords: [
          [32.5, 75.5], [32.0, 79], [31.5, 83],
          [31.0, 87], [30.5, 91], [27.5, 92.5],
          [27.0, 92], [28.0, 88], [29.0, 85],
          [29.5, 81], [30.0, 78], [31.0, 76],
          [32.5, 75.5]
        ]
      }
    ],

    // ── WESTERN GHATS ──
    westernGhats: {
      mainRange: [
        [21.5, 73.5], [20, 73.2], [18.5, 73.0], [17, 73.5],
        [16, 73.8], [15, 74.0], [14, 74.5], [13, 74.5],
        [12, 75.0], [11, 75.5], [10.5, 76.2], [10, 77.0],
        [9, 77.2], [8.5, 77.5], [8.5, 77.0], [9, 76.5],
        [9.5, 76.2], [10, 76.0], [10.5, 75.7], [11, 75.5],
        [11.5, 75.2], [12, 74.8], [13, 74.5], [14, 74.2],
        [15, 73.8], [16, 73.5], [17, 73.2], [18.5, 72.8],
        [20, 72.8], [21.5, 73.5]
      ],
      peaks: [
        { name: 'Anamudi', lat: 10.17, lng: 77.07, elev: '2,695 m', state: 'Kerala', note: 'Highest in Peninsular India' },
        { name: 'Doda Betta', lat: 11.40, lng: 76.73, elev: '2,637 m', state: 'Tamil Nadu', note: 'Highest in Nilgiris' },
        { name: 'Mullayanagiri', lat: 13.40, lng: 75.73, elev: '1,930 m', state: 'Karnataka', note: 'Highest in Karnataka' },
        { name: 'Kudremukh', lat: 13.17, lng: 75.18, elev: '1,892 m', state: 'Karnataka', note: 'National Park' },
        { name: 'Agasthyamalai', lat: 8.62, lng: 77.31, elev: '1,869 m', state: 'Kerala/TN', note: 'Biosphere reserve' },
        { name: 'Kalsubai', lat: 19.60, lng: 73.72, elev: '1,646 m', state: 'Maharashtra', note: 'Highest in Maharashtra' },
        { name: 'Mahabaleshwar', lat: 17.92, lng: 73.66, elev: '1,438 m', state: 'Maharashtra', note: 'Hill station, source of rivers' }
      ],
      gaps: [
        { name: 'Palakkad Gap (Palghat)', lat: 10.78, lng: 76.65, width: '32 km', significance: 'Only major break in Western Ghats, SW monsoon passage' },
        { name: 'Thal Ghat', lat: 19.55, lng: 73.50, width: '40 km', significance: 'Mumbai-Nashik route, railway passes through' },
        { name: 'Bhore Ghat', lat: 18.75, lng: 73.50, width: '25 km', significance: 'Mumbai-Pune railway passes through' },
        { name: 'Shencottah Gap', lat: 8.98, lng: 77.26, width: '25 km', significance: 'Southern gap connecting Kerala to Tamil Nadu' }
      ],
      rivers: [
        { name: 'Godavari', originLat: 19.90, originLng: 73.55, note: 'Longest peninsular river' },
        { name: 'Krishna', originLat: 17.93, originLng: 73.66, note: 'Mahabaleshwar' },
        { name: 'Cauvery (Kaveri)', originLat: 12.42, originLng: 75.57, note: 'Coorg/Talakaveri' },
        { name: 'Periyar', originLat: 10.10, originLng: 77.10, note: 'Anamalai hills' },
        { name: 'Narmada', originLat: 22.66, originLng: 81.75, note: 'Amarkantak — flows west' },
        { name: 'Tapi', originLat: 21.72, originLng: 78.47, note: 'Betul — flows west' }
      ]
    },

    // ── EASTERN GHATS ──
    easternGhats: {
      segments: [
        { name: 'Mahanadi Hills', lat: 20.5, lng: 85.0, elev: '900 m', state: 'Odisha' },
        { name: 'Eastern Ghats (Odisha)', lat: 19.5, lng: 84.5, elev: '800 m', state: 'Odisha' },
        { name: 'Nallamalai Hills', lat: 15.8, lng: 79.2, elev: '1,000 m', state: 'Andhra Pradesh' },
        { name: 'Erramala Hills', lat: 15.5, lng: 78.5, elev: '900 m', state: 'Andhra Pradesh' },
        { name: 'Palakonda Range', lat: 18.5, lng: 83.5, elev: '850 m', state: 'Andhra Pradesh' },
        { name: 'Javadi Hills', lat: 12.8, lng: 78.7, elev: '1,000 m', state: 'Tamil Nadu' },
        { name: 'Shevaroy Hills', lat: 11.9, lng: 78.3, elev: '1,620 m', state: 'Tamil Nadu' },
        { name: 'Pachaimalai Hills', lat: 11.4, lng: 78.5, elev: '850 m', state: 'Tamil Nadu' },
        { name: 'Mahendragiri', lat: 18.97, lng: 84.37, elev: '1,501 m', note: 'Highest in Eastern Ghats' }
      ],
      gaps: [
        { name: 'Godavari Gap', lat: 17.00, lng: 81.80, significance: 'Godavari cuts through Eastern Ghats' },
        { name: 'Krishna Gap', lat: 16.00, lng: 80.55, significance: 'Krishna cuts through' }
      ]
    },

    // ── COASTAL PLAINS ──
    coastalPlains: {
      western: [
        { name: 'Kachchh / Rann', lat: 23.5, lng: 70.5, type: 'Rann (salt marsh)', state: 'Gujarat', notes: 'World\'s largest salt marsh, tidal flats' },
        { name: 'Kathiawar (Saurashtra)', lat: 22.0, lng: 71.5, type: 'Peninsula', state: 'Gujarat', notes: 'Rocky peninsular coast' },
        { name: 'Gujarat Plains', lat: 21.0, lng: 72.7, type: 'Alluvial coast', state: 'Gujarat', notes: 'Major estuaries of Narmada, Tapi' },
        { name: 'Konkan Coast', lat: 18.0, lng: 73.2, type: 'Rocky/narrow', state: 'Maharashtra/Goa', notes: 'Narrow strip 50km wide, rocky, Mumbai' },
        { name: 'Kanara Coast', lat: 14.5, lng: 74.5, type: 'Rocky with estuaries', state: 'Karnataka', notes: 'Mangaluru coast' },
        { name: 'Malabar Coast', lat: 11.0, lng: 75.8, type: 'Lagoons/backwaters', state: 'Kerala', notes: 'Famous backwaters (Kayals), Kerala' }
      ],
      eastern: [
        { name: 'Utkal Plains', lat: 20.5, lng: 86.5, type: 'Deltaic', state: 'Odisha', notes: 'Mahanadi delta, Chilika Lake' },
        { name: 'Andhra Coast', lat: 16.0, lng: 81.0, type: 'Deltaic', state: 'Andhra Pradesh', notes: 'Godavari-Krishna delta, broad fertile' },
        { name: 'Coromandel Coast', lat: 12.0, lng: 80.2, type: 'Sandy/flat', state: 'Tamil Nadu', notes: 'No natural harbors, Pulicat Lake' },
        { name: 'Kolleru Lake', lat: 16.62, lng: 81.23, type: 'Lagoon', state: 'Andhra Pradesh', notes: 'Freshwater lake between Krishna-Godavari' },
        { name: 'Chilika Lake', lat: 19.72, lng: 85.32, type: 'Lagoon', state: 'Odisha', notes: 'Largest coastal lagoon in Asia' },
        { name: 'Pulicat Lake', lat: 13.65, lng: 80.22, type: 'Lagoon', state: 'AP/TN border', notes: '2nd largest lagoon in India' }
      ],
      ports: [
        { name: 'Mumbai', lat: 18.92, lng: 72.83, type: 'Natural harbour', coast: 'West' },
        { name: 'JNPT (Nhava Sheva)', lat: 18.95, lng: 72.93, type: 'Container port', coast: 'West' },
        { name: 'Kandla', lat: 23.00, lng: 70.22, type: 'Tidal port', coast: 'West' },
        { name: 'Kochi', lat: 9.93, lng: 76.26, type: 'Natural harbour', coast: 'West' },
        { name: 'Mangaluru', lat: 12.87, lng: 74.84, type: 'Port', coast: 'West' },
        { name: 'Mormugao', lat: 15.40, lng: 73.80, type: 'Natural harbour', coast: 'West' },
        { name: 'Chennai', lat: 13.09, lng: 80.27, type: 'Artificial', coast: 'East' },
        { name: 'Visakhapatnam', lat: 17.70, lng: 83.30, type: 'Natural harbour', coast: 'East' },
        { name: 'Paradip', lat: 20.32, lng: 86.60, type: 'Artificial deepwater', coast: 'East' },
        { name: 'Haldia', lat: 22.03, lng: 88.07, type: 'Riverine', coast: 'East' },
        { name: 'Kolkata', lat: 22.56, lng: 88.36, type: 'Riverine', coast: 'East' },
        { name: 'Tuticorin', lat: 8.80, lng: 78.13, type: 'Artificial', coast: 'East' },
        { name: 'Ennore', lat: 13.21, lng: 80.33, type: 'Deepwater', coast: 'East' }
      ]
    },

    // ── ISLANDS ──
    islands: {
      andamanNicobar: [
        { name: 'North Andaman', lat: 13.22, lng: 92.86, area: '1,536 sq km', upsc: 'Northernmost in group' },
        { name: 'Middle Andaman', lat: 12.50, lng: 92.77, area: '1,536 sq km', upsc: 'Largest island in group' },
        { name: 'South Andaman', lat: 11.68, lng: 92.73, area: '1,255 sq km', upsc: 'Port Blair — capital' },
        { name: 'Little Andaman', lat: 10.67, lng: 92.57, area: '735 sq km', upsc: 'Between Andaman & Nicobar' },
        { name: 'Car Nicobar', lat: 9.15, lng: 92.82, area: '127 sq km', upsc: 'Northernmost Nicobar' },
        { name: 'Katchall Island', lat: 8.01, lng: 93.36, area: '174 sq km', upsc: 'Central Nicobar' },
        { name: 'Great Nicobar', lat: 7.00, lng: 93.84, area: '1,044 sq km', upsc: 'Southernmost — 93km from Sumatra' },
        { name: 'Barren Island', lat: 12.28, lng: 93.87, area: '3 sq km', upsc: 'Only ACTIVE volcano in South Asia' },
        { name: 'Narcondam Island', lat: 13.43, lng: 94.26, area: '6.8 sq km', upsc: 'Extinct volcano, bird sanctuary' },
        { name: 'Havelock Island', lat: 11.98, lng: 93.01, area: '113 sq km', upsc: 'Famous for Radhanagar Beach' },
        { name: 'Neil Island', lat: 11.83, lng: 93.04, area: '18 sq km', upsc: 'Coral island, tourism' },
        { name: 'Interview Island', lat: 13.10, lng: 92.70, area: '133 sq km', upsc: 'Wildlife sanctuary' },
        { name: 'Sentinel Island', lat: 11.55, lng: 92.24, area: '60 sq km', upsc: 'Sentinelese tribe — most isolated people' }
      ],
      lakshadweep: [
        { name: 'Kavaratti', lat: 10.56, lng: 72.64, upsc: 'Capital of Lakshadweep UT' },
        { name: 'Agatti', lat: 10.85, lng: 72.19, upsc: 'Only airport in Lakshadweep' },
        { name: 'Andrott', lat: 10.82, lng: 73.66, upsc: 'Largest island in Lakshadweep' },
        { name: 'Minicoy', lat: 8.30, lng: 73.04, upsc: 'Southernmost, closest to Maldives' },
        { name: 'Amini', lat: 11.12, lng: 72.74, upsc: 'Northern group' },
        { name: 'Kalpeni', lat: 10.09, lng: 73.64, upsc: 'Surrounded by lagoon' },
        { name: 'Kadmat', lat: 11.23, lng: 72.78, upsc: 'Tourism island' },
        { name: 'Kiltan', lat: 11.48, lng: 72.77, upsc: 'Northern Lakshadweep' },
        { name: 'Chetlat', lat: 11.68, lng: 72.71, upsc: 'Northernmost inhabited' },
        { name: 'Bangaram', lat: 10.94, lng: 72.28, upsc: 'Uninhabited, resort island' }
      ]
    },

    // ── NORTHERN PLAINS DETAILS ──
    northernPlains: {
      subregions: [
        {
          name: 'Punjab Plains',
          color: '#FFD700',
          coords: [
            [31.5, 73.5], [32.5, 74.5], [33.0, 75.0], [32.5, 76.0],
            [31.5, 75.5], [30.5, 74.5], [30.0, 73.5], [31.5, 73.5]
          ],
          notes: 'Five rivers — Jhelum, Chenab, Ravi, Beas, Sutlej. Doab regions between rivers. Most fertile in India.'
        },
        {
          name: 'Haryana Plains',
          color: '#FFA500',
          coords: [
            [30.5, 74.5], [31.5, 75.5], [31.0, 77.0], [30.0, 77.0],
            [29.0, 76.5], [28.5, 75.5], [29.0, 74.5], [30.5, 74.5]
          ],
          notes: 'Drained by Ghaggar-Hakra (seasonal). Kurukshetra, Panipat battlefields. High wheat production.'
        },
        {
          name: 'Upper Gangetic Plain',
          color: '#FFB347',
          coords: [
            [30.0, 77.0], [31.0, 77.0], [30.5, 80.0], [29.5, 80.5],
            [28.5, 79.0], [28.0, 78.0], [29.0, 77.0], [30.0, 77.0]
          ],
          notes: 'Doab between Ganga and Yamuna. Highly fertile. Cities: Delhi, Agra, Lucknow, Kanpur.'
        },
        {
          name: 'Middle Gangetic Plain',
          color: '#FF8C00',
          coords: [
            [29.5, 80.5], [30.5, 80.0], [30.0, 83.0], [29.0, 84.0],
            [27.5, 83.5], [27.0, 82.0], [28.0, 80.5], [29.5, 80.5]
          ],
          notes: 'Bihar and eastern UP. Dense population. Varanasi, Patna. Rice growing region.'
        },
        {
          name: 'Lower Gangetic Plain',
          color: '#FF6347',
          coords: [
            [25.0, 86.0], [26.0, 87.0], [26.5, 89.0], [25.5, 90.0],
            [24.0, 89.5], [23.0, 88.5], [22.5, 87.5], [23.5, 86.5], [25.0, 86.0]
          ],
          notes: 'West Bengal. Hoogly delta. Dense population. Kolkata. Rice & jute.'
        },
        {
          name: 'Brahmaputra Plains',
          color: '#00CED1',
          coords: [
            [26.0, 90.0], [27.0, 92.0], [27.5, 95.0], [27.0, 95.5],
            [25.5, 94.5], [25.0, 92.0], [25.0, 90.0], [26.0, 90.0]
          ],
          notes: 'Assam valley. Brahmaputra with braided channels. Flood prone. Kaziranga National Park.'
        },
        {
          name: 'Bhabar Zone',
          color: '#8FBC8F',
          coords: [
            [29.5, 77.5], [29.5, 81.0], [29.5, 84.0], [29.5, 87.0],
            [29.0, 87.0], [29.0, 84.0], [29.0, 81.0], [29.0, 77.5], [29.5, 77.5]
          ],
          notes: '8-16 km belt at Himalayan foothills. Rivers disappear underground. Porous gravel & boulders. Trees have long roots.'
        },
        {
          name: 'Terai Zone',
          color: '#90EE90',
          coords: [
            [29.0, 77.5], [29.0, 81.0], [29.0, 84.0], [29.0, 87.0],
            [28.5, 87.0], [28.5, 84.0], [28.5, 81.0], [28.5, 77.5], [29.0, 77.5]
          ],
          notes: 'Lies south of Bhabar. Rivers reappear. Marshy, swampy. Dense forests. Terai was cleared for cultivation post-1947.'
        }
      ],
      bangarKhadar: [
        { name: 'Bangar (Old Alluvium)', lat: 28.6, lng: 77.5, upsc: 'Higher terraces away from river. Older, less fertile. Nodular lime (kankar).' },
        { name: 'Khadar (New Alluvium)', lat: 27.2, lng: 79.5, upsc: 'Lower flood plains near river. Renewed every year. More fertile. No kankar.' },
        { name: 'Reh/Usar (Saline)', lat: 27.0, lng: 79.0, upsc: 'Saline/alkaline soils. Problem land. Common in UP' }
      ]
    },

    // ── PENINSULAR PLATEAU REGIONS ──
    peninsularPlateau: {
      regions: [
        {
          name: 'Central Highlands',
          color: '#CD853F',
          avg_height: '700-1000 m',
          rivers: 'Chambal, Betwa, Ken, Son (flow N to Ganga)',
          coords: [
            [25, 76], [26, 78], [25, 81], [24, 82],
            [23, 80], [22, 78], [23, 76], [24, 75], [25, 76]
          ],
          notes: 'Includes Vindhya, Satpura, Aravalli. Slopes toward north. Chambal ravines here.'
        },
        {
          name: 'Deccan Plateau',
          color: '#A0522D',
          avg_height: '500-800 m',
          rivers: 'Godavari, Krishna, Bhima — flow east',
          coords: [
            [22, 73], [22, 78], [22, 82], [21, 84],
            [20, 83], [18, 82], [16, 80.5], [15, 78],
            [14, 77], [15, 75], [17, 74], [19, 73.5],
            [20, 73], [21, 73], [22, 73]
          ],
          notes: 'Lava flow (Deccan Traps) covered much of this. Slopes gently eastward. Black cotton soil (regur).'
        },
        {
          name: 'Malwa Plateau',
          color: '#D2691E',
          avg_height: '300-600 m',
          coords: [
            [23, 75], [24, 77], [24, 79], [23, 79],
            [22, 77], [22, 75], [23, 75]
          ],
          notes: 'Northwestern Deccan. Basalt lava. Chambal valley in east. Ujjain, Indore.'
        },
        {
          name: 'Chota Nagpur Plateau',
          color: '#8B4513',
          avg_height: '700-1000 m',
          coords: [
            [24, 82], [24, 84], [24, 86], [23, 87],
            [22, 86], [22, 84], [22, 82], [23, 82], [24, 82]
          ],
          notes: 'Jharkhand, Chattisgarh. Oldest Archean rocks. Rich in minerals — iron, coal, mica. Damodar river.'
        },
        {
          name: 'Baghelkhand Plateau',
          color: '#BC8F5F',
          avg_height: '500-900 m',
          coords: [
            [23, 80], [24, 82], [23, 82], [22, 81], [22, 79], [23, 79], [23, 80]
          ],
          notes: 'Between Vindhya and Chota Nagpur. Son river. MP and Chhattisgarh border.'
        },
        {
          name: 'Bundelkhand Plateau',
          color: '#D2B48C',
          avg_height: '300-600 m',
          coords: [
            [25, 78], [25, 80], [25, 81], [24, 81],
            [24, 79], [24, 78], [25, 78]
          ],
          notes: 'UP and MP. Ken, Betwa rivers. Granite-gneiss rocks. Rainfed agriculture.'
        }
      ]
    }
  };

  // ══════════════════════════════════════════════════════════════
  // MAP DEFINITIONS — ALL 10 MAPS
  // ══════════════════════════════════════════════════════════════

  const INDIA_PHYSICAL_MAPS = [

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // MAP 001 — India Physical Map (Complete)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
      mapNum: 1,
      title: 'India Physical Map (Complete)',
      subtitle: 'Mountains · Plains · Plateaus · Coasts · Islands',
      mapConfig: {
        center: [22, 83],
        zoom: 5,
        tileStyle: 'dark'
      },
      legend: [
        {
          sectionTitle: 'Physical Zones',
          items: [
            { color: '#8B4513', label: 'Northern Mountain Wall' },
            { color: '#DAA520', label: 'Northern Plains' },
            { color: '#CD853F', label: 'Peninsular Plateau' },
            { color: '#20B2AA', label: 'Coastal Plains' },
            { color: '#F4A460', label: 'Thar Desert / Arid Region' }
          ]
        },
        {
          sectionTitle: 'Features',
          items: [
            { dot: '#FFD700', label: 'Major Peaks' },
            { dot: '#00CED1', label: 'Islands' },
            { dot: '#FF6347', label: 'Important Cities' }
          ]
        }
      ],
      info: [
        {
          title: 'OVERVIEW',
          items: [
            'Total Area: 3,287,263 sq km (7th largest country)',
            'Latitudinal Extent: 8°4\'N to 37°6\'N',
            'Longitudinal Extent: 68°7\'E to 97°25\'E',
            'Standard Meridian: 82°30\'E (IST = UTC+5:30)',
            'N-S length: ~3,214 km | E-W width: ~2,933 km',
            'Total coastline: 7,516 km (incl. islands)',
            'Land borders: ~15,200 km with 7 countries'
          ]
        },
        {
          title: 'PHYSIOGRAPHIC DIVISIONS',
          items: [
            '1. The Northern Mountain Wall (Himalayas + Trans-Himalayas)',
            '2. The Northern Plains (Indo-Gangetic-Brahmaputra)',
            '3. The Peninsular Plateau (oldest landmass)',
            '4. The Coastal Plains (E & W coasts)',
            '5. The Islands (Andaman & Lakshadweep)',
            '6. The Great Indian Desert (Thar)'
          ]
        },
        {
          title: 'UPSC KEY FACTS',
          facts: [
            { label: 'Highest Peak (India)', value: 'Kangchenjunga — 8,586 m (Sikkim)' },
            { label: 'Highest Peak (Entire India claim)', value: 'K2 — 8,611 m (PoK)' },
            { label: 'Longest River', value: 'Ganga — 2,525 km' },
            { label: 'Largest State', value: 'Rajasthan — 342,239 sq km' },
            { label: 'Smallest State', value: 'Goa — 3,702 sq km' },
            { label: 'Southernmost Point', value: 'Indira Point, Great Nicobar (6°45\'N)' }
          ]
        }
      ],
      render(map, app) {
        // India boundary
        const boundary = L.polygon(DATA.indiaBoundary, {
          color: '#F0A500',
          fillColor: 'rgba(240,165,0,0.05)',
          weight: 2.5,
          fillOpacity: 0.05,
          dashArray: '6,4'
        });
        app.addLayer(boundary);

        // Physiographic regions
        DATA.physiographicRegions.forEach(region => {
          if (region.coords && region.coords.length > 0) {
            const poly = L.polygon(region.coords, {
              color: region.color,
              fillColor: region.fillColor,
              fillOpacity: 0.35,
              weight: 1.5,
              opacity: 0.8
            });
            poly.bindPopup(app.buildPopup(
              region.name,
              `<b>Area:</b> ${region.area || 'See detail map'}<br>
               <b>Includes:</b> ${(region.includes || []).join(', ')}<br>
               <br><i>${region.description}</i>`,
              ['Physiography', 'UPSC']
            ));
            poly.on('mouseover', function() { this.setStyle({ fillOpacity: 0.55, weight: 2.5 }); });
            poly.on('mouseout', function() { this.setStyle({ fillOpacity: 0.35, weight: 1.5 }); });
            app.addLayer(poly);
          }
        });

        // Major peaks
        DATA.peaks.forEach(peak => {
          const marker = L.circleMarker([peak.lat, peak.lng], {
            radius: 6,
            color: '#FFD700',
            fillColor: '#FFD700',
            fillOpacity: 0.9,
            weight: 2
          });
          marker.bindPopup(app.buildPopup(
            `⛰ ${peak.name}`,
            `<b>Elevation:</b> ${peak.elev}<br>
             <b>Range:</b> ${peak.range}<br>
             <b>UPSC Note:</b> ${peak.upsc}`,
            ['Peak', peak.range]
          ));
          app.addLayer(marker);

          // Label for major peaks only
          if (['Kangchenjunga', 'Nanda Devi', 'K2', 'Anamudi'].includes(peak.name)) {
            const label = app.labelMarker([peak.lat + 0.3, peak.lng], peak.name + ' ' + peak.elev, '#FFD700', '10px');
            app.addLayer(label);
          }
        });

        // Andaman & Nicobar label
        const andLabel = app.labelMarker([12, 93], '🏝 Andaman &\n  Nicobar Islands', '#00CED1', '11px');
        app.addLayer(andLabel);

        // Lakshadweep label
        const lakLabel = app.labelMarker([10.5, 72.2], '🏝 Lakshadweep', '#00CED1', '11px');
        app.addLayer(lakLabel);

        // Thar Desert label
        const tharLabel = app.labelMarker([26, 70.5], '🏜 Thar Desert', '#F4A460', '12px');
        app.addLayer(tharLabel);

        // Region labels
        const regionLabels = [
          { name: 'HIMALAYAS', lat: 32.5, lng: 79, color: '#CD853F' },
          { name: 'NORTHERN\nPLAINS', lat: 27, lng: 79, color: '#DAA520' },
          { name: 'PENINSULAR\nPLATEAU', lat: 18, lng: 78, color: '#CD853F' },
          { name: 'WESTERN\nGHATS', lat: 13, lng: 75.5, color: '#228B22' },
          { name: 'EASTERN\nGHATS', lat: 16, lng: 80.5, color: '#228B22' },
          { name: 'DECCAN\nPLATEAU', lat: 17, lng: 77, color: '#A0522D' }
        ];

        regionLabels.forEach(rl => {
          const label = app.labelMarker([rl.lat, rl.lng], rl.name, rl.color, '10px');
          app.addLayer(label);
        });

        app.showToast('MAP 001 — India Physical Complete Map loaded', 'success');
      }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // MAP 002 — Physiographic Divisions of India
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
      mapNum: 2,
      title: 'Physiographic Divisions of India',
      subtitle: '6 Major Divisions — Color Coded',
      mapConfig: { center: [22, 82], zoom: 5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: '6 Physiographic Divisions',
          items: [
            { color: '#8B4513', label: '1. Northern Mountain Wall' },
            { color: '#DAA520', label: '2. Northern Plains' },
            { color: '#CD853F', label: '3. Peninsular Plateau' },
            { color: '#20B2AA', label: '4. Coastal Plains' },
            { color: '#F4A460', label: '5. Thar Desert / Arid Region' },
            { color: '#00CED1', label: '6. Islands' }
          ]
        }
      ],
      info: [
        {
          title: 'DIVISION 1 — NORTHERN MOUNTAINS',
          facts: [
            { label: 'Area', value: '~5 lakh sq km' },
            { label: 'Composition', value: 'Himalayas, Karakoram, Hindukush, North East Ranges' },
            { label: 'Key Fact', value: 'Young fold mountains, still rising, earthquake prone' }
          ]
        },
        {
          title: 'DIVISION 2 — NORTHERN PLAINS',
          facts: [
            { label: 'Area', value: '~7 lakh sq km' },
            { label: 'Composition', value: 'Alluvial deposits from Himalayan rivers' },
            { label: 'Key Fact', value: 'World\'s most fertile plains, 40% of India\'s population' }
          ]
        },
        {
          title: 'DIVISION 3 — PENINSULAR PLATEAU',
          facts: [
            { label: 'Area', value: '~16 lakh sq km' },
            { label: 'Composition', value: 'Ancient Archean rocks, Deccan Traps' },
            { label: 'Key Fact', value: 'Oldest & most stable part, Gondwana origin' }
          ]
        },
        {
          title: 'UPSC COMPARISON TABLE',
          items: [
            'Northern Plains — 8 cm/yr subsidence, shows ground rise recently',
            'Himalayas — 5 mm/yr uplift (still growing)',
            'Peninsular Plateau — Tectonically stable (no earthquakes)',
            'Coastal Plains — Eastern coast wider (100-130km) vs Western (10-25km)',
            'Thar — 7th largest desert globally, paradox: high population density'
          ]
        }
      ],
      render(map, app) {
        // Each division with distinct color and labels
        const divisions = [
          {
            name: 'Northern Mountain Wall',
            num: '01',
            color: '#8B4513',
            coords: DATA.physiographicRegions[0].coords,
            center: [33, 82]
          },
          {
            name: 'Northern Plains',
            num: '02',
            color: '#DAA520',
            coords: DATA.physiographicRegions[1].coords,
            center: [27.5, 80]
          },
          {
            name: 'Peninsular Plateau',
            num: '03',
            color: '#CD853F',
            coords: DATA.physiographicRegions[2].coords,
            center: [18, 78]
          },
          {
            name: 'Thar Desert',
            num: '05',
            color: '#F4A460',
            coords: DATA.physiographicRegions[4].coords,
            center: [26, 71]
          }
        ];

        divisions.forEach(div => {
          if (div.coords && div.coords.length > 0) {
            const poly = L.polygon(div.coords, {
              color: div.color,
              fillColor: div.color,
              fillOpacity: 0.45,
              weight: 2
            });

            poly.bindPopup(app.buildPopup(
              `Division ${div.num}: ${div.name}`,
              DATA.physiographicRegions.find(r => r.name.includes(div.name.split(' ')[0]))?.description || div.name,
              ['Physiography', 'UPSC']
            ));

            poly.on('mouseover', function () {
              this.setStyle({ fillOpacity: 0.7, weight: 3 });
              this.bringToFront();
            });
            poly.on('mouseout', function () {
              this.setStyle({ fillOpacity: 0.45, weight: 2 });
            });

            app.addLayer(poly);

            // Big center label
            const icon = L.divIcon({
              className: '',
              html: `<div style="
                text-align:center;
                font-family:'Cinzel',serif;
                font-weight:700;
                font-size:11px;
                color:${div.color};
                text-shadow:0 0 8px rgba(0,0,0,0.9),0 1px 3px #000;
                white-space:nowrap;
                letter-spacing:1px;
              ">${div.num}<br>${div.name.toUpperCase()}</div>`,
              iconAnchor: [40, 10]
            });
            app.addLayer(L.marker(div.center, { icon, interactive: false }));
          }
        });

        // Western coast polygon
        const westCoast = L.polygon([
          [21.5, 73.5], [20, 73.2], [18.5, 73.0], [17, 73.5],
          [16, 73.8], [15, 74.0], [14, 74.5], [13, 74.5],
          [12, 75.0], [11, 75.5], [10, 76.2], [8.5, 77.5],
          [8.5, 76.8], [10, 75.7], [11, 75.0], [12, 74.5],
          [13, 74.2], [14, 74.0], [15, 73.5], [17, 73.0],
          [18.5, 72.6], [20, 72.5], [21.5, 73.0], [21.5, 73.5]
        ], {
          color: '#20B2AA', fillColor: '#20B2AA', fillOpacity: 0.5, weight: 1.5
        });
        westCoast.bindPopup(app.buildPopup('Western Coastal Plain', 'Width: 10-25 km<br>Character: Rocky, narrow, estuaries<br>Sub-divisions: Konkan, Kanara, Malabar', ['Coast', 'West']));
        app.addLayer(westCoast);

        // Eastern coast strip
        const eastCoast = L.polygon([
          [22, 87], [21, 86], [20, 86.5], [19, 85], [18, 83],
          [17, 82.5], [16, 81], [15, 80.5], [14, 80.0],
          [13, 80.2], [12, 80.0], [10, 79.8], [9, 79.0],
          [8.5, 77.5], [9, 77.8], [10, 79.5], [11, 79.8],
          [12, 80.2], [13, 80.6], [14, 80.5], [15, 80.8],
          [16, 81.5], [17, 82.9], [18, 83.5], [19, 85.5],
          [20, 87], [21, 87.5], [22, 87]
        ], {
          color: '#20B2AA', fillColor: '#20B2AA', fillOpacity: 0.5, weight: 1.5
        });
        eastCoast.bindPopup(app.buildPopup('Eastern Coastal Plain', 'Width: 100-130 km<br>Character: Broad, flat, deltaic<br>Sub-divisions: Utkal, Andhra, Coromandel', ['Coast', 'East']));
        app.addLayer(eastCoast);

        // Islands markers
        const andamanMark = L.circleMarker([10, 92.5], {
          radius: 12, color: '#00CED1', fillColor: '#00CED1', fillOpacity: 0.6, weight: 2
        });
        andamanMark.bindPopup(app.buildPopup('Division 06: Islands', 'Andaman & Nicobar Islands (Bay of Bengal)<br>+ Lakshadweep (Arabian Sea)', ['Islands', 'UT']));
        app.addLayer(andamanMark);

        const lakMark = L.circleMarker([10.5, 72.5], {
          radius: 8, color: '#00CED1', fillColor: '#00CED1', fillOpacity: 0.6, weight: 2
        });
        app.addLayer(lakMark);

        app.showToast('MAP 002 — Physiographic Divisions loaded', 'success');
      }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // MAP 003 — Himalayan Ranges Map
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
      mapNum: 3,
      title: 'Himalayan Ranges Map',
      subtitle: 'Four Parallel Zones + Major Peaks + Passes',
      mapConfig: { center: [31, 82], zoom: 5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Himalayan Zones (N to S)',
          items: [
            { color: '#4B0082', label: 'Trans-Himalaya (Tethys Himalayas)' },
            { color: '#8B0000', label: 'Greater Himalayas (Himadri)' },
            { color: '#B22222', label: 'Middle Himalayas (Himachal)' },
            { color: '#CD5C5C', label: 'Outer Himalayas (Shivalik)' }
          ]
        },
        {
          sectionTitle: 'Features',
          items: [
            { dot: '#FFD700', label: 'Major Peaks (>7000m)' },
            { dot: '#00FF88', label: 'Mountain Passes' },
            { dot: '#FF6347', label: 'Hill Stations' }
          ]
        }
      ],
      info: [
        {
          title: 'HIMALAYAN ZONES — DETAILS',
          facts: [
            { label: 'Trans-Himalaya', value: 'Karakoram, Ladakh, Zanskar. Cold desert. Av. height 3000-5000m.' },
            { label: 'Greater Himalayas (Himadri)', value: 'Never free of snow. All 8000m+ peaks. Av. 6000m. Granite core.' },
            { label: 'Middle Himalayas (Himachal)', value: '3700-4500m. Hill stations — Shimla, Mussoorie, Darjeeling. Ranges: Dhauladhar, Pir Panjal.' },
            { label: 'Outer Himalayas (Shivalik)', value: '600-1500m. Youngest, loosely consolidated. Duns (valleys) — Dehra Dun.' }
          ]
        },
        {
          title: 'UPSC KEY POINTS',
          items: [
            'Himalayas — young fold mountains, asymmetric: steep S face, gentle N face',
            'Eastern Himalayas: higher, more rainfall, narrower than Western',
            'Himalayas divide Indian climate from Central Asia climate',
            'Source of 3 river systems: Indus, Ganga, Brahmaputra',
            'MBT (Main Boundary Thrust) separates Greater & Middle Himalayas',
            'MCT (Main Central Thrust) separates Trans & Greater Himalayas',
            'Himalayas still rising — India plate pushing into Eurasian plate'
          ]
        }
      ],
      render(map, app) {
        // Himalayan ranges from N to S
        DATA.himalayanRanges.forEach((range, idx) => {
          const poly = L.polygon(range.coords, {
            color: range.color,
            fillColor: range.color,
            fillOpacity: 0.35 + idx * 0.05,
            weight: 2,
            opacity: 0.9
          });

          poly.bindPopup(app.buildPopup(
            range.name,
            `<b>Avg Height:</b> ${range.avgHeight}<br>
             <b>Character:</b> ${range.features}<br>
             <b>Description:</b> ${range.description}`,
            ['Himalayas', 'Range']
          ));

          poly.on('mouseover', function () {
            this.setStyle({ fillOpacity: 0.65, weight: 3 });
            this.bringToFront();
          });
          poly.on('mouseout', function () {
            this.setStyle({ fillOpacity: 0.35 + idx * 0.05, weight: 2 });
          });

          app.addLayer(poly);
        });

        // Range labels
        const rangeLabels = [
          { name: 'TRANS-HIMALAYA\n(Karakoram, Ladakh)', lat: 34.5, lng: 78, color: '#9B59B6' },
          { name: 'GREATER HIMALAYAS\n(Himadri)', lat: 32.5, lng: 80, color: '#E74C3C' },
          { name: 'MIDDLE HIMALAYAS\n(Himachal)', lat: 31.0, lng: 77, color: '#E67E22' },
          { name: 'OUTER HIMALAYAS\n(Shivalik)', lat: 29.5, lng: 78.5, color: '#E59866' }
        ];

        rangeLabels.forEach(rl => {
          const label = app.labelMarker([rl.lat, rl.lng], rl.name, rl.color, '9px');
          app.addLayer(label);
        });

        // Major peaks
        DATA.peaks.filter(p => ['Kangchenjunga', 'Nanda Devi', 'K2', 'Kamet', 'Chaukhamba', 'Trisul', 'Mount Everest', 'Namcha Barwa'].includes(p.name))
          .forEach(peak => {
            const marker = L.circleMarker([peak.lat, peak.lng], {
              radius: 7,
              color: '#FFD700',
              fillColor: '#FFD700',
              fillOpacity: 1,
              weight: 2
            });
            marker.bindPopup(app.buildPopup(
              `⛰ ${peak.name}`,
              `<b>Elevation:</b> ${peak.elev}<br>
               <b>Range:</b> ${peak.range}<br>
               <b>UPSC:</b> ${peak.upsc}`,
              ['Peak', '>7000m']
            ));
            app.addLayer(marker);
            app.addLayer(app.labelMarker([peak.lat + 0.4, peak.lng], `${peak.name} (${peak.elev})`, '#FFD700', '9px'));
          });

        // Thrust lines
        const thrustLines = [
          {
            name: 'Main Central Thrust (MCT)',
            color: '#FF00FF',
            coords: [[35.0, 76], [34.5, 80], [33.5, 84], [32.5, 88], [31, 91], [29, 95]]
          },
          {
            name: 'Main Boundary Thrust (MBT)',
            color: '#FF6600',
            coords: [[33.0, 75.5], [32.5, 79], [31.5, 83], [30.5, 87], [29, 90], [27.5, 93]]
          },
          {
            name: 'Main Frontal Thrust (MFT)',
            color: '#FFFF00',
            coords: [[32.5, 75.5], [32.0, 79], [31.0, 83], [30.0, 87], [28.5, 90], [27.0, 92.5]]
          }
        ];

        thrustLines.forEach(t => {
          const line = L.polyline(t.coords, {
            color: t.color,
            weight: 2,
            dashArray: '8,4',
            opacity: 0.7
          });
          line.bindPopup(app.buildPopup(t.name, 'Major geological fault / thrust zone in Himalayas', ['Geology', 'Fault']));
          app.addLayer(line);
        });

        app.showToast('MAP 003 — Himalayan Ranges loaded', 'success');
      }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // MAP 004 — Important Mountain Passes
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
      mapNum: 4,
      title: 'Important Mountain Passes of India',
      subtitle: 'All UPSC Relevant Passes — Elevation, Strategy & Connectivity',
      mapConfig: { center: [31, 84], zoom: 5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Pass Categories',
          items: [
            { dot: '#FFD700', label: 'High Passes (>5000m)' },
            { dot: '#FFA500', label: 'Medium Passes (3000-5000m)' },
            { dot: '#00FF88', label: 'Low Passes (<3000m)' },
            { dot: '#FF6347', label: 'Strategic / Military Passes' }
          ]
        }
      ],
      info: [
        {
          title: 'PASSES — STRATEGIC IMPORTANCE',
          items: [
            'Karakoram Pass — ancient Silk Route to Central Asia',
            'Zoji La — only link between Kashmir & Ladakh',
            'Nathu La — India-China trade, India-Tibet relations',
            'Shipki La — Sutlej river enters India here',
            'Diphu Pass — Trijunction (India-China-Myanmar)',
            'Bomdi La — Key 1962 China-India war location',
            'Palakkad Gap — SW Monsoon enters peninsular India here'
          ]
        },
        {
          title: 'UPSC FACTS',
          facts: [
            { label: 'Highest Motorable Road', value: 'Khardung La — 5,359m (Ladakh)' },
            { label: 'Most Strategic', value: 'Zoji La — closed in winter, vital for Ladakh supply' },
            { label: 'India-China Trade', value: 'Nathu La pass (Sikkim) — opened 2006 after 44 years' },
            { label: 'Non-Himalayan', value: 'Palakkad Gap (140m) — only major gap in Western Ghats' }
          ]
        }
      ],
      render(map, app) {
        // Background hill shading effect
        const himalayaBg = L.polygon([
          [36, 70], [36, 98], [27, 98], [25, 96],
          [27, 75], [30, 74], [34, 72], [36, 70]
        ], {
          color: 'transparent',
          fillColor: '#4A3728',
          fillOpacity: 0.15,
          weight: 0
        });
        app.addLayer(himalayaBg);

        // All passes
        DATA.passes.forEach(pass => {
          const elev = parseInt(pass.elev?.replace(/[^0-9]/g, '') || '0');
          let color = '#00FF88';
          let radius = 7;

          if (elev >= 5000) { color = '#FFD700'; radius = 10; }
          else if (elev >= 3000) { color = '#FFA500'; radius = 8; }

          if (['Zoji La', 'Nathu La', 'Bomdi La', 'Diphu Pass'].includes(pass.name)) {
            color = '#FF6347';
          }

          const marker = L.circleMarker([pass.lat, pass.lng], {
            radius,
            color: '#000',
            fillColor: color,
            fillOpacity: 0.9,
            weight: 2
          });

          marker.bindPopup(app.buildPopup(
            `🏔 ${pass.name}`,
            `<b>Elevation:</b> ${pass.elev}<br>
             <b>Connects:</b> ${pass.connects}<br>
             <b>Strategic:</b> ${pass.strategic}`,
            ['Pass', pass.elev]
          ));

          marker.on('mouseover', function () {
            this.setRadius(radius + 3);
            this.openPopup();
          });
          marker.on('mouseout', function () {
            this.setRadius(radius);
          });

          app.addLayer(marker);

          // Labels for all passes
          app.addLayer(app.labelMarker(
            [pass.lat + 0.35, pass.lng + 0.1],
            `${pass.name}\n(${pass.elev})`,
            '#FFFFFF',
            '9px'
          ));
        });

        // Highlight Palakkad Gap separately (in south)
        const palakkadGap = DATA.passes.find(p => p.name === 'Palakkad Gap');
        if (palakkadGap) {
          const circle = L.circle([palakkadGap.lat, palakkadGap.lng], {
            radius: 40000,
            color: '#00FFFF',
            fillColor: '#00FFFF',
            fillOpacity: 0.15,
            weight: 2,
            dashArray: '5,5'
          });
          circle.bindPopup(app.buildPopup(
            '🌊 Palakkad Gap (Palghat)',
            `Only major break in Western Ghats<br>Width: ${palakkadGap.width}<br>Significance: ${palakkadGap.significance}`,
            ['Gap', 'Monsoon', 'Western Ghats']
          ));
          app.addLayer(circle);
        }

        app.showToast('MAP 004 — Mountain Passes loaded', 'success');
      }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // MAP 005 — Northern Plains Map
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
      mapNum: 5,
      title: 'Northern Plains Map',
      subtitle: 'Punjab · Haryana · Gangetic · Brahmaputra · Bhabar · Terai · Bangar · Khadar',
      mapConfig: { center: [27, 82], zoom: 5.5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Sub-Regions',
          items: [
            { color: '#FFD700', label: 'Punjab Plains' },
            { color: '#FFA500', label: 'Haryana Plains' },
            { color: '#FFB347', label: 'Upper Gangetic Plain' },
            { color: '#FF8C00', label: 'Middle Gangetic Plain' },
            { color: '#FF6347', label: 'Lower Gangetic Plain (Delta)' },
            { color: '#00CED1', label: 'Brahmaputra Plains' }
          ]
        },
        {
          sectionTitle: 'Belts',
          items: [
            { color: '#8FBC8F', label: 'Bhabar Zone (rivers sink underground)' },
            { color: '#90EE90', label: 'Terai Zone (marshy, rivers reappear)' },
            { dot: '#FF0000', label: 'Bangar (Old Alluvium)' },
            { dot: '#0000FF', label: 'Khadar (New Alluvium)' }
          ]
        }
      ],
      info: [
        {
          title: 'NORTHERN PLAINS — OVERVIEW',
          facts: [
            { label: 'Total Area', value: '~7 lakh sq km' },
            { label: 'Length', value: '3,200 km (W to E)' },
            { label: 'Width', value: '150-300 km' },
            { label: 'Population', value: '~40% of India lives here' },
            { label: 'Origin', value: 'Quaternary alluvial deposits from Himalayan rivers' }
          ]
        },
        {
          title: 'BHABAR & TERAI — KEY FOR UPSC',
          items: [
            'Bhabar: 8-16 km belt at Himalayan foothills',
            'Rivers disappear underground in Bhabar (porous gravel)',
            'Terai: Lies south of Bhabar, rivers reappear',
            'Terai: Marshy, malarial historically, now cleared for farming',
            'Bangar: Old alluvium, higher terrace, less fertile, has kankar',
            'Khadar: New alluvium, flood plains, renewed annually, very fertile',
            'Bhur: Sandy deposits near rivers in Ganga-Yamuna doab'
          ]
        }
      ],
      render(map, app) {
        // Sub-regions
        DATA.northernPlains.subregions.forEach(region => {
          const poly = L.polygon(region.coords, {
            color: region.color,
            fillColor: region.color,
            fillOpacity: 0.45,
            weight: 1.5
          });

          poly.bindPopup(app.buildPopup(
            region.name,
            region.notes,
            ['Northern Plains', 'UPSC']
          ));

          poly.on('mouseover', function () {
            this.setStyle({ fillOpacity: 0.7, weight: 2.5 });
            this.bringToFront();
          });
          poly.on('mouseout', function () {
            this.setStyle({ fillOpacity: 0.45, weight: 1.5 });
          });

          app.addLayer(poly);

          // Region label
          const centroid = region.coords[Math.floor(region.coords.length / 2)];
          app.addLayer(app.labelMarker(centroid, region.name, region.color, '10px'));
        });

        // Bangar and Khadar markers
        DATA.northernPlains.bangarKhadar.forEach(bk => {
          const color = bk.name.includes('Bangar') ? '#FF4500' :
            bk.name.includes('Khadar') ? '#4169E1' : '#A0A0A0';
          const marker = L.circleMarker([bk.lat, bk.lng], {
            radius: 9,
            color: '#000',
            fillColor: color,
            fillOpacity: 0.9,
            weight: 2
          });
          marker.bindPopup(app.buildPopup(bk.name, bk.upsc, ['Plains', 'Alluvium']));
          app.addLayer(marker);
          app.addLayer(app.labelMarker([bk.lat + 0.3, bk.lng], bk.name, color, '10px'));
        });

        // Major cities on plains
        const cities = [
          { name: 'Delhi', lat: 28.66, lng: 77.21 },
          { name: 'Agra', lat: 27.18, lng: 78.01 },
          { name: 'Lucknow', lat: 26.85, lng: 80.95 },
          { name: 'Varanasi', lat: 25.32, lng: 83.01 },
          { name: 'Patna', lat: 25.60, lng: 85.14 },
          { name: 'Kolkata', lat: 22.57, lng: 88.36 },
          { name: 'Amritsar', lat: 31.63, lng: 74.87 },
          { name: 'Chandigarh', lat: 30.74, lng: 76.79 },
          { name: 'Allahabad', lat: 25.43, lng: 81.84 },
          { name: 'Dehra Dun', lat: 30.32, lng: 78.03 },
          { name: 'Guwahati', lat: 26.14, lng: 91.74 }
        ];

        cities.forEach(city => {
          const marker = L.circleMarker([city.lat, city.lng], {
            radius: 5, color: '#FF6347', fillColor: '#FF6347', fillOpacity: 0.9, weight: 1
          });
          marker.bindPopup(app.buildPopup(city.name, 'Major city in Northern Plains', ['City']));
          app.addLayer(marker);
          app.addLayer(app.labelMarker([city.lat + 0.25, city.lng], city.name, '#FF6347', '9px'));
        });

        app.showToast('MAP 005 — Northern Plains loaded', 'success');
      }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // MAP 006 — Peninsular Plateau Map
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
      mapNum: 6,
      title: 'Peninsular Plateau Map',
      subtitle: 'Central Highlands · Deccan · Chota Nagpur · Malwa · Eastern & Western Ghats',
      mapConfig: { center: [19, 79], zoom: 5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Plateau Regions',
          items: [
            { color: '#CD853F', label: 'Central Highlands' },
            { color: '#A0522D', label: 'Deccan Plateau' },
            { color: '#D2691E', label: 'Malwa Plateau' },
            { color: '#8B4513', label: 'Chota Nagpur Plateau' },
            { color: '#BC8F5F', label: 'Baghelkhand Plateau' },
            { color: '#D2B48C', label: 'Bundelkhand Plateau' }
          ]
        },
        {
          sectionTitle: 'Boundary Ranges',
          items: [
            { line: '#228B22', label: 'Western Ghats' },
            { line: '#556B2F', label: 'Eastern Ghats' },
            { line: '#8B0000', label: 'Vindhya Range' },
            { line: '#4B0082', label: 'Satpura Range' },
            { line: '#006400', label: 'Aravalli Range' }
          ]
        }
      ],
      info: [
        {
          title: 'PENINSULAR PLATEAU — OVERVIEW',
          facts: [
            { label: 'Area', value: '~16 lakh sq km' },
            { label: 'Average Height', value: '600-900 m' },
            { label: 'Age', value: 'Pre-Cambrian (oldest in India)' },
            { label: 'Origin', value: 'Part of Gondwanaland supercontinent' },
            { label: 'Rock Type', value: 'Archean crystalline rocks + Deccan Traps (basalt)' }
          ]
        },
        {
          title: 'UPSC KEY FACTS',
          items: [
            'Deccan Plateau: Tilts east — rivers flow E to Bay of Bengal',
            'Western Ghats higher than Eastern Ghats',
            'Chota Nagpur: Mineral heartland of India',
            'Malwa Plateau: Basalt lava flows, black cotton soil',
            'Vindhya-Satpura: Divide Indo-Gangetic plain from Deccan',
            'Aravalli: Oldest fold mountain range (pre-Cambrian)',
            'Narmada-Tapi flow west through rift valleys (unique)',
            'Most rivers of peninsula flow east to Bay of Bengal'
          ]
        }
      ],
      render(map, app) {
        DATA.peninsularPlateau.regions.forEach(region => {
          const poly = L.polygon(region.coords, {
            color: region.color,
            fillColor: region.color,
            fillOpacity: 0.45,
            weight: 2
          });

          poly.bindPopup(app.buildPopup(
            region.name,
            `<b>Avg Height:</b> ${region.avg_height}<br>
             <b>Main Rivers:</b> ${region.rivers || 'See drainage map'}<br>
             <b>Notes:</b> ${region.notes}`,
            ['Plateau', 'Peninsular India']
          ));

          poly.on('mouseover', function () {
            this.setStyle({ fillOpacity: 0.7, weight: 3 });
            this.bringToFront();
          });
          poly.on('mouseout', function () {
            this.setStyle({ fillOpacity: 0.45, weight: 2 });
          });

          app.addLayer(poly);
          const centroid = region.coords[Math.floor(region.coords.length / 2)];
          app.addLayer(app.labelMarker(centroid, region.name, region.color, '10px'));
        });

        // Mountain ranges as lines
        const ranges = [
          {
            name: 'Aravalli Range',
            color: '#006400',
            coords: [[24.5, 73.7], [25.5, 73.5], [26.5, 73.7], [27.5, 74.5], [28.6, 77.2]]
          },
          {
            name: 'Vindhya Range',
            color: '#8B0000',
            coords: [[22, 73], [22.5, 75], [23, 77], [23.5, 79], [24, 81], [24.5, 83]]
          },
          {
            name: 'Satpura Range',
            color: '#4B0082',
            coords: [[21.5, 73.5], [21.7, 75], [22, 77], [22.3, 79], [22.5, 81], [23, 82]]
          },
          {
            name: 'Western Ghats',
            color: '#228B22',
            coords: [
              [21.5, 73.5], [20, 73.2], [18.5, 73.0], [17, 73.5],
              [16, 73.8], [15, 74.0], [14, 74.5], [13, 74.5],
              [12, 75.0], [11, 75.5], [10, 76.2], [8.5, 77.5]
            ]
          },
          {
            name: 'Eastern Ghats',
            color: '#556B2F',
            coords: [
              [22, 87], [21, 86], [20, 85.5], [19, 84.5],
              [18, 83.5], [17, 82], [16, 80.5], [15, 79.5],
              [14, 79], [13, 78.5], [12, 78], [11.5, 78.5]
            ]
          }
        ];

        ranges.forEach(range => {
          const line = L.polyline(range.coords, {
            color: range.color, weight: 3, opacity: 0.8
          });
          line.bindPopup(app.buildPopup(range.name, 'Major physiographic range of Peninsular India', ['Range', 'Peninsular']));
          app.addLayer(line);

          // Label
          const midpoint = range.coords[Math.floor(range.coords.length / 2)];
          app.addLayer(app.labelMarker([midpoint[0] + 0.3, midpoint[1]], range.name, range.color, '9px'));
        });

        app.showToast('MAP 006 — Peninsular Plateau loaded', 'success');
      }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // MAP 007 — Western Ghats Detailed Map
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
      mapNum: 7,
      title: 'Western Ghats Detailed Map',
      subtitle: 'Peaks · Gaps · Origin of Rivers · States · UNESCO World Heritage',
      mapConfig: { center: [14, 75], zoom: 6, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Western Ghats',
          items: [
            { line: '#228B22', label: 'Western Ghats Main Range' },
            { dot: '#FFD700', label: 'Major Peaks' },
            { dot: '#00BFFF', label: 'River Origins' },
            { dot: '#FF69B4', label: 'Mountain Gaps (Ghats)' },
            { color: '#90EE90', label: 'UNESCO World Heritage Zone' }
          ]
        },
        {
          sectionTitle: 'States',
          items: [
            { dot: '#FF6347', label: 'Maharashtra' },
            { dot: '#FFA500', label: 'Goa' },
            { dot: '#FFD700', label: 'Karnataka' },
            { dot: '#00FF88', label: 'Kerala' },
            { dot: '#00BFFF', label: 'Tamil Nadu' }
          ]
        }
      ],
      info: [
        {
          title: 'WESTERN GHATS — OVERVIEW',
          facts: [
            { label: 'Length', value: '~1,600 km (Gujarat to Kanyakumari)' },
            { label: 'Width', value: '50-80 km' },
            { label: 'Height', value: '900-2695 m (Anamudi)' },
            { label: 'UNESCO', value: 'World Heritage Site — 2012 (39 sites)' },
            { label: 'Biodiversity', value: 'One of world\'s 8 hottest biodiversity hotspots' }
          ]
        },
        {
          title: 'IMPORTANT GAPS',
          items: [
            'Palakkad Gap (32km wide) — only major break, SW monsoon enters here',
            'Thal Ghat — Mumbai-Nashik railway/road',
            'Bhore Ghat — Mumbai-Pune railway',
            'Shencottah Gap — connects southern Kerala to Tamil Nadu',
            'Goa Gap (unnamed) — Goa coastal region broader'
          ]
        },
        {
          title: 'UPSC KEY FACTS',
          items: [
            'Western Ghats higher than Eastern Ghats (avg 1200m vs 600m)',
            'Acts as barrier to SW monsoon — windward (W) gets heavy rain',
            'Leeward (E) side: rain shadow — Deccan gets less rain',
            'Western slopes: tropical evergreen forests',
            'Eastern slopes: tropical deciduous forests',
            'Rivers originating: Godavari, Krishna, Kaveri, Periyar flow east; Narmada-Tapi exception (W)',
            'More continuous than Eastern Ghats (Eastern Ghats are broken)'
          ]
        }
      ],
      render(map, app) {
        // Western Ghats main polygon
        const ghats = L.polygon(DATA.westernGhats.mainRange, {
          color: '#228B22',
          fillColor: '#228B22',
          fillOpacity: 0.3,
          weight: 3
        });
        ghats.bindPopup(app.buildPopup(
          'Western Ghats (Sahyadri)',
          'Length: 1600km | UNESCO Heritage 2012 | Highest: Anamudi (2695m)<br>One of world\'s 8 biodiversity hotspots',
          ['UNESCO', 'Biodiversity', 'Hotspot']
        ));
        app.addLayer(ghats);

        // UNESCO Heritage zone highlight
        const unescoZone = L.polygon([
          [8.5, 76.8], [9.5, 76.5], [10.5, 76.0], [11.5, 75.5],
          [12.5, 74.8], [13.5, 74.5], [14.5, 74.2],
          [14.5, 75.5], [13.5, 75.5], [12.5, 75.5],
          [11.5, 76.0], [10.5, 76.5], [9.5, 77.0], [8.5, 77.5], [8.5, 76.8]
        ], {
          color: '#90EE90',
          fillColor: '#90EE90',
          fillOpacity: 0.15,
          weight: 2,
          dashArray: '5,5'
        });
        unescoZone.bindPopup(app.buildPopup('UNESCO World Heritage Zone', '39 properties declared as WHS in 2012 across 6 states', ['UNESCO', 'Heritage']));
        app.addLayer(unescoZone);

        // Peaks
        DATA.westernGhats.peaks.forEach(peak => {
          const marker = L.circleMarker([peak.lat, peak.lng], {
            radius: 8,
            color: '#000',
            fillColor: '#FFD700',
            fillOpacity: 1,
            weight: 2
          });
          marker.bindPopup(app.buildPopup(
            `⛰ ${peak.name}`,
            `<b>Elevation:</b> ${peak.elev}<br>
             <b>State:</b> ${peak.state}<br>
             <b>Note:</b> ${peak.note}`,
            ['Peak', 'Western Ghats']
          ));
          app.addLayer(marker);
          app.addLayer(app.labelMarker([peak.lat + 0.15, peak.lng + 0.1], `${peak.name} (${peak.elev})`, '#FFD700', '9px'));
        });

        // Gaps
        DATA.westernGhats.gaps.forEach(gap => {
          const marker = L.circleMarker([gap.lat, gap.lng], {
            radius: 10,
            color: '#FF69B4',
            fillColor: '#FF69B4',
            fillOpacity: 0.8,
            weight: 2
          });
          marker.bindPopup(app.buildPopup(
            `🔓 ${gap.name}`,
            `<b>Width:</b> ${gap.width}<br>
             <b>Significance:</b> ${gap.significance}`,
            ['Gap', 'Pass']
          ));
          app.addLayer(marker);
          app.addLayer(app.labelMarker([gap.lat + 0.2, gap.lng + 0.1], gap.name, '#FF69B4', '9px'));
        });

        // River origins
        DATA.westernGhats.rivers.forEach(river => {
          const marker = L.circleMarker([river.originLat, river.originLng], {
            radius: 7,
            color: '#00BFFF',
            fillColor: '#00BFFF',
            fillOpacity: 0.8,
            weight: 2
          });
          marker.bindPopup(app.buildPopup(
            `🌊 ${river.name}`,
            `Origin in Western Ghats<br><b>Note:</b> ${river.note}`,
            ['River', 'Origin']
          ));
          app.addLayer(marker);
          app.addLayer(app.labelMarker([river.originLat + 0.15, river.originLng + 0.1], river.name, '#00BFFF', '9px'));
        });

        // State labels on western coast
        const stateLabels = [
          { name: 'MAHARASHTRA', lat: 19.5, lng: 74, color: '#FF6347' },
          { name: 'GOA', lat: 15.5, lng: 74, color: '#FFA500' },
          { name: 'KARNATAKA', lat: 13.5, lng: 75.8, color: '#FFD700' },
          { name: 'KERALA', lat: 10.5, lng: 76.5, color: '#00FF88' },
          { name: 'TAMIL NADU', lat: 9.5, lng: 77.5, color: '#00BFFF' }
        ];
        stateLabels.forEach(s => {
          app.addLayer(app.labelMarker([s.lat, s.lng], s.name, s.color, '10px'));
        });

        app.showToast('MAP 007 — Western Ghats loaded', 'success');
      }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // MAP 008 — Eastern Ghats Detailed Map
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
      mapNum: 8,
      title: 'Eastern Ghats Detailed Map',
      subtitle: 'Discontinuous Hills · Gaps · States Covered',
      mapConfig: { center: [16, 80], zoom: 6, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Eastern Ghats',
          items: [
            { color: '#556B2F', label: 'Eastern Ghats Segments' },
            { dot: '#FFD700', label: 'Hill Segments / Peaks' },
            { dot: '#FF6347', label: 'River Gaps (where rivers cut through)' }
          ]
        }
      ],
      info: [
        {
          title: 'EASTERN GHATS vs WESTERN GHATS',
          facts: [
            { label: 'Continuity', value: 'Eastern Ghats: Discontinuous (broken by rivers); Western Ghats: Continuous' },
            { label: 'Height', value: 'Eastern: 600m avg; Western: 1200m avg' },
            { label: 'Width', value: 'Eastern: wider & lower; Western: narrow & higher' },
            { label: 'Highest Peak', value: 'Eastern: Mahendragiri (1501m); Western: Anamudi (2695m)' }
          ]
        },
        {
          title: 'UPSC KEY FACTS',
          items: [
            'Eastern Ghats are NOT a continuous range — rivers cut them',
            'Mahanadi, Godavari, Krishna cut through Eastern Ghats',
            'Nallamalai, Erramala, Palakonda, Shevaroy = segments of Eastern Ghats',
            'Eastern Ghats: Flatter, more eroded than Western Ghats',
            'States: Odisha, Andhra Pradesh, Tamil Nadu',
            'Tribal areas — Kondh, Gond, Koya tribes',
            'Mahendragiri (1501m) = highest in Eastern Ghats'
          ]
        }
      ],
      render(map, app) {
        // Eastern Ghats range line
        const eastGhatsLine = L.polyline([
          [22, 87], [21, 86], [20, 85.5], [19, 84.5],
          [18, 83.5], [17.5, 83], [17, 82],
          [16, 80.5], [15.5, 79.8],
          [15, 79.5], [14, 79], [13, 78.5], [12, 78], [11.5, 78.5]
        ], {
          color: '#556B2F',
          weight: 4,
          opacity: 0.8
        });
        eastGhatsLine.bindPopup(app.buildPopup(
          'Eastern Ghats',
          'Discontinuous range parallel to eastern coast<br>Broken by major rivers at several points',
          ['Eastern Ghats', 'Discontinuous']
        ));
        app.addLayer(eastGhatsLine);

        // Individual hill segments
        DATA.easternGhats.segments.forEach(seg => {
          const marker = L.circleMarker([seg.lat, seg.lng], {
            radius: seg.name === 'Mahendragiri' ? 10 : 7,
            color: seg.name === 'Mahendragiri' ? '#FFD700' : '#90EE90',
            fillColor: seg.name === 'Mahendragiri' ? '#FFD700' : '#90EE90',
            fillOpacity: 0.9,
            weight: 2
          });
          marker.bindPopup(app.buildPopup(
            seg.name,
            `<b>Elevation:</b> ${seg.elev}<br>
             <b>State:</b> ${seg.state}<br>
             ${seg.note ? `<b>Note:</b> ${seg.note}` : ''}`,
            ['Eastern Ghats', seg.state]
          ));
          app.addLayer(marker);
          app.addLayer(app.labelMarker([seg.lat + 0.2, seg.lng + 0.2], seg.name, '#90EE90', '9px'));
        });

        // River gaps
        DATA.easternGhats.gaps.forEach(gap => {
          const marker = L.circleMarker([gap.lat, gap.lng], {
            radius: 9,
            color: '#FF6347',
            fillColor: '#FF6347',
            fillOpacity: 0.8,
            weight: 2
          });
          marker.bindPopup(app.buildPopup(
            `🌊 ${gap.name}`,
            gap.significance,
            ['River Gap', 'Eastern Ghats']
          ));
          app.addLayer(marker);
          app.addLayer(app.labelMarker([gap.lat + 0.2, gap.lng], gap.name, '#FF6347', '9px'));
        });

        // State labels
        [
          { name: 'ODISHA', lat: 20.5, lng: 85.5, color: '#FFA500' },
          { name: 'ANDHRA PRADESH', lat: 16.5, lng: 80, color: '#FFD700' },
          { name: 'TAMIL NADU', lat: 12, lng: 79, color: '#00BFFF' }
        ].forEach(s => {
          app.addLayer(app.labelMarker([s.lat, s.lng], s.name, s.color, '11px'));
        });

        // Comparison note
        const noteIcon = L.divIcon({
          className: '',
          html: `<div style="
            background:rgba(0,0,0,0.75);
            border:1px solid #556B2F;
            border-radius:8px;
            padding:8px 12px;
            font-size:10px;
            color:#90EE90;
            max-width:200px;
            font-family:Inter,sans-serif;
            line-height:1.5;
          ">
            <b style="color:#FFD700">⚠ Eastern Ghats</b><br>
            ≠ Continuous Range<br>
            Broken by: Mahanadi,<br>
            Godavari & Krishna rivers<br>
            <span style="color:#FFA500">Avg height: ~600 m</span>
          </div>`,
          iconAnchor: [0, 0]
        });
        app.addLayer(L.marker([19, 82], { icon: noteIcon, interactive: false }));

        app.showToast('MAP 008 — Eastern Ghats loaded', 'success');
      }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // MAP 009 — Coastal Plains of India
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
      mapNum: 9,
      title: 'Coastal Plains of India',
      subtitle: 'Western & Eastern Coasts · Major Ports · Lagoons & Backwaters',
      mapConfig: { center: [15, 78], zoom: 5.5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Western Coast',
          items: [
            { color: '#006994', label: 'Kachchh / Rann of Kachchh' },
            { color: '#0077BE', label: 'Konkan Coast (narrow, rocky)' },
            { color: '#0096C7', label: 'Kanara Coast (Karnataka)' },
            { color: '#00B4D8', label: 'Malabar Coast (backwaters)' }
          ]
        },
        {
          sectionTitle: 'Eastern Coast',
          items: [
            { color: '#FF8C00', label: 'Utkal Coast (Odisha)' },
            { color: '#FF7000', label: 'Andhra Coast (deltaic)' },
            { color: '#FF5500', label: 'Coromandel Coast (TN)' }
          ]
        },
        {
          sectionTitle: 'Features',
          items: [
            { dot: '#00FFFF', label: 'Lagoons & Backwaters' },
            { dot: '#FF0000', label: 'Major Ports' },
            { dot: '#FFD700', label: 'Estuaries & Deltas' }
          ]
        }
      ],
      info: [
        {
          title: 'COASTAL PLAINS COMPARISON',
          facts: [
            { label: 'Western Coast Width', value: '10-25 km (narrow, steep)' },
            { label: 'Eastern Coast Width', value: '100-130 km (broad, flat)' },
            { label: 'Western Characters', value: 'Rocky, estuaries, backwaters, fishing villages' },
            { label: 'Eastern Characters', value: 'Deltaic, sandy beaches, lagoons, No natural harbors' },
            { label: 'India Total Coastline', value: '7,516 km (mainland + islands)' },
            { label: 'Mainland Coastline', value: '5,422 km' }
          ]
        },
        {
          title: 'MAJOR PORTS — UPSC',
          items: [
            'Western: Mumbai (largest), JNPT (busiest container), Kandla, Kochi, Mormugao, Mangaluru',
            'Eastern: Kolkata-Haldia, Paradip, Visakhapatnam, Chennai, Tuticorin, Ennore',
            'Kandla = first major port built post-Independence',
            'Mumbai = natural harbour, handles 25% of India\'s cargo',
            'Visakhapatnam = deepest natural harbour in India'
          ]
        }
      ],
      render(map, app) {
        // Western coast sub-divisions
        const westSubdivisions = [
          {
            name: 'Kachchh (Rann)',
            color: '#006994',
            coords: [[23.8, 69.5], [24.5, 70.0], [24.8, 71.5], [23.5, 71.0], [22.5, 70.5], [22.0, 70.0], [23.0, 69.5], [23.8, 69.5]]
          },
          {
            name: 'Konkan Coast',
            color: '#0077BE',
            coords: [[21.5, 73.5], [20, 73.2], [18.5, 73.0], [17, 73.5], [15.5, 73.8], [15.5, 74.5], [17, 74.2], [18.5, 73.8], [20, 73.8], [21.5, 74.2], [21.5, 73.5]]
          },
          {
            name: 'Kanara Coast',
            color: '#0096C7',
            coords: [[15.5, 73.8], [14, 74.5], [13, 74.5], [12, 75.0], [12, 75.8], [13, 75.2], [14, 75.0], [15.5, 74.5], [15.5, 73.8]]
          },
          {
            name: 'Malabar Coast',
            color: '#00B4D8',
            coords: [[12, 75.0], [11, 75.5], [10, 76.2], [9, 76.5], [8.5, 77.5], [8.5, 78.2], [9, 77.0], [10, 76.8], [11, 76.2], [12, 75.8], [12, 75.0]]
          }
        ];

        const eastSubdivisions = [
          {
            name: 'Utkal Coast',
            color: '#FF8C00',
            coords: [[22, 87], [21, 86], [20, 86.5], [19.5, 85.5], [19.5, 86.8], [20, 87.5], [21, 87.5], [22, 87.5], [22, 87]]
          },
          {
            name: 'Andhra Coast',
            color: '#FF7000',
            coords: [[19.5, 85.5], [18, 83], [17, 82.5], [16, 81], [15, 80.5], [15, 81.5], [16, 82], [17, 83], [18, 84], [19.5, 86.5], [19.5, 85.5]]
          },
          {
            name: 'Coromandel Coast',
            color: '#FF5500',
            coords: [[15, 80.5], [14, 80.0], [13, 80.2], [12, 80.0], [10, 79.8], [8.5, 77.5], [9, 78.5], [10, 80.5], [11, 80.2], [12, 80.8], [13, 80.8], [14, 80.8], [15, 81.5], [15, 80.5]]
          }
        ];

        [...westSubdivisions, ...eastSubdivisions].forEach(sub => {
          const poly = L.polygon(sub.coords, {
            color: sub.color,
            fillColor: sub.color,
            fillOpacity: 0.4,
            weight: 2
          });
          poly.bindPopup(app.buildPopup(sub.name, `Coastal plain region of India`, ['Coast', 'Plains']));
          poly.on('mouseover', function () { this.setStyle({ fillOpacity: 0.65 }); });
          poly.on('mouseout', function () { this.setStyle({ fillOpacity: 0.4 }); });
          app.addLayer(poly);

          const centroid = sub.coords[Math.floor(sub.coords.length / 2)];
          app.addLayer(app.labelMarker(centroid, sub.name, sub.color, '9px'));
        });

        // Lagoons
        const lagoons = [
          { name: 'Chilika Lake', lat: 19.72, lng: 85.32, size: '1100 sq km', upsc: 'Largest coastal lagoon in Asia, Ramsar site, Irrawaddy dolphins' },
          { name: 'Pulicat Lake', lat: 13.65, lng: 80.22, size: '759 sq km', upsc: '2nd largest brackish water lagoon, flamingos' },
          { name: 'Vembanad Lake', lat: 9.62, lng: 76.52, size: '2033 sq km', upsc: 'Longest lake in India, Kerala backwaters' },
          { name: 'Kolleru Lake', lat: 16.62, lng: 81.23, size: '245 sq km', upsc: 'Between Krishna-Godavari delta, Ramsar site' },
          { name: 'Ashtamudi Lake', lat: 8.95, lng: 76.58, size: '61 sq km', upsc: 'Kerala backwaters, Ramsar site' },
          { name: 'Hussain Sagar', lat: 17.42, lng: 78.47, size: '5.7 sq km', upsc: 'Man-made lake, Hyderabad' }
        ];

        lagoons.forEach(lagoon => {
          const marker = L.circleMarker([lagoon.lat, lagoon.lng], {
            radius: 9,
            color: '#00FFFF',
            fillColor: '#00FFFF',
            fillOpacity: 0.7,
            weight: 2
          });
          marker.bindPopup(app.buildPopup(
            `💧 ${lagoon.name}`,
            `<b>Size:</b> ${lagoon.size}<br><b>UPSC Note:</b> ${lagoon.upsc}`,
            ['Lagoon', 'UPSC']
          ));
          app.addLayer(marker);
          app.addLayer(app.labelMarker([lagoon.lat + 0.15, lagoon.lng + 0.1], lagoon.name, '#00FFFF', '9px'));
        });

        // Ports
        DATA.coastalPlains.ports.forEach(port => {
          const color = port.coast === 'West' ? '#FF69B4' : '#FF0000';
          const marker = L.circleMarker([port.lat, port.lng], {
            radius: 7,
            color: '#000',
            fillColor: color,
            fillOpacity: 0.9,
            weight: 2
          });
          marker.bindPopup(app.buildPopup(
            `⚓ ${port.name}`,
            `<b>Type:</b> ${port.type}<br><b>Coast:</b> ${port.coast}`,
            ['Port', port.coast + ' Coast']
          ));
          app.addLayer(marker);
          app.addLayer(app.labelMarker([port.lat + 0.2, port.lng], port.name, color, '9px'));
        });

        app.showToast('MAP 009 — Coastal Plains loaded', 'success');
      }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // MAP 010 — Islands of India
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
      mapNum: 10,
      title: 'Islands of India',
      subtitle: 'Andaman & Nicobar · Lakshadweep · Barren Volcano · Distances',
      mapConfig: { center: [12, 87], zoom: 4.5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Island Groups',
          items: [
            { dot: '#00CED1', label: 'Andaman Islands (Bay of Bengal)' },
            { dot: '#20B2AA', label: 'Nicobar Islands (Bay of Bengal)' },
            { dot: '#FF7F50', label: 'Lakshadweep (Arabian Sea)' },
            { dot: '#FF4500', label: 'Barren Island (Active Volcano)' },
            { dot: '#8B0000', label: 'Narcondam (Extinct Volcano)' }
          ]
        }
      ],
      info: [
        {
          title: 'ANDAMAN & NICOBAR',
          facts: [
            { label: 'Total Islands', value: '572 (only 37 inhabited)' },
            { label: 'Location', value: 'Bay of Bengal' },
            { label: 'Capital', value: 'Port Blair (South Andaman)' },
            { label: 'Geological Origin', value: 'Submerged hill ranges of Arakan Yoma (Myanmar)' },
            { label: 'Southernmost Point', value: 'Indira Point, Great Nicobar (6°45\'N) — closest to equator' },
            { label: 'Volcano', value: 'Barren Island — only active volcano in South Asia' }
          ]
        },
        {
          title: 'LAKSHADWEEP',
          facts: [
            { label: 'Total Islands', value: '36 (10 inhabited)' },
            { label: 'Location', value: 'Arabian Sea, ~200-440 km from Kerala coast' },
            { label: 'Capital', value: 'Kavaratti' },
            { label: 'Geological Origin', value: 'Coral origin (atolls)' },
            { label: 'Largest Island', value: 'Andrott' },
            { label: 'Airport', value: 'Only at Agatti island' }
          ]
        },
        {
          title: 'UPSC KEY FACTS',
          items: [
            'Indira Point (Pygmalion Point) — southernmost point of India at 6°45\'N',
            'Duncan Passage — between South Andaman & Little Andaman (48km)',
            '10° Channel — between Andaman & Nicobar Islands (150km)',
            '8° Channel — between Lakshadweep & Minicoy',
            '9° Channel — between Minicoy & Maldives',
            'Sentinelese tribe in North Sentinel — most isolated people on earth',
            'Lakshadweep has 96% Muslim population',
            'Great Nicobar — biosphere reserve, just 93km from Sumatra (Indonesia)'
          ]
        }
      ],
      render(map, app) {
        // Andaman Islands
        DATA.islands.andamanNicobar.forEach(island => {
          const isVolcano = island.name === 'Barren Island';
          const isExtinct = island.name === 'Narcondam Island';
          const isSentinel = island.name === 'Sentinel Island';
          const isNicobar = ['Car Nicobar', 'Katchall Island', 'Great Nicobar'].includes(island.name);

          let color = '#00CED1';
          if (isVolcano) color = '#FF4500';
          else if (isExtinct) color = '#8B0000';
          else if (isNicobar) color = '#20B2AA';
          else if (isSentinel) color = '#9400D3';

          const marker = L.circleMarker([island.lat, island.lng], {
            radius: isVolcano || isExtinct ? 10 : 8,
            color: '#000',
            fillColor: color,
            fillOpacity: 0.9,
            weight: 2
          });

          marker.bindPopup(app.buildPopup(
            `🏝 ${island.name}`,
            `<b>Area:</b> ${island.area || 'Small island'}<br>
             <b>UPSC:</b> ${island.upsc}`,
            ['Island', isNicobar ? 'Nicobar' : 'Andaman']
          ));

          app.addLayer(marker);
          app.addLayer(app.labelMarker([island.lat + 0.2, island.lng + 0.15], island.name, color, '8px'));
        });

        // Lakshadweep Islands
        DATA.islands.lakshadweep.forEach(island => {
          const marker = L.circleMarker([island.lat, island.lng], {
            radius: 7,
            color: '#000',
            fillColor: '#FF7F50',
            fillOpacity: 0.9,
            weight: 2
          });
          marker.bindPopup(app.buildPopup(
            `🏝 ${island.name}`,
            `<b>UPSC:</b> ${island.upsc}`,
            ['Lakshadweep', 'Coral', 'Arabian Sea']
          ));
          app.addLayer(marker);
          app.addLayer(app.labelMarker([island.lat + 0.15, island.lng + 0.1], island.name, '#FF7F50', '8px'));
        });

        // Important channels as lines
        const channels = [
          {
            name: 'Duncan Passage (48km)',
            coords: [[10.9, 92.1], [10.0, 92.8]],
            color: '#FFFF00'
          },
          {
            name: '10° Channel (150km)',
            coords: [[10.0, 92.0], [8.5, 93.5]],
            color: '#FF69B4'
          },
          {
            name: '8° Channel',
            coords: [[8.5, 73.5], [8.3, 72.5]],
            color: '#00FF88'
          },
          {
            name: '9° Channel',
            coords: [[8.3, 73.0], [7.0, 73.0]],
            color: '#00BFFF'
          }
        ];

        channels.forEach(ch => {
          const line = L.polyline(ch.coords, {
            color: ch.color,
            weight: 2,
            dashArray: '6,4',
            opacity: 0.8
          });
          line.bindPopup(app.buildPopup(ch.name, 'Important maritime channel between islands', ['Channel', 'Maritime']));
          app.addLayer(line);
          const mid = ch.coords[0];
          app.addLayer(app.labelMarker([mid[0] + 0.2, mid[1]], ch.name, ch.color, '8px'));
        });

        // Indira Point marker
        const indiraMarker = L.marker([6.75, 93.84], {
          icon: L.divIcon({
            className: '',
            html: `<div style="
              background:#FFD700;
              color:#000;
              border-radius:50%;
              width:20px;height:20px;
              display:flex;align-items:center;justify-content:center;
              font-weight:bold;font-size:12px;
              border:2px solid #000;
              box-shadow:0 0 10px rgba(255,215,0,0.8);
            ">★</div>`,
            iconAnchor: [10, 10]
          })
        });
        indiraMarker.bindPopup(app.buildPopup(
          '★ Indira Point (Pygmalion Point)',
          '<b>Southernmost Point of India</b><br>Location: Great Nicobar<br>Latitude: 6°45\'N<br>Just 93km from Sumatra (Indonesia)',
          ['Southernmost', 'India Extremity']
        ));
        app.addLayer(indiraMarker);
        app.addLayer(app.labelMarker([7.1, 93.84], 'Indira Point\n(Southernmost 6°45\'N)', '#FFD700', '9px'));

        // Sri Lanka proximity
        const sriLankaLabel = app.labelMarker([7.9, 81], 'SRI LANKA', '#AAAAAA', '10px');
        app.addLayer(sriLankaLabel);

        // Palk Strait label
        app.addLayer(app.labelMarker([9.2, 79.8], 'Palk Strait', '#00BFFF', '9px'));

        // Gulf of Mannar
        app.addLayer(app.labelMarker([8.5, 78.5], 'Gulf of Mannar', '#00BFFF', '9px'));

        app.showToast('MAP 010 — Islands of India loaded', 'success');
      }
    }

  ]; // END INDIA_PHYSICAL_MAPS

  // ══════════════════════════════════════════════════════════════
  // REGISTER WITH GLOBAL REGISTRY
  // ══════════════════════════════════════════════════════════════
  window.registerMaps('india-physical', INDIA_PHYSICAL_MAPS);
  console.log('🗺 India Physical Maps: 10 maps registered (MAP 001-010)');

})();
