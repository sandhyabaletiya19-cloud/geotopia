// geotopia/encyclopedia/strategic-locations/locations.js

const strategicLocations = {
    straits: [
        {
            id: "malacca",
            name: "Strait of Malacca",
            coordinates: [2.5, 101.5],
            importance: 95, // out of 100
            type: "strait",
            region: "Southeast Asia",
            countries: ["Malaysia", "Indonesia", "Singapore"],
            criticalFor: {
                "China": {
                    importance: 98,
                    reason: "80% of oil imports pass through here. A blockade would cripple the economy within weeks.",
                    strategic: "The 'Malacca Dilemma' - China's greatest geographic vulnerability"
                },
                "Japan": {
                    importance: 95,
                    reason: "90% of energy imports transit this chokepoint",
                    strategic: "Energy security is national security"
                },
                "South Korea": {
                    importance: 92,
                    reason: "Critical for both energy imports and export routes to Europe/Middle East",
                    strategic: "Economic lifeline for export-dependent economy"
                },
                "India": {
                    importance: 75,
                    reason: "Strategic naval presence ensures regional influence",
                    strategic: "Part of 'String of Pearls' counter-strategy"
                },
                "USA": {
                    importance: 88,
                    reason: "Freedom of navigation; critical for Asian allies' security",
                    strategic: "Naval dominance ensures Indo-Pacific strategic balance"
                },
                "Singapore": {
                    importance: 100,
                    reason: "Entire economy built on being the gateway to this strait",
                    strategic: "Without Malacca, Singapore loses its primary purpose"
                }
            },
            stats: {
                dailyShips: 300,
                annualTrade: "$3.4 trillion USD",
                oilTransit: "16 million barrels/day",
                narrowestPoint: "2.8 km",
                length: "800 km",
                depth: "25 meters (navigable)"
            },
            threats: [
                "Piracy (reduced 90% since 2004 peak)",
                "Territorial disputes in South China Sea spillover",
                "Environmental - one major oil spill could close strait",
                "Potential Chinese naval blockade in conflict scenario"
            ],
            alternatives: [
                "Sunda Strait (adds 3 days)",
                "Lombok Strait (adds 4 days)",
                "Proposed Kra Canal (Thailand) - not built",
                "China's Belt & Road land routes (partial solution)"
            ],
            historicalEvents: [
                {
                    year: 1511,
                    event: "Portuguese capture Malacca, control spice trade"
                },
                {
                    year: 2004,
                    event: "Peak piracy year - 38 attacks"
                },
                {
                    year: 2008,
                    event: "China announces 'Malacca Dilemma' as strategic priority"
                }
            ],
            mapLink: "atlas.html?focus=malacca&zoom=8",
            detailPage: "locations/malacca-strait.html",
            images: {
                satellite: "assets/images/malacca-satellite.jpg",
                shipping: "assets/images/malacca-traffic.jpg",
                chart: "assets/images/malacca-trade-flow.png"
            }
        },
        {
            id: "hormuz",
            name: "Strait of Hormuz",
            coordinates: [26.5667, 56.2500],
            importance: 98,
            type: "strait",
            region: "Middle East",
            countries: ["Iran", "Oman", "UAE"],
            criticalFor: {
                "World": {
                    importance: 95,
                    reason: "21% of global petroleum passes through here",
                    strategic: "Closure would spike oil prices globally within hours"
                },
                "Iran": {
                    importance: 100,
                    reason: "Only major maritime export route; ultimate leverage point",
                    strategic: "Threat to close strait is Iran's 'nuclear option' in conflicts"
                },
                "Saudi Arabia": {
                    importance: 90,
                    reason: "Primary oil export route despite East-West pipeline",
                    strategic: "Economic survival depends on open strait"
                },
                "USA": {
                    importance: 92,
                    reason: "Protecting allies & global energy markets",
                    strategic: "Permanent naval presence (5th Fleet) stationed in Bahrain"
                },
                "China": {
                    importance: 88,
                    reason: "40% of oil imports come through Hormuz",
                    strategic: "Cannot project naval power here - relies on US keeping it open"
                },
                "India": {
                    importance: 85,
                    reason: "Major oil supplier; 1.5M Indian workers in Gulf states",
                    strategic: "Navy conducts regular 'presence missions'"
                },
                "EU": {
                    importance: 80,
                    reason: "Significant oil/gas imports, especially for Southern Europe",
                    strategic: "Supports US naval presence through diplomacy"
                }
            },
            stats: {
                dailyShips: 25,
                annualTrade: "$1.2 trillion USD (energy)",
                oilTransit: "21 million barrels/day",
                narrowestPoint: "39 km (21 nautical miles)",
                depth: "Several hundred meters",
                controlledBy: "Iran (northern shore), Oman & UAE (southern)"
            },
            threats: [
                "Iranian military exercises & closure threats",
                "Naval mines in conflict scenario",
                "Anti-ship missiles from Iranian coast",
                "Proxy attacks by Iran-backed groups",
                "US-Iran military escalation"
            ],
            alternatives: [
                "Limited: Saudi East-West pipeline (5M barrels/day capacity)",
                "UAE's Abu Dhabi pipeline (partial)",
                "No viable full alternative exists"
            ],
            historicalEvents: [
                {
                    year: 1988,
                    event: "Tanker War - US Navy vs Iran (Operation Praying Mantis)"
                },
                {
                    year: 2019,
                    event: "Tanker attacks - US blames Iran"
                },
                {
                    year: 2024,
                    event: "Houthi attacks increase regional tensions"
                }
            ],
            mapLink: "atlas.html?focus=hormuz&zoom=8",
            detailPage: "locations/hormuz-strait.html",
            images: {
                satellite: "assets/images/hormuz-satellite.jpg",
                military: "assets/images/hormuz-naval.jpg",
                chart: "assets/images/hormuz-oil-flow.png"
            }
        },
        {
            id: "bosporus",
            name: "Bosporus Strait",
            coordinates: [41.1167, 29.0667],
            importance: 85,
            type: "strait",
            region: "Europe/Asia",
            countries: ["Turkey"],
            criticalFor: {
                "Turkey": {
                    importance: 100,
                    reason: "Istanbul's existence; complete control of Black Sea access",
                    strategic: "Single most important geographic asset - leverage over Russia & NATO"
                },
                "Russia": {
                    importance: 95,
                    reason: "Only warm-water access to Mediterranean & global oceans",
                    strategic: "Without Bosporus, Black Sea Fleet is trapped"
                },
                "Ukraine": {
                    importance: 90,
                    reason: "All grain exports must pass through (when Odesa is functional)",
                    strategic: "Economic survival during war depends on open strait"
                },
                "NATO": {
                    importance: 80,
                    reason: "Controls Russian naval movements; Turkey is member",
                    strategic: "Turkey can close to Russian warships under Montreux Convention"
                },
                "Romania/Bulgaria": {
                    importance: 75,
                    reason: "Only maritime access to global markets",
                    strategic: "Economic dependency on Turkish goodwill"
                }
            },
            stats: {
                dailyShips: 135,
                annualTrade: "N/A (mixed cargo)",
                oilTransit: "3 million barrels/day",
                narrowestPoint: "700 meters",
                length: "31 km",
                depth: "36-124 meters"
            },
            threats: [
                "Accidental ship collisions (700m width, 2-3 knot current)",
                "Earthquake risk - Istanbul sits on fault line",
                "Turkey closing strait under Montreux Convention",
                "Environmental - oil spill would devastate Istanbul"
            ],
            alternatives: [
                "None - only connection between Black Sea & Mediterranean",
                "Russian attempts to build land routes (via Crimea, Syria)"
            ],
            historicalEvents: [
                {
                    year: 1936,
                    event: "Montreux Convention gives Turkey control; limits warships"
                },
                {
                    year: 2022,
                    event: "Turkey closes to Russian warships during Ukraine invasion"
                }
            ],
            mapLink: "atlas.html?focus=bosporus&zoom=10",
            detailPage: "locations/bosporus-strait.html"
        },
        {
            id: "gibraltar",
            name: "Strait of Gibraltar",
            coordinates: [35.9667, -5.6000],
            importance: 80,
            type: "strait",
            region: "Europe/Africa",
            countries: ["Spain", "Morocco", "UK (Gibraltar)"],
            criticalFor: {
                "Spain": {
                    importance: 85,
                    reason: "Controls southern maritime border; Gibraltar dispute",
                    strategic: "National pride issue; wants Gibraltar back from UK"
                },
                "UK": {
                    importance: 75,
                    reason: "Historic naval base; Brexit complicates access",
                    strategic: "Symbol of imperial past; military listening post"
                },
                "Morocco": {
                    importance: 70,
                    reason: "Controls African side; migration route to Europe",
                    strategic: "Leverage in EU negotiations on migration/trade"
                },
                "EU": {
                    importance: 65,
                    reason: "Mediterranean access for Atlantic trade",
                    strategic: "Monitors migration & security threats from Africa"
                },
                "World": {
                    importance: 60,
                    reason: "Historic route, but Suez Canal is more critical now",
                    strategic: "Backup if Suez closes; NATO monitors Russian subs"
                }
            },
            stats: {
                dailyShips: 300,
                annualTrade: "~$500 billion USD",
                narrowestPoint: "13 km",
                depth: "300-900 meters"
            },
            mapLink: "atlas.html?focus=gibraltar&zoom=9",
            detailPage: "locations/gibraltar-strait.html"
        }
    ],
    
    canals: [
        {
            id: "suez",
            name: "Suez Canal",
            coordinates: [30.5, 32.3],
            importance: 92,
            type: "canal",
            region: "Middle East/Africa",
            countries: ["Egypt"],
            criticalFor: {
                "Egypt": {
                    importance: 100,
                    reason: "$9.4B annual revenue - 2% of GDP; national pride",
                    strategic: "Economic lifeline & geopolitical leverage over Europe/Asia trade"
                },
                "EU": {
                    importance: 90,
                    reason: "12% of global trade; 30% of container traffic to Europe",
                    strategic: "Closure adds 10 days via Cape of Good Hope - massive costs"
                },
                "China": {
                    importance: 88,
                    reason: "Critical for Belt & Road maritime routes to Europe",
                    strategic: "Has invested in surrounding infrastructure; strategic dependency"
                },
                "Saudi Arabia/Gulf": {
                    importance: 85,
                    reason: "Oil/gas to Europe; reverse flow for Asian goods",
                    strategic: "Complements Hormuz for global energy distribution"
                },
                "World": {
                    importance: 87,
                    reason: "12-15% of global trade passes through",
                    strategic: "Ever Given blockage (2021) showed fragility of global supply chains"
                }
            },
            stats: {
                dailyShips: 50,
                annualRevenue: "$9.4 billion USD (Egypt)",
                length: "193 km",
                transitTime: "12-16 hours",
                maxShipSize: "20.1m draft, 77.5m beam"
            },
            threats: [
                "Ship accidents (Ever Given 2021 - 6 day closure)",
                "Regional conflict spillover",
                "Houthi/terrorist attacks",
                "Climate change - sea level rise affects operations"
            ],
            alternatives: [
                "Cape of Good Hope (adds 9-12 days, 6000+ km)",
                "Northern Sea Route (Arctic) - seasonal, underdeveloped"
            ],
            historicalEvents: [
                {
                    year: 1956,
                    event: "Suez Crisis - Egypt nationalizes canal"
                },
                {
                    year: 2021,
                    event: "Ever Given runs aground - $10B/day in trade blocked"
                }
            ],
            mapLink: "atlas.html?focus=suez&zoom=8",
            detailPage: "locations/suez-canal.html"
        },
        {
            id: "panama",
            name: "Panama Canal",
            coordinates: [9.0, -79.5],
            importance: 88,
            type: "canal",
            region: "Central America",
            countries: ["Panama"],
            criticalFor: {
                "USA": {
                    importance: 95,
                    reason: "Built by US; 72% of traffic involves US; critical for naval mobility",
                    strategic: "Allows rapid movement of warships between Atlantic & Pacific"
                },
                "China": {
                    importance: 80,
                    reason: "Major user; has invested heavily in surrounding ports",
                    strategic: "Part of Latin America influence campaign"
                },
                "Panama": {
                    importance: 100,
                    reason: "10% of GDP from canal revenues; national identity",
                    strategic: "Sovereignty symbol since 1999 takeover from US"
                },
                "East Asia": {
                    importance: 75,
                    reason: "Shortcut to US East Coast & Europe",
                    strategic: "Trade efficiency; alternatives much longer"
                }
            },
            stats: {
                dailyShips: 40,
                annualRevenue: "$3.3 billion USD",
                length: "82 km",
                transitTime: "8-10 hours",
                maxShipSize: "Neopanamax - 366m long, 49m beam"
            },
            threats: [
                "Water scarcity - droughts reduce capacity (2023-24 crisis)",
                "Climate change impacts freshwater availability",
                "Chinese infrastructure competition in region"
            ],
            alternatives: [
                "Cape Horn (adds 12-20 days)",
                "Nicaragua Canal (proposed, not built)"
            ],
            mapLink: "atlas.html?focus=panama&zoom=8",
            detailPage: "locations/panama-canal.html"
        }
    ],
    
    passes: [
        {
            id: "khyber",
            name: "Khyber Pass",
            coordinates: [34.0667, 71.0667],
            importance: 70,
            type: "mountain-pass",
            region: "South Asia",
            countries: ["Pakistan", "Afghanistan"],
            criticalFor: {
                "Pakistan": {
                    importance: 85,
                    reason: "Historic invasion route; trade with Afghanistan & Central Asia",
                    strategic: "Controls Taliban/militant movements; tribal area sovereignty issues"
                },
                "Afghanistan": {
                    importance: 90,
                    reason: "Primary access to Pakistan's port in Karachi (landlocked)",
                    strategic: "Economic lifeline; historical invasion route works both ways"
                },
                "USA": {
                    importance: 75,
                    reason: "Critical supply route during Afghanistan War (2001-2021)",
                    strategic: "Taliban attacks on convoys were constant strategic problem"
                },
                "India": {
                    importance: 60,
                    reason: "Historical - ancient invasion route into Indian subcontinent",
                    strategic: "Symbol of vulnerability; why India-Pakistan tensions run deep"
                }
            },
            stats: {
                elevation: "1,070 meters",
                length: "53 km",
                width: "3-15 meters (narrowest point)"
            },
            threats: [
                "Militant/Taliban activity",
                "Pakistan-Afghanistan border tensions",
                "Landslides & harsh winters"
            ],
            historicalEvents: [
                {
                    year: "326 BC",
                    event: "Alexander the Great uses pass to invade India"
                },
                {
                    year: 1842,
                    event: "British-Afghan War - retreat through pass kills 16,000"
                },
                {
                    year: 2001,
                    event: "US-NATO supply route during Afghanistan invasion"
                }
            ],
            mapLink: "atlas.html?focus=khyber&zoom=9",
            detailPage: "locations/khyber-pass.html"
        }
    ]
};
