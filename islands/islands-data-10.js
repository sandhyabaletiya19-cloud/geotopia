/* ========================================
   ISLANDS EXPLORER - DATA FILE 10
   Islands 91-100: Atlantic & Exotic Islands
======================================== */

const islandsData10 = [
    {
        id: 'madeira',
        name: 'Madeira',
        countries: [{ name: 'Portugal', code: 'PT' }],
        continent: 'Europe',
        ocean: 'Atlantic Ocean',
        islandType: 'volcanic',
        area: 741,
        population: 251060,
        highestPoint: { name: 'Pico Ruivo', elevation: 1862 },
        coordinates: [32.6669, -16.9241],
        image: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=800&h=600&fit=crop',
        climate: 'Subtropical',
        beaches: [
            { name: 'Calheta Beach', coordinates: [32.7167, -17.1667] },
            { name: 'Machico Beach', coordinates: [32.7167, -16.7667] },
            { name: 'Porto Santo Beach', coordinates: [33.0500, -16.3333] },
            { name: 'Prainha Beach', coordinates: [32.7333, -16.7000] },
            { name: 'Seixal Natural Pools', coordinates: [32.8167, -17.1167] }
        ],
        cities: [
            { name: 'Funchal', coordinates: [32.6669, -16.9241], population: 105795 },
            { name: 'Câmara de Lobos', coordinates: [32.6500, -16.9667], population: 18000 },
            { name: 'Machico', coordinates: [32.7167, -16.7667], population: 12000 },
            { name: 'Santa Cruz', coordinates: [32.6833, -16.7833], population: 10000 }
        ],
        attractions: ['Levada Walks', 'Pico Ruivo Hike', 'Monte Cable Car', 'Funchal Old Town', 'Cabo Girão Skywalk'],
        wildlife: ['Madeira Firecrest', 'Trocaz Pigeon', 'Madeiran Wall Lizard', 'Monk Seals', 'Dolphins'],
        economy: ['Tourism', 'Wine Production', 'Banana Cultivation', 'Embroidery', 'Fishing'],
        bestTimeToVisit: 'April-October'
    },
    {
        id: 'sao-miguel',
        name: 'São Miguel',
        countries: [{ name: 'Portugal', code: 'PT' }],
        continent: 'Europe',
        ocean: 'Atlantic Ocean',
        islandType: 'volcanic',
        area: 746,
        population: 137856,
        highestPoint: { name: 'Pico da Vara', elevation: 1103 },
        coordinates: [37.7833, -25.5833],
        image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800&h=600&fit=crop',
        climate: 'Oceanic',
        beaches: [
            { name: 'Praia de Santa Bárbara', coordinates: [37.7833, -25.7833] },
            { name: 'Praia do Fogo', coordinates: [37.7500, -25.6167] },
            { name: 'Praia de Água d\'Alto', coordinates: [37.7333, -25.5500] },
            { name: 'Mosteiros Beach', coordinates: [37.8833, -25.8167] }
        ],
        cities: [
            { name: 'Ponta Delgada', coordinates: [37.7394, -25.6687], population: 68809 },
            { name: 'Ribeira Grande', coordinates: [37.8167, -25.5167], population: 33000 },
            { name: 'Lagoa', coordinates: [37.7500, -25.5833], population: 14000 },
            { name: 'Vila Franca do Campo', coordinates: [37.7167, -25.4333], population: 11500 }
        ],
        attractions: ['Sete Cidades Lakes', 'Furnas Hot Springs', 'Lagoa do Fogo', 'Terra Nostra Gardens', 'Whale Watching'],
        wildlife: ['Azores Bullfinch', 'Cory\'s Shearwaters', 'Sperm Whales', 'Dolphins', 'Blue Sharks'],
        economy: ['Tourism', 'Dairy', 'Tea Production', 'Pineapple Cultivation', 'Fishing'],
        bestTimeToVisit: 'May-September'
    },
    {
        id: 'tenerife',
        name: 'Tenerife',
        countries: [{ name: 'Spain', code: 'ES' }],
        continent: 'Africa',
        ocean: 'Atlantic Ocean',
        islandType: 'volcanic',
        area: 2034,
        population: 966354,
        highestPoint: { name: 'Mount Teide', elevation: 3718 },
        coordinates: [28.2916, -16.6291],
        image: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800&h=600&fit=crop',
        climate: 'Subtropical',
        beaches: [
            { name: 'Playa de las Teresitas', coordinates: [28.5167, -16.1833] },
            { name: 'Playa del Duque', coordinates: [28.0833, -16.7333] },
            { name: 'Playa de las Américas', coordinates: [28.0500, -16.7167] },
            { name: 'Los Gigantes Beach', coordinates: [28.2500, -16.8500] },
            { name: 'El Médano Beach', coordinates: [28.0333, -16.5333] }
        ],
        cities: [
            { name: 'Santa Cruz de Tenerife', coordinates: [28.4699, -16.2549], population: 206965 },
            { name: 'San Cristóbal de La Laguna', coordinates: [28.4853, -16.3167], population: 158911 },
            { name: 'Arona', coordinates: [28.0833, -16.7333], population: 81216 },
            { name: 'Puerto de la Cruz', coordinates: [28.4167, -16.5500], population: 30468 }
        ],
        attractions: ['Mount Teide National Park', 'Loro Parque', 'Masca Valley', 'Siam Park', 'Anaga Rural Park'],
        wildlife: ['Canarian Lizard', 'Blue Chaffinch', 'Loggerhead Turtles', 'Pilot Whales', 'Bottlenose Dolphins'],
        economy: ['Tourism', 'Agriculture', 'Banana Production', 'Wine', 'Services'],
        bestTimeToVisit: 'Year-round'
    },
    {
        id: 'gran-canaria',
        name: 'Gran Canaria',
        countries: [{ name: 'Spain', code: 'ES' }],
        continent: 'Africa',
        ocean: 'Atlantic Ocean',
        islandType: 'volcanic',
        area: 1560,
        population: 855521,
        highestPoint: { name: 'Pico de las Nieves', elevation: 1949 },
        coordinates: [27.9534, -15.5848],
        image: 'https://images.unsplash.com/photo-1574788983135-226b3f9f0530?w=800&h=600&fit=crop',
        climate: 'Subtropical',
        beaches: [
            { name: 'Playa del Inglés', coordinates: [27.7500, -15.5667] },
            { name: 'Maspalomas Dunes', coordinates: [27.7333, -15.5833] },
            { name: 'Playa de Las Canteras', coordinates: [28.1333, -15.4333] },
            { name: 'Amadores Beach', coordinates: [27.7833, -15.7333] },
            { name: 'Anfi del Mar', coordinates: [27.7833, -15.7167] }
        ],
        cities: [
            { name: 'Las Palmas de Gran Canaria', coordinates: [28.0997, -15.4134], population: 378517 },
            { name: 'Telde', coordinates: [27.9833, -15.4167], population: 102164 },
            { name: 'Santa Lucía de Tirajana', coordinates: [27.9167, -15.5333], population: 73862 },
            { name: 'San Bartolomé de Tirajana', coordinates: [27.7500, -15.5667], population: 54442 }
        ],
        attractions: ['Maspalomas Dunes', 'Roque Nublo', 'Vegueta Historic Quarter', 'Palmitos Park', 'Cueva Pintada'],
        wildlife: ['Gran Canaria Giant Lizard', 'Canarian Egyptian Vulture', 'Houbara Bustard', 'Sea Turtles', 'Dolphins'],
        economy: ['Tourism', 'Agriculture', 'Commerce', 'Construction', 'Fishing'],
        bestTimeToVisit: 'Year-round'
    },
    {
        id: 'lanzarote',
        name: 'Lanzarote',
        countries: [{ name: 'Spain', code: 'ES' }],
        continent: 'Africa',
        ocean: 'Atlantic Ocean',
        islandType: 'volcanic',
        area: 845,
        population: 155812,
        highestPoint: { name: 'Peñas del Chache', elevation: 670 },
        coordinates: [29.0469, -13.6320],
        image: 'https://images.unsplash.com/photo-1585016495481-91613a3ab036?w=800&h=600&fit=crop',
        climate: 'Semi-arid',
        beaches: [
            { name: 'Papagayo Beaches', coordinates: [28.8500, -13.8000] },
            { name: 'Famara Beach', coordinates: [29.1167, -13.5500] },
            { name: 'Playa Blanca', coordinates: [28.8667, -13.8333] },
            { name: 'Playa Grande', coordinates: [28.9167, -13.6500] },
            { name: 'Caletón Blanco', coordinates: [29.2167, -13.4667] }
        ],
        cities: [
            { name: 'Arrecife', coordinates: [28.9630, -13.5477], population: 62973 },
            { name: 'Tías', coordinates: [28.9500, -13.6500], population: 20610 },
            { name: 'San Bartolomé', coordinates: [29.0000, -13.6167], population: 18700 },
            { name: 'Yaiza', coordinates: [28.9500, -13.7667], population: 16700 }
        ],
        attractions: ['Timanfaya National Park', 'Jameos del Agua', 'Cueva de los Verdes', 'César Manrique Foundation', 'La Geria Wine Region'],
        wildlife: ['Blind Albino Crabs', 'Houbara Bustard', 'Shearwaters', 'Angel Sharks', 'Sea Turtles'],
        economy: ['Tourism', 'Wine Production', 'Agriculture', 'Fishing', 'Desalination'],
        bestTimeToVisit: 'Year-round'
    },
    {
        id: 'fuerteventura',
        name: 'Fuerteventura',
        countries: [{ name: 'Spain', code: 'ES' }],
        continent: 'Africa',
        ocean: 'Atlantic Ocean',
        islandType: 'volcanic',
        area: 1659,
        population: 119732,
        highestPoint: { name: 'Pico de la Zarza', elevation: 807 },
        coordinates: [28.3587, -14.0537],
        image: 'https://images.unsplash.com/photo-1587134160474-cd3a1b5e0d42?w=800&h=600&fit=crop',
        climate: 'Semi-arid',
        beaches: [
            { name: 'Corralejo Dunes', coordinates: [28.7333, -13.8667] },
            { name: 'Sotavento Beach', coordinates: [28.2000, -14.2333] },
            { name: 'Cofete Beach', coordinates: [28.1000, -14.3833] },
            { name: 'El Cotillo Lagoons', coordinates: [28.6833, -14.0167] },
            { name: 'Playa de la Concha', coordinates: [28.7500, -13.8667] }
        ],
        cities: [
            { name: 'Puerto del Rosario', coordinates: [28.5000, -13.8667], population: 40753 },
            { name: 'Corralejo', coordinates: [28.7333, -13.8667], population: 14000 },
            { name: 'Costa Calma', coordinates: [28.1500, -14.2333], population: 5000 },
            { name: 'Morro Jable', coordinates: [28.0500, -14.3500], population: 8000 }
        ],
        attractions: ['Corralejo Natural Park', 'Betancuria', 'Oasis Park', 'Ajuy Caves', 'Windsurfing & Kitesurfing'],
        wildlife: ['Canarian Houbara Bustard', 'Egyptian Vultures', 'Barbary Ground Squirrels', 'Sea Turtles', 'Dolphins'],
        economy: ['Tourism', 'Goat Cheese Production', 'Aloe Vera', 'Fishing', 'Wind Energy'],
        bestTimeToVisit: 'Year-round'
    },
    {
        id: 'sal',
        name: 'Sal Island',
        countries: [{ name: 'Cape Verde', code: 'CV' }],
        continent: 'Africa',
        ocean: 'Atlantic Ocean',
        islandType: 'volcanic',
        area: 216,
        population: 36000,
        highestPoint: { name: 'Monte Grande', elevation: 406 },
        coordinates: [16.7500, -22.9333],
        image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=800&h=600&fit=crop',
        climate: 'Tropical Dry',
        beaches: [
            { name: 'Santa Maria Beach', coordinates: [16.5833, -22.9000] },
            { name: 'Ponta Preta Beach', coordinates: [16.5667, -22.9333] },
            { name: 'Kite Beach', coordinates: [16.5667, -22.9000] },
            { name: 'Shark Bay', coordinates: [16.6000, -22.8833] },
            { name: 'Buracona (Blue Eye)', coordinates: [16.7833, -22.9667] }
        ],
        cities: [
            { name: 'Santa Maria', coordinates: [16.5981, -22.9058], population: 17000 },
            { name: 'Espargos', coordinates: [16.7500, -22.9500], population: 8000 },
            { name: 'Palmeira', coordinates: [16.7667, -22.9833], population: 3000 }
        ],
        attractions: ['Pedra de Lume Salt Crater', 'Buracona Blue Eye', 'Shark Bay', 'Kitesurfing', 'Terra Boa Mirage'],
        wildlife: ['Loggerhead Turtles', 'Lemon Sharks', 'Nurse Sharks', 'Dolphins', 'Humpback Whales'],
        economy: ['Tourism', 'Salt Production', 'Fishing', 'Kitesurfing', 'Services'],
        bestTimeToVisit: 'November-June'
    },
    {
        id: 'pemba',
        name: 'Pemba Island',
        countries: [{ name: 'Tanzania', code: 'TZ' }],
        continent: 'Africa',
        ocean: 'Indian Ocean',
        islandType: 'continental',
        area: 988,
        population: 406848,
        highestPoint: { name: 'Central Plateau', elevation: 95 },
        coordinates: [-5.0333, 39.7333],
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop',
        climate: 'Tropical',
        beaches: [
            { name: 'Vumawimbi Beach', coordinates: [-4.9667, 39.7833] },
            { name: 'Misali Island Beach', coordinates: [-5.2500, 39.6333] },
            { name: 'Panga ya Watoro Beach', coordinates: [-5.0167, 39.7500] },
            { name: 'Kiuyu Beach', coordinates: [-4.9833, 39.8000] }
        ],
        cities: [
            { name: 'Chake-Chake', coordinates: [-5.2333, 39.7667], population: 26000 },
            { name: 'Wete', coordinates: [-5.0500, 39.7167], population: 12000 },
            { name: 'Mkoani', coordinates: [-5.3500, 39.6500], population: 8000 }
        ],
        attractions: ['Misali Island Marine Reserve', 'Ngezi Forest Reserve', 'Clove Plantations', 'Diving Sites', 'Spice Tours'],
        wildlife: ['Pemba Flying Fox', 'Pemba Scops Owl', 'Coconut Crabs', 'Sea Turtles', 'Whale Sharks'],
        economy: ['Clove Production', 'Fishing', 'Tourism', 'Agriculture', 'Seaweed Farming'],
        bestTimeToVisit: 'June-October, December-February'
    },
    {
        id: 'mafia-island',
        name: 'Mafia Island',
        countries: [{ name: 'Tanzania', code: 'TZ' }],
        continent: 'Africa',
        ocean: 'Indian Ocean',
        islandType: 'coral',
        area: 394,
        population: 46438,
        highestPoint: { name: 'Island Ridge', elevation: 73 },
        coordinates: [-7.9167, 39.8167],
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop',
        climate: 'Tropical',
        beaches: [
            { name: 'Chole Bay', coordinates: [-7.9000, 39.7833] },
            { name: 'Utende Beach', coordinates: [-7.9333, 39.8333] },
            { name: 'Ras Kisimani Beach', coordinates: [-7.9833, 39.8667] },
            { name: 'Bwejuu Beach', coordinates: [-7.8833, 39.8167] }
        ],
        cities: [
            { name: 'Kilindoni', coordinates: [-7.9167, 39.6667], population: 15000 },
            { name: 'Utende', coordinates: [-7.9333, 39.8333], population: 2000 },
            { name: 'Bweni', coordinates: [-7.8833, 39.8000], population: 1500 }
        ],
        attractions: ['Mafia Island Marine Park', 'Whale Shark Snorkeling', 'Chole Island Ruins', 'Diving Sites', 'Big Game Fishing'],
        wildlife: ['Whale Sharks', 'Green Sea Turtles', 'Hawksbill Turtles', 'Dolphins', 'Manta Rays'],
        economy: ['Fishing', 'Tourism', 'Coconut Production', 'Marine Conservation', 'Agriculture'],
        bestTimeToVisit: 'October-March (whale sharks)'
    },
    {
        id: 'socotra',
        name: 'Socotra',
        countries: [{ name: 'Yemen', code: 'YE' }],
        continent: 'Asia',
        ocean: 'Indian Ocean',
        islandType: 'continental',
        area: 3625,
        population: 60000,
        highestPoint: { name: 'Hajhir Mountains', elevation: 1503 },
        coordinates: [12.4634, 53.8237],
        image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&h=600&fit=crop',
        climate: 'Tropical Desert',
        beaches: [
            { name: 'Qalansiyah Beach', coordinates: [12.6833, 53.4833] },
            { name: 'Shoab Beach', coordinates: [12.6333, 53.4500] },
            { name: 'Detwah Lagoon', coordinates: [12.6500, 53.4333] },
            { name: 'Arher Beach', coordinates: [12.5333, 54.4833] },
            { name: 'Dihamri Beach', coordinates: [12.3833, 54.1667] }
        ],
        cities: [
            { name: 'Hadibo', coordinates: [12.6500, 54.0167], population: 8500 },
            { name: 'Qalansiyah', coordinates: [12.6833, 53.4833], population: 3400 },
            { name: 'Qadub', coordinates: [12.5833, 54.0500], population: 1500 }
        ],
        attractions: ['Dragon Blood Trees', 'Diksam Plateau', 'Hoq Cave', 'Detwah Lagoon', 'Endemic Flora'],
        wildlife: ['Dragon Blood Trees', 'Socotra Starling', 'Socotra Cormorant', 'Egyptian Vultures', 'Desert Rose (Bottle Trees)'],
        economy: ['Fishing', 'Date Palms', 'Animal Husbandry', 'Frankincense', 'Eco-tourism'],
        bestTimeToVisit: 'October-April'
    }
];

// Make data available globally
if (typeof window !== 'undefined') {
    window.islandsData10 = islandsData10;
}
