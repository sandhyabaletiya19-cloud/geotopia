// mountains-data-6.js - Mountains 51-60 (Andes Continued & World Peaks)
// Part A: Mountains 51-54

const MOUNTAINS_DATA_6_PART_A = [
    // 51. Mercedario
    {
        id: 'mercedario',
        name: 'Mercedario',
        localNames: [
            { language: 'Spanish', name: 'Cerro Mercedario' }
        ],
        countries: [
            { name: 'Argentina', code: 'AR' }
        ],
        continent: 'South America',
        mountainRange: 'Andes',
        subRange: 'Cordillera de la Ramada',
        elevation: 6720,
        prominence: 3312,
        isolation: 189,
        coordinates: [-31.9797, -70.1125],
        defaultZoom: 11,
        image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=80',
        
        formation: {
            type: 'Fold Mountain / Uplifted Batholith',
            age: '10-15 million years',
            tectonicPlates: ['Nazca Plate', 'South American Plate'],
            process: 'Formed by subduction of Nazca Plate beneath South American Plate during Andean orogeny. Composed primarily of granite and sedimentary rock thrust upward. Extensive glaciation carved dramatic cirques and valleys.'
        },
        
        climbing: {
            firstAscent: {
                date: 'January 18, 1934',
                climbers: ['Wiktor Ostrowski', 'Adam Karpinski'],
                route: 'Southwest Ridge',
                expedition: 'Polish expedition during extensive exploration of Central Andes region.'
            },
            totalAscents: 500,
            fatalities: 8,
            successRate: '60%',
            bestSeason: 'December to February',
            difficulty: 'PD to AD',
            routes: [
                { name: 'Normal Route (Southwest)', country: 'Argentina', difficulty: 'PD+', description: 'Non-technical but long approach, glacier travel required' },
                { name: 'Northwest Ridge', country: 'Argentina', difficulty: 'AD', description: 'Alternative route with more technical sections' },
                { name: 'Polish Route', country: 'Argentina', difficulty: 'AD', description: 'Historic first ascent route' },
                { name: 'East Face', country: 'Argentina', difficulty: 'D', description: 'Technical ice and mixed climbing' }
            ]
        },
        
        climate: {
            summitTemperature: '-20°C average',
            winterLow: '-40°C',
            summerHigh: '-5°C',
            snowfall: 'Moderate snowfall, dry Andean climate',
            winds: 'Strong persistent westerly winds',
            deathZone: 'Near death zone, significant altitude effects'
        },
        
        glaciers: [
            { name: 'Glacier del Este', length: '4 km', description: 'East face glacier, main ice feature' },
            { name: 'Glacier del Norte', length: '3 km', description: 'Northern approach glacier' },
            { name: 'Glacier Conconta', length: '5 km', description: 'Large glacier system on south side' }
        ],
        
        baseCamps: [
            { name: 'Base Camp (Laguna Blanca)', elevation: 4000, country: 'Argentina', coordinates: [-31.9500, -70.1500] },
            { name: 'Camp 1', elevation: 4800, country: 'Argentina', coordinates: [-31.9667, -70.1333] },
            { name: 'High Camp', elevation: 5700, country: 'Argentina', coordinates: [-31.9750, -70.1167] }
        ],
        
        nearbyPeaks: [
            { name: 'La Mesa', elevation: 6200, coordinates: [-31.9667, -70.0833] },
            { name: 'Alma Negra', elevation: 6120, coordinates: [-31.9333, -70.1333] },
            { name: 'Cerro Ramada', elevation: 6410, coordinates: [-32.0167, -70.0833] },
            { name: 'Pico Polaco', elevation: 6050, coordinates: [-31.9833, -70.0667] }
        ],
        
        nearbyCities: [
            { name: 'San Juan', coordinates: [-31.5375, -68.5364], country: 'Argentina', population: 470000 },
            { name: 'Barreal', coordinates: [-31.6333, -69.4667], country: 'Argentina', population: 5000 },
            { name: 'Calingasta', coordinates: [-31.3333, -69.4167], country: 'Argentina', population: 3000 },
            { name: 'Mendoza', coordinates: [-32.8908, -68.8272], country: 'Argentina', population: 115000 }
        ],
        
        flora: ['High Altitude Steppe Grass', 'Yareta Cushion Plants', 'Andean Scrub', 'Lichens', 'Coirón Grass'],
        fauna: ['Guanaco', 'Andean Condor', 'Puma', 'Andean Fox', 'Viscacha', 'Red-backed Hawk'],
        
        economicImportance: [
            { label: 'Mountaineering Destination', value: 'Alternative to crowded Aconcagua for serious climbers' },
            { label: 'Mining Region', value: 'Area has historical and ongoing mining activity' },
            { label: 'Water Source', value: 'Glaciers feed rivers supplying San Juan Province' },
            { label: 'Scientific Research', value: 'High-altitude studies and glaciology' }
        ],
        
        environmentalIssues: [
            { label: 'Glacial Retreat', value: 'Significant glacier shrinkage documented' },
            { label: 'Mining Impact', value: 'Nearby mining operations affecting water quality' },
            { label: 'Climate Change', value: 'Rising temperatures affecting snow coverage' }
        ],
        
        conservation: [
            { label: 'San Guillermo Reserve', value: 'Nearby biosphere reserve protects regional wildlife' },
            { label: 'Provincial Protection', value: 'San Juan Province manages access and protection' },
            { label: 'Low Traffic', value: 'Limited visitors reduce environmental impact' }
        ],
        
        historicalImportance: [
            { label: 'Polish Exploration', value: 'First ascent by Polish expedition in 1934' },
            { label: 'Incan Heritage', value: 'Possible ceremonial sites in region' },
            { label: 'Ramada Range Monarch', value: 'Highest peak in Cordillera de la Ramada' },
            { label: 'Scientific Expeditions', value: 'Multiple research expeditions since 1950s' }
        ],
        
        records: [
            { record: 'Sixth Highest Andes', value: 'Sixth highest peak in Andes mountains' },
            { record: 'Highest San Juan', value: 'Highest peak in San Juan Province' },
            { record: 'High Prominence', value: 'One of most prominent peaks in Andes' },
            { record: 'Aconcagua Alternative', value: 'Popular challenging alternative to Aconcagua' }
        ],
        
        deathZone: false,
        technicalClimbing: true,
        permitRequired: true,
        sevenSummit: false,
        eightThousander: false
    },

    // 52. Yerupajá
    {
        id: 'yerupaja',
        name: 'Yerupajá',
        localNames: [
            { language: 'Quechua', name: 'Yerupajá' },
            { language: 'Spanish', name: 'El Carnicero (The Butcher)' }
        ],
        countries: [
            { name: 'Peru', code: 'PE' }
        ],
        continent: 'South America',
        mountainRange: 'Andes',
        subRange: 'Cordillera Huayhuash',
        elevation: 6634,
        prominence: 1934,
        isolation: 35,
        coordinates: [-10.2667, -76.9000],
        defaultZoom: 12,
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80',
        
        formation: {
            type: 'Granite Batholith / Glaciated Peak',
            age: '8-15 million years',
            tectonicPlates: ['Nazca Plate', 'South American Plate'],
            process: 'Part of Cordillera Huayhuash batholith formed by magma intrusion during Andean uplift. Extreme glaciation carved dramatic ice-fluted faces. Known for steep unstable ice and seracs making it extremely dangerous.'
        },
        
        climbing: {
            firstAscent: {
                date: 'July 31, 1950',
                climbers: ['David Harrah', 'James Maxwell'],
                route: 'Southwest Face',
                expedition: 'American expedition achieved difficult first ascent after several failures. Mountain had reputation as impossible.'
            },
            totalAscents: 50,
            fatalities: 25,
            successRate: '25%',
            bestSeason: 'June to August',
            difficulty: 'TD to ED',
            routes: [
                { name: 'Southwest Face', country: 'Peru', difficulty: 'TD', description: 'Original route, serious ice climbing with serac danger' },
                { name: 'West Face', country: 'Peru', difficulty: 'ED', description: 'Extremely steep ice face, rarely attempted' },
                { name: 'South Ridge', country: 'Peru', difficulty: 'TD+', description: 'Long technical ridge traverse' },
                { name: 'East Face', country: 'Peru', difficulty: 'ED', description: 'Massive ice wall, extreme difficulty' }
            ]
        },
        
        climate: {
            summitTemperature: '-18°C average',
            winterLow: '-35°C',
            summerHigh: '-5°C',
            snowfall: 'Heavy snowfall, tropical glacier accumulation',
            winds: 'Variable but can be severe on ridges',
            deathZone: 'Near death zone altitude'
        },
        
        glaciers: [
            { name: 'Yerupajá Glacier', length: '3 km', description: 'West face glacier with dangerous seracs' },
            { name: 'Solteracocha Glacier', length: '2 km', description: 'South side glacier feeding lakes' },
            { name: 'Rasac Glacier', length: '4 km', description: 'Large glacier system connecting peaks' }
        ],
        
        baseCamps: [
            { name: 'Jahuacocha Camp', elevation: 4050, country: 'Peru', coordinates: [-10.2500, -76.9167] },
            { name: 'Solteracocha Camp', elevation: 4300, country: 'Peru', coordinates: [-10.2833, -76.9000] },
            { name: 'High Camp', elevation: 5400, country: 'Peru', coordinates: [-10.2667, -76.8917] }
        ],
        
        nearbyPeaks: [
            { name: 'Yerupajá Chico', elevation: 6121, coordinates: [-10.2833, -76.9000] },
            { name: 'Siula Grande', elevation: 6344, coordinates: [-10.3000, -76.8833] },
            { name: 'Jirishanca', elevation: 6094, coordinates: [-10.2333, -76.9167] },
            { name: 'Rondoy', elevation: 5870, coordinates: [-10.2167, -76.9500] }
        ],
        
        nearbyCities: [
            { name: 'Huaraz', coordinates: [-9.5300, -77.5328], country: 'Peru', population: 120000 },
            { name: 'Chiquián', coordinates: [-10.1500, -77.1500], country: 'Peru', population: 5000 },
            { name: 'Llamac', coordinates: [-10.2000, -76.9667], country: 'Peru', population: 500 },
            { name: 'Huánuco', coordinates: [-9.9300, -76.2422], country: 'Peru', population: 175000 }
        ],
        
        flora: ['Polylepis Forest', 'Puya Raimondii', 'Ichu Grass', 'Cushion Plants', 'High Altitude Mosses'],
        fauna: ['Andean Condor', 'Viscacha', 'Andean Fox', 'White-tailed Deer', 'Puma', 'Spectacled Bear'],
        
        economicImportance: [
            { label: 'Huayhuash Circuit', value: 'Part of famous trekking route generating tourism' },
            { label: 'Elite Mountaineering', value: 'Draws world-class alpinists seeking challenge' },
            { label: 'Documentary Fame', value: 'Touching the Void brought worldwide attention' },
            { label: 'Water Source', value: 'Glaciers feed agricultural valleys below' }
        ],
        
        environmentalIssues: [
            { label: 'Glacial Retreat', value: 'Tropical glaciers shrinking rapidly' },
            { label: 'Mining Threats', value: 'Mining exploration threatens pristine area' },
            { label: 'Climate Change', value: 'Ice conditions becoming more unstable' }
        ],
        
        conservation: [
            { label: 'Community Management', value: 'Local communities control access and fees' },
            { label: 'Limited Access', value: 'Difficult approach provides natural protection' },
            { label: 'Awareness', value: 'International attention helps conservation efforts' }
        ],
        
        historicalImportance: [
            { label: 'The Butcher', value: 'Nickname reflects extremely dangerous reputation' },
            { label: 'Touching the Void', value: 'Joe Simpson survival story on nearby Siula Grande' },
            { label: 'Technical Pioneer', value: 'Early extreme high-altitude technical climbing' },
            { label: 'Few Ascents', value: 'Remains rarely climbed due to danger' }
        ],
        
        records: [
            { record: 'Second Highest Peru', value: 'Second highest peak in Peru after Huascarán' },
            { record: 'Most Dangerous Peru', value: 'Considered most dangerous peak in Peru' },
            { record: 'Lowest Success Rate', value: 'Among lowest success rates of any major peak' },
            { record: 'El Carnicero', value: 'The Butcher - notorious reputation' }
        ],
        
        deathZone: false,
        technicalClimbing: true,
        permitRequired: true,
        sevenSummit: false,
        eightThousander: false
    },

    // 53. Nevado Sajama
    {
        id: 'nevado-sajama',
        name: 'Nevado Sajama',
        localNames: [
            { language: 'Aymara', name: 'Sajama' },
            { language: 'Spanish', name: 'Nevado Sajama' }
        ],
        countries: [
            { name: 'Bolivia', code: 'BO' }
        ],
        continent: 'South America',
        mountainRange: 'Andes',
        subRange: 'Cordillera Occidental',
        elevation: 6542,
        prominence: 2004,
        isolation: 78,
        coordinates: [-18.1050, -68.8800],
        defaultZoom: 12,
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
        
        formation: {
            type: 'Stratovolcano',
            age: '1-2 million years',
            tectonicPlates: ['Nazca Plate', 'South American Plate'],
            process: 'Dormant stratovolcano formed by subduction volcanism. Perfect conical shape with ice cap. Part of volcanic chain along Bolivia-Chile border. Hot springs at base indicate ongoing geothermal activity.'
        },
        
        climbing: {
            firstAscent: {
                date: 'October 4, 1939',
                climbers: ['Wilfrid Kühm', 'Josef Prem'],
                route: 'West Face',
                expedition: 'Austrian expedition during survey of Bolivian volcanoes.'
            },
            totalAscents: 1500,
            fatalities: 10,
            successRate: '70%',
            bestSeason: 'April to October (dry season)',
            difficulty: 'PD',
            routes: [
                { name: 'Normal Route (West Face)', country: 'Bolivia', difficulty: 'PD', description: 'Non-technical but steep snow slopes, altitude main challenge' },
                { name: 'Southwest Ridge', country: 'Bolivia', difficulty: 'PD+', description: 'Alternative with more ridge exposure' },
                { name: 'North Face', country: 'Bolivia', difficulty: 'AD', description: 'Steeper variation, less traveled' },
                { name: 'East Ridge', country: 'Bolivia', difficulty: 'AD', description: 'Longer approach but scenic' }
            ]
        },
        
        climate: {
            summitTemperature: '-18°C average',
            winterLow: '-35°C',
            summerHigh: '-3°C',
            snowfall: 'Moderate, dry altiplano climate',
            winds: 'Strong winds especially in afternoon',
            deathZone: 'Near death zone altitude effects'
        },
        
        glaciers: [
            { name: 'Summit Ice Cap', length: '2 km', description: 'Permanent ice cap covering summit cone' },
            { name: 'West Glacier', length: '1.5 km', description: 'Glacier on main climbing route' },
            { name: 'South Glacier', length: '1 km', description: 'Smaller glacier system' }
        ],
        
        baseCamps: [
            { name: 'Sajama Village', elevation: 4220, country: 'Bolivia', coordinates: [-18.1333, -68.9667] },
            { name: 'Base Camp', elevation: 4800, country: 'Bolivia', coordinates: [-18.1167, -68.9000] },
            { name: 'High Camp', elevation: 5700, country: 'Bolivia', coordinates: [-18.1083, -68.8833] }
        ],
        
        nearbyPeaks: [
            { name: 'Parinacota', elevation: 6342, coordinates: [-18.1667, -69.1500] },
            { name: 'Pomerape', elevation: 6282, coordinates: [-18.1333, -69.1333] },
            { name: 'Acotango', elevation: 6052, coordinates: [-18.3833, -69.0500] },
            { name: 'Guallatiri', elevation: 6071, coordinates: [-18.4167, -69.0833] }
        ],
        
        nearbyCities: [
            { name: 'Patacamaya', coordinates: [-17.2333, -67.9167], country: 'Bolivia', population: 25000 },
            { name: 'Oruro', coordinates: [-17.9647, -67.1064], country: 'Bolivia', population: 265000 },
            { name: 'La Paz', coordinates: [-16.5000, -68.1500], country: 'Bolivia', population: 765000 },
            { name: 'Arica', coordinates: [-18.4746, -70.3214], country: 'Chile', population: 220000 }
        ],
        
        flora: ['Polylepis Tarapacana (Worlds Highest Forest)', 'Yareta', 'Thola Shrub', 'Ichu Grass', 'Queñoa'],
        fauna: ['Vicuña', 'Viscacha', 'Andean Fox', 'Puma', 'Andean Condor', 'Flamingos', 'Rhea'],
        
        economicImportance: [
            { label: 'National Park Tourism', value: 'Sajama National Park attracts ecotourists' },
            { label: 'Mountaineering Destination', value: 'Popular acclimatization peak and objective' },
            { label: 'Hot Springs', value: 'Geothermal springs attract visitors' },
            { label: 'Traditional Grazing', value: 'Aymara communities graze llamas and alpacas' }
        ],
        
        environmentalIssues: [
            { label: 'Glacial Melting', value: 'Summit ice cap shrinking noticeably' },
            { label: 'Forest Threats', value: 'Worlds highest forest (Polylepis) threatened' },
            { label: 'Overgrazing', value: 'Livestock pressure on fragile ecosystems' }
        ],
        
        conservation: [
            { label: 'Sajama National Park', value: 'Bolivias oldest national park (1939) protects volcano' },
            { label: 'UNESCO Tentative List', value: 'Nominated for World Heritage status' },
            { label: 'Community Programs', value: 'Local Aymara involved in conservation' },
            { label: 'Polylepis Protection', value: 'Efforts to preserve high-altitude forest' }
        ],
        
        historicalImportance: [
            { label: 'Sacred Mountain', value: 'Revered by Aymara people as apu (mountain spirit)' },
            { label: 'Highest Bolivia', value: 'Symbol of Bolivian Andes' },
            { label: 'First National Park', value: 'Sajama NP was Bolivias first (1939)' },
            { label: 'Altitude Record', value: 'Worlds highest forest grows on slopes' }
        ],
        
        records: [
            { record: 'Highest Bolivia', value: 'Highest peak in Bolivia at 6,542m' },
            { record: 'Highest Forest', value: 'Polylepis forest at 5,200m - highest in world' },
            { record: 'Perfect Cone', value: 'Nearly perfect volcanic cone shape' },
            { record: 'First Bolivian NP', value: 'Within Bolivias first national park' }
        ],
        
        deathZone: false,
        technicalClimbing: false,
        permitRequired: true,
        sevenSummit: false,
        eightThousander: false
    },

    // 54. Illimani
    {
        id: 'illimani',
        name: 'Illimani',
        localNames: [
            { language: 'Aymara', name: 'Illimani' },
            { language: 'Spanish', name: 'Nevado Illimani' }
        ],
        countries: [
            { name: 'Bolivia', code: 'BO' }
        ],
        continent: 'South America',
        mountainRange: 'Andes',
        subRange: 'Cordillera Real',
        elevation: 6438,
        prominence: 2522,
        isolation: 102,
        coordinates: [-16.6533, -67.7850],
        defaultZoom: 12,
        image: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1920&q=80',
        
        formation: {
            type: 'Fold Mountain / Glaciated Massif',
            age: '20-30 million years',
            tectonicPlates: ['Nazca Plate', 'South American Plate'],
            process: 'Part of Cordillera Real formed during Andean orogeny. Composed of granite and sedimentary rocks. Four main peaks along ridge. Heavy glaciation carved dramatic cirques. Dominates La Paz skyline.'
        },
        
        climbing: {
            firstAscent: {
                date: 'September 9, 1898',
                climbers: ['William Martin Conway'],
                route: 'South Face / Normal Route',
                expedition: 'British expedition led by Conway during Andes exploration. First of major Bolivian peaks to be climbed.'
            },
            totalAscents: 2500,
            fatalities: 30,
            successRate: '65%',
            bestSeason: 'May to September',
            difficulty: 'AD',
            routes: [
                { name: 'Normal Route (South Face)', country: 'Bolivia', difficulty: 'AD', description: 'Most popular, steep snow and ice to Pico Sur' },
                { name: 'West Ridge', country: 'Bolivia', difficulty: 'AD+', description: 'Alternative route with more technical climbing' },
                { name: 'North Face', country: 'Bolivia', difficulty: 'TD', description: 'Serious ice face, committing route' },
                { name: 'Complete Traverse', country: 'Bolivia', difficulty: 'D', description: 'All four summits, long technical expedition' }
            ]
        },
        
        climate: {
            summitTemperature: '-16°C average',
            winterLow: '-30°C',
            summerHigh: '-3°C',
            snowfall: 'Moderate, distinct wet and dry seasons',
            winds: 'Can be severe, especially on ridges',
            deathZone: 'Near death zone altitude'
        },
        
        glaciers: [
            { name: 'Illimani Glacier', length: '4 km', description: 'Main glacier on south face' },
            { name: 'Khara Khota Glacier', length: '3 km', description: 'North side glacier system' },
            { name: 'Pinaya Glacier', length: '2 km', description: 'East side glacier' }
        ],
        
        baseCamps: [
            { name: 'Puente Roto', elevation: 3800, country: 'Bolivia', coordinates: [-16.6167, -67.8333] },
            { name: 'Base Camp', elevation: 4500, country: 'Bolivia', coordinates: [-16.6333, -67.8000] },
            { name: 'High Camp (Nido de Condores)', elevation: 5500, country: 'Bolivia', coordinates: [-16.6500, -67.7917] }
        ],
        
        nearbyPeaks: [
            { name: 'Pico Central', elevation: 6380, coordinates: [-16.6500, -67.7833] },
            { name: 'Pico Norte', elevation: 6350, coordinates: [-16.6417, -67.7833] },
            { name: 'Huayna Potosí', elevation: 6088, coordinates: [-16.2833, -68.1333] },
            { name: 'Mururata', elevation: 5868, coordinates: [-16.5333, -68.0833] }
        ],
        
        nearbyCities: [
            { name: 'La Paz', coordinates: [-16.5000, -68.1500], country: 'Bolivia', population: 765000 },
            { name: 'El Alto', coordinates: [-16.5044, -68.1958], country: 'Bolivia', population: 850000 },
            { name: 'Palca', coordinates: [-16.5833, -67.9167], country: 'Bolivia', population: 1000 },
            { name: 'Cohoni', coordinates: [-16.5500, -68.0000], country: 'Bolivia', population: 500 }
        ],
        
        flora: ['Polylepis Forest', 'Puya Raimondii', 'Yareta', 'Ichu Grass', 'High Altitude Mosses'],
        fauna: ['Andean Condor', 'Viscacha', 'Andean Fox', 'Spectacled Bear', 'Puma', 'Torrent Duck'],
        
        economicImportance: [
            { label: 'La Paz Symbol', value: 'Iconic backdrop of capital, appears on coat of arms' },
            { label: 'Water Supply', value: 'Glaciers supply significant water to La Paz/El Alto' },
            { label: 'Tourism', value: 'Popular mountaineering destination' },
            { label: 'Cultural Icon', value: 'Featured in art, literature, and national identity' }
        ],
        
        environmentalIssues: [
            { label: 'Critical Glacier Loss', value: 'Glaciers retreating rapidly threatening water supply' },
            { label: 'Urban Pressure', value: 'Growing cities increase demand on water' },
            { label: 'Climate Impact', value: 'Visible ice loss since 1980s' }
        ],
        
        conservation: [
            { label: 'Cotapata National Park', value: 'Adjacent park protects some approaches' },
            { label: 'Glacier Research', value: 'Active monitoring by Bolivian scientists' },
            { label: 'Water Management', value: 'Studies on glacial contribution to city water' },
            { label: 'Cultural Protection', value: 'Recognized as sacred site by indigenous groups' }
        ],
        
        historicalImportance: [
            { label: 'Sacred Mountain', value: 'Aymara consider it male guardian of La Paz' },
            { label: 'First Major Bolivian Climb', value: 'First high peak climbed in Bolivia (1898)' },
            { label: 'Conway Expedition', value: 'Part of important British Andes exploration' },
            { label: 'National Symbol', value: 'Appears on La Paz city coat of arms' }
        ],
        
        records: [
            { record: 'Second Highest Bolivia', value: 'Second highest peak in Bolivia' },
            { record: 'Guardian of La Paz', value: 'Most prominent peak visible from capital' },
            { record: 'Four Summits', value: 'Four distinct peaks over 6000m on ridge' },
            { record: 'Urban Icon', value: 'Dominates skyline of highest capital city' }
        ],
        
        deathZone: false,
        technicalClimbing: true,
        permitRequired: true,
        sevenSummit: false,
        eightThousander: false
    }
];
// mountains-data-6.js - Part B: Mountains 55-57

const MOUNTAINS_DATA_6_PART_B = [
    // 55. Chimborazo
    {
        id: 'chimborazo',
        name: 'Chimborazo',
        localNames: [
            { language: 'Quechua', name: 'Chimborazo' },
            { language: 'Spanish', name: 'Volcán Chimborazo' }
        ],
        countries: [
            { name: 'Ecuador', code: 'EC' }
        ],
        continent: 'South America',
        mountainRange: 'Andes',
        subRange: 'Cordillera Occidental (Ecuador)',
        elevation: 6263,
        prominence: 4118,
        isolation: 485,
        coordinates: [-1.4692, -78.8169],
        defaultZoom: 12,
        image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
        
        formation: {
            type: 'Stratovolcano (Dormant)',
            age: '1 million years (current cone)',
            tectonicPlates: ['Nazca Plate', 'South American Plate'],
            process: 'Complex stratovolcano with four summits formed through multiple eruptions. Last known eruption around 550 AD. Sits on equatorial bulge making summit the farthest point from Earths center.'
        },
        
        climbing: {
            firstAscent: {
                date: 'January 4, 1880',
                climbers: ['Edward Whymper', 'Jean-Antoine Carrel', 'Louis Carrel'],
                route: 'Southwest (Whymper) Route',
                expedition: 'Whymper, famous for Matterhorn first ascent, climbed with Italian guides during Ecuador expedition.'
            },
            totalAscents: 4000,
            fatalities: 35,
            successRate: '55%',
            bestSeason: 'December to January, June to September',
            difficulty: 'PD+ to AD',
            routes: [
                { name: 'Normal Route (Whymper)', country: 'Ecuador', difficulty: 'PD+', description: 'Most popular route via Whymper Refuge, glacier travel and steep snow' },
                { name: 'Veintimilla Route', country: 'Ecuador', difficulty: 'PD+', description: 'To secondary summit, slightly easier' },
                { name: 'Direct Route', country: 'Ecuador', difficulty: 'AD', description: 'Steeper direct line, more technical' },
                { name: 'Integral Traverse', country: 'Ecuador', difficulty: 'AD+', description: 'Complete traverse of all summits' }
            ]
        },
        
        climate: {
            summitTemperature: '-15°C average',
            winterLow: '-25°C',
            summerHigh: '-5°C',
            snowfall: 'Moderate, equatorial glacier system',
            winds: 'Variable, can be severe',
            deathZone: 'Not applicable but significant altitude effects'
        },
        
        glaciers: [
            { name: 'Thielman Glacier', length: '2 km', description: 'Normal route glacier' },
            { name: 'Abraspungo Glacier', length: '1.5 km', description: 'North side glacier' },
            { name: 'Reschreiter Glacier', length: '2 km', description: 'East side glacier' }
        ],
        
        baseCamps: [
            { name: 'Carrel Refuge', elevation: 4850, country: 'Ecuador', coordinates: [-1.4750, -78.8333] },
            { name: 'Whymper Refuge', elevation: 5000, country: 'Ecuador', coordinates: [-1.4833, -78.8250] },
            { name: 'High Camp', elevation: 5400, country: 'Ecuador', coordinates: [-1.4722, -78.8194] }
        ],
        
        nearbyPeaks: [
            { name: 'Carihuairazo', elevation: 5018, coordinates: [-1.4000, -78.7500] },
            { name: 'Tungurahua', elevation: 5023, coordinates: [-1.4667, -78.4417] },
            { name: 'El Altar', elevation: 5320, coordinates: [-1.6833, -78.4167] },
            { name: 'Sangay', elevation: 5230, coordinates: [-2.0667, -78.3333] }
        ],
        
        nearbyCities: [
            { name: 'Riobamba', coordinates: [-1.6708, -78.6478], country: 'Ecuador', population: 225000 },
            { name: 'Ambato', coordinates: [-1.2417, -78.6197], country: 'Ecuador', population: 330000 },
            { name: 'Guaranda', coordinates: [-1.5944, -79.0019], country: 'Ecuador', population: 25000 },
            { name: 'Quito', coordinates: [-0.1807, -78.4678], country: 'Ecuador', population: 2800000 }
        ],
        
        flora: ['Páramo Grassland', 'Chuquiraga', 'Polylepis Forest', 'Espeletia', 'Cushion Plants'],
        fauna: ['Vicuña (Reintroduced)', 'Andean Condor', 'Spectacled Bear', 'Andean Fox', 'Andean Gull', 'Carunculated Caracara'],
        
        economicImportance: [
            { label: 'National Symbol', value: 'Featured on Ecuador coat of arms and currency' },
            { label: 'Tourism', value: 'Major mountaineering and ecotourism destination' },
            { label: 'Vicuña Reserve', value: 'Successful vicuña reintroduction program' },
            { label: 'Ice Mining', value: 'Traditional ice harvesting from glaciers (hieleros)' }
        ],
        
        environmentalIssues: [
            { label: 'Rapid Glacier Loss', value: 'Glaciers have lost 60% volume since 1980s' },
            { label: 'Climate Vulnerability', value: 'Equatorial glaciers extremely sensitive to warming' },
            { label: 'Water Security', value: 'Meltwater important for regional agriculture' }
        ],
        
        conservation: [
            { label: 'Chimborazo Fauna Reserve', value: 'Protected reserve surrounds mountain' },
            { label: 'Vicuña Program', value: 'Successful reintroduction of vicuña' },
            { label: 'Glacier Monitoring', value: 'Active research on glacier dynamics' },
            { label: 'Cultural Protection', value: 'Traditional hieleros recognized as heritage' }
        ],
        
        historicalImportance: [
            { label: 'Whymper Conquest', value: 'Edward Whympers most famous expedition after Matterhorn' },
            { label: 'Humboldt Attempt', value: 'Alexander von Humboldt reached 5,878m in 1802' },
            { label: 'World Record', value: 'Thought highest mountain until Himalaya measured' },
            { label: 'Farthest from Earth Center', value: 'Due to equatorial bulge, summit most distant point from core' }
        ],
        
        records: [
            { record: 'Farthest from Earth Center', value: 'Summit 6,384km from center, farther than Everest' },
            { record: 'Closest to Sun', value: 'Point on Earth surface closest to sun' },
            { record: 'Highest Ecuador', value: 'Highest peak in Ecuador' },
            { record: 'Highest Prominence Americas', value: 'Fourth highest prominence in Western Hemisphere' }
        ],
        
        deathZone: false,
        technicalClimbing: true,
        permitRequired: true,
        sevenSummit: false,
        eightThousander: false
    },

    // 56. Cotopaxi
    {
        id: 'cotopaxi',
        name: 'Cotopaxi',
        localNames: [
            { language: 'Quechua', name: 'Cotopaxi' }
        ],
        countries: [
            { name: 'Ecuador', code: 'EC' }
        ],
        continent: 'South America',
        mountainRange: 'Andes',
        subRange: 'Cordillera Oriental (Ecuador)',
        elevation: 5897,
        prominence: 2260,
        isolation: 52,
        coordinates: [-0.6839, -78.4378],
        defaultZoom: 12,
        image: 'https://images.unsplash.com/photo-1517483000871-1dbf64a6e1c6?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1517483000871-1dbf64a6e1c6?w=1920&q=80',
        
        formation: {
            type: 'Stratovolcano (Active)',
            age: 'Current cone ~5,000 years',
            tectonicPlates: ['Nazca Plate', 'South American Plate'],
            process: 'One of worlds highest active volcanoes. Perfect symmetrical cone with large crater. Frequent eruptions throughout history, most recently 2015. Lahars from eruptions have devastated valleys.'
        },
        
        climbing: {
            firstAscent: {
                date: 'November 28, 1872',
                climbers: ['Wilhelm Reiss', 'Ángel Escobar'],
                route: 'Northwest Face',
                expedition: 'German geologist Reiss with Ecuadorian guide during scientific expedition.'
            },
            totalAscents: 10000,
            fatalities: 25,
            successRate: '75%',
            bestSeason: 'December to January, June to September',
            difficulty: 'PD',
            routes: [
                { name: 'Normal Route (North Face)', country: 'Ecuador', difficulty: 'PD', description: 'Most popular, straightforward glacier climb from refuge' },
                { name: 'Yanasacha Route', country: 'Ecuador', difficulty: 'PD+', description: 'West side variation with rock band' },
                { name: 'South Face', country: 'Ecuador', difficulty: 'AD', description: 'Less traveled, steeper ice' },
                { name: 'Direct North Face', country: 'Ecuador', difficulty: 'AD', description: 'More direct line avoiding traverse' }
            ]
        },
        
        climate: {
            summitTemperature: '-10°C average',
            winterLow: '-20°C',
            summerHigh: '-2°C',
            snowfall: 'Regular snowfall maintaining glacier',
            winds: 'Generally moderate',
            deathZone: 'Not applicable'
        },
        
        glaciers: [
            { name: 'Northern Glacier', length: '3 km', description: 'Main climbing route glacier' },
            { name: 'Yanasacha Glacier', length: '2 km', description: 'Western glacier with crevasses' },
            { name: 'Southern Glacier', length: '2.5 km', description: 'South side glacier system' }
        ],
        
        baseCamps: [
            { name: 'José Ribas Refuge', elevation: 4864, country: 'Ecuador', coordinates: [-0.6625, -78.4361] },
            { name: 'Parking Lot (Trailhead)', elevation: 4600, country: 'Ecuador', coordinates: [-0.6500, -78.4417] },
            { name: 'Camp Cara Norte', elevation: 5100, country: 'Ecuador', coordinates: [-0.6722, -78.4389] }
        ],
        
        nearbyPeaks: [
            { name: 'Rumiñahui', elevation: 4722, coordinates: [-0.6167, -78.4833] },
            { name: 'Sincholagua', elevation: 4893, coordinates: [-0.5333, -78.3667] },
            { name: 'Antisana', elevation: 5758, coordinates: [-0.4833, -78.1417] },
            { name: 'Pasochoa', elevation: 4200, coordinates: [-0.4500, -78.4833] }
        ],
        
        nearbyCities: [
            { name: 'Latacunga', coordinates: [-0.9346, -78.6167], country: 'Ecuador', population: 170000 },
            { name: 'Machachi', coordinates: [-0.5167, -78.5667], country: 'Ecuador', population: 30000 },
            { name: 'Quito', coordinates: [-0.1807, -78.4678], country: 'Ecuador', population: 2800000 },
            { name: 'Ambato', coordinates: [-1.2417, -78.6197], country: 'Ecuador', population: 330000 }
        ],
        
        flora: ['Páramo Grassland', 'Chuquiraga', 'Polylepis', 'Espeletia', 'Stipa Ichu'],
        fauna: ['Andean Condor', 'Wild Horses', 'White-tailed Deer', 'Andean Fox', 'Spectacled Bear', 'Curiquingue'],
        
        economicImportance: [
            { label: 'Tourism Icon', value: 'Most visited national park in Ecuador' },
            { label: 'Mountaineering School', value: 'Popular training peak for high altitude' },
            { label: 'National Symbol', value: 'Featured in Ecuadorian art and culture' },
            { label: 'Water Resource', value: 'Glacier melt supplies water to region' }
        ],
        
        environmentalIssues: [
            { label: 'Volcanic Risk', value: 'Active volcano, 2015 eruption forced evacuations' },
            { label: 'Glacial Retreat', value: 'Glaciers shrinking significantly' },
            { label: 'Tourism Impact', value: 'High visitor numbers affecting environment' },
            { label: 'Lahar Danger', value: 'Eruption could trigger deadly mudflows' }
        ],
        
        conservation: [
            { label: 'Cotopaxi National Park', value: 'Protected since 1975' },
            { label: 'Visitor Management', value: 'Climbing permits and guide requirements' },
            { label: 'Volcanic Monitoring', value: 'Active seismic and volcanic surveillance' },
            { label: 'Wildlife Protection', value: 'Wild horse and condor habitat protected' }
        ],
        
        historicalImportance: [
            { label: 'Sacred Volcano', value: 'Indigenous people considered it throat of fire' },
            { label: 'Humboldt Visit', value: 'Alexander von Humboldt attempted ascent in 1802' },
            { label: 'Deadly History', value: 'Eruptions have killed thousands over centuries' },
            { label: 'Avenue of Volcanoes', value: 'Part of famous volcanic corridor named by Humboldt' }
        ],
        
        records: [
            { record: 'Perfect Cone', value: 'One of most symmetrical volcanic cones on Earth' },
            { record: 'Highest Active Volcano', value: 'Among highest active volcanoes in world' },
            { record: 'Most Climbed Ecuador', value: 'Most frequently climbed peak in Ecuador' },
            { record: 'Iconic Profile', value: 'Most photographed mountain in Ecuador' }
        ],
        
        deathZone: false,
        technicalClimbing: false,
        permitRequired: true,
        sevenSummit: false,
        eightThousander: false
    },

    // 57. Mount Logan
    {
        id: 'mount-logan',
        name: 'Mount Logan',
        localNames: [
            { language: 'Southern Tutchone', name: 'Shäwshe' }
        ],
        countries: [
            { name: 'Canada', code: 'CA' }
        ],
        continent: 'North America',
        mountainRange: 'Saint Elias Mountains',
        subRange: 'Icefield Ranges',
        elevation: 5959,
        prominence: 5250,
        isolation: 623,
        coordinates: [60.5672, -140.4056],
        defaultZoom: 10,
        image: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d9?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d9?w=1920&q=80',
        
        formation: {
            type: 'Fold Mountain / Uplifted Block',
            age: '10-20 million years',
            tectonicPlates: ['Pacific Plate', 'North American Plate'],
            process: 'Formed by collision of Pacific and North American plates creating massive uplift. Largest mountain base of any non-volcanic mountain on Earth. Still rising due to tectonic forces and glacial rebound.'
        },
        
        climbing: {
            firstAscent: {
                date: 'June 23, 1925',
                climbers: ['Albert MacCarthy', 'Norman Read', 'William Foster', 'Allen Carpé', 'Frederick Lambart', 'Andy Taylor'],
                route: 'King Trench',
                expedition: 'Canadian-American expedition after several failures, led by MacCarthy.'
            },
            totalAscents: 500,
            fatalities: 15,
            successRate: '50%',
            bestSeason: 'May to July',
            difficulty: 'AD to D',
            routes: [
                { name: 'King Trench', country: 'Canada', difficulty: 'AD', description: 'Normal route, long glacier approach, altitude and weather main challenges' },
                { name: 'East Ridge', country: 'Canada', difficulty: 'AD+', description: 'Alternative with more technical sections' },
                { name: 'Hummingbird Ridge', country: 'Canada', difficulty: 'ED', description: 'Extreme technical route, rarely completed' },
                { name: 'South Pillar', country: 'Canada', difficulty: 'TD', description: 'Serious alpine route on south face' }
            ]
        },
        
        climate: {
            summitTemperature: '-35°C average',
            winterLow: '-60°C',
            summerHigh: '-20°C',
            snowfall: 'Extremely heavy, up to 10+ meters annually',
            winds: 'Severe storms from Pacific, can be extreme',
            deathZone: 'Not applicable but extreme cold comparable to 8000ers'
        },
        
        glaciers: [
            { name: 'Hubbard Glacier', length: '122 km', description: 'Largest tidewater glacier in North America' },
            { name: 'Logan Glacier', length: '50 km', description: 'Main glacier on southern approach' },
            { name: 'Seward Glacier', length: '65 km', description: 'Major glacier system on mountain' },
            { name: 'Kaskawulsh Glacier', length: '70 km', description: 'Large glacier northeast of peak' }
        ],
        
        baseCamps: [
            { name: 'King Trench Base Camp', elevation: 2700, country: 'Canada', coordinates: [60.5000, -140.5000] },
            { name: 'Prospector Col Camp', elevation: 4000, country: 'Canada', coordinates: [60.5333, -140.4333] },
            { name: 'High Camp', elevation: 5000, country: 'Canada', coordinates: [60.5556, -140.4167] }
        ],
        
        nearbyPeaks: [
            { name: 'Mount Saint Elias', elevation: 5489, coordinates: [60.2933, -140.9261] },
            { name: 'King Peak', elevation: 5173, coordinates: [60.5856, -140.4894] },
            { name: 'Mount Lucania', elevation: 5226, coordinates: [61.0167, -140.4000] },
            { name: 'Mount Vancouver', elevation: 4812, coordinates: [60.7556, -139.6875] }
        ],
        
        nearbyCities: [
            { name: 'Haines Junction', coordinates: [60.7521, -137.5109], country: 'Canada', population: 600 },
            { name: 'Whitehorse', coordinates: [60.7212, -135.0538], country: 'Canada', population: 25000 },
            { name: 'Yakutat', coordinates: [59.5469, -139.7272], country: 'USA', population: 600 },
            { name: 'Juneau', coordinates: [58.3019, -134.4197], country: 'USA', population: 32000 }
        ],
        
        flora: ['Arctic Willow', 'Moss', 'Lichen', 'Alpine Fireweed', 'Mountain Avens'],
        fauna: ['Grizzly Bear', 'Dall Sheep', 'Mountain Goat', 'Wolverine', 'Golden Eagle', 'Ptarmigan'],
        
        economicImportance: [
            { label: 'Canadian Icon', value: 'Highest peak in Canada, national symbol' },
            { label: 'Extreme Tourism', value: 'Draws elite mountaineers worldwide' },
            { label: 'Scientific Research', value: 'Ice core samples provide climate data' },
            { label: 'Kluane National Park', value: 'Part of UNESCO World Heritage Site' }
        ],
        
        environmentalIssues: [
            { label: 'Glacier Retreat', value: 'Major glaciers losing mass' },
            { label: 'Climate Change', value: 'Warming Arctic affects mountain ecosystems' },
            { label: 'Access Impact', value: 'Increased fly-in traffic to base camp' }
        ],
        
        conservation: [
            { label: 'Kluane National Park', value: 'Protected within national park and reserve' },
            { label: 'UNESCO World Heritage', value: 'Part of Kluane/Wrangell-St.Elias site' },
            { label: 'Wilderness Preservation', value: 'One of largest protected wilderness areas' },
            { label: 'First Nations Partnership', value: 'Co-managed with Champagne and Aishihik First Nations' }
        ],
        
        historicalImportance: [
            { label: 'Named for Geologist', value: 'Named after Sir William Edmond Logan, founder of GSC' },
            { label: 'Exploration History', value: 'Not even seen until 1890 due to remote location' },
            { label: 'Epic First Ascent', value: '65-day expedition in 1925' },
            { label: 'Cold War Research', value: 'Used for high-altitude cold weather testing' }
        ],
        
        records: [
            { record: 'Highest Canada', value: 'At 5,959m, highest peak in Canada' },
            { record: 'Largest Base Circumference', value: 'Largest base of any non-volcanic mountain' },
            { record: 'Second Highest North America', value: 'Second only to Denali' },
            { record: 'Extreme Cold', value: 'Coldest temperatures recorded on major climbing route' }
        ],
        
        deathZone: false,
        technicalClimbing: true,
        permitRequired: true,
        sevenSummit: false,
        eightThousander: false
    }
];
// mountains-data-6.js - Part C: Mountains 58-60

const MOUNTAINS_DATA_6_PART_C = [
    // 58. Mount Saint Elias
    {
        id: 'mount-saint-elias',
        name: 'Mount Saint Elias',
        localNames: [
            { language: 'Tlingit', name: 'Yasʼéitʼaa Shaa' }
        ],
        countries: [
            { name: 'United States', code: 'US' },
            { name: 'Canada', code: 'CA' }
        ],
        continent: 'North America',
        mountainRange: 'Saint Elias Mountains',
        subRange: 'Chugach-Saint Elias Mountains',
        elevation: 5489,
        prominence: 3429,
        isolation: 40.6,
        coordinates: [60.2933, -140.9261],
        defaultZoom: 11,
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80',
        
        formation: {
            type: 'Fold Mountain / Tectonic Uplift',
            age: '10-20 million years',
            tectonicPlates: ['Pacific Plate', 'North American Plate'],
            process: 'Formed by collision of Pacific and North American plates along Fairweather-Queen Charlotte fault system. Among fastest rising mountains on Earth due to active tectonics. Rises dramatically from sea level.'
        },
        
        climbing: {
            firstAscent: {
                date: 'July 31, 1897',
                climbers: ['Prince Luigi Amedeo di Savoia', 'Filippo De Filippi', 'Vittorio Sella', 'Umberto Cagni'],
                route: 'Newton-Abruzzi Ridge',
                expedition: 'Italian expedition led by Duke of Abruzzi, a major mountaineering achievement of era.'
            },
            totalAscents: 200,
            fatalities: 12,
            successRate: '40%',
            bestSeason: 'May to July',
            difficulty: 'D to TD',
            routes: [
                { name: 'Abruzzi Ridge (Normal)', country: 'USA/Canada', difficulty: 'D', description: 'Classic route, long and committing, weather dependent' },
                { name: 'South Ridge', country: 'USA', difficulty: 'TD', description: 'More technical variation' },
                { name: 'North Ridge', country: 'Canada', difficulty: 'D+', description: 'Alternative from Canadian side' },
                { name: 'Harvard Route', country: 'USA', difficulty: 'TD', description: 'Technical mixed climbing' }
            ]
        },
        
        climate: {
            summitTemperature: '-30°C average',
            winterLow: '-50°C',
            summerHigh: '-15°C',
            snowfall: 'Extremely heavy, Pacific storms bring massive precipitation',
            winds: 'Severe, storms can last weeks',
            deathZone: 'Not applicable but extreme conditions'
        },
        
        glaciers: [
            { name: 'Malaspina Glacier', length: '65 km', description: 'Largest piedmont glacier in world, south of peak' },
            { name: 'Newton Glacier', length: '25 km', description: 'Approach glacier for normal route' },
            { name: 'Tyndall Glacier', length: '30 km', description: 'West side glacier system' }
        ],
        
        baseCamps: [
            { name: 'Newton Glacier Camp', elevation: 2100, country: 'USA', coordinates: [60.2500, -140.9000] },
            { name: 'Haydon Col Camp', elevation: 3300, country: 'USA', coordinates: [60.2750, -140.9167] },
            { name: 'High Camp', elevation: 4500, country: 'USA/Canada', coordinates: [60.2850, -140.9200] }
        ],
        
        nearbyPeaks: [
            { name: 'Mount Logan', elevation: 5959, coordinates: [60.5672, -140.4056] },
            { name: 'Mount Cook (Canada)', elevation: 4194, coordinates: [60.1833, -139.9833] },
            { name: 'Mount Augusta', elevation: 4289, coordinates: [60.3167, -140.4500] },
            { name: 'Mount Vancouver', elevation: 4812, coordinates: [60.7556, -139.6875] }
        ],
        
        nearbyCities: [
            { name: 'Yakutat', coordinates: [59.5469, -139.7272], country: 'USA', population: 600 },
            { name: 'Haines Junction', coordinates: [60.7521, -137.5109], country: 'Canada', population: 600 },
            { name: 'Cordova', coordinates: [60.5425, -145.7575], country: 'USA', population: 2200 },
            { name: 'Juneau', coordinates: [58.3019, -134.4197], country: 'USA', population: 32000 }
        ],
        
        flora: ['Arctic Willow', 'Alpine Moss', 'Lichen', 'Mountain Heather', 'Fireweed'],
        fauna: ['Grizzly Bear', 'Black Bear', 'Dall Sheep', 'Mountain Goat', 'Bald Eagle', 'Harbor Seal'],
        
        economicImportance: [
            { label: 'Extreme Mountaineering', value: 'Elite destination for experienced climbers' },
            { label: 'First North American Sighting', value: 'First named mountain in Alaska (1741)' },
            { label: 'Border Peak', value: 'Straddles US-Canada boundary' },
            { label: 'Research Site', value: 'Climate and glaciology studies' }
        ],
        
        environmentalIssues: [
            { label: 'Glacial Retreat', value: 'Massive glaciers losing volume' },
            { label: 'Changing Routes', value: 'Icefalls becoming more dangerous' },
            { label: 'Seismic Activity', value: 'Active tectonic zone creates hazards' }
        ],
        
        conservation: [
            { label: 'Wrangell-St. Elias NP', value: 'Part of largest US national park' },
            { label: 'Kluane National Park', value: 'Canadian side protected' },
            { label: 'UNESCO World Heritage', value: 'Part of massive protected area' },
            { label: 'Wilderness Preservation', value: 'Minimal human impact maintained' }
        ],
        
        historicalImportance: [
            { label: 'First Sighted 1741', value: 'Bering expedition named it on St. Elias Day' },
            { label: 'Duke of Abruzzi', value: 'Historic first ascent by Italian prince' },
            { label: 'First Major Alaska Climb', value: 'First major peak climbed in Alaska' },
            { label: 'Rise from Sea', value: 'Greatest topographic rise from base to summit on Earth' }
        ],
        
        records: [
            { record: 'Second Highest USA', value: 'Second highest peak in United States' },
            { record: 'Greatest Rise from Sea', value: 'Rises 5,489m in just 16km from ocean' },
            { record: 'First Alaska Peak Named', value: 'First mountain named in Alaska (1741)' },
            { record: 'Highest Border Peak', value: 'Highest peak on US-Canada border' }
        ],
        
        deathZone: false,
        technicalClimbing: true,
        permitRequired: true,
        sevenSummit: false,
        eightThousander: false
    },

    // 59. Pico de Orizaba
    {
        id: 'pico-de-orizaba',
        name: 'Pico de Orizaba',
        localNames: [
            { language: 'Nahuatl', name: 'Citlaltépetl (Star Mountain)' },
            { language: 'Spanish', name: 'Pico de Orizaba' }
        ],
        countries: [
            { name: 'Mexico', code: 'MX' }
        ],
        continent: 'North America',
        mountainRange: 'Trans-Mexican Volcanic Belt',
        subRange: 'Sierra Madre Oriental',
        elevation: 5636,
        prominence: 4922,
        isolation: 1041,
        coordinates: [19.0303, -97.2683],
        defaultZoom: 12,
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
        
        formation: {
            type: 'Stratovolcano (Dormant)',
            age: 'Current cone ~16,000 years',
            tectonicPlates: ['Cocos Plate', 'North American Plate'],
            process: 'Formed by subduction of Cocos Plate beneath North American Plate. Part of Trans-Mexican Volcanic Belt. Last eruption in 1846. Summit crater partially filled with glacier ice.'
        },
        
        climbing: {
            firstAscent: {
                date: '1848',
                climbers: ['French and Mexican expedition'],
                route: 'Jamapa Glacier Route',
                expedition: 'Joint French-Mexican team during scientific survey.'
            },
            totalAscents: 15000,
            fatalities: 30,
            successRate: '80%',
            bestSeason: 'November to March (dry season)',
            difficulty: 'PD',
            routes: [
                { name: 'Jamapa Glacier (Normal)', country: 'Mexico', difficulty: 'PD', description: 'Most popular, straightforward glacier climb' },
                { name: 'Northern Glacier', country: 'Mexico', difficulty: 'PD+', description: 'Alternative from north, steeper' },
                { name: 'South Face', country: 'Mexico', difficulty: 'AD', description: 'More technical ice climbing' },
                { name: 'West Face', country: 'Mexico', difficulty: 'AD', description: 'Less crowded alternative' }
            ]
        },
        
        climate: {
            summitTemperature: '-10°C average',
            winterLow: '-25°C',
            summerHigh: '0°C',
            snowfall: 'Moderate, tropical latitude limits snow',
            winds: 'Generally moderate but can be strong',
            deathZone: 'Not applicable'
        },
        
        glaciers: [
            { name: 'Gran Glaciar Norte (Jamapa)', length: '1 km', description: 'Largest remaining glacier, shrinking rapidly' },
            { name: 'Glaciar de Chichimeco', length: '0.5 km', description: 'Small glacier on west side' },
            { name: 'Glaciar del Sureste', length: '0.3 km', description: 'Remnant glacier on southeast' }
        ],
        
        baseCamps: [
            { name: 'Piedra Grande Hut', elevation: 4270, country: 'Mexico', coordinates: [19.0500, -97.2667] },
            { name: 'Tlachichuca Approach', elevation: 2600, country: 'Mexico', coordinates: [18.9833, -97.4167] },
            { name: 'High Camp (informal)', elevation: 4800, country: 'Mexico', coordinates: [19.0400, -97.2700] }
        ],
        
        nearbyPeaks: [
            { name: 'Sierra Negra', elevation: 4640, coordinates: [18.9833, -97.3167] },
            { name: 'Iztaccíhuatl', elevation: 5230, coordinates: [19.1794, -98.6417] },
            { name: 'Popocatépetl', elevation: 5426, coordinates: [19.0225, -98.6233] },
            { name: 'La Malinche', elevation: 4461, coordinates: [19.2333, -98.0333] }
        ],
        
        nearbyCities: [
            { name: 'Orizaba', coordinates: [18.8500, -97.1000], country: 'Mexico', population: 120000 },
            { name: 'Tlachichuca', coordinates: [18.9833, -97.4167], country: 'Mexico', population: 8000 },
            { name: 'Puebla', coordinates: [19.0414, -98.2063], country: 'Mexico', population: 1500000 },
            { name: 'Córdoba', coordinates: [18.8833, -96.9333], country: 'Mexico', population: 200000 }
        ],
        
        flora: ['Pine Forest', 'Oyamel Fir', 'Alpine Bunchgrass', 'Juniper', 'High Altitude Shrubs'],
        fauna: ['White-tailed Deer', 'Coyote', 'Bobcat', 'Red-tailed Hawk', 'Gopher Snake', 'Volcano Rabbit'],
        
        economicImportance: [
            { label: 'Mountaineering Tourism', value: 'Major destination for North American climbers' },
            { label: 'Water Source', value: 'Glacial melt supplies regional water' },
            { label: 'Scientific Observatory', value: 'Large Millimeter Telescope on Sierra Negra' },
            { label: 'Cultural Icon', value: 'Symbol of Veracruz state' }
        ],
        
        environmentalIssues: [
            { label: 'Critical Glacier Loss', value: 'Glaciers lost 80% since 1958, may disappear by 2030' },
            { label: 'Water Security', value: 'Glacier loss threatens water supply' },
            { label: 'Climate Change', value: 'Rapid warming affecting ecosystem' },
            { label: 'Forest Pressure', value: 'Illegal logging on lower slopes' }
        ],
        
        conservation: [
            { label: 'Pico de Orizaba National Park', value: 'Protected area since 1936' },
            { label: 'Glacier Monitoring', value: 'Active research on glacier dynamics' },
            { label: 'Reforestation', value: 'Programs to restore forest cover' },
            { label: 'Access Management', value: 'Fees support conservation' }
        ],
        
        historicalImportance: [
            { label: 'Sacred Mountain', value: 'Aztec considered it gateway to afterlife' },
            { label: 'Cortés Expedition', value: 'Spanish conquistadors crossed nearby pass' },
            { label: 'Observatory Site', value: 'Large Millimeter Telescope since 1997' },
            { label: 'Mexican Identity', value: 'Featured on Veracruz coat of arms' }
        ],
        
        records: [
            { record: 'Highest Mexico', value: 'Highest peak in Mexico at 5,636m' },
            { record: 'Third Highest North America', value: 'Third highest peak on continent' },
            { record: 'Highest Volcano North America', value: 'Tallest volcano in North America' },
            { record: 'Tropical Glaciers', value: 'Among northernmost tropical glaciers' }
        ],
        
        deathZone: false,
        technicalClimbing: false,
        permitRequired: true,
        sevenSummit: false,
        eightThousander: false
    },

       // 60. Mount Damavand (COMPLETE)
    {
        id: 'mount-damavand',
        name: 'Mount Damavand',
        localNames: [
            { language: 'Persian', name: 'دماوند (Damāvand)' },
            { language: 'English', name: 'Damavand' }
        ],
        countries: [
            { name: 'Iran', code: 'IR' }
        ],
        continent: 'Asia',
        mountainRange: 'Alborz Mountains',
        subRange: 'Central Alborz',
        elevation: 5610,
        prominence: 4667,
        isolation: 932,
        coordinates: [35.9516, 52.1095],
        defaultZoom: 12,
        image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=80',
        
        formation: {
            type: 'Stratovolcano (Potentially Active)',
            age: '70,000 years (current cone)',
            tectonicPlates: ['Arabian Plate', 'Eurasian Plate'],
            process: 'Formed by collision of Arabian and Eurasian plates pushing up Alborz range. Youngest volcano in range with fumaroles still active near summit. Symmetric cone rises dramatically above Iranian Plateau.'
        },
        
        climbing: {
            firstAscent: {
                date: 'Historical (ancient)',
                climbers: ['Unknown - local climbers'],
                route: 'South Face',
                expedition: 'First recorded European ascent by W.T. Thomson in 1837, but locals had climbed it for centuries.'
            },
            totalAscents: 50000,
            fatalities: 40,
            successRate: '85%',
            bestSeason: 'June to September',
            difficulty: 'PD (non-technical)',
            routes: [
                { name: 'South Route (Normal)', country: 'Iran', difficulty: 'PD', description: 'Most popular via Bargah Sevom shelter, non-technical walk-up' },
                { name: 'Northeast Route', country: 'Iran', difficulty: 'PD', description: 'Less crowded alternative via Nandal valley' },
                { name: 'West Route', country: 'Iran', difficulty: 'PD+', description: 'Via Abshar, more scenic' },
                { name: 'North Face', country: 'Iran', difficulty: 'AD', description: 'Steeper, winter ice climbing possible' }
            ]
        },
        
        climate: {
            summitTemperature: '-15°C average',
            winterLow: '-35°C',
            summerHigh: '0°C',
            snowfall: 'Moderate, snow from November to May',
            winds: 'Can be severe, especially in winter',
            deathZone: 'Not applicable'
        },
        
        glaciers: [
            { name: 'Summit Ice Patches', length: '0.3 km', description: 'Small permanent ice fields, no true glaciers' }
        ],
        
        baseCamps: [
            { name: 'Polour Village', elevation: 2300, country: 'Iran', coordinates: [35.8667, 52.0833] },
            { name: 'Bargah Sevom Shelter', elevation: 4250, country: 'Iran', coordinates: [35.9333, 52.1000] },
            { name: 'Old Shelter', elevation: 5000, country: 'Iran', coordinates: [35.9417, 52.1083] }
        ],
        
        nearbyPeaks: [
            { name: 'Dobarar', elevation: 4250, coordinates: [35.9667, 52.0500] },
            { name: 'Lashgarak', elevation: 4500, coordinates: [35.9000, 52.0333] },
            { name: 'Tochal', elevation: 3962, coordinates: [35.8333, 51.4167] },
            { name: 'Alam Kuh', elevation: 4848, coordinates: [36.3333, 50.9667] }
        ],
        
        nearbyCities: [
            { name: 'Tehran', coordinates: [35.6892, 51.3890], country: 'Iran', population: 9000000 },
            { name: 'Amol', coordinates: [36.4667, 52.3500], country: 'Iran', population: 230000 },
            { name: 'Polour', coordinates: [35.8667, 52.0833], country: 'Iran', population: 5000 },
            { name: 'Reyneh', coordinates: [35.8833, 52.0667], country: 'Iran', population: 3000 }
        ],
        
        flora: ['Alpine Cushion Plants', 'Mountain Grasses', 'Wild Flowers', 'Artemisia', 'Astragalus'],
        fauna: ['Persian Leopard', 'Wild Goat', 'Wild Sheep', 'Golden Eagle', 'Caspian Snowcock', 'Brown Bear'],
        
        economicImportance: [
            { label: 'National Symbol', value: 'Featured on Iranian currency and national identity' },
            { label: 'Mountaineering Hub', value: 'Most climbed peak in Middle East' },
            { label: 'Hot Springs', value: 'Larijan hot springs at base attract tourists' },
            { label: 'Ski Tourism', value: 'Nearby ski resorts benefit from proximity' }
        ],
        
        environmentalIssues: [
            { label: 'Volcanic Activity', value: 'Fumaroles emit sulfur gases near summit' },
            { label: 'Overcrowding', value: 'Popular routes see heavy traffic in season' },
            { label: 'Waste Management', value: 'Trash accumulation on popular routes' },
            { label: 'Climate Change', value: 'Snow cover decreasing over decades' }
        ],
        
        conservation: [
            { label: 'Protected Area', value: 'Damavand Protected Area managed by DOE Iran' },
            { label: 'Cultural Heritage', value: 'Recognized as national natural monument' },
            { label: 'Clean-up Campaigns', value: 'Regular volunteer efforts to remove trash' },
            { label: 'Access Management', value: 'Permits required to climb' }
        ],
        
        historicalImportance: [
            { label: 'Persian Mythology', value: 'Legendary prison of three-headed dragon Azhi Dahaka' },
            { label: 'Zoroastrian Sacred', value: 'Holy mountain in Zoroastrian tradition' },
            { label: 'Ferdowsi Shahnameh', value: 'Featured prominently in Persian epic poetry' },
            { label: 'National Identity', value: 'Symbol of Iranian strength and resistance' }
        ],
        
        records: [
            { record: 'Highest Iran', value: 'Highest peak in Iran at 5,610m' },
            { record: 'Highest Middle East Volcano', value: 'Tallest volcano in Middle East' },
            { record: 'Most Climbed Middle East', value: 'Most frequently climbed peak in region' },
            { record: 'Highest Asia Volcano', value: 'Highest volcano in Asia' }
        ],
        
        deathZone: false,
        technicalClimbing: false,
        permitRequired: true,
        sevenSummit: false,
        eightThousander: false
    }
];

// ============================================
// COMBINE ALL PARTS INTO MOUNTAINS_DATA_6
// ============================================

const MOUNTAINS_DATA_6 = [
    ...MOUNTAINS_DATA_6_PART_A,
    ...MOUNTAINS_DATA_6_PART_B,
    ...MOUNTAINS_DATA_6_PART_C
];

// Export for use in main data combiner
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { MOUNTAINS_DATA_6 };
}

console.log('Mountains Data 6 loaded:', MOUNTAINS_DATA_6.length, 'mountains (Andes & World Peaks)');
