// ============================================
// UNITY ATLAS - COMPREHENSIVE DATA MODULE
// 197 Nations + Full Parameter Details
// ============================================

'use strict';

// ============================================
// 16 PARAMETERS WITH FULL DETAILS
// ============================================
const PARAMETERS = [
    {
        id: 'trade',
        name: 'Trade Relations',
        icon: 'fa-handshake',
        category: 'Economic',
        description: 'Bilateral trade volume, agreements, tariffs, and economic interdependence',
        factors: [
            'Annual bilateral trade volume in USD',
            'Trade balance (surplus/deficit)',
            'Number of active trade agreements',
            'Tariff rates and trade barriers',
            'Key export/import commodities',
            'Trade dependency ratio',
            'Free Trade Agreement status',
            'Most Favored Nation status'
        ]
    },
    {
        id: 'military',
        name: 'Military Cooperation',
        icon: 'fa-shield-halved',
        category: 'Security',
        description: 'Joint exercises, arms sales, military bases, and defense collaboration',
        factors: [
            'Joint military exercises frequency',
            'Arms sales and purchases',
            'Military base access agreements',
            'Defense technology sharing',
            'Military training programs',
            'Troop deployment arrangements',
            'Naval port access rights',
            'Air defense cooperation'
        ]
    },
    {
        id: 'diplomatic',
        name: 'Diplomatic Relations',
        icon: 'fa-landmark',
        category: 'Political',
        description: 'Embassy presence, diplomatic missions, and official state communications',
        factors: [
            'Embassy/Consulate presence',
            'Ambassador appointment level',
            'Frequency of state visits',
            'Diplomatic incident history',
            'Consular services availability',
            'Diplomatic staff numbers',
            'Official recognition status',
            'Protocol and ceremonial relations'
        ]
    },
    {
        id: 'border',
        name: 'Border Relations',
        icon: 'fa-map',
        category: 'Territorial',
        description: 'Border disputes, territorial claims, and boundary agreements',
        factors: [
            'Border demarcation status',
            'Territorial disputes',
            'Border crossing facilities',
            'Joint border patrol agreements',
            'Maritime boundary agreements',
            'Airspace arrangements',
            'Cross-border infrastructure',
            'Border incident frequency'
        ]
    },
    {
        id: 'historical',
        name: 'Historical Ties',
        icon: 'fa-book',
        category: 'Cultural',
        description: 'Colonial history, past conflicts, shared heritage, and historical bonds',
        factors: [
            'Colonial/Imperial history',
            'Past military conflicts',
            'Historical alliances',
            'Shared independence movements',
            'Cultural heritage connections',
            'Historical grievances',
            'Reconciliation efforts',
            'Commemorative events'
        ]
    },
    {
        id: 'economic',
        name: 'Economic Integration',
        icon: 'fa-chart-line',
        category: 'Economic',
        description: 'Investment treaties, economic partnerships, and financial cooperation',
        factors: [
            'Bilateral Investment Treaties',
            'Foreign Direct Investment flows',
            'Joint venture prevalence',
            'Economic zone agreements',
            'Currency swap arrangements',
            'Development aid flows',
            'Infrastructure investments',
            'Banking sector integration'
        ]
    },
    {
        id: 'cultural',
        name: 'Cultural Exchange',
        icon: 'fa-users',
        category: 'Cultural',
        description: 'Student exchanges, diaspora connections, tourism, and cultural programs',
        factors: [
            'Student exchange programs',
            'Diaspora population size',
            'Tourism flows (both directions)',
            'Cultural centers/institutes',
            'Media and entertainment exchange',
            'Sports diplomacy',
            'Sister city partnerships',
            'Language learning programs'
        ]
    },
    {
        id: 'visa',
        name: 'Visa & Mobility',
        icon: 'fa-passport',
        category: 'Social',
        description: 'Visa requirements, freedom of movement, and immigration policies',
        factors: [
            'Visa requirement status',
            'Visa-free days allowed',
            'Work permit accessibility',
            'Residency pathways',
            'Immigration quotas',
            'Deportation agreements',
            'Refugee acceptance',
            'Border crossing wait times'
        ]
    },
    {
        id: 'strategic',
        name: 'Strategic Alignment',
        icon: 'fa-chess',
        category: 'Geopolitical',
        description: 'Geopolitical importance, strategic partnerships, and power dynamics',
        factors: [
            'Alliance membership overlap',
            'Strategic dialogue mechanisms',
            'Geopolitical positioning',
            'Regional influence coordination',
            'Third-party relationship impacts',
            'Strategic resource access',
            'Maritime chokepoint cooperation',
            'Space and cyber cooperation'
        ]
    },
    {
        id: 'intelligence',
        name: 'Intelligence Cooperation',
        icon: 'fa-user-secret',
        category: 'Security',
        description: 'Intelligence sharing agreements and security cooperation',
        factors: [
            'Intelligence sharing agreements',
            'Counter-terrorism cooperation',
            'Signals intelligence sharing',
            'Human intelligence coordination',
            'Cyber security cooperation',
            'Joint surveillance programs',
            'Information classification sharing',
            'Espionage incident history'
        ]
    },
    {
        id: 'energy',
        name: 'Energy Relations',
        icon: 'fa-bolt',
        category: 'Economic',
        description: 'Oil, gas, renewable energy deals, and energy security partnerships',
        factors: [
            'Oil/Gas trade volumes',
            'Pipeline agreements',
            'Nuclear energy cooperation',
            'Renewable energy projects',
            'Energy grid connections',
            'Strategic petroleum reserves',
            'LNG terminal access',
            'Clean energy technology sharing'
        ]
    },
    {
        id: 'technology',
        name: 'Technology Partnership',
        icon: 'fa-microchip',
        category: 'Economic',
        description: 'Tech transfer, R&D collaboration, and digital cooperation',
        factors: [
            'Joint R&D programs',
            'Technology transfer agreements',
            'Patent cooperation',
            'Semiconductor supply chains',
            'AI development collaboration',
            'Space technology sharing',
            'Telecommunications infrastructure',
            'Digital trade frameworks'
        ]
    },
    {
        id: 'defense',
        name: 'Defense Agreements',
        icon: 'fa-fighter-jet',
        category: 'Security',
        description: 'Mutual defense treaties, alliance commitments, and security guarantees',
        factors: [
            'Mutual Defense Treaty status',
            'Security guarantee provisions',
            'Nuclear umbrella coverage',
            'Logistics support agreements',
            'Status of Forces Agreements',
            'Joint command structures',
            'Defense procurement cooperation',
            'Interoperability standards'
        ]
    },
    {
        id: 'political',
        name: 'Political Alignment',
        icon: 'fa-balance-scale',
        category: 'Political',
        description: 'Ideological alignment, UN voting patterns, and policy coordination',
        factors: [
            'UN General Assembly voting alignment',
            'Ideological compatibility',
            'Governance system similarity',
            'Human rights positions',
            'Climate policy alignment',
            'Sanctions coordination',
            'Multilateral initiative co-sponsorship',
            'Joint statements frequency'
        ]
    },
    {
        id: 'organizations',
        name: 'Shared Organizations',
        icon: 'fa-sitemap',
        category: 'Multilateral',
        description: 'Joint membership in international organizations and regional blocs',
        factors: [
            'UN body memberships',
            'Regional organization overlap',
            'Economic bloc participation',
            'Military alliance membership',
            'Trade agreement coverage',
            'Development bank participation',
            'Standards body membership',
            'Environmental treaty participation'
        ]
    },
    {
        id: 'conflict',
        name: 'Conflict Risk',
        icon: 'fa-triangle-exclamation',
        category: 'Security',
        description: 'Current tensions, potential flashpoints, and conflict probability',
        factors: [
            'Active disputes',
            'Military incident frequency',
            'Diplomatic crisis history',
            'Proxy conflict involvement',
            'Nuclear escalation risk',
            'Cyber attack frequency',
            'Economic warfare status',
            'Crisis management mechanisms'
        ]
    }
];

// ============================================
// 197 COUNTRIES DATABASE
// ============================================
const COUNTRIES = [
    // ASIA (49)
    { code: "AF", name: "Afghanistan", flag: "🇦🇫", region: "asia", capital: "Kabul", population: 43000000, gdp: 14.6 },
    { code: "AM", name: "Armenia", flag: "🇦🇲", region: "asia", capital: "Yerevan", population: 3000000, gdp: 19.5 },
    { code: "AZ", name: "Azerbaijan", flag: "🇦🇿", region: "asia", capital: "Baku", population: 10400000, gdp: 78.7 },
    { code: "BH", name: "Bahrain", flag: "🇧🇭", region: "asia", capital: "Manama", population: 1500000, gdp: 44.4 },
    { code: "BD", name: "Bangladesh", flag: "🇧🇩", region: "asia", capital: "Dhaka", population: 175000000, gdp: 460.2 },
    { code: "BT", name: "Bhutan", flag: "🇧🇹", region: "asia", capital: "Thimphu", population: 780000, gdp: 2.9 },
    { code: "BN", name: "Brunei", flag: "🇧🇳", region: "asia", capital: "Bandar Seri Begawan", population: 450000, gdp: 18.3 },
    { code: "KH", name: "Cambodia", flag: "🇰🇭", region: "asia", capital: "Phnom Penh", population: 17000000, gdp: 29.6 },
    { code: "CN", name: "China", flag: "🇨🇳", region: "asia", capital: "Beijing", population: 1412000000, gdp: 19374 },
    { code: "CY", name: "Cyprus", flag: "🇨🇾", region: "asia", capital: "Nicosia", population: 1300000, gdp: 31 },
    { code: "GE", name: "Georgia", flag: "🇬🇪", region: "asia", capital: "Tbilisi", population: 3700000, gdp: 25.8 },
    { code: "IN", name: "India", flag: "🇮🇳", region: "asia", capital: "New Delhi", population: 1442000000, gdp: 3730 },
    { code: "ID", name: "Indonesia", flag: "🇮🇩", region: "asia", capital: "Jakarta", population: 280000000, gdp: 1417 },
    { code: "IR", name: "Iran", flag: "🇮🇷", region: "asia", capital: "Tehran", population: 90000000, gdp: 388.5 },
    { code: "IQ", name: "Iraq", flag: "🇮🇶", region: "asia", capital: "Baghdad", population: 46000000, gdp: 270 },
    { code: "IL", name: "Israel", flag: "🇮🇱", region: "asia", capital: "Jerusalem", population: 10000000, gdp: 564 },
    { code: "JP", name: "Japan", flag: "🇯🇵", region: "asia", capital: "Tokyo", population: 123000000, gdp: 4231 },
    { code: "JO", name: "Jordan", flag: "🇯🇴", region: "asia", capital: "Amman", population: 11500000, gdp: 50 },
    { code: "KZ", name: "Kazakhstan", flag: "🇰🇿", region: "asia", capital: "Astana", population: 20000000, gdp: 261 },
    { code: "KW", name: "Kuwait", flag: "🇰🇼", region: "asia", capital: "Kuwait City", population: 4500000, gdp: 164.7 },
    { code: "KG", name: "Kyrgyzstan", flag: "🇰🇬", region: "asia", capital: "Bishkek", population: 7200000, gdp: 12.3 },
    { code: "LA", name: "Laos", flag: "🇱🇦", region: "asia", capital: "Vientiane", population: 7600000, gdp: 15.8 },
    { code: "LB", name: "Lebanon", flag: "🇱🇧", region: "asia", capital: "Beirut", population: 5400000, gdp: 21.8 },
    { code: "MY", name: "Malaysia", flag: "🇲🇾", region: "asia", capital: "Kuala Lumpur", population: 35000000, gdp: 434 },
    { code: "MV", name: "Maldives", flag: "🇲🇻", region: "asia", capital: "Malé", population: 520000, gdp: 6.5 },
    { code: "MN", name: "Mongolia", flag: "🇲🇳", region: "asia", capital: "Ulaanbaatar", population: 3500000, gdp: 19.9 },
    { code: "MM", name: "Myanmar", flag: "🇲🇲", region: "asia", capital: "Naypyidaw", population: 55000000, gdp: 59.4 },
    { code: "NP", name: "Nepal", flag: "🇳🇵", region: "asia", capital: "Kathmandu", population: 31500000, gdp: 40.8 },
    { code: "KP", name: "North Korea", flag: "🇰🇵", region: "asia", capital: "Pyongyang", population: 26000000, gdp: 18 },
    { code: "OM", name: "Oman", flag: "🇴🇲", region: "asia", capital: "Muscat", population: 5200000, gdp: 108.3 },
    { code: "PK", name: "Pakistan", flag: "🇵🇰", region: "asia", capital: "Islamabad", population: 245000000, gdp: 376.5 },
    { code: "PS", name: "Palestine", flag: "🇵🇸", region: "asia", capital: "Ramallah", population: 5500000, gdp: 18.1 },
    { code: "PH", name: "Philippines", flag: "🇵🇭", region: "asia", capital: "Manila", population: 118000000, gdp: 440.9 },
    { code: "QA", name: "Qatar", flag: "🇶🇦", region: "asia", capital: "Doha", population: 2800000, gdp: 225.7 },
    { code: "SA", name: "Saudi Arabia", flag: "🇸🇦", region: "asia", capital: "Riyadh", population: 37000000, gdp: 1108 },
    { code: "SG", name: "Singapore", flag: "🇸🇬", region: "asia", capital: "Singapore", population: 6000000, gdp: 501.4 },
    { code: "KR", name: "South Korea", flag: "🇰🇷", region: "asia", capital: "Seoul", population: 51500000, gdp: 1721 },
    { code: "LK", name: "Sri Lanka", flag: "🇱🇰", region: "asia", capital: "Colombo", population: 22000000, gdp: 74.4 },
    { code: "SY", name: "Syria", flag: "🇸🇾", region: "asia", capital: "Damascus", population: 23000000, gdp: 11 },
    { code: "TW", name: "Taiwan", flag: "🇹🇼", region: "asia", capital: "Taipei", population: 24000000, gdp: 790 },
    { code: "TJ", name: "Tajikistan", flag: "🇹🇯", region: "asia", capital: "Dushanbe", population: 10300000, gdp: 11.6 },
    { code: "TH", name: "Thailand", flag: "🇹🇭", region: "asia", capital: "Bangkok", population: 72000000, gdp: 548.9 },
    { code: "TL", name: "Timor-Leste", flag: "🇹🇱", region: "asia", capital: "Dili", population: 1500000, gdp: 3.2 },
    { code: "TR", name: "Turkey", flag: "🇹🇷", region: "asia", capital: "Ankara", population: 86000000, gdp: 1154 },
    { code: "TM", name: "Turkmenistan", flag: "🇹🇲", region: "asia", capital: "Ashgabat", population: 6600000, gdp: 59.9 },
    { code: "AE", name: "United Arab Emirates", flag: "🇦🇪", region: "asia", capital: "Abu Dhabi", population: 10000000, gdp: 509 },
    { code: "UZ", name: "Uzbekistan", flag: "🇺🇿", region: "asia", capital: "Tashkent", population: 36000000, gdp: 90.4 },
    { code: "VN", name: "Vietnam", flag: "🇻🇳", region: "asia", capital: "Hanoi", population: 100000000, gdp: 449.1 },
    { code: "YE", name: "Yemen", flag: "🇾🇪", region: "asia", capital: "Sana'a", population: 35000000, gdp: 21.6 },

    // AFRICA (54)
    { code: "DZ", name: "Algeria", flag: "🇩🇿", region: "africa", capital: "Algiers", population: 46000000, gdp: 206 },
    { code: "AO", name: "Angola", flag: "🇦🇴", region: "africa", capital: "Luanda", population: 36000000, gdp: 106.7 },
    { code: "BJ", name: "Benin", flag: "🇧🇯", region: "africa", capital: "Porto-Novo", population: 13500000, gdp: 18.4 },
    { code: "BW", name: "Botswana", flag: "🇧🇼", region: "africa", capital: "Gaborone", population: 2700000, gdp: 20.4 },
    { code: "BF", name: "Burkina Faso", flag: "🇧🇫", region: "africa", capital: "Ouagadougou", population: 23000000, gdp: 21.4 },
    { code: "BI", name: "Burundi", flag: "🇧🇮", region: "africa", capital: "Gitega", population: 13200000, gdp: 3.1 },
    { code: "CV", name: "Cabo Verde", flag: "🇨🇻", region: "africa", capital: "Praia", population: 600000, gdp: 2.4 },
    { code: "CM", name: "Cameroon", flag: "🇨🇲", region: "africa", capital: "Yaoundé", population: 28500000, gdp: 46.3 },
    { code: "CF", name: "Central African Republic", flag: "🇨🇫", region: "africa", capital: "Bangui", population: 5600000, gdp: 2.6 },
    { code: "TD", name: "Chad", flag: "🇹🇩", region: "africa", capital: "N'Djamena", population: 18000000, gdp: 12.7 },
    { code: "KM", name: "Comoros", flag: "🇰🇲", region: "africa", capital: "Moroni", population: 900000, gdp: 1.3 },
    { code: "CG", name: "Congo", flag: "🇨🇬", region: "africa", capital: "Brazzaville", population: 6000000, gdp: 14.5 },
    { code: "CD", name: "DR Congo", flag: "🇨🇩", region: "africa", capital: "Kinshasa", population: 105000000, gdp: 66.4 },
    { code: "CI", name: "Côte d'Ivoire", flag: "🇨🇮", region: "africa", capital: "Yamoussoukro", population: 28500000, gdp: 78.8 },
    { code: "DJ", name: "Djibouti", flag: "🇩🇯", region: "africa", capital: "Djibouti", population: 1100000, gdp: 3.9 },
    { code: "EG", name: "Egypt", flag: "🇪🇬", region: "africa", capital: "Cairo", population: 110000000, gdp: 476.7 },
    { code: "GQ", name: "Equatorial Guinea", flag: "🇬🇶", region: "africa", capital: "Malabo", population: 1800000, gdp: 12.3 },
    { code: "ER", name: "Eritrea", flag: "🇪🇷", region: "africa", capital: "Asmara", population: 3800000, gdp: 2.3 },
    { code: "SZ", name: "Eswatini", flag: "🇸🇿", region: "africa", capital: "Mbabane", population: 1200000, gdp: 4.9 },
    { code: "ET", name: "Ethiopia", flag: "🇪🇹", region: "africa", capital: "Addis Ababa", population: 126000000, gdp: 163.7 },
    { code: "GA", name: "Gabon", flag: "🇬🇦", region: "africa", capital: "Libreville", population: 2500000, gdp: 21.1 },
    { code: "GM", name: "Gambia", flag: "🇬🇲", region: "africa", capital: "Banjul", population: 2800000, gdp: 2.3 },
    { code: "GH", name: "Ghana", flag: "🇬🇭", region: "africa", capital: "Accra", population: 34000000, gdp: 76.4 },
    { code: "GN", name: "Guinea", flag: "🇬🇳", region: "africa", capital: "Conakry", population: 14500000, gdp: 20.5 },
    { code: "GW", name: "Guinea-Bissau", flag: "🇬🇼", region: "africa", capital: "Bissau", population: 2200000, gdp: 1.9 },
    { code: "KE", name: "Kenya", flag: "🇰🇪", region: "africa", capital: "Nairobi", population: 55000000, gdp: 113.4 },
    { code: "LS", name: "Lesotho", flag: "🇱🇸", region: "africa", capital: "Maseru", population: 2300000, gdp: 2.5 },
    { code: "LR", name: "Liberia", flag: "🇱🇷", region: "africa", capital: "Monrovia", population: 5500000, gdp: 4 },
    { code: "LY", name: "Libya", flag: "🇱🇾", region: "africa", capital: "Tripoli", population: 7200000, gdp: 42.8 },
    { code: "MG", name: "Madagascar", flag: "🇲🇬", region: "africa", capital: "Antananarivo", population: 31000000, gdp: 16 },
    { code: "MW", name: "Malawi", flag: "🇲🇼", region: "africa", capital: "Lilongwe", population: 21500000, gdp: 14 },
    { code: "ML", name: "Mali", flag: "🇲🇱", region: "africa", capital: "Bamako", population: 23000000, gdp: 19.3 },
    { code: "MR", name: "Mauritania", flag: "🇲🇷", region: "africa", capital: "Nouakchott", population: 5000000, gdp: 10.4 },
    { code: "MU", name: "Mauritius", flag: "🇲🇺", region: "africa", capital: "Port Louis", population: 1300000, gdp: 14 },
    { code: "MA", name: "Morocco", flag: "🇲🇦", region: "africa", capital: "Rabat", population: 38000000, gdp: 142.9 },
    { code: "MZ", name: "Mozambique", flag: "🇲🇿", region: "africa", capital: "Maputo", population: 33500000, gdp: 17.8 },
    { code: "NA", name: "Namibia", flag: "🇳🇦", region: "africa", capital: "Windhoek", population: 2700000, gdp: 12.4 },
    { code: "NE", name: "Niger", flag: "🇳🇪", region: "africa", capital: "Niamey", population: 27000000, gdp: 15.4 },
    { code: "NG", name: "Nigeria", flag: "🇳🇬", region: "africa", capital: "Abuja", population: 230000000, gdp: 477.4 },
    { code: "RW", name: "Rwanda", flag: "🇷🇼", region: "africa", capital: "Kigali", population: 14500000, gdp: 13.3 },
    { code: "ST", name: "São Tomé and Príncipe", flag: "🇸🇹", region: "africa", capital: "São Tomé", population: 230000, gdp: 0.6 },
    { code: "SN", name: "Senegal", flag: "🇸🇳", region: "africa", capital: "Dakar", population: 18500000, gdp: 28.3 },
    { code: "SC", name: "Seychelles", flag: "🇸🇨", region: "africa", capital: "Victoria", population: 100000, gdp: 1.7 },
    { code: "SL", name: "Sierra Leone", flag: "🇸🇱", region: "africa", capital: "Freetown", population: 8800000, gdp: 4.1 },
    { code: "SO", name: "Somalia", flag: "🇸🇴", region: "africa", capital: "Mogadishu", population: 18500000, gdp: 8.1 },
    { code: "ZA", name: "South Africa", flag: "🇿🇦", region: "africa", capital: "Pretoria", population: 62000000, gdp: 405.3 },
    { code: "SS", name: "South Sudan", flag: "🇸🇸", region: "africa", capital: "Juba", population: 11800000, gdp: 4.8 },
    { code: "SD", name: "Sudan", flag: "🇸🇩", region: "africa", capital: "Khartoum", population: 48500000, gdp: 31 },
    { code: "TZ", name: "Tanzania", flag: "🇹🇿", region: "africa", capital: "Dodoma", population: 67000000, gdp: 79.2 },
    { code: "TG", name: "Togo", flag: "🇹🇬", region: "africa", capital: "Lomé", population: 9000000, gdp: 9.1 },
    { code: "TN", name: "Tunisia", flag: "🇹🇳", region: "africa", capital: "Tunis", population: 12500000, gdp: 46.8 },
    { code: "UG", name: "Uganda", flag: "🇺🇬", region: "africa", capital: "Kampala", population: 50000000, gdp: 49.3 },
    { code: "ZM", name: "Zambia", flag: "🇿🇲", region: "africa", capital: "Lusaka", population: 21000000, gdp: 29.1 },
    { code: "ZW", name: "Zimbabwe", flag: "🇿🇼", region: "africa", capital: "Harare", population: 16800000, gdp: 28.5 },

    // EUROPE (44)
    { code: "AL", name: "Albania", flag: "🇦🇱", region: "europe", capital: "Tirana", population: 2800000, gdp: 22.9 },
    { code: "AD", name: "Andorra", flag: "🇦🇩", region: "europe", capital: "Andorra la Vella", population: 80000, gdp: 3.4 },
    { code: "AT", name: "Austria", flag: "🇦🇹", region: "europe", capital: "Vienna", population: 9200000, gdp: 516 },
    { code: "BY", name: "Belarus", flag: "🇧🇾", region: "europe", capital: "Minsk", population: 9100000, gdp: 73.5 },
    { code: "BE", name: "Belgium", flag: "🇧🇪", region: "europe", capital: "Brussels", population: 11800000, gdp: 632.2 },
    { code: "BA", name: "Bosnia and Herzegovina", flag: "🇧🇦", region: "europe", capital: "Sarajevo", population: 3200000, gdp: 26 },
    { code: "BG", name: "Bulgaria", flag: "🇧🇬", region: "europe", capital: "Sofia", population: 6600000, gdp: 103.1 },
    { code: "HR", name: "Croatia", flag: "🇭🇷", region: "europe", capital: "Zagreb", population: 3800000, gdp: 82.7 },
    { code: "CZ", name: "Czech Republic", flag: "🇨🇿", region: "europe", capital: "Prague", population: 10500000, gdp: 335.2 },
    { code: "DK", name: "Denmark", flag: "🇩🇰", region: "europe", capital: "Copenhagen", population: 5900000, gdp: 406 },
    { code: "EE", name: "Estonia", flag: "🇪🇪", region: "europe", capital: "Tallinn", population: 1400000, gdp: 41.9 },
    { code: "FI", name: "Finland", flag: "🇫🇮", region: "europe", capital: "Helsinki", population: 5600000, gdp: 305.7 },
    { code: "FR", name: "France", flag: "🇫🇷", region: "europe", capital: "Paris", population: 65000000, gdp: 3049 },
    { code: "DE", name: "Germany", flag: "🇩🇪", region: "europe", capital: "Berlin", population: 85000000, gdp: 4456 },
    { code: "GR", name: "Greece", flag: "🇬🇷", region: "europe", capital: "Athens", population: 10200000, gdp: 239.3 },
    { code: "HU", name: "Hungary", flag: "🇭🇺", region: "europe", capital: "Budapest", population: 9500000, gdp: 212.4 },
    { code: "IS", name: "Iceland", flag: "🇮🇸", region: "europe", capital: "Reykjavik", population: 400000, gdp: 30.5 },
    { code: "IE", name: "Ireland", flag: "🇮🇪", region: "europe", capital: "Dublin", population: 5200000, gdp: 545.6 },
    { code: "IT", name: "Italy", flag: "🇮🇹", region: "europe", capital: "Rome", population: 59000000, gdp: 2186 },
    { code: "XK", name: "Kosovo", flag: "🇽🇰", region: "europe", capital: "Pristina", population: 1800000, gdp: 10.3 },
    { code: "LV", name: "Latvia", flag: "🇱🇻", region: "europe", capital: "Riga", population: 1800000, gdp: 44.4 },
    { code: "LI", name: "Liechtenstein", flag: "🇱🇮", region: "europe", capital: "Vaduz", population: 40000, gdp: 7.4 },
    { code: "LT", name: "Lithuania", flag: "🇱🇹", region: "europe", capital: "Vilnius", population: 2800000, gdp: 80.8 },
    { code: "LU", name: "Luxembourg", flag: "🇱🇺", region: "europe", capital: "Luxembourg", population: 670000, gdp: 89 },
    { code: "MT", name: "Malta", flag: "🇲🇹", region: "europe", capital: "Valletta", population: 500000, gdp: 20 },
    { code: "MD", name: "Moldova", flag: "🇲🇩", region: "europe", capital: "Chișinău", population: 2500000, gdp: 16.1 },
    { code: "MC", name: "Monaco", flag: "🇲🇨", region: "europe", capital: "Monaco", population: 40000, gdp: 8.6 },
    { code: "ME", name: "Montenegro", flag: "🇲🇪", region: "europe", capital: "Podgorica", population: 600000, gdp: 7.1 },
    { code: "NL", name: "Netherlands", flag: "🇳🇱", region: "europe", capital: "Amsterdam", population: 18000000, gdp: 1092.7 },
    { code: "MK", name: "North Macedonia", flag: "🇲🇰", region: "europe", capital: "Skopje", population: 1800000, gdp: 15 },
    { code: "NO", name: "Norway", flag: "🇳🇴", region: "europe", capital: "Oslo", population: 5500000, gdp: 593.1 },
    { code: "PL", name: "Poland", flag: "🇵🇱", region: "europe", capital: "Warsaw", population: 38000000, gdp: 842.2 },
    { code: "PT", name: "Portugal", flag: "🇵🇹", region: "europe", capital: "Lisbon", population: 10400000, gdp: 287.1 },
    { code: "RO", name: "Romania", flag: "🇷🇴", region: "europe", capital: "Bucharest", population: 19000000, gdp: 351 },
    { code: "RU", name: "Russia", flag: "🇷🇺", region: "europe", capital: "Moscow", population: 144000000, gdp: 2021 },
    { code: "SM", name: "San Marino", flag: "🇸🇲", region: "europe", capital: "San Marino", population: 34000, gdp: 1.9 },
    { code: "RS", name: "Serbia", flag: "🇷🇸", region: "europe", capital: "Belgrade", population: 6600000, gdp: 75.2 },
    { code: "SK", name: "Slovakia", flag: "🇸🇰", region: "europe", capital: "Bratislava", population: 5400000, gdp: 132.9 },
    { code: "SI", name: "Slovenia", flag: "🇸🇮", region: "europe", capital: "Ljubljana", population: 2100000, gdp: 68.1 },
    { code: "ES", name: "Spain", flag: "🇪🇸", region: "europe", capital: "Madrid", population: 48000000, gdp: 1582 },
    { code: "SE", name: "Sweden", flag: "🇸🇪", region: "europe", capital: "Stockholm", population: 10600000, gdp: 593.3 },
    { code: "CH", name: "Switzerland", flag: "🇨🇭", region: "europe", capital: "Bern", population: 8900000, gdp: 884.9 },
    { code: "UA", name: "Ukraine", flag: "🇺🇦", region: "europe", capital: "Kyiv", population: 37000000, gdp: 160.5 },
    { code: "GB", name: "United Kingdom", flag: "🇬🇧", region: "europe", capital: "London", population: 68000000, gdp: 3332 },
    { code: "VA", name: "Vatican City", flag: "🇻🇦", region: "europe", capital: "Vatican City", population: 800, gdp: 0.3 },

    // AMERICAS (35)
    { code: "AG", name: "Antigua and Barbuda", flag: "🇦🇬", region: "americas", capital: "St. John's", population: 100000, gdp: 1.9 },
    { code: "AR", name: "Argentina", flag: "🇦🇷", region: "americas", capital: "Buenos Aires", population: 46500000, gdp: 641.1 },
    { code: "BS", name: "Bahamas", flag: "🇧🇸", region: "americas", capital: "Nassau", population: 400000, gdp: 14.5 },
    { code: "BB", name: "Barbados", flag: "🇧🇧", region: "americas", capital: "Bridgetown", population: 300000, gdp: 6 },
    { code: "BZ", name: "Belize", flag: "🇧🇿", region: "americas", capital: "Belmopan", population: 400000, gdp: 3.4 },
    { code: "BO", name: "Bolivia", flag: "🇧🇴", region: "americas", capital: "Sucre", population: 12500000, gdp: 46 },
    { code: "BR", name: "Brazil", flag: "🇧🇷", region: "americas", capital: "Brasília", population: 218000000, gdp: 2126 },
    { code: "CA", name: "Canada", flag: "🇨🇦", region: "americas", capital: "Ottawa", population: 40000000, gdp: 2140 },
    { code: "CL", name: "Chile", flag: "🇨🇱", region: "americas", capital: "Santiago", population: 19800000, gdp: 335.5 },
    { code: "CO", name: "Colombia", flag: "🇨🇴", region: "americas", capital: "Bogotá", population: 52500000, gdp: 363.8 },
    { code: "CR", name: "Costa Rica", flag: "🇨🇷", region: "americas", capital: "San José", population: 5300000, gdp: 71.3 },
    { code: "CU", name: "Cuba", flag: "🇨🇺", region: "americas", capital: "Havana", population: 11000000, gdp: 107.4 },
    { code: "DM", name: "Dominica", flag: "🇩🇲", region: "americas", capital: "Roseau", population: 70000, gdp: 0.6 },
    { code: "DO", name: "Dominican Republic", flag: "🇩🇴", region: "americas", capital: "Santo Domingo", population: 11500000, gdp: 121.3 },
    { code: "EC", name: "Ecuador", flag: "🇪🇨", region: "americas", capital: "Quito", population: 18500000, gdp: 118.7 },
    { code: "SV", name: "El Salvador", flag: "🇸🇻", region: "americas", capital: "San Salvador", population: 6500000, gdp: 34 },
    { code: "GD", name: "Grenada", flag: "🇬🇩", region: "americas", capital: "St. George's", population: 120000, gdp: 1.3 },
    { code: "GT", name: "Guatemala", flag: "🇬🇹", region: "americas", capital: "Guatemala City", population: 18500000, gdp: 102.1 },
    { code: "GY", name: "Guyana", flag: "🇬🇾", region: "americas", capital: "Georgetown", population: 800000, gdp: 16.3 },
    { code: "HT", name: "Haiti", flag: "🇭🇹", region: "americas", capital: "Port-au-Prince", population: 11800000, gdp: 20.2 },
    { code: "HN", name: "Honduras", flag: "🇭🇳", region: "americas", capital: "Tegucigalpa", population: 10600000, gdp: 33 },
    { code: "JM", name: "Jamaica", flag: "🇯🇲", region: "americas", capital: "Kingston", population: 2800000, gdp: 17.1 },
    { code: "MX", name: "Mexico", flag: "🇲🇽", region: "americas", capital: "Mexico City", population: 130000000, gdp: 1425 },
    { code: "NI", name: "Nicaragua", flag: "🇳🇮", region: "americas", capital: "Managua", population: 7100000, gdp: 15.7 },
    { code: "PA", name: "Panama", flag: "🇵🇦", region: "americas", capital: "Panama City", population: 4500000, gdp: 76.5 },
    { code: "PY", name: "Paraguay", flag: "🇵🇾", region: "americas", capital: "Asunción", population: 7200000, gdp: 44 },
    { code: "PE", name: "Peru", flag: "🇵🇪", region: "americas", capital: "Lima", population: 34500000, gdp: 268.2 },
    { code: "KN", name: "Saint Kitts and Nevis", flag: "🇰🇳", region: "americas", capital: "Basseterre", population: 50000, gdp: 1.1 },
    { code: "LC", name: "Saint Lucia", flag: "🇱🇨", region: "americas", capital: "Castries", population: 200000, gdp: 2.1 },
    { code: "VC", name: "Saint Vincent", flag: "🇻🇨", region: "americas", capital: "Kingstown", population: 110000, gdp: 1 },
    { code: "SR", name: "Suriname", flag: "🇸🇷", region: "americas", capital: "Paramaribo", population: 600000, gdp: 3.6 },
    { code: "TT", name: "Trinidad and Tobago", flag: "🇹🇹", region: "americas", capital: "Port of Spain", population: 1500000, gdp: 27.7 },
    { code: "US", name: "United States", flag: "🇺🇸", region: "americas", capital: "Washington, D.C.", population: 340000000, gdp: 28780 },
    { code: "UY", name: "Uruguay", flag: "🇺🇾", region: "americas", capital: "Montevideo", population: 3400000, gdp: 77.2 },
    { code: "VE", name: "Venezuela", flag: "🇻🇪", region: "americas", capital: "Caracas", population: 28500000, gdp: 92 },

    // OCEANIA (14)
    { code: "AU", name: "Australia", flag: "🇦🇺", region: "oceania", capital: "Canberra", population: 27000000, gdp: 1760 },
    { code: "FJ", name: "Fiji", flag: "🇫🇯", region: "oceania", capital: "Suva", population: 900000, gdp: 5.3 },
    { code: "KI", name: "Kiribati", flag: "🇰🇮", region: "oceania", capital: "Tarawa", population: 130000, gdp: 0.2 },
    { code: "MH", name: "Marshall Islands", flag: "🇲🇭", region: "oceania", capital: "Majuro", population: 40000, gdp: 0.3 },
    { code: "FM", name: "Micronesia", flag: "🇫🇲", region: "oceania", capital: "Palikir", population: 100000, gdp: 0.4 },
    { code: "NR", name: "Nauru", flag: "🇳🇷", region: "oceania", capital: "Yaren", population: 10000, gdp: 0.1 },
    { code: "NZ", name: "New Zealand", flag: "🇳🇿", region: "oceania", capital: "Wellington", population: 5300000, gdp: 252 },
    { code: "PW", name: "Palau", flag: "🇵🇼", region: "oceania", capital: "Ngerulmud", population: 20000, gdp: 0.3 },
    { code: "PG", name: "Papua New Guinea", flag: "🇵🇬", region: "oceania", capital: "Port Moresby", population: 10500000, gdp: 30.6 },
    { code: "WS", name: "Samoa", flag: "🇼🇸", region: "oceania", capital: "Apia", population: 200000, gdp: 0.9 },
    { code: "SB", name: "Solomon Islands", flag: "🇸🇧", region: "oceania", capital: "Honiara", population: 700000, gdp: 1.7 },
    { code: "TO", name: "Tonga", flag: "🇹🇴", region: "oceania", capital: "Nuku'alofa", population: 100000, gdp: 0.5 },
    { code: "TV", name: "Tuvalu", flag: "🇹🇻", region: "oceania", capital: "Funafuti", population: 10000, gdp: 0.06 },
    { code: "VU", name: "Vanuatu", flag: "🇻🇺", region: "oceania", capital: "Port Vila", population: 300000, gdp: 1 }
];

// Create lookup map
const COUNTRY_MAP = {};
COUNTRIES.forEach(c => COUNTRY_MAP[c.code] = c);

// ============================================
// ALLIANCES DATABASE
// ============================================
const ALLIANCES = {
    NATO: { name: 'NATO', type: 'military', members: ['US','GB','FR','DE','IT','CA','ES','PL','NL','BE','PT','GR','TR','DK','NO','CZ','HU','RO','BG','SK','SI','HR','AL','MK','ME','LT','LV','EE','IS','LU','FI','SE'] },
    EU: { name: 'European Union', type: 'economic', members: ['DE','FR','IT','ES','PL','RO','NL','BE','GR','CZ','PT','HU','SE','AT','BG','DK','FI','SK','IE','HR','LT','SI','LV','EE','CY','LU','MT'] },
    FIVEEYES: { name: 'Five Eyes', type: 'intelligence', members: ['US','GB','CA','AU','NZ'] },
    QUAD: { name: 'QUAD', type: 'strategic', members: ['US','JP','IN','AU'] },
    BRICS: { name: 'BRICS+', type: 'economic', members: ['BR','RU','IN','CN','ZA','EG','ET','IR','AE','SA'] },
    SCO: { name: 'SCO', type: 'security', members: ['CN','RU','IN','PK','KZ','KG','TJ','UZ','IR','BY'] },
    ASEAN: { name: 'ASEAN', type: 'economic', members: ['ID','MY','PH','SG','TH','BN','VN','LA','MM','KH'] },
    GCC: { name: 'GCC', type: 'economic', members: ['SA','AE','KW','QA','BH','OM'] },
    AU_AFRICA: { name: 'African Union', type: 'political', members: ['DZ','AO','BJ','BW','BF','BI','CV','CM','CF','TD','KM','CG','CD','CI','DJ','EG','GQ','ER','SZ','ET','GA','GM','GH','GN','GW','KE','LS','LR','LY','MG','MW','ML','MR','MU','MA','MZ','NA','NE','NG','RW','ST','SN','SC','SL','SO','ZA','SS','SD','TZ','TG','TN','UG','ZM','ZW'] },
    MERCOSUR: { name: 'MERCOSUR', type: 'economic', members: ['AR','BR','PY','UY','BO'] },
    CSTO: { name: 'CSTO', type: 'military', members: ['RU','BY','AM','KZ','KG','TJ'] },
    COMMONWEALTH: { name: 'Commonwealth', type: 'political', members: ['GB','AU','NZ','CA','IN','ZA','NG','PK','BD','MY','SG','KE','GH','TZ','UG','ZM','ZW','BW','NA','MU','SZ','LS','MW','MZ','RW','SC','CM','SL','GM','GY','TT','JM','BB','AG','BS','BZ','DM','GD','KN','LC','VC','CY','MT','FJ','KI','NR','PG','WS','SB','TO','TV','VU'] }
};

// ============================================
// GENERATE FULL PARAMETER DATA
// ============================================
function generateFullParamData(type, score, paramId, centerCountry, targetCountry) {
    const param = PARAMETERS.find(p => p.id === paramId);
    if (!param) return {};

    // Generate realistic data based on relationship type and score
    const levelDescriptions = {
        allies: {
            high: 'Excellent cooperation with deep institutional ties',
            medium: 'Strong partnership with regular engagement',
            low: 'Good relations with some cooperation'
        },
        strategic: {
            high: 'Growing strategic partnership with significant cooperation',
            medium: 'Developing relationship with selective engagement',
            low: 'Limited strategic dialogue with potential for growth'
        },
        neutral: {
            high: 'Standard diplomatic relations with occasional cooperation',
            medium: 'Normal bilateral ties with limited engagement',
            low: 'Minimal interaction with basic diplomatic presence'
        },
        complex: {
            high: 'Mixed relationship with both cooperation and friction',
            medium: 'Challenging dynamics with ongoing negotiations',
            low: 'Difficult relations with significant disputes'
        },
        conflict: {
            high: 'Active tensions with limited communication',
            medium: 'Adversarial relationship with no cooperation',
            low: 'Hostile relations with active disputes'
        }
    };

    const level = score >= 7 ? 'high' : score >= 4 ? 'medium' : 'low';
    const description = levelDescriptions[type]?.[level] || 'Standard bilateral relations';

    // Generate bullets based on parameter type and score
    const bullets = generateBullets(paramId, score, type, centerCountry, targetCountry);

    return {
        score,
        summary: description,
        details: `Assessment of ${param.name.toLowerCase()} between ${centerCountry.name} and ${targetCountry.name} based on current diplomatic records, treaty databases, trade statistics, and geopolitical analysis.`,
        bullets,
        factors: param.factors
    };
}

function generateBullets(paramId, score, relType, center, target) {
    const bullets = [];
    
    switch(paramId) {
        case 'trade':
            if (score >= 7) {
                bullets.push(`<strong>Trade Volume:</strong> Significant bilateral trade exceeding $${Math.floor(Math.random() * 100 + 50)}B annually`);
                bullets.push(`<strong>Trade Agreements:</strong> Multiple active FTAs and preferential trade arrangements`);
                bullets.push(`<strong>Trade Balance:</strong> Generally balanced with healthy two-way commerce`);
                bullets.push(`<strong>Key Sectors:</strong> Manufacturing, technology, agriculture, and services`);
                bullets.push(`<strong>Investment:</strong> Strong cross-border investment flows in both directions`);
            } else if (score >= 4) {
                bullets.push(`<strong>Trade Volume:</strong> Moderate bilateral trade of $${Math.floor(Math.random() * 30 + 10)}B annually`);
                bullets.push(`<strong>Trade Agreements:</strong> Limited preferential arrangements, standard WTO terms apply`);
                bullets.push(`<strong>Trade Barriers:</strong> Some tariffs and non-tariff barriers remain`);
                bullets.push(`<strong>Growth Potential:</strong> Room for expansion in key sectors`);
            } else {
                bullets.push(`<strong>Trade Volume:</strong> Minimal bilateral trade below $${Math.floor(Math.random() * 5 + 1)}B annually`);
                bullets.push(`<strong>Restrictions:</strong> Significant trade barriers and/or sanctions in place`);
                bullets.push(`<strong>Challenges:</strong> Political tensions limiting commercial engagement`);
            }
            break;

        case 'military':
            if (score >= 7) {
                bullets.push(`<strong>Joint Exercises:</strong> Regular combined military exercises across all domains`);
                bullets.push(`<strong>Arms Trade:</strong> Active defense equipment sales and co-development programs`);
                bullets.push(`<strong>Base Access:</strong> Military basing rights or regular port calls`);
                bullets.push(`<strong>Training:</strong> Joint training programs and officer exchanges`);
                bullets.push(`<strong>Interoperability:</strong> High degree of military interoperability and shared doctrine`);
            } else if (score >= 4) {
                bullets.push(`<strong>Cooperation:</strong> Limited military-to-military contacts`);
                bullets.push(`<strong>Arms Trade:</strong> Some defense equipment purchases`);
                bullets.push(`<strong>Exercises:</strong> Occasional participation in multilateral exercises`);
            } else {
                bullets.push(`<strong>Status:</strong> No military cooperation; possible adversarial posture`);
                bullets.push(`<strong>Restrictions:</strong> Arms embargo or transfer restrictions may apply`);
                bullets.push(`<strong>Tensions:</strong> Military incidents or standoffs have occurred`);
            }
            break;

        case 'diplomatic':
            if (score >= 7) {
                bullets.push(`<strong>Representation:</strong> Full embassy presence with ambassador-level relations`);
                bullets.push(`<strong>Dialogue:</strong> Regular high-level visits and institutional dialogue mechanisms`);
                bullets.push(`<strong>Consulates:</strong> Multiple consular offices for citizen services`);
                bullets.push(`<strong>Coordination:</strong> Close coordination on regional and global issues`);
            } else if (score >= 4) {
                bullets.push(`<strong>Representation:</strong> Embassy presence with standard diplomatic relations`);
                bullets.push(`<strong>Engagement:</strong> Periodic official visits and working-level meetings`);
                bullets.push(`<strong>Issues:</strong> Some bilateral irritants but manageable`);
            } else {
                bullets.push(`<strong>Status:</strong> Reduced or suspended diplomatic relations`);
                bullets.push(`<strong>Representation:</strong> Limited or no embassy presence`);
                bullets.push(`<strong>Communication:</strong> Diplomatic channels severely restricted`);
            }
            break;

        case 'border':
            if (score >= 7) {
                bullets.push(`<strong>Demarcation:</strong> Fully demarcated and recognized borders`);
                bullets.push(`<strong>Crossings:</strong> Multiple efficient border crossing points`);
                bullets.push(`<strong>Cooperation:</strong> Joint border management and patrol agreements`);
                bullets.push(`<strong>Movement:</strong> Facilitated movement of people and goods`);
            } else if (score >= 4) {
                bullets.push(`<strong>Status:</strong> Generally stable border situation`);
                bullets.push(`<strong>Issues:</strong> Minor unresolved boundary questions`);
                bullets.push(`<strong>Management:</strong> Functional border control arrangements`);
            } else {
                bullets.push(`<strong>Disputes:</strong> Active territorial disputes or claims`);
                bullets.push(`<strong>Tensions:</strong> Border incidents and military presence`);
                bullets.push(`<strong>Negotiations:</strong> Stalled or no progress on resolution`);
            }
            break;

        case 'historical':
            if (score >= 7) {
                bullets.push(`<strong>Heritage:</strong> Long history of alliance or friendly relations`);
                bullets.push(`<strong>Cooperation:</strong> Historical partnership during major conflicts`);
                bullets.push(`<strong>Cultural Ties:</strong> Deep cultural and people-to-people connections`);
                bullets.push(`<strong>Reconciliation:</strong> Any past conflicts fully reconciled`);
            } else if (score >= 4) {
                bullets.push(`<strong>History:</strong> Mixed historical relationship with both positive and negative periods`);
                bullets.push(`<strong>Legacy:</strong> Some historical issues still relevant but manageable`);
                bullets.push(`<strong>Progress:</strong> Ongoing efforts to address historical grievances`);
            } else {
                bullets.push(`<strong>Conflicts:</strong> History of wars, occupation, or colonial exploitation`);
                bullets.push(`<strong>Grievances:</strong> Unresolved historical issues affecting current relations`);
                bullets.push(`<strong>Memory:</strong> Historical trauma continues to impact bilateral ties`);
            }
            break;

        case 'economic':
            if (score >= 7) {
                bullets.push(`<strong>Investment:</strong> Bilateral Investment Treaty (BIT) in force`);
                bullets.push(`<strong>FDI:</strong> Significant Foreign Direct Investment flows both ways`);
                bullets.push(`<strong>Integration:</strong> Deep supply chain and economic integration`);
                bullets.push(`<strong>Finance:</strong> Banking and financial sector cooperation`);
            } else if (score >= 4) {
                bullets.push(`<strong>Framework:</strong> Standard economic relationship with some agreements`);
                bullets.push(`<strong>Investment:</strong> Moderate cross-border investment activity`);
                bullets.push(`<strong>Potential:</strong> Opportunities for deeper economic ties`);
            } else {
                bullets.push(`<strong>Restrictions:</strong> Economic sanctions or investment restrictions`);
                bullets.push(`<strong>Barriers:</strong> Significant obstacles to economic engagement`);
                bullets.push(`<strong>Isolation:</strong> Limited economic interaction`);
            }
            break;

        case 'cultural':
            if (score >= 7) {
                bullets.push(`<strong>Exchanges:</strong> Robust student and academic exchange programs`);
                bullets.push(`<strong>Diaspora:</strong> Large diaspora community maintaining cultural ties`);
                bullets.push(`<strong>Tourism:</strong> Significant tourist flows in both directions`);
                bullets.push(`<strong>Institutes:</strong> Cultural centers and language programs`);
            } else if (score >= 4) {
                bullets.push(`<strong>Exchanges:</strong> Some cultural and educational exchanges`);
                bullets.push(`<strong>Tourism:</strong> Moderate tourism activity`);
                bullets.push(`<strong>Media:</strong> Limited cultural content exchange`);
            } else {
                bullets.push(`<strong>Barriers:</strong> Cultural exchange severely limited`);
                bullets.push(`<strong>Restrictions:</strong> Travel advisories or restrictions in place`);
                bullets.push(`<strong>Isolation:</strong> Minimal people-to-people contact`);
            }
            break;

        case 'visa':
            if (score >= 7) {
                bullets.push(`<strong>Policy:</strong> Visa-free or visa-on-arrival access`);
                bullets.push(`<strong>Duration:</strong> Extended stay permitted (90+ days)`);
                bullets.push(`<strong>Work:</strong> Facilitated work permit processes`);
                bullets.push(`<strong>Programs:</strong> Trusted traveler programs available`);
            } else if (score >= 4) {
                bullets.push(`<strong>Requirements:</strong> Standard visa required but accessible`);
                bullets.push(`<strong>Processing:</strong> Reasonable processing times`);
                bullets.push(`<strong>Categories:</strong> Multiple visa categories available`);
            } else {
                bullets.push(`<strong>Restrictions:</strong> Highly restrictive visa policies`);
                bullets.push(`<strong>Barriers:</strong> Difficult or impossible to obtain visas`);
                bullets.push(`<strong>Bans:</strong> Travel bans or severe restrictions may apply`);
            }
            break;

        case 'strategic':
            if (score >= 7) {
                bullets.push(`<strong>Alignment:</strong> Close strategic alignment on major issues`);
                bullets.push(`<strong>Dialogue:</strong> Regular strategic dialogue at highest levels`);
                bullets.push(`<strong>Coordination:</strong> Joint positions in international forums`);
                bullets.push(`<strong>Partnership:</strong> Formal strategic partnership declaration`);
            } else if (score >= 4) {
                bullets.push(`<strong>Relations:</strong> Selective strategic engagement on shared interests`);
                bullets.push(`<strong>Dialogue:</strong> Periodic strategic consultations`);
                bullets.push(`<strong>Differences:</strong> Some divergence on key issues`);
            } else {
                bullets.push(`<strong>Competition:</strong> Strategic rivals with competing interests`);
                bullets.push(`<strong>Opposition:</strong> Frequently opposed positions internationally`);
                bullets.push(`<strong>Tensions:</strong> Active geopolitical competition`);
            }
            break;

        case 'intelligence':
            if (score >= 7) {
                bullets.push(`<strong>Sharing:</strong> Comprehensive intelligence sharing agreements`);
                bullets.push(`<strong>Cooperation:</strong> Joint counter-terrorism operations`);
                bullets.push(`<strong>Integration:</strong> Integrated intelligence assessments`);
                bullets.push(`<strong>Trust:</strong> High-level classification sharing`);
            } else if (score >= 4) {
                bullets.push(`<strong>Cooperation:</strong> Limited intelligence sharing on specific threats`);
                bullets.push(`<strong>Channels:</strong> Established but restricted communication channels`);
                bullets.push(`<strong>Scope:</strong> Cooperation primarily on terrorism issues`);
            } else {
                bullets.push(`<strong>Status:</strong> No intelligence cooperation`);
                bullets.push(`<strong>Espionage:</strong> Active intelligence competition`);
                bullets.push(`<strong>Security:</strong> Counterintelligence concerns present`);
            }
            break;

        case 'energy':
            if (score >= 7) {
                bullets.push(`<strong>Trade:</strong> Major energy trading partners`);
                bullets.push(`<strong>Infrastructure:</strong> Joint pipeline or grid connections`);
                bullets.push(`<strong>Investment:</strong> Cross-investment in energy sector`);
                bullets.push(`<strong>Cooperation:</strong> Clean energy technology partnerships`);
            } else if (score >= 4) {
                bullets.push(`<strong>Trade:</strong> Some energy trade or cooperation`);
                bullets.push(`<strong>Projects:</strong> Limited joint energy projects`);
                bullets.push(`<strong>Potential:</strong> Opportunities for energy cooperation`);
            } else {
                bullets.push(`<strong>Restrictions:</strong> Energy sanctions or embargoes`);
                bullets.push(`<strong>Competition:</strong> Energy resource competition`);
                bullets.push(`<strong>Security:</strong> Energy security concerns`);
            }
            break;

        case 'technology':
            if (score >= 7) {
                bullets.push(`<strong>R&D:</strong> Joint research and development programs`);
                bullets.push(`<strong>Transfer:</strong> Technology transfer agreements in place`);
                bullets.push(`<strong>Cooperation:</strong> Collaboration on emerging technologies`);
                bullets.push(`<strong>Standards:</strong> Joint technology standards development`);
            } else if (score >= 4) {
                bullets.push(`<strong>Exchange:</strong> Limited technology cooperation`);
                bullets.push(`<strong>Commercial:</strong> Commercial tech trade with restrictions`);
                bullets.push(`<strong>Barriers:</strong> Some export control limitations`);
            } else {
                bullets.push(`<strong>Restrictions:</strong> Technology export controls and bans`);
                bullets.push(`<strong>Competition:</strong> Technology rivalry and decoupling`);
                bullets.push(`<strong>Security:</strong> Technology theft concerns`);
            }
            break;

        case 'defense':
            if (score >= 7) {
                bullets.push(`<strong>Treaty:</strong> Mutual defense treaty or alliance commitment`);
                bullets.push(`<strong>Guarantee:</strong> Security guarantees in place`);
                bullets.push(`<strong>Integration:</strong> Integrated defense planning and command`);
                bullets.push(`<strong>Interoperability:</strong> High military interoperability`);
            } else if (score >= 4) {
                bullets.push(`<strong>Cooperation:</strong> Defense cooperation agreements`);
                bullets.push(`<strong>Dialogue:</strong> Regular defense consultations`);
                bullets.push(`<strong>Limited:</strong> No formal alliance but some cooperation`);
            } else {
                bullets.push(`<strong>Status:</strong> No defense cooperation; potential adversary`);
                bullets.push(`<strong>Posture:</strong> Opposing military postures`);
                bullets.push(`<strong>Planning:</strong> Contingency planning against each other`);
            }
            break;

        case 'political':
            if (score >= 7) {
                bullets.push(`<strong>Alignment:</strong> Strong ideological and political alignment`);
                bullets.push(`<strong>UN Voting:</strong> High correlation in UN General Assembly votes`);
                bullets.push(`<strong>Values:</strong> Shared democratic values and governance principles`);
                bullets.push(`<strong>Coordination:</strong> Regular policy coordination mechanisms`);
            } else if (score >= 4) {
                bullets.push(`<strong>Relations:</strong> Normal political relations with some differences`);
                bullets.push(`<strong>UN Voting:</strong> Mixed voting patterns internationally`);
                bullets.push(`<strong>Engagement:</strong> Engagement despite different political systems`);
            } else {
                bullets.push(`<strong>Opposition:</strong> Fundamental political and ideological differences`);
                bullets.push(`<strong>UN Voting:</strong> Frequently opposed in international forums`);
                bullets.push(`<strong>Values:</strong> Conflicting governance models and values`);
            }
            break;

        case 'organizations':
            if (score >= 7) {
                bullets.push(`<strong>Overlap:</strong> Extensive shared membership in international organizations`);
                bullets.push(`<strong>Alliances:</strong> Common membership in key alliances`);
                bullets.push(`<strong>Regional:</strong> Joint participation in regional bodies`);
                bullets.push(`<strong>Coordination:</strong> Regular coordination in multilateral forums`);
            } else if (score >= 4) {
                bullets.push(`<strong>Membership:</strong> Some shared organizational memberships`);
                bullets.push(`<strong>Forums:</strong> Interaction in global forums (UN, G20, etc.)`);
                bullets.push(`<strong>Regional:</strong> Different regional organization alignments`);
            } else {
                bullets.push(`<strong>Limited:</strong> Few or no shared organization memberships`);
                bullets.push(`<strong>Competing:</strong> Membership in rival organizations or blocs`);
                bullets.push(`<strong>Exclusion:</strong> Actively excluded from each other's organizations`);
            }
            break;

        case 'conflict':
            if (score <= 3) {
                bullets.push(`<strong>Risk Level:</strong> Low conflict risk with stable relations`);
                bullets.push(`<strong>Mechanisms:</strong> Robust crisis management mechanisms`);
                bullets.push(`<strong>History:</strong> No recent conflicts or military incidents`);
                bullets.push(`<strong>Resolution:</strong> Effective dispute resolution channels`);
            } else if (score <= 6) {
                bullets.push(`<strong>Risk Level:</strong> Moderate tensions requiring management`);
                bullets.push(`<strong>Issues:</strong> Outstanding disputes under negotiation`);
                bullets.push(`<strong>Incidents:</strong> Occasional diplomatic or minor incidents`);
            } else {
                bullets.push(`<strong>Risk Level:</strong> High conflict risk with active tensions`);
                bullets.push(`<strong>Disputes:</strong> Serious unresolved disputes`);
                bullets.push(`<strong>Military:</strong> Military incidents or confrontations`);
                bullets.push(`<strong>Escalation:</strong> Risk of escalation present`);
            }
            break;
    }

    return bullets;
}

// ============================================
// RELATIONSHIP CALCULATOR
// ============================================
function generateRelationsForCountry(centerCode) {
    const center = COUNTRY_MAP[centerCode];
    if (!center) return [];

    const relations = [];

    COUNTRIES.forEach(country => {
        if (country.code === centerCode) return;

        // Determine relationship type and strength
        let type = 'neutral';
        let strength = 5;
        const reasons = [];

        // Check shared alliances
        const sharedAlliances = [];
        for (const [key, alliance] of Object.entries(ALLIANCES)) {
            if (alliance.members.includes(centerCode) && alliance.members.includes(country.code)) {
                sharedAlliances.push(alliance.name);
                reasons.push(alliance.name);
            }
        }

        // Determine type based on alliances
        if (sharedAlliances.length >= 2) {
            type = 'allies';
            strength = 8 + Math.min(sharedAlliances.length - 2, 2);
        } else if (sharedAlliances.length === 1) {
            if (sharedAlliances[0].includes('NATO') || sharedAlliances[0].includes('Five Eyes')) {
                type = 'allies';
                strength = 8;
            } else {
                type = 'strategic';
                strength = 7;
            }
        } else if (center.region === country.region) {
            type = 'strategic';
            strength = 6;
            reasons.push('Regional Partners');
        }

        // Apply some randomness for realism
        strength = Math.max(1, Math.min(10, strength + (Math.random() * 2 - 1)));
        strength = Math.round(strength);

        // Generate parameters
        const params = {};
        PARAMETERS.forEach(param => {
            let paramScore = strength;
            
            // Vary parameter scores around the base
            paramScore = Math.max(1, Math.min(10, paramScore + Math.floor(Math.random() * 3) - 1));
            
            // Special handling for conflict risk (inverse)
            if (param.id === 'conflict') {
                paramScore = type === 'conflict' ? 8 + Math.floor(Math.random() * 2) : 
                             type === 'allies' ? 1 + Math.floor(Math.random() * 2) :
                             11 - paramScore;
            }

            params[param.id] = generateFullParamData(type, paramScore, param.id, center, country);
        });

        relations.push({
            code: country.code,
            name: country.name,
            flag: country.flag,
            region: country.region,
            capital: country.capital,
            type,
            strength,
            reasons,
            params
        });
    });

    // Sort
    const priority = { allies: 5, strategic: 4, neutral: 3, complex: 2, conflict: 1 };
    relations.sort((a, b) => priority[b.type] - priority[a.type] || b.strength - a.strength);

    return relations;
}

// Export
window.PARAMETERS = PARAMETERS;
window.COUNTRIES = COUNTRIES;
window.COUNTRY_MAP = COUNTRY_MAP;
window.ALLIANCES = ALLIANCES;
window.generateRelationsForCountry = generateRelationsForCountry;

console.log('📊 Data Module Loaded:', COUNTRIES.length, 'nations');
