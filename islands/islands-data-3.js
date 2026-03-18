/* ========================================
   ISLANDS EXPLORER - DATA FILE 3
   Islands 21-30: Notable Islands
======================================== */

const islandsData3 = [
    {
        id: 'sakhalin',
        name: 'Sakhalin',
        countries: [{ name: 'Russia', code: 'RU' }],
        continent: 'Asia',
        ocean: 'Pacific Ocean',
        islandType: 'continental',
        area: 72493,
        population: 490000,
        highestPoint: { name: 'Mount Lopatin', elevation: 1609 },
        coordinates: [50.6942, 142.9506],
        image: 'https://images.unsplash.com/photo-1551845041-63e8e76836ea?w=800&h=600&fit=crop',
        climate: 'Humid Continental',
        beaches: [
            { name: 'Aniva Bay', coordinates: [46.5000, 143.4167] },
            { name: 'Okhotsk Coast', coordinates: [52.0000, 143.0000] }
        ],
        cities: [
            { name: 'Yuzhno-Sakhalinsk', coordinates: [46.9641, 142.7285], population: 194882 },
            { name: 'Korsakov', coordinates: [46.6333, 142.7667], population: 33526 },
            { name: 'Kholmsk', coordinates: [47.0500, 142.0500], population: 28506 },
            { name: 'Okha', coordinates: [53.5833, 142.9333], population: 21506 }
        ],
        attractions: ['Vaida Mountain', 'Tyuleny Island', 'Burevestnik Volcano', 'Lake Tunaycha', 'Japanese Heritage Sites'],
        wildlife: ['Brown Bears', 'Steller Sea Lions', 'Gray Whales', 'Sakhalin Taimen', 'Sika Deer'],
        economy: ['Oil & Gas', 'Fishing', 'Forestry', 'Coal Mining', 'Agriculture'],
        bestTimeToVisit: 'June-September'
    },
    {
        id: 'sri-lanka',
        name: 'Sri Lanka',
        countries: [{ name: 'Sri Lanka', code: 'LK' }],
        continent: 'Asia',
        ocean: 'Indian Ocean',
        islandType: 'continental',
        area: 65610,
        population: 21800000,
        highestPoint: { name: 'Pidurutalagala', elevation: 2524 },
        coordinates: [7.8731, 80.7718],
        image: 'https://images.unsplash.com/photo-1586523969104-3ae3568b5280?w=800&h=600&fit=crop',
        climate: 'Tropical',
        beaches: [
            { name: 'Unawatuna Beach', coordinates: [6.0167, 80.2500] },
            { name: 'Mirissa Beach', coordinates: [5.9500, 80.4500] },
            { name: 'Arugam Bay', coordinates: [6.8500, 81.8333] },
            { name: 'Bentota Beach', coordinates: [6.4167, 79.9833] }
        ],
        cities: [
            { name: 'Colombo', coordinates: [6.9271, 79.8612], population: 752993 },
            { name: 'Kandy', coordinates: [7.2906, 80.6337], population: 125400 },
            { name: 'Galle', coordinates: [6.0535, 80.2210], population: 93118 },
            { name: 'Jaffna', coordinates: [9.6615, 80.0255], population: 88138 },
            { name: 'Negombo', coordinates: [7.2094, 79.8358], population: 142136 }
        ],
        attractions: ['Sigiriya Rock Fortress', 'Temple of the Tooth', 'Yala National Park', 'Galle Fort', 'Ella', 'Adam\'s Peak'],
        wildlife: ['Sri Lankan Elephants', 'Leopards', 'Sloth Bears', 'Blue Whales', 'Peacocks'],
        economy: ['Tourism', 'Tea Production', 'Textiles', 'Rubber', 'Gems'],
        bestTimeToVisit: 'December-March (West), April-September (East)'
    },
    {
        id: 'tasmania',
        name: 'Tasmania',
        countries: [{ name: 'Australia', code: 'AU' }],
        continent: 'Oceania',
        ocean: 'Pacific Ocean',
        islandType: 'continental',
        area: 68401,
        population: 541500,
        highestPoint: { name: 'Mount Ossa', elevation: 1617 },
        coordinates: [-42.0409, 146.8087],
        image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&h=600&fit=crop',
        climate: 'Temperate Oceanic',
        beaches: [
            { name: 'Wineglass Bay', coordinates: [-42.1333, 148.2833] },
            { name: 'Bay of Fires', coordinates: [-41.0833, 148.2833] },
            { name: 'Bruny Island Beach', coordinates: [-43.3000, 147.3167] }
        ],
        cities: [
            { name: 'Hobart', coordinates: [-42.8821, 147.3272], population: 240342 },
            { name: 'Launceston', coordinates: [-41.4332, 147.1441], population: 90000 },
            { name: 'Devonport', coordinates: [-41.1833, 146.3500], population: 30000 },
            { name: 'Burnie', coordinates: [-41.0667, 145.9000], population: 20000 }
        ],
        attractions: ['Cradle Mountain', 'Port Arthur', 'MONA', 'Freycinet National Park', 'Gordon River'],
        wildlife: ['Tasmanian Devils', 'Wombats', 'Platypus', 'Echidnas', 'Wallabies', 'Fairy Penguins'],
        economy: ['Tourism', 'Agriculture', 'Aquaculture', 'Mining', 'Forestry'],
        bestTimeToVisit: 'December-February'
    },
    {
        id: 'sicily',
        name: 'Sicily',
        countries: [{ name: 'Italy', code: 'IT' }],
        continent: 'Europe',
        ocean: 'Mediterranean Sea',
        islandType: 'volcanic',
        area: 25711,
        population: 4875290,
        highestPoint: { name: 'Mount Etna', elevation: 3357 },
        coordinates: [37.5994, 14.0154],
        image: 'https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=800&h=600&fit=crop',
        climate: 'Mediterranean',
        beaches: [
            { name: 'San Vito Lo Capo', coordinates: [38.1833, 12.7333] },
            { name: 'Scala dei Turchi', coordinates: [37.2833, 13.4667] },
            { name: 'Mondello Beach', coordinates: [38.2000, 13.3167] },
            { name: 'Isola Bella', coordinates: [37.8500, 15.3000] }
        ],
        cities: [
            { name: 'Palermo', coordinates: [38.1157, 13.3615], population: 676118 },
            { name: 'Catania', coordinates: [37.5079, 15.0830], population: 311584 },
            { name: 'Messina', coordinates: [38.1937, 15.5542], population: 227424 },
            { name: 'Syracuse', coordinates: [37.0755, 15.2866], population: 121171 },
            { name: 'Taormina', coordinates: [37.8525, 15.2866], population: 10872 }
        ],
        attractions: ['Mount Etna', 'Valley of the Temples', 'Taormina', 'Palermo Cathedral', 'Aeolian Islands'],
        wildlife: ['Sicilian Rock Partridge', 'Hermann\'s Tortoise', 'European Rabbits', 'Dolphins', 'Sea Turtles'],
        economy: ['Tourism', 'Agriculture', 'Wine Production', 'Fishing', 'Olive Oil'],
        bestTimeToVisit: 'April-June, September-October'
    },
    {
        id: 'sardinia',
        name: 'Sardinia',
        countries: [{ name: 'Italy', code: 'IT' }],
        continent: 'Europe',
        ocean: 'Mediterranean Sea',
        islandType: 'continental',
        area: 24090,
        population: 1611621,
        highestPoint: { name: 'Punta La Marmora', elevation: 1834 },
        coordinates: [40.1209, 9.0129],
        image: 'https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=800&h=600&fit=crop',
        climate: 'Mediterranean',
        beaches: [
            { name: 'La Pelosa Beach', coordinates: [40.9500, 8.2000] },
            { name: 'Cala Goloritzé', coordinates: [40.0833, 9.6333] },
            { name: 'Costa Smeralda', coordinates: [41.0833, 9.5167] },
            { name: 'Cala Mariolu', coordinates: [40.1000, 9.6167] }
        ],
        cities: [
            { name: 'Cagliari', coordinates: [39.2238, 9.1217], population: 154106 },
            { name: 'Sassari', coordinates: [40.7259, 8.5556], population: 127525 },
            { name: 'Olbia', coordinates: [40.9167, 9.5000], population: 60000 },
            { name: 'Alghero', coordinates: [40.5583, 8.3194], population: 44019 }
        ],
        attractions: ['Costa Smeralda', 'Nuraghe Su Nuraxi', 'Neptune\'s Grotto', 'Maddalena Archipelago', 'Cagliari Old Town'],
        wildlife: ['Sardinian Deer', 'Mouflon', 'Griffon Vultures', 'Bottlenose Dolphins', 'Flamingos'],
        economy: ['Tourism', 'Agriculture', 'Cork Production', 'Mining', 'Sheep Farming'],
        bestTimeToVisit: 'May-September'
    },
    {
        id: 'bali',
        name: 'Bali',
        countries: [{ name: 'Indonesia', code: 'ID' }],
        continent: 'Asia',
        ocean: 'Indian Ocean',
        islandType: 'volcanic',
        area: 5780,
        population: 4300000,
        highestPoint: { name: 'Mount Agung', elevation: 3142 },
        coordinates: [-8.4095, 115.1889],
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop',
        climate: 'Tropical',
        beaches: [
            { name: 'Kuta Beach', coordinates: [-8.7186, 115.1686] },
            { name: 'Seminyak Beach', coordinates: [-8.6883, 115.1553] },
            { name: 'Nusa Dua Beach', coordinates: [-8.8000, 115.2333] },
            { name: 'Uluwatu Beach', coordinates: [-8.8292, 115.0850] }
        ],
        cities: [
            { name: 'Denpasar', coordinates: [-8.6705, 115.2126], population: 788589 },
            { name: 'Ubud', coordinates: [-8.5069, 115.2624], population: 74320 },
            { name: 'Kuta', coordinates: [-8.7186, 115.1686], population: 65000 },
            { name: 'Seminyak', coordinates: [-8.6883, 115.1553], population: 30000 }
        ],
        attractions: ['Tanah Lot Temple', 'Tegallalang Rice Terraces', 'Uluwatu Temple', 'Sacred Monkey Forest', 'Mount Batur'],
        wildlife: ['Long-tailed Macaques', 'Bali Starlings', 'Civets', 'Flying Foxes', 'Sea Turtles'],
        economy: ['Tourism', 'Agriculture', 'Handicrafts', 'Rice Farming', 'Fishing'],
        bestTimeToVisit: 'April-October'
    },
    {
        id: 'hawaii-big-island',
        name: 'Hawaii (Big Island)',
        countries: [{ name: 'United States', code: 'US' }],
        continent: 'Oceania',
        ocean: 'Pacific Ocean',
        islandType: 'volcanic',
        area: 10430,
        population: 200983,
        highestPoint: { name: 'Mauna Kea', elevation: 4207 },
        coordinates: [19.5429, -155.6659],
        image: 'https://images.unsplash.com/photo-1542259009477-d625272157b7?w=800&h=600&fit=crop',
        climate: 'Tropical',
        beaches: [
            { name: 'Hapuna Beach', coordinates: [19.9833, -155.8167] },
            { name: 'Punalu\'u Black Sand Beach', coordinates: [19.1361, -155.5047] },
            { name: 'Mauna Kea Beach', coordinates: [20.0000, -155.8167] },
            { name: 'Kona Coast', coordinates: [19.6400, -155.9969] }
        ],
        cities: [
            { name: 'Hilo', coordinates: [19.7297, -155.0900], population: 45703 },
            { name: 'Kailua-Kona', coordinates: [19.6400, -155.9969], population: 14903 },
            { name: 'Waimea', coordinates: [20.0233, -155.6728], population: 10562 },
            { name: 'Captain Cook', coordinates: [19.4953, -155.9150], population: 3429 }
        ],
        attractions: ['Hawaii Volcanoes National Park', 'Mauna Kea Observatory', 'Akaka Falls', 'Kona Coffee Farms', 'Manta Ray Diving'],
        wildlife: ['Hawaiian Monk Seals', 'Green Sea Turtles', 'Humpback Whales', 'Nene Geese', 'Spinner Dolphins'],
        economy: ['Tourism', 'Agriculture', 'Coffee', 'Macadamia Nuts', 'Astronomy'],
        bestTimeToVisit: 'April-October'
    },
    {
        id: 'viti-levu',
        name: 'Viti Levu',
        countries: [{ name: 'Fiji', code: 'FJ' }],
        continent: 'Oceania',
        ocean: 'Pacific Ocean',
        islandType: 'volcanic',
        area: 10388,
        population: 600000,
        highestPoint: { name: 'Mount Tomanivi', elevation: 1324 },
        coordinates: [-17.7765, 177.9885],
        image: 'https://images.unsplash.com/photo-1571366343168-631c5bcca7a4?w=800&h=600&fit=crop',
        climate: 'Tropical',
        beaches: [
            { name: 'Natadola Beach', coordinates: [-18.1000, 177.3167] },
            { name: 'Coral Coast', coordinates: [-18.1667, 177.6667] },
            { name: 'Denarau Beach', coordinates: [-17.7667, 177.3833] }
        ],
        cities: [
            { name: 'Suva', coordinates: [-18.1416, 178.4419], population: 93970 },
            { name: 'Nadi', coordinates: [-17.7765, 177.4356], population: 67349 },
            { name: 'Lautoka', coordinates: [-17.6167, 177.4500], population: 52500 },
            { name: 'Sigatoka', coordinates: [-18.1500, 177.5000], population: 10000 }
        ],
        attractions: ['Garden of the Sleeping Giant', 'Sri Siva Temple', 'Navua River', 'Colo-i-Suva Forest Park', 'Traditional Villages'],
        wildlife: ['Flying Foxes', 'Crested Iguanas', 'Fiji Parrots', 'Sea Turtles', 'Reef Fish'],
        economy: ['Tourism', 'Sugar Production', 'Fishing', 'Garment Industry', 'Mining'],
        bestTimeToVisit: 'May-October'
    },
    {
        id: 'cyprus',
        name: 'Cyprus',
        countries: [{ name: 'Cyprus', code: 'CY' }, { name: 'Northern Cyprus', code: 'CY' }],
        continent: 'Europe',
        ocean: 'Mediterranean Sea',
        islandType: 'continental',
        area: 9251,
        population: 1207359,
        highestPoint: { name: 'Mount Olympus', elevation: 1952 },
        coordinates: [35.1264, 33.4299],
        image: 'https://images.unsplash.com/photo-1581889470536-467bdbe30cd0?w=800&h=600&fit=crop',
        climate: 'Mediterranean',
        beaches: [
            { name: 'Nissi Beach', coordinates: [34.9833, 34.0000] },
            { name: 'Fig Tree Bay', coordinates: [34.9833, 34.0667] },
            { name: 'Coral Bay', coordinates: [34.8500, 32.3500] },
            { name: 'Lara Beach', coordinates: [35.0333, 32.2833] }
        ],
        cities: [
            { name: 'Nicosia', coordinates: [35.1856, 33.3823], population: 341900 },
            { name: 'Limassol', coordinates: [34.6841, 33.0379], population: 235056 },
            { name: 'Larnaca', coordinates: [34.9229, 33.6232], population: 144200 },
            { name: 'Paphos', coordinates: [34.7520, 32.4218], population: 66000 },
            { name: 'Famagusta', coordinates: [35.1167, 33.9333], population: 40920 }
        ],
        attractions: ['Paphos Archaeological Park', 'Troodos Mountains', 'Kykkos Monastery', 'Petra tou Romiou', 'Ancient Kourion'],
        wildlife: ['Mouflon', 'Flamingos', 'Sea Turtles', 'Cyprus Wheatear', 'Mediterranean Monk Seals'],
        economy: ['Tourism', 'Financial Services', 'Shipping', 'Real Estate', 'Agriculture'],
        bestTimeToVisit: 'April-June, September-November'
    },
    {
        id: 'corsica',
        name: 'Corsica',
        countries: [{ name: 'France', code: 'FR' }],
        continent: 'Europe',
        ocean: 'Mediterranean Sea',
        islandType: 'continental',
        area: 8680,
        population: 340440,
        highestPoint: { name: 'Monte Cinto', elevation: 2706 },
        coordinates: [42.0396, 9.0129],
        image: 'https://images.unsplash.com/photo-1568181505399-4d471bf42e1f?w=800&h=600&fit=crop',
        climate: 'Mediterranean',
        beaches: [
            { name: 'Palombaggia Beach', coordinates: [41.5167, 9.3167] },
            { name: 'Santa Giulia Beach', coordinates: [41.4833, 9.2833] },
            { name: 'Rondinara Beach', coordinates: [41.4667, 9.2667] },
            { name: 'Calvi Beach', coordinates: [42.5667, 8.7500] }
        ],
        cities: [
            { name: 'Ajaccio', coordinates: [41.9267, 8.7369], population: 71361 },
            { name: 'Bastia', coordinates: [42.6978, 9.4509], population: 48044 },
            { name: 'Corte', coordinates: [42.3000, 9.1500], population: 7689 },
            { name: 'Porto-Vecchio', coordinates: [41.5917, 9.2792], population: 12240 },
            { name: 'Calvi', coordinates: [42.5667, 8.7575], population: 5664 }
        ],
        attractions: ['GR20 Trail', 'Scandola Nature Reserve', 'Bonifacio Cliffs', 'Napoleon\'s Birthplace', 'Cap Corse'],
        wildlife: ['Corsican Red Deer', 'Mouflon', 'Bearded Vultures', 'Wild Boars', 'Corsican Nuthatch'],
        economy: ['Tourism', 'Agriculture', 'Wine Production', 'Chestnut Industry', 'Fishing'],
        bestTimeToVisit: 'May-September'
    }
];

// Make data available globally
if (typeof window !== 'undefined') {
    window.islandsData3 = islandsData3;
}
