// ============================================
// GEOTOPIA DATA MANAGEMENT SYSTEM
// Easy to add/edit/delete country data
// ============================================

const GEOTOPIA_DATA = {
    
    // ==========================================
    // CONTINENTS DATA
    // ==========================================
    continents: {
        asia: {
            name: "Asia",
            icon: "🌏",
            area: "44,579,000 km²",
            population: "4.7 billion",
            countries: 49,
            regions: ["South Asia", "East Asia", "Southeast Asia", "Central Asia", "West Asia"],
            highestPoint: { name: "Mount Everest", height: "8,849 m" },
            lowestPoint: { name: "Dead Sea", depth: "-430 m" },
            longestRiver: { name: "Yangtze", length: "6,300 km" },
            largestLake: { name: "Caspian Sea", area: "371,000 km²" }
        },
        
        africa: {
            name: "Africa",
            icon: "🌍",
            area: "30,370,000 km²",
            population: "1.4 billion",
            countries: 54,
            regions: ["North Africa", "West Africa", "East Africa", "Central Africa", "Southern Africa"],
            highestPoint: { name: "Mount Kilimanjaro", height: "5,895 m" },
            lowestPoint: { name: "Lake Assal", depth: "-155 m" },
            longestRiver: { name: "Nile", length: "6,650 km" },
            largestLake: { name: "Lake Victoria", area: "69,485 km²" }
        },
        
        europe: {
            name: "Europe",
            icon: "🏰",
            area: "10,180,000 km²",
            population: "750 million",
            countries: 44,
            regions: ["Northern Europe", "Western Europe", "Eastern Europe", "Southern Europe"],
            highestPoint: { name: "Mount Elbrus", height: "5,642 m" },
            lowestPoint: { name: "Caspian Sea", depth: "-28 m" },
            longestRiver: { name: "Volga", length: "3,530 km" },
            largestLake: { name: "Lake Ladoga", area: "17,700 km²" }
        },
        
        northAmerica: {
            name: "North America",
            icon: "🗽",
            area: "24,710,000 km²",
            population: "579 million",
            countries: 23,
            regions: ["Northern America", "Central America", "Caribbean"],
            highestPoint: { name: "Denali", height: "6,190 m" },
            lowestPoint: { name: "Death Valley", depth: "-86 m" },
            longestRiver: { name: "Missouri-Mississippi", length: "6,275 km" },
            largestLake: { name: "Lake Superior", area: "82,100 km²" }
        },
        
        southAmerica: {
            name: "South America",
            icon: "🌴",
            area: "17,840,000 km²",
            population: "430 million",
            countries: 12,
            regions: ["Andean States", "Southern Cone", "Brazil", "Guianas"],
            highestPoint: { name: "Aconcagua", height: "6,961 m" },
            lowestPoint: { name: "Laguna del Carbón", depth: "-105 m" },
            longestRiver: { name: "Amazon", length: "6,400 km" },
            largestLake: { name: "Lake Titicaca", area: "8,372 km²" }
        },
        
        oceania: {
            name: "Oceania",
            icon: "🦘",
            area: "8,530,000 km²",
            population: "45 million",
            countries: 14,
            regions: ["Australasia", "Melanesia", "Micronesia", "Polynesia"],
            highestPoint: { name: "Puncak Jaya", height: "4,884 m" },
            lowestPoint: { name: "Lake Eyre", depth: "-15 m" },
            longestRiver: { name: "Murray-Darling", length: "3,672 km" },
            largestLake: { name: "Lake Eyre", area: "9,500 km²" }
        },
        
        antarctica: {
            name: "Antarctica",
            icon: "🐧",
            area: "14,200,000 km²",
            population: "~5,000 (researchers)",
            countries: 0,
            regions: ["East Antarctica", "West Antarctica"],
            highestPoint: { name: "Vinson Massif", height: "4,892 m" },
            lowestPoint: { name: "Bentley Subglacial Trench", depth: "-2,555 m" },
            longestRiver: { name: "Onyx River", length: "32 km" },
            largestLake: { name: "Lake Vostok (subglacial)", area: "12,500 km²" }
        }
    },

    // ==========================================
    // COUNTRIES DATA - ASIA
    // Easy to add new countries
    // ==========================================
    countries: {
        
        // ========== INDIA ==========
        india: {
            name: "India",
            officialName: "Republic of India",
            nativeName: "भारत गणराज्य",
            flag: "🇮🇳",
            continent: "Asia",
            region: "South Asia",
            
            // BASIC INFO
            basic: {
                capital: "New Delhi",
                largestCity: "Mumbai",
                officialLanguages: ["Hindi", "English"],
                currency: { name: "Indian Rupee", code: "INR", symbol: "₹" },
                callingCode: "+91",
                internetTLD: ".in",
                drivingSide: "left"
            },
            
            // GEOGRAPHY
            geography: {
                totalArea: 3287263,  // km²
                landArea: 2973190,
                waterArea: 314073,
                worldRank: 7,
                coastline: 7516.6,  // km
                landBoundaries: 15106.7,  // km
                
                coordinates: {
                    latitude: { min: "8°4'N", max: "37°6'N" },
                    longitude: { min: "68°7'E", max: "97°25'E" }
                },
                
                extremePoints: {
                    north: { name: "Indira Col", location: "Siachen Glacier", coordinate: "37°6'N" },
                    south: { name: "Indira Point", location: "Great Nicobar", coordinate: "6°45'N" },
                    east: { name: "Kibithu", location: "Arunachal Pradesh", coordinate: "97°25'E" },
                    west: { name: "Ghuar Mota", location: "Gujarat", coordinate: "68°7'E" }
                },
                
                neighbors: [
                    { country: "Pakistan", borderLength: 3323 },
                    { country: "China", borderLength: 3488 },
                    { country: "Nepal", borderLength: 1751 },
                    { country: "Bhutan", borderLength: 699 },
                    { country: "Bangladesh", borderLength: 4096.7 },
                    { country: "Myanmar", borderLength: 1643 }
                ],
                
                highestPoint: { name: "Kanchenjunga", height: 8586, location: "Sikkim" },
                lowestPoint: { name: "Kuttanad", depth: -2.2, location: "Kerala" }
            },
            
            // PHYSICAL FEATURES
            physicalFeatures: {
                mountains: [
                    { name: "Kanchenjunga", height: 8586, range: "Himalayas" },
                    { name: "Nanda Devi", height: 7816, range: "Garhwal Himalayas" },
                    { name: "Kamet", height: 7756, range: "Garhwal Himalayas" }
                ],
                
                plateaus: [
                    { name: "Deccan Plateau", area: "Large", avgElevation: 600 },
                    { name: "Malwa Plateau", area: "Medium", avgElevation: 500 },
                    { name: "Chota Nagpur Plateau", area: "Medium", avgElevation: 700 }
                ],
                
                rivers: [
                    { name: "Ganga", length: 2525, origin: "Gangotri Glacier", mouth: "Bay of Bengal" },
                    { name: "Brahmaputra", length: 2900, origin: "Angsi Glacier", mouth: "Bay of Bengal" },
                    { name: "Godavari", length: 1465, origin: "Trimbakeshwar", mouth: "Bay of Bengal" },
                    { name: "Krishna", length: 1400, origin: "Mahabaleshwar", mouth: "Bay of Bengal" },
                    { name: "Narmada", length: 1312, origin: "Amarkantak", mouth: "Arabian Sea" }
                ],
                
                deserts: [
                    { name: "Thar Desert", area: 200000, location: "Rajasthan", type: "Hot" }
                ],
                
                islands: [
                    { name: "Andaman & Nicobar", count: 572, sea: "Bay of Bengal" },
                    { name: "Lakshadweep", count: 36, sea: "Arabian Sea" }
                ]
            },
            
            // CLIMATE
            climate: {
                type: "Monsoon",
                seasons: [
                    { name: "Winter", months: "Dec-Feb", temp: "10-27°C" },
                    { name: "Summer", months: "Mar-May", temp: "25-45°C" },
                    { name: "Monsoon", months: "Jun-Sep", temp: "25-35°C" },
                    { name: "Post-Monsoon", months: "Oct-Nov", temp: "20-30°C" }
                ],
                rainfall: {
                    highest: { place: "Mawsynram", amount: 11872 },
                    lowest: { place: "Leh", amount: 68 },
                    average: 1170
                }
            },
            
            // POPULATION
            population: {
                total: 1420000000,
                worldRank: 1,
                density: 430,  // per km²
                urbanPopulation: 35,  // percentage
                growthRate: 0.97,  // percentage
                lifeExpectancy: 70.4
            },
            
            // ADMINISTRATIVE DIVISIONS
            divisions: {
                states: 28,
                unionTerritories: 8,
                districts: 773
            },
            
            // NATURAL RESOURCES
            resources: {
                minerals: ["Coal", "Iron Ore", "Manganese", "Bauxite", "Mica", "Limestone"],
                energy: ["Coal", "Petroleum", "Natural Gas", "Hydropower", "Solar", "Wind"],
                forests: { coverage: 21.71, type: ["Tropical", "Temperate", "Mangrove"] }
            },
            
            // UPSC IMPORTANT FACTS
            upscFacts: [
                "7th largest country by area",
                "Most populous country (2024)",
                "Tropic of Cancer passes through 8 states",
                "Standard Meridian: 82°30'E (Mirzapur, UP)",
                "Highest rainfall: Mawsynram, Meghalaya",
                "Largest river basin: Ganga (26.3%)",
                "Longest coastline state: Gujarat"
            ]
        },
        
        // ========== CHINA ==========
        china: {
            name: "China",
            officialName: "People's Republic of China",
            nativeName: "中华人民共和国",
            flag: "🇨🇳",
            continent: "Asia",
            region: "East Asia",
            
            basic: {
                capital: "Beijing",
                largestCity: "Shanghai",
                officialLanguages: ["Mandarin Chinese"],
                currency: { name: "Renminbi", code: "CNY", symbol: "¥" },
                callingCode: "+86",
                internetTLD: ".cn",
                drivingSide: "right"
            },
            
            geography: {
                totalArea: 9596961,
                worldRank: 3,
                coastline: 14500,
                neighbors: [
                    { country: "Russia", borderLength: 4209 },
                    { country: "Mongolia", borderLength: 4630 },
                    { country: "India", borderLength: 2659 },
                    { country: "Myanmar", borderLength: 2129 }
                    // Add more...
                ],
                highestPoint: { name: "Mount Everest", height: 8849, location: "Tibet" },
                lowestPoint: { name: "Turpan Depression", depth: -154 }
            },
            
            physicalFeatures: {
                mountains: [
                    { name: "Mount Everest", height: 8849, range: "Himalayas" },
                    { name: "K2", height: 8611, range: "Karakoram" }
                ],
                rivers: [
                    { name: "Yangtze", length: 6300, mouth: "East China Sea" },
                    { name: "Yellow River", length: 5464, mouth: "Bohai Sea" }
                ],
                deserts: [
                    { name: "Gobi Desert", area: 1300000, type: "Cold" },
                    { name: "Taklamakan Desert", area: 337000, type: "Cold" }
                ]
            },
            
            climate: {
                type: "Varied (Tropical to Subarctic)",
                avgTemp: { summer: "22-28°C", winter: "-10 to 15°C" }
            },
            
            population: {
                total: 1400000000,
                worldRank: 2,
                density: 145
            }
        },
        
        // ========== JAPAN ==========
        japan: {
            name: "Japan",
            officialName: "Japan",
            nativeName: "日本国 (Nihon-koku)",
            flag: "🇯🇵",
            continent: "Asia",
            region: "East Asia",
            
            basic: {
                capital: "Tokyo",
                largestCity: "Tokyo",
                officialLanguages: ["Japanese"],
                currency: { name: "Japanese Yen", code: "JPY", symbol: "¥" },
                callingCode: "+81",
                internetTLD: ".jp",
                drivingSide: "left"
            },
            
            geography: {
                totalArea: 377975,
                worldRank: 62,
                coastline: 29751,
                islands: 6852,
                mainIslands: ["Honshu", "Hokkaido", "Kyushu", "Shikoku"],
                highestPoint: { name: "Mount Fuji", height: 3776 },
                tectonicActivity: "High (Ring of Fire)"
            },
            
            climate: {
                type: "Temperate to Subtropical",
                seasons: ["Spring", "Summer (Rainy)", "Autumn", "Winter"]
            },
            
            population: {
                total: 125000000,
                worldRank: 11,
                density: 330
            }
        }
        
        // ADD MORE COUNTRIES HERE...
        // Copy the structure above and fill in the data
    },

    // ==========================================
    // PHYSICAL FEATURES DATA
    // ==========================================
    mountains: [
        { name: "Mount Everest", height: 8849, range: "Himalayas", countries: ["Nepal", "China"] },
        { name: "K2", height: 8611, range: "Karakoram", countries: ["Pakistan", "China"] },
        { name: "Kanchenjunga", height: 8586, range: "Himalayas", countries: ["Nepal", "India"] },
        { name: "Lhotse", height: 8516, range: "Himalayas", countries: ["Nepal", "China"] },
        { name: "Makalu", height: 8485, range: "Himalayas", countries: ["Nepal", "China"] }
        // Add more...
    ],
    
    rivers: [
        { name: "Nile", length: 6650, continent: "Africa", countries: ["Uganda", "Sudan", "Egypt"] },
        { name: "Amazon", length: 6400, continent: "South America", countries: ["Brazil", "Peru"] },
        { name: "Yangtze", length: 6300, continent: "Asia", countries: ["China"] },
        { name: "Mississippi-Missouri", length: 6275, continent: "North America", countries: ["USA"] },
        { name: "Yenisei", length: 5539, continent: "Asia", countries: ["Russia", "Mongolia"] }
        // Add more...
    ],
    
