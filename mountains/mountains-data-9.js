// mountains-data-9.js - Mountains 81-90 (European & Iconic Peaks)
// Part A: Mountains 81-84

const MOUNTAINS_DATA_9_PART_A = [
    // 81. Gran Paradiso
    {
        id: 'gran-paradiso',
        name: 'Gran Paradiso',
        localNames: [
            { language: 'Italian', name: 'Gran Paradiso' },
            { language: 'French', name: 'Grand Paradis' }
        ],
        countries: [
            { name: 'Italy', code: 'IT' }
        ],
        continent: 'Europe',
        mountainRange: 'Alps',
        subRange: 'Graian Alps',
        elevation: 4061,
        prominence: 1893,
        isolation: 45,
        coordinates: [45.5181, 7.2664],
        defaultZoom: 12,
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80',
        
        formation: {
            type: 'Fold Mountain / Crystalline Massif',
            age: '50-100 million years',
            tectonicPlates: ['African Plate', 'Eurasian Plate'],
            process: 'Formed during Alpine orogeny when African and Eurasian plates collided. Composed of gneiss and schist pushed upward. Glacial erosion carved current form. Only 4000m peak entirely within Italy.'
        },
        
        climbing: {
            firstAscent: {
                date: 'September 4, 1860',
                climbers: ['John Jeremy Cowell', 'William Dundas', 'Michel Payot', 'Jean Tairraz'],
                route: 'Northwest Face',
                expedition: 'British climbers with French guides from Chamonix.'
            },
            totalAscents: 5000,
            fatalities: 40,
            successRate: '75%',
            bestSeason: 'June to September',
            difficulty: 'PD (Peu Difficile)',
            routes: [
                { name: 'Normal Route (Northwest)', country: 'Italy', difficulty: 'PD', description: 'Via Vittorio Emanuele hut, glacier and scrambling, most popular' },
                { name: 'Via Normale from Chabod', country: 'Italy', difficulty: 'PD', description: 'Alternative from Chabod hut, joins normal route' },
                { name: 'North Face', country: 'Italy', difficulty: 'D', description: 'Steeper ice route, more technical' },
                { name: 'East Ridge', country: 'Italy', difficulty: 'AD', description: 'Longer ridge traverse' }
            ]
        },
        
        climate: {
            summitTemperature: '-10°C average',
            winterLow: '-30°C',
            summerHigh: '0°C',
            snowfall: 'Heavy winter snowfall, glaciers maintained',
            winds: 'Can be severe on exposed ridges',
            deathZone: 'Not applicable'
        },
        
        glaciers: [
            { name: 'Ghiacciaio del Gran Paradiso', length: '3 km', description: 'Main summit glacier on northwest side' },
            { name: 'Ghiacciaio di Laveciau', length: '2 km', description: 'North side glacier' },
            { name: 'Ghiacciaio di Montandayné', length: '2 km', description: 'East side glacier' }
        ],
        
        baseCamps: [
            { name: 'Rifugio Vittorio Emanuele II', elevation: 2732, country: 'Italy', coordinates: [45.5167, 7.2500] },
            { name: 'Rifugio Chabod', elevation: 2750, country: 'Italy', coordinates: [45.5250, 7.2833] },
            { name: 'Rifugio Vittorio Sella', elevation: 2584, country: 'Italy', coordinates: [45.5083, 7.3167] },
            { name: 'Pont', elevation: 1960, country: 'Italy', coordinates: [45.5167, 7.2167] }
        ],
        
        nearbyPeaks: [
            { name: 'Tresenta', elevation: 3609, coordinates: [45.5167, 7.2500] },
            { name: 'Ciarforon', elevation: 3642, coordinates: [45.5000, 7.2333] },
            { name: 'Becca di Monciair', elevation: 3544, coordinates: [45.5083, 7.2667] },
            { name: 'Herbetet', elevation: 3778, coordinates: [45.5333, 7.2667] }
        ],
        
        nearbyCities: [
            { name: 'Aosta', coordinates: [45.7372, 7.3153], country: 'Italy', population: 34000 },
            { name: 'Cogne', coordinates: [45.6081, 7.3544], country: 'Italy', population: 1400 },
            { name: 'Valsavarenche', coordinates: [45.5667, 7.2167], country: 'Italy', population: 180 },
            { name: 'Turin', coordinates: [45.0703, 7.6869], country: 'Italy', population: 870000 }
        ],
        
        flora: ['Edelweiss', 'Alpine Rose', 'Gentian', 'Glacier Buttercup', 'Saxifrage', 'Larch Forest'],
        fauna: ['Alpine Ibex', 'Chamois', 'Golden Eagle', 'Lammergeier', 'Marmot', 'Ermine', 'Ptarmigan'],
        
        economicImportance: [
            { label: 'Only Italian 4000er', value: 'Only 4000m peak entirely in Italy draws national pride' },
            { label: 'National Park Tourism', value: 'Gran Paradiso NP attracts 2 million visitors yearly' },
            { label: 'Mountaineering', value: 'Popular first 4000m peak for Italian climbers' },
            { label: 'Wildlife Viewing', value: 'Best place in Alps to see ibex' }
        ],
        
        environmentalIssues: [
            { label: 'Glacial Retreat', value: 'Glaciers shrinking significantly' },
            { label: 'Climate Change', value: 'Routes becoming more dangerous due to warming' },
            { label: 'Tourism Pressure', value: 'Popular routes showing wear' }
        ],
        
        conservation: [
            { label: 'Gran Paradiso National Park', value: 'Italys first national park, established 1922' },
            { label: 'Ibex Protection', value: 'Park saved Alpine ibex from extinction' },
            { label: 'Royal Hunting Reserve', value: 'Former royal hunting ground became park' },
            { label: 'Research Programs', value: 'Long-term wildlife and climate monitoring' }
        ],
        
        historicalImportance: [
            { label: 'Royal Connection', value: 'King Vittorio Emanuele II protected ibex here' },
            { label: 'First Italian National Park', value: 'Became first Italian NP in 1922' },
            { label: 'Ibex Salvation', value: 'Only place ibex survived in 19th century' },
            { label: 'Mountaineering History', value: 'First ascent was major Victorian achievement' }
        ],
        
        records: [
            { record: 'Only Italian 4000er', value: 'Only peak over 4000m entirely within Italy' },
            { record: 'Ibex Sanctuary', value: 'Saved Alpine ibex from extinction' },
            { record: 'First Italian NP', value: 'Italy\'s first national park' },
            { record: 'Easiest 4000er', value: 'Considered most accessible 4000m Alpine peak' }
        ],
        
        deathZone: false,
        technicalClimbing: true,
        permitRequired: false,
        sevenSummit: false,
        eightThousander: false
    },

    // 82. Grossglockner
    {
        id: 'grossglockner',
        name: 'Grossglockner',
        localNames: [
            { language: 'German', name: 'Großglockner' },
            { language: 'Slovene', name: 'Veliki Klek' }
        ],
        countries: [
            { name: 'Austria', code: 'AT' }
        ],
        continent: 'Europe',
        mountainRange: 'Alps',
        subRange: 'Hohe Tauern',
        elevation: 3798,
        prominence: 2428,
        isolation: 163,
        coordinates: [47.0742, 12.6947],
        defaultZoom: 12,
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
        
        formation: {
            type: 'Fold Mountain / Crystalline Massif',
            age: '30-50 million years',
            tectonicPlates: ['African Plate', 'Eurasian Plate'],
            process: 'Part of Tauern Window, geological exposure of ancient rock. Composed of calcareous mica schist and serpentinite. Dramatic pyramidal peak carved by glacial erosion. Largest glacier in Eastern Alps on its flanks.'
        },
        
        climbing: {
            firstAscent: {
                date: 'July 28, 1800',
                climbers: ['Martin Reicher', 'Sepp Orter', 'Scientific expedition'],
                route: 'Kleinglockner to Grossglockner',
                expedition: 'Prince-Bishop Franz Xaver von Salm-Reifferscheid sponsored scientific expedition.'
            },
            totalAscents: 5000,
            fatalities: 30,
            successRate: '70%',
            bestSeason: 'June to September',
            difficulty: 'PD+ to AD',
            routes: [
                { name: 'Normal Route (Stüdlgrat)', country: 'Austria', difficulty: 'PD+', description: 'Via Erzherzog-Johann-Hütte, rock ridge with fixed ropes' },
                { name: 'Pallavicinirinne', country: 'Austria', difficulty: 'AD', description: 'Steep couloir, classic ice route' },
                { name: 'North Face', country: 'Austria', difficulty: 'D', description: 'Serious alpine route' },
                { name: 'Hofmannskees Route', country: 'Austria', difficulty: 'PD', description: 'Glacier approach from north' }
            ]
        },
        
        climate: {
            summitTemperature: '-8°C average',
            winterLow: '-30°C',
            summerHigh: '5°C',
            snowfall: 'Heavy snowfall, extensive glaciation',
            winds: 'Can be severe, exposed summit',
            deathZone: 'Not applicable'
        },
        
        glaciers: [
            { name: 'Pasterze Glacier', length: '8 km', description: 'Longest glacier in Eastern Alps, rapidly retreating' },
            { name: 'Hofmannskees', length: '2 km', description: 'North side glacier' },
            { name: 'Ködnitzkees', length: '2 km', description: 'South side glacier' },
            { name: 'Teischnitzkees', length: '1.5 km', description: 'East side glacier' }
        ],
        
        baseCamps: [
            { name: 'Erzherzog-Johann-Hütte', elevation: 3454, country: 'Austria', coordinates: [47.0778, 12.6944] },
            { name: 'Stüdlhütte', elevation: 2802, country: 'Austria', coordinates: [47.0833, 12.7000] },
            { name: 'Salmhütte', elevation: 2644, country: 'Austria', coordinates: [47.0667, 12.7167] },
            { name: 'Franz-Josefs-Höhe', elevation: 2369, country: 'Austria', coordinates: [47.0775, 12.7519] }
        ],
        
        nearbyPeaks: [
            { name: 'Kleinglockner', elevation: 3770, coordinates: [47.0750, 12.6958] },
            { name: 'Glocknerwand', elevation: 3722, coordinates: [47.0833, 12.6917] },
            { name: 'Johannisberg', elevation: 3453, coordinates: [47.0917, 12.7167] },
            { name: 'Grossvenediger', elevation: 3657, coordinates: [47.1092, 12.3458] }
        ],
        
        nearbyCities: [
            { name: 'Heiligenblut', coordinates: [47.0406, 12.8436], country: 'Austria', population: 1000 },
            { name: 'Kals am Großglockner', coordinates: [47.0000, 12.6333], country: 'Austria', population: 1200 },
            { name: 'Lienz', coordinates: [46.8297, 12.7694], country: 'Austria', population: 12000 },
            { name: 'Salzburg', coordinates: [47.8095, 13.0550], country: 'Austria', population: 155000 }
        ],
        
        flora: ['Alpine Rose', 'Edelweiss', 'Gentian', 'Glacier Buttercup', 'Dwarf Willow', 'Mosses'],
        fauna: ['Alpine Ibex', 'Chamois', 'Marmot', 'Golden Eagle', 'Bearded Vulture', 'Snow Vole'],
        
        economicImportance: [
            { label: 'Austrian Symbol', value: 'National symbol, featured on coins and stamps' },
            { label: 'Grossglockner Road', value: 'Famous High Alpine Road draws 1 million visitors' },
            { label: 'Mountaineering', value: 'Most popular climbing destination in Austria' },
            { label: 'Glacier Tourism', value: 'Pasterze Glacier easily accessible for tourists' }
        ],
        
        environmentalIssues: [
            { label: 'Glacier Collapse', value: 'Pasterze losing 50m length per year' },
            { label: 'Permafrost Thaw', value: 'Mountain infrastructure threatened' },
            { label: 'Tourism Impact', value: 'Road and facilities affect environment' },
            { label: 'Climate Change', value: 'Dramatic visible changes in glacier' }
        ],
        
        conservation: [
            { label: 'Hohe Tauern National Park', value: 'Largest national park in Alps' },
            { label: 'Glacier Monitoring', value: 'Long-term research on Pasterze since 1879' },
            { label: 'Wildlife Protection', value: 'Ibex and vulture conservation programs' },
            { label: 'UNESCO Consideration', value: 'Part of proposed World Heritage Site' }
        ],
        
        historicalImportance: [
            { label: 'Early First Ascent', value: 'One of first major Alpine peaks climbed (1800)' },
            { label: 'Scientific Expedition', value: 'First ascent was scientific endeavor' },
            { label: 'Franz Josef Visit', value: 'Emperor visited in 1856, road named for him' },
            { label: 'Austrian Identity', value: 'Symbol of Austrian alpine heritage' }
        ],
        
        records: [
            { record: 'Highest Austria', value: 'Highest peak in Austria at 3,798m' },
            { record: 'Largest Eastern Alps Glacier', value: 'Pasterze is longest glacier in Eastern Alps' },
            { record: 'Most Climbed Austria', value: 'Most frequently climbed Austrian peak' },
            { record: 'Early First Ascent', value: 'Among first major Alpine peaks climbed' }
        ],
        
        deathZone: false,
        technicalClimbing: true,
        permitRequired: false,
        sevenSummit: false,
        eightThousander: false
    },

    // 83. Zugspitze
    {
        id: 'zugspitze',
        name: 'Zugspitze',
        localNames: [
            { language: 'German', name: 'Zugspitze' }
        ],
        countries: [
            { name: 'Germany', code: 'DE' },
            { name: 'Austria', code: 'AT' }
        ],
        continent: 'Europe',
        mountainRange: 'Alps',
        subRange: 'Wetterstein Mountains',
        elevation: 2962,
        prominence: 1746,
        isolation: 24,
        coordinates: [47.4211, 10.9853],
        defaultZoom: 13,
        image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
        
        formation: {
            type: 'Fold Mountain / Limestone Peak',
            age: '200-250 million years (rock)',
            tectonicPlates: ['African Plate', 'Eurasian Plate'],
            process: 'Composed of Wetterstein limestone formed in Triassic seas. Uplifted during Alpine orogeny. Dramatic north face carved by glacial erosion. Thin summit ridge forms Germany-Austria border.'
        },
        
        climbing: {
            firstAscent: {
                date: 'August 27, 1820',
                climbers: ['Josef Naus', 'Maier', 'Johann Georg Tauschl'],
                route: 'Via Reintal',
                expedition: 'Bavarian survey team during mapping expedition.'
            },
            totalAscents: 500000,
            fatalities: 20,
            successRate: '99%',
            bestSeason: 'Year-round (infrastructure)',
            difficulty: 'Easy (via cable car) to AD (technical routes)',
            routes: [
                { name: 'Höllental Route', country: 'Germany', difficulty: 'Via Ferrata', description: 'Most popular climbing route, via ferrata through gorge' },
                { name: 'Reintal Route', country: 'Germany', difficulty: 'Hiking', description: 'Original route, long valley approach, no technical difficulty' },
                { name: 'Stopselzieher Route', country: 'Austria', difficulty: 'Via Ferrata', description: 'From Austrian side via Ehrwald' },
                { name: 'Jubiläumsgrat', country: 'Germany', difficulty: 'AD', description: 'Serious ridge traverse, exposed, for experts' }
            ]
        },
        
        climate: {
            summitTemperature: '-5°C average',
            winterLow: '-25°C',
            summerHigh: '8°C',
            snowfall: 'Heavy snowfall, ski glacier',
            winds: 'Can be severe',
            deathZone: 'Not applicable'
        },
        
        glaciers: [
            { name: 'Schneeferner', length: '0.5 km', description: 'Germany\'s largest remaining glacier, shrinking rapidly' },
            { name: 'Höllentalferner', length: '0.3 km', description: 'Small glacier in Höllental' }
        ],
        
        baseCamps: [
            { name: 'Garmisch-Partenkirchen', elevation: 708, country: 'Germany', coordinates: [47.5000, 11.0833] },
            { name: 'Zugspitzplatt', elevation: 2600, country: 'Germany', coordinates: [47.4167, 10.9833] },
            { name: 'Höllentalangerhütte', elevation: 1381, country: 'Germany', coordinates: [47.4333, 11.0500] },
            { name: 'Wiener Neustädter Hütte', elevation: 2213, country: 'Austria', coordinates: [47.4167, 10.9667] }
        ],
        
        nearbyPeaks: [
            { name: 'Schneefernerkopf', elevation: 2874, coordinates: [47.4167, 10.9667] },
            { name: 'Wetterspitze', elevation: 2747, coordinates: [47.4000, 10.9833] },
            { name: 'Hochwanner', elevation: 2744, coordinates: [47.3833, 11.0667] },
            { name: 'Alpspitze', elevation: 2628, coordinates: [47.4333, 11.0667] }
        ],
        
        nearbyCities: [
            { name: 'Garmisch-Partenkirchen', coordinates: [47.5000, 11.0833], country: 'Germany', population: 26000 },
            { name: 'Ehrwald', coordinates: [47.4000, 10.9167], country: 'Austria', population: 2700 },
            { name: 'Innsbruck', coordinates: [47.2692, 11.4041], country: 'Austria', population: 130000 },
            { name: 'Munich', coordinates: [48.1351, 11.5820], country: 'Germany', population: 1500000 }
        ],
        
        flora: ['Alpine Flowers', 'Edelweiss', 'Gentian', 'Dwarf Pine', 'Alpine Grasses', 'Lichen'],
        fauna: ['Chamois', 'Marmot', 'Alpine Chough', 'Golden Eagle', 'Snow Finch', 'Mountain Hare'],
        
        economicImportance: [
            { label: 'Major Tourism', value: 'Over 500,000 visitors annually via cable cars' },
            { label: 'Ski Resort', value: 'Germanys highest ski area' },
            { label: 'National Symbol', value: 'Symbol of German Alps' },
            { label: 'Cross-Border', value: 'Unique German-Austrian summit infrastructure' }
        ],
        
        environmentalIssues: [
            { label: 'Glacier Death', value: 'Germany\'s glaciers will disappear within decades' },
            { label: 'Infrastructure Impact', value: 'Extensive development on summit' },
            { label: 'Overtourism', value: 'Half million visitors impacts environment' },
            { label: 'Climate Change', value: 'Dramatic visible changes to landscape' }
        ],
        
        conservation: [
            { label: 'Nature Reserve', value: 'Surrounding area protected' },
            { label: 'Glacier Monitoring', value: 'Intensive research on dying glaciers' },
            { label: 'Access Management', value: 'Infrastructure concentrates impact' },
            { label: 'Educational Programs', value: 'Climate change education on summit' }
        ],
        
        historicalImportance: [
            { label: 'Survey First Ascent', value: 'Climbed for mapping purposes 1820' },
            { label: 'Cable Car Pioneer', value: 'First cable car 1926, engineering marvel' },
            { label: 'Winter Olympics', value: 'Garmisch hosted 1936 Winter Olympics' },
            { label: 'Border Peak', value: 'Summit sits exactly on German-Austrian border' }
        ],
        
        records: [
            { record: 'Highest Germany', value: 'Highest peak in Germany at 2,962m' },
            { record: 'Last German Glaciers', value: 'Home to Germany\'s last remaining glaciers' },
            { record: 'Most Accessible', value: 'Three cable cars reach near summit' },
            { record: 'Border Summit', value: 'Only Alpine peak with two country summit stations' }
        ],
        
        deathZone: false,
        technicalClimbing: false,
        permitRequired: false,
        sevenSummit: false,
        eightThousander: false
    },

    // 84. Mount Olympus
    {
        id: 'mount-olympus',
        name: 'Mount Olympus',
        localNames: [
            { language: 'Greek', name: 'Όλυμπος (Olympos)' }
        ],
        countries: [
            { name: 'Greece', code: 'GR' }
        ],
        continent: 'Europe',
        mountainRange: 'Olympus Range',
        subRange: 'Thessaly-Macedonia Border',
        elevation: 2917,
        prominence: 2355,
        isolation: 378,
        coordinates: [40.0859, 22.3583],
        defaultZoom: 12,
        image: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=1920&q=80',
        
        formation: {
            type: 'Fold Mountain / Thrust Nappe',
            age: '200 million years (rock), 40 million years (uplift)',
            tectonicPlates: ['African Plate', 'Eurasian Plate'],
            process: 'Formed by collision of African and Eurasian plates creating Hellenide orogeny. Composed of limestone and dolomite. Dramatic uplift created imposing massif rising sharply from Aegean coast. Multiple peaks along summit ridge.'
        },
        
        climbing: {
            firstAscent: {
                date: 'August 2, 1913',
                climbers: ['Christos Kakkalos', 'Frédéric Boissonnas', 'Daniel Baud-Bovy'],
                route: 'Via Mytikas',
                expedition: 'Greek guide with Swiss climbers during exploration of massif.'
            },
            totalAscents: 20000,
            fatalities: 25,
            successRate: '85%',
            bestSeason: 'May to October',
            difficulty: 'Class 3 scrambling',
            routes: [
                { name: 'Mytikas via Kakoskala', country: 'Greece', difficulty: 'Class 3', description: 'Standard route, exposed scrambling to highest point' },
                { name: 'Mytikas via Louki Couloir', country: 'Greece', difficulty: 'Class 4', description: 'Alternative gully route, steeper' },
                { name: 'Stefani (Throne of Zeus)', country: 'Greece', difficulty: 'Class 5', description: 'Technical rock climbing to second summit' },
                { name: 'Skolio', country: 'Greece', difficulty: 'Hiking', description: 'Third highest, non-technical alternative' }
            ]
        },
        
        climate: {
            summitTemperature: '0°C average',
            winterLow: '-20°C',
            summerHigh: '15°C',
            snowfall: 'Heavy winter snow, may persist into June',
            winds: 'Can be severe, sudden storms',
            deathZone: 'Not applicable'
        },
        
        glaciers: [
            { name: 'No permanent glaciers', length: 'N/A', description: 'Mediterranean climate, seasonal snow only' }
        ],
        
        baseCamps: [
            { name: 'Prionia', elevation: 1100, country: 'Greece', coordinates: [40.0833, 22.4167] },
            { name: 'Refuge A (Spilios Agapitos)', elevation: 2100, country: 'Greece', coordinates: [40.0833, 22.3833] },
            { name: 'Refuge C (Giosos Apostolidis)', elevation: 2697, country: 'Greece', coordinates: [40.0750, 22.3500] },
            { name: 'Litochoro', elevation: 300, country: 'Greece', coordinates: [40.1028, 22.5028] }
        ],
        
        nearbyPeaks: [
            { name: 'Stefani (Throne of Zeus)', elevation: 2909, coordinates: [40.0850, 22.3550] },
            { name: 'Skolio', elevation: 2911, coordinates: [40.0833, 22.3500] },
            { name: 'Skala', elevation: 2866, coordinates: [40.0833, 22.3583] },
            { name: 'Profitis Ilias', elevation: 2803, coordinates: [40.0917, 22.3500] }
        ],
        
        nearbyCities: [
            { name: 'Litochoro', coordinates: [40.1028, 22.5028], country: 'Greece', population: 7000 },
            { name: 'Katerini', coordinates: [40.2728, 22.5028], country: 'Greece', population: 60000 },
            { name: 'Thessaloniki', coordinates: [40.6401, 22.9444], country: 'Greece', population: 325000 },
            { name: 'Larissa', coordinates: [39.6372, 22.4200], country: 'Greece', population: 145000 }
        ],
        
        flora: ['Beech Forest', 'Black Pine', 'Bosnian Pine', 'Endemic Flowers', 'Jankaea heldreichii (endemic)', 'Alpine Meadows'],
        fauna: ['Chamois (Balkan)', 'Roe Deer', 'Wild Boar', 'Wolf', 'Golden Eagle', 'Peregrine Falcon', 'Apollo Butterfly'],
        
        economicImportance: [
            { label: 'Mythological Tourism', value: 'Home of Greek gods draws global visitors' },
            { label: 'Trekking Destination', value: 'Most popular mountain in Greece' },
            { label: 'Cultural Icon', value: 'Symbol of Greece internationally' },
            { label: 'Litochoro Economy', value: 'Mountain supports entire town economy' }
        ],
        
        environmentalIssues: [
            { label: 'Fire Risk', value: 'Mediterranean climate creates fire danger' },
            { label: 'Trail Erosion', value: 'Popular routes showing wear' },
            { label: 'Climate Change', value: 'Snow cover decreasing over time' },
            { label: 'Invasive Species', value: 'Non-native plants spreading' }
        ],
        
        conservation: [
            { label: 'National Park', value: 'First Greek national park, established 1938' },
            { label: 'UNESCO Biosphere', value: 'Biosphere Reserve since 1981' },
            { label: 'Endemic Species', value: '23 endemic plant species protected' },
            { label: 'Archaeological Sites', value: 'Ancient sites within park protected' }
        ],
        
        historicalImportance: [
            { label: 'Home of Gods', value: 'Ancient Greeks believed gods lived on summit' },
            { label: 'Zeus Throne', value: 'Peak Stefani known as Throne of Zeus' },
            { label: 'Olympic Games', value: 'Named inspired Olympic Games name' },
            { label: 'Late First Ascent', value: 'Summit not reached until 1913' }
        ],
        
        records: [
            { record: 'Highest Greece', value: 'Highest peak in Greece at 2,917m' },
            { record: 'Mythological Significance', value: 'Most mythologically important mountain in world' },
            { record: 'First Greek National Park', value: 'Greece\'s first national park' },
            { record: 'Endemic Species', value: 'Contains 23 endemic plant species' }
        ],
        
        deathZone: false,
        technicalClimbing: true,
        permitRequired: false,
        sevenSummit: false,
        eightThousander: false
    }
];
// mountains-data-9.js - Part B: Mountains 85-87

const MOUNTAINS_DATA_9_PART_B = [
    // 85. Triglav
    {
        id: 'triglav',
        name: 'Triglav',
        localNames: [
            { language: 'Slovene', name: 'Triglav' },
            { language: 'German', name: 'Terglou' },
            { language: 'Italian', name: 'Tricorno' }
        ],
        countries: [
            { name: 'Slovenia', code: 'SI' }
        ],
        continent: 'Europe',
        mountainRange: 'Julian Alps',
        subRange: 'Eastern Julian Alps',
        elevation: 2864,
        prominence: 2052,
        isolation: 71,
        coordinates: [46.3786, 13.8364],
        defaultZoom: 13,
        image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=80',
        
        formation: {
            type: 'Fold Mountain / Limestone Peak',
            age: '200 million years (rock)',
            tectonicPlates: ['African Plate', 'Eurasian Plate'],
            process: 'Composed of Triassic Dachstein limestone formed in ancient Tethys Sea. Uplifted during Alpine orogeny. Distinctive three-headed profile carved by glacial erosion. Name means "three heads" in Slavic.'
        },
        
        climbing: {
            firstAscent: {
                date: 'August 26, 1778',
                climbers: ['Lovrenc Willomitzer', 'Štefan Rožič', 'Luka Korošec', 'Matija Kos'],
                route: 'From Bohinj side',
                expedition: 'Local Slovenians climbed for scientific expedition seeking minerals.'
            },
            totalAscents: 30000,
            fatalities: 20,
            successRate: '90%',
            bestSeason: 'June to September',
            difficulty: 'Via Ferrata to Class 3',
            routes: [
                { name: 'Normal Route from Kredarica', country: 'Slovenia', difficulty: 'Via Ferrata', description: 'Most popular, via highest hut, some via ferrata sections' },
                { name: 'Tominšek Route', country: 'Slovenia', difficulty: 'Via Ferrata', description: 'Classic route via Triglavski dom' },
                { name: 'Prag Route', country: 'Slovenia', difficulty: 'Class 3', description: 'More challenging alternative' },
                { name: 'North Face', country: 'Slovenia', difficulty: 'TD', description: '1000m wall, serious alpine route' }
            ]
        },
        
        climate: {
            summitTemperature: '-3°C average',
            winterLow: '-25°C',
            summerHigh: '10°C',
            snowfall: 'Heavy winter snow, summer climbing snow-free',
            winds: 'Can be severe, exposed summit',
            deathZone: 'Not applicable'
        },
        
        glaciers: [
            { name: 'Triglav Glacier (remnant)', length: '0.05 km', description: 'Once 40 hectares, now nearly gone, smallest glacier in Alps' }
        ],
        
        baseCamps: [
            { name: 'Triglavski dom na Kredarici', elevation: 2515, country: 'Slovenia', coordinates: [46.3750, 13.8500] },
            { name: 'Aljažev dom v Vratih', elevation: 1015, country: 'Slovenia', coordinates: [46.4167, 13.8333] },
            { name: 'Dom Planika pod Triglavom', elevation: 2401, country: 'Slovenia', coordinates: [46.3750, 13.8333] },
            { name: 'Koča na Dolicu', elevation: 1915, country: 'Slovenia', coordinates: [46.3667, 13.8000] }
        ],
        
        nearbyPeaks: [
            { name: 'Mali Triglav', elevation: 2725, coordinates: [46.3800, 13.8417] },
            { name: 'Begunjski vrh', elevation: 2461, coordinates: [46.3917, 13.8167] },
            { name: 'Cmir', elevation: 2393, coordinates: [46.3833, 13.8167] },
            { name: 'Kanjavec', elevation: 2568, coordinates: [46.3583, 13.7833] }
        ],
        
        nearbyCities: [
            { name: 'Kranjska Gora', coordinates: [46.4844, 13.7856], country: 'Slovenia', population: 1500 },
            { name: 'Bled', coordinates: [46.3683, 14.1147], country: 'Slovenia', population: 8000 },
            { name: 'Bovec', coordinates: [46.3381, 13.5517], country: 'Slovenia', population: 1700 },
            { name: 'Ljubljana', coordinates: [46.0569, 14.5058], country: 'Slovenia', population: 285000 }
        ],
        
        flora: ['Edelweiss', 'Julian Poppy', 'Triglav Rose', 'Zois Bellflower (endemic)', 'Alpine Aster', 'Dwarf Pine'],
        fauna: ['Alpine Ibex (reintroduced)', 'Chamois', 'Golden Eagle', 'Marmot', 'Lynx', 'Brown Bear'],
        
        economicImportance: [
            { label: 'National Symbol', value: 'Appears on flag, coat of arms, and coins' },
            { label: 'Mandatory Climb', value: 'Every Slovenian expected to climb it once' },
            { label: 'Tourism Driver', value: 'Julian Alps tourism centered on Triglav' },
            { label: 'National Identity', value: 'Central to Slovenian cultural identity' }
        ],
        
        environmentalIssues: [
            { label: 'Glacier Loss', value: 'Triglav Glacier nearly completely melted' },
            { label: 'Overcrowding', value: 'Summer weekends very crowded' },
            { label: 'Climate Change', value: 'Visible impacts on mountain environment' },
            { label: 'Erosion', value: 'Trail damage from heavy use' }
        ],
        
        conservation: [
            { label: 'Triglav National Park', value: 'Only Slovenian national park, covers most of Julian Alps' },
            { label: 'UNESCO Biosphere', value: 'Part of Julian Alps Biosphere Reserve' },
            { label: 'Ibex Reintroduction', value: 'Successful ibex return after extinction' },
            { label: 'Glacier Monitoring', value: 'Long-term study of disappearing glacier' }
        ],
        
        historicalImportance: [
            { label: 'Early First Ascent', value: 'Climbed in 1778, before Mont Blanc' },
            { label: 'Slavic Sacred Mountain', value: 'Pre-Christian Slavs considered it sacred' },
            { label: 'Three-Headed God', value: 'May be named for three-headed deity' },
            { label: 'National Symbol', value: 'Central to independence movement' }
        ],
        
        records: [
            { record: 'Highest Slovenia', value: 'Highest peak in Slovenia at 2,864m' },
            { record: 'National Symbol', value: 'Only national summit appearing on national flag' },
            { record: 'Smallest Glacier', value: 'Has smallest (nearly extinct) glacier in Alps' },
            { record: 'Early Ascent', value: 'First ascent before Mont Blanc' }
        ],
        
        deathZone: false,
        technicalClimbing: true,
        permitRequired: false,
        sevenSummit: false,
        eightThousander: false
    },

    // 86. Gerlachovský štít
    {
        id: 'gerlachovsky-stit',
        name: 'Gerlachovský štít',
        localNames: [
            { language: 'Slovak', name: 'Gerlachovský štít' },
            { language: 'German', name: 'Gerlsdorfer Spitze' },
            { language: 'Hungarian', name: 'Gerlachfalvi-csúcs' },
            { language: 'Polish', name: 'Gerlach' }
        ],
        countries: [
            { name: 'Slovakia', code: 'SK' }
        ],
        continent: 'Europe',
        mountainRange: 'Carpathians',
        subRange: 'High Tatras',
        elevation: 2655,
        prominence: 2351,
        isolation: 279,
        coordinates: [49.1642, 20.1342],
        defaultZoom: 13,
        image: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1920&q=80',
        
        formation: {
            type: 'Fold Mountain / Granite Peak',
            age: '350 million years (rock)',
            tectonicPlates: ['Eurasian Plate'],
            process: 'Part of Tatra granite core formed in Carboniferous period. Uplifted during Alpine orogeny. Glacial erosion created dramatic cirques and sharp ridges. Highest point in entire Carpathian mountain chain.'
        },
        
        climbing: {
            firstAscent: {
                date: 'August 5, 1834',
                climbers: ['Ján Still', 'A. Fábry', 'others'],
                route: 'From Velická dolina',
                expedition: 'Local Slovaks during era of early Tatra exploration.'
            },
            totalAscents: 5000,
            fatalities: 15,
            successRate: '85%',
            bestSeason: 'June to September',
            difficulty: 'Class 3 (with guide)',
            routes: [
                { name: 'Normal Route (with guide)', country: 'Slovakia', difficulty: 'Class 3', description: 'Mandatory guide, via Batizovská and Velická valley' },
                { name: 'Gerlach Couloir', country: 'Slovakia', difficulty: 'Class 4', description: 'Steeper winter route' },
                { name: 'East Ridge', country: 'Slovakia', difficulty: 'Class 4', description: 'Technical ridge traverse' }
            ]
        },
        
        climate: {
            summitTemperature: '-5°C average',
            winterLow: '-30°C',
            summerHigh: '8°C',
            snowfall: 'Heavy snowfall, lingering into summer',
            winds: 'Often severe, exposed summit',
            deathZone: 'Not applicable'
        },
        
        glaciers: [
            { name: 'No glaciers', length: 'N/A', description: 'Former glacial features, no permanent ice today' }
        ],
        
        baseCamps: [
            { name: 'Sliezsky dom', elevation: 1670, country: 'Slovakia', coordinates: [49.1583, 20.1417] },
            { name: 'Téryho chata', elevation: 2015, country: 'Slovakia', coordinates: [49.1750, 20.1250] },
            { name: 'Zbojnícka chata', elevation: 1960, country: 'Slovakia', coordinates: [49.1833, 20.1167] },
            { name: 'Starý Smokovec', elevation: 1010, country: 'Slovakia', coordinates: [49.1386, 20.2133] }
        ],
        
        nearbyPeaks: [
            { name: 'Lomnický štít', elevation: 2634, coordinates: [49.1953, 20.2131] },
            { name: 'Ľadový štít', elevation: 2627, coordinates: [49.1750, 20.1333] },
            { name: 'Pyšný štít', elevation: 2621, coordinates: [49.1800, 20.1083] },
            { name: 'Končistá', elevation: 2538, coordinates: [49.1608, 20.1275] }
        ],
        
        nearbyCities: [
            { name: 'Poprad', coordinates: [49.0511, 20.2978], country: 'Slovakia', population: 52000 },
            { name: 'Tatranská Lomnica', coordinates: [49.1650, 20.2811], country: 'Slovakia', population: 750 },
            { name: 'Starý Smokovec', coordinates: [49.1386, 20.2133], country: 'Slovakia', population: 500 },
            { name: 'Zakopane', coordinates: [49.2992, 19.9519], country: 'Poland', population: 27000 }
        ],
        
        flora: ['Dwarf Pine', 'Edelweiss', 'Alpine Flowers', 'Tatra Chamomile (endemic)', 'Bilberry', 'Mountain Avens'],
        fauna: ['Tatra Chamois', 'Marmot', 'Golden Eagle', 'Brown Bear', 'Lynx', 'Wolf'],
        
        economicImportance: [
            { label: 'National Pride', value: 'Highest peak in Slovakia and Carpathians' },
            { label: 'Guide Economy', value: 'Mandatory guides create employment' },
            { label: 'Tatra Tourism', value: 'Centerpiece of major Slovak tourism region' },
            { label: 'Mountaineering', value: 'Training ground for Slovak climbers' }
        ],
        
        environmentalIssues: [
            { label: 'Access Restrictions', value: 'Mandatory guide requirement due to accidents' },
            { label: 'Climate Change', value: 'Snow patterns changing' },
            { label: '2004 Windstorm', value: 'Major forest damage still recovering' },
            { label: 'Tourism Pressure', value: 'High visitor numbers impact environment' }
        ],
        
        conservation: [
            { label: 'TANAP', value: 'Tatra National Park, oldest in Slovakia (1949)' },
            { label: 'UNESCO Biosphere', value: 'Part of Tatra Biosphere Reserve' },
            { label: 'Guide Requirements', value: 'Access controlled to protect mountain' },
            { label: 'Chamois Protection', value: 'Endemic Tatra chamois protected' }
        ],
        
        historicalImportance: [
            { label: 'Carpathian Crown', value: 'Highest in entire Carpathian range' },
            { label: 'Slovak Identity', value: 'Symbol of Slovak national pride' },
            { label: 'Named for Village', value: 'Named for Gerlach village (now Gerlachov)' },
            { label: 'Communist Era', value: 'Briefly renamed "Stalin Peak" 1949-1959' }
        ],
        
        records: [
            { record: 'Highest Carpathians', value: 'Highest peak in entire Carpathian range at 2,655m' },
            { record: 'Highest Slovakia', value: 'Highest point in Slovakia' },
            { record: 'Guide Required', value: 'One of few peaks requiring mandatory guide' },
            { record: 'Eastern European Highpoint', value: 'Highest between Alps and Caucasus' }
        ],
        
        deathZone: false,
        technicalClimbing: true,
        permitRequired: true,
        sevenSummit: false,
        eightThousander: false
    },

    // 87. Moldoveanu Peak
    {
        id: 'moldoveanu',
        name: 'Moldoveanu Peak',
        localNames: [
            { language: 'Romanian', name: 'Vârful Moldoveanu' }
        ],
        countries: [
            { name: 'Romania', code: 'RO' }
        ],
        continent: 'Europe',
        mountainRange: 'Carpathians',
        subRange: 'Făgăraș Mountains',
        elevation: 2544,
        prominence: 1709,
        isolation: 180,
        coordinates: [45.6031, 24.7358],
        defaultZoom: 13,
        image: 'https://images.unsplash.com/photo-1458668383970-8ddd3927deed?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1458668383970-8ddd3927deed?w=1920&q=80',
        
        formation: {
            type: 'Fold Mountain / Crystalline Peak',
            age: '300-400 million years (rock)',
            tectonicPlates: ['Eurasian Plate'],
            process: 'Composed of Precambrian crystalline schist. Part of Southern Carpathians formed during Hercynian and later Alpine orogenies. Glacial erosion created cirques and U-shaped valleys. Highest point in Romanian Carpathians.'
        },
        
        climbing: {
            firstAscent: {
                date: '19th century',
                climbers: ['Unknown shepherds'],
                route: 'Various',
                expedition: 'Local shepherds grazed livestock on high pastures for centuries.'
            },
            totalAscents: 15000,
            fatalities: 15,
            successRate: '95%',
            bestSeason: 'June to September',
            difficulty: 'Hiking',
            routes: [
                { name: 'Via Podragu', country: 'Romania', difficulty: 'Hiking', description: 'From Podragu refuge, well-marked trail' },
                { name: 'Ridge Traverse', country: 'Romania', difficulty: 'Hiking', description: 'Along Făgăraș ridge from multiple directions' },
                { name: 'From Victoria', country: 'Romania', difficulty: 'Hiking', description: 'Longer approach from town of Victoria' },
                { name: 'Winter Route', country: 'Romania', difficulty: 'Moderate', description: 'Winter adds snow and ice challenges' }
            ]
        },
        
        climate: {
            summitTemperature: '-2°C average',
            winterLow: '-25°C',
            summerHigh: '12°C',
            snowfall: 'Heavy winter snow, may last into July',
            winds: 'Ridge exposed to strong winds',
            deathZone: 'Not applicable'
        },
        
        glaciers: [
            { name: 'No glaciers', length: 'N/A', description: 'Glacial features present but no active glaciers' }
        ],
        
        baseCamps: [
            { name: 'Refugiul Podragu', elevation: 2136, country: 'Romania', coordinates: [45.6083, 24.7167] },
            { name: 'Cabana Bâlea Lac', elevation: 2034, country: 'Romania', coordinates: [45.6000, 24.6167] },
            { name: 'Cabana Sâmbăta', elevation: 1407, country: 'Romania', coordinates: [45.6667, 24.8000] },
            { name: 'Victoria', elevation: 550, country: 'Romania', coordinates: [45.7167, 24.7000] }
        ],
        
        nearbyPeaks: [
            { name: 'Negoiu', elevation: 2535, coordinates: [45.5583, 24.5583] },
            { name: 'Vișteea Mare', elevation: 2527, coordinates: [45.5917, 24.7667] },
            { name: 'Lespezi', elevation: 2522, coordinates: [45.5667, 24.6167] },
            { name: 'Viștea Mare', elevation: 2527, coordinates: [45.5917, 24.7667] }
        ],
        
        nearbyCities: [
            { name: 'Victoria', coordinates: [45.7167, 24.7000], country: 'Romania', population: 7500 },
            { name: 'Făgăraș', coordinates: [45.8500, 24.9833], country: 'Romania', population: 30000 },
            { name: 'Sibiu', coordinates: [45.7928, 24.1522], country: 'Romania', population: 147000 },
            { name: 'Brașov', coordinates: [45.6427, 25.5887], country: 'Romania', population: 275000 }
        ],
        
        flora: ['Alpine Meadows', 'Dwarf Pine', 'Edelweiss', 'Rhododendron', 'Bilberry', 'Mountain Avens'],
        fauna: ['Brown Bear', 'Wolf', 'Lynx', 'Chamois', 'Golden Eagle', 'Capercaillie', 'Marmot'],
        
        economicImportance: [
            { label: 'National Highpoint', value: 'Highest in Romania draws patriotic climbers' },
            { label: 'Făgăraș Tourism', value: 'Part of popular ridge trek' },
            { label: 'Transfăgărășan Road', value: 'Famous road provides access to area' },
            { label: 'Shepherd Heritage', value: 'Traditional pastoral culture continues' }
        ],
        
        environmentalIssues: [
            { label: 'Overgrazing', value: 'Sheep grazing impacts alpine meadows' },
            { label: 'Trail Erosion', value: 'Popular routes showing wear' },
            { label: 'Climate Change', value: 'Snow patterns changing' },
            { label: 'Development Pressure', value: 'Infrastructure expansion threatens wilderness' }
        ],
        
        conservation: [
            { label: 'Făgăraș National Park', value: 'Proposed national park would protect area' },
            { label: 'Natura 2000', value: 'EU protected site' },
            { label: 'Rewilding Europe', value: 'Part of rewilding initiatives' },
            { label: 'Bear Protection', value: 'Important brown bear habitat' }
        ],
        
        historicalImportance: [
            { label: 'Pastoral Heritage', value: 'Centuries of transhumance tradition' },
            { label: 'Romanian Identity', value: 'Symbol of Romanian highlands' },
            { label: 'Name Origin', value: 'Named for Moldavia region visible from summit' },
            { label: 'Resistance History', value: 'Area sheltered resistance fighters in WWII' }
        ],
        
        records: [
            { record: 'Highest Romania', value: 'Highest peak in Romania at 2,544m' },
            { record: 'Highest Southern Carpathians', value: 'Highest in Southern Carpathian range' },
            { record: 'Large Bear Population', value: 'Region has largest European brown bear population' },
            { record: 'Ridge Walk', value: 'Part of famous multi-day ridge traverse' }
        ],
        
        deathZone: false,
        technicalClimbing: false,
        permitRequired: false,
        sevenSummit: false,
        eightThousander: false
    }
];
// mountains-data-9.js - Part C: Mountains 88-90

const MOUNTAINS_DATA_9_PART_C = [
    // 88. Rysy
    {
        id: 'rysy',
        name: 'Rysy',
        localNames: [
            { language: 'Polish', name: 'Rysy' },
            { language: 'Slovak', name: 'Rysy' }
        ],
        countries: [
            { name: 'Poland', code: 'PL' },
            { name: 'Slovakia', code: 'SK' }
        ],
        continent: 'Europe',
        mountainRange: 'Carpathians',
        subRange: 'High Tatras',
        elevation: 2499,
        prominence: 120,
        isolation: 3,
        coordinates: [49.1794, 20.0881],
        defaultZoom: 14,
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80',
        
        formation: {
            type: 'Fold Mountain / Granite Peak',
            age: '300-350 million years',
            tectonicPlates: ['Eurasian Plate'],
            process: 'Part of Tatra granite core formed during Variscan orogeny. Three distinct summits along ridge straddling Polish-Slovak border. Glacial erosion created dramatic cirques including Morskie Oko.'
        },
        
        climbing: {
            firstAscent: {
                date: '1840',
                climbers: ['Ede Blásy'],
                route: 'Slovak side',
                expedition: 'Hungarian climber during early Tatra exploration.'
            },
            totalAscents: 50000,
            fatalities: 30,
            successRate: '90%',
            bestSeason: 'June to September',
            difficulty: 'Class 2-3',
            routes: [
                { name: 'Polish Route (from Morskie Oko)', country: 'Poland', difficulty: 'Class 2', description: 'Most popular, chains for assisted scrambling, 8 hours round trip' },
                { name: 'Slovak Route', country: 'Slovakia', difficulty: 'Class 2', description: 'Alternative from Slovak side, less crowded' },
                { name: 'Bulda Couloir', country: 'Slovakia', difficulty: 'Class 4', description: 'Technical winter route' }
            ]
        },
        
        climate: {
            summitTemperature: '-4°C average',
            winterLow: '-25°C',
            summerHigh: '10°C',
            snowfall: 'Heavy winter snow, chains may be snow-covered into July',
            winds: 'Exposed summit, can be severe',
            deathZone: 'Not applicable'
        },
        
        glaciers: [
            { name: 'No glaciers', length: 'N/A', description: 'Glacial lakes below but no active glaciers' }
        ],
        
        baseCamps: [
            { name: 'Morskie Oko (Lake)', elevation: 1395, country: 'Poland', coordinates: [49.2011, 20.0714] },
            { name: 'Schronisko przy Morskim Oku', elevation: 1410, country: 'Poland', coordinates: [49.2008, 20.0697] },
            { name: 'Chata pod Rysmi', elevation: 2250, country: 'Slovakia', coordinates: [49.1750, 20.0833] },
            { name: 'Czarny Staw pod Rysami', elevation: 1583, country: 'Poland', coordinates: [49.1917, 20.0750] }
        ],
        
        nearbyPeaks: [
            { name: 'Vysoka', elevation: 2547, coordinates: [49.1694, 20.0708] },
            { name: 'Niżnie Rysy', elevation: 2430, coordinates: [49.1833, 20.0833] },
            { name: 'Mięguszowiecki Szczyt', elevation: 2438, coordinates: [49.1917, 20.0583] },
            { name: 'Cubryna', elevation: 2376, coordinates: [49.1833, 20.0500] }
        ],
        
        nearbyCities: [
            { name: 'Zakopane', coordinates: [49.2992, 19.9519], country: 'Poland', population: 27000 },
            { name: 'Tatranská Lomnica', coordinates: [49.1650, 20.2811], country: 'Slovakia', population: 750 },
            { name: 'Poprad', coordinates: [49.0511, 20.2978], country: 'Slovakia', population: 52000 },
            { name: 'Nowy Targ', coordinates: [49.4775, 20.0325], country: 'Poland', population: 33000 }
        ],
        
        flora: ['Dwarf Pine', 'Alpine Flowers', 'Edelweiss', 'Saxifrage', 'Lichens', 'Mountain Avens'],
        fauna: ['Tatra Chamois', 'Marmot', 'Golden Eagle', 'Brown Bear', 'Wolf', 'Alpine Accentor'],
        
        economicImportance: [
            { label: 'Highest Poland', value: 'Every Polish person aims to climb it' },
            { label: 'Morskie Oko', value: 'Most visited mountain lake in Poland' },
            { label: 'Zakopane Tourism', value: 'Drives tourism economy of Zakopane' },
            { label: 'National Pride', value: 'Symbol of Polish highlands' }
        ],
        
        environmentalIssues: [
            { label: 'Severe Overcrowding', value: 'Queues on chains during summer weekends' },
            { label: 'Trail Erosion', value: 'Heavy foot traffic damaging trails' },
            { label: 'Litter', value: 'Waste management challenges' },
            { label: 'Rescue Burden', value: 'Frequent rescues of unprepared hikers' }
        ],
        
        conservation: [
            { label: 'Tatra National Park (Poland)', value: 'UNESCO Biosphere Reserve' },
            { label: 'TANAP (Slovakia)', value: 'Oldest national park in Slovakia' },
            { label: 'Cross-Border Cooperation', value: 'Joint Polish-Slovak management' },
            { label: 'Access Management', value: 'Trail permits required in summer' }
        ],
        
        historicalImportance: [
            { label: 'Border Peak', value: 'Summit marks Poland-Slovakia boundary' },
            { label: 'Three Summits', value: 'Northwest (Polish), Southeast and Middle (Slovak)' },
            { label: 'Polish Symbol', value: 'Important to Polish national identity' },
            { label: 'Literary Fame', value: 'Featured in Polish literature and songs' }
        ],
        
        records: [
            { record: 'Highest Poland', value: 'Highest peak in Poland at 2,499m (NW summit)' },
            { record: 'Most Climbed Tatras', value: 'Most frequently climbed peak in Tatras' },
            { record: 'Morskie Oko', value: 'Morskie Oko below voted most beautiful Polish lake' },
            { record: 'Border Peak', value: 'Highest border crossing point in Carpathians' }
        ],
        
        deathZone: false,
        technicalClimbing: false,
        permitRequired: false,
        sevenSummit: false,
        eightThousander: false
    },

    // 89. Galdhøpiggen
    {
        id: 'galdhopiggen',
        name: 'Galdhøpiggen',
        localNames: [
            { language: 'Norwegian', name: 'Galdhøpiggen' }
        ],
        countries: [
            { name: 'Norway', code: 'NO' }
        ],
        continent: 'Europe',
        mountainRange: 'Scandinavian Mountains',
        subRange: 'Jotunheimen',
        elevation: 2469,
        prominence: 2372,
        isolation: 1570,
        coordinates: [61.6364, 8.3125],
        defaultZoom: 12,
        image: 'https://images.unsplash.com/photo-1520681279154-51b3fb4ea0f7?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1520681279154-51b3fb4ea0f7?w=1920&q=80',
        
        formation: {
            type: 'Fold Mountain / Caledonian Orogen',
            age: '400-500 million years',
            tectonicPlates: ['Eurasian Plate'],
            process: 'Formed during Caledonian orogeny when ancient continents collided. Composed of gabbro and other igneous rocks. Glacial erosion shaped current form. Part of Jotunheimen ("Home of the Giants") massif.'
        },
        
        climbing: {
            firstAscent: {
                date: 'July 21, 1850',
                climbers: ['Steinar Sulheim', 'Knut Lykken', 'Lars Arnesen'],
                route: 'Standard Route',
                expedition: 'Norwegian farmers/guides during early mountaineering era.'
            },
            totalAscents: 30000,
            fatalities: 10,
            successRate: '95%',
            bestSeason: 'June to September',
            difficulty: 'Glacier walk',
            routes: [
                { name: 'Via Juvasshytta', country: 'Norway', difficulty: 'Glacier Walk', description: 'Most popular, guided glacier crossing, 5-6 hours' },
                { name: 'Via Spiterstulen', country: 'Norway', difficulty: 'Hiking', description: 'Longer but no glacier, 8-10 hours round trip' },
                { name: 'Winter Route', country: 'Norway', difficulty: 'Ski Tour', description: 'Popular ski mountaineering objective' }
            ]
        },
        
        climate: {
            summitTemperature: '-8°C average',
            winterLow: '-30°C',
            summerHigh: '5°C',
            snowfall: 'Heavy snowfall, glaciers persist',
            winds: 'Can be severe, Arctic conditions',
            deathZone: 'Not applicable'
        },
        
        glaciers: [
            { name: 'Styggebreen', length: '2 km', description: 'Crossed on normal route from Juvasshytta' },
            { name: 'Piggbreen', length: '1 km', description: 'Small glacier on north side' },
            { name: 'Storjuvbreen', length: '1.5 km', description: 'Southeast glacier' }
        ],
        
        baseCamps: [
            { name: 'Juvasshytta', elevation: 1841, country: 'Norway', coordinates: [61.6500, 8.3500] },
            { name: 'Spiterstulen', elevation: 1104, country: 'Norway', coordinates: [61.6333, 8.4333] },
            { name: 'Glitterheim', elevation: 1384, country: 'Norway', coordinates: [61.7000, 8.5500] },
            { name: 'Leirvassbu', elevation: 1400, country: 'Norway', coordinates: [61.5000, 8.2000] }
        ],
        
        nearbyPeaks: [
            { name: 'Glittertind', elevation: 2452, coordinates: [61.6553, 8.5031] },
            { name: 'Store Skagastølstind', elevation: 2405, coordinates: [61.5333, 7.9000] },
            { name: 'Surtningssui', elevation: 2368, coordinates: [61.6833, 8.2833] },
            { name: 'Storjuvtinden', elevation: 2344, coordinates: [61.6333, 8.3500] }
        ],
        
        nearbyCities: [
            { name: 'Lom', coordinates: [61.8375, 8.5658], country: 'Norway', population: 2400 },
            { name: 'Beitostølen', coordinates: [61.2500, 8.9167], country: 'Norway', population: 1000 },
            { name: 'Lillehammer', coordinates: [61.1152, 10.4662], country: 'Norway', population: 28000 },
            { name: 'Oslo', coordinates: [59.9139, 10.7522], country: 'Norway', population: 690000 }
        ],
        
        flora: ['Arctic-Alpine Plants', 'Moss', 'Lichen', 'Mountain Avens', 'Dwarf Willow', 'Saxifrage'],
        fauna: ['Reindeer', 'Arctic Fox', 'Ptarmigan', 'Snow Bunting', 'Lemming', 'Golden Eagle'],
        
        economicImportance: [
            { label: 'Northern Europe Highpoint', value: 'Highest in Northern Europe draws peak baggers' },
            { label: 'Jotunheimen Tourism', value: 'Centerpiece of Norways most popular hiking area' },
            { label: 'Guide Services', value: 'Glacier guiding industry' },
            { label: 'Hut System', value: 'DNT huts support trekking economy' }
        ],
        
        environmentalIssues: [
            { label: 'Glacier Retreat', value: 'Styggebreen shrinking noticeably' },
            { label: 'Permafrost Thaw', value: 'Warming affecting mountain terrain' },
            { label: 'Access Impact', value: 'Road to Juvasshytta affects environment' },
            { label: 'Climate Change', value: 'Arctic warming visible in Jotunheimen' }
        ],
        
        conservation: [
            { label: 'Jotunheimen National Park', value: 'Protected since 1980' },
            { label: 'DNT Management', value: 'Norwegian Trekking Association maintains trails' },
            { label: 'Glacier Monitoring', value: 'Long-term research on Norwegian glaciers' },
            { label: 'Reindeer Protection', value: 'Wild reindeer herds protected' }
        ],
        
        historicalImportance: [
            { label: 'Height Rivalry', value: 'Long disputed with Glittertind for highest title' },
            { label: 'Name Meaning', value: 'Galdhøpiggen means "peak of Galdhø"' },
            { label: 'Jotunheimen Name', value: 'Area named "Home of Giants" from Norse mythology' },
            { label: 'Norwegian Identity', value: 'Symbol of Norwegian mountain culture' }
        ],
        
        records: [
            { record: 'Highest Northern Europe', value: 'Highest peak in Northern Europe at 2,469m' },
            { record: 'Highest Norway', value: 'Highest point in Norway' },
            { record: 'Highest Scandinavia', value: 'Highest peak in Scandinavia' },
            { record: 'Arctic Glaciers', value: 'Southernmost Arctic-type glaciers in Europe' }
        ],
        
        deathZone: false,
        technicalClimbing: false,
        permitRequired: false,
        sevenSummit: false,
        eightThousander: false
    },

    // 90. Ben Nevis
    {
        id: 'ben-nevis',
        name: 'Ben Nevis',
        localNames: [
            { language: 'Scottish Gaelic', name: 'Beinn Nibheis' }
        ],
        countries: [
            { name: 'United Kingdom', code: 'GB' }
        ],
        continent: 'Europe',
        mountainRange: 'Grampian Mountains',
        subRange: 'Lochaber',
        elevation: 1345,
        prominence: 1344,
        isolation: 449,
        coordinates: [56.7969, -5.0036],
        defaultZoom: 13,
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
        
        formation: {
            type: 'Volcanic Caldera / Granite Intrusion',
            age: '400 million years',
            tectonicPlates: ['Eurasian Plate'],
            process: 'Remains of collapsed volcanic caldera. Core is granite intrusion surrounded by metamorphic rocks. Glacial erosion carved dramatic north face cliffs. Summit plateau is remnant of ancient volcano.'
        },
        
        climbing: {
            firstAscent: {
                date: 'August 17, 1771',
                climbers: ['James Robertson'],
                route: 'Unknown (likely Pony Track area)',
                expedition: 'Edinburgh botanist during scientific exploration.'
            },
            totalAscents: 150000,
            fatalities: 100,
            successRate: '75%',
            bestSeason: 'May to September',
            difficulty: 'Hiking to Grade VI ice',
            routes: [
                { name: 'Mountain Track (Tourist Path)', country: 'UK', difficulty: 'Hiking', description: 'Most popular, well-maintained path, 8 hours round trip' },
                { name: 'Carn Mor Dearg Arête', country: 'UK', difficulty: 'Grade 1 Scramble', description: 'Classic ridge traverse, more challenging' },
                { name: 'Tower Ridge', country: 'UK', difficulty: 'Grade III Climbing', description: 'Classic rock/mixed route on north face' },
                { name: 'Point Five Gully', country: 'UK', difficulty: 'Grade V Ice', description: 'Classic ice climb, serious undertaking' }
            ]
        },
        
        climate: {
            summitTemperature: '0°C average',
            winterLow: '-17°C',
            summerHigh: '10°C',
            snowfall: 'Heavy precipitation, summit clouded 300+ days per year',
            winds: 'Often severe, hurricane-force recorded',
            deathZone: 'Not applicable'
        },
        
        glaciers: [
            { name: 'No glaciers', length: 'N/A', description: 'Permanent snow patches some years, no true glaciers' }
        ],
        
        baseCamps: [
            { name: 'Glen Nevis Visitor Centre', elevation: 20, country: 'UK', coordinates: [56.8083, -5.0583] },
            { name: 'Ben Nevis Inn', elevation: 30, country: 'UK', coordinates: [56.8000, -5.0833] },
            { name: 'Halfway Lochan', elevation: 570, country: 'UK', coordinates: [56.8000, -5.0333] },
            { name: 'CIC Hut', elevation: 680, country: 'UK', coordinates: [56.8000, -5.0000] }
        ],
        
        nearbyPeaks: [
            { name: 'Carn Mor Dearg', elevation: 1220, coordinates: [56.8000, -4.9667] },
            { name: 'Aonach Mor', elevation: 1221, coordinates: [56.8167, -4.9667] },
            { name: 'Aonach Beag', elevation: 1234, coordinates: [56.8167, -4.9500] },
            { name: 'Carn Dearg', elevation: 1221, coordinates: [56.7833, -5.0167] }
        ],
        
        nearbyCities: [
            { name: 'Fort William', coordinates: [56.8198, -5.1052], country: 'UK', population: 10000 },
            { name: 'Inverness', coordinates: [57.4778, -4.2247], country: 'UK', population: 50000 },
            { name: 'Glasgow', coordinates: [55.8642, -4.2518], country: 'UK', population: 635000 },
            { name: 'Edinburgh', coordinates: [55.9533, -3.1883], country: 'UK', population: 540000 }
        ],
        
        flora: ['Heather', 'Bilberry', 'Moss', 'Alpine Lady-fern', 'Woolly Hair Moss', 'Dwarf Willow'],
        fauna: ['Red Deer', 'Mountain Hare', 'Ptarmigan', 'Golden Eagle', 'Raven', 'Snow Bunting'],
        
        economicImportance: [
            { label: 'UK Highpoint', value: 'Highest in British Isles draws 150,000+ annually' },
            { label: 'Fort William Economy', value: 'Mountain tourism drives local economy' },
            { label: 'Ice Climbing Mecca', value: 'North Face world-class winter climbing destination' },
            { label: 'Three Peaks Challenge', value: 'Part of famous UK endurance challenge' }
        ],
        
        environmentalIssues: [
            { label: 'Path Erosion', value: 'Mountain Track severely eroded from overuse' },
            { label: 'Litter', value: 'Summit area accumulates significant litter' },
            { label: 'Unprepared Visitors', value: 'Many attempt in inadequate gear' },
            { label: 'Summit Ruins', value: 'Old observatory ruins create safety hazard' }
        ],
        
        conservation: [
            { label: 'Ben Nevis and Glen Coe NSA', value: 'National Scenic Area designation' },
            { label: 'John Muir Trust', value: 'Conservation charity owns and manages land' },
            { label: 'Path Restoration', value: 'Ongoing £1 million+ path repair project' },
            { label: 'Mountain Rescue', value: 'Lochaber MRT busiest team in UK' }
        ],
        
        historicalImportance: [
            { label: 'Summit Observatory', value: 'Weather observatory operated 1883-1904' },
            { label: 'Victorian Pony Track', value: 'Path built to supply observatory' },
            { label: 'Climbing History', value: 'North Face pioneering climbs from 1890s' },
            { label: 'Ford Model T', value: 'Car driven to summit in 1911' }
        ],
        
        records: [
            { record: 'Highest British Isles', value: 'Highest peak in UK and British Isles at 1,345m' },
            { record: 'Most Ascents UK', value: 'Most climbed mountain in Britain' },
            { record: 'Best Ice Climbing', value: 'Considered best ice climbing in UK' },
            { record: 'Worst Weather', value: 'Among worst weather of any mountain for its height' }
        ],
        
        deathZone: false,
        technicalClimbing: true,
        permitRequired: false,
        sevenSummit: false,
        eightThousander: false
    }
];

// ============================================
// COMBINE ALL PARTS INTO MOUNTAINS_DATA_9
// ============================================

const MOUNTAINS_DATA_9 = [
    ...MOUNTAINS_DATA_9_PART_A,
    ...MOUNTAINS_DATA_9_PART_B,
    ...MOUNTAINS_DATA_9_PART_C
];

// Export for use in main data combiner
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { MOUNTAINS_DATA_9 };
}

console.log('Mountains Data 9 loaded:', MOUNTAINS_DATA_9.length, 'mountains (European & Iconic Peaks)');
