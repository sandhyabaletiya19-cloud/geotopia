/* ========================================
   ISLANDS EXPLORER - DATA FILE 9
   Islands 81-90: Indian Ocean & European Islands
======================================== */

const islandsData9 = [
    {
        id: 'havelock',
        name: 'Havelock Island (Swaraj Dweep)',
        countries: [{ name: 'India', code: 'IN' }],
        continent: 'Asia',
        ocean: 'Indian Ocean',
        islandType: 'continental',
        area: 113,
        population: 6000,
        highestPoint: { name: 'Central Hill', elevation: 120 },
        coordinates: [11.9667, 92.9833],
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop',
        climate: 'Tropical',
        beaches: [
            { name: 'Radhanagar Beach', coordinates: [11.9833, 92.9500] },
            { name: 'Elephant Beach', coordinates: [11.9667, 92.9333] },
            { name: 'Kalapathar Beach', coordinates: [11.9500, 93.0000] },
            { name: 'Vijaynagar Beach', coordinates: [11.9500, 92.9833] },
            { name: 'Govindnagar Beach', coordinates: [11.9833, 92.9833] }
        ],
        cities: [
            { name: 'Govindnagar', coordinates: [11.9833, 92.9833], population: 2500 },
            { name: 'Vijaynagar', coordinates: [11.9500, 92.9833], population: 1500 },
            { name: 'Shyamkund', coordinates: [11.9667, 92.9667], population: 1000 }
        ],
        attractions: ['Radhanagar Beach (Asia\'s Best)', 'Scuba Diving', 'Elephant Beach Snorkeling', 'Mangrove Kayaking', 'Bioluminescence'],
        wildlife: ['Andaman Wild Pigs', 'Saltwater Crocodiles', 'Sea Turtles', 'Dugongs', 'Nicobar Pigeons'],
        economy: ['Tourism', 'Fishing', 'Agriculture', 'Diving', 'Handicrafts'],
        bestTimeToVisit: 'October-May'
    },
    {
        id: 'agatti',
        name: 'Agatti Island',
        countries: [{ name: 'India', code: 'IN' }],
        continent: 'Asia',
        ocean: 'Indian Ocean',
        islandType: 'coral',
        area: 3.84,
        population: 8000,
        highestPoint: { name: 'Central Ridge', elevation: 6 },
        coordinates: [10.8667, 72.1833],
        image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&h=600&fit=crop',
        climate: 'Tropical',
        beaches: [
            { name: 'Agatti Beach', coordinates: [10.8667, 72.1833] },
            { name: 'Lagoon Beach', coordinates: [10.8600, 72.1900] },
            { name: 'Western Beach', coordinates: [10.8700, 72.1750] }
        ],
        cities: [
            { name: 'Agatti Village', coordinates: [10.8667, 72.1833], population: 8000 }
        ],
        attractions: ['Coral Reefs', 'Glass Bottom Boat Rides', 'Snorkeling Lagoon', 'Scuba Diving', 'Fishing Trips'],
        wildlife: ['Sea Turtles', 'Dolphins', 'Manta Rays', 'Parrotfish', 'Butterflyfish'],
        economy: ['Tourism', 'Coconut Production', 'Fishing', 'Coir Industry', 'Boat Building'],
        bestTimeToVisit: 'October-May'
    },
    {
        id: 'vaadhoo',
        name: 'Vaadhoo Island',
        countries: [{ name: 'Maldives', code: 'MV' }],
        continent: 'Asia',
        ocean: 'Indian Ocean',
        islandType: 'coral',
        area: 0.23,
        population: 500,
        highestPoint: { name: 'Island Center', elevation: 2 },
        coordinates: [0.1667, 72.9500],
        image: 'https://images.unsplash.com/photo-1540202404-a2f29016b523?w=800&h=600&fit=crop',
        climate: 'Tropical',
        beaches: [
            { name: 'Sea of Stars Beach', coordinates: [0.1667, 72.9500] },
            { name: 'Bioluminescent Beach', coordinates: [0.1650, 72.9520] },
            { name: 'Vaadhoo Beach', coordinates: [0.1680, 72.9480] }
        ],
        cities: [
            { name: 'Vaadhoo Village', coordinates: [0.1667, 72.9500], population: 500 }
        ],
        attractions: ['Bioluminescent Plankton', 'Sea of Stars', 'Night Swimming', 'Stargazing', 'Snorkeling'],
        wildlife: ['Bioluminescent Phytoplankton', 'Reef Fish', 'Sea Turtles', 'Dolphins', 'Hermit Crabs'],
        economy: ['Tourism', 'Fishing', 'Guesthouses', 'Photography Tours', 'Boat Services'],
        bestTimeToVisit: 'June-February (best bioluminescence)'
    },
    {
        id: 'faroe-islands',
        name: 'Faroe Islands',
        countries: [{ name: 'Denmark', code: 'DK' }],
        continent: 'Europe',
        ocean: 'Atlantic Ocean',
        islandType: 'volcanic',
        area: 1393,
        population: 54000,
        highestPoint: { name: 'Slættaratindur', elevation: 882 },
        coordinates: [62.0000, -7.0000],
        image: 'https://images.unsplash.com/photo-1509881527646-cb7de04df8e2?w=800&h=600&fit=crop',
        climate: 'Subarctic Oceanic',
        beaches: [
            { name: 'Tjørnuvík Beach', coordinates: [62.2833, -7.0833] },
            { name: 'Sørvágur Beach', coordinates: [62.0667, -7.3167] },
            { name: 'Sandoy Beaches', coordinates: [61.8333, -6.8333] }
        ],
        cities: [
            { name: 'Tórshavn', coordinates: [62.0097, -6.7716], population: 22000 },
            { name: 'Klaksvík', coordinates: [62.2264, -6.5890], population: 5000 },
            { name: 'Fuglafjørður', coordinates: [62.2439, -6.8139], population: 1600 },
            { name: 'Runavík', coordinates: [62.1167, -6.7167], population: 3700 }
        ],
        attractions: ['Múlafossur Waterfall', 'Lake Sørvágsvatn', 'Gásadalur Village', 'Mykines Island', 'Sea Stacks'],
        wildlife: ['Puffins', 'Sheep', 'Grey Seals', 'Pilot Whales', 'Northern Fulmars'],
        economy: ['Fishing', 'Aquaculture', 'Tourism', 'Sheep Farming', 'Wool Industry'],
        bestTimeToVisit: 'May-September'
    },
    {
        id: 'jersey',
        name: 'Jersey',
        countries: [{ name: 'United Kingdom', code: 'GB' }],
        continent: 'Europe',
        ocean: 'Atlantic Ocean',
        islandType: 'continental',
        area: 118,
        population: 108000,
        highestPoint: { name: 'Les Platons', elevation: 143 },
        coordinates: [49.2144, -2.1313],
        image: 'https://images.unsplash.com/photo-1568402102990-bc541580b59f?w=800&h=600&fit=crop',
        climate: 'Temperate Oceanic',
        beaches: [
            { name: 'St. Brelade\'s Bay', coordinates: [49.1833, -2.1667] },
            { name: 'Plemont Beach', coordinates: [49.2500, -2.2333] },
            { name: 'St. Ouen\'s Bay', coordinates: [49.2167, -2.2333] },
            { name: 'Beauport Bay', coordinates: [49.1833, -2.1333] },
            { name: 'Grève de Lecq', coordinates: [49.2500, -2.2000] }
        ],
        cities: [
            { name: 'St. Helier', coordinates: [49.1858, -2.1097], population: 37540 },
            { name: 'St. Brelade', coordinates: [49.1833, -2.1667], population: 10500 },
            { name: 'Gorey', coordinates: [49.1992, -2.0131], population: 3500 },
            { name: 'St. Aubin', coordinates: [49.1892, -2.1653], population: 2000 }
        ],
        attractions: ['Mont Orgueil Castle', 'Jersey War Tunnels', 'Durrell Wildlife Park', 'Elizabeth Castle', 'La Hougue Bie'],
        wildlife: ['Jersey Cattle', 'Red Squirrels', 'Puffins', 'Basking Sharks', 'Grey Seals'],
        economy: ['Finance', 'Tourism', 'Agriculture', 'Dairy', 'E-commerce'],
        bestTimeToVisit: 'May-September'
    },
    {
        id: 'isle-of-man',
        name: 'Isle of Man',
        countries: [{ name: 'United Kingdom', code: 'GB' }],
        continent: 'Europe',
        ocean: 'Atlantic Ocean',
        islandType: 'continental',
        area: 572,
        population: 84287,
        highestPoint: { name: 'Snaefell', elevation: 621 },
        coordinates: [54.2361, -4.5481],
        image: 'https://images.unsplash.com/photo-1590071089561-9df71f8a63dc?w=800&h=600&fit=crop',
        climate: 'Temperate Oceanic',
        beaches: [
            { name: 'Port Erin Beach', coordinates: [54.0833, -4.7667] },
            { name: 'Ramsey Beach', coordinates: [54.3167, -4.3833] },
            { name: 'Peel Beach', coordinates: [54.2167, -4.6833] },
            { name: 'Laxey Beach', coordinates: [54.2333, -4.4000] }
        ],
        cities: [
            { name: 'Douglas', coordinates: [54.1500, -4.4819], population: 27938 },
            { name: 'Onchan', coordinates: [54.1722, -4.4500], population: 9172 },
            { name: 'Ramsey', coordinates: [54.3167, -4.3833], population: 7309 },
            { name: 'Peel', coordinates: [54.2167, -4.6833], population: 5091 }
        ],
        attractions: ['TT Motorcycle Races', 'Laxey Wheel', 'Calf of Man', 'Castle Rushen', 'Steam Railway'],
        wildlife: ['Manx Loaghtan Sheep', 'Basking Sharks', 'Manx Shearwaters', 'Grey Seals', 'Wallabies'],
        economy: ['Finance', 'E-gaming', 'Tourism', 'Manufacturing', 'Film Industry'],
        bestTimeToVisit: 'May-September (June for TT Races)'
    },
    {
        id: 'malta',
        name: 'Malta',
        countries: [{ name: 'Malta', code: 'MT' }],
        continent: 'Europe',
        ocean: 'Mediterranean Sea',
        islandType: 'continental',
        area: 246,
        population: 514564,
        highestPoint: { name: 'Ta\' Dmejrek', elevation: 253 },
        coordinates: [35.8997, 14.5147],
        image: 'https://images.unsplash.com/photo-1555990538-1e74b8a79e4c?w=800&h=600&fit=crop',
        climate: 'Mediterranean',
        beaches: [
            { name: 'Golden Bay', coordinates: [35.9333, 14.3500] },
            { name: 'Mellieha Bay', coordinates: [35.9667, 14.3667] },
            { name: 'Blue Lagoon (Comino)', coordinates: [36.0167, 14.3333] },
            { name: 'St. Peter\'s Pool', coordinates: [35.8333, 14.5500] },
            { name: 'Paradise Bay', coordinates: [35.9833, 14.3500] }
        ],
        cities: [
            { name: 'Valletta', coordinates: [35.8997, 14.5147], population: 5827 },
            { name: 'Birkirkara', coordinates: [35.8969, 14.4611], population: 24356 },
            { name: 'Sliema', coordinates: [35.9125, 14.5028], population: 17000 },
            { name: 'St. Julian\'s', coordinates: [35.9181, 14.4897], population: 8500 },
            { name: 'Mdina', coordinates: [35.8856, 14.4028], population: 300 }
        ],
        attractions: ['Valletta Old City', 'Megalithic Temples', 'Blue Grotto', 'Mdina', 'Three Cities'],
        wildlife: ['Maltese Freshwater Crab', 'Mediterranean Chameleon', 'Blue Rock Thrush', 'Dolphins', 'Loggerhead Turtles'],
        economy: ['Tourism', 'iGaming', 'Financial Services', 'Film Production', 'Manufacturing'],
        bestTimeToVisit: 'April-June, September-November'
    },
    {
        id: 'gozo',
        name: 'Gozo',
        countries: [{ name: 'Malta', code: 'MT' }],
        continent: 'Europe',
        ocean: 'Mediterranean Sea',
        islandType: 'continental',
        area: 67,
        population: 37342,
        highestPoint: { name: 'Ta\' Dbieġi', elevation: 190 },
        coordinates: [36.0444, 14.2511],
        image: 'https://images.unsplash.com/photo-1584483766114-2cea6facdf57?w=800&h=600&fit=crop',
        climate: 'Mediterranean',
        beaches: [
            { name: 'Ramla Bay', coordinates: [36.0667, 14.2833] },
            { name: 'San Blas Bay', coordinates: [36.0583, 14.2917] },
            { name: 'Xlendi Bay', coordinates: [36.0333, 14.2167] },
            { name: 'Marsalforn Bay', coordinates: [36.0750, 14.2583] },
            { name: 'Dwejra (Inland Sea)', coordinates: [36.0500, 14.1833] }
        ],
        cities: [
            { name: 'Victoria (Rabat)', coordinates: [36.0444, 14.2397], population: 6901 },
            { name: 'Marsalforn', coordinates: [36.0750, 14.2583], population: 800 },
            { name: 'Xlendi', coordinates: [36.0333, 14.2167], population: 400 },
            { name: 'Nadur', coordinates: [36.0417, 14.2917], population: 4400 }
        ],
        attractions: ['Citadella', 'Ġgantija Temples', 'Dwejra', 'Ta\' Pinu Basilica', 'Calypso\'s Cave'],
        wildlife: ['Maltese Wall Lizard', 'Painted Frog', 'Mediterranean Monk Seal', 'Osprey', 'Honey Buzzards'],
        economy: ['Tourism', 'Agriculture', 'Fishing', 'Handicrafts', 'Wine Production'],
        bestTimeToVisit: 'April-June, September-November'
    },
    {
        id: 'rhodes',
        name: 'Rhodes',
        countries: [{ name: 'Greece', code: 'GR' }],
        continent: 'Europe',
        ocean: 'Mediterranean Sea',
        islandType: 'continental',
        area: 1401,
        population: 115490,
        highestPoint: { name: 'Mount Attavyros', elevation: 1216 },
        coordinates: [36.4346, 28.2176],
        image: 'https://images.unsplash.com/photo-1586861203927-800a5acdcc4d?w=800&h=600&fit=crop',
        climate: 'Mediterranean',
        beaches: [
            { name: 'Lindos Beach', coordinates: [36.0833, 28.0833] },
            { name: 'Tsambika Beach', coordinates: [36.2333, 28.1500] },
            { name: 'Anthony Quinn Bay', coordinates: [36.3333, 28.2167] },
            { name: 'Faliraki Beach', coordinates: [36.3500, 28.2000] },
            { name: 'Prasonisi Beach', coordinates: [35.8833, 27.7667] }
        ],
        cities: [
            { name: 'Rhodes City', coordinates: [36.4346, 28.2176], population: 50636 },
            { name: 'Lindos', coordinates: [36.0903, 28.0856], population: 1100 },
            { name: 'Faliraki', coordinates: [36.3500, 28.2000], population: 4000 },
            { name: 'Ialyssos', coordinates: [36.4167, 28.1500], population: 12000 }
        ],
        attractions: ['Rhodes Old Town', 'Palace of the Grand Master', 'Lindos Acropolis', 'Valley of Butterflies', 'Ancient Kamiros'],
        wildlife: ['Fallow Deer', 'Jersey Tiger Moths', 'Mediterranean Monk Seals', 'Caretta Caretta Turtles', 'Peregrine Falcons'],
        economy: ['Tourism', 'Agriculture', 'Fishing', 'Wine Production', 'Olive Oil'],
        bestTimeToVisit: 'April-October'
    },
    {
        id: 'corfu',
        name: 'Corfu',
        countries: [{ name: 'Greece', code: 'GR' }],
        continent: 'Europe',
        ocean: 'Mediterranean Sea',
        islandType: 'continental',
        area: 610,
        population: 101113,
        highestPoint: { name: 'Mount Pantokrator', elevation: 906 },
        coordinates: [39.6243, 19.9217],
        image: 'https://images.unsplash.com/photo-1561629625-edcd73a5f29f?w=800&h=600&fit=crop',
        climate: 'Mediterranean',
        beaches: [
            { name: 'Paleokastritsa Beach', coordinates: [39.6833, 19.7000] },
            { name: 'Glyfada Beach', coordinates: [39.6333, 19.7500] },
            { name: 'Sidari Beach', coordinates: [39.7833, 19.7000] },
            { name: 'Agios Gordios Beach', coordinates: [39.5667, 19.7833] },
            { name: 'Canal d\'Amour', coordinates: [39.7833, 19.7000] }
        ],
        cities: [
            { name: 'Corfu Town (Kerkyra)', coordinates: [39.6243, 19.9217], population: 32095 },
            { name: 'Sidari', coordinates: [39.7833, 19.7000], population: 1500 },
            { name: 'Kassiopi', coordinates: [39.7833, 19.9167], population: 1200 },
            { name: 'Paleokastritsa', coordinates: [39.6833, 19.7000], population: 1000 }
        ],
        attractions: ['Corfu Old Town UNESCO', 'Achilleion Palace', 'Paleokastritsa Monastery', 'Mouse Island', 'Old Fortress'],
        wildlife: ['Mediterranean Monk Seals', 'Loggerhead Turtles', 'Golden Jackals', 'Corfu Lily', 'Kingfishers'],
        economy: ['Tourism', 'Olive Oil Production', 'Kumquat Products', 'Agriculture', 'Fishing'],
        bestTimeToVisit: 'May-October'
    }
];

// Make data available globally
if (typeof window !== 'undefined') {
    window.islandsData9 = islandsData9;
}
