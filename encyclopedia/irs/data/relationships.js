// ============================================
// UNITY ATLAS - RELATIONSHIPS DATABASE
// Geopolitical Alliances, Conflicts & Parameters
// Version: 2026.04
// ============================================

// ============================================
// 16 PARAMETERS DEFINITION
// ============================================
const PARAMETERS = [
    { 
        id: 'trade', 
        name: 'Trade Relations', 
        icon: 'fa-handshake', 
        category: 'economic',
        desc: 'Bilateral trade volume, agreements, tariffs, FTAs, and economic exchange patterns'
    },
    { 
        id: 'military', 
        name: 'Military Cooperation', 
        icon: 'fa-shield-alt',
        category: 'security',
        desc: 'Joint military exercises, arms deals, defense partnerships, and military aid'
    },
    { 
        id: 'diplomatic', 
        name: 'Diplomatic Ties', 
        icon: 'fa-landmark',
        category: 'political',
        desc: 'Embassy presence, diplomatic missions, ambassador level, and official recognition'
    },
    { 
        id: 'border', 
        name: 'Border Status', 
        icon: 'fa-border-all',
        category: 'territorial',
        desc: 'Border disputes, crossings, territorial agreements, and demarcation status'
    },
    { 
        id: 'historical', 
        name: 'Historical Relations', 
        icon: 'fa-history',
        category: 'cultural',
        desc: 'Past conflicts, colonial history, shared heritage, and historical ties'
    },
    { 
        id: 'economic', 
        name: 'Economic Agreements', 
        icon: 'fa-chart-line',
        category: 'economic',
        desc: 'FTAs, investment treaties, economic partnerships, and financial cooperation'
    },
    { 
        id: 'cultural', 
        name: 'Cultural Exchange', 
        icon: 'fa-theater-masks',
        category: 'cultural',
        desc: 'Cultural programs, education exchange, diaspora connections, and tourism'
    },
    { 
        id: 'visa', 
        name: 'Visa Policies', 
        icon: 'fa-passport',
        category: 'mobility',
        desc: 'Visa requirements, travel freedom, immigration policies, and movement of people'
    },
    { 
        id: 'strategic', 
        name: 'Strategic Importance', 
        icon: 'fa-chess',
        category: 'geopolitical',
        desc: 'Geopolitical significance, strategic value, and regional influence'
    },
    { 
        id: 'intelligence', 
        name: 'Intelligence Sharing', 
        icon: 'fa-user-secret',
        category: 'security',
        desc: 'Intelligence cooperation, security information exchange, and surveillance partnerships'
    },
    { 
        id: 'energy', 
        name: 'Energy Cooperation', 
        icon: 'fa-bolt',
        category: 'economic',
        desc: 'Oil, gas, renewable energy deals, pipelines, and energy security arrangements'
    },
    { 
        id: 'technology', 
        name: 'Technology Partnership', 
        icon: 'fa-microchip',
        category: 'economic',
        desc: 'Tech transfer, joint R&D, innovation collaboration, and digital cooperation'
    },
    { 
        id: 'defense', 
        name: 'Defense Agreements', 
        icon: 'fa-fighter-jet',
        category: 'security',
        desc: 'Mutual defense pacts, alliance membership, security guarantees'
    },
    { 
        id: 'political', 
        name: 'Political Alignment', 
        icon: 'fa-balance-scale',
        category: 'political',
        desc: 'Ideological alignment, UN voting patterns, political stance, and governance similarity'
    },
    { 
        id: 'organization', 
        name: 'International Organizations', 
        icon: 'fa-globe',
        category: 'multilateral',
        desc: 'Shared membership in UN bodies, regional blocs, and international organizations'
    },
    { 
        id: 'conflictRisk', 
        name: 'Conflict Risk Level', 
        icon: 'fa-exclamation-triangle',
        category: 'security',
        desc: 'Current tensions, potential flashpoints, risk assessment, and historical grievances'
    }
];

// ============================================
// ALLIANCE DEFINITIONS (2026)
// ============================================
const ALLIANCES = {
    // Military Alliances
    NATO: {
        name: 'North Atlantic Treaty Organization',
        type: 'military',
        founded: 1949,
        members: ['US','GB','FR','DE','IT','CA','ES','PL','NL','BE','PT','GR','TR','DK','NO','CZ','HU','RO','BG','SK','SI','HR','AL','MK','ME','LT','LV','EE','IS','LU','FI','SE']
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
    
    AUKUS: {
        name: 'Australia-UK-US Partnership',
        type: 'military',
        founded: 2021,
        members: ['AU','GB','US']
    },
    
    SCO: {
        name: 'Shanghai Cooperation Organisation',
        type: 'security',
        founded: 2001,
        members: ['CN','RU','IN','PK','KZ','KG','TJ','UZ','IR','BY']
    },
    
    CSTO: {
        name: 'Collective Security Treaty Organization',
        type: 'military',
        founded: 1992,
        members: ['RU','BY','AM','KZ','KG','TJ']
    },
    
    // Economic Blocs
    EU: {
        name: 'European Union',
        type: 'economic-political',
        founded: 1993,
        members: ['DE','FR','IT','ES','PL','RO','NL','BE','GR','CZ','PT','HU','SE','AT','BG','DK','FI','SK','IE','HR','LT','SI','LV','EE','CY','LU','MT']
    },
    
    BRICS: {
        name: 'BRICS+ Alliance',
        type: 'economic',
        founded: 2009,
        members: ['BR','RU','IN','CN','ZA','EG','ET','IR','AE','SA']
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
    
    AU: {
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
    
    USMCA: {
        name: 'US-Mexico-Canada Agreement',
        type: 'trade',
        founded: 2020,
        members: ['US','MX','CA']
    },
    
    CARICOM: {
        name: 'Caribbean Community',
        type: 'economic',
        founded: 1973,
        members: ['AG','BS','BB','BZ','DM','GD','GY','HT','JM','KN','LC','VC','SR','TT']
    },
    
    PIF: {
        name: 'Pacific Islands Forum',
        type: 'political',
        founded: 1971,
        members: ['AU','NZ','FJ','PG','SB','VU','WS','TO','TV','KI','MH','FM','PW','NR']
    },
    
    SAARC: {
        name: 'South Asian Association for Regional Cooperation',
        type: 'economic',
        founded: 1985,
        members: ['IN','PK','BD','LK','NP','BT','MV','AF']
    },
    
    ARAB_LEAGUE: {
        name: 'Arab League',
        type: 'political',
        founded: 1945,
        members: ['EG','IQ','JO','LB','SA','SY','YE','LY','SD','MA','TN','KW','DZ','AE','BH','QA','OM','MR','SO','PS','DJ','KM']
    },
    
    OIC: {
        name: 'Organisation of Islamic Cooperation',
        type: 'political',
        founded: 1969,
        members: ['SA','EG','IR','TR','PK','ID','MY','BD','NG','DZ','MA','IQ','SD','AF','SY','YE','JO','LB','KW','AE','QA','BH','OM','LY','TN','MR','ML','NE','SN','GM','GN','SL','BF','CI','BJ','TG','CM','TD','DJ','SO','KM','MV','BN','UZ','KZ','KG','TJ','TM','AZ','AL','MZ','UG','GA','GW','SR']
    },
    
    COMMONWEALTH: {
        name: 'Commonwealth of Nations',
        type: 'political',
        founded: 1931,
        members: ['GB','AU','NZ','CA','IN','ZA','NG','PK','BD','MY','SG','KE','GH','TZ','UG','ZM','ZW','BW','NA','MU','SZ','LS','MW','MZ','RW','SC','CM','SL','GM','GY','TT','JM','BB','AG','BS','BZ','DM','GD','KN','LC','VC','CY','MT','FJ','KI','NR','PG','WS','SB','TO','TV','VU']
    },
    
    FRANCOPHONIE: {
        name: 'Organisation Internationale de la Francophonie',
        type: 'cultural',
        founded: 1970,
        members: ['FR','BE','CH','LU','MC','CA','SN','CI','ML','BF','NE','BJ','TG','CM','CF','TD','CG','CD','GA','GQ','DJ','KM','MG','MU','SC','RW','BI','VN','LA','KH','LB','TN','MA','DZ','EG','MR','HT']
    }
};

// ============================================
// CONFLICT RELATIONSHIPS (2026)
// ============================================
const CONFLICTS = {
    // Active/Tense Relations
    'IN': { 
        conflict: ['PK', 'CN'],
        complex: ['BD', 'NP', 'LK'],
        reason: {
            'PK': 'Kashmir dispute, cross-border terrorism, historical wars',
            'CN': 'Border disputes (Aksai Chin, Arunachal), LAC tensions'
        }
    },
    'PK': { 
        conflict: ['IN', 'AF'],
        complex: ['IR', 'US'],
        reason: {
            'IN': 'Kashmir conflict, terrorism accusations, nuclear rivalry',
            'AF': 'Taliban support allegations, border issues'
        }
    },
    'IL': { 
        conflict: ['IR', 'SY', 'LB', 'PS', 'YE'],
        complex: ['TR', 'QA'],
        reason: {
            'IR': 'Nuclear program, proxy conflicts, existential threat',
            'PS': 'Occupation, Gaza war 2023-2026',
            'LB': 'Hezbollah conflict',
            'SY': 'Golan Heights, Iranian presence'
        }
    },
    'PS': { 
        conflict: ['IL'],
        reason: {
            'IL': 'Occupation, settlements, Gaza blockade'
        }
    },
    'IR': { 
        conflict: ['IL', 'US', 'SA'],
        complex: ['AE', 'BH', 'EG'],
        reason: {
            'IL': 'Existential conflict, nuclear program',
            'US': 'Sanctions, nuclear deal collapse, regional proxy wars',
            'SA': 'Regional rivalry, Yemen proxy war, sectarian divide'
        }
    },
    'US': { 
        conflict: ['IR', 'KP', 'RU', 'CU', 'VE', 'SY'],
        complex: ['CN', 'TR'],
        reason: {
            'RU': 'Ukraine war support, NATO expansion, election interference',
            'CN': 'Trade war, Taiwan, tech competition, South China Sea',
            'KP': 'Nuclear program, sanctions',
            'CU': 'Embargo since 1962, human rights',
            'VE': 'Maduro regime, oil sanctions'
        }
    },
    'RU': { 
        conflict: ['UA', 'US', 'GB', 'PL', 'LT', 'LV', 'EE'],
        complex: ['FI', 'SE', 'DE', 'FR', 'JP'],
        reason: {
            'UA': 'Active war since 2022, Crimea annexation',
            'US': 'NATO expansion, sanctions, proxy conflict',
            'GB': 'Sanctions, Skripal poisoning, Ukraine support',
            'PL': 'NATO frontline, historical animosity',
            'Baltics': 'NATO presence, Russian minority issues'
        }
    },
    'UA': { 
        conflict: ['RU', 'BY'],
        reason: {
            'RU': 'Russian invasion 2022, Crimea, Donbas',
            'BY': 'Belarus as Russian staging ground'
        }
    },
    'CN': { 
        conflict: ['TW', 'US'],
        complex: ['JP', 'PH', 'VN', 'IN', 'AU'],
        reason: {
            'TW': 'Claims Taiwan as territory, military threats',
            'US': 'Trade war, tech restrictions, Taiwan support',
            'JP': 'Senkaku/Diaoyu islands, historical grievances',
            'PH': 'South China Sea, Scarborough Shoal',
            'VN': 'Paracel/Spratly islands disputes'
        }
    },
    'TW': { 
        conflict: ['CN'],
        reason: {
            'CN': 'PRC claims sovereignty, military exercises'
        }
    },
    'KP': { 
        conflict: ['US', 'KR', 'JP'],
        reason: {
            'US': 'Nuclear standoff, sanctions',
            'KR': 'Korean War armistice, nuclear threats',
            'JP': 'Missile tests, abductions'
        }
    },
    'KR': { 
        conflict: ['KP'],
        complex: ['JP', 'CN'],
        reason: {
            'KP': 'Division, nuclear threats',
            'JP': 'Historical grievances, trade disputes'
        }
    },
    'JP': { 
        conflict: ['KP'],
        complex: ['CN', 'RU', 'KR'],
        reason: {
            'KP': 'Missile threats, abductions',
            'CN': 'Senkaku dispute, WWII history',
            'RU': 'Northern Territories/Kuril Islands',
            'KR': 'Comfort women, forced labor history'
        }
    },
    'SA': { 
        conflict: ['IR', 'YE'],
        complex: ['QA', 'TR'],
        reason: {
            'IR': 'Regional hegemony, Shia-Sunni divide',
            'YE': 'Houthi conflict, military intervention'
        }
    },
    'GR': { 
        conflict: [],
        complex: ['TR'],
        reason: {
            'TR': 'Aegean disputes, Cyprus, EEZ conflicts'
        }
    },
    'TR': { 
        conflict: [],
        complex: ['GR', 'CY', 'SY', 'AM', 'IL'],
        reason: {
            'GR': 'Aegean islands, EEZ disputes',
            'CY': 'Northern Cyprus occupation',
            'SY': 'Border security, Kurdish issue',
            'AM': 'Armenian genocide recognition, Azerbaijan support'
        }
    },
    'AM': { 
        conflict: ['AZ'],
        complex: ['TR'],
        reason: {
            'AZ': 'Nagorno-Karabakh war, 2020/2023 conflicts',
            'TR': 'Genocide recognition, Azerbaijan support'
        }
    },
    'AZ': { 
        conflict: ['AM'],
        reason: {
            'AM': 'Nagorno-Karabakh, 2023 takeover'
        }
    },
    'RS': { 
        conflict: [],
        complex: ['XK', 'HR', 'BA'],
        reason: {
            'XK': 'Kosovo independence non-recognition',
            'HR': '1990s war legacy',
            'BA': 'Republika Srpska tensions'
        }
    },
    'XK': { 
        conflict: [],
        complex: ['RS'],
        reason: {
            'RS': 'Independence dispute, ethnic tensions'
        }
    },
    'MA': { 
        conflict: [],
        complex: ['DZ'],
        reason: {
            'DZ': 'Western Sahara dispute, border closure'
        }
    },
    'DZ': { 
        conflict: [],
        complex: ['MA'],
        reason: {
            'MA': 'Western Sahara, Polisario support'
        }
    },
    'ET': { 
        conflict: [],
        complex: ['ER', 'EG', 'SD'],
        reason: {
            'ER': 'Border war legacy, Tigray spillover',
            'EG': 'GERD dam dispute, Nile waters',
            'SD': 'Al-Fashaga border region'
        }
    },
    'EG': { 
        conflict: [],
        complex: ['ET', 'TR', 'QA'],
        reason: {
            'ET': 'GERD dam, Nile water rights',
            'TR': 'Libya rivalry, Muslim Brotherhood',
            'QA': 'Muslim Brotherhood support (thawing)'
        }
    },
    'VE': {
        conflict: ['US'],
        complex: ['GY', 'CO'],
        reason: {
            'US': 'Sanctions, regime change attempts',
            'GY': 'Essequibo territorial claim',
            'CO': 'Border tensions, refugee crisis'
        }
    }
};

// ============================================
// SPECIAL BILATERAL RELATIONS
// ============================================
const SPECIAL_RELATIONS = {
    // Closest Alliances
    'US-GB': { type: 'allies', strength: 10, name: 'Special Relationship', since: 1940 },
    'US-CA': { type: 'allies', strength: 10, name: 'Closest Allies', since: 1867 },
    'US-AU': { type: 'allies', strength: 10, name: 'ANZUS Alliance', since: 1951 },
    'US-JP': { type: 'allies', strength: 9, name: 'Security Treaty', since: 1951 },
    'US-KR': { type: 'allies', strength: 9, name: 'Mutual Defense Treaty', since: 1953 },
    'US-IL': { type: 'allies', strength: 10, name: 'Special Relationship', since: 1948 },
    'US-DE': { type: 'allies', strength: 9, name: 'NATO Core Allies', since: 1949 },
    
    'GB-AU': { type: 'allies', strength: 10, name: 'Commonwealth Core', since: 1901 },
    'GB-NZ': { type: 'allies', strength: 10, name: 'Commonwealth Core', since: 1907 },
    'GB-CA': { type: 'allies', strength: 10, name: 'Commonwealth Core', since: 1867 },
    
    'DE-FR': { type: 'allies', strength: 10, name: 'EU Engine', since: 1963 },
    'FR-DE': { type: 'allies', strength: 10, name: 'Élysée Treaty', since: 1963 },
    
    'AU-NZ': { type: 'allies', strength: 10, name: 'Trans-Tasman', since: 1901 },
    
    'RU-CN': { type: 'strategic', strength: 8, name: 'Strategic Partnership', since: 2001 },
    'RU-BY': { type: 'allies', strength: 9, name: 'Union State', since: 1999 },
    'RU-IR': { type: 'strategic', strength: 7, name: 'Strategic Cooperation', since: 2015 },
    
    'CN-PK': { type: 'allies', strength: 9, name: 'All-Weather Friendship', since: 1951 },
    'CN-KP': { type: 'strategic', strength: 7, name: 'Treaty Alliance', since: 1961 },
    
    'IN-RU': { type: 'strategic', strength: 8, name: 'Strategic Partnership', since: 1971 },
    'IN-FR': { type: 'strategic', strength: 8, name: 'Strategic Partnership', since: 1998 },
    'IN-US': { type: 'strategic', strength: 8, name: 'Comprehensive Partnership', since: 2005 },
    
    'SA-AE': { type: 'allies', strength: 9, name: 'GCC Core', since: 1981 },
    'SA-EG': { type: 'strategic', strength: 8, name: 'Arab Leadership', since: 2013 },
    
    'TR-AZ': { type: 'allies', strength: 9, name: 'One Nation Two States', since: 1991 },
    'TR-QA': { type: 'strategic', strength: 8, name: 'Strategic Alliance', since: 2014 },
    
    'JP-AU': { type: 'strategic', strength: 8, name: 'Security Partnership', since: 2007 },
    'JP-IN': { type: 'strategic', strength: 8, name: '2+2 Dialogue', since: 2008 },
    
    'BR-AR': { type: 'strategic', strength: 7, name: 'MERCOSUR Core', since: 1991 },
    
    'ZA-NG': { type: 'strategic', strength: 6, name: 'African Giants', since: 1999 },
};

// ============================================
// RELATIONSHIP COLORS
// ============================================
const RELATION_COLORS = {
    allies: '#10B981',      // Green
    strategic: '#3B82F6',   // Blue
    neutral: '#FBBF24',     // Yellow
    complex: '#F97316',     // Orange
    conflict: '#EF4444',    // Red
    selected: '#EC4899'     // Pink
};

// ============================================
// RELATIONSHIP GENERATOR FUNCTIONS
// ============================================

/**
 * Calculate base relationship between two countries
 * @param {string} code1 - First country code
 * @param {string} code2 - Second country code
 * @returns {object} Relationship data
 */
function calculateRelationship(code1, code2) {
    const c1 = COUNTRY_MAP[code1];
    const c2 = COUNTRY_MAP[code2];
    
    if (!c1 || !c2 || code1 === code2) return null;
    
    let type = 'neutral';
    let strength = 5;
    let ring = 3;
    let reasons = [];
    
    // Check for special bilateral relations
    const specialKey1 = `${code1}-${code2}`;
    const specialKey2 = `${code2}-${code1}`;
    
    if (SPECIAL_RELATIONS[specialKey1]) {
        const special = SPECIAL_RELATIONS[specialKey1];
        return {
            code: code2,
            type: special.type,
            strength: special.strength,
            ring: special.type === 'allies' ? 1 : 2,
            reasons: [special.name],
            special: true
        };
    }
    
    if (SPECIAL_RELATIONS[specialKey2]) {
        const special = SPECIAL_RELATIONS[specialKey2];
        return {
            code: code2,
            type: special.type,
            strength: special.strength,
            ring: special.type === 'allies' ? 1 : 2,
            reasons: [special.name],
            special: true
        };
    }
    
    // Check for conflicts
    const c1Conflicts = CONFLICTS[code1];
    if (c1Conflicts) {
        if (c1Conflicts.conflict && c1Conflicts.conflict.includes(code2)) {
            type = 'conflict';
            strength = 2;
            ring = 5;
            if (c1Conflicts.reason && c1Conflicts.reason[code2]) {
                reasons.push(c1Conflicts.reason[code2]);
            }
        } else if (c1Conflicts.complex && c1Conflicts.complex.includes(code2)) {
            type = 'complex';
            strength = 4;
            ring = 4;
            if (c1Conflicts.reason && c1Conflicts.reason[code2]) {
                reasons.push(c1Conflicts.reason[code2]);
            }
        }
    }
    
    // Check reverse conflicts
    const c2Conflicts = CONFLICTS[code2];
    if (c2Conflicts && type === 'neutral') {
        if (c2Conflicts.conflict && c2Conflicts.conflict.includes(code1)) {
            type = 'conflict';
            strength = 2;
            ring = 5;
        } else if (c2Conflicts.complex && c2Conflicts.complex.includes(code1)) {
            type = 'complex';
            strength = 4;
            ring = 4;
        }
    }
    
    // If not in conflict, check alliances
    if (type === 'neutral') {
        const sharedAlliances = [];
        
        for (const [allianceKey, alliance] of Object.entries(ALLIANCES)) {
            const inAlliance1 = alliance.members.includes(code1);
            const inAlliance2 = alliance.members.includes(code2);
            
            if (inAlliance1 && inAlliance2) {
                sharedAlliances.push({
                    key: allianceKey,
                    name: alliance.name,
                    type: alliance.type
                });
            }
        }
        
        if (sharedAlliances.length > 0) {
            // Determine relationship based on alliance types
            const hasMilitaryAlliance = sharedAlliances.some(a => 
                a.type === 'military' || a.type === 'intelligence'
            );
            const hasEconomicAlliance = sharedAlliances.some(a => 
                a.type === 'economic' || a.type === 'economic-political' || a.type === 'trade'
            );
            
            if (hasMilitaryAlliance) {
                type = 'allies';
                strength = 8 + Math.min(sharedAlliances.length, 2);
                ring = 1;
            } else if (hasEconomicAlliance || sharedAlliances.length >= 2) {
                type = 'strategic';
                strength = 6 + Math.min(sharedAlliances.length, 3);
                ring = 2;
            } else {
                type = 'strategic';
                strength = 5 + sharedAlliances.length;
                ring = 2;
            }
            
            reasons = sharedAlliances.map(a => a.name);
        }
    }
    
    // Regional bonus
    if (type === 'neutral' && c1.region === c2.region) {
        type = 'strategic';
        strength = 5;
        ring = 2;
        reasons.push('Regional neighbors');
    }
    
    // Subregional bonus
    if (c1.subregion === c2.subregion && c1.region === c2.region) {
        strength = Math.min(strength + 1, 10);
        if (!reasons.includes('Subregional partners')) {
            reasons.push('Subregional partners');
        }
    }
    
    return {
        code: code2,
        type,
        strength: Math.min(10, Math.max(1, strength)),
        ring,
        reasons,
        special: false
    };
}

/**
 * Generate 16 parameter scores for a relationship
 * @param {string} type - Relationship type
 * @param {number} baseStrength - Base strength score
 * @param {array} reasons - Relationship reasons
 * @returns {object} Parameter scores
 */
function generateParameters(type, baseStrength, reasons = []) {
    const params = {};
    
    // Base ranges for each type
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
        
        // Adjust specific parameters based on relationship type
        switch (param.id) {
            case 'conflictRisk':
                if (type === 'conflict') score = Math.floor(Math.random() * 3) + 8;
                else if (type === 'complex') score = Math.floor(Math.random() * 2) + 5;
                else if (type === 'allies') score = Math.floor(Math.random() * 2) + 1;
                break;
                
            case 'military':
            case 'defense':
                if (type === 'conflict') score = 1;
                if (type === 'allies') score = Math.max(score, 7);
                break;
                
            case 'intelligence':
                if (type === 'allies') score = Math.max(score, 7);
                if (type === 'conflict') score = 1;
                break;
                
            case 'diplomatic':
                if (type === 'conflict') score = Math.min(score, 3);
                if (type === 'allies') score = Math.max(score, 8);
                break;
                
            case 'trade':
            case 'economic':
                // Even adversaries can have trade
                if (type === 'conflict') score = Math.floor(Math.random() * 3) + 2;
                break;
                
            case 'visa':
                if (type === 'allies') score = Math.max(score, 7);
                if (type === 'conflict') score = Math.floor(Math.random() * 2) + 1;
                break;
                
            case 'cultural':
                // Cultural exchange can persist despite political tensions
                if (type === 'conflict') score = Math.floor(Math.random() * 4) + 1;
                break;
        }
        
        // Ensure score is in valid range
        score = Math.min(10, Math.max(1, score));
        
        params[param.id] = {
            score,
            summary: getParameterSummary(param.id, score, type),
            details: getParameterDetails(param.id, score, type, reasons)
        };
    });
    
    return params;
}

/**
 * Get summary text for a parameter
 */
function getParameterSummary(paramId, score, type) {
    const summaries = {
        trade: {
            high: 'Major trading partners with extensive bilateral trade',
            medium: 'Moderate trade relations with room for growth',
            low: 'Limited trade activity and economic exchange'
        },
        military: {
            high: 'Active military cooperation and joint exercises',
            medium: 'Limited military engagement and contacts',
            low: 'No military cooperation or active hostility'
        },
        diplomatic: {
            high: 'Full diplomatic relations at ambassador level',
            medium: 'Standard diplomatic presence and communication',
            low: 'Strained or no formal diplomatic relations'
        },
        border: {
            high: 'Open borders with free movement agreements',
            medium: 'Standard border controls and crossings',
            low: 'Disputed borders or closed crossings'
        },
        historical: {
            high: 'Shared positive history and heritage',
            medium: 'Mixed historical relations',
            low: 'Historical conflicts and grievances'
        },
        economic: {
            high: 'Multiple FTAs and investment agreements',
            medium: 'Standard economic frameworks in place',
            low: 'Limited or no economic agreements'
        },
        cultural: {
            high: 'Strong cultural exchange and diaspora ties',
            medium: 'Some cultural programs and tourism',
            low: 'Limited cultural engagement'
        },
        visa: {
            high: 'Visa-free or easy visa access',
            medium: 'Standard visa requirements',
            low: 'Restrictive visa policies or bans'
        },
        strategic: {
            high: 'High strategic importance and alignment',
            medium: 'Moderate strategic value',
            low: 'Low strategic priority'
        },
        intelligence: {
            high: 'Active intelligence sharing agreements',
            medium: 'Limited information exchange',
            low: 'No intelligence cooperation'
        },
        energy: {
            high: 'Major energy partnerships and deals',
            medium: 'Some energy cooperation',
            low: 'Limited or no energy ties'
        },
        technology: {
            high: 'Active tech partnerships and R&D',
            medium: 'Limited technology cooperation',
            low: 'Tech restrictions or no cooperation'
        },
        defense: {
            high: 'Mutual defense agreements in place',
            medium: 'Limited defense cooperation',
            low: 'No defense agreements or opposing forces'
        },
        political: {
            high: 'Strong political and ideological alignment',
            medium: 'Partial political alignment',
            low: 'Divergent political systems and values'
        },
        organization: {
            high: 'Multiple shared organization memberships',
            medium: 'Some shared organizations',
            low: 'Few or no shared organizations'
        },
        conflictRisk: {
            high: 'High risk of conflict or active tensions',
            medium: 'Moderate tensions present',
            low: 'Low conflict risk, stable relations'
        }
    };
    
    const level = score >= 7 ? 'high' : score >= 4 ? 'medium' : 'low';
    return summaries[paramId]?.[level] || 'Data unavailable';
}

/**
 * Get detailed text for a parameter
 */
function getParameterDetails(paramId, score, type, reasons) {
    const param = PARAMETERS.find(p => p.id === paramId);
    const reasonText = reasons.length > 0 ? `Key factors: ${reasons.slice(0, 2).join(', ')}.` : '';
    
    const levelDesc = score >= 8 ? 'excellent' : score >= 6 ? 'good' : score >= 4 ? 'moderate' : score >= 2 ? 'limited' : 'minimal';
    
    return `This parameter assesses ${param?.desc || 'bilateral relations'}. Current assessment indicates ${levelDesc} engagement in this area with a score of ${score}/10. ${reasonText} This evaluation is based on official agreements, historical data, and current diplomatic status as of 2026.`;
}

/**
 * Generate all relations for a center country
 * @param {string} centerCode - Center country code
 * @returns {array} Array of relationship objects
 */
function generateRelationsForCountry(centerCode) {
    if (!COUNTRY_MAP[centerCode]) return [];
    
    const relations = [];
    
    COUNTRIES.forEach(country => {
        if (country.code === centerCode) return;
        
        const relationship = calculateRelationship(centerCode, country.code);
        if (!relationship) return;
        
        const params = generateParameters(
            relationship.type, 
            relationship.strength, 
            relationship.reasons
        );
        
        relations.push({
            code: country.code,
            name: country.name,
            flag: country.flag,
            region: country.region,
            subregion: country.subregion,
            capital: country.capital,
            coords: country.coords,
            type: relationship.type,
            strength: relationship.strength,
            ring: relationship.ring,
            reasons: relationship.reasons,
            special: relationship.special,
            params
        });
    });
    
    // Sort by priority: conflict > allies > strategic > complex > neutral
    // Then by strength (descending)
    const priority = { conflict: 5, allies: 4, strategic: 3, complex: 2, neutral: 1 };
    
    relations.sort((a, b) => {
        if (priority[b.type] !== priority[a.type]) {
            return priority[b.type] - priority[a.type];
        }
        return b.strength - a.strength;
    });
    
    return relations;
}

/**
 * Get statistics for a country's relations
 * @param {array} relations - Array of relationship objects
 * @returns {object} Statistics
 */
function getRelationStats(relations) {
    const stats = {
        allies: 0,
        strategic: 0,
        neutral: 0,
        complex: 0,
        conflict: 0,
        total: relations.length
    };
    
    relations.forEach(r => {
        if (stats.hasOwnProperty(r.type)) {
            stats[r.type]++;
        }
    });
    
    return stats;
}

/**
 * Get score color based on value
 */
function getScoreColor(score) {
    if (score >= 8) return RELATION_COLORS.allies;
    if (score >= 6) return RELATION_COLORS.strategic;
    if (score >= 4) return RELATION_COLORS.neutral;
    if (score >= 2) return RELATION_COLORS.complex;
    return RELATION_COLORS.conflict;
}

// ============================================
// EXPORT
// ============================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        PARAMETERS,
        ALLIANCES,
        CONFLICTS,
        SPECIAL_RELATIONS,
        RELATION_COLORS,
        calculateRelationship,
        generateParameters,
        generateRelationsForCountry,
        getRelationStats,
        getScoreColor
    };
}
