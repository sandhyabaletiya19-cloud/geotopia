// ============================================
// UNITY ATLAS - DATA (SIMPLIFIED)
// ============================================

var PARAMETERS = [
    { id: 'trade', name: 'Trade Relations', icon: 'fa-handshake', category: 'Economic' },
    { id: 'military', name: 'Military Cooperation', icon: 'fa-shield-halved', category: 'Security' },
    { id: 'diplomatic', name: 'Diplomatic Relations', icon: 'fa-landmark', category: 'Political' },
    { id: 'border', name: 'Border Relations', icon: 'fa-map', category: 'Territorial' },
    { id: 'historical', name: 'Historical Ties', icon: 'fa-book', category: 'Cultural' },
    { id: 'economic', name: 'Economic Integration', icon: 'fa-chart-line', category: 'Economic' },
    { id: 'cultural', name: 'Cultural Exchange', icon: 'fa-users', category: 'Cultural' },
    { id: 'visa', name: 'Visa & Mobility', icon: 'fa-passport', category: 'Social' },
    { id: 'strategic', name: 'Strategic Alignment', icon: 'fa-chess', category: 'Geopolitical' },
    { id: 'intelligence', name: 'Intelligence Sharing', icon: 'fa-user-secret', category: 'Security' },
    { id: 'energy', name: 'Energy Relations', icon: 'fa-bolt', category: 'Economic' },
    { id: 'technology', name: 'Technology Partnership', icon: 'fa-microchip', category: 'Economic' },
    { id: 'defense', name: 'Defense Agreements', icon: 'fa-fighter-jet', category: 'Security' },
    { id: 'political', name: 'Political Alignment', icon: 'fa-balance-scale', category: 'Political' },
    { id: 'organizations', name: 'Shared Organizations', icon: 'fa-sitemap', category: 'Multilateral' },
    { id: 'conflict', name: 'Conflict Risk', icon: 'fa-triangle-exclamation', category: 'Security' }
];

var COUNTRIES = [
    // ASIA
    { code: "AF", name: "Afghanistan", flag: "🇦🇫", region: "asia", capital: "Kabul" },
    { code: "AM", name: "Armenia", flag: "🇦🇲", region: "asia", capital: "Yerevan" },
    { code: "AZ", name: "Azerbaijan", flag: "🇦🇿", region: "asia", capital: "Baku" },
    { code: "BD", name: "Bangladesh", flag: "🇧🇩", region: "asia", capital: "Dhaka" },
    { code: "CN", name: "China", flag: "🇨🇳", region: "asia", capital: "Beijing" },
    { code: "IN", name: "India", flag: "🇮🇳", region: "asia", capital: "New Delhi" },
    { code: "ID", name: "Indonesia", flag: "🇮🇩", region: "asia", capital: "Jakarta" },
    { code: "IR", name: "Iran", flag: "🇮🇷", region: "asia", capital: "Tehran" },
    { code: "IQ", name: "Iraq", flag: "🇮🇶", region: "asia", capital: "Baghdad" },
    { code: "IL", name: "Israel", flag: "🇮🇱", region: "asia", capital: "Jerusalem" },
    { code: "JP", name: "Japan", flag: "🇯🇵", region: "asia", capital: "Tokyo" },
    { code: "KZ", name: "Kazakhstan", flag: "🇰🇿", region: "asia", capital: "Astana" },
    { code: "KR", name: "South Korea", flag: "🇰🇷", region: "asia", capital: "Seoul" },
    { code: "KP", name: "North Korea", flag: "🇰🇵", region: "asia", capital: "Pyongyang" },
    { code: "MY", name: "Malaysia", flag: "🇲🇾", region: "asia", capital: "Kuala Lumpur" },
    { code: "PK", name: "Pakistan", flag: "🇵🇰", region: "asia", capital: "Islamabad" },
    { code: "PH", name: "Philippines", flag: "🇵🇭", region: "asia", capital: "Manila" },
    { code: "SA", name: "Saudi Arabia", flag: "🇸🇦", region: "asia", capital: "Riyadh" },
    { code: "SG", name: "Singapore", flag: "🇸🇬", region: "asia", capital: "Singapore" },
    { code: "TH", name: "Thailand", flag: "🇹🇭", region: "asia", capital: "Bangkok" },
    { code: "TR", name: "Turkey", flag: "🇹🇷", region: "asia", capital: "Ankara" },
    { code: "AE", name: "UAE", flag: "🇦🇪", region: "asia", capital: "Abu Dhabi" },
    { code: "VN", name: "Vietnam", flag: "🇻🇳", region: "asia", capital: "Hanoi" },
    
    // EUROPE
    { code: "AT", name: "Austria", flag: "🇦🇹", region: "europe", capital: "Vienna" },
    { code: "BE", name: "Belgium", flag: "🇧🇪", region: "europe", capital: "Brussels" },
    { code: "BG", name: "Bulgaria", flag: "🇧🇬", region: "europe", capital: "Sofia" },
    { code: "HR", name: "Croatia", flag: "🇭🇷", region: "europe", capital: "Zagreb" },
    { code: "CZ", name: "Czech Republic", flag: "🇨🇿", region: "europe", capital: "Prague" },
    { code: "DK", name: "Denmark", flag: "🇩🇰", region: "europe", capital: "Copenhagen" },
    { code: "FI", name: "Finland", flag: "🇫🇮", region: "europe", capital: "Helsinki" },
    { code: "FR", name: "France", flag: "🇫🇷", region: "europe", capital: "Paris" },
    { code: "DE", name: "Germany", flag: "🇩🇪", region: "europe", capital: "Berlin" },
    { code: "GR", name: "Greece", flag: "🇬🇷", region: "europe", capital: "Athens" },
    { code: "HU", name: "Hungary", flag: "🇭🇺", region: "europe", capital: "Budapest" },
    { code: "IE", name: "Ireland", flag: "🇮🇪", region: "europe", capital: "Dublin" },
    { code: "IT", name: "Italy", flag: "🇮🇹", region: "europe", capital: "Rome" },
    { code: "NL", name: "Netherlands", flag: "🇳🇱", region: "europe", capital: "Amsterdam" },
    { code: "NO", name: "Norway", flag: "🇳🇴", region: "europe", capital: "Oslo" },
    { code: "PL", name: "Poland", flag: "🇵🇱", region: "europe", capital: "Warsaw" },
    { code: "PT", name: "Portugal", flag: "🇵🇹", region: "europe", capital: "Lisbon" },
    { code: "RO", name: "Romania", flag: "🇷🇴", region: "europe", capital: "Bucharest" },
    { code: "RU", name: "Russia", flag: "🇷🇺", region: "europe", capital: "Moscow" },
    { code: "ES", name: "Spain", flag: "🇪🇸", region: "europe", capital: "Madrid" },
    { code: "SE", name: "Sweden", flag: "🇸🇪", region: "europe", capital: "Stockholm" },
    { code: "CH", name: "Switzerland", flag: "🇨🇭", region: "europe", capital: "Bern" },
    { code: "UA", name: "Ukraine", flag: "🇺🇦", region: "europe", capital: "Kyiv" },
    { code: "GB", name: "United Kingdom", flag: "🇬🇧", region: "europe", capital: "London" },
    
    // AFRICA
    { code: "DZ", name: "Algeria", flag: "🇩🇿", region: "africa", capital: "Algiers" },
    { code: "EG", name: "Egypt", flag: "🇪🇬", region: "africa", capital: "Cairo" },
    { code: "ET", name: "Ethiopia", flag: "🇪🇹", region: "africa", capital: "Addis Ababa" },
    { code: "GH", name: "Ghana", flag: "🇬🇭", region: "africa", capital: "Accra" },
    { code: "KE", name: "Kenya", flag: "🇰🇪", region: "africa", capital: "Nairobi" },
    { code: "MA", name: "Morocco", flag: "🇲🇦", region: "africa", capital: "Rabat" },
    { code: "NG", name: "Nigeria", flag: "🇳🇬", region: "africa", capital: "Abuja" },
    { code: "ZA", name: "South Africa", flag: "🇿🇦", region: "africa", capital: "Pretoria" },
    { code: "TZ", name: "Tanzania", flag: "🇹🇿", region: "africa", capital: "Dodoma" },
    { code: "TN", name: "Tunisia", flag: "🇹🇳", region: "africa", capital: "Tunis" },
    
    // AMERICAS
    { code: "AR", name: "Argentina", flag: "🇦🇷", region: "americas", capital: "Buenos Aires" },
    { code: "BR", name: "Brazil", flag: "🇧🇷", region: "americas", capital: "Brasília" },
    { code: "CA", name: "Canada", flag: "🇨🇦", region: "americas", capital: "Ottawa" },
    { code: "CL", name: "Chile", flag: "🇨🇱", region: "americas", capital: "Santiago" },
    { code: "CO", name: "Colombia", flag: "🇨🇴", region: "americas", capital: "Bogotá" },
    { code: "CU", name: "Cuba", flag: "🇨🇺", region: "americas", capital: "Havana" },
    { code: "MX", name: "Mexico", flag: "🇲🇽", region: "americas", capital: "Mexico City" },
    { code: "PE", name: "Peru", flag: "🇵🇪", region: "americas", capital: "Lima" },
    { code: "US", name: "United States", flag: "🇺🇸", region: "americas", capital: "Washington D.C." },
    { code: "VE", name: "Venezuela", flag: "🇻🇪", region: "americas", capital: "Caracas" },
    
    // OCEANIA
    { code: "AU", name: "Australia", flag: "🇦🇺", region: "oceania", capital: "Canberra" },
    { code: "FJ", name: "Fiji", flag: "🇫🇯", region: "oceania", capital: "Suva" },
    { code: "NZ", name: "New Zealand", flag: "🇳🇿", region: "oceania", capital: "Wellington" },
    { code: "PG", name: "Papua New Guinea", flag: "🇵🇬", region: "oceania", capital: "Port Moresby" }
];

// Create map
var COUNTRY_MAP = {};
COUNTRIES.forEach(function(c) { COUNTRY_MAP[c.code] = c; });

// Alliances
var ALLIANCES = {
    NATO: ['US','GB','FR','DE','IT','CA','ES','PL','NL','BE','PT','GR','TR','DK','NO','CZ','HU','RO','BG','HR','FI','SE'],
    EU: ['DE','FR','IT','ES','PL','RO','NL','BE','GR','CZ','PT','HU','SE','AT','BG','DK','FI','HR','IE'],
    FIVEEYES: ['US','GB','CA','AU','NZ'],
    BRICS: ['BR','RU','IN','CN','ZA','EG','IR','AE','SA'],
    ASEAN: ['ID','MY','PH','SG','TH','VN']
};

// Generate relations
function generateRelations(centerCode) {
    var center = COUNTRY_MAP[centerCode];
    if (!center) return [];
    
    var relations = [];
    
    COUNTRIES.forEach(function(c) {
        if (c.code === centerCode) return;
        
        var type = 'neutral';
        var strength = 5;
        var reasons = [];
        
        // Check alliances
        var shared = 0;
        for (var key in ALLIANCES) {
            if (ALLIANCES[key].indexOf(centerCode) !== -1 && ALLIANCES[key].indexOf(c.code) !== -1) {
                shared++;
                reasons.push(key);
            }
        }
        
        if (shared >= 2) {
            type = 'allies';
            strength = 9;
        } else if (shared === 1) {
            type = 'allies';
            strength = 8;
        } else if (center.region === c.region) {
            type = 'strategic';
            strength = 6;
            reasons.push('Regional');
        }
        
        // Generate params
        var params = {};
        PARAMETERS.forEach(function(p) {
            var score = strength + Math.floor(Math.random() * 3) - 1;
            score = Math.max(1, Math.min(10, score));
            
            if (p.id === 'conflict') {
                score = type === 'conflict' ? 8 : (type === 'allies' ? 2 : 5);
            }
            
            params[p.id] = {
                score: score,
                summary: getSummary(p.id, score),
                bullets: getBullets(p.id, score)
            };
        });
        
        relations.push({
            code: c.code,
            name: c.name,
            flag: c.flag,
            region: c.region,
            capital: c.capital,
            type: type,
            strength: strength,
            reasons: reasons,
            params: params
        });
    });
    
    // Sort
    var priority = { allies: 5, strategic: 4, neutral: 3, complex: 2, conflict: 1 };
    relations.sort(function(a, b) {
        return (priority[b.type] || 0) - (priority[a.type] || 0);
    });
    
    return relations;
}

function getSummary(id, score) {
    if (score >= 7) return 'Strong cooperation and engagement';
    if (score >= 4) return 'Moderate level of cooperation';
    return 'Limited cooperation or tensions';
}

function getBullets(id, score) {
    var bullets = [];
    if (score >= 7) {
        bullets.push('<strong>Status:</strong> Excellent bilateral cooperation');
        bullets.push('<strong>Agreements:</strong> Multiple active treaties and agreements');
        bullets.push('<strong>Engagement:</strong> Regular high-level dialogue');
        bullets.push('<strong>Outlook:</strong> Strong foundation for future growth');
    } else if (score >= 4) {
        bullets.push('<strong>Status:</strong> Moderate bilateral engagement');
        bullets.push('<strong>Agreements:</strong> Some cooperation frameworks');
        bullets.push('<strong>Challenges:</strong> Room for improvement');
    } else {
        bullets.push('<strong>Status:</strong> Limited or strained relations');
        bullets.push('<strong>Issues:</strong> Significant challenges exist');
        bullets.push('<strong>Outlook:</strong> Requires diplomatic effort');
    }
    return bullets;
}

console.log('📊 Data loaded:', COUNTRIES.length, 'countries');
