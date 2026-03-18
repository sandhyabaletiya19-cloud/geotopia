// mountains-data-10.js - Mountains 91-100 (Iconic Peaks Worldwide)
// Part A: Mountains 91-94

const MOUNTAINS_DATA_10_PART_A = [
    // 91. Mount Kosciuszko
    {
        id: 'mount-kosciuszko',
        name: 'Mount Kosciuszko',
        localNames: [
            { language: 'Ngarigo', name: 'Tar-Gan-Gil' },
            { language: 'English', name: 'Mount Kosciuszko' }
        ],
        countries: [
            { name: 'Australia', code: 'AU' }
        ],
        continent: 'Australia/Oceania',
        mountainRange: 'Snowy Mountains',
        subRange: 'Australian Alps',
        elevation: 2228,
        prominence: 2228,
        isolation: 2246,
        coordinates: [-36.4561, 148.2633],
        defaultZoom: 12,
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
        
        formation: {
            type: 'Fold Mountain / Granite Plateau',
            age: '400-450 million years',
            tectonicPlates: ['Indo-Australian Plate'],
            process: 'Part of ancient fold mountains formed during Paleozoic era. Composed of granite intruded into sedimentary rocks. Heavily eroded over millions of years creating rounded summit. Glacial features from Pleistocene ice ages visible.'
        },
        
        climbing: {
            firstAscent: {
                date: '1840',
                climbers: ['Paweł Edmund Strzelecki'],
                route: 'From west',
                expedition: 'Polish explorer during survey of Australian Alps, named peak for Polish hero.'
            },
            totalAscents: 100000,
            fatalities: 5,
            successRate: '99%',
            bestSeason: 'November to April (summer)',
            difficulty: 'Easy walk',
            routes: [
                { name: 'Summit Walk', country: 'Australia', difficulty: 'Easy', description: 'From Thredbo chairlift, 6.5km each way, raised walkway' },
                { name: 'Main Range Track', country: 'Australia', difficulty: 'Moderate', description: 'Longer route via Blue Lake, full day hike' },
                { name: 'Charlotte Pass Route', country: 'Australia', difficulty: 'Moderate', description: 'Alternative 9km each way through alpine area' },
                { name: 'Winter Ski Tour', country: 'Australia', difficulty: 'Moderate', description: 'Cross-country skiing approach in winter' }
            ]
        },
        
        climate: {
            summitTemperature: '5°C average',
            winterLow: '-15°C',
            summerHigh: '20°C',
            snowfall: 'Regular winter snow, ski season June-October',
            winds: 'Can be strong across exposed plateau',
            deathZone: 'Not applicable'
        },
        
        glaciers: [
            { name: 'No glaciers', length: 'N/A', description: 'Glacial lakes and features remain, no active glaciers' }
        ],
        
        baseCamps: [
            { name: 'Thredbo Village', elevation: 1365, country: 'Australia', coordinates: [-36.5056, 148.3081] },
            { name: 'Charlotte Pass', elevation: 1760, country: 'Australia', coordinates: [-36.4333, 148.3333] },
            { name: 'Rawsons Pass', elevation: 2100, country: 'Australia', coordinates: [-36.4500, 148.2667] },
            { name: 'Seamans Hut', elevation: 2000, country: 'Australia', coordinates: [-36.4333, 148.2667] }
        ],
        
        nearbyPeaks: [
            { name: 'Mount Townsend', elevation: 2209, coordinates: [-36.4333, 148.2500] },
            { name: 'Carruthers Peak', elevation: 2145, coordinates: [-36.4167, 148.2667] },
            { name: 'Byatts Camp', elevation: 2141, coordinates: [-36.4000, 148.2833] },
            { name: 'Etheridge Ridge', elevation: 2180, coordinates: [-36.4500, 148.2333] }
        ],
        
        nearbyCities: [
            { name: 'Jindabyne', coordinates: [-36.4167, 148.6167], country: 'Australia', population: 2500 },
            { name: 'Cooma', coordinates: [-36.2333, 149.1167], country: 'Australia', population: 6500 },
            { name: 'Canberra', coordinates: [-35.2809, 149.1300], country: 'Australia', population: 430000 },
            { name: 'Sydney', coordinates: [-33.8688, 151.2093], country: 'Australia', population: 5300000 }
        ],
        
        flora: ['Snow Gum', 'Alpine Ash', 'Snow Daisies', 'Billy Buttons', 'Sphagnum Moss', 'Alpine Heath'],
        fauna: ['Wombat', 'Eastern Grey Kangaroo', 'Platypus', 'Mountain Pygmy-possum (endangered)', 'Broad-toothed Rat', 'Flame Robin'],
        
        economicImportance: [
            { label: 'Seven Summits', value: 'Alternative continental highpoint attracts peak baggers' },
            { label: 'Ski Tourism', value: 'Snowy Mountains major Australian ski destination' },
            { label: 'Summer Hiking', value: 'Popular summer walking destination' },
            { label: 'Snowy Hydro', value: 'Part of major hydroelectric scheme' }
        ],
        
        environmentalIssues: [
            { label: 'Climate Change', value: 'Snow cover declining significantly' },
            { label: 'Feral Animals', value: 'Horses, pigs, and foxes impact ecosystem' },
            { label: 'Trampling', value: 'High visitor numbers damage alpine vegetation' },
            { label: 'Fire Risk', value: '2020 bushfires affected much of park' }
        ],
        
        conservation: [
            { label: 'Kosciuszko National Park', value: 'Largest park in NSW, established 1967' },
            { label: 'UNESCO Biosphere', value: 'Part of Australian Alps Biosphere Reserve' },
            { label: 'Raised Walkway', value: 'Metal walkway protects fragile summit vegetation' },
            { label: 'Pygmy-possum Protection', value: 'Critical habitat for endangered species' }
        ],
        
        historicalImportance: [
            { label: 'Strzelecki Naming', value: 'Named 1840 for Polish freedom fighter Tadeusz Kościuszko' },
            { label: 'Wrong Peak', value: 'Strzelecki actually climbed Mount Townsend, names later swapped' },
            { label: 'Aboriginal Heritage', value: 'Ngarigo people gathered here for thousands of years' },
            { label: 'Snowy Scheme', value: 'Major post-WWII engineering project' }
        ],
        
        records: [
            { record: 'Highest Australia', value: 'Highest peak on Australian mainland at 2,228m' },
            { record: 'Seven Summits', value: 'Alternative to Carstensz Pyramid for continental highpoint' },
            { record: 'Easiest Continental Highpoint', value: 'Most accessible of any continental high peak' },
            { record: 'Most Accessible', value: 'Chairlift brings visitors within 6.5km of summit' }
        ],
        
        deathZone: false,
        technicalClimbing: false,
        permitRequired: false,
        sevenSummit: true,
        eightThousander: false
    },

    // 92. Mount Kerinci
    {
        id: 'mount-kerinci',
        name: 'Mount Kerinci',
        localNames: [
            { language: 'Indonesian', name: 'Gunung Kerinci' },
            { language: 'Local', name: 'Gunung Gadang' }
        ],
        countries: [
            { name: 'Indonesia', code: 'ID' }
        ],
        continent: 'Asia',
        mountainRange: 'Barisan Mountains',
        subRange: 'Sumatra Volcanic Arc',
        elevation: 3805,
        prominence: 3805,
        isolation: 2253,
        coordinates: [-1.6972, 101.2642],
        defaultZoom: 12,
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80',
        
        formation: {
            type: 'Stratovolcano (Active)',
            age: 'Pleistocene to present',
            tectonicPlates: ['Indo-Australian Plate', 'Eurasian Plate'],
            process: 'Formed by subduction of Indo-Australian Plate beneath Sunda Plate. Part of Pacific Ring of Fire. Most recent significant eruption in 2009. Active fumaroles in summit crater. Highest volcano in Sumatra.'
        },
        
        climbing: {
            firstAscent: {
                date: '1877',
                climbers: ['Unknown colonial expedition'],
                route: 'Standard Route',
                expedition: 'Dutch colonial era exploration of Sumatran highlands.'
            },
            totalAscents: 10000,
            fatalities: 15,
            successRate: '85%',
            bestSeason: 'April to October (dry season)',
            difficulty: 'Strenuous trek',
            routes: [
                { name: 'Kersik Tuo Route', country: 'Indonesia', difficulty: 'Strenuous', description: 'Standard route, 2-day trek from village, well-established' },
                { name: 'Pelompek Route', country: 'Indonesia', difficulty: 'Strenuous', description: 'Alternative approach, less crowded' },
                { name: 'Night Climb', country: 'Indonesia', difficulty: 'Strenuous', description: 'Popular to summit for sunrise' }
            ]
        },
        
        climate: {
            summitTemperature: '5°C average',
            winterLow: '-2°C',
            summerHigh: '12°C',
            snowfall: 'No snow, occasional frost',
            winds: 'Generally moderate',
            deathZone: 'Not applicable'
        },
        
        glaciers: [
            { name: 'No glaciers', length: 'N/A', description: 'Tropical location, no glaciation' }
        ],
        
        baseCamps: [
            { name: 'Kersik Tuo Village', elevation: 1500, country: 'Indonesia', coordinates: [-1.7333, 101.2833] },
            { name: 'Shelter 1', elevation: 2400, country: 'Indonesia', coordinates: [-1.7167, 101.2750] },
            { name: 'Shelter 2', elevation: 3000, country: 'Indonesia', coordinates: [-1.7083, 101.2700] },
            { name: 'Shelter 3', elevation: 3400, country: 'Indonesia', coordinates: [-1.7000, 101.2667] }
        ],
        
        nearbyPeaks: [
            { name: 'Gunung Tujuh', elevation: 1996, coordinates: [-1.7167, 101.3833] },
            { name: 'Gunung Masurai', elevation: 2916, coordinates: [-2.1000, 101.6667] },
            { name: 'Gunung Raya', elevation: 2535, coordinates: [-1.6000, 101.4667] }
        ],
        
        nearbyCities: [
            { name: 'Sungai Penuh', coordinates: [-2.0583, 101.3917], country: 'Indonesia', population: 95000 },
            { name: 'Padang', coordinates: [-0.9471, 100.4172], country: 'Indonesia', population: 940000 },
            { name: 'Jambi', coordinates: [-1.5833, 103.6333], country: 'Indonesia', population: 580000 },
            { name: 'Bengkulu', coordinates: [-3.7956, 102.2592], country: 'Indonesia', population: 360000 }
        ],
        
        flora: ['Montane Rainforest', 'Rafflesia (worlds largest flower)', 'Pitcher Plants', 'Edelweiss Javanica', 'Tree Ferns', 'Rhododendrons'],
        fauna: ['Sumatran Tiger', 'Sumatran Rhino', 'Tapir', 'Sun Bear', 'Siamang', 'Argus Pheasant'],
        
        economicImportance: [
            { label: 'Ecotourism', value: 'Major attraction for Kerinci Seblat NP' },
            { label: 'Agriculture', value: 'Fertile volcanic soil supports tea and cinnamon' },
            { label: 'Water Source', value: 'Important watershed for surrounding region' },
            { label: 'Kerinci Tea', value: 'Famous tea grown on slopes' }
        ],
        
        environmentalIssues: [
            { label: 'Deforestation', value: 'Illegal logging threatens surrounding rainforest' },
            { label: 'Poaching', value: 'Endangered tigers and rhinos at risk' },
            { label: 'Agricultural Encroachment', value: 'Farming expanding into protected areas' },
            { label: 'Volcanic Hazards', value: 'Active volcano requires monitoring' }
        ],
        
        conservation: [
            { label: 'Kerinci Seblat National Park', value: 'UNESCO World Heritage Site since 2004' },
            { label: 'Tiger Protection', value: 'Critical Sumatran tiger habitat' },
            { label: 'Rhino Sanctuary', value: 'One of last refuges for Sumatran rhino' },
            { label: 'Anti-Poaching Patrols', value: 'Active ranger presence' }
        ],
        
        historicalImportance: [
            { label: 'Local Legend', value: 'Considered sacred by local Kerinci people' },
            { label: 'Dutch Exploration', value: 'Mapped during Dutch colonial period' },
            { label: 'Orang Pendek', value: 'Local legend of small forest hominid' },
            { label: 'Kingdom History', value: 'Part of ancient Srivijaya and Melayu kingdoms' }
        ],
        
        records: [
            { record: 'Highest Sumatra', value: 'Highest peak on Sumatra island at 3,805m' },
            { record: 'Highest Indonesian Volcano', value: 'Tallest volcano entirely in Indonesia' },
            { record: 'Biodiversity Hotspot', value: 'Among most biodiverse mountain regions' },
            { record: 'Tiger Territory', value: 'Largest protected tiger habitat in Indonesia' }
        ],
        
        deathZone: false,
        technicalClimbing: false,
        permitRequired: true,
        sevenSummit: false,
        eightThousander: false
    },

    // 93. Fitz Roy
    {
        id: 'fitz-roy',
        name: 'Fitz Roy',
        localNames: [
            { language: 'Tehuelche', name: 'Chaltén (Smoking Mountain)' },
            { language: 'Spanish', name: 'Cerro Fitz Roy' },
            { language: 'Spanish', name: 'Cerro Chaltén' }
        ],
        countries: [
            { name: 'Argentina', code: 'AR' }
        ],
        continent: 'South America',
        mountainRange: 'Andes',
        subRange: 'Southern Patagonian Andes',
        elevation: 3405,
        prominence: 1951,
        isolation: 16,
        coordinates: [-49.2719, -73.0428],
        defaultZoom: 12,
        image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=80',
        
        formation: {
            type: 'Granite Pluton / Glacially Carved',
            age: '12-15 million years',
            tectonicPlates: ['South American Plate', 'Antarctic Plate'],
            process: 'Granite intrusion pushed through sedimentary rock and carved by intense glacial erosion. Extreme Patagonian weather creates dramatic ice formations. Iconic spire shape from differential erosion of surrounding softer rock.'
        },
        
        climbing: {
            firstAscent: {
                date: 'February 2, 1952',
                climbers: ['Lionel Terray', 'Guido Magnone'],
                route: 'Southeast Ridge (Franco-Argentine Route)',
                expedition: 'French expedition after many failed attempts, considered major mountaineering achievement.'
            },
            totalAscents: 200,
            fatalities: 15,
            successRate: '20%',
            bestSeason: 'December to February (Patagonian summer)',
            difficulty: 'ED (Extremely Difficult)',
            routes: [
                { name: 'Franco-Argentine (SE Ridge)', country: 'Argentina', difficulty: 'ED', description: 'Original route, classic Patagonian mixed climbing' },
                { name: 'Supercanaleta', country: 'Argentina', difficulty: 'ED+', description: 'Direct line up central couloir' },
                { name: 'Afanassieff Route', country: 'Argentina', difficulty: 'ED', description: 'North face variant' },
                { name: 'California Route', country: 'Argentina', difficulty: 'ED+', description: 'Technical variation on west face' }
            ]
        },
        
        climate: {
            summitTemperature: '-15°C average',
            winterLow: '-35°C',
            summerHigh: '0°C',
            snowfall: 'Extreme precipitation and wind',
            winds: 'Notorious Patagonian winds, 100+ km/h common',
            deathZone: 'Not applicable but extreme conditions'
        },
        
        glaciers: [
            { name: 'Glaciar Fitz Roy Norte', length: '3 km', description: 'North side glacier' },
            { name: 'Glaciar Piedras Blancas', length: '4 km', description: 'East side glacier with viewpoint' },
            { name: 'Glaciar de los Tres', length: '2 km', description: 'Famous viewpoint glacier' }
        ],
        
        baseCamps: [
            { name: 'El Chaltén', elevation: 405, country: 'Argentina', coordinates: [-49.3314, -72.8864] },
            { name: 'Campamento Poincenot', elevation: 740, country: 'Argentina', coordinates: [-49.2833, -72.9833] },
            { name: 'Campamento Río Blanco', elevation: 900, country: 'Argentina', coordinates: [-49.2750, -73.0000] },
            { name: 'Paso Superior', elevation: 1200, country: 'Argentina', coordinates: [-49.2700, -73.0167] }
        ],
        
        nearbyPeaks: [
            { name: 'Cerro Torre', elevation: 3128, coordinates: [-49.2861, -73.1025] },
            { name: 'Poincenot', elevation: 3002, coordinates: [-49.2750, -73.0333] },
            { name: 'Aguja Saint-Exupéry', elevation: 2558, coordinates: [-49.2833, -73.0167] },
            { name: 'Aguja Rafael Juárez', elevation: 2482, coordinates: [-49.2917, -73.0083] }
        ],
        
        nearbyCities: [
            { name: 'El Chaltén', coordinates: [-49.3314, -72.8864], country: 'Argentina', population: 2000 },
            { name: 'El Calafate', coordinates: [-50.3378, -72.2647], country: 'Argentina', population: 25000 },
            { name: 'Río Gallegos', coordinates: [-51.6226, -69.2181], country: 'Argentina', population: 100000 },
            { name: 'Puerto Natales', coordinates: [-51.7333, -72.5167], country: 'Chile', population: 20000 }
        ],
        
        flora: ['Lenga Beech', 'Ñire Beech', 'Calafate Bush', 'Notro (Fire Bush)', 'Mosses', 'Lichens'],
        fauna: ['Guanaco', 'Puma', 'Andean Condor', 'Huemul (endangered)', 'Patagonian Fox', 'Magellanic Woodpecker'],
        
        economicImportance: [
            { label: 'Patagonia Logo', value: 'Silhouette is outdoor brand Patagonias logo' },
            { label: 'Elite Climbing', value: 'Draws worlds best alpinists' },
            { label: 'El Chaltén Tourism', value: 'Created entire town around trekking/climbing' },
            { label: 'Trekking Capital', value: 'Argentina National Trekking Capital designation' }
        ],
        
        environmentalIssues: [
            { label: 'Glacial Retreat', value: 'Surrounding glaciers losing mass' },
            { label: 'Tourism Impact', value: 'Growing visitor numbers affecting trails' },
            { label: 'Climate Change', value: 'Weather patterns becoming less predictable' },
            { label: 'Waste Management', value: 'Increased pressure on campsites' }
        ],
        
        conservation: [
            { label: 'Los Glaciares National Park', value: 'UNESCO World Heritage Site since 1981' },
            { label: 'Strict Access Control', value: 'Climbing permits required' },
            { label: 'Leave No Trace', value: 'Strong ethic among climbing community' },
            { label: 'Huemul Protection', value: 'Endangered deer conservation efforts' }
        ],
        
        historicalImportance: [
            { label: 'Named by Moreno', value: 'Perito Moreno named it for HMS Beagle captain' },
            { label: 'Chaltén Sacred', value: 'Tehuelche considered it sacred smoking mountain' },
            { label: 'Late First Ascent', value: 'Not climbed until 1952 despite many attempts' },
            { label: 'Golden Age', value: 'Pioneering Patagonian climbing in 1960s-80s' }
        ],
        
        records: [
            { record: 'Most Difficult Mountain', value: 'Once considered hardest mountain to climb' },
            { record: 'Patagonia Logo', value: 'Most commercially recognizable mountain silhouette' },
            { record: 'Rarest Ascents', value: 'Among least frequently summited major peaks' },
            { record: 'Weather Window', value: 'Notorious for requiring perfect weather window' }
        ],
        
        deathZone: false,
        technicalClimbing: true,
        permitRequired: true,
        sevenSummit: false,
        eightThousander: false
    },

    // 94. Cerro Torre
    {
        id: 'cerro-torre',
        name: 'Cerro Torre',
        localNames: [
            { language: 'Spanish', name: 'Cerro Torre' }
        ],
        countries: [
            { name: 'Argentina', code: 'AR' },
            { name: 'Chile', code: 'CL' }
        ],
        continent: 'South America',
        mountainRange: 'Andes',
        subRange: 'Southern Patagonian Andes',
        elevation: 3128,
        prominence: 400,
        isolation: 2,
        coordinates: [-49.2861, -73.1025],
        defaultZoom: 13,
        image: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1920&q=80',
        
        formation: {
            type: 'Granite Spire / Glacially Carved',
            age: '12-15 million years',
            tectonicPlates: ['South American Plate', 'Antarctic Plate'],
            process: 'Granite intrusion carved into impossibly steep spire by glacial erosion and Patagonian weather. Famous mushroom-shaped ice cap formed by rime ice from constant storms. Considered one of most extreme mountain formations on Earth.'
        },
        
        climbing: {
            firstAscent: {
                date: 'January 13, 1974 (undisputed)',
                climbers: ['Casimiro Ferrari', 'Daniele Chiappa', 'Mario Conti', 'Pino Negri'],
                route: 'West Face',
                expedition: 'Italian team via west face. 1959 Maestri claim disputed for decades.'
            },
            totalAscents: 100,
            fatalities: 12,
            successRate: '10%',
            bestSeason: 'December to February',
            difficulty: 'ED+ to ABO (Beyond Extreme)',
            routes: [
                { name: 'West Face (Ferrari Route)', country: 'Argentina', difficulty: 'ED+', description: 'Original undisputed route, extreme mixed climbing' },
                { name: 'Southeast Ridge (Compressor Route)', country: 'Argentina', difficulty: 'ED', description: 'Controversial Maestri route with bolts' },
                { name: 'Ragni Route', country: 'Argentina', difficulty: 'ED+', description: 'Italian variation' },
                { name: 'El Arca de los Vientos', country: 'Chile', difficulty: 'ABO', description: 'Extreme free variation' }
            ]
        },
        
        climate: {
            summitTemperature: '-20°C average',
            winterLow: '-40°C',
            summerHigh: '-5°C',
            snowfall: 'Constant storms build rime ice mushroom',
            winds: 'Most extreme wind on any mountain',
            deathZone: 'Not applicable but extreme conditions'
        },
        
        glaciers: [
            { name: 'Torre Glacier', length: '2 km', description: 'Base glacier for approach' },
            { name: 'Torre Ice Cap', length: '0.1 km', description: 'Famous summit mushroom' }
        ],
        
        baseCamps: [
            { name: 'El Chaltén', elevation: 405, country: 'Argentina', coordinates: [-49.3314, -72.8864] },
            { name: 'Campamento Bridwell', elevation: 600, country: 'Argentina', coordinates: [-49.3000, -73.0667] },
            { name: 'Niponino (Torre Base)', elevation: 700, country: 'Argentina', coordinates: [-49.2917, -73.0833] },
            { name: 'Col of Patience', elevation: 2200, country: 'Argentina', coordinates: [-49.2875, -73.0950] }
        ],
        
        nearbyPeaks: [
            { name: 'Torre Egger', elevation: 2685, coordinates: [-49.2833, -73.1000] },
            { name: 'Punta Herron', elevation: 2580, coordinates: [-49.2833, -73.0917] },
            { name: 'Cerro Standhardt', elevation: 2730, coordinates: [-49.2800, -73.0833] },
            { name: 'Fitz Roy', elevation: 3405, coordinates: [-49.2719, -73.0428] }
        ],
        
        nearbyCities: [
            { name: 'El Chaltén', coordinates: [-49.3314, -72.8864], country: 'Argentina', population: 2000 },
            { name: 'El Calafate', coordinates: [-50.3378, -72.2647], country: 'Argentina', population: 25000 },
            { name: 'Cochrane', coordinates: [-47.2500, -72.5667], country: 'Chile', population: 3000 },
            { name: 'Puerto Natales', coordinates: [-51.7333, -72.5167], country: 'Chile', population: 20000 }
        ],
        
        flora: ['Lenga Beech', 'Coigüe', 'Lichens', 'Mosses', 'Calafate', 'Antarctic Flora'],
        fauna: ['Andean Condor', 'Guanaco', 'Puma', 'Huemul', 'Patagonian Fox', 'Black-chested Eagle'],
        
        economicImportance: [
            { label: 'Climbing Legend', value: 'Holy grail for elite alpinists' },
            { label: 'Documentary Fame', value: 'Films draw global climbing attention' },
            { label: 'Climbing Tourism', value: 'Draws spectators even if not climbing' },
            { label: 'Controversy Interest', value: 'Maestri debate brought international attention' }
        ],
        
        environmentalIssues: [
            { label: 'Bolt Controversy', value: 'Maestris compressor bolts debated for decades' },
            { label: 'Rime Ice Changes', value: 'Mushroom cap changing with climate' },
            { label: 'Glacial Retreat', value: 'Torre Glacier receding' },
            { label: 'Access Impact', value: 'Growing traffic to area' }
        ],
        
        conservation: [
            { label: 'Los Glaciares National Park', value: 'UNESCO World Heritage Site' },
            { label: 'Bolt Removal', value: 'Controversial 2012 removal of some Maestri bolts' },
            { label: 'Clean Climbing Ethic', value: 'Community pressure for pure ascents' },
            { label: 'Access Management', value: 'Permit system for climbers' }
        ],
        
        historicalImportance: [
            { label: 'Maestri Controversy', value: '1959 first ascent claim disputed for 50+ years' },
            { label: 'Compressor Route', value: 'Maestris 1970 bolt ladder remains controversial' },
            { label: 'Cerro Torre Film', value: 'Documentary about first fair means ascent' },
            { label: 'Kennedy-Kruk 2012', value: 'First fair means ascent sparked bolt removal debate' }
        ],
        
        records: [
            { record: 'Hardest Mountain', value: 'Considered hardest technical peak on Earth' },
            { record: 'Ice Mushroom', value: 'Famous summit rime ice formation unique in world' },
            { record: 'Lowest Success Rate', value: 'Among lowest success rates of any major peak' },
            { record: 'Most Controversial', value: 'Most controversial first ascent in history' }
        ],
        
        deathZone: false,
        technicalClimbing: true,
        permitRequired: true,
        sevenSummit: false,
        eightThousander: false
    }
];
// mountains-data-10.js - Part B: Mountains 95-97

const MOUNTAINS_DATA_10_PART_B = [
    // 95. Half Dome
    {
        id: 'half-dome',
        name: 'Half Dome',
        localNames: [
            { language: 'Miwok', name: 'Tis-sa-ack' },
            { language: 'English', name: 'Half Dome' }
        ],
        countries: [
            { name: 'United States', code: 'US' }
        ],
        continent: 'North America',
        mountainRange: 'Sierra Nevada',
        subRange: 'Yosemite Valley',
        elevation: 2693,
        prominence: 457,
        isolation: 3,
        coordinates: [37.7459, -119.5332],
        defaultZoom: 13,
        image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=1920&q=80',
        
        formation: {
            type: 'Granite Dome / Glacially Carved',
            age: '87-90 million years (rock)',
            tectonicPlates: ['North American Plate'],
            process: 'Cretaceous granite batholith exfoliated into dome shape. Glacial erosion carved away northwest face creating iconic half-dome appearance. Contrary to name, more than half the original dome remains. Exfoliation continues today.'
        },
        
        climbing: {
            firstAscent: {
                date: 'October 12, 1875',
                climbers: ['George Anderson'],
                route: 'Cable Route',
                expedition: 'Anderson drilled holes and installed rope to summit, solo effort.'
            },
            totalAscents: 50000,
            fatalities: 60,
            successRate: '75%',
            bestSeason: 'May to October (when cables up)',
            difficulty: 'Class 3 cables to Class 5.12 rock',
            routes: [
                { name: 'Cable Route', country: 'USA', difficulty: 'Class 3', description: 'Permit required, cables installed Memorial Day to Columbus Day' },
                { name: 'Snake Dike', country: 'USA', difficulty: '5.7 R', description: 'Classic rock route on southwest face' },
                { name: 'Regular Northwest Face', country: 'USA', difficulty: '5.12 or VI 5.9 C2', description: 'Big wall route, 23 pitches' },
                { name: 'Direct Northwest Face', country: 'USA', difficulty: 'VI 5.14', description: 'Extreme free climbing variation' }
            ]
        },
        
        climate: {
            summitTemperature: '8°C average',
            winterLow: '-15°C',
            summerHigh: '25°C',
            snowfall: 'Winter snow, cables removed October',
            winds: 'Can be severe on exposed summit',
            deathZone: 'Not applicable'
        },
        
        glaciers: [
            { name: 'No glaciers', length: 'N/A', description: 'Glacial features from Pleistocene, no active glaciers' }
        ],
        
        baseCamps: [
            { name: 'Yosemite Valley', elevation: 1200, country: 'USA', coordinates: [37.7455, -119.5936] },
            { name: 'Happy Isles', elevation: 1225, country: 'USA', coordinates: [37.7319, -119.5584] },
            { name: 'Little Yosemite Valley', elevation: 1829, country: 'USA', coordinates: [37.7333, -119.5167] },
            { name: 'Glacier Point', elevation: 2199, country: 'USA', coordinates: [37.7308, -119.5725] }
        ],
        
        nearbyPeaks: [
            { name: 'Mount Watkins', elevation: 2516, coordinates: [37.7667, -119.5000] },
            { name: 'Clouds Rest', elevation: 2971, coordinates: [37.7667, -119.4833] },
            { name: 'Mount Starr King', elevation: 2786, coordinates: [37.7000, -119.5000] },
            { name: 'Sentinel Dome', elevation: 2476, coordinates: [37.7208, -119.5833] }
        ],
        
        nearbyCities: [
            { name: 'Yosemite Village', coordinates: [37.7500, -119.5833], country: 'USA', population: 1000 },
            { name: 'Mariposa', coordinates: [37.4849, -119.9662], country: 'USA', population: 2000 },
            { name: 'Fresno', coordinates: [36.7378, -119.7871], country: 'USA', population: 530000 },
            { name: 'San Francisco', coordinates: [37.7749, -122.4194], country: 'USA', population: 880000 }
        ],
        
        flora: ['Jeffrey Pine', 'Lodgepole Pine', 'Red Fir', 'Manzanita', 'Wildflowers', 'Lichens'],
        fauna: ['Black Bear', 'Mule Deer', 'Marmot', 'Peregrine Falcon', 'Stellers Jay', 'Rattlesnake'],
        
        economicImportance: [
            { label: 'Yosemite Icon', value: 'Most recognizable symbol of Yosemite' },
            { label: 'Tourism Draw', value: 'Millions view it annually from valley' },
            { label: 'Climbing Mecca', value: 'Birthplace of modern big wall climbing' },
            { label: 'California Symbol', value: 'Featured on California state quarter' }
        ],
        
        environmentalIssues: [
            { label: 'Overcrowding', value: 'Permit system needed due to dangerous crowding' },
            { label: 'Rockfall', value: 'Ongoing exfoliation creates rockfall hazard' },
            { label: 'Lightning Deaths', value: 'Exposed summit attracts lightning strikes' },
            { label: 'Trail Impact', value: 'Millions of footsteps eroding granite' }
        ],
        
        conservation: [
            { label: 'Yosemite National Park', value: 'UNESCO World Heritage Site since 1984' },
            { label: 'Permit System', value: '300 permits per day limit since 2010' },
            { label: 'Cable Removal', value: 'Cables taken down seasonally' },
            { label: 'Wilderness Protection', value: 'Surrounding wilderness designation' }
        ],
        
        historicalImportance: [
            { label: 'Miwok Legend', value: 'Tis-sa-ack legend explains formation' },
            { label: 'First Technical Ascent', value: 'Anderson drilled first route 1875' },
            { label: 'Royal Robbins', value: 'Pioneered NW Face routes 1950s-60s' },
            { label: 'Alex Honnold', value: 'First free solo of Regular Northwest Face 2008' }
        ],
        
        records: [
            { record: 'California Quarter', value: 'Featured on California state quarter' },
            { record: 'Big Wall Birthplace', value: 'Birthplace of big wall climbing techniques' },
            { record: 'Most Photographed', value: 'Among most photographed rock formations' },
            { record: 'Free Solo', value: 'Site of famous free solos' }
        ],
        
        deathZone: false,
        technicalClimbing: true,
        permitRequired: true,
        sevenSummit: false,
        eightThousander: false
    },

    // 96. El Capitan
    {
        id: 'el-capitan',
        name: 'El Capitan',
        localNames: [
            { language: 'Miwok', name: 'Tu-tok-a-nu-la' },
            { language: 'Spanish', name: 'El Capitán' },
            { language: 'English', name: 'El Capitan' }
        ],
        countries: [
            { name: 'United States', code: 'US' }
        ],
        continent: 'North America',
        mountainRange: 'Sierra Nevada',
        subRange: 'Yosemite Valley',
        elevation: 2308,
        prominence: 13,
        isolation: 0.5,
        coordinates: [37.7341, -119.6377],
        defaultZoom: 14,
        image: 'https://images.unsplash.com/photo-1527489377706-5bf97e608852?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1527489377706-5bf97e608852?w=1920&q=80',
        
        formation: {
            type: 'Granite Monolith',
            age: '100 million years',
            tectonicPlates: ['North American Plate'],
            process: 'Single piece of granite formed from Sierra Nevada batholith. Glacial erosion carved surrounding valley leaving dramatic 900m vertical wall. Remarkably solid rock with few cracks makes climbing extremely difficult. Worlds largest exposed granite monolith.'
        },
        
        climbing: {
            firstAscent: {
                date: 'November 12, 1958',
                climbers: ['Warren Harding', 'Wayne Merry', 'George Whitmore'],
                route: 'The Nose',
                expedition: '45 days over 18 months to complete first ascent.'
            },
            totalAscents: 5000,
            fatalities: 30,
            successRate: '60%',
            bestSeason: 'April to June, September to November',
            difficulty: 'Grade V-VI, 5.8-5.14',
            routes: [
                { name: 'The Nose', country: 'USA', difficulty: 'VI 5.9 C2 or 5.14a', description: 'Most famous big wall route in world, 31 pitches' },
                { name: 'Salathe Wall', country: 'USA', difficulty: 'VI 5.9 C2 or 5.13b', description: 'Classic free climbing objective' },
                { name: 'Freerider', country: 'USA', difficulty: 'VI 5.12d', description: 'Route of Honnolds famous free solo' },
                { name: 'Dawn Wall', country: 'USA', difficulty: 'VI 5.14d', description: 'Hardest big wall route in world' }
            ]
        },
        
        climate: {
            summitTemperature: '10°C average',
            winterLow: '-10°C',
            summerHigh: '28°C',
            snowfall: 'Winter snow possible',
            winds: 'Generally light in valley',
            deathZone: 'Not applicable'
        },
        
        glaciers: [
            { name: 'No glaciers', length: 'N/A', description: 'Glacial erosion shaped valley, no current glaciers' }
        ],
        
        baseCamps: [
            { name: 'El Cap Meadow', elevation: 1195, country: 'USA', coordinates: [37.7225, -119.6375] },
            { name: 'Camp 4', elevation: 1200, country: 'USA', coordinates: [37.7417, -119.6042] },
            { name: 'Yosemite Lodge', elevation: 1200, country: 'USA', coordinates: [37.7433, -119.5997] },
            { name: 'El Cap Base', elevation: 1200, country: 'USA', coordinates: [37.7333, -119.6333] }
        ],
        
        nearbyPeaks: [
            { name: 'Half Dome', elevation: 2693, coordinates: [37.7459, -119.5332] },
            { name: 'Cathedral Rocks', elevation: 2030, coordinates: [37.7167, -119.6333] },
            { name: 'Sentinel Rock', elevation: 2146, coordinates: [37.7250, -119.5917] },
            { name: 'Middle Cathedral Rock', elevation: 2007, coordinates: [37.7183, -119.6233] }
        ],
        
        nearbyCities: [
            { name: 'Yosemite Village', coordinates: [37.7500, -119.5833], country: 'USA', population: 1000 },
            { name: 'El Portal', coordinates: [37.6722, -119.7831], country: 'USA', population: 450 },
            { name: 'Mariposa', coordinates: [37.4849, -119.9662], country: 'USA', population: 2000 },
            { name: 'Merced', coordinates: [37.3022, -120.4830], country: 'USA', population: 84000 }
        ],
        
        flora: ['Black Oak', 'Ponderosa Pine', 'Incense Cedar', 'Manzanita', 'California Bay', 'Poison Oak'],
        fauna: ['Black Bear', 'Mule Deer', 'Coyote', 'Peregrine Falcon', 'Great Horned Owl', 'Gray Squirrel'],
        
        economicImportance: [
            { label: 'Climbing Mecca', value: 'Most famous climbing destination on Earth' },
            { label: 'Tourism Icon', value: 'Millions photograph it annually' },
            { label: 'Film Location', value: 'Featured in countless films and documentaries' },
            { label: 'Free Solo Film', value: '2018 film won Academy Award' }
        ],
        
        environmentalIssues: [
            { label: 'Climber Impact', value: 'Thousands of ascents impact rock and environment' },
            { label: 'Fixed Gear', value: 'Bolts and fixed anchors on routes' },
            { label: 'Valley Crowding', value: 'Viewing area congestion' },
            { label: 'Rockfall', value: 'Ongoing natural rockfall process' }
        ],
        
        conservation: [
            { label: 'Yosemite National Park', value: 'Protected within park since 1890' },
            { label: 'Camp 4 Historic Site', value: 'National Historic Landmark for climbing history' },
            { label: 'Peregrine Recovery', value: 'Successful falcon reintroduction' },
            { label: 'Climbing Management', value: 'Park manages climbing activity' }
        ],
        
        historicalImportance: [
            { label: 'Big Wall Pioneer', value: 'The Nose pioneered modern big wall climbing' },
            { label: 'Camp 4 Culture', value: 'Camp 4 birthplace of American climbing culture' },
            { label: 'Speed Records', value: 'Site of famous speed climbing competition' },
            { label: 'Free Solo', value: 'Alex Honnolds 2017 free solo made global news' }
        ],
        
        records: [
            { record: 'Largest Granite Monolith', value: 'Largest exposed granite monolith on Earth' },
            { record: 'Most Famous Wall', value: 'Most famous big wall in climbing' },
            { record: 'Speed Record', value: 'Current record: under 2 hours for The Nose' },
            { record: 'Free Solo', value: 'Site of most famous free solo in history' }
        ],
        
        deathZone: false,
        technicalClimbing: true,
        permitRequired: false,
        sevenSummit: false,
        eightThousander: false
    },

    // 97. Table Mountain
    {
        id: 'table-mountain',
        name: 'Table Mountain',
        localNames: [
            { language: 'Khoekhoe', name: 'Huriǂoaxa' },
            { language: 'Afrikaans', name: 'Tafelberg' },
            { language: 'English', name: 'Table Mountain' }
        ],
        countries: [
            { name: 'South Africa', code: 'ZA' }
        ],
        continent: 'Africa',
        mountainRange: 'Cape Fold Belt',
        subRange: 'Table Mountain Chain',
        elevation: 1085,
        prominence: 1067,
        isolation: 48,
        coordinates: [-33.9625, 18.4036],
        defaultZoom: 13,
        image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=1920&q=80',
        
        formation: {
            type: 'Sandstone Plateau / Erosional Remnant',
            age: '600 million years (rock)',
            tectonicPlates: ['African Plate'],
            process: 'Composed of hard sandstone formed from beach sands 600 million years ago. Resistant rock survived while softer surrounding rock eroded. Famous flat top from horizontal bedding resistant to erosion. Among oldest mountains on Earth.'
        },
        
        climbing: {
            firstAscent: {
                date: '1503',
                climbers: ['António de Saldanha'],
                route: 'Unknown',
                expedition: 'Portuguese navigator during stop at Cape of Good Hope.'
            },
            totalAscents: 1000000,
            fatalities: 50,
            successRate: '99%',
            bestSeason: 'Year-round, best April to May',
            difficulty: 'Easy hiking to hard rock climbing',
            routes: [
                { name: 'Platteklip Gorge', country: 'South Africa', difficulty: 'Easy', description: 'Most popular hiking route, 2-3 hours up' },
                { name: 'India Venster', country: 'South Africa', difficulty: 'Moderate', description: 'Scrambling route with great views' },
                { name: 'Skeleton Gorge', country: 'South Africa', difficulty: 'Moderate', description: 'Through Kirstenbosch Gardens' },
                { name: 'Cable Car', country: 'South Africa', difficulty: 'None', description: 'Rotating cable car since 1929' }
            ]
        },
        
        climate: {
            summitTemperature: '12°C average',
            winterLow: '2°C',
            summerHigh: '25°C',
            snowfall: 'Very rare, occasional frost',
            winds: 'Famous "tablecloth" cloud formation',
            deathZone: 'Not applicable'
        },
        
        glaciers: [
            { name: 'No glaciers', length: 'N/A', description: 'Mediterranean climate, no ice' }
        ],
        
        baseCamps: [
            { name: 'Lower Cable Station', elevation: 363, country: 'South Africa', coordinates: [-33.9567, 18.4033] },
            { name: 'Kirstenbosch Gardens', elevation: 130, country: 'South Africa', coordinates: [-33.9881, 18.4328] },
            { name: 'Camps Bay', elevation: 10, country: 'South Africa', coordinates: [-33.9506, 18.3772] },
            { name: 'Cape Town City', elevation: 30, country: 'South Africa', coordinates: [-33.9249, 18.4241] }
        ],
        
        nearbyPeaks: [
            { name: 'Devils Peak', elevation: 1000, coordinates: [-33.9583, 18.4333] },
            { name: 'Lions Head', elevation: 669, coordinates: [-33.9361, 18.3892] },
            { name: 'Signal Hill', elevation: 350, coordinates: [-33.9208, 18.3978] },
            { name: 'Twelve Apostles', elevation: 818, coordinates: [-34.0000, 18.3667] }
        ],
        
        nearbyCities: [
            { name: 'Cape Town', coordinates: [-33.9249, 18.4241], country: 'South Africa', population: 435000 },
            { name: 'Stellenbosch', coordinates: [-33.9321, 18.8602], country: 'South Africa', population: 180000 },
            { name: 'Paarl', coordinates: [-33.7333, 18.9667], country: 'South Africa', population: 200000 },
            { name: 'Somerset West', coordinates: [-34.0833, 18.8500], country: 'South Africa', population: 55000 }
        ],
        
        flora: ['Fynbos', 'Proteas', 'Ericas', 'Silver Trees', 'Restios', 'Disa Orchids'],
        fauna: ['Rock Hyrax (Dassie)', 'Klipspringer', 'Porcupine', 'Caracal', 'Baboon', 'Sunbirds'],
        
        economicImportance: [
            { label: 'Tourism Icon', value: 'Cape Towns defining landmark' },
            { label: 'New 7 Wonders', value: 'Voted New 7 Wonders of Nature in 2011' },
            { label: 'Cable Car', value: 'Over 1 million cable car passengers annually' },
            { label: 'Wine Tourism', value: 'Backdrop for Cape wine region' }
        ],
        
        environmentalIssues: [
            { label: 'Invasive Species', value: 'Pine and eucalyptus threatening fynbos' },
            { label: 'Fire Risk', value: 'Mediterranean climate creates fire danger' },
            { label: 'Water Scarcity', value: 'Climate change affecting mountain catchment' },
            { label: 'Trail Erosion', value: 'Heavy use impacting paths' }
        ],
        
        conservation: [
            { label: 'Table Mountain National Park', value: 'Protected since 1998' },
            { label: 'UNESCO World Heritage', value: 'Part of Cape Floral Region WHS' },
            { label: 'Fynbos Protection', value: 'Unique biome protected' },
            { label: 'Alien Clearing', value: 'Invasive plant removal programs' }
        ],
        
        historicalImportance: [
            { label: 'First European Climb', value: 'Portuguese navigator climbed in 1503' },
            { label: 'Tavern of the Seas', value: 'Cape Town stop for ships rounding Africa' },
            { label: 'Cable Car History', value: 'One of oldest cable cars still operating' },
            { label: 'Apartheid History', value: 'Robben Island visible from summit' }
        ],
        
        records: [
            { record: 'New 7 Wonders', value: 'Voted New 7 Wonders of Nature' },
            { record: 'Oldest Mountain', value: 'Among oldest exposed rock on Earth' },
            { record: 'Biodiversity Hotspot', value: 'Cape Floral Kingdom is smallest but richest' },
            { record: 'Most Visited Africa', value: 'Most visited natural attraction in Africa' }
        ],
        
        deathZone: false,
        technicalClimbing: false,
        permitRequired: false,
        sevenSummit: false,
        eightThousander: false
    }
];
// mountains-data-10.js - Part C: Mountains 98-100

const MOUNTAINS_DATA_10_PART_C = [
    // 98. Aoraki / Mount Cook
    {
        id: 'aoraki-mount-cook',
        name: 'Aoraki / Mount Cook',
        localNames: [
            { language: 'Māori', name: 'Aoraki' },
            { language: 'English', name: 'Mount Cook' }
        ],
        countries: [
            { name: 'New Zealand', code: 'NZ' }
        ],
        continent: 'Australia/Oceania',
        mountainRange: 'Southern Alps',
        subRange: 'Main Divide',
        elevation: 3724,
        prominence: 3724,
        isolation: 3295,
        coordinates: [-43.5950, 170.1418],
        defaultZoom: 12,
        image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=80',
        
        formation: {
            type: 'Fold Mountain / Alpine Fault',
            age: '5-10 million years (current uplift)',
            tectonicPlates: ['Pacific Plate', 'Australian Plate'],
            process: 'Formed by collision of Pacific and Australian plates along Alpine Fault. Rapid uplift of 10mm per year matched by erosion. Composed of greywacke sandstone and argillite. Lost 10m from summit in 1991 rock avalanche.'
        },
        
        climbing: {
            firstAscent: {
                date: 'December 25, 1894',
                climbers: ['Tom Fyfe', 'Jack Clarke', 'George Graham'],
                route: 'North Ridge (Hooker Face)',
                expedition: 'New Zealand team beat approaching British/Swiss expedition by one day.'
            },
            totalAscents: 1500,
            fatalities: 80,
            successRate: '40%',
            bestSeason: 'November to February',
            difficulty: 'Grade 3 to Grade 6',
            routes: [
                { name: 'Linda Glacier Route', country: 'New Zealand', difficulty: 'Grade 3', description: 'Standard route via Tasman Glacier' },
                { name: 'Zurbriggen Ridge', country: 'New Zealand', difficulty: 'Grade 3', description: 'East ridge, classic route' },
                { name: 'East Face', country: 'New Zealand', difficulty: 'Grade 5', description: 'Serious alpine route' },
                { name: 'Caroline Face', country: 'New Zealand', difficulty: 'Grade 6', description: 'One of worlds classic ice routes' }
            ]
        },
        
        climate: {
            summitTemperature: '-15°C average',
            winterLow: '-35°C',
            summerHigh: '0°C',
            snowfall: 'Extremely heavy, over 10m annually',
            winds: 'Frequent severe storms from Tasman Sea',
            deathZone: 'Not applicable'
        },
        
        glaciers: [
            { name: 'Tasman Glacier', length: '23 km', description: 'Longest glacier in New Zealand' },
            { name: 'Hooker Glacier', length: '10 km', description: 'West side approach glacier' },
            { name: 'Mueller Glacier', length: '8 km', description: 'Near Mount Cook Village' },
            { name: 'Fox Glacier', length: '13 km', description: 'West coast glacier' }
        ],
        
        baseCamps: [
            { name: 'Aoraki/Mount Cook Village', elevation: 765, country: 'New Zealand', coordinates: [-43.7350, 170.0961] },
            { name: 'Plateau Hut', elevation: 2200, country: 'New Zealand', coordinates: [-43.6000, 170.1250] },
            { name: 'Empress Hut', elevation: 2490, country: 'New Zealand', coordinates: [-43.5750, 170.1000] },
            { name: 'Mueller Hut', elevation: 1800, country: 'New Zealand', coordinates: [-43.7167, 170.0667] }
        ],
        
        nearbyPeaks: [
            { name: 'Mount Tasman', elevation: 3497, coordinates: [-43.5433, 170.0894] },
            { name: 'Mount Dampier', elevation: 3440, coordinates: [-43.5567, 170.1167] },
            { name: 'Mount Hicks', elevation: 3198, coordinates: [-43.5167, 170.0833] },
            { name: 'Mount Sefton', elevation: 3151, coordinates: [-43.6667, 170.0333] }
        ],
        
        nearbyCities: [
            { name: 'Twizel', coordinates: [-44.2575, 170.0989], country: 'New Zealand', population: 1200 },
            { name: 'Lake Tekapo', coordinates: [-44.0047, 170.4772], country: 'New Zealand', population: 400 },
            { name: 'Timaru', coordinates: [-44.3958, 171.2550], country: 'New Zealand', population: 28000 },
            { name: 'Christchurch', coordinates: [-43.5321, 172.6362], country: 'New Zealand', population: 380000 }
        ],
        
        flora: ['Mountain Beech', 'Snow Totara', 'Mountain Daisy', 'Edelweiss (introduced)', 'Tussock Grass', 'Alpine Herbs'],
        fauna: ['Kea (Alpine Parrot)', 'Rock Wren', 'Chamois (introduced)', 'Tahr (introduced)', 'Falcon', 'Blue Duck'],
        
        economicImportance: [
            { label: 'New Zealand Icon', value: 'Featured on $5 note, national symbol' },
            { label: 'Tourism Draw', value: 'Major tourism destination for South Island' },
            { label: 'Mountaineering School', value: 'Training ground for NZ mountaineers' },
            { label: 'Hillary Legacy', value: 'Where Sir Edmund Hillary trained for Everest' }
        ],
        
        environmentalIssues: [
            { label: 'Rapid Glacier Retreat', value: 'Tasman Glacier losing mass rapidly' },
            { label: 'Glacial Lake Formation', value: 'Proglacial lakes forming, flood risk' },
            { label: 'Introduced Species', value: 'Tahr and chamois impacting alpine ecosystems' },
            { label: 'Summit Collapse', value: 'Lost 10m in 1991 rock avalanche' }
        ],
        
        conservation: [
            { label: 'Aoraki/Mount Cook NP', value: 'Protected since 1953, UNESCO World Heritage since 1990' },
            { label: 'Dual Naming', value: 'Official dual Māori-English name since 1998' },
            { label: 'Te Wāhipounamu', value: 'Part of larger World Heritage area' },
            { label: 'Pest Control', value: 'Tahr culling programs active' }
        ],
        
        historicalImportance: [
            { label: 'Māori Legend', value: 'Aoraki was ancestor who became mountain' },
            { label: 'Hillary Training', value: 'Sir Edmund Hillary honed skills here' },
            { label: 'First Ascent Race', value: '1894 race between NZ and European teams' },
            { label: 'Aviation Pioneer', value: 'Harry Wigley pioneered ski plane landings' }
        ],
        
        records: [
            { record: 'Highest New Zealand', value: 'Highest peak in New Zealand at 3,724m' },
            { record: 'Hillary Connection', value: 'Training ground for first Everest summiter' },
            { record: 'Longest NZ Glacier', value: 'Tasman Glacier longest in NZ' },
            { record: 'Summit Collapse', value: 'Lost 10m height in 1991 avalanche' }
        ],
        
        deathZone: false,
        technicalClimbing: true,
        permitRequired: false,
        sevenSummit: false,
        eightThousander: false
    },

    // 99. Mount Kailash
    {
        id: 'mount-kailash',
        name: 'Mount Kailash',
        localNames: [
            { language: 'Tibetan', name: 'གངས་རིན་པོ་ཆེ (Gang Rinpoche)' },
            { language: 'Sanskrit', name: 'कैलाश (Kailāśa)' },
            { language: 'Chinese', name: '冈仁波齐 (Gāng Rénbōqí)' }
        ],
        countries: [
            { name: 'China (Tibet)', code: 'CN' }
        ],
        continent: 'Asia',
        mountainRange: 'Transhimalaya',
        subRange: 'Kailash Range',
        elevation: 6638,
        prominence: 1319,
        isolation: 95,
        coordinates: [31.0675, 81.3119],
        defaultZoom: 11,
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
        
        formation: {
            type: 'Fold Mountain / Sedimentary Peak',
            age: '50 million years',
            tectonicPlates: ['Indian Plate', 'Eurasian Plate'],
            process: 'Formed during Himalayan orogeny when Indian Plate collided with Eurasian Plate. Composed of black rock with striations from vertical fractures. Distinctive pyramidal shape visible from all directions. Religious prohibition has prevented any climbing attempts.'
        },
        
        climbing: {
            firstAscent: {
                date: 'Never climbed',
                climbers: ['None - Unclimbed'],
                route: 'N/A',
                expedition: 'Climbing prohibited due to sacred status. Chinese government officially banned all attempts in 2001.'
            },
            totalAscents: 0,
            fatalities: 0,
            successRate: '0%',
            bestSeason: 'May to October (for kora/pilgrimage)',
            difficulty: 'Unknown - Never attempted',
            routes: [
                { name: 'Kora (Pilgrimage Circuit)', country: 'China', difficulty: 'Trek', description: '52km walking circuit around mountain, 3 days typically' },
                { name: 'Inner Kora', country: 'China', difficulty: 'Trek', description: 'Shorter inner circuit for devout pilgrims' }
            ]
        },
        
        climate: {
            summitTemperature: '-30°C average (estimated)',
            winterLow: '-45°C',
            summerHigh: '-10°C',
            snowfall: 'Heavy snowfall, permanently snow-capped',
            winds: 'High altitude winds severe',
            deathZone: 'Not applicable but high altitude'
        },
        
        glaciers: [
            { name: 'Northern Glaciers', length: '2 km', description: 'Multiple glaciers on north face' },
            { name: 'Southern Glaciers', length: '1.5 km', description: 'Smaller glaciers on south face' }
        ],
        
        baseCamps: [
            { name: 'Darchen', elevation: 4560, country: 'China', coordinates: [30.9833, 81.2833] },
            { name: 'Dirapuk Monastery', elevation: 5080, country: 'China', coordinates: [31.0833, 81.3167] },
            { name: 'Zutulpuk Monastery', elevation: 4790, country: 'China', coordinates: [31.0667, 81.3667] },
            { name: 'Dolma La Pass', elevation: 5636, country: 'China', coordinates: [31.1000, 81.3333] }
        ],
        
        nearbyPeaks: [
            { name: 'Mount Naimona\'nyi', elevation: 7694, coordinates: [30.4333, 81.3333] },
            { name: 'Gurla Mandhata', elevation: 7694, coordinates: [30.4333, 81.3000] },
            { name: 'Unnamed Peak', elevation: 6200, coordinates: [31.0500, 81.2833] }
        ],
        
        nearbyCities: [
            { name: 'Purang', coordinates: [30.2833, 81.1833], country: 'China', population: 10000 },
            { name: 'Lhasa', coordinates: [29.6500, 91.1000], country: 'China', population: 560000 },
            { name: 'Almora (India)', coordinates: [29.5972, 79.6567], country: 'India', population: 35000 },
            { name: 'Kathmandu', coordinates: [27.7172, 85.3240], country: 'Nepal', population: 1400000 }
        ],
        
        flora: ['Alpine Meadows', 'Cushion Plants', 'Wild Flowers', 'Lichens', 'High Altitude Grasses'],
        fauna: ['Tibetan Antelope', 'Wild Yak', 'Tibetan Wolf', 'Snow Leopard', 'Golden Eagle', 'Lammergeier'],
        
        economicImportance: [
            { label: 'Pilgrimage Tourism', value: 'Thousands of pilgrims annually from four religions' },
            { label: 'Sacred Tourism', value: 'Spiritual tourism from worldwide seekers' },
            { label: 'Cultural Heritage', value: 'Tibetan cultural identity centerpiece' },
            { label: 'Permit Revenue', value: 'Chinese permits generate significant income' }
        ],
        
        environmentalIssues: [
            { label: 'Access Development', value: 'Road construction impacting pristine area' },
            { label: 'Waste Management', value: 'Pilgrim waste accumulating on kora route' },
            { label: 'Climate Change', value: 'Glacier and snow cover decreasing' },
            { label: 'Political Restrictions', value: 'Complex permit system limits traditional pilgrims' }
        ],
        
        conservation: [
            { label: 'Unclimbed Status', value: 'Climbing ban protects sacred mountain' },
            { label: 'Protected Area', value: 'Part of Chinese protected zone' },
            { label: 'Pilgrim Route Management', value: 'Traditional routes maintained' },
            { label: 'Religious Protection', value: 'Sacred status provides de facto protection' }
        ],
        
        historicalImportance: [
            { label: 'Hindu Abode of Shiva', value: 'Believed home of Lord Shiva and Parvati' },
            { label: 'Buddhist Significance', value: 'Site of Buddha\'s enlightenment in Bon/Buddhist tradition' },
            { label: 'Jain Sacred Site', value: 'Where first Jain Tirthankara attained liberation' },
            { label: 'Bon Religion', value: 'Considered center of spiritual power' },
            { label: 'Reinhold Messner', value: 'Declined permit in 1985, called climbing sacrilege' }
        ],
        
        records: [
            { record: 'Most Sacred Mountain', value: 'Sacred to four religions - unique in world' },
            { record: 'Highest Unclimbed', value: 'One of highest peaks never climbed' },
            { record: 'Four Religion Site', value: 'Only mountain sacred to Hinduism, Buddhism, Jainism, and Bon' },
            { record: 'Source of Rivers', value: 'Near sources of four great Asian rivers' }
        ],
        
        deathZone: false,
        technicalClimbing: false,
        permitRequired: true,
        sevenSummit: false,
        eightThousander: false
    },

    // 100. Kirkjufell
    {
        id: 'kirkjufell',
        name: 'Kirkjufell',
        localNames: [
            { language: 'Icelandic', name: 'Kirkjufell' },
            { language: 'English', name: 'Church Mountain' }
        ],
        countries: [
            { name: 'Iceland', code: 'IS' }
        ],
        continent: 'Europe',
        mountainRange: 'Snæfellsnes Peninsula',
        subRange: 'Western Iceland',
        elevation: 463,
        prominence: 454,
        isolation: 12,
        coordinates: [64.9426, -23.3061],
        defaultZoom: 14,
        image: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=400&q=80',
        backgroundImage: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=1920&q=80',
        
        formation: {
            type: 'Nunatak / Palagonite Formation',
            age: '2-3 million years',
            tectonicPlates: ['North American Plate', 'Eurasian Plate'],
            process: 'Formed as a nunatak - a peak protruding through glacial ice sheet. Composed of palagonite tuff from subglacial volcanic eruptions. Glaciers carved distinctive steep-sided church shape. Located on spreading Mid-Atlantic Ridge.'
        },
        
        climbing: {
            firstAscent: {
                date: 'Unknown (historical)',
                climbers: ['Local Icelanders'],
                route: 'Unknown',
                expedition: 'Has been climbed historically but details not recorded.'
            },
            totalAscents: 500,
            fatalities: 3,
            successRate: '70%',
            bestSeason: 'June to August',
            difficulty: 'Difficult scramble',
            routes: [
                { name: 'Standard Route', country: 'Iceland', difficulty: 'Difficult Scramble', description: 'Steep loose rock, not recommended for most - guides essential' },
                { name: 'Viewing Only', country: 'Iceland', difficulty: 'Easy', description: 'Most visitors photograph from Kirkjufellsfoss viewpoint' }
            ]
        },
        
        climate: {
            summitTemperature: '2°C average',
            winterLow: '-10°C',
            summerHigh: '12°C',
            snowfall: 'Regular winter snow, often snow-capped',
            winds: 'Frequent strong winds from Atlantic',
            deathZone: 'Not applicable'
        },
        
        glaciers: [
            { name: 'No glaciers', length: 'N/A', description: 'Seasonal snow only' }
        ],
        
        baseCamps: [
            { name: 'Grundarfjörður', elevation: 5, country: 'Iceland', coordinates: [64.9167, -23.2500] },
            { name: 'Kirkjufellsfoss Viewpoint', elevation: 20, country: 'Iceland', coordinates: [64.9408, -23.3083] },
            { name: 'Stykkishólmur', elevation: 10, country: 'Iceland', coordinates: [65.0667, -22.7333] },
            { name: 'Ólafsvík', elevation: 5, country: 'Iceland', coordinates: [64.8833, -23.7000] }
        ],
        
        nearbyPeaks: [
            { name: 'Snæfellsjökull', elevation: 1446, coordinates: [64.8028, -23.7767] },
            { name: 'Helgrindur', elevation: 988, coordinates: [64.8833, -23.6667] },
            { name: 'Drápuhlíðarfjall', elevation: 651, coordinates: [64.9333, -23.1833] }
        ],
        
        nearbyCities: [
            { name: 'Grundarfjörður', coordinates: [64.9167, -23.2500], country: 'Iceland', population: 900 },
            { name: 'Stykkishólmur', coordinates: [65.0667, -22.7333], country: 'Iceland', population: 1200 },
            { name: 'Ólafsvík', coordinates: [64.8833, -23.7000], country: 'Iceland', population: 1000 },
            { name: 'Reykjavík', coordinates: [64.1466, -21.9426], country: 'Iceland', population: 130000 }
        ],
        
        flora: ['Arctic Moss', 'Lichens', 'Crowberry', 'Arctic Thyme', 'Bilberry', 'Mountain Avens'],
        fauna: ['Arctic Fox', 'Puffin', 'Arctic Tern', 'Eider Duck', 'Seal', 'Orca (offshore)'],
        
        economicImportance: [
            { label: 'Most Photographed', value: 'Most photographed mountain in Iceland' },
            { label: 'Game of Thrones', value: 'Featured as "Arrowhead Mountain" in GOT' },
            { label: 'Tourism Magnet', value: 'Draws thousands to Snæfellsnes Peninsula' },
            { label: 'Northern Lights', value: 'Popular aurora photography location' }
        ],
        
        environmentalIssues: [
            { label: 'Overtourism', value: 'Heavy visitor numbers impact small area' },
            { label: 'Trail Erosion', value: 'Viewpoint paths eroding' },
            { label: 'Climbing Danger', value: 'Steep loose rock causes accidents' },
            { label: 'Vegetation Damage', value: 'Fragile arctic flora trampled' }
        ],
        
        conservation: [
            { label: 'Protected Landscape', value: 'Part of Snæfellsnes protected area' },
            { label: 'Climbing Discouraged', value: 'Authorities discourage summit attempts' },
            { label: 'Viewing Platforms', value: 'Designated photo spots to reduce impact' },
            { label: 'Ranger Presence', value: 'Summer ranger patrols' }
        ],
        
        historicalImportance: [
            { label: 'Viking Heritage', value: 'Vikings settled this area in 9th century' },
            { label: 'Church Shape', value: 'Named for resemblance to church steeple' },
            { label: 'Fishing History', value: 'Grundarfjörður was historic fishing village' },
            { label: 'Jules Verne', value: 'Nearby Snæfellsjökull featured in Journey to Center of Earth' }
        ],
        
        records: [
            { record: 'Most Photographed Iceland', value: 'Most photographed mountain in Iceland' },
            { record: 'Game of Thrones', value: 'Arrowhead Mountain north of The Wall' },
            { record: 'Instagram Famous', value: 'Among most Instagrammed mountains globally' },
            { record: 'Iconic Shape', value: 'Distinctive pyramid shape recognized worldwide' }
        ],
        
        deathZone: false,
        technicalClimbing: false,
        permitRequired: false,
        sevenSummit: false,
        eightThousander: false
    }
];

// ============================================
// COMBINE ALL PARTS INTO MOUNTAINS_DATA_10
// ============================================

const MOUNTAINS_DATA_10 = [
    ...MOUNTAINS_DATA_10_PART_A,
    ...MOUNTAINS_DATA_10_PART_B,
    ...MOUNTAINS_DATA_10_PART_C
];

// Export for use in main data combiner
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { MOUNTAINS_DATA_10 };
}

console.log('Mountains Data 10 loaded:', MOUNTAINS_DATA_10.length, 'mountains (Iconic Peaks Worldwide)');
