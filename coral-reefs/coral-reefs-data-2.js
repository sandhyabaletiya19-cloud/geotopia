/* ============================================
   CORAL REEFS EXPLORER - DATA FILE 2
   Reefs 11-20 (Part 1: Reefs 11-15)
   ============================================ */

'use strict';

const CORAL_REEFS_DATA_2 = [
    
    // ========================================
    // #11 - FLORIDA REEF TRACT
    // ========================================
    {
        id: 'florida-reef-tract',
        name: 'Florida Reef Tract',
        countries: [
            { name: 'United States', code: 'US' }
        ],
        ocean: 'Atlantic Ocean',
        region: 'Florida Keys, Florida',
        reefType: 'barrier',
        
        length: 560,
        area: 9600,
        numberOfReefs: 6000,
        numberOfIslands: 1700,
        
        coordinates: [24.5500, -81.8000],
        defaultZoom: 8,
        
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600',
        backgroundImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920',
        
        description: 'The Florida Reef Tract is the only living coral barrier reef in the continental United States and the third-largest barrier reef system in the world. Stretching from the Dry Tortugas to the St. Lucie Inlet, this reef system has been a critical part of Florida\'s marine ecosystem for thousands of years. Despite facing significant challenges from climate change and disease, it remains an important habitat for hundreds of species of fish, coral, and other marine life.',
        
        formation: {
            type: 'Barrier reef on carbonate platform',
            age: '6,000-7,000 years (current structure)',
            process: 'Formed on the Florida carbonate platform as sea levels stabilized after the last ice age. The reef developed in shallow, warm waters with ideal conditions for coral growth, building upon older Pleistocene reef structures.'
        },
        
        reefStructure: {
            lagoon: true,
            reefCrest: true,
            foreReef: true,
            backReef: true,
            reefFlat: true
        },
        
        biodiversity: {
            coralSpecies: 45,
            fishSpecies: 500,
            molluskSpecies: 350,
            marineAnimals: [
                'Green sea turtles',
                'Loggerhead turtles',
                'Hawksbill turtles',
                'Manatees',
                'Dolphins',
                'Nurse sharks',
                'Barracudas',
                'Groupers',
                'Parrotfish',
                'Spiny lobsters'
            ],
            endangeredSpecies: [
                'Elkhorn coral',
                'Staghorn coral',
                'Pillar coral',
                'Hawksbill turtle',
                'Green sea turtle',
                'West Indian manatee',
                'Nassau grouper'
            ]
        },
        
        nearbyIslands: [
            { name: 'Key West', coordinates: [24.5551, -81.7800] },
            { name: 'Key Largo', coordinates: [25.0865, -80.4473] },
            { name: 'Dry Tortugas', coordinates: [24.6285, -82.8732] },
            { name: 'Islamorada', coordinates: [24.9243, -80.6278] },
            { name: 'Marathon Key', coordinates: [24.7136, -81.0903] },
            { name: 'Big Pine Key', coordinates: [24.6698, -81.3534] }
        ],
        
        oceanConditions: {
            temperature: '22-30°C',
            salinity: '35-36 ppt',
            currents: ['Gulf Stream', 'Florida Current'],
            visibility: '15-30 meters'
        },
        
        diveSites: [
            {
                name: 'John Pennekamp Coral Reef',
                coordinates: [25.12, -80.38],
                depth: '20m',
                description: 'America\'s first underwater park, pristine coral gardens.'
            },
            {
                name: 'Christ of the Abyss',
                coordinates: [25.12, -80.30],
                depth: '8m',
                description: 'Famous underwater statue in Key Largo dry rocks.'
            },
            {
                name: 'Looe Key',
                coordinates: [24.55, -81.40],
                depth: '10m',
                description: 'One of the most popular and pristine reef areas.'
            },
            {
                name: 'Sombrero Reef',
                coordinates: [24.63, -81.11],
                depth: '8m',
                description: 'Marked by lighthouse, excellent snorkeling site.'
            },
            {
                name: 'USS Vandenberg',
                coordinates: [24.47, -81.73],
                depth: '42m',
                description: 'Intentionally sunk missile ship, now artificial reef.'
            },
            {
                name: 'Dry Tortugas',
                coordinates: [24.63, -82.87],
                depth: '20m',
                description: 'Remote, pristine reefs with minimal human impact.'
            }
        ],
        
        cities: [
            { name: 'Miami', coordinates: [25.7617, -80.1918], country: 'United States', population: 463347 },
            { name: 'Key West', coordinates: [24.5551, -81.7800], country: 'United States', population: 25478 },
            { name: 'Key Largo', coordinates: [25.0865, -80.4473], country: 'United States', population: 10433 },
            { name: 'Islamorada', coordinates: [24.9243, -80.6278], country: 'United States', population: 6500 },
            { name: 'Marathon', coordinates: [24.7136, -81.0903], country: 'United States', population: 10255 }
        ],
        
        economicImportance: [
            { label: 'Tourism', value: '$4.4 billion annually' },
            { label: 'Fishing', value: '$247 million annually' },
            { label: 'Jobs', value: '70,000+ reef-related jobs' },
            { label: 'Coastal Protection', value: 'Protects $8 billion in coastal infrastructure' }
        ],
        
        environmentalThreats: [
            { label: 'Stony Coral Tissue Loss', value: 'Devastating disease since 2014, spread to 96% of reef' },
            { label: 'Coral Bleaching', value: 'Frequent events, severe in 2014-2015, 2023' },
            { label: 'Ocean Acidification', value: 'Reducing coral growth rates' },
            { label: 'Hurricanes', value: 'Increasing intensity causing damage' },
            { label: 'Water Quality', value: 'Runoff from Everglades and urban areas' }
        ],
        
        conservation: [
            { label: 'Florida Keys NMS', value: 'National Marine Sanctuary since 1990' },
            { label: 'Coral Restoration Foundation', value: 'Largest coral restoration program' },
            { label: 'Dry Tortugas NP', value: 'National Park protecting remote reefs' },
            { label: 'Sanctuary Preservation Areas', value: '24 no-take zones' }
        ],
        
        historicalImportance: [
            { label: 'Calusa & Tequesta', value: 'Indigenous peoples lived here 4,000+ years' },
            { label: 'Spanish Exploration', value: 'Ponce de León arrived 1513' },
            { label: 'Wrecking Industry', value: 'Salvaging shipwrecks was major 1800s industry' },
            { label: 'First Underwater Park', value: 'John Pennekamp established 1960' }
        ],
        
        healthStatus: 'critical',
        coralCoverage: 5
    },
    
    // ========================================
    // #12 - PHILIPPINES CORAL TRIANGLE
    // ========================================
    {
        id: 'philippines-coral-triangle',
        name: 'Philippines Coral Triangle',
        countries: [
            { name: 'Philippines', code: 'PH' }
        ],
        ocean: 'Pacific Ocean',
        region: 'Coral Triangle, Southeast Asia',
        reefType: 'fringing',
        
        length: 0,
        area: 26000,
        numberOfReefs: 500,
        numberOfIslands: 7641,
        
        coordinates: [11.0000, 122.0000],
        defaultZoom: 6,
        
        image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600',
        backgroundImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920',
        
        description: 'The Philippines sits at the apex of the Coral Triangle, the global center of marine biodiversity. With over 7,600 islands and 26,000 square kilometers of coral reefs, the Philippines harbors more species of coral and fish than anywhere else on Earth. The reefs range from pristine, remote ecosystems to heavily utilized coastal reefs that support millions of Filipinos who depend on the sea for food and income.',
        
        formation: {
            type: 'Fringing and patch reefs around volcanic archipelago',
            age: 'Varies, 5,000-15,000 years',
            process: 'Formed around the thousands of volcanic islands that make up the Philippine archipelago. The complex oceanography, with multiple currents converging, has created ideal conditions for exceptional biodiversity.'
        },
        
        reefStructure: {
            lagoon: true,
            reefCrest: true,
            foreReef: true,
            backReef: true,
            reefFlat: true
        },
        
        biodiversity: {
            coralSpecies: 500,
            fishSpecies: 2500,
            molluskSpecies: 900,
            marineAnimals: [
                'Whale sharks',
                'Thresher sharks',
                'Manta rays',
                'Dugongs',
                'Dolphins',
                'Sea turtles',
                'Giant clams',
                'Nautilus',
                'Seahorses',
                'Nudibranchs'
            ],
            endangeredSpecies: [
                'Whale shark',
                'Dugong',
                'Hawksbill turtle',
                'Green sea turtle',
                'Giant clams',
                'Napoleon wrasse',
                'Thresher shark'
            ]
        },
        
        nearbyIslands: [
            { name: 'Palawan', coordinates: [9.8349, 118.7384] },
            { name: 'Cebu', coordinates: [10.3157, 123.8854] },
            { name: 'Bohol', coordinates: [9.8500, 124.0000] },
            { name: 'Mindoro', coordinates: [12.5000, 121.0833] },
            { name: 'Negros', coordinates: [9.9817, 123.1567] },
            { name: 'Leyte', coordinates: [10.4167, 124.7500] }
        ],
        
        oceanConditions: {
            temperature: '26-30°C',
            salinity: '33-35 ppt',
            currents: ['North Equatorial Current', 'Kuroshio Current'],
            visibility: '10-40 meters'
        },
        
        diveSites: [
            {
                name: 'Tubbataha Reefs',
                coordinates: [8.93, 119.88],
                depth: '40m',
                description: 'UNESCO site, pristine reefs, large pelagics.'
            },
            {
                name: 'Moalboal',
                coordinates: [9.95, 123.40],
                depth: '35m',
                description: 'Famous sardine run and sea turtle encounters.'
            },
            {
                name: 'Malapascua Island',
                coordinates: [11.33, 124.12],
                depth: '30m',
                description: 'World\'s best place to see thresher sharks.'
            },
            {
                name: 'Apo Reef',
                coordinates: [12.65, 120.45],
                depth: '30m',
                description: 'Second largest contiguous reef in world.'
            },
            {
                name: 'Anilao',
                coordinates: [13.77, 120.93],
                depth: '25m',
                description: 'Macro diving capital, incredible diversity.'
            },
            {
                name: 'Coron Wrecks',
                coordinates: [11.98, 120.20],
                depth: '42m',
                description: 'WWII Japanese shipwrecks, world-class wreck diving.'
            }
        ],
        
        cities: [
            { name: 'Manila', coordinates: [14.5995, 120.9842], country: 'Philippines', population: 1780148 },
            { name: 'Cebu City', coordinates: [10.3157, 123.8854], country: 'Philippines', population: 922611 },
            { name: 'Puerto Princesa', coordinates: [9.7392, 118.7353], country: 'Philippines', population: 255116 },
            { name: 'Dumaguete', coordinates: [9.3103, 123.3081], country: 'Philippines', population: 134103 },
            { name: 'Tagbilaran', coordinates: [9.6500, 123.8500], country: 'Philippines', population: 105051 }
        ],
        
        economicImportance: [
            { label: 'Fishing', value: '$4.5 billion annually' },
            { label: 'Tourism', value: '$1 billion from diving/snorkeling' },
            { label: 'Jobs', value: '1.5+ million in fishing industry' },
            { label: 'Food Security', value: '70% of protein from seafood' }
        ],
        
        environmentalThreats: [
            { label: 'Overfishing', value: 'Most fishing grounds overexploited' },
            { label: 'Blast Fishing', value: 'Illegal dynamite fishing persists' },
            { label: 'Coral Bleaching', value: 'Increasing frequency' },
            { label: 'Sedimentation', value: 'Runoff from deforestation' },
            { label: 'Plastic Pollution', value: 'Third largest ocean plastic polluter' }
        ],
        
        conservation: [
            { label: 'Tubbataha NP', value: 'UNESCO World Heritage Site' },
            { label: 'Marine Protected Areas', value: '1,800+ MPAs established' },
            { label: 'Coral Triangle Initiative', value: 'Regional conservation partnership' },
            { label: 'Local Conservation', value: 'Community-based marine sanctuaries' }
        ],
        
        historicalImportance: [
            { label: 'Ancient Seafarers', value: 'Austronesian sailors for 4,000+ years' },
            { label: 'Spanish Colonial Era', value: 'Spanish rule 1565-1898' },
            { label: 'WWII Pacific', value: 'Major WWII battles, many shipwrecks' },
            { label: 'Marine Science', value: 'Important biodiversity research center' }
        ],
        
        healthStatus: 'endangered',
        coralCoverage: 30
    },
    
    // ========================================
    // #13 - GREAT CHAGOS BANK
    // ========================================
    {
        id: 'great-chagos-bank',
        name: 'Great Chagos Bank',
        countries: [
            { name: 'British Indian Ocean Territory', code: 'IO' }
        ],
        ocean: 'Indian Ocean',
        region: 'Central Indian Ocean',
        reefType: 'atoll',
        
        length: 0,
        area: 12642,
        numberOfReefs: 55,
        numberOfIslands: 65,
        
        coordinates: [-6.2000, 71.5000],
        defaultZoom: 8,
        
        image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=600',
        backgroundImage: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=1920',
        
        description: 'The Great Chagos Bank is the world\'s largest atoll structure, located in the remote central Indian Ocean. Part of the British Indian Ocean Territory, the Chagos Archipelago contains some of the healthiest and least disturbed coral reefs on Earth. The isolated location and strict marine protection have allowed these reefs to thrive, serving as a critical reference for how coral reefs function without human pressure.',
        
        formation: {
            type: 'Submerged atoll platform',
            age: '60+ million years (volcanic base)',
            process: 'Formed atop ancient volcanic seamounts that have subsided over millions of years. The coral reef has kept growing upward, creating the world\'s largest atoll structure, mostly submerged with only a few emergent islands.'
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
            fishSpecies: 800,
            molluskSpecies: 400,
            marineAnimals: [
                'Manta rays',
                'Silvertip sharks',
                'Grey reef sharks',
                'Blacktip sharks',
                'Hawksbill turtles',
                'Green sea turtles',
                'Dolphins',
                'Coconut crabs',
                'Tuna',
                'Giant trevally'
            ],
            endangeredSpecies: [
                'Hawksbill turtle',
                'Green sea turtle',
                'Coconut crab',
                'Giant clam'
            ]
        },
        
        nearbyIslands: [
            { name: 'Diego Garcia', coordinates: [-7.32, 72.42] },
            { name: 'Peros Banhos', coordinates: [-5.32, 71.85] },
            { name: 'Salomon Islands', coordinates: [-5.32, 72.23] },
            { name: 'Egmont Islands', coordinates: [-6.67, 71.35] },
            { name: 'Nelson Island', coordinates: [-5.68, 72.30] }
        ],
        
        oceanConditions: {
            temperature: '27-29°C',
            salinity: '34-35 ppt',
            currents: ['South Equatorial Current'],
            visibility: '30-50 meters'
        },
        
        diveSites: [
            {
                name: 'Peros Banhos Atoll',
                coordinates: [-5.32, 71.85],
                depth: '30m',
                description: 'Pristine reefs with abundant shark populations.'
            },
            {
                name: 'Salomon Atoll',
                coordinates: [-5.32, 72.23],
                depth: '35m',
                description: 'Remote atoll with exceptional coral coverage.'
            },
            {
                name: 'Brothers Islands',
                coordinates: [-6.20, 71.52],
                depth: '40m',
                description: 'Dramatic walls and large pelagic fish.'
            },
            {
                name: 'Egmont Channel',
                coordinates: [-6.65, 71.33],
                depth: '25m',
                description: 'Channel diving with strong currents and sharks.'
            },
            {
                name: 'Great Chagos Bank Drop-off',
                coordinates: [-6.50, 71.40],
                depth: '60m+',
                description: 'Massive wall dropping into the abyss.'
            }
        ],
        
        cities: [
            { name: 'Diego Garcia Naval Base', coordinates: [-7.3200, 72.4200], country: 'BIOT', population: 4000 }
        ],
        
        economicImportance: [
            { label: 'Research', value: 'Invaluable scientific reference site' },
            { label: 'Fisheries', value: 'Limited licensed fishing only' },
            { label: 'Climate Science', value: 'Critical for climate change research' }
        ],
        
        environmentalThreats: [
            { label: 'Climate Change', value: 'Coral bleaching events in 2015-2016' },
            { label: 'Illegal Fishing', value: 'Poaching from distant fleets' },
            { label: 'Marine Debris', value: 'Plastic accumulation from ocean currents' },
            { label: 'Sea Level Rise', value: 'Low-lying islands at risk' }
        ],
        
        conservation: [
            { label: 'Chagos MPA', value: 'World\'s largest marine reserve (2010)' },
            { label: 'No-Take Zone', value: '640,000 km² fully protected' },
            { label: 'Scientific Research', value: 'Ongoing coral reef monitoring' },
            { label: 'No Permanent Population', value: 'Limited human impact' }
        ],
        
        historicalImportance: [
            { label: 'Discovery', value: 'Portuguese discovery in early 1500s' },
            { label: 'Coconut Plantations', value: 'French and British colonial settlements' },
            { label: 'Chagossian Removal', value: 'Population removed 1967-1973' },
            { label: 'Military Base', value: 'US-UK Diego Garcia base since 1971' },
            { label: 'Conservation Milestone', value: 'Largest MPA established 2010' }
        ],
        
        healthStatus: 'healthy',
        coralCoverage: 70
    },
    
    // ========================================
    // #14 - APO REEF
    // ========================================
    {
        id: 'apo-reef',
        name: 'Apo Reef',
        countries: [
            { name: 'Philippines', code: 'PH' }
        ],
        ocean: 'Pacific Ocean',
        region: 'Mindoro Strait, Occidental Mindoro',
        reefType: 'atoll',
        
        length: 0,
        area: 34,
        numberOfReefs: 2,
        numberOfIslands: 3,
        
        coordinates: [12.6500, 120.4500],
        defaultZoom: 11,
        
        image: 'https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=600',
        backgroundImage: 'https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=1920',
        
        description: 'Apo Reef is the second-largest contiguous coral reef in the world and the largest in the Philippines. This protected natural park features two separate reef systems with a stunning lagoon, dramatic walls, and exceptional marine biodiversity. The reef rises from depths of over 500 meters, creating a remarkable underwater landscape that attracts divers from around the world.',
        
        formation: {
            type: 'Oceanic atoll',
            age: '10,000-15,000 years',
            process: 'Formed as an oceanic reef atop a submerged seamount in the Mindoro Strait. The reef structure grew upward as the volcanic base subsided, creating a classic atoll with a central lagoon.'
        },
        
        reefStructure: {
            lagoon: true,
            reefCrest: true,
            foreReef: true,
            backReef: true,
            reefFlat: true
        },
        
        biodiversity: {
            coralSpecies: 400,
            fishSpecies: 500,
            molluskSpecies: 200,
            marineAnimals: [
                'Manta rays',
                'Grey reef sharks',
                'Whitetip reef sharks',
                'Hammerhead sharks',
                'Sea turtles',
                'Napoleon wrasse',
                'Barracudas',
                'Giant trevally',
                'Bluefin tuna',
                'Moray eels'
            ],
            endangeredSpecies: [
                'Hawksbill turtle',
                'Green sea turtle',
                'Napoleon wrasse',
                'Giant clam',
                'Hammerhead shark'
            ]
        },
        
        nearbyIslands: [
            { name: 'Apo Island (within reef)', coordinates: [12.67, 120.46] },
            { name: 'Cayos del Bajo', coordinates: [12.66, 120.44] },
            { name: 'Apo Menor', coordinates: [12.64, 120.43] },
            { name: 'Coron Island', coordinates: [11.98, 120.20] },
            { name: 'Busuanga', coordinates: [12.15, 120.08] }
        ],
        
        oceanConditions: {
            temperature: '26-30°C',
            salinity: '34 ppt',
            currents: ['Mindoro Current', 'seasonal monsoon currents'],
            visibility: '15-40 meters'
        },
        
        diveSites: [
            {
                name: 'Apo Reef Wall',
                coordinates: [12.66, 120.47],
                depth: '50m+',
                description: 'Dramatic vertical wall plunging into the abyss.'
            },
            {
                name: 'Shark Ridge',
                coordinates: [12.65, 120.46],
                depth: '30m',
                description: 'Ridge frequented by grey reef sharks.'
            },
            {
                name: 'Apo Lagoon',
                coordinates: [12.65, 120.45],
                depth: '8m',
                description: 'Shallow lagoon with coral gardens and fish.'
            },
            {
                name: 'Hunter\'s Rock',
                coordinates: [12.64, 120.44],
                depth: '35m',
                description: 'Submerged rock with big fish action.'
            },
            {
                name: 'Binangaan Drop-off',
                coordinates: [12.67, 120.48],
                depth: '40m',
                description: 'Deep wall with excellent coral coverage.'
            }
        ],
        
        cities: [
            { name: 'Sablayan', coordinates: [12.8456, 120.7897], country: 'Philippines', population: 68699 },
            { name: 'San Jose', coordinates: [12.3500, 121.0667], country: 'Philippines', population: 132459 },
            { name: 'Coron', coordinates: [12.0000, 120.2000], country: 'Philippines', population: 51803 }
        ],
        
        economicImportance: [
            { label: 'Tourism', value: 'Growing dive tourism destination' },
            { label: 'Fishing', value: 'Buffer zone sustainable fishing' },
            { label: 'Research', value: 'Marine biodiversity research site' }
        ],
        
        environmentalThreats: [
            { label: 'Blast Fishing', value: 'Historical damage, now patrolled' },
            { label: 'Climate Change', value: 'Bleaching events recorded' },
            { label: 'Poaching', value: 'Illegal fishing incursions' },
            { label: 'Crown-of-Thorns', value: 'Periodic outbreaks' }
        ],
        
        conservation: [
            { label: 'Natural Park', value: 'Apo Reef Natural Park since 1996' },
            { label: 'UNESCO Tentative', value: 'On UNESCO tentative list' },
            { label: 'Protected Area', value: '15,792 hectares protected' },
            { label: 'Ranger Station', value: 'Permanent monitoring presence' }
        ],
        
        historicalImportance: [
            { label: 'Navigation Hazard', value: 'Historically dangerous for ships' },
            { label: 'Filipino Heritage', value: 'Traditional fishing grounds' },
            { label: 'Conservation Pioneer', value: 'One of Philippines\' first marine parks' }
        ],
        
        healthStatus: 'threatened',
        coralCoverage: 45
    },
    
    // ========================================
    // #15 - TUBBATAHA REEFS
    // ========================================
    {
        id: 'tubbataha-reefs',
        name: 'Tubbataha Reefs Natural Park',
        countries: [
            { name: 'Philippines', code: 'PH' }
        ],
        ocean: 'Pacific Ocean',
        region: 'Sulu Sea, Palawan',
        reefType: 'atoll',
        
        length: 0,
        area: 97030,
        numberOfReefs: 2,
        numberOfIslands: 2,
        
        coordinates: [8.9300, 119.8800],
        defaultZoom: 10,
        
        image: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=600',
        backgroundImage: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=1920',
        
        description: 'Tubbataha Reefs Natural Park is a UNESCO World Heritage Site in the middle of the Sulu Sea, often called the "Crown Jewel" of Philippine reefs. This remote marine sanctuary consists of two atolls separated by an 8-kilometer channel, featuring pristine coral walls, incredible biodiversity, and large populations of sharks, mantas, and turtles. Accessible only by liveaboard during a limited season, Tubbataha represents one of the finest diving destinations on Earth.',
        
        formation: {
            type: 'Oceanic coral atolls',
            age: 'Unknown, estimated millions of years',
            process: 'Two coral atolls formed atop ancient volcanic seamounts in the middle of the Sulu Sea. The isolation and strong currents have created exceptionally healthy reef ecosystems.'
        },
        
        reefStructure: {
            lagoon: true,
            reefCrest: true,
            foreReef: true,
            backReef: true,
            reefFlat: true
        },
        
        biodiversity: {
            coralSpecies: 360,
            fishSpecies: 600,
            molluskSpecies: 300,
            marineAnimals: [
                'Whale sharks',
                'Manta rays',
                'Tiger sharks',
                'Hammerhead sharks',
                'Whitetip reef sharks',
                'Hawksbill turtles',
                'Green sea turtles',
                'Dolphins',
                'Napoleon wrasse',
                'Giant trevally'
            ],
            endangeredSpecies: [
                'Hawksbill turtle',
                'Green sea turtle',
                'Whale shark',
                'Tiger shark',
                'Napoleon wrasse',
                'Giant clam'
            ]
        },
        
        nearbyIslands: [
            { name: 'North Atoll Bird Islet', coordinates: [9.00, 119.90] },
            { name: 'South Atoll Bird Islet', coordinates: [8.82, 119.82] },
            { name: 'Jessie Beazley Reef', coordinates: [9.18, 119.75] },
            { name: 'Cagayan Islands', coordinates: [9.07, 121.22] }
        ],
        
        oceanConditions: {
            temperature: '27-30°C',
            salinity: '34 ppt',
            currents: ['Strong tidal currents', 'Sulu Sea currents'],
            visibility: '30-45 meters'
        },
        
        diveSites: [
            {
                name: 'Amos Rock',
                coordinates: [9.00, 119.91],
                depth: '35m',
                description: 'Pinnacle with schools of big-eye trevally and sharks.'
            },
            {
                name: 'Shark Airport',
                coordinates: [8.98, 119.89],
                depth: '25m',
                description: 'Sandy area where whitetip sharks rest.'
            },
            {
                name: 'Wall Street',
                coordinates: [8.95, 119.87],
                depth: '40m',
                description: 'Dramatic vertical wall with excellent coral.'
            },
            {
                name: 'Black Rock',
                coordinates: [8.83, 119.83],
                depth: '30m',
                description: 'South Atoll site with large pelagics.'
            },
            {
                name: 'Delsan Wreck',
                coordinates: [8.92, 119.88],
                depth: '28m',
                description: 'Fishing vessel wreck colonized by coral.'
            },
            {
                name: 'Malayan Wreck',
                coordinates: [8.80, 119.80],
                depth: '25m',
                description: 'Cargo ship wreck teeming with life.'
            }
        ],
        
        cities: [
            { name: 'Puerto Princesa', coordinates: [9.7392, 118.7353], country: 'Philippines', population: 255116 },
            { name: 'Quezon (Palawan)', coordinates: [9.4833, 118.0000], country: 'Philippines', population: 69885 }
        ],
        
        economicImportance: [
            { label: 'Tourism', value: '$1.5 million annually from dive tourism' },
            { label: 'Conservation Fees', value: 'Funds local marine protection' },
            { label: 'Research', value: 'Important marine research site' },
            { label: 'Fisheries', value: 'Fish spillover benefits surrounding areas' }
        ],
        
        environmentalThreats: [
            { label: 'Climate Change', value: 'Coral bleaching in 2010' },
            { label: 'Ship Groundings', value: 'USS Guardian grounding 2013' },
            { label: 'Poaching', value: 'Occasional illegal fishing' },
            { label: 'Plastic Pollution', value: 'Ocean debris accumulation' }
        ],
        
        conservation: [
            { label: 'UNESCO', value: 'World Heritage Site since 1993, expanded 2009' },
            { label: 'No-Take Zone', value: 'Entire park is strictly protected' },
            { label: 'Ranger Station', value: 'Permanent presence on both atolls' },
            { label: 'Limited Access', value: 'Only liveaboard access March-June' }
        ],
        
        historicalImportance: [
            { label: 'Traditional Waters', value: 'Historic Cagayan Sulu fishing grounds' },
            { label: 'WWII History', value: 'Ships sunk during WWII' },
            { label: 'Conservation Milestone', value: 'First marine UNESCO site in ASEAN' },
            { label: 'Dive Discovery', value: 'First recreational diving in 1980s' }
        ],
        
        healthStatus: 'healthy',
        coralCoverage: 65
    }
];

// Log load status
console.log('📁 coral-reefs-data-2.js loaded (Part 1: Reefs 11-15)');
