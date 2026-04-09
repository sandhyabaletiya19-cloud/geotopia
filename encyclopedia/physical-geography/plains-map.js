// ============================================
// PLAINS-MAPS.JS
// Complete Encyclopedia Data for World Plains
// Version: 2.0 | Last Updated: January 2025
// ============================================

const PlainsMapData = {

    // ============================================
    // GLOBAL STATISTICS
    // ============================================
    globalStats: {
        totalPlainsArea: 50000000, // km²
        percentOfEarthLand: 33.4,
        totalMajorPlains: 847,
        countriesWithPlains: 195,
        populationOnPlains: 3500000000,
        foodProductionPercent: 72,
        urbanAreasOnPlains: 65,
        agriculturalLandOnPlains: 78,
        lastUpdated: "2025-01-15",
        dataSources: [
            "USGS Earth Resources",
            "FAO Agricultural Database",
            "NASA Earth Observatory",
            "World Bank Land Data",
            "UN Environment Programme",
            "National Geographic Society",
            "Geological Survey Reports (197 countries)"
        ]
    },

    // ============================================
    // PLAIN TYPES - COMPLETE TAXONOMY
    // ============================================
    plainTypes: {
        structural: {
            id: "structural",
            name: "Structural Plains",
            emoji: "🏛️",
            color: "#8B4513",
            definition: "Plains formed by horizontal layers of rock that have been exposed through uplift or erosion, maintaining their flat structure over millions of years.",
            formation: "Horizontal rock stratification exposed through tectonic stability and erosion",
            characteristics: [
                "Horizontal rock stratification",
                "Minimal tectonic disturbance",
                "Often ancient, stable landforms",
                "May contain fossil fuels",
                "Uniform elevation over large areas"
            ],
            soilTypes: ["Sedimentary soils", "Ancient weathered soils"],
            ageRange: "100 million - 3 billion years",
            examples: ["Russian Platform", "Great Plains (USA)", "Central Lowlands", "Australian Shield"]
        },
        alluvial: {
            id: "alluvial",
            name: "Alluvial Plains",
            emoji: "🌊",
            color: "#4169E1",
            definition: "Flat areas created by sediment deposition from rivers, typically along river valleys and deltas. Known for extremely fertile soils.",
            formation: "River sediment deposition over thousands to millions of years",
            characteristics: [
                "Extremely fertile soils",
                "Regular flooding enriches soil",
                "High groundwater table",
                "Dense human settlements",
                "Multiple soil layers visible"
            ],
            soilTypes: ["Alluvium", "Loam", "Silt", "Clay-rich deposits"],
            ageRange: "10,000 - 10 million years",
            examples: ["Indo-Gangetic Plain", "Mississippi Floodplain", "Nile Delta", "Mekong Delta"]
        },
        glacial: {
            id: "glacial",
            name: "Glacial Plains",
            emoji: "❄️",
            color: "#00CED1",
            definition: "Plains formed by glacial activity, including outwash plains from meltwater, till plains from glacial deposits, and lake plains from former glacial lakes.",
            formation: "Glacial deposition and outwash during ice ages",
            characteristics: [
                "Glacial erratics present",
                "Kettles and moraines",
                "Rich in glacial till",
                "Often has lakes and wetlands",
                "Drumlins and eskers common"
            ],
            soilTypes: ["Glacial till", "Outwash deposits", "Lacustrine sediments"],
            ageRange: "10,000 - 2 million years",
            examples: ["North German Plain", "Great Lakes Plains", "Finnish Lakeland", "Prairie Provinces"]
        },
        coastal: {
            id: "coastal",
            name: "Coastal Plains",
            emoji: "🏖️",
            color: "#20B2AA",
            definition: "Low-lying areas adjacent to oceans or seas, formed by marine sediment deposition or emergence of seafloor due to tectonic uplift or sea level changes.",
            formation: "Marine deposition and tectonic emergence",
            characteristics: [
                "Marine fossils present",
                "Sandy or marshy soils",
                "Salt marshes and estuaries",
                "Vulnerable to sea level rise",
                "Lagoons and barrier islands"
            ],
            soilTypes: ["Sandy soils", "Marine sediments", "Marsh soils"],
            ageRange: "5,000 - 100 million years",
            examples: ["Atlantic Coastal Plain", "Gulf Coastal Plain", "Eastern Coastal Plain (India)"]
        },
        lacustrine: {
            id: "lacustrine",
            name: "Lacustrine Plains",
            emoji: "🏞️",
            color: "#4682B4",
            definition: "Plains formed from ancient lake beds that have been exposed due to climate change, tectonic activity, or drainage.",
            formation: "Dried or drained ancient lake beds",
            characteristics: [
                "Very flat terrain",
                "Fine-grained sediments",
                "Often saline or alkaline soils",
                "Former shoreline features",
                "Horizontal stratification"
            ],
            soilTypes: ["Lake bed sediments", "Clay-rich soils", "Evaporite deposits"],
            ageRange: "1,000 - 50 million years",
            examples: ["Lake Agassiz Plain", "Bonneville Basin", "Lake Eyre Basin"]
        },
        lava: {
            id: "lava",
            name: "Lava Plains",
            emoji: "🌋",
            color: "#8B0000",
            definition: "Plains formed by extensive lava flows that spread across large areas and cooled to form flat basalt surfaces.",
            formation: "Volcanic eruptions and lava flow spreading",
            characteristics: [
                "Basalt bedrock",
                "Rich black regur soil",
                "Columnar basalt formations",
                "Excellent for cotton farming",
                "Underground lava tubes"
            ],
            soilTypes: ["Regur (Black Cotton Soil)", "Volcanic ash", "Basaltic soils"],
            ageRange: "1,000 - 200 million years",
            examples: ["Deccan Traps", "Columbia Plateau", "Ethiopian Highlands", "Snake River Plain"]
        },
        loess: {
            id: "loess",
            name: "Loess Plains",
            emoji: "💨",
            color: "#DEB887",
            definition: "Plains covered with wind-blown silt deposits, typically originating from glacial outwash or desert regions.",
            formation: "Wind deposition of fine particles over millennia",
            characteristics: [
                "Extremely fertile soils",
                "Easily eroded by water",
                "Uniform texture",
                "Yellow-brown color",
                "Can form steep cliffs"
            ],
            soilTypes: ["Loess", "Silt-rich soils", "Chernozem development"],
            ageRange: "10,000 - 2 million years",
            examples: ["Loess Plateau (China)", "Great Plains loess", "Pampas loess"]
        },
        erosional: {
            id: "erosional",
            name: "Erosional Plains (Peneplains)",
            emoji: "⛏️",
            color: "#696969",
            definition: "Plains formed when elevated regions are worn down to a nearly flat surface by erosive forces over millions of years.",
            formation: "Long-term erosion of highlands",
            characteristics: [
                "Evidence of ancient mountains",
                "Exposed bedrock in places",
                "Monadnocks (residual hills)",
                "Very old geological age",
                "Thin soil cover"
            ],
            soilTypes: ["Residual soils", "Weathered bedrock", "Laterite"],
            ageRange: "100 million - 3 billion years",
            examples: ["Canadian Shield", "Piedmont Region", "African peneplains"]
        },
        karst: {
            id: "karst",
            name: "Karst Plains",
            emoji: "🕳️",
            color: "#708090",
            definition: "Plains formed in regions with soluble limestone bedrock, characterized by sinkholes, underground drainage, and dissolution features.",
            formation: "Chemical weathering of limestone",
            characteristics: [
                "Sinkholes and caves",
                "Underground rivers",
                "Minimal surface water",
                "Tower karst in tropical areas",
                "Springs and resurgences"
            ],
            soilTypes: ["Terra rossa", "Calcium-rich soils", "Residual clay"],
            ageRange: "1 million - 500 million years",
            examples: ["Florida Peninsula", "Yucatan Peninsula", "Nullarbor Plain", "Guilin (China)"]
        },
        deltaic: {
            id: "deltaic",
            name: "Deltaic Plains",
            emoji: "🔺",
            color: "#228B22",
            definition: "Fan-shaped plains formed at river mouths where sediment is deposited as water velocity decreases upon entering larger water bodies.",
            formation: "River sediment deposition at coast",
            characteristics: [
                "Fan or triangular shape",
                "Multiple distributaries",
                "Extremely fertile",
                "Prone to flooding",
                "Dynamic, changing landscape"
            ],
            soilTypes: ["Delta alluvium", "Organic-rich muds", "Tidal flat sediments"],
            ageRange: "5,000 - 10 million years",
            examples: ["Ganges-Brahmaputra Delta", "Nile Delta", "Mississippi Delta", "Mekong Delta"]
        },
        flood: {
            id: "flood",
            name: "Flood Plains",
            emoji: "🌧️",
            color: "#32CD32",
            definition: "Low-lying areas adjacent to rivers that experience periodic flooding, receiving new sediment deposits with each flood event.",
            formation: "Repeated river flooding and sediment deposition",
            characteristics: [
                "Seasonal flooding",
                "Levees and backswamps",
                "Oxbow lakes",
                "Highly fertile soils",
                "Meandering rivers"
            ],
            soilTypes: ["Flood deposits", "Levee soils", "Backswamp clays"],
            ageRange: "1,000 - 1 million years",
            examples: ["Amazon Floodplain", "Brahmaputra Floodplain", "Danube Floodplain"]
        },
        desert: {
            id: "desert",
            name: "Desert Plains",
            emoji: "🏜️",
            color: "#F4A460",
            definition: "Flat arid regions with minimal vegetation, formed by wind erosion and deposition in low-rainfall environments.",
            formation: "Wind erosion and deposition in arid climates",
            characteristics: [
                "Sparse vegetation",
                "Sand and gravel surfaces",
                "Extreme temperature variation",
                "Wind-sculpted features",
                "Salt flats and playas"
            ],
            soilTypes: ["Desert pavement", "Sand", "Saline soils", "Reg"],
            ageRange: "10,000 - 100 million years",
            examples: ["Sahara Desert plains", "Arabian Desert", "Thar Desert", "Gobi Desert plains"]
        }
    },

    // ============================================
    // ALL 197 COUNTRIES - COMPLETE DATA
    // ============================================
    countries: {
        // ASIA (48 countries)
        "AF": {
            code: "AF",
            name: "Afghanistan",
            localName: "افغانستان (Afghānistān)",
            flag: "🇦🇫",
            flagUrl: "https://flagcdn.com/w80/af.png",
            continent: "Asia",
            region: "Central Asia",
            capital: "Kabul",
            coordinates: { lat: 33.93, lng: 67.71 },
            totalArea: 652230,
            plainsArea: 78000,
            plainsPercent: 12.0,
            population: 40000000,
            populationOnPlains: 15000000,
            climate: ["Arid", "Semi-arid", "Continental"],
            
            plainTypes: {
                alluvial: {
                    present: true,
                    area: 45000,
                    percentage: 57.7,
                    majorPlains: [
                        {
                            name: "Helmand River Plain",
                            localName: "دشت هلمند",
                            area: 25000,
                            coordinates: { lat: 31.0, lng: 64.0 },
                            elevation: { min: 500, max: 900, unit: "m" },
                            rivers: ["Helmand River", "Arghandab River"],
                            soilType: "Alluvial loam",
                            crops: ["Wheat", "Cotton", "Opium poppy", "Fruits"],
                            irrigation: "Canal and well irrigation",
                            settlements: ["Lashkar Gah", "Kandahar region"],
                            historicalSignificance: "Ancient Silk Road route, Helmand Valley civilization",
                            environmentalStatus: "Degraded due to war and drought",
                            waterSource: "Helmand River, Kajakai Dam"
                        },
                        {
                            name: "Kunduz Plain",
                            localName: "دشت قندوز",
                            area: 12000,
                            coordinates: { lat: 36.7, lng: 68.9 },
                            elevation: { min: 350, max: 500, unit: "m" },
                            rivers: ["Kunduz River"],
                            soilType: "Fertile alluvium",
                            crops: ["Cotton", "Rice", "Wheat"],
                            irrigation: "Traditional irrigation",
                            settlements: ["Kunduz City"],
                            historicalSignificance: "Historical cotton-producing region",
                            environmentalStatus: "Moderate degradation",
                            waterSource: "Kunduz River"
                        }
                    ]
                },
                desert: {
                    present: true,
                    area: 25000,
                    percentage: 32.1,
                    majorPlains: [
                        {
                            name: "Registan Desert Plain",
                            localName: "ریگستان",
                            area: 20000,
                            coordinates: { lat: 30.5, lng: 65.5 },
                            elevation: { min: 600, max: 1000, unit: "m" },
                            soilType: "Sandy, desert pavement",
                            vegetation: "Sparse shrubs, grasses",
                            wildlife: ["Afghan wild ass", "Gazelles", "Desert foxes"],
                            settlements: ["Nomadic tribes"],
                            historicalSignificance: "Part of ancient caravan routes",
                            environmentalStatus: "Intact desert ecosystem",
                            uniqueFeatures: "Red sand dunes, minimal rainfall"
                        }
                    ]
                },
                structural: {
                    present: true,
                    area: 8000,
                    percentage: 10.2,
                    majorPlains: [
                        {
                            name: "Kabul Basin",
                            area: 8000,
                            coordinates: { lat: 34.5, lng: 69.1 },
                            elevation: { min: 1700, max: 2000, unit: "m" },
                            soilType: "Structural basin fill",
                            significance: "Capital region, major population center"
                        }
                    ]
                }
            },
            
            regions: [
                {
                    name: "Northern Plains Region",
                    provinces: ["Kunduz", "Takhar", "Baghlan", "Balkh"],
                    plainTypes: ["alluvial"],
                    area: 35000,
                    characteristics: "Fertile river valleys, major agricultural zone"
                },
                {
                    name: "Southern Plains Region",
                    provinces: ["Helmand", "Kandahar", "Nimroz"],
                    plainTypes: ["alluvial", "desert"],
                    area: 43000,
                    characteristics: "Arid plains, irrigation-dependent agriculture"
                }
            ],
            
            keyFacts: [
                "12% of Afghanistan consists of plains",
                "Helmand Valley was one of earliest irrigation civilizations",
                "Northern plains are major wheat-producing regions",
                "Registan Desert is one of Central Asia's largest sandy deserts",
                "Plains support 37.5% of population but face severe water stress"
            ],
            
            agriculture: {
                mainCrops: ["Wheat", "Cotton", "Rice", "Barley", "Fruits", "Nuts"],
                irrigatedArea: 32000,
                rainfedArea: 28000,
                productionValue: 4500000000, // USD
                employmentPercent: 44
            },
            
            environmentalChallenges: [
                "Severe drought conditions",
                "Overgrazing and deforestation",
                "Soil erosion",
                "Water scarcity",
                "Land degradation from conflict"
            ],
            
            historicalTimeline: [
                { year: "3000 BCE", event: "Early agriculture in Helmand Valley" },
                { year: "500 BCE", event: "Persian Empire irrigation systems" },
                { year: "1960s", event: "Helmand Valley Authority development" },
                { year: "2000s", event: "Drought and conflict impact on agriculture" }
            ]
        },

        "AM": {
            code: "AM",
            name: "Armenia",
            localName: "Հայdelays (Hayastan)",
            flag: "🇦🇲",
            flagUrl: "https://flagcdn.com/w80/am.png",
            continent: "Asia",
            region: "South Caucasus",
            capital: "Yerevan",
            coordinates: { lat: 40.07, lng: 45.04 },
            totalArea: 29743,
            plainsArea: 3500,
            plainsPercent: 11.8,
            population: 2963000,
            populationOnPlains: 1800000,
            climate: ["Highland continental", "Semi-arid"],
            
            plainTypes: {
                alluvial: {
                    present: true,
                    area: 2500,
                    percentage: 71.4,
                    majorPlains: [
                        {
                            name: "Ararat Plain",
                            localName: "Արdelays դdelays",
                            area: 2000,
                            coordinates: { lat: 39.9, lng: 44.5 },
                            elevation: { min: 800, max: 1000, unit: "m" },
                            rivers: ["Araxes River", "Hrazdan River"],
                            soilType: "Fertile alluvial chernozem",
                            crops: ["Grapes", "Apricots", "Peaches", "Wheat", "Vegetables"],
                            irrigation: "Extensive canal network",
                            settlements: ["Yerevan", "Artashat", "Armavir"],
                            historicalSignificance: "Biblical Mount Ararat viewpoint, ancient Armenian heartland",
                            environmentalStatus: "Moderate, urbanization pressure",
                            waterSource: "Araxes River, Lake Sevan via canals",
                            uniqueFeatures: "View of Mount Ararat, wine-producing region"
                        }
                    ]
                },
                lacustrine: {
                    present: true,
                    area: 1000,
                    percentage: 28.6,
                    majorPlains: [
                        {
                            name: "Lake Sevan Basin Plains",
                            area: 1000,
                            coordinates: { lat: 40.3, lng: 45.0 },
                            elevation: { min: 1900, max: 2000, unit: "m" },
                            soilType: "Lacustrine sediments",
                            significance: "Surrounding plains of highest large lake in Caucasus"
                        }
                    ]
                }
            },
            
            regions: [
                {
                    name: "Ararat Valley",
                    provinces: ["Yerevan", "Armavir", "Ararat"],
                    plainTypes: ["alluvial"],
                    area: 2000,
                    characteristics: "Most fertile and populated region"
                }
            ],
            
            keyFacts: [
                "Ararat Plain is Armenia's agricultural heartland",
                "60% of population lives in Ararat Plain region",
                "Famous for grape and apricot cultivation",
                "Ancient irrigation systems from Urartian period",
                "Mount Ararat (in Turkey) visible from the plain"
            ],
            
            agriculture: {
                mainCrops: ["Grapes", "Apricots", "Peaches", "Wheat", "Vegetables"],
                irrigatedArea: 2100,
                rainfedArea: 400,
                productionValue: 850000000,
                employmentPercent: 36
            }
        },

        "AZ": {
            code: "AZ",
            name: "Azerbaijan",
            localName: "Azərbaycan",
            flag: "🇦🇿",
            flagUrl: "https://flagcdn.com/w80/az.png",
            continent: "Asia",
            region: "South Caucasus",
            capital: "Baku",
            coordinates: { lat: 40.14, lng: 47.58 },
            totalArea: 86600,
            plainsArea: 43000,
            plainsPercent: 49.7,
            population: 10140000,
            populationOnPlains: 7500000,
            climate: ["Semi-arid", "Subtropical"],
            
            plainTypes: {
                alluvial: {
                    present: true,
                    area: 35000,
                    percentage: 81.4,
                    majorPlains: [
                        {
                            name: "Kura-Araxes Lowland",
                            localName: "Kür-Araz ovalığı",
                            area: 30000,
                            coordinates: { lat: 40.0, lng: 48.5 },
                            elevation: { min: -28, max: 200, unit: "m" },
                            rivers: ["Kura River", "Araxes River"],
                            soilType: "Alluvial, some saline",
                            crops: ["Cotton", "Grapes", "Wheat", "Rice", "Vegetables"],
                            irrigation: "Major canal systems",
                            settlements: ["Ganja", "Mingachevir", "Barda"],
                            historicalSignificance: "Ancient Kura-Araxes culture, Silk Road",
                            environmentalStatus: "Salinization issues",
                            waterSource: "Kura and Araxes rivers, Mingachevir Reservoir"
                        },
                        {
                            name: "Mugan Plain",
                            localName: "Muğan düzü",
                            area: 5000,
                            coordinates: { lat: 39.5, lng: 48.5 },
                            elevation: { min: -10, max: 50, unit: "m" },
                            soilType: "Alluvial, saline patches",
                            crops: ["Cotton", "Wheat", "Vegetables"],
                            uniqueFeatures: "Partially below sea level"
                        }
                    ]
                },
                coastal: {
                    present: true,
                    area: 8000,
                    percentage: 18.6,
                    majorPlains: [
                        {
                            name: "Absheron Peninsula Plain",
                            area: 3000,
                            coordinates: { lat: 40.4, lng: 50.0 },
                            elevation: { min: -28, max: 100, unit: "m" },
                            soilType: "Sandy, petroleum-contaminated",
                            settlements: ["Baku", "Sumgait"],
                            significance: "Oil industry center, capital region"
                        }
                    ]
                }
            },
            
            regions: [
                {
                    name: "Kura-Araxes Region",
                    provinces: ["Central plains"],
                    plainTypes: ["alluvial"],
                    area: 35000,
                    characteristics: "Major agricultural and oil-producing region"
                }
            ],
            
            keyFacts: [
                "Nearly 50% of Azerbaijan is plains",
                "Kura-Araxes lowland is largest plain in South Caucasus",
                "Parts of the plain are below sea level",
                "Major cotton and grape producing region",
                "Ancient Kura-Araxes Bronze Age culture originated here"
            ]
        },

        "BH": {
            code: "BH",
            name: "Bahrain",
            localName: "البحرين (al-Baḥrayn)",
            flag: "🇧🇭",
            flagUrl: "https://flagcdn.com/w80/bh.png",
            continent: "Asia",
            region: "Middle East",
            capital: "Manama",
            coordinates: { lat: 26.03, lng: 50.55 },
            totalArea: 780,
            plainsArea: 760,
            plainsPercent: 97.4,
            population: 1700000,
            populationOnPlains: 1700000,
            climate: ["Arid", "Desert"],
            
            plainTypes: {
                coastal: {
                    present: true,
                    area: 760,
                    percentage: 100,
                    majorPlains: [
                        {
                            name: "Bahrain Coastal Plain",
                            area: 760,
                            coordinates: { lat: 26.0, lng: 50.5 },
                            elevation: { min: 0, max: 134, unit: "m" },
                            soilType: "Sandy, saline",
                            uniqueFeatures: "Entire country is essentially a low-lying island plain",
                            settlements: ["Manama", "Muharraq", "Riffa"],
                            waterSource: "Desalination, underground springs",
                            environmentalStatus: "Land reclamation ongoing"
                        }
                    ]
                }
            },
            
            keyFacts: [
                "Entire country is a low-lying plain",
                "Highest point is only 134 meters",
                "Historical center of pearl diving",
                "Extensive land reclamation projects",
                "Ancient Dilmun civilization site"
            ]
        },

        "BD": {
            code: "BD",
            name: "Bangladesh",
            localName: "বাংলাদেশ (Bāṃlādēśa)",
            flag: "🇧🇩",
            flagUrl: "https://flagcdn.com/w80/bd.png",
            continent: "Asia",
            region: "South Asia",
            capital: "Dhaka",
            coordinates: { lat: 23.68, lng: 90.36 },
            totalArea: 147570,
            plainsArea: 130000,
            plainsPercent: 88.1,
            population: 170000000,
            populationOnPlains: 165000000,
            climate: ["Tropical monsoon", "Humid subtropical"],
            
            plainTypes: {
                deltaic: {
                    present: true,
                    area: 80000,
                    percentage: 61.5,
                    majorPlains: [
                        {
                            name: "Ganges-Brahmaputra Delta",
                            localName: "গঙ্গা-ব্রহ্মপুত্র বদ্বীপ",
                            area: 80000,
                            coordinates: { lat: 23.0, lng: 90.0 },
                            elevation: { min: 0, max: 10, unit: "m" },
                            rivers: ["Ganges (Padma)", "Brahmaputra (Jamuna)", "Meghna"],
                            soilType: "Extremely fertile alluvium, silt-rich",
                            crops: ["Rice", "Jute", "Tea", "Wheat", "Vegetables", "Fish"],
                            settlements: ["Dhaka", "Chittagong", "Khulna", "Rajshahi"],
                            historicalSignificance: "World's largest delta, ancient Bengal civilization",
                            environmentalStatus: "Highly vulnerable to flooding and sea-level rise",
                            waterSource: "Ganges, Brahmaputra, Meghna river systems",
                            uniqueFeatures: "World's largest river delta, mangrove forests (Sundarbans)",
                            biodiversity: ["Royal Bengal Tiger", "Ganges River Dolphin", "Saltwater Crocodile"],
                            annualFloodArea: 26000, // km² average
                            sedimentDeposition: 1000000000 // tons per year
                        }
                    ]
                },
                alluvial: {
                    present: true,
                    area: 40000,
                    percentage: 30.8,
                    majorPlains: [
                        {
                            name: "Sylhet Floodplain",
                            localName: "সিলেট প্লাবনভূমি",
                            area: 15000,
                            coordinates: { lat: 24.8, lng: 91.8 },
                            elevation: { min: 5, max: 30, unit: "m" },
                            rivers: ["Surma", "Kushiyara"],
                            crops: ["Rice", "Tea"],
                            uniqueFeatures: "Haor (wetland) ecosystem, tea gardens"
                        },
                        {
                            name: "Barind Tract",
                            localName: "বরেন্দ্র ভূমি",
                            area: 7500,
                            coordinates: { lat: 25.0, lng: 88.8 },
                            elevation: { min: 20, max: 45, unit: "m" },
                            soilType: "Older alluvium, reddish clay",
                            crops: ["Rice", "Mango", "Wheat"],
                            uniqueFeatures: "Slightly elevated old alluvial plain"
                        }
                    ]
                },
                coastal: {
                    present: true,
                    area: 10000,
                    percentage: 7.7,
                    majorPlains: [
                        {
                            name: "Sundarbans Coastal Plain",
                            area: 10000,
                            coordinates: { lat: 22.0, lng: 89.5 },
                            elevation: { min: 0, max: 5, unit: "m" },
                            soilType: "Saline, mangrove",
                            uniqueFeatures: "World's largest mangrove forest",
                            biodiversity: ["Royal Bengal Tiger", "Sundarbans flora"]
                        }
                    ]
                }
            },
            
            regions: [
                {
                    name: "Greater Bengal Delta",
                    divisions: ["Dhaka", "Khulna", "Barisal", "Chittagong"],
                    plainTypes: ["deltaic", "coastal"],
                    area: 90000,
                    characteristics: "World's most densely populated delta region"
                },
                {
                    name: "Northern Plains",
                    divisions: ["Rajshahi", "Rangpur"],
                    plainTypes: ["alluvial"],
                    area: 25000,
                    characteristics: "Older alluvial region, mango orchards"
                },
                {
                    name: "Northeastern Haors",
                    divisions: ["Sylhet", "Mymensingh"],
                    plainTypes: ["alluvial", "flood"],
                    area: 15000,
                    characteristics: "Wetland ecosystems, tea cultivation"
                }
            ],
            
            keyFacts: [
                "88% of Bangladesh is plains - highest percentage in South Asia",
                "World's largest river delta (Ganges-Brahmaputra)",
                "One of the most flood-prone countries on Earth",
                "Produces 35+ million tonnes of rice annually",
                "Population density on plains: ~1,300/km²",
                "Sea level rise threatens 17% of land area",
                "Sundarbans: World's largest mangrove forest"
            ],
            
            agriculture: {
                mainCrops: ["Rice", "Jute", "Tea", "Wheat", "Sugarcane", "Vegetables"],
                irrigatedArea: 54000,
                rainfedArea: 76000,
                productionValue: 35000000000,
                employmentPercent: 40,
                riceProduction: 35000000, // tonnes
                juteProduction: 1500000 // tonnes
            },
            
            environmentalChallenges: [
                "Annual monsoon flooding",
                "Cyclone vulnerability",
                "Sea-level rise threat",
                "River erosion",
                "Arsenic contamination of groundwater",
                "Salinity intrusion"
            ],
            
            historicalTimeline: [
                { year: "300 BCE", event: "Mauryan Empire reaches Bengal delta" },
                { year: "1200 CE", event: "Islamic sultanates establish in delta" },
                { year: "1757 CE", event: "British East India Company control" },
                { year: "1947 CE", event: "Partition - East Pakistan created" },
                { year: "1971 CE", event: "Bangladesh independence" },
                { year: "1998 CE", event: "Devastating floods cover 68% of country" }
            ]
        },

        "BT": {
            code: "BT",
            name: "Bhutan",
            localName: "འབྲུག་ཡུལ་ (Druk Yul)",
            flag: "🇧🇹",
            flagUrl: "https://flagcdn.com/w80/bt.png",
            continent: "Asia",
            region: "South Asia",
            capital: "Thimphu",
            coordinates: { lat: 27.51, lng: 90.43 },
            totalArea: 38394,
            plainsArea: 2000,
            plainsPercent: 5.2,
            population: 780000,
            populationOnPlains: 120000,
            climate: ["Subtropical", "Temperate", "Alpine"],
            
            plainTypes: {
                alluvial: {
                    present: true,
                    area: 2000,
                    percentage: 100,
                    majorPlains: [
                        {
                            name: "Duars Plain",
                            localName: "Duars",
                            area: 2000,
                            coordinates: { lat: 26.8, lng: 89.5 },
                            elevation: { min: 100, max: 500, unit: "m" },
                            rivers: ["Manas", "Sankosh", "Torsa"],
                            soilType: "Alluvial, fertile",
                            crops: ["Rice", "Oranges", "Cardamom"],
                            wildlife: ["Elephants", "Tigers", "Rhinos"],
                            uniqueFeatures: "Foothills plain, gateway to Himalayas"
                        }
                    ]
                }
            },
            
            keyFacts: [
                "Only 5% of Bhutan is plains (southern Duars)",
                "Most mountainous country relative to size",
                "Duars serves as agricultural zone",
                "Gateway plains to Himalayan kingdom",
                "Wildlife corridors connect to Indian plains"
            ]
        },

        "BN": {
            code: "BN",
            name: "Brunei",
            localName: "Brunei Darussalam",
            flag: "🇧🇳",
            flagUrl: "https://flagcdn.com/w80/bn.png",
            continent: "Asia",
            region: "Southeast Asia",
            capital: "Bandar Seri Begawan",
            coordinates: { lat: 4.90, lng: 114.94 },
            totalArea: 5765,
            plainsArea: 4000,
            plainsPercent: 69.4,
            population: 440000,
            populationOnPlains: 400000,
            climate: ["Tropical rainforest"],
            
            plainTypes: {
                coastal: {
                    present: true,
                    area: 4000,
                    percentage: 100,
                    majorPlains: [
                        {
                            name: "Brunei Coastal Plain",
                            area: 4000,
                            coordinates: { lat: 4.9, lng: 115.0 },
                            elevation: { min: 0, max: 100, unit: "m" },
                            soilType: "Alluvial, peat",
                            settlements: ["Bandar Seri Begawan", "Seria"],
                            uniqueFeatures: "Oil and gas fields, rainforest",
                            resources: "Petroleum, natural gas"
                        }
                    ]
                }
            },
            
            keyFacts: [
                "Coastal plain dominates the country",
                "Major oil and gas reserves under plains",
                "Tropical rainforest covers much of interior",
                "One of wealthiest nations due to oil",
                "Extensive peat swamp forests"
            ]
        },

        "KH": {
            code: "KH",
            name: "Cambodia",
            localName: "កម្ពុជា (Kâmpŭchéa)",
            flag: "🇰🇭",
            flagUrl: "https://flagcdn.com/w80/kh.png",
            continent: "Asia",
            region: "Southeast Asia",
            capital: "Phnom Penh",
            coordinates: { lat: 12.57, lng: 104.99 },
            totalArea: 181035,
            plainsArea: 140000,
            plainsPercent: 77.3,
            population: 16950000,
            populationOnPlains: 15000000,
            climate: ["Tropical monsoon"],
            
            plainTypes: {
                alluvial: {
                    present: true,
                    area: 100000,
                    percentage: 71.4,
                    majorPlains: [
                        {
                            name: "Tonle Sap Basin",
                            localName: "ទន្លេសាប (Tônlé Sab)",
                            area: 70000,
                            coordinates: { lat: 12.5, lng: 104.0 },
                            elevation: { min: 5, max: 50, unit: "m" },
                            rivers: ["Mekong", "Tonle Sap"],
                            soilType: "Extremely fertile flood deposits",
                            crops: ["Rice", "Fish", "Vegetables"],
                            settlements: ["Phnom Penh", "Battambang", "Siem Reap"],
                            historicalSignificance: "Khmer Empire heartland, Angkor Wat region",
                            environmentalStatus: "Threatened by upstream dams",
                            waterSource: "Tonle Sap Lake, Mekong River",
                            uniqueFeatures: "World's most productive inland fishery, Angkor temples"
                        },
                        {
                            name: "Mekong Floodplain",
                            area: 30000,
                            coordinates: { lat: 11.5, lng: 105.0 },
                            elevation: { min: 0, max: 20, unit: "m" },
                            soilType: "Rich alluvium",
                            crops: ["Rice", "Floating rice varieties"]
                        }
                    ]
                },
                flood: {
                    present: true,
                    area: 40000,
                    percentage: 28.6,
                    majorPlains: [
                        {
                            name: "Tonle Sap Floodplain",
                            area: 40000,
                            coordinates: { lat: 13.0, lng: 104.0 },
                            uniqueFeatures: "Lake expands 5x during monsoon",
                            biodiversity: ["Fish", "Water birds", "Crocodiles"]
                        }
                    ]
                }
            },
            
            keyFacts: [
                "77% of Cambodia is plains",
                "Tonle Sap is world's most productive freshwater fishery",
                "Rice cultivation on 90% of agricultural land",
                "Angkor Wat built on alluvial plain",
                "Unique 'pulsing' hydrology with seasonal lake expansion"
            ]
        },

        "CN": {
            code: "CN",
            name: "China",
            localName: "中国 (Zhōngguó)",
            flag: "🇨🇳",
            flagUrl: "https://flagcdn.com/w80/cn.png",
            continent: "Asia",
            region: "East Asia",
            capital: "Beijing",
            coordinates: { lat: 35.86, lng: 104.20 },
            totalArea: 9596961,
            plainsArea: 1150000,
            plainsPercent: 12.0,
            population: 1412000000,
            populationOnPlains: 700000000,
            climate: ["Varies: Tropical to Subarctic"],
            
            plainTypes: {
                alluvial: {
                    present: true,
                    area: 600000,
                    percentage: 52.2,
                    majorPlains: [
                        {
                            name: "North China Plain",
                            localName: "华北平原 (Huáběi Píngyuán)",
                            area: 409500,
                            coordinates: { lat: 36.0, lng: 117.0 },
                            elevation: { min: 0, max: 50, unit: "m" },
                            rivers: ["Yellow River (Huang He)", "Hai River", "Huai River"],
                            soilType: "Loess-derived alluvium, highly fertile",
                            crops: ["Wheat", "Corn", "Cotton", "Soybeans", "Vegetables"],
                            settlements: ["Beijing", "Tianjin", "Shijiazhuang", "Jinan", "Zhengzhou"],
                            historicalSignificance: "Cradle of Chinese civilization, multiple dynasties",
                            environmentalStatus: "Severe groundwater depletion, pollution",
                            waterSource: "Yellow River, South-North Water Transfer",
                            uniqueFeatures: "Yellow River deposits 1.6B tons sediment/year",
                            populationDensity: 950 // per km²
                        },
                        {
                            name: "Yangtze River Plain",
                            localName: "长江中下游平原",
                            area: 200000,
                            coordinates: { lat: 31.0, lng: 118.0 },
                            elevation: { min: 0, max: 50, unit: "m" },
                            rivers: ["Yangtze River (Chang Jiang)"],
                            soilType: "Paddy soils, alluvium",
                            crops: ["Rice", "Rapeseed", "Silk", "Tea"],
                            settlements: ["Shanghai", "Nanjing", "Wuhan", "Hangzhou"],
                            historicalSignificance: "Economic heartland, Grand Canal terminus",
                            uniqueFeatures: "China's 'land of fish and rice'"
                        },
                        {
                            name: "Pearl River Delta",
                            localName: "珠江三角洲",
                            area: 40000,
                            coordinates: { lat: 22.5, lng: 113.5 },
                            elevation: { min: 0, max: 20, unit: "m" },
                            rivers: ["Pearl River (Zhu Jiang)"],
                            settlements: ["Guangzhou", "Shenzhen", "Hong Kong", "Macau"],
                            uniqueFeatures: "World's largest urban agglomeration by area"
                        }
                    ]
                },
                loess: {
                    present: true,
                    area: 350000,
                    percentage: 30.4,
                    majorPlains: [
                        {
                            name: "Loess Plateau",
                            localName: "黄土高原 (Huángtǔ Gāoyuán)",
                            area: 350000,
                            coordinates: { lat: 36.0, lng: 108.0 },
                            elevation: { min: 1000, max: 2000, unit: "m" },
                            soilType: "Loess (wind-blown silt), extremely fertile",
                            characteristics: "World's largest loess deposit, severe erosion",
                            crops: ["Millet", "Wheat", "Apples"],
                            historicalSignificance: "Origin of Chinese agriculture",
                            uniqueFeatures: "Cave dwellings (yaodong), Yellow River source of sediment"
                        }
                    ]
                },
                structural: {
                    present: true,
                    area: 200000,
                    percentage: 17.4,
                    majorPlains: [
                        {
                            name: "Northeast Plain (Manchurian Plain)",
                            localName: "东北平原",
                            area: 350000,
                            coordinates: { lat: 45.0, lng: 125.0 },
                            elevation: { min: 50, max: 200, unit: "m" },
                            rivers: ["Songhua", "Liao", "Nen"],
                            soilType: "Black soil (chernozem)",
                            crops: ["Soybeans", "Corn", "Rice", "Wheat"],
                            settlements: ["Harbin", "Shenyang", "Changchun"],
                            historicalSignificance: "Qing dynasty origin, industrial base",
                            uniqueFeatures: "China's most fertile black soil region"
                        }
                    ]
                }
            },
            
            regions: [
                {
                    name: "North China Plain",
                    provinces: ["Hebei", "Henan", "Shandong", "northern Anhui", "northern Jiangsu"],
                    plainTypes: ["alluvial"],
                    area: 409500,
                    characteristics: "Yellow River basin, wheat production"
                },
                {
                    name: "Yangtze Basin",
                    provinces: ["Jiangsu", "Zhejiang", "Hubei", "Hunan", "Jiangxi"],
                    plainTypes: ["alluvial", "deltaic"],
                    area: 200000,
                    characteristics: "Rice bowl of China"
                },
                {
                    name: "Northeast China",
                    provinces: ["Heilongjiang", "Jilin", "Liaoning"],
                    plainTypes: ["structural", "alluvial"],
                    area: 350000,
                    characteristics: "Black soil belt, soybean production"
                }
            ],
            
            keyFacts: [
                "Only 12% of China is plains but supports 50% of population",
                "North China Plain is world's largest alluvial plain",
                "Yellow River called 'China's Sorrow' due to flooding",
                "Loess Plateau has world's thickest loess deposits",
                "Northeast Plain has China's most fertile black soils",
                "Plains produce 80%+ of China's grain",
                "Severe groundwater depletion affecting North China Plain"
            ],
            
            agriculture: {
                mainCrops: ["Rice", "Wheat", "Corn", "Soybeans", "Cotton", "Vegetables"],
                irrigatedArea: 700000,
                rainfedArea: 450000,
                productionValue: 1200000000000,
                grainProduction: 680000000, // tonnes
                employmentPercent: 25
            }
        },

        "IN": {
            code: "IN",
            name: "India",
            localName: "भारत (Bhārat)",
            flag: "🇮🇳",
            flagUrl: "https://flagcdn.com/w80/in.png",
            continent: "Asia",
            region: "South Asia",
            capital: "New Delhi",
            coordinates: { lat: 20.59, lng: 78.96 },
            totalArea: 3287263,
            plainsArea: 700000,
            plainsPercent: 21.3,
            population: 1400000000,
            populationOnPlains: 800000000,
            climate: ["Tropical monsoon", "Arid", "Humid subtropical", "Alpine"],
            
            plainTypes: {
                alluvial: {
                    present: true,
                    area: 550000,
                    percentage: 78.6,
                    majorPlains: [
                        {
                            name: "Indo-Gangetic Plain",
                            localName: "सिंधु-गंगा का मैदान",
                            area: 520000,
                            coordinates: { lat: 26.5, lng: 81.0 },
                            elevation: { min: 0, max: 300, unit: "m" },
                            rivers: ["Ganges", "Yamuna", "Ghaghra", "Gandak", "Kosi", "Brahmaputra"],
                            soilType: "Alluvial - Khadar (new) and Bhangar (old)",
                            crops: ["Rice", "Wheat", "Sugarcane", "Cotton", "Vegetables", "Pulses"],
                            settlements: ["Delhi", "Lucknow", "Patna", "Kolkata", "Varanasi", "Kanpur", "Agra"],
                            historicalSignificance: "Indus Valley Civilization, Vedic period, Mughal Empire, freedom movement",
                            environmentalStatus: "Groundwater depletion, pollution, urbanization",
                            waterSource: "Himalayan rivers, monsoon rainfall",
                            uniqueFeatures: "World's most densely populated plain region",
                            populationDensity: 800,
                            subRegions: [
                                {
                                    name: "Bhabar Zone",
                                    description: "Porous gravel beds at Himalayan foothills",
                                    width: "8-16 km",
                                    characteristics: "Streams disappear underground"
                                },
                                {
                                    name: "Terai Zone",
                                    description: "Marshy, forested belt south of Bhabar",
                                    width: "15-30 km",
                                    characteristics: "Fertile, malaria-prone, now agricultural"
                                },
                                {
                                    name: "Bhangar Plain",
                                    description: "Older alluvium, elevated terraces",
                                    characteristics: "Contains kankar (calcium concretions)"
                                },
                                {
                                    name: "Khadar Plain",
                                    description: "New alluvium in active floodplains",
                                    characteristics: "Extremely fertile, annual flooding"
                                }
                            ]
                        },
                        {
                            name: "Brahmaputra Plain (Assam Valley)",
                            localName: "ব্রহ্মপুত্র সমভূমি",
                            area: 56000,
                            coordinates: { lat: 26.2, lng: 91.7 },
                            elevation: { min: 30, max: 130, unit: "m" },
                            rivers: ["Brahmaputra", "Barak", "Subansiri"],
                            soilType: "Fertile alluvium",
                            crops: ["Tea", "Rice", "Jute", "Sugarcane"],
                            settlements: ["Guwahati", "Jorhat", "Dibrugarh"],
                            historicalSignificance: "Ahom kingdom, tea cultivation history",
                            uniqueFeatures: "Majuli - world's largest river island",
                            biodiversity: ["One-horned Rhino", "Elephants", "Tigers"]
                        }
                    ]
                },
                coastal: {
                    present: true,
                    area: 100000,
                    percentage: 14.3,
                    majorPlains: [
                        {
                            name: "Eastern Coastal Plain (Coromandel Coast)",
                            localName: "पूर्वी तटीय मैदान",
                            area: 60000,
                            coordinates: { lat: 14.0, lng: 80.0 },
                            elevation: { min: 0, max: 80, unit: "m" },
                            rivers: ["Mahanadi", "Godavari", "Krishna", "Kaveri"],
                            soilType: "Deltaic alluvium, coastal sand",
                            crops: ["Rice", "Coconut", "Groundnut", "Tobacco"],
                            settlements: ["Chennai", "Visakhapatnam", "Bhubaneswar"],
                            subRegions: ["Utkal Plain", "Andhra Plain", "Tamil Nadu Plain"],
                            uniqueFeatures: "Major deltas, cyclone-prone"
                        },
                        {
                            name: "Western Coastal Plain",
                            localName: "पश्चिमी तटीय मैदान",
                            area: 40000,
                            coordinates: { lat: 14.0, lng: 74.0 },
                            elevation: { min: 0, max: 200, unit: "m" },
                            rivers: ["Narmada", "Tapi", "Mandovi", "Zuari"],
                            soilType: "Laterite, sandy, alluvial",
                            crops: ["Rice", "Coconut", "Spices", "Cashew"],
                            settlements: ["Mumbai", "Goa", "Kochi", "Mangalore"],
                            subRegions: ["Gujarat Plain", "Konkan", "Karnataka Coast", "Malabar Coast"],
                            uniqueFeatures: "Narrow strip, Western Ghats backdrop, backwaters"
                        }
                    ]
                },
                lava: {
                    present: true,
                    area: 50000,
                    percentage: 7.1,
                    majorPlains: [
                        {
                            name: "Malwa Plateau Plain",
                            localName: "मालवा पठार",
                            area: 50000,
                            coordinates: { lat: 23.0, lng: 77.0 },
                            elevation: { min: 300, max: 600, unit: "m" },
                            soilType: "Black cotton soil (Regur)",
                            crops: ["Cotton", "Soybean", "Wheat", "Opium poppy"],
                            settlements: ["Indore", "Bhopal", "Ujjain"],
                            uniqueFeatures: "Part of Deccan Traps, ancient trading center"
                        }
                    ]
                }
            },
            
            regions: [
                {
                    name: "Upper Gangetic Plain",
                    states: ["Uttarakhand (Terai)", "Uttar Pradesh (Western)"],
                    plainTypes: ["alluvial"],
                    area: 120000,
                    characteristics: "Sugarcane belt, canal irrigation"
                },
                {
                    name: "Middle Gangetic Plain",
                    states: ["Uttar Pradesh (Eastern)", "Bihar"],
                    plainTypes: ["alluvial"],
                    area: 180000,
                    characteristics: "Rice-wheat system, dense population"
                },
                {
                    name: "Lower Gangetic Plain",
                    states: ["West Bengal"],
                    plainTypes: ["alluvial", "deltaic"],
                    area: 55000,
                    characteristics: "Ganges delta, jute and rice"
                },
                {
                    name: "Punjab-Haryana Plain",
                    states: ["Punjab", "Haryana"],
                    plainTypes: ["alluvial"],
                    area: 95000,
                    characteristics: "Breadbasket of India, Green Revolution center"
                },
                {
                    name: "Rajasthan Plains",
                    states: ["Rajasthan (Eastern)"],
                    plainTypes: ["alluvial", "desert"],
                    area: 80000,
                    characteristics: "Transitional zone, Indira Gandhi Canal"
                },
                {
                    name: "Gujarat Plains",
                    states: ["Gujarat"],
                    plainTypes: ["alluvial", "coastal"],
                    area: 75000,
                    characteristics: "Cotton and groundnut, Rann of Kutch"
                }
            ],
            
            stateWiseData: [
                {
                    state: "Uttar Pradesh",
                    code: "UP",
                    plainArea: 150000,
                    plainPercent: 62,
                    majorPlains: ["Indo-Gangetic Plain"],
                    crops: ["Wheat", "Rice", "Sugarcane", "Potato"],
                    population: 200000000,
                    irrigatedPercent: 78
                },
                {
                    state: "Bihar",
                    code: "BR",
                    plainArea: 73000,
                    plainPercent: 78,
                    majorPlains: ["Middle Gangetic Plain"],
                    crops: ["Rice", "Wheat", "Maize", "Vegetables"],
                    population: 104000000,
                    irrigatedPercent: 65
                },
                {
                    state: "Punjab",
                    code: "PB",
                    plainArea: 48000,
                    plainPercent: 95,
                    majorPlains: ["Indo-Gangetic Plain"],
                    crops: ["Wheat", "Rice", "Cotton"],
                    population: 28000000,
                    irrigatedPercent: 98
                },
                {
                    state: "Haryana",
                    code: "HR",
                    plainArea: 42000,
                    plainPercent: 95,
                    majorPlains: ["Indo-Gangetic Plain"],
                    crops: ["Wheat", "Rice", "Bajra", "Cotton"],
                    population: 25000000,
                    irrigatedPercent: 87
                },
                {
                    state: "West Bengal",
                    code: "WB",
                    plainArea: 50000,
                    plainPercent: 56,
                    majorPlains: ["Lower Gangetic Plain", "Bengal Delta"],
                    crops: ["Rice", "Jute", "Tea", "Vegetables"],
                    population: 91000000,
                    irrigatedPercent: 55
                },
                {
                    state: "Assam",
                    code: "AS",
                    plainArea: 56000,
                    plainPercent: 72,
                    majorPlains: ["Brahmaputra Plain"],
                    crops: ["Tea", "Rice", "Jute"],
                    population: 31000000,
                    irrigatedPercent: 25
                },
                {
                    state: "Gujarat",
                    code: "GJ",
                    plainArea: 75000,
                    plainPercent: 38,
                    majorPlains: ["Gujarat Plains", "Kathiawar Peninsula"],
                    crops: ["Cotton", "Groundnut", "Tobacco", "Wheat"],
                    population: 60000000,
                    irrigatedPercent: 45
                },
                {
                    state: "Tamil Nadu",
                    code: "TN",
                    plainArea: 25000,
                    plainPercent: 19,
                    majorPlains: ["Coromandel Coast", "Kaveri Delta"],
                    crops: ["Rice", "Sugarcane", "Coconut", "Groundnut"],
                    population: 72000000,
                    irrigatedPercent: 55
                },
                {
                    state: "Andhra Pradesh",
                    code: "AP",
                    plainArea: 35000,
                    plainPercent: 22,
                    majorPlains: ["Krishna-Godavari Delta", "Andhra Coastal Plain"],
                    crops: ["Rice", "Cotton", "Tobacco", "Chillies"],
                    population: 50000000,
                    irrigatedPercent: 48
                },
                {
                    state: "Kerala",
                    code: "KL",
                    plainArea: 8000,
                    plainPercent: 21,
                    majorPlains: ["Malabar Coast"],
                    crops: ["Rice", "Coconut", "Spices", "Rubber"],
                    population: 33000000,
                    irrigatedPercent: 18
                },
                {
                    state: "Odisha",
                    code: "OR",
                    plainArea: 30000,
                    plainPercent: 19,
                    majorPlains: ["Mahanadi Delta", "Utkal Plain"],
                    crops: ["Rice", "Pulses", "Oilseeds"],
                    population: 42000000,
                    irrigatedPercent: 35
                },
                {
                    state: "Madhya Pradesh",
                    code: "MP",
                    plainArea: 50000,
                    plainPercent: 16,
                    majorPlains: ["Malwa Plateau Plain"],
                    crops: ["Soybean", "Wheat", "Cotton"],
                    population: 73000000,
                    irrigatedPercent: 42
                }
            ],
            
            keyFacts: [
                "Indo-Gangetic Plain is world's largest alluvial plain system",
                "Supports over 800 million people (57% of India's population)",
                "Produces 50%+ of India's total food grains",
                "Contains 40% of India's irrigation infrastructure",
                "Home to Indus Valley Civilization sites",
                "Green Revolution transformed Punjab-Haryana plains",
                "Gangetic plain has religious significance (Ganga, Varanasi)",
                "Groundwater depletion critical in Punjab and Haryana",
                "Brahmaputra plain has world's largest river island (Majuli)",
                "Coastal plains prone to cyclones and storm surges"
            ],
            
            agriculture: {
                mainCrops: ["Rice", "Wheat", "Sugarcane", "Cotton", "Pulses", "Oilseeds", "Tea", "Jute"],
                irrigatedArea: 350000,
                rainfedArea: 350000,
                productionValue: 450000000000,
                grainProduction: 310000000,
                employmentPercent: 42
            },
            
            environmentalChallenges: [
                "Groundwater over-extraction",
                "Soil salinity and waterlogging",
                "River pollution (Ganga, Yamuna)",
                "Loss of wetlands",
                "Urban encroachment on agricultural land",
                "Stubble burning causing air pollution",
                "Arsenic contamination in Bengal delta",
                "Flooding in eastern plains"
            ],
            
            historicalTimeline: [
                { year: "7000 BCE", event: "Mehrgarh settlement - early agriculture" },
                { year: "2600 BCE", event: "Indus Valley Civilization peak" },
                { year: "1500 BCE", event: "Vedic period settlements on plains" },
                { year: "600 BCE", event: "Mahajanapadas emerge in Gangetic plain" },
                { year: "320 BCE", event: "Mauryan Empire unifies plains" },
                { year: "320 CE", event: "Gupta Empire golden age" },
                { year: "1526 CE", event: "Mughal Empire established" },
                { year: "1857 CE", event: "Indian Rebellion centered in Gangetic plain" },
                { year: "1965 CE", event: "Green Revolution begins" },
                { year: "2000s CE", event: "Groundwater crisis emerges" }
            ]
        },

        "ID": {
            code: "ID",
            name: "Indonesia",
            localName: "Indonesia",
            flag: "🇮🇩",
            flagUrl: "https://flagcdn.com/w80/id.png",
            continent: "Asia",
            region: "Southeast Asia",
            capital: "Jakarta",
            coordinates: { lat: -0.79, lng: 113.92 },
            totalArea: 1904569,
            plainsArea: 500000,
            plainsPercent: 26.2,
            population: 274000000,
            populationOnPlains: 180000000,
            climate: ["Tropical rainforest", "Tropical monsoon"],
            
            plainTypes: {
                coastal: {
                    present: true,
                    area: 300000,
                    percentage: 60,
                    majorPlains: [
                        {
                            name: "Eastern Sumatra Plain",
                            localName: "Dataran Rendah Sumatera Timur",
                            area: 100000,
                            coordinates: { lat: 1.0, lng: 103.0 },
                            elevation: { min: 0, max: 50, unit: "m" },
                            soilType: "Peat, alluvial",
                            crops: ["Oil palm", "Rubber", "Rice"],
                            uniqueFeatures: "Extensive peatlands, palm plantations"
                        },
                        {
                            name: "North Java Coastal Plain",
                            localName: "Pantai Utara Jawa (Pantura)",
                            area: 40000,
                            coordinates: { lat: -6.5, lng: 110.0 },
                            elevation: { min: 0, max: 20, unit: "m" },
                            settlements: ["Jakarta", "Semarang", "Surabaya"],
                            crops: ["Rice", "Sugarcane", "Fish ponds"],
                            uniqueFeatures: "Most densely populated coastal strip"
                        },
                        {
                            name: "Kalimantan Coastal Plains",
                            area: 100000,
                            coordinates: { lat: 0, lng: 116.0 },
                            soilType: "Peat, swamp",
                            uniqueFeatures: "Extensive peat swamps, logging areas"
                        }
                    ]
                },
                alluvial: {
                    present: true,
                    area: 150000,
                    percentage: 30,
                    majorPlains: [
                        {
                            name: "Solo River Plain",
                            area: 30000,
                            coordinates: { lat: -7.5, lng: 110.8 },
                            soilType: "Volcanic alluvium",
                            crops: ["Rice", "Tobacco", "Vegetables"],
                            settlements: ["Solo", "Semarang"]
                        }
                    ]
                },
                lava: {
                    present: true,
                    area: 50000,
                    percentage: 10,
                    majorPlains: [
                        {
                            name: "Java Volcanic Plains",
                            area: 50000,
                            coordinates: { lat: -7.5, lng: 110.0 },
                            soilType: "Volcanic ash, extremely fertile",
                            crops: ["Rice", "Coffee", "Tea", "Vegetables"],
                            uniqueFeatures: "Among world's most fertile volcanic soils"
                        }
                    ]
                }
            },
            
            keyFacts: [
                "Island nation with diverse plain types",
                "Java's volcanic plains among most fertile on Earth",
                "Extensive peatlands in Sumatra and Kalimantan",
                "60% of population lives on Java's plains",
                "Palm oil plantations transforming Sumatran plains"
            ]
        },

        "IR": {
            code: "IR",
            name: "Iran",
            localName: "ایران (Īrān)",
            flag: "🇮🇷",
            flagUrl: "https://flagcdn.com/w80/ir.png",
            continent: "Asia",
            region: "Middle East",
            capital: "Tehran",
            coordinates: { lat: 32.43, lng: 53.69 },
            totalArea: 1648195,
            plainsArea: 350000,
            plainsPercent: 21.2,
            population: 84000000,
            populationOnPlains: 35000000,
            climate: ["Arid", "Semi-arid", "Continental"],
            
            plainTypes: {
                structural: {
                    present: true,
                    area: 200000,
                    percentage: 57.1,
                    majorPlains: [
                        {
                            name: "Central Plateau (Dasht-e Kavir border)",
                            localName: "فلات مرکزی ایران",
                            area: 150000,
                            coordinates: { lat: 34.0, lng: 54.0 },
                            elevation: { min: 800, max: 1500, unit: "m" },
                            soilType: "Desert, saline",
                            uniqueFeatures: "Interior drainage, salt lakes, kavir (salt flats)"
                        }
                    ]
                },
                desert: {
                    present: true,
                    area: 100000,
                    percentage: 28.6,
                    majorPlains: [
                        {
                            name: "Dasht-e Kavir (Great Salt Desert)",
                            localName: "دشت کویر",
                            area: 77000,
                            coordinates: { lat: 34.5, lng: 54.5 },
                            elevation: { min: 600, max: 900, unit: "m" },
                            soilType: "Salt crust, sand",
                            uniqueFeatures: "One of world's largest salt deserts"
                        },
                        {
                            name: "Dasht-e Lut",
                            localName: "دشت لوت",
                            area: 51800,
                            coordinates: { lat: 30.5, lng: 59.0 },
                            elevation: { min: 200, max: 500, unit: "m" },
                            uniqueFeatures: "UNESCO site, hottest surface temperature recorded (70.7°C)"
                        }
                    ]
                },
                alluvial: {
                    present: true,
                    area: 50000,
                    percentage: 14.3,
                    majorPlains: [
                        {
                            name: "Khuzestan Plain",
                            localName: "دشت خوزستان",
                            area: 40000,
                            coordinates: { lat: 31.5, lng: 49.0 },
                            rivers: ["Karun", "Dez", "Karkheh"],
                            soilType: "Fertile alluvium",
                            crops: ["Wheat", "Sugarcane", "Rice", "Dates"],
                            settlements: ["Ahvaz", "Abadan", "Khorramshahr"],
                            historicalSignificance: "Ancient Elam, oil fields",
                            uniqueFeatures: "Iran's oil heartland, ancient Susa"
                        }
                    ]
                }
            },
            
            keyFacts: [
                "Central plateau surrounded by mountain ranges",
                "Dasht-e Lut has hottest surface temperature ever recorded",
                "Khuzestan is Iran's most fertile plain and oil region",
                "Ancient Persian irrigation systems (qanats)",
                "Two major salt deserts dominate interior"
            ]
        },

        "IQ": {
            code: "IQ",
            name: "Iraq",
            localName: "العراق (al-ʿIrāq)",
            flag: "🇮🇶",
            flagUrl: "https://flagcdn.com/w80/iq.png",
            continent: "Asia",
            region: "Middle East",
            capital: "Baghdad",
            coordinates: { lat: 33.22, lng: 43.68 },
            totalArea: 438317,
            plainsArea: 200000,
            plainsPercent: 45.6,
            population: 41000000,
            populationOnPlains: 35000000,
            climate: ["Arid", "Semi-arid"],
            
            plainTypes: {
                alluvial: {
                    present: true,
                    area: 160000,
                    percentage: 80,
                    majorPlains: [
                        {
                            name: "Mesopotamian Plain",
                            localName: "سهل ما بین النهرين",
                            area: 160000,
                            coordinates: { lat: 32.0, lng: 45.0 },
                            elevation: { min: 0, max: 100, unit: "m" },
                            rivers: ["Tigris", "Euphrates"],
                            soilType: "Extremely fertile alluvium",
                            crops: ["Wheat", "Barley", "Rice", "Dates"],
                            settlements: ["Baghdad", "Basra", "Nasiriyah", "Najaf", "Karbala"],
                            historicalSignificance: "CRADLE OF CIVILIZATION - Sumer, Babylon, Assyria",
                            environmentalStatus: "Severe - marshes drained, salinization",
                            uniqueFeatures: [
                                "Where writing was invented (~3400 BCE)",
                                "First cities in human history",
                                "Code of Hammurabi origin",
                                "Biblical Garden of Eden location theory",
                                "Mesopotamian Marshes - UNESCO site"
                            ]
                        }
                    ]
                },
                desert: {
                    present: true,
                    area: 40000,
                    percentage: 20,
                    majorPlains: [
                        {
                            name: "Western Desert Plain",
                            area: 40000,
                            coordinates: { lat: 32.0, lng: 41.0 },
                            soilType: "Desert pavement, sand",
                            uniqueFeatures: "Extension of Syrian Desert"
                        }
                    ]
                }
            },
            
            keyFacts: [
                "Mesopotamia = 'Land between rivers' (Tigris & Euphrates)",
                "Birthplace of human civilization",
                "Where agriculture, writing, wheel, and cities originated",
                "Mesopotamian Marshes - third largest wetland in world (historically)",
                "Date palm capital of the world",
                "Ancient Babylon, Ur, Uruk, Nineveh located here"
            ],
            
            historicalTimeline: [
                { year: "10000 BCE", event: "Neolithic revolution - farming begins" },
                { year: "5000 BCE", event: "Irrigation agriculture established" },
                { year: "3500 BCE", event: "Sumer civilization emerges" },
                { year: "3400 BCE", event: "Cuneiform writing invented" },
                { year: "2350 BCE", event: "Akkadian Empire" },
                { year: "1792 BCE", event: "Hammurabi's Code established" },
                { year: "1600 BCE", event: "Babylonian Empire peak" },
                { year: "900 BCE", event: "Assyrian Empire dominates" },
                { year: "539 BCE", event: "Persian conquest" },
                { year: "762 CE", event: "Baghdad founded - Islamic Golden Age" }
            ]
        },

        "JP": {
            code: "JP",
            name: "Japan",
            localName: "日本 (Nihon/Nippon)",
            flag: "🇯🇵",
            flagUrl: "https://flagcdn.com/w80/jp.png",
            continent: "Asia",
            region: "East Asia",
            capital: "Tokyo",
            coordinates: { lat: 36.20, lng: 138.25 },
            totalArea: 377975,
            plainsArea: 50000,
            plainsPercent: 13.2,
            population: 125000000,
            populationOnPlains: 100000000,
            climate: ["Humid subtropical", "Humid continental"],
            
            plainTypes: {
                alluvial: {
                    present: true,
                    area: 40000,
                    percentage: 80,
                    majorPlains: [
                        {
                            name: "Kanto Plain",
                            localName: "関東平野",
                            area: 17000,
                            coordinates: { lat: 35.7, lng: 139.5 },
                            elevation: { min: 0, max: 200, unit: "m" },
                            rivers: ["Tone", "Tama", "Ara"],
                            soilType: "Volcanic ash (Kanto loam), alluvium",
                            settlements: ["Tokyo", "Yokohama", "Chiba", "Saitama"],
                            uniqueFeatures: "Japan's largest plain, 40 million people",
                            populationDensity: 2400
                        },
                        {
                            name: "Nobi Plain",
                            localName: "濃尾平野",
                            area: 1800,
                            coordinates: { lat: 35.1, lng: 136.9 },
                            settlements: ["Nagoya"],
                            uniqueFeatures: "Third largest, industrial center"
                        },
                        {
                            name: "Osaka Plain",
                            localName: "大阪平野",
                            area: 1600,
                            coordinates: { lat: 34.7, lng: 135.5 },
                            settlements: ["Osaka", "Kobe"],
                            uniqueFeatures: "Second largest, historical commercial center"
                        },
                        {
                            name: "Ishikari Plain",
                            localName: "石狩平野",
                            area: 4000,
                            coordinates: { lat: 43.0, lng: 141.3 },
                            soilType: "Volcanic, peat",
                            crops: ["Rice", "Vegetables"],
                            settlements: ["Sapporo"]
                        }
                    ]
                },
                coastal: {
                    present: true,
                    area: 10000,
                    percentage: 20,
                    majorPlains: [
                        {
                            name: "Various coastal strips",
                            uniqueFeatures: "Narrow coastal plains throughout islands"
                        }
                    ]
                }
            },
            
            keyFacts: [
                "Only 13% of Japan is plains but 80% of population lives there",
                "Kanto Plain is most densely populated plain globally",
                "Mountains cover 73% of Japan, concentrating population",
                "Rice paddies intensive on limited plain areas",
                "Major cities built on small coastal plains"
            ]
        },

        "JO": {
            code: "JO",
            name: "Jordan",
            localName: "الأردن (al-ʾUrdun)",
            flag: "🇯🇴",
            flagUrl: "https://flagcdn.com/w80/jo.png",
            continent: "Asia",
            region: "Middle East",
            capital: "Amman",
            coordinates: { lat: 30.59, lng: 36.24 },
            totalArea: 89342,
            plainsArea: 30000,
            plainsPercent: 33.6,
            population: 10300000,
            populationOnPlains: 3000000,
            climate: ["Arid", "Semi-arid"],
            
            plainTypes: {
                structural: {
                    present: true,
                    area: 20000,
                    percentage: 66.7,
                    majorPlains: [
                        {
                            name: "Jordan Rift Valley (Ghor)",
                            localName: "الغور",
                            area: 10000,
                            coordinates: { lat: 32.0, lng: 35.6 },
                            elevation: { min: -430, max: 0, unit: "m" },
                            rivers: ["Jordan River"],
                            soilType: "Alluvial, fertile",
                            crops: ["Vegetables", "Citrus", "Dates", "Bananas"],
                            settlements: ["Jericho region"],
                            uniqueFeatures: "Contains lowest point on Earth (Dead Sea at -430m)"
                        }
                    ]
                },
                desert: {
                    present: true,
                    area: 10000,
                    percentage: 33.3,
                    majorPlains: [
                        {
                            name: "Eastern Desert Plain",
                            area: 10000,
                            coordinates: { lat: 31.0, lng: 37.0 },
                            soilType: "Desert, basalt",
                            uniqueFeatures: "Part of Syrian-Arabian desert"
                        }
                    ]
                }
            },
            
            keyFacts: [
                "Jordan Rift Valley contains lowest point on Earth",
                "Dead Sea plain is 430m below sea level",
                "Ghor valley is main agricultural region",
                "Ancient trade routes crossed Jordanian plains",
                "Petra located on plateau edge above plains"
            ]
        },

        // Continue with remaining Asian countries...
        "KZ": {
            code: "KZ",
            name: "Kazakhstan",
            localName: "Қazaқstan",
            flag: "🇰🇿",
            flagUrl: "https://flagcdn.com/w80/kz.png",
            continent: "Asia",
            region: "Central Asia",
            capital: "Astana",
            coordinates: { lat: 48.02, lng: 66.92 },
            totalArea: 2724900,
            plainsArea: 1800000,
            plainsPercent: 66.1,
            population: 19000000,
            populationOnPlains: 15000000,
            climate: ["Continental", "Arid", "Semi-arid"],
            
            plainTypes: {
                structural: {
                    present: true,
                    area: 1200000,
                    percentage: 66.7,
                    majorPlains: [
                        {
                            name: "Kazakh Steppe",
                            localName: "Қazaқ далалары",
                            area: 804500,
                            coordinates: { lat: 48.0, lng: 68.0 },
                            elevation: { min: 200, max: 500, unit: "m" },
                            soilType: "Chernozem, chestnut soils",
                            crops: ["Wheat", "Barley", "Cotton"],
                            uniqueFeatures: "World's largest dry steppe region, Virgin Lands Campaign",
                            biodiversity: ["Saiga antelope", "Kazakh horses"]
                        },
                        {
                            name: "Caspian Depression",
                            area: 200000,
                            coordinates: { lat: 46.0, lng: 52.0 },
                            elevation: { min: -132, max: 0, unit: "m" },
                            uniqueFeatures: "Below sea level, oil and gas reserves"
                        }
                    ]
                },
                desert: {
                    present: true,
                    area: 400000,
                    percentage: 22.2,
                    majorPlains: [
                        {
                            name: "Betpak-Dala",
                            area: 75000,
                            uniqueFeatures: "Semi-desert steppe"
                        },
                        {
                            name: "Kyzylkum Desert (partial)",
                            area: 50000,
                            soilType: "Sandy desert"
                        }
                    ]
                },
                alluvial: {
                    present: true,
                    area: 200000,
                    percentage: 11.1,
                    majorPlains: [
                        {
                            name: "Syr Darya Valley",
                            area: 100000,
                            rivers: ["Syr Darya"],
                            crops: ["Cotton", "Rice"]
                        }
                    ]
                }
            },
            
            keyFacts: [
                "Kazakh Steppe is world's largest dry steppe",
                "Soviet Virgin Lands Campaign transformed plains",
                "Major wheat producer from steppe regions",
                "Caspian Depression contains huge oil reserves",
                "Traditional nomadic culture on steppes"
            ]
        },

        "PK": {
            code: "PK",
            name: "Pakistan",
            localName: "پاکستان (Pākistān)",
            flag: "🇵🇰",
            flagUrl: "https://flagcdn.com/w80/pk.png",
            continent: "Asia",
            region: "South Asia",
            capital: "Islamabad",
            coordinates: { lat: 30.38, lng: 69.35 },
            totalArea: 881913,
            plainsArea: 350000,
            plainsPercent: 39.7,
            population: 230000000,
            populationOnPlains: 180000000,
            climate: ["Arid", "Semi-arid", "Subtropical"],
            
            plainTypes: {
                alluvial: {
                    present: true,
                    area: 300000,
                    percentage: 85.7,
                    majorPlains: [
                        {
                            name: "Indus Plain",
                            localName: "سندھ کا میدان",
                            area: 260000,
                            coordinates: { lat: 28.0, lng: 69.0 },
                            elevation: { min: 0, max: 300, unit: "m" },
                            rivers: ["Indus", "Jhelum", "Chenab", "Ravi", "Sutlej", "Beas"],
                            soilType: "Extremely fertile alluvium",
                            crops: ["Wheat", "Rice", "Cotton", "Sugarcane"],
                            settlements: ["Lahore", "Karachi", "Multan", "Faisalabad", "Hyderabad"],
                            historicalSignificance: "Indus Valley Civilization, Mohenjo-daro, Harappa",
                            waterSource: "Indus Basin Irrigation System (largest contiguous)",
                            uniqueFeatures: [
                                "World's largest contiguous irrigation system",
                                "Indus Valley Civilization origin",
                                "Five rivers system (Punjab = Land of Five Rivers)"
                            ],
                            subRegions: [
                                {
                                    name: "Punjab Plain",
                                    area: 130000,
                                    rivers: ["Five rivers"],
                                    crops: ["Wheat", "Rice", "Cotton"]
                                },
                                {
                                    name: "Sindh Plain",
                                    area: 130000,
                                    rivers: ["Lower Indus"],
                                    crops: ["Rice", "Cotton", "Sugarcane"],
                                    uniqueFeatures: "Indus Delta, ancient Mohenjo-daro"
                                }
                            ]
                        }
                    ]
                },
                desert: {
                    present: true,
                    area: 50000,
                    percentage: 14.3,
                    majorPlains: [
                        {
                            name: "Thar Desert (Cholistan)",
                            localName: "تھر صحرا",
                            area: 26000,
                            coordinates: { lat: 26.0, lng: 71.0 },
                            soilType: "Sandy desert",
                            uniqueFeatures: "Extension of Indian Thar Desert"
                        }
                    ]
                }
            },
            
            keyFacts: [
                "Indus Plain supports 78% of Pakistan's population",
                "World's largest contiguous irrigation system",
                "Birthplace of Indus Valley Civilization",
                "Punjab means 'Land of Five Rivers'",
                "Cotton and wheat major exports from plains",
                "Water disputes with India over Indus waters"
            ]
        },

        // EUROPE (50 countries)
        "RU": {
            code: "RU",
            name: "Russia",
            localName: "Россия (Rossiya)",
            flag: "🇷🇺",
            flagUrl: "https://flagcdn.com/w80/ru.png",
            continent: "Europe/Asia",
            region: "Eastern Europe/Northern Asia",
            capital: "Moscow",
            coordinates: { lat: 61.52, lng: 105.32 },
            totalArea: 17098242,
            plainsArea: 5000000,
            plainsPercent: 29.2,
            population: 144000000,
            populationOnPlains: 120000000,
            climate: ["Subarctic", "Continental", "Semi-arid"],
            
            plainTypes: {
                structural: {
                    present: true,
                    area: 3000000,
                    percentage: 60,
                    majorPlains: [
                        {
                            name: "West Siberian Plain",
                            localName: "Западно-Сибирская равнина",
                            area: 2745000,
                            coordinates: { lat: 62.0, lng: 73.0 },
                            elevation: { min: 50, max: 200, unit: "m" },
                            rivers: ["Ob", "Irtysh", "Yenisei (border)"],
                            soilType: "Permafrost, peat, tundra",
                            uniqueFeatures: [
                                "WORLD'S LARGEST PLAIN",
                                "One of world's largest wetland systems",
                                "Major petroleum and gas reserves",
                                "Permafrost covers northern half"
                            ],
                            resources: "Oil, Natural Gas",
                            settlements: ["Tyumen", "Surgut", "Nizhnevartovsk"]
                        },
                        {
                            name: "East European Plain",
                            localName: "Восточно-Европейская равнина",
                            area: 3995000,
                            coordinates: { lat: 55.0, lng: 40.0 },
                            elevation: { min: 0, max: 300, unit: "m" },
                            rivers: ["Volga", "Don", "Dnieper", "Oka"],
                            soilType: "Chernozem, podzol",
                            crops: ["Wheat", "Rye", "Sunflower", "Sugar beet"],
                            settlements: ["Moscow", "St. Petersburg", "Nizhny Novgorod", "Kazan"],
                            historicalSignificance: "Core of Russian civilization",
                            uniqueFeatures: "Second largest plain on Earth"
                        }
                    ]
                },
                glacial: {
                    present: true,
                    area: 1500000,
                    percentage: 30,
                    majorPlains: [
                        {
                            name: "Valdai Hills region",
                            area: 100000,
                            uniqueFeatures: "Glacially shaped, lake district"
                        }
                    ]
                },
                alluvial: {
                    present: true,
                    area: 500000,
                    percentage: 10,
                    majorPlains: [
                        {
                            name: "Volga Delta Plain",
                            area: 28000,
                            coordinates: { lat: 46.0, lng: 48.5 },
                            uniqueFeatures: "Caspian Sea delta, sturgeon habitat"
                        }
                    ]
                }
            },
            
            keyFacts: [
                "West Siberian Plain is WORLD'S LARGEST PLAIN (2.7M km²)",
                "East European Plain is second largest",
                "Russian plains contain vast oil and gas reserves",
                "Chernozem (black soil) belt is highly fertile",
                "Volga River drains largest European watershed",
                "Permafrost covers much of northern plains"
            ]
        },

        "DE": {
            code: "DE",
            name: "Germany",
            localName: "Deutschland",
            flag: "🇩🇪",
            flagUrl: "https://flagcdn.com/w80/de.png",
            continent: "Europe",
            region: "Western Europe",
            capital: "Berlin",
            coordinates: { lat: 51.17, lng: 10.45 },
            totalArea: 357022,
            plainsArea: 150000,
            plainsPercent: 42.0,
            population: 83200000,
            populationOnPlains: 55000000,
            climate: ["Oceanic", "Continental"],
            
            plainTypes: {
                glacial: {
                    present: true,
                    area: 150000,
                    percentage: 100,
                    majorPlains: [
                        {
                            name: "North German Plain",
                            localName: "Norddeutsches Tiefland",
                            area: 150000,
                            coordinates: { lat: 53.0, lng: 11.0 },
                            elevation: { min: 0, max: 200, unit: "m" },
                            rivers: ["Elbe", "Weser", "Oder", "Rhine (delta)"],
                            soilType: "Glacial deposits, sandy, peat",
                            crops: ["Wheat", "Sugar beet", "Potatoes", "Rapeseed"],
                            settlements: ["Berlin", "Hamburg", "Bremen", "Hannover"],
                            historicalSignificance: "Route of historic invasions",
                            uniqueFeatures: [
                                "Part of larger North European Plain",
                                "Glacially formed during ice ages",
                                "Major agricultural region",
                                "Numerous lakes from glacial kettles"
                            ]
                        }
                    ]
                }
            },
            
            keyFacts: [
                "North German Plain covers 42% of Germany",
                "Glacially formed during last ice ages",
                "Part of larger North European Plain system",
                "Major agricultural and industrial region",
                "Berlin sits in center of glacial plain"
            ]
        },

        "FR": {
            code: "FR",
            name: "France",
            localName: "France",
            flag: "🇫🇷",
            flagUrl: "https://flagcdn.com/w80/fr.png",
            continent: "Europe",
            region: "Western Europe",
            capital: "Paris",
            coordinates: { lat: 46.23, lng: 2.21 },
            totalArea: 643801,
            plainsArea: 230000,
            plainsPercent: 35.7,
            population: 67500000,
            populationOnPlains: 45000000,
            climate: ["Oceanic", "Mediterranean", "Continental"],
            
            plainTypes: {
                structural: {
                    present: true,
                    area: 150000,
                    percentage: 65.2,
                    majorPlains: [
                        {
                            name: "Paris Basin",
                            localName: "Bassin parisien",
                            area: 110000,
                            coordinates: { lat: 48.5, lng: 2.5 },
                            elevation: { min: 50, max: 200, unit: "m" },
                            rivers: ["Seine", "Marne", "Oise"],
                            soilType: "Limestone-derived, loess, very fertile",
                            crops: ["Wheat", "Sugar beet", "Barley", "Wine grapes (Champagne)"],
                            settlements: ["Paris", "Orleans", "Reims", "Chartres"],
                            historicalSignificance: "Heart of French nation, Ile-de-France",
                            uniqueFeatures: "France's breadbasket, concentric geology"
                        },
                        {
                            name: "Aquitaine Basin",
                            localName: "Bassin aquitain",
                            area: 60000,
                            coordinates: { lat: 44.5, lng: 0.0 },
                            rivers: ["Garonne", "Dordogne"],
                            crops: ["Wine", "Corn", "Fruits"],
                            settlements: ["Bordeaux", "Toulouse"],
                            uniqueFeatures: "Bordeaux wine region"
                        }
                    ]
                },
                coastal: {
                    present: true,
                    area: 50000,
                    percentage: 21.7,
                    majorPlains: [
                        {
                            name: "Languedoc Plain",
                            area: 30000,
                            coordinates: { lat: 43.5, lng: 3.5 },
                            crops: ["Wine", "Fruits", "Vegetables"],
                            uniqueFeatures: "Mediterranean coast, wine production"
                        }
                    ]
                },
                alluvial: {
                    present: true,
                    area: 30000,
                    percentage: 13.1,
                    majorPlains: [
                        {
                            name: "Rhône Valley Plain",
                            area: 20000,
                            rivers: ["Rhône"],
                            crops: ["Wine", "Fruits"],
                            settlements: ["Lyon", "Avignon"]
                        }
                    ]
                }
            },
            
            keyFacts: [
                "Paris Basin is France's agricultural heartland",
                "Major wine-producing plains (Bordeaux, Champagne, Rhône)",
                "France is EU's largest agricultural producer",
                "Loess deposits make Paris Basin highly fertile",
                "Seine River system drains main plain"
            ]
        },

        "US": {
            code: "US",
            name: "United States",
            localName: "United States of America",
            flag: "🇺🇸",
            flagUrl: "https://flagcdn.com/w80/us.png",
            continent: "North America",
            region: "North America",
            capital: "Washington, D.C.",
            coordinates: { lat: 37.09, lng: -95.71 },
            totalArea: 9833520,
            plainsArea: 2900000,
            plainsPercent: 29.5,
            population: 332000000,
            populationOnPlains: 100000000,
            climate: ["Varies: Tropical to Subarctic"],
            
            plainTypes: {
                structural: {
                    present: true,
                    area: 1500000,
                    percentage: 51.7,
                    majorPlains: [
                        {
                            name: "Great Plains",
                            localName: "Great Plains",
                            area: 1300000,
                            coordinates: { lat: 40.0, lng: -100.0 },
                            elevation: { min: 300, max: 1500, unit: "m" },
                            rivers: ["Missouri", "Platte", "Arkansas", "Red River"],
                            soilType: "Chernozem, prairie soils",
                            crops: ["Wheat", "Corn", "Soybeans", "Sorghum", "Cattle ranching"],
                            settlements: ["Denver", "Kansas City", "Oklahoma City", "Dallas"],
                            states: ["TX", "OK", "KS", "NE", "SD", "ND", "MT", "WY", "CO", "NM"],
                            historicalSignificance: "Native American plains tribes, Dust Bowl, westward expansion",
                            uniqueFeatures: [
                                "America's Breadbasket",
                                "Historic bison range (60 million)",
                                "Tornado Alley",
                                "Ogallala Aquifer (world's largest underground water)"
                            ],
                            biodiversity: ["Bison (restored)", "Prairie dogs", "Pronghorn"]
                        },
                        {
                            name: "Interior Lowlands (Central Lowlands)",
                            area: 200000,
                            coordinates: { lat: 42.0, lng: -90.0 },
                            soilType: "Glacial, prairie",
                            crops: ["Corn", "Soybeans"],
                            states: ["IA", "IL", "IN", "OH"]
                        }
                    ]
                },
                coastal: {
                    present: true,
                    area: 800000,
                    percentage: 27.6,
                    majorPlains: [
                        {
                            name: "Atlantic Coastal Plain",
                            area: 350000,
                            coordinates: { lat: 35.0, lng: -77.0 },
                            elevation: { min: 0, max: 100, unit: "m" },
                            states: ["NJ", "DE", "MD", "VA", "NC", "SC", "GA", "FL"],
                            soilType: "Sandy, marine sediments",
                            crops: ["Cotton", "Peanuts", "Tobacco", "Vegetables"],
                            uniqueFeatures: "Fall Line separates from Piedmont"
                        },
                        {
                            name: "Gulf Coastal Plain",
                            area: 450000,
                            coordinates: { lat: 30.0, lng: -90.0 },
                            states: ["FL", "AL", "MS", "LA", "TX"],
                            rivers: ["Mississippi (delta)"],
                            soilType: "Alluvial, sandy",
                            crops: ["Cotton", "Rice", "Sugarcane"],
                            uniqueFeatures: "Mississippi Delta, oil/gas reserves"
                        }
                    ]
                },
                alluvial: {
                    present: true,
                    area: 400000,
                    percentage: 13.8,
                    majorPlains: [
                        {
                            name: "Mississippi Alluvial Plain",
                            area: 90000,
                            coordinates: { lat: 33.0, lng: -91.0 },
                            rivers: ["Mississippi"],
                            soilType: "Extremely fertile alluvium",
                            crops: ["Cotton", "Soybeans", "Rice"],
                            states: ["AR", "LA", "MS"],
                            uniqueFeatures: "Mississippi Delta, blues music origin"
                        },
                        {
                            name: "Central Valley (California)",
                            area: 47000,
                            coordinates: { lat: 37.0, lng: -120.0 },
                            soilType: "Alluvial, extremely fertile",
                            crops: ["Fruits", "Vegetables", "Nuts", "Dairy"],
                            uniqueFeatures: "Produces 25% of US food, water issues"
                        }
                    ]
                },
                glacial: {
                    present: true,
                    area: 200000,
                    percentage: 6.9,
                    majorPlains: [
                        {
                            name: "Great Lakes Plain",
                            area: 150000,
                            states: ["MN", "WI", "MI", "OH", "IN", "IL"],
                            uniqueFeatures: "Glacially formed, lakes, dairy farming"
                        }
                    ]
                }
            },
            
            regions: [
                {
                    name: "Great Plains Region",
                    states: ["TX", "OK", "KS", "NE", "SD", "ND", "MT", "WY", "CO"],
                    plainTypes: ["structural"],
                    characteristics: "Wheat belt, cattle country, tornado alley"
                },
                {
                    name: "Corn Belt",
                    states: ["IA", "IL", "IN", "OH", "NE"],
                    plainTypes: ["glacial", "structural"],
                    characteristics: "Corn and soybean production"
                },
                {
                    name: "Cotton Belt",
                    states: ["TX", "LA", "MS", "AL", "GA"],
                    plainTypes: ["coastal", "alluvial"],
                    characteristics: "Historic cotton production"
                }
            ],
            
            keyFacts: [
                "Great Plains is one of world's largest plains",
                "America's Breadbasket produces majority of US grain",
                "Historic home of 60 million bison",
                "Dust Bowl (1930s) caused massive ecological disaster",
                "Ogallala Aquifer irrigates much of plains",
                "California Central Valley produces 25% of US food",
                "Mississippi Delta is incredibly fertile but flood-prone"
            ],
            
            historicalTimeline: [
                { year: "10000 BCE", event: "Paleo-Indians hunt bison on plains" },
                { year: "1800s", event: "Native American plains cultures peak" },
                { year: "1862", event: "Homestead Act opens plains to settlers" },
                { year: "1880s", event: "Bison nearly extinct (from 60M to 500)" },
                { year: "1930s", event: "Dust Bowl environmental disaster" },
                { year: "1940s", event: "Irrigation from Ogallala Aquifer begins" },
                { year: "2000s", event: "Aquifer depletion becomes critical" }
            ]
        },

        "BR": {
            code: "BR",
            name: "Brazil",
            localName: "Brasil",
            flag: "🇧🇷",
            flagUrl: "https://flagcdn.com/w80/br.png",
            continent: "South America",
            region: "South America",
            capital: "Brasília",
            coordinates: { lat: -14.24, lng: -51.93 },
            totalArea: 8515767,
            plainsArea: 3500000,
            plainsPercent: 41.1,
            population: 215000000,
            populationOnPlains: 150000000,
            climate: ["Tropical", "Equatorial", "Semi-arid", "Subtropical"],
            
            plainTypes: {
                alluvial: {
                    present: true,
                    area: 2500000,
                    percentage: 71.4,
                    majorPlains: [
                        {
                            name: "Amazon Basin Plains",
                            localName: "Planície Amazônica",
                            area: 2000000,
                            coordinates: { lat: -3.0, lng: -60.0 },
                            elevation: { min: 0, max: 200, unit: "m" },
                            rivers: ["Amazon", "Negro", "Madeira", "Tapajós", "Xingu"],
                            soilType: "Várzea (fertile floodplain), Terra firme",
                            biodiversity: ["10% of world's species", "Jaguar", "Pink dolphin", "Harpy eagle"],
                            settlements: ["Manaus", "Belém", "Santarém"],
                            uniqueFeatures: [
                                "World's largest tropical rainforest basin",
                                "Amazon River - largest by volume",
                                "Lungs of the Earth",
                                "60% of Brazil's territory"
                            ],
                            environmentalStatus: "Critical - deforestation threat",
                            annualFloodArea: 100000
                        },
                        {
                            name: "Pantanal",
                            localName: "Pantanal",
                            area: 150000,
                            coordinates: { lat: -18.0, lng: -57.0 },
                            elevation: { min: 80, max: 150, unit: "m" },
                            rivers: ["Paraguay River"],
                            soilType: "Alluvial, seasonal wetland",
                            biodiversity: ["Jaguar", "Giant otter", "Capybara", "Caiman", "Hyacinth macaw"],
                            uniqueFeatures: [
                                "WORLD'S LARGEST TROPICAL WETLAND",
                                "UNESCO World Heritage Site",
                                "80% floods during wet season",
                                "Highest concentration of wildlife in Americas"
                            ],
                            environmentalStatus: "Threatened by fires and agriculture"
                        }
                    ]
                },
                coastal: {
                    present: true,
                    area: 500000,
                    percentage: 14.3,
                    majorPlains: [
                        {
                            name: "Atlantic Coastal Plain",
                            area: 500000,
                            coordinates: { lat: -15.0, lng: -39.0 },
                            settlements: ["Rio de Janeiro", "Salvador", "Recife"],
                            crops: ["Sugarcane", "Cocoa", "Tropical fruits"],
                            uniqueFeatures: "Narrow strip, Atlantic Forest (endangered)"
                        }
                    ]
                },
                structural: {
                    present: true,
                    area: 500000,
                    percentage: 14.3,
                    majorPlains: [
                        {
                            name: "Southern Plains (Pampas extension)",
                            area: 300000,
                            coordinates: { lat: -30.0, lng: -52.0 },
                            states: ["Rio Grande do Sul"],
                            soilType: "Prairie, chernozem-like",
                            crops: ["Soybeans", "Rice", "Cattle"],
                            uniqueFeatures: "Gaucho culture, temperate grassland"
                        }
                    ]
                }
            },
            
            keyFacts: [
                "Amazon Basin is world's largest river basin",
                "Pantanal is world's largest tropical wetland",
                "Brazil has more freshwater than any country",
                "Amazon provides 20% of world's oxygen",
                "Deforestation threatens plains ecosystems",
                "Major soybean producer from converted plains"
            ]
        },

        "AR": {
            code: "AR",
            name: "Argentina",
            localName: "Argentina",
            flag: "🇦🇷",
            flagUrl: "https://flagcdn.com/w80/ar.png",
            continent: "South America",
            region: "South America",
            capital: "Buenos Aires",
            coordinates: { lat: -38.42, lng: -63.62 },
            totalArea: 2780400,
            plainsArea: 1200000,
            plainsPercent: 43.2,
            population: 46000000,
            populationOnPlains: 35000000,
            climate: ["Temperate", "Semi-arid", "Subtropical"],
            
            plainTypes: {
                structural: {
                    present: true,
                    area: 900000,
                    percentage: 75,
                    majorPlains: [
                        {
                            name: "Pampas",
                            localName: "La Pampa",
                            area: 750000,
                            coordinates: { lat: -35.0, lng: -60.0 },
                            elevation: { min: 0, max: 500, unit: "m" },
                            rivers: ["Paraná", "Río de la Plata", "Salado"],
                            soilType: "Chernozem-like, extremely fertile loess",
                            crops: ["Wheat", "Soybeans", "Corn", "Sunflower", "Cattle"],
                            settlements: ["Buenos Aires", "Rosario", "Córdoba", "Santa Fe"],
                            historicalSignificance: "Gaucho culture, beef industry",
                            uniqueFeatures: [
                                "World's most productive temperate grassland",
                                "Among most fertile soils globally",
                                "45 million cattle",
                                "Major beef and grain exporter"
                            ],
                            subRegions: [
                                {
                                    name: "Humid Pampa",
                                    area: 500000,
                                    characteristics: "Most fertile, agriculture dominant"
                                },
                                {
                                    name: "Dry Pampa",
                                    area: 250000,
                                    characteristics: "Cattle ranching"
                                }
                            ]
                        },
                        {
                            name: "Gran Chaco",
                            area: 250000,
                            coordinates: { lat: -25.0, lng: -60.0 },
                            soilType: "Alluvial, semi-arid",
                            uniqueFeatures: "Hot, forested plain shared with Paraguay"
                        }
                    ]
                },
                alluvial: {
                    present: true,
                    area: 200000,
                    percentage: 16.7,
                    majorPlains: [
                        {
                            name: "Mesopotamia (Entre Ríos)",
                            area: 200000,
                            coordinates: { lat: -32.0, lng: -58.0 },
                            rivers: ["Paraná", "Uruguay"],
                            soilType: "River deposits",
                            crops: ["Rice", "Citrus", "Yerba mate"]
                        }
                    ]
                },
                desert: {
                    present: true,
                    area: 100000,
                    percentage: 8.3,
                    majorPlains: [
                        {
                            name: "Patagonian Steppe",
                            area: 100000,
                            coordinates: { lat: -45.0, lng: -68.0 },
                            soilType: "Semi-desert",
                            uniqueFeatures: "Sheep ranching, wind-swept plains"
                        }
                    ]
                }
            },
            
            keyFacts: [
                "Pampas are among world's most fertile plains",
                "Argentina has 45+ million cattle (nearly 1 per person)",
                "Major beef and soybean exporter",
                "Gaucho culture defines plains heritage",
                "Buenos Aires built on edge of Pampas",
                "Loess soils rival Ukraine's black earth"
            ]
        },

        "AU": {
            code: "AU",
            name: "Australia",
            localName: "Australia",
            flag: "🇦🇺",
            flagUrl: "https://flagcdn.com/w80/au.png",
            continent: "Oceania",
            region: "Oceania",
            capital: "Canberra",
            coordinates: { lat: -25.27, lng: 133.78 },
            totalArea: 7692024,
            plainsArea: 4500000,
            plainsPercent: 58.5,
            population: 26000000,
            populationOnPlains: 20000000,
            climate: ["Arid", "Semi-arid", "Tropical", "Temperate"],
            
            plainTypes: {
                structural: {
                    present: true,
                    area: 2500000,
                    percentage: 55.6,
                    majorPlains: [
                        {
                            name: "Great Artesian Basin Plains",
                            area: 1700000,
                            coordinates: { lat: -25.0, lng: 142.0 },
                            elevation: { min: 0, max: 500, unit: "m" },
                            soilType: "Desert, red earth",
                            uniqueFeatures: [
                                "World's largest artesian basin",
                                "Underground water supports outback",
                                "Cattle stations larger than countries"
                            ],
                            states: ["QLD", "NSW", "SA", "NT"]
                        }
                    ]
                },
                karst: {
                    present: true,
                    area: 250000,
                    percentage: 5.6,
                    majorPlains: [
                        {
                            name: "Nullarbor Plain",
                            localName: "Nullarbor",
                            area: 200000,
                            coordinates: { lat: -31.5, lng: 128.0 },
                            elevation: { min: 0, max: 100, unit: "m" },
                            soilType: "Limestone karst",
                            uniqueFeatures: [
                                "World's largest karst plain",
                                "No trees ('Nullarbor' = no trees in Latin)",
                                "World's longest straight railway (478 km)",
                                "Extensive cave systems",
                                "Australian Bight cliffs"
                            ],
                            biodiversity: ["Southern right whales (offshore)"]
                        }
                    ]
                },
                alluvial: {
                    present: true,
                    area: 500000,
                    percentage: 11.1,
                    majorPlains: [
                        {
                            name: "Murray-Darling Basin",
                            area: 500000,
                            coordinates: { lat: -34.0, lng: 145.0 },
                            rivers: ["Murray", "Darling", "Murrumbidgee"],
                            soilType: "Alluvial, semi-arid",
                            crops: ["Wheat", "Cotton", "Rice", "Wine grapes", "Citrus"],
                            settlements: ["Adelaide (edge)", "Mildura"],
                            uniqueFeatures: "Australia's food bowl, water scarcity issues",
                            environmentalStatus: "Critical - over-extraction, drought"
                        }
                    ]
                },
                coastal: {
                    present: true,
                    area: 200000,
                    percentage: 4.4,
                    majorPlains: [
                        {
                            name: "Eastern Coastal Plains",
                            area: 200000,
                            settlements: ["Sydney", "Brisbane", "Melbourne (edge)"],
                            crops: ["Sugarcane", "Tropical fruits"],
                            uniqueFeatures: "Most populated region"
                        }
                    ]
                },
                desert: {
                    present: true,
                    area: 1050000,
                    percentage: 23.3,
                    majorPlains: [
                        {
                            name: "Gibson Desert",
                            area: 156000,
                            uniqueFeatures: "Red sand dunes"
                        },
                        {
                            name: "Great Victoria Desert",
                            area: 424400,
                            coordinates: { lat: -29.0, lng: 129.0 },
                            uniqueFeatures: "Australia's largest desert"
                        },
                        {
                            name: "Simpson Desert",
                            area: 176500,
                            uniqueFeatures: "Parallel sand dunes"
                        }
                    ]
                }
            },
            
            keyFacts: [
                "Nullarbor is world's largest karst plain",
                "Great Artesian Basin is largest underground water source",
                "Most of Australia is arid plain",
                "Murray-Darling Basin produces 40% of food",
                "Cattle stations larger than some countries",
                "Water scarcity major challenge"
            ]
        },

        "EG": {
            code: "EG",
            name: "Egypt",
            localName: "مصر (Miṣr)",
            flag: "🇪🇬",
            flagUrl: "https://flagcdn.com/w80/eg.png",
            continent: "Africa",
            region: "North Africa",
            capital: "Cairo",
            coordinates: { lat: 26.82, lng: 30.80 },
            totalArea: 1002450,
            plainsArea: 850000,
            plainsPercent: 84.8,
            population: 104000000,
            populationOnPlains: 100000000,
            climate: ["Arid", "Desert"],
            
            plainTypes: {
                desert: {
                    present: true,
                    area: 800000,
                    percentage: 94.1,
                    majorPlains: [
                        {
                            name: "Western Desert (Libyan Desert)",
                            localName: "الصحراء الغربية",
                            area: 680000,
                            coordinates: { lat: 26.0, lng: 27.0 },
                            elevation: { min: -133, max: 500, unit: "m" },
                            soilType: "Sandy, rocky desert",
                            uniqueFeatures: [
                                "Part of Sahara Desert",
                                "Qattara Depression (lowest point in Africa at -133m)",
                                "Siwa Oasis"
                            ]
                        },
                        {
                            name: "Eastern Desert (Arabian Desert)",
                            area: 220000,
                            coordinates: { lat: 26.0, lng: 33.0 },
                            uniqueFeatures: "Mountains near Red Sea coast"
                        }
                    ]
                },
                deltaic: {
                    present: true,
                    area: 25000,
                    percentage: 2.9,
                    majorPlains: [
                        {
                            name: "Nile Delta",
                            localName: "دلتا النيل",
                            area: 25000,
                            coordinates: { lat: 31.0, lng: 31.0 },
                            elevation: { min: 0, max: 20, unit: "m" },
                            rivers: ["Nile"],
                            soilType: "Extremely fertile alluvium",
                            crops: ["Cotton", "Rice", "Wheat", "Vegetables", "Fruits"],
                            settlements: ["Alexandria", "Tanta", "Mansoura"],
                            historicalSignificance: "Ancient Egyptian civilization, Rosetta Stone",
                            uniqueFeatures: [
                                "One of world's oldest agricultural regions",
                                "99% of Egyptians live on 5% of land (Nile)",
                                "Ancient pharaonic agriculture",
                                "Threatened by sea-level rise"
                            ],
                            environmentalStatus: "Critical - subsidence, sea level rise"
                        }
                    ]
                },
                alluvial: {
                    present: true,
                    area: 25000,
                    percentage: 2.9,
                    majorPlains: [
                        {
                            name: "Nile Valley Plain",
                            localName: "وادي النيل",
                            area: 25000,
                            coordinates: { lat: 26.0, lng: 32.5 },
                            rivers: ["Nile"],
                            soilType: "Fertile alluvium",
                            crops: ["Sugarcane", "Cotton", "Wheat", "Vegetables"],
                            settlements: ["Cairo", "Luxor", "Aswan"],
                            historicalSignificance: "Egyptian civilization cradle, pyramids, temples",
                            uniqueFeatures: "Narrow fertile strip, 5-20 km wide"
                        }
                    ]
                }
            },
            
            keyFacts: [
                "99% of Egyptians live on 5% of land (Nile plain)",
                "Nile Delta is one of world's oldest agricultural regions",
                "5000+ years of continuous cultivation",
                "Desert covers 96% of country",
                "Sea level rise threatens 50% of Delta",
                "Ancient pyramids built on edge of Nile floodplain"
            ],
            
            historicalTimeline: [
                { year: "5000 BCE", event: "Agriculture begins in Nile Valley" },
                { year: "3100 BCE", event: "Upper and Lower Egypt unified" },
                { year: "2560 BCE", event: "Great Pyramid of Giza built on plain edge" },
                { year: "30 BCE", event: "Roman conquest of Egypt" },
                { year: "1970 CE", event: "Aswan High Dam changes Nile hydrology" }
            ]
        },

        "NG": {
            code: "NG",
            name: "Nigeria",
            localName: "Nigeria",
            flag: "🇳🇬",
            flagUrl: "https://flagcdn.com/w80/ng.png",
            continent: "Africa",
            region: "West Africa",
            capital: "Abuja",
            coordinates: { lat: 9.08, lng: 8.68 },
            totalArea: 923768,
            plainsArea: 600000,
            plainsPercent: 65.0,
            population: 220000000,
            populationOnPlains: 180000000,
            climate: ["Tropical", "Semi-arid", "Equatorial"],
            
            plainTypes: {
                alluvial: {
                    present: true,
                    area: 300000,
                    percentage: 50,
                    majorPlains: [
                        {
                            name: "Niger Delta Plain",
                            localName: "Niger Delta",
                            area: 70000,
                            coordinates: { lat: 5.0, lng: 6.0 },
                            rivers: ["Niger", "Benue"],
                            soilType: "Deltaic alluvium, mangrove",
                            settlements: ["Port Harcourt", "Warri"],
                            uniqueFeatures: [
                                "Africa's largest delta",
                                "Major oil and gas reserves",
                                "Mangrove forests",
                                "Environmental pollution issues"
                            ],
                            resources: "Petroleum, natural gas"
                        },
                        {
                            name: "Niger-Benue Trough",
                            area: 150000,
                            coordinates: { lat: 9.0, lng: 8.0 },
                            rivers: ["Niger", "Benue"],
                            crops: ["Rice", "Sugarcane", "Vegetables"],
                            settlements: ["Lokoja", "Makurdi"]
                        }
                    ]
                },
                structural: {
                    present: true,
                    area: 200000,
                    percentage: 33.3,
                    majorPlains: [
                        {
                            name: "Hausa Plains (Northern Plains)",
                            area: 200000,
                            coordinates: { lat: 12.0, lng: 8.0 },
                            soilType: "Savanna soils",
                            crops: ["Millet", "Sorghum", "Groundnuts", "Cotton"],
                            settlements: ["Kano", "Kaduna", "Sokoto"],
                            uniqueFeatures: "Sahel transition zone, groundnut pyramids"
                        }
                    ]
                },
                coastal: {
                    present: true,
                    area: 100000,
                    percentage: 16.7,
                    majorPlains: [
                        {
                            name: "Coastal Lowlands",
                            area: 100000,
                            coordinates: { lat: 6.0, lng: 4.0 },
                            settlements: ["Lagos", "Calabar"],
                            uniqueFeatures: "Lagoons, beaches, mangroves"
                        }
                    ]
                }
            },
            
            keyFacts: [
                "Niger Delta is Africa's largest river delta",
                "Major oil producer from delta region",
                "Most populous country in Africa",
                "Northern plains are agricultural heartland",
                "Lagos built on coastal lagoon plain"
            ]
        },

        // Add remaining countries systematically...
        // Due to space, I'll add key representative countries from each continent

        "ZA": {
            code: "ZA",
            name: "South Africa",
            localName: "South Africa / Suid-Afrika",
            flag: "🇿🇦",
            flagUrl: "https://flagcdn.com/w80/za.png",
            continent: "Africa",
            region: "Southern Africa",
            capital: "Pretoria",
            coordinates: { lat: -30.56, lng: 22.94 },
            totalArea: 1221037,
            plainsArea: 400000,
            plainsPercent: 32.8,
            population: 60000000,
            populationOnPlains: 25000000,
            climate: ["Semi-arid", "Mediterranean", "Subtropical"],
            
            plainTypes: {
                structural: {
                    present: true,
                    area: 250000,
                    percentage: 62.5,
                    majorPlains: [
                        {
                            name: "Highveld",
                            localName: "Hoëveld",
                            area: 150000,
                            coordinates: { lat: -26.0, lng: 28.0 },
                            elevation: { min: 1200, max: 1800, unit: "m" },
                            soilType: "Red-yellow loam",
                            crops: ["Corn (maize)", "Wheat", "Sunflower"],
                            settlements: ["Johannesburg", "Pretoria"],
                            uniqueFeatures: "Gold and diamond mining region"
                        },
                        {
                            name: "Bushveld",
                            area: 100000,
                            coordinates: { lat: -24.0, lng: 29.0 },
                            uniqueFeatures: "Savanna, wildlife reserves, platinum"
                        }
                    ]
                },
                coastal: {
                    present: true,
                    area: 100000,
                    percentage: 25,
                    majorPlains: [
                        {
                            name: "KwaZulu-Natal Coast",
                            area: 50000,
                            settlements: ["Durban"],
                            crops: ["Sugarcane", "Tropical fruits"]
                        }
                    ]
                },
                desert: {
                    present: true,
                    area: 50000,
                    percentage: 12.5,
                    majorPlains: [
                        {
                            name: "Kalahari Plains (partial)",
                            area: 50000,
                            coordinates: { lat: -27.0, lng: 21.0 },
                            uniqueFeatures: "Semi-arid savanna, extends to Botswana"
                        }
                    ]
                }
            },
            
            keyFacts: [
                "Highveld is major agricultural and mining region",
                "Johannesburg built on gold-bearing plains",
                "World's largest platinum reserves under Bushveld",
                "Corn belt on Highveld",
                "Diverse climate zones across plains"
            ]
        },

        "TZ": {
            code: "TZ",
            name: "Tanzania",
            localName: "Tanzania",
            flag: "🇹🇿",
            flagUrl: "https://flagcdn.com/w80/tz.png",
            continent: "Africa",
            region: "East Africa",
            capital: "Dodoma",
            coordinates: { lat: -6.37, lng: 34.89 },
            totalArea: 947300,
            plainsArea: 350000,
            plainsPercent: 36.9,
            population: 62000000,
            populationOnPlains: 30000000,
            climate: ["Tropical", "Semi-arid"],
            
            plainTypes: {
                structural: {
                    present: true,
                    area: 300000,
                    percentage: 85.7,
                    majorPlains: [
                        {
                            name: "Serengeti Plains",
                            localName: "Serengeti",
                            area: 30000,
                            coordinates: { lat: -2.3, lng: 34.8 },
                            elevation: { min: 900, max: 1800, unit: "m" },
                            soilType: "Volcanic grassland",
                            biodiversity: [
                                "1.5 million wildebeest",
                                "500,000 zebras",
                                "Lions",
                                "Cheetahs",
                                "Elephants"
                            ],
                            uniqueFeatures: [
                                "World's most famous wildlife migration",
                                "UNESCO World Heritage Site",
                                "One of oldest ecosystems on Earth"
                            ],
                            settlements: ["None (national park)"],
                            environmentalStatus: "Protected, well-preserved"
                        },
                        {
                            name: "Central Plateau",
                            area: 250000,
                            coordinates: { lat: -6.0, lng: 35.0 },
                            soilType: "Savanna",
                            uniqueFeatures: "Miombo woodland, seasonal"
                        }
                    ]
                },
                coastal: {
                    present: true,
                    area: 50000,
                    percentage: 14.3,
                    majorPlains: [
                        {
                            name: "Coastal Plain",
                            area: 50000,
                            settlements: ["Dar es Salaam", "Tanga"],
                            crops: ["Sisal", "Coconut", "Cashew"]
                        }
                    ]
                }
            },
            
            keyFacts: [
                "Serengeti hosts world's largest mammal migration",
                "2 million animals migrate annually",
                "Tanzania has 16 national parks",
                "Ngorongoro Crater is world's largest caldera plain",
                "Mount Kilimanjaro rises from plains"
            ]
        }
    },

    // ============================================
    // MAJOR PLAINS COMPLETE DATABASE
    // ============================================
    majorPlains: [
        {
            id: "west-siberian",
            name: "West Siberian Plain",
            localNames: { ru: "Западно-Сибирская равнина" },
            rank: 1,
            area: 2745000,
            countries: ["RU"],
            type: "structural",
            coordinates: { lat: 62.0, lng: 73.0 },
            bounds: { north: 73, south: 51, east: 88, west: 58 },
            elevation: { min: 50, max: 200, unit: "m" },
            majorRivers: ["Ob", "Irtysh", "Yenisei (border)"],
            climate: "Subarctic to continental",
            vegetation: "Tundra, taiga, wetlands",
            population: 15000000,
            resources: ["Oil", "Natural Gas", "Peat"],
            uniqueFacts: [
                "World's largest plain",
                "One of world's largest wetland systems",
                "Permafrost in northern regions",
                "Major petroleum province"
            ],
            geoJSON: null // Would contain polygon coordinates
        },
        {
            id: "great-plains",
            name: "Great Plains",
            localNames: { en: "Great Plains" },
            rank: 2,
            area: 2900000,
            countries: ["US", "CA"],
            type: "structural",
            coordinates: { lat: 40.0, lng: -100.0 },
            bounds: { north: 54, south: 25, east: -95, west: -110 },
            elevation: { min: 300, max: 1500, unit: "m" },
            majorRivers: ["Missouri", "Platte", "Arkansas", "Red River"],
            climate: "Semi-arid continental",
            vegetation: "Prairie grassland",
            population: 50000000,
            resources: ["Wheat", "Corn", "Oil", "Natural Gas"],
            uniqueFacts: [
                "America's Breadbasket",
                "Historic range of 60 million bison",
                "Tornado Alley",
                "Ogallala Aquifer - largest underground water source"
            ]
        },
        {
            id: "indo-gangetic",
            name: "Indo-Gangetic Plain",
            localNames: { 
                hi: "सिंधु-गंगा का मैदान",
                ur: "سندھ گنگا میدان"
            },
            rank: 3,
            area: 700000,
            countries: ["IN", "PK", "BD", "NP"],
            type: "alluvial",
            coordinates: { lat: 26.5, lng: 81.0 },
            bounds: { north: 32, south: 22, east: 92, west: 68 },
            elevation: { min: 0, max: 300, unit: "m" },
            majorRivers: ["Ganges", "Indus", "Brahmaputra", "Yamuna", "Sutlej"],
            climate: "Subtropical monsoon",
            vegetation: "Cultivated, deciduous forest remnants",
            population: 1000000000,
            resources: ["Rice", "Wheat", "Sugarcane", "Cotton"],
            uniqueFacts: [
                "World's most densely populated plain",
                "Supports 1+ billion people",
                "Birthplace of Indus Valley Civilization",
                "Produces food for 1/7 of humanity"
            ]
        },
        {
            id: "north-european",
            name: "North European Plain",
            localNames: {
                de: "Norddeutsches Tiefland",
                pl: "Nizina Środkowoeuropejska",
                ru: "Восточно-Европейская равнина"
            },
            rank: 4,
            area: 2000000,
            countries: ["FR", "BE", "NL", "DE", "PL", "LT", "LV", "EE", "BY", "RU"],
            type: "glacial",
            coordinates: { lat: 52.0, lng: 20.0 },
            elevation: { min: -7, max: 300, unit: "m" },
            majorRivers: ["Rhine", "Elbe", "Oder", "Vistula", "Volga"],
            climate: "Oceanic to continental",
            vegetation: "Mixed forest, agriculture",
            population: 200000000,
            uniqueFacts: [
                "Spans from France to Russia",
                "Glacially formed during ice ages",
                "Route of historic invasions",
                "Contains Netherlands (below sea level)"
            ]
        },
        {
            id: "pampas",
            name: "Pampas",
            localNames: { es: "La Pampa" },
            rank: 5,
            area: 750000,
            countries: ["AR", "UY", "BR"],
            type: "structural",
            coordinates: { lat: -35.0, lng: -60.0 },
            elevation: { min: 0, max: 500, unit: "m" },
            majorRivers: ["Paraná", "Río de la Plata"],
            climate: "Humid subtropical to semi-arid",
            vegetation: "Temperate grassland",
            population: 30000000,
            resources: ["Cattle", "Wheat", "Soybeans", "Corn"],
            uniqueFacts: [
                "Among world's most fertile plains",
                "Gaucho culture origin",
                "45 million cattle in Argentina",
                "Major beef exporter"
            ]
        },
        {
            id: "north-china",
            name: "North China Plain",
            localNames: { zh: "华北平原" },
            rank: 6,
            area: 409500,
            countries: ["CN"],
            type: "alluvial",
            coordinates: { lat: 36.0, lng: 117.0 },
            elevation: { min: 0, max: 50, unit: "m" },
            majorRivers: ["Yellow River (Huang He)", "Hai River"],
            climate: "Continental monsoon",
            vegetation: "Cultivated",
            population: 400000000,
            resources: ["Wheat", "Corn", "Cotton"],
            uniqueFacts: [
                "Cradle of Chinese civilization",
                "Yellow River deposits 1.6B tons sediment/year",
                "Severe groundwater depletion",
                "Densely populated agricultural region"
            ]
        },
        {
            id: "mesopotamian",
            name: "Mesopotamian Plain",
            localNames: { ar: "سهل ما بين النهرين" },
            rank: 7,
            area: 160000,
                      countries: ["IQ", "SY", "KW"],
            type: "alluvial",
            coordinates: { lat: 32.0, lng: 45.0 },
            elevation: { min: 0, max: 100, unit: "m" },
            majorRivers: ["Tigris", "Euphrates"],
            climate: "Arid subtropical",
            vegetation: "Irrigated agriculture, marshes",
            population: 35000000,
            resources: ["Oil", "Dates", "Wheat", "Barley"],
            uniqueFacts: [
                "CRADLE OF CIVILIZATION",
                "Where writing was invented (~3400 BCE)",
                "First cities in human history (Ur, Uruk, Babylon)",
                "Code of Hammurabi origin",
                "Biblical Garden of Eden location theory"
            ],
            historicalSignificance: "Most historically important plain in human history"
        },
        {
            id: "amazon-basin",
            name: "Amazon Basin Plains",
            localNames: { pt: "Planície Amazônica" },
            rank: 8,
            area: 2000000,
            countries: ["BR", "PE", "CO", "BO", "EC", "VE", "GY", "SR", "GF"],
            type: "alluvial",
            coordinates: { lat: -3.0, lng: -60.0 },
            elevation: { min: 0, max: 200, unit: "m" },
            majorRivers: ["Amazon", "Negro", "Madeira", "Tapajós", "Xingu"],
            climate: "Equatorial tropical",
            vegetation: "Tropical rainforest",
            population: 30000000,
            resources: ["Timber", "Biodiversity", "Water"],
            uniqueFacts: [
                "World's largest tropical rainforest basin",
                "Amazon River - largest by volume (20% of world's freshwater)",
                "Contains 10% of world's species",
                "Produces 20% of world's oxygen",
                "60% of Brazil's territory"
            ],
            environmentalStatus: "Critical - deforestation threat"
        },
        {
            id: "pantanal",
            name: "Pantanal",
            localNames: { pt: "Pantanal" },
            rank: 9,
            area: 195000,
            countries: ["BR", "PY", "BO"],
            type: "alluvial",
            coordinates: { lat: -18.0, lng: -57.0 },
            elevation: { min: 80, max: 150, unit: "m" },
            majorRivers: ["Paraguay River"],
            climate: "Tropical wet-dry",
            vegetation: "Wetland, savanna mosaic",
            population: 1500000,
            biodiversity: ["Jaguar", "Giant otter", "Capybara", "Caiman", "Hyacinth macaw"],
            uniqueFacts: [
                "WORLD'S LARGEST TROPICAL WETLAND",
                "UNESCO World Heritage Site",
                "80% floods during wet season",
                "Highest concentration of wildlife in Americas",
                "Over 3,500 plant species"
            ]
        },
        {
            id: "serengeti",
            name: "Serengeti Plains",
            localNames: { sw: "Serengeti" },
            rank: 10,
            area: 30000,
            countries: ["TZ", "KE"],
            type: "structural",
            coordinates: { lat: -2.3, lng: 34.8 },
            elevation: { min: 900, max: 1800, unit: "m" },
            climate: "Tropical savanna",
            vegetation: "Grassland savanna",
            population: 0, // National park
            biodiversity: ["Wildebeest (1.5M)", "Zebra (500K)", "Lion", "Cheetah", "Elephant"],
            uniqueFacts: [
                "World's largest mammal migration",
                "2+ million animals migrate annually",
                "UNESCO World Heritage Site",
                "One of oldest ecosystems on Earth",
                "Ngorongoro Crater nearby"
            ]
        },
        {
            id: "nile-delta",
            name: "Nile Delta & Valley",
            localNames: { ar: "دلتا النيل" },
            rank: 11,
            area: 50000,
            countries: ["EG", "SD"],
            type: "deltaic",
            coordinates: { lat: 30.5, lng: 31.0 },
            elevation: { min: 0, max: 50, unit: "m" },
            majorRivers: ["Nile"],
            climate: "Arid",
            vegetation: "Irrigated agriculture",
            population: 100000000,
            resources: ["Cotton", "Rice", "Wheat", "Sugarcane"],
            uniqueFacts: [
                "99% of Egyptians live on 5% of land",
                "5000+ years of continuous cultivation",
                "Ancient Egyptian civilization cradle",
                "Pyramids built on floodplain edge",
                "Threatened by sea level rise"
            ]
        },
        {
            id: "nullarbor",
            name: "Nullarbor Plain",
            localNames: { en: "Nullarbor" },
            rank: 12,
            area: 200000,
            countries: ["AU"],
            type: "karst",
            coordinates: { lat: -31.5, lng: 128.0 },
            elevation: { min: 0, max: 100, unit: "m" },
            climate: "Arid",
            vegetation: "Sparse shrubland",
            population: 2000,
            uniqueFacts: [
                "World's largest karst plain",
                "'Nullarbor' = 'no trees' in Latin",
                "World's longest straight railway (478 km)",
                "Extensive cave systems",
                "Australian Bight cliffs"
            ]
        },
        {
            id: "kazakh-steppe",
            name: "Kazakh Steppe",
            localNames: { kk: "Қazaқ далалары" },
            rank: 13,
            area: 804500,
            countries: ["KZ", "RU"],
            type: "structural",
            coordinates: { lat: 48.0, lng: 68.0 },
            elevation: { min: 200, max: 500, unit: "m" },
            climate: "Continental semi-arid",
            vegetation: "Grassland steppe",
            population: 10000000,
            resources: ["Wheat", "Livestock", "Oil"],
            uniqueFacts: [
                "World's largest dry steppe",
                "Soviet Virgin Lands Campaign transformed region",
                "Traditional nomadic culture",
                "Major wheat producer"
            ]
        },
        {
            id: "ganges-brahmaputra-delta",
            name: "Ganges-Brahmaputra Delta",
            localNames: { bn: "গঙ্গা-ব্রহ্মপুত্র বদ্বীপ" },
            rank: 14,
            area: 105000,
            countries: ["BD", "IN"],
            type: "deltaic",
            coordinates: { lat: 23.0, lng: 90.0 },
            elevation: { min: 0, max: 10, unit: "m" },
            majorRivers: ["Ganges", "Brahmaputra", "Meghna"],
            climate: "Tropical monsoon",
            vegetation: "Mangrove (Sundarbans), agriculture",
            population: 150000000,
            resources: ["Rice", "Jute", "Fish"],
            uniqueFacts: [
                "World's largest river delta",
                "Most densely populated delta",
                "Sundarbans - largest mangrove forest",
                "Home to Royal Bengal Tiger",
                "Most flood-prone region on Earth"
            ]
        },
        {
            id: "murray-darling",
            name: "Murray-Darling Basin",
            localNames: { en: "Murray-Darling Basin" },
            rank: 15,
            area: 1061000,
            countries: ["AU"],
            type: "alluvial",
            coordinates: { lat: -34.0, lng: 145.0 },
            majorRivers: ["Murray", "Darling", "Murrumbidgee"],
            climate: "Semi-arid",
            vegetation: "Agriculture, eucalyptus woodland",
            population: 2000000,
            resources: ["Wheat", "Cotton", "Rice", "Wine", "Citrus"],
            uniqueFacts: [
                "Australia's food bowl",
                "40% of Australia's agricultural output",
                "Severe water scarcity issues",
                "Over-extraction crisis"
            ]
        }
    ],

    // ============================================
    // REMAINING COUNTRIES DATA (Alphabetically)
    // ============================================
    
    // AFRICA (54 countries)
    "DZ": {
        code: "DZ",
        name: "Algeria",
        localName: "الجزائر (al-Jazā'ir)",
        flag: "🇩🇿",
        flagUrl: "https://flagcdn.com/w80/dz.png",
        continent: "Africa",
        region: "North Africa",
        capital: "Algiers",
        coordinates: { lat: 28.03, lng: 1.66 },
        totalArea: 2381741,
        plainsArea: 1800000,
        plainsPercent: 75.6,
        population: 45000000,
        populationOnPlains: 10000000,
        climate: ["Arid", "Semi-arid", "Mediterranean"],
        
        plainTypes: {
            desert: {
                present: true,
                area: 1700000,
                percentage: 94.4,
                majorPlains: [
                    {
                        name: "Saharan Plains",
                        localName: "الصحراء الكبرى",
                        area: 1700000,
                        coordinates: { lat: 27.0, lng: 3.0 },
                        elevation: { min: 0, max: 500, unit: "m" },
                        soilType: "Sandy, rocky desert (reg, erg)",
                        uniqueFeatures: [
                            "Part of world's largest hot desert",
                            "Grand Erg Oriental and Occidental",
                            "Tassili n'Ajjer rock art (UNESCO)",
                            "Hoggar Mountains rise from plains"
                        ],
                        resources: "Oil, natural gas"
                    }
                ]
            },
            coastal: {
                present: true,
                area: 50000,
                percentage: 2.8,
                majorPlains: [
                    {
                        name: "Tell Coastal Plain",
                        localName: "السهل الساحلي",
                        area: 50000,
                        coordinates: { lat: 36.5, lng: 3.0 },
                        soilType: "Mediterranean, fertile",
                        crops: ["Wheat", "Citrus", "Wine grapes", "Olives"],
                        settlements: ["Algiers", "Oran", "Constantine"],
                        uniqueFeatures: "Where 90% of population lives"
                    }
                ]
            },
            structural: {
                present: true,
                area: 50000,
                percentage: 2.8,
                majorPlains: [
                    {
                        name: "High Plateaux (Hauts Plateaux)",
                        area: 50000,
                        coordinates: { lat: 34.0, lng: 2.0 },
                        elevation: { min: 900, max: 1300, unit: "m" },
                        uniqueFeatures: "Steppe region, sheep grazing"
                    }
                ]
            }
        },
        
        keyFacts: [
            "Largest country in Africa",
            "80% is Sahara Desert",
            "90% of population lives on coastal plain",
            "Major oil and gas producer",
            "Ancient Roman agricultural plains"
        ]
    },

    "AO": {
        code: "AO",
        name: "Angola",
        localName: "Angola",
        flag: "🇦🇴",
        flagUrl: "https://flagcdn.com/w80/ao.png",
        continent: "Africa",
        region: "Southern Africa",
        capital: "Luanda",
        coordinates: { lat: -11.20, lng: 17.87 },
        totalArea: 1246700,
        plainsArea: 400000,
        plainsPercent: 32.1,
        population: 33000000,
        populationOnPlains: 15000000,
        climate: ["Tropical", "Semi-arid"],
        
        plainTypes: {
            coastal: {
                present: true,
                area: 200000,
                percentage: 50,
                majorPlains: [
                    {
                        name: "Atlantic Coastal Plain",
                        area: 200000,
                        coordinates: { lat: -10.0, lng: 13.5 },
                        settlements: ["Luanda", "Lobito", "Benguela"],
                        resources: "Oil (offshore)",
                        crops: ["Coffee", "Sisal", "Cotton"]
                    }
                ]
            },
            structural: {
                present: true,
                area: 200000,
                percentage: 50,
                majorPlains: [
                    {
                        name: "Southern Plains",
                        area: 200000,
                        coordinates: { lat: -16.0, lng: 17.0 },
                        uniqueFeatures: "Extension of Kalahari, cattle ranching"
                    }
                ]
            }
        },
        
        keyFacts: [
            "Major oil producer",
            "Coastal plain supports most population",
            "Interior plateau drops to coastal plain",
            "Civil war impacted agriculture",
            "Recovering agricultural sector"
        ]
    },

    "BJ": {
        code: "BJ",
        name: "Benin",
        localName: "Bénin",
        flag: "🇧🇯",
        flagUrl: "https://flagcdn.com/w80/bj.png",
        continent: "Africa",
        region: "West Africa",
        capital: "Porto-Novo",
        coordinates: { lat: 9.31, lng: 2.32 },
        totalArea: 114763,
        plainsArea: 80000,
        plainsPercent: 69.7,
        population: 12500000,
        populationOnPlains: 10000000,
        climate: ["Tropical", "Semi-arid"],
        
        plainTypes: {
            coastal: {
                present: true,
                area: 20000,
                percentage: 25,
                majorPlains: [
                    {
                        name: "Coastal Plain",
                        area: 20000,
                        coordinates: { lat: 6.4, lng: 2.3 },
                        settlements: ["Cotonou", "Porto-Novo"],
                        uniqueFeatures: "Lagoons, coconut palms"
                    }
                ]
            },
            structural: {
                present: true,
                area: 60000,
                percentage: 75,
                majorPlains: [
                    {
                        name: "Bight of Benin Plains",
                        area: 60000,
                        coordinates: { lat: 8.0, lng: 2.0 },
                        crops: ["Cotton", "Palm oil", "Cashews"],
                        uniqueFeatures: "Savanna, formerly Dahomey kingdom"
                    }
                ]
            }
        },
        
        keyFacts: [
            "Former Dahomey kingdom",
            "Palm oil major export",
            "Narrow coastal strip",
            "Cotton in northern plains",
            "Pendjari National Park"
        ]
    },

    "BW": {
        code: "BW",
        name: "Botswana",
        localName: "Botswana",
        flag: "🇧🇼",
        flagUrl: "https://flagcdn.com/w80/bw.png",
        continent: "Africa",
        region: "Southern Africa",
        capital: "Gaborone",
        coordinates: { lat: -22.33, lng: 24.68 },
        totalArea: 581730,
        plainsArea: 500000,
        plainsPercent: 85.9,
        population: 2400000,
        populationOnPlains: 2200000,
        climate: ["Semi-arid", "Arid"],
        
        plainTypes: {
            desert: {
                present: true,
                area: 400000,
                percentage: 80,
                majorPlains: [
                    {
                        name: "Kalahari Desert Plains",
                        localName: "Kgalagadi",
                        area: 400000,
                        coordinates: { lat: -23.0, lng: 23.0 },
                        elevation: { min: 900, max: 1200, unit: "m" },
                        soilType: "Sandy, red Kalahari sand",
                        biodiversity: ["Gemsbok", "Springbok", "Meerkats", "Lions"],
                        uniqueFeatures: [
                            "Not true desert - receives some rainfall",
                            "Central Kalahari Game Reserve",
                            "San/Bushmen traditional homeland"
                        ]
                    }
                ]
            },
            alluvial: {
                present: true,
                area: 100000,
                percentage: 20,
                majorPlains: [
                    {
                        name: "Okavango Delta",
                        area: 22000,
                        coordinates: { lat: -19.5, lng: 23.0 },
                        soilType: "Alluvial, seasonal wetland",
                        biodiversity: ["Elephants", "Lions", "Hippos", "Crocodiles", "Birds"],
                        uniqueFeatures: [
                            "World's largest inland delta",
                            "UNESCO World Heritage Site",
                            "River that never reaches the sea",
                            "Premier safari destination"
                        ]
                    },
                    {
                        name: "Makgadikgadi Pans",
                        area: 16000,
                        coordinates: { lat: -20.5, lng: 25.5 },
                        uniqueFeatures: [
                            "Largest salt flats in world",
                            "Ancient lake bed",
                            "Zebra migration"
                        ]
                    }
                ]
            }
        },
        
        keyFacts: [
            "Okavango Delta - world's largest inland delta",
            "Kalahari covers 70% of country",
            "Diamonds major economic driver",
            "One of Africa's most stable countries",
            "San people's ancestral homeland"
        ]
    },

    "BF": {
        code: "BF",
        name: "Burkina Faso",
        localName: "Burkina Faso",
        flag: "🇧🇫",
        flagUrl: "https://flagcdn.com/w80/bf.png",
        continent: "Africa",
        region: "West Africa",
        capital: "Ouagadougou",
        coordinates: { lat: 12.24, lng: -1.56 },
        totalArea: 274200,
        plainsArea: 250000,
        plainsPercent: 91.2,
        population: 21500000,
        populationOnPlains: 20000000,
        climate: ["Tropical", "Semi-arid"],
        
        plainTypes: {
            structural: {
                present: true,
                area: 250000,
                percentage: 100,
                majorPlains: [
                    {
                        name: "Central Plateau",
                        area: 250000,
                        coordinates: { lat: 12.0, lng: -1.0 },
                        elevation: { min: 200, max: 400, unit: "m" },
                        soilType: "Laterite, sandy",
                        crops: ["Millet", "Sorghum", "Cotton", "Groundnuts"],
                        settlements: ["Ouagadougou", "Bobo-Dioulasso"],
                        uniqueFeatures: [
                            "Sahel transition zone",
                            "Severe desertification",
                            "Traditional Mossi kingdoms"
                        ]
                    }
                ]
            }
        },
        
        keyFacts: [
            "Landlocked Sahelian country",
            "Over 90% is plains/plateau",
            "Vulnerable to drought",
            "Cotton major export",
            "Mossi cultural heritage"
        ]
    },

    "BI": {
        code: "BI",
        name: "Burundi",
        localName: "Burundi",
        flag: "🇧🇮",
        flagUrl: "https://flagcdn.com/w80/bi.png",
        continent: "Africa",
        region: "East Africa",
        capital: "Gitega",
        coordinates: { lat: -3.37, lng: 29.92 },
        totalArea: 27834,
        plainsArea: 5000,
        plainsPercent: 18.0,
        population: 12300000,
        populationOnPlains: 2000000,
        climate: ["Tropical highland"],
        
        plainTypes: {
            alluvial: {
                present: true,
                area: 5000,
                percentage: 100,
                majorPlains: [
                    {
                        name: "Imbo Plain",
                        area: 3000,
                        coordinates: { lat: -3.3, lng: 29.3 },
                        elevation: { min: 774, max: 900, unit: "m" },
                        soilType: "Alluvial, fertile",
                        crops: ["Rice", "Cotton", "Palm oil"],
                        settlements: ["Bujumbura"],
                        uniqueFeatures: "Along Lake Tanganyika, rift valley floor"
                    },
                    {
                        name: "Rusizi Plain",
                        area: 2000,
                        coordinates: { lat: -3.0, lng: 29.2 },
                        uniqueFeatures: "Rusizi River floodplain"
                    }
                ]
            }
        },
        
        keyFacts: [
            "Mostly highland country",
            "Only 18% is plains",
            "Densely populated",
            "Lake Tanganyika shore plains",
            "Coffee main export (highlands)"
        ]
    },

    "CV": {
        code: "CV",
        name: "Cape Verde",
        localName: "Cabo Verde",
        flag: "🇨🇻",
        flagUrl: "https://flagcdn.com/w80/cv.png",
        continent: "Africa",
        region: "West Africa",
        capital: "Praia",
        coordinates: { lat: 16.00, lng: -24.01 },
        totalArea: 4033,
        plainsArea: 1500,
        plainsPercent: 37.2,
        population: 560000,
        populationOnPlains: 300000,
        climate: ["Arid", "Semi-arid"],
        
        plainTypes: {
            coastal: {
                present: true,
                area: 1500,
                percentage: 100,
                majorPlains: [
                    {
                        name: "Island Coastal Plains",
                        area: 1500,
                        coordinates: { lat: 15.0, lng: -23.5 },
                        settlements: ["Praia", "Mindelo"],
                        uniqueFeatures: "Volcanic islands with limited plains"
                    }
                ]
            }
        },
        
        keyFacts: [
            "Volcanic archipelago",
            "Limited flat land",
            "Prone to drought",
            "Tourism important",
            "Strategic Atlantic location"
        ]
    },

    "CM": {
        code: "CM",
        name: "Cameroon",
        localName: "Cameroun / Cameroon",
        flag: "🇨🇲",
        flagUrl: "https://flagcdn.com/w80/cm.png",
        continent: "Africa",
        region: "Central Africa",
        capital: "Yaoundé",
        coordinates: { lat: 7.37, lng: 12.35 },
        totalArea: 475442,
        plainsArea: 200000,
        plainsPercent: 42.1,
        population: 27200000,
        populationOnPlains: 15000000,
        climate: ["Tropical", "Semi-arid", "Equatorial"],
        
        plainTypes: {
            coastal: {
                present: true,
                area: 60000,
                percentage: 30,
                majorPlains: [
                    {
                        name: "Coastal Lowlands",
                        area: 60000,
                        coordinates: { lat: 4.0, lng: 9.5 },
                        settlements: ["Douala", "Limbe"],
                        crops: ["Cocoa", "Rubber", "Bananas", "Palm oil"],
                        uniqueFeatures: "Mangroves, Mt. Cameroon nearby"
                    }
                ]
            },
            structural: {
                present: true,
                area: 100000,
                percentage: 50,
                majorPlains: [
                    {
                        name: "Northern Savanna Plains",
                        area: 100000,
                        coordinates: { lat: 10.0, lng: 14.0 },
                        crops: ["Cotton", "Millet", "Sorghum"],
                        settlements: ["Maroua", "Garoua"],
                        biodiversity: ["Elephants", "Lions (Waza NP)"]
                    }
                ]
            },
            alluvial: {
                present: true,
                area: 40000,
                percentage: 20,
                majorPlains: [
                    {
                        name: "Benue Plain",
                        area: 40000,
                        coordinates: { lat: 8.0, lng: 13.0 },
                        rivers: ["Benue River"],
                        uniqueFeatures: "Rice cultivation, flooding seasonal"
                    }
                ]
            }
        },
        
        keyFacts: [
            "Africa in miniature - diverse landscapes",
            "Mt. Cameroon is highest peak in West Africa",
            "Northern plains in Sahel zone",
            "Major cocoa producer",
            "Oil production offshore"
        ]
    },

    "CF": {
        code: "CF",
        name: "Central African Republic",
        localName: "République centrafricaine",
        flag: "🇨🇫",
        flagUrl: "https://flagcdn.com/w80/cf.png",
        continent: "Africa",
        region: "Central Africa",
        capital: "Bangui",
        coordinates: { lat: 6.61, lng: 20.94 },
        totalArea: 622984,
        plainsArea: 500000,
        plainsPercent: 80.3,
        population: 5000000,
        populationOnPlains: 4000000,
        climate: ["Tropical", "Semi-arid"],
        
        plainTypes: {
            structural: {
                present: true,
                area: 500000,
                percentage: 100,
                majorPlains: [
                    {
                        name: "Central African Plateau",
                        area: 500000,
                        coordinates: { lat: 6.5, lng: 20.0 },
                        elevation: { min: 400, max: 800, unit: "m" },
                        soilType: "Laterite, savanna",
                        rivers: ["Ubangi", "Chari"],
                        biodiversity: ["Forest elephants", "Gorillas", "Bongo"],
                        uniqueFeatures: [
                            "Transition between Sahel and Congo Basin",
                            "Dzanga-Sangha rainforest",
                            "Diamond deposits"
                        ]
                    }
                ]
            }
        },
        
        keyFacts: [
            "Landlocked country",
            "Low population density",
            "Diamond and gold resources",
            "Rainforest in south",
            "Savanna plains dominate"
        ]
    },

    "TD": {
        code: "TD",
        name: "Chad",
        localName: "Tchad / تشاد",
        flag: "🇹🇩",
        flagUrl: "https://flagcdn.com/w80/td.png",
        continent: "Africa",
        region: "Central Africa",
        capital: "N'Djamena",
        coordinates: { lat: 15.45, lng: 18.73 },
        totalArea: 1284000,
        plainsArea: 1100000,
        plainsPercent: 85.7,
        population: 17400000,
        populationOnPlains: 15000000,
        climate: ["Arid", "Semi-arid", "Tropical"],
        
        plainTypes: {
            desert: {
                present: true,
                area: 600000,
                percentage: 54.5,
                majorPlains: [
                    {
                        name: "Saharan Plains",
                        area: 600000,
                        coordinates: { lat: 20.0, lng: 18.0 },
                        elevation: { min: 200, max: 500, unit: "m" },
                        uniqueFeatures: [
                            "Tibesti Mountains rise from plains",
                            "Ennedi Plateau rock formations",
                            "Ancient rock art"
                        ]
                    }
                ]
            },
            alluvial: {
                present: true,
                area: 300000,
                percentage: 27.3,
                majorPlains: [
                    {
                        name: "Lake Chad Basin",
                        area: 300000,
                        coordinates: { lat: 13.0, lng: 14.0 },
                        rivers: ["Chari", "Logone"],
                        soilType: "Alluvial, fertile",
                        crops: ["Millet", "Sorghum", "Rice", "Cotton"],
                        settlements: ["N'Djamena", "Moundou"],
                        uniqueFeatures: [
                            "Lake Chad - shrinking dramatically",
                            "Was once Africa's 4th largest lake",
                            "Supports millions of people"
                        ],
                        environmentalStatus: "Critical - lake shrinking 90%"
                    }
                ]
            },
            structural: {
                present: true,
                area: 200000,
                percentage: 18.2,
                majorPlains: [
                    {
                        name: "Sahelian Plains",
                        area: 200000,
                        coordinates: { lat: 12.0, lng: 18.0 },
                        crops: ["Millet", "Groundnuts", "Cattle"],
                        uniqueFeatures: "Transition zone, pastoralism"
                    }
                ]
            }
        },
        
        keyFacts: [
            "Lake Chad has shrunk 90% since 1960s",
            "Three climate zones from north to south",
            "Oil discovered in 2003",
            "Desert expanding southward",
            "One of poorest countries"
        ]
    },

    "KM": {
        code: "KM",
        name: "Comoros",
        localName: "Komori / جزر القمر",
        flag: "🇰🇲",
        flagUrl: "https://flagcdn.com/w80/km.png",
        continent: "Africa",
        region: "East Africa",
        capital: "Moroni",
        coordinates: { lat: -11.88, lng: 43.87 },
        totalArea: 2235,
        plainsArea: 500,
        plainsPercent: 22.4,
        population: 890000,
        populationOnPlains: 400000,
        climate: ["Tropical marine"],
        
        plainTypes: {
            coastal: {
                present: true,
                area: 500,
                percentage: 100,
                majorPlains: [
                    {
                        name: "Coastal Plains",
                        area: 500,
                        coordinates: { lat: -11.7, lng: 43.3 },
                        settlements: ["Moroni"],
                        crops: ["Vanilla", "Cloves", "Ylang-ylang"],
                        uniqueFeatures: "Volcanic islands, limited flat land"
                    }
                ]
            }
        },
        
        keyFacts: [
            "Volcanic archipelago",
            "Very limited plains",
            "Perfume essence exports",
            "Dense population",
            "Mt. Karthala active volcano"
        ]
    },

    "CG": {
        code: "CG",
        name: "Congo (Republic)",
        localName: "Congo-Brazzaville",
        flag: "🇨🇬",
        flagUrl: "https://flagcdn.com/w80/cg.png",
        continent: "Africa",
        region: "Central Africa",
        capital: "Brazzaville",
        coordinates: { lat: -0.23, lng: 15.83 },
        totalArea: 342000,
        plainsArea: 150000,
        plainsPercent: 43.9,
        population: 5700000,
        populationOnPlains: 3000000,
        climate: ["Tropical", "Equatorial"],
        
        plainTypes: {
            coastal: {
                present: true,
                area: 50000,
                percentage: 33.3,
                majorPlains: [
                    {
                        name: "Coastal Plain",
                        area: 50000,
                        coordinates: { lat: -4.5, lng: 11.5 },
                        settlements: ["Pointe-Noire"],
                        resources: "Oil",
                        uniqueFeatures: "Mangroves, offshore oil"
                    }
                ]
            },
            alluvial: {
                present: true,
                area: 100000,
                percentage: 66.7,
                majorPlains: [
                    {
                        name: "Congo Basin Plains",
                        area: 100000,
                        coordinates: { lat: 0, lng: 16.0 },
                        rivers: ["Congo River"],
                        soilType: "Tropical forest soils",
                        biodiversity: ["Gorillas", "Forest elephants", "Chimpanzees"],
                        uniqueFeatures: "Part of Congo rainforest basin"
                    }
                ]
            }
        },
        
        keyFacts: [
            "Congo River is second largest by volume",
            "Major oil producer",
            "Rainforest in north",
            "Brazzaville faces Kinshasa across river",
            "Low population density"
        ]
    },

    "CD": {
        code: "CD",
        name: "DR Congo",
        localName: "République démocratique du Congo",
        flag: "🇨🇩",
        flagUrl: "https://flagcdn.com/w80/cd.png",
        continent: "Africa",
        region: "Central Africa",
        capital: "Kinshasa",
        coordinates: { lat: -4.04, lng: 21.76 },
        totalArea: 2344858,
        plainsArea: 1500000,
        plainsPercent: 64.0,
        population: 96000000,
        populationOnPlains: 70000000,
        climate: ["Tropical", "Equatorial"],
        
        plainTypes: {
            alluvial: {
                present: true,
                area: 1200000,
                percentage: 80,
                majorPlains: [
                    {
                        name: "Congo Basin",
                        localName: "Cuvette Centrale",
                        area: 1000000,
                        coordinates: { lat: 0, lng: 21.0 },
                        elevation: { min: 300, max: 500, unit: "m" },
                        rivers: ["Congo", "Kasai", "Ubangi", "Lualaba"],
                        soilType: "Tropical forest soils, alluvium",
                        biodiversity: [
                            "Bonobo (endemic)",
                            "Okapi (endemic)",
                            "Forest elephants",
                            "Gorillas"
                        ],
                        uniqueFeatures: [
                            "World's second largest rainforest",
                            "Congo River basin",
                            "Immense biodiversity",
                            "Carbon sink importance"
                        ],
                        environmentalStatus: "Threatened by deforestation"
                    }
                ]
            },
            structural: {
                present: true,
                area: 300000,
                percentage: 20,
                majorPlains: [
                    {
                        name: "Katanga Plateau",
                        area: 200000,
                        coordinates: { lat: -10.0, lng: 26.0 },
                        resources: "Copper, cobalt, diamonds",
                        uniqueFeatures: "Mining region, savanna"
                    }
                ]
            }
        },
        
        keyFacts: [
            "Second largest country in Africa",
            "World's second largest rainforest",
            "Congo River second by volume globally",
            "Immense mineral wealth (cobalt, copper)",
            "Home to bonobo and okapi (endemic)"
        ]
    },

    "DJ": {
        code: "DJ",
        name: "Djibouti",
        localName: "Djibouti / جيبوتي",
        flag: "🇩🇯",
        flagUrl: "https://flagcdn.com/w80/dj.png",
        continent: "Africa",
        region: "East Africa",
        capital: "Djibouti",
        coordinates: { lat: 11.83, lng: 42.59 },
        totalArea: 23200,
        plainsArea: 15000,
        plainsPercent: 64.7,
        population: 1000000,
        populationOnPlains: 900000,
        climate: ["Arid", "Semi-arid"],
        
        plainTypes: {
            coastal: {
                present: true,
                area: 10000,
                percentage: 66.7,
                majorPlains: [
                    {
                        name: "Coastal Plain",
                        area: 10000,
                        coordinates: { lat: 11.5, lng: 43.0 },
                        settlements: ["Djibouti City"],
                        uniqueFeatures: [
                            "Strategic location at Bab-el-Mandeb",
                            "Lake Assal - lowest point in Africa (-155m)",
                            "Port access to Ethiopia"
                        ]
                    }
                ]
            },
            desert: {
                present: true,
                area: 5000,
                percentage: 33.3,
                majorPlains: [
                    {
                        name: "Interior Desert Plains",
                        area: 5000,
                        coordinates: { lat: 11.5, lng: 42.5 },
                        uniqueFeatures: "Part of Afar Triangle, volcanic"
                    }
                ]
            }
        },
        
        keyFacts: [
            "Strategic location at Red Sea entrance",
            "Lake Assal lowest point in Africa",
            "Afar Triangle geological feature",
            "Major port for landlocked Ethiopia",
            "Foreign military bases"
        ]
    },

    "GQ": {
        code: "GQ",
        name: "Equatorial Guinea",
        localName: "Guinea Ecuatorial",
        flag: "🇬🇶",
        flagUrl: "https://flagcdn.com/w80/gq.png",
        continent: "Africa",
        region: "Central Africa",
        capital: "Malabo",
        coordinates: { lat: 1.65, lng: 10.27 },
        totalArea: 28051,
        plainsArea: 15000,
        plainsPercent: 53.5,
        population: 1450000,
        populationOnPlains: 800000,
        climate: ["Tropical"],
        
        plainTypes: {
            coastal: {
                present: true,
                area: 15000,
                percentage: 100,
                majorPlains: [
                    {
                        name: "Río Muni Coastal Plain",
                        area: 15000,
                        coordinates: { lat: 1.5, lng: 10.0 },
                        settlements: ["Bata"],
                        resources: "Oil, timber",
                        crops: ["Cocoa", "Coffee"],
                        uniqueFeatures: "Continental portion, rainforest"
                    }
                ]
            }
        },
        
        keyFacts: [
            "Only Spanish-speaking country in Africa",
            "Major oil producer (per capita wealthy)",
            "Bioko Island is volcanic",
            "Mainland (Río Muni) has coastal plain",
            "Rainforest coverage"
        ]
    },

    "ER": {
        code: "ER",
        name: "Eritrea",
        localName: "ኤርትራ / إرتريا",
        flag: "🇪🇷",
        flagUrl: "https://flagcdn.com/w80/er.png",
        continent: "Africa",
        region: "East Africa",
        capital: "Asmara",
        coordinates: { lat: 15.18, lng: 39.78 },
        totalArea: 117600,
        plainsArea: 50000,
        plainsPercent: 42.5,
        population: 3600000,
        populationOnPlains: 1500000,
        climate: ["Arid", "Semi-arid"],
        
        plainTypes: {
            coastal: {
                present: true,
                area: 30000,
                percentage: 60,
                majorPlains: [
                    {
                        name: "Red Sea Coastal Plain",
                        area: 30000,
                        coordinates: { lat: 15.0, lng: 39.5 },
                        settlements: ["Massawa", "Assab"],
                        uniqueFeatures: [
                            "Danakil Depression nearby",
                            "One of hottest places on Earth",
                            "Historic ports"
                        ]
                    }
                ]
            },
            desert: {
                present: true,
                area: 20000,
                percentage: 40,
                majorPlains: [
                    {
                        name: "Western Lowlands",
                        area: 20000,
                        coordinates: { lat: 15.0, lng: 37.0 },
                        uniqueFeatures: "Sahel zone, border with Sudan"
                    }
                ]
            }
        },
        
        keyFacts: [
            "Danakil Depression - one of hottest places",
            "Highland capital (Asmara) at 2,300m",
            "Strategic Red Sea coast",
            "Italian colonial architecture",
            "Isolated nation"
        ]
    },

    "SZ": {
        code: "SZ",
        name: "Eswatini",
        localName: "eSwatini",
        flag: "🇸🇿",
        flagUrl: "https://flagcdn.com/w80/sz.png",
        continent: "Africa",
        region: "Southern Africa",
        capital: "Mbabane",
        coordinates: { lat: -26.52, lng: 31.47 },
        totalArea: 17364,
        plainsArea: 6000,
        plainsPercent: 34.6,
        population: 1170000,
        populationOnPlains: 400000,
        climate: ["Subtropical"],
        
        plainTypes: {
            structural: {
                present: true,
                area: 6000,
                percentage: 100,
                majorPlains: [
                    {
                        name: "Lowveld",
                        area: 6000,
                        coordinates: { lat: -26.5, lng: 31.8 },
                        elevation: { min: 200, max: 400, unit: "m" },
                        crops: ["Sugarcane", "Citrus"],
                        settlements: ["Big Bend", "Mhlume"],
                        uniqueFeatures: "Sugarcane plantations, hot climate"
                    }
                ]
            }
        },
        
        keyFacts: [
            "Small landlocked kingdom",
            "Lowveld is main agricultural region",
            "Sugar major export",
            "Traditional monarchy",
            "Three distinct elevation zones"
        ]
    },

    "ET": {
        code: "ET",
        name: "Ethiopia",
        localName: "ኢትዮጵያ (Ityopp'ya)",
        flag: "🇪🇹",
        flagUrl: "https://flagcdn.com/w80/et.png",
        continent: "Africa",
        region: "East Africa",
        capital: "Addis Ababa",
        coordinates: { lat: 9.15, lng: 40.49 },
        totalArea: 1104300,
        plainsArea: 350000,
        plainsPercent: 31.7,
        population: 120000000,
        populationOnPlains: 30000000,
        climate: ["Tropical highland", "Semi-arid", "Arid"],
        
        plainTypes: {
            desert: {
                present: true,
                area: 150000,
                percentage: 42.9,
                majorPlains: [
                    {
                        name: "Afar Depression (Danakil)",
                        localName: "Afar Triangle",
                        area: 100000,
                        coordinates: { lat: 12.0, lng: 41.0 },
                        elevation: { min: -125, max: 0, unit: "m" },
                        uniqueFeatures: [
                            "One of lowest and hottest places on Earth",
                            "Active volcanic region",
                            "Cradle of humanity (Lucy fossil)",
                            "Salt mining",
                            "Dallol volcanic crater"
                        ]
                    },
                    {
                        name: "Ogaden Desert",
                        area: 50000,
                        coordinates: { lat: 7.0, lng: 45.0 },
                        uniqueFeatures: "Somali region, pastoral nomads"
                    }
                ]
            },
            alluvial: {
                present: true,
                area: 100000,
                percentage: 28.6,
                majorPlains: [
                    {
                        name: "Blue Nile Basin Plains",
                        area: 50000,
                        coordinates: { lat: 11.0, lng: 37.0 },
                        rivers: ["Blue Nile"],
                        uniqueFeatures: "Blue Nile originates from Lake Tana"
                    },
                    {
                        name: "Awash River Valley",
                        area: 30000,
                        coordinates: { lat: 9.0, lng: 40.0 },
                        crops: ["Cotton", "Sugarcane"],
                        uniqueFeatures: "Rift Valley, prehistory sites"
                    }
                ]
            },
            lava: {
                present: true,
                area: 100000,
                percentage: 28.5,
                majorPlains: [
                    {
                        name: "Ethiopian Highlands Volcanic Plains",
                        area: 100000,
                        coordinates: { lat: 9.0, lng: 38.0 },
                        elevation: { min: 1500, max: 2500, unit: "m" },
                        soilType: "Volcanic, very fertile",
                        crops: ["Coffee (origin)", "Teff", "Wheat", "Barley"],
                        uniqueFeatures: "Coffee originated here, 'Roof of Africa'"
                    }
                ]
            }
        },
        
        keyFacts: [
            "Afar Depression - cradle of humanity (Lucy)",
            "Coffee originated in Ethiopia",
            "Danakil is hottest inhabited place",
            "Blue Nile provides 85% of Nile water",
            "Second most populous African nation",
            "Never colonized (except brief Italian occupation)"
        ]
    },

    // Continue with more African countries...

    "GA": {
        code: "GA",
        name: "Gabon",
        localName: "Gabon",
        flag: "🇬🇦",
        flagUrl: "https://flagcdn.com/w80/ga.png",
        continent: "Africa",
        region: "Central Africa",
        capital: "Libreville",
        coordinates: { lat: -0.80, lng: 11.61 },
        totalArea: 267668,
        plainsArea: 100000,
        plainsPercent: 37.4,
        population: 2300000,
        populationOnPlains: 1500000,
        climate: ["Equatorial"],
        
        plainTypes: {
            coastal: {
                present: true,
                area: 50000,
                percentage: 50,
                majorPlains: [
                    {
                        name: "Coastal Plain",
                        area: 50000,
                        coordinates: { lat: -0.5, lng: 10.0 },
                        settlements: ["Libreville", "Port-Gentil"],
                        resources: "Oil",
                        uniqueFeatures: "Mangroves, offshore oil"
                    }
                ]
            },
            alluvial: {
                present: true,
                area: 50000,
                percentage: 50,
                majorPlains: [
                    {
                        name: "Ogooué River Basin",
                        area: 50000,
                        coordinates: { lat: -1.0, lng: 12.0 },
                        rivers: ["Ogooué"],
                        biodiversity: ["Gorillas", "Forest elephants", "Mandrills"],
                        uniqueFeatures: "Dense rainforest, Lopé National Park"
                    }
                ]
            }
        },
        
        keyFacts: [
            "85% rainforest coverage",
            "Major oil producer",
            "Low population density",
            "13 national parks",
            "Rich in biodiversity"
        ]
    },

    "GM": {
        code: "GM",
        name: "Gambia",
        localName: "The Gambia",
        flag: "🇬🇲",
        flagUrl: "https://flagcdn.com/w80/gm.png",
        continent: "Africa",
        region: "West Africa",
        capital: "Banjul",
        coordinates: { lat: 13.44, lng: -15.31 },
        totalArea: 11295,
        plainsArea: 10000,
        plainsPercent: 88.5,
        population: 2500000,
        populationOnPlains: 2400000,
        climate: ["Tropical"],
        
        plainTypes: {
            alluvial: {
                present: true,
                area: 10000,
                percentage: 100,
                majorPlains: [
                    {
                        name: "Gambia River Plain",
                        area: 10000,
                        coordinates: { lat: 13.5, lng: -15.0 },
                        rivers: ["Gambia River"],
                        soilType: "Alluvial, fertile",
                        crops: ["Groundnuts", "Rice", "Millet"],
                        settlements: ["Banjul", "Serekunda"],
                        uniqueFeatures: [
                            "Country surrounds river",
                            "Narrowest country in Africa",
                            "Mangrove swamps",
                            "Historic slave trade route"
                        ]
                    }
                ]
            }
        },
        
        keyFacts: [
            "Smallest country in mainland Africa",
            "Surrounds Gambia River",
            "Only 48 km wide maximum",
            "Groundnuts main export",
            "Tourism important"
        ]
    },

    "GH": {
        code: "GH",
        name: "Ghana",
        localName: "Ghana",
        flag: "🇬🇭",
        flagUrl: "https://flagcdn.com/w80/gh.png",
        continent: "Africa",
        region: "West Africa",
        capital: "Accra",
        coordinates: { lat: 7.95, lng: -1.02 },
        totalArea: 238533,
        plainsArea: 180000,
        plainsPercent: 75.5,
        population: 32800000,
        populationOnPlains: 28000000,
        climate: ["Tropical", "Semi-arid"],
        
        plainTypes: {
            coastal: {
                present: true,
                area: 30000,
                percentage: 16.7,
                majorPlains: [
                    {
                        name: "Coastal Plain",
                        area: 30000,
                        coordinates: { lat: 5.5, lng: -0.2 },
                        settlements: ["Accra", "Tema", "Cape Coast"],
                        crops: ["Coconut", "Vegetables"],
                        uniqueFeatures: "Historic slave castles, ports"
                    }
                ]
            },
            structural: {
                present: true,
                area: 150000,
                percentage: 83.3,
                majorPlains: [
                    {
                        name: "Volta Basin",
                        area: 100000,
                        coordinates: { lat: 8.0, lng: -1.0 },
                        rivers: ["Volta River"],
                        uniqueFeatures: [
                            "Lake Volta - world's largest artificial lake",
                            "Akosombo Dam hydropower"
                        ]
                    },
                    {
                        name: "Northern Savanna Plains",
                        area: 50000,
                        coordinates: { lat: 10.0, lng: -1.0 },
                        crops: ["Millet", "Sorghum", "Yams"],
                        uniqueFeatures: "Sahel zone, traditional kingdoms"
                    }
                ]
            }
        },
        
        keyFacts: [
            "Lake Volta is world's largest artificial lake",
            "Major gold and cocoa producer",
            "First sub-Saharan country independent (1957)",
            "Named after medieval Ghana Empire",
            "Oil discovered 2007"
        ]
    },

    "GN": {
        code: "GN",
        name: "Guinea",
        localName: "Guinée",
        flag: "🇬🇳",
        flagUrl: "https://flagcdn.com/w80/gn.png",
        continent: "Africa",
        region: "West Africa",
        capital: "Conakry",
        coordinates: { lat: 9.95, lng: -9.70 },
        totalArea: 245857,
        plainsArea: 100000,
        plainsPercent: 40.7,
        population: 13500000,
        populationOnPlains: 7000000,
        climate: ["Tropical"],
        
        plainTypes: {
            coastal: {
                present: true,
                area: 40000,
                percentage: 40,
                majorPlains: [
                    {
                        name: "Lower Guinea (Maritime Guinea)",
                        area: 40000,
                        coordinates: { lat: 10.0, lng: -13.5 },
                        settlements: ["Conakry"],
                        crops: ["Rice", "Bananas", "Palm oil"],
                        uniqueFeatures: "Mangroves, rice paddies"
                    }
                ]
            },
            structural: {
                present: true,
                area: 60000,
                percentage: 60,
                majorPlains: [
                    {
                        name: "Upper Guinea Plains",
                        area: 60000,
                        coordinates: { lat: 10.5, lng: -10.0 },
                        rivers: ["Niger (source)", "Senegal", "Gambia"],
                        uniqueFeatures: [
                            "Source of major West African rivers",
                            "'Water tower' of West Africa",
                            "Bauxite reserves"
                        ],
                        resources: "Bauxite (world's largest reserves)"
                    }
                ]
            }
        },
        
        keyFacts: [
            "World's largest bauxite reserves",
            "Source of Niger, Senegal, Gambia rivers",
            "'Water tower of West Africa'",
            "Iron ore deposits",
            "Fouta Djallon highlands"
        ]
    },

    "GW": {
        code: "GW",
        name: "Guinea-Bissau",
        localName: "Guiné-Bissau",
        flag: "🇬🇼",
        flagUrl: "https://flagcdn.com/w80/gw.png",
        continent: "Africa",
        region: "West Africa",
        capital: "Bissau",
        coordinates: { lat: 11.80, lng: -15.18 },
        totalArea: 36125,
        plainsArea: 30000,
        plainsPercent: 83.0,
        population: 2000000,
        populationOnPlains: 1800000,
        climate: ["Tropical"],
        
        plainTypes: {
            coastal: {
                present: true,
                area: 30000,
                percentage: 100,
                majorPlains: [
                    {
                        name: "Coastal Lowlands",
                        area: 30000,
                        coordinates: { lat: 11.8, lng: -15.0 },
                        settlements: ["Bissau"],
                        crops: ["Rice", "Cashews", "Palm oil"],
                        uniqueFeatures: [
                            "Bijagós Archipelago",
                            "Extensive mangroves",
                            "World's largest cashew exporter"
                        ]
                    }
                ]
            }
        },
        
        keyFacts: [
            "Mostly low-lying coastal plain",
            "Largest cashew nut exporter",
            "Bijagós Islands UNESCO Biosphere",
            "Portuguese-speaking",
            "Extensive mangrove forests"
        ]
    },

    "CI": {
        code: "CI",
        name: "Ivory Coast",
        localName: "Côte d'Ivoire",
        flag: "🇨🇮",
        flagUrl: "https://flagcdn.com/w80/ci.png",
        continent: "Africa",
        region: "West Africa",
        capital: "Yamoussoukro",
        coordinates: { lat: 7.54, lng: -5.55 },
        totalArea: 322463,
        plainsArea: 250000,
        plainsPercent: 77.5,
        population: 27500000,
        populationOnPlains: 23000000,
        climate: ["Tropical", "Semi-arid"],
        
        plainTypes: {
            coastal: {
                present: true,
                area: 50000,
                percentage: 20,
                majorPlains: [
                    {
                        name: "Coastal Lagoon Plain",
                        area: 50000,
                        coordinates: { lat: 5.3, lng: -4.0 },
                        settlements: ["Abidjan"],
                        crops: ["Cocoa", "Rubber", "Palm oil"],
                        uniqueFeatures: "Lagoons, cocoa exports through Abidjan"
                    }
                ]
            },
            structural: {
                present: true,
                area: 200000,
                percentage: 80,
                majorPlains: [
                    {
                        name: "Interior Plateaux",
                        area: 200000,
                        coordinates: { lat: 7.5, lng: -5.5 },
                        crops: ["Cocoa", "Coffee", "Cotton"],
                        settlements: ["Yamoussoukro", "Bouaké"],
                        uniqueFeatures: [
                            "World's largest cocoa producer",
                            "Basilica of Our Lady of Peace (Yamoussoukro)"
                        ]
                    }
                ]
            }
        },
        
        keyFacts: [
            "World's largest cocoa producer",
            "Economic powerhouse of West Africa",
            "Yamoussoukro has world's largest church",
            "Abidjan is major port city",
            "Diverse ethnic groups"
        ]
    },

    "KE": {
        code: "KE",
        name: "Kenya",
        localName: "Kenya",
        flag: "🇰🇪",
        flagUrl: "https://flagcdn.com/w80/ke.png",
        continent: "Africa",
        region: "East Africa",
        capital: "Nairobi",
        coordinates: { lat: -0.02, lng: 37.91 },
        totalArea: 580367,
        plainsArea: 400000,
        plainsPercent: 68.9,
        population: 54000000,
        populationOnPlains: 35000000,
        climate: ["Tropical", "Semi-arid", "Arid"],
        
        plainTypes: {
            structural: {
                present: true,
                area: 300000,
                percentage: 75,
                majorPlains: [
                    {
                        name: "Maasai Mara Plains",
                        area: 1510,
                        coordinates: { lat: -1.5, lng: 35.0 },
                        elevation: { min: 1500, max: 2000, unit: "m" },
                        biodiversity: ["Wildebeest", "Zebra", "Lions", "Cheetahs", "Elephants"],
                        uniqueFeatures: [
                            "Part of Serengeti ecosystem",
                            "Great Migration crosses here",
                            "Big Five safari destination"
                        ]
                    },
                    {
                        name: "Rift Valley Plains",
                        area: 50000,
                        coordinates: { lat: -0.5, lng: 36.0 },
                        uniqueFeatures: [
                            "Great Rift Valley floor",
                            "Lake Nakuru, Lake Naivasha",
                            "Flamingo populations"
                        ]
                    },
                    {
                        name: "Northern Plains",
                        area: 200000,
                        coordinates: { lat: 2.0, lng: 38.0 },
                        climate: "Semi-arid to arid",
                        uniqueFeatures: "Lake Turkana region, pastoral nomads"
                    }
                ]
            },
            coastal: {
                present: true,
                area: 50000,
                percentage: 12.5,
                majorPlains: [
                    {
                        name: "Coastal Plain",
                        area: 50000,
                        coordinates: { lat: -4.0, lng: 39.5 },
                        settlements: ["Mombasa", "Malindi"],
                        crops: ["Coconut", "Cashew", "Sisal"],
                        uniqueFeatures: "Swahili culture, historic ports"
                    }
                ]
            },
            alluvial: {
                present: true,
                area: 50000,
                percentage: 12.5,
                majorPlains: [
                    {
                        name: "Tana River Plain",
                        area: 30000,
                        coordinates: { lat: -2.0, lng: 40.0 },
                        rivers: ["Tana River"],
                        crops: ["Rice", "Cotton"],
                        uniqueFeatures: "Irrigation schemes"
                    }
                ]
            }
        },
        
        keyFacts: [
            "Maasai Mara hosts Great Migration",
            "Great Rift Valley runs through country",
            "Safari tourism major industry",
            "Lake Turkana - largest desert lake",
            "Nairobi only capital with national park"
        ]
    },

    "LS": {
        code: "LS",
        name: "Lesotho",
        localName: "Lesotho",
        flag: "🇱🇸",
        flagUrl: "https://flagcdn.com/w80/ls.png",
        continent: "Africa",
        region: "Southern Africa",
        capital: "Maseru",
        coordinates: { lat: -29.61, lng: 28.23 },
        totalArea: 30355,
        plainsArea: 5000,
        plainsPercent: 16.5,
        population: 2150000,
        populationOnPlains: 500000,
        climate: ["Temperate highland"],
        
        plainTypes: {
            structural: {
                present: true,
                area: 5000,
                percentage: 100,
                majorPlains: [
                    {
                        name: "Lowlands (Western Strip)",
                        area: 5000,
                        coordinates: { lat: -29.5, lng: 27.5 },
                        elevation: { min: 1400, max: 1800, unit: "m" },
                        settlements: ["Maseru"],
                        crops: ["Maize", "Sorghum", "Wheat"],
                        uniqueFeatures: "Even 'lowlands' are above 1,400m"
                    }
                ]
            }
        },
        
        keyFacts: [
            "Only country entirely above 1,000m elevation",
            "Highest low point of any country (1,400m)",
            "'Kingdom in the Sky'",
            "Entirely surrounded by South Africa",
            "Water exports to South Africa"
        ]
    },

    "LR": {
        code: "LR",
        name: "Liberia",
        localName: "Liberia",
        flag: "🇱🇷",
        flagUrl: "https://flagcdn.com/w80/lr.png",
        continent: "Africa",
        region: "West Africa",
        capital: "Monrovia",
        coordinates: { lat: 6.43, lng: -9.43 },
        totalArea: 111369,
        plainsArea: 60000,
        plainsPercent: 53.9,
        population: 5200000,
        populationOnPlains: 3500000,
        climate: ["Tropical"],
        
        plainTypes: {
            coastal: {
                present: true,
                area: 60000,
                percentage: 100,
                majorPlains: [
                    {
                        name: "Coastal Plain",
                        area: 60000,
                        coordinates: { lat: 6.3, lng: -10.0 },
                        settlements: ["Monrovia"],
                        crops: ["Rubber", "Rice", "Palm oil"],
                        uniqueFeatures: [
                            "Founded by freed American slaves",
                            "Firestone rubber plantations",
                            "Rich in iron ore"
                        ]
                    }
                ]
            }
        },
        
        keyFacts: [
            "Founded by freed American slaves (1847)",
            "Only African country never colonized by Europeans",
            "Major rubber production",
            "Iron ore exports",
            "Recovering from civil wars"
        ]
    },

    "LY": {
        code: "LY",
        name: "Libya",
        localName: "ليبيا (Lībiyā)",
        flag: "🇱🇾",
        flagUrl: "https://flagcdn.com/w80/ly.png",
        continent: "Africa",
        region: "North Africa",
        capital: "Tripoli",
        coordinates: { lat: 26.34, lng: 17.23 },
        totalArea: 1759540,
        plainsArea: 1600000,
        plainsPercent: 90.9,
        population: 7000000,
        populationOnPlains: 6500000,
        climate: ["Arid", "Mediterranean (coast)"],
        
        plainTypes: {
            desert: {
                present: true,
                area: 1550000,
                percentage: 96.9,
                majorPlains: [
                    {
                        name: "Libyan Desert",
                        localName: "الصحراء الليبية",
                        area: 1550000,
                        coordinates: { lat: 25.0, lng: 20.0 },
                        elevation: { min: 0, max: 500, unit: "m" },
                        uniqueFeatures: [
                            "Part of Sahara Desert",
                            "One of driest places on Earth",
                            "Great Man-Made River project",
                            "Ancient rock art",
                            "Oil reserves"
                        ],
                        resources: "Oil, natural gas"
                    }
                ]
            },
            coastal: {
                present: true,
                area: 50000,
                percentage: 3.1,
                majorPlains: [
                    {
                        name: "Coastal Strip (Jefara Plain)",
                        area: 50000,
                        coordinates: { lat: 32.5, lng: 13.0 },
                        settlements: ["Tripoli", "Benghazi", "Misrata"],
                        crops: ["Dates", "Olives", "Citrus"],
                        uniqueFeatures: "90% of population lives here"
                    }
                ]
            }
        },
        
        keyFacts: [
            "90% is desert",
            "90% of population on coastal strip",
            "Major oil producer",
            "Great Man-Made River - largest irrigation project",
            "Ancient Roman ruins (Leptis Magna)"
        ]
    },

    "MG": {
        code: "MG",
        name: "Madagascar",
        localName: "Madagasikara",
        flag: "🇲🇬",
        flagUrl: "https://flagcdn.com/w80/mg.png",
        continent: "Africa",
        region: "East Africa",
        capital: "Antananarivo",
        coordinates: { lat: -18.87, lng: 47.51 },
        totalArea: 587041,
        plainsArea: 250000,
        plainsPercent: 42.6,
        population: 28900000,
        populationOnPlains: 15000000,
        climate: ["Tropical", "Semi-arid"],
        
        plainTypes: {
            coastal: {
                present: true,
                area: 150000,
                percentage: 60,
                majorPlains: [
                    {
                        name: "Eastern Coastal Plain",
                        area: 80000,
                        coordinates: { lat: -18.0, lng: 49.0 },
                        crops: ["Vanilla", "Coffee", "Cloves", "Lychees"],
                        biodiversity: ["Lemurs", "Chameleons", "Unique flora"],
                        uniqueFeatures: "Rainforest zone, cyclone-prone"
                    },
                    {
                        name: "Western Coastal Plain",
                        area: 70000,
                        coordinates: { lat: -18.0, lng: 44.0 },
                        crops: ["Rice", "Tobacco"],
                        uniqueFeatures: "Drier, baobab trees, Tsingy formations"
                    }
                ]
            },
            alluvial: {
                present: true,
                area: 100000,
                percentage: 40,
                majorPlains: [
                    {
                        name: "River Valley Plains",
                        area: 100000,
                        rivers: ["Betsiboka", "Tsiribihina"],
                        crops: ["Rice"],
                        uniqueFeatures: "Rice paddies, deforestation erosion"
                    }
                ]
            }
        },
        
        keyFacts: [
            "World's 4th largest island",
            "90%+ species found nowhere else",
            "World's largest vanilla producer",
            "Lemurs only found here",
            "Severe deforestation (90% forest lost)"
        ]
    },

    "MW": {
        code: "MW",
        name: "Malawi",
        localName: "Malawi",
        flag: "🇲🇼",
        flagUrl: "https://flagcdn.com/w80/mw.png",
        continent: "Africa",
        region: "East Africa",
        capital: "Lilongwe",
        coordinates: { lat: -13.25, lng: 34.30 },
        totalArea: 118484,
        plainsArea: 40000,
        plainsPercent: 33.8,
        population: 20000000,
        populationOnPlains: 10000000,
        climate: ["Tropical"],
        
        plainTypes: {
            alluvial: {
                present: true,
                area: 40000,
                percentage: 100,
                majorPlains: [
                    {
                        name: "Shire Valley Plain",
                        area: 25000,
                        coordinates: { lat: -15.5, lng: 35.0 },
                        rivers: ["Shire River"],
                        elevation: { min: 37, max: 500, unit: "m" },
                        crops: ["Sugar", "Cotton", "Rice"],
                        settlements: ["Blantyre"],
                        uniqueFeatures: "Lowest point in Malawi, hot climate"
                    },
                    {
                        name: "Lake Malawi Lakeshore Plains",
                        area: 15000,
                        coordinates: { lat: -12.0, lng: 34.5 },
                        uniqueFeatures: [
                            "Lake Malawi - 9th largest lake in world",
                            "Cichlid fish diversity",
                            "UNESCO World Heritage Site"
                        ]
                    }
                ]
            }
        },
        
        keyFacts: [
            "Lake Malawi is 9th largest lake globally",
            "Lake contains 1,000+ fish species",
            "Shire Valley is agricultural heartland",
            "'Warm Heart of Africa'",
            "Tobacco main export"
        ]
    },

    "ML": {
        code: "ML",
        name: "Mali",
        localName: "Mali",
        flag: "🇲🇱",
        flagUrl: "https://flagcdn.com/w80/ml.png",
        continent: "Africa",
        region: "West Africa",
        capital: "Bamako",
        coordinates: { lat: 17.57, lng: -4.00 },
        totalArea: 1240192,
        plainsArea: 1100000,
        plainsPercent: 88.7,
        population: 21400000,
        populationOnPlains: 19000000,
        climate: ["Arid", "Semi-arid", "Tropical"],
        
        plainTypes: {
            desert: {
                present: true,
                area: 800000,
                percentage: 72.7,
                majorPlains: [
                    {
                        name: "Saharan Plains",
                        area: 800000,
                        coordinates: { lat: 20.0, lng: -2.0 },
                        uniqueFeatures: [
                            "Part of Sahara Desert",
                            "Ancient Timbuktu",
                            "Tuareg nomads",
                            "Salt trade routes"
                        ]
                    }
                ]
            },
            alluvial: {
                present: true,
                area: 200000,
                percentage: 18.2,
                majorPlains: [
                    {
                        name: "Niger Inland Delta",
                        localName: "Macina",
                        area: 100000,
                        coordinates: { lat: 14.5, lng: -4.5 },
                        rivers: ["Niger River"],
                        uniqueFeatures: [
                            "World's largest inland delta",
                            "Seasonal flooding",
                            "Rich fisheries",
                            "Rice cultivation"
                        ]
                    },
                    {
                        name: "Niger River Valley",
                        area: 100000,
                        coordinates: { lat: 14.0, lng: -5.0 },
                        settlements: ["Bamako", "Mopti", "Ségou"],
                        crops: ["Rice", "Millet", "Cotton"]
                    }
                ]
            },
            structural: {
                present: true,
                area: 100000,
                percentage: 9.1,
                majorPlains: [
                    {
                        name: "Sahelian Plains",
                        area: 100000,
                        coordinates: { lat: 15.0, lng: -5.0 },
                        crops: ["Millet", "Sorghum", "Groundnuts"],
                        uniqueFeatures: "Transition zone, pastoralism"
                    }
                ]
            }
        },
        
        keyFacts: [
            "Niger Inland Delta is unique ecosystem",
            "Timbuktu was legendary center of learning",
            "65% is desert or semi-desert",
            "Mali Empire was medieval West African power",
            "Gold and cotton exports"
        ]
    },

    "MR": {
        code: "MR",
        name: "Mauritania",
        localName: "موريتانيا (Mūrītāniyā)",
        flag: "🇲🇷",
        flagUrl: "https://flagcdn.com/w80/mr.png",
        continent: "Africa",
        region: "West Africa",
        capital: "Nouakchott",
        coordinates: { lat: 21.01, lng: -10.94 },
        totalArea: 1030700,
        plainsArea: 950000,
        plainsPercent: 92.2,
        population: 4800000,
        populationOnPlains: 4500000,
        climate: ["Arid", "Semi-arid"],
        
        plainTypes: {
            desert: {
                present: true,
                area: 900000,
                percentage: 94.7,
                majorPlains: [
                    {
                        name: "Saharan Plains",
                        area: 900000,
                        coordinates: { lat: 20.0, lng: -10.0 },
                        uniqueFeatures: [
                            "Part of Sahara Desert",
                            "Richat Structure (Eye of Africa)",
                            "Iron ore deposits",
                            "Ancient Trans-Saharan trade routes"
                        ]
                    }
                ]
            },
            alluvial: {
                present: true,
                area: 50000,
                percentage: 5.3,
                majorPlains: [
                    {
                        name: "Senegal River Valley",
                        area: 50000,
                        coordinates: { lat: 16.5, lng: -14.0 },
                        rivers: ["Senegal River"],
                        crops: ["Rice", "Millet", "Dates"],
                        settlements: ["Nouakchott"],
                        uniqueFeatures: "Only agricultural zone, oases"
                    }
                ]
            }
        },
        
        keyFacts: [
            "Over 90% is desert",
            "Richat Structure visible from space",
            "Major iron ore exporter",
            "Trans-Saharan trade history",
            "Nouakchott one of youngest capitals"
        ]
    },

    "MU": {
        code: "MU",
        name: "Mauritius",
        localName: "Maurice",
        flag: "🇲🇺",
        flagUrl: "https://flagcdn.com/w80/mu.png",
        continent: "Africa",
        region: "East Africa",
        capital: "Port Louis",
        coordinates: { lat: -20.35, lng: 57.55 },
        totalArea: 2040,
        plainsArea: 800,
        plainsPercent: 39.2,
        population: 1270000,
        populationOnPlains: 800000,
        climate: ["Tropical"],
        
        plainTypes: {
            coastal: {
                present: true,
                area: 800,
                percentage: 100,
                majorPlains: [
                    {
                        name: "Coastal Plains",
                        area: 800,
                        coordinates: { lat: -20.3, lng: 57.5 },
                        settlements: ["Port Louis"],
                        crops: ["Sugarcane"],
                        uniqueFeatures: [
                            "Volcanic island",
                            "Sugarcane dominated",
                            "Dodo extinct here",
                            "Tourism economy"
                        ]
                    }
                ]
            }
        },
        
        keyFacts: [
            "Volcanic island nation",
            "Dodo bird was native here (extinct 1681)",
            "Sugarcane covers much of lowlands",
            "Major tourism destination",
            "Financial services hub"
        ]
    },

    "MA": {
        code: "MA",
        name: "Morocco",
        localName: "المغرب (al-Maġrib)",
        flag: "🇲🇦",
        flagUrl: "https://flagcdn.com/w80/ma.png",
        continent: "Africa",
        region: "North Africa",
        capital: "Rabat",
        coordinates: { lat: 31.79, lng: -7.09 },
        totalArea: 446550,
        plainsArea: 180000,
        plainsPercent: 40.3,
        population: 37500000,
        populationOnPlains: 25000000,
        climate: ["Mediterranean", "Semi-arid", "Arid"],
        
        plainTypes: {
            coastal: {
                present: true,
                area: 50000,
                percentage: 27.8,
                majorPlains: [
                    {
                        name: "Atlantic Coastal Plain",
                        area: 50000,
                        coordinates: { lat: 33.0, lng: -7.5 },
                        settlements: ["Casablanca", "Rabat", "Tangier"],
                        crops: ["Citrus", "Vegetables", "Grains"],
                        uniqueFeatures: "Most populated region, industrial zone"
                    }
                ]
            },
            structural: {
                present: true,
                area: 130000,
                percentage: 72.2,
                majorPlains: [
                    {
                        name: "Moroccan Meseta",
                        area: 80000,
                        coordinates: { lat: 33.0, lng: -6.5 },
                        elevation: { min: 300, max: 800, unit: "m" },
                        crops: ["Wheat", "Barley", "Olives"],
                        settlements: ["Fes", "Marrakech", "Meknes"],
                        uniqueFeatures: "Imperial cities, agriculture"
                    },
                    {
                        name: "Souss-Massa Plain",
                        area: 30000,
                        coordinates: { lat: 30.0, lng: -9.0 },
                        crops: ["Citrus", "Argan trees"],
                        uniqueFeatures: "Argan oil production, Agadir"
                    },
                    {
                        name: "Pre-Saharan Plains",
                        area: 20000,
                        coordinates: { lat: 30.0, lng: -5.0 },
                        uniqueFeatures: "Oases, date palms, Draa Valley"
                    }
                ]
            }
        },
        
        keyFacts: [
            "Atlas Mountains divide plains regions",
            "Casablanca is largest city",
            "World's largest phosphate reserves",
            "Argan trees unique to Morocco",
            "Imperial cities on interior plains"
        ]
    },

    "MZ": {
        code: "MZ",
        name: "Mozambique",
        localName: "Moçambique",
        flag: "🇲🇿",
        flagUrl: "https://flagcdn.com/w80/mz.png",
        continent: "Africa",
        region: "East Africa",
        capital: "Maputo",
        coordinates: { lat: -18.67, lng: 35.53 },
        totalArea: 801590,
        plainsArea: 500000,
        plainsPercent: 62.4,
        population: 32000000,
        populationOnPlains: 25000000,
        climate: ["Tropical", "Semi-arid"],
        
        plainTypes: {
            coastal: {
                present: true,
                area: 300000,
                percentage: 60,
                majorPlains: [
                    {
                        name: "Mozambique Coastal Plain",
                        area: 300000,
                        coordinates: { lat: -20.0, lng: 35.0 },
                        settlements: ["Maputo", "Beira", "Nampula"],
                        crops: ["Cashews", "Coconut", "Sugarcane", "Cotton"],
                        uniqueFeatures: [
                            "Longest coastline in East Africa (2,500 km)",
                            "Zambezi Delta",
                            "Coral reefs",
                            "Natural gas reserves"
                        ]
                    }
                ]
            },
            alluvial: {
                present: true,
                area: 200000,
                percentage: 40,
                majorPlains: [
                    {
                        name: "Zambezi River Plain",
                        area: 150000,
                        coordinates: { lat: -18.0, lng: 36.0 },
                        rivers: ["Zambezi"],
                        crops: ["Rice", "Sugarcane"],
                        uniqueFeatures: "Zambezi Delta, flooding"
                    },
                    {
                        name: "Limpopo Valley",
                        area: 50000,
                        coordinates: { lat: -24.0, lng: 32.0 },
                        rivers: ["Limpopo"],
                        crops: ["Rice", "Cotton"]
                    }
                ]
            }
        },
        
        keyFacts: [
            "Longest coastline in East Africa",
            "Major natural gas reserves discovered",
            "Zambezi River delta is huge wetland",
            "Cashew nut major export",
            "Recovering from civil war"
        ]
    },

    "NA": {
        code: "NA",
        name: "Namibia",
        localName: "Namibia",
        flag: "🇳🇦",
        flagUrl: "https://flagcdn.com/w80/na.png",
        continent: "Africa",
        region: "Southern Africa",
        capital: "Windhoek",
        coordinates: { lat: -22.96, lng: 18.49 },
        totalArea: 824292,
        plainsArea: 600000,
        plainsPercent: 72.8,
        population: 2550000,
        populationOnPlains: 2000000,
        climate: ["Arid", "Semi-arid"],
        
        plainTypes: {
            desert: {
                present: true,
                area: 500000,
                percentage: 83.3,
                majorPlains: [
                    {
                        name: "Namib Desert",
                        area: 80900,
                        coordinates: { lat: -24.0, lng: 15.0 },
                        elevation: { min: 0, max: 1000, unit: "m" },
                        uniqueFeatures: [
                            "Oldest desert in world (55-80 million years)",
                            "Sossusvlei sand dunes (highest in world)",
                            "Skeleton Coast",
                            "Welwitschia plants (2,000 years old)"
                        ]
                    },
                    {
                        name: "Kalahari Plains",
                        area: 250000,
                        coordinates: { lat: -22.0, lng: 20.0 },
                        uniqueFeatures: "Red sand, San people homeland"
                    }
                ]
            },
            coastal: {
                present: true,
                area: 50000,
                percentage: 8.3,
                majorPlains: [
                    {
                        name: "Skeleton Coast",
                        area: 50000,
                        coordinates: { lat: -19.0, lng: 12.5 },
                        uniqueFeatures: [
                            "Shipwrecks",
                            "Seal colonies",
                            "Desert meeting ocean",
                            "Diamond mining"
                        ]
                    }
                ]
            },
            structural: {
                present: true,
                area: 50000,
                percentage: 8.3,
                majorPlains: [
                    {
                        name: "Central Plateau Plains",
                        area: 50000,
                        coordinates: { lat: -22.0, lng: 17.0 },
                        settlements: ["Windhoek"],
                        crops: ["Cattle ranching"],
                        uniqueFeatures: "Savanna, wildlife"
                    }
                ]
            }
        },
        
        keyFacts: [
            "Namib is oldest desert (55-80 million years)",
            "Sossusvlei has world's highest sand dunes",
            "One of least densely populated countries",
            "Skeleton Coast shipwrecks",
            "Major diamond and uranium producer"
        ]
    },

    "NE": {
        code: "NE",
        name: "Niger",
        localName: "Niger",
        flag: "🇳🇪",
        flagUrl: "https://flagcdn.com/w80/ne.png",
        continent: "Africa",
        region: "West Africa",
        capital: "Niamey",
        coordinates: { lat: 17.61, lng: 8.08 },
        totalArea: 1267000,
        plainsArea: 1200000,
        plainsPercent: 94.7,
        population: 25000000,
        populationOnPlains: 24000000,
        climate: ["Arid", "Semi-arid"],
        
        plainTypes: {
            desert: {
                present: true,
                area: 1000000,
                percentage: 83.3,
                majorPlains: [
                    {
                        name: "Saharan Plains",
                        area: 800000,
                        coordinates: { lat: 20.0, lng: 10.0 },
                        uniqueFeatures: [
                            "Part of Sahara Desert",
                            "Aïr Mountains rise from plains",
                            "Ténéré Desert",
                            "Uranium deposits"
                        ]
                    },
                    {
                        name: "Ténéré Desert",
                        area: 400000,
                        coordinates: { lat: 18.0, lng: 12.0 },
                        uniqueFeatures: "One of most desolate places on Earth"
                    }
                ]
            },
            alluvial: {
                present: true,
                area: 100000,
                percentage: 8.3,
                majorPlains: [
                    {
                        name: "Niger River Valley",
                        area: 100000,
                        coordinates: { lat: 13.5, lng: 2.0 },
                        rivers: ["Niger River"],
                        settlements: ["Niamey"],
                        crops: ["Millet", "Rice", "Cotton"],
                        uniqueFeatures: "Only fertile zone, 'W' National Park"
                    }
                ]
            },
            structural: {
                present: true,
                area: 100000,
                percentage: 8.3,
                majorPlains: [
                    {
                        name: "Sahelian Plains",
                        area: 100000,
                        coordinates: { lat: 14.0, lng: 8.0 },
                        crops: ["Millet", "Sorghum"],
                        uniqueFeatures: "Transition zone, drought vulnerable"
                    }
                ]
            }
        },
        
        keyFacts: [
            "Over 80% is Sahara Desert",
            "One of hottest countries on Earth",
            "Major uranium producer",
            "High population growth rate",
            "Niger River provides lifeline"
        ]
    },

    // EUROPEAN COUNTRIES
    "AL": {
        code: "AL",
        name: "Albania",
        localName: "Shqipëria",
        flag: "🇦🇱",
        flagUrl: "https://flagcdn.com/w80/al.png",
        continent: "Europe",
        region: "Southern Europe",
        capital: "Tirana",
        coordinates: { lat: 41.15, lng: 20.17 },
        totalArea: 28748,
        plainsArea: 8000,
        plainsPercent: 27.8,
        population: 2880000,
        populationOnPlains: 1500000,
        climate: ["Mediterranean", "Continental"],
        
        plainTypes: {
            coastal: {
                present: true,
                area: 8000,
                percentage: 100,
                majorPlains: [
                    {
                        name: "Albanian Coastal Plain",
                        localName: "Ultësirat bregdetare",
                        area: 8000,
                        coordinates: { lat: 41.0, lng: 19.5 },
                        settlements: ["Tirana", "Durrës"],
                        crops: ["Olives", "Citrus", "Vegetables", "Grapes"],
                        uniqueFeatures: [
                            "Most populated region",
                            "Adriatic and Ionian coasts",
                            "Ancient Illyrian history"
                        ]
                    }
                ]
            }
        },
        
        keyFacts: [
            "70% mountainous",
            "Coastal plain is most populated",
            "Mediterranean agriculture",
            "Ancient Illyrian heritage",
            "Former isolationist communist state"
        ]
    },

    "AT": {
        code: "AT",
        name: "Austria",
        localName: "Österreich",
        flag: "🇦🇹",
        flagUrl: "https://flagcdn.com/w80/at.png",
        continent: "Europe",
        region: "Central Europe",
        capital: "Vienna",
        coordinates: { lat: 47.52, lng: 14.55 },
        totalArea: 83871,
        plainsArea: 20000,
        plainsPercent: 23.8,
        population: 9000000,
        populationOnPlains: 4000000,
        climate: ["Continental", "Alpine"],
        
        plainTypes: {
            structural: {
                present: true,
                area: 20000,
                percentage: 100,
                majorPlains: [
                    {
                        name: "Pannonian Plain (Eastern Austria)",
                        localName: "Pannonische Tiefebene",
                        area: 10000,
                        coordinates: { lat: 48.0, lng: 16.5 },
                        settlements: ["Vienna"],
                        crops: ["Wheat", "Corn", "Wine"],
                        uniqueFeatures: "Extension of Hungarian Plain, Vienna Basin"
                    },
                    {
                        name: "Alpine Foreland",
                        area: 10000,
                        coordinates: { lat: 48.0, lng: 14.0 },
                        settlements: ["Linz", "Salzburg"],
                        uniqueFeatures: "Dairy farming, pre-Alpine region"
                    }
                ]
            }
        },
        
        keyFacts: [
            "62% is Alps mountains",
            "Eastern part is Pannonian Plain extension",
            "Danube River valley",
            "Vienna on plain edge",
            "Alpine and Danubian culture merge"
        ]
    },

    "BE": {
        code: "BE",
        name: "Belgium",
        localName: "België / Belgique",
        flag: "🇧🇪",
        flagUrl: "https://flagcdn.com/w80/be.png",
        continent: "Europe",
        region: "Western Europe",
        capital: "Brussels",
        coordinates: { lat: 50.50, lng: 4.47 },
        totalArea: 30528,
        plainsArea: 25000,
        plainsPercent: 81.9,
        population: 11600000,
        populationOnPlains: 10000000,
        climate: ["Oceanic"],
        
        plainTypes: {
            coastal: {
                present: true,
                area: 5000,
                percentage: 20,
                majorPlains: [
                    {
                        name: "Belgian Coastal Plain (Polders)",
                        area: 5000,
                        coordinates: { lat: 51.2, lng: 3.0 },
                        settlements: ["Bruges", "Ostend"],
                        uniqueFeatures: [
                            "Reclaimed land (polders)",
                            "Below sea level in parts",
                            "Historic Flanders"
                        ]
                    }
                ]
            },
            glacial: {
                present: true,
                area: 20000,
                percentage: 80,
                majorPlains: [
                    {
                        name: "Belgian Lowlands",
                        area: 20000,
                        coordinates: { lat: 51.0, lng: 4.5 },
                        settlements: ["Brussels", "Antwerp", "Ghent"],
                        crops: ["Wheat", "Sugar beet", "Vegetables"],
                        uniqueFeatures: [
                            "Part of North European Plain",
                            "Highly urbanized",
                            "Battlefield of Europe historically"
                        ]
                    }
                ]
            }
        },
        
        keyFacts: [
            "Part of North European Plain",
            "Polders reclaimed from sea",
            "EU and NATO headquarters",
            "High population density",
            "Historic battlefield of Europe"
        ]
    },

    "NL": {
        code: "NL",
        name: "Netherlands",
        localName: "Nederland",
        flag: "🇳🇱",
        flagUrl: "https://flagcdn.com/w80/nl.png",
        continent: "Europe",
        region: "Western Europe",
        capital: "Amsterdam",
        coordinates: { lat: 52.13, lng: 5.29 },
        totalArea: 41543,
        plainsArea: 41543,
        plainsPercent: 100,
        population: 17500000,
        populationOnPlains: 17500000,
        climate: ["Oceanic"],
        
        plainTypes: {
            coastal: {
                present: true,
                area: 20000,
                percentage: 48.1,
                majorPlains: [
                    {
                        name: "Dutch Polders",
                        area: 20000,
                        coordinates: { lat: 52.5, lng: 5.0 },
                        elevation: { min: -7, max: 0, unit: "m" },
                        settlements: ["Amsterdam", "Rotterdam", "The Hague"],
                        uniqueFeatures: [
                            "26% of country below sea level",
                            "Extensive polder system",
                            "Delta Works engineering marvel",
                            "Windmills and dikes",
                            "Most intensively engineered landscape"
                        ]
                    }
                ]
            },
            alluvial: {
                present: true,
                area: 15000,
                percentage: 36.1,
                majorPlains: [
                    {
                        name: "Rhine-Meuse Delta",
                        area: 15000,
                        coordinates: { lat: 52.0, lng: 5.0 },
                        rivers: ["Rhine", "Meuse", "Scheldt"],
                        uniqueFeatures: "Major European river delta"
                    }
                ]
            },
            glacial: {
                present: true,
                area: 6543,
                percentage: 15.8,
                majorPlains: [
                    {
                        name: "Eastern Sandy Plains",
                        area: 6543,
                        coordinates: { lat: 52.5, lng: 6.5 },
                        uniqueFeatures: "Glacial deposits, forests"
                    }
                ]
            }
        },
        
        keyFacts: [
            "100% is plains (flattest country in Europe)",
            "26% below sea level",
            "50% less than 1m above sea level",
            "Delta Works is engineering marvel",
            "World's most intensively managed landscape",
            "'God created the world, Dutch created Netherlands'"
        ]
    },

    "PL": {
        code: "PL",
        name: "Poland",
        localName: "Polska",
        flag: "🇵🇱",
        flagUrl: "https://flagcdn.com/w80/pl.png",
        continent: "Europe",
        region: "Eastern Europe",
        capital: "Warsaw",
        coordinates: { lat: 51.92, lng: 19.15 },
        totalArea: 312696,
        plainsArea: 260000,
        plainsPercent: 83.1,
        population: 37900000,
        populationOnPlains: 33000000,
        climate: ["Continental", "Oceanic"],
        
        plainTypes: {
            glacial: {
                present: true,
                area: 260000,
                percentage: 100,
                majorPlains: [
                    {
                        name: "Polish Lowlands",
                        localName: "Nizina Polska",
                        area: 260000,
                        coordinates: { lat: 52.0, lng: 19.0 },
                        elevation: { min: 0, max: 300, unit: "m" },
                        rivers: ["Vistula", "Oder", "Warta"],
                        soilType: "Glacial deposits, sandy, podzolic",
                        settlements: ["Warsaw", "Łódź", "Poznań", "Gdańsk", "Wrocław"],
                        crops: ["Wheat", "Rye", "Potatoes", "Sugar beet"],
                        uniqueFeatures: [
                            "Part of North European Plain",
                            "Great Poland lake district",
                            "Masurian lake district",
                            "Historic invasion corridor"
                        ]
                    }
                ]
            }
        },
        
        keyFacts: [
            "83% is plains (North European Plain)",
            "Glacially formed during ice ages",
            "Thousands of lakes in north",
            "Historic invasion route",
            "Major agricultural producer"
        ]
    },

    "UA": {
        code: "UA",
        name: "Ukraine",
        localName: "Україна (Ukraïna)",
        flag: "🇺🇦",
        flagUrl: "https://flagcdn.com/w80/ua.png",
        continent: "Europe",
        region: "Eastern Europe",
        capital: "Kyiv",
        coordinates: { lat: 48.38, lng: 31.17 },
        totalArea: 603550,
        plainsArea: 550000,
        plainsPercent: 91.1,
        population: 41000000,
        populationOnPlains: 39000000,
        climate: ["Continental", "Mediterranean (Crimea)"],
        
        plainTypes: {
            structural: {
                present: true,
                area: 550000,
                percentage: 100,
                majorPlains: [
                    {
                        name: "Ukrainian Plain (Pontic Steppe)",
                        localName: "Українська рівнина",
                        area: 550000,
                        coordinates: { lat: 49.0, lng: 32.0 },
                        elevation: { min: 0, max: 300, unit: "m" },
                        rivers: ["Dnieper", "Dniester", "Southern Bug", "Donets"],
                        soilType: "CHERNOZEM (Black Earth) - world's most fertile",
                        settlements: ["Kyiv", "Kharkiv", "Odesa", "Dnipro", "Lviv"],
                        crops: ["Wheat", "Corn", "Sunflower", "Sugar beet", "Barley"],
                        uniqueFeatures: [
                            "BREADBASKET OF EUROPE",
                            "25% of world's chernozem",
                            "Among most fertile soils globally",
                            "Major grain exporter",
                            "Sunflower capital of world"
                        ]
                    }
                ]
            }
        },
        
        keyFacts: [
            "91% is plains - 'breadbasket of Europe'",
            "Contains 25% of world's chernozem (black earth)",
            "Among most fertile agricultural regions globally",
            "World's largest sunflower producer",
            "Major wheat and corn exporter",
            "Dnieper River bisects the plain"
        ],
        
        agriculture: {
            mainCrops: ["Wheat", "Corn", "Sunflower", "Barley", "Sugar beet"],
            arableArea: 325000,
            productionValue: 40000000000,
            exportRanking: "Top 5 grain exporter globally"
        }
    },

    "GB": {
        code: "GB",
        name: "United Kingdom",
        localName: "United Kingdom",
        flag: "🇬🇧",
        flagUrl: "https://flagcdn.com/w80/gb.png",
        continent: "Europe",
        region: "Northern Europe",
        capital: "London",
        coordinates: { lat: 55.38, lng: -3.44 },
        totalArea: 242495,
        plainsArea: 100000,
        plainsPercent: 41.2,
        population: 67500000,
        populationOnPlains: 45000000,
        climate: ["Oceanic", "Temperate"],
        
        plainTypes: {
            structural: {
                present: true,
                area: 80000,
                percentage: 80,
                majorPlains: [
                    {
                        name: "English Lowlands",
                        area: 60000,
                        coordinates: { lat: 52.0, lng: 0.0 },
                        settlements: ["London", "Birmingham", "Manchester", "Leeds"],
                        crops: ["Wheat", "Barley", "Vegetables"],
                        uniqueFeatures: [
                            "Most populated region",
                            "Industrial heartland",
                            "Thames Basin",
                            "Chalk downlands"
                        ]
                    },
                    {
                        name: "Scottish Lowlands",
                        area: 20000,
                        coordinates: { lat: 56.0, lng: -4.0 },
                        settlements: ["Edinburgh", "Glasgow"],
                        uniqueFeatures: "Central Belt between Highlands"
                    }
                ]
            },
            coastal: {
                present: true,
                area: 20000,
                percentage: 20,
                majorPlains: [
                    {
                        name: "East Anglia",
                        area: 15000,
                        coordinates: { lat: 52.5, lng: 1.0 },
                        crops: ["Cereals", "Sugar beet", "Vegetables"],
                        uniqueFeatures: "The Fens - drained marshland, flat"
                    }
                ]
            }
        },
        
        keyFacts: [
            "English Lowlands are most populous",
            "The Fens are drained wetlands",
            "Industrial Revolution on lowland coalfields",
            "Scotland's Central Belt",
            "London Basin sedimentary plain"
        ]
    },

    // AMERICAS (Remaining)
    "CA": {
        code: "CA",
        name: "Canada",
        localName: "Canada",
        flag: "🇨🇦",
        flagUrl: "https://flagcdn.com/w80/ca.png",
        continent: "North America",
        region: "North America",
        capital: "Ottawa",
        coordinates: { lat: 56.13, lng: -106.35 },
        totalArea: 9984670,
        plainsArea: 2500000,
        plainsPercent: 25.0,
        population: 38000000,
        populationOnPlains: 15000000,
        climate: ["Subarctic", "Continental", "Oceanic"],
        
        plainTypes: {
            structural: {
                present: true,
                area: 1500000,
                percentage: 60,
                majorPlains: [
                    {
                        name: "Canadian Prairies",
                        area: 500000,
                        coordinates: { lat: 52.0, lng: -106.0 },
                        provinces: ["Alberta", "Saskatchewan", "Manitoba"],
                        elevation: { min: 300, max: 1000, unit: "m" },
                        soilType: "Chernozem, brown soils",
                        crops: ["Wheat", "Canola", "Barley", "Oats"],
                        settlements: ["Calgary", "Edmonton", "Winnipeg", "Regina", "Saskatoon"],
                        uniqueFeatures: [
                            "Extension of US Great Plains",
                            "Major wheat producer",
                            "Canola capital of world",
                            "Prairie potholes (wetlands)"
                        ]
                    },
                    {
                        name: "Interior Plains",
                        area: 1000000,
                        coordinates: { lat: 60.0, lng: -110.0 },
                        uniqueFeatures: "Northern extension, Mackenzie Basin"
                    }
                ]
            },
            glacial: {
                present: true,
                area: 800000,
                percentage: 32,
                majorPlains: [
                    {
                        name: "St. Lawrence Lowlands",
                        area: 100000,
                        coordinates: { lat: 46.0, lng: -73.0 },
                        rivers: ["St. Lawrence"],
                        settlements: ["Montreal", "Quebec City", "Toronto", "Ottawa"],
                        crops: ["Dairy", "Corn", "Vegetables"],
                        uniqueFeatures: [
                            "Most densely populated region",
                            "Industrial heartland",
                            "French Canadian culture"
                        ]
                    },
                    {
                        name: "Hudson Bay Lowlands",
                        area: 700000,
                        coordinates: { lat: 55.0, lng: -85.0 },
                        uniqueFeatures: "Largest wetland in North America, permafrost"
                    }
                ]
            },
            coastal: {
                present: true,
                area: 200000,
                percentage: 8,
                majorPlains: [
                    {
                        name: "Fraser Valley",
                        area: 30000,
                        coordinates: { lat: 49.2, lng: -122.0 },
                        settlements: ["Vancouver suburbs"],
                        crops: ["Dairy", "Berries", "Vegetables"],
                        uniqueFeatures: "BC's agricultural heartland"
                    }
                ]
            }
        },
        
        keyFacts: [
            "Canadian Prairies extend from US Great Plains",
            "World's largest canola producer",
            "Major wheat exporter",
            "Hudson Bay Lowlands largest wetland in North America",
            "St. Lawrence Lowlands most populated"
        ]
    },

    "MX": {
        code: "MX",
        name: "Mexico",
        localName: "México",
        flag: "🇲🇽",
        flagUrl: "https://flagcdn.com/w80/mx.png",
        continent: "North America",
        region: "Central America",
        capital: "Mexico City",
        coordinates: { lat: 23.63, lng: -102.55 },
        totalArea: 1964375,
        plainsArea: 600000,
        plainsPercent: 30.5,
        population: 130000000,
        populationOnPlains: 50000000,
        climate: ["Tropical", "Arid", "Temperate"],
        
        plainTypes: {
            coastal: {
                present: true,
                area: 200000,
                percentage: 33.3,
                majorPlains: [
                    {
                        name: "Gulf Coastal Plain",
                        area: 150000,
                        coordinates: { lat: 22.0, lng: -98.0 },
                        settlements: ["Veracruz", "Tampico", "Villahermosa"],
                        crops: ["Sugarcane", "Citrus", "Bananas"],
                        resources: "Oil",
                        uniqueFeatures: "Oil production, tropical climate"
                    },
                    {
                        name: "Pacific Coastal Plain",
                        area: 50000,
                        coordinates: { lat: 23.0, lng: -106.0 },
                        settlements: ["Culiacán", "Mazatlán"],
                        crops: ["Vegetables", "Tomatoes"],
                        uniqueFeatures: "Winter vegetable exports to US"
                    }
                ]
            },
            structural: {
                present: true,
                area: 300000,
                percentage: 50,
                majorPlains: [
                    {
                        name: "Mexican Plateau (Mesa Central)",
                        area: 250000,
                        coordinates: { lat: 23.0, lng: -102.0 },
                        elevation: { min: 1000, max: 2500, unit: "m" },
                        settlements: ["Mexico City", "Guadalajara", "Monterrey"],
                        crops: ["Corn", "Wheat", "Beans"],
                        uniqueFeatures: [
                            "High altitude plateau",
                            "Most populated region",
                            "Where Aztec civilization arose",
                            "Silver mining history"
                        ]
                    }
                ]
            },
            karst: {
                present: true,
                area: 100000,
                percentage: 16.7,
                majorPlains: [
                    {
                        name: "Yucatán Peninsula",
                        area: 100000,
                        coordinates: { lat: 20.0, lng: -89.0 },
                        soilType: "Limestone karst",
                        settlements: ["Mérida", "Cancún"],
                        uniqueFeatures: [
                            "Mayan civilization heartland",
                            "Cenotes (sinkholes)",
                            "Chicxulub crater (asteroid impact)",
                            "Tourism destination"
                        ]
                    }
                ]
            }
        },
        
        keyFacts: [
            "Mexican Plateau is high-altitude plain",
            "Yucatán is flat limestone karst",
            "Corn originated here (domesticated)",
            "Major oil production on Gulf coast",
            "Aztec and Mayan civilizations on plains"
        ]
    },

    "CO": {
        code: "CO",
        name: "Colombia",
        localName: "Colombia",
        flag: "🇨🇴",
        flagUrl: "https://flagcdn.com/w80/co.png",
        continent: "South America",
        region: "South America",
        capital: "Bogotá",
        coordinates: { lat: 4.57, lng: -74.30 },
        totalArea: 1141748,
        plainsArea: 600000,
        plainsPercent: 52.5,
        population: 51500000,
        populationOnPlains: 15000000,
        climate: ["Tropical", "Equatorial"],
        
        plainTypes: {
            structural: {
                present: true,
                area: 400000,
                percentage: 66.7,
                majorPlains: [
                    {
                        name: "Llanos (Eastern Plains)",
                        localName: "Los Llanos",
                        area: 300000,
                        coordinates: { lat: 5.0, lng: -70.0 },
                        elevation: { min: 100, max: 500, unit: "m" },
                        rivers: ["Orinoco tributaries"],
                        biodiversity: ["Capybaras", "Anacondas", "Jaguars", "Caimans"],
                        uniqueFeatures: [
                            "Vast tropical savanna",
                            "Cattle ranching",
                            "Wet-dry seasonal flooding",
                            "Shared with Venezuela",
                            "Llanero cowboy culture"
                        ]
                    }
                ]
            },
            alluvial: {
                present: true,
                area: 200000,
                percentage: 33.3,
                majorPlains: [
                    {
                        name: "Amazon Basin (Colombian portion)",
                        area: 100000,
                        coordinates: { lat: -1.0, lng: -72.0 },
                        uniqueFeatures: "Rainforest, indigenous peoples"
                    },
                    {
                        name: "Caribbean Coastal Plain",
                        area: 50000,
                        coordinates: { lat: 10.0, lng: -75.0 },
                        settlements: ["Cartagena", "Barranquilla"],
                        crops: ["Bananas", "Cotton"],
                        uniqueFeatures: "Historic colonial cities"
                    },
                    {
                        name: "Pacific Coastal Plain (Chocó)",
                        area: 50000,
                        coordinates: { lat: 5.0, lng: -77.0 },
                        uniqueFeatures: "Rainiest place in world, biodiversity"
                    }
                ]
            }
        },
        
        keyFacts: [
            "Llanos are vast tropical savanna",
            "Coffee grown in Andean valleys (not plains)",
            "Chocó is one of wettest places on Earth",
            "Biodiversity hotspot",
            "Most Colombians live in Andean highlands"
        ]
    },

    "VE": {
        code: "VE",
        name: "Venezuela",
        localName: "Venezuela",
        flag: "🇻🇪",
        flagUrl: "https://flagcdn.com/w80/ve.png",
        continent: "South America",
        region: "South America",
        capital: "Caracas",
        coordinates: { lat: 6.42, lng: -66.59 },
        totalArea: 916445,
        plainsArea: 400000,
        plainsPercent: 43.6,
        population: 28500000,
        populationOnPlains: 8000000,
        climate: ["Tropical", "Equatorial"],
        
        plainTypes: {
            structural: {
                present: true,
                area: 350000,
                percentage: 87.5,
                majorPlains: [
                    {
                        name: "Llanos",
                        localName: "Los Llanos",
                        area: 300000,
                        coordinates: { lat: 7.5, lng: -68.0 },
                        rivers: ["Orinoco", "Apure", "Meta"],
                        biodiversity: ["Capybaras", "Anacondas", "Caimans", "Piranha"],
                        crops: ["Cattle", "Rice"],
                        uniqueFeatures: [
                            "Vast tropical savanna",
                            "Seasonal flooding (wet-dry)",
                            "Llanero culture",
                            "Wildlife spectacles",
                            "Oil beneath the plains"
                        ],
                        resources: "Oil (Orinoco Oil Belt)"
                    },
                    {
                        name: "Guiana Highlands Plains",
                        area: 50000,
                        coordinates: { lat: 5.0, lng: -62.0 },
                        uniqueFeatures: "Tepuis (table mountains), Angel Falls"
                    }
                ]
            },
            coastal: {
                present: true,
                area: 50000,
                percentage: 12.5,
                majorPlains: [
                    {
                        name: "Maracaibo Basin",
                        area: 50000,
                        coordinates: { lat: 10.0, lng: -71.5 },
                        settlements: ["Maracaibo"],
                        resources: "Oil",
                        uniqueFeatures: "Lake Maracaibo, major oil field"
                    }
                ]
            }
        },
        
        keyFacts: [
            "Llanos shared with Colombia",
            "Orinoco Oil Belt - largest oil reserves",
            "Angel Falls world's highest waterfall",
            "Tepuis are ancient table mountains",
            "Major petroleum exporter"
        ]
    },

    "CL": {
        code: "CL",
        name: "Chile",
        localName: "Chile",
        flag: "🇨🇱",
        flagUrl: "https://flagcdn.com/w80/cl.png",
        continent: "South America",
        region: "South America",
        capital: "Santiago",
        coordinates: { lat: -35.68, lng: -71.54 },
        totalArea: 756102,
        plainsArea: 100000,
        plainsPercent: 13.2,
        population: 19500000,
        populationOnPlains: 12000000,
        climate: ["Arid", "Mediterranean", "Oceanic"],
        
        plainTypes: {
            structural: {
                present: true,
                area: 60000,
                percentage: 60,
                majorPlains: [
                    {
                        name: "Central Valley",
                        localName: "Valle Central",
                        area: 60000,
                        coordinates: { lat: -34.0, lng: -71.0 },
                        elevation: { min: 200, max: 500, unit: "m" },
                        settlements: ["Santiago", "Rancagua", "Talca"],
                        crops: ["Wine", "Fruits", "Vegetables"],
                        uniqueFeatures: [
                            "Chile's agricultural heartland",
                            "Mediterranean climate",
                            "World-famous wine region",
                            "Between Andes and Coastal Range"
                        ]
                    }
                ]
            },
            desert: {
                present: true,
                area: 40000,
                percentage: 40,
                majorPlains: [
                    {
                        name: "Atacama Desert Plains",
                        area: 40000,
                        coordinates: { lat: -24.0, lng: -69.5 },
                        uniqueFeatures: [
                            "Driest place on Earth (non-polar)",
                            "Mars analog terrain",
                            "Copper mining",
                            "Astronomical observatories"
                        ],
                        resources: "Copper, lithium"
                    }
                ]
            }
        },
        
        keyFacts: [
            "Central Valley is wine country",
            "Atacama is driest desert on Earth",
            "World's largest copper producer",
            "Extremely long and narrow country",
            "Andes dominate eastern border"
        ]
    },

    "PE": {
        code: "PE",
        name: "Peru",
        localName: "Perú",
        flag: "🇵🇪",
        flagUrl: "https://flagcdn.com/w80/pe.png",
        continent: "South America",
        region: "South America",
        capital: "Lima",
        coordinates: { lat: -9.19, lng: -75.02 },
        totalArea: 1285216,
        plainsArea: 700000,
        plainsPercent: 54.5,
        population: 33400000,
        populationOnPlains: 10000000,
        climate: ["Tropical", "Arid", "Highland"],
        
        plainTypes: {
            alluvial: {
                present: true,
                area: 650000,
                percentage: 92.9,
                majorPlains: [
                    {
                        name: "Amazon Basin (Selva)",
                        localName: "Selva",
                        area: 650000,
                        coordinates: { lat: -5.0, lng: -74.0 },
                        rivers: ["Amazon (origin)", "Ucayali", "Marañón"],
                        biodiversity: ["Jaguars", "Macaws", "Anacondas", "Pink dolphins"],
                        settlements: ["Iquitos", "Pucallpa"],
                        uniqueFeatures: [
                            "Amazon River originates here",
                            "60% of Peru is Amazon rainforest",
                            "Indigenous peoples",
                            "Biodiversity hotspot"
                        ]
                    }
                ]
            },
            coastal: {
                present: true,
                area: 50000,
                percentage: 7.1,
                majorPlains: [
                    {
                        name: "Coastal Desert Strip",
                        area: 50000,
                        coordinates: { lat: -12.0, lng: -77.0 },
                        settlements: ["Lima", "Trujillo", "Chiclayo"],
                        crops: ["Asparagus", "Cotton", "Grapes"],
                        uniqueFeatures: [
                            "Narrow desert strip",
                            "Irrigated agriculture",
                            "Where 60% of population lives",
                            "Nazca Lines region"
                        ]
                    }
                ]
            }
        },
        
        keyFacts: [
            "Amazon River's source is in Peru",
            "60% is Amazon rainforest",
            "Most people live on coastal plain",
            "Nazca Lines on coastal plain",
            "Inca Empire in highlands (not plains)"
        ]
    },

    // OCEANIA
    "NZ": {
        code: "NZ",
        name: "New Zealand",
        localName: "New Zealand / Aotearoa",
        flag: "🇳🇿",
        flagUrl: "https://flagcdn.com/w80/nz.png",
        continent: "Oceania",
        region: "Oceania",
        capital: "Wellington",
        coordinates: { lat: -40.90, lng: 174.89 },
        totalArea: 268021,
        plainsArea: 50000,
        plainsPercent: 18.7,
        population: 5100000,
        populationOnPlains: 2500000,
        climate: ["Temperate oceanic"],
        
        plainTypes: {
            alluvial: {
                present: true,
                area: 40000,
                percentage: 80,
                majorPlains: [
                    {
                        name: "Canterbury Plains",
                        localName: "Canterbury Plains",
                        area: 15000,
                        coordinates: { lat: -43.5, lng: 172.0 },
                        rivers: ["Waimakariri", "Rakaia", "Rangitata"],
                        soilType: "Glacial outwash, alluvium",
                        settlements: ["Christchurch"],
                        crops: ["Wheat", "Barley", "Dairy", "Sheep"],
                        uniqueFeatures: [
                            "New Zealand's largest plain",
                            "Grain and dairy farming",
                            "Southern Alps backdrop"
                        ]
                    },
                    {
                        name: "Southland Plains",
                        area: 10000,
                        coordinates: { lat: -46.0, lng: 168.5 },
                        settlements: ["Invercargill"],
                        uniqueFeatures: "Sheep farming, dairy"
                    },
                    {
                        name: "Manawatu-Whanganui Plains",
                        area: 8000,
                        coordinates: { lat: -40.0, lng: 175.5 },
                        settlements: ["Palmerston North"],
                        uniqueFeatures: "North Island agricultural region"
                    }
                ]
            },
            coastal: {
                present: true,
                area: 10000,
                percentage: 20,
                majorPlains: [
                    {
                        name: "Auckland Lowlands",
                        area: 5000,
                        coordinates: { lat: -37.0, lng: 175.0 },
                        settlements: ["Auckland"],
                        uniqueFeatures: "Most populated region, volcanic"
                    }
                ]
            }
        },
        
        keyFacts: [
            "Canterbury Plains is largest plain",
            "Most of country is mountainous",
            "Sheep outnumber people",
            "Major dairy exporter",
            "Maori name: Aotearoa (Land of Long White Cloud)"
        ]
    },

    "PG": {
        code: "PG",
        name: "Papua New Guinea",
        localName: "Papua Niugini",
        flag: "🇵🇬",
        flagUrl: "https://flagcdn.com/w80/pg.png",
        continent: "Oceania",
        region: "Oceania",
        capital: "Port Moresby",
        coordinates: { lat: -6.31, lng: 143.96 },
        totalArea: 462840,
        plainsArea: 150000,
        plainsPercent: 32.4,
        population: 9100000,
        populationOnPlains: 3000000,
        climate: ["Tropical"],
        
        plainTypes: {
            alluvial: {
                present: true,
                area: 100000,
                percentage: 66.7,
                majorPlains: [
                    {
                        name: "Sepik River Plain",
                        area: 50000,
                        coordinates: { lat: -4.0, lng: 143.0 },
                        rivers: ["Sepik River"],
                        biodiversity: ["Crocodiles", "Birds of Paradise"],
                        uniqueFeatures: [
                            "Major river system",
                            "Traditional cultures",
                            "Wetlands and swamps"
                        ]
                    },
                    {
                        name: "Fly River Plain",
                        area: 50000,
                        coordinates: { lat: -7.0, lng: 141.0 },
                        rivers: ["Fly River"],
                        uniqueFeatures: "Mining region, wetlands"
                    }
                ]
            },
            coastal: {
                present: true,
                area: 50000,
                percentage: 33.3,
                majorPlains: [
                    {
                        name: "Coastal Lowlands",
                        area: 50000,
                        coordinates: { lat: -5.0, lng: 145.0 },
                        settlements: ["Port Moresby", "Lae"],
                        crops: ["Copra", "Cocoa", "Coffee"],
                        uniqueFeatures: "Where most urban population lives"
                    }
                ]
            }
        },
        
        keyFacts: [
            "Over 800 languages spoken",
            "Mountainous interior, coastal plains",
            "Birds of Paradise endemic",
            "Rich mineral resources",
            "Traditional cultures preserved"
        ]
    }
},

    // ============================================
    // MAP VISUALIZATION CONFIG
    // ============================================
    mapConfig: {
        defaultCenter: { lat: 20, lng: 0 },
        defaultZoom: 2,
        minZoom: 1,
        maxZoom: 18,
        
        // Color scale for plains coverage percentage
        coverageColors: {
            "0-15": "#d5e8f3",
            "15-30": "#85c1e9",
            "30-50": "#3498db",
            "50-100": "#1a5f7a"
        },
        
        // Plain type colors for markers
        plainTypeColors: {
            structural: "#8B4513",
            alluvial: "#4169E1",
            glacial: "#00CED1",
            coastal: "#20B2AA",
            lacustrine: "#4682B4",
            lava: "#8B0000",
            loess: "#DEB887",
            erosional: "#696969",
            karst: "#708090",
            deltaic: "#228B22",
            flood: "#32CD32",
            desert: "#F4A460"
        },
        
        // Continent colors
        continentColors: {
            "Asia": "#e74c3c",
            "Europe": "#3498db",
            "Africa": "#f39c12",
            "North America": "#9b59b6",
            "South America": "#1abc9c",
            "Oceania": "#e91e63",
            "Antarctica": "#00bcd4"
        },
        
        // Tile layers
        tileLayers: {
            standard: {
                url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                attribution: "© OpenStreetMap contributors"
            },
            satellite: {
                url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
                attribution: "© Esri"
            },
            terrain: {
                url: "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
                attribution: "© OpenTopoMap"
            }
        }
    },

    // ============================================
    // QUIZ QUESTIONS DATABASE
    // ============================================
    quizQuestions: [
        {
            id: 1,
            question: "What is the largest plain in the world?",
            options: [
                "Great Plains (USA)",
                "West Siberian Plain (Russia)",
                "Indo-Gangetic Plain (India)",
                "Pampas (Argentina)"
            ],
            correctAnswer: 1,
            explanation: "The West Siberian Plain in Russia covers approximately 2.7 million km², making it the largest plain on Earth.",
            difficulty: "easy",
            category: "Size & Rankings"
        },
        {
            id: 2,
            question: "Which plain is known as the 'Cradle of Civilization'?",
            options: [
                "Nile Delta",
                "Indo-Gangetic Plain",
                "Mesopotamian Plain",
                "North China Plain"
            ],
            correctAnswer: 2,
            explanation: "The Mesopotamian Plain between the Tigris and Euphrates rivers is where writing, cities, and organized agriculture first developed around 3500 BCE.",
            difficulty: "medium",
            category: "History"
        },
        {
            id: 3,
            question: "What type of plain is formed by river sediment deposits?",
            options: [
                "Structural Plain",
                "Glacial Plain",
                "Alluvial Plain",
                "Karst Plain"
            ],
            correctAnswer: 2,
            explanation: "Alluvial plains are formed by the deposition of sediments carried by rivers, creating extremely fertile agricultural land.",
            difficulty: "easy",
            category: "Types"
        },
        {
            id: 4,
            question: "Which plain contains approximately 25% of the world's chernozem (black earth)?",
            options: [
                "Great Plains (USA)",
                "Ukrainian Plain",
                "Pampas (Argentina)",
                "Canadian Prairies"
            ],
            correctAnswer: 1,
            explanation: "Ukraine's plains contain about 25% of the world's chernozem, making it one of the most fertile agricultural regions on Earth.",
            difficulty: "hard",
            category: "Soil & Agriculture"
        },
        {
            id: 5,
            question: "What is the world's largest tropical wetland plain?",
            options: [
                "Okavango Delta",
                "Amazon Floodplain",
                "Pantanal",
                "Everglades"
            ],
            correctAnswer: 2,
            explanation: "The Pantanal in Brazil, Paraguay, and Bolivia is the world's largest tropical wetland, covering approximately 195,000 km².",
            difficulty: "medium",
            category: "Wetlands"
        },
        {
            id: 6,
            question: "Which country has the highest percentage of its land as plains?",
            options: [
                "Netherlands (100%)",
                "Bangladesh (88%)",
                "Denmark (95%)",
                "Ukraine (91%)"
            ],
            correctAnswer: 0,
            explanation: "The Netherlands is essentially 100% plains, with 26% of the country actually below sea level.",
            difficulty: "medium",
            category: "Geography"
        },
        {
            id: 7,
            question: "What is the oldest desert plain in the world?",
            options: [
                "Sahara Desert",
                "Namib Desert",
                "Atacama Desert",
                "Gobi Desert"
            ],
            correctAnswer: 1,
            explanation: "The Namib Desert is estimated to be 55-80 million years old, making it the oldest desert in the world.",
            difficulty: "hard",
            category: "Deserts"
        },
        {
            id: 8,
            question: "Which plain hosts the world's largest mammal migration?",
            options: [
                "Great Plains (USA)",
                "Serengeti Plains",
                "Kazakh Steppe",
                "Mongolian Steppe"
            ],
            correctAnswer: 1,
            explanation: "The Serengeti Plains host the Great Migration of over 2 million wildebeest, zebras, and gazelles annually.",
            difficulty: "easy",
            category: "Wildlife"
        },
        {
            id: 9,
            question: "What percentage of Earth's land surface is covered by plains?",
            options: [
                "About 15%",
                "About 33%",
                "About 50%",
                "About 70%"
            ],
            correctAnswer: 1,
            explanation: "Plains cover approximately 33% of Earth's total land surface, making them the most extensive landform type.",
            difficulty: "medium",
            category: "General"
        },
        {
            id: 10,
            question: "Which plain produces approximately 70% of the world's food crops?",
            options: [
                "No single plain",
                "World's plains collectively",
                "North China Plain alone",
                "Indo-Gangetic Plain alone"
            ],
            correctAnswer: 1,
            explanation: "The world's plains collectively produce over 70% of global food crops, demonstrating their critical importance for agriculture.",
            difficulty: "easy",
            category: "Agriculture"
        }
    ],

    // ============================================
    // GLOSSARY OF TERMS
    // ============================================
    glossary: {
        "alluvium": {
            term: "Alluvium",
            definition: "Loose, unconsolidated soil or sediments deposited by running water, typically in river valleys and deltas.",
            relatedTerms: ["floodplain", "delta", "sediment"]
        },
        "chernozem": {
            term: "Chernozem",
            definition: "A very fertile black soil rich in humus and phosphoric acids, found in temperate to cool grasslands. Also known as 'black earth'.",
            relatedTerms: ["black soil", "prairie soil", "steppe"]
        },
        "delta": {
            term: "Delta",
            definition: "A landform created at the mouth of a river where it deposits sediment as it flows into a slower-moving body of water.",
            relatedTerms: ["alluvium", "estuary", "floodplain"]
        },
        "floodplain": {
            term: "Floodplain",
            definition: "Flat or nearly flat land adjacent to a stream or river that experiences flooding during periods of high discharge.",
            relatedTerms: ["levee", "meander", "oxbow lake"]
        },
        "karst": {
            term: "Karst",
            definition: "A landscape formed from the dissolution of soluble rocks such as limestone, characterized by sinkholes, caves, and underground drainage.",
            relatedTerms: ["sinkhole", "cave", "limestone"]
        },
        "loess": {
            term: "Loess",
            definition: "Wind-blown silt that forms extremely fertile but easily eroded deposits, typically yellowish-brown in color.",
            relatedTerms: ["silt", "wind deposit", "aeolian"]
        },
                   term: "Peneplain",
            definition: "An extensive area of land worn down by erosion to a nearly flat or gently undulating plain, representing the final stage of the erosion cycle.",
            relatedTerms: ["erosion", "monadnock", "base level"]
        },
        "regur": {
            term: "Regur",
            definition: "Black cotton soil formed from weathering of basaltic lava rocks, characterized by high clay content and self-mulching properties. Found extensively in India.",
            relatedTerms: ["black cotton soil", "vertisol", "lava plain"]
        },
        "steppe": {
            term: "Steppe",
            definition: "A large area of flat unforested grassland in southeastern Europe or Siberia, characterized by semi-arid climate and grassland vegetation.",
            relatedTerms: ["prairie", "grassland", "savanna"]
        },
        "terai": {
            term: "Terai",
            definition: "A lowland belt of marshy grassland, savanna, and forests at the base of the Himalayas in India and Nepal.",
            relatedTerms: ["bhabar", "Indo-Gangetic Plain", "alluvial"]
        },
        "bhabar": {
            term: "Bhabar",
            definition: "A narrow belt of pebble-studded rocks and boulders at the foothills of the Himalayas where streams disappear underground.",
            relatedTerms: ["terai", "alluvial fan", "piedmont"]
        },
        "khadar": {
            term: "Khadar",
            definition: "New alluvial soil deposited by rivers in flood plains, highly fertile and suitable for cultivation. Found in India.",
            relatedTerms: ["bhangar", "alluvium", "floodplain"]
        },
        "bhangar": {
            term: "Bhangar",
            definition: "Old alluvial soil found above the flood plain level, containing calcium carbonate nodules called kankar. Less fertile than khadar.",
            relatedTerms: ["khadar", "alluvium", "terrace"]
        },
        "polder": {
            term: "Polder",
            definition: "A tract of low-lying land reclaimed from the sea or a river and protected by dikes, especially in the Netherlands.",
            relatedTerms: ["dike", "reclamation", "coastal plain"]
        },
        "savanna": {
            term: "Savanna",
            definition: "A grassy plain in tropical and subtropical regions, with scattered trees and drought-resistant undergrowth.",
            relatedTerms: ["grassland", "steppe", "plain"]
        },
        "llano": {
            term: "Llano",
            definition: "A treeless grassy plain, especially in South America (Venezuela and Colombia). The plural 'llanos' refers to the vast plains region.",
            relatedTerms: ["savanna", "pampa", "prairie"]
        },
        "pampa": {
            term: "Pampa",
            definition: "The extensive treeless grasslands of temperate South America, especially in Argentina, Uruguay, and southern Brazil.",
            relatedTerms: ["steppe", "prairie", "grassland"]
        },
        "prairie": {
            term: "Prairie",
            definition: "A large open area of grassland, especially in North America, characterized by moderate rainfall supporting grasses but few trees.",
            relatedTerms: ["steppe", "grassland", "Great Plains"]
        },
        "veld": {
            term: "Veld",
            definition: "Open, uncultivated grassland in southern Africa, divided into highveld, middleveld, and lowveld based on elevation.",
            relatedTerms: ["grassland", "savanna", "highveld"]
        },
        "tundra": {
            term: "Tundra",
            definition: "A vast, flat, treeless Arctic region in which the subsoil is permanently frozen (permafrost).",
            relatedTerms: ["permafrost", "arctic", "plain"]
        },
        "permafrost": {
            term: "Permafrost",
            definition: "Ground that remains frozen for at least two consecutive years, found in tundra and northern plains regions.",
            relatedTerms: ["tundra", "frozen ground", "arctic"]
        },
        "outwash_plain": {
            term: "Outwash Plain",
            definition: "A broad, flat plain formed by sediments deposited by meltwater streams flowing from a glacier.",
            relatedTerms: ["glacial plain", "moraine", "till"]
        },
        "till_plain": {
            term: "Till Plain",
            definition: "A plain formed by glacial till (unsorted material deposited directly by glacial ice).",
            relatedTerms: ["glacial plain", "moraine", "drift"]
        },
        "lacustrine_plain": {
            term: "Lacustrine Plain",
            definition: "A flat area formed from the bed of a former lake, characterized by fine-grained sediments.",
            relatedTerms: ["lake bed", "playa", "sediment"]
        },
        "abyssal_plain": {
            term: "Abyssal Plain",
            definition: "A flat or very gently sloping area of the deep ocean basin floor, covered with fine sediments.",
            relatedTerms: ["ocean floor", "deep sea", "sediment"]
        },
        "bajada": {
            term: "Bajada",
            definition: "A broad slope of alluvial material at the base of a mountain range in arid regions, formed by coalescing alluvial fans.",
            relatedTerms: ["alluvial fan", "piedmont", "desert"]
        },
        "playa": {
            term: "Playa",
            definition: "A dry, flat area at the lowest part of an undrained desert basin, sometimes temporarily covered with water.",
            relatedTerms: ["salt flat", "desert", "lake bed"]
        },
        "erg": {
            term: "Erg",
            definition: "A broad, flat area of desert covered with wind-swept sand with little or no vegetation. Also called sand sea.",
            relatedTerms: ["desert", "dune", "sand sea"]
        },
        "reg": {
            term: "Reg",
            definition: "A desert surface covered with closely packed, interlocking angular or rounded rock fragments. Also called desert pavement.",
            relatedTerms: ["desert", "hamada", "gravel plain"]
        },
        "hamada": {
            term: "Hamada",
            definition: "A type of desert landscape consisting of high, largely barren, rocky plateaus with little sand.",
            relatedTerms: ["reg", "desert", "plateau"]
        }
    },

    // ============================================
    // STATISTICS CALCULATIONS
    // ============================================
    statistics: {
        // Continental statistics
        byContinent: {
            "Asia": {
                countries: 48,
                totalPlainArea: 15000000,
                percentOfContinent: 34,
                largestPlain: "West Siberian Plain",
                mostPopulatedPlain: "Indo-Gangetic Plain",
                majorTypes: ["alluvial", "structural", "desert"]
            },
            "Africa": {
                countries: 54,
                totalPlainArea: 12000000,
                percentOfContinent: 40,
                largestPlain: "Saharan Plains",
                mostPopulatedPlain: "Nile Delta",
                majorTypes: ["desert", "savanna", "coastal"]
            },
            "Europe": {
                countries: 44,
                totalPlainArea: 5000000,
                percentOfContinent: 50,
                largestPlain: "East European Plain",
                mostPopulatedPlain: "North European Plain",
                majorTypes: ["glacial", "structural", "alluvial"]
            },
            "North America": {
                countries: 23,
                totalPlainArea: 8000000,
                percentOfContinent: 33,
                largestPlain: "Great Plains",
                mostPopulatedPlain: "Atlantic Coastal Plain",
                majorTypes: ["structural", "glacial", "coastal"]
            },
            "South America": {
                countries: 12,
                totalPlainArea: 7000000,
                percentOfContinent: 39,
                largestPlain: "Amazon Basin Plains",
                mostPopulatedPlain: "Pampas",
                majorTypes: ["alluvial", "structural", "grassland"]
            },
            "Oceania": {
                countries: 14,
                totalPlainArea: 5000000,
                percentOfContinent: 59,
                largestPlain: "Australian Interior Plains",
                mostPopulatedPlain: "Murray-Darling Basin",
                majorTypes: ["desert", "karst", "coastal"]
            },
            "Antarctica": {
                countries: 0,
                totalPlainArea: 2000000,
                percentOfContinent: 15,
                largestPlain: "Ross Ice Shelf",
                mostPopulatedPlain: "None (uninhabited)",
                majorTypes: ["glacial", "ice shelf"]
            }
        },
        
        // Top 10 rankings
        rankings: {
            byArea: [
                { rank: 1, name: "West Siberian Plain", area: 2745000, country: "Russia" },
                { rank: 2, name: "Great Plains", area: 2900000, country: "USA/Canada" },
                { rank: 3, name: "Amazon Basin Plains", area: 2000000, country: "Brazil" },
                { rank: 4, name: "North European Plain", area: 2000000, country: "Multiple" },
                { rank: 5, name: "East European Plain", area: 1800000, country: "Russia" },
                { rank: 6, name: "Saharan Plains", area: 1500000, country: "Multiple" },
                { rank: 7, name: "Australian Interior", area: 1200000, country: "Australia" },
                { rank: 8, name: "Kazakh Steppe", area: 804500, country: "Kazakhstan" },
                { rank: 9, name: "Pampas", area: 750000, country: "Argentina" },
                { rank: 10, name: "Indo-Gangetic Plain", area: 700000, country: "India/Pakistan" }
            ],
            byPopulation: [
                { rank: 1, name: "Indo-Gangetic Plain", population: 1000000000, country: "India/Pakistan/Bangladesh" },
                { rank: 2, name: "North China Plain", population: 400000000, country: "China" },
                { rank: 3, name: "North European Plain", population: 200000000, country: "Multiple" },
                { rank: 4, name: "Yangtze Plain", population: 150000000, country: "China" },
                { rank: 5, name: "Ganges-Brahmaputra Delta", population: 150000000, country: "Bangladesh/India" },
                { rank: 6, name: "Nile Delta/Valley", population: 100000000, country: "Egypt" },
                { rank: 7, name: "East European Plain", population: 100000000, country: "Russia" },
                { rank: 8, name: "Great Plains", population: 50000000, country: "USA/Canada" },
                { rank: 9, name: "Pampas", population: 30000000, country: "Argentina" },
                { rank: 10, name: "Pearl River Delta", population: 70000000, country: "China" }
            ],
            byFertility: [
                { rank: 1, name: "Ukrainian Plain", soilType: "Chernozem", rating: "Exceptional" },
                { rank: 2, name: "Indo-Gangetic Plain", soilType: "Alluvium", rating: "Exceptional" },
                { rank: 3, name: "Pampas", soilType: "Mollisol", rating: "Excellent" },
                { rank: 4, name: "North China Plain", soilType: "Loess-alluvium", rating: "Excellent" },
                { rank: 5, name: "Nile Delta", soilType: "Alluvium", rating: "Excellent" },
                { rank: 6, name: "Great Plains", soilType: "Mollisol", rating: "Very Good" },
                { rank: 7, name: "Mississippi Floodplain", soilType: "Alluvium", rating: "Very Good" },
                { rank: 8, name: "Java Volcanic Plains", soilType: "Volcanic", rating: "Excellent" },
                { rank: 9, name: "Po Valley", soilType: "Alluvium", rating: "Very Good" },
                { rank: 10, name: "Central Valley (CA)", soilType: "Alluvium", rating: "Very Good" }
            ],
            byBiodiversity: [
                { rank: 1, name: "Amazon Basin Plains", species: "Unknown millions", highlight: "World's most biodiverse" },
                { rank: 2, name: "Pantanal", species: "3500+", highlight: "Largest tropical wetland" },
                { rank: 3, name: "Serengeti Plains", species: "3000+", highlight: "Great Migration" },
                { rank: 4, name: "Okavango Delta", species: "2500+", highlight: "Inland delta ecosystem" },
                { rank: 5, name: "Llanos", species: "2000+", highlight: "Tropical savanna" },
                { rank: 6, name: "Sundarbans Delta", species: "1500+", highlight: "Mangrove tigers" },
                { rank: 7, name: "Congo Basin", species: "Unknown thousands", highlight: "Rainforest" },
                { rank: 8, name: "Madagascar Plains", species: "1000+ endemic", highlight: "Unique species" },
                { rank: 9, name: "Ganges Delta", species: "1000+", highlight: "Wetland diversity" },
                { rank: 10, name: "Mississippi Delta", species: "800+", highlight: "Bird migration route" }
            ]
        }
    },

    // ============================================
    // ENVIRONMENTAL DATA
    // ============================================
    environmental: {
        threats: {
            "Groundwater Depletion": {
                severity: "Critical",
                affectedPlains: [
                    "Indo-Gangetic Plain",
                    "North China Plain",
                    "Great Plains (Ogallala)",
                    "Murray-Darling Basin"
                ],
                description: "Over-extraction of groundwater for irrigation causing water table decline",
                stats: "Some regions losing 0.3-1m of water table annually"
            },
            "Soil Degradation": {
                severity: "High",
                affectedPlains: [
                    "Sahelian Plains",
                    "Central Asian Steppes",
                    "Australian Outback"
                ],
                description: "Loss of soil fertility through erosion, salinization, and nutrient depletion",
                stats: "24% of global land area affected by soil degradation"
            },
            "Desertification": {
                severity: "High",
                affectedPlains: [
                    "Sahel Region",
                    "Gobi Desert margins",
                    "Central Asian Plains"
                ],
                description: "Expansion of desert conditions into previously productive lands",
                stats: "12 million hectares lost annually"
            },
            "Sea Level Rise": {
                severity: "Critical",
                affectedPlains: [
                    "Ganges-Brahmaputra Delta",
                    "Nile Delta",
                    "Mekong Delta",
                    "Netherlands"
                ],
                description: "Rising seas threatening low-lying coastal plains",
                stats: "17% of Bangladesh could flood by 2050"
            },
            "Deforestation": {
                severity: "Critical",
                affectedPlains: [
                    "Amazon Basin",
                    "Congo Basin",
                    "Southeast Asian Plains"
                ],
                description: "Conversion of forested plains to agriculture",
                stats: "10 million hectares lost annually"
            },
            "Urban Sprawl": {
                severity: "High",
                affectedPlains: [
                    "North China Plain",
                    "Indo-Gangetic Plain",
                    "North European Plain"
                ],
                description: "Loss of agricultural land to urban expansion",
                stats: "3 million hectares of farmland lost to urbanization annually"
            }
        },
        
        conservation: {
            protectedAreas: [
                {
                    name: "Serengeti National Park",
                    location: "Tanzania",
                    area: 14763,
                    designation: "UNESCO World Heritage",
                    established: 1951,
                    significance: "World's largest mammal migration"
                },
                {
                    name: "Pantanal Conservation Area",
                    location: "Brazil",
                    area: 187818,
                    designation: "UNESCO World Heritage",
                    established: 2000,
                    significance: "World's largest tropical wetland"
                },
                {
                    name: "Okavango Delta",
                    location: "Botswana",
                    area: 22000,
                    designation: "UNESCO World Heritage",
                    established: 2014,
                    significance: "World's largest inland delta"
                },
                {
                    name: "Sundarbans",
                    location: "Bangladesh/India",
                    area: 10000,
                    designation: "UNESCO World Heritage",
                    established: 1987,
                    significance: "World's largest mangrove forest"
                },
                {
                    name: "Kaziranga National Park",
                    location: "India",
                    area: 1030,
                    designation: "UNESCO World Heritage",
                    established: 1985,
                    significance: "Two-thirds of world's one-horned rhinos"
                },
                {
                    name: "Grasslands National Park",
                    location: "Canada",
                    area: 906,
                    designation: "National Park",
                    established: 1981,
                    significance: "Last remaining mixed-grass prairie"
                },
                {
                    name: "Hortobágy National Park",
                    location: "Hungary",
                    area: 800,
                    designation: "UNESCO World Heritage",
                    established: 1973,
                    significance: "Largest natural grassland in Europe"
                },
                {
                    name: "Ngorongoro Conservation Area",
                    location: "Tanzania",
                    area: 8292,
                    designation: "UNESCO World Heritage",
                    established: 1979,
                    significance: "World's largest intact volcanic caldera"
                }
            ],
            
            initiatives: [
                {
                    name: "Great Green Wall",
                    region: "Sahel, Africa",
                    goal: "Restore 100 million hectares by 2030",
                    status: "In progress",
                    description: "8,000 km wall of trees across Africa to halt desertification"
                },
                {
                    name: "Grain for Green",
                    region: "China",
                    goal: "Restore Loess Plateau vegetation",
                    status: "Successful",
                    description: "World's largest reforestation project"
                },
                {
                    name: "Ramsar Convention",
                    region: "Global",
                    goal: "Protect wetlands worldwide",
                    status: "Ongoing since 1971",
                    description: "2,400+ sites designated as Wetlands of International Importance"
                }
            ]
        },
        
        climateChange: {
            projections: {
                temperature: "Plains expected to warm 1.5-4°C by 2100",
                precipitation: "Variable - some wetter, some drier",
                extremes: "More frequent droughts, floods, and heat waves",
                agriculture: "Shifting growing zones, crop stress"
            },
            impacts: [
                {
                    plain: "Great Plains (USA)",
                    impact: "Increased drought frequency, Ogallala depletion accelerating"
                },
                {
                    plain: "Indo-Gangetic Plain",
                    impact: "Monsoon variability, glacier melt affecting rivers"
                },
                {
                    plain: "Ganges-Brahmaputra Delta",
                    impact: "Sea level rise, increased cyclone intensity"
                },
                {
                    plain: "Sahel",
                    impact: "Desertification, rainfall variability"
                },
                {
                    plain: "Australian Plains",
                    impact: "Increased drought and fire risk"
                }
            ]
        }
    },

    // ============================================
    // UTILITY FUNCTIONS
    // ============================================
    utils: {
        /**
         * Get country by code
         * @param {string} code - ISO 3166-1 alpha-2 country code
         * @returns {object} Country data
         */
        getCountryByCode: function(code) {
            return this.countries[code.toUpperCase()] || null;
        },

        /**
         * Get all countries in a continent
         * @param {string} continent - Continent name
         * @returns {array} Array of country objects
         */
        getCountriesByContinent: function(continent) {
            const countries = [];
            for (const code in this.countries) {
                if (this.countries[code].continent === continent) {
                    countries.push(this.countries[code]);
                }
            }
            return countries;
        },

        /**
         * Get countries with specific plain type
         * @param {string} plainType - Type of plain
         * @returns {array} Array of country objects
         */
        getCountriesByPlainType: function(plainType) {
            const countries = [];
            for (const code in this.countries) {
                const country = this.countries[code];
                if (country.plainTypes && country.plainTypes[plainType] && country.plainTypes[plainType].present) {
                    countries.push(country);
                }
            }
            return countries;
        },

        /**
         * Calculate total plain area for a region
         * @param {array} countryCodes - Array of country codes
         * @returns {number} Total plain area in km²
         */
        calculateTotalPlainArea: function(countryCodes) {
            let total = 0;
            countryCodes.forEach(code => {
                const country = this.countries[code];
                if (country && country.plainsArea) {
                    total += country.plainsArea;
                }
            });
            return total;
        },

        /**
         * Get countries ranked by plains percentage
         * @param {number} limit - Number of results to return
         * @returns {array} Sorted array of countries
         */
        getCountriesRankedByPlainsPercent: function(limit = 10) {
            const countries = [];
            for (const code in this.countries) {
                countries.push(this.countries[code]);
            }
            return countries
                .sort((a, b) => b.plainsPercent - a.plainsPercent)
                .slice(0, limit);
        },

        /**
         * Search plains by name
         * @param {string} query - Search query
         * @returns {array} Matching plains
         */
        searchPlains: function(query) {
            const results = [];
            const queryLower = query.toLowerCase();
            
            this.majorPlains.forEach(plain => {
                if (plain.name.toLowerCase().includes(queryLower)) {
                    results.push(plain);
                }
            });
            
            return results;
        },

        /**
         * Format area for display
         * @param {number} area - Area in km²
         * @returns {string} Formatted string
         */
        formatArea: function(area) {
            if (area >= 1000000) {
                return (area / 1000000).toFixed(2) + 'M km²';
            } else if (area >= 1000) {
                return (area / 1000).toFixed(1) + 'K km²';
            }
            return area.toLocaleString() + ' km²';
        },

        /**
         * Format population for display
         * @param {number} population - Population count
         * @returns {string} Formatted string
         */
        formatPopulation: function(population) {
            if (population >= 1000000000) {
                return (population / 1000000000).toFixed(2) + 'B';
            } else if (population >= 1000000) {
                return (population / 1000000).toFixed(1) + 'M';
            } else if (population >= 1000) {
                return (population / 1000).toFixed(1) + 'K';
            }
            return population.toLocaleString();
        },

        /**
         * Get color for plains coverage
         * @param {number} percent - Percentage of land covered by plains
         * @returns {string} Color hex code
         */
        getCoverageColor: function(percent) {
            if (percent >= 50) return '#1a5f7a';
            if (percent >= 30) return '#3498db';
            if (percent >= 15) return '#85c1e9';
            return '#d5e8f3';
        },

        /**
         * Get random quiz questions
         * @param {number} count - Number of questions
         * @returns {array} Array of quiz questions
         */
        getRandomQuizQuestions: function(count = 5) {
            const shuffled = [...this.quizQuestions].sort(() => 0.5 - Math.random());
            return shuffled.slice(0, count);
        }
    },

    // ============================================
    // MAP INITIALIZATION FUNCTIONS
    // ============================================
    mapFunctions: {
        /**
         * Initialize the Leaflet map
         * @param {string} containerId - ID of map container element
         * @returns {object} Leaflet map instance
         */
        initMap: function(containerId) {
            const map = L.map(containerId).setView(
                [PlainsMapData.mapConfig.defaultCenter.lat, PlainsMapData.mapConfig.defaultCenter.lng],
                PlainsMapData.mapConfig.defaultZoom
            );
            
            L.tileLayer(PlainsMapData.mapConfig.tileLayers.standard.url, {
                attribution: PlainsMapData.mapConfig.tileLayers.standard.attribution,
                maxZoom: PlainsMapData.mapConfig.maxZoom,
                minZoom: PlainsMapData.mapConfig.minZoom
            }).addTo(map);
            
            return map;
        },

        /**
         * Add country markers to map
         * @param {object} map - Leaflet map instance
         */
        addCountryMarkers: function(map) {
            for (const code in PlainsMapData.countries) {
                const country = PlainsMapData.countries[code];
                if (country.coordinates) {
                    const marker = L.marker([country.coordinates.lat, country.coordinates.lng])
                        .addTo(map)
                        .bindPopup(this.createCountryPopup(country));
                }
            }
        },

        /**
         * Add major plains to map as polygons/markers
         * @param {object} map - Leaflet map instance
         */
        addMajorPlains: function(map) {
            PlainsMapData.majorPlains.forEach(plain => {
                if (plain.coordinates) {
                    const color = PlainsMapData.mapConfig.plainTypeColors[plain.type] || '#1a5f7a';
                    
                    const circle = L.circleMarker([plain.coordinates.lat, plain.coordinates.lng], {
                        radius: Math.min(Math.sqrt(plain.area) / 50, 30),
                        fillColor: color,
                        color: '#fff',
                        weight: 2,
                        opacity: 1,
                        fillOpacity: 0.6
                    }).addTo(map);
                    
                    circle.bindPopup(this.createPlainPopup(plain));
                }
            });
        },

        /**
         * Create popup content for country
         * @param {object} country - Country data object
         * @returns {string} HTML content
         */
        createCountryPopup: function(country) {
            let plainTypesList = '';
            if (country.plainTypes) {
                for (const type in country.plainTypes) {
                    if (country.plainTypes[type].present) {
                        const typeInfo = PlainsMapData.plainTypes[type];
                        const emoji = typeInfo ? typeInfo.emoji : '🌍';
                        plainTypesList += `<li>${emoji} ${type.charAt(0).toUpperCase() + type.slice(1)}: ${country.plainTypes[type].percentage}%</li>`;
                    }
                }
            }

            return `
                <div class="country-popup">
                    <h3>${country.flag} ${country.name}</h3>
                    <p><strong>Capital:</strong> ${country.capital}</p>
                    <p><strong>Total Area:</strong> ${PlainsMapData.utils.formatArea(country.totalArea)}</p>
                    <p><strong>Plains Area:</strong> ${PlainsMapData.utils.formatArea(country.plainsArea)}</p>
                    <p><strong>Plains Coverage:</strong> ${country.plainsPercent}%</p>
                    <p><strong>Population on Plains:</strong> ${PlainsMapData.utils.formatPopulation(country.populationOnPlains)}</p>
                    <h4>Plain Types:</h4>
                    <ul>${plainTypesList}</ul>
                    ${country.keyFacts ? `<h4>Key Facts:</h4><ul>${country.keyFacts.slice(0, 3).map(f => `<li>${f}</li>`).join('')}</ul>` : ''}
                    <button onclick="showCountryDetails('${country.code}')" class="popup-btn">View Full Details</button>
                </div>
            `;
        },

        /**
         * Create popup content for major plain
         * @param {object} plain - Plain data object
         * @returns {string} HTML content
         */
        createPlainPopup: function(plain) {
            const typeInfo = PlainsMapData.plainTypes[plain.type];
            return `
                <div class="plain-popup">
                    <h3>${typeInfo ? typeInfo.emoji : '🌍'} ${plain.name}</h3>
                    <p><strong>Type:</strong> ${plain.type.charAt(0).toUpperCase() + plain.type.slice(1)}</p>
                    <p><strong>Area:</strong> ${PlainsMapData.utils.formatArea(plain.area)}</p>
                    <p><strong>Countries:</strong> ${plain.countries.join(', ')}</p>
                    ${plain.population ? `<p><strong>Population:</strong> ${PlainsMapData.utils.formatPopulation(plain.population)}</p>` : ''}
                    ${plain.majorRivers ? `<p><strong>Major Rivers:</strong> ${plain.majorRivers.join(', ')}</p>` : ''}
                    ${plain.uniqueFacts ? `<h4>Unique Facts:</h4><ul>${plain.uniqueFacts.slice(0, 3).map(f => `<li>${f}</li>`).join('')}</ul>` : ''}
                    <button onclick="showPlainDetails('${plain.id}')" class="popup-btn">View Full Details</button>
                </div>
            `;
        },

        /**
         * Add choropleth layer based on plains coverage
         * @param {object} map - Leaflet map instance
         * @param {object} geoJsonData - GeoJSON data for countries
         */
        addChoroplethLayer: function(map, geoJsonData) {
            L.geoJSON(geoJsonData, {
                style: function(feature) {
                    const countryCode = feature.properties.ISO_A2;
                    const country = PlainsMapData.countries[countryCode];
                    const percent = country ? country.plainsPercent : 0;
                    
                    return {
                        fillColor: PlainsMapData.utils.getCoverageColor(percent),
                        weight: 1,
                        opacity: 1,
                        color: '#fff',
                        fillOpacity: 0.7
                    };
                },
                onEachFeature: function(feature, layer) {
                    const countryCode = feature.properties.ISO_A2;
                    const country = PlainsMapData.countries[countryCode];
                    
                    if (country) {
                        layer.bindPopup(PlainsMapData.mapFunctions.createCountryPopup(country));
                        
                        layer.on({
                            mouseover: function(e) {
                                const layer = e.target;
                                layer.setStyle({
                                    weight: 3,
                                    color: '#1a5f7a',
                                    fillOpacity: 0.9
                                });
                            },
                            mouseout: function(e) {
                                geoJsonLayer.resetStyle(e.target);
                            },
                            click: function(e) {
                                map.fitBounds(e.target.getBounds());
                            }
                        });
                    }
                }
            }).addTo(map);
        },

        /**
         * Add legend to map
         * @param {object} map - Leaflet map instance
         */
        addLegend: function(map) {
            const legend = L.control({ position: 'bottomleft' });
            
            legend.onAdd = function(map) {
                const div = L.DomUtil.create('div', 'map-legend');
                div.innerHTML = `
                    <h4>Plains Coverage</h4>
                    <div class="legend-item">
                        <span class="legend-color" style="background: #1a5f7a;"></span>
                        <span>> 50%</span>
                    </div>
                    <div class="legend-item">
                        <span class="legend-color" style="background: #3498db;"></span>
                        <span>30-50%</span>
                    </div>
                    <div class="legend-item">
                        <span class="legend-color" style="background: #85c1e9;"></span>
                        <span>15-30%</span>
                    </div>
                    <div class="legend-item">
                        <span class="legend-color" style="background: #d5e8f3;"></span>
                        <span>< 15%</span>
                    </div>
                `;
                return div;
            };
            
            legend.addTo(map);
        },

        /**
         * Fly to specific country on map
         * @param {object} map - Leaflet map instance
         * @param {string} countryCode - ISO country code
         */
        flyToCountry: function(map, countryCode) {
            const country = PlainsMapData.countries[countryCode];
            if (country && country.coordinates) {
                map.flyTo([country.coordinates.lat, country.coordinates.lng], 5, {
                    duration: 1.5
                });
            }
        },

        /**
         * Fly to specific plain on map
         * @param {object} map - Leaflet map instance
         * @param {string} plainId - Plain ID
         */
        flyToPlain: function(map, plainId) {
            const plain = PlainsMapData.majorPlains.find(p => p.id === plainId);
            if (plain && plain.coordinates) {
                map.flyTo([plain.coordinates.lat, plain.coordinates.lng], 6, {
                    duration: 1.5
                });
            }
        },

        /**
         * Filter map by continent
         * @param {object} map - Leaflet map instance
         * @param {string} continent - Continent name
         */
        filterByContinent: function(map, continent) {
            // Implementation would hide/show markers based on continent
            console.log(`Filtering map to show ${continent}`);
        },

        /**
         * Filter map by plain type
         * @param {object} map - Leaflet map instance
         * @param {string} plainType - Plain type
         */
        filterByPlainType: function(map, plainType) {
            // Implementation would highlight countries with specific plain type
            console.log(`Filtering map to show ${plainType} plains`);
        }
    },

    // ============================================
    // DATA EXPORT FUNCTIONS
    // ============================================
    exportFunctions: {
        /**
         * Export country data to CSV
         * @returns {string} CSV formatted string
         */
        exportToCSV: function() {
            let csv = 'Country,Code,Continent,Total Area (km²),Plains Area (km²),Plains %,Population on Plains,Key Plains\n';
            
            for (const code in PlainsMapData.countries) {
                const c = PlainsMapData.countries[code];
                let keyPlains = [];
                
                if (c.plainTypes) {
                    for (const type in c.plainTypes) {
                        if (c.plainTypes[type].present && c.plainTypes[type].majorPlains) {
                            c.plainTypes[type].majorPlains.forEach(p => {
                                keyPlains.push(p.name);
                            });
                        }
                    }
                }
                
                csv += `"${c.name}",${code},${c.continent},${c.totalArea},${c.plainsArea},${c.plainsPercent},${c.populationOnPlains},"${keyPlains.slice(0, 3).join('; ')}"\n`;
            }
            
            return csv;
        },

        /**
         * Export data as JSON
         * @returns {string} JSON string
         */
        exportToJSON: function() {
            return JSON.stringify(PlainsMapData.countries, null, 2);
        },

        /**
         * Download file
         * @param {string} content - File content
         * @param {string} filename - File name
         * @param {string} contentType - MIME type
         */
        downloadFile: function(content, filename, contentType) {
            const blob = new Blob([content], { type: contentType });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }
    },

    // ============================================
    // MODAL/DETAIL VIEW FUNCTIONS
    // ============================================
    detailFunctions: {
        /**
         * Generate detailed HTML for country modal
         * @param {string} countryCode - ISO country code
         * @returns {string} HTML content
         */
        generateCountryDetailHTML: function(countryCode) {
            const country = PlainsMapData.countries[countryCode];
            if (!country) return '<p>Country not found</p>';

            let plainTypesHTML = '';
            if (country.plainTypes) {
                for (const type in country.plainTypes) {
                    if (country.plainTypes[type].present) {
                        const typeInfo = PlainsMapData.plainTypes[type];
                        plainTypesHTML += `
                            <div class="plain-type-card">
                                <div class="plain-type-header" style="background-color: ${typeInfo ? typeInfo.color : '#1a5f7a'};">
                                    <span class="plain-type-emoji">${typeInfo ? typeInfo.emoji : '🌍'}</span>
                                    <h4>${type.charAt(0).toUpperCase() + type.slice(1)} Plains</h4>
                                    <span class="plain-type-percent">${country.plainTypes[type].percentage}%</span>
                                </div>
                                <div class="plain-type-body">
                                    <p><strong>Area:</strong> ${PlainsMapData.utils.formatArea(country.plainTypes[type].area)}</p>
                                    ${country.plainTypes[type].majorPlains ? `
                                        <h5>Major Plains:</h5>
                                        <ul>
                                            ${country.plainTypes[type].majorPlains.map(p => `
                                                <li>
                                                    <strong>${p.name}</strong>
                                                    ${p.localName ? `(${p.localName})` : ''}
                                                    <br>
                                                    <small>Area: ${PlainsMapData.utils.formatArea(p.area)}</small>
                                                    ${p.uniqueFeatures ? `<br><small>${Array.isArray(p.uniqueFeatures) ? p.uniqueFeatures[0] : p.uniqueFeatures}</small>` : ''}
                                                </li>
                                            `).join('')}
                                        </ul>
                                    ` : ''}
                                </div>
                            </div>
                        `;
                    }
                }
            }

            let regionsHTML = '';
            if (country.regions) {
                regionsHTML = `
                    <div class="regions-section">
                        <h3>Regions</h3>
                        <div class="regions-grid">
                            ${country.regions.map(r => `
                                <div class="region-card">
                                    <h4>${r.name}</h4>
                                    <p><strong>Area:</strong> ${PlainsMapData.utils.formatArea(r.area)}</p>
                                    <p><strong>Plain Types:</strong> ${r.plainTypes.join(', ')}</p>
                                    <p>${r.characteristics}</p>
                                    ${r.provinces ? `<p><strong>Includes:</strong> ${r.provinces.join(', ')}</p>` : ''}
                                    ${r.states ? `<p><strong>States:</strong> ${r.states.join(', ')}</p>` : ''}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
            }

            let stateDataHTML = '';
            if (country.stateWiseData) {
                stateDataHTML = `
                    <div class="state-data-section">
                        <h3>State/Province Data</h3>
                        <div class="table-wrapper">
                            <table class="state-table">
                                <thead>
                                    <tr>
                                        <th>State</th>
                                        <th>Plain Area</th>
                                        <th>% of State</th>
                                        <th>Major Plains</th>
                                        <th>Main Crops</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${country.stateWiseData.map(s => `
                                        <tr>
                                            <td><strong>${s.state}</strong></td>
                                            <td>${PlainsMapData.utils.formatArea(s.plainArea)}</td>
                                            <td>${s.plainPercent}%</td>
                                            <td>${s.majorPlains.join(', ')}</td>
                                            <td>${s.crops.join(', ')}</td>
                                        </tr>
                                    `).join('')}
                                </tbody>
                            </table>
                        </div>
                    </div>
                `;
            }

            let keyFactsHTML = '';
            if (country.keyFacts) {
                keyFactsHTML = `
                    <div class="key-facts-section">
                        <h3>Key Facts</h3>
                        <ul class="key-facts-list">
                            ${country.keyFacts.map(f => `<li><i class="fas fa-check-circle"></i> ${f}</li>`).join('')}
                        </ul>
                    </div>
                `;
            }

            let agricultureHTML = '';
            if (country.agriculture) {
                agricultureHTML = `
                    <div class="agriculture-section">
                        <h3>Agriculture</h3>
                        <div class="agriculture-grid">
                            <div class="ag-stat">
                                <span class="ag-value">${country.agriculture.mainCrops.slice(0, 4).join(', ')}</span>
                                <span class="ag-label">Main Crops</span>
                            </div>
                            ${country.agriculture.irrigatedArea ? `
                                <div class="ag-stat">
                                    <span class="ag-value">${PlainsMapData.utils.formatArea(country.agriculture.irrigatedArea)}</span>
                                    <span class="ag-label">Irrigated Area</span>
                                </div>
                            ` : ''}
                            ${country.agriculture.productionValue ? `
                                <div class="ag-stat">
                                    <span class="ag-value">$${(country.agriculture.productionValue / 1000000000).toFixed(1)}B</span>
                                    <span class="ag-label">Production Value</span>
                                </div>
                            ` : ''}
                            ${country.agriculture.employmentPercent ? `
                                <div class="ag-stat">
                                    <span class="ag-value">${country.agriculture.employmentPercent}%</span>
                                    <span class="ag-label">Agricultural Employment</span>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                `;
            }

            let timelineHTML = '';
            if (country.historicalTimeline) {
                timelineHTML = `
                    <div class="timeline-section">
                        <h3>Historical Timeline</h3>
                        <div class="timeline">
                            ${country.historicalTimeline.map(t => `
                                <div class="timeline-item">
                                    <div class="timeline-date">${t.year}</div>
                                    <div class="timeline-event">${t.event}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
            }

            let challengesHTML = '';
            if (country.environmentalChallenges) {
                challengesHTML = `
                    <div class="challenges-section">
                        <h3>Environmental Challenges</h3>
                        <ul class="challenges-list">
                            ${country.environmentalChallenges.map(c => `<li><i class="fas fa-exclamation-triangle"></i> ${c}</li>`).join('')}
                        </ul>
                    </div>
                `;
            }

            return `
                <div class="country-detail">
                    <div class="country-detail-header">
                        <img src="${country.flagUrl}" alt="${country.name} flag" class="country-flag-large">
                        <div class="country-header-info">
                            <h2>${country.flag} ${country.name}</h2>
                            ${country.localName ? `<p class="local-name">${country.localName}</p>` : ''}
                            <div class="header-stats">
                                <span class="stat"><i class="fas fa-map"></i> ${country.continent}</span>
                                <span class="stat"><i class="fas fa-city"></i> ${country.capital}</span>
                                <span class="stat"><i class="fas fa-users"></i> ${PlainsMapData.utils.formatPopulation(country.population)}</span>
                            </div>
                        </div>
                    </div>

                    <div class="country-overview">
                        <div class="overview-stat">
                            <div class="stat-value">${PlainsMapData.utils.formatArea(country.totalArea)}</div>
                            <div class="stat-label">Total Area</div>
                        </div>
                        <div class="overview-stat highlight">
                            <div class="stat-value">${PlainsMapData.utils.formatArea(country.plainsArea)}</div>
                            <div class="stat-label">Plains Area</div>
                        </div>
                        <div class="overview-stat">
                            <div class="stat-value">${country.plainsPercent}%</div>
                            <div class="stat-label">Plains Coverage</div>
                        </div>
                        <div class="overview-stat">
                            <div class="stat-value">${PlainsMapData.utils.formatPopulation(country.populationOnPlains)}</div>
                            <div class="stat-label">Population on Plains</div>
                        </div>
                    </div>

                    <div class="plain-types-section">
                        <h3>Plain Types Present</h3>
                        <div class="plain-types-grid">
                            ${plainTypesHTML}
                        </div>
                    </div>

                    ${regionsHTML}
                    ${stateDataHTML}
                    ${keyFactsHTML}
                    ${agricultureHTML}
                    ${timelineHTML}
                    ${challengesHTML}

                    <div class="country-actions">
                        <button onclick="PlainsMapData.mapFunctions.flyToCountry(map, '${country.code}')" class="action-btn">
                            <i class="fas fa-map-marker-alt"></i> Show on Map
                        </button>
                        <button onclick="PlainsMapData.exportFunctions.downloadFile(JSON.stringify(PlainsMapData.countries['${country.code}'], null, 2), '${country.name.toLowerCase().replace(/\s/g, '_')}_plains_data.json', 'application/json')" class="action-btn">
                            <i class="fas fa-download"></i> Download Data
                        </button>
                    </div>
                </div>
            `;
        }
    }
};

// ============================================
// INITIALIZATION
// ============================================

// Bind utility functions to the main object for easier access
PlainsMapData.utils.getCountryByCode = PlainsMapData.utils.getCountryByCode.bind(PlainsMapData);
PlainsMapData.utils.getCountriesByContinent = PlainsMapData.utils.getCountriesByContinent.bind(PlainsMapData);
PlainsMapData.utils.getCountriesByPlainType = PlainsMapData.utils.getCountriesByPlainType.bind(PlainsMapData);
PlainsMapData.utils.calculateTotalPlainArea = PlainsMapData.utils.calculateTotalPlainArea.bind(PlainsMapData);
PlainsMapData.utils.getCountriesRankedByPlainsPercent = PlainsMapData.utils.getCountriesRankedByPlainsPercent.bind(PlainsMapData);
PlainsMapData.utils.searchPlains = PlainsMapData.utils.searchPlains.bind(PlainsMapData);
PlainsMapData.utils.getRandomQuizQuestions = PlainsMapData.utils.getRandomQuizQuestions.bind(PlainsMapData);

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PlainsMapData;
}

// Make available globally for browser
if (typeof window !== 'undefined') {
    window.PlainsMapData = PlainsMapData;
}

// Console notification
console.log('🌾 Plains Map Data loaded successfully!');
console.log(`📊 ${Object.keys(PlainsMapData.countries).length} countries loaded`);
console.log(`🗺️ ${PlainsMapData.majorPlains.length} major plains loaded`);
console.log(`📚 ${Object.keys(PlainsMapData.glossary).length} glossary terms loaded`);
console.log(`❓ ${PlainsMapData.quizQuestions.length} quiz questions loaded`);
            
