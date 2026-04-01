/**
 * =====================================================
 * GEOTOPIA INTERNATIONAL RELATIONS - MAIN JAVASCRIPT
 * Version: 1.0.0 | April 2026
 * "Building bridges through knowledge"
 * =====================================================
 */

'use strict';

// =====================================================
// CONFIGURATION & CONSTANTS
// =====================================================
const CONFIG = {
    API_ENDPOINTS: {
        WORLD_BANK: 'https://api.worldbank.org/v2',
        UN_COMTRADE: 'https://comtrade.un.org/api',
        REST_COUNTRIES: 'https://restcountries.com/v3.1',
        FLAGS_API: 'https://flagcdn.com'
    },
    CACHE_DURATION: 24 * 60 * 60 * 1000, // 24 hours
    ANIMATION_DURATION: 500,
    DEBOUNCE_DELAY: 300,
    ITEMS_PER_PAGE: 50,
    DATA_VERSION: '2026.04'
};

// All 197 Countries with ISO codes
const COUNTRIES = [
    { code: 'AFG', name: 'Afghanistan', region: 'Asia', subregion: 'Southern Asia' },
    { code: 'ALB', name: 'Albania', region: 'Europe', subregion: 'Southern Europe' },
    { code: 'DZA', name: 'Algeria', region: 'Africa', subregion: 'Northern Africa' },
    { code: 'AND', name: 'Andorra', region: 'Europe', subregion: 'Southern Europe' },
    { code: 'AGO', name: 'Angola', region: 'Africa', subregion: 'Middle Africa' },
    { code: 'ATG', name: 'Antigua and Barbuda', region: 'Americas', subregion: 'Caribbean' },
    { code: 'ARG', name: 'Argentina', region: 'Americas', subregion: 'South America' },
    { code: 'ARM', name: 'Armenia', region: 'Asia', subregion: 'Western Asia' },
    { code: 'AUS', name: 'Australia', region: 'Oceania', subregion: 'Australia and New Zealand' },
    { code: 'AUT', name: 'Austria', region: 'Europe', subregion: 'Western Europe' },
    { code: 'AZE', name: 'Azerbaijan', region: 'Asia', subregion: 'Western Asia' },
    { code: 'BHS', name: 'Bahamas', region: 'Americas', subregion: 'Caribbean' },
    { code: 'BHR', name: 'Bahrain', region: 'Asia', subregion: 'Western Asia' },
    { code: 'BGD', name: 'Bangladesh', region: 'Asia', subregion: 'Southern Asia' },
    { code: 'BRB', name: 'Barbados', region: 'Americas', subregion: 'Caribbean' },
    { code: 'BLR', name: 'Belarus', region: 'Europe', subregion: 'Eastern Europe' },
    { code: 'BEL', name: 'Belgium', region: 'Europe', subregion: 'Western Europe' },
    { code: 'BLZ', name: 'Belize', region: 'Americas', subregion: 'Central America' },
    { code: 'BEN', name: 'Benin', region: 'Africa', subregion: 'Western Africa' },
    { code: 'BTN', name: 'Bhutan', region: 'Asia', subregion: 'Southern Asia' },
    { code: 'BOL', name: 'Bolivia', region: 'Americas', subregion: 'South America' },
    { code: 'BIH', name: 'Bosnia and Herzegovina', region: 'Europe', subregion: 'Southern Europe' },
    { code: 'BWA', name: 'Botswana', region: 'Africa', subregion: 'Southern Africa' },
    { code: 'BRA', name: 'Brazil', region: 'Americas', subregion: 'South America' },
    { code: 'BRN', name: 'Brunei', region: 'Asia', subregion: 'South-Eastern Asia' },
    { code: 'BGR', name: 'Bulgaria', region: 'Europe', subregion: 'Eastern Europe' },
    { code: 'BFA', name: 'Burkina Faso', region: 'Africa', subregion: 'Western Africa' },
    { code: 'BDI', name: 'Burundi', region: 'Africa', subregion: 'Eastern Africa' },
    { code: 'CPV', name: 'Cabo Verde', region: 'Africa', subregion: 'Western Africa' },
    { code: 'KHM', name: 'Cambodia', region: 'Asia', subregion: 'South-Eastern Asia' },
    { code: 'CMR', name: 'Cameroon', region: 'Africa', subregion: 'Middle Africa' },
    { code: 'CAN', name: 'Canada', region: 'Americas', subregion: 'Northern America' },
    { code: 'CAF', name: 'Central African Republic', region: 'Africa', subregion: 'Middle Africa' },
    { code: 'TCD', name: 'Chad', region: 'Africa', subregion: 'Middle Africa' },
    { code: 'CHL', name: 'Chile', region: 'Americas', subregion: 'South America' },
    { code: 'CHN', name: 'China', region: 'Asia', subregion: 'Eastern Asia' },
    { code: 'COL', name: 'Colombia', region: 'Americas', subregion: 'South America' },
    { code: 'COM', name: 'Comoros', region: 'Africa', subregion: 'Eastern Africa' },
    { code: 'COG', name: 'Congo', region: 'Africa', subregion: 'Middle Africa' },
    { code: 'COD', name: 'DR Congo', region: 'Africa', subregion: 'Middle Africa' },
    { code: 'CRI', name: 'Costa Rica', region: 'Americas', subregion: 'Central America' },
    { code: 'CIV', name: "Côte d'Ivoire", region: 'Africa', subregion: 'Western Africa' },
    { code: 'HRV', name: 'Croatia', region: 'Europe', subregion: 'Southern Europe' },
    { code: 'CUB', name: 'Cuba', region: 'Americas', subregion: 'Caribbean' },
    { code: 'CYP', name: 'Cyprus', region: 'Europe', subregion: 'Southern Europe' },
    { code: 'CZE', name: 'Czechia', region: 'Europe', subregion: 'Central Europe' },
    { code: 'DNK', name: 'Denmark', region: 'Europe', subregion: 'Northern Europe' },
    { code: 'DJI', name: 'Djibouti', region: 'Africa', subregion: 'Eastern Africa' },
    { code: 'DMA', name: 'Dominica', region: 'Americas', subregion: 'Caribbean' },
    { code: 'DOM', name: 'Dominican Republic', region: 'Americas', subregion: 'Caribbean' },
    { code: 'ECU', name: 'Ecuador', region: 'Americas', subregion: 'South America' },
    { code: 'EGY', name: 'Egypt', region: 'Africa', subregion: 'Northern Africa' },
    { code: 'SLV', name: 'El Salvador', region: 'Americas', subregion: 'Central America' },
    { code: 'GNQ', name: 'Equatorial Guinea', region: 'Africa', subregion: 'Middle Africa' },
    { code: 'ERI', name: 'Eritrea', region: 'Africa', subregion: 'Eastern Africa' },
    { code: 'EST', name: 'Estonia', region: 'Europe', subregion: 'Northern Europe' },
    { code: 'SWZ', name: 'Eswatini', region: 'Africa', subregion: 'Southern Africa' },
    { code: 'ETH', name: 'Ethiopia', region: 'Africa', subregion: 'Eastern Africa' },
    { code: 'FJI', name: 'Fiji', region: 'Oceania', subregion: 'Melanesia' },
    { code: 'FIN', name: 'Finland', region: 'Europe', subregion: 'Northern Europe' },
    { code: 'FRA', name: 'France', region: 'Europe', subregion: 'Western Europe' },
    { code: 'GAB', name: 'Gabon', region: 'Africa', subregion: 'Middle Africa' },
    { code: 'GMB', name: 'Gambia', region: 'Africa', subregion: 'Western Africa' },
    { code: 'GEO', name: 'Georgia', region: 'Asia', subregion: 'Western Asia' },
    { code: 'DEU', name: 'Germany', region: 'Europe', subregion: 'Western Europe' },
    { code: 'GHA', name: 'Ghana', region: 'Africa', subregion: 'Western Africa' },
    { code: 'GRC', name: 'Greece', region: 'Europe', subregion: 'Southern Europe' },
    { code: 'GRD', name: 'Grenada', region: 'Americas', subregion: 'Caribbean' },
    { code: 'GTM', name: 'Guatemala', region: 'Americas', subregion: 'Central America' },
    { code: 'GIN', name: 'Guinea', region: 'Africa', subregion: 'Western Africa' },
    { code: 'GNB', name: 'Guinea-Bissau', region: 'Africa', subregion: 'Western Africa' },
    { code: 'GUY', name: 'Guyana', region: 'Americas', subregion: 'South America' },
    { code: 'HTI', name: 'Haiti', region: 'Americas', subregion: 'Caribbean' },
    { code: 'HND', name: 'Honduras', region: 'Americas', subregion: 'Central America' },
    { code: 'HUN', name: 'Hungary', region: 'Europe', subregion: 'Central Europe' },
    { code: 'ISL', name: 'Iceland', region: 'Europe', subregion: 'Northern Europe' },
    { code: 'IND', name: 'India', region: 'Asia', subregion: 'Southern Asia' },
    { code: 'IDN', name: 'Indonesia', region: 'Asia', subregion: 'South-Eastern Asia' },
    { code: 'IRN', name: 'Iran', region: 'Asia', subregion: 'Southern Asia' },
    { code: 'IRQ', name: 'Iraq', region: 'Asia', subregion: 'Western Asia' },
    { code: 'IRL', name: 'Ireland', region: 'Europe', subregion: 'Northern Europe' },
    { code: 'ISR', name: 'Israel', region: 'Asia', subregion: 'Western Asia' },
    { code: 'ITA', name: 'Italy', region: 'Europe', subregion: 'Southern Europe' },
    { code: 'JAM', name: 'Jamaica', region: 'Americas', subregion: 'Caribbean' },
    { code: 'JPN', name: 'Japan', region: 'Asia', subregion: 'Eastern Asia' },
    { code: 'JOR', name: 'Jordan', region: 'Asia', subregion: 'Western Asia' },
    { code: 'KAZ', name: 'Kazakhstan', region: 'Asia', subregion: 'Central Asia' },
    { code: 'KEN', name: 'Kenya', region: 'Africa', subregion: 'Eastern Africa' },
    { code: 'KIR', name: 'Kiribati', region: 'Oceania', subregion: 'Micronesia' },
    { code: 'PRK', name: 'North Korea', region: 'Asia', subregion: 'Eastern Asia' },
    { code: 'KOR', name: 'South Korea', region: 'Asia', subregion: 'Eastern Asia' },
    { code: 'KWT', name: 'Kuwait', region: 'Asia', subregion: 'Western Asia' },
    { code: 'KGZ', name: 'Kyrgyzstan', region: 'Asia', subregion: 'Central Asia' },
        { code: 'LAO', name: 'Laos', region: 'Asia', subregion: 'South-Eastern Asia' },
    { code: 'LVA', name: 'Latvia', region: 'Europe', subregion: 'Northern Europe' },
    { code: 'LBN', name: 'Lebanon', region: 'Asia', subregion: 'Western Asia' },
    { code: 'LSO', name: 'Lesotho', region: 'Africa', subregion: 'Southern Africa' },
    { code: 'LBR', name: 'Liberia', region: 'Africa', subregion: 'Western Africa' },
    { code: 'LBY', name: 'Libya', region: 'Africa', subregion: 'Northern Africa' },
    { code: 'LIE', name: 'Liechtenstein', region: 'Europe', subregion: 'Western Europe' },
    { code: 'LTU', name: 'Lithuania', region: 'Europe', subregion: 'Northern Europe' },
    { code: 'LUX', name: 'Luxembourg', region: 'Europe', subregion: 'Western Europe' },
    { code: 'MDG', name: 'Madagascar', region: 'Africa', subregion: 'Eastern Africa' },
    { code: 'MWI', name: 'Malawi', region: 'Africa', subregion: 'Eastern Africa' },
    { code: 'MYS', name: 'Malaysia', region: 'Asia', subregion: 'South-Eastern Asia' },
    { code: 'MDV', name: 'Maldives', region: 'Asia', subregion: 'Southern Asia' },
    { code: 'MLI', name: 'Mali', region: 'Africa', subregion: 'Western Africa' },
    { code: 'MLT', name: 'Malta', region: 'Europe', subregion: 'Southern Europe' },
    { code: 'MHL', name: 'Marshall Islands', region: 'Oceania', subregion: 'Micronesia' },
    { code: 'MRT', name: 'Mauritania', region: 'Africa', subregion: 'Western Africa' },
    { code: 'MUS', name: 'Mauritius', region: 'Africa', subregion: 'Eastern Africa' },
    { code: 'MEX', name: 'Mexico', region: 'Americas', subregion: 'North America' },
    { code: 'FSM', name: 'Micronesia', region: 'Oceania', subregion: 'Micronesia' },
    { code: 'MDA', name: 'Moldova', region: 'Europe', subregion: 'Eastern Europe' },
    { code: 'MCO', name: 'Monaco', region: 'Europe', subregion: 'Western Europe' },
    { code: 'MNG', name: 'Mongolia', region: 'Asia', subregion: 'Eastern Asia' },
    { code: 'MNE', name: 'Montenegro', region: 'Europe', subregion: 'Southern Europe' },
    { code: 'MAR', name: 'Morocco', region: 'Africa', subregion: 'Northern Africa' },
    { code: 'MOZ', name: 'Mozambique', region: 'Africa', subregion: 'Eastern Africa' },
    { code: 'MMR', name: 'Myanmar', region: 'Asia', subregion: 'South-Eastern Asia' },
    { code: 'NAM', name: 'Namibia', region: 'Africa', subregion: 'Southern Africa' },
    { code: 'NRU', name: 'Nauru', region: 'Oceania', subregion: 'Micronesia' },
    { code: 'NPL', name: 'Nepal', region: 'Asia', subregion: 'Southern Asia' },
    { code: 'NLD', name: 'Netherlands', region: 'Europe', subregion: 'Western Europe' },
    { code: 'NZL', name: 'New Zealand', region: 'Oceania', subregion: 'Australia and New Zealand' },
    { code: 'NIC', name: 'Nicaragua', region: 'Americas', subregion: 'Central America' },
    { code: 'NER', name: 'Niger', region: 'Africa', subregion: 'Western Africa' },
    { code: 'NGA', name: 'Nigeria', region: 'Africa', subregion: 'Western Africa' },
    { code: 'MKD', name: 'North Macedonia', region: 'Europe', subregion: 'Southern Europe' },
    { code: 'NOR', name: 'Norway', region: 'Europe', subregion: 'Northern Europe' },
    { code: 'OMN', name: 'Oman', region: 'Asia', subregion: 'Western Asia' },
    { code: 'PAK', name: 'Pakistan', region: 'Asia', subregion: 'Southern Asia' },
    { code: 'PLW', name: 'Palau', region: 'Oceania', subregion: 'Micronesia' },
    { code: 'PAN', name: 'Panama', region: 'Americas', subregion: 'Central America' },
    { code: 'PNG', name: 'Papua New Guinea', region: 'Oceania', subregion: 'Melanesia' },
    { code: 'PRY', name: 'Paraguay', region: 'Americas', subregion: 'South America' },
    { code: 'PER', name: 'Peru', region: 'Americas', subregion: 'South America' },
    { code: 'PHL', name: 'Philippines', region: 'Asia', subregion: 'South-Eastern Asia' },
    { code: 'POL', name: 'Poland', region: 'Europe', subregion: 'Central Europe' },
    { code: 'PRT', name: 'Portugal', region: 'Europe', subregion: 'Southern Europe' },
    { code: 'QAT', name: 'Qatar', region: 'Asia', subregion: 'Western Asia' },
    { code: 'ROU', name: 'Romania', region: 'Europe', subregion: 'Eastern Europe' },
    { code: 'RUS', name: 'Russia', region: 'Europe', subregion: 'Eastern Europe' },
    { code: 'RWA', name: 'Rwanda', region: 'Africa', subregion: 'Eastern Africa' },
    { code: 'KNA', name: 'Saint Kitts and Nevis', region: 'Americas', subregion: 'Caribbean' },
    { code: 'LCA', name: 'Saint Lucia', region: 'Americas', subregion: 'Caribbean' },
    { code: 'VCT', name: 'Saint Vincent and the Grenadines', region: 'Americas', subregion: 'Caribbean' },
    { code: 'WSM', name: 'Samoa', region: 'Oceania', subregion: 'Polynesia' },
    { code: 'SMR', name: 'San Marino', region: 'Europe', subregion: 'Southern Europe' },
    { code: 'STP', name: 'São Tomé and Príncipe', region: 'Africa', subregion: 'Middle Africa' },
    { code: 'SAU', name: 'Saudi Arabia', region: 'Asia', subregion: 'Western Asia' },
    { code: 'SEN', name: 'Senegal', region: 'Africa', subregion: 'Western Africa' },
    { code: 'SRB', name: 'Serbia', region: 'Europe', subregion: 'Southern Europe' },
    { code: 'SYC', name: 'Seychelles', region: 'Africa', subregion: 'Eastern Africa' },
    { code: 'SLE', name: 'Sierra Leone', region: 'Africa', subregion: 'Western Africa' },
    { code: 'SGP', name: 'Singapore', region: 'Asia', subregion: 'South-Eastern Asia' },
    { code: 'SVK', name: 'Slovakia', region: 'Europe', subregion: 'Central Europe' },
    { code: 'SVN', name: 'Slovenia', region: 'Europe', subregion: 'Southern Europe' },
    { code: 'SLB', name: 'Solomon Islands', region: 'Oceania', subregion: 'Melanesia' },
    { code: 'SOM', name: 'Somalia', region: 'Africa', subregion: 'Eastern Africa' },
    { code: 'ZAF', name: 'South Africa', region: 'Africa', subregion: 'Southern Africa' },
    { code: 'SSD', name: 'South Sudan', region: 'Africa', subregion: 'Eastern Africa' },
    { code: 'ESP', name: 'Spain', region: 'Europe', subregion: 'Southern Europe' },
    { code: 'LKA', name: 'Sri Lanka', region: 'Asia', subregion: 'Southern Asia' },
    { code: 'SDN', name: 'Sudan', region: 'Africa', subregion: 'Northern Africa' },
    { code: 'SUR', name: 'Suriname', region: 'Americas', subregion: 'South America' },
    { code: 'SWE', name: 'Sweden', region: 'Europe', subregion: 'Northern Europe' },
    { code: 'CHE', name: 'Switzerland', region: 'Europe', subregion: 'Western Europe' },
    { code: 'SYR', name: 'Syria', region: 'Asia', subregion: 'Western Asia' },
    { code: 'TWN', name: 'Taiwan', region: 'Asia', subregion: 'Eastern Asia' },
    { code: 'TJK', name: 'Tajikistan', region: 'Asia', subregion: 'Central Asia' },
    { code: 'TZA', name: 'Tanzania', region: 'Africa', subregion: 'Eastern Africa' },
    { code: 'THA', name: 'Thailand', region: 'Asia', subregion: 'South-Eastern Asia' },
    { code: 'TLS', name: 'Timor-Leste', region: 'Asia', subregion: 'South-Eastern Asia' },
    { code: 'TGO', name: 'Togo', region: 'Africa', subregion: 'Western Africa' },
    { code: 'TON', name: 'Tonga', region: 'Oceania', subregion: 'Polynesia' },
    { code: 'TTO', name: 'Trinidad and Tobago', region: 'Americas', subregion: 'Caribbean' },
    { code: 'TUN', name: 'Tunisia', region: 'Africa', subregion: 'Northern Africa' },
    { code: 'TUR', name: 'Turkey', region: 'Asia', subregion: 'Western Asia' },
    { code: 'TKM', name: 'Turkmenistan', region: 'Asia', subregion: 'Central Asia' },
    { code: 'TUV', name: 'Tuvalu', region: 'Oceania', subregion: 'Polynesia' },
    { code: 'UGA', name: 'Uganda', region: 'Africa', subregion: 'Eastern Africa' },
    { code: 'UKR', name: 'Ukraine', region: 'Europe', subregion: 'Eastern Europe' },
    { code: 'ARE', name: 'United Arab Emirates', region: 'Asia', subregion: 'Western Asia' },
    { code: 'GBR', name: 'United Kingdom', region: 'Europe', subregion: 'Northern Europe' },
    { code: 'USA', name: 'United States', region: 'Americas', subregion: 'North America' },
    { code: 'URY', name: 'Uruguay', region: 'Americas', subregion: 'South America' },
    { code: 'UZB', name: 'Uzbekistan', region: 'Asia', subregion: 'Central Asia' },
    { code: 'VUT', name: 'Vanuatu', region: 'Oceania', subregion: 'Melanesia' },
    { code: 'VAT', name: 'Vatican City', region: 'Europe', subregion: 'Southern Europe' },
    { code: 'VEN', name: 'Venezuela', region: 'Americas', subregion: 'South America' },
    { code: 'VNM', name: 'Vietnam', region: 'Asia', subregion: 'South-Eastern Asia' },
    { code: 'YEM', name: 'Yemen', region: 'Asia', subregion: 'Western Asia' },
    { code: 'ZMB', name: 'Zambia', region: 'Africa', subregion: 'Eastern Africa' },
    { code: 'ZWE', name: 'Zimbabwe', region: 'Africa', subregion: 'Eastern Africa' }
];

// International Organizations
const ORGANIZATIONS = {
    UN: {
        name: 'United Nations',
        fullName: 'United Nations',
        founded: 1945,
        headquarters: 'New York, USA',
        members: 193,
        description: 'Global organization for international cooperation, peace, and security',
        type: 'global',
        color: '#009edb',
        logo: 'un-logo.png',
        memberCodes: ['ALL'] // All recognized countries
    },
    G20: {
        name: 'G20',
        fullName: 'Group of Twenty',
        founded: 1999,
        headquarters: 'Rotating',
        members: 20,
        description: 'Forum for international economic cooperation among major economies',
        type: 'economic',
        color: '#1e3a5f',
        memberCodes: ['ARG', 'AUS', 'BRA', 'CAN', 'CHN', 'FRA', 'DEU', 'IND', 'IDN', 'ITA', 'JPN', 'MEX', 'RUS', 'SAU', 'ZAF', 'KOR', 'TUR', 'GBR', 'USA', 'EU']
    },
    G7: {
        name: 'G7',
        fullName: 'Group of Seven',
        founded: 1975,
        headquarters: 'Rotating',
        members: 7,
        description: 'Forum of major advanced economies discussing global policy',
        type: 'economic',
        color: '#003366',
        memberCodes: ['CAN', 'FRA', 'DEU', 'ITA', 'JPN', 'GBR', 'USA']
    },
    BRICS: {
        name: 'BRICS+',
        fullName: 'BRICS Plus',
        founded: 2009,
        headquarters: 'Rotating',
        members: 10,
        description: 'Association of major emerging economies',
        type: 'economic',
        color: '#2d8f6f',
        memberCodes: ['BRA', 'RUS', 'IND', 'CHN', 'ZAF', 'EGY', 'ETH', 'IRN', 'SAU', 'ARE']
    },
    SCO: {
        name: 'SCO',
        fullName: 'Shanghai Cooperation Organisation',
        founded: 2001,
        headquarters: 'Beijing, China',
        members: 10,
        description: 'Eurasian political, economic, and security organization',
        type: 'political',
        color: '#0066b3',
        memberCodes: ['CHN', 'IND', 'IRN', 'KAZ', 'KGZ', 'PAK', 'RUS', 'TJK', 'UZB', 'BLR']
    },
    SAARC: {
        name: 'SAARC',
        fullName: 'South Asian Association for Regional Cooperation',
        founded: 1985,
        headquarters: 'Kathmandu, Nepal',
        members: 8,
        description: 'Regional intergovernmental organization for South Asia',
        type: 'regional',
        color: '#ff6b35',
        memberCodes: ['AFG', 'BGD', 'BTN', 'IND', 'MDV', 'NPL', 'PAK', 'LKA']
    },
    ASEAN: {
        name: 'ASEAN',
        fullName: 'Association of Southeast Asian Nations',
        founded: 1967,
        headquarters: 'Jakarta, Indonesia',
        members: 10,
        description: 'Political and economic union of Southeast Asian states',
        type: 'regional',
        color: '#003399',
        memberCodes: ['BRN', 'KHM', 'IDN', 'LAO', 'MYS', 'MMR', 'PHL', 'SGP', 'THA', 'VNM']
    },
    EU: {
        name: 'EU',
        fullName: 'European Union',
        founded: 1993,
        headquarters: 'Brussels, Belgium',
        members: 27,
        description: 'Political and economic union of European states',
        type: 'regional',
        color: '#003399',
        memberCodes: ['AUT', 'BEL', 'BGR', 'HRV', 'CYP', 'CZE', 'DNK', 'EST', 'FIN', 'FRA', 'DEU', 'GRC', 'HUN', 'IRL', 'ITA', 'LVA', 'LTU', 'LUX', 'MLT', 'NLD', 'POL', 'PRT', 'ROU', 'SVK', 'SVN', 'ESP', 'SWE']
    },
    NATO: {
        name: 'NATO',
        fullName: 'North Atlantic Treaty Organization',
        founded: 1949,
        headquarters: 'Brussels, Belgium',
        members: 32,
        description: 'Intergovernmental military alliance',
        type: 'military',
        color: '#004990',
        memberCodes: ['ALB', 'BEL', 'BGR', 'CAN', 'HRV', 'CZE', 'DNK', 'EST', 'FIN', 'FRA', 'DEU', 'GRC', 'HUN', 'ISL', 'ITA', 'LVA', 'LTU', 'LUX', 'MNE', 'NLD', 'MKD', 'NOR', 'POL', 'PRT', 'ROU', 'SVK', 'SVN', 'ESP', 'SWE', 'TUR', 'GBR', 'USA']
    },
    AU: {
        name: 'AU',
        fullName: 'African Union',
        founded: 2002,
        headquarters: 'Addis Ababa, Ethiopia',
        members: 55,
        description: 'Continental union of African states',
        type: 'regional',
        color: '#008751',
        memberCodes: ['DZA', 'AGO', 'BEN', 'BWA', 'BFA', 'BDI', 'CPV', 'CMR', 'CAF', 'TCD', 'COM', 'COD', 'COG', 'CIV', 'DJI', 'EGY', 'GNQ', 'ERI', 'SWZ', 'ETH', 'GAB', 'GMB', 'GHA', 'GIN', 'GNB', 'KEN', 'LSO', 'LBR', 'LBY', 'MDG', 'MWI', 'MLI', 'MRT', 'MUS', 'MAR', 'MOZ', 'NAM', 'NER', 'NGA', 'RWA', 'STP', 'SEN', 'SYC', 'SLE', 'SOM', 'ZAF', 'SSD', 'SDN', 'TZA', 'TGO', 'TUN', 'UGA', 'ZMB', 'ZWE']
    },
    WTO: {
        name: 'WTO',
        fullName: 'World Trade Organization',
        founded: 1995,
        headquarters: 'Geneva, Switzerland',
        members: 164,
        description: 'Intergovernmental organization regulating international trade',
        type: 'trade',
        color: '#1a5276'
    },
    WHO: {
        name: 'WHO',
        fullName: 'World Health Organization',
        founded: 1948,
        headquarters: 'Geneva, Switzerland',
        members: 194,
        description: 'United Nations agency for international public health',
        type: 'health',
        color: '#009cde'
    },
    QUAD: {
        name: 'QUAD',
        fullName: 'Quadrilateral Security Dialogue',
        founded: 2007,
        headquarters: 'None (informal)',
        members: 4,
        description: 'Strategic security dialogue between Indo-Pacific democracies',
        type: 'security',
        color: '#1a365d',
        memberCodes: ['AUS', 'IND', 'JPN', 'USA']
    },
    AIIB: {
        name: 'AIIB',
        fullName: 'Asian Infrastructure Investment Bank',
        founded: 2016,
        headquarters: 'Beijing, China',
        members: 109,
        description: 'Multilateral development bank for Asia infrastructure',
        type: 'financial',
        color: '#003366'
    },
    OPEC: {
        name: 'OPEC',
        fullName: 'Organization of the Petroleum Exporting Countries',
        founded: 1960,
        headquarters: 'Vienna, Austria',
        members: 13,
        description: 'Intergovernmental organization coordinating petroleum policies',
        type: 'economic',
        color: '#1a5276',
        memberCodes: ['DZA', 'AGO', 'COG', 'GNQ', 'GAB', 'IRN', 'IRQ', 'KWT', 'LBY', 'NGA', 'SAU', 'ARE', 'VEN']
    }
};

// =====================================================
// UTILITY FUNCTIONS
// =====================================================

/**
 * Debounce function to limit execution rate
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Throttle function to limit execution rate
 */
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * Format large numbers with suffixes (K, M, B, T)
 */
function formatNumber(num, decimals = 1) {
    if (num === null || num === undefined) return 'N/A';
    if (num < 1000) return num.toString();
    
    const suffixes = ['', 'K', 'M', 'B', 'T'];
    const tier = Math.floor(Math.log10(Math.abs(num)) / 3);
    
    if (tier === 0) return num.toString();
    
    const suffix = suffixes[tier];
    const scale = Math.pow(10, tier * 3);
    const scaled = num / scale;
    
    return scaled.toFixed(decimals) + suffix;
}

/**
 * Format currency with proper symbol and formatting
 */
function formatCurrency(amount, currency = 'USD', locale = 'en-US') {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
    }).format(amount);
}

/**
 * Format percentage
 */
function formatPercentage(value, decimals = 1) {
    if (value === null || value === undefined) return 'N/A';
    return `${value >= 0 ? '+' : ''}${value.toFixed(decimals)}%`;
}

/**
 * Get flag URL for a country
 */
function getFlagUrl(countryCode, size = 'w320') {
    const code = countryCode.toLowerCase().substring(0, 2);
    return `https://flagcdn.com/${size}/${code}.png`;
}

/**
 * Get flag emoji for a country
 */
function getFlagEmoji(countryCode) {
    const code = countryCode.toUpperCase().substring(0, 2);
    const codePoints = code.split('').map(char => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
}

/**
 * Get country by code
 */
function getCountryByCode(code) {
    return COUNTRIES.find(c => c.code === code.toUpperCase());
}

/**
 * Get countries by region
 */
function getCountriesByRegion(region) {
    return COUNTRIES.filter(c => c.region === region);
}

/**
 * Get organizations a country belongs to
 */
function getCountryOrganizations(countryCode) {
    const orgs = [];
    for (const [key, org] of Object.entries(ORGANIZATIONS)) {
        if (org.memberCodes && (org.memberCodes.includes(countryCode) || org.memberCodes.includes('ALL'))) {
            orgs.push({ id: key, ...org });
        }
    }
    return orgs;
}

/**
 * Generate a unique relationship ID (using n(n-1)/2 formula - A-B = B-A)
 */
function getRelationshipId(country1, country2) {
    const codes = [country1, country2].sort();
    return `${codes[0]}_${codes[1]}`;
}

/**
 * Local storage helper with expiration
 */
const Storage = {
    set(key, value, expirationMs = CONFIG.CACHE_DURATION) {
        const item = {
            value: value,
            expiry: Date.now() + expirationMs
        };
        localStorage.setItem(key, JSON.stringify(item));
    },
    
    get(key) {
        const itemStr = localStorage.getItem(key);
        if (!itemStr) return null;
        
        try {
            const item = JSON.parse(itemStr);
            if (Date.now() > item.expiry) {
                localStorage.removeItem(key);
                return null;
            }
            return item.value;
        } catch (e) {
            return null;
        }
    },
    
    remove(key) {
        localStorage.removeItem(key);
    },
    
    clear() {
        localStorage.clear();
    }
};

/**
 * Animate counter from 0 to target value
 */
function animateCounter(element, target, duration = 2000, prefix = '', suffix = '') {
    const start = 0;
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function (ease-out-quart)
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        const current = Math.round(start + (target - start) * easeProgress);
        
        element.textContent = prefix + formatNumber(current) + suffix;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

/**
 * Intersection Observer for scroll animations
 */
function createScrollObserver(callback, options = {}) {
    const defaultOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    return new IntersectionObserver(callback, { ...defaultOptions, ...options });
}

/**
 * Smooth scroll to element
 */
function scrollToElement(element, offset = 80) {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;
    
    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

// =====================================================
// DATA MANAGER CLASS
// =====================================================

class DataManager {
    constructor() {
        this.cache = new Map();
        this.loadingPromises = new Map();
        this.baseUrl = './countries/';
    }
    
    /**
     * Load country data
     */
    async loadCountryData(countryCode) {
        const cacheKey = `country_${countryCode}`;
        
        // Check memory cache
        if (this.cache.has(cacheKey)) {
            return this.cache.get(cacheKey);
        }
        
        // Check localStorage cache
        const cachedData = Storage.get(cacheKey);
        if (cachedData) {
            this.cache.set(cacheKey, cachedData);
            return cachedData;
        }
        
        // Check if already loading
        if (this.loadingPromises.has(cacheKey)) {
            return this.loadingPromises.get(cacheKey);
        }
        
        // Fetch data
        const loadPromise = this.fetchCountryData(countryCode);
        this.loadingPromises.set(cacheKey, loadPromise);
        
        try {
            const data = await loadPromise;
            this.cache.set(cacheKey, data);
            Storage.set(cacheKey, data);
            return data;
        } finally {
            this.loadingPromises.delete(cacheKey);
        }
    }
    
    /**
     * Fetch country data from JSON file
     */
    async fetchCountryData(countryCode) {
        const code = countryCode.toLowerCase();
        const url = `${this.baseUrl}${code}.json`;
        
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error(`Error loading data for ${countryCode}:`, error);
            // Return fallback data structure
            return this.getFallbackCountryData(countryCode);
        }
    }
    
    /**
     * Get fallback country data when file is not available
     */
    getFallbackCountryData(countryCode) {
        const country = getCountryByCode(countryCode);
        return {
            country_code: countryCode,
            country_name: country ? country.name : countryCode,
            last_updated: new Date().toISOString(),
            data_sources: ['Fallback data - actual data loading...'],
            foreign_policy: {
                core_principles: ['Data loading...'],
                key_priorities: ['Data loading...'],
                strategic_vision: 'Data loading...'
            },
            relationships: {}
        };
    }
    
    /**
     * Load relationship data between two countries
     */
    async loadRelationshipData(country1, country2) {
        const data1 = await this.loadCountryData(country1);
        const relationshipKey = country2.toUpperCase();
        
        if (data1.relationships && data1.relationships[relationshipKey]) {
            return data1.relationships[relationshipKey];
        }
        
        // Try loading from the other country's file
        const data2 = await this.loadCountryData(country2);
        const reverseKey = country1.toUpperCase();
        
        if (data2.relationships && data2.relationships[reverseKey]) {
            return data2.relationships[reverseKey];
        }
        
        return null;
    }
    
    /**
     * Get all countries with relationships for a specific country
     */
    async getRelatedCountries(countryCode) {
        const data = await this.loadCountryData(countryCode);
        if (!data.relationships) return [];
        
        return Object.keys(data.relationships).map(code => {
            const country = getCountryByCode(code);
            const relationship = data.relationships[code];
            return {
                code: code,
                name: country ? country.name : code,
                region: country ? country.region : 'Unknown',
                relationStrength: relationship.relation_strength || 5,
                relationType: relationship.relation_type || 'Neutral'
            };
        });
    }
    
    /**
     * Clear all cached data
     */
    clearCache() {
        this.cache.clear();
        // Clear localStorage items starting with 'country_'
        for (let i = localStorage.length - 1; i >= 0; i--) {
            const key = localStorage.key(i);
            if (key && key.startsWith('country_')) {
                localStorage.removeItem(key);
            }
        }
    }
}

// Global data manager instance
const dataManager = new DataManager();

// =====================================================
// NAVIGATION CLASS
// =====================================================

class Navigation {
    constructor() {
        this.nav = document.querySelector('.nav');
        this.navToggle = document.querySelector('.nav-toggle');
        this.navMenu = document.querySelector('.nav-menu');
        this.lastScrollY = 0;
        this.isScrolled = false;
        
        this.init();
    }
    
    init() {
        this.setupScrollListener();
        this.setupMobileToggle();
        this.setupBackButton();
        this.highlightCurrentPage();
    }
    
    setupScrollListener() {
        window.addEventListener('scroll', throttle(() => {
            const currentScrollY = window.scrollY;
            
            // Add scrolled class when past threshold
            if (currentScrollY > 50) {
                if (!this.isScrolled) {
                    this.nav?.classList.add('scrolled');
                    this.isScrolled = true;
                }
            } else {
                if (this.isScrolled) {
                    this.nav?.classList.remove('scrolled');
                    this.isScrolled = false;
                }
            }
            
            this.lastScrollY = currentScrollY;
        }, 100));
    }
    
    setupMobileToggle() {
        this.navToggle?.addEventListener('click', () => {
            this.navToggle.classList.toggle('active');
            this.navMenu?.classList.toggle('active');
            document.body.classList.toggle('nav-open');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.nav?.contains(e.target) && this.navMenu?.classList.contains('active')) {
                this.navToggle?.classList.remove('active');
                this.navMenu?.classList.remove('active');
                document.body.classList.remove('nav-open');
            }
        });
    }
    
    setupBackButton() {
        const backButtons = document.querySelectorAll('.back-button');
        backButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const href = btn.getAttribute('href');
                if (href) {
                    this.navigateTo(href);
                } else {
                    window.history.back();
                }
            });
        });
    }
    
    highlightCurrentPage() {
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href && currentPath.includes(href)) {
                link.classList.add('active');
            }
        });
    }
    
    navigateTo(url) {
        // Add page transition animation
        const transition = document.createElement('div');
        transition.className = 'page-transition active';
        transition.innerHTML = `
            <div class="page-transition-layer"></div>
            <div class="page-transition-layer"></div>
            <div class="page-transition-layer"></div>
        `;
        document.body.appendChild(transition);
        
        setTimeout(() => {
            window.location.href = url;
        }, 600);
    }
}

// =====================================================
// SEARCH CLASS
// =====================================================

class CountrySearch {
    constructor(inputSelector, resultsSelector, onSelect) {
        this.input = document.querySelector(inputSelector);
        this.results = document.querySelector(resultsSelector);
        this.onSelect = onSelect;
        this.selectedIndex = -1;
        this.filteredCountries = [];
        
        if (this.input) {
            this.init();
        }
    }
    
    init() {
        this.input.addEventListener('input', debounce(() => this.handleSearch(), CONFIG.DEBOUNCE_DELAY));
        this.input.addEventListener('keydown', (e) => this.handleKeydown(e));
        this.input.addEventListener('focus', () => this.handleFocus());
        
        // Close on click outside
        document.addEventListener('click', (e) => {
            if (!this.input.contains(e.target) && !this.results?.contains(e.target)) {
                this.hideResults();
            }
        });
    }
    
    handleSearch() {
        const query = this.input.value.toLowerCase().trim();
        
        if (query.length < 1) {
            this.hideResults();
            return;
        }
        
        this.filteredCountries = COUNTRIES.filter(country => 
            country.name.toLowerCase().includes(query) ||
            country.code.toLowerCase().includes(query) ||
            country.region.toLowerCase().includes(query)
        ).slice(0, 10);
        
        this.renderResults();
    }
    
    handleFocus() {
        if (this.input.value.length > 0 && this.filteredCountries.length > 0) {
            this.showResults();
        }
    }
    
    handleKeydown(e) {
        if (!this.results || this.filteredCountries.length === 0) return;
        
        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                this.selectedIndex = Math.min(this.selectedIndex + 1, this.filteredCountries.length - 1);
                this.updateSelection();
                break;
            case 'ArrowUp':
                e.preventDefault();
                this.selectedIndex = Math.max(this.selectedIndex - 1, 0);
                this.updateSelection();
                break;
            case 'Enter':
                e.preventDefault();
                if (this.selectedIndex >= 0) {
                    this.selectCountry(this.filteredCountries[this.selectedIndex]);
                }
                break;
            case 'Escape':
                this.hideResults();
                break;
        }
    }
    
    renderResults() {
        if (!this.results) return;
        
        if (this.filteredCountries.length === 0) {
            this.results.innerHTML = `
                <div class="search-no-results">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    <span>No countries found</span>
                </div>
            `;
            this.showResults();
            return;
        }
        
        this.results.innerHTML = this.filteredCountries.map((country, index) => `
            <div class="search-result-item ${index === this.selectedIndex ? 'selected' : ''}" 
                 data-code="${country.code}">
                <img src="${getFlagUrl(country.code, 'w40')}" 
                     alt="${country.name}" 
                     class="search-result-flag"
                     loading="lazy">
                <div class="search-result-info">
                    <span class="search-result-name">${this.highlightMatch(country.name, this.input.value)}</span>
                    <span class="search-result-region">${country.region} • ${country.code}</span>
                </div>
            </div>
        `).join('');
        
        // Add click handlers
        this.results.querySelectorAll('.search-result-item').forEach(item => {
            item.addEventListener('click', () => {
                const code = item.dataset.code;
                const country = COUNTRIES.find(c => c.code === code);
                if (country) {
                    this.selectCountry(country);
                }
            });
        });
        
        this.showResults();
    }
    
    highlightMatch(text, query) {
        if (!query) return text;
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<mark>$1</mark>');
    }
    
    updateSelection() {
        if (!this.results) return;
        
        const items = this.results.querySelectorAll('.search-result-item');
        items.forEach((item, index) => {
            item.classList.toggle('selected', index === this.selectedIndex);
        });
        
        // Scroll selected item into view
        const selectedItem = items[this.selectedIndex];
        if (selectedItem) {
            selectedItem.scrollIntoView({ block: 'nearest' });
        }
    }
    
    selectCountry(country) {
        this.input.value = country.name;
        this.hideResults();
        
        if (this.onSelect) {
            this.onSelect(country);
        }
    }
    
    showResults() {
        this.results?.classList.add('active');
    }
    
    hideResults() {
        this.results?.classList.remove('active');
        this.selectedIndex = -1;
    }
}

// =====================================================
// COUNTRY GRID CLASS
// =====================================================

class CountryGrid {
    constructor(containerSelector, options = {}) {
        this.container = document.querySelector(containerSelector);
        this.options = {
            itemsPerPage: options.itemsPerPage || 50,
            showRegionFilter: options.showRegionFilter !== false,
            onCountryClick: options.onCountryClick || null,
            ...options
        };
        this.currentPage = 1;
        this.currentFilter = 'all';
        this.filteredCountries = [...COUNTRIES];
        
        if (this.container) {
            this.init();
        }
    }
    
    init() {
        this.render();
        this.setupInfiniteScroll();
    }
    
    render() {
        const startIndex = 0;
        const endIndex = this.currentPage * this.options.itemsPerPage;
        const visibleCountries = this.filteredCountries.slice(startIndex, endIndex);
        
        this.container.innerHTML = visibleCountries.map(country => `
            <a href="country.html?c=${country.code}" 
               class="country-card" 
               data-code="${country.code}"
               data-region="${country.region}">
                <div class="country-flag">
                    <img src="${getFlagUrl(country.code)}" 
                         alt="${country.name} flag"
                         loading="lazy"
                         onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 3 2%22><rect fill=%22%23ccc%22 width=%223%22 height=%222%22/></svg>'">
                </div>
                <span class="country-name">${country.name}</span>
                <span class="country-code">${country.code}</span>
            </a>
        `).join('');
        
        // Add click handlers
        if (this.options.onCountryClick) {
            this.container.querySelectorAll('.country-card').forEach(card => {
                card.addEventListener('click', (e) => {
                    e.preventDefault();
                    const code = card.dataset.code;
                    const country = COUNTRIES.find(c => c.code === code);
                    this.options.onCountryClick(country);
                });
            });
        }
        
        // Animate cards in
        this.animateCards();
    }
    
    filterByRegion(region) {
        this.currentFilter = region;
        this.currentPage = 1;
        
        if (region === 'all') {
            this.filteredCountries = [...COUNTRIES];
        } else {
            this.filteredCountries = COUNTRIES.filter(c => c.region === region);
        }
        
        this.render();
    }
    
    filterBySearch(query) {
        this.currentPage = 1;
        const q = query.toLowerCase().trim();
        
        if (!q) {
            this.filteredCountries = this.currentFilter === 'all' 
                ? [...COUNTRIES]
                : COUNTRIES.filter(c => c.region === this.currentFilter);
        } else {
            this.filteredCountries = COUNTRIES.filter(country => {
                const matchesQuery = country.name.toLowerCase().includes(q) ||
                                    country.code.toLowerCase().includes(q);
                const matchesRegion = this.currentFilter === 'all' || 
                                     country.region === this.currentFilter;
                return matchesQuery && matchesRegion;
            });
        }
        
        this.render();
    }
    
    loadMore() {
        const totalPages = Math.ceil(this.filteredCountries.length / this.options.itemsPerPage);
        if (this.currentPage < totalPages) {
            this.currentPage++;
            this.render();
        }
    }
    
    setupInfiniteScroll() {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                this.loadMore();
            }
        }, { rootMargin: '100px' });
        
        // Create sentinel element
        const sentinel = document.createElement('div');
        sentinel.className = 'grid-sentinel';
        this.container.parentNode?.appendChild(sentinel);
        observer.observe(sentinel);
    }
    
    animateCards() {
        const cards = this.container.querySelectorAll('.country-card');
        cards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.02}s`;
            card.classList.add('animate-scale-in');
        });
    }
}

// =====================================================
// SCROLL ANIMATIONS
// =====================================================

class ScrollAnimations {
    constructor() {
        this.observer = null;
        this.init();
    }
    
    init() {
        this.observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('aos-animate');
                        
                        // Animate counters if present
                        const counters = entry.target.querySelectorAll('[data-counter]');
                        counters.forEach(counter => {
                            const target = parseInt(counter.dataset.counter, 10);
                            const prefix = counter.dataset.prefix || '';
                            const suffix = counter.dataset.suffix || '';
                            animateCounter(counter, target, 2000, prefix, suffix);
                        });
                    }
                });
            },
            {
                rootMargin: '0px 0px -10% 0px',
                threshold: 0.1
            }
        );
        
        // Observe all elements with data-aos attribute
        document.querySelectorAll('[data-aos]').forEach(el => {
            this.observer.observe(el);
        });
    }
    
    refresh() {
        document.querySelectorAll('[data-aos]:not(.aos-animate)').forEach(el => {
            this.observer.observe(el);
        });
    }
}

// =====================================================
// MODAL CLASS
// =====================================================

class Modal {
    constructor(options = {}) {
        this.options = {
            closeOnOverlay: true,
            closeOnEscape: true,
            ...options
        };
        this.overlay = null;
        this.modal = null;
        this.isOpen = false;
    }
    
    open(content, title = '') {
        this.createModal(content, title);
        document.body.appendChild(this.overlay);
        
        // Force reflow
        this.overlay.offsetHeight;
        
        this.overlay.classList.add('active');
        this.isOpen = true;
        document.body.style.overflow = 'hidden';
        
        // Focus trap
        this.modal.querySelector('.modal-close')?.focus();
    }
    
    close() {
        if (!this.isOpen) return;
        
        this.overlay.classList.remove('active');
        
        setTimeout(() => {
            this.overlay.remove();
            this.isOpen = false;
            document.body.style.overflow = '';
        }, 300);
    }
    
    createModal(content, title) {
        this.overlay = document.createElement('div');
        this.overlay.className = 'modal-overlay';
        
        this.overlay.innerHTML = `
            <div class="modal">
                <div class="modal-header">
                    <h3 class="modal-title">${title}</h3>
                    <button class="modal-close" aria-label="Close modal">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
                <div class="modal-body">${content}</div>
            </div>
        `;
        
        this.modal = this.overlay.querySelector('.modal');
        
        // Event listeners
        this.overlay.querySelector('.modal-close').addEventListener('click', () => this.close());
        
        if (this.options.closeOnOverlay) {
            this.overlay.addEventListener('click', (e) => {
                if (e.target === this.overlay) {
                    this.close();
                }
            });
        }
        
        if (this.options.closeOnEscape) {
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && this.isOpen) {
                    this.close();
                }
            });
        }
    }
}

// =====================================================
// TOAST NOTIFICATIONS
// =====================================================

class Toast {
    static container = null;
    
    static init() {
        if (!Toast.container) {
            Toast.container = document.createElement('div');
            Toast.container.className = 'toast-container';
            Toast.container.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 9999;
                display: flex;
                flex-direction: column;
                gap: 10px;
            `;
            document.body.appendChild(Toast.container);
        }
    }
    
    static show(message, type = 'info', duration = 3000) {
        Toast.init();
        
        const toast = document.createElement('div');
        toast.className = `toast toast-${type} toast-enter`;
        toast.innerHTML = `
            <div class="toast-icon">
                ${Toast.getIcon(type)}
            </div>
            <div class="toast-message">${message}</div>
            <button class="toast-close">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        `;
        
        toast.style.cssText = `
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 16px 20px;
            background: var(--bg-secondary);
            border: 1px solid var(--border-light);
            border-radius: var(--radius-xl);
            box-shadow: var(--shadow-lg);
            min-width: 300px;
            max-width: 450px;
        `;
        
        Toast.container.appendChild(toast);
        
        // Close button
        toast.querySelector('.toast-close').addEventListener('click', () => {
            Toast.dismiss(toast);
        });
        
        // Auto dismiss
        if (duration > 0) {
            setTimeout(() => Toast.dismiss(toast), duration);
        }
        
        return toast;
    }
    
    static dismiss(toast) {
        toast.classList.remove('toast-enter');
        toast.classList.add('toast-exit');
        setTimeout(() => toast.remove(), 300);
    }
    
    static getIcon(type) {
        const icons = {
            success: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>',
            error: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>',
            warning: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>',
            info: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>'
        };
        return icons[type] || icons.info;
    }
    
    static success(message, duration) {
        return Toast.show(message, 'success', duration);
    }
    
    static error(message, duration) {
        return Toast.show(message, 'error', duration);
    }
    
    static warning(message, duration) {
        return Toast.show(message, 'warning', duration);
    }
    
    static info(message, duration) {
        return Toast.show(message, 'info', duration);
    }
}

// =====================================================
// PARTICLES ANIMATION
// =====================================================

class ParticlesBackground {
    constructor(containerSelector, options = {}) {
        this.container = document.querySelector(containerSelector);
        this.options = {
            particleCount: options.particleCount || 50,
            colors: options.colors || ['rgba(59, 130, 246, 0.5)', 'rgba(34, 197, 94, 0.5)', 'rgba(249, 115, 22, 0.5)'],
            minSize: options.minSize || 2,
            maxSize: options.maxSize || 6,
            minDuration: options.minDuration || 10,
            maxDuration: options.maxDuration || 25,
            ...options
        };
        
        if (this.container) {
            this.init();
        }
    }
    
    init() {
        for (let i = 0; i < this.options.particleCount; i++) {
            this.createParticle();
        }
    }
    
    createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = this.random(this.options.minSize, this.options.maxSize);
        const color = this.options.colors[Math.floor(Math.random() * this.options.colors.length)];
        const duration = this.random(this.options.minDuration, this.options.maxDuration);
        const left = this.random(0, 100);
        const drift = this.random(-100, 100);
        const delay = this.random(0, duration);
        const opacity = this.random(0.3, 0.7);
        
        particle.style.cssText = `
            --size: ${size}px;
            --color: ${color};
            --duration: ${duration}s;
            --drift: ${drift}px;
            --opacity: ${opacity};
            left: ${left}%;
            animation-delay: -${delay}s;
        `;
        
        this.container.appendChild(particle);
    }
    
    random(min, max) {
        return Math.random() * (max - min) + min;
    }
}

// =====================================================
// TYPING ANIMATION
// =====================================================

class TypeWriter {
    constructor(element, texts, options = {}) {
        this.element = typeof element === 'string' ? document.querySelector(element) : element;
        this.texts = Array.isArray(texts) ? texts : [texts];
        this.options = {
            typeSpeed: options.typeSpeed || 50,
            deleteSpeed: options.deleteSpeed || 30,
            pauseTime: options.pauseTime || 2000,
            loop: options.loop !== false,
            cursor: options.cursor !== false,
            ...options
        };
        
        this.textIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
        
        if (this.element) {
            this.init();
        }
    }
    
    init() {
        if (this.options.cursor) {
            this.element.classList.add('typewriter');
            this.element.style.borderRight = '2px solid var(--primary-400)';
        }
        this.type();
    }
    
    type() {
        const currentText = this.texts[this.textIndex];
        
        if (this.isDeleting) {
            this.element.textContent = currentText.substring(0, this.charIndex - 1);
            this.charIndex--;
        } else {
            this.element.textContent = currentText.substring(0, this.charIndex + 1);
            this.charIndex++;
        }
        
        let typeSpeed = this.isDeleting ? this.options.deleteSpeed : this.options.typeSpeed;
        
        if (!this.isDeleting && this.charIndex === currentText.length) {
            typeSpeed = this.options.pauseTime;
            this.isDeleting = true;
        } else if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.textIndex = (this.textIndex + 1) % this.texts.length;
            
            if (!this.options.loop && this.textIndex === 0) {
                return;
            }
            
            typeSpeed = 500;
        }
        
        setTimeout(() => this.type(), typeSpeed);
    }
}

// =====================================================
// INITIALIZATION
// =====================================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize navigation
    window.navigation = new Navigation();
    
    // Initialize scroll animations
    window.scrollAnimations = new ScrollAnimations();
    
    // Initialize particles if container exists
    const particlesContainer = document.querySelector('.hero-particles');
    if (particlesContainer) {
        new ParticlesBackground('.hero-particles', {
            particleCount: 30
        });
    }
    
    // Initialize country grid if container exists
    const countryGridContainer = document.querySelector('.country-grid');
    if (countryGridContainer) {
        window.countryGrid = new CountryGrid('.country-grid', {
            onCountryClick: (country) => {
                window.location.href = `country.html?c=${country.code}`;
            }
        });
    }
    
    // Initialize search if input exists
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        window.countrySearch = new CountrySearch('.search-input', '.search-results', (country) => {
            window.location.href = `country.html?c=${country.code}`;
        });
    }
    
    // Initialize region filters
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const region = btn.dataset.region;
            if (window.countryGrid) {
                window.countryGrid.filterByRegion(region);
            }
        });
    });
    
    // Handle search input
    const searchInputEl = document.querySelector('#country-search');
    if (searchInputEl && window.countryGrid) {
        searchInputEl.addEventListener('input', debounce((e) => {
            window.countryGrid.filterBySearch(e.target.value);
        }, CONFIG.DEBOUNCE_DELAY));
    }
    
    console.log('🌍 GeoTopia International Relations Module Initialized');
    console.log(`📊 ${COUNTRIES.length} countries loaded`);
    console.log(`🏛️ ${Object.keys(ORGANIZATIONS).length} organizations loaded`);
});

// =====================================================
// EXPORTS
// =====================================================

// Make classes and utilities globally available
window.GeoTopia = {
    CONFIG,
    COUNTRIES,
    ORGANIZATIONS,
    dataManager,
    Navigation,
    CountrySearch,
    CountryGrid,
    Modal,
    Toast,
    ScrollAnimations,
    ParticlesBackground,
    TypeWriter,
    utils: {
        debounce,
        throttle,
        formatNumber,
        formatCurrency,
        formatPercentage,
        getFlagUrl,
        getFlagEmoji,
        getCountryByCode,
        getCountriesByRegion,
        getCountryOrganizations,
        getRelationshipId,
        Storage,
        animateCounter,
        scrollToElement
    }
};
