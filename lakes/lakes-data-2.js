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
            { name: 'Winnipeg', coordinates: [49.8951, -97.1384], country: '
