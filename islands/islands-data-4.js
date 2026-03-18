/* ========================================
   ISLANDS EXPLORER - DATA FILE 4
   Islands 31-40: Popular Destinations
======================================== */

const islandsData4 = [
    {
        id: 'crete',
        name: 'Crete',
        countries: [{ name: 'Greece', code: 'GR' }],
        continent: 'Europe',
        ocean: 'Mediterranean Sea',
        islandType: 'continental',
        area: 8336,
        population: 634930,
        highestPoint: { name: 'Mount Ida (Psiloritis)', elevation: 2456 },
        coordinates: [35.2401, 24.8093],
        image: 'https://images.unsplash.com/photo-1559126315-63c0af14246e?w=800&h=600&fit=crop',
        climate: 'Mediterranean',
        beaches: [
            { name: 'Elafonissi Beach', coordinates: [35.2667, 23.5333] },
            { name: 'Balos Lagoon', coordinates: [35.5833, 23.5833] },
            { name: 'Vai Beach', coordinates: [35.2500, 26.2667] },
            { name: 'Matala Beach', coordinates: [34.9833, 24.7500] }
        ],
        cities: [
            { name: 'Heraklion', coordinates: [35.3387, 25.1442], population: 174165 },
            { name: 'Chania', coordinates: [35.5138, 24.0180], population: 108642 },
            { name: 'Rethymno', coordinates: [35.3661, 24.4831], population: 40000 },
            { name: 'Agios Nikolaos', coordinates: [35.1900, 25.7200], population: 20000 }
        ],
        attractions: ['Knossos Palace', 'Samaria Gorge', 'Spinalonga Island', 'Heraklion Archaeological Museum', 'Old Town Chania'],
        wildlife: ['Kri-Kri (Cretan Goat)', 'Bearded Vultures', 'Loggerhead Sea Turtles', 'Cretan Spiny Mouse', 'Griffon Vultures'],
        economy: ['Tourism', 'Agriculture', 'Olive Oil', 'Wine Production', 'Fishing'],
        bestTimeToVisit: 'April-October'
    },
    {
        id: 'new-caledonia',
        name: 'New Caledonia',
        countries: [{ name: 'France', code: 'FR' }],
        continent: 'Oceania',
        ocean: 'Pacific Ocean',
        islandType: 'continental',
        area: 18576,
        population: 271407,
        highestPoint: { name: 'Mont Panié', elevation: 1628 },
        coordinates: [-21.2500, 165.3000],
        image: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800&h=600&fit=crop',
        climate: 'Tropical',
        beaches: [
            { name: 'Anse Vata', coordinates: [-22.3000, 166.4333] },
            { name: 'Île des Pins', coordinates: [-22.6167, 167.4833] },
            { name: 'Lifou Beach', coordinates: [-20.9167, 167.2500] },
            { name: 'Poé Beach', coordinates: [-21.7667, 165.4333] }
        ],
        cities: [
            { name: 'Nouméa', coordinates: [-22.2758, 166.4580], population: 99926 },
            { name: 'Mont-Dore', coordinates: [-22.2667, 166.5667], population: 27155 },
            { name: 'Dumbéa', coordinates: [-22.1667, 166.4500], population: 31812 },
            { name: 'Païta', coordinates: [-22.1333, 166.3667], population: 20616 }
        ],
        attractions: ['Heart of Voh', 'Isle of Pines', 'Blue River Park', 'Tjibaou Cultural Centre', 'UNESCO Lagoon'],
        wildlife: ['Kagu', 'New Caledonian Crow', 'Dugongs', 'Sea Turtles', 'Nautilus'],
        economy: ['Nickel Mining', 'Tourism', 'Aquaculture', 'Agriculture', 'Fishing'],
        bestTimeToVisit: 'September-December'
    },
    {
        id: 'timor',
        name: 'Timor',
        countries: [{ name: 'Indonesia', code: 'ID' }, { name: 'Timor-Leste', code: 'TL' }],
        continent: 'Asia',
        ocean: 'Indian Ocean',
        islandType: 'continental',
        area: 30777,
        population: 3500000,
        highestPoint: { name: 'Tatamailau', elevation: 2963 },
        coordinates: [-9.0000, 125.0000],
        image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=800&h=600&fit=crop',
        climate: 'Tropical',
        beaches: [
            { name: 'Areia Branca Beach', coordinates: [-8.5333, 126.0833] },
            { name: 'Cristo Rei Beach', coordinates: [-8.5333, 125.6000] },
            { name: 'Atauro Island', coordinates: [-8.2667, 125.6000] },
            { name: 'Jaco Island', coordinates: [-8.4167, 127.3167] }
        ],
        cities: [
            { name: 'Dili', coordinates: [-8.5569, 125.5603], population: 281329 },
            { name: 'Kupang', coordinates: [-10.1667, 123.6000], population: 450000 },
            { name: 'Baucau', coordinates: [-8.4667, 126.4500], population: 16000 },
            { name: 'Soe', coordinates: [-9.8667, 124.2667], population: 30000 }
        ],
        attractions: ['Cristo Rei Statue', 'Atauro Island', 'Jaco Island', 'Mount Ramelau', 'Traditional Villages'],
        wildlife: ['Timor Deer', 'Saltwater Crocodiles', 'Cuscus', 'Flying Foxes', 'Coral Reef Fish'],
        economy: ['Oil & Gas', 'Coffee', 'Agriculture', 'Fishing', 'Tourism'],
        bestTimeToVisit: 'May-November'
    },
    {
        id: 'jamaica',
        name: 'Jamaica',
        countries: [{ name: 'Jamaica', code: 'JM' }],
        continent: 'North America',
        ocean: 'Caribbean Sea',
        islandType: 'volcanic',
        area: 10990,
        population: 2961167,
        highestPoint: { name: 'Blue Mountain Peak', elevation: 2256 },
        coordinates: [18.1096, -77.2975],
        image: 'https://images.unsplash.com/photo-1570739818903-c7823c3c08d7?w=800&h=600&fit=crop',
        climate: 'Tropical',
        beaches: [
            { name: 'Seven Mile Beach', coordinates: [18.3333, -78.3500] },
            { name: 'Doctor\'s Cave Beach', coordinates: [18.4833, -77.9167] },
            { name: 'Frenchman\'s Cove', coordinates: [18.1833, -76.4333] },
            { name: 'Treasure Beach', coordinates: [17.8833, -77.7833] }
        ],
        cities: [
            { name: 'Kingston', coordinates: [17.9714, -76.7931], population: 662426 },
            { name: 'Montego Bay', coordinates: [18.4762, -77.8939], population: 110115 },
            { name: 'Ocho Rios', coordinates: [18.4075, -77.1050], population: 16671 },
            { name: 'Negril', coordinates: [18.2667, -78.3500], population: 7500 },
            { name: 'Port Antonio', coordinates: [18.1750, -76.4500], population: 14400 }
        ],
        attractions: ['Dunn\'s River Falls', 'Blue Mountains', 'Bob Marley Museum', 'Rick\'s Cafe', 'Rose Hall Great House'],
        wildlife: ['Jamaican Iguana', 'Doctor Bird', 'Jamaican Hutia', 'Yellow-billed Parrot', 'Manatees'],
        economy: ['Tourism', 'Bauxite Mining', 'Agriculture', 'Remittances', 'Manufacturing'],
        bestTimeToVisit: 'November-April'
    },
    {
        id: 'puerto-rico',
        name: 'Puerto Rico',
        countries: [{ name: 'United States', code: 'US' }],
        continent: 'North America',
        ocean: 'Caribbean Sea',
        islandType: 'volcanic',
        area: 9104,
        population: 3285874,
        highestPoint: { name: 'Cerro de Punta', elevation: 1339 },
        coordinates: [18.2208, -66.5901],
        image: 'https://images.unsplash.com/photo-1579687196544-8c3ef8c3b8c1?w=800&h=600&fit=crop',
        climate: 'Tropical',
        beaches: [
            { name: 'Flamenco Beach', coordinates: [18.3278, -65.3150] },
            { name: 'Condado Beach', coordinates: [18.4556, -66.0711] },
            { name: 'Luquillo Beach', coordinates: [18.3833, -65.7167] },
            { name: 'Crash Boat Beach', coordinates: [18.4833, -67.1667] }
        ],
        cities: [
            { name: 'San Juan', coordinates: [18.4655, -66.1057], population: 342259 },
            { name: 'Bayamón', coordinates: [18.3833, -66.1500], population: 185996 },
            { name: 'Carolina', coordinates: [18.3833, -65.9667], population: 157832 },
            { name: 'Ponce', coordinates: [18.0111, -66.6141], population: 132502 },
            { name: 'Mayagüez', coordinates: [18.2013, -67.1397], population: 75000 }
        ],
        attractions: ['Old San Juan', 'El Yunque Rainforest', 'Bioluminescent Bays', 'Castillo San Felipe del Morro', 'Culebra Island'],
        wildlife: ['Puerto Rican Parrot', 'Coquí Frogs', 'Manatees', 'Sea Turtles', 'Mongoose'],
        economy: ['Manufacturing', 'Tourism', 'Pharmaceuticals', 'Agriculture', 'Finance'],
        bestTimeToVisit: 'December-April'
    },
    {
        id: 'bora-bora',
        name: 'Bora Bora',
        countries: [{ name: 'France', code: 'FR' }],
        continent: 'Oceania',
        ocean: 'Pacific Ocean',
        islandType: 'volcanic',
        area: 30,
        population: 10605,
        highestPoint: { name: 'Mount Otemanu', elevation: 727 },
        coordinates: [-16.5004, -151.7415],
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop',
        climate: 'Tropical',
        beaches: [
            { name: 'Matira Beach', coordinates: [-16.5333, -151.7333] },
            { name: 'Motu Tapu', coordinates: [-16.4833, -151.7000] },
            { name: 'Coral Gardens', coordinates: [-16.5167, -151.7500] }
        ],
        cities: [
            { name: 'Vaitape', coordinates: [-16.5167, -151.7500], population: 4927 },
            { name: 'Anau', coordinates: [-16.5333, -151.7167], population: 1500 },
            { name: 'Faanui', coordinates: [-16.4833, -151.7667], population: 1200 }
        ],
        attractions: ['Mount Otemanu', 'Lagoonarium', 'Shark & Ray Feeding', 'Overwater Bungalows', '4WD Island Tour'],
        wildlife: ['Manta Rays', 'Blacktip Reef Sharks', 'Sea Turtles', 'Tropical Fish', 'Dolphins'],
        economy: ['Tourism', 'Pearl Farming', 'Fishing', 'Coconut Products', 'Handicrafts'],
        bestTimeToVisit: 'May-October'
    },
    {
        id: 'tahiti',
        name: 'Tahiti',
        countries: [{ name: 'France', code: 'FR' }],
        continent: 'Oceania',
        ocean: 'Pacific Ocean',
        islandType: 'volcanic',
        area: 1045,
        population: 189517,
        highestPoint: { name: 'Mount Orohena', elevation: 2241 },
        coordinates: [-17.6509, -149.4260],
        image: 'https://images.unsplash.com/photo-1516815231560-8f41ec531527?w=800&h=600&fit=crop',
        climate: 'Tropical',
        beaches: [
            { name: 'Papenoo Beach', coordinates: [-17.5333, -149.4000] },
            { name: 'Point Venus', coordinates: [-17.4833, -149.4833] },
            { name: 'Lafayette Beach', coordinates: [-17.5333, -149.5667] },
            { name: 'PK18 Beach', coordinates: [-17.6500, -149.6167] }
        ],
        cities: [
            { name: 'Papeete', coordinates: [-17.5334, -149.5666], population: 26926 },
            { name: 'Faaa', coordinates: [-17.5500, -149.6000], population: 29506 },
            { name: 'Punaauia', coordinates: [-17.6167, -149.6000], population: 27613 },
            { name: 'Pirae', coordinates: [-17.5333, -149.5333], population: 14475 }
        ],
        attractions: ['Point Venus Lighthouse', 'Papenoo Valley', 'Arahoho Blowhole', 'Paul Gauguin Museum', 'Black Sand Beaches'],
        wildlife: ['Tahiti Monarch', 'Blue Lorikeet', 'Sea Turtles', 'Dolphins', 'Humpback Whales'],
        economy: ['Tourism', 'Pearl Cultivation', 'Vanilla', 'Coconut Products', 'Fishing'],
        bestTimeToVisit: 'May-October'
    },
    {
        id: 'mauritius',
        name: 'Mauritius',
        countries: [{ name: 'Mauritius', code: 'MU' }],
        continent: 'Africa',
        ocean: 'Indian Ocean',
        islandType: 'volcanic',
        area: 2040,
        population: 1265740,
        highestPoint: { name: 'Piton de la Petite Rivière Noire', elevation: 828 },
        coordinates: [-20.3484, 57.5522],
        image: 'https://images.unsplash.com/photo-1585973315156-c8c7dc2d6a1c?w=800&h=600&fit=crop',
        climate: 'Tropical',
        beaches: [
            { name: 'Trou aux Biches', coordinates: [-20.0333, 57.5500] },
            { name: 'Belle Mare', coordinates: [-20.1833, 57.7833] },
            { name: 'Flic en Flac', coordinates: [-20.2833, 57.3667] },
            { name: 'Le Morne Beach', coordinates: [-20.4500, 57.3167] }
        ],
        cities: [
            { name: 'Port Louis', coordinates: [-20.1619, 57.4989], population: 147066 },
            { name: 'Beau Bassin-Rose Hill', coordinates: [-20.2333, 57.4667], population: 110822 },
            { name: 'Vacoas-Phoenix', coordinates: [-20.2833, 57.5000], population: 106970 },
            { name: 'Curepipe', coordinates: [-20.3167, 57.5333], population: 78618 },
            { name: 'Grand Baie', coordinates: [-20.0167, 57.5833], population: 12735 }
        ],
        attractions: ['Chamarel Seven Coloured Earth', 'Black River Gorges', 'Le Morne Brabant', 'Île aux Cerfs', 'Pamplemousses Garden'],
        wildlife: ['Pink Pigeons', 'Mauritius Kestrel', 'Echo Parakeet', 'Giant Tortoises', 'Fruit Bats'],
        economy: ['Tourism', 'Textiles', 'Sugar', 'Financial Services', 'IT'],
        bestTimeToVisit: 'May-December'
    },
    {
        id: 'zanzibar',
        name: 'Zanzibar',
        countries: [{ name: 'Tanzania', code: 'TZ' }],
        continent: 'Africa',
        ocean: 'Indian Ocean',
        islandType: 'coral',
        area: 1666,
        population: 1303569,
        highestPoint: { name: 'Koani', elevation: 120 },
        coordinates: [-6.1659, 39.2026],
        image: 'https://images.unsplash.com/photo-1519659528534-7fd733a832a0?w=800&h=600&fit=crop',
        climate: 'Tropical',
        beaches: [
            { name: 'Nungwi Beach', coordinates: [-5.7333, 39.3000] },
            { name: 'Kendwa Beach', coordinates: [-5.7667, 39.2833] },
            { name: 'Paje Beach', coordinates: [-6.2667, 39.5333] },
            { name: 'Matemwe Beach', coordinates: [-5.8500, 39.3667] }
        ],
        cities: [
            { name: 'Stone Town', coordinates: [-6.1622, 39.1875], population: 223033 },
            { name: 'Nungwi', coordinates: [-5.7333, 39.3000], population: 5000 },
            { name: 'Paje', coordinates: [-6.2667, 39.5333], population: 3000 },
            { name: 'Jambiani', coordinates: [-6.3167, 39.5500], population: 2000 }
        ],
        attractions: ['Stone Town UNESCO Site', 'Spice Tours', 'Prison Island', 'Jozani Forest', 'The Rock Restaurant'],
        wildlife: ['Red Colobus Monkeys', 'Sykes\' Monkeys', 'Bush Babies', 'Sea Turtles', 'Dolphins'],
        economy: ['Tourism', 'Spices', 'Seaweed Farming', 'Fishing', 'Coconut Products'],
        bestTimeToVisit: 'June-October, December-February'
    },
    {
        id: 'maldives-male',
        name: 'Malé Atoll',
        countries: [{ name: 'Maldives', code: 'MV' }],
        continent: 'Asia',
        ocean: 'Indian Ocean',
        islandType: 'coral',
        area: 9,
        population: 252768,
        highestPoint: { name: 'Malé Island', elevation: 2 },
        coordinates: [4.1755, 73.5093],
        image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&h=600&fit=crop',
        climate: 'Tropical',
        beaches: [
            { name: 'Artificial Beach', coordinates: [4.1667, 73.5000] },
            { name: 'Hulhumalé Beach', coordinates: [4.2167, 73.5333] },
            { name: 'Maafushi Beach', coordinates: [3.9500, 73.4833] }
        ],
        cities: [
            { name: 'Malé', coordinates: [4.1755, 73.5093], population: 215258 },
            { name: 'Hulhumalé', coordinates: [4.2167, 73.5333], population: 50000 },
            { name: 'Villimalé', coordinates: [4.2167, 73.4833], population: 7500 }
        ],
        attractions: ['Malé Friday Mosque', 'National Museum', 'Underwater Restaurant', 'Diving Sites', 'Fish Market'],
        wildlife: ['Reef Sharks', 'Manta Rays', 'Whale Sharks', 'Sea Turtles', 'Dolphins'],
        economy: ['Tourism', 'Fishing', 'Shipping', 'Financial Services', 'Construction'],
        bestTimeToVisit: 'November-April'
    }
];

// Make data available globally
if (typeof window !== 'undefined') {
    window.islandsData4 = islandsData4;
}
