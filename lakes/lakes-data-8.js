// ============================================
// LAKES DATA - FILE 8 (Lakes 71-80)
// ============================================

const lakesData8 = [
    {
        id: 'lake-atitlan',
        name: 'Lake Atitlán',
        countries: [
            { name: 'Guatemala', code: 'GT' }
        ],
        continent: 'North America',
        waterType: 'freshwater',
        lakeType: 'Volcanic (Caldera)',
        surfaceArea: 130,
        maxDepth: 340,
        avgDepth: 220,
        volume: 24,
        elevation: 1562,
        coordinates: [14.7, -91.2],
        defaultZoom: 11,
        image: 'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lake Atitlán' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-91.3, 14.75], [-91.15, 14.78], [-91.05, 14.72],
                    [-91.1, 14.62], [-91.25, 14.63], [-91.35, 14.7], [-91.3, 14.75]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Quiscab River', length: 18, coordinates: [[-91.15, 14.8], [-91.17, 14.77], [-91.18, 14.75]] },
            { name: 'Multiple small streams', length: 10, coordinates: [[-91.25, 14.78], [-91.23, 14.75], [-91.2, 14.73]] }
        ],
        outflowRivers: [],
        basinArea: 541,
        islands: [],
        cities: [
            { name: 'Panajachel', coordinates: [14.7389, -91.1583], country: 'Guatemala', population: 15000 },
            { name: 'San Pedro La Laguna', coordinates: [14.6906, -91.2711], country: 'Guatemala', population: 12000 },
            { name: 'Santiago Atitlán', coordinates: [14.6372, -91.2306], country: 'Guatemala', population: 45000 },
            { name: 'San Marcos La Laguna', coordinates: [14.7267, -91.2556], country: 'Guatemala', population: 3500 },
            { name: 'Santa Cruz La Laguna', coordinates: [14.7478, -91.2128], country: 'Guatemala', population: 5500 }
        ],
        biodiversity: [
            { label: 'Endemic Fish', value: 'Atitlán grebe (extinct 1989)' },
            { label: 'Current Fish', value: 'Black bass, crappie (introduced)' },
            { label: 'Birds', value: 'Various waterfowl, hummingbirds' },
            { label: 'Flora', value: 'Cloud forest vegetation on slopes' }
        ],
        economicImportance: [
            { label: 'Tourism', value: 'Major tourist destination - "Most beautiful lake in world"' },
            { label: 'Textiles', value: 'Traditional Maya weaving' },
            { label: 'Agriculture', value: 'Coffee cultivation on slopes' },
            { label: 'Fishing', value: 'Small-scale local fishing' }
        ],
        environmentalIssues: [
            { label: 'Cyanobacteria', value: '2009 major bloom - recurring problem' },
            { label: 'Sewage', value: 'Untreated wastewater from villages' },
            { label: 'Deforestation', value: 'Watershed degradation' },
            { label: 'Invasive Species', value: 'Introduced bass eliminated native fish' }
        ],
        waterDisputes: [],
        historicalImportance: [
            { label: 'Maya Heritage', value: 'Surrounded by Maya villages' },
            { label: 'Three Volcanoes', value: 'Atitlán, Tolimán, San Pedro frame lake' },
            { label: 'Aldous Huxley', value: 'Called it "too much of a good thing"' },
            { label: 'Caldera', value: 'Formed 84,000 years ago' }
        ]
    },
    {
        id: 'lake-malaren',
        name: 'Lake Mälaren',
        countries: [
            { name: 'Sweden', code: 'SE' }
        ],
        continent: 'Europe',
        waterType: 'freshwater',
        lakeType: 'Tectonic/Glacial',
        surfaceArea: 1140,
        maxDepth: 64,
        avgDepth: 13,
        volume: 14,
        elevation: 0.8,
        coordinates: [59.45, 17.1],
        defaultZoom: 8,
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lake Mälaren' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [15.8, 59.5], [17.0, 59.6], [18.0, 59.4],
                    [18.1, 59.3], [17.2, 59.25], [16.0, 59.3],
                    [15.5, 59.4], [15.8, 59.5]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Arbogaån', length: 185, coordinates: [[15.8, 59.4], [16.0, 59.42], [16.2, 59.45]] },
            { name: 'Hedströmmen', length: 120, coordinates: [[15.9, 59.5], [16.1, 59.48], [16.3, 59.47]] },
            { name: 'Kolbäcksån', length: 200, coordinates: [[15.7, 59.55], [16.0, 59.52], [16.3, 59.5]] },
            { name: 'Eskilstunaån', length: 50, coordinates: [[16.5, 59.38], [16.6, 59.4], [16.7, 59.42]] }
        ],
        outflowRivers: [
            { name: 'Norrström', length: 2, coordinates: [[18.07, 59.33], [18.1, 59.32], [18.12, 59.31]] },
            { name: 'Söderström', length: 1, coordinates: [[18.06, 59.32], [18.08, 59.31], [18.1, 59.3]] }
        ],
        basinArea: 22650,
        islands: [
            { name: 'Selaön', coordinates: [59.42, 17.05], area: 95, description: 'Largest island' },
            { name: 'Svartsjölandet', coordinates: [59.35, 17.65], area: 50 },
            { name: 'Adelsö', coordinates: [59.37, 17.38], area: 26, description: 'Viking heritage site' },
            { name: 'Björkö', coordinates: [59.33, 17.55], area: 7, description: 'Birka Viking settlement UNESCO' },
            { name: 'Over 1000 islands', coordinates: [59.4, 17.2], area: 'Various' }
        ],
        cities: [
            { name: 'Stockholm', coordinates: [59.3293, 18.0686], country: 'Sweden', population: 975000 },
            { name: 'Västerås', coordinates: [59.6162, 16.5528], country: 'Sweden', population: 128000 },
            { name: 'Eskilstuna', coordinates: [59.3666, 16.5077], country: 'Sweden', population: 107000 },
            { name: 'Enköping', coordinates: [59.6357, 17.0764], country: 'Sweden', population: 24000 },
            { name: 'Uppsala', coordinates: [59.8586, 17.6389], country: 'Sweden', population: 177000 }
        ],
        biodiversity: [
            { label: 'Fish Species', value: 'Pike, Perch, Zander, Eel, Salmon' },
            { label: 'Birds', value: 'White-tailed Eagle, Great Crested Grebe' },
            { label: 'Recovery', value: 'Ecosystem improved since 1970s' }
        ],
        economicImportance: [
            { label: 'Water Supply', value: '2 million people drinking water' },
            { label: 'Shipping', value: 'Historical trade route' },
            { label: 'Recreation', value: 'Sailing, swimming, fishing' },
            { label: 'Tourism', value: 'Drottningholm Palace, Birka' }
        ],
        environmentalIssues: [
            { label: 'Historical Pollution', value: 'Industrial contamination legacy' },
            { label: 'Eutrophication', value: 'Agricultural runoff' },
            { label: 'Invasive Species', value: 'Signal crayfish, Chinese mitten crab' }
        ],
        waterDisputes: [],
        historicalImportance: [
            { label: 'Stockholm Founded', value: 'Lake outlet - strategic location' },
            { label: 'Birka', value: 'Viking Age trading center UNESCO' },
            { label: 'Baltic Connection', value: 'Was sea bay until land uplift' },
            { label: 'Royal Palaces', value: 'Drottningholm, Gripsholm on shores' }
        ]
    },
    {
        id: 'lake-trasimeno',
        name: 'Lake Trasimeno',
        countries: [
            { name: 'Italy', code: 'IT' }
        ],
        continent: 'Europe',
        waterType: 'freshwater',
        lakeType: 'Tectonic',
        surfaceArea: 128,
        maxDepth: 6,
        avgDepth: 4.3,
        volume: 0.6,
        elevation: 258,
        coordinates: [43.1, 12.1],
        defaultZoom: 11,
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lake Trasimeno' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [12.0, 43.15], [12.18, 43.15], [12.22, 43.08],
                    [12.15, 43.03], [12.0, 43.05], [11.95, 43.1], [12.0, 43.15]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Paganico Stream', length: 12, coordinates: [[12.0, 43.18], [12.02, 43.16], [12.05, 43.14]] },
            { name: 'Tresa Stream', length: 8, coordinates: [[12.15, 43.18], [12.14, 43.16], [12.13, 43.14]] }
        ],
        outflowRivers: [
            { name: 'Emissario (artificial)', length: 8, coordinates: [[12.2, 43.08], [12.25, 43.05], [12.3, 43.02]] }
        ],
        basinArea: 396,
        islands: [
            { name: 'Isola Maggiore', coordinates: [43.1, 12.1], area: 0.24, description: 'St. Francis visited 1211' },
            { name: 'Isola Polvese', coordinates: [43.08, 12.15], area: 0.7, description: 'Largest island, nature reserve' },
            { name: 'Isola Minore', coordinates: [43.1, 12.08], area: 0.05, description: 'Uninhabited, private' }
        ],
        cities: [
            { name: 'Perugia', coordinates: [43.1107, 12.3908], country: 'Italy', population: 166000 },
            { name: 'Castiglione del Lago', coordinates: [43.1264, 12.0489], country: 'Italy', population: 15500 },
            { name: 'Passignano sul Trasimeno', coordinates: [43.1833, 12.1333], country: 'Italy', population: 5700 },
            { name: 'Tuoro sul Trasimeno', coordinates: [43.2083, 12.0750], country: 'Italy', population: 3800 }
        ],
        biodiversity: [
            { label: 'Fish Species', value: 'Pike, Tench, Carp, Eel, Perch' },
            { label: 'Birds', value: 'Grebes, Cormorants, Herons, Bitterns' },
            { label: 'Wetlands', value: 'Important reed bed habitats' },
            { label: 'Very Shallow', value: 'One of shallowest major lakes in Italy' }
        ],
        economicImportance: [
            { label: 'Fishing', value: 'Traditional eel and carp fishing' },
            { label: 'Tourism', value: 'Historic towns, beaches' },
            { label: 'Agriculture', value: 'Wine and olive oil region' },
            { label: 'Ferries', value: 'Service to islands' }
        ],
        environmentalIssues: [
            { label: 'Water Level', value: 'Historically prone to drying' },
            { label: 'Eutrophication', value: 'Algae blooms in summer' },
            { label: 'Shallow Depth', value: 'Vulnerable to evaporation' }
        ],
        waterDisputes: [],
        historicalImportance: [
            { label: 'Battle of Lake Trasimene', value: '217 BC - Hannibal defeated Romans' },
            { label: 'Largest in Central Italy', value: '4th largest lake in Italy' },
            { label: 'St. Francis', value: 'Spent Lent on Isola Maggiore 1211' },
            { label: 'Etruscan Era', value: 'Ancient settlements around lake' }
        ]
    },
    {
        id: 'lake-taupo',
        name: 'Lake Taupo',
        countries: [
            { name: 'New Zealand', code: 'NZ' }
        ],
        continent: 'Oceania',
        waterType: 'freshwater',
        lakeType: 'Volcanic (Caldera)',
        surfaceArea: 616,
        maxDepth: 186,
        avgDepth: 97,
        volume: 59,
        elevation: 356,
        coordinates: [-38.8, 175.9],
        defaultZoom: 9,
        image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lake Taupo' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [175.6, -38.65], [176.05, -38.7], [176.1, -38.9],
                    [175.95, -39.0], [175.65, -38.95], [175.55, -38.8], [175.6, -38.65]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Tongariro River', length: 80, coordinates: [[175.75, -39.05], [175.8, -38.98], [175.85, -38.92]] },
            { name: 'Waitahanui River', length: 25, coordinates: [[176.05, -38.85], [176.0, -38.82], [175.95, -38.8]] },
            { name: 'Tauranga-Taupo River', length: 55, coordinates: [[176.0, -39.0], [175.95, -38.95], [175.9, -38.9]] }
        ],
        outflowRivers: [
            { name: 'Waikato River', length: 425, coordinates: [[176.07, -38.7], [176.15, -38.65], [176.25, -38.6]] }
        ],
        basinArea: 3487,
        islands: [
            { name: 'Motutaiko Island', coordinates: [-38.8, 175.83], area: 0.16, description: 'Sacred to Māori' }
        ],
        cities: [
            { name: 'Taupo', coordinates: [-38.6857, 176.0702], country: 'New Zealand', population: 26000 },
            { name: 'Turangi', coordinates: [-38.9889, 175.8083], country: 'New Zealand', population: 3000 },
            { name: 'Kinloch', coordinates: [-38.6333, 175.9167], country: 'New Zealand', population: 800 }
        ],
        biodiversity: [
            { label: 'Trout', value: 'World-famous rainbow and brown trout fishing' },
            { label: 'Introduction', value: 'Trout introduced 1886 from California' },
            { label: 'Native Species', value: 'Koaro, common smelt' },
            { label: 'Birds', value: 'Black swan, shags, paradise shelduck' }
        ],
        economicImportance: [
            { label: 'Tourism', value: 'Major destination - adventure sports hub' },
            { label: 'Geothermal', value: 'Power generation' },
            { label: 'Trout Fishing', value: 'World-class fly fishing destination' },
            { label: 'Hydropower', value: 'Waikato River scheme' }
        ],
        environmentalIssues: [
            { label: 'Water Quality', value: 'Generally very clean' },
            { label: 'Invasive Species', value: 'Lake weed (Lagarosiphon)' },
            { label: 'Nutrient Levels', value: 'Monitoring to prevent algae' }
        ],
        waterDisputes: [],
        historicalImportance: [
            { label: 'Oruanui Eruption', value: '26,500 years ago - supervolcano formed lake' },
            { label: 'Hatepe Eruption', value: '232 AD - largest eruption in 5000 years' },
            { label: 'Māori', value: 'Ngāti Tūwharetoa tribal area' },
            { label: 'Largest in NZ', value: 'Largest lake by surface area' }
        ]
    },
    {
        id: 'lake-skadar',
        name: 'Lake Skadar',
        countries: [
            { name: 'Montenegro', code: 'ME' },
            { name: 'Albania', code: 'AL' }
        ],
        continent: 'Europe',
        waterType: 'freshwater',
        lakeType: 'Tectonic/Karst',
        surfaceArea: 475,
        maxDepth: 44,
        avgDepth: 5,
        volume: 2.6,
        elevation: 5,
        coordinates: [42.2, 19.3],
        defaultZoom: 10,
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lake Skadar' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [19.1, 42.35], [19.45, 42.35], [19.55, 42.2],
                    [19.5, 42.05], [19.2, 42.0], [19.05, 42.15], [19.1, 42.35]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Morača River', length: 99, coordinates: [[19.25, 42.45], [19.28, 42.38], [19.3, 42.32]] },
            { name: 'Crnojevića River', length: 15, coordinates: [[19.02, 42.35], [19.08, 42.33], [19.12, 42.3]] },
            { name: 'Underwater springs', length: 0, coordinates: [[19.35, 42.15], [19.37, 42.18], [19.4, 42.2]] }
        ],
        outflowRivers: [
            { name: 'Bojana River', length: 44, coordinates: [[19.48, 42.1], [19.5, 42.05], [19.55, 41.95]] }
        ],
        basinArea: 5490,
        islands: [
            { name: 'Vranjina', coordinates: [42.28, 19.15], area: 1.5, description: 'Largest island' },
            { name: 'Lesendro', coordinates: [42.23, 19.18], area: 0.5, description: 'Historic fortress' },
            { name: 'Grmožur', coordinates: [42.17, 19.25], area: 0.3, description: 'Former prison' },
            { name: 'Beška', coordinates: [42.18, 19.22], area: 0.4, description: 'Two medieval churches' },
            { name: 'Over 50 islands', coordinates: [42.2, 19.2], area: 'Various' }
        ],
        cities: [
            { name: 'Shkodër', coordinates: [42.0683, 19.5126], country: 'Albania', population: 135000 },
            { name: 'Podgorica', coordinates: [42.4411, 19.2636], country: 'Montenegro', population: 190000 },
            { name: 'Virpazar', coordinates: [42.2403, 19.0931], country: 'Montenegro', population: 500 },
            { name: 'Bar', coordinates: [42.0931, 19.1003], country: 'Montenegro', population: 14000 }
        ],
        biodiversity: [
            { label: 'Pelicans', value: 'Dalmatian pelican colonies' },
            { label: 'Fish Species', value: 'Carp, Bleak, Eel, endemic species' },
            { label: 'Birds', value: '280 species - most important in Europe' },
            { label: 'Water Lilies', value: 'Extensive lily fields' }
        ],
        economicImportance: [
            { label: 'Fishing', value: 'Traditional carp and eel fishing' },
            { label: 'Tourism', value: 'National Park, boat tours' },
            { label: 'Wine', value: 'Crmnica wine region on slopes' }
        ],
        environmentalIssues: [
            { label: 'Water Pollution', value: 'Sewage from surrounding areas' },
            { label: 'Illegal Hunting', value: 'Poaching of protected birds' },
            { label: 'Fluctuating Levels', value: 'Seasonal variation 4-6m' }
        ],
        waterDisputes: [
            { label: 'Montenegro-Albania', value: 'Border demarcation in lake' }
        ],
        historicalImportance: [
            { label: 'Largest Balkans', value: 'Largest lake in Southern Europe' },
            { label: 'Medieval', value: 'Island monasteries and fortresses' },
            { label: 'Ottoman Era', value: 'Strategic border region' },
            { label: 'National Park', value: 'Montenegro\'s first (1983)' }
        ]
    },
    {
        id: 'lake-van',
        name: 'Lake Van',
        countries: [
            { name: 'Turkey', code: 'TR' }
        ],
        continent: 'Asia',
        waterType: 'saltwater',
        lakeType: 'Volcanic/Endorheic',
        surfaceArea: 3755,
        maxDepth: 451,
        avgDepth: 171,
        volume: 607,
        elevation: 1648,
        coordinates: [38.6, 43.0],
        defaultZoom: 8,
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lake Van' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [42.4, 38.9], [43.4, 38.85], [43.8, 38.6],
                    [43.5, 38.3], [42.8, 38.25], [42.3, 38.5],
                    [42.3, 38.75], [42.4, 38.9]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Bendimahi River', length: 100, coordinates: [[43.5, 38.95], [43.4, 38.9], [43.3, 38.85]] },
            { name: 'Karasu River', length: 80, coordinates: [[42.5, 38.95], [42.55, 38.88], [42.6, 38.82]] },
            { name: 'Zilan River', length: 65, coordinates: [[43.7, 38.7], [43.6, 38.68], [43.5, 38.65]] }
        ],
        outflowRivers: [],
        basinArea: 12500,
        islands: [
            { name: 'Akdamar Island', coordinates: [38.33, 43.03], area: 0.7, description: '10th century Armenian church' },
            { name: 'Çarpanak Island', coordinates: [38.5, 43.25], area: 2.5 },
            { name: 'Adır Island', coordinates: [38.6, 43.35], area: 1.5 },
            { name: 'Kuş Island', coordinates: [38.55, 43.3], area: 0.8 }
        ],
        cities: [
            { name: 'Van', coordinates: [38.5012, 43.4089], country: 'Turkey', population: 525000 },
            { name: 'Tatvan', coordinates: [38.4967, 42.2750], country: 'Turkey', population: 83000 },
            { name: 'Erciş', coordinates: [39.0167, 43.3500], country: 'Turkey', population: 175000 },
            { name: 'Ahlat', coordinates: [38.7525, 42.4808], country: 'Turkey', population: 25000 }
        ],
        biodiversity: [
            { label: 'Pearl Mullet', value: 'Endemic Alburnus tarichi - only fish species' },
            { label: 'Alkaline', value: 'Soda lake - very high pH' },
            { label: 'Van Cat', value: 'Unique swimming cat breed from region' },
            { label: 'Flamingos', value: 'Migratory visitors' }
        ],
        economicImportance: [
            { label: 'Fishing', value: 'Pearl mullet (İnci kefali) industry' },
            { label: 'Tourism', value: 'Akdamar Church, Van Castle' },
            { label: 'Ferry', value: 'Tatvan-Van train ferry' },
            { label: 'Soda', value: 'Soda extraction (historical)' }
        ],
        environmentalIssues: [
            { label: 'Rising Levels', value: '2m rise since 1990s flooding areas' },
            { label: 'Sewage', value: 'Urban pollution from Van' },
            { label: 'Overfishing', value: 'Pearl mullet stocks declining' }
        ],
        waterDisputes: [],
        historicalImportance: [
            { label: 'Largest in Turkey', value: 'Also largest soda lake' },
            { label: 'Urartu Civilization', value: 'Van Fortress - 9th century BC' },
            { label: 'Armenian Heritage', value: 'Akdamar Church UNESCO tentative list' },
            { label: 'Seljuk Era', value: 'Ahlat Seljuk cemetery - largest in world' }
        ]
    },
    {
        id: 'lake-bled',
        name: 'Lake Bled',
        countries: [
            { name: 'Slovenia', code: 'SI' }
        ],
        continent: 'Europe',
        waterType: 'freshwater',
        lakeType: 'Glacial/Tectonic',
        surfaceArea: 1.45,
        maxDepth: 30,
        avgDepth: 17,
        volume: 0.025,
        elevation: 475,
        coordinates: [46.365, 14.095],
        defaultZoom: 14,
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lake Bled' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [14.075, 46.375], [14.11, 46.375], [14.115, 46.36],
                    [14.1, 46.355], [14.075, 46.358], [14.07, 46.368], [14.075, 46.375]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Thermal springs', length: 0, coordinates: [[14.1, 46.37], [14.098, 46.368], [14.095, 46.365]] },
            { name: 'Small streams', length: 5, coordinates: [[14.08, 46.36], [14.085, 46.362], [14.09, 46.365]] }
        ],
        outflowRivers: [
            { name: 'Jezernica', length: 2, coordinates: [[14.07, 46.365], [14.05, 46.36], [14.03, 46.355]] }
        ],
        basinArea: 9,
        islands: [
            { name: 'Bled Island', coordinates: [46.362, 14.09], area: 0.008, description: 'Pilgrimage Church of Assumption, 99 steps' }
        ],
        cities: [
            { name: 'Bled', coordinates: [46.3683, 14.1139], country: 'Slovenia', population: 8000 },
            { name: 'Radovljica', coordinates: [46.3444, 14.1744], country: 'Slovenia', population: 6000 },
            { name: 'Ljubljana', coordinates: [46.0569, 14.5058], country: 'Slovenia', population: 292000 }
        ],
        biodiversity: [
            { label: 'Fish Species', value: 'Carp, Pike, Trout (stocked)' },
            { label: 'Swans', value: 'Iconic mute swans' },
            { label: 'Trees', value: 'Chestnut, pine forests surrounding' }
        ],
        economicImportance: [
            { label: 'Tourism', value: 'Slovenia\'s #1 tourist attraction' },
            { label: 'Weddings', value: 'Popular wedding destination' },
            { label: 'Cream Cake', value: 'Famous Bled cream cake (kremšnita)' },
            { label: 'Rowing', value: 'World Rowing Championships venue' }
        ],
        environmentalIssues: [
            { label: 'Overtourism', value: 'Managing visitor numbers' },
            { label: 'Water Quality', value: 'Thermal springs keep it clean' },
            { label: 'Warm Summers', value: 'Occasional algae in hot weather' }
        ],
        waterDisputes: [],
        historicalImportance: [
            { label: 'Icon of Slovenia', value: 'National symbol' },
            { label: 'Tito\'s Residence', value: 'Yugoslav presidential retreat' },
            { label: 'Bled Castle', value: '1004 AD - oldest written record' },
            { label: 'Pletna Boats', value: 'Traditional flat-bottomed boats since 1590' }
        ]
    },
    {
        id: 'lake-powell',
        name: 'Lake Powell',
        countries: [
            { name: 'United States', code: 'US' }
        ],
        continent: 'North America',
        waterType: 'freshwater',
        lakeType: 'Artificial (Reservoir)',
        surfaceArea: 658,
        maxDepth: 170,
        avgDepth: 40,
        volume: 30,
        elevation: 1127,
        coordinates: [37.0, -111.25],
        defaultZoom: 8,
        image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lake Powell' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-111.8, 37.5], [-110.8, 37.4], [-110.5, 37.1],
                    [-110.8, 36.9], [-111.5, 37.0], [-111.8, 37.2], [-111.8, 37.5]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Colorado River', length: 2330, coordinates: [[-110.5, 37.5], [-110.8, 37.35], [-111.0, 37.2]] },
            { name: 'San Juan River', length: 616, coordinates: [[-110.3, 37.15], [-110.5, 37.12], [-110.7, 37.1]] },
            { name: 'Escalante River', length: 145, coordinates: [[-111.4, 37.55], [-111.3, 37.45], [-111.2, 37.35]] }
        ],
        outflowRivers: [
            { name: 'Colorado River (below dam)', length: 2330, coordinates: [[-111.5, 36.93], [-111.55, 36.88], [-111.6, 36.83]] }
        ],
        basinArea: 108335,
        islands: [
            { name: 'Antelope Island', coordinates: [37.05, -111.45], area: 1 },
            { name: 'Castle Rock', coordinates: [37.2, -111.1], area: 0.1 },
            { name: 'Gunsight Butte', coordinates: [37.15, -111.2], area: 0.2 }
        ],
        cities: [
            { name: 'Page', coordinates: [36.9147, -111.4558], country: 'USA', population: 7500 },
            { name: 'Kanab', coordinates: [37.0475, -112.5264], country: 'USA', population: 4800 }
        ],
        biodiversity: [
            { label: 'Fish Species', value: 'Striped Bass, Largemouth Bass, Walleye' },
            { label: 'Native Species', value: 'Colorado Pikeminnow (endangered)' },
            { label: 'Desert Wildlife', value: 'Bighorn sheep, coyotes, eagles' }
        ],
        economicImportance: [
            { label: 'Recreation', value: '2+ million visitors/year' },
            { label: 'Houseboats', value: 'Major houseboat destination' },
            { label: 'Hydropower', value: 'Glen Canyon Dam - 1,320 MW' },
            { label: 'Water Storage', value: 'Supplies 40 million people' }
        ],
        environmentalIssues: [
            { label: 'Severe Drought', value: 'Critically low levels since 2020' },
            { label: 'Dead Pool Risk', value: 'Could drop below power generation level' },
            { label: 'Glen Canyon', value: 'Flooded pristine canyon ecosystem' },
            { label: 'Sediment', value: 'Accumulating behind dam' }
        ],
        waterDisputes: [
            { label: 'Colorado Compact', value: '7 states + Mexico water allocation' },
            { label: 'Shortage Declarations', value: '2021, 2022 federal curtailments' }
        ],
        historicalImportance: [
            { label: 'Glen Canyon Dam', value: 'Completed 1966' },
            { label: 'Named For', value: 'John Wesley Powell - Colorado explorer' },
            { label: 'Controversy', value: 'Environmental opposition to dam' },
            { label: 'Rainbow Bridge', value: 'National Monument accessible by lake' }
        ]
    },
    {
        id: 'lake-mead',
        name: 'Lake Mead',
        countries: [
            { name: 'United States', code: 'US' }
        ],
        continent: 'North America',
        waterType: 'freshwater',
        lakeType: 'Artificial (Reservoir)',
        surfaceArea: 640,
        maxDepth: 162,
        avgDepth: 55,
        volume: 35,
        elevation: 372,
        coordinates: [36.15, -114.4],
        defaultZoom: 9,
        image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lake Mead' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-114.8, 36.3], [-114.3, 36.4], [-113.9, 36.2],
                    [-114.0, 35.95], [-114.5, 35.95], [-114.75, 36.1], [-114.8, 36.3]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Colorado River', length: 2330, coordinates: [[-113.95, 36.2], [-114.1, 36.15], [-114.3, 36.1]] },
            { name: 'Virgin River', length: 320, coordinates: [[-114.3, 36.45], [-114.35, 36.38], [-114.4, 36.3]] },
            { name: 'Muddy River', length: 65, coordinates: [[-114.55, 36.45], [-114.5, 36.38], [-114.45, 36.32]] }
        ],
        outflowRivers: [
            { name: 'Colorado River (below Hoover Dam)', length: 2330, coordinates: [[-114.74, 36.01], [-114.73, 35.98], [-114.72, 35.95]] }
        ],
        basinArea: 35400,
        islands: [],
        cities: [
            { name: 'Las Vegas', coordinates: [36.1699, -115.1398], country: 'USA', population: 650000 },
            { name: 'Henderson', coordinates: [36.0395, -114.9817], country: 'USA', population: 320000 },
            { name: 'Boulder City', coordinates: [35.9783, -114.8322], country: 'USA', population: 16000 }
        ],
        biodiversity: [
            { label: 'Fish Species', value: 'Striped Bass, Largemouth Bass, Channel Catfish' },
            { label: 'Native Species', value: 'Razorback Sucker (endangered)' },
            { label: 'Desert Bighorn', value: 'Sheep population in surrounding areas' },
            { label: 'Birds', value: 'Bald Eagles, Great Blue Herons' }
        ],
        economicImportance: [
            { label: 'Water Supply', value: 'Las Vegas - 90% of water supply' },
            { label: 'Hydropower', value: 'Hoover Dam - 2,080 MW' },
            { label: 'Recreation', value: 'National Recreation Area' },
            { label: 'Critical Infrastructure', value: 'Supplies 25 million people' }
        ],
        environmentalIssues: [
            { label: 'Megadrought', value: 'Lowest levels since 1937 filling' },
            { label: 'Dead Bodies', value: 'Human remains revealed by low water' },
            { label: 'Bathtub Ring', value: 'White mineral deposits show decline' },
            { label: 'Tier 2 Shortage', value: '2022 declared - water cuts mandatory' }
        ],
        waterDisputes: [
            { label: 'Colorado Compact', value: 'Seven states sharing diminishing water' },
            { label: 'California vs Arizona', value: 'Historical allocation disputes' }
        ],
        historicalImportance: [
            { label: 'Hoover Dam', value: 'Completed 1936 - engineering marvel' },
            { label: 'Named For', value: 'Elwood Mead - Bureau of Reclamation Commissioner' },
            { label: 'First National', value: 'First National Recreation Area (1964)' },
            { label: 'Largest Reservoir', value: 'In US by volume when full' }
        ]
    },
    {
        id: 'lake-nasser',
        name: 'Lake Nasser',
        countries: [
            { name: 'Egypt', code: 'EG' },
            { name: 'Sudan', code: 'SD' }
        ],
        continent: 'Africa',
        waterType: 'freshwater',
        lakeType: 'Artificial (Reservoir)',
        surfaceArea: 5250,
        maxDepth: 180,
        avgDepth: 25,
        volume: 132,
        elevation: 183,
        coordinates: [22.5, 32.0],
        defaultZoom: 7,
        image: 'https://images.unsplash.com/photo-1568322503652-c37cf1ce6fd0?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1568322503652-c37cf1ce6fd0?w=1920',
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Lake Nasser' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [31.5, 24.0], [32.5, 23.8], [33.0, 22.5],
                    [32.5, 21.5], [31.8, 21.8], [31.2, 23.0],
                    [31.3, 23.8], [31.5, 24.0]
                ]]
            }
        },
        inflowRivers: [
            { name: 'Nile River', length: 6650, coordinates: [[32.5, 21.0], [32.3, 21.8], [32.0, 22.5]] }
        ],
        outflowRivers: [
            { name: 'Nile River (below dam)', length: 6650, coordinates: [[32.9, 23.97], [32.85, 24.02], [32.8, 24.1]] }
        ],
        basinArea: 3000000,
        islands: [
            { name: 'Numerous islands', coordinates: [22.5, 32.0], area: 'Various', description: 'Islands shift with water levels' }
        ],
        cities: [
            { name: 'Aswan', coordinates: [24.0889, 32.8998], country: 'Egypt', population: 290000 },
            { name: 'Abu Simbel', coordinates: [22.3372, 31.6258], country: 'Egypt', population: 3000 },
            { name: 'Wadi Halfa', coordinates: [21.8, 31.35], country: 'Sudan', population: 15000 }
        ],
        biodiversity: [
            { label: 'Nile Perch', value: 'Major species - very large (up to 200kg)' },
            { label: 'Tilapia', value: 'Important food fish' },
            { label: 'Crocodiles', value: 'Nile crocodile population' },
            { label: 'Birds', value: 'Migratory waterfowl stopover' }
        ],
        economicImportance: [
            { label: 'Hydropower', value: 'Aswan High Dam - 2,100 MW' },
            { label: 'Irrigation', value: 'Year-round irrigation for Egypt' },
            { label: 'Fishing', value: 'Major freshwater fishery' },
            { label: 'Tourism', value: 'Abu Simbel temples, cruises' }
        ],
        environmentalIssues: [
            { label: 'Evaporation', value: '10-16 km³/year lost to evaporation' },
            { label: 'Sedimentation', value: 'Nile silt no longer reaches delta' },
            { label: 'Salt Intrusion', value: 'Mediterranean entering delta' },
            { label: 'Schistosomiasis', value: 'Snail-borne disease increased' }
        ],
        waterDisputes: [
            { label: 'GERD', value: 'Ethiopian dam - major tension with Egypt' },
            { label: 'Nile Treaties', value: '1959 Egypt-Sudan agreement' }
        ],
        historicalImportance: [
            { label: 'Abu Simbel', value: 'Temples relocated 1964-1968 UNESCO' },
            { label: 'Aswan High Dam', value: 'Completed 1970' },
            { label: 'Named For', value: 'Gamal Abdel Nasser - Egyptian president' },
            { label: 'Nubian Displacement', value: '100,000 Nubians relocated' }
        ]
    }
];
