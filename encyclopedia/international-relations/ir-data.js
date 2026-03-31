/* =====================================================
   GEOTOPIA INTERNATIONAL RELATIONS - DATA MODULE
   ===================================================== */

const IR_DATA = {
    // Base path for data files
    dataPath: './assets/data/countries/',
    
    // All 197 countries with metadata
    countries: {
        // =================== ASIA ===================
        "AFG": { name: "Afghanistan", flag: "🇦🇫", region: "asia", code2: "af" },
        "ARM": { name: "Armenia", flag: "🇦🇲", region: "asia", code2: "am" },
        "AZE": { name: "Azerbaijan", flag: "🇦🇿", region: "asia", code2: "az" },
        "BHR": { name: "Bahrain", flag: "🇧🇭", region: "middle-east", code2: "bh" },
        "BGD": { name: "Bangladesh", flag: "🇧🇩", region: "asia", code2: "bd" },
        "BTN": { name: "Bhutan", flag: "🇧🇹", region: "asia", code2: "bt" },
        "BRN": { name: "Brunei", flag: "🇧🇳", region: "asia", code2: "bn" },
        "KHM": { name: "Cambodia", flag: "🇰🇭", region: "asia", code2: "kh" },
        "CHN": { name: "China", flag: "🇨🇳", region: "asia", code2: "cn" },
        "CYP": { name: "Cyprus", flag: "🇨🇾", region: "europe", code2: "cy" },
        "GEO": { name: "Georgia", flag: "🇬🇪", region: "asia", code2: "ge" },
        "IND": { name: "India", flag: "🇮🇳", region: "asia", code2: "in" },
        "IDN": { name: "Indonesia", flag: "🇮🇩", region: "asia", code2: "id" },
        "IRN": { name: "Iran", flag: "🇮🇷", region: "middle-east", code2: "ir" },
        "IRQ": { name: "Iraq", flag: "🇮🇶", region: "middle-east", code2: "iq" },
        "ISR": { name: "Israel", flag: "🇮🇱", region: "middle-east", code2: "il" },
        "JPN": { name: "Japan", flag: "🇯🇵", region: "asia", code2: "jp" },
        "JOR": { name: "Jordan", flag: "🇯🇴", region: "middle-east", code2: "jo" },
        "KAZ": { name: "Kazakhstan", flag: "🇰🇿", region: "asia", code2: "kz" },
        "KWT": { name: "Kuwait", flag: "🇰🇼", region: "middle-east", code2: "kw" },
        "KGZ": { name: "Kyrgyzstan", flag: "🇰🇬", region: "asia", code2: "kg" },
        "LAO": { name: "Laos", flag: "🇱🇦", region: "asia", code2: "la" },
        "LBN": { name: "Lebanon", flag: "🇱🇧", region: "middle-east", code2: "lb" },
        "MYS": { name: "Malaysia", flag: "🇲🇾", region: "asia", code2: "my" },
        "MDV": { name: "Maldives", flag: "🇲🇻", region: "asia", code2: "mv" },
        "MNG": { name: "Mongolia", flag: "🇲🇳", region: "asia", code2: "mn" },
        "MMR": { name: "Myanmar", flag: "🇲🇲", region: "asia", code2: "mm" },
        "NPL": { name: "Nepal", flag: "🇳🇵", region: "asia", code2: "np" },
        "PRK": { name: "North Korea", flag: "🇰🇵", region: "asia", code2: "kp" },
        "OMN": { name: "Oman", flag: "🇴🇲", region: "middle-east", code2: "om" },
        "PAK": { name: "Pakistan", flag: "🇵🇰", region: "asia", code2: "pk" },
        "PSE": { name: "Palestine", flag: "🇵🇸", region: "middle-east", code2: "ps" },
        "PHL": { name: "Philippines", flag: "🇵🇭", region: "asia", code2: "ph" },
        "QAT": { name: "Qatar", flag: "🇶🇦", region: "middle-east", code2: "qa" },
        "SAU": { name: "Saudi Arabia", flag: "🇸🇦", region: "middle-east", code2: "sa" },
        "SGP": { name: "Singapore", flag: "🇸🇬", region: "asia", code2: "sg" },
        "KOR": { name: "South Korea", flag: "🇰🇷", region: "asia", code2: "kr" },
        "LKA": { name: "Sri Lanka", flag: "🇱🇰", region: "asia", code2: "lk" },
        "SYR": { name: "Syria", flag: "🇸🇾", region: "middle-east", code2: "sy" },
        "TWN": { name: "Taiwan", flag: "🇹🇼", region: "asia", code2: "tw" },
        "TJK": { name: "Tajikistan", flag: "🇹🇯", region: "asia", code2: "tj" },
        "THA": { name: "Thailand", flag: "🇹🇭", region: "asia", code2: "th" },
        "TLS": { name: "Timor-Leste", flag: "🇹🇱", region: "asia", code2: "tl" },
        "TUR": { name: "Turkey", flag: "🇹🇷", region: "middle-east", code2: "tr" },
        "TKM": { name: "Turkmenistan", flag: "🇹🇲", region: "asia", code2: "tm" },
        "ARE": { name: "UAE", flag: "🇦🇪", region: "middle-east", code2: "ae" },
        "UZB": { name: "Uzbekistan", flag: "🇺🇿", region: "asia", code2: "uz" },
        "VNM": { name: "Vietnam", flag: "🇻🇳", region: "asia", code2: "vn" },
        "YEM": { name: "Yemen", flag: "🇾🇪", region: "middle-east", code2: "ye" },

        // =================== EUROPE ===================
        "ALB": { name: "Albania", flag: "🇦🇱", region: "europe", code2: "al" },
        "AND": { name: "Andorra", flag: "🇦🇩", region: "europe", code2: "ad" },
        "AUT": { name: "Austria", flag: "🇦🇹", region: "europe", code2: "at" },
        "BLR": { name: "Belarus", flag: "🇧🇾", region: "europe", code2: "by" },
        "BEL": { name: "Belgium", flag: "🇧🇪", region: "europe", code2: "be" },
        "BIH": { name: "Bosnia and Herzegovina", flag: "🇧🇦", region: "europe", code2: "ba" },
        "BGR": { name: "Bulgaria", flag: "🇧🇬", region: "europe", code2: "bg" },
        "HRV": { name: "Croatia", flag: "🇭🇷", region: "europe", code2: "hr" },
        "CZE": { name: "Czech Republic", flag: "🇨🇿", region: "europe", code2: "cz" },
        "DNK": { name: "Denmark", flag: "🇩🇰", region: "europe", code2: "dk" },
        "EST": { name: "Estonia", flag: "🇪🇪", region: "europe", code2: "ee" },
        "FIN": { name: "Finland", flag: "🇫🇮", region: "europe", code2: "fi" },
        "FRA": { name: "France", flag: "🇫🇷", region: "europe", code2: "fr" },
        "DEU": { name: "Germany", flag: "🇩🇪", region: "europe", code2: "de" },
        "GRC": { name: "Greece", flag: "🇬🇷", region: "europe", code2: "gr" },
        "HUN": { name: "Hungary", flag: "🇭🇺", region: "europe", code2: "hu" },
        "ISL": { name: "Iceland", flag: "🇮🇸", region: "europe", code2: "is" },
        "IRL": { name: "Ireland", flag: "🇮🇪", region: "europe", code2: "ie" },
        "ITA": { name: "Italy", flag: "🇮🇹", region: "europe", code2: "it" },
        "XKX": { name: "Kosovo", flag: "🇽🇰", region: "europe", code2: "xk" },
        "LVA": { name: "Latvia", flag: "🇱🇻", region: "europe", code2: "lv" },
        "LIE": { name: "Liechtenstein", flag: "🇱🇮", region: "europe", code2: "li" },
        "LTU": { name: "Lithuania", flag: "🇱🇹", region: "europe", code2: "lt" },
        "LUX": { name: "Luxembourg", flag: "🇱🇺", region: "europe", code2: "lu" },
        "MLT": { name: "Malta", flag: "🇲🇹", region: "europe", code2: "mt" },
        "MDA": { name: "Moldova", flag: "🇲🇩", region: "europe", code2: "md" },
        "MCO": { name: "Monaco", flag: "🇲🇨", region: "europe", code2: "mc" },
        "MNE": { name: "Montenegro", flag: "🇲🇪", region: "europe", code2: "me" },
        "NLD": { name: "Netherlands", flag: "🇳🇱", region: "europe", code2: "nl" },
        "MKD": { name: "North Macedonia", flag: "🇲🇰", region: "europe", code2: "mk" },
        "NOR": { name: "Norway", flag: "🇳🇴", region: "europe", code2: "no" },
        "POL": { name: "Poland", flag: "🇵🇱", region: "europe", code2: "pl" },
        "PRT": { name: "Portugal", flag: "🇵🇹", region: "europe", code2: "pt" },
        "ROU": { name: "Romania", flag: "🇷🇴", region: "europe", code2: "ro" },
        "RUS": { name: "Russia", flag: "🇷🇺", region: "europe", code2: "ru" },
        "SMR": { name: "San Marino", flag: "🇸🇲", region: "europe", code2: "sm" },
        "SRB": { name: "Serbia", flag: "🇷🇸", region: "europe", code2: "rs" },
        "SVK": { name: "Slovakia", flag: "🇸🇰", region: "europe", code2: "sk" },
        "SVN": { name: "Slovenia", flag: "🇸🇮", region: "europe", code2: "si" },
        "ESP": { name: "Spain", flag: "🇪🇸", region: "europe", code2: "es" },
        "SWE": { name: "Sweden", flag: "🇸🇪", region: "europe", code2: "se" },
        "CHE": { name: "Switzerland", flag: "🇨🇭", region: "europe", code2: "ch" },
        "UKR": { name: "Ukraine", flag: "🇺🇦", region: "europe", code2: "ua" },
        "GBR": { name: "United Kingdom", flag: "🇬🇧", region: "europe", code2: "gb" },
        "VAT": { name: "Vatican City", flag: "🇻🇦", region: "europe", code2: "va" },

        // =================== AFRICA ===================
        "DZA": { name: "Algeria", flag: "🇩🇿", region: "africa", code2: "dz" },
        "AGO": { name: "Angola", flag: "🇦🇴", region: "africa", code2: "ao" },
        "BEN": { name: "Benin", flag: "🇧🇯", region: "africa", code2: "bj" },
        "BWA": { name: "Botswana", flag: "🇧🇼", region: "africa", code2: "bw" },
        "BFA": { name: "Burkina Faso", flag: "🇧🇫", region: "africa", code2: "bf" },
        "BDI": { name: "Burundi", flag: "🇧🇮", region: "africa", code2: "bi" },
        "CPV": { name: "Cabo Verde", flag: "🇨🇻", region: "africa", code2: "cv" },
        "CMR": { name: "Cameroon", flag: "🇨🇲", region: "africa", code2: "cm" },
        "CAF": { name: "Central African Republic", flag: "🇨🇫", region: "africa", code2: "cf" },
        "TCD": { name: "Chad", flag: "🇹🇩", region: "africa", code2: "td" },
        "COM": { name: "Comoros", flag: "🇰🇲", region: "africa", code2: "km" },
        "COG": { name: "Congo", flag: "🇨🇬", region: "africa", code2: "cg" },
        "COD": { name: "Congo (DRC)", flag: "🇨🇩", region: "africa", code2: "cd" },
        "CIV": { name: "Côte d'Ivoire", flag: "🇨🇮", region: "africa", code2: "ci" },
        "DJI": { name: "Djibouti", flag: "🇩🇯", region: "africa", code2: "dj" },
        "EGY": { name: "Egypt", flag: "🇪🇬", region: "africa", code2: "eg" },
        "GNQ": { name: "Equatorial Guinea", flag: "🇬🇶", region: "africa", code2: "gq" },
        "ERI": { name: "Eritrea", flag: "🇪🇷", region: "africa", code2: "er" },
        "SWZ": { name: "Eswatini", flag: "🇸🇿", region: "africa", code2: "sz" },
        "ETH": { name: "Ethiopia", flag: "🇪🇹", region: "africa", code2: "et" },
        "GAB": { name: "Gabon", flag: "🇬🇦", region: "africa", code2: "ga" },
        "GMB": { name: "Gambia", flag: "🇬🇲", region: "africa", code2: "gm" },
        "GHA": { name: "Ghana", flag: "🇬🇭", region: "africa", code2: "gh" },
        "GIN": { name: "Guinea", flag: "🇬🇳", region: "africa", code2: "gn" },
        "GNB": { name: "Guinea-Bissau", flag: "🇬🇼", region: "africa", code2: "gw" },
        "KEN": { name: "Kenya", flag: "🇰🇪", region: "africa", code2: "ke" },
        "LSO": { name: "Lesotho", flag: "🇱🇸", region: "africa", code2: "ls" },
        "LBR": { name: "Liberia", flag: "🇱🇷", region: "africa", code2: "lr" },
        "LBY": { name: "Libya", flag: "🇱🇾", region: "africa", code2: "ly" },
        "MDG": { name: "Madagascar", flag: "🇲🇬", region: "africa", code2: "mg" },
        "MWI": { name: "Malawi", flag: "🇲🇼", region: "africa", code2: "mw" },
        "MLI": { name: "Mali", flag: "🇲🇱", region: "africa", code2: "ml" },
        "MRT": { name: "Mauritania", flag: "🇲🇷", region: "africa", code2: "mr" },
        "MUS": { name: "Mauritius", flag: "🇲🇺", region: "africa", code2: "mu" },
        "MAR": { name: "Morocco", flag: "🇲🇦", region: "africa", code2: "ma" },
        "MOZ": { name: "Mozambique", flag: "🇲🇿", region: "africa", code2: "mz" },
        "NAM": { name: "Namibia", flag: "🇳🇦", region: "africa", code2: "na" },
        "NER": { name: "Niger", flag: "🇳🇪", region: "africa", code2: "ne" },
        "NGA": { name: "Nigeria", flag: "🇳🇬", region: "africa", code2: "ng" },
        "RWA": { name: "Rwanda", flag: "🇷🇼", region: "africa", code2: "rw" },
        "STP": { name: "Sao Tome and Principe", flag: "🇸🇹", region: "africa", code2: "st" },
        "SEN": { name: "Senegal", flag: "🇸🇳", region: "africa", code2: "sn" },
        "SYC": { name: "Seychelles", flag: "🇸🇨", region: "africa", code2: "sc" },
        "SLE": { name: "Sierra Leone", flag: "🇸🇱", region: "africa", code2: "sl" },
        "SOM": { name: "Somalia", flag: "🇸🇴", region: "africa", code2: "so" },
        "ZAF": { name: "South Africa", flag: "🇿🇦", region: "africa", code2: "za" },
        "SSD": { name: "South Sudan", flag: "🇸🇸", region: "africa", code2: "ss" },
        "SDN": { name: "Sudan", flag: "🇸🇩", region: "africa", code2: "sd" },
        "TZA": { name: "Tanzania", flag: "🇹🇿", region: "africa", code2: "tz" },
        "TGO": { name: "Togo", flag: "🇹🇬", region: "africa", code2: "tg" },
        "TUN": { name: "Tunisia", flag: "🇹🇳", region: "africa", code2: "tn" },
        "UGA": { name: "Uganda", flag: "🇺🇬", region: "africa", code2: "ug" },
        "ZMB": { name: "Zambia", flag: "🇿🇲", region: "africa", code2: "zm" },
        "ZWE": { name: "Zimbabwe", flag: "🇿🇼", region: "africa", code2: "zw" },

        // =================== AMERICAS ===================
        "ATG": { name: "Antigua and Barbuda", flag: "🇦🇬", region: "americas", code2: "ag" },
        "ARG": { name: "Argentina", flag: "🇦🇷", region: "americas", code2: "ar" },
        "BHS": { name: "Bahamas", flag: "🇧🇸", region: "americas", code2: "bs" },
        "BRB": { name: "Barbados", flag: "🇧🇧", region: "americas", code2: "bb" },
        "BLZ": { name: "Belize", flag: "🇧🇿", region: "americas", code2: "bz" },
        "BOL": { name: "Bolivia", flag: "🇧🇴", region: "americas", code2: "bo" },
        "BRA": { name: "Brazil", flag: "🇧🇷", region: "americas", code2: "br" },
        "CAN": { name: "Canada", flag: "🇨🇦", region: "americas", code2: "ca" },
        "CHL": { name: "Chile", flag: "🇨🇱", region: "americas", code2: "cl" },
        "COL": { name: "Colombia", flag: "🇨🇴", region: "americas", code2: "co" },
        "CRI": { name: "Costa Rica", flag: "🇨🇷", region: "americas", code2: "cr" },
        "CUB": { name: "Cuba", flag: "🇨🇺", region: "americas", code2: "cu" },
        "DMA": { name: "Dominica", flag: "🇩🇲", region: "americas", code2: "dm" },
        "DOM": { name: "Dominican Republic", flag: "🇩🇴", region: "americas", code2: "do" },
        "ECU": { name: "Ecuador", flag: "🇪🇨", region: "americas", code2: "ec" },
        "SLV": { name: "El Salvador", flag: "🇸🇻", region: "americas", code2: "sv" },
        "GRD": { name: "Grenada", flag: "🇬🇩", region: "americas", code2: "gd" },
        "GTM": { name: "Guatemala", flag: "🇬🇹", region: "americas", code2: "gt" },
        "GUY": { name: "Guyana", flag: "🇬🇾", region: "americas", code2: "gy" },
        "HTI": { name: "Haiti", flag: "🇭🇹", region: "americas", code2: "ht" },
        "HND": { name: "Honduras", flag: "🇭🇳", region: "americas", code2: "hn" },
        "JAM": { name: "Jamaica", flag: "🇯🇲", region: "americas", code2: "jm" },
        "MEX": { name: "Mexico", flag: "🇲🇽", region: "americas", code2: "mx" },
        "NIC": { name: "Nicaragua", flag: "🇳🇮", region: "americas", code2: "ni" },
        "PAN": { name: "Panama", flag: "🇵🇦", region: "americas", code2: "pa" },
        "PRY": { name: "Paraguay", flag: "🇵🇾", region: "americas", code2: "py" },
        "PER": { name: "Peru", flag: "🇵🇪", region: "americas", code2: "pe" },
        "KNA": { name: "Saint Kitts and Nevis", flag: "🇰🇳", region: "americas", code2: "kn" },
        "LCA": { name: "Saint Lucia", flag: "🇱🇨", region: "americas", code2: "lc" },
        "VCT": { name: "Saint Vincent", flag: "🇻🇨", region: "americas", code2: "vc" },
        "SUR": { name: "Suriname", flag: "🇸🇷", region: "americas", code2: "sr" },
        "TTO": { name: "Trinidad and Tobago", flag: "🇹🇹", region: "americas", code2: "tt" },
        "USA": { name: "United States", flag: "🇺🇸", region: "americas", code2: "us" },
        "URY": { name: "Uruguay", flag: "🇺🇾", region: "americas", code2: "uy" },
        "VEN": { name: "Venezuela", flag: "🇻🇪", region: "americas", code2: "ve" },

        // =================== OCEANIA ===================
        "AUS": { name: "Australia", flag: "🇦🇺", region: "oceania", code2: "au" },
        "FJI": { name: "Fiji", flag: "🇫🇯", region: "oceania", code2: "fj" },
        "KIR": { name: "Kiribati", flag: "🇰🇮", region: "oceania", code2: "ki" },
        "MHL": { name: "Marshall Islands", flag: "🇲🇭", region: "oceania", code2: "mh" },
        "FSM": { name: "Micronesia", flag: "🇫🇲", region: "oceania", code2: "fm" },
        "NRU": { name: "Nauru", flag: "🇳🇷", region: "oceania", code2: "nr" },
        "NZL": { name: "New Zealand", flag: "🇳🇿", region: "oceania", code2: "nz" },
        "PLW": { name: "Palau", flag: "🇵🇼", region: "oceania", code2: "pw" },
        "PNG": { name: "Papua New Guinea", flag: "🇵🇬", region: "oceania", code2: "pg" },
        "WSM": { name: "Samoa", flag: "🇼🇸", region: "oceania", code2: "ws" },
        "SLB": { name: "Solomon Islands", flag: "🇸🇧", region: "oceania", code2: "sb" },
        "TON": { name: "Tonga", flag: "🇹🇴", region: "oceania", code2: "to" },
        "TUV": { name: "Tuvalu", flag: "🇹🇻", region: "oceania", code2: "tv" },
        "VUT": { name: "Vanuatu", flag: "🇻🇺", region: "oceania", code2: "vu" }
    },

    // Featured relationships for homepage
    featuredRelations: [
        { country1: "USA", country2: "CHN", type: "rival", label: "Great Power Competition" },
        { country1: "USA", country2: "RUS", type: "rival", label: "New Cold War" },
        { country1: "IND", country2: "PAK", type: "rival", label: "Historic Rivalry" },
        { country1: "IND", country2: "CHN", type: "rival", label: "Border Dispute" },
        { country1: "USA", country2: "GBR", type: "ally", label: "Special Relationship" },
        { country1: "JPN", country2: "KOR", type: "partner", label: "Complex History" },
        { country1: "FRA", country2: "DEU", type: "ally", label: "EU Engine" },
        { country1: "SAU", country2: "IRN", type: "rival", label: "Regional Rivalry" },
        { country1: "ISR", country2: "PSE", type: "rival", label: "Enduring Conflict" },
        { country1: "AUS", country2: "CHN", type: "partner", label: "Trade Tensions" },
        { country1: "RUS", country2: "UKR", type: "rival", label: "Active Conflict" },
        { country1: "BRA", country2: "ARG", type: "partner", label: "South American Giants" }
    ],

    // Major countries for quick access
    majorCountries: [
        "USA", "CHN", "RUS", "IND", "GBR", "FRA", "DEU", "JPN", 
        "BRA", "AUS", "CAN", "KOR", "SAU", "TUR", "IDN", "MEX",
        "ITA", "ESP", "ZAF", "NGA", "EGY", "PAK", "ISR", "IRN"
    ],

    // Relationship strength database (sample - would be loaded from JSON files)
    relationshipStrength: {
        "USA-CHN": 35,
        "USA-RUS": 25,
        "USA-GBR": 95,
        "USA-CAN": 92,
        "USA-JPN": 88,
        "USA-IND": 75,
        "USA-AUS": 90,
        "IND-PAK": 10,
        "IND-CHN": 30,
        "IND-RUS": 78,
        "IND-USA": 75,
        "IND-JPN": 80,
        "IND-BGD": 68,
        "IND-NPL": 65,
        "IND-BTN": 92,
        "CHN-RUS": 72,
        "CHN-PAK": 85,
        "CHN-JPN": 40,
        "CHN-KOR": 55,
        "FRA-DEU": 88,
        "RUS-UKR": 5,
        "ISR-PSE": 8,
        "SAU-IRN": 12,
        "JPN-KOR": 55,
        "AUS-NZL": 95,
        "BRA-ARG": 75
    },

    // Get flag URL from country code
    getFlagUrl: function(code3) {
        const country = this.countries[code3];
        if (country) {
            return `https://flagcdn.com/w320/${country.code2}.png`;
        }
        return '';
    },

    // Get country by code
    getCountry: function(code3) {
        return this.countries[code3] || null;
    },

    // Get countries by region
    getCountriesByRegion: function(region) {
        const result = [];
        for (const [code, data] of Object.entries(this.countries)) {
            if (region === 'all' || data.region === region) {
                result.push({ code, ...data });
            }
        }
        return result.sort((a, b) => a.name.localeCompare(b.name));
    },

    // Get relationship strength
    getRelationshipStrength: function(code1, code2) {
        const key1 = `${code1}-${code2}`;
        const key2 = `${code2}-${code1}`;
        return this.relationshipStrength[key1] || this.relationshipStrength[key2] || 50;
    },

    // Search countries
    searchCountries: function(query) {
        const lowerQuery = query.toLowerCase();
        const results = [];
        for (const [code, data] of Object.entries(this.countries)) {
            if (data.name.toLowerCase().includes(lowerQuery) || code.toLowerCase().includes(lowerQuery)) {
                results.push({ code, ...data });
            }
        }
        return results;
    },

    // Load relationship data from JSON
    loadRelationshipData: async function(code1, code2) {
        try {
            // Try both directions
            const urls = [
                `${this.dataPath}${code1}/relations/${code2}.json`,
                `${this.dataPath}${code2}/relations/${code1}.json`
            ];
            
            for (const url of urls) {
                try {
                    const response = await fetch(url);
                    if (response.ok) {
                        return await response.json();
                    }
                } catch (e) {
                    continue;
                }
            }
            
            // Return default structure if no data found
            return this.getDefaultRelationship(code1, code2);
        } catch (error) {
            console.error('Error loading relationship data:', error);
            return this.getDefaultRelationship(code1, code2);
        }
    },

    // Default relationship structure
    getDefaultRelationship: function(code1, code2) {
        const c1 = this.getCountry(code1);
        const c2 = this.getCountry(code2);
        
        return {
            country1: {
                code: code1,
                name: c1?.name || code1,
                flag: c1?.flag || ''
            },
            country2: {
                code: code2,
                name: c2?.name || code2,
                flag: c2?.flag || ''
            },
            strength: this.getRelationshipStrength(code1, code2),
            type: "standard",
            status: "Data being compiled",
            lastUpdated: new Date().toISOString().split('T')[0],
            sections: {
                overview: "Detailed analysis coming soon.",
                history: "Historical background being researched.",
                trade: "Trade data being compiled.",
                defense: "Defense cooperation information pending.",
                diplomatic: "Diplomatic relations being documented."
            }
        };
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = IR_DATA;
}
