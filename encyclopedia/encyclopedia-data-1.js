/**
 * GeoVerse Encyclopedia - Country Data File 1
 * Contains: 20 Major World Countries with Detailed Information
 * Version: 1.0
 * Last Updated: 2024
 */

const CountryData1 = [
    // 1. INDIA
    {
        id: "IND",
        name: "India",
        officialName: "Republic of India",
        flag: "https://flagcdn.com/w320/in.png",
        coatOfArms: "https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg",
        
        images: {
            hero: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1920&q=80"
        },

        basic: {
            capital: "New Delhi",
            continent: "Asia",
            region: "South Asia",
            subregion: "Indian Subcontinent",
            population: 1428627663,
            area: 3287263,
            populationDensity: 435,
            independence: "1947",
            callingCode: "+91",
            tld: ".in",
            drivingSide: "Left",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [20.5937, 78.9629],
            timezone: "UTC+5:30 (IST)",
            neighbors: ["Pakistan", "China", "Nepal", "Bhutan", "Bangladesh", "Myanmar"],
            borders: 15106.7,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Federal Parliamentary Democratic Republic",
            headOfState: "President Droupadi Murmu",
            headOfGovernment: "Prime Minister Narendra Modi",
            legislature: "Parliament (Rajya Sabha & Lok Sabha)",
            legalSystem: "Common Law based on English model",
            states: 28,
            unionTerritories: 8,
            largestCity: "Mumbai",
            organizations: ["UN", "WTO", "G20", "BRICS", "Commonwealth", "SCO", "SAARC", "NAM"]
        },

        economy: {
            gdp: "$3.73 Trillion",
            gdpPPP: "$13.03 Trillion",
            gdpPerCapita: "$2,601",
            gdpRank: "#5",
            gdpGrowth: "7.2%",
            currency: "Indian Rupee",
            currencyCode: "INR",
            currencySymbol: "₹",
            inflation: "5.4%",
            unemployment: "7.7%",
            majorSectors: ["Services (53%)", "Industry (26%)", "Agriculture (21%)"],
            industries: ["IT & Software", "Pharmaceuticals", "Textiles", "Steel", "Automobiles", "Chemicals"],
            exports: ["Refined Petroleum", "Diamonds", "Pharmaceuticals", "Rice", "Jewelry", "Cars"],
            imports: ["Crude Petroleum", "Gold", "Coal", "Electronics", "Machinery"]
        },

        geography: {
            climate: "Diverse: Tropical Monsoon to Alpine",
            avgTemperature: "25°C (varies by region)",
            annualRainfall: "1,170 mm",
            highestPoint: "Kangchenjunga (8,586 m)",
            lowestPoint: "Kuttanad (-2.2 m)",
            coastline: "7,516 km",
            forestCover: "24.62%",
            arableLand: "52.8%",
            terrain: "Himalayan mountains, Indo-Gangetic plains, Deccan plateau, coastal regions",
            seasons: ["Winter (Dec-Feb)", "Summer (Mar-May)", "Monsoon (Jun-Sep)", "Post-Monsoon (Oct-Nov)"],
            naturalResources: ["Coal", "Iron Ore", "Manganese", "Mica", "Bauxite", "Rare Earth Elements", "Titanium", "Natural Gas"]
        },

        geography_links: {
            rivers: ["Ganges", "Brahmaputra", "Yamuna", "Godavari", "Krishna", "Narmada", "Indus", "Kaveri", "Mahanadi", "Tapti"],
            mountains: ["Himalayas", "Western Ghats", "Eastern Ghats", "Aravalli Range", "Vindhya Range", "Satpura Range", "Karakoram"],
            deserts: ["Thar Desert", "Rann of Kutch"],
            forests: ["Sundarbans", "Western Ghats Rainforests", "Northeast Rainforests", "Gir Forest", "Jim Corbett"],
            oceans: ["Indian Ocean", "Arabian Sea", "Bay of Bengal"]
        },

        culture: {
            officialLanguages: ["Hindi", "English"],
            languages: ["Hindi", "Bengali", "Telugu", "Marathi", "Tamil", "Urdu", "Gujarati", "Kannada", "Malayalam", "Odia", "Punjabi", "Sanskrit"],
            religions: ["Hinduism (79.8%)", "Islam (14.2%)", "Christianity (2.3%)", "Sikhism (1.7%)", "Buddhism (0.7%)", "Jainism (0.4%)"],
            heritageSites: ["Taj Mahal", "Qutub Minar", "Red Fort", "Ajanta Caves", "Ellora Caves", "Hampi", "Khajuraho", "Mahabodhi Temple", "Kaziranga", "Western Ghats", "Great Himalayan National Park"],
            festivals: ["Diwali", "Holi", "Eid", "Christmas", "Durga Puja", "Ganesh Chaturthi", "Onam", "Pongal", "Navratri", "Raksha Bandhan"],
            cuisine: ["Biryani", "Butter Chicken", "Dosa", "Samosa", "Paneer Tikka", "Rogan Josh", "Tandoori Chicken", "Pav Bhaji", "Chole Bhature"],
            arts: ["Bharatanatyam", "Kathak", "Odissi", "Kathakali", "Classical Music", "Bollywood", "Miniature Painting"],
            sports: ["Cricket", "Hockey", "Kabaddi", "Badminton", "Football", "Wrestling", "Chess"]
        },

        symbols: {
            bird: "Indian Peacock",
            animal: "Bengal Tiger",
            flower: "Lotus",
            tree: "Banyan",
            fruit: "Mango",
            sport: "Hockey",
            anthem: "Jana Gana Mana",
            motto: "Satyameva Jayate (Truth Alone Triumphs)"
        },

        demographics: {
            lifeExpectancy: 70.19,
            literacyRate: "77.7%",
            urbanPopulation: "35.4%",
            medianAge: 28.7,
            populationGrowth: "0.81%",
            fertilityRate: 2.0,
            sexRatio: "108.18 males per 100 females",
            religions: {
                hinduism: 79.8,
                islam: 14.2,
                christianity: 2.3,
                sikhism: 1.7,
                buddhism: 0.7,
                jainism: 0.4
            }
        },

        history: {
            timeline: [
                { year: "2500 BCE", title: "Indus Valley Civilization", description: "One of the world's oldest urban civilizations flourished in the region" },
                { year: "1500 BCE", title: "Vedic Period", description: "Composition of the Vedas and establishment of Hindu traditions" },
                { year: "321 BCE", title: "Maurya Empire", description: "First major empire under Chandragupta Maurya, expanded by Ashoka" },
                { year: "320 CE", title: "Gupta Empire", description: "Golden Age of India with advances in science, art, and literature" },
                { year: "1526", title: "Mughal Empire", description: "Babur established the Mughal dynasty, leading to centuries of rule" },
                { year: "1857", title: "First War of Independence", description: "Major uprising against British East India Company" },
                { year: "1947", title: "Independence", description: "India gained independence from British rule on August 15" },
                { year: "1950", title: "Republic Day", description: "Constitution came into effect, India became a republic on January 26" },
                { year: "1991", title: "Economic Liberalization", description: "Major economic reforms opened India to global markets" }
            ],
            keyFacts: [
                "World's largest democracy with over 900 million eligible voters",
                "Birthplace of four major religions: Hinduism, Buddhism, Jainism, and Sikhism",
                "Chess (Chaturanga) was invented in India around the 6th century",
                "India has the world's largest postal network with over 150,000 post offices"
            ],
            notableFigures: ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Vallabhbhai Patel", "B.R. Ambedkar", "Subhas Chandra Bose", "Rabindranath Tagore"]
        },

        disputes: [
            { name: "Kashmir Conflict", description: "Territorial dispute with Pakistan over Kashmir region", type: "Border" },
            { name: "Aksai Chin", description: "Territory claimed by India, administered by China", type: "Border" },
            { name: "Arunachal Pradesh", description: "State claimed by China as 'South Tibet'", type: "Border" }
        ],

        quickFacts: [
            { icon: "flag", title: "Independence Day", text: "August 15, 1947" },
            { icon: "landmark", title: "Republic Day", text: "January 26, 1950" },
            { icon: "building", title: "Parliament", text: "Bicameral (Rajya Sabha + Lok Sabha)" },
            { icon: "globe", title: "Time Zone", text: "IST (UTC+5:30)" },
            { icon: "car", title: "Driving Side", text: "Left" },
            { icon: "plug", title: "Electricity", text: "230V, 50Hz, Type C/D/M plugs" },
            { icon: "phone", title: "Calling Code", text: "+91" },
            { icon: "wifi", title: "Internet TLD", text: ".in" },
            { icon: "plane", title: "Major Airports", text: "Delhi, Mumbai, Bangalore, Chennai" },
            { icon: "train", title: "Railway Network", text: "World's 4th largest (68,000 km)" }
        ]
    },

    // 2. UNITED STATES
    {
        id: "USA",
        name: "United States",
        officialName: "United States of America",
        flag: "https://flagcdn.com/w320/us.png",
        coatOfArms: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Great_Seal_of_the_United_States_%28obverse%29.svg",
        
        images: {
            hero: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1920&q=80"
        },

        basic: {
            capital: "Washington, D.C.",
            continent: "North America",
            region: "North America",
            subregion: "Northern America",
            population: 339996563,
            area: 9833517,
            populationDensity: 36,
            independence: "1776",
            callingCode: "+1",
            tld: ".us",
            drivingSide: "Right",
            electricity: "120V, 60Hz"
        },

        location: {
            coordinates: [37.0902, -95.7129],
            timezone: "UTC-5 to UTC-10 (Multiple)",
            neighbors: ["Canada", "Mexico"],
            borders: 12191,
            hemispheres: ["Northern", "Western"]
        },

        political: {
            government: "Federal Presidential Constitutional Republic",
            headOfState: "President Joe Biden",
            headOfGovernment: "President Joe Biden",
            legislature: "Congress (Senate & House of Representatives)",
            legalSystem: "Common Law based on English model",
            states: 50,
            territories: 5,
            largestCity: "New York City",
            organizations: ["UN", "NATO", "G7", "G20", "OECD", "WTO", "USMCA", "APEC"]
        },

        economy: {
            gdp: "$27.36 Trillion",
            gdpPPP: "$27.36 Trillion",
            gdpPerCapita: "$80,412",
            gdpRank: "#1",
            gdpGrowth: "2.5%",
            currency: "United States Dollar",
            currencyCode: "USD",
            currencySymbol: "$",
            inflation: "3.4%",
            unemployment: "3.7%",
            majorSectors: ["Services (80%)", "Industry (19%)", "Agriculture (1%)"],
            industries: ["Technology", "Finance", "Healthcare", "Aerospace", "Automotive", "Entertainment", "Energy"],
            exports: ["Refined Petroleum", "Crude Petroleum", "Cars", "Integrated Circuits", "Aircraft"],
            imports: ["Cars", "Crude Petroleum", "Computers", "Broadcasting Equipment", "Pharmaceuticals"]
        },

        geography: {
            climate: "Diverse: Arctic to Tropical",
            avgTemperature: "12.5°C (varies greatly)",
            annualRainfall: "715 mm",
            highestPoint: "Denali (6,190 m)",
            lowestPoint: "Badwater Basin (-86 m)",
            coastline: "19,924 km",
            forestCover: "33.9%",
            arableLand: "16.8%",
            terrain: "Great Plains, Rocky Mountains, coastal lowlands, deserts, forests",
            seasons: ["Spring (Mar-May)", "Summer (Jun-Aug)", "Fall (Sep-Nov)", "Winter (Dec-Feb)"],
            naturalResources: ["Coal", "Copper", "Lead", "Molybdenum", "Phosphates", "Uranium", "Bauxite", "Gold", "Iron", "Natural Gas", "Petroleum", "Timber"]
        },

        geography_links: {
            rivers: ["Mississippi", "Missouri", "Colorado", "Columbia", "Rio Grande", "Ohio", "Arkansas", "Snake River"],
            mountains: ["Rocky Mountains", "Appalachian Mountains", "Sierra Nevada", "Cascade Range", "Alaska Range"],
            deserts: ["Mojave Desert", "Sonoran Desert", "Chihuahuan Desert", "Great Basin Desert"],
            forests: ["Tongass National Forest", "Yellowstone", "Sequoia", "Redwood", "Olympic Rainforest"],
            oceans: ["Atlantic Ocean", "Pacific Ocean", "Gulf of Mexico", "Arctic Ocean"]
        },

        culture: {
            officialLanguages: ["English (de facto)"],
            languages: ["English", "Spanish", "Chinese", "Tagalog", "Vietnamese", "Arabic", "French", "Korean"],
            religions: ["Christianity (65%)", "Unaffiliated (26%)", "Judaism (2%)", "Islam (1%)", "Buddhism (1%)", "Hinduism (1%)"],
            heritageSites: ["Statue of Liberty", "Grand Canyon", "Yellowstone", "Independence Hall", "Everglades", "Yosemite", "Mesa Verde", "Hawaii Volcanoes"],
            festivals: ["Independence Day", "Thanksgiving", "Christmas", "Halloween", "Easter", "Memorial Day", "Labor Day"],
            cuisine: ["Hamburgers", "Hot Dogs", "BBQ", "Apple Pie", "Fried Chicken", "Pizza (American style)", "Clam Chowder"],
            arts: ["Hollywood", "Jazz", "Blues", "Hip Hop", "Broadway", "Rock and Roll", "Pop Art"],
            sports: ["American Football", "Basketball", "Baseball", "Ice Hockey", "Soccer", "Golf", "Tennis"]
        },

        symbols: {
            bird: "Bald Eagle",
            animal: "American Bison",
            flower: "Rose",
            tree: "Oak",
            sport: "Baseball (de facto)",
            anthem: "The Star-Spangled Banner",
            motto: "In God We Trust"
        },

        demographics: {
            lifeExpectancy: 78.79,
            literacyRate: "99%",
            urbanPopulation: "83.1%",
            medianAge: 38.5,
            populationGrowth: "0.5%",
            fertilityRate: 1.64
        },

        history: {
            timeline: [
                { year: "1776", title: "Declaration of Independence", description: "Thirteen colonies declared independence from Great Britain" },
                { year: "1787", title: "Constitution Adopted", description: "U.S. Constitution was written and signed in Philadelphia" },
                { year: "1861-1865", title: "Civil War", description: "War between Union and Confederate states over slavery and states' rights" },
                { year: "1865", title: "Abolition of Slavery", description: "13th Amendment abolished slavery throughout the United States" },
                { year: "1920", title: "Women's Suffrage", description: "19th Amendment granted women the right to vote" },
                { year: "1941-1945", title: "World War II", description: "U.S. involvement following Pearl Harbor attack" },
                { year: "1969", title: "Moon Landing", description: "Apollo 11 mission landed first humans on the Moon" },
                { year: "1991", title: "End of Cold War", description: "Dissolution of Soviet Union marked end of Cold War era" }
            ],
            notableFigures: ["George Washington", "Abraham Lincoln", "Benjamin Franklin", "Thomas Jefferson", "Martin Luther King Jr.", "Franklin D. Roosevelt"]
        },

        disputes: [],

        quickFacts: [
            { icon: "flag", title: "Independence Day", text: "July 4, 1776" },
            { icon: "landmark", title: "Constitution Day", text: "September 17, 1787" },
            { icon: "globe", title: "Time Zones", text: "6 (Continental: 4)" },
            { icon: "building", title: "States", text: "50 + D.C. + 5 Territories" }
        ]
    },

    // 3. CHINA
    {
        id: "CHN",
        name: "China",
        officialName: "People's Republic of China",
        flag: "https://flagcdn.com/w320/cn.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?w=1920&q=80"
        },

        basic: {
            capital: "Beijing",
            continent: "Asia",
            region: "East Asia",
            subregion: "Eastern Asia",
            population: 1425671352,
            area: 9596960,
            populationDensity: 153,
            independence: "1949 (PRC)",
            callingCode: "+86",
            tld: ".cn",
            drivingSide: "Right",
            electricity: "220V, 50Hz"
        },

        location: {
            coordinates: [35.8617, 104.1954],
            timezone: "UTC+8 (CST)",
            neighbors: ["Russia", "Mongolia", "North Korea", "Vietnam", "Laos", "Myanmar", "Bhutan", "Nepal", "India", "Pakistan", "Afghanistan", "Tajikistan", "Kyrgyzstan", "Kazakhstan"],
            borders: 22117,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary One-Party Socialist Republic",
            headOfState: "President Xi Jinping",
            headOfGovernment: "Premier Li Qiang",
            legislature: "National People's Congress",
            legalSystem: "Civil Law with Socialist influences",
            states: 23,
            provinces: 23,
            autonomousRegions: 5,
            municipalities: 4,
            largestCity: "Shanghai",
            organizations: ["UN (Security Council)", "WTO", "BRICS", "SCO", "G20", "APEC"]
        },

        economy: {
            gdp: "$17.96 Trillion",
            gdpPPP: "$31.03 Trillion",
            gdpPerCapita: "$12,614",
            gdpRank: "#2",
            gdpGrowth: "5.2%",
            currency: "Renminbi",
            currencyCode: "CNY",
            currencySymbol: "¥",
            inflation: "0.2%",
            unemployment: "5.2%",
            majorSectors: ["Industry (39%)", "Services (53%)", "Agriculture (8%)"],
            industries: ["Manufacturing", "Mining", "Steel", "Aluminum", "Textiles", "Electronics", "Automobiles"],
            exports: ["Broadcasting Equipment", "Computers", "Office Machine Parts", "Telephones", "Integrated Circuits"],
            imports: ["Crude Petroleum", "Integrated Circuits", "Iron Ore", "Cars", "Gold"]
        },

        geography: {
            climate: "Diverse: Tropical to Subarctic",
            avgTemperature: "7°C (varies by region)",
            annualRainfall: "644.5 mm",
            highestPoint: "Mount Everest (8,849 m, shared with Nepal)",
            lowestPoint: "Turpan Pendi (-154 m)",
            coastline: "14,500 km",
            forestCover: "23%",
            arableLand: "11.3%",
            terrain: "Mountains, plateaus, deserts, plains, deltas",
            seasons: ["Spring", "Summer", "Autumn", "Winter"],
            naturalResources: ["Coal", "Iron Ore", "Petroleum", "Natural Gas", "Mercury", "Tin", "Tungsten", "Rare Earths"]
        },

        geography_links: {
            rivers: ["Yangtze River", "Yellow River", "Pearl River", "Mekong", "Brahmaputra"],
            mountains: ["Himalayas", "Kunlun Mountains", "Tian Shan", "Altai Mountains"],
            deserts: ["Gobi Desert", "Taklamakan Desert"],
            forests: ["Changbai Mountains", "Hainan Rainforest"],
            oceans: ["Pacific Ocean", "South China Sea", "East China Sea", "Yellow Sea"]
        },

        culture: {
            officialLanguages: ["Standard Chinese (Mandarin)"],
            languages: ["Mandarin", "Cantonese", "Wu", "Min", "Hakka", "Tibetan", "Uyghur", "Mongolian"],
            religions: ["Buddhism", "Taoism", "Folk religions", "Christianity", "Islam"],
            heritageSites: ["Great Wall of China", "Forbidden City", "Terracotta Army", "Summer Palace", "Temple of Heaven", "Potala Palace", "Mogao Caves"],
            festivals: ["Chinese New Year", "Mid-Autumn Festival", "Dragon Boat Festival", "Qingming Festival", "Lantern Festival"],
            cuisine: ["Peking Duck", "Dim Sum", "Kung Pao Chicken", "Mapo Tofu", "Hot Pot", "Dumplings"],
            arts: ["Calligraphy", "Painting", "Peking Opera", "Silk Weaving", "Porcelain"],
            sports: ["Table Tennis", "Badminton", "Basketball", "Football", "Martial Arts"]
        },

        symbols: {
            bird: "Red-crowned Crane",
            animal: "Giant Panda",
            flower: "Plum Blossom",
            tree: "Ginkgo",
            anthem: "March of the Volunteers",
            motto: "Serve the People"
        },

        demographics: {
            lifeExpectancy: 78.2,
            literacyRate: "96.8%",
            urbanPopulation: "64.7%",
            medianAge: 38.4
        },

        history: {
            timeline: [
                { year: "2100 BCE", title: "Xia Dynasty", description: "First dynasty in traditional Chinese history" },
                { year: "221 BCE", title: "Qin Dynasty Unification", description: "China unified under Emperor Qin Shi Huang" },
                { year: "206 BCE", title: "Han Dynasty", description: "Golden age of Chinese civilization" },
                { year: "1271", title: "Mongol Rule", description: "Yuan Dynasty established by Kublai Khan" },
                { year: "1644", title: "Qing Dynasty", description: "Last imperial dynasty of China" },
                { year: "1912", title: "Republic of China", description: "End of imperial rule, republic established" },
                { year: "1949", title: "People's Republic", description: "PRC established under Mao Zedong" },
                { year: "1978", title: "Economic Reform", description: "Deng Xiaoping initiated economic reforms" }
            ],
            notableFigures: ["Confucius", "Qin Shi Huang", "Sun Yat-sen", "Mao Zedong", "Deng Xiaoping"]
        },

        disputes: [
            { name: "South China Sea", description: "Territorial disputes with multiple Southeast Asian nations", type: "Maritime" },
            { name: "Taiwan", description: "Considers Taiwan a breakaway province", type: "Political" }
        ],

        quickFacts: [
            { icon: "users", title: "World's Most Populous", text: "1.4+ Billion People" },
            { icon: "wall", title: "Great Wall", text: "21,196 km total length" },
            { icon: "language", title: "Writing System", text: "Chinese Characters (50,000+)" }
        ]
    },

    // 4. RUSSIA
    {
        id: "RUS",
        name: "Russia",
        officialName: "Russian Federation",
        flag: "https://flagcdn.com/w320/ru.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1513326738677-b964603b136d?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1547448415-e9f5b28e570d?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1520106212299-d99c443e4568?w=1920&q=80"
        },

        basic: {
            capital: "Moscow",
            continent: "Europe/Asia",
            region: "Eastern Europe",
            subregion: "Eastern Europe",
            population: 144444359,
            area: 17098242,
            populationDensity: 9,
            independence: "1991 (from USSR)",
            callingCode: "+7",
            tld: ".ru",
            drivingSide: "Right",
            electricity: "220V, 50Hz"
        },

        location: {
            coordinates: [61.5240, 105.3188],
            timezone: "UTC+2 to UTC+12 (11 time zones)",
            neighbors: ["Norway", "Finland", "Estonia", "Latvia", "Lithuania", "Poland", "Belarus", "Ukraine", "Georgia", "Azerbaijan", "Kazakhstan", "China", "Mongolia", "North Korea"],
            borders: 22407,
            hemispheres: ["Northern", "Eastern/Western"]
        },

        political: {
            government: "Federal Semi-Presidential Republic",
            headOfState: "President Vladimir Putin",
            headOfGovernment: "Prime Minister Mikhail Mishustin",
            legislature: "Federal Assembly (Federation Council & State Duma)",
            legalSystem: "Civil Law",
            states: 85,
            federalSubjects: 85,
            largestCity: "Moscow",
            organizations: ["UN (Security Council)", "BRICS", "SCO", "CIS", "CSTO", "G20"]
        },

        economy: {
            gdp: "$1.86 Trillion",
            gdpPPP: "$4.99 Trillion",
            gdpPerCapita: "$12,895",
            gdpRank: "#11",
            gdpGrowth: "3.6%",
            currency: "Russian Ruble",
            currencyCode: "RUB",
            currencySymbol: "₽",
            inflation: "7.4%",
            unemployment: "2.9%",
            majorSectors: ["Services (56%)", "Industry (33%)", "Agriculture (4%)"],
            industries: ["Oil & Gas", "Mining", "Steel", "Machinery", "Chemicals", "Forestry"],
            exports: ["Crude Petroleum", "Refined Petroleum", "Natural Gas", "Coal", "Wheat"],
            imports: ["Cars", "Packaged Medicines", "Vehicle Parts", "Broadcasting Equipment", "Computers"]
        },

        geography: {
            climate: "Continental to Arctic",
            avgTemperature: "-5.5°C",
            annualRainfall: "460 mm",
            highestPoint: "Mount Elbrus (5,642 m)",
            lowestPoint: "Caspian Sea (-28 m)",
            coastline: "37,653 km",
            forestCover: "49.4%",
            arableLand: "7.4%",
            terrain: "Broad plains, tundra, mountains, forests",
            seasons: ["Winter (Nov-Mar)", "Spring (Apr-May)", "Summer (Jun-Aug)", "Autumn (Sep-Oct)"],
            naturalResources: ["Oil", "Natural Gas", "Coal", "Timber", "Rare Metals", "Diamonds"]
        },

        geography_links: {
            rivers: ["Volga", "Ob", "Yenisei", "Lena", "Amur", "Don"],
            mountains: ["Ural Mountains", "Caucasus", "Altai Mountains", "Kamchatka"],
            deserts: [],
            forests: ["Taiga (Siberian Forest)", "Far East Forests"],
            oceans: ["Arctic Ocean", "Pacific Ocean", "Baltic Sea", "Black Sea", "Caspian Sea"]
        },

        culture: {
            officialLanguages: ["Russian"],
            languages: ["Russian", "Tatar", "Chechen", "Bashkir", "Ukrainian", "Chuvash"],
            religions: ["Orthodox Christianity (71%)", "Islam (10%)", "Other (19%)"],
            heritageSites: ["Kremlin and Red Square", "Saint Petersburg Historic Centre", "Kizhi Pogost", "Lake Baikal", "Volcanoes of Kamchatka"],
            festivals: ["New Year", "Maslenitsa", "Victory Day", "Russia Day"],
            cuisine: ["Borscht", "Pelmeni", "Beef Stroganoff", "Blini", "Pirogi", "Caviar"],
            arts: ["Ballet", "Classical Music", "Literature", "Icon Painting"],
            sports: ["Ice Hockey", "Football", "Figure Skating", "Gymnastics", "Chess"]
        },

        symbols: {
            bird: "Double-Headed Eagle (Coat of Arms)",
            animal: "Brown Bear",
            flower: "Chamomile",
            tree: "Birch",
            anthem: "State Anthem of the Russian Federation"
        },

        demographics: {
            lifeExpectancy: 72.6,
            literacyRate: "99.7%",
            urbanPopulation: "74.8%",
            medianAge: 40.3
        },

        history: {
            timeline: [
                { year: "862", title: "Kievan Rus", description: "First major East Slavic state established" },
                { year: "1547", title: "Tsardom of Russia", description: "Ivan IV crowned as first Tsar" },
                { year: "1721", title: "Russian Empire", description: "Peter the Great proclaimed Russian Empire" },
                { year: "1917", title: "Russian Revolution", description: "Bolshevik Revolution ended Tsarist rule" },
                { year: "1922", title: "Soviet Union", description: "USSR formed, world's first socialist state" },
                { year: "1991", title: "Russian Federation", description: "Dissolution of USSR, modern Russia formed" }
            ],
            notableFigures: ["Peter the Great", "Catherine the Great", "Leo Tolstoy", "Fyodor Dostoevsky", "Yuri Gagarin"]
        },

        disputes: [
            { name: "Crimea", description: "Annexed from Ukraine in 2014, internationally disputed", type: "Border" },
            { name: "Kuril Islands", description: "Dispute with Japan over southern Kuril Islands", type: "Border" }
        ],

        quickFacts: [
            { icon: "expand", title: "Largest Country", text: "17.1 million km² (11% of world's landmass)" },
            { icon: "clock", title: "Time Zones", text: "11 (most of any country)" },
            { icon: "water", title: "Lake Baikal", text: "World's deepest lake (1,642 m)" }
        ]
    },

    // 5. UNITED KINGDOM
    {
        id: "GBR",
        name: "United Kingdom",
        officialName: "United Kingdom of Great Britain and Northern Ireland",
        flag: "https://flagcdn.com/w320/gb.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1483381616603-8dde934da56f?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=1920&q=80"
        },

        basic: {
            capital: "London",
            continent: "Europe",
            region: "Northern Europe",
            subregion: "British Isles",
            population: 67736802,
            area: 242495,
            populationDensity: 281,
            independence: "N/A (Historical nation)",
            callingCode: "+44",
            tld: ".uk",
            drivingSide: "Left",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [55.3781, -3.4360],
            timezone: "UTC+0 (GMT) / UTC+1 (BST)",
            neighbors: ["Ireland"],
            borders: 443,
            hemispheres: ["Northern", "Western"]
        },

        political: {
            government: "Unitary Parliamentary Constitutional Monarchy",
            headOfState: "King Charles III",
            headOfGovernment: "Prime Minister Keir Starmer",
            legislature: "Parliament (House of Lords & House of Commons)",
            legalSystem: "Common Law",
            states: 4,
            countries: 4,
            nations: "England, Scotland, Wales, Northern Ireland",
            largestCity: "London",
            organizations: ["UN (Security Council)", "NATO", "G7", "G20", "Commonwealth", "OECD", "WTO"]
        },

        economy: {
            gdp: "$3.34 Trillion",
            gdpPPP: "$3.75 Trillion",
            gdpPerCapita: "$49,360",
            gdpRank: "#6",
            gdpGrowth: "0.1%",
            currency: "Pound Sterling",
            currencyCode: "GBP",
            currencySymbol: "£",
            inflation: "4.0%",
            unemployment: "4.2%",
            majorSectors: ["Services (80%)", "Industry (19%)", "Agriculture (1%)"],
            industries: ["Finance", "Insurance", "Aerospace", "Pharmaceuticals", "Automotive", "Technology"],
            exports: ["Cars", "Gold", "Gas Turbines", "Crude Petroleum", "Pharmaceuticals"],
            imports: ["Cars", "Crude Petroleum", "Gold", "Refined Petroleum", "Broadcasting Equipment"]
        },

        geography: {
            climate: "Temperate Maritime",
            avgTemperature: "10°C",
            annualRainfall: "1,154 mm",
            highestPoint: "Ben Nevis (1,345 m)",
            lowestPoint: "The Fens (-4 m)",
            coastline: "12,429 km",
            forestCover: "13%",
            arableLand: "25%",
            terrain: "Hills, lowlands, highlands, coastal cliffs",
            seasons: ["Spring (Mar-May)", "Summer (Jun-Aug)", "Autumn (Sep-Nov)", "Winter (Dec-Feb)"]
        },

        geography_links: {
            rivers: ["Thames", "Severn", "Trent", "Mersey", "Clyde"],
            mountains: ["Scottish Highlands", "Pennines", "Lake District", "Snowdonia", "Brecon Beacons"],
            deserts: [],
            forests: ["Sherwood Forest", "New Forest", "Forest of Dean"],
            oceans: ["Atlantic Ocean", "North Sea", "Irish Sea", "English Channel"]
        },

        culture: {
            officialLanguages: ["English"],
            languages: ["English", "Welsh", "Scottish Gaelic", "Irish"],
            religions: ["Christianity (46%)", "No Religion (37%)", "Islam (6.5%)", "Hinduism (1.7%)"],
            heritageSites: ["Stonehenge", "Tower of London", "Westminster", "Edinburgh Old Town", "Giant's Causeway", "Bath"],
            festivals: ["Christmas", "Easter", "Guy Fawkes Night", "St. Patrick's Day", "Burns Night"],
            cuisine: ["Fish and Chips", "Full English Breakfast", "Sunday Roast", "Shepherd's Pie", "Haggis"],
            arts: ["Shakespeare", "The Beatles", "British Literature", "West End Theatre"],
            sports: ["Football", "Cricket", "Rugby", "Tennis", "Golf"]
        },

        symbols: {
            bird: "Robin",
            animal: "Lion (England), Unicorn (Scotland)",
            flower: "Tudor Rose (England), Thistle (Scotland), Daffodil (Wales), Shamrock (N. Ireland)",
            anthem: "God Save the King",
            motto: "Dieu et mon droit (God and my right)"
        },

        demographics: {
            lifeExpectancy: 81.77,
            literacyRate: "99%",
            urbanPopulation: "84.2%",
            medianAge: 40.6
        },

        history: {
            timeline: [
                { year: "43 CE", title: "Roman Britain", description: "Roman conquest of Britain" },
                { year: "1066", title: "Norman Conquest", description: "William the Conqueror invaded England" },
                { year: "1215", title: "Magna Carta", description: "Foundation of constitutional rights" },
                { year: "1707", title: "Acts of Union", description: "Union of England and Scotland" },
                { year: "1837-1901", title: "Victorian Era", description: "British Empire at its height" },
                { year: "1945", title: "Post-War Era", description: "Decline of British Empire" },
                { year: "2020", title: "Brexit", description: "UK left the European Union" }
            ],
            notableFigures: ["Queen Victoria", "Winston Churchill", "Isaac Newton", "Charles Darwin", "William Shakespeare"]
        },

        disputes: [
            { name: "Gibraltar", description: "Disputed territory with Spain", type: "Border" },
            { name: "Falkland Islands", description: "Disputed with Argentina", type: "Border" }
        ],

        quickFacts: [
            { icon: "crown", title: "Monarchy", text: "World's oldest continuous monarchy" },
            { icon: "building", title: "Parliament", text: "Mother of Parliaments (since 1215)" },
            { icon: "globe", title: "Commonwealth", text: "Head of 56 nations" }
        ]
    },

    // 6. GERMANY
    {
        id: "DEU",
        name: "Germany",
        officialName: "Federal Republic of Germany",
        flag: "https://flagcdn.com/w320/de.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1560969184-10fe8719e047?w=1920&q=80"
        },

        basic: {
            capital: "Berlin",
            continent: "Europe",
            region: "Western Europe",
            subregion: "Central Europe",
            population: 83294633,
            area: 357114,
            populationDensity: 240,
            independence: "1990 (Reunification)",
            callingCode: "+49",
            tld: ".de",
            drivingSide: "Right",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [51.1657, 10.4515],
            timezone: "UTC+1 (CET) / UTC+2 (CEST)",
            neighbors: ["Denmark", "Poland", "Czech Republic", "Austria", "Switzerland", "France", "Luxembourg", "Belgium", "Netherlands"],
            borders: 3714,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Federal Parliamentary Republic",
            headOfState: "President Frank-Walter Steinmeier",
            headOfGovernment: "Chancellor Olaf Scholz",
            legislature: "Bundestag and Bundesrat",
            legalSystem: "Civil Law",
            states: 16,
            largestCity: "Berlin",
            organizations: ["UN", "EU", "NATO", "G7", "G20", "OECD", "WTO"]
        },

        economy: {
            gdp: "$4.43 Trillion",
            gdpPPP: "$5.31 Trillion",
            gdpPerCapita: "$53,179",
            gdpRank: "#3",
            gdpGrowth: "-0.3%",
            currency: "Euro",
            currencyCode: "EUR",
            currencySymbol: "€",
            inflation: "5.9%",
            unemployment: "5.7%",
            majorSectors: ["Services (69%)", "Industry (30%)", "Agriculture (1%)"],
            industries: ["Automobiles", "Machinery", "Chemicals", "Electronics", "Pharmaceuticals"],
            exports: ["Cars", "Vehicle Parts", "Packaged Medicines", "Aircraft Parts", "Medical Instruments"],
            imports: ["Cars", "Crude Petroleum", "Vehicle Parts", "Refined Petroleum", "Computers"]
        },

        geography: {
            climate: "Temperate and Marine",
            avgTemperature: "9°C",
            annualRainfall: "700 mm",
            highestPoint: "Zugspitze (2,962 m)",
            lowestPoint: "Neuendorf bei Wilster (-3.5 m)",
            coastline: "2,389 km",
            forestCover: "32.7%",
            arableLand: "34%"
        },

        geography_links: {
            rivers: ["Rhine", "Danube", "Elbe", "Main", "Oder"],
            mountains: ["Alps", "Bavarian Alps", "Black Forest", "Harz Mountains"],
            deserts: [],
            forests: ["Black Forest", "Bavarian Forest", "Thuringian Forest"],
            oceans: ["North Sea", "Baltic Sea"]
        },

        culture: {
            officialLanguages: ["German"],
            languages: ["German", "Low German", "Sorbian", "Danish", "Frisian"],
            religions: ["Christianity (53%)", "No Religion (42%)", "Islam (4%)"],
            heritageSites: ["Cologne Cathedral", "Neuschwanstein Area", "Berlin Museums", "Wadden Sea", "Classical Weimar"],
            festivals: ["Oktoberfest", "Christmas Markets", "Karneval", "Easter"],
            cuisine: ["Bratwurst", "Sauerkraut", "Pretzels", "Schnitzel", "Beer"],
            arts: ["Classical Music (Bach, Beethoven)", "Bauhaus", "Expressionism"],
            sports: ["Football", "Handball", "Basketball", "Ice Hockey", "Motor Racing"]
        },

        symbols: {
            bird: "Golden Eagle",
            animal: "Black Eagle",
            flower: "Cornflower",
            tree: "Oak",
            anthem: "Deutschlandlied",
            motto: "Einigkeit und Recht und Freiheit (Unity and Justice and Freedom)"
        },

        demographics: {
            lifeExpectancy: 81.88,
            literacyRate: "99%",
            urbanPopulation: "77.5%",
            medianAge: 47.8
        },

        history: {
            timeline: [
                { year: "800", title: "Holy Roman Empire", description: "Charlemagne crowned Emperor" },
                { year: "1871", title: "German Unification", description: "German Empire proclaimed under Bismarck" },
                { year: "1918", title: "Weimar Republic", description: "End of WWI, republic established" },
                { year: "1933-1945", title: "Third Reich", description: "Nazi Germany period" },
                { year: "1949", title: "Division", description: "Germany split into East and West" },
                { year: "1990", title: "Reunification", description: "East and West Germany reunited" }
            ],
            notableFigures: ["Johann Wolfgang von Goethe", "Ludwig van Beethoven", "Albert Einstein", "Martin Luther"]
        },

        disputes: [],

        quickFacts: [
            { icon: "industry", title: "Economy", text: "Europe's largest economy" },
            { icon: "car", title: "Autobahn", text: "Famous highway with no speed limits" },
            { icon: "beer-mug", title: "Oktoberfest", text: "World's largest beer festival" }
        ]
    },

    // 7. FRANCE
    {
        id: "FRA",
        name: "France",
        officialName: "French Republic",
        flag: "https://flagcdn.com/w320/fr.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1549144511-f099e773c147?w=1920&q=80"
        },

        basic: {
            capital: "Paris",
            continent: "Europe",
            region: "Western Europe",
            subregion: "Western Europe",
            population: 64756584,
            area: 643801,
            populationDensity: 119,
            independence: "843 (Treaty of Verdun)",
            callingCode: "+33",
            tld: ".fr",
            drivingSide: "Right",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [46.2276, 2.2137],
            timezone: "UTC+1 (CET) / UTC+2 (CEST)",
            neighbors: ["Belgium", "Luxembourg", "Germany", "Switzerland", "Italy", "Monaco", "Spain", "Andorra"],
            borders: 2889,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Semi-Presidential Republic",
            headOfState: "President Emmanuel Macron",
            headOfGovernment: "Prime Minister Gabriel Attal",
            legislature: "Parliament (Senate & National Assembly)",
            legalSystem: "Civil Law",
            states: 18,
            regions: 18,
            departments: 101,
            largestCity: "Paris",
            organizations: ["UN (Security Council)", "EU", "NATO", "G7", "G20", "OECD", "WTO"]
        },

        economy: {
            gdp: "$2.92 Trillion",
            gdpPPP: "$3.87 Trillion",
            gdpPerCapita: "$44,408",
            gdpRank: "#7",
            gdpGrowth: "0.9%",
            currency: "Euro",
            currencyCode: "EUR",
            currencySymbol: "€",
            inflation: "4.9%",
            unemployment: "7.1%",
            majorSectors: ["Services (79%)", "Industry (19%)", "Agriculture (2%)"],
            industries: ["Aerospace", "Automobiles", "Luxury Goods", "Pharmaceuticals", "Wine", "Tourism"],
            exports: ["Aircraft", "Packaged Medicines", "Cars", "Gas Turbines", "Wine"],
            imports: ["Crude Petroleum", "Cars", "Refined Petroleum", "Natural Gas", "Packaged Medicines"]
        },

        geography: {
            climate: "Temperate (West), Mediterranean (South), Continental (East)",
            avgTemperature: "12.2°C",
            annualRainfall: "867 mm",
            highestPoint: "Mont Blanc (4,808 m)",
            lowestPoint: "Rhône River Delta (-2 m)",
            coastline: "4,853 km",
            forestCover: "31%",
            arableLand: "33.5%",
            terrain: "Plains, mountains, coastlines, river valleys",
            seasons: ["Spring (Mar-May)", "Summer (Jun-Aug)", "Autumn (Sep-Nov)", "Winter (Dec-Feb)"],
            naturalResources: ["Coal", "Iron Ore", "Bauxite", "Zinc", "Uranium", "Timber", "Fish"]
        },

        geography_links: {
            rivers: ["Seine", "Loire", "Rhône", "Garonne", "Rhine"],
            mountains: ["Alps", "Pyrenees", "Massif Central", "Vosges", "Jura"],
            deserts: [],
            forests: ["Forest of Fontainebleau", "Forest of Compiègne", "Landes Forest"],
            oceans: ["Atlantic Ocean", "Mediterranean Sea", "English Channel", "Bay of Biscay"]
        },

        culture: {
            officialLanguages: ["French"],
            languages: ["French", "Occitan", "Breton", "Alsatian", "Corsican", "Basque", "Catalan"],
            religions: ["Christianity (51%)", "No Religion (40%)", "Islam (6%)", "Judaism (1%)"],
            heritageSites: ["Palace of Versailles", "Mont-Saint-Michel", "Chartres Cathedral", "Loire Valley", "Pont du Gard", "Carcassonne", "Bordeaux", "Paris Banks of Seine"],
            festivals: ["Bastille Day", "Christmas", "Easter", "Cannes Film Festival", "Tour de France"],
            cuisine: ["Croissants", "Baguette", "Coq au Vin", "Ratatouille", "Crêpes", "Bouillabaisse", "French Onion Soup", "Macarons"],
            arts: ["Impressionism", "Literature (Hugo, Proust)", "Cinema", "Fashion", "Classical Music (Debussy)"],
            sports: ["Football", "Rugby", "Cycling", "Tennis", "Skiing", "Fencing"]
        },

        symbols: {
            bird: "Gallic Rooster",
            animal: "Gallic Rooster",
            flower: "Iris (Fleur-de-lis)",
            tree: "Oak",
            anthem: "La Marseillaise",
            motto: "Liberté, Égalité, Fraternité (Liberty, Equality, Fraternity)"
        },

        demographics: {
            lifeExpectancy: 82.72,
            literacyRate: "99%",
            urbanPopulation: "81.2%",
            medianAge: 42.3
        },

        history: {
            timeline: [
                { year: "843", title: "Treaty of Verdun", description: "Division of Carolingian Empire, emergence of France" },
                { year: "1066", title: "Norman Conquest", description: "Duke William conquered England" },
                { year: "1337-1453", title: "Hundred Years' War", description: "Conflict with England" },
                { year: "1789", title: "French Revolution", description: "End of absolute monarchy, republic established" },
                { year: "1804-1815", title: "Napoleonic Era", description: "Napoleon Bonaparte's rule and European conquests" },
                { year: "1870", title: "Third Republic", description: "Established after Franco-Prussian War" },
                { year: "1944", title: "Liberation", description: "Allied forces liberated France from Nazi occupation" },
                { year: "1958", title: "Fifth Republic", description: "Current republic established under de Gaulle" }
            ],
            notableFigures: ["Napoleon Bonaparte", "Louis XIV", "Charles de Gaulle", "Joan of Arc", "Voltaire", "Marie Curie"]
        },

        disputes: [],

        quickFacts: [
            { icon: "landmark", title: "Eiffel Tower", text: "Most visited paid monument in the world" },
            { icon: "wine-glass", title: "Wine", text: "World's second-largest wine producer" },
            { icon: "users", title: "Tourism", text: "Most visited country in the world (~90M/year)" },
            { icon: "atom", title: "Nuclear Power", text: "70% of electricity from nuclear energy" }
        ]
    },

    // 8. JAPAN
    {
        id: "JPN",
        name: "Japan",
        officialName: "Japan (日本国 Nihon-koku)",
        flag: "https://flagcdn.com/w320/jp.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1920&q=80"
        },

        basic: {
            capital: "Tokyo",
            continent: "Asia",
            region: "East Asia",
            subregion: "Eastern Asia",
            population: 123294513,
            area: 377975,
            populationDensity: 347,
            independence: "660 BCE (Traditional)",
            callingCode: "+81",
            tld: ".jp",
            drivingSide: "Left",
            electricity: "100V, 50/60Hz"
        },

        location: {
            coordinates: [36.2048, 138.2529],
            timezone: "UTC+9 (JST)",
            neighbors: [],
            borders: 0,
            hemispheres: ["Northern", "Eastern"],
            islandNation: true,
            mainIslands: ["Honshu", "Hokkaido", "Kyushu", "Shikoku"]
        },

        political: {
            government: "Unitary Parliamentary Constitutional Monarchy",
            headOfState: "Emperor Naruhito",
            headOfGovernment: "Prime Minister Shigeru Ishiba",
            legislature: "National Diet (House of Councillors & House of Representatives)",
            legalSystem: "Civil Law",
            states: 47,
            prefectures: 47,
            largestCity: "Tokyo",
            organizations: ["UN", "G7", "G20", "OECD", "APEC", "WTO"]
        },

        economy: {
            gdp: "$4.23 Trillion",
            gdpPPP: "$6.49 Trillion",
            gdpPerCapita: "$34,017",
            gdpRank: "#4",
            gdpGrowth: "1.9%",
            currency: "Japanese Yen",
            currencyCode: "JPY",
            currencySymbol: "¥",
            inflation: "3.2%",
            unemployment: "2.6%",
            majorSectors: ["Services (69%)", "Industry (29%)", "Agriculture (1%)"],
            industries: ["Automobiles", "Electronics", "Machinery", "Steel", "Shipbuilding", "Chemicals", "Robotics"],
            exports: ["Cars", "Integrated Circuits", "Vehicle Parts", "Machinery", "Iron/Steel Products"],
            imports: ["Crude Petroleum", "Natural Gas", "Coal", "Integrated Circuits", "Pharmaceuticals"]
        },

        geography: {
            climate: "Varies from Subarctic (Hokkaido) to Subtropical (Okinawa)",
            avgTemperature: "15.4°C",
            annualRainfall: "1,668 mm",
            highestPoint: "Mount Fuji (3,776 m)",
            lowestPoint: "Hachirō-gata (-4 m)",
            coastline: "29,751 km",
            forestCover: "68.5%",
            arableLand: "11.7%",
            terrain: "Mountainous islands with coastal plains",
            seasons: ["Spring (Mar-May)", "Summer (Jun-Aug)", "Autumn (Sep-Nov)", "Winter (Dec-Feb)"],
            naturalResources: ["Fish", "Timber", "Small mineral deposits"],
            volcanoes: 111,
            earthquakeZone: "Pacific Ring of Fire"
        },

        geography_links: {
            rivers: ["Shinano River", "Tone River", "Ishikari River", "Kitakami River"],
            mountains: ["Japanese Alps", "Mount Fuji", "Mount Aso", "Mount Kita"],
            deserts: [],
            forests: ["Yakushima Forest", "Shirakami-Sanchi", "Aokigahara"],
            oceans: ["Pacific Ocean", "Sea of Japan", "East China Sea", "Philippine Sea"]
        },

        culture: {
            officialLanguages: ["Japanese"],
            languages: ["Japanese", "Ryukyuan languages", "Ainu"],
            religions: ["Shinto (70%)", "Buddhism (67%)", "Christianity (2%)"],
            heritageSites: ["Historic Kyoto", "Hiroshima Peace Memorial", "Historic Nara", "Mount Fuji", "Himeji Castle", "Shirakawa-go", "Itsukushima Shrine"],
            festivals: ["Hanami (Cherry Blossom)", "Obon", "Tanabata", "Gion Matsuri", "New Year (Shōgatsu)"],
            cuisine: ["Sushi", "Ramen", "Tempura", "Sashimi", "Udon", "Tonkatsu", "Wagyu Beef", "Matcha"],
            arts: ["Kabuki", "Noh Theatre", "Anime", "Manga", "Ikebana", "Origami", "Tea Ceremony", "Calligraphy"],
            sports: ["Baseball", "Sumo", "Football", "Martial Arts (Judo, Karate, Kendo)", "Golf"]
        },

        symbols: {
            bird: "Green Pheasant",
            animal: "N/A (unofficial: Japanese Macaque)",
            flower: "Cherry Blossom (Sakura)",
            tree: "Sugi (Japanese Cedar)",
            anthem: "Kimigayo",
            motto: "N/A"
        },

        demographics: {
            lifeExpectancy: 84.62,
            literacyRate: "99%",
            urbanPopulation: "91.9%",
            medianAge: 48.6,
            populationGrowth: "-0.53%",
            agingPopulation: "29.1% over 65"
        },

        history: {
            timeline: [
                { year: "660 BCE", title: "Founding", description: "Traditional date of Japan's founding by Emperor Jimmu" },
                { year: "710", title: "Nara Period", description: "First permanent capital established" },
                { year: "794", title: "Heian Period", description: "Golden age of classical Japanese culture" },
                { year: "1185", title: "Kamakura Shogunate", description: "First military government (bakufu)" },
                { year: "1603", title: "Edo Period", description: "Tokugawa shogunate, 250 years of peace" },
                { year: "1868", title: "Meiji Restoration", description: "End of shogunate, modernization began" },
                { year: "1945", title: "Post-War", description: "End of WWII, new constitution adopted" },
                { year: "1964", title: "Tokyo Olympics", description: "Symbol of Japan's post-war recovery" }
            ],
            notableFigures: ["Emperor Meiji", "Tokugawa Ieyasu", "Oda Nobunaga", "Murasaki Shikibu", "Akira Kurosawa"]
        },

        disputes: [
            { name: "Kuril Islands", description: "Dispute with Russia over Northern Territories", type: "Border" },
            { name: "Senkaku/Diaoyu Islands", description: "Dispute with China and Taiwan", type: "Border" },
            { name: "Dokdo/Takeshima", description: "Dispute with South Korea", type: "Border" }
        ],

        quickFacts: [
            { icon: "mountain", title: "Mount Fuji", text: "UNESCO World Heritage Site, sacred mountain" },
            { icon: "train", title: "Shinkansen", text: "Bullet train, 320 km/h, 0 fatalities since 1964" },
            { icon: "robot", title: "Robotics", text: "World leader in industrial robots" },
            { icon: "heart", title: "Life Expectancy", text: "Highest in the world (84.6 years)" },
            { icon: "building", title: "Tokyo", text: "World's largest metropolitan area (37M+)" }
        ]
    },

    // 9. BRAZIL
    {
        id: "BRA",
        name: "Brazil",
        officialName: "Federative Republic of Brazil",
        flag: "https://flagcdn.com/w320/br.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1544989164-31dc3c645987?w=1920&q=80"
        },

        basic: {
            capital: "Brasília",
            continent: "South America",
            region: "South America",
            subregion: "Eastern South America",
            population: 216422446,
            area: 8515767,
            populationDensity: 25,
            independence: "1822",
            callingCode: "+55",
            tld: ".br",
            drivingSide: "Right",
            electricity: "127/220V, 60Hz"
        },

        location: {
            coordinates: [-14.2350, -51.9253],
            timezone: "UTC-2 to UTC-5 (4 time zones)",
            neighbors: ["Argentina", "Bolivia", "Colombia", "French Guiana", "Guyana", "Paraguay", "Peru", "Suriname", "Uruguay", "Venezuela"],
            borders: 16145,
            hemispheres: ["Southern", "Western"]
        },

        political: {
            government: "Federal Presidential Constitutional Republic",
            headOfState: "President Luiz Inácio Lula da Silva",
            headOfGovernment: "President Luiz Inácio Lula da Silva",
            legislature: "National Congress (Federal Senate & Chamber of Deputies)",
            legalSystem: "Civil Law",
            states: 26,
            federalDistrict: 1,
            largestCity: "São Paulo",
            organizations: ["UN", "BRICS", "G20", "Mercosur", "OAS", "WTO"]
        },

        economy: {
            gdp: "$2.17 Trillion",
            gdpPPP: "$4.02 Trillion",
            gdpPerCapita: "$10,412",
            gdpRank: "#9",
            gdpGrowth: "2.9%",
            currency: "Brazilian Real",
            currencyCode: "BRL",
            currencySymbol: "R$",
            inflation: "4.6%",
            unemployment: "7.8%",
            majorSectors: ["Services (63%)", "Industry (21%)", "Agriculture (6%)"],
            industries: ["Agriculture", "Mining", "Manufacturing", "Oil & Gas", "Aircraft"],
            exports: ["Soybeans", "Iron Ore", "Crude Petroleum", "Raw Sugar", "Poultry Meat", "Coffee"],
            imports: ["Refined Petroleum", "Vehicle Parts", "Crude Petroleum", "Fertilizers", "Integrated Circuits"]
        },

        geography: {
            climate: "Mostly Tropical, Temperate in South",
            avgTemperature: "25°C",
            annualRainfall: "1,761 mm",
            highestPoint: "Pico da Neblina (2,994 m)",
            lowestPoint: "Atlantic Ocean (0 m)",
            coastline: "7,491 km",
            forestCover: "59.4%",
            arableLand: "8.6%",
            terrain: "Amazon Basin, central plateau, coastal mountains, pampas",
            seasons: ["Summer (Dec-Mar)", "Autumn (Mar-Jun)", "Winter (Jun-Sep)", "Spring (Sep-Dec)"],
            naturalResources: ["Iron Ore", "Manganese", "Bauxite", "Nickel", "Uranium", "Gemstones", "Oil", "Hydropower"]
        },

        geography_links: {
            rivers: ["Amazon River", "Paraná River", "São Francisco", "Tocantins", "Araguaia", "Negro River"],
            mountains: ["Serra do Mar", "Serra da Mantiqueira", "Chapada Diamantina"],
            deserts: [],
            forests: ["Amazon Rainforest", "Atlantic Forest", "Cerrado", "Pantanal"],
            oceans: ["Atlantic Ocean"]
        },

        culture: {
            officialLanguages: ["Portuguese"],
            languages: ["Portuguese", "Indigenous languages (274+)"],
            religions: ["Roman Catholicism (50%)", "Protestantism (31%)", "No Religion (10%)", "Spiritism (3%)"],
            heritageSites: ["Historic Centre of Salvador", "Iguaçu National Park", "Brasília", "Serra da Capivara", "Historic Ouro Preto", "Amazon Conservation"],
            festivals: ["Carnival", "Festa Junina", "New Year (Réveillon)", "Parintins Festival"],
            cuisine: ["Feijoada", "Churrasco", "Pão de Queijo", "Acarajé", "Brigadeiro", "Açaí", "Coxinha"],
            arts: ["Samba", "Bossa Nova", "Capoeira", "Brazilian Cinema", "Telenovelas"],
            sports: ["Football", "Volleyball", "Mixed Martial Arts", "Basketball", "Motorsports"]
        },

        symbols: {
            bird: "Rufous-bellied Thrush (Sabiá-laranjeira)",
            animal: "Jaguar",
            flower: "Golden Trumpet Tree (Ipê-amarelo)",
            tree: "Brazilwood (Pau-Brasil)",
            anthem: "Hino Nacional Brasileiro",
            motto: "Ordem e Progresso (Order and Progress)"
        },

        demographics: {
            lifeExpectancy: 76.37,
            literacyRate: "93.2%",
            urbanPopulation: "87.6%",
            medianAge: 34.3
        },

        history: {
            timeline: [
                { year: "1500", title: "Portuguese Arrival", description: "Pedro Álvares Cabral claimed Brazil for Portugal" },
                { year: "1822", title: "Independence", description: "Brazil declared independence from Portugal" },
                { year: "1888", title: "Abolition of Slavery", description: "Golden Law abolished slavery" },
                { year: "1889", title: "Republic", description: "Monarchy overthrown, republic proclaimed" },
                { year: "1960", title: "New Capital", description: "Brasília inaugurated as new capital" },
                { year: "1985", title: "Democracy Restored", description: "End of military dictatorship" }
            ],
            notableFigures: ["Pedro II", "Getúlio Vargas", "Juscelino Kubitschek", "Pelé", "Ayrton Senna", "Oscar Niemeyer"]
        },

        disputes: [],

        quickFacts: [
            { icon: "tree", title: "Amazon", text: "60% of Amazon Rainforest is in Brazil" },
            { icon: "futbol", title: "Football", text: "5-time FIFA World Cup winners (most ever)" },
            { icon: "water", title: "Freshwater", text: "12% of world's freshwater reserves" },
            { icon: "globe", title: "Biodiversity", text: "Most biodiverse country on Earth" }
        ]
    },

    // 10. AUSTRALIA
    {
        id: "AUS",
        name: "Australia",
        officialName: "Commonwealth of Australia",
        flag: "https://flagcdn.com/w320/au.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
        },

        basic: {
            capital: "Canberra",
            continent: "Oceania",
            region: "Oceania",
            subregion: "Australasia",
            population: 26439111,
            area: 7692024,
            populationDensity: 3.4,
            independence: "1901 (Federation)",
            callingCode: "+61",
            tld: ".au",
            drivingSide: "Left",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [-25.2744, 133.7751],
            timezone: "UTC+8 to UTC+10.5 (3 main zones)",
            neighbors: [],
            borders: 0,
            hemispheres: ["Southern", "Eastern"],
            islandContinent: true
        },

        political: {
            government: "Federal Parliamentary Constitutional Monarchy",
            headOfState: "King Charles III (represented by Governor-General)",
            headOfGovernment: "Prime Minister Anthony Albanese",
            legislature: "Parliament (Senate & House of Representatives)",
            legalSystem: "Common Law",
            states: 6,
            territories: 2,
            largestCity: "Sydney",
            organizations: ["UN", "Commonwealth", "G20", "OECD", "APEC", "AUKUS", "Five Eyes"]
        },

        economy: {
            gdp: "$1.69 Trillion",
            gdpPPP: "$1.72 Trillion",
            gdpPerCapita: "$64,674",
            gdpRank: "#13",
            gdpGrowth: "2.1%",
            currency: "Australian Dollar",
            currencyCode: "AUD",
            currencySymbol: "$",
            inflation: "4.1%",
            unemployment: "4.1%",
            majorSectors: ["Services (66%)", "Industry (25%)", "Agriculture (3%)"],
            industries: ["Mining", "Agriculture", "Finance", "Tourism", "Manufacturing"],
            exports: ["Iron Ore", "Coal", "Natural Gas", "Gold", "Aluminum", "Beef", "Wheat"],
            imports: ["Refined Petroleum", "Cars", "Crude Petroleum", "Broadcasting Equipment", "Computers"]
        },

        geography: {
            climate: "Arid to Tropical to Temperate",
            avgTemperature: "21.9°C",
            annualRainfall: "534 mm",
            highestPoint: "Mount Kosciuszko (2,228 m)",
            lowestPoint: "Lake Eyre (-15 m)",
            coastline: "25,760 km",
            forestCover: "17%",
            arableLand: "6%",
            terrain: "Low plateau, deserts, fertile plains, mountain ranges",
            seasons: ["Summer (Dec-Feb)", "Autumn (Mar-May)", "Winter (Jun-Aug)", "Spring (Sep-Nov)"],
            naturalResources: ["Iron Ore", "Coal", "Gold", "Bauxite", "Uranium", "Natural Gas", "Diamonds"]
        },

        geography_links: {
            rivers: ["Murray River", "Darling River", "Murrumbidgee", "Lachlan River"],
            mountains: ["Great Dividing Range", "Snowy Mountains", "Blue Mountains", "MacDonnell Ranges"],
            deserts: ["Great Victoria Desert", "Great Sandy Desert", "Tanami Desert", "Simpson Desert", "Gibson Desert"],
            forests: ["Daintree Rainforest", "Gondwana Rainforests", "Tasmanian Wilderness"],
            oceans: ["Pacific Ocean", "Indian Ocean", "Southern Ocean", "Tasman Sea", "Coral Sea"]
        },

        culture: {
            officialLanguages: ["English (de facto)"],
            languages: ["English", "Mandarin", "Arabic", "Cantonese", "Vietnamese", "Indigenous languages"],
            religions: ["Christianity (44%)", "No Religion (39%)", "Islam (3.2%)", "Buddhism (2.4%)", "Hinduism (2.7%)"],
            heritageSites: ["Great Barrier Reef", "Sydney Opera House", "Uluru-Kata Tjuta", "Kakadu", "Blue Mountains", "Tasmanian Wilderness"],
            festivals: ["Australia Day", "ANZAC Day", "Melbourne Cup Day", "Christmas", "Easter"],
            cuisine: ["Meat Pie", "Vegemite", "Lamingtons", "Barramundi", "Pavlova", "Tim Tams", "BBQ"],
            arts: ["Aboriginal Art", "Australian Cinema", "Contemporary Art"],
            sports: ["Cricket", "Australian Rules Football", "Rugby", "Swimming", "Tennis", "Surfing"]
        },

        symbols: {
            bird: "Emu",
            animal: "Red Kangaroo",
            flower: "Golden Wattle",
            tree: "Golden Wattle",
            anthem: "Advance Australia Fair",
            motto: "N/A (Unofficial: 'Girt by Sea')"
        },

        demographics: {
            lifeExpectancy: 84.3,
            literacyRate: "99%",
            urbanPopulation: "86.2%",
            medianAge: 37.5
        },

        history: {
            timeline: [
                { year: "50000 BCE", title: "First Inhabitants", description: "Aboriginal people arrived in Australia" },
                { year: "1770", title: "European Discovery", description: "Captain James Cook claimed eastern Australia for Britain" },
                { year: "1788", title: "First Fleet", description: "British colonization began with convict settlement" },
                { year: "1851", title: "Gold Rush", description: "Major gold discoveries led to population boom" },
                { year: "1901", title: "Federation", description: "Six colonies formed the Commonwealth of Australia" },
                { year: "1915", title: "Gallipoli", description: "ANZAC troops fought in WWI, shaping national identity" }
            ],
            notableFigures: ["Captain Cook", "Ned Kelly", "Don Bradman", "Steve Irwin", "Cate Blanchett"]
        },

        disputes: [],

        quickFacts: [
            { icon: "coral", title: "Great Barrier Reef", text: "World's largest coral reef system (2,300 km)" },
            { icon: "paw", title: "Unique Wildlife", text: "80% of species found nowhere else on Earth" },
            { icon: "island", title: "Island Continent", text: "Only country that is also a continent" },
            { icon: "sun", title: "Outback", text: "70% of land is semi-arid or desert" }
        ]
    },

    // 11. CANADA
    {
        id: "CAN",
        name: "Canada",
        officialName: "Canada",
        flag: "https://flagcdn.com/w320/ca.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1517090504586-fde19ea6066f?w=1920&q=80"
        },

        basic: {
            capital: "Ottawa",
            continent: "North America",
            region: "North America",
            subregion: "Northern America",
            population: 40097761,
            area: 9984670,
            populationDensity: 4,
            independence: "1867 (Confederation)",
            callingCode: "+1",
            tld: ".ca",
            drivingSide: "Right",
            electricity: "120V, 60Hz"
        },

        location: {
            coordinates: [56.1304, -106.3468],
            timezone: "UTC-3.5 to UTC-8 (6 time zones)",
            neighbors: ["United States"],
            borders: 8893,
            hemispheres: ["Northern", "Western"]
        },

        political: {
            government: "Federal Parliamentary Constitutional Monarchy",
            headOfState: "King Charles III (represented by Governor General)",
            headOfGovernment: "Prime Minister Justin Trudeau",
            legislature: "Parliament (Senate & House of Commons)",
            legalSystem: "Common Law (Civil Law in Quebec)",
            states: 10,
            provinces: 10,
            territories: 3,
            largestCity: "Toronto",
            organizations: ["UN", "NATO", "G7", "G20", "Commonwealth", "USMCA", "OECD", "APEC"]
        },

        economy: {
            gdp: "$2.14 Trillion",
            gdpPPP: "$2.30 Trillion",
            gdpPerCapita: "$53,247",
            gdpRank: "#10",
            gdpGrowth: "1.1%",
            currency: "Canadian Dollar",
            currencyCode: "CAD",
            currencySymbol: "C$",
            inflation: "3.4%",
            unemployment: "6.1%",
            majorSectors: ["Services (70%)", "Industry (28%)", "Agriculture (2%)"],
            industries: ["Energy", "Mining", "Finance", "Aerospace", "Automotive", "Technology"],
            exports: ["Crude Petroleum", "Cars", "Gold", "Natural Gas", "Sawn Wood"],
            imports: ["Cars", "Vehicle Parts", "Crude Petroleum", "Computers", "Refined Petroleum"]
        },

        geography: {
            climate: "Varies from Temperate to Arctic",
            avgTemperature: "-5.4°C",
            annualRainfall: "537 mm",
            highestPoint: "Mount Logan (5,959 m)",
            lowestPoint: "Atlantic Ocean (0 m)",
            coastline: "202,080 km (longest in world)",
            forestCover: "38.2%",
            arableLand: "4.7%",
            terrain: "Plains, mountains, Arctic tundra, forests, prairies",
            seasons: ["Spring (Mar-May)", "Summer (Jun-Aug)", "Autumn (Sep-Nov)", "Winter (Dec-Feb)"],
            naturalResources: ["Petroleum", "Natural Gas", "Coal", "Timber", "Uranium", "Potash", "Diamonds", "Zinc"]
        },

        geography_links: {
            rivers: ["St. Lawrence River", "Mackenzie River", "Fraser River", "Saskatchewan River", "Yukon River"],
            mountains: ["Rocky Mountains", "Coast Mountains", "Laurentian Mountains", "Torngat Mountains"],
            deserts: [],
            forests: ["Boreal Forest", "Pacific Temperate Rainforest", "Great Bear Rainforest"],
            oceans: ["Atlantic Ocean", "Pacific Ocean", "Arctic Ocean", "Hudson Bay"]
        },

        culture: {
            officialLanguages: ["English", "French"],
            languages: ["English", "French", "Punjabi", "Mandarin", "Cantonese", "Spanish", "Indigenous languages"],
            religions: ["Christianity (53%)", "No Religion (35%)", "Islam (4.9%)", "Hinduism (2.3%)", "Sikhism (2.1%)"],
            heritageSites: ["Canadian Rocky Mountain Parks", "Historic Quebec City", "Old Town Lunenburg", "Rideau Canal", "Dinosaur Provincial Park"],
            festivals: ["Canada Day", "Thanksgiving", "Winter Carnival (Quebec)", "Calgary Stampede", "Victoria Day"],
            cuisine: ["Poutine", "Maple Syrup", "Butter Tarts", "Nanaimo Bars", "Tourtière", "Montreal Bagels"],
            arts: ["Canadian Literature", "Group of Seven", "Folk Music", "Film Industry"],
            sports: ["Ice Hockey", "Lacrosse", "Canadian Football", "Curling", "Basketball"]
        },

        symbols: {
            bird: "Canada Jay (Gray Jay)",
            animal: "Beaver",
            flower: "N/A (Maple Leaf is symbol)",
            tree: "Maple Tree",
            anthem: "O Canada",
            motto: "A Mari Usque Ad Mare (From Sea to Sea)"
        },

        demographics: {
            lifeExpectancy: 82.96,
            literacyRate: "99%",
            urbanPopulation: "81.8%",
            medianAge: 41.8
        },

        history: {
            timeline: [
                { year: "1000 CE", title: "Viking Arrival", description: "Norse explorers reached Newfoundland" },
                { year: "1534", title: "French Exploration", description: "Jacques Cartier explored the St. Lawrence" },
                { year: "1763", title: "British Control", description: "France ceded Canada to Britain" },
                { year: "1867", title: "Confederation", description: "Dominion of Canada formed from British colonies" },
                { year: "1931", title: "Statute of Westminster", description: "Full legislative independence from Britain" },
                { year: "1982", title: "Constitution Act", description: "Full patriation of Canadian constitution" }
            ],
            notableFigures: ["Sir John A. Macdonald", "Pierre Trudeau", "Terry Fox", "Wayne Gretzky"]
        },

        disputes: [],

        quickFacts: [
            { icon: "ruler", title: "Second Largest", text: "9.98 million km² (second only to Russia)" },
            { icon: "water", title: "Lakes", text: "More lakes than rest of world combined" },
            { icon: "tree", title: "Coastline", text: "Longest coastline of any country (202,080 km)" },
            { icon: "snowflake", title: "Bilingual", text: "Official bilingual country (English & French)" }
        ]
    },

    // 12. ITALY
    {
        id: "ITA",
        name: "Italy",
        officialName: "Italian Republic",
        flag: "https://flagcdn.com/w320/it.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1534445867742-43195f401b6c?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1525874684015-58379d421a52?w=1920&q=80"
        },

        basic: {
            capital: "Rome",
            continent: "Europe",
            region: "Southern Europe",
            subregion: "Southern Europe",
            population: 58870762,
            area: 301340,
            populationDensity: 206,
            independence: "1861 (Unification)",
            callingCode: "+39",
            tld: ".it",
            drivingSide: "Right",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [41.8719, 12.5674],
            timezone: "UTC+1 (CET) / UTC+2 (CEST)",
            neighbors: ["France", "Switzerland", "Austria", "Slovenia", "San Marino", "Vatican City"],
            borders: 1836,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Parliamentary Republic",
            headOfState: "President Sergio Mattarella",
            headOfGovernment: "Prime Minister Giorgia Meloni",
            legislature: "Parliament (Senate & Chamber of Deputies)",
            legalSystem: "Civil Law",
            states: 20,
            regions: 20,
            provinces: 107,
            largestCity: "Rome",
            organizations: ["UN", "EU", "NATO", "G7", "G20", "OECD", "WTO"]
        },

        economy: {
            gdp: "$2.19 Trillion",
            gdpPPP: "$3.12 Trillion",
            gdpPerCapita: "$37,146",
            gdpRank: "#8",
            gdpGrowth: "0.7%",
            currency: "Euro",
            currencyCode: "EUR",
            currencySymbol: "€",
            inflation: "5.7%",
            unemployment: "7.2%",
            majorSectors: ["Services (66%)", "Industry (24%)", "Agriculture (2%)"],
            industries: ["Tourism", "Fashion", "Automotive", "Machinery", "Pharmaceuticals", "Food Processing"],
            exports: ["Packaged Medicines", "Refined Petroleum", "Cars", "Vehicle Parts", "Valves"],
            imports: ["Crude Petroleum", "Cars", "Packaged Medicines", "Natural Gas", "Refined Petroleum"]
        },

        geography: {
            climate: "Mediterranean to Alpine",
            avgTemperature: "13.4°C",
            annualRainfall: "832 mm",
            highestPoint: "Mont Blanc (4,808 m, border with France)",
            lowestPoint: "Jolanda di Savoia (-3.4 m)",
            coastline: "7,600 km",
            forestCover: "32%",
            arableLand: "22.8%",
            terrain: "Mountains, plains, coastal areas, islands",
            naturalResources: ["Mercury", "Potash", "Marble", "Sulfur", "Natural Gas", "Fish"]
        },

        geography_links: {
            rivers: ["Po River", "Tiber River", "Arno River", "Adige River"],
            mountains: ["Alps", "Apennines", "Dolomites", "Mount Etna", "Mount Vesuvius"],
            deserts: [],
            forests: ["Foreste Casentinesi"],
            oceans: ["Mediterranean Sea", "Adriatic Sea", "Tyrrhenian Sea", "Ionian Sea", "Ligurian Sea"]
        },

        culture: {
            officialLanguages: ["Italian"],
            languages: ["Italian", "Sardinian", "Friulian", "German (South Tyrol)", "French (Aosta Valley)"],
            religions: ["Roman Catholicism (74%)", "No Religion (20%)", "Other (6%)"],
            heritageSites: ["Historic Centre of Rome", "Venice and its Lagoon", "Florence Historic Centre", "Pompeii", "Cinque Terre", "Amalfi Coast", "Vatican City"],
            festivals: ["Carnevale di Venezia", "Easter", "Christmas", "Ferragosto", "Palio di Siena"],
            cuisine: ["Pizza", "Pasta", "Risotto", "Gelato", "Espresso", "Tiramisu", "Prosciutto", "Parmigiano"],
            arts: ["Renaissance Art", "Opera", "Classical Music", "Cinema (Neorealism)", "Fashion Design"],
            sports: ["Football", "Cycling", "Motorsports", "Volleyball", "Basketball", "Rugby"]
        },

        symbols: {
            bird: "Italian Sparrow",
            animal: "Italian Wolf",
            flower: "White Lily (Stylized Lily)",
            tree: "Italian Stone Pine",
            anthem: "Il Canto degli Italiani",
            motto: "N/A"
        },

        demographics: {
            lifeExpectancy: 83.51,
            literacyRate: "99.2%",
            urbanPopulation: "71.3%",
            medianAge: 47.9
        },

        history: {
            timeline: [
                { year: "753 BCE", title: "Founding of Rome", description: "Traditional date of Rome's founding by Romulus" },
                { year: "27 BCE", title: "Roman Empire", description: "Augustus became first Roman Emperor" },
                { year: "476 CE", title: "Fall of Rome", description: "Western Roman Empire fell" },
                { year: "1300s", title: "Renaissance", description: "Cultural rebirth began in Florence" },
                { year: "1861", title: "Unification", description: "Kingdom of Italy proclaimed" },
                { year: "1946", title: "Republic", description: "Monarchy abolished, republic established" }
            ],
            notableFigures: ["Julius Caesar", "Leonardo da Vinci", "Michelangelo", "Galileo Galilei", "Giuseppe Garibaldi", "Dante Alighieri"]
        },

        disputes: [],

        quickFacts: [
            { icon: "monument", title: "UNESCO Sites", text: "Most World Heritage Sites (59)" },
            { icon: "utensils", title: "Cuisine", text: "Birthplace of pizza and modern pasta" },
            { icon: "palette", title: "Renaissance", text: "Birthplace of the Renaissance" },
            { icon: "church", title: "Vatican", text: "Home to Vatican City (world's smallest country)" }
        ]
    },

    // 13. SOUTH KOREA
    {
        id: "KOR",
        name: "South Korea",
        officialName: "Republic of Korea",
        flag: "https://flagcdn.com/w320/kr.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1534274867514-d5b47ef89ed7?w=1920&q=80"
        },

        basic: {
            capital: "Seoul",
            continent: "Asia",
            region: "East Asia",
            subregion: "Eastern Asia",
            population: 51784059,
            area: 100210,
            populationDensity: 527,
            independence: "1945 (from Japan)",
            callingCode: "+82",
            tld: ".kr",
            drivingSide: "Right",
            electricity: "220V, 60Hz"
        },

        location: {
            coordinates: [35.9078, 127.7669],
            timezone: "UTC+9 (KST)",
            neighbors: ["North Korea"],
            borders: 237,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Presidential Constitutional Republic",
            headOfState: "President Yoon Suk-yeol",
            headOfGovernment: "Prime Minister Han Duck-soo",
            legislature: "National Assembly",
            legalSystem: "Civil Law (German influence)",
            states: 17,
            provinces: 9,
            metropolitanCities: 6,
            largestCity: "Seoul",
            organizations: ["UN", "G20", "OECD", "APEC", "WTO"]
        },

        economy: {
            gdp: "$1.71 Trillion",
            gdpPPP: "$2.83 Trillion",
            gdpPerCapita: "$33,147",
            gdpRank: "#12",
            gdpGrowth: "1.4%",
            currency: "South Korean Won",
            currencyCode: "KRW",
            currencySymbol: "₩",
            inflation: "3.6%",
            unemployment: "2.7%",
            majorSectors: ["Services (57%)", "Industry (33%)", "Agriculture (2%)"],
            industries: ["Electronics", "Automobiles", "Shipbuilding", "Steel", "Chemicals", "Semiconductors"],
            exports: ["Integrated Circuits", "Cars", "Refined Petroleum", "Ships", "Vehicle Parts"],
            imports: ["Crude Petroleum", "Integrated Circuits", "Natural Gas", "Coal", "Refined Petroleum"]
        },

        geography: {
            climate: "Temperate with Four Distinct Seasons",
            avgTemperature: "12.5°C",
            annualRainfall: "1,274 mm",
            highestPoint: "Hallasan (1,950 m)",
            lowestPoint: "Sea Level (0 m)",
            coastline: "2,413 km",
            forestCover: "63.4%",
            arableLand: "15.3%",
            terrain: "Hills, mountains, coastal plains",
            naturalResources: ["Coal", "Tungsten", "Graphite", "Lead", "Hydropower"]
        },

        geography_links: {
            rivers: ["Han River", "Nakdong River", "Geum River", "Yeongsan River"],
            mountains: ["Taebaek Mountains", "Sobaek Mountains", "Hallasan", "Seoraksan"],
            deserts: [],
            forests: ["Seoraksan National Park", "Jirisan National Park"],
            oceans: ["Yellow Sea", "Sea of Japan (East Sea)", "Korea Strait"]
        },

        culture: {
            officialLanguages: ["Korean"],
            languages: ["Korean"],
            religions: ["No Religion (56%)", "Protestantism (20%)", "Buddhism (16%)", "Catholicism (8%)"],
            heritageSites: ["Gyeongju Historic Areas", "Changdeokgung Palace", "Haeinsa Temple", "Jongmyo Shrine", "Jeju Volcanic Island"],
            festivals: ["Seollal (Lunar New Year)", "Chuseok", "Boryeong Mud Festival", "Lantern Festival"],
            cuisine: ["Kimchi", "Bibimbap", "Korean BBQ", "Bulgogi", "Samgyeopsal", "Japchae", "Tteokbokki"],
            arts: ["K-Pop", "K-Drama", "Traditional Dance", "Pottery", "Taekwondo"],
            sports: ["Baseball", "Football", "Basketball", "Taekwondo", "Golf", "Esports"]
        },

        symbols: {
            bird: "Korean Magpie",
            animal: "Siberian Tiger",
            flower: "Mugunghwa (Rose of Sharon)",
            tree: "Korean Pine",
            anthem: "Aegukga",
            motto: "홍익인간 (Benefit broadly the human world)"
        },

        demographics: {
            lifeExpectancy: 83.7,
            literacyRate: "99%",
            urbanPopulation: "81.4%",
            medianAge: 44.9
        },

        history: {
            timeline: [
                { year: "2333 BCE", title: "Gojoseon", description: "Legendary founding by Dangun" },
                { year: "57 BCE", title: "Three Kingdoms", description: "Goguryeo, Baekje, Silla kingdoms" },
                { year: "918", title: "Goryeo Dynasty", description: "Korea name derived from Goryeo" },
                { year: "1392", title: "Joseon Dynasty", description: "500-year dynasty, Confucian state" },
                { year: "1910", title: "Japanese Occupation", description: "Korea annexed by Japan" },
                { year: "1945", title: "Liberation", description: "End of Japanese rule, division at 38th parallel" },
                { year: "1950-1953", title: "Korean War", description: "War between North and South Korea" },
                { year: "1988", title: "Democratization", description: "Transition to democracy" }
            ],
            notableFigures: ["King Sejong", "Admiral Yi Sun-sin", "Park Chung-hee", "BTS", "Son Heung-min"]
        },

        disputes: [
            { name: "Korean DMZ", description: "Demilitarized zone with North Korea", type: "Border" },
            { name: "Dokdo/Takeshima", description: "Island dispute with Japan", type: "Border" }
        ],

        quickFacts: [
            { icon: "wifi", title: "Internet", text: "Fastest average internet speed in the world" },
            { icon: "music", title: "K-Pop", text: "Global phenomenon with billions of streams" },
            { icon: "gamepad", title: "Esports", text: "Esports considered a national sport" },
            { icon: "graduation-cap", title: "Education", text: "Highest tertiary education attainment" }
        ]
    },

    // 14. SPAIN
    {
        id: "ESP",
        name: "Spain",
        officialName: "Kingdom of Spain",
        flag: "https://flagcdn.com/w320/es.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1509840841025-9088ba78a826?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1920&q=80"
        },

        basic: {
            capital: "Madrid",
            continent: "Europe",
            region: "Southern Europe",
            subregion: "Iberian Peninsula",
            population: 47519628,
            area: 505990,
            populationDensity: 94,
            independence: "1479 (Unification)",
            callingCode: "+34",
            tld: ".es",
            drivingSide: "Right",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [40.4637, -3.7492],
            timezone: "UTC+1 (CET) / UTC+2 (CEST)",
            neighbors: ["Portugal", "France", "Andorra", "Morocco (Ceuta/Melilla)", "Gibraltar (UK)"],
            borders: 1952,
            hemispheres: ["Northern", "Western"]
        },

        political: {
            government: "Unitary Parliamentary Constitutional Monarchy",
            headOfState: "King Felipe VI",
            headOfGovernment: "Prime Minister Pedro Sánchez",
            legislature: "Cortes Generales (Congress & Senate)",
            legalSystem: "Civil Law",
            states: 17,
            autonomousCommunities: 17,
            provinces: 50,
            largestCity: "Madrid",
            organizations: ["UN", "EU", "NATO", "G20", "OECD", "WTO"]
        },

        economy: {
            gdp: "$1.58 Trillion",
            gdpPPP: "$2.41 Trillion",
            gdpPerCapita: "$33,090",
            gdpRank: "#15",
            gdpGrowth: "2.5%",
            currency: "Euro",
            currencyCode: "EUR",
            currencySymbol: "€",
            inflation: "3.5%",
            unemployment: "11.7%",
            majorSectors: ["Services (68%)", "Industry (20%)", "Agriculture (3%)"],
            industries: ["Tourism", "Automotive", "Machinery", "Pharmaceuticals", "Agriculture"],
            exports: ["Cars", "Refined Petroleum", "Packaged Medicines", "Vehicle Parts", "Citrus Fruits"],
            imports: ["Crude Petroleum", "Cars", "Vehicle Parts", "Packaged Medicines", "Natural Gas"]
        },

        geography: {
            climate: "Mediterranean, Oceanic (North), Semi-arid (Southeast)",
            avgTemperature: "15°C",
            annualRainfall: "636 mm",
            highestPoint: "Teide (3,718 m, Canary Islands), Mulhacén (3,479 m, mainland)",
            lowestPoint: "Atlantic Ocean (0 m)",
            coastline: "4,964 km",
            forestCover: "36.8%",
            arableLand: "24.9%",
            terrain: "High central plateau (Meseta), mountain ranges, coastal plains"
        },

        geography_links: {
            rivers: ["Ebro", "Tagus", "Guadalquivir", "Duero", "Guadiana"],
            mountains: ["Pyrenees", "Sierra Nevada", "Cantabrian Mountains", "Sistema Central"],
            deserts: ["Tabernas Desert"],
            forests: ["Doñana", "Garajonay"],
            oceans: ["Mediterranean Sea", "Atlantic Ocean", "Bay of Biscay"]
        },

        culture: {
            officialLanguages: ["Spanish (Castilian)"],
            languages: ["Spanish", "Catalan", "Galician", "Basque", "Aranese"],
            religions: ["Roman Catholicism (58%)", "No Religion (35%)", "Other (7%)"],
            heritageSites: ["Alhambra", "Sagrada Familia", "Works of Gaudí", "Santiago de Compostela", "Historic Toledo", "Córdoba"],
            festivals: ["La Tomatina", "Running of the Bulls", "Las Fallas", "Semana Santa", "Feria de Abril"],
            cuisine: ["Paella", "Tapas", "Jamón Ibérico", "Gazpacho", "Tortilla Española", "Churros"],
            arts: ["Flamenco", "Spanish Literature (Cervantes)", "Art (Picasso, Dalí, Goya)"],
            sports: ["Football", "Basketball", "Tennis", "Cycling", "Handball"]
        },

        symbols: {
            bird: "Imperial Eagle",
            animal: "Bull",
            flower: "Red Carnation",
            anthem: "Marcha Real",
            motto: "Plus Ultra (Further Beyond)"
        },

        demographics: {
            lifeExpectancy: 83.56,
            literacyRate: "98.4%",
            urbanPopulation: "81.1%",
            medianAge: 45.5
        },

        history: {
            timeline: [
                { year: "711", title: "Moorish Conquest", description: "Islamic conquest of Iberian Peninsula" },
                { year: "1492", title: "Reconquista Complete", description: "Fall of Granada, Columbus voyage to Americas" },
                { year: "1516", title: "Habsburg Spain", description: "Spanish Empire at its height" },
                { year: "1936-1939", title: "Spanish Civil War", description: "Civil war led to Franco dictatorship" },
                { year: "1975", title: "Democracy", description: "Death of Franco, restoration of monarchy and democracy" },
                { year: "1986", title: "EU Membership", description: "Spain joined European Community" }
            ],
            notableFigures: ["Isabella I", "Ferdinand II", "Christopher Columbus", "Francisco Franco", "Pablo Picasso", "Miguel de Cervantes"]
        },

        disputes: [
            { name: "Gibraltar", description: "British Overseas Territory claimed by Spain", type: "Border" },
            { name: "Ceuta & Melilla", description: "Spanish territories in North Africa", type: "Border" }
        ],

        quickFacts: [
            { icon: "sun", title: "Sunniest", text: "Most sunny hours in Europe" },
            { icon: "futbol", title: "La Liga", text: "Home to Real Madrid and FC Barcelona" },
            { icon: "wine-glass", title: "Wine", text: "World's third-largest wine producer" }
        ]
    },

    // 15. MEXICO
    {
        id: "MEX",
        name: "Mexico",
        officialName: "United Mexican States",
        flag: "https://flagcdn.com/w320/mx.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1570737209810-87a8e4e7b84e?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1585464231875-d9ef1f5ad396?w=1920&q=80"
        },

        basic: {
            capital: "Mexico City",
            continent: "North America",
            region: "Central America",
            subregion: "Central America",
            population: 128455567,
            area: 1964375,
            populationDensity: 66,
            independence: "1821",
            callingCode: "+52",
            tld: ".mx",
            drivingSide: "Right",
            electricity: "127V, 60Hz"
        },

        location: {
            coordinates: [23.6345, -102.5528],
            timezone: "UTC-5 to UTC-8 (4 time zones)",
            neighbors: ["United States", "Guatemala", "Belize"],
            borders: 4389,
            hemispheres: ["Northern", "Western"]
        },

        political: {
            government: "Federal Presidential Constitutional Republic",
            headOfState: "President Claudia Sheinbaum",
            headOfGovernment: "President Claudia Sheinbaum",
            legislature: "Congress (Senate & Chamber of Deputies)",
            legalSystem: "Civil Law",
            states: 31,
            federalEntity: 1,
            largestCity: "Mexico City",
            organizations: ["UN", "G20", "OECD", "USMCA", "OAS", "WTO", "APEC"]
        },

        economy: {
            gdp: "$1.47 Trillion",
            gdpPPP: "$2.94 Trillion",
            gdpPerCapita: "$11,496",
            gdpRank: "#14",
            gdpGrowth: "3.2%",
            currency: "Mexican Peso",
            currencyCode: "MXN",
            currencySymbol: "$",
            inflation: "4.7%",
            unemployment: "2.8%",
            majorSectors: ["Services (60%)", "Industry (31%)", "Agriculture (4%)"],
            industries: ["Manufacturing", "Oil & Gas", "Mining", "Automotive", "Electronics", "Tourism"],
            exports: ["Cars", "Vehicle Parts", "Computers", "Crude Petroleum", "Electrical Equipment"],
            imports: ["Vehicle Parts", "Refined Petroleum", "Integrated Circuits", "Electrical Equipment", "Plastics"]
        },

        geography: {
            climate: "Tropical to Desert",
            avgTemperature: "21°C",
            annualRainfall: "758 mm",
            highestPoint: "Pico de Orizaba (5,636 m)",
            lowestPoint: "Laguna Salada (-10 m)",
            coastline: "9,330 km",
            forestCover: "34%",
            arableLand: "12.9%",
            terrain: "High plateaus, mountains, coastal lowlands, deserts",
            naturalResources: ["Petroleum", "Silver", "Copper", "Gold", "Lead", "Zinc", "Natural Gas"]
        },

        geography_links: {
            rivers: ["Rio Grande", "Grijalva", "Usumacinta", "Pánuco"],
            mountains: ["Sierra Madre Occidental", "Sierra Madre Oriental", "Trans-Mexican Volcanic Belt"],
            deserts: ["Chihuahuan Desert", "Sonoran Desert"],
            forests: ["Lacandon Jungle", "Sierra Madre Pine-Oak Forests"],
            oceans: ["Pacific Ocean", "Gulf of Mexico", "Caribbean Sea", "Gulf of California"]
        },

        culture: {
            officialLanguages: ["Spanish (de facto)"],
            languages: ["Spanish", "Nahuatl", "Yucatec Maya", "Zapotec", "68 indigenous languages"],
            religions: ["Roman Catholicism (78%)", "Protestantism (11%)", "No Religion (10%)"],
            heritageSites: ["Chichen Itza", "Teotihuacan", "Historic Mexico City", "Palenque", "Monte Albán", "Oaxaca", "Guanajuato"],
            festivals: ["Día de los Muertos", "Cinco de Mayo", "Independence Day", "Las Posadas", "Carnival"],
            cuisine: ["Tacos", "Mole", "Guacamole", "Enchiladas", "Tamales", "Pozole", "Chiles en Nogada"],
            arts: ["Mariachi Music", "Muralism (Rivera, Orozco, Siqueiros)", "Folk Art", "Mexican Cinema"],
            sports: ["Football", "Boxing", "Baseball", "Lucha Libre", "Bullfighting (Traditional)"]
        },

        symbols: {
            bird: "Golden Eagle",
            animal: "Jaguar",
            flower: "Dahlia",
            tree: "Ahuehuete (Montezuma Cypress)",
            anthem: "Himno Nacional Mexicano",
            motto: "N/A"
        },

        demographics: {
            lifeExpectancy: 75.05,
            literacyRate: "95.4%",
            urbanPopulation: "81%",
            medianAge: 29.3
        },

        history: {
            timeline: [
                { year: "2000 BCE", title: "Olmec Civilization", description: "First major Mesoamerican civilization" },
                { year: "300 CE", title: "Maya Classic Period", description: "Height of Maya civilization" },
                { year: "1325", title: "Aztec Empire", description: "Tenochtitlan founded" },
                { year: "1521", title: "Spanish Conquest", description: "Hernán Cortés conquered Aztec Empire" },
                { year: "1821", title: "Independence", description: "Independence from Spain achieved" },
                { year: "1910", title: "Mexican Revolution", description: "Major social revolution" },
                { year: "1994", title: "NAFTA", description: "Free trade agreement with US and Canada" }
            ],
            notableFigures: ["Montezuma II", "Benito Juárez", "Emiliano Zapata", "Pancho Villa", "Frida Kahlo", "Diego Rivera"]
        },

        disputes: [],

        quickFacts: [
            { icon: "calendar", title: "Day of the Dead", text: "UNESCO Intangible Cultural Heritage" },
            { icon: "trophy", title: "Silver", text: "World's largest silver producer" },
            { icon: "pepper-hot", title: "Chili Peppers", text: "Origin of 60+ varieties of chili" },
            { icon: "city", title: "Mexico City", text: "Built on ancient Aztec capital Tenochtitlan" }
        ]
    },

    // 16. INDONESIA
    {
        id: "IDN",
        name: "Indonesia",
        officialName: "Republic of Indonesia",
        flag: "https://flagcdn.com/w320/id.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1555899434-94d1368aa7af?w=1920&q=80"
        },

        basic: {
            capital: "Jakarta (moving to Nusantara)",
            continent: "Asia",
            region: "Southeast Asia",
            subregion: "Southeastern Asia",
            population: 277534122,
            area: 1904569,
            populationDensity: 151,
            independence: "1945",
            callingCode: "+62",
            tld: ".id",
            drivingSide: "Left",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [-0.7893, 113.9213],
            timezone: "UTC+7 to UTC+9 (3 time zones)",
            neighbors: ["Malaysia", "Papua New Guinea", "East Timor"],
            borders: 2958,
            hemispheres: ["Southern/Northern", "Eastern"],
            islandNation: true,
            islands: 17508
        },

        political: {
            government: "Unitary Presidential Constitutional Republic",
            headOfState: "President Prabowo Subianto",
            headOfGovernment: "President Prabowo Subianto",
            legislature: "People's Consultative Assembly (MPR)",
            legalSystem: "Civil Law (Dutch influence)",
            states: 38,
            provinces: 38,
            largestCity: "Jakarta",
            organizations: ["UN", "G20", "ASEAN", "OPEC", "APEC", "WTO"]
        },

        economy: {
            gdp: "$1.37 Trillion",
            gdpPPP: "$4.39 Trillion",
            gdpPerCapita: "$4,919",
            gdpRank: "#16",
            gdpGrowth: "5.05%",
            currency: "Indonesian Rupiah",
            currencyCode: "IDR",
            currencySymbol: "Rp",
            inflation: "2.6%",
            unemployment: "5.3%",
            majorSectors: ["Services (44%)", "Industry (41%)", "Agriculture (13%)"],
            industries: ["Palm Oil", "Mining", "Textiles", "Automotive", "Electronics", "Natural Gas"],
            exports: ["Palm Oil", "Coal", "Natural Gas", "Stainless Steel", "Gold"],
            imports: ["Refined Petroleum", "Crude Petroleum", "Vehicle Parts", "Wheat", "Telephones"]
        },

        geography: {
            climate: "Tropical Equatorial",
            avgTemperature: "26.6°C",
            annualRainfall: "2,702 mm",
            highestPoint: "Puncak Jaya (4,884 m)",
            lowestPoint: "Indian Ocean (0 m)",
            coastline: "54,716 km",
            forestCover: "49.1%",
            arableLand: "13%",
            terrain: "Volcanic islands, rainforests, coastal plains",
            naturalResources: ["Petroleum", "Tin", "Natural Gas", "Nickel", "Timber", "Bauxite", "Copper", "Gold"]
        },

        geography_links: {
            rivers: ["Kapuas River", "Mahakam", "Barito", "Musi"],
            mountains: ["Barisan Mountains", "Jayawijaya Mountains", "Volcanoes (130+)"],
            deserts: [],
            forests: ["Borneo Rainforest", "Sumatran Rainforest", "Papua Rainforest"],
            oceans: ["Indian Ocean", "Pacific Ocean", "Java Sea", "Celebes Sea", "Banda Sea"]
        },

        culture: {
            officialLanguages: ["Indonesian (Bahasa Indonesia)"],
            languages: ["Indonesian", "Javanese", "Sundanese", "700+ regional languages"],
            religions: ["Islam (87%)", "Protestantism (7%)", "Catholicism (3%)", "Hinduism (1.7%)", "Buddhism (0.7%)"],
            heritageSites: ["Borobudur Temple", "Prambanan Temple", "Komodo National Park", "Ujung Kulon", "Tropical Rainforest Heritage of Sumatra"],
            festivals: ["Eid al-Fitr", "Nyepi (Bali)", "Waisak", "Independence Day", "Galungan"],
            cuisine: ["Nasi Goreng", "Satay", "Rendang", "Gado-gado", "Bakso", "Soto"],
            arts: ["Batik", "Wayang Puppet Theatre", "Gamelan Music", "Traditional Dance"],
            sports: ["Badminton", "Football", "Pencak Silat (Martial Art)", "Volleyball"]
        },

        symbols: {
            bird: "Javan Hawk-eagle",
            animal: "Komodo Dragon",
            flower: "Jasmine & Orchid (Rafflesia arnoldii - unofficial)",
            tree: "Teak",
            anthem: "Indonesia Raya",
            motto: "Bhinneka Tunggal Ika (Unity in Diversity)"
        },

        demographics: {
            lifeExpectancy: 72.32,
            literacyRate: "96%",
            urbanPopulation: "57.3%",
            medianAge: 30.2
        },

        history: {
            timeline: [
                { year: "700 CE", title: "Srivijaya Empire", description: "Maritime empire in Sumatra" },
                { year: "1293", title: "Majapahit Empire", description: "Largest pre-colonial state in Indonesian history" },
                { year: "1602", title: "Dutch East India Company", description: "Dutch colonization began" },
                { year: "1942", title: "Japanese Occupation", description: "WWII occupation ended Dutch rule" },
                { year: "1945", title: "Independence", description: "Declaration of independence by Sukarno" },
                { year: "1998", title: "Reformasi", description: "End of Suharto era, democratic reform" }
            ],
            notableFigures: ["Sukarno", "Suharto", "Gajah Mada", "Cut Nyak Dien"]
        },

        disputes: [],

        quickFacts: [
            { icon: "islands", title: "Archipelago", text: "Largest archipelago nation (17,508 islands)" },
            { icon: "users", title: "Population", text: "4th most populous country" },
            { icon: "mosque", title: "Muslim Population", text: "World's largest Muslim-majority nation" },
            { icon: "dragon", title: "Komodo Dragons", text: "Only place where Komodo dragons live" }
        ]
    },

    // 17. SAUDI ARABIA
    {
        id: "SAU",
        name: "Saudi Arabia",
        officialName: "Kingdom of Saudi Arabia",
        flag: "https://flagcdn.com/w320/sa.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1578895101408-1a36b834405b?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
        },

        basic: {
            capital: "Riyadh",
            continent: "Asia",
            region: "Middle East",
            subregion: "Western Asia",
            population: 36408820,
            area: 2149690,
            populationDensity: 16,
            independence: "1932 (Unification)",
            callingCode: "+966",
            tld: ".sa",
            drivingSide: "Right",
            electricity: "220V, 60Hz"
        },

        location: {
            coordinates: [23.8859, 45.0792],
            timezone: "UTC+3 (AST)",
            neighbors: ["Jordan", "Iraq", "Kuwait", "Qatar", "UAE", "Oman", "Yemen"],
            borders: 4431,
            hemispheres: ["Northern", "Eastern"]
        },

        political: {
            government: "Unitary Islamic Absolute Monarchy",
            headOfState: "King Salman bin Abdulaziz",
            headOfGovernment: "Crown Prince Mohammed bin Salman",
            legislature: "Consultative Assembly (Shura Council)",
            legalSystem: "Sharia (Islamic Law)",
            states: 13,
            provinces: 13,
            largestCity: "Riyadh",
            organizations: ["UN", "G20", "OPEC", "Arab League", "GCC", "OIC", "WTO"]
        },

        economy: {
            gdp: "$1.07 Trillion",
            gdpPPP: "$2.18 Trillion",
            gdpPerCapita: "$29,922",
            gdpRank: "#17",
            gdpGrowth: "-0.8%",
            currency: "Saudi Riyal",
            currencyCode: "SAR",
            currencySymbol: "﷼",
            inflation: "2.3%",
            unemployment: "4.8%",
            majorSectors: ["Services (50%)", "Industry (44%)", "Agriculture (3%)"],
            industries: ["Crude Oil Production", "Petroleum Refining", "Petrochemicals", "Mining", "Tourism (developing)"],
            exports: ["Crude Petroleum", "Refined Petroleum", "Polymers", "Chemicals", "Aluminum"],
            imports: ["Cars", "Broadcasting Equipment", "Refined Petroleum", "Telephones", "Aircraft"]
        },

        geography: {
            climate: "Arid Desert",
            avgTemperature: "25.8°C",
            annualRainfall: "59 mm",
            highestPoint: "Jabal Sawda (3,000 m)",
            lowestPoint: "Persian Gulf (0 m)",
            coastline: "2,640 km",
            forestCover: "0.5%",
            arableLand: "1.6%",
            terrain: "Mostly desert, central plateau",
            naturalResources: ["Petroleum", "Natural Gas", "Iron Ore", "Gold", "Copper"]
        },

        geography_links: {
            rivers: [],
            mountains: ["Sarawat Mountains", "Jabal Sawda"],
            deserts: ["Rub' al Khali (Empty Quarter)", "An-Nafud Desert", "Ad-Dahna Desert"],
            forests: [],
            oceans: ["Persian Gulf", "Red Sea", "Gulf of Aqaba"]
        },

        culture: {
            officialLanguages: ["Arabic"],
            languages: ["Arabic"],
            religions: ["Islam (93% Sunni, 7% Shia)"],
            heritageSites: ["Al-Hijr (Madâin Sâlih)", "Historic Jeddah", "At-Turaif District (Diriyah)", "Rock Art in Hail Region"],
            festivals: ["Eid al-Fitr", "Eid al-Adha", "Saudi National Day", "Janadriyah Festival"],
            cuisine: ["Kabsa", "Mandi", "Shawarma", "Falafel", "Arabic Coffee (Qahwa)", "Dates"],
            arts: ["Calligraphy", "Traditional Poetry", "Ardah Dance", "Islamic Architecture"],
            sports: ["Football", "Horse Racing", "Camel Racing", "Falconry", "Motorsports"]
        },

        symbols: {
            bird: "Falcon",
            animal: "Arabian Horse, Camel",
            flower: "N/A",
            tree: "Date Palm",
            anthem: "Aash Al Maleek (Long Live the King)",
            motto: "There is no god but God; Muhammad is the Messenger of God"
        },

        demographics: {
            lifeExpectancy: 76.37,
            literacyRate: "97.6%",
            urbanPopulation: "84.5%",
            medianAge: 31.8
        },

        history: {
            timeline: [
                { year: "7th Century", title: "Birth of Islam", description: "Prophet Muhammad born in Mecca" },
                { year: "1744", title: "First Saudi State", description: "Alliance between Muhammad ibn Saud and Muhammad ibn Abd al-Wahhab" },
                { year: "1932", title: "Unification", description: "Kingdom of Saudi Arabia unified under Ibn Saud" },
                { year: "1938", title: "Oil Discovery", description: "Commercial oil reserves discovered" },
                { year: "2016", title: "Vision 2030", description: "Economic diversification plan announced" }
            ],
            notableFigures: ["Prophet Muhammad", "King Abdulaziz (Ibn Saud)", "King Faisal"]
        },

        disputes: [],

        quickFacts: [
            { icon: "mosque", title: "Holy Sites", text: "Home to Mecca and Medina (holiest cities in Islam)" },
            { icon: "oil", title: "Oil Reserves", text: "World's 2nd largest proven oil reserves" },
            { icon: "calendar", title: "Hajj", text: "Hosts 2+ million pilgrims annually" },
            { icon: "building", title: "NEOM", text: "$500 billion futuristic megacity planned" }
        ]
    },

    // 18. TURKEY
    {
        id: "TUR",
        name: "Turkey",
        officialName: "Republic of Türkiye",
        flag: "https://flagcdn.com/w320/tr.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1570939274717-7eda259b50ed?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1920&q=80"
        },

        basic: {
            capital: "Ankara",
            continent: "Asia/Europe",
            region: "Middle East/Europe",
            subregion: "Western Asia/Southeastern Europe",
            population: 85279553,
            area: 783562,
            populationDensity: 110,
            independence: "1923 (Republic)",
            callingCode: "+90",
            tld: ".tr",
            drivingSide: "Right",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [38.9637, 35.2433],
            timezone: "UTC+3 (TRT)",
            neighbors: ["Greece", "Bulgaria", "Georgia", "Armenia", "Azerbaijan", "Iran", "Iraq", "Syria"],
            borders: 2627,
            hemispheres: ["Northern", "Eastern"],
            transcontinental: true
        },

        political: {
            government: "Unitary Presidential Constitutional Republic",
            headOfState: "President Recep Tayyip Erdoğan",
            headOfGovernment: "President Recep Tayyip Erdoğan",
            legislature: "Grand National Assembly",
            legalSystem: "Civil Law",
            states: 81,
            provinces: 81,
            largestCity: "Istanbul",
            organizations: ["UN", "NATO", "G20", "OECD", "OIC", "WTO"]
        },

        economy: {
            gdp: "$1.15 Trillion",
            gdpPPP: "$3.32 Trillion",
            gdpPerCapita: "$13,383",
            gdpRank: "#18",
            gdpGrowth: "4.5%",
            currency: "Turkish Lira",
            currencyCode: "TRY",
            currencySymbol: "₺",
            inflation: "64.8%",
            unemployment: "9.4%",
            majorSectors: ["Services (55%)", "Industry (32%)", "Agriculture (7%)"],
            industries: ["Textiles", "Automotive", "Electronics", "Mining", "Steel", "Tourism", "Construction"],
            exports: ["Cars", "Vehicle Parts", "Refined Petroleum", "Jewelry", "Steel"],
            imports: ["Gold", "Refined Petroleum", "Scrap Iron", "Vehicle Parts", "Natural Gas"]
        },

        geography: {
            climate: "Mediterranean (Coast), Continental (Interior)",
            avgTemperature: "14.5°C",
            annualRainfall: "643 mm",
            highestPoint: "Mount Ararat (5,137 m)",
            lowestPoint: "Mediterranean Sea (0 m)",
            coastline: "7,200 km",
            forestCover: "28.4%",
            arableLand: "26.5%",
            terrain: "High central plateau (Anatolia), narrow coastal plain, mountains",
            naturalResources: ["Coal", "Iron Ore", "Copper", "Chromium", "Boron", "Marble"]
        },

        geography_links: {
            rivers: ["Euphrates", "Tigris", "Kızılırmak", "Sakarya"],
            mountains: ["Taurus Mountains", "Pontic Mountains", "Mount Ararat"],
            deserts: [],
            forests: ["Black Sea Forests", "Mediterranean Pine Forests"],
            oceans: ["Mediterranean Sea", "Black Sea", "Aegean Sea", "Sea of Marmara"]
        },

        culture: {
            officialLanguages: ["Turkish"],
            languages: ["Turkish", "Kurdish", "Arabic", "Zazaki"],
            religions: ["Islam (99%)", "Other (1%)"],
            heritageSites: ["Historic Areas of Istanbul", "Göreme National Park", "Pamukkale", "Ephesus", "Troy", "Mount Nemrut"],
            festivals: ["Eid al-Fitr", "Eid al-Adha", "Republic Day", "Nowruz", "Oil Wrestling Festival"],
            cuisine: ["Kebab", "Döner", "Baklava", "Turkish Delight", "Meze", "Lahmacun", "Börek"],
            arts: ["Calligraphy", "Miniature Painting", "Carpet Weaving", "Marbling (Ebru)"],
            sports: ["Football", "Basketball", "Wrestling", "Volleyball"]
        },

        symbols: {
            bird: "Redwing",
            animal: "Gray Wolf",
            flower: "Tulip",
            tree: "N/A",
            anthem: "İstiklâl Marşı (Independence March)",
            motto: "Yurtta sulh, cihanda sulh (Peace at home, peace in the world)"
        },

        demographics: {
            lifeExpectancy: 78.6,
            literacyRate: "96.7%",
            urbanPopulation: "76.6%",
            medianAge: 33.5
        },

        history: {
            timeline: [
                { year: "330 CE", title: "Constantinople", description: "Became capital of Eastern Roman Empire" },
                { year: "1299", title: "Ottoman Empire Founded", description: "Osman I founded Ottoman dynasty" },
                { year: "1453", title: "Fall of Constantinople", description: "Ottomans conquered Byzantine capital" },
                { year: "1923", title: "Republic", description: "Turkish Republic proclaimed by Atatürk" },
                { year: "1952", title: "NATO Membership", description: "Turkey joined NATO alliance" }
            ],
            notableFigures: ["Mustafa Kemal Atatürk", "Suleiman the Magnificent", "Mehmed II", "Rumi"]
        },

        disputes: [
            { name: "Cyprus", description: "Northern Cyprus recognized only by Turkey", type: "Border" },
            { name: "Aegean Sea", description: "Maritime boundary disputes with Greece", type: "Maritime" }
        ],

        quickFacts: [
            { icon: "bridge", title: "Transcontinental", text: "Spans Europe and Asia (Bosphorus)" },
            { icon: "landmark", title: "Istanbul", text: "Only city on two continents" },
            { icon: "coffee", title: "Turkish Coffee", text: "UNESCO Intangible Cultural Heritage" }
        ]
    },

    // 19. SOUTH AFRICA
    {
        id: "ZAF",
        name: "South Africa",
        officialName: "Republic of South Africa",
        flag: "https://flagcdn.com/w320/za.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1577948000111-9c970dfe3743?w=1920&q=80"
        },

        basic: {
            capital: "Pretoria (executive), Cape Town (legislative), Bloemfontein (judicial)",
            continent: "Africa",
            region: "Southern Africa",
            subregion: "Southern Africa",
            population: 60414495,
            area: 1221037,
            populationDensity: 49,
            independence: "1961 (Republic)",
            callingCode: "+27",
            tld: ".za",
            drivingSide: "Left",
            electricity: "230V, 50Hz"
        },

        location: {
            coordinates: [-30.5595, 22.9375],
            timezone: "UTC+2 (SAST)",
            neighbors: ["Namibia", "Botswana", "Zimbabwe", "Mozambique", "Eswatini", "Lesotho"],
            borders: 4862,
            hemispheres: ["Southern", "Eastern"]
        },

        political: {
            government: "Unitary Parliamentary Constitutional Republic",
            headOfState: "President Cyril Ramaphosa",
            headOfGovernment: "President Cyril Ramaphosa",
            legislature: "Parliament (National Council of Provinces & National Assembly)",
            legalSystem: "Mixed Legal System (Roman-Dutch, English Common Law)",
            states: 9,
            provinces: 9,
            largestCity: "Johannesburg",
            organizations: ["UN", "African Union", "BRICS", "G20", "Commonwealth", "WTO", "SADC"]
        },

        economy: {
            gdp: "$405 Billion",
            gdpPPP: "$953 Billion",
            gdpPerCapita: "$6,485",
            gdpRank: "#33",
            gdpGrowth: "0.6%",
            currency: "South African Rand",
            currencyCode: "ZAR",
            currencySymbol: "R",
            inflation: "5.3%",
            unemployment: "32.1%",
            majorSectors: ["Services (67%)", "Industry (29%)", "Agriculture (3%)"],
            industries: ["Mining", "Automobile", "Metalworking", "Machinery", "Textiles", "Chemicals"],
            exports: ["Gold", "Diamonds", "Platinum", "Coal", "Iron Ore", "Cars", "Machinery"],
            imports: ["Crude Petroleum", "Refined Petroleum", "Cars", "Computers", "Telephones"]
        },

        geography: {
            climate: "Mostly Semiarid, Subtropical (East Coast)",
            avgTemperature: "17.5°C",
            annualRainfall: "495 mm",
            highestPoint: "Mafadi (3,450 m)",
            lowestPoint: "Atlantic Ocean (0 m)",
            coastline: "2,798 km",
            forestCover: "7.6%",
            arableLand: "9.9%",
            terrain: "Vast interior plateau, narrow coastal plain, mountains",
            naturalResources: ["Gold", "Chromium", "Antimony", "Coal", "Iron Ore", "Manganese", "Nickel", "Phosphates", "Tin", "Rare Earth Elements", "Uranium", "Gem Diamonds", "Platinum", "Copper", "Vanadium"]
        },

        geography_links: {
            rivers: ["Orange River", "Vaal River", "Limpopo River"],
            mountains: ["Drakensberg", "Table Mountain", "Swartberg"],
            deserts: ["Kalahari Desert", "Namib Desert (edge)"],
            forests: ["Knysna Forest", "Tsitsikamma Forest"],
            oceans: ["Atlantic Ocean", "Indian Ocean"]
        },

        culture: {
            officialLanguages: ["Zulu", "Xhosa", "Afrikaans", "English", "Northern Sotho", "Tswana", "Sotho", "Tsonga", "Swazi", "Venda", "Ndebele"],
            languages: ["Zulu", "Xhosa", "Afrikaans", "English", "Sotho languages", "Tswana", "Venda"],
            religions: ["Christianity (80%)", "No Religion (15%)", "Islam (2%)", "Hinduism (1%)"],
            heritageSites: ["Robben Island", "Cradle of Humankind", "Cape Floral Region", "iSimangaliso Wetland Park", "Mapungubwe"],
            festivals: ["Heritage Day", "Freedom Day", "Youth Day", "Cape Town Jazz Festival"],
            cuisine: ["Braai (BBQ)", "Bobotie", "Biltong", "Boerewors", "Bunny Chow", "Potjiekos"],
            arts: ["Ndebele Art", "Zulu Beadwork", "Music (Ladysmith Black Mambazo)", "Literature"],
            sports: ["Rugby", "Cricket", "Football", "Golf", "Swimming"]
        },

        symbols: {
            bird: "Blue Crane",
            animal: "Springbok",
            flower: "King Protea",
            tree: "Real Yellowwood",
            anthem: "Nkosi Sikelel' iAfrika / Die Stem van Suid-Afrika",
            motto: "ǃke e꞉ ǀxarra ǁke (Unity in Diversity)"
        },

        demographics: {
            lifeExpectancy: 65.47,
            literacyRate: "95%",
            urbanPopulation: "68.3%",
            medianAge: 28.5
        },

        history: {
            timeline: [
                { year: "1652", title: "Dutch Settlement", description: "Jan van Riebeeck established Cape Colony" },
                { year: "1806", title: "British Control", description: "British took control of Cape Colony" },
                { year: "1910", title: "Union of South Africa", description: "Four colonies unified" },
                { year: "1948", title: "Apartheid", description: "Systematic racial segregation began" },
                { year: "1990", title: "End of Apartheid", description: "Nelson Mandela released, apartheid dismantled" },
                { year: "1994", title: "Democracy", description: "First democratic elections, Mandela became president" }
            ],
            notableFigures: ["Nelson Mandela", "Desmond Tutu", "Mahatma Gandhi (early career)", "F.W. de Klerk"]
        },

        disputes: [],

        quickFacts: [
            { icon: "flag", title: "Rainbow Nation", text: "11 official languages, diverse cultures" },
            { icon: "gem", title: "Mining", text: "World's largest platinum and chromium producer" },
            { icon: "mountain", title: "Table Mountain", text: "One of New7Wonders of Nature" },
            { icon: "bone", title: "Human Origins", text: "Cradle of Humankind (oldest human fossils)" }
        ]
    },

    // 20. EGYPT
    {
        id: "EGY",
        name: "Egypt",
        officialName: "Arab Republic of Egypt",
        flag: "https://flagcdn.com/w320/eg.png",
        
        images: {
            hero: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=1920&q=80",
            landscape: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=1920&q=80",
            city: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=1920&q=80"
        },

        basic: {
            capital: "Cairo",
            continent: "Africa",
            region: "North Africa",
            subregion: "Northern Africa",
            population: 112716598,
            area: 1001450,
            populationDensity: 103,
            independence: "1922 (from UK)",
            callingCode: "+20",
            tld: ".eg",
            drivingSide: "Right",
            electricity: "220V, 50Hz"
        },

        location: {
            coordinates: [26.8206, 30.8025],
            timezone: "UTC+2 (EET)",
            neighbors: ["Libya", "Sudan", "Israel", "Palestine (Gaza Strip)"],
            borders: 2612,
            hemispheres: ["Northern", "Eastern"],
            transcontinental: true
        },

        political: {
            government: "Unitary Semi-Presidential Republic",
            headOfState: "President Abdel Fattah el-Sisi",
            headOfGovernment: "Prime Minister Mostafa Madbouly",
            legislature: "Parliament (House of Representatives & Senate)",
            legalSystem: "Mixed (Civil Law, Islamic Law, Napoleonic Code)",
            states: 27,
            governorates: 27,
            largestCity: "Cairo",
            organizations: ["UN", "Arab League", "African Union", "OIC", "WTO"]
        },

        economy: {
            gdp: "$476 Billion",
            gdpPPP: "$1.56 Trillion",
            gdpPerCapita: "$4,100",
            gdpRank: "#28",
            gdpGrowth: "3.8%",
            currency: "Egyptian Pound",
            currencyCode: "EGP",
            currencySymbol: "E£",
            inflation: "27.1%",
            unemployment: "7.1%",
            majorSectors: ["Services (52%)", "Industry (32%)", "Agriculture (11%)"],
            industries: ["Textiles", "Food Processing", "Tourism", "Chemicals", "Petroleum", "Construction"],
            exports: ["Crude Petroleum", "Refined Petroleum", "Gold", "Fertilizers", "Citrus"],
            imports: ["Wheat", "Refined Petroleum", "Crude Petroleum", "Cars", "Packaged Medicines"]
        },

        geography: {
            climate: "Desert (Hot, Dry)",
            avgTemperature: "22.8°C",
            annualRainfall: "51 mm",
            highestPoint: "Mount Catherine (2,629 m)",
            lowestPoint: "Qattara Depression (-133 m)",
            coastline: "2,450 km",
            forestCover: "0.1%",
            arableLand: "2.8%",
            terrain: "Vast desert plateau, Nile Valley and Delta",
            naturalResources: ["Petroleum", "Natural Gas", "Iron Ore", "Phosphates", "Manganese", "Limestone", "Gypsum", "Talc", "Lead", "Rare Earth Elements", "Zinc"]
        },

        geography_links: {
            rivers: ["Nile River", "Suez Canal"],
            mountains: ["Sinai Mountains", "Red Sea Mountains"],
            deserts: ["Western Desert", "Eastern Desert", "Sinai Desert"],
            forests: [],
            oceans: ["Mediterranean Sea", "Red Sea"]
        },

        culture: {
            officialLanguages: ["Arabic"],
            languages: ["Arabic (Egyptian dialect)", "Sa'idi Arabic", "Nubian languages", "Beja"],
            religions: ["Islam (90% Sunni)", "Christianity (10% Coptic)"],
            heritageSites: ["Ancient Thebes (Luxor)", "Memphis and Necropolis (Giza Pyramids)", "Historic Cairo", "Abu Simbel", "Saint Catherine Area"],
            festivals: ["Eid al-Fitr", "Eid al-Adha", "Coptic Christmas", "Sham el-Nessim", "Revolution Day"],
            cuisine: ["Kushari", "Ful Medames", "Ta'meya (Falafel)", "Molokhia", "Shawarma", "Mahshi"],
            arts: ["Belly Dancing", "Arabic Calligraphy", "Traditional Music", "Film Industry (Bollywood of Middle East)"],
            sports: ["Football", "Squash", "Handball", "Swimming"]
        },

        symbols: {
            bird: "Golden Eagle (Coat of Arms)",
            animal: "Steppe Eagle",
            flower: "Egyptian Lotus",
            tree: "N/A",
            anthem: "Bilady, Bilady, Bilady",
            motto: "N/A"
        },

        demographics: {
            lifeExpectancy: 72.38,
            literacyRate: "71.2%",
            urbanPopulation: "42.8%",
            medianAge: 24.6
        },

        history: {
            timeline: [
                { year: "3100 BCE", title: "Unification", description: "Upper and Lower Egypt unified under first pharaoh" },
                { year: "2560 BCE", title: "Great Pyramid", description: "Great Pyramid of Giza constructed" },
                { year: "30 BCE", title: "Roman Egypt", description: "Cleopatra's death, Egypt became Roman province" },
                { year: "642 CE", title: "Arab Conquest", description: "Arabs conquered Egypt, Islam introduced" },
                { year: "1952", title: "Revolution", description: "Free Officers overthrew monarchy" },
                { year: "1956", title: "Suez Crisis", description: "Nationalization of Suez Canal" },
                { year: "1979", title: "Camp David", description: "Peace treaty with Israel" }
            ],
            notableFigures: ["Cleopatra VII", "Ramesses II", "Tutankhamun", "Gamal Abdel Nasser", "Anwar Sadat"]
        },

        disputes: [
            { name: "Halayeb Triangle", description: "Disputed with Sudan", type: "Border" }
        ],

        quickFacts: [
            { icon: "pyramid", title: "Pyramids", text: "Great Pyramid is only surviving ancient wonder" },
            { icon: "ship", title: "Suez Canal", text: "12% of global trade passes through" },
            { icon: "scroll", title: "Ancient Civilization", text: "5,000+ years of recorded history" },
            { icon: "water", title: "Nile River", text: "World's longest river (6,650 km)" },
            { icon: "sphinx", title: "Great Sphinx", text: "Oldest known monumental sculpture" }
        ]
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CountryData1;
}
