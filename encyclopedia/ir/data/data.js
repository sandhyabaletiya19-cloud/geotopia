/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * UNITY ATLAS - Data Module
 * Geotopia Encyclopedia - International Relations
 * 
 * This file contains all data structures, parameters, and relationship logic.
 * Country-specific data will be loaded from separate files.
 * ═══════════════════════════════════════════════════════════════════════════════
 */

'use strict';

// ═══════════════════════════════════════════════════════════════════════════════
// GLOBAL DATA NAMESPACE
// ═══════════════════════════════════════════════════════════════════════════════

const UnityAtlasData = (function() {

    // ═══════════════════════════════════════════════════════════════════════════
    // 16 PARAMETERS DEFINITION
    // ═══════════════════════════════════════════════════════════════════════════

    const PARAMETERS = [
        {
            id: 'trade',
            name: 'Trade Relations',
            icon: 'fa-chart-line',
            category: 'Economic',
            description: 'Bilateral trade volume, agreements, tariffs, and economic interdependence',
            factors: [
                'Annual bilateral trade volume',
                'Trade balance (surplus/deficit)',
                'Free Trade Agreements (FTAs)',
                'Tariff structures and barriers',
                'Key export/import sectors',
                'Trade dependency ratio',
                'Recent trade trends',
                'Trade disputes or sanctions'
            ]
        },
        {
            id: 'military',
            name: 'Military Cooperation',
            icon: 'fa-shield-halved',
            category: 'Security',
            description: 'Defense partnerships, joint exercises, arms trade, and military bases',
            factors: [
                'Joint military exercises',
                'Arms sales and procurement',
                'Military base agreements',
                'Defense technology sharing',
                'Training programs',
                'Military aid',
                'Command structures integration',
                'Interoperability level'
            ]
        },
        {
            id: 'diplomatic',
            name: 'Diplomatic Relations',
            icon: 'fa-building-columns',
            category: 'Political',
            description: 'Embassy presence, diplomatic visits, recognition, and bilateral ties',
            factors: [
                'Embassy and consulate presence',
                'Head of state visits',
                'Diplomatic recognition status',
                'Ambassador-level representation',
                'Bilateral agreements signed',
                'Diplomatic incidents history',
                'Support in international forums',
                'Special envoy exchanges'
            ]
        },
        {
            id: 'border',
            name: 'Border Relations',
            icon: 'fa-border-all',
            category: 'Territorial',
            description: 'Border disputes, demarcation, crossings, and territorial issues',
            factors: [
                'Shared border length',
                'Border demarcation status',
                'Territorial disputes',
                'Border crossing facilities',
                'Border security cooperation',
                'Illegal crossing issues',
                'Buffer zones',
                'Historical border changes'
            ]
        },
        {
            id: 'historical',
            name: 'Historical Ties',
            icon: 'fa-landmark',
            category: 'Cultural',
            description: 'Colonial history, past conflicts, shared heritage, and historical connections',
            factors: [
                'Colonial or imperial history',
                'Past wars or conflicts',
                'Historical alliances',
                'Shared cultural heritage',
                'Independence movements',
                'Historical grievances',
                'Commemorative events',
                'Historical treaties'
            ]
        },
        {
            id: 'economic',
            name: 'Economic Integration',
            icon: 'fa-coins',
            category: 'Economic',
            description: 'FDI flows, investment treaties, economic corridors, and financial ties',
            factors: [
                'Foreign Direct Investment (FDI)',
                'Bilateral Investment Treaties',
                'Economic corridors/projects',
                'Currency agreements',
                'Banking sector ties',
                'Infrastructure investments',
                'Joint economic zones',
                'Economic aid programs'
            ]
        },
        {
            id: 'cultural',
            name: 'Cultural Exchange',
            icon: 'fa-masks-theater',
            category: 'Cultural',
            description: 'Student exchanges, diaspora, tourism, and people-to-people ties',
            factors: [
                'Student exchange programs',
                'Diaspora population size',
                'Tourism flows',
                'Cultural centers abroad',
                'Language learning programs',
                'Joint cultural events',
                'Media exchange',
                'Sports cooperation'
            ]
        },
        {
            id: 'visa',
            name: 'Visa & Mobility',
            icon: 'fa-passport',
            category: 'Political',
            description: 'Visa requirements, freedom of movement, and travel accessibility',
            factors: [
                'Visa requirements',
                'Visa-free access',
                'E-visa availability',
                'Work permit ease',
                'Residency programs',
                'Passport power reciprocity',
                'Immigration quotas',
                'Travel advisories'
            ]
        },
        {
            id: 'strategic',
            name: 'Strategic Alignment',
            icon: 'fa-chess',
            category: 'Security',
            description: 'Geopolitical importance, power dynamics, and strategic partnerships',
            factors: [
                'Geopolitical alignment',
                'Strategic partnership status',
                'Common adversaries',
                'Regional influence balance',
                'Power projection support',
                'Strategic dialogue mechanisms',
                'Crisis coordination',
                'Long-term strategic plans'
            ]
        },
        {
            id: 'intelligence',
            name: 'Intelligence Sharing',
            icon: 'fa-user-secret',
            category: 'Security',
            description: 'Intelligence cooperation, counter-terrorism, and information sharing',
            factors: [
                'Intelligence sharing agreements',
                'Counter-terrorism cooperation',
                'Joint intelligence operations',
                'Signals intelligence sharing',
                'Five Eyes or similar membership',
                'Cyber intelligence cooperation',
                'Information security trust',
                'Classified sharing level'
            ]
        },
        {
            id: 'energy',
            name: 'Energy Relations',
            icon: 'fa-bolt',
            category: 'Economic',
            description: 'Oil, gas, pipelines, nuclear cooperation, and energy security',
            factors: [
                'Oil and gas trade',
                'Pipeline agreements',
                'Nuclear energy cooperation',
                'Renewable energy partnerships',
                'Energy grid connections',
                'Strategic petroleum reserves',
                'Energy pricing agreements',
                'Clean energy initiatives'
            ]
        },
        {
            id: 'technology',
            name: 'Technology Partnership',
            icon: 'fa-microchip',
            category: 'Economic',
            description: 'R&D collaboration, tech transfer, and innovation partnerships',
            factors: [
                'R&D collaboration',
                'Technology transfer agreements',
                'Joint innovation programs',
                'Startup ecosystem ties',
                'Patent sharing',
                'Tech standards alignment',
                'Digital infrastructure',
                'AI and emerging tech cooperation'
            ]
        },
        {
            id: 'defense',
            name: 'Defense Agreements',
            icon: 'fa-handshake',
            category: 'Security',
            description: 'Mutual defense treaties, NATO, and formal security alliances',
            factors: [
                'Mutual defense treaties',
                'NATO or alliance membership',
                'Security guarantee commitments',
                'Collective defense clauses',
                'Status of Forces Agreements',
                'Defense pact obligations',
                'Nuclear umbrella coverage',
                'Extended deterrence'
            ]
        },
        {
            id: 'political',
            name: 'Political Alignment',
            icon: 'fa-scale-balanced',
            category: 'Political',
            description: 'UN voting patterns, ideology, and governance system alignment',
            factors: [
                'UN voting alignment',
                'Political ideology similarity',
                'Governance system type',
                'Human rights positions',
                'Democratic values alignment',
                'Policy coordination',
                'Political party ties',
                'Electoral observation'
            ]
        },
        {
            id: 'organizations',
            name: 'Shared Organizations',
            icon: 'fa-globe',
            category: 'Political',
            description: 'UN, NATO, EU, regional blocs, and multilateral memberships',
            factors: [
                'UN agencies membership',
                'Regional organization membership',
                'Economic bloc membership',
                'Security alliance membership',
                'Cultural organization ties',
                'Sports federation alignment',
                'Scientific cooperation bodies',
                'Environmental agreements'
            ]
        },
        {
            id: 'conflict',
            name: 'Conflict Risk',
            icon: 'fa-triangle-exclamation',
            category: 'Security',
            description: 'Current tensions, flashpoints, and probability of conflict',
            factors: [
                'Active disputes',
                'Military standoffs',
                'Recent incidents',
                'Escalation potential',
                'De-escalation mechanisms',
                'Third-party mediation',
                'Conflict history',
                'Nuclear dimension'
            ]
        }
    ];

    // ═══════════════════════════════════════════════════════════════════════════
    // RELATIONSHIP TYPE DEFINITIONS
    // ═══════════════════════════════════════════════════════════════════════════

    const RELATIONSHIP_TYPES = {
        allies: {
            id: 'allies',
            name: 'Allies',
            color: '#00c853',
            bgColor: 'rgba(0, 200, 83, 0.15)',
            ring: 1,
            scoreRange: [8, 10],
            description: 'Closest partners with deep institutional ties'
        },
        strategic: {
            id: 'strategic',
            name: 'Strategic Partners',
            color: '#2196f3',
            bgColor: 'rgba(33, 150, 243, 0.15)',
            ring: 2,
            scoreRange: [6, 8],
            description: 'Strong partnerships with shared interests'
        },
        neutral: {
            id: 'neutral',
            name: 'Neutral',
            color: '#ffc107',
            bgColor: 'rgba(255, 193, 7, 0.15)',
            ring: 3,
            scoreRange: [4, 6],
            description: 'Standard diplomatic relations'
        },
        complex: {
            id: 'complex',
            name: 'Complex',
            color: '#ff9800',
            bgColor: 'rgba(255, 152, 0, 0.15)',
            ring: 4,
            scoreRange: [3, 4],
            description: 'Mixed relations with cooperation and friction'
        },
        conflict: {
            id: 'conflict',
            name: 'Conflict/Tension',
            color: '#f44336',
            bgColor: 'rgba(244, 67, 54, 0.15)',
            ring: 5,
            scoreRange: [1, 3],
            description: 'Active tensions, disputes, or hostility'
        }
    };

    // ═══════════════════════════════════════════════════════════════════════════
    // REGIONS DEFINITION
    // ═══════════════════════════════════════════════════════════════════════════

    const REGIONS = {
        asia: {
            id: 'asia',
            name: 'Asia',
            emoji: '🌏',
            subregions: ['east', 'southeast', 'south', 'central', 'west']
        },
        africa: {
            id: 'africa',
            name: 'Africa',
            emoji: '🌍',
            subregions: ['north', 'west', 'central', 'east', 'southern']
        },
        europe: {
            id: 'europe',
            name: 'Europe',
            emoji: '🌍',
            subregions: ['western', 'eastern', 'northern', 'southern', 'central']
        },
        americas: {
            id: 'americas',
            name: 'Americas',
            emoji: '🌎',
            subregions: ['north', 'central', 'south', 'caribbean']
        },
        oceania: {
            id: 'oceania',
            name: 'Oceania',
            emoji: '🌏',
            subregions: ['australia', 'melanesia', 'micronesia', 'polynesia']
        }
    };

    // ═══════════════════════════════════════════════════════════════════════════
    // MAJOR ALLIANCES & ORGANIZATIONS
    // ═══════════════════════════════════════════════════════════════════════════

    const ALLIANCES = {
        nato: {
            id: 'nato',
            name: 'NATO',
            fullName: 'North Atlantic Treaty Organization',
            type: 'military',
            members: ['US', 'GB', 'FR', 'DE', 'IT', 'CA', 'TR', 'ES', 'PL', 'NL', 'BE', 'GR', 'PT', 'CZ', 'HU', 'NO', 'DK', 'RO', 'BG', 'SK', 'HR', 'SI', 'LT', 'LV', 'EE', 'AL', 'ME', 'MK', 'IS', 'LU', 'FI', 'SE']
        },
        eu: {
            id: 'eu',
            name: 'European Union',
            fullName: 'European Union',
            type: 'political-economic',
            members: ['DE', 'FR', 'IT', 'ES', 'PL', 'RO', 'NL', 'BE', 'GR', 'CZ', 'PT', 'SE', 'HU', 'AT', 'BG', 'DK', 'FI', 'SK', 'IE', 'HR', 'LT', 'SI', 'LV', 'EE', 'CY', 'LU', 'MT']
        },
        fiveEyes: {
            id: 'fiveEyes',
            name: 'Five Eyes',
            fullName: 'Five Eyes Intelligence Alliance',
            type: 'intelligence',
            members: ['US', 'GB', 'CA', 'AU', 'NZ']
        },
        quad: {
            id: 'quad',
            name: 'QUAD',
            fullName: 'Quadrilateral Security Dialogue',
            type: 'strategic',
            members: ['US', 'JP', 'IN', 'AU']
        },
        aukus: {
            id: 'aukus',
            name: 'AUKUS',
            fullName: 'Australia-United Kingdom-United States',
            type: 'military',
            members: ['AU', 'GB', 'US']
        },
        brics: {
            id: 'brics',
            name: 'BRICS+',
            fullName: 'BRICS Plus',
            type: 'economic-political',
            members: ['BR', 'RU', 'IN', 'CN', 'ZA', 'EG', 'ET', 'IR', 'AE', 'SA']
        },
        sco: {
            id: 'sco',
            name: 'SCO',
            fullName: 'Shanghai Cooperation Organisation',
            type: 'political-security',
            members: ['CN', 'RU', 'IN', 'PK', 'KZ', 'KG', 'TJ', 'UZ', 'IR']
        },
        asean: {
            id: 'asean',
            name: 'ASEAN',
            fullName: 'Association of Southeast Asian Nations',
            type: 'political-economic',
            members: ['ID', 'MY', 'PH', 'SG', 'TH', 'BN', 'VN', 'LA', 'MM', 'KH']
        },
        gcc: {
            id: 'gcc',
            name: 'GCC',
            fullName: 'Gulf Cooperation Council',
            type: 'political-economic',
            members: ['SA', 'AE', 'QA', 'KW', 'BH', 'OM']
        },
        au: {
            id: 'au',
            name: 'African Union',
            fullName: 'African Union',
            type: 'political',
            members: [] // All 54 African nations
        },
        arabLeague: {
            id: 'arabLeague',
            name: 'Arab League',
            fullName: 'League of Arab States',
            type: 'political',
            members: ['EG', 'SA', 'IQ', 'JO', 'LB', 'SY', 'YE', 'LY', 'SD', 'MA', 'TN', 'KW', 'AE', 'QA', 'BH', 'OM', 'DZ', 'MR', 'SO', 'DJ', 'KM', 'PS']
        },
        csto: {
            id: 'csto',
            name: 'CSTO',
            fullName: 'Collective Security Treaty Organization',
            type: 'military',
            members: ['RU', 'BY', 'AM', 'KZ', 'KG', 'TJ']
        },
        commonwealth: {
            id: 'commonwealth',
            name: 'Commonwealth',
            fullName: 'Commonwealth of Nations',
            type: 'political-cultural',
            members: ['GB', 'CA', 'AU', 'NZ', 'IN', 'PK', 'BD', 'NG', 'ZA', 'KE', 'GH', 'MY', 'SG', 'JM', 'TT'] // Partial list
        },
        saarc: {
            id: 'saarc',
            name: 'SAARC',
            fullName: 'South Asian Association for Regional Cooperation',
            type: 'political-economic',
            members: ['IN', 'PK', 'BD', 'LK', 'NP', 'BT', 'MV', 'AF']
        },
        mercosur: {
            id: 'mercosur',
            name: 'MERCOSUR',
            fullName: 'Southern Common Market',
            type: 'economic',
            members: ['BR', 'AR', 'UY', 'PY']
        }
    };

    // ═══════════════════════════════════════════════════════════════════════════
    // COUNTRIES DATABASE - STRUCTURE
    // Each country file will follow this format
    // ═══════════════════════════════════════════════════════════════════════════

    /**
     * Country data structure template:
     * {
     *     code: "IN",                    // ISO 3166-1 alpha-2
     *     name: "India",
     *     flag: "🇮🇳",
     *     region: "asia",
     *     subregion: "south",
     *     capital: "New Delhi",
     *     population: 1428000000,
     *     gdp: 3730,                     // in billions USD
     *     coords: [20.59, 78.96],        // [lat, lng]
     *     relationships: {
     *         "US": {
     *             type: "strategic",
     *             score: 7.5,
     *             parameters: {
     *                 trade: { score: 8, summary: "...", bullets: [...], details: "..." },
     *                 military: { score: 7, summary: "...", bullets: [...], details: "..." },
     *                 // ... all 16 parameters
     *             }
     *         },
     *         // ... relationships with other countries
     *     }
     * }
     */

    // ═══════════════════════════════════════════════════════════════════════════
    // SAMPLE COUNTRY DATA (For Development/Testing)
    // This will be replaced by individual country files
    // ═══════════════════════════════════════════════════════════════════════════

    const COUNTRIES = {
        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: India
        // ─────────────────────────────────────────────────────────────────────────
        IN: {
            code: 'IN',
            name: 'India',
            flag: '🇮🇳',
            region: 'asia',
            subregion: 'south',
            capital: 'New Delhi',
            population: 1428000000,
            gdp: 3730,
            coords: [20.59, 78.96]
        },

        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: United States
        // ─────────────────────────────────────────────────────────────────────────
        US: {
            code: 'US',
            name: 'United States',
            flag: '🇺🇸',
            region: 'americas',
            subregion: 'north',
            capital: 'Washington D.C.',
            population: 340000000,
            gdp: 28780,
            coords: [37.09, -95.71]
        },

        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: China
        // ─────────────────────────────────────────────────────────────────────────
        CN: {
            code: 'CN',
            name: 'China',
            flag: '🇨🇳',
            region: 'asia',
            subregion: 'east',
            capital: 'Beijing',
            population: 1425000000,
            gdp: 18320,
            coords: [35.86, 104.19]
        },

        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: United Kingdom
        // ─────────────────────────────────────────────────────────────────────────
        GB: {
            code: 'GB',
            name: 'United Kingdom',
            flag: '🇬🇧',
            region: 'europe',
            subregion: 'western',
            capital: 'London',
            population: 67000000,
            gdp: 3340,
            coords: [55.37, -3.43]
        },

        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: Russia
        // ─────────────────────────────────────────────────────────────────────────
        RU: {
            code: 'RU',
            name: 'Russia',
            flag: '🇷🇺',
            region: 'europe',
            subregion: 'eastern',
            capital: 'Moscow',
            population: 144000000,
            gdp: 2240,
            coords: [61.52, 105.31]
        },

        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: Japan
        // ─────────────────────────────────────────────────────────────────────────
        JP: {
            code: 'JP',
            name: 'Japan',
            flag: '🇯🇵',
            region: 'asia',
            subregion: 'east',
            capital: 'Tokyo',
            population: 125000000,
            gdp: 4230,
            coords: [36.20, 138.25]
        },

        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: Germany
        // ─────────────────────────────────────────────────────────────────────────
        DE: {
            code: 'DE',
            name: 'Germany',
            flag: '🇩🇪',
            region: 'europe',
            subregion: 'western',
            capital: 'Berlin',
            population: 84000000,
            gdp: 4520,
            coords: [51.16, 10.45]
        },

        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: France
        // ─────────────────────────────────────────────────────────────────────────
        FR: {
            code: 'FR',
            name: 'France',
            flag: '🇫🇷',
            region: 'europe',
            subregion: 'western',
            capital: 'Paris',
            population: 68000000,
            gdp: 3050,
            coords: [46.22, 2.21]
        },

        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: Pakistan
        // ─────────────────────────────────────────────────────────────────────────
        PK: {
            code: 'PK',
            name: 'Pakistan',
            flag: '🇵🇰',
            region: 'asia',
            subregion: 'south',
            capital: 'Islamabad',
            population: 240000000,
            gdp: 376,
            coords: [30.37, 69.34]
        },

        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: Australia
        // ─────────────────────────────────────────────────────────────────────────
        AU: {
            code: 'AU',
            name: 'Australia',
            flag: '🇦🇺',
            region: 'oceania',
            subregion: 'australia',
            capital: 'Canberra',
            population: 26000000,
            gdp: 1690,
            coords: [-25.27, 133.77]
        },

        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: Brazil
        // ─────────────────────────────────────────────────────────────────────────
        BR: {
            code: 'BR',
            name: 'Brazil',
            flag: '🇧🇷',
            region: 'americas',
            subregion: 'south',
            capital: 'Brasília',
            population: 216000000,
            gdp: 2130,
            coords: [-14.23, -51.92]
        },

        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: Canada
        // ─────────────────────────────────────────────────────────────────────────
        CA: {
            code: 'CA',
            name: 'Canada',
            flag: '🇨🇦',
            region: 'americas',
            subregion: 'north',
            capital: 'Ottawa',
            population: 40000000,
            gdp: 2140,
            coords: [56.13, -106.34]
        },

        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: South Africa
        // ─────────────────────────────────────────────────────────────────────────
        ZA: {
            code: 'ZA',
            name: 'South Africa',
            flag: '🇿🇦',
            region: 'africa',
            subregion: 'southern',
            capital: 'Pretoria',
            population: 60000000,
            gdp: 405,
            coords: [-30.56, 22.93]
        },

        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: Saudi Arabia
        // ─────────────────────────────────────────────────────────────────────────
        SA: {
            code: 'SA',
            name: 'Saudi Arabia',
            flag: '🇸🇦',
            region: 'asia',
            subregion: 'west',
            capital: 'Riyadh',
            population: 36000000,
            gdp: 1069,
            coords: [23.88, 45.07]
        },

        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: Ukraine
        // ─────────────────────────────────────────────────────────────────────────
        UA: {
            code: 'UA',
            name: 'Ukraine',
            flag: '🇺🇦',
            region: 'europe',
            subregion: 'eastern',
            capital: 'Kyiv',
            population: 37000000,
            gdp: 160,
            coords: [48.37, 31.16]
        },

        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: Israel
        // ─────────────────────────────────────────────────────────────────────────
        IL: {
            code: 'IL',
            name: 'Israel',
            flag: '🇮🇱',
            region: 'asia',
            subregion: 'west',
            capital: 'Jerusalem',
            population: 9800000,
            gdp: 525,
            coords: [31.04, 34.85]
        },

        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: Iran
        // ─────────────────────────────────────────────────────────────────────────
        IR: {
            code: 'IR',
            name: 'Iran',
            flag: '🇮🇷',
            region: 'asia',
            subregion: 'west',
            capital: 'Tehran',
            population: 89000000,
            gdp: 367,
            coords: [32.42, 53.68]
        },

        // ─────────────────────────────────────────────────────────────────────────
              // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: South Korea
        // ─────────────────────────────────────────────────────────────────────────
        KR: {
            code: 'KR',
            name: 'South Korea',
            flag: '🇰🇷',
            region: 'asia',
            subregion: 'east',
            capital: 'Seoul',
            population: 51000000,
            gdp: 1710,
            coords: [35.90, 127.76]
        },

        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: North Korea
        // ─────────────────────────────────────────────────────────────────────────
        KP: {
            code: 'KP',
            name: 'North Korea',
            flag: '🇰🇵',
            region: 'asia',
            subregion: 'east',
            capital: 'Pyongyang',
            population: 26000000,
            gdp: 18,
            coords: [40.33, 127.51]
        },

        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: Italy
        // ─────────────────────────────────────────────────────────────────────────
        IT: {
            code: 'IT',
            name: 'Italy',
            flag: '🇮🇹',
            region: 'europe',
            subregion: 'southern',
            capital: 'Rome',
            population: 59000000,
            gdp: 2190,
            coords: [41.87, 12.56]
        },

        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: Spain
        // ─────────────────────────────────────────────────────────────────────────
        ES: {
            code: 'ES',
            name: 'Spain',
            flag: '🇪🇸',
            region: 'europe',
            subregion: 'southern',
            capital: 'Madrid',
            population: 47000000,
            gdp: 1580,
            coords: [40.46, -3.74]
        },

        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: Turkey
        // ─────────────────────────────────────────────────────────────────────────
        TR: {
            code: 'TR',
            name: 'Turkey',
            flag: '🇹🇷',
            region: 'asia',
            subregion: 'west',
            capital: 'Ankara',
            population: 85000000,
            gdp: 1150,
            coords: [38.96, 35.24]
        },

        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: Indonesia
        // ─────────────────────────────────────────────────────────────────────────
        ID: {
            code: 'ID',
            name: 'Indonesia',
            flag: '🇮🇩',
            region: 'asia',
            subregion: 'southeast',
            capital: 'Jakarta',
            population: 277000000,
            gdp: 1420,
            coords: [-0.78, 113.92]
        },

        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: Mexico
        // ─────────────────────────────────────────────────────────────────────────
        MX: {
            code: 'MX',
            name: 'Mexico',
            flag: '🇲🇽',
            region: 'americas',
            subregion: 'north',
            capital: 'Mexico City',
            population: 130000000,
            gdp: 1810,
            coords: [23.63, -102.55]
        },

        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: Egypt
        // ─────────────────────────────────────────────────────────────────────────
        EG: {
            code: 'EG',
            name: 'Egypt',
            flag: '🇪🇬',
            region: 'africa',
            subregion: 'north',
            capital: 'Cairo',
            population: 112000000,
            gdp: 476,
            coords: [26.82, 30.80]
        },

        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: Nigeria
        // ─────────────────────────────────────────────────────────────────────────
        NG: {
            code: 'NG',
            name: 'Nigeria',
            flag: '🇳🇬',
            region: 'africa',
            subregion: 'west',
            capital: 'Abuja',
            population: 223000000,
            gdp: 477,
            coords: [9.08, 8.67]
        },

        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: Poland
        // ─────────────────────────────────────────────────────────────────────────
        PL: {
            code: 'PL',
            name: 'Poland',
            flag: '🇵🇱',
            region: 'europe',
            subregion: 'central',
            capital: 'Warsaw',
            population: 38000000,
            gdp: 842,
            coords: [51.91, 19.14]
        },

        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: Netherlands
        // ─────────────────────────────────────────────────────────────────────────
        NL: {
            code: 'NL',
            name: 'Netherlands',
            flag: '🇳🇱',
            region: 'europe',
            subregion: 'western',
            capital: 'Amsterdam',
            population: 17800000,
            gdp: 1090,
            coords: [52.13, 5.29]
        },

        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: Singapore
        // ─────────────────────────────────────────────────────────────────────────
        SG: {
            code: 'SG',
            name: 'Singapore',
            flag: '🇸🇬',
            region: 'asia',
            subregion: 'southeast',
            capital: 'Singapore',
            population: 5900000,
            gdp: 515,
            coords: [1.35, 103.81]
        },

        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: United Arab Emirates
        // ─────────────────────────────────────────────────────────────────────────
        AE: {
            code: 'AE',
            name: 'United Arab Emirates',
            flag: '🇦🇪',
            region: 'asia',
            subregion: 'west',
            capital: 'Abu Dhabi',
            population: 9400000,
            gdp: 509,
            coords: [23.42, 53.84]
        },

        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: Thailand
        // ─────────────────────────────────────────────────────────────────────────
        TH: {
            code: 'TH',
            name: 'Thailand',
            flag: '🇹🇭',
            region: 'asia',
            subregion: 'southeast',
            capital: 'Bangkok',
            population: 72000000,
            gdp: 574,
            coords: [15.87, 100.99]
        },

        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: Vietnam
        // ─────────────────────────────────────────────────────────────────────────
        VN: {
            code: 'VN',
            name: 'Vietnam',
            flag: '🇻🇳',
            region: 'asia',
            subregion: 'southeast',
            capital: 'Hanoi',
            population: 100000000,
            gdp: 450,
            coords: [14.05, 108.27]
        },

        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: Bangladesh
        // ─────────────────────────────────────────────────────────────────────────
        BD: {
            code: 'BD',
            name: 'Bangladesh',
            flag: '🇧🇩',
            region: 'asia',
            subregion: 'south',
            capital: 'Dhaka',
            population: 173000000,
            gdp: 460,
            coords: [23.68, 90.35]
        },

        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: Malaysia
        // ─────────────────────────────────────────────────────────────────────────
        MY: {
            code: 'MY',
            name: 'Malaysia',
            flag: '🇲🇾',
            region: 'asia',
            subregion: 'southeast',
            capital: 'Kuala Lumpur',
            population: 34000000,
            gdp: 430,
            coords: [4.21, 101.97]
        },

        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: Philippines
        // ─────────────────────────────────────────────────────────────────────────
        PH: {
            code: 'PH',
            name: 'Philippines',
            flag: '🇵🇭',
            region: 'asia',
            subregion: 'southeast',
            capital: 'Manila',
            population: 117000000,
            gdp: 440,
            coords: [12.87, 121.77]
        },

        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: Argentina
        // ─────────────────────────────────────────────────────────────────────────
        AR: {
            code: 'AR',
            name: 'Argentina',
            flag: '🇦🇷',
            region: 'americas',
            subregion: 'south',
            capital: 'Buenos Aires',
            population: 46000000,
            gdp: 641,
            coords: [-38.41, -63.61]
        },

        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: Switzerland
        // ─────────────────────────────────────────────────────────────────────────
        CH: {
            code: 'CH',
            name: 'Switzerland',
            flag: '🇨🇭',
            region: 'europe',
            subregion: 'western',
            capital: 'Bern',
            population: 8900000,
            gdp: 885,
            coords: [46.81, 8.22]
        },

        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: Sweden
        // ─────────────────────────────────────────────────────────────────────────
        SE: {
            code: 'SE',
            name: 'Sweden',
            flag: '🇸🇪',
            region: 'europe',
            subregion: 'northern',
            capital: 'Stockholm',
            population: 10500000,
            gdp: 593,
            coords: [60.12, 18.64]
        },

        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: New Zealand
        // ─────────────────────────────────────────────────────────────────────────
        NZ: {
            code: 'NZ',
            name: 'New Zealand',
            flag: '🇳🇿',
            region: 'oceania',
            subregion: 'polynesia',
            capital: 'Wellington',
            population: 5200000,
            gdp: 251,
            coords: [-40.90, 174.88]
        },

        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: Belgium
        // ─────────────────────────────────────────────────────────────────────────
        BE: {
            code: 'BE',
            name: 'Belgium',
            flag: '🇧🇪',
            region: 'europe',
            subregion: 'western',
            capital: 'Brussels',
            population: 11700000,
            gdp: 632,
            coords: [50.50, 4.46]
        },

        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: Austria
        // ─────────────────────────────────────────────────────────────────────────
        AT: {
            code: 'AT',
            name: 'Austria',
            flag: '🇦🇹',
            region: 'europe',
            subregion: 'central',
            capital: 'Vienna',
            population: 9100000,
            gdp: 516,
            coords: [47.51, 14.55]
        },

        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: Norway
        // ─────────────────────────────────────────────────────────────────────────
        NO: {
            code: 'NO',
            name: 'Norway',
            flag: '🇳🇴',
            region: 'europe',
            subregion: 'northern',
            capital: 'Oslo',
            population: 5500000,
            gdp: 579,
            coords: [60.47, 8.46]
        },

        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: Denmark
        // ─────────────────────────────────────────────────────────────────────────
        DK: {
            code: 'DK',
            name: 'Denmark',
            flag: '🇩🇰',
            region: 'europe',
            subregion: 'northern',
            capital: 'Copenhagen',
            population: 5900000,
            gdp: 400,
            coords: [56.26, 9.50]
        },

        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: Finland
        // ─────────────────────────────────────────────────────────────────────────
        FI: {
            code: 'FI',
            name: 'Finland',
            flag: '🇫🇮',
            region: 'europe',
            subregion: 'northern',
            capital: 'Helsinki',
            population: 5600000,
            gdp: 301,
            coords: [61.92, 25.74]
        },

        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: Ireland
        // ─────────────────────────────────────────────────────────────────────────
        IE: {
            code: 'IE',
            name: 'Ireland',
            flag: '🇮🇪',
            region: 'europe',
            subregion: 'western',
            capital: 'Dublin',
            population: 5100000,
            gdp: 533,
            coords: [53.14, -7.69]
        },

        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: Portugal
        // ─────────────────────────────────────────────────────────────────────────
        PT: {
            code: 'PT',
            name: 'Portugal',
            flag: '🇵🇹',
            region: 'europe',
            subregion: 'southern',
            capital: 'Lisbon',
            population: 10400000,
            gdp: 287,
            coords: [39.39, -8.22]
        },

        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: Greece
        // ─────────────────────────────────────────────────────────────────────────
        GR: {
            code: 'GR',
            name: 'Greece',
            flag: '🇬🇷',
            region: 'europe',
            subregion: 'southern',
            capital: 'Athens',
            population: 10400000,
            gdp: 239,
            coords: [39.07, 21.82]
        },

        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: Czech Republic
        // ─────────────────────────────────────────────────────────────────────────
        CZ: {
            code: 'CZ',
            name: 'Czech Republic',
            flag: '🇨🇿',
            region: 'europe',
            subregion: 'central',
            capital: 'Prague',
            population: 10500000,
            gdp: 330,
            coords: [49.81, 15.47]
        },

        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: Romania
        // ─────────────────────────────────────────────────────────────────────────
        RO: {
            code: 'RO',
            name: 'Romania',
            flag: '🇷🇴',
            region: 'europe',
            subregion: 'eastern',
            capital: 'Bucharest',
            population: 19000000,
            gdp: 351,
            coords: [45.94, 24.96]
        },

        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: Hungary
        // ─────────────────────────────────────────────────────────────────────────
        HU: {
            code: 'HU',
            name: 'Hungary',
            flag: '🇭🇺',
            region: 'europe',
            subregion: 'central',
            capital: 'Budapest',
            population: 9600000,
            gdp: 212,
            coords: [47.16, 19.50]
        },

        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: Chile
        // ─────────────────────────────────────────────────────────────────────────
        CL: {
            code: 'CL',
            name: 'Chile',
            flag: '🇨🇱',
            region: 'americas',
            subregion: 'south',
            capital: 'Santiago',
            population: 19500000,
            gdp: 335,
            coords: [-35.67, -71.54]
        },

        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: Colombia
        // ─────────────────────────────────────────────────────────────────────────
        CO: {
            code: 'CO',
            name: 'Colombia',
            flag: '🇨🇴',
            region: 'americas',
            subregion: 'south',
            capital: 'Bogotá',
            population: 52000000,
            gdp: 363,
            coords: [4.57, -74.29]
        },

        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: Peru
        // ─────────────────────────────────────────────────────────────────────────
        PE: {
            code: 'PE',
            name: 'Peru',
            flag: '🇵🇪',
            region: 'americas',
            subregion: 'south',
            capital: 'Lima',
            population: 34000000,
            gdp: 268,
            coords: [-9.18, -75.01]
        },

        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: Kenya
        // ─────────────────────────────────────────────────────────────────────────
        KE: {
            code: 'KE',
            name: 'Kenya',
            flag: '🇰🇪',
            region: 'africa',
            subregion: 'east',
            capital: 'Nairobi',
            population: 55000000,
            gdp: 113,
            coords: [-0.02, 37.90]
        },

        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: Ethiopia
        // ─────────────────────────────────────────────────────────────────────────
        ET: {
            code: 'ET',
            name: 'Ethiopia',
            flag: '🇪🇹',
            region: 'africa',
            subregion: 'east',
            capital: 'Addis Ababa',
            population: 126000000,
            gdp: 156,
            coords: [9.14, 40.48]
        },

        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: Morocco
        // ─────────────────────────────────────────────────────────────────────────
        MA: {
            code: 'MA',
            name: 'Morocco',
            flag: '🇲🇦',
            region: 'africa',
            subregion: 'north',
            capital: 'Rabat',
            population: 37000000,
            gdp: 141,
            coords: [31.79, -7.09]
        },

        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: Algeria
        // ─────────────────────────────────────────────────────────────────────────
        DZ: {
            code: 'DZ',
            name: 'Algeria',
            flag: '🇩🇿',
            region: 'africa',
            subregion: 'north',
            capital: 'Algiers',
            population: 46000000,
            gdp: 206,
            coords: [28.03, 1.65]
        },

        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: Ghana
        // ─────────────────────────────────────────────────────────────────────────
        GH: {
            code: 'GH',
            name: 'Ghana',
            flag: '🇬🇭',
            region: 'africa',
            subregion: 'west',
            capital: 'Accra',
            population: 34000000,
            gdp: 76,
            coords: [7.94, -1.02]
        },

        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: Sri Lanka
        // ─────────────────────────────────────────────────────────────────────────
        LK: {
            code: 'LK',
            name: 'Sri Lanka',
            flag: '🇱🇰',
            region: 'asia',
            subregion: 'south',
            capital: 'Sri Jayawardenepura Kotte',
            population: 22000000,
            gdp: 74,
            coords: [7.87, 80.77]
        },

        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: Nepal
        // ─────────────────────────────────────────────────────────────────────────
        NP: {
            code: 'NP',
            name: 'Nepal',
            flag: '🇳🇵',
            region: 'asia',
            subregion: 'south',
            capital: 'Kathmandu',
            population: 30000000,
            gdp: 40,
            coords: [28.39, 84.12]
        },

        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: Afghanistan
        // ─────────────────────────────────────────────────────────────────────────
        AF: {
            code: 'AF',
            name: 'Afghanistan',
            flag: '🇦🇫',
            region: 'asia',
            subregion: 'south',
            capital: 'Kabul',
            population: 42000000,
            gdp: 14,
            coords: [33.93, 67.70]
        },

        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: Myanmar
        // ─────────────────────────────────────────────────────────────────────────
        MM: {
            code: 'MM',
            name: 'Myanmar',
            flag: '🇲🇲',
            region: 'asia',
            subregion: 'southeast',
            capital: 'Naypyidaw',
            population: 54000000,
            gdp: 59,
            coords: [21.91, 95.95]
        },

        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: Kazakhstan
        // ─────────────────────────────────────────────────────────────────────────
        KZ: {
            code: 'KZ',
            name: 'Kazakhstan',
            flag: '🇰🇿',
            region: 'asia',
            subregion: 'central',
            capital: 'Astana',
            population: 20000000,
            gdp: 260,
            coords: [48.01, 66.92]
        },

        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: Qatar
        // ─────────────────────────────────────────────────────────────────────────
        QA: {
            code: 'QA',
            name: 'Qatar',
            flag: '🇶🇦',
            region: 'asia',
            subregion: 'west',
            capital: 'Doha',
            population: 2900000,
            gdp: 235,
            coords: [25.35, 51.18]
        },

        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: Kuwait
        // ─────────────────────────────────────────────────────────────────────────
        KW: {
            code: 'KW',
            name: 'Kuwait',
            flag: '🇰🇼',
            region: 'asia',
            subregion: 'west',
            capital: 'Kuwait City',
            population: 4300000,
            gdp: 175,
            coords: [29.31, 47.48]
        },

        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: Iraq
        // ─────────────────────────────────────────────────────────────────────────
        IQ: {
            code: 'IQ',
            name: 'Iraq',
            flag: '🇮🇶',
            region: 'asia',
            subregion: 'west',
            capital: 'Baghdad',
            population: 44000000,
            gdp: 267,
            coords: [33.22, 43.67]
        },

        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: Syria
        // ─────────────────────────────────────────────────────────────────────────
        SY: {
            code: 'SY',
            name: 'Syria',
            flag: '🇸🇾',
            region: 'asia',
            subregion: 'west',
            capital: 'Damascus',
            population: 23000000,
            gdp: 9,
            coords: [34.80, 38.99]
        },

        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: Jordan
        // ─────────────────────────────────────────────────────────────────────────
        JO: {
            code: 'JO',
            name: 'Jordan',
            flag: '🇯🇴',
            region: 'asia',
            subregion: 'west',
            capital: 'Amman',
            population: 11000000,
            gdp: 50,
            coords: [30.58, 36.23]
        },

        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: Lebanon
        // ─────────────────────────────────────────────────────────────────────────
        LB: {
            code: 'LB',
            name: 'Lebanon',
            flag: '🇱🇧',
            region: 'asia',
            subregion: 'west',
            capital: 'Beirut',
            population: 5500000,
            gdp: 20,
            coords: [33.85, 35.86]
        },

        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: Palestine
        // ─────────────────────────────────────────────────────────────────────────
        PS: {
            code: 'PS',
            name: 'Palestine',
            flag: '🇵🇸',
            region: 'asia',
            subregion: 'west',
            capital: 'Ramallah',
            population: 5400000,
            gdp: 19,
            coords: [31.95, 35.23]
        },

        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: Cuba
        // ─────────────────────────────────────────────────────────────────────────
        CU: {
            code: 'CU',
            name: 'Cuba',
            flag: '🇨🇺',
            region: 'americas',
            subregion: 'caribbean',
            capital: 'Havana',
            population: 11000000,
            gdp: 107,
            coords: [21.52, -77.78]
        },

        // ─────────────────────────────────────────────────────────────────────────
        // SAMPLE: Venezuela
        // ─────────────────────────────────────────────────────────────────────────
        VE: {
            code: 'VE',
            name: 'Venezuela',
            flag: '🇻🇪',
            region: 'americas',
            subregion: 'south',
            capital: 'Caracas',
            population: 28000000,
            gdp: 92,
            coords: [6.42, -66.58]
        }
    };

    // ═══════════════════════════════════════════════════════════════════════════
    // SAMPLE RELATIONSHIPS DATA
    // This demonstrates the relationship structure
    // ═══════════════════════════════════════════════════════════════════════════

    const SAMPLE_RELATIONSHIPS = {
        // ─────────────────────────────────────────────────────────────────────────
        // India's relationships
        // ─────────────────────────────────────────────────────────────────────────
        IN: {
            US: {
                type: 'strategic',
                score: 7.5,
                parameters: {
                    trade: {
                        score: 8,
                        summary: 'Growing bilateral trade exceeding $190 billion with increasing economic integration',
                        bullets: [
                            '<strong>Trade Volume:</strong> $190+ billion annual bilateral trade (2023)',
                            '<strong>Trade Balance:</strong> India has a trade surplus with the US',
                            '<strong>Key Sectors:</strong> IT services, pharmaceuticals, textiles, gems & jewelry',
                            '<strong>FTAs:</strong> Negotiations ongoing for comprehensive trade agreement',
                            '<strong>Growth:</strong> Trade has tripled over the past decade'
                        ],
                        details: 'US-India trade relations have strengthened significantly, with the US becoming one of India\'s largest trading partners. The relationship is characterized by India\'s strong services exports, particularly in IT and business process outsourcing, while importing defense equipment, machinery, and high-tech products from the US.'
                    },
                    military: {
                        score: 7,
                        summary: 'Strong defense partnership with major joint exercises and arms sales',
                        bullets: [
                            '<strong>Defense Trade:</strong> $20+ billion in defense deals signed',
                            '<strong>Exercises:</strong> Malabar, Yudh Abhyas, Vajra Prahar joint exercises',
                            '<strong>Agreements:</strong> LEMOA, COMCASA, BECA foundational agreements signed',
                            '<strong>Equipment:</strong> Apache, Chinook helicopters, C-17, P-8I aircraft',
                            '<strong>Major Defense Partner:</strong> India designated as Major Defense Partner (2016)'
                        ],
                        details: 'The US-India defense relationship has transformed dramatically, with India now designated as a "Major Defense Partner." The two countries conduct regular joint military exercises across all domains and have signed all foundational defense agreements enabling deeper interoperability.'
                    },
                    diplomatic: {
                        score: 8,
                        summary: 'Comprehensive Global Strategic Partnership with regular high-level engagement',
                        bullets: [
                            '<strong>Partnership Level:</strong> Comprehensive Global Strategic Partnership',
                            '<strong>Dialogues:</strong> 2+2 Ministerial, Strategic Energy Partnership',
                            '<strong>Visits:</strong> Regular PM-President summits and ministerial visits',
                            '<strong>Diaspora:</strong> 4.5+ million Indian diaspora in the US',
                            '<strong>Support:</strong> US supports India\'s UNSC permanent membership bid'
                        ],
                        details: 'Diplomatic relations have reached their highest point in history. The two largest democracies share a vision for a free and open Indo-Pacific, cooperate extensively in multilateral forums, and have institutionalized dialogue mechanisms across all sectors.'
                    },
                    conflict: {
                        score: 2,
                        summary: 'Generally low conflict risk with occasional trade and visa disputes',
                        bullets: [
                            '<strong>Trade Issues:</strong> GSP restoration and market access discussions',
                            '<strong>Visa:</strong> H-1B visa caps affect Indian tech workers',
                            '<strong>Russia Factor:</strong> Differences over India\'s Russia relationship',
                            '<strong>Overall:</strong> No major security conflicts or territorial disputes'
                        ],
                        details: 'While the relationship is overwhelmingly positive, there are periodic friction points around trade policies, visa regulations, and India\'s independent foreign policy stance, particularly regarding Russia and Iran. However, these do not significantly impact the strategic partnership.'
                    }
                }
            },
            CN: {
                type: 'complex',
                score: 3.5,
                parameters: {
                    trade: {
                        score: 6,
                        summary: 'High trade volume but significant imbalance and dependencies',
                        bullets: [
                            '<strong>Trade Volume:</strong> $118 billion bilateral trade (2023)',
                            '<strong>Trade Deficit:</strong> India\'s deficit exceeds $80 billion',
                            '<strong>Imports:</strong> Electronics, telecom equipment, machinery from China',
                            '<strong>Dependencies:</strong> Heavy reliance on Chinese APIs, components',
                            '<strong>Restrictions:</strong> Indian bans on Chinese apps, FDI scrutiny'
                        ],
                        details: 'While China remains one of India\'s largest trading partners, the relationship is characterized by a massive trade imbalance. India has taken steps to reduce dependencies, particularly after the 2020 border clashes, including banning Chinese apps and scrutinizing Chinese investments.'
                    },
                    military: {
                        score: 2,
                        summary: 'No cooperation; ongoing border tensions and military standoffs',
                        bullets: [
                            '<strong>Border Clashes:</strong> Galwan Valley clash (2020) with casualties',
                            '<strong>LAC Standoff:</strong> Ongoing standoff since 2020 at multiple points',
                            '<strong>Military Buildup:</strong> Both sides reinforcing border infrastructure',
                            '<strong>No Cooperation:</strong> All military cooperation suspended',
                            '<strong>Nuclear Neighbors:</strong> Both nuclear-armed states'
                        ],
                        details: 'The 2020 Galwan Valley incident marked the deadliest clash in decades, resulting in the death of soldiers on both sides. The military standoff continues at several points along the Line of Actual Control, with both nations maintaining significant troop deployments and infrastructure buildup.'
                    },
                    border: {
                        score: 2,
                        summary: 'Disputed 3,488 km border with active standoff and competing claims',
                        bullets: [
                            '<strong>Border Length:</strong> 3,488 km disputed Line of Actual Control',
                            '<strong>Disputed Areas:</strong> Aksai Chin, Arunachal Pradesh claims',
                            '<strong>History:</strong> 1962 war, 1967 and 1987 standoffs',
                            '<strong>Current:</strong> Multiple disengagement issues remain',
                            '<strong>Infrastructure:</strong> Both sides building border roads, airfields'
                        ],
                        details: 'The India-China border dispute is one of the world\'s longest-standing territorial conflicts. Despite numerous border talks and confidence-building measures, the two nations have fundamentally different perceptions of the boundary. The 2020 clashes have set back years of diplomacy.'
                    },
                    conflict: {
                        score: 8,
                        summary: 'High conflict risk with active military standoff and unresolved disputes',
                        bullets: [
                            '<strong>Active Tensions:</strong> Ongoing LAC standoff since April 2020',
                            '<strong>Casualties:</strong> Fatal clashes in 2020 after 45-year gap',
                            '<strong>Escalation Risk:</strong> Nuclear dimension adds gravity',
                            '<strong>Competing Influence:</strong> Strategic rivalry in South Asia, Indian Ocean',
                            '<strong>Alliance Factor:</strong> China-Pakistan axis concerns India'
                        ],
                        details: 'The bilateral relationship is at its lowest point in decades. The unresolved border standoff, combined with strategic competition in the Indo-Pacific, China\'s support for Pakistan, and broader geopolitical rivalry make this one of the most consequential and potentially volatile relationships in Asia.'
                    }
                }
            },
            PK: {
                type: 'conflict',
                score: 1.5,
                parameters: {
                    trade: {
                        score: 1,
                        summary: 'Minimal trade due to political tensions and trade restrictions',
                        bullets: [
                            '<strong>Trade Volume:</strong> Under $1 billion formal trade',
                            '<strong>MFN Status:</strong> India withdrew MFN status in 2019',
                            '<strong>Restrictions:</strong> Multiple trade bans and tariffs',
                            '<strong>Informal Trade:</strong> Significant via third countries (UAE, Singapore)',
                            '<strong>Potential:</strong> Estimated $37 billion if normalized'
                        ],
                        details: 'Bilateral trade has collapsed to negligible levels following the revocation of Kashmir\'s special status in 2019. Pakistan suspended trade, and India withdrew Most Favored Nation status. Whatever trade exists flows through third countries, representing a fraction of the potential.'
                    },
                    military: {
                        score: 1,
                        summary: 'Adversarial relationship with no cooperation and frequent tensions',
                        bullets: [
                            '<strong>Wars:</strong> Four wars fought (1947, 1965, 1971, 1999)',
                            '<strong>Nuclear:</strong> Both declared nuclear weapon states',
                            '<strong>Incidents:</strong> Pulwama-Balakot crisis (2019), regular LoC firing',
                            '<strong>Terrorism:</strong> Cross-border terrorism major Indian concern',
                            '<strong>Posture:</strong> Both maintain significant forces at border'
                        ],
                        details: 'The India-Pakistan military relationship is characterized by deep hostility. Both nations maintain large military forces along their border, and nuclear weapons add a dangerous dimension. Regular ceasefire violations and occasional crises keep the relationship tense.'
                    },
                    border: {
                        score: 1,
                        summary: 'Disputed Kashmir border with ongoing LoC tensions',
                        bullets: [
                            '<strong>Kashmir:</strong> Core dispute since 1947 partition',
                            '<strong>LoC:</strong> 740 km Line of Control divides Kashmir',
                            '<strong>Ceasefire:</strong> 2021 ceasefire agreement often tested',
                            '<strong>Siachen:</strong> World\'s highest battlefield contested',
                            '<strong>Sir Creek:</strong> Maritime boundary also disputed'
                        ],
                        details: 'Kashmir remains the central dispute in India-Pakistan relations. The 1949 ceasefire line, now the Line of Control, is one of the most militarized borders in the world. Both countries claim Kashmir in full and have fought multiple wars over it.'
                    },
                    conflict: {
                        score: 10,
                        summary: 'Maximum conflict risk with active disputes and nuclear dimension',
                        bullets: [
                            '<strong>Nuclear Risk:</strong> Only two nuclear states in active conflict',
                            '<strong>Terrorism:</strong> Multiple attacks traced to Pakistan-based groups',
                            '<strong>Kashmir:</strong> Unresolved core issue with no solution in sight',
                            '<strong>Recent Crisis:</strong> 2019 Balakot airstrikes, first since 1971',
                            '<strong>No Dialogue:</strong> High-level talks suspended'
                        ],
                        details: 'The India-Pakistan relationship represents one of the highest-risk bilateral relationships in the world. The combination of historical enmity, territorial disputes, cross-border terrorism, and nuclear weapons creates a uniquely dangerous situation. Dialogue remains suspended with no resolution in sight.'
                    }
                }
            },
            RU: {
                type: 'strategic',
                score: 8,
                parameters: {
                    military: {
                        score: 9,
                        summary: 'Decades-long defense partnership with extensive equipment and technology transfer',
                        bullets: [
                            '<strong>Arms Sales:</strong> Russia supplies 60%+ of Indian military equipment',
                            '<strong>Platforms:</strong> Su-30MKI, T-90 tanks, S-400 systems, nuclear submarines',
                            '<strong>Joint Production:</strong> BrahMos missiles, AK-203 rifles made in India',
                            '<strong>Nuclear:</strong> Russia building Kudankulam nuclear power plants',
                            '<strong>Technology:</strong> Significant defense technology transfer'
                        ],
                        details: 'Russia has been India\'s primary defense partner for over five decades. The relationship includes licensed production, joint development, and direct purchases spanning aircraft, submarines, missiles, tanks, and air defense systems. Despite US sanctions threats, India proceeded with the S-400 purchase, demonstrating the relationship\'s depth.'
                    },
                    diplomatic: {
                        score: 8,
                        summary: 'Special and Privileged Strategic Partnership with consistent political support',
                        bullets: [
                            '<strong>Partnership:</strong> Special and Privileged Strategic Partnership',
                            '<strong>UN Support:</strong> Mutual support on key issues in UNSC',
                            '<strong>History:</strong> Soviet support during 1971 war, Cold War ally',
                            '<strong>Summits:</strong> Annual bilateral summits at head of state level',
                            '<strong>Neutrality:</strong> India maintains neutral stance on Ukraine'
                        ],
                        details: 'The India-Russia relationship is built on decades of trust and mutual support. Russia consistently supports India on Kashmir and UNSC membership. India has maintained a notably neutral stance on the Ukraine conflict, refusing to condemn Russia despite Western pressure.'
                    }
                }
            },
            JP: {
                type: 'strategic',
                score: 7.5,
                parameters: {
                    trade: {
                        score: 7,
                        summary: 'Growing economic partnership with significant Japanese investment',
                        bullets: [
                            '<strong>Trade:</strong> $22 billion bilateral trade',
                            '<strong>Investment:</strong> Japan is 4th largest investor in India',
                            '<strong>Projects:</strong> Mumbai-Ahmedabad bullet train, Delhi Metro',
                            '<strong>ODA:</strong> Japan is largest ODA donor to India',
                            '<strong>CEPA:</strong> Comprehensive Economic Partnership Agreement in force'
                        ],
                        details: 'Japan has become a crucial economic partner for India, providing significant investment and development assistance. Japanese companies are increasingly investing in Indian manufacturing as part of supply chain diversification strategies.'
                    },
                    military: {
                        score: 7,
                        summary: 'Deepening defense cooperation through QUAD and bilateral agreements',
                        bullets: [
                            '<strong>QUAD:</strong> Core members of Quadrilateral Security Dialogue',
                            '<strong>Exercises:</strong> Malabar exercise now trilateral with US',
                            '<strong>Agreements:</strong> 2+2 dialogue, ACSA logistics agreement',
                            '<strong>Defense Trade:</strong> US-2 amphibious aircraft discussions',
                            '<strong>Maritime:</strong> Shared interest in free and open Indo-Pacific'
                        ],
                        details: 'India-Japan defense relations have deepened significantly, driven by shared concerns about China\'s rise. Both nations are key members of the QUAD and conduct regular joint exercises. Defense technology cooperation and maritime security coordination continue to expand.'
                    }
                }
            },
            GB: {
                type: 'strategic',
                score: 7,
                parameters: {
                    historical: {
                        score: 5,
                        summary: 'Complex colonial history transformed into modern partnership',
                        bullets: [
                            '<strong>Colonial Era:</strong> British rule 1858-1947 left lasting impact',
                            '<strong>Legacy:</strong> English language, legal system, railways inherited',
                            '<strong>Partition:</strong> British role in 1947 partition still debated',
                            '<strong>Modern Era:</strong> Relations reset as equal partners post-1947',
                            '<strong>Commonwealth:</strong> Both members, though different views on relevance'
                        ],
                        details: 'The colonial period left deep marks on India, but the modern relationship has evolved into a partnership of equals. While historical grievances occasionally surface, both nations have chosen to focus on future cooperation rather than past conflicts.'
                    },
                    cultural: {
                        score: 8,
                        summary: 'Deep people-to-people ties through large diaspora and shared language',
                        bullets: [
                            '<strong>Diaspora:</strong> 1.8 million people of Indian origin in UK',
                            '<strong>Students:</strong> Second largest source of international students',
                            '<strong>Language:</strong> Shared English language facilitates exchange',
                            '<strong>Cuisine:</strong> Indian food deeply embedded in British culture',
                            '<strong>PM Heritage:</strong> UK\'s first Indian-origin PM (briefly) in 2022'
                        ],
                        details: 'The Indian diaspora in the UK is one of the most successful immigrant communities, contributing significantly to British economy, politics, and culture. These deep people-to-people connections form the bedrock of the bilateral relationship.'
                    }
                }
            },
            AU: {
                type: 'strategic',
                score: 7.5,
                parameters: {
                    military: {
                        score: 7,
                        summary: 'Rapidly growing defense partnership through QUAD framework',
                        bullets: [
                            '<strong>QUAD:</strong> Core members cooperating on Indo-Pacific security',
                            '<strong>Exercises:</strong> Malabar, AUSINDEX joint exercises',
                            '<strong>Agreements:</strong> Mutual Logistics Support Agreement signed',
                            '<strong>Maritime:</strong> Coordinating on Indian Ocean security',
                            '<strong>2+2:</strong> Regular foreign and defense ministers dialogue'
                        ],
                        details: 'Australia-India defense ties have transformed dramatically, driven by shared concerns in the Indo-Pacific. The QUAD provides a framework for deeper cooperation, and bilateral exercises have become more complex and frequent.'
                    }
                }
            }
        },

        // ─────────────────────────────────────────────────────────────────────────
        // US relationships (sample)
        // ─────────────────────────────────────────────────────────────────────────
        US: {
            GB: {
                type: 'allies',
                score: 9.5,
                parameters: {
                    military: {
                        score: 10,
                        summary: 'The closest military alliance in the world with deep integration',
                        bullets: [
                            '<strong>Five Eyes:</strong> Core intelligence sharing partnership',
                            '<strong>NATO:</strong> Both founding members, Article 5 commitment',
                            '<strong>Nuclear:</strong> Shared nuclear deterrent arrangement',
                            '<strong>Bases:</strong> Multiple US bases in UK including RAF Lakenheath',
                            '<strong>Joint Ops:</strong> Every major US operation includes UK forces'
                        ],
                        details: 'The US-UK military relationship, often called the "Special Relationship," is the closest in the world. The two nations share nuclear technology, intelligence at the highest levels, and have fought together in every major conflict for decades.'
                    },
                    intelligence: {
                        score: 10,
                        summary: 'Five Eyes core member with unrestricted intelligence sharing',
                        bullets: [
                            '<strong>Five Eyes:</strong> Founding and most integrated members',
                            '<strong>SIGINT:</strong> Complete signals intelligence sharing',
                            '<strong>HUMINT:</strong> Joint human intelligence operations',
                            '<strong>Cyber:</strong> Coordinated cyber operations and defense',
                            '<strong>No Barriers:</strong> No classification restrictions on sharing'
                        ],
                        details: 'The US-UK intelligence relationship is unparalleled. The Five Eyes arrangement allows for the sharing of intelligence with virtually no restrictions. The relationship began in WWII and has only deepened since.'
                    },
                    trade: {
                        score: 9,
                        summary: 'Massive bilateral trade and investment relationship',
                        bullets: [
                            '<strong>Trade:</strong> $273 billion in goods and services trade',
                            '<strong>Investment:</strong> Each is other\'s largest investor',
                            '<strong>FDI:</strong> $1 trillion cross-border investment stock',
                            '<strong>Finance:</strong> London and New York as linked financial centers',
                            '<strong>Jobs:</strong> Over 1 million Americans work for UK companies'
                        ],
                        details: 'The US-UK economic relationship is one of the largest in the world. Beyond trade, the two economies are deeply integrated through investment, with each being the other\'s largest source of foreign direct investment.'
                    }
                }
            },
            CN: {
                type: 'complex',
                score: 3.5,
                parameters: {
                    trade: {
                        score: 7,
                        summary: 'Massive trade relationship despite strategic competition',
                        bullets: [
                            '<strong>Trade:</strong> $758 billion total trade (2022)',
                            '<strong>Deficit:</strong> $382 billion US trade deficit with China',
                            '<strong>Tariffs:</strong> Significant tariffs remain from trade war',
                            '<strong>Dependencies:</strong> US concerns about supply chain reliance',
                            '<strong>Decoupling:</strong> Selective decoupling in progress'
                        ],
                        details: 'Despite escalating strategic competition, the US-China trade relationship remains massive. The two economies are deeply intertwined, though both are pursuing policies to reduce critical dependencies.'
                    },
                    military: {
                        score: 2,
                        summary: 'Strategic competition with increasing tensions in Indo-Pacific',
                        bullets: [
                            '<strong>Competition:</strong> Pentagon identifies China as pacing challenge',
                            '<strong>Taiwan:</strong> Potential flashpoint for military conflict',
                            '<strong>South China Sea:</strong> Regular freedom of navigation operations',
                            '<strong>Incidents:</strong> Near-miss encounters in air and sea',
                            '<strong>Arms Race:</strong> China rapidly modernizing military'
                        ],
                        details: 'The US and China are engaged in increasingly intense strategic military competition. The Taiwan Strait and South China Sea are potential flashpoints. Both nations are modernizing their militaries with each other in mind.'
                    },
                    technology: {
                        score: 2,
                        summary: 'Technology competition with significant restrictions',
                        bullets: [
                            '<strong>Chips:</strong> US restricts advanced semiconductor exports',
                            '<strong>Huawei:</strong> Extensive sanctions on Chinese tech firms',
                            '<strong>AI:</strong> Competition in artificial intelligence',
                            '<strong>Standards:</strong> Competing for global tech standards',
                            '<strong>Investment:</strong> Restrictions on tech sector investment'
                        ],
                        details: 'Technology has become a central arena of US-China competition. The US has implemented extensive export controls on advanced semiconductors and equipment, while both nations race for dominance in AI, quantum computing, and other emerging technologies.'
                    },
                    conflict: {
                        score: 7,
                        summary: 'Elevated conflict risk centered on Taiwan and regional issues',
                        bullets: [
                            '<strong>Taiwan:</strong> Most likely trigger for major conflict',
                            '<strong>Nuclear:</strong> Both major nuclear powers',
                            '<strong>Cyber:</strong> Ongoing cyber operations and incidents',
                            '<strong>Space:</strong> Competition extending to space domain',
                            '<strong>Guardrails:</strong> Both seeking to manage competition'
                        ],
                        details: 'US-China relations carry significant conflict risk, primarily centered on Taiwan. While neither side appears to want war, the potential for miscalculation exists. Both nations are working to establish guardrails to prevent inadvertent escalation.'
                    }
                }
            },
            RU: {
                type: 'conflict',
                score: 2,
                parameters: {
                    military: {
                        score: 1,
                        summary: 'Adversarial relationship with proxy conflict in Ukraine',
                        bullets: [
                            '<strong>Ukraine:</strong> US providing massive military aid against Russia',
                            '<strong>NATO:</strong> Expansion remains core Russian grievance',
                            '<strong>Nuclear:</strong> Two largest nuclear arsenals in confrontation',
                            '<strong>Arms Control:</strong> New START only remaining treaty',
                            '<strong>Posture:</strong> Both increasing military readiness'
                        ],
                        details: 'The US-Russia military relationship is at its lowest point since the Cold War. The Ukraine conflict has put the two nuclear superpowers in a proxy war, with the US providing extensive military support to Ukraine while avoiding direct confrontation.'
                    },
                    diplomatic: {
                        score: 1,
                        summary: 'Relations collapsed following Ukraine invasion',
                        bullets: [
                            '<strong>Sanctions:</strong> Comprehensive US sanctions on Russia',
                            '<strong>Isolation:</strong> US leading effort to isolate Russia',
                            '<strong>Expulsions:</strong> Massive diplomatic expulsions both sides',
                            '<strong>Engagement:</strong> Minimal high-level contact',
                            '<strong>Future:</strong> No path to normalization visible'
                        ],
                        details: 'Diplomatic relations have collapsed to their lowest point in decades. The US has implemented comprehensive sanctions, led international efforts to isolate Russia, and provides political, economic, and military support to Ukraine.'
                    },
                    conflict: {
                        score: 9,
                        summary: 'High conflict risk with nuclear dimension and active proxy war',
                        bullets: [
                            '<strong>Proxy War:</strong> Active conflict through Ukraine',
                            '<strong>Nuclear Risk:</strong> Russian nuclear threats increase stakes',
                            '<strong>Escalation:</strong> Risk of direct confrontation exists',
                            '<strong>Cyber:</strong> Ongoing cyber operations both ways',
                            '<strong>Arctic:</strong> Emerging competition in Arctic region'
                        ],
                        details: 'The US-Russia relationship carries significant conflict risk. While direct military confrontation has been avoided, the Ukraine war represents a proxy conflict between nuclear powers. Russian nuclear threats have added a dangerous dimension to the crisis.'
                    }
                }
            },
            JP: {
                type: 'allies',
                score: 9,
                parameters: {
                    military: {
                        score: 9,
                        summary: 'Treaty ally with extensive military presence and integration',
                        bullets: [
                            '<strong>Treaty:</strong> US-Japan Security Treaty (1960) in force',
                            '<strong>Bases:</strong> 50,000+ US troops stationed in Japan',
                            '<strong>Extended Deterrence:</strong> US nuclear umbrella covers Japan',
                            '<strong>Integration:</strong> Deep command and operational integration',
                            '<strong>Modernization:</strong> Japan doubling defense spending'
                        ],
                        details: 'The US-Japan alliance is the cornerstone of security in the Indo-Pacific. US forces in Japan provide forward presence, while Japan provides bases, host nation support, and increasingly capable Self-Defense Forces that operate alongside US forces.'
                    },
                    defense: {
                        score: 10,
                        summary: 'Formal alliance with mutual defense commitment',
                        bullets: [
                            '<strong>Article 5:</strong> US committed to Japan\'s defense',
                            '<strong>Senkaku:</strong> US confirms islands covered by treaty',
                            '<strong>Planning:</strong> Joint operational planning for Taiwan contingencies',
                            '<strong>Exercises:</strong> Constant joint exercises and training',
                            '<strong>Development:</strong> Co-developing next-gen fighter aircraft'
                        ],
                        details: 'The US-Japan alliance is a formal mutual defense treaty, with the US committed to defending Japan from attack. This includes the disputed Senkaku Islands. Both nations are deepening cooperation in response to China\'s rise and North Korea\'s threats.'
                    }
                }
            },
            DE: {
                type: 'allies',
                score: 8.5,
                parameters: {
                    military: {
                        score: 8,
                        summary: 'NATO ally with significant US military presence',
                        bullets: [
                            '<strong>NATO:</strong> Core allies with Article 5 commitment',
                            '<strong>Bases:</strong> 35,000 US troops in Germany, largest in Europe',
                            '<strong>Nuclear:</strong> US nuclear weapons stationed in Germany',
                            '<strong>EUCOM:</strong> US European Command headquartered in Stuttgart',
                            '<strong>Ukraine:</strong> Close coordination on Ukraine response'
                        ],
                        details: 'Germany hosts more US troops than any other European country and serves as the hub for US military operations in Europe and Africa. While there have been occasional tensions, the alliance remains fundamental to European security.'
                    },
                    trade: {
                        score: 8,
                        summary: 'Major trading partner with significant investment ties',
                        bullets: [
                            '<strong>Trade:</strong> $257 billion bilateral trade',
                            '<strong>Investment:</strong> Deep cross-investment in both directions',
                            '<strong>Auto:</strong> German automakers major US employers',
                            '<strong>Technology:</strong> Cooperation in advanced manufacturing',
                            '<strong>Issues:</strong> Occasional tensions over trade imbalance'
                        ],
                        details: 'Germany is one of the US\'s most important economic partners in Europe. German companies are major investors and employers in the US, particularly in the automotive sector. The relationship occasionally sees friction over trade imbalances and industrial policy.'
                    }
                }
            }
        },

        // ─────────────────────────────────────────────────────────────────────────
        // Russia-Ukraine (conflict example)
        // ─────────────────────────────────────────────────────────────────────────
        RU: {
            UA: {
                type: 'conflict',
                score: 1,
                parameters: {
                    military: {
                        score: 1,
                        summary: 'Active war following Russia\'s 2022 invasion',
                        bullets: [
                            '<strong>War:</strong> Full-scale invasion began February 24, 2022',
                            '<strong>Casualties:</strong> Hundreds of thousands killed and wounded',
                            '<strong>Territory:</strong> Russia occupies ~18% of Ukraine',
                            '<strong>Weapons:</strong> Major conventional war with advanced weapons',
                            '<strong>Nuclear:</strong> Russian nuclear threats made repeatedly'
                        ],
                        details: 'Russia launched the largest military operation in Europe since WWII in February 2022. The war has resulted in massive casualties, displacement of millions, and has fundamentally altered European security. Ukraine, with Western support, continues to resist Russian occupation.'
                    },
                    conflict: {
                        score: 10,
                        summary: 'Active hot war - maximum conflict level',
                        bullets: [
                            '<strong>Active Combat:</strong> Ongoing military operations across front line',
                            '<strong>Destruction:</strong> Massive infrastructure and civilian damage',
                            '<strong>Displacement:</strong> 6+ million refugees, 8+ million internally displaced',
                            '<strong>War Crimes:</strong> Documented atrocities including Bucha massacre',
                            '<strong>Duration:</strong> No end in sight, both sides committed to fighting'
                        ],
                        details: 'This is an active war with daily combat, making it the highest possible conflict level. The war has global implications for energy, food security, and the international order. Nuclear escalation remains a concern given Russia\'s repeated threats.'
                    },
                    border: {
                        score: 1,
                        summary: 'Entire border is an active conflict zone',
                        bullets: [
                            '<strong>Invasion:</strong> Russia invaded from multiple directions',
                            '<strong>Crimea:</strong> Annexed by Russia in 2014, now cut off',
                            '<strong>Donbas:</strong> Conflict zone since 2014, now active war',
                            '<strong>Front Line:</strong> ~1,000 km active front line',
                            '<strong>Border:</strong> No functioning border, war zone'
                        ],
                        details: 'The Russia-Ukraine border has become the site of the largest war in Europe since 1945. The entire length of the border is either occupied, contested, or a potential invasion route. Normal border relations ceased to exist after the 2022 invasion.'
                    },
                    trade: {
                        score: 1,
                        summary: 'All trade collapsed due to war and sanctions',
                        bullets: [
                            '<strong>Collapse:</strong> Bilateral trade essentially zero',
                            '<strong>Sanctions:</strong> Ukraine sanctions all Russian trade',
                            '<strong>Energy:</strong> Gas transit continues for EU obligations',
                            '<strong>Pre-war:</strong> Russia was major trading partner',
                            '<strong>Recovery:</strong> No normalization possible during war'
                        ],
                        details: 'Pre-war, Russia was one of Ukraine\'s largest trading partners. The invasion completely destroyed this relationship. Ukraine has implemented comprehensive sanctions and severed nearly all economic ties. Only some Russian gas transit for Europe continues.'
                    }
                }
            }
        }
    };

    // ═══════════════════════════════════════════════════════════════════════════
    // RELATIONSHIP CALCULATION FUNCTIONS
    // ═══════════════════════════════════════════════════════════════════════════

    /**
     * Determine relationship type based on score
     */
    function getRelationshipType(score) {
        if (score >= 8) return 'allies';
        if (score >= 6) return 'strategic';
        if (score >= 4) return 'neutral';
        if (score >= 3) return 'complex';
        return 'conflict';
    }

    /**
     * Get relationship type details
     */
    function getRelationshipTypeInfo(type) {
        return RELATIONSHIP_TYPES[type] || RELATIONSHIP_TYPES.neutral;
    }

    /**
     * Calculate relationship score based on shared alliances and known factors
     */
    function calculateRelationshipScore(countryA, countryB) {
        let score = 5; // Base neutral score
        
        // Check shared alliances
        for (const [allianceId, alliance] of Object.entries(ALLIANCES)) {
            if (alliance.members.includes(countryA) && alliance.members.includes(countryB)) {
                switch (alliance.type) {
                    case 'military':
                        score += 2;
                        break;
                    case 'intelligence':
                        score += 2.5;
                        break;
                    case 'political-economic':
                        score += 1.5;
                        break;
                    case 'strategic':
                        score += 1;
                        break;
                    default:
                        score += 0.5;
                }
            }
        }
        
        // Check if same region (slight positive)
        const cA = COUNTRIES[countryA];
        const cB = COUNTRIES[countryB];
        if (cA && cB && cA.region === cB.region) {
            score += 0.5;
        }
        
        // Cap score at 10
        return Math.min(10, Math.max(1, score));
    }

    /**
     * Generate default relationship data when specific data is not available
     */
    function generateDefaultRelationship(centerCode, targetCode) {
        const score = calculateRelationshipScore(centerCode, targetCode);
        const type = getRelationshipType(score);
        
        const centerCountry = COUNTRIES[centerCode];
        const targetCountry = COUNTRIES[targetCode];
        
        if (!centerCountry || !targetCountry) {
            return null;
        }
        
        // Generate default parameter data
        const parameters = {};
        PARAMETERS.forEach(param => {
            const paramScore = Math.max(1, Math.min(10, score + (Math.random() - 0.5) * 2));
            parameters[param.id] = {
                score: Math.round(paramScore * 10) / 10,
                summary: `Standard ${param.name.toLowerCase()} between ${centerCountry.name} and ${targetCountry.name}.`,
                bullets: [
                    `<strong>Status:</strong> ${type === 'allies' ? 'Strong cooperation' : type === 'strategic' ? 'Growing partnership' : type === 'neutral' ? 'Normal relations' : type === 'complex' ? 'Mixed dynamics' : 'Challenging relations'}`,
                    `<strong>Framework:</strong> Bilateral agreements in place`,
                    `<strong>Trend:</strong> ${score >= 5 ? 'Stable to improving' : 'Requires attention'}`,
                    `<strong>Key Factor:</strong> ${param.factors[0]}`
                ],
                details: `${param.name} between ${centerCountry.name} and ${targetCountry.name} reflect the overall ${type} nature of the bilateral relationship. ${param.description}`
            };
        });
        
        return {
            type,
            score: Math.round(score * 10) / 10,
            parameters
        };
    }

    /**
     * Get relationship data for two countries
     */
    function getRelationship(centerCode, targetCode) {
        // Check if specific relationship data exists
        if (SAMPLE_RELATIONSHIPS[centerCode] && SAMPLE_RELATIONSHIPS[centerCode][targetCode]) {
            return SAMPLE_RELATIONSHIPS[centerCode][targetCode];
        }
        
        // Check reverse (relationships are bidirectional)
        if (SAMPLE_RELATIONSHIPS[targetCode] && SAMPLE_RELATIONSHIPS[targetCode][centerCode]) {
            return SAMPLE_RELATIONSHIPS[targetCode][centerCode];
        }
        
        // Generate default relationship
        return generateDefaultRelationship(centerCode, targetCode);
    }

    /**
     * Get all relationships for a center country
     */
    function getAllRelationships(centerCode) {
        const relationships = {};
        
        Object.keys(COUNTRIES).forEach(code => {
            if (code !== centerCode) {
                const rel = getRelationship(centerCode, code);
                if (rel) {
                    relationships[code] = rel;
                }
            }
        });
        
        return relationships;
    }

    /**
     * Get countries by region
     */
    function getCountriesByRegion(region) {
        if (region === 'all') {
            return Object.values(COUNTRIES);
        }
        return Object.values(COUNTRIES).filter(c => c.region === region);
    }

    /**
     * Get countries by relationship type
     */
    function getCountriesByType(centerCode, type) {
        const relationships = getAllRelationships(centerCode);
        const result = [];
        
        Object.entries(relationships).forEach(([code, rel]) => {
            if (type === 'all' || rel.type === type) {
                result.push({
                    ...COUNTRIES[code],
                    relationship: rel
                });
            }
        });
        
        return result;
    }

    /**
     * Search countries by name
     */
    function searchCountries(query) {
        const lowerQuery = query.toLowerCase();
        return Object.values(COUNTRIES).filter(country => 
            country.name.toLowerCase().includes(lowerQuery) ||
            country.code.toLowerCase().includes(lowerQuery) ||
            country.capital.toLowerCase().includes(lowerQuery)
        );
    }

    /**
     * Get random country
     */
    function getRandomCountry() {
        const codes = Object.keys(COUNTRIES);
        const randomIndex = Math.floor(Math.random() * codes.length);
        return COUNTRIES[codes[randomIndex]];
    }

    /**
     * Get parameter info by ID
     */
    function getParameter(id) {
        return PARAMETERS.find(p => p.id === id);
    }

    /**
     * Get relationship statistics for a country
     */
    function getRelationshipStats(centerCode) {
        const relationships = getAllRelationships(centerCode);
        const stats = {
            allies: 0,
            strategic: 0,
            neutral: 0,
            complex: 0,
            conflict: 0,
            total: 0
        };
        
        Object.values(relationships).forEach(rel => {
            if (rel && rel.type) {
                stats[rel.type]++;
                stats.total++;
            }
        });
        
        return stats;
    }

    // ═══════════════════════════════════════════════════════════════════════════
    // PUBLIC API
    // ═══════════════════════════════════════════════════════════════════════════

    return {
        // Data
        COUNTRIES,
        PARAMETERS,
        RELATIONSHIP_TYPES,
        REGIONS,
        ALLIANCES,
        
        // Functions
        getRelationship,
        getAllRelationships,
        getCountriesByRegion,
        getCountriesByType,
        searchCountries,
        getRandomCountry,
        getParameter,
        getRelationshipStats,
        getRelationshipType,
        getRelationshipTypeInfo,
        
        // Utility
        getCountryCount: () => Object.keys(COUNTRIES).length,
        getAllCountryCodes: () => Object.keys(COUNTRIES),
        getCountry: (code) => COUNTRIES[code]
    };

})();

// Make available globally
window.UnityAtlasData = UnityAtlasData;
