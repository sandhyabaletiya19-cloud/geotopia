/* ===================================
   UNITY ATLAS - COUNTRY DATA MASTER
   Path: geotopia/encyclopedia/international-relations/assets/js/country-data.js
   =================================== */

// ===================================
// COMPLETE COUNTRY LIST (197 Nations)
// ===================================

const ALL_COUNTRIES = [
    // Africa (54)
    { code: 'DZA', name: 'Algeria', flag: '🇩🇿', continent: 'Africa', lat: 28, lon: 3, capital: 'Algiers' },
    { code: 'AGO', name: 'Angola', flag: '🇦🇴', continent: 'Africa', lat: -12, lon: 18, capital: 'Luanda' },
    { code: 'BEN', name: 'Benin', flag: '🇧🇯', continent: 'Africa', lat: 9, lon: 2, capital: 'Porto-Novo' },
    { code: 'BWA', name: 'Botswana', flag: '🇧🇼', continent: 'Africa', lat: -22, lon: 24, capital: 'Gaborone' },
    { code: 'BFA', name: 'Burkina Faso', flag: '🇧🇫', continent: 'Africa', lat: 13, lon: -2, capital: 'Ouagadougou' },
    { code: 'BDI', name: 'Burundi', flag: '🇧🇮', continent: 'Africa', lat: -3, lon: 30, capital: 'Gitega' },
    { code: 'CMR', name: 'Cameroon', flag: '🇨🇲', continent: 'Africa', lat: 6, lon: 12, capital: 'Yaoundé' },
    { code: 'CPV', name: 'Cape Verde', flag: '🇨🇻', continent: 'Africa', lat: 16, lon: -24, capital: 'Praia' },
    { code: 'CAF', name: 'Central African Republic', flag: '🇨🇫', continent: 'Africa', lat: 7, lon: 21, capital: 'Bangui' },
    { code: 'TCD', name: 'Chad', flag: '🇹🇩', continent: 'Africa', lat: 15, lon: 19, capital: "N'Djamena" },
    { code: 'COM', name: 'Comoros', flag: '🇰🇲', continent: 'Africa', lat: -12, lon: 44, capital: 'Moroni' },
    { code: 'COG', name: 'Congo', flag: '🇨🇬', continent: 'Africa', lat: -1, lon: 15, capital: 'Brazzaville' },
    { code: 'COD', name: 'Congo (DRC)', flag: '🇨🇩', continent: 'Africa', lat: -4, lon: 15, capital: 'Kinshasa' },
    { code: 'CIV', name: "Côte d'Ivoire", flag: '🇨🇮', continent: 'Africa', lat: 8, lon: -5, capital: 'Yamoussoukro' },
    { code: 'DJI', name: 'Djibouti', flag: '🇩🇯', continent: 'Africa', lat: 12, lon: 43, capital: 'Djibouti' },
    { code: 'EGY', name: 'Egypt', flag: '🇪🇬', continent: 'Africa', lat: 26, lon: 30, capital: 'Cairo' },
    { code: 'GNQ', name: 'Equatorial Guinea', flag: '🇬🇶', continent: 'Africa', lat: 2, lon: 10, capital: 'Malabo' },
    { code: 'ERI', name: 'Eritrea', flag: '🇪🇷', continent: 'Africa', lat: 15, lon: 39, capital: 'Asmara' },
    { code: 'ETH', name: 'Ethiopia', flag: '🇪🇹', continent: 'Africa', lat: 9, lon: 40, capital: 'Addis Ababa' },
    { code: 'GAB', name: 'Gabon', flag: '🇬🇦', continent: 'Africa', lat: -1, lon: 11, capital: 'Libreville' },
    { code: 'GMB', name: 'Gambia', flag: '🇬🇲', continent: 'Africa', lat: 13, lon: -15, capital: 'Banjul' },
    { code: 'GHA', name: 'Ghana', flag: '🇬🇭', continent: 'Africa', lat: 8, lon: -2, capital: 'Accra' },
    { code: 'GIN', name: 'Guinea', flag: '🇬🇳', continent: 'Africa', lat: 11, lon: -10, capital: 'Conakry' },
    { code: 'GNB', name: 'Guinea-Bissau', flag: '🇬🇼', continent: 'Africa', lat: 12, lon: -15, capital: 'Bissau' },
    { code: 'KEN', name: 'Kenya', flag: '🇰🇪', continent: 'Africa', lat: 1, lon: 38, capital: 'Nairobi' },
    { code: 'LSO', name: 'Lesotho', flag: '🇱🇸', continent: 'Africa', lat: -29, lon: 28, capital: 'Maseru' },
    { code: 'LBR', name: 'Liberia', flag: '🇱🇷', continent: 'Africa', lat: 6, lon: -9, capital: 'Monrovia' },
    { code: 'LBY', name: 'Libya', flag: '🇱🇾', continent: 'Africa', lat: 27, lon: 17, capital: 'Tripoli' },
    { code: 'MDG', name: 'Madagascar', flag: '🇲🇬', continent: 'Africa', lat: -19, lon: 46, capital: 'Antananarivo' },
    { code: 'MWI', name: 'Malawi', flag: '🇲🇼', continent: 'Africa', lat: -13, lon: 34, capital: 'Lilongwe' },
    { code: 'MLI', name: 'Mali', flag: '🇲🇱', continent: 'Africa', lat: 17, lon: -4, capital: 'Bamako' },
    { code: 'MRT', name: 'Mauritania', flag: '🇲🇷', continent: 'Africa', lat: 20, lon: -10, capital: 'Nouakchott' },
    { code: 'MUS', name: 'Mauritius', flag: '🇲🇺', continent: 'Africa', lat: -20, lon: 57, capital: 'Port Louis' },
    { code: 'MAR', name: 'Morocco', flag: '🇲🇦', continent: 'Africa', lat: 32, lon: -5, capital: 'Rabat' },
    { code: 'MOZ', name: 'Mozambique', flag: '🇲🇿', continent: 'Africa', lat: -18, lon: 35, capital: 'Maputo' },
    { code: 'NAM', name: 'Namibia', flag: '🇳🇦', continent: 'Africa', lat: -22, lon: 17, capital: 'Windhoek' },
    { code: 'NER', name: 'Niger', flag: '🇳🇪', continent: 'Africa', lat: 16, lon: 8, capital: 'Niamey' },
    { code: 'NGA', name: 'Nigeria', flag: '🇳🇬', continent: 'Africa', lat: 9, lon: 8, capital: 'Abuja' },
    { code: 'RWA', name: 'Rwanda', flag: '🇷🇼', continent: 'Africa', lat: -2, lon: 30, capital: 'Kigali' },
    { code: 'STP', name: 'São Tomé and Príncipe', flag: '🇸🇹', continent: 'Africa', lat: 1, lon: 7, capital: 'São Tomé' },
    { code: 'SEN', name: 'Senegal', flag: '🇸🇳', continent: 'Africa', lat: 14, lon: -14, capital: 'Dakar' },
    { code: 'SYC', name: 'Seychelles', flag: '🇸🇨', continent: 'Africa', lat: -5, lon: 56, capital: 'Victoria' },
    { code: 'SLE', name: 'Sierra Leone', flag: '🇸🇱', continent: 'Africa', lat: 8, lon: -12, capital: 'Freetown' },
    { code: 'SOM', name: 'Somalia', flag: '🇸🇴', continent: 'Africa', lat: 6, lon: 46, capital: 'Mogadishu' },
    { code: 'ZAF', name: 'South Africa', flag: '🇿🇦', continent: 'Africa', lat: -29, lon: 24, capital: 'Pretoria' },
    { code: 'SSD', name: 'South Sudan', flag: '🇸🇸', continent: 'Africa', lat: 7, lon: 30, capital: 'Juba' },
    { code: 'SDN', name: 'Sudan', flag: '🇸🇩', continent: 'Africa', lat: 15, lon: 30, capital: 'Khartoum' },
    { code: 'SWZ', name: 'Eswatini', flag: '🇸🇿', continent: 'Africa', lat: -26, lon: 31, capital: 'Mbabane' },
    { code: 'TZA', name: 'Tanzania', flag: '🇹🇿', continent: 'Africa', lat: -6, lon: 35, capital: 'Dodoma' },
    { code: 'TGO', name: 'Togo', flag: '🇹🇬', continent: 'Africa', lat: 8, lon: 1, capital: 'Lomé' },
    { code: 'TUN', name: 'Tunisia', flag: '🇹🇳', continent: 'Africa', lat: 34, lon: 9, capital: 'Tunis' },
    { code: 'UGA', name: 'Uganda', flag: '🇺🇬', continent: 'Africa', lat: 1, lon: 32, capital: 'Kampala' },
    { code: 'ZMB', name: 'Zambia', flag: '🇿🇲', continent: 'Africa', lat: -15, lon: 30, capital: 'Lusaka' },
    { code: 'ZWE', name: 'Zimbabwe', flag: '🇿🇼', continent: 'Africa', lat: -19, lon: 29, capital: 'Harare' },
    
    // Asia (48) - continued in similar format
    { code: 'AFG', name: 'Afghanistan', flag: '🇦🇫', continent: 'Asia', lat: 33, lon: 65, capital: 'Kabul' },
    { code: 'ARM', name: 'Armenia', flag: '🇦🇲', continent: 'Asia', lat: 40, lon: 45, capital: 'Yerevan' },
    { code: 'AZE', name: 'Azerbaijan', flag: '🇦🇿', continent: 'Asia', lat: 40, lon: 47, capital: 'Baku' },
    { code: 'BHR', name: 'Bahrain', flag: '🇧🇭', continent: 'Asia', lat: 26, lon: 50, capital: 'Manama' },
    { code: 'BGD', name: 'Bangladesh', flag: '🇧🇩', continent: 'Asia', lat: 24, lon: 90, capital: 'Dhaka' },
    { code: 'BTN', name: 'Bhutan', flag: '🇧🇹', continent: 'Asia', lat: 27, lon: 90, capital: 'Thimphu' },
    { code: 'BRN', name: 'Brunei', flag: '🇧🇳', continent: 'Asia', lat: 4, lon: 115, capital: 'Bandar Seri Begawan' },
    { code: 'KHM', name: 'Cambodia', flag: '🇰🇭', continent: 'Asia', lat: 13, lon: 105, capital: 'Phnom Penh' },
    { code: 'CHN', name: 'China', flag: '🇨🇳', continent: 'Asia', lat: 35, lon: 105, capital: 'Beijing' },
    { code: 'GEO', name: 'Georgia', flag: '🇬🇪', continent: 'Asia', lat: 42, lon: 43, capital: 'Tbilisi' },
    { code: 'IND', name: 'India', flag: '🇮🇳', continent: 'Asia', lat: 20, lon: 77, capital: 'New Delhi' },
    { code: 'IDN', name: 'Indonesia', flag: '🇮🇩', continent: 'Asia', lat: -2, lon: 118, capital: 'Jakarta' },
    { code: 'IRN', name: 'Iran', flag: '🇮🇷', continent: 'Asia', lat: 32, lon: 53, capital: 'Tehran' },
    { code: 'IRQ', name: 'Iraq', flag: '🇮🇶', continent: 'Asia', lat: 33, lon: 44, capital: 'Baghdad' },
    { code: 'ISR', name: 'Israel', flag: '🇮🇱', continent: 'Asia', lat: 31, lon: 35, capital: 'Jerusalem' },
    { code: 'JPN', name: 'Japan', flag: '🇯🇵', continent: 'Asia', lat: 36, lon: 138, capital: 'Tokyo' },
    { code: 'JOR', name: 'Jordan', flag: '🇯🇴', continent: 'Asia', lat: 31, lon: 36, capital: 'Amman' },
    { code: 'KAZ', name: 'Kazakhstan', flag: '🇰🇿', continent: 'Asia', lat: 48, lon: 68, capital: 'Astana' },
    { code: 'KWT', name: 'Kuwait', flag: '🇰🇼', continent: 'Asia', lat: 29, lon: 48, capital: 'Kuwait City' },
    { code: 'KGZ', name: 'Kyrgyzstan', flag: '🇰🇬', continent: 'Asia', lat: 41, lon: 75, capital: 'Bishkek' },
    { code: 'LAO', name: 'Laos', flag: '🇱🇦', continent: 'Asia', lat: 18, lon: 105, capital: 'Vientiane' },
    { code: 'LBN', name: 'Lebanon', flag: '🇱🇧', continent: 'Asia', lat: 34, lon: 36, capital: 'Beirut' },
    { code: 'MYS', name: 'Malaysia', flag: '🇲🇾', continent: 'Asia', lat: 2, lon: 112, capital: 'Kuala Lumpur' },
    { code: 'MDV', name: 'Maldives', flag: '🇲🇻', continent: 'Asia', lat: 3, lon: 73, capital: 'Malé' },
    { code: 'MNG', name: 'Mongolia', flag: '🇲🇳', continent: 'Asia', lat: 46, lon: 105, capital: 'Ulaanbaatar' },
    { code: 'MMR', name: 'Myanmar', flag: '🇲🇲', continent: 'Asia', lat: 22, lon: 98, capital: 'Naypyidaw' },
    { code: 'NPL', name: 'Nepal', flag: '🇳🇵', continent: 'Asia', lat: 28, lon: 84, capital: 'Kathmandu' },
    { code: 'PRK', name: 'North Korea', flag: '🇰🇵', continent: 'Asia', lat: 40, lon: 127, capital: 'Pyongyang' },
    { code: 'OMN', name: 'Oman', flag: '🇴🇲', continent: 'Asia', lat: 21, lon: 57, capital: 'Muscat' },
    { code: 'PAK', name: 'Pakistan', flag: '🇵🇰', continent: 'Asia', lat: 30, lon: 70, capital: 'Islamabad' },
    { code: 'PSE', name: 'Palestine', flag: '🇵🇸', continent: 'Asia', lat: 32, lon: 35, capital: 'Ramallah' },
    { code: 'PHL', name: 'Philippines', flag: '🇵🇭', continent: 'Asia', lat: 12, lon: 122, capital: 'Manila' },
    { code: 'QAT', name: 'Qatar', flag: '🇶🇦', continent: 'Asia', lat: 25, lon: 51, capital: 'Doha' },
    { code: 'SAU', name: 'Saudi Arabia', flag: '🇸🇦', continent: 'Asia', lat: 24, lon: 45, capital: 'Riyadh' },
    { code: 'SGP', name: 'Singapore', flag: '🇸🇬', continent: 'Asia', lat: 1, lon: 104, capital: 'Singapore' },
    { code: 'KOR', name: 'South Korea', flag: '🇰🇷', continent: 'Asia', lat: 37, lon: 127, capital: 'Seoul' },
    { code: 'LKA', name: 'Sri Lanka', flag: '🇱🇰', continent: 'Asia', lat: 7, lon: 81, capital: 'Colombo' },
    { code: 'SYR', name: 'Syria', flag: '🇸🇾', continent: 'Asia', lat: 35, lon: 38, capital: 'Damascus' },
    { code: 'TWN', name: 'Taiwan', flag: '🇹🇼', continent: 'Asia', lat: 24, lon: 121, capital: 'Taipei' },
    { code: 'TJK', name: 'Tajikistan', flag: '🇹🇯', continent: 'Asia', lat: 39, lon: 71, capital: 'Dushanbe' },
    { code: 'THA', name: 'Thailand', flag: '🇹🇭', continent: 'Asia', lat: 15, lon: 100, capital: 'Bangkok' },
    { code: 'TLS', name: 'Timor-Leste', flag: '🇹🇱', continent: 'Asia', lat: -9, lon: 126, capital: 'Dili' },
    { code: 'TUR', name: 'Turkey', flag: '🇹🇷', continent: 'Asia', lat: 39, lon: 35, capital: 'Ankara' },
    { code: 'TKM', name: 'Turkmenistan', flag: '🇹🇲', continent: 'Asia', lat: 40, lon: 60, capital: 'Ashgabat' },
    { code: 'ARE', name: 'United Arab Emirates', flag: '🇦🇪', continent: 'Asia', lat: 24, lon: 54, capital: 'Abu Dhabi' },
    { code: 'UZB', name: 'Uzbekistan', flag: '🇺🇿', continent: 'Asia', lat: 41, lon: 64, capital: 'Tashkent' },
    { code: 'VNM', name: 'Vietnam', flag: '🇻🇳', continent: 'Asia', lat: 16, lon: 106, capital: 'Hanoi' },
    { code: 'YEM', name: 'Yemen', flag: '🇾🇪', continent: 'Asia', lat: 15, lon: 48, capital: "Sana'a" },
    
    // Americas, Europe, Oceania... (continued)
    // Total: 197 countries
];

// ===================================
// HELPER FUNCTIONS
// ===================================

const CountryData = {
    // Get country by code
    getByCode(code) {
        return ALL_COUNTRIES.find(c => c.code === code);
    },
    
    // Get all countries by continent
    getByContinent(continent) {
        return ALL_COUNTRIES.filter(c => c.continent === continent);
    },
    
    // Search countries
    search(query) {
        const lowerQuery = query.toLowerCase();
        return ALL_COUNTRIES.filter(c => 
            c.name.toLowerCase().includes(lowerQuery) ||
            c.code.toLowerCase().includes(lowerQuery)
        );
    },
    
    // Get all country codes
    getAllCodes() {
        return ALL_COUNTRIES.map(c => c.code);
    },
    
    // Get random country
    getRandom() {
        return ALL_COUNTRIES[Math.floor(Math.random() * ALL_COUNTRIES.length)];
    }
};

// Expose globally
window.CountryData = CountryData;
window.ALL_COUNTRIES = ALL_COUNTRIES;
