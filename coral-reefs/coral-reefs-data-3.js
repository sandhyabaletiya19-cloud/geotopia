/* ========================================
   CORAL REEFS DATA - FILE 3
   Reefs 21-30 (Major Coral Reef Systems)
   ======================================== */

const CORAL_REEFS_3 = [
    {
        id: 21,
        name: "Saya de Malha Bank",
        country: "Mauritius",
        ocean: "Indian Ocean",
        region: "Mascarene Plateau",
        type: "Submerged Bank Reef",
        size: "40,808 km²",
        length: "300 km",
        area: "40,808 km²",
        reefCount: "Largest submerged bank",
        
        coordinates: {
            lat: -10.5000,
            lng: 61.5000
        },
        mapZoom: 7,
        
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800",
        backgroundImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920",
        gallery: [
            "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600",
            "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600",
            "https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=600",
            "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=600",
            "https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=600",
            "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=600"
        ],
        
        biodiversity: {
            coralSpecies: "200+",
            fishSpecies: "600+",
            turtleSpecies: "3",
            sharkSpecies: "15+",
            whaleSpecies: "10+",
            molluskSpecies: "250+",
            notableSpecies: [
                "Seagrass Meadows",
                "Green Sea Turtle",
                "Dugong",
                "Spinner Dolphin",
                "Hammerhead Shark",
                "Giant Trevally",
                "Wahoo",
                "Yellowfin Tuna",
                "Manta Ray",
                "Sperm Whale"
            ]
        },
        
        formation: {
            age: "35 million years",
            process: "Submerged volcanic plateau with shallow reef development",
            growthRate: "1-2 cm per year"
        },
        
        structure: {
            lagoonDepth: "N/A (submerged bank)",
            reefFlatDepth: "8-25m below surface",
            reefCrestDepth: "8m minimum",
            foreReefDepth: "25-100m",
            outerSlopeDepth: "100-3,000m+"
        },
        
        conditions: {
            temperature: "24-28°C",
            salinity: "35 ppt",
            currents: "South Equatorial Current",
            visibility: "25-50m"
        },
        
        economic: {
            tourismValue: "Minimal (remote)",
            fisheriesValue: "$200 million/year",
            jobsSupported: "2,000+",
            coastalProtection: "N/A (submerged)"
        },
        
        threats: {
            bleaching: "medium",
            warming: "medium",
            acidification: "medium",
            pollution: "low",
            overfishing: "high"
        },
        
        conservation: {
            status: "Extended Continental Shelf Claim",
            mpaPercent: "0%",
            programs: "Indian Ocean Tuna Commission monitoring",
            research: "Limited deep-sea research expeditions"
        },
        
        history: [
            { year: "1722", event: "First charted by Dutch explorers" },
            { year: "2011", event: "Mauritius extends continental shelf claim" },
            { year: "2019", event: "Scientific expedition documents seagrass extent" }
        ],
        
        nearbyIslands: [
            "No emergent land",
            "Mauritius (900 km)",
            "Seychelles (800 km)",
            "Rodrigues (600 km)"
        ],
        
        islandCoordinates: [
            { name: "Saya de Malha Bank Center", lat: -10.5000, lng: 61.5000 },
            { name: "Northern Bank", lat: -9.5000, lng: 61.0000 },
            { name: "Southern Bank", lat: -11.5000, lng: 62.0000 }
        ],
        
        scientificImportance: "World's largest submerged bank and largest seagrass meadow (estimated 40,000 km²). Critical carbon sink and potential blue carbon hotspot, largely unexplored scientifically.",
        
        typeDescription: "The world's largest submerged reef structure and seagrass ecosystem, entirely beneath the ocean surface with no emergent land."
    },
    
    {
        id: 22,
        name: "Lakshadweep Coral Reefs",
        country: "India",
        ocean: "Indian Ocean",
        region: "Arabian Sea",
        type: "Atoll",
        size: "4,200 km²",
        length: "36 islands across 400 km",
        area: "4,200 km² total lagoon",
        reefCount: "12 atolls, 3 reef islands",
        
        coordinates: {
            lat: 10.5667,
            lng: 72.6417
        },
        mapZoom: 8,
        
        image: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=800",
        backgroundImage: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=1920",
        gallery: [
            "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=600",
            "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600",
            "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600",
            "https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=600",
            "https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=600",
            "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=600"
        ],
        
        biodiversity: {
            coralSpecies: "105+",
            fishSpecies: "600+",
            turtleSpecies: "4",
            sharkSpecies: "12+",
            whaleSpecies: "8+",
            molluskSpecies: "200+",
            notableSpecies: [
                "Giant Clam",
                "Green Sea Turtle",
                "Hawksbill Turtle",
                "Blacktip Reef Shark",
                "Manta Ray",
                "Napoleon Wrasse",
                "Parrotfish",
                "Butterflyfish",
                "Sea Cucumber",
                "Giant Trevally"
            ]
        },
        
        formation: {
            age: "55 million years",
            process: "Atolls formed over volcanic hotspot similar to Maldives",
            growthRate: "1-2 cm per year"
        },
        
        structure: {
            lagoonDepth: "0-30m",
            reefFlatDepth: "0-3m",
            reefCrestDepth: "0-1m",
            foreReefDepth: "1-40m",
            outerSlopeDepth: "40-1,500m+"
        },
        
        conditions: {
            temperature: "27-30°C",
            salinity: "35-36 ppt",
            currents: "Monsoon-driven currents",
            visibility: "20-40m"
        },
        
        economic: {
            tourismValue: "$50 million/year",
            fisheriesValue: "$80 million/year",
            jobsSupported: "15,000+",
            coastalProtection: "$500 million/year"
        },
        
        threats: {
            bleaching: "high",
            warming: "high",
            acidification: "medium",
            pollution: "low",
            overfishing: "medium"
        },
        
        conservation: {
            status: "Restricted Access Territory",
            mpaPercent: "20%",
            programs: "Lakshadweep Marine Research Centre",
            research: "National Institute of Oceanography studies"
        },
        
        history: [
            { year: "1956", event: "Became Union Territory of India" },
            { year: "1998", event: "Major coral bleaching event" },
            { year: "2016", event: "Second mass bleaching event recorded" }
        ],
        
        nearbyIslands: [
            "Kavaratti",
            "Agatti",
            "Minicoy",
            "Bangaram",
            "Kadmat"
        ],
        
        islandCoordinates: [
            { name: "Kavaratti", lat: 10.5667, lng: 72.6417 },
            { name: "Agatti", lat: 10.8500, lng: 72.1833 },
            { name: "Minicoy", lat: 8.2833, lng: 73.0500 }
        ],
        
        scientificImportance: "India's only coral atoll ecosystem and important model for studying atoll vulnerability to climate change. Key site for monsoon current research.",
        
        typeDescription: "India's smallest Union Territory consisting of 36 pristine coral islands, India's only true atoll system."
    },
    
    {
        id: 23,
        name: "Coral Sea Reefs",
        country: "Australia",
        ocean: "Pacific Ocean",
        region: "Coral Sea",
        type: "Platform Reef",
        size: "989,842 km²",
        length: "1,000+ km extent",
        area: "989,842 km² marine park",
        reefCount: "30+ individual reefs",
        
        coordinates: {
            lat: -17.0000,
            lng: 152.0000
        },
        mapZoom: 6,
        
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800",
        backgroundImage: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920",
        gallery: [
            "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600",
            "https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=600",
            "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600",
            "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=600",
            "https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=600",
            "https://images.unsplash.com/photo-1518467166778-b88f373ffec7?w=600"
        ],
        
        biodiversity: {
            coralSpecies: "350+",
            fishSpecies: "1,100+",
            turtleSpecies: "5",
            sharkSpecies: "30+",
            whaleSpecies: "20+",
            molluskSpecies: "600+",
            notableSpecies: [
                "Grey Reef Shark",
                "Silvertip Shark",
                "Humpback Whale",
                "Loggerhead Turtle",
                "Green Sea Turtle",
                "Giant Trevally",
                "Red Bass",
                "Coral Trout",
                "Nautilus",
                "Manta Ray"
            ]
        },
        
        formation: {
            age: "2-3 million years",
            process: "Platform reefs on submerged seamounts and ridges",
            growthRate: "1-2 cm per year"
        },
        
        structure: {
            lagoonDepth: "0-50m",
            reefFlatDepth: "0-5m",
            reefCrestDepth: "0-2m",
            foreReefDepth: "2-60m",
            outerSlopeDepth: "60-4,000m+"
        },
        
        conditions: {
            temperature: "23-29°C",
            salinity: "35-36 ppt",
            currents: "East Australian Current",
            visibility: "30-60m"
        },
        
        economic: {
            tourismValue: "$20 million/year (limited)",
            fisheriesValue: "Protected",
            jobsSupported: "500+",
            coastalProtection: "N/A (offshore)"
        },
        
        threats: {
            bleaching: "medium",
            warming: "medium",
            acidification: "low",
            pollution: "low",
            overfishing: "low"
        },
        
        conservation: {
            status: "Coral Sea Marine Park (2012)",
            mpaPercent: "50%",
            programs: "Australian Marine Parks management",
            research: "ARC Centre of Excellence for Coral Reef Studies"
        },
        
        history: [
            { year: "1803", event: "First European charting begins" },
            { year: "1942", event: "Battle of the Coral Sea fought" },
            { year: "2012", event: "Coral Sea Marine Park established" }
        ],
        
        nearbyIslands: [
            "Osprey Reef",
            "Bougainville Reef",
            "Holmes Reef",
            "Flinders Reef",
            "Lihou Reef"
        ],
        
        islandCoordinates: [
            { name: "Osprey Reef", lat: -13.8833, lng: 146.5500 },
            { name: "Bougainville Reef", lat: -15.5000, lng: 147.1167 },
            { name: "Holmes Reef", lat: -16.4833, lng: 147.8667 }
        ],
        
        scientificImportance: "Remote and pristine reefs serving as genetic source for Great Barrier Reef. Important site for studying isolated reef systems and their connectivity.",
        
        typeDescription: "Remote offshore reefs extending from the Great Barrier Reef into the deep Coral Sea, featuring spectacular walls and pristine ecosystems."
    },
    
    {
        id: 24,
        name: "Papahānaumokuākea Marine Monument",
        country: "United States (Hawaii)",
        ocean: "Pacific Ocean",
        region: "Northwestern Hawaiian Islands",
        type: "Atoll",
        size: "1,510,000 km²",
        length: "2,000 km chain",
        area: "1,510,000 km²",
        reefCount: "10 islands and atolls",
        
        coordinates: {
            lat: 25.0000,
            lng: -171.0000
        },
        mapZoom: 5,
        
        image: "https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=800",
        backgroundImage: "https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=1920",
        gallery: [
            "https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=600",
            "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600",
            "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600",
            "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=600",
            "https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=600",
            "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=600"
        ],
        
        biodiversity: {
            coralSpecies: "57+",
            fishSpecies: "250+",
            turtleSpecies: "2",
            sharkSpecies: "15+",
            whaleSpecies: "24+",
            molluskSpecies: "300+",
            notableSpecies: [
                "Hawaiian Monk Seal",
                "Green Sea Turtle",
                "Laysan Albatross",
                "Giant Trevally",
                "Galapagos Shark",
                "Tiger Shark",
                "Humpback Whale",
                "Spinner Dolphin",
                "Masked Booby",
                "Endangered Short-tailed Albatross"
            ]
        },
        
        formation: {
            age: "28 million years (oldest)",
            process: "Volcanic hotspot chain with progressive atoll development",
            growthRate: "Variable by age"
        },
        
        structure: {
            lagoonDepth: "0-60m",
            reefFlatDepth: "0-5m",
            reefCrestDepth: "0-2m",
            foreReefDepth: "2-100m",
            outerSlopeDepth: "100-5,000m+"
        },
        
        conditions: {
            temperature: "20-27°C",
            salinity: "35 ppt",
            currents: "North Pacific Current",
            visibility: "20-60m"
        },
        
        economic: {
            tourismValue: "Minimal (restricted)",
            fisheriesValue: "Protected",
            jobsSupported: "200+ (research/management)",
            coastalProtection: "$2 billion/year (ecosystem services)"
        },
        
        threats: {
            bleaching: "medium",
            warming: "medium",
            acidification: "medium",
            pollution: "low (marine debris)",
            overfishing: "low"
        },
        
        conservation: {
            status: "UNESCO World Heritage Site, US National Monument",
            mpaPercent: "100%",
            programs: "NOAA and US Fish & Wildlife Service co-management",
            research: "NOAA Pacific Islands Fisheries Science Center"
        },
        
        history: [
            { year: "1909", event: "Hawaiian Islands Bird Reservation created" },
            { year: "2006", event: "Established as National Monument" },
            { year: "2010", event: "Listed as UNESCO World Heritage Site" }
        ],
        
        nearbyIslands: [
            "Midway Atoll",
            "Pearl and Hermes Atoll",
            "Lisianski Island",
            "Laysan Island",
            "French Frigate Shoals"
        ],
        
        islandCoordinates: [
            { name: "Midway Atoll", lat: 28.2000, lng: -177.3500 },
            { name: "French Frigate Shoals", lat: 23.8500, lng: -166.2833 },
            { name: "Laysan Island", lat: 25.7667, lng: -171.7333 }
        ],
        
        scientificImportance: "One of largest fully protected areas on Earth. Critical habitat for Hawaiian monk seal (most endangered pinniped). Living laboratory for studying predator-dominated reef ecosystems.",
        
        typeDescription: "One of the world's largest marine conservation areas, a remote chain of islands demonstrating atoll evolution over 28 million years."
    },
    
    {
        id: 25,
        name: "Phoenix Islands Protected Area",
        country: "Kiribati",
        ocean: "Pacific Ocean",
        region: "Central Pacific",
        type: "Atoll",
        size: "408,250 km²",
        length: "Eight atolls",
        area: "408,250 km²",
        reefCount: "8 atolls and 2 submerged reefs",
        
        coordinates: {
            lat: -3.7500,
            lng: -171.7500
        },
        mapZoom: 6,
        
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800",
        backgroundImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920",
        gallery: [
            "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600",
            "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600",
            "https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=600",
            "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=600",
            "https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=600",
            "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=600"
        ],
        
        biodiversity: {
            coralSpecies: "200+",
            fishSpecies: "500+",
            turtleSpecies: "2",
            sharkSpecies: "12+",
            whaleSpecies: "15+",
            molluskSpecies: "200+",
            notableSpecies: [
                "Giant Clam",
                "Blacktip Reef Shark",
                "Grey Reef Shark",
                "Green Sea Turtle",
                "Hawksbill Turtle",
                "Manta Ray",
                "Giant Trevally",
                "Bumphead Parrotfish",
                "Napoleon Wrasse",
                "Coconut Crab"
            ]
        },
        
        formation: {
            age: "60-70 million years",
            process: "Volcanic hotspot chain with complete atoll development",
            growthRate: "1-2 cm per year"
        },
        
        structure: {
            lagoonDepth: "0-30m",
            reefFlatDepth: "0-3m",
            reefCrestDepth: "0-1m",
            foreReefDepth: "1-60m",
            outerSlopeDepth: "60-5,000m+"
        },
        
        conditions: {
            temperature: "28-30°C",
            salinity: "35 ppt",
            currents: "South Equatorial Current",
            visibility: "30-60m"
        },
        
        economic: {
            tourismValue: "Minimal",
            fisheriesValue: "Protected",
            jobsSupported: "100+",
            coastalProtection: "N/A (uninhabited)"
        },
        
        threats: {
            bleaching: "high",
            warming: "high",
            acidification: "medium",
            pollution: "low",
            overfishing: "low"
        },
        
        conservation: {
            status: "UNESCO World Heritage Site (2010)",
            mpaPercent: "100%",
            programs: "Conservation International partnership",
            research: "New England Aquarium expeditions"
        },
        
        history: [
            { year: "1938-1963", event: "British and American colonization attempts" },
            { year: "2008", event: "Phoenix Islands Protected Area created" },
            { year: "2010", event: "Listed as UNESCO World Heritage Site" }
        ],
        
        nearbyIslands: [
            "Kanton",
            "Enderbury",
            "Birnie",
            "McKean",
            "Phoenix Island"
        ],
        
        islandCoordinates: [
            { name: "Kanton", lat: -2.8167, lng: -171.6667 },
            { name: "Enderbury", lat: -3.1333, lng: -171.0833 },
            { name: "Orona", lat: -4.5000, lng: -172.1667 }
        ],
        
        scientificImportance: "One of Earth's last intact oceanic coral ecosystems. Critical site for studying deep reef connectivity and climate change impacts on remote Pacific reefs.",
        
        typeDescription: "The world's largest UNESCO Marine World Heritage Site at time of inscription, featuring pristine and uninhabited Pacific atolls."
    },
    
    {
        id: 26,
        name: "Lord Howe Island Reefs",
        country: "Australia",
        ocean: "Pacific Ocean",
        region: "Tasman Sea",
        type: "Fringing Reef",
        size: "146 km² lagoon",
        length: "11 km x 2 km island",
        area: "146 km² marine park",
        reefCount: "World's southernmost coral reef",
        
        coordinates: {
            lat: -31.5500,
            lng: 159.0833
        },
        mapZoom: 10,
        
        image: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=800",
        backgroundImage: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=1920",
        gallery: [
            "https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=600",
            "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600",
            "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600",
            "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=600",
            "https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=600",
            "https://images.unsplash.com/photo-1518467166778-b88f373ffec7?w=600"
        ],
        
        biodiversity: {
            coralSpecies: "90+",
            fishSpecies: "500+",
            turtleSpecies: "3",
            sharkSpecies: "15+",
            whaleSpecies: "5+",
            molluskSpecies: "400+",
            notableSpecies: [
                "Lord Howe Island Stick Insect",
                "Double-headed Wrasse",
                "Galapagos Shark",
                "Green Sea Turtle",
                "Ballina Angelfish",
                "Lord Howe Butterflyfish",
                "Spanish Dancer Nudibranch",
                "Giant Cuttlefish",
                "Black Cod",
                "Bluefish"
            ]
        },
        
        formation: {
            age: "7 million years",
            process: "Volcanic remnant with southernmost coral reef development",
            growthRate: "0.5-1 cm per year (slow due to cool water)"
        },
        
        structure: {
            lagoonDepth: "0-10m",
            reefFlatDepth: "0-3m",
            reefCrestDepth: "0-2m",
            foreReefDepth: "2-30m",
            outerSlopeDepth: "30-500m+"
        },
        
        conditions: {
            temperature: "18-26°C",
            salinity: "35 ppt",
            currents: "East Australian Current",
            visibility: "15-40m"
        },
        
        economic: {
            tourismValue: "$15 million/year",
            fisheriesValue: "Protected",
            jobsSupported: "400+",
            coastalProtection: "$50 million/year"
        },
        
        threats: {
            bleaching: "low",
            warming: "medium",
            acidification: "medium",
            pollution: "low",
            overfishing: "low"
        },
        
        conservation: {
            status: "UNESCO World Heritage Site",
            mpaPercent: "100%",
            programs: "Lord Howe Island Board management",
            research: "Australian Museum expeditions"
        },
        
        history: [
            { year: "1788", event: "Discovered by HMS Supply" },
            { year: "1982", event: "Listed as UNESCO World Heritage Site" },
            { year: "2019", event: "Rodent eradication program completed" }
        ],
        
        nearbyIslands: [
            "Ball's Pyramid",
            "Admiralty Islands",
            "Mutton Bird Island",
            "Blackburn Island",
            "Roach Island"
        ],
        
        islandCoordinates: [
            { name: "Lord Howe Island", lat: -31.5544, lng: 159.0850 },
            { name: "Ball's Pyramid", lat: -31.7544, lng: 159.2511 },
            { name: "Admiralty Islands", lat: -31.4850, lng: 159.0750 }
        ],
        
        scientificImportance: "World's southernmost true coral reef (31°S). Mix of tropical and temperate species creates unique assemblage. Ball's Pyramid is world's tallest sea stack.",
        
        typeDescription: "The world's southernmost coral reef ecosystem, where tropical and temperate marine species meet in a unique UNESCO World Heritage site."
    },
    
    {
        id: 27,
        name: "Bermuda Coral Reefs",
        country: "Bermuda (UK)",
        ocean: "Atlantic Ocean",
        region: "North Atlantic",
        type: "Platform Reef",
        size: "900 km²",
        length: "34 km x 22 km platform",
        area: "900 km² reef platform",
        reefCount: "World's northernmost reef",
        
        coordinates: {
            lat: 32.3000,
            lng: -64.7833
        },
        mapZoom: 10,
        
        image: "https://images.unsplash.com/photo-1518467166778-b88f373ffec7?w=800",
        backgroundImage: "https://images.unsplash.com/photo-1518467166778-b88f373ffec7?w=1920",
        gallery: [
            "https://images.unsplash.com/photo-1518467166778-b88f373ffec7?w=600",
            "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600",
            "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600",
            "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=600",
            "https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=600",
            "https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=600"
        ],
        
        biodiversity: {
            coralSpecies: "25+",
            fishSpecies: "400+",
            turtleSpecies: "4",
            sharkSpecies: "10+",
            whaleSpecies: "20+",
            molluskSpecies: "200+",
            notableSpecies: [
                "Green Sea Turtle",
                "Humpback Whale",
                "Blue Angel",
                "Bermuda Chub",
                "Great Barracuda",
                "Parrotfish",
                "Spiny Lobster",
                "Queen Conch",
                "Brain Coral",
                "Sea Fan"
            ]
        },
        
        formation: {
            age: "100,000 years (modern reef)",
            process: "Reef built on volcanic seamount, warmed by Gulf Stream",
            growthRate: "0.3-1 cm per year"
        },
        
        structure: {
            lagoonDepth: "0-20m",
            reefFlatDepth: "0-5m",
            reefCrestDepth: "0-3m",
            foreReefDepth: "3-30m",
            outerSlopeDepth: "30-4,000m+"
        },
        
        conditions: {
            temperature: "18-29°C",
            salinity: "36-37 ppt",
            currents: "Gulf Stream",
            visibility: "15-50m"
        },
        
        economic: {
            tourismValue: "$200 million/year",
            fisheriesValue: "$10 million/year",
            jobsSupported: "5,000+",
            coastalProtection: "$1 billion/year"
        },
        
        threats: {
            bleaching: "medium",
            warming: "medium",
            acidification: "medium",
            pollution: "medium",
            overfishing: "low"
        },
        
        conservation: {
            status: "Marine Protected Areas Network",
            mpaPercent: "20%",
            programs: "Bermuda Zoological Society, BIOS",
            research: "Bermuda Institute of Ocean Sciences (since 1903)"
        },
        
        history: [
            { year: "1609", event: "Sea Venture shipwreck leads to colonization" },
            { year: "1903", event: "Bermuda Biological Station established" },
            { year: "1966", event: "First marine protected areas created" }
        ],
        
        nearbyIslands: [
            "Main Island",
            "St. George's",
            "St. David's",
            "Somerset",
            "Ireland Island"
        ],
        
        islandCoordinates: [
            { name: "Hamilton", lat: 32.2949, lng: -64.7830 },
            { name: "St. George's", lat: 32.3778, lng: -64.6786 },
            { name: "North Rock", lat: 32.4833, lng: -64.7500 }
        ],
        
        scientificImportance: "World's northernmost coral reef system (32°N). BIOS operates longest-running ocean time series (since 1954). Critical for understanding reef survival at thermal limits.",
        
        typeDescription: "The world's northernmost true coral reef, surviving thanks to the warming influence of the Gulf Stream at an unlikely latitude."
    },
    
    {
        id: 28,
        name: "Persian Gulf Coral Reefs",
        country: "UAE, Bahrain, Qatar, Iran, Saudi Arabia, Kuwait",
        ocean: "Indian Ocean",
        region: "Persian Gulf",
        type: "Fringing Reef",
        size: "3,500 km²",
        length: "1,000 km coastline",
        area: "3,500 km² reef area",
        reefCount: "Multiple reef complexes",
        
        coordinates: {
            lat: 26.0000,
            lng: 52.0000
        },
        mapZoom: 6,
        
        image: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=800",
        backgroundImage: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=1920",
        gallery: [
            "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=600",
            "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600",
            "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600",
            "https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=600",
            "https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=600",
            "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=600"
        ],
        
        biodiversity: {
            coralSpecies: "60+",
            fishSpecies: "500+",
            turtleSpecies: "2",
            sharkSpecies: "15+",
            whaleSpecies: "3+",
            molluskSpecies: "200+",
            notableSpecies: [
                "Arabian Carpet Shark",
                "Hawksbill Turtle",
                "Dugong",
                "Whale Shark",
                "Giant Grouper",
                "Cuttlefish",
                "Pearl Oyster",
                "Sea Snake",
                "Hamour (Orange-spotted Grouper)",
                "Sooty Gull"
            ]
        },
        
        formation: {
            age: "15,000 years (post-glacial)",
            process: "Developed in extreme conditions after Persian Gulf flooded",
            growthRate: "0.5-1 cm per year"
        },
        
        structure: {
            lagoonDepth: "0-15m",
            reefFlatDepth: "0-3m",
            reefCrestDepth: "0-2m",
            foreReefDepth: "2-35m",
            outerSlopeDepth: "35-90m (max gulf depth)"
        },
        
        conditions: {
            temperature: "15-36°C (extreme range)",
            salinity: "38-45 ppt (extreme)",
            currents: "Tidal and wind-driven",
            visibility: "5-20m"
        },
        
        economic: {
            tourismValue: "$300 million/year",
            fisheriesValue: "$500 million/year",
            jobsSupported: "25,000+",
            coastalProtection: "$2 billion/year"
        },
        
        threats: {
            bleaching: "high",
            warming: "high",
            acidification: "medium",
            pollution: "high",
            overfishing: "high"
        },
        
        conservation: {
            status: "Various national protected areas",
            mpaPercent: "5%",
            programs: "Regional Organization for Protection of Marine Environment",
            research: "UAE University, NYUAD research"
        },
        
        history: [
            { year: "3000 BCE", event: "Ancient pearl diving industry begins" },
            { year: "1990s", event: "Offshore development impacts begin" },
            { year: "2017", event: "Abu Dhabi Blue Carbon project launched" }
        ],
        
        nearbyIslands: [
            "Sir Abu Nu'ayr",
            "Halul Island",
            "Das Island",
            "Sir Bani Yas",
            "Bahrain Islands"
        ],
        
        islandCoordinates: [
            { name: "Abu Dhabi", lat: 24.4539, lng: 54.3773 },
            { name: "Bahrain", lat: 26.0667, lng: 50.5577 },
            { name: "Qatar", lat: 25.3548, lng: 51.1839 }
        ],
        
        scientificImportance: "World's most extreme coral environment (15-36°C, 45 ppt salinity). These 'super corals' provide genetic insights for climate adaptation research globally.",
        
        typeDescription: "Corals surviving in Earth's hottest and most saline reef environment, offering hope for climate change adaptation research."
    },
    
    {
        id: 29,
        name: "Rowley Shoals",
        country: "Australia",
        ocean: "Indian Ocean",
        region: "Timor Sea",
        type: "Atoll",
        size: "87 km²",
        length: "Three atolls over 260 km",
        area: "87 km² reef area",
        reefCount: "3 shelf-edge atolls",
        
        coordinates: {
            lat: -17.3500,
            lng: 119.3500
        },
        mapZoom: 9,
        
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800",
        backgroundImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920",
        gallery: [
            "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600",
            "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600",
            "https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=600",
            "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=600",
            "https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=600",
            "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=600"
        ],
        
        biodiversity: {
            coralSpecies: "200+",
            fishSpecies: "650+",
            turtleSpecies: "3",
            sharkSpecies: "20+",
            whaleSpecies: "8+",
            molluskSpecies: "300+",
            notableSpecies: [
                "Potato Cod",
                "Grey Reef Shark",
                "Manta Ray",
                "Giant Trevally",
                "Whale Shark",
                "Hawksbill Turtle",
                "Giant Clam",
                "Nautilus",
                "Red Bass",
                "Maori Wrasse"
            ]
        },
        
        formation: {
            age: "10,000+ years",
            process: "Shelf-edge atolls developed on continental margin",
            growthRate: "1-2 cm per year"
        },
        
        structure: {
            lagoonDepth: "0-30m",
            reefFlatDepth: "0-3m",
            reefCrestDepth: "0-1m",
            foreReefDepth: "1-100m",
            outerSlopeDepth: "100-400m+"
        },
        
        conditions: {
            temperature: "25-30°C",
            salinity: "35 ppt",
            currents: "Indonesian Throughflow influence",
            visibility: "30-60m"
        },
        
        economic: {
            tourismValue: "$5 million/year (limited access)",
            fisheriesValue: "Catch and release only",
            jobsSupported: "100+",
            coastalProtection: "N/A (offshore)"
        },
        
        threats: {
            bleaching: "low",
            warming: "low",
            acidification: "low",
            pollution: "low",
            overfishing: "low"
        },
        
        conservation: {
            status: "Rowley Shoals Marine Park",
            mpaPercent: "100%",
            programs: "Western Australian Department of Biodiversity",
            research: "WA Museum expeditions"
        },
        
        history: [
            { year: "1800", event: "Discovered by Captain Rowley" },
            { year: "1990", event: "Marine Park established" },
            { year: "2007", event: "Park boundaries extended" }
        ],
        
        nearbyIslands: [
            "Mermaid Reef",
            "Clerke Reef",
            "Imperieuse Reef",
            "Scott Reef (90 km)",
            "Browse Island"
        ],
        
        islandCoordinates: [
            { name: "Mermaid Reef", lat: -17.0833, lng: 119.5833 },
            { name: "Clerke Reef", lat: -17.3333, lng: 119.3500 },
            { name: "Imperieuse Reef", lat: -17.5833, lng: 118.9333 }
        ],
        
        scientificImportance: "Australia's most pristine reef system with 80%+ live coral cover. Isolated location creates genetic sanctuary. Critical baseline for comparing degraded reef systems.",
        
        typeDescription: "Three pristine shelf-edge atolls rising from deep water, representing some of Australia's most unspoiled coral reef ecosystems."
    },
    
    {
        id: 30,
        name: "Scott Reef",
        country: "Australia",
        ocean: "Indian Ocean",
        region: "Timor Sea",
        type: "Platform Reef",
        size: "375 km²",
        length: "Two reefs over 50 km",
        area: "375 km²",
        reefCount: "2 large platform reefs",
        
        coordinates: {
            lat: -14.0667,
            lng: 121.8333
        },
        mapZoom: 9,
        
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800",
        backgroundImage: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920",
        gallery: [
            "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600",
            "https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=600",
            "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600",
            "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=600",
            "https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=600",
            "https://images.unsplash.com/photo-1518467166778-b88f373ffec7?w=600"
        ],
        
        biodiversity: {
            coralSpecies: "300+",
            fishSpecies: "700+",
            turtleSpecies: "3",
            sharkSpecies: "20+",
            whaleSpecies: "10+",
            molluskSpecies: "400+",
            notableSpecies: [
                "Green Sea Turtle",
                "Hawksbill Turtle",
                "Tiger Shark",
                "Whale Shark",
                "Manta Ray",
                "Silvertip Shark",
                "Giant Grouper",
                "Bumphead Parrotfish",
                "Coconut Crab",
                "Seabirds (nesting colonies)"
            ]
        },
        
        formation: {
            age: "15,000+ years",
            process: "Oceanic platform reefs developed on submerged plateaus",
            growthRate: "1-2 cm per year"
        },
        
        structure: {
            lagoonDepth: "0-60m",
            reefFlatDepth: "0-5m",
            reefCrestDepth: "0-2m",
            foreReefDepth: "2-80m",
            outerSlopeDepth: "80-500m+"
        },
        
        conditions: {
            temperature: "27-31°C",
            salinity: "35 ppt",
            currents: "Indonesian Throughflow",
            visibility: "25-50m"
        },
        
        economic: {
            tourismValue: "Minimal (very remote)",
            fisheriesValue: "Protected",
            jobsSupported: "50+",
            coastalProtection: "N/A (oceanic)"
        },
        
        threats: {
            bleaching: "high",
            warming: "high",
            acidification: "medium",
            pollution: "low",
            overfishing: "low"
        },
        
        conservation: {
            status: "Scott Reef Managed Area",
            mpaPercent: "100%",
            programs: "Australian Institute of Marine Science monitoring",
            research: "Long-term bleaching recovery studies"
        },
        
        history: [
            { year: "1995", event: "Severe bleaching event" },
            { year: "1998", event: "Mass bleaching affected 80% of corals" },
            { year: "2016", event: "Unprecedented third mass bleaching" }
        ],
        
        nearbyIslands: [
            "South Scott Reef",
            "North Scott Reef",
            "Sandy Islet",
            "Seringapatam Reef (100 km)",
            "Browse Island"
        ],
        
        islandCoordinates: [
            { name: "South Scott Reef", lat: -14.1000, lng: 121.8167 },
            { name: "North Scott Reef", lat: -13.9833, lng: 121.8500 },
            { name: "Sandy Islet", lat: -14.0500, lng: 121.8167 }
        ],
        
        scientificImportance: "Key site for understanding coral reef recovery after bleaching events. Isolated location (400 km from mainland) makes it natural laboratory for reef resilience studies.",
        
        typeDescription: "Remote oceanic reefs that have experienced multiple bleaching events, now serving as critical sites for studying coral recovery and resilience."
    }
];

// Export for use in main application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CORAL_REEFS_3;
}
