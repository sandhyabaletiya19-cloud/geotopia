/**
 * GEOTOPIA TEENS ZONE - Complete Country Database
 * All 195 UN-recognized countries
 */

const COUNTRIES = [
    // AFRICA (54 countries)
    { id: 1, name: "Algeria", capital: "Algiers", continent: "Africa", flag: "🇩🇿", code: "DZ", timezone: "UTC+1" },
    { id: 2, name: "Angola", capital: "Luanda", continent: "Africa", flag: "🇦🇴", code: "AO", timezone: "UTC+1" },
    { id: 3, name: "Benin", capital: "Porto-Novo", continent: "Africa", flag: "🇧🇯", code: "BJ", timezone: "UTC+1" },
    { id: 4, name: "Botswana", capital: "Gaborone", continent: "Africa", flag: "🇧🇼", code: "BW", timezone: "UTC+2" },
    { id: 5, name: "Burkina Faso", capital: "Ouagadougou", continent: "Africa", flag: "🇧🇫", code: "BF", timezone: "UTC+0" },
    { id: 6, name: "Burundi", capital: "Gitega", continent: "Africa", flag: "🇧🇮", code: "BI", timezone: "UTC+2" },
    { id: 7, name: "Cabo Verde", capital: "Praia", continent: "Africa", flag: "🇨🇻", code: "CV", timezone: "UTC-1" },
    { id: 8, name: "Cameroon", capital: "Yaoundé", continent: "Africa", flag: "🇨🇲", code: "CM", timezone: "UTC+1" },
    { id: 9, name: "Central African Republic", capital: "Bangui", continent: "Africa", flag: "🇨🇫", code: "CF", timezone: "UTC+1" },
    { id: 10, name: "Chad", capital: "N'Djamena", continent: "Africa", flag: "🇹🇩", code: "TD", timezone: "UTC+1" },
    { id: 11, name: "Comoros", capital: "Moroni", continent: "Africa", flag: "🇰🇲", code: "KM", timezone: "UTC+3" },
    { id: 12, name: "Congo (DRC)", capital: "Kinshasa", continent: "Africa", flag: "🇨🇩", code: "CD", timezone: "UTC+1" },
    { id: 13, name: "Congo (Republic)", capital: "Brazzaville", continent: "Africa", flag: "🇨🇬", code: "CG", timezone: "UTC+1" },
    { id: 14, name: "Côte d'Ivoire", capital: "Yamoussoukro", continent: "Africa", flag: "🇨🇮", code: "CI", timezone: "UTC+0" },
    { id: 15, name: "Djibouti", capital: "Djibouti", continent: "Africa", flag: "🇩🇯", code: "DJ", timezone: "UTC+3" },
    { id: 16, name: "Egypt", capital: "Cairo", continent: "Africa", flag: "🇪🇬", code: "EG", timezone: "UTC+2" },
    { id: 17, name: "Equatorial Guinea", capital: "Malabo", continent: "Africa", flag: "🇬🇶", code: "GQ", timezone: "UTC+1" },
    { id: 18, name: "Eritrea", capital: "Asmara", continent: "Africa", flag: "🇪🇷", code: "ER", timezone: "UTC+3" },
    { id: 19, name: "Eswatini", capital: "Mbabane", continent: "Africa", flag: "🇸🇿", code: "SZ", timezone: "UTC+2" },
    { id: 20, name: "Ethiopia", capital: "Addis Ababa", continent: "Africa", flag: "🇪🇹", code: "ET", timezone: "UTC+3" },
    { id: 21, name: "Gabon", capital: "Libreville", continent: "Africa", flag: "🇬🇦", code: "GA", timezone: "UTC+1" },
    { id: 22, name: "Gambia", capital: "Banjul", continent: "Africa", flag: "🇬🇲", code: "GM", timezone: "UTC+0" },
    { id: 23, name: "Ghana", capital: "Accra", continent: "Africa", flag: "🇬🇭", code: "GH", timezone: "UTC+0" },
    { id: 24, name: "Guinea", capital: "Conakry", continent: "Africa", flag: "🇬🇳", code: "GN", timezone: "UTC+0" },
    { id: 25, name: "Guinea-Bissau", capital: "Bissau", continent: "Africa", flag: "🇬🇼", code: "GW", timezone: "UTC+0" },
    { id: 26, name: "Kenya", capital: "Nairobi", continent: "Africa", flag: "🇰🇪", code: "KE", timezone: "UTC+3" },
    { id: 27, name: "Lesotho", capital: "Maseru", continent: "Africa", flag: "🇱🇸", code: "LS", timezone: "UTC+2" },
    { id: 28, name: "Liberia", capital: "Monrovia", continent: "Africa", flag: "🇱🇷", code: "LR", timezone: "UTC+0" },
    { id: 29, name: "Libya", capital: "Tripoli", continent: "Africa", flag: "🇱🇾", code: "LY", timezone: "UTC+2" },
    { id: 30, name: "Madagascar", capital: "Antananarivo", continent: "Africa", flag: "🇲🇬", code: "MG", timezone: "UTC+3" },
    { id: 31, name: "Malawi", capital: "Lilongwe", continent: "Africa", flag: "🇲🇼", code: "MW", timezone: "UTC+2" },
    { id: 32, name: "Mali", capital: "Bamako", continent: "Africa", flag: "🇲🇱", code: "ML", timezone: "UTC+0" },
    { id: 33, name: "Mauritania", capital: "Nouakchott", continent: "Africa", flag: "🇲🇷", code: "MR", timezone: "UTC+0" },
    { id: 34, name: "Mauritius", capital: "Port Louis", continent: "Africa", flag: "🇲🇺", code: "MU", timezone: "UTC+4" },
    { id: 35, name: "Morocco", capital: "Rabat", continent: "Africa", flag: "🇲🇦", code: "MA", timezone: "UTC+1" },
    { id: 36, name: "Mozambique", capital: "Maputo", continent: "Africa", flag: "🇲🇿", code: "MZ", timezone: "UTC+2" },
    { id: 37, name: "Namibia", capital: "Windhoek", continent: "Africa", flag: "🇳🇦", code: "NA", timezone: "UTC+2" },
    { id: 38, name: "Niger", capital: "Niamey", continent: "Africa", flag: "🇳🇪", code: "NE", timezone: "UTC+1" },
    { id: 39, name: "Nigeria", capital: "Abuja", continent: "Africa", flag: "🇳🇬", code: "NG", timezone: "UTC+1" },
    { id: 40, name: "Rwanda", capital: "Kigali", continent: "Africa", flag: "🇷🇼", code: "RW", timezone: "UTC+2" },
    { id: 41, name: "São Tomé and Príncipe", capital: "São Tomé", continent: "Africa", flag: "🇸🇹", code: "ST", timezone: "UTC+0" },
    { id: 42, name: "Senegal", capital: "Dakar", continent: "Africa", flag: "🇸🇳", code: "SN", timezone: "UTC+0" },
    { id: 43, name: "Seychelles", capital: "Victoria", continent: "Africa", flag: "🇸🇨", code: "SC", timezone: "UTC+4" },
    { id: 44, name: "Sierra Leone", capital: "Freetown", continent: "Africa", flag: "🇸🇱", code: "SL", timezone: "UTC+0" },
    { id: 45, name: "Somalia", capital: "Mogadishu", continent: "Africa", flag: "🇸🇴", code: "SO", timezone: "UTC+3" },
    { id: 46, name: "South Africa", capital: "Pretoria", continent: "Africa", flag: "🇿🇦", code: "ZA", timezone: "UTC+2" },
    { id: 47, name: "South Sudan", capital: "Juba", continent: "Africa", flag: "🇸🇸", code: "SS", timezone: "UTC+2" },
    { id: 48, name: "Sudan", capital: "Khartoum", continent: "Africa", flag: "🇸🇩", code: "SD", timezone: "UTC+2" },
    { id: 49, name: "Tanzania", capital: "Dodoma", continent: "Africa", flag: "🇹🇿", code: "TZ", timezone: "UTC+3" },
    { id: 50, name: "Togo", capital: "Lomé", continent: "Africa", flag: "🇹🇬", code: "TG", timezone: "UTC+0" },
    { id: 51, name: "Tunisia", capital: "Tunis", continent: "Africa", flag: "🇹🇳", code: "TN", timezone: "UTC+1" },
    { id: 52, name: "Uganda", capital: "Kampala", continent: "Africa", flag: "🇺🇬", code: "UG", timezone: "UTC+3" },
    { id: 53, name: "Zambia", capital: "Lusaka", continent: "Africa", flag: "🇿🇲", code: "ZM", timezone: "UTC+2" },
    { id: 54, name: "Zimbabwe", capital: "Harare", continent: "Africa", flag: "🇿🇼", code: "ZW", timezone: "UTC+2" },

    // ASIA (49 countries)
    { id: 55, name: "Afghanistan", capital: "Kabul", continent: "Asia", flag: "🇦🇫", code: "AF", timezone: "UTC+4:30" },
    { id: 56, name: "Armenia", capital: "Yerevan", continent: "Asia", flag: "🇦🇲", code: "AM", timezone: "UTC+4" },
    { id: 57, name: "Azerbaijan", capital: "Baku", continent: "Asia", flag: "🇦🇿", code: "AZ", timezone: "UTC+4" },
    { id: 58, name: "Bahrain", capital: "Manama", continent: "Asia", flag: "🇧🇭", code: "BH", timezone: "UTC+3" },
    { id: 59, name: "Bangladesh", capital: "Dhaka", continent: "Asia", flag: "🇧🇩", code: "BD", timezone: "UTC+6" },
    { id: 60, name: "Bhutan", capital: "Thimphu", continent: "Asia", flag: "🇧🇹", code: "BT", timezone: "UTC+6" },
    { id: 61, name: "Brunei", capital: "Bandar Seri Begawan", continent: "Asia", flag: "🇧🇳", code: "BN", timezone: "UTC+8" },
    { id: 62, name: "Cambodia", capital: "Phnom Penh", continent: "Asia", flag: "🇰🇭", code: "KH", timezone: "UTC+7" },
    { id: 63, name: "China", capital: "Beijing", continent: "Asia", flag: "🇨🇳", code: "CN", timezone: "UTC+8" },
    { id: 64, name: "Cyprus", capital: "Nicosia", continent: "Asia", flag: "🇨🇾", code: "CY", timezone: "UTC+2" },
    { id: 65, name: "Georgia", capital: "Tbilisi", continent: "Asia", flag: "🇬🇪", code: "GE", timezone: "UTC+4" },
    { id: 66, name: "India", capital: "New Delhi", continent: "Asia", flag: "🇮🇳", code: "IN", timezone: "UTC+5:30" },
    { id: 67, name: "Indonesia", capital: "Jakarta", continent: "Asia", flag: "🇮🇩", code: "ID", timezone: "UTC+7" },
    { id: 68, name: "Iran", capital: "Tehran", continent: "Asia", flag: "🇮🇷", code: "IR", timezone: "UTC+3:30" },
    { id: 69, name: "Iraq", capital: "Baghdad", continent: "Asia", flag: "🇮🇶", code: "IQ", timezone: "UTC+3" },
    { id: 70, name: "Israel", capital: "Jerusalem", continent: "Asia", flag: "🇮🇱", code: "IL", timezone: "UTC+2" },
    { id: 71, name: "Japan", capital: "Tokyo", continent: "Asia", flag: "🇯🇵", code: "JP", timezone: "UTC+9" },
    { id: 72, name: "Jordan", capital: "Amman", continent: "Asia", flag: "🇯🇴", code: "JO", timezone: "UTC+2" },
    { id: 73, name: "Kazakhstan", capital: "Astana", continent: "Asia", flag: "🇰🇿", code: "KZ", timezone: "UTC+6" },
    { id: 74, name: "Kuwait", capital: "Kuwait City", continent: "Asia", flag: "🇰🇼", code: "KW", timezone: "UTC+3" },
    { id: 75, name: "Kyrgyzstan", capital: "Bishkek", continent: "Asia", flag: "🇰🇬", code: "KG", timezone: "UTC+6" },
    { id: 76, name: "Laos", capital: "Vientiane", continent: "Asia", flag: "🇱🇦", code: "LA", timezone: "UTC+7" },
    { id: 77, name: "Lebanon", capital: "Beirut", continent: "Asia", flag: "🇱🇧", code: "LB", timezone: "UTC+2" },
    { id: 78, name: "Malaysia", capital: "Kuala Lumpur", continent: "Asia", flag: "🇲🇾", code: "MY", timezone: "UTC+8" },
    { id: 79, name: "Maldives", capital: "Malé", continent: "Asia", flag: "🇲🇻", code: "MV", timezone: "UTC+5" },
    { id: 80, name: "Mongolia", capital: "Ulaanbaatar", continent: "Asia", flag: "🇲🇳", code: "MN", timezone: "UTC+8" },
    { id: 81, name: "Myanmar", capital: "Naypyidaw", continent: "Asia", flag: "🇲🇲", code: "MM", timezone: "UTC+6:30" },
    { id: 82, name: "Nepal", capital: "Kathmandu", continent: "Asia", flag: "🇳🇵", code: "NP", timezone: "UTC+5:45" },
    { id: 83, name: "North Korea", capital: "Pyongyang", continent: "Asia", flag: "🇰🇵", code: "KP", timezone: "UTC+9" },
    { id: 84, name: "Oman", capital: "Muscat", continent: "Asia", flag: "🇴🇲", code: "OM", timezone: "UTC+4" },
    { id: 85, name: "Pakistan", capital: "Islamabad", continent: "Asia", flag: "🇵🇰", code: "PK", timezone: "UTC+5" },
    { id: 86, name: "Palestine", capital: "Ramallah", continent: "Asia", flag: "🇵🇸", code: "PS", timezone: "UTC+2" },
    { id: 87, name: "Philippines", capital: "Manila", continent: "Asia", flag: "🇵🇭", code: "PH", timezone: "UTC+8" },
    { id: 88, name: "Qatar", capital: "Doha", continent: "Asia", flag: "🇶🇦", code: "QA", timezone: "UTC+3" },
    { id: 89, name: "Saudi Arabia", capital: "Riyadh", continent: "Asia", flag: "🇸🇦", code: "SA", timezone: "UTC+3" },
    { id: 90, name: "Singapore", capital: "Singapore", continent: "Asia", flag: "🇸🇬", code: "SG", timezone: "UTC+8" },
    { id: 91, name: "South Korea", capital: "Seoul", continent: "Asia", flag: "🇰🇷", code: "KR", timezone: "UTC+9" },
    { id: 92, name: "Sri Lanka", capital: "Sri Jayawardenepura Kotte", continent: "Asia", flag: "🇱🇰", code: "LK", timezone: "UTC+5:30" },
    { id: 93, name: "Syria", capital: "Damascus", continent: "Asia", flag: "🇸🇾", code: "SY", timezone: "UTC+3" },
    { id: 94, name: "Taiwan", capital: "Taipei", continent: "Asia", flag: "🇹🇼", code: "TW", timezone: "UTC+8" },
    { id: 95, name: "Tajikistan", capital: "Dushanbe", continent: "Asia", flag: "🇹🇯", code: "TJ", timezone: "UTC+5" },
    { id: 96, name: "Thailand", capital: "Bangkok", continent: "Asia", flag: "🇹🇭", code: "TH", timezone: "UTC+7" },
    { id: 97, name: "Timor-Leste", capital: "Dili", continent: "Asia", flag: "🇹🇱", code: "TL", timezone: "UTC+9" },
    { id: 98, name: "Turkey", capital: "Ankara", continent: "Asia", flag: "🇹🇷", code: "TR", timezone: "UTC+3" },
    { id: 99, name: "Turkmenistan", capital: "Ashgabat", continent: "Asia", flag: "🇹🇲", code: "TM", timezone: "UTC+5" },
    { id: 100, name: "United Arab Emirates", capital: "Abu Dhabi", continent: "Asia", flag: "🇦🇪", code: "AE", timezone: "UTC+4" },
    { id: 101, name: "Uzbekistan", capital: "Tashkent", continent: "Asia", flag: "🇺🇿", code: "UZ", timezone: "UTC+5" },
    { id: 102, name: "Vietnam", capital: "Hanoi", continent: "Asia", flag: "🇻🇳", code: "VN", timezone: "UTC+7" },
    { id: 103, name: "Yemen", capital: "Sana'a", continent: "Asia", flag: "🇾🇪", code: "YE", timezone: "UTC+3" },

    // EUROPE (44 countries)
    { id: 104, name: "Albania", capital: "Tirana", continent: "Europe", flag: "🇦🇱", code: "AL", timezone: "UTC+1" },
    { id: 105, name: "Andorra", capital: "Andorra la Vella", continent: "Europe", flag: "🇦🇩", code: "AD", timezone: "UTC+1" },
    { id: 106, name: "Austria", capital: "Vienna", continent: "Europe", flag: "🇦🇹", code: "AT", timezone: "UTC+1" },
    { id: 107, name: "Belarus", capital: "Minsk", continent: "Europe", flag: "🇧🇾", code: "BY", timezone: "UTC+3" },
    { id: 108, name: "Belgium", capital: "Brussels", continent: "Europe", flag: "🇧🇪", code: "BE", timezone: "UTC+1" },
    { id: 109, name: "Bosnia and Herzegovina", capital: "Sarajevo", continent: "Europe", flag: "🇧🇦", code: "BA", timezone: "UTC+1" },
    { id: 110, name: "Bulgaria", capital: "Sofia", continent: "Europe", flag: "🇧🇬", code: "BG", timezone: "UTC+2" },
    { id: 111, name: "Croatia", capital: "Zagreb", continent: "Europe", flag: "🇭🇷", code: "HR", timezone: "UTC+1" },
    { id: 112, name: "Czech Republic", capital: "Prague", continent: "Europe", flag: "🇨🇿", code: "CZ", timezone: "UTC+1" },
    { id: 113, name: "Denmark", capital: "Copenhagen", continent: "Europe", flag: "🇩🇰", code: "DK", timezone: "UTC+1" },
    { id: 114, name: "Estonia", capital: "Tallinn", continent: "Europe", flag: "🇪🇪", code: "EE", timezone: "UTC+2" },
    { id: 115, name: "Finland", capital: "Helsinki", continent: "Europe", flag: "🇫🇮", code: "FI", timezone: "UTC+2" },
    { id: 116, name: "France", capital: "Paris", continent: "Europe", flag: "🇫🇷", code: "FR", timezone: "UTC+1" },
    { id: 117, name: "Germany", capital: "Berlin", continent: "Europe", flag: "🇩🇪", code: "DE", timezone: "UTC+1" },
    { id: 118, name: "Greece", capital: "Athens", continent: "Europe", flag: "🇬🇷", code: "GR", timezone: "UTC+2" },
    { id: 119, name: "Hungary", capital: "Budapest", continent: "Europe", flag: "🇭🇺", code: "HU", timezone: "UTC+1" },
    { id: 120, name: "Iceland", capital: "Reykjavik", continent: "Europe", flag: "🇮🇸", code: "IS", timezone: "UTC+0" },
    { id: 121, name: "Ireland", capital: "Dublin", continent: "Europe", flag: "🇮🇪", code: "IE", timezone: "UTC+0" },
    { id: 122, name: "Italy", capital: "Rome", continent: "Europe", flag: "🇮🇹", code: "IT", timezone: "UTC+1" },
    { id: 123, name: "Kosovo", capital: "Pristina", continent: "Europe", flag: "🇽🇰", code: "XK", timezone: "UTC+1" },
    { id: 124, name: "Latvia", capital: "Riga", continent: "Europe", flag: "🇱🇻", code: "LV", timezone: "UTC+2" },
    { id: 125, name: "Liechtenstein", capital: "Vaduz", continent: "Europe", flag: "🇱🇮", code: "LI", timezone: "UTC+1" },
    { id: 126, name: "Lithuania", capital: "Vilnius", continent: "Europe", flag: "🇱🇹", code: "LT", timezone: "UTC+2" },
    { id: 127, name: "Luxembourg", capital: "Luxembourg City", continent: "Europe", flag: "🇱🇺", code: "LU", timezone: "UTC+1" },
    { id: 128, name: "Malta", capital: "Valletta", continent: "Europe", flag: "🇲🇹", code: "MT", timezone: "UTC+1" },
    { id: 129, name: "Moldova", capital: "Chișinău", continent: "Europe", flag: "🇲🇩", code: "MD", timezone: "UTC+2" },
    { id: 130, name: "Monaco", capital: "Monaco", continent: "Europe", flag: "🇲🇨", code: "MC", timezone: "UTC+1" },
    { id: 131, name: "Montenegro", capital: "Podgorica", continent: "Europe", flag: "🇲🇪", code: "ME", timezone: "UTC+1" },
    { id: 132, name: "Netherlands", capital: "Amsterdam", continent: "Europe", flag: "🇳🇱", code: "NL", timezone: "UTC+1" },
    { id: 133, name: "North Macedonia", capital: "Skopje", continent: "Europe", flag: "🇲🇰", code: "MK", timezone: "UTC+1" },
    { id: 134, name: "Norway", capital: "Oslo", continent: "Europe", flag: "🇳🇴", code: "NO", timezone: "UTC+1" },
    { id: 135, name: "Poland", capital: "Warsaw", continent: "Europe", flag: "🇵🇱", code: "PL", timezone: "UTC+1" },
    { id: 136, name: "Portugal", capital: "Lisbon", continent: "Europe", flag: "🇵🇹", code: "PT", timezone: "UTC+0" },
    { id: 137, name: "Romania", capital: "Bucharest", continent: "Europe", flag: "🇷🇴", code: "RO", timezone: "UTC+2" },
    { id: 138, name: "Russia", capital: "Moscow", continent: "Europe", flag: "🇷🇺", code: "RU", timezone: "UTC+3" },
    { id: 139, name: "San Marino", capital: "San Marino", continent: "Europe", flag: "🇸🇲", code: "SM", timezone: "UTC+1" },
    { id: 140, name: "Serbia", capital: "Belgrade", continent: "Europe", flag: "🇷🇸", code: "RS", timezone: "UTC+1" },
    { id: 141, name: "Slovakia", capital: "Bratislava", continent: "Europe", flag: "🇸🇰", code: "SK", timezone: "UTC+1" },
    { id: 142, name: "Slovenia", capital: "Ljubljana", continent: "Europe", flag: "🇸🇮", code: "SI", timezone: "UTC+1" },
    { id: 143, name: "Spain", capital: "Madrid", continent: "Europe", flag: "🇪🇸", code: "ES", timezone: "UTC+1" },
    { id: 144, name: "Sweden", capital: "Stockholm", continent: "Europe", flag: "🇸🇪", code: "SE", timezone: "UTC+1" },
    { id: 145, name: "Switzerland", capital: "Bern", continent: "Europe", flag: "🇨🇭", code: "CH", timezone: "UTC+1" },
    { id: 146, name: "Ukraine", capital: "Kyiv", continent: "Europe", flag: "🇺🇦", code: "UA", timezone: "UTC+2" },
    { id: 147, name: "United Kingdom", capital: "London", continent: "Europe", flag: "🇬🇧", code: "GB", timezone: "UTC+0" },
    { id: 148, name: "Vatican City", capital: "Vatican City", continent: "Europe", flag: "🇻🇦", code: "VA", timezone: "UTC+1" },

    // NORTH AMERICA (23 countries)
    { id: 149, name: "Antigua and Barbuda", capital: "St. John's", continent: "North America", flag: "🇦🇬", code: "AG", timezone: "UTC-4" },
    { id: 150, name: "Bahamas", capital: "Nassau", continent: "North America", flag: "🇧🇸", code: "BS", timezone: "UTC-5" },
    { id: 151, name: "Barbados", capital: "Bridgetown", continent: "North America", flag: "🇧🇧", code: "BB", timezone: "UTC-4" },
    { id: 152, name: "Belize", capital: "Belmopan", continent: "North America", flag: "🇧🇿", code: "BZ", timezone: "UTC-6" },
    { id: 153, name: "Canada", capital: "Ottawa", continent: "North America", flag: "🇨🇦", code: "CA", timezone: "UTC-5" },
    { id: 154, name: "Costa Rica", capital: "San José", continent: "North America", flag: "🇨🇷", code: "CR", timezone: "UTC-6" },
    { id: 155, name: "Cuba", capital: "Havana", continent: "North America", flag: "🇨🇺", code: "CU", timezone: "UTC-5" },
    { id: 156, name: "Dominica", capital: "Roseau", continent: "North America", flag: "🇩🇲", code: "DM", timezone: "UTC-4" },
    { id: 157, name: "Dominican Republic", capital: "Santo Domingo", continent: "North America", flag: "🇩🇴", code: "DO", timezone: "UTC-4" },
    { id: 158, name: "El Salvador", capital: "San Salvador", continent: "North America", flag: "🇸🇻", code: "SV", timezone: "UTC-6" },
    { id: 159, name: "Grenada", capital: "St. George's", continent: "North America", flag: "🇬🇩", code: "GD", timezone: "UTC-4" },
    { id: 160, name: "Guatemala", capital: "Guatemala City", continent: "North America", flag: "🇬🇹", code: "GT", timezone: "UTC-6" },
    { id: 161, name: "Haiti", capital: "Port-au-Prince", continent: "North America", flag: "🇭🇹", code: "HT", timezone: "UTC-5" },
    { id: 162, name: "Honduras", capital: "Tegucigalpa", continent: "North America", flag: "🇭🇳", code: "HN", timezone: "UTC-6" },
    { id: 163, name: "Jamaica", capital: "Kingston", continent: "North America", flag: "🇯🇲", code: "JM", timezone: "UTC-5" },
    { id: 164, name: "Mexico", capital: "Mexico City", continent: "North America", flag: "🇲🇽", code: "MX", timezone: "UTC-6" },
    { id: 165, name: "Nicaragua", capital: "Managua", continent: "North America", flag: "🇳🇮", code: "NI", timezone: "UTC-6" },
    { id: 166, name: "Panama", capital: "Panama City", continent: "North America", flag: "🇵🇦", code: "PA", timezone: "UTC-5" },
    { id: 167, name: "Saint Kitts and Nevis", capital: "Basseterre", continent: "North America", flag: "🇰🇳", code: "KN", timezone: "UTC-4" },
    { id: 168, name: "Saint Lucia", capital: "Castries", continent: "North America", flag: "🇱🇨", code: "LC", timezone: "UTC-4" },
    { id: 169, name: "Saint Vincent and the Grenadines", capital: "Kingstown", continent: "North America", flag: "🇻🇨", code: "VC", timezone: "UTC-4" },
    { id: 170, name: "Trinidad and Tobago", capital: "Port of Spain", continent: "North America", flag: "🇹🇹", code: "TT", timezone: "UTC-4" },
    { id: 171, name: "United States", capital: "Washington, D.C.", continent: "North America", flag: "🇺🇸", code: "US", timezone: "UTC-5" },

    // SOUTH AMERICA (12 countries)
    { id: 172, name: "Argentina", capital: "Buenos Aires", continent: "South America", flag: "🇦🇷", code: "AR", timezone: "UTC-3" },
    { id: 173, name: "Bolivia", capital: "Sucre", continent: "South America", flag: "🇧🇴", code: "BO", timezone: "UTC-4" },
    { id: 174, name: "Brazil", capital: "Brasília", continent: "South America", flag: "🇧🇷", code: "BR", timezone: "UTC-3" },
    { id: 175, name: "Chile", capital: "Santiago", continent: "South America", flag: "🇨🇱", code: "CL", timezone: "UTC-3" },
    { id: 176, name: "Colombia", capital: "Bogotá", continent: "South America", flag: "🇨🇴", code: "CO", timezone: "UTC-5" },
    { id: 177, name: "Ecuador", capital: "Quito", continent: "South America", flag: "🇪🇨", code: "EC", timezone: "UTC-5" },
    { id: 178, name: "Guyana", capital: "Georgetown", continent: "South America", flag: "🇬🇾", code: "GY", timezone: "UTC-4" },
    { id: 179, name: "Paraguay", capital: "Asunción", continent: "South America", flag: "🇵🇾", code: "PY", timezone: "UTC-4" },
    { id: 180, name: "Peru", capital: "Lima", continent: "South America", flag: "🇵🇪", code: "PE", timezone: "UTC-5" },
    { id: 181, name: "Suriname", capital: "Paramaribo", continent: "South America", flag: "🇸🇷", code: "SR", timezone: "UTC-3" },
    { id: 182, name: "Uruguay", capital: "Montevideo", continent: "South America", flag: "🇺🇾", code: "UY", timezone: "UTC-3" },
    { id: 183, name: "Venezuela", capital: "Caracas", continent: "South America", flag: "🇻🇪", code: "VE", timezone: "UTC-4" },

    // OCEANIA (14 countries)
    { id: 184, name: "Australia", capital: "Canberra", continent: "Oceania", flag: "🇦🇺", code: "AU", timezone: "UTC+10" },
    { id: 185, name: "Fiji", capital: "Suva", continent: "Oceania", flag: "🇫🇯", code: "FJ", timezone: "UTC+12" },
    { id: 186, name: "Kiribati", capital: "South Tarawa", continent: "Oceania", flag: "🇰🇮", code: "KI", timezone: "UTC+12" },
    { id: 187, name: "Marshall Islands", capital: "Majuro", continent: "Oceania", flag: "🇲🇭", code: "MH", timezone: "UTC+12" },
    { id: 188, name: "Micronesia", capital: "Palikir", continent: "Oceania", flag: "🇫🇲", code: "FM", timezone: "UTC+11" },
    { id: 189, name: "Nauru", capital: "Yaren", continent: "Oceania", flag: "🇳🇷", code: "NR", timezone: "UTC+12" },
    { id: 190, name: "New Zealand", capital: "Wellington", continent: "Oceania", flag: "🇳🇿", code: "NZ", timezone: "UTC+12" },
    { id: 191, name: "Palau", capital: "Ngerulmud", continent: "Oceania", flag: "🇵🇼", code: "PW", timezone: "UTC+9" },
    { id: 192, name: "Papua New Guinea", capital: "Port Moresby", continent: "Oceania", flag: "🇵🇬", code: "PG", timezone: "UTC+10" },
    { id: 193, name: "Samoa", capital: "Apia", continent: "Oceania", flag: "🇼🇸", code: "WS", timezone: "UTC+13" },
    { id: 194, name: "Solomon Islands", capital: "Honiara", continent: "Oceania", flag: "🇸🇧", code: "SB", timezone: "UTC+11" },
    { id: 195, name: "Tonga", capital: "Nukuʻalofa", continent: "Oceania", flag: "🇹🇴", code: "TO", timezone: "UTC+13" },
    { id: 196, name: "Tuvalu", capital: "Funafuti", continent: "Oceania", flag: "🇹🇻", code: "TV", timezone: "UTC+12" },
    { id: 197, name: "Vanuatu", capital: "Port Vila", continent: "Oceania", flag: "🇻🇺", code: "VU", timezone: "UTC+11" }
];

// Helper functions
const CountryData = {
    getAll() {
        return COUNTRIES;
    },
    
    getByContinent(continent) {
        return COUNTRIES.filter(c => c.continent === continent);
    },
    
    getById(id) {
        return COUNTRIES.find(c => c.id === id);
    },
    
    getByName(name) {
        return COUNTRIES.find(c => c.name.toLowerCase() === name.toLowerCase());
    },
    
    getRandom(count = 1) {
        const shuffled = [...COUNTRIES].sort(() => Math.random() - 0.5);
        return count === 1 ? shuffled[0] : shuffled.slice(0, count);
    },
    
    getAllCapitals() {
        return COUNTRIES.map(c => c.capital);
    },
    
    getAllNames() {
        return COUNTRIES.map(c => c.name);
    },
    
    getAllFlags() {
        return COUNTRIES.map(c => ({ flag: c.flag, name: c.name }));
    },
    
    getContinents() {
        return [...new Set(COUNTRIES.map(c => c.continent))];
    }
};

window.COUNTRIES = COUNTRIES;
window.CountryData = CountryData;
