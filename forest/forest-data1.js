/* ========================================
   FOREST DATA FILE 1 - Forests 1-10
   Sorted by area (largest to smallest)
   ======================================== */

const forestData1 = [
    {
        id: 1,
        name: "Taiga (Boreal Forest)",
        region: "Russia, Canada, Scandinavia, Alaska",
        area: 17000000,
        type: "Boreal Forest (Coniferous)",
        image: "https://images.unsplash.com/photo-1476231790875-69f399a68a93?w=400",
        profileImage: "https://images.unsplash.com/photo-1476231790875-69f399a68a93?w=1920",
        galleryImages: [
            "https://images.unsplash.com/photo-1476231790875-69f399a68a93?w=800",
            "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800",
            "https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?w=800",
            "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=800"
        ],
        coordinates: { lat: 64, lng: 100, zoom: 3 },
        location: {
            continent: "Eurasia & North America",
            countries: ["Russia", "Canada", "Sweden", "Norway", "Finland", "USA (Alaska)"]
        },
        climate: {
            rainfall: "300-900 mm annually",
            temperature: "-40°C to 20°C seasonal variation"
        },
        vegetation: ["Norway Spruce", "Scots Pine", "Siberian Fir", "Larch", "Birch", "Aspen"],
        biodiversity: {
            animals: ["Brown Bear", "Gray Wolf", "Moose", "Lynx", "Wolverine", "Siberian Tiger", "Reindeer"],
            birds: ["Siberian Jay", "Great Grey Owl", "Capercaillie", "Crossbill", "Goshawk"],
            insects: ["Bark Beetle", "Wood Ant", "Mosquito", "Black Fly"]
        },
        majorRivers: ["Yenisei River", "Ob River", "Lena River", "Mackenzie River", "Yukon River"],
        indigenousCommunities: ["Sami", "Nenets", "Evenki", "First Nations", "Inuit", "Yakut"],
        economicImportance: ["Timber production", "Pulp and paper industry", "Mining", "Oil and gas extraction", "Hunting and trapping"],
        environmentalImportance: ["World's largest terrestrial biome", "Major carbon storage", "Climate regulation", "Freshwater resources", "Permafrost preservation"],
        environmentalIssues: ["Climate change", "Industrial logging", "Permafrost thaw", "Forest fires", "Mining pollution", "Oil spills"],
        conservationEfforts: ["Protected forest reserves", "Sustainable forestry certification (FSC)", "Indigenous land management", "Climate monitoring programs"],
        boundary: [[50, 60], [50, 180], [70, 180], [70, 60]],
        rivers: [
            { name: "Yenisei River", path: [[55, 92], [70, 86]] },
            { name: "Ob River", path: [[55, 73], [68, 73]] }
        ],
        protectedAreas: [
            { name: "Yugyd Va National Park", lat: 64, lng: 59, radius: 80000 },
            { name: "Pechora-Ilych Reserve", lat: 62, lng: 57, radius: 50000 }
        ]
    },
    {
        id: 2,
        name: "Amazon Rainforest",
        region: "Brazil, Peru, Colombia, Venezuela, Ecuador, Bolivia, Guyana, Suriname, French Guiana",
        area: 5500000,
        type: "Tropical Rainforest",
        image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400",
        profileImage: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1920",
        galleryImages: [
            "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800",
            "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800",
            "https://images.unsplash.com/photo-1440581572325-0bea30075d9d?w=800",
            "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?w=800"
        ],
        coordinates: { lat: -3.4653, lng: -62.2159, zoom: 5 },
        location: {
            continent: "South America",
            countries: ["Brazil", "Peru", "Colombia", "Venezuela", "Ecuador", "Bolivia", "Guyana", "Suriname", "French Guiana"]
        },
        climate: {
            rainfall: "2000-3000 mm annually",
            temperature: "25-28°C average year-round"
        },
        vegetation: ["Mahogany", "Brazil Nut Tree", "Rubber Tree", "Kapok", "Acai Palm", "Giant Water Lily", "Ceiba"],
        biodiversity: {
            animals: ["Jaguar", "Sloth", "Anaconda", "Capybara", "Pink River Dolphin", "Tapir", "Giant Anteater", "Howler Monkey"],
            birds: ["Scarlet Macaw", "Toucan", "Harpy Eagle", "Hoatzin", "Blue and Yellow Macaw", "Cock-of-the-rock"],
            insects: ["Morpho Butterfly", "Bullet Ant", "Tarantula", "Leafcutter Ant", "Hercules Beetle"]
        },
        majorRivers: ["Amazon River", "Rio Negro", "Madeira River", "Tapajós River", "Xingu River"],
        indigenousCommunities: ["Yanomami", "Kayapo", "Awá", "Ticuna", "Ashaninka", "Munduruku"],
        economicImportance: ["Timber", "Medicinal plants", "Brazil nuts", "Ecotourism", "Rubber", "Cacao"],
        environmentalImportance: ["Produces 20% of world's oxygen", "Major carbon sink", "Climate regulation", "Biodiversity hotspot", "Freshwater reservoir"],
        environmentalIssues: ["Deforestation", "Illegal logging", "Forest fires", "Mining", "Agricultural expansion", "Cattle ranching"],
        conservationEfforts: ["Amazon Region Protected Areas Program (ARPA)", "Indigenous land rights", "International agreements", "Sustainable forestry"],
        boundary: [[-10, -75], [-10, -50], [5, -50], [5, -75]],
        rivers: [
            { name: "Amazon River", path: [[-4, -73], [-2, -55]] },
            { name: "Rio Negro", path: [[-1, -67], [-3, -60]] }
        ],
        protectedAreas: [
            { name: "Yasuní National Park", lat: -1, lng: -76, radius: 60000 },
            { name: "Tumucumaque National Park", lat: 2, lng: -53, radius: 80000 }
        ]
    },
    {
        id: 3,
        name: "Congo Rainforest",
        region: "Democratic Republic of Congo, Republic of Congo, Cameroon, Gabon, Central African Republic, Equatorial Guinea",
        area: 2000000,
        type: "Tropical Rainforest",
        image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=400",
        profileImage: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920",
        galleryImages: [
            "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800",
            "https://images.unsplash.com/photo-1504567961542-e24d9439a724?w=800",
            "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=800"
        ],
        coordinates: { lat: 0, lng: 22, zoom: 5 },
        location: {
            continent: "Africa",
            countries: ["Democratic Republic of Congo", "Republic of Congo", "Cameroon", "Gabon", "Central African Republic", "Equatorial Guinea"]
        },
        climate: {
            rainfall: "1500-2000 mm annually",
            temperature: "24-27°C average"
        },
        vegetation: ["African Mahogany", "Ebony", "Sapele", "Iroko", "Limba", "Moabi"],
        biodiversity: {
            animals: ["Mountain Gorilla", "Forest Elephant", "Okapi", "Bonobo", "Leopard", "Chimpanzee", "Bongo"],
            birds: ["African Grey Parrot", "Congo Peafowl", "Great Blue Turaco", "Shoebill"],
            insects: ["Goliath Beetle", "Driver Ant", "African Giant Swallowtail"]
        },
        majorRivers: ["Congo River", "Ubangi River", "Sangha River", "Kasai River"],
        indigenousCommunities: ["Mbuti Pygmies", "Aka", "Baka", "Twa"],
        economicImportance: ["Timber", "Bushmeat", "Mining (coltan, diamonds, gold)", "Hydroelectric power"],
        environmentalImportance: ["Second largest rainforest", "Major carbon sink", "Biodiversity hotspot", "Water cycle regulation"],
        environmentalIssues: ["Deforestation", "Poaching", "Mining impacts", "Agricultural expansion", "Political instability"],
        conservationEfforts: ["Congo Basin Forest Partnership", "Protected area networks", "Community-based conservation", "Great Ape programs"],
        boundary: [[-5, 10], [-5, 32], [5, 32], [5, 10]],
        rivers: [
            { name: "Congo River", path: [[-4, 15], [0, 25]] }
        ],
        protectedAreas: [
            { name: "Virunga National Park", lat: -0.5, lng: 29.5, radius: 50000 },
            { name: "Salonga National Park", lat: -2, lng: 21, radius: 60000 }
        ]
    },
    {
        id: 4,
        name: "Southeast Asian Rainforest",
        region: "Indonesia, Malaysia, Thailand, Myanmar, Philippines, Vietnam",
        area: 1500000,
        type: "Tropical Rainforest",
        image: "https://images.unsplash.com/photo-1551244072-5d12893278ab?w=400",
        profileImage: "https://images.unsplash.com/photo-1551244072-5d12893278ab?w=1920",
        galleryImages: [
            "https://images.unsplash.com/photo-1551244072-5d12893278ab?w=800",
            "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
            "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800"
        ],
        coordinates: { lat: 2, lng: 110, zoom: 5 },
        location: {
            continent: "Asia",
            countries: ["Indonesia", "Malaysia", "Thailand", "Myanmar", "Philippines", "Vietnam", "Brunei"]
        },
        climate: {
            rainfall: "2000-4000 mm annually",
            temperature: "25-30°C average"
        },
        vegetation: ["Dipterocarp Trees", "Teak", "Bamboo", "Rattan", "Rafflesia", "Orchids", "Ficus"],
        biodiversity: {
            animals: ["Orangutan", "Sumatran Tiger", "Asian Elephant", "Sun Bear", "Proboscis Monkey", "Clouded Leopard"],
            birds: ["Hornbill", "Argus Pheasant", "Kingfisher", "Pitta", "Great Argus"],
            insects: ["Atlas Moth", "Rhinoceros Beetle", "Giant Forest Ant"]
        },
        majorRivers: ["Mekong River", "Irrawaddy River", "Kapuas River", "Rajang River"],
        indigenousCommunities: ["Dayak", "Orang Asli", "Karen", "Penan", "Bajau"],
        economicImportance: ["Palm oil", "Rubber", "Timber", "Ecotourism", "Rattan", "Spices"],
        environmentalImportance: ["Megadiverse region", "Carbon storage", "Water cycle regulation", "Endemic species habitat"],
        environmentalIssues: ["Palm oil plantations", "Deforestation", "Illegal wildlife trade", "Habitat fragmentation", "Peat fires"],
        conservationEfforts: ["Heart of Borneo initiative", "Protected areas", "Sustainable palm oil certification (RSPO)", "Reforestation programs"],
        boundary: [[-8, 95], [-8, 140], [20, 140], [20, 95]],
        rivers: [
            { name: "Mekong River", path: [[22, 100], [10, 106]] },
            { name: "Kapuas River", path: [[0, 109], [0, 112]] }
        ],
        protectedAreas: [
            { name: "Gunung Leuser National Park", lat: 3.8, lng: 97.3, radius: 40000 },
            { name: "Taman Negara", lat: 4.5, lng: 102.5, radius: 35000 }
        ]
    },
    {
        id: 5,
        name: "North American Temperate Forests",
        region: "USA, Canada (Pacific Northwest, Eastern Forests)",
        area: 1000000,
        type: "Temperate Deciduous & Coniferous Forest",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400",
        profileImage: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920",
        galleryImages: [
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800",
            "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800",
            "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800"
        ],
        coordinates: { lat: 45, lng: -90, zoom: 4 },
        location: {
            continent: "North America",
            countries: ["USA", "Canada"]
        },
        climate: {
            rainfall: "750-1500 mm annually",
            temperature: "-10°C to 25°C seasonal variation"
        },
        vegetation: ["Oak", "Maple", "Beech", "Douglas Fir", "Redwood", "Hemlock", "Pine"],
        biodiversity: {
            animals: ["Black Bear", "White-tailed Deer", "Raccoon", "Wild Turkey", "Beaver", "Mountain Lion"],
            birds: ["Bald Eagle", "Cardinal", "Blue Jay", "Pileated Woodpecker", "Owl species"],
            insects: ["Monarch Butterfly", "Firefly", "Cicada"]
        },
        majorRivers: ["Mississippi River", "Ohio River", "St. Lawrence River", "Columbia River"],
        indigenousCommunities: ["Cherokee", "Iroquois", "Ojibwe", "Coast Salish", "Algonquin"],
        economicImportance: ["Timber", "Recreation", "Maple syrup", "Tourism", "Hunting"],
        environmentalImportance: ["Carbon sequestration", "Watershed protection", "Wildlife habitat", "Air purification"],
        environmentalIssues: ["Urban development", "Invasive species", "Climate change", "Acid rain", "Forest fragmentation"],
        conservationEfforts: ["National forests", "State parks", "Land trusts", "Reforestation initiatives"],
        boundary: [[35, -95], [35, -75], [50, -75], [50, -95]],
        rivers: [
            { name: "Mississippi River", path: [[45, -93], [30, -90]] }
        ],
        protectedAreas: [
            { name: "Great Smoky Mountains", lat: 35.6, lng: -83.5, radius: 30000 },
            { name: "Adirondack Park", lat: 44, lng: -74, radius: 40000 }
        ]
    },
    {
        id: 6,
        name: "European Temperate Forests",
        region: "Germany, France, Poland, Czech Republic, Romania, Ukraine",
        area: 800000,
        type: "Temperate Deciduous & Mixed Forest",
        image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=400",
        profileImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920",
        galleryImages: [
            "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
            "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800"
        ],
        coordinates: { lat: 50, lng: 15, zoom: 4 },
        location: {
            continent: "Europe",
            countries: ["Germany", "France", "Poland", "Czech Republic", "Romania", "Ukraine", "Austria"]
        },
        climate: {
            rainfall: "600-1200 mm annually",
            temperature: "-5°C to 22°C seasonal variation"
        },
        vegetation: ["European Beech", "Oak", "Hornbeam", "Norway Spruce", "Silver Fir", "Ash"],
        biodiversity: {
            animals: ["European Bison", "Red Deer", "Wild Boar", "Wolf", "Lynx", "Brown Bear"],
            birds: ["European Robin", "Woodpecker", "Eagle Owl", "Capercaillie", "Black Stork"],
            insects: ["Stag Beetle", "Great Capricorn Beetle", "Rosalia Longicorn"]
        },
        majorRivers: ["Danube River", "Rhine River", "Vistula River", "Elbe River"],
        indigenousCommunities: ["Historical Celtic", "Germanic", "Slavic settlements"],
        economicImportance: ["Timber", "Recreation", "Tourism", "Hunting", "Mushroom foraging"],
        environmentalImportance: ["Biodiversity conservation", "Carbon storage", "Water filtration", "Cultural heritage"],
        environmentalIssues: ["Forest dieback", "Climate change", "Invasive species", "Air pollution"],
        conservationEfforts: ["Natura 2000 network", "National parks", "FSC certification", "Wildlife corridors"],
        boundary: [[45, 5], [45, 25], [55, 25], [55, 5]],
        rivers: [
            { name: "Danube River", path: [[48, 8], [45, 25]] }
        ],
        protectedAreas: [
            { name: "Białowieża Forest", lat: 52.7, lng: 23.9, radius: 25000 },
            { name: "Bavarian Forest", lat: 49, lng: 13.3, radius: 20000 }
        ]
    },
    {{
        id: 7,
        name: "Pacific Northwest Temperate Rainforest",
        region: "USA (Washington, Oregon), Canada (British Columbia)",
        area: 250000,
        type: "Temperate Rainforest",
        image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=400",
        profileImage: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1920",
        galleryImages: [
            "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800",
            "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800",
            "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=800",
            "https://images.unsplash.com/photo-1440581572325-0bea30075d9d?w=800"
        ],
        coordinates: { lat: 47.5, lng: -123.5, zoom: 7 },
        location: {
            continent: "North America",
            countries: ["USA (Washington, Oregon, California)", "Canada (British Columbia)"]
        },
        climate: {
            rainfall: "2000-5000 mm annually",
            temperature: "5-15°C average"
        },
        vegetation: ["Douglas Fir", "Western Red Cedar", "Sitka Spruce", "Western Hemlock", "Big Leaf Maple", "Sword Fern"],
        biodiversity: {
            animals: ["Black Bear", "Roosevelt Elk", "Cougar", "Salmon species", "Banana Slug", "Pacific Giant Salamander"],
            birds: ["Bald Eagle", "Marbled Murrelet", "Spotted Owl", "Varied Thrush", "Steller's Jay"],
            insects: ["Pacific Chorus Frog", "Giant Pacific Salamander"]
        },
        majorRivers: ["Columbia River", "Fraser River", "Skagit River", "Quinault River"],
        indigenousCommunities: ["Coast Salish", "Tlingit", "Haida", "Quinault", "Makah"],
        economicImportance: ["Timber", "Tourism", "Salmon fishing", "Recreation", "Hydroelectric power"],
        environmentalImportance: ["Old-growth forests", "Salmon habitat", "Carbon sequestration", "Watershed protection"],
        environmentalIssues: ["Logging of old-growth", "Climate change", "Salmon decline", "Habitat fragmentation"],
        conservationEfforts: ["Olympic National Park", "Old-growth protection laws", "Watershed conservation", "Salmon restoration"],
        boundary: [[42, -125], [42, -120], [55, -120], [55, -125]],
        rivers: [
            { name: "Columbia River", path: [[46, -124], [46, -120]] },
            { name: "Fraser River", path: [[49, -123], [52, -122]] }
        ],
        protectedAreas: [
            { name: "Olympic National Park", lat: 47.8, lng: -123.6, radius: 30000 },
            { name: "Hoh Rainforest", lat: 47.86, lng: -123.93, radius: 15000 }
        ]
    },
    {
        id: 8,
        name: "Valdivian Temperate Rainforest",
        region: "Chile, Argentina",
        area: 248000,
        type: "Temperate Rainforest",
        image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400",
        profileImage: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920",
        galleryImages: [
            "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800",
            "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=800",
            "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800"
        ],
        coordinates: { lat: -40, lng: -72, zoom: 7 },
        location: {
            continent: "South America",
            countries: ["Chile", "Argentina"]
        },
        climate: {
            rainfall: "2500-7000 mm annually",
            temperature: "8-15°C average"
        },
        vegetation: ["Alerce (Patagonian Cypress)", "Coihue", "Lenga", "Nalca (Chilean Rhubarb)", "Araucaria", "Mañío"],
        biodiversity: {
            animals: ["Pudu (smallest deer)", "Kodkod (wild cat)", "Monito del Monte", "Darwin's Fox", "Huemul"],
            birds: ["Magellanic Woodpecker", "Chucao Tapaculo", "Andean Condor", "Austral Parakeet"],
            insects: ["Darwin's Beetle", "Stag Beetle"]
        },
        majorRivers: ["Valdivia River", "Petrohué River", "Futaleufú River", "Puelo River"],
        indigenousCommunities: ["Mapuche", "Huilliche", "Kawésqar"],
        economicImportance: ["Sustainable timber", "Tourism", "Hydroelectric potential", "Non-timber forest products"],
        environmentalImportance: ["Unique biodiversity", "Water regulation", "Ancient trees (3000+ years)", "Endemic species"],
        environmentalIssues: ["Logging", "Salmon farming pollution", "Invasive species", "Forest fires", "Hydroelectric projects"],
        conservationEfforts: ["Protected areas", "Private reserves (Pumalín)", "Ecotourism initiatives", "Reforestation"],
        boundary: [[-45, -75], [-45, -70], [-37, -70], [-37, -75]],
        rivers: [
            { name: "Valdivia River", path: [[-39.8, -73.2], [-39.8, -72.5]] },
            { name: "Futaleufú River", path: [[-43.2, -72.1], [-43.1, -71.8]] }
        ],
        protectedAreas: [
            { name: "Alerce Costero National Park", lat: -40.2, lng: -73.4, radius: 15000 },
            { name: "Pumalín Douglas Tompkins", lat: -42.5, lng: -72.5, radius: 25000 }
        ]
    },
    {
        id: 9,
        name: "New Guinea Rainforest",
        region: "Indonesia (Papua), Papua New Guinea",
        area: 220000,
        type: "Tropical Rainforest",
        image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=400",
        profileImage: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=1920",
        galleryImages: [
            "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=800",
            "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800",
            "https://images.unsplash.com/photo-1551244072-5d12893278ab?w=800"
        ],
        coordinates: { lat: -5, lng: 141, zoom: 6 },
        location: {
            continent: "Oceania",
            countries: ["Indonesia (Papua, West Papua)", "Papua New Guinea"]
        },
        climate: {
            rainfall: "2500-5000 mm annually",
            temperature: "24-30°C average"
        },
        vegetation: ["Dipterocarp Trees", "Tree Ferns", "Pandanus", "Orchids", "Araucaria", "Nothofagus (Southern Beech)"],
        biodiversity: {
            animals: ["Tree Kangaroo", "Echidna", "Cuscus", "Cassowary", "New Guinea Crocodile", "Tree Python"],
            birds: ["Bird of Paradise (40+ species)", "Cassowary", "Crowned Pigeon", "Palm Cockatoo"],
            insects: ["Queen Alexandra's Birdwing Butterfly", "Goliath Beetle", "Stick Insects"]
        },
        majorRivers: ["Sepik River", "Fly River", "Mamberamo River", "Digul River"],
        indigenousCommunities: ["Korowai", "Dani", "Asmat", "Huli", "Enga", "Over 1000 tribal groups"],
        economicImportance: ["Timber", "Mining (gold, copper)", "Palm oil", "Traditional agriculture"],
        environmentalImportance: ["Third largest rainforest", "Highest island biodiversity", "Endemic species", "Carbon storage"],
        environmentalIssues: ["Logging", "Mining pollution", "Palm oil expansion", "Road construction", "Climate change"],
        conservationEfforts: ["Protected areas", "Community forest management", "NGO conservation programs", "Ecotourism development"],
        boundary: [[-9, 130], [-9, 150], [-1, 150], [-1, 130]],
        rivers: [
            { name: "Sepik River", path: [[-4.5, 141], [-4, 144]] },
            { name: "Fly River", path: [[-8, 141], [-6, 141]] }
        ],
        protectedAreas: [
            { name: "Lorentz National Park", lat: -4.5, lng: 138, radius: 60000 },
            { name: "Wasur National Park", lat: -8.5, lng: 140.5, radius: 20000 }
        ]
    },
    {
        id: 10,
        name: "Eastern Australian Forests",
        region: "Australia (Queensland, New South Wales, Victoria)",
        area: 200000,
        type: "Temperate & Subtropical Rainforest",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
        profileImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920",
        galleryImages: [
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
            "https://images.unsplash.com/photo-1523807963965-6558a97b1b3d?w=800",
            "https://images.unsplash.com/photo-1496006540768-63a0a88c3c99?w=800"
        ],
        coordinates: { lat: -28, lng: 153, zoom: 6 },
        location: {
            continent: "Australia",
            countries: ["Australia"]
        },
        climate: {
            rainfall: "1000-3000 mm annually",
            temperature: "15-25°C average"
        },
        vegetation: ["Eucalyptus (200+ species)", "Antarctic Beech", "Blackbutt", "Tallowwood", "Tree Ferns", "Bangalow Palm"],
        biodiversity: {
            animals: ["Koala", "Platypus", "Wombat", "Eastern Grey Kangaroo", "Possum species", "Sugar Glider"],
            birds: ["Lyrebird", "Kookaburra", "King Parrot", "Satin Bowerbird", "Rainbow Lorikeet"],
            insects: ["Richmond Birdwing Butterfly", "Australian Walking Stick"]
        },
        majorRivers: ["Murray River", "Clarence River", "Hawkesbury River", "Brisbane River"],
        indigenousCommunities: ["Bundjalung", "Gumbaynggirr", "Wurundjeri", "Yorta Yorta"],
        economicImportance: ["Timber", "Tourism", "Honey", "Essential oils (eucalyptus)", "Recreation"],
        environmentalImportance: ["Gondwanan relicts", "Endemic species", "Water catchment", "Climate refugia"],
        environmentalIssues: ["Bushfires", "Climate change", "Logging", "Urban development", "Introduced species"],
        conservationEfforts: ["World Heritage Areas", "National parks", "Wildlife corridors", "Fire management"],
        boundary: [[-38, 145], [-38, 155], [-23, 155], [-23, 145]],
        rivers: [
            { name: "Clarence River", path: [[-29.5, 153], [-29.4, 152.5]] }
        ],
        protectedAreas: [
            { name: "Gondwana Rainforests", lat: -28.5, lng: 153, radius: 40000 },
            { name: "Blue Mountains", lat: -33.7, lng: 150.3, radius: 35000 }
        ]
    }
];
