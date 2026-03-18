/* ========================================
   ISLANDS EXPLORER - DATA FILE 2
   Islands 11-20: Major World Islands
======================================== */

const islandsData2 = [
    {
        id: 'sulawesi',
        name: 'Sulawesi',
        countries: [{ name: 'Indonesia', code: 'ID' }],
        continent: 'Asia',
        ocean: 'Pacific Ocean',
        islandType: 'continental',
        area: 180681,
        population: 19000000,
        highestPoint: { name: 'Mount Rantemario', elevation: 3478 },
        coordinates: [-2.0000, 121.0000],
        image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=800&h=600&fit=crop',
        climate: 'Tropical',
        beaches: [
            { name: 'Bunaken Beach', coordinates: [1.6167, 124.7500] },
            { name: 'Likupang Beach', coordinates: [1.6833, 125.0500] },
            { name: 'Bira Beach', coordinates: [-5.6167, 120.4500] }
        ],
        cities: [
            { name: 'Makassar', coordinates: [-5.1477, 119.4327], population: 1526677 },
            { name: 'Manado', coordinates: [1.4748, 124.8421], population: 451916 },
            { name: 'Palu', coordinates: [-0.8917, 119.8707], population: 379782 },
            { name: 'Kendari', coordinates: [-3.9675, 122.5947], population: 345111 }
        ],
        attractions: ['Bunaken Marine Park', 'Toraja Highlands', 'Togean Islands', 'Tana Toraja Burial Sites', 'Lore Lindu National Park'],
        wildlife: ['Tarsiers', 'Anoa', 'Babirusa', 'Maleo Birds', 'Black Macaques'],
        economy: ['Agriculture', 'Fishing', 'Mining', 'Tourism', 'Trade'],
        bestTimeToVisit: 'April-October'
    },
    {
        id: 'south-island-nz',
        name: 'South Island',
        countries: [{ name: 'New Zealand', code: 'NZ' }],
        continent: 'Oceania',
        ocean: 'Pacific Ocean',
        islandType: 'continental',
        area: 150437,
        population: 1230100,
        highestPoint: { name: 'Aoraki / Mount Cook', elevation: 3724 },
        coordinates: [-43.5000, 170.5000],
        image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=800&h=600&fit=crop',
        climate: 'Temperate',
        beaches: [
            { name: 'Abel Tasman Beach', coordinates: [-40.8500, 173.0000] },
            { name: 'Kaikoura Beach', coordinates: [-42.4167, 173.6833] },
            { name: 'Wharariki Beach', coordinates: [-40.5000, 172.6500] }
        ],
        cities: [
            { name: 'Christchurch', coordinates: [-43.5321, 172.6362], population: 389700 },
            { name: 'Dunedin', coordinates: [-45.8788, 170.5028], population: 134100 },
            { name: 'Queenstown', coordinates: [-45.0312, 168.6626], population: 15800 },
            { name: 'Nelson', coordinates: [-41.2706, 173.2840], population: 52900 }
        ],
        attractions: ['Milford Sound', 'Mount Cook', 'Queenstown Adventures', 'Fox Glacier', 'Abel Tasman National Park'],
        wildlife: ['Kea', 'Yellow-eyed Penguins', 'Fur Seals', 'Hector\'s Dolphins', 'Tui'],
        economy: ['Tourism', 'Agriculture', 'Wine Production', 'Dairy', 'Film Industry'],
        bestTimeToVisit: 'December-March'
    },
    {
        id: 'java',
        name: 'Java',
        countries: [{ name: 'Indonesia', code: 'ID' }],
        continent: 'Asia',
        ocean: 'Indian Ocean',
        islandType: 'volcanic',
        area: 138794,
        population: 151600000,
        highestPoint: { name: 'Mount Semeru', elevation: 3676 },
        coordinates: [-7.6145, 110.7122],
        image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=800&h=600&fit=crop',
        climate: 'Tropical',
        beaches: [
            { name: 'Pangandaran Beach', coordinates: [-7.7000, 108.6500] },
            { name: 'Anyer Beach', coordinates: [-6.0833, 105.9333] },
            { name: 'Karimunjawa Islands', coordinates: [-5.8833, 110.4333] }
        ],
        cities: [
            { name: 'Jakarta', coordinates: [-6.2088, 106.8456], population: 10562088 },
            { name: 'Surabaya', coordinates: [-7.2575, 112.7521], population: 2874699 },
            { name: 'Bandung', coordinates: [-6.9175, 107.6191], population: 2575478 },
            { name: 'Semarang', coordinates: [-6.9666, 110.4196], population: 1786114 },
            { name: 'Yogyakarta', coordinates: [-7.7956, 110.3695], population: 422732 }
        ],
        attractions: ['Borobudur Temple', 'Prambanan Temple', 'Mount Bromo', 'Yogyakarta Palace', 'Kawah Ijen'],
        wildlife: ['Javan Rhinoceros', 'Javan Leopard', 'Javan Hawk-eagle', 'Banteng', 'Silvery Gibbon'],
        economy: ['Manufacturing', 'Agriculture', 'Services', 'Tourism', 'Mining'],
        bestTimeToVisit: 'May-September'
    },
    {
        id: 'north-island-nz',
        name: 'North Island',
        countries: [{ name: 'New Zealand', code: 'NZ' }],
        continent: 'Oceania',
        ocean: 'Pacific Ocean',
        islandType: 'volcanic',
        area: 113729,
        population: 3925800,
        highestPoint: { name: 'Mount Ruapehu', elevation: 2797 },
        coordinates: [-38.5000, 176.0000],
        image: 'https://images.unsplash.com/photo-1531804309819-9e2956ffc55b?w=800&h=600&fit=crop',
        climate: 'Temperate',
        beaches: [
            { name: 'Hot Water Beach', coordinates: [-36.8833, 175.8333] },
            { name: 'Piha Beach', coordinates: [-36.9500, 174.4667] },
            { name: 'Mount Maunganui Beach', coordinates: [-37.6333, 176.1833] }
        ],
        cities: [
            { name: 'Auckland', coordinates: [-36.8509, 174.7645], population: 1657200 },
            { name: 'Wellington', coordinates: [-41.2866, 174.7756], population: 215400 },
            { name: 'Hamilton', coordinates: [-37.7870, 175.2793], population: 178500 },
            { name: 'Rotorua', coordinates: [-38.1368, 176.2497], population: 77300 }
        ],
        attractions: ['Hobbiton', 'Rotorua Geothermal', 'Waitomo Caves', 'Bay of Islands', 'Tongariro Crossing'],
        wildlife: ['Kiwi', 'Tuatara', 'Kereru', 'Fantail', 'Morepork Owl'],
        economy: ['Agriculture', 'Tourism', 'Technology', 'Film Production', 'Dairy'],
        bestTimeToVisit: 'December-March'
    },
    {
        id: 'luzon',
        name: 'Luzon',
        countries: [{ name: 'Philippines', code: 'PH' }],
        continent: 'Asia',
        ocean: 'Pacific Ocean',
        islandType: 'volcanic',
        area: 109965,
        population: 64000000,
        highestPoint: { name: 'Mount Pulag', elevation: 2922 },
        coordinates: [16.0000, 121.0000],
        image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&h=600&fit=crop',
        climate: 'Tropical',
        beaches: [
            { name: 'La Union Beach', coordinates: [16.6159, 120.3210] },
            { name: 'Pagudpud Beach', coordinates: [18.5667, 120.8500] },
            { name: 'Zambales Beaches', coordinates: [15.5081, 119.9697] }
        ],
        cities: [
            { name: 'Manila', coordinates: [14.5995, 120.9842], population: 1846513 },
            { name: 'Quezon City', coordinates: [14.6760, 121.0437], population: 2960048 },
            { name: 'Baguio', coordinates: [16.4023, 120.5960], population: 366358 },
            { name: 'Angeles City', coordinates: [15.1450, 120.5887], population: 462928 }
        ],
        attractions: ['Banaue Rice Terraces', 'Intramuros', 'Vigan Historic Town', 'Mount Pinatubo', 'Hundred Islands'],
        wildlife: ['Philippine Eagle', 'Tarsiers', 'Flying Lemurs', 'Cloud Rats', 'Tamaraw'],
        economy: ['Services', 'Manufacturing', 'Agriculture', 'BPO Industry', 'Tourism'],
        bestTimeToVisit: 'November-April'
    },
    {
        id: 'iceland',
        name: 'Iceland',
        countries: [{ name: 'Iceland', code: 'IS' }],
        continent: 'Europe',
        ocean: 'Atlantic Ocean',
        islandType: 'volcanic',
        area: 103000,
        population: 372520,
        highestPoint: { name: 'Hvannadalshnúkur', elevation: 2110 },
        coordinates: [64.9631, -19.0208],
        image: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=800&h=600&fit=crop',
        climate: 'Subarctic',
        beaches: [
            { name: 'Reynisfjara Black Beach', coordinates: [63.4053, -19.0714] },
            { name: 'Diamond Beach', coordinates: [64.0444, -16.1794] },
            { name: 'Rauðasandur Beach', coordinates: [65.4833, -23.9500] }
        ],
        cities: [
            { name: 'Reykjavik', coordinates: [64.1466, -21.9426], population: 135688 },
            { name: 'Akureyri', coordinates: [65.6885, -18.0878], population: 19513 },
            { name: 'Keflavik', coordinates: [64.0027, -22.5627], population: 15129 },
            { name: 'Selfoss', coordinates: [63.9333, -20.9833], population: 7962 }
        ],
        attractions: ['Golden Circle', 'Blue Lagoon', 'Northern Lights', 'Vatnajökull Glacier', 'Geysir', 'Jökulsárlón'],
        wildlife: ['Arctic Foxes', 'Puffins', 'Reindeer', 'Seals', 'Whales', 'Icelandic Horses'],
        economy: ['Tourism', 'Fishing', 'Renewable Energy', 'Aluminum Smelting', 'Technology'],
        bestTimeToVisit: 'June-August, September-March (Northern Lights)'
    },
    {
        id: 'mindanao',
        name: 'Mindanao',
        countries: [{ name: 'Philippines', code: 'PH' }],
        continent: 'Asia',
        ocean: 'Pacific Ocean',
        islandType: 'volcanic',
        area: 97530,
        population: 26250000,
        highestPoint: { name: 'Mount Apo', elevation: 2954 },
        coordinates: [7.5000, 125.5000],
        image: 'https://images.unsplash.com/photo-1573455494060-c5595004fb6c?w=800&h=600&fit=crop',
        climate: 'Tropical',
        beaches: [
            { name: 'Samal Island Beach', coordinates: [7.0833, 125.7333] },
            { name: 'Siargao Beaches', coordinates: [9.8500, 126.0500] },
            { name: 'Camiguin Beaches', coordinates: [9.1500, 124.7167] }
        ],
        cities: [
            { name: 'Davao City', coordinates: [7.1907, 125.4553], population: 1776949 },
            { name: 'Zamboanga City', coordinates: [6.9214, 122.0790], population: 977234 },
            { name: 'Cagayan de Oro', coordinates: [8.4542, 124.6319], population: 728402 },
            { name: 'General Santos', coordinates: [6.1164, 125.1716], population: 697315 }
        ],
        attractions: ['Mount Apo', 'Siargao Surfing', 'Enchanted River', 'Tinuy-an Falls', 'Camiguin Island'],
        wildlife: ['Philippine Eagle', 'Philippine Crocodile', 'Mindanao Hornbill', 'Flying Foxes', 'Tarsiers'],
        economy: ['Agriculture', 'Fishing', 'Mining', 'Manufacturing', 'Tourism'],
        bestTimeToVisit: 'March-October'
    },
    {
        id: 'ireland',
        name: 'Ireland',
        countries: [{ name: 'Ireland', code: 'IE' }, { name: 'United Kingdom', code: 'GB' }],
        continent: 'Europe',
        ocean: 'Atlantic Ocean',
        islandType: 'continental',
        area: 84421,
        population: 6900000,
        highestPoint: { name: 'Carrauntoohil', elevation: 1038 },
        coordinates: [53.4129, -8.2439],
        image: 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=800&h=600&fit=crop',
        climate: 'Temperate Maritime',
        beaches: [
            { name: 'Inch Beach', coordinates: [52.1333, -9.9833] },
            { name: 'Keem Beach', coordinates: [53.9667, -10.1833] },
            { name: 'Portstewart Strand', coordinates: [55.1833, -6.7167] }
        ],
        cities: [
            { name: 'Dublin', coordinates: [53.3498, -6.2603], population: 1173179 },
            { name: 'Belfast', coordinates: [54.5973, -5.9301], population: 343542 },
            { name: 'Cork', coordinates: [51.8985, -8.4756], population: 222333 },
            { name: 'Galway', coordinates: [53.2707, -9.0568], population: 85910 },
            { name: 'Limerick', coordinates: [52.6638, -8.6267], population: 102161 }
        ],
        attractions: ['Cliffs of Moher', 'Ring of Kerry', 'Giant\'s Causeway', 'Dublin Castle', 'Blarney Castle', 'Killarney'],
        wildlife: ['Red Deer', 'Irish Hare', 'Badgers', 'Puffins', 'Grey Seals', 'Pine Martens'],
        economy: ['Technology', 'Pharmaceuticals', 'Tourism', 'Agriculture', 'Financial Services'],
        bestTimeToVisit: 'April-October'
    },
    {
        id: 'hokkaido',
        name: 'Hokkaido',
        countries: [{ name: 'Japan', code: 'JP' }],
        continent: 'Asia',
        ocean: 'Pacific Ocean',
        islandType: 'volcanic',
        area: 83424,
        population: 5224614,
        highestPoint: { name: 'Mount Asahi', elevation: 2291 },
        coordinates: [43.2203, 142.8635],
        image: 'https://images.unsplash.com/photo-1542931287-023b922fa89b?w=800&h=600&fit=crop',
        climate: 'Humid Continental',
        beaches: [
            { name: 'Otaru Beach', coordinates: [43.1907, 140.9947] },
            { name: 'Shakotan Peninsula', coordinates: [43.3000, 140.4500] },
            { name: 'Ishikari Beach', coordinates: [43.2500, 141.3167] }
        ],
        cities: [
            { name: 'Sapporo', coordinates: [43.0618, 141.3545], population: 1973395 },
            { name: 'Asahikawa', coordinates: [43.7707, 142.3650], population: 329306 },
            { name: 'Hakodate', coordinates: [41.7687, 140.7288], population: 251084 },
            { name: 'Otaru', coordinates: [43.1907, 140.9947], population: 111299 }
        ],
        attractions: ['Sapporo Snow Festival', 'Furano Lavender Fields', 'Shiretoko National Park', 'Niseko Skiing', 'Blue Pond'],
        wildlife: ['Brown Bears', 'Red-crowned Cranes', 'Steller\'s Sea Eagles', 'Hokkaido Deer', 'Red Foxes'],
        economy: ['Agriculture', 'Tourism', 'Fishing', 'Dairy', 'Technology'],
        bestTimeToVisit: 'December-February (Winter), June-August (Summer)'
    },
    {
        id: 'hispaniola',
        name: 'Hispaniola',
        countries: [{ name: 'Dominican Republic', code: 'DO' }, { name: 'Haiti', code: 'HT' }],
        continent: 'North America',
        ocean: 'Caribbean Sea',
        islandType: 'volcanic',
        area: 76192,
        population: 22300000,
        highestPoint: { name: 'Pico Duarte', elevation: 3098 },
        coordinates: [19.0000, -70.6667],
        image: 'https://images.unsplash.com/photo-1568402102990-bc541580b59f?w=800&h=600&fit=crop',
        climate: 'Tropical',
        beaches: [
            { name: 'Punta Cana Beach', coordinates: [18.5601, -68.3725] },
            { name: 'Playa Dorada', coordinates: [19.7833, -70.6167] },
            { name: 'Labadee Beach', coordinates: [19.7833, -72.2500] }
        ],
        cities: [
            { name: 'Santo Domingo', coordinates: [18.4861, -69.9312], population: 2945353 },
            { name: 'Port-au-Prince', coordinates: [18.5944, -72.3074], population: 2618894 },
            { name: 'Santiago de los Caballeros', coordinates: [19.4500, -70.7000], population: 1200000 },
            { name: 'Cap-Haïtien', coordinates: [19.7600, -72.2000], population: 274404 }
        ],
        attractions: ['Punta Cana Resorts', 'Colonial Zone Santo Domingo', 'Citadelle Laferrière', 'Los Haitises', 'Whale Watching'],
        wildlife: ['Hutia', 'Rhinoceros Iguana', 'Solenodon', 'Flamingos', 'Sea Turtles'],
        economy: ['Tourism', 'Agriculture', 'Mining', 'Manufacturing', 'Remittances'],
        bestTimeToVisit: 'December-April'
    }
];

// Make data available globally
if (typeof window !== 'undefined') {
    window.islandsData2 = islandsData2;
}
