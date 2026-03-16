// ============================================
// RIVERS DATA - TEST VERSION
// ============================================

const riversData = [
    {
        id: 1,
        name: "Nile",
        nativeName: "النيل",
        continent: "africa",
        countries: ["Egypt", "Sudan", "Uganda"],
        length: 6650,
        discharge: 2830,
        basinArea: 3349000,
        source: {
            name: "Lake Victoria",
            location: "Burundi",
            coordinates: [-2.5, 29.5],
            elevation: 1134
        },
        mouth: {
            name: "Mediterranean Sea",
            location: "Egypt",
            coordinates: [31.5, 30.4]
        },
        course: [
            [-2.5, 29.5],
            [15.6, 32.5],
            [30.0, 31.2],
            [31.5, 30.4]
        ],
        tributaries: [
            {
                name: "Blue Nile",
                length: 1450,
                source: "Ethiopia",
                confluence: "Khartoum",
                coordinates: [[11.5, 37.5], [15.6, 32.5]],
                flowDirection: "in"
            }
        ],
        distributaries: [
            {
                name: "Rosetta Branch",
                length: 220,
                mouth: "Mediterranean",
                coordinates: [[30.5, 31.0], [31.4, 30.4]],
                flowDirection: "out"
            }
        ],
        majorCities: [
            { name: "Cairo", country: "Egypt", population: 21000000, coordinates: [30.04, 31.24] }
        ],
        facts: {
            historical: "🏛️ Ancient Egyptian civilization",
            ecological: "🌿 Supports 95% of Egypt's population",
            economic: "💰 Aswan Dam generates 2,100 MW",
            cultural: "⭐ Worshipped as god Hapi",
            funFact: "🎭 Cleopatra sailed golden barges here!"
        },
        image: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=800",
        description: "World's longest river"
    },
    {
        id: 2,
        name: "Amazon",
        nativeName: "Rio Amazonas",
        continent: "south-america",
        countries: ["Brazil", "Peru", "Colombia"],
        length: 6400,
        discharge: 209000,
        basinArea: 7050000,
        source: {
            name: "Nevado Mismi",
            location: "Peru",
            coordinates: [-15.52, -71.69],
            elevation: 5170
        },
        mouth: {
            name: "Atlantic Ocean",
            location: "Brazil",
            coordinates: [-0.5, -49.0]
        },
        course: [
            [-15.52, -71.69],
            [-3.1, -60.0],
            [-0.5, -49.0]
        ],
        tributaries: [
            {
                name: "Rio Negro",
                length: 2250,
                source: "Colombia",
                confluence: "Manaus",
                coordinates: [[1.0, -67.0], [-3.1, -60.0]],
                flowDirection: "in"
            }
        ],
        distributaries: [],
        majorCities: [
            { name: "Manaus", country: "Brazil", population: 2200000, coordinates: [-3.1, -60.0] }
        ],
        facts: {
            historical: "🏛️ Explored in 1542",
            ecological: "🌿 10% of all species on Earth!",
            economic: "💰 20% of world's fresh water",
            cultural: "⭐ 400+ indigenous tribes",
            funFact: "🎭 Pink dolphins swim here!"
        },
        image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800",
        description: "Largest river by discharge"
    },
    {
        id: 3,
        name: "Yangtze",
        nativeName: "长江",
        continent: "asia",
        countries: ["China"],
        length: 6300,
        discharge: 30000,
        basinArea: 1800000,
        source: {
            name: "Tanggula Mountains",
            location: "Tibet",
            coordinates: [33.42, 91.17],
            elevation: 5042
        },
        mouth: {
            name: "East China Sea",
            location: "Shanghai",
            coordinates: [31.38, 121.97]
        },
        course: [
            [33.42, 91.17],
            [29.5, 106.5],
            [31.38, 121.97]
        ],
        tributaries: [
            {
                name: "Han River",
                length: 1577,
                source: "Shaanxi",
                confluence: "Wuhan",
                coordinates: [[33.0, 107.0], [30.6, 114.3]],
                flowDirection: "in"
            }
        ],
        distributaries: [],
        majorCities: [
            { name: "Shanghai", country: "China", population: 24870000, coordinates: [31.23, 121.47] }
        ],
        facts: {
            historical: "🏛️ Chinese civilization cradle",
            ecological: "🌿 Home to extinct Baiji dolphin",
            economic: "💰 Three Gorges Dam = largest power station!",
            cultural: "⭐ Inspired thousands of poems",
            funFact: "🎭 Visible from SPACE!"
        },
        image: "https://images.unsplash.com/photo-1537531383496-f4749b2e4a74?w=800",
        description: "Asia's longest river"
    }
];

// ============================================
// HELPER FUNCTIONS
// ============================================

function getRiverById(id) {
    return riversData.find(river => river.id === parseInt(id));
}

function getRiversByContinent(continent) {
    if (continent === 'all') return riversData;
    return riversData.filter(river => river.continent === continent);
}

function searchRivers(query) {
    const searchTerm = query.toLowerCase().trim();
    if (!searchTerm) return riversData;
    
    return riversData.filter(river => 
        river.name.toLowerCase().includes(searchTerm) ||
        river.countries.some(c => c.toLowerCase().includes(searchTerm)) ||
        river.continent.toLowerCase().includes(searchTerm)
    );
}

function sortRivers(rivers, sortBy) {
    const sorted = [...rivers];
    
    switch(sortBy) {
        case 'name':
            return sorted.sort((a, b) => a.name.localeCompare(b.name));
        case 'length':
            return sorted.sort((a, b) => b.length - a.length);
        case 'discharge':
            return sorted.sort((a, b) => b.discharge - a.discharge);
        case 'basin':
            return sorted.sort((a, b) => b.basinArea - a.basinArea);
        default:
            return sorted;
    }
}

function getRiversStats() {
    return {
        totalRivers: riversData.length,
        totalLength: riversData.reduce((sum, r) => sum + r.length, 0),
        continents: [...new Set(riversData.map(r => r.continent))].length
    };
}

function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
