/* ========================================
   ISLANDS EXPLORER - DATA FILE 1
   Islands 1-10: Largest Islands
======================================== */

const islandsData1 = [
    {
        id: 'greenland',
        name: 'Greenland',
        countries: [{ name: 'Denmark', code: 'DK' }, { name: 'Greenland', code: 'GL' }],
        continent: 'North America',
        ocean: 'Arctic Ocean',
        islandType: 'continental',
        area: 2166086,
        population: 56421,
        highestPoint: { name: 'Gunnbjørn Fjeld', elevation: 3694 },
        coordinates: [71.7069, -42.6043],
        image: 'https://images.unsplash.com/photo-1520769669658-f07657f5a307?w=800&h=600&fit=crop',
        climate: 'Arctic',
        beaches: [
            { name: 'Narsaq Beach', coordinates: [60.9167, -46.0500] },
            { name: 'Qaqortoq Coast', coordinates: [60.7167, -46.0333] }
        ],
        cities: [
            { name: 'Nuuk', coordinates: [64.1814, -51.6941], population: 19604 },
            { name: 'Ilulissat', coordinates: [69.2198, -51.0986], population: 4670 },
            { name: 'Qaqortoq', coordinates: [60.7184, -46.0349], population: 3050 },
            { name: 'Sisimiut', coordinates: [66.9395, -53.6735], population: 5460 }
        ],
        attractions: ['Northern Lights', 'Ilulissat Icefjord', 'Greenland Ice Sheet', 'Midnight Sun', 'Dog Sledding'],
        wildlife: ['Polar Bears', 'Arctic Foxes', 'Musk Oxen', 'Reindeer', 'Whales', 'Seals'],
        economy: ['Fishing', 'Mining', 'Tourism', 'Hunting'],
        bestTimeToVisit: 'June-September'
    },
    {
        id: 'new-guinea',
        name: 'New Guinea',
        countries: [{ name: 'Indonesia', code: 'ID' }, { name: 'Papua New Guinea', code: 'PG' }],
        continent: 'Oceania',
        ocean: 'Pacific Ocean',
        islandType: 'continental',
        area: 785753,
        population: 13000000,
        highestPoint: { name: 'Puncak Jaya', elevation: 4884 },
        coordinates: [-5.0122, 141.3470],
        image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=800&h=600&fit=crop',
        climate: 'Tropical',
        beaches: [
            { name: 'Tufi Beach', coordinates: [-9.0833, 149.3167] },
            { name: 'Madang Beach', coordinates: [-5.2167, 145.8000] },
            { name: 'Raja Ampat Coast', coordinates: [-0.5897, 130.1017] }
        ],
        cities: [
            { name: 'Port Moresby', coordinates: [-9.4438, 147.1803], population: 364145 },
            { name: 'Jayapura', coordinates: [-2.5333, 140.7167], population: 315872 },
            { name: 'Lae', coordinates: [-6.7333, 147.0000], population: 100677 },
            { name: 'Madang', coordinates: [-5.2167, 145.8000], population: 27420 }
        ],
        attractions: ['Kokoda Track', 'Sepik River', 'Tribal Villages', 'Bird of Paradise', 'Coral Reefs'],
        wildlife: ['Birds of Paradise', 'Tree Kangaroos', 'Cassowaries', 'Crocodiles', 'Cuscus'],
        economy: ['Mining', 'Agriculture', 'Forestry', 'Fishing', 'Oil & Gas'],
        bestTimeToVisit: 'May-October'
    },
    {
        id: 'borneo',
        name: 'Borneo',
        countries: [{ name: 'Indonesia', code: 'ID' }, { name: 'Malaysia', code: 'MY' }, { name: 'Brunei', code: 'BN' }],
        continent: 'Asia',
        ocean: 'Pacific Ocean',
        islandType: 'continental',
        area: 748168,
        population: 21300000,
        highestPoint: { name: 'Mount Kinabalu', elevation: 4095 },
        coordinates: [0.9619, 114.5548],
        image: 'https://images.unsplash.com/photo-1596005554384-d293674c91d7?w=800&h=600&fit=crop',
        climate: 'Tropical',
        beaches: [
            { name: 'Sipadan Island', coordinates: [4.1147, 118.6283] },
            { name: 'Kota Kinabalu Beach', coordinates: [5.9804, 116.0735] },
            { name: 'Derawan Islands', coordinates: [2.2833, 118.2500] }
        ],
        cities: [
            { name: 'Banjarmasin', coordinates: [-3.3186, 114.5943], population: 675440 },
            { name: 'Kota Kinabalu', coordinates: [5.9804, 116.0735], population: 500421 },
            { name: 'Kuching', coordinates: [1.5535, 110.3593], population: 325132 },
            { name: 'Balikpapan', coordinates: [-1.2675, 116.8289], population: 701066 }
        ],
        attractions: ['Mount Kinabalu', 'Sepilok Orangutan Sanctuary', 'Kinabatangan River', 'Mulu Caves', 'Rainforest Canopy Walks'],
        wildlife: ['Orangutans', 'Proboscis Monkeys', 'Pygmy Elephants', 'Sun Bears', 'Hornbills'],
        economy: ['Oil & Gas', 'Palm Oil', 'Timber', 'Tourism', 'Agriculture'],
        bestTimeToVisit: 'March-October'
    },
    {
        id: 'madagascar',
        name: 'Madagascar',
        countries: [{ name: 'Madagascar', code: 'MG' }],
        continent: 'Africa',
        ocean: 'Indian Ocean',
        islandType: 'continental',
        area: 587041,
        population: 28400000,
        highestPoint: { name: 'Maromokotro', elevation: 2876 },
        coordinates: [-18.7669, 46.8691],
        image: 'https://images.unsplash.com/photo-1564653299516-2e0764ee2919?w=800&h=600&fit=crop',
        climate: 'Tropical',
        beaches: [
            { name: 'Nosy Be Beach', coordinates: [-13.3167, 48.2667] },
            { name: 'Ifaty Beach', coordinates: [-23.1500, 43.6167] },
            { name: 'Île Sainte-Marie', coordinates: [-17.0000, 49.8500] }
        ],
        cities: [
            { name: 'Antananarivo', coordinates: [-18.8792, 47.5079], population: 1391433 },
            { name: 'Toamasina', coordinates: [-18.1492, 49.4023], population: 326236 },
            { name: 'Antsirabe', coordinates: [-19.8659, 47.0333], population: 257163 },
            { name: 'Mahajanga', coordinates: [-15.7167, 46.3167], population: 226578 }
        ],
        attractions: ['Avenue of the Baobabs', 'Tsingy de Bemaraha', 'Lemur Reserves', 'Rainforests', 'Isalo National Park'],
        wildlife: ['Lemurs', 'Chameleons', 'Fossas', 'Tenrecs', 'Aye-ayes'],
        economy: ['Agriculture', 'Mining', 'Fishing', 'Tourism', 'Textiles'],
        bestTimeToVisit: 'April-November'
    },
    {
        id: 'baffin-island',
        name: 'Baffin Island',
        countries: [{ name: 'Canada', code: 'CA' }],
        continent: 'North America',
        ocean: 'Arctic Ocean',
        islandType: 'continental',
        area: 507451,
        population: 13000,
        highestPoint: { name: 'Mount Odin', elevation: 2143 },
        coordinates: [68.0000, -70.0000],
        image: 'https://images.unsplash.com/photo-1494564605686-2e931f77a8e2?w=800&h=600&fit=crop',
        climate: 'Arctic',
        beaches: [
            { name: 'Pangnirtung Fjord Coast', coordinates: [66.1451, -65.7125] }
        ],
        cities: [
            { name: 'Iqaluit', coordinates: [63.7467, -68.5170], population: 7740 },
            { name: 'Pangnirtung', coordinates: [66.1451, -65.7125], population: 1504 },
            { name: 'Pond Inlet', coordinates: [72.6841, -77.9556], population: 1617 },
            { name: 'Cape Dorset', coordinates: [64.2297, -76.5297], population: 1441 }
        ],
        attractions: ['Auyuittuq National Park', 'Northern Lights', 'Sirmilik National Park', 'Inuit Art', 'Arctic Wildlife'],
        wildlife: ['Polar Bears', 'Caribou', 'Arctic Wolves', 'Narwhals', 'Beluga Whales', 'Snowy Owls'],
        economy: ['Mining', 'Fishing', 'Tourism', 'Government Services', 'Arts & Crafts'],
        bestTimeToVisit: 'June-August'
    },
    {
        id: 'sumatra',
        name: 'Sumatra',
        countries: [{ name: 'Indonesia', code: 'ID' }],
        continent: 'Asia',
        ocean: 'Indian Ocean',
        islandType: 'volcanic',
        area: 473481,
        population: 58000000,
        highestPoint: { name: 'Mount Kerinci', elevation: 3805 },
        coordinates: [0.5897, 101.3431],
        image: 'https://images.unsplash.com/photo-1591792111137-5b8219d5fad6?w=800&h=600&fit=crop',
        climate: 'Tropical',
        beaches: [
            { name: 'Padang Beach', coordinates: [-0.9471, 100.4172] },
            { name: 'Mentawai Islands', coordinates: [-2.1833, 99.7833] },
            { name: 'Lake Toba Shore', coordinates: [2.6167, 98.8333] }
        ],
        cities: [
            { name: 'Medan', coordinates: [3.5952, 98.6722], population: 2435252 },
            { name: 'Palembang', coordinates: [-2.9761, 104.7754], population: 1708413 },
            { name: 'Padang', coordinates: [-0.9471, 100.4172], population: 909040 },
            { name: 'Pekanbaru', coordinates: [0.5071, 101.4478], population: 1064566 }
        ],
        attractions: ['Lake Toba', 'Mount Kerinci', 'Bukit Lawang Orangutans', 'Mentawai Surfing', 'Gunung Leuser National Park'],
        wildlife: ['Sumatran Tigers', 'Sumatran Orangutans', 'Sumatran Rhinoceros', 'Sumatran Elephants', 'Sun Bears'],
        economy: ['Oil & Gas', 'Palm Oil', 'Rubber', 'Mining', 'Agriculture'],
        bestTimeToVisit: 'May-September'
    },
    {
        id: 'honshu',
        name: 'Honshu',
        countries: [{ name: 'Japan', code: 'JP' }],
        continent: 'Asia',
        ocean: 'Pacific Ocean',
        islandType: 'volcanic',
        area: 227960,
        population: 104000000,
        highestPoint: { name: 'Mount Fuji', elevation: 3776 },
        coordinates: [36.2048, 138.2529],
        image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&h=600&fit=crop',
        climate: 'Temperate',
        beaches: [
            { name: 'Shirahama Beach', coordinates: [33.6778, 135.3389] },
            { name: 'Kamakura Beach', coordinates: [35.3103, 139.5467] },
            { name: 'Enoshima', coordinates: [35.3000, 139.4833] }
        ],
        cities: [
            { name: 'Tokyo', coordinates: [35.6762, 139.6503], population: 13960000 },
            { name: 'Yokohama', coordinates: [35.4437, 139.6380], population: 3748781 },
            { name: 'Osaka', coordinates: [34.6937, 135.5023], population: 2753862 },
            { name: 'Nagoya', coordinates: [35.1815, 136.9066], population: 2320361 },
            { name: 'Kyoto', coordinates: [35.0116, 135.7681], population: 1463723 }
        ],
        attractions: ['Mount Fuji', 'Tokyo Skyline', 'Kyoto Temples', 'Hiroshima Peace Memorial', 'Japanese Alps'],
        wildlife: ['Japanese Macaques', 'Tanuki', 'Asian Black Bears', 'Japanese Serows', 'Red-crowned Cranes'],
        economy: ['Manufacturing', 'Technology', 'Finance', 'Tourism', 'Automotive'],
        bestTimeToVisit: 'March-May, September-November'
    },
    {
        id: 'victoria-island',
        name: 'Victoria Island',
        countries: [{ name: 'Canada', code: 'CA' }],
        continent: 'North America',
        ocean: 'Arctic Ocean',
        islandType: 'continental',
        area: 217291,
        population: 2100,
        highestPoint: { name: 'Unnamed Peak', elevation: 655 },
        coordinates: [71.0000, -110.0000],
        image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&h=600&fit=crop',
        climate: 'Arctic',
        beaches: [
            { name: 'Cambridge Bay Coast', coordinates: [69.1169, -105.0597] }
        ],
        cities: [
            { name: 'Cambridge Bay', coordinates: [69.1169, -105.0597], population: 1766 },
            { name: 'Ulukhaktok', coordinates: [70.7364, -117.7689], population: 396 }
        ],
        attractions: ['Northern Lights', 'Arctic Tundra', 'Midnight Sun', 'Inuit Heritage', 'Arctic Wildlife Viewing'],
        wildlife: ['Caribou', 'Musk Oxen', 'Arctic Foxes', 'Polar Bears', 'Arctic Hares', 'Peregrine Falcons'],
        economy: ['Government Services', 'Mining', 'Tourism', 'Traditional Hunting', 'Fishing'],
        bestTimeToVisit: 'June-August'
    },
    {
        id: 'great-britain',
        name: 'Great Britain',
        countries: [{ name: 'United Kingdom', code: 'GB' }],
        continent: 'Europe',
        ocean: 'Atlantic Ocean',
        islandType: 'continental',
        area: 209331,
        population: 63182000,
        highestPoint: { name: 'Ben Nevis', elevation: 1345 },
        coordinates: [54.0000, -2.0000],
        image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop',
        climate: 'Temperate Maritime',
        beaches: [
            { name: 'Brighton Beach', coordinates: [50.8225, -0.1372] },
            { name: 'Bournemouth Beach', coordinates: [50.7167, -1.8833] },
            { name: 'Cornwall Beaches', coordinates: [50.2660, -5.0527] },
            { name: 'Blackpool Beach', coordinates: [53.8175, -3.0357] }
        ],
        cities: [
            { name: 'London', coordinates: [51.5074, -0.1278], population: 8982000 },
            { name: 'Birmingham', coordinates: [52.4862, -1.8904], population: 1141816 },
            { name: 'Glasgow', coordinates: [55.8642, -4.2518], population: 635640 },
            { name: 'Liverpool', coordinates: [53.4084, -2.9916], population: 498042 },
            { name: 'Edinburgh', coordinates: [55.9533, -3.1883], population: 488050 }
        ],
        attractions: ['Big Ben', 'Stonehenge', 'Edinburgh Castle', 'Lake District', 'Scottish Highlands', 'Tower of London'],
        wildlife: ['Red Deer', 'Badgers', 'Red Squirrels', 'Puffins', 'Grey Seals', 'Red Foxes'],
        economy: ['Finance', 'Tourism', 'Manufacturing', 'Technology', 'Creative Industries'],
        bestTimeToVisit: 'May-September'
    },
    {
        id: 'ellesmere-island',
        name: 'Ellesmere Island',
        countries: [{ name: 'Canada', code: 'CA' }],
        continent: 'North America',
        ocean: 'Arctic Ocean',
        islandType: 'continental',
        area: 196236,
        population: 146,
        highestPoint: { name: 'Barbeau Peak', elevation: 2616 },
        coordinates: [80.0000, -80.0000],
        image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=800&h=600&fit=crop',
        climate: 'Arctic',
        beaches: [
            { name: 'Lake Hazen Shore', coordinates: [81.8333, -70.4167] }
        ],
        cities: [
            { name: 'Grise Fiord', coordinates: [76.4167, -82.9000], population: 129 },
            { name: 'Alert', coordinates: [82.5018, -62.3481], population: 62 }
        ],
        attractions: ['Quttinirpaaq National Park', 'Lake Hazen', 'Glaciers', 'Northernmost Settlement', 'Arctic Research Stations'],
        wildlife: ['Musk Oxen', 'Arctic Wolves', 'Peary Caribou', 'Arctic Hares', 'Polar Bears', 'Walruses'],
        economy: ['Research', 'Military', 'Government Services', 'Tourism'],
        bestTimeToVisit: 'June-August'
    }
];

// Make data available globally
if (typeof window !== 'undefined') {
    window.islandsData1 = islandsData1;
}
