/* ========================================
   ISLANDS EXPLORER - DATA FILE 8
   Islands 71-80: Southeast Asian Gems
======================================== */

const islandsData8 = [
    {
        id: 'maafushi',
        name: 'Maafushi',
        countries: [{ name: 'Maldives', code: 'MV' }],
        continent: 'Asia',
        ocean: 'Indian Ocean',
        islandType: 'coral',
        area: 0.28,
        population: 3000,
        highestPoint: { name: 'Island Center', elevation: 2 },
        coordinates: [3.9431, 73.4908],
        image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&h=600&fit=crop',
        climate: 'Tropical',
        beaches: [
            { name: 'Bikini Beach', coordinates: [3.9450, 73.4900] },
            { name: 'Maafushi Beach', coordinates: [3.9430, 73.4920] },
            { name: 'Picnic Island Beach', coordinates: [3.9500, 73.4950] }
        ],
        cities: [
            { name: 'Maafushi Village', coordinates: [3.9431, 73.4908], population: 3000 }
        ],
        attractions: ['Shark Snorkeling', 'Sandbank Trips', 'Dolphin Watching', 'Night Fishing', 'Water Sports'],
        wildlife: ['Whale Sharks', 'Manta Rays', 'Reef Sharks', 'Sea Turtles', 'Dolphins'],
        economy: ['Tourism', 'Guesthouses', 'Diving', 'Fishing', 'Water Sports'],
        bestTimeToVisit: 'November-April'
    },
    {
        id: 'komodo',
        name: 'Komodo Island',
        countries: [{ name: 'Indonesia', code: 'ID' }],
        continent: 'Asia',
        ocean: 'Indian Ocean',
        islandType: 'volcanic',
        area: 390,
        population: 2000,
        highestPoint: { name: 'Gunung Satalibo', elevation: 735 },
        coordinates: [-8.5500, 119.4500],
        image: 'https://images.unsplash.com/photo-1518877593221-1f28583780b4?w=800&h=600&fit=crop',
        climate: 'Tropical Savanna',
        beaches: [
            { name: 'Pink Beach', coordinates: [-8.5667, 119.4833] },
            { name: 'Long Beach', coordinates: [-8.5333, 119.4333] },
            { name: 'Red Beach', coordinates: [-8.5833, 119.5000] }
        ],
        cities: [
            { name: 'Komodo Village', coordinates: [-8.5500, 119.4500], population: 2000 }
        ],
        attractions: ['Komodo Dragons', 'Pink Beach', 'Diving Sites', 'Trekking', 'Manta Point'],
        wildlife: ['Komodo Dragons', 'Manta Rays', 'Deer', 'Wild Boars', 'Buffalo'],
        economy: ['Tourism', 'Komodo National Park', 'Fishing', 'Conservation', 'Diving'],
        bestTimeToVisit: 'April-December'
    },
    {
        id: 'raja-ampat',
        name: 'Raja Ampat',
        countries: [{ name: 'Indonesia', code: 'ID' }],
        continent: 'Asia',
        ocean: 'Pacific Ocean',
        islandType: 'continental',
        area: 40000,
        population: 49000,
        highestPoint: { name: 'Mount Nok', elevation: 1200 },
        coordinates: [-0.5500, 130.5000],
        image: 'https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?w=800&h=600&fit=crop',
        climate: 'Tropical',
        beaches: [
            { name: 'Pasir Timbul', coordinates: [-0.5333, 130.5167] },
            { name: 'Yeben Beach', coordinates: [-0.5167, 130.5833] },
            { name: 'Friwen Beach', coordinates: [-0.5000, 130.4833] },
            { name: 'Arborek Beach', coordinates: [-0.5167, 130.4000] }
        ],
        cities: [
            { name: 'Waisai', coordinates: [-0.4333, 130.8167], population: 8000 },
            { name: 'Sorong', coordinates: [-0.8667, 131.2500], population: 220000 }
        ],
        attractions: ['Wayag Islands', 'Misool', 'Pianemo', 'Manta Sandy', 'Cape Kri Diving'],
        wildlife: ['Manta Rays', 'Wobbegong Sharks', 'Pygmy Seahorses', 'Cenderawasih', 'Dugongs'],
        economy: ['Eco-tourism', 'Diving', 'Fishing', 'Pearl Farming', 'Conservation'],
        bestTimeToVisit: 'October-April'
    },
    {
        id: 'gili-islands',
        name: 'Gili Islands',
        countries: [{ name: 'Indonesia', code: 'ID' }],
        continent: 'Asia',
        ocean: 'Indian Ocean',
        islandType: 'coral',
        area: 15,
        population: 4500,
        highestPoint: { name: 'Gili Trawangan Hill', elevation: 30 },
        coordinates: [-8.3500, 116.0333],
        image: 'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?w=800&h=600&fit=crop',
        climate: 'Tropical',
        beaches: [
            { name: 'Gili Trawangan Beach', coordinates: [-8.3500, 116.0333] },
            { name: 'Gili Meno Beach', coordinates: [-8.3500, 116.0500] },
            { name: 'Gili Air Beach', coordinates: [-8.3583, 116.0750] },
            { name: 'Sunset Beach', coordinates: [-8.3417, 116.0250] }
        ],
        cities: [
            { name: 'Gili Trawangan Village', coordinates: [-8.3500, 116.0333], population: 2500 },
            { name: 'Gili Air Village', coordinates: [-8.3583, 116.0750], population: 1500 },
            { name: 'Gili Meno Village', coordinates: [-8.3500, 116.0500], population: 500 }
        ],
        attractions: ['Underwater Statues', 'Turtle Snorkeling', 'Sunset Swings', 'Night Market', 'Freediving'],
        wildlife: ['Sea Turtles', 'Reef Fish', 'Clownfish', 'Seahorses', 'Octopus'],
        economy: ['Tourism', 'Diving Schools', 'Hospitality', 'Water Sports', 'Fishing'],
        bestTimeToVisit: 'May-September'
    },
    {
        id: 'nusa-penida',
        name: 'Nusa Penida',
        countries: [{ name: 'Indonesia', code: 'ID' }],
        continent: 'Asia',
        ocean: 'Indian Ocean',
        islandType: 'continental',
        area: 202,
        population: 45000,
        highestPoint: { name: 'Puncak Mundi', elevation: 524 },
        coordinates: [-8.7275, 115.5444],
        image: 'https://images.unsplash.com/photo-1570789210967-2cac24db2ab5?w=800&h=600&fit=crop',
        climate: 'Tropical',
        beaches: [
            { name: 'Kelingking Beach', coordinates: [-8.7500, 115.4667] },
            { name: 'Crystal Bay', coordinates: [-8.7167, 115.4667] },
            { name: 'Atuh Beach', coordinates: [-8.7667, 115.6167] },
            { name: 'Diamond Beach', coordinates: [-8.7667, 115.6167] },
            { name: 'Broken Beach', coordinates: [-8.7333, 115.4500] }
        ],
        cities: [
            { name: 'Toyapakeh', coordinates: [-8.6833, 115.5167], population: 5000 },
            { name: 'Sampalan', coordinates: [-8.7000, 115.5333], population: 8000 },
            { name: 'Ped', coordinates: [-8.6833, 115.5500], population: 4000 }
        ],
        attractions: ['Kelingking Beach (T-Rex)', 'Angel\'s Billabong', 'Broken Beach', 'Manta Point', 'Teletubbies Hills'],
        wildlife: ['Manta Rays', 'Mola Mola', 'Bali Starlings', 'Monkeys', 'Sea Turtles'],
        economy: ['Tourism', 'Seaweed Farming', 'Agriculture', 'Fishing', 'Handicrafts'],
        bestTimeToVisit: 'April-October'
    },
    {
        id: 'lombok',
        name: 'Lombok',
        countries: [{ name: 'Indonesia', code: 'ID' }],
        continent: 'Asia',
        ocean: 'Indian Ocean',
        islandType: 'volcanic',
        area: 4725,
        population: 3352988,
        highestPoint: { name: 'Mount Rinjani', elevation: 3726 },
        coordinates: [-8.5650, 116.3510],
        image: 'https://images.unsplash.com/photo-1501179691627-eeaa65ea017c?w=800&h=600&fit=crop',
        climate: 'Tropical',
        beaches: [
            { name: 'Kuta Lombok Beach', coordinates: [-8.8833, 116.2833] },
            { name: 'Tanjung Aan', coordinates: [-8.8833, 116.3167] },
            { name: 'Selong Belanak', coordinates: [-8.8667, 116.1833] },
            { name: 'Senggigi Beach', coordinates: [-8.4833, 116.0500] },
            { name: 'Pink Beach', coordinates: [-8.8500, 116.5167] }
        ],
        cities: [
            { name: 'Mataram', coordinates: [-8.5833, 116.1167], population: 441064 },
            { name: 'Praya', coordinates: [-8.7167, 116.2833], population: 130000 },
            { name: 'Senggigi', coordinates: [-8.4833, 116.0500], population: 15000 },
            { name: 'Kuta', coordinates: [-8.8833, 116.2833], population: 5000 }
        ],
        attractions: ['Mount Rinjani', 'Gili Islands', 'Sendang Gile Waterfall', 'Sasak Villages', 'South Lombok Beaches'],
        wildlife: ['Rinjani Scops Owl', 'Black Ebony Leaf Monkey', 'Deer', 'Wild Boars', 'Sea Turtles'],
        economy: ['Tourism', 'Agriculture', 'Fishing', 'Pearl Farming', 'Weaving'],
        bestTimeToVisit: 'May-September'
    },
    {
        id: 'flores',
        name: 'Flores',
        countries: [{ name: 'Indonesia', code: 'ID' }],
        continent: 'Asia',
        ocean: 'Indian Ocean',
        islandType: 'volcanic',
        area: 14300,
        population: 1900000,
        highestPoint: { name: 'Mount Ranaka', elevation: 2350 },
        coordinates: [-8.6500, 121.0000],
        image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&h=600&fit=crop',
        climate: 'Tropical',
        beaches: [
            { name: 'Paga Beach', coordinates: [-8.6833, 121.8167] },
            { name: 'Koka Beach', coordinates: [-8.6667, 121.9500] },
            { name: 'Riung 17 Islands', coordinates: [-8.4167, 121.0333] },
            { name: 'Kanawa Island Beach', coordinates: [-8.4500, 119.7333] }
        ],
        cities: [
            { name: 'Labuan Bajo', coordinates: [-8.4833, 119.8833], population: 24000 },
            { name: 'Ende', coordinates: [-8.8500, 121.6500], population: 77000 },
            { name: 'Maumere', coordinates: [-8.6167, 122.2167], population: 70000 },
            { name: 'Ruteng', coordinates: [-8.6167, 120.4667], population: 45000 }
        ],
        attractions: ['Kelimutu Crater Lakes', 'Komodo Gateway', 'Spider Web Rice Fields', 'Traditional Villages', 'Cunca Wulang Waterfall'],
        wildlife: ['Komodo Dragons (nearby)', 'Flying Foxes', 'Macaques', 'Reef Fish', 'Manta Rays'],
        economy: ['Tourism', 'Agriculture', 'Fishing', 'Coffee', 'Weaving'],
        bestTimeToVisit: 'April-November'
    },
    {
        id: 'bunaken',
        name: 'Bunaken',
        countries: [{ name: 'Indonesia', code: 'ID' }],
        continent: 'Asia',
        ocean: 'Pacific Ocean',
        islandType: 'coral',
        area: 8,
        population: 900,
        highestPoint: { name: 'Bunaken Hill', elevation: 150 },
        coordinates: [1.6167, 124.7500],
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop',
        climate: 'Tropical',
        beaches: [
            { name: 'Liang Beach', coordinates: [1.6333, 124.7667] },
            { name: 'Pangalisang Beach', coordinates: [1.6167, 124.7333] },
            { name: 'Bunaken Beach', coordinates: [1.6167, 124.7500] }
        ],
        cities: [
            { name: 'Bunaken Village', coordinates: [1.6167, 124.7500], population: 900 }
        ],
        attractions: ['Bunaken Marine Park', 'Wall Diving', 'Snorkeling', 'Manado Tua View', 'Coral Gardens'],
        wildlife: ['Sea Turtles', 'Napoleon Wrasse', 'Reef Sharks', 'Barracuda', 'Cuttlefish'],
        economy: ['Diving Tourism', 'Marine Conservation', 'Fishing', 'Hospitality', 'Boat Services'],
        bestTimeToVisit: 'March-October'
    },
    {
        id: 'perhentian',
        name: 'Perhentian Islands',
        countries: [{ name: 'Malaysia', code: 'MY' }],
        continent: 'Asia',
        ocean: 'Pacific Ocean',
        islandType: 'continental',
        area: 15,
        population: 2000,
        highestPoint: { name: 'Perhentian Besar Peak', elevation: 280 },
        coordinates: [5.9000, 102.7500],
        image: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800&h=600&fit=crop',
        climate: 'Tropical',
        beaches: [
            { name: 'Long Beach', coordinates: [5.9167, 102.7500] },
            { name: 'Coral Bay', coordinates: [5.9000, 102.7333] },
            { name: 'Turtle Beach', coordinates: [5.8833, 102.7333] },
            { name: 'Adam & Eve Beach', coordinates: [5.9167, 102.7667] },
            { name: 'Romantic Beach', coordinates: [5.8833, 102.7500] }
        ],
        cities: [
            { name: 'Long Beach Village', coordinates: [5.9167, 102.7500], population: 800 },
            { name: 'Coral Bay Village', coordinates: [5.9000, 102.7333], population: 500 },
            { name: 'Perhentian Besar Village', coordinates: [5.8833, 102.7333], population: 700 }
        ],
        attractions: ['Turtle Watching', 'Snorkeling', 'Scuba Diving', 'Jungle Trekking', 'Island Hopping'],
        wildlife: ['Green Sea Turtles', 'Hawksbill Turtles', 'Blacktip Reef Sharks', 'Clownfish', 'Monitor Lizards'],
        economy: ['Tourism', 'Diving', 'Fishing', 'Guesthouses', 'Boat Services'],
        bestTimeToVisit: 'March-October'
    },
    {
        id: 'redang',
        name: 'Redang Island',
        countries: [{ name: 'Malaysia', code: 'MY' }],
        continent: 'Asia',
        ocean: 'Pacific Ocean',
        islandType: 'continental',
        area: 25,
        population: 1200,
        highestPoint: { name: 'Bukit Besar', elevation: 359 },
        coordinates: [5.7833, 103.0167],
        image: 'https://images.unsplash.com/photo-1540202404-a2f29016b523?w=800&h=600&fit=crop',
        climate: 'Tropical',
        beaches: [
            { name: 'Pasir Panjang Beach', coordinates: [5.7833, 103.0167] },
            { name: 'Teluk Kalong Beach', coordinates: [5.7667, 103.0167] },
            { name: 'Teluk Dalam Beach', coordinates: [5.7667, 103.0333] },
            { name: 'Chagar Hutang Beach', coordinates: [5.8000, 103.0333] }
        ],
        cities: [
            { name: 'Kampung Redang', coordinates: [5.7833, 103.0167], population: 1200 }
        ],
        attractions: ['Marine Park Snorkeling', 'Turtle Sanctuary', 'Scuba Diving', 'Jungle Walks', 'Sunset Views'],
        wildlife: ['Green Sea Turtles', 'Blacktip Sharks', 'Giant Clams', 'Parrotfish', 'Sea Eagles'],
        economy: ['Resort Tourism', 'Diving', 'Marine Conservation', 'Fishing', 'Hospitality'],
        bestTimeToVisit: 'March-October'
    }
];

// Make data available globally
if (typeof window !== 'undefined') {
    window.islandsData8 = islandsData8;
}
