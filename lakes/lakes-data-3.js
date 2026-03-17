// ============================================
// LAKES DATA - FILE 3 (Lakes 21-30)
// ============================================

const lakesData3 = [
    {
        id: 'lake-issyk-kul',
        name: 'Lake Issyk-Kul',
        countries: [
            { name: 'Kyrgyzstan', code: 'KG' }
        ],
        continent: 'Asia',
        waterType: 'saltwater',
        lakeType: 'Endorheic/Tectonic',
        surfaceArea: 6236,
        maxDepth: 668,
        avgDepth: 278,
        volume: 1738,
        elevation: 1607,
        coordinates: [42.45, 77.25],
        defaultZoom: 8,
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lake Issyk-Kul' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [76.0, 42.4], [77.0, 42.7], [78.5, 42.5], [78.5, 42.2],
                    [77.5, 42.1], [76.5, 42.2], [76.0, 42.4]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Tyup River', length: 150, coordinates: [[78.5, 42.7], [78.3, 42.6], [78.0, 42.5]] },
            { name: 'Jyrgalan River', length: 120, coordinates: [[78.8, 42.5], [78.5, 42.45], [78.2, 42.4]] }
        ],
        outflowRivers: [],
        basinArea: 22080,
        islands: [],
        cities: [
            { name: 'Cholpon-Ata', coordinates: [42.65, 77.08], country: 'Kyrgyzstan', population: 12000 },
            { name: 'Karakol', coordinates: [42.49, 78.39], country: 'Kyrgyzstan', population: 70000 },
            { name: 'Balykchy', coordinates: [42.46, 76.19], country: 'Kyrgyzstan', population: 42000 }
        ],
        biodiversity: [
            { label: 'Fish Species', value: 'Trout, Carp (introduced)' },
            { label: 'Endemic', value: 'Issyk-Kul dace' }
        ],
        economicImportance: [
            { label: 'Tourism', value: 'Major resort destination' },
            { label: 'Fishing', value: 'Commercial and sport' },
            { label: 'Navy Base', value: 'Russian torpedo testing (historical)' }
        ],
        environmentalIssues: [
            { label: 'Tourism Pressure', value: 'Development impacts' },
            { label: 'Water Quality', value: 'Pollution concerns' }
        ],
        waterDisputes: [],
        historicalImportance: [
            { label: 'Silk Road', value: 'Major trade route stop' },
            { label: 'Sunken Cities', value: 'Archaeological sites underwater' },
            { label: 'Second Highest', value: 'After Titicaca for large lakes' }
        ]
    },
    {
        id: 'lake-albert',
        name: 'Lake Albert',
        countries: [
            { name: 'Uganda', code: 'UG' },
            { name: 'Democratic Republic of Congo', code: 'CD' }
        ],
        continent: 'Africa',
        waterType: 'freshwater',
        lakeType: 'Tectonic (Rift Valley)',
        surfaceArea: 5300,
        maxDepth: 58,
        avgDepth: 25,
        volume: 132,
        elevation: 615,
        coordinates: [1.67, 30.92],
        defaultZoom: 8,
        image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lake Albert' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [30.5, 2.3], [31.2, 2.0], [31.4, 1.5], [31.2, 1.0],
                    [30.8, 1.2], [30.5, 1.7], [30.5, 2.3]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Victoria Nile', length: 130, coordinates: [[32.0, 2.3], [31.5, 2.2], [31.2, 2.0]] },
            { name: 'Semliki River', length: 140, coordinates: [[29.5, 0.5], [30.0, 0.8], [30.5, 1.0]] }
        ],
        outflowRivers: [
            { name: 'Albert Nile', length: 210, coordinates: [[31.2, 2.5], [31.5, 3.0], [31.8, 3.5]] }
        ],
        basinArea: 17000,
        islands: [],
        cities: [
            { name: 'Butiaba', coordinates: [1.82, 31.32], country: 'Uganda', population: 5000 },
            { name: 'Pakwach', coordinates: [2.47, 31.5], country: 'Uganda', population: 15000 }
        ],
        biodiversity: [
            { label: 'Fish Species', value: 'Nile Perch, Tilapia' },
            { label: 'Hippos', value: 'Significant population' },
            { label: 'Crocodiles', value: 'Nile crocodiles' }
        ],
        economicImportance: [
            { label: 'Oil Discovery', value: '2006 - significant reserves' },
            { label: 'Fishing', value: 'Important for local communities' },
            { label: 'Transport', value: 'Ferry services' }
        ],
        environmentalIssues: [
            { label: 'Oil Development', value: 'Environmental concerns' },
            { label: 'Overfishing', value: 'Declining stocks' }
        ],
        waterDisputes: [
            { label: 'Uganda-DRC', value: 'Oil field boundaries' }
        ],
        historicalImportance: [
            { label: 'Named After', value: 'Prince Albert (1864)' },
            { label: 'Exploration', value: 'Samuel Baker discovery' }
        ]
    },
    {
        id: 'lake-mweru',
        name: 'Lake Mweru',
        countries: [
            { name: 'Zambia', code: 'ZM' },
            { name: 'Democratic Republic of Congo', code: 'CD' }
        ],
        continent: 'Africa',
        waterType: 'freshwater',
        lakeType: 'Tectonic',
        surfaceArea: 5120,
        maxDepth: 27,
        avgDepth: 7,
        volume: 38,
        elevation: 917,
        coordinates: [-9.0, 28.75],
        defaultZoom: 8,
        image: 'https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lake Mweru' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [28.4, -8.5], [29.0, -8.7], [29.2, -9.3], [28.9, -9.6],
                    [28.5, -9.4], [28.4, -8.9], [28.4, -8.5]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Luapula River', length: 560, coordinates: [[28.5, -10.0], [28.6, -9.5], [28.7, -9.0]] }
        ],
        outflowRivers: [
            { name: 'Luvua River', length: 350, coordinates: [[29.0, -8.5], [29.5, -8.0], [30.0, -7.5]] }
        ],
        basinArea: 100000,
        islands: [
            { name: 'Kilwa Island', coordinates: [-9.2, 28.8], area: 35 }
        ],
        cities: [
            { name: 'Nchelenge', coordinates: [-9.35, 28.73], country: 'Zambia', population: 25000 },
            { name: 'Pweto', coordinates: [-8.47, 28.9], country: 'DR Congo', population: 15000 }
        ],
        biodiversity: [
            { label: 'Fish Species', value: 'Pale fish, Tiger fish' },
            { label: 'Bird Species', value: 'Migratory waterfowl' }
        ],
        economicImportance: [
            { label: 'Fishing', value: 'Major industry for region' },
            { label: 'Cross-border Trade', value: 'Zambia-DRC commerce' }
        ],
        environmentalIssues: [
            { label: 'Overfishing', value: 'Declining catches' },
            { label: 'Deforestation', value: 'Watershed impacts' }
        ],
        waterDisputes: [],
        historicalImportance: [
            { label: 'Exploration', value: 'David Livingstone 1868' },
            { label: 'Colonial Era', value: 'Anglo-Belgian boundary' }
        ]
    },
    {
        id: 'lake-nettilling',
        name: 'Lake Nettilling',
        countries: [
            { name: 'Canada', code: 'CA' }
        ],
        continent: 'North America',
        waterType: 'freshwater',
        lakeType: 'Glacial',
        surfaceArea: 5066,
        maxDepth: 132,
        avgDepth: 30,
        volume: 152,
        elevation: 30,
        coordinates: [66.5, -70.9],
        defaultZoom: 7,
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lake Nettilling' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-72.0, 67.0], [-70.5, 67.0], [-69.5, 66.5], [-70.0, 66.0],
                    [-71.5, 66.0], [-72.5, 66.5], [-72.0, 67.0]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Isurtuq River', length: 100, coordinates: [[-72.0, 66.5], [-71.5, 66.5], [-71.0, 66.5]] }
        ],
        outflowRivers: [
            { name: 'Koukdjuak River', length: 120, coordinates: [[-69.5, 66.5], [-69.0, 66.3], [-68.5, 66.0]] }
        ],
        basinArea: 25000,
        islands: [],
        cities: [],
        biodiversity: [
            { label: 'Fish Species', value: 'Arctic Char' },
            { label: 'Wildlife', value: 'Caribou, Polar Bears (coastal)' },
            { label: 'Bird Species', value: 'Migratory waterfowl' }
        ],
        economicImportance: [
            { label: 'Subsistence', value: 'Inuit fishing and hunting' },
            { label: 'Remoteness', value: 'Limited economic activity' }
        ],
        environmentalIssues: [
            { label: 'Climate Change', value: 'Warming Arctic' },
            { label: 'Ice Cover', value: 'Changing patterns' }
        ],
        waterDisputes: [],
        historicalImportance: [
            { label: 'Inuit Territory', value: 'Traditional lands' },
            { label: 'Largest on Baffin', value: 'Baffin Island\'s largest lake' }
        ]
    },
    {
        id: 'lake-nipigon',
        name: 'Lake Nipigon',
        countries: [
            { name: 'Canada', code: 'CA' }
        ],
        continent: 'North America',
        waterType: 'freshwater',
        lakeType: 'Glacial',
        surfaceArea: 4848,
        maxDepth: 165,
        avgDepth: 55,
        volume: 248,
        elevation: 260,
        coordinates: [49.83, -88.5],
        defaultZoom: 8,
        image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lake Nipigon' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-89.0, 50.3], [-88.2, 50.2], [-87.8, 49.8], [-88.0, 49.3],
                    [-88.8, 49.4], [-89.3, 49.8], [-89.0, 50.3]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Ogoki River', length: 480, coordinates: [[-87.5, 50.5], [-88.0, 50.3], [-88.5, 50.0]] }
        ],
        outflowRivers: [
            { name: 'Nipigon River', length: 48, coordinates: [[-88.3, 49.0], [-88.5, 48.8], [-88.7, 48.5]] }
        ],
        basinArea: 25400,
        islands: [
            { name: 'Shakespeare Island', coordinates: [49.7, -88.4], area: 28 }
        ],
        cities: [
            { name: 'Nipigon', coordinates: [49.0158, -88.2686], country: 'Canada', population: 1600 }
        ],
        biodiversity: [
            { label: 'Fish Species', value: 'Brook Trout, Lake Trout, Walleye' },
            { label: 'Brook Trout', value: 'World record caught here' }
        ],
        economicImportance: [
            { label: 'Hydropower', value: 'Power generation' },
            { label: 'Sport Fishing', value: 'Trophy fishing destination' }
        ],
        environmentalIssues: [
            { label: 'Dam Impacts', value: 'Water level regulation' },
            { label: 'Mining', value: 'Potential development concerns' }
        ],
        waterDisputes: [],
        historicalImportance: [
            { label: 'Fur Trade', value: 'Hudson Bay Company route' },
            { label: 'Name Origin', value: 'Ojibwe "Animbiigoo"' }
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
        surfaceArea: 7935,
        maxDepth: 124,
        avgDepth: 20,
        volume: 204,
        elevation: 213,
        coordinates: [59.2, -109.5],
        defaultZoom: 7,
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lake Athabasca' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-111.5, 59.5], [-109.5, 59.8], [-107.5, 59.5], [-107.0, 58.8],
                    [-108.5, 58.5], [-110.5, 58.8], [-111.5, 59.2], [-111.5, 59.5]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Athabasca River', length: 1231, coordinates: [[-111.0, 58.5], [-110.5, 58.8], [-110.0, 59.0]] },
            { name: 'Fond du Lac River', length: 250, coordinates: [[-106.5, 59.5], [-107.0, 59.5], [-107.5, 59.5]] }
        ],
        outflowRivers: [
            { name: 'Slave River', length: 434, coordinates: [[-111.5, 59.2], [-112.0, 60.0], [-112.5, 60.5]] }
        ],
        basinArea: 271000,
        islands: [],
        cities: [
            { name: 'Fort Chipewyan', coordinates: [58.7186, -111.1489], country: 'Canada', population: 900 },
            { name: 'Uranium City', coordinates: [59.5667, -108.6167], country: 'Canada', population: 89 }
        ],
        biodiversity: [
            { label: 'Fish Species', value: 'Lake Trout, Walleye, Northern Pike' },
            { label: 'Wildlife', value: 'Wood Bison, Wolves, Bears' },
            { label: 'Bird Species', value: 'Pelicans, Whooping Cranes' }
        ],
        economicImportance: [
            { label: 'Mining History', value: 'Uranium mining legacy' },
            { label: 'Oil Sands', value: 'Athabasca River connection' },
            { label: 'Fishing', value: 'Commercial and sport' }
        ],
        environmentalIssues: [
            { label: 'Oil Sands Impact', value: 'Contaminants in delta' },
            { label: 'Uranium Legacy', value: 'Historical contamination' },
            { label: 'Climate Change', value: 'Water level changes' }
        ],
        waterDisputes: [],
        historicalImportance: [
            { label: 'Fur Trade', value: 'Fort Chipewyan 1788' },
            { label: 'Uranium Discovery', value: '1930s - WWII supplies' }
        ]
    },
    {
        id: 'lake-taymyr',
        name: 'Lake Taymyr',
        countries: [
            { name: 'Russia', code: 'RU' }
        ],
        continent: 'Asia',
        waterType: 'freshwater',
        lakeType: 'Glacial/Tectonic',
        surfaceArea: 4560,
        maxDepth: 26,
        avgDepth: 3,
        volume: 13,
        elevation: 6,
        coordinates: [74.5, 102.5],
        defaultZoom: 7,
        image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lake Taymyr' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [100.0, 74.8], [102.0, 75.0], [104.5, 74.8], [105.0, 74.3],
                    [103.5, 74.0], [101.0, 74.2], [100.0, 74.5], [100.0, 74.8]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Upper Taymyra', length: 300, coordinates: [[99.0, 73.5], [100.0, 74.0], [101.0, 74.3]] }
        ],
        outflowRivers: [
            { name: 'Lower Taymyra', length: 187, coordinates: [[103.5, 75.0], [104.0, 75.5], [105.0, 76.0]] }
        ],
        basinArea: 104300,
        islands: [],
        cities: [],
        biodiversity: [
            { label: 'Fish Species', value: 'Arctic Char, Muksun' },
            { label: 'Wildlife', value: 'Reindeer, Arctic Fox, Lemmings' },
            { label: 'Bird Species', value: 'Geese, Swans (summer)' }
        ],
        economicImportance: [
            { label: 'Remote', value: 'Limited economic activity' },
            { label: 'Scientific', value: 'Arctic research site' }
        ],
        environmentalIssues: [
            { label: 'Climate Change', value: 'Permafrost thaw' },
            { label: 'Norilsk Pollution', value: 'Heavy metals from mining' }
        ],
        waterDisputes: [],
        historicalImportance: [
            { label: 'Arctic Exploration', value: 'Scientific expeditions' },
            { label: 'Northernmost', value: 'One of world\'s most northern' }
        ]
    },
    {
        id: 'lake-qinghai',
        name: 'Lake Qinghai',
        countries: [
            { name: 'China', code: 'CN' }
        ],
        continent: 'Asia',
        waterType: 'saltwater',
        lakeType: 'Endorheic/Tectonic',
        surfaceArea: 4317,
        maxDepth: 27,
        avgDepth: 21,
        volume: 85,
        elevation: 3205,
        coordinates: [36.9, 100.2],
        defaultZoom: 8,
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lake Qinghai' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [99.6, 37.0], [100.3, 37.3], [101.0, 37.0], [100.8, 36.5],
                    [100.0, 36.5], [99.5, 36.7], [99.6, 37.0]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Buha River', length: 300, coordinates: [[98.5, 37.0], [99.5, 37.0], [100.0, 37.0]] },
            { name: 'Shaliu River', length: 100, coordinates: [[100.5, 37.5], [100.3, 37.3], [100.0, 37.1]] }
        ],
        outflowRivers: [],
        basinArea: 29660,
        islands: [
            { name: 'Bird Island', coordinates: [36.97, 99.77], area: 0.11, description: 'Major bird sanctuary' },
            { name: 'Haixin Island', coordinates: [36.85, 100.15], area: 1.0 }
        ],
        cities: [
            { name: 'Xining', coordinates: [36.6167, 101.7667], country: 'China', population: 2350000 }
        ],
        biodiversity: [
            { label: 'Fish Species', value: 'Qinghai Lake scaleless carp (endemic)' },
            { label: 'Birds', value: 'Bar-headed Geese, breeding ground' },
            { label: 'Mammals', value: 'Tibetan antelope nearby' }
        ],
        economicImportance: [
            { label: 'Tourism', value: 'Major tourist attraction' },
            { label: 'Cycling', value: 'Tour of Qinghai Lake race' },
            { label: 'Salt Production', value: 'Historical importance' }
        ],
        environmentalIssues: [
            { label: 'Shrinking', value: 'Now expanding again' },
            { label: 'Overgrazing', value: 'Grassland degradation' },
            { label: 'Tourism Impact', value: 'Development pressure' }
        ],
        waterDisputes: [],
        historicalImportance: [
            { label: 'Silk Road', value: 'Near ancient routes' },
            { label: 'Tibetan Buddhism', value: 'Sacred lake' },
            { label: 'Province Name', value: 'Qinghai means "Cyan Sea"' }
        ]
    },
    {
        id: 'lake-saimaa',
        name: 'Lake Saimaa',
        countries: [
            { name: 'Finland', code: 'FI' }
        ],
        continent: 'Europe',
        waterType: 'freshwater',
        lakeType: 'Glacial',
        surfaceArea: 4400,
        maxDepth: 82,
        avgDepth: 12,
        volume: 36,
        elevation: 76,
        coordinates: [61.5, 28.2],
        defaultZoom: 7,
        image: 'https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lake Saimaa' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [27.0, 62.0], [28.5, 62.2], [29.5, 61.8], [29.5, 61.0],
                    [28.5, 61.0], [27.5, 61.2], [27.0, 61.5], [27.0, 62.0]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Pielisjoki', length: 68, coordinates: [[29.5, 62.5], [29.2, 62.2], [28.8, 62.0]] },
            { name: 'Kallavesi', length: 50, coordinates: [[27.5, 63.0], [27.8, 62.5], [28.0, 62.0]] }
        ],
        outflowRivers: [
            { name: 'Vuoksi', length: 156, coordinates: [[29.0, 61.0], [29.5, 61.2], [30.0, 61.5]] }
        ],
        basinArea: 66000,
        islands: [
            { name: 'Thousands of islands', coordinates: [61.5, 28.0], area: 'Varies', description: '13,710 islands' }
        ],
        cities: [
            { name: 'Lappeenranta', coordinates: [61.0587, 28.1887], country: 'Finland', population: 73000 },
            { name: 'Savonlinna', coordinates: [61.8686, 28.8782], country: 'Finland', population: 33000 },
            { name: 'Mikkeli', coordinates: [61.6886, 27.2724], country: 'Finland', population: 54000 }
        ],
        biodiversity: [
            { label: 'Saimaa Seal', value: 'Endemic subspecies (400 remaining)' },
            { label: 'Fish Species', value: 'Pike, Perch, Salmon' }
        ],
        economicImportance: [
            { label: 'Tourism', value: 'Lake cruises, cottages' },
            { label: 'Saimaa Canal', value: 'Russia connection' },
            { label: 'Forestry', value: 'Timber transport' }
        ],
        environmentalIssues: [
            { label: 'Saimaa Seal', value: 'Critically endangered' },
            { label: 'Eutrophication', value: 'Some areas affected' }
        ],
        waterDisputes: [],
        historicalImportance: [
            { label: 'Saimaa Canal', value: '1856 - Russia to Finland' },
            { label: 'Lake District', value: 'Finnish national identity' }
        ]
    },
    {
        id: 'lake-vanern',
        name: 'Lake Vänern',
        countries: [
            { name: 'Sweden', code: 'SE' }
        ],
        continent: 'Europe',
        waterType: 'freshwater',
        lakeType: 'Glacial',
        surfaceArea: 5655,
        maxDepth: 106,
        avgDepth: 27,
        volume: 153,
        elevation: 44,
        coordinates: [58.9, 13.1],
        defaultZoom: 8,
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lake Vänern' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [12.2, 59.3], [13.0, 59.5], [14.0, 59.2], [14.0, 58.5],
                    [13.0, 58.3], [12.3, 58.6], [12.2, 59.0], [12.2, 59.3]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Klarälven', length: 460, coordinates: [[13.5, 60.0], [13.3, 59.5], [13.0, 59.2]] },
            { name: 'Gullspångsälven', length: 180, coordinates: [[14.5, 59.0], [14.0, 59.0], [13.5, 59.0]] }
        ],
        outflowRivers: [
            { name: 'Göta älv', length: 93, coordinates: [[12.3, 58.3], [12.0, 58.0], [11.8, 57.7]] }
        ],
        basinArea: 46800,
        islands: [
            { name: 'Torsö', coordinates: [58.8, 13.2], area: 61 },
            { name: 'Kållandsö', coordinates: [58.68, 13.33], area: 75 }
        ],
        cities: [
            { name: 'Karlstad', coordinates: [59.4022, 13.5115], country: 'Sweden', population: 93000 },
            { name: 'Lidköping', coordinates: [58.5052, 13.1579], country: 'Sweden', population: 39000 },
            { name: 'Mariestad', coordinates: [58.7060, 13.8234], country: 'Sweden', population: 24000 }
        ],
        biodiversity: [
            { label: 'Fish Species', value: 'Salmon, Trout, Pike, Zander' },
            { label: 'Vänern Salmon', value: 'Unique landlocked population' }
        ],
        economicImportance: [
            { label: 'Shipping', value: 'Trollhätte Canal connection' },
            { label: 'Fishing', value: 'Commercial and sport fishing' },
            { label: 'Hydropower', value: 'Göta älv power plants' }
        ],
        environmentalIssues: [
            { label: 'Eutrophication', value: 'Agricultural runoff' },
            { label: 'Invasive Species', value: 'Signal crayfish impact' }
        ],
        waterDisputes: [],
        historicalImportance: [
            { label: 'Largest in EU', value: 'Third largest in Europe' },
            { label: 'Vikings', value: 'Trade route' },
            { label: 'Göta Canal', value: '1832 completion' }
        ]
    }
];
