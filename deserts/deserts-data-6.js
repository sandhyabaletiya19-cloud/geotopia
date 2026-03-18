/* ==========================================
   DESERTS DATA - FILE 6 OF 10
   Deserts 51-60
   ========================================== */

const DESERTS_DATA_6 = [
    // ========================================
    // #51 - DANAKIL DESERT
    // ========================================
    {
        id: 'danakil-desert',
        name: 'Danakil Desert',
        countries: [
            { name: 'Ethiopia', code: 'ET' },
            { name: 'Eritrea', code: 'ER' },
            { name: 'Djibouti', code: 'DJ' }
        ],
        continent: 'Africa',
        desertType: 'hot',
        area: 136956,
        rank: 51,
        coordinates: [14.2417, 40.3],
        defaultZoom: 7,
        image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Danakil Desert' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [39.5, 11.5], [39.5, 16.5], [43.0, 16.5], [43.0, 11.5], [39.5, 11.5]
                ]]
            }
        },
        
        climate: {
            summerTempMax: '55°C',
            summerTempAvg: '45°C',
            winterTempMin: '25°C',
            winterTempAvg: '35°C',
            maxRecorded: '55°C',
            annualRainfall: '<25mm',
            rainyMonths: 'Virtually none'
        },
        
        formation: {
            type: 'Rift valley desert',
            causes: ['Afar Triple Junction rifting', 'Below sea level depression', 'Extreme geothermal activity'],
            age: '~30 million years (rift formation)'
        },
        
        landforms: [
            { name: 'Danakil Depression', description: 'One of lowest points on Earth at -125m' },
            { name: 'Salt Flats', description: 'Vast salt plains kilometers thick' },
            { name: 'Lava Lakes', description: 'Persistent volcanic lava lakes' },
            { name: 'Hydrothermal Fields', description: 'Colorful hot springs and geysers' },
            { name: 'Volcanic Cones', description: 'Active and dormant volcanoes' }
        ],
        
        features: [
            { name: 'Erta Ale', type: 'Volcano', coordinates: [13.6, 40.67], description: 'Worlds oldest continuously active lava lake' },
            { name: 'Dallol', type: 'Hydrothermal', coordinates: [14.24, 40.3], description: 'Colorful hot springs, hottest inhabited place' },
            { name: 'Lake Assal', type: 'Salt lake', coordinates: [11.65, 42.42], description: 'Lowest point in Africa, 10x saltier than ocean' },
            { name: 'Lake Afrera', type: 'Salt lake', coordinates: [13.28, 40.85], description: 'Salt mining lake' },
            { name: 'Afar Triangle', type: 'Geological', coordinates: [12.0, 42.0], description: 'Triple junction where three plates meet' }
        ],
        
        oases: [
            { name: 'Ahmed Ela', coordinates: [14.08, 40.35], country: 'Ethiopia', population: 500 },
            { name: 'Hamed Ela', coordinates: [14.12, 40.32], country: 'Ethiopia', population: 200 }
        ],
        
        cities: [
            { name: 'Semera', coordinates: [11.79, 41.0], country: 'Ethiopia', population: 5000 },
            { name: 'Assab', coordinates: [13.0, 42.73], country: 'Eritrea', population: 100000 },
            { name: 'Djibouti City', coordinates: [11.59, 43.15], country: 'Djibouti', population: 600000 },
            { name: 'Mekele', coordinates: [13.5, 39.47], country: 'Ethiopia', population: 320000 }
        ],
        
        biodiversity: {
            plants: ['Virtually none in hottest areas', 'Salt-tolerant algae', 'Desert scrub on edges'],
            animals: ['Wild Ass', 'Ostriches', 'Gazelles', 'Hyenas', 'Extremophile microbes'],
            endangeredSpecies: ['African Wild Ass (critically endangered)', 'Grevy\'s Zebra']
        },
        
        humanLife: {
            peoples: ['Afar people'],
            lifestyle: 'Salt mining, camel caravans, nomadic herding',
            population: '~1.5 million Afar people'
        },
        
        economy: [
            { label: 'Salt Mining', value: 'Traditional salt extraction for centuries' },
            { label: 'Potash', value: 'Major potash deposits' },
            { label: 'Tourism', value: 'Extreme adventure tourism' },
            { label: 'Geothermal', value: 'Potential geothermal energy' }
        ],
        
        environmentalIssues: [
            { label: 'Extreme Heat', value: 'Hostile to most life' },
            { label: 'Volcanic Activity', value: 'Ongoing eruptions and earthquakes' },
            { label: 'Political Instability', value: 'Border conflicts affect access' },
            { label: 'Climate Change', value: 'Even more extreme conditions' }
        ],
        
        historicalImportance: [
            { label: 'Human Origins', value: 'Lucy (Australopithecus) found in Afar region' },
            { label: 'Salt Trade', value: 'Salt caravans for 2,000+ years' },
            { label: 'Geological Significance', value: 'Three tectonic plates meeting' },
            { label: 'Ottoman/Italian', value: 'Colonial history in region' }
        ],
        
        funFacts: [
            'Hottest place on Earth with year-round average above 34°C',
            'One of the lowest places on Earth at 125m below sea level',
            'Erta Ale volcano has had a lava lake for over 100 years',
            'Dallol holds the record for highest average annual temperature',
            'Three tectonic plates are pulling apart here - Africa is splitting',
            'Salt miners still use camels to carry salt blocks',
            'The colorful Dallol hot springs contain extremophile life',
            'Lucy, the famous 3.2 million-year-old fossil, was found nearby',
            'Temperatures of 50°C+ are common even in "winter"'
        ],
        
        journeyWaypoints: [
            { name: 'Mekele', coordinates: [13.5, 39.47], description: 'Gateway city to the Danakil' },
            { name: 'Hamed Ela', coordinates: [14.12, 40.32], description: 'Base camp for expeditions' },
            { name: 'Dallol', coordinates: [14.24, 40.3], description: 'Alien-like hot springs' },
            { name: 'Erta Ale', coordinates: [13.6, 40.67], description: 'Active lava lake volcano' },
            { name: 'Lake Afrera', coordinates: [13.28, 40.85], description: 'Salt lake and mining' }
        ]
    },

    // ========================================
    // #52 - BADAIN JARAN DESERT
    // ========================================
    {
        id: 'badain-jaran-desert',
        name: 'Badain Jaran Desert',
        countries: [
            { name: 'China', code: 'CN' }
        ],
        continent: 'Asia',
        desertType: 'cold',
        area: 49000,
        rank: 52,
        coordinates: [40.0, 102.0],
        defaultZoom: 7,
        image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Badain Jaran Desert' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [99.5, 38.5], [99.5, 42.0], [104.5, 42.0], [104.5, 38.5], [99.5, 38.5]
                ]]
            }
        },
        
        climate: {
            summerTempMax: '40°C',
            summerTempAvg: '28°C',
            winterTempMin: '-30°C',
            winterTempAvg: '-10°C',
            maxRecorded: '43°C',
            annualRainfall: '40-80mm',
            rainyMonths: 'Summer (July-August, sparse)'
        },
        
        formation: {
            type: 'Sand sea desert',
            causes: ['Wind accumulation', 'Gobi Desert system', 'Blocked by Qilian Mountains'],
            age: '~1 million years'
        },
        
        landforms: [
            { name: 'Mega Dunes', description: 'Tallest stationary dunes on Earth, up to 500m' },
            { name: 'Inter-dune Lakes', description: 'Over 140 permanent freshwater lakes' },
            { name: 'Star Dunes', description: 'Complex multi-armed dune formations' },
            { name: 'Sand Mountains', description: 'Massive sand accumulations' }
        ],
        
        features: [
            { name: 'Bilutu Peak', type: 'Mega dune', coordinates: [39.7, 102.4], description: 'Tallest dune at 500m, tallest on Earth' },
            { name: 'Sumin Jaran Lake', type: 'Lake', coordinates: [39.8, 102.5], description: 'Sacred lake with temple' },
            { name: 'Baoritaolegai', type: 'Lake', coordinates: [39.75, 102.35], description: 'Freshwater lake amid dunes' },
            { name: 'Temples', type: 'Religious', coordinates: [39.78, 102.45], description: 'Tibetan Buddhist temples on lakeshores' }
        ],
        
        oases: [
            { name: 'Alxa Right Banner', coordinates: [39.2, 101.67], country: 'China', population: 25000 }
        ],
        
        cities: [
            { name: 'Alxa Right Banner', coordinates: [39.2, 101.67], country: 'China', population: 25000 },
            { name: 'Zhangye', coordinates: [38.93, 100.45], country: 'China', population: 500000 },
            { name: 'Jiuquan', coordinates: [39.74, 98.5], country: 'China', population: 1100000 }
        ],
        
        biodiversity: {
            plants: ['Saxaul', 'Ephedra', 'Reaumuria', 'Sparse desert grasses'],
            animals: ['Bactrian Camel', 'Goitered Gazelle', 'Sand Fox', 'Desert Hedgehog', 'Golden Eagles'],
            endangeredSpecies: ['Wild Bactrian Camel (critically endangered)', 'Gobi Bear (edges)']
        },
        
        humanLife: {
            peoples: ['Mongolian', 'Han Chinese'],
            lifestyle: 'Nomadic herding, tourism, camel breeding',
            population: '~50,000 in surrounding areas'
        },
        
        economy: [
            { label: 'Tourism', value: 'Growing adventure tourism' },
            { label: 'Camel Herding', value: 'Traditional Bactrian camel breeding' },
            { label: 'Mining', value: 'Some mineral extraction' },
            { label: 'Research', value: 'Scientific desert studies' }
        ],
        
        environmentalIssues: [
            { label: 'Water Mystery', value: 'Source of lake water still debated' },
            { label: 'Climate Change', value: 'Some lakes shrinking' },
            { label: 'Tourism Impact', value: 'Increasing visitors to fragile area' },
            { label: 'Desertification', value: 'Edges expanding' }
        ],
        
        historicalImportance: [
            { label: 'Silk Road', value: 'Northern route passed nearby' },
            { label: 'Tibetan Buddhism', value: 'Sacred temples by lakes' },
            { label: 'Mongol Empire', value: 'Historical Mongolian territory' },
            { label: 'Scientific Mystery', value: 'Lake water source still unexplained' }
        ],
        
        funFacts: [
            'Contains the tallest stationary sand dunes on Earth at 500m',
            'Has over 140 lakes among the dunes - origin unknown',
            'Lakes are freshwater despite no visible water source',
            'Dunes are so tall they are called "sand mountains"',
            'Tibetan temples sit on lake shores in the desert',
            'Scientists still debate where the lake water comes from',
            'Dunes "boom" or "sing" when sand slides down',
            'One of the most mysterious deserts on Earth'
        ],
        
        journeyWaypoints: [
            { name: 'Alxa Right Banner', coordinates: [39.2, 101.67], description: 'Gateway town' },
            { name: 'Desert Edge', coordinates: [39.5, 102.0], description: 'Entry to sand sea' },
            { name: 'Lake District', coordinates: [39.78, 102.45], description: 'Lakes and temples' },
            { name: 'Bilutu Peak', coordinates: [39.7, 102.4], description: 'Worlds tallest dune' },
            { name: 'Eastern Dunes', coordinates: [40.0, 103.0], description: 'Remote sand mountains' }
        ]
    },

    // ========================================
    // #53 - TENGGER DESERT
    // ========================================
    {
        id: 'tengger-desert',
        name: 'Tengger Desert',
        countries: [
            { name: 'China', code: 'CN' }
        ],
        continent: 'Asia',
        desertType: 'cold',
        area: 42700,
        rank: 53,
        coordinates: [38.5, 105.0],
        defaultZoom: 7,
        image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Tengger Desert' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [103.0, 37.0], [103.0, 40.5], [107.0, 40.5], [107.0, 37.0], [103.0, 37.0]
                ]]
            }
        },
        
        climate: {
            summerTempMax: '38°C',
            summerTempAvg: '25°C',
            winterTempMin: '-25°C',
            winterTempAvg: '-8°C',
            maxRecorded: '42°C',
            annualRainfall: '100-200mm',
            rainyMonths: 'Summer (July-September)'
        },
        
        formation: {
            type: 'Lattice dune desert',
            causes: ['Wind erosion from Gobi', 'Yellow River influence', 'Continental climate'],
            age: '~10,000 years (current form)'
        },
        
        landforms: [
            { name: 'Lattice Dunes', description: 'Unique crisscross dune patterns' },
            { name: 'Barchan Dunes', description: 'Crescent-shaped moving dunes' },
            { name: 'Oasis Lakes', description: 'Desert lakes from Yellow River' },
            { name: 'Gravel Flats', description: 'Stone-covered plains' }
        ],
        
        features: [
            { name: 'Shapotou', type: 'Tourist area', coordinates: [37.45, 105.0], description: 'Famous desert tourism site' },
            { name: 'Tengger Lakes', type: 'Lakes', coordinates: [38.5, 105.0], description: 'Series of desert lakes' },
            { name: 'Yellow River Bend', type: 'River', coordinates: [37.5, 105.0], description: 'River touching desert' },
            { name: 'Sand Control Station', type: 'Research', coordinates: [37.45, 104.95], description: 'Pioneering desertification research' }
        ],
        
        oases: [
            { name: 'Zhongwei', coordinates: [37.52, 105.2], country: 'China', population: 400000 },
            { name: 'Alxa Left Banner', coordinates: [38.83, 105.67], country: 'China', population: 60000 }
        ],
        
        cities: [
            { name: 'Zhongwei', coordinates: [37.52, 105.2], country: 'China', population: 400000 },
            { name: 'Yinchuan', coordinates: [38.47, 106.27], country: 'China', population: 2200000 },
            { name: 'Wuwei', coordinates: [37.93, 102.64], country: 'China', population: 500000 }
        ],
        
        biodiversity: {
            plants: ['Saxaul', 'Tamarisk', 'Ephedra', 'Desert Willow', 'Straw Checkerboard plants'],
            animals: ['Bactrian Camel', 'Desert Fox', 'Jerboas', 'Steppe Eagle', 'Long-eared Hedgehog'],
            endangeredSpecies: ['Przewalski\'s Horse (reintroduced nearby)', 'Goitered Gazelle']
        },
        
        humanLife: {
            peoples: ['Han Chinese', 'Hui', 'Mongolian'],
            lifestyle: 'Tourism, farming on edges, research',
            population: '~1 million in surrounding region'
        },
        
        economy: [
            { label: 'Tourism', value: 'Shapotou is major destination' },
            { label: 'Agriculture', value: 'Yellow River irrigation farming' },
            { label: 'Research', value: 'Desertification control center' },
            { label: 'Solar Energy', value: 'Large solar installations' }
        ],
        
        environmentalIssues: [
            { label: 'Desertification', value: 'Historical expansion into farmland' },
            { label: 'Success Story', value: 'Checkerboard barriers stopped spread' },
            { label: 'Water Scarcity', value: 'Yellow River overused' },
            { label: 'Climate Change', value: 'Changing rainfall patterns' }
        ],
        
        historicalImportance: [
            { label: 'Silk Road', value: 'Major route passed through' },
            { label: 'Xixia Dynasty', value: 'Western Xia capital nearby' },
            { label: 'Sand Control', value: 'Pioneered straw checkerboard method' },
            { label: 'Railway Protection', value: 'Baotou-Lanzhou railway protected' }
        ],
        
        funFacts: [
            'Chinese scientists invented the straw checkerboard to stop sand',
            'The technique has been exported to deserts worldwide',
            'Shapotou has sand sliding, rafting, and camel rides',
            'The Yellow River touches the desert creating unique oases',
            'Home to Chinas desert research and control center',
            'Lattice dunes create unique geometric patterns',
            'Successfully stopped desert from burying the railway',
            'Tourism destination for over 2 million visitors annually'
        ],
        
        journeyWaypoints: [
            { name: 'Zhongwei', coordinates: [37.52, 105.2], description: 'Gateway city' },
            { name: 'Shapotou', coordinates: [37.45, 105.0], description: 'Famous tourist area' },
            { name: 'Yellow River Crossing', coordinates: [37.5, 105.0], description: 'River meets desert' },
            { name: 'Central Tengger', coordinates: [38.5, 105.0], description: 'Deep desert lakes' },
            { name: 'Northern Edge', coordinates: [39.5, 105.0], description: 'Transition to grassland' }
        ]
    },

    // ========================================
    // #54 - ORDOS DESERT
    // ========================================
    {
        id: 'ordos-desert',
        name: 'Ordos Desert',
        countries: [
            { name: 'China', code: 'CN' }
        ],
        continent: 'Asia',
        desertType: 'cold',
        area: 90650,
        rank: 54,
        coordinates: [39.5, 109.0],
        defaultZoom: 6,
        image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Ordos Desert' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [106.0, 37.5], [106.0, 41.0], [112.0, 41.0], [112.0, 37.5], [106.0, 37.5]
                ]]
            }
        },
        
        climate: {
            summerTempMax: '38°C',
            summerTempAvg: '24°C',
            winterTempMin: '-30°C',
            winterTempAvg: '-10°C',
            maxRecorded: '42°C',
            annualRainfall: '150-350mm',
            rainyMonths: 'Summer (July-September)'
        },
        
        formation: {
            type: 'Plateau desert',
            causes: ['Loess Plateau erosion', 'Yellow River loop', 'Continental climate'],
            age: '~2 million years'
        },
        
        landforms: [
            { name: 'Mu Us Sandy Land', description: 'Southern sandy desert' },
            { name: 'Kubuqi Desert', description: 'Northern active dune field' },
            { name: 'Maowusu Desert', description: 'Central shrubland desert' },
            { name: 'Loess Hills', description: 'Wind-deposited soil hills' }
        ],
        
        features: [
            { name: 'Kubuqi Desert', type: 'Sand desert', coordinates: [40.3, 109.0], description: 'Seventh largest desert in China' },
            { name: 'Genghis Khan Mausoleum', type: 'Memorial', coordinates: [39.6, 109.8], description: 'Memorial to Mongol leader' },
            { name: 'Resonant Sand Bay', type: 'Tourist', coordinates: [40.25, 109.98], description: 'Singing sand dunes' },
            { name: 'Ordos City', type: 'City', coordinates: [39.6, 109.78], description: 'Modern ghost city in desert' }
        ],
        
        oases: [
            { name: 'Ordos City', coordinates: [39.6, 109.78], country: 'China', population: 2000000 },
            { name: 'Dongsheng', coordinates: [39.82, 109.97], country: 'China', population: 500000 }
        ],
        
        cities: [
            { name: 'Ordos City', coordinates: [39.6, 109.78], country: 'China', population: 2000000 },
            { name: 'Baotou', coordinates: [40.66, 109.84], country: 'China', population: 2900000 },
            { name: 'Yulin', coordinates: [38.28, 109.73], country: 'China', population: 550000 }
        ],
        
        biodiversity: {
            plants: ['Sacsaoul', 'Caragana', 'Artemisia', 'Sea Buckthorn', 'Licorice'],
            animals: ['Mongolian Gazelle', 'Corsac Fox', 'Demoiselle Crane', 'Steppe Eagle', 'Jerboas'],
            endangeredSpecies: ['Saker Falcon', 'Mongolian Gazelle (declining)']
        },
        
        humanLife: {
            peoples: ['Han Chinese', 'Mongolian'],
            lifestyle: 'Coal mining, ranching, modern development',
            population: '~4 million in Ordos region'
        },
        
        economy: [
            { label: 'Coal Mining', value: 'Massive coal reserves, major producer' },
            { label: 'Natural Gas', value: 'Large gas fields' },
            { label: 'Real Estate', value: 'Famous ghost city development' },
            { label: 'Tourism', value: 'Genghis Khan sites, sand sports' },
            { label: 'Cashmere', value: 'Major cashmere goat region' }
        ],
        
        environmentalIssues: [
            { label: 'Desertification', value: 'Major reforestation efforts underway' },
            { label: 'Coal Pollution', value: 'Mining impacts air and water' },
            { label: 'Water Scarcity', value: 'Yellow River overused' },
            { label: 'Ghost Cities', value: 'Empty developments wasting resources' }
        ],
        
        historicalImportance: [
            { label: 'Genghis Khan', value: 'Traditional burial area of Khan' },
            { label: 'Mongol Homeland', value: 'Heart of Mongol territory' },
            { label: 'Silk Road', value: 'Northern routes passed through' },
            { label: 'Modern Boom', value: 'Coal wealth created ghost cities' }
        ],
        
        funFacts: [
            'Contains Chinas famous "ghost city" Kangbashi',
            'Kangbashi was built for 1 million but had only 30,000 residents',
            'Genghis Khan is allegedly buried somewhere in Ordos',
            'The Kubuqi Desert is being turned green by massive tree planting',
            'Coal made Ordos one of Chinas richest regions',
            'The "Resonant Sand Bay" dunes make sounds when you slide down',
            'Over 25% of Kubuqi has been reclaimed from desert',
            'Cashmere from Ordos goats is world-famous'
        ],
        
        journeyWaypoints: [
            { name: 'Ordos City', coordinates: [39.6, 109.78], description: 'Modern ghost city' },
            { name: 'Genghis Khan Mausoleum', coordinates: [39.6, 109.8], description: 'Mongol memorial' },
            { name: 'Kubuqi Desert', coordinates: [40.3, 109.0], description: 'Active dune field' },
            { name: 'Resonant Sand Bay', coordinates: [40.25, 109.98], description: 'Singing dunes' },
            { name: 'Mu Us Sandy Land', coordinates: [38.5, 108.5], description: 'Southern desert' }
        ]
    },

    // ========================================
    // #55 - ALVORD DESERT
    // ========================================
    {
        id: 'alvord-desert',
        name: 'Alvord Desert',
        countries: [
            { name: 'United States', code: 'US' }
        ],
        continent: 'North America',
        desertType: 'cold',
        area: 275,
        rank: 55,
        coordinates: [42.55, -118.55],
        defaultZoom: 9,
        image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Alvord Desert' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-118.8, 42.2], [-118.8, 42.9], [-118.3, 42.9], [-118.3, 42.2], [-118.8, 42.2]
                ]]
            }
        },
        
        climate: {
            summerTempMax: '38°C',
            summerTempAvg: '28°C',
            winterTempMin: '-20°C',
            winterTempAvg: '-2°C',
            maxRecorded: '42°C',
            annualRainfall: '180mm',
            rainyMonths: 'Winter-Spring'
        },
        
        formation: {
            type: 'Playa desert',
            causes: ['Steens Mountain rain shadow', 'Ancient Lake Alvord dried', 'Basin and Range'],
            age: '~10,000 years since lake dried'
        },
        
        landforms: [
            { name: 'Playa', description: 'Flat dry lakebed, extremely flat' },
            { name: 'Steens Mountain', description: '2,967m fault-block mountain' },
            { name: 'Hot Springs', description: 'Geothermal springs on edge' },
            { name: 'Sand Dunes', description: 'Small dune field' }
        ],
        
        features: [
            { name: 'Alvord Playa', type: 'Playa', coordinates: [42.55, -118.55], description: 'Vast flat alkali flat' },
            { name: 'Steens Mountain', type: 'Mountain', coordinates: [42.64, -118.58], description: 'Dramatic fault-block rise' },
            { name: 'Alvord Hot Springs', type: 'Hot springs', coordinates: [42.55, -118.53], description: 'Natural hot pools' },
            { name: 'Mickey Hot Springs', type: 'Geothermal', coordinates: [42.68, -118.35], description: 'Boiling mud pots' },
            { name: 'Borax Lake', type: 'Lake', coordinates: [42.33, -118.63], description: 'Geothermal lake with unique fish' }
        ],
        
        oases: [
            { name: 'Fields', coordinates: [42.27, -118.67], country: 'USA', population: 120 }
        ],
        
        cities: [
            { name: 'Fields', coordinates: [42.27, -118.67], country: 'USA', population: 120 },
            { name: 'Burns', coordinates: [43.59, -119.05], country: 'USA', population: 2800 },
            { name: 'Lakeview', coordinates: [42.19, -120.35], country: 'USA', population: 2300 }
        ],
        
        biodiversity: {
            plants: ['Sagebrush', 'Greasewood', 'Saltbush', 'Shadscale'],
            animals: ['Pronghorn', 'Mule Deer', 'Coyote', 'Kit Fox', 'Greater Sage-Grouse', 'Borax Lake Chub'],
            endangeredSpecies: ['Borax Lake Chub (endangered)', 'Greater Sage-Grouse (threatened)']
        },
        
        humanLife: {
            peoples: ['Paiute (historic)', 'American ranchers'],
            lifestyle: 'Ranching, tourism, land speed racing',
            population: '~200 in immediate area'
        },
        
        economy: [
            { label: 'Ranching', value: 'Cattle ranching on edges' },
            { label: 'Tourism', value: 'Hot springs, scenic views' },
            { label: 'Land Sailing', value: 'Wind-powered vehicles on playa' },
            { label: 'Photography', value: 'Scenic photography destination' }
        ],
        
        environmentalIssues: [
            { label: 'Geothermal Development', value: 'Potential impacts on springs' },
            { label: 'Overgrazing', value: 'Cattle affecting native vegetation' },
            { label: 'Climate Change', value: 'Changing water availability' },
            { label: 'Vehicle Damage', value: 'Off-road impacts on playa' }
        ],
        
        historicalImportance: [
            { label: 'Native Americans', value: 'Paiute hunting grounds' },
            { label: 'Borax Mining', value: 'Historic borax extraction' },
            { label: 'Ranching Era', value: 'Peter French cattle empire' },
            { label: 'Land Speed', value: 'Speed record attempts on playa' }
        ],
        
        funFacts: [
            'So flat you can see the curvature of the Earth',
            'Used for land speed record attempts and land sailing',
            'Steens Mountain rises 1,500m directly from the playa',
            'The hot springs are clothing-optional',
            'Borax Lake has a fish species found nowhere else on Earth',
            'One of the most remote places in the contiguous US',
            'The playa floods slightly in winter then dries perfectly flat',
            'No cell phone service - true wilderness'
        ],
        
        journeyWaypoints: [
            { name: 'Burns', coordinates: [43.59, -119.05], description: 'Regional hub' },
            { name: 'Steens Mountain Summit', coordinates: [42.64, -118.58], description: 'Dramatic viewpoint' },
            { name: 'Alvord Hot Springs', coordinates: [42.55, -118.53], description: 'Soaking pools' },
            { name: 'Alvord Playa', coordinates: [42.55, -118.55], description: 'Vast flat expanse' },
            { name: 'Fields Station', coordinates: [42.27, -118.67], description: 'Remote outpost' }
        ]
    },

    // ========================================
    // #56 - VIZCAINO DESERT
    // ========================================
    {
        id: 'vizcaino-desert',
        name: 'Vizcaíno Desert',
        countries: [
            { name: 'Mexico', code: 'MX' }
        ],
        continent: 'North America',
        desertType: 'coastal',
        area: 25000,
        rank: 56,
        coordinates: [27.5, -113.5],
        defaultZoom: 7,
        image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Vizcaíno Desert' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-115.0, 26.5], [-115.0, 29.0], [-112.0, 29.0], [-112.0, 26.5], [-115.0, 26.5]
                ]]
            }
        },
        
        climate: {
            summerTempMax: '35°C',
            summerTempAvg: '28°C',
            winterTempMin: '8°C',
            winterTempAvg: '15°C',
            maxRecorded: '42°C',
            annualRainfall: '50-150mm',
            rainyMonths: 'Winter (Pacific storms), rare summer'
        },
        
        formation: {
            type: 'Coastal fog desert',
            causes: ['California Current cold water', 'Pacific high pressure', 'Coastal position'],
            age: 'Part of Baja California desert system'
        },
        
        landforms: [
            { name: 'Coastal Flats', description: 'Low-lying coastal plains' },
            { name: 'Salt Flats', description: 'Massive salt production areas' },
            { name: 'Lagoons', description: 'Whale breeding lagoons' },
            { name: 'Volcanic Hills', description: 'Scattered volcanic features' }
        ],
        
        features: [
            { name: 'Laguna Ojo de Liebre', type: 'Lagoon', coordinates: [27.75, -114.2], description: 'Gray whale breeding lagoon, Scammons Lagoon' },
            { name: 'Laguna San Ignacio', type: 'Lagoon', coordinates: [26.85, -113.2], description: 'Prime whale watching' },
            { name: 'Guerrero Negro Salt Works', type: 'Industrial', coordinates: [27.97, -114.06], description: 'Largest salt works in the world' },
            { name: 'El Vizcaíno Biosphere', type: 'Protected', coordinates: [27.5, -113.5], description: 'UNESCO World Heritage Site' },
            { name: 'San Francisco Sierra', type: 'Mountains', coordinates: [27.5, -113.0], description: 'Cave paintings UNESCO site' }
        ],
        
        oases: [
            { name: 'San Ignacio', coordinates: [27.28, -112.9], country: 'Mexico', population: 4000 },
            { name: 'Guerrero Negro', coordinates: [27.97, -114.06], country: 'Mexico', population: 15000 }
        ],
        
        cities: [
            { name: 'Guerrero Negro', coordinates: [27.97, -114.06], country: 'Mexico', population: 15000 },
            { name: 'San Ignacio', coordinates: [27.28, -112.9], country: 'Mexico', population: 4000 },
            { name: 'Santa Rosalía', coordinates: [27.34, -112.27], country: 'Mexico', population: 14000 }
        ],
        
        biodiversity: {
            plants: ['Cardon Cactus', 'Boojum Tree (Cirio)', 'Elephant Tree', 'Ocotillo', 'Creosote'],
            animals: ['Gray Whale', 'Pronghorn', 'Desert Bighorn', 'Sea Turtles', 'Ospreys', 'Peninsular Pronghorn'],
            endangeredSpecies: ['Peninsular Pronghorn (critically endangered)', 'Leatherback Turtle', 'Desert Bighorn']
        },
        
        humanLife: {
            peoples: ['Mexican', 'Cochimí (historic)'],
            lifestyle: 'Salt production, fishing, whale watching tourism',
            population: '~50,000 in biosphere area'
        },
        
        economy: [
            { label: 'Salt Production', value: 'Worlds largest sea salt works' },
            { label: 'Whale Watching', value: 'Prime gray whale tourism' },
            { label: 'Fishing', value: 'Pacific fishing industry' },
            { label: 'Tourism', value: 'Ecotourism and cave paintings' }
        ],
        
        environmentalIssues: [
            { label: 'Salt Works', value: 'Industrial impacts on lagoons' },
            { label: 'Water Scarcity', value: 'Limited freshwater' },
            { label: 'Climate Change', value: 'Impacts on whale migration' },
            { label: 'Poaching', value: 'Pronghorn poaching' }
        ],
        
        historicalImportance: [
            { label: 'Cave Paintings', value: 'UNESCO site, 10,000+ year old art' },
            { label: 'Whaling History', value: 'Scammons Lagoon named for whaler' },
            { label: 'Mission Era', value: 'San Ignacio Mission 1728' },
            { label: 'Conservation', value: 'First whale sanctuary 1972' }
        ],
        
        funFacts: [
            'Gray whales migrate 10,000 miles to breed here',
            'Contains the worlds largest salt works producing 7 million tons/year',
            'Whales here are so friendly they approach boats to be petted',
            'Cave paintings in the Sierra are over 10,000 years old',
            'The Boojum tree is one of the strangest plants on Earth',
            'Scammons Lagoon was a secret whaling ground in the 1850s',
            'The salt flats are visible from space',
            'El Vizcaíno is Mexicos largest protected area'
        ],
        
        journeyWaypoints: [
            { name: 'Guerrero Negro', coordinates: [27.97, -114.06], description: 'Salt works and whales' },
            { name: 'Scammons Lagoon', coordinates: [27.75, -114.2], description: 'Whale breeding ground' },
            { name: 'San Ignacio', coordinates: [27.28, -112.9], description: 'Oasis town and mission' },
            { name: 'Laguna San Ignacio', coordinates: [26.85, -113.2], description: 'Friendly whales' },
            { name: 'Cave Paintings', coordinates: [27.5, -113.0], description: 'Ancient rock art' }
        ]
    },

    // ========================================
    // #57 - CHALBI DESERT
    // ========================================
    {
        id: 'chalbi-desert',
        name: 'Chalbi Desert',
        countries: [
            { name: 'Kenya', code: 'KE' }
        ],
        continent: 'Africa',
        desertType: 'hot',
        area: 100000,
        rank: 57,
        coordinates: [3.5, 37.5],
        defaultZoom: 7,
        image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Chalbi Desert' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [36.5, 2.5], [36.5, 4.5], [38.5, 4.5], [38.5, 2.5], [36.5, 2.5]
                ]]
            }
        },
        
        climate: {
            summerTempMax: '45°C',
            summerTempAvg: '38°C',
            winterTempMin: '20°C',
            winterTempAvg: '30°C',
            maxRecorded: '48°C',
            annualRainfall: '150-250mm',
            rainyMonths: 'March-May, October-November (erratic)'
        },
        
        formation: {
            type: 'Rift valley desert',
            causes: ['Eastern Rift Valley extension', 'Rain shadow', 'High evaporation'],
            age: 'Part of East African Rift system'
        },
        
        landforms: [
            { name: 'Playa', description: 'Vast flat salt and clay pans' },
            { name: 'Lava Fields', description: 'Ancient volcanic flows' },
            { name: 'Sand Plains', description: 'Open sandy areas' },
            { name: 'Rocky Outcrops', description: 'Isolated volcanic hills' }
        ],
        
        features: [
            { name: 'Chalbi Playa', type: 'Salt flat', coordinates: [3.5, 37.5], description: 'Vast flat expanse' },
            { name: 'Kalacha Oasis', type: 'Oasis', coordinates: [3.48, 37.42], description: 'Palm oasis in desert' },
            { name: 'North Horr', type: 'Town', coordinates: [3.32, 37.07], description: 'Remote desert town' },
            { name: 'Mount Kulal', type: 'Mountain', coordinates: [2.7, 36.95], description: 'Forest mountain rising from desert' }
        ],
        
        oases: [
            { name: 'Kalacha', coordinates: [3.48, 37.42], country: 'Kenya', population: 3000 },
            { name: 'North Horr', coordinates: [3.32, 37.07], country: 'Kenya', population: 5000 },
            { name: 'Maikona', coordinates: [3.43, 37.62], country: 'Kenya', population: 4000 }
        ],
        
        cities: [
            { name: 'Marsabit', coordinates: [2.33, 37.98], country: 'Kenya', population: 20000 },
            { name: 'Moyale', coordinates: [3.53, 39.05], country: 'Kenya', population: 35000 },
            { name: 'North Horr', coordinates: [3.32, 37.07], country: 'Kenya', population: 5000 }
        ],
        
        biodiversity: {
            plants: ['Acacia', 'Desert Date', 'Doum Palm', 'Salvadora', 'Commiphora'],
            animals: ['Grevy\'s Zebra', 'Reticulated Giraffe', 'Gerenuk', 'Oryx', 'Ostrich', 'Cheetah', 'Lions'],
            endangeredSpecies: ['Grevy\'s Zebra (endangered)', 'Reticulated Giraffe (endangered)', 'African Wild Dog']
        },
        
        humanLife: {
            peoples: ['Gabbra', 'Rendille', 'Borana', 'Turkana'],
            lifestyle: 'Nomadic camel and goat herding',
            population: '~200,000 pastoralists in region'
        },
        
        economy: [
            { label: 'Pastoralism', value: 'Camel, goat, and cattle herding' },
            { label: 'Trade', value: 'Cross-border trade with Ethiopia' },
            { label: 'Tourism', value: 'Limited adventure tourism' },
            { label: 'Aid', value: 'NGO presence for drought relief' }
        ],
        
        environmentalIssues: [
            { label: 'Drought', value: 'Frequent severe droughts' },
            { label: 'Overgrazing', value: 'Too many livestock for carrying capacity' },
            { label: 'Climate Change', value: 'Increasingly unpredictable rains' },
            { label: 'Conflict', value: 'Tribal conflicts over resources' }
        ],
        
        historicalImportance: [
            { label: 'Human Origins', value: 'Near Turkana, cradle of humanity' },
            { label: 'Trade Routes', value: 'Historic caravan routes to coast' },
            { label: 'Colonial Era', value: 'Remoteness preserved traditional life' },
            { label: 'Pastoralist Culture', value: 'Centuries of nomadic tradition' }
        ],
        
        funFacts: [
            'One of the hottest and most remote places in Kenya',
            'The Gabbra people navigate by stars like ancient sailors',
            'Camels are so valued that they are used as bride price',
            'Some areas receive no rain for years at a time',
            'Mount Kulal rises from the desert with a cloud forest on top',
            'The desert floor can reach 70°C surface temperature',
            'Grevy\'s zebra, the rarest zebra, lives here',
            'Kalacha oasis has unexpected green palm groves'
        ],
        
        journeyWaypoints: [
            { name: 'Marsabit', coordinates: [2.33, 37.98], description: 'Mountain town gateway' },
            { name: 'Chalbi Playa', coordinates: [3.5, 37.5], description: 'Vast salt flat' },
            { name: 'Kalacha Oasis', coordinates: [3.48, 37.42], description: 'Palm-lined oasis' },
            { name: 'North Horr', coordinates: [3.32, 37.07], description: 'Remote desert outpost' },
            { name: 'Ethiopia Border', coordinates: [3.5, 38.5], description: 'Moyale crossing' }
        ]
    },

    // ========================================
    // #58 - OGADEN DESERT
    // ========================================
    {
        id: 'ogaden-desert',
        name: 'Ogaden Desert',
        countries: [
            { name: 'Ethiopia', code: 'ET' },
            { name: 'Somalia', code: 'SO' }
        ],
        continent: 'Africa',
        desertType: 'hot',
        area: 350000,
        rank: 58,
        coordinates: [7.0, 44.0],
        defaultZoom: 6,
        image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Ogaden Desert' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [40.0, 4.0], [40.0, 10.0], [48.0, 10.0], [48.0, 4.0], [40.0, 4.0]
                ]]
            }
        },
        
        climate: {
            summerTempMax: '45°C',
            summerTempAvg: '38°C',
            winterTempMin: '18°C',
            winterTempAvg: '28°C',
            maxRecorded: '47°C',
            annualRainfall: '100-300mm',
            rainyMonths: 'April-June, October-November (unpredictable)'
        },
        
        formation: {
            type: 'Horn of Africa desert',
            causes: ['Indian Ocean monsoon shadow', 'Low elevation plains', 'High evaporation'],
            age: 'Ancient formation, part of Somali plate'
        },
        
        landforms: [
            { name: 'Scrubland Plains', description: 'Vast thorn bush and grasslands' },
            { name: 'Dry Riverbeds', description: 'Seasonal watercourses (toggas)' },
            { name: 'Rocky Escarpments', description: 'Ethiopian Highlands edge' },
            { name: 'Sand Plains', description: 'Open sandy areas' }
        ],
        
        features: [
            { name: 'Jijiga', type: 'City', coordinates: [9.35, 42.8], description: 'Regional capital of Somali Region' },
            { name: 'Shebelle River', type: 'River', coordinates: [6.0, 44.0], description: 'Major seasonal river' },
            { name: 'Harar', type: 'City', coordinates: [9.31, 42.12], description: 'Historic walled city on edge' },
            { name: 'Oil Fields', type: 'Industrial', coordinates: [7.5, 45.0], description: 'Disputed oil exploration' }
        ],
        
        oases: [
            { name: 'Jijiga', coordinates: [9.35, 42.8], country: 'Ethiopia', population: 160000 },
            { name: 'Kebri Dahar', coordinates: [6.73, 44.27], country: 'Ethiopia', population: 40000 }
        ],
        
        cities: [
            { name: 'Jijiga', coordinates: [9.35, 42.8], country: 'Ethiopia', population: 160000 },
            { name: 'Kebri Dahar', coordinates: [6.73, 44.27], country: 'Ethiopia', population: 40000 },
            { name: 'Degehabur', coordinates: [8.22, 43.55], country: 'Ethiopia', population: 35000 },
            { name: 'Harar', coordinates: [9.31, 42.12], country: 'Ethiopia', population: 130000 }
        ],
        
        biodiversity: {
            plants: ['Acacia', 'Commiphora', 'Aloe', 'Euphorbia', 'Grasses'],
            animals: ['Somali Wild Ass', 'Gerenuk', 'Dibatag', 'Lesser Kudu', 'Cheetah', 'Spotted Hyena', 'Lions'],
            endangeredSpecies: ['Somali Wild Ass (critically endangered)', 'Dibatag (vulnerable)', 'African Wild Dog']
        },
        
        humanLife: {
            peoples: ['Somali (Ogaden clan)', 'Oromo', 'Afar'],
            lifestyle: 'Nomadic pastoralism, some agriculture',
            population: '~6 million in Somali Region of Ethiopia'
        },
        
        economy: [
            { label: 'Pastoralism', value: 'Camels, cattle, goats, sheep' },
            { label: 'Livestock Trade', value: 'Major export to Gulf states' },
            { label: 'Oil Exploration', value: 'Contested development' },
            { label: 'Cross-border Trade', value: 'With Somalia and Djibouti' }
        ],
        
        environmentalIssues: [
            { label: 'Drought', value: 'Chronic and worsening droughts' },
            { label: 'Conflict', value: 'Decades of insurgency' },
            { label: 'Overgrazing', value: 'Land degradation' },
            { label: 'Climate Change', value: 'Desertification accelerating' }
        ],
        
        historicalImportance: [
            { label: 'Adal Sultanate', value: 'Medieval Islamic state' },
            { label: 'Colonial Division', value: 'Split between Ethiopia, Italy, Britain' },
            { label: 'Ogaden War', value: 'Ethiopia-Somalia war 1977-78' },
            { label: 'Ongoing Conflict', value: 'Separatist movements continue' }
        ],
        
        funFacts: [
            'Home to some of the rarest animals on Earth',
            'The Somali Wild Ass may be the ancestor of the domestic donkey',
            'Ogaden was the cause of a major Cold War proxy conflict',
            'Camel milk is a dietary staple and cultural symbol',
            'Cross-border trade continues despite official borders',
            'Some of the least explored regions on Earth due to conflict',
            'Contains potential major oil and gas reserves',
            'The Dibatag antelope is found almost nowhere else'
        ],
        
        journeyWaypoints: [
            { name: 'Harar', coordinates: [9.31, 42.12], description: 'Walled Islamic city' },
            { name: 'Jijiga', coordinates: [9.35, 42.8], description: 'Regional capital' },
            { name: 'Central Ogaden', coordinates: [7.0, 44.0], description: 'Heart of the desert' },
            { name: 'Kebri Dahar', coordinates: [6.73, 44.27], description: 'Desert town' },
            { name: 'Somalia Border', coordinates: [6.0, 46.0], description: 'Eastern edge' }
        ]
    },

    // ========================================
    // #59 - GUBAN DESERT
    // ========================================
    {
        id: 'guban-desert',
        name: 'Guban Desert',
        countries: [
            { name: 'Somalia', code: 'SO' },
            { name: 'Djibouti', code: 'DJ' }
        ],
        continent: 'Africa',
        desertType: 'hot',
        area: 55000,
        rank: 59,
        coordinates: [10.5, 45.0],
        defaultZoom: 7,
        image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Guban Desert' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [43.0, 9.5], [43.0, 11.5], [49.0, 11.5], [49.0, 9.5], [43.0, 9.5]
                ]]
            }
        },
        
        climate: {
            summerTempMax: '47°C',
            summerTempAvg: '40°C',
            winterTempMin: '22°C',
            winterTempAvg: '30°C',
            maxRecorded: '50°C',
            annualRainfall: '50-150mm',
            rainyMonths: 'April-May, rare'
        },
        
        formation: {
            type: 'Coastal desert strip',
            causes: ['Gulf of Aden cold currents', 'Ethiopian Highlands rain shadow', 'Extreme evaporation'],
            age: 'Ancient coastal desert'
        },
        
        landforms: [
            { name: 'Coastal Plains', description: 'Narrow strip along Gulf of Aden' },
            { name: 'Dry Wadis', description: 'Seasonal watercourses from highlands' },
            { name: 'Rocky Escarpments', description: 'Rise to interior highlands' },
            { name: 'Sandy Beaches', description: 'Desert meeting the sea' }
        ],
        
        features: [
            { name: 'Berbera', type: 'Port', coordinates: [10.44, 45.02], description: 'Historic port city' },
            { name: 'Laas Geel', type: 'Rock art', coordinates: [9.78, 44.46], description: '5,000-year-old cave paintings' },
            { name: 'Gulf of Aden Coast', type: 'Coastline', coordinates: [10.5, 46.0], description: 'Desert meeting sea' },
            { name: 'Zeila', type: 'Historic', coordinates: [11.36, 43.47], description: 'Ancient trading port ruins' }
        ],
        
        oases: [
            { name: 'Berbera', coordinates: [10.44, 45.02], country: 'Somalia', population: 40000 },
            { name: 'Zeila', coordinates: [11.36, 43.47], country: 'Somalia', population: 5000 }
        ],
        
        cities: [
            { name: 'Berbera', coordinates: [10.44, 45.02], country: 'Somalia', population: 40000 },
            { name: 'Hargeisa', coordinates: [9.56, 44.06], country: 'Somalia', population: 1200000 },
            { name: 'Borama', coordinates: [9.94, 43.18], country: 'Somalia', population: 250000 }
        ],
        
        biodiversity: {
            plants: ['Acacia', 'Aloe', 'Frankincense trees', 'Myrrh', 'Desert shrubs'],
            animals: ['Speke\'s Gazelle', 'Beira Antelope', 'Somali Ostrich', 'Cheetah', 'Hyenas', 'Jackals'],
            endangeredSpecies: ['Speke\'s Gazelle (endangered)', 'Beira Antelope (vulnerable)', 'Somali Wild Ass']
        },
        
        humanLife: {
            peoples: ['Somali (Isaaq, Dir, Darod clans)'],
            lifestyle: 'Fishing, herding, trading',
            population: '~500,000 along Guban coast'
        },
        
        economy: [
            { label: 'Livestock Export', value: 'Major livestock shipping from Berbera' },
            { label: 'Fishing', value: 'Gulf of Aden fisheries' },
            { label: 'Port', value: 'UAE-developed Berbera port' },
            { label: 'Frankincense', value: 'Traditional resin harvesting' }
        ],
        
        environmentalIssues: [
            { label: 'Overfishing', value: 'Foreign fleets depleting stocks' },
            { label: 'Drought', value: 'Chronic water shortages' },
            { label: 'Deforestation', value: 'Frankincense trees declining' },
            { label: 'Development', value: 'Port expansion impacts' }
        ],
        
        historicalImportance: [
            { label: 'Land of Punt', value: 'Possibly ancient Egyptian trading partner' },
            { label: 'Laas Geel', value: '5,000-year-old rock art, best preserved in Africa' },
            { label: 'Trade Routes', value: 'Arabian and African trade for millennia' },
            { label: 'Colonial Era', value: 'British Somaliland protectorate' }
        ],
        
        funFacts: [
            'Guban means "burnt" in Somali, describing the intense heat',
            'Laas Geel has the best-preserved rock art in Africa',
            'Berbera was a major port for the Roman Empire',
            'Frankincense and myrrh from here were gifts for kings',
            'Summer temperatures regularly exceed 45°C',
            'The area may be the Biblical Land of Punt',
            'Berbera port is being developed as a UAE naval base',
            'Speke\'s Gazelle is found only in this region'
        ],
        
        journeyWaypoints: [
            { name: 'Hargeisa', coordinates: [9.56, 44.06], description: 'Somaliland capital' },
            { name: 'Laas Geel', coordinates: [9.78, 44.46], description: 'Ancient rock art caves' },
            { name: 'Berbera', coordinates: [10.44, 45.02], description: 'Historic port city' },
            { name: 'Coastal Desert', coordinates: [10.5, 46.0], description: 'Where desert meets sea' },
            { name: 'Zeila', coordinates: [11.36, 43.47], description: 'Ancient ruins' }
        ]
    },

    // ========================================
    // #60 - GRAND BARA DESERT
    // ========================================
    {
        id: 'grand-bara-desert',
        name: 'Grand Bara Desert',
        countries: [
            { name: 'Djibouti', code: 'DJ' }
        ],
        continent: 'Africa',
        desertType: 'hot',
        area: 2500,
        rank: 60,
        coordinates: [11.2, 42.6],
        defaultZoom: 9,
        image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400',
        backgroundImage: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1920',
        
        geoJSON: {
            type: 'Feature',
            properties: { name: 'Grand Bara Desert' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [42.3, 11.0], [42.3, 11.5], [43.0, 11.5], [43.0, 11.0], [42.3, 11.0]
                ]]
            }
        },
        
        climate: {
            summerTempMax: '45°C',
            summerTempAvg: '38°C',
            winterTempMin: '18°C',
            winterTempAvg: '28°C',
            maxRecorded: '47°C',
            annualRainfall: '<130mm',
            rainyMonths: 'March-April (sparse)'
        },
        
        formation: {
            type: 'Rift valley playa',
            causes: ['Afar Rift extension', 'Ancient dried lake', 'Extreme heat and evaporation'],
            age: 'Part of Afar Depression system'
        },
        
        landforms: [
            { name: 'Playa', description: 'Vast flat clay and sand plain' },
            { name: 'Sand Dunes', description: 'Dune fields on edges' },
            { name: 'Volcanic Features', description: 'Surrounding volcanic terrain' },
            { name: 'Salt Flats', description: 'Evaporite deposits' }
        ],
        
        features: [
            { name: 'Grand Bara Plain', type: 'Desert plain', coordinates: [11.2, 42.6], description: 'Vast flat expanse' },
            { name: 'Marathon Route', type: 'Event', coordinates: [11.2, 42.6], description: 'Annual Grand Bara 15K race' },
            { name: 'Petit Bara', type: 'Plain', coordinates: [11.1, 42.5], description: 'Smaller adjacent plain' },
            { name: 'Arta', type: 'Town', coordinates: [11.52, 42.85], description: 'Nearby town on plateau' }
        ],
        
        oases: [
            { name: 'Ali Sabieh', coordinates: [11.15, 42.71], country: 'Djibouti', population: 40000 }
        ],
        
        cities: [
            { name: 'Djibouti City', coordinates: [11.59, 43.15], country: 'Djibouti', population: 600000 },
            { name: 'Ali Sabieh', coordinates: [11.15, 42.71], country: 'Djibouti', population: 40000 },
            { name: 'Arta', coordinates: [11.52, 42.85], country: 'Djibouti', population: 12000 }
        ],
        
        biodiversity: {
            plants: ['Acacia', 'Desert shrubs', 'Halophytes (salt-tolerant)', 'Sparse grasses'],
            animals: ['Dorcas Gazelle', 'Dik-dik', 'Jackals', 'Ostriches', 'Vultures', 'Sand snakes'],
            endangeredSpecies: ['Dorcas Gazelle (vulnerable)', 'Grevy\'s Zebra (nearby)']
        },
        
        humanLife: {
            peoples: ['Afar', 'Issa Somali'],
            lifestyle: 'Nomadic herding, salt trading',
            population: '~80,000 in Ali Sabieh region'
        },
        
        economy: [
            { label: 'Military Bases', value: 'Foreign military presence' },
            { label: 'Port Services', value: 'Djibouti port income' },
            { label: 'Pastoralism', value: 'Goat and camel herding' },
            { label: 'Tourism', value: 'Grand Bara race event' }
        ],
        
        environmentalIssues: [
            { label: 'Drought', value: 'Chronic water scarcity' },
            { label: 'Overgrazing', value: 'Livestock depleting vegetation' },
            { label: 'Climate Change', value: 'Increasing temperatures' },
            { label: 'Desertification', value: 'Expansion of barren areas' }
        ],
        
        historicalImportance: [
            { label: 'Trade Routes', value: 'Historic caravan routes' },
            { label: 'French Colony', value: 'French Somaliland territory' },
            { label: 'Independence', value: 'Djibouti independent 1977' },
            { label: 'Military Hub', value: 'Strategic Horn of Africa location' }
        ],
        
        funFacts: [
            'Hosts the annual Grand Bara 15K desert run',
            'The race is held in December when its "only" 30°C',
            'Part of the Afar Triple Junction - three tectonic plates meeting',
            'One of the hottest inhabited regions on Earth',
            'Djibouti hosts US, French, Chinese, and Japanese military bases',
            'The flat plain is excellent for the desert race',
            'Afar people have lived here adapting to extreme heat',
            'The name means "Great Desert" in local languages'
        ],
        
        journeyWaypoints: [
            { name: 'Djibouti City', coordinates: [11.59, 43.15], description: 'Capital city' },
            { name: 'Arta', coordinates: [11.52, 42.85], description: 'Cooler plateau town' },
            { name: 'Grand Bara Plain', coordinates: [11.2, 42.6], description: 'Vast desert plain' },
            { name: 'Ali Sabieh', coordinates: [11.15, 42.71], description: 'Southern town' },
            { name: 'Petit Bara', coordinates: [11.1, 42.5], description: 'Smaller plain' }
        ]
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DESERTS_DATA_6;
}
