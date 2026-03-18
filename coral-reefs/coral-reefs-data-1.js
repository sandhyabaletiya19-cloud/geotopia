/* ========================================
   CORAL REEFS DATA - FILE 1
   Reefs 1-10 (Largest Coral Reef Systems)
   ======================================== */

const CORAL_REEFS_1 = [
    {
        id: 1,
        name: "Great Barrier Reef",
        country: "Australia",
        ocean: "Pacific Ocean",
        region: "Coral Sea",
        type: "Barrier Reef",
        size: "344,400 km²",
        length: "2,300 km",
        area: "344,400 km²",
        reefCount: "2,900+ individual reefs",
        
        coordinates: {
            lat: -18.2871,
            lng: 147.6992
        },
        mapZoom: 5,
        
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800",
        backgroundImage: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920",
        gallery: [
            "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600",
            "https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=600",
            "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600",
            "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=600",
            "https://images.unsplash.com/photo-1518467166778-b88f373ffec7?w=600",
            "https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=600"
        ],
        
        biodiversity: {
            coralSpecies: "400+",
            fishSpecies: "1,500+",
            turtleSpecies: "6",
            sharkSpecies: "30+",
            whaleSpecies: "30+",
            molluskSpecies: "4,000+",
            notableSpecies: [
                "Clownfish",
                "Giant Clam",
                "Manta Ray",
                "Dugong",
                "Green Sea Turtle",
                "Humphead Wrasse",
                "Potato Cod",
                "Whale Shark",
                "Dwarf Minke Whale",
                "Crown-of-Thorns Starfish"
            ]
        },
        
        formation: {
            age: "500,000 years",
            process: "Built by billions of tiny organisms called coral polyps secreting calcium carbonate over millennia",
            growthRate: "1-3 cm per year"
        },
        
        structure: {
            lagoonDepth: "0-20m",
            reefFlatDepth: "0-5m",
            reefCrestDepth: "0-2m",
            foreReefDepth: "2-40m",
            outerSlopeDepth: "40-100m+"
        },
        
        conditions: {
            temperature: "24-30°C",
            salinity: "35 ppt",
            currents: "East Australian Current",
            visibility: "15-30m"
        },
        
        economic: {
            tourismValue: "$6.4 billion/year",
            fisheriesValue: "$1.2 billion/year",
            jobsSupported: "64,000+",
            coastalProtection: "$10 billion/year"
        },
        
        threats: {
            bleaching: "high",
            warming: "high",
            acidification: "medium",
            pollution: "medium",
            overfishing: "low"
        },
        
        conservation: {
            status: "UNESCO World Heritage Site",
            mpaPercent: "33%",
            programs: "Reef 2050 Long-Term Sustainability Plan",
            research: "Australian Institute of Marine Science ongoing research"
        },
        
        history: [
            { year: "1770", event: "First European documentation by James Cook" },
            { year: "1975", event: "Great Barrier Reef Marine Park established" },
            { year: "1981", event: "Listed as UNESCO World Heritage Site" }
        ],
        
        nearbyIslands: [
            "Lizard Island",
            "Heron Island",
            "Green Island",
            "Hamilton Island",
            "Whitsunday Islands"
        ],
        
        islandCoordinates: [
            { name: "Lizard Island", lat: -14.6667, lng: 145.4667 },
            { name: "Heron Island", lat: -23.4333, lng: 151.9167 },
            { name: "Green Island", lat: -16.7589, lng: 145.9722 },
            { name: "Hamilton Island", lat: -20.3483, lng: 148.9536 }
        ],
        
        scientificImportance: "The most extensively studied reef system in the world, providing crucial data on climate change impacts, coral bleaching, and marine ecosystem dynamics. Home to major research stations and long-term monitoring programs.",
        
        typeDescription: "The world's largest barrier reef system, running parallel to Queensland's coast and visible from space."
    },
    
    {
        id: 2,
        name: "Mesoamerican Barrier Reef",
        country: "Mexico, Belize, Guatemala, Honduras",
        ocean: "Atlantic Ocean",
        region: "Caribbean Sea",
        type: "Barrier Reef",
        size: "1,000 km length",
        length: "1,000 km",
        area: "96,300 km²",
        reefCount: "700+ patch reefs",
        
        coordinates: {
            lat: 17.4500,
            lng: -87.8000
        },
        mapZoom: 6,
        
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800",
        backgroundImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920",
        gallery: [
            "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600",
            "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600",
            "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=600",
            "https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=600",
            "https://images.unsplash.com/photo-1518467166778-b88f373ffec7?w=600",
            "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=600"
        ],
        
        biodiversity: {
            coralSpecies: "65+",
            fishSpecies: "500+",
            turtleSpecies: "4",
            sharkSpecies: "15+",
            whaleSpecies: "10+",
            molluskSpecies: "350+",
            notableSpecies: [
                "Whale Shark",
                "West Indian Manatee",
                "Hawksbill Turtle",
                "Nassau Grouper",
                "Queen Conch",
                "Elkhorn Coral",
                "Spotted Eagle Ray",
                "Caribbean Reef Shark",
                "Loggerhead Turtle",
                "Spiny Lobster"
            ]
        },
        
        formation: {
            age: "225 million years (foundation)",
            process: "Developed on ancient limestone platform through coral polyp accumulation",
            growthRate: "0.5-2 cm per year"
        },
        
        structure: {
            lagoonDepth: "0-15m",
            reefFlatDepth: "0-3m",
            reefCrestDepth: "0-2m",
            foreReefDepth: "2-30m",
            outerSlopeDepth: "30-60m+"
        },
        
        conditions: {
            temperature: "25-29°C",
            salinity: "36 ppt",
            currents: "Caribbean Current",
            visibility: "20-40m"
        },
        
        economic: {
            tourismValue: "$2.5 billion/year",
            fisheriesValue: "$500 million/year",
            jobsSupported: "45,000+",
            coastalProtection: "$3 billion/year"
        },
        
        threats: {
            bleaching: "high",
            warming: "high",
            acidification: "medium",
            pollution: "high",
            overfishing: "medium"
        },
        
        conservation: {
            status: "Multiple UNESCO Sites & Marine Reserves",
            mpaPercent: "25%",
            programs: "MAR Fund, Healthy Reefs Initiative",
            research: "Multi-country collaborative monitoring since 2006"
        },
        
        history: [
            { year: "1842", event: "Charles Darwin studied the reef formation" },
            { year: "1996", event: "Belize Barrier Reef designated UNESCO World Heritage Site" },
            { year: "1997", event: "Sian Ka'an Biosphere Reserve established" }
        ],
        
        nearbyIslands: [
            "Cozumel",
            "Ambergris Caye",
            "Roatán",
            "Utila",
            "Turneffe Atoll"
        ],
        
        islandCoordinates: [
            { name: "Cozumel", lat: 20.4230, lng: -86.9223 },
            { name: "Ambergris Caye", lat: 17.9214, lng: -87.9667 },
            { name: "Roatán", lat: 16.3833, lng: -86.4167 },
            { name: "Utila", lat: 16.0983, lng: -86.8939 }
        ],
        
        scientificImportance: "Second largest barrier reef in the world, critical for studying trans-boundary marine conservation and multi-national reef management strategies. Important whale shark aggregation site.",
        
        typeDescription: "The largest barrier reef in the Western Hemisphere, spanning four countries along the Caribbean coast of Central America."
    },
    
    {
        id: 3,
        name: "New Caledonia Barrier Reef",
        country: "New Caledonia (France)",
        ocean: "Pacific Ocean",
        region: "Coral Sea",
        type: "Barrier Reef",
        size: "1,500 km length",
        length: "1,500 km",
        area: "40,000 km²",
        reefCount: "Multiple reef complexes",
        
        coordinates: {
            lat: -21.5000,
            lng: 165.5000
        },
        mapZoom: 6,
        
        image: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=800",
        backgroundImage: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=1920",
        gallery: [
            "https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=600",
            "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600",
            "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600",
            "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=600",
            "https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=600",
            "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=600"
        ],
        
        biodiversity: {
            coralSpecies: "350+",
            fishSpecies: "1,000+",
            turtleSpecies: "5",
            sharkSpecies: "25+",
            whaleSpecies: "15+",
            molluskSpecies: "2,000+",
            notableSpecies: [
                "Dugong",
                "Nautilus",
                "Giant Trevally",
                "Humphead Wrasse",
                "Green Sea Turtle",
                "Tiger Shark",
                "Humpback Whale",
                "Banded Sea Krait",
                "Leopard Shark",
                "Giant Clam"
            ]
        },
        
        formation: {
            age: "20 million years",
            process: "Developed around volcanic islands and on submerged platforms",
            growthRate: "1-2 cm per year"
        },
        
        structure: {
            lagoonDepth: "0-40m",
            reefFlatDepth: "0-5m",
            reefCrestDepth: "0-2m",
            foreReefDepth: "2-35m",
            outerSlopeDepth: "35-100m+"
        },
        
        conditions: {
            temperature: "22-28°C",
            salinity: "35-36 ppt",
            currents: "South Equatorial Current",
            visibility: "20-50m"
        },
        
        economic: {
            tourismValue: "$400 million/year",
            fisheriesValue: "$100 million/year",
            jobsSupported: "8,000+",
            coastalProtection: "$1.5 billion/year"
        },
        
        threats: {
            bleaching: "medium",
            warming: "medium",
            acidification: "medium",
            pollution: "low",
            overfishing: "low"
        },
        
        conservation: {
            status: "UNESCO World Heritage Site (2008)",
            mpaPercent: "60%",
            programs: "Natural Park of the Coral Sea",
            research: "IRD (French Research Institute) long-term studies"
        },
        
        history: [
            { year: "1774", event: "Discovered by James Cook" },
            { year: "2008", event: "Inscribed as UNESCO World Heritage Site" },
            { year: "2014", event: "Natural Park of the Coral Sea created" }
        ],
        
        nearbyIslands: [
            "Grande Terre",
            "Loyalty Islands",
            "Isle of Pines",
            "Belep Islands",
            "Chesterfield Islands"
        ],
        
        islandCoordinates: [
            { name: "Isle of Pines", lat: -22.6167, lng: 167.4833 },
            { name: "Loyalty Islands", lat: -21.0000, lng: 167.2500 },
            { name: "Nouméa", lat: -22.2758, lng: 166.4580 }
        ],
        
        scientificImportance: "One of the most pristine reef systems remaining on Earth, with exceptional biodiversity and endemic species. Important site for studying reef resilience and pristine coral ecosystems.",
        
        typeDescription: "The world's second-longest double barrier reef, encircling the main island of New Caledonia."
    },
    
    {
        id: 4,
        name: "Red Sea Coral Reef",
        country: "Egypt, Saudi Arabia, Sudan, Eritrea, Jordan, Israel, Yemen, Djibouti",
        ocean: "Indian Ocean",
        region: "Red Sea",
        type: "Fringing Reef",
        size: "2,000 km length",
        length: "2,000 km",
        area: "17,400 km²",
        reefCount: "Continuous fringing system",
        
        coordinates: {
            lat: 22.0000,
            lng: 38.0000
        },
        mapZoom: 5,
        
        image: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=800",
        backgroundImage: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=1920",
        gallery: [
            "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=600",
            "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600",
            "https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=600",
            "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600",
            "https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=600",
            "https://images.unsplash.com/photo-1518467166778-b88f373ffec7?w=600"
        ],
        
        biodiversity: {
            coralSpecies: "300+",
            fishSpecies: "1,200+",
            turtleSpecies: "5",
            sharkSpecies: "45+",
            whaleSpecies: "16+",
            molluskSpecies: "1,000+",
            notableSpecies: [
                "Napoleon Wrasse",
                "Oceanic Whitetip Shark",
                "Dugong",
                "Bottlenose Dolphin",
                "Manta Ray",
                "Giant Moray Eel",
                "Crocodilefish",
                "Red Sea Bannerfish",
                "Hawksbill Turtle",
                "Spinner Dolphin"
            ]
        },
        
        formation: {
            age: "5,000-7,000 years (modern reefs)",
            process: "Developed along volcanic and sedimentary coastlines in warm, hypersaline waters",
            growthRate: "1-2 cm per year"
        },
        
        structure: {
            lagoonDepth: "0-10m",
            reefFlatDepth: "0-3m",
            reefCrestDepth: "0-1m",
            foreReefDepth: "1-30m",
            outerSlopeDepth: "30-200m+"
        },
        
        conditions: {
            temperature: "21-30°C",
            salinity: "40 ppt (higher than average)",
            currents: "Red Sea Gyre",
            visibility: "30-50m"
        },
        
        economic: {
            tourismValue: "$3 billion/year",
            fisheriesValue: "$600 million/year",
            jobsSupported: "100,000+",
            coastalProtection: "$2 billion/year"
        },
        
        threats: {
            bleaching: "medium",
            warming: "medium",
            acidification: "low",
            pollution: "medium",
            overfishing: "high"
        },
        
        conservation: {
            status: "Multiple National Parks and Protected Areas",
            mpaPercent: "15%",
            programs: "PERSGA Regional Programme",
            research: "Red Sea Research Center (KAUST)"
        },
        
        history: [
            { year: "1869", event: "Suez Canal opened, connecting Mediterranean to Red Sea" },
            { year: "1983", event: "Ras Mohammed National Park established (Egypt)" },
            { year: "2016", event: "Super corals discovered with heat-resistant properties" }
        ],
        
        nearbyIslands: [
            "Tiran Island",
            "Sanafir Island",
            "Rocky Island",
            "Zabargad Island",
            "Brothers Islands"
        ],
        
        islandCoordinates: [
            { name: "Tiran Island", lat: 27.9500, lng: 34.5500 },
            { name: "Brothers Islands", lat: 26.3167, lng: 34.8500 },
            { name: "Zabargad Island", lat: 23.6167, lng: 36.2000 }
        ],
        
        scientificImportance: "Remarkable for heat-tolerant 'super corals' that can withstand higher temperatures, making it a crucial research site for climate adaptation studies. High endemism rate of approximately 14%.",
        
        typeDescription: "One of the most northerly tropical reef systems, known for exceptional visibility and heat-resistant corals."
    },
    
    {
        id: 5,
        name: "Andros Barrier Reef",
        country: "Bahamas",
        ocean: "Atlantic Ocean",
        region: "Caribbean Sea",
        type: "Barrier Reef",
        size: "225 km length",
        length: "225 km",
        area: "6,440 km²",
        reefCount: "Continuous barrier system",
        
        coordinates: {
            lat: 24.2500,
            lng: -77.9500
        },
        mapZoom: 8,
        
        image: "https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=800",
        backgroundImage: "https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=1920",
        gallery: [
            "https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=600",
            "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600",
            "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600",
            "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=600",
            "https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=600",
            "https://images.unsplash.com/photo-1518467166778-b88f373ffec7?w=600"
        ],
        
        biodiversity: {
            coralSpecies: "60+",
            fishSpecies: "300+",
            turtleSpecies: "3",
            sharkSpecies: "12+",
            whaleSpecies: "8+",
            molluskSpecies: "250+",
            notableSpecies: [
                "Queen Angelfish",
                "Nassau Grouper",
                "Caribbean Reef Shark",
                "Green Moray Eel",
                "Hawksbill Turtle",
                "Spotted Eagle Ray",
                "Queen Triggerfish",
                "French Angelfish",
                "Bonefish",
                "Blue Marlin"
            ]
        },
        
        formation: {
            age: "10,000+ years",
            process: "Developed on limestone platform following last ice age sea level rise",
            growthRate: "0.5-1.5 cm per year"
        },
        
        structure: {
            lagoonDepth: "0-4m",
            reefFlatDepth: "0-2m",
            reefCrestDepth: "0-1m",
            foreReefDepth: "1-40m",
            outerSlopeDepth: "40-1,800m (Tongue of the Ocean)"
        },
        
        conditions: {
            temperature: "24-29°C",
            salinity: "35-37 ppt",
            currents: "Gulf Stream influenced",
            visibility: "25-45m"
        },
        
        economic: {
            tourismValue: "$200 million/year",
            fisheriesValue: "$50 million/year",
            jobsSupported: "3,500+",
            coastalProtection: "$500 million/year"
        },
        
        threats: {
            bleaching: "medium",
            warming: "medium",
            acidification: "medium",
            pollution: "low",
            overfishing: "medium"
        },
        
        conservation: {
            status: "Bahamas National Trust Protected Areas",
            mpaPercent: "20%",
            programs: "Bahamas Reef Environment Educational Foundation",
            research: "Cape Eleuthera Institute studies"
        },
        
        history: [
            { year: "1958", event: "Marine research station established" },
            { year: "1973", event: "Bahamas independence, increased marine protection" },
            { year: "2002", event: "Andros West Side National Park created" }
        ],
        
        nearbyIslands: [
            "Andros Island",
            "New Providence",
            "Berry Islands",
            "Bimini",
            "Eleuthera"
        ],
        
        islandCoordinates: [
            { name: "Andros Town", lat: 24.7000, lng: -77.7667 },
            { name: "Nassau", lat: 25.0480, lng: -77.3554 },
            { name: "Bimini", lat: 25.7167, lng: -79.2667 }
        ],
        
        scientificImportance: "Third largest barrier reef in the world. Adjacent to the Tongue of the Ocean, one of the deepest underwater trenches near a reef system, providing unique research opportunities for deep-sea coral ecosystems.",
        
        typeDescription: "The third-largest barrier reef in the world, featuring the unique 'blue holes' limestone sinkholes."
    },
    
    {
        id: 6,
        name: "Florida Reef Tract",
        country: "United States",
        ocean: "Atlantic Ocean",
        region: "Florida Straits",
        type: "Barrier Reef",
        size: "580 km length",
        length: "580 km",
        area: "3,800 km²",
        reefCount: "6,000+ individual reefs",
        
        coordinates: {
            lat: 24.6000,
            lng: -81.5000
        },
        mapZoom: 8,
        
        image: "https://images.unsplash.com/photo-1518467166778-b88f373ffec7?w=800",
        backgroundImage: "https://images.unsplash.com/photo-1518467166778-b88f373ffec7?w=1920",
        gallery: [
            "https://images.unsplash.com/photo-1518467166778-b88f373ffec7?w=600",
            "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600",
            "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600",
            "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=600",
            "https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=600",
            "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=600"
        ],
        
        biodiversity: {
            coralSpecies: "45+",
            fishSpecies: "500+",
            turtleSpecies: "5",
            sharkSpecies: "20+",
            whaleSpecies: "12+",
            molluskSpecies: "300+",
            notableSpecies: [
                "Elkhorn Coral",
                "Staghorn Coral",
                "Loggerhead Turtle",
                "Goliath Grouper",
                "Queen Conch",
                "Nurse Shark",
                "Florida Manatee",
                "Bottlenose Dolphin",
                "Pillar Coral",
                "Spiny Lobster"
            ]
        },
        
        formation: {
            age: "5,000-7,000 years",
            process: "Developed on ancient limestone Keys platform following Holocene sea level rise",
            growthRate: "0.3-1 cm per year"
        },
        
        structure: {
            lagoonDepth: "0-10m",
            reefFlatDepth: "0-4m",
            reefCrestDepth: "0-2m",
            foreReefDepth: "2-35m",
            outerSlopeDepth: "35-100m+"
        },
        
        conditions: {
            temperature: "20-30°C",
            salinity: "35-37 ppt",
            currents: "Gulf Stream, Florida Current",
            visibility: "10-30m"
        },
        
        economic: {
            tourismValue: "$2 billion/year",
            fisheriesValue: "$250 million/year",
            jobsSupported: "71,000+",
            coastalProtection: "$3 billion/year"
        },
        
        threats: {
            bleaching: "high",
            warming: "high",
            acidification: "high",
            pollution: "high",
            overfishing: "medium"
        },
        
        conservation: {
            status: "Florida Keys National Marine Sanctuary",
            mpaPercent: "48%",
            programs: "Mission: Iconic Reefs, NOAA restoration",
            research: "Mote Marine Laboratory, NOAA ongoing studies"
        },
        
        history: [
            { year: "1960", event: "John Pennekamp Coral Reef State Park created" },
            { year: "1990", event: "Florida Keys National Marine Sanctuary established" },
            { year: "2019", event: "Mission: Iconic Reefs restoration launched" }
        ],
        
        nearbyIslands: [
            "Key Largo",
            "Key West",
            "Islamorada",
            "Marathon",
            "Big Pine Key"
        ],
        
        islandCoordinates: [
            { name: "Key Largo", lat: 25.0864, lng: -80.4473 },
            { name: "Key West", lat: 24.5551, lng: -81.7800 },
            { name: "Islamorada", lat: 24.9243, lng: -80.6276 }
        ],
        
        scientificImportance: "The only living coral barrier reef in the continental United States. Critical site for studying coral disease, restoration techniques, and the impacts of urbanization on reef ecosystems.",
        
        typeDescription: "The only living barrier reef in the continental United States, extending along the Florida Keys."
    },
    
    {
        id: 7,
        name: "Belize Barrier Reef",
        country: "Belize",
        ocean: "Atlantic Ocean",
        region: "Caribbean Sea",
        type: "Barrier Reef",
        size: "300 km length",
        length: "300 km",
        area: "960 km²",
        reefCount: "450+ cayes and islands",
        
        coordinates: {
            lat: 17.3500,
            lng: -87.5333
        },
        mapZoom: 8,
        
        image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800",
        backgroundImage: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=1920",
        gallery: [
            "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=600",
            "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600",
            "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600",
            "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=600",
            "https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=600",
            "https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=600"
        ],
        
        biodiversity: {
            coralSpecies: "70+",
            fishSpecies: "500+",
            turtleSpecies: "3",
            sharkSpecies: "12+",
            whaleSpecies: "5+",
            molluskSpecies: "350+",
            notableSpecies: [
                "West Indian Manatee",
                "Whale Shark",
                "Nassau Grouper",
                "Hawksbill Turtle",
                "Caribbean Reef Shark",
                "Queen Angelfish",
                "Elkhorn Coral",
                "Great Blue Hole formations",
                "Spiny Lobster",
                "Spotted Eagle Ray"
            ]
        },
        
        formation: {
            age: "15,000-20,000 years",
            process: "Developed on Pleistocene limestone foundation with continuous coral growth",
            growthRate: "0.5-1.5 cm per year"
        },
        
        structure: {
            lagoonDepth: "0-5m",
            reefFlatDepth: "0-2m",
            reefCrestDepth: "0-1m",
            foreReefDepth: "1-35m",
            outerSlopeDepth: "35-150m"
        },
        
        conditions: {
            temperature: "26-29°C",
            salinity: "35 ppt",
            currents: "Caribbean Current",
            visibility: "20-40m"
        },
        
        economic: {
            tourismValue: "$350 million/year",
            fisheriesValue: "$30 million/year",
            jobsSupported: "15,000+",
            coastalProtection: "$400 million/year"
        },
        
        threats: {
            bleaching: "high",
            warming: "high",
            acidification: "medium",
            pollution: "medium",
            overfishing: "medium"
        },
        
        conservation: {
            status: "UNESCO World Heritage Site",
            mpaPercent: "13%",
            programs: "Belize Audubon Society, Wildlife Conservation Society",
            research: "Smithsonian Marine Station at Carrie Bow Cay"
        },
        
        history: [
            { year: "1842", event: "Charles Darwin visited and studied the reef" },
            { year: "1996", event: "Listed as UNESCO World Heritage Site" },
            { year: "2018", event: "Removed from UNESCO 'in danger' list" }
        ],
        
        nearbyIslands: [
            "Ambergris Caye",
            "Caye Caulker",
            "Turneffe Atoll",
            "Lighthouse Reef",
            "Glover's Reef"
        ],
        
        islandCoordinates: [
            { name: "Ambergris Caye", lat: 17.9214, lng: -87.9667 },
            { name: "Caye Caulker", lat: 17.7500, lng: -88.0167 },
            { name: "Lighthouse Reef", lat: 17.3333, lng: -87.5333 }
        ],
        
        scientificImportance: "Home to the Great Blue Hole, a massive underwater sinkhole and diving destination. Important site for studying ancient reef formations and sinkhole geology.",
        
        typeDescription: "A section of the Mesoamerican Barrier Reef that includes the famous Great Blue Hole."
    },
    
    {
        id: 8,
        name: "Maldives Coral Reefs",
        country: "Maldives",
        ocean: "Indian Ocean",
        region: "Laccadive Sea",
        type: "Atoll",
        size: "8,920 km²",
        length: "871 km (north-south)",
        area: "8,920 km² coral area",
        reefCount: "26 atolls, 1,190+ islands",
        
        coordinates: {
            lat: 3.2028,
            lng: 73.2207
        },
        mapZoom: 6,
        
        image: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=800",
        backgroundImage: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=1920",
        gallery: [
            "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=600",
            "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600",
            "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600",
            "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=600",
            "https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=600",
            "https://images.unsplash.com/photo-1518467166778-b88f373ffec7?w=600"
        ],
        
        biodiversity: {
            coralSpecies: "250+",
            fishSpecies: "1,100+",
            turtleSpecies: "5",
            sharkSpecies: "26+",
            whaleSpecies: "21+",
            molluskSpecies: "400+",
            notableSpecies: [
                "Manta Ray",
                "Whale Shark",
                "Hawksbill Turtle",
                "Napoleon Wrasse",
                "Grey Reef Shark",
                "Spotted Eagle Ray",
                "Blacktip Reef Shark",
                "Green Sea Turtle",
                "Giant Trevally",
                "Moray Eel"
            ]
        },
        
        formation: {
            age: "55 million years (atoll foundation)",
            process: "Classic Darwinian atoll formation around subsiding volcanic islands",
            growthRate: "1-2 cm per year"
        },
        
        structure: {
            lagoonDepth: "0-80m",
            reefFlatDepth: "0-3m",
            reefCrestDepth: "0-1m",
            foreReefDepth: "1-40m",
            outerSlopeDepth: "40-500m+"
        },
        
        conditions: {
            temperature: "27-30°C",
            salinity: "34-35 ppt",
            currents: "Indian Ocean Monsoon currents",
            visibility: "20-50m"
        },
        
        economic: {
            tourismValue: "$4 billion/year",
            fisheriesValue: "$140 million/year",
            jobsSupported: "50,000+",
            coastalProtection: "$2.5 billion/year"
        },
        
        threats: {
            bleaching: "critical",
            warming: "critical",
            acidification: "high",
            pollution: "medium",
            overfishing: "medium"
        },
        
        conservation: {
            status: "Multiple UNESCO Biosphere Reserves",
            mpaPercent: "5%",
            programs: "Maldives Coral Reef Monitoring Network",
            research: "Maldives Marine Research Institute"
        },
        
        history: [
            { year: "1998", event: "Major bleaching event affected 90% of corals" },
            { year: "2009", event: "Underwater cabinet meeting to highlight climate change" },
            { year: "2016", event: "Second major bleaching event" }
        ],
        
        nearbyIslands: [
            "Malé",
            "Hulhumalé",
            "Maafushi",
            "Dhigurah",
            "Thulusdhoo"
        ],
        
        islandCoordinates: [
            { name: "Malé", lat: 4.1755, lng: 73.5093 },
            { name: "Ari Atoll", lat: 3.8667, lng: 72.8333 },
            { name: "Baa Atoll", lat: 5.0000, lng: 72.9667 }
        ],
        
        scientificImportance: "The world's lowest-lying country, providing critical data on sea level rise impacts on coral atoll nations. Important site for studying atoll formation and climate vulnerability.",
        
        typeDescription: "The world's most dispersed archipelago nation, built entirely on coral atolls with an average elevation of 1.5 meters."
    },
    
    {
        id: 9,
        name: "Coral Triangle (Philippines)",
        country: "Philippines",
        ocean: "Pacific Ocean",
        region: "Coral Triangle",
        type: "Fringing Reef",
        size: "27,000 km² reef area",
        length: "7,107 islands coastline",
        area: "27,000 km² coral reef",
        reefCount: "400+ reef systems",
        
        coordinates: {
            lat: 9.5000,
            lng: 123.0000
        },
        mapZoom: 5,
        
        image: "https://images.unsplash.com/photo-1551244072-5d12893278ab?w=800",
        backgroundImage: "https://images.unsplash.com/photo-1551244072-5d12893278ab?w=1920",
        gallery: [
            "https://images.unsplash.com/photo-1551244072-5d12893278ab?w=600",
            "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600",
            "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600",
            "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=600",
            "https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=600",
            "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=600"
        ],
        
        biodiversity: {
            coralSpecies: "500+",
            fishSpecies: "2,500+",
            turtleSpecies: "5",
            sharkSpecies: "45+",
            whaleSpecies: "25+",
            molluskSpecies: "5,000+",
            notableSpecies: [
                "Thresher Shark",
                "Whale Shark",
                "Dugong",
                "Giant Clam",
                "Nautilus",
                "Mandarin Fish",
                "Pygmy Seahorse",
                "Manta Ray",
                "Blue-ringed Octopus",
                "Flamboyant Cuttlefish"
            ]
        },
        
        formation: {
            age: "5-10 million years",
            process: "Developed around volcanic archipelago through tectonic and coral growth processes",
            growthRate: "1-3 cm per year"
        },
        
        structure: {
            lagoonDepth: "0-30m",
            reefFlatDepth: "0-5m",
            reefCrestDepth: "0-2m",
            foreReefDepth: "2-45m",
            outerSlopeDepth: "45-200m+"
        },
        
        conditions: {
            temperature: "26-30°C",
            salinity: "33-35 ppt",
            currents: "North Equatorial Current",
            visibility: "15-40m"
        },
        
        economic: {
            tourismValue: "$1.5 billion/year",
            fisheriesValue: "$2.5 billion/year",
            jobsSupported: "1,000,000+",
            coastalProtection: "$4 billion/year"
        },
        
        threats: {
            bleaching: "high",
            warming: "high",
            acidification: "medium",
            pollution: "high",
            overfishing: "critical"
        },
        
        conservation: {
            status: "Multiple UNESCO Sites, Coral Triangle Initiative",
            mpaPercent: "3%",
            programs: "Coral Triangle Initiative on Coral Reefs, Fisheries and Food Security",
            research: "Marine Science Institute, University of the Philippines"
        },
        
        history: [
            { year: "1993", event: "Tubbataha Reefs Natural Park designated UNESCO site" },
            { year: "2009", event: "Coral Triangle Initiative launched" },
            { year: "2018", event: "Boracay closed for rehabilitation" }
        ],
        
        nearbyIslands: [
            "Palawan",
            "Cebu",
            "Bohol",
            "Mindoro",
            "Siargao"
        ],
        
        islandCoordinates: [
            { name: "Palawan", lat: 9.5000, lng: 118.5000 },
            { name: "Cebu", lat: 10.3157, lng: 123.8854 },
            { name: "Bohol", lat: 9.8500, lng: 124.0000 }
        ],
        
        scientificImportance: "Part of the Coral Triangle, the global center of marine biodiversity with more species of coral and fish than anywhere else on Earth. Critical for understanding evolutionary biology of reef ecosystems.",
        
        typeDescription: "The epicenter of the Coral Triangle, possessing the highest marine biodiversity on Earth."
    },
    
    {
        id: 10,
        name: "Fiji Barrier Reef",
        country: "Fiji",
        ocean: "Pacific Ocean",
        region: "South Pacific",
        type: "Barrier Reef",
        size: "10,000 km²",
        length: "600+ km total",
        area: "10,000 km²",
        reefCount: "390+ coral species",
        
        coordinates: {
            lat: -17.8000,
            lng: 177.9500
        },
        mapZoom: 7,
        
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800",
        backgroundImage: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920",
        gallery: [
            "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600",
            "https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=600",
            "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600",
            "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=600",
            "https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=600",
            "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=600"
        ],
        
        biodiversity: {
            coralSpecies: "390+",
            fishSpecies: "1,500+",
            turtleSpecies: "4",
            sharkSpecies: "30+",
            whaleSpecies: "12+",
            molluskSpecies: "1,200+",
            notableSpecies: [
                "Bull Shark",
                "Tiger Shark",
                "Giant Manta Ray",
                "Humphead Wrasse",
                "Green Sea Turtle",
                "Humpback Whale",
                "Giant Trevally",
                "Lionfish",
                "Sea Snake",
                "Nautilus"
            ]
        },
        
        formation: {
            age: "8,000-10,000 years",
            process: "Developed around volcanic islands following post-glacial sea level rise",
            growthRate: "1-2.5 cm per year"
        },
        
        structure: {
            lagoonDepth: "0-50m",
            reefFlatDepth: "0-5m",
            reefCrestDepth: "0-2m",
            foreReefDepth: "2-40m",
            outerSlopeDepth: "40-1,000m+"
        },
        
        conditions: {
            temperature: "25-29°C",
            salinity: "34-35 ppt",
            currents: "South Equatorial Current",
            visibility: "20-50m"
        },
        
        economic: {
            tourismValue: "$1.2 billion/year",
            fisheriesValue: "$80 million/year",
            jobsSupported: "40,000+",
            coastalProtection: "$800 million/year"
        },
        
        threats: {
            bleaching: "medium",
            warming: "medium",
            acidification: "medium",
            pollution: "low",
            overfishing: "medium"
        },
        
        conservation: {
            status: "Fiji Locally Managed Marine Areas",
            mpaPercent: "30%",
            programs: "Fiji LMMA Network, Wildlife Conservation Society",
            research: "University of the South Pacific research programs"
        },
        
        history: [
            { year: "1970", event: "Fiji independence, marine conservation focus begins" },
            { year: "1997", event: "First Locally Managed Marine Area established" },
            { year: "2020", event: "Fiji commits to protecting 30% of ocean by 2030" }
        ],
        
        nearbyIslands: [
            "Viti Levu",
            "Vanua Levu",
            "Taveuni",
            "Kadavu",
            "Beqa"
        ],
        
        islandCoordinates: [
            { name: "Suva", lat: -18.1416, lng: 178.4415 },
            { name: "Taveuni", lat: -16.8667, lng: -179.9833 },
            { name: "Beqa", lat: -18.3833, lng: 178.1333 }
        ],
        
        scientificImportance: "Known as the 'Soft Coral Capital of the World' due to exceptional soft coral diversity. Important site for studying traditional marine management practices (tabu) and community-based conservation.",
        
        typeDescription: "One of the most colorful reef systems in the world, famous for soft corals and pristine dive sites."
    }
];

// Export for use in main application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CORAL_REEFS_1;
}
