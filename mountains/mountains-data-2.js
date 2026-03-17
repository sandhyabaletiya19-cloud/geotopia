// Mountains Data Part 2: Mountains 11-20
// Ordered by highest peak elevation (descending)

const mountainsData2 = [
    {
        id: 11,
        name: "Kilimanjaro Massif",
        slug: "kilimanjaro",
        continent: "Africa",
        countries: [
            { name: "Tanzania", code: "TZ", flag: "🇹🇿" }
        ],
        highestPeak: {
            name: "Uhuru Peak",
            elevation: 5895,
            coordinates: { lat: -3.0674, lng: 37.3556 }
        },
        majorPeaks: [
            { name: "Uhuru Peak (Kibo)", elevation: 5895 },
            { name: "Mawenzi Peak", elevation: 5149 },
            { name: "Shira Peak", elevation: 3962 }
        ],
        formation: {
            origin: "Volcanic activity (stratovolcano)",
            age: "3 million years",
            plates: "East African Rift System"
        },
        length: 60,
        averageElevation: 4000,
        passes: [],
        glaciers: [
            "Rebmann Glacier",
            "Furtwängler Glacier",
            "Northern Icefield"
        ],
        rivers: [
            { name: "Pangani River", length: 500 }
        ],
        biodiversity: {
            wildlife: ["African Elephant", "Cape Buffalo", "Colobus Monkey"],
            vegetation: ["Montane forest", "Heath zone", "Alpine desert"]
        },
        climate: "Multiple zones from tropical to arctic",
        settlements: ["Moshi", "Arusha"],
        economy: {
            tourism: "Major climbing destination, over 50,000 climbers annually"
        },
        environmentalIssues: [
            "Glacier retreat (90% loss since 1900)",
            "Deforestation on lower slopes",
            "Tourism pressure"
        ],
        history: {
            expeditions: "First summit: 1889 by Hans Meyer",
            cultural: "Sacred mountain to local Chagga people"
        },
        images: {
            card: "https://images.unsplash.com/photo-1609198092458-38a293c7ac4b?w=400",
            background: "https://images.unsplash.com/photo-1609198092458-38a293c7ac4b?w=1920",
            gallery: [
                "https://images.unsplash.com/photo-1621414050345-53db43f7e7ab?w=1200"
            ]
        },
        mapCenter: { lat: -3.07, lng: 37.35 },
        mapZoom: 10,
        elevationClass: "high"
    },
    {
        id: 12,
        name: "Caucasus Mountains",
        slug: "caucasus",
        continent: "Europe",
        countries: [
            { name: "Russia", code: "RU", flag: "🇷🇺" },
            { name: "Georgia", code: "GE", flag: "🇬🇪" },
            { name: "Azerbaijan", code: "AZ", flag: "🇦🇿" },
            { name: "Armenia", code: "AM", flag: "🇦🇲" }
        ],
        highestPeak: {
            name: "Mount Elbrus",
            elevation: 5642,
            coordinates: { lat: 43.3499, lng: 42.4453 }
        },
        majorPeaks: [
            { name: "Mount Elbrus", elevation: 5642 },
            { name: "Dykh-Tau", elevation: 5205 },
            { name: "Shkhara", elevation: 5193 },
            { name: "Koshtan-Tau", elevation: 5152 },
            { name: "Mount Kazbek", elevation: 5047 }
        ],
        formation: {
            origin: "Continental collision",
            age: "25-30 million years",
            plates: "Arabian Plate pushing into Eurasian Plate"
        },
        length: 1200,
        averageElevation: 3200,
        passes: [
            { name: "Cross Pass", elevation: 2379 },
            { name: "Mamison Pass", elevation: 2819 }
        ],
        glaciers: [
            "Bezingi Glacier",
            "Dzhikiugankez Glacier"
        ],
        rivers: [
            { name: "Kuban River", length: 870 },
            { name: "Terek River", length: 623 },
            { name: "Kura River", length: 1515 }
        ],
        biodiversity: {
            wildlife: ["Caucasian Tur", "Brown Bear", "Persian Leopard", "Chamois"],
            vegetation: ["Mixed forests", "Alpine meadows", "Glacial zones"]
        },
        climate: "Continental to alpine",
        settlements: ["Sochi", "Tbilisi", "Baku", "Yerevan"],
        economy: {
            tourism: "Skiing, mountaineering",
            agriculture: "Wine, fruits"
        },
        environmentalIssues: [
            "Deforestation",
            "Overgrazing",
            "Climate change impacts"
        ],
        history: {
            tradeRoutes: "Ancient Silk Road branch",
            cultural: "Boundary between Europe and Asia"
        },
        images: {
            card: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400",
            background: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920",
            gallery: []
        },
        mapCenter: { lat: 43.0, lng: 43.0 },
        mapZoom: 7,
        elevationClass: "high"
    },
    {
        id: 13,
        name: "Alborz Mountains",
        slug: "alborz",
        continent: "Asia",
        countries: [
            { name: "Iran", code: "IR", flag: "🇮🇷" }
        ],
        highestPeak: {
            name: "Mount Damavand",
            elevation: 5610,
            coordinates: { lat: 35.9515, lng: 52.1095 }
        },
        majorPeaks: [
            { name: "Mount Damavand", elevation: 5610 },
            { name: "Alam Kuh", elevation: 4850 },
            { name: "Sabalan", elevation: 4811 },
            { name: "Takht-e Soleyman", elevation: 4658 }
        ],
        formation: {
            origin: "Alpine orogeny",
            age: "80-90 million years",
            plates: "Arabian-Eurasian collision"
        },
        length: 600,
        averageElevation: 3000,
        passes: [
            { name: "Kandovan Pass", elevation: 2930 }
        ],
        glaciers: [
            "Alamchal Glacier"
        ],
        rivers: [
            { name: "Safid Rud", length: 670 },
            { name: "Haraz River", length: 185 }
        ],
        biodiversity: {
            wildlife: ["Persian Leopard", "Wild Boar", "Red Fox"],
            vegetation: ["Hyrcanian forests", "Alpine meadows"]
        },
        climate: "Mediterranean to alpine",
        settlements: ["Tehran", "Rasht", "Amol"],
        economy: {
            tourism: "Skiing, climbing",
            agriculture: "Rice, citrus"
        },
        environmentalIssues: [
            "Air pollution from Tehran",
            "Deforestation",
            "Volcanic hazards"
        ],
        history: {
            cultural: "Damavand in Persian mythology",
            historical: "Ancient Zoroastrian significance"
        },
        images: {
            card: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=400",
            background: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1920",
            gallery: []
        },
        mapCenter: { lat: 36.0, lng: 52.0 },
        mapZoom: 7,
        elevationClass: "high"
    },
    {
        id: 14,
        name: "Mount Kenya Region",
        slug: "mount-kenya",
        continent: "Africa",
        countries: [
            { name: "Kenya", code: "KE", flag: "🇰🇪" }
        ],
        highestPeak: {
            name: "Batian Peak",
            elevation: 5199,
            coordinates: { lat: -0.1521, lng: 37.3084 }
        },
        majorPeaks: [
            { name: "Batian", elevation: 5199 },
            { name: "Nelion", elevation: 5188 },
            { name: "Point Lenana", elevation: 4985 }
        ],
        formation: {
            origin: "Volcanic origin (extinct stratovolcano)",
            age: "3 million years",
            plates: "East African Rift System"
        },
        length: 60,
        averageElevation: 3500,
        passes: [],
        glaciers: [
            "Lewis Glacier",
            "Tyndall Glacier"
        ],
        rivers: [
            { name: "Tana River", length: 1014 },
            { name: "Ewaso Ng'iro", length: 700 }
        ],
        biodiversity: {
            wildlife: ["Elephant", "Buffalo", "Giant Forest Hog", "Bongo"],
            vegetation: ["Montane forest", "Bamboo zone", "Alpine zone"]
        },
        climate: "Tropical montane",
        settlements: ["Nanyuki", "Nyeri"],
        economy: {
            tourism: "UNESCO World Heritage Site",
            agriculture: "Tea, coffee on lower slopes"
        },
        environmentalIssues: [
            "Glacier retreat",
            "Deforestation",
            "Wildlife poaching"
        ],
        history: {
            expeditions: "First summit: 1899",
            cultural: "Sacred to Kikuyu people"
        },
        images: {
            card: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=400",
            background: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=1920",
            gallery: []
        },
        mapCenter: { lat: -0.15, lng: 37.31 },
        mapZoom: 10,
        elevationClass: "high"
    },
    {
        id: 15,
        name: "Rwenzori Mountains",
        slug: "rwenzori",
        continent: "Africa",
        countries: [
            { name: "Uganda", code: "UG", flag: "🇺🇬" },
            { name: "Democratic Republic of Congo", code: "CD", flag: "🇨🇩" }
        ],
        highestPeak: {
            name: "Mount Stanley (Margherita Peak)",
            elevation: 5109,
            coordinates: { lat: 0.3858, lng: 29.8716 }
        },
        majorPeaks: [
            { name: "Mount Stanley", elevation: 5109 },
            { name: "Mount Speke", elevation: 4890 },
            { name: "Mount Baker", elevation: 4843 }
        ],
        formation: {
            origin: "Block mountain (horst)",
            age: "3 million years",
            plates: "East African Rift System"
        },
        length: 120,
        averageElevation: 3500,
        passes: [],
        glaciers: [
            "Speke Glacier",
            "Elena Glacier",
            "Margherita Glacier"
        ],
        rivers: [
            { name: "Semliki River", length: 140 }
        ],
        biodiversity: {
            wildlife: ["Forest Elephant", "Chimpanzee", "Rwenzori Turaco"],
            vegetation: ["Afro-alpine", "Giant heather", "Giant lobelia"]
        },
        climate: "Equatorial montane, very wet",
        settlements: ["Fort Portal", "Kasese"],
        economy: {
            tourism: "Trekking, UNESCO World Heritage"
        },
        environmentalIssues: [
            "Rapid glacier loss",
            "Illegal logging"
        ],
        history: {
            expeditions: "First summit: 1906 by Duke of Abruzzi",
            cultural: "Ancient 'Mountains of the Moon'"
        },
        images: {
            card: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400",
            background: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1920",
            gallery: []
        },
        mapCenter: { lat: 0.4, lng: 29.9 },
        mapZoom: 10,
        elevationClass: "high"
    },
    {
        id: 16,
        name: "Maoke Mountains",
        slug: "maoke-mountains",
        continent: "Oceania",
        countries: [
            { name: "Indonesia", code: "ID", flag: "🇮🇩" }
        ],
        highestPeak: {
            name: "Puncak Jaya (Carstensz Pyramid)",
            elevation: 4884,
            coordinates: { lat: -4.0833, lng: 137.1833 }
        },
        majorPeaks: [
            { name: "Puncak Jaya", elevation: 4884 },
            { name: "Puncak Mandala", elevation: 4760 },
            { name: "Puncak Trikora", elevation: 4750 },
            { name: "Ngga Pulu", elevation: 4862 }
        ],
        formation: {
            origin: "Tectonic uplift",
            age: "10-15 million years",
            plates: "Australian Plate collision with Pacific Plate"
        },
        length: 600,
        averageElevation: 3500,
        passes: [],
        glaciers: [
            "Carstensz Glacier (nearly gone)"
        ],
        rivers: [
            { name: "Mamberamo River", length: 670 }
        ],
        biodiversity: {
            wildlife: ["Tree Kangaroo", "Birds of Paradise", "Cuscus"],
            vegetation: ["Tropical rainforest", "Alpine grasslands"]
        },
        climate: "Tropical alpine",
        settlements: ["Jayapura", "Wamena"],
        economy: {
            mining: "Grasberg Mine (gold and copper)"
        },
        environmentalIssues: [
            "Mining impacts",
            "Tropical glacier loss",
            "Deforestation"
        ],
        history: {
            expeditions: "First summit: 1962",
            cultural: "Home to indigenous Papuan tribes"
        },
        images: {
            card: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400",
            background: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920",
            gallery: []
        },
        mapCenter: { lat: -4.0, lng: 137.0 },
        mapZoom: 8,
        elevationClass: "high"
    },
    {
        id: 17,
        name: "Alps",
        slug: "alps",
        continent: "Europe",
        countries: [
            { name: "France", code: "FR", flag: "🇫🇷" },
            { name: "Switzerland", code: "CH", flag: "🇨🇭" },
            { name: "Italy", code: "IT", flag: "🇮🇹" },
            { name: "Austria", code: "AT", flag: "🇦🇹" },
            { name: "Germany", code: "DE", flag: "🇩🇪" },
            { name: "Slovenia", code: "SI", flag: "🇸🇮" },
            { name: "Liechtenstein", code: "LI", flag: "🇱🇮" },
            { name: "Monaco", code: "MC", flag: "🇲🇨" }
        ],
        highestPeak: {
            name: "Mont Blanc",
            elevation: 4809,
            coordinates: { lat: 45.8326, lng: 6.8652 }
        },
        majorPeaks: [
            { name: "Mont Blanc", elevation: 4809 },
            { name: "Monte Rosa", elevation: 4634 },
            { name: "Dom", elevation: 4545 },
            { name: "Matterhorn", elevation: 4478 },
            { name: "Eiger", elevation: 3967 },
            { name: "Jungfrau", elevation: 4158 }
        ],
        formation: {
            origin: "Continental collision",
            age: "65 million years",
            plates: "African Plate pushing into Eurasian Plate"
        },
        length: 1200,
        averageElevation: 2500,
        passes: [
            { name: "Brenner Pass", elevation: 1370 },
            { name: "St. Gotthard Pass", elevation: 2106 },
            { name: "Simplon Pass", elevation: 2005 }
        ],
        glaciers: [
            "Aletsch Glacier",
            "Mer de Glace",
            "Gorner Glacier"
        ],
        rivers: [
            { name: "Rhine", length: 1233 },
            { name: "Rhône", length: 812 },
            { name: "Po", length: 652 },
            { name: "Danube (tributaries)", length: 2850 }
        ],
        biodiversity: {
            wildlife: ["Alpine Ibex", "Chamois", "Golden Eagle", "Marmot"],
            vegetation: ["Mixed forests", "Alpine meadows", "Edelweiss"]
        },
        climate: "Alpine, varies by altitude",
        settlements: ["Geneva", "Zurich", "Innsbruck", "Turin", "Milan"],
        economy: {
            tourism: "Major global ski destination",
            hydropower: "Extensive dam systems",
            agriculture: "Dairy, cheese production"
        },
        environmentalIssues: [
            "Glacier retreat",
            "Permafrost thawing",
            "Overtourism"
        ],
        history: {
            tradeRoutes: "Roman roads, medieval trade routes",
            expeditions: "First Mont Blanc ascent: 1786",
            cultural: "Birthplace of modern mountaineering"
        },
        images: {
            card: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=400",
            background: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1920",
            gallery: [
                "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200",
                "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200"
            ]
        },
        mapCenter: { lat: 46.5, lng: 8.0 },
        mapZoom: 6,
        elevationClass: "high"
    },
    {
        id: 18,
        name: "Ethiopian Highlands",
        slug: "ethiopian-highlands",
        continent: "Africa",
        countries: [
            { name: "Ethiopia", code: "ET", flag: "🇪🇹" },
            { name: "Eritrea", code: "ER", flag: "🇪🇷" }
        ],
        highestPeak: {
            name: "Ras Dashen",
            elevation: 4550,
            coordinates: { lat: 13.2333, lng: 38.3667 }
        },
        majorPeaks: [
            { name: "Ras Dashen", elevation: 4550 },
            { name: "Mount Batu", elevation: 4437 },
            { name: "Mount Tullu Demtu", elevation: 4377 }
        ],
        formation: {
            origin: "Volcanic activity and rifting",
            age: "30 million years",
            plates: "East African Rift System"
        },
        length: 1600,
        averageElevation: 2500,
        passes: [],
        glaciers: [],
        rivers: [
            { name: "Blue Nile", length: 1450 },
            { name: "Awash River", length: 1200 }
        ],
        biodiversity: {
            wildlife: ["Gelada Baboon", "Ethiopian Wolf", "Walia Ibex"],
            vegetation: ["Afro-alpine", "Montane grasslands"]
        },
        climate: "Tropical highland",
        settlements: ["Addis Ababa", "Gondar", "Axum"],
        economy: {
            agriculture: "Coffee origin, teff cultivation"
        },
        environmentalIssues: [
            "Soil erosion",
            "Deforestation",
            "Overgrazing"
        ],
        history: {
            cultural: "Ancient Ethiopian Empire",
            historical: "Roof of Africa"
        },
        images: {
            card: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=400",
            background: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=1920",
            gallery: []
        },
        mapCenter: { lat: 9.0, lng: 38.0 },
        mapZoom: 6,
        elevationClass: "high"
    },
    {
        id: 19,
        name: "Altai Mountains",
        slug: "altai-mountains",
        continent: "Asia",
        countries: [
            { name: "Russia", code: "RU", flag: "🇷🇺" },
            { name: "Kazakhstan", code: "KZ", flag: "🇰🇿" },
            { name: "Mongolia", code: "MN", flag: "🇲🇳" },
            { name: "China", code: "CN", flag: "🇨🇳" }
        ],
        highestPeak: {
            name: "Belukha",
            elevation: 4506,
            coordinates: { lat: 49.8081, lng: 86.5906 }
        },
        majorPeaks: [
            { name: "Belukha", elevation: 4506 },
            { name: "Khüiten Peak", elevation: 4374 },
            { name: "Tavan Bogd", elevation: 4374 }
        ],
        formation: {
            origin: "Multiple orogenic events",
            age: "500 million years (reactivated)",
            plates: "Complex tectonic history"
        },
        length: 2000,
        averageElevation: 2500,
        passes: [],
        glaciers: [
            "Aktru Glacier",
            "Gebler Glacier"
        ],
        rivers: [
            { name: "Ob River", length: 3650 },
            { name: "Irtysh River", length: 4248 }
        ],
        biodiversity: {
            wildlife: ["Snow Leopard", "Argali", "Siberian Ibex", "Lynx"],
            vegetation: ["Taiga", "Alpine meadows", "Steppe"]
        },
        climate: "Continental, severe winters",
        settlements: ["Barnaul", "Gorno-Altaysk"],
        economy: {
            tourism: "Ecotourism, adventure tourism",
            mining: "Gold, silver"
        },
        environmentalIssues: [
            "Mining impacts",
            "Climate change"
        ],
        history: {
            cultural: "Ancient Scythian burial mounds",
            historical: "UNESCO World Heritage"
        },
        images: {
            card: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=400",
            background: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=1920",
            gallery: []
        },
        mapCenter: { lat: 49.0, lng: 88.0 },
        mapZoom: 6,
        elevationClass: "high"
    },
    {
        id: 20,
        name: "Sierra Nevada (California)",
        slug: "sierra-nevada-california",
        continent: "Americas",
        countries: [
            { name: "United States", code: "US", flag: "🇺🇸" }
        ],
        highestPeak: {
            name: "Mount Whitney",
            elevation: 4421,
            coordinates: { lat: 36.5785, lng: -118.2923 }
        },
        majorPeaks: [
            { name: "Mount Whitney", elevation: 4421 },
            { name: "Mount Williamson", elevation: 4382 },
            { name: "White Mountain Peak", elevation: 4344 },
            { name: "North Palisade", elevation: 4341 }
        ],
        formation: {
            origin: "Batholith uplift",
            age: "100 million years (granite), 5 million years (uplift)",
            plates: "Pacific Plate subduction"
        },
        length: 640,
        averageElevation: 3000,
        passes: [
            { name: "Tioga Pass", elevation: 3031 },
            { name: "Donner Pass", elevation: 2160 }
        ],
        glaciers: [
            "Palisade Glacier"
        ],
        rivers: [
            { name: "Sacramento River", length: 719 },
            { name: "San Joaquin River", length: 560 },
            { name: "Kings River", length: 208 }
        ],
        biodiversity: {
            wildlife: ["Black Bear", "Mule Deer", "Mountain Lion", "Bighorn Sheep"],
            vegetation: ["Giant Sequoia", "Mixed conifer forest", "Alpine meadows"]
        },
        climate: "Mediterranean montane",
        settlements: ["Fresno", "Reno", "Lake Tahoe area"],
        economy: {
            tourism: "Yosemite, skiing, hiking",
            hydropower: "Major water supply"
        },
        environmentalIssues: [
            "Wildfire risk",
            "Drought",
            "Bark beetle infestations"
        ],
        history: {
            expeditions: "Gold Rush era exploration",
            cultural: "John Muir's conservation legacy"
        },
        images: {
            card: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400",
            background: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920",
            gallery: []
        },
        mapCenter: { lat: 37.0, lng: -119.0 },
        mapZoom: 7,
        elevationClass: "high"
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = mountainsData2;
}
