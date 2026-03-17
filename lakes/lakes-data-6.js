// ============================================
// LAKES DATA - FILE 6 (Lakes 51-60)
// ============================================

const lakesData6 = [
    {
        id: 'lake-managua',
        name: 'Lake Managua',
        countries: [
            { name: 'Nicaragua', code: 'NI' }
        ],
        continent: 'North America',
        waterType: 'freshwater',
        lakeType: 'Volcanic',
        surfaceArea: 1042,
        maxDepth: 26,
        avgDepth: 8,
        volume: 8,
        elevation: 39,
        coordinates: [12.35, -86.35],
        defaultZoom: 9,
        image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lake Managua' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-86.6, 12.5], [-86.1, 12.5], [-86.0, 12.2],
                    [-86.3, 12.1], [-86.7, 12.3], [-86.6, 12.5]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Viejo River', length: 75, coordinates: [[-86.5, 12.6], [-86.4, 12.5], [-86.3, 12.4]] },
            { name: 'Sinecapa River', length: 60, coordinates: [[-86.2, 12.6], [-86.2, 12.5], [-86.1, 12.45]] }
        ],
        outflowRivers: [
            { name: 'Tipitapa River', length: 35, coordinates: [[-86.0, 12.2], [-85.95, 12.15], [-85.9, 12.1]] }
        ],
        basinArea: 6600,
        islands: [
            { name: 'Momotombito Island', coordinates: [12.35, -86.55], area: 3, description: 'Volcanic island with ancient petroglyphs' }
        ],
        cities: [
            { name: 'Managua', coordinates: [12.1149, -86.2362], country: 'Nicaragua', population: 1048000 },
            { name: 'Tipitapa', coordinates: [12.1972, -86.0950], country: 'Nicaragua', population: 127000 }
        ],
        biodiversity: [
            { label: 'Fish Species', value: 'Cichlids, Guapote (recovering)' },
            { label: 'Birds', value: 'Herons, Cormorants' },
            { label: 'Status', value: 'Ecosystem severely damaged' }
        ],
        economicImportance: [
            { label: 'Capital Location', value: 'Managua on southern shore' },
            { label: 'Geothermal', value: 'Momotombo volcano energy' },
            { label: 'Historical Fishing', value: 'Now limited due to pollution' }
        ],
        environmentalIssues: [
            { label: 'Severe Pollution', value: 'Decades of untreated sewage' },
            { label: 'Industrial Waste', value: 'Heavy metals contamination' },
            { label: 'Cleanup Efforts', value: 'Treatment plant built 2009' }
        ],
        waterDisputes: [],
        historicalImportance: [
            { label: 'Indigenous Name', value: 'Lake Xolotlán (Nahuatl)' },
            { label: 'Pre-Columbian', value: 'Important to indigenous cultures' },
            { label: 'Spanish Colonial', value: 'Strategic location' }
        ]
    },
    {
        id: 'lake-inari',
        name: 'Lake Inari',
        countries: [
            { name: 'Finland', code: 'FI' }
        ],
        continent: 'Europe',
        waterType: 'freshwater',
        lakeType: 'Glacial',
        surfaceArea: 1102,
        maxDepth: 92,
        avgDepth: 14,
        volume: 15,
        elevation: 119,
        coordinates: [69.1, 27.7],
        defaultZoom: 8,
        image: 'https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lake Inari' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [27.0, 69.3], [28.0, 69.4], [28.5, 69.2],
                    [28.3, 68.8], [27.5, 68.8], [26.8, 69.0], [27.0, 69.3]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Ivalo River', length: 180, coordinates: [[27.5, 68.5], [27.6, 68.7], [27.7, 68.9]] },
            { name: 'Juutua River', length: 60, coordinates: [[27.3, 69.0], [27.4, 69.05], [27.5, 69.1]] }
        ],
        outflowRivers: [
            { name: 'Paatsjoki River', length: 145, coordinates: [[28.5, 69.15], [29.0, 69.2], [29.5, 69.3]] }
        ],
        basinArea: 14520,
        islands: [
            { name: 'Ukonkivi', coordinates: [69.25, 27.7], area: 0.5, description: 'Sacred Sámi island' },
            { name: 'Hautuumaasaari', coordinates: [69.15, 27.5], area: 2, description: 'Cemetery Island' },
            { name: 'Over 3000 islands', coordinates: [69.1, 27.7], area: 'Various' }
        ],
        cities: [
            { name: 'Inari', coordinates: [69.0667, 27.0167], country: 'Finland', population: 600 },
            { name: 'Ivalo', coordinates: [68.6583, 27.5500], country: 'Finland', population: 3500 }
        ],
        biodiversity: [
            { label: 'Fish Species', value: 'Brown Trout, Arctic Char, Whitefish' },
            { label: 'Endemic Trout', value: 'Lake Inari Brown Trout' },
            { label: 'Birds', value: 'Loons, Goldeneyes, Mergansers' }
        ],
        economicImportance: [
            { label: 'Tourism', value: 'Northern Lights destination' },
            { label: 'Fishing', value: 'Sport and traditional fishing' },
            { label: 'Sámi Culture', value: 'Cultural tourism' }
        ],
        environmentalIssues: [
            { label: 'Introduced Species', value: 'Lake Trout introduction controversy' },
            { label: 'Climate Change', value: 'Shorter ice season' },
            { label: 'Hydropower', value: 'Downstream dam impacts' }
        ],
        waterDisputes: [],
        historicalImportance: [
            { label: 'Sámi Heritage', value: 'Sacred islands and sites' },
            { label: 'Largest in Lapland', value: '3rd largest lake in Finland' },
            { label: 'Arctic Circle', value: 'One of largest lakes above Arctic Circle' }
        ]
    },
    {
        id: 'lake-peipus',
        name: 'Lake Peipus',
        countries: [
            { name: 'Estonia', code: 'EE' },
            { name: 'Russia', code: 'RU' }
        ],
        continent: 'Europe',
        waterType: 'freshwater',
        lakeType: 'Glacial',
        surfaceArea: 3555,
        maxDepth: 15,
        avgDepth: 7,
        volume: 25,
        elevation: 30,
        coordinates: [58.6, 27.5],
        defaultZoom: 7,
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lake Peipus' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [27.0, 59.0], [28.0, 59.0], [28.2, 58.5],
                    [28.0, 58.0], [27.5, 57.8], [27.0, 58.0],
                    [26.8, 58.5], [27.0, 59.0]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Velikaya River', length: 430, coordinates: [[28.5, 57.5], [28.2, 57.8], [28.0, 58.0]] },
            { name: 'Emajõgi River', length: 101, coordinates: [[26.5, 58.4], [27.0, 58.4], [27.3, 58.5]] }
        ],
        outflowRivers: [
            { name: 'Narva River', length: 77, coordinates: [[27.8, 59.0], [28.0, 59.2], [28.2, 59.4]] }
        ],
        basinArea: 47800,
        islands: [
            { name: 'Piirissaar', coordinates: [58.5, 27.5], area: 7.8, description: 'Old Believers community' },
            { name: 'Kolpino', coordinates: [58.9, 27.8], area: 11 }
        ],
        cities: [
            { name: 'Tartu', coordinates: [58.378, 26.7290], country: 'Estonia', population: 93000 },
            { name: 'Pskov', coordinates: [57.8194, 28.3319], country: 'Russia', population: 210000 },
            { name: 'Mustvee', coordinates: [58.8489, 26.9431], country: 'Estonia', population: 1300 }
        ],
        biodiversity: [
            { label: 'Fish Species', value: '35 species including Pike, Perch, Eel' },
            { label: 'Smelt', value: 'Important commercial species' },
            { label: 'Birds', value: 'Major migratory stopover' }
        ],
        economicImportance: [
            { label: 'Fishing', value: 'Commercial fisheries both countries' },
            { label: 'Tourism', value: 'Summer recreation' },
            { label: 'Border', value: 'EU-Russia border' }
        ],
        environmentalIssues: [
            { label: 'Eutrophication', value: 'Agricultural runoff' },
            { label: 'Algae Blooms', value: 'Summer cyanobacteria' },
            { label: 'Shallow Depth', value: 'Vulnerable to warming' }
        ],
        waterDisputes: [
            { label: 'Border Lake', value: 'Estonia-Russia border tensions' },
            { label: 'Treaty', value: '2014 border treaty (not ratified)' }
        ],
        historicalImportance: [
            { label: 'Battle on Ice', value: '1242 - Alexander Nevsky victory' },
            { label: 'Old Believers', value: 'Religious community since 1700s' },
            { label: 'Also Known As', value: 'Lake Chudskoe (Russian)' }
        ]
    },
    {
        id: 'lake-neuchatel',
        name: 'Lake Neuchâtel',
        countries: [
            { name: 'Switzerland', code: 'CH' }
        ],
        continent: 'Europe',
        waterType: 'freshwater',
        lakeType: 'Glacial',
        surfaceArea: 218,
        maxDepth: 153,
        avgDepth: 64,
        volume: 14,
        elevation: 429,
        coordinates: [46.9, 6.85],
        defaultZoom: 10,
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lake Neuchâtel' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [6.7, 47.05], [6.95, 47.0], [7.05, 46.9],
                    [6.95, 46.8], [6.75, 46.85], [6.65, 46.95], [6.7, 47.05]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Orbe/Thielle', length: 58, coordinates: [[6.65, 46.85], [6.7, 46.88], [6.75, 46.9]] },
            { name: 'Areuse', length: 30, coordinates: [[6.7, 47.0], [6.73, 46.98], [6.75, 46.95]] }
        ],
        outflowRivers: [
            { name: 'Thielle/Zihl', length: 14, coordinates: [[7.0, 47.0], [7.05, 47.02], [7.1, 47.05]] }
        ],
        basinArea: 2672,
        islands: [],
        cities: [
            { name: 'Neuchâtel', coordinates: [46.9920, 6.9311], country: 'Switzerland', population: 34000 },
            { name: 'Yverdon-les-Bains', coordinates: [46.7785, 6.6410], country: 'Switzerland', population: 30000 },
            { name: 'Grandson', coordinates: [46.8100, 6.6461], country: 'Switzerland', population: 3500 }
        ],
        biodiversity: [
            { label: 'Fish Species', value: 'Pike, Perch, Whitefish' },
            { label: 'Birds', value: 'Great Crested Grebe, waterfowl' },
            { label: 'Protected', value: 'Grande Cariçaie wetland reserve' }
        ],
        economicImportance: [
            { label: 'Tourism', value: 'Watersports, cruises' },
            { label: 'Wine', value: 'Vineyards on slopes' },
            { label: 'Watch Industry', value: 'Region known for watchmaking' }
        ],
        environmentalIssues: [
            { label: 'Generally Clean', value: 'Well-protected' },
            { label: 'Invasive Species', value: 'Quagga mussel concerns' }
        ],
        waterDisputes: [],
        historicalImportance: [
            { label: 'Largest Swiss Lake', value: 'Entirely within Switzerland' },
            { label: 'Pile Dwellings', value: 'Prehistoric settlements UNESCO' },
            { label: 'Battle of Grandson', value: '1476 Swiss victory' }
        ]
    },
    {
        id: 'lake-garda',
        name: 'Lake Garda',
        countries: [
            { name: 'Italy', code: 'IT' }
        ],
        continent: 'Europe',
        waterType: 'freshwater',
        lakeType: 'Glacial',
        surfaceArea: 370,
        maxDepth: 346,
        avgDepth: 133,
        volume: 49,
        elevation: 65,
        coordinates: [45.6, 10.65],
        defaultZoom: 9,
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lake Garda' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [10.5, 45.9], [10.8, 45.85], [10.9, 45.6],
                    [10.75, 45.4], [10.55, 45.45], [10.45, 45.65],
                    [10.45, 45.8], [10.5, 45.9]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Sarca River', length: 78, coordinates: [[10.85, 46.0], [10.8, 45.9], [10.75, 45.85]] }
        ],
        outflowRivers: [
            { name: 'Mincio River', length: 75, coordinates: [[10.7, 45.42], [10.75, 45.35], [10.8, 45.25]] }
        ],
        basinArea: 2290,
        islands: [
            { name: 'Isola del Garda', coordinates: [45.58, 10.6], area: 0.07, description: 'Private island with villa' },
            { name: 'Isola di San Biagio', coordinates: [45.48, 10.58], area: 0.01 }
        ],
        cities: [
            { name: 'Verona', coordinates: [45.4384, 10.9916], country: 'Italy', population: 258000 },
            { name: 'Brescia', coordinates: [45.5416, 10.2118], country: 'Italy', population: 196000 },
            { name: 'Riva del Garda', coordinates: [45.8858, 10.8411], country: 'Italy', population: 17000 },
            { name: 'Sirmione', coordinates: [45.4931, 10.6050], country: 'Italy', population: 8000 },
            { name: 'Desenzano', coordinates: [45.4706, 10.5361], country: 'Italy', population: 29000 }
        ],
        biodiversity: [
            { label: 'Fish Species', value: 'Carpione (endemic), Pike, Eel' },
            { label: 'Mediterranean Flora', value: 'Olives, lemons, palms' },
            { label: 'Mild Climate', value: 'Sub-Mediterranean microclimate' }
        ],
        economicImportance: [
            { label: 'Tourism', value: '25 million visitors/year' },
            { label: 'Agriculture', value: 'Olive oil, lemons, wine' },
            { label: 'Theme Parks', value: 'Gardaland and others' }
        ],
        environmentalIssues: [
            { label: 'Tourism Pressure', value: 'Overdevelopment concerns' },
            { label: 'Water Quality', value: 'Generally good' },
            { label: 'Traffic', value: 'Congestion around lake' }
        ],
        waterDisputes: [],
        historicalImportance: [
            { label: 'Roman Era', value: 'Catullus villa at Sirmione' },
            { label: 'Largest Italian Lake', value: 'By surface area' },
            { label: 'Scaliger Castles', value: 'Medieval fortifications' }
        ]
    },
    {
        id: 'lake-como',
        name: 'Lake Como',
        countries: [
            { name: 'Italy', code: 'IT' }
        ],
        continent: 'Europe',
        waterType: 'freshwater',
        lakeType: 'Glacial',
        surfaceArea: 146,
        maxDepth: 425,
        avgDepth: 154,
        volume: 22.5,
        elevation: 198,
        coordinates: [46.0, 9.27],
        defaultZoom: 10,
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lake Como' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [9.1, 46.15], [9.35, 46.2], [9.45, 46.05],
                    [9.4, 45.85], [9.25, 45.8], [9.05, 45.95],
                    [9.0, 46.1], [9.1, 46.15]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Adda River', length: 313, coordinates: [[9.4, 46.25], [9.38, 46.2], [9.35, 46.15]] },
            { name: 'Mera River', length: 52, coordinates: [[9.4, 46.2], [9.38, 46.17], [9.35, 46.15]] }
        ],
        outflowRivers: [
            { name: 'Adda River', length: 313, coordinates: [[9.4, 45.82], [9.5, 45.75], [9.6, 45.7]] }
        ],
        basinArea: 4572,
        islands: [
            { name: 'Isola Comacina', coordinates: [45.97, 9.17], area: 0.075, description: 'Only island, historic ruins' }
        ],
        cities: [
            { name: 'Como', coordinates: [45.808, 9.0852], country: 'Italy', population: 84000 },
            { name: 'Lecco', coordinates: [45.8566, 9.3977], country: 'Italy', population: 48000 },
            { name: 'Bellagio', coordinates: [45.9878, 9.2622], country: 'Italy', population: 3000 },
            { name: 'Varenna', coordinates: [46.0103, 9.2842], country: 'Italy', population: 750 }
        ],
        biodiversity: [
            { label: 'Fish Species', value: 'Shad, Perch, Pike' },
            { label: 'Gardens', value: 'Botanical gardens with exotic plants' }
        ],
        economicImportance: [
            { label: 'Luxury Tourism', value: 'Celebrity destination' },
            { label: 'Silk Industry', value: 'Historical Como silk production' },
            { label: 'Villas', value: 'Historic lakefront estates' }
        ],
        environmentalIssues: [
            { label: 'Algae', value: 'Occasional blooms' },
            { label: 'Development', value: 'Lakefront pressure' }
        ],
        waterDisputes: [],
        historicalImportance: [
            { label: 'Roman Writers', value: 'Pliny the Elder and Younger' },
            { label: 'Deepest in Italy', value: '425m maximum depth' },
            { label: 'Y-Shape', value: 'Distinctive three-branched form' }
        ]
    },
    {
        id: 'lake-maggiore',
        name: 'Lake Maggiore',
        countries: [
            { name: 'Italy', code: 'IT' },
            { name: 'Switzerland', code: 'CH' }
        ],
        continent: 'Europe',
        waterType: 'freshwater',
        lakeType: 'Glacial',
        surfaceArea: 213,
        maxDepth: 372,
        avgDepth: 178,
        volume: 38,
        elevation: 193,
        coordinates: [45.95, 8.65],
        defaultZoom: 9,
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lake Maggiore' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [8.5, 46.15], [8.75, 46.2], [8.85, 46.0],
                    [8.75, 45.75], [8.55, 45.8], [8.45, 46.0], [8.5, 46.15]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Ticino River', length: 248, coordinates: [[8.9, 46.3], [8.8, 46.2], [8.75, 46.1]] },
            { name: 'Maggia River', length: 60, coordinates: [[8.7, 46.25], [8.72, 46.2], [8.73, 46.15]] }
        ],
        outflowRivers: [
            { name: 'Ticino River', length: 248, coordinates: [[8.65, 45.72], [8.7, 45.65], [8.8, 45.5]] }
        ],
        basinArea: 6599,
        islands: [
            { name: 'Isola Bella', coordinates: [45.9, 8.53], area: 0.032, description: 'Baroque palace and gardens' },
            { name: 'Isola Madre', coordinates: [45.92, 8.55], area: 0.08, description: 'Botanical gardens' },
            { name: 'Isola dei Pescatori', coordinates: [45.905, 8.52], area: 0.02, description: 'Fishing village' },
            { name: 'Brissago Islands', coordinates: [46.13, 8.73], area: 0.06, description: 'Swiss botanical gardens' }
        ],
        cities: [
            { name: 'Stresa', coordinates: [45.8833, 8.5333], country: 'Italy', population: 5000 },
            { name: 'Verbania', coordinates: [45.9214, 8.5514], country: 'Italy', population: 31000 },
            { name: 'Locarno', coordinates: [46.1667, 8.7917], country: 'Switzerland', population: 16000 },
            { name: 'Ascona', coordinates: [46.1556, 8.7722], country: 'Switzerland', population: 5500 }
        ],
        biodiversity: [
            { label: 'Fish Species', value: 'Pike, Perch, Shad, Eel' },
            { label: 'Exotic Plants', value: 'Subtropical gardens on islands' }
        ],
        economicImportance: [
            { label: 'Tourism', value: 'Major Italian lakes destination' },
            { label: 'Film Festival', value: 'Locarno Film Festival' },
            { label: 'Gardens', value: 'World-famous botanical collections' }
        ],
        environmentalIssues: [
            { label: 'Floods', value: '2020 major flooding' },
            { label: 'Water Quality', value: 'Generally good' }
        ],
        waterDisputes: [],
        historicalImportance: [
            { label: 'Borromean Islands', value: 'Borromeo family since 1500s' },
            { label: 'Second Largest', value: 'In Italy by surface area' },
            { label: 'Treaty of Locarno', value: '1925 European peace treaty' }
        ]
    },
    {
        id: 'lake-zurich',
        name: 'Lake Zürich',
        countries: [
            { name: 'Switzerland', code: 'CH' }
        ],
        continent: 'Europe',
        waterType: 'freshwater',
        lakeType: 'Glacial',
        surfaceArea: 88,
        maxDepth: 136,
        avgDepth: 49,
        volume: 4,
        elevation: 406,
        coordinates: [47.25, 8.75],
        defaultZoom: 10,
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lake Zürich' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [8.55, 47.35], [8.75, 47.32], [8.95, 47.2],
                    [8.85, 47.15], [8.65, 47.18], [8.52, 47.28], [8.55, 47.35]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Linth', length: 65, coordinates: [[9.0, 47.1], [8.95, 47.15], [8.9, 47.18]] },
            { name: 'Jona', length: 22, coordinates: [[8.85, 47.25], [8.82, 47.22], [8.8, 47.2]] }
        ],
        outflowRivers: [
            { name: 'Limmat', length: 36, coordinates: [[8.54, 47.37], [8.52, 47.38], [8.5, 47.4]] }
        ],
        basinArea: 1829,
        islands: [
            { name: 'Ufenau', coordinates: [47.22, 8.78], area: 0.11, description: 'Largest Swiss island in a lake' },
            { name: 'Lützelau', coordinates: [47.22, 8.77], area: 0.03 }
        ],
        cities: [
            { name: 'Zürich', coordinates: [47.3769, 8.5417], country: 'Switzerland', population: 420000 },
            { name: 'Rapperswil-Jona', coordinates: [47.2267, 8.8183], country: 'Switzerland', population: 27000 },
            { name: 'Meilen', coordinates: [47.27, 8.64], country: 'Switzerland', population: 14000 }
        ],
        biodiversity: [
            { label: 'Fish Species', value: 'Whitefish, Perch, Pike' },
            { label: 'Water Quality', value: 'Excellent - swimmable' }
        ],
        economicImportance: [
            { label: 'Real Estate', value: 'Most expensive lakefront in Switzerland' },
            { label: 'Recreation', value: 'Swimming, sailing' },
            { label: 'Financial Center', value: 'Zürich banking nearby' }
        ],
        environmentalIssues: [
            { label: 'Success Story', value: 'Recovered from 1970s pollution' },
            { label: 'Well Protected', value: 'Strict regulations' }
        ],
        waterDisputes: [],
        historicalImportance: [
            { label: 'Prehistoric', value: 'Pile dwelling settlements' },
            { label: 'Reformation', value: 'Zwingli in Zürich' },
            { label: 'Banana Shape', value: 'Distinctive curved form' }
        ]
    },
    {
        id: 'loch-ness',
        name: 'Loch Ness',
        countries: [
            { name: 'United Kingdom', code: 'GB' }
        ],
        continent: 'Europe',
        waterType: 'freshwater',
        lakeType: 'Glacial/Tectonic',
        surfaceArea: 56,
        maxDepth: 230,
        avgDepth: 132,
        volume: 7.4,
        elevation: 16,
        coordinates: [57.3, -4.45],
        defaultZoom: 10,
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Loch Ness' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-4.65, 57.45], [-4.35, 57.4], [-4.25, 57.2],
                    [-4.4, 57.15], [-4.6, 57.25], [-4.7, 57.4], [-4.65, 57.45]
                ]]
            }
        },
        inflowRivers: [
            { name: 'River Oich', length: 6, coordinates: [[-4.7, 57.15], [-4.65, 57.18], [-4.6, 57.2]] },
            { name: 'River Moriston', length: 50, coordinates: [[-5.0, 57.25], [-4.8, 57.25], [-4.65, 57.28]] },
            { name: 'River Enrick', length: 30, coordinates: [[-4.7, 57.38], [-4.55, 57.37], [-4.5, 57.35]] }
        ],
        outflowRivers: [
            { name: 'River Ness', length: 11, coordinates: [[-4.25, 57.47], [-4.22, 57.48], [-4.2, 57.5]] }
        ],
        basinArea: 1775,
        islands: [
            { name: 'Cherry Island', coordinates: [57.18, -4.57], area: 0.001, description: 'Artificial crannog island' }
        ],
        cities: [
            { name: 'Inverness', coordinates: [57.4778, -4.2247], country: 'UK', population: 50000 },
            { name: 'Fort Augustus', coordinates: [57.145, -4.6806], country: 'UK', population: 650 },
            { name: 'Drumnadrochit', coordinates: [57.3333, -4.4833], country: 'UK', population: 1000 }
        ],
        biodiversity: [
            { label: 'Fish Species', value: 'Atlantic Salmon, Trout, Eel, Pike' },
            { label: 'Peat Content', value: 'Dark water from peat' },
            { label: 'Wildlife', value: 'Otters, deer on shores' }
        ],
        economicImportance: [
            { label: 'Monster Tourism', value: 'Nessie-related tourism major industry' },
            { label: 'Whisky', value: 'Distilleries in region' },
            { label: 'Cruises', value: 'Loch Ness cruises' }
        ],
        environmentalIssues: [
            { label: 'Clean', value: 'Good water quality' },
            { label: 'Invasive Species', value: 'Signal crayfish concern' }
        ],
        waterDisputes: [],
        historicalImportance: [
            { label: 'Loch Ness Monster', value: 'First sighting 565 AD (St. Columba)' },
            { label: 'Modern Interest', value: '1933 "Surgeon\'s Photo"' },
            { label: 'Urquhart Castle', value: 'Medieval castle ruins on shore' },
            { label: 'Most Water', value: 'More freshwater than all English lakes combined' }
        ]
    },
    {
        id: 'lake-balaton',
        name: 'Lake Balaton',
        countries: [
            { name: 'Hungary', code: 'HU' }
        ],
        continent: 'Europe',
        waterType: 'freshwater',
        lakeType: 'Tectonic',
        surfaceArea: 594,
        maxDepth: 12,
        avgDepth: 3,
        volume: 1.9,
        elevation: 104,
        coordinates: [46.85, 17.75],
        defaultZoom: 9,
        image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lake Balaton' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [17.25, 46.9], [17.9, 46.95], [18.15, 46.85],
                    [18.0, 46.75], [17.4, 46.75], [17.2, 46.82], [17.25, 46.9]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Zala River', length: 138, coordinates: [[17.0, 46.75], [17.1, 46.78], [17.2, 46.82]] }
        ],
        outflowRivers: [
            { name: 'Sió Canal', length: 121, coordinates: [[18.15, 46.85], [18.3, 46.8], [18.5, 46.7]] }
        ],
        basinArea: 5775,
        islands: [
            { name: 'Tihany Peninsula', coordinates: [46.91, 17.88], area: 12, description: 'Not an island but prominent peninsula' }
        ],
        cities: [
            { name: 'Siófok', coordinates: [46.9047, 18.0489], country: 'Hungary', population: 25000 },
            { name: 'Balatonfüred', coordinates: [46.9569, 17.8878], country: 'Hungary', population: 13000 },
            { name: 'Keszthely', coordinates: [46.7667, 17.2500], country: 'Hungary', population: 20000 }
        ],
        biodiversity: [
            { label: 'Fish Species', value: 'Pike-perch, Carp, Catfish' },
            { label: 'Birds', value: 'Kis-Balaton reserve important' },
            { label: 'Shallow', value: 'Warms quickly in summer' }
        ],
        economicImportance: [
            { label: 'Tourism', value: 'Hungarian Riviera - millions of visitors' },
            { label: 'Wine', value: 'Badacsony wine region' },
            { label: 'Thermal Spas', value: 'Hévíz thermal lake nearby' }
        ],
        environmentalIssues: [
            { label: 'Eutrophication', value: 'Historical algae problems' },
            { label: 'Recovery', value: 'Improved since 1990s' },
            { label: 'Invasive Mussels', value: 'Dreissena species' }
        ],
        waterDisputes: [],
        historicalImportance: [
            { label: 'Largest Central Europe', value: 'Largest lake in CE' },
            { label: 'Hungarian Sea', value: 'National symbol of Hungary' },
            { label: 'Tihany Abbey', value: '1055 AD - oldest Hungarian document' }
        ]
    }
];
