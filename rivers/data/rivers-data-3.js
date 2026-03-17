// ============================================================
// RIVERS DATA FILE 3 - Rivers 21-30 (Yukon to Irrawaddy)
// Ordered by length: Longest to Shortest
// ============================================================

const riversData3 = [
    // ========================================
    // RIVER 21: YUKON RIVER
    // ========================================
    {
        id: 21,
        name: "Yukon River",
        length: 3185,
        continent: "North America",
        countries: [
            { name: "Canada", code: "CA", flag: "🇨🇦" },
            { name: "United States", code: "US", flag: "🇺🇸" }
        ],
        image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=800",
        
        // Source Information
        source: {
            name: "Llewellyn Glacier",
            coordinates: [59.6167, -134.3333],
            elevation: 645,
            description: "Originates from the Llewellyn Glacier near Atlin Lake in British Columbia, Canada"
        },
        
        // Mouth Information
        mouth: {
            name: "Bering Sea",
            coordinates: [62.5975, -164.8000],
            type: "Delta",
            description: "Flows into the Bering Sea through the Yukon-Kuskokwim Delta in Alaska"
        },
        
        // River Path Coordinates
        path: [
            [59.6167, -134.3333],
            [60.0000, -134.8000],
            [60.7200, -135.0500],
            [60.8500, -135.3800],
            [61.0500, -137.3500],
            [61.9500, -140.5000],
            [62.9667, -141.0000],
            [63.4333, -142.7833],
            [63.8700, -145.2500],
            [64.0833, -145.5333],
            [64.5667, -149.0833],
            [64.8500, -147.7167],
            [65.2500, -152.2500],
            [65.8333, -156.8333],
            [64.7167, -158.1000],
            [64.1000, -159.8500],
            [63.3333, -161.5000],
            [62.9667, -163.0333],
            [62.5975, -164.8000]
        ],
        
        // Tributaries (arrows pointing IN)
        tributaries: [
            {
                name: "Teslin River",
                coordinates: [60.1667, -134.8667],
                length: 393,
                side: "right",
                arrow: "in",
                description: "Major tributary joining near Hootalinqua"
            },
            {
                name: "Pelly River",
                coordinates: [62.7833, -137.3667],
                length: 608,
                side: "left",
                arrow: "in",
                description: "Joins at Fort Selkirk, significant gold rush history"
            },
            {
                name: "White River",
                coordinates: [63.0167, -140.0333],
                length: 338,
                side: "right",
                arrow: "in",
                description: "Glacier-fed tributary with distinctive white color"
            },
            {
                name: "Stewart River",
                coordinates: [63.3000, -139.4000],
                length: 644,
                side: "right",
                arrow: "in",
                description: "Important river during Klondike Gold Rush"
            },
            {
                name: "Klondike River",
                coordinates: [64.0333, -139.4167],
                length: 161,
                side: "right",
                arrow: "in",
                description: "Famous for the Klondike Gold Rush of 1896"
            },
            {
                name: "Tanana River",
                coordinates: [64.5667, -149.0833],
                length: 940,
                side: "left",
                arrow: "in",
                description: "Largest tributary, joins near Tanana village"
            },
            {
                name: "Porcupine River",
                coordinates: [66.9500, -145.2500],
                length: 721,
                side: "right",
                arrow: "in",
                description: "Drains northeastern Alaska and Yukon"
            },
            {
                name: "Koyukuk River",
                coordinates: [64.9333, -157.7167],
                length: 805,
                side: "right",
                arrow: "in",
                description: "Major Alaskan tributary"
            },
            {
                name: "Innoko River",
                coordinates: [63.4500, -159.6000],
                length: 805,
                side: "left",
                arrow: "in",
                description: "Flows through Innoko National Wildlife Refuge"
            }
        ],
        
        // Distributaries (arrows pointing OUT)
        distributaries: [
            {
                name: "Yukon Delta North Channel",
                coordinates: [62.9500, -164.5000],
                arrow: "out",
                description: "Northern distributary in the Yukon-Kuskokwim Delta"
            },
            {
                name: "Yukon Delta South Channel",
                coordinates: [62.4000, -165.0000],
                arrow: "out",
                description: "Southern distributary channel"
            },
            {
                name: "Apoon Pass",
                coordinates: [62.6000, -164.3000],
                arrow: "out",
                description: "Main navigable channel in the delta"
            }
        ],
        
        // Major Cities
        cities: [
            {
                name: "Whitehorse",
                coordinates: [60.7212, -135.0568],
                population: 25085,
                description: "Capital and largest city of Yukon, Canada"
            },
            {
                name: "Dawson City",
                coordinates: [64.0667, -139.4167],
                population: 1375,
                description: "Historic Klondike Gold Rush town"
            },
            {
                name: "Fairbanks",
                coordinates: [64.8378, -147.7164],
                population: 32515,
                description: "Largest city in Interior Alaska, on Tanana tributary"
            },
            {
                name: "Eagle",
                coordinates: [64.7881, -141.2000],
                population: 86,
                description: "Historic border town on the Yukon"
            },
            {
                name: "Circle",
                coordinates: [65.8256, -144.0606],
                population: 104,
                description: "One of the oldest mining towns in Interior Alaska"
            },
            {
                name: "Fort Yukon",
                coordinates: [66.5647, -145.2736],
                population: 583,
                description: "Located at the confluence with Porcupine River"
            },
            {
                name: "Tanana",
                coordinates: [65.1719, -152.0789],
                population: 231,
                description: "At the confluence of Yukon and Tanana rivers"
            },
            {
                name: "Galena",
                coordinates: [64.7336, -156.9275],
                population: 470,
                description: "Regional hub in western Interior Alaska"
            },
            {
                name: "Russian Mission",
                coordinates: [61.7850, -161.3194],
                population: 384,
                description: "Historic Russian Orthodox mission site"
            },
            {
                name: "Emmonak",
                coordinates: [62.7767, -164.5231],
                population: 762,
                description: "Yup'ik village near the Yukon Delta"
            }
        ],
        
        // Dams and Projects
        dams: [
            {
                name: "Whitehorse Rapids Dam",
                coordinates: [60.7100, -135.0400],
                height: 12,
                yearBuilt: 1958,
                purpose: "Hydroelectric power generation",
                capacity: "40 MW"
            }
        ],
        
        // Basin Information
        basinArea: 854000,
        discharge: 6430,
        
        // States/Provinces
        statesProvinces: [
            { name: "British Columbia", country: "Canada" },
            { name: "Yukon", country: "Canada" },
            { name: "Alaska", country: "United States" }
        ],
        
        // Importance and Issues
        economicImportance: [
            "Historic Klondike Gold Rush route",
            "Salmon fisheries (Chinook, Chum, Coho)",
            "Subsistence hunting and fishing for indigenous peoples",
            "Hydroelectric power generation",
            "Summer river transportation"
        ],
        
        environmentalIssues: [
            "Climate change affecting permafrost and water temperatures",
            "Declining salmon populations",
            "Mercury contamination from historic mining",
            "Changing ice patterns affecting winter travel",
            "Erosion of riverbanks"
        ],
        
        waterDisputes: [
            {
                countries: ["Canada", "United States"],
                description: "Yukon River Salmon Agreement",
                treaty: "Yukon River Salmon Agreement (2002)",
                status: "Ongoing cooperation on salmon management"
            }
        ],
        
        historicalImportance: [
            "Major route for Klondike Gold Rush (1896-1899)",
            "Traditional territory of Athabascan and Yup'ik peoples",
            "Russian exploration and fur trade (19th century)",
            "Sternwheeler steamboat era",
            "Alaska Highway construction during WWII"
        ],
        
        // Flyover Points for Animation
        flyoverPoints: [
            {
                coordinates: [59.6167, -134.3333],
                label: "Source: Llewellyn Glacier",
                type: "source"
            },
            {
                coordinates: [60.7212, -135.0568],
                label: "Whitehorse - Yukon Capital",
                type: "city"
            },
            {
                coordinates: [62.7833, -137.3667],
                label: "Pelly River Confluence",
                type: "tributary"
            },
            {
                coordinates: [64.0333, -139.4167],
                label: "Klondike River - Gold Rush Site",
                type: "tributary"
            },
            {
                coordinates: [64.0667, -139.4167],
                label: "Dawson City - Historic Town",
                type: "city"
            },
            {
                coordinates: [64.7881, -141.2000],
                label: "US-Canada Border",
                type: "border"
            },
            {
                coordinates: [64.5667, -149.0833],
                label: "Tanana River Confluence",
                type: "tributary"
            },
            {
                coordinates: [66.5647, -145.2736],
                label: "Fort Yukon",
                type: "city"
            },
            {
                coordinates: [64.9333, -157.7167],
                label: "Koyukuk River Confluence",
                type: "tributary"
            },
            {
                coordinates: [62.5975, -164.8000],
                label: "Mouth: Bering Sea",
                type: "mouth"
            }
        ],
        
        // Mind Map Structure
        mindMap: {
            central: "Yukon River",
            branches: [
                {
                    name: "Geography",
                    children: ["Length: 3,185 km", "Basin: 854,000 km²", "Discharge: 6,430 m³/s"]
                },
                {
                    name: "Source & Mouth",
                    children: ["Source: Llewellyn Glacier", "Mouth: Bering Sea", "Elevation Drop: 645m"]
                },
                {
                    name: "Countries",
                    children: ["Canada 🇨🇦", "United States 🇺🇸"]
                },
                {
                    name: "Major Tributaries",
                    children: ["Tanana River", "Porcupine River", "Koyukuk River", "Pelly River", "Klondike River"]
                },
                {
                    name: "Key Cities",
                    children: ["Whitehorse", "Dawson City", "Fairbanks", "Fort Yukon"]
                },
                {
                    name: "Historical Significance",
                    children: ["Klondike Gold Rush", "Indigenous Peoples", "Fur Trade Era"]
                },
                {
                    name: "Economy",
                    children: ["Salmon Fisheries", "Hydropower", "Tourism"]
                },
                {
                    name: "Environmental Concerns",
                    children: ["Climate Change", "Salmon Decline", "Mercury Pollution"]
                }
            ]
        }
    },

    // ========================================
    // RIVER 22: INDUS RIVER
    // ========================================
    {
        id: 22,
        name: "Indus River",
        length: 3180,
        continent: "Asia",
        countries: [
            { name: "China", code: "CN", flag: "🇨🇳" },
            { name: "India", code: "IN", flag: "🇮🇳" },
            { name: "Pakistan", code: "PK", flag: "🇵🇰" }
        ],
        image: "https://images.unsplash.com/photo-1623850942935-e42832556ce5?w=800",
        
        // Source Information
        source: {
            name: "Sênggê Zangbo (Lion River)",
            coordinates: [32.0833, 81.2833],
            elevation: 5500,
            description: "Originates near Lake Mansarovar in the Tibetan Plateau, close to Mount Kailash"
        },
        
        // Mouth Information
        mouth: {
            name: "Arabian Sea",
            coordinates: [23.9833, 67.4500],
            type: "Delta",
            description: "Empties into the Arabian Sea through a vast delta near Karachi, Pakistan"
        },
        
        // River Path Coordinates
        path: [
            [32.0833, 81.2833],
            [32.5000, 79.5000],
            [33.4300, 79.1000],
            [34.1500, 77.5700],
            [34.4500, 76.8500],
            [35.3000, 75.9200],
            [35.8800, 74.6800],
            [36.0300, 74.3300],
            [35.5300, 73.9300],
            [35.1500, 72.8300],
            [34.2000, 71.9800],
            [33.7300, 72.3600],
            [33.2500, 72.0700],
            [32.4400, 71.4700],
            [31.5800, 70.9400],
            [30.2000, 70.8500],
            [29.4000, 70.8000],
            [28.4200, 69.6800],
            [27.7200, 68.8500],
            [26.9000, 68.1000],
            [25.9700, 68.4500],
            [25.2900, 68.1700],
            [24.8300, 67.8000],
            [24.1800, 67.6000],
            [23.9833, 67.4500]
        ],
        
        // Tributaries (arrows pointing IN)
        tributaries: [
            {
                name: "Zanskar River",
                coordinates: [34.4400, 77.0100],
                length: 195,
                side: "left",
                arrow: "in",
                description: "Major tributary in Ladakh region"
            },
            {
                name: "Shyok River",
                coordinates: [35.2000, 76.2500],
                length: 550,
                side: "right",
                arrow: "in",
                description: "Originates from Siachen Glacier"
            },
            {
                name: "Gilgit River",
                coordinates: [35.8800, 74.3000],
                length: 240,
                side: "right",
                arrow: "in",
                description: "Drains the Gilgit-Baltistan region"
            },
            {
                name: "Kabul River",
                coordinates: [33.8800, 72.2500],
                length: 700,
                side: "right",
                arrow: "in",
                description: "Major tributary from Afghanistan"
            },
            {
                name: "Jhelum River",
                coordinates: [32.0000, 72.5000],
                length: 725,
                side: "left",
                arrow: "in",
                description: "One of the five rivers of Punjab"
            },
            {
                name: "Chenab River",
                coordinates: [31.0000, 71.5000],
                length: 960,
                side: "left",
                arrow: "in",
                description: "Largest tributary by water volume"
            },
            {
                name: "Ravi River",
                coordinates: [30.5000, 71.8000],
                length: 720,
                side: "left",
                arrow: "in",
                description: "One of the eastern rivers of Punjab"
            },
            {
                name: "Beas River",
                coordinates: [31.0000, 75.5000],
                length: 470,
                side: "left",
                arrow: "in",
                description: "Tributary of Sutlej, named after sage Vyasa"
            },
            {
                name: "Sutlej River",
                coordinates: [29.5000, 71.0000],
                length: 1450,
                side: "left",
                arrow: "in",
                description: "Longest of the five Punjab rivers"
            }
        ],
        
        // Distributaries (arrows pointing OUT)
        distributaries: [
            {
                name: "Nara Canal",
                coordinates: [26.0000, 68.5000],
                arrow: "out",
                description: "Major irrigation canal in Sindh"
            },
            {
                name: "Kori Creek",
                coordinates: [23.5000, 68.5000],
                arrow: "out",
                description: "Western delta channel"
            },
            {
                name: "Ochito River",
                coordinates: [24.0000, 67.8000],
                arrow: "out",
                description: "Eastern delta distributary"
            },
            {
                name: "Wari Channel",
                coordinates: [24.1000, 67.5000],
                arrow: "out",
                description: "Active delta channel"
            },
            {
                name: "Gharo Creek",
                coordinates: [24.8000, 67.3000],
                arrow: "out",
                description: "Distributary near the main mouth"
            }
        ],
        
        // Major Cities
        cities: [
            {
                name: "Leh",
                coordinates: [34.1526, 77.5771],
                population: 30870,
                description: "Historic city in Ladakh, India"
            },
            {
                name: "Skardu",
                coordinates: [35.2971, 75.6333],
                population: 50000,
                description: "Gateway to K2 and Karakoram mountains"
            },
            {
                name: "Gilgit",
                coordinates: [35.9194, 74.3083],
                population: 216760,
                description: "Capital of Gilgit-Baltistan"
            },
            {
                name: "Attock",
                coordinates: [33.7667, 72.3667],
                population: 94620,
                description: "Historic crossing point of the Indus"
            },
            {
                name: "Dera Ismail Khan",
                coordinates: [31.8314, 70.9019],
                population: 101616,
                description: "Major city in Khyber Pakhtunkhwa"
            },
            {
                name: "Sukkur",
                coordinates: [27.7052, 68.8574],
                population: 499900,
                description: "Site of the Sukkur Barrage"
            },
            {
                name: "Hyderabad",
                coordinates: [25.3960, 68.3578],
                population: 1732693,
                description: "Second largest city in Sindh"
            },
            {
                name: "Karachi",
                coordinates: [24.8607, 67.0011],
                population: 14910352,
                description: "Pakistan's largest city, near Indus Delta"
            },
            {
                name: "Thatta",
                coordinates: [24.7461, 67.9064],
                population: 46300,
                description: "Historic city in the Indus Delta"
            }
        ],
        
        // Dams and Projects
        dams: [
            {
                name: "Tarbela Dam",
                coordinates: [34.0894, 72.6978],
                height: 143,
                yearBuilt: 1976,
                purpose: "Hydroelectric power, irrigation, flood control",
                capacity: "4,888 MW"
            },
            {
                name: "Mangla Dam",
                coordinates: [33.1500, 73.6500],
                height: 147,
                yearBuilt: 1967,
                purpose: "Hydroelectric power and irrigation",
                capacity: "1,000 MW"
            },
            {
                name: "Sukkur Barrage",
                coordinates: [27.6800, 68.8700],
                height: 8,
                yearBuilt: 1932,
                purpose: "Irrigation water distribution",
                capacity: "Irrigates 3 million hectares"
            },
            {
                name: "Kotri Barrage",
                coordinates: [25.3667, 68.3000],
                height: 7,
                yearBuilt: 1955,
                purpose: "Irrigation and salinity control",
                capacity: "Controls downstream flow"
            },
            {
                name: "Guddu Barrage",
                coordinates: [28.4167, 69.7000],
                height: 12,
                yearBuilt: 1962,
                purpose: "Irrigation for Punjab and Sindh",
                capacity: "1.1 million hectares"
            },
            {
                name: "Diamer-Bhasha Dam",
                coordinates: [35.5189, 73.7028],
                height: 272,
                yearBuilt: "Under Construction",
                purpose: "Hydroelectric power and water storage",
                capacity: "4,500 MW (planned)"
            }
        ],
        
        // Basin Information
        basinArea: 1165000,
        discharge: 6600,
        
        // States/Provinces
        statesProvinces: [
            { name: "Tibet Autonomous Region", country: "China" },
            { name: "Ladakh", country: "India" },
            { name: "Gilgit-Baltistan", country: "Pakistan" },
            { name: "Khyber Pakhtunkhwa", country: "Pakistan" },
            { name: "Punjab", country: "Pakistan" },
            { name: "Sindh", country: "Pakistan" }
        ],
        
        // Importance and Issues
        economicImportance: [
            "Irrigation for world's largest contiguous irrigation system",
            "Agriculture: wheat, rice, cotton, sugarcane",
            "Hydroelectric power generation (over 6,000 MW)",
            "Drinking water for 200+ million people",
            "Fishing industry",
            "Transportation corridor"
        ],
        
        environmentalIssues: [
            "Water scarcity and over-extraction",
            "Salinity and waterlogging in lower reaches",
            "Industrial and urban pollution",
            "Declining fish populations",
            "Shrinking Indus Delta and mangrove loss",
            "Climate change affecting glacial water sources"
        ],
        
        waterDisputes: [
            {
                countries: ["India", "Pakistan"],
                description: "Indus Waters Treaty dispute over water sharing",
                treaty: "Indus Waters Treaty (1960)",
                status: "Ongoing tensions over dam constructions"
            },
            {
                countries: ["Afghanistan", "Pakistan"],
                description: "Kabul River water sharing",
                treaty: "No formal treaty",
                status: "Negotiations ongoing"
            }
        ],
        
        historicalImportance: [
            "Cradle of Indus Valley Civilization (3300-1300 BCE)",
            "Mohenjo-daro and Harappa ancient cities",
            "Alexander the Great's easternmost campaign",
            "Historic Silk Road river crossing",
            "Mughal Empire agriculture",
            "British colonial irrigation works"
        ],
        
        // Flyover Points for Animation
        flyoverPoints: [
            {
                coordinates: [32.0833, 81.2833],
                label: "Source: Tibetan Plateau",
                type: "source"
            },
            {
                coordinates: [34.1526, 77.5771],
                label: "Leh - Ladakh",
                type: "city"
            },
            {
                coordinates: [34.4400, 77.0100],
                label: "Zanskar River Confluence",
                type: "tributary"
            },
            {
                coordinates: [35.2971, 75.6333],
                label: "Skardu - Karakoram Gateway",
                type: "city"
            },
            {
                coordinates: [35.8800, 74.3000],
                label: "Gilgit River Confluence",
                type: "tributary"
            },
            {
                coordinates: [34.0894, 72.6978],
                label: "Tarbela Dam",
                type: "dam"
            },
            {
                coordinates: [33.8800, 72.2500],
                label: "Kabul River Confluence",
                type: "tributary"
            },
            {
                coordinates: [33.7667, 72.3667],
                label: "Attock - Historic Crossing",
                type: "city"
            },
            {
                coordinates: [27.7052, 68.8574],
                label: "Sukkur - Sukkur Barrage",
                type: "dam"
            },
            {
                coordinates: [25.3960, 68.3578],
                label: "Hyderabad",
                type: "city"
            },
            {
                coordinates: [23.9833, 67.4500],
                label: "Mouth: Arabian Sea",
                type: "mouth"
            }
        ],
        
        // Mind Map Structure
        mindMap: {
            central: "Indus River",
            branches: [
                {
                    name: "Geography",
                    children: ["Length: 3,180 km", "Basin: 1,165,000 km²", "Discharge: 6,600 m³/s"]
                },
                {
                    name: "Source & Mouth",
                    children: ["Source: Tibetan Plateau", "Mouth: Arabian Sea", "Elevation Drop: 5,500m"]
                },
                {
                    name: "Countries",
                    children: ["China 🇨🇳", "India 🇮🇳", "Pakistan 🇵🇰"]
                },
                {
                    name: "Five Rivers of Punjab",
                    children: ["Jhelum", "Chenab", "Ravi", "Beas", "Sutlej"]
                },
                {
                    name: "Major Dams",
                    children: ["Tarbela Dam", "Mangla Dam", "Sukkur Barrage", "Diamer-Bhasha"]
                },
                {
                    name: "Historical Significance",
                    children: ["Indus Valley Civilization", "Mohenjo-daro", "Harappa", "Silk Road"]
                },
                {
                    name: "Water Treaties",
                    children: ["Indus Waters Treaty 1960", "India-Pakistan Sharing"]
                },
                {
                    name: "Environmental Issues",
                    children: ["Water Scarcity", "Delta Shrinking", "Pollution", "Glacial Melt"]
                }
            ]
        }
    },

    // ========================================
    // RIVER 23: RIO GRANDE
    // ========================================
    {
        id: 23,
        name: "Rio Grande",
        length: 3051,
        continent: "North America",
        countries: [
            { name: "United States", code: "US", flag: "🇺🇸" },
            { name: "Mexico", code: "MX", flag: "🇲🇽" }
        ],
        image: "https://images.unsplash.com/photo-1580986836682-c1fcf8b2d7a5?w=800",
        
        // Source Information
        source: {
            name: "San Juan Mountains",
            coordinates: [37.7833, -107.5333],
            elevation: 3700,
            description: "Originates in the San Juan Mountains near Canby Mountain in Colorado"
        },
        
        // Mouth Information
        mouth: {
            name: "Gulf of Mexico",
            coordinates: [25.9567, -97.1467],
            type: "Estuary",
            description: "Flows into the Gulf of Mexico between Brownsville, Texas and Matamoros, Mexico"
        },
        
        // River Path Coordinates
        path: [
            [37.7833, -107.5333],
            [37.4700, -106.8500],
            [36.9000, -106.2000],
            [36.4500, -105.6700],
            [35.8800, -105.9000],
            [35.2500, -106.6000],
            [34.7000, -106.6500],
            [33.7700, -106.9000],
            [32.3500, -106.7700],
            [31.8000, -106.4300],
            [31.1200, -105.4500],
            [30.3000, -104.4000],
            [29.5600, -104.4000],
            [29.3200, -103.5000],
            [29.1000, -102.5000],
            [28.7000, -100.5000],
            [27.5000, -99.4500],
            [26.5600, -98.9500],
            [26.1000, -98.1000],
            [25.9567, -97.1467]
        ],
        
        // Tributaries (arrows pointing IN)
        tributaries: [
            {
                name: "Rio Chama",
                coordinates: [36.2500, -106.0500],
                length: 217,
                side: "left",
                arrow: "in",
                description: "Major tributary in New Mexico"
            },
            {
                name: "Pecos River",
                coordinates: [29.7000, -101.4000],
                length: 1490,
                side: "right",
                arrow: "in",
                description: "Longest tributary, drains eastern New Mexico and west Texas"
            },
            {
                name: "Rio Conchos",
                coordinates: [29.5333, -104.4167],
                length: 560,
                side: "left",
                arrow: "in",
                description: "Major Mexican tributary, provides 80% of water below El Paso"
            },
            {
                name: "Devils River",
                coordinates: [29.8000, -101.1500],
                length: 145,
                side: "right",
                arrow: "in",
                description: "Spring-fed tributary in Texas"
            },
            {
                name: "Rio Salado",
                coordinates: [27.0000, -99.5000],
                length: 320,
                side: "left",
                arrow: "in",
                description: "Mexican tributary entering near Falcon Dam"
            },
            {
                name: "Rio San Juan",
                coordinates: [26.0000, -98.5000],
                length: 400,
                side: "left",
                arrow: "in",
                description: "Tributary from Nuevo León, Mexico"
            }
        ],
        
        // Distributaries (arrows pointing OUT)
        distributaries: [
            {
                name: "Rio Grande Delta Channels",
                coordinates: [25.9700, -97.2000],
                arrow: "out",
                description: "Historic delta channels (mostly dry now)"
            },
            {
                name: "Arroyo Colorado",
                coordinates: [26.0700, -97.4000],
                arrow: "out",
                description: "Former distributary, now primarily drainage canal"
            }
        ],
        
        // Major Cities
        cities: [
            {
                name: "Alamosa",
                coordinates: [37.4694, -105.8700],
                population: 9814,
                description: "City in the San Luis Valley, Colorado"
            },
            {
                name: "Santa Fe",
                coordinates: [35.6870, -105.9378],
                population: 84683,
                description: "Capital of New Mexico, near Rio Grande"
            },
            {
                name: "Albuquerque",
                coordinates: [35.0844, -106.6504],
                population: 564559,
                description: "Largest city on the Rio Grande"
            },
            {
                name: "Las Cruces",
                coordinates: [32.3199, -106.7637],
                population: 111385,
                description: "Major New Mexico city"
            },
            {
                name: "El Paso",
                coordinates: [31.7619, -106.4850],
                population: 678815,
                description: "Texas border city"
            },
            {
                name: "Ciudad Juárez",
                coordinates: [31.6904, -106.4245],
                population: 1501551,
                description: "Major Mexican border city"
            },
            {
                name: "Presidio",
                coordinates: [29.5608, -104.3722],
                population: 4426,
                description: "Border crossing point"
            },
            {
                name: "Laredo",
                coordinates: [27.5306, -99.4803],
                population: 261639,
                description: "Texas border city"
            },
            {
                name: "Nuevo Laredo",
                coordinates: [27.4767, -99.5067],
                population: 399431,
                description: "Mexican border city opposite Laredo"
            },
            {
                name: "Brownsville",
                coordinates: [25.9017, -97.4975],
                population: 186738,
                description: "Texas city at the river mouth"
            },
            {
                name: "Matamoros",
                coordinates: [25.8794, -97.5042],
                population: 520367,
                description: "Mexican city opposite Brownsville"
            }
        ],
        
        // Dams and Projects
        dams: [
            {
                name: "Elephant Butte Dam",
                coordinates: [33.1419, -107.1831],
                height: 92,
                yearBuilt: 1916,
                purpose: "Irrigation and flood control",
                capacity: "2.6 million acre-feet"
            },
            {
                name: "Caballo Dam",
                coordinates: [32.8933, -107.2942],
                height: 30,
                yearBuilt: 1938,
                purpose: "Re-regulation of Elephant Butte releases",
                capacity: "326,000 acre-feet"
            },
            {
                name: "Amistad Dam",
                coordinates: [29.4500, -101.0500],
                height: 77,
                yearBuilt: 1969,
                purpose: "Flood control, water conservation, power",
                capacity: "International dam (US-Mexico)"
            },
            {
                name: "Falcon Dam",
                coordinates: [26.5544, -99.1653],
                height: 45,
                yearBuilt: 1954,
                purpose: "Irrigation, flood control, hydropower",
                capacity: "2.6 million acre-feet"
            },
            {
                name: "Anzalduas Dam",
                coordinates: [26.1422, -98.3289],
                height: 8,
                yearBuilt: 1960,
                purpose: "Diversion for irrigation",
                capacity: "Diversion structure"
            }
        ],
        
        // Basin Information
        basinArea: 870000,
        discharge: 160,
        
        // States/Provinces
        statesProvinces: [
            { name: "Colorado", country: "United States" },
            { name: "New Mexico", country: "United States" },
            { name: "Texas", country: "United States" },
            { name: "Chihuahua", country: "Mexico" },
            { name: "Coahuila", country: "Mexico" },
            { name: "Nuevo León", country: "Mexico" },
            { name: "Tamaulipas", country: "Mexico" }
        ],
        
        // Importance and Issues
        economicImportance: [
            "Primary water source for 6 million people",
            "Irrigation for agriculture in arid regions",
            "International border between US and Mexico",
            "Historic trade and transportation route",
            "Supports $1+ billion agricultural industry"
        ],
        
        environmentalIssues: [
            "Severe water over-allocation and scarcity",
            "River often runs dry before reaching Gulf",
            "Salinity increase downstream",
            "Invasive species (salt cedar, giant cane)",
            "Habitat loss for native species",
            "Climate change reducing snowpack"
        ],
        
        waterDisputes: [
            {
                countries: ["United States", "Mexico"],
                description: "Water allocation disputes under changing conditions",
                treaty: "Treaty of 1944 (Water Treaty)",
                status: "Ongoing disputes over Mexican water deliveries"
            },
            {
                countries: ["Colorado", "New Mexico", "Texas"],
                description: "Rio Grande Compact - interstate water sharing",
                treaty: "Rio Grande Compact (1938)",
                status: "Ongoing legal disputes between states"
            }
        ],
        
        historicalImportance: [
            "Ancient Pueblo civilizations",
            "Spanish colonial exploration (1540s)",
            "Santa Fe Trail terminus",
            "Mexican-American War boundary (1848)",
            "Historic border between cultures",
            "Camino Real trade route"
        ],
        
        // Flyover Points for Animation
        flyoverPoints: [
            {
                coordinates: [37.7833, -107.5333],
                label: "Source: San Juan Mountains",
                type: "source"
            },
            {
                coordinates: [35.0844, -106.6504],
                label: "Albuquerque - Largest City",
                type: "city"
            },
            {
                coordinates: [33.1419, -107.1831],
                label: "Elephant Butte Dam",
                type: "dam"
            },
            {
                coordinates: [31.7619, -106.4850],
                label: "El Paso / Ciudad Juárez",
                type: "city"
            },
            {
                coordinates: [29.5333, -104.4167],
                label: "Rio Conchos Confluence",
                type: "tributary"
            },
            {
                coordinates: [29.4500, -101.0500],
                label: "Amistad Dam",
                type: "dam"
            },
            {
                coordinates: [27.5306, -99.4803],
                label: "Laredo / Nuevo Laredo",
                type: "city"
            },
            {
                coordinates: [26.5544, -99.1653],
                label: "Falcon Dam",
                type: "dam"
            },
            {
                coordinates: [25.9017, -97.4975],
                label: "Brownsville / Matamoros",
                type: "city"
            },
            {
                coordinates: [25.9567, -97.1467],
                label: "Mouth: Gulf of Mexico",
                type: "mouth"
            }
        ],
        
        // Mind Map Structure
        mindMap: {
            central: "Rio Grande",
            branches: [
                {
                    name: "Geography",
                    children: ["Length: 3,051 km", "Basin: 870,000 km²", "Discharge: 160 m³/s"]
                },
                {
                    name: "Source & Mouth",
                    children: ["Source: San Juan Mtns", "Mouth: Gulf of Mexico", "Elevation: 3,700m"]
                },
                {
                    name: "Countries",
                    children: ["United States 🇺🇸", "Mexico 🇲🇽"]
                },
                {
                    name: "Major Tributaries",
                    children: ["Pecos River", "Rio Conchos", "Rio Chama", "Devils River"]
                },
                {
                    name: "Border Cities",
                    children: ["El Paso-Juárez", "Laredo-Nuevo Laredo", "Brownsville-Matamoros"]
                },
                {
                    name: "Major Dams",
                    children: ["Elephant Butte", "Amistad Dam", "Falcon Dam"]
                },
                {
                    name: "Water Issues",
                    children: ["Over-allocation", "River Runs Dry", "Treaty Disputes"]
                },
                {
                    name: "Historical",
                    children: ["Pueblo Peoples", "Spanish Exploration", "US-Mexico Border"]
                }
            ]
        }
    },

    // ========================================
    // RIVER 24: SÃO FRANCISCO RIVER
    // ========================================
    {
        id: 24,
        name: "São Francisco River",
        length: 2914,
        continent: "South America",
        countries: [
            { name: "Brazil", code: "BR", flag: "🇧🇷" }
        ],
        image: "https://images.unsplash.com/photo-1619468129361-605ebea04b44?w=800",
        
        // Source Information
        source: {
            name: "Serra da Canastra",
            coordinates: [-20.2167, -46.4333],
            elevation: 1500,
            description: "Originates in the Serra da Canastra National Park in Minas Gerais state"
        },
        
        // Mouth Information
        mouth: {
            name: "Atlantic Ocean",
            coordinates: [-10.5000, -36.3833],
            type: "Estuary",
            description: "Empties into the Atlantic Ocean between the states of Sergipe and Alagoas"
        },
        
        // River Path Coordinates
        path: [
            [-20.2167, -46.4333],
            [-19.5000, -45.5000],
            [-18.5000, -45.0000],
            [-17.3500, -44.8500],
            [-16.2500, -44.4500],
            [-15.2000, -43.9500],
            [-14.4000, -43.8000],
            [-13.6000, -43.6000],
            [-12.5000, -43.2000],
            [-11.0000, -42.8500],
            [-10.5000, -42.5000],
            [-10.0000, -40.5000],
            [-9.4000, -40.2000],
            [-9.5500, -38.5000],
            [-10.2000, -37.0000],
            [-10.5000, -36.3833]
        ],
        
        // Tributaries (arrows pointing IN)
        tributaries: [
            {
                name: "Rio das Velhas",
                coordinates: [-18.3000, -44.9000],
                length: 761,
                side: "left",
                arrow: "in",
                description: "Major tributary in Minas Gerais"
            },
            {
                name: "Rio Paracatu",
                coordinates: [-16.2000, -45.1000],
                length: 485,
                side: "left",
                arrow: "in",
                description: "Important left-bank tributary"
            },
            {
                name: "Rio Carinhanha",
                coordinates: [-14.3000, -43.8000],
                length: 456,
                side: "left",
                arrow: "in",
                description: "Border tributary between Minas Gerais and Bahia"
            },
            {
                name: "Rio Corrente",
                coordinates: [-13.3000, -43.6500],
                length: 350,
                side: "left",
                arrow: "in",
                description: "Western tributary from Bahia"
            },
            {
                name: "Rio Grande",
                coordinates: [-11.2000, -43.0500],
                length: 580,
                side: "left",
                arrow: "in",
                description: "Major western tributary"
            },
            {
                name: "Rio Preto",
                coordinates: [-11.0000, -44.0000],
                length: 440,
                side: "left",
                arrow: "in",
                description: "Tributary in western Bahia"
            },
            {
                name: "Rio Salitre",
                coordinates: [-10.0000, -41.0000],
                length: 270,
                side: "right",
                arrow: "in",
                description: "Eastern tributary in Bahia"
            },
            {
                name: "Rio Moxotó",
                coordinates: [-8.5000, -38.5000],
                length: 220,
                side: "right",
                arrow: "in",
                description: "Tributary from Pernambuco"
            }
        ],
        
        // Distributaries (arrows pointing OUT)
        distributaries: [
            {
                name: "Canal do Funil",
                coordinates: [-10.3000, -36.5000],
                arrow: "out",
                description: "Northern distributary channel near the mouth"
            },
            {
                name: "Riacho do Alagadiço",
                coordinates: [-10.4500, -36.4000],
                arrow: "out",
                description: "Small distributary stream"
            }
        ],
        
        // Major Cities
        cities: [
            {
                name: "Pirapora",
                coordinates: [-17.3450, -44.9417],
                population: 56227,
                description: "Major port city, end of navigable section"
            },
            {
                name: "Januária",
                coordinates: [-15.4800, -44.3619],
                population: 67853,
                description: "Historic river port town"
            },
            {
                name: "Bom Jesus da Lapa",
                coordinates: [-13.2550, -43.4183],
                population: 72420,
                description: "Important pilgrimage city"
            },
            {
                name: "Juazeiro",
                coordinates: [-9.4167, -40.5000],
                population: 216588,
                description: "Major city in Bahia, irrigation hub"
            },
            {
                name: "Petrolina",
                coordinates: [-9.3889, -40.5022],
                population: 354317,
                description: "Twin city of Juazeiro in Pernambuco"
            },
            {
                name: "Paulo Afonso",
                coordinates: [-9.4000, -38.2167],
                population: 117014,
                description: "Named after Paulo Afonso Falls and hydropower complex"
            },
            {
                name: "Canindé de São Francisco",
                coordinates: [-9.6500, -37.7900],
                population: 29018,
                description: "Site of Xingó Dam"
            },
            {
                name: "Propriá",
                coordinates: [-10.2100, -36.8400],
                population: 28451,
                description: "Historic river port in Sergipe"
            },
            {
                name: "Penedo",
                coordinates: [-10.2900, -36.5800],
                population: 64854,
                description: "Colonial city near the river mouth"
            }
        ],
        
        // Dams and Projects
        dams: [
            {
                name: "Três Marias Dam",
                coordinates: [-18.2133, -45.2642],
                height: 75,
                yearBuilt: 1961,
                purpose: "Hydroelectric power, flow regulation",
                capacity: "396 MW"
            },
            {
                name: "Sobradinho Dam",
                coordinates: [-9.4300, -40.8300],
                height: 41,
                yearBuilt: 1979,
                purpose: "Hydroelectric power, water storage",
                capacity: "1,050 MW"
            },
            {
                name: "Itaparica Dam",
                coordinates: [-9.1500, -38.3000],
                height: 105,
                yearBuilt: 1988,
                purpose: "Hydroelectric power generation",
                capacity: "2,500 MW"
            },
            {
                name: "Paulo Afonso Complex",
                coordinates: [-9.4000, -38.2000],
                height: 60,
                yearBuilt: 1954,
                purpose: "Hydroelectric power (4 plants)",
                capacity: "3,986 MW total"
            },
            {
                name: "Xingó Dam",
                coordinates: [-9.6200, -37.7900],
                height: 140,
                yearBuilt: 1994,
                purpose: "Hydroelectric power generation",
                capacity: "3,162 MW"
            }
        ],
        
        // Basin Information
        basinArea: 641000,
        discharge: 2850,
        
        // States/Provinces
        statesProvinces: [
            { name: "Minas Gerais", country: "Brazil" },
            { name: "Bahia", country: "Brazil" },
            { name: "Pernambuco", country: "Brazil" },
            { name: "Alagoas", country: "Brazil" },
            { name: "Sergipe", country: "Brazil" },
            { name: "Goiás", country: "Brazil" },
            { name: "Distrito Federal", country: "Brazil" }
        ],
        
        // Importance and Issues
        economicImportance: [
            "Called 'River of National Unity' - connects 5 states",
            "Irrigated agriculture: fruits, vegetables, grapes",
            "Major hydroelectric power generation (10,700 MW)",
            "Navigation: 1,371 km navigable stretch",
            "Fishing industry",
            "Water transposition project to northeast"
        ],
        
        environmentalIssues: [
            "Water diversion reducing downstream flow",
            "Deforestation in the basin",
            "Industrial and agricultural pollution",
            "Invasive species (water hyacinth)",
            "Declining fish populations",
            "Desertification in lower reaches"
        ],
        
        waterDisputes: [
            {
                countries: ["Brazil internal states"],
                description: "Water transposition controversy",
                treaty: "São Francisco River Transposition Project",
                status: "Ongoing since 2007, controversy between states"
            }
        ],
        
        historicalImportance: [
            "Named by early Portuguese explorers (1501)",
            "Key route for inland colonization",
            "Bahian cattle ranching region",
            "Cultural significance to the Sertão region",
            "Inspired literature and music (João Guimarães Rosa)"
        ],
        
        // Flyover Points for Animation
        flyoverPoints: [
            {
                coordinates: [-20.2167, -46.4333],
                label: "Source: Serra da Canastra",
                type: "source"
            },
            {
                coordinates: [-18.2133, -45.2642],
                label: "Três Marias Dam",
                type: "dam"
            },
            {
                coordinates: [-17.3450, -44.9417],
                label: "Pirapora - Navigation Start",
                type: "city"
            },
            {
                coordinates: [-13.2550, -43.4183],
                label: "Bom Jesus da Lapa",
                type: "city"
            },
            {
                coordinates: [-9.4300, -40.8300],
                label: "Sobradinho Dam",
                type: "dam"
            },
            {
                coordinates: [-9.4167, -40.5000],
                label: "Juazeiro-Petrolina",
                type: "city"
            },
            {
                coordinates: [-9.4000, -38.2000],
                label: "Paulo Afonso Falls & Dam",
                type: "dam"
            },
            {
                coordinates: [-9.6200, -37.7900],
                label: "Xingó Dam",
                type: "dam"
            },
            {
                coordinates: [-10.2900, -36.5800],
                label: "Penedo - Colonial City",
                type: "city"
            },
            {
                coordinates: [-10.5000, -36.3833],
                label: "Mouth: Atlantic Ocean",
                type: "mouth"
            }
        ],
        
        // Mind Map Structure
        mindMap: {
            central: "São Francisco River",
            branches: [
                {
                    name: "Geography",
                    children: ["Length: 2,914 km", "Basin: 641,000 km²", "Discharge: 2,850 m³/s"]
                },
                {
                    name: "Source & Mouth",
                    children: ["Source: Serra da Canastra", "Mouth: Atlantic Ocean", "Elevation: 1,500m"]
                },
                {
                    name: "States Crossed",
                    children: ["Minas Gerais", "Bahia", "Pernambuco", "Alagoas", "Sergipe"]
                },
                {
                    name: "Major Tributaries",
                    children: ["Rio das Velhas", "Rio Paracatu", "Rio Grande", "Rio Carinhanha"]
                },
                {
                    name: "Major Dams",
                    children: ["Sobradinho", "Três Marias", "Xingó", "Paulo Afonso"]
                },
                {
                    name: "Economy",
                    children: ["Hydropower", "Irrigated Agriculture", "Navigation", "Fishing"]
                },
                {
                    name: "Cultural",
                    children: ["River of National Unity", "Sertão Culture", "Literature & Music"]
                },
                {
                    name: "Issues",
                    children: ["Water Transposition", "Reduced Flow", "Pollution"]
                }
            ]
        }
    },

    // ========================================
    // RIVER 25: SALWEEN RIVER
    // ========================================
    {
        id: 25,
        name: "Salween River",
        length: 2815,
        continent: "Asia",
        countries: [
            { name: "China", code: "CN", flag: "🇨🇳" },
            { name: "Myanmar", code: "MM", flag: "🇲🇲" },
            { name: "Thailand", code: "TH", flag: "🇹🇭" }
        ],
        image: "https://images.unsplash.com/photo-1516496636080-14fb876e029d?w=800",
        
        // Source Information
        source: {
            name: "Tanggula Mountains",
            coordinates: [33.1500, 94.0000],
            elevation: 4750,
            description: "Originates in the Tanggula Mountains on the Tibetan Plateau as the Lü River (Nujiang)"
        },
        
        // Mouth Information
        mouth: {
            name: "Andaman Sea",
            coordinates: [16.5000, 97.6167],
            type: "Estuary",
            description: "Flows into the Andaman Sea at the Gulf of Martaban near Mawlamyine, Myanmar"
        },
        
        // River Path Coordinates
        path: [
            [33.1500, 94.0000],
            [31.5000, 96.0000],
            [29.5000, 97.5000],
            [28.2000, 98.0000],
            [27.3000, 98.5000],
            [26.3000, 98.7000],
            [25.1000, 98.9000],
            [24.0000, 98.6000],
            [22.5000, 98.5000],
            [21.0000, 98.2000],
            [19.5000, 97.8000],
            [18.5000, 97.7000],
            [17.5000, 97.6500],
            [16.5000, 97.6167]
        ],
        
        // Tributaries (arrows pointing IN)
        tributaries: [
            {
                name: "Nam Kong River",
                coordinates: [20.0000, 98.3000],
                length: 200,
                side: "left",
                arrow: "in",
                description: "Tributary in Shan State, Myanmar"
            },
            {
                name: "Nam Pang River",
                coordinates: [21.5000, 98.4000],
                length: 240,
                side: "left",
                arrow: "in",
                description: "Major Shan State tributary"
            },
            {
                name: "Moei River",
                coordinates: [16.7000, 98.5500],
                length: 327,
                side: "right",
                arrow: "in",
                description: "Forms part of Thailand-Myanmar border"
            },
            {
                name: "Nam Mae Yuam",
                coordinates: [18.0000, 97.8500],
                length: 150,
                side: "right",
                arrow: "in",
                description: "Thai tributary"
            },
            {
                name: "Pai River",
                coordinates: [19.0000, 98.0000],
                length: 180,
                side: "right",
                arrow: "in",
                description: "Flows from Mae Hong Son Province, Thailand"
            },
            {
                name: "Nanting River",
                coordinates: [24.0000, 99.0000],
                length: 160,
                side: "left",
                arrow: "in",
                description: "Chinese tributary in Yunnan"
            },
            {
                name: "Shan Rivers",
                coordinates: [22.0000, 98.5000],
                length: 200,
                side: "left",
                arrow: "in",
                description: "Multiple tributaries from Shan Plateau"
            }
        ],
        
        // Distributaries (arrows pointing OUT)
        distributaries: [
            {
                name: "Salween Delta Channels",
                coordinates: [16.5500, 97.5500],
                arrow: "out",
                description: "Minor delta channels near Mawlamyine"
            }
        ],
        
        // Major Cities
        cities: [
            {
                name: "Liuku",
                coordinates: [25.8500, 98.8500],
                population: 100000,
                description: "Capital of Nujiang Prefecture, Yunnan, China"
            },
            {
                name: "Fugong",
                coordinates: [26.9000, 98.8700],
                population: 50000,
                description: "County town in Nujiang, Yunnan"
            },
            {
                name: "Kunlong",
                coordinates: [23.5000, 98.7000],
                population: 25000,
                description: "Town in northern Shan State, Myanmar"
            },
            {
                name: "Mong Mao",
                coordinates: [22.0000, 98.5000],
                population: 30000,
                description: "Town in Shan State, Myanmar"
            },
            {
                name: "Pa-an",
                coordinates: [16.8900, 97.6300],
                population: 50000,
                description: "Capital of Karen State, Myanmar"
            },
            {
                name: "Mawlamyine",
                coordinates: [16.4831, 97.6256],
                population: 438861,
                description: "Major port city, third largest in Myanmar"
            },
            {
                name: "Mae Hong Son",
                coordinates: [19.3017, 97.9719],
                population: 8000,
                description: "Thai province capital near the Salween"
            },
            {
                name: "Mae Sariang",
                coordinates: [18.1689, 97.9364],
                population: 10000,
                description: "Thai town on Salween tributary"
            }
        ],
        
        // Dams and Projects
        dams: [
            {
                name: "Nuozhadu Dam",
                coordinates: [22.6500, 100.4000],
                height: 261,
                yearBuilt: 2014,
                purpose: "Hydroelectric power",
                capacity: "5,850 MW (on Mekong, often confused)"
            },
            {
                name: "Planned Salween Dams",
                coordinates: [24.0000, 98.6000],
                height: "Various",
                yearBuilt: "Proposed",
                purpose: "China has proposed 13 dams on the Nu River",
                capacity: "21,000 MW total (suspended)"
            }
        ],
        
        // Basin Information
        basinArea: 324000,
        discharge: 1494,
        
        // States/Provinces
        statesProvinces: [
            { name: "Qinghai", country: "China" },
            { name: "Tibet Autonomous Region", country: "China" },
            { name: "Yunnan", country: "China" },
            { name: "Shan State", country: "Myanmar" },
            { name: "Kayah State", country: "Myanmar" },
            { name: "Kayin State", country: "Myanmar" },
            { name: "Mon State", country: "Myanmar" },
            { name: "Mae Hong Son", country: "Thailand" },
            { name: "Tak", country: "Thailand" }
        ],
        
        // Importance and Issues
        economicImportance: [
            "Supports diverse fisheries",
            "Irrigation for rice cultivation",
            "Proposed hydropower potential (21,000 MW)",
            "Transportation in lower reaches",
            "Mining activities in watershed"
        ],
        
        environmentalIssues: [
            "Proposed dam construction threatening ecosystem",
            "One of last free-flowing major rivers in Asia",
            "Deforestation in upper watershed",
            "Mining pollution",
            "Climate change affecting glacial sources"
        ],
        
        waterDisputes: [
            {
                countries: ["China", "Myanmar", "Thailand"],
                description: "Proposed dam projects controversy",
                treaty: "No formal treaty",
                status: "China suspended dam plans in 2016, civil society opposition"
            }
        ],
        
        historicalImportance: [
            "Historic Burma Road crossing",
            "World War II strategic importance",
            "Trade route between China and Myanmar",
            "Home to diverse ethnic minorities (Lisu, Nu, Dulong)"
        ],
        
        // Flyover Points for Animation
        flyoverPoints: [
            {
                coordinates: [33.1500, 94.0000],
                label: "Source: Tanggula Mountains",
                type: "source"
            },
            {
                coordinates: [27.3000, 98.5000],
                label: "Three Parallel Rivers Region",
                type: "landmark"
            },
            {
                coordinates: [25.8500, 98.8500],
                label: "Liuku - Nujiang Capital",
                type: "city"
            },
            {
                coordinates: [24.5000, 98.8000],
                label: "China-Myanmar Border",
                type: "border"
            },
            {
                coordinates: [22.5000, 98.5000],
                label: "Shan State - Myanmar",
                type: "region"
            },
            {
                coordinates: [19.0000, 98.0000],
                label: "Thailand-Myanmar Border",
                type: "border"
            },
            {
                coordinates: [16.8900, 97.6300],
                label: "Pa-an - Karen State Capital",
                type: "city"
            },
            {
                coordinates: [16.4831, 97.6256],
                label: "Mawlamyine",
                type: "city"
            },
            {
                coordinates: [16.5000, 97.6167],
                label: "Mouth: Andaman Sea",
                type: "mouth"
            }
        ],
        
        // Mind Map Structure
        mindMap: {
            central: "Salween River",
            branches: [
                {
                    name: "Geography",
                    children: ["Length: 2,815 km", "Basin: 324,000 km²", "Discharge: 1,494 m³/s"]
                },
                {
                    name: "Source & Mouth",
                    children: ["Source: Tanggula Mtns", "Mouth: Andaman Sea", "Elevation: 4,750m"]
                },
                {
                    name: "Countries",
                    children: ["China 🇨🇳", "Myanmar 🇲🇲", "Thailand 🇹🇭"]
                },
                {
                    name: "Local Names",
                    children: ["Nu River (China)", "Thanlwin (Myanmar)", "Salawin (Thailand)"]
                },
                {
                    name: "Unique Features",
                    children: ["Last Free-Flowing River", "Three Parallel Rivers", "UNESCO Heritage"]
                },
                {
                    name: "Environmental",
                    children: ["Proposed 13 Dams", "Conservation Efforts", "Indigenous Opposition"]
                },
                {
                    name: "Ethnic Groups",
                    children: ["Lisu", "Nu", "Karen", "Shan", "Mon"]
                },
                {
                    name: "Historical",
                    children: ["Burma Road", "WWII Importance", "Trade Route"]
                }
            ]
        }
    },

    // ========================================
    // RIVER 26: COLORADO RIVER
    // ========================================
    {
        id: 26,
        name: "Colorado River",
        length: 2330,
        continent: "North America",
        countries: [
            { name: "United States", code: "US", flag: "🇺🇸" },
            { name: "Mexico", code: "MX", flag: "🇲🇽" }
        ],
        image: "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=800",
        
        // Source Information
        source: {
            name: "La Poudre Pass",
            coordinates: [40.4736, -105.8219],
            elevation: 3104,
            description: "Originates in Rocky Mountain National Park, Colorado, near La Poudre Pass Lake"
        },
        
        // Mouth Information
        mouth: {
            name: "Gulf of California",
            coordinates: [31.9000, -114.9167],
            type: "Delta (mostly dry)",
            description: "Historically flowed into Gulf of California; now rarely reaches the sea due to diversions"
        },
        
        // River Path Coordinates
        path: [
            [40.4736, -105.8219],
            [40.0000, -106.4000],
            [39.5000, -107.3000],
            [39.0000, -108.0000],
            [38.5000, -109.0000],
            [38.7500, -109.5500],
            [38.2000, -110.5000],
            [37.2000, -110.0000],
            [36.8500, -111.5000],
            [36.1000, -111.8500],
            [36.0000, -113.0000],
            [36.0100, -114.0000],
            [35.2000, -114.5600],
            [34.8000, -114.5200],
            [33.5000, -114.5000],
            [32.7500, -114.5500],
            [32.2000, -114.8500],
            [31.9000, -114.9167]
        ],
        
        // Tributaries (arrows pointing IN)
        tributaries: [
            {
                name: "Green River",
                coordinates: [38.1900, -109.9000],
                length: 1175,
                side: "left",
                arrow: "in",
                description: "Largest tributary, joins in Utah"
            },
            {
                name: "San Juan River",
                coordinates: [37.1833, -109.8833],
                length: 616,
                side: "left",
                arrow: "in",
                description: "Major tributary from New Mexico"
            },
            {
                name: "Little Colorado River",
                coordinates: [36.1833, -111.7833],
                length: 507,
                side: "right",
                arrow: "in",
                description: "Joins in Grand Canyon"
            },
            {
                name: "Virgin River",
                coordinates: [36.1833, -114.0833],
                length: 322,
                side: "left",
                arrow: "in",
                description: "Tributary from Zion National Park"
            },
            {
                name: "Gila River",
                coordinates: [32.7167, -114.5500],
                length: 1044,
                side: "left",
                arrow: "in",
                description: "Major Arizona tributary, mostly diverted"
            },
            {
                name: "Bill Williams River",
                coordinates: [34.2333, -114.0667],
                length: 72,
                side: "left",
                arrow: "in",
                description: "Arizona tributary entering Lake Havasu"
            },
            {
                name: "Gunnison River",
                coordinates: [38.8833, -108.4667],
                length: 290,
                side: "right",
                arrow: "in",
                description: "Colorado tributary, Black Canyon"
            },
            {
                name: "Dolores River",
                coordinates: [38.7300, -109.0300],
                length: 400,
                side: "right",
                arrow: "in",
                description: "Joins near Utah-Colorado border"
            }
        ],
        
        // Distributaries (arrows pointing OUT)
        distributaries: [
            {
                name: "Historic Colorado Delta Channels",
                coordinates: [31.9500, -114.8500],
                arrow: "out",
                description: "Once supported vast wetlands, now mostly dry"
            },
            {
                name: "Rio Hardy",
                coordinates: [32.0500, -115.1500],
                arrow: "out",
                description: "Former distributary, occasionally receives pulse flows"
            }
        ],
        
        // Major Cities
        cities: [
            {
                name: "Grand Junction",
                coordinates: [39.0639, -108.5506],
                population: 65560,
                description: "Major city in western Colorado"
            },
            {
                name: "Moab",
                coordinates: [38.5733, -109.5498],
                population: 5366,
                description: "Utah town near Arches National Park"
            },
            {
                name: "Page",
                coordinates: [36.9147, -111.4558],
                population: 7440,
                description: "Arizona town near Glen Canyon Dam"
            },
            {
                name: "Las Vegas",
                coordinates: [36.1699, -115.1398],
                population: 641903,
                description: "Major city, receives water from Lake Mead"
            },
            {
                name: "Boulder City",
                coordinates: [35.9783, -114.8328],
                population: 15977,
                description: "Built for Hoover Dam construction"
            },
            {
                name: "Laughlin",
                coordinates: [35.1678, -114.5728],
                population: 7323,
                description: "Nevada casino town on the river"
            },
            {
                name: "Lake Havasu City",
                coordinates: [34.4839, -114.3224],
                population: 57238,
                description: "Arizona resort city, London Bridge"
            },
            {
                name: "Yuma",
                coordinates: [32.6927, -114.6277],
                population: 93064,
                description: "Historic crossing point in Arizona"
            },
            {
                name: "San Luis Rio Colorado",
                coordinates: [32.4561, -114.7719],
                population: 199021,
                description: "Mexican city near the border"
            }
        ],
        
        // Dams and Projects
        dams: [
            {
                name: "Hoover Dam",
                coordinates: [36.0160, -114.7377],
                height: 221,
                yearBuilt: 1936,
                purpose: "Hydroelectric power, flood control, water supply",
                capacity: "2,080 MW"
            },
            {
                name: "Glen Canyon Dam",
                coordinates: [36.9375, -111.4839],
                height: 216,
                yearBuilt: 1966,
                purpose: "Hydroelectric power, water storage",
                capacity: "1,320 MW"
            },
            {
                name: "Parker Dam",
                coordinates: [34.2931, -114.1408],
                height: 98,
                yearBuilt: 1938,
                purpose: "Water diversion to Los Angeles",
                capacity: "120 MW"
            },
            {
                name: "Davis Dam",
                coordinates: [35.1844, -114.5678],
                height: 61,
                yearBuilt: 1951,
                purpose: "Power generation, regulation",
                capacity: "255 MW"
            },
            {
                name: "Imperial Dam",
                coordinates: [32.8783, -114.4628],
                height: 7,
                yearBuilt: 1938,
                purpose: "Diversion to All-American Canal",
                capacity: "Diversion structure"
            },
            {
                name: "Morelos Dam",
                coordinates: [32.7189, -114.7200],
                height: 4,
                yearBuilt: 1950,
                purpose: "Mexico's diversion structure",
                capacity: "Diverts Mexico's share"
            }
        ],
        
        // Basin Information
        basinArea: 637000,
        discharge: 620,
        
        // States/Provinces
        statesProvinces: [
            { name: "Colorado", country: "United States" },
            { name: "Utah", country: "United States" },
            { name: "Arizona", country: "United States" },
            { name: "Nevada", country: "United States" },
            { name: "California", country: "United States" },
            { name: "Wyoming", country: "United States" },
            { name: "New Mexico", country: "United States" },
            { name: "Baja California", country: "Mexico" },
            { name: "Sonora", country: "Mexico" }
        ],
        
        // Importance and Issues
        economicImportance: [
            "Water supply for 40 million people",
            "Irrigation for 5.5 million acres of farmland",
            "Hydroelectric power generation",
            "Recreation and tourism ($26 billion annually)",
            "Industrial water supply",
            "Supplies cities: LA, San Diego, Phoenix, Las Vegas"
        ],
        
        environmentalIssues: [
            "River rarely reaches the sea (over-allocation)",
            "Lake Mead at historic lows",
            "Drought and climate change impacts",
            "Invasive species (quagga mussels)",
            "Salinity increases downstream",
            "Delta ecosystem destruction"
        ],
        
        waterDisputes: [
            {
                countries: ["United States", "Mexico"],
                description: "Water allocation and salinity issues",
                treaty: "1944 Water Treaty, Minute 319/323",
                status: "Ongoing negotiations for shortage sharing"
            },
            {
                countries: ["Upper Basin States", "Lower Basin States"],
                description: "Colorado River Compact disputes",
                treaty: "Colorado River Compact (1922)",
                status: "Ongoing shortage negotiations"
            }
        ],
        
        historicalImportance: [
            "Grand Canyon carved over 5-6 million years",
            "Native American settlements for thousands of years",
            "Spanish exploration (1539-1540)",
            "John Wesley Powell expedition (1869)",
            "Boulder Dam/Hoover Dam (engineering marvel)",
            "Transformed American Southwest development"
        ],
        
        // Flyover Points for Animation
        flyoverPoints: [
            {
                coordinates: [40.4736, -105.8219],
                label: "Source: Rocky Mountains",
                type: "source"
            },
            {
                coordinates: [39.0639, -108.5506],
                label: "Grand Junction",
                type: "city"
            },
            {
                coordinates: [38.1900, -109.9000],
                label: "Green River Confluence",
                type: "tributary"
            },
            {
                coordinates: [38.5733, -109.5498],
                label: "Moab - Canyonlands",
                type: "city"
            },
            {
                coordinates: [36.9375, -111.4839],
                label: "Glen Canyon Dam",
                type: "dam"
            },
            {
                coordinates: [36.1000, -112.0000],
                label: "Grand Canyon",
                type: "landmark"
            },
            {
                coordinates: [36.0160, -114.7377],
                label: "Hoover Dam",
                type: "dam"
            },
            {
                coordinates: [36.1699, -115.1398],
                label: "Las Vegas Area",
                type: "city"
            },
            {
                coordinates: [32.6927, -114.6277],
                label: "Yuma - Historic Crossing",
                type: "city"
            },
            {
                coordinates: [31.9000, -114.9167],
                label: "Mouth: Gulf of California (Historic)",
                type: "mouth"
            }
        ],
        
        // Mind Map Structure
        mindMap: {
            central: "Colorado River",
            branches: [
                {
                    name: "Geography",
                    children: ["Length: 2,330 km", "Basin: 637,000 km²", "7 US States + Mexico"]
                },
                {
                    name: "Source & Mouth",
                    children: ["Source: Rocky Mountains", "Historic Mouth: Gulf of California", "Now Rarely Reaches Sea"]
                },
                {
                    name: "Countries",
                    children: ["United States 🇺🇸", "Mexico 🇲🇽"]
                },
                {
                    name: "Major Tributaries",
                    children: ["Green River", "Gila River", "San Juan River", "Little Colorado"]
                },
                {
                    name: "Major Dams",
                    children: ["Hoover Dam", "Glen Canyon Dam", "Parker Dam", "Davis Dam"]
                },
                {
                    name: "Natural Wonders",
                    children: ["Grand Canyon", "Horseshoe Bend", "Lake Powell", "Lake Mead"]
                },
                {
                    name: "Water Crisis",
                    children: ["Over-allocation", "Drought", "Lake Mead Low", "40 Million Users"]
                },
                {
                    name: "Historical",
                    children: ["Powell Expedition", "Hoover Dam Project", "Southwest Development"]
                }
            ]
        }
    },

    // ========================================
    // RIVER 27: SYR DARYA
    // ========================================
    {
        id: 27,
        name: "Syr Darya",
        length: 2212,
        continent: "Asia",
        countries: [
            { name: "Kyrgyzstan", code: "KG", flag: "🇰🇬" },
            { name: "Uzbekistan", code: "UZ", flag: "🇺🇿" },
            { name: "Tajikistan", code: "TJ", flag: "🇹🇯" },
            { name: "Kazakhstan", code: "KZ", flag: "🇰🇿" }
        ],
        image: "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=800",
        
        // Source Information
        source: {
            name: "Tian Shan Mountains",
            coordinates: [41.3833, 75.9000],
            elevation: 3000,
            description: "Formed by the confluence of Naryn and Kara Darya rivers in the Fergana Valley"
        },
        
        // Mouth Information
        mouth: {
            name: "Aral Sea (Northern)",
            coordinates: [46.1333, 60.5833],
            type: "Delta (shrinking)",
            description: "Flows into the Small Aral Sea (North Aral Sea) in Kazakhstan"
        },
        
        // River Path Coordinates
        path: [
            [41.3833, 75.9000],
            [40.5000, 70.9500],
            [40.3000, 68.8000],
            [40.1000, 67.8500],
            [40.5000, 68.2500],
            [40.8500, 68.6500],
            [41.3000, 69.2000],
            [41.5000, 67.5000],
            [42.1000, 65.5000],
            [43.0000, 63.0000],
            [44.0000, 61.5000],
            [45.0000, 60.5000],
            [46.1333, 60.5833]
        ],
        
        // Tributaries (arrows pointing IN)
        tributaries: [
            {
                name: "Naryn River",
                coordinates: [41.4000, 75.9000],
                length: 807,
                side: "left",
                arrow: "in",
                description: "Largest tributary, main source of Syr Darya"
            },
            {
                name: "Kara Darya",
                coordinates: [41.3500, 75.9000],
                length: 180,
                side: "right",
                arrow: "in",
                description: "Second major source tributary"
            },
            {
                name: "Chirchik River",
                coordinates: [41.3333, 69.0833],
                length: 155,
                side: "left",
                arrow: "in",
                description: "Major tributary near Tashkent"
            },
            {
                name: "Ahangaran River",
                coordinates: [41.0000, 69.2000],
                length: 213,
                side: "left",
                arrow: "in",
                description: "Uzbekistan tributary"
            },
            {
                name: "Keles River",
                coordinates: [41.1500, 68.5000],
                length: 130,
                side: "left",
                arrow: "in",
                description: "Small tributary in Uzbekistan"
            },
            {
                name: "Arys River",
                coordinates: [42.4333, 68.8000],
                length: 378,
                side: "right",
                arrow: "in",
                description: "Major Kazakhstan tributary"
            }
        ],
        
        // Distributaries (arrows pointing OUT)
        distributaries: [
            {
                name: "Kazalinsk Channels",
                coordinates: [45.7500, 62.1000],
                arrow: "out",
                description: "Delta distributaries near Aral Sea"
            },
            {
                name: "Kyzylorda Irrigation Canals",
                coordinates: [44.8500, 65.5000],
                arrow: "out",
                description: "Major irrigation diversions"
            }
        ],
        
        // Major Cities
        cities: [
            {
                name: "Namangan",
                coordinates: [40.9983, 71.6726],
                population: 597000,
                description: "Third largest city in Uzbekistan"
            },
            {
                name: "Andijan",
                coordinates: [40.7833, 72.3442],
                population: 426000,
                description: "Major city in Fergana Valley"
            },
            {
                name: "Fergana",
                coordinates: [40.3842, 71.7889],
                population: 340000,
                description: "Capital of Fergana Region, Uzbekistan"
            },
            {
                name: "Khujand",
                coordinates: [40.2833, 69.6333],
                population: 181600,
                description: "Second largest city in Tajikistan"
            },
            {
                name: "Tashkent",
                coordinates: [41.2995, 69.2401],
                population: 2571668,
                description: "Capital of Uzbekistan, on Chirchik tributary"
            },
            {
                name: "Turkestan",
                coordinates: [43.3017, 68.2522],
                population: 165200,
                description: "Historic city in Kazakhstan"
            },
            {
                name: "Kyzylorda",
                coordinates: [44.8533, 65.5022],
                population: 313785,
                description: "Regional capital in Kazakhstan"
            },
            {
                name: "Kazalinsk",
                coordinates: [45.7633, 62.1000],
                population: 7000,
                description: "Town near the Aral Sea"
            }
        ],
        
        // Dams and Projects
        dams: [
            {
                name: "Toktogul Dam",
                coordinates: [41.7500, 72.9167],
                height: 215,
                yearBuilt: 1975,
                purpose: "Hydroelectric power, irrigation",
                capacity: "1,200 MW"
            },
            {
                name: "Andijan Reservoir",
                coordinates: [41.0000, 72.0000],
                height: 115,
                yearBuilt: 1969,
                purpose: "Irrigation water storage",
                capacity: "1.9 km³ storage"
            },
            {
                name: "Kairakkum Reservoir",
                coordinates: [40.3000, 69.8000],
                height: 33,
                yearBuilt: 1957,
                purpose: "Irrigation, hydropower",
                capacity: "126 MW"
            },
            {
                name: "Chardara Dam",
                coordinates: [41.2500, 67.9667],
                height: 29,
                yearBuilt: 1966,
                purpose: "Irrigation, flood control",
                capacity: "100 MW"
            },
            {
                name: "Kokaral Dam",
                coordinates: [46.0000, 60.3500],
                height: 13,
                yearBuilt: 2005,
                purpose: "Restore North Aral Sea",
                capacity: "Saves North Aral Sea"
            }
        ],
        
        // Basin Information
        basinArea: 219000,
        discharge: 1180,
        
        // States/Provinces
        statesProvinces: [
            { name: "Naryn Region", country: "Kyrgyzstan" },
            { name: "Jalal-Abad Region", country: "Kyrgyzstan" },
            { name: "Fergana Region", country: "Uzbekistan" },
            { name: "Namangan Region", country: "Uzbekistan" },
            { name: "Sughd Region", country: "Tajikistan" },
            { name: "Tashkent Region", country: "Uzbekistan" },
            { name: "Turkestan Region", country: "Kazakhstan" },
            { name: "Kyzylorda Region", country: "Kazakhstan" }
        ],
        
        // Importance and Issues
        economicImportance: [
            "Irrigation for cotton (Fergana Valley)",
            "Hydroelectric power generation",
            "Drinking water for millions",
            "Rice cultivation in lower reaches",
            "Industrial water supply"
        ],
        
        environmentalIssues: [
            "Aral Sea catastrophe - major ecological disaster",
            "Over-extraction for cotton irrigation",
            "Salinization of agricultural lands",
            "Water quality degradation",
            "Desertification in former seabed"
        ],
        
        waterDisputes: [
            {
                countries: ["Kyrgyzstan", "Uzbekistan", "Kazakhstan"],
                description: "Upstream-downstream water allocation",
                treaty: "Various bilateral agreements",
                status: "Ongoing tensions over water and energy"
            },
            {
                countries: ["All Central Asian states"],
                description: "Aral Sea restoration efforts",
                treaty: "International Fund for Saving the Aral Sea",
                status: "Kokaral Dam success for North Aral"
            }
        ],
        
        historicalImportance: [
            "Known as Jaxartes in ancient times",
            "Alexander the Great reached here (329 BCE)",
            "Silk Road trade route",
            "Battle of the Jaxartes (329 BCE)",
            "Soviet era cotton cultivation transformation"
        ],
        
        // Flyover Points for Animation
        flyoverPoints: [
            {
                coordinates: [41.3833, 75.9000],
                label: "Source: Naryn-Kara Darya Confluence",
                type: "source"
            },
            {
                coordinates: [40.3842, 71.7889],
                label: "Fergana Valley",
                type: "city"
            },
            {
                coordinates: [40.2833, 69.6333],
                label: "Khujand - Tajikistan",
                type: "city"
            },
            {
                coordinates: [41.2500, 67.9667],
                label: "Chardara Dam",
                type: "dam"
            },
            {
                coordinates: [43.3017, 68.2522],
                label: "Turkestan - Historic City",
                type: "city"
            },
            {
                coordinates: [44.8533, 65.5022],
                label: "Kyzylorda",
                type: "city"
            },
            {
                coordinates: [46.0000, 60.3500],
                label: "Kokaral Dam",
                type: "dam"
            },
            {
                coordinates: [46.1333, 60.5833],
                label: "Mouth: North Aral Sea",
                type: "mouth"
            }
        ],
        
        // Mind Map Structure
        mindMap: {
            central: "Syr Darya",
            branches: [
                {
                    name: "Geography",
                    children: ["Length: 2,212 km", "Basin: 219,000 km²", "Ancient Name: Jaxartes"]
                },
                {
                    name: "Source & Mouth",
                    children: ["Source: Tian Shan Mtns", "Mouth: North Aral Sea", "Via Fergana Valley"]
                },
                {
                    name: "Countries",
                    children: ["Kyrgyzstan 🇰🇬", "Uzbekistan 🇺🇿", "Tajikistan 🇹🇯", "Kazakhstan 🇰🇿"]
                },
                {
                    name: "Major Tributaries",
                    children: ["Naryn River", "Kara Darya", "Chirchik", "Arys River"]
                },
                {
                    name: "Dams",
                    children: ["Toktogul", "Andijan Reservoir", "Kokaral Dam"]
                },
                {
                    name: "Aral Sea Crisis",
                    children: ["Sea Shrinking", "Soviet Cotton Policy", "Kokaral Recovery"]
                },
                {
                    name: "Historical",
                    children: ["Alexander the Great", "Silk Road", "Battle of Jaxartes"]
                },
                {
                    name: "Water Disputes",
                    children: ["Upstream vs Downstream", "Energy-Water Trade", "Regional Tensions"]
                }
            ]
        }
    },

    // ========================================
    // RIVER 28: DNIEPER RIVER
    // ========================================
    {
        id: 28,
        name: "Dnieper River",
        length: 2201,
        continent: "Europe",
        countries: [
            { name: "Russia", code: "RU", flag: "🇷🇺" },
            { name: "Belarus", code: "BY", flag: "🇧🇾" },
            { name: "Ukraine", code: "UA", flag: "🇺🇦" }
        ],
        image: "https://images.unsplash.com/photo-1561542320-9a18cd340469?w=800",
        
        // Source Information
        source: {
            name: "Valdai Hills",
            coordinates: [55.8700, 33.7500],
            elevation: 220,
            description: "Originates in the Valdai Hills near Smolensk Oblast, Russia"
        },
        
        // Mouth Information
        mouth: {
            name: "Black Sea",
            coordinates: [46.5000, 32.2833],
            type: "Estuary",
            description: "Flows into the Black Sea through the Dnieper-Bug estuary near Kherson, Ukraine"
        },
        
        // River Path Coordinates
        path: [
            [55.8700, 33.7500],
            [54.8000, 32.0500],
            [54.5000, 31.0000],
            [53.9000, 30.3300],
            [52.4000, 31.0000],
            [51.5000, 31.3000],
            [50.4500, 30.5200],
            [49.4000, 32.0000],
            [48.5000, 35.1000],
            [47.8500, 35.0500],
            [47.1000, 34.0000],
            [46.6500, 33.0000],
            [46.5000, 32.2833]
        ],
        
        // Tributaries (arrows pointing IN)
        tributaries: [
            {
                name: "Berezina River",
                coordinates: [52.5000, 30.0000],
                length: 613,
                side: "left",
                arrow: "in",
                description: "Major Belarusian tributary, historic Napoleon crossing"
            },
            {
                name: "Sozh River",
                coordinates: [52.4200, 31.0200],
                length: 648,
                side: "left",
                arrow: "in",
                description: "Tributary from Belarus near Gomel"
            },
            {
                name: "Pripyat River",
                coordinates: [51.5200, 30.6000],
                length: 775,
                side: "left",
                arrow: "in",
                description: "Largest tributary, drains Pripyat Marshes"
            },
            {
                name: "Desna River",
                coordinates: [51.5300, 30.5500],
                length: 1130,
                side: "right",
                arrow: "in",
                description: "Second longest tributary, joins near Kyiv"
            },
            {
                name: "Sula River",
                coordinates: [50.0000, 33.0000],
                length: 365,
                side: "left",
                arrow: "in",
                description: "Ukrainian tributary"
            },
            {
                name: "Psel River",
                coordinates: [49.0500, 33.5000],
                length: 717,
                side: "left",
                arrow: "in",
                description: "Tributary joining near Kremenchuk"
            },
            {
                name: "Vorskla River",
                coordinates: [48.6000, 35.2500],
                length: 464,
                side: "left",
                arrow: "in",
                description: "Tributary from Poltava region"
            },
            {
                name: "Samara River",
                coordinates: [48.5000, 35.0000],
                length: 320,
                side: "left",
                arrow: "in",
                description: "Tributary joining near Dnipro city"
            },
            {
                name: "Inhulets River",
                coordinates: [47.2000, 33.5000],
                length: 549,
                side: "right",
                arrow: "in",
                description: "Southern Ukrainian tributary"
            }
        ],
        
        // Distributaries (arrows pointing OUT)
        distributaries: [
            {
                name: "Dnieper Channels",
                coordinates: [46.5500, 32.3500],
                arrow: "out",
                description: "Delta channels near the Black Sea"
            },
            {
                name: "Dnieper-Bug Canal",
                coordinates: [52.1000, 25.9000],
                arrow: "out",
                description: "Artificial waterway connecting to Bug River"
            }
        ],
        
        // Major Cities
        cities: [
            {
                name: "Smolensk",
                coordinates: [54.7826, 32.0453],
                population: 330025,
                description: "Historic Russian city on upper Dnieper"
            },
            {
                name: "Orsha",
                coordinates: [54.5000, 30.4167],
                population: 115076,
                description: "Belarusian city on the Dnieper"
            },
            {
                name: "Mogilev",
                coordinates: [53.9000, 30.3300],
                population: 383313,
                description: "Third largest city in Belarus"
            },
            {
                name: "Gomel",
                coordinates: [52.4345, 30.9754],
                population: 535693,
                description: "Second largest city in Belarus, on Sozh"
            },
            {
                name: "Kyiv",
                coordinates: [50.4501, 30.5234],
                population: 2952301,
                description: "Capital of Ukraine, major historic city"
            },
            {
                name: "Cherkasy",
                coordinates: [49.4444, 32.0597],
                population: 282600,
                description: "Ukrainian regional capital"
            },
            {
                name: "Kremenchuk",
                coordinates: [49.0833, 33.4167],
                population: 220100,
                description: "Important industrial city"
            },
            {
                name: "Dnipro",
                coordinates: [48.4647, 35.0462],
                population: 980948,
                description: "Fourth largest Ukrainian city"
            },
            {
                name: "Zaporizhzhia",
                coordinates: [47.8388, 35.1396],
                population: 729575,
                description: "Major industrial city, Khortytsia Island"
            },
            {
                name: "Kherson",
                coordinates: [46.6354, 32.6169],
                population: 289096,
                description: "Port city near the Black Sea"
            }
        ],
        
        // Dams and Projects
        dams: [
            {
                name: "Kyiv Hydroelectric Power Plant",
                coordinates: [50.5833, 30.5000],
                height: 68,
                yearBuilt: 1964,
                purpose: "Hydroelectric power",
                capacity: "444 MW"
            },
            {
                name: "Kaniv Hydroelectric Station",
                coordinates: [49.7500, 31.4667],
                height: 21,
                yearBuilt: 1972,
                purpose: "Hydroelectric power, navigation",
                capacity: "444 MW"
            },
            {
                name: "Kremenchuk Reservoir",
                coordinates: [49.0833, 33.2500],
                height: 28,
                yearBuilt: 1959,
                purpose: "Hydroelectric, irrigation",
                capacity: "625 MW"
            },
            {
                name: "Dnieper Hydroelectric Station",
                coordinates: [47.8500, 35.0833],
                height: 60,
                yearBuilt: 1932,
                purpose: "Hydroelectric power - oldest",
                capacity: "1,548 MW"
            },
            {
                name: "Kakhovka Dam",
                coordinates: [46.7667, 33.3833],
                height: 30,
                yearBuilt: 1956,
                purpose: "Irrigation, power, navigation",
                capacity: "351 MW (destroyed 2023)"
            },
            {
                name: "Zaporizhzhia Dam",
                coordinates: [47.8833, 35.1000],
                height: 35,
                yearBuilt: 1927,
                purpose: "Power generation",
                capacity: "Integrated with DneproGES"
            }
        ],
        
        // Basin Information
        basinArea: 504000,
        discharge: 1670,
        
        // States/Provinces
        statesProvinces: [
            { name: "Smolensk Oblast", country: "Russia" },
            { name: "Mogilev Region", country: "Belarus" },
            { name: "Gomel Region", country: "Belarus" },
            { name: "Kyiv Oblast", country: "Ukraine" },
            { name: "Cherkasy Oblast", country: "Ukraine" },
            { name: "Poltava Oblast", country: "Ukraine" },
            { name: "Dnipropetrovsk Oblast", country: "Ukraine" },
            { name: "Zaporizhzhia Oblast", country: "Ukraine" },
            { name: "Kherson Oblast", country: "Ukraine" }
        ],
        
        // Importance and Issues
        economicImportance: [
            "Fourth longest river in Europe",
            "Major navigation corridor",
            "Cascade of 6 hydroelectric dams",
            "Irrigation for Ukrainian agriculture",
            "Drinking water for millions",
            "Industrial water supply"
        ],
        
        environmentalIssues: [
            "Chernobyl disaster contamination (1986)",
            "Industrial pollution",
            "Agricultural runoff",
            "Eutrophication of reservoirs",
            "Kakhovka Dam destruction (2023) - ecological disaster"
        ],
        
        waterDisputes: [
            {
                countries: ["Ukraine", "Russia"],
                description: "Geopolitical tensions affecting river management",
                treaty: "No recent bilateral agreements",
                status: "Conflict zone since 2022"
            }
        ],
        
        historicalImportance: [
            "Known as Borysthenes in ancient times",
            "Varangian trade route (Vikings)",
            "Kyivan Rus' civilization center",
            "Zaporozhian Cossack homeland (Khortytsia)",
            "Major WWII battles",
            "Soviet industrialization symbol"
        ],
        
        // Flyover Points for Animation
        flyoverPoints: [
            {
                coordinates: [55.8700, 33.7500],
                label: "Source: Valdai Hills",
                type: "source"
            },
            {
                coordinates: [54.7826, 32.0453],
                label: "Smolensk - Russia",
                type: "city"
            },
            {
                coordinates: [53.9000, 30.3300],
                label: "Mogilev - Belarus",
                type: "city"
            },
            {
                coordinates: [51.5200, 30.6000],
                label: "Pripyat River Confluence",
                type: "tributary"
            },
            {
                coordinates: [50.4501, 30.5234],
                label: "Kyiv - Ukrainian Capital",
                type: "city"
            },
            {
                coordinates: [48.4647, 35.0462],
                label: "Dnipro City",
                type: "city"
            },
            {
                coordinates: [47.8500, 35.0833],
                label: "DneproGES - Historic Dam",
                type: "dam"
            },
            {
                coordinates: [47.8388, 35.1396],
                label: "Zaporizhzhia",
                type: "city"
            },
            {
                coordinates: [46.6354, 32.6169],
                label: "Kherson",
                type: "city"
            },
            {
                coordinates: [46.5000, 32.2833],
                label: "Mouth: Black Sea",
                type: "mouth"
            }
        ],
        
        // Mind Map Structure
        mindMap: {
            central: "Dnieper River",
            branches: [
                {
                    name: "Geography",
                    children: ["Length: 2,201 km", "Basin: 504,000 km²", "4th Longest in Europe"]
                },
                {
                    name: "Source & Mouth",
                    children: ["Source: Valdai Hills", "Mouth: Black Sea", "Via 3 Countries"]
                },
                {
                    name: "Countries",
                    children: ["Russia 🇷🇺", "Belarus 🇧🇾", "Ukraine 🇺🇦"]
                },
                {
                    name: "Major Tributaries",
                    children: ["Pripyat", "Desna", "Berezina", "Psel", "Vorskla"]
                },
                {
                    name: "Hydroelectric Cascade",
                    children: ["Kyiv HPP", "Kaniv", "Kremenchuk", "DneproGES", "Kakhovka"]
                },
                {
                    name: "Major Cities",
                    children: ["Kyiv", "Dnipro", "Zaporizhzhia", "Kherson", "Mogilev"]
                },
                {
                    name: "Historical",
                    children: ["Kyivan Rus'", "Zaporozhian Cossacks", "Viking Trade Route"]
                },
                {
                    name: "Modern Issues",
                    children: ["Chernobyl Impact", "Kakhovka Destruction", "Conflict Zone"]
                }
            ]
        }
    },

    // ========================================
    // RIVER 29: ORANGE RIVER
    // ========================================
    {
        id: 29,
        name: "Orange River",
        length: 2200,
        continent: "Africa",
        countries: [
            { name: "South Africa", code: "ZA", flag: "🇿🇦" },
            { name: "Lesotho", code: "LS", flag: "🇱🇸" },
            { name: "Namibia", code: "NA", flag: "🇳🇦" },
            { name: "Botswana", code: "BW", flag: "🇧🇼" }
        ],
        image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800",
        
        // Source Information
        source: {
            name: "Drakensberg Mountains",
            coordinates: [-29.4500, 29.2833],
            elevation: 3000,
            description: "Originates in the Lesotho Highlands near Mont-aux-Sources in the Drakensberg"
        },
        
        // Mouth Information
        mouth: {
            name: "Atlantic Ocean",
            coordinates: [-28.6333, 16.4500],
            type: "Estuary",
            description: "Flows into the Atlantic Ocean at Alexander Bay, forming SA-Namibia border"
        },
        
        // River Path Coordinates
        path: [
            [-29.4500, 29.2833],
            [-29.4000, 28.5000],
            [-29.8000, 27.0000],
            [-29.7500, 26.0000],
            [-29.1000, 25.0000],
            [-28.7500, 24.0000],
            [-28.5000, 22.5000],
            [-28.6000, 21.0000],
            [-28.4500, 20.0000],
            [-28.5000, 18.5000],
            [-28.6333, 16.4500]
        ],
        
        // Tributaries (arrows pointing IN)
        tributaries: [
            {
                name: "Caledon River",
                coordinates: [-29.8333, 26.5000],
                length: 480,
                side: "left",
                arrow: "in",
                description: "Forms border between South Africa and Lesotho"
            },
            {
                name: "Vaal River",
                coordinates: [-29.0667, 23.6500],
                length: 1210,
                side: "right",
                arrow: "in",
                description: "Largest tributary, joins near Douglas"
            },
            {
                name: "Senqu River",
                coordinates: [-29.4333, 29.3000],
                length: 420,
                side: "left",
                arrow: "in",
                description: "Upper Orange in Lesotho"
            },
            {
                name: "Kraai River",
                coordinates: [-30.6333, 26.9000],
                length: 220,
                side: "left",
                arrow: "in",
                description: "Eastern Cape tributary"
            },
            {
                name: "Modder River",
                coordinates: [-29.2000, 25.0000],
                length: 280,
                side: "right",
                arrow: "in",
                description: "Free State tributary"
            },
            {
                name: "Fish River",
                coordinates: [-28.0667, 17.0667],
                length: 650,
                side: "right",
                arrow: "in",
                description: "Major Namibian tributary"
            },
            {
                name: "Hartbees River",
                coordinates: [-28.3333, 20.3333],
                length: 270,
                side: "right",
                arrow: "in",
                description: "Northern Cape tributary"
            }
        ],
        
        // Distributaries (arrows pointing OUT)
        distributaries: [
            {
                name: "Orange River Mouth Channels",
                coordinates: [-28.6200, 16.4700],
                arrow: "out",
                description: "Multiple channels at the mouth"
            }
        ],
        
        // Major Cities
        cities: [
            {
                name: "Bethlehem",
                coordinates: [-28.2308, 28.3067],
                population: 85000,
                description: "Free State town on upper reaches"
            },
            {
                name: "Bloemfontein",
                coordinates: [-29.0852, 26.1596],
                population: 520000,
                description: "Judicial capital of South Africa, on tributary"
            },
            {
                name: "Aliwal North",
                coordinates: [-30.6928, 26.7103],
                population: 36430,
                description: "Eastern Cape border town"
            },
            {
                name: "Kimberley",
                coordinates: [-28.7282, 24.7499],
                population: 227000,
                description: "Diamond mining city, on Vaal tributary"
            },
            {
                name: "Douglas",
                coordinates: [-29.0667, 23.7500],
                population: 15000,
                description: "Confluence of Orange and Vaal"
            },
            {
                name: "Upington",
                coordinates: [-28.4572, 21.2567],
                population: 74000,
                description: "Major Northern Cape city on the Orange"
            },
            {
                name: "Pofadder",
                coordinates: [-31.3667, 19.3833],
                population: 5000,
                description: "Town south of Orange River"
            },
            {
                name: "Oranjemund",
                coordinates: [-28.5500, 16.4333],
                population: 3147,
                description: "Diamond mining town at the mouth"
            },
            {
                name: "Alexander Bay",
                coordinates: [-28.5833, 16.5000],
                population: 1000,
                description: "South African town at the mouth"
            }
        ],
        
        // Dams and Projects
        dams: [
            {
                name: "Gariep Dam",
                coordinates: [-30.6167, 25.5000],
                height: 88,
                yearBuilt: 1971,
                purpose: "Hydroelectric, irrigation, water supply",
                capacity: "360 MW"
            },
            {
                name: "Vanderkloof Dam",
                coordinates: [-30.0167, 24.7333],
                height: 108,
                yearBuilt: 1977,
                purpose: "Hydroelectric, irrigation",
                capacity: "240 MW"
            },
            {
                name: "Katse Dam",
                coordinates: [-29.3667, 28.5000],
                height: 185,
                yearBuilt: 1996,
                purpose: "Water transfer to Gauteng",
                capacity: "Lesotho Highlands Project"
            },
            {
                name: "Mohale Dam",
                coordinates: [-29.4833, 28.8833],
                height: 145,
                yearBuilt: 2002,
                purpose: "Water storage for transfer",
                capacity: "Part of LHWP"
            },
            {
                name: "Orange-Fish Tunnel",
                coordinates: [-30.5000, 25.5000],
                height: "N/A",
                yearBuilt: 1975,
                purpose: "Water transfer to Fish River",
                capacity: "82 km tunnel"
            }
        ],
        
        // Basin Information
        basinArea: 973000,
        discharge: 365,
        
        // States/Provinces
        statesProvinces: [
            { name: "Lesotho (Highlands)", country: "Lesotho" },
            { name: "Eastern Cape", country: "South Africa" },
            { name: "Free State", country: "South Africa" },
            { name: "Northern Cape", country: "South Africa" },
            { name: "Karas Region", country: "Namibia" }
        ],
        
        // Importance and Issues
        economicImportance: [
            "Water supply for Gauteng Province (LHWP)",
            "Irrigation for agriculture (grapes, cotton, wheat)",
            "Hydroelectric power generation",
            "Diamond mining at the mouth",
            "Tourism (Augrabies Falls)",
            "Longest river in South Africa"
        ],
        
        environmentalIssues: [
            "Water scarcity and over-extraction",
            "Invasive species (water hyacinth)",
            "Mining pollution",
            "Agricultural runoff",
            "Flow reduction affecting estuary"
        ],
        
        waterDisputes: [
            {
                countries: ["South Africa", "Lesotho"],
                description: "Lesotho Highlands Water Project agreements",
                treaty: "LHWP Treaty (1986)",
                status: "Ongoing phases, Phase 2 in progress"
            },
            {
                countries: ["South Africa", "Namibia"],
                description: "Shared river boundary and water use",
                treaty: "Orange-Senqu River Commission",
                status: "Cooperative management"
            }
        ],
        
        historicalImportance: [
            "Named by Dutch explorers (1779)",
            "Griqua and San peoples' homeland",
            "Great Trek crossing point",
            "Diamond rush at mouth (1920s)",
            "Orange Free State history"
        ],
        
        // Flyover Points for Animation
        flyoverPoints: [
            {
                coordinates: [-29.4500, 29.2833],
                label: "Source: Drakensberg Mountains",
                type: "source"
            },
            {
                coordinates: [-29.3667, 28.5000],
                label: "Katse Dam - Lesotho",
                type: "dam"
            },
            {
                coordinates: [-30.6167, 25.5000],
                label: "Gariep Dam - Largest in SA",
                type: "dam"
            },
            {
                coordinates: [-29.0667, 23.7500],
                label: "Douglas - Vaal Confluence",
                type: "tributary"
            },
            {
                coordinates: [-28.4572, 21.2567],
                label: "Upington",
                type: "city"
            },
            {
                coordinates: [-28.4467, 20.6167],
                label: "Augrabies Falls",
                type: "landmark"
            },
            {
                coordinates: [-28.0667, 17.0667],
                label: "Fish River Confluence",
                type: "tributary"
            },
            {
                coordinates: [-28.6333, 16.4500],
                label: "Mouth: Atlantic Ocean",
                type: "mouth"
            }
        ],
        
        // Mind Map Structure
        mindMap: {
            central: "Orange River",
            branches: [
                {
                    name: "Geography",
                    children: ["Length: 2,200 km", "Basin: 973,000 km²", "Longest in South Africa"]
                },
                {
                    name: "Source & Mouth",
                    children: ["Source: Drakensberg", "Mouth: Atlantic Ocean", "Via Northern Cape"]
                },
                {
                    name: "Countries",
                    children: ["South Africa 🇿🇦", "Lesotho 🇱🇸", "Namibia 🇳🇦", "Botswana 🇧🇼"]
                },
                {
                    name: "Major Tributaries",
                    children: ["Vaal River", "Caledon River", "Fish River", "Senqu"]
                },
                {
                    name: "Major Dams",
                    children: ["Gariep Dam", "Vanderkloof", "Katse Dam", "Mohale Dam"]
                },
                {
                    name: "Attractions",
                    children: ["Augrabies Falls", "Richtersveld", "Wine Regions"]
                },
                {
                    name: "Economy",
                    children: ["LHWP Water Transfer", "Diamond Mining", "Agriculture", "Hydropower"]
                },
                {
                    name: "Historical",
                    children: ["Dutch Naming (1779)", "Great Trek", "Diamond Rush"]
                }
            ]
        }
    },

    // ========================================
    // RIVER 30: IRRAWADDY RIVER
    // ========================================
    {
        id: 30,
        name: "Irrawaddy River",
        length: 2170,
        continent: "Asia",
        countries: [
            { name: "Myanmar", code: "MM", flag: "🇲🇲" }
        ],
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
        
        // Source Information
        source: {
            name: "Confluence of Mali and N'mai Rivers",
            coordinates: [25.8500, 97.5333],
            elevation: 200,
            description: "Formed by confluence of Mali and N'mai rivers near Myitkyina in Kachin State"
        },
        
        // Mouth Information
        mouth: {
            name: "Andaman Sea",
            coordinates: [15.8667, 95.2167],
            type: "Delta",
            description: "Flows into the Andaman Sea through a vast delta, the Irrawaddy Delta"
        },
        
        // River Path Coordinates
        path: [
            [25.8500, 97.5333],
            [25.3833, 97.4000],
            [24.0833, 97.0333],
            [23.8333, 96.1000],
            [22.9333, 95.5000],
            [22.0000, 95.1500],
            [21.9667, 95.8500],
            [21.1500, 95.0500],
            [20.1500, 94.9000],
            [19.8000, 95.2167],
            [18.8000, 95.0000],
            [17.9000, 95.0000],
            [17.0000, 95.0000],
            [16.5000, 95.2167],
            [15.8667, 95.2167]
        ],
        
        // Tributaries (arrows pointing IN)
        tributaries: [
            {
                name: "N'mai River",
                coordinates: [25.8833, 97.6000],
                length: 380,
                side: "right",
                arrow: "in",
                description: "Eastern source tributary from Kachin Hills"
            },
            {
                name: "Mali River",
                coordinates: [25.8167, 97.4667],
                length: 315,
                side: "left",
                arrow: "in",
                description: "Western source tributary"
            },
            {
                name: "Mogaung River",
                coordinates: [25.3000, 96.9500],
                length: 400,
                side: "left",
                arrow: "in",
                description: "Major tributary from jade mining region"
            },
            {
                name: "Mu River",
                coordinates: [22.5000, 95.8000],
                length: 680,
                side: "left",
                arrow: "in",
                description: "Drains the Shwebo region"
            },
            {
                name: "Chindwin River",
                coordinates: [21.2500, 95.0833],
                length: 840,
                side: "left",
                arrow: "in",
                description: "Largest tributary, joins near Pakokku"
            },
            {
                name: "Myitnge River",
                coordinates: [21.8500, 96.0500],
                length: 560,
                side: "right",
                arrow: "in",
                description: "Also called Namtu, from Shan State"
            },
            {
                name: "Zawgyi River",
                coordinates: [21.0000, 95.8000],
                length: 320,
                side: "right",
                arrow: "in",
                description: "Eastern tributary"
            },
            {
                name: "Yaw River",
                coordinates: [21.1500, 94.5500],
                length: 150,
                side: "left",
                arrow: "in",
                description: "Western Chin Hills tributary"
            }
        ],
        
        // Distributaries (arrows pointing OUT)
        distributaries: [
            {
                name: "Pyamalaw River",
                coordinates: [16.8000, 95.2000],
                arrow: "out",
                description: "Western distributary in the delta"
            },
            {
                name: "Pathein River",
                coordinates: [16.7833, 94.7333],
                arrow: "out",
                description: "Major western branch to Pathein"
            },
            {
                name: "Toe River",
                coordinates: [16.2000, 95.5000],
                arrow: "out",
                description: "Central delta distributary"
            },
            {
                name: "Bogale River",
                coordinates: [16.3000, 95.3500],
                arrow: "out",
                description: "Major delta branch"
            },
            {
                name: "Pyapon River",
                coordinates: [16.2500, 95.7000],
                arrow: "out",
                description: "Eastern delta distributary"
            },
            {
                name: "China Bakir River",
                coordinates: [16.0000, 95.8000],
                arrow: "out",
                description: "Delta branch flowing east"
            }
        ],
        
        // Major Cities
        cities: [
            {
                name: "Myitkyina",
                coordinates: [25.3833, 97.3950],
                population: 306948,
                description: "Capital of Kachin State, northernmost navigable point"
            },
            {
                name: "Bhamo",
                coordinates: [24.2500, 97.2333],
                population: 48574,
                description: "Historic jade trade town"
            },
            {
                name: "Katha",
                coordinates: [24.1833, 96.3333],
                population: 20000,
                description: "Town setting for George Orwell's 'Burmese Days'"
            },
            {
                name: "Mandalay",
                coordinates: [21.9588, 96.0891],
                population: 1225553,
                description: "Second largest city, cultural capital"
            },
            {
                name: "Sagaing",
                coordinates: [21.8787, 95.9797],
                population: 78739,
                description: "Ancient religious center"
            },
            {
                name: "Ava (Inwa)",
                coordinates: [21.8500, 96.0167],
                population: 10000,
                description: "Historic royal capital"
            },
            {
                name: "Pakokku",
                coordinates: [21.3333, 95.1000],
                population: 126938,
                description: "Major tobacco and thanaka market"
            },
            {
                name: "Bagan",
                coordinates: [21.1667, 94.8667],
                population: 50000,
                description: "Ancient temple city, UNESCO World Heritage"
            },
            {
                name: "Magway",
                coordinates: [20.1500, 94.9333],
                population: 289247,
                description: "Oil industry center"
            },
            {
                name: "Pyay",
                coordinates: [18.8242, 95.2219],
                population: 135308,
                description: "Historic Sri Ksetra nearby"
            },
            {
                name: "Hinthada",
                coordinates: [17.6500, 95.4667],
                population: 134947,
                description: "Delta city"
            },
            {
                name: "Pathein",
                coordinates: [16.7833, 94.7333],
                population: 286684,
                description: "Capital of Ayeyarwady Region"
            },
            {
                name: "Yangon",
                coordinates: [16.8661, 96.1951],
                population: 5160512,
                description: "Largest city, former capital, on delta"
            }
        ],
        
        // Dams and Projects
        dams: [
            {
                name: "Myitsone Dam (Suspended)",
                coordinates: [25.6667, 97.4500],
                height: 152,
                yearBuilt: "Suspended 2011",
                purpose: "Hydroelectric power (planned)",
                capacity: "6,000 MW (if completed)"
            },
            {
                name: "Shweli I Dam",
                coordinates: [23.5000, 97.0000],
                height: 58,
                yearBuilt: 2008,
                purpose: "Hydroelectric power",
                capacity: "600 MW"
            },
            {
                name: "Yeywa Dam",
                coordinates: [21.6833, 96.4167],
                height: 134,
                yearBuilt: 2010,
                purpose: "Hydroelectric power",
                capacity: "790 MW"
            },
            {
                name: "Sedawgyi Dam",
                coordinates: [22.1167, 96.1500],
                height: 59,
                yearBuilt: 1989,
                purpose: "Irrigation",
                capacity: "Irrigation for Mandalay region"
            }
        ],
        
        // Basin Information
        basinArea: 411000,
        discharge: 13000,
        
        // States/Provinces
        statesProvinces: [
            { name: "Kachin State", country: "Myanmar" },
            { name: "Sagaing Region", country: "Myanmar" },
            { name: "Mandalay Region", country: "Myanmar" },
            { name: "Magway Region", country: "Myanmar" },
            { name: "Bago Region", country: "Myanmar" },
            { name: "Ayeyarwady Region", country: "Myanmar" },
            { name: "Yangon Region", country: "Myanmar" }
        ],
        
        // Importance and Issues
        economicImportance: [
            "Lifeline of Myanmar's economy",
            "Major transportation corridor",
            "Rice cultivation in the delta (rice bowl of Myanmar)",
            "Fishing industry",
            "Jade and gem trade (upper reaches)",
            "Tourism (Bagan, river cruises)"
        ],
        
        environmentalIssues: [
            "Proposed dam projects threatening ecosystem",
            "Deforestation in upper basin",
            "Gold mining pollution",
            "Cyclone Nargis devastation (2008)",
            "Mangrove destruction in delta"
        ],
        
        waterDisputes: [
            {
                countries: ["Myanmar", "China"],
                description: "Myitsone Dam controversy",
                treaty: "Bilateral agreement",
                status: "Suspended indefinitely since 2011"
            }
        ],
        
        historicalImportance: [
            "Center of Burmese kingdoms",
            "Royal capitals along the river (Bagan, Ava, Mandalay)",
            "British colonial steamship route",
            "WWII Burma Campaign",
            "George Orwell's literary setting"
        ],
        
        // Flyover Points for Animation
        flyoverPoints: [
            {
                coordinates: [25.8500, 97.5333],
                label: "Source: Mali-N'mai Confluence",
                type: "source"
            },
            {
                coordinates: [25.3833, 97.3950],
                label: "Myitkyina - Kachin Capital",
                type: "city"
            },
            {
                coordinates: [24.2500, 97.2333],
                label: "Bhamo - Jade Trade Town",
                type: "city"
            },
            {
                coordinates: [21.9588, 96.0891],
                label: "Mandalay - Cultural Capital",
                type: "city"
            },
            {
                coordinates: [21.2500, 95.0833],
                label: "Chindwin River Confluence",
                type: "tributary"
            },
            {
                coordinates: [21.1667, 94.8667],
                label: "Bagan - Temple City",
                type: "landmark"
            },
            {
                coordinates: [18.8242, 95.2219],
                label: "Pyay - Sri Ksetra",
                type: "city"
            },
            {
                coordinates: [16.8000, 95.3000],
                label: "Irrawaddy Delta Begins",
                type: "landmark"
            },
            {
                coordinates: [16.8661, 96.1951],
                label: "Yangon",
                type: "city"
            },
            {
                coordinates: [15.8667, 95.2167],
                label: "Mouth: Andaman Sea (Delta)",
                type: "mouth"
            }
        ],
        
        // Mind Map Structure
        mindMap: {
            central: "Irrawaddy River",
            branches: [
                {
                    name: "Geography",
                    children: ["Length: 2,170 km", "Basin: 411,000 km²", "Discharge: 13,000 m³/s"]
                },
                {
                    name: "Source & Mouth",
                    children: ["Source: Mali-N'mai Confluence", "Mouth: Andaman Sea", "Vast Delta Region"]
                },
                {
                    name: "Country",
                    children: ["Myanmar 🇲🇲 (Entirely within)"]
                },
                {
                    name: "Major Tributaries",
                    children: ["Chindwin River", "Mu River", "Myitnge River", "Mogaung River"]
                },
                {
                    name: "Delta Distributaries",
                    children: ["Pathein River", "Bogale River", "Pyapon River", "Toe River"]
                },
                {
                    name: "Major Cities",
                    children: ["Mandalay", "Yangon", "Myitkyina", "Bagan", "Pathein"]
                },
                {
                    name: "Historical Sites",
                    children: ["Bagan Temples", "Ava (Inwa)", "Sagaing", "Sri Ksetra"]
                },
                {
                    name: "Economy",
                    children: ["Rice Cultivation", "River Transport", "Fishing", "Tourism"]
                },
                {
                    name: "Environmental Issues",
                    children: ["Myitsone Dam Controversy", "Deforestation", "Cyclone Nargis Impact"]
                }
            ]
        }
    }
];

// ============================================================
// EXPORT RIVERS DATA 3
// ============================================================

// Make data available globally
if (typeof window !== 'undefined') {
    window.riversData3 = riversData3;
}

// For module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = riversData3;
}

console.log('✅ Rivers Data 3 loaded: Rivers 21-30 (Yukon to Irrawaddy)');
