/* =====================================================
   FORESTS DATA - Part 1 (Forests 1-10)
   Largest Forests by Area
   ===================================================== */

const forestsData1 = [
    {
        id: 1,
        name: "Amazon Rainforest",
        region: "South America",
        continent: "South America",
        countries: ["Brazil", "Peru", "Colombia", "Venezuela", "Ecuador", "Bolivia", "Guyana", "Suriname", "French Guiana"],
        area: 5500000,
        image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&q=80",
        heroImage: "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=1920&q=80",
        type: "Tropical Rainforest",
        climate: {
            rainfall: "2000-3000mm annually",
            temperature: "25-28°C average",
            humidity: "77-88%",
            seasons: "Wet and dry seasons"
        },
        biodiversity: {
            animals: ["Jaguar", "Sloth", "Anaconda", "Poison Dart Frog", "Capybara", "Tapir", "Pink River Dolphin"],
            birds: ["Scarlet Macaw", "Toucan", "Harpy Eagle", "Hoatzin", "Cock-of-the-rock"],
            insects: ["Blue Morpho Butterfly", "Leafcutter Ant", "Titan Beetle"],
            trees: ["Brazil Nut Tree", "Rubber Tree", "Kapok", "Mahogany", "Ceiba"],
            plants: ["Victoria Water Lily", "Heliconia", "Bromeliads", "Orchids"]
        },
        rivers: ["Amazon River", "Rio Negro", "Madeira River", "Tapajós River", "Xingu River"],
        indigenous: {
            tribes: ["Yanomami", "Kayapo", "Ashaninka", "Tikuna", "Guarani"],
            population: "Approximately 400 tribes",
            settlements: "Over 3,000 communities"
        },
        economicImportance: {
            timber: "Mahogany, Cedar, Rosewood",
            medicines: "25% of Western medicines derived from rainforest plants",
            tourism: "Ecotourism hub - millions of visitors annually",
            resources: "Rubber, Brazil nuts, Açaí"
        },
        environmentalImportance: {
            carbonStorage: "150-200 billion tonnes of carbon",
            oxygenProduction: "Produces 20% of world's oxygen (debated)",
            waterCycle: "Generates 50% of its own rainfall",
            climateRegulation: "Critical for global climate stability"
        },
        issues: ["Deforestation", "Illegal logging", "Forest fires", "Mining", "Agricultural expansion", "Climate change"],
        conservation: {
            protectedAreas: ["Amazon Region Protected Areas (ARPA)", "Tumucumaque National Park", "Jaú National Park"],
            initiatives: ["Amazon Fund", "REDD+", "Sustainable Brazil Initiative"],
            percentage: "Approximately 46% under some form of protection"
        },
        coordinates: { lat: -3.4653, lng: -62.2159 },
        funFacts: [
            "Home to 10% of all species on Earth",
            "The Amazon River discharges 20% of all freshwater that flows into the world's oceans",
            "Some trees are over 1,000 years old"
        ],
        beforeAfter: {
            before: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&q=80",
            after: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80"
        }
    },
    {
        id: 2,
        name: "Congo Rainforest",
        region: "Central Africa",
        continent: "Africa",
        countries: ["Democratic Republic of Congo", "Republic of Congo", "Cameroon", "Gabon", "Central African Republic", "Equatorial Guinea"],
        area: 2000000,
        image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&q=80",
        heroImage: "https://images.unsplash.com/photo-1504567961542-e24d9439a724?w=1920&q=80",
        type: "Tropical Rainforest",
        climate: {
            rainfall: "1500-2000mm annually",
            temperature: "24-27°C average",
            humidity: "80-90%",
            seasons: "Two wet and two dry seasons"
        },
        biodiversity: {
            animals: ["Western Lowland Gorilla", "Bonobo", "Forest Elephant", "Okapi", "Leopard", "Chimpanzee"],
            birds: ["African Grey Parrot", "Congo Peafowl", "Great Blue Turaco"],
            insects: ["Goliath Beetle", "African Giant Swallowtail"],
            trees: ["African Mahogany", "Sapele", "Iroko", "Ebony"],
            plants: ["African Violet", "Raffia Palm", "Lianas"]
        },
        rivers: ["Congo River", "Ubangi River", "Sangha River", "Kasai River"],
        indigenous: {
            tribes: ["Pygmy peoples (Mbuti, Baka, Aka)", "Bantu groups"],
            population: "Over 150 ethnic groups",
            settlements: "Traditional forest communities"
        },
        economicImportance: {
            timber: "Major timber exports",
            medicines: "Traditional medicinal plants",
            tourism: "Gorilla trekking tourism",
            resources: "Palm oil, cocoa, coffee"
        },
        environmentalImportance: {
            carbonStorage: "Stores billions of tonnes of carbon",
            oxygenProduction: "Second largest oxygen-producing forest",
            waterCycle: "Regulates African water cycles",
            climateRegulation: "Influences continental weather patterns"
        },
        issues: ["Illegal logging", "Bushmeat hunting", "Mining", "Civil conflict", "Agricultural expansion"],
        conservation: {
            protectedAreas: ["Virunga National Park", "Salonga National Park", "Odzala-Kokoua National Park"],
            initiatives: ["CARPE (Central African Regional Program for the Environment)", "Congo Basin Forest Partnership"],
            percentage: "About 12% formally protected"
        },
        coordinates: { lat: 0.7893, lng: 24.4336 },
        funFacts: [
            "Second largest rainforest after the Amazon",
            "Home to more great apes than anywhere else on Earth",
            "Contains over 10,000 plant species"
        ],
        beforeAfter: {
            before: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&q=80",
            after: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
        }
    },
    {
        id: 3,
        name: "Taiga (Boreal Forest)",
        region: "Northern Hemisphere",
        continent: "North America, Europe, Asia",
        countries: ["Russia", "Canada", "Alaska (USA)", "Norway", "Sweden", "Finland"],
        area: 17000000,
        image: "https://images.unsplash.com/photo-1476231682828-37e571bc172f?w=800&q=80",
        heroImage: "https://images.unsplash.com/photo-1511497584788-876760111969?w=1920&q=80",
        type: "Boreal/Taiga Forest",
        climate: {
            rainfall: "200-750mm annually",
            temperature: "-54 to 21°C (extreme variation)",
            humidity: "50-80%",
            seasons: "Long cold winters, short mild summers"
        },
        biodiversity: {
            animals: ["Brown Bear", "Moose", "Wolf", "Lynx", "Wolverine", "Siberian Tiger", "Reindeer"],
            birds: ["Snowy Owl", "Crossbill", "Siberian Jay", "Black Grouse"],
            insects: ["Mosquitoes (billions)", "Black flies", "Bark beetles"],
            trees: ["Spruce", "Pine", "Fir", "Larch", "Birch"],
            plants: ["Mosses", "Lichens", "Lingonberries", "Cloudberries"]
        },
        rivers: ["Yenisei River", "Ob River", "Lena River", "Mackenzie River"],
        indigenous: {
            tribes: ["Sami people", "Nenets", "Evenki", "Inuit", "First Nations"],
            population: "Various indigenous communities",
            settlements: "Traditional nomadic and settled communities"
        },
        economicImportance: {
            timber: "Largest timber reserve in the world",
            medicines: "Traditional herbal medicines",
            tourism: "Adventure and eco-tourism",
            resources: "Fur, berries, mushrooms"
        },
        environmentalImportance: {
            carbonStorage: "Stores 1/3 of all terrestrial carbon",
            oxygenProduction: "Major oxygen producer",
            waterCycle: "Contains world's largest freshwater reserves",
            climateRegulation: "Critical for global temperature regulation"
        },
        issues: ["Climate change (warming twice as fast)", "Forest fires", "Permafrost thawing", "Logging", "Mining"],
        conservation: {
            protectedAreas: ["Yugyd Va National Park", "Wood Buffalo National Park", "Laponian Area"],
            initiatives: ["Boreal Forest Agreement (Canada)", "WWF Global Forest Programme"],
            percentage: "Varies by country, Russia ~15% protected"
        },
        coordinates: { lat: 64.2823, lng: 100.4435 },
        funFacts: [
            "Largest terrestrial biome on Earth",
            "Contains more fresh water than all other biomes combined",
            "Temperatures can vary by 75°C between seasons"
        ],
        beforeAfter: {
            before: "https://images.unsplash.com/photo-1476231682828-37e571bc172f?w=800&q=80",
            after: "https://images.unsplash.com/photo-1569025743873-ea3a9ber?w=800&q=80"
        }
    },
    {
        id: 4,
        name: "Southeast Asian Rainforest",
        region: "Southeast Asia",
        continent: "Asia",
        countries: ["Indonesia", "Malaysia", "Thailand", "Myanmar", "Vietnam", "Philippines", "Brunei"],
        area: 2480000,
        image: "https://images.unsplash.com/photo-1588392382834-a891154bca4d?w=800&q=80",
        heroImage: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1920&q=80",
        type: "Tropical Rainforest",
        climate: {
            rainfall: "2500-4500mm annually",
            temperature: "25-30°C average",
            humidity: "80-95%",
            seasons: "Monsoon influenced"
        },
        biodiversity: {
            animals: ["Orangutan", "Sumatran Tiger", "Asian Elephant", "Malayan Tapir", "Sun Bear", "Clouded Leopard"],
            birds: ["Hornbill", "Birds of Paradise", "Kingfishers", "Pittas"],
            insects: ["Atlas Moth", "Rhinoceros Beetle", "Walking Stick"],
            trees: ["Dipterocarp", "Teak", "Rattan", "Durian"],
            plants: ["Rafflesia (largest flower)", "Titan Arum", "Pitcher Plants"]
        },
        rivers: ["Mekong River", "Irrawaddy River", "Chao Phraya River"],
        indigenous: {
            tribes: ["Dayak", "Orang Asli", "Karen", "Batak"],
            population: "Millions of indigenous peoples",
            settlements: "Traditional longhouses and villages"
        },
        economicImportance: {
            timber: "Teak, tropical hardwoods",
            medicines: "Traditional Asian medicines",
            tourism: "Major eco-tourism destination",
            resources: "Palm oil, rubber, spices"
        },
        environmentalImportance: {
            carbonStorage: "Massive carbon sink",
            oxygenProduction: "Significant oxygen production",
            waterCycle: "Regulates regional monsoons",
            climateRegulation: "Influences Asian climate patterns"
        },
        issues: ["Palm oil plantations", "Illegal logging", "Forest fires (Indonesia haze)", "Mining", "Infrastructure development"],
        conservation: {
            protectedAreas: ["Gunung Leuser National Park", "Taman Negara", "Kinabalu National Park"],
            initiatives: ["ASEAN Agreement on Transboundary Haze", "Heart of Borneo"],
            percentage: "Approximately 20% protected"
        },
        coordinates: { lat: 1.3521, lng: 110.8198 },
        funFacts: [
            "One of the oldest rainforests on Earth (130 million years)",
            "Home to the Rafflesia, the world's largest flower",
            "Borneo alone has over 15,000 plant species"
        ],
        beforeAfter: {
            before: "https://images.unsplash.com/photo-1588392382834-a891154bca4d?w=800&q=80",
            after: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80"
        }
    },
    {
        id: 5,
        name: "North American Temperate Forest",
        region: "North America",
        continent: "North America",
        countries: ["United States", "Canada"],
        area: 3100000,
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
        heroImage: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=1920&q=80",
        type: "Temperate Deciduous Forest",
        climate: {
            rainfall: "750-1500mm annually",
            temperature: "-30 to 30°C (seasonal)",
            humidity: "60-80%",
            seasons: "Four distinct seasons"
        },
        biodiversity: {
            animals: ["Black Bear", "White-tailed Deer", "Raccoon", "Red Fox", "Wild Turkey", "Beaver"],
            birds: ["Cardinal", "Blue Jay", "Woodpecker", "Owl", "Eagle"],
            insects: ["Monarch Butterfly", "Fireflies", "Cicadas"],
            trees: ["Oak", "Maple", "Hickory", "Beech", "Birch", "Walnut"],
            plants: ["Ferns", "Wildflowers", "Trillium", "Jack-in-the-pulpit"]
        },
        rivers: ["Mississippi River", "Ohio River", "St. Lawrence River"],
        indigenous: {
            tribes: ["Cherokee", "Iroquois", "Algonquin", "Ojibwe", "Creek"],
            population: "Historically millions, now smaller communities",
            settlements: "Reservations and traditional lands"
        },
        economicImportance: {
            timber: "Hardwood lumber industry",
            medicines: "Ginseng, goldenseal",
            tourism: "Fall foliage tourism",
            resources: "Maple syrup, nuts, game"
        },
        environmentalImportance: {
            carbonStorage: "Significant carbon sequestration",
            oxygenProduction: "Important oxygen source",
            waterCycle: "Watershed protection",
            climateRegulation: "Moderates regional temperatures"
        },
        issues: ["Urban development", "Invasive species", "Acid rain effects", "Climate change", "Fragmentation"],
        conservation: {
            protectedAreas: ["Great Smoky Mountains NP", "Shenandoah NP", "Algonquin Provincial Park"],
            initiatives: ["Eastern Forest Conservation Network", "American Forest Foundation"],
            percentage: "Varies by state/province"
        },
        coordinates: { lat: 37.0902, lng: -79.4429 },
        funFacts: [
            "Famous for spectacular fall colors",
            "Some trees are over 400 years old",
            "Once covered most of eastern North America"
        ],
        beforeAfter: {
            before: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
            after: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&q=80"
        }
    },
    {
        id: 6,
        name: "Tongass National Forest",
        region: "Alaska, USA",
        continent: "North America",
        countries: ["United States"],
        area: 68000,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
        heroImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
        type: "Temperate Rainforest",
        climate: {
            rainfall: "2500-5000mm annually",
            temperature: "0-15°C average",
            humidity: "80-95%",
            seasons: "Mild, wet maritime climate"
        },
        biodiversity: {
            animals: ["Brown Bear", "Sitka Black-tailed Deer", "Wolf", "Bald Eagle", "Salmon", "Sea Otter"],
            birds: ["Bald Eagle", "Marbled Murrelet", "Raven", "Stellar's Jay"],
            insects: ["Various forest insects"],
            trees: ["Sitka Spruce", "Western Hemlock", "Western Red Cedar", "Alaska Yellow Cedar"],
            plants: ["Ferns", "Mosses", "Devil's Club", "Skunk Cabbage"]
        },
        rivers: ["Stikine River", "Taku River", "Chilkat River"],
        indigenous: {
            tribes: ["Tlingit", "Haida", "Tsimshian"],
            population: "Active native communities",
            settlements: "Villages throughout Southeast Alaska"
        },
        economicImportance: {
            timber: "Historic logging industry",
            medicines: "Traditional native medicines",
            tourism: "Cruise ships, eco-tourism",
            resources: "Salmon fishing, commercial fishing"
        },
        environmentalImportance: {
            carbonStorage: "Massive old-growth carbon storage",
            oxygenProduction: "Important oxygen producer",
            waterCycle: "Critical salmon habitat",
            climateRegulation: "Pacific Northwest climate buffer"
        },
        issues: ["Logging debates", "Climate change", "Mining proposals", "Tourism impacts"],
        conservation: {
            protectedAreas: ["Tongass National Forest", "Admiralty Island Wilderness", "Misty Fjords"],
            initiatives: ["Tongass Transition Framework", "Roadless Rule protections"],
            percentage: "National Forest with varying protection levels"
        },
        coordinates: { lat: 56.9485, lng: -133.6961 },
        funFacts: [
            "Largest national forest in the United States",
            "Some trees are over 800 years old",
            "Home to one of the world's highest concentrations of bald eagles"
        ],
        beforeAfter: {
            before: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
            after: "https://images.unsplash.com/photo-1518173946687-a4c26f2f5a66?w=800&q=80"
        }
    },
    {
        id: 7,
        name: "Daintree Rainforest",
        region: "Queensland, Australia",
        continent: "Oceania",
        countries: ["Australia"],
        area: 1200,
        image: "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=800&q=80",
        heroImage: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?w=1920&q=80",
        type: "Tropical Rainforest",
        climate: {
            rainfall: "2000-4000mm annually",
            temperature: "22-31°C average",
            humidity: "75-95%",
            seasons: "Wet season (Dec-Mar), Dry season"
        },
        biodiversity: {
            animals: ["Cassowary", "Tree Kangaroo", "Musky Rat-kangaroo", "Boyd's Forest Dragon", "Platypus"],
            birds: ["Cassowary", "Kingfisher", "Riflebird", "Victoria's Riflebird"],
            insects: ["Ulysses Butterfly", "Hercules Moth", "Green Tree Ant"],
            trees: ["Fan Palm", "Strangler Fig", "Kauri Pine", "Bull Kauri"],
            plants: ["Ferns", "Orchids", "Primitive flowering plants"]
        },
        rivers: ["Daintree River", "Mossman River", "Bloomfield River"],
        indigenous: {
            tribes: ["Kuku Yalanji people"],
            population: "Traditional owners of the land",
            settlements: "Ongoing connection to country"
        },
        economicImportance: {
            timber: "Limited, protected area",
            medicines: "Traditional Aboriginal medicines",
            tourism: "Major tourism destination",
            resources: "Sustainable tourism focus"
        },
        environmentalImportance: {
            carbonStorage: "Dense carbon storage",
            oxygenProduction: "Ancient oxygen producer",
            waterCycle: "Great Barrier Reef watershed",
            climateRegulation: "Local climate moderation"
        },
        issues: ["Climate change", "Tourism pressure", "Invasive species", "Cyclone damage", "Cassowary road deaths"],
        conservation: {
            protectedAreas: ["Daintree National Park", "Wet Tropics World Heritage Area"],
            initiatives: ["Wet Tropics Management Authority", "Buy Back Daintree"],
            percentage: "Largely protected"
        },
        coordinates: { lat: -16.2500, lng: 145.4000 },
        funFacts: [
            "World's oldest rainforest (180 million years)",
            "Where the rainforest meets the reef",
            "Contains more ancient flowering plants than anywhere else"
        ],
        beforeAfter: {
            before: "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=800&q=80",
            after: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&q=80"
        }
    },
    {
        id: 8,
        name: "Sundarbans Mangrove Forest",
        region: "Bangladesh & India",
        continent: "Asia",
        countries: ["Bangladesh", "India"],
        area: 10000,
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
        heroImage: "https://images.unsplash.com/photo-1551918120-9739cb430c6d?w=1920&q=80",
        type: "Mangrove Forest",
        climate: {
            rainfall: "1600-2000mm annually",
            temperature: "20-34°C average",
            humidity: "70-90%",
            seasons: "Monsoon influenced, cyclone prone"
        },
        biodiversity: {
            animals: ["Royal Bengal Tiger", "Saltwater Crocodile", "Gangetic Dolphin", "Indian Python", "Fishing Cat"],
            birds: ["White-bellied Sea Eagle", "Kingfisher", "Heron", "Egret"],
            insects: ["Various mangrove species"],
            trees: ["Sundari Tree", "Gewa", "Goran", "Keora", "Dhundul"],
            plants: ["Mangrove species", "Phoenix paludosa", "Nypa palm"]
        },
        rivers: ["Ganges Delta", "Brahmaputra Delta", "Meghna River"],
        indigenous: {
            tribes: ["Local fishing communities"],
            population: "Over 4 million people in surrounding areas",
            settlements: "Villages dependent on forest resources"
        },
        economicImportance: {
            timber: "Sustainable harvesting",
            medicines: "Traditional medicine",
            tourism: "Tiger tourism",
            resources: "Honey, fish, crabs"
        },
        environmentalImportance: {
            carbonStorage: "Blue carbon ecosystem",
            oxygenProduction: "Important producer",
            waterCycle: "Coastal water filtration",
            climateRegulation: "Storm surge protection"
        },
        issues: ["Rising sea levels", "Cyclones", "Human-tiger conflict", "Pollution", "Climate change"],
        conservation: {
            protectedAreas: ["Sundarbans National Park", "Sundarbans Reserve Forest"],
            initiatives: ["UNESCO World Heritage Site", "Tiger conservation programs"],
            percentage: "Core areas strictly protected"
        },
        coordinates: { lat: 21.9497, lng: 89.1833 },
        funFacts: [
            "Largest mangrove forest in the world",
            "Home to unique swimming tigers",
            "Trees have aerial roots called pneumatophores"
        ],
        beforeAfter: {
            before: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
            after: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
        }
    },
    {
        id: 9,
        name: "Black Forest (Schwarzwald)",
        region: "Baden-Württemberg, Germany",
        continent: "Europe",
        countries: ["Germany"],
        area: 6009,
        image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&q=80",
        heroImage: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=1920&q=80",
        type: "Temperate Mixed Forest",
        climate: {
            rainfall: "1000-2000mm annually",
            temperature: "5-15°C average",
            humidity: "70-85%",
            seasons: "Four seasons, snowy winters"
        },
        biodiversity: {
            animals: ["Red Deer", "Wild Boar", "Roe Deer", "Red Fox", "European Badger", "Lynx (reintroduced)"],
            birds: ["Capercaillie", "Black Woodpecker", "Owl", "Buzzard"],
            insects: ["Various forest insects"],
            trees: ["Norway Spruce", "Silver Fir", "Scots Pine", "Beech", "Oak"],
            plants: ["Bilberry", "Ferns", "Wildflowers", "Mushrooms"]
        },
        rivers: ["Danube (source)", "Neckar", "Kinzig"],
        indigenous: {
            tribes: ["Germanic peoples historically"],
            population: "Well-populated region",
            settlements: "Traditional villages and towns"
        },
        economicImportance: {
            timber: "Forestry industry",
            medicines: "Herbal traditions",
            tourism: "Major tourism destination",
            resources: "Cuckoo clocks, ham, cherry cake"
        },
        environmentalImportance: {
            carbonStorage: "Regional carbon sink",
            oxygenProduction: "Local air quality",
            waterCycle: "Watershed protection",
            climateRegulation: "Regional temperature moderation"
        },
        issues: ["Climate change", "Bark beetle infestations", "Tourism pressure", "Acid rain legacy"],
        conservation: {
            protectedAreas: ["Black Forest National Park", "Various nature reserves"],
            initiatives: ["Black Forest Biosphere Reserve", "Sustainable forestry practices"],
            percentage: "Mix of protected and managed forest"
        },
        coordinates: { lat: 48.2670, lng: 8.1711 },
        funFacts: [
            "Inspired the Brothers Grimm fairy tales",
            "Famous for cuckoo clocks and Black Forest ham",
            "Source of the Danube River"
        ],
        beforeAfter: {
            before: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&q=80",
            after: "https://images.unsplash.com/photo-1518173946687-a4c26f2f5a66?w=800&q=80"
        }
    },
    {
        id: 10,
        name: "Valdivian Temperate Rainforest",
        region: "Chile & Argentina",
        continent: "South America",
        countries: ["Chile", "Argentina"],
        area: 248100,
        image: "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?w=800&q=80",
        heroImage: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&q=80",
        type: "Temperate Rainforest",
        climate: {
            rainfall: "2000-4000mm annually",
            temperature: "7-16°C average",
            humidity: "80-95%",
            seasons: "Mild, wet climate year-round"
        },
        biodiversity: {
            animals: ["Pudú (smallest deer)", "Kodkod", "Chilean Huemul", "Darwin's Fox", "Monito del Monte"],
            birds: ["Magellanic Woodpecker", "Chucao Tapaculo", "Black-necked Swan"],
            insects: ["Darwin's Beetle", "Various endemic insects"],
            trees: ["Alerce", "Araucaria", "Southern Beech", "Coigüe", "Nalca"],
            plants: ["Giant ferns", "Nalca (Giant Rhubarb)", "Copihue (national flower)"]
        },
        rivers: ["Valdivia River", "Bio Bio River", "Baker River"],
        indigenous: {
            tribes: ["Mapuche people", "Huilliche"],
            population: "Active indigenous communities",
            settlements: "Traditional lands and communities"
        },
        economicImportance: {
            timber: "Sustainable forestry",
            medicines: "Traditional Mapuche medicine",
            tourism: "Eco-tourism",
            resources: "Non-timber forest products"
        },
        environmentalImportance: {
            carbonStorage: "Significant carbon storage",
            oxygenProduction: "Clean air production",
            waterCycle: "Chilean water supply",
            climateRegulation: "Patagonian climate influence"
        },
        issues: ["Logging", "Plantation forestry replacement", "Fire", "Development pressure"],
        conservation: {
            protectedAreas: ["Alerce Costero National Park", "Pumalín Park", "Chiloé National Park"],
            initiatives: ["Tompkins Conservation", "Route of Parks"],
            percentage: "Increasing protection"
        },
        coordinates: { lat: -40.0000, lng: -73.0000 },
        funFacts: [
            "Contains the Alerce tree, which can live 4,000+ years",
            "One of the world's only temperate rainforests",
            "Known as the 'Chilean jungle'"
        ],
        beforeAfter: {
            before: "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?w=800&q=80",
            after: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80"
        }
    }
];
