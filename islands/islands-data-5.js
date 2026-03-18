/* ========================================
   ISLANDS EXPLORER - DATA FILE 5
   Islands 41-50: Tropical & Mediterranean Gems
======================================== */

const islandsData5 = [
    {
        id: 'phuket',
        name: 'Phuket',
        countries: [{ name: 'Thailand', code: 'TH' }],
        continent: 'Asia',
        ocean: 'Indian Ocean',
        islandType: 'continental',
        area: 576,
        population: 416582,
        highestPoint: { name: 'Mai Thao Sip Song', elevation: 529 },
        coordinates: [7.9519, 98.3381],
        image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800&h=600&fit=crop',
        climate: 'Tropical',
        beaches: [
            { name: 'Patong Beach', coordinates: [7.8967, 98.2961] },
            { name: 'Kata Beach', coordinates: [7.8206, 98.2978] },
            { name: 'Karon Beach', coordinates: [7.8467, 98.2944] },
            { name: 'Freedom Beach', coordinates: [7.8750, 98.2722] },
            { name: 'Nai Harn Beach', coordinates: [7.7683, 98.3042] }
        ],
        cities: [
            { name: 'Phuket Town', coordinates: [7.8804, 98.3923], population: 75573 },
            { name: 'Patong', coordinates: [7.8967, 98.2961], population: 30000 },
            { name: 'Kata', coordinates: [7.8206, 98.2978], population: 10000 },
            { name: 'Rawai', coordinates: [7.7778, 98.3256], population: 15000 }
        ],
        attractions: ['Big Buddha', 'Phi Phi Islands', 'Old Phuket Town', 'Phang Nga Bay', 'Wat Chalong'],
        wildlife: ['Gibbons', 'Macaques', 'Sea Turtles', 'Hornbills', 'Flying Foxes'],
        economy: ['Tourism', 'Fishing', 'Rubber', 'Coconut Products', 'Pearl Farming'],
        bestTimeToVisit: 'November-April'
    },
    {
        id: 'langkawi',
        name: 'Langkawi',
        countries: [{ name: 'Malaysia', code: 'MY' }],
        continent: 'Asia',
        ocean: 'Indian Ocean',
        islandType: 'continental',
        area: 478,
        population: 99000,
        highestPoint: { name: 'Gunung Raya', elevation: 881 },
        coordinates: [6.3500, 99.8000],
        image: 'https://images.unsplash.com/photo-1596422846543-75c11a32647f?w=800&h=600&fit=crop',
        climate: 'Tropical',
        beaches: [
            { name: 'Pantai Cenang', coordinates: [6.2833, 99.7167] },
            { name: 'Pantai Tengah', coordinates: [6.2667, 99.7167] },
            { name: 'Tanjung Rhu Beach', coordinates: [6.4333, 99.8500] },
            { name: 'Datai Bay', coordinates: [6.4333, 99.6833] }
        ],
        cities: [
            { name: 'Kuah', coordinates: [6.3167, 99.8500], population: 30000 },
            { name: 'Pantai Cenang', coordinates: [6.2833, 99.7167], population: 5000 },
            { name: 'Padang Matsirat', coordinates: [6.3500, 99.7333], population: 8000 }
        ],
        attractions: ['Sky Bridge', 'Cable Car', 'Kilim Geoforest Park', 'Eagle Square', 'Underwater World'],
        wildlife: ['Eagles', 'Hornbills', 'Macaques', 'Monitor Lizards', 'Flying Lemurs'],
        economy: ['Tourism', 'Duty-Free Shopping', 'Agriculture', 'Fishing', 'Handicrafts'],
        bestTimeToVisit: 'November-April'
    },
    {
        id: 'palawan',
        name: 'Palawan',
        countries: [{ name: 'Philippines', code: 'PH' }],
        continent: 'Asia',
        ocean: 'Pacific Ocean',
        islandType: 'continental',
        area: 14649,
        population: 939594,
        highestPoint: { name: 'Mount Mantalingahan', elevation: 2086 },
        coordinates: [9.8349, 118.7384],
        image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=800&h=600&fit=crop',
        climate: 'Tropical',
        beaches: [
            { name: 'El Nido Beaches', coordinates: [11.1833, 119.3833] },
            { name: 'Nacpan Beach', coordinates: [11.2667, 119.4333] },
            { name: 'Port Barton Beach', coordinates: [10.4833, 119.1500] },
            { name: 'Long Beach San Vicente', coordinates: [10.5500, 119.1833] }
        ],
        cities: [
            { name: 'Puerto Princesa', coordinates: [9.7392, 118.7353], population: 307079 },
            { name: 'El Nido', coordinates: [11.1833, 119.3833], population: 41606 },
            { name: 'Coron', coordinates: [11.9981, 120.2042], population: 51803 },
            { name: 'San Vicente', coordinates: [10.5000, 119.2667], population: 40000 }
        ],
        attractions: ['Underground River', 'El Nido Island Hopping', 'Coron Shipwrecks', 'Kayangan Lake', 'Tubbataha Reef'],
        wildlife: ['Philippine Mouse-deer', 'Palawan Peacock-Pheasant', 'Philippine Crocodile', 'Dugongs', 'Sea Turtles'],
        economy: ['Tourism', 'Agriculture', 'Fishing', 'Mining', 'Forestry'],
        bestTimeToVisit: 'November-May'
    },
    {
        id: 'boracay',
        name: 'Boracay',
        countries: [{ name: 'Philippines', code: 'PH' }],
        continent: 'Asia',
        ocean: 'Pacific Ocean',
        islandType: 'coral',
        area: 10,
        population: 37802,
        highestPoint: { name: 'Mount Luho', elevation: 100 },
        coordinates: [11.9674, 121.9248],
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop',
        climate: 'Tropical',
        beaches: [
            { name: 'White Beach', coordinates: [11.9667, 121.9167] },
            { name: 'Puka Shell Beach', coordinates: [11.9833, 121.9167] },
            { name: 'Bulabog Beach', coordinates: [11.9667, 121.9333] },
            { name: 'Diniwid Beach', coordinates: [11.9833, 121.9167] }
        ],
        cities: [
            { name: 'Station 1', coordinates: [11.9750, 121.9167], population: 5000 },
            { name: 'Station 2', coordinates: [11.9667, 121.9167], population: 15000 },
            { name: 'Station 3', coordinates: [11.9583, 121.9167], population: 8000 }
        ],
        attractions: ['White Beach', 'Mount Luho Viewpoint', 'Ariel\'s Point', 'Parasailing', 'Island Hopping'],
        wildlife: ['Flying Foxes', 'Monitor Lizards', 'Tropical Fish', 'Sea Turtles', 'Herons'],
        economy: ['Tourism', 'Hospitality', 'Water Sports', 'Restaurants', 'Retail'],
        bestTimeToVisit: 'November-May'
    },
    {
        id: 'koh-samui',
        name: 'Koh Samui',
        countries: [{ name: 'Thailand', code: 'TH' }],
        continent: 'Asia',
        ocean: 'Pacific Ocean',
        islandType: 'continental',
        area: 228,
        population: 63000,
        highestPoint: { name: 'Khao Pom', elevation: 635 },
        coordinates: [9.5120, 100.0136],
        image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&h=600&fit=crop',
        climate: 'Tropical',
        beaches: [
            { name: 'Chaweng Beach', coordinates: [9.5333, 100.0667] },
            { name: 'Lamai Beach', coordinates: [9.4667, 100.0500] },
            { name: 'Bophut Beach', coordinates: [9.5500, 100.0000] },
            { name: 'Maenam Beach', coordinates: [9.5667, 99.9833] }
        ],
        cities: [
            { name: 'Chaweng', coordinates: [9.5333, 100.0667], population: 8000 },
            { name: 'Lamai', coordinates: [9.4667, 100.0500], population: 5000 },
            { name: 'Nathon', coordinates: [9.5333, 99.9500], population: 10000 },
            { name: 'Bophut', coordinates: [9.5500, 100.0000], population: 4000 }
        ],
        attractions: ['Big Buddha Temple', 'Ang Thong Marine Park', 'Na Muang Waterfalls', 'Fisherman\'s Village', 'Secret Buddha Garden'],
        wildlife: ['Macaques', 'Monitor Lizards', 'Hornbills', 'Sea Eagles', 'Civet Cats'],
        economy: ['Tourism', 'Coconut Production', 'Fishing', 'Rubber', 'Fruit Cultivation'],
        bestTimeToVisit: 'December-April'
    },
    {
        id: 'santorini',
        name: 'Santorini',
        countries: [{ name: 'Greece', code: 'GR' }],
        continent: 'Europe',
        ocean: 'Mediterranean Sea',
        islandType: 'volcanic',
        area: 76,
        population: 15550,
        highestPoint: { name: 'Mount Profitis Ilias', elevation: 567 },
        coordinates: [36.3932, 25.4615],
        image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop',
        climate: 'Mediterranean',
        beaches: [
            { name: 'Red Beach', coordinates: [36.3500, 25.3833] },
            { name: 'Perissa Black Beach', coordinates: [36.3500, 25.4833] },
            { name: 'Kamari Beach', coordinates: [36.3667, 25.4833] },
            { name: 'Vlychada Beach', coordinates: [36.3333, 25.4333] }
        ],
        cities: [
            { name: 'Fira', coordinates: [36.4167, 25.4333], population: 3000 },
            { name: 'Oia', coordinates: [36.4617, 25.3756], population: 1500 },
            { name: 'Kamari', coordinates: [36.3667, 25.4833], population: 1200 },
            { name: 'Perissa', coordinates: [36.3500, 25.4833], population: 1000 }
        ],
        attractions: ['Oia Sunset', 'Caldera Views', 'Akrotiri Archaeological Site', 'Wine Tasting', 'Volcanic Hot Springs'],
        wildlife: ['Rabbits', 'Hedgehogs', 'Falcons', 'Dolphins', 'Sea Turtles'],
        economy: ['Tourism', 'Wine Production', 'Agriculture', 'Fishing', 'Handicrafts'],
        bestTimeToVisit: 'April-October'
    },
    {
        id: 'mykonos',
        name: 'Mykonos',
        countries: [{ name: 'Greece', code: 'GR' }],
        continent: 'Europe',
        ocean: 'Mediterranean Sea',
        islandType: 'continental',
        area: 85,
        population: 10134,
        highestPoint: { name: 'Profitis Ilias Anomeritis', elevation: 341 },
        coordinates: [37.4467, 25.3289],
        image: 'https://images.unsplash.com/photo-1601581875039-e899893d520c?w=800&h=600&fit=crop',
        climate: 'Mediterranean',
        beaches: [
            { name: 'Paradise Beach', coordinates: [37.4000, 25.3500] },
            { name: 'Super Paradise Beach', coordinates: [37.4000, 25.3667] },
            { name: 'Psarou Beach', coordinates: [37.4167, 25.3333] },
            { name: 'Elia Beach', coordinates: [37.4000, 25.3833] }
        ],
        cities: [
            { name: 'Mykonos Town (Chora)', coordinates: [37.4467, 25.3289], population: 6500 },
            { name: 'Ano Mera', coordinates: [37.4500, 25.4000], population: 1500 },
            { name: 'Ornos', coordinates: [37.4167, 25.3333], population: 800 }
        ],
        attractions: ['Little Venice', 'Windmills', 'Delos Island', 'Paraportiani Church', 'Beach Clubs'],
        wildlife: ['Pelicans', 'Seagulls', 'Rabbits', 'Mediterranean Monk Seals', 'Dolphins'],
        economy: ['Tourism', 'Nightlife Industry', 'Fishing', 'Agriculture', 'Retail'],
        bestTimeToVisit: 'May-October'
    },
    {
        id: 'capri',
        name: 'Capri',
        countries: [{ name: 'Italy', code: 'IT' }],
        continent: 'Europe',
        ocean: 'Mediterranean Sea',
        islandType: 'continental',
        area: 10,
        population: 14231,
        highestPoint: { name: 'Monte Solaro', elevation: 589 },
        coordinates: [40.5533, 14.2225],
        image: 'https://images.unsplash.com/photo-1534008897995-27a23e859048?w=800&h=600&fit=crop',
        climate: 'Mediterranean',
        beaches: [
            { name: 'Marina Piccola', coordinates: [40.5417, 14.2333] },
            { name: 'Marina Grande', coordinates: [40.5517, 14.2400] },
            { name: 'Bagni di Tiberio', coordinates: [40.5583, 14.2500] },
            { name: 'Faraglioni Rocks', coordinates: [40.5417, 14.2500] }
        ],
        cities: [
            { name: 'Capri Town', coordinates: [40.5500, 14.2333], population: 7348 },
            { name: 'Anacapri', coordinates: [40.5539, 14.2106], population: 6883 },
            { name: 'Marina Grande', coordinates: [40.5517, 14.2400], population: 500 }
        ],
        attractions: ['Blue Grotto', 'Faraglioni Rocks', 'Villa San Michele', 'Monte Solaro Chairlift', 'Gardens of Augustus'],
        wildlife: ['Blue Lizards', 'Seabirds', 'Mediterranean Seals', 'Dolphins', 'Butterflies'],
        economy: ['Tourism', 'Perfumery', 'Limoncello Production', 'Luxury Retail', 'Boating'],
        bestTimeToVisit: 'April-October'
    },
    {
        id: 'ibiza',
        name: 'Ibiza',
        countries: [{ name: 'Spain', code: 'ES' }],
        continent: 'Europe',
        ocean: 'Mediterranean Sea',
        islandType: 'continental',
        area: 572,
        population: 151827,
        highestPoint: { name: 'Sa Talaiassa', elevation: 475 },
        coordinates: [38.9067, 1.4206],
        image: 'https://images.unsplash.com/photo-1573455494060-c5595004fb6c?w=800&h=600&fit=crop',
        climate: 'Mediterranean',
        beaches: [
            { name: 'Playa d\'en Bossa', coordinates: [38.8667, 1.4167] },
            { name: 'Cala Comte', coordinates: [38.9500, 1.2167] },
            { name: 'Las Salinas Beach', coordinates: [38.8333, 1.3833] },
            { name: 'Cala Bassa', coordinates: [38.9667, 1.2500] },
            { name: 'Talamanca Beach', coordinates: [38.9167, 1.4500] }
        ],
        cities: [
            { name: 'Ibiza Town (Eivissa)', coordinates: [38.9067, 1.4206], population: 50401 },
            { name: 'Sant Antoni de Portmany', coordinates: [38.9833, 1.3000], population: 26306 },
            { name: 'Santa Eulària des Riu', coordinates: [38.9833, 1.5333], population: 38155 },
            { name: 'Sant Josep de sa Talaia', coordinates: [38.9167, 1.2833], population: 28315 }
        ],
        attractions: ['Dalt Vila (Old Town)', 'Es Vedrà', 'Hippy Markets', 'World-Famous Clubs', 'Sunset at Café del Mar'],
        wildlife: ['Ibiza Wall Lizard', 'Eleonora\'s Falcon', 'Flamingos', 'Dolphins', 'Mediterranean Shearwaters'],
        economy: ['Tourism', 'Nightlife', 'Real Estate', 'Agriculture', 'Salt Production'],
        bestTimeToVisit: 'May-October'
    },
    {
        id: 'mallorca',
        name: 'Mallorca',
        countries: [{ name: 'Spain', code: 'ES' }],
        continent: 'Europe',
        ocean: 'Mediterranean Sea',
        islandType: 'continental',
        area: 3640,
        population: 896038,
        highestPoint: { name: 'Puig Major', elevation: 1445 },
        coordinates: [39.6953, 3.0176],
        image: 'https://images.unsplash.com/photo-1562503542-2f9f59ef1993?w=800&h=600&fit=crop',
        climate: 'Mediterranean',
        beaches: [
            { name: 'Playa de Palma', coordinates: [39.5167, 2.7500] },
            { name: 'Cala Millor', coordinates: [39.5833, 3.3833] },
            { name: 'Es Trenc', coordinates: [39.3500, 2.9833] },
            { name: 'Cala d\'Or', coordinates: [39.3667, 3.2333] },
            { name: 'Port de Sóller', coordinates: [39.7833, 2.6833] }
        ],
        cities: [
            { name: 'Palma', coordinates: [39.5696, 2.6502], population: 416065 },
            { name: 'Calvià', coordinates: [39.5667, 2.5000], population: 51774 },
            { name: 'Manacor', coordinates: [39.5667, 3.2167], population: 44311 },
            { name: 'Llucmajor', coordinates: [39.4833, 2.8833], population: 38124 },
            { name: 'Sóller', coordinates: [39.7667, 2.7167], population: 14229 }
        ],
        attractions: ['Palma Cathedral', 'Serra de Tramuntana', 'Caves of Drach', 'Valldemossa', 'Cap de Formentor'],
        wildlife: ['Black Vultures', 'Eleonora\'s Falcon', 'Mallorcan Midwife Toad', 'Pine Martens', 'Dolphins'],
        economy: ['Tourism', 'Real Estate', 'Agriculture', 'Wine Production', 'Pearl Industry'],
        bestTimeToVisit: 'April-October'
    }
];

// Make data available globally
if (typeof window !== 'undefined') {
    window.islandsData5 = islandsData5;
}
