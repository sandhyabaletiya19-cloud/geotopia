/* =====================================================
   ARGENTINA - Complete Country Data
   ===================================================== */

export default {
    // ==================== BASIC INFO ====================
    code: "ARG",
    iso2: "AR",
    name: "Argentina",
    officialName: "Argentine Republic",
    flag: "🇦🇷",
    region: "americas",
    subregion: "South America",
    capital: "Buenos Aires",
    population: 45808747,
    area: 2780400,
    gdp: 641.1,
    currency: "ARS",
    languages: ["Spanish"],
    colors: ["#75AADB", "#FFFFFF", "#FCBF49"],
    coordinates: { lat: -38.4161, lng: -63.6167 },
    relations: ["BRA", "CHL", "URY", "PRY", "BOL", "USA", "CHN", "ESP", "ITA", "DEU", "GBR", "FRA", "MEX", "COL", "VEN", "PER", "ECU", "RUS", "JPN", "KOR", "IND", "ISR", "IRN", "ZAF", "ARE", "SAU", "AUS", "CAN", "NLD", "CHE"],
    organizations: ["UN", "G20", "MERCOSUR", "OAS", "CELAC", "UNASUR", "WTO", "LAIA"],

    // ==================== GEOGRAPHY ====================
    geography: {
        borders: ["CHL", "BOL", "PRY", "BRA", "URY"],
        coastline: 4989,
        highestPoint: { name: "Aconcagua", elevation: 6962 },
        lowestPoint: { name: "Laguna del Carbón", elevation: -105 },
        climate: "Mostly temperate; arid in southeast; subantarctic in southwest",
        terrain: "Rich plains of the Pampas in northern half, flat to rolling plateau of Patagonia in south, rugged Andes along western border",
        naturalResources: ["Lead", "Zinc", "Tin", "Copper", "Iron ore", "Manganese", "Petroleum", "Uranium", "Lithium"],
        environmentalIssues: ["Environmental problems from deforestation", "Soil degradation", "Desertification", "Air pollution", "Water pollution"]
    },

    // ==================== DEMOGRAPHICS ====================
    demographics: {
        populationGrowth: 0.89,
        medianAge: 32.4,
        urbanization: 92.1,
        lifeExpectancy: 77.3,
        literacy: 99.0,
        ethnicGroups: {
            "European descent": 97.2,
            "Mestizo": 2.4,
            "Indigenous": 0.4
        },
        religions: {
            "Roman Catholic": 62.9,
            "Evangelical": 15.3,
            "No religion": 18.9,
            "Other": 2.9
        },
        majorCities: [
            { name: "Buenos Aires", population: 15369919 },
            { name: "Córdoba", population: 1535868 },
            { name: "Rosario", population: 1285073 },
            { name: "Mendoza", population: 1086633 },
            { name: "San Miguel de Tucumán", population: 868305 }
        ]
    },

    // ==================== ECONOMY ====================
    economy: {
        gdpPerCapita: 13998,
        gdpGrowth: -1.6,
        inflation: 211.4,
        unemployment: 6.2,
        sectors: {
            services: 53.8,
            industry: 24.1,
            agriculture: 6.6
        },
        majorIndustries: ["Food processing", "Motor vehicles", "Consumer durables", "Textiles", "Chemicals", "Petrochemicals", "Steel", "Metallurgy"],
        exports: {
            total: 88.4,
            partners: ["BRA", "CHN", "USA", "CHL", "IND"],
            commodities: ["Soybean products", "Petroleum", "Cereals", "Beef", "Motor vehicles"]
        },
        imports: {
            total: 73.3,
            partners: ["BRA", "CHN", "USA", "DEU", "PRY"],
            commodities: ["Machinery", "Motor vehicles", "Petroleum", "Natural gas", "Organic chemicals"]
        }
    },

    // ==================== GOVERNMENT ====================
    government: {
        type: "Federal presidential republic",
        headOfState: "President",
        headOfGovernment: "President",
        legislature: "Bicameral National Congress (Senado and Cámara de Diputados)",
        independence: "1816-07-09",
        nationalDay: "Revolution Day (May 25)",
        constitution: "1853 (amended multiple times)",
        legalSystem: "Civil law system based on West European legal systems",
        suffrage: "18-70 years of age; universal and compulsory"
    },

    // ==================== MILITARY ====================
    military: {
        branches: ["Argentine Army", "Argentine Navy", "Argentine Air Force"],
        personnel: 74200,
        reserves: 0,
        budget: 5.8,
        budgetPercent: 0.5
    },

    // ==================== CULTURE ====================
    culture: {
        nationalSymbols: {
            animal: "Rufous Hornero",
            bird: "Rufous Hornero",
            flower: "Ceibo",
            tree: "Ceibo",
            sport: "Pato (national), Football (most popular)"
        },
        anthem: "Himno Nacional Argentino",
        motto: "En unión y libertad (In Union and Freedom)",
        unescoSites: 11,
        cuisines: ["Asado", "Empanadas", "Milanesa", "Dulce de leche", "Mate"]
    },

    // ==================== INFRASTRUCTURE ====================
    infrastructure: {
        internetUsers: 39.1,
        internetPenetration: 87.2,
        mobileSubscriptions: 56.5,
        railways: 36917,
        roadways: 281290,
        airports: 916,
        ports: ["Buenos Aires", "Bahía Blanca", "Rosario", "La Plata", "Mar del Plata"]
    },

    // ==================== HISTORY ====================
    history: {
        timeline: [
            { year: "1516", event: "Spanish explorer Juan Díaz de Solís arrives" },
            { year: "1536", event: "Buenos Aires founded" },
            { year: "1810", event: "May Revolution begins independence movement" },
            { year: "1816", event: "Independence declared from Spain" },
            { year: "1853", event: "Constitution adopted" },
            { year: "1946", event: "Juan Perón elected president" },
            { year: "1976-1983", event: "Military dictatorship (Dirty War)" },
            { year: "1982", event: "Falklands/Malvinas War with UK" },
            { year: "1983", event: "Return to democracy" },
            { year: "2001", event: "Economic crisis and default" }
        ],
        notableFigures: ["José de San Martín", "Juan Perón", "Eva Perón", "Jorge Luis Borges", "Che Guevara", "Diego Maradona", "Lionel Messi"]
    },

    // ==================== EDUCATION ====================
    education: {
        literacyRate: 99.0,
        topUniversities: ["Universidad de Buenos Aires", "Universidad Nacional de Córdoba", "Universidad Nacional de La Plata", "Universidad Austral", "ITBA"],
        educationBudget: 5.0,
        schoolingYears: 17.4
    },

    // ==================== TOURISM ====================
    tourism: {
        visitors: 5.5,
        revenue: 5.2,
        topDestinations: ["Buenos Aires", "Iguazu Falls", "Patagonia", "Mendoza", "Bariloche", "Ushuaia", "Perito Moreno Glacier"],
        visaPolicy: "Visa-free for 90+ countries including EU, USA, most of Americas"
    },

    // ==================== BILATERAL RELATIONS ====================
    bilateralRelations: {

        // ========== BRAZIL ==========
        BRA: {
            "00_overview": {
                relationshipEmoji: "🤝",
                strengthScore: 80,
                status: "Strategic Partnership",
                summary: "Argentina-Brazil relations form the cornerstone of South American integration, anchored by MERCOSUR. Despite historical rivalry, the two nations have built a comprehensive partnership spanning trade, energy, nuclear cooperation, and regional diplomacy.",
                keyFacts: [
                    "Diplomatic relations: Continuous since independence",
                    "Trade volume: $26.5 billion (2023)",
                    "MERCOSUR founding partners (1991)",
                    "Joint nuclear cooperation since 1980",
                    "Largest trade partners for each other"
                ],
                lastUpdated: "2025-01-01",
                sources: ["MRE Argentina", "Itamaraty Brazil", "MERCOSUR"]
            },

            "01_historical_background": {
                timeline: [
                    { year: "1825", event: "Cisplatine War over Uruguay", impact: "Early rivalry established", sources: ["Historical records"] },
                    { year: "1865-1870", event: "Paraguayan War alliance", impact: "First major cooperation", sources: ["Archives"] },
                    { year: "1979", event: "Tripartite Itaipu Agreement", impact: "Resolution of hydroelectric dispute", sources: ["Treaty records"] },
                    { year: "1980", event: "Argentine-Brazilian Nuclear Cooperation Agreement", impact: "End of nuclear rivalry", sources: ["ABACC"] },
                    { year: "1985", event: "Iguazu Declaration", impact: "Economic integration begins", sources: ["MRE"] },
                    { year: "1991", event: "MERCOSUR Treaty of Asunción", impact: "Common market established", sources: ["MERCOSUR"] },
                    { year: "2023", event: "Lula-Milei political tensions", impact: "Temporary strain in relations", sources: ["News media"] }
                ],
                historicalContext: "Transformed from strategic rivals to integration partners",
                turningPoints: ["1980 Nuclear Agreement", "1991 MERCOSUR", "2023 Political divergence"],
                sources: ["MRE Argentina", "Itamaraty"]
            },

            "02_bilateral_ties": {
                diplomaticRelations: {
                    established: "1822",
                    currentStatus: "Strategic Partnership"
                },
                embassies: {
                    argentinaInBrazil: {
                        address: "SES 803 Lote 12, Brasília",
                        ambassador: "Current Ambassador",
                        established: "1822"
                    },
                    brazilInArgentina: {
                        address: "Cerrito 1350, Buenos Aires",
                        ambassador: "Current Ambassador",
                        established: "1822"
                    }
                },
                consulates: [
                    { country: "Argentina", locations: ["São Paulo", "Rio de Janeiro", "Porto Alegre", "Foz do Iguaçu"] },
                    { country: "Brazil", locations: ["Buenos Aires", "Mendoza", "Córdoba", "Paso de los Libres"] }
                ],
                sources: ["MRE Argentina", "Itamaraty Brazil"]
            },

            "03_agreements_treaties": {
                treaties: [
                    { name: "Treaty of Asunción (MERCOSUR)", year: 1991, status: "Active", significance: "Common market foundation" },
                    { name: "ABACC Agreement", year: 1991, status: "Active", significance: "Bilateral nuclear safeguards" },
                    { name: "Iguazu Declaration", year: 1985, status: "Active", significance: "Integration framework" }
                ],
                mous: [
                    { name: "Automotive Sector Agreement", year: 2019, areas: ["Trade", "Industry"] },
                    { name: "Energy Integration", year: 2023, areas: ["Natural gas", "Electricity"] }
                ],
                sources: ["MERCOSUR Secretariat", "MRE"]
            },

            "04_political_relations": {
                dialogueMechanisms: [
                    { name: "Presidential Summits", frequency: "As needed" },
                    { name: "MERCOSUR Summits", frequency: "Biannual" },
                    { name: "2+2 Mechanism", frequency: "Annual" }
                ],
                convergencePoints: ["Regional integration", "Nuclear non-proliferation", "Antarctica cooperation"],
                divergencePoints: ["MERCOSUR reform pace", "Venezuela policy", "Political ideology (2023-)"],
                sources: ["MRE", "Itamaraty"]
            },

            "05_economic_trade": {
                tradeVolume: { total: 26.5, year: "2023", trend: "Fluctuating" },
                exports: {
                    argentinaToBrazil: { value: 11.2, topProducts: ["Wheat", "Motor vehicles", "Petroleum", "Dairy"] },
                    brazilToArgentina: { value: 15.3, topProducts: ["Motor vehicles", "Iron ore", "Machinery", "Electronics"] }
                },
                tradeBalance: -4.1,
                fdi: {
                    brazilInArgentina: 12.5,
                    argentinaInBrazil: 3.2
                },
                tradeAgreements: ["MERCOSUR Common External Tariff", "Automotive Agreement"],
                sources: ["INDEC Argentina", "MDIC Brazil"]
            },

            "06_defense_security": {
                militaryComparison: {
                    argentina: { personnel: 74200, budget: 5.8, ranking: 40 },
                    brazil: { personnel: 366500, budget: 20.5, ranking: 10 }
                },
                jointExercises: ["ARAEX (Naval)", "CRUZEX (Air Force)", "BRAARG (Army)"],
                cooperationAreas: ["Antarctic logistics", "Peacekeeping training", "Cybersecurity"],
                nuclearCooperation: {
                    agency: "ABACC",
                    activities: ["Mutual inspections", "Safeguards verification", "Technology sharing"]
                },
                sources: ["Argentine Defense Ministry", "Brazilian Defense Ministry"]
            },

            "07_people_to_people": {
                diaspora: { argentinesInBrazil: 45000, braziliansInArgentina: 55000 },
                students: { argentinesInBrazil: 2500, braziliansInArgentina: 3800 },
                tourism: { argentinesToBrazil: 2800000, braziliansToArgentina: 1500000 },
                culturalTies: ["Football rivalries", "Shared tango/samba culture", "Wine/coffee exchanges"],
                sources: ["Tourism ministries", "Migration data"]
            },

            "08_connectivity": {
                airLinks: {
                    directFlights: true,
                    routes: [
                        { from: "Buenos Aires", to: "São Paulo", airlines: ["Aerolíneas", "LATAM", "Gol"] },
                        { from: "Buenos Aires", to: "Rio de Janeiro", airlines: ["Aerolíneas", "Gol"] }
                    ]
                },
                landLinks: [
                    { name: "Uruguaiana-Paso de los Libres", type: "Road/Rail bridge" },
                    { name: "Puerto Iguazú-Foz do Iguaçu", type: "International bridge" }
                ],
                energyLinks: [
                    { name: "Gas pipeline projects", status: "Under development" },
                    { name: "Electricity interconnection", status: "Limited" }
                ],
                sources: ["Infrastructure ministries"]
            },

            "09_multilateral_forums": {
                commonMemberships: [
                    { org: "MERCOSUR", type: "Trade bloc", role: "Founding members" },
                    { org: "G20", type: "Economic forum" },
                    { org: "CELAC", type: "Regional" },
                    { org: "OAS", type: "Regional" },
                    { org: "UN", type: "Global" }
                ],
                votingAlignment: { unGeneralAssembly: 85 },
                jointPositions: ["South Atlantic Zone of Peace", "Nuclear-free Latin America"],
                sources: ["UN Voting Records", "Regional bodies"]
            },

            "10_sectoral_cooperation": {
                energy: [
                    { area: "Natural gas integration", details: "Vaca Muerta to Brazil pipeline discussions" },
                    { area: "Nuclear energy", details: "ABACC joint safeguards" }
                ],
                science: [
                    { project: "SABIA-Mar satellite", status: "Joint development" },
                    { project: "Antarctic research", status: "Ongoing cooperation" }
                ],
                agriculture: [
                    { initiative: "Phytosanitary coordination", year: "Ongoing" }
                ],
                sources: ["Science ministries", "Energy ministries"]
            },

            "11_influence_third_parties": {
                majorInfluencers: [
                    { country: "USA", influence: "Both seek good US relations; Argentina more aligned under Milei" },
                    { country: "CHN", influence: "Major trade partner for both; competition for Chinese investment" }
                ],
                triangleDynamics: [
                    { triangle: "Argentina-Brazil-USA", dynamic: "Both compete for US attention" },
                    { triangle: "Argentina-Brazil-China", dynamic: "Both major commodity exporters to China" }
                ],
                sources: ["Think tanks", "Academic analysis"]
            },

            "12_areas_of_concern": {
                disputes: [
                    { issue: "MERCOSUR reform pace", status: "Ongoing disagreement" },
                    { issue: "Trade imbalances", status: "Managed through agreements" }
                ],
                frictionPoints: [
                    { issue: "Political ideology differences (2023-)", impact: "Temporary strain" },
                    { issue: "Currency coordination", impact: "Failed common currency attempts" }
                ],
                riskFactors: ["Economic crises affecting trade", "Political polarization", "External power competition"],
                sources: ["MERCOSUR reports", "News analysis"]
            },

            "13_future_outlook": {
                shortTerm: {
                    period: "1-2 years",
                    scenarios: ["Political tensions managed through MERCOSUR (70%)", "Cooperation maintained despite rhetoric (25%)"],
                    probability: "Continuation likely"
                },
                mediumTerm: {
                    period: "3-5 years",
                    scenarios: ["MERCOSUR modernization (50%)", "Bilateral relations normalized (40%)"],
                    probability: "Moderate improvement"
                },
                wildcards: ["Major political change in either country", "Global commodity shock", "MERCOSUR dissolution"],
                sources: ["Think tanks", "Economic forecasts"]
            },

            "14_imaginary_peace_scenario": {
                vision: "Full economic integration with harmonized policies and joint development",
                quantifiedBenefits: {
                    economic: ["Trade could reach $60B with deeper integration", "Joint manufacturing clusters"],
                    social: ["Free movement of workers", "Mutual recognition of degrees"],
                    environmental: ["Amazon-Pampas corridor protection", "Joint climate commitments"]
                },
                inspirationalQuote: "South America's future depends on Argentine-Brazilian unity",
                sources: ["Author analysis", "Integration studies"]
            },

            "15_external_interventions": {
                applicable: true,
                interventions: [
                    {
                        actor: "United States",
                        period: "1960s-1980s",
                        action: "Support for military governments in both countries",
                        actualOutcome: "Delayed integration; human rights violations",
                        source: "Declassified documents"
                    },
                    {
                        actor: "IMF",
                        period: "1990s-2000s",
                        action: "Structural adjustment programs",
                        actualOutcome: "Economic crises; social instability",
                        source: "IMF records"
                    }
                ],
                alternativeOutcomes: [
                    {
                        scenario: "Earlier integration without Cold War interference",
                        possibleOutcome: "Stronger regional bloc by 2000",
                        source: "Academic analysis"
                    }
                ],
                sources: ["Historical archives", "Academic research"]
            },

            visualizations: {
                timeline: { type: "d3-timeline", dataPath: "01_historical_background.timeline" },
                tradeFlow: { type: "sankey", dataPath: "05_economic_trade" },
                comparison: { type: "radar", dataPath: "06_defense_security.militaryComparison" }
            }
        },

        // ========== CHILE ==========
        CHL: {
            "00_overview": {
                relationshipEmoji: "🤝",
                strengthScore: 75,
                status: "Comprehensive Partnership",
                summary: "Argentina-Chile relations have transformed from near-war tensions to deep cooperation, with resolved border disputes, free trade, and integrated infrastructure.",
                keyFacts: [
                    "Shared border: 5,308 km (world's third longest)",
                    "Border disputes: All 24 resolved peacefully",
                    "Trade volume: $6.8 billion (2023)",
                    "Free Trade Agreement since 2019",
                    "Joint Antarctica claims management"
                ],
                lastUpdated: "2025-01-01",
                sources: ["MRE Argentina", "MINREL Chile"]
            },

            "01_historical_background": {
                timeline: [
                    { year: "1818-1822", event: "Mutual support in independence wars", impact: "Early alliance" },
                    { year: "1881", event: "Boundary Treaty signed", impact: "Andes border defined" },
                    { year: "1902", event: "Pactos de Mayo", impact: "Naval arms race ended" },
                    { year: "1978", event: "Beagle Channel crisis", impact: "Near-war; papal mediation requested" },
                    { year: "1984", event: "Treaty of Peace and Friendship", impact: "Beagle dispute resolved" },
                    { year: "1998", event: "Last border dispute (Laguna del Desierto)", impact: "ICJ resolution" },
                    { year: "2009", event: "Treaty of Maipú", impact: "Comprehensive integration" }
                ],
                historicalContext: "Model of peaceful dispute resolution",
                turningPoints: ["1984 Beagle Treaty", "1998 Final border settlement", "2009 Integration treaty"],
                sources: ["Treaty archives", "ICJ records"]
            },

            "02_bilateral_ties": {
                diplomaticRelations: {
                    established: "1822",
                    currentStatus: "Comprehensive Partnership"
                },
                embassies: {
                    argentinaInChile: {
                        address: "Miraflores 285, Santiago",
                        ambassador: "Current Ambassador",
                        established: "1822"
                    },
                    chileInArgentina: {
                        address: "San Martín 439, Buenos Aires",
                        ambassador: "Current Ambassador",
                        established: "1822"
                    }
                },
                consulates: [
                    { country: "Argentina", locations: ["Santiago", "Valparaíso", "Punta Arenas", "Antofagasta"] },
                    { country: "Chile", locations: ["Buenos Aires", "Mendoza", "Córdoba", "Ushuaia", "Río Gallegos"] }
                ],
                sources: ["MRE Argentina", "MINREL Chile"]
            },

            "03_agreements_treaties": {
                treaties: [
                    { name: "Treaty of Peace and Friendship", year: 1984, status: "Active", significance: "Beagle resolution" },
                    { name: "Treaty of Maipú", year: 2009, status: "Active", significance: "Integration framework" },
                    { name: "Free Trade Agreement", year: 2019, status: "Active", significance: "Zero tariffs" },
                    { name: "Mining Integration Treaty", year: 1997, status: "Active", significance: "Joint mining operations" }
                ],
                mous: [
                    { name: "Integrated Border Crossings", year: 2016, areas: ["Infrastructure", "Customs"] },
                    { name: "Energy Integration", year: 2021, areas: ["Electricity", "Gas"] }
                ],
                sources: ["Treaty registries"]
            },

            "04_political_relations": {
                dialogueMechanisms: [
                    { name: "Presidential meetings", frequency: "Regular" },
                    { name: "2+2 Format (Foreign + Defense)", frequency: "Annual" },
                    { name: "Binational Commission", frequency: "Annual" }
                ],
                convergencePoints: ["Free trade", "Antarctic cooperation", "Pacific access for Argentina"],
                divergencePoints: ["Trade disputes (occasional)", "Migration flows"],
                sources: ["MRE", "MINREL"]
            },

            "05_economic_trade": {
                tradeVolume: { total: 6.8, year: "2023", trend: "Stable" },
                exports: {
                    argentinaToChile: { value: 3.5, topProducts: ["Natural gas", "Soybean oil", "Vehicles", "Wheat"] },
                    chileToArgentina: { value: 3.3, topProducts: ["Copper", "Wine", "Fresh fruit", "Salmon"] }
                },
                tradeBalance: 0.2,
                fdi: {
                    chileInArgentina: 18.2,
                    argentinaInChile: 4.5
                },
                miningCooperation: [
                    { project: "Pascua Lama", status: "Suspended", value: "5B+" },
                    { project: "El Pachón", status: "Development", value: "3B+" }
                ],
                sources: ["INDEC Argentina", "Customs Chile"]
            },

            "06_defense_security": {
                militaryComparison: {
                    argentina: { personnel: 74200, budget: 5.8, ranking: 40 },
                    chile: { personnel: 80000, budget: 5.5, ranking: 43 }
                },
                jointExercises: ["Cruz del Sur (Joint Force)", "Antarctic operations"],
                cooperationAreas: ["Antarctic logistics", "UN peacekeeping", "Disaster response"],
                peaceSymbols: ["Christ the Redeemer of the Andes statue (1904)"],
                sources: ["Defense ministries"]
            },

            "07_people_to_people": {
                diaspora: { argentinesInChile: 85000, chileansInArgentina: 380000 },
                students: { argentinesInChile: 8500, chileansInArgentina: 15000 },
                tourism: { argentinesToChile: 1800000, chileansToArgentina: 1200000 },
                culturalTies: ["Shared Patagonian identity", "Wine culture", "Ski tourism"],
                sources: ["Migration statistics", "Tourism boards"]
            },

            "08_connectivity": {
                airLinks: {
                    directFlights: true,
                    routes: [
                        { from: "Buenos Aires", to: "Santiago", airlines: ["LATAM", "Aerolíneas", "JetSMART"] },
                        { from: "Mendoza", to: "Santiago", airlines: ["LATAM"] }
                    ]
                },
                landLinks: [
                    { name: "Los Libertadores/Cristo Redentor", type: "Main Andes crossing", traffic: "Major" },
                    { name: "Cardenal Samoré", type: "Southern crossing" },
                    { name: "Integración Austral", type: "Patagonian crossing" }
                ],
                futureProjects: [
                    { name: "Agua Negra Tunnel", status: "Under construction", length: "14 km" },
                    { name: "Las Leñas Tunnel", status: "Proposed", length: "12 km" }
                ],
                sources: ["Infrastructure ministries"]
            },

            "09_multilateral_forums": {
                commonMemberships: [
                    { org: "UN", type: "Global" },
                    { org: "OAS", type: "Regional" },
                    { org: "CELAC", type: "Regional" },
                    { org: "Antarctic Treaty System", type: "Antarctic" },
                    { org: "Pacific Alliance", note: "Chile member, Argentina observer" }
                ],
                votingAlignment: { unGeneralAssembly: 80 },
                jointPositions: ["South Atlantic peace zone", "Malvinas/Falklands support (limited)"],
                sources: ["UN", "Regional organizations"]
            },

            "10_sectoral_cooperation": {
                energy: [
                    { area: "Natural gas", details: "Argentine exports to Chile" },
                    { area: "Electricity interconnection", details: "Binational grid projects" }
                ],
                mining: [
                    { area: "Cross-border mining", details: "Pascua Lama, El Pachón" }
                ],
                antarctica: [
                    { initiative: "Joint logistics", status: "Active" },
                    { initiative: "Scientific cooperation", status: "Ongoing" }
                ],
                sources: ["Energy and mining ministries"]
            },

            "11_influence_third_parties": {
                majorInfluencers: [
                    { country: "USA", influence: "Chile closer to US; affects trade bloc choices" },
                    { country: "CHN", influence: "Both compete for Chinese investment" }
                ],
                triangleDynamics: [
                    { triangle: "Argentina-Chile-Pacific Alliance", dynamic: "Different trade strategies" }
                ],
                sources: ["Think tanks"]
            },

            "12_areas_of_concern": {
                disputes: [
                    { issue: "All territorial disputes resolved", status: "N/A" }
                ],
                frictionPoints: [
                    { issue: "Migration management", impact: "Minor" },
                    { issue: "Trade protocol implementation", impact: "Managed" }
                ],
                riskFactors: ["Economic crises affecting tourism", "Natural disasters"],
                sources: ["News analysis"]
            },

            "13_future_outlook": {
                shortTerm: {
                    period: "1-2 years",
                    scenarios: ["Continued integration (90%)", "Enhanced cooperation (10%)"],
                    probability: "Very stable"
                },
                mediumTerm: {
                    period: "3-5 years",
                    scenarios: ["Infrastructure projects completed (60%)", "Deeper energy integration (30%)"],
                    probability: "Positive"
                },
                wildcards: ["Major earthquake affecting crossings", "Economic divergence"],
                sources: ["Bilateral planning documents"]
            },

            "14_imaginary_peace_scenario": {
                vision: "Already peaceful - model for other border rivalries",
                quantifiedBenefits: {
                    economic: ["Trade potential $15B with all tunnels operational"],
                    social: ["Free movement of people", "Integrated labor market"],
                    environmental: ["Shared Andes ecosystem protection"]
                },
                inspirationalQuote: "These mountains will crumble before Argentina and Chile break their peace - Pope John Paul II (paraphrase)",
                sources: ["Papal mediation records", "Author analysis"]
            },

            "15_external_interventions": {
                applicable: true,
                interventions: [
                    {
                        actor: "Vatican",
                        period: "1978-1984",
                        action: "Papal mediation of Beagle Channel dispute",
                        actualOutcome: "Prevented war; peaceful resolution",
                        source: "Vatican archives"
                    },
                    {
                        actor: "United Kingdom",
                        period: "1902",
                        action: "Arbitration of border disputes",
                        actualOutcome: "Early resolution framework",
                        source: "British archives"
                    }
                ],
                alternativeOutcomes: [
                    {
                        scenario: "Without Vatican intervention",
                        possibleOutcome: "Possible war in 1978",
                        source: "Historical analysis"
                    }
                ],
                lessonsLearned: "Third-party mediation can prevent conflict between rivals",
                sources: ["Historical archives"]
            },

            visualizations: {
                timeline: { type: "d3-timeline", dataPath: "01_historical_background.timeline" },
                tradeFlow: { type: "sankey", dataPath: "05_economic_trade" },
                borderCrossings: { type: "map", features: ["Los Libertadores", "Agua Negra", "Other crossings"] }
            }
        },

        // ========== UNITED KINGDOM ==========
        GBR: {
            "00_overview": {
                relationshipEmoji: "⚠️",
                strengthScore: 35,
                status: "Complicated - Falklands/Malvinas Dispute",
                summary: "Argentina-UK relations are fundamentally shaped by the sovereignty dispute over the Falkland Islands (Islas Malvinas), the 1982 war, and ongoing tensions despite normalized diplomatic ties.",
                keyFacts: [
                    "1982 Falklands War: 649 Argentine, 255 British deaths",
                    "Sovereignty dispute: Ongoing since 1833",
                    "Diplomatic relations: Restored 1990",
                    "Trade volume: $1.8 billion (2023)",
                    "British investment in Argentina significant"
                ],
                lastUpdated: "2025-01-01",
                sources: ["MRE Argentina", "UK FCO", "UN Decolonization Committee"]
            },

            "01_historical_background": {
                timeline: [
                    { year: "1833", event: "Britain establishes control over Falklands/Malvinas", impact: "Beginning of sovereignty dispute" },
                    { year: "1965", event: "UN Resolution 2065 calls for negotiations", impact: "International recognition of dispute" },
                    { year: "1982", event: "Falklands/Malvinas War", impact: "Argentine defeat; end of military junta" },
                    { year: "1990", event: "Diplomatic relations restored", impact: "Normalization begins" },
                    { year: "1995", event: "Joint hydrocarbon cooperation agreement", impact: "Limited practical cooperation" },
                    { year: "2012", event: "Falklands referendum (99.8% remain British)", impact: "UK position strengthened" },
                    { year: "2016", event: "Macri government warming", impact: "Temporary improvement" }
                ],
                historicalContext: "Colonial legacy and unresolved sovereignty claim",
                turningPoints: ["1982 War", "1990 Normalization", "2012 Referendum"],
                sources: ["UN records", "FCO", "MRE Argentina"]
            },

            "02_bilateral_ties": {
                diplomaticRelations: {
                    established: "1823 (interrupted 1982-1990)",
                    currentStatus: "Normalized but complicated"
                },
                embassies: {
                    argentinaInUK: {
                        address: "65 Brook Street, London W1K 4AH",
                        ambassador: "Current Ambassador"
                    },
                    ukInArgentina: {
                        address: "Dr. Luis Agote 2412, Buenos Aires",
                        ambassador: "Current Ambassador"
                    }
                },
                sources: ["MRE Argentina", "UK FCO"]
            },

            "03_agreements_treaties": {
                treaties: [
                    { name: "Madrid Agreements", year: 1990, status: "Active", significance: "Diplomatic normalization" },
                    { name: "Joint Statement on Conservation", year: 1990, status: "Active", significance: "Fishing cooperation" }
                ],
                disputedAreas: [
                    { name: "Falklands/Malvinas sovereignty", status: "Unresolved" },
                    { name: "South Georgia and South Sandwich", status: "Claimed by Argentina" },
                    { name: "Antarctic overlap", status: "Frozen under Antarctic Treaty" }
                ],
                sources: ["Treaty archives", "UN records"]
            },

            "04_political_relations": {
                dialogueMechanisms: [
                    { name: "Bilateral talks", frequency: "Ad hoc" }
                ],
                convergencePoints: ["Trade", "Investment", "Climate change"],
                divergencePoints: ["Falklands/Malvinas sovereignty", "Self-determination interpretation", "Military presence"],
                argentinePosition: "Sovereignty negotiations required under UN resolutions",
                ukPosition: "No negotiations without Islander consent",
                sources: ["UN Decolonization Committee", "Government statements"]
            },

            "05_economic_trade": {
                tradeVolume: { total: 1.8, year: "2023", trend: "Limited growth" },
                exports: {
                    argentinaToUK: { value: 0.9, topProducts: ["Biodiesel", "Wine", "Beef", "Shrimp"] },
                    ukToArgentina: { value: 0.9, topProducts: ["Machinery", "Pharmaceuticals", "Vehicles"] }
                },
                tradeBalance: 0,
                fdi: {
                    ukInArgentina: 7.2,
                    argentinaInUK: 0.5
                },
                majorUKCompanies: ["HSBC", "Unilever", "Shell", "BP", "Diageo"],
                sources: ["UK Trade Statistics", "INDEC Argentina"]
            },

            "06_defense_security": {
                militaryComparison: {
                    argentina: { personnel: 74200, budget: 5.8, ranking: 40 },
                    uk: { personnel: 153000, budget: 68.4, ranking: 5 }
                },
                falklandsPresence: {
                    ukForces: 1500,
                    facilities: ["RAF Mount Pleasant", "Naval facilities"],
                    purpose: "Deterrence and defense"
                },
                historicalConflict: {
                    name: "Falklands War",
                    year: 1982,
                    duration: "74 days",
                    argentineDeaths: 649,
                    britishDeaths: 255,
                    result: "British victory; Argentine withdrawal"
                },
                sources: ["UK MOD", "Argentine Defense Ministry", "Historical records"]
            },

            "07_people_to_people": {
                diaspora: { argentinesInUK: 40000, britishInArgentina: 35000 },
                tourism: { argentinesToUK: 120000, britishToArgentina: 80000 },
                historicalConnections: ["British railways in Argentina", "Welsh colony in Patagonia (Chubut)"],
                sportingTies: ["Football", "Rugby", "Polo"],
                sources: ["Migration statistics", "Tourism data"]
            },

            "08_connectivity": {
                airLinks: {
                    directFlights: true,
                    routes: [
                        { from: "Buenos Aires", to: "London", airlines: ["British Airways", "Aerolíneas Argentinas (via partner)"] }
                    ]
                },
                falklandsFlights: {
                    rafBrize: "Weekly military charter",
                    santiagoBridge: "Via Chile (LATAM) - with Argentine overflight permission"
                },
                sources: ["Aviation authorities"]
            },

            "09_multilateral_forums": {
                commonMemberships: [
                    { org: "UN", type: "Global" },
                    { org: "G20", type: "Economic" },
                    { org: "WTO", type: "Trade" }
                ],
                votingAlignment: { unGeneralAssembly: 50, note: "Moderate alignment except on colonial issues" },
                unResolutions: {
                    resolution2065: "Calls for negotiations on Falklands/Malvinas",
                    c24Committee: "Annual consideration of dispute"
                },
                sources: ["UN records"]
            },

            "10_sectoral_cooperation": {
                energy: [
                    { area: "Offshore oil cooperation", status: "Blocked by sovereignty dispute" }
                ],
                science: [
                    { area: "Antarctic research", status: "Limited cooperation" }
                ],
                culture: [
                    { initiative: "British Council presence", status: "Active" }
                ],
                sources: ["British Council", "Science ministries"]
            },

            "11_influence_third_parties": {
                majorInfluencers: [
                    { country: "USA", influence: "Attempted neutrality; strategically aligned with UK" },
                    { country: "BRA", influence: "Supports Argentina diplomatically" },
                    { country: "EU", influence: "Post-Brexit less leverage for UK in region" }
                ],
                regionalSupport: "Latin American solidarity with Argentina on sovereignty claim",
                sources: ["CELAC statements", "OAS records"]
            },

            "12_areas_of_concern": {
                disputes: [
                    { issue: "Falklands/Malvinas sovereignty", status: "Frozen; no negotiations" },
                    { issue: "South Georgia/South Sandwich", status: "Argentine claim rejected by UK" },
                    { issue: "Antarctic sector overlap", status: "Suspended under Antarctic Treaty" }
                ],
                frictionPoints: [
                    { issue: "UK military exercises", impact: "Argentine protests" },
                    { issue: "Fishing licenses", impact: "Ongoing disagreement" },
                    { issue: "Oil exploration", impact: "Argentine opposition to UK-licensed companies" }
                ],
                riskFactors: ["Nationalist politics", "Oil discoveries", "Climate change affecting islands"],
                sources: ["FCO", "MRE Argentina", "Analysis"]
            },

            "13_future_outlook": {
                shortTerm: {
                    period: "1-2 years",
                    scenarios: ["Status quo (90%)", "Minor improvements (10%)"],
                    probability: "Frozen dispute continues"
                },
                mediumTerm: {
                    period: "3-5 years",
                    scenarios: ["Continued freeze (80%)", "Hong Kong-style discussions (5%)"],
                    probability: "No change likely"
                },
                wildcards: ["Major oil discovery", "Climate migration from islands", "Political shift in UK"],
                sources: ["Think tanks", "Academic analysis"]
            },

            "14_imaginary_peace_scenario": {
                vision: "Shared sovereignty or UN trusteeship leading to long-term resolution",
                quantifiedBenefits: {
                    economic: ["Joint oil development: $100B+ potential", "Fishing coordination: $500M+ annually"],
                    social: ["Islander rights protected", "Argentine families reunited with homeland"],
                    environmental: ["Marine sanctuary cooperation", "Climate monitoring"]
                },
                possibleModels: ["Hong Kong-style transition", "Åland Islands model", "Andorra co-principality"],
                roadmap: [
                    { year: 1, milestone: "Confidence-building measures" },
                    { year: 5, milestone: "Joint administration discussions" },
                    { year: 25, milestone: "Sovereignty transition begins" }
                ],
                inspirationalQuote: "There are no eternal enemies, only eternal interests",
                sources: ["Author analysis", "Peace studies"]
            },

            "15_external_interventions": {
                applicable: true,
                interventions: [
                    {
                        actor: "United States",
                        period: "1982",
                        action: "Supported UK despite OAS commitments",
                        actualOutcome: "British victory; Argentine military collapse",
                        source: "State Dept records"
                    },
                    {
                        actor: "United Nations",
                        period: "1965-present",
                        action: "Resolution 2065 calling for negotiations",
                        actualOutcome: "Ignored by UK",
                        source: "UN records"
                    },
                    {
                        actor: "Chile",
                        period: "1982",
                        action: "Covert support to UK",
                        actualOutcome: "Intelligence sharing with UK",
                        source: "Declassified documents"
                    }
                ],
                alternativeOutcomes: [
                    {
                        scenario: "If negotiations began in 1970s as planned",
                        possibleOutcome: "Possible lease-back arrangement; no war",
                        source: "Historical analysis"
                    }
                ],
                sources: ["National archives", "Academic research"]
            },

            visualizations: {
                timeline: { type: "d3-timeline", dataPath: "01_historical_background.timeline" },
                conflictMap: { type: "geographic", features: ["Falklands/Malvinas", "South Georgia", "Antarctic claims"] },
                tradeFlow: { type: "sankey", dataPath: "05_economic_trade" }
            }
        },

        // ========== UNITED STATES ==========
        USA: {
            "00_overview": {
                relationshipEmoji: "🤝",
                strengthScore: 65,
                status: "Improving Partnership",
                summary: "Argentina-US relations have fluctuated between cooperation and tension, currently improving under the Milei administration with closer alignment on trade, security, and international positions.",
                keyFacts: [
                    "Diplomatic relations since 1823",
                    "Trade volume: $19.4 billion (2023)",
                    "Major non-NATO ally: Not designated (unlike Brazil)",
                    "Key issues: IMF debt, trade, security cooperation"
                ],
                lastUpdated: "2025-01-01",
                sources: ["MRE Argentina", "US State Department"]
            },

            "01_historical_background": {
                timeline: [
                    { year: "1823", event: "Monroe Doctrine; early recognition", impact: "US interest in region established" },
                    { year: "1947", event: "Rio Treaty (TIAR) signed", impact: "Cold War alignment framework" },
                    { year: "1976-1983", event: "US relations with military junta", impact: "Initially supportive, then critical (Carter)" },
                    { year: "1982", event: "Falklands War: US supports UK", impact: "Major strain; OAS commitments questioned" },
                    { year: "1990s", event: "Menem alignment with US", impact: "Close relationship; NATO non-member ally consideration" },
                    { year: "2003-2015", event: "Kirchner era tensions", impact: "Distant relations; Vulture funds dispute" },
                    { year: "2016-2019", event: "Macri rapprochement", impact: "Improved ties; G20 hosting" },
                    { year: "2023-", event: "Milei strong pro-US stance", impact: "Closest alignment in decades" }
                ],
                historicalContext: "Cyclical relationship tied to Argentine politics",
                sources: ["State Dept", "MRE Argentina", "Historical records"]
            },

            "02_bilateral_ties": {
                diplomaticRelations: {
                    established: "1823",
                    currentStatus: "Enhanced Partnership"
                },
                embassies: {
                    argentinaInUSA: {
                        address: "1600 New Hampshire Ave NW, Washington DC",
                        ambassador: "Current Ambassador"
                    },
                    usaInArgentina: {
                        address: "Av. Colombia 4300, Buenos Aires",
                        ambassador: "Marc Stanley"
                    }
                },
                consulates: [
                    { country: "Argentina", locations: ["New York", "Los Angeles", "Miami", "Houston", "Chicago"] },
                    { country: "USA", locations: ["Buenos Aires (Embassy only)"] }
                ],
                sources: ["State Dept", "MRE Argentina"]
            },

            "03_agreements_treaties": {
                treaties: [
                    { name: "Rio Treaty (TIAR)", year: 1947, status: "Active", significance: "Collective defense" },
                    { name: "Bilateral Investment Treaty", year: 1991, status: "Active", significance: "Investment protection" },
                    { name: "Trade and Investment Framework Agreement", year: 2016, status: "Active", significance: "Trade dialogue" }
                ],
                mous: [
                    { name: "Security Cooperation", year: 2019, areas: ["Counter-terrorism", "Organized crime"] },
                    { name: "Energy Cooperation", year: 2022, areas: ["LNG", "Critical minerals"] }
                ],
                sources: ["State Dept", "Treaty archives"]
            },

            "04_political_relations": {
                dialogueMechanisms: [
                    { name: "Strategic Dialogue", frequency: "Annual" },
                    { name: "Trade and Investment Council", frequency: "Regular" }
                ],
                convergencePoints: ["Counter-terrorism", "Democracy promotion", "Venezuela policy (under Milei)"],
                divergencePoints: ["IMF debt approach", "China relations (historical)"],
                sources: ["State Dept", "MRE Argentina"]
            },

            "05_economic_trade": {
                tradeVolume: { total: 19.4, year: "2023", trend: "Growing" },
                exports: {
                    argentinaToUSA: { value: 7.1, topProducts: ["Aluminum", "Wine", "Beef", "Biodiesel", "Lithium compounds"] },
                    usaToArgentina: { value: 12.3, topProducts: ["Machinery", "Aircraft", "Organic chemicals", "Plastics"] }
                },
                tradeBalance: -5.2,
                fdi: {
                    usaInArgentina: 15.8,
                    argentinaInUSA: 4.2
                },
                imfRelations: {
                    currentProgram: "$44B Extended Fund Facility (2022)",
                    status: "Ongoing; largest in IMF history"
                },
                sources: ["US Census Bureau", "INDEC Argentina", "IMF"]
            },

            "06_defense_security": {
                militaryComparison: {
                    argentina: { personnel: 74200, budget: 5.8, ranking: 40 },
                    usa: { personnel: 1328000, budget: 877.0, ranking: 1 }
                },
                jointExercises: ["UNITAS (Naval)", "PANAMAX"],
                cooperationAreas: ["Counter-narcotics", "Peacekeeping", "Disaster response"],
                armsTransfers: [
                    { item: "F-16 fighters", quantity: 24, status: "Denmark transfer approved 2024" }
                ],
                sources: ["SIPRI", "Pentagon", "Argentine Defense Ministry"]
            },

            "07_people_to_people": {
                diaspora: { argentinesInUSA: 260000, americansInArgentina: 25000 },
                students: { argentinesInUSA: 3100, americansInArgentina: 2500 },
                tourism: { argentinesToUSA: 500000, americansToArgentina: 600000 },
                culturalTies: ["Music", "Film", "Academic exchanges", "Sports"],
                sources: ["Migration data", "IIE", "Tourism boards"]
            },

            "08_connectivity": {
                airLinks: {
                    directFlights: true,
                    routes: [
                        { from: "Buenos Aires", to: "Miami", airlines: ["American", "Aerolíneas"] },
                        { from: "Buenos Aires", to: "New York", airlines: ["American", "United"] },
                        { from: "Buenos Aires", to: "Houston", airlines: ["United"] }
                    ]
                },
                sources: ["Aviation authorities"]
            },

            "09_multilateral_forums": {
                commonMemberships: [
                    { org: "UN", type: "Global" },
                    { org: "G20", type: "Economic" },
                    { org: "OAS", type: "Regional" },
                    { org: "WTO", type: "Trade" }
                ],
                votingAlignment: { unGeneralAssembly: 45, note: "Moderate; increasing under Milei" },
                sources: ["UN records"]
            },

            "10_sectoral_cooperation": {
                energy: [
                    { area: "Vaca Muerta development", partners: "Chevron, ExxonMobil" },
                    { area: "Critical minerals (lithium)", status: "Growing interest" }
                ],
                technology: [
                    { area: "Space cooperation", details: "NASA partnerships" }
                ],
                agriculture: [
                    { area: "Phytosanitary cooperation", status: "Active" }
                ],
                sources: ["Energy ministry", "NASA"]
            },

            "11_influence_third_parties": {
                majorInfluencers: [
                    { country: "CHN", influence: "US concerned about Chinese investment in Argentina" },
                    { country: "BRA", influence: "Competition for US attention in region" }
                ],
                sources: ["Think tanks"]
            },

            "12_areas_of_concern": {
                disputes: [
                    { issue: "IMF debt sustainability", status: "Ongoing negotiation" }
                ],
                frictionPoints: [
                    { issue: "China ties (historical)", impact: "Reduced under Milei" },
                    { issue: "Trade barriers", impact: "Managed" }
                ],
                sources: ["IMF", "USTR"]
            },

            "13_future_outlook": {
                shortTerm: {
                    period: "1-2 years",
                    scenarios: ["Continued improvement (80%)", "Major breakthrough (15%)"],
                    probability: "Positive trajectory"
                },
                mediumTerm: {
                    period: "3-5 years",
                    scenarios: ["Enhanced partnership (60%)", "Strategic relationship (30%)"],
                    probability: "Continued improvement"
                },
                wildcards: ["Argentine political change", "US election outcomes", "Regional dynamics"],
                sources: ["Policy analysis"]
            },

            "14_imaginary_peace_scenario": {
                vision: "Full FTA and strategic partnership",
                quantifiedBenefits: {
                    economic: ["Trade could triple with FTA", "Major investment inflows"],
                    social: ["Enhanced academic exchanges", "Visa facilitation"],
                    environmental: ["Joint clean energy development"]
                },
                sources: ["Author analysis"]
            },

            "15_external_interventions": {
                applicable: true,
                interventions: [
                    {
                        actor: "United States",
                        period: "1976-1978",
                        action: "Initial support for military junta",
                        actualOutcome: "Human rights abuses enabled",
                        source: "Declassified documents"
                    },
                    {
                        actor: "United States",
                        period: "1982",
                        action: "Support for UK in Falklands War",
                        actualOutcome: "Argentine defeat; damaged relations",
                        source: "State Dept records"
                    }
                ],
                sources: ["National Security Archive"]
            }
        },

        // ========== CHINA ==========
        CHN: {
            "00_overview": {
                relationshipEmoji: "💼",
                strengthScore: 70,
                status: "Comprehensive Strategic Partnership",
                summary: "Argentina-China relations have grown dramatically since 2004, driven by Chinese demand for Argentine commodities and Chinese investment in infrastructure and energy. The partnership faces uncertainty under the Milei government.",
                keyFacts: [
                    "Diplomatic relations: 1972",
                    "Strategic partnership: 2014",
                    "Trade volume: $26.6 billion (2023)",
                    "China: 2nd largest trade partner",
                    "Currency swap: $18.5 billion (under review)"
                ],
                lastUpdated: "2025-01-01",
                sources: ["MRE Argentina", "Chinese MFA"]
            },

            "01_historical_background": {
                timeline: [
                    { year: "1972", event: "Diplomatic relations established", impact: "Recognition of PRC" },
                    { year: "2004", event: "Strategic partnership declared", impact: "Rapid trade growth begins" },
                    { year: "2014", event: "Comprehensive Strategic Partnership", impact: "Highest level of partnership" },
                    { year: "2015", event: "Major infrastructure agreements", impact: "$15B in projects announced" },
                    { year: "2022", event: "Belt and Road Initiative joined", impact: "First G20 country in Americas" },
                    { year: "2023", event: "Currency swap expanded", impact: "$18.5B swap line" },
                    { year: "2024", event: "Milei government review", impact: "BRI and ties under reconsideration" }
                ],
                historicalContext: "Rapid growth driven by commodity trade and investment",
                sources: ["MRE Argentina", "Chinese MFA"]
            },

            "02_bilateral_ties": {
                diplomaticRelations: {
                    established: "1972-02-19",
                    currentStatus: "Comprehensive Strategic Partnership (under review)"
                },
                embassies: {
                    argentinaInChina: {
                        address: "Sanlitun Dongwujie 11, Beijing"
                    },
                    chinaInArgentina: {
                        address: "Av. Figueroa Alcorta 2263, Buenos Aires"
                    }
                },
                consulates: [
                    { country: "Argentina", locations: ["Shanghai", "Guangzhou", "Hong Kong"] },
                    { country: "China", locations: ["Buenos Aires"] }
                ],
                sources: ["MRE Argentina", "Chinese Embassy"]
            },

            "03_agreements_treaties": {
                treaties: [
                    { name: "Comprehensive Strategic Partnership Agreement", year: 2014, status: "Active", significance: "Framework agreement" },
                    { name: "Belt and Road MOU", year: 2022, status: "Under review", significance: "Infrastructure cooperation" },
                    { name: "Currency Swap Agreement", year: 2009, status: "Active (expanded)", significance: "Financial stability" }
                ],
                mous: [
                    { name: "Infrastructure cooperation", year: 2015, areas: ["Railways", "Energy", "Ports"] },
                    { name: "Agricultural cooperation", year: 2017, areas: ["Beef", "Soybeans", "Barley"] }
                ],
                sources: ["MRE Argentina", "Chinese MFA"]
            },

            "04_political_relations": {
                dialogueMechanisms: [
                    { name: "Permanent Binational Commission", frequency: "Annual" },
                    { name: "Strategic Dialogue", frequency: "Regular" }
                ],
                convergencePoints: ["Trade expansion", "Infrastructure investment", "Agricultural cooperation"],
                divergencePoints: ["Taiwan position (traditional Argentine support for One China)", "Human rights"],
                currentTensions: "Milei government review of BRI and ideological distance",
                sources: ["Government statements", "News analysis"]
            },

            "05_economic_trade": {
                tradeVolume: { total: 26.6, year: "2023", trend: "Major growth last decade" },
                exports: {
                    argentinaToChina: { value: 8.0, topProducts: ["Soybeans", "Beef", "Barley", "Lithium", "Seafood"] },
                    chinaToArgentina: { value: 18.6, topProducts: ["Electronics", "Machinery", "Chemicals", "Vehicles", "Textiles"] }
                },
                tradeBalance: -10.6,
                fdi: {
                    chinaInArgentina: 4.5,
                    argentinaInChina: 0.1
                },
                majorProjects: [
                    { name: "Caucharí Solar Park", value: 0.4, status: "Operational" },
                    { name: "Kirchner-Cepernic Dams", value: 4.7, status: "Construction" },
                    { name: "Belgrano Cargas Railway", value: 2.5, status: "Partial completion" }
                ],
                sources: ["INDEC Argentina", "Chinese customs", "ECLAC"]
            },

            "06_defense_security": {
                militaryComparison: {
                    argentina: { personnel: 74200, budget: 5.8, ranking: 40 },
                    china: { personnel: 2035000, budget: 292.0, ranking: 3 }
                },
                defenseCooperation: [
                    { area: "Satellite cooperation", details: "Chinese-built ARSAT satellites" },
                    { area: "Space station", details: "Chinese tracking station in Neuquén (civilian, controversial)" }
                ],
                concernsRaised: "US concern about Chinese military dual-use facilities",
                sources: ["Defense ministries", "News analysis"]
            },

            "07_people_to_people": {
                diaspora: { argentinesInChina: 3000, chineseInArgentina: 120000 },
                students: { argentinesInChina: 1500, chineseInArgentina: 2000 },
                tourism: { argentinesToChina: 25000, chineseToArgentina: 45000 },
                culturalTies: ["Confucius Institutes", "Lunar New Year celebrations", "Supermarket presence"],
                sources: ["Migration data", "Education statistics"]
            },

            "08_connectivity": {
                airLinks: {
                    directFlights: false,
                    routes: [
                        { from: "Buenos Aires", to: "Beijing/Shanghai", via: "São Paulo or Madrid" }
                    ],
                    plannedRoutes: "Direct flights discussed"
                },
                sources: ["Aviation authorities"]
            },

            "09_multilateral_forums": {
                commonMemberships: [
                    { org: "UN", type: "Global" },
                    { org: "G20", type: "Economic" },
                    { org: "WTO", type: "Trade" }
                ],
                votingAlignment: { unGeneralAssembly: 55 },
                brics: {
                    status: "Argentina invited January 2024",
                    mileiDecision: "Declined to join"
                },
                sources: ["UN records", "News analysis"]
            },

            "10_sectoral_cooperation": {
                energy: [
                    { area: "Nuclear power", details: "Atucha III negotiations (stalled)" },
                    { area: "Hydroelectric", details: "Kirchner-Cepernic dams" },
                    { area: "Renewable", details: "Solar projects" }
                ],
                space: [
                    { area: "Deep space station", details: "Neuquén facility (controversial)" },
                    { area: "Satellites", details: "ARSAT cooperation" }
                ],
                agriculture: [
                    { area: "Beef exports", status: "Major growth market" },
                    { area: "Soybean trade", status: "Largest buyer" }
                ],
                sources: ["Energy ministry", "Agricultural ministry"]
            },

            "11_influence_third_parties": {
                majorInfluencers: [
                    { country: "USA", influence: "US pressure to reduce China ties (increasing)" },
                    { country: "BRA", influence: "Competition for Chinese investment" }
                ],
                triangleDynamics: [
                    { triangle: "Argentina-China-USA", dynamic: "Argentina caught between great powers" }
                ],
                sources: ["Think tanks", "News analysis"]
            },

            "12_areas_of_concern": {
                disputes: [
                    { issue: "Trade imbalance", status: "Ongoing concern" },
                    { issue: "Currency swap usage", status: "Heavy reliance" }
                ],
                frictionPoints: [
                    { issue: "Illegal fishing by Chinese vessels", impact: "Periodic incidents" },
                    { issue: "Project delays", impact: "Some infrastructure projects behind schedule" }
                ],
                currentReview: "Milei government reconsidering relationship scope",
                sources: ["News analysis", "Government statements"]
            },

            "13_future_outlook": {
                shortTerm: {
                    period: "1-2 years",
                    scenarios: ["Partial cooling (60%)", "Maintained trade ties (35%)"],
                    probability: "Recalibration likely"
                },
                mediumTerm: {
                    period: "3-5 years",
                    scenarios: ["Pragmatic economic focus (50%)", "Significant cooling (30%)"],
                    probability: "Uncertain"
                },
                wildcards: ["Argentine political change", "US-China tensions affecting Argentina", "Commodity price shifts"],
                sources: ["Policy analysis"]
            },

            "14_imaginary_peace_scenario": {
                vision: "Balanced economic partnership without geopolitical pressure",
                quantifiedBenefits: {
                    economic: ["Diversified trade", "Technology transfer", "Value-added exports"],
                    social: ["Enhanced cultural understanding"],
                    environmental: ["Clean energy cooperation"]
                },
                sources: ["Author analysis"]
            },

            "15_external_interventions": {
                applicable: true,
                interventions: [
                    {
                        actor: "United States",
                        period: "2020s",
                        action: "Pressure to limit Chinese involvement",
                        actualOutcome: "Argentine balancing act",
                        source: "News reports"
                    }
                ],
                sources: ["News analysis"]
            }
        },

        // Continue with more countries...
        // Adding abbreviated versions for remaining key relationships

        // ========== URUGUAY ==========
        URY: {
            "00_overview": {
                relationshipEmoji: "🤝",
                strengthScore: 85,
                status: "Strategic Partnership / MERCOSUR",
                summary: "Argentina-Uruguay relations are characterized by deep historical, cultural, and economic ties, anchored by MERCOSUR and shared River Plate identity. Occasional disputes exist but are managed within strong fraternal bonds.",
                keyFacts: [
                    "Shared River Plate estuary",
                    "MERCOSUR partners since 1991",
                    "Trade volume: $2.8 billion (2023)",
                    "Nearly 400,000 Argentines visit Uruguay annually",
                    "Pulp mill dispute (2003-2010) resolved"
                ],
                lastUpdated: "2025-01-01",
                sources: ["MRE Argentina", "MRREE Uruguay"]
            },
            // Additional sections follow same pattern...
            "05_economic_trade": {
                tradeVolume: { total: 2.8, year: "2023", trend: "Stable" },
                exports: {
                    argentinaToUruguay: { value: 1.9, topProducts: ["Petroleum", "Vehicles", "Wheat", "Plastics"] },
                    uruguayToArgentina: { value: 0.9, topProducts: ["Dairy", "Rice", "Malt", "Wood"] }
                },
                touristFlows: "Major economic factor - Punta del Este tourism",
                sources: ["INDEC", "Uruguay customs"]
            },
            "06_defense_security": {
                jointExercises: ["River patrol operations"],
                cooperationAreas: ["Maritime security", "River navigation", "Peacekeeping"],
                sources: ["Defense ministries"]
            }
        },

        // ========== PARAGUAY ==========
        PRY: {
            "00_overview": {
                relationshipEmoji: "🤝",
                strengthScore: 75,
                status: "Strategic Partnership / MERCOSUR",
                summary: "Argentina-Paraguay relations are anchored by MERCOSUR, shared Guaraní heritage, and major energy cooperation through the Yacyretá Dam.",
                keyFacts: [
                    "MERCOSUR founding partners",
                    "Yacyretá hydroelectric dam (shared)",
                    "Trade volume: $2.1 billion",
                    "Largest Paraguayan diaspora in Argentina"
                ],
                lastUpdated: "2025-01-01",
                sources: ["MRE Argentina", "MRE Paraguay"]
            },
            "05_economic_trade": {
                tradeVolume: { total: 2.1, year: "2023", trend: "Growing" },
                yacyreta: {
                    capacity: "3,200 MW",
                    ownership: "50-50",
                    significance: "Major shared infrastructure"
                },
                sources: ["INDEC", "Paraguayan customs"]
            }
        },

        // ========== BOLIVIA ==========
        BOL: {
            "00_overview": {
                relationshipEmoji: "🤝",
                strengthScore: 70,
                status: "Strategic Partnership",
                summary: "Argentina-Bolivia relations center on energy (natural gas imports), migration, and cultural ties through shared indigenous heritage.",
                keyFacts: [
                    "Major gas supplier to Argentina",
                    "Large Bolivian diaspora in Argentina (750,000+)",
                    "Shared Andean culture",
                    "Trade volume: $3.2 billion"
                ],
                lastUpdated: "2025-01-01",
                sources: ["MRE Argentina", "MRE Bolivia"]
            },
            "05_economic_trade": {
                gasImports: "Bolivia supplies significant portion of Argentine gas needs",
                tradeVolume: { total: 3.2, year: "2023" },
                sources: ["Energy ministry", "INDEC"]
            }
        },

        // ========== SPAIN ==========
        ESP: {
            "00_overview": {
                relationshipEmoji: "🤝",
                strengthScore: 80,
                status: "Strategic Association",
                summary: "Argentina-Spain relations are rooted in colonial history, massive immigration, shared language, and deep cultural ties. Spain is a key EU partner for Argentina.",
                keyFacts: [
                    "Former colonial power (1516-1816)",
                    "Spanish diaspora heritage: Millions of Argentines",
                    "Trade: $3.5 billion",
                    "Major Spanish investment in Argentina"
                ],
                lastUpdated: "2025-01-01",
                sources: ["MRE Argentina", "Spanish MFA"]
            },
            "05_economic_trade": {
                tradeVolume: { total: 3.5, year: "2023" },
                fdi: { spanishInArgentina: 22.0 },
                majorCompanies: ["Telefónica", "Repsol", "Santander", "BBVA", "Naturgy"],
                sources: ["INDEC", "Spanish Trade"]
            },
            "07_people_to_people": {
                diaspora: { argentinesInSpain: 275000, spanishHeritageInArgentina: "Millions" },
                dualCitizenship: "Common",
                sources: ["INE Spain", "Migration data"]
            }
        },

        // ========== ITALY ==========
        ITA: {
            "00_overview": {
                relationshipEmoji: "🤝",
                strengthScore: 80,
                status: "Strategic Partnership",
                summary: "Argentina-Italy relations are defined by massive Italian immigration that shaped Argentine identity. Cultural, economic, and family ties remain strong.",
                keyFacts: [
                    "60%+ of Argentines have Italian heritage",
                    "Italian immigration: 1880s-1950s peak",
                    "Trade: $2.1 billion",
                    "Many Argentines hold Italian passports"
                ],
                lastUpdated: "2025-01-01",
                sources: ["MRE Argentina", "Italian MFA"]
            },
            "07_people_to_people": {
                diaspora: {
                    argentinesWithItalianPassport: 1500000,
                    italianHeritageInArgentina: "25-30 million (majority)"
                },
                culturalImpact: "Italian immigration fundamental to Argentine identity",
                sources: ["Italian AIRE registry", "Academic studies"]
            }
        },

        // ========== RUSSIA ==========
        RUS: {
            "00_overview": {
                relationshipEmoji: "💼",
                strengthScore: 50,
                status: "Comprehensive Strategic Partnership",
                summary: "Argentina-Russia relations expanded under Kirchner governments with energy and defense cooperation, but face recalibration under Milei's Western-aligned foreign policy.",
                keyFacts: [
                    "Strategic partnership: 2015",
                    "Trade: $1.5 billion",
                    "Energy cooperation: Nuclear and hydroelectric",
                    "Agricultural exports: Major market"
                ],
                lastUpdated: "2025-01-01",
                sources: ["MRE Argentina", "Russian MFA"]
            },
            "04_political_relations": {
                currentStatus: "Under recalibration",
                mileiPosition: "More critical of Russia; aligned with Western position on Ukraine",
                sources: ["Government statements"]
            }
        },

        // ========== INDIA ==========
        IND: {
            "00_overview": {
                relationshipEmoji: "🤝",
                strengthScore: 55,
                status: "Strategic Partnership",
                summary: "Argentina-India relations are growing, focused on trade (agricultural products), pharmaceuticals, and South-South cooperation. Both are G20 members with potential for deeper ties.",
                keyFacts: [
                    "Diplomatic relations: 1949",
                    "Trade: $4.1 billion (2023)",
                    "Argentina: Major soy, sunflower oil supplier to India",
                    "India: Pharmaceuticals, vehicles, textiles to Argentina"
                ],
                lastUpdated: "2025-01-01",
                sources: ["MRE Argentina", "MEA India"]
            },
            "05_economic_trade": {
                tradeVolume: { total: 4.1, year: "2023", trend: "Growing" },
                exports: {
                    argentinaToIndia: { value: 3.3, topProducts: ["Vegetable oils", "Leather", "Gold", "Organic chemicals"] },
                    indiaToArgentina: { value: 0.8, topProducts: ["Pharmaceuticals", "Vehicles", "Chemicals", "Textiles"] }
                },
                sources: ["INDEC", "Indian Commerce Ministry"]
            }
        },

        // ========== MEXICO ==========
        MEX: {
            "00_overview": {
                relationshipEmoji: "🤝",
                strengthScore: 70,
                status: "Strategic Partnership",
                summary: "Argentina-Mexico relations are characterized by strong cultural ties, Latin American solidarity, and growing economic cooperation despite different regional trade orientations.",
                keyFacts: [
                    "Both Spanish-speaking Latin American powers",
                    "Trade: $2.7 billion",
                    "Mexico: Provided asylum during Argentine dictatorships",
                    "Automotive trade agreement"
                ],
                lastUpdated: "2025-01-01",
                sources: ["MRE Argentina", "SRE Mexico"]
            },
            "05_economic_trade": {
                tradeVolume: { total: 2.7, year: "2023" },
                automotiveSector: "Major trade component under Economic Complementation Agreement",
                sources: ["INDEC", "Mexican customs"]
            }
        },

        // ========== JAPAN ==========
        JPN: {
            "00_overview": {
                relationshipEmoji: "🤝",
                strengthScore: 60,
                status: "Strategic Partnership",
                summary: "Argentina-Japan relations focus on trade, investment, and cultural ties. Japan is a significant source of FDI and technology for Argentina.",
                keyFacts: [
                    "Diplomatic relations: 1898",
                    "Trade: $1.9 billion",
                    "Japanese diaspora in Argentina: 65,000+",
                    "Major Japanese auto manufacturers present"
                ],
                lastUpdated: "2025-01-01",
                sources: ["MRE Argentina", "Japanese MFA"]
            },
            "05_economic_trade": {
                tradeVolume: { total: 1.9, year: "2023" },
                fdi: { japaneseInArgentina: 2.8 },
                majorCompanies: ["Toyota", "Honda", "Mitsubishi", "Mitsui"],
                sources: ["INDEC", "Japanese trade data"]
            }
        },

        // ========== SOUTH AFRICA ==========
        ZAF: {
            "00_overview": {
                relationshipEmoji: "🤝",
                strengthScore: 50,
                status: "Strategic Partnership",
                summary: "Argentina-South Africa relations developed through G20 and Southern Hemisphere cooperation, with growing trade and political dialogue.",
                keyFacts: [
                    "Both G20 members",
                    "Trade: $650 million",
                    "Mining and agricultural cooperation",
                    "Southern Hemisphere solidarity"
                ],
                lastUpdated: "2025-01-01",
                sources: ["MRE Argentina", "DIRCO South Africa"]
            }
        },

        // ========== GERMANY ==========
        DEU: {
            "00_overview": {
                relationshipEmoji: "🤝",
                strengthScore: 70,
                status: "Strategic Partnership",
                summary: "Argentina-Germany relations are driven by significant German diaspora, major investment, and EU-MERCOSUR negotiations. Germany is Argentina's largest EU trade partner.",
                keyFacts: [
                    "German heritage in Argentina: Significant",
                    "Trade: $3.8 billion",
                    "Major German corporate presence",
                    "EU-MERCOSUR negotiations key issue"
                ],
                lastUpdated: "2025-01-01",
                sources: ["MRE Argentina", "German AA"]
            },
            "05_economic_trade": {
                tradeVolume: { total: 3.8, year: "2023" },
                fdi: { germanInArgentina: 5.2 },
                majorCompanies: ["Volkswagen", "Mercedes-Benz", "Siemens", "BASF", "Bayer"],
                sources: ["INDEC", "German trade statistics"]
            }
        },

        // ========== FRANCE ==========
        FRA: {
            "00_overview": {
                relationshipEmoji: "🤝",
                strengthScore: 65,
                status: "Enhanced Partnership",
                summary: "Argentina-France relations span cultural, economic, and defense cooperation, with French influence on Argentine culture and significant trade.",
                keyFacts: [
                    "Cultural affinity: Strong",
                    "Trade: $1.5 billion",
                    "Defense cooperation: Submarines, technology",
                    "French community in Argentina"
                ],
                lastUpdated: "2025-01-01",
                sources: ["MRE Argentina", "Quai d'Orsay"]
            }
        },

        // ========== VENEZUELA ==========
        VEN: {
            "00_overview": {
                relationshipEmoji: "⚠️",
                strengthScore: 25,
                status: "Strained",
                summary: "Argentina-Venezuela relations have deteriorated significantly under the Milei government, which does not recognize the Maduro government and has taken a strong stance against Venezuelan authoritarianism.",
                keyFacts: [
                    "Close ties under Kirchner governments",
                    "Milei: Does not recognize Maduro",
                    "Trade: Near zero",
                    "Venezuelan refugees in Argentina: 200,000+"
                ],
                lastUpdated: "2025-01-01",
                sources: ["MRE Argentina", "News analysis"]
            },
            "04_political_relations": {
                currentStatus: "Argentina considers Maduro illegitimate",
                mileiPosition: "Calls for Venezuelan democracy; recognizes opposition",
                previousRelations: "Close cooperation 2003-2015 under Kirchner governments",
                sources: ["Government statements"]
            }
        },

        // ========== ISRAEL ==========
        ISR: {
            "00_overview": {
                relationshipEmoji: "🤝",
                strengthScore: 70,
                status: "Strategic Partnership",
                summary: "Argentina-Israel relations are strengthened by the large Jewish community in Argentina (Latin America's largest), trade, and counter-terrorism cooperation following the AMIA bombing.",
                keyFacts: [
                    "Jewish population in Argentina: 180,000+",
                    "AMIA bombing (1994): Major terrorist attack",
                    "Trade: $350 million",
                    "Strong political ties under Milei"
                ],
                lastUpdated: "2025-01-01",
                sources: ["MRE Argentina", "Israeli MFA"]
            },
            "01_historical_background": {
                timeline: [
                    { year: "1949", event: "Diplomatic relations established" },
                    { year: "1992", event: "Israeli Embassy bombing (29 dead)" },
                    { year: "1994", event: "AMIA bombing (85 dead)" },
                    { year: "2023", event: "Milei strong pro-Israel stance" }
                ],
                sources: ["Historical records", "AMIA investigation"]
            }
        },

        // ========== IRAN ==========
        IRN: {
            "00_overview": {
                relationshipEmoji: "⚠️",
                strengthScore: 10,
                status: "Hostile",
                summary: "Argentina-Iran relations are defined by the unresolved AMIA bombing investigation, with Argentina accusing Iranian officials of involvement. Relations are near non-existent.",
                keyFacts: [
                    "AMIA bombing (1994): Iran accused",
                    "Interpol red notices for Iranian officials",
                    "Trade: Minimal",
                    "2013 MOU with Iran (controversial, voided)"
                ],
                lastUpdated: "2025-01-01",
                sources: ["MRE Argentina", "Judicial records"]
            },
            "12_areas_of_concern": {
                disputes: [
                    { issue: "AMIA bombing responsibility", status: "Interpol notices outstanding" }
                ],
                sources: ["AMIA investigation files"]
            }
        },

        // ========== AUSTRALIA ==========
        AUS: {
            "00_overview": {
                relationshipEmoji: "🤝",
                strengthScore: 55,
                status: "Partnership",
                summary: "Argentina-Australia relations are characterized by G20 cooperation, agricultural trade competition, and Southern Hemisphere solidarity. Both are major agricultural exporters.",
                keyFacts: [
                    "Both G20 members",
                    "Trade: $800 million",
                    "Competitors in agricultural markets",
                    "Rugby and cultural exchanges"
                ],
                lastUpdated: "2025-01-01",
                sources: ["MRE Argentina", "DFAT Australia"]
            }
        },

        // ========== CANADA ==========
        CAN: {
            "00_overview": {
                relationshipEmoji: "🤝",
                strengthScore: 55,
                status: "Partnership",
                summary: "Argentina-Canada relations focus on trade, mining investment, and multilateral cooperation. Canada is a significant investor in Argentine mining.",
                keyFacts: [
                    "Trade: $1.2 billion",
                    "Major Canadian mining presence",
                    "G20 cooperation",
                    "Human rights dialogue"
                ],
                lastUpdated: "2025-01-01",
                sources: ["MRE Argentina", "GAC Canada"]
            },
            "05_economic_trade": {
                mining: "Canadian companies major players in Argentine mining sector",
                majorCompanies: ["Barrick Gold", "Yamana Gold", "Pan American Silver"],
                sources: ["Mining ministry", "Trade data"]
            }
        },

        // ========== SOUTH KOREA ==========
        KOR: {
            "00_overview": {
                relationshipEmoji: "🤝",
                strengthScore: 55,
                status: "Strategic Partnership",
                summary: "Argentina-South Korea relations have grown through trade, automotive investment, and Korean diaspora in Argentina.",
                keyFacts: [
                    "Trade: $1.8 billion",
                    "Korean diaspora: 45,000+",
                    "Automotive and electronics investment",
                    "FTA negotiations discussed"
                ],
                lastUpdated: "2025-01-01",
                sources: ["MRE Argentina", "Korean MFA"]
            }
        },

        // ========== SAUDI ARABIA ==========
        SAU: {
            "00_overview": {
                relationshipEmoji: "💼",
                strengthScore: 45,
                status: "Developing Partnership",
                summary: "Argentina-Saudi Arabia relations are growing, with G20 cooperation, trade in agricultural products, and potential investment in energy and infrastructure.",
                keyFacts: [
                    "Both G20 members",
                    "Trade: $600 million",
                    "Saudi investment interest in lithium",
                    "Agricultural exports to Saudi Arabia"
                ],
                lastUpdated: "2025-01-01",
                sources: ["MRE Argentina", "Saudi MFA"]
            }
        },

        // ========== INDONESIA ==========
        IDN: {
            "00_overview": {
                relationshipEmoji: "🤝",
                strengthScore: 45,
                status: "Partnership",
                summary: "Argentina-Indonesia relations focus on trade (palm oil vs vegetable oils competition), G20 cooperation, and South-South dialogue.",
                keyFacts: [
                    "Both G20 members",
                    "Trade: $2.2 billion",
                    "Competitors in vegetable oils market",
                    "Growing diplomatic engagement"
                ],
                lastUpdated: "2025-01-01",
                sources: ["MRE Argentina", "Indonesian MFA"]
            }
        },

        // ========== TÜRKIYE ==========
        TUR: {
            "00_overview": {
                relationshipEmoji: "🤝",
                strengthScore: 50,
                status: "Partnership",
                summary: "Argentina-Turkey relations have grown through G20 cooperation and trade, with potential for deeper economic ties.",
                keyFacts: [
                    "Both G20 members",
                    "Trade: $1.1 billion",
                    "Turkish construction presence",
                    "Growing political dialogue"
                ],
                lastUpdated: "2025-01-01",
                sources: ["MRE Argentina", "Turkish MFA"]
            }
        },

        // ========== COLOMBIA ==========
        COL: {
            "00_overview": {
                relationshipEmoji: "🤝",
                strengthScore: 65,
                status: "Partnership",
                summary: "Argentina-Colombia relations span cultural ties, trade, and regional cooperation within Latin American frameworks.",
                keyFacts: [
                    "Trade: $1.4 billion",
                    "Cultural exchanges strong",
                    "Colombian diaspora in Argentina: 120,000+",
                    "Regional cooperation in OAS, CELAC"
                ],
                lastUpdated: "2025-01-01",
                sources: ["MRE Argentina", "Colombian MFA"]
            }
        },

        // ========== PERU ==========
        PER: {
            "00_overview": {
                relationshipEmoji: "🤝",
                strengthScore: 60,
                status: "Partnership",
                summary: "Argentina-Peru relations are characterized by cultural ties, trade, and cooperation in South American regional bodies.",
                keyFacts: [
                    "Trade: $900 million",
                    "Pacific Alliance observer status consideration",
                    "Migration flows",
                    "Andean cultural connections"
                ],
                lastUpdated: "2025-01-01",
                sources: ["MRE Argentina", "Peruvian MFA"]
            }
        },

        // ========== ECUADOR ==========
        ECU: {
            "00_overview": {
                relationshipEmoji: "🤝",
                strengthScore: 55,
                status: "Partnership",
                summary: "Argentina-Ecuador relations focus on regional cooperation, trade, and migration flows between the two countries.",
                keyFacts: [
                    "Trade: $450 million",
                    "Ecuadorian diaspora in Argentina: 80,000+",
                    "Regional cooperation",
                    "Energy cooperation potential"
                ],
                lastUpdated: "2025-01-01",
                sources: ["MRE Argentina", "Ecuadorian MFA"]
            }
        },

        // ========== NETHERLANDS ==========
        NLD: {
            "00_overview": {
                relationshipEmoji: "🤝",
                strengthScore: 60,
                status: "Partnership",
                summary: "Argentina-Netherlands relations include significant trade, investment, and agricultural cooperation. Netherlands is a key EU trade partner.",
                keyFacts: [
                    "Trade: $1.5 billion",
                    "Major Dutch investment in agriculture",
                    "Port of Rotterdam key for Argentine exports",
                    "Agricultural technology cooperation"
                ],
                lastUpdated: "2025-01-01",
                sources: ["MRE Argentina", "Dutch MFA"]
            }
        },

        // ========== SWITZERLAND ==========
        CHE: {
            "00_overview": {
                relationshipEmoji: "🤝",
                strengthScore: 55,
                status: "Partnership",
                summary: "Argentina-Switzerland relations center on trade, investment, financial services, and Swiss diaspora in Argentina.",
                keyFacts: [
                    "Trade: $1.3 billion",
                    "Swiss investment in pharmaceuticals, machinery",
                    "Financial services ties",
                    "Swiss colony heritage in Argentina"
                ],
                lastUpdated: "2025-01-01",
                sources: ["MRE Argentina", "Swiss EDA"]
            }
        },

        // ========== UAE ==========
        ARE: {
            "00_overview": {
                relationshipEmoji: "💼",
                strengthScore: 45,
                status: "Developing Partnership",
                summary: "Argentina-UAE relations are growing with investment interest, trade, and aviation links. UAE shows interest in Argentine energy and agriculture.",
                keyFacts: [
                    "Trade: $400 million",
                    "Emirates direct flights (via Brazil)",
                    "Investment interest in Vaca Muerta",
                    "Growing diplomatic engagement"
                ],
                lastUpdated: "2025-01-01",
                sources: ["MRE Argentina", "UAE MFA"]
            }
        }
    }
};
