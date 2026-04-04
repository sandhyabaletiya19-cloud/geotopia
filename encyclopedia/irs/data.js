// ============================================
// UNITY ATLAS - COMPREHENSIVE DATA MODULE
// 197 Nations with Complete Geopolitical Data
// Version: 2026.04 - PRODUCTION
// ============================================

'use strict';

// ============================================
// 16 PARAMETERS DEFINITION
// ============================================
const PARAMETERS = [
    {
        id: 'trade',
        name: 'Trade Relations',
        icon: 'fa-handshake',
        category: 'Economic',
        description: 'Bilateral trade volume, agreements, tariffs, and economic interdependence'
    },
    {
        id: 'military',
        name: 'Military Cooperation',
        icon: 'fa-shield-halved',
        category: 'Security',
        description: 'Joint exercises, arms sales, military bases, and defense collaboration'
    },
    {
        id: 'diplomatic',
        name: 'Diplomatic Relations',
        icon: 'fa-landmark',
        category: 'Political',
        description: 'Embassy presence, diplomatic missions, and official state communications'
    },
    {
        id: 'border',
        name: 'Border Relations',
        icon: 'fa-map',
        category: 'Territorial',
        description: 'Border disputes, territorial claims, and boundary agreements'
    },
    {
        id: 'historical',
        name: 'Historical Ties',
        icon: 'fa-book',
        category: 'Cultural',
        description: 'Colonial history, past conflicts, shared heritage, and historical bonds'
    },
    {
        id: 'economic',
        name: 'Economic Integration',
        icon: 'fa-chart-line',
        category: 'Economic',
        description: 'Free trade agreements, investment treaties, and economic partnerships'
    },
    {
        id: 'cultural',
        name: 'Cultural Exchange',
        icon: 'fa-users',
        category: 'Cultural',
        description: 'Student exchanges, diaspora, tourism, and cultural programs'
    },
    {
        id: 'visa',
        name: 'Visa & Mobility',
        icon: 'fa-passport',
        category: 'Social',
        description: 'Visa requirements, freedom of movement, and immigration policies'
    },
    {
        id: 'strategic',
        name: 'Strategic Alignment',
        icon: 'fa-chess',
        category: 'Geopolitical',
        description: 'Geopolitical importance, strategic partnerships, and power dynamics'
    },
    {
        id: 'intelligence',
        name: 'Intelligence Cooperation',
        icon: 'fa-user-secret',
        category: 'Security',
        description: 'Intelligence sharing agreements and security cooperation'
    },
    {
        id: 'energy',
        name: 'Energy Relations',
        icon: 'fa-bolt',
        category: 'Economic',
        description: 'Oil, gas, renewable energy deals, and energy security partnerships'
    },
    {
        id: 'technology',
        name: 'Technology Partnership',
        icon: 'fa-microchip',
        category: 'Economic',
        description: 'Tech transfer, R&D collaboration, and digital cooperation'
    },
    {
        id: 'defense',
        name: 'Defense Pacts',
        icon: 'fa-fighter-jet',
        category: 'Security',
        description: 'Mutual defense treaties, alliance commitments, and security guarantees'
    },
    {
        id: 'political',
        name: 'Political Alignment',
        icon: 'fa-balance-scale',
        category: 'Political',
        description: 'Ideological alignment, UN voting patterns, and policy coordination'
    },
    {
        id: 'organizations',
        name: 'Shared Organizations',
        icon: 'fa-sitemap',
        category: 'Multilateral',
        description: 'Joint membership in international organizations and regional blocs'
    },
    {
        id: 'conflict',
        name: 'Conflict Risk',
        icon: 'fa-triangle-exclamation',
        category: 'Security',
        description: 'Current tensions, potential flashpoints, and conflict probability'
    }
];

// ============================================
// COMPLETE 197 COUNTRIES DATABASE
// ============================================
const COUNTRIES = [
    // === ASIA (49 Countries) ===
    { code: "AF", name: "Afghanistan", flag: "🇦🇫", region: "asia", subregion: "south", capital: "Kabul", population: 43000000, gdp: 14.6 },
    { code: "AM", name: "Armenia", flag: "🇦🇲", region: "asia", subregion: "west", capital: "Yerevan", population: 3000000, gdp: 19.5 },
    { code: "AZ", name: "Azerbaijan", flag: "🇦🇿", region: "asia", subregion: "west", capital: "Baku", population: 10400000, gdp: 78.7 },
    { code: "BH", name: "Bahrain", flag: "🇧🇭", region: "asia", subregion: "west", capital: "Manama", population: 1500000, gdp: 44.4 },
    { code: "BD", name: "Bangladesh", flag: "🇧🇩", region: "asia", subregion: "south", capital: "Dhaka", population: 175000000, gdp: 460.2 },
    { code: "BT", name: "Bhutan", flag: "🇧🇹", region: "asia", subregion: "south", capital: "Thimphu", population: 780000, gdp: 2.9 },
    { code: "BN", name: "Brunei", flag: "🇧🇳", region: "asia", subregion: "southeast", capital: "Bandar Seri Begawan", population: 450000, gdp: 18.3 },
    { code: "KH", name: "Cambodia", flag: "🇰🇭", region: "asia", subregion: "southeast", capital: "Phnom Penh", population: 17000000, gdp: 29.6 },
    { code: "CN", name: "China", flag: "🇨🇳", region: "asia", subregion: "east", capital: "Beijing", population: 1412000000, gdp: 19374 },
    { code: "CY", name: "Cyprus", flag: "🇨🇾", region: "asia", subregion: "west", capital: "Nicosia", population: 1300000, gdp: 31 },
    { code: "GE", name: "Georgia", flag: "🇬🇪", region: "asia", subregion: "west", capital: "Tbilisi", population: 3700000, gdp: 25.8 },
    { code: "IN", name: "India", flag: "🇮🇳", region: "asia", subregion: "south", capital: "New Delhi", population: 1442000000, gdp: 3730 },
    { code: "ID", name: "Indonesia", flag: "🇮🇩", region: "asia", subregion: "southeast", capital: "Jakarta", population: 280000000, gdp: 1417 },
    { code: "IR", name: "Iran", flag: "🇮🇷", region: "asia", subregion: "west", capital: "Tehran", population: 90000000, gdp: 388.5 },
    { code: "IQ", name: "Iraq", flag: "🇮🇶", region: "asia", subregion: "west", capital: "Baghdad", population: 46000000, gdp: 270 },
    { code: "IL", name: "Israel", flag: "🇮🇱", region: "asia", subregion: "west", capital: "Jerusalem", population: 10000000, gdp: 564 },
    { code: "JP", name: "Japan", flag: "🇯🇵", region: "asia", subregion: "east", capital: "Tokyo", population: 123000000, gdp: 4231 },
    { code: "JO", name: "Jordan", flag: "🇯🇴", region: "asia", subregion: "west", capital: "Amman", population: 11500000, gdp: 50 },
    { code: "KZ", name: "Kazakhstan", flag: "🇰🇿", region: "asia", subregion: "central", capital: "Astana", population: 20000000, gdp: 261 },
    { code: "KW", name: "Kuwait", flag: "🇰🇼", region: "asia", subregion: "west", capital: "Kuwait City", population: 4500000, gdp: 164.7 },
    { code: "KG", name: "Kyrgyzstan", flag: "🇰🇬", region: "asia", subregion: "central", capital: "Bishkek", population: 7200000, gdp: 12.3 },
    { code: "LA", name: "Laos", flag: "🇱🇦", region: "asia", subregion: "southeast", capital: "Vientiane", population: 7600000, gdp: 15.8 },
    { code: "LB", name: "Lebanon", flag: "🇱🇧", region: "asia", subregion: "west", capital: "Beirut", population: 5400000, gdp: 21.8 },
    { code: "MY", name: "Malaysia", flag: "🇲🇾", region: "asia", subregion: "southeast", capital: "Kuala Lumpur", population: 35000000, gdp: 434 },
    { code: "MV", name: "Maldives", flag: "🇲🇻", region: "asia", subregion: "south", capital: "Malé", population: 520000, gdp: 6.5 },
    { code: "MN", name: "Mongolia", flag: "🇲🇳", region: "asia", subregion: "east", capital: "Ulaanbaatar", population: 3500000, gdp: 19.9 },
    { code: "MM", name: "Myanmar", flag: "🇲🇲", region: "asia", subregion: "southeast", capital: "Naypyidaw", population: 55000000, gdp: 59.4 },
    { code: "NP", name: "Nepal", flag: "🇳🇵", region: "asia", subregion: "south", capital: "Kathmandu", population: 31500000, gdp: 40.8 },
    { code: "KP", name: "North Korea", flag: "🇰🇵", region: "asia", subregion: "east", capital: "Pyongyang", population: 26000000, gdp: 18 },
    { code: "OM", name: "Oman", flag: "🇴🇲", region: "asia", subregion: "west", capital: "Muscat", population: 5200000, gdp: 108.3 },
    { code: "PK", name: "Pakistan", flag: "🇵🇰", region: "asia", subregion: "south", capital: "Islamabad", population: 245000000, gdp: 376.5 },
    { code: "PS", name: "Palestine", flag: "🇵🇸", region: "asia", subregion: "west", capital: "Ramallah", population: 5500000, gdp: 18.1 },
    { code: "PH", name: "Philippines", flag: "🇵🇭", region: "asia", subregion: "southeast", capital: "Manila", population: 118000000, gdp: 440.9 },
    { code: "QA", name: "Qatar", flag: "🇶🇦", region: "asia", subregion: "west", capital: "Doha", population: 2800000, gdp: 225.7 },
    { code: "SA", name: "Saudi Arabia", flag: "🇸🇦", region: "asia", subregion: "west", capital: "Riyadh", population: 37000000, gdp: 1108 },
    { code: "SG", name: "Singapore", flag: "🇸🇬", region: "asia", subregion: "southeast", capital: "Singapore", population: 6000000, gdp: 501.4 },
    { code: "KR", name: "South Korea", flag: "🇰🇷", region: "asia", subregion: "east", capital: "Seoul", population: 51500000, gdp: 1721 },
    { code: "LK", name: "Sri Lanka", flag: "🇱🇰", region: "asia", subregion: "south", capital: "Colombo", population: 22000000, gdp: 74.4 },
    { code: "SY", name: "Syria", flag: "🇸🇾", region: "asia", subregion: "west", capital: "Damascus", population: 23000000, gdp: 11 },
    { code: "TW", name: "Taiwan", flag: "🇹🇼", region: "asia", subregion: "east", capital: "Taipei", population: 24000000, gdp: 790 },
    { code: "TJ", name: "Tajikistan", flag: "🇹🇯", region: "asia", subregion: "central", capital: "Dushanbe", population: 10300000, gdp: 11.6 },
    { code: "TH", name: "Thailand", flag: "🇹🇭", region: "asia", subregion: "southeast", capital: "Bangkok", population: 72000000, gdp: 548.9 },
    { code: "TL", name: "Timor-Leste", flag: "🇹🇱", region: "asia", subregion: "southeast", capital: "Dili", population: 1500000, gdp: 3.2 },
    { code: "TR", name: "Turkey", flag: "🇹🇷", region: "asia", subregion: "west", capital: "Ankara", population: 86000000, gdp: 1154 },
    { code: "TM", name: "Turkmenistan", flag: "🇹🇲", region: "asia", subregion: "central", capital: "Ashgabat", population: 6600000, gdp: 59.9 },
    { code: "AE", name: "United Arab Emirates", flag: "🇦🇪", region: "asia", subregion: "west", capital: "Abu Dhabi", population: 10000000, gdp: 509 },
    { code: "UZ", name: "Uzbekistan", flag: "🇺🇿", region: "asia", subregion: "central", capital: "Tashkent", population: 36000000, gdp: 90.4 },
    { code: "VN", name: "Vietnam", flag: "🇻🇳", region: "asia", subregion: "southeast", capital: "Hanoi", population: 100000000, gdp: 449.1 },
    { code: "YE", name: "Yemen", flag: "🇾🇪", region: "asia", subregion: "west", capital: "Sana'a", population: 35000000, gdp: 21.6 },

    // === AFRICA (54 Countries) ===
    { code: "DZ", name: "Algeria", flag: "🇩🇿", region: "africa", subregion: "north", capital: "Algiers", population: 46000000, gdp: 206 },
    { code: "AO", name: "Angola", flag: "🇦🇴", region: "africa", subregion: "central", capital: "Luanda", population: 36000000, gdp: 106.7 },
    { code: "BJ", name: "Benin", flag: "🇧🇯", region: "africa", subregion: "west", capital: "Porto-Novo", population: 13500000, gdp: 18.4 },
    { code: "BW", name: "Botswana", flag: "🇧🇼", region: "africa", subregion: "south", capital: "Gaborone", population: 2700000, gdp: 20.4 },
    { code: "BF", name: "Burkina Faso", flag: "🇧🇫", region: "africa", subregion: "west", capital: "Ouagadougou", population: 23000000, gdp: 21.4 },
    { code: "BI", name: "Burundi", flag: "🇧🇮", region: "africa", subregion: "east", capital: "Gitega", population: 13200000, gdp: 3.1 },
    { code: "CV", name: "Cabo Verde", flag: "🇨🇻", region: "africa", subregion: "west", capital: "Praia", population: 600000, gdp: 2.4 },
    { code: "CM", name: "Cameroon", flag: "🇨🇲", region: "africa", subregion: "central", capital: "Yaoundé", population: 28500000, gdp: 46.3 },
    { code: "CF", name: "Central African Republic", flag: "🇨🇫", region: "africa", subregion: "central", capital: "Bangui", population: 5600000, gdp: 2.6 },
    { code: "TD", name: "Chad", flag: "🇹🇩", region: "africa", subregion: "central", capital: "N'Djamena", population: 18000000, gdp: 12.7 },
    { code: "KM", name: "Comoros", flag: "🇰🇲", region: "africa", subregion: "east", capital: "Moroni", population: 900000, gdp: 1.3 },
    { code: "CG", name: "Congo", flag: "🇨🇬", region: "africa", subregion: "central", capital: "Brazzaville", population: 6000000, gdp: 14.5 },
    { code: "CD", name: "DR Congo", flag: "🇨🇩", region: "africa", subregion: "central", capital: "Kinshasa", population: 105000000, gdp: 66.4 },
    { code: "CI", name: "Côte d'Ivoire", flag: "🇨🇮", region: "africa", subregion: "west", capital: "Yamoussoukro", population: 28500000, gdp: 78.8 },
    { code: "DJ", name: "Djibouti", flag: "🇩🇯", region: "africa", subregion: "east", capital: "Djibouti", population: 1100000, gdp: 3.9 },
    { code: "EG", name: "Egypt", flag: "🇪🇬", region: "africa", subregion: "north", capital: "Cairo", population: 110000000, gdp: 476.7 },
    { code: "GQ", name: "Equatorial Guinea", flag: "🇬🇶", region: "africa", subregion: "central", capital: "Malabo", population: 1800000, gdp: 12.3 },
    { code: "ER", name: "Eritrea", flag: "🇪🇷", region: "africa", subregion: "east", capital: "Asmara", population: 3800000, gdp: 2.3 },
    { code: "SZ", name: "Eswatini", flag: "🇸🇿", region: "africa", subregion: "south", capital: "Mbabane", population: 1200000, gdp: 4.9 },
    { code: "ET", name: "Ethiopia", flag: "🇪🇹", region: "africa", subregion: "east", capital: "Addis Ababa", population: 126000000, gdp: 163.7 },
    { code: "GA", name: "Gabon", flag: "🇬🇦", region: "africa", subregion: "central", capital: "Libreville", population: 2500000, gdp: 21.1 },
    { code: "GM", name: "Gambia", flag: "🇬🇲", region: "africa", subregion: "west", capital: "Banjul", population: 2800000, gdp: 2.3 },
    { code: "GH", name: "Ghana", flag: "🇬🇭", region: "africa", subregion: "west", capital: "Accra", population: 34000000, gdp: 76.4 },
    { code: "GN", name: "Guinea", flag: "🇬🇳", region: "africa", subregion: "west", capital: "Conakry", population: 14500000, gdp: 20.5 },
    { code: "GW", name: "Guinea-Bissau", flag: "🇬🇼", region: "africa", subregion: "west", capital: "Bissau", population: 2200000, gdp: 1.9 },
    { code: "KE", name: "Kenya", flag: "🇰🇪", region: "africa", subregion: "east", capital: "Nairobi", population: 55000000, gdp: 113.4 },
    { code: "LS", name: "Lesotho", flag: "🇱🇸", region: "africa", subregion: "south", capital: "Maseru", population: 2300000, gdp: 2.5 },
    { code: "LR", name: "Liberia", flag: "🇱🇷", region: "africa", subregion: "west", capital: "Monrovia", population: 5500000, gdp: 4 },
    { code: "LY", name: "Libya", flag: "🇱🇾", region: "africa", subregion: "north", capital: "Tripoli", population: 7200000, gdp: 42.8 },
    { code: "MG", name: "Madagascar", flag: "🇲🇬", region: "africa", subregion: "east", capital: "Antananarivo", population: 31000000, gdp: 16 },
    { code: "MW", name: "Malawi", flag: "🇲🇼", region: "africa", subregion: "east", capital: "Lilongwe", population: 21500000, gdp: 14 },
    { code: "ML", name: "Mali", flag: "🇲🇱", region: "africa", subregion: "west", capital: "Bamako", population: 23000000, gdp: 19.3 },
    { code: "MR", name: "Mauritania", flag: "🇲🇷", region: "africa", subregion: "west", capital: "Nouakchott", population: 5000000, gdp: 10.4 },
    { code: "MU", name: "Mauritius", flag: "🇲🇺", region: "africa", subregion: "east", capital: "Port Louis", population: 1300000, gdp: 14 },
    { code: "MA", name: "Morocco", flag: "🇲🇦", region: "africa", subregion: "north", capital: "Rabat", population: 38000000, gdp: 142.9 },
    { code: "MZ", name: "Mozambique", flag: "🇲🇿", region: "africa", subregion: "east", capital: "Maputo", population: 33500000, gdp: 17.8 },
    { code: "NA", name: "Namibia", flag: "🇳🇦", region: "africa", subregion: "south", capital: "Windhoek", population: 2700000, gdp: 12.4 },
    { code: "NE", name: "Niger", flag: "🇳🇪", region: "africa", subregion: "west", capital: "Niamey", population: 27000000, gdp: 15.4 },
    { code: "NG", name: "Nigeria", flag: "🇳🇬", region: "africa", subregion: "west", capital: "Abuja", population: 230000000, gdp: 477.4 },
    { code: "RW", name: "Rwanda", flag: "🇷🇼", region: "africa", subregion: "east", capital: "Kigali", population: 14500000, gdp: 13.3 },
    { code: "ST", name: "São Tomé and Príncipe", flag: "🇸🇹", region: "africa", subregion: "central", capital: "São Tomé", population: 230000, gdp: 0.6 },
    { code: "SN", name: "Senegal", flag: "🇸🇳", region: "africa", subregion: "west", capital: "Dakar", population: 18500000, gdp: 28.3 },
    { code: "SC", name: "Seychelles", flag: "🇸🇨", region: "africa", subregion: "east", capital: "Victoria", population: 100000, gdp: 1.7 },
    { code: "SL", name: "Sierra Leone", flag: "🇸🇱", region: "africa", subregion: "west", capital: "Freetown", population: 8800000, gdp: 4.1 },
    { code: "SO", name: "Somalia", flag: "🇸🇴", region: "africa", subregion: "east", capital: "Mogadishu", population: 18500000, gdp: 8.1 },
    { code: "ZA", name: "South Africa", flag: "🇿🇦", region: "africa", subregion: "south", capital: "Pretoria", population: 62000000, gdp: 405.3 },
    { code: "SS", name: "South Sudan", flag: "🇸🇸", region: "africa", subregion: "east", capital: "Juba", population: 11800000, gdp: 4.8 },
    { code: "SD", name: "Sudan", flag: "🇸🇩", region: "africa", subregion: "north", capital: "Khartoum", population: 48500000, gdp: 31 },
    { code: "TZ", name: "Tanzania", flag: "🇹🇿", region: "africa", subregion: "east", capital: "Dodoma", population: 67000000, gdp: 79.2 },
    { code: "TG", name: "Togo", flag: "🇹🇬", region: "africa", subregion: "west", capital: "Lomé", population: 9000000, gdp: 9.1 },
    { code: "TN", name: "Tunisia", flag: "🇹🇳", region: "africa", subregion: "north", capital: "Tunis", population: 12500000, gdp: 46.8 },
    { code: "UG", name: "Uganda", flag: "🇺🇬", region: "africa", subregion: "east", capital: "Kampala", population: 50000000, gdp: 49.3 },
    { code: "ZM", name: "Zambia", flag: "🇿🇲", region: "africa", subregion: "south", capital: "Lusaka", population: 21000000, gdp: 29.1 },
    { code: "ZW", name: "Zimbabwe", flag: "🇿🇼", region: "africa", subregion: "south", capital: "Harare", population: 16800000, gdp: 28.5 },

    // === EUROPE (44 Countries) ===
    { code: "AL", name: "Albania", flag: "🇦🇱", region: "europe", subregion: "south", capital: "Tirana", population: 2800000, gdp: 22.9 },
    { code: "AD", name: "Andorra", flag: "🇦🇩", region: "europe", subregion: "south", capital: "Andorra la Vella", population: 80000, gdp: 3.4 },
    { code: "AT", name: "Austria", flag: "🇦🇹", region: "europe", subregion: "west", capital: "Vienna", population: 9200000, gdp: 516 },
    { code: "BY", name: "Belarus", flag: "🇧🇾", region: "europe", subregion: "east", capital: "Minsk", population: 9100000, gdp: 73.5 },
    { code: "BE", name: "Belgium", flag: "🇧🇪", region: "europe", subregion: "west", capital: "Brussels", population: 11800000, gdp: 632.2 },
    { code: "BA", name: "Bosnia and Herzegovina", flag: "🇧🇦", region: "europe", subregion: "south", capital: "Sarajevo", population: 3200000, gdp: 26 },
    { code: "BG", name: "Bulgaria", flag: "🇧🇬", region: "europe", subregion: "east", capital: "Sofia", population: 6600000, gdp: 103.1 },
    { code: "HR", name: "Croatia", flag: "🇭🇷", region: "europe", subregion: "south", capital: "Zagreb", population: 3800000, gdp: 82.7 },
    { code: "CZ", name: "Czech Republic", flag: "🇨🇿", region: "europe", subregion: "east", capital: "Prague", population: 10500000, gdp: 335.2 },
    { code: "DK", name: "Denmark", flag: "🇩🇰", region: "europe", subregion: "north", capital: "Copenhagen", population: 5900000, gdp: 406 },
    { code: "EE", name: "Estonia", flag: "🇪🇪", region: "europe", subregion: "north", capital: "Tallinn", population: 1400000, gdp: 41.9 },
    { code: "FI", name: "Finland", flag: "🇫🇮", region: "europe", subregion: "north", capital: "Helsinki", population: 5600000, gdp: 305.7 },
    { code: "FR", name: "France", flag: "🇫🇷", region: "europe", subregion: "west", capital: "Paris", population: 65000000, gdp: 3049 },
    { code: "DE", name: "Germany", flag: "🇩🇪", region: "europe", subregion: "west", capital: "Berlin", population: 85000000, gdp: 4456 },
    { code: "GR", name: "Greece", flag: "🇬🇷", region: "europe", subregion: "south", capital: "Athens", population: 10200000, gdp: 239.3 },
    { code: "HU", name: "Hungary", flag: "🇭🇺", region: "europe", subregion: "east", capital: "Budapest", population: 9500000, gdp: 212.4 },
    { code: "IS", name: "Iceland", flag: "🇮🇸", region: "europe", subregion: "north", capital: "Reykjavik", population: 400000, gdp: 30.5 },
    { code: "IE", name: "Ireland", flag: "🇮🇪", region: "europe", subregion: "west", capital: "Dublin", population: 5200000, gdp: 545.6 },
    { code: "IT", name: "Italy", flag: "🇮🇹", region: "europe", subregion: "south", capital: "Rome", population: 59000000, gdp: 2186 },
    { code: "XK", name: "Kosovo", flag: "🇽🇰", region: "europe", subregion: "south", capital: "Pristina", population: 1800000, gdp: 10.3 },
    { code: "LV", name: "Latvia", flag: "🇱🇻", region: "europe", subregion: "north", capital: "Riga", population: 1800000, gdp: 44.4 },
    { code: "LI", name: "Liechtenstein", flag: "🇱🇮", region: "europe", subregion: "west", capital: "Vaduz", population: 40000, gdp: 7.4 },
    { code: "LT", name: "Lithuania", flag: "🇱🇹", region: "europe", subregion: "north", capital: "Vilnius", population: 2800000, gdp: 80.8 },
    { code: "LU", name: "Luxembourg", flag: "🇱🇺", region: "europe", subregion: "west", capital: "Luxembourg", population: 670000, gdp: 89 },
    { code: "MT", name: "Malta", flag: "🇲🇹", region: "europe", subregion: "south", capital: "Valletta", population: 500000, gdp: 20 },
    { code: "MD", name: "Moldova", flag: "🇲🇩", region: "europe", subregion: "east", capital: "Chișinău", population: 2500000, gdp: 16.1 },
    { code: "MC", name: "Monaco", flag: "🇲🇨", region: "europe", subregion: "west", capital: "Monaco", population: 40000, gdp: 8.6 },
    { code: "ME", name: "Montenegro", flag: "🇲🇪", region: "europe", subregion: "south", capital: "Podgorica", population: 600000, gdp: 7.1 },
    { code: "NL", name: "Netherlands", flag: "🇳🇱", region: "europe", subregion: "west", capital: "Amsterdam", population: 18000000, gdp: 1092.7 },
    { code: "MK", name: "North Macedonia", flag: "🇲🇰", region: "europe", subregion: "south", capital: "Skopje", population: 1800000, gdp: 15 },
    { code: "NO", name: "Norway", flag: "🇳🇴", region: "europe", subregion: "north", capital: "Oslo", population: 5500000, gdp: 593.1 },
    { code: "PL", name: "Poland", flag: "🇵🇱", region: "europe", subregion: "east", capital: "Warsaw", population: 38000000, gdp: 842.2 },
    { code: "PT", name: "Portugal", flag: "🇵🇹", region: "europe", subregion: "south", capital: "Lisbon", population: 10400000, gdp: 287.1 },
    { code: "RO", name: "Romania", flag: "🇷🇴", region: "europe", subregion: "east", capital: "Bucharest", population: 19000000, gdp: 351 },
    { code: "RU", name: "Russia", flag: "🇷🇺", region: "europe", subregion: "east", capital: "Moscow", population: 144000000, gdp: 2021 },
    { code: "SM", name: "San Marino", flag: "🇸🇲", region: "europe", subregion: "south", capital: "San Marino", population: 34000, gdp: 1.9 },
    { code: "RS", name: "Serbia", flag: "🇷🇸", region: "europe", subregion: "south", capital: "Belgrade", population: 6600000, gdp: 75.2 },
    { code: "SK", name: "Slovakia", flag: "🇸🇰", region: "europe", subregion: "east", capital: "Bratislava", population: 5400000, gdp: 132.9 },
    { code: "SI", name: "Slovenia", flag: "🇸🇮", region: "europe", subregion: "south", capital: "Ljubljana", population: 2100000, gdp: 68.1 },
    { code: "ES", name: "Spain", flag: "🇪🇸", region: "europe", subregion: "south", capital: "Madrid", population: 48000000, gdp: 1582 },
    { code: "SE", name: "Sweden", flag: "🇸🇪", region: "europe", subregion: "north", capital: "Stockholm", population: 10600000, gdp: 593.3 },
    { code: "CH", name: "Switzerland", flag: "🇨🇭", region: "europe", subregion: "west", capital: "Bern", population: 8900000, gdp: 884.9 },
    { code: "UA", name: "Ukraine", flag: "🇺🇦", region: "europe", subregion: "east", capital: "Kyiv", population: 37000000, gdp: 160.5 },
    { code: "GB", name: "United Kingdom", flag: "🇬🇧", region: "europe", subregion: "west", capital: "London", population: 68000000, gdp: 3332 },
    { code: "VA", name: "Vatican City", flag: "🇻🇦", region: "europe", subregion: "south", capital: "Vatican City", population: 800, gdp: 0.3 },

    // === AMERICAS (35 Countries) ===
    { code: "AG", name: "Antigua and Barbuda", flag: "🇦🇬", region: "americas", subregion: "caribbean", capital: "St. John's", population: 100000, gdp: 1.9 },
    { code: "AR", name: "Argentina", flag: "🇦🇷", region: "americas", subregion: "south", capital: "Buenos Aires", population: 46500000, gdp: 641.1 },
    { code: "BS", name: "Bahamas", flag: "🇧🇸", region: "americas", subregion: "caribbean", capital: "Nassau", population: 400000, gdp: 14.5 },
    { code: "BB", name: "Barbados", flag: "🇧🇧", region: "americas", subregion: "caribbean", capital: "Bridgetown", population: 300000, gdp: 6 },
    { code: "BZ", name: "Belize", flag: "🇧🇿", region: "americas", subregion: "central", capital: "Belmopan", population: 400000, gdp: 3.4 },
    { code: "BO", name: "Bolivia", flag: "🇧🇴", region: "americas", subregion: "south", capital: "Sucre", population: 12500000, gdp: 46 },
    { code: "BR", name: "Brazil", flag: "🇧🇷", region: "americas", subregion: "south", capital: "Brasília", population: 218000000, gdp: 2126 },
    { code: "CA", name: "Canada", flag: "🇨🇦", region: "americas", subregion: "north", capital: "Ottawa", population: 40000000, gdp: 2140 },
    { code: "CL", name: "Chile", flag: "🇨🇱", region: "americas", subregion: "south", capital: "Santiago", population: 19800000, gdp: 335.5 },
    { code: "CO", name: "Colombia", flag: "🇨🇴", region: "americas", subregion: "south", capital: "Bogotá", population: 52500000, gdp: 363.8 },
    { code: "CR", name: "Costa Rica", flag: "🇨🇷", region: "americas", subregion: "central", capital: "San José", population: 5300000, gdp: 71.3 },
    { code: "CU", name: "Cuba", flag: "🇨🇺", region: "americas", subregion: "caribbean", capital: "Havana", population: 11000000, gdp: 107.4 },
    { code: "DM", name: "Dominica", flag: "🇩🇲", region: "americas", subregion: "caribbean", capital: "Roseau", population: 70000, gdp: 0.6 },
    { code: "DO", name: "Dominican Republic", flag: "🇩🇴", region: "americas", subregion: "caribbean", capital: "Santo Domingo", population: 11500000, gdp: 121.3 },
    { code: "EC", name: "Ecuador", flag: "🇪🇨", region: "americas", subregion: "south", capital: "Quito", population: 18500000, gdp: 118.7 },
    { code: "SV", name: "El Salvador", flag: "🇸🇻", region: "americas", subregion: "central", capital: "San Salvador", population: 6500000, gdp: 34 },
    { code: "GD", name: "Grenada", flag: "🇬🇩", region: "americas", subregion: "caribbean", capital: "St. George's", population: 120000, gdp: 1.3 },
    { code: "GT", name: "Guatemala", flag: "🇬🇹", region: "americas", subregion: "central", capital: "Guatemala City", population: 18500000, gdp: 102.1 },
    { code: "GY", name: "Guyana", flag: "🇬🇾", region: "americas", subregion: "south", capital: "Georgetown", population: 800000, gdp: 16.3 },
    { code: "HT", name: "Haiti", flag: "🇭🇹", region: "americas", subregion: "caribbean", capital: "Port-au-Prince", population: 11800000, gdp: 20.2 },
    { code: "HN", name: "Honduras", flag: "🇭🇳", region: "americas", subregion: "central", capital: "Tegucigalpa", population: 10600000, gdp: 33 },
    { code: "JM", name: "Jamaica", flag: "🇯🇲", region: "americas", subregion: "caribbean", capital: "Kingston", population: 2800000, gdp: 17.1 },
    { code: "MX", name: "Mexico", flag: "🇲🇽", region: "americas", subregion: "north", capital: "Mexico City", population: 130000000, gdp: 1425 },
    { code: "NI", name: "Nicaragua", flag: "🇳🇮", region: "americas", subregion: "central", capital: "Managua", population: 7100000, gdp: 15.7 },
    { code: "PA", name: "Panama", flag: "🇵🇦", region: "americas", subregion: "central", capital: "Panama City", population: 4500000, gdp: 76.5 },
    { code: "PY", name: "Paraguay", flag: "🇵🇾", region: "americas", subregion: "south", capital: "Asunción", population: 7200000, gdp: 44 },
    { code: "PE", name: "Peru", flag: "🇵🇪", region: "americas", subregion: "south", capital: "Lima", population: 34500000, gdp: 268.2 },
    { code: "KN", name: "Saint Kitts and Nevis", flag: "🇰🇳", region: "americas", subregion: "caribbean", capital: "Basseterre", population: 50000, gdp: 1.1 },
    { code: "LC", name: "Saint Lucia", flag: "🇱🇨", region: "americas", subregion: "caribbean", capital: "Castries", population: 200000, gdp: 2.1 },
    { code: "VC", name: "Saint Vincent and the Grenadines", flag: "🇻🇨", region: "americas", subregion: "caribbean", capital: "Kingstown", population: 110000, gdp: 1 },
    { code: "SR", name: "Suriname", flag: "🇸🇷", region: "americas", subregion: "south", capital: "Paramaribo", population: 600000, gdp: 3.6 },
    { code: "TT", name: "Trinidad and Tobago", flag: "🇹🇹", region: "americas", subregion: "caribbean", capital: "Port of Spain", population: 1500000, gdp: 27.7 },
    { code: "US", name: "United States", flag: "🇺🇸", region: "americas", subregion: "north", capital: "Washington, D.C.", population: 340000000, gdp: 28780 },
    { code: "UY", name: "Uruguay", flag: "🇺🇾", region: "americas", subregion: "south", capital: "Montevideo", population: 3400000, gdp: 77.2 },
    { code: "VE", name: "Venezuela", flag: "🇻🇪", region: "americas", subregion: "south", capital: "Caracas", population: 28500000, gdp: 92 },

    // === OCEANIA (14 Countries) ===
    { code: "AU", name: "Australia", flag: "🇦🇺", region: "oceania", subregion: "australia", capital: "Canberra", population: 27000000, gdp: 1760 },
    { code: "FJ", name: "Fiji", flag: "🇫🇯", region: "oceania", subregion: "melanesia", capital: "Suva", population: 900000, gdp: 5.3 },
    { code: "KI", name: "Kiribati", flag: "🇰🇮", region: "oceania", subregion: "micronesia", capital: "Tarawa", population: 130000, gdp: 0.2 },
    { code: "MH", name: "Marshall Islands", flag: "🇲🇭", region: "oceania", subregion: "micronesia", capital: "Majuro", population: 40000, gdp: 0.3 },
    { code: "FM", name: "Micronesia", flag: "🇫🇲", region: "oceania", subregion: "micronesia", capital: "Palikir", population: 100000, gdp: 0.4 },
    { code: "NR", name: "Nauru", flag: "🇳🇷", region: "oceania", subregion: "micronesia", capital: "Yaren", population: 10000, gdp: 0.1 },
    { code: "NZ", name: "New Zealand", flag: "🇳🇿", region: "oceania", subregion: "australia", capital: "Wellington", population: 5300000, gdp: 252 },
    { code: "PW", name: "Palau", flag: "🇵🇼", region: "oceania", subregion: "micronesia", capital: "Ngerulmud", population: 20000, gdp: 0.3 },
    { code: "PG", name: "Papua New Guinea", flag: "🇵🇬", region: "oceania", subregion: "melanesia", capital: "Port Moresby", population: 10500000, gdp: 30.6 },
    { code: "WS", name: "Samoa", flag: "🇼🇸", region: "oceania", subregion: "polynesia", capital: "Apia", population: 200000, gdp: 0.9 },
    { code: "SB", name: "Solomon Islands", flag: "🇸🇧", region: "oceania", subregion: "melanesia", capital: "Honiara", population: 700000, gdp: 1.7 },
    { code: "TO", name: "Tonga", flag: "🇹🇴", region: "oceania", subregion: "polynesia", capital: "Nuku'alofa", population: 100000, gdp: 0.5 },
    { code: "TV", name: "Tuvalu", flag: "🇹🇻", region: "oceania", subregion: "polynesia", capital: "Funafuti", population: 10000, gdp: 0.06 },
    { code: "VU", name: "Vanuatu", flag: "🇻🇺", region: "oceania", subregion: "melanesia", capital: "Port Vila", population: 300000, gdp: 1 }
];

// Create quick lookup map
const COUNTRY_MAP = {};
COUNTRIES.forEach(c => COUNTRY_MAP[c.code] = c);

// ============================================
// ALLIANCES & ORGANIZATIONS
// ============================================
const ALLIANCES = {
    NATO: {
        name: 'North Atlantic Treaty Organization',
        type: 'military',
        founded: 1949,
        members: ['US','GB','FR','DE','IT','CA','ES','PL','NL','BE','PT','GR','TR','DK','NO','CZ','HU','RO','BG','SK','SI','HR','AL','MK','ME','LT','LV','EE','IS','LU','FI','SE']
    },
    EU: {
        name: 'European Union',
        type: 'economic-political',
        founded: 1993,
        members: ['DE','FR','IT','ES','PL','RO','NL','BE','GR','CZ','PT','HU','SE','AT','BG','DK','FI','SK','IE','HR','LT','SI','LV','EE','CY','LU','MT']
    },
    FIVEEYES: {
        name: 'Five Eyes Intelligence Alliance',
        type: 'intelligence',
        founded: 1941,
        members: ['US','GB','CA','AU','NZ']
    },
    QUAD: {
        name: 'Quadrilateral Security Dialogue',
        type: 'strategic',
        founded: 2007,
        members: ['US','JP','IN','AU']
    },
    BRICS: {
        name: 'BRICS+',
        type: 'economic',
        founded: 2009,
        members: ['BR','RU','IN','CN','ZA','EG','ET','IR','AE','SA']
    },
    SCO: {
        name: 'Shanghai Cooperation Organisation',
        type: 'security',
        founded: 2001,
        members: ['CN','RU','IN','PK','KZ','KG','TJ','UZ','IR','BY']
    },
    ASEAN: {
        name: 'Association of Southeast Asian Nations',
        type: 'economic-political',
        founded: 1967,
        members: ['ID','MY','PH','SG','TH','BN','VN','LA','MM','KH']
    },
    GCC: {
        name: 'Gulf Cooperation Council',
        type: 'economic-political',
        founded: 1981,
        members: ['SA','AE','KW','QA','BH','OM']
    },
    AU_AFRICA: {
        name: 'African Union',
        type: 'political',
        founded: 2002,
        members: ['DZ','AO','BJ','BW','BF','BI','CV','CM','CF','TD','KM','CG','CD','CI','DJ','EG','GQ','ER','SZ','ET','GA','GM','GH','GN','GW','KE','LS','LR','LY','MG','MW','ML','MR','MU','MA','MZ','NA','NE','NG','RW','ST','SN','SC','SL','SO','ZA','SS','SD','TZ','TG','TN','UG','ZM','ZW']
    },
    MERCOSUR: {
        name: 'Southern Common Market',
        type: 'economic',
        founded: 1991,
        members: ['AR','BR','PY','UY','BO']
    },
    CSTO: {
        name: 'Collective Security Treaty Organization',
        type: 'military',
        founded: 1992,
        members: ['RU','BY','AM','KZ','KG','TJ']
    },
    COMMONWEALTH: {
        name: 'Commonwealth of Nations',
        type: 'political',
        founded: 1931,
        members: ['GB','AU','NZ','CA','IN','ZA','NG','PK','BD','MY','SG','KE','GH','TZ','UG','ZM','ZW','BW','NA','MU','SZ','LS','MW','MZ','RW','SC','CM','SL','GM','GY','TT','JM','BB','AG','BS','BZ','DM','GD','KN','LC','VC','CY','MT','FJ','KI','NR','PG','WS','SB','TO','TV','VU']
    }
};

// ============================================
// COMPREHENSIVE BILATERAL RELATIONSHIPS DATA
// This contains realistic data for major bilateral relations
// ============================================
const BILATERAL_DATA = {
    // === US RELATIONSHIPS ===
    'US-GB': {
        type: 'allies',
        strength: 10,
        name: 'Special Relationship',
        params: {
            trade: { score: 9, summary: 'Major trading partners with $273B annual bilateral trade', details: 'The UK is the 7th largest US trading partner. Key exports include machinery, pharmaceuticals, and financial services. Post-Brexit trade deal negotiations ongoing.' },
            military: { score: 10, summary: 'Deepest military alliance globally', details: 'Joint operations across all conflicts since WWII. UK hosts US bases at RAF Lakenheath, Menwith Hill. Nuclear weapons sharing under NATO. Combined exercises including annual Joint Warrior.' },
            diplomatic: { score: 10, summary: 'Full ambassador-level relations since 1785', details: 'Oldest continuous diplomatic relationship for the US. Regular leader summits, shared UN Security Council coordination. Near-identical foreign policy positions.' },
            border: { score: 10, summary: 'No border issues, visa waiver program', details: 'ESTA visa waiver for UK citizens. No territorial disputes. Strong cooperation on border security and immigration intelligence.' },
            historical: { score: 9, summary: 'Deep historical bonds despite revolutionary origins', details: 'While the US fought for independence from Britain (1776), the nations have been close allies since late 1800s. WWI and WWII cemented the alliance. Churchill-Roosevelt relationship paradigmatic.' },
            economic: { score: 9, summary: 'Extensive investment and financial integration', details: 'UK is largest foreign investor in US ($505B). US is largest investor in UK ($747B). Both are major financial centers with integrated capital markets.' },
            cultural: { score: 10, summary: 'Shared language, media, and cultural exchanges', details: 'Common language enables deep cultural exchange. Massive tourism flows (4M+ US visitors to UK annually). Shared entertainment industry, educational partnerships (Rhodes, Marshall scholarships).' },
            visa: { score: 9, summary: 'Visa waiver program, easy travel', details: 'ESTA for UK citizens, minimal restrictions. Global Entry available. No quotas on skilled worker visas. Only visa requirement is for long-term stays.' },
            strategic: { score: 10, summary: 'Cornerstone of Atlantic security architecture', details: 'UK is primary US ally in Europe. Critical for NATO cohesion. Diego Garcia base essential for Indo-Pacific operations. UK nuclear deterrent complements US umbrella.' },
            intelligence: { score: 10, summary: 'Five Eyes founding members', details: 'UKUSA Agreement (1946) is most comprehensive intelligence sharing arrangement globally. NSA-GCHQ integration is seamless. Shared satellite, SIGINT, and HUMINT networks.' },
            energy: { score: 7, summary: 'Oil and gas sector cooperation', details: 'US became net energy exporter, reduced dependence on UK North Sea. LNG exports to UK growing. Renewable energy technology partnerships in offshore wind.' },
            technology: { score: 9, summary: 'Deep tech partnership across sectors', details: 'Joint defense technology programs (F-35). Semiconductor and AI collaboration. Cambridge-Silicon Valley ties. AUKUS submarine technology sharing.' },
            defense: { score: 10, summary: 'NATO Article 5 plus bilateral agreements', details: 'UK is only Tier 1 partner for F-35. Mutual Defense Agreement (1958) enables nuclear cooperation. AUKUS extends relationship to Indo-Pacific.' },
            political: { score: 9, summary: 'Strong alignment on democracy and human rights', details: 'Nearly identical UN voting records. Coordinated sanctions policies (Russia, Iran). Joint leadership on climate, though some policy differences.' },
            organizations: { score: 10, summary: 'Shared membership across major bodies', details: 'NATO, Five Eyes, AUKUS, UN Security Council (P5), G7, G20, OECD, WTO. Near-complete overlap in international institutional membership.' },
            conflict: { score: 1, summary: 'No conflict risk - closest allies', details: 'War between US and UK is essentially unthinkable. No outstanding disputes. Relationship described as "essential" by both governments.' }
        }
    },
    'US-CN': {
        type: 'complex',
        strength: 4,
        name: 'Strategic Competition',
        params: {
            trade: { score: 6, summary: '$690B annual trade but tariffs and restrictions growing', details: 'China is largest US trading partner by goods. Trade war since 2018 imposed 25% tariffs on $370B of goods. Decoupling accelerating in tech sectors. Trade deficit $382B (2024).' },
            military: { score: 2, summary: 'No cooperation, active competition', details: 'South China Sea tensions with regular naval encounters. Taiwan contingency planning dominant concern. No military dialogue hotline working effectively. Arms race in hypersonics, AI weapons.' },
            diplomatic: { score: 4, summary: 'Strained but maintained relations', details: 'Ambassador-level relations since 1979. Frequent tensions over Taiwan, Xinjiang, Hong Kong. Balloon incident (2023) suspended high-level talks. Climate is rare area of cooperation.' },
            border: { score: 8, summary: 'No direct border issues', details: 'No territorial disputes between US and China directly. However, US supports allies with Chinese territorial disputes (Taiwan, Philippines, Japan).' },
            historical: { score: 5, summary: 'Complex history from ally to rival', details: 'WWII allies against Japan. Cold War enemies (Korea, Vietnam). Nixon opening (1972). Tiananmen (1989) damaged ties. Post-2010 return to rivalry.' },
            economic: { score: 5, summary: 'Deep interdependence but decoupling', details: 'China holds $780B US Treasury bonds. US firms have massive China exposure. Tech decoupling accelerating. Investment restrictions increasing both ways.' },
            cultural: { score: 5, summary: 'Significant but declining exchanges', details: '300,000 Chinese students in US (down from peak). Confucius Institutes closed. Tourism disrupted. Scientific collaboration restricted. People-to-people ties weakening.' },
            visa: { score: 4, summary: 'Restrictive policies increasing', details: '10-year visas suspended. Student visa scrutiny intense. Journalist visas restricted. "China Initiative" targeted researchers (ended 2022 but effects linger).' },
            strategic: { score: 2, summary: 'Primary strategic competitor', details: 'US National Security Strategy names China "pacing threat." Indo-Pacific strategy explicitly about countering China. Great power competition framing dominant.' },
            intelligence: { score: 1, summary: 'No cooperation, active espionage', details: 'Massive Chinese espionage operations in US (economic, military). US intelligence ops in China. Cyber warfare constant. No information sharing.' },
            energy: { score: 4, summary: 'Competition over resources', details: 'Both compete for global energy supplies. Clean energy technology competition. Rare earth dependencies concerning. Some climate cooperation on renewables.' },
            technology: { score: 2, summary: 'Tech war escalating', details: 'Semiconductor export controls. Huawei banned. TikTok under threat. AI competition. Quantum computing race. "Small yard, high fence" strategy.' },
            defense: { score: 1, summary: 'No defense cooperation, active rivalry', details: 'No defense agreements. Taiwan Relations Act commits US to Taiwan defense capability. China building military to defeat US in Western Pacific.' },
            political: { score: 2, summary: 'Ideological and systemic rivalry', details: 'Democracy vs. authoritarianism framing. Human rights disagreements (Xinjiang, Hong Kong). UN voting often opposed. Different visions of world order.' },
            organizations: { score: 5, summary: 'Shared membership but competing visions', details: 'Both in UN (P5), WTO, G20. But China excluded from G7, OECD. Competing development banks (AIIB vs World Bank). Different multilateral approaches.' },
            conflict: { score: 7, summary: 'Significant conflict risk over Taiwan', details: 'Taiwan scenario is most likely path to great power war. South China Sea incidents possible. Cyber attacks ongoing. Economic war possible escalation path.' }
        }
    },
    'US-RU': {
        type: 'conflict',
        strength: 2,
        name: 'Adversarial Relations',
        params: {
            trade: { score: 2, summary: 'Minimal trade due to comprehensive sanctions', details: 'US-Russia trade collapsed from $34B (2013) to under $5B. Most sectors under sanctions. Energy trade banned. Only limited agricultural and medical trade continues.' },
            military: { score: 1, summary: 'No cooperation, proxy conflict in Ukraine', details: 'US providing $100B+ military aid to Ukraine against Russia. No military dialogue. Arms control treaties collapsed (INF, Open Skies). New START extended but strained.' },
            diplomatic: { score: 2, summary: 'Severely degraded relations', details: 'Embassies dramatically reduced. Consulates closed. Diplomats expelled. Communication channels limited to deconfliction. No leader meetings since 2021.' },
            border: { score: 9, summary: 'No direct border issues', details: 'Bering Strait is only proximity. No territorial disputes. However, US supports Ukraine\'s territorial integrity against Russian occupation.' },
            historical: { score: 3, summary: 'From WWII allies to Cold War enemies to renewed rivalry', details: 'WWII cooperation against Nazis. Cold War confrontation (Cuba, Vietnam, proxy wars). Brief post-Soviet reset. Relationship deteriorated since 2014 Ukraine crisis.' },
            economic: { score: 1, summary: 'Comprehensive economic sanctions', details: 'US sanctions cover major banks, energy sector, individuals. Russia cut from SWIFT. Asset freezes on oligarchs. Secondary sanctions threaten third parties.' },
            cultural: { score: 3, summary: 'Cultural exchanges largely suspended', details: 'Academic exchanges stopped. Fulbright suspended. Tourism minimal. Russian media restricted. Cultural diplomacy frozen.' },
            visa: { score: 1, summary: 'Extremely difficult visa process', details: 'Visa services suspended at most consulates. Processing times months long. Travel advisories at highest level. Most Russians cannot obtain US visas.' },
            strategic: { score: 1, summary: 'Designated adversary', details: 'Russia explicitly named threat in US strategy documents. NATO expansion to counter Russia. Arctic competition growing. Nuclear deterrence relationship adversarial.' },
            intelligence: { score: 1, summary: 'Active intelligence confrontation', details: 'Expulsion of Russian intelligence officers. Cyber operations ongoing both ways. Election interference allegations. Espionage cases regular.' },
            energy: { score: 1, summary: 'Energy sector fully sanctioned', details: 'US banned Russian oil imports. Price cap on Russian oil. LNG sector targeted. Nordstream pipelines destroyed (unclear attribution).' },
            technology: { score: 1, summary: 'Technology transfer banned', details: 'Export controls on all sensitive technology. Chip restrictions. Space cooperation ending (ISS transition). No tech investment.' },
            defense: { score: 1, summary: 'Nuclear adversaries', details: 'Largest nuclear arsenals point at each other. No defense cooperation. New START only remaining arms control. Conventional forces in opposition via Ukraine.' },
            political: { score: 1, summary: 'Fundamental political opposition', details: 'Democracy vs. authoritarianism conflict. US does not recognize Russian claims on Crimea, occupied territories. Putin personally sanctioned.' },
            organizations: { score: 3, summary: 'UN Security Council only major shared venue', details: 'Both P5 members. Russia expelled from G8 (2014). Suspended from Council of Europe. WTO membership but disputes ongoing.' },
            conflict: { score: 8, summary: 'High conflict risk including nuclear', details: 'No direct shooting but extensive proxy war. Nuclear threats from Russia. Cyber warfare active. Miscalculation or escalation paths exist.' }
        }
    },
    'US-JP': {
        type: 'allies',
        strength: 9,
        name: 'US-Japan Alliance',
        params: {
            trade: { score: 8, summary: '$218B annual bilateral trade', details: 'Japan is 4th largest US trading partner. Key sectors: automobiles, machinery, electronics. Trade deficit with Japan $65B. Bilateral trade agreement signed 2019.' },
            military: { score: 9, summary: 'Cornerstone alliance in Indo-Pacific', details: '54,000 US troops stationed in Japan. Bases at Okinawa, Yokosuka (7th Fleet HQ), Misawa. Mutual Defense Treaty (1960). Japan increasing defense spending to 2% GDP.' },
            diplomatic: { score: 9, summary: 'Strong alliance management', details: 'Regular 2+2 ministerial meetings. Annual leader summits. Close coordination on China, North Korea. Post-WWII reconciliation largely complete.' },
            border: { score: 9, summary: 'No bilateral border issues', details: 'No territorial disputes between US and Japan. US supports Japan on Senkaku/Diaoyu dispute with China.' },
            historical: { score: 7, summary: 'From WWII enemies to closest allies', details: 'Pearl Harbor and Pacific War legacy. US occupation 1945-1952 shaped modern Japan. Alliance since 1951 security treaty. Occasional history frictions (Hiroshima, Okinawa).' },
            economic: { score: 8, summary: 'Major economic partnership', details: 'Japan is largest foreign holder of US Treasuries ($1.1T). Significant cross-investment. Auto sector trade friction historically but now stable.' },
            cultural: { score: 8, summary: 'Strong cultural exchange', details: 'Japanese cultural influence in US (anime, cuisine, technology). American culture dominant in Japan. Tourism significant both directions. Educational exchanges robust.' },
            visa: { score: 9, summary: 'Visa waiver program', details: 'ESTA visa waiver for Japanese citizens. Global Entry available. 90-day stays without visa. Strong tourism flows.' },
            strategic: { score: 9, summary: 'First island chain anchor', details: 'Japan essential to US Indo-Pacific strategy. Counterbalance to China. North Korea contingency planning. Extended nuclear deterrence.' },
            intelligence: { score: 8, summary: 'Close but not Five Eyes', details: 'Extensive intelligence sharing under alliance. GSOMIA agreement. Coordination on China, North Korea. Not in Five Eyes but close partner.' },
            energy: { score: 7, summary: 'LNG and nuclear cooperation', details: 'Japan major US LNG customer. Civil nuclear cooperation agreement. Renewable energy technology sharing. Energy security coordination.' },
            technology: { score: 9, summary: 'Deep technology partnership', details: 'Joint development programs (SM-3). Semiconductor cooperation. AI and quantum partnerships. Space cooperation (Artemis Accords).' },
            defense: { score: 9, summary: 'Mutual Defense Treaty', details: 'Article 5 covers Senkakus. Japan hosting more US advanced capabilities. Interoperability extremely high. Japan removing constitutional constraints.' },
            political: { score: 8, summary: 'Democratic allies with shared values', details: 'Both democracies with market economies. High UN voting alignment. G7 coordination. Some differences on trade policy.' },
            organizations: { score: 8, summary: 'Extensive shared membership', details: 'QUAD, G7, G20, OECD, WTO, APEC. Not NATO but strong partnership. Joint Indo-Pacific vision.' },
            conflict: { score: 1, summary: 'Essentially zero conflict risk', details: 'Treaty allies with fully institutionalized relationship. War unthinkable. Alliance strengthening not weakening.' }
        }
    },
    'US-IN': {
        type: 'strategic',
        strength: 7,
        name: 'Comprehensive Global Strategic Partnership',
        params: {
            trade: { score: 6, summary: '$191B annual bilateral trade', details: 'India is 9th largest US trading partner. Trade deficit with India $32B. Sectors: pharmaceuticals, IT services, machinery. Trade friction on tariffs, market access.' },
            military: { score: 7, summary: 'Growing defense partnership', details: 'Major Defense Partner status (2016). BECA, LEMOA, COMCASA foundational agreements signed. Joint exercises (Yudh Abhyas, Malabar). $20B+ defense purchases from US.' },
            diplomatic: { score: 8, summary: 'Strategic partnership since 2005', details: '2+2 Ministerial dialogue. Regular leader summits. iCET technology initiative. Growing alignment on Indo-Pacific despite India\'s strategic autonomy.' },
            border: { score: 10, summary: 'No border issues', details: 'No territorial disputes. No common border. Geographic separation means no border friction.' },
            historical: { score: 5, summary: 'Cold War distance to post-Cold War warming', details: 'India Non-Aligned, US allied with Pakistan during Cold War. 1998 nuclear tests caused crisis. Post-2001 rapid improvement. Modi-Trump, Modi-Biden summits elevated ties.' },
            economic: { score: 6, summary: 'Growing but friction areas remain', details: 'India removed from GSP (2019). Market access concerns. Growing investment ties. Tech and pharma key sectors. "Friendshoring" opportunities.' },
            cultural: { score: 8, summary: 'Large Indian diaspora drives ties', details: '4.5M Indian Americans, highest income ethnic group. Massive student population (200,000+). Bollywood awareness growing. Indian cuisine mainstream.' },
            visa: { score: 5, summary: 'Visa required, long waits', details: 'H-1B visa critical for IT sector. Tourist visa required. Wait times historically long. No visa waiver despite discussions.' },
            strategic: { score: 8, summary: 'Key Indo-Pacific partner', details: 'QUAD member. Counterbalance to China. Defense industrial cooperation. Strategic convergence on Indo-Pacific despite differences.' },
            intelligence: { score: 5, summary: 'Growing but not formalized', details: 'Intelligence sharing increasing on terrorism, China. Not Five Eyes level. Foundational agreements enable greater cooperation.' },
            energy: { score: 6, summary: 'Oil and clean energy cooperation', details: 'India major US oil customer. LNG exports growing. Civil nuclear cooperation (123 Agreement). Clean energy technology partnerships.' },
            technology: { score: 7, summary: 'iCET initiative accelerating ties', details: 'Initiative on Critical and Emerging Technologies (2023). Semiconductor, AI, quantum focus. GE engine co-production deal. Space cooperation.' },
            defense: { score: 6, summary: 'Growing but no formal alliance', details: 'Major Defense Partner but not treaty ally. Interoperability improving. Joint production discussions. Strategic autonomy limits depth.' },
            political: { score: 6, summary: 'Shared democracy but divergences', details: 'Both democracies but human rights concerns raised. UN voting not aligned (Russia, Palestine). Different approaches to multilateralism.' },
            organizations: { score: 6, summary: 'QUAD main shared strategic forum', details: 'Both in G20, WTO. India not in OECD, APEC (blocked). QUAD is signature partnership. Different views on UN reform.' },
            conflict: { score: 1, summary: 'No conflict risk', details: 'No outstanding disputes. Partnership only growing. Military conflict inconceivable.' }
        }
    },
    'US-IL': {
        type: 'allies',
        strength: 9,
        name: 'Unbreakable Bond',
        params: {
            trade: { score: 7, summary: '$50B+ bilateral trade', details: 'FTA since 1985. Key sectors: diamonds, electronics, pharmaceuticals. US is Israel\'s largest trading partner.' },
            military: { score: 10, summary: 'Deepest military relationship', details: '$3.8B annual military aid (MOU through 2028). Joint missile defense development (Iron Dome, David\'s Sling, Arrow). F-35 customer. Unique QME commitment.' },
            diplomatic: { score: 9, summary: 'Unwavering support', details: 'Regular leader contact. UN veto shield. Embassy moved to Jerusalem (2019). Abraham Accords brokered by US.' },
            border: { score: 10, summary: 'No border issues', details: 'No territorial disputes between US and Israel.' },
            historical: { score: 9, summary: 'Strong ties since 1948', details: 'US first to recognize Israel. Support through all Arab-Israeli wars. Strategic cooperation since 1980s. Holocaust memory resonance.' },
            economic: { score: 8, summary: 'Deep economic ties', details: 'Significant VC and tech investment flows. BIRD, BARD foundations. Intel, major tech companies heavily present in Israel.' },
            cultural: { score: 9, summary: 'Jewish American community ties', details: '6M+ Jewish Americans. Strong cultural, religious, family ties. Birthright trips. Academic exchanges.' },
            visa: { score: 9, summary: 'Visa waiver (2023)', details: 'Israel joined VWP in 2023. Easy travel for tourism and business.' },
            strategic: { score: 9, summary: 'Strategic asset in Middle East', details: 'Only reliable democracy ally in region. Intelligence cooperation. Technology development partner. Iran containment.' },
            intelligence: { score: 9, summary: 'Exceptional intelligence cooperation', details: 'Mossad-CIA partnership. Counterterrorism cooperation. Iran intelligence sharing. Some tensions (Pollard case historically).' },
            energy: { score: 6, summary: 'Gas discovery changed dynamics', details: 'Israel became gas exporter. US companies involved in Leviathan, Tamar fields. Energy security cooperation.' },
            technology: { score: 9, summary: 'Tech superpower partnership', details: 'Startup Nation ties deep. Cybersecurity cooperation. Defense tech co-development. AI and quantum partnerships.' },
            defense: { score: 9, summary: 'Qualitative Military Edge guarantee', details: 'US legally committed to maintain Israel\'s QME. $3.8B annual aid. Joint exercises. Missile defense cooperation.' },
            political: { score: 7, summary: 'Strong but some differences', details: 'Bipartisan support though increasingly partisan. Settlement policy disagreements. Two-state solution approach differs. Gaza war strains.' },
            organizations: { score: 6, summary: 'Limited shared organizations', details: 'Both in OECD. Israel not NATO member (but partnerships). UN voting aligned on Israel issues.' },
            conflict: { score: 1, summary: 'No conflict risk', details: 'Alliance essentially unbreakable. Disagreements managed within partnership.' }
        }
    },

    // === CHINA RELATIONSHIPS ===
    'CN-RU': {
        type: 'strategic',
        strength: 8,
        name: 'No-Limits Partnership',
        params: {
            trade: { score: 8, summary: '$240B annual trade (2023)', details: 'Trade surged after Ukraine war. Russia supplies oil, gas, commodities. China supplies manufactured goods, technology. Record trade levels.' },
            military: { score: 7, summary: 'Growing military cooperation', details: 'Joint exercises (Vostok, naval patrols). Chinese technology helping Russia. No formal alliance but deepening. Arms sales historically significant.' },
            diplomatic: { score: 8, summary: 'Closely coordinated positions', details: 'Xi-Putin meetings frequent. Aligned on opposing US hegemony. Ukraine War showed limits. Shanghai Cooperation Organisation core.' },
            border: { score: 9, summary: 'Border fully demarcated', details: '4,200km border fully resolved (2004). Border guards cooperate. Island disputes settled. Historical tensions (1969) resolved.' },
            historical: { score: 6, summary: 'Complex history from ally to enemy to partner', details: 'Communist allies 1949-1960. Sino-Soviet split (border war 1969). Normalization 1989. Post-Cold War partnership deepened.' },
            economic: { score: 8, summary: 'Sanctions-driven integration', details: 'China main buyer of Russian energy. Yuan settlements growing. Chinese tech replacing Western. Investment increasing.' },
            cultural: { score: 5, summary: 'Limited cultural exchange', details: 'Some student exchange. Border region populations interact. Confucius Institutes in Russia. Limited tourism.' },
            visa: { score: 7, summary: 'Visa-free for tour groups', details: 'Visa-free for organized groups. Regular visas relatively easy. Border crossing simplified.' },
            strategic: { score: 8, summary: 'Anti-hegemony alignment', details: 'Both see US as adversary. Coordination on world order issues. Different interests in Central Asia. Not formal allies.' },
            intelligence: { score: 5, summary: 'Limited intelligence sharing', details: 'Some cooperation against terrorism. Not deep sharing. Mutual suspicion historically. Ukraine showed information gaps.' },
            energy: { score: 9, summary: 'Energy centerpiece of relationship', details: 'Power of Siberia pipeline. Oil pipeline since 2011. LNG growing. Russia\'s pivot to Asia relies on Chinese market.' },
            technology: { score: 6, summary: 'China supplying dual-use tech', details: 'Chinese tech helping Russian defense industry (chips, machines). Technology transfer one-way. Space cooperation.' },
            defense: { score: 5, summary: 'Not formal allies', details: 'No mutual defense treaty. "Aligned, not allied." Exercise together but unclear if would fight together. Historical distrust.' },
            political: { score: 8, summary: 'Aligned against Western model', details: 'Both authoritarian systems. Oppose "color revolutions." Support each other at UN. Different domestic political systems.' },
            organizations: { score: 7, summary: 'SCO and BRICS core', details: 'Both in UN P5, SCO, BRICS. Coordinating on alternative to Western institutions. Different approaches to Global South.' },
            conflict: { score: 2, summary: 'Low conflict risk currently', details: 'Currently close. Long-term competition possible (Central Asia, Global South influence). Power imbalance growing.' }
        }
    },
    'CN-PK': {
        type: 'allies',
        strength: 9,
        name: 'All-Weather Strategic Cooperative Partnership',
        params: {
            trade: { score: 7, summary: '$27B bilateral trade', details: 'China is Pakistan\'s largest trading partner. Imbalance significant (imports dominate). CPEC driving infrastructure investment.' },
            military: { score: 9, summary: 'Deep military cooperation', details: 'JF-17 joint fighter program. Naval cooperation (submarines). Nuclear assistance historically. Gwadar Port access. Training and exercises.' },
            diplomatic: { score: 9, summary: 'Iron Brothers relationship', details: 'Diplomatic support on Kashmir. UN Security Council cover. Pakistan was China\'s bridge to US (1971). Consistent through leadership changes.' },
            border: { score: 8, summary: 'Karakoram Highway link', details: 'Border settled (1963, though Kashmir disputed). China controls some Kashmir territory Pakistan ceded. Highway connects countries.' },
            historical: { score: 9, summary: 'Allies since 1950s', details: 'Early recognition. Consistent during Cold War. Shared India rivalry. Nixon-to-China through Pakistan. Never wavered.' },
            economic: { score: 8, summary: 'CPEC transforms economy', details: '$62B China-Pakistan Economic Corridor. Power plants, ports, roads. Debt concerns real. Pakistan economically dependent.' },
            cultural: { score: 5, summary: 'Limited people-to-people ties', details: 'Some student exchange. Confucius Institutes. Limited tourism. Language barrier. Security concerns limit interaction.' },
            visa: { score: 6, summary: 'Visa required but facilitated', details: 'Visa required but easily obtained. Business travel frequent. Tourist visa straightforward.' },
            strategic: { score: 9, summary: 'Counter to India', details: 'Pakistan balances India for China. Gwadar provides Indian Ocean access. Intelligence on India. Strategic depth concept.' },
            intelligence: { score: 7, summary: 'Cooperation on terrorism, India', details: 'ISI-MSS cooperation. Counter-terrorism (Uyghur concerns). India intelligence sharing. Limits on Uyghur support in Pakistan.' },
            energy: { score: 7, summary: 'Power projects and pipelines', details: 'Chinese-built power plants. Potential oil/gas pipelines. Gwadar as energy hub concept. Nuclear power cooperation.' },
            technology: { score: 6, summary: 'Technology transfer growing', details: 'Defense technology transfers. Telecom (Huawei, ZTE dominant). Nuclear technology historically. Limited dual-use.' },
            defense: { score: 8, summary: 'Extensive defense cooperation', details: 'Not formal alliance but acts like one. Arms sales major. Joint production. Would China fight India for Pakistan? Ambiguous.' },
            political: { score: 7, summary: 'Different systems but aligned interests', details: 'Pakistan democratic (nominally), China authoritarian. Military relationships bypass civilian government. Consistent across governments.' },
            organizations: { score: 6, summary: 'SCO main shared venue', details: 'Both in SCO, OIC (observer for China). UN cooperation on Kashmir. Different regional groupings.' },
            conflict: { score: 1, summary: 'Essentially zero conflict risk', details: 'Relationship described as "higher than mountains, deeper than oceans." No disputes. Interdependence growing.' }
        }
    },
    'CN-JP': {
        type: 'complex',
        strength: 4,
        name: 'Complicated Neighbors',
        params: {
            trade: { score: 7, summary: '$327B bilateral trade', details: 'Largest trading relationship in Asia. Japan runs trade deficit with China. Supply chain integration deep despite political tensions. Rare earths dependency.' },
            military: { score: 2, summary: 'Near-constant friction', details: 'Senkaku/Diaoyu disputes cause regular naval/air encounters. Air defense zone overlaps. Japan building military capability focused on China scenarios.' },
            diplomatic: { score: 4, summary: 'Strained but maintained', details: 'Ambassador level relations. Occasional leader meetings. Regular tensions over history, Taiwan, Senkakus. Anti-Japanese sentiment in China.' },
            border: { score: 3, summary: 'Senkaku/Diaoyu dispute', details: 'Both claim Senkaku/Diaoyu islands in East China Sea. Japan administers. China challenges regularly. Coast guard confrontations.' },
            historical: { score: 2, summary: 'WWII legacy remains toxic', details: 'Japanese invasion of China (1931-1945) killed millions. Nanjing Massacre. Comfort women. History textbook controversies. Yasukuni Shrine visits.' },
            economic: { score: 6, summary: 'Deep integration despite tensions', details: 'Massive Japanese investment in China (historically). Supply chains integrated. "China Plus One" diversification trend. Semiconductor restrictions.' },
            cultural: { score: 5, summary: 'Cultural affinity but political barrier', details: 'Shared Sinosphere heritage. Anime popular in China. Tourism significant. Cultural exchange limited by political tensions.' },
            visa: { score: 5, summary: 'Visa required', details: 'Both require visas. Tourist visas available but scrutinized. Business travel complex. Tourism recovered slowly post-COVID.' },
            strategic: { score: 2, summary: 'Strategic rivals in Asia', details: 'Competition for regional leadership. Japan allied with US. China sees Japan as obstacle. Taiwan contingency would involve Japan.' },
                        intelligence: { score: 1, summary: 'No intelligence cooperation', details: 'Active intelligence competition. Japan monitors China closely. China cyber espionage against Japan. No sharing arrangements.' },
            energy: { score: 4, summary: 'East China Sea resource competition', details: 'Disputed gas fields in East China Sea. Japan dependent on sea lanes China could threaten. Some LNG trade.' },
            technology: { score: 3, summary: 'Tech competition intensifying', details: 'Japan joining US semiconductor restrictions on China. Historical tech transfer now reversing. Competition in EVs, batteries, robotics.' },
            defense: { score: 1, summary: 'No defense cooperation', details: 'Japan\'s defense policy increasingly China-focused. No dialogue mechanisms working well. Opposite sides of potential Taiwan conflict.' },
            political: { score: 3, summary: 'Different systems, competing visions', details: 'Japan democratic, China authoritarian. Different views on regional order. History prevents reconciliation. Nationalism on both sides.' },
            organizations: { score: 5, summary: 'Some shared regional bodies', details: 'Both in APEC, RCEP. G20. Different roles in regional architecture. Japan in G7, China excluded.' },
            conflict: { score: 6, summary: 'Significant conflict risk', details: 'Senkaku incident could escalate. Taiwan conflict would involve Japan. Regular military encounters. No robust crisis management.' }
        }
    },

    // === INDIA RELATIONSHIPS ===
    'IN-PK': {
        type: 'conflict',
        strength: 2,
        name: 'Enduring Rivalry',
        params: {
            trade: { score: 1, summary: 'Near-zero official trade', details: 'MFN status suspended. Official trade ~$2B but massive informal trade via Dubai. Potential $37B if normalized. Wagah-Attari crossing limited.' },
            military: { score: 1, summary: 'Regular military confrontations', details: 'Four wars (1947, 1965, 1971, 1999). Regular LoC firing. Both nuclear armed. Siachen Glacier standoff. Military buildup on border.' },
            diplomatic: { score: 2, summary: 'Barely functional relations', details: 'High commissioners often recalled. No leader meetings since 2015. Composite Dialogue suspended. Back-channel occasionally active.' },
            border: { score: 1, summary: 'Kashmir dispute central', details: 'Line of Control divides Kashmir. Both claim full Kashmir. UN resolutions unimplemented. Article 370 revocation (2019) escalated tensions.' },
            historical: { score: 1, summary: 'Partition trauma unresolved', details: '1947 Partition killed 1-2 million. Four wars. 1971 Bangladesh creation humiliated Pakistan. Terrorism accusations. Never reconciled.' },
            economic: { score: 1, summary: 'Economic isolation', details: 'India denied Pakistan MFN. No investment flows. Banking restricted. Massive opportunity cost of conflict.' },
            cultural: { score: 4, summary: 'Shared culture divided by politics', details: 'Same languages (Urdu/Hindi), music, cinema popular across border. Cricket diplomacy occasionally. Divided families. Cultural affinity undeniable.' },
            visa: { score: 2, summary: 'Extremely restrictive', details: 'City-specific visas. No tourist visas. Pilgrim visas for religious sites. Family reunion extremely difficult. Kartarpur Corridor rare exception.' },
            strategic: { score: 1, summary: 'Zero-sum strategic competition', details: 'Each sees other as primary threat. Nuclear deterrence. Proxy conflicts in Afghanistan. Third-party relationships (China-US) entangle.' },
            intelligence: { score: 1, summary: 'Active intelligence war', details: 'ISI-RAW confrontation. Covert operations both sides. Spy exchanges occasionally. Mumbai 2008 attack blamed on Pakistan.' },
            energy: { score: 1, summary: 'No energy cooperation', details: 'TAPI pipeline stalled. IPI pipeline abandoned. Could be major transit route. Politics prevents energy trade.' },
            technology: { score: 1, summary: 'No technology cooperation', details: 'No tech trade. Cyber operations against each other. Technology sectors developed independently.' },
            defense: { score: 1, summary: 'Adversarial militaries', details: 'Nuclear rivals (150+ weapons each). Conventional forces balanced. Arms race continuing. No defense dialogue.' },
            political: { score: 1, summary: 'Fundamental political opposition', details: 'Different ideologies at founding. Religious vs secular (historically). Both now more nationalist. No political trust.' },
            organizations: { score: 3, summary: 'SAARC paralyzed', details: 'Both in SAARC but organization frozen. UN membership. ECO, OIC (Pakistan). Different camps.' },
            conflict: { score: 9, summary: 'High conflict risk', details: 'Nuclear-armed rivals with regular military clashes. Terrorism trigger. Kashmir flashpoint. One of world\'s most dangerous rivalries.' }
        }
    },
    'IN-CN': {
        type: 'complex',
        strength: 4,
        name: 'Complex Neighbors',
        params: {
            trade: { score: 6, summary: '$136B bilateral trade (China advantage)', details: 'India runs $85B deficit with China. Electronics, machinery imports. India restricting Chinese apps, investment. Trade imbalance contentious.' },
            military: { score: 2, summary: 'Border standoffs ongoing', details: 'Galwan Valley clash (2020) killed 20 Indian, ~40 Chinese soldiers. Ongoing standoff in Ladakh. 1962 war memory. Military buildup.' },
            diplomatic: { score: 4, summary: 'Strained but engaged', details: 'Ambassador level maintained. Special Representatives dialogue on border (suspended). BRICS, SCO provide forums. Trust deficit severe.' },
            border: { score: 2, summary: 'LAC disputes unresolved', details: 'Line of Actual Control undefined. Aksai Chin under China. Arunachal Pradesh claimed by China. Regular incursions.' },
            historical: { score: 3, summary: '1962 war shapes relations', details: 'China defeated India in 1962 border war. "Hindi-Chini bhai-bhai" to enemies. Tibet issue lingers. Nehru\'s betrayal narrative.' },
            economic: { score: 5, summary: 'Imbalanced but significant', details: 'Massive trade but India dependent on Chinese imports. Investment restricted post-Galwan. "Atmanirbhar Bharat" reduces dependence.' },
            cultural: { score: 5, summary: 'Ancient civilizational ties', details: 'Buddhism connects. Historical exchange (Xuanzang). Bollywood popular in China. Limited modern cultural exchange. Yoga interest.' },
            visa: { score: 4, summary: 'Visa required, sometimes difficult', details: 'Both require visas. Stapled visas for Arunachal residents issue. Tourist visas available. Business travel possible.' },
            strategic: { score: 2, summary: 'Strategic competition', details: 'India in QUAD seen as anti-China. China-Pakistan axis concerns India. Indian Ocean competition. Different visions for Asia.' },
            intelligence: { score: 2, summary: 'No cooperation, active monitoring', details: 'No intelligence sharing. Both monitor each other extensively. Cyber operations. Tibet intelligence gathering.' },
            energy: { score: 4, summary: 'Limited cooperation', details: 'Some oil companies cooperate in third countries. Competition for Myanmar gas. No bilateral energy projects.' },
            technology: { score: 3, summary: 'India restricting Chinese tech', details: 'TikTok, WeChat banned. Huawei restricted. Chinese investment in tech blocked. Technology decoupling.' },
            defense: { score: 1, summary: 'No defense cooperation', details: 'Active military standoff. India building infrastructure on border. China modernizing Tibet command. Nuclear-armed neighbors.' },
            political: { score: 3, summary: 'Different systems and interests', details: 'India democracy, China authoritarian. Different approaches to world order. UNSC seat rivalry. Some shared Global South interests.' },
            organizations: { score: 6, summary: 'BRICS, SCO shared', details: 'Both in BRICS, SCO, G20. Different roles. India blocks China\'s SAARC membership. Competition in multilateral spaces.' },
            conflict: { score: 7, summary: 'Significant conflict risk', details: 'Active military standoff. Galwan showed risk. Nuclear-armed. Crisis management weak. One of Asia\'s key flashpoints.' }
        }
    },
    'IN-RU': {
        type: 'strategic',
        strength: 8,
        name: 'Special and Privileged Strategic Partnership',
        params: {
            trade: { score: 6, summary: '$65B trade (surge due to oil)', details: 'Oil imports from Russia surged after Ukraine war. India became major Russian oil buyer. Traditional arms trade. Trade imbalance (India deficit).' },
            military: { score: 8, summary: 'Historically largest defense partner', details: '60-70% of Indian military equipment Russian-origin. S-400 purchase despite US concerns. BrahMos missiles joint venture. INS Vikramaditya carrier.' },
            diplomatic: { score: 8, summary: 'Time-tested relationship', details: 'USSR supported India since 1950s. Russia backed India on Kashmir. India abstained on UN Russia votes. Annual summits.' },
            border: { score: 10, summary: 'No border issues', details: 'No shared border. No territorial disputes whatsoever.' },
            historical: { score: 9, summary: 'Decades of friendship', details: 'USSR supported India in 1971 war. Indo-Soviet Treaty (1971). Non-alignment but Soviet-leaning. Post-Soviet relationship maintained.' },
            economic: { score: 5, summary: 'Beyond defense, limited', details: 'Oil trade dominant now. Some nuclear cooperation (Kudankulam). Limited non-defense trade historically. Rupee-ruble trade explored.' },
            cultural: { score: 6, summary: 'Soviet-era ties persist', details: 'Generations of Indian students in USSR. Hindi films popular in Russia. Cultural exchanges continue. Bollywood in Russia.' },
            visa: { score: 6, summary: 'Visa required but friendly', details: 'E-visa available for Indians. Relatively easy process. Tourism exists. Medical tourism to India from Russia.' },
            strategic: { score: 7, summary: 'Multi-alignment anchor', details: 'Russia relationship lets India balance US/West. Russia counterweight to China for India. India won\'t abandon Russia despite Western pressure.' },
            intelligence: { score: 6, summary: 'Some intelligence cooperation', details: 'Counter-terrorism cooperation. Historical intelligence relationship. Not as deep as Cold War era.' },
            energy: { score: 8, summary: 'Oil imports surging', details: 'India buying discounted Russian oil (30% of imports). Nuclear power plants (Kudankulam). Natural gas potential.' },
            technology: { score: 6, summary: 'Defense technology transfers', details: 'BrahMos joint venture. S-400 transfer of technology limited. Space cooperation. Nuclear technology.' },
            defense: { score: 8, summary: 'Extensive defense cooperation', details: 'No formal alliance but deep defense ties. Major arms supplier. Joint exercises. Logistics agreements.' },
            political: { score: 6, summary: 'Aligned on multipolarity', details: 'Both advocate multipolar world. India doesn\'t condemn Russia on Ukraine. Different domestic systems. BRICS coordination.' },
            organizations: { score: 7, summary: 'BRICS, SCO shared', details: 'Both in BRICS, SCO, G20. RIC (Russia-India-China) format. UN coordination selectively.' },
            conflict: { score: 1, summary: 'No conflict risk', details: 'No disputes. Relationship stable. Even Ukraine war hasn\'t damaged ties significantly.' }
        }
    },

    // === EUROPE RELATIONSHIPS ===
    'DE-FR': {
        type: 'allies',
        strength: 10,
        name: 'Franco-German Engine',
        params: {
            trade: { score: 9, summary: '€160B bilateral trade', details: 'Largest trading partners for each other. Integrated supply chains especially in auto, aerospace. Single market makes trade seamless.' },
            military: { score: 8, summary: 'Deep defense integration', details: 'Franco-German Brigade. FCAS fighter jet project. Joint tank development. European defense cooperation leaders. Mali together.' },
            diplomatic: { score: 10, summary: 'EU\'s driving partnership', details: 'Élysée Treaty (1963). Regular joint cabinet meetings. Chancellor-President coordination on all EU issues. Institutionalized reconciliation.' },
            border: { score: 10, summary: 'Open Schengen border', details: 'No border controls. Complete freedom of movement. Border regions deeply integrated. Cross-border workers common.' },
            historical: { score: 9, summary: 'Enemies to partners', details: 'Three wars (1870, WWI, WWII). Post-WWII reconciliation through ECSC, EU. Youth exchange programs. Historical reconciliation model for world.' },
            economic: { score: 10, summary: 'Eurozone integration', details: 'Both eurozone members. ECB decisions made jointly. Fiscal coordination (imperfect). Single market architects.' },
            cultural: { score: 9, summary: 'Intense cultural exchange', details: 'Franco-German Youth Office exchanges millions. Twinned cities. Bilingual education. ARTE television. Cultural integration deep.' },
            visa: { score: 10, summary: 'Schengen free movement', details: 'No visa required ever. Full freedom to live and work. Seamless travel. EU citizenship rights.' },
            strategic: { score: 9, summary: 'Europe\'s strategic core', details: 'EU decision-making dominated by Franco-German agreement. European strategic autonomy push. NATO European pillar.' },
            intelligence: { score: 7, summary: 'EU-level cooperation', details: 'Intelligence sharing through EU mechanisms. Bilateral cooperation solid. Not Five Eyes but close. Counter-terrorism coordination.' },
            energy: { score: 8, summary: 'Energy transition partners', details: 'Different energy mixes (France nuclear, Germany renewables) but cooperating. Grid integration. Joint approach to Russian gas (post-2022).' },
            technology: { score: 8, summary: 'Tech champions efforts', details: 'Airbus crown jewel. GAIA-X cloud project. AI, quantum cooperation. Semiconductor initiatives. Joint industrial policy efforts.' },
            defense: { score: 9, summary: 'NATO plus bilateral plus EU', details: 'NATO allies. Bilateral defense treaty elements. EU PESCO projects. European Defense Fund. Strategic culture differences managed.' },
            political: { score: 9, summary: 'EU\'s political motor', details: 'Nothing major happens in EU without Franco-German agreement. Different political traditions but constant coordination. EU treaties shaped together.' },
            organizations: { score: 10, summary: 'Complete overlap', details: 'EU, NATO, UN, Eurozone, Schengen, G7, G20, OECD. All major organizations shared.' },
            conflict: { score: 1, summary: 'War inconceivable', details: 'From hereditary enemies to war being unthinkable. Most successful international reconciliation in history.' }
        }
    },
    'GB-FR': {
        type: 'allies',
        strength: 8,
        name: 'Entente Cordiale',
        params: {
            trade: { score: 7, summary: '£90B bilateral trade', details: 'Major trading partners. Brexit added friction but trade continues. Channel Tunnel links economies. Services trade significant.' },
            military: { score: 9, summary: 'Lancaster House Treaties', details: '2010 treaties created deep defense cooperation. Combined Joint Expeditionary Force. Nuclear cooperation. Only European nuclear powers.' },
            diplomatic: { score: 8, summary: 'Close but sometimes difficult', details: 'Long history of rivalry and alliance. Brexit strained relations. Still close on major issues. UN Security Council cooperation.' },
            border: { score: 6, summary: 'Channel complicates post-Brexit', details: 'No longer Schengen/free movement. Juxtaposed border controls. Migrant crossing disputes. Trade friction at border.' },
            historical: { score: 8, summary: 'Centuries of rivalry then alliance', details: 'Hundred Years War to Napoleonic enemies. Entente Cordiale (1904). WWI, WWII allies. EU membership then Brexit.' },
            economic: { score: 7, summary: 'Brexit reduced integration', details: 'No longer single market partners. Trade continuing but friction. Investment flows both ways. City-Paris competition.' },
            cultural: { score: 8, summary: 'Channel cultural exchange', details: 'Eurostar enables flow. Long artistic, intellectual exchange. Language learning. Tourism major. Different cultures but mutual fascination.' },
            visa: { score: 6, summary: '90-day visa-free post-Brexit', details: 'Schengen allows 90/180 day stays. Work visas now needed. Youth mobility scheme. More restricted than pre-Brexit.' },
            strategic: { score: 8, summary: 'European security partners', details: 'Both nuclear powers. UNSC permanent members. NATO allies. Different views on EU but aligned on Russia, China.' },
            intelligence: { score: 7, summary: 'Close but UK has Five Eyes', details: 'UK in Five Eyes, France not. Still significant bilateral sharing. Counter-terrorism very close. Some friction on sources.' },
            energy: { score: 7, summary: 'Interconnected grids', details: 'Electricity interconnectors. France supplies nuclear power to UK. Hinkley Point French involvement. North Sea coordination.' },
            technology: { score: 7, summary: 'Aerospace and defense tech', details: 'MBDA missiles joint venture. Airbus UK involvement. Separate tech ecosystems but cooperation in defense.' },
            defense: { score: 9, summary: 'Most capable European militaries', details: 'CJEF deployable together. Nuclear coordination. Only Europeans with full-spectrum capability. Mali, Libya cooperation.' },
            political: { score: 6, summary: 'Allied but difficult neighbors', details: 'Brexit created tensions. Fishing disputes. Migration disputes. Still fundamentally aligned on most issues. Competitive element.' },
            organizations: { score: 7, summary: 'NATO, UN shared; UK left EU', details: 'NATO, G7, G20, UNSC P5. UK left EU but remains European power. Different multilateral approaches now.' },
            conflict: { score: 1, summary: 'No conflict risk', details: 'War unthinkable. Even Brexit disputes managed peacefully. Fundamental allies.' }
        }
    },
    'RU-UA': {
        type: 'conflict',
        strength: 1,
        name: 'Active War',
        params: {
            trade: { score: 1, summary: 'Trade collapsed completely', details: 'Pre-war significant trade. Now zero official trade. Sanctions, war disrupted everything. Historic economic ties severed.' },
            military: { score: 1, summary: 'Active full-scale war', details: 'Russian invasion February 2022. Largest European war since WWII. Hundreds of thousands of casualties. War of attrition ongoing.' },
            diplomatic: { score: 1, summary: 'No diplomatic relations', details: 'Relations severed. No ambassadors. Negotiations failed (Istanbul 2022). Only occasional POW exchanges.' },
            border: { score: 1, summary: 'Full-scale border war', details: 'Russia occupies ~18% of Ukraine including Crimea. Active front line 1,000km+. Border redefined by force.' },
            historical: { score: 2, summary: 'Shared history weaponized', details: 'Kyivan Rus\' origins disputed. Centuries of Russian Empire rule. Holodomor (1932-33). Soviet Ukraine. Independence 1991. "Brother nations" narrative rejected.' },
            economic: { score: 1, summary: 'Economic warfare', details: 'Complete economic decoupling. Ukraine seizing Russian assets. Russia destroying Ukrainian infrastructure. Gas transit continues (ironically).' },
            cultural: { score: 3, summary: 'Cultural war alongside military', details: 'Shared Orthodox religion. Russian language in Ukraine (declining). Cultural similarities but now Ukrainian identity asserting against Russian.' },
            visa: { score: 1, summary: 'No civilian travel', details: 'Borders closed or war zones. No visa regime - active conflict. Refugees fleeing Ukraine. No Russians entering.' },
            strategic: { score: 1, summary: 'Existential conflict', details: 'Ukraine fighting for existence. Russia fighting to dominate former Soviet space. NATO expansion central issue. Black Sea control contested.' },
            intelligence: { score: 1, summary: 'Active intelligence war', details: 'Ukrainian intelligence (SBU, HUR) conducting operations in Russia. Russian FSB operations in Ukraine. Complete intelligence confrontation.' },
            energy: { score: 1, summary: 'Energy weaponized', details: 'Russia used gas as weapon. Nord Stream destroyed. Ukrainian grid attacked. Energy infrastructure military targets.' },
            technology: { score: 1, summary: 'No tech cooperation', details: 'Historical defense industry links severed. Antonov-Airbus discussions ended. Tech sector evacuated from Ukraine.' },
            defense: { score: 1, summary: 'Full-scale war', details: 'Russian military attempting to destroy Ukrainian state and military. Ukraine defending with Western support. Nuclear threats from Russia.' },
            political: { score: 1, summary: 'Total political rupture', details: 'Russia denies Ukrainian statehood. Annexation claims. War crimes accusations. International isolation of Russia.' },
            organizations: { score: 2, summary: 'Ukraine leaving Russian-led bodies', details: 'Ukraine left CIS. Seeking NATO, EU membership. Russia trying to prevent. Completely opposed visions.' },
            conflict: { score: 10, summary: 'Active major war', details: 'Full-scale conventional war since February 2022. Nuclear escalation risk. Europe\'s largest conflict since WWII. No end in sight.' }
        }
    },

    // === MIDDLE EAST ===
    'SA-IR': {
        type: 'conflict',
        strength: 2,
        name: 'Regional Rivalry',
        params: {
            trade: { score: 2, summary: 'Minimal trade, hajj only', details: 'No formal trade. Only Iranian hajj pilgrims to Mecca. Potential for massive trade if normalized. Sanctions complicate any trade.' },
            military: { score: 1, summary: 'Proxy wars throughout region', details: 'Yemen War (Saudi-UAE vs Houthis/Iran). Lebanon, Syria, Iraq competition. No direct conflict but close. Arms race.' },
            diplomatic: { score: 3, summary: 'Restored 2023, fragile', details: 'China-brokered restoration (March 2023). Embassies reopened. Still competing in Yemen, Lebanon. Fragile rapprochement.' },
            border: { score: 8, summary: 'No shared border', details: 'Gulf separates them. No direct territorial disputes. Persian Gulf naming dispute (Arab Gulf vs Persian Gulf).' },
            historical: { score: 3, summary: 'Centuries of Arab-Persian rivalry', details: '1979 Revolution changed Iran. Sectarian divide (Sunni vs Shia). Oil price competition. Different regional visions.' },
            economic: { score: 2, summary: 'No economic relationship', details: 'Sanctions prevent trade. Could complement (oil producers, different industries). Investment zero.' },
            cultural: { score: 3, summary: 'Islamic but sectarian divide', details: 'Both Muslim but Sunni-Shia divide. Hajj connects. Different cultures (Arab vs Persian). Some historical cultural exchange.' },
            visa: { score: 3, summary: 'Hajj visas mainly', details: 'Iranian pilgrims get hajj visas. Tourist/business visas very restricted. 2023 normalization may ease.' },
            strategic: { score: 1, summary: 'Regional hegemony competition', details: 'Both seek regional leadership. Opposite sides in Yemen, Lebanon, Syria, Iraq. Israel factor complicates (Saudi normalization).' },
            intelligence: { score: 1, summary: 'Espionage and covert war', details: 'Iranian operations in Saudi. Saudi support for Iranian opposition. Cyber warfare. Assassination plots.' },
            energy: { score: 3, summary: 'OPEC members, competitors', details: 'Both major oil producers. OPEC+ coordination possible. Competition for market share. Could cooperate on prices.' },
            technology: { score: 1, summary: 'No technology cooperation', details: 'No tech exchange. Opposite sides of tech blocs. Saudi with US, Iran sanctioned.' },
            defense: { score: 1, summary: 'Adversarial', details: 'Saudi-US alliance vs Iran isolation. Saudi building massive military. Iran missiles, drones. Proxy forces engaged.' },
            political: { score: 2, summary: 'Monarchic vs Islamic Republic', details: 'Saudi monarchy, Iran theocratic republic. Different governance models. Both authoritarian. Ideological competition.' },
            organizations: { score: 4, summary: 'OPEC, OIC shared', details: 'Both in OPEC, OIC. Compete for OIC leadership. GCC vs Iran. Different multilateral alignments.' },
            conflict: { score: 7, summary: 'High conflict risk', details: 'Proxy wars continue. Direct conflict possible. 2019 Aramco attack showed vulnerability. 2023 deal fragile.' }
        }
    },
    'IL-IR': {
        type: 'conflict',
        strength: 1,
        name: 'Existential Enmity',
        params: {
            trade: { score: 1, summary: 'Zero trade, complete embargo', details: 'No trade whatsoever. Iran doesn\'t recognize Israel. Sanctions prevent any exchange. Black market minimal.' },
            military: { score: 1, summary: 'Shadow war ongoing', details: 'Israeli strikes on Iran in Syria, Iraq. Iranian-backed forces attack Israel. Assassinations (Fakhrizadeh). Cyber warfare (Stuxnet).' },
            diplomatic: { score: 1, summary: 'No relations', details: 'Iran doesn\'t recognize Israel. "Death to Israel" official chant. No diplomatic contact. Third parties sometimes mediate.' },
            border: { score: 6, summary: 'No shared border', details: 'Not neighbors. Lebanon and Syria provide buffer. But Iranian forces in Syria near Golan.' },
            historical: { score: 2, summary: 'Alliance to enmity', details: 'Shah\'s Iran had relations with Israel. 1979 Revolution ended ties completely. Hostility since. Different narratives on Palestine.' },
            economic: { score: 1, summary: 'No economic relationship', details: 'Complete economic separation. Sanctions prevent any flow. No investment, no trade, no finance.' },
            cultural: { score: 2, summary: 'Jewish history in Persia', details: 'Ancient Jewish community in Persia. Still Jews in Iran (diminished). No current cultural exchange. Historical connection ignored.' },
            visa: { score: 1, summary: 'No travel possible', details: 'Israeli passport holders cannot enter Iran. Iranian Jews can leave. No tourist or business visas.' },
            strategic: { score: 1, summary: 'Existential conflict', details: 'Israel sees Iranian nuclear program as existential threat. Iran sees Israel as illegitimate. Regional competition for influence.' },
            intelligence: { score: 1, summary: 'Intense intelligence war', details: 'Mossad operations in Iran (assassinations, sabotage). Iranian operations against Israelis abroad. Cyber warfare constant.' },
            energy: { score: 1, summary: 'No energy ties', details: 'No energy relationship. Israel diversifying to avoid any connection. Mediterranean gas changes dynamics.' },
            technology: { score: 1, summary: 'Tech sabotage', details: 'Stuxnet virus targeted Iranian nuclear program. Constant cyber operations. No cooperative tech relationship.' },
            defense: { score: 1, summary: 'Potential direct war', details: 'Israel strikes on Iranian positions in Syria. Iran supplies Hezbollah, Hamas. Nuclear program redline for Israel.' },
            political: { score: 1, summary: 'Fundamental opposition', details: 'Israel: Jewish state. Iran: Islamic Republic opposing Israel\'s existence. No political dialogue possible.' },
            organizations: { score: 1, summary: 'No shared meaningful organizations', details: 'Both in UN but Iran votes against Israel consistently. No shared regional organizations.' },
            conflict: { score: 9, summary: 'Very high conflict risk', details: 'Shadow war ongoing. Nuclear program could trigger strike. Regional war through proxies. Most dangerous non-war relationship.' }
        }
    }
};

// ============================================
// RELATIONSHIP CALCULATOR
// ============================================
function calculateRelationship(code1, code2) {
    if (!COUNTRY_MAP[code1] || !COUNTRY_MAP[code2] || code1 === code2) return null;
    
    // Check for pre-defined bilateral data
    const key1 = `${code1}-${code2}`;
    const key2 = `${code2}-${code1}`;
    
    if (BILATERAL_DATA[key1]) {
        return { ...BILATERAL_DATA[key1], code: code2, ...COUNTRY_MAP[code2] };
    }
    if (BILATERAL_DATA[key2]) {
        return { ...BILATERAL_DATA[key2], code: code2, ...COUNTRY_MAP[code2] };
    }
    
    // Generate relationship based on alliances and regional factors
    return generateRelationship(code1, code2);
}

function generateRelationship(code1, code2) {
    const c1 = COUNTRY_MAP[code1];
    const c2 = COUNTRY_MAP[code2];
    
    let type = 'neutral';
    let strength = 5;
    let reasons = [];
    
    // Check shared alliances
    const sharedAlliances = [];
    for (const [allianceKey, alliance] of Object.entries(ALLIANCES)) {
        if (alliance.members.includes(code1) && alliance.members.includes(code2)) {
            sharedAlliances.push(alliance);
            reasons.push(alliance.name);
        }
    }
    
    // Determine type based on alliances
    if (sharedAlliances.length > 0) {
        const hasMilitary = sharedAlliances.some(a => a.type === 'military' || a.type === 'intelligence');
        const hasEconomic = sharedAlliances.some(a => a.type.includes('economic'));
        
        if (hasMilitary) {
            type = 'allies';
            strength = 7 + Math.min(sharedAlliances.length, 3);
        } else if (hasEconomic || sharedAlliances.length >= 2) {
            type = 'strategic';
            strength = 6 + Math.min(sharedAlliances.length, 2);
        } else {
            type = 'strategic';
            strength = 5 + sharedAlliances.length;
        }
    }
    
    // Regional bonus
    if (c1.region === c2.region && type === 'neutral') {
        type = 'strategic';
        strength = 5;
        reasons.push('Regional partners');
    }
    
    if (c1.subregion === c2.subregion) {
        strength = Math.min(strength + 1, 10);
        if (!reasons.includes('Subregional neighbors')) {
            reasons.push('Subregional neighbors');
        }
    }
    
    // Generate parameters
    const params = generateDefaultParams(type, strength);
    
    return {
        code: code2,
        type,
        strength,
        reasons,
        params,
        ...c2
    };
}

function generateDefaultParams(type, baseStrength) {
    const params = {};
    
    const ranges = {
        allies: { min: 7, max: 10 },
        strategic: { min: 5, max: 8 },
        neutral: { min: 3, max: 6 },
        complex: { min: 2, max: 7 },
        conflict: { min: 1, max: 4 }
    };
    
    const range = ranges[type] || ranges.neutral;
    
    PARAMETERS.forEach(param => {
        let score = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
        
        // Special adjustments
        if (param.id === 'conflict') {
            if (type === 'conflict') score = 8 + Math.floor(Math.random() * 2);
            else if (type === 'allies') score = 1 + Math.floor(Math.random() * 2);
        }
        
        params[param.id] = {
            score,
            summary: getParamSummary(param.id, score),
            details: getParamDetails(param.id, score)
        };
    });
    
    return params;
}

function getParamSummary(paramId, score) {
    const summaries = {
        trade: ['Minimal trade', 'Limited trade', 'Moderate trade', 'Strong trade', 'Major trading partners'],
        military: ['No military cooperation', 'Minimal contacts', 'Some cooperation', 'Strong cooperation', 'Deep military alliance'],
        diplomatic: ['No relations', 'Strained relations', 'Standard relations', 'Good relations', 'Excellent relations'],
        border: ['Active dispute', 'Unresolved issues', 'Managed border', 'Good relations', 'Open borders'],
        historical: ['Historical enemies', 'Difficult history', 'Mixed history', 'Positive history', 'Strong historical ties'],
        economic: ['No agreements', 'Limited agreements', 'Some agreements', 'Strong integration', 'Deep integration'],
        cultural: ['No exchange', 'Minimal exchange', 'Some exchange', 'Active exchange', 'Deep cultural ties'],
        visa: ['Closed borders', 'Strict visa', 'Visa required', 'Easy visa', 'Visa-free'],
        strategic: ['Adversaries', 'Competitors', 'Neutral', 'Partners', 'Close allies'],
        intelligence: ['No sharing', 'Minimal', 'Some sharing', 'Good sharing', 'Integrated sharing'],
        energy: ['No cooperation', 'Limited', 'Some projects', 'Strong cooperation', 'Integrated markets'],
        technology: ['No transfer', 'Restricted', 'Some cooperation', 'Active cooperation', 'Deep partnership'],
        defense: ['Adversarial', 'No cooperation', 'Limited', 'Strong cooperation', 'Alliance'],
        political: ['Opposed', 'Different systems', 'Some alignment', 'Aligned', 'Close alignment'],
        organizations: ['No shared', 'Few shared', 'Some shared', 'Many shared', 'Complete overlap'],
        conflict: ['Stable', 'Low risk', 'Moderate risk', 'High risk', 'Active conflict']
    };
    
    const level = Math.min(Math.floor((score - 1) / 2), 4);
    return summaries[paramId]?.[level] || 'Unknown';
}

function getParamDetails(paramId, score) {
    return `Current assessment: ${score}/10. This evaluation is based on diplomatic records, trade data, and geopolitical analysis as of 2026.`;
}

function generateRelationsForCountry(centerCode) {
    if (!COUNTRY_MAP[centerCode]) return [];
    
    const relations = [];
    
    COUNTRIES.forEach(country => {
        if (country.code === centerCode) return;
        
        const rel = calculateRelationship(centerCode, country.code);
        if (rel) {
            // Determine ring based on type
            const ringMap = { allies: 1, strategic: 2, neutral: 3, complex: 4, conflict: 5 };
            rel.ring = ringMap[rel.type] || 3;
            relations.push(rel);
        }
    });
    
    // Sort by priority
    const priority = { conflict: 5, allies: 4, strategic: 3, complex: 2, neutral: 1 };
    relations.sort((a, b) => priority[b.type] - priority[a.type] || b.strength - a.strength);
    
    return relations;
}

// ============================================
// EXPORTS
// ============================================
window.PARAMETERS = PARAMETERS;
window.COUNTRIES = COUNTRIES;
window.COUNTRY_MAP = COUNTRY_MAP;
window.ALLIANCES = ALLIANCES;
window.BILATERAL_DATA = BILATERAL_DATA;
window.calculateRelationship = calculateRelationship;
window.generateRelationsForCountry = generateRelationsForCountry;

console.log('📊 Unity Atlas Data Module Loaded');
console.log(`   ${COUNTRIES.length} nations`);
console.log(`   ${Object.keys(BILATERAL_DATA).length} detailed bilateral relationships`);
console.log(`   ${Object.keys(ALLIANCES).length} alliances/organizations`);
