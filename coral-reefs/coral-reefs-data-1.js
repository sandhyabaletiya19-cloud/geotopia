    // ========================================
    // #6 - ANDROS BARRIER REEF
    // ========================================
    {
        id: 'andros-barrier-reef',
        name: 'Andros Barrier Reef',
        countries: [
            { name: 'Bahamas', code: 'BS' }
        ],
        ocean: 'Atlantic Ocean',
        region: 'Caribbean Sea, Bahamas',
        reefType: 'barrier',
        
        length: 225,
        area: 5800,
        numberOfReefs: 200,
        numberOfIslands: 700,
        
        coordinates: [24.5000, -77.9000],
        defaultZoom: 8,
        
        image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600',
        backgroundImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920',
        
        description: 'The Andros Barrier Reef is the third-largest barrier reef in the world and the largest in the Western Atlantic. Located off the east coast of Andros Island, the largest island in the Bahamas, this reef system drops dramatically into the Tongue of the Ocean, a deep oceanic trench reaching depths over 6,000 feet. The reef is renowned for its blue holes, pristine coral formations, and exceptional diving opportunities.',
        
        formation: {
            type: 'Barrier reef along carbonate platform',
            age: '10,000+ years',
            process: 'Formed on the edge of the Great Bahama Bank, a massive carbonate platform. The reef developed as sea levels rose after the last ice age, with coral growth following the platform edge.'
        },
        
        reefStructure: {
            lagoon: true,
            reefCrest: true,
            foreReef: true,
            backReef: true,
            reefFlat: true
        },
        
        biodiversity: {
            coralSpecies: 50,
            fishSpecies: 300,
            molluskSpecies: 200,
            marineAnimals: [
                'Caribbean reef sharks',
                'Nurse sharks',
                'Hammerhead sharks',
                'Eagle rays',
                'Green sea turtles',
                'Hawksbill turtles',
                'Dolphins',
                'Barracudas',
                'Nassau groupers',
                'Spiny lobsters'
            ],
            endangeredSpecies: [
                'Nassau grouper',
                'Hawksbill turtle',
                'Elkhorn coral',
                'Staghorn coral',
                'Queen conch'
            ]
        },
        
        nearbyIslands: [
            { name: 'Andros Island', coordinates: [24.50, -77.97] },
            { name: 'New Providence', coordinates: [25.05, -77.35] },
            { name: 'Berry Islands', coordinates: [25.75, -77.83] },
            { name: 'Bimini', coordinates: [25.73, -79.27] },
            { name: 'Exumas', coordinates: [23.50, -75.77] }
        ],
        
        oceanConditions: {
            temperature: '24-29°C',
            salinity: '36 ppt',
            currents: ['Gulf Stream', 'Antilles Current'],
            visibility: '25-45 meters'
        },
        
        diveSites: [
            {
                name: 'Tongue of the Ocean Wall',
                coordinates: [24.50, -77.70],
                depth: '60m+',
                description: 'Dramatic wall dropping 6,000 feet into the abyss.'
            },
            {
                name: 'Blue Holes of Andros',
                coordinates: [24.75, -77.85],
                depth: '30m',
                description: 'Underwater cave systems with unique formations.'
            },
            {
                name: 'Over the Wall',
                coordinates: [24.45, -77.72],
                depth: '40m',
                description: 'Spectacular drop-off with large pelagic fish.'
            },
            {
                name: 'Big Blue Hole',
                coordinates: [24.82, -77.78],
                depth: '50m',
                description: 'Largest blue hole in Andros, mysterious depths.'
            },
            {
                name: 'Fresh Creek',
                coordinates: [24.72, -77.77],
                depth: '20m',
                description: 'Easy dive with abundant marine life and coral.'
            }
        ],
        
        cities: [
            { name: 'Nassau', coordinates: [25.0343, -77.3963], country: 'Bahamas', population: 274400 },
            { name: 'Freeport', coordinates: [26.5333, -78.7000], country: 'Bahamas', population: 46000 },
            { name: 'Andros Town', coordinates: [24.7000, -77.7700], country: 'Bahamas', population: 2500 },
            { name: 'Fresh Creek', coordinates: [24.7200, -77.7600], country: 'Bahamas', population: 900 }
        ],
        
        economicImportance: [
            { label: 'Tourism', value: '$350 million annually' },
            { label: 'Fishing', value: 'Major commercial and sport fishing' },
            { label: 'Jobs', value: '5,000+ in marine sector' },
            { label: 'Research', value: 'AUTEC Naval facility research' }
        ],
        
        environmentalThreats: [
            { label: 'Coral Bleaching', value: 'Events in 2005, 2015, 2019' },
            { label: 'Hurricane Damage', value: 'Regular tropical storm impacts' },
            { label: 'Invasive Lionfish', value: 'Spreading throughout reef system' },
            { label: 'Overfishing', value: 'Pressure on Nassau grouper populations' },
            { label: 'Pollution', value: 'Runoff from development' }
        ],
        
        conservation: [
            { label: 'Andros West Side NP', value: 'Established 2002, largest park in Bahamas' },
            { label: 'Blue Holes NP', value: 'Protects unique blue hole systems' },
            { label: 'Bahamas National Trust', value: 'Managing conservation efforts' },
            { label: 'Shark Sanctuary', value: 'Bahamas banned shark fishing in 2011' }
        ],
        
        historicalImportance: [
            { label: 'Lucayan People', value: 'Indigenous inhabitants for 800+ years before Columbus' },
            { label: 'Pirates', value: 'Famous pirate haven in 17th-18th century' },
            { label: 'AUTEC', value: 'US Navy underwater testing facility since 1966' },
            { label: 'Blue Hole Exploration', value: 'Ongoing scientific cave diving research' }
        ],
        
        healthStatus: 'threatened',
        coralCoverage: 35
    },
    
    // ========================================
    // #7 - BELIZE BARRIER REEF
    // ========================================
    {
        id: 'belize-barrier-reef',
        name: 'Belize Barrier Reef',
        countries: [
            { name: 'Belize', code: 'BZ' }
        ],
        ocean: 'Atlantic Ocean',
        region: 'Caribbean Sea',
        reefType: 'barrier',
        
        length: 300,
        area: 96300,
        numberOfReefs: 450,
        numberOfIslands: 450,
        
        coordinates: [17.2500, -87.8000],
        defaultZoom: 8,
        
        image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=600',
        backgroundImage: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=1920',
        
        description: 'The Belize Barrier Reef Reserve System is a UNESCO World Heritage Site and the largest barrier reef in the Northern Hemisphere. Part of the larger Mesoamerican Reef System, it features the famous Great Blue Hole, a giant marine sinkhole that has become one of the world\'s most recognized dive sites. The reef supports an incredible diversity of marine life and is crucial to Belize\'s economy and coastal communities.',
        
        formation: {
            type: 'Barrier reef on carbonate shelf',
            age: '15,000+ years',
            process: 'Developed on a carbonate platform extending from the Yucatan Peninsula. The reef grew as sea levels rose, building upon older limestone formations including collapsed cave systems that formed the blue holes.'
        },
        
        reefStructure: {
            lagoon: true,
            reefCrest: true,
            foreReef: true,
            backReef: true,
            reefFlat: true
        },
        
        biodiversity: {
            coralSpecies: 70,
            fishSpecies: 500,
            molluskSpecies: 350,
            marineAnimals: [
                'Whale sharks',
                'Caribbean reef sharks',
                'Nurse sharks',
                'Manatees',
                'Dolphins',
                'Loggerhead turtles',
                'Hawksbill turtles',
                'Eagle rays',
                'Manta rays',
                'Moray eels'
            ],
            endangeredSpecies: [
                'West Indian manatee',
                'Hawksbill turtle',
                'Loggerhead turtle',
                'Elkhorn coral',
                'Staghorn coral',
                'Nassau grouper'
            ]
        },
        
        nearbyIslands: [
            { name: 'Ambergris Caye', coordinates: [17.92, -87.95] },
            { name: 'Caye Caulker', coordinates: [17.75, -88.02] },
            { name: 'Turneffe Atoll', coordinates: [17.30, -87.85] },
            { name: 'Lighthouse Reef Atoll', coordinates: [17.35, -87.53] },
            { name: 'Glover\'s Reef', coordinates: [16.75, -87.82] },
            { name: 'Half Moon Caye', coordinates: [17.20, -87.53] }
        ],
        
        oceanConditions: {
            temperature: '26-30°C',
            salinity: '35-36 ppt',
            currents: ['Caribbean Current'],
            visibility: '20-40 meters'
        },
        
        diveSites: [
            {
                name: 'Great Blue Hole',
                coordinates: [17.32, -87.53],
                depth: '124m',
                description: 'World-famous sinkhole, stalactites, sharks below 35m.'
            },
            {
                name: 'Half Moon Caye Wall',
                coordinates: [17.20, -87.54],
                depth: '35m',
                description: 'Dramatic wall dive with abundant eagle rays.'
            },
            {
                name: 'Turneffe Elbow',
                coordinates: [17.15, -87.75],
                depth: '30m',
                description: 'Strong currents bring big fish and sharks.'
            },
            {
                name: 'Hol Chan Cut',
                coordinates: [17.86, -87.97],
                depth: '10m',
                description: 'Channel through reef with incredible fish life.'
            },
            {
                name: 'Shark Ray Alley',
                coordinates: [17.86, -87.98],
                depth: '5m',
                description: 'Shallow site to swim with sharks and rays.'
            },
            {
                name: 'The Aquarium',
                coordinates: [17.30, -87.87],
                depth: '15m',
                description: 'Turneffe Atoll site with dense tropical fish.'
            }
        ],
        
        cities: [
            { name: 'Belize City', coordinates: [17.5046, -88.1962], country: 'Belize', population: 61461 },
            { name: 'San Pedro', coordinates: [17.9214, -87.9611], country: 'Belize', population: 16444 },
            { name: 'Caye Caulker', coordinates: [17.7500, -88.0167], country: 'Belize', population: 2000 },
            { name: 'Dangriga', coordinates: [16.9667, -88.2333], country: 'Belize', population: 9591 },
            { name: 'Placencia', coordinates: [16.5167, -88.3667], country: 'Belize', population: 3500 }
        ],
        
        economicImportance: [
            { label: 'Tourism', value: '$200 million annually' },
            { label: 'Fishing', value: '$15 million annually' },
            { label: 'Jobs', value: '30% of workforce in tourism' },
            { label: 'Coastal Protection', value: 'Protects 190,000+ residents' }
        ],
        
        environmentalThreats: [
            { label: 'Coral Bleaching', value: 'Major events in 1998, 2005, 2010, 2015' },
            { label: 'Stony Coral Tissue Loss', value: 'Disease spreading since 2019' },
            { label: 'Hurricane Damage', value: 'Regular storm impacts' },
            { label: 'Overfishing', value: 'Declining fish populations' },
            { label: 'Coastal Development', value: 'Increasing pressure on cays' }
        ],
        
        conservation: [
            { label: 'UNESCO World Heritage', value: 'Listed since 1996' },
            { label: 'Hol Chan Marine Reserve', value: 'Established 1987' },
            { label: 'Blue Hole Natural Monument', value: 'Protected since 1996' },
            { label: 'Reef Removal from Danger List', value: 'UNESCO removed from danger list in 2018' }
        ],
        
        historicalImportance: [
            { label: 'Maya Civilization', value: 'Ancient Maya fished these waters 3,000+ years ago' },
            { label: 'British Honduras', value: 'British colonial period 1638-1981' },
            { label: 'Jacques Cousteau', value: 'Explored Blue Hole in 1971' },
            { label: 'Marine Research', value: 'Important site for coral reef science' }
        ],
        
        healthStatus: 'endangered',
        coralCoverage: 20
    },
    
    // ========================================
    // #8 - NINGALOO REEF
    // ========================================
    {
        id: 'ningaloo-reef',
        name: 'Ningaloo Reef',
        countries: [
            { name: 'Australia', code: 'AU' }
        ],
        ocean: 'Indian Ocean',
        region: 'Western Australia',
        reefType: 'fringing',
        
        length: 300,
        area: 5000,
        numberOfReefs: 500,
        numberOfIslands: 0,
        
        coordinates: [-22.5000, 113.8000],
        defaultZoom: 8,
        
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600',
        backgroundImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920',
        
        description: 'Ningaloo Reef is one of the world\'s largest fringing reefs, stretching 300 kilometers along the remote coast of Western Australia. Unlike most major reef systems, Ningaloo is accessible directly from the shore, with coral formations beginning just meters from the beach. The reef is famous for its annual whale shark aggregation, when hundreds of these gentle giants gather to feed on coral spawn.',
        
        formation: {
            type: 'Fringing reef along continental coast',
            age: '5,000-10,000 years',
            process: 'Formed directly along the Western Australian coastline as a fringing reef. The arid climate and minimal river runoff have allowed coral to thrive close to shore.'
        },
        
        reefStructure: {
            lagoon: true,
            reefCrest: true,
            foreReef: true,
            backReef: true,
            reefFlat: true
        },
        
        biodiversity: {
            coralSpecies: 300,
            fishSpecies: 500,
            molluskSpecies: 600,
            marineAnimals: [
                'Whale sharks',
                'Manta rays',
                'Humpback whales',
                'Dugongs',
                'Dolphins',
                'Green sea turtles',
                'Loggerhead turtles',
                'Reef sharks',
                'Tiger sharks',
                'Giant groupers'
            ],
            endangeredSpecies: [
                'Whale shark',
                'Dugong',
                'Loggerhead turtle',
                'Green sea turtle',
                'Hawksbill turtle'
            ]
        },
        
        nearbyIslands: [
            { name: 'North West Cape', coordinates: [-21.80, 114.10] },
            { name: 'Muiron Islands', coordinates: [-21.67, 114.35] },
            { name: 'Barrow Island', coordinates: [-20.80, 115.40] },
            { name: 'Montebello Islands', coordinates: [-20.45, 115.55] }
        ],
        
        oceanConditions: {
            temperature: '21-29°C',
            salinity: '35 ppt',
            currents: ['Leeuwin Current', 'Ningaloo Current'],
            visibility: '15-40 meters'
        },
        
        diveSites: [
            {
                name: 'Navy Pier',
                coordinates: [-21.80, 114.17],
                depth: '15m',
                description: 'One of Australia\'s best shore dives, incredible fish life.'
            },
            {
                name: 'Lighthouse Bay',
                coordinates: [-21.81, 114.17],
                depth: '12m',
                description: 'Easy access dive with abundant coral and marine life.'
            },
            {
                name: 'Turquoise Bay',
                coordinates: [-22.24, 113.86],
                depth: '5m',
                description: 'Perfect snorkel site with drift along pristine reef.'
            },
            {
                name: 'The Labyrinth',
                coordinates: [-22.00, 113.95],
                depth: '18m',
                description: 'Complex coral formations creating underwater maze.'
            },
            {
                name: 'Blizzard Ridge',
                coordinates: [-22.55, 113.65],
                depth: '25m',
                description: 'Outer reef site with manta ray encounters.'
            }
        ],
        
        cities: [
            { name: 'Exmouth', coordinates: [-21.9310, 114.1250], country: 'Australia', population: 2500 },
            { name: 'Coral Bay', coordinates: [-23.1414, 113.7667], country: 'Australia', population: 200 },
            { name: 'Carnarvon', coordinates: [-24.8667, 113.6333], country: 'Australia', population: 4559 },
            { name: 'Perth', coordinates: [-31.9505, 115.8605], country: 'Australia', population: 2085973 }
        ],
        
        economicImportance: [
            { label: 'Tourism', value: '$120 million annually' },
            { label: 'Whale Shark Tourism', value: '$12 million annually' },
            { label: 'Jobs', value: '1,000+ in marine tourism' },
            { label: 'Research', value: 'Important marine research site' }
        ],
        
        environmentalThreats: [
            { label: 'Climate Change', value: 'Rising water temperatures' },
            { label: 'Coral Bleaching', value: 'Bleaching event in 2011, 2013' },
            { label: 'Oil & Gas', value: 'Nearby offshore industry' },
            { label: 'Tourism Pressure', value: 'Increasing visitor numbers' }
        ],
        
        conservation: [
            { label: 'UNESCO World Heritage', value: 'Listed since 2011' },
            { label: 'Ningaloo Marine Park', value: 'Established 1987, expanded 2004' },
            { label: 'Cape Range National Park', value: 'Protects adjacent coastal area' },
            { label: 'Sanctuary Zones', value: '34% of marine park in no-take zones' }
        ],
        
        historicalImportance: [
            { label: 'Indigenous Heritage', value: 'Baiyungu, Thalanyji people traditional lands' },
            { label: 'European Discovery', value: 'Dutch explorers charted coast in 1600s' },
            { label: 'Whaling History', value: 'Former whaling operations, now whale watching' },
            { label: 'Whale Shark Discovery', value: 'Seasonal aggregation documented in 1980s' }
        ],
        
        healthStatus: 'healthy',
        coralCoverage: 65
    },
    
    // ========================================
    // #9 - RAJA AMPAT REEFS
    // ========================================
    {
        id: 'raja-ampat-reefs',
        name: 'Raja Ampat Reefs',
        countries: [
            { name: 'Indonesia', code: 'ID' }
        ],
        ocean: 'Pacific Ocean',
        region: 'Coral Triangle, West Papua',
        reefType: 'fringing',
        
        length: 0,
        area: 40000,
        numberOfReefs: 1500,
        numberOfIslands: 1500,
        
        coordinates: [-0.5000, 130.5000],
        defaultZoom: 8,
        
        image: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=600',
        backgroundImage: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=1920',
        
        description: 'Raja Ampat, meaning "Four Kings" in Indonesian, is widely considered the most biodiverse marine environment on Earth. Located at the heart of the Coral Triangle, this archipelago of over 1,500 small islands supports more species of coral and fish than anywhere else on the planet. Scientists have recorded over 75% of all known coral species here, making it the global epicenter of marine biodiversity.',
        
        formation: {
            type: 'Fringing and patch reefs around volcanic islands',
            age: 'Varies by location, 5,000-10,000 years',
            process: 'Formed around the numerous limestone and volcanic islands of the archipelago. The region\'s position at the confluence of major ocean currents has created ideal conditions for exceptional biodiversity.'
        },
        
        reefStructure: {
            lagoon: true,
            reefCrest: true,
            foreReef: true,
            backReef: true,
            reefFlat: true
        },
        
        biodiversity: {
            coralSpecies: 600,
            fishSpecies: 1700,
            molluskSpecies: 700,
            marineAnimals: [
                'Manta rays',
                'Whale sharks',
                'Wobbegong sharks',
                'Walking sharks',
                'Dugongs',
                'Dolphins',
                'Sea turtles',
                'Giant clams',
                'Nautilus',
                'Pygmy seahorses'
            ],
            endangeredSpecies: [
                'Dugong',
                'Hawksbill turtle',
                'Green sea turtle',
                'Humphead wrasse',
                'Walking shark (endemic)',
                'Blue whale'
            ]
        },
        
        nearbyIslands: [
            { name: 'Waigeo', coordinates: [-0.10, 130.85] },
            { name: 'Batanta', coordinates: [-0.85, 130.65] },
            { name: 'Salawati', coordinates: [-1.10, 130.90] },
            { name: 'Misool', coordinates: [-1.85, 130.00] },
            { name: 'Kri Island', coordinates: [-0.55, 130.68] },
            { name: 'Arborek', coordinates: [-0.50, 130.50] }
        ],
        
        oceanConditions: {
            temperature: '27-30°C',
            salinity: '34 ppt',
            currents: ['Indonesian Throughflow', 'Halmahera Eddy'],
            visibility: '15-30 meters'
        },
        
        diveSites: [
            {
                name: 'Cape Kri',
                coordinates: [-0.55, 130.69],
                depth: '30m',
                description: 'World record holder: 374 fish species in one dive.'
            },
            {
                name: 'Manta Sandy',
                coordinates: [-0.51, 130.53],
                depth: '15m',
                description: 'Cleaning station with regular manta ray encounters.'
            },
            {
                name: 'Blue Magic',
                coordinates: [-0.52, 130.62],
                depth: '30m',
                description: 'Seamount attracting mantas, sharks, and schooling fish.'
            },
            {
                name: 'Melissa\'s Garden',
                coordinates: [-0.53, 130.55],
                depth: '20m',
                description: 'Pristine hard coral garden, one of the world\'s best.'
            },
            {
                name: 'The Passage',
                coordinates: [-0.20, 130.70],
                depth: '25m',
                description: 'Narrow channel with dramatic underwater scenery.'
            },
            {
                name: 'Misool\'s Magic Mountain',
                coordinates: [-1.95, 129.95],
                depth: '28m',
                description: 'Remote pinnacle covered in soft corals and fish.'
            }
        ],
        
        cities: [
            { name: 'Sorong', coordinates: [-0.8833, 131.2500], country: 'Indonesia', population: 220000 },
            { name: 'Waisai', coordinates: [-0.4333, 130.8167], country: 'Indonesia', population: 15000 },
            { name: 'Manokwari', coordinates: [-0.8667, 134.0833], country: 'Indonesia', population: 140000 }
        ],
        
        economicImportance: [
            { label: 'Tourism', value: '$15 million annually' },
            { label: 'Marine Entry Fees', value: '$4 million for conservation' },
            { label: 'Jobs', value: '3,000+ in eco-tourism' },
            { label: 'Research', value: 'Global center for marine research' }
        ],
        
        environmentalThreats: [
            { label: 'Blast Fishing', value: 'Illegal practice still occurring' },
            { label: 'Cyanide Fishing', value: 'For aquarium trade' },
            { label: 'Plastic Pollution', value: 'Ocean currents bring debris' },
            { label: 'Climate Change', value: 'Coral bleaching risk increasing' },
            { label: 'Shark Finning', value: 'Illegal fishing pressure' }
        ],
        
        conservation: [
            { label: 'Raja Ampat MPA', value: 'Marine Protected Area since 2007' },
            { label: 'Shark Sanctuary', value: 'Established 2012' },
            { label: 'Manta Sanctuary', value: 'Established 2012' },
            { label: 'Entry Fee System', value: 'Funds local conservation' },
            { label: 'No-Take Zones', value: 'Multiple restricted areas' }
        ],
        
        historicalImportance: [
            { label: 'Papuan Heritage', value: 'Indigenous Papuan peoples for 40,000+ years' },
            { label: 'Four Kingdoms', value: 'Named after four royal families (Waigeo, Batanta, Salawati, Misool)' },
            { label: 'Alfred Wallace', value: 'Naturalist explored region in 1860, inspiring biodiversity studies' },
            { label: 'Biodiversity Discovery', value: 'Modern scientific surveys since 2001 revealed exceptional diversity' }
        ],
        
        healthStatus: 'healthy',
        coralCoverage: 75
    },
    
    // ========================================
    // #10 - MALDIVES CORAL REEFS
    // ========================================
    {
        id: 'maldives-coral-reefs',
        name: 'Maldives Coral Reefs',
        countries: [
            { name: 'Maldives', code: 'MV' }
        ],
        ocean: 'Indian Ocean',
        region: 'South Asia',
        reefType: 'atoll',
        
        length: 0,
        area: 21100,
        numberOfReefs: 1200,
        numberOfIslands: 1192,
        
        coordinates: [3.2028, 73.2207],
        defaultZoom: 6,
        
        image: 'https://images.unsplash.com/photo-1514649923863-ceaf75b7ec00?w=600',
        backgroundImage: 'https://images.unsplash.com/photo-1514649923863-ceaf75b7ec00?w=1920',
        
        description: 'The Maldives is the world\'s lowest-lying nation, consisting of 26 natural atolls comprising over 1,192 coral islands. These atolls are built entirely on coral reefs, making the Maldives one of the most reef-dependent nations on Earth. The reefs support exceptional marine biodiversity, including manta rays, whale sharks, and colorful coral formations, while also providing the foundation upon which the entire nation exists.',
        
        formation: {
            type: 'Ring-shaped coral atolls',
            age: '55-60 million years (base), 10,000 years (current structure)',
            process: 'Formed atop ancient volcanic seamounts that gradually subsided over millions of years. As the volcanoes sank, coral growth kept pace with rising sea levels, creating the ring-shaped atolls seen today.'
        },
        
        reefStructure: {
            lagoon: true,
            reefCrest: true,
            foreReef: true,
            backReef: true,
            reefFlat: true
        },
        
        biodiversity: {
            coralSpecies: 250,
            fishSpecies: 1100,
            molluskSpecies: 400,
            marineAnimals: [
                'Manta rays',
                'Whale sharks',
                'Reef sharks',
                'Hammerhead sharks',
                'Dolphins',
                'Sea turtles',
                'Moray eels',
                'Napoleon wrasse',
                'Tuna',
                'Groupers'
            ],
            endangeredSpecies: [
                'Whale shark',
                'Hawksbill turtle',
                'Green sea turtle',
                'Giant clam',
                'Napoleon wrasse',
                'Reef manta ray'
            ]
        },
        
        nearbyIslands: [
            { name: 'Malé', coordinates: [4.1755, 73.5093] },
            { name: 'Hulhumalé', coordinates: [4.2167, 73.5333] },
            { name: 'Addu City', coordinates: [-0.63, 73.15] },
            { name: 'Maafushi', coordinates: [3.9417, 73.4908] },
            { name: 'Fuvahmulah', coordinates: [-0.2986, 73.4239] },
            { name: 'Thulusdhoo', coordinates: [4.3733, 73.6494] }
        ],
        
        oceanConditions: {
            temperature: '27-30°C',
            salinity: '34-35 ppt',
            currents: ['Monsoon-driven currents', 'Indian Ocean currents'],
            visibility: '20-50 meters'
        },
        
        diveSites: [
            {
                name: 'Hanifaru Bay',
                coordinates: [5.32, 73.18],
                depth: '20m',
                description: 'World-famous for manta ray and whale shark feeding.'
            },
            {
                name: 'Manta Point',
                coordinates: [3.87, 73.42],
                depth: '15m',
                description: 'Cleaning station with year-round manta rays.'
            },
            {
                name: 'Fish Head (Mushimasmingili Thila)',
                coordinates: [4.22, 72.98],
                depth: '30m',
                description: 'Famous thila with grey reef sharks and napoleon wrasse.'
            },
            {
                name: 'Maaya Thila',
                coordinates: [4.10, 72.92],
                depth: '30m',
                description: 'Excellent night dive with whitetip reef sharks.'
            },
            {
                name: 'Kuredu Express',
                coordinates: [5.55, 73.42],
                depth: '25m',
                description: 'Channel dive with strong currents and big fish.'
            },
            {
                name: 'HP Reef (Rainbow Reef)',
                coordinates: [4.35, 73.45],
                depth: '35m',
                description: 'Colorful soft corals covering underwater pinnacle.'
            }
        ],
        
        cities: [
            { name: 'Malé', coordinates: [4.1755, 73.5093], country: 'Maldives', population: 215000 },
            { name: 'Addu City', coordinates: [-0.6300, 73.1500], country: 'Maldives', population: 34000 },
            { name: 'Fuvahmulah', coordinates: [-0.2986, 73.4239], country: 'Maldives', population: 13000 },
            { name: 'Kulhudhuffushi', coordinates: [6.6222, 73.0697], country: 'Maldives', population: 10000 }
        ],
        
        economicImportance: [
            { label: 'Tourism', value: '$4.6 billion annually' },
            { label: 'Fishing', value: '$160 million annually' },
            { label: 'Jobs', value: '70%+ depend on reef-related industries' },
            { label: 'Coastal Protection', value: 'Reefs protect all inhabited islands' }
        ],
        
        environmentalThreats: [
            { label: 'Coral Bleaching', value: 'Devastating events in 1998, 2016' },
            { label: 'Sea Level Rise', value: 'Existential threat to low-lying nation' },
            { label: 'Ocean Warming', value: 'Indian Ocean heating rapidly' },
            { label: 'Plastic Pollution', value: 'Waste management challenges' },
            { label: 'Crown-of-Thorns', value: 'Outbreaks damage coral' }
        ],
        
        conservation: [
            { label: 'Baa Atoll Biosphere Reserve', value: 'UNESCO site since 2011' },
            { label: 'Marine Protected Areas', value: '42 protected sites' },
            { label: 'Shark Protection', value: 'Shark fishing banned since 2010' },
            { label: 'Coral Restoration', value: 'Active replanting programs at many resorts' }
        ],
        
        historicalImportance: [
            { label: 'Ancient Settlement', value: 'Inhabited for 2,500+ years' },
            { label: 'Buddhist Era', value: 'Buddhist civilization before 1153 AD' },
            { label: 'Islamic Heritage', value: 'Islamic nation since 1153 AD' },
            { label: 'Dive Tourism Pioneer', value: 'First dive resort opened 1972' },
            { label: 'Climate Advocacy', value: 'Global voice for climate action' }
        ],
        
        healthStatus: 'endangered',
        coralCoverage: 25
    }

];

// Log load status
console.log('📁 coral-reefs-data-1.js loaded (Reefs 1-10)');
console.log(`   Reefs in this file: ${CORAL_REEFS_DATA_1.length}`);
