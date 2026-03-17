const riversData = [
    {
        id: 1,
        name: "Nile River",
        length: 6650,
        discharge: 2830,
        continent: "Africa",
        countries: ["Egypt", "Sudan", "Uganda"],
        image: "https://images.unsplash.com/photo-1553913861-c0a9e3a5e637?w=800",
        
        source: { name: "Lake Victoria", lat: -1.0, lng: 33.0, elevation: 1134 },
        mouth: { name: "Mediterranean Sea", lat: 31.5, lng: 31.0 },
        
        course: [[-1.0, 33.0], [15.5, 32.5], [30.0, 31.2], [31.5, 31.0]],
        
        tributaries: [
            { name: "Blue Nile", length: 1450, lat: 15.6, lng: 32.55 },
            { name: "White Nile", length: 3700, lat: 15.6, lng: 32.55 }
        ],
        
        distributaries: [
            { name: "Rosetta Branch", length: 235, lat: 31.45, lng: 30.41 }
        ],
        
        cities: [
            { name: "Cairo", population: 20000000, lat: 30.04, lng: 31.23 },
            { name: "Khartoum", population: 5800000, lat: 15.5, lng: 32.55 }
        ],
        
        facts: [
            "Longest river in Africa",
            "Flows through 11 countries",
            "Ancient Egyptian lifeline"
        ]
    },
    {
        id: 2,
        name: "Amazon River",
        length: 6400,
        discharge: 209000,
        continent: "South America",
        countries: ["Brazil", "Peru", "Colombia"],
        image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800",
        
        source: { name: "Andes Mountains", lat: -15.5, lng: -71.7, elevation: 5220 },
        mouth: { name: "Atlantic Ocean", lat: -0.16, lng: -49.0 },
        
        course: [[-15.5, -71.7], [-3.1, -60.0], [-0.16, -49.0]],
        
        tributaries: [
            { name: "Rio Negro", length: 2250, lat: -3.13, lng: -59.9 }
        ],
        
        distributaries: [],
        
        cities: [
            { name: "Manaus", population: 2200000, lat: -3.11, lng: -60.02 }
        ],
        
        facts: [
            "Largest river by volume",
            "20% of world's freshwater",
            "No bridges cross it"
        ]
    },
    {
        id: 3,
        name: "Ganges River",
        length: 2525,
        discharge: 12000,
        continent: "Asia",
        countries: ["India", "Bangladesh"],
        image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800",
        
        source: { name: "Gangotri Glacier", lat: 30.99, lng: 78.93, elevation: 3892 },
        mouth: { name: "Bay of Bengal", lat: 21.78, lng: 89.15 },
        
        course: [[30.99, 78.93], [25.43, 81.84], [21.78, 89.15]],
        
        tributaries: [
            { name: "Yamuna", length: 1376, lat: 25.43, lng: 81.84 }
        ],
        
        distributaries: [
            { name: "Hooghly River", length: 260, lat: 22.57, lng: 88.36 }
        ],
        
        cities: [
            { name: "Varanasi", population: 1200000, lat: 25.31, lng: 82.99 }
        ],
        
        facts: [
            "Sacred Hindu river",
            "Supports 400 million people",
            "World's largest delta"
        ]
    },
    {
        id: 4,
        name: "Yangtze River",
        length: 6300,
        discharge: 30000,
        continent: "Asia",
        countries: ["China"],
        image: "https://images.unsplash.com/photo-1537531383496-f4749b8032cf?w=800",
        
        source: { name: "Tanggula Mountains", lat: 33.43, lng: 91.18, elevation: 5170 },
        mouth: { name: "East China Sea", lat: 31.38, lng: 121.91 },
        
        course: [[33.43, 91.18], [30.5, 114.3], [31.38, 121.91]],
        
        tributaries: [
            { name: "Han River", length: 1532, lat: 30.58, lng: 114.28 }
        ],
        
        distributaries: [],
        
        cities: [
            { name: "Shanghai", population: 26000000, lat: 31.23, lng: 121.47 }
        ],
        
        facts: [
            "Longest river in Asia",
            "Three Gorges Dam",
            "400 million depend on it"
        ]
    },
    {
        id: 5,
        name: "Mississippi River",
        length: 3778,
        discharge: 16800,
        continent: "North America",
        countries: ["United States"],
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
        
        source: { name: "Lake Itasca", lat: 47.23, lng: -95.2, elevation: 450 },
        mouth: { name: "Gulf of Mexico", lat: 29.15, lng: -89.25 },
        
        course: [[47.23, -95.2], [38.62, -90.19], [29.15, -89.25]],
        
        tributaries: [
            { name: "Missouri River", length: 3768, lat: 38.81, lng: -90.11 }
        ],
        
        distributaries: [],
        
        cities: [
            { name: "New Orleans", population: 390000, lat: 29.95, lng: -90.07 }
        ],
        
        facts: [
            "Second longest in North America",
            "Mark Twain's inspiration",
            "Drains 31 US states"
        ]
    }
];

console.log('Rivers Data Loaded:', riversData.length);
