/* ========================================
   ISLANDS EXPLORER - DATA FILE 7
   Islands 61-70: Caribbean & Atlantic Treasures
======================================== */

const islandsData7 = [
    {
        id: 'trinidad',
        name: 'Trinidad',
        countries: [{ name: 'Trinidad and Tobago', code: 'TT' }],
        continent: 'South America',
        ocean: 'Caribbean Sea',
        islandType: 'continental',
        area: 4768,
        population: 1328018,
        highestPoint: { name: 'El Cerro del Aripo', elevation: 940 },
        coordinates: [10.4500, -61.2500],
        image: 'https://images.unsplash.com/photo-1580541631950-7282082b53ce?w=800&h=600&fit=crop',
        climate: 'Tropical',
        beaches: [
            { name: 'Maracas Bay', coordinates: [10.7500, -61.4333] },
            { name: 'Las Cuevas Beach', coordinates: [10.7667, -61.3833] },
            { name: 'Mayaro Beach', coordinates: [10.2500, -60.9833] },
            { name: 'Blanchisseuse Beach', coordinates: [10.7833, -61.3000] }
        ],
        cities: [
            { name: 'Port of Spain', coordinates: [10.6596, -61.5086], population: 544000 },
            { name: 'San Fernando', coordinates: [10.2833, -61.4667], population: 82997 },
            { name: 'Chaguanas', coordinates: [10.5167, -61.4000], population: 83516 },
            { name: 'Arima', coordinates: [10.6333, -61.2833], population: 35000 }
        ],
        attractions: ['Carnival', 'Pitch Lake', 'Asa Wright Nature Centre', 'Caroni Bird Sanctuary', 'Temple in the Sea'],
        wildlife: ['Scarlet Ibis', 'Leatherback Turtles', 'Ocelots', 'Red Howler Monkeys', 'Caiman'],
        economy: ['Oil & Gas', 'Petrochemicals', 'Tourism', 'Manufacturing', 'Agriculture'],
        bestTimeToVisit: 'January-May (Carnival in February)'
    },
    {
        id: 'aruba',
        name: 'Aruba',
        countries: [{ name: 'Netherlands', code: 'NL' }],
        continent: 'South America',
        ocean: 'Caribbean Sea',
        islandType: 'continental',
        area: 180,
        population: 107394,
        highestPoint: { name: 'Mount Jamanota', elevation: 188 },
        coordinates: [12.5186, -69.9628],
        image: 'https://images.unsplash.com/photo-1580935046482-d1c7af490c20?w=800&h=600&fit=crop',
        climate: 'Tropical Semi-arid',
        beaches: [
            { name: 'Eagle Beach', coordinates: [12.4833, -70.0333] },
            { name: 'Palm Beach', coordinates: [12.5333, -70.0500] },
            { name: 'Baby Beach', coordinates: [12.4167, -69.8667] },
            { name: 'Arashi Beach', coordinates: [12.5833, -70.0500] },
            { name: 'Malmok Beach', coordinates: [12.5667, -70.0500] }
        ],
        cities: [
            { name: 'Oranjestad', coordinates: [12.5186, -70.0358], population: 35000 },
            { name: 'San Nicolas', coordinates: [12.4333, -69.8833], population: 15000 },
            { name: 'Noord', coordinates: [12.5667, -70.0167], population: 20000 },
            { name: 'Santa Cruz', coordinates: [12.5000, -69.9667], population: 12000 }
        ],
        attractions: ['California Lighthouse', 'Arikok National Park', 'Natural Pool', 'Casibari Rock Formations', 'Butterfly Farm'],
        wildlife: ['Divi-divi Trees', 'Aruban Whiptail Lizards', 'Burrowing Owls', 'Sea Turtles', 'Parakeets'],
        economy: ['Tourism', 'Oil Refining', 'Banking', 'Aloe Production', 'Retail'],
        bestTimeToVisit: 'Year-round (outside hurricane belt)'
    },
    {
        id: 'curacao',
        name: 'Curaçao',
        countries: [{ name: 'Netherlands', code: 'NL' }],
        continent: 'South America',
        ocean: 'Caribbean Sea',
        islandType: 'continental',
        area: 444,
        population: 158986,
        highestPoint: { name: 'Sint Christoffelberg', elevation: 375 },
        coordinates: [12.1696, -68.9900],
        image: 'https://images.unsplash.com/photo-1589519160732-57fc6fdf5c8e?w=800&h=600&fit=crop',
        climate: 'Tropical Semi-arid',
        beaches: [
            { name: 'Cas Abao Beach', coordinates: [12.2333, -69.0833] },
            { name: 'Playa Kenepa', coordinates: [12.3333, -69.1500] },
            { name: 'Mambo Beach', coordinates: [12.0833, -68.9167] },
            { name: 'Playa Porto Mari', coordinates: [12.2500, -69.1000] },
            { name: 'Jan Thiel Beach', coordinates: [12.0833, -68.8667] }
        ],
        cities: [
            { name: 'Willemstad', coordinates: [12.1167, -68.9333], population: 150000 },
            { name: 'Barber', coordinates: [12.1667, -68.9833], population: 3000 },
            { name: 'Sint Willibrordus', coordinates: [12.2333, -69.0833], population: 2500 }
        ],
        attractions: ['Willemstad UNESCO Site', 'Queen Emma Bridge', 'Shete Boka National Park', 'Hato Caves', 'Curaçao Sea Aquarium'],
        wildlife: ['White-tailed Deer', 'Curaçao Barn Owl', 'Flamingos', 'Sea Turtles', 'Blue Iguanas'],
        economy: ['Tourism', 'Oil Refining', 'Financial Services', 'Trade', 'Shipping'],
        bestTimeToVisit: 'Year-round (outside hurricane belt)'
    },
    {
        id: 'st-lucia',
        name: 'Saint Lucia',
        countries: [{ name: 'Saint Lucia', code: 'LC' }],
        continent: 'North America',
        ocean: 'Caribbean Sea',
        islandType: 'volcanic',
        area: 617,
        population: 183629,
        highestPoint: { name: 'Mount Gimie', elevation: 950 },
        coordinates: [13.9094, -60.9789],
        image: 'https://images.unsplash.com/photo-1580548834977-4e3e60dfd6b2?w=800&h=600&fit=crop',
        climate: 'Tropical',
        beaches: [
            { name: 'Reduit Beach', coordinates: [14.0667, -60.9500] },
            { name: 'Anse Chastanet', coordinates: [13.8667, -61.0667] },
            { name: 'Sugar Beach', coordinates: [13.8333, -61.0667] },
            { name: 'Marigot Bay', coordinates: [13.9667, -61.0333] },
            { name: 'Anse des Pitons', coordinates: [13.8167, -61.0667] }
        ],
        cities: [
            { name: 'Castries', coordinates: [14.0101, -60.9875], population: 22000 },
            { name: 'Vieux Fort', coordinates: [13.7167, -60.9500], population: 4500 },
            { name: 'Soufrière', coordinates: [13.8500, -61.0500], population: 8000 },
            { name: 'Gros Islet', coordinates: [14.0833, -60.9500], population: 25000 }
        ],
        attractions: ['The Pitons', 'Sulphur Springs', 'Diamond Falls', 'Pigeon Island', 'Tet Paul Nature Trail'],
        wildlife: ['Saint Lucia Parrot', 'Boa Constrictors', 'Agouti', 'Fer-de-Lance', 'Hummingbirds'],
        economy: ['Tourism', 'Bananas', 'Manufacturing', 'Financial Services', 'Cocoa'],
        bestTimeToVisit: 'December-April'
    },
    {
        id: 'antigua',
        name: 'Antigua',
        countries: [{ name: 'Antigua and Barbuda', code: 'AG' }],
        continent: 'North America',
        ocean: 'Caribbean Sea',
        islandType: 'coral',
        area: 280,
        population: 97120,
        highestPoint: { name: 'Mount Obama (Boggy Peak)', elevation: 402 },
        coordinates: [17.0747, -61.8175],
        image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&h=600&fit=crop',
        climate: 'Tropical',
        beaches: [
            { name: 'Dickenson Bay', coordinates: [17.1333, -61.8500] },
            { name: 'Half Moon Bay', coordinates: [17.0333, -61.7000] },
            { name: 'Valley Church Beach', coordinates: [17.0333, -61.8833] },
            { name: 'Jolly Beach', coordinates: [17.0500, -61.8833] },
            { name: 'Darkwood Beach', coordinates: [17.0333, -61.8833] }
        ],
        cities: [
            { name: 'St. John\'s', coordinates: [17.1175, -61.8456], population: 22634 },
            { name: 'All Saints', coordinates: [17.0667, -61.7833], population: 3412 },
            { name: 'Liberta', coordinates: [17.0333, -61.7833], population: 2239 },
            { name: 'English Harbour', coordinates: [17.0167, -61.7667], population: 1500 }
        ],
        attractions: ['Nelson\'s Dockyard', 'Shirley Heights', 'Devil\'s Bridge', 'Stingray City', 'Betty\'s Hope Plantation'],
        wildlife: ['Frigatebirds', 'Hawksbill Turtles', 'Fallow Deer', 'West Indian Whistling Duck', 'Pelicans'],
        economy: ['Tourism', 'Financial Services', 'Construction', 'Manufacturing', 'Agriculture'],
        bestTimeToVisit: 'December-April'
    },
    {
        id: 'grand-cayman',
        name: 'Grand Cayman',
        countries: [{ name: 'United Kingdom', code: 'GB' }],
        continent: 'North America',
        ocean: 'Caribbean Sea',
        islandType: 'coral',
        area: 197,
        population: 64420,
        highestPoint: { name: 'The Bluff', elevation: 43 },
        coordinates: [19.3133, -81.2546],
        image: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800&h=600&fit=crop',
        climate: 'Tropical',
        beaches: [
            { name: 'Seven Mile Beach', coordinates: [19.3500, -81.3833] },
            { name: 'Rum Point', coordinates: [19.3667, -81.1667] },
            { name: 'Smith Cove', coordinates: [19.2833, -81.3833] },
            { name: 'Starfish Point', coordinates: [19.3833, -81.1667] },
            { name: 'Cemetery Beach', coordinates: [19.3667, -81.3833] }
        ],
        cities: [
            { name: 'George Town', coordinates: [19.2867, -81.3744], population: 34399 },
            { name: 'West Bay', coordinates: [19.3667, -81.4000], population: 11269 },
            { name: 'Bodden Town', coordinates: [19.2833, -81.2500], population: 10341 }
        ],
        attractions: ['Stingray City', 'Seven Mile Beach', 'Cayman Crystal Caves', 'Queen Elizabeth II Botanic Park', 'Hell'],
        wildlife: ['Blue Iguanas', 'Stingrays', 'Nurse Sharks', 'Green Sea Turtles', 'Frigatebirds'],
        economy: ['Financial Services', 'Tourism', 'Real Estate', 'Insurance', 'Shipping'],
        bestTimeToVisit: 'November-April'
    },
    {
        id: 'bermuda',
        name: 'Bermuda',
        countries: [{ name: 'United Kingdom', code: 'GB' }],
        continent: 'North America',
        ocean: 'Atlantic Ocean',
        islandType: 'coral',
        area: 54,
        population: 64055,
        highestPoint: { name: 'Town Hill', elevation: 79 },
        coordinates: [32.3078, -64.7505],
        image: 'https://images.unsplash.com/photo-1570012505638-65f0e4f0f7c0?w=800&h=600&fit=crop',
        climate: 'Subtropical',
        beaches: [
            { name: 'Horseshoe Bay', coordinates: [32.2333, -64.8333] },
            { name: 'Elbow Beach', coordinates: [32.2833, -64.7667] },
            { name: 'Warwick Long Bay', coordinates: [32.2500, -64.8167] },
            { name: 'Tobacco Bay', coordinates: [32.3833, -64.6667] },
            { name: 'Jobson\'s Cove', coordinates: [32.2500, -64.8333] }
        ],
        cities: [
            { name: 'Hamilton', coordinates: [32.2942, -64.7839], population: 854 },
            { name: 'St. George\'s', coordinates: [32.3833, -64.6667], population: 1896 },
            { name: 'Somerset', coordinates: [32.3167, -64.8667], population: 5000 }
        ],
        attractions: ['Crystal Caves', 'Royal Naval Dockyard', 'St. George\'s UNESCO Site', 'Pink Sand Beaches', 'Gibbs Hill Lighthouse'],
        wildlife: ['Bermuda Petrel (Cahow)', 'Bermuda Skink', 'Yellowfin Grouper', 'Humpback Whales', 'Longtail Birds'],
        economy: ['Financial Services', 'Insurance', 'Tourism', 'Reinsurance', 'Shipping'],
        bestTimeToVisit: 'March-November'
    },
    {
        id: 'nassau-bahamas',
        name: 'New Providence (Nassau)',
        countries: [{ name: 'Bahamas', code: 'BS' }],
        continent: 'North America',
        ocean: 'Atlantic Ocean',
        islandType: 'coral',
        area: 207,
        population: 274400,
        highestPoint: { name: 'Bennett\'s Hill', elevation: 37 },
        coordinates: [25.0480, -77.3554],
        image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800&h=600&fit=crop',
        climate: 'Tropical',
        beaches: [
            { name: 'Cable Beach', coordinates: [25.0833, -77.4167] },
            { name: 'Junkanoo Beach', coordinates: [25.0833, -77.3333] },
            { name: 'Love Beach', coordinates: [25.0500, -77.5000] },
            { name: 'Cabbage Beach', coordinates: [25.0833, -77.3167] },
            { name: 'Goodman\'s Bay', coordinates: [25.0833, -77.3667] }
        ],
        cities: [
            { name: 'Nassau', coordinates: [25.0600, -77.3450], population: 274400 },
            { name: 'Paradise Island', coordinates: [25.0833, -77.3167], population: 5000 }
        ],
        attractions: ['Atlantis Paradise Island', 'Queen\'s Staircase', 'Fort Charlotte', 'Blue Lagoon Island', 'Nassau Straw Market'],
        wildlife: ['Caribbean Flamingos', 'Swimming Pigs (nearby)', 'Nurse Sharks', 'Stingrays', 'Sea Turtles'],
        economy: ['Tourism', 'Banking', 'Financial Services', 'Shipping', 'Real Estate'],
        bestTimeToVisit: 'December-April'
    },
    {
        id: 'grand-turk',
        name: 'Grand Turk',
        countries: [{ name: 'United Kingdom', code: 'GB' }],
        continent: 'North America',
        ocean: 'Atlantic Ocean',
        islandType: 'coral',
        area: 18,
        population: 5000,
        highestPoint: { name: 'North Creek Hill', elevation: 23 },
        coordinates: [21.4608, -71.1364],
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop',
        climate: 'Tropical',
        beaches: [
            { name: 'Governor\'s Beach', coordinates: [21.4333, -71.1333] },
            { name: 'Pillory Beach', coordinates: [21.4667, -71.1333] },
            { name: 'Cockburn Beach', coordinates: [21.4667, -71.1333] },
            { name: 'White Sands Beach', coordinates: [21.4833, -71.1333] }
        ],
        cities: [
            { name: 'Cockburn Town', coordinates: [21.4617, -71.1417], population: 5000 }
        ],
        attractions: ['Grand Turk Lighthouse', 'Turks and Caicos National Museum', 'Whale Watching', 'Wall Diving', 'Salt Ponds'],
        wildlife: ['Humpback Whales', 'Donkeys', 'Flamingos', 'Sea Turtles', 'Eagle Rays'],
        economy: ['Tourism', 'Cruise Ships', 'Fishing', 'Financial Services', 'Salt'],
        bestTimeToVisit: 'January-April (whale season)'
    },
    {
        id: 'virgin-gorda',
        name: 'Virgin Gorda',
        countries: [{ name: 'United Kingdom', code: 'GB' }],
        continent: 'North America',
        ocean: 'Caribbean Sea',
        islandType: 'volcanic',
        area: 21,
        population: 4000,
        highestPoint: { name: 'Virgin Peak', elevation: 414 },
        coordinates: [18.4833, -64.4333],
        image: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=800&h=600&fit=crop',
        climate: 'Tropical',
        beaches: [
            { name: 'The Baths', coordinates: [18.4333, -64.4333] },
            { name: 'Spring Bay', coordinates: [18.4417, -64.4333] },
            { name: 'Savannah Bay', coordinates: [18.4667, -64.4000] },
            { name: 'Mahoe Bay', coordinates: [18.4833, -64.3833] },
            { name: 'Leverick Bay', coordinates: [18.5000, -64.3833] }
        ],
        cities: [
            { name: 'Spanish Town', coordinates: [18.4500, -64.4333], population: 1500 },
            { name: 'The Valley', coordinates: [18.4667, -64.4167], population: 1200 },
            { name: 'North Sound', coordinates: [18.5000, -64.3667], population: 500 }
        ],
        attractions: ['The Baths National Park', 'Gorda Peak National Park', 'Copper Mine Point', 'North Sound', 'Devil\'s Bay'],
        wildlife: ['Anegada Rock Iguana', 'Hermit Crabs', 'Pelicans', 'Sea Turtles', 'Tropical Fish'],
        economy: ['Tourism', 'Yachting', 'Real Estate', 'Fishing', 'Hospitality'],
        bestTimeToVisit: 'December-May'
    }
];

// Make data available globally
if (typeof window !== 'undefined') {
    window.islandsData7 = islandsData7;
}
