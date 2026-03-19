/* =====================================================
   FORESTS DATA - Part 2 (Forests 11-20)
   ===================================================== */

const forestsData2 = [
    {
        id: 11,
        name: "Great Bear Rainforest",
        region: "British Columbia, Canada",
        continent: "North America",
        countries: ["Canada"],
        area: 64000,
        image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=80",
        type: "Temperate Rainforest",
        climate: {
            rainfall: "3000-4500mm annually",
            temperature: "5-15°C average",
            humidity: "85-95%"
        },
        biodiversity: {
            animals: ["Spirit Bear (Kermode Bear)", "Grizzly Bear", "Wolf", "Salmon", "Sea Otter"],
            birds: ["Bald Eagle", "Raven", "Great Blue Heron"],
            trees: ["Western Red Cedar", "Sitka Spruce", "Hemlock"]
        },
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
        climate: {
            rainfall: "2500-4000mm annually",
            temperature: "14-21°C average",
            humidity: "100% often"
        },
        biodiversity: {
            animals: ["Resplendent Quetzal", "Three-wattled Bellbird", "Jaguar", "Ocelot"],
            birds: ["Quetzal", "Bellbird", "Hummingbirds"],
            trees: ["Cloud forest trees", "Giant ferns", "Bromeliads"]
        },
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
        climate: {
            rainfall: "600-700mm annually",
            temperature: "-5 to 18°C average",
            humidity: "70-85%"
        },
        biodiversity: {
            animals: ["European Bison", "Wolf", "Lynx", "Wild Boar", "Red Deer"],
            birds: ["White-backed Woodpecker", "Eagle Owl"],
            trees: ["Oak", "Hornbeam", "Lime", "Spruce"]
        },
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
        climate: {
            rainfall: "3000-6000mm annually",
            temperature: "24-27°C average",
            humidity: "80-95%"
        },
        biodiversity: {
            animals: ["Sri Lankan Leopard", "Purple-faced Langur", "Giant Squirrel"],
            birds: ["Sri Lanka Blue Magpie", "Green-billed Coucal"],
            trees: ["Dipterocarpus", "Shorea", "Mesua"]
        },
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
        climate: {
            rainfall: "2000-4000mm annually",
            temperature: "24-28°C average",
            humidity: "80-90%"
        },
        biodiversity: {
            animals: ["Tree Kangaroo", "Cassowary", "Echidna", "Cuscus"],
            birds: ["Birds of Paradise", "Crown Pigeon"],
            trees: ["Various tropical hardwoods", "Sago palm"]
        },
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
        type: "Temperate/Subtropical Forest",
        climate: {
            rainfall: "4000-10000mm annually",
            temperature: "15-25°C average",
            humidity: "Very high"
        },
        biodiversity: {
            animals: ["Yakushima Macaque", "Yakushima Deer", "Loggerhead Turtle"],
            birds: ["Japanese Robin", "Various forest birds"],
            trees: ["Yakusugi Cedars (1000+ years)", "Rhododendron", "Camelia"]
        },
        coordinates: { lat: 30.3500, lng: 130.5000 }
    },
    {
        id: 17,
        name: "Atlantic Forest (Mata Atlântica)",
        region: "Brazil, Argentina, Paraguay",
        continent: "South America",
        countries: ["Brazil", "Argentina", "Paraguay"],
        area: 150000,
        image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&q=80",
        type: "Tropical/Subtropical Forest",
        climate: {
            rainfall: "1000-4000mm annually",
            temperature: "17-24°C average",
            humidity: "70-90%"
        },
        biodiversity: {
            animals: ["Golden Lion Tamarin", "Jaguar", "Maned Wolf", "Black Lion Tamarin"],
            birds: ["Red-tailed Amazon", "Seven-colored Tanager"],
            trees: ["Brazilian Rosewood", "Ironwood", "Palmito"]
        },
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
        climate: {
            rainfall: "1500-3000mm annually",
            temperature: "10-20°C average",
            humidity: "High, fog-dependent"
        },
        biodiversity: {
            animals: ["Roosevelt Elk", "Black Bear", "Mountain Lion", "Spotted Owl"],
            birds: ["Marbled Murrelet", "Northern Spotted Owl"],
            trees: ["Coast Redwood (tallest trees)", "Douglas Fir", "Tanoak"]
        },
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
        climate: {
            rainfall: "1500-2500mm annually",
            temperature: "8-16°C average",
            humidity: "80-95%"
        },
        biodiversity: {
            animals: ["Tasmanian Devil", "Platypus", "Wombat", "Quoll"],
            birds: ["Wedge-tailed Eagle", "Orange-bellied Parrot"],
            trees: ["Huon Pine", "Myrtle Beech", "Sassafras"]
        },
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
        type: "Tropical Rainforest/Montane Forest",
        climate: {
            rainfall: "2000-8000mm annually",
            temperature: "15-30°C average",
            humidity: "75-95%"
        },
        biodiversity: {
            animals: ["Indian Elephant", "Bengal Tiger", "Lion-tailed Macaque", "Nilgiri Tahr"],
            birds: ["Great Hornbill", "Malabar Trogon"],
            trees: ["Shola grasslands", "Evergreen species", "Teak"]
        },
        coordinates: { lat: 11.0000, lng: 76.0000 }
    }
];
