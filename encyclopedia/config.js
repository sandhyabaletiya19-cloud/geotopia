// ============================================
// GEOTOPIA ENCYCLOPEDIA CONFIGURATION
// ============================================
// To add new content:
// 1. Add entry to the appropriate category below
// 2. Create the HTML file in the corresponding folder
// That's it! The main page auto-updates!
// ============================================

const ENCYCLOPEDIA_CONFIG = {
    categories: [
        // ==================== COUNTRIES ====================
        {
            id: "countries",
            name: "Countries",
            icon: "🌍",
            items: [
                // ===== ASIA =====
                { id: "india", name: "India", icon: "🇮🇳", continent: "asia" },
                { id: "china", name: "China", icon: "🇨🇳", continent: "asia" },
                { id: "japan", name: "Japan", icon: "🇯🇵", continent: "asia" },
                { id: "south-korea", name: "South Korea", icon: "🇰🇷", continent: "asia" },
                { id: "north-korea", name: "North Korea", icon: "🇰🇵", continent: "asia" },
                { id: "pakistan", name: "Pakistan", icon: "🇵🇰", continent: "asia" },
                { id: "bangladesh", name: "Bangladesh", icon: "🇧🇩", continent: "asia" },
                { id: "sri-lanka", name: "Sri Lanka", icon: "🇱🇰", continent: "asia" },
                { id: "nepal", name: "Nepal", icon: "🇳🇵", continent: "asia" },
                { id: "bhutan", name: "Bhutan", icon: "🇧🇹", continent: "asia" },
                { id: "myanmar", name: "Myanmar", icon: "🇲🇲", continent: "asia" },
                { id: "thailand", name: "Thailand", icon: "🇹🇭", continent: "asia" },
                { id: "vietnam", name: "Vietnam", icon: "🇻🇳", continent: "asia" },
                { id: "malaysia", name: "Malaysia", icon: "🇲🇾", continent: "asia" },
                { id: "singapore", name: "Singapore", icon: "🇸🇬", continent: "asia" },
                { id: "indonesia", name: "Indonesia", icon: "🇮🇩", continent: "asia" },
                { id: "philippines", name: "Philippines", icon: "🇵🇭", continent: "asia" },
                { id: "afghanistan", name: "Afghanistan", icon: "🇦🇫", continent: "asia" },
                { id: "iran", name: "Iran", icon: "🇮🇷", continent: "asia" },
                { id: "iraq", name: "Iraq", icon: "🇮🇶", continent: "asia" },
                { id: "saudi-arabia", name: "Saudi Arabia", icon: "🇸🇦", continent: "asia" },
                { id: "uae", name: "UAE", icon: "🇦🇪", continent: "asia" },
                { id: "israel", name: "Israel", icon: "🇮🇱", continent: "asia" },
                { id: "turkey", name: "Turkey", icon: "🇹🇷", continent: "asia" },
                { id: "russia", name: "Russia", icon: "🇷🇺", continent: "asia" },
                { id: "kazakhstan", name: "Kazakhstan", icon: "🇰🇿", continent: "asia" },
                { id: "mongolia", name: "Mongolia", icon: "🇲🇳", continent: "asia" },
                
                // ===== EUROPE =====
                { id: "united-kingdom", name: "United Kingdom", icon: "🇬🇧", continent: "europe" },
                { id: "france", name: "France", icon: "🇫🇷", continent: "europe" },
                { id: "germany", name: "Germany", icon: "🇩🇪", continent: "europe" },
                { id: "italy", name: "Italy", icon: "🇮🇹", continent: "europe" },
                { id: "spain", name: "Spain", icon: "🇪🇸", continent: "europe" },
                { id: "portugal", name: "Portugal", icon: "🇵🇹", continent: "europe" },
                { id: "netherlands", name: "Netherlands", icon: "🇳🇱", continent: "europe" },
                { id: "belgium", name: "Belgium", icon: "🇧🇪", continent: "europe" },
                { id: "switzerland", name: "Switzerland", icon: "🇨🇭", continent: "europe" },
                { id: "austria", name: "Austria", icon: "🇦🇹", continent: "europe" },
                { id: "poland", name: "Poland", icon: "🇵🇱", continent: "europe" },
                { id: "ukraine", name: "Ukraine", icon: "🇺🇦", continent: "europe" },
                { id: "greece", name: "Greece", icon: "🇬🇷", continent: "europe" },
                { id: "sweden", name: "Sweden", icon: "🇸🇪", continent: "europe" },
                { id: "norway", name: "Norway", icon: "🇳🇴", continent: "europe" },
                { id: "finland", name: "Finland", icon: "🇫🇮", continent: "europe" },
                { id: "denmark", name: "Denmark", icon: "🇩🇰", continent: "europe" },
                { id: "ireland", name: "Ireland", icon: "🇮🇪", continent: "europe" },
                { id: "iceland", name: "Iceland", icon: "🇮🇸", continent: "europe" },
                { id: "czech-republic", name: "Czech Republic", icon: "🇨🇿", continent: "europe" },
                { id: "hungary", name: "Hungary", icon: "🇭🇺", continent: "europe" },
                { id: "romania", name: "Romania", icon: "🇷🇴", continent: "europe" },
                
                // ===== NORTH AMERICA =====
                { id: "usa", name: "United States", icon: "🇺🇸", continent: "north-america" },
                { id: "canada", name: "Canada", icon: "🇨🇦", continent: "north-america" },
                { id: "mexico", name: "Mexico", icon: "🇲🇽", continent: "north-america" },
                { id: "cuba", name: "Cuba", icon: "🇨🇺", continent: "north-america" },
                { id: "jamaica", name: "Jamaica", icon: "🇯🇲", continent: "north-america" },
                { id: "haiti", name: "Haiti", icon: "🇭🇹", continent: "north-america" },
                { id: "dominican-republic", name: "Dominican Republic", icon: "🇩🇴", continent: "north-america" },
                { id: "guatemala", name: "Guatemala", icon: "🇬🇹", continent: "north-america" },
                { id: "panama", name: "Panama", icon: "🇵🇦", continent: "north-america" },
                { id: "costa-rica", name: "Costa Rica", icon: "🇨🇷", continent: "north-america" },
                
                // ===== SOUTH AMERICA =====
                { id: "brazil", name: "Brazil", icon: "🇧🇷", continent: "south-america" },
                { id: "argentina", name: "Argentina", icon: "🇦🇷", continent: "south-america" },
                { id: "chile", name: "Chile", icon: "🇨🇱", continent: "south-america" },
                { id: "peru", name: "Peru", icon: "🇵🇪", continent: "south-america" },
                { id: "colombia", name: "Colombia", icon: "🇨🇴", continent: "south-america" },
                { id: "venezuela", name: "Venezuela", icon: "🇻🇪", continent: "south-america" },
                { id: "ecuador", name: "Ecuador", icon: "🇪🇨", continent: "south-america" },
                { id: "bolivia", name: "Bolivia", icon: "🇧🇴", continent: "south-america" },
                { id: "paraguay", name: "Paraguay", icon: "🇵🇾", continent: "south-america" },
                { id: "uruguay", name: "Uruguay", icon: "🇺🇾", continent: "south-america" },
                
                // ===== AFRICA =====
                { id: "egypt", name: "Egypt", icon: "🇪🇬", continent: "africa" },
                { id: "south-africa", name: "South Africa", icon: "🇿🇦", continent: "africa" },
                { id: "nigeria", name: "Nigeria", icon: "🇳🇬", continent: "africa" },
                { id: "kenya", name: "Kenya", icon: "🇰🇪", continent: "africa" },
                { id: "ethiopia", name: "Ethiopia", icon: "🇪🇹", continent: "africa" },
                { id: "morocco", name: "Morocco", icon: "🇲🇦", continent: "africa" },
                { id: "algeria", name: "Algeria", icon: "🇩🇿", continent: "africa" },
                { id: "tunisia", name: "Tunisia", icon: "🇹🇳", continent: "africa" },
                { id: "libya", name: "Libya", icon: "🇱🇾", continent: "africa" },
                { id: "sudan", name: "Sudan", icon: "🇸🇩", continent: "africa" },
                { id: "ghana", name: "Ghana", icon: "🇬🇭", continent: "africa" },
                { id: "tanzania", name: "Tanzania", icon: "🇹🇿", continent: "africa" },
                { id: "uganda", name: "Uganda", icon: "🇺🇬", continent: "africa" },
                { id: "rwanda", name: "Rwanda", icon: "🇷🇼", continent: "africa" },
                { id: "zimbabwe", name: "Zimbabwe", icon: "🇿🇼", continent: "africa" },
                { id: "congo", name: "DR Congo", icon: "🇨🇩", continent: "africa" },
                
                // ===== OCEANIA =====
                { id: "australia", name: "Australia", icon: "🇦🇺", continent: "oceania" },
                { id: "new-zealand", name: "New Zealand", icon: "🇳🇿", continent: "oceania" },
                { id: "fiji", name: "Fiji", icon: "🇫🇯", continent: "oceania" },
                { id: "papua-new-guinea", name: "Papua New Guinea", icon: "🇵🇬", continent: "oceania" },
            ]
        },
        
        // ==================== CONTINENTS ====================
        {
            id: "continents",
            name: "Continents",
            icon: "🌏",
            items: [
                { id: "asia", name: "Asia", icon: "🌏" },
                { id: "europe", name: "Europe", icon: "🌍" },
                { id: "africa", name: "Africa", icon: "🌍" },
                { id: "north-america", name: "North America", icon: "🌎" },
                { id: "south-america", name: "South America", icon: "🌎" },
                { id: "oceania", name: "Oceania", icon: "🌏" },
                { id: "antarctica", name: "Antarctica", icon: "🧊" },
            ]
        },
        
        // ==================== OCEANS ====================
        {
            id: "oceans",
            name: "Oceans & Seas",
            icon: "🌊",
            items: [
                { id: "pacific-ocean", name: "Pacific Ocean", icon: "🌊" },
                { id: "atlantic-ocean", name: "Atlantic Ocean", icon: "🌊" },
                { id: "indian-ocean", name: "Indian Ocean", icon: "🌊" },
                { id: "arctic-ocean", name: "Arctic Ocean", icon: "❄️" },
                { id: "southern-ocean", name: "Southern Ocean", icon: "🧊" },
                { id: "mediterranean-sea", name: "Mediterranean Sea", icon: "🏛️" },
                { id: "caribbean-sea", name: "Caribbean Sea", icon: "🏝️" },
                { id: "south-china-sea", name: "South China Sea", icon: "⚓" },
            ]
        },
        
        // ==================== MOUNTAINS ====================
        {
            id: "mountains",
            name: "Mountain Ranges",
            icon: "🏔️",
            items: [
                { id: "himalayas", name: "Himalayas", icon: "🏔️" },
                { id: "alps", name: "Alps", icon: "⛰️" },
                { id: "andes", name: "Andes", icon: "🏔️" },
                { id: "rockies", name: "Rocky Mountains", icon: "⛰️" },
                { id: "appalachians", name: "Appalachians", icon: "🏞️" },
                { id: "karakoram", name: "Karakoram", icon: "🏔️" },
                { id: "hindu-kush", name: "Hindu Kush", icon: "⛰️" },
                { id: "atlas", name: "Atlas Mountains", icon: "🏜️" },
            ]
        },
        
        // ==================== RIVERS ====================
        {
            id: "rivers",
            name: "Major Rivers",
            icon: "🏞️",
            items: [
                { id: "nile", name: "Nile River", icon: "🏛️" },
                { id: "amazon", name: "Amazon River", icon: "🌴" },
                { id: "yangtze", name: "Yangtze River", icon: "🐲" },
                { id: "mississippi", name: "Mississippi River", icon: "🦅" },
                { id: "ganges", name: "Ganges River", icon: "🙏" },
                { id: "mekong", name: "Mekong River", icon: "🌾" },
                { id: "danube", name: "Danube River", icon: "🏰" },
                { id: "congo-river", name: "Congo River", icon: "🌿" },
            ]
        },
        
        // ==================== DESERTS ====================
        {
            id: "deserts",
            name: "Deserts",
            icon: "🏜️",
            items: [
                { id: "sahara", name: "Sahara Desert", icon: "🏜️" },
                { id: "arabian", name: "Arabian Desert", icon: "🐪" },
                { id: "gobi", name: "Gobi Desert", icon: "🏜️" },
                { id: "kalahari", name: "Kalahari Desert", icon: "🦁" },
                { id: "atacama", name: "Atacama Desert", icon: "🌵" },
                { id: "thar", name: "Thar Desert", icon: "🐫" },
                { id: "mojave", name: "Mojave Desert", icon: "🌵" },
            ]
        },

        // ==================== IMPORTANT STRAITS ====================
        {
            id: "straits",
            name: "Important Straits",
            icon: "🚢",
            items: [
                { id: "strait-of-gibraltar", name: "Strait of Gibraltar", icon: "🚢" },
                { id: "strait-of-hormuz", name: "Strait of Hormuz", icon: "⛽" },
                { id: "strait-of-malacca", name: "Strait of Malacca", icon: "🚢" },
                { id: "bosphorus", name: "Bosphorus", icon: "🌉" },
                { id: "english-channel", name: "English Channel", icon: "🇬🇧" },
                { id: "palk-strait", name: "Palk Strait", icon: "🇮🇳" },
            ]
        }
    ]
};

// ============================================
// TO ADD A NEW CATEGORY IN FUTURE:
// ============================================
// 1. Copy this template and add to categories array:
// {
//     id: "your-category-id",
//     name: "Category Display Name",
//     icon: "🔥",
//     items: [
//         { id: "item-id", name: "Item Name", icon: "⭐" },
//     ]
// }
// 2. Create folder: encyclopedia/your-category-id/
// 3. Add HTML files: encyclopedia/your-category-id/item-id.html
// ============================================
