/**
 * ================================================
 * FORESTS DATA - Part 1 (Forests 1-50)
 * Comprehensive data for world's largest forests
 * ================================================
 */

const forestsData1 = [
    {
        id: 1,
        name: "Amazon Rainforest",
        region: "South America",
        area: 5500000,
        image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&q=80",
        type: "Tropical Rainforest",
        countries: ["Brazil", "Peru", "Colombia", "Venezuela", "Ecuador", "Bolivia", "Guyana", "Suriname", "French Guiana"],
        climate: {
            rainfall: "2000-3000mm annually",
            temperature: "25-28°C average",
            humidity: "77-88%"
        },
        biodiversity: {
            animals: ["Jaguar", "Sloth", "Anaconda", "Poison Dart Frog", "Capybara", "Pink River Dolphin", "Tapir"],
            birds: ["Scarlet Macaw", "Toucan", "Harpy Eagle", "Hoatzin", "Cock-of-the-rock"],
            trees: ["Brazil Nut", "Rubber Tree", "Kapok", "Mahogany", "Giant Water Lily"]
        },
        rivers: ["Amazon River", "Rio Negro", "Madeira River", "Tapajós River", "Xingu River"],
        indigenous: ["Yanomami", "Kayapo", "Ashaninka", "Awá", "Munduruku"],
        issues: ["Deforestation", "Illegal logging", "Forest fires", "Mining", "Agriculture expansion"],
        conservation: ["Amazon Region Protected Areas (ARPA)", "Amazon Fund", "Indigenous Reserves"],
        coordinates: { lat: -3.4653, lng: -62.2159 },
        carbonStorage: "150-200 billion tonnes",
        oxygenProduction: "20% of world's oxygen",
        description: "The Amazon Rainforest is the world's largest tropical rainforest, covering over 5.5 million square kilometers. Often called 'The Lungs of the Earth', it produces approximately 20% of the world's oxygen and is home to 10% of all species on Earth."
    },
    {
        id: 2,
        name: "Congo Rainforest",
        region: "Central Africa",
        area: 2000000,
        image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80",
        type: "Tropical Rainforest",
        countries: ["Democratic Republic of Congo", "Republic of Congo", "Cameroon", "Central African Republic", "Gabon", "Equatorial Guinea"],
        climate: {
            rainfall: "1500-2000mm annually",
            temperature: "24-27°C average",
            humidity: "80-90%"
        },
        biodiversity: {
            animals: ["Mountain Gorilla", "Bonobo", "Forest Elephant", "Okapi", "Leopard", "Hippo"],
            birds: ["Grey Parrot", "Congo Peacock", "Shoebill"],
            trees: ["African Mahogany", "Iroko", "Sapele", "Ebony"]
        },
        rivers: ["Congo River", "Ubangi River", "Kasai River"],
        indigenous: ["Mbuti Pygmies", "Baka", "Efe"],
        issues: ["Illegal logging", "Bushmeat hunting", "Civil conflict", "Mining"],
        conservation: ["Virunga National Park", "Salonga National Park", "COMIFAC"],
        coordinates: { lat: -0.7264, lng: 21.4460 },
        carbonStorage: "25-30 billion tonnes",
        description: "The Congo Rainforest is Africa's largest rainforest and the second-largest in the world. It's critical for global climate regulation and home to endangered great apes."
    },
    {
        id: 3,
        name: "Taiga (Boreal Forest)",
        region: "Northern Hemisphere",
        area: 17000000,
        image: "https://images.unsplash.com/photo-1476231682828-37e571bc172f?w=800&q=80",
        type: "Boreal Forest",
        countries: ["Russia", "Canada", "Alaska (USA)", "Sweden", "Finland", "Norway"],
        climate: {
            rainfall: "300-900mm annually",
            temperature: "-50°C to 30°C (seasonal)",
            humidity: "50-80%"
        },
        biodiversity: {
            animals: ["Brown Bear", "Gray Wolf", "Moose", "Lynx", "Wolverine", "Reindeer"],
            birds: ["Siberian Jay", "Great Grey Owl", "Capercaillie"],
            trees: ["Spruce", "Pine", "Larch", "Birch", "Fir"]
        },
        rivers: ["Yenisei River", "Ob River", "Lena River", "Mackenzie River"],
        indigenous: ["Sami", "Nenets", "Khanty", "Evenki", "Cree", "Inuit"],
        issues: ["Climate change", "Wildfires", "Logging", "Oil and gas extraction", "Permafrost thaw"],
        conservation: ["Wood Buffalo National Park", "Putorana Nature Reserve"],
        coordinates: { lat: 64.0000, lng: 90.0000 },
        carbonStorage: "300+ billion tonnes",
        description: "The Taiga is the world's largest terrestrial biome, stretching across North America, Europe, and Asia. It contains more surface freshwater than any other biome."
    },
    {
        id: 4,
        name: "Southeast Asian Rainforest",
        region: "Southeast Asia",
        area: 2500000,
        image: "https://images.unsplash.com/photo-1588392382834-a891154bca4d?w=800&q=80",
        type: "Tropical Rainforest",
        countries: ["Indonesia", "Malaysia", "Thailand", "Myanmar", "Vietnam", "Laos", "Cambodia", "Philippines"],
        climate: {
            rainfall: "2000-4000mm annually",
            temperature: "25-30°C average",
            humidity: "80-90%"
        },
        biodiversity: {
            animals: ["Orangutan", "Sumatran Tiger", "Asian Elephant", "Sun Bear", "Pangolin", "Clouded Leopard"],
            birds: ["Hornbill", "Argus Pheasant", "Rhinoceros Hornbill"],
            trees: ["Dipterocarp", "Teak", "Strangler Fig", "Rattan"]
        },
        rivers: ["Mekong River", "Irrawaddy River", "Chao Phraya River"],
        indigenous: ["Penan", "Orang Asli", "Karen", "Dayak"],
        issues: ["Palm oil plantations", "Deforestation", "Illegal wildlife trade", "Forest fires"],
        conservation: ["Gunung Leuser National Park", "Taman Negara", "Heart of Borneo Initiative"],
        coordinates: { lat: 2.0000, lng: 114.0000 },
        description: "Southeast Asian rainforests are among the oldest rainforests on Earth, with some areas dating back 130 million years."
    },
    {
        id: 5,
        name: "Tongass National Forest",
        region: "Alaska, USA",
        area: 68000,
        image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&q=80",
        type: "Temperate Rainforest",
        countries: ["United States"],
        climate: {
            rainfall: "1500-4000mm annually",
            temperature: "4-12°C average",
            humidity: "75-85%"
        },
        biodiversity: {
            animals: ["Brown Bear", "Sitka Black-tailed Deer", "Bald Eagle", "Sea Otter", "Salmon"],
            birds: ["Marbled Murrelet", "Bald Eagle", "Steller's Jay"],
            trees: ["Sitka Spruce", "Western Hemlock", "Western Red Cedar", "Alaska Yellow Cedar"]
        },
        rivers: ["Stikine River", "Taku River"],
        indigenous: ["Tlingit", "Haida", "Tsimshian"],
        issues: ["Logging debates", "Climate change", "Salmon habitat protection"],
        conservation: ["Tongass National Forest Management Plan", "Roadless Area Conservation"],
        coordinates: { lat: 57.0000, lng: -135.0000 },
        description: "Tongass is the largest national forest in the United States and the largest intact temperate rainforest in North America."
    },
    {
        id: 6,
        name: "Daintree Rainforest",
        region: "Queensland, Australia",
        area: 1200,
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
        type: "Tropical Rainforest",
        countries: ["Australia"],
        climate: {
            rainfall: "2000-3000mm annually",
            temperature: "23-31°C average",
            humidity: "70-80%"
        },
        biodiversity: {
            animals: ["Cassowary", "Tree Kangaroo", "Musky Rat-kangaroo", "Boyd's Forest Dragon", "Saltwater Crocodile"],
            birds: ["Southern Cassowary", "Victoria's Riflebird", "Buff-breasted Paradise Kingfisher"],
            trees: ["Fan Palm", "Strangler Fig", "Giant Stinging Tree", "Idiot Fruit"]
        },
        rivers: ["Daintree River", "Mossman River"],
        indigenous: ["Kuku Yalanji"],
        issues: ["Tourism impact", "Invasive species", "Climate change"],
        conservation: ["UNESCO World Heritage Site", "Daintree National Park"],
        coordinates: { lat: -16.2500, lng: 145.4000 },
        description: "The Daintree is one of the oldest rainforests on Earth, estimated to be 180 million years old. It contains primitive flowering plants."
    },
    {
        id: 7,
        name: "Sundarbans",
        region: "Bangladesh & India",
        area: 10000,
        image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800&q=80",
        type: "Mangrove Forest",
        countries: ["Bangladesh", "India"],
        climate: {
            rainfall: "1600-2000mm annually",
            temperature: "20-35°C",
            humidity: "70-80%"
        },
        biodiversity: {
            animals: ["Royal Bengal Tiger", "Saltwater Crocodile", "Ganges River Dolphin", "Indian Python", "Fishing Cat"],
            birds: ["White-bellied Sea Eagle", "Kingfisher", "Brahminy Kite"],
            trees: ["Sundari Tree", "Gewa", "Goran", "Keora"]
        },
        rivers: ["Ganges", "Brahmaputra", "Meghna"],
        indigenous: ["Munda", "Oraon"],
        issues: ["Rising sea levels", "Cyclones", "Poaching", "Salinity intrusion"],
        conservation: ["UNESCO World Heritage Site", "Tiger Reserve"],
        coordinates: { lat: 21.9497, lng: 89.1833 },
        description: "The Sundarbans is the largest mangrove forest in the world and home to the famous Royal Bengal Tiger."
    },
    {
        id: 8,
        name: "Valdivian Temperate Rainforest",
        region: "Chile & Argentina",
        area: 248100,
        image: "https://images.unsplash.com/photo-1511497584788-876760111969?w=800&q=80",
        type: "Temperate Rainforest",
        countries: ["Chile", "Argentina"],
        climate: {
            rainfall: "2000-4000mm annually",
            temperature: "7-12°C average",
            humidity: "80-90%"
        },
        biodiversity: {
            animals: ["Pudu", "Kodkod", "Southern River Otter", "Patagonian Puma", "Darwin's Fox"],
            birds: ["Magellanic Woodpecker", "Chucao Tapaculo", "Black-necked Swan"],
            trees: ["Alerce", "Araucaria", "Coigüe", "Ulmo", "Mañío"]
        },
        rivers: ["Valdivia River", "Biobío River"],
        indigenous: ["Mapuche", "Huilliche"],
        issues: ["Logging", "Salmon farming pollution", "Exotic species invasion"],
        conservation: ["Pumalín Park", "Los Alerces National Park"],
        coordinates: { lat: -40.0000, lng: -73.0000 },
        description: "One of the world's few temperate rainforests, featuring ancient Alerce trees that can live over 3,000 years."
    },
    {
        id: 9,
        name: "Black Forest",
        region: "Germany",
        area: 6009,
        image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80",
        type: "Temperate Mixed Forest",
        countries: ["Germany"],
        climate: {
            rainfall: "1500-2000mm annually",
            temperature: "6-10°C average",
            humidity: "70-80%"
        },
        biodiversity: {
            animals: ["Red Fox", "Wild Boar", "Roe Deer", "European Badger", "Lynx (reintroduced)"],
            birds: ["Black Woodpecker", "Eurasian Sparrowhawk", "Hazel Grouse"],
            trees: ["Norway Spruce", "Silver Fir", "European Beech", "Scots Pine"]
        },
        rivers: ["Danube (source)", "Rhine tributaries"],
        indigenous: ["Celtic tribes (historic)"],
        issues: ["Acid rain (historic)", "Storm damage", "Bark beetle infestations"],
        conservation: ["Black Forest National Park", "Nature Parks"],
        coordinates: { lat: 48.1500, lng: 8.1500 },
        description: "The Black Forest (Schwarzwald) is famous for its dark, evergreen canopy and is the setting of many Brothers Grimm fairy tales."
    },
    {
        id: 10,
        name: "Białowieża Forest",
        region: "Poland & Belarus",
        area: 1500,
        image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&q=80",
        type: "Temperate Primeval Forest",
        countries: ["Poland", "Belarus"],
        climate: {
            rainfall: "600-700mm annually",
            temperature: "6-8°C average",
            humidity: "75-85%"
        },
        biodiversity: {
            animals: ["European Bison", "Gray Wolf", "Eurasian Lynx", "Wild Boar", "Red Deer", "Beaver"],
            birds: ["White-tailed Eagle", "Lesser Spotted Eagle", "Three-toed Woodpecker"],
            trees: ["Oak", "Lime", "Hornbeam", "Spruce", "Pine", "Ash"]
        },
        rivers: ["Narew River", "Narewka River"],
        indigenous: ["Slavic tribes (historic)"],
        issues: ["Logging controversies", "Climate change", "Political tensions"],
        conservation: ["UNESCO World Heritage Site", "National Park"],
        coordinates: { lat: 52.7500, lng: 23.8000 },
        description: "Białowieża is one of the last and largest remaining parts of the primeval forest that once spread across the European Plain. It is home to the largest population of European Bison."
    },
    {
        id: 11,
        name: "Great Bear Rainforest",
        region: "British Columbia, Canada",
        area: 64000,
        image: "https://images.unsplash.com/photo-1440581572325-0bea30075d9d?w=800&q=80",
        type: "Temperate Rainforest",
        countries: ["Canada"],
        climate: {
            rainfall: "3000-5000mm annually",
            temperature: "5-15°C average",
            humidity: "80-95%"
        },
        biodiversity: {
            animals: ["Spirit Bear (Kermode Bear)", "Grizzly Bear", "Gray Wolf", "Salmon", "Humpback Whale"],
            birds: ["Bald Eagle", "Marbled Murrelet", "Great Blue Heron"],
            trees: ["Western Red Cedar", "Sitka Spruce", "Douglas Fir", "Hemlock"]
        },
        rivers: ["Fraser River", "Skeena River"],
        indigenous: ["Gitga'at", "Heiltsuk", "Kitasoo/Xai'xais", "Nuxalk", "Wuikinuxv"],
        issues: ["Pipeline proposals", "Logging", "Salmon population decline"],
        conservation: ["Great Bear Rainforest Agreement (2016)", "Marine Protected Areas"],
        coordinates: { lat: 52.5000, lng: -128.0000 },
        description: "Home to the rare Spirit Bear, the Great Bear Rainforest is one of the largest intact temperate rainforests remaining on Earth."
    },
    {
        id: 12,
        name: "Sherwood Forest",
        region: "England, UK",
        area: 423,
        image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=80",
        type: "Temperate Deciduous Forest",
        countries: ["United Kingdom"],
        climate: {
            rainfall: "600-700mm annually",
            temperature: "9-10°C average",
            humidity: "75-85%"
        },
        biodiversity: {
            animals: ["Red Fox", "Badger", "Roe Deer", "Rabbit", "Hedgehog"],
            birds: ["European Robin", "Woodpecker", "Tawny Owl"],
            trees: ["English Oak (including Major Oak)", "Birch", "Rowan"]
        },
        rivers: ["River Maun"],
        indigenous: ["Anglo-Saxons (historic)"],
        issues: ["Urban development pressure", "Visitor impact", "Oak tree diseases"],
        conservation: ["National Nature Reserve", "Country Park"],
        coordinates: { lat: 53.2000, lng: -1.0700 },
        description: "Famous as the legendary home of Robin Hood, Sherwood Forest contains ancient oak trees, including the Major Oak estimated to be 800-1000 years old."
    },
    {
        id: 13,
        name: "Monteverde Cloud Forest",
        region: "Costa Rica",
        area: 105,
        image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&q=80",
        type: "Tropical Cloud Forest",
        countries: ["Costa Rica"],
        climate: {
            rainfall: "2500-3500mm annually",
            temperature: "18-25°C average",
            humidity: "90-100%"
        },
        biodiversity: {
            animals: ["Resplendent Quetzal", "Three-wattled Bellbird", "Jaguar", "Ocelot", "Tapir"],
            birds: ["Resplendent Quetzal", "Emerald Toucanet", "Hummingbirds (30+ species)"],
            trees: ["Strangler Fig", "Cloud Forest Oak", "Orchids (500+ species)"]
        },
        rivers: ["Río Guacimal"],
        indigenous: ["Indigenous reserves nearby"],
        issues: ["Climate change affecting cloud cover", "Tourism pressure"],
        conservation: ["Monteverde Cloud Forest Reserve", "Private reserves"],
        coordinates: { lat: 10.3000, lng: -84.8000 },
        description: "Monteverde is one of the most famous cloud forests, shrouded in mist and home to exceptional biodiversity including the Resplendent Quetzal."
    },
    {
        id: 14,
        name: "Tarkine Rainforest",
        region: "Tasmania, Australia",
        area: 4470,
        image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80",
        type: "Temperate Rainforest",
        countries: ["Australia"],
        climate: {
            rainfall: "1200-2400mm annually",
            temperature: "8-16°C average",
            humidity: "70-90%"
        },
        biodiversity: {
            animals: ["Tasmanian Devil", "Platypus", "Wombat", "Tasmanian Tiger (extinct)", "Quoll"],
            birds: ["Wedge-tailed Eagle", "Yellow-tailed Black Cockatoo"],
            trees: ["Huon Pine", "Myrtle Beech", "Sassafras", "Leatherwood"]
        },
        rivers: ["Pieman River", "Arthur River"],
        indigenous: ["Tarkiner Aboriginal People"],
        issues: ["Mining proposals", "Logging", "Road development"],
        conservation: ["Proposed World Heritage listing"],
        coordinates: { lat: -41.5000, lng: 145.0000 },
        description: "The Tarkine is Australia's largest temperate rainforest and one of the world's great wilderness areas, containing ancient Gondwanan flora."
    },
    {
        id: 15,
        name: "Sinharaja Forest Reserve",
        region: "Sri Lanka",
        area: 189,
        image: "https://images.unsplash.com/photo-1504567961542-e24d9439a724?w=800&q=80",
        type: "Tropical Rainforest",
        countries: ["Sri Lanka"],
        climate: {
            rainfall: "3000-6000mm annually",
            temperature: "23-27°C average",
            humidity: "80-95%"
        },
        biodiversity: {
            animals: ["Purple-faced Langur", "Sri Lankan Leopard", "Giant Squirrel", "Endemic reptiles"],
            birds: ["Sri Lanka Blue Magpie", "Red-faced Malkoha", "Endemic species (many)"],
            trees: ["Dipterocarp species", "Endemic trees (60% endemic)"]
        },
        rivers: ["Kalu Ganga tributaries"],
        indigenous: ["Vedda people (nearby)"],
        issues: ["Illegal logging (historic)", "Encroachment", "Climate change"],
        conservation: ["UNESCO World Heritage Site", "Biosphere Reserve"],
        coordinates: { lat: 6.4000, lng: 80.5000 },
        description: "Sinharaja means 'Lion Kingdom' and is Sri Lanka's last viable remnant of primary tropical rainforest, with extremely high endemism."
    },
    {
        id: 16,
        name: "Yakushima Forest",
        region: "Japan",
        area: 107,
        image: "https://images.unsplash.com/photo-1528164344705-47542687000d?w=800&q=80",
        type: "Temperate/Subtropical Rainforest",
        countries: ["Japan"],
        climate: {
            rainfall: "4000-10000mm annually",
            temperature: "15-20°C average",
            humidity: "80-90%"
        },
        biodiversity: {
            animals: ["Yakushima Macaque", "Yakushima Deer", "Japanese Marten"],
            birds: ["Varied Tit", "Japanese Robin", "Ryukyu Robin"],
            trees: ["Yakusugi (ancient cedars)", "Some over 7,000 years old"]
        },
        rivers: ["Miyanoura River"],
        indigenous: ["Jomon people (prehistoric)"],
        issues: ["Tourism pressure", "Deer overpopulation"],
        conservation: ["UNESCO World Heritage Site", "National Park"],
        coordinates: { lat: 30.3500, lng: 130.5000 },
        description: "Yakushima inspired the film Princess Mononoke and contains the oldest trees in Japan, including Jōmon Sugi, estimated at 2,000-7,000 years old."
    },
    {
        id: 17,
        name: "Redwood Forest",
        region: "California, USA",
        area: 780,
        image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80",
        type: "Temperate Rainforest",
        countries: ["United States"],
        climate: {
            rainfall: "1500-2500mm annually",
            temperature: "10-15°C average",
            humidity: "70-90%"
        },
        biodiversity: {
            animals: ["Roosevelt Elk", "Black Bear", "Mountain Lion", "Banana Slug", "Spotted Owl"],
            birds: ["Marbled Murrelet", "Northern Spotted Owl", "Steller's Jay"],
            trees: ["Coast Redwood (tallest trees on Earth)", "Douglas Fir", "Tanoak"]
        },
        rivers: ["Klamath River", "Eel River"],
        indigenous: ["Yurok", "Tolowa", "Karuk"],
        issues: ["Historic logging", "Climate change", "Fire management"],
        conservation: ["Redwood National and State Parks", "UNESCO World Heritage Site"],
        coordinates: { lat: 41.2132, lng: -124.0046 },
        description: "Home to the tallest trees on Earth, Coast Redwoods can exceed 380 feet (115m) in height and live over 2,000 years."
    },
    {
        id: 18,
        name: "Borneo Rainforest",
        region: "Borneo Island",
        area: 280000,
        image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
        type: "Tropical Rainforest",
        countries: ["Malaysia", "Indonesia", "Brunei"],
        climate: {
            rainfall: "2500-3500mm annually",
            temperature: "27-32°C average",
            humidity: "80-90%"
        },
        biodiversity: {
            animals: ["Bornean Orangutan", "Proboscis Monkey", "Pygmy Elephant", "Clouded Leopard", "Sun Bear"],
            birds: ["Rhinoceros Hornbill", "Bornean Bristlehead"],
            trees: ["Dipterocarp (tallest tropical trees)", "Rafflesia", "Pitcher Plants"]
        },
        rivers: ["Kinabatangan River", "Rajang River", "Mahakam River"],
        indigenous: ["Dayak", "Iban", "Kadazan", "Penan"],
        issues: ["Palm oil plantations", "Logging", "Fires", "Mining"],
        conservation: ["Heart of Borneo Initiative", "Kinabalu Park (UNESCO)"],
        coordinates: { lat: 1.0000, lng: 116.0000 },
        description: "Borneo's rainforest is 130 million years old, older than the Amazon, and contains over 15,000 plant species and 3,000 tree species."
    },
    {
        id: 19,
        name: "Appalachian Forest",
        region: "Eastern USA",
        area: 95000,
        image: "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=800&q=80",
        type: "Temperate Deciduous Forest",
        countries: ["United States"],
        climate: {
            rainfall: "1000-1500mm annually",
            temperature: "8-15°C average",
            humidity: "60-80%"
        },
        biodiversity: {
            animals: ["Black Bear", "White-tailed Deer", "Wild Turkey", "Salamanders (highest diversity)"],
            birds: ["Scarlet Tanager", "Wood Thrush", "Cerulean Warbler"],
            trees: ["Oak", "Hickory", "Maple", "Chestnut (recovering)", "Tulip Poplar"]
        },
        rivers: ["Tennessee River", "Ohio River tributaries"],
        indigenous: ["Cherokee", "Catawba", "Shawnee"],
        issues: ["Mountaintop removal mining", "Invasive species", "Climate change"],
        conservation: ["Great Smoky Mountains National Park", "Blue Ridge Parkway"],
        coordinates: { lat: 36.0000, lng: -83.0000 },
        description: "The Appalachian Forest is one of the most biologically diverse temperate forests, with the world's greatest diversity of salamanders."
    },
    {
        id: 20,
        name: "New Guinea Rainforest",
        region: "New Guinea Island",
        area: 288000,
        image: "https://images.unsplash.com/photo-1557456170-0cf4f4d0d362?w=800&q=80",
        type: "Tropical Rainforest",
        countries: ["Papua New Guinea", "Indonesia (West Papua)"],
        climate: {
            rainfall: "2500-5000mm annually",
            temperature: "24-30°C average",
            humidity: "80-95%"
        },
        biodiversity: {
            animals: ["Tree Kangaroo", "Echidna", "Cuscus", "Birds of Paradise", "Cassowary"],
            birds: ["Birds of Paradise (42 species)", "Bowerbirds", "Cassowary"],
            trees: ["Tropical hardwoods", "Tree ferns", "Orchids (3,000 species)"]
        },
        rivers: ["Sepik River", "Fly River", "Mamberamo River"],
        indigenous: ["Over 800 language groups", "Papua tribes"],
        issues: ["Logging", "Mining", "Oil palm expansion"],
        conservation: ["YUS Conservation Area", "Various national parks"],
        coordinates: { lat: -5.0000, lng: 141.0000 },
        description: "New Guinea is the world's largest tropical island and contains the third-largest rainforest, with extraordinary endemic biodiversity."
    },
    {
        id: 21,
        name: "Choco-Darien Rainforest",
        region: "Colombia, Ecuador, Panama",
        area: 187400,
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
        type: "Tropical Rainforest",
        countries: ["Colombia", "Ecuador", "Panama"],
        climate: {
            rainfall: "8000-13000mm annually",
            temperature: "25-28°C average",
            humidity: "85-95%"
        },
        biodiversity: {
            animals: ["Jaguar", "Spectacled Bear", "Baird's Tapir", "Poison Dart Frogs"],
            birds: ["Chocó Toucan", "Scarlet Macaw", "Harpy Eagle"],
            trees: ["Tropical hardwoods", "Rubber trees", "Palms"]
        },
        rivers: ["Atrato River", "San Juan River"],
        indigenous: ["Emberá", "Wounaan", "Kuna"],
        issues: ["Mining", "Logging", "Road construction", "Drug trafficking"],
        conservation: ["Los Katíos National Park (UNESCO)", "Darién National Park"],
        coordinates: { lat: 6.0000, lng: -77.0000 },
        description: "The Chocó region is one of the wettest places on Earth and a global biodiversity hotspot with exceptional endemism."
    },
    {
        id: 22,
        name: "Carpathian Forest",
        region: "Central/Eastern Europe",
        area: 210000,
        image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80",
        type: "Temperate Forest",
        countries: ["Romania", "Ukraine", "Poland", "Slovakia", "Hungary", "Czech Republic", "Serbia"],
        climate: {
            rainfall: "600-1400mm annually",
            temperature: "4-8°C average",
            humidity: "70-85%"
        },
        biodiversity: {
            animals: ["Brown Bear", "Gray Wolf", "Eurasian Lynx", "European Bison", "Chamois"],
            birds: ["Golden Eagle", "Ural Owl", "White-backed Woodpecker"],
            trees: ["European Beech", "Norway Spruce", "Silver Fir", "Sycamore Maple"]
        },
        rivers: ["Danube tributaries", "Tisza River"],
        indigenous: ["Hutsuls", "Lemkos", "Rusyns"],
        issues: ["Illegal logging", "Ski resort development", "Climate change"],
        conservation: ["Primeval Beech Forests (UNESCO)", "Various national parks"],
        coordinates: { lat: 47.0000, lng: 25.0000 },
        description: "The Carpathians contain Europe's largest remaining primeval beech forests and the largest populations of brown bears and wolves in Europe."
    },
    {
        id: 23,
        name: "Hoh Rainforest",
        region: "Washington, USA",
        area: 3700,
        image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80",
        type: "Temperate Rainforest",
        countries: ["United States"],
        climate: {
            rainfall: "3500-4500mm annually",
            temperature: "8-12°C average",
            humidity: "80-95%"
        },
        biodiversity: {
            animals: ["Roosevelt Elk", "Black Bear", "Cougar", "Banana Slug", "Salmon"],
            birds: ["Spotted Owl", "Bald Eagle", "Marbled Murrelet"],
            trees: ["Sitka Spruce", "Western Hemlock", "Big Leaf Maple (moss-covered)"]
        },
        rivers: ["Hoh River"],
        indigenous: ["Hoh Tribe", "Quinault"],
        issues: ["Climate change", "Salmon habitat degradation"],
        conservation: ["Olympic National Park (UNESCO)", "Wilderness areas"],
        coordinates: { lat: 47.8600, lng: -123.9300 },
        description: "The Hoh is one of the finest examples of temperate rainforest in the US, famous for its moss-draped trees and pristine wilderness."
    },
    {
        id: 24,
        name: "Atlantic Forest",
        region: "Brazil, Paraguay, Argentina",
        area: 1315460,
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
        type: "Tropical/Subtropical Rainforest",
        countries: ["Brazil", "Paraguay", "Argentina"],
        climate: {
            rainfall: "1000-2000mm annually",
            temperature: "18-27°C average",
            humidity: "70-85%"
        },
        biodiversity: {
            animals: ["Golden Lion Tamarin", "Jaguar", "Tapir", "Maned Sloth", "Muriqui"],
            birds: ["Red-billed Curassow", "Vinaceous Amazon", "Seven-colored Tanager"],
            trees: ["Brazilwood", "Araucaria", "Various palms"]
        },
        rivers: ["Paraná River", "São Francisco River"],
        indigenous: ["Guarani", "Tupiniquim"],
        issues: ["Only 12% remains", "Fragmentation", "Urban expansion"],
        conservation: ["Atlantic Forest Biosphere Reserve", "Various protected areas"],
        coordinates: { lat: -23.0000, lng: -47.0000 },
        description: "One of the world's most threatened ecosystems, the Atlantic Forest has lost 88% of its original coverage but still harbors 8% of all species on Earth."
    },
    {
        id: 25,
        name: "Mau Forest",
        region: "Kenya",
        area: 4000,
        image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&q=80",
        type: "Tropical Montane Forest",
        countries: ["Kenya"],
        climate: {
            rainfall: "1200-2000mm annually",
            temperature: "10-20°C average",
            humidity: "70-80%"
        },
        biodiversity: {
            animals: ["African Elephant", "Leopard", "Buffalo", "Giant Forest Hog", "Bongo"],
            birds: ["Hartlaub's Turaco", "Mountain Buzzard"],
            trees: ["Cedar", "Bamboo", "Podocarpus", "African Wild Olive"]
        },
        rivers: ["Mara River (source)", "Sondu River", "Njoro River"],
        indigenous: ["Ogiek people"],
        issues: ["Encroachment", "Illegal logging", "Settlement"],
        conservation: ["Mau Forest Complex protection efforts", "Community forestry"],
        coordinates: { lat: -0.5000, lng: 35.5000 },
        description: "The Mau Forest is Kenya's largest indigenous montane forest and the source of 12 rivers, including the famous Mara River."
    },
    {
        id: 26,
        name: "Kakamega Forest",
        region: "Kenya",
        area: 238,
        image: "https://images.unsplash.com/photo-1474511320723-9a56873571b7?w=800&q=80",
        type: "Tropical Rainforest",
        countries: ["Kenya"],
        climate: {
            rainfall: "2000mm annually",
            temperature: "18-25°C average",
            humidity: "75-85%"
        },
        biodiversity: {
            animals: ["De Brazza's Monkey", "Red-tailed Monkey", "Giant Ground Pangolin", "Blue Duiker"],
            birds: ["Great Blue Turaco", "Blue-headed Bee-eater", "Turner's Eremomela"],
            trees: ["Elgon Teak", "Fig trees", "Fern trees"]
        },
        rivers: ["Yala River tributaries"],
        indigenous: ["Luhya communities"],
        issues: ["Fragmentation", "Firewood collection", "Agricultural encroachment"],
        conservation: ["Kakamega Forest National Reserve", "Community conservation"],
        coordinates: { lat: 0.3000, lng: 34.8500 },
        description: "Kakamega is Kenya's only tropical rainforest, the easternmost remnant of the Congo Basin rainforest, isolated for thousands of years."
    },
    {
        id: 27,
        name: "Western Ghats Forests",
        region: "India",
        area: 140000,
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
        type: "Tropical Rainforest/Deciduous",
        countries: ["India"],
        climate: {
            rainfall: "2000-8000mm annually",
            temperature: "20-25°C average",
            humidity: "80-95%"
        },
        biodiversity: {
            animals: ["Bengal Tiger", "Asian Elephant", "Lion-tailed Macaque", "Malabar Giant Squirrel", "King Cobra"],
            birds: ["Great Hornbill", "Malabar Trogon", "Nilgiri Pipit"],
            trees: ["Teak", "Rosewood", "Sandalwood", "Shola trees"]
        },
        rivers: ["Krishna River", "Godavari River", "Cauvery River"],
        indigenous: ["Toda", "Kurumba", "Irula", "Kani"],
        issues: ["Mining", "Dams", "Agriculture expansion", "Invasive species"],
        conservation: ["UNESCO World Heritage Site", "Multiple national parks and wildlife sanctuaries"],
        coordinates: { lat: 12.0000, lng: 76.0000 },
        description: "The Western Ghats is one of 36 global biodiversity hotspots, with over 7,400 species of flowering plants, of which 1,600 are endemic."
    },
    {
        id: 28,
        name: "Knysna Forest",
        region: "South Africa",
        area: 600,
        image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&q=80",
        type: "Temperate Rainforest",
        countries: ["South Africa"],
        climate: {
            rainfall: "800-1200mm annually",
            temperature: "12-22°C average",
            humidity: "70-80%"
        },
        biodiversity: {
            animals: ["Knysna Elephant (critically endangered)", "Leopard", "Bushbuck", "Blue Duiker"],
            birds: ["Knysna Turaco", "Narina Trogon", "African Crowned Eagle"],
            trees: ["Yellowwood", "Stinkwood", "Hard Pear", "Ironwood"]
        },
        rivers: ["Knysna River"],
        indigenous: ["Khoisan people (historic)"],
        issues: ["Invasive species", "Fire risk", "Elephant population decline"],
        conservation: ["Garden Route National Park", "Protected natural forest"],
        coordinates: { lat: -34.0500, lng: 23.0500 },
        description: "The Knysna Forest is South Africa's largest indigenous forest and may contain the last remaining Knysna elephants, though only one has been confirmed in recent years."
    },
    {
        id: 29,
        name: "Jiuzhaigou Valley Forest",
        region: "Sichuan, China",
        area: 720,
        image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80",
        type: "Temperate Montane Forest",
        countries: ["China"],
        climate: {
            rainfall: "660-800mm annually",
            temperature: "-1 to 17°C (seasonal)",
            humidity: "70-80%"
        },
        biodiversity: {
            animals: ["Giant Panda", "Golden Snub-nosed Monkey", "Sichuan Takin", "Red Panda"],
            birds: ["Chinese Monal", "Blood Pheasant", "Eared Pheasant"],
            trees: ["Spruce", "Fir", "Birch", "Bamboo"]
        },
        rivers: ["Jiuzhaigou River", "Rize River"],
        indigenous: ["Tibetan communities", "Qiang people"],
        issues: ["Tourism pressure", "Earthquake damage (2017)", "Climate change"],
        conservation: ["UNESCO World Heritage Site", "National Park"],
        coordinates: { lat: 33.1500, lng: 103.9200 },
        description: "Jiuzhaigou means 'Nine Village Valley' and is famous for its colorful lakes, waterfalls, and surrounding primeval forest."
    },
    {
        id: 30,
        name: "Taman Negara",
        region: "Malaysia",
        area: 4343,
        image: "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=800&q=80",
        type: "Tropical Rainforest",
        countries: ["Malaysia"],
        climate: {
            rainfall: "2000-3000mm annually",
            temperature: "25-30°C average",
            humidity: "85-95%"
        },
        biodiversity: {
            animals: ["Malayan Tiger", "Asian Elephant", "Malayan Tapir", "Sumatran Rhinoceros", "Gaur"],
            birds: ["Great Argus", "Rhinoceros Hornbill", "Malaysian Peacock-pheasant"],
            trees: ["Tualang (tallest tropical tree)", "Dipterocarp species", "Rafflesia"]
        },
        rivers: ["Tembeling River", "Tahan River"],
        indigenous: ["Batek", "Semaq Beri"],
        issues: ["Poaching", "Logging encroachment", "Hydroelectric proposals"],
        conservation: ["Malaysia's premier national park", "Oldest protected area"],
        coordinates: { lat: 4.7500, lng: 102.4500 },
        description: "Taman Negara is one of the world's oldest tropical rainforests, estimated at 130 million years old, and Malaysia's largest national park."
    },
    {
        id: 31,
        name: "Fiordland Forest",
        region: "New Zealand",
        area: 12607,
        image: "https://images.unsplash.com/photo-1469521669194-babb45599def?w=800&q=80",
        type: "Temperate Rainforest",
        countries: ["New Zealand"],
        climate: {
            rainfall: "5000-8000mm annually",
            temperature: "5-15°C average",
            humidity: "80-95%"
        },
        biodiversity: {
            animals: ["Kea", "Kakapo", "Fiordland Crested Penguin", "Longfin Eel"],
            birds: ["Kea", "Kaka", "Tui", "Rifleman"],
            trees: ["Rimu", "Kahikatea", "Totara", "Silver Beech", "Mountain Beech"]
        },
        rivers: ["Waiau River", "Eglinton River"],
        indigenous: ["Ngāi Tahu Māori"],
        issues: ["Introduced predators", "Invasive plants", "Tourism impact"],
        conservation: ["UNESCO World Heritage Site (Te Wahipounamu)", "National Park"],
        coordinates: { lat: -45.4000, lng: 167.7000 },
        description: "Fiordland is New Zealand's largest national park, featuring dramatic fjords, rainforest, and unique endemic species."
    },
    {
        id: 32,
        name: "Crocker Range Forest",
        region: "Sabah, Malaysia (Borneo)",
        area: 1399,
        image: "https://images.unsplash.com/photo-1572099606223-6e29045d7de3?w=800&q=80",
        type: "Tropical Montane Rainforest",
        countries: ["Malaysia"],
        climate: {
            rainfall: "2500-4000mm annually",
            temperature: "15-25°C (varies with altitude)",
            humidity: "80-90%"
        },
        biodiversity: {
            animals: ["Bornean Orangutan", "Clouded Leopard", "Sun Bear", "Slow Loris"],
            birds: ["Mountain Serpent-eagle", "Whitehead's Broadbill", "Bornean Bristlehead"],
            trees: ["Oak", "Laurel", "Pitcher Plants", "Orchids"]
        },
        rivers: ["Padas River", "Papar River"],
        indigenous: ["Kadazan-Dusun", "Murut"],
        issues: ["Logging threats", "Agricultural encroachment"],
        conservation: ["Crocker Range National Park", "Important Bird Area"],
        coordinates: { lat: 5.6000, lng: 116.2000 },
        description: "The Crocker Range is the backbone of Sabah, containing the highest peaks in Southeast Asia outside of the Himalayas."
    },
    {
        id: 33,
        name: "Nilgiri Biosphere Reserve",
        region: "India",
        area: 5520,
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
        type: "Tropical/Montane Forest",
        countries: ["India"],
        climate: {
            rainfall: "500-3000mm annually",
            temperature: "10-25°C average",
            humidity: "65-85%"
        },
        biodiversity: {
            animals: ["Nilgiri Tahr", "Bengal Tiger", "Indian Elephant", "Nilgiri Langur", "Gaur"],
            birds: ["Nilgiri Wood Pigeon", "Nilgiri Flycatcher", "White-bellied Shortwing"],
            trees: ["Shola forests", "Grasslands", "Evergreen species"]
        },
        rivers: ["Bhavani River", "Moyar River"],
        indigenous: ["Toda", "Badaga", "Kurumba", "Irula"],
        issues: ["Human-wildlife conflict", "Tourism pressure", "Invasive plants"],
        conservation: ["First Biosphere Reserve in India", "UNESCO Biosphere Reserve"],
        coordinates: { lat: 11.4500, lng: 76.6500 },
        description: "The Nilgiri Biosphere Reserve was India's first UNESCO Biosphere Reserve and harbors unique shola-grassland ecosystems."
    },
    {
        id: 34,
        name: "Kinabalu Forest",
        region: "Sabah, Malaysia",
        area: 754,
        image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80",
        type: "Tropical Montane Rainforest",
        countries: ["Malaysia"],
        climate: {
            rainfall: "2500-4000mm annually",
            temperature: "6-24°C (varies with altitude)",
            humidity: "80-95%"
        },
        biodiversity: {
            animals: ["Kinabalu Giant Red Leech", "Kinabalu Giant Earthworm", "Mountain Treeshrew"],
            birds: ["Kinabalu Friendly Warbler", "Whitehead's Trogon", "Mountain Blackeye"],
            trees: ["Rafflesia", "Nepenthes (pitcher plants)", "Orchids (1,200 species)"]
        },
        rivers: ["Kinabalu River sources"],
        indigenous: ["Kadazan-Dusun"],
        issues: ["Climate change affecting alpine zones", "Tourism pressure"],
        conservation: ["UNESCO World Heritage Site", "Kinabalu National Park"],
        coordinates: { lat: 6.0833, lng: 116.5500 },
        description: "Mount Kinabalu is Southeast Asia's highest peak and the park has one of the richest assemblages of plants in the world."
    },
    {
        id: 35,
        name: "Madagascar Rainforest",
        region: "Madagascar",
        area: 90000,
        image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80",
        type: "Tropical Rainforest",
        countries: ["Madagascar"],
        climate: {
            rainfall: "2000-3500mm annually",
            temperature: "20-27°C average",
            humidity: "80-90%"
        },
        biodiversity: {
            animals: ["Lemurs (100+ species)", "Fossa", "Tenrecs", "Chameleons (50% of world's species)"],
            birds: ["Madagascar Fish Eagle", "Velvet Asity", "Helmet Vanga"],
            trees: ["Traveler's Palm", "Rosy Periwinkle", "Baobabs (at forest edges)"]
        },
        rivers: ["Mananara River", "Mangoro River"],
        indigenous: ["Malagasy peoples (18 ethnic groups)"],
        issues: ["90% of forest lost", "Slash-and-burn agriculture", "Illegal logging"],
        conservation: ["Ranomafana National Park", "Masoala National Park", "Multiple reserves"],
        coordinates: { lat: -18.0000, lng: 49.0000 },
        description: "Madagascar's rainforests harbor species found nowhere else on Earth, with 90% endemism among many animal groups, but only 10% of original forest remains."
    },
    {
        id: 36,
        name: "Olympic Rainforest",
        region: "Washington, USA",
        area: 3700,
        image: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?w=800&q=80",
        type: "Temperate Rainforest",
        countries: ["United States"],
        climate: {
            rainfall: "3500-5000mm annually",
            temperature: "8-14°C average",
            humidity: "85-95%"
        },
        biodiversity: {
            animals: ["Roosevelt Elk", "Olympic Marmot", "Black Bear", "Mountain Goat", "Salmon"],
            birds: ["Spotted Owl", "Marbled Murrelet", "Winter Wren"],
            trees: ["Sitka Spruce", "Western Hemlock", "Western Red Cedar", "Big Leaf Maple"]
        },
        rivers: ["Quinault River", "Queets River", "Bogachiel River"],
        indigenous: ["Quinault", "Hoh", "Quileute", "Makah"],
        issues: ["Climate change", "Salmon decline", "Invasive species"],
        conservation: ["Olympic National Park (UNESCO)", "Wilderness areas"],
        coordinates: { lat: 47.8000, lng: -123.6000 },
        description: "Olympic's rainforest valleys receive more rain than almost anywhere else in the continental US, creating lush moss-covered forests."
    },
    {
        id: 37,
        name: "Sumatra Rainforest",
        region: "Indonesia",
        area: 25000,
        image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
        type: "Tropical Rainforest",
        countries: ["Indonesia"],
        climate: {
            rainfall: "2500-4000mm annually",
            temperature: "25-28°C average",
            humidity: "80-90%"
        },
        biodiversity: {
            animals: ["Sumatran Orangutan", "Sumatran Tiger", "Sumatran Rhinoceros", "Sumatran Elephant"],
            birds: ["Rueck's Blue Flycatcher", "Storm's Stork", "Rhinoceros Hornbill"],
            trees: ["Rafflesia arnoldii", "Dipterocarp species", "Titan Arum"]
        },
        rivers: ["Musi River", "Hari River", "Kampar River"],
        indigenous: ["Orang Rimba", "Kubu", "Sakai"],
        issues: ["Rapid deforestation", "Palm oil plantations", "Illegal logging", "Forest fires"],
        conservation: ["Tropical Rainforest Heritage of Sumatra (UNESCO)", "Gunung Leuser NP"],
        coordinates: { lat: 0.5000, lng: 101.5000 },
        description: "Sumatra's rainforest is home to four critically endangered species: the Sumatran orangutan, tiger, rhinoceros, and elephant."
    },
    {
        id: 38,
        name: "Bwindi Impenetrable Forest",
        region: "Uganda",
        area: 321,
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
        type: "Tropical Montane Rainforest",
        countries: ["Uganda"],
        climate: {
            rainfall: "1400-1900mm annually",
            temperature: "7-20°C average",
            humidity: "75-90%"
        },
        biodiversity: {
            animals: ["Mountain Gorilla (half of world population)", "Chimpanzee", "Forest Elephant", "Giant Forest Hog"],
            birds: ["African Green Broadbill", "Shelley's Crimsonwing", "Grauer's Warbler"],
            trees: ["Giant lobelias", "Tree ferns", "Podocarpus"]
        },
        rivers: ["Ishasha River tributaries"],
        indigenous: ["Batwa Pygmies"],
        issues: ["Human pressure", "Poaching (reduced)", "Climate change"],
        conservation: ["UNESCO World Heritage Site", "Gorilla habituation"],
        coordinates: { lat: -1.0500, lng: 29.6500 },
        description: "Bwindi is home to approximately half of the world's remaining mountain gorillas and is one of Africa's most biologically diverse areas."
    },
    {
        id: 39,
        name: "Lacandon Jungle",
        region: "Mexico",
        area: 19000,
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
        type: "Tropical Rainforest",
        countries: ["Mexico"],
        climate: {
            rainfall: "3000-4000mm annually",
            temperature: "24-28°C average",
            humidity: "80-90%"
        },
        biodiversity: {
            animals: ["Jaguar", "Howler Monkey", "Spider Monkey", "Scarlet Macaw", "Tapir"],
            birds: ["Keel-billed Toucan", "Ocellated Turkey", "King Vulture"],
            trees: ["Mahogany", "Ceiba", "Sapodilla", "Rubber Tree"]
        },
        rivers: ["Usumacinta River", "Lacanjá River"],
        indigenous: ["Lacandon Maya", "Tzeltal", "Ch'ol"],
        issues: ["Deforestation", "Agricultural expansion", "Illegal logging"],
        conservation: ["Montes Azules Biosphere Reserve", "Ancient Maya sites"],
        coordinates: { lat: 16.5000, lng: -91.0000 },
        description: "The Lacandon Jungle is Mexico's largest remaining tropical rainforest and contains ancient Mayan ruins including Bonampak and Yaxchilan."
    },
    {
        id: 40,
        name: "Gunung Palung National Park",
        region: "West Kalimantan, Indonesia",
        area: 900,
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
        type: "Tropical Rainforest",
        countries: ["Indonesia"],
        climate: {
            rainfall: "4000-5000mm annually",
            temperature: "23-30°C average",
            humidity: "85-95%"
        },
        biodiversity: {
            animals: ["Bornean Orangutan", "Sun Bear", "Proboscis Monkey", "Hornbills"],
            birds: ["Great Argus", "Helmeted Hornbill", "Black-and-red Broadbill"],
            trees: ["Dipterocarp", "Strangler Fig", "Durian"]
        },
        rivers: ["Mempawah River"],
        indigenous: ["Dayak communities"],
        issues: ["Illegal logging", "Mining", "Poaching"],
        conservation: ["National Park status", "Orangutan research station"],
        coordinates: { lat: -1.2000, lng: 110.1000 },
        description: "Gunung Palung contains one of the most important orangutan populations and represents seven distinct ecosystem types."
    },
    {
        id: 41,
        name: "Yellowwood Forest",
        region: "South Africa",
        area: 400,
        image: "https://images.unsplash.com/photo-1516655855035-d5215bcb5604?w=800&q=80",
        type: "Afromontane Forest",
        countries: ["South Africa"],
        climate: {
            rainfall: "800-1200mm annually",
            temperature: "12-22°C average",
            humidity: "65-80%"
        },
        biodiversity: {
            animals: ["Cape Parrot", "Bush Pig", "Bushbuck", "Samango Monkey"],
            birds: ["Cape Parrot", "Knysna Turaco", "Chorister Robin-Chat"],
            trees: ["Real Yellowwood", "Outeniqua Yellowwood", "Stinkwood"]
        },
        rivers: ["Storms River", "Bloukrans River"],
        indigenous: ["Khoisan (historic)"],
        issues: ["Fragmentation", "Invasive species", "Fire"],
        conservation: ["Tsitsikamma National Park", "Protected forests"],
        coordinates: { lat: -33.9500, lng: 23.9000 },
        description: "These ancient yellowwood forests are remnants of vast forests that once covered more of southern Africa."
    },
    {
        id: 42,
        name: "Periyar Forest",
        region: "Kerala, India",
        area: 925,
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
        type: "Tropical Evergreen/Deciduous",
        countries: ["India"],
        climate: {
            rainfall: "2000-3000mm annually",
            temperature: "15-30°C average",
            humidity: "80-90%"
        },
        biodiversity: {
            animals: ["Asian Elephant", "Bengal Tiger", "Gaur", "Sambar Deer", "Lion-tailed Macaque"],
            birds: ["Great Hornbill", "Malabar Grey Hornbill", "Nilgiri Wood Pigeon"],
            trees: ["Teak", "Rosewood", "Sandalwood", "Bamboo"]
        },
        rivers: ["Periyar River"],
        indigenous: ["Mannan", "Paliyan", "Mala Arayan"],
        issues: ["Human-elephant conflict", "Encroachment"],
        conservation: ["Tiger Reserve", "Elephant Reserve"],
        coordinates: { lat: 9.4500, lng: 77.1500 },
        description: "Periyar is one of India's most popular wildlife destinations, centered around a scenic lake and rich in elephants."
    },
    {
        id: 43,
        name: "Korup National Park",
        region: "Cameroon",
        area: 1260,
        image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80",
        type: "Tropical Rainforest",
        countries: ["Cameroon"],
        climate: {
            rainfall: "4000-5000mm annually",
            temperature: "24-27°C average",
            humidity: "85-95%"
        },
        biodiversity: {
            animals: ["Drill", "Chimpanzee", "Forest Elephant", "Preuss's Red Colobus"],
            birds: ["Grey-necked Rockfowl", "Cameroon Olive Greenbul"],
            trees: ["Okoume", "Iroko", "Endemic species"]
        },
        rivers: ["Ndian River", "Korup streams"],
        indigenous: ["Local forest communities"],
        issues: ["Hunting", "Logging pressure", "Access roads"],
        conservation: ["National Park", "Important Bird Area"],
        coordinates: { lat: 5.1000, lng: 9.0500 },
        description: "Korup is one of Africa's oldest rainforests, largely undisturbed for 60 million years, with exceptional plant diversity."
    },
    {
        id: 44,
        name: "Ranomafana National Park",
        region: "Madagascar",
        area: 416,
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
        type: "Tropical Rainforest",
        countries: ["Madagascar"],
        climate: {
            rainfall: "2500-4000mm annually",
            temperature: "14-25°C average",
            humidity: "85-95%"
        },
        biodiversity: {
            animals: ["Golden Bamboo Lemur", "Greater Bamboo Lemur", "12 lemur species", "Chameleons"],
            birds: ["Ground-rollers", "Velvet Asity", "Sunbird Asity"],
            trees: ["Bamboo", "Tree ferns", "Endemic species"]
        },
        rivers: ["Namorona River"],
        indigenous: ["Tanala people"],
        issues: ["Deforestation outside park", "Hunting", "Climate change"],
        conservation: ["UNESCO World Heritage Site", "Important research station"],
        coordinates: { lat: -21.2500, lng: 47.4500 },
        description: "Ranomafana is famous for the discovery of the Golden Bamboo Lemur in 1986 and contains exceptional lemur diversity."
    },
    {
        id: 45,
        name: "Danum Valley",
        region: "Sabah, Malaysia",
        area: 438,
        image: "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=800&q=80",
        type: "Tropical Lowland Rainforest",
        countries: ["Malaysia"],
        climate: {
            rainfall: "2700mm annually",
            temperature: "24-32°C average",
            humidity: "80-90%"
        },
        biodiversity: {
            animals: ["Bornean Orangutan", "Bornean Pygmy Elephant", "Clouded Leopard", "Sun Bear"],
            birds: ["Great Argus", "Storm's Stork", "Bornean Bristlehead"],
            trees: ["Dipterocarp giants (up to 70m)", "Strangler figs"]
        },
        rivers: ["Segama River"],
        indigenous: ["Dusun"],
        issues: ["Logging surrounding areas", "Fragmentation"],
        conservation: ["Conservation Area", "Field research centre"],
        coordinates: { lat: 5.0000, lng: 117.7500 },
        description: "Danum Valley is one of the last remaining primary lowland rainforests in Sabah, never logged and pristine."
    },
    {
        id: 46,
        name: "Ulu Temburong National Park",
        region: "Brunei",
        area: 550,
        image: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=800&q=80",
        type: "Tropical Rainforest",
        countries: ["Brunei"],
        climate: {
            rainfall: "4000-5000mm annually",
            temperature: "25-30°C average",
            humidity: "80-95%"
        },
        biodiversity: {
            animals: ["Proboscis Monkey", "Bornean Gibbon", "Flying Lemur", "Pangolin"],
            birds: ["Helmeted Hornbill", "Bulbuls", "Kingfishers"],
            trees: ["Dipterocarp", "Ferns", "Orchids"]
        },
        rivers: ["Temburong River", "Belalong River"],
        indigenous: ["Iban communities"],
        issues: ["Relatively pristine", "Limited access (protective)"],
        conservation: ["National Park (Brunei's first)", "Research center"],
        coordinates: { lat: 4.5500, lng: 115.1500 },
        description: "Ulu Temburong is often called the 'Green Jewel of Brunei' and remains largely pristine due to limited access."
    },
    {
        id: 47,
        name: "Khao Sok National Park",
        region: "Thailand",
        area: 739,
        image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=800&q=80",
        type: "Tropical Rainforest",
        countries: ["Thailand"],
        climate: {
            rainfall: "3500mm annually",
            temperature: "22-32°C average",
            humidity: "80-90%"
        },
        biodiversity: {
            animals: ["Asian Elephant", "Malaysian Sun Bear", "Tiger (rare)", "Gibbon"],
            birds: ["Great Hornbill", "Helmeted Hornbill", "Kingfishers"],
            trees: ["Rafflesia kerrii", "Giant bamboo", "Limestone flora"]
        },
        rivers: ["Sok River", "Cheow Lan Lake"],
        indigenous: ["Sakai (historically)"],
        issues: ["Dam impact", "Tourism management"],
        conservation: ["National Park", "Part of larger forest complex"],
        coordinates: { lat: 8.9300, lng: 98.5300 },
        description: "Khao Sok contains one of the world's oldest evergreen rainforests and the world's largest flower, Rafflesia kerrii."
    },
    {
        id: 48,
        name: "Corcovado National Park",
        region: "Costa Rica",
        area: 424,
        image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&q=80",
        type: "Tropical Rainforest",
        countries: ["Costa Rica"],
        climate: {
            rainfall: "5000-6000mm annually",
            temperature: "25-27°C average",
            humidity: "85-95%"
        },
        biodiversity: {
            animals: ["Jaguar", "Tapir", "All 4 Costa Rican monkey species", "Scarlet Macaw"],
            birds: ["Scarlet Macaw", "Harpy Eagle", "King Vulture"],
            trees: ["Giant ceiba", "Strangler fig", "Wild almond"]
        },
        rivers: ["Río Claro", "Río Sirena"],
        indigenous: ["Indigenous reserves nearby"],
        issues: ["Illegal gold mining", "Poaching (reduced)"],
        conservation: ["National Park", "Part of Osa Conservation Area"],
        coordinates: { lat: 8.5000, lng: -83.5500 },
        description: "National Geographic called Corcovado 'the most biologically intense place on Earth' due to its exceptional biodiversity."
    },
    {
        id: 49,
        name: "Waipoua Forest",
        region: "New Zealand",
        area: 90,
        image: "https://images.unsplash.com/photo-1469521669194-babb45599def?w=800&q=80",
        type: "Temperate Rainforest",
        countries: ["New Zealand"],
        climate: {
            rainfall: "2000-2500mm annually",
            temperature: "12-18°C average",
            humidity: "80-90%"
        },
        biodiversity: {
            animals: ["North Island Brown Kiwi", "Long-tailed Bat", "Native snails"],
            birds: ["Kiwi", "Tui", "Kereru", "Kokako"],
            trees: ["Kauri (including Tāne Mahuta - largest living)", "Tree ferns", "Nikau palms"]
        },
        rivers: ["Waipoua River"],
        indigenous: ["Te Roroa Māori"],
        issues: ["Kauri dieback disease", "Visitor impact"],
        conservation: ["Sanctuary", "Strict biosecurity"],
        coordinates: { lat: -35.6500, lng: 173.5000 },
        description: "Waipoua contains the largest remaining stand of kauri trees, including Tāne Mahuta, the largest living kauri tree."
    },
    {
        id: 50,
        name: "Orinoco Delta Forest",
        region: "Venezuela",
        area: 25000,
        image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&q=80",
        type: "Tropical Swamp Forest",
        countries: ["Venezuela"],
        climate: {
            rainfall: "1500-2500mm annually",
            temperature: "26-28°C average",
            humidity: "85-95%"
        },
        biodiversity: {
            animals: ["Howler Monkey", "Capybara", "Piranha", "Caiman", "Anaconda", "River Dolphin"],
            birds: ["Scarlet Ibis", "Hoatzin", "Macaws"],
            trees: ["Mangroves", "Palm forests", "Moriche palm"]
        },
        rivers: ["Orinoco River (delta channels)"],
        indigenous: ["Warao people (water people)"],
        issues: ["Oil development", "Mining", "Climate change impacts"],
        conservation: ["Delta del Orinoco Biosphere Reserve"],
        coordinates: { lat: 9.0000, lng: -62.0000 },
        description: "The Orinoco Delta is one of the world's largest river deltas, where the Orinoco empties into the Atlantic through a maze of channels."
    }
];

// Make data available globally
if (typeof window !== 'undefined') {
    window.forestsData1 = forestsData1;
}
