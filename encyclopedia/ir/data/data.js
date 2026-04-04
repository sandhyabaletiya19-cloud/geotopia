/**
 * Unity Atlas - Data Module
 * Contains all country data, parameters, alliances, and relationship logic
 * 
 * Structure:
 * - PARAMETERS: 16 IR analysis parameters
 * - COUNTRIES: 197 nations database
 * - ALLIANCES: Major international organizations
 * - RELATIONSHIPS: Bilateral relationship calculator
 */

'use strict';

// ==================== PARAMETERS (16 IR Dimensions) ====================
const PARAMETERS = [
    {
        id: 'trade',
        name: 'Trade Relations',
        icon: 'fa-chart-line',
        category: 'Economic',
        description: 'Bilateral trade volume, agreements, tariffs, and economic dependencies',
        factors: [
            'Annual bilateral trade volume',
            'Trade balance and deficit/surplus',
            'Free trade agreements (FTAs)',
            'Tariff structures and barriers',
            'Key trade sectors',
            'Supply chain dependencies',
            'Trade disputes and resolutions',
            'Economic sanctions if any'
        ]
    },
    {
        id: 'military',
        name: 'Military Cooperation',
        icon: 'fa-shield-halved',
        category: 'Security',
        description: 'Defense cooperation, joint exercises, arms trade, and military bases',
        factors: [
            'Joint military exercises',
            'Arms sales and purchases',
            'Military bases and access agreements',
            'Defense technology sharing',
            'Training programs',
            'Peacekeeping contributions',
            'Military leadership exchanges',
            'Interoperability levels'
        ]
    },
    {
        id: 'diplomatic',
        name: 'Diplomatic Relations',
        icon: 'fa-handshake',
        category: 'Political',
        description: 'Embassy presence, diplomatic visits, recognition, and bilateral dialogues',
        factors: [
            'Embassy and consulate presence',
            'Level of diplomatic representation',
            'High-level state visits',
            'Bilateral dialogue mechanisms',
            'Recognition status',
            'Diplomatic incidents history',
            'Mediation roles',
            'Protocol and ceremonial ties'
        ]
    },
    {
        id: 'border',
        name: 'Border Relations',
        icon: 'fa-map-location-dot',
        category: 'Territorial',
        description: 'Border disputes, demarcation, crossings, and territorial issues',
        factors: [
            'Border demarcation status',
            'Territorial disputes',
            'Border crossing facilities',
            'Cross-border incidents',
            'Maritime boundary issues',
            'Buffer zones',
            'Border security cooperation',
            'Infrastructure connectivity'
        ]
    },
    {
        id: 'historical',
        name: 'Historical Ties',
        icon: 'fa-landmark',
        category: 'Heritage',
        description: 'Colonial history, past conflicts, shared heritage, and historical events',
        factors: [
            'Colonial relationships',
            'Historical conflicts and wars',
            'Shared historical events',
            'Cultural heritage links',
            'Historical grievances',
            'Reconciliation efforts',
            'Commemorative diplomacy',
            'Ancestral connections'
        ]
    },
    {
        id: 'economic',
        name: 'Economic Integration',
        icon: 'fa-building-columns',
        category: 'Economic',
        description: 'FDI flows, investment treaties, economic partnerships, and financial ties',
        factors: [
            'Foreign direct investment (FDI)',
            'Bilateral investment treaties (BITs)',
            'Economic partnership agreements',
            'Currency arrangements',
            'Financial sector cooperation',
            'Development assistance',
            'Infrastructure investments',
            'Economic zone participation'
        ]
    },
    {
        id: 'cultural',
        name: 'Cultural Exchange',
        icon: 'fa-masks-theater',
        category: 'Cultural',
        description: 'Student exchanges, diaspora, tourism, media, and cultural programs',
        factors: [
            'Student exchange programs',
            'Diaspora population',
            'Tourism flows',
            'Cultural centers and institutes',
            'Media and entertainment ties',
            'Sports cooperation',
            'Language learning',
            'Cultural festivals and events'
        ]
    },
    {
        id: 'visa',
        name: 'Visa & Mobility',
        icon: 'fa-passport',
        category: 'Movement',
        description: 'Visa requirements, travel freedom, immigration policies',
        factors: [
            'Visa requirements',
            'Visa-free access',
            'Work permit arrangements',
            'Residency agreements',
            'Immigration quotas',
            'Deportation treaties',
            'Travel advisories',
            'COVID-era restrictions legacy'
        ]
    },
    {
        id: 'strategic',
        name: 'Strategic Alignment',
        icon: 'fa-chess',
        category: 'Geopolitical',
        description: 'Geopolitical importance, power dynamics, and strategic interests',
        factors: [
            'Strategic location value',
            'Great power alignment',
            'Regional influence coordination',
            'Strategic resource access',
            'Geopolitical priorities alignment',
            'Balance of power considerations',
            'Containment or partnership strategies',
            'Pivot region importance'
        ]
    },
    {
        id: 'intelligence',
        name: 'Intelligence Sharing',
        icon: 'fa-user-secret',
        category: 'Security',
        description: 'Intelligence cooperation, counter-terrorism, and information sharing',
        factors: [
            'Intelligence alliance membership',
            'Counter-terrorism cooperation',
            'Information sharing agreements',
            'Cyber security collaboration',
            'Joint operations',
            'Intelligence liaison presence',
            'Surveillance cooperation',
            'Classified information sharing'
        ]
    },
    {
        id: 'energy',
        name: 'Energy Relations',
        icon: 'fa-bolt',
        category: 'Resources',
        description: 'Oil, gas, pipelines, nuclear cooperation, and renewable energy',
        factors: [
            'Oil and gas trade',
            'Pipeline projects',
            'Nuclear energy cooperation',
            'Renewable energy partnerships',
            'Energy security agreements',
            'LNG terminals and facilities',
            'Power grid connectivity',
            'Energy technology transfer'
        ]
    },
    {
        id: 'technology',
        name: 'Technology Partnership',
        icon: 'fa-microchip',
        category: 'Innovation',
        description: 'R&D collaboration, tech transfer, standards, and digital cooperation',
        factors: [
            'R&D collaboration',
            'Technology transfer agreements',
            'Joint innovation projects',
            'Standard setting cooperation',
            'Digital economy partnerships',
            'Space cooperation',
            'AI and emerging tech collaboration',
            'Intellectual property frameworks'
        ]
    },
    {
        id: 'defense',
        name: 'Defense Agreements',
        icon: 'fa-shield',
        category: 'Security',
        description: 'Mutual defense treaties, military alliances, and security guarantees',
        factors: [
            'Mutual defense treaty',
            'Alliance membership',
            'Security guarantees',
            'Nuclear umbrella coverage',
            'Status of forces agreements',
            'Defense procurement cooperation',
            'Collective security participation',
            'Extended deterrence'
        ]
    },
    {
        id: 'political',
        name: 'Political Alignment',
        icon: 'fa-scale-balanced',
        category: 'Political',
        description: 'UN voting patterns, ideology, governance systems, and political support',
        factors: [
            'UN General Assembly voting alignment',
            'Political system compatibility',
            'Ideological alignment',
            'Democracy and human rights positions',
            'Political party connections',
            'Electoral observation cooperation',
            'Governance model influence',
            'Political leadership relationships'
        ]
    },
    {
        id: 'organizations',
        name: 'Shared Organizations',
        icon: 'fa-building-un',
        category: 'Institutional',
        description: 'Common membership in UN, regional blocs, and international institutions',
        factors: [
            'UN specialized agency co-membership',
            'Regional organization membership',
            'Economic bloc participation',
            'Security alliance membership',
            'Trade agreement partnerships',
            'Development bank membership',
            'Climate agreement cooperation',
            'Sports and cultural body membership'
        ]
    },
    {
        id: 'conflict',
        name: 'Conflict Risk',
        icon: 'fa-triangle-exclamation',
        category: 'Risk',
        description: 'Current tensions, flashpoints, war probability, and conflict history',
        factors: [
            'Active conflict status',
            'Historical war legacy',
            'Current diplomatic tensions',
            'Military standoffs',
            'Proxy conflict involvement',
            'Territorial flashpoints',
            'Escalation risk factors',
            'De-escalation mechanisms'
        ]
    }
];

// ==================== COUNTRIES DATABASE ====================
// This is the master list - individual country files will extend this
const COUNTRIES = {
    // ASIA (49 countries)
    AF: { code: 'AF', name: 'Afghanistan', flag: '🇦🇫', region: 'asia', subregion: 'south', capital: 'Kabul', population: 41129000, gdp: 14 },
    AM: { code: 'AM', name: 'Armenia', flag: '🇦🇲', region: 'asia', subregion: 'west', capital: 'Yerevan', population: 2963000, gdp: 19 },
    AZ: { code: 'AZ', name: 'Azerbaijan', flag: '🇦🇿', region: 'asia', subregion: 'west', capital: 'Baku', population: 10139000, gdp: 79 },
    BH: { code: 'BH', name: 'Bahrain', flag: '🇧🇭', region: 'asia', subregion: 'west', capital: 'Manama', population: 1501000, gdp: 44 },
    BD: { code: 'BD', name: 'Bangladesh', flag: '🇧🇩', region: 'asia', subregion: 'south', capital: 'Dhaka', population: 171186000, gdp: 460 },
    BT: { code: 'BT', name: 'Bhutan', flag: '🇧🇹', region: 'asia', subregion: 'south', capital: 'Thimphu', population: 782000, gdp: 3 },
    BN: { code: 'BN', name: 'Brunei', flag: '🇧🇳', region: 'asia', subregion: 'southeast', capital: 'Bandar Seri Begawan', population: 449000, gdp: 16 },
    KH: { code: 'KH', name: 'Cambodia', flag: '🇰🇭', region: 'asia', subregion: 'southeast', capital: 'Phnom Penh', population: 16945000, gdp: 30 },
    CN: { code: 'CN', name: 'China', flag: '🇨🇳', region: 'asia', subregion: 'east', capital: 'Beijing', population: 1412175000, gdp: 17963 },
    CY: { code: 'CY', name: 'Cyprus', flag: '🇨🇾', region: 'asia', subregion: 'west', capital: 'Nicosia', population: 1251000, gdp: 31 },
    GE: { code: 'GE', name: 'Georgia', flag: '🇬🇪', region: 'asia', subregion: 'west', capital: 'Tbilisi', population: 3714000, gdp: 25 },
    IN: { code: 'IN', name: 'India', flag: '🇮🇳', region: 'asia', subregion: 'south', capital: 'New Delhi', population: 1417173000, gdp: 3737 },
    ID: { code: 'ID', name: 'Indonesia', flag: '🇮🇩', region: 'asia', subregion: 'southeast', capital: 'Jakarta', population: 275501000, gdp: 1417 },
    IR: { code: 'IR', name: 'Iran', flag: '🇮🇷', region: 'asia', subregion: 'west', capital: 'Tehran', population: 87923000, gdp: 368 },
    IQ: { code: 'IQ', name: 'Iraq', flag: '🇮🇶', region: 'asia', subregion: 'west', capital: 'Baghdad', population: 43534000, gdp: 267 },
    IL: { code: 'IL', name: 'Israel', flag: '🇮🇱', region: 'asia', subregion: 'west', capital: 'Jerusalem', population: 9557000, gdp: 525 },
    JP: { code: 'JP', name: 'Japan', flag: '🇯🇵', region: 'asia', subregion: 'east', capital: 'Tokyo', population: 125124000, gdp: 4231 },
    JO: { code: 'JO', name: 'Jordan', flag: '🇯🇴', region: 'asia', subregion: 'west', capital: 'Amman', population: 11285000, gdp: 47 },
    KZ: { code: 'KZ', name: 'Kazakhstan', flag: '🇰🇿', region: 'asia', subregion: 'central', capital: 'Astana', population: 19398000, gdp: 225 },
    KW: { code: 'KW', name: 'Kuwait', flag: '🇰🇼', region: 'asia', subregion: 'west', capital: 'Kuwait City', population: 4294000, gdp: 184 },
    KG: { code: 'KG', name: 'Kyrgyzstan', flag: '🇰🇬', region: 'asia', subregion: 'central', capital: 'Bishkek', population: 6692000, gdp: 11 },
    LA: { code: 'LA', name: 'Laos', flag: '🇱🇦', region: 'asia', subregion: 'southeast', capital: 'Vientiane', population: 7425000, gdp: 19 },
    LB: { code: 'LB', name: 'Lebanon', flag: '🇱🇧', region: 'asia', subregion: 'west', capital: 'Beirut', population: 5490000, gdp: 22 },
    MY: { code: 'MY', name: 'Malaysia', flag: '🇲🇾', region: 'asia', subregion: 'southeast', capital: 'Kuala Lumpur', population: 33938000, gdp: 407 },
    MV: { code: 'MV', name: 'Maldives', flag: '🇲🇻', region: 'asia', subregion: 'south', capital: 'Malé', population: 523000, gdp: 6 },
    MN: { code: 'MN', name: 'Mongolia', flag: '🇲🇳', region: 'asia', subregion: 'east', capital: 'Ulaanbaatar', population: 3398000, gdp: 17 },
    MM: { code: 'MM', name: 'Myanmar', flag: '🇲🇲', region: 'asia', subregion: 'southeast', capital: 'Naypyidaw', population: 54179000, gdp: 59 },
    NP: { code: 'NP', name: 'Nepal', flag: '🇳🇵', region: 'asia', subregion: 'south', capital: 'Kathmandu', population: 30547000, gdp: 40 },
    KP: { code: 'KP', name: 'North Korea', flag: '🇰🇵', region: 'asia', subregion: 'east', capital: 'Pyongyang', population: 26069000, gdp: 18 },
    OM: { code: 'OM', name: 'Oman', flag: '🇴🇲', region: 'asia', subregion: 'west', capital: 'Muscat', population: 4576000, gdp: 115 },
    PK: { code: 'PK', name: 'Pakistan', flag: '🇵🇰', region: 'asia', subregion: 'south', capital: 'Islamabad', population: 231402000, gdp: 350 },
    PS: { code: 'PS', name: 'Palestine', flag: '🇵🇸', region: 'asia', subregion: 'west', capital: 'Ramallah', population: 5250000, gdp: 18 },
    PH: { code: 'PH', name: 'Philippines', flag: '🇵🇭', region: 'asia', subregion: 'southeast', capital: 'Manila', population: 115559000, gdp: 404 },
    QA: { code: 'QA', name: 'Qatar', flag: '🇶🇦', region: 'asia', subregion: 'west', capital: 'Doha', population: 2688000, gdp: 235 },
    SA: { code: 'SA', name: 'Saudi Arabia', flag: '🇸🇦', region: 'asia', subregion: 'west', capital: 'Riyadh', population: 36408000, gdp: 1108 },
    SG: { code: 'SG', name: 'Singapore', flag: '🇸🇬', region: 'asia', subregion: 'southeast', capital: 'Singapore', population: 5637000, gdp: 501 },
    KR: { code: 'KR', name: 'South Korea', flag: '🇰🇷', region: 'asia', subregion: 'east', capital: 'Seoul', population: 51745000, gdp: 1810 },
    LK: { code: 'LK', name: 'Sri Lanka', flag: '🇱🇰', region: 'asia', subregion: 'south', capital: 'Colombo', population: 21919000, gdp: 75 },
    SY: { code: 'SY', name: 'Syria', flag: '🇸🇾', region: 'asia', subregion: 'west', capital: 'Damascus', population: 22125000, gdp: 11 },
    TW: { code: 'TW', name: 'Taiwan', flag: '🇹🇼', region: 'asia', subregion: 'east', capital: 'Taipei', population: 23894000, gdp: 790 },
    TJ: { code: 'TJ', name: 'Tajikistan', flag: '🇹🇯', region: 'asia', subregion: 'central', capital: 'Dushanbe', population: 9952000, gdp: 11 },
    TH: { code: 'TH', name: 'Thailand', flag: '🇹🇭', region: 'asia', subregion: 'southeast', capital: 'Bangkok', population: 71697000, gdp: 514 },
    TL: { code: 'TL', name: 'Timor-Leste', flag: '🇹🇱', region: 'asia', subregion: 'southeast', capital: 'Dili', population: 1341000, gdp: 3 },
    TR: { code: 'TR', name: 'Turkey', flag: '🇹🇷', region: 'asia', subregion: 'west', capital: 'Ankara', population: 85280000, gdp: 906 },
    TM: { code: 'TM', name: 'Turkmenistan', flag: '🇹🇲', region: 'asia', subregion: 'central', capital: 'Ashgabat', population: 6431000, gdp: 59 },
    AE: { code: 'AE', name: 'United Arab Emirates', flag: '🇦🇪', region: 'asia', subregion: 'west', capital: 'Abu Dhabi', population: 9441000, gdp: 507 },
    UZ: { code: 'UZ', name: 'Uzbekistan', flag: '🇺🇿', region: 'asia', subregion: 'central', capital: 'Tashkent', population: 34915000, gdp: 80 },
    VN: { code: 'VN', name: 'Vietnam', flag: '🇻🇳', region: 'asia', subregion: 'southeast', capital: 'Hanoi', population: 98186000, gdp: 409 },
    YE: { code: 'YE', name: 'Yemen', flag: '🇾🇪', region: 'asia', subregion: 'west', capital: 'Sana\'a', population: 33697000, gdp: 21 },

    // EUROPE (44 countries)
    AL: { code: 'AL', name: 'Albania', flag: '🇦🇱', region: 'europe', subregion: 'south', capital: 'Tirana', population: 2842000, gdp: 22 },
    AD: { code: 'AD', name: 'Andorra', flag: '🇦🇩', region: 'europe', subregion: 'west', capital: 'Andorra la Vella', population: 79000, gdp: 3 },
    AT: { code: 'AT', name: 'Austria', flag: '🇦🇹', region: 'europe', subregion: 'west', capital: 'Vienna', population: 9042000, gdp: 471 },
    BY: { code: 'BY', name: 'Belarus', flag: '🇧🇾', region: 'europe', subregion: 'east', capital: 'Minsk', population: 9200000, gdp: 73 },
    BE: { code: 'BE', name: 'Belgium', flag: '🇧🇪', region: 'europe', subregion: 'west', capital: 'Brussels', population: 11686000, gdp: 632 },
    BA: { code: 'BA', name: 'Bosnia and Herzegovina', flag: '🇧🇦', region: 'europe', subregion: 'south', capital: 'Sarajevo', population: 3271000, gdp: 25 },
    BG: { code: 'BG', name: 'Bulgaria', flag: '🇧🇬', region: 'europe', subregion: 'east', capital: 'Sofia', population: 6878000, gdp: 89 },
    HR: { code: 'HR', name: 'Croatia', flag: '🇭🇷', region: 'europe', subregion: 'south', capital: 'Zagreb', population: 3879000, gdp: 78 },
    CZ: { code: 'CZ', name: 'Czech Republic', flag: '🇨🇿', region: 'europe', subregion: 'central', capital: 'Prague', population: 10524000, gdp: 290 },
    DK: { code: 'DK', name: 'Denmark', flag: '🇩🇰', region: 'europe', subregion: 'north', capital: 'Copenhagen', population: 5903000, gdp: 400 },
    EE: { code: 'EE', name: 'Estonia', flag: '🇪🇪', region: 'europe', subregion: 'north', capital: 'Tallinn', population: 1366000, gdp: 38 },
    FI: { code: 'FI', name: 'Finland', flag: '🇫🇮', region: 'europe', subregion: 'north', capital: 'Helsinki', population: 5541000, gdp: 301 },
    FR: { code: 'FR', name: 'France', flag: '🇫🇷', region: 'europe', subregion: 'west', capital: 'Paris', population: 67750000, gdp: 2937 },
    DE: { code: 'DE', name: 'Germany', flag: '🇩🇪', region: 'europe', subregion: 'west', capital: 'Berlin', population: 83795000, gdp: 4259 },
    GR: { code: 'GR', name: 'Greece', flag: '🇬🇷', region: 'europe', subregion: 'south', capital: 'Athens', population: 10432000, gdp: 222 },
    HU: { code: 'HU', name: 'Hungary', flag: '🇭🇺', region: 'europe', subregion: 'central', capital: 'Budapest', population: 9710000, gdp: 188 },
    IS: { code: 'IS', name: 'Iceland', flag: '🇮🇸', region: 'europe', subregion: 'north', capital: 'Reykjavik', population: 376000, gdp: 28 },
    IE: { code: 'IE', name: 'Ireland', flag: '🇮🇪', region: 'europe', subregion: 'west', capital: 'Dublin', population: 5123000, gdp: 533 },
    IT: { code: 'IT', name: 'Italy', flag: '🇮🇹', region: 'europe', subregion: 'south', capital: 'Rome', population: 59110000, gdp: 2107 },
    XK: { code: 'XK', name: 'Kosovo', flag: '🇽🇰', region: 'europe', subregion: 'south', capital: 'Pristina', population: 1935000, gdp: 10 },
    LV: { code: 'LV', name: 'Latvia', flag: '🇱🇻', region: 'europe', subregion: 'north', capital: 'Riga', population: 1884000, gdp: 40 },
    LI: { code: 'LI', name: 'Liechtenstein', flag: '🇱🇮', region: 'europe', subregion: 'west', capital: 'Vaduz', population: 39000, gdp: 7 },
    LT: { code: 'LT', name: 'Lithuania', flag: '🇱🇹', region: 'europe', subregion: 'north', capital: 'Vilnius', population: 2832000, gdp: 71 },
    LU: { code: 'LU', name: 'Luxembourg', flag: '🇱🇺', region: 'europe', subregion: 'west', capital: 'Luxembourg City', population: 654000, gdp: 87 },
    MT: { code: 'MT', name: 'Malta', flag: '🇲🇹', region: 'europe', subregion: 'south', capital: 'Valletta', population: 520000, gdp: 20 },
    MD: { code: 'MD', name: 'Moldova', flag: '🇲🇩', region: 'europe', subregion: 'east', capital: 'Chișinău', population: 2604000, gdp: 15 },
    MC: { code: 'MC', name: 'Monaco', flag: '🇲🇨', region: 'europe', subregion: 'west', capital: 'Monaco', population: 39000, gdp: 8 },
    ME: { code: 'ME', name: 'Montenegro', flag: '🇲🇪', region: 'europe', subregion: 'south', capital: 'Podgorica', population: 620000, gdp: 6 },
    NL: { code: 'NL', name: 'Netherlands', flag: '🇳🇱', region: 'europe', subregion: 'west', capital: 'Amsterdam', population: 17590000, gdp: 1009 },
    MK: { code: 'MK', name: 'North Macedonia', flag: '🇲🇰', region: 'europe', subregion: 'south', capital: 'Skopje', population: 2084000, gdp: 14 },
    NO: { code: 'NO', name: 'Norway', flag: '🇳🇴', region: 'europe', subregion: 'north', capital: 'Oslo', population: 5474000, gdp: 579 },
    PL: { code: 'PL', name: 'Poland', flag: '🇵🇱', region: 'europe', subregion: 'central', capital: 'Warsaw', population: 37750000, gdp: 716 },
    PT: { code: 'PT', name: 'Portugal', flag: '🇵🇹', region: 'europe', subregion: 'south', capital: 'Lisbon', population: 10352000, gdp: 267 },
    RO: { code: 'RO', name: 'Romania', flag: '🇷🇴', region: 'europe', subregion: 'east', capital: 'Bucharest', population: 19053000, gdp: 301 },
    RU: { code: 'RU', name: 'Russia', flag: '🇷🇺', region: 'europe', subregion: 'east', capital: 'Moscow', population: 144236000, gdp: 2062 },
    SM: { code: 'SM', name: 'San Marino', flag: '🇸🇲', region: 'europe', subregion: 'south', capital: 'San Marino', population: 34000, gdp: 2 },
    RS: { code: 'RS', name: 'Serbia', flag: '🇷🇸', region: 'europe', subregion: 'south', capital: 'Belgrade', population: 6908000, gdp: 69 },
    SK: { code: 'SK', name: 'Slovakia', flag: '🇸🇰', region: 'europe', subregion: 'central', capital: 'Bratislava', population: 5460000, gdp: 115 },
    SI: { code: 'SI', name: 'Slovenia', flag: '🇸🇮', region: 'europe', subregion: 'south', capital: 'Ljubljana', population: 2119000, gdp: 62 },
    ES: { code: 'ES', name: 'Spain', flag: '🇪🇸', region: 'europe', subregion: 'south', capital: 'Madrid', population: 47615000, gdp: 1492 },
    SE: { code: 'SE', name: 'Sweden', flag: '🇸🇪', region: 'europe', subregion: 'north', capital: 'Stockholm', population: 10549000, gdp: 593 },
    CH: { code: 'CH', name: 'Switzerland', flag: '🇨🇭', region: 'europe', subregion: 'west', capital: 'Bern', population: 8740000, gdp: 813 },
    UA: { code: 'UA', name: 'Ukraine', flag: '🇺🇦', region: 'europe', subregion: 'east', capital: 'Kyiv', population: 43531000, gdp: 161 },
    GB: { code: 'GB', name: 'United Kingdom', flag: '🇬🇧', region: 'europe', subregion: 'west', capital: 'London', population: 67791000, gdp: 3158 },
    VA: { code: 'VA', name: 'Vatican City', flag: '🇻🇦', region: 'europe', subregion: 'south', capital: 'Vatican City', population: 1, gdp: 0 },

    // AFRICA (54 countries)
    DZ: { code: 'DZ', name: 'Algeria', flag: '🇩🇿', region: 'africa', subregion: 'north', capital: 'Algiers', population: 45400000, gdp: 187 },
    AO: { code: 'AO', name: 'Angola', flag: '🇦🇴', region: 'africa', subregion: 'central', capital: 'Luanda', population: 35589000, gdp: 117 },
    BJ: { code: 'BJ', name: 'Benin', flag: '🇧🇯', region: 'africa', subregion: 'west', capital: 'Porto-Novo', population: 13353000, gdp: 17 },
    BW: { code: 'BW', name: 'Botswana', flag: '🇧🇼', region: 'africa', subregion: 'south', capital: 'Gaborone', population: 2588000, gdp: 19 },
    BF: { code: 'BF', name: 'Burkina Faso', flag: '🇧🇫', region: 'africa', subregion: 'west', capital: 'Ouagadougou', population: 22674000, gdp: 19 },
    BI: { code: 'BI', name: 'Burundi', flag: '🇧🇮', region: 'africa', subregion: 'east', capital: 'Gitega', population: 12890000, gdp: 3 },
    CV: { code: 'CV', name: 'Cabo Verde', flag: '🇨🇻', region: 'africa', subregion: 'west', capital: 'Praia', population: 593000, gdp: 2 },
    CM: { code: 'CM', name: 'Cameroon', flag: '🇨🇲', region: 'africa', subregion: 'central', capital: 'Yaoundé', population: 27915000, gdp: 45 },
    CF: { code: 'CF', name: 'Central African Republic', flag: '🇨🇫', region: 'africa', subregion: 'central', capital: 'Bangui', population: 5457000, gdp: 2 },
    TD: { code: 'TD', name: 'Chad', flag: '🇹🇩', region: 'africa', subregion: 'central', capital: 'N\'Djamena', population: 17723000, gdp: 12 },
    KM: { code: 'KM', name: 'Comoros', flag: '🇰🇲', region: 'africa', subregion: 'east', capital: 'Moroni', population: 837000, gdp: 1 },
    CG: { code: 'CG', name: 'Congo', flag: '🇨🇬', region: 'africa', subregion: 'central', capital: 'Brazzaville', population: 5836000, gdp: 13 },
    CD: { code: 'CD', name: 'DR Congo', flag: '🇨🇩', region: 'africa', subregion: 'central', capital: 'Kinshasa', population: 99010000, gdp: 64 },
    CI: { code: 'CI', name: 'Côte d\'Ivoire', flag: '🇨🇮', region: 'africa', subregion: 'west', capital: 'Yamoussoukro', population: 28161000, gdp: 70 },
    DJ: { code: 'DJ', name: 'Djibouti', flag: '🇩🇯', region: 'africa', subregion: 'east', capital: 'Djibouti', population: 1121000, gdp: 4 },
    EG: { code: 'EG', name: 'Egypt', flag: '🇪🇬', region: 'africa', subregion: 'north', capital: 'Cairo', population: 104260000, gdp: 476 },
    GQ: { code: 'GQ', name: 'Equatorial Guinea', flag: '🇬🇶', region: 'africa', subregion: 'central', capital: 'Malabo', population: 1634000, gdp: 12 },
    ER: { code: 'ER', name: 'Eritrea', flag: '🇪🇷', region: 'africa', subregion: 'east', capital: 'Asmara', population: 3601000, gdp: 2 },
    SZ: { code: 'SZ', name: 'Eswatini', flag: '🇸🇿', region: 'africa', subregion: 'south', capital: 'Mbabane', population: 1185000, gdp: 5 },
    ET: { code: 'ET', name: 'Ethiopia', flag: '🇪🇹', region: 'africa', subregion: 'east', capital: 'Addis Ababa', population: 120283000, gdp: 111 },
    GA: { code: 'GA', name: 'Gabon', flag: '🇬🇦', region: 'africa', subregion: 'central', capital: 'Libreville', population: 2341000, gdp: 19 },
    GM: { code: 'GM', name: 'Gambia', flag: '🇬🇲', region: 'africa', subregion: 'west', capital: 'Banjul', population: 2640000, gdp: 2 },
    GH: { code: 'GH', name: 'Ghana', flag: '🇬🇭', region: 'africa', subregion: 'west', capital: 'Accra', population: 33476000, gdp: 73 },
    GN: { code: 'GN', name: 'Guinea', flag: '🇬🇳', region: 'africa', subregion: 'west', capital: 'Conakry', population: 13859000, gdp: 16 },
    GW: { code: 'GW', name: 'Guinea-Bissau', flag: '🇬🇼', region: 'africa', subregion: 'west', capital: 'Bissau', population: 2061000, gdp: 2 },
    KE: { code: 'KE', name: 'Kenya', flag: '🇰🇪', region: 'africa', subregion: 'east', capital: 'Nairobi', population: 54027000, gdp: 113 },
    LS: { code: 'LS', name: 'Lesotho', flag: '🇱🇸', region: 'africa', subregion: 'south', capital: 'Maseru', population: 2175000, gdp: 2 },
    LR: { code: 'LR', name: 'Liberia', flag: '🇱🇷', region: 'africa', subregion: 'west', capital: 'Monrovia', population: 5303000, gdp: 4 },
    LY: { code: 'LY', name: 'Libya', flag: '🇱🇾', region: 'africa', subregion: 'north', capital: 'Tripoli', population: 6812000, gdp: 42 },
    MG: { code: 'MG', name: 'Madagascar', flag: '🇲🇬', region: 'africa', subregion: 'east', capital: 'Antananarivo', population: 29612000, gdp: 15 },
    MW: { code: 'MW', name: 'Malawi', flag: '🇲🇼', region: 'africa', subregion: 'east', capital: 'Lilongwe', population: 20405000, gdp: 12 },
    ML: { code: 'ML', name: 'Mali', flag: '🇲🇱', region: 'africa', subregion: 'west', capital: 'Bamako', population: 22395000, gdp: 19 },
    MR: { code: 'MR', name: 'Mauritania', flag: '🇲🇷', region: 'africa', subregion: 'west', capital: 'Nouakchott', population: 4615000, gdp: 10 },
    MU: { code: 'MU', name: 'Mauritius', flag: '🇲🇺', region: 'africa', subregion: 'east', capital: 'Port Louis', population: 1266000, gdp: 12 },
    MA: { code: 'MA', name: 'Morocco', flag: '🇲🇦', region: 'africa', subregion: 'north', capital: 'Rabat', population: 37458000, gdp: 143 },
    MZ: { code: 'MZ', name: 'Mozambique', flag: '🇲🇿', region: 'africa', subregion: 'east', capital: 'Maputo', population: 32970000, gdp: 18 },
    NA: { code: 'NA', name: 'Namibia', flag: '🇳🇦', region: 'africa', subregion: 'south', capital: 'Windhoek', population: 2567000, gdp: 13 },
    NE: { code: 'NE', name: 'Niger', flag: '🇳🇪', region: 'africa', subregion: 'west', capital: 'Niamey', population: 26208000, gdp: 15 },
    NG: { code: 'NG', name: 'Nigeria', flag: '🇳🇬', region: 'africa', subregion: 'west', capital: 'Abuja', population: 218541000, gdp: 477 },
    RW: { code: 'RW', name: 'Rwanda', flag: '🇷🇼', region: 'africa', subregion: 'east', capital: 'Kigali', population: 13462000, gdp: 12 },
    ST: { code: 'ST', name: 'São Tomé and Príncipe', flag: '🇸🇹', region: 'africa', subregion: 'central', capital: 'São Tomé', population: 224000, gdp: 1 },
    SN: { code: 'SN', name: 'Senegal', flag: '🇸🇳', region: 'africa', subregion: 'west', capital: 'Dakar', population: 17763000, gdp: 28 },
    SC: { code: 'SC', name: 'Seychelles', flag: '🇸🇨', region: 'africa', subregion: 'east', capital: 'Victoria', population: 107000, gdp: 2 },
    SL: { code: 'SL', name: 'Sierra Leone', flag: '🇸🇱', region: 'africa', subregion: 'west', capital: 'Freetown', population: 8421000, gdp: 4 },
    SO: { code: 'SO', name: 'Somalia', flag: '🇸🇴', region: 'africa', subregion: 'east', capital: 'Mogadishu', population: 17598000, gdp: 8 },
    ZA: { code: 'ZA', name: 'South Africa', flag: '🇿🇦', region: 'africa', subregion: 'south', capital: 'Pretoria', population: 60142000, gdp: 405 },
    SS: { code: 'SS', name: 'South Sudan', flag: '🇸🇸', region: 'africa', subregion: 'east', capital: 'Juba', population: 11381000, gdp: 4 },
    SD: { code: 'SD', name: 'Sudan', flag: '🇸🇩', region: 'africa', subregion: 'north', capital: 'Khartoum', population: 45657000, gdp: 34 },
    TZ: { code: 'TZ', name: 'Tanzania', flag: '🇹🇿', region: 'africa', subregion: 'east', capital: 'Dodoma', population: 63588000, gdp: 76 },
    TG: { code: 'TG', name: 'Togo', flag: '🇹🇬', region: 'africa', subregion: 'west', capital: 'Lomé', population: 8848000, gdp: 8 },
    TN: { code: 'TN', name: 'Tunisia', flag: '🇹🇳', region: 'africa', subregion: 'north', capital: 'Tunis', population: 12263000, gdp: 46 },
    UG: { code: 'UG', name: 'Uganda', flag: '🇺🇬', region: 'africa', subregion: 'east', capital: 'Kampala', population: 47249000, gdp: 46 },
    ZM: { code: 'ZM', name: 'Zambia', flag: '🇿🇲', region: 'africa', subregion: 'east', capital: 'Lusaka', population: 19610000, gdp: 26 },
    ZW: { code: 'ZW', name: 'Zimbabwe', flag: '🇿🇼', region: 'africa', subregion: 'east', capital: 'Harare', population: 15994000, gdp: 21 },

    // AMERICAS (35 countries)
    AG: { code: 'AG', name: 'Antigua and Barbuda', flag: '🇦🇬', region: 'americas', subregion: 'caribbean', capital: 'St. John\'s', population: 93000, gdp: 2 },
    AR: { code: 'AR', name: 'Argentina', flag: '🇦🇷', region: 'americas', subregion: 'south', capital: 'Buenos Aires', population: 45809000, gdp: 632 },
    BS: { code: 'BS', name: 'Bahamas', flag: '🇧🇸', region: 'americas', subregion: 'caribbean', capital: 'Nassau', population: 407000, gdp: 14 },
    BB: { code: 'BB', name: 'Barbados', flag: '🇧🇧', region: 'americas', subregion: 'caribbean', capital: 'Bridgetown', population: 287000, gdp: 5 },
    BZ: { code: 'BZ', name: 'Belize', flag: '🇧🇿', region: 'americas', subregion: 'central', capital: 'Belmopan', population: 441000, gdp: 3 },
    BO: { code: 'BO', name: 'Bolivia', flag: '🇧🇴', region: 'americas', subregion: 'south', capital: 'La Paz', population: 12080000, gdp: 44 },
    BR: { code: 'BR', name: 'Brazil', flag: '🇧🇷', region: 'americas', subregion: 'south', capital: 'Brasília', population: 215313000, gdp: 2081 },
    CA: { code: 'CA', name: 'Canada', flag: '🇨🇦', region: 'americas', subregion: 'north', capital: 'Ottawa', population: 38930000, gdp: 2200 },
    CL: { code: 'CL', name: 'Chile', flag: '🇨🇱', region: 'americas', subregion: 'south', capital: 'Santiago', population: 19493000, gdp: 317 },
    CO: { code: 'CO', name: 'Colombia', flag: '🇨🇴', region: 'americas', subregion: 'south', capital: 'Bogotá', population: 51875000, gdp: 351 },
    CR: { code: 'CR', name: 'Costa Rica', flag: '🇨🇷', region: 'americas', subregion: 'central', capital: 'San José', population: 5180000, gdp: 69 },
    CU: { code: 'CU', name: 'Cuba', flag: '🇨🇺', region: 'americas', subregion: 'caribbean', capital: 'Havana', population: 11212000, gdp: 107 },
    DM: { code: 'DM', name: 'Dominica', flag: '🇩🇲', region: 'americas', subregion: 'caribbean', capital: 'Roseau', population: 72000, gdp: 1 },
    DO: { code: 'DO', name: 'Dominican Republic', flag: '🇩🇴', region: 'americas', subregion: 'caribbean', capital: 'Santo Domingo', population: 11229000, gdp: 114 },
    EC: { code: 'EC', name: 'Ecuador', flag: '🇪🇨', region: 'americas', subregion: 'south', capital: 'Quito', population: 18001000, gdp: 115 },
    SV: { code: 'SV', name: 'El Salvador', flag: '🇸🇻', region: 'americas', subregion: 'central', capital: 'San Salvador', population: 6336000, gdp: 32 },
    GD: { code: 'GD', name: 'Grenada', flag: '🇬🇩', region: 'americas', subregion: 'caribbean', capital: 'St. George\'s', population: 125000, gdp: 1 },
    GT: { code: 'GT', name: 'Guatemala', flag: '🇬🇹', region: 'americas', subregion: 'central', capital: 'Guatemala City', population: 18092000, gdp: 95 },
        // Continuing AMERICAS...
    GY: { code: 'GY', name: 'Guyana', flag: '🇬🇾', region: 'americas', subregion: 'south', capital: 'Georgetown', population: 808000, gdp: 15 },
    HT: { code: 'HT', name: 'Haiti', flag: '🇭🇹', region: 'americas', subregion: 'caribbean', capital: 'Port-au-Prince', population: 11585000, gdp: 20 },
    HN: { code: 'HN', name: 'Honduras', flag: '🇭🇳', region: 'americas', subregion: 'central', capital: 'Tegucigalpa', population: 10433000, gdp: 31 },
    JM: { code: 'JM', name: 'Jamaica', flag: '🇯🇲', region: 'americas', subregion: 'caribbean', capital: 'Kingston', population: 2828000, gdp: 17 },
    MX: { code: 'MX', name: 'Mexico', flag: '🇲🇽', region: 'americas', subregion: 'north', capital: 'Mexico City', population: 128901000, gdp: 1414 },
    NI: { code: 'NI', name: 'Nicaragua', flag: '🇳🇮', region: 'americas', subregion: 'central', capital: 'Managua', population: 6948000, gdp: 15 },
    PA: { code: 'PA', name: 'Panama', flag: '🇵🇦', region: 'americas', subregion: 'central', capital: 'Panama City', population: 4409000, gdp: 77 },
    PY: { code: 'PY', name: 'Paraguay', flag: '🇵🇾', region: 'americas', subregion: 'south', capital: 'Asunción', population: 6781000, gdp: 42 },
    PE: { code: 'PE', name: 'Peru', flag: '🇵🇪', region: 'americas', subregion: 'south', capital: 'Lima', population: 33716000, gdp: 268 },
    KN: { code: 'KN', name: 'Saint Kitts and Nevis', flag: '🇰🇳', region: 'americas', subregion: 'caribbean', capital: 'Basseterre', population: 48000, gdp: 1 },
    LC: { code: 'LC', name: 'Saint Lucia', flag: '🇱🇨', region: 'americas', subregion: 'caribbean', capital: 'Castries', population: 180000, gdp: 2 },
    VC: { code: 'VC', name: 'Saint Vincent and the Grenadines', flag: '🇻🇨', region: 'americas', subregion: 'caribbean', capital: 'Kingstown', population: 104000, gdp: 1 },
    SR: { code: 'SR', name: 'Suriname', flag: '🇸🇷', region: 'americas', subregion: 'south', capital: 'Paramaribo', population: 618000, gdp: 4 },
    TT: { code: 'TT', name: 'Trinidad and Tobago', flag: '🇹🇹', region: 'americas', subregion: 'caribbean', capital: 'Port of Spain', population: 1531000, gdp: 28 },
    US: { code: 'US', name: 'United States', flag: '🇺🇸', region: 'americas', subregion: 'north', capital: 'Washington D.C.', population: 339997000, gdp: 28780 },
    UY: { code: 'UY', name: 'Uruguay', flag: '🇺🇾', region: 'americas', subregion: 'south', capital: 'Montevideo', population: 3423000, gdp: 77 },
    VE: { code: 'VE', name: 'Venezuela', flag: '🇻🇪', region: 'americas', subregion: 'south', capital: 'Caracas', population: 28302000, gdp: 92 },

    // OCEANIA (14 countries)
    AU: { code: 'AU', name: 'Australia', flag: '🇦🇺', region: 'oceania', subregion: 'australasia', capital: 'Canberra', population: 26141000, gdp: 1724 },
    FJ: { code: 'FJ', name: 'Fiji', flag: '🇫🇯', region: 'oceania', subregion: 'melanesia', capital: 'Suva', population: 929000, gdp: 5 },
    KI: { code: 'KI', name: 'Kiribati', flag: '🇰🇮', region: 'oceania', subregion: 'micronesia', capital: 'Tarawa', population: 131000, gdp: 0.2 },
    MH: { code: 'MH', name: 'Marshall Islands', flag: '🇲🇭', region: 'oceania', subregion: 'micronesia', capital: 'Majuro', population: 42000, gdp: 0.3 },
    FM: { code: 'FM', name: 'Micronesia', flag: '🇫🇲', region: 'oceania', subregion: 'micronesia', capital: 'Palikir', population: 114000, gdp: 0.4 },
    NR: { code: 'NR', name: 'Nauru', flag: '🇳🇷', region: 'oceania', subregion: 'micronesia', capital: 'Yaren', population: 13000, gdp: 0.2 },
    NZ: { code: 'NZ', name: 'New Zealand', flag: '🇳🇿', region: 'oceania', subregion: 'australasia', capital: 'Wellington', population: 5185000, gdp: 252 },
    PW: { code: 'PW', name: 'Palau', flag: '🇵🇼', region: 'oceania', subregion: 'micronesia', capital: 'Ngerulmud', population: 18000, gdp: 0.3 },
    PG: { code: 'PG', name: 'Papua New Guinea', flag: '🇵🇬', region: 'oceania', subregion: 'melanesia', capital: 'Port Moresby', population: 10143000, gdp: 31 },
    WS: { code: 'WS', name: 'Samoa', flag: '🇼🇸', region: 'oceania', subregion: 'polynesia', capital: 'Apia', population: 222000, gdp: 1 },
    SB: { code: 'SB', name: 'Solomon Islands', flag: '🇸🇧', region: 'oceania', subregion: 'melanesia', capital: 'Honiara', population: 724000, gdp: 2 },
    TO: { code: 'TO', name: 'Tonga', flag: '🇹🇴', region: 'oceania', subregion: 'polynesia', capital: 'Nuku\'alofa', population: 107000, gdp: 0.5 },
    TV: { code: 'TV', name: 'Tuvalu', flag: '🇹🇻', region: 'oceania', subregion: 'polynesia', capital: 'Funafuti', population: 11000, gdp: 0.1 },
    VU: { code: 'VU', name: 'Vanuatu', flag: '🇻🇺', region: 'oceania', subregion: 'melanesia', capital: 'Port Vila', population: 327000, gdp: 1 }
};

// ==================== ALLIANCES & ORGANIZATIONS ====================
const ALLIANCES = {
    // Security Alliances
    NATO: {
        id: 'nato',
        name: 'NATO',
        fullName: 'North Atlantic Treaty Organization',
        type: 'military',
        founded: 1949,
        members: ['US', 'GB', 'FR', 'DE', 'IT', 'CA', 'TR', 'ES', 'PL', 'NL', 'BE', 'GR', 'PT', 'CZ', 'HU', 'NO', 'DK', 'RO', 'BG', 'SK', 'HR', 'SI', 'LT', 'LV', 'EE', 'AL', 'ME', 'MK', 'IS', 'LU', 'FI', 'SE']
    },
    FIVE_EYES: {
        id: 'five_eyes',
        name: 'Five Eyes',
        fullName: 'Five Eyes Intelligence Alliance',
        type: 'intelligence',
        founded: 1946,
        members: ['US', 'GB', 'CA', 'AU', 'NZ']
    },
    QUAD: {
        id: 'quad',
        name: 'QUAD',
        fullName: 'Quadrilateral Security Dialogue',
        type: 'strategic',
        founded: 2007,
        members: ['US', 'JP', 'IN', 'AU']
    },
    AUKUS: {
        id: 'aukus',
        name: 'AUKUS',
        fullName: 'Australia-United Kingdom-United States',
        type: 'military',
        founded: 2021,
        members: ['AU', 'GB', 'US']
    },
    CSTO: {
        id: 'csto',
        name: 'CSTO',
        fullName: 'Collective Security Treaty Organization',
        type: 'military',
        founded: 1992,
        members: ['RU', 'BY', 'AM', 'KZ', 'KG', 'TJ']
    },
    SCO: {
        id: 'sco',
        name: 'SCO',
        fullName: 'Shanghai Cooperation Organisation',
        type: 'political',
        founded: 2001,
        members: ['CN', 'RU', 'IN', 'PK', 'KZ', 'KG', 'TJ', 'UZ', 'IR']
    },

    // Economic Blocs
    EU: {
        id: 'eu',
        name: 'EU',
        fullName: 'European Union',
        type: 'economic',
        founded: 1993,
        members: ['AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE']
    },
    BRICS: {
        id: 'brics',
        name: 'BRICS+',
        fullName: 'BRICS Plus',
        type: 'economic',
        founded: 2009,
        members: ['BR', 'RU', 'IN', 'CN', 'ZA', 'EG', 'ET', 'IR', 'AE', 'SA']
    },
    ASEAN: {
        id: 'asean',
        name: 'ASEAN',
        fullName: 'Association of Southeast Asian Nations',
        type: 'regional',
        founded: 1967,
        members: ['BN', 'KH', 'ID', 'LA', 'MY', 'MM', 'PH', 'SG', 'TH', 'VN']
    },
    GCC: {
        id: 'gcc',
        name: 'GCC',
        fullName: 'Gulf Cooperation Council',
        type: 'regional',
        founded: 1981,
        members: ['SA', 'AE', 'QA', 'KW', 'BH', 'OM']
    },
    MERCOSUR: {
        id: 'mercosur',
        name: 'MERCOSUR',
        fullName: 'Southern Common Market',
        type: 'economic',
        founded: 1991,
        members: ['AR', 'BR', 'PY', 'UY', 'BO']
    },
    AU_AFRICAN: {
        id: 'au',
        name: 'African Union',
        fullName: 'African Union',
        type: 'regional',
        founded: 2002,
        members: ['DZ', 'AO', 'BJ', 'BW', 'BF', 'BI', 'CV', 'CM', 'CF', 'TD', 'KM', 'CG', 'CD', 'CI', 'DJ', 'EG', 'GQ', 'ER', 'SZ', 'ET', 'GA', 'GM', 'GH', 'GN', 'GW', 'KE', 'LS', 'LR', 'LY', 'MG', 'MW', 'ML', 'MR', 'MU', 'MA', 'MZ', 'NA', 'NE', 'NG', 'RW', 'ST', 'SN', 'SC', 'SL', 'SO', 'ZA', 'SS', 'SD', 'TZ', 'TG', 'TN', 'UG', 'ZM', 'ZW']
    },
    ARAB_LEAGUE: {
        id: 'arab_league',
        name: 'Arab League',
        fullName: 'League of Arab States',
        type: 'regional',
        founded: 1945,
        members: ['DZ', 'BH', 'KM', 'DJ', 'EG', 'IQ', 'JO', 'KW', 'LB', 'LY', 'MR', 'MA', 'OM', 'PS', 'QA', 'SA', 'SO', 'SD', 'SY', 'TN', 'AE', 'YE']
    },
    SAARC: {
        id: 'saarc',
        name: 'SAARC',
        fullName: 'South Asian Association for Regional Cooperation',
        type: 'regional',
        founded: 1985,
        members: ['AF', 'BD', 'BT', 'IN', 'MV', 'NP', 'PK', 'LK']
    },
    COMMONWEALTH: {
        id: 'commonwealth',
        name: 'Commonwealth',
        fullName: 'Commonwealth of Nations',
        type: 'political',
        founded: 1931,
        members: ['AG', 'AU', 'BS', 'BD', 'BB', 'BZ', 'BW', 'BN', 'CM', 'CA', 'CY', 'DM', 'SZ', 'FJ', 'GM', 'GH', 'GD', 'GY', 'IN', 'JM', 'KE', 'KI', 'LS', 'MW', 'MY', 'MV', 'MT', 'MU', 'MZ', 'NA', 'NR', 'NZ', 'NG', 'PK', 'PG', 'RW', 'KN', 'LC', 'VC', 'WS', 'SC', 'SL', 'SG', 'SB', 'ZA', 'LK', 'TZ', 'TO', 'TT', 'TV', 'UG', 'GB', 'VU', 'ZM']
    },
    G7: {
        id: 'g7',
        name: 'G7',
        fullName: 'Group of Seven',
        type: 'economic',
        founded: 1975,
        members: ['US', 'GB', 'FR', 'DE', 'IT', 'CA', 'JP']
    },
    G20: {
        id: 'g20',
        name: 'G20',
        fullName: 'Group of Twenty',
        type: 'economic',
        founded: 1999,
        members: ['US', 'GB', 'FR', 'DE', 'IT', 'CA', 'JP', 'RU', 'CN', 'IN', 'BR', 'ZA', 'AU', 'KR', 'MX', 'ID', 'AR', 'SA', 'TR']
    }
};

// ==================== KNOWN SPECIAL RELATIONSHIPS ====================
// Define specific bilateral relationships that override general calculations
const SPECIAL_RELATIONSHIPS = {
    // Closest Allies (10/10)
    'US-GB': { type: 'allies', score: 10, description: 'Special Relationship - Closest allies with deep historical, cultural, and military ties' },
    'US-CA': { type: 'allies', score: 10, description: 'Closest neighbors and allies with integrated economies and defense' },
    'US-AU': { type: 'allies', score: 9, description: 'Major non-NATO ally with strong military and intelligence cooperation' },
    'US-JP': { type: 'allies', score: 9, description: 'Treaty allies with US military presence and deep economic ties' },
    'US-KR': { type: 'allies', score: 9, description: 'Treaty allies with mutual defense commitment' },
    'US-IL': { type: 'allies', score: 9, description: 'Strategic allies with extensive military aid and cooperation' },
    'GB-AU': { type: 'allies', score: 9, description: 'Commonwealth allies with AUKUS partnership' },
    'GB-NZ': { type: 'allies', score: 9, description: 'Commonwealth allies with Five Eyes intelligence sharing' },
    'FR-DE': { type: 'allies', score: 9, description: 'EU founding members and engine of European integration' },
    'AU-NZ': { type: 'allies', score: 10, description: 'ANZUS allies with deeply integrated relationship' },

    // Strategic Partners (7-8)
    'US-IN': { type: 'strategic', score: 8, description: 'Growing strategic partnership and QUAD members' },
    'IN-JP': { type: 'strategic', score: 8, description: 'Strategic partnership with defense cooperation' },
    'IN-FR': { type: 'strategic', score: 8, description: 'Strategic partnership with defense deals' },
    'IN-RU': { type: 'strategic', score: 7, description: 'Long-standing defense partnership despite Western pressure' },
    'CN-RU': { type: 'strategic', score: 8, description: 'Strategic partnership without formal alliance' },
    'CN-PK': { type: 'allies', score: 9, description: 'All-weather strategic partnership' },
    'SA-AE': { type: 'strategic', score: 8, description: 'GCC partners with strong economic ties' },

    // Complex Relationships (4-6)
    'US-CN': { type: 'complex', score: 4, description: 'Strategic competition with economic interdependence' },
    'US-RU': { type: 'conflict', score: 2, description: 'Adversarial relationship with proxy conflicts' },
    'IN-CN': { type: 'complex', score: 4, description: 'Border disputes alongside trade relations' },
    'CN-JP': { type: 'complex', score: 4, description: 'Historical tensions with economic ties' },
    'CN-TW': { type: 'conflict', score: 2, description: 'Cross-strait tensions with sovereignty dispute' },
    'IR-SA': { type: 'conflict', score: 2, description: 'Regional rivalry and proxy conflicts' },
    'GR-TR': { type: 'complex', score: 4, description: 'NATO allies with historical tensions' },
    'IN-BD': { type: 'strategic', score: 7, description: 'Close neighbors with some bilateral issues' },

    // Conflict Relationships (1-3)
    'IN-PK': { type: 'conflict', score: 1, description: 'Historical rivalry with Kashmir dispute' },
    'RU-UA': { type: 'conflict', score: 1, description: 'Active war and territorial conflict' },
    'IL-IR': { type: 'conflict', score: 1, description: 'Adversarial relationship with proxy conflicts' },
    'IL-PS': { type: 'conflict', score: 1, description: 'Ongoing conflict over Palestinian territories' },
    'KR-KP': { type: 'conflict', score: 1, description: 'Technically at war, divided peninsula' },
    'US-IR': { type: 'conflict', score: 2, description: 'Adversarial relationship with sanctions' },
    'US-KP': { type: 'conflict', score: 1, description: 'Hostile relationship with nuclear tensions' },
    'AM-AZ': { type: 'conflict', score: 2, description: 'Nagorno-Karabakh conflict' },
    'ET-ER': { type: 'complex', score: 3, description: 'Post-war normalization in progress' },
    'MA-DZ': { type: 'conflict', score: 2, description: 'Western Sahara dispute and regional rivalry' }
};

// ==================== RELATIONSHIP CALCULATOR ====================
const RelationshipEngine = {
    /**
     * Get relationship between two countries
     * @param {string} codeA - ISO code of country A
     * @param {string} codeB - ISO code of country B
     * @returns {Object} Relationship data
     */
    getRelationship(codeA, codeB) {
        // Normalize codes to uppercase
        const a = codeA.toUpperCase();
        const b = codeB.toUpperCase();
        
        // Check for special relationship (check both directions)
        const key1 = `${a}-${b}`;
        const key2 = `${b}-${a}`;
        
        if (SPECIAL_RELATIONSHIPS[key1]) {
            return this._buildRelationship(a, b, SPECIAL_RELATIONSHIPS[key1]);
        }
        if (SPECIAL_RELATIONSHIPS[key2]) {
            return this._buildRelationship(a, b, SPECIAL_RELATIONSHIPS[key2]);
        }
        
        // Calculate relationship based on shared memberships
        return this._calculateRelationship(a, b);
    },

    /**
     * Calculate relationship based on organizational memberships
     */
    _calculateRelationship(codeA, codeB) {
        const countryA = COUNTRIES[codeA];
        const countryB = COUNTRIES[codeB];
        
        if (!countryA || !countryB) {
            return this._buildRelationship(codeA, codeB, {
                type: 'neutral',
                score: 5,
                description: 'Standard diplomatic relations'
            });
        }
        
        let score = 5; // Base score
        let factors = [];
        
        // Check shared alliances
        for (const [allianceId, alliance] of Object.entries(ALLIANCES)) {
            const aInAlliance = alliance.members.includes(codeA);
            const bInAlliance = alliance.members.includes(codeB);
            
            if (aInAlliance && bInAlliance) {
                factors.push(alliance.name);
                
                // Weight by alliance type
                switch (alliance.type) {
                    case 'military':
                        score += 2;
                        break;
                    case 'intelligence':
                        score += 2.5;
                        break;
                    case 'economic':
                        score += 1.5;
                        break;
                    case 'regional':
                        score += 1;
                        break;
                    case 'political':
                        score += 0.5;
                        break;
                    case 'strategic':
                        score += 1.5;
                        break;
                }
            }
        }
        
        // Same region bonus
        if (countryA.region === countryB.region) {
            score += 0.5;
        }
        
        // Same subregion bonus
        if (countryA.subregion === countryB.subregion) {
            score += 0.5;
        }
        
        // Cap score at 10
        score = Math.min(10, Math.max(1, score));
        
        // Determine type based on score
        let type;
        if (score >= 8) type = 'allies';
        else if (score >= 6) type = 'strategic';
        else if (score >= 4) type = 'neutral';
        else type = 'complex';
        
        // Generate description
        let description;
        if (factors.length > 0) {
            description = `Shared membership in: ${factors.join(', ')}`;
        } else {
            description = 'Standard bilateral relations';
        }
        
        return this._buildRelationship(codeA, codeB, { type, score, description });
    },

    /**
     * Build full relationship object
     */
    _buildRelationship(codeA, codeB, baseData) {
        const countryA = COUNTRIES[codeA];
        const countryB = COUNTRIES[codeB];
        
        return {
            countries: [codeA, codeB],
            countryA: countryA,
            countryB: countryB,
            type: baseData.type,
            score: Math.round(baseData.score * 10) / 10,
            description: baseData.description,
            parameters: this._generateParameters(codeA, codeB, baseData)
        };
    },

    /**
     * Generate parameter scores for a relationship
     */
    _generateParameters(codeA, codeB, baseData) {
        const params = {};
        const baseScore = baseData.score;
        
        PARAMETERS.forEach(param => {
            // Generate varied scores around base
            let variance = (Math.random() - 0.5) * 3;
            let paramScore = Math.round((baseScore + variance) * 10) / 10;
            paramScore = Math.min(10, Math.max(1, paramScore));
            
            // Special adjustments based on relationship type
            if (baseData.type === 'conflict') {
                if (param.id === 'conflict') paramScore = Math.max(8, paramScore);
                if (param.id === 'military') paramScore = Math.min(3, paramScore);
                if (param.id === 'diplomatic') paramScore = Math.min(4, paramScore);
            }
            
            if (baseData.type === 'allies') {
                if (param.id === 'conflict') paramScore = Math.min(2, paramScore);
                if (param.id === 'military') paramScore = Math.max(7, paramScore);
                if (param.id === 'diplomatic') paramScore = Math.max(8, paramScore);
            }
            
            params[param.id] = {
                id: param.id,
                name: param.name,
                icon: param.icon,
                category: param.category,
                score: paramScore,
                summary: this._generateParamSummary(param.id, paramScore),
                bullets: this._generateParamBullets(param.id, paramScore, codeA, codeB),
                analysis: this._generateParamAnalysis(param.id, paramScore)
            };
        });
        
        return params;
    },

    /**
     * Generate parameter summary
     */
    _generateParamSummary(paramId, score) {
        const summaries = {
            high: [
                'Excellent cooperation with deep institutional ties',
                'Strong partnership with regular high-level engagement',
                'Robust collaboration across multiple dimensions'
            ],
            medium: [
                'Moderate engagement with room for growth',
                'Standard relationship with periodic cooperation',
                'Mixed interactions with both positives and challenges'
            ],
            low: [
                'Limited engagement with significant barriers',
                'Strained relations with ongoing difficulties',
                'Minimal cooperation due to underlying tensions'
            ]
        };
        
        let level = score >= 7 ? 'high' : (score >= 4 ? 'medium' : 'low');
        return summaries[level][Math.floor(Math.random() * summaries[level].length)];
    },

    /**
     * Generate parameter bullet points
     */
    _generateParamBullets(paramId, score, codeA, codeB) {
        const countryA = COUNTRIES[codeA]?.name || codeA;
        const countryB = COUNTRIES[codeB]?.name || codeB;
        
        // Generic bullets based on parameter type
        const bulletTemplates = {
            trade: [
                `<strong>Trade Volume:</strong> ${score > 5 ? 'Significant' : 'Limited'} bilateral trade relations`,
                `<strong>Agreements:</strong> ${score > 7 ? 'Multiple FTAs in force' : 'Standard WTO terms apply'}`,
                `<strong>Key Sectors:</strong> ${score > 5 ? 'Diverse trade portfolio' : 'Limited trade diversification'}`,
                `<strong>Balance:</strong> Trade relationship ${score > 6 ? 'relatively balanced' : 'shows asymmetries'}`
            ],
            military: [
                `<strong>Defense Cooperation:</strong> ${score > 7 ? 'Extensive' : score > 4 ? 'Moderate' : 'Minimal'} military ties`,
                `<strong>Exercises:</strong> ${score > 6 ? 'Regular joint exercises' : 'Infrequent or no joint exercises'}`,
                `<strong>Arms Trade:</strong> ${score > 5 ? 'Active defense trade' : 'Limited defense commerce'}`,
                `<strong>Bases:</strong> ${score > 8 ? 'Military presence agreements' : 'No base arrangements'}`
            ],
            diplomatic: [
                `<strong>Embassy Status:</strong> ${score > 3 ? 'Full diplomatic relations' : 'Limited or no representation'}`,
                `<strong>High-Level Visits:</strong> ${score > 6 ? 'Regular summit meetings' : 'Infrequent high-level contact'}`,
                `<strong>Dialogue:</strong> ${score > 5 ? 'Active bilateral mechanisms' : 'Limited formal dialogue'}`,
                `<strong>Recognition:</strong> ${score > 2 ? 'Mutual recognition' : 'Recognition issues exist'}`
            ],
            conflict: [
                `<strong>Tension Level:</strong> ${score > 7 ? 'High risk' : score > 4 ? 'Moderate' : 'Low'} conflict potential`,
                `<strong>Disputes:</strong> ${score > 5 ? 'Active disagreements exist' : 'No major disputes'}`,
                `<strong>History:</strong> ${score > 6 ? 'Past conflicts affect relations' : 'No significant conflict history'}`,
                `<strong>Flashpoints:</strong> ${score > 7 ? 'Identified risk areas' : 'No immediate flashpoints'}`
            ]
        };
        
        // Return template bullets or generate generic ones
        if (bulletTemplates[paramId]) {
            return bulletTemplates[paramId];
        }
        
        // Generic bullets for other parameters
        return [
            `<strong>Status:</strong> ${score > 7 ? 'Strong' : score > 4 ? 'Moderate' : 'Weak'} bilateral engagement`,
            `<strong>Cooperation:</strong> ${score > 6 ? 'Active programs in place' : 'Limited formal cooperation'}`,
            `<strong>Trend:</strong> Relationship ${score > 5 ? 'showing positive momentum' : 'faces challenges'}`,
            `<strong>Outlook:</strong> ${score > 5 ? 'Potential for growth' : 'Requires diplomatic attention'}`
        ];
    },

    /**
     * Generate parameter analysis text
     */
    _generateParamAnalysis(paramId, score) {
        if (score >= 8) {
            return 'This dimension shows exceptional cooperation between the two nations, reflecting shared interests, values, and institutional frameworks that facilitate deep engagement. Historical ties and strategic alignment have created a robust foundation for continued partnership.';
        } else if (score >= 6) {
            return 'Relations in this area are positive with established mechanisms for cooperation. While not at the level of closest partnerships, both countries maintain productive engagement with potential for further development based on mutual interests.';
        } else if (score >= 4) {
            return 'This dimension shows average levels of engagement typical of standard bilateral relations. Neither particularly close nor strained, the relationship offers opportunities for improvement through targeted diplomatic efforts.';
        } else {
            return 'Significant challenges exist in this area, reflecting underlying tensions or competing interests. Historical factors, geopolitical competition, or unresolved disputes contribute to difficulties that require sustained diplomatic attention.';
        }
    },

    /**
     * Get all relationships for a country
     */
    getCountryRelationships(countryCode) {
        const code = countryCode.toUpperCase();
        const relationships = {
            allies: [],
            strategic: [],
            neutral: [],
            complex: [],
            conflict: []
        };
        
        Object.keys(COUNTRIES).forEach(otherCode => {
            if (otherCode !== code) {
                const rel = this.getRelationship(code, otherCode);
                relationships[rel.type].push({
                    code: otherCode,
                    ...COUNTRIES[otherCode],
                    relationship: rel
                });
            }
        });
        
        // Sort each category by score
        Object.keys(relationships).forEach(type => {
            relationships[type].sort((a, b) => b.relationship.score - a.relationship.score);
        });
        
        return relationships;
    },

    /**
     * Get countries organized by rings for radial view
     */
    getRadialData(centerCode) {
        const relationships = this.getCountryRelationships(centerCode);
        
        return {
            center: COUNTRIES[centerCode.toUpperCase()],
            rings: [
                { type: 'allies', label: 'Allies', color: '#00c853', countries: relationships.allies },
                { type: 'strategic', label: 'Strategic Partners', color: '#2196f3', countries: relationships.strategic },
                { type: 'neutral', label: 'Neutral', color: '#ffc107', countries: relationships.neutral },
                { type: 'complex', label: 'Complex', color: '#ff9800', countries: relationships.complex },
                { type: 'conflict', label: 'Conflict', color: '#f44336', countries: relationships.conflict }
            ],
            stats: {
                allies: relationships.allies.length,
                strategic: relationships.strategic.length,
                neutral: relationships.neutral.length,
                complex: relationships.complex.length,
                conflict: relationships.conflict.length,
                total: Object.values(relationships).reduce((sum, arr) => sum + arr.length, 0)
            }
        };
    }
};

// ==================== UTILITY FUNCTIONS ====================
const DataUtils = {
    /**
     * Get countries by region
     */
    getCountriesByRegion(region) {
        if (region === 'all') return Object.values(COUNTRIES);
        return Object.values(COUNTRIES).filter(c => c.region === region);
    },

    /**
     * Search countries by name
     */
    searchCountries(query) {
        const q = query.toLowerCase().trim();
        if (!q) return [];
        
        return Object.values(COUNTRIES).filter(c => 
            c.name.toLowerCase().includes(q) ||
            c.code.toLowerCase().includes(q) ||
            c.capital.toLowerCase().includes(q)
        ).slice(0, 10);
    },

    /**
     * Get country by code
     */
    getCountry(code) {
        return COUNTRIES[code.toUpperCase()];
    },

    /**
     * Get all countries sorted by name
     */
    getAllCountries() {
        return Object.values(COUNTRIES).sort((a, b) => a.name.localeCompare(b.name));
    },

    /**
     * Get countries grouped by region
     */
    getCountriesGrouped() {
        const grouped = {
            asia: [],
            europe: [],
            africa: [],
            americas: [],
            oceania: []
        };
        
        Object.values(COUNTRIES).forEach(country => {
            if (grouped[country.region]) {
                grouped[country.region].push(country);
            }
        });
        
        // Sort each region
        Object.keys(grouped).forEach(region => {
            grouped[region].sort((a, b) => a.name.localeCompare(b.name));
        });
        
        return grouped;
    },

    /**
     * Get parameter info
     */
    getParameter(id) {
        return PARAMETERS.find(p => p.id === id);
    },

    /**
     * Get all parameters
     */
    getAllParameters() {
        return PARAMETERS;
    },

    /**
     * Get alliance info
     */
    getAlliance(id) {
        return ALLIANCES[id.toUpperCase()];
    },

    /**
     * Get all alliances for a country
     */
    getCountryAlliances(code) {
        const upperCode = code.toUpperCase();
        const result = [];
        
        Object.values(ALLIANCES).forEach(alliance => {
            if (alliance.members.includes(upperCode)) {
                result.push(alliance);
            }
        });
        
        return result;
    },

    /**
     * Format population number
     */
    formatPopulation(pop) {
        if (pop >= 1000000000) return (pop / 1000000000).toFixed(2) + 'B';
        if (pop >= 1000000) return (pop / 1000000).toFixed(1) + 'M';
        if (pop >= 1000) return (pop / 1000).toFixed(0) + 'K';
        return pop.toString();
    },

    /**
     * Format GDP number
     */
    formatGDP(gdp) {
        if (gdp >= 1000) return '$' + (gdp / 1000).toFixed(2) + 'T';
        return '$' + gdp + 'B';
    },

    /**
     * Get region display name
     */
    getRegionName(region) {
        const names = {
            asia: 'Asia',
            europe: 'Europe',
            africa: 'Africa',
            americas: 'Americas',
            oceania: 'Oceania'
        };
        return names[region] || region;
    },

    /**
     * Get relationship type color
     */
    getTypeColor(type) {
        const colors = {
            allies: '#00c853',
            strategic: '#2196f3',
            neutral: '#ffc107',
            complex: '#ff9800',
            conflict: '#f44336'
        };
        return colors[type] || '#888888';
    },

    /**
     * Get type display name
     */
    getTypeName(type) {
        const names = {
            allies: 'Allies',
            strategic: 'Strategic Partners',
            neutral: 'Neutral',
            complex: 'Complex',
            conflict: 'Conflict'
        };
        return names[type] || type;
    }
};

// Export for use in engine.js
window.PARAMETERS = PARAMETERS;
window.COUNTRIES = COUNTRIES;
window.ALLIANCES = ALLIANCES;
window.RelationshipEngine = RelationshipEngine;
window.DataUtils = DataUtils;

console.log('📊 Unity Atlas Data Module Loaded');
console.log(`   → ${Object.keys(COUNTRIES).length} Countries`);
console.log(`   → ${PARAMETERS.length} Parameters`);
console.log(`   → ${Object.keys(ALLIANCES).length} Alliances`);
