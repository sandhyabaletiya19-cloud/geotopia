// Mountains Data Part 1: Mountains 1-10 (Highest Peaks)
// Ordered by highest peak elevation (descending)

const mountainsData1 = [
    {
        id: 1,
        name: "Himalayas",
        slug: "himalayas",
        continent: "Asia",
        countries: [
            { name: "Nepal", code: "NP", flag: "🇳🇵" },
            { name: "India", code: "IN", flag: "🇮🇳" },
            { name: "China", code: "CN", flag: "🇨🇳" },
            { name: "Bhutan", code: "BT", flag: "🇧🇹" },
            { name: "Pakistan", code: "PK", flag: "🇵🇰" }
        ],
        highestPeak: {
            name: "Mount Everest",
            elevation: 8849,
            coordinates: { lat: 27.9881, lng: 86.9250 }
        },
        majorPeaks: [
            { name: "Mount Everest", elevation: 8849 },
            { name: "Kangchenjunga", elevation: 8586 },
            { name: "Lhotse", elevation: 8516 },
            { name: "Makalu", elevation: 8485 },
            { name: "Cho Oyu", elevation: 8188 },
            { name: "Dhaulagiri", elevation: 8167 },
            { name: "Manaslu", elevation: 8163 },
            { name: "Nanga Parbat", elevation: 8126 },
            { name: "Annapurna I", elevation: 8091 },
            { name: "Shishapangma", elevation: 8027 }
        ],
        formation: {
            origin: "Continental collision",
            age: "50-55 million years",
            plates: "Indian Plate colliding with Eurasian Plate"
        },
        length: 2400,
        averageElevation: 6000,
        passes: [
            { name: "Khunjerab Pass", elevation: 4693 },
            { name: "Nathu La", elevation: 4310 },
            { name: "Rohtang Pass", elevation: 3978 }
        ],
        glaciers: [
            "Gangotri Glacier",
            "Siachen Glacier",
            "Baltoro Glacier",
            "Khumbu Glacier",
            "Yamunotri Glacier"
        ],
        rivers: [
            { name: "Ganges", length: 2525 },
            { name: "Indus", length: 3180 },
            { name: "Brahmaputra", length: 2900 },
            { name: "Yamuna", length: 1376 }
        ],
        biodiversity: {
            wildlife: ["Snow Leopard", "Himalayan Black Bear", "Red Panda", "Himalayan Tahr", "Musk Deer"],
            vegetation: ["Alpine meadows", "Coniferous forests", "Rhododendron forests", "Temperate broadleaf"]
        },
        climate: "Alpine, varies from subtropical at base to polar at peaks",
        settlements: ["Kathmandu", "Lhasa", "Shimla", "Darjeeling", "Thimphu"],
        economy: {
            tourism: "Major trekking and mountaineering destination",
            hydropower: "Significant hydroelectric potential",
            agriculture: "Terrace farming, tea cultivation"
        },
        environmentalIssues: [
            "Glacier melting due to climate change",
            "Deforestation",
            "Solid waste from tourism",
            "Seismic activity"
        ],
        history: {
            tradeRoutes: "Ancient Silk Road connections",
            expeditions: "First Everest summit: 1953 by Hillary and Tenzing",
            cultural: "Sacred mountains in Hindu and Buddhist traditions"
        },
        images: {
            card: "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?w=400",
            background: "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?w=1920",
            gallery: [
                "https://images.unsplash.com/photo-1486911278844-a81c5267e227?w=1200",
                "https://images.unsplash.com/photo-1580655653885-65763b2597d0?w=1200",
                "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200",
                "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=1200"
            ]
        },
        mapCenter: { lat: 28.0, lng: 84.0 },
        mapZoom: 6,
        elevationClass: "extreme"
    },
    {
        id: 2,
        name: "Karakoram",
        slug: "karakoram",
        continent: "Asia",
        countries: [
            { name: "Pakistan", code: "PK", flag: "🇵🇰" },
            { name: "India", code: "IN", flag: "🇮🇳" },
            { name: "China", code: "CN", flag: "🇨🇳" }
        ],
        highestPeak: {
            name: "K2",
            elevation: 8611,
            coordinates: { lat: 35.8808, lng: 76.5155 }
        },
        majorPeaks: [
            { name: "K2", elevation: 8611 },
            { name: "Gasherbrum I", elevation: 8080 },
            { name: "Broad Peak", elevation: 8051 },
            { name: "Gasherbrum II", elevation: 8035 },
            { name: "Gasherbrum III", elevation: 7952 },
            { name: "Gasherbrum IV", elevation: 7925 },
            { name: "Masherbrum", elevation: 7821 }
        ],
        formation: {
            origin: "Continental collision",
            age: "50 million years",
            plates: "Indian Plate subducting under Eurasian Plate"
        },
        length: 500,
        averageElevation: 5500,
        passes: [
            { name: "Khunjerab Pass", elevation: 4693 },
            { name: "Karakoram Pass", elevation: 5540 }
        ],
        glaciers: [
            "Siachen Glacier",
            "Baltoro Glacier",
            "Biafo Glacier",
            "Hispar Glacier"
        ],
        rivers: [
            { name: "Indus", length: 3180 },
            { name: "Shyok River", length: 550 }
        ],
        biodiversity: {
            wildlife: ["Snow Leopard", "Markhor", "Himalayan Ibex", "Marco Polo Sheep"],
            vegetation: ["Alpine desert", "Juniper scrub", "High altitude meadows"]
        },
        climate: "Cold desert, extreme temperature variations",
        settlements: ["Skardu", "Gilgit", "Hunza Valley"],
        economy: {
            tourism: "Mountaineering expeditions",
            agriculture: "Apricot orchards, terraced farming"
        },
        environmentalIssues: [
            "Glacial lake outburst floods",
            "Climate change impact",
            "Limited water resources"
        ],
        history: {
            tradeRoutes: "Ancient Silk Road",
            expeditions: "K2 first summit: 1954 by Italian expedition",
            cultural: "Part of ancient Buddhist kingdoms"
        },
        images: {
            card: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=400",
            background: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=1920",
            gallery: [
                "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=1200",
                "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?w=1200"
            ]
        },
        mapCenter: { lat: 35.8, lng: 76.5 },
        mapZoom: 7,
        elevationClass: "extreme"
    },
    {
        id: 3,
        name: "Hindu Kush",
        slug: "hindu-kush",
        continent: "Asia",
        countries: [
            { name: "Afghanistan", code: "AF", flag: "🇦🇫" },
            { name: "Pakistan", code: "PK", flag: "🇵🇰" }
        ],
        highestPeak: {
            name: "Tirich Mir",
            elevation: 7708,
            coordinates: { lat: 36.2525, lng: 71.8506 }
        },
        majorPeaks: [
            { name: "Tirich Mir", elevation: 7708 },
            { name: "Noshaq", elevation: 7492 },
            { name: "Istor-o-Nal", elevation: 7403 },
            { name: "Saraghrar", elevation: 7338 },
            { name: "Udren Zom", elevation: 7140 }
        ],
        formation: {
            origin: "Alpine orogeny",
            age: "40-50 million years",
            plates: "Indian-Eurasian collision zone"
        },
        length: 800,
        averageElevation: 4500,
        passes: [
            { name: "Khyber Pass", elevation: 1070 },
            { name: "Salang Pass", elevation: 3878 },
            { name: "Baroghil Pass", elevation: 3798 }
        ],
        glaciers: [
            "Tirich Glacier",
            "Chiantar Glacier",
            "Atrak Glacier"
        ],
        rivers: [
            { name: "Kabul River", length: 700 },
            { name: "Chitral River", length: 300 }
        ],
        biodiversity: {
            wildlife: ["Snow Leopard", "Markhor", "Lynx", "Grey Wolf"],
            vegetation: ["Juniper forests", "Alpine meadows", "Dry scrubland"]
        },
        climate: "Continental, cold winters and mild summers",
        settlements: ["Kabul", "Chitral", "Peshawar"],
        economy: {
            tourism: "Limited due to conflict",
            mining: "Gemstones including lapis lazuli"
        },
        environmentalIssues: [
            "Deforestation",
            "Overgrazing",
            "Water scarcity"
        ],
        history: {
            tradeRoutes: "Ancient trade route between Central and South Asia",
            expeditions: "First Tirich Mir ascent: 1950",
            cultural: "Named 'Killer of Hindus' from historical crossings"
        },
        images: {
            card: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
            background: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920",
            gallery: [
                "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200"
            ]
        },
        mapCenter: { lat: 36.0, lng: 71.0 },
        mapZoom: 7,
        elevationClass: "very-high"
    },
    {
        id: 4,
        name: "Hengduan Mountains",
        slug: "hengduan-mountains",
        continent: "Asia",
        countries: [
            { name: "China", code: "CN", flag: "🇨🇳" },
            { name: "Myanmar", code: "MM", flag: "🇲🇲" }
        ],
        highestPeak: {
            name: "Gongga Shan (Minya Konka)",
            elevation: 7556,
            coordinates: { lat: 29.5958, lng: 101.8783 }
        },
        majorPeaks: [
            { name: "Gongga Shan", elevation: 7556 },
            { name: "Genyen", elevation: 6204 },
            { name: "Mount Siguniang", elevation: 6250 },
            { name: "Kawagebo", elevation: 6740 }
        ],
        formation: {
            origin: "Himalayan orogeny extension",
            age: "50 million years",
            plates: "Indian-Eurasian collision effects"
        },
        length: 900,
        averageElevation: 4000,
        passes: [],
        glaciers: [
            "Hailuogou Glacier",
            "Gongga Glaciers"
        ],
        rivers: [
            { name: "Yangtze", length: 6300 },
            { name: "Mekong", length: 4350 },
            { name: "Salween", length: 2815 }
        ],
        biodiversity: {
            wildlife: ["Giant Panda", "Red Panda", "Snow Leopard", "Takin"],
            vegetation: ["Subtropical forests", "Alpine meadows", "Rhododendron forests"]
        },
        climate: "Varies from subtropical to alpine",
        settlements: ["Chengdu", "Kunming", "Lijiang"],
        economy: {
            tourism: "Growing ecotourism",
            hydropower: "Major dam projects"
        },
        environmentalIssues: [
            "Dam construction impacts",
            "Habitat fragmentation",
            "Climate change"
        ],
        history: {
            tradeRoutes: "Tea Horse Road",
            expeditions: "Early 20th century explorations",
            cultural: "Tibetan Buddhist influence"
        },
        images: {
            card: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=400",
            background: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1920",
            gallery: []
        },
        mapCenter: { lat: 29.5, lng: 101.0 },
        mapZoom: 7,
        elevationClass: "very-high"
    },
    {
        id: 5,
        name: "Kunlun Mountains",
        slug: "kunlun-mountains",
        continent: "Asia",
        countries: [
            { name: "China", code: "CN", flag: "🇨🇳" }
        ],
        highestPeak: {
            name: "Liushi Shan",
            elevation: 7167,
            coordinates: { lat: 35.7833, lng: 81.0167 }
        },
        majorPeaks: [
            { name: "Liushi Shan", elevation: 7167 },
            { name: "Kongur Tagh", elevation: 7649 },
            { name: "Muztagh Ata", elevation: 7546 },
            { name: "Kunlun Goddess Peak", elevation: 7167 }
        ],
        formation: {
            origin: "Tectonic uplift",
            age: "130-150 million years",
            plates: "Part of Tibetan Plateau formation"
        },
        length: 3000,
        averageElevation: 5500,
        passes: [
            { name: "Kunlun Pass", elevation: 4772 }
        ],
        glaciers: [
            "Yengisogat Glacier",
            "Karakax Glacier"
        ],
        rivers: [
            { name: "Yellow River (source)", length: 5464 },
            { name: "Yangtze (source)", length: 6300 }
        ],
        biodiversity: {
            wildlife: ["Tibetan Antelope", "Wild Yak", "Tibetan Wolf", "Kiang"],
            vegetation: ["Alpine desert", "Steppe grasslands"]
        },
        climate: "High altitude desert, extreme cold",
        settlements: ["Golmud", "Korla"],
        economy: {
            mining: "Jade mining historically significant"
        },
        environmentalIssues: [
            "Permafrost degradation",
            "Mining impacts"
        ],
        history: {
            tradeRoutes: "Southern Silk Road",
            cultural: "Sacred in Chinese mythology"
        },
        images: {
            card: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400",
            background: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920",
            gallery: []
        },
        mapCenter: { lat: 36.0, lng: 84.0 },
        mapZoom: 6,
        elevationClass: "very-high"
    },
    {
        id: 6,
        name: "Pamir Mountains",
        slug: "pamir-mountains",
        continent: "Asia",
        countries: [
            { name: "Tajikistan", code: "TJ", flag: "🇹🇯" },
            { name: "Kyrgyzstan", code: "KG", flag: "🇰🇬" },
            { name: "Afghanistan", code: "AF", flag: "🇦🇫" },
            { name: "China", code: "CN", flag: "🇨🇳" },
            { name: "Pakistan", code: "PK", flag: "🇵🇰" }
        ],
        highestPeak: {
            name: "Ismoil Somoni Peak",
            elevation: 7495,
            coordinates: { lat: 38.9333, lng: 72.0167 }
        },
        majorPeaks: [
            { name: "Ismoil Somoni Peak", elevation: 7495 },
            { name: "Peak Lenin", elevation: 7134 },
            { name: "Peak Korzhenevskaya", elevation: 7105 },
            { name: "Independence Peak", elevation: 6974 }
        ],
        formation: {
            origin: "Convergent plate boundary",
            age: "50 million years",
            plates: "Junction of Himalayas, Tian Shan, Karakoram, Hindu Kush"
        },
        length: 600,
        averageElevation: 4500,
        passes: [
            { name: "Kulma Pass", elevation: 4362 },
            { name: "Ak-Baital Pass", elevation: 4655 }
        ],
        glaciers: [
            "Fedchenko Glacier",
            "Zeravshan Glacier"
        ],
        rivers: [
            { name: "Amu Darya", length: 2400 },
            { name: "Panj River", length: 1125 }
        ],
        biodiversity: {
            wildlife: ["Marco Polo Sheep", "Snow Leopard", "Himalayan Brown Bear"],
            vegetation: ["Alpine grasslands", "Shrublands"]
        },
        climate: "Cold semi-arid, harsh winters",
        settlements: ["Khorog", "Murghab"],
        economy: {
            tourism: "Adventure tourism growing",
            agriculture: "Limited high-altitude farming"
        },
        environmentalIssues: [
            "Glacial retreat",
            "Natural disasters"
        ],
        history: {
            tradeRoutes: "Ancient Silk Road junction",
            cultural: "Known as 'Roof of the World'"
        },
        images: {
            card: "https://images.unsplash.com/photo-1464278533981-50106e6176b1?w=400",
            background: "https://images.unsplash.com/photo-1464278533981-50106e6176b1?w=1920",
            gallery: []
        },
        mapCenter: { lat: 38.5, lng: 73.0 },
        mapZoom: 7,
        elevationClass: "very-high"
    },
    {
        id: 7,
        name: "Tian Shan",
        slug: "tian-shan",
        continent: "Asia",
        countries: [
            { name: "Kazakhstan", code: "KZ", flag: "🇰🇿" },
            { name: "Kyrgyzstan", code: "KG", flag: "🇰🇬" },
            { name: "China", code: "CN", flag: "🇨🇳" },
            { name: "Uzbekistan", code: "UZ", flag: "🇺🇿" }
        ],
        highestPeak: {
            name: "Jengish Chokusu (Victory Peak)",
            elevation: 7439,
            coordinates: { lat: 42.0339, lng: 80.1253 }
        },
        majorPeaks: [
            { name: "Jengish Chokusu", elevation: 7439 },
            { name: "Khan Tengri", elevation: 7010 },
            { name: "Peak Pobeda", elevation: 7439 },
            { name: "Pik Talgar", elevation: 4973 }
        ],
        formation: {
            origin: "Paleozoic collision and Cenozoic reactivation",
            age: "300-400 million years (reactivated 50 million years ago)",
            plates: "Eurasian Plate internal deformation"
        },
        length: 2500,
        averageElevation: 4000,
        passes: [
            { name: "Torugart Pass", elevation: 3752 },
            { name: "Irkeshtam Pass", elevation: 2850 }
        ],
        glaciers: [
            "Inylchek Glacier",
            "Southern Inylchek Glacier"
        ],
        rivers: [
            { name: "Syr Darya", length: 3019 },
            { name: "Ili River", length: 1439 }
        ],
        biodiversity: {
            wildlife: ["Snow Leopard", "Argali", "Ibex", "Lynx"],
            vegetation: ["Spruce forests", "Alpine meadows", "Juniper woodlands"]
        },
        climate: "Continental, cold winters, warm summers",
        settlements: ["Almaty", "Bishkek", "Ürümqi"],
        economy: {
            tourism: "Mountaineering, skiing",
            mining: "Gold and mineral extraction"
        },
        environmentalIssues: [
            "Glacier shrinkage",
            "Mining pollution",
            "Overgrazing"
        ],
        history: {
            tradeRoutes: "Northern Silk Road",
            cultural: "Name means 'Celestial Mountains' in Chinese"
        },
        images: {
            card: "https://images.unsplash.com/photo-1486911278844-a81c5267e227?w=400",
            background: "https://images.unsplash.com/photo-1486911278844-a81c5267e227?w=1920",
            gallery: []
        },
        mapCenter: { lat: 42.0, lng: 80.0 },
        mapZoom: 6,
        elevationClass: "very-high"
    },
    {
        id: 8,
        name: "Andes",
        slug: "andes",
        continent: "Americas",
        countries: [
            { name: "Argentina", code: "AR", flag: "🇦🇷" },
            { name: "Chile", code: "CL", flag: "🇨🇱" },
            { name: "Peru", code: "PE", flag: "🇵🇪" },
            { name: "Bolivia", code: "BO", flag: "🇧🇴" },
            { name: "Ecuador", code: "EC", flag: "🇪🇨" },
            { name: "Colombia", code: "CO", flag: "🇨🇴" },
            { name: "Venezuela", code: "VE", flag: "🇻🇪" }
        ],
        highestPeak: {
            name: "Aconcagua",
            elevation: 6961,
            coordinates: { lat: -32.6532, lng: -70.0109 }
        },
        majorPeaks: [
            { name: "Aconcagua", elevation: 6961 },
            { name: "Ojos del Salado", elevation: 6893 },
            { name: "Monte Pissis", elevation: 6793 },
            { name: "Huascarán", elevation: 6768 },
            { name: "Nevado Sajama", elevation: 6542 },
            { name: "Chimborazo", elevation: 6263 },
            { name: "Cotopaxi", elevation: 5897 }
        ],
        formation: {
            origin: "Subduction zone orogeny",
            age: "200 million years (ongoing)",
            plates: "Nazca Plate subducting under South American Plate"
        },
        length: 7000,
        averageElevation: 4000,
        passes: [
            { name: "Cristo Redentor Pass", elevation: 3832 },
            { name: "Abra La Raya", elevation: 4335 }
        ],
        glaciers: [
            "Quelccaya Ice Cap",
            "Perito Moreno Glacier",
            "Upsala Glacier"
        ],
        rivers: [
            { name: "Amazon", length: 6400 },
            { name: "Orinoco", length: 2140 },
            { name: "Magdalena", length: 1528 }
        ],
        biodiversity: {
            wildlife: ["Andean Condor", "Vicuña", "Spectacled Bear", "Puma", "Llama"],
            vegetation: ["Cloud forests", "Páramo", "Puna grasslands", "Tropical rainforest"]
        },
        climate: "Highly variable: tropical to polar",
        settlements: ["Bogotá", "Quito", "La Paz", "Cusco", "Santiago"],
        economy: {
            mining: "Copper, silver, gold, lithium",
            tourism: "Machu Picchu, trekking",
            agriculture: "Coffee, quinoa, potatoes"
        },
        environmentalIssues: [
            "Mining pollution",
            "Glacier retreat",
            "Deforestation",
            "Volcanic activity"
        ],
        history: {
            tradeRoutes: "Inca road system (Qhapaq Ñan)",
            expeditions: "Numerous conquistador crossings",
            cultural: "Heart of Inca Empire"
        },
        images: {
            card: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400",
            background: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920",
            gallery: [
                "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=1200",
                "https://images.unsplash.com/photo-1533069027836-fa937181a8ce?w=1200"
            ]
        },
        mapCenter: { lat: -15.0, lng: -70.0 },
        mapZoom: 4,
        elevationClass: "very-high"
    },
    {
        id: 9,
        name: "Alaska Range",
        slug: "alaska-range",
        continent: "Americas",
        countries: [
            { name: "United States", code: "US", flag: "🇺🇸" }
        ],
        highestPeak: {
            name: "Denali",
            elevation: 6190,
            coordinates: { lat: 63.0692, lng: -151.0063 }
        },
        majorPeaks: [
            { name: "Denali", elevation: 6190 },
            { name: "Mount Foraker", elevation: 5304 },
            { name: "Mount Hunter", elevation: 4442 },
            { name: "Mount Hayes", elevation: 4216 }
        ],
        formation: {
            origin: "Subduction and terrane accretion",
            age: "60 million years",
            plates: "Pacific Plate subducting under North American Plate"
        },
        length: 650,
        averageElevation: 3000,
        passes: [],
        glaciers: [
            "Ruth Glacier",
            "Kahiltna Glacier",
            "Tokositna Glacier"
        ],
        rivers: [
            { name: "Yukon River", length: 3185 },
            { name: "Susitna River", length: 504 }
        ],
        biodiversity: {
            wildlife: ["Grizzly Bear", "Dall Sheep", "Caribou", "Wolf", "Moose"],
            vegetation: ["Boreal forest", "Alpine tundra", "Taiga"]
        },
        climate: "Subarctic to Arctic",
        settlements: ["Fairbanks", "Anchorage"],
        economy: {
            tourism: "Denali National Park",
            mining: "Historical gold mining"
        },
        environmentalIssues: [
            "Climate change impacts",
            "Permafrost thawing"
        ],
        history: {
            expeditions: "First Denali summit: 1913",
            cultural: "Sacred to Athabascan people"
        },
        images: {
            card: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
            background: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920",
            gallery: []
        },
        mapCenter: { lat: 63.0, lng: -151.0 },
        mapZoom: 7,
        elevationClass: "high"
    },
    {
        id: 10,
        name: "Saint Elias Mountains",
        slug: "saint-elias-mountains",
        continent: "Americas",
        countries: [
            { name: "United States", code: "US", flag: "🇺🇸" },
            { name: "Canada", code: "CA", flag: "🇨🇦" }
        ],
        highestPeak: {
            name: "Mount Logan",
            elevation: 5959,
            coordinates: { lat: 60.5675, lng: -140.4061 }
        },
        majorPeaks: [
            { name: "Mount Logan", elevation: 5959 },
            { name: "Mount Saint Elias", elevation: 5489 },
            { name: "Mount Lucania", elevation: 5226 },
            { name: "King Peak", elevation: 5173 }
        ],
        formation: {
            origin: "Collision of Yakutat terrane",
            age: "10-15 million years",
            plates: "Pacific Plate interaction"
        },
        length: 400,
        averageElevation: 3500,
        passes: [],
        glaciers: [
            "Hubbard Glacier",
            "Malaspina Glacier",
            "Seward Glacier"
        ],
        rivers: [
            { name: "Alsek River", length: 260 },
            { name: "Copper River", length: 460 }
        ],
        biodiversity: {
            wildlife: ["Mountain Goat", "Black Bear", "Wolverine"],
            vegetation: ["Ice fields", "Alpine tundra", "Coastal rainforest"]
        },
        climate: "Maritime subarctic",
        settlements: ["Yakutat", "Whitehorse"],
        economy: {
            tourism: "Glacial tourism, wilderness experiences"
        },
        environmentalIssues: [
            "Rapid glacial retreat",
            "Seismic activity"
        ],
        history: {
            expeditions: "First Logan summit: 1925",
            cultural: "Part of Kluane World Heritage Site"
        },
        images: {
            card: "https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=400",
            background: "https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=1920",
            gallery: []
        },
        mapCenter: { lat: 60.5, lng: -140.0 },
        mapZoom: 7,
        elevationClass: "high"
    }
];

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = mountainsData1;
}
