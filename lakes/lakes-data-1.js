// ============================================
// LAKES DATA - FILE 1 (Lakes 1-10)
// ============================================

const lakesData1 = [
    {
        id: 'caspian-sea',
        name: 'Caspian Sea',
        countries: [
            { name: 'Russia', code: 'RU' },
            { name: 'Kazakhstan', code: 'KZ' },
            { name: 'Turkmenistan', code: 'TM' },
            { name: 'Iran', code: 'IR' },
            { name: 'Azerbaijan', code: 'AZ' }
        ],
        continent: 'Asia',
        waterType: 'saltwater',
        lakeType: 'Endorheic',
        surfaceArea: 371000,
        maxDepth: 1025,
        avgDepth: 211,
        volume: 78200,
        elevation: -28,
        coordinates: [41.9533, 50.6683],
        defaultZoom: 5,
        image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Caspian Sea' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [46.5, 47.0], [48.0, 46.5], [50.0, 45.5], [51.5, 44.0],
                    [52.5, 42.5], [53.5, 41.0], [54.0, 39.5], [53.5, 38.0],
                    [52.0, 37.0], [50.5, 37.5], [49.0, 38.5], [48.5, 40.0],
                    [48.0, 42.0], [47.5, 44.0], [47.0, 45.5], [46.5, 47.0]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Volga River', length: 3530, coordinates: [[46.5, 47.0], [46.0, 46.0], [45.5, 45.0]] },
            { name: 'Ural River', length: 2428, coordinates: [[51.0, 46.5], [50.5, 46.0], [50.0, 45.5]] },
            { name: 'Kura River', length: 1515, coordinates: [[49.5, 40.0], [49.0, 39.5], [48.5, 39.0]] },
            { name: 'Terek River', length: 623, coordinates: [[47.5, 43.5], [47.0, 43.0], [46.5, 42.5]] }
        ],
        outflowRivers: [],
        basinArea: 3626000,
        islands: [
            { name: 'Ogurja Ada', coordinates: [41.85, 52.55], area: 45 },
            { name: 'Zhiloi Island', coordinates: [44.45, 50.25], area: 30 }
        ],
        cities: [
            { name: 'Baku', coordinates: [40.4093, 49.8671], country: 'Azerbaijan', population: 2300000 },
            { name: 'Aktau', coordinates: [43.6508, 51.1600], country: 'Kazakhstan', population: 190000 },
            { name: 'Makhachkala', coordinates: [42.9849, 47.5047], country: 'Russia', population: 600000 },
            { name: 'Rasht', coordinates: [37.2808, 49.5832], country: 'Iran', population: 680000 }
        ],
        biodiversity: [
            { label: 'Endemic Species', value: 'Caspian Seal' },
            { label: 'Fish Species', value: 'Sturgeon, Carp, Roach' },
            { label: 'Caviar Production', value: '90% of world\'s caviar' }
        ],
        economicImportance: [
            { label: 'Oil Reserves', value: 'Major offshore drilling' },
            { label: 'Natural Gas', value: 'Significant deposits' },
            { label: 'Fishing', value: 'Sturgeon, Caviar industry' },
            { label: 'Shipping', value: 'Major trade route' }
        ],
        environmentalIssues: [
            { label: 'Water Level Fluctuation', value: 'Dropping 6-7cm/year' },
            { label: 'Pollution', value: 'Oil industry contamination' },
            { label: 'Overfishing', value: 'Sturgeon population decline' }
        ],
        waterDisputes: [
            { label: 'Legal Status', value: 'Sea vs Lake debate' },
            { label: 'Treaty', value: '2018 Convention signed' },
            { label: 'Resource Sharing', value: 'Ongoing negotiations' }
        ],
        historicalImportance: [
            { label: 'Ancient Trade', value: 'Silk Road connection' },
            { label: 'Oil Discovery', value: '1873 - First offshore wells' },
            { label: 'Name Origin', value: 'From Caspi tribe' }
        ]
    },
    {
        id: 'lake-superior',
        name: 'Lake Superior',
        countries: [
            { name: 'United States', code: 'US' },
            { name: 'Canada', code: 'CA' }
        ],
        continent: 'North America',
        waterType: 'freshwater',
        lakeType: 'Glacial',
        surfaceArea: 82100,
        maxDepth: 406,
        avgDepth: 149,
        volume: 12100,
        elevation: 183,
        coordinates: [47.7, -87.5],
        defaultZoom: 6,
        image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lake Superior' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-92.1, 46.8], [-91.0, 47.0], [-89.5, 47.8], [-88.0, 48.0],
                    [-86.5, 47.5], [-85.0, 47.0], [-84.5, 46.5], [-85.0, 46.0],
                    [-86.5, 46.5], [-88.0, 46.8], [-89.5, 47.0], [-91.0, 46.5],
                    [-92.1, 46.8]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Nipigon River', length: 48, coordinates: [[-88.3, 49.0], [-88.5, 48.5], [-88.7, 48.0]] },
            { name: 'St. Louis River', length: 290, coordinates: [[-92.3, 47.0], [-92.1, 46.9], [-92.0, 46.8]] },
            { name: 'Pigeon River', length: 115, coordinates: [[-89.5, 48.2], [-89.6, 48.0], [-89.7, 47.8]] }
        ],
        outflowRivers: [
            { name: 'St. Marys River', length: 112, coordinates: [[-84.3, 46.5], [-84.0, 46.3], [-83.7, 46.2]] }
        ],
        basinArea: 127700,
        islands: [
            { name: 'Isle Royale', coordinates: [48.0, -88.9], area: 535, description: 'National Park, wolf population study site' },
            { name: 'Michipicoten Island', coordinates: [47.73, -85.83], area: 184 },
            { name: 'St. Ignace Island', coordinates: [48.65, -88.05], area: 136 }
        ],
        cities: [
            { name: 'Duluth', coordinates: [46.7867, -92.1005], country: 'USA', population: 90000 },
            { name: 'Thunder Bay', coordinates: [48.3809, -89.2477], country: 'Canada', population: 110000 },
            { name: 'Marquette', coordinates: [46.5436, -87.3954], country: 'USA', population: 21000 },
            { name: 'Sault Ste. Marie', coordinates: [46.4953, -84.3453], country: 'USA/Canada', population: 75000 }
        ],
        biodiversity: [
            { label: 'Fish Species', value: 'Lake Trout, Whitefish, Walleye' },
            { label: 'Invasive Species', value: 'Sea Lamprey (controlled)' },
            { label: 'Wildlife', value: 'Wolves, Moose on Isle Royale' }
        ],
        economicImportance: [
            { label: 'Shipping', value: 'Iron ore, grain transport' },
            { label: 'Tourism', value: 'Major recreational destination' },
            { label: 'Fishing', value: 'Commercial and sport fishing' },
            { label: 'Water Supply', value: '10% of world\'s fresh surface water' }
        ],
        environmentalIssues: [
            { label: 'Climate Change', value: 'Rising temperatures, lower ice cover' },
            { label: 'Invasive Species', value: 'Ongoing monitoring' },
            { label: 'Mining Runoff', value: 'Historical contamination' }
        ],
        waterDisputes: [
            { label: 'Great Lakes Compact', value: '2008 agreement on water use' },
            { label: 'Boundary Waters', value: 'US-Canada joint management' }
        ],
        historicalImportance: [
            { label: 'Indigenous History', value: 'Ojibwe peoples - "Gichigami"' },
            { label: 'Fur Trade', value: '17th-19th century hub' },
            { label: 'Shipwrecks', value: '350+ documented wrecks' }
        ]
    },
    {
        id: 'lake-victoria',
        name: 'Lake Victoria',
        countries: [
            { name: 'Tanzania', code: 'TZ' },
            { name: 'Uganda', code: 'UG' },
            { name: 'Kenya', code: 'KE' }
        ],
        continent: 'Africa',
        waterType: 'freshwater',
        lakeType: 'Tectonic',
        surfaceArea: 68870,
        maxDepth: 84,
        avgDepth: 40,
        volume: 2760,
        elevation: 1134,
        coordinates: [-1.0, 33.0],
        defaultZoom: 7,
        image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lake Victoria' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [31.5, -1.0], [32.0, -0.5], [33.0, 0.0], [34.0, -0.5],
                    [34.5, -1.0], [34.0, -2.0], [33.0, -2.5], [32.0, -2.5],
                    [31.5, -2.0], [31.5, -1.0]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Kagera River', length: 400, coordinates: [[31.0, -1.5], [31.3, -1.3], [31.5, -1.0]] },
            { name: 'Mara River', length: 395, coordinates: [[34.8, -1.5], [34.5, -1.3], [34.2, -1.0]] }
        ],
        outflowRivers: [
            { name: 'White Nile', length: 3700, coordinates: [[33.2, 0.4], [32.5, 1.0], [32.0, 2.0]] }
        ],
        basinArea: 184000,
        islands: [
            { name: 'Ukerewe Island', coordinates: [-2.0, 33.0], area: 530 },
            { name: 'Ssese Islands', coordinates: [-0.4, 32.3], area: 245 },
            { name: 'Mfangano Island', coordinates: [-0.5, 34.0], area: 65 }
        ],
        cities: [
            { name: 'Mwanza', coordinates: [-2.5167, 32.9], country: 'Tanzania', population: 707000 },
            { name: 'Kisumu', coordinates: [-0.1022, 34.7617], country: 'Kenya', population: 400000 },
            { name: 'Kampala', coordinates: [0.3476, 32.5825], country: 'Uganda', population: 1500000 },
            { name: 'Entebbe', coordinates: [0.0512, 32.4637], country: 'Uganda', population: 70000 }
        ],
        biodiversity: [
            { label: 'Cichlid Fish', value: '500+ species (many endemic)' },
            { label: 'Nile Perch', value: 'Introduced 1950s, ecological impact' },
            { label: 'Hippos', value: 'Significant population' }
        ],
        economicImportance: [
            { label: 'Fishing', value: 'Supports 3+ million people' },
            { label: 'Transport', value: 'Ferries between countries' },
            { label: 'Hydropower', value: 'Owen Falls Dam' },
            { label: 'Agriculture', value: 'Irrigation for farming' }
        ],
        environmentalIssues: [
            { label: 'Water Hyacinth', value: 'Invasive species covering surface' },
            { label: 'Eutrophication', value: 'Agricultural runoff' },
            { label: 'Overfishing', value: 'Declining fish stocks' },
            { label: 'Climate Change', value: 'Water level fluctuations' }
        ],
        waterDisputes: [
            { label: 'Nile Waters', value: 'Egypt-Sudan vs upstream nations' },
            { label: 'CFA', value: 'Cooperative Framework Agreement 2010' }
        ],
        historicalImportance: [
            { label: 'Source of Nile', value: 'Discovered by John Speke 1858' },
            { label: 'Named After', value: 'Queen Victoria' },
            { label: 'Ancient Kingdoms', value: 'Buganda Kingdom shores' }
        ]
    },
    {
        id: 'lake-huron',
        name: 'Lake Huron',
        countries: [
            { name: 'United States', code: 'US' },
            { name: 'Canada', code: 'CA' }
        ],
        continent: 'North America',
        waterType: 'freshwater',
        lakeType: 'Glacial',
        surfaceArea: 59600,
        maxDepth: 229,
        avgDepth: 59,
        volume: 3540,
        elevation: 176,
        coordinates: [44.8, -82.4],
        defaultZoom: 6,
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lake Huron' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-84.5, 46.0], [-83.5, 46.0], [-82.5, 45.5], [-82.0, 44.5],
                    [-82.5, 43.5], [-83.0, 43.0], [-84.0, 43.5], [-84.5, 44.0],
                    [-84.5, 45.0], [-84.5, 46.0]
                ]]
            }
        },
        inflowRivers: [
            { name: 'St. Marys River', length: 112, coordinates: [[-84.3, 46.5], [-84.2, 46.3], [-84.0, 46.0]] }
        ],
        outflowRivers: [
            { name: 'St. Clair River', length: 64, coordinates: [[-82.4, 43.0], [-82.5, 42.8], [-82.6, 42.5]] }
        ],
        basinArea: 134100,
        islands: [
            { name: 'Manitoulin Island', coordinates: [45.8, -82.0], area: 2766, description: 'World\'s largest freshwater island' },
            { name: 'Drummond Island', coordinates: [46.0, -83.7], area: 347 }
        ],
        cities: [
            { name: 'Sarnia', coordinates: [42.9745, -82.4066], country: 'Canada', population: 72000 },
            { name: 'Bay City', coordinates: [43.5945, -83.8889], country: 'USA', population: 33000 },
            { name: 'Alpena', coordinates: [45.0617, -83.4327], country: 'USA', population: 10000 }
        ],
        biodiversity: [
            { label: 'Fish Species', value: 'Walleye, Yellow Perch, Lake Trout' },
            { label: 'Invasive Species', value: 'Zebra Mussels, Sea Lamprey' }
        ],
        economicImportance: [
            { label: 'Shipping', value: 'Part of Great Lakes Seaway' },
            { label: 'Recreation', value: 'Boating, fishing tourism' },
            { label: 'Industry', value: 'Petrochemical industry at Sarnia' }
        ],
        environmentalIssues: [
            { label: 'Invasive Species', value: 'Major ecological concern' },
            { label: 'Algae Blooms', value: 'Nutrient pollution' }
        ],
        waterDisputes: [],
        historicalImportance: [
            { label: 'Name Origin', value: 'Wyandot word for "great water"' },
            { label: 'Fur Trade', value: 'Major route 17th-19th century' }
        ]
    },
    {
        id: 'lake-michigan',
        name: 'Lake Michigan',
        countries: [
            { name: 'United States', code: 'US' }
        ],
        continent: 'North America',
        waterType: 'freshwater',
        lakeType: 'Glacial',
        surfaceArea: 57800,
        maxDepth: 281,
        avgDepth: 85,
        volume: 4920,
        elevation: 176,
        coordinates: [43.5, -87.0],
        defaultZoom: 6,
        image: 'https://images.unsplash.com/photo-1494783367193-149034c05e8f?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1494783367193-149034c05e8f?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lake Michigan' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-87.5, 46.0], [-86.5, 45.8], [-85.5, 45.5], [-85.5, 44.5],
                    [-86.0, 43.5], [-86.5, 42.5], [-87.0, 41.8], [-87.5, 42.0],
                    [-87.5, 43.0], [-87.0, 44.0], [-87.0, 45.0], [-87.5, 46.0]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Fox River', length: 320, coordinates: [[-88.0, 44.5], [-87.8, 44.6], [-87.5, 44.8]] },
            { name: 'Grand River', length: 420, coordinates: [[-86.2, 43.0], [-86.1, 43.1], [-86.0, 43.2]] }
        ],
        outflowRivers: [
            { name: 'Straits of Mackinac', length: 8, coordinates: [[-84.7, 45.8], [-84.8, 45.85], [-85.0, 45.9]] }
        ],
        basinArea: 118000,
        islands: [
            { name: 'Beaver Island', coordinates: [45.65, -85.55], area: 145 },
            { name: 'North Manitou Island', coordinates: [45.1, -86.0], area: 62 },
            { name: 'South Manitou Island', coordinates: [45.0, -86.1], area: 21 }
        ],
        cities: [
            { name: 'Chicago', coordinates: [41.8781, -87.6298], country: 'USA', population: 2700000 },
            { name: 'Milwaukee', coordinates: [43.0389, -87.9065], country: 'USA', population: 577000 },
            { name: 'Green Bay', coordinates: [44.5133, -88.0133], country: 'USA', population: 105000 },
            { name: 'Gary', coordinates: [41.5934, -87.3464], country: 'USA', population: 69000 }
        ],
        biodiversity: [
            { label: 'Fish Species', value: 'Salmon, Trout, Whitefish' },
            { label: 'Bird Migration', value: 'Major flyway for waterfowl' }
        ],
        economicImportance: [
            { label: 'Shipping', value: 'Chicago port - 3rd busiest US port' },
            { label: 'Tourism', value: '$16 billion annual impact' },
            { label: 'Water Supply', value: 'Chicago metro area' },
            { label: 'Industry', value: 'Steel, manufacturing corridor' }
        ],
        environmentalIssues: [
            { label: 'Invasive Mussels', value: 'Altered ecosystem dramatically' },
            { label: 'Industrial Pollution', value: 'Historical contamination' },
            { label: 'Beach Closures', value: 'Bacterial contamination' }
        ],
        waterDisputes: [],
        historicalImportance: [
            { label: 'Only Great Lake', value: 'Entirely within US' },
            { label: 'Name Origin', value: 'Ojibwe "michi-gami" (great water)' },
            { label: 'Chicago Fire', value: '1871 - Water source during recovery' }
        ]
    },
    {
        id: 'lake-tanganyika',
        name: 'Lake Tanganyika',
        countries: [
            { name: 'Tanzania', code: 'TZ' },
            { name: 'Democratic Republic of Congo', code: 'CD' },
            { name: 'Burundi', code: 'BI' },
            { name: 'Zambia', code: 'ZM' }
        ],
        continent: 'Africa',
        waterType: 'freshwater',
        lakeType: 'Tectonic (Rift Valley)',
        surfaceArea: 32600,
        maxDepth: 1470,
        avgDepth: 570,
        volume: 18900,
        elevation: 773,
        coordinates: [-6.0, 29.5],
        defaultZoom: 6,
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lake Tanganyika' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [29.0, -3.5], [29.5, -4.0], [30.0, -5.0], [30.0, -6.5],
                    [29.5, -7.5], [29.0, -8.5], [29.0, -7.5], [29.2, -6.5],
                    [29.2, -5.0], [29.0, -4.0], [29.0, -3.5]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Ruzizi River', length: 117, coordinates: [[29.1, -2.5], [29.2, -3.0], [29.3, -3.4]] },
            { name: 'Malagarasi River', length: 475, coordinates: [[30.5, -5.0], [30.0, -5.2], [29.7, -5.3]] }
        ],
        outflowRivers: [
            { name: 'Lukuga River', length: 350, coordinates: [[29.0, -5.9], [28.5, -5.8], [28.0, -5.7]] }
        ],
        basinArea: 231000,
        islands: [
            { name: 'Kavala Island', coordinates: [-6.8, 29.8], area: 10 }
        ],
        cities: [
            { name: 'Kigoma', coordinates: [-4.8766, 29.6267], country: 'Tanzania', population: 215000 },
            { name: 'Kalemie', coordinates: [-5.9333, 29.1833], country: 'DR Congo', population: 147000 },
            { name: 'Bujumbura', coordinates: [-3.3731, 29.3644], country: 'Burundi', population: 500000 }
        ],
        biodiversity: [
            { label: 'Cichlid Species', value: '250+ endemic species' },
            { label: 'Age', value: '9-12 million years old' },
            { label: 'Endemism', value: '98% of cichlids found nowhere else' }
        ],
        economicImportance: [
            { label: 'Fishing', value: '25-40% of animal protein for region' },
            { label: 'Transport', value: 'Only link between some regions' },
            { label: 'Trade', value: 'Cross-border commerce' }
        ],
        environmentalIssues: [
            { label: 'Deforestation', value: 'Erosion and sedimentation' },
            { label: 'Overfishing', value: 'Declining fish stocks' },
            { label: 'Climate Change', value: 'Warming water, less mixing' }
        ],
        waterDisputes: [
            { label: 'Border Disputes', value: 'Historical tensions' }
        ],
        historicalImportance: [
            { label: 'Exploration', value: 'Burton & Speke 1858' },
            { label: 'Livingstone', value: 'Ujiji meeting point 1871' },
            { label: 'WWI', value: 'Naval battles on lake' }
        ]
    },
    {
        id: 'lake-baikal',
        name: 'Lake Baikal',
        countries: [
            { name: 'Russia', code: 'RU' }
        ],
        continent: 'Asia',
        waterType: 'freshwater',
        lakeType: 'Tectonic (Rift Valley)',
        surfaceArea: 31722,
        maxDepth: 1642,
        avgDepth: 744,
        volume: 23615,
        elevation: 455,
        coordinates: [53.5, 108.0],
        defaultZoom: 6,
        image: 'https://images.unsplash.com/photo-1551524164-687a55dd1126?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1551524164-687a55dd1126?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lake Baikal' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [103.7, 51.5], [104.5, 52.0], [106.0, 53.0], [107.5, 54.0],
                    [109.5, 55.5], [110.0, 55.0], [109.0, 54.0], [107.5, 53.0],
                    [106.0, 52.0], [104.5, 51.5], [103.7, 51.5]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Selenga River', length: 1024, coordinates: [[106.0, 51.0], [106.2, 51.5], [106.5, 52.0]] },
            { name: 'Barguzin River', length: 480, coordinates: [[110.5, 53.5], [109.5, 53.2], [109.0, 53.0]] },
            { name: 'Upper Angara', length: 438, coordinates: [[110.0, 56.0], [109.8, 55.5], [109.5, 55.0]] }
        ],
        outflowRivers: [
            { name: 'Angara River', length: 1779, coordinates: [[104.3, 51.9], [103.5, 52.0], [102.5, 52.5]] }
        ],
        basinArea: 560000,
        islands: [
            { name: 'Olkhon Island', coordinates: [53.15, 107.4], area: 730, description: 'Largest island, sacred to Buryats' },
            { name: 'Bolshoy Ushkaniy', coordinates: [53.85, 108.6], area: 9.4 }
        ],
        cities: [
            { name: 'Irkutsk', coordinates: [52.2978, 104.2964], country: 'Russia', population: 620000 },
            { name: 'Ulan-Ude', coordinates: [51.8333, 107.5833], country: 'Russia', population: 430000 },
            { name: 'Severobaikalsk', coordinates: [55.6378, 109.3394], country: 'Russia', population: 23000 }
        ],
        biodiversity: [
            { label: 'Endemic Species', value: '2,500+ species, 75% endemic' },
            { label: 'Nerpa Seal', value: 'World\'s only freshwater seal' },
            { label: 'Omul Fish', value: 'Endemic, commercially important' },
            { label: 'Golomyanka', value: 'Transparent endemic fish' }
        ],
        economicImportance: [
            { label: 'Tourism', value: 'UNESCO World Heritage Site' },
            { label: 'Fishing', value: 'Omul, commercial fisheries' },
            { label: 'Water Resource', value: '20% of world\'s freshwater' },
            { label: 'Trans-Siberian', value: 'Railway runs along shore' }
        ],
        environmentalIssues: [
            { label: 'Pulp Mill', value: 'Baikalsk mill (closed 2013)' },
            { label: 'Algae Blooms', value: 'Spirogyra concerns' },
            { label: 'Climate Change', value: 'Ice cover changes' }
        ],
        waterDisputes: [],
        historicalImportance: [
            { label: 'Age', value: '25-30 million years old' },
            { label: 'Gulag History', value: 'Nearby labor camps' },
            { label: 'Sacred Lake', value: 'Buryat and indigenous beliefs' }
        ]
    },
    {
        id: 'great-bear-lake',
        name: 'Great Bear Lake',
        countries: [
            { name: 'Canada', code: 'CA' }
        ],
        continent: 'North America',
        waterType: 'freshwater',
        lakeType: 'Glacial',
        surfaceArea: 31153,
        maxDepth: 446,
        avgDepth: 72,
        volume: 2236,
        elevation: 156,
        coordinates: [65.9, -121.0],
        defaultZoom: 6,
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Great Bear Lake' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-123.5, 66.5], [-121.5, 67.0], [-119.0, 66.5], [-118.0, 65.5],
                    [-119.0, 65.0], [-121.0, 64.8], [-123.0, 65.5], [-124.0, 66.0],
                    [-123.5, 66.5]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Dease River', length: 200, coordinates: [[-123.0, 65.0], [-122.5, 65.3], [-122.0, 65.5]] },
            { name: 'Camsell River', length: 180, coordinates: [[-118.5, 65.0], [-119.0, 65.2], [-119.5, 65.5]] }
        ],
        outflowRivers: [
            { name: 'Great Bear River', length: 113, coordinates: [[-123.5, 65.2], [-124.5, 65.0], [-125.5, 65.2]] }
        ],
        basinArea: 114717,
        islands: [],
        cities: [
            { name: 'Déline', coordinates: [65.1911, -123.4236], country: 'Canada', population: 500 }
        ],
        biodiversity: [
            { label: 'Fish Species', value: 'Lake Trout, Arctic Grayling' },
            { label: 'Wildlife', value: 'Caribou, Muskox, Bears' },
            { label: 'Bird Species', value: 'Migratory waterfowl' }
        ],
        economicImportance: [
            { label: 'Fishing', value: 'Remote sport fishing' },
            { label: 'Mining History', value: 'Port Radium uranium mine' }
        ],
        environmentalIssues: [
            { label: 'Uranium Contamination', value: 'Historical mining legacy' },
            { label: 'Climate Change', value: 'Permafrost thaw' }
        ],
        waterDisputes: [],
        historicalImportance: [
            { label: 'Uranium Discovery', value: '1930 - Manhattan Project connection' },
            { label: 'Indigenous Land', value: 'Sahtú Dene territory' }
        ]
    },
    {
        id: 'lake-malawi',
        name: 'Lake Malawi',
        countries: [
            { name: 'Malawi', code: 'MW' },
            { name: 'Mozambique', code: 'MZ' },
            { name: 'Tanzania', code: 'TZ' }
        ],
        continent: 'Africa',
        waterType: 'freshwater',
        lakeType: 'Tectonic (Rift Valley)',
        surfaceArea: 29600,
        maxDepth: 706,
        avgDepth: 292,
        volume: 8400,
        elevation: 472,
        coordinates: [-12.0, 34.5],
        defaultZoom: 6,
        image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lake Malawi' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [33.8, -9.5], [34.3, -10.0], [34.8, -11.5], [35.0, -13.0],
                    [34.5, -14.5], [34.0, -14.3], [34.0, -13.0], [34.2, -11.5],
                    [34.0, -10.5], [33.8, -9.5]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Ruhuhu River', length: 160, coordinates: [[34.8, -10.3], [34.6, -10.5], [34.4, -10.7]] },
            { name: 'Songwe River', length: 200, coordinates: [[33.5, -9.5], [33.8, -9.6], [34.0, -9.7]] }
        ],
        outflowRivers: [
            { name: 'Shire River', length: 402, coordinates: [[35.0, -14.4], [35.2, -15.0], [35.3, -15.5]] }
        ],
        basinArea: 126500,
        islands: [
            { name: 'Likoma Island', coordinates: [-12.05, 34.73], area: 17 },
            { name: 'Chizumulu Island', coordinates: [-12.03, 34.58], area: 4 }
        ],
        cities: [
            { name: 'Nkhata Bay', coordinates: [-11.6069, 34.2961], country: 'Malawi', population: 25000 },
            { name: 'Karonga', coordinates: [-9.9333, 33.9333], country: 'Malawi', population: 42000 },
            { name: 'Mangochi', coordinates: [-14.4781, 35.2647], country: 'Malawi', population: 53000 }
        ],
        biodiversity: [
            { label: 'Cichlid Species', value: '1000+ species, most endemic' },
            { label: 'Mbuna', value: 'Rock-dwelling cichlids' },
            { label: 'Aquarium Trade', value: 'Major source globally' }
        ],
        economicImportance: [
            { label: 'Fishing', value: '70% of animal protein for Malawi' },
            { label: 'Tourism', value: 'Diving, snorkeling' },
            { label: 'Transport', value: 'Ilala ferry service' }
        ],
        environmentalIssues: [
            { label: 'Overfishing', value: 'Declining chambo populations' },
            { label: 'Sedimentation', value: 'Deforestation runoff' },
            { label: 'Climate Change', value: 'Water level changes' }
        ],
        waterDisputes: [
            { label: 'Malawi-Tanzania', value: 'Border dispute over lake' }
        ],
        historicalImportance: [
            { label: 'Livingstone', value: 'Reached lake 1859' },
            { label: 'Also Known As', value: 'Lake Nyasa' }
        ]
    },
    {
        id: 'great-slave-lake',
        name: 'Great Slave Lake',
        countries: [
            { name: 'Canada', code: 'CA' }
        ],
        continent: 'North America',
        waterType: 'freshwater',
        lakeType: 'Glacial',
        surfaceArea: 27200,
        maxDepth: 614,
        avgDepth: 41,
        volume: 2088,
        elevation: 156,
        coordinates: [61.7, -114.0],
        defaultZoom: 6,
        image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Great Slave Lake' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-117.0, 62.5], [-115.0, 62.8], [-112.0, 62.5], [-110.0, 62.0],
                    [-110.5, 61.0], [-112.0, 60.8], [-114.0, 61.0], [-116.0, 61.5],
                    [-117.0, 62.0], [-117.0, 62.5]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Slave River', length: 434, coordinates: [[-111.5, 60.5], [-111.3, 60.8], [-111.0, 61.0]] },
            { name: 'Hay River', length: 702, coordinates: [[-115.5, 60.5], [-115.3, 60.8], [-115.0, 61.0]] }
        ],
        outflowRivers: [
            { name: 'Mackenzie River', length: 1738, coordinates: [[-117.0, 62.0], [-118.0, 63.0], [-120.0, 64.0]] }
        ],
        basinArea: 380000,
        islands: [
            { name: 'Blanchet Island', coordinates: [62.0, -111.0], area: 250 }
        ],
        cities: [
            { name: 'Yellowknife', coordinates: [62.4540, -114.3718], country: 'Canada', population: 20000 },
            { name: 'Hay River', coordinates: [60.8156, -115.7280], country: 'Canada', population: 3700 }
        ],
        biodiversity: [
            { label: 'Fish Species', value: 'Lake Trout, Northern Pike, Walleye' },
            { label: 'Wildlife', value: 'Bison, Caribou, Wolves' }
        ],
        economicImportance: [
            { label: 'Diamond Mining', value: 'Nearby mines' },
            { label: 'Fishing', value: 'Commercial and sport' },
            { label: 'Ice Road', value: 'Winter transport route' }
        ],
        environmentalIssues: [
            { label: 'Mining Impact', value: 'Historical contamination' },
            { label: 'Climate Change', value: 'Shorter ice road season' }
        ],
        waterDisputes: [],
        historicalImportance: [
            { label: 'Name Origin', value: 'Slavey Dene people' },
            { label: 'Gold Rush', value: '1930s Yellowknife' }
        ]
    }
];
