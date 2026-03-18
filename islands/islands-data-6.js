/* ========================================
   ISLANDS EXPLORER - DATA FILE 6
   Islands 51-60: Hawaiian & Tropical Paradise
======================================== */

const islandsData6 = [
    {
        id: 'maui',
        name: 'Maui',
        countries: [{ name: 'United States', code: 'US' }],
        continent: 'Oceania',
        ocean: 'Pacific Ocean',
        islandType: 'volcanic',
        area: 1883,
        population: 164221,
        highestPoint: { name: 'Haleakalā', elevation: 3055 },
        coordinates: [20.7984, -156.3319],
        image: 'https://images.unsplash.com/photo-1542259009477-d625272157b7?w=800&h=600&fit=crop',
        climate: 'Tropical',
        beaches: [
            { name: 'Kaanapali Beach', coordinates: [20.9333, -156.6833] },
            { name: 'Wailea Beach', coordinates: [20.6833, -156.4333] },
            { name: 'Napili Bay', coordinates: [20.9833, -156.6667] },
            { name: 'Big Beach (Makena)', coordinates: [20.6333, -156.4333] },
            { name: 'Ho\'okipa Beach', coordinates: [20.9333, -156.3500] }
        ],
        cities: [
            { name: 'Kahului', coordinates: [20.8947, -156.4700], population: 28363 },
            { name: 'Lahaina', coordinates: [20.8783, -156.6825], population: 12702 },
            { name: 'Kihei', coordinates: [20.7644, -156.4450], population: 22749 },
            { name: 'Wailuku', coordinates: [20.8911, -156.5047], population: 17697 }
        ],
        attractions: ['Haleakalā Sunrise', 'Road to Hana', 'Molokini Crater', 'Iao Valley', 'Whale Watching'],
        wildlife: ['Humpback Whales', 'Hawaiian Monk Seals', 'Green Sea Turtles', 'Nene Geese', 'Spinner Dolphins'],
        economy: ['Tourism', 'Agriculture', 'Real Estate', 'Retail', 'Construction'],
        bestTimeToVisit: 'April-May, September-November'
    },
    {
        id: 'oahu',
        name: 'Oahu',
        countries: [{ name: 'United States', code: 'US' }],
        continent: 'Oceania',
        ocean: 'Pacific Ocean',
        islandType: 'volcanic',
        area: 1545,
        population: 1016508,
        highestPoint: { name: 'Ka\'ala', elevation: 1227 },
        coordinates: [21.4389, -158.0001],
        image: 'https://images.unsplash.com/photo-1507876466758-bc54f384809c?w=800&h=600&fit=crop',
        climate: 'Tropical',
        beaches: [
            { name: 'Waikiki Beach', coordinates: [21.2766, -157.8278] },
            { name: 'Lanikai Beach', coordinates: [21.3917, -157.7133] },
            { name: 'North Shore Beaches', coordinates: [21.6417, -158.0583] },
            { name: 'Hanauma Bay', coordinates: [21.2692, -157.6939] },
            { name: 'Kailua Beach', coordinates: [21.4000, -157.7250] }
        ],
        cities: [
            { name: 'Honolulu', coordinates: [21.3069, -157.8583], population: 345064 },
            { name: 'Pearl City', coordinates: [21.4033, -157.9731], population: 47698 },
            { name: 'Kailua', coordinates: [21.4022, -157.7394], population: 40514 },
            { name: 'Kaneohe', coordinates: [21.4181, -157.8036], population: 34597 }
        ],
        attractions: ['Pearl Harbor', 'Diamond Head', 'Waikiki Beach', 'North Shore Surfing', 'Polynesian Cultural Center'],
        wildlife: ['Spinner Dolphins', 'Humpback Whales', 'Green Sea Turtles', 'Monk Seals', 'Tropical Birds'],
        economy: ['Tourism', 'Military', 'Government', 'Real Estate', 'Retail'],
        bestTimeToVisit: 'April-June, September-November'
    },
    {
        id: 'kauai',
        name: 'Kauai',
        countries: [{ name: 'United States', code: 'US' }],
        continent: 'Oceania',
        ocean: 'Pacific Ocean',
        islandType: 'volcanic',
        area: 1435,
        population: 72293,
        highestPoint: { name: 'Kawaikini', elevation: 1598 },
        coordinates: [22.0964, -159.5261],
        image: 'https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?w=800&h=600&fit=crop',
        climate: 'Tropical',
        beaches: [
            { name: 'Hanalei Bay', coordinates: [22.2083, -159.5000] },
            { name: 'Poipu Beach', coordinates: [21.8750, -159.4583] },
            { name: 'Tunnels Beach', coordinates: [22.2250, -159.5667] },
            { name: 'Anini Beach', coordinates: [22.2250, -159.4500] },
            { name: 'Ke\'e Beach', coordinates: [22.2250, -159.5833] }
        ],
        cities: [
            { name: 'Lihue', coordinates: [21.9811, -159.3711], population: 7834 },
            { name: 'Kapaa', coordinates: [22.0881, -159.3217], population: 11039 },
            { name: 'Poipu', coordinates: [21.8750, -159.4583], population: 3000 },
            { name: 'Princeville', coordinates: [22.2172, -159.4700], population: 2742 }
        ],
        attractions: ['Na Pali Coast', 'Waimea Canyon', 'Kalalau Trail', 'Wailua Falls', 'Fern Grotto'],
        wildlife: ['Hawaiian Monk Seals', 'Nene Geese', 'Green Sea Turtles', 'Laysan Albatross', 'Spinner Dolphins'],
        economy: ['Tourism', 'Agriculture', 'Film Industry', 'Coffee', 'Taro Farming'],
        bestTimeToVisit: 'April-June, September-November'
    },
    {
        id: 'galapagos-isabela',
        name: 'Isabela Island',
        countries: [{ name: 'Ecuador', code: 'EC' }],
        continent: 'South America',
        ocean: 'Pacific Ocean',
        islandType: 'volcanic',
        area: 4640,
        population: 2200,
        highestPoint: { name: 'Volcán Wolf', elevation: 1707 },
        coordinates: [-0.8333, -91.0833],
        image: 'https://images.unsplash.com/photo-1544979590-37e9b47eb705?w=800&h=600&fit=crop',
        climate: 'Tropical',
        beaches: [
            { name: 'Playa de la Estación', coordinates: [-0.9583, -90.9667] },
            { name: 'Concha de Perla', coordinates: [-0.9500, -90.9667] },
            { name: 'Playa del Amor', coordinates: [-0.9500, -90.9583] },
            { name: 'Puerto Villamil Beach', coordinates: [-0.9583, -90.9667] }
        ],
        cities: [
            { name: 'Puerto Villamil', coordinates: [-0.9575, -90.9653], population: 2200 }
        ],
        attractions: ['Los Túneles', 'Wall of Tears', 'Flamingo Lagoon', 'Sierra Negra Volcano', 'Concha de Perla Snorkeling'],
        wildlife: ['Galápagos Penguins', 'Blue-footed Boobies', 'Marine Iguanas', 'Galápagos Tortoises', 'Flightless Cormorants'],
        economy: ['Ecotourism', 'Fishing', 'Conservation', 'Research', 'Agriculture'],
        bestTimeToVisit: 'June-September, December-January'
    },
    {
        id: 'galapagos-santa-cruz',
        name: 'Santa Cruz Island',
        countries: [{ name: 'Ecuador', code: 'EC' }],
        continent: 'South America',
        ocean: 'Pacific Ocean',
        islandType: 'volcanic',
        area: 986,
        population: 15000,
        highestPoint: { name: 'Cerro Crocker', elevation: 864 },
        coordinates: [-0.6333, -90.3667],
        image: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800&h=600&fit=crop',
        climate: 'Tropical',
        beaches: [
            { name: 'Tortuga Bay', coordinates: [-0.7667, -90.3333] },
            { name: 'Playa de los Alemanes', coordinates: [-0.7500, -90.3083] },
            { name: 'Las Bachas Beach', coordinates: [-0.4833, -90.3500] },
            { name: 'Garrapatero Beach', coordinates: [-0.6833, -90.2333] }
        ],
        cities: [
            { name: 'Puerto Ayora', coordinates: [-0.7436, -90.3139], population: 12000 },
            { name: 'Bellavista', coordinates: [-0.7000, -90.3333], population: 2000 },
            { name: 'Santa Rosa', coordinates: [-0.6500, -90.3500], population: 800 }
        ],
        attractions: ['Charles Darwin Research Station', 'Tortuga Bay', 'Los Gemelos Craters', 'Lava Tunnels', 'Highland Tortoise Reserves'],
        wildlife: ['Giant Tortoises', 'Darwin\'s Finches', 'Sea Lions', 'Marine Iguanas', 'Frigatebirds'],
        economy: ['Tourism', 'Research', 'Conservation', 'Fishing', 'Services'],
        bestTimeToVisit: 'June-September, December-January'
    },
    {
        id: 'seychelles-mahe',
        name: 'Mahé',
        countries: [{ name: 'Seychelles', code: 'SC' }],
        continent: 'Africa',
        ocean: 'Indian Ocean',
        islandType: 'continental',
        area: 157,
        population: 80000,
        highestPoint: { name: 'Morne Seychellois', elevation: 905 },
        coordinates: [-4.6833, 55.4833],
        image: 'https://images.unsplash.com/photo-1589979481223-deb893043163?w=800&h=600&fit=crop',
        climate: 'Tropical',
        beaches: [
            { name: 'Anse Intendance', coordinates: [-4.7667, 55.4833] },
            { name: 'Beau Vallon Beach', coordinates: [-4.6000, 55.4333] },
            { name: 'Anse Soleil', coordinates: [-4.7500, 55.4667] },
            { name: 'Anse Royale', coordinates: [-4.7333, 55.5167] },
            { name: 'Anse Takamaka', coordinates: [-4.7667, 55.5000] }
        ],
        cities: [
            { name: 'Victoria', coordinates: [-4.6167, 55.4500], population: 26000 },
            { name: 'Beau Vallon', coordinates: [-4.6000, 55.4333], population: 4000 },
            { name: 'Anse Royale', coordinates: [-4.7333, 55.5167], population: 3000 }
        ],
        attractions: ['Morne Seychellois National Park', 'Victoria Market', 'Eden Island Marina', 'Tea Factory', 'Botanical Gardens'],
        wildlife: ['Seychelles Black Parrot', 'Giant Tortoises', 'Fruit Bats', 'Jellyfish Lake', 'Sea Turtles'],
        economy: ['Tourism', 'Fishing', 'Tuna Canning', 'Agriculture', 'Financial Services'],
        bestTimeToVisit: 'April-May, October-November'
    },
    {
        id: 'reunion',
        name: 'Réunion',
        countries: [{ name: 'France', code: 'FR' }],
        continent: 'Africa',
        ocean: 'Indian Ocean',
        islandType: 'volcanic',
        area: 2512,
        population: 859959,
        highestPoint: { name: 'Piton des Neiges', elevation: 3070 },
        coordinates: [-21.1151, 55.5364],
        image: 'https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?w=800&h=600&fit=crop',
        climate: 'Tropical',
        beaches: [
            { name: 'Boucan Canot Beach', coordinates: [-21.0167, 55.2333] },
            { name: 'L\'Hermitage Beach', coordinates: [-21.0667, 55.2333] },
            { name: 'Saint-Leu Beach', coordinates: [-21.1833, 55.2833] },
            { name: 'Plage de Grande Anse', coordinates: [-21.3667, 55.5333] }
        ],
        cities: [
            { name: 'Saint-Denis', coordinates: [-20.8789, 55.4481], population: 147000 },
            { name: 'Saint-Paul', coordinates: [-21.0000, 55.2667], population: 105000 },
            { name: 'Saint-Pierre', coordinates: [-21.3333, 55.4833], population: 84000 },
            { name: 'Le Tampon', coordinates: [-21.2667, 55.5167], population: 78000 }
        ],
        attractions: ['Piton de la Fournaise Volcano', 'Cirque de Mafate', 'Cirque de Cilaos', 'Trou de Fer Waterfall', 'Vanilla Plantations'],
        wildlife: ['Réunion Cuckoo-shrike', 'Réunion Harrier', 'Flying Foxes', 'Humpback Whales', 'Sea Turtles'],
        economy: ['Tourism', 'Sugar Cane', 'Vanilla', 'Rum Production', 'Construction'],
        bestTimeToVisit: 'May-November'
    },
    {
        id: 'martinique',
        name: 'Martinique',
        countries: [{ name: 'France', code: 'FR' }],
        continent: 'North America',
        ocean: 'Caribbean Sea',
        islandType: 'volcanic',
        area: 1128,
        population: 376480,
        highestPoint: { name: 'Mount Pelée', elevation: 1397 },
        coordinates: [14.6415, -61.0242],
        image: 'https://images.unsplash.com/photo-1590071089561-9df71f8a63dc?w=800&h=600&fit=crop',
        climate: 'Tropical',
        beaches: [
            { name: 'Les Salines Beach', coordinates: [14.4167, -60.8500] },
            { name: 'Anse Dufour', coordinates: [14.5333, -61.1000] },
            { name: 'Grande Anse des Salines', coordinates: [14.4167, -60.8667] },
            { name: 'Diamond Beach', coordinates: [14.4667, -61.0333] }
        ],
        cities: [
            { name: 'Fort-de-France', coordinates: [14.6000, -61.0833], population: 78126 },
            { name: 'Le Lamentin', coordinates: [14.6167, -60.9833], population: 40000 },
            { name: 'Schoelcher', coordinates: [14.6167, -61.1000], population: 20000 },
            { name: 'Sainte-Marie', coordinates: [14.7833, -60.9833], population: 16000 }
        ],
        attractions: ['Mount Pelée', 'Les Salines Beach', 'Saint-Pierre Ruins', 'Jardin de Balata', 'Diamond Rock'],
        wildlife: ['Fer-de-Lance Snake', 'Martinique Oriole', 'Sea Turtles', 'Hummingbirds', 'Iguanas'],
        economy: ['Tourism', 'Agriculture', 'Rum Production', 'Bananas', 'Sugar'],
        bestTimeToVisit: 'December-May'
    },
    {
        id: 'guadeloupe',
        name: 'Guadeloupe',
        countries: [{ name: 'France', code: 'FR' }],
        continent: 'North America',
        ocean: 'Caribbean Sea',
        islandType: 'volcanic',
        area: 1628,
        population: 395700,
        highestPoint: { name: 'La Soufrière', elevation: 1467 },
        coordinates: [16.2650, -61.5510],
        image: 'https://images.unsplash.com/photo-1580237072617-771c3ecc4a24?w=800&h=600&fit=crop',
        climate: 'Tropical',
        beaches: [
            { name: 'Grande-Anse Beach', coordinates: [15.9833, -61.7500] },
            { name: 'Plage de la Caravelle', coordinates: [16.2333, -61.5167] },
            { name: 'Plage du Souffleur', coordinates: [16.4000, -61.4833] },
            { name: 'Anse du Figuier', coordinates: [15.8833, -61.6333] }
        ],
        cities: [
            { name: 'Pointe-à-Pitre', coordinates: [16.2333, -61.5333], population: 15826 },
            { name: 'Les Abymes', coordinates: [16.2500, -61.5000], population: 53849 },
            { name: 'Baie-Mahault', coordinates: [16.2667, -61.5833], population: 30551 },
            { name: 'Le Gosier', coordinates: [16.2000, -61.5000], population: 25360 }
        ],
        attractions: ['La Soufrière Volcano', 'Carbet Falls', 'Jacques Cousteau Reserve', 'Guadeloupe National Park', 'Marie-Galante Island'],
        wildlife: ['Guadeloupe Woodpecker', 'Raccoons', 'Iguanas', 'Humpback Whales', 'Sea Turtles'],
        economy: ['Tourism', 'Agriculture', 'Sugar', 'Rum', 'Bananas'],
        bestTimeToVisit: 'December-May'
    },
    {
        id: 'barbados',
        name: 'Barbados',
        countries: [{ name: 'Barbados', code: 'BB' }],
        continent: 'North America',
        ocean: 'Caribbean Sea',
        islandType: 'coral',
        area: 432,
        population: 287371,
        highestPoint: { name: 'Mount Hillaby', elevation: 336 },
        coordinates: [13.1939, -59.5432],
        image: 'https://images.unsplash.com/photo-1570734739650-d106e9dc2851?w=800&h=600&fit=crop',
        climate: 'Tropical',
        beaches: [
            { name: 'Crane Beach', coordinates: [13.1000, -59.4500] },
            { name: 'Bottom Bay', coordinates: [13.1167, -59.4667] },
            { name: 'Mullins Beach', coordinates: [13.2333, -59.6333] },
            { name: 'Carlisle Bay', coordinates: [13.0833, -59.6167] },
            { name: 'Bathsheba Beach', coordinates: [13.2167, -59.5167] }
        ],
        cities: [
            { name: 'Bridgetown', coordinates: [13.1000, -59.6167], population: 110000 },
            { name: 'Speightstown', coordinates: [13.2500, -59.6500], population: 3634 },
            { name: 'Oistins', coordinates: [13.0667, -59.5333], population: 2500 },
            { name: 'Holetown', coordinates: [13.1833, -59.6333], population: 1600 }
        ],
        attractions: ['Harrison\'s Cave', 'Animal Flower Cave', 'Bridgetown Historic District', 'Rum Distilleries', 'Bathsheba Rock Formations'],
        wildlife: ['Green Monkeys', 'Sea Turtles', 'Flying Fish', 'Hummingbirds', 'Red-footed Tortoises'],
        economy: ['Tourism', 'Rum Production', 'Financial Services', 'Informatics', 'Manufacturing'],
        bestTimeToVisit: 'December-April'
    }
];

// Make data available globally
if (typeof window !== 'undefined') {
    window.islandsData6 = islandsData6;
}
