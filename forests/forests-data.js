/* =====================================================
   FORESTS DATA - COMBINED (All 50 Forests)
   ===================================================== */

const forestsData = [
    {
        id: 1,
        name: "Amazon Rainforest",
        region: "South America",
        continent: "South America",
        countries: ["Brazil", "Peru", "Colombia", "Venezuela", "Ecuador"],
        area: 5500000,
        image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&q=80",
        type: "Tropical Rainforest",
        climate: { rainfall: "2000-3000mm", temperature: "25-28°C" },
        biodiversity: {
            animals: ["Jaguar", "Sloth", "Anaconda", "Pink River Dolphin"],
            birds: ["Scarlet Macaw", "Toucan", "Harpy Eagle"],
            trees: ["Brazil Nut", "Rubber Tree", "Kapok"]
        },
        rivers: ["Amazon River", "Rio Negro", "Madeira River"],
        issues: ["Deforestation", "Illegal logging", "Forest fires"],
        coordinates: { lat: -3.4653, lng: -62.2159 }
    },
    {
        id: 2,
        name: "Congo Rainforest",
        region: "Central Africa",
        continent: "Africa",
        countries: ["DR Congo", "Republic of Congo", "Cameroon", "Gabon"],
        area: 2000000,
        image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&q=80",
        type: "Tropical Rainforest",
        climate: { rainfall: "1500-2000mm", temperature: "24-27°C" },
        biodiversity: {
            animals: ["Gorilla", "Bonobo", "Forest Elephant", "Okapi"],
            birds: ["African Grey Parrot", "Congo Peafowl"],
            trees: ["African Mahogany", "Ebony", "Iroko"]
        },
        rivers: ["Congo River", "Ubangi River"],
        issues: ["Illegal logging", "Bushmeat hunting", "Mining"],
        coordinates: { lat: 0.7893, lng: 24.4336 }
    },
    {
        id: 3,
        name: "Taiga (Boreal Forest)",
        region: "Northern Hemisphere",
        continent: "North America",
        countries: ["Russia", "Canada", "Alaska", "Norway", "Sweden", "Finland"],
        area: 17000000,
        image: "https://images.unsplash.com/photo-1476231682828-37e571bc172f?w=800&q=80",
        type: "Boreal Forest",
        climate: { rainfall: "200-750mm", temperature: "-54 to 21°C" },
        biodiversity: {
            animals: ["Brown Bear", "Moose", "Wolf", "Lynx", "Reindeer"],
            birds: ["Snowy Owl", "Crossbill"],
            trees: ["Spruce", "Pine", "Fir", "Larch", "Birch"]
        },
        rivers: ["Yenisei River", "Ob River", "Lena River"],
        issues: ["Climate change", "Forest fires", "Permafrost thawing"],
        coordinates: { lat: 64.2823, lng: 100.4435 }
    },
    {
        id: 4,
        name: "Southeast Asian Rainforest",
        region: "Southeast Asia",
        continent: "Asia",
        countries: ["Indonesia", "Malaysia", "Thailand", "Myanmar", "Vietnam"],
        area: 2480000,
        image: "https://images.unsplash.com/photo-1588392382834-a891154bca4d?w=800&q=80",
        type: "Tropical Rainforest",
        climate: { rainfall: "2500-4500mm", temperature: "25-30°C" },
        biodiversity: {
            animals: ["Orangutan", "Sumatran Tiger", "Asian Elephant", "Sun Bear"],
            birds: ["Hornbill", "Birds of Paradise"],
            trees: ["Dipterocarp", "Teak", "Rattan"]
        },
        rivers: ["Mekong River", "Irrawaddy River"],
        issues: ["Palm oil plantations", "Illegal logging", "Forest fires"],
        coordinates: { lat: 1.3521, lng: 110.8198 }
    },
    {
        id: 5,
        name: "North American Temperate Forest",
        region: "Eastern North America",
        continent: "North America",
        countries: ["United States", "Canada"],
        area: 3100000,
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
        type: "Temperate Deciduous Forest",
        climate: { rainfall: "750-1500mm", temperature: "-30 to 30°C" },
        biodiversity: {
            animals: ["Black Bear", "White-tailed Deer", "Raccoon", "Wild Turkey"],
            birds: ["Cardinal", "Blue Jay", "Woodpecker"],
            trees: ["Oak", "Maple", "Hickory", "Beech", "Birch"]
        },
        rivers: ["Mississippi River", "Ohio River"],
        issues: ["Urban development", "Invasive species", "Climate change"],
        coordinates: { lat: 37.0902, lng: -79.4429 }
    },
    {
        id: 6,
        name: "Tongass National Forest",
        region: "Alaska, USA",
        continent: "North America",
        countries: ["United States"],
        area: 68000,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
        type: "Temperate Rainforest",
        climate: { rainfall: "2500-5000mm", temperature: "0-15°C" },
        biodiversity: {
            animals: ["Brown Bear", "Bald Eagle", "Salmon", "Sea Otter"],
            birds: ["Bald Eagle", "Raven"],
            trees: ["Sitka Spruce", "Western Hemlock", "Red Cedar"]
        },
        rivers: ["Stikine River", "Taku River"],
        issues: ["Logging debates", "Climate change"],
        coordinates: { lat: 56.9485, lng: -133.6961 }
    },
    {
        id: 7,
        name: "Daintree Rainforest",
        region: "Queensland, Australia",
        continent: "Oceania",
        countries: ["Australia"],
        area: 1200,
        image: "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=800&q=80",
        type: "Tropical Rainforest",
        climate: { rainfall: "2000-4000mm", temperature: "22-31°C" },
        biodiversity: {
            animals: ["Cassowary", "Tree Kangaroo", "Platypus"],
            birds: ["Cassowary", "Kingfisher", "Riflebird"],
            trees: ["Fan Palm", "Strangler Fig", "Kauri Pine"]
        },
        rivers: ["Daintree River", "Mossman River"],
        issues: ["Climate change", "Tourism pressure", "Invasive species"],
        coordinates: { lat: -16.2500, lng: 145.4000 }
    },
    {
        id: 8,
        name: "Sundarbans Mangrove Forest",
        region: "Bangladesh & India",
        continent: "Asia",
        countries: ["Bangladesh", "India"],
        area: 10000,
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
        type: "Mangrove Forest",
        climate: { rainfall: "1600-2000mm", temperature: "20-34°C" },
        biodiversity: {
            animals: ["Royal Bengal Tiger", "Saltwater Crocodile", "Gangetic Dolphin"],
            birds: ["White-bellied Sea Eagle", "Kingfisher"],
            trees: ["Sundari Tree", "Gewa", "Goran"]
        },
        rivers: ["Ganges Delta", "Brahmaputra Delta"],
        issues: ["Rising sea levels", "Cyclones", "Human-tiger conflict"],
        coordinates: { lat: 21.9497, lng: 89.1833 }
    },
    {
        id: 9,
        name: "Black Forest",
        region: "Germany",
        continent: "Europe",
        countries: ["Germany"],
        area: 6009,
        image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&q=80",
        type: "Temperate Mixed Forest",
        climate: { rainfall: "1000-2000mm", temperature: "5-15°C" },
        biodiversity: {
            animals: ["Red Deer", "Wild Boar", "Red Fox", "Lynx"],
            birds: ["Capercaillie", "Black Woodpecker"],
            trees: ["Norway Spruce", "Silver Fir", "Beech", "Oak"]
        },
        rivers: ["Danube (source)", "Neckar"],
        issues: ["Climate change", "Bark beetle infestations"],
        coordinates: { lat: 48.2670, lng: 8.1711 }
    },
    {
        id: 10,
        name: "Valdivian Temperate Rainforest",
        region: "Chile & Argentina",
        continent: "South America",
        countries: ["Chile", "Argentina"],
        area: 248100,
        image: "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?w=800&q=80",
        type: "Temperate Rainforest",
        climate: { rainfall: "2000-4000mm", temperature: "7-16°C" },
        biodiversity: {
            animals: ["Pudú", "Kodkod", "Darwin's Fox"],
            birds: ["Magellanic Woodpecker", "Chucao Tapaculo"],
            trees: ["Alerce", "Araucaria", "Southern Beech"]
        },
        rivers: ["Valdivia River", "Bio Bio River"],
        issues: ["Logging", "Plantation forestry", "Fire"],
        coordinates: { lat: -40.0000, lng: -73.0000 }
    },
    {
        id: 11,
        name: "Great Bear Rainforest",
        region: "British Columbia, Canada",
        continent: "North America",
        countries: ["Canada"],
        area: 64000,
        image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=80",
        type: "Temperate Rainforest",
        climate: { rainfall: "3000-4500mm", temperature: "5-15°C" },
        biodiversity: {
            animals: ["Spirit Bear", "Grizzly Bear", "Wolf", "Salmon"],
            birds: ["Bald Eagle", "Raven"],
            trees: ["Western Red Cedar", "Sitka Spruce", "Hemlock"]
        },
        rivers: ["Various coastal rivers"],
        issues: ["Oil pipeline proposals", "Logging"],
        coordinates: { lat: 52.5000, lng: -127.5000 }
    },
    {
        id: 12,
        name: "Monteverde Cloud Forest",
        region: "Costa Rica",
        continent: "North America",
        countries: ["Costa Rica"],
        area: 105,
        image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&q=80",
        type: "Cloud Forest",
        climate: { rainfall: "2500-4000mm", temperature: "14-21°C" },
        biodiversity: {
            animals: ["Resplendent Quetzal", "Jaguar", "Ocelot"],
            birds: ["Quetzal", "Three-wattled Bellbird"],
            trees: ["Cloud forest species", "Epiphytes"]
        },
        rivers: ["Mountain streams"],
        issues: ["Climate change affecting cloud cover"],
        coordinates: { lat: 10.3000, lng: -84.7833 }
    },
    {
        id: 13,
        name: "Białowieża Forest",
        region: "Poland & Belarus",
        continent: "Europe",
        countries: ["Poland", "Belarus"],
        area: 1500,
        image: "https://images.unsplash.com/photo-1476231682828-37e571bc172f?w=800&q=80",
        type: "Temperate Primeval Forest",
        climate: { rainfall: "600-700mm", temperature: "-5 to 18°C" },
        biodiversity: {
            animals: ["European Bison", "Wolf", "Lynx", "Wild Boar"],
            birds: ["White-backed Woodpecker", "Eagle Owl"],
            trees: ["Oak", "Hornbeam", "Lime", "Spruce"]
        },
        rivers: ["Narewka River"],
        issues: ["Logging controversies", "Climate change"],
        coordinates: { lat: 52.7500, lng: 23.8500 }
    },
    {
        id: 14,
        name: "Sinharaja Forest Reserve",
        region: "Sri Lanka",
        continent: "Asia",
        countries: ["Sri Lanka"],
        area: 189,
        image: "https://images.unsplash.com/photo-1588392382834-a891154bca4d?w=800&q=80",
        type: "Tropical Rainforest",
        climate: { rainfall: "3000-6000mm", temperature: "24-27°C" },
        biodiversity: {
            animals: ["Sri Lankan Leopard", "Purple-faced Langur"],
            birds: ["Sri Lanka Blue Magpie", "Green-billed Coucal"],
            trees: ["Dipterocarpus", "Shorea", "Mesua"]
        },
        rivers: ["Gin Ganga", "Nilwala Ganga"],
        issues: ["Encroachment", "Illegal logging"],
        coordinates: { lat: 6.4167, lng: 80.4500 }
    },
    {
        id: 15,
        name: "New Guinea Rainforest",
        region: "Papua New Guinea & Indonesia",
        continent: "Oceania",
        countries: ["Papua New Guinea", "Indonesia"],
        area: 288000,
        image: "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=800&q=80",
        type: "Tropical Rainforest",
        climate: { rainfall: "2000-4000mm", temperature: "24-28°C" },
        biodiversity: {
            animals: ["Tree Kangaroo", "Cassowary", "Echidna"],
            birds: ["Birds of Paradise", "Crown Pigeon"],
            trees: ["Various tropical hardwoods", "Sago palm"]
        },
        rivers: ["Sepik River", "Fly River"],
        issues: ["Logging", "Mining", "Palm oil expansion"],
        coordinates: { lat: -5.5000, lng: 141.0000 }
    },
    {
        id: 16,
        name: "Yakushima Forest",
        region: "Kagoshima, Japan",
        continent: "Asia",
        countries: ["Japan"],
        area: 200,
        image: "https://images.unsplash.com/photo-1531804055935-76f44d7c3621?w=800&q=80",
        type: "Temperate Forest",
        climate: { rainfall: "4000-10000mm", temperature: "15-25°C" },
        biodiversity: {
            animals: ["Yakushima Macaque", "Yakushima Deer"],
            birds: ["Japanese Robin"],
            trees: ["Yakusugi Cedars (1000+ years old)", "Rhododendron"]
        },
        rivers: ["Mountain streams"],
        issues: ["Tourism pressure", "Climate change"],
        coordinates: { lat: 30.3500, lng: 130.5000 }
    },
    {
        id: 17,
        name: "Atlantic Forest",
        region: "Brazil, Argentina, Paraguay",
        continent: "South America",
        countries: ["Brazil", "Argentina", "Paraguay"],
        area: 150000,
        image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&q=80",
        type: "Tropical Forest",
        climate: { rainfall: "1000-4000mm", temperature: "17-24°C" },
        biodiversity: {
            animals: ["Golden Lion Tamarin", "Jaguar", "Maned Wolf"],
            birds: ["Red-tailed Amazon", "Seven-colored Tanager"],
            trees: ["Brazilian Rosewood", "Ironwood", "Palmito"]
        },
        rivers: ["Paraná River", "Uruguay River"],
        issues: ["Severe deforestation (only 7% remains)", "Fragmentation"],
        coordinates: { lat: -22.9068, lng: -43.1729 }
    },
    {
        id: 18,
        name: "Redwood Forest",
        region: "California, USA",
        continent: "North America",
        countries: ["United States"],
        area: 540,
        image: "https://images.unsplash.com/photo-1536431311719-398b6704d4cc?w=800&q=80",
        type: "Temperate Coniferous Forest",
        climate: { rainfall: "1500-3000mm", temperature: "10-20°C" },
        biodiversity: {
            animals: ["Roosevelt Elk", "Black Bear", "Mountain Lion"],
            birds: ["Marbled Murrelet", "Northern Spotted Owl"],
            trees: ["Coast Redwood (tallest trees on Earth)", "Douglas Fir"]
        },
        rivers: ["Eel River", "Klamath River"],
        issues: ["Historic logging", "Climate change", "Fire"],
        coordinates: { lat: 41.2132, lng: -124.0046 }
    },
    {
        id: 19,
        name: "Tarkine Rainforest",
        region: "Tasmania, Australia",
        continent: "Oceania",
        countries: ["Australia"],
        area: 3500,
        image: "https://images.unsplash.com/photo-1476231682828-37e571bc172f?w=800&q=80",
        type: "Temperate Rainforest",
        climate: { rainfall: "1500-2500mm", temperature: "8-16°C" },
        biodiversity: {
            animals: ["Tasmanian Devil", "Platypus", "Wombat"],
            birds: ["Wedge-tailed Eagle", "Orange-bellied Parrot"],
            trees: ["Huon Pine", "Myrtle Beech", "Sassafras"]
        },
        rivers: ["Pieman River", "Arthur River"],
        issues: ["Mining proposals", "Logging"],
        coordinates: { lat: -41.4000, lng: 145.2000 }
    },
    {
        id: 20,
        name: "Western Ghats Forest",
        region: "India",
        continent: "Asia",
        countries: ["India"],
        area: 160000,
        image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80",
        type: "Tropical Rainforest",
        climate: { rainfall: "2000-8000mm", temperature: "15-30°C" },
        biodiversity: {
            animals: ["Indian Elephant", "Bengal Tiger", "Lion-tailed Macaque"],
            birds: ["Great Hornbill", "Malabar Trogon"],
            trees: ["Teak", "Rosewood", "Shola species"]
        },
        rivers: ["Godavari", "Krishna", "Kaveri"],
        issues: ["Encroachment", "Mining", "Dam projects"],
        coordinates: { lat: 11.0000, lng: 76.0000 }
    },
    {
        id: 21,
        name: "Sherwood Forest",
        region: "Nottinghamshire, England",
        continent: "Europe",
        countries: ["United Kingdom"],
        area: 423,
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
        type: "Temperate Deciduous Forest",
        climate: { rainfall: "600-700mm", temperature: "5-15°C" },
        biodiversity: {
            animals: ["Red Deer", "Fallow Deer", "Badger", "Fox"],
            birds: ["Woodpecker", "Owl", "Robin"],
            trees: ["Ancient Oaks", "Birch", "Sweet Chestnut"]
        },
        rivers: ["River Maun"],
        issues: ["Oak decline", "Visitor pressure"],
        coordinates: { lat: 53.2000, lng: -1.0667 }
    },
    {
        id: 22,
        name: "Borneo Rainforest",
        region: "Malaysia, Indonesia, Brunei",
        continent: "Asia",
        countries: ["Malaysia", "Indonesia", "Brunei"],
        area: 530000,
        image: "https://images.unsplash.com/photo-1588392382834-a891154bca4d?w=800&q=80",
        type: "Tropical Rainforest",
        climate: { rainfall: "2500-4000mm", temperature: "25-30°C" },
        biodiversity: {
            animals: ["Bornean Orangutan", "Pygmy Elephant", "Clouded Leopard", "Proboscis Monkey"],
            birds: ["Rhinoceros Hornbill", "Pittas"],
            trees: ["Dipterocarp", "Ironwood", "Kapur"]
        },
        rivers: ["Kinabatangan River", "Rajang River"],
        issues: ["Palm oil plantations", "Logging", "Mining"],
        coordinates: { lat: 0.9619, lng: 114.5548 }
    },
    {
        id: 23,
        name: "Lacandon Jungle",
        region: "Chiapas, Mexico",
        continent: "North America",
        countries: ["Mexico"],
        area: 18000,
        image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&q=80",
        type: "Tropical Rainforest",
        climate: { rainfall: "2000-3000mm", temperature: "24-28°C" },
        biodiversity: {
            animals: ["Jaguar", "Howler Monkey", "Tapir", "Scarlet Macaw"],
            birds: ["Scarlet Macaw", "Toucan", "Quetzal"],
            trees: ["Mahogany", "Ceiba", "Chicozapote"]
        },
        rivers: ["Usumacinta River", "Lacantún River"],
        issues: ["Deforestation", "Agricultural expansion"],
        coordinates: { lat: 16.8000, lng: -91.0000 }
    },
    {
        id: 24,
        name: "Hoh Rainforest",
        region: "Washington, USA",
        continent: "North America",
        countries: ["United States"],
        area: 370,
        image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=80",
        type: "Temperate Rainforest",
        climate: { rainfall: "3500-4500mm", temperature: "5-15°C" },
        biodiversity: {
            animals: ["Roosevelt Elk", "Black Bear", "Cougar", "River Otter"],
            birds: ["Spotted Owl", "Marbled Murrelet"],
            trees: ["Sitka Spruce", "Western Hemlock", "Bigleaf Maple"]
        },
        rivers: ["Hoh River"],
        issues: ["Climate change", "Elk population management"],
        coordinates: { lat: 47.8600, lng: -123.9300 }
    },
    {
        id: 25,
        name: "Madagascar Rainforest",
        region: "Madagascar",
        continent: "Africa",
        countries: ["Madagascar"],
        area: 85000,
        image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&q=80",
        type: "Tropical Rainforest",
        climate: { rainfall: "2000-4000mm", temperature: "20-27°C" },
        biodiversity: {
            animals: ["Lemurs (100+ species)", "Fossa", "Chameleons", "Tenrecs"],
            birds: ["Vangas", "Ground Rollers"],
            trees: ["Baobab", "Traveller's Tree", "Rosewood"]
        },
        rivers: ["Betsiboka River", "Tsiribihina River"],
        issues: ["Severe deforestation", "Slash and burn agriculture"],
        coordinates: { lat: -18.7669, lng: 46.8691 }
    },
    {
        id: 26,
        name: "Scottish Highlands",
        region: "Scotland, UK",
        continent: "Europe",
        countries: ["United Kingdom"],
        area: 180,
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
        type: "Boreal Forest",
        climate: { rainfall: "1000-3000mm", temperature: "3-14°C" },
        biodiversity: {
            animals: ["Red Deer", "Pine Marten", "Red Squirrel", "Scottish Wildcat"],
            birds: ["Golden Eagle", "Capercaillie", "Scottish Crossbill"],
            trees: ["Scots Pine", "Birch", "Rowan", "Juniper"]
        },
        rivers: ["River Spey", "River Dee"],
        issues: ["Overgrazing by deer", "Limited ancient forest remaining"],
        coordinates: { lat: 57.0000, lng: -5.0000 }
    },
    {
        id: 27,
        name: "Appalachian Forest",
        region: "Eastern USA",
        continent: "North America",
        countries: ["United States"],
        area: 156000,
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
        type: "Temperate Deciduous Forest",
        climate: { rainfall: "1000-2000mm", temperature: "-10 to 25°C" },
        biodiversity: {
            animals: ["Black Bear", "White-tailed Deer", "Wild Turkey", "Salamanders"],
            birds: ["Wood Thrush", "Scarlet Tanager"],
            trees: ["Oak", "Hickory", "Maple", "Tulip Poplar"]
        },
        rivers: ["New River", "Potomac River"],
        issues: ["Invasive species", "Air pollution", "Development"],
        coordinates: { lat: 36.0000, lng: -81.0000 }
    },
    {
        id: 28,
        name: "Chiquitano Dry Forest",
        region: "Bolivia & Brazil",
        continent: "South America",
        countries: ["Bolivia", "Brazil"],
        area: 230000,
        image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80",
        type: "Tropical Dry Forest",
        climate: { rainfall: "800-1200mm", temperature: "24-26°C" },
        biodiversity: {
            animals: ["Jaguar", "Giant Anteater", "Peccary", "Tapir"],
            birds: ["Blue-throated Macaw", "Hyacinth Macaw"],
            trees: ["Curupau", "Tajibo", "Cuchi"]
        },
        rivers: ["Paraguay River tributaries"],
        issues: ["Agricultural expansion", "Fire", "Cattle ranching"],
        coordinates: { lat: -17.0000, lng: -62.0000 }
    },
    {
        id: 29,
        name: "Araucaria Forest",
        region: "Southern Brazil & Argentina",
        continent: "South America",
        countries: ["Brazil", "Argentina"],
        area: 25000,
        image: "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?w=800&q=80",
        type: "Subtropical Forest",
        climate: { rainfall: "1500-2000mm", temperature: "12-18°C" },
        biodiversity: {
            animals: ["Puma", "Ocelot", "Coati"],
            birds: ["Vinaceous Amazon Parrot", "Azure Jay"],
            trees: ["Araucaria (Monkey Puzzle)", "Imbuia", "Yerba Mate"]
        },
        rivers: ["Iguazu River"],
        issues: ["Historic logging (only 3% remains)", "Fragmentation"],
        coordinates: { lat: -26.0000, lng: -51.0000 }
    },
    {
        id: 30,
        name: "Bavarian Forest",
        region: "Germany",
        continent: "Europe",
        countries: ["Germany"],
        area: 24250,
        image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=800&q=80",
        type: "Temperate Mixed Forest",
        climate: { rainfall: "1000-1500mm", temperature: "3-12°C" },
        biodiversity: {
            animals: ["Lynx", "Wolf", "Otter", "Wild Boar"],
            birds: ["Capercaillie", "Three-toed Woodpecker"],
            trees: ["Spruce", "Beech", "Fir"]
        },
        rivers: ["Ilz River", "Regen River"],
        issues: ["Bark beetle outbreaks", "Climate change"],
        coordinates: { lat: 49.0000, lng: 13.4000 }
    },
    {
        id: 31,
        name: "Kakamega Forest",
        region: "Kenya",
        continent: "Africa",
        countries: ["Kenya"],
        area: 240,
        image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&q=80",
        type: "Tropical Rainforest",
        climate: { rainfall: "2000mm", temperature: "18-22°C" },
        biodiversity: {
            animals: ["De Brazza's Monkey", "Red-tailed Monkey", "Potto"],
            birds: ["Great Blue Turaco", "Turner's Eremomela"],
            trees: ["Elgon Teak", "Prunus africana", "Croton"]
        },
        rivers: ["Yala River"],
        issues: ["Encroachment", "Firewood collection", "Illegal logging"],
        coordinates: { lat: 0.2333, lng: 34.8500 }
    },
    {
        id: 32,
        name: "Jiuzhaigou Valley Forest",
        region: "Sichuan, China",
        continent: "Asia",
        countries: ["China"],
        area: 720,
        image: "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=800&q=80",
        type: "Temperate Forest",
        climate: { rainfall: "700-800mm", temperature: "2-15°C" },
        biodiversity: {
            animals: ["Giant Panda", "Golden Snub-nosed Monkey", "Takin"],
            birds: ["Golden Pheasant", "Blood Pheasant"],
            trees: ["Minjiang Fir", "Dragon Spruce", "Birch"]
        },
        rivers: ["Jiuzhaigou River"],
        issues: ["Tourism pressure", "Earthquake damage"],
        coordinates: { lat: 33.2600, lng: 103.9200 }
    },
    {
        id: 33,
        name: "Olympic Rainforest",
        region: "Washington, USA",
        continent: "North America",
        countries: ["United States"],
        area: 3700,
        image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=80",
        type: "Temperate Rainforest",
        climate: { rainfall: "3000-4000mm", temperature: "5-15°C" },
        biodiversity: {
            animals: ["Roosevelt Elk", "Olympic Marmot", "Mountain Goat"],
            birds: ["Spotted Owl", "Dipper"],
            trees: ["Sitka Spruce", "Western Red Cedar", "Douglas Fir"]
        },
        rivers: ["Quinault River", "Queets River"],
        issues: ["Climate change affecting glaciers"],
        coordinates: { lat: 47.8021, lng: -123.6044 }
    },
    {
        id: 34,
        name: "Knysna Forest",
        region: "South Africa",
        continent: "Africa",
        countries: ["South Africa"],
        area: 568,
        image: "https://images.unsplash.com/photo-1476231682828-37e571bc172f?w=800&q=80",
        type: "Temperate Forest",
        climate: { rainfall: "800-1200mm", temperature: "10-20°C" },
        biodiversity: {
            animals: ["Knysna Elephant", "Bushbuck", "Vervet Monkey", "Leopard"],
            birds: ["Knysna Turaco", "Narina Trogon"],
            trees: ["Yellowwood", "Stinkwood", "Ironwood"]
        },
        rivers: ["Knysna River"],
        issues: ["Invasive species", "Limited elephant population"],
        coordinates: { lat: -33.9500, lng: 23.0500 }
    },
    {
        id: 35,
        name: "Bwindi Impenetrable Forest",
        region: "Uganda",
        continent: "Africa",
        countries: ["Uganda"],
        area: 331,
        image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&q=80",
        type: "Tropical Montane Forest",
        climate: { rainfall: "1400-1900mm", temperature: "7-20°C" },
        biodiversity: {
            animals: ["Mountain Gorilla", "Chimpanzee", "Forest Elephant", "L'Hoest's Monkey"],
            birds: ["African Green Broadbill", "Shelley's Crimsonwing"],
            trees: ["Afrocarpus", "Podocarpus", "Dombeya"]
        },
        rivers: ["Mountain streams"],
        issues: ["Gorilla tourism management", "Encroachment"],
        coordinates: { lat: -1.0500, lng: 29.7000 }
    },
    {
        id: 36,
        name: "Sumatra Rainforest",
        region: "Indonesia",
        continent: "Asia",
        countries: ["Indonesia"],
        area: 25000,
        image: "https://images.unsplash.com/photo-1588392382834-a891154bca4d?w=800&q=80",
        type: "Tropical Rainforest",
        climate: { rainfall: "2500-4000mm", temperature: "25-28°C" },
        biodiversity: {
            animals: ["Sumatran Tiger", "Sumatran Orangutan", "Sumatran Rhinoceros", "Sumatran Elephant"],
            birds: ["Rueck's Blue Flycatcher", "Sumatran Ground Cuckoo"],
            trees: ["Dipterocarp", "Rafflesia", "Titan Arum"]
        },
        rivers: ["Kampar River", "Siak River"],
        issues: ["Rapid deforestation", "Palm oil", "Fires"],
        coordinates: { lat: -0.5897, lng: 101.3431 }
    },
    {
        id: 37,
        name: "Fiordland Forest",
        region: "New Zealand",
        continent: "Oceania",
        countries: ["New Zealand"],
        area: 12500,
        image: "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?w=800&q=80",
        type: "Temperate Rainforest",
        climate: { rainfall: "5000-8000mm", temperature: "5-15°C" },
        biodiversity: {
            animals: ["Kiwi", "Kea", "Fiordland Penguin", "Weta"],
            birds: ["Kaka", "Tui", "Fantail"],
            trees: ["Rimu", "Kahikatea", "Silver Beech", "Rata"]
        },
        rivers: ["Hollyford River", "Eglinton River"],
        issues: ["Introduced predators (stoats, rats)", "Climate change"],
        coordinates: { lat: -45.4000, lng: 167.7000 }
    },
    {
        id: 38,
        name: "Manu Rainforest",
        region: "Peru",
        continent: "South America",
        countries: ["Peru"],
        area: 17163,
        image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&q=80",
        type: "Tropical Rainforest",
        climate: { rainfall: "2000-4000mm", temperature: "24-27°C" },
        biodiversity: {
            animals: ["Jaguar", "Giant Otter", "Tapir", "13 Monkey Species"],
            birds: ["Macaws", "Over 1000 bird species"],
            trees: ["Mahogany", "Ceiba", "Ficus"]
        },
        rivers: ["Manu River", "Madre de Dios River"],
        issues: ["Illegal gold mining", "Road construction threats"],
        coordinates: { lat: -11.8500, lng: -71.5000 }
    },
    {
        id: 39,
        name: "Transylvanian Forest",
        region: "Romania",
        continent: "Europe",
        countries: ["Romania"],
        area: 22000,
        image: "https://images.unsplash.com/photo-1476231682828-37e571bc172f?w=800&q=80",
        type: "Temperate Mixed Forest",
        climate: { rainfall: "600-1000mm", temperature: "-5 to 20°C" },
        biodiversity: {
            animals: ["Brown Bear", "Wolf", "Lynx", "Wild Boar"],
            birds: ["White Stork", "Golden Eagle"],
            trees: ["Beech", "Oak", "Spruce", "Fir"]
        },
        rivers: ["Olt River", "Mureș River"],
        issues: ["Illegal logging", "Development pressure"],
        coordinates: { lat: 46.0000, lng: 25.0000 }
    },
    {
        id: 40,
        name: "Cardamom Mountains Forest",
        region: "Cambodia",
        continent: "Asia",
        countries: ["Cambodia"],
        area: 20000,
        image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&q=80",
        type: "Tropical Rainforest",
        climate: { rainfall: "3000-4500mm", temperature: "24-28°C" },
        biodiversity: {
            animals: ["Asian Elephant", "Sun Bear", "Clouded Leopard", "Siamese Crocodile"],
            birds: ["Giant Ibis", "White-winged Duck"],
            trees: ["Dipterocarp", "Teak", "Rosewood"]
        },
        rivers: ["Cardamom River", "Areng River"],
        issues: ["Illegal logging", "Land grabbing", "Dam proposals"],
        coordinates: { lat: 11.7500, lng: 103.2500 }
    },
    {
        id: 41,
        name: "Fontainebleau Forest",
        region: "France",
        continent: "Europe",
        countries: ["France"],
        area: 280,
        image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&q=80",
        type: "Temperate Deciduous Forest",
        climate: { rainfall: "600-700mm", temperature: "6-16°C" },
        biodiversity: {
            animals: ["Wild Boar", "Roe Deer", "Red Fox", "Badger"],
            birds: ["Black Woodpecker", "Short-toed Treecreeper"],
            trees: ["Oak", "Beech", "Scots Pine", "Birch"]
        },
        rivers: ["Seine River (nearby)"],
        issues: ["Visitor pressure", "Climate change"],
        coordinates: { lat: 48.4167, lng: 2.7000 }
    },
    {
        id: 42,
        name: "Gondwana Rainforests",
        region: "Australia",
        continent: "Oceania",
        countries: ["Australia"],
        area: 3665,
        image: "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=800&q=80",
        type: "Subtropical Rainforest",
        climate: { rainfall: "1500-3000mm", temperature: "15-25°C" },
        biodiversity: {
            animals: ["Koala", "Platypus", "Albert's Lyrebird", "Rufous Scrub-bird"],
            birds: ["Paradise Riflebird", "Regent Bowerbird"],
            trees: ["Antarctic Beech", "Coachwood", "Hoop Pine"]
        },
        rivers: ["Clarence River", "Richmond River"],
        issues: ["Fire vulnerability", "Climate change"],
        coordinates: { lat: -28.5000, lng: 153.0000 }
    },
    {
        id: 43,
        name: "Periyar Forest",
        region: "Kerala, India",
        continent: "Asia",
        countries: ["India"],
        area: 925,
        image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80",
        type: "Tropical Evergreen Forest",
        climate: { rainfall: "2000-3000mm", temperature: "15-30°C" },
        biodiversity: {
            animals: ["Indian Elephant", "Bengal Tiger", "Sambar Deer", "Nilgiri Langur"],
            birds: ["Great Hornbill", "Malabar Grey Hornbill"],
            trees: ["Teak", "Sandalwood", "Rosewood"]
        },
        rivers: ["Periyar River"],
        issues: ["Human-wildlife conflict", "Tourism pressure"],
        coordinates: { lat: 9.4667, lng: 77.2333 }
    },
    {
        id: 44,
        name: "Yakutia Taiga",
        region: "Russia",
        continent: "Asia",
        countries: ["Russia"],
        area: 1600000,
        image: "https://images.unsplash.com/photo-1511497584788-876760111969?w=800&q=80",
        type: "Boreal Forest",
        climate: { rainfall: "200-400mm", temperature: "-60 to 30°C" },
        biodiversity: {
            animals: ["Siberian Tiger", "Amur Leopard", "Brown Bear", "Reindeer"],
            birds: ["Siberian Crane", "Steller's Sea Eagle"],
            trees: ["Larch", "Spruce", "Pine", "Birch"]
        },
        rivers: ["Lena River", "Yana River"],
        issues: ["Climate change (permafrost thawing)", "Mining"],
        coordinates: { lat: 64.0000, lng: 130.0000 }
    },
    {
        id: 45,
        name: "Danum Valley",
        region: "Sabah, Malaysia",
        continent: "Asia",
        countries: ["Malaysia"],
        area: 438,
        image: "https://images.unsplash.com/photo-1588392382834-a891154bca4d?w=800&q=80",
        type: "Tropical Lowland Rainforest",
        climate: { rainfall: "2700mm", temperature: "26-27°C" },
        biodiversity: {
            animals: ["Bornean Orangutan", "Clouded Leopard", "Pygmy Elephant", "Bornean Gibbon"],
            birds: ["Rhinoceros Hornbill", "Bornean Bristlehead"],
            trees: ["Dipterocarp", "Strangler Fig", "Mengaris"]
        },
        rivers: ["Segama River"],
        issues: ["Surrounding oil palm expansion"],
        coordinates: { lat: 4.9667, lng: 117.8000 }
    },
    {
        id: 46,
        name: "Dorrigo Rainforest",
        region: "New South Wales, Australia",
        continent: "Oceania",
        countries: ["Australia"],
        area: 119,
        image: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?w=800&q=80",
        type: "Subtropical Rainforest",
        climate: { rainfall: "2000mm", temperature: "12-22°C" },
        biodiversity: {
            animals: ["Lyrebird", "Pademelon", "Spotted-tail Quoll"],
            birds: ["Wompoo Fruit-dove", "Green Catbird"],
            trees: ["Coachwood", "Yellow Carabeen", "Antarctic Beech"]
        },
        rivers: ["Bellinger River"],
        issues: ["Fire risk", "Weed invasion"],
        coordinates: { lat: -30.3667, lng: 152.7333 }
    },
    {
        id: 47,
        name: "Hallerbos",
        region: "Belgium",
        continent: "Europe",
        countries: ["Belgium"],
        area: 5.5,
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
        type: "Temperate Deciduous Forest",
        climate: { rainfall: "800mm", temperature: "5-15°C" },
        biodiversity: {
            animals: ["Roe Deer", "Fox", "Rabbit"],
            birds: ["Woodpeckers", "Owls"],
            trees: ["Beech", "Oak", "Famous Bluebell carpet"]
        },
        rivers: ["Zoniën stream"],
        issues: ["Visitor pressure during bluebell season"],
        coordinates: { lat: 50.7333, lng: 4.2833 }
    },
    {
        id: 48,
        name: "Crocker Range Forest",
        region: "Sabah, Malaysia",
        continent: "Asia",
        countries: ["Malaysia"],
        area: 1399,
        image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80",
        type: "Montane Rainforest",
        climate: { rainfall: "2500-4000mm", temperature: "15-25°C" },
        biodiversity: {
            animals: ["Orangutan", "Proboscis Monkey", "Clouded Leopard"],
            birds: ["Whitehead's Trogon", "Mountain Serpent Eagle"],
            trees: ["Oak", "Chestnut", "Montane species"]
        },
        rivers: ["Papar River", "Kiulu River"],
        issues: ["Encroachment", "Road development"],
        coordinates: { lat: 5.8000, lng: 116.3000 }
    },
    {
        id: 49,
        name: "Kelp Forest",
        region: "California Coast, USA",
        continent: "North America",
        countries: ["United States"],
        area: 1000,
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
        type: "Marine Forest",
        climate: { rainfall: "N/A (underwater)", temperature: "10-18°C (water)" },
        biodiversity: {
            animals: ["Sea Otter", "Harbor Seal", "Garibaldi", "Sea Urchin"],
            birds: ["Pelicans", "Cormorants"],
            trees: ["Giant Kelp", "Bull Kelp", "Feather Boa Kelp"]
        },
        rivers: ["N/A (coastal marine)"],
        issues: ["Sea urchin overgrazing", "Ocean warming", "Pollution"],
        coordinates: { lat: 34.0000, lng: -119.5000 }
    },
    {
        id: 50,
        name: "Tongass-Chugach Region",
        region: "Alaska, USA",
        continent: "North America",
        countries: ["United States"],
        area: 93000,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
        type: "Temperate Rainforest",
        climate: { rainfall: "2000-5000mm", temperature: "-5 to 15°C" },
        biodiversity: {
            animals: ["Brown Bear", "Bald Eagle", "Salmon", "Sitka Deer"],
            birds: ["Bald Eagle", "Puffins", "Ravens"],
            trees: ["Sitka Spruce", "Western Hemlock", "Alaska Cedar"]
        },
        rivers: ["Copper River", "Alsek River"],
        issues: ["Climate change", "Salmon population decline"],
        coordinates: { lat: 60.0000, lng: -145.0000 }
    }
];
