// ============================================
// LAKES DATA - FILE 2 (Lakes 11-20)
// ============================================

const lakesData2 = [
    {
        id: 'lake-erie',
        name: 'Lake Erie',
        countries: [
            { name: 'United States', code: 'US' },
            { name: 'Canada', code: 'CA' }
        ],
        continent: 'North America',
        waterType: 'freshwater',
        lakeType: 'Glacial',
        surfaceArea: 25667,
        maxDepth: 64,
        avgDepth: 19,
        volume: 484,
        elevation: 174,
        coordinates: [42.2, -81.2],
        defaultZoom: 7,
        image: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lake Erie' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-83.5, 41.7], [-82.5, 42.0], [-81.0, 42.8], [-79.5, 42.8],
                    [-79.0, 42.5], [-79.5, 42.0], [-81.0, 41.5], [-82.5, 41.4],
                    [-83.5, 41.7]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Detroit River', length: 51, coordinates: [[-83.1, 42.3], [-83.0, 42.1], [-82.9, 41.9]] },
            { name: 'Maumee River', length: 209, coordinates: [[-84.0, 41.5], [-83.7, 41.5], [-83.5, 41.6]] }
        ],
        outflowRivers: [
            { name: 'Niagara River', length: 58, coordinates: [[-79.0, 42.9], [-79.0, 43.1], [-79.0, 43.3]] }
        ],
        basinArea: 78000,
        islands: [
            { name: 'Pelee Island', coordinates: [41.77, -82.67], area: 42 },
            { name: 'Kelleys Island', coordinates: [41.6, -82.7], area: 11 }
        ],
        cities: [
            { name: 'Cleveland', coordinates: [41.4993, -81.6944], country: 'USA', population: 372000 },
            { name: 'Buffalo', coordinates: [42.8864, -78.8784], country: 'USA', population: 255000 },
            { name: 'Toledo', coordinates: [41.6528, -83.5379], country: 'USA', population: 270000 },
            { name: 'Erie', coordinates: [42.1292, -80.0851], country: 'USA', population: 95000 }
        ],
        biodiversity: [
            { label: 'Fish Species', value: 'Walleye, Yellow Perch, Bass' },
            { label: 'Invasive Species', value: 'Zebra mussels, Round goby' }
        ],
        economicImportance: [
            { label: 'Shipping', value: 'Major Great Lakes port' },
            { label: 'Fishing', value: '$1 billion walleye industry' },
            { label: 'Tourism', value: 'Islands, beaches' }
        ],
        environmentalIssues: [
            { label: 'Algae Blooms', value: 'Harmful algal blooms - Toledo 2014' },
            { label: 'Dead Zone', value: 'Central basin hypoxia' },
            { label: 'Agricultural Runoff', value: 'Phosphorus pollution' }
        ],
        waterDisputes: [],
        historicalImportance: [
            { label: 'War of 1812', value: 'Battle of Lake Erie' },
            { label: 'Industrial History', value: 'Steel industry growth' }
        ]
    },
    {
        id: 'lake-winnipeg',
        name: 'Lake Winnipeg',
        countries: [
            { name: 'Canada', code: 'CA' }
        ],
        continent: 'North America',
        waterType: 'freshwater',
        lakeType: 'Glacial',
        surfaceArea: 24514,
        maxDepth: 36,
        avgDepth: 12,
        volume: 284,
        elevation: 217,
        coordinates: [52.1, -97.25],
        defaultZoom: 6,
        image: 'https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lake Winnipeg' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-98.5, 53.5], [-97.0, 54.0], [-96.0, 53.5], [-96.5, 52.0],
                    [-97.0, 50.5], [-98.0, 50.8], [-98.5, 52.0], [-98.5, 53.5]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Saskatchewan River', length: 1939, coordinates: [[-99.0, 53.0], [-98.5, 53.2], [-98.0, 53.4]] },
            { name: 'Red River', length: 877, coordinates: [[-97.0, 50.0], [-97.1, 50.3], [-97.2, 50.6]] },
            { name: 'Winnipeg River', length: 235, coordinates: [[-95.5, 50.5], [-96.0, 50.7], [-96.5, 51.0]] }
        ],
        outflowRivers: [
            { name: 'Nelson River', length: 644, coordinates: [[-97.5, 53.5], [-97.0, 54.5], [-96.0, 55.5]] }
        ],
        basinArea: 984200,
        islands: [
            { name: 'Hecla Island', coordinates: [51.2, -96.6], area: 108 },
            { name: 'Black Island', coordinates: [51.4, -96.5], area: 56 }
        ],
        cities: [
            { name: 'Winnipeg', coordinates: [49.8951, -97.1384], country: 'Canada', population: 749607 },
            { name: 'Gimli', coordinates: [50.6328, -96.9903], country: 'Canada', population: 6181 },
            { name: 'Selkirk', coordinates: [50.1436, -96.8842], country: 'Canada', population: 10504 }
        ],
        biodiversity: [
            { label: 'Fish Species', value: 'Walleye, Sauger, Lake Whitefish, Northern Pike' },
            { label: 'Bird Species', value: 'Pelicans, Cormorants, Gulls' },
            { label: 'Ecosystem', value: 'Important migratory bird habitat' }
        ],
        economicImportance: [
            { label: 'Commercial Fishing', value: 'Major walleye fishery' },
            { label: 'Hydroelectric', value: 'Nelson River power generation' },
            { label: 'Tourism', value: 'Beaches, Hecla Provincial Park' }
        ],
        environmentalIssues: [
            { label: 'Eutrophication', value: 'Algae blooms from nutrient loading' },
            { label: 'Agricultural Runoff', value: 'Phosphorus and nitrogen pollution' },
            { label: 'Water Level', value: 'Regulation impacts on shoreline' }
        ],
        waterDisputes: [],
        historicalImportance: [
            { label: 'Fur Trade', value: 'Major route for Hudson Bay Company' },
            { label: 'Indigenous History', value: 'Cree, Ojibwe traditional territories' },
            { label: 'Icelandic Settlement', value: 'New Iceland colony 1875' }
        ]
    },
    {
        id: 'lake-ontario',
        name: 'Lake Ontario',
        countries: [
            { name: 'United States', code: 'US' },
            { name: 'Canada', code: 'CA' }
        ],
        continent: 'North America',
        waterType: 'freshwater',
        lakeType: 'Glacial',
        surfaceArea: 18970,
        maxDepth: 244,
        avgDepth: 86,
        volume: 1640,
        elevation: 75,
        coordinates: [43.7, -77.9],
        defaultZoom: 7,
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lake Ontario' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-79.8, 43.2], [-79.0, 43.2], [-77.5, 43.3], [-76.2, 43.7],
                    [-76.5, 44.2], [-77.5, 44.0], [-79.0, 43.8], [-79.8, 43.5],
                    [-79.8, 43.2]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Niagara River', length: 58, coordinates: [[-79.0, 43.3], [-79.1, 43.2], [-79.0, 43.1]] },
            { name: 'Genesee River', length: 249, coordinates: [[-77.6, 43.3], [-77.6, 43.1], [-77.7, 42.9]] },
            { name: 'Oswego River', length: 38, coordinates: [[-76.5, 43.5], [-76.5, 43.3], [-76.4, 43.1]] }
        ],
        outflowRivers: [
            { name: 'St. Lawrence River', length: 1197, coordinates: [[-76.0, 44.2], [-75.0, 44.8], [-74.0, 45.0]] }
        ],
        basinArea: 64030,
        islands: [
            { name: 'Wolfe Island', coordinates: [44.2, -76.4], area: 124 },
            { name: 'Amherst Island', coordinates: [44.15, -76.7], area: 67 },
            { name: 'Toronto Islands', coordinates: [43.62, -79.38], area: 2.3 }
        ],
        cities: [
            { name: 'Toronto', coordinates: [43.6532, -79.3832], country: 'Canada', population: 2731571 },
            { name: 'Hamilton', coordinates: [43.2557, -79.8711], country: 'Canada', population: 536917 },
            { name: 'Rochester', coordinates: [43.1566, -77.6088], country: 'USA', population: 211328 },
            { name: 'Kingston', coordinates: [44.2312, -76.4860], country: 'Canada', population: 123798 },
            { name: 'Mississauga', coordinates: [43.5890, -79.6441], country: 'Canada', population: 721599 }
        ],
        biodiversity: [
            { label: 'Fish Species', value: 'Salmon, Lake Trout, Bass, Walleye' },
            { label: 'Invasive Species', value: 'Zebra mussels, Sea lamprey, Alewife' },
            { label: 'Native Species', value: 'Atlantic Salmon (reintroduced)' }
        ],
        economicImportance: [
            { label: 'Shipping', value: 'St. Lawrence Seaway terminus' },
            { label: 'Drinking Water', value: 'Supplies millions in GTA' },
            { label: 'Recreation', value: 'Sailing, fishing, beaches' },
            { label: 'Hydroelectric', value: 'Robert Moses Plant' }
        ],
        environmentalIssues: [
            { label: 'Pollution', value: 'PCBs, mercury contamination' },
            { label: 'Invasive Species', value: 'Ecosystem disruption' },
            { label: 'Urban Runoff', value: 'Toronto area stormwater' }
        ],
        waterDisputes: [],
        historicalImportance: [
            { label: 'War of 1812', value: 'Naval battles on lake' },
            { label: 'Colonial History', value: 'French-British conflicts' },
            { label: 'Immigration', value: 'Gateway to Upper Canada' }
        ]
    },
    {
        id: 'lake-ladoga',
        name: 'Lake Ladoga',
        countries: [
            { name: 'Russia', code: 'RU' }
        ],
        continent: 'Europe',
        waterType: 'freshwater',
        lakeType: 'Glacial/Tectonic',
        surfaceArea: 17700,
        maxDepth: 230,
        avgDepth: 51,
        volume: 908,
        elevation: 4,
        coordinates: [61.0, 31.5],
        defaultZoom: 7,
        image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lake Ladoga' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [29.5, 61.8], [31.0, 61.8], [32.5, 61.5], [33.0, 60.8],
                    [32.5, 60.0], [31.5, 59.9], [30.0, 60.2], [29.5, 61.0],
                    [29.5, 61.8]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Svir River', length: 224, coordinates: [[34.5, 61.0], [33.5, 60.8], [32.5, 60.7]] },
            { name: 'Vuoksi River', length: 156, coordinates: [[29.0, 61.2], [29.5, 61.0], [30.0, 60.8]] },
            { name: 'Volkhov River', length: 224, coordinates: [[31.5, 58.5], [31.5, 59.5], [31.5, 60.0]] }
        ],
        outflowRivers: [
            { name: 'Neva River', length: 74, coordinates: [[30.0, 60.0], [30.2, 59.9], [30.3, 59.95]] }
        ],
        basinArea: 276000,
        islands: [
            { name: 'Valaam', coordinates: [61.38, 30.95], area: 28 },
            { name: 'Konevets', coordinates: [60.85, 30.6], area: 8.5 },
            { name: 'Kilpola', coordinates: [61.5, 31.4], area: 32 }
        ],
        cities: [
            { name: 'Saint Petersburg', coordinates: [59.9311, 30.3609], country: 'Russia', population: 5383890 },
            { name: 'Priozersk', coordinates: [61.0394, 30.1292], country: 'Russia', population: 18000 },
            { name: 'Sortavala', coordinates: [61.7036, 30.6917], country: 'Russia', population: 18600 },
            { name: 'Shlisselburg', coordinates: [59.9453, 31.0333], country: 'Russia', population: 14700 }
        ],
        biodiversity: [
            { label: 'Fish Species', value: 'Salmon, Trout, Pike, Perch, Vendace' },
            { label: 'Endemic Species', value: 'Ladoga Seal (Ringed Seal subspecies)' },
            { label: 'Bird Species', value: 'Migratory waterfowl, Eagles' }
        ],
        economicImportance: [
            { label: 'Shipping', value: 'Part of Volga-Baltic Waterway' },
            { label: 'Fishing', value: 'Commercial and sport fishing' },
            { label: 'Drinking Water', value: 'Source for St. Petersburg' },
            { label: 'Tourism', value: 'Valaam Monastery, islands' }
        ],
        environmentalIssues: [
            { label: 'Industrial Pollution', value: 'Paper mills, factories' },
            { label: 'Eutrophication', value: 'Nutrient loading' },
            { label: 'Oil Pollution', value: 'Shipping accidents' }
        ],
        waterDisputes: [],
        historicalImportance: [
            { label: 'WWII', value: 'Road of Life - Siege of Leningrad supply route' },
            { label: 'Viking Age', value: 'Trade route to Byzantine Empire' },
            { label: 'Religious', value: 'Valaam Monastery founded 10th century' }
        ]
    },
    {
        id: 'lake-balkhash',
        name: 'Lake Balkhash',
        countries: [
            { name: 'Kazakhstan', code: 'KZ' }
        ],
        continent: 'Asia',
        waterType: 'freshwater/saline',
        lakeType: 'Endorheic',
        surfaceArea: 16400,
        maxDepth: 26,
        avgDepth: 5.8,
        volume: 112,
        elevation: 340,
        coordinates: [46.5, 75.0],
        defaultZoom: 7,
        image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lake Balkhash' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [73.0, 46.8], [74.5, 47.0], [76.5, 46.8], [79.0, 46.2],
                    [79.0, 45.8], [77.0, 45.5], [75.0, 45.8], [73.5, 46.2],
                    [73.0, 46.8]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Ili River', length: 1439, coordinates: [[79.5, 44.0], [77.0, 45.0], [75.0, 46.0]] },
            { name: 'Karatal River', length: 390, coordinates: [[79.5, 45.5], [78.5, 45.8], [77.5, 46.0]] },
            { name: 'Lepsy River', length: 417, coordinates: [[80.0, 45.0], [79.0, 45.5], [78.0, 46.0]] }
        ],
        outflowRivers: [],
        basinArea: 413000,
        islands: [
            { name: 'Basaral', coordinates: [46.1, 74.8], area: 45 },
            { name: 'Tasaral', coordinates: [46.5, 75.2], area: 38 },
            { name: 'Ortaaral', coordinates: [46.3, 76.5], area: 22 }
        ],
        cities: [
            { name: 'Balkhash', coordinates: [46.8431, 74.9511], country: 'Kazakhstan', population: 66804 },
            { name: 'Priozersk', coordinates: [46.0489, 73.6853], country: 'Kazakhstan', population: 11000 }
        ],
        biodiversity: [
            { label: 'Fish Species', value: 'Carp, Pike-perch, Bream, Catfish' },
            { label: 'Unique Feature', value: 'Half fresh, half saline water' },
            { label: 'Bird Species', value: 'Pelicans, Cormorants, Flamingos' }
        ],
        economicImportance: [
            { label: 'Mining', value: 'Copper smelting - Balkhash city' },
            { label: 'Fishing', value: 'Commercial fishing industry' },
            { label: 'Irrigation', value: 'Agriculture in Ili basin' }
        ],
        environmentalIssues: [
            { label: 'Shrinking', value: 'Water diversion reducing inflow' },
            { label: 'Pollution', value: 'Heavy metals from mining' },
            { label: 'China Water Use', value: 'Ili River diversions upstream' },
            { label: 'Aral Sea Parallel', value: 'Potential similar fate' }
        ],
        waterDisputes: [
            { label: 'Kazakhstan-China', value: 'Ili River water allocation' }
        ],
        historicalImportance: [
            { label: 'Silk Road', value: 'Near historic trade routes' },
            { label: 'Soviet Era', value: 'Industrial development' },
            { label: 'Ancient', value: 'Scythian and Turkic peoples' }
        ]
    },
    {
        id: 'lake-vostok',
        name: 'Lake Vostok',
        countries: [
            { name: 'Antarctica', code: 'AQ' }
        ],
        continent: 'Antarctica',
        waterType: 'freshwater',
        lakeType: 'Subglacial',
        surfaceArea: 12500,
        maxDepth: 510,
        avgDepth: 344,
        volume: 5400,
        elevation: -500,
        coordinates: [-77.5, 106.0],
        defaultZoom: 5,
        image: 'https://images.unsplash.com/photo-1509296003600-1d9d66f5ea41?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1509296003600-1d9d66f5ea41?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lake Vostok' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [102.0, -77.0], [104.0, -76.5], [107.0, -77.0], [109.0, -77.5],
                    [108.0, -78.5], [105.0, -78.5], [102.5, -78.0], [102.0, -77.0]
                ]]
            }
        },
        inflowRivers: [],
        outflowRivers: [],
        basinArea: 12500,
        islands: [],
        cities: [],
        researchStations: [
            { name: 'Vostok Station', coordinates: [-78.4645, 106.8340], country: 'Russia', established: 1957 }
        ],
        biodiversity: [
            { label: 'Unknown Life', value: 'Potentially unique microbial life' },
            { label: 'Isolation', value: 'Sealed for 15-25 million years' },
            { label: 'Research', value: 'Astrobiology implications for Europa' }
        ],
        economicImportance: [
            { label: 'Scientific Research', value: 'Climate history, extremophiles' },
            { label: 'Ice Cores', value: 'Oldest climate records on Earth' }
        ],
        environmentalIssues: [
            { label: 'Contamination Risk', value: 'Drilling may introduce microbes' },
            { label: 'Protocol', value: 'Antarctic Treaty protections' }
        ],
        waterDisputes: [],
        historicalImportance: [
            { label: 'Discovery', value: 'Detected by radar 1996' },
            { label: 'Drilling', value: 'Russian borehole reached lake 2012' },
            { label: 'Cold Record', value: 'Coldest place on Earth: -89.2°C' }
        ],
        uniqueFeatures: [
            { label: 'Depth Below Ice', value: '4,000 meters of ice above' },
            { label: 'Pressure', value: '350 atmospheres at lake surface' },
            { label: 'Temperature', value: 'Water ~-3°C (liquid due to pressure)' }
        ]
    },
    {
        id: 'lake-onega',
        name: 'Lake Onega',
        countries: [
            { name: 'Russia', code: 'RU' }
        ],
        continent: 'Europe',
        waterType: 'freshwater',
        lakeType: 'Glacial/Tectonic',
        surfaceArea: 9700,
        maxDepth: 127,
        avgDepth: 30,
        volume: 295,
        elevation: 33,
        coordinates: [61.5, 35.5],
        defaultZoom: 7,
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lake Onega' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [34.0, 62.5], [35.5, 62.8], [36.5, 62.2], [36.5, 61.5],
                    [36.0, 61.0], [35.0, 60.8], [34.0, 61.5], [34.0, 62.5]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Shuya River', length: 194, coordinates: [[33.0, 62.0], [33.8, 61.8], [34.5, 61.7]] },
            { name: 'Vodla River', length: 149, coordinates: [[37.0, 62.5], [36.5, 62.3], [36.0, 62.2]] },
            { name: 'Suna River', length: 280, coordinates: [[33.5, 62.5], [34.0, 62.3], [34.5, 62.0]] }
        ],
        outflowRivers: [
            { name: 'Svir River', length: 224, coordinates: [[34.8, 61.0], [33.5, 60.8], [32.0, 60.7]] }
        ],
        basinArea: 66284,
        islands: [
            { name: 'Kizhi Island', coordinates: [62.07, 35.22], area: 5 },
            { name: 'Bolshoy Klimenetsky', coordinates: [62.2, 35.1], area: 147 },
            { name: 'Bolshoy Lelikovsky', coordinates: [61.8, 35.6], area: 52 }
        ],
        cities: [
            { name: 'Petrozavodsk', coordinates: [61.7891, 34.3596], country: 'Russia', population: 280711 },
            { name: 'Kondopoga', coordinates: [62.2053, 34.2697], country: 'Russia', population: 30000 },
            { name: 'Medvezhyegorsk', coordinates: [62.9167, 34.4500], country: 'Russia', population: 14000 }
        ],
        biodiversity: [
            { label: 'Fish Species', value: 'Salmon, Trout, Pike, Whitefish, Smelt' },
            { label: 'Crustaceans', value: 'Freshwater relict species' },
            { label: 'Water Quality', value: 'Very clean, oligotrophic' }
        ],
        economicImportance: [
            { label: 'Shipping', value: 'Volga-Baltic Waterway' },
            { label: 'Hydroelectric', value: 'Multiple power plants' },
            { label: 'Tourism', value: 'Kizhi UNESCO World Heritage Site' },
            { label: 'Fishing', value: 'Commercial freshwater fishing' }
        ],
        environmentalIssues: [
            { label: 'Industrial Pollution', value: 'Paper mills at Kondopoga' },
            { label: 'Eutrophication', value: 'Localized nutrient enrichment' }
        ],
        waterDisputes: [],
        historicalImportance: [
            { label: 'Kizhi Pogost', value: 'UNESCO site, 18th century wooden churches' },
            { label: 'Petroglyphs', value: 'Ancient rock carvings 6000 years old' },
            { label: 'WWII', value: 'Finnish-Soviet conflict area' }
        ]
    },
    {
        id: 'lake-titicaca',
        name: 'Lake Titicaca',
        countries: [
            { name: 'Peru', code: 'PE' },
            { name: 'Bolivia', code: 'BO' }
        ],
        continent: 'South America',
        waterType: 'freshwater',
        lakeType: 'Tectonic/Glacial',
        surfaceArea: 8372,
        maxDepth: 281,
        avgDepth: 107,
        volume: 893,
        elevation: 3812,
        coordinates: [-15.9, -69.3],
        defaultZoom: 8,
        image: 'https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lake Titicaca' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-70.5, -15.0], [-69.5, -15.2], [-68.8, -15.8], [-68.8, -16.5],
                    [-69.2, -16.6], [-70.0, -16.3], [-70.5, -15.8], [-70.5, -15.0]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Ramis River', length: 283, coordinates: [[-70.0, -15.0], [-69.8, -15.3], [-69.5, -15.5]] },
            { name: 'Coata River', length: 170, coordinates: [[-70.3, -15.5], [-70.0, -15.6], [-69.8, -15.7]] },
            { name: 'Ilave River', length: 163, coordinates: [[-70.5, -16.0], [-70.0, -16.0], [-69.7, -16.0]] }
        ],
        outflowRivers: [
            { name: 'Desaguadero River', length: 436, coordinates: [[-69.0, -16.6], [-68.5, -17.0], [-67.5, -18.0]] }
        ],
        basinArea: 58000,
        islands: [
            { name: 'Isla del Sol', coordinates: [-16.02, -69.18], area: 14.3 },
            { name: 'Isla de la Luna', coordinates: [-16.03, -69.07], area: 1.05 },
            { name: 'Taquile', coordinates: [-15.77, -69.68], area: 5.72 },
            { name: 'Amantani', coordinates: [-15.67, -69.72], area: 9.28 }
        ],
        cities: [
            { name: 'Puno', coordinates: [-15.8402, -70.0219], country: 'Peru', population: 150000 },
            { name: 'Juliaca', coordinates: [-15.5000, -70.1333], country: 'Peru', population: 276110 },
            { name: 'Copacabana', coordinates: [-16.1667, -69.0833], country: 'Bolivia', population: 6000 }
        ],
        biodiversity: [
            { label: 'Endemic Fish', value: 'Orestias (killifish), Trichomycterus' },
            { label: 'Giant Frog', value: 'Lake Titicaca water frog (endangered)' },
            { label: 'Birds', value: 'Titicaca grebe (endangered), Flamingos' },
            { label: 'Totora Reeds', value: 'Used for floating islands' }
        ],
        economicImportance: [
            { label: 'Tourism', value: 'Major destination - floating islands' },
            { label: 'Fishing', value: 'Traditional fishing communities' },
            { label: 'Agriculture', value: 'Quinoa, potatoes in basin' },
            { label: 'Cultural', value: 'Inca and pre-Inca heritage' }
        ],
        environmentalIssues: [
            { label: 'Pollution', value: 'Sewage from Puno and mining' },
            { label: 'Invasive Species', value: 'Trout affecting native fish' },
            { label: 'Climate Change', value: 'Glacier melt affecting inflow' },
            { label: 'Water Level', value: 'Declining levels' }
        ],
        waterDisputes: [
            { label: 'Peru-Bolivia', value: 'Shared management, generally cooperative' }
        ],
        historicalImportance: [
            { label: 'Inca Origin', value: 'Mythical birthplace of Inca civilization' },
            { label: 'Tiwanaku', value: 'Pre-Inca civilization on shores' },
            { label: 'Uros People', value: 'Floating reed island communities' }
        ]
    },
    {
        id: 'lake-nicaragua',
        name: 'Lake Nicaragua',
        countries: [
            { name: 'Nicaragua', code: 'NI' }
        ],
        continent: 'North America',
        waterType: 'freshwater',
        lakeType: 'Tectonic',
        surfaceArea: 8264,
        maxDepth: 26,
        avgDepth: 12.5,
        volume: 108,
        elevation: 32,
        coordinates: [11.6, -85.4],
        defaultZoom: 8,
        image: 'https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lake Nicaragua' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-86.2, 11.9], [-85.5, 12.2], [-84.8, 11.8], [-84.8, 11.0],
                    [-85.2, 10.8], [-85.8, 11.0], [-86.2, 11.4], [-86.2, 11.9]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Tipitapa River', length: 35, coordinates: [[-86.0, 12.2], [-85.8, 12.1], [-85.5, 12.0]] }
        ],
        outflowRivers: [
            { name: 'San Juan River', length: 199, coordinates: [[-84.7, 11.0], [-84.0, 10.8], [-83.7, 10.7]] }
        ],
        basinArea: 23850,
        islands: [
            { name: 'Ometepe', coordinates: [11.5, -85.55], area: 276 },
            { name: 'Zapatera', coordinates: [11.73, -85.83], area: 52 },
            { name: 'Solentiname Islands', coordinates: [11.2, -84.7], area: 15 }
        ],
        cities: [
            { name: 'Granada', coordinates: [11.9344, -85.9560], country: 'Nicaragua', population: 123697 },
            { name: 'Rivas', coordinates: [11.4372, -85.8350], country: 'Nicaragua', population: 45000 },
            { name: 'San Carlos', coordinates: [11.1239, -84.7783], country: 'Nicaragua', population: 13000 }
        ],
        biodiversity: [
            { label: 'Unique Species', value: 'Bull sharks, Sawfish (freshwater)' },
            { label: 'Fish Species', value: 'Cichlids, Tarpon, Gar' },
            { label: 'Wildlife', value: 'Caimans, Howler monkeys on islands' }
        ],
        economicImportance: [
            { label: 'Fishing', value: 'Commercial and artisanal fishing' },
            { label: 'Tourism', value: 'Ometepe Island, colonial cities' },
            { label: 'Transportation', value: 'Inter-lake shipping' }
        ],
        environmentalIssues: [
            { label: 'Canal Project', value: 'Proposed Nicaragua Canal threat' },
            { label: 'Pollution', value: 'Agricultural runoff, sewage' },
            { label: 'Invasive Species', value: 'Tilapia affecting natives' }
        ],
        waterDisputes: [
            { label: 'Nicaragua-Costa Rica', value: 'San Juan River navigation rights' }
        ],
        historicalImportance: [
            { label: 'Pirates', value: 'Used by pirates to raid Granada' },
            { label: 'Canal History', value: 'Multiple canal proposals since 1800s' },
            { label: 'Indigenous', value: 'Chorotega and Nicarao peoples' }
        ]
    },
    {
        id: 'lake-athabasca',
        name: 'Lake Athabasca',
        countries: [
            { name: 'Canada', code: 'CA' }
        ],
        continent: 'North America',
        waterType: 'freshwater',
        lakeType: 'Glacial',
        surfaceArea: 7850,
        maxDepth: 124,
        avgDepth: 20,
        volume: 204,
        elevation: 213,
        coordinates: [59.2, -109.0],
        defaultZoom: 7,
        image: 'https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lake Athabasca' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-111.5, 59.5], [-110.0, 59.7], [-108.0, 59.5], [-106.5, 59.0],
                    [-107.0, 58.5], [-109.0, 58.5], [-111.0, 58.8], [-111.5, 59.5]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Athabasca River', length: 1231, coordinates: [[-111.5, 58.8], [-111.0, 59.0], [-110.5, 59.2]] },
            { name: 'Fond du Lac River', length: 165, coordinates: [[-105.5, 59.0], [-106.5, 59.2], [-107.5, 59.3]] }
        ],
        outflowRivers: [
            { name: 'Slave River', length: 434, coordinates: [[-111.5, 59.0], [-112.0, 60.0], [-112.5, 61.0]] }
        ],
        basinArea: 271000,
        islands: [
            { name: 'Burntwood Island', coordinates: [59.2, -108.5], area: 15 }
        ],
        cities: [
            { name: 'Fort Chipewyan', coordinates: [58.7178, -111.1508], country: 'Canada', population: 847 },
            { name: 'Uranium City', coordinates: [59.5667, -108.6167], country: 'Canada', population: 89 },
            { name: 'Fort McMurray', coordinates: [56.7264, -111.3803], country: 'Canada', population: 66573 }
        ],
        biodiversity: [
            { label: 'Fish Species', value: 'Lake Trout, Walleye, Northern Pike, Whitefish' },
            { label: 'Wildlife', value: 'Wood bison, Woodland caribou, Wolves' },
            { label: 'Birds', value: 'Pelicans, Eagles, Migratory waterfowl' }
        ],
        economicImportance: [
            { label: 'Oil Sands', value: 'Near Athabasca oil sands' },
            { label: 'Uranium Mining', value: 'Historical mining at Uranium City' },
            { label: 'Fishing', value: 'Commercial and sport fishing' },
            { label: 'Tourism', value: 'Wilderness tourism, fishing lodges' }
        ],
        environmentalIssues: [
            { label: 'Oil Sands Impact', value: 'Downstream pollution concerns' },
            { label: 'Mercury', value: 'Fish contamination' },
            { label: 'Climate Change', value: 'Changing water levels and ice cover' },
            { label: 'PAC Delta', value: 'UNESCO site at risk' }
        ],
        waterDisputes: [],
        historicalImportance: [
            { label: 'Fur Trade', value: 'Major route for Hudson Bay Company' },
            { label: 'Fort Chipewyan', value: 'Oldest settlement in Alberta (1788)' },
            { label: 'Indigenous', value: 'Dene and Cree traditional territory' },
            { label: 'Uranium Discovery', value: 'Pitchblende found 1930' }
        ]
    }
];

// Export for use in main application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = lakesData2;
}
