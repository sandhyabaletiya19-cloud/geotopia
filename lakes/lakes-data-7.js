// ============================================
// LAKES DATA - FILE 7 (Lakes 61-70)
// ============================================

const lakesData7 = [
    {
        id: 'lake-tahoe',
        name: 'Lake Tahoe',
        countries: [
            { name: 'United States', code: 'US' }
        ],
        continent: 'North America',
        waterType: 'freshwater',
        lakeType: 'Tectonic/Volcanic',
        surfaceArea: 495,
        maxDepth: 501,
        avgDepth: 301,
        volume: 150,
        elevation: 1897,
        coordinates: [39.1, -120.0],
        defaultZoom: 10,
        image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lake Tahoe' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-120.15, 39.25], [-119.95, 39.28], [-119.9, 39.1],
                    [-119.95, 38.95], [-120.1, 38.93], [-120.2, 39.05],
                    [-120.2, 39.2], [-120.15, 39.25]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Upper Truckee River', length: 35, coordinates: [[-120.0, 38.85], [-120.0, 38.92], [-119.98, 38.98]] },
            { name: 'Trout Creek', length: 25, coordinates: [[-119.95, 38.88], [-119.96, 38.93], [-119.97, 38.98]] }
        ],
        outflowRivers: [
            { name: 'Truckee River', length: 195, coordinates: [[-120.13, 39.16], [-120.0, 39.3], [-119.8, 39.5]] }
        ],
        basinArea: 1310,
        islands: [
            { name: 'Fannette Island', coordinates: [38.955, -120.11], area: 0.01, description: 'Only island in Lake Tahoe, in Emerald Bay' }
        ],
        cities: [
            { name: 'South Lake Tahoe', coordinates: [38.9332, -119.9843], country: 'USA', population: 22000 },
            { name: 'Tahoe City', coordinates: [39.1677, -120.1427], country: 'USA', population: 1600 },
            { name: 'Incline Village', coordinates: [39.2513, -119.9429], country: 'USA', population: 9000 },
            { name: 'Stateline', coordinates: [38.9577, -119.9405], country: 'USA', population: 1200 }
        ],
        biodiversity: [
            { label: 'Fish Species', value: 'Lake Trout (Mackinaw), Rainbow Trout, Kokanee Salmon' },
            { label: 'Native Fish', value: 'Lahontan Cutthroat Trout (reintroduced)' },
            { label: 'Clarity', value: 'Among clearest lakes in the world' },
            { label: 'Wildlife', value: 'Black bears, mule deer, osprey' }
        ],
        economicImportance: [
            { label: 'Tourism', value: 'Year-round destination - 15 million visitors/year' },
            { label: 'Ski Resorts', value: 'Heavenly, Squaw Valley, Northstar' },
            { label: 'Casinos', value: 'Nevada side gaming' },
            { label: 'Real Estate', value: 'Premium lakefront properties' }
        ],
        environmentalIssues: [
            { label: 'Clarity Decline', value: 'Lost 25 feet of clarity since 1960s' },
            { label: 'Invasive Species', value: 'Asian clams, warm water fish' },
            { label: 'Development', value: 'Urbanization impacts' },
            { label: 'Climate Change', value: 'Reduced snowpack, earlier warming' }
        ],
        waterDisputes: [
            { label: 'California-Nevada', value: 'Interstate water allocation' }
        ],
        historicalImportance: [
            { label: 'Washoe Tribe', value: 'Traditional territory for 10,000 years' },
            { label: 'Name Origin', value: 'Washoe word "Da ow a ga" (edge of the lake)' },
            { label: 'Gold Rush', value: 'Logging for Comstock Lode mines' },
            { label: '2nd Deepest US', value: 'After Crater Lake' }
        ]
    },
    {
        id: 'lake-lucerne',
        name: 'Lake Lucerne',
        countries: [
            { name: 'Switzerland', code: 'CH' }
        ],
        continent: 'Europe',
        waterType: 'freshwater',
        lakeType: 'Glacial',
        surfaceArea: 114,
        maxDepth: 214,
        avgDepth: 104,
        volume: 12,
        elevation: 434,
        coordinates: [47.0, 8.45],
        defaultZoom: 10,
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lake Lucerne' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [8.3, 47.05], [8.5, 47.08], [8.65, 47.0],
                    [8.6, 46.92], [8.45, 46.88], [8.3, 46.95], [8.3, 47.05]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Reuss River', length: 164, coordinates: [[8.6, 46.88], [8.55, 46.92], [8.5, 46.97]] },
            { name: 'Muota River', length: 30, coordinates: [[8.65, 46.98], [8.6, 46.99], [8.55, 47.0]] },
            { name: 'Engelberger Aa', length: 38, coordinates: [[8.35, 46.95], [8.38, 46.97], [8.4, 46.99]] }
        ],
        outflowRivers: [
            { name: 'Reuss River', length: 164, coordinates: [[8.3, 47.05], [8.25, 47.08], [8.2, 47.15]] }
        ],
        basinArea: 2124,
        islands: [],
        cities: [
            { name: 'Lucerne', coordinates: [47.0502, 8.3093], country: 'Switzerland', population: 82000 },
            { name: 'Weggis', coordinates: [47.0333, 8.4333], country: 'Switzerland', population: 4500 },
            { name: 'Vitznau', coordinates: [47.0167, 8.4833], country: 'Switzerland', population: 1400 },
            { name: 'Brunnen', coordinates: [46.9981, 8.6058], country: 'Switzerland', population: 7500 },
            { name: 'Altdorf', coordinates: [46.8808, 8.6436], country: 'Switzerland', population: 9200 }
        ],
        biodiversity: [
            { label: 'Fish Species', value: 'Lake Trout, Whitefish, Pike, Perch' },
            { label: 'Water Quality', value: 'Excellent, very clean' },
            { label: 'Alpine Flora', value: 'Mountain flowers on surrounding peaks' }
        ],
        economicImportance: [
            { label: 'Tourism', value: 'Major Swiss destination' },
            { label: 'Paddle Steamers', value: 'Historic fleet of steamboats' },
            { label: 'Mountain Railways', value: 'Rigi, Pilatus, Stanserhorn' },
            { label: 'Concerts', value: 'Lucerne Festival' }
        ],
        environmentalIssues: [
            { label: 'Well Protected', value: 'Strict environmental regulations' },
            { label: 'Clean Water', value: 'High water quality maintained' }
        ],
        waterDisputes: [],
        historicalImportance: [
            { label: 'Swiss Founding', value: 'Rütli meadow - 1291 oath' },
            { label: 'William Tell', value: 'Legend set on lake shores' },
            { label: 'Chapel Bridge', value: 'Lucerne landmark from 1333' },
            { label: 'Complex Shape', value: 'Four basins, also called Vierwaldstättersee' }
        ]
    },
    {
        id: 'lake-biwa',
        name: 'Lake Biwa',
        countries: [
            { name: 'Japan', code: 'JP' }
        ],
        continent: 'Asia',
        waterType: 'freshwater',
        lakeType: 'Tectonic',
        surfaceArea: 670,
        maxDepth: 104,
        avgDepth: 41,
        volume: 28,
        elevation: 84,
        coordinates: [35.3, 136.1],
        defaultZoom: 9,
        image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lake Biwa' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [135.9, 35.5], [136.2, 35.45], [136.3, 35.25],
                    [136.2, 35.1], [136.0, 35.05], [135.85, 35.2],
                    [135.85, 35.4], [135.9, 35.5]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Yasu River', length: 65, coordinates: [[136.2, 35.0], [136.1, 35.05], [136.0, 35.1]] },
            { name: 'Hino River', length: 45, coordinates: [[136.25, 35.15], [136.2, 35.18], [136.15, 35.2]] },
            { name: 'Ane River', length: 55, coordinates: [[136.3, 35.4], [136.2, 35.42], [136.1, 35.45]] }
        ],
        outflowRivers: [
            { name: 'Seta River/Uji River/Yodo River', length: 75, coordinates: [[135.9, 35.0], [135.8, 34.95], [135.7, 34.9]] }
        ],
        basinArea: 3174,
        islands: [
            { name: 'Chikubu Island', coordinates: [35.42, 136.15], area: 0.14, description: 'Sacred island with temple' },
            { name: 'Okishima Island', coordinates: [35.22, 136.12], area: 1.52, description: 'Only inhabited island' },
            { name: 'Takeshima Island', coordinates: [35.35, 136.12], area: 0.02 }
        ],
        cities: [
            { name: 'Otsu', coordinates: [35.0044, 135.8685], country: 'Japan', population: 344000 },
            { name: 'Hikone', coordinates: [35.2763, 136.2587], country: 'Japan', population: 114000 },
            { name: 'Nagahama', coordinates: [35.3816, 136.2816], country: 'Japan', population: 115000 },
            { name: 'Kusatsu', coordinates: [35.0237, 135.9609], country: 'Japan', population: 143000 }
        ],
        biodiversity: [
            { label: 'Ancient Lake', value: '4 million years old - one of world\'s oldest' },
            { label: 'Endemic Species', value: '60+ endemic species including Biwa Trout' },
            { label: 'Freshwater Pearl', value: 'Biwa pearl mussels (now rare)' },
            { label: 'Giant Catfish', value: 'Biwa catfish - endemic large species' }
        ],
        economicImportance: [
            { label: 'Water Supply', value: 'Supplies Kyoto, Osaka, Kobe - 14 million people' },
            { label: 'Fisheries', value: 'Ayu sweetfish, crucian carp' },
            { label: 'Tourism', value: 'Major destination from Kyoto' },
            { label: 'Pearl Culture', value: 'Historical pearl industry' }
        ],
        environmentalIssues: [
            { label: 'Eutrophication', value: 'Algae problems since 1970s' },
            { label: 'Invasive Species', value: 'Black bass, bluegill damage natives' },
            { label: 'Conservation', value: 'Strict protection laws enacted' }
        ],
        waterDisputes: [],
        historicalImportance: [
            { label: 'Largest in Japan', value: 'Called "Mother Lake"' },
            { label: 'Cultural Significance', value: 'Eight Views of Ōmi (paintings)' },
            { label: 'Trade Route', value: 'Historical transport to Kyoto' },
            { label: 'Castle Town', value: 'Hikone Castle - National Treasure' }
        ]
    },
    {
        id: 'lake-khovsgol',
        name: 'Lake Khövsgöl',
        countries: [
            { name: 'Mongolia', code: 'MN' }
        ],
        continent: 'Asia',
        waterType: 'freshwater',
        lakeType: 'Tectonic (Rift)',
        surfaceArea: 2760,
        maxDepth: 262,
        avgDepth: 138,
        volume: 381,
        elevation: 1645,
        coordinates: [51.1, 100.4],
        defaultZoom: 8,
        image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lake Khövsgöl' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [100.1, 51.6], [100.6, 51.5], [100.8, 51.2],
                    [100.7, 50.6], [100.3, 50.4], [100.0, 50.8],
                    [100.0, 51.3], [100.1, 51.6]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Numerous small rivers', length: 50, coordinates: [[100.5, 51.5], [100.4, 51.3], [100.3, 51.1]] },
            { name: 'Approximately 96 rivers', length: 'Various', coordinates: [[100.3, 50.5], [100.35, 50.6], [100.4, 50.7]] }
        ],
        outflowRivers: [
            { name: 'Egiin Gol', length: 475, coordinates: [[100.7, 50.5], [100.9, 50.3], [101.2, 50.0]] }
        ],
        basinArea: 5130,
        islands: [
            { name: 'Modon Khüis', coordinates: [51.0, 100.35], area: 3, description: 'Largest island' },
            { name: 'Dalain Khüis', coordinates: [50.8, 100.4], area: 2 },
            { name: 'Baga Khüis', coordinates: [50.9, 100.45], area: 1 }
        ],
        cities: [
            { name: 'Khatgal', coordinates: [50.4361, 100.1622], country: 'Mongolia', population: 3000 },
            { name: 'Mörön', coordinates: [49.6347, 100.1608], country: 'Mongolia', population: 36000 }
        ],
        biodiversity: [
            { label: 'Fish Species', value: 'Lenok, Grayling, Burbot' },
            { label: 'Taimen', value: 'World\'s largest salmonid' },
            { label: 'Wildlife', value: 'Ibex, Argali sheep, Brown bear, Wolf' },
            { label: 'Reindeer', value: 'Tsaatan people herd reindeer nearby' }
        ],
        economicImportance: [
            { label: 'Tourism', value: 'Growing adventure tourism' },
            { label: 'Water Reserve', value: '70% of Mongolia\'s freshwater' },
            { label: 'Traditional', value: 'Nomadic herding in region' }
        ],
        environmentalIssues: [
            { label: 'Mining Threats', value: 'Proposed mining concerns' },
            { label: 'Tourism Impact', value: 'Unregulated camping' },
            { label: 'Climate Change', value: 'Ice season shortening' }
        ],
        waterDisputes: [],
        historicalImportance: [
            { label: 'Younger Brother', value: 'Called "younger brother of Baikal"' },
            { label: 'Sacred Lake', value: 'Shamanist traditions' },
            { label: 'Age', value: '2-5 million years old' },
            { label: 'Ice Road', value: 'Winter ice road across lake' }
        ]
    },
    {
        id: 'lake-ohrid',
        name: 'Lake Ohrid',
        countries: [
            { name: 'North Macedonia', code: 'MK' },
            { name: 'Albania', code: 'AL' }
        ],
        continent: 'Europe',
        waterType: 'freshwater',
        lakeType: 'Tectonic',
        surfaceArea: 358,
        maxDepth: 288,
        avgDepth: 155,
        volume: 55,
        elevation: 695,
        coordinates: [41.05, 20.75],
        defaultZoom: 10,
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lake Ohrid' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [20.6, 41.2], [20.85, 41.15], [20.9, 41.0],
                    [20.8, 40.9], [20.65, 40.92], [20.55, 41.05], [20.6, 41.2]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Springs (underground)', length: 0, coordinates: [[20.75, 41.1], [20.76, 41.08], [20.77, 41.05]] },
            { name: 'Sateska River', length: 25, coordinates: [[20.7, 41.15], [20.72, 41.12], [20.74, 41.1]] }
        ],
        outflowRivers: [
            { name: 'Black Drin', length: 149, coordinates: [[20.78, 41.12], [20.85, 41.2], [20.9, 41.3]] }
        ],
        basinArea: 2600,
        islands: [
            { name: 'Golem Grad', coordinates: [40.87, 20.78], area: 0.2, description: 'Snake Island - ruins and wildlife' }
        ],
        cities: [
            { name: 'Ohrid', coordinates: [41.1231, 20.8016], country: 'North Macedonia', population: 42000 },
            { name: 'Struga', coordinates: [41.1775, 20.6781], country: 'North Macedonia', population: 16500 },
            { name: 'Pogradec', coordinates: [40.9025, 20.6528], country: 'Albania', population: 20000 }
        ],
        biodiversity: [
            { label: 'Age', value: '1-3 million years - one of oldest in Europe' },
            { label: 'Endemic Species', value: '200+ endemic species' },
            { label: 'Ohrid Trout', value: 'Endemic Salmo letnica' },
            { label: 'Snails', value: 'Many endemic gastropod species' }
        ],
        economicImportance: [
            { label: 'Tourism', value: 'UNESCO site - major destination' },
            { label: 'Fishing', value: 'Ohrid trout (Koran), eel' },
            { label: 'Pearl Industry', value: 'Ohrid pearls from fish scales' }
        ],
        environmentalIssues: [
            { label: 'Overfishing', value: 'Ohrid trout endangered' },
            { label: 'Pollution', value: 'Urban wastewater' },
            { label: 'Invasive Species', value: 'Introduced fish species' }
        ],
        waterDisputes: [],
        historicalImportance: [
            { label: 'UNESCO', value: 'Natural and Cultural World Heritage Site' },
            { label: 'Churches', value: '365 churches historically - "Jerusalem of Balkans"' },
            { label: 'Cyrillic Alphabet', value: 'St. Clement\'s school developed Cyrillic here' },
            { label: 'Byzantine Era', value: 'Major religious and cultural center' }
        ]
    },
    {
        id: 'lake-winnipegosis',
        name: 'Lake Winnipegosis',
        countries: [
            { name: 'Canada', code: 'CA' }
        ],
        continent: 'North America',
        waterType: 'freshwater',
        lakeType: 'Glacial',
        surfaceArea: 5370,
        maxDepth: 12,
        avgDepth: 4,
        volume: 22,
        elevation: 254,
        coordinates: [52.5, -100.0],
        defaultZoom: 7,
        image: 'https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lake Winnipegosis' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-100.5, 53.0], [-99.5, 52.8], [-99.3, 52.2],
                    [-99.8, 51.8], [-100.5, 52.0], [-100.8, 52.5], [-100.5, 53.0]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Red Deer River', length: 225, coordinates: [[-100.8, 52.8], [-100.5, 52.7], [-100.2, 52.6]] },
            { name: 'Swan River', length: 90, coordinates: [[-101.0, 52.0], [-100.7, 52.1], [-100.4, 52.2]] }
        ],
        outflowRivers: [
            { name: 'Waterhen River', length: 30, coordinates: [[-99.5, 51.9], [-99.3, 51.8], [-99.1, 51.7]] }
        ],
        basinArea: 19500,
        islands: [
            { name: 'Birch Island', coordinates: [52.5, -99.8], area: 25 },
            { name: 'Numerous small islands', coordinates: [52.3, -100.0], area: 'Various' }
        ],
        cities: [
            { name: 'Winnipegosis', coordinates: [51.6461, -99.9378], country: 'Canada', population: 650 },
            { name: 'Swan River', coordinates: [52.1058, -101.2675], country: 'Canada', population: 4000 }
        ],
        biodiversity: [
            { label: 'Fish Species', value: 'Walleye, Northern Pike, Sauger' },
            { label: 'Birds', value: 'Pelicans, Cormorants, waterfowl' },
            { label: 'Shallow Lake', value: 'Productive fishery despite shallow depth' }
        ],
        economicImportance: [
            { label: 'Commercial Fishing', value: 'Important fishery' },
            { label: 'Recreation', value: 'Sport fishing' }
        ],
        environmentalIssues: [
            { label: 'Shallow Depth', value: 'Vulnerable to drought' },
            { label: 'Eutrophication', value: 'Agricultural impacts' }
        ],
        waterDisputes: [],
        historicalImportance: [
            { label: 'Name Origin', value: 'Cree "little muddy water"' },
            { label: '11th Largest', value: 'In Canada' },
            { label: 'Fur Trade', value: 'Historical trading routes' }
        ]
    },
    {
        id: 'lake-patzcuaro',
        name: 'Lake Pátzcuaro',
        countries: [
            { name: 'Mexico', code: 'MX' }
        ],
        continent: 'North America',
        waterType: 'freshwater',
        lakeType: 'Volcanic',
        surfaceArea: 97,
        maxDepth: 12,
        avgDepth: 5,
        volume: 0.5,
        elevation: 2035,
        coordinates: [19.58, -101.62],
        defaultZoom: 11,
        image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lake Pátzcuaro' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-101.7, 19.62], [-101.55, 19.62], [-101.5, 19.55],
                    [-101.55, 19.5], [-101.7, 19.52], [-101.75, 19.58], [-101.7, 19.62]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Multiple seasonal streams', length: 15, coordinates: [[-101.65, 19.65], [-101.62, 19.62], [-101.6, 19.6]] }
        ],
        outflowRivers: [],
        basinArea: 929,
        islands: [
            { name: 'Janitzio', coordinates: [19.565, -101.64], area: 0.43, description: 'Famous for Day of the Dead celebrations' },
            { name: 'Pacanda', coordinates: [19.545, -101.6], area: 0.9 },
            { name: 'Yunuén', coordinates: [19.565, -101.59], area: 0.4 },
            { name: 'Tecuena', coordinates: [19.57, -101.58], area: 0.2 }
        ],
        cities: [
            { name: 'Pátzcuaro', coordinates: [19.5158, -101.6086], country: 'Mexico', population: 92000 },
            { name: 'Quiroga', coordinates: [19.6617, -101.5222], country: 'Mexico', population: 25000 },
            { name: 'Erongarícuaro', coordinates: [19.5833, -101.7167], country: 'Mexico', population: 15000 }
        ],
        biodiversity: [
            { label: 'Achoque', value: 'Endemic salamander (Ambystoma dumerilii)' },
            { label: 'White Fish', value: 'Pescado blanco (endemic, endangered)' },
            { label: 'Birds', value: 'Herons, ducks, kingfishers' }
        ],
        economicImportance: [
            { label: 'Tourism', value: 'Day of the Dead celebrations world-famous' },
            { label: 'Fishing', value: 'Traditional butterfly net fishing' },
            { label: 'Crafts', value: 'Lacquerware, textiles' }
        ],
        environmentalIssues: [
            { label: 'Shrinking', value: 'Lake level declining' },
            { label: 'Pollution', value: 'Agricultural and urban runoff' },
            { label: 'Endangered Species', value: 'Native fish critically endangered' }
        ],
        waterDisputes: [],
        historicalImportance: [
            { label: 'Purépecha', value: 'Center of Purépecha (Tarascan) civilization' },
            { label: 'Colonial Era', value: 'Vasco de Quiroga\'s social experiments' },
            { label: 'Day of Dead', value: 'Janitzio ceremonies internationally known' }
        ]
    },
    {
        id: 'lake-chapala',
        name: 'Lake Chapala',
        countries: [
            { name: 'Mexico', code: 'MX' }
        ],
        continent: 'North America',
        waterType: 'freshwater',
        lakeType: 'Tectonic',
        surfaceArea: 1100,
        maxDepth: 10,
        avgDepth: 5,
        volume: 5.5,
        elevation: 1524,
        coordinates: [20.2, -103.0],
        defaultZoom: 9,
        image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lake Chapala' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-103.4, 20.3], [-102.7, 20.35], [-102.6, 20.2],
                    [-102.9, 20.1], [-103.4, 20.15], [-103.5, 20.25], [-103.4, 20.3]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Lerma River', length: 708, coordinates: [[-102.7, 20.25], [-102.8, 20.22], [-102.9, 20.2]] }
        ],
        outflowRivers: [
            { name: 'Santiago River', length: 562, coordinates: [[-103.4, 20.25], [-103.5, 20.3], [-103.6, 20.4]] }
        ],
        basinArea: 47000,
        islands: [
            { name: 'Isla de los Alacranes', coordinates: [20.25, -103.1], area: 1.5, description: 'Scorpion Island' },
            { name: 'Isla de Mezcala', coordinates: [20.26, -103.0], area: 0.5, description: 'Historic fortress' }
        ],
        cities: [
            { name: 'Guadalajara', coordinates: [20.6597, -103.3496], country: 'Mexico', population: 1495000 },
            { name: 'Chapala', coordinates: [20.2961, -103.1908], country: 'Mexico', population: 50000 },
            { name: 'Ajijic', coordinates: [20.2944, -103.2622], country: 'Mexico', population: 11000 },
            { name: 'Jocotepec', coordinates: [20.2836, -103.4344], country: 'Mexico', population: 20000 }
        ],
        biodiversity: [
            { label: 'Native Fish', value: 'Charal, Pescado blanco (endangered)' },
            { label: 'Birds', value: 'Pelicans, herons, egrets' },
            { label: 'Water Hyacinth', value: 'Invasive species problem' }
        ],
        economicImportance: [
            { label: 'Water Supply', value: '60% of Guadalajara\'s water' },
            { label: 'Expat Community', value: 'Largest US/Canadian expat community in world' },
            { label: 'Tourism', value: 'Weekend destination from Guadalajara' },
            { label: 'Fishing', value: 'Commercial and recreational' }
        ],
        environmentalIssues: [
            { label: 'Water Extraction', value: 'Guadalajara demands straining lake' },
            { label: 'Pollution', value: 'Agricultural chemicals, Lerma River pollution' },
            { label: 'Fluctuating Levels', value: 'Severe drops during droughts' },
            { label: 'Invasive Species', value: 'Water hyacinth choking areas' }
        ],
        waterDisputes: [
            { label: 'State Competition', value: 'Jalisco vs upstream states for Lerma water' }
        ],
        historicalImportance: [
            { label: 'Largest in Mexico', value: 'By surface area (naturally formed)' },
            { label: 'Independence War', value: 'Mezcala Island siege 1812-1816' },
            { label: 'D.H. Lawrence', value: 'Author lived at lakeside' }
        ]
    },
    {
        id: 'lake-yellowstone',
        name: 'Yellowstone Lake',
        countries: [
            { name: 'United States', code: 'US' }
        ],
        continent: 'North America',
        waterType: 'freshwater',
        lakeType: 'Volcanic (Caldera)',
        surfaceArea: 352,
        maxDepth: 120,
        avgDepth: 43,
        volume: 14,
        elevation: 2357,
        coordinates: [44.45, -110.35],
        defaultZoom: 10,
        image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Yellowstone Lake' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-110.55, 44.55], [-110.25, 44.58], [-110.15, 44.45],
                    [-110.2, 44.3], [-110.45, 44.3], [-110.6, 44.4], [-110.55, 44.55]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Yellowstone River (upper)', length: 50, coordinates: [[-110.2, 44.2], [-110.25, 44.28], [-110.3, 44.35]] },
            { name: 'Pelican Creek', length: 20, coordinates: [[-110.2, 44.55], [-110.22, 44.52], [-110.25, 44.5]] }
        ],
        outflowRivers: [
            { name: 'Yellowstone River', length: 1114, coordinates: [[-110.4, 44.55], [-110.38, 44.6], [-110.35, 44.7]] }
        ],
        basinArea: 2600,
        islands: [
            { name: 'Stevenson Island', coordinates: [44.5, -110.38], area: 1.6 },
            { name: 'Dot Island', coordinates: [44.42, -110.35], area: 0.2 },
            { name: 'Frank Island', coordinates: [44.4, -110.42], area: 0.5 }
        ],
        cities: [],
        biodiversity: [
            { label: 'Cutthroat Trout', value: 'Yellowstone cutthroat - native species' },
            { label: 'Grizzly Bears', value: 'Fish at tributaries' },
            { label: 'Ospreys', value: 'Nesting on islands' },
            { label: 'Thermal Features', value: 'Underwater hot springs and vents' }
        ],
        economicImportance: [
            { label: 'National Park', value: 'Part of Yellowstone NP' },
            { label: 'Tourism', value: 'Millions of visitors annually' },
            { label: 'Research', value: 'Volcanic and ecological research' }
        ],
        environmentalIssues: [
            { label: 'Lake Trout', value: 'Invasive species threatening native cutthroat' },
            { label: 'Volcanic Activity', value: 'Lake floor rising in places' },
            { label: 'Climate Change', value: 'Earlier ice-out, warming water' }
        ],
        waterDisputes: [],
        historicalImportance: [
            { label: 'Volcanic Caldera', value: 'Sits in Yellowstone supervolcano caldera' },
            { label: 'Largest High-Elevation', value: 'Largest in North America above 7,000 ft' },
            { label: 'Hayden Expedition', value: '1871 scientific documentation' },
            { label: 'Native Americans', value: 'Used for thousands of years' }
        ]
    },
    {
        id: 'lake-prespa',
        name: 'Lake Prespa',
        countries: [
            { name: 'North Macedonia', code: 'MK' },
            { name: 'Albania', code: 'AL' },
            { name: 'Greece', code: 'GR' }
        ],
        continent: 'Europe',
        waterType: 'freshwater',
        lakeType: 'Tectonic',
        surfaceArea: 273,
        maxDepth: 54,
        avgDepth: 14,
        volume: 4,
        elevation: 853,
        coordinates: [40.9, 21.0],
        defaultZoom: 10,
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lake Prespa' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [20.85, 41.05], [21.1, 41.0], [21.15, 40.85],
                    [21.0, 40.75], [20.85, 40.78], [20.75, 40.9], [20.85, 41.05]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Several small streams', length: 20, coordinates: [[21.0, 41.0], [20.98, 40.97], [20.95, 40.95]] }
        ],
        outflowRivers: [
            { name: 'Underground to Lake Ohrid', length: 10, coordinates: [[20.88, 40.9], [20.82, 40.92], [20.75, 40.95]] }
        ],
        basinArea: 1300,
        islands: [
            { name: 'Golem Grad', coordinates: [40.87, 20.98], area: 0.18, description: 'In North Macedonia portion' },
            { name: 'Maligrad', coordinates: [40.78, 20.92], area: 0.08, description: 'In Albania' },
            { name: 'Agios Achillios', coordinates: [40.82, 21.08], area: 0.52, description: '10th century basilica ruins' }
        ],
        cities: [
            { name: 'Resen', coordinates: [41.0889, 21.0106], country: 'North Macedonia', population: 9000 },
            { name: 'Liqenas', coordinates: [40.7733, 20.9667], country: 'Albania', population: 800 },
            { name: 'Psarades', coordinates: [40.8478, 21.0708], country: 'Greece', population: 200 }
        ],
        biodiversity: [
            { label: 'Pelicans', value: 'Largest Dalmatian pelican colony in world' },
            { label: 'Endemic Fish', value: 'Several endemic species' },
            { label: 'Birds', value: '260+ species recorded' },
            { label: 'Ramsar Site', value: 'Wetland of international importance' }
        ],
        economicImportance: [
            { label: 'Ecotourism', value: 'Bird watching destination' },
            { label: 'Fishing', value: 'Traditional fishing (limited)' },
            { label: 'Agriculture', value: 'Apple orchards around lake' }
        ],
        environmentalIssues: [
            { label: 'Water Level Drop', value: 'Declining since 1980s' },
            { label: 'Agriculture', value: 'Irrigation extraction' },
            { label: 'Transboundary', value: 'Coordinated management challenging' }
        ],
        waterDisputes: [
            { label: 'Three Nations', value: 'Prespa Park agreement 2000 - first transboundary protected area in Balkans' }
        ],
        historicalImportance: [
            { label: 'Prespa Agreement', value: '2018 Greece-Macedonia name dispute resolved here' },
            { label: 'Bulgarian Empire', value: 'Tsar Samuil\'s capital nearby' },
            { label: 'Byzantine', value: 'Important religious sites' },
            { label: 'Underground Outflow', value: 'Unique drainage to Lake Ohrid' }
        ]
    }
];
