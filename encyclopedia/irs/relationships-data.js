// ============================================
// UNITY ATLAS - International Relations Database
// Realistic Geopolitical Relationship Data
// ============================================

const RELATIONSHIP_TYPES = {
    ALLIES: 'allies',
    STRATEGIC: 'strategic',
    NEUTRAL: 'neutral',
    COMPLEX: 'complex',
    CONFLICT: 'conflict'
};

const RELATIONSHIP_COLORS = {
    allies: '#2ECC71',
    strategic: '#3498DB',
    neutral: '#F1C40F',
    complex: '#E67E22',
    conflict: '#E74C3C'
};

// Parameter definitions with icons
const PARAMETERS = [
    { id: 'trade', name: 'Trade Relations', icon: 'fa-handshake' },
    { id: 'military', name: 'Military Cooperation', icon: 'fa-shield-alt' },
    { id: 'diplomatic', name: 'Diplomatic Ties', icon: 'fa-landmark' },
    { id: 'border', name: 'Border Status', icon: 'fa-border-all' },
    { id: 'historical', name: 'Historical Conflicts', icon: 'fa-history' },
    { id: 'economic', name: 'Economic Agreements', icon: 'fa-chart-line' },
    { id: 'cultural', name: 'Cultural Exchange', icon: 'fa-theater-masks' },
    { id: 'visa', name: 'Visa Policies', icon: 'fa-passport' },
    { id: 'strategic', name: 'Strategic Importance', icon: 'fa-chess' },
    { id: 'intelligence', name: 'Intelligence Sharing', icon: 'fa-user-secret' },
    { id: 'energy', name: 'Energy Dependency', icon: 'fa-bolt' },
    { id: 'technology', name: 'Technology Partnerships', icon: 'fa-microchip' },
    { id: 'defense', name: 'Defense Agreements', icon: 'fa-fighter-jet' },
    { id: 'political', name: 'Political Alignment', icon: 'fa-balance-scale' },
    { id: 'organization', name: 'Global Organization Cooperation', icon: 'fa-globe' },
    { id: 'conflictRisk', name: 'Conflict Risk Level', icon: 'fa-exclamation-triangle' }
];

// Generate realistic relationship data based on geopolitical reality
function generateRelationshipData() {
    const relationships = {};
    
    // Define major alliance networks
    const NATO_MEMBERS = ['US', 'GB', 'FR', 'DE', 'IT', 'CA', 'ES', 'PL', 'NL', 'BE', 'PT', 'GR', 'TR', 'DK', 'NO', 'CZ', 'HU', 'RO', 'BG', 'SK', 'SI', 'HR', 'AL', 'MK', 'ME', 'LT', 'LV', 'EE', 'IS', 'LU'];
    const EU_MEMBERS = ['DE', 'FR', 'IT', 'ES', 'PL', 'RO', 'NL', 'BE', 'GR', 'CZ', 'PT', 'HU', 'SE', 'AT', 'BG', 'DK', 'FI', 'SK', 'IE', 'HR', 'LT', 'SI', 'LV', 'EE', 'CY', 'LU', 'MT'];
    const BRICS = ['BR', 'RU', 'IN', 'CN', 'ZA', 'EG', 'ET', 'IR', 'AE', 'SA'];
    const ASEAN = ['ID', 'MY', 'PH', 'SG', 'TH', 'BN', 'VN', 'LA', 'MM', 'KH'];
    const ARAB_LEAGUE = ['SA', 'AE', 'EG', 'IQ', 'JO', 'KW', 'LB', 'LY', 'MA', 'OM', 'QA', 'SD', 'SY', 'TN', 'YE', 'DZ', 'BH', 'KM', 'DJ', 'MR', 'PS', 'SO'];
    const AFRICAN_UNION = COUNTRIES_DATABASE.countries.filter(c => c.region === 'africa').map(c => c.code);
    const FIVE_EYES = ['US', 'GB', 'CA', 'AU', 'NZ'];
    const SCO = ['CN', 'RU', 'IN', 'PK', 'KZ', 'KG', 'TJ', 'UZ'];
    const GCC = ['SA', 'AE', 'KW', 'QA', 'BH', 'OM'];
    
    // Generate relationships for each country
    COUNTRIES_DATABASE.countries.forEach(country => {
        relationships[country.code] = {
            country: country.name,
            code: country.code,
            flag: country.flag,
            region: country.region,
            relations: []
        };
        
        // Generate relations with other countries
        COUNTRIES_DATABASE.countries.forEach(otherCountry => {
            if (country.code === otherCountry.code) return;
            
            const relation = generateRelation(country, otherCountry, {
                NATO_MEMBERS, EU_MEMBERS, BRICS, ASEAN, ARAB_LEAGUE, 
                AFRICAN_UNION, FIVE_EYES, SCO, GCC
            });
            
            if (relation) {
                relationships[country.code].relations.push(relation);
            }
        });
    });
    
    return relationships;
}

function generateRelation(country1, country2, alliances) {
    const c1 = country1.code;
    const c2 = country2.code;
    
    // Determine relationship type based on alliances and geopolitics
    let type = RELATIONSHIP_TYPES.NEUTRAL;
    let strength = 5;
    let ring = 3; // 1=closest allies, 5=conflict
    
    // Check alliance memberships
    const bothNATO = alliances.NATO_MEMBERS.includes(c1) && alliances.NATO_MEMBERS.includes(c2);
    const bothEU = alliances.EU_MEMBERS.includes(c1) && alliances.EU_MEMBERS.includes(c2);
    const bothBRICS = alliances.BRICS.includes(c1) && alliances.BRICS.includes(c2);
    const bothASEAN = alliances.ASEAN.includes(c1) && alliances.ASEAN.includes(c2);
    const bothArab = alliances.ARAB_LEAGUE.includes(c1) && alliances.ARAB_LEAGUE.includes(c2);
    const bothAU = alliances.AFRICAN_UNION.includes(c1) && alliances.AFRICAN_UNION.includes(c2);
    const bothFiveEyes = alliances.FIVE_EYES.includes(c1) && alliances.FIVE_EYES.includes(c2);
    const bothSCO = alliances.SCO.includes(c1) && alliances.SCO.includes(c2);
    const bothGCC = alliances.GCC.includes(c1) && alliances.GCC.includes(c2);
    const sameRegion = country1.region === country2.region;
    
    // Five Eyes - Closest intelligence allies
    if (bothFiveEyes) {
        type = RELATIONSHIP_TYPES.ALLIES;
        strength = 10;
        ring = 1;
    }
    // NATO allies
    else if (bothNATO) {
        type = RELATIONSHIP_TYPES.ALLIES;
        strength = 9;
        ring = 1;
    }
    // EU members
    else if (bothEU) {
        type = RELATIONSHIP_TYPES.ALLIES;
        strength = 9;
        ring = 1;
    }
    // BRICS members
    else if (bothBRICS) {
        type = RELATIONSHIP_TYPES.STRATEGIC;
        strength = 8;
        ring = 2;
    }
    // ASEAN members
    else if (bothASEAN) {
        type = RELATIONSHIP_TYPES.ALLIES;
        strength = 8;
        ring = 1;
    }
    // GCC members
    else if (bothGCC) {
        type = RELATIONSHIP_TYPES.ALLIES;
        strength = 9;
        ring = 1;
    }
    // Arab League
    else if (bothArab) {
        type = RELATIONSHIP_TYPES.STRATEGIC;
        strength = 7;
        ring = 2;
    }
    // African Union
    else if (bothAU) {
        type = RELATIONSHIP_TYPES.STRATEGIC;
        strength = 6;
        ring = 2;
    }
    // SCO members
    else if (bothSCO) {
        type = RELATIONSHIP_TYPES.STRATEGIC;
        strength = 7;
        ring = 2;
    }
    
    // Define specific conflict relationships
    const CONFLICTS = {
        'IN': ['PK', 'CN'],
        'PK': ['IN', 'AF'],
        'IL': ['IR', 'SY', 'LB', 'PS'],
        'PS': ['IL'],
        'IR': ['IL', 'US', 'SA'],
        'US': ['IR', 'KP', 'RU', 'CN', 'CU', 'VE', 'SY'],
        'RU': ['UA', 'US', 'GB', 'PL', 'LT', 'LV', 'EE'],
        'UA': ['RU'],
        'CN': ['TW', 'IN', 'US', 'JP', 'PH', 'VN'],
        'TW': ['CN'],
        'KP': ['US', 'KR', 'JP'],
        'KR': ['KP'],
        'JP': ['KP', 'CN', 'RU'],
        'SA': ['IR', 'QA'],
        'QA': ['SA', 'AE', 'BH'],
        'GR': ['TR'],
        'TR': ['GR', 'CY', 'SY', 'AM'],
        'AM': ['AZ', 'TR'],
        'AZ': ['AM'],
        'RS': ['XK'],
        'XK': ['RS'],
        'MA': ['DZ'],
        'DZ': ['MA'],
        'ET': ['ER', 'EG'],
        'ER': ['ET'],
        'EG': ['ET']
    };
    
    // Define complex relationships
    const COMPLEX = {
        'US': ['CN', 'RU', 'SA', 'PK', 'TR', 'EG'],
        'CN': ['US', 'JP', 'IN', 'VN', 'PH', 'AU'],
        'RU': ['DE', 'FR', 'TR', 'JP'],
        'IN': ['CN', 'US'],
        'TR': ['US', 'RU', 'EU'],
        'SA': ['US', 'IR'],
        'PK': ['US', 'AF'],
        'EG': ['US', 'IL']
    };
    
    // Check for conflicts
    if (CONFLICTS[c1] && CONFLICTS[c1].includes(c2)) {
        type = RELATIONSHIP_TYPES.CONFLICT;
        strength = 2;
        ring = 5;
    }
    // Check for complex relationships
    else if (COMPLEX[c1] && COMPLEX[c1].includes(c2)) {
        type = RELATIONSHIP_TYPES.COMPLEX;
        strength = 5;
        ring = 4;
    }
    // Same region general
    else if (sameRegion && type === RELATIONSHIP_TYPES.NEUTRAL) {
        type = RELATIONSHIP_TYPES.STRATEGIC;
        strength = 6;
        ring = 2;
    }
    
    // Generate parameters
    const parameters = generateParameters(country1, country2, type, strength);
    
    return {
        country: country2.name,
        code: c2,
        flag: country2.flag,
        type: type,
        strength: strength,
        ring: ring,
        parameters: parameters
    };
}

function generateParameters(country1, country2, type, strength) {
    const baseScore = strength;
    
    // Generate realistic parameter values based on relationship type
    const params = {};
    
    const variations = {
        allies: { min: 7, max: 10 },
        strategic: { min: 5, max: 8 },
        neutral: { min: 4, max: 6 },
        complex: { min: 3, max: 7 },
        conflict: { min: 1, max: 4 }
    };
    
    const range = variations[type] || variations.neutral;
    
    // Trade Relations
    params.trade = {
        score: randomInRange(range.min, range.max),
        summary: generateTradeSummary(country1, country2, type),
        details: generateTradeDetails(country1, country2, type)
    };
    
    // Military Cooperation
    params.military = {
        score: type === 'conflict' ? randomInRange(1, 2) : randomInRange(range.min, range.max),
        summary: generateMilitarySummary(type),
        details: generateMilitaryDetails(country1, country2, type)
    };
    
    // Diplomatic Ties
    params.diplomatic = {
        score: randomInRange(range.min, range.max),
        summary: generateDiplomaticSummary(type),
        details: generateDiplomaticDetails(country1, country2, type)
    };
    
    // Border Status
    params.border = {
        score: type === 'conflict' ? randomInRange(1, 3) : randomInRange(5, 10),
        summary: generateBorderSummary(country1, country2, type),
        details: generateBorderDetails(country1, country2, type)
    };
    
    // Historical Conflicts
    params.historical = {
        score: type === 'conflict' ? randomInRange(1, 3) : randomInRange(5, 10),
        summary: generateHistoricalSummary(type),
        details: generateHistoricalDetails(country1, country2, type)
    };
    
    // Economic Agreements
    params.economic = {
        score: randomInRange(range.min, range.max),
        summary: generateEconomicSummary(type),
        details: generateEconomicDetails(country1, country2, type)
    };
    
    // Cultural Exchange
    params.cultural = {
        score: randomInRange(Math.max(range.min, 3), range.max),
        summary: generateCulturalSummary(type),
        details: generateCulturalDetails(country1, country2, type)
    };
    
    // Visa Policies
    params.visa = {
        score: type === 'allies' ? randomInRange(7, 10) : randomInRange(range.min, range.max),
        summary: generateVisaSummary(type),
        details: generateVisaDetails(country1, country2, type)
    };
    
    // Strategic Importance
    params.strategic = {
        score: randomInRange(range.min, range.max),
        summary: generateStrategicSummary(country1, country2, type),
        details: generateStrategicDetails(country1, country2, type)
    };
    
    // Intelligence Sharing
    params.intelligence = {
        score: type === 'allies' ? randomInRange(6, 10) : randomInRange(1, 5),
        summary: generateIntelligenceSummary(type),
        details: generateIntelligenceDetails(country1, country2, type)
    };
    
    // Energy Dependency
    params.energy = {
        score: randomInRange(3, 8),
        summary: generateEnergySummary(country1, country2),
        details: generateEnergyDetails(country1, country2, type)
    };
    
    // Technology Partnerships
    params.technology = {
        score: randomInRange(range.min, range.max),
        summary: generateTechnologySummary(type),
        details: generateTechnologyDetails(country1, country2, type)
    };
    
    // Defense Agreements
    params.defense = {
        score: type === 'allies' ? randomInRange(7, 10) : (type === 'conflict' ? randomInRange(1, 2) : randomInRange(3, 6)),
        summary: generateDefenseSummary(type),
        details: generateDefenseDetails(country1, country2, type)
    };
    
    // Political Alignment
    params.political = {
        score: randomInRange(range.min, range.max),
        summary: generatePoliticalSummary(type),
        details: generatePoliticalDetails(country1, country2, type)
    };
    
    // Global Organization Cooperation
    params.organization = {
        score: randomInRange(5, 9),
        summary: generateOrganizationSummary(country1, country2),
        details: generateOrganizationDetails(country1, country2, type)
    };
    
    // Conflict Risk Level
    params.conflictRisk = {
        score: type === 'conflict' ? randomInRange(7, 10) : (type === 'complex' ? randomInRange(4, 7) : randomInRange(1, 4)),
        summary: generateConflictRiskSummary(type),
        details: generateConflictRiskDetails(country1, country2, type)
    };
    
    return params;
}

// Helper functions for generating summaries and details
function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateTradeSummary(c1, c2, type) {
    const summaries = {
        allies: 'Strong bilateral trade with favorable terms',
        strategic: 'Significant trade relationship with growing volume',
        neutral: 'Standard trade relations under WTO framework',
        complex: 'Trade relations affected by political tensions',
        conflict: 'Limited or sanctioned trade activities'
    };
    return summaries[type] || summaries.neutral;
}

function generateTradeDetails(c1, c2, type) {
    return `Trade relationship between ${c1.name} and ${c2.name} reflects their ${type} diplomatic status. Both nations engage in commerce through established channels, with trade volumes corresponding to their overall bilateral relations.`;
}

function generateMilitarySummary(type) {
    const summaries = {
        allies: 'Active military cooperation and joint exercises',
        strategic: 'Selective military cooperation on shared interests',
        neutral: 'Limited formal military engagement',
        complex: 'Cautious military interactions with restrictions',
        conflict: 'No military cooperation; potential hostility'
    };
    return summaries[type] || summaries.neutral;
}

function generateMilitaryDetails(c1, c2, type) {
    return `Military relations reflect the broader ${type} nature of the bilateral relationship. Cooperation levels are determined by shared security concerns and alliance frameworks.`;
}

function generateDiplomaticSummary(type) {
    const summaries = {
        allies: 'Full diplomatic relations with embassy exchange',
        strategic: 'Active diplomatic engagement at all levels',
        neutral: 'Normal diplomatic relations maintained',
        complex: 'Diplomatic relations with periodic tensions',
        conflict: 'Strained or severed diplomatic ties'
    };
    return summaries[type] || summaries.neutral;
}

function generateDiplomaticDetails(c1, c2, type) {
    return `Diplomatic engagement between both nations operates through standard channels appropriate to their ${type} relationship status.`;
}

function generateBorderSummary(c1, c2, type) {
    return type === 'conflict' ? 'Disputed or militarized border' : 'Recognized international border';
}

function generateBorderDetails(c1, c2, type) {
    return `Border status between ${c1.name} and ${c2.name} follows international law and bilateral agreements.`;
}

function generateHistoricalSummary(type) {
    const summaries = {
        allies: 'Shared history of cooperation',
        strategic: 'Mixed historical interactions',
        neutral: 'Limited historical engagement',
        complex: 'History includes periods of tension',
        conflict: 'Significant historical conflicts'
    };
    return summaries[type] || summaries.neutral;
}

function generateHistoricalDetails(c1, c2, type) {
    return `The historical relationship provides context for current ${type} relations between both nations.`;
}

function generateEconomicSummary(type) {
    return type === 'allies' ? 'Multiple economic agreements in place' : 'Standard economic framework applies';
}

function generateEconomicDetails(c1, c2, type) {
    return `Economic relations are governed by bilateral agreements and international economic frameworks.`;
}

function generateCulturalSummary(type) {
    return 'Cultural exchange programs and people-to-people ties exist at varying levels';
}

function generateCulturalDetails(c1, c2, type) {
    return `Cultural diplomacy plays a role in maintaining and improving bilateral relations.`;
}

function generateVisaSummary(type) {
    const summaries = {
        allies: 'Visa-free or easy visa arrangements',
        strategic: 'Streamlined visa processes available',
        neutral: 'Standard visa requirements apply',
        complex: 'Restricted visa policies in place',
        conflict: 'Severe visa restrictions or travel bans'
    };
    return summaries[type] || summaries.neutral;
}

function generateVisaDetails(c1, c2, type) {
    return `Visa policies reflect the overall state of bilateral relations and security considerations.`;
}

function generateStrategicSummary(c1, c2, type) {
    return `Strategic significance based on geographic, economic, and political factors`;
}

function generateStrategicDetails(c1, c2, type) {
    return `Strategic importance is assessed based on regional influence, resources, and geopolitical positioning.`;
}

function generateIntelligenceSummary(type) {
    const summaries = {
        allies: 'Intelligence sharing agreements in place',
        strategic: 'Selective intelligence cooperation',
        neutral: 'Limited formal intelligence exchange',
        complex: 'Restricted intelligence interactions',
        conflict: 'No intelligence sharing; potential espionage concerns'
    };
    return summaries[type] || summaries.neutral;
}

function generateIntelligenceDetails(c1, c2, type) {
    return `Intelligence cooperation reflects trust levels and shared security priorities.`;
}

function generateEnergySummary(c1, c2) {
    return 'Energy trade and infrastructure cooperation varies by resource availability';
}

function generateEnergyDetails(c1, c2, type) {
    return `Energy relations are influenced by resource endowments and infrastructure connectivity.`;
}

function generateTechnologySummary(type) {
    return type === 'allies' ? 'Technology sharing and joint research programs' : 'Standard technology trade relations';
}

function generateTechnologyDetails(c1, c2, type) {
    return `Technology cooperation ranges from open collaboration to restricted exchange based on relationship status.`;
}

function generateDefenseSummary(type) {
    const summaries = {
        allies: 'Formal defense agreements and mutual security',
        strategic: 'Defense cooperation on specific issues',
        neutral: 'No formal defense arrangements',
        complex: 'Limited defense engagement',
        conflict: 'Opposing defense postures'
    };
    return summaries[type] || summaries.neutral;
}

function generateDefenseDetails(c1, c2, type) {
    return `Defense relationships are shaped by alliance memberships and bilateral security agreements.`;
}

function generatePoliticalSummary(type) {
    const summaries = {
        allies: 'Strong political alignment on major issues',
        strategic: 'Alignment on key regional issues',
        neutral: 'Independent political positions',
        complex: 'Divergent views on significant issues',
        conflict: 'Opposing political positions'
    };
    return summaries[type] || summaries.neutral;
}

function generatePoliticalDetails(c1, c2, type) {
    return `Political alignment is reflected in voting patterns at international forums and bilateral statements.`;
}

function generateOrganizationSummary(c1, c2) {
    return 'Both nations participate in various international organizations';
}

function generateOrganizationDetails(c1, c2, type) {
    return `Shared memberships in international organizations provide forums for cooperation and dialogue.`;
}

function generateConflictRiskSummary(type) {
    const summaries = {
        allies: 'Very low conflict risk',
        strategic: 'Low conflict risk',
        neutral: 'Minimal conflict concerns',
        complex: 'Moderate conflict potential',
        conflict: 'High conflict risk or active tensions'
    };
    return summaries[type] || summaries.neutral;
}

function generateConflictRiskDetails(c1, c2, type) {
    return `Conflict risk assessment considers historical patterns, current disputes, and structural factors.`;
}

// Generate the complete relationships database
const RELATIONSHIPS_DATABASE = generateRelationshipData();

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        RELATIONSHIPS_DATABASE, 
        RELATIONSHIP_TYPES, 
        RELATIONSHIP_COLORS,
        PARAMETERS 
    };
}
