/**
 * GeoVerse Encyclopedia - Master Data File
 * Contains: Physical Features, Disputes, Climate Zones, Earth Systems
 * Version: 2.0
 */

// ============================================
// PHYSICAL FEATURES DATA
// ============================================

const PhysicalFeatures = {
    // MOUNTAINS
    mountains: [
        {
            id: "MT001",
            name: "Mount Everest",
            height: "8,848.86 m",
            location: "Nepal-China Border",
            range: "Himalayas",
            countries: ["Nepal", "China"],
            firstAscent: "1953",
            description: "Highest mountain on Earth above sea level"
        },
        {
            id: "MT002",
            name: "K2",
            height: "8,611 m",
            location: "Pakistan-China Border",
            range: "Karakoram",
            countries: ["Pakistan", "China"],
            firstAscent: "1954",
            description: "Second highest mountain, known as 'Savage Mountain'"
        },
        {
            id: "MT003",
            name: "Kangchenjunga",
            height: "8,586 m",
            location: "Nepal-India Border",
            range: "Himalayas",
            countries: ["Nepal", "India"],
            firstAscent: "1955",
            description: "Third highest mountain in the world"
        },
        {
            id: "MT004",
            name: "Lhotse",
            height: "8,516 m",
            location: "Nepal-China Border",
            range: "Himalayas",
            countries: ["Nepal", "China"],
            firstAscent: "1956",
            description: "Fourth highest mountain, connected to Everest"
        },
        {
            id: "MT005",
            name: "Makalu",
            height: "8,485 m",
            location: "Nepal-China Border",
            range: "Himalayas",
            countries: ["Nepal", "China"],
            firstAscent: "1955",
            description: "Fifth highest mountain in the world"
        },
        {
            id: "MT006",
            name: "Himalayas",
            height: "Up to 8,848 m",
            location: "South Asia",
            range: "Himalayan Range",
            countries: ["India", "Nepal", "Bhutan", "China", "Pakistan"],
            description: "Highest mountain range, home to 14 eight-thousanders"
        },
        {
            id: "MT007",
            name: "Karakoram",
            height: "Up to 8,611 m",
            location: "Central Asia",
            range: "Karakoram Range",
            countries: ["Pakistan", "China", "India"],
            description: "Home to K2 and largest glaciers outside polar regions"
        },
        {
            id: "MT008",
            name: "Hindu Kush",
            height: "Up to 7,708 m",
            location: "Central Asia",
            range: "Hindu Kush Range",
            countries: ["Afghanistan", "Pakistan"],
            description: "800 km range extending from Afghanistan to Pakistan"
        },
        {
            id: "MT009",
            name: "Alps",
            height: "Up to 4,809 m (Mont Blanc)",
            location: "Europe",
            range: "Alpine Range",
            countries: ["France", "Switzerland", "Italy", "Austria", "Germany", "Slovenia"],
            description: "Highest and most extensive mountain range in Europe"
        },
        {
            id: "MT010",
            name: "Andes",
            height: "Up to 6,962 m (Aconcagua)",
            location: "South America",
            range: "Andean Range",
            countries: ["Argentina", "Chile", "Peru", "Bolivia", "Ecuador", "Colombia", "Venezuela"],
            description: "Longest continental mountain range in the world (7,000 km)"
        },
        {
            id: "MT011",
            name: "Rocky Mountains",
            height: "Up to 4,401 m (Mount Elbert)",
            location: "North America",
            range: "Rocky Mountain Range",
            countries: ["United States", "Canada"],
            description: "Major mountain range in western North America (4,800 km)"
        },
        {
            id: "MT012",
            name: "Mount Kilimanjaro",
            height: "5,895 m",
            location: "Tanzania",
            range: "East African Mountains",
            countries: ["Tanzania"],
            firstAscent: "1889",
            description: "Highest mountain in Africa, a dormant volcano"
        }
    ],

    // RIVERS
    rivers: [
        {
            id: "RV001",
            name: "Nile",
            length: "6,650 km",
            location: "Africa",
            countries: ["Egypt", "Sudan", "South Sudan", "Uganda", "Ethiopia", "Kenya", "Tanzania", "Rwanda", "Burundi", "DR Congo"],
            source: "Lake Victoria / Nyungwe Forest",
            mouth: "Mediterranean Sea",
            description: "Longest river in Africa, possibly the world"
        },
        {
            id: "RV002",
            name: "Amazon",
            length: "6,400 km",
            location: "South America",
            countries: ["Brazil", "Peru", "Colombia", "Venezuela", "Ecuador", "Bolivia"],
            source: "Andes Mountains, Peru",
            mouth: "Atlantic Ocean",
            description: "Largest river by discharge volume, second longest"
        },
        {
            id: "RV003",
            name: "Yangtze",
            length: "6,300 km",
            location: "Asia",
            countries: ["China"],
            source: "Tibetan Plateau",
            mouth: "East China Sea",
            description: "Longest river in Asia, third longest in the world"
        },
        {
            id: "RV004",
            name: "Mississippi-Missouri",
            length: "6,275 km",
            location: "North America",
            countries: ["United States"],
            source: "Lake Itasca, Minnesota / Brower's Spring, Montana",
            mouth: "Gulf of Mexico",
            description: "Largest river system in North America"
        },
        {
            id: "RV005",
            name: "Ganges",
            length: "2,525 km",
            location: "South Asia",
            countries: ["India", "Bangladesh"],
            source: "Gangotri Glacier, Himalayas",
            mouth: "Bay of Bengal",
            description: "Sacred river in Hinduism, supports 400+ million people"
        },
        {
            id: "RV006",
            name: "Brahmaputra",
            length: "2,900 km",
            location: "South Asia",
            countries: ["China", "India", "Bangladesh"],
            source: "Angsi Glacier, Tibet",
            mouth: "Bay of Bengal",
            description: "Trans-boundary river, one of largest in the world"
        },
        {
            id: "RV007",
            name: "Indus",
            length: "3,180 km",
            location: "South Asia",
            countries: ["China", "India", "Pakistan"],
            source: "Tibetan Plateau",
            mouth: "Arabian Sea",
            description: "Cradle of Indus Valley Civilization"
        },
        {
            id: "RV008",
            name: "Mekong",
            length: "4,350 km",
            location: "Southeast Asia",
            countries: ["China", "Myanmar", "Laos", "Thailand", "Cambodia", "Vietnam"],
            source: "Tibetan Plateau",
            mouth: "South China Sea",
            description: "12th longest river, vital to Southeast Asian economies"
        },
        {
            id: "RV009",
            name: "Danube",
            length: "2,850 km",
            location: "Europe",
            countries: ["Germany", "Austria", "Slovakia", "Hungary", "Croatia", "Serbia", "Bulgaria", "Romania", "Moldova", "Ukraine"],
            source: "Black Forest, Germany",
            mouth: "Black Sea",
            description: "Second longest river in Europe, flows through 10 countries"
        },
        {
            id: "RV010",
            name: "Congo",
            length: "4,700 km",
            location: "Africa",
            countries: ["DR Congo", "Central African Republic", "Angola", "Republic of Congo", "Tanzania", "Cameroon", "Zambia", "Burundi", "Rwanda"],
            source: "East African Rift",
            mouth: "Atlantic Ocean",
            description: "Deepest river in the world, second largest by discharge"
        }
    ],

    // DESERTS
    deserts: [
        {
            id: "DS001",
            name: "Sahara Desert",
            area: "9,200,000 km²",
            location: "North Africa",
            countries: ["Algeria", "Chad", "Egypt", "Libya", "Mali", "Mauritania", "Morocco", "Niger", "Sudan", "Tunisia"],
            type: "Hot Desert",
            description: "Largest hot desert in the world"
        },
        {
            id: "DS002",
            name: "Arabian Desert",
            area: "2,330,000 km²",
            location: "Western Asia",
            countries: ["Saudi Arabia", "Yemen", "Oman", "UAE", "Jordan", "Iraq"],
            type: "Hot Desert",
            description: "Covers most of Arabian Peninsula"
        },
        {
            id: "DS003",
            name: "Gobi Desert",
            area: "1,300,000 km²",
            location: "East Asia",
            countries: ["Mongolia", "China"],
            type: "Cold Desert",
            description: "Largest desert in Asia"
        },
        {
            id: "DS004",
            name: "Thar Desert",
            area: "200,000 km²",
            location: "South Asia",
            countries: ["India", "Pakistan"],
            type: "Hot Desert",
            description: "Most densely populated desert in the world"
        },
        {
            id: "DS005",
            name: "Kalahari Desert",
            area: "900,000 km²",
            location: "Southern Africa",
            countries: ["Botswana", "Namibia", "South Africa"],
            type: "Semi-arid Sandy Savanna",
            description: "Large semi-arid sandy savanna"
        },
        {
            id: "DS006",
            name: "Antarctic Desert",
            area: "14,200,000 km²",
            location: "Antarctica",
            countries: [],
            type: "Cold Desert",
            description: "Largest desert in the world (by total area)"
        },
        {
            id: "DS007",
            name: "Arctic Desert",
            area: "13,900,000 km²",
            location: "Arctic",
            countries: ["Russia", "Canada", "USA", "Norway", "Greenland"],
            type: "Cold Desert",
            description: "Second largest desert in the world"
        },
        {
            id: "DS008",
            name: "Atacama Desert",
            area: "105,000 km²",
            location: "South America",
            countries: ["Chile", "Peru"],
            type: "Hot Desert",
            description: "Driest non-polar desert in the world"
        }
    ],

    // OCEANS
    oceans: [
        {
            id: "OC001",
            name: "Pacific Ocean",
            area: "165,250,000 km²",
            avgDepth: "4,280 m",
            maxDepth: "10,994 m (Mariana Trench)",
            description: "Largest and deepest ocean, covers 46% of Earth's water surface"
        },
        {
            id: "OC002",
            name: "Atlantic Ocean",
            area: "106,460,000 km²",
            avgDepth: "3,646 m",
            maxDepth: "8,376 m (Puerto Rico Trench)",
            description: "Second largest ocean, separates Americas from Europe/Africa"
        },
        {
            id: "OC003",
            name: "Indian Ocean",
            area: "70,560,000 km²",
            avgDepth: "3,741 m",
            maxDepth: "7,258 m (Java Trench)",
            description: "Third largest ocean, bordered by Asia, Africa, and Australia"
        },
        {
            id: "OC004",
            name: "Southern Ocean",
            area: "21,960,000 km²",
            avgDepth: "3,270 m",
            maxDepth: "7,235 m (South Sandwich Trench)",
            description: "Fourth largest, surrounds Antarctica"
        },
        {
            id: "OC005",
            name: "Arctic Ocean",
            area: "14,060,000 km²",
            avgDepth: "1,205 m",
            maxDepth: "5,625 m (Molloy Deep)",
            description: "Smallest and shallowest ocean, mostly covered by sea ice"
        }
    ],

    // LAKES
    lakes: [
        {
            id: "LK001",
            name: "Caspian Sea",
            area: "371,000 km²",
            maxDepth: "1,025 m",
            location: "Europe-Asia Border",
            countries: ["Russia", "Kazakhstan", "Turkmenistan", "Iran", "Azerbaijan"],
            type: "Endorheic (Saltwater)",
            description: "Largest enclosed inland body of water, often called a sea"
        },
        {
            id: "LK002",
            name: "Lake Superior",
            area: "82,100 km²",
            maxDepth: "406 m",
            location: "North America",
            countries: ["United States", "Canada"],
            type: "Freshwater",
            description: "Largest freshwater lake by surface area"
        },
        {
            id: "LK003",
            name: "Lake Victoria",
            area: "68,870 km²",
            maxDepth: "84 m",
            location: "East Africa",
            countries: ["Tanzania", "Uganda", "Kenya"],
            type: "Freshwater",
            description: "Largest lake in Africa, source of the Nile"
        },
        {
            id: "LK004",
            name: "Lake Baikal",
            area: "31,722 km²",
            maxDepth: "1,642 m",
            location: "Russia",
            countries: ["Russia"],
            type: "Freshwater",
            description: "Deepest and oldest lake, holds 22% of world's freshwater"
        },
        {
            id: "LK005",
            name: "Lake Tanganyika",
            area: "32,900 km²",
            maxDepth: "1,470 m",
            location: "East Africa",
            countries: ["Tanzania", "DR Congo", "Burundi", "Zambia"],
            type: "Freshwater",
            description: "Second deepest lake, longest freshwater lake"
        }
    ],

    // FORESTS
    forests: [
        {
            id: "FR001",
            name: "Amazon Rainforest",
            area: "5,500,000 km²",
            location: "South America",
            countries: ["Brazil", "Peru", "Colombia", "Venezuela", "Ecuador", "Bolivia", "Guyana", "Suriname", "French Guiana"],
            type: "Tropical Rainforest",
            description: "Largest tropical rainforest, 'lungs of the Earth'"
        },
        {
            id: "FR002",
            name: "Congo Rainforest",
            area: "2,000,000 km²",
            location: "Central Africa",
            countries: ["DR Congo", "Republic of Congo", "Cameroon", "Central African Republic", "Gabon", "Equatorial Guinea"],
            type: "Tropical Rainforest",
            description: "Second largest tropical rainforest"
        },
        {
            id: "FR003",
            name: "Taiga (Boreal Forest)",
            area: "17,000,000 km²",
            location: "Northern Hemisphere",
            countries: ["Russia", "Canada", "USA", "Finland", "Sweden", "Norway"],
            type: "Boreal/Coniferous",
            description: "Largest terrestrial biome, largest forest type"
        },
        {
            id: "FR004",
            name: "Sundarbans",
            area: "10,000 km²",
            location: "South Asia",
            countries: ["Bangladesh", "India"],
            type: "Mangrove Forest",
            description: "Largest mangrove forest in the world"
        },
        {
            id: "FR005",
            name: "Daintree Rainforest",
            area: "1,200 km²",
            location: "Australia",
            countries: ["Australia"],
            type: "Tropical Rainforest",
            description: "Oldest rainforest in the world (180 million years)"
        }
    ]
};

// ============================================
// TERRITORIAL DISPUTES DATA
// ============================================

const DisputesData = [
    {
        id: "DIS001",
        name: "Kashmir Conflict",
        type: "Territory",
        countries: ["India", "Pakistan", "China"],
        region: "South Asia",
        status: "Active",
        startYear: 1947,
        summary: "Multi-party territorial dispute over the Kashmir region",
        keyPoints: [
            "Line of Control (LoC) divides Indian and Pakistani-controlled areas",
            "China controls Aksai Chin region",
            "Three major wars fought (1947, 1965, 1999)",
            "UN resolutions call for plebiscite (unimplemented)",
            "Nuclear-armed nations in dispute"
        ],
        timeline: [
            { year: "1947", event: "First Kashmir War after partition" },
            { year: "1965", event: "Second Kashmir War" },
            { year: "1972", event: "Simla Agreement established LoC" },
            { year: "1999", event: "Kargil War" },
            { year: "2019", event: "Article 370 revoked by India" }
        ]
    },
    {
        id: "DIS002",
        name: "South China Sea Dispute",
        type: "Maritime",
        countries: ["China", "Vietnam", "Philippines", "Malaysia", "Brunei", "Taiwan", "Indonesia"],
        region: "East Asia / Southeast Asia",
        status: "Active",
        startYear: 1947,
        summary: "Multiple overlapping territorial claims over islands and maritime zones",
        keyPoints: [
            "China claims most of sea via 'Nine-Dash Line'",
            "Spratly and Paracel Islands disputed",
            "Major shipping lane ($5.3 trillion trade annually)",
            "Rich fishing grounds and potential oil/gas reserves",
            "2016 UN tribunal ruled against China's claims"
        ],
        timeline: [
            { year: "1974", event: "China seized Paracel Islands from Vietnam" },
            { year: "1988", event: "Johnson South Reef Skirmish" },
            { year: "2012", event: "Scarborough Shoal standoff" },
            { year: "2016", event: "UN tribunal ruling against China" }
        ]
    },
    {
        id: "DIS003",
        name: "Crimea Dispute",
        type: "Territory",
        countries: ["Russia", "Ukraine"],
        region: "Eastern Europe",
        status: "Active",
        startYear: 2014,
        summary: "Russian annexation of Crimean Peninsula from Ukraine",
        keyPoints: [
            "Russia annexed Crimea in 2014",
            "Not recognized by most UN members",
            "Led to ongoing Russia-Ukraine conflict",
            "Strategic importance: Black Sea Fleet base",
            "Triggered international sanctions on Russia"
        ],
        timeline: [
            { year: "2014", event: "Russian annexation of Crimea" },
            { year: "2014", event: "UN resolution declaring referendum invalid" },
            { year: "2022", event: "Full-scale Russian invasion of Ukraine" }
        ]
    },
    {
        id: "DIS004",
        name: "Palestine-Israel Conflict",
        type: "Territory",
        countries: ["Israel", "Palestine"],
        region: "Middle East",
        status: "Active",
        startYear: 1948,
        summary: "Ongoing conflict over territory, statehood, and borders",
        keyPoints: [
            "Disputes over West Bank, Gaza Strip, and East Jerusalem",
            "Israeli settlements in occupied territories",
            "Palestinian quest for statehood",
            "Multiple wars and intifadas",
            "Two-state solution proposed but unimplemented"
        ],
        timeline: [
            { year: "1948", event: "Israeli Declaration of Independence, Arab-Israeli War" },
            { year: "1967", event: "Six-Day War, Israel occupied West Bank and Gaza" },
            { year: "1993", event: "Oslo Accords signed" },
            { year: "2023", event: "Major escalation in Gaza conflict" }
        ]
    },
    {
        id: "DIS005",
        name: "Taiwan Strait",
        type: "Territory",
        countries: ["China", "Taiwan"],
        region: "East Asia",
        status: "Active",
        startYear: 1949,
        summary: "China claims Taiwan as part of its territory; Taiwan operates independently",
        keyPoints: [
            "China views Taiwan as breakaway province",
            "Taiwan operates as independent democracy",
            "US strategic ambiguity policy",
            "Major semiconductor manufacturing hub",
            "Potential flashpoint for superpower conflict"
        ],
        timeline: [
            { year: "1949", event: "ROC government retreated to Taiwan" },
            { year: "1971", event: "UN recognized PRC, expelled ROC" },
            { year: "1979", event: "US switched recognition to PRC" },
            { year: "2022", event: "Pelosi visit sparked tensions" }
        ]
    },
    {
        id: "DIS006",
        name: "Arunachal Pradesh / South Tibet",
        type: "Border",
        countries: ["India", "China"],
        region: "South Asia",
        status: "Active",
        startYear: 1914,
        summary: "Border dispute over northeastern Indian state claimed by China",
        keyPoints: [
            "India administers as Arunachal Pradesh state",
            "China claims as 'South Tibet' (Zangnan)",
            "McMahon Line disputed by China",
            "1962 Sino-Indian War fought here",
            "Ongoing border tensions and incidents"
        ],
        timeline: [
            { year: "1914", event: "McMahon Line drawn at Simla Convention" },
            { year: "1962", event: "Sino-Indian War" },
            { year: "2017", event: "Doklam standoff" },
            { year: "2020", event: "Galwan Valley clash" }
        ]
    },
    {
        id: "DIS007",
        name: "Kuril Islands",
        type: "Territory",
        countries: ["Russia", "Japan"],
        region: "East Asia",
        status: "Active",
        startYear: 1945,
        summary: "Dispute over southern Kuril Islands seized by USSR after WWII",
        keyPoints: [
            "Russia controls all Kuril Islands since 1945",
            "Japan claims four southernmost islands",
            "No peace treaty signed since WWII",
            "Strategic importance for Sea of Okhotsk",
            "Rich fishing waters"
        ],
        timeline: [
            { year: "1945", event: "Soviet Union seized islands" },
            { year: "1956", event: "Soviet-Japanese Joint Declaration" },
            { year: "2022", event: "Russia suspended peace treaty talks" }
        ]
    },
    {
        id: "DIS008",
        name: "Falkland Islands / Malvinas",
        type: "Territory",
        countries: ["United Kingdom", "Argentina"],
        region: "South America",
        status: "Active",
        startYear: 1833,
        summary: "British Overseas Territory claimed by Argentina",
        keyPoints: [
            "UK has controlled since 1833",
            "Argentina claims as 'Islas Malvinas'",
            "1982 Falklands War (UK victory)",
            "2013 referendum: 99.8% voted to remain British",
            "Potential oil and gas reserves"
        ],
        timeline: [
            { year: "1833", event: "British reasserted control" },
            { year: "1982", event: "Falklands War" },
            { year: "2013", event: "Sovereignty referendum held" }
        ]
    }
];

// ============================================
// CLIMATE ZONES DATA
// ============================================

const ClimateData = [
    {
        id: "CL001",
        name: "Tropical Rainforest",
        code: "Af",
        temperature: "25-27°C (year-round)",
        precipitation: ">2000 mm annually",
        color: "#006400",
        regions: ["Amazon Basin", "Congo Basin", "Southeast Asia", "Central America"],
        characteristics: ["No dry season", "High humidity", "Dense vegetation", "High biodiversity"],
        description: "Hot and wet year-round with no distinct seasons"
    },
    {
        id: "CL002",
        name: "Tropical Monsoon",
        code: "Am",
        temperature: "25-30°C",
        precipitation: "1500-3000 mm (seasonal)",
        color: "#008000",
        regions: ["South Asia", "Southeast Asia", "West Africa", "Northern Australia"],
        characteristics: ["Distinct wet and dry seasons", "Heavy monsoon rains", "Warm year-round"],
        description: "Characterized by seasonal reversal of winds bringing heavy rains"
    },
    {
        id: "CL003",
        name: "Tropical Savanna",
        code: "Aw",
        temperature: "20-30°C",
        precipitation: "800-1500 mm (wet season)",
        color: "#90EE90",
        regions: ["Sub-Saharan Africa", "South America", "India", "Northern Australia"],
        characteristics: ["Distinct wet and dry seasons", "Grasslands with scattered trees", "Fire-prone"],
        description: "Warm climate with distinct wet and dry seasons"
    },
    {
        id: "CL004",
        name: "Hot Desert",
        code: "BWh",
        temperature: "20-35°C (extreme variation)",
        precipitation: "<250 mm annually",
        color: "#FFD700",
        regions: ["Sahara", "Arabian", "Thar", "Sonoran", "Kalahari"],
        characteristics: ["Extreme heat", "Very low rainfall", "Large temperature swings", "Sparse vegetation"],
        description: "Extremely dry and hot with minimal precipitation"
    },
    {
        id: "CL005",
        name: "Cold Desert",
        code: "BWk",
        temperature: "-10 to 25°C",
        precipitation: "<250 mm annually",
        color: "#DEB887",
        regions: ["Gobi", "Patagonia", "Great Basin", "Turkestan"],
        characteristics: ["Cold winters", "Hot summers", "Low precipitation", "High altitude"],
        description: "Dry climate with cold winters and hot summers"
    },
    {
        id: "CL006",
        name: "Mediterranean",
        code: "Csa/Csb",
        temperature: "10-25°C",
        precipitation: "400-900 mm (winter)",
        color: "#FFE4B5",
        regions: ["Mediterranean Basin", "California", "Chile", "South Africa", "Australia"],
        characteristics: ["Dry summers", "Mild wet winters", "Moderate temperatures"],
        description: "Mild, wet winters and warm, dry summers"
    },
    {
        id: "CL007",
        name: "Humid Subtropical",
        code: "Cfa",
        temperature: "15-25°C",
        precipitation: "1000-1500 mm",
        color: "#98FB98",
        regions: ["Southeastern USA", "Eastern China", "Southern Brazil", "Eastern Australia"],
        characteristics: ["Hot humid summers", "Mild winters", "Year-round precipitation"],
        description: "Hot, humid summers and mild winters with no dry season"
    },
    {
        id: "CL008",
        name: "Oceanic",
        code: "Cfb",
        temperature: "5-20°C",
        precipitation: "800-2000 mm",
        color: "#87CEEB",
        regions: ["Western Europe", "New Zealand", "Pacific Northwest", "Southern Chile"],
        characteristics: ["Mild temperatures", "Frequent clouds", "No dry season", "Cool summers"],
        description: "Mild and wet year-round with cool summers"
    },
    {
        id: "CL009",
        name: "Continental",
        code: "Dfa/Dfb",
        temperature: "-15 to 25°C",
        precipitation: "500-1200 mm",
        color: "#ADD8E6",
        regions: ["Central Europe", "Northern USA", "Southern Canada", "Northern China"],
        characteristics: ["Hot summers", "Cold winters", "Four distinct seasons"],
        description: "Large temperature variations between seasons"
    },
    {
        id: "CL010",
        name: "Subarctic",
        code: "Dfc",
        temperature: "-30 to 15°C",
        precipitation: "300-600 mm",
        color: "#B0C4DE",
        regions: ["Alaska", "Northern Canada", "Siberia", "Scandinavia"],
        characteristics: ["Very cold winters", "Short cool summers", "Permafrost", "Taiga forests"],
        description: "Cold climate with short summers and long, severe winters"
    },
    {
        id: "CL011",
        name: "Tundra",
        code: "ET",
        temperature: "-40 to 10°C",
        precipitation: "150-250 mm",
        color: "#E6E6FA",
        regions: ["Arctic regions", "Antarctic coast", "High mountains"],
        characteristics: ["Permafrost", "No trees", "Short growing season", "Low biodiversity"],
        description: "Very cold with frozen ground and minimal vegetation"
    },
    {
        id: "CL012",
        name: "Ice Cap",
        code: "EF",
        temperature: "-60 to 0°C",
        precipitation: "<100 mm",
        color: "#FFFFFF",
        regions: ["Antarctica", "Greenland interior", "High Arctic"],
        characteristics: ["Permanent ice", "No vegetation", "Extreme cold", "High albedo"],
        description: "Perpetually frozen with permanent ice cover"
    }
];

// ============================================
// EARTH SYSTEMS DATA
// ============================================

const EarthSystemsData = [
    {
        id: "ES001",
        name: "Day and Night Cycle",
        icon: "🌗",
        type: "Astronomy",
        relatedCountries: [],
        interactive: true,
        description: "Earth's rotation on its axis causes the cycle of day and night",
        keyPoints: [
            "Earth rotates 360° in 24 hours",
            "Rotation speed: ~1,670 km/h at equator",
            "Creates time zones across the globe",
            "Day length varies by latitude and season"
        ],
        affectedRegions: ["Global"]
    },
    {
        id: "ES002",
        name: "Seasons",
        icon: "🍂",
        type: "Astronomy",
        relatedCountries: [],
        interactive: true,
        description: "Earth's axial tilt (23.5°) causes seasonal changes throughout the year",
        keyPoints: [
            "Earth's axis tilted at 23.5°",
            "Causes varying sunlight intensity",
            "Opposite seasons in hemispheres",
            "Equinoxes and solstices mark season changes"
        ],
        affectedRegions: ["Global (except equatorial regions)"]
    },
    {
        id: "ES003",
        name: "Monsoon System",
        icon: "🌧️",
        type: "Climate",
        relatedCountries: ["India", "Bangladesh", "Pakistan", "Myanmar", "Thailand", "Vietnam", "China"],
        interactive: true,
        description: "Seasonal reversal of wind direction bringing heavy rainfall",
        keyPoints: [
            "Caused by differential heating of land and ocean",
            "Southwest monsoon (June-Sept) brings rain to South Asia",
            "Northeast monsoon (Oct-Dec) affects eastern coast",
            "Critical for agriculture in affected regions"
        ],
        affectedRegions: ["South Asia", "Southeast Asia", "East Asia"]
    },
    {
        id: "ES004",
        name: "Pressure Belts",
        icon: "💨",
        type: "Climate",
        relatedCountries: [],
        interactive: true,
        description: "Global bands of high and low atmospheric pressure affecting wind and weather",
        keyPoints: [
            "Equatorial Low (ITCZ) - rising air, rain",
            "Subtropical High (30°) - sinking air, deserts",
            "Subpolar Low (60°) - storms, precipitation",
            "Polar High - cold, dry conditions"
        ],
        affectedRegions: ["Global"]
    },
    {
        id: "ES005",
        name: "Ocean Currents",
        icon: "🌊",
        type: "Oceanography",
        relatedCountries: [],
        interactive: true,
        description: "Continuous movement of ocean water driven by wind, temperature, and salinity",
        keyPoints: [
            "Gulf Stream warms Western Europe",
            "Humboldt Current cools South American coast",
            "Thermohaline circulation (global conveyor belt)",
            "Affects climate, fishing, and navigation"
        ],
        affectedRegions: ["Global oceans"]
    },
    {
        id: "ES006",
        name: "El Niño & La Niña",
        icon: "🌡️",
        type: "Climate",
        relatedCountries: ["Peru", "Ecuador", "Australia", "Indonesia", "USA"],
        interactive: true,
        description: "Periodic warming (El Niño) and cooling (La Niña) of Pacific Ocean",
        keyPoints: [
            "El Niño: Warm water in eastern Pacific",
            "La Niña: Cool water in eastern Pacific",
            "Occurs every 2-7 years",
            "Causes droughts, floods, and temperature extremes worldwide"
        ],
        affectedRegions: ["Pacific Rim", "Global"]
    },
    {
        id: "ES007",
        name: "Trade Winds",
        icon: "🌬️",
        type: "Climate",
        relatedCountries: [],
        interactive: true,
        description: "Consistent easterly winds blowing toward the equator",
        keyPoints: [
            "Northeast trades in Northern Hemisphere",
            "Southeast trades in Southern Hemisphere",
            "Historically important for sailing ships",
            "Converge at ITCZ causing rainfall"
        ],
        affectedRegions: ["Tropical regions"]
    },
    {
        id: "ES008",
        name: "Plate Tectonics",
        icon: "🌋",
        type: "Geology",
        relatedCountries: [],
        interactive: true,
        description: "Movement of Earth's lithospheric plates causing earthquakes and volcanoes",
        keyPoints: [
            "7 major and several minor plates",
            "Plates move 2-10 cm per year",
            "Creates mountains, volcanoes, earthquakes",
            "Ring of Fire most seismically active"
        ],
        affectedRegions: ["Plate boundaries", "Ring of Fire"]
    },
    {
        id: "ES009",
        name: "Water Cycle",
        icon: "💧",
        type: "Hydrology",
        relatedCountries: [],
        interactive: true,
        description: "Continuous movement of water between Earth's surface and atmosphere",
        keyPoints: [
            "Evaporation from oceans and land",
            "Condensation forms clouds",
            "Precipitation as rain, snow, etc.",
            "Runoff and groundwater flow"
        ],
        affectedRegions: ["Global"]
    },
    {
        id: "ES010",
        name: "Tides",
        icon: "🌙",
        type: "Oceanography",
        relatedCountries: [],
        interactive: true,
        description: "Rise and fall of sea levels caused by gravitational pull of Moon and Sun",
        keyPoints: [
            "Two high tides and two low tides daily",
            "Spring tides during full/new moon",
            "Neap tides during quarter moons",
            "Bay of Fundy has world's highest tides (16m)"
        ],
        affectedRegions: ["Coastal areas worldwide"]
    }
];

// ============================================
// HELPER FUNCTIONS
// ============================================

const EncyclopediaHelpers = {
    // Get country by ID
    getCountryById: function(id) {
        const allData = [
            typeof CountriesData1 !== 'undefined' ? CountriesData1 : [],
            typeof CountriesData2 !== 'undefined' ? CountriesData2 : [],
            typeof CountriesData3 !== 'undefined' ? CountriesData3 : [],
            typeof CountriesData4 !== 'undefined' ? CountriesData4 : [],
            typeof CountriesData5 !== 'undefined' ? CountriesData5 : [],
            typeof CountriesData6 !== 'undefined' ? CountriesData6 : [],
            typeof CountriesData7 !== 'undefined' ? CountriesData7 : [],
            typeof CountriesData8 !== 'undefined' ? CountriesData8 : [],
            typeof CountriesData9 !== 'undefined' ? CountriesData9 : [],
            typeof CountriesData10 !== 'undefined' ? CountriesData10 : [],
            typeof CountriesData11 !== 'undefined' ? CountriesData11 : []
        ];
        
        for (let dataset of allData) {
            const country = dataset.find(c => c.id === id);
            if (country) return country;
        }
        return null;
    },

    // Get all countries
    getAllCountries: function() {
        const allData = [
            typeof CountriesData1 !== 'undefined' ? CountriesData1 : [],
            typeof CountriesData2 !== 'undefined' ? CountriesData2 : [],
            typeof CountriesData3 !== 'undefined' ? CountriesData3 : [],
            typeof CountriesData4 !== 'undefined' ? CountriesData4 : [],
            typeof CountriesData5 !== 'undefined' ? CountriesData5 : [],
            typeof CountriesData6 !== 'undefined' ? CountriesData6 : [],
            typeof CountriesData7 !== 'undefined' ? CountriesData7 : [],
            typeof CountriesData8 !== 'undefined' ? CountriesData8 : [],
            typeof CountriesData9 !== 'undefined' ? CountriesData9 : [],
            typeof CountriesData10 !== 'undefined' ? CountriesData10 : [],
            typeof CountriesData11 !== 'undefined' ? CountriesData11 : []
        ];
        
        return allData.flat();
    },

    // Get countries by continent
    getCountriesByContinent: function(continent) {
        return this.getAllCountries().filter(c => c.basic.continent === continent);
    },

    // Get countries by region
    getCountriesByRegion: function(region) {
        return this.getAllCountries().filter(c => c.basic.region === region);
    },

    // Search countries
    searchCountries: function(query) {
        const q = query.toLowerCase();
        return this.getAllCountries().filter(c => 
            c.name.toLowerCase().includes(q) ||
            c.basic.capital.toLowerCase().includes(q) ||
            c.basic.region.toLowerCase().includes(q) ||
            c.id.toLowerCase().includes(q)
        );
    },

    // Get dispute by ID
    getDisputeById: function(id) {
        return DisputesData.find(d => d.id === id);
    },

    // Get disputes by country
    getDisputesByCountry: function(countryName) {
        return DisputesData.filter(d => d.countries.includes(countryName));
    },

    // Get physical feature by type and ID
    getFeature: function(type, id) {
        return PhysicalFeatures[type]?.find(f => f.id === id);
    },

    // Get features by country
    getFeaturesByCountry: function(countryName) {
        const result = {
            mountains: [],
            rivers: [],
            deserts: [],
            lakes: [],
            forests: []
        };

        Object.keys(result).forEach(type => {
            if (PhysicalFeatures[type]) {
                result[type] = PhysicalFeatures[type].filter(f => 
                    f.countries && f.countries.includes(countryName)
                );
            }
        });

        return result;
    },

    // Get Earth system by ID
    getEarthSystem: function(id) {
        return EarthSystemsData.find(s => s.id === id);
    },

    // Get climate zone by code
    getClimateByCode: function(code) {
        return ClimateData.find(c => c.code === code);
    },

    // Format population
    formatPopulation: function(pop) {
        if (!pop) return 'N/A';
        if (typeof pop === 'string') pop = parseInt(pop.replace(/,/g, ''));
        if (pop >= 1e9) return (pop / 1e9).toFixed(2) + ' Billion';
        if (pop >= 1e6) return (pop / 1e6).toFixed(1) + ' Million';
        if (pop >= 1e3) return (pop / 1e3).toFixed(1) + 'K';
        return pop.toLocaleString();
    },

    // Format area
    formatArea: function(area) {
        if (!area) return 'N/A';
        if (typeof area === 'string') area = parseFloat(area.replace(/,/g, ''));
        return area.toLocaleString() + ' km²';
    }
};

// ============================================
// EXPORT
// ============================================

// Make available globally
if (typeof window !== 'undefined') {
    window.PhysicalFeatures = PhysicalFeatures;
    window.DisputesData = DisputesData;
    window.ClimateData = ClimateData;
    window.EarthSystemsData = EarthSystemsData;
    window.EncyclopediaHelpers = EncyclopediaHelpers;
}

// Node.js export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        PhysicalFeatures,
        DisputesData,
        ClimateData,
        EarthSystemsData,
        EncyclopediaHelpers
    };
}

console.log('✅ Encyclopedia Master Data Loaded');
console.log('   - Physical Features: Mountains, Rivers, Deserts, Oceans, Lakes, Forests');
console.log('   - Disputes:', DisputesData.length);
console.log('   - Climate Zones:', ClimateData.length);
console.log('   - Earth Systems:', EarthSystemsData.length);
