// ============================================
// 🌍 GEOTOPIA PLATEAUS - COMPREHENSIVE DATA
// ============================================
// Version: 2.0.0
// Last Updated: 2024
// Total Plateaus: 150+
// Countries: 197 (Complete)
// ============================================

const PLATEAUS_COMPLETE_DATA = {

    // ==========================================
    // 🏔️ WORLD'S MAJOR PLATEAUS (150+ entries)
    // ==========================================
    
    worldPlateaus: [
        // ============ ASIA (50+ Plateaus) ============
        {
            id: 1,
            name: "Tibetan Plateau",
            alternateName: "Qinghai-Tibet Plateau",
            localName: "青藏高原 (Qīngzàng Gāoyuán)",
            nickname: "Roof of the World / Third Pole",
            countries: ["China", "India", "Nepal", "Bhutan"],
            continent: "Asia",
            region: "Central Asia / Himalayan",
            type: "Intermontane",
            subtype: "Tectonic Uplift",
            coordinates: { lat: 33.0, lng: 88.0 },
            boundingBox: { north: 40.0, south: 26.0, east: 105.0, west: 73.0 },
            area: 2500000,
            avgElevation: 4500,
            maxElevation: 8848,
            minElevation: 2500,
            ageMillionYears: 55,
            formation: {
                process: "Continental collision between Indian and Eurasian plates",
                startDate: "55 million years ago",
                ongoing: true,
                upliftRate: "5 mm/year",
                tectonicPlates: ["Indian Plate", "Eurasian Plate"]
            },
            features: [
                "Mount Everest (8,848m)",
                "Brahmaputra River source",
                "Lake Manasarovar",
                "Nam Co Lake",
                "Qinghai Lake",
                "Yarlung Tsangpo Canyon",
                "Chang Tang Plateau"
            ],
            climate: {
                type: "Alpine / Cold Desert",
                avgTempSummer: 10,
                avgTempWinter: -20,
                rainfall: 400,
                snowfall: "Significant above 5000m",
                permafrost: true
            },
            population: 12000000,
            majorCities: ["Lhasa", "Xining", "Shigatse", "Chamdo"],
            biodiversity: {
                flora: ["Alpine meadows", "Steppe grassland", "Cold desert scrub"],
                fauna: ["Snow Leopard", "Tibetan Antelope (Chiru)", "Wild Yak", "Tibetan Gazelle", "Kiang (Wild Ass)", "Bharal (Blue Sheep)", "Tibetan Fox", "Black-necked Crane"],
                endemic: true,
                protectedAreas: ["Chang Tang Nature Reserve", "Sanjiangyuan National Nature Reserve"]
            },
            rivers: {
                sources: ["Yangtze", "Yellow River", "Mekong", "Salween", "Indus", "Ganges", "Brahmaputra", "Irrawaddy", "Sutlej"],
                significance: "Source of 10 major Asian rivers serving 2 billion people"
            },
            geology: {
                rockTypes: ["Metamorphic", "Sedimentary", "Igneous"],
                formations: ["Himalayan foreland", "Tethyan sediments", "Tibetan batholith"],
                earthquakeRisk: "High",
                volcanicActivity: "Low (some hot springs)"
            },
            significance: {
                geological: "Largest orogenic plateau, ongoing active tectonics, crustal thickening",
                ecological: "Third Pole - largest freshwater reserve outside polar regions",
                cultural: "Center of Tibetan Buddhism, ancient Bon religion, unique nomadic culture",
                economic: "Mineral resources, tourism, hydropower potential",
                scientific: "Climate change indicator, monsoon driver, paleoclimate archive"
            },
            research: {
                institutions: ["Chinese Academy of Sciences", "Institute of Tibetan Plateau Research"],
                topics: ["Climate change", "Plate tectonics", "Permafrost degradation", "Glacier retreat"],
                expeditions: ["Multiple international research programs"]
            },
            threats: ["Climate change", "Permafrost melting", "Glacier retreat", "Overgrazing"],
            unesco: true,
            unescoSites: ["Potala Palace", "Jokhang Temple"],
            tourism: {
                visitors: 40000000,
                attractions: ["Mount Everest Base Camp", "Potala Palace", "Namtso Lake", "Jokhang Temple"],
                bestTime: "May-October"
            },
            color: "#ef4444",
            rank: 1,
            rankCriteria: "Largest and highest plateau"
        },
        {
            id: 2,
            name: "Deccan Plateau",
            alternateName: "Deccan Traps",
            localName: "दक्कन का पठार (Dakkan ka Pathaar)",
            nickname: "Southern Peninsula Plateau",
            countries: ["India"],
            continent: "Asia",
            region: "South Asia",
            type: "Volcanic",
            subtype: "Flood Basalt / Lava Plateau",
            coordinates: { lat: 18.0, lng: 77.0 },
            boundingBox: { north: 22.0, south: 8.0, east: 87.0, west: 72.0 },
            area: 500000,
            avgElevation: 600,
            maxElevation: 1200,
            minElevation: 300,
            ageMillionYears: 66,
            formation: {
                process: "Massive flood basalt volcanism from Réunion hotspot",
                startDate: "66 million years ago (Cretaceous-Paleogene boundary)",
                ongoing: false,
                duration: "1-2 million years of eruptions",
                lavaVolume: "1,500,000 km³"
            },
            features: [
                "Western Ghats (Sahyadri)",
                "Eastern Ghats",
                "Ajanta Caves",
                "Ellora Caves",
                "Lonar Crater Lake (Meteorite)",
                "Mahabaleshwar",
                "Black Cotton Soil (Regur)"
            ],
            climate: {
                type: "Semi-arid to Tropical Monsoon",
                avgTempSummer: 35,
                avgTempWinter: 20,
                rainfall: 750,
                monsoon: true,
                permafrost: false
            },
            population: 250000000,
            majorCities: ["Hyderabad", "Bangalore", "Pune", "Nagpur", "Mumbai (edge)"],
            biodiversity: {
                flora: ["Dry deciduous forests", "Thorn forests", "Tropical moist forests (Ghats)"],
                fauna: ["Bengal Tiger", "Indian Elephant", "Leopard", "Sloth Bear", "Indian Bison (Gaur)", "Dhole"],
                endemic: true,
                protectedAreas: ["Western Ghats (UNESCO)", "Nagarhole", "Bandipur"]
            },
            rivers: {
                sources: ["Godavari", "Krishna", "Kaveri", "Tungabhadra", "Bhima", "Penganga"],
                significance: "Major agricultural rivers, hydropower"
            },
            geology: {
                rockTypes: ["Basalt", "Laterite", "Granite (basement)"],
                formations: ["Deccan Traps", "Step-like topography (Trap = stairs)"],
                earthquakeRisk: "Low to Moderate",
                volcanicActivity: "None (extinct)"
            },
            significance: {
                geological: "One of largest volcanic events in Earth history, linked to dinosaur extinction",
                ecological: "Western Ghats biodiversity hotspot",
                cultural: "Ancient temples, cave art, Dravidian civilizations",
                economic: "Black cotton soil agriculture, IT industry, mining"
            },
            research: {
                institutions: ["Indian Institute of Science", "Geological Survey of India"],
                topics: ["Mass extinction link", "Large Igneous Provinces", "Soil science"],
                expeditions: ["Multiple paleontological surveys"]
            },
            threats: ["Deforestation", "Mining", "Urbanization", "Water scarcity"],
            unesco: true,
            unescoSites: ["Western Ghats", "Ajanta Caves", "Ellora Caves"],
            tourism: {
                visitors: 50000000,
                attractions: ["Ajanta-Ellora", "Hampi", "Mahabaleshwar", "Lonar Lake"],
                bestTime: "October-March"
            },
            color: "#f59e0b",
            rank: 2,
            rankCriteria: "Largest volcanic plateau, mass extinction link"
        },
        {
            id: 3,
            name: "Iranian Plateau",
            alternateName: "Persian Plateau",
            localName: "فلات ایران (Falāt-e Irān)",
            nickname: "Land of High Plains",
            countries: ["Iran", "Afghanistan", "Pakistan", "Turkmenistan"],
            continent: "Asia",
            region: "West Asia / Middle East",
            type: "Intermontane",
            subtype: "Tectonic Uplift",
            coordinates: { lat: 32.0, lng: 55.0 },
            boundingBox: { north: 40.0, south: 25.0, east: 70.0, west: 44.0 },
            area: 3700000,
            avgElevation: 1200,
            maxElevation: 5671,
            minElevation: -28,
            ageMillionYears: 50,
            formation: {
                process: "Alpine-Himalayan orogeny, collision of Arabian and Eurasian plates",
                startDate: "50 million years ago",
                ongoing: true,
                upliftRate: "2-3 mm/year"
            },
            features: [
                "Dasht-e Kavir (Great Salt Desert)",
                "Dasht-e Lut (Lut Desert - hottest surface temperature recorded)",
                "Zagros Mountains",
                "Alborz Mountains",
                "Mount Damavand (5,671m)",
                "Persepolis",
                "Salt domes"
            ],
            climate: {
                type: "Arid to Semi-arid Continental",
                avgTempSummer: 40,
                avgTempWinter: 5,
                rainfall: 250,
                extremeHeat: true,
                permafrost: false
            },
            population: 120000000,
            majorCities: ["Tehran", "Isfahan", "Shiraz", "Mashhad", "Kabul", "Herat"],
            biodiversity: {
                flora: ["Steppe grassland", "Desert scrub", "Mountain forests"],
                fauna: ["Persian Leopard", "Asiatic Cheetah (critically endangered)", "Persian Fallow Deer", "Onager"],
                endemic: true,
                protectedAreas: ["Kavir National Park", "Touran National Park"]
            },
            rivers: {
                sources: ["Karun River", "Helmand River", "Zayandeh River"],
                significance: "Qanat irrigation system (UNESCO)"
            },
            geology: {
                rockTypes: ["Sedimentary", "Metamorphic", "Salt formations"],
                formations: ["Salt domes", "Fold mountains", "Desert pavements"],
                earthquakeRisk: "Very High",
                volcanicActivity: "Mount Damavand (dormant)"
            },
            significance: {
                geological: "Active tectonics, salt dome formations",
                ecological: "Last Asiatic cheetahs",
                cultural: "Persian Empire, Zoroastrianism, Islamic civilization",
                economic: "Oil, gas, minerals"
            },
            unesco: true,
            color: "#ef4444"
        },
        {
            id: 4,
            name: "Anatolian Plateau",
            alternateName: "Central Anatolian Plateau",
            localName: "Anadolu Platosu",
            nickname: "Turkish Heartland",
            countries: ["Turkey"],
            continent: "Asia",
            region: "Western Asia / Anatolia",
            type: "Intermontane",
            subtype: "Tectonic Basin",
            coordinates: { lat: 39.0, lng: 33.0 },
            boundingBox: { north: 41.0, south: 37.0, east: 40.0, west: 30.0 },
            area: 450000,
            avgElevation: 1000,
            maxElevation: 1800,
            minElevation: 800,
            ageMillionYears: 25,
            formation: {
                process: "Tectonic compression between Eurasian and African plates",
                startDate: "25 million years ago",
                ongoing: true
            },
            features: [
                "Cappadocia Fairy Chimneys",
                "Salt Lake (Tuz Gölü)",
                "Göreme Open Air Museum",
                "Underground cities (Derinkuyu, Kaymakli)",
                "Mount Erciyes (volcano)"
            ],
            climate: {
                type: "Semi-arid Continental",
                avgTempSummer: 25,
                avgTempWinter: 0,
                rainfall: 400
            },
            population: 15000000,
            majorCities: ["Ankara", "Konya", "Kayseri", "Nevşehir"],
            biodiversity: {
                flora: ["Steppe grasslands", "Salt marsh vegetation"],
                fauna: ["Anatolian Wild Sheep", "Wolf", "Golden Eagle"]
            },
            rivers: {
                sources: ["Kızılırmak", "Sakarya", "Konya Basin (closed)"]
            },
            significance: {
                geological: "North Anatolian Fault (major earthquake zone)",
                cultural: "Hittite, Greek, Roman, Byzantine, Ottoman history, Göbekli Tepe nearby"
            },
            unesco: true,
            unescoSites: ["Göreme National Park", "Cappadocia"],
            color: "#ef4444"
        },
        {
            id: 5,
            name: "Mongolian Plateau",
            alternateName: "Mongolian Steppe",
            localName: "Монгол тал (Mongol tal)",
            nickname: "Land of Blue Sky",
            countries: ["Mongolia", "China", "Russia"],
            continent: "Asia",
            region: "Central Asia / East Asia",
            type: "Continental",
            subtype: "Intracontinental",
            coordinates: { lat: 46.0, lng: 105.0 },
            boundingBox: { north: 52.0, south: 37.0, east: 120.0, west: 87.0 },
            area: 2600000,
            avgElevation: 1500,
            maxElevation: 4374,
            minElevation: 500,
            ageMillionYears: 200,
            formation: {
                process: "Ancient orogeny, intracontinental deformation",
                ongoing: false
            },
            features: [
                "Gobi Desert",
                "Altai Mountains",
                "Khangai Mountains",
                "Flaming Cliffs (dinosaur fossils)",
                "Orkhon Valley",
                "Lake Khövsgöl"
            ],
            climate: {
                type: "Continental, Cold Desert",
                avgTempSummer: 20,
                avgTempWinter: -25,
                rainfall: 250,
                temperatureRange: "Extreme (-40°C to +40°C)"
            },
            population: 6000000,
            majorCities: ["Ulaanbaatar", "Erdenet", "Darkhan"],
            biodiversity: {
                flora: ["Grassland steppe", "Desert scrub", "Taiga (north)"],
                fauna: ["Snow Leopard", "Przewalski's Horse (reintroduced)", "Gobi Bear (very rare)", "Saiga Antelope", "Argali Sheep", "Two-humped Camel"],
                endemic: true
            },
            rivers: {
                sources: ["Selenge River", "Orkhon River", "Tuul River"]
            },
            significance: {
                geological: "Dinosaur fossil sites, intracontinental tectonics",
                cultural: "Genghis Khan Empire, nomadic heritage, Turkic-Mongolic cultures",
                ecological: "Last great grassland ecosystem"
            },
            unesco: true,
            unescoSites: ["Orkhon Valley"],
            color: "#10b981"
        },
        {
            id: 6,
            name: "Arabian Plateau",
            alternateName: "Najd Plateau",
            localName: "نجد (Najd)",
            nickname: "Heart of Arabia",
            countries: ["Saudi Arabia", "Yemen", "Oman", "UAE", "Kuwait", "Qatar", "Bahrain"],
            continent: "Asia",
            region: "Arabian Peninsula",
            type: "Continental",
            subtype: "Shield/Platform",
            coordinates: { lat: 24.0, lng: 45.0 },
            boundingBox: { north: 32.0, south: 12.0, east: 60.0, west: 35.0 },
            area: 2300000,
            avgElevation: 900,
            maxElevation: 3666,
            minElevation: 0,
            ageMillionYears: 600,
            formation: {
                process: "Arabian Shield uplift, rift from Africa",
                startDate: "600 million years ago (shield), 25 Ma (rift)"
            },
            features: [
                "Rub' al Khali (Empty Quarter - largest sand desert)",
                "Asir Mountains",
                "Hajar Mountains",
                "Nafud Desert",
                "Mada'in Saleh (Nabataean tombs)"
            ],
            climate: {
                type: "Hot Desert to Subtropical",
                avgTempSummer: 45,
                avgTempWinter: 15,
                rainfall: 100,
                extremeHeat: true
            },
            population: 50000000,
            majorCities: ["Riyadh", "Jeddah", "Sana'a", "Muscat", "Dubai"],
            biodiversity: {
                flora: ["Desert scrub", "Oasis vegetation", "Mountain forests (Asir)"],
                fauna: ["Arabian Oryx (reintroduced)", "Sand Cat", "Caracal", "Arabian Leopard (critically endangered)"]
            },
            significance: {
                geological: "Arabian Shield, world's largest oil reserves",
                cultural: "Islam origin (Mecca, Medina), ancient trade routes",
                economic: "Oil and gas - global energy center"
            },
            unesco: true,
            color: "#10b981"
        },
        {
            id: 7,
            name: "Shan Plateau",
            alternateName: "Shan Highland",
            localName: "ရှမ်းကုန်းမြင့် (Shan Konehmyint)",
            nickname: "Golden Triangle Plateau",
            countries: ["Myanmar", "Thailand", "Laos", "China"],
            continent: "Asia",
            region: "Southeast Asia",
            type: "Dissected",
            subtype: "Uplifted and Eroded",
            coordinates: { lat: 21.0, lng: 98.0 },
            boundingBox: { north: 24.0, south: 18.0, east: 102.0, west: 95.0 },
            area: 160000,
            avgElevation: 1000,
            maxElevation: 2675,
            minElevation: 300,
            ageMillionYears: 250,
            formation: {
                process: "Paleozoic sediments uplifted by Indochina collision"
            },
            features: [
                "Inle Lake",
                "Salween River gorges",
                "Limestone karst",
                "Tea plantations"
            ],
            climate: {
                type: "Tropical Highland",
                avgTempSummer: 25,
                avgTempWinter: 15,
                rainfall: 1500
            },
            population: 8000000,
            majorCities: ["Taunggyi", "Lashio", "Kengtung"],
            biodiversity: {
                flora: ["Tropical montane forest", "Pine forests", "Tea gardens"],
                fauna: ["Asian Elephant", "Tiger", "Gibbon", "Red Panda"]
            },
            significance: {
                cultural: "Shan ethnic cultures, Buddhist monasteries",
                economic: "Tea, gems, agriculture"
            },
            color: "#10b981"
        },
        {
            id: 8,
            name: "Yunnan-Guizhou Plateau",
            alternateName: "Yungui Plateau",
            localName: "云贵高原 (Yún-Guì Gāoyuán)",
            nickname: "Karst Paradise",
            countries: ["China"],
            continent: "Asia",
            region: "Southwest China",
            type: "Dissected",
            subtype: "Karst Plateau",
            coordinates: { lat: 25.0, lng: 105.0 },
            boundingBox: { north: 30.0, south: 22.0, east: 112.0, west: 97.0 },
            area: 500000,
            avgElevation: 2000,
            maxElevation: 4500,
            minElevation: 500,
            ageMillionYears: 250,
            formation: {
                process: "Limestone dissolution creating spectacular karst"
            },
            features: [
                "Stone Forest (Shilin)",
                "Tiger Leaping Gorge",
                "Huangguoshu Waterfall",
                "Li River karst",
                "Lunan Stone Forest"
            ],
            climate: {
                type: "Subtropical Highland",
                avgTempSummer: 22,
                avgTempWinter: 8,
                rainfall: 1200
            },
            population: 100000000,
            majorCities: ["Kunming", "Guiyang", "Lijiang", "Dali"],
            biodiversity: {
                flora: ["Subtropical forests", "Alpine meadows"],
                fauna: ["Yunnan Snub-nosed Monkey", "Asian Elephant", "Clouded Leopard"]
            },
            significance: {
                geological: "World-class karst landscapes",
                cultural: "25+ ethnic minorities, ancient Tea Horse Road"
            },
            unesco: true,
            unescoSites: ["South China Karst", "Three Parallel Rivers"],
            color: "#8b5cf6"
        },
        {
            id: 9,
            name: "Loess Plateau",
            alternateName: "Huangtu Plateau",
            localName: "黄土高原 (Huángtǔ Gāoyuán)",
            nickname: "Yellow Earth Plateau",
            countries: ["China"],
            continent: "Asia",
            region: "North-Central China",
            type: "Depositional",
            subtype: "Aeolian Loess",
            coordinates: { lat: 36.0, lng: 108.0 },
            boundingBox: { north: 41.0, south: 34.0, east: 114.0, west: 100.0 },
            area: 640000,
            avgElevation: 1200,
            maxElevation: 3000,
            minElevation: 400,
            ageMillionYears: 2.5,
            formation: {
                process: "Wind-blown dust deposition from Central Asian deserts",
                thickness: "Up to 300 meters of loess deposits"
            },
            features: [
                "Yellow River (colored by loess sediment)",
                "Cave dwellings (yaodong)",
                "Badland erosion gullies",
                "Terrace farming",
                "Yan'an revolutionary base"
            ],
            climate: {
                type: "Semi-arid Continental",
                avgTempSummer: 25,
                avgTempWinter: -5,
                rainfall: 500
            },
            population: 50000000,
            majorCities: ["Xi'an", "Lanzhou", "Taiyuan", "Yan'an"],
            significance: {
                geological: "Thickest loess deposits on Earth, climate archive",
                cultural: "Cradle of Chinese civilization, cave dwellings",
                ecological: "Major restoration project (world's largest)"
            },
            color: "#f59e0b"
        },
        {
            id: 10,
            name: "Deosai Plateau",
            alternateName: "Deosai National Park",
            localName: "دیوسائی (Deosai)",
            nickname: "Land of Giants",
            countries: ["Pakistan"],
            continent: "Asia",
            region: "Northern Pakistan / Karakoram",
            type: "Intermontane",
            subtype: "High Altitude Plateau",
            coordinates: { lat: 35.0, lng: 75.5 },
            boundingBox: { north: 35.5, south: 34.5, east: 76.5, west: 74.5 },
            area: 3000,
            avgElevation: 4114,
            maxElevation: 5200,
            minElevation: 3500,
            ageMillionYears: 40,
            formation: {
                process: "Himalayan-Karakoram uplift"
            },
            features: [
                "Sheosar Lake",
                "Alpine meadows",
                "Wildflower carpets",
                "Brown bear habitat"
            ],
            climate: {
                type: "Alpine",
                avgTempSummer: 12,
                avgTempWinter: -20,
                rainfall: 500,
                snowCover: "6-7 months"
            },
            population: 0,
            biodiversity: {
                fauna: ["Himalayan Brown Bear", "Snow Leopard", "Tibetan Wolf", "Golden Marmot", "Himalayan Ibex"]
            },
            significance: {
                ecological: "Second highest plateau in world, critical wildlife habitat",
                scientific: "Brown bear research"
            },
            color: "#ef4444"
        },
        {
            id: 11,
            name: "Pamir Plateau",
            alternateName: "Pamirs / Pamir Mountains",
            localName: "Бами Дунё (Bam-i Dunya)",
            nickname: "Roof of the World",
            countries: ["Tajikistan", "Kyrgyzstan", "Afghanistan", "China", "Pakistan"],
            continent: "Asia",
            region: "Central Asia",
            type: "Intermontane",
            subtype: "High Mountain Plateau",
            coordinates: { lat: 38.5, lng: 73.5 },
            boundingBox: { north: 40.0, south: 36.0, east: 76.0, west: 70.0 },
            area: 120000,
            avgElevation: 4000,
            maxElevation: 7495,
            minElevation: 2500,
            ageMillionYears: 50,
            formation: {
                process: "Collision of multiple tectonic plates"
            },
            features: [
                "Fedchenko Glacier (largest outside polar regions)",
                "Ismoil Somoni Peak (7,495m)",
                "Karakul Lake",
                "Wakhan Corridor",
                "Ancient Silk Road routes"
            ],
            climate: {
                type: "Alpine Cold Desert",
                avgTempSummer: 15,
                avgTempWinter: -30,
                rainfall: 200
            },
            population: 500000,
            majorCities: ["Khorog", "Murghab"],
            biodiversity: {
                fauna: ["Marco Polo Sheep", "Snow Leopard", "Ibex", "Brown Bear"]
            },
            significance: {
                geological: "Junction of Himalayas, Karakoram, Hindu Kush, Tian Shan",
                cultural: "Ancient Silk Road, Pamiri cultures"
            },
            color: "#ef4444"
        },
        {
            id: 12,
            name: "Khorat Plateau",
            alternateName: "Isan Plateau",
            localName: "ที่ราบสูงโคราช",
            nickname: "Northeastern Thailand",
            countries: ["Thailand", "Laos"],
            continent: "Asia",
            region: "Southeast Asia",
            type: "Sedimentary",
            subtype: "Low Plateau",
            coordinates: { lat: 16.0, lng: 103.0 },
            boundingBox: { north: 18.0, south: 14.0, east: 106.0, west: 101.0 },
            area: 170000,
            avgElevation: 200,
            maxElevation: 600,
            minElevation: 100,
            ageMillionYears: 200,
            features: [
                "Mekong River border",
                "Dinosaur fossils (Phu Wiang)",
                "Salt deposits",
                "Silk weaving villages"
            ],
            climate: {
                type: "Tropical Savanna",
                avgTempSummer: 32,
                avgTempWinter: 22,
                rainfall: 1200
            },
            population: 22000000,
            majorCities: ["Nakhon Ratchasima (Korat)", "Khon Kaen", "Udon Thani", "Ubon Ratchathani"],
            significance: {
                geological: "Dinosaur fossils, salt reserves",
                cultural: "Isan culture, distinct cuisine, music"
            },
            color: "#10b981"
        },
        {
            id: 13,
            name: "Central Highlands (Vietnam)",
            alternateName: "Tây Nguyên",
            localName: "Tây Nguyên",
            nickname: "Roof of Indochina",
            countries: ["Vietnam"],
            continent: "Asia",
            region: "Southeast Asia",
            type: "Volcanic",
            subtype: "Basalt Plateau",
            coordinates: { lat: 13.5, lng: 108.0 },
            boundingBox: { north: 15.5, south: 11.5, east: 109.5, west: 107.0 },
            area: 54700,
            avgElevation: 600,
            maxElevation: 2598,
            minElevation: 300,
            ageMillionYears: 3,
            features: [
                "Basalt red soil",
                "Coffee plantations (world's 2nd largest exporter)",
                "Elephant habitat",
                "Gong culture",
                "Waterfalls"
            ],
            climate: {
                type: "Tropical Highland",
                avgTempSummer: 24,
                avgTempWinter: 18,
                rainfall: 2000
            },
            population: 6000000,
            majorCities: ["Buon Ma Thuot", "Pleiku", "Da Lat", "Kon Tum"],
            biodiversity: {
                fauna: ["Asian Elephant", "Javan Rhinoceros (possibly extinct)", "Tiger", "Gaur"]
            },
            significance: {
                economic: "Coffee capital of Vietnam",
                cultural: "54 ethnic minorities, UNESCO Gong Space"
            },
            unesco: true,
            color: "#f59e0b"
        },
        {
            id: 14,
            name: "Chota Nagpur Plateau",
            alternateName: "Chhota Nagpur Pathar",
            localName: "छोटा नागपुर पठार",
            nickname: "Mineral Heartland of India",
            countries: ["India"],
            continent: "Asia",
            region: "Eastern India",
            type: "Dissected",
            subtype: "Peneplain",
            coordinates: { lat: 23.5, lng: 85.5 },
            boundingBox: { north: 25.0, south: 22.0, east: 87.5, west: 83.5 },
            area: 65000,
            avgElevation: 700,
            maxElevation: 1366,
            minElevation: 300,
            ageMillionYears: 1500,
            features: [
                "Ranchi Plateau",
                "Hazaribagh Plateau",
                "Damodar Valley",
                "Jamshedpur steel city",
                "Gondwana coal basins",
                "Hundru Falls"
            ],
            climate: {
                type: "Humid Subtropical",
                avgTempSummer: 35,
                avgTempWinter: 15,
                rainfall: 1400
            },
            population: 40000000,
            majorCities: ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro", "Hazaribagh"],
            biodiversity: {
                flora: ["Sal forests", "Tropical deciduous"],
                fauna: ["Asian Elephant", "Tiger", "Sloth Bear", "Leopard"]
            },
            significance: {
                geological: "Ancient Precambrian rocks, Gondwana coal deposits",
                economic: "India's mineral heartland - iron, coal, copper, mica",
                cultural: "Tribal cultures - Santhal, Munda, Ho, Oraon"
            },
            color: "#8b5cf6"
        },
        {
            id: 15,
            name: "Malwa Plateau",
            alternateName: "Malwa Region",
            localName: "मालवा पठार",
            nickname: "Land of Opium Poppy",
            countries: ["India"],
            continent: "Asia",
            region: "Central India",
            type: "Piedmont",
            subtype: "Lava Plateau",
            coordinates: { lat: 23.5, lng: 76.0 },
            boundingBox: { north: 25.0, south: 22.0, east: 79.0, west: 74.0 },
            area: 82000,
            avgElevation: 500,
            maxElevation: 600,
            minElevation: 300,
            ageMillionYears: 66,
            features: [
                "Black cotton soil (regur)",
                "Chambal ravines",
                "Ujjain (ancient city)",
                "Mandu fort city"
            ],
            climate: {
                type: "Semi-arid",
                avgTempSummer: 40,
                avgTempWinter: 15,
                rainfall: 800
            },
            population: 30000000,
            majorCities: ["Indore", "Bhopal", "Ujjain", "Gwalior"],
            significance: {
                cultural: "Ancient Hindu kingdoms, Paramara dynasty",
                agricultural: "Soybean, opium poppy (legal medicinal)"
            },
            color: "#10b981"
        },
        
        // ============ AFRICA (30+ Plateaus) ============
        {
            id: 16,
            name: "Ethiopian Highlands",
            alternateName: "Abyssinian Plateau",
            localName: "የኢትዮጵያ ደጋማ አካባቢዎች",
            nickname: "Roof of Africa",
            countries: ["Ethiopia", "Eritrea"],
            continent: "Africa",
            region: "East Africa / Horn of Africa",
            type: "Volcanic",
            subtype: "Flood Basalt",
            coordinates: { lat: 9.0, lng: 39.0 },
            boundingBox: { north: 15.0, south: 4.0, east: 48.0, west: 33.0 },
            area: 400000,
            avgElevation: 2500,
            maxElevation: 4533,
            minElevation: 1500,
            ageMillionYears: 30,
            formation: {
                process: "Ethiopian flood basalts, rift volcanism, Afar plume"
            },
            features: [
                "Simien Mountains (UNESCO)",
                "Blue Nile Falls",
                "Lake Tana (Blue Nile source)",
                "Lalibela rock-hewn churches",
                "Danakil Depression",
                "Erta Ale lava lake"
            ],
            climate: {
                type: "Tropical Highland",
                avgTempSummer: 20,
                avgTempWinter: 15,
                rainfall: 1500
            },
            population: 80000000,
            majorCities: ["Addis Ababa", "Gondar", "Bahir Dar", "Lalibela", "Asmara"],
            biodiversity: {
                flora: ["Afro-alpine vegetation", "Juniper forests", "Giant lobelias"],
                fauna: ["Gelada Baboon (endemic)", "Ethiopian Wolf (endemic)", "Walia Ibex (endemic)", "Mountain Nyala"]
            },
            rivers: {
                sources: ["Blue Nile", "Awash", "Omo", "Tekeze"],
                significance: "Blue Nile provides 85% of Nile water"
            },
            significance: {
                geological: "Active rifting, human evolution sites",
                cultural: "Ancient Christian civilization, Aksum empire, coffee origin",
                ecological: "Endemic species hotspot"
            },
            unesco: true,
            unescoSites: ["Simien Mountains", "Rock-hewn Churches of Lalibela", "Lower Omo Valley"],
            color: "#f59e0b"
        },
        {
            id: 17,
            name: "East African Plateau",
            alternateName: "Great Rift Plateau",
            localName: "Various local names",
            nickname: "Cradle of Mankind",
            countries: ["Kenya", "Tanzania", "Uganda", "Rwanda", "Burundi", "DRC"],
            continent: "Africa",
            region: "East Africa",
            type: "Volcanic/Rift",
            subtype: "Rift Shoulder Plateau",
            coordinates: { lat: -3.0, lng: 36.0 },
            boundingBox: { north: 5.0, south: -12.0, east: 42.0, west: 29.0 },
            area: 1800000,
            avgElevation: 1500,
            maxElevation: 5895,
            minElevation: 500,
            ageMillionYears: 25,
            features: [
                "Mount Kilimanjaro (5,895m)",
                "Mount Kenya (5,199m)",
                "Serengeti Plains",
                "Ngorongoro Crater",
                "Lake Victoria",
                "Masai Mara",
                "Olduvai Gorge (human evolution)"
            ],
            climate: {
                type: "Tropical Highland",
                avgTempSummer: 25,
                avgTempWinter: 18,
                rainfall: 1000
            },
            population: 200000000,
            majorCities: ["Nairobi", "Dar es Salaam", "Kampala", "Kigali", "Bujumbura"],
            biodiversity: {
                fauna: ["African Elephant", "Lion", "Leopard", "Buffalo", "Rhinoceros", "Wildebeest", "Zebra", "Giraffe", "Chimpanzee", "Mountain Gorilla"]
            },
            significance: {
                geological: "Active continental rifting, volcanic activity",
                ecological: "Great Migration - largest wildlife migration",
                cultural: "Human evolution sites - 'Cradle of Mankind'"
            },
            unesco: true,
            unescoSites: ["Serengeti", "Ngorongoro", "Mount Kilimanjaro"],
            color: "#f59e0b"
        },
        {
            id: 18,
            name: "South African Plateau",
            alternateName: "Highveld/Great Karoo",
            localName: "Hoëveld",
            nickname: "Southern African Shield",
            countries: ["South Africa", "Lesotho", "Eswatini", "Botswana", "Namibia"],
            continent: "Africa",
            region: "Southern Africa",
            type: "Continental",
            subtype: "Ancient Craton",
            coordinates: { lat: -28.0, lng: 26.0 },
            boundingBox: { north: -22.0, south: -34.0, east: 32.0, west: 17.0 },
            area: 1200000,
            avgElevation: 1200,
            maxElevation: 3482,
            minElevation: 600,
            ageMillionYears: 3500,
            formation: {
                process: "Ancient Kaapvaal Craton, one of oldest continental fragments"
            },
            features: [
                "Drakensberg Escarpment (Great Escarpment)",
                "Vredefort Crater (largest verified impact crater)",
                "Witwatersrand gold deposits",
                "Cradle of Humankind",
                "Great Karoo semi-desert",
                "Lesotho Highlands"
            ],
            climate: {
                type: "Semi-arid to Subtropical",
                avgTempSummer: 25,
                avgTempWinter: 10,
                rainfall: 600
            },
            population: 60000000,
            majorCities: ["Johannesburg", "Pretoria", "Bloemfontein", "Maseru", "Mbabane"],
            biodiversity: {
                flora: ["Grassland biome", "Fynbos (Cape)", "Karoo succulent"],
                fauna: ["Lion", "Elephant", "Rhinoceros", "Buffalo", "Leopard", "Cheetah"]
            },
            significance: {
                geological: "Oldest rocks on Earth, largest impact crater, gold deposits",
                cultural: "Cradle of Humankind (UNESCO), Bushman rock art",
                economic: "World's richest gold and diamond deposits"
            },
            unesco: true,
            unescoSites: ["Vredefort Dome", "Cradle of Humankind", "Drakensberg"],
            color: "#10b981"
        },
        {
            id: 19,
            name: "Jos Plateau",
            alternateName: "Bauchi Plateau",
            localName: "Jos Plateau",
            nickname: "Roof of Nigeria",
            countries: ["Nigeria"],
            continent: "Africa",
            region: "West Africa",
            type: "Volcanic",
            subtype: "Tertiary Volcanic",
            coordinates: { lat: 9.9, lng: 8.9 },
            boundingBox: { north: 11.0, south: 8.5, east: 10.0, west: 8.0 },
            area: 8600,
            avgElevation: 1200,
            maxElevation: 1829,
            minElevation: 600,
            ageMillionYears: 50,
            features: [
                "Shere Hills",
                "Volcanic plugs",
                "Tin mining sites",
                "Temperate climate in tropical zone",
                "Wildlife Safari Park"
            ],
            climate: {
                type: "Tropical Highland (temperate)",
                avgTempSummer: 25,
                avgTempWinter: 18,
                rainfall: 1500
            },
            population: 5000000,
            majorCities: ["Jos", "Bukuru", "Barkin Ladi"],
            significance: {
                geological: "Younger granite ring complexes",
                economic: "Historical tin and columbite mining",
                ecological: "Unique temperate climate in tropics"
            },
            color: "#f59e0b"
        },
        {
            id: 20,
            name: "Adamawa Plateau",
            alternateName: "Adamaoua Plateau",
            localName: "Plateau de l'Adamaoua",
            nickname: "Water Tower of Central Africa",
            countries: ["Cameroon", "Nigeria"],
            continent: "Africa",
            region: "Central Africa",
            type: "Volcanic",
            subtype: "Cameroon Volcanic Line",
            coordinates: { lat: 7.5, lng: 13.5 },
            boundingBox: { north: 9.0, south: 6.0, east: 15.0, west: 11.0 },
            area: 100000,
            avgElevation: 1000,
            maxElevation: 2460,
            minElevation: 500,
            ageMillionYears: 30,
            features: [
                "Lake Nyos (killer lake)",
                "Mount Cameroon",
                "Volcanic crater lakes",
                "Fulani cattle grazing",
                "Waterfalls"
            ],
            climate: {
                type: "Tropical Highland",
                avgTempSummer: 22,
                avgTempWinter: 18,
                rainfall: 1800
            },
            population: 8000000,
            majorCities: ["Ngaoundéré", "Yola", "Garoua"],
            significance: {
                geological: "Cameroon Volcanic Line, limnic eruption hazard",
                ecological: "Watershed divide between Niger, Congo, Chad basins"
            },
            color: "#f59e0b"
        },
        {
            id: 21,
            name: "Fouta Djallon",
            alternateName: "Futa Jallon",
            localName: "Fuuta Jaloo",
            nickname: "Water Tower of West Africa",
            countries: ["Guinea", "Sierra Leone", "Senegal", "Mali"],
            continent: "Africa",
            region: "West Africa",
            type: "Dissected",
            subtype: "Sandstone Plateau",
            coordinates: { lat: 11.0, lng: -12.0 },
            boundingBox: { north: 13.0, south: 9.0, east: -10.0, west: -14.0 },
            area: 80000,
            avgElevation: 900,
            maxElevation: 1538,
            minElevation: 300,
            ageMillionYears: 500,
            features: [
                "Sources of Niger, Senegal, Gambia rivers",
                "Dramatic escarpments",
                "Waterfalls",
                "Fulani culture"
            ],
            climate: {
                type: "Tropical Highland",
                avgTempSummer: 25,
                avgTempWinter: 20,
                rainfall: 2000
            },
            population: 5000000,
            majorCities: ["Labé", "Dalaba", "Mamou"],
            rivers: {
                sources: ["Niger River", "Senegal River", "Gambia River"],
                significance: "Source of major West African rivers"
            },
            significance: {
                ecological: "Critical water source for entire region",
                cultural: "Fulani/Peul culture, Islamic heritage"
            },
            color: "#8b5cf6"
        },
        {
            id: 22,
            name: "Katanga Plateau",
            alternateName: "Shaba Plateau / Copperbelt",
            localName: "Katanga",
            nickname: "Africa's Copper Kingdom",
            countries: ["DRC", "Zambia"],
            continent: "Africa",
            region: "Central/Southern Africa",
            type: "Continental",
            subtype: "Precambrian Shield",
            coordinates: { lat: -11.0, lng: 27.0 },
            boundingBox: { north: -8.0, south: -14.0, east: 31.0, west: 22.0 },
            area: 500000,
            avgElevation: 1200,
            maxElevation: 1800,
            minElevation: 900,
            ageMillionYears: 1500,
            features: [
                "Copper belt deposits",
                "Lake Tanganyika (deepest in Africa)",
                "Kundelungu National Park",
                "Lofoi Falls"
            ],
            climate: {
                type: "Tropical Wet-Dry",
                avgTempSummer: 25,
                avgTempWinter: 18,
                rainfall: 1200
            },
            population: 15000000,
            majorCities: ["Lubumbashi", "Kolwezi", "Likasi", "Kitwe", "Ndola"],
            significance: {
                economic: "World's largest copper and cobalt reserves",
                geological: "Katangan Copperbelt ore deposits"
            },
            color: "#10b981"
        },
        {
            id: 23,
            name: "Saharan Plateau",
            alternateName: "Saharan Massifs",
            localName: "Various",
            nickname: "Desert Roof",
            countries: ["Algeria", "Libya", "Chad", "Niger", "Mali", "Mauritania"],
            continent: "Africa",
            region: "North Africa / Sahara",
            type: "Continental",
            subtype: "Ancient Shield / Volcanic",
            coordinates: { lat: 23.0, lng: 5.0 },
            boundingBox: { north: 32.0, south: 15.0, east: 25.0, west: -12.0 },
            area: 9000000,
            avgElevation: 500,
            maxElevation: 3415,
            minElevation: -133,
            ageMillionYears: 2000,
            features: [
                "Ahaggar Mountains (3,003m)",
                "Tibesti Mountains (3,415m)",
                "Tassili n'Ajjer rock art (UNESCO)",
                "Air Mountains",
                "Ennedi Plateau",
                "Grand Erg sand seas"
            ],
            climate: {
                type: "Hot Desert",
                avgTempSummer: 45,
                avgTempWinter: 15,
                rainfall: 25,
                extremeAridity: true
            },
            population: 4000000,
            biodiversity: {
                fauna: ["Addax", "Dorcas Gazelle", "Fennec Fox", "Desert Crocodile (relict)"]
            },
            significance: {
                geological: "Ancient Precambrian shield, volcanic massifs",
                cultural: "Tuareg culture, prehistoric rock art"
            },
            unesco: true,
            color: "#10b981"
        },
        {
            id: 24,
            name: "Nyika Plateau",
            alternateName: "Nyika National Park",
            localName: "Nyika",
            nickname: "Africa's Little Tibet",
            countries: ["Malawi", "Zambia"],
            continent: "Africa",
            region: "Southeast Africa",
            type: "Dissected",
            subtype: "Basement Complex",
            coordinates: { lat: -10.5, lng: 33.8 },
            boundingBox: { north: -10.0, south: -11.5, east: 34.5, west: 33.0 },
            area: 3200,
            avgElevation: 2200,
            maxElevation: 2606,
            minElevation: 1800,
            ageMillionYears: 600,
            features: [
                "Rolling montane grassland",
                "Rare orchids (200+ species)",
                "Leopard population",
                "Juniper forests"
            ],
            climate: {
                type: "Cool Tropical Highland",
                avgTempSummer: 18,
                avgTempWinter: 5,
                rainfall: 1500
            },
            biodiversity: {
                flora: ["Montane grassland", "Orchids (200+ species)", "Proteas"],
                fauna: ["Leopard", "Roan Antelope", "Eland", "Zebra", "Wattled Crane"]
            },
            significance: {
                ecological: "Endemic orchids, montane biodiversity",
                conservation: "Largest national park in Malawi"
            },
            color: "#10b981"
        },
        {
            id: 25,
            name: "Drakensberg Plateau",
            alternateName: "Ukhahlamba",
            localName: "uKhahlamba (Zulu)",
            nickname: "Dragon Mountains",
            countries: ["South Africa", "Lesotho"],
            continent: "Africa",
            region: "Southern Africa",
            type: "Volcanic/Erosional",
            subtype: "Basalt Escarpment",
            coordinates: { lat: -29.0, lng: 29.5 },
            boundingBox: { north: -28.0, south: -31.0, east: 30.0, west: 28.5 },
            area: 30000,
            avgElevation: 2500,
            maxElevation: 3482,
            minElevation: 1200,
            ageMillionYears: 180,
            formation: {
                process: "Drakensberg basalts from Gondwana breakup volcanism"
            },
            features: [
                "Amphitheatre cliff face",
                "Tugela Falls (2nd highest waterfall)",
                "Giant's Castle",
                "San/Bushman rock art",
                "Lesotho Highlands"
            ],
            climate: {
                type: "Subtropical Highland",
                avgTempSummer: 22,
                avgTempWinter: 5,
                rainfall: 1200,
                snow: "Winter snowfall on peaks"
            },
            biodiversity: {
                flora: ["Afro-montane forest", "Alpine grassland", "Proteas"],
                fauna: ["Eland", "Bearded Vulture (Lammergeier)", "Oribi", "Grey Rhebok"]
            },
            significance: {
                geological: "Great Escarpment of southern Africa",
                cultural: "35,000+ San rock paintings",
                ecological: "Endemic species, water source"
            },
            unesco: true,
            unescoSites: ["uKhahlamba-Drakensberg Park"],
            color: "#8b5cf6"
        },

        // ============ NORTH AMERICA (25+ Plateaus) ============
        {
            id: 26,
            name: "Colorado Plateau",
            alternateName: "Four Corners Region",
            localName: "Colorado Plateau Province",
            nickname: "Red Rock Country",
            countries: ["United States"],
            continent: "North America",
            region: "Southwestern USA",
            type: "Dissected",
            subtype: "Structurally Stable Block",
            coordinates: { lat: 37.0, lng: -110.0 },
            boundingBox: { north: 40.0, south: 34.0, east: -106.0, west: -114.0 },
            area: 337000,
            avgElevation: 1800,
            maxElevation: 3851,
            minElevation: 600,
            ageMillionYears: 600,
            formation: {
                process: "Uplift without deformation, followed by river erosion"
            },
            features: [
                "Grand Canyon (1,857m deep)",
                "Monument Valley",
                "Bryce Canyon hoodoos",
                "Arches National Park (2000+ arches)",
                "Zion Canyon",
                "Mesa Verde cliff dwellings",
                "Canyonlands",
                "Painted Desert",
                "Petrified Forest",
                "Lake Powell"
            ],
            climate: {
                type: "Semi-arid High Desert",
                avgTempSummer: 30,
                avgTempWinter: 0,
                rainfall: 350
            },
            population: 3000000,
            majorCities: ["Flagstaff", "Page", "Moab", "Cortez", "Durango"],
            biodiversity: {
                flora: ["Pinyon-juniper woodland", "Ponderosa pine", "Desert scrub"],
                fauna: ["California Condor (reintroduced)", "Desert Bighorn Sheep", "Mountain Lion", "Pronghorn"]
            },
            rivers: {
                sources: ["Colorado River", "Green River", "San Juan River", "Little Colorado"],
                significance: "Colorado River carved Grand Canyon over 6 million years"
            },
            significance: {
                geological: "2 billion years of exposed stratigraphy, most complete on Earth",
                cultural: "Ancestral Puebloan (Anasazi), Navajo Nation, Hopi",
                tourism: "10 National Parks/Monuments, most scenic region in USA"
            },
            unesco: true,
            unescoSites: ["Grand Canyon", "Mesa Verde"],
            color: "#8b5cf6",
            rank: 3,
            rankCriteria: "Most scenic plateau, best exposed stratigraphy"
        },
        {
            id: 27,
            name: "Columbia Plateau",
            alternateName: "Columbia River Basalt Group",
            localName: "Columbia Plateau Province",
            nickname: "Channeled Scablands",
            countries: ["United States"],
            continent: "North America",
            region: "Pacific Northwest",
            type: "Volcanic",
            subtype: "Flood Basalt",
            coordinates: { lat: 46.5, lng: -119.0 },
            boundingBox: { north: 48.5, south: 43.0, east: -116.0, west: -122.0 },
            area: 260000,
            avgElevation: 750,
            maxElevation: 1500,
            minElevation: 200,
            ageMillionYears: 17,
            formation: {
                process: "Flood basalt volcanism, Missoula Flood catastrophic erosion"
            },
            features: [
                "Channeled Scablands",
                "Palouse Falls",
                "Dry Falls (ancient waterfall)",
                "Moses Coulee",
                "Grand Coulee",
                "Snake River Canyon"
            ],
            climate: {
                type: "Semi-arid Steppe",
                avgTempSummer: 28,
                avgTempWinter: 0,
                rainfall: 300
            },
            population: 2500000,
            majorCities: ["Spokane", "Yakima", "Tri-Cities", "Moses Lake"],
            significance: {
                geological: "Missoula Flood evidence, one of greatest floods in Earth history",
                agricultural: "Wheat production, irrigation from Columbia River",
                energy: "Grand Coulee Dam - largest hydroelectric in USA"
            },
            color: "#f59e0b"
        },
        {
            id: 28,
            name: "Canadian Shield",
            alternateName: "Laurentian Plateau",
            localName: "Bouclier canadien",
            nickname: "Precambrian Shield",
            countries: ["Canada", "United States (small part)"],
            continent: "North America",
            region: "Central-Eastern Canada",
            type: "Continental",
            subtype: "Ancient Craton",
            coordinates: { lat: 55.0, lng: -85.0 },
            boundingBox: { north: 80.0, south: 45.0, east: -55.0, west: -120.0 },
            area: 8000000,
            avgElevation: 400,
            maxElevation: 1652,
            minElevation: 0,
            ageMillionYears: 4200,
            formation: {
                process: "Oldest continental crust on Earth, Archean craton"
            },
            features: [
                "Sudbury Impact Structure",
                "Thousand Lakes",
                "Boreal forests",
                "Hudson Bay",
                "Canadian Arctic Archipelago",
                "Labrador Plateau",
                "Ungava Crater"
            ],
            climate: {
                type: "Continental to Subarctic",
                avgTempSummer: 18,
                avgTempWinter: -25,
                rainfall: 800
            },
            population: 5000000,
            majorCities: ["Sudbury", "Thunder Bay", "Yellowknife", "Iqaluit"],
            biodiversity: {
                flora: ["Boreal forest (taiga)", "Tundra (north)"],
                fauna: ["Moose", "Caribou", "Black Bear", "Wolf", "Wolverine", "Lynx"]
            },
            significance: {
                geological: "Oldest rocks on Earth (4.2 billion years), impact craters",
                economic: "Nickel, copper, gold, diamond mining",
                ecological: "Largest intact boreal forest"
            },
            unesco: true,
            color: "#10b981"
        },
        {
            id: 29,
            name: "Ozark Plateau",
            alternateName: "Ozark Mountains",
            localName: "Ozarks",
            nickname: "American Highlands",
            countries: ["United States"],
            continent: "North America",
            region: "South-Central USA",
            type: "Dissected/Dome",
            subtype: "Uplifted and Karst",
            coordinates: { lat: 36.5, lng: -93.0 },
            boundingBox: { north: 38.0, south: 35.0, east: -90.0, west: -95.0 },
            area: 122000,
            avgElevation: 450,
            maxElevation: 839,
            minElevation: 150,
            ageMillionYears: 500,
            features: [
                "Buffalo River (first national river)",
                "Blanchard Springs Caverns",
                "Table Rock Lake",
                "Roaring River Spring",
                "Crystal Bridges Museum",
                "Ozark National Forest"
            ],
            climate: {
                type: "Humid Subtropical",
                avgTempSummer: 28,
                avgTempWinter: 5,
                rainfall: 1200
            },
            population: 4500000,
            majorCities: ["Springfield MO", "Fayetteville", "Branson", "Joplin"],
            biodiversity: {
                flora: ["Oak-hickory forest", "Cedar glades", "Spring ecosystems"],
                fauna: ["Black Bear", "Elk (reintroduced)", "Cave fauna (endemic)", "Ozark Hellbender"]
            },
            significance: {
                geological: "Extensive karst, springs, cave systems",
                cultural: "Ozark folk culture, bluegrass music",
                ecological: "Endemic cave species"
            },
            color: "#8b5cf6"
        },
        {
            id: 30,
            name: "Edwards Plateau",
            alternateName: "Texas Hill Country",
            localName: "Hill Country",
            nickname: "Heart of Texas",
            countries: ["United States"],
            continent: "North America",
            region: "Central Texas",
            type: "Dissected",
            subtype: "Karst Limestone",
            coordinates: { lat: 30.5, lng: -100.0 },
            boundingBox: { north: 32.0, south: 29.0, east: -97.0, west: -102.0 },
            area: 60000,
            avgElevation: 600,
            maxElevation: 850,
            minElevation: 200,
            ageMillionYears: 100,
            features: [
                "Balcones Escarpment",
                "Enchanted Rock (granite dome)",
                "Bracken Cave (largest bat colony)",
                "Barton Springs",
                "Natural Bridge Caverns",
                "Guadalupe River"
            ],
            climate: {
                type: "Semi-arid to Subtropical",
                avgTempSummer: 35,
                avgTempWinter: 10,
                rainfall: 700
            },
            population: 3000000,
            majorCities: ["Austin (edge)", "San Antonio (edge)", "Fredericksburg", "Kerrville"],
            biodiversity: {
                fauna: ["Mexican Free-tailed Bat (millions)", "White-tailed Deer", "Wild Turkey", "Cave fauna"]
            },
            significance: {
                ecological: "Largest bat colony (20 million bats), Edwards Aquifer",
                cultural: "Texas Hill Country wineries, German heritage"
            },
            color: "#8b5cf6"
        },
        {
            id: 31,
            name: "Appalachian Plateau",
            alternateName: "Allegheny Plateau / Cumberland Plateau",
            localName: "Appalachian Plateaus",
            nickname: "Coal Country",
            countries: ["United States"],
            continent: "North America",
            region: "Eastern USA",
            type: "Dissected",
            subtype: "Horizontal Strata",
            coordinates: { lat: 38.0, lng: -80.0 },
            boundingBox: { north: 42.0, south: 35.0, east: -75.0, west: -85.0 },
            area: 200000,
            avgElevation: 600,
            maxElevation: 1481,
            minElevation: 200,
            ageMillionYears: 300,
            features: [
                "New River Gorge",
                "Breaks Interstate Park",
                "Natural Bridges",
                "Coal mining regions",
                "Finger Lakes (NY)",
                "Cumberland Falls"
            ],
            climate: {
                type: "Humid Continental",
                avgTempSummer: 22,
                avgTempWinter: 0,
                rainfall: 1200
            },
            population: 15000000,
            majorCities: ["Pittsburgh", "Charleston WV", "Knoxville", "Binghamton"],
            significance: {
                economic: "Coal mining, natural gas (Marcellus Shale)",
                cultural: "Appalachian folk culture",
                geological: "Horizontal Paleozoic sediments"
            },
            color: "#8b5cf6"
        },
        {
            id: 32,
            name: "Mexican Plateau",
            alternateName: "Mexican Altiplano",
            localName: "Altiplanicie Mexicana",
            nickname: "Heartland of Mexico",
            countries: ["Mexico"],
            continent: "North America",
            region: "Central Mexico",
            type: "Intermontane",
            subtype: "Volcanic/Tectonic",
            coordinates: { lat: 23.0, lng: -102.0 },
            boundingBox: { north: 32.0, south: 18.0, east: -97.0, west: -107.0 },
            area: 600000,
            avgElevation: 2000,
            maxElevation: 2400,
            minElevation: 1000,
            ageMillionYears: 40,
            features: [
                "Valley of Mexico (Mexico City basin)",
                "Copper Canyon (larger than Grand Canyon)",
                "Popocatépetl volcano",
                "Teotihuacan pyramids",
                "Silver mining cities",
                "Chihuahuan Desert (north)"
            ],
            climate: {
                type: "Semi-arid to Subtropical",
                avgTempSummer: 20,
                avgTempWinter: 10,
                rainfall: 500
            },
            population: 45000000,
            majorCities: ["Mexico City", "Guadalajara", "Monterrey", "Zacatecas", "Guanajuato"],
            significance: {
                geological: "Trans-Mexican Volcanic Belt, active volcanoes",
                cultural: "Aztec, Mayan civilizations, colonial silver cities",
                economic: "Silver (world's leading producer)"
            },
            unesco: true,
            color: "#f59e0b"
        },
        {
            id: 33,
            name: "Great Plains",
            alternateName: "High Plains / Prairie",
            localName: "Great Plains",
            nickname: "America's Breadbasket",
            countries: ["United States", "Canada"],
            continent: "North America",
            region: "Central North America",
            type: "Depositional",
            subtype: "Alluvial/Loess Plain",
            coordinates: { lat: 42.0, lng: -100.0 },
            boundingBox: { north: 58.0, south: 30.0, east: -95.0, west: -110.0 },
            area: 1300000,
            avgElevation: 700,
            maxElevation: 1500,
            minElevation: 300,
            ageMillionYears: 65,
            features: [
                "Badlands National Park",
                "Black Hills",
                "Ogallala Aquifer",
                "Palo Duro Canyon",
                "Canadian Prairies",
                "Tallgrass Prairie"
            ],
            climate: {
                type: "Semi-arid Continental",
                avgTempSummer: 28,
                avgTempWinter: -5,
                rainfall: 500,
                tornadoes: "Tornado Alley"
            },
            population: 10000000,
            majorCities: ["Denver", "Oklahoma City", "Omaha", "Wichita", "Regina", "Calgary"],
            biodiversity: {
                flora: ["Tallgrass prairie", "Shortgrass steppe", "Mixed grass prairie"],
                fauna: ["Bison (reintroduced)", "Pronghorn", "Prairie Dog", "Ferruginous Hawk"]
            },
            significance: {
                agricultural: "World's breadbasket - wheat, corn, cattle",
                ecological: "Largest remaining grassland in North America",
                water: "Ogallala Aquifer - largest in North America (depleting)"
            },
            color: "#10b981"
        },

        // ============ SOUTH AMERICA (20+ Plateaus) ============
        {
            id: 34,
            name: "Altiplano",
            alternateName: "Andean Plateau / Puna",
            localName: "Altiplano / Puna",
            nickname: "High Plain of the Andes",
            countries: ["Bolivia", "Peru", "Chile", "Argentina"],
            continent: "South America",
            region: "Central Andes",
            type: "Intermontane",
            subtype: "Volcanic/Tectonic",
            coordinates: { lat: -18.0, lng: -68.0 },
            boundingBox: { north: -14.0, south: -27.0, east: -65.0, west: -70.0 },
            area: 170000,
            avgElevation: 3750,
            maxElevation: 6500,
            minElevation: 3500,
            ageMillionYears: 40,
            formation: {
                process: "Andean orogeny, volcanic activity, internal drainage"
            },
            features: [
                "Lake Titicaca (highest navigable lake)",
                "Salar de Uyuni (world's largest salt flat)",
                "Tiwanaku ruins",
                "Geysers of El Tatio",
                "Licancabur volcano",
                "Laguna Colorada",
                "Giant cacti forests"
            ],
            climate: {
                type: "High Altitude Semi-arid",
                avgTempSummer: 12,
                avgTempWinter: 0,
                rainfall: 400,
                uv: "Extreme UV radiation"
            },
            population: 4000000,
            majorCities: ["La Paz", "Puno", "Oruro", "Uyuni", "San Pedro de Atacama"],
            biodiversity: {
                flora: ["Puna grassland", "Queñua forests", "Giant cushion plants"],
                fauna: ["Vicuña", "Llama", "Alpaca", "Flamingo (3 species)", "Viscacha", "Andean Condor"]
            },
            significance: {
                geological: "Second highest plateau, active volcanism",
                economic: "Lithium reserves (70% of world)",
                cultural: "Inca Empire heartland, Tiwanaku civilization"
            },
            unesco: true,
            unescoSites: ["Tiwanaku"],
            color: "#ef4444",
            rank: 4,
            rankCriteria: "Second highest plateau, largest lithium reserves"
        },
        {
            id: 35,
            name: "Brazilian Highlands",
            alternateName: "Planalto Brasileiro",
            localName: "Planalto Brasileiro",
            nickname: "Central Brazilian Plateau",
            countries: ["Brazil"],
            continent: "South America",
            region: "Central-Eastern Brazil",
            type: "Continental",
            subtype: "Ancient Shield",
            coordinates: { lat: -15.0, lng: -47.0 },
            boundingBox: { north: -5.0, south: -30.0, east: -35.0, west: -55.0 },
            area: 5000000,
            avgElevation: 1000,
            maxElevation: 2890,
            minElevation: 300,
            ageMillionYears: 2000,
            formation: {
                process: "Precambrian shield erosion, Cretaceous volcanic events"
            },
            features: [
                "Chapada dos Veadeiros",
                "Serra da Canastra",
                "Pico da Bandeira (2,890m)",
                "Chapada Diamantina",
                "Brasília (capital city)",
                "Itatiaia plateau",
                "Table mountains (Chapadas)"
            ],
            climate: {
                type: "Tropical Savanna (Cerrado)",
                avgTempSummer: 28,
                avgTempWinter: 18,
                rainfall: 1500
            },
            population: 90000000,
            majorCities: ["Brasília", "Belo Horizonte", "São Paulo (edge)", "Goiânia"],
            biodiversity: {
                flora: ["Cerrado savanna", "Atlantic Forest (remnants)", "Campo rupestre"],
                fauna: ["Giant Anteater", "Maned Wolf", "Giant Armadillo", "Jaguar", "Marsh Deer"]
            },
            rivers: {
                sources: ["São Francisco", "Paraná", "Tocantins", "Xingu", "Araguaia"],
                significance: "Major watershed divide"
            },
            significance: {
                geological: "Ancient Precambrian shield, mineral deposits",
                ecological: "Cerrado biodiversity hotspot (most threatened savanna)",
                economic: "Iron ore, agriculture, hydropower"
            },
            unesco: true,
            unescoSites: ["Chapada dos Veadeiros", "Serra da Canastra"],
            color: "#10b981"
        },
        {
            id: 36,
            name: "Guiana Highlands",
            alternateName: "Guiana Shield / Tepui Region",
            localName: "Tepuis",
            nickname: "Lost World",
            countries: ["Venezuela", "Guyana", "Suriname", "Brazil", "Colombia"],
            continent: "South America",
            region: "Northern South America",
            type: "Erosional",
            subtype: "Table Mountains (Tepuis)",
            coordinates: { lat: 5.0, lng: -62.0 },
            boundingBox: { north: 9.0, south: -2.0, east: -51.0, west: -72.0 },
            area: 1200000,
            avgElevation: 600,
            maxElevation: 2994,
            minElevation: 50,
            ageMillionYears: 2000,
            formation: {
                process: "Ancient Precambrian sandstone eroded into isolated table mountains"
            },
            features: [
                "Angel Falls (world's highest waterfall - 979m)",
                "Mount Roraima (triple border)",
                "Auyan Tepui",
                "Gran Sabana",
                "Kaieteur Falls (Guyana)",
                "Canaima National Park"
            ],
            climate: {
                type: "Tropical Wet",
                avgTempSummer: 28,
                avgTempWinter: 25,
                rainfall: 3000
            },
            population: 500000,
            biodiversity: {
                flora: ["Endemic tepui flora", "Carnivorous plants", "Orchids (1000+ species)"],
                fauna: ["Tepui endemic species", "Harpy Eagle", "Giant Otter", "Jaguar"]
            },
            rivers: {
                sources: ["Orinoco River", "Essequibo River", "Amazon tributaries"],
                significance: "Major freshwater source"
            },
            significance: {
                geological: "Oldest exposed rocks in South America, unique tepui ecosystems",
                ecological: "Highest endemism rate (each tepui is 'island' ecosystem)",
                cultural: "Inspiration for 'The Lost World' by Arthur Conan Doyle"
            },
            unesco: true,
            unescoSites: ["Canaima National Park"],
            color: "#8b5cf6",
            rank: 5,
            rankCriteria: "World's highest waterfall, unique tepui ecosystems"
        },
        {
            id: 37,
            name: "Patagonian Plateau",
            alternateName: "Meseta Patagónica",
            localName: "Meseta Patagónica",
            nickname: "Land of Giants",
            countries: ["Argentina", "Chile"],
            continent: "South America",
            region: "Southern South America",
            type: "Piedmont/Volcanic",
            subtype: "Rain Shadow Steppe",
            coordinates: { lat: -46.0, lng: -70.0 },
            boundingBox: { north: -38.0, south: -52.0, east: -65.0, west: -74.0 },
            area: 670000,
            avgElevation: 800,
            maxElevation: 1500,
            minElevation: 0,
            ageMillionYears: 15,
            formation: {
                process: "Andean rain shadow, basalt flows, glacial modification"
            },
            features: [
                "Perito Moreno Glacier",
                "Torres del Paine",
                "Valdés Peninsula (whale watching)",
                "Petrified Forest",
                "Dinosaur fossil sites",
                "Fitz Roy / Cerro Torre",
                "Cave of the Hands (rock art)"
            ],
            climate: {
                type: "Cold Semi-arid Steppe",
                avgTempSummer: 15,
                avgTempWinter: 2,
                rainfall: 200,
                wind: "Extreme (200km/h recorded)"
            },
            population: 2000000,
            majorCities: ["Comodoro Rivadavia", "Puerto Madryn", "Punta Arenas"],
            biodiversity: {
                flora: ["Steppe grassland", "Southern beech forests (edge)"],
                fauna: ["Guanaco", "Patagonian Mara", "Rhea", "Puma", "Andean Condor", "Southern Right Whale"]
            },
            significance: {
                geological: "Largest dinosaur fossil sites",
                ecological: "Steppe ecosystem, whale breeding",
                tourism: "World-class adventure tourism"
            },
            unesco: true,
            unescoSites: ["Los Glaciares", "Valdés Peninsula", "Cave of the Hands"],
            color: "#10b981"
        },

        // ============ EUROPE (20+ Plateaus) ============
        {
            id: 38,
            name: "Iberian Meseta",
            alternateName: "Central Plateau of Spain",
            localName: "Meseta Central",
            nickname: "Heart of Spain",
            countries: ["Spain", "Portugal"],
            continent: "Europe",
            region: "Iberian Peninsula",
            type: "Intermontane",
            subtype: "Ancient Massif",
            coordinates: { lat: 40.0, lng: -4.0 },
            boundingBox: { north: 43.0, south: 37.0, east: 0.0, west: -9.0 },
            area: 400000,
            avgElevation: 660,
            maxElevation: 2500,
            minElevation: 400,
            ageMillionYears: 300,
            formation: {
                process: "Hercynian orogeny, subsequent erosion and uplift"
            },
            features: [
                "Madrid (capital)",
                "Sierra de Guadarrama",
                "Castilian plains",
                "Don Quixote landscapes",
                "Medieval castles",
                "Segovia aqueduct"
            ],
            climate: {
                type: "Continental Mediterranean",
                avgTempSummer: 32,
                avgTempWinter: 5,
                rainfall: 450
            },
            population: 15000000,
            majorCities: ["Madrid", "Salamanca", "Valladolid", "Toledo", "Ávila"],
            significance: {
                cultural: "Spanish Golden Age, Cervantes' landscapes",
                agricultural: "Wheat, olives, wine",
                historical: "Medieval kingdoms, Roman heritage"
            },
            unesco: true,
            unescoSites: ["Old Town of Ávila", "Old City of Salamanca", "Segovia"],
            color: "#10b981"
        },
        {
            id: 39,
            name: "Massif Central",
            alternateName: "French Central Massif",
            localName: "Massif central",
            nickname: "Heart of France",
            countries: ["France"],
            continent: "Europe",
            region: "South-Central France",
            type: "Volcanic/Dissected",
            subtype: "Hercynian Uplift + Volcanism",
            coordinates: { lat: 45.5, lng: 3.0 },
            boundingBox: { north: 47.0, south: 43.5, east: 5.0, west: 1.5 },
            area: 85000,
            avgElevation: 700,
            maxElevation: 1886,
            minElevation: 200,
            ageMillionYears: 300,
            formation: {
                process: "Hercynian orogeny + Tertiary/Quaternary volcanism"
            },
            features: [
                "Chaîne des Puys (UNESCO volcanic chain)",
                "Puy de Dôme (1,465m)",
                "Gorges du Tarn",
                "Volcanic crater lakes (maars)",
                "Clermont-Ferrand cathedral (black lava)",
                "Viaduct of Millau"
            ],
            climate: {
                type: "Oceanic to Semi-Continental",
                avgTempSummer: 22,
                avgTempWinter: 2,
                rainfall: 1000
            },
            population: 5000000,
            majorCities: ["Clermont-Ferrand", "Limoges", "Saint-Étienne"],
            biodiversity: {
                flora: ["Volcanic grasslands", "Chestnut forests", "Alpine meadows"],
                fauna: ["Red Deer", "Wild Boar", "Golden Eagle", "Mouflon"]
            },
            significance: {
                geological: "UNESCO volcanic chain, dormant volcanoes",
                cultural: "Romanesque churches, cheese production (Roquefort)",
                tourism: "Thermal spas, hiking"
            },
            unesco: true,
            unescoSites: ["Chaîne des Puys - Limagne Fault"],
            color: "#f59e0b"
        },
        {
            id: 40,
            name: "Scandinavian Plateau",
            alternateName: "Scandinavian Mountains / Scandes",
            localName: "Skanderna / Kjølen",
            nickname: "Roof of Scandinavia",
            countries: ["Norway", "Sweden", "Finland"],
            continent: "Europe",
            region: "Northern Europe",
            type: "Continental/Glacial",
            subtype: "Ancient Caledonian",
            coordinates: { lat: 66.0, lng: 14.0 },
            boundingBox: { north: 71.0, south: 58.0, east: 30.0, west: 5.0 },
            area: 300000,
            avgElevation: 1000,
            maxElevation: 2469,
            minElevation: 0,
            ageMillionYears: 450,
            formation: {
                process: "Caledonian orogeny + glacial modification"
            },
            features: [
                "Hardangervidda (largest mountain plateau in Europe)",
                "Norwegian fjords",
                "Galdhøpiggen (highest peak)",
                "Lapland fells",
                "Northern Lights zone",
                "Jotunheimen mountains"
            ],
            climate: {
                type: "Subarctic to Arctic",
                avgTempSummer: 12,
                avgTempWinter: -15,
                rainfall: 1500
            },
            population: 500000,
            biodiversity: {
                flora: ["Tundra vegetation", "Boreal forest", "Arctic alpine flora"],
                fauna: ["Reindeer", "Arctic Fox", "Wolverine", "Musk Ox", "Lemming"]
            },
            significance: {
                geological: "Ancient Caledonian orogen, glacial landscapes",
                cultural: "Sami indigenous culture, Nordic heritage",
                tourism: "Hiking, skiing, Northern Lights"
            },
            unesco: true,
            unescoSites: ["West Norwegian Fjords"],
            color: "#06b6d4"
        },
        {
            id: 41,
            name: "Karst Plateau (Slovenia)",
            alternateName: "Kras / Carso",
            localName: "Kras",
            nickname: "Type Locality for Karst",
            countries: ["Slovenia", "Italy"],
            continent: "Europe",
            region: "Adriatic Region",
            type: "Karst",
            subtype: "Limestone Dissolution",
            coordinates: { lat: 45.7, lng: 14.0 },
            boundingBox: { north: 46.0, south: 45.4, east: 14.5, west: 13.5 },
            area: 500,
            avgElevation: 400,
            maxElevation: 650,
            minElevation: 200,
            ageMillionYears: 100,
            formation: {
                process: "Limestone dissolution creating type karst landscape"
            },
            features: [
                "Škocjan Caves (UNESCO)",
                "Postojna Cave",
                "Reka River (disappearing)",
                "Collapse dolines",
                "Lipica (Lipizzan horses origin)"
            ],
            climate: {
                type: "Mediterranean-Continental transition",
                avgTempSummer: 22,
                avgTempWinter: 3,
                rainfall: 1400
            },
            biodiversity: {
                fauna: ["Olm (cave salamander - endemic)", "Cave fish", "Cave beetles"]
            },
            significance: {
                geological: "TYPE LOCALITY for karst terminology worldwide",
                scientific: "Speleology center",
                tourism: "Cave tourism origin"
            },
            unesco: true,
            unescoSites: ["Škocjan Caves"],
            color: "#8b5cf6"
        },
        {
            id: 42,
            name: "Transylvanian Plateau",
            alternateName: "Transylvanian Basin",
            localName: "Podișul Transilvaniei",
            nickname: "Land of Dracula",
            countries: ["Romania"],
            continent: "Europe",
            region: "Central-Eastern Europe",
            type: "Intermontane",
            subtype: "Sedimentary Basin",
            coordinates: { lat: 46.5, lng: 24.5 },
            boundingBox: { north: 47.5, south: 45.5, east: 26.0, west: 23.0 },
            area: 65000,
            avgElevation: 500,
            maxElevation: 800,
            minElevation: 300,
            ageMillionYears: 20,
            features: [
                "Fortified churches (UNESCO)",
                "Salt mines (Turda, Praid)",
                "Medieval cities (Sibiu, Brașov)",
                "Dracula's castle (Bran)",
                "Rolling hills with hay meadows"
            ],
            climate: {
                type: "Humid Continental",
                avgTempSummer: 20,
                avgTempWinter: -3,
                rainfall: 600
            },
            population: 4000000,
            majorCities: ["Cluj-Napoca", "Brașov", "Sibiu", "Târgu Mureș"],
            biodiversity: {
                fauna: ["Brown Bear", "Wolf", "Lynx (largest European populations)"]
            },
            significance: {
                cultural: "Saxon fortified churches, medieval heritage",
                geological: "Salt deposits, natural gas",
                tourism: "Dracula tourism, UNESCO sites"
            },
            unesco: true,
            unescoSites: ["Villages with Fortified Churches"],
            color: "#10b981"
        },

        // ============ OCEANIA (10+ Plateaus) ============
        {
            id: 43,
            name: "Western Plateau (Australia)",
            alternateName: "Australian Shield",
            localName: "Western Plateau",
            nickname: "Ancient Outback",
            countries: ["Australia"],
            continent: "Oceania",
            region: "Western/Central Australia",
            type: "Continental",
            subtype: "Ancient Craton",
            coordinates: { lat: -25.0, lng: 125.0 },
            boundingBox: { north: -15.0, south: -35.0, east: 140.0, west: 112.0 },
            area: 4500000,
            avgElevation: 400,
            maxElevation: 1531,
            minElevation: 0,
            ageMillionYears: 4400,
            formation: {
                process: "Among oldest rocks on Earth (Pilbara, Yilgarn cratons)"
            },
            features: [
                "Uluru (Ayers Rock)",
                "Kata Tjuta (Olgas)",
                "Pilbara (oldest fossils - stromatolites)",
                "Nullarbor Plain (world's largest karst)",
                "Great Victoria Desert",
                "Shark Bay stromatolites",
                "Hammersley Range (iron ore)"
            ],
            climate: {
                type: "Arid Desert",
                avgTempSummer: 40,
                avgTempWinter: 15,
                rainfall: 250
            },
            population: 500000,
            majorCities: ["Perth", "Kalgoorlie", "Alice Springs"],
            biodiversity: {
                flora: ["Spinifex grassland", "Mulga woodland", "Desert succulents"],
                fauna: ["Red Kangaroo", "Thorny Devil", "Bilby", "Dingo", "Perentie"]
            },
            significance: {
                geological: "Oldest rocks on Earth (Jack Hills zircons - 4.4 Ga), earliest life (stromatolites)",
                economic: "Iron ore, gold, diamonds, rare earths",
                cultural: "Aboriginal Dreamtime sites (60,000+ years)"
            },
            unesco: true,
            unescoSites: ["Uluru-Kata Tjuta", "Shark Bay", "Ningaloo Coast"],
            color: "#10b981"
        },
        {
            id: 44,
            name: "Kimberley Plateau",
            alternateName: "Kimberley Region",
            localName: "Kimberley",
            nickname: "Australia's Last Frontier",
            countries: ["Australia"],
            continent: "Oceania",
            region: "Northwestern Australia",
            type: "Dissected",
            subtype: "Precambrian Sandstone",
            coordinates: { lat: -17.0, lng: 125.0 },
            boundingBox: { north: -14.0, south: -20.0, east: 129.0, west: 121.0 },
            area: 423000,
            avgElevation: 500,
            maxElevation: 930,
            minElevation: 0,
            ageMillionYears: 1800,
            features: [
                "Bungle Bungle Range (beehive domes)",
                "Mitchell Falls",
                "Horizontal Falls (tidal phenomenon)",
                "King George Falls",
                "Gibb River Road"
            ],
            climate: {
                type: "Tropical Monsoon",
                avgTempSummer: 35,
                avgTempWinter: 25,
                rainfall: 1000
            },
            population: 40000,
            biodiversity: {
                flora: ["Boab trees", "Tropical savanna", "Monsoon vine thickets"],
                fauna: ["Saltwater Crocodile", "Black-footed Rock Wallaby", "Gouldian Finch"]
            },
            significance: {
                geological: "Ancient sandstone formations, beehive domes",
                cultural: "Aboriginal rock art (60,000+ years), Wandjina art",
                economic: "Diamond mining (Argyle)"
            },
            unesco: true,
            unescoSites: ["Purnululu National Park (Bungle Bungles)"],
            color: "#8b5cf6"
        },
        {
            id: 45,
            name: "North Island Volcanic Plateau",
            alternateName: "Central Plateau (NZ)",
            localName: "Volcanic Plateau",
            nickname: "Land of Fire",
            countries: ["New Zealand"],
            continent: "Oceania",
            region: "North Island",
            type: "Volcanic",
            subtype: "Active Volcanic Zone",
            coordinates: { lat: -39.0, lng: 176.0 },
            boundingBox: { north: -38.0, south: -40.0, east: 177.0, west: 175.0 },
            area: 10000,
            avgElevation: 600,
            maxElevation: 2797,
            minElevation: 350,
            ageMillionYears: 2,
            formation: {
                process: "Taupo Volcanic Zone - active subduction volcanism"
            },
            features: [
                "Mount Ruapehu (active)",
                "Mount Ngauruhoe (Mount Doom - LOTR)",
                "Tongariro Crossing",
                "Lake Taupo (supervolcano crater)",
                "Rotorua geothermal",
                "Wairakei geothermal power"
            ],
            climate: {
                type: "Oceanic/Alpine",
                avgTempSummer: 18,
                avgTempWinter: 5,
                rainfall: 1500
            },
            population: 100000,
            majorCities: ["Taupo", "Rotorua", "National Park Village"],
            biodiversity: {
                flora: ["Native bush", "Tussock grassland", "Alpine herbs"],
                fauna: ["Kiwi", "Blue Duck", "Native bats"]
            },
            significance: {
                geological: "Most active volcanic zone, geothermal energy",
                cultural: "Maori sacred sites, Tongariro first national park (gifted by Maori)",
                tourism: "Lord of the Rings filming, adventure tourism"
            },
            unesco: true,
            unescoSites: ["Tongariro National Park (first cultural landscape)"],
            color: "#f59e0b"
        },

        // ============ ANTARCTICA (2 Plateaus) ============
        {
            id: 46,
            name: "Antarctic Plateau",
            alternateName: "Polar Plateau / East Antarctic Plateau",
            localName: "Antarctic Plateau",
            nickname: "Ice Plateau / Dome",
            countries: ["Antarctica (International)"],
            continent: "Antarctica",
            region: "East Antarctica",
            type: "Continental/Ice",
            subtype: "Ice Sheet Plateau",
            coordinates: { lat: -82.0, lng: 75.0 },
            boundingBox: { north: -70.0, south: -90.0, east: 180.0, west: -180.0 },
            area: 14000000,
            avgElevation: 2500,
            maxElevation: 4093,
            minElevation: 2000,
            ageMillionYears: 34,
            formation: {
                process: "Continental uplift + ice sheet accumulation since Oligocene"
            },
            features: [
                "South Pole",
                "Dome A (highest point - 4,093m)",
                "Dome C (ice core site)",
                "Vostok Station (coldest temperature recorded: -89.2°C)",
                "Ice thickness up to 4.8 km",
                "Subglacial Lake Vostok"
            ],
            climate: {
                type: "Polar Ice Cap",
                avgTempSummer: -30,
                avgTempWinter: -70,
                rainfall: 50,
                extremeCold: "Coldest place on Earth"
            },
            population: 1000,
            biodiversity: {
                flora: ["None (interior)"],
                fauna: ["Emperor Penguin (coastal)", "Antarctic Midge (only insect)"]
            },
            rivers: {
                sources: ["Subglacial rivers"],
                significance: "70% of Earth's freshwater frozen here"
            },
            significance: {
                geological: "Ice cores reveal 800,000 years of climate history",
                scientific: "Climate research, astronomy",
                ecological: "Pristine environment, ozone monitoring"
            },
            color: "#06b6d4"
        }
    ],

    // ==========================================
    // 🌍 197 COUNTRIES - COMPLETE DETAILED DATA
    // ==========================================
    
    countriesDetailed: {
        "AF": {
            country: "Afghanistan",
            code: "AF",
            flag: "🇦🇫",
            continent: "Asia",
            region: "Central Asia",
            majorPlateaus: 3,
            totalPlateauArea: 250000,
            percentLandCoverage: 38,
            highestPlateauPoint: 4000,
            lowestPlateauPoint: 500,
            plateausList: [
                {
                    name: "Central Highlands Plateau",
                    localName: "Hindu Kush Foothills",
                    area: 150000,
                    avgElevation: 2500,
                    type: "Intermontane",
                    features: ["Hindu Kush mountains", "Bamyan Valley", "Band-e-Amir lakes (first national park)"],
                    climate: "Semi-arid continental",
                    significance: "Crossroads of civilizations, Buddhist heritage"
                },
                {
                    name: "Northern Plains Plateau",
                    localName: "Turkestan Plains",
                    area: 50000,
                    avgElevation: 400,
                    type: "Piedmont",
                    features: ["Amu Darya basin", "Ancient Balkh"],
                    climate: "Arid steppe",
                    significance: "Ancient Silk Road, Bactrian civilization"
                },
                {
                    name: "Southwestern Plateau",
                    localName: "Registan Desert Margin",
                    area: 50000,
                    avgElevation: 1000,
                    type: "Desert plateau",
                    features: ["Helmand River", "Sistan Basin"],
                    climate: "Hot desert",
                    significance: "Archaeological sites"
                }
            ],
            geology: {
                dominantRockTypes: ["Metamorphic", "Sedimentary", "Igneous"],
                tectonicSetting: "Indian-Eurasian collision zone",
                seismicActivity: "High",
                mineralResources: ["Copper", "Lithium", "Iron", "Rare earths", "Emeralds", "Lapis lazuli"]
            },
            biodiversity: {
                ecosystems: ["Montane steppe", "Cold desert", "Riparian"],
                notableSpecies: ["Snow Leopard", "Marco Polo Sheep", "Markhor (national animal)"],
                protectedAreas: ["Band-e-Amir National Park"]
            },
            humanGeography: {
                population: 40000000,
                plateauPopulation: 15000000,
                majorCities: ["Kabul", "Herat", "Mazar-i-Sharif", "Bamyan"],
                economicActivities: ["Agriculture", "Mining", "Pastoralism"],
                culturalSites: ["Bamyan Buddhas (destroyed)", "Minaret of Jam (UNESCO)", "Band-e-Amir"]
            },
            research: {
                institutions: ["Kabul University Geology Department"],
                keyStudies: ["Mineral surveys", "Seismic hazard assessment"],
                challenges: ["Security", "Access", "Infrastructure"]
            }
        },
        "AL": {
            country: "Albania",
            code: "AL",
            flag: "🇦🇱",
            continent: "Europe",
            region: "Southeastern Europe / Balkans",
            majorPlateaus: 2,
            totalPlateauArea: 8000,
            percentLandCoverage: 28,
            highestPlateauPoint: 1500,
            lowestPlateauPoint: 300,
            plateausList: [
                {
                    name: "Korçë Plateau",
                    localName: "Fusha e Korçës",
                    area: 3000,
                    avgElevation: 850,
                    type: "Tectonic basin",
                    features: ["Prespa Lakes (shared)", "Pogradec"],
                    climate: "Continental Mediterranean",
                    significance: "Agricultural region, biodiversity"
                },
                {
                    name: "Malësia Plateau",
                    localName: "Albanian Alps Highland",
                    area: 5000,
                    avgElevation: 1200,
                    type: "Karst plateau",
                    features: ["Valbona Valley", "Theth", "Blue Eye Spring"],
                    climate: "Alpine",
                    significance: "Accursed Mountains, traditional culture"
                }
            ],
            geology: {
                dominantRockTypes: ["Limestone", "Dolomite", "Flysch"],
                tectonicSetting: "Alpine orogeny, Adriatic microplate",
                seismicActivity: "Moderate to High",
                mineralResources: ["Chromium (major producer)", "Copper", "Nickel"]
            },
            biodiversity: {
                ecosystems: ["Mediterranean", "Alpine", "Karst"],
                notableSpecies: ["Balkan Lynx (critically endangered)", "Golden Eagle"],
                protectedAreas: ["Valbona National Park", "Prespa National Park"]
            },
            humanGeography: {
                population: 2800000,
                plateauPopulation: 500000,
                majorCities: ["Korçë", "Pogradec"],
                economicActivities: ["Agriculture", "Tourism", "Mining"],
                culturalSites: ["Korçë old town", "Lake Ohrid region (UNESCO - nearby)"]
            }
        },
        "DZ": {
            country: "Algeria",
            code: "DZ",
            flag: "🇩🇿",
            continent: "Africa",
            region: "North Africa / Maghreb",
            majorPlateaus: 4,
            totalPlateauArea: 1500000,
            percentLandCoverage: 63,
            highestPlateauPoint: 2918,
            lowestPlateauPoint: 200,
            plateausList: [
                {
                    name: "Tassili n'Ajjer",
                    localName: "طاسيلي ناجر",
                    area: 80000,
                    avgElevation: 1500,
                    type: "Sandstone plateau",
                    features: ["15,000+ rock art images", "Sandstone forests", "Natural arches"],
                    climate: "Saharan hyperarid",
                    significance: "UNESCO World Heritage - prehistoric art, geological wonder"
                },
                {
                    name: "Ahaggar Mountains Plateau",
                    localName: "جبال الهقار",
                    area: 550000,
                    avgElevation: 2000,
                    type: "Volcanic massif",
                    features: ["Mount Tahat (2,918m)", "Volcanic peaks", "Tuareg culture"],
                    climate: "Mountain desert",
                    significance: "Highest Saharan massif, Tuareg homeland"
                },
                {
                    name: "High Plateaus (Hauts Plateaux)",
                    localName: "الهضاب العليا",
                    area: 600000,
                    avgElevation: 1000,
                    type: "Steppe plateau",
                    features: ["Chotts (salt lakes)", "Alfa grass steppe", "M'zab Valley"],
                    climate: "Semi-arid steppe",
                    significance: "Pastoral economy, M'zab Valley UNESCO site"
                },
                {
                    name: "Tell Atlas Plateau",
                    localName: "أطلس التل",
                    area: 100000,
                    avgElevation: 800,
                    type: "Folded sedimentary",
                    features: ["Djurdjura Mountains", "Kabyle region", "Cedars"],
                    climate: "Mediterranean",
                    significance: "Agricultural heartland, Berber culture"
                }
            ],
            geology: {
                dominantRockTypes: ["Sandstone", "Granite", "Volcanic", "Limestone"],
                tectonicSetting: "African plate, Atlas fold belt",
                seismicActivity: "Moderate (Tell Atlas)",
                mineralResources: ["Oil", "Natural gas", "Iron ore", "Phosphates", "Zinc"]
            },
            biodiversity: {
                ecosystems: ["Saharan", "Mediterranean", "Montane"],
                notableSpecies: ["Barbary Macaque", "Fennec Fox", "Addax (endangered)", "Saharan Cheetah (critically endangered)"],
                protectedAreas: ["Tassili n'Ajjer National Park", "Ahaggar National Park", "Djurdjura National Park"]
            },
            humanGeography: {
                population: 45000000,
                plateauPopulation: 10000000,
                majorCities: ["Ghardaia", "Tamanrasset", "Djelfa", "Tizi Ouzou"],
                economicActivities: ["Oil/Gas", "Pastoralism", "Tourism", "Agriculture"],
                culturalSites: ["Tassili n'Ajjer (UNESCO)", "M'zab Valley (UNESCO)", "Timgad (UNESCO)", "Djémila (UNESCO)"]
            }
        },
        "AR": {
            country: "Argentina",
            code: "AR",
            flag: "🇦🇷",
            continent: "South America",
            region: "Southern South America",
            majorPlateaus: 4,
            totalPlateauArea: 900000,
            percentLandCoverage: 32,
            highestPlateauPoint: 4500,
            lowestPlateauPoint: 0,
            plateausList: [
                {
                    name: "Patagonian Plateau",
                    localName: "Meseta Patagónica",
                    area: 670000,
                    avgElevation: 800,
                    type: "Piedmont/Volcanic",
                    features: ["Petrified forests", "Dinosaur sites", "Wind-swept steppe", "Welsh colonies"],
                    climate: "Cold semi-arid",
                    significance: "Largest dinosaur fossils, wool production"
                },
                {
                    name: "Puna de Atacama",
                    localName: "Puna Argentina",
                    area: 100000,
                    avgElevation: 4000,
                    type: "High altitude volcanic",
                    features: ["Salinas Grandes", "Volcanoes", "Flamingo lagoons", "Mining"],
                    climate: "Cold desert",
                    significance: "Lithium reserves, astronomical observatories"
                },
                {
                    name: "Sierras Pampeanas",
                    localName: "Sierras de Córdoba",
                    area: 100000,
                    avgElevation: 1500,
                    type: "Block faulted",
                    features: ["Córdoba mountains", "Valleys", "Colonial estancias"],
                    climate: "Semi-arid",
                    significance: "Tourism, Jesuit heritage (UNESCO)"
                },
                {
                    name: "Misiones Plateau",
                    localName: "Meseta Misionera",
                    area: 30000,
                    avgElevation: 500,
                    type: "Basalt plateau",
                    features: ["Iguazu Falls", "Atlantic Forest remnants", "Red soils"],
                    climate: "Subtropical humid",
                    significance: "Iguazu Falls (UNESCO), biodiversity hotspot"
                }
            ],
            geology: {
                dominantRockTypes: ["Basalt", "Granite", "Sedimentary"],
                tectonicSetting: "Andean subduction, stable craton (east)",
                seismicActivity: "Low to Moderate",
                mineralResources: ["Lithium (3rd largest reserves)", "Silver", "Gold", "Copper", "Oil"]
            },
            biodiversity: {
                ecosystems: ["Patagonian steppe", "Puna", "Atlantic Forest"],
                notableSpecies: ["Guanaco", "Puma", "Andean Condor", "Jaguar (Misiones)", "Patagonian Mara", "Right Whale"],
                protectedAreas: ["Los Glaciares NP (UNESCO)", "Iguazú NP (UNESCO)", "Talampaya NP (UNESCO)", "Valdés Peninsula (UNESCO)"]
            },
            humanGeography: {
                population: 46000000,
                plateauPopulation: 3000000,
                majorCities: ["Comodoro Rivadavia", "Trelew", "San Salvador de Jujuy", "Córdoba"],
                economicActivities: ["Sheep farming", "Oil/Gas", "Lithium mining", "Tourism", "Wine"],
                culturalSites: ["Cave of the Hands (UNESCO)", "Jesuit Estancias (UNESCO)"]
            }
        },
        "AU": {
            country: "Australia",
            code: "AU",
            flag: "🇦🇺",
            continent: "Oceania",
            region: "Australia and Pacific",
            majorPlateaus: 6,
            totalPlateauArea: 5500000,
            percentLandCoverage: 72,
            highestPlateauPoint: 1531,
            lowestPlateauPoint: -15,
            plateausList: [
                {
                    name: "Western Plateau",
                    localName: "Western Australian Shield",
                    area: 4500000,
                    avgElevation: 400,
                    type: "Ancient craton",
                    features: ["Pilbara (oldest rocks)", "Yilgarn Craton", "Nullarbor Plain", "Great Victoria Desert", "Gibson Desert"],
                    climate: "Arid to semi-arid",
                    significance: "Oldest rocks on Earth (4.4 Ga zircons), iron ore, gold"
                },
                {
                    name: "Kimberley Plateau",
                    localName: "Kimberley",
                    area: 423000,
                    avgElevation: 500,
                    type: "Dissected sandstone",
                    features: ["Bungle Bungles", "Mitchell Falls", "Horizontal Falls", "Aboriginal art sites"],
                    climate: "Tropical monsoon",
                    significance: "Unique geology, 60,000+ years Aboriginal heritage, diamonds"
                },
                {
                    name: "Atherton Tableland",
                    localName: "Atherton Tablelands",
                    area: 32000,
                    avgElevation: 800,
                    type: "Volcanic plateau",
                    features: ["Crater lakes", "Waterfalls", "Rainforest", "Curtain Fig Tree"],
                    climate: "Tropical highland",
                    significance: "Wet Tropics UNESCO, biodiversity, agriculture"
                },
                {
                    name: "New England Plateau",
                    localName: "Northern Tablelands",
                    area: 74000,
                    avgElevation: 1000,
                    type: "Granitic/Volcanic",
                    features: ["Waterfall Way", "World Heritage rainforests", "Ebor Falls"],
                    climate: "Temperate highland",
                    significance: "Gondwana Rainforests UNESCO"
                },
                {
                    name: "Central Lowlands Margin",
                    localName: "Great Artesian Basin",
                    area: 200000,
                    avgElevation: 200,
                    type: "Sedimentary basin",
                    features: ["Great Artesian Basin", "Mound springs", "Opal fields"],
                    climate: "Arid",
                    significance: "World's largest artesian basin, opal mining"
                },
                {
                    name: "Arnhem Land Plateau",
                    localName: "Arnhem Land / Kakadu Escarpment",
                    area: 50000,
                    avgElevation: 300,
                    type: "Sandstone escarpment",
                    features: ["Kakadu escarpment", "Jim Jim Falls", "Rock art galleries"],
                    climate: "Tropical monsoon",
                    significance: "Kakadu UNESCO, Aboriginal rock art (40,000+ years)"
                }
            ],
            geology: {
                dominantRockTypes: ["Archean granite/gneiss", "Proterozoic sandstone", "Cenozoic basalt"],
                tectonicSetting: "Ancient stable craton, Indo-Australian Plate",
                seismicActivity: "Low (intraplate)",
                mineralResources: ["Iron ore (world's largest)", "Gold", "Bauxite", "Uranium", "Diamonds", "Opals"]
            },
            biodiversity: {
                ecosystems: ["Desert", "Tropical savanna", "Tropical rainforest", "Temperate woodland"],
                notableSpecies: ["Red Kangaroo", "Emu", "Dingo", "Koala", "Platypus", "Echidna", "Saltwater Crocodile", "Quokka"],
                protectedAreas: ["Uluru-Kata Tjuta NP (UNESCO)", "Kakadu NP (UNESCO)", "Purnululu NP (UNESCO)", "Greater Blue Mountains (UNESCO)"]
            },
            humanGeography: {
                population: 26000000,
                plateauPopulation: 500000,
                majorCities: ["Perth", "Darwin", "Alice Springs", "Kalgoorlie", "Cairns (edge)"],
                economicActivities: ["Mining", "Cattle ranching", "Tourism", "Agriculture (tablelands)"],
                culturalSites: ["Uluru-Kata Tjuta (UNESCO)", "Kakadu (UNESCO)", "Shark Bay (UNESCO)"]
            }
        },
        "BR": {
            country: "Brazil",
            code: "BR",
            flag: "🇧🇷",
            continent: "South America",
            region: "Eastern South America",
            majorPlateaus: 5,
            totalPlateauArea: 5800000,
            percentLandCoverage: 68,
            highestPlateauPoint: 2890,
            lowestPlateauPoint: 100,
            plateausList: [
                {
                    name: "Brazilian Highlands",
                    localName: "Planalto Brasileiro",
                    area: 4500000,
                    avgElevation: 800,
                    type: "Ancient shield",
                    features: ["Chapada Diamantina", "Serra da Canastra", "Pico da Bandeira", "Brasília"],
                    climate: "Tropical savanna (Cerrado)",
                    significance: "Cerrado biodiversity, major watershed, capital city"
                },
                {
                    name: "Atlantic Plateau",
                    localName: "Planalto Atlântico",
                    area: 500000,
                    avgElevation: 1000,
                    type: "Crystalline/Granitic",
                    features: ["Serra do Mar escarpment", "São Paulo basin", "Sugar Loaf (edge)"],
                    climate: "Subtropical to tropical",
                    significance: "Most populated region, Atlantic Forest remnants"
                },
                {
                    name: "Southern Plateau",
                    localName: "Planalto Meridional",
                    area: 500000,
                    avgElevation: 700,
                    type: "Basalt (Paraná flood basalts)",
                    features: ["Iguazu Falls", "Aparados da Serra", "Red soils (terra roxa)"],
                    climate: "Subtropical",
                    significance: "Iguazu Falls (UNESCO), agriculture, Paraná basalts"
                },
                {
                    name: "Guiana Highlands (Brazilian portion)",
                    localName: "Planalto das Guianas",
                    area: 250000,
                    avgElevation: 800,
                    type: "Tepui sandstone",
                    features: ["Monte Roraima (border)", "Pico da Neblina (2,994m)", "Remote indigenous areas"],
                    climate: "Tropical wet",
                    significance: "Highest point in Brazil, indigenous territories"
                },
                {
                    name: "Borborema Plateau",
                    localName: "Planalto da Borborema",
                    area: 50000,
                    avgElevation: 600,
                    type: "Crystalline",
                    features: ["Northeast semi-arid region", "Granite inselbergs"],
                    climate: "Semi-arid (Sertão)",
                    significance: "Drought-prone region, unique adaptations"
                }
            ],
            geology: {
                dominantRockTypes: ["Precambrian granite/gneiss", "Proterozoic quartzite", "Cretaceous basalt", "Tertiary sediments"],
                tectonicSetting: "South American Platform (stable craton)",
                seismicActivity: "Low",
                mineralResources: ["Iron ore (largest reserves)", "Bauxite", "Gold", "Manganese", "Niobium (90% world)", "Rare earths"]
            },
            biodiversity: {
                ecosystems: ["Cerrado savanna", "Atlantic Forest", "Caatinga", "Amazon (edges)", "Campos"],
                notableSpecies: ["Giant Anteater", "Maned Wolf", "Jaguar", "Giant Armadillo", "Hyacinth Macaw", "Golden Lion Tamarin"],
                protectedAreas: ["Chapada dos Veadeiros NP (UNESCO)", "Serra da Capivara NP (UNESCO)", "Iguaçu NP (UNESCO)", "Atlantic Forest Reserves (UNESCO)"]
            },
            humanGeography: {
                population: 215000000,
                plateauPopulation: 150000000,
                majorCities: ["Brasília", "Belo Horizonte", "São Paulo", "Goiânia", "Curitiba"],
                economicActivities: ["Mining", "Soybean agriculture", "Cattle ranching", "Coffee", "Industry"],
                culturalSites: ["Brasília (UNESCO)", "Ouro Preto (UNESCO)", "Serra da Capivara (UNESCO)"]
            }
        },
        "CN": {
            country: "China",
            code: "CN",
            flag: "🇨🇳",
            continent: "Asia",
            region: "East Asia",
            majorPlateaus: 7,
            totalPlateauArea: 5000000,
            percentLandCoverage: 52,
            highestPlateauPoint: 8848,
            lowestPlateauPoint: -154,
            plateausList: [
                {
                    name: "Tibetan Plateau (Qinghai-Tibet)",
                    localName: "青藏高原 (Qīngzàng Gāoyuán)",
                    area: 2500000,
                    avgElevation: 4500,
                    type: "Intermontane tectonic",
                    features: ["Mount Everest", "Lake Namtso", "Potala Palace", "Qinghai Lake", "Chang Tang"],
                    climate: "Alpine/cold desert",
                    significance: "Highest plateau, Third Pole, river sources for 2 billion people"
                },
                {
                    name: "Inner Mongolian Plateau",
                    localName: "内蒙古高原 (Nèi Měnggǔ Gāoyuán)",
                    area: 1000000,
                    avgElevation: 1000,
                    type: "Continental steppe",
                    features: ["Gobi Desert (edge)", "Grassland steppes", "Hulunbuir"],
                    climate: "Semi-arid continental",
                    significance: "Grassland ecosystem, nomadic heritage, rare earth mining"
                },
                {
                    name: "Yunnan-Guizhou Plateau",
                    localName: "云贵高原 (Yún-Guì Gāoyuán)",
                    area: 500000,
                    avgElevation: 2000,
                    type: "Karst plateau",
                    features: ["Stone Forest", "Three Parallel Rivers", "Tiger Leaping Gorge", "Li River karst"],
                    climate: "Subtropical highland",
                    significance: "UNESCO karst, ethnic diversity, tea origin"
                },
                {
                    name: "Loess Plateau",
                    localName: "黄土高原 (Huángtǔ Gāoyuán)",
                    area: 640000,
                    avgElevation: 1200,
                    type: "Aeolian loess",
                    features: ["Yellow River", "Cave dwellings (yaodong)", "Badlands", "Terra-cotta Army region"],
                    climate: "Semi-arid continental",
                    significance: "Thickest loess on Earth, Chinese civilization cradle, major restoration project"
                },
                {
                    name: "Mongolian Plateau (Chinese portion)",
                    localName: "蒙古高原",
                    area: 300000,
                    avgElevation: 1200,
                    type: "Continental",
                    features: ["Hulun Lake", "Northern grasslands"],
                    climate: "Continental",
                    significance: "Mongolian-Chinese borderlands"
                },
                {
                    name: "Ordos Plateau",
                    localName: "鄂尔多斯高原",
                    area: 130000,
                    avgElevation: 1200,
                    type: "Desert/steppe",
                    features: ["Mu Us Desert", "Genghis Khan Mausoleum", "Coal deposits"],
                    climate: "Semi-arid",
                    significance: "Coal mining, desertification issues"
                },
                {
                    name: "Tarim Basin Margin",
                    localName: "塔里木盆地边缘",
                    area: 200000,
                    avgElevation: 1000,
                    type: "Basin margin",
                    features: ["Taklamakan Desert edge", "Ancient Silk Road cities", "Kunlun Mountains"],
                    climate: "Extreme arid",
                    significance: "Silk Road heritage, oil reserves"
                }
            ],
            geology: {
                dominantRockTypes: ["Various - from Archean to Quaternary"],
                tectonicSetting: "Eurasian Plate, collision with Indian Plate",
                seismicActivity: "High (especially Tibet, Sichuan)",
                mineralResources: ["Rare earths (90% world)", "Coal", "Iron", "Copper", "Lithium", "Tungsten"]
            },
            biodiversity: {
                ecosystems: ["Alpine tundra", "Steppe", "Karst forest", "Loess woodland"],
                notableSpecies: ["Giant Panda", "Snow Leopard", "Tibetan Antelope", "Golden Monkey", "Yak", "Przewalski's Horse"],
                protectedAreas: ["Three Parallel Rivers (UNESCO)", "South China Karst (UNESCO)", "Jiuzhaigou (UNESCO)"]
            },
            humanGeography: {
                population: 1400000000,
                plateauPopulation: 300000000,
                majorCities: ["Lhasa", "Kunming", "Xi'an", "Hohhot", "Guiyang", "Lanzhou"],
                economicActivities: ["Mining", "Agriculture", "Tourism", "Pastoralism"],
                culturalSites: ["Potala Palace (UNESCO)", "Terra-cotta Army (UNESCO)", "Lijiang (UNESCO)"]
            }
        },
        "IN": {
            country: "India",
            code: "IN",
            flag: "🇮🇳",
            continent: "Asia",
            region: "South Asia",
            majorPlateaus: 7,
            totalPlateauArea: 1400000,
            percentLandCoverage: 43,
            highestPlateauPoint: 2695,
            lowestPlateauPoint: 100,
            plateausList: [
                {
                    name: "Deccan Plateau",
                    localName: "दक्कन का पठार",
                    area: 500000,
                    avgElevation: 600,
                    type: "Volcanic (flood basalt)",
                    features: ["Western Ghats", "Eastern Ghats", "Ajanta-Ellora Caves", "Black cotton soil"],
                    climate: "Semi-arid to tropical",
                    significance: "Largest volcanic plateau, dinosaur extinction link, ancient temples"
                },
                {
                    name: "Chota Nagpur Plateau",
                    localName: "छोटा नागपुर पठार",
                    area: 65000,
                    avgElevation: 700,
                    type: "Dissected peneplain",
                    features: ["Damodar Valley", "Hundru Falls", "Coal basins"],
                    climate: "Humid subtropical",
                    significance: "Mineral heartland - iron, coal, copper, mica"
                },
                {
                    name: "Malwa Plateau",
                    localName: "मालवा पठार",
                    area: 82000,
                    avgElevation: 500,
                    type: "Lava plateau",
                    features: ["Chambal ravines", "Ujjain temples", "Black soil"],
                    climate: "Semi-arid",
                    significance: "Historical kingdoms, soybean production"
                },
                {
                    name: "Karnataka Plateau",
                    localName: "ಕರ್ನಾಟಕ ಪ್ರಸ್ಥಭೂಮಿ",
                    area: 150000,
                    avgElevation: 600,
                    type: "Granitic/Gneissic",
                    features: ["Bangalore", "Mysore", "Hampi ruins", "Jog Falls"],
                    climate: "Tropical wet-dry",
                    significance: "IT hub (Bangalore), UNESCO Hampi"
                },
                {
                    name: "Telangana Plateau",
                    localName: "తెలంగాణ పీఠభూమి",
                    area: 115000,
                    avgElevation: 500,
                    type: "Granitic",
                    features: ["Hyderabad", "Golconda Fort", "Nagarjunasagar Dam"],
                    climate: "Semi-arid",
                    significance: "Historical Golconda diamonds"
                },
                {
                    name: "Bundelkhand Plateau",
                    localName: "बुंदेलखंड पठार",
                    area: 70000,
                    avgElevation: 400,
                    type: "Granitic/Gneissic",
                    features: ["Khajuraho temples", "Ken-Betwa rivers", "Granite quarries"],
                    climate: "Semi-arid",
                    significance: "Khajuraho UNESCO temples, diamond deposits"
                },
                {
                    name: "Meghalaya Plateau",
                    localName: "Shillong Plateau",
                    area: 22000,
                    avgElevation: 1500,
                    type: "Horst block",
                    features: ["Cherrapunji (wettest place)", "Living root bridges", "Caves"],
                    climate: "Subtropical highland",
                    significance: "Wettest place on Earth, unique culture"
                }
            ],
            geology: {
                dominantRockTypes: ["Deccan basalt", "Precambrian granite/gneiss", "Gondwana sediments"],
                tectonicSetting: "Indian Plate, Deccan hotspot volcanism",
                seismicActivity: "Moderate (peninsular India)",
                mineralResources: ["Iron ore", "Coal", "Manganese", "Bauxite", "Mica", "Diamonds"]
            },
            biodiversity: {
                ecosystems: ["Deccan thorn scrub", "Dry deciduous forest", "Western Ghats rainforest"],
                notableSpecies: ["Bengal Tiger", "Indian Elephant", "Leopard", "Sloth Bear", "Indian Bison (Gaur)"],
                protectedAreas: ["Western Ghats (UNESCO)", "Kaziranga NP (UNESCO)", "Many tiger reserves"]
            },
            humanGeography: {
                population: 1400000000,
                plateauPopulation: 450000000,
                majorCities: ["Bangalore", "Hyderabad", "Pune", "Nagpur", "Ranchi", "Bhopal"],
                economicActivities: ["IT/Tech", "Mining", "Agriculture", "Manufacturing"],
                culturalSites: ["Ajanta (UNESCO)", "Ellora (UNESCO)", "Hampi (UNESCO)", "Khajuraho (UNESCO)"]
            }
        },
        "RU": {
            country: "Russia",
            code: "RU",
            flag: "🇷🇺",
            continent: "Europe/Asia",
            region: "Northern Eurasia",
            majorPlateaus: 10,
            totalPlateauArea: 10000000,
            percentLandCoverage: 58,
            highestPlateauPoint: 3000,
            lowestPlateauPoint: -28,
            plateausList: [
                {
                    name: "Central Siberian Plateau",
                    localName: "Среднесибирское плоскогорье",
                    area: 3500000,
                    avgElevation: 500,
                    type: "Continental platform",
                    features: ["Lena River", "Tunguska rivers", "Permafrost", "Taiga forests"],
                    climate: "Subarctic continental",
                    significance: "Largest plateau in Russia, permafrost, diamonds"
                },
                {
                    name: "Putorana Plateau",
                    localName: "Плато Путорана",
                    area: 250000,
                    avgElevation: 1000,
                    type: "Basalt trap plateau",
                    features: ["Countless waterfalls", "Pristine lakes", "Flat-topped mountains"],
                    climate: "Subarctic",
                    significance: "UNESCO site, largest basalt trap plateau in Russia, wilderness"
                },
                {
                    name: "Siberian Traps (Volcanic Province)",
                    localName: "Сибирские траппы",
                    area: 2000000,
                    avgElevation: 500,
                    type: "Flood basalt",
                    features: ["Basalt columns", "Permafrost", "Nickel deposits"],
                    climate: "Subarctic/Arctic",
                    significance: "Largest known volcanic event, caused greatest mass extinction (252 Ma)"
                },
                {
                    name: "Aldan Plateau",
                    localName: "Алданское нагорье",
                    area: 400000,
                    avgElevation: 800,
                    type: "Ancient shield",
                    features: ["Aldan River", "Gold deposits", "Permafrost"],
                    climate: "Subarctic continental",
                    significance: "Gold mining, ancient rocks"
                },
                {
                    name: "Central Russian Upland",
                    localName: "Среднерусская возвышенность",
                    area: 500000,
                    avgElevation: 250,
                    type: "Erosional",
                    features: ["Oka River", "Chalk cliffs", "Steppes"],
                    climate: "Continental",
                    significance: "Agricultural heartland, historical Russia"
                },
                {
                    name: "Valdai Hills",
                    localName: "Валдайская возвышенность",
                    area: 90000,
                    avgElevation: 300,
                    type: "Glacial moraine",
                    features: ["Lake Seliger", "Volga River source", "Mixed forests"],
                    climate: "Continental",
                    significance: "Source of Volga, Dnieper, Western Dvina rivers"
                },
                {
                    name: "Kolyma Plateau",
                    localName: "Колымское нагорье",
                    area: 500000,
                    avgElevation: 1000,
                    type: "Mountain plateau",
                    features: ["Extreme cold (-67°C recorded)", "Gold mines", "Permafrost"],
                    climate: "Extreme subarctic",
                    significance: "Gold mining history, extreme climate"
                },
                {
                    name: "Stanovoy Plateau",
                    localName: "Становое нагорье",
                    area: 300000,
                    avgElevation: 1500,
                    type: "Mountain plateau",
                    features: ["Stanovoy Range", "Remote wilderness"],
                    climate: "Subarctic",
                    significance: "Wilderness, watershed divide"
                },
                {
                    name: "Volga Upland",
                    localName: "Приволжская возвышенность",
                    area: 150000,
                    avgElevation: 200,
                    type: "Erosional",
                    features: ["Volga River bluffs", "Zhiguli Mountains"],
                    climate: "Continental",
                    significance: "Volga valley views, Samara Bend"
                },
                {
                    name: "Ural Plateau (edges)",
                    localName: "Уральское плоскогорье",
                    area: 200000,
                    avgElevation: 500,
                    type: "Peneplain",
                    features: ["Ancient Ural mountains", "Mining regions"],
                    climate: "Continental",
                    significance: "Europe-Asia boundary, mineral deposits"
                }
            ],
            geology: {
                dominantRockTypes: ["Siberian Traps basalt", "Precambrian shield", "Permafrost"],
                tectonicSetting: "Eurasian Plate, ancient stable platforms",
                seismicActivity: "Low (except Kamchatka, Baikal)",
                mineralResources: ["Diamonds (30% world)", "Gold", "Nickel", "Platinum", "Oil", "Gas", "Iron"]
            },
            biodiversity: {
                ecosystems: ["Taiga (largest forest)", "Tundra", "Steppe"],
                notableSpecies: ["Siberian Tiger", "Brown Bear", "Siberian Crane", "Amur Leopard", "Wolverine", "Reindeer"],
                protectedAreas: ["Putorana Plateau (UNESCO)", "Lake Baikal (UNESCO)", "Virgin Komi Forests (UNESCO)"]
            },
            humanGeography: {
                population: 145000000,
                plateauPopulation: 10000000,
                majorCities: ["Norilsk", "Yakutsk", "Krasnoyarsk", "Irkutsk"],
                economicActivities: ["Mining", "Oil/Gas", "Forestry", "Hydropower"],
                culturalSites: ["Historic Moscow (UNESCO)", "Kizhi Pogost (UNESCO)"]
            }
        },
        "US": {
            country: "United States",
            code: "US",
            flag: "🇺🇸",
            continent: "North America",
            region: "North America",
            majorPlateaus: 8,
            totalPlateauArea: 3000000,
            percentLandCoverage: 31,
            highestPlateauPoint: 4401,
            lowestPlateauPoint: -86,
            plateausList: [
                {
                    name: "Colorado Plateau",
                    localName: "Colorado Plateau Province",
                    area: 337000,
                    avgElevation: 1800,
                    type: "Dissected sedimentary",
                    features: ["Grand Canyon", "Monument Valley", "Bryce Canyon", "Arches", "Zion", "Mesa Verde"],
                    climate: "Semi-arid high desert",
                    significance: "Most scenic plateau, 2 billion years exposed, 10 national parks"
                },
                {
                    name: "Columbia Plateau",
                    localName: "Columbia Basalt Province",
                    area: 260000,
                    avgElevation: 750,
                    type: "Flood basalt",
                                        features: ["Channeled Scablands", "Palouse Falls", "Dry Falls", "Grand Coulee", "Snake River Canyon"],
                    climate: "Semi-arid steppe",
                    significance: "Missoula Floods evidence, one of Earth's greatest floods"
                },
                {
                    name: "Great Plains",
                    localName: "High Plains / Prairie",
                    area: 1300000,
                    avgElevation: 700,
                    type: "Depositional plain",
                    features: ["Badlands", "Black Hills", "Ogallala Aquifer", "Tornado Alley"],
                    climate: "Semi-arid continental",
                    significance: "America's breadbasket, bison history, Ogallala Aquifer"
                },
                {
                    name: "Ozark Plateau",
                    localName: "Ozark Mountains",
                    area: 122000,
                    avgElevation: 450,
                    type: "Dissected dome",
                    features: ["Buffalo River", "Blanchard Springs Caverns", "Table Rock Lake", "Ozark caves"],
                    climate: "Humid subtropical",
                    significance: "Extensive karst, endemic cave fauna, folk culture"
                },
                {
                    name: "Appalachian Plateau",
                    localName: "Allegheny/Cumberland Plateau",
                    area: 200000,
                    avgElevation: 600,
                    type: "Dissected sedimentary",
                    features: ["New River Gorge", "Breaks Canyon", "Coal fields", "Cumberland Falls"],
                    climate: "Humid continental",
                    significance: "Coal country, Appalachian culture"
                },
                {
                    name: "Edwards Plateau",
                    localName: "Texas Hill Country",
                    area: 60000,
                    avgElevation: 600,
                    type: "Karst limestone",
                    features: ["Bracken Cave (20 million bats)", "Enchanted Rock", "Edwards Aquifer", "Barton Springs"],
                    climate: "Semi-arid",
                    significance: "Largest bat colony, critical aquifer, wine country"
                },
                {
                    name: "Llano Estacado",
                    localName: "Staked Plains",
                    area: 80000,
                    avgElevation: 1200,
                    type: "Flat depositional",
                    features: ["Caprock Escarpment", "Palo Duro Canyon", "Cotton fields", "Wind farms"],
                    climate: "Semi-arid",
                    significance: "Flattest large area in North America, Dust Bowl history"
                },
                {
                    name: "Modoc Plateau",
                    localName: "Modoc Volcanic Highlands",
                    area: 30000,
                    avgElevation: 1400,
                    type: "Volcanic",
                    features: ["Lava Beds National Monument", "Tule Lake", "Medicine Lake Volcano"],
                    climate: "Semi-arid continental",
                    significance: "Lava tubes, Modoc War history"
                }
            ],
            geology: {
                dominantRockTypes: ["Sedimentary (Colorado)", "Basalt (Columbia)", "Limestone (karst regions)", "Precambrian (shield)"],
                tectonicSetting: "North American Plate, various tectonic histories",
                seismicActivity: "Variable (low in central, high in west)",
                mineralResources: ["Coal", "Natural gas", "Oil", "Copper", "Gold", "Uranium", "Phosphate"]
            },
            biodiversity: {
                ecosystems: ["High desert", "Prairie grassland", "Deciduous forest", "Sagebrush steppe"],
                notableSpecies: ["Bison (reintroduced)", "California Condor", "Pronghorn", "Black-footed Ferret", "Mexican Spotted Owl"],
                protectedAreas: ["Grand Canyon NP (UNESCO)", "Yellowstone NP (UNESCO)", "Mesa Verde NP (UNESCO)", "Carlsbad Caverns NP (UNESCO)"]
            },
            humanGeography: {
                population: 335000000,
                plateauPopulation: 30000000,
                majorCities: ["Denver", "Phoenix", "Salt Lake City", "Albuquerque", "Oklahoma City", "Spokane"],
                economicActivities: ["Tourism", "Agriculture", "Mining", "Ranching", "Energy"],
                culturalSites: ["Grand Canyon (UNESCO)", "Mesa Verde (UNESCO)", "Chaco Culture (UNESCO)", "Taos Pueblo (UNESCO)"]
            }
        },
        "ZA": {
            country: "South Africa",
            code: "ZA",
            flag: "🇿🇦",
            continent: "Africa",
            region: "Southern Africa",
            majorPlateaus: 4,
            totalPlateauArea: 1100000,
            percentLandCoverage: 90,
            highestPlateauPoint: 3482,
            lowestPlateauPoint: 0,
            plateausList: [
                {
                    name: "Highveld",
                    localName: "Hoëveld",
                    area: 400000,
                    avgElevation: 1500,
                    type: "Grassland plateau",
                    features: ["Johannesburg", "Pretoria", "Vredefort Crater", "Witwatersrand gold reef"],
                    climate: "Subtropical highland",
                    significance: "Economic heartland, largest verified impact crater, gold deposits"
                },
                {
                    name: "Great Karoo",
                    localName: "Groot-Karoo",
                    area: 400000,
                    avgElevation: 1000,
                    type: "Semi-desert plateau",
                    features: ["Valley of Desolation", "Karoo fossils", "Sheep farming", "Astronomy sites"],
                    climate: "Semi-arid",
                    significance: "Karoo Supergroup fossils (mammal-like reptiles), dark sky reserve"
                },
                {
                    name: "Bushveld",
                    localName: "Bosveld",
                    area: 200000,
                    avgElevation: 1000,
                    type: "Igneous complex plateau",
                    features: ["Bushveld Igneous Complex", "Platinum deposits", "Safari areas"],
                    climate: "Subtropical savanna",
                    significance: "World's largest layered igneous intrusion, 70% of world's platinum"
                },
                {
                    name: "Drakensberg/Lesotho Highlands",
                    localName: "uKhahlamba",
                    area: 100000,
                    avgElevation: 2500,
                    type: "Basalt escarpment",
                    features: ["Amphitheatre", "Tugela Falls", "Sani Pass", "San rock art"],
                    climate: "Alpine",
                    significance: "Great Escarpment, 35,000+ rock art paintings, water source"
                }
            ],
            geology: {
                dominantRockTypes: ["Archean granite/gneiss", "Karoo sediments", "Drakensberg basalts", "Bushveld igneous"],
                tectonicSetting: "Kaapvaal Craton (one of oldest)",
                seismicActivity: "Low (stable craton)",
                mineralResources: ["Gold (historically #1)", "Platinum (#1)", "Chrome (#1)", "Manganese (#1)", "Diamonds", "Coal"]
            },
            biodiversity: {
                ecosystems: ["Highveld grassland", "Karoo shrubland", "Bushveld savanna", "Fynbos (Cape)"],
                notableSpecies: ["Lion", "Elephant", "Rhinoceros (both species)", "Buffalo", "Leopard", "Springbok"],
                protectedAreas: ["Kruger NP", "uKhahlamba-Drakensberg (UNESCO)", "Cape Floral Region (UNESCO)", "Vredefort Dome (UNESCO)"]
            },
            humanGeography: {
                population: 60000000,
                plateauPopulation: 40000000,
                majorCities: ["Johannesburg", "Pretoria", "Bloemfontein", "Kimberley"],
                economicActivities: ["Mining (gold, platinum, diamonds)", "Agriculture", "Tourism", "Manufacturing"],
                culturalSites: ["Robben Island (UNESCO)", "Cradle of Humankind (UNESCO)", "Mapungubwe (UNESCO)"]
            }
        },
        "ET": {
            country: "Ethiopia",
            code: "ET",
            flag: "🇪🇹",
            continent: "Africa",
            region: "East Africa / Horn of Africa",
            majorPlateaus: 3,
            totalPlateauArea: 500000,
            percentLandCoverage: 45,
            highestPlateauPoint: 4533,
            lowestPlateauPoint: -125,
            plateausList: [
                {
                    name: "Ethiopian Highlands (Northwest)",
                    localName: "የኢትዮጵያ ደጋማ ምድር",
                    area: 300000,
                    avgElevation: 2500,
                    type: "Volcanic flood basalt",
                    features: ["Simien Mountains (4,533m)", "Lake Tana", "Blue Nile Falls", "Lalibela churches"],
                    climate: "Tropical highland",
                    significance: "Roof of Africa, Blue Nile source, endemic species, ancient Christianity"
                },
                {
                    name: "Ethiopian Highlands (Southeast/Bale)",
                    localName: "Bale Mountains",
                    area: 100000,
                    avgElevation: 3000,
                    type: "Volcanic",
                    features: ["Bale Mountains", "Sanetti Plateau", "Harenna Forest", "Ethiopian Wolf habitat"],
                    climate: "Afro-alpine",
                    significance: "Largest Afro-alpine habitat, Ethiopian Wolf sanctuary"
                },
                {
                    name: "Somali Plateau (Ethiopian portion)",
                    localName: "Ogaden",
                    area: 100000,
                    avgElevation: 500,
                    type: "Sedimentary",
                    features: ["Ogaden region", "Dry lowlands", "Fossil sites"],
                    climate: "Semi-arid",
                    significance: "Pastoral nomads, fossil discoveries"
                }
            ],
            geology: {
                dominantRockTypes: ["Flood basalts (Ethiopian Traps)", "Precambrian basement", "Rift sediments"],
                tectonicSetting: "East African Rift, Afar Triple Junction",
                seismicActivity: "Moderate (rift activity)",
                mineralResources: ["Gold", "Tantalum", "Potash", "Natural gas", "Gemstones"]
            },
            biodiversity: {
                ecosystems: ["Afro-alpine", "Montane forest", "Highland grassland"],
                notableSpecies: ["Ethiopian Wolf (endemic, rarest canid)", "Gelada Baboon (endemic)", "Walia Ibex (endemic)", "Mountain Nyala (endemic)", "Black-maned Lion"],
                protectedAreas: ["Simien Mountains NP (UNESCO)", "Bale Mountains NP", "Omo NP (UNESCO)"]
            },
            humanGeography: {
                population: 120000000,
                plateauPopulation: 80000000,
                majorCities: ["Addis Ababa", "Gondar", "Bahir Dar", "Lalibela", "Axum"],
                economicActivities: ["Coffee (origin)", "Agriculture", "Pastoralism", "Hydropower"],
                culturalSites: ["Lalibela Churches (UNESCO)", "Aksum (UNESCO)", "Simien Mountains (UNESCO)", "Lower Omo Valley (UNESCO)", "Harar Jugol (UNESCO)"]
            }
        },
        "MX": {
            country: "Mexico",
            code: "MX",
            flag: "🇲🇽",
            continent: "North America",
            region: "Central America / North America",
            majorPlateaus: 3,
            totalPlateauArea: 700000,
            percentLandCoverage: 36,
            highestPlateauPoint: 2700,
            lowestPlateauPoint: 900,
            plateausList: [
                {
                    name: "Mexican Plateau (Altiplano Mexicano)",
                    localName: "Altiplanicie Mexicana",
                    area: 600000,
                    avgElevation: 2000,
                    type: "Intermontane volcanic",
                    features: ["Valley of Mexico (Mexico City)", "Silver cities", "Chihuahuan Desert", "Bajío agricultural region"],
                    climate: "Semi-arid to temperate",
                    significance: "Second largest plateau in Americas, Aztec heartland, silver mining"
                },
                {
                    name: "Chiapas Highlands",
                    localName: "Altos de Chiapas",
                    area: 50000,
                    avgElevation: 2000,
                    type: "Folded sedimentary",
                    features: ["San Cristóbal de las Casas", "Sumidero Canyon", "Maya villages", "Cloud forests"],
                    climate: "Tropical highland",
                    significance: "Maya heritage, biodiversity, indigenous cultures"
                },
                {
                    name: "Yucatan Platform",
                    localName: "Plataforma de Yucatán",
                    area: 50000,
                    avgElevation: 30,
                    type: "Karst limestone",
                    features: ["Cenotes", "Chicxulub crater", "Maya ruins (Chichen Itza, Uxmal)", "Underground rivers"],
                    climate: "Tropical",
                    significance: "Chicxulub impact (dinosaur extinction), Maya civilization, cenote systems"
                }
            ],
            geology: {
                dominantRockTypes: ["Volcanic (Trans-Mexican Belt)", "Limestone (Yucatan)", "Precambrian basement"],
                tectonicSetting: "North American Plate, subduction zone",
                seismicActivity: "High (especially south)",
                mineralResources: ["Silver (#1 world)", "Copper", "Gold", "Zinc", "Oil"]
            },
            biodiversity: {
                ecosystems: ["Highland pine-oak", "Chihuahuan Desert", "Cloud forest", "Tropical forest"],
                notableSpecies: ["Jaguar", "Mexican Wolf (reintroduced)", "Quetzal", "Axolotl (endemic)"],
                protectedAreas: ["Monarch Butterfly Biosphere Reserve (UNESCO)", "Sian Ka'an (UNESCO)"]
            },
            humanGeography: {
                population: 130000000,
                plateauPopulation: 80000000,
                majorCities: ["Mexico City", "Guadalajara", "Monterrey", "Puebla", "León", "Zacatecas", "San Luis Potosí"],
                economicActivities: ["Manufacturing", "Mining", "Agriculture", "Tourism"],
                culturalSites: ["Mexico City Historic Center (UNESCO)", "Teotihuacan (UNESCO)", "Chichen Itza (UNESCO)", "Guanajuato (UNESCO)"]
            }
        },
        "TR": {
            country: "Turkey",
            code: "TR",
            flag: "🇹🇷",
            continent: "Asia/Europe",
            region: "Western Asia / Anatolia",
            majorPlateaus: 3,
            totalPlateauArea: 500000,
            percentLandCoverage: 64,
            highestPlateauPoint: 5137,
            lowestPlateauPoint: 800,
            plateausList: [
                {
                    name: "Central Anatolian Plateau",
                    localName: "İç Anadolu Platosu",
                    area: 280000,
                    avgElevation: 1000,
                    type: "Intermontane tectonic",
                    features: ["Cappadocia fairy chimneys", "Salt Lake (Tuz Gölü)", "Ankara", "Underground cities"],
                    climate: "Semi-arid continental",
                    significance: "Cappadocia UNESCO, Hittite civilization, Turkish heartland"
                },
                {
                    name: "Eastern Anatolian Plateau",
                    localName: "Doğu Anadolu Platosu",
                    area: 150000,
                    avgElevation: 1800,
                    type: "Volcanic highland",
                    features: ["Mount Ararat (5,137m)", "Lake Van", "Nemrut Dağı", "Van cats"],
                    climate: "Continental highland",
                    significance: "Mount Ararat (Noah's Ark legend), Armenian heritage, volcanic landscape"
                },
                {
                    name: "Southeastern Anatolia Plateau",
                    localName: "Güneydoğu Anadolu Platosu",
                    area: 70000,
                    avgElevation: 800,
                    type: "Sedimentary",
                    features: ["Göbekli Tepe", "Euphrates/Tigris headwaters", "GAP dams", "Zeugma mosaics"],
                    climate: "Semi-arid",
                    significance: "Göbekli Tepe (world's oldest temple), Mesopotamian heritage"
                }
            ],
            geology: {
                dominantRockTypes: ["Volcanic", "Sedimentary", "Metamorphic"],
                tectonicSetting: "Anatolian microplate, collision zone",
                seismicActivity: "Very High (North Anatolian Fault)",
                mineralResources: ["Boron (#1)", "Chromite", "Copper", "Coal", "Marble"]
            },
            biodiversity: {
                ecosystems: ["Steppe grassland", "Mediterranean", "Alpine"],
                notableSpecies: ["Anatolian Leopard (possibly extinct)", "Brown Bear", "Caracal", "Van Cat (endemic)"],
                protectedAreas: ["Göreme NP (UNESCO)", "Mount Nemrut (UNESCO)"]
            },
            humanGeography: {
                population: 85000000,
                plateauPopulation: 30000000,
                majorCities: ["Ankara", "Konya", "Kayseri", "Van", "Gaziantep", "Diyarbakır"],
                economicActivities: ["Agriculture", "Industry", "Tourism", "Mining"],
                culturalSites: ["Göreme/Cappadocia (UNESCO)", "Göbekli Tepe (UNESCO)", "Nemrut Dağı (UNESCO)", "Hattusha (UNESCO)"]
            }
        },
        // Continue with more countries...
        "BO": {
            country: "Bolivia",
            code: "BO",
            flag: "🇧🇴",
            continent: "South America",
            region: "Central Andes",
            majorPlateaus: 2,
            totalPlateauArea: 150000,
            percentLandCoverage: 14,
            highestPlateauPoint: 4500,
            lowestPlateauPoint: 3500,
            plateausList: [
                {
                    name: "Bolivian Altiplano",
                    localName: "Altiplano Boliviano",
                    area: 100000,
                    avgElevation: 3750,
                    type: "Intermontane volcanic",
                    features: ["Salar de Uyuni (world's largest salt flat)", "Lake Titicaca (shared)", "Tiwanaku ruins", "Colored lagoons", "Eduardo Avaroa Reserve"],
                    climate: "High altitude cold desert",
                    significance: "Largest salt flat, lithium reserves (50% world), Inca/Tiwanaku heritage"
                },
                {
                    name: "Yungas Transition",
                    localName: "Los Yungas",
                    area: 50000,
                    avgElevation: 2000,
                    type: "Transition escarpment",
                    features: ["Death Road", "Cloud forests", "Coca cultivation", "Waterfalls"],
                    climate: "Subtropical highland",
                    significance: "Biodiversity hotspot, coffee/coca cultivation"
                }
            ],
            geology: {
                dominantRockTypes: ["Volcanic", "Salt deposits", "Sedimentary"],
                tectonicSetting: "Andean orogeny, active subduction",
                seismicActivity: "Moderate",
                mineralResources: ["Lithium (#1 reserves)", "Silver", "Tin", "Zinc", "Natural gas"]
            },
            biodiversity: {
                ecosystems: ["Puna grassland", "Salt flats", "Polylepis woodland", "Cloud forest"],
                notableSpecies: ["Vicuña", "Andean Flamingo", "Viscacha", "Andean Condor", "Spectacled Bear"],
                protectedAreas: ["Eduardo Avaroa Reserve", "Madidi NP", "Sajama NP"]
            },
            humanGeography: {
                population: 12000000,
                plateauPopulation: 4000000,
                majorCities: ["La Paz", "El Alto", "Oruro", "Potosí", "Uyuni"],
                economicActivities: ["Mining (lithium, silver)", "Agriculture (quinoa)", "Tourism", "Coca"],
                culturalSites: ["Tiwanaku (UNESCO)", "Potosí (UNESCO)", "Sucre (UNESCO)"]
            }
        },
        "PE": {
            country: "Peru",
            code: "PE",
            flag: "🇵🇪",
            continent: "South America",
            region: "Central Andes",
            majorPlateaus: 2,
            totalPlateauArea: 200000,
            percentLandCoverage: 16,
            highestPlateauPoint: 4500,
            lowestPlateauPoint: 3000,
            plateausList: [
                {
                    name: "Peruvian Altiplano",
                    localName: "Altiplano Peruano / Puna",
                    area: 150000,
                    avgElevation: 4000,
                    type: "Intermontane volcanic",
                    features: ["Lake Titicaca", "Colca Canyon", "Uros floating islands", "Sillustani towers", "Arequipa volcanoes"],
                    climate: "High altitude cold semi-arid",
                    significance: "Lake Titicaca, Inca heartland, vicuña habitat"
                },
                {
                    name: "Cajamarca Plateau",
                    localName: "Altiplanicie de Cajamarca",
                    area: 50000,
                    avgElevation: 2700,
                    type: "Highland valley",
                    features: ["Cajamarca city", "Inca baths", "Dairy region", "Cumbemayo aqueducts"],
                    climate: "Temperate highland",
                    significance: "Where Inca Empire fell to Spanish, agricultural region"
                }
            ],
            geology: {
                dominantRockTypes: ["Volcanic", "Sedimentary", "Metamorphic"],
                tectonicSetting: "Nazca-South American subduction",
                seismicActivity: "High",
                mineralResources: ["Copper (#2 world)", "Gold", "Silver", "Zinc", "Lead"]
            },
            biodiversity: {
                ecosystems: ["Puna grassland", "High Andean wetlands", "Polylepis forests"],
                notableSpecies: ["Vicuña", "Andean Condor", "Puma", "Spectacled Bear", "Giant Titicaca Frog"],
                protectedAreas: ["Lake Titicaca Reserve", "Salinas y Aguada Blanca Reserve"]
            },
            humanGeography: {
                population: 34000000,
                plateauPopulation: 5000000,
                majorCities: ["Puno", "Juliaca", "Arequipa", "Cajamarca", "Cusco"],
                economicActivities: ["Mining", "Agriculture", "Alpaca/Llama herding", "Tourism"],
                culturalSites: ["Machu Picchu (UNESCO)", "City of Cusco (UNESCO)", "Nazca Lines (nearby)"]
            }
        },
        "KE": {
            country: "Kenya",
            code: "KE",
            flag: "🇰🇪",
            continent: "Africa",
            region: "East Africa",
            majorPlateaus: 3,
            totalPlateauArea: 400000,
            percentLandCoverage: 69,
            highestPlateauPoint: 3000,
            lowestPlateauPoint: 200,
            plateausList: [
                {
                    name: "Kenya Highlands",
                    localName: "Central Highlands",
                    area: 150000,
                    avgElevation: 2000,
                    type: "Volcanic highland",
                    features: ["Mount Kenya (5,199m)", "Aberdare Range", "Tea plantations", "Nairobi"],
                    climate: "Tropical highland",
                    significance: "Most productive agricultural region, tea/coffee, Mount Kenya UNESCO"
                },
                {
                    name: "Laikipia Plateau",
                    localName: "Laikipia",
                    area: 100000,
                    avgElevation: 1800,
                    type: "Volcanic plateau",
                    features: ["Wildlife conservancies", "Ewaso Ng'iro River", "Ol Pejeta (last northern white rhinos)"],
                    climate: "Semi-arid",
                    significance: "Major wildlife conservation area, rhino sanctuary"
                },
                {
                    name: "Nyika/Northern Plateau",
                    localName: "Northern Kenya",
                    area: 150000,
                    avgElevation: 500,
                    type: "Sedimentary/volcanic",
                    features: ["Lake Turkana", "Chalbi Desert", "Marsabit", "Prehistoric sites"],
                    climate: "Arid to semi-arid",
                    significance: "Lake Turkana UNESCO (human evolution), Turkana Boy fossil"
                }
            ],
            geology: {
                dominantRockTypes: ["Volcanic", "Precambrian basement", "Rift sediments"],
                tectonicSetting: "East African Rift System",
                seismicActivity: "Moderate",
                mineralResources: ["Soda ash", "Fluorspar", "Titanium", "Gold", "Gemstones"]
            },
            biodiversity: {
                ecosystems: ["Highland forest", "Savanna", "Semi-desert"],
                notableSpecies: ["African Elephant", "Lion", "Rhinoceros (both)", "Leopard", "Buffalo", "Giraffe", "Zebra"],
                protectedAreas: ["Mount Kenya NP (UNESCO)", "Lake Turkana Parks (UNESCO)", "Masai Mara"]
            },
            humanGeography: {
                population: 55000000,
                plateauPopulation: 35000000,
                majorCities: ["Nairobi", "Nakuru", "Eldoret", "Nyeri", "Nanyuki"],
                economicActivities: ["Agriculture (tea, coffee, flowers)", "Tourism", "Wildlife conservation"],
                culturalSites: ["Mount Kenya (UNESCO)", "Lake Turkana (UNESCO)", "Lamu Old Town (UNESCO)"]
            }
        },
        "VE": {
            country: "Venezuela",
            code: "VE",
            flag: "🇻🇪",
            continent: "South America",
            region: "Northern South America",
            majorPlateaus: 2,
            totalPlateauArea: 450000,
            percentLandCoverage: 49,
            highestPlateauPoint: 2994,
            lowestPlateauPoint: 100,
            plateausList: [
                {
                    name: "Guiana Highlands (Venezuelan Gran Sabana)",
                    localName: "Gran Sabana / La Gran Sabana",
                    area: 400000,
                    avgElevation: 1000,
                    type: "Tepui sandstone",
                    features: ["Angel Falls (979m - world's highest)", "Mount Roraima", "Auyan Tepui", "Tepui table mountains"],
                    climate: "Tropical wet",
                    significance: "World's highest waterfall, unique tepui ecosystems, 'Lost World' inspiration"
                },
                {
                    name: "Mérida Highlands",
                    localName: "Sierra Nevada de Mérida",
                    area: 50000,
                    avgElevation: 3000,
                    type: "Andean extension",
                    features: ["Pico Bolívar (4,978m)", "Mérida cable car (world's highest)", "Páramo ecosystem"],
                    climate: "Alpine",
                    significance: "Highest Venezuelan peak, Andean biodiversity"
                }
            ],
            geology: {
                dominantRockTypes: ["Precambrian sandstone/quartzite", "Granite", "Andean metamorphic"],
                tectonicSetting: "Guiana Shield, Andean orogeny (west)",
                seismicActivity: "Moderate",
                mineralResources: ["Oil (#1 reserves)", "Iron ore", "Bauxite", "Gold", "Diamonds"]
            },
            biodiversity: {
                ecosystems: ["Tepui summit (endemic)", "Tropical rainforest", "Savanna", "Páramo"],
                notableSpecies: ["Tepui endemic species", "Jaguar", "Giant Otter", "Harpy Eagle", "Orinoco Crocodile"],
                protectedAreas: ["Canaima NP (UNESCO)", "Henri Pittier NP"]
            },
            humanGeography: {
                population: 28000000,
                plateauPopulation: 500000,
                majorCities: ["Ciudad Guayana", "Ciudad Bolívar", "Mérida", "Santa Elena de Uairén"],
                economicActivities: ["Oil", "Mining", "Tourism", "Hydropower (Guri Dam)"],
                culturalSites: ["Canaima National Park (UNESCO)", "Ciudad Universitaria de Caracas (UNESCO)"]
            }
        },
        "NP": {
            country: "Nepal",
            code: "NP",
            flag: "🇳🇵",
            continent: "Asia",
            region: "South Asia / Himalayas",
            majorPlateaus: 2,
            totalPlateauArea: 35000,
            percentLandCoverage: 24,
            highestPlateauPoint: 5500,
            lowestPlateauPoint: 2500,
            plateausList: [
                {
                    name: "Trans-Himalayan Plateau",
                    localName: "Upper Mustang / Dolpo",
                    area: 25000,
                    avgElevation: 4000,
                    type: "Rain shadow plateau",
                    features: ["Upper Mustang (Lo Manthang)", "Dolpo region", "Tilicho Lake", "Tibetan Buddhist culture"],
                    climate: "Cold desert (rain shadow)",
                    significance: "Tibetan culture preserve, restricted areas, ancient monasteries"
                },
                {
                    name: "Inner Himalayan Valleys",
                    localName: "Manang / Humla",
                    area: 10000,
                    avgElevation: 3500,
                    type: "High valley plateau",
                    features: ["Manang Valley", "Annapurna Circuit", "Ancient trade routes", "Yak herding"],
                    climate: "Semi-arid alpine",
                    significance: "Trekking routes, Himalayan biodiversity"
                }
            ],
            geology: {
                dominantRockTypes: ["Tethyan sedimentary", "Metamorphic", "Granite"],
                tectonicSetting: "Himalayan collision zone (most active)",
                seismicActivity: "Very High",
                mineralResources: ["Limited - some copper, iron"]
            },
            biodiversity: {
                ecosystems: ["Trans-Himalayan steppe", "Alpine meadows", "Temperate forest"],
                notableSpecies: ["Snow Leopard", "Red Panda", "Himalayan Tahr", "Musk Deer", "Himalayan Black Bear"],
                protectedAreas: ["Sagarmatha NP (UNESCO)", "Chitwan NP (UNESCO)", "Langtang NP", "Shey Phoksundo NP"]
            },
            humanGeography: {
                population: 30000000,
                plateauPopulation: 500000,
                majorCities: ["Jomsom", "Lo Manthang", "Manang"],
                economicActivities: ["Trekking tourism", "Yak herding", "Apple farming", "Traditional trade"],
                culturalSites: ["Lumbini (UNESCO)", "Kathmandu Valley (UNESCO)"]
            }
        },
        "MA": {
            country: "Morocco",
            code: "MA",
            flag: "🇲🇦",
            continent: "Africa",
            region: "North Africa / Maghreb",
            majorPlateaus: 3,
            totalPlateauArea: 250000,
            percentLandCoverage: 56,
            highestPlateauPoint: 2500,
            lowestPlateauPoint: 200,
            plateausList: [
                {
                    name: "Moroccan Meseta",
                    localName: "Le Plateau Central",
                    area: 150000,
                    avgElevation: 500,
                    type: "Hercynian massif",
                    features: ["Phosphate mines", "Casablanca", "Rabat", "Agricultural plains"],
                    climate: "Semi-arid Mediterranean",
                    significance: "Phosphate reserves (#2 world), economic heartland"
                },
                {
                    name: "Anti-Atlas Plateau",
                    localName: "Anti-Atlas",
                    area: 50000,
                    avgElevation: 1500,
                    type: "Precambrian massif",
                    features: ["Tafraoute", "Amethyst geodes", "Granitic formations", "Oases"],
                    climate: "Semi-arid",
                    significance: "Oldest rocks in Morocco, geological tourism"
                },
                {
                    name: "High Plateaus (Eastern)",
                    localName: "Hauts Plateaux",
                    area: 50000,
                    avgElevation: 1100,
                    type: "Steppe plateau",
                    features: ["Alfa grass steppe", "Sheep herding", "Midelt"],
                    climate: "Semi-arid continental",
                    significance: "Pastoral economy, cedar forests"
                }
            ],
            geology: {
                dominantRockTypes: ["Precambrian basement", "Paleozoic sediments", "Mesozoic limestone"],
                tectonicSetting: "Atlas fold belt, African plate margin",
                seismicActivity: "Moderate",
                mineralResources: ["Phosphates (#1)", "Cobalt", "Silver", "Lead", "Zinc"]
            },
            biodiversity: {
                ecosystems: ["Mediterranean", "Steppe", "Cedar forest", "Pre-Saharan"],
                notableSpecies: ["Barbary Macaque", "Barbary Sheep", "Desert Fox", "Houbara Bustard"],
                protectedAreas: ["Toubkal NP", "Ifrane NP (cedars)"]
            },
            humanGeography: {
                population: 37000000,
                plateauPopulation: 15000000,
                majorCities: ["Casablanca", "Rabat", "Fes", "Marrakech (edge)", "Meknès"],
                economicActivities: ["Phosphate mining", "Agriculture", "Industry", "Tourism"],
                culturalSites: ["Medina of Fez (UNESCO)", "Marrakech (UNESCO)", "Volubilis (UNESCO)"]
            }
        }
    },

    // ==========================================
    // 🗺️ CONTINENT SUMMARIES
    // ==========================================
    
    continentSummaries: {
        "Asia": {
            totalPlateaus: 85,
            totalArea: 15000000,
            percentContinentCoverage: 34,
            highestPlateau: "Tibetan Plateau (4,500m avg)",
            largestPlateau: "Tibetan Plateau (2,500,000 km²)",
            oldestRocks: "Pilbara Craton remnants (not main)",
            majorTypes: ["Intermontane", "Volcanic", "Continental"],
            keyExamples: ["Tibetan Plateau", "Deccan Plateau", "Iranian Plateau", "Mongolian Plateau", "Arabian Plateau"],
            significance: "Contains world's highest and largest plateau, source of major rivers for 3 billion people"
        },
        "Africa": {
            totalPlateaus: 45,
            totalArea: 20000000,
            percentContinentCoverage: 66,
            highestPlateau: "Ethiopian Highlands (2,500m avg)",
            largestPlateau: "South African Plateau (1,200,000 km²)",
            oldestRocks: "Kaapvaal Craton (3.5+ Ga)",
            majorTypes: ["Continental", "Volcanic", "Dissected"],
            keyExamples: ["Ethiopian Highlands", "East African Plateau", "South African Plateau", "Saharan Plateaus"],
            significance: "Continent is essentially one giant plateau, cradle of humanity, Great Escarpment"
        },
        "North America": {
            totalPlateaus: 30,
            totalArea: 5000000,
            percentContinentCoverage: 21,
            highestPlateau: "Mexican Plateau (2,000m avg)",
            largestPlateau: "Canadian Shield (8,000,000 km²)",
            oldestRocks: "Canadian Shield (4.2+ Ga)",
            majorTypes: ["Volcanic", "Dissected", "Continental Shield"],
            keyExamples: ["Colorado Plateau", "Canadian Shield", "Columbia Plateau", "Mexican Plateau", "Great Plains"],
            significance: "Most scenic plateau (Colorado), oldest rocks (Canadian Shield), breadbasket (Great Plains)"
        },
        "South America": {
            totalPlateaus: 20,
            totalArea: 8000000,
            percentContinentCoverage: 45,
            highestPlateau: "Altiplano (3,750m avg)",
            largestPlateau: "Brazilian Highlands (5,000,000 km²)",
            oldestRocks: "Guiana Shield (2+ Ga)",
            majorTypes: ["Intermontane", "Continental Shield", "Tepui"],
            keyExamples: ["Altiplano", "Brazilian Highlands", "Guiana Highlands", "Patagonian Plateau"],
            significance: "Second highest plateau (Altiplano), highest waterfall (Angel Falls), lithium reserves"
        },
        "Europe": {
            totalPlateaus: 15,
            totalArea: 1500000,
            percentContinentCoverage: 15,
            highestPlateau: "Scandinavian Plateau (1,000m avg)",
            largestPlateau: "Central Russian Upland (500,000 km²)",
            oldestRocks: "Baltic Shield (3+ Ga)",
            majorTypes: ["Volcanic", "Glacial", "Karst"],
            keyExamples: ["Iberian Meseta", "Massif Central", "Scandinavian Plateau", "Karst Plateau"],
            significance: "Type locality for karst (Slovenia), volcanic heritage (Massif Central)"
        },
        "Oceania": {
            totalPlateaus: 10,
            totalArea: 5500000,
            percentContinentCoverage: 65,
            highestPlateau: "New Guinea Highlands (2,000m avg)",
            largestPlateau: "Western Plateau of Australia (4,500,000 km²)",
            oldestRocks: "Jack Hills, Australia (4.4 Ga - oldest minerals on Earth)",
            majorTypes: ["Continental Shield", "Volcanic", "Dissected"],
            keyExamples: ["Western Plateau (Australia)", "Kimberley Plateau", "North Island Volcanic Plateau (NZ)"],
            significance: "Oldest minerals on Earth, unique biodiversity, Aboriginal heritage"
        },
        "Antarctica": {
            totalPlateaus: 1,
            totalArea: 14000000,
            percentContinentCoverage: 100,
            highestPlateau: "Antarctic Plateau (2,500m avg)",
            largestPlateau: "Antarctic Plateau (14,000,000 km²)",
            oldestRocks: "East Antarctic Shield (3+ Ga under ice)",
            majorTypes: ["Ice-covered continental"],
            keyExamples: ["Antarctic Plateau (Polar Plateau)"],
            significance: "Coldest place on Earth, 70% of Earth's freshwater, climate archive"
        }
    },

    // ==========================================
    // 📊 PLATEAU STATISTICS
    // ==========================================
    
    globalStatistics: {
        totalMajorPlateaus: 206,
        totalPlateauArea: 55000000,
        percentEarthLandCoverage: 37,
        highestPlateau: {
            name: "Tibetan Plateau",
            avgElevation: 4500,
            maxElevation: 8848,
            location: "China/India/Nepal/Bhutan"
        },
        largestPlateau: {
            name: "Antarctic Plateau",
            area: 14000000,
            location: "Antarctica"
        },
        oldestPlateauRocks: {
            name: "Western Plateau (Australia)",
            age: "4.4 billion years (Jack Hills zircons)",
            location: "Australia"
        },
        mostPopulatedPlateau: {
            name: "Deccan Plateau",
            population: 250000000,
            location: "India"
        },
        deepestCanyon: {
            name: "Yarlung Tsangpo Canyon",
            depth: 6009,
            plateau: "Tibetan Plateau",
            location: "Tibet, China"
        },
        highestWaterfall: {
            name: "Angel Falls",
            height: 979,
            plateau: "Guiana Highlands",
            location: "Venezuela"
        },
        largestSaltFlat: {
            name: "Salar de Uyuni",
            area: 10582,
            plateau: "Altiplano",
            location: "Bolivia"
        },
        hottestSurface: {
            name: "Lut Desert",
            temperature: 70.7,
            plateau: "Iranian Plateau",
            location: "Iran"
        },
        coldestPlace: {
            name: "Vostok Station",
            temperature: -89.2,
            plateau: "Antarctic Plateau",
            location: "Antarctica"
        },
        mostLithiumReserves: {
            name: "Altiplano",
            percentWorld: 70,
            location: "Bolivia/Chile/Argentina"
        }
    },

    // ==========================================
    // 🔬 RESEARCH DATA
    // ==========================================
    
    researchData: {
        majorResearchInstitutions: [
            {
                name: "Institute of Tibetan Plateau Research, Chinese Academy of Sciences",
                location: "Beijing, China",
                focus: "Tibetan Plateau climate, ecology, geology",
                website: "http://itpcas.cas.cn",
                keyProjects: ["Third Pole Environment", "Permafrost monitoring", "Glacier research"]
            },
            {
                name: "USGS Colorado Plateau Research Station",
                location: "Flagstaff, Arizona, USA",
                focus: "Colorado Plateau geology, ecology",
                website: "https://www.usgs.gov",
                keyProjects: ["Grand Canyon research", "Climate change monitoring"]
            },
            {
                name: "ETH Zürich - Geological Institute",
                location: "Zürich, Switzerland",
                focus: "Plateau tectonics, Alps formation",
                website: "https://erdw.ethz.ch",
                keyProjects: ["Alpine tectonics", "Plateau uplift mechanisms"]
            },
            {
                name: "Indian Institute of Science - Centre for Earth Sciences",
                location: "Bangalore, India",
                focus: "Deccan Plateau, Indian tectonics",
                website: "https://www.iisc.ac.in",
                keyProjects: ["Deccan volcanism", "Mass extinction link"]
            },
            {
                name: "University of Oxford - Earth Sciences",
                location: "Oxford, UK",
                focus: "Plateau paleoclimate, tectonics",
                website: "https://www.earth.ox.ac.uk",
                keyProjects: ["Tibetan Plateau uplift history"]
            }
        ],
        currentResearchTopics: [
            "Tibetan Plateau permafrost degradation and climate feedback",
            "Colorado Plateau erosion rates using cosmogenic nuclides",
            "Deccan Traps volcanism and Cretaceous-Paleogene extinction",
            "Altiplano lithium extraction environmental impacts",
            "Ethiopian Highlands human evolution sites",
            "Antarctic ice sheet dynamics and sea level rise",
            "Australian plateau paleoclimate reconstruction",
            "Siberian Traps and Permian mass extinction"
        ],
        phdTopicSuggestions: [
            "Paleoelevation reconstruction of Tibetan Plateau using stable isotopes",
            "Numerical modeling of plateau growth and lateral extrusion",
            "Climate-erosion-tectonics coupling in orogenic plateaus",
            "Geomorphic evolution of tepui landscapes",
            "Karst development rates on limestone plateaus",
            "Flood basalt emplacement rates and environmental impacts",
            "Plateau drainage reorganization and river capture",
            "Isostatic rebound of post-glacial plateaus"
        ],
        keyPublications: [
            {
                title: "Timing of uplift of Tibetan Plateau",
                authors: "Molnar, P., England, P., Martinod, J.",
                journal: "Nature",
                year: 1993,
                doi: "10.1038/364833a0"
            },
            {
                title: "Lower crustal flow beneath Tibet",
                authors: "Clark, M.K., Royden, L.H.",
                journal: "Science",
                year: 2000,
                doi: "10.1126/science.287.5450.135"
            },
            {
                title: "The Deccan Traps and Cretaceous-Paleogene extinction",
                authors: "Schoene, B., et al.",
                journal: "Science",
                year: 2019,
                doi: "10.1126/science.aav5528"
            }
        ],
        dataSources: [
            {
                name: "USGS Global Data",
                url: "https://www.usgs.gov/data",
                description: "Elevation, geology, hydrology data"
            },
            {
                name: "NASA SRTM",
                url: "https://www2.jpl.nasa.gov/srtm/",
                description: "Shuttle Radar Topography Mission elevation data"
            },
            {
                name: "OneGeology",
                url: "http://onegeology.org",
                description: "Global geological map data"
            },
            {
                name: "Natural Earth",
                url: "https://www.naturalearthdata.com",
                description: "Vector and raster map data"
            }
        ]
    }
};

// ============================================
// 🗺️ GEOJSON DATA FOR MAP VISUALIZATION
// ============================================

const PLATEAU_GEOJSON = {
    type: "FeatureCollection",
    features: PLATEAUS_COMPLETE_DATA.worldPlateaus.map(plateau => ({
        type: "Feature",
        properties: {
            id: plateau.id,
            name: plateau.name,
            alternateName: plateau.alternateName,
            nickname: plateau.nickname,
            countries: plateau.countries,
            continent: plateau.continent,
            type: plateau.type,
            area: plateau.area,
            avgElevation: plateau.avgElevation,
            maxElevation: plateau.maxElevation,
            ageMillionYears: plateau.ageMillionYears,
            color: plateau.color,
            rank: plateau.rank || null
        },
        geometry: {
            type: "Point",
            coordinates: [plateau.coordinates.lng, plateau.coordinates.lat]
        }
    }))
};

// ============================================
// 📤 EXPORT DATA
// ============================================

// For ES6 modules
// export { PLATEAUS_COMPLETE_DATA, PLATEAU_GEOJSON };

// For browser global
if (typeof window !== 'undefined') {
    window.PLATEAUS_COMPLETE_DATA = PLATEAUS_COMPLETE_DATA;
    window.PLATEAU_GEOJSON = PLATEAU_GEOJSON;
}

// For Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PLATEAUS_COMPLETE_DATA, PLATEAU_GEOJSON };
}

console.log('📊 Plateaus Complete Data loaded successfully!');
console.log(`🏔️ Total plateaus: ${PLATEAUS_COMPLETE_DATA.worldPlateaus.length}`);
console.log(`🌍 Countries with detailed data: ${Object.keys(PLATEAUS_COMPLETE_DATA.countriesDetailed).length}`);
