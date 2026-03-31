// ============================================
// UNITY ATLAS - COUNTRY DATA STORE
// ============================================

// All 197 countries with basic metadata
const COUNTRIES_DATABASE = {
    // G20 Countries (Priority)
    "IND": { name: "India", flag: "🇮🇳", region: "Asia", subregion: "South Asia", capital: "New Delhi", hasData: true },
    "CHN": { name: "China", flag: "🇨🇳", region: "Asia", subregion: "East Asia", capital: "Beijing", hasData: true },
    "USA": { name: "United States", flag: "🇺🇸", region: "Americas", subregion: "North America", capital: "Washington D.C.", hasData: false },
    "RUS": { name: "Russia", flag: "🇷🇺", region: "Europe", subregion: "Eastern Europe", capital: "Moscow", hasData: false },
    "GBR": { name: "United Kingdom", flag: "🇬🇧", region: "Europe", subregion: "Northern Europe", capital: "London", hasData: false },
    "FRA": { name: "France", flag: "🇫🇷", region: "Europe", subregion: "Western Europe", capital: "Paris", hasData: true },
    "DEU": { name: "Germany", flag: "🇩🇪", region: "Europe", subregion: "Western Europe", capital: "Berlin", hasData: false },
    "JPN": { name: "Japan", flag: "🇯🇵", region: "Asia", subregion: "East Asia", capital: "Tokyo", hasData: false },
    "BRA": { name: "Brazil", flag: "🇧🇷", region: "Americas", subregion: "South America", capital: "Brasília", hasData: false },
    "AUS": { name: "Australia", flag: "🇦🇺", region: "Oceania", subregion: "Oceania", capital: "Canberra", hasData: false },
    "CAN": { name: "Canada", flag: "🇨🇦", region: "Americas", subregion: "North America", capital: "Ottawa", hasData: false },
    "KOR": { name: "South Korea", flag: "🇰🇷", region: "Asia", subregion: "East Asia", capital: "Seoul", hasData: false },
    "MEX": { name: "Mexico", flag: "🇲🇽", region: "Americas", subregion: "North America", capital: "Mexico City", hasData: false },
    "IDN": { name: "Indonesia", flag: "🇮🇩", region: "Asia", subregion: "Southeast Asia", capital: "Jakarta", hasData: false },
    "SAU": { name: "Saudi Arabia", flag: "🇸🇦", region: "Asia", subregion: "Middle East", capital: "Riyadh", hasData: false },
    "TUR": { name: "Turkey", flag: "🇹🇷", region: "Asia", subregion: "Middle East", capital: "Ankara", hasData: true },
    "ARG": { name: "Argentina", flag: "🇦🇷", region: "Americas", subregion: "South America", capital: "Buenos Aires", hasData: false },
    "ZAF": { name: "South Africa", flag: "🇿🇦", region: "Africa", subregion: "Southern Africa", capital: "Pretoria", hasData: false },
    "ITA": { name: "Italy", flag: "🇮🇹", region: "Europe", subregion: "Southern Europe", capital: "Rome", hasData: false },
    
    // Rest of Asia
    "PAK": { name: "Pakistan", flag: "🇵🇰", region: "Asia", subregion: "South Asia", capital: "Islamabad", hasData: false },
    "BGD": { name: "Bangladesh", flag: "🇧🇩", region: "Asia", subregion: "South Asia", capital: "Dhaka", hasData: false },
    "NPL": { name: "Nepal", flag: "🇳🇵", region: "Asia", subregion: "South Asia", capital: "Kathmandu", hasData: false },
    "LKA": { name: "Sri Lanka", flag: "🇱🇰", region: "Asia", subregion: "South Asia", capital: "Colombo", hasData: false },
    "BTN": { name: "Bhutan", flag: "🇧🇹", region: "Asia", subregion: "South Asia", capital: "Thimphu", hasData: false },
    "MDV": { name: "Maldives", flag: "🇲🇻", region: "Asia", subregion: "South Asia", capital: "Malé", hasData: false },
    "AFG": { name: "Afghanistan", flag: "🇦🇫", region: "Asia", subregion: "South Asia", capital: "Kabul", hasData: false },
    "MMR": { name: "Myanmar", flag: "🇲🇲", region: "Asia", subregion: "Southeast Asia", capital: "Naypyidaw", hasData: false },
    "THA": { name: "Thailand", flag: "🇹🇭", region: "Asia", subregion: "Southeast Asia", capital: "Bangkok", hasData: false },
    "VNM": { name: "Vietnam", flag: "🇻🇳", region: "Asia", subregion: "Southeast Asia", capital: "Hanoi", hasData: false },
    "MYS": { name: "Malaysia", flag: "🇲🇾", region: "Asia", subregion: "Southeast Asia", capital: "Kuala Lumpur", hasData: false },
    "SGP": { name: "Singapore", flag: "🇸🇬", region: "Asia", subregion: "Southeast Asia", capital: "Singapore", hasData: false },
    "PHL": { name: "Philippines", flag: "🇵🇭", region: "Asia", subregion: "Southeast Asia", capital: "Manila", hasData: false },
    "KHM": { name: "Cambodia", flag: "🇰🇭", region: "Asia", subregion: "Southeast Asia", capital: "Phnom Penh", hasData: false },
    "LAO": { name: "Laos", flag: "🇱🇦", region: "Asia", subregion: "Southeast Asia", capital: "Vientiane", hasData: false },
    "BRN": { name: "Brunei", flag: "🇧🇳", region: "Asia", subregion: "Southeast Asia", capital: "Bandar Seri Begawan", hasData: false },
    "TLS": { name: "Timor-Leste", flag: "🇹🇱", region: "Asia", subregion: "Southeast Asia", capital: "Dili", hasData: false },
    "PRK": { name: "North Korea", flag: "🇰🇵", region: "Asia", subregion: "East Asia", capital: "Pyongyang", hasData: false },
    "MNG": { name: "Mongolia", flag: "🇲🇳", region: "Asia", subregion: "East Asia", capital: "Ulaanbaatar", hasData: false },
    "IRN": { name: "Iran", flag: "🇮🇷", region: "Asia", subregion: "Middle East", capital: "Tehran", hasData: false },
    "IRQ": { name: "Iraq", flag: "🇮🇶", region: "Asia", subregion: "Middle East", capital: "Baghdad", hasData: false },
    "SYR": { name: "Syria", flag: "🇸🇾", region: "Asia", subregion: "Middle East", capital: "Damascus", hasData: false },
    "JOR": { name: "Jordan", flag: "🇯🇴", region: "Asia", subregion: "Middle East", capital: "Amman", hasData: false },
    "LBN": { name: "Lebanon", flag: "🇱🇧", region: "Asia", subregion: "Middle East", capital: "Beirut", hasData: false },
    "ISR": { name: "Israel", flag: "🇮🇱", region: "Asia", subregion: "Middle East", capital: "Jerusalem", hasData: false },
    "PSE": { name: "Palestine", flag: "🇵🇸", region: "Asia", subregion: "Middle East", capital: "Ramallah", hasData: false },
    "ARE": { name: "United Arab Emirates", flag: "🇦🇪", region: "Asia", subregion: "Middle East", capital: "Abu Dhabi", hasData: false },
    "QAT": { name: "Qatar", flag: "🇶🇦", region: "Asia", subregion: "Middle East", capital: "Doha", hasData: false },
    "KWT": { name: "Kuwait", flag: "🇰🇼", region: "Asia", subregion: "Middle East", capital: "Kuwait City", hasData: false },
    "BHR": { name: "Bahrain", flag: "🇧🇭", region: "Asia", subregion: "Middle East", capital: "Manama", hasData: false },
    "OMN": { name: "Oman", flag: "🇴🇲", region: "Asia", subregion: "Middle East", capital: "Muscat", hasData: false },
    "YEM": { name: "Yemen", flag: "🇾🇪", region: "Asia", subregion: "Middle East", capital: "Sana'a", hasData: false },
    "KAZ": { name: "Kazakhstan", flag: "🇰🇿", region: "Asia", subregion: "Central Asia", capital: "Astana", hasData: false },
    "UZB": { name: "Uzbekistan", flag: "🇺🇿", region: "Asia", subregion: "Central Asia", capital: "Tashkent", hasData: false },
    "TKM": { name: "Turkmenistan", flag: "🇹🇲", region: "Asia", subregion: "Central Asia", capital: "Ashgabat", hasData: false },
    "TJK": { name: "Tajikistan", flag: "🇹🇯", region: "Asia", subregion: "Central Asia", capital: "Dushanbe", hasData: false },
    "KGZ": { name: "Kyrgyzstan", flag: "🇰🇬", region: "Asia", subregion: "Central Asia", capital: "Bishkek", hasData: false },
    "AZE": { name: "Azerbaijan", flag: "🇦🇿", region: "Asia", subregion: "Caucasus", capital: "Baku", hasData: false },
    "GEO": { name: "Georgia", flag: "🇬🇪", region: "Asia", subregion: "Caucasus", capital: "Tbilisi", hasData: false },
    "ARM": { name: "Armenia", flag: "🇦🇲", region: "Asia", subregion: "Caucasus", capital: "Yerevan", hasData: false },
    "CYP": { name: "Cyprus", flag: "🇨🇾", region: "Asia", subregion: "Middle East", capital: "Nicosia", hasData: false },
    
    // Europe
    "ESP": { name: "Spain", flag: "🇪🇸", region: "Europe", subregion: "Southern Europe", capital: "Madrid", hasData: false },
    "PRT": { name: "Portugal", flag: "🇵🇹", region: "Europe", subregion: "Southern Europe", capital: "Lisbon", hasData: false },
    "NLD": { name: "Netherlands", flag: "🇳🇱", region: "Europe", subregion: "Western Europe", capital: "Amsterdam", hasData: false },
    "BEL": { name: "Belgium", flag: "🇧🇪", region: "Europe", subregion: "Western Europe", capital: "Brussels", hasData: false },
    "CHE": { name: "Switzerland", flag: "🇨🇭", region: "Europe", subregion: "Western Europe", capital: "Bern", hasData: false },
    "AUT": { name: "Austria", flag: "🇦🇹", region: "Europe", subregion: "Western Europe", capital: "Vienna", hasData: false },
    "POL": { name: "Poland", flag: "🇵🇱", region: "Europe", subregion: "Eastern Europe", capital: "Warsaw", hasData: false },
    "UKR": { name: "Ukraine", flag: "🇺🇦", region: "Europe", subregion: "Eastern Europe", capital: "Kyiv", hasData: false },
    "GRC": { name: "Greece", flag: "🇬🇷", region: "Europe", subregion: "Southern Europe", capital: "Athens", hasData: false },
    "SWE": { name: "Sweden", flag: "🇸🇪", region: "Europe", subregion: "Northern Europe", capital: "Stockholm", hasData: false },
    "NOR": { name: "Norway", flag: "🇳🇴", region: "Europe", subregion: "Northern Europe", capital: "Oslo", hasData: false },
    "DNK": { name: "Denmark", flag: "🇩🇰", region: "Europe", subregion: "Northern Europe", capital: "Copenhagen", hasData: false },
    "FIN": { name: "Finland", flag: "🇫🇮", region: "Europe", subregion: "Northern Europe", capital: "Helsinki", hasData: false },
    "IRL": { name: "Ireland", flag: "🇮🇪", region: "Europe", subregion: "Northern Europe", capital: "Dublin", hasData: false },
    "ISL": { name: "Iceland", flag: "🇮🇸", region: "Europe", subregion: "Northern Europe", capital: "Reykjavik", hasData: false },
    "CZE": { name: "Czech Republic", flag: "🇨🇿", region: "Europe", subregion: "Eastern Europe", capital: "Prague", hasData: false },
    "HUN": { name: "Hungary", flag: "🇭🇺", region: "Europe", subregion: "Eastern Europe", capital: "Budapest", hasData: false },
    "ROU": { name: "Romania", flag: "🇷🇴", region: "Europe", subregion: "Eastern Europe", capital: "Bucharest", hasData: false },
    "BGR": { name: "Bulgaria", flag: "🇧🇬", region: "Europe", subregion: "Eastern Europe", capital: "Sofia", hasData: false },
    "SRB": { name: "Serbia", flag: "🇷🇸", region: "Europe", subregion: "Balkans", capital: "Belgrade", hasData: false },
    "HRV": { name: "Croatia", flag: "🇭🇷", region: "Europe", subregion: "Balkans", capital: "Zagreb", hasData: false },
    "SVN": { name: "Slovenia", flag: "🇸🇮", region: "Europe", subregion: "Balkans", capital: "Ljubljana", hasData: false },
    "SVK": { name: "Slovakia", flag: "🇸🇰", region: "Europe", subregion: "Eastern Europe", capital: "Bratislava", hasData: false },
    "BIH": { name: "Bosnia and Herzegovina", flag: "🇧🇦", region: "Europe", subregion: "Balkans", capital: "Sarajevo", hasData: false },
    "MKD": { name: "North Macedonia", flag: "🇲🇰", region: "Europe", subregion: "Balkans", capital: "Skopje", hasData: false },
    "MNE": { name: "Montenegro", flag: "🇲🇪", region: "Europe", subregion: "Balkans", capital: "Podgorica", hasData: false },
    "ALB": { name: "Albania", flag: "🇦🇱", region: "Europe", subregion: "Balkans", capital: "Tirana", hasData: false },
    "XKX": { name: "Kosovo", flag: "🇽🇰", region: "Europe", subregion: "Balkans", capital: "Pristina", hasData: false },
    "BLR": { name: "Belarus", flag: "🇧🇾", region: "Europe", subregion: "Eastern Europe", capital: "Minsk", hasData: false },
    "MDA": { name: "Moldova", flag: "🇲🇩", region: "Europe", subregion: "Eastern Europe", capital: "Chișinău", hasData: false },
    "LTU": { name: "Lithuania", flag: "🇱🇹", region: "Europe", subregion: "Baltic", capital: "Vilnius", hasData: false },
    "LVA": { name: "Latvia", flag: "🇱🇻", region: "Europe", subregion: "Baltic", capital: "Riga", hasData: false },
    "EST": { name: "Estonia", flag: "🇪🇪", region: "Europe", subregion: "Baltic", capital: "Tallinn", hasData: false },
    "LUX": { name: "Luxembourg", flag: "🇱🇺", region: "Europe", subregion: "Western Europe", capital: "Luxembourg City", hasData: false },
    "MLT": { name: "Malta", flag: "🇲🇹", region: "Europe", subregion: "Southern Europe", capital: "Valletta", hasData: false },
    "AND": { name: "Andorra", flag: "🇦🇩", region: "Europe", subregion: "Southern Europe", capital: "Andorra la Vella", hasData: false },
    "MCO": { name: "Monaco", flag: "🇲🇨", region: "Europe", subregion: "Western Europe", capital: "Monaco", hasData: false },
    "SMR": { name: "San Marino", flag: "🇸🇲", region: "Europe", subregion: "Southern Europe", capital: "San Marino", hasData: false },
    "VAT": { name: "Vatican City", flag: "🇻🇦", region: "Europe", subregion: "Southern Europe", capital: "Vatican City", hasData: false },
    "LIE": { name: "Liechtenstein", flag: "🇱🇮", region: "Europe", subregion: "Western Europe", capital: "Vaduz", hasData: false },
    
    // Africa
    "EGY": { name: "Egypt", flag: "🇪🇬", region: "Africa", subregion: "North Africa", capital: "Cairo", hasData: false },
    "NGA": { name: "Nigeria", flag: "🇳🇬", region: "Africa", subregion: "West Africa", capital: "Abuja", hasData: false },
    "ETH": { name: "Ethiopia", flag: "🇪🇹", region: "Africa", subregion: "East Africa", capital: "Addis Ababa", hasData: false },
    "KEN": { name: "Kenya", flag: "🇰🇪", region: "Africa", subregion: "East Africa", capital: "Nairobi", hasData: false },
    "GHA": { name: "Ghana", flag: "🇬🇭", region: "Africa", subregion: "West Africa", capital: "Accra", hasData: false },
    "TZA": { name: "Tanzania", flag: "🇹🇿", region: "Africa", subregion: "East Africa", capital: "Dodoma", hasData: false },
    "MAR": { name: "Morocco", flag: "🇲🇦", region: "Africa", subregion: "North Africa", capital: "Rabat", hasData: false },
    "DZA": { name: "Algeria", flag: "🇩🇿", region: "Africa", subregion: "North Africa", capital: "Algiers", hasData: false },
    "TUN": { name: "Tunisia", flag: "🇹🇳", region: "Africa", subregion: "North Africa", capital: "Tunis", hasData: false },
    "LBY": { name: "Libya", flag: "🇱🇾", region: "Africa", subregion: "North Africa", capital: "Tripoli", hasData: false },
    "SDN": { name: "Sudan", flag: "🇸🇩", region: "Africa", subregion: "North Africa", capital: "Khartoum", hasData: false },
    "SSD": { name: "South Sudan", flag: "🇸🇸", region: "Africa", subregion: "East Africa", capital: "Juba", hasData: false },
    "UGA": { name: "Uganda", flag: "🇺🇬", region: "Africa", subregion: "East Africa", capital: "Kampala", hasData: false },
    "RWA": { name: "Rwanda", flag: "🇷🇼", region: "Africa", subregion: "East Africa", capital: "Kigali", hasData: false },
    "SEN": { name: "Senegal", flag: "🇸🇳", region: "Africa", subregion: "West Africa", capital: "Dakar", hasData: false },
    "CIV": { name: "Côte d'Ivoire", flag: "🇨🇮", region: "Africa", subregion: "West Africa", capital: "Yamoussoukro", hasData: false },
    "CMR": { name: "Cameroon", flag: "🇨🇲", region: "Africa", subregion: "Central Africa", capital: "Yaoundé", hasData: false },
    "COD": { name: "DR Congo", flag: "🇨🇩", region: "Africa", subregion: "Central Africa", capital: "Kinshasa", hasData: false },
    "AGO": { name: "Angola", flag: "🇦🇴", region: "Africa", subregion: "Southern Africa", capital: "Luanda", hasData: false },
    "MOZ": { name: "Mozambique", flag: "🇲🇿", region: "Africa", subregion: "Southern Africa", capital: "Maputo", hasData: false },
    "ZWE": { name: "Zimbabwe", flag: "🇿🇼", region: "Africa", subregion: "Southern Africa", capital: "Harare", hasData: false },
    "ZMB": { name: "Zambia", flag: "🇿🇲", region: "Africa", subregion: "Southern Africa", capital: "Lusaka", hasData: false },
    "BWA": { name: "Botswana", flag: "🇧🇼", region: "Africa", subregion: "Southern Africa", capital: "Gaborone", hasData: false },
    "NAM": { name: "Namibia", flag: "🇳🇦", region: "Africa", subregion: "Southern Africa", capital: "Windhoek", hasData: false },
    "MUS": { name: "Mauritius", flag: "🇲🇺", region: "Africa", subregion: "Southern Africa", capital: "Port Louis", hasData: false },
    "SYC": { name: "Seychelles", flag: "🇸🇨", region: "Africa", subregion: "East Africa", capital: "Victoria", hasData: false },
    "MDG": { name: "Madagascar", flag: "🇲🇬", region: "Africa", subregion: "East Africa", capital: "Antananarivo", hasData: false },
    "DJI": { name: "Djibouti", flag: "🇩🇯", region: "Africa", subregion: "East Africa", capital: "Djibouti", hasData: false },
    "SOM": { name: "Somalia", flag: "🇸🇴", region: "Africa", subregion: "East Africa", capital: "Mogadishu", hasData: false },
    "ERI": { name: "Eritrea", flag: "🇪🇷", region: "Africa", subregion: "East Africa", capital: "Asmara", hasData: false },
    
    // Americas
    "COL": { name: "Colombia", flag: "🇨🇴", region: "Americas", subregion: "South America", capital: "Bogotá", hasData: false },
    "VEN": { name: "Venezuela", flag: "🇻🇪", region: "Americas", subregion: "South America", capital: "Caracas", hasData: false },
    "PER": { name: "Peru", flag: "🇵🇪", region: "Americas", subregion: "South America", capital: "Lima", hasData: false },
    "CHL": { name: "Chile", flag: "🇨🇱", region: "Americas", subregion: "South America", capital: "Santiago", hasData: false },
    "ECU": { name: "Ecuador", flag: "🇪🇨", region: "Americas", subregion: "South America", capital: "Quito", hasData: false },
    "BOL": { name: "Bolivia", flag: "🇧🇴", region: "Americas", subregion: "South America", capital: "Sucre", hasData: false },
    "PRY": { name: "Paraguay", flag: "🇵🇾", region: "Americas", subregion: "South America", capital: "Asunción", hasData: false },
    "URY": { name: "Uruguay", flag: "🇺🇾", region: "Americas", subregion: "South America", capital: "Montevideo", hasData: false },
    "GUY": { name: "Guyana", flag: "🇬🇾", region: "Americas", subregion: "South America", capital: "Georgetown", hasData: false },
    "SUR": { name: "Suriname", flag: "🇸🇷", region: "Americas", subregion: "South America", capital: "Paramaribo", hasData: false },
    "CUB": { name: "Cuba", flag: "🇨🇺", region: "Americas", subregion: "Caribbean", capital: "Havana", hasData: false },
    "JAM": { name: "Jamaica", flag: "🇯🇲", region: "Americas", subregion: "Caribbean", capital: "Kingston", hasData: false },
    "HTI": { name: "Haiti", flag: "🇭🇹", region: "Americas", subregion: "Caribbean", capital: "Port-au-Prince", hasData: false },
    "DOM": { name: "Dominican Republic", flag: "🇩🇴", region: "Americas", subregion: "Caribbean", capital: "Santo Domingo", hasData: false },
    "TTO": { name: "Trinidad and Tobago", flag: "🇹🇹", region: "Americas", subregion: "Caribbean", capital: "Port of Spain", hasData: false },
    "PAN": { name: "Panama", flag: "🇵🇦", region: "Americas", subregion: "Central America", capital: "Panama City", hasData: false },
    "CRI": { name: "Costa Rica", flag: "🇨🇷", region: "Americas", subregion: "Central America", capital: "San José", hasData: false },
    "GTM": { name: "Guatemala", flag: "🇬🇹", region: "Americas", subregion: "Central America", capital: "Guatemala City", hasData: false },
    "HND": { name: "Honduras", flag: "🇭🇳", region: "Americas", subregion: "Central America", capital: "Tegucigalpa", hasData: false },
    "SLV": { name: "El Salvador", flag: "🇸🇻", region: "Americas", subregion: "Central America", capital: "San Salvador", hasData: false },
    "NIC": { name: "Nicaragua", flag: "🇳🇮", region: "Americas", subregion: "Central America", capital: "Managua", hasData: false },
    "BLZ": { name: "Belize", flag: "🇧🇿", region: "Americas", subregion: "Central America", capital: "Belmopan", hasData: false },
    
    // Oceania
    "NZL": { name: "New Zealand", flag: "🇳🇿", region: "Oceania", subregion: "Oceania", capital: "Wellington", hasData: false },
    "PNG": { name: "Papua New Guinea", flag: "🇵🇬", region: "Oceania", subregion: "Oceania", capital: "Port Moresby", hasData: false },
    "FJI": { name: "Fiji", flag: "🇫🇯", region: "Oceania", subregion: "Oceania", capital: "Suva", hasData: false },
    "SLB": { name: "Solomon Islands", flag: "🇸🇧", region: "Oceania", subregion: "Oceania", capital: "Honiara", hasData: false },
    "VUT": { name: "Vanuatu", flag: "🇻🇺", region: "Oceania", subregion: "Oceania", capital: "Port Vila", hasData: false },
    "WSM": { name: "Samoa", flag: "🇼🇸", region: "Oceania", subregion: "Oceania", capital: "Apia", hasData: false },
    "TON": { name: "Tonga", flag: "🇹🇴", region: "Oceania", subregion: "Oceania", capital: "Nuku'alofa", hasData: false },
    "KIR": { name: "Kiribati", flag: "🇰🇮", region: "Oceania", subregion: "Oceania", capital: "Tarawa", hasData: false },
    "FSM": { name: "Micronesia", flag: "🇫🇲", region: "Oceania", subregion: "Oceania", capital: "Palikir", hasData: false },
    "MHL": { name: "Marshall Islands", flag: "🇲🇭", region: "Oceania", subregion: "Oceania", capital: "Majuro", hasData: false },
    "PLW": { name: "Palau", flag: "🇵🇼", region: "Oceania", subregion: "Oceania", capital: "Ngerulmud", hasData: false },
    "NRU": { name: "Nauru", flag: "🇳🇷", region: "Oceania", subregion: "Oceania", capital: "Yaren", hasData: false },
    "TUV": { name: "Tuvalu", flag: "🇹🇻", region: "Oceania", subregion: "Oceania", capital: "Funafuti", hasData: false }
};

// Helper functions
function getCountryByCode(code) {
    return COUNTRIES_DATABASE[code] || null;
}

function getAllCountries() {
    return Object.entries(COUNTRIES_DATABASE).map(([code, data]) => ({
        code,
        ...data
    }));
}

function getCountriesByRegion(region) {
    return Object.entries(COUNTRIES_DATABASE)
        .filter(([_, data]) => data.region === region)
        .map(([code, data]) => ({ code, ...data }));
}

function getCountriesWithData() {
    return Object.entries(COUNTRIES_DATABASE)
        .filter(([_, data]) => data.hasData)
        .map(([code, data]) => ({ code, ...data }));
}

function searchCountries(query) {
    const lowerQuery = query.toLowerCase();
    return Object.entries(COUNTRIES_DATABASE)
        .filter(([code, data]) => 
            data.name.toLowerCase().includes(lowerQuery) ||
            code.toLowerCase().includes(lowerQuery) ||
            data.capital.toLowerCase().includes(lowerQuery)
        )
        .map(([code, data]) => ({ code, ...data }));
}

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        COUNTRIES_DATABASE,
        getCountryByCode,
        getAllCountries,
        getCountriesByRegion,
        getCountriesWithData,
        searchCountries
    };
}
