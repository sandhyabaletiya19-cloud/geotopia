/* ============================================
   UPSC GEOGRAPHY LEARNING SYSTEM
   Economic Geography Data File - COMPREHENSIVE
   Topics: Agriculture, Industries, Transport,
           Trade, Regional Development
   ============================================ */

const economicData = [

    // ============================================
    // TOPIC 1: AGRICULTURE IN INDIA
    // ============================================
    {
        id: 'agriculture-india',
        name: 'Agriculture in India',
        icon: '🌾',
        category: 'economic',
        theme: 'agriculture',
        difficulty: 'medium',
        upscRelevance: 'high',

        mindMap: {
            central: 'Indian Agriculture',
            branches: [
                {
                    name: 'Types',
                    color: '#27AE60',
                    children: [
                        'Subsistence vs Commercial',
                        'Intensive vs Extensive',
                        'Irrigated vs Rainfed',
                        'Plantation agriculture'
                    ]
                },
                {
                    name: 'Statistics',
                    color: '#3498DB',
                    children: [
                        '~18% of GDP',
                        '42% of employment',
                        '137M hectares cropped',
                        '48% irrigated'
                    ]
                },
                {
                    name: 'Problems',
                    color: '#E74C3C',
                    children: [
                        'Small land holdings',
                        'Monsoon dependency',
                        'Low productivity',
                        'Fragmented markets'
                    ]
                },
                {
                    name: 'Reforms',
                    color: '#F39C12',
                    children: [
                        'MSP system',
                        'PM-KISAN',
                        'e-NAM',
                        'Soil Health Card'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'number',
                title: 'Key Agriculture Numbers',
                content: '18-42-48: Agriculture is 18% of GDP, 42% of employment, 48% of sown area irrigated. "Eighteen Forty-two Forty-eight!"',
                icon: '🔢'
            },
            {
                type: 'mnemonic',
                title: 'Types of Agriculture',
                content: 'SCIE-P: Subsistence, Commercial, Intensive, Extensive, Plantation. "Scientists Plant!"',
                icon: '🌱'
            },
            {
                type: 'story',
                title: 'Green to Evergreen Story',
                content: 'Green Revolution (1960s) = MORE production (chemicals). Evergreen Revolution (now) = SUSTAINABLE production (organic). Green saved from hunger, Evergreen saves the land!',
                icon: '🌿'
            },
            {
                type: 'comparison',
                title: 'Intensive vs Extensive',
                content: 'INTENSIVE = More inputs on LESS land (India, Japan). EXTENSIVE = Less inputs on MORE land (USA, Australia). Think: India is crowded (intense), USA has space (extensive).',
                icon: '🆚'
            }
        ],

        conceptBlocks: [
            {
                title: 'Agriculture Statistics',
                icon: '📊',
                points: [
                    '🇮🇳 CONTRIBUTION TO ECONOMY:',
                    '  • GDP share: ~18% (declining trend)',
                    '  • Employment: 42% of workforce',
                    '  • Exports: 12% of total exports',
                    '',
                    '📊 LAND USE:',
                    '  • Net Sown Area: 137 million hectares',
                    '  • Gross Cropped Area: 195 million hectares',
                    '  • Cropping Intensity: 141%',
                    '  • Net Irrigated Area: 68 million hectares (48%)',
                    '',
                    '📊 HOLDINGS:',
                    '  • Total holdings: 146 million',
                    '  • Average size: 1.08 hectares',
                    '  • Marginal (<1 ha): 68%',
                    '  • Small (1-2 ha): 18%',
                    '  • 86% are small/marginal farmers!',
                    '',
                    '📊 PRODUCTION (2021-22):',
                    '  • Food grains: 315+ million tonnes (record)',
                    '  • Rice: 130 MT, Wheat: 110 MT',
                    '  • Pulses: 27 MT, Oilseeds: 36 MT',
                    '',
                    '📌 India: 2nd in farm output globally (after China)'
                ]
            },
            {
                title: 'Types of Agriculture',
                icon: '🌾',
                points: [
                    '🌱 SUBSISTENCE AGRICULTURE:',
                    '  • For self-consumption (not market)',
                    '  • Traditional methods',
                    '  • Low inputs, low productivity',
                    '  • Example: Tribal areas, remote villages',
                    '',
                    '💰 COMMERCIAL AGRICULTURE:',
                    '  • For market sale (profit motive)',
                    '  • Modern inputs (HYV, fertilizers)',
                    '  • High productivity',
                    '  • Example: Punjab wheat, Maharashtra sugarcane',
                    '',
                    '📍 INTENSIVE AGRICULTURE:',
                    '  • High inputs on small land',
                    '  • Maximum output per unit area',
                    '  • India, Japan, China typical',
                    '  • Multiple cropping common',
                    '',
                    '📍 EXTENSIVE AGRICULTURE:',
                    '  • Low inputs on large land',
                    '  • Mechanized, less labor',
                    '  • USA, Canada, Australia typical',
                    '  • Single cropping, mono-culture',
                    '',
                    '🌴 PLANTATION AGRICULTURE:',
                    '  • Single crop on large estates',
                    '  • Capital intensive, export-oriented',
                    '  • Example: Tea, Coffee, Rubber, Spices',
                    '  • Legacy of colonial era'
                ]
            },
            {
                title: 'Agricultural Problems',
                icon: '⚠️',
                points: [
                    '📐 SMALL HOLDINGS:',
                    '  • Average: 1.08 hectares',
                    '  • 86% small/marginal farmers',
                    '  • Limits mechanization, efficiency',
                    '  • Land fragmentation increasing',
                    '',
                    '🌧️ MONSOON DEPENDENCY:',
                    '  • 52% rainfed agriculture',
                    '  • Monsoon variability = crop failure risk',
                    '  • Droughts, floods impact',
                    '',
                    '📉 LOW PRODUCTIVITY:',
                    '  • Yields below global average',
                    '  • Rice: India 2.6 t/ha vs China 6.7 t/ha',
                    '  • Traditional practices in many areas',
                    '',
                    '💰 CREDIT & DEBT:',
                    '  • High informal borrowing',
                    '  • Farmer indebtedness',
                    '  • Suicides in some regions',
                    '',
                    '🏪 MARKETING ISSUES:',
                    '  • Many middlemen (APMC system)',
                    '  • Low price realization for farmers',
                    '  • Post-harvest losses (15-20%)',
                    '  • Lack of storage facilities',
                    '',
                    '📊 OTHER ISSUES:',
                    '  • Soil degradation',
                    '  • Groundwater depletion',
                    '  • Climate change impacts',
                    '  • Lack of crop diversification'
                ]
            },
            {
                title: 'Minimum Support Price (MSP)',
                icon: '💰',
                points: [
                    '📖 WHAT IS MSP?',
                    '  • Government-assured price for crops',
                    '  • Protects farmers from price crashes',
                    '  • Floor price - procurement if needed',
                    '',
                    '🏛️ WHO SETS MSP?',
                    '  • CACP recommends (Commission for Agricultural Costs & Prices)',
                    '  • Cabinet approves',
                    '  • Currently for 22-24 crops',
                    '',
                    '📋 CROPS COVERED:',
                    '  • Cereals: Wheat, Rice, Jowar, Bajra, Maize, Ragi, Barley',
                    '  • Pulses: Gram, Tur, Urad, Moong, Masur',
                    '  • Oilseeds: Groundnut, Mustard, Soybean, Sunflower',
                    '  • Commercial: Cotton, Sugarcane (FRP), Jute, Copra',
                    '',
                    '📊 FORMULA (Current):',
                    '  • MSP = Cost A2+FL + 50% margin (since 2018-19)',
                    '  • A2 = Actual paid-out costs',
                    '  • FL = Family labor (imputed)',
                    '',
                    '⚠️ ISSUES:',
                    '  • Mainly benefits wheat-rice farmers (Punjab, Haryana)',
                    '  • Limited reach in other states',
                    '  • Procurement infrastructure lacking',
                    '  • Not legally guaranteed'
                ]
            },
            {
                title: 'Agricultural Schemes',
                icon: '🏛️',
                points: [
                    '💰 PM-KISAN (2019):',
                    '  • ₹6,000/year to farmer families',
                    '  • 3 installments of ₹2,000',
                    '  • Direct Benefit Transfer',
                    '  • 11+ crore beneficiaries',
                    '',
                    '🏪 e-NAM (2016):',
                    '  • Electronic National Agriculture Market',
                    '  • Online trading platform',
                    '  • Price transparency',
                    '  • 1,000+ mandis connected',
                    '',
                    '🧪 SOIL HEALTH CARD (2015):',
                    '  • Soil testing and recommendations',
                    '  • Nutrient-based advice',
                    '  • 23 crore+ cards issued',
                    '',
                    '💧 PMKSY (Krishi Sinchayee Yojana):',
                    '  • "Har Khet Ko Pani"',
                    '  • "Per Drop More Crop"',
                    '  • Micro-irrigation expansion',
                    '',
                    '🌾 PMFBY (Fasal Bima Yojana):',
                    '  • Crop insurance scheme',
                    '  • Low premium for farmers',
                    '  • One-season, one-premium',
                    '',
                    '🏦 KISANC CREDIT CARD (KCC):',
                    '  • Easy agricultural credit',
                    '  • Interest subvention',
                    '  • Now includes PM-KISAN integration'
                ]
            },
            {
                title: 'Institutional Framework',
                icon: '🏛️',
                points: [
                    '🏦 CREDIT INSTITUTIONS:',
                    '  • NABARD: National Bank for Agriculture and Rural Development',
                    '  • Primary Agricultural Credit Societies (PACS)',
                    '  • District Central Cooperative Banks',
                    '  • Regional Rural Banks (RRBs)',
                    '  • Commercial banks (priority sector)',
                    '',
                    '📊 RESEARCH INSTITUTIONS:',
                    '  • ICAR: Indian Council of Agricultural Research',
                    '  • 100+ institutes under ICAR',
                    '  • State Agricultural Universities',
                    '  • Krishi Vigyan Kendras (KVKs): 731 across India',
                    '',
                    '🏪 MARKETING:',
                    '  • FCI: Food Corporation of India (procurement)',
                    '  • APMC: Agricultural Produce Marketing Committee',
                    '  • NAFED: National Agricultural Cooperative',
                    '  • State agencies for procurement',
                    '',
                    '📋 POLICY BODIES:',
                    '  • CACP: Commission for Agricultural Costs & Prices',
                    '  • NITI Aayog: Agricultural policy input',
                    '  • Ministry of Agriculture & Farmers Welfare',
                    '',
                    '📌 COOPERATIVES:',
                    '  • Sugar, dairy, credit cooperatives',
                    '  • AMUL model for dairy',
                    '  • IFFCO, KRIBHCO for fertilizers'
                ]
            }
        ],

        diagrams: [
            {
                title: 'Land Holdings Distribution',
                type: 'pie-chart',
                description: 'Pie chart: Marginal (<1 ha) 68%, Small (1-2 ha) 18%, Semi-medium (2-4 ha) 9%, Medium (4-10 ha) 4%, Large (>10 ha) 1%. Highlight 86% small/marginal.'
            },
            {
                title: 'Agriculture in Economy',
                type: 'infographic',
                description: 'Three circles: GDP 18% (declining), Employment 42% (high), Exports 12%. Show paradox: Low GDP share but high employment.'
            },
            {
                title: 'MSP Mechanism Flow',
                type: 'flowchart',
                description: 'CACP Recommends → Cabinet Approves → MSP Announced → Procurement by FCI/State Agencies → PDS/Buffer Stock. Show where farmer sells.'
            },
            {
                title: 'Agricultural Problems Mind Map',
                type: 'mind-map',
                description: 'Central "Agri Problems" with branches: Small holdings, Monsoon dependency, Low productivity, Credit issues, Marketing gaps, Soil degradation, Water scarcity.'
            }
        ],

        quickFacts: [
            '🌾 Agriculture: 18% of GDP, 42% of employment',
            '📊 Average farm size: 1.08 hectares (very small)',
            '👨‍🌾 86% farmers are small/marginal (<2 hectares)',
            '💧 Only 48% of net sown area is irrigated',
            '📈 Food grain production: 315+ MT (record 2021-22)',
            '🇮🇳 India: 2nd largest farm output (after China)',
            '💰 PM-KISAN: ₹6,000/year to farmer families',
            '📱 e-NAM: 1,000+ mandis connected online',
            '🧪 Soil Health Cards: 23 crore+ issued',
            '🏦 NABARD: Apex bank for rural credit',
            '🔬 ICAR: 100+ agricultural research institutes',
            '📋 MSP: Set for 22-24 crops, CACP recommends'
        ],

                upscTraps: [
            {
                trap: 'Agriculture contributes most to India\'s GDP',
                clarity: 'Agriculture is only 18% of GDP (services is 55%+). But it employs 42% of workforce. This mismatch shows low agricultural productivity.'
            },
            {
                trap: 'Most Indian farms are large commercial farms',
                clarity: '86% are SMALL/MARGINAL (<2 ha). Average size is just 1.08 hectares. Fragmentation is increasing, not decreasing.'
            },
            {
                trap: 'MSP is a legal guarantee for all farmers',
                clarity: 'MSP is NOT legally guaranteed. It\'s an administrative price. Procurement happens mainly for wheat/rice in few states. Most crops and states have limited MSP benefit.'
            },
            {
                trap: 'Green Revolution benefited all of India',
                clarity: 'Green Revolution mainly benefited Punjab, Haryana, Western UP (wheat-rice belt). Eastern India, rainfed areas, and crops other than wheat-rice were largely left out.'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                'Agriculture: 18% GDP, 42% employment, 48% irrigated',
                'Average holding: 1.08 ha, 86% small/marginal farmers',
                'Food grains: 315+ MT (record), India #2 globally',
                'Types: Subsistence vs Commercial, Intensive vs Extensive',
                'MSP: CACP recommends, 22-24 crops, not legally guaranteed',
                'Key schemes: PM-KISAN (₹6000/yr), e-NAM, Soil Health Card, PMFBY',
                'Problems: Small holdings, monsoon dependency, low productivity'
            ]
        },

        pyqs: [
            {
                year: 2021,
                question: 'Discuss the problems of Indian agriculture and suggest measures for sustainable agricultural development.',
                type: 'Mains'
            },
            {
                year: 2020,
                question: 'What percentage of India\'s workforce is engaged in agriculture?',
                type: 'Prelims',
                options: ['25%', '42%', '55%', '65%']
            },
            {
                year: 2019,
                question: 'Explain the concept and mechanism of Minimum Support Price (MSP).',
                type: 'Mains'
            }
        ]
    },

    // ============================================
    // TOPIC 2: MAJOR INDUSTRIES OF INDIA
    // ============================================
    {
        id: 'industries-india',
        name: 'Major Industries of India',
        icon: '🏭',
        category: 'economic',
        theme: 'industry',
        difficulty: 'medium',
        upscRelevance: 'high',

        mindMap: {
            central: 'Indian Industries',
            branches: [
                {
                    name: 'Heavy Industries',
                    color: '#7F8C8D',
                    children: [
                        'Iron & Steel',
                        'Cement',
                        'Machinery',
                        'Shipbuilding'
                    ]
                },
                {
                    name: 'Consumer Industries',
                    color: '#E74C3C',
                    children: [
                        'Textiles (largest)',
                        'Sugar',
                        'Paper',
                        'FMCG'
                    ]
                },
                {
                    name: 'Emerging Sectors',
                    color: '#3498DB',
                    children: [
                        'IT & Software',
                        'Automobiles',
                        'Pharmaceuticals',
                        'Electronics'
                    ]
                },
                {
                    name: 'Industrial Regions',
                    color: '#27AE60',
                    children: [
                        'Mumbai-Pune',
                        'Hooghly region',
                        'Bangalore-Chennai',
                        'Delhi-NCR'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Integrated Steel Plants',
                content: 'BIRD-VR: Bhilai, IISCO (Burnpur), Rourkela, Durgapur, Visakhapatnam, Rourkela. "BIRDs Fly VeRy high!"',
                icon: '🦅'
            },
            {
                type: 'mnemonic',
                title: 'IT Hubs',
                content: 'BCHP-N: Bangalore, Chennai, Hyderabad, Pune, NCR. "Big Companies Hire Programmers Nationally!"',
                icon: '💻'
            },
            {
                type: 'story',
                title: 'Weber\'s Theory Made Easy',
                content: 'Industries locate where COST is MINIMUM: Near RAW MATERIALS (heavy industries like steel), Near MARKET (perishables like bakery), Near LABOR (cheap labor industries).',
                icon: '📍'
            },
            {
                type: 'comparison',
                title: 'Cotton vs Jute Textile',
                content: 'COTTON: Mumbai, Ahmedabad, Coimbatore (Western/South India). JUTE: Kolkata region (Eastern India - near raw material). Cotton moved to market, Jute stayed near farms!',
                icon: '🧵'
            }
        ],

        conceptBlocks: [
            {
                title: 'Iron & Steel Industry',
                icon: '⚙️',
                points: [
                    '🇮🇳 INDIA: 2nd largest crude steel producer globally',
                    '📊 Production: ~120 million tonnes/year',
                    '',
                    '🏭 INTEGRATED STEEL PLANTS (Public Sector):',
                    '  1. BHILAI (Chhattisgarh): Largest, Indo-Soviet collaboration',
                    '  2. ROURKELA (Odisha): Indo-German, first in public sector',
                    '  3. DURGAPUR (West Bengal): Indo-British',
                    '  4. BOKARO (Jharkhand): Indo-Soviet',
                    '  5. IISCO Burnpur (West Bengal): Oldest',
                    '  6. VISAKHAPATNAM (Andhra Pradesh): Shore-based, largest by capacity',
                    '  7. SALEM (Tamil Nadu): Stainless steel',
                    '',
                    '🏭 PRIVATE SECTOR:',
                    '  • TATA STEEL (Jamshedpur): India\'s first (1907), private',
                    '  • JSW (Bellary, Karnataka): Large private',
                    '  • JINDAL (Multiple locations)',
                    '  • ESSAR (Hazira, Gujarat)',
                    '',
                    '📍 LOCATIONAL FACTORS:',
                    '  • Raw materials: Iron ore, coal, limestone',
                    '  • Chota Nagpur Plateau: Ideal (all minerals present)',
                    '  • Coastal: Import ore (Visakhapatnam)',
                    '',
                    '📌 SAIL (Steel Authority of India): Public sector umbrella'
                ]
            },
            {
                title: 'Cotton Textile Industry',
                icon: '🧵',
                points: [
                    '📊 STATUS:',
                    '  • India\'s LARGEST industry by employment',
                    '  • 2nd largest textile producer globally (after China)',
                    '  • 4% of GDP, 14% of industrial production',
                    '  • 45 million direct employment',
                    '',
                    '📍 MAJOR CENTERS:',
                    '  • MUMBAI: "Cottonopolis of India" (declining)',
                    '  • AHMEDABAD: "Manchester of India"',
                    '  • COIMBATORE: "Manchester of South India"',
                    '  • KANPUR: North India center',
                    '  • SURAT: Synthetic textiles',
                    '  • Tamil Nadu: Most mills currently',
                    '',
                    '📊 TYPES:',
                    '  • MILL SECTOR: Large factories, organized',
                    '  • POWERLOOM SECTOR: 65% of production',
                    '  • HANDLOOM SECTOR: Traditional, rural',
                    '',
                    '📍 LOCATIONAL SHIFT:',
                    '  • Originally: Mumbai, Ahmedabad (near cotton, port)',
                    '  • Now: Shifted south (Tamil Nadu, Karnataka)',
                    '  • Reasons: Labor costs, power availability',
                    '',
                    '📌 National Textile Policy 2000: Modernization focus'
                ]
            },
            {
                title: 'IT & Software Industry',
                icon: '💻',
                points: [
                    '📊 STATUS:',
                    '  • ~$200 billion industry (2022)',
                    '  • 5+ million direct employment',
                    '  • 8% of GDP',
                    '  • Largest exporter of IT services globally',
                    '',
                    '📍 MAJOR IT HUBS:',
                    '  1. BANGALORE: Silicon Valley of India (40% of IT exports)',
                    '  2. HYDERABAD: HITEC City, Cyberabad',
                    '  3. CHENNAI: IT Corridor (OMR)',
                    '  4. PUNE: IT + Manufacturing hub',
                    '  5. NCR: Gurgaon, Noida',
                    '  6. KOLKATA: Emerging (Salt Lake, Rajarhat)',
                    '',
                    '🏢 MAJOR COMPANIES:',
                    '  • TCS, Infosys, Wipro, HCL (Indian)',
                    '  • Google, Microsoft, Amazon (MNCs)',
                    '',
                    '📍 LOCATIONAL FACTORS:',
                    '  • Skilled human resource (not raw materials)',
                    '  • Connectivity (airports, internet)',
                    '  • Quality of life (attracts talent)',
                    '  • Government policies (SEZs, tax benefits)',
                    '',
                    '📌 NASSCOM: National Association of Software and Service Companies',
                    '',
                    '🎯 EMERGING: AI, Cloud, Cybersecurity, Blockchain'
                ]
            },
            {
                title: 'Automobile Industry',
                icon: '🚗',
                points: [
                    '📊 STATUS:',
                    '  • 4th largest in world',
                    '  • 7% of GDP, 49% of manufacturing GDP',
                    '  • 35+ million vehicles/year production',
                    '',
                    '📍 AUTOMOBILE HUBS:',
                    '  1. CHENNAI: "Detroit of India"',
                    '     • Hyundai, Ford, Renault-Nissan, BMW',
                    '  2. PUNE: Tata Motors, Bajaj, Mercedes',
                    '  3. GURGAON-MANESAR: Maruti Suzuki, Hero',
                    '  4. SANAND (Gujarat): Tata Nano, Ford',
                    '  5. BANGALORE: Toyota',
                    '  6. GREATER NOIDA: Honda, Yamaha',
                    '',
                    '📊 SEGMENTS:',
                    '  • Two-wheelers: Largest segment (Hero, Bajaj, TVS)',
                    '  • Passenger vehicles: Maruti, Hyundai, Tata',
                    '  • Commercial vehicles: Tata, Ashok Leyland',
                    '',
                    '🔌 ELECTRIC VEHICLES:',
                    '  • FAME Scheme: Faster Adoption and Manufacturing of EVs',
                    '  • Target: 30% EV by 2030',
                    '  • PLI Scheme for auto sector',
                    '',
                    '📌 Auto Component industry also significant (ancillary)'
                ]
            },
            {
                title: 'Pharmaceutical Industry',
                icon: '💊',
                points: [
                    '📊 STATUS:',
                    '  • 3rd largest by volume globally',
                    '  • 14th largest by value',
                    '  • "Pharmacy of the World"',
                    '  • 60% of global vaccines, 20% of generic medicines',
                    '',
                    '📍 MAJOR CLUSTERS:',
                    '  1. HYDERABAD: "Bulk Drug Capital" (70% of bulk drugs)',
                    '  2. AHMEDABAD: Zydus, Cadila',
                    '  3. MUMBAI: Headquarters of many companies',
                    '  4. BANGALORE: Biotech hub',
                    '  5. BADDI (Himachal): Tax incentive driven',
                    '  6. SIKKIM: Tax holiday zone',
                    '',
                    '🏢 MAJOR COMPANIES:',
                    '  • Sun Pharma, Dr. Reddy\'s, Cipla, Lupin',
                    '  • Biocon, Serum Institute (vaccines)',
                    '',
                    '📊 EXPORTS:',
                    '  • $24+ billion annually',
                    '  • USA, UK, South Africa major markets',
                    '  • Affordable generics are strength',
                    '',
                    '📌 COVID-19:',
                    '  • India supplied vaccines globally',
                    '  • Vaccine Maitri initiative',
                    '  • Covishield, Covaxin production'
                ]
            },
            {
                title: 'Industrial Regions of India',
                icon: '🗺️',
                points: [
                    '🔴 MUMBAI-PUNE REGION:',
                    '  • India\'s largest industrial belt',
                    '  • Diversified: Engineering, Pharma, IT, Auto, Textiles',
                    '  • Port connectivity (JNPT)',
                    '',
                    '🟠 HOOGHLY REGION (Kolkata):',
                    '  • Traditional heavy industry',
                    '  • Jute, Engineering, Steel',
                    '  • Declining due to aging infrastructure',
                    '',
                    '🟡 BANGALORE-CHENNAI CORRIDOR:',
                    '  • IT, Electronics, Automobiles',
                    '  • Aerospace, Defense',
                    '  • Most dynamic growth',
                    '',
                    '🟢 AHMEDABAD-VADODARA REGION:',
                    '  • Textiles, Chemicals, Petrochem',
                    '  • Refinery belt (Jamnagar)',
                    '  • Pharma cluster',
                    '',
                    '🔵 CHOTA NAGPUR PLATEAU:',
                    '  • Heavy industries: Steel, Coal, Mining',
                    '  • Jamshedpur, Bokaro, Ranchi',
                    '  • Mineral-based',
                    '',
                    '🟣 DELHI-NCR:',
                    '  • IT, Electronics, FMCG',
                    '  • Consumer goods',
                    '  • Service industries',
                    '',
                    '📌 NEW CORRIDORS:',
                    '  • Delhi-Mumbai Industrial Corridor (DMIC)',
                    '  • Chennai-Bangalore Industrial Corridor'
                ]
            }
        ],

        diagrams: [
            {
                title: 'Steel Plants Map of India',
                type: 'map',
                description: 'India map marking: Public sector plants (Bhilai, Rourkela, Durgapur, Bokaro, Vizag, Salem, Burnpur), Private (Jamshedpur, Bellary, Hazira). Color code by ownership.'
            },
            {
                title: 'Industrial Regions Map',
                type: 'map',
                description: 'India map with colored regions: Mumbai-Pune (red), Hooghly (orange), Bangalore-Chennai (yellow), Ahmedabad-Vadodara (green), Chota Nagpur (blue), Delhi-NCR (purple). List key industries in each.'
            },
            {
                title: 'IT Industry Infographic',
                type: 'infographic',
                description: 'Bangalore at center with IT hub statistics. Pie chart of IT exports by city. Timeline of IT industry growth in India.'
            },
            {
                title: 'Textile Industry Distribution',
                type: 'map',
                description: 'India map showing: Cotton textile centers (Mumbai, Ahmedabad, Coimbatore, Kanpur), Jute (Kolkata region), Silk (Mysore, Varanasi), Wool (Punjab, Rajasthan). Mark shift southward.'
            }
        ],

        quickFacts: [
            '⚙️ India: 2nd largest crude steel producer globally',
            '🧵 Textiles: Largest employer in manufacturing (45 million)',
            '💻 Bangalore: "Silicon Valley of India" (40% of IT exports)',
            '🚗 Chennai: "Detroit of India" (automobile hub)',
            '💊 Hyderabad: "Bulk Drug Capital" (70% of bulk drugs)',
            '🏭 Bhilai: Largest public sector steel plant',
            '🏭 TATA Steel Jamshedpur: India\'s first steel plant (1907)',
            '📊 IT industry: $200 billion, 5 million employed',
            '🚗 India: 4th largest auto industry globally',
            '💊 India produces 60% of world\'s vaccines',
            '🧵 Ahmedabad: "Manchester of India"',
            '🏭 Mumbai-Pune: India\'s largest industrial region'
        ],

        upscTraps: [
            {
                trap: 'Bhilai is the largest steel plant in India',
                clarity: 'By PRODUCTION, Bhilai is among largest public sector. But VIZAG Steel Plant has largest CAPACITY. Private sector TATA and JSW are also very large.'
            },
            {
                trap: 'Mumbai is still the textile capital of India',
                clarity: 'Textile industry has SHIFTED southward. Tamil Nadu now has most mills. Mumbai has declined due to high land costs and labor issues.'
            },
            {
                trap: 'IT industry is concentrated only in Bangalore',
                clarity: 'Bangalore is largest (40%) but Hyderabad, Chennai, Pune, NCR are also major. IT is now spreading to tier-2 cities also.'
            },
            {
                trap: 'Heavy industries don\'t need to be near raw materials anymore',
                clarity: 'For STEEL, proximity to raw materials (iron ore, coal) still matters due to WEIGHT loss. Coastal location (import ore) is alternative. IT/Services are footloose, not heavy industries.'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                'Steel: India #2 globally, SAIL (public), Tata/JSW (private)',
                'Textiles: Largest employer, shifted from Mumbai to South India',
                'IT: $200B industry, Bangalore #1, NASSCOM is apex body',
                'Auto: #4 globally, Chennai "Detroit", Maruti largest',
                'Pharma: #3 by volume, Hyderabad bulk drug capital, 60% of vaccines',
                'Industrial regions: Mumbai-Pune, Hooghly, Bangalore-Chennai, Chota Nagpur',
                'Emerging: DMIC corridor, EV industry, Semiconductors'
            ]
        },

        pyqs: [
            {
                year: 2021,
                question: 'Discuss the locational factors responsible for the concentration of iron and steel industry in the Chota Nagpur region.',
                type: 'Mains'
            },
            {
                year: 2020,
                question: 'Which city is known as the Silicon Valley of India?',
                type: 'Prelims',
                options: ['Hyderabad', 'Bangalore', 'Chennai', 'Pune']
            },
            {
                year: 2019,
                question: 'Explain the shift of cotton textile industry from Mumbai to South India.',
                type: 'Mains'
            }
        ]
    },

    // ============================================
    // TOPIC 3: TRANSPORTATION NETWORKS
    // ============================================
    {
        id: 'transportation-india',
        name: 'Transportation Networks',
        icon: '🚂',
        category: 'economic',
        theme: 'industry',
        difficulty: 'medium',
        upscRelevance: 'high',

        mindMap: {
            central: 'Transport in India',
            branches: [
                {
                    name: 'Road Transport',
                    color: '#E74C3C',
                    children: [
                        '63 lakh km network',
                        'National Highways (2%)',
                        'State Highways (3%)',
                        'Golden Quadrilateral'
                    ]
                },
                {
                    name: 'Rail Transport',
                    color: '#3498DB',
                    children: [
                        '4th largest network',
                        '68,000 km routes',
                        '17 Zones',
                        'Dedicated Freight Corridors'
                    ]
                },
                {
                    name: 'Water Transport',
                    color: '#27AE60',
                    children: [
                        '13 major ports',
                        '200+ minor ports',
                        'National Waterways (111)',
                        'Sagarmala project'
                    ]
                },
                {
                    name: 'Air Transport',
                    color: '#9B59B6',
                    children: [
                        '140+ airports',
                        'UDAN scheme (regional)',
                        'Air India privatization',
                        '3rd largest domestic'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Golden Quadrilateral Cities',
                content: 'DMCK: Delhi-Mumbai-Chennai-Kolkata. "Delhi Meets Chennai & Kolkata!" 5,846 km quadrilateral.',
                icon: '🛣️'
            },
            {
                type: 'mnemonic',
                title: 'Major Ports (East Coast)',
                content: 'KVP-CH-P: Kolkata, Vizag, Paradip, Chennai, Haldia (Ennore, Tuticorin). East coast top to bottom.',
                icon: '🚢'
            },
            {
                type: 'mnemonic',
                title: 'Major Ports (West Coast)',
                content: 'KMMNG-C: Kandla, Mumbai, Mormugao, New Mangalore, JNPT, Cochin. West coast top to bottom.',
                icon: '⚓'
            },
            {
                type: 'number',
                title: 'Transport Numbers',
                content: 'Roads: 63 lakh km (2nd longest). Rails: 68,000 km (4th largest). Ports: 13 major. Airports: 140+. Remember: 63-68-13-140!',
                icon: '🔢'
            }
        ],

        conceptBlocks: [
            {
                title: 'Road Transport',
                icon: '🛣️',
                points: [
                    '📊 STATUS:',
                    '  • Total network: 63 lakh km (6.3 million km)',
                    '  • 2nd largest road network globally (after USA)',
                    '  • Carries 65% of freight, 85% of passengers',
                    '',
                    '📋 CLASSIFICATION:',
                    '  • NATIONAL HIGHWAYS: 1.4 lakh km (2% of roads, 40% of traffic)',
                    '  • STATE HIGHWAYS: 1.8 lakh km (3%)',
                    '  • DISTRICT ROADS: 5.5 lakh km',
                    '  • RURAL ROADS: 39 lakh km (PMGSY focus)',
                    '  • URBAN ROADS: 5.5 lakh km',
                    '',
                    '🛣️ MAJOR HIGHWAYS:',
                    '  • NH-44: Delhi-Chennai (longest, 4,112 km)',
                    '  • NH-48: Delhi-Mumbai',
                    '  • NH-27: Gujarat-Assam (East-West Corridor)',
                    '',
                    '🏗️ MAJOR PROJECTS:',
                    '  • GOLDEN QUADRILATERAL: Delhi-Mumbai-Chennai-Kolkata (5,846 km)',
                    '  • NORTH-SOUTH CORRIDOR: Srinagar-Kanyakumari (4,000 km)',
                    '  • EAST-WEST CORRIDOR: Silchar-Porbandar (3,300 km)',
                    '  • BHARATMALA: Phase-wise highway development',
                    '',
                    '🏛️ NHAI: National Highways Authority of India'
                ]
            },
            {
                title: 'Railway Transport',
                icon: '🚂',
                points: [
                    '📊 STATUS:',
                    '  • 4th largest railway network globally',
                    '  • Route length: 68,000+ km',
                    '  • 23 million passengers daily (8.4 billion/year)',
                    '  • Largest employer: 1.2 million employees',
                    '',
                    '📋 ORGANIZATION:',
                    '  • 17 Railway Zones',
                    '  • 70 Divisions',
                    '  • Railway Board (apex body)',
                    '  • Budget merged with Union Budget (2017)',
                    '',
                    '🚆 GAUGE TYPES:',
                    '  • BROAD GAUGE (1.676m): 93% - Standard now',
                    '  • METRE GAUGE (1.000m): Being converted',
                    '  • NARROW GAUGE (0.762m): Hill railways',
                    '  • UNI-GAUGE PROJECT: Converting all to BG',
                    '',
                    '🏗️ MAJOR PROJECTS:',
                    '  • DFC (Dedicated Freight Corridors):',
                    '    - Eastern DFC: Ludhiana-Dankuni (1,337 km)',
                    '    - Western DFC: Delhi-Mumbai (1,504 km)',
                    '  • BULLET TRAIN: Mumbai-Ahmedabad (508 km, Japan)',
                    '  • VANDE BHARAT: Semi-high-speed trains',
                    '',
                    '📌 HERITAGE RAILWAYS (UNESCO):',
                    '  • Darjeeling Himalayan Railway',
                    '  • Nilgiri Mountain Railway',
                    '  • Kalka-Shimla Railway'
                ]
            },
            {
                title: 'Water Transport',
                icon: '🚢',
                points: [
                    '📊 STATUS:',
                    '  • 95% of trade by volume (sea)',
                    '  • Cost-effective for bulk goods',
                    '  • Under-utilized potential',
                    '',
                    '⚓ MAJOR PORTS (13):',
                    '',
                    '🌊 EAST COAST (6):',
                    '  1. Kolkata (riverine) + Haldia',
                    '  2. Paradip (Odisha) - Iron ore',
                    '  3. Visakhapatnam - Oil, Iron ore',
                    '  4. Chennai - Containers, Cars',
                    '  5. Ennore (Tamil Nadu) - Coal',
                    '  6. Tuticorin (Tamil Nadu)',
                    '',
                    '🌊 WEST COAST (7):',
                    '  1. Kandla (Gujarat) - Oil, Grain',
                    '  2. Mumbai - Oldest, diversified',
                    '  3. JNPT/Nhava Sheva - Largest container',
                    '  4. Mormugao (Goa) - Iron ore export',
                    '  5. New Mangalore - Oil, Coffee',
                    '  6. Cochin - Natural harbor',
                    '  7. Deendayal Port (Kandla renamed)',
                    '',
                    '🏗️ SAGARMALA PROJECT:',
                    '  • Port-led development',
                    '  • 600+ projects identified',
                    '  • Port modernization',
                    '  • Coastal economic zones'
                ]
            },
            {
                title: 'Inland Waterways',
                icon: '🛶',
                points: [
                    '📊 STATUS:',
                    '  • 14,500 km navigable waterways',
                    '  • Only 2% of freight (very low)',
                    '  • Huge untapped potential',
                    '',
                    '🏛️ IWAI: Inland Waterways Authority of India',
                    '',
                    '📋 NATIONAL WATERWAYS (111 declared):',
                    '',
                    '🔵 NW-1: Ganga-Bhagirathi-Hooghly',
                    '  • Allahabad to Haldia (1,620 km)',
                    '  • Longest and most important',
                    '  • Jal Marg Vikas Project',
                    '',
                    '🔵 NW-2: Brahmaputra',
                    '  • Sadiya to Dhubri (891 km)',
                    '',
                    '🔵 NW-3: West Coast Canal + Champakara',
                    '  • Kollam to Kottapuram (205 km)',
                    '  • Kerala backwaters',
                    '',
                    '🔵 NW-4: Krishna-Godavari rivers + canals',
                    '🔵 NW-5: Brahmani-Mahanadi rivers',
                    '',
                    '📌 111 waterways declared in 2016 (National Waterways Act)',
                    '',
                    '🎯 CHALLENGES:',
                    '  • Seasonal flow variations',
                    '  • Silting, depth issues',
                    '  • Infrastructure gaps'
                ]
            },
            {
                title: 'Air Transport',
                icon: '✈️',
                points: [
                    '📊 STATUS:',
                    '  • 3rd largest domestic aviation market',
                    '  • 140+ airports',
                    '  • 200+ million passengers/year (pre-COVID)',
                    '',
                    '✈️ MAJOR AIRPORTS:',
                    '  1. IGI Delhi: Busiest',
                    '  2. Mumbai: 2nd busiest',
                    '  3. Bengaluru: Kempegowda International',
                    '  4. Hyderabad: Rajiv Gandhi International',
                    '  5. Chennai, Kolkata',
                    '',
                    '📋 CLASSIFICATION:',
                    '  • International airports: 30+',
                    '  • Domestic airports: 110+',
                    '  • AAI managed: 125 airports',
                    '  • Private: Delhi, Mumbai, Bengaluru, Hyderabad',
                    '',
                    '🏛️ AAI: Airports Authority of India',
                    '',
                    '🎯 UDAN SCHEME (Ude Desh ka Aam Nagrik):',
                    '  • Regional connectivity',
                    '  • Subsidized fares (₹2,500 for 1 hour)',
                    '  • Unserved/underserved airports',
                    '  • 400+ routes operationalized',
                    '',
                    '✈️ AIRLINES:',
                    '  • IndiGo: Largest market share (55%+)',
                    '  • Air India: Privatized (TATA, 2022)',
                    '  • SpiceJet, GoFirst, Vistara'
                ]
            },
            {
                title: 'Pipeline Transport',
                icon: '🔌',
                points: [
                    '📊 STATUS:',
                    '  • Most efficient for liquids/gases',
                    '  • 18,000+ km pipeline network',
                    '  • Crude oil, petroleum products, natural gas',
                    '',
                    '🛢️ CRUDE OIL PIPELINES:',
                    '  • Naharkatia-Noonmati-Barauni (Assam-Bihar)',
                    '  • Salaya-Mathura (Gujarat-UP)',
                    '  • Mumbai High-Mumbai',
                    '',
                    '⛽ PRODUCT PIPELINES:',
                    '  • Mathura-Delhi',
                    '  • Chennai-Trichy-Madurai',
                    '  • Multiple POL pipelines',
                    '',
                    '💨 NATURAL GAS PIPELINES:',
                    '  • HBJ: Hazira-Bijaipur-Jagdishpur (2,700 km)',
                    '  • Most important gas pipeline',
                    '  • GAIL operates most pipelines',
                    '',
                    '🏛️ OPERATORS:',
                    '  • Indian Oil Corporation (IOC)',
                    '  • Hindustan Petroleum (HPCL)',
                    '  • GAIL (Gas Authority of India)',
                    '  • Reliance (private)',
                    '',
                    '📌 ADVANTAGES:',
                    '  • Energy efficient',
                    '  • All-weather operation',
                    '  • Minimal environmental impact',
                    '  • Low operating cost'
                ]
            }
        ],

        diagrams: [
            {
                title: 'Golden Quadrilateral Map',
                type: 'map',
                description: 'India map showing Golden Quadrilateral connecting Delhi-Mumbai-Chennai-Kolkata (quadrilateral). Also show NS Corridor (Srinagar-Kanyakumari) and EW Corridor (Silchar-Porbandar).'
            },
            {
                title: 'Major Ports Map',
                type: 'map',
                description: 'India coastal map marking 13 major ports: West coast (Kandla, Mumbai, JNPT, Mormugao, New Mangalore, Cochin), East coast (Kolkata, Haldia, Paradip, Vizag, Chennai, Ennore, Tuticorin). Show cargo type.'
            },
            {
                title: 'National Waterways Map',
                type: 'map',
                description: 'India map showing major National Waterways: NW-1 (Ganga, blue), NW-2 (Brahmaputra), NW-3 (Kerala coast), NW-4 (Krishna-Godavari), NW-5 (Mahanadi). Show length and importance.'
            },
            {
                title: 'DFC Routes Map',
                type: 'map',
                description: 'India map showing Dedicated Freight Corridors: Eastern DFC (Ludhiana-Dankuni, green), Western DFC (Delhi-Mumbai, blue). Mark key industrial nodes connected.'
            }
        ],

        quickFacts: [
            '🛣️ India road network: 63 lakh km (2nd largest globally)',
            '🚂 Railways: 68,000 km, 4th largest, 23 million passengers/day',
            '⚓ Major ports: 13 (7 West coast, 6 East coast)',
            '✈️ Airports: 140+, India is 3rd largest domestic market',
            '🛣️ Golden Quadrilateral: 5,846 km (Delhi-Mumbai-Chennai-Kolkata)',
            '🛣️ NH-44: Longest highway (Delhi-Chennai, 4,112 km)',
            '🚢 JNPT: Largest container port',
            '🛤️ DFC: Eastern (1,337 km) + Western (1,504 km)',
            '🚄 Bullet Train: Mumbai-Ahmedabad (508 km, Japan collaboration)',
            '🛶 NW-1: Ganga system (1,620 km, most important)',
            '✈️ IndiGo: 55%+ market share',
            '🔌 HBJ Pipeline: Most important gas pipeline (2,700 km)'
        ],

        upscTraps: [
            {
                trap: 'India has the largest road network in the world',
                clarity: 'India has 2nd largest (after USA). But National Highways are only 2% of roads carrying 40% of traffic. Quality is the issue, not length.'
            },
            {
                trap: 'Mumbai is the largest port of India',
                clarity: 'By CARGO volume, JNPT/Nhava Sheva handles most containers. Kandla handles most bulk cargo. Mumbai port is old, space-constrained.'
            },
            {
                trap: 'Indian Railways is most efficient for freight',
                clarity: 'Railways carry only 30% of freight (roads 65%). But for BULK goods over LONG distances, railways are more efficient. DFC aims to improve this.'
            },
            {
                trap: 'All National Waterways are operational',
                clarity: '111 NWs declared in 2016, but only few are actually operational. NW-1 (Ganga) is most developed. Most need infrastructure development.'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                'Roads: 63 lakh km (#2 global), NH 2% roads carry 40% traffic',
                'Railways: 68,000 km (#4), 17 zones, DFC for freight',
                'Ports: 13 major (JNPT largest container, Kandla bulk)',
                'Waterways: NW-1 (Ganga) most important, 111 NWs declared',
                'Airports: 140+, Delhi busiest, UDAN for regional connectivity',
                'Golden Quadrilateral: 5,846 km, Delhi-Mumbai-Chennai-Kolkata',
                'Bullet Train: Mumbai-Ahmedabad (508 km)'
            ]
        },

        pyqs: [
            {
                year: 2021,
                question: 'Discuss the significance of Sagarmala project for India\'s port-led development.',
                type: 'Mains'
            },
            {
                year: 2020,
                question: 'How many major ports are there in India?',
                type: 'Prelims',
                options: ['10', '12', '13', '15']
            },
            {
                year: 2019,
                question: 'Examine the potential of inland waterways for freight movement in India.',
                type: 'Mains'
            }
        ]
    },

    // ============================================
    // TOPIC 4: TRADE (INTERNAL & EXTERNAL)
    // ============================================
    {
        id: 'trade-india',
        name: 'Trade: Internal & External',
        icon: '📦',
        category: 'economic',
        theme: 'industry',
        difficulty: 'medium',
        upscRelevance: 'medium',

        mindMap: {
            central: 'India\'s Trade',
            branches: [
                {
                    name: 'Exports',
                    color: '#27AE60',
                    children: [
                        'Petroleum products',
                        'Gems & Jewelry',
                        'Pharma, Chemicals',
                        'IT Services'
                    ]
                },
                {
                    name: 'Imports',
                    color: '#E74C3C',
                    children: [
                        'Crude Petroleum (#1)',
                        'Gold',
                        'Electronics',
                        'Coal, Machinery'
                    ]
                },
                {
                    name: 'Trade Partners',
                    color: '#3498DB',
                    children: [
                        'USA (largest)',
                        'China (imports)',
                        'UAE',
                        'Saudi Arabia'
                    ]
                },
                {
                    name: 'Trade Balance',
                    color: '#F39C12',
                    children: [
                        'Merchandise deficit',
                        'Services surplus',
                        'Current Account',
                        'FDI inflows'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Top Exports',
                content: 'PGP-TC: Petroleum products, Gems, Pharma, Textiles, Chemicals. "PGP Team Competes!" India exports refined petroleum!',
                icon: '📤'
            },
            {
                type: 'mnemonic',
                title: 'Top Imports',
                content: 'CGEM: Crude oil, Gold, Electronics, Machinery. "Can\'t Get Enough Materials!" Crude is #1 import by far.',
                icon: '📥'
            },
            {
                type: 'comparison',
                title: 'Trade Partners',
                content: 'USA: Largest OVERALL partner. CHINA: Largest IMPORT source. UAE: Major for OIL imports. Trade deficit = Imports > Exports (India has deficit with China)',
                icon: '🤝'
            },
            {
                type: 'story',
                title: 'Services vs Goods Trade',
                content: 'India has DEFICIT in goods (imports more than exports). But SURPLUS in services (IT exports, tourism). Services help balance the books!',
                icon: '⚖️'
            }
        ],

        conceptBlocks: [
            {
                title: 'India\'s Trade Overview',
                icon: '📊',
                points: [
                    '📊 TRADE STATISTICS (2022-23):',
                    '  • Total Trade: ~$1.5 trillion',
                    '  • Exports: ~$770 billion (goods + services)',
                    '  • Imports: ~$900 billion',
                    '  • Trade Deficit: ~$130 billion',
                    '',
                    '📦 MERCHANDISE (Goods) TRADE:',
                    '  • Exports: $450 billion',
                    '  • Imports: $715 billion',
                    '  • Deficit: ~$265 billion',
                    '',
                    '💻 SERVICES TRADE:',
                    '  • Exports: $320 billion',
                    '  • Imports: $175 billion',
                    '  • SURPLUS: ~$145 billion',
                    '  • IT services: Major contributor',
                    '',
                    '📈 TREND:',
                    '  • Trade growing rapidly',
                    '  • FTAs with UAE, Australia (recent)',
                    '  • "Make in India" for import substitution',
                    '  • PLI schemes for manufacturing'
                ]
            },
            {
                title: 'Major Exports',
                icon: '📤',
                points: [
                    '📋 TOP EXPORTS (Goods):',
                    '',
                    '🛢️ PETROLEUM PRODUCTS (18%):',
                    '  • Refined petroleum (Jamnagar refinery)',
                    '  • NOT crude oil (India imports crude)',
                    '  • Value-added export',
                    '',
                    '💎 GEMS & JEWELRY (12%):',
                    '  • Processed diamonds (Surat hub)',
                    '  • Gold jewelry',
                    '  • Import raw, export processed',
                    '',
                    '💊 PHARMACEUTICALS (5%):',
                    '  • Generic medicines',
                    '  • Vaccines (COVID boost)',
                    '  • "Pharmacy of the World"',
                    '',
                    '🧵 TEXTILES & GARMENTS:',
                    '  • Cotton textiles',
                    '  • Ready-made garments',
                    '  • Traditional handicrafts',
                    '',
                    '🔧 OTHER KEY EXPORTS:',
                    '  • Chemicals',
                    '  • Iron & Steel',
                    '  • Rice (largest exporter)',
                    '  • Marine products',
                    '  • Automobiles & parts',
                    '  • Spices'
                ]
            },
            {
                title: 'Major Imports',
                icon: '📥',
                points: [
                    '📋 TOP IMPORTS:',
                    '',
                    '🛢️ CRUDE PETROLEUM (25-30%):',
                    '  • Largest import item',
                    '  • 85% of oil needs imported',
                    '  • OPEC countries major source',
                    '',
                    '🥇 GOLD (8-10%):',
                    '  • 2nd largest import',
                    '  • High domestic demand (jewelry, investment)',
                    '  • Import duty high (to discourage)',
                    '',
                    '📱 ELECTRONICS (12%):',
                    '  • Mobile phones, laptops',
                    '  • Components',
                    '  • China major source',
                    '  • PLI to reduce imports',
                    '',
                    '⚙️ MACHINERY:',
                    '  • Industrial machinery',
                    '  • Power equipment',
                    '  • Capital goods',
                    '',
                    '⚫ OTHER KEY IMPORTS:',
                    '  • Coal',
                    '  • Edible oils (60% imported)',
                    '  • Chemicals',
                    '  • Fertilizers',
                    '  • Copper, precious metals'
                ]
            },
            {
                title: 'Major Trading Partners',
                icon: '🤝',
                points: [
                    '📊 TOP TRADING PARTNERS (2022-23):',
                    '',
                    '🇺🇸 USA:',
                    '  • Largest overall partner',
                    '  • Trade: $120+ billion',
                    '  • India has SURPLUS with USA',
                    '  • IT services major export',
                    '',
                    '🇨🇳 CHINA:',
                    '  • Largest IMPORT source',
                    '  • Trade: $115 billion',
                    '  • India has DEFICIT ~$80 billion!',
                    '  • Electronics, machinery imports',
                    '',
                    '🇦🇪 UAE:',
                    '  • 3rd largest partner',
                    '  • Trade: $85 billion',
                    '  • Oil imports, gems exports',
                    '  • FTA signed 2022 (CEPA)',
                    '',
                    '🇸🇦 SAUDI ARABIA:',
                    '  • Major oil supplier',
                    '  • Trade: $55 billion',
                    '',
                    '📍 OTHER MAJOR:',
                    '  • Iraq, Singapore, Hong Kong',
                    '  • Germany, UK, Indonesia',
                    '',
                    '📌 FTAs: ASEAN, Japan, Korea, UAE, Australia'
                ]
            },
            {
                title: 'Internal Trade',
                icon: '🏪',
                points: [
                    '📊 INTERNAL TRADE:',
                    '  • Larger than external trade',
                    '  • Inter-state trade significant',
                    '  • GST: Unified indirect tax (2017)',
                    '',
                    '🏪 STRUCTURE:',
                    '  • Organized retail: 12%',
                    '  • Unorganized: 88%',
                    '  • E-commerce growing rapidly',
                    '',
                    '📋 TYPES:',
                    '  • WHOLESALE: B2B, mandis, markets',
                    '  • RETAIL: B2C, shops, malls',
                    '  • E-COMMERCE: Amazon, Flipkart',
                    '',
                    '🛒 AGRICULTURAL MARKETING:',
                    '  • APMC (Agricultural Produce Marketing Committee)',
                    '  • Mandis for wholesale',
                    '  • e-NAM for transparency',
                    '',
                    '🏛️ REFORMS:',
                    '  • GST: One nation, one tax',
                    '  • E-way bill: Movement tracking',
                    '  • Open Network for Digital Commerce (ONDC)',
                    '  • FDI in retail (multi-brand)',
                    '',
                    '📌 CHALLENGES:',
                    '  • Poor infrastructure',
                    '  • Multiple intermediaries',
                    '  • Cold chain gaps',
                    '  • Inter-state barriers reducing'
                ]
            },
            {
                title: 'Trade Policies & SEZs',
                icon: '📜',
                points: [
                    '📜 FOREIGN TRADE POLICY 2023:',
                    '  • Validity: 2023-2028',
                    '  • Export target: $2 trillion by 2030',
                    '  • Focus: Districts as export hubs',
                    '  • E-commerce exports promotion',
                    '',
                    '🏭 SPECIAL ECONOMIC ZONES (SEZs):',
                    '  • Tax-free enclaves for exports',
                    '  • 268 operational SEZs',
                    '  • Major: Kandla, SEEPZ (Mumbai), Noida',
                    '  • IT SEZs most successful',
                    '',
                    '📋 EXPORT PROMOTION SCHEMES:',
                    '  • RoDTEP: Remission of Duties and Taxes',
                    '  • MEIS: Merchandise Exports from India',
                    '  • EPCG: Export Promotion Capital Goods',
                    '',
                    '🔄 IMPORT SUBSTITUTION:',
                    '  • PLI (Production Linked Incentive)',
                    '  • Make in India',
                    '  • Atmanirbhar Bharat',
                    '  • Focus: Electronics, pharma, solar',
                    '',
                    '📌 FTAs (Free Trade Agreements):',
                    '  • Existing: ASEAN, Japan, Korea',
                    '  • Recent: UAE (CEPA), Australia (ECTA)',
                    '  • Negotiating: UK, EU, Canada'
                ]
            }
        ],

        diagrams: [
            {
                title: 'Trade Balance Infographic',
                type: 'infographic',
                description: 'Show: Goods exports (bar), Goods imports (bar, larger), Services exports (bar), Services imports (bar, smaller). Calculate deficits/surpluses. Overall trade balance arrow.'
            },
            {
                title: 'Top Export-Import Items',
                type: 'comparison-chart',
                description: 'Two columns: Exports (Petroleum products, Gems, Pharma, Textiles, Chemicals) vs Imports (Crude oil, Gold, Electronics, Machinery, Coal). Show percentages.'
            },
            {
                title: 'Major Trade Partners Map',
                type: 'map',
                description: 'World map with arrows to/from India: USA (largest overall), China (largest import source, deficit), UAE, Saudi Arabia. Color code surplus/deficit partners.'
            },
            {
                title: 'SEZ Distribution Map',
                type: 'map',
                description: 'India map showing major SEZs: Kandla, SEEPZ Mumbai, Noida, Chennai, Hyderabad IT SEZs. Mark by type (IT, Manufacturing, Multi-product).'
            }
        ],

        quickFacts: [
            '📦 Total trade: ~$1.5 trillion (2022-23)',
            '📤 Exports: ~$770 billion (goods + services)',
            '📥 Imports: ~$900 billion',
            '🛢️ Crude oil: Largest import (25-30%)',
            '💎 Petroleum products: Largest export (18%)',
            '🇺🇸 USA: Largest overall trading partner',
            '🇨🇳 China: Largest import source ($80B deficit!)',
            '💻 Services surplus: ~$145 billion (IT major)',
            '🏭 SEZs: 268 operational in India',
            '📜 FTP 2023 target: $2 trillion exports by 2030',
            '🥇 Gold: 2nd largest import item',
            '🍚 Rice: India is largest exporter globally'
        ],

        upscTraps: [
            {
                trap: 'India exports crude oil',
                clarity: 'India IMPORTS crude oil (85% of needs). But India EXPORTS refined PETROLEUM PRODUCTS (Jamnagar refinery). Big difference!'
            },
            {
                trap: 'China is India\'s largest trading partner',
                clarity: 'USA is largest OVERALL partner. China is largest IMPORT source. India has massive trade DEFICIT with China (~$80 billion).'
            },
            {
                trap: 'India has overall trade surplus',
                clarity: 'India has GOODS trade deficit (~$265 billion). SERVICES surplus (~$145 billion) reduces overall deficit to ~$130 billion. Still a deficit!'
            },
            {
                trap: 'SEZs are only for manufacturing',
                clarity: 'IT/ITeS SEZs are most successful in India! Services SEZs (IT parks in Bangalore, Hyderabad) export significant services.'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                'Trade: $1.5 trillion, Goods deficit + Services surplus = Overall deficit',
                'Top exports: Petroleum products, Gems, Pharma, Textiles, Rice',
                'Top imports: Crude oil (25%), Gold, Electronics, Machinery',
                'Partners: USA (#1 overall), China (#1 imports, big deficit), UAE',
                'Services: $145B surplus (IT exports key)',
                'SEZs: 268 operational, IT SEZs most successful',
                'FTAs: ASEAN, Japan, Korea, UAE (2022), Australia (2022)'
            ]
        },

        pyqs: [
            {
                year: 2021,
                question: 'Discuss India\'s trade deficit with China and measures to address it.',
                type: 'Mains'
            },
            {
                year: 2020,
                question: 'What is India\'s largest export item?',
                type: 'Prelims',
                options: ['Gems & Jewelry', 'Petroleum Products', 'Textiles', 'IT Services']
            },
            {
                year: 2019,
                question: 'Explain the role of SEZs in promoting exports from India.',
                type: 'Mains'
            }
        ]
    },

    // ============================================
    // TOPIC 5: REGIONAL DEVELOPMENT
    // ============================================
    {
        id: 'regional-development',
        name: 'Regional Development',
        icon: '🗺️',
        category: 'economic',
        theme: 'industry',
        difficulty: 'medium',
        upscRelevance: 'high',

        mindMap: {
            central: 'Regional Development',
            branches: [
                {
                    name: 'Regional Disparities',
                    color: '#E74C3C',
                    children: [
                        'Developed vs Backward',
                        'Urban-Rural divide',
                        'BIMARU states',
                        'North-South gap'
                    ]
                },
                {
                    name: 'Indicators',
                    color: '#3498DB',
                    children: [
                        'Per capita income',
                        'HDI, SDG Index',
                        'Industrial development',
                        'Infrastructure'
                    ]
                },
                {
                    name: 'Programs',
                    color: '#27AE60',
                    children: [
                        'Aspirational Districts',
                        'NITI Aayog initiatives',
                        'Backward Region Grants',
                        'Industrial corridors'
                    ]
                },
                {
                    name: 'Special Regions',
                    color: '#9B59B6',
                    children: [
                        'North East (DoNER)',
                        'Hill states',
                        'Tribal areas',
                        'Border areas'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'BIMARU States',
                content: 'BIMARU = Bihar, Madhya Pradesh (now includes Jharkhand, CG), Rajasthan, Uttar Pradesh. "BIMARU" means "sick" in Hindi - underdeveloped states!',
                icon: '🏥'
            },
            {
                type: 'mnemonic',
                title: 'Developed States',
                content: 'KMGT: Kerala, Maharashtra, Gujarat, Tamil Nadu (high per capita income, better indicators). "Kings Make Good Things!"',
                icon: '👑'
            },
            {
                type: 'comparison',
                title: 'Aspirational vs Developed Districts',
                content: 'Aspirational = 112 most BACKWARD districts (need catching up). Focus on: Health, Education, Agriculture, Infrastructure. Started by NITI Aayog 2018.',
                icon: '📈'
            },
            {
                type: 'story',
                title: 'Regional Imbalance Story',
                content: 'India has two economies: Coastal/Southern states (growing fast like developed world) vs Hinterland/BIMARU (lagging behind). Goal: Balanced development for all!',
                icon: '⚖️'
            }
        ],

        conceptBlocks: [
            {
                title: 'Regional Disparities in India',
                icon: '📊',
                points: [
                    '📊 INDICATORS OF DISPARITY:',
                    '',
                    '💰 PER CAPITA INCOME (GSDP):',
                    '  • HIGHEST: Goa (₹5.65 lakh), Delhi',
                    '  • HIGH: Sikkim, Haryana, Karnataka, Gujarat',
                    '  • LOWEST: Bihar (₹54,000), Jharkhand, UP',
                    '  • Gap: 10x between highest and lowest!',
                    '',
                    '📈 HDI (Human Development Index):',
                    '  • Top: Kerala (0.78), Delhi, Goa',
                    '  • Bottom: Bihar (0.57), Jharkhand',
                    '  • India average: 0.64',
                    '',
                    '🏭 INDUSTRIALIZATION:',
                    '  • Maharashtra, Gujarat, TN: Industrial leaders',
                    '  • Bihar, UP, Odisha: Low industrialization',
                    '',
                    '🏥 HEALTH INDICATORS:',
                    '  • IMR: Kerala (7) vs MP (48)',
                    '  • Life expectancy: Kerala (75) vs Chhattisgarh (64)',
                    '',
                    '📚 EDUCATION:',
                    '  • Literacy: Kerala (94%) vs Bihar (62%)',
                    '  • School dropout rates vary widely'
                ]
            },
            {
                title: 'Types of Regional Imbalance',
                icon: '⚖️',
                points: [
                    '📍 STATE-LEVEL IMBALANCE:',
                    '  • Developed: Maharashtra, Gujarat, TN, Karnataka, Kerala',
                    '  • Backward: Bihar, UP, MP, Rajasthan, Odisha',
                    '  • BIMARU coined by Ashish Bose (1980s)',
                    '',
                    '📍 INTRA-STATE IMBALANCE:',
                    '  • Maharashtra: Mumbai-Pune vs Vidarbha',
                    '  • Karnataka: Bangalore vs North Karnataka',
                    '  • UP: Western UP vs Bundelkhand',
                    '  • Even developed states have backward regions!',
                    '',
                    '📍 URBAN-RURAL DIVIDE:',
                    '  • Urban income 3x rural income',
                    '  • Better services in cities',
                    '  • Migration to cities',
                    '',
                    '📍 SECTORAL IMBALANCE:',
                    '  • Services: 55% of GDP, 30% of employment',
                    '  • Agriculture: 18% of GDP, 42% of employment',
                    '  • Industry: 27% of GDP, 28% of employment',
                    '',
                    '📍 SPECIAL REGIONS:',
                    '  • North East: Isolated, underdeveloped',
                    '  • Hill states: Terrain challenges',
                    '  • Tribal areas: Low development indicators'
                ]
            },
            {
                title: 'Causes of Regional Disparity',
                icon: '🔍',
                points: [
                    '🌍 GEOGRAPHICAL FACTORS:',
                    '  • Terrain: Mountains, deserts (access issues)',
                    '  • Climate: Monsoon variability',
                    '  • Resources: Mineral-rich vs resource-poor',
                    '  • Location: Coastal vs landlocked',
                    '',
                    '📜 HISTORICAL FACTORS:',
                    '  • Colonial neglect of certain regions',
                    '  • Early industrialization in some areas (Mumbai, Kolkata)',
                    '  • Feudal land systems in some regions',
                    '',
                    '💼 ECONOMIC FACTORS:',
                    '  • Infrastructure gaps (roads, power)',
                    '  • Lack of investment (private and public)',
                    '  • Skill gaps in workforce',
                    '  • Agricultural backwardness',
                    '',
                    '👥 DEMOGRAPHIC FACTORS:',
                    '  • High population growth (BIMARU)',
                    '  • Low literacy, education',
                    '  • Social structures (caste, gender)',
                    '',
                    '🏛️ GOVERNANCE FACTORS:',
                    '  • Weak institutions',
                    '  • Corruption',
                    '  • Policy implementation gaps',
                    '  • Law and order issues'
                ]
            },
            {
                title: 'Aspirational Districts Program',
                icon: '🎯',
                points: [
                    '📖 ABOUT:',
                    '  • Launched: January 2018',
                    '  • By: NITI Aayog',
                    '  • Districts: 112 most backward districts',
                    '  • Focus: Rapid, visible transformation',
                    '',
                    '📊 SELECTION CRITERIA:',
                    '  • Composite index of indicators',
                    '  • Health & Nutrition (30%)',
                    '  • Education (30%)',
                    '  • Agriculture & Water Resources (20%)',
                    '  • Financial Inclusion & Skill Development (10%)',
                    '  • Basic Infrastructure (10%)',
                    '',
                    '📍 STATE-WISE DISTRIBUTION:',
                    '  • Bihar: 13 districts (highest)',
                    '  • Jharkhand: 19 districts',
                    '  • UP: 8 districts',
                    '  • MP: 8 districts',
                    '  • Chhattisgarh: 10 districts',
                    '',
                    '🔧 IMPLEMENTATION:',
                    '  • Central officer assigned to each district',
                    '  • Monthly ranking on Champions of Change',
                    '  • Convergence of schemes',
                    '  • Real-time monitoring',
                    '',
                    '📈 OUTCOMES:',
                    '  • Significant improvement in indicators',
                    '  • Competition among districts',
                    '  • Transparency through dashboards'
                ]
            },
            {
                title: 'Programs for Backward Regions',
                icon: '🏛️',
                points: [
                    '🏔️ NORTH EAST DEVELOPMENT:',
                    '  • DoNER: Ministry of Development of North Eastern Region',
                    '  • 10% budgetary allocation for NE',
                    '  • NEC: North Eastern Council',
                    '  • Special Category Status (until GST)',
                    '  • Look East → Act East Policy',
                    '',
                    '🏔️ HILL AREA DEVELOPMENT:',
                    '  • Special provisions for hill states',
                    '  • Article 371 special provisions',
                    '  • Infrastructure focus',
                    '',
                    '👥 TRIBAL DEVELOPMENT:',
                    '  • 5th Schedule (PESA Act)',
                    '  • 6th Schedule (NE autonomous councils)',
                    '  • Tribal Sub-Plan',
                    '  • Van Bandhu Kalyan Yojana',
                    '',
                    '🛣️ INDUSTRIAL CORRIDORS:',
                    '  • DMIC: Delhi-Mumbai Industrial Corridor',
                    '  • CBIC: Chennai-Bangalore Industrial Corridor',
                    '  • AKIC: Amritsar-Kolkata Industrial Corridor',
                    '  • Spread development to backward regions',
                    '',
                    '📌 BACKWARD REGIONS GRANT FUND:',
                    '  • 272 backward districts covered',
                    '  • Merged with other schemes now'
                ]
            },
            {
                title: 'NITI Aayog Role',
                icon: '🏛️',
                points: [
                    '📖 ABOUT NITI AAYOG:',
                    '  • Replaced Planning Commission (2015)',
                    '  • National Institution for Transforming India',
                    '  • Think tank + Advisory role',
                    '  • Cooperative federalism focus',
                    '',
                    '🎯 REGIONAL DEVELOPMENT INITIATIVES:',
                    '',
                    '📊 SDG INDIA INDEX:',
                    '  • Annual ranking of states on SDGs',
                    '  • Healthy competition',
                    '  • Kerala, TN top performers',
                    '',
                    '🏥 ASPIRATIONAL DISTRICTS:',
                    '  • 112 districts program',
                    '  • Monthly ranking',
                    '  • Real-time monitoring',
                    '',
                    '🏛️ STATE INDICES:',
                    '  • School Education Quality Index',
                    '  • Health Index',
                    '  • Innovation Index',
                    '  • Export Preparedness Index',
                    '',
                    '📝 POLICY RECOMMENDATIONS:',
                    '  • Three-year Action Agendas',
                    '  • 15-year Vision Document',
                    '  • Model laws for states',
                    '',
                    '📌 COOPERATIVE FEDERALISM:',
                    '  • State participation in planning',
                    '  • Governing Council (all CMs)',
                    '  • Regional councils'
                ]
            }
        ],

        diagrams: [
            {
                title: 'Regional Disparity Map',
                type: 'map',
                description: 'India map color-coded by per capita income: Dark green (Goa, Delhi, Haryana - high), Light green (TN, Gujarat, Maharashtra - medium-high), Yellow (most states - medium), Red (Bihar, UP, Jharkhand - low).'
            },
            {
                title: 'Aspirational Districts Map',
                type: 'map',
                description: 'India map highlighting 112 Aspirational Districts with concentration in: Bihar (13), Jharkhand (19), UP, MP, Chhattisgarh, Odisha. Show clusters.'
            },
            {
                title: 'Industrial Corridors Map',
                type: 'map',
                description: 'India map showing industrial corridors: DMIC (Delhi-Mumbai), CBIC (Chennai-Bangalore), AKIC (Amritsar-Kolkata), BMEC (Bangalore-Mumbai), ECEC (East Coast). Show nodes.'
            },
            {
                title: 'Development Indicators Comparison',
                type: 'comparison-chart',
                description: 'Bar chart comparing: Per capita income, HDI, Literacy, IMR for Kerala, Maharashtra, Bihar, UP. Show stark differences visually.'
            }
        ],

        quickFacts: [
            '📊 Per capita income gap: 10x (Goa vs Bihar)',
            '🏆 Highest HDI: Kerala (0.78), Lowest: Bihar (0.57)',
            '🏥 BIMARU: Bihar, MP, Rajasthan, UP (backward states)',
            '🎯 Aspirational Districts: 112 (NITI Aayog program)',
            '📈 Bihar has 13 Aspirational Districts (highest)',
            '🏔️ DoNER: Ministry for NE development',
            '📊 SDG India Index: Kerala tops, Bihar bottom',
            '🛣️ DMIC: Delhi-Mumbai Industrial Corridor (flagship)',
            '⚖️ Urban income is 3x rural income',
            '📚 Literacy gap: Kerala 94% vs Bihar 62%',
            '👶 IMR gap: Kerala 7 vs MP 48 (per 1000)',
            '🏛️ NITI Aayog replaced Planning Commission (2015)'
        ],

        upscTraps: [
            {
                trap: 'BIMARU states are now developed',
                clarity: 'BIMARU states still lag significantly. Some improvement in MP, but Bihar, UP still have lowest per capita income, HDI. Gap has reduced but not eliminated.'
            },
            {
                trap: 'Developed states have no backward regions',
                clarity: 'INTRA-STATE disparities exist! Maharashtra has backward Vidarbha, Karnataka has backward North Karnataka, TN has backward western districts.'
            },
            {
                trap: 'Aspirational Districts are only in BIMARU states',
                clarity: '112 districts are spread across many states including Maharashtra, Andhra, Odisha, Assam, etc. Not limited to BIMARU.'
            },
            {
                trap: 'Planning Commission still exists',
                clarity: 'Planning Commission was REPLACED by NITI Aayog in 2015. NITI Aayog is advisory, not mandatory planning. Focus on cooperative federalism.'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                'Disparities: Per capita income varies 10x (Goa vs Bihar)',
                'BIMARU: Bihar, MP, Rajasthan, UP (still backward)',
                'Developed: Kerala, Maharashtra, Gujarat, TN, Karnataka',
                'Aspirational Districts: 112 most backward, NITI Aayog program',
                'NE Development: DoNER ministry, 10% budget allocation',
                'Industrial corridors: DMIC (Delhi-Mumbai) flagship',
                'NITI Aayog: SDG Index, State rankings, cooperative federalism'
            ]
        },

        pyqs: [
            {
                year: 2021,
                question: 'Discuss the regional disparities in India and the measures taken to address them.',
                type: 'Mains'
            },
            {
                year: 2020,
                question: 'What is Aspirational Districts Programme? Explain its objectives.',
                type: 'Mains'
            },
            {
                year: 2019,
                question: 'Examine the role of NITI Aayog in India\'s development planning.',
                type: 'Mains'
            }
        ]
    },

    // ============================================
    // TOPIC 6: SPECIAL ECONOMIC ZONES
    // ============================================
    {
        id: 'special-economic-zones',
        name: 'Special Economic Zones (SEZs)',
        icon: '🏭',
        category: 'economic',
        theme: 'industry',
        difficulty: 'easy',
        upscRelevance: 'medium',

        mindMap: {
            central: 'SEZs',
            branches: [
                {
                    name: 'Concept',
                    color: '#3498DB',
                    children: [
                        'Tax-free enclaves',
                        'Export-oriented',
                        'Single window clearance',
                        'World-class infrastructure'
                    ]
                },
                {
                    name: 'Types',
                    color: '#27AE60',
                    children: [
                        'Multi-product SEZ',
                        'Sector-specific SEZ',
                        'IT/ITeS SEZ',
                        'Port-based SEZ'
                    ]
                },
                {
                    name: 'Benefits',
                    color: '#F39C12',
                    children: [
                        'Tax holidays',
                        'Duty-free imports',
                        'No labor inspections',
                        'Infrastructure support'
                    ]
                },
                {
                    name: 'Issues',
                    color: '#E74C3C',
                    children: [
                        'Land acquisition',
                        'Revenue loss',
                        'Enclave economy',
                        'Export diversion'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'SEZ Benefits',
                content: 'TIDE: Tax holidays, Import duty exemption, Domestic tariff area benefits, Easy regulations. "SEZs bring TIDE of investment!"',
                icon: '🌊'
            },
            {
                type: 'story',
                title: 'SEZ History',
                content: 'Started as EPZs (1965, Kandla first). Converted to SEZs (SEZ Act 2005). China\'s Shenzhen success inspired India. IT SEZs became most successful in India!',
                icon: '📜'
            },
            {
                type: 'comparison',
                title: 'SEZ vs EPZ',
                content: 'EPZ = Export Processing Zone (older, manufacturing focus). SEZ = Special Economic Zone (larger, services included, better incentives). SEZ is upgraded EPZ!',
                icon: '🆚'
            },
            {
                type: 'number',
                title: 'SEZ Numbers',
                content: '268 operational SEZs. 2000 sq km total area. 23 lakh employment. Maharashtra leads with most SEZs.',
                icon: '🔢'
            }
        ],

        conceptBlocks: [
            {
                title: 'What are SEZs?',
                icon: '📖',
                points: [
                    '📖 DEFINITION:',
                    '  • Geographically demarcated duty-free enclaves',
                    '  • Deemed foreign territory for trade operations',
                    '  • Export-oriented manufacturing and services',
                    '',
                    '📜 LEGAL FRAMEWORK:',
                    '  • SEZ Act 2005',
                    '  • SEZ Rules 2006',
                    '  • Replaced earlier EPZ regime',
                    '',
                    '🎯 OBJECTIVES:',
                    '  • Generate additional economic activity',
                    '  • Promote exports of goods and services',
                    '  • Create employment opportunities',
                    '  • Attract domestic and foreign investment',
                    '  • Develop world-class infrastructure',
                    '',
                    '📊 CURRENT STATUS:',
                    '  • Notified SEZs: 425+',
                    '  • Operational SEZs: 268',
                    '  • Employment: 23+ lakh people',
                    '  • Exports: ₹7+ lakh crore annually'
                ]
            },
            {
                title: 'Types of SEZs',
                icon: '🏭',
                points: [
                    '📋 BY PRODUCT/SECTOR:',
                    '',
                    '🏭 MULTI-PRODUCT SEZ:',
                    '  • Large area (1000+ hectares)',
                    '  • Multiple sectors',
                    '  • Example: Mundra (Gujarat), MEPZ (Chennai)',
                    '',
                    '💻 IT/ITeS SEZ:',
                    '  • Minimum 10 hectares',
                    '  • Software, BPO, KPO',
                    '  • MOST SUCCESSFUL in India',
                    '  • Example: Bengaluru, Hyderabad IT parks',
                    '',
                    '⚙️ SECTOR-SPECIFIC SEZ:',
                    '  • Single sector focus',
                    '  • Pharma, Biotech, Gems, Textiles',
                    '  • Minimum 10-100 hectares (varies)',
                    '',
                    '⚓ PORT-BASED SEZ:',
                    '  • Near ports for logistics',
                    '  • FTWZ (Free Trade Warehousing Zone)',
                    '',
                    '📋 BY OWNERSHIP:',
                    '  • Government SEZs: SEEPZ, Kandla',
                    '  • Private SEZs: Most new SEZs',
                    '  • Joint venture SEZs'
                ]
            },
            {
                title: 'Incentives & Benefits',
                icon: '🎁',
                points: [
                    '💰 TAX BENEFITS:',
                    '  • 100% income tax exemption: First 5 years',
                    '  • 50% exemption: Next 5 years',
                    '  • 50% of reinvested profits: Next 5 years',
                    '  • (Benefits reduced after 2019 amendments)',
                    '',
                    '📦 CUSTOMS BENEFITS:',
                    '  • Duty-free import of goods',
                    '  • No customs duty on capital goods',
                    '  • Simplified export-import procedures',
                    '',
                    '🏛️ SINGLE WINDOW:',
                    '  • Development Commissioner as single point',
                    '  • Fast-track approvals',
                    '  • Reduced bureaucracy',
                    '',
                    '👷 LABOR RELAXATIONS:',
                    '  • Self-certification for labor laws',
                    '  • No routine inspections',
                    '  • Flexibility in operations',
                    '',
                    '🏗️ INFRASTRUCTURE:',
                    '  • World-class facilities',
                    '  • Power, water, roads',
                    '  • Plug-and-play model',
                    '',
                    '⚠️ POST-2019 CHANGES:',
                    '  • Sunset clause for tax benefits',
                    '  • GST applicability issues',
                    '  • Reduced attractiveness'
                ]
            },
            {
                title: 'Major SEZs in India',
                icon: '📍',
                points: [
                    '📍 GOVERNMENT SEZs (Legacy):',
                    '  • KANDLA SEZ (Gujarat): First EPZ (1965)',
                    '  • SEEPZ (Mumbai): Electronics, gems',
                    '  • Noida SEZ (UP)',
                    '  • Falta SEZ (West Bengal)',
                    '  • MEPZ Chennai: Multi-product',
                    '  • Cochin SEZ: Electronic hardware',
                    '  • Visakhapatnam SEZ',
                    '',
                    '📍 MAJOR PRIVATE SEZs:',
                    '  • Mahindra World City (Chennai, Jaipur)',
                    '  • DLF Cyber City (multiple cities)',
                    '  • Mundra SEZ (Gujarat): Port-based',
                    '  • Reliance SEZs',
                    '  • Infosys, Wipro IT parks',
                    '',
                    '📊 STATE-WISE DISTRIBUTION:',
                    '  • Maharashtra: Highest number',
                    '  • Tamil Nadu: Major IT SEZs',
                    '  • Karnataka: Bengaluru IT SEZs',
                    '  • Telangana: Hyderabad IT SEZs',
                    '  • Gujarat: Kandla, Mundra'
                ]
            },
            {
                title: 'Criticisms & Issues',
                icon: '⚠️',
                points: [
                    '🏠 LAND ACQUISITION:',
                    '  • Displacement of farmers',
                    '  • Singur, Nandigram controversies',
                    '  • Agricultural land conversion',
                    '',
                    '💰 REVENUE LOSS:',
                    '  • Tax foregone significant',
                    '  • Opportunity cost to government',
                    '  • CAG reports highlighted concerns',
                    '',
                    '📦 EXPORT DIVERSION:',
                    '  • Existing exporters shifting to SEZs',
                    '  • Not always new exports',
                    '  • Round-tripping concerns',
                    '',
                    '🏝️ ENCLAVE ECONOMY:',
                    '  • Limited linkages with domestic economy',
                    '  • "Islands of prosperity"',
                    '  • Regional imbalance',
                    '',
                    '📊 UNDERUTILIZATION:',
                    '  • Many notified SEZs not operational',
                    '  • Land acquired but unused',
                    '',
                    '🔄 GST ISSUES:',
                    '  • Refund delays',
                    '  • Working capital blockage',
                    '  • Complex procedures',
                    '',
                    '📜 POLICY UNCERTAINTY:',
                    '  • Sunset clause for tax benefits',
                    '  • Frequent changes in rules'
                ]
            },
            {
                title: 'SEZ vs Other Zones',
                icon: '🆚',
                points: [
                    '🏭 SEZ vs EPZ:',
                    '  • EPZ: Older, smaller, manufacturing only',
                    '  • SEZ: Larger, services included, better benefits',
                    '  • All EPZs converted to SEZs (2000)',
                    '',
                    '🏭 SEZ vs NIMZ:',
                    '  • NIMZ: National Investment & Manufacturing Zone',
                    '  • Focus on manufacturing (Make in India)',
                    '  • Larger than SEZ (5000+ hectares)',
                    '  • Not just export-oriented',
                    '',
                    '🏭 SEZ vs FTWZ:',
                    '  • FTWZ: Free Trade Warehousing Zone',
                    '  • For storage, trading',
                    '  • No manufacturing',
                    '  • Near ports, airports',
                    '',
                    '🏭 SEZ vs Industrial Park:',
                    '  • Industrial Park: No special tax benefits',
                    '  • SEZ: Tax-free, export-focused',
                    '  • Industrial parks serve domestic market too',
                    '',
                    '📌 UPCOMING:',
                    '  • Development of Enterprise and Service Hubs (DESH) Bill',
                    '  • Proposed to replace SEZ Act',
                    '  • More flexibility, domestic focus too'
                ]
            }
        ],

        diagrams: [
            {
                title: 'SEZ Distribution Map',
                type: 'map',
                description: 'India map showing SEZ clusters: Maharashtra (most), Tamil Nadu (IT), Karnataka (Bengaluru IT), Gujarat (Kandla, Mundra), Telangana (Hyderabad). Mark government vs private.'
            },
            {
                title: 'SEZ Types Infographic',
                type: 'infographic',
                description: 'Pie chart of SEZs by type: IT/ITeS (largest share), Multi-product, Pharma, Textiles, Others. Show employment and exports contribution.'
            },
            {
                title: 'SEZ Benefits Flowchart',
                type: 'flowchart',
                description: 'Show benefits: Tax holidays (5+5+5 years), Duty-free imports, Single window clearance, Labor flexibility. Then show criticisms: Land acquisition, Revenue loss, Enclave economy.'
            },
            {
                title: 'SEZ Evolution Timeline',
                type: 'timeline',
                description: 'Timeline: 1965 (Kandla EPZ) → 2000 (EPZs to SEZs) → 2005 (SEZ Act) → 2006 (Rules) → 2019 (Sunset clause) → Future (DESH Bill). Mark key policy changes.'
            }
        ],

        quickFacts: [
            '🏭 Operational SEZs: 268 in India',
            '👷 Employment: 23+ lakh people',
            '📦 Exports: ₹7+ lakh crore annually',
            '🏆 First EPZ: Kandla (1965)',
            '📜 SEZ Act: 2005, Rules: 2006',
            '💻 IT/ITeS SEZs: Most successful type',
            '📍 Maharashtra: Highest number of SEZs',
            '💰 Tax holiday: 100% (5 yrs) + 50% (5 yrs) + 50% reinvested (5 yrs)',
            '🏭 SEEPZ Mumbai: Gems and jewelry hub',
            '⚠️ 2019: Sunset clause for tax benefits',
            '🔄 DESH Bill: Proposed replacement for SEZ Act',
            '📦 FTWZ: Free Trade Warehousing Zone (storage focus)'
        ],

        upscTraps: [
            {
                trap: 'SEZs are only for manufacturing',
                clarity: 'IT/ITeS SEZs are MOST SUCCESSFUL in India! Services contribute significantly. Manufacturing SEZs have mixed results.'
            },
            {
                trap: 'All notified SEZs are operational',
                clarity: 'Only 268 of 425+ notified SEZs are operational. Many have acquired land but not started operations due to various issues.'
            },
            {
                trap: 'SEZ benefits continue indefinitely',
                clarity: '2019 amendments introduced SUNSET CLAUSE. Tax benefits phased out for new units. Existing units continue till original term.'
            },
            {
                trap: 'SEZs have no connection with domestic economy',
                clarity: 'While "enclave economy" is a criticism, SEZs do have linkages: Employment, vendor development, technology transfer. But linkages could be stronger.'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                'SEZ: Tax-free export zones, SEZ Act 2005',
                'Status: 268 operational, 23 lakh employed, ₹7L cr exports',
                'Types: Multi-product, IT/ITeS (most successful), Sector-specific',
                'Benefits: Tax holidays (5+5+5), Duty-free imports, Single window',
                'First: Kandla EPZ (1965), converted to SEZ (2000)',
                'Issues: Land acquisition, Revenue loss, Enclave economy',
                'Future: DESH Bill proposed to replace SEZ Act'
            ]
        },

        pyqs: [
            {
                year: 2021,
                question: 'Evaluate the success of Special Economic Zones in India.',
                type: 'Mains'
            },
            {
                year: 2019,
                question: 'What are the criticisms against SEZs in India?',
                type: 'Mains'
            },
            {
                year: 2018,
                question: 'Which was the first EPZ established in India?',
                type: 'Prelims',
                options: ['Noida', 'SEEPZ Mumbai', 'Kandla', 'Chennai']
            }
        ]
    }

];

// ============================================
// FINAL EXPORT - COMPLETE ECONOMIC DATA
// ============================================

// Make data available globally
window.economicData = economicData;

console.log('💼✅ Economic Geography Data COMPLETE:', economicData.length, 'topics');
console.log('📚 Topics loaded:', economicData.map(t => t.name).join(', '));
            
