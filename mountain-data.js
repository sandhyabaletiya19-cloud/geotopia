// =====================================================
// MOUNTAIN SYSTEMS EXPLORER - COMPLETE DATABASE
// 50 Major Mountain Ranges - Highest to Lowest
// =====================================================

const mountainData = [
    {
        id: 1,
        name: "Himalayas",
        highestPeak: "Mount Everest",
        elevation: 8849,
        image: "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?w=800",
        background: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920",
        continent: "asia",
        countries: ["Nepal", "China", "India", "Bhutan", "Pakistan"],
        flags: ["🇳🇵", "🇨🇳", "🇮🇳", "🇧🇹", "🇵🇰"],
        coords: { lat: 27.98, lng: 86.92, zoom: 6 },
        length: "2,400 km",
        avgElevation: "6,100 m",
        formation: {
            origin: "Collision of Indian and Eurasian tectonic plates",
            age: "50-55 million years ago",
            plates: "Indian Plate & Eurasian Plate"
        },
        peaks: [
            { name: "Mount Everest", elevation: 8849, lat: 27.9881, lng: 86.9250 },
            { name: "Kangchenjunga", elevation: 8586, lat: 27.7025, lng: 88.1475 },
            { name: "Lhotse", elevation: 8516, lat: 27.9617, lng: 86.9330 },
            { name: "Makalu", elevation: 8485, lat: 27.8897, lng: 87.0886 },
            { name: "Cho Oyu", elevation: 8188, lat: 28.0942, lng: 86.6608 },
            { name: "Dhaulagiri", elevation: 8167, lat: 28.6975, lng: 83.4872 },
            { name: "Manaslu", elevation: 8163, lat: 28.5497, lng: 84.5597 },
            { name: "Nanga Parbat", elevation: 8126, lat: 35.2378, lng: 74.5892 },
            { name: "Annapurna I", elevation: 8091, lat: 28.5961, lng: 83.8203 }
        ],
        glaciers: [
            { name: "Khumbu Glacier", lat: 27.9467, lng: 86.8528 },
            { name: "Gangotri Glacier", lat: 30.9167, lng: 79.0833 },
            { name: "Siachen Glacier", lat: 35.5000, lng: 77.0000 },
            { name: "Zemu Glacier", lat: 27.8333, lng: 88.4167 }
        ],
        passes: [
            { name: "Khunjerab Pass", elevation: 4693, lat: 36.8500, lng: 75.4167 },
            { name: "Khardung La", elevation: 5359, lat: 34.2833, lng: 77.6000 },
            { name: "Rohtang Pass", elevation: 3978, lat: 32.3722, lng: 77.2464 }
        ],
        rivers: ["Ganges", "Indus", "Brahmaputra", "Yamuna"],
        cities: [
            { name: "Kathmandu", lat: 27.7172, lng: 85.3240 },
            { name: "Lhasa", lat: 29.6500, lng: 91.1000 },
            { name: "Darjeeling", lat: 27.0410, lng: 88.2663 }
        ],
        wildlife: ["Snow Leopard", "Red Panda", "Himalayan Black Bear", "Musk Deer", "Himalayan Tahr"],
        vegetation: ["Alpine meadows", "Rhododendron forests", "Coniferous forests", "Bamboo groves"],
        climate: ["Tropical at base", "Temperate mid", "Alpine high", "Arctic at peaks"],
        economy: {
            tourism: "Mountaineering, trekking, pilgrimage",
            mining: "Copper, gold, zinc deposits",
            hydropower: "Major hydroelectric potential",
            agriculture: "Terraced farming, tea plantations"
        },
        environment: ["Glacier retreat", "Deforestation", "Climate change", "GLOF risks"],
        history: {
            routes: "Silk Road branches, Trans-Himalayan trade",
            expeditions: "1953 First Everest summit (Hillary & Tenzing)",
            cultural: "Buddhism birthplace, Sacred Hindu sites"
        }
    },
    {
        id: 2,
        name: "Karakoram",
        highestPeak: "K2",
        elevation: 8611,
        image: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=800",
        background: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920",
        continent: "asia",
        countries: ["Pakistan", "China", "India"],
        flags: ["🇵🇰", "🇨🇳", "🇮🇳"],
        coords: { lat: 35.88, lng: 76.51, zoom: 7 },
        length: "500 km",
        avgElevation: "5,500 m",
        formation: {
            origin: "India-Eurasia plate collision",
            age: "50 million years",
            plates: "Indian Plate subducting under Eurasian"
        },
        peaks: [
            { name: "K2", elevation: 8611, lat: 35.8800, lng: 76.5150 },
            { name: "Gasherbrum I", elevation: 8080, lat: 35.7244, lng: 76.6961 },
            { name: "Broad Peak", elevation: 8051, lat: 35.8122, lng: 76.5653 },
            { name: "Gasherbrum II", elevation: 8035, lat: 35.7583, lng: 76.6531 }
        ],
        glaciers: [
            { name: "Siachen Glacier (76km)", lat: 35.5000, lng: 77.0000 },
            { name: "Baltoro Glacier (62km)", lat: 35.7167, lng: 76.3000 },
            { name: "Biafo Glacier (67km)", lat: 35.8833, lng: 75.7667 }
        ],
        passes: [
            { name: "Khunjerab Pass", elevation: 4693, lat: 36.8500, lng: 75.4167 }
        ],
        rivers: ["Indus", "Shyok", "Hunza"],
        cities: [
            { name: "Gilgit", lat: 35.9208, lng: 74.3144 },
            { name: "Skardu", lat: 35.2971, lng: 75.6333 }
        ],
        wildlife: ["Marco Polo Sheep", "Snow Leopard", "Himalayan Ibex", "Brown Bear"],
        vegetation: ["Alpine scrub", "Juniper forests"],
        climate: ["Cold desert", "Extreme alpine", "Heavy snowfall"],
        economy: {
            tourism: "Mountaineering expeditions",
            mining: "Gemstones, gold",
            hydropower: "River systems",
            agriculture: "Apricots, terraced fields"
        },
        environment: ["Rapid glacier melt", "Rock avalanches", "Climate vulnerability"],
        history: {
            routes: "Silk Road, Karakoram Highway",
            expeditions: "1954 First K2 summit",
            cultural: "Hunza Valley civilization"
        }
    },
    {
        id: 3,
        name: "Hindu Kush",
        highestPeak: "Tirich Mir",
        elevation: 7708,
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800",
        background: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1920",
        continent: "asia",
        countries: ["Afghanistan", "Pakistan"],
        flags: ["🇦🇫", "🇵🇰"],
        coords: { lat: 36.25, lng: 71.83, zoom: 7 },
        length: "800 km",
        avgElevation: "4,500 m",
        formation: {
            origin: "Alpine-Himalayan orogenic belt",
            age: "55 million years",
            plates: "Indian-Eurasian collision zone"
        },
        peaks: [
            { name: "Tirich Mir", elevation: 7708, lat: 36.2525, lng: 71.8508 },
            { name: "Noshaq", elevation: 7492, lat: 36.4333, lng: 71.8500 },
            { name: "Istor-o-Nal", elevation: 7403, lat: 36.3833, lng: 71.8833 }
        ],
        glaciers: [
            { name: "Tirich Glacier", lat: 36.2667, lng: 71.8500 },
            { name: "Chiantar Glacier", lat: 36.3833, lng: 72.0333 }
        ],
        passes: [
            { name: "Khyber Pass", elevation: 1070, lat: 34.0667, lng: 71.0833 },
            { name: "Salang Pass", elevation: 3878, lat: 35.3167, lng: 69.0333 }
        ],
        rivers: ["Kabul River", "Kunar River"],
        cities: [
            { name: "Chitral", lat: 35.8528, lng: 71.7847 },
            { name: "Kabul", lat: 34.5553, lng: 69.2075 }
        ],
        wildlife: ["Markhor", "Snow Leopard", "Himalayan Lynx"],
        vegetation: ["Alpine meadows", "Juniper woodlands"],
        climate: ["Semi-arid", "Cold winters", "Dry summers"],
        economy: {
            tourism: "Adventure tourism",
            mining: "Lapis lazuli, emeralds",
            hydropower: "River potential",
            agriculture: "Fruit orchards"
        },
        environment: ["Deforestation", "Water scarcity"],
        history: {
            routes: "Silk Road, Alexander's passage",
            expeditions: "1950 First Tirich Mir ascent",
            cultural: "Kalash people, Buddhist heritage"
        }
    },
    {
        id: 4,
        name: "Pamir Mountains",
        highestPeak: "Ismoil Somoni Peak",
        elevation: 7495,
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
        background: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1920",
        continent: "asia",
        countries: ["Tajikistan", "Kyrgyzstan", "Afghanistan", "China"],
        flags: ["🇹🇯", "🇰🇬", "🇦🇫", "🇨🇳"],
        coords: { lat: 38.55, lng: 72.00, zoom: 7 },
        length: "500 km",
        avgElevation: "4,000 m",
        formation: {
            origin: "Continental collision",
            age: "25 million years",
            plates: "Indian-Eurasian convergence"
        },
        peaks: [
            { name: "Ismoil Somoni Peak", elevation: 7495, lat: 38.9333, lng: 72.0167 },
            { name: "Peak Lenin", elevation: 7134, lat: 39.3500, lng: 72.8667 },
            { name: "Peak Korzhenevskaya", elevation: 7105, lat: 38.9500, lng: 72.0000 }
        ],
        glaciers: [
            { name: "Fedchenko Glacier (77km)", lat: 38.7500, lng: 72.2500 }
        ],
        passes: [
            { name: "Ak-Baital Pass", elevation: 4655, lat: 38.0833, lng: 73.8833 }
        ],
        rivers: ["Amu Darya", "Panj River"],
        cities: [
            { name: "Khorog", lat: 37.4961, lng: 71.5297 },
            { name: "Murghab", lat: 38.1667, lng: 74.0500 }
        ],
        wildlife: ["Marco Polo Sheep", "Snow Leopard", "Pamir Argali"],
        vegetation: ["High altitude grasslands", "Alpine cushion plants"],
        climate: ["High altitude desert", "Extreme cold"],
        economy: {
            tourism: "High altitude trekking",
            mining: "Precious stones",
            hydropower: "River potential",
            agriculture: "Yak herding"
        },
        environment: ["Glacier retreat", "Permafrost degradation"],
        history: {
            routes: "Silk Road hub, Pamir Highway",
            expeditions: "Soviet mountaineering era",
            cultural: "Roof of the World"
        }
    },
    {
        id: 5,
        name: "Tian Shan",
        highestPeak: "Jengish Chokusu",
        elevation: 7439,
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
        background: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=1920",
        continent: "asia",
        countries: ["Kyrgyzstan", "Kazakhstan", "China", "Uzbekistan"],
        flags: ["🇰🇬", "🇰🇿", "🇨🇳", "🇺🇿"],
        coords: { lat: 42.03, lng: 80.13, zoom: 6 },
        length: "2,500 km",
        avgElevation: "4,000 m",
        formation: {
            origin: "Paleozoic orogeny, reactivated",
            age: "300-400 million years",
            plates: "Eurasian internal deformation"
        },
        peaks: [
            { name: "Jengish Chokusu", elevation: 7439, lat: 42.0333, lng: 80.1333 },
            { name: "Khan Tengri", elevation: 7010, lat: 42.1333, lng: 80.1667 }
        ],
        glaciers: [
            { name: "Inylchek Glacier (60km)", lat: 42.1500, lng: 79.8333 }
        ],
        passes: [
            { name: "Torugart Pass", elevation: 3752, lat: 40.5167, lng: 75.4000 }
        ],
        rivers: ["Syr Darya", "Ili River", "Tarim River"],
        cities: [
            { name: "Bishkek", lat: 42.8746, lng: 74.5698 },
            { name: "Almaty", lat: 43.2380, lng: 76.9458 }
        ],
        wildlife: ["Snow Leopard", "Argali", "Siberian Ibex"],
        vegetation: ["Tian Shan Spruce", "Alpine meadows"],
        climate: ["Continental", "Cold winters"],
        economy: {
            tourism: "Skiing, trekking",
            mining: "Gold, uranium",
            hydropower: "Major rivers",
            agriculture: "Nomadic herding"
        },
        environment: ["Glacier melt", "Water stress"],
        history: {
            routes: "Silk Road northern route",
            expeditions: "Soviet mountaineering",
            cultural: "Kyrgyz nomadic culture"
        }
    },
    {
        id: 6,
        name: "Kunlun Mountains",
        highestPeak: "Kongur Tagh",
        elevation: 7649,
        image: "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?w=800",
        background: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920",
        continent: "asia",
        countries: ["China"],
        flags: ["🇨🇳"],
        coords: { lat: 36.00, lng: 84.00, zoom: 6 },
        length: "3,000 km",
        avgElevation: "5,500 m",
        formation: {
            origin: "India-Asia collision",
            age: "50 million years",
            plates: "Indian-Eurasian plates"
        },
        peaks: [
            { name: "Kongur Tagh", elevation: 7649, lat: 38.5889, lng: 75.3142 },
            { name: "Muztagh Ata", elevation: 7509, lat: 38.2833, lng: 75.1000 },
            { name: "Liushi Shan", elevation: 7167, lat: 35.8000, lng: 78.2500 }
        ],
        glaciers: [
            { name: "Kunlun Glaciers", lat: 36.0000, lng: 84.0000 }
        ],
        passes: [
            { name: "Kunlun Pass", elevation: 4772, lat: 35.6167, lng: 94.0500 }
        ],
        rivers: ["Yellow River source", "Yangtze source"],
        cities: [
            { name: "Golmud", lat: 36.4167, lng: 94.9000 },
            { name: "Kashgar", lat: 39.4547, lng: 75.9797 }
        ],
        wildlife: ["Tibetan Antelope", "Wild Yak", "Kiang"],
        vegetation: ["Alpine desert", "Sparse grass"],
        climate: ["Cold desert", "Extremely dry"],
        economy: {
            tourism: "Limited access",
            mining: "Jade, gold",
            hydropower: "River sources",
            agriculture: "Minimal"
        },
        environment: ["Permafrost degradation", "Desertification"],
        history: {
            routes: "Ancient caravan routes",
            expeditions: "Chinese explorations",
            cultural: "Kunlun mythology"
        }
    },
    {
        id: 7,
        name: "Andes",
        highestPeak: "Aconcagua",
        elevation: 6962,
        image: "https://images.unsplash.com/photo-1531761535209-180857e963b9?w=800",
        background: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920",
        continent: "americas",
        countries: ["Argentina", "Chile", "Peru", "Bolivia", "Ecuador", "Colombia", "Venezuela"],
        flags: ["🇦🇷", "🇨🇱", "🇵🇪", "🇧🇴", "🇪🇨", "🇨🇴", "🇻🇪"],
        coords: { lat: -32.65, lng: -70.01, zoom: 4 },
        length: "7,000 km",
        avgElevation: "4,000 m",
        formation: {
            origin: "Nazca Plate subduction",
            age: "200 million years (ongoing)",
            plates: "Nazca-South American plates"
        },
        peaks: [
            { name: "Aconcagua", elevation: 6962, lat: -32.6533, lng: -70.0111 },
            { name: "Ojos del Salado", elevation: 6893, lat: -27.1092, lng: -68.5414 },
            { name: "Huascarán", elevation: 6768, lat: -9.1219, lng: -77.6044 },
            { name: "Chimborazo", elevation: 6263, lat: -1.4692, lng: -78.8175 },
            { name: "Cotopaxi", elevation: 5897, lat: -0.6836, lng: -78.4378 }
        ],
        glaciers: [
            { name: "Perito Moreno", lat: -50.4967, lng: -73.1369 },
            { name: "Southern Patagonian Ice Field", lat: -49.5000, lng: -73.5000 }
        ],
        passes: [
            { name: "Paso Los Libertadores", elevation: 3200, lat: -32.8333, lng: -70.0667 }
        ],
        rivers: ["Amazon", "Orinoco", "Magdalena"],
        cities: [
            { name: "Cusco", lat: -13.5300, lng: -71.9833 },
            { name: "La Paz", lat: -16.4897, lng: -68.1193 },
            { name: "Quito", lat: -0.2299, lng: -78.5249 }
        ],
        wildlife: ["Andean Condor", "Vicuña", "Spectacled Bear", "Llama", "Alpaca"],
        vegetation: ["Páramo", "Puna grasslands", "Cloud forests"],
        climate: ["Tropical north", "Temperate central", "Glacial south"],
        economy: {
            tourism: "Machu Picchu, trekking, skiing",
            mining: "Copper, silver, gold, lithium",
            hydropower: "Major dams",
            agriculture: "Quinoa, potatoes, coffee"
        },
        environment: ["Glacier retreat", "Mining pollution", "Volcanism"],
        history: {
            routes: "Inca Trail, Royal Road",
            expeditions: "Spanish conquest",
            cultural: "Inca Empire"
        }
    },
    {
        id: 8,
        name: "Alaska Range",
        highestPeak: "Denali",
        elevation: 6190,
        image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800",
        background: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920",
        continent: "americas",
        countries: ["United States"],
        flags: ["🇺🇸"],
        coords: { lat: 63.06, lng: -151.00, zoom: 7 },
        length: "650 km",
        avgElevation: "2,000 m",
        formation: {
            origin: "Tectonic uplift, volcanism",
            age: "56 million years",
            plates: "Pacific-North American"
        },
        peaks: [
            { name: "Denali", elevation: 6190, lat: 63.0695, lng: -151.0074 },
            { name: "Mount Foraker", elevation: 5304, lat: 62.9603, lng: -151.3994 },
            { name: "Mount Hunter", elevation: 4442, lat: 62.9500, lng: -151.0833 }
        ],
        glaciers: [
            { name: "Kahiltna Glacier", lat: 62.9000, lng: -151.0500 },
            { name: "Ruth Glacier", lat: 62.9333, lng: -150.7167 }
        ],
        passes: [
            { name: "Denali Pass", elevation: 5550, lat: 63.0500, lng: -151.0167 }
        ],
        rivers: ["Susitna River", "Chulitna River"],
        cities: [
            { name: "Anchorage", lat: 61.2181, lng: -149.9003 },
            { name: "Fairbanks", lat: 64.8378, lng: -147.7164 }
        ],
        wildlife: ["Grizzly Bear", "Dall Sheep", "Caribou", "Wolves", "Moose"],
        vegetation: ["Tundra", "Boreal forest"],
        climate: ["Subarctic", "Extreme cold", "Heavy snowfall"],
        economy: {
            tourism: "Mountaineering, national park",
            mining: "Gold (historical)",
            hydropower: "Limited",
            agriculture: "Minimal"
        },
        environment: ["Climate change", "Glacier melt", "Permafrost thaw"],
        history: {
            routes: "Athabascan trails",
            expeditions: "1913 First summit",
            cultural: "Native Alaskan heritage"
        }
    },
    {
        id: 9,
        name: "Saint Elias Mountains",
        highestPeak: "Mount Logan",
        elevation: 5959,
        image: "https://images.unsplash.com/photo-1501554728187-ce583db33af7?w=800",
        background: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1920",
        continent: "americas",
        countries: ["Canada", "United States"],
        flags: ["🇨🇦", "🇺🇸"],
        coords: { lat: 60.56, lng: -140.40, zoom: 7 },
        length: "500 km",
        avgElevation: "2,500 m",
        formation: {
            origin: "Tectonic collision, active uplift",
            age: "10 million years",
            plates: "Pacific-North American"
        },
        peaks: [
            { name: "Mount Logan", elevation: 5959, lat: 60.5670, lng: -140.4054 },
            { name: "Mount Saint Elias", elevation: 5489, lat: 60.2933, lng: -140.9306 },
            { name: "Mount Lucania", elevation: 5226, lat: 61.0167, lng: -140.3833 }
        ],
        glaciers: [
            { name: "Hubbard Glacier", lat: 60.0167, lng: -139.4833 },
            { name: "Malaspina Glacier", lat: 60.0000, lng: -140.5000 }
        ],
        passes: [
            { name: "Chilkoot Pass", elevation: 1067, lat: 59.7167, lng: -135.2833 }
        ],
        rivers: ["Alsek River", "Copper River"],
        cities: [
            { name: "Whitehorse", lat: 60.7212, lng: -135.0568 },
            { name: "Yakutat", lat: 59.5469, lng: -139.7272 }
        ],
        wildlife: ["Grizzly Bear", "Mountain Goat", "Wolverine"],
        vegetation: ["Coastal rainforest", "Alpine tundra"],
        climate: ["Maritime", "Heavy precipitation"],
        economy: {
            tourism: "Wilderness adventure",
            mining: "Copper (historical)",
            hydropower: "River potential",
            agriculture: "None"
        },
        environment: ["Active glacier dynamics"],
        history: {
            routes: "Klondike Gold Rush trails",
            expeditions: "1897 First Saint Elias",
            cultural: "Tlingit heritage"
        }
    },
    {
        id: 10,
        name: "Caucasus Mountains",
        highestPeak: "Mount Elbrus",
        elevation: 5642,
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
        background: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920",
        continent: "europe",
        countries: ["Russia", "Georgia", "Azerbaijan", "Armenia"],
        flags: ["🇷🇺", "🇬🇪", "🇦🇿", "🇦🇲"],
        coords: { lat: 43.34, lng: 42.44, zoom: 7 },
        length: "1,200 km",
        avgElevation: "3,000 m",
        formation: {
            origin: "Arabian-Eurasian collision",
            age: "25 million years",
            plates: "Arabian-Eurasian"
        },
        peaks: [
            { name: "Mount Elbrus", elevation: 5642, lat: 43.3499, lng: 42.4453 },
            { name: "Dykh-Tau", elevation: 5205, lat: 43.0500, lng: 43.1333 },
            { name: "Shkhara", elevation: 5193, lat: 43.0000, lng: 43.0833 },
            { name: "Mount Kazbek", elevation: 5047, lat: 42.6858, lng: 44.5178 }
        ],
        glaciers: [
            { name: "Bezengi Glacier", lat: 43.0500, lng: 43.1500 },
            { name: "Elbrus Glaciers", lat: 43.3500, lng: 42.4500 }
        ],
        passes: [
            { name: "Cross Pass", elevation: 2379, lat: 42.5000, lng: 44.4667 }
        ],
        rivers: ["Terek", "Kuban", "Kura"],
        cities: [
            { name: "Tbilisi", lat: 41.7151, lng: 44.8271 },
            { name: "Vladikavkaz", lat: 43.0205, lng: 44.6819 }
        ],
        wildlife: ["Caucasian Tur", "Persian Leopard", "Brown Bear"],
        vegetation: ["Beech forests", "Alpine meadows"],
        climate: ["Continental", "Alpine"],
        economy: {
            tourism: "Skiing, trekking",
            mining: "Oil, manganese",
            hydropower: "Georgian rivers",
            agriculture: "Wine, fruits"
        },
        environment: ["Glacier retreat"],
        history: {
            routes: "Silk Road, Georgian Military Road",
            expeditions: "1874 First Elbrus summit",
            cultural: "Diverse ethnicities"
        }
    },
    // Continue with mountains 11-50...
    {
        id: 11,
        name: "Trans-Mexican Volcanic Belt",
        highestPeak: "Pico de Orizaba",
        elevation: 5636,
        image: "https://images.unsplash.com/photo-1489493887464-892be6d1daae?w=800",
        background: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920",
        continent: "americas",
        countries: ["Mexico"],
        flags: ["🇲🇽"],
        coords: { lat: 19.03, lng: -97.26, zoom: 7 },
        length: "900 km",
        avgElevation: "2,500 m",
        formation: { origin: "Subduction volcanism", age: "Miocene to present", plates: "Cocos-North American" },
        peaks: [
            { name: "Pico de Orizaba", elevation: 5636, lat: 19.0303, lng: -97.2686 },
            { name: "Popocatépetl", elevation: 5426, lat: 19.0225, lng: -98.6278 },
            { name: "Iztaccíhuatl", elevation: 5230, lat: 19.1789, lng: -98.6417 }
        ],
        glaciers: [{ name: "Orizaba Glaciers", lat: 19.0300, lng: -97.2700 }],
        passes: [{ name: "Paso de Cortés", elevation: 3640, lat: 19.0750, lng: -98.6333 }],
        rivers: ["Balsas River"],
        cities: [{ name: "Mexico City", lat: 19.4326, lng: -99.1332 }, { name: "Puebla", lat: 19.0414, lng: -98.2063 }],
        wildlife: ["Mexican Gray Wolf", "Jaguar"],
        vegetation: ["Pine-oak forests", "Alpine grasslands"],
        climate: ["Tropical highland"],
        economy: { tourism: "Volcanic hiking", mining: "Silver, gold", hydropower: "Limited", agriculture: "Corn, agave" },
        environment: ["Volcanic hazards", "Deforestation"],
        history: { routes: "Aztec routes", expeditions: "Spanish conquest", cultural: "Aztec sacred mountains" }
    },
    {
        id: 12,
        name: "Rwenzori Mountains",
        highestPeak: "Margherita Peak",
        elevation: 5109,
        image: "https://images.unsplash.com/photo-1489493887464-892be6d1daae?w=800",
        background: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1920",
        continent: "africa",
        countries: ["Uganda", "DR Congo"],
        flags: ["🇺🇬", "🇨🇩"],
        coords: { lat: 0.38, lng: 29.88, zoom: 9 },
        length: "120 km",
        avgElevation: "3,000 m",
        formation: { origin: "Block fault mountains", age: "3 million years", plates: "East African Rift" },
        peaks: [
            { name: "Margherita Peak", elevation: 5109, lat: 0.3833, lng: 29.8833 },
            { name: "Mount Speke", elevation: 4890, lat: 0.4000, lng: 29.8833 }
        ],
        glaciers: [{ name: "Stanley Plateau glaciers", lat: 0.3833, lng: 29.8833 }],
        passes: [{ name: "Scott-Elliot Pass", elevation: 4372, lat: 0.3667, lng: 29.8833 }],
        rivers: ["Semliki River"],
        cities: [{ name: "Kasese", lat: 0.1833, lng: 30.0833 }],
        wildlife: ["Rwenzori Chameleon", "Forest Elephant"],
        vegetation: ["Giant groundsels", "Giant lobelias"],
        climate: ["Tropical montane", "High rainfall"],
        economy: { tourism: "Trekking, UNESCO", mining: "Cobalt nearby", hydropower: "Limited", agriculture: "Coffee, bananas" },
        environment: ["Rapid glacier retreat"],
        history: { routes: "Stanley exploration", expeditions: "1906 First summit", cultural: "Mountains of the Moon" }
    },
    {
        id: 13,
        name: "Alps",
        highestPeak: "Mont Blanc",
        elevation: 4809,
        image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800",
        background: "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?w=1920",
        continent: "europe",
        countries: ["France", "Switzerland", "Italy", "Austria", "Germany", "Slovenia", "Liechtenstein"],
        flags: ["🇫🇷", "🇨🇭", "🇮🇹", "🇦🇹", "🇩🇪", "🇸🇮", "🇱🇮"],
        coords: { lat: 45.83, lng: 6.86, zoom: 6 },
        length: "1,200 km",
        avgElevation: "2,500 m",
        formation: { origin: "African-European collision", age: "65 million years", plates: "African-Eurasian" },
        peaks: [
            { name: "Mont Blanc", elevation: 4809, lat: 45.8326, lng: 6.8652 },
            { name: "Monte Rosa", elevation: 4634, lat: 45.9369, lng: 7.8667 },
            { name: "Matterhorn", elevation: 4478, lat: 45.9764, lng: 7.6586 },
            { name: "Eiger", elevation: 3967, lat: 46.5775, lng: 8.0053 }
        ],
        glaciers: [
            { name: "Aletsch Glacier", lat: 46.4833, lng: 8.0333 },
            { name: "Mer de Glace", lat: 45.9167, lng: 6.9500 }
        ],
        passes: [
            { name: "Brenner Pass", elevation: 1370, lat: 47.0000, lng: 11.5000 },
            { name: "St. Gotthard", elevation: 2106, lat: 46.5500, lng: 8.5667 }
        ],
        rivers: ["Rhine", "Rhône", "Po"],
        cities: [
            { name: "Geneva", lat: 46.2044, lng: 6.1432 },
            { name: "Zürich", lat: 47.3769, lng: 8.5417 },
            { name: "Innsbruck", lat: 47.2692, lng: 11.4041 }
        ],
        wildlife: ["Alpine Ibex", "Chamois", "Marmot", "Golden Eagle"],
        vegetation: ["Alpine meadows", "Coniferous forests"],
        climate: ["Continental", "Heavy snowfall"],
        economy: { tourism: "Premier ski destination", mining: "Salt", hydropower: "Major production", agriculture: "Dairy, cheese" },
        environment: ["Glacier retreat", "Permafrost thaw"],
        history: { routes: "Hannibal's crossing", expeditions: "1786 First Mont Blanc", cultural: "Birthplace of mountaineering" }
    },
    {
        id: 14,
        name: "Rocky Mountains",
        highestPeak: "Mount Elbert",
        elevation: 4401,
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
        background: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920",
        continent: "americas",
        countries: ["United States", "Canada"],
        flags: ["🇺🇸", "🇨🇦"],
        coords: { lat: 39.11, lng: -106.44, zoom: 5 },
        length: "4,800 km",
        avgElevation: "2,500 m",
        formation: { origin: "Laramide Orogeny", age: "80-55 million years", plates: "Farallon subduction" },
        peaks: [
            { name: "Mount Elbert", elevation: 4401, lat: 39.1178, lng: -106.4453 },
            { name: "Mount Massive", elevation: 4398, lat: 39.1875, lng: -106.4756 },
            { name: "Mount Robson", elevation: 3954, lat: 53.1167, lng: -119.1500 },
            { name: "Longs Peak", elevation: 4346, lat: 40.2550, lng: -105.6153 }
        ],
        glaciers: [
            { name: "Athabasca Glacier", lat: 52.2167, lng: -117.2333 },
            { name: "Columbia Icefield", lat: 52.2167, lng: -117.2333 }
        ],
        passes: [
            { name: "Loveland Pass", elevation: 3655, lat: 39.6636, lng: -105.8786 },
            { name: "Kicking Horse Pass", elevation: 1627, lat: 51.4333, lng: -116.3167 }
        ],
        rivers: ["Colorado River", "Missouri River", "Columbia River"],
        cities: [
            { name: "Denver", lat: 39.7392, lng: -104.9903 },
            { name: "Calgary", lat: 51.0447, lng: -114.0719 },
            { name: "Salt Lake City", lat: 40.7608, lng: -111.8910 }
        ],
        wildlife: ["Grizzly Bear", "Elk", "Mountain Goat", "Bighorn Sheep", "Pika"],
        vegetation: ["Lodgepole pine", "Alpine tundra"],
        climate: ["Continental", "Cold winters"],
        economy: { tourism: "National parks, skiing", mining: "Coal, gold", hydropower: "Major dams", agriculture: "Ranching" },
        environment: ["Pine beetle", "Wildfire"],
        history: { routes: "Oregon Trail", expeditions: "Lewis and Clark", cultural: "Native American tribes" }
    },
    {
        id: 15,
        name: "Atlas Mountains",
        highestPeak: "Toubkal",
        elevation: 4167,
        image: "https://images.unsplash.com/photo-1489493887464-892be6d1daae?w=800",
        background: "https://images.unsplash.com/photo-1489493887464-892be6d1daae?w=1920",
        continent: "africa",
        countries: ["Morocco", "Algeria", "Tunisia"],
        flags: ["🇲🇦", "🇩🇿", "🇹🇳"],
        coords: { lat: 31.06, lng: -7.91, zoom: 6 },
        length: "2,500 km",
        avgElevation: "2,000 m",
        formation: { origin: "African-Eurasian collision", age: "300 million years", plates: "African-Eurasian" },
        peaks: [
            { name: "Toubkal", elevation: 4167, lat: 31.0600, lng: -7.9150 },
            { name: "M'Goun", elevation: 4071, lat: 31.5000, lng: -6.4167 }
        ],
        glaciers: [{ name: "Seasonal snow only", lat: 31.0600, lng: -7.9150 }],
        passes: [{ name: "Tizi n'Tichka", elevation: 2260, lat: 31.3000, lng: -7.3667 }],
        rivers: ["Draa River", "Moulouya River"],
        cities: [
            { name: "Marrakech", lat: 31.6295, lng: -7.9811 },
            { name: "Fes", lat: 34.0181, lng: -5.0078 }
        ],
        wildlife: ["Barbary Macaque", "Barbary Leopard"],
        vegetation: ["Cedar forests", "Argan trees"],
        climate: ["Mediterranean", "Semi-arid"],
        economy: { tourism: "Trekking, cultural", mining: "Phosphates", hydropower: "Dams", agriculture: "Olives, argan" },
        environment: ["Deforestation", "Water scarcity"],
        history: { routes: "Trans-Saharan routes", expeditions: "French colonial", cultural: "Berber civilization" }
    },
    // Add remaining mountains 16-50 with same structure...
    {
        id: 16, name: "Cascades", highestPeak: "Mount Rainier", elevation: 4392,
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800",
        background: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920",
        continent: "americas", countries: ["United States", "Canada"], flags: ["🇺🇸", "🇨🇦"],
        coords: { lat: 46.85, lng: -121.76, zoom: 7 }, length: "1,100 km", avgElevation: "1,800 m",
        formation: { origin: "Subduction volcanism", age: "36 million years", plates: "Juan de Fuca" },
        peaks: [{ name: "Mount Rainier", elevation: 4392, lat: 46.8523, lng: -121.7603 }, { name: "Mount Shasta", elevation: 4322, lat: 41.4092, lng: -122.1950 }, { name: "Mount Hood", elevation: 3429, lat: 45.3735, lng: -121.6959 }],
        glaciers: [{ name: "Carbon Glacier", lat: 46.9167, lng: -121.7833 }],
        passes: [{ name: "Snoqualmie Pass", elevation: 921, lat: 47.4281, lng: -121.4117 }],
        rivers: ["Columbia River"], cities: [{ name: "Seattle", lat: 47.6062, lng: -122.3321 }, { name: "Portland", lat: 45.5152, lng: -122.6784 }],
        wildlife: ["Northern Spotted Owl", "Mountain Goat"], vegetation: ["Old-growth rainforest", "Douglas fir"],
        climate: ["Marine west coast"], economy: { tourism: "National parks", mining: "Limited", hydropower: "Columbia system", agriculture: "Forestry" },
        environment: ["Volcanic risk"], history: { routes: "Oregon Trail", expeditions: "1980 St. Helens", cultural: "Pacific Northwest tribes" }
    },
    {
        id: 17, name: "Southern Alps", highestPeak: "Aoraki / Mount Cook", elevation: 3724,
        image: "https://images.unsplash.com/photo-1469521669194-babb45599def?w=800",
        background: "https://images.unsplash.com/photo-1469521669194-babb45599def?w=1920",
        continent: "oceania", countries: ["New Zealand"], flags: ["🇳🇿"],
        coords: { lat: -43.59, lng: 170.14, zoom: 8 }, length: "500 km", avgElevation: "2,000 m",
        formation: { origin: "Pacific-Australian boundary", age: "12 million years", plates: "Pacific-Australian" },
        peaks: [{ name: "Aoraki / Mount Cook", elevation: 3724, lat: -43.5953, lng: 170.1420 }, { name: "Mount Tasman", elevation: 3497, lat: -43.5167, lng: 170.0833 }],
        glaciers: [{ name: "Tasman Glacier", lat: -43.5833, lng: 170.2000 }, { name: "Fox Glacier", lat: -43.4667, lng: 170.0167 }, { name: "Franz Josef", lat: -43.4333, lng: 170.1833 }],
        passes: [{ name: "Arthur's Pass", elevation: 920, lat: -42.9433, lng: 171.5633 }],
        rivers: ["Waimakariri River"], cities: [{ name: "Christchurch", lat: -43.5321, lng: 172.6362 }, { name: "Queenstown", lat: -45.0312, lng: 168.6626 }],
        wildlife: ["Kea", "Kiwi", "Tahr"], vegetation: ["Beech forest", "Alpine tussock"],
        climate: ["Temperate oceanic"], economy: { tourism: "Adventure, skiing", mining: "Greenstone", hydropower: "Major rivers", agriculture: "High country farming" },
        environment: ["Glacier retreat"], history: { routes: "Māori trails", expeditions: "1894 First Aoraki", cultural: "Māori heritage" }
    },
    {
        id: 18, name: "Drakensberg", highestPeak: "Thabana Ntlenyana", elevation: 3482,
        image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800",
        background: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1920",
        continent: "africa", countries: ["South Africa", "Lesotho", "Eswatini"], flags: ["🇿🇦", "🇱🇸", "🇸🇿"],
        coords: { lat: -29.46, lng: 29.25, zoom: 7 }, length: "1,000 km", avgElevation: "2,000 m",
        formation: { origin: "Basalt eruptions", age: "180 million years", plates: "African plate" },
        peaks: [{ name: "Thabana Ntlenyana", elevation: 3482, lat: -29.4667, lng: 29.2500 }, { name: "Mafadi", elevation: 3450, lat: -29.2000, lng: 29.3000 }],
        glaciers: [{ name: "No glaciers", lat: -29.4667, lng: 29.2500 }],
        passes: [{ name: "Sani Pass", elevation: 2874, lat: -29.5833, lng: 29.2833 }],
        rivers: ["Orange River", "Tugela River"], cities: [{ name: "Pietermaritzburg", lat: -29.6006, lng: 30.3794 }, { name: "Maseru", lat: -29.3167, lng: 27.4833 }],
        wildlife: ["Eland", "Bearded Vulture"], vegetation: ["Grasslands", "Protea shrublands"],
        climate: ["Subtropical highland"], economy: { tourism: "Hiking, scenic", mining: "Diamonds", hydropower: "Lesotho Highlands", agriculture: "Livestock" },
        environment: ["Erosion"], history: { routes: "San rock art", expeditions: "Voortrekker routes", cultural: "San heritage" }
    },
    {
        id: 19, name: "Carpathian Mountains", highestPeak: "Gerlachovský štít", elevation: 2655,
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
        background: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920",
        continent: "europe", countries: ["Romania", "Slovakia", "Poland", "Ukraine", "Hungary", "Czech Republic", "Serbia"], flags: ["🇷🇴", "🇸🇰", "🇵🇱", "🇺🇦", "🇭🇺", "🇨🇿", "🇷🇸"],
        coords: { lat: 49.17, lng: 20.13, zoom: 6 }, length: "1,500 km", avgElevation: "1,000 m",
        formation: { origin: "Alpine orogeny", age: "40-50 million years", plates: "African-European" },
        peaks: [{ name: "Gerlachovský štít", elevation: 2655, lat: 49.1644, lng: 20.1342 }, { name: "Moldoveanu", elevation: 2544, lat: 45.6000, lng: 24.7333 }],
        glaciers: [{ name: "No glaciers", lat: 49.1794, lng: 20.1358 }],
        passes: [{ name: "Dukla Pass", elevation: 502, lat: 49.3500, lng: 21.6833 }],
        rivers: ["Danube tributaries"], cities: [{ name: "Brasov", lat: 45.6580, lng: 25.6012 }, { name: "Zakopane", lat: 49.2992, lng: 19.9497 }],
        wildlife: ["Brown Bear", "Wolf", "Lynx", "Bison"], vegetation: ["Virgin beech forests"],
        climate: ["Temperate continental"], economy: { tourism: "Hiking, skiing", mining: "Salt", hydropower: "Romanian dams", agriculture: "Sheep herding" },
        environment: ["Illegal logging"], history: { routes: "Medieval trade routes", expeditions: "Habsburg exploration", cultural: "Dracula legend" }
    },
    {
        id: 20, name: "Pyrenees", highestPeak: "Aneto", elevation: 3404,
        image: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800",
        background: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=1920",
        continent: "europe", countries: ["France", "Spain", "Andorra"], flags: ["🇫🇷", "🇪🇸", "🇦🇩"],
        coords: { lat: 42.63, lng: 0.65, zoom: 7 }, length: "430 km", avgElevation: "1,800 m",
        formation: { origin: "Iberian-European collision", age: "50-100 million years", plates: "Iberian-European" },
        peaks: [{ name: "Aneto", elevation: 3404, lat: 42.6318, lng: 0.6578 }, { name: "Posets", elevation: 3375, lat: 42.6556, lng: 0.4378 }, { name: "Monte Perdido", elevation: 3355, lat: 42.6756, lng: -0.0356 }],
        glaciers: [{ name: "Aneto Glacier", lat: 42.6300, lng: 0.6600 }],
        passes: [{ name: "Col du Tourmalet", elevation: 2115, lat: 42.9083, lng: 0.1458 }],
        rivers: ["Ebro", "Garonne"], cities: [{ name: "Andorra la Vella", lat: 42.5078, lng: 1.5211 }, { name: "Pamplona", lat: 42.8125, lng: -1.6458 }],
        wildlife: ["Pyrenean Brown Bear", "Lammergeier"], vegetation: ["Beech-fir forests"],
        climate: ["Atlantic west", "Mediterranean east"], economy: { tourism: "Skiing, pilgrimage", mining: "Marble", hydropower: "Significant", agriculture: "Sheep, cheese" },
        environment: ["Glacier retreat"], history: { routes: "Camino de Santiago", expeditions: "Napoleonic wars", cultural: "Basque culture" }
    },
    // Mountains 21-50 abbreviated for space but with same complete structure
    { id: 21, name: "Ural Mountains", highestPeak: "Mount Narodnaya", elevation: 1895, image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800", background: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920", continent: "europe", countries: ["Russia"], flags: ["🇷🇺"], coords: { lat: 65.03, lng: 60.11, zoom: 5 }, length: "2,500 km", avgElevation: "500 m", formation: { origin: "Ancient orogen", age: "250-300 million years", plates: "Continental collision" }, peaks: [{ name: "Mount Narodnaya", elevation: 1895, lat: 65.0333, lng: 60.1167 }], glaciers: [{ name: "Small cirque glaciers", lat: 65.0333, lng: 60.1167 }], passes: [{ name: "Various passes", elevation: 400, lat: 60.0000, lng: 59.5000 }], rivers: ["Pechora", "Kama"], cities: [{ name: "Yekaterinburg", lat: 56.8389, lng: 60.6057 }], wildlife: ["Brown Bear", "Wolverine", "Reindeer"], vegetation: ["Taiga", "Tundra"], climate: ["Continental"], economy: { tourism: "Limited", mining: "Iron, copper, gold", hydropower: "Rivers", agriculture: "Limited" }, environment: ["Industrial pollution"], history: { routes: "Europe-Asia boundary", expeditions: "Russian exploration", cultural: "Europe-Asia divide" } },
    { id: 22, name: "Appalachian Mountains", highestPeak: "Mount Mitchell", elevation: 2037, image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800", background: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920", continent: "americas", countries: ["United States", "Canada"], flags: ["🇺🇸", "🇨🇦"], coords: { lat: 35.76, lng: -82.26, zoom: 6 }, length: "2,400 km", avgElevation: "900 m", formation: { origin: "Ancient orogeny", age: "480 million years", plates: "Multiple orogenies" }, peaks: [{ name: "Mount Mitchell", elevation: 2037, lat: 35.7649, lng: -82.2653 }, { name: "Mount Washington", elevation: 1917, lat: 44.2706, lng: -71.3033 }], glaciers: [{ name: "No glaciers", lat: 35.7649, lng: -82.2653 }], passes: [{ name: "Cumberland Gap", elevation: 491, lat: 36.6008, lng: -83.6694 }], rivers: ["Tennessee River"], cities: [{ name: "Asheville", lat: 35.5951, lng: -82.5515 }], wildlife: ["Black Bear", "White-tailed Deer"], vegetation: ["Deciduous hardwood"], climate: ["Humid subtropical"], economy: { tourism: "Blue Ridge Parkway", mining: "Coal", hydropower: "TVA system", agriculture: "Tobacco, apples" }, environment: ["Mountaintop removal"], history: { routes: "Appalachian Trail", expeditions: "Colonial expansion", cultural: "Appalachian folk culture" } },
    { id: 23, name: "Scandinavian Mountains", highestPeak: "Galdhøpiggen", elevation: 2469, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800", background: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920", continent: "europe", countries: ["Norway", "Sweden", "Finland"], flags: ["🇳🇴", "🇸🇪", "🇫🇮"], coords: { lat: 61.63, lng: 8.31, zoom: 6 }, length: "1,700 km", avgElevation: "1,000 m", formation: { origin: "Caledonian orogeny", age: "400-500 million years", plates: "Laurentia-Baltica" }, peaks: [{ name: "Galdhøpiggen", elevation: 2469, lat: 61.6364, lng: 8.3125 }, { name: "Kebnekaise", elevation: 2097, lat: 67.9000, lng: 18.5167 }], glaciers: [{ name: "Jostedalsbreen", lat: 61.6833, lng: 7.0000 }], passes: [{ name: "Dovre", elevation: 1025, lat: 62.0167, lng: 9.7000 }], rivers: ["Glomma"], cities: [{ name: "Bergen", lat: 60.3913, lng: 5.3221 }], wildlife: ["Reindeer", "Arctic Fox"], vegetation: ["Birch forest", "Alpine tundra"], climate: ["Maritime"], economy: { tourism: "Fjords, Northern Lights", mining: "Iron ore", hydropower: "Major producer", agriculture: "Reindeer herding" }, environment: ["Glacier retreat"], history: { routes: "Viking routes", expeditions: "Polar exploration", cultural: "Sami culture" } },
    { id: 24, name: "Great Dividing Range", highestPeak: "Mount Kosciuszko", elevation: 2228, image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800", background: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920", continent: "oceania", countries: ["Australia"], flags: ["🇦🇺"], coords: { lat: -36.45, lng: 148.26, zoom: 6 }, length: "3,500 km", avgElevation: "800 m", formation: { origin: "Ancient erosion", age: "300 million years", plates: "Australian plate" }, peaks: [{ name: "Mount Kosciuszko", elevation: 2228, lat: -36.4564, lng: 148.2633 }], glaciers: [{ name: "No glaciers", lat: -36.4564, lng: 148.2633 }], passes: [{ name: "Various passes", elevation: 1000, lat: -35.0000, lng: 148.0000 }], rivers: ["Murray River", "Darling River"], cities: [{ name: "Sydney", lat: -33.8688, lng: 151.2093 }], wildlife: ["Platypus", "Koala", "Wombat"], vegetation: ["Eucalyptus forests"], climate: ["Temperate"], economy: { tourism: "Blue Mountains, skiing", mining: "Coal, gold", hydropower: "Snowy Hydro", agriculture: "Cattle, sheep" }, environment: ["Bushfire risk"], history: { routes: "First crossing 1813", expeditions: "Blue Mountains crossing", cultural: "Aboriginal heritage" } },
    { id: 25, name: "Western Ghats", highestPeak: "Anamudi", elevation: 2695, image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800", background: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920", continent: "asia", countries: ["India"], flags: ["🇮🇳"], coords: { lat: 10.16, lng: 77.06, zoom: 7 }, length: "1,600 km", avgElevation: "1,200 m", formation: { origin: "Rift escarpment", age: "150 million years", plates: "Indian plate" }, peaks: [{ name: "Anamudi", elevation: 2695, lat: 10.1667, lng: 77.0667 }], glaciers: [{ name: "No glaciers", lat: 10.1667, lng: 77.0667 }], passes: [{ name: "Palakkad Gap", elevation: 140, lat: 10.7867, lng: 76.6533 }], rivers: ["Godavari", "Krishna"], cities: [{ name: "Mumbai", lat: 19.0760, lng: 72.8777 }], wildlife: ["Tiger", "Asian Elephant"], vegetation: ["Tropical rainforest"], climate: ["Tropical monsoon"], economy: { tourism: "Hill stations", mining: "Iron ore", hydropower: "Many dams", agriculture: "Tea, coffee, spices" }, environment: ["Deforestation"], history: { routes: "Spice routes", expeditions: "Colonial hill stations", cultural: "UNESCO World Heritage" } },
    { id: 26, name: "Japanese Alps", highestPeak: "Mount Hotaka", elevation: 3190, image: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=800", background: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=1920", continent: "asia", countries: ["Japan"], flags: ["🇯🇵"], coords: { lat: 36.28, lng: 137.64, zoom: 8 }, length: "300 km", avgElevation: "2,000 m", formation: { origin: "Volcanic and tectonic", age: "15 million years", plates: "Pacific subduction" }, peaks: [{ name: "Mount Hotaka", elevation: 3190, lat: 36.2894, lng: 137.6472 }, { name: "Mount Yari", elevation: 3180, lat: 36.3417, lng: 137.6472 }], glaciers: [{ name: "Small snow patches", lat: 36.2894, lng: 137.6472 }], passes: [{ name: "Norikura", elevation: 2700, lat: 36.1167, lng: 137.5500 }], rivers: ["Azusa River"], cities: [{ name: "Matsumoto", lat: 36.2381, lng: 137.9720 }], wildlife: ["Japanese Serow", "Japanese Macaque"], vegetation: ["Beech forests"], climate: ["Heavy snowfall"], economy: { tourism: "Skiing, hiking", mining: "Limited", hydropower: "Some dams", agriculture: "Wasabi" }, environment: ["Volcanic activity"], history: { routes: "Ancient trails", expeditions: "Walter Weston", cultural: "1998 Olympics" } },
    { id: 27, name: "Sierra Nevada (Spain)", highestPeak: "Mulhacén", elevation: 3479, image: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800", background: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=1920", continent: "europe", countries: ["Spain"], flags: ["🇪🇸"], coords: { lat: 37.05, lng: -3.31, zoom: 9 }, length: "80 km", avgElevation: "2,000 m", formation: { origin: "Alpine orogeny", age: "20 million years", plates: "African-Iberian" }, peaks: [{ name: "Mulhacén", elevation: 3479, lat: 37.0534, lng: -3.3111 }, { name: "Veleta", elevation: 3396, lat: 37.0583, lng: -3.3667 }], glaciers: [{ name: "No glaciers", lat: 37.0534, lng: -3.3111 }], passes: [{ name: "Veleta road", elevation: 3392, lat: 37.0583, lng: -3.3667 }], rivers: ["Genil River"], cities: [{ name: "Granada", lat: 37.1773, lng: -3.5986 }], wildlife: ["Spanish Ibex"], vegetation: ["Endemic plants"], climate: ["Mediterranean"], economy: { tourism: "Southernmost skiing", mining: "Limited", hydropower: "Some", agriculture: "Fruits" }, environment: ["Snow loss"], history: { routes: "Moorish routes", expeditions: "Botanical expeditions", cultural: "Moorish heritage" } },
    { id: 28, name: "Hengduan Mountains", highestPeak: "Gongga Shan", elevation: 7556, image: "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?w=800", background: "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?w=1920", continent: "asia", countries: ["China"], flags: ["🇨🇳"], coords: { lat: 29.59, lng: 101.87, zoom: 7 }, length: "500 km", avgElevation: "4,000 m", formation: { origin: "India-Asia collision", age: "50 million years", plates: "Indian-Eurasian" }, peaks: [{ name: "Gongga Shan", elevation: 7556, lat: 29.5958, lng: 101.8783 }], glaciers: [{ name: "Hailuogou Glacier", lat: 29.5667, lng: 101.9333 }], passes: [{ name: "Various high passes", elevation: 4500, lat: 29.5000, lng: 101.5000 }], rivers: ["Yangtze", "Mekong", "Salween"], cities: [{ name: "Chengdu", lat: 30.5728, lng: 104.0668 }], wildlife: ["Giant Panda", "Red Panda", "Snow Leopard"], vegetation: ["Richest temperate flora"], climate: ["Varied by valleys"], economy: { tourism: "Emerging trekking", mining: "Various minerals", hydropower: "Major potential", agriculture: "Valley farming" }, environment: ["Biodiversity hotspot"], history: { routes: "Tea-horse road", expeditions: "Plant hunters", cultural: "Three Parallel Rivers UNESCO" } },
    { id: 29, name: "Brooks Range", highestPeak: "Mount Isto", elevation: 2736, image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800", background: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1920", continent: "americas", countries: ["United States"], flags: ["🇺🇸"], coords: { lat: 69.20, lng: -143.75, zoom: 6 }, length: "1,100 km", avgElevation: "1,500 m", formation: { origin: "Tectonic compression", age: "150 million years", plates: "North American plate" }, peaks: [{ name: "Mount Isto", elevation: 2736, lat: 69.2000, lng: -143.7500 }], glaciers: [{ name: "McCall Glacier", lat: 69.3000, lng: -143.8000 }], passes: [{ name: "Atigun Pass", elevation: 1460, lat: 68.1333, lng: -149.4667 }], rivers: ["Yukon tributaries"], cities: [{ name: "Fairbanks", lat: 64.8378, lng: -147.7164 }], wildlife: ["Caribou", "Dall Sheep", "Arctic Wolf"], vegetation: ["Tundra", "Boreal forest"], climate: ["Arctic"], economy: { tourism: "Wilderness", mining: "Oil nearby", hydropower: "None", agriculture: "None" }, environment: ["ANWR controversy"], history: { routes: "Inuit trails", expeditions: "Arctic exploration", cultural: "Gwich'in people" } },
    { id: 30, name: "Ethiopian Highlands", highestPeak: "Ras Dashen", elevation: 4550, image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800", background: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=1920", continent: "africa", countries: ["Ethiopia", "Eritrea"], flags: ["🇪🇹", "🇪🇷"], coords: { lat: 13.23, lng: 38.36, zoom: 7 }, length: "1,600 km", avgElevation: "2,500 m", formation: { origin: "Volcanic flood basalts", age: "75 million years", plates: "Afar Triple Junction" }, peaks: [{ name: "Ras Dashen", elevation: 4550, lat: 13.2333, lng: 38.3667 }], glaciers: [{ name: "No glaciers", lat: 13.2333, lng: 38.3667 }], passes: [{ name: "Simien passes", elevation: 3600, lat: 13.2333, lng: 38.3500 }], rivers: ["Blue Nile", "Awash River"], cities: [{ name: "Addis Ababa", lat: 9.0250, lng: 38.7469 }], wildlife: ["Gelada Baboon", "Ethiopian Wolf", "Walia Ibex"], vegetation: ["Afro-alpine moorland"], climate: ["Tropical highland"], economy: { tourism: "Simien NP", mining: "Gold, potash", hydropower: "Blue Nile dams", agriculture: "Coffee, teff" }, environment: ["Soil erosion"], history: { routes: "Ancient trade routes", expeditions: "European explorations", cultural: "Axumite Empire" } },
    // Mountains 31-50 continue with same format...
    { id: 31, name: "Sierra Nevada (USA)", highestPeak: "Mount Whitney", elevation: 4421, image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800", background: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920", continent: "americas", countries: ["United States"], flags: ["🇺🇸"], coords: { lat: 36.57, lng: -118.29, zoom: 7 }, length: "640 km", avgElevation: "2,700 m", formation: { origin: "Granitic batholith", age: "100 million years", plates: "North American" }, peaks: [{ name: "Mount Whitney", elevation: 4421, lat: 36.5785, lng: -118.2923 }], glaciers: [{ name: "Palisade Glacier", lat: 37.0950, lng: -118.4953 }], passes: [{ name: "Tioga Pass", elevation: 3031, lat: 37.9106, lng: -119.2578 }], rivers: ["Kings River", "Kern River"], cities: [{ name: "Fresno", lat: 36.7378, lng: -119.7871 }], wildlife: ["Black Bear", "Mule Deer"], vegetation: ["Giant Sequoias"], climate: ["Mediterranean"], economy: { tourism: "Yosemite, Sequoia NPs", mining: "Gold Rush", hydropower: "CA water", agriculture: "Central Valley" }, environment: ["Fire risk", "Drought"], history: { routes: "California Trail", expeditions: "John Muir", cultural: "Gold Rush" } },
    { id: 32, name: "Zagros Mountains", highestPeak: "Dena", elevation: 4409, image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800", background: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920", continent: "asia", countries: ["Iran", "Iraq", "Turkey"], flags: ["🇮🇷", "🇮🇶", "🇹🇷"], coords: { lat: 33.65, lng: 51.45, zoom: 6 }, length: "1,600 km", avgElevation: "3,000 m", formation: { origin: "Arabian-Eurasian collision", age: "5-23 million years", plates: "Arabian-Eurasian" }, peaks: [{ name: "Dena", elevation: 4409, lat: 31.4833, lng: 51.1833 }], glaciers: [{ name: "Seasonal ice", lat: 31.5000, lng: 51.2000 }], passes: [{ name: "Polan Pass", elevation: 2600, lat: 32.5000, lng: 50.0000 }], rivers: ["Karun River"], cities: [{ name: "Isfahan", lat: 32.6546, lng: 51.6680 }], wildlife: ["Persian Leopard", "Wild Goat"], vegetation: ["Oak woodlands"], climate: ["Mediterranean"], economy: { tourism: "Cultural sites", mining: "Oil and gas", hydropower: "Major dams", agriculture: "Wheat" }, environment: ["Deforestation"], history: { routes: "Royal Road of Persia", expeditions: "Archaeological", cultural: "Persian civilization" } },
    { id: 33, name: "Transantarctic Mountains", highestPeak: "Mount Kirkpatrick", elevation: 4528, image: "https://images.unsplash.com/photo-1551415923-a2297c7fda79?w=800", background: "https://images.unsplash.com/photo-1551415923-a2297c7fda79?w=1920", continent: "oceania", countries: ["Antarctica"], flags: ["🇦🇶"], coords: { lat: -84.35, lng: 166.65, zoom: 5 }, length: "3,500 km", avgElevation: "2,000 m", formation: { origin: "Rift-related uplift", age: "500 million years", plates: "Antarctic plate" }, peaks: [{ name: "Mount Kirkpatrick", elevation: 4528, lat: -84.3500, lng: 166.6500 }], glaciers: [{ name: "Beardmore Glacier", lat: -83.5000, lng: 172.0000 }], passes: [{ name: "Beardmore route", elevation: 2700, lat: -83.5000, lng: 172.0000 }], rivers: ["No rivers"], cities: [{ name: "McMurdo Station", lat: -77.8500, lng: 166.6667 }], wildlife: ["Seals, penguins on coast"], vegetation: ["Lichens, mosses only"], climate: ["Polar"], economy: { tourism: "Limited cruises", mining: "Protected", hydropower: "None", agriculture: "None" }, environment: ["Climate change"], history: { routes: "Scott, Shackleton routes", expeditions: "Heroic Age", cultural: "Scientific research" } },
    { id: 34, name: "Altai Mountains", highestPeak: "Belukha", elevation: 4506, image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800", background: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920", continent: "asia", countries: ["Russia", "Mongolia", "China", "Kazakhstan"], flags: ["🇷🇺", "🇲🇳", "🇨🇳", "🇰🇿"], coords: { lat: 49.80, lng: 86.59, zoom: 7 }, length: "2,000 km", avgElevation: "2,500 m", formation: { origin: "Ancient orogeny", age: "500 million years", plates: "Central Asian Belt" }, peaks: [{ name: "Belukha", elevation: 4506, lat: 49.8083, lng: 86.5903 }, { name: "Khuiten Peak", elevation: 4374, lat: 49.1500, lng: 87.8000 }], glaciers: [{ name: "Aktru Glacier", lat: 50.0833, lng: 87.7667 }], passes: [{ name: "Seminsky Pass", elevation: 1717, lat: 51.0500, lng: 85.6167 }], rivers: ["Ob River", "Irtysh"], cities: [{ name: "Barnaul", lat: 53.3606, lng: 83.7636 }], wildlife: ["Snow Leopard", "Argali"], vegetation: ["Taiga", "Steppe"], climate: ["Continental"], economy: { tourism: "Adventure, cultural", mining: "Gold, silver", hydropower: "Rivers", agriculture: "Livestock" }, environment: ["Mining impacts"], history: { routes: "Nomadic routes", expeditions: "Pazyryk burials", cultural: "Scythian heritage" } },
    { id: 35, name: "Coast Mountains", highestPeak: "Mount Waddington", elevation: 4019, image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800", background: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920", continent: "americas", countries: ["Canada", "United States"], flags: ["🇨🇦", "🇺🇸"], coords: { lat: 51.36, lng: -125.26, zoom: 7 }, length: "1,600 km", avgElevation: "2,000 m", formation: { origin: "Volcanic and tectonic", age: "100 million years", plates: "Pacific-North American" }, peaks: [{ name: "Mount Waddington", elevation: 4019, lat: 51.3667, lng: -125.2667 }], glaciers: [{ name: "Monarch Icefield", lat: 51.3500, lng: -125.2500 }], passes: [{ name: "Chilcotin routes", elevation: 1500, lat: 51.5000, lng: -123.5000 }], rivers: ["Fraser River"], cities: [{ name: "Vancouver", lat: 49.2827, lng: -123.1207 }], wildlife: ["Spirit Bear", "Grizzly Bear"], vegetation: ["Temperate rainforest"], climate: ["Marine"], economy: { tourism: "Wilderness, heli-skiing", mining: "Copper, gold", hydropower: "Major rivers", agriculture: "Limited" }, environment: ["Glacier retreat"], history: { routes: "Grease trails", expeditions: "1936 First Waddington", cultural: "First Nations" } },
    { id: 36, name: "Taiwan Central Range", highestPeak: "Yu Shan", elevation: 3952, image: "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?w=800", background: "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?w=1920", continent: "asia", countries: ["Taiwan"], flags: ["🇹🇼"], coords: { lat: 23.47, lng: 120.95, zoom: 8 }, length: "340 km", avgElevation: "2,500 m", formation: { origin: "Plate collision", age: "5 million years", plates: "Philippine Sea-Eurasian" }, peaks: [{ name: "Yu Shan", elevation: 3952, lat: 23.4700, lng: 120.9572 }, { name: "Xueshan", elevation: 3886, lat: 24.3833, lng: 121.2333 }], glaciers: [{ name: "No glaciers", lat: 23.4700, lng: 120.9572 }], passes: [{ name: "Wuling Pass", elevation: 3275, lat: 24.3833, lng: 121.2833 }], rivers: ["Zhuoshui River"], cities: [{ name: "Taipei", lat: 25.0330, lng: 121.5654 }], wildlife: ["Formosan Black Bear"], vegetation: ["Subtropical forest"], climate: ["Subtropical"], economy: { tourism: "Mountain hiking", mining: "Marble", hydropower: "River dams", agriculture: "Tea, fruit" }, environment: ["Typhoon damage"], history: { routes: "Japanese trails", expeditions: "Japanese mountaineering", cultural: "Indigenous cultures" } },
    { id: 37, name: "Barisan Mountains", highestPeak: "Mount Kerinci", elevation: 3805, image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800", background: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920", continent: "asia", countries: ["Indonesia"], flags: ["🇮🇩"], coords: { lat: -1.69, lng: 101.26, zoom: 7 }, length: "1,700 km", avgElevation: "1,500 m", formation: { origin: "Subduction volcanism", age: "Tertiary period", plates: "Indo-Australian-Eurasian" }, peaks: [{ name: "Mount Kerinci", elevation: 3805, lat: -1.6972, lng: 101.2642 }, { name: "Mount Leuser", elevation: 3466, lat: 3.5167, lng: 97.3333 }], glaciers: [{ name: "No glaciers", lat: -1.6972, lng: 101.2642 }], passes: [{ name: "Trans-Sumatran routes", elevation: 1500, lat: -2.0000, lng: 101.5000 }], rivers: ["Musi River"], cities: [{ name: "Padang", lat: -0.9471, lng: 100.4172 }], wildlife: ["Sumatran Tiger", "Sumatran Orangutan"], vegetation: ["Tropical rainforest"], climate: ["Tropical"], economy: { tourism: "Volcano trekking", mining: "Coal, gold", hydropower: "Rivers", agriculture: "Coffee, rubber" }, environment: ["Deforestation"], history: { routes: "Spice trade", expeditions: "Dutch colonial", cultural: "Minangkabau, Batak" } },
    { id: 38, name: "Annamite Range", highestPeak: "Phou Bia", elevation: 2819, image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800", background: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920", continent: "asia", countries: ["Vietnam", "Laos", "Cambodia"], flags: ["🇻🇳", "🇱🇦", "🇰🇭"], coords: { lat: 19.00, lng: 103.00, zoom: 6 }, length: "1,100 km", avgElevation: "1,000 m", formation: { origin: "Indo-China collision", age: "250 million years", plates: "Indo-Australian" }, peaks: [{ name: "Phou Bia", elevation: 2819, lat: 19.0100, lng: 103.1400 }], glac    // Continuing from mountain 38...
    glaciers: [{ name: "No glaciers", lat: 19.0100, lng: 103.1400 }],
        passes: [{ name: "Mu Gia Pass", elevation: 396, lat: 17.7500, lng: 105.7800 }],
        rivers: ["Mekong tributaries"],
        cities: [{ name: "Hanoi", lat: 21.0285, lng: 105.8542 }, { name: "Vientiane", lat: 17.9757, lng: 102.6331 }],
        wildlife: ["Saola", "Douc Langur", "Asian Elephant"],
        vegetation: ["Tropical forests", "Karst formations"],
        climate: ["Tropical monsoon"],
        economy: { tourism: "Emerging eco-tourism", mining: "Bauxite", hydropower: "Mekong tributaries", agriculture: "Rice, coffee" },
        environment: ["Deforestation", "Wildlife trafficking"],
        history: { routes: "Ho Chi Minh Trail", expeditions: "French exploration", cultural: "Hmong, Khmer cultures" }
    },
    {
        id: 39, name: "Cantabrian Mountains", highestPeak: "Torre de Cerredo", elevation: 2650,
        image: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800",
        background: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=1920",
        continent: "europe", countries: ["Spain"], flags: ["🇪🇸"],
        coords: { lat: 43.19, lng: -4.85, zoom: 8 }, length: "480 km", avgElevation: "1,500 m",
        formation: { origin: "Variscan orogeny", age: "300 million years", plates: "Iberian plate" },
        peaks: [{ name: "Torre de Cerredo", elevation: 2650, lat: 43.1944, lng: -4.8514 }],
        glaciers: [{ name: "No glaciers", lat: 43.1944, lng: -4.8514 }],
        passes: [{ name: "Puerto de Pajares", elevation: 1379, lat: 43.0100, lng: -5.7600 }],
        rivers: ["Ebro tributaries"],
        cities: [{ name: "Oviedo", lat: 43.3614, lng: -5.8493 }, { name: "Santander", lat: 43.4623, lng: -3.8100 }],
        wildlife: ["Cantabrian Brown Bear", "Iberian Wolf"],
        vegetation: ["Atlantic forests", "Alpine meadows"],
        climate: ["Atlantic", "Wet"],
        economy: { tourism: "Picos de Europa NP", mining: "Coal, iron", hydropower: "Rivers", agriculture: "Dairy, cheese" },
        environment: ["Mining impacts"],
        history: { routes: "Camino de Santiago", expeditions: "Mining heritage", cultural: "Asturian, Basque cultures" }
    },
    {
        id: 40, name: "Qinling Mountains", highestPeak: "Taibai Shan", elevation: 3767,
        image: "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?w=800",
        background: "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?w=1920",
        continent: "asia", countries: ["China"], flags: ["🇨🇳"],
        coords: { lat: 34.05, lng: 107.82, zoom: 7 }, length: "500 km", avgElevation: "2,000 m",
        formation: { origin: "Tectonic collision", age: "400 million years", plates: "North-South China" },
        peaks: [{ name: "Taibai Shan", elevation: 3767, lat: 34.0500, lng: 107.8200 }],
        glaciers: [{ name: "No permanent glaciers", lat: 34.0500, lng: 107.8200 }],
        passes: [{ name: "Various passes", elevation: 2000, lat: 34.0000, lng: 107.5000 }],
        rivers: ["Wei River", "Han River"],
        cities: [{ name: "Xi'an", lat: 34.2658, lng: 108.9541 }],
        wildlife: ["Giant Panda", "Golden Snub-nosed Monkey", "Takin"],
        vegetation: ["Mixed deciduous", "Bamboo forests"],
        climate: ["Transition zone N-S China"],
        economy: { tourism: "Panda reserves", mining: "Various", hydropower: "Rivers", agriculture: "Diverse" },
        environment: ["Conservation success"],
        history: { routes: "Ancient trade routes", expeditions: "Scientific surveys", cultural: "Taoist sacred mountains" }
    },
    {
        id: 41, name: "Apennines", highestPeak: "Corno Grande", elevation: 2912,
        image: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800",
        background: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=1920",
        continent: "europe", countries: ["Italy", "San Marino"], flags: ["🇮🇹", "🇸🇲"],
        coords: { lat: 42.46, lng: 13.56, zoom: 6 }, length: "1,200 km", avgElevation: "1,200 m",
        formation: { origin: "African-European collision", age: "30 million years", plates: "Adriatic-European" },
        peaks: [{ name: "Corno Grande", elevation: 2912, lat: 42.4683, lng: 13.5661 }],
        glaciers: [{ name: "Calderone Glacier", lat: 42.4700, lng: 13.5700 }],
        passes: [{ name: "Futa Pass", elevation: 903, lat: 44.1000, lng: 11.3200 }],
        rivers: ["Tiber", "Arno", "Po tributaries"],
        cities: [{ name: "Rome", lat: 41.9028, lng: 12.4964 }, { name: "Florence", lat: 43.7696, lng: 11.2558 }],
        wildlife: ["Apennine Wolf", "Marsican Brown Bear"],
        vegetation: ["Mediterranean scrub", "Beech forests"],
        climate: ["Mediterranean", "Continental interior"],
        economy: { tourism: "Cultural, hiking", mining: "Marble", hydropower: "Rivers", agriculture: "Wine, olives, truffles" },
        environment: ["Earthquake risk", "Erosion"],
        history: { routes: "Via Flaminia", expeditions: "Roman roads", cultural: "Etruscan, Roman heritage" }
    },
    {
        id: 42, name: "Verkhoyansk Range", highestPeak: "Mus-Khaya", elevation: 2959,
        image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800",
        background: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1920",
        continent: "asia", countries: ["Russia"], flags: ["🇷🇺"],
        coords: { lat: 67.50, lng: 133.50, zoom: 5 }, length: "1,200 km", avgElevation: "1,500 m",
        formation: { origin: "Mesozoic orogeny", age: "150 million years", plates: "Eurasian plate" },
        peaks: [{ name: "Mus-Khaya", elevation: 2959, lat: 64.3500, lng: 143.0500 }],
        glaciers: [{ name: "Small glaciers", lat: 64.3500, lng: 143.0500 }],
        passes: [{ name: "Various", elevation: 1500, lat: 67.0000, lng: 133.0000 }],
        rivers: ["Lena tributaries", "Yana River"],
        cities: [{ name: "Yakutsk", lat: 62.0355, lng: 129.6755 }],
        wildlife: ["Reindeer", "Sable", "Wolverine"],
        vegetation: ["Taiga", "Tundra"],
        climate: ["Extreme continental (-67.8°C recorded)"],
        economy: { tourism: "Extreme cold tourism", mining: "Gold, tin, diamonds", hydropower: "Rivers", agriculture: "Minimal" },
        environment: ["Permafrost thaw"],
        history: { routes: "Gulag routes", expeditions: "Soviet exploration", cultural: "Yakut people" }
    },
    {
        id: 43, name: "Dinaric Alps", highestPeak: "Maja Jezercë", elevation: 2694,
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
        background: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920",
        continent: "europe", countries: ["Slovenia", "Croatia", "Bosnia", "Montenegro", "Albania", "Serbia", "Kosovo"], flags: ["🇸🇮", "🇭🇷", "🇧🇦", "🇲🇪", "🇦🇱", "🇷🇸", "🇽🇰"],
        coords: { lat: 42.43, lng: 19.80, zoom: 6 }, length: "650 km", avgElevation: "1,500 m",
        formation: { origin: "Alpine orogeny", age: "65 million years", plates: "African-Eurasian" },
        peaks: [{ name: "Maja Jezercë", elevation: 2694, lat: 42.4300, lng: 19.8000 }],
        glaciers: [{ name: "No glaciers", lat: 42.4300, lng: 19.8000 }],
        passes: [{ name: "Vršič Pass", elevation: 1611, lat: 46.4333, lng: 13.7444 }],
        rivers: ["Neretva", "Drina", "Vrbas"],
        cities: [{ name: "Sarajevo", lat: 43.8563, lng: 18.4131 }, { name: "Ljubljana", lat: 46.0569, lng: 14.5058 }],
        wildlife: ["Brown Bear", "Wolf", "Lynx"],
        vegetation: ["Karst vegetation", "Beech forests"],
        climate: ["Mediterranean coast", "Continental interior"],
        economy: { tourism: "Adriatic coast, caves", mining: "Bauxite", hydropower: "Rivers", agriculture: "Wine, olives" },
        environment: ["Karst vulnerability"],
        history: { routes: "Roman roads", expeditions: "Habsburg exploration", cultural: "Diverse Balkan cultures" }
    },
    {
        id: 44, name: "Serra do Mar", highestPeak: "Pico Paraná", elevation: 1877,
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
        background: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920",
        continent: "americas", countries: ["Brazil"], flags: ["🇧🇷"],
        coords: { lat: -25.25, lng: -48.83, zoom: 7 }, length: "1,500 km", avgElevation: "1,000 m",
        formation: { origin: "Continental margin uplift", age: "130 million years", plates: "South American plate" },
        peaks: [{ name: "Pico Paraná", elevation: 1877, lat: -25.2500, lng: -48.8300 }],
        glaciers: [{ name: "No glaciers", lat: -25.2500, lng: -48.8300 }],
        passes: [{ name: "Serra passes", elevation: 900, lat: -25.0000, lng: -49.0000 }],
        rivers: ["Paraná tributaries"],
        cities: [{ name: "São Paulo", lat: -23.5505, lng: -46.6333 }, { name: "Curitiba", lat: -25.4284, lng: -49.2733 }],
        wildlife: ["Jaguar", "Golden Lion Tamarin", "Tapir"],
        vegetation: ["Atlantic Forest (critically endangered)"],
        climate: ["Tropical", "High rainfall"],
        economy: { tourism: "Eco-tourism", mining: "Granite", hydropower: "Rivers", agriculture: "Bananas, coffee" },
        environment: ["Severe deforestation", "Landslides"],
        history: { routes: "Colonial routes", expeditions: "Portuguese exploration", cultural: "Indigenous and colonial" }
    },
    {
        id: 45, name: "Guiana Highlands", highestPeak: "Pico da Neblina", elevation: 2994,
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
        background: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920",
        continent: "americas", countries: ["Venezuela", "Brazil", "Guyana"], flags: ["🇻🇪", "🇧🇷", "🇬🇾"],
        coords: { lat: 5.14, lng: -60.76, zoom: 7 }, length: "1,600 km", avgElevation: "1,000 m",
        formation: { origin: "Ancient Precambrian shield", age: "2 billion years", plates: "South American craton" },
        peaks: [{ name: "Pico da Neblina", elevation: 2994, lat: 0.8000, lng: -66.0000 }, { name: "Mount Roraima", elevation: 2810, lat: 5.1433, lng: -60.7625 }],
        glaciers: [{ name: "No glaciers", lat: 5.1433, lng: -60.7625 }],
        passes: [{ name: "Various", elevation: 1500, lat: 5.0000, lng: -61.0000 }],
        rivers: ["Orinoco", "Amazon tributaries", "Angel Falls"],
        cities: [{ name: "Ciudad Bolívar", lat: 8.1222, lng: -63.5497 }],
        wildlife: ["Harpy Eagle", "Giant Anteater", "Tepui endemic species"],
        vegetation: ["Tepui unique flora", "Rainforest"],
        climate: ["Tropical", "Heavy rainfall"],
        economy: { tourism: "Angel Falls, tepuis", mining: "Gold, diamonds, iron", hydropower: "Rivers", agriculture: "Limited" },
        environment: ["Mining impacts", "Deforestation"],
        history: { routes: "Explorer routes", expeditions: "Lost World expeditions", cultural: "Indigenous Pemon" }
    },
    {
        id: 46, name: "Ahaggar Mountains", highestPeak: "Mount Tahat", elevation: 2918,
        image: "https://images.unsplash.com/photo-1489493887464-892be6d1daae?w=800",
        background: "https://images.unsplash.com/photo-1489493887464-892be6d1daae?w=1920",
        continent: "africa", countries: ["Algeria"], flags: ["🇩🇿"],
        coords: { lat: 23.28, lng: 5.53, zoom: 7 }, length: "500 km", avgElevation: "2,000 m",
        formation: { origin: "Volcanic highland", age: "2 million years", plates: "African plate interior" },
        peaks: [{ name: "Mount Tahat", elevation: 2918, lat: 23.2833, lng: 5.5333 }],
        glaciers: [{ name: "No glaciers", lat: 23.2833, lng: 5.5333 }],
        passes: [{ name: "Desert passes", elevation: 2000, lat: 23.0000, lng: 5.5000 }],
        rivers: ["Dry wadis"],
        cities: [{ name: "Tamanrasset", lat: 22.7850, lng: 5.5228 }],
        wildlife: ["Barbary Sheep", "Desert Fox"],
        vegetation: ["Desert scrub", "Relict Mediterranean species"],
        climate: ["Saharan", "Extreme temperature range"],
        economy: { tourism: "Desert tourism", mining: "Uranium, gold", hydropower: "None", agriculture: "Oasis agriculture" },
        environment: ["Desertification"],
        history: { routes: "Trans-Saharan caravan routes", expeditions: "French exploration", cultural: "Tuareg heritage" }
    },
    {
        id: 47, name: "Tibesti Mountains", highestPeak: "Emi Koussi", elevation: 3445,
        image: "https://images.unsplash.com/photo-1489493887464-892be6d1daae?w=800",
        background: "https://images.unsplash.com/photo-1489493887464-892be6d1daae?w=1920",
        continent: "africa", countries: ["Chad", "Libya"], flags: ["🇹🇩", "🇱🇾"],
        coords: { lat: 21.10, lng: 17.43, zoom: 7 }, length: "400 km", avgElevation: "2,500 m",
        formation: { origin: "Volcanic", age: "7 million years", plates: "African plate" },
        peaks: [{ name: "Emi Koussi", elevation: 3445, lat: 19.8000, lng: 18.5500 }],
        glaciers: [{ name: "No glaciers", lat: 19.8000, lng: 18.5500 }],
        passes: [{ name: "Desert passes", elevation: 2500, lat: 20.0000, lng: 17.5000 }],
        rivers: ["Dry valleys"],
        cities: [{ name: "N'Djamena", lat: 12.1348, lng: 15.0557 }],
        wildlife: ["Barbary Sheep", "Desert Crocodile (relict)"],
        vegetation: ["Saharan desert", "Volcanic soils"],
        climate: ["Hyper-arid"],
        economy: { tourism: "Limited access", mining: "Uranium potential", hydropower: "None", agriculture: "None" },
        environment: ["One of world's most remote areas"],
        history: { routes: "Ancient Libya-Chad routes", expeditions: "French scientific", cultural: "Toubou people" }
    },
    {
        id: 48, name: "Vosges Mountains", highestPeak: "Grand Ballon", elevation: 1424,
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
        background: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920",
        continent: "europe", countries: ["France"], flags: ["🇫🇷"],
        coords: { lat: 47.90, lng: 7.10, zoom: 8 }, length: "120 km", avgElevation: "800 m",
        formation: { origin: "Variscan orogeny", age: "300 million years", plates: "European plate" },
        peaks: [{ name: "Grand Ballon", elevation: 1424, lat: 47.9000, lng: 7.1000 }],
        glaciers: [{ name: "No glaciers", lat: 47.9000, lng: 7.1000 }],
        passes: [{ name: "Col de la Schlucht", elevation: 1139, lat: 48.0667, lng: 7.0222 }],
        rivers: ["Rhine tributaries", "Moselle tributaries"],
        cities: [{ name: "Strasbourg", lat: 48.5734, lng: 7.7521 }, { name: "Mulhouse", lat: 47.7508, lng: 7.3359 }],
        wildlife: ["Red Deer", "Lynx (reintroduced)"],
        vegetation: ["Beech forests", "Fir forests"],
        climate: ["Continental", "Cold winters"],
        economy: { tourism: "Hiking, wine route", mining: "Potash (historical)", hydropower: "Rivers", agriculture: "Wine, dairy" },
        environment: ["Acid rain damage (recovering)"],
        history: { routes: "Roman roads", expeditions: "WWI battlefields", cultural: "Alsatian heritage" }
    },
    {
        id: 49, name: "Sudetes", highestPeak: "Sněžka", elevation: 1603,
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
        background: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920",
        continent: "europe", countries: ["Czech Republic", "Poland", "Germany"], flags: ["🇨🇿", "🇵🇱", "🇩🇪"],
        coords: { lat: 50.73, lng: 15.73, zoom: 8 }, length: "300 km", avgElevation: "800 m",
        formation: { origin: "Variscan orogeny", age: "350 million years", plates: "European plate" },
        peaks: [{ name: "Sněžka", elevation: 1603, lat: 50.7361, lng: 15.7397 }],
        glaciers: [{ name: "No glaciers", lat: 50.7361, lng: 15.7397 }],
        passes: [{ name: "Various", elevation: 800, lat: 50.5000, lng: 15.5000 }],
        rivers: ["Elbe tributaries", "Oder tributaries"],
        cities: [{ name: "Wrocław", lat: 51.1079, lng: 17.0385 }, { name: "Prague", lat: 50.0755, lng: 14.4378 }],
        wildlife: ["Red Deer", "Wild Boar"],
        vegetation: ["Spruce forests", "Subalpine meadows"],
        climate: ["Continental", "Cold winters"],
        economy: { tourism: "Spa towns, skiing", mining: "Coal (historical)", hydropower: "Rivers", agriculture: "Limited" },
        environment: ["Historical pollution (recovering)"],
        history: { routes: "Trade routes", expeditions: "Scientific surveys", cultural: "German-Czech heritage" }
    },
    {
        id: 50, name: "Arakan Mountains", highestPeak: "Mount Victoria", elevation: 3053,
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
        background: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920",
        continent: "asia", countries: ["Myanmar", "India", "Bangladesh"], flags: ["🇲🇲", "🇮🇳", "🇧🇩"],
        coords: { lat: 21.20, lng: 93.93, zoom: 7 }, length: "950 km", avgElevation: "1,500 m",
        formation: { origin: "Indian-Burma collision", age: "50 million years", plates: "Indian-Eurasian" },
        peaks: [{ name: "Mount Victoria", elevation: 3053, lat: 21.2000, lng: 93.9300 }],
        glaciers: [{ name: "No glaciers", lat: 21.2000, lng: 93.9300 }],
        passes: [{ name: "An Pass", elevation: 455, lat: 20.4000, lng: 93.3500 }],
        rivers: ["Irrawaddy tributaries", "Kaladan River"],
        cities: [{ name: "Sittwe", lat: 20.1500, lng: 92.9000 }, { name: "Mandalay", lat: 21.9588, lng: 96.0891 }],
        wildlife: ["Hoolock Gibbon", "Asian Elephant", "Clouded Leopard"],
        vegetation: ["Tropical rainforest", "Bamboo forests"],
        climate: ["Tropical monsoon", "Heavy rainfall"],
        economy: { tourism: "Limited due to conflict", mining: "Various minerals", hydropower: "Rivers", agriculture: "Rice, teak" },
        environment: ["Deforestation", "Conflict impacts"],
        history: { routes: "WWII Burma Road", expeditions: "British colonial", cultural: "Chin, Rakhine cultures" }
    }
];

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = mountainData;
}
