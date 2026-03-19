/* ============================================
   UPSC GEOGRAPHY LEARNING SYSTEM
   Environment Data File - COMPREHENSIVE
   Topics: Sustainable Development, Climate Change,
           SDGs, Paris Agreement, Disaster Management,
           Hazard Zones, Environmental Issues, Conservation
   ============================================ */

const environmentData = [

    // ============================================
    // TOPIC 1: SUSTAINABLE DEVELOPMENT
    // ============================================
    {
        id: 'sustainable-development',
        name: 'Sustainable Development',
        icon: '♻️',
        category: 'environment',
        theme: 'environment',
        difficulty: 'medium',
        upscRelevance: 'very-high',

        mindMap: {
            central: 'Sustainable Development',
            branches: [
                {
                    name: 'Definition & Concept',
                    color: '#27AE60',
                    children: [
                        'Brundtland Report 1987',
                        'Meet present needs',
                        'Without compromising future',
                        'Intergenerational equity'
                    ]
                },
                {
                    name: 'Three Pillars',
                    color: '#3498DB',
                    children: [
                        'Economic Development',
                        'Social Equity',
                        'Environmental Protection',
                        'Balance all three'
                    ]
                },
                {
                    name: 'Key Principles',
                    color: '#9B59B6',
                    children: [
                        'Polluter Pays Principle',
                        'Precautionary Principle',
                        'Inter-generational equity',
                        'Common but Differentiated'
                    ]
                },
                {
                    name: 'Global Frameworks',
                    color: '#E74C3C',
                    children: [
                        'Rio Summit 1992',
                        'Agenda 21',
                        'MDGs (2000-2015)',
                        'SDGs (2015-2030)'
                    ]
                },
                {
                    name: 'India Initiatives',
                    color: '#F39C12',
                    children: [
                        'National Environment Policy',
                        'NAPCC (8 Missions)',
                        'Green India Mission',
                        'Smart Cities, Swachh Bharat'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Three Pillars - ESE',
                content: 'Economic + Social + Environment = ESE (like the exam!). All three must be balanced for true sustainability.',
                icon: '🎯'
            },
            {
                type: 'story',
                title: 'The Forest Story',
                content: 'You can cut 100 trees/year from a forest. But the forest grows only 80 trees/year. This is UNSUSTAINABLE - the forest will disappear! Cut ≤80 = sustainable. Leave resources for future.',
                icon: '🌲'
            },
            {
                type: 'acronym',
                title: 'Brundtland Definition',
                content: 'MCFC = Meeting Current needs without Compromising Future Capacity. Or simply: "Use it, don\'t abuse it, so others can reuse it!"',
                icon: '🔤'
            },
            {
                type: 'visual',
                title: 'Triple Bottom Line',
                content: 'Not just Profit (economy), but also People (social) and Planet (environment). 3Ps must ALL be positive for sustainable development.',
                icon: '📊'
            }
        ],

        conceptBlocks: [
            {
                title: 'Definition & Origin',
                icon: '📖',
                points: [
                    '📅 BRUNDTLAND REPORT (1987):',
                    '  • "Our Common Future" - UN World Commission on Environment',
                    '  • Led by Gro Harlem Brundtland (Norway PM)',
                    '',
                    '📝 OFFICIAL DEFINITION:',
                    '  "Development that meets the needs of the present',
                    '   without compromising the ability of future generations',
                    '   to meet their own needs."',
                    '',
                    '🎯 KEY ELEMENTS:',
                    '  • NEEDS: Basic needs of all people must be met',
                    '  • LIMITATIONS: Environment has limits',
                    '  • EQUITY: Fair distribution across generations',
                    '  • INTEGRATION: Economy, society, environment together',
                    '',
                    '⚖️ INTERGENERATIONAL EQUITY:',
                    '  • Current generation = trustee of resources',
                    '  • Must leave enough for future generations',
                    '  • Not just about "green" - about BALANCE'
                ]
            },
            {
                title: 'Three Pillars of Sustainability',
                icon: '🏛️',
                points: [
                    '🔺 THE THREE PILLARS (Triple Bottom Line):',
                    '',
                    '💰 1. ECONOMIC DEVELOPMENT:',
                    '  • Continued economic growth',
                    '  • Poverty reduction',
                    '  • Job creation',
                    '  • But: Growth must be SUSTAINABLE',
                    '  • Quality of growth matters, not just quantity',
                    '',
                    '👥 2. SOCIAL EQUITY:',
                    '  • Fair distribution of benefits',
                    '  • Access to education, healthcare',
                    '  • Gender equality',
                    '  • Social justice',
                    '  • Indigenous rights',
                    '  • Intergenerational equity',
                    '',
                    '🌍 3. ENVIRONMENTAL PROTECTION:',
                    '  • Conservation of biodiversity',
                    '  • Sustainable use of resources',
                    '  • Pollution control',
                    '  • Climate change mitigation',
                    '  • Ecosystem services maintained',
                    '',
                    '⚖️ THE BALANCE:',
                    '  • All three must be achieved TOGETHER',
                    '  • Trade-offs exist but minimize them',
                    '  • Weak sustainability: Can substitute (money for nature)',
                    '  • Strong sustainability: Cannot substitute (preserve nature)'
                ]
            },
            {
                title: 'Key Principles',
                icon: '📜',
                points: [
                    '💰 POLLUTER PAYS PRINCIPLE (PPP):',
                    '  • Those who cause pollution must pay for cleanup',
                    '  • Internalize environmental costs',
                    '  • Example: Carbon tax, effluent charges',
                    '  • India: Water (Prevention of Pollution) Act',
                    '',
                    '⚠️ PRECAUTIONARY PRINCIPLE:',
                    '  • When in doubt, don\'t!',
                    '  • Lack of scientific certainty ≠ excuse for inaction',
                    '  • If potential harm is serious, take preventive action',
                    '  • Burden of proof on developer, not environment',
                    '  • Example: Ban DDT even before full proof of harm',
                    '',
                    '👨‍👩‍👧 INTERGENERATIONAL EQUITY:',
                    '  • Rights of future generations',
                    '  • Leave resources for descendants',
                    '  • Current generation = trustee',
                    '',
                    '🌍 COMMON BUT DIFFERENTIATED RESPONSIBILITIES (CBDR):',
                    '  • All countries share responsibility',
                    '  • BUT: Developed countries did more damage',
                    '  • SO: Developed countries must do more',
                    '  • India uses this in climate negotiations',
                    '',
                    '🤝 PUBLIC TRUST DOCTRINE:',
                    '  • Government holds resources in trust for public',
                    '  • Cannot sell/destroy common resources',
                    '  • MC Mehta case applied this in India'
                ]
            },
            {
                title: 'Global Evolution & Summits',
                icon: '🌐',
                points: [
                    '📅 1972: STOCKHOLM CONFERENCE:',
                    '  • First UN conference on environment',
                    '  • "Only One Earth" theme',
                    '  • Created UNEP',
                    '  • June 5 = World Environment Day',
                    '',
                    '📅 1987: BRUNDTLAND REPORT:',
                    '  • "Our Common Future"',
                    '  • Coined "Sustainable Development"',
                    '',
                    '📅 1992: RIO EARTH SUMMIT (UNCED):',
                    '  • Rio de Janeiro, Brazil',
                    '  • Rio Declaration (27 principles)',
                    '  • Agenda 21 (action plan)',
                    '  • Created UNFCCC, CBD, UNCCD',
                    '  • Forest Principles',
                    '',
                    '📅 2000: MILLENNIUM SUMMIT:',
                    '  • 8 Millennium Development Goals (MDGs)',
                    '  • Target: 2015',
                    '',
                    '📅 2002: JOHANNESBURG (Rio+10):',
                    '  • World Summit on Sustainable Development',
                    '  • Johannesburg Declaration',
                    '',
                    '📅 2012: RIO+20:',
                    '  • "The Future We Want"',
                    '  • Green Economy concept',
                    '  • Decided to create SDGs',
                    '',
                    '📅 2015: SUSTAINABLE DEVELOPMENT GOALS:',
                    '  • 17 SDGs, 169 targets',
                    '  • Target: 2030',
                    '  • Universal (all countries)'
                ]
            },
            {
                title: 'India\'s Sustainable Development Initiatives',
                icon: '🇮🇳',
                points: [
                    '📜 CONSTITUTIONAL BASIS:',
                    '  • Article 48A: State to protect environment',
                    '  • Article 51A(g): Citizen duty to protect environment',
                    '  • Article 21: Right to clean environment (judicial interpretation)',
                    '',
                    '🎯 NATIONAL ACTION PLAN ON CLIMATE CHANGE (NAPCC):',
                    '  • 8 National Missions:',
                    '    1. National Solar Mission',
                    '    2. Enhanced Energy Efficiency',
                    '    3. Sustainable Habitat',
                    '    4. Water Mission',
                    '    5. Sustaining Himalayan Ecosystem',
                    '    6. Green India Mission',
                    '    7. Sustainable Agriculture',
                    '    8. Strategic Knowledge for Climate Change',
                    '',
                    '🌿 OTHER KEY INITIATIVES:',
                    '  • National Environment Policy 2006',
                    '  • Smart Cities Mission',
                    '  • Swachh Bharat Abhiyan',
                    '  • FAME (Electric Vehicles)',
                    '  • International Solar Alliance (ISA)',
                    '  • LiFE (Lifestyle for Environment)',
                    '  • National Hydrogen Mission',
                    '',
                    '📊 NITI AAYOG SDG INDEX:',
                    '  • Tracks state performance on SDGs',
                    '  • Kerala, Tamil Nadu top performers',
                    '  • Bihar, Jharkhand need improvement'
                ]
            },
            {
                title: 'Challenges & Debates',
                icon: '⚠️',
                points: [
                    '❌ KEY CHALLENGES:',
                    '',
                    '  • DEVELOPMENT vs ENVIRONMENT:',
                    '    - Growth often at cost of environment',
                    '    - Jobs vs forests debate',
                    '    - Western countries developed, now preach',
                    '',
                    '  • MEASUREMENT:',
                    '    - GDP doesn\'t capture sustainability',
                    '    - Need new indicators (Green GDP)',
                    '    - Difficult to value ecosystem services',
                    '',
                    '  • GOVERNANCE:',
                    '    - Short-term political cycles',
                    '    - Weak enforcement',
                    '    - Corruption in environmental clearances',
                    '',
                    '  • EQUITY:',
                    '    - Poor bear burden of environmental damage',
                    '    - Rich consume more, poor suffer more',
                    '    - Environmental justice issues',
                    '',
                    '💭 KEY DEBATES:',
                    '',
                    '  • WEAK vs STRONG SUSTAINABILITY:',
                    '    - Weak: Can substitute natural capital with man-made',
                    '    - Strong: Natural capital irreplaceable',
                    '',
                    '  • GROWTH vs DEGROWTH:',
                    '    - Can growth continue infinitely?',
                    '    - Some argue for degrowth in developed countries',
                    '',
                    '  • NORTH vs SOUTH:',
                    '    - Who pays for transition?',
                    '    - Historical responsibility matters',
                    '    - Climate finance debates'
                ]
            }
        ],

        diagrams: [
            {
                title: 'Three Pillars of Sustainability',
                type: 'diagram',
                description: 'Venn diagram with three overlapping circles: Economic (blue), Social (orange), Environmental (green). Intersection of all three = Sustainable Development. Label intersections: Economic + Social = Equitable. Social + Environmental = Bearable. Economic + Environmental = Viable.'
            },
            {
                title: 'Timeline of Global Sustainability Summits',
                type: 'timeline',
                description: '1972: Stockholm (UNEP). 1987: Brundtland Report. 1992: Rio Earth Summit (Agenda 21, UNFCCC). 2000: MDGs. 2002: Johannesburg. 2012: Rio+20. 2015: SDGs & Paris Agreement. Show evolution of thinking.'
            },
            {
                title: 'India NAPCC - 8 Missions',
                type: 'diagram',
                description: 'Circular diagram with 8 spokes from center "NAPCC": Solar, Energy Efficiency, Sustainable Habitat, Water, Himalayan Ecosystem, Green India, Sustainable Agriculture, Strategic Knowledge. Use relevant icons for each.'
            },
            {
                title: 'Sustainable Development Principles',
                type: 'flowchart',
                description: 'Four boxes with key principles: Polluter Pays, Precautionary Principle, Intergenerational Equity, CBDR. Show how each connects to sustainable development goal.'
            }
        ],

        quickFacts: [
            '📅 1987: Brundtland Report coined "Sustainable Development"',
            '📝 Definition: Meet present needs without compromising future generations',
            '🏛️ Three Pillars: Economic + Social + Environmental',
            '💰 Polluter Pays Principle: Polluter bears cleanup cost',
            '⚠️ Precautionary Principle: Uncertain harm → still take action',
            '🌍 CBDR: Common But Differentiated Responsibilities',
            '📅 1992: Rio Earth Summit → Agenda 21, UNFCCC, CBD',
            '📅 2015: 17 SDGs with 169 targets (deadline: 2030)',
            '🇮🇳 NAPCC: 8 National Missions for climate action',
            '📊 Article 48A: State duty to protect environment (DPSP)',
            '📊 Article 51A(g): Citizen duty to protect environment',
            '🏆 Kerala tops NITI Aayog SDG Index consistently',
            '🌐 International Solar Alliance: India-France initiative',
            '♻️ Triple Bottom Line: People, Planet, Profit'
        ],

        upscTraps: [
            {
                trap: 'Sustainable development means only environmental protection',
                clarity: 'NO! It\'s THREE pillars: Economic + Social + Environmental. All three must be balanced. Pure environmentalism ignoring economy/society is not sustainable development.'
            },
            {
                trap: 'Brundtland Report was in 1992',
                clarity: 'NO! Brundtland Report = 1987 ("Our Common Future"). 1992 = Rio Earth Summit (different!). Brundtland COINED the term, Rio OPERATIONALIZED it.'
            },
            {
                trap: 'CBDR means developed countries have no responsibility',
                clarity: 'OPPOSITE! CBDR says ALL share responsibility BUT developed countries must do MORE (they caused more damage historically). It\'s about FAIRNESS, not exemption.'
            },
            {
                trap: 'MDGs and SDGs are the same',
                clarity: 'DIFFERENT! MDGs (2000-2015): 8 goals, mainly for developing countries. SDGs (2015-2030): 17 goals, UNIVERSAL (all countries), more comprehensive, include environment strongly.'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                '1987: Brundtland Report - "Meet present needs without compromising future"',
                'Three Pillars: Economic + Social + Environmental (Triple Bottom Line)',
                'Principles: Polluter Pays, Precautionary, Intergenerational Equity, CBDR',
                '1992: Rio Summit → Agenda 21, UNFCCC, CBD (three conventions)',
                '2015: 17 SDGs (replacing 8 MDGs), deadline 2030',
                'India NAPCC: 8 Missions (Solar, Water, Green India, etc.)',
                'Article 48A (State duty) + 51A(g) (Citizen duty) = Constitutional basis'
            ]
        },

        pyqs: [
            {
                year: 2022,
                question: 'What do you understand by sustainable development? Discuss the three pillars of sustainability.',
                type: 'Mains'
            },
            {
                year: 2021,
                question: 'Explain the principle of "Common but Differentiated Responsibilities" in climate negotiations.',
                type: 'Mains'
            },
            {
                year: 2020,
                question: 'The Brundtland Report was published in:',
                type: 'Prelims',
                options: ['1972', '1987', '1992', '2002']
            },
            {
                year: 2019,
                question: 'Discuss the evolution of global consensus on sustainable development from Stockholm to Paris.',
                type: 'Mains'
            },
            {
                year: 2018,
                question: 'What are the eight National Missions under NAPCC? Discuss their significance.',
                type: 'Mains'
            }
        ]
    },

    // ============================================
    // TOPIC 2: CLIMATE CHANGE
    // ============================================
    {
        id: 'climate-change',
        name: 'Climate Change',
        icon: '🌡️',
        category: 'environment',
        theme: 'climate_change',
        difficulty: 'high',
        upscRelevance: 'very-high',

        mindMap: {
            central: 'Climate Change',
            branches: [
                {
                    name: 'Causes',
                    color: '#E74C3C',
                    children: [
                        'Greenhouse Effect (natural)',
                        'Enhanced GHE (anthropogenic)',
                        'CO2, CH4, N2O, CFCs',
                        'Deforestation, Industry'
                    ]
                },
                {
                    name: 'Evidence',
                    color: '#3498DB',
                    children: [
                        'Temperature rise (1.1°C since pre-industrial)',
                        'Sea level rise',
                        'Glacier retreat',
                        'Extreme weather events'
                    ]
                },
                {
                    name: 'Impacts',
                    color: '#E67E22',
                    children: [
                        'Agriculture disruption',
                        'Water scarcity',
                        'Biodiversity loss',
                        'Health impacts',
                        'Climate refugees'
                    ]
                },
                {
                    name: 'India Vulnerability',
                    color: '#9B59B6',
                    children: [
                        'Himalayan glaciers melting',
                        'Monsoon variability',
                        'Coastal flooding',
                        '80% population vulnerable'
                    ]
                },
                {
                    name: 'Solutions',
                    color: '#27AE60',
                    children: [
                        'Mitigation (reduce emissions)',
                        'Adaptation (adjust to changes)',
                        'Renewable energy',
                        'Carbon capture'
                    ]
                }
            ]
        },

                memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Major GHGs - CCMN',
                content: 'CO2 (Carbon dioxide), CH4 (Methane), N2O (Nitrous oxide), CFCs = "Climate Change Menaces Nature!"',
                icon: '🧠'
            },
            {
                type: 'visual',
                title: 'Blanket Analogy',
                content: 'GHGs act like a BLANKET around Earth. Normal blanket = comfortable (natural GHE). Too many blankets = overheating! That\'s enhanced greenhouse effect.',
                icon: '🛏️'
            },
            {
                type: 'comparison',
                title: 'Mitigation vs Adaptation',
                content: 'MITIGATION = Treating the disease (reduce emissions, stop the problem). ADAPTATION = Managing symptoms (build sea walls, drought-resistant crops). Need BOTH!',
                icon: '⚖️'
            },
            {
                type: 'story',
                title: 'The 1.5°C Story',
                content: 'Earth has a "fever" of 1.1°C above normal. At 1.5°C, symptoms worsen. At 2°C, critical condition. Paris Agreement aims to keep fever below 1.5°C - like controlling a patient\'s temperature!',
                icon: '🌡️'
            }
        ],

        conceptBlocks: [
            {
                title: 'What is Climate Change?',
                icon: '📖',
                points: [
                    '📝 DEFINITION:',
                    '  • Long-term shift in global temperatures and weather patterns',
                    '  • Natural causes exist (solar cycles, volcanic eruptions)',
                    '  • BUT: Current change is PRIMARILY human-caused (IPCC)',
                    '',
                    '⚠️ CLIMATE vs WEATHER:',
                    '  • Weather = Short-term (days, weeks)',
                    '  • Climate = Long-term average (30+ years)',
                    '  • Climate change ≠ One hot day',
                    '',
                    '📊 EVIDENCE (IPCC AR6, 2021):',
                    '  • Global temperature: +1.1°C since pre-industrial (1850-1900)',
                    '  • "Unequivocal" that humans are the cause',
                    '  • CO2 at highest in 2 million years',
                    '  • 2011-2020 was warmest decade on record',
                    '',
                    '🎯 KEY BODY:',
                    '  • IPCC (Intergovernmental Panel on Climate Change)',
                    '  • Created 1988 by UNEP + WMO',
                    '  • Nobel Peace Prize 2007 (with Al Gore)',
                    '  • Latest: Sixth Assessment Report (AR6) 2021-2023'
                ]
            },
            {
                title: 'Greenhouse Effect & Gases',
                icon: '🏠',
                points: [
                    '🌍 NATURAL GREENHOUSE EFFECT:',
                    '  • Sun\'s energy reaches Earth',
                    '  • Earth absorbs some, reflects some (infrared)',
                    '  • GHGs trap outgoing infrared radiation',
                    '  • Keeps Earth warm (~15°C instead of -18°C)',
                    '  • ESSENTIAL for life!',
                    '',
                    '⚠️ ENHANCED (Human-caused) GREENHOUSE EFFECT:',
                    '  • Burning fossil fuels → More CO2',
                    '  • Agriculture, waste → More CH4, N2O',
                    '  • Industry → CFCs, HFCs',
                    '  • TOO MUCH trapping → Overheating',
                    '',
                    '🔥 MAJOR GREENHOUSE GASES:',
                    '',
                    '  CO2 (Carbon Dioxide):',
                    '    • 76% of GHG emissions',
                    '    • From: Fossil fuels, deforestation',
                    '    • Stays: 100-1000 years',
                    '    • Current: ~420 ppm (highest in 2 million years)',
                    '',
                    '  CH4 (Methane):',
                    '    • 16% of emissions',
                    '    • 80x more potent than CO2 (short-term)',
                    '    • From: Agriculture, landfills, fossil fuels',
                    '    • Stays: ~12 years',
                    '',
                    '  N2O (Nitrous Oxide):',
                    '    • 6% of emissions',
                    '    • 300x more potent than CO2',
                    '    • From: Fertilizers, industry',
                    '    • Stays: ~114 years',
                    '',
                    '  F-gases (CFCs, HFCs, SF6):',
                    '    • 2% of emissions but very potent',
                    '    • Thousands of times more potent',
                    '    • From: Industry, refrigeration',
                    '',
                    '💧 WATER VAPOR:',
                    '  • Most abundant GHG naturally',
                    '  • But: Humans don\'t directly emit it much',
                    '  • Acts as FEEDBACK (warming → more evaporation → more warming)'
                ]
            },
            {
                title: 'Causes of Climate Change',
                icon: '⚙️',
                points: [
                    '🔥 ANTHROPOGENIC (Human) CAUSES:',
                    '',
                    '  ⛽ FOSSIL FUEL BURNING (74% of CO2):',
                    '    • Coal, oil, natural gas',
                    '    • Electricity, transport, industry',
                    '    • Releases stored carbon',
                    '',
                    '  🌳 DEFORESTATION (11% of CO2):',
                    '    • Trees absorb CO2 (carbon sinks)',
                    '    • Cutting releases stored carbon',
                    '    • Less absorption capacity',
                    '',
                    '  🐄 AGRICULTURE (14% of GHGs):',
                    '    • Livestock (methane from digestion)',
                    '    • Rice paddies (methane)',
                    '    • Fertilizers (nitrous oxide)',
                    '',
                    '  🏭 INDUSTRY:',
                    '    • Cement production (CO2)',
                    '    • Chemical manufacturing',
                    '    • Refrigeration (F-gases)',
                    '',
                    '  🗑️ WASTE:',
                    '    • Landfills produce methane',
                    '    • Wastewater treatment',
                    '',
                    '🌋 NATURAL CAUSES (Minor in current context):',
                    '  • Volcanic eruptions',
                    '  • Solar variations',
                    '  • Milankovitch cycles (orbital changes)',
                    '  • BUT: These explain <0.1°C of recent warming'
                ]
            },
            {
                title: 'Impacts of Climate Change',
                icon: '💥',
                points: [
                    '🌡️ PHYSICAL IMPACTS:',
                    '',
                    '  • TEMPERATURE:',
                    '    - More frequent heatwaves',
                    '    - Warmer nights',
                    '    - Longer summers',
                    '',
                    '  • SEA LEVEL RISE:',
                    '    - Thermal expansion of water',
                    '    - Ice sheet melting',
                    '    - 3.7 mm/year rise (accelerating)',
                    '    - Threatens coastal cities',
                    '',
                    '  • EXTREME WEATHER:',
                    '    - More intense cyclones',
                    '    - Heavier rainfall events',
                    '    - More severe droughts',
                    '    - Increased flooding',
                    '',
                    '  • CRYOSPHERE:',
                    '    - Glacier retreat',
                    '    - Arctic ice shrinking',
                    '    - Permafrost thawing',
                    '',
                    '🌾 ECOLOGICAL IMPACTS:',
                    '  • Biodiversity loss',
                    '  • Coral bleaching',
                    '  • Species migration',
                    '  • Ecosystem disruption',
                    '  • Ocean acidification',
                    '',
                    '👥 HUMAN IMPACTS:',
                    '  • Food security threatened',
                    '  • Water scarcity',
                    '  • Health impacts (heat, diseases)',
                    '  • Climate refugees/migration',
                    '  • Economic losses',
                    '  • Conflict over resources'
                ]
            },
            {
                title: 'India\'s Climate Vulnerability',
                icon: '🇮🇳',
                points: [
                    '⚠️ WHY INDIA IS HIGHLY VULNERABLE:',
                    '',
                    '  • Large population dependent on climate-sensitive sectors',
                    '  • 60% agriculture rainfed',
                    '  • 7,500 km coastline',
                    '  • Himalayan glaciers (water source)',
                    '  • Already hot climate',
                    '',
                    '🏔️ HIMALAYAN IMPACTS:',
                    '  • Glaciers retreating faster',
                    '  • Glacial Lake Outburst Floods (GLOFs)',
                    '  • Threat to rivers (Ganga, Indus)',
                    '  • Changed snowfall patterns',
                    '',
                    '🌧️ MONSOON CHANGES:',
                    '  • More variable, unpredictable',
                    '  • Intense rainfall in short bursts',
                    '  • Longer dry spells',
                    '  • Regional variations increasing',
                    '',
                    '🌊 COASTAL THREATS:',
                    '  • Sea level rise threatens Mumbai, Chennai, Kolkata',
                    '  • Sundarbans sinking',
                    '  • Saltwater intrusion',
                    '  • Cyclone intensity increasing',
                    '',
                    '🌡️ HEAT:',
                    '  • More frequent heatwaves',
                    '  • Heat stress on workers',
                    '  • "Wet bulb" dangerous temperatures',
                    '',
                    '📊 STATISTICS:',
                    '  • 80% of Indian population in climate vulnerable areas',
                    '  • 2050: Many Indian cities may be too hot to live',
                    '  • Agriculture GDP loss: Up to 25% by 2100'
                ]
            },
            {
                title: 'Mitigation & Adaptation',
                icon: '🛡️',
                points: [
                    '🔽 MITIGATION (Reduce Emissions):',
                    '',
                    '  • ENERGY:',
                    '    - Renewable energy (solar, wind, hydro)',
                    '    - Energy efficiency',
                    '    - Nuclear power',
                    '    - Phase out coal',
                    '',
                    '  • TRANSPORT:',
                    '    - Electric vehicles',
                    '    - Public transport',
                    '    - Fuel efficiency standards',
                    '',
                    '  • INDUSTRY:',
                    '    - Clean technologies',
                    '    - Carbon capture & storage (CCS)',
                    '    - Circular economy',
                    '',
                    '  • LAND USE:',
                    '    - Afforestation, reforestation',
                    '    - Sustainable agriculture',
                    '    - Reduce deforestation (REDD+)',
                    '',
                    '  • LIFESTYLE:',
                    '    - Reduce consumption',
                    '    - Plant-based diets',
                    '    - LiFE (India initiative)',
                    '',
                    '🔄 ADAPTATION (Adjust to Changes):',
                    '',
                    '  • AGRICULTURE:',
                    '    - Drought/flood resistant crops',
                    '    - Crop diversification',
                    '    - Efficient irrigation',
                    '',
                    '  • WATER:',
                    '    - Rainwater harvesting',
                    '    - Watershed management',
                    '    - Desalination (coastal)',
                    '',
                    '  • COASTAL:',
                    '    - Sea walls, mangroves',
                    '    - Managed retreat',
                    '    - Early warning systems',
                    '',
                    '  • HEALTH:',
                    '    - Heat action plans',
                    '    - Disease surveillance',
                    '',
                    '⚖️ BALANCE NEEDED:',
                    '  • Mitigation addresses root cause',
                    '  • Adaptation addresses symptoms',
                    '  • Both essential - cannot choose one'
                ]
            },
            {
                title: 'Global Climate Governance',
                icon: '🌐',
                points: [
                    '📅 KEY MILESTONES:',
                    '',
                    '  🔵 1992: UNFCCC (Rio):',
                    '    - Framework convention',
                    '    - "Common but Differentiated Responsibilities"',
                    '    - 197 parties',
                    '',
                    '  🔵 1997: KYOTO PROTOCOL:',
                    '    - First binding targets',
                    '    - Only for developed countries (Annex I)',
                    '    - USA never ratified, Canada withdrew',
                    '    - Commitment period ended 2012/2020',
                    '',
                    '  🔵 2015: PARIS AGREEMENT:',
                    '    - Limit warming to 2°C, aim for 1.5°C',
                    '    - All countries contribute (NDCs)',
                    '    - Bottom-up approach',
                    '    - 5-year review cycles',
                    '    - $100 billion/year for developing countries',
                    '',
                    '  🔵 2021: GLASGOW (COP26):',
                    '    - Coal phase-down (not phase-out)',
                    '    - Methane pledge',
                    '    - Article 6 rules (carbon markets)',
                    '',
                    '  🔵 2022: SHARM EL-SHEIKH (COP27):',
                    '    - Loss and Damage fund established!',
                    '    - Big win for developing countries',
                    '',
                    '  🔵 2023: DUBAI (COP28):',
                    '    - First Global Stocktake',
                    '    - "Transition away from fossil fuels"',
                    '',
                    '🇮🇳 INDIA\'S COMMITMENTS:',
                    '  • Net Zero by 2070',
                    '  • 50% non-fossil power by 2030',
                    '  • 45% emissions intensity reduction by 2030',
                    '  • 1 billion tonnes CO2 reduction by 2030'
                ]
            }
        ],

        diagrams: [
            {
                title: 'Greenhouse Effect Diagram',
                type: 'diagram',
                description: 'Show Sun → Solar radiation reaching Earth → Earth absorbs some → Earth emits infrared → GHGs in atmosphere trap some infrared → Warms Earth. Compare natural GHE (balanced) vs Enhanced GHE (too much trapping).'
            },
            {
                title: 'GHG Sources Pie Chart',
                type: 'chart',
                description: 'Pie chart: Energy (74%), Agriculture (14%), Industry (8%), Waste (4%). Sub-divide Energy: Electricity (25%), Transport (16%), Industry (21%), Buildings (6%), Other (6%).'
            },
            {
                title: 'Climate Change Impacts Flowchart',
                type: 'flowchart',
                description: 'GHG emissions → Global warming → Multiple branches: Sea level rise, Extreme weather, Glacier melt, Ecosystem disruption. Each leading to human impacts: Displacement, Food insecurity, Water scarcity, Health issues.'
            },
            {
                title: 'India Climate Vulnerability Map',
                type: 'map',
                description: 'India map showing: Coastal flooding zones (Mumbai, Chennai, Kolkata). Drought-prone areas (Rajasthan, Maharashtra, Karnataka). Himalayan glacier areas. Cyclone tracks. Heat stress zones.'
            },
            {
                title: 'Climate Governance Timeline',
                type: 'timeline',
                description: '1992: UNFCCC → 1997: Kyoto Protocol → 2009: Copenhagen (failed) → 2015: Paris Agreement → 2021: Glasgow → 2022: Sharm el-Sheikh → 2023: Dubai. Mark key achievements at each.'
            }
        ],

        quickFacts: [
            '🌡️ Global temperature: +1.1°C since pre-industrial era',
            '📊 CO2 concentration: ~420 ppm (highest in 2 million years)',
            '🔥 76% of GHG emissions from CO2 (mainly fossil fuels)',
            '🐄 CH4 is 80x more potent than CO2 (over 20 years)',
            '🌊 Sea level rising 3.7 mm/year (accelerating)',
            '📅 1988: IPCC created (Nobel Prize 2007)',
            '📅 1992: UNFCCC established (Rio Summit)',
            '📅 1997: Kyoto Protocol (first binding targets)',
            '📅 2015: Paris Agreement (limit to 1.5-2°C)',
            '🇮🇳 India: Net Zero target by 2070',
            '🇮🇳 India: 50% non-fossil energy by 2030',
            '⚠️ 80% of India\'s population in climate vulnerable areas',
            '🏔️ Himalayan glaciers retreating 0.5 km/decade',
            '🌧️ Indian monsoon becoming more erratic and intense',
            '📅 2022 COP27: Loss and Damage fund established'
        ],

        upscTraps: [
            {
                trap: 'Greenhouse effect is entirely bad',
                clarity: 'NO! NATURAL greenhouse effect is essential - keeps Earth at 15°C instead of -18°C. The problem is ENHANCED (human-caused) greenhouse effect - too much of a good thing!'
            },
            {
                trap: 'India committed to Net Zero by 2050',
                clarity: 'NO! India\'s Net Zero target is 2070 (not 2050). USA and EU committed to 2050. India argued for equity - later deadline for developing country.'
            },
            {
                trap: 'Kyoto Protocol applied to all countries',
                clarity: 'NO! Kyoto only had binding targets for DEVELOPED countries (Annex I). Developing countries had no mandatory targets. Paris Agreement (2015) changed this - ALL countries have NDCs.'
            },
            {
                trap: 'CO2 is the most potent greenhouse gas',
                clarity: 'FALSE by potency! Methane is 80x more potent (20-year), N2O is 300x. But CO2 is MOST IMPORTANT by volume (76% of emissions) and stays longest (100-1000 years).'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                'Temperature up 1.1°C since pre-industrial; CO2 at 420 ppm (2 million year high)',
                'GHGs: CO2 (76%, fossil fuels), CH4 (16%, agriculture), N2O (6%), F-gases (2%)',
                'Impacts: Sea level rise, extreme weather, glacier melt, biodiversity loss',
                'India vulnerable: 7,500 km coast, Himalayan glaciers, monsoon dependency',
                'Mitigation = Reduce emissions; Adaptation = Adjust to changes (need BOTH)',
                'Paris 2015: Limit to 1.5-2°C, all countries have NDCs, $100bn/year finance',
                'India NDC: Net Zero 2070, 50% non-fossil by 2030, 45% intensity reduction'
            ]
        },

        pyqs: [
            {
                year: 2023,
                question: 'Discuss the key outcomes of COP27. How significant is the establishment of the Loss and Damage fund?',
                type: 'Mains'
            },
            {
                year: 2022,
                question: 'What are India\'s climate commitments under the Paris Agreement? Discuss the challenges in achieving them.',
                type: 'Mains'
            },
            {
                year: 2021,
                question: 'Explain the difference between climate change mitigation and adaptation with examples.',
                type: 'Mains'
            },
            {
                year: 2020,
                question: 'Which gas contributes maximum to greenhouse effect by volume?',
                type: 'Prelims',
                options: ['Methane', 'Carbon dioxide', 'Nitrous oxide', 'Water vapor']
            },
            {
                year: 2019,
                question: 'Discuss the vulnerability of India to climate change. What adaptation measures are being taken?',
                type: 'Mains'
            },
            {
                year: 2018,
                question: 'What is IPCC? Discuss its role and significance in global climate governance.',
                type: 'Mains'
            }
        ]
    },

    // ============================================
    // TOPIC 3: SUSTAINABLE DEVELOPMENT GOALS (SDGs)
    // ============================================
    {
        id: 'sdgs',
        name: 'Sustainable Development Goals (SDGs)',
        icon: '🎯',
        category: 'environment',
        theme: 'environment',
        difficulty: 'medium',
        upscRelevance: 'very-high',

        mindMap: {
            central: '17 SDGs',
            branches: [
                {
                    name: 'People (Social)',
                    color: '#E74C3C',
                    children: [
                        'SDG 1: No Poverty',
                        'SDG 2: Zero Hunger',
                        'SDG 3: Good Health',
                        'SDG 4: Quality Education',
                        'SDG 5: Gender Equality'
                    ]
                },
                {
                    name: 'Prosperity (Economic)',
                    color: '#F39C12',
                    children: [
                        'SDG 7: Affordable Energy',
                        'SDG 8: Decent Work',
                        'SDG 9: Industry & Innovation',
                        'SDG 10: Reduced Inequalities',
                        'SDG 11: Sustainable Cities'
                    ]
                },
                {
                    name: 'Planet (Environment)',
                    color: '#27AE60',
                    children: [
                        'SDG 6: Clean Water',
                        'SDG 12: Responsible Consumption',
                        'SDG 13: Climate Action',
                        'SDG 14: Life Below Water',
                        'SDG 15: Life on Land'
                    ]
                },
                {
                    name: 'Peace & Partnership',
                    color: '#3498DB',
                    children: [
                        'SDG 16: Peace & Justice',
                        'SDG 17: Partnerships'
                    ]
                },
                {
                    name: 'India Performance',
                    color: '#9B59B6',
                    children: [
                        'NITI Aayog SDG Index',
                        'Kerala, TN top performers',
                        'Bihar, Jharkhand lag',
                        'Progress but gaps remain'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'The 5 Ps of SDGs',
                content: 'People (1-5), Prosperity (7-11), Planet (6,12-15), Peace (16), Partnership (17). 5 Ps cover all 17 goals!',
                icon: '🖐️'
            },
            {
                type: 'story',
                title: '17 Goals for 2030',
                content: 'Imagine 17 chapters in a book called "2030 World". Start with basics (poverty, hunger), add enablers (education, health), protect environment, ensure peace. All chapters connected!',
                icon: '📖'
            },
            {
                type: 'comparison',
                title: 'MDGs vs SDGs',
                content: 'MDGs (2000-2015): 8 goals, FOR poor countries, BY rich countries. SDGs (2015-2030): 17 goals, UNIVERSAL, all countries participate. SDGs more comprehensive and inclusive.',
                icon: '📊'
            },
            {
                type: 'visual',
                title: 'Wedding Cake Model',
                content: 'Environment (base) → Society (middle) → Economy (top). Economy RESTS ON society, which RESTS ON environment. Destroy base = everything collapses!',
                icon: '🎂'
            }
        ],

        conceptBlocks: [
            {
                title: 'What are SDGs?',
                icon: '📋',
                points: [
                    '📅 ADOPTED: September 2015 at UN Summit',
                    '📊 STRUCTURE: 17 Goals, 169 Targets, 232 Indicators',
                    '⏰ DEADLINE: 2030 (hence "Agenda 2030")',
                    '🌍 SCOPE: Universal - applies to ALL countries',
                    '',
                    '🎯 OFFICIAL NAME:',
                    '  "Transforming our World: The 2030 Agenda',
                    '   for Sustainable Development"',
                    '',
                    '📖 KEY FEATURES:',
                    '  • Universal: All countries (not just developing)',
                    '  • Integrated: Goals interconnected',
                    '  • Transformative: Ambitious, not incremental',
                    '  • People-centered: "Leave No One Behind"',
                    '',
                    '🔄 FROM MDGs TO SDGs:',
                    '  • MDGs (2000-2015): 8 goals, developing countries focus',
                    '  • MDGs had success but gaps: inequality, environment',
                    '  • SDGs: More comprehensive, universal, sustainable',
                    '',
                    '📊 5 Ps FRAMEWORK:',
                    '  • People (SDG 1-5)',
                    '  • Prosperity (SDG 7-11)',
                    '  • Planet (SDG 6, 12-15)',
                    '  • Peace (SDG 16)',
                    '  • Partnership (SDG 17)'
                ]
            },
            {
                title: 'The 17 Goals - Quick Overview',
                icon: '🎯',
                points: [
                    '👥 PEOPLE (Social Development):',
                    '  SDG 1: No Poverty - End poverty in all forms',
                    '  SDG 2: Zero Hunger - Food security, nutrition',
                    '  SDG 3: Good Health - Healthy lives, well-being',
                    '  SDG 4: Quality Education - Inclusive, equitable',
                    '  SDG 5: Gender Equality - Empower women/girls',
                    '',
                    '💧 PLANET (Environment):',
                    '  SDG 6: Clean Water & Sanitation',
                    '  SDG 12: Responsible Consumption & Production',
                    '  SDG 13: Climate Action',
                    '  SDG 14: Life Below Water (oceans)',
                    '  SDG 15: Life on Land (biodiversity)',
                    '',
                    '💰 PROSPERITY (Economic):',
                    '  SDG 7: Affordable & Clean Energy',
                    '  SDG 8: Decent Work & Economic Growth',
                    '  SDG 9: Industry, Innovation, Infrastructure',
                    '  SDG 10: Reduced Inequalities',
                    '  SDG 11: Sustainable Cities & Communities',
                    '',
                    '☮️ PEACE:',
                    '  SDG 16: Peace, Justice & Strong Institutions',
                    '',
                    '🤝 PARTNERSHIP:',
                    '  SDG 17: Partnerships for the Goals'
                ]
            },
            {
                title: 'Key SDGs in Detail',
                icon: '📝',
                points: [
                    '🎯 SDG 1: NO POVERTY:',
                    '  • End extreme poverty ($1.90/day) by 2030',
                    '  • Social protection systems',
                    '  • India: 270 million escaped poverty (2006-16)',
                    '  • Still: 83 million in extreme poverty',
                    '',
                    '🎯 SDG 2: ZERO HUNGER:',
                    '  • End hunger, achieve food security',
                    '  • Sustainable agriculture',
                    '  • India: Global Hunger Index rank 111/125 (2023)',
                    '  • Child malnutrition still high',
                    '',
                    '🎯 SDG 6: CLEAN WATER:',
                    '  • Universal access to safe water',
                    '  • Sanitation for all',
                    '  • India: Jal Jeevan Mission (tap to every home)',
                    '  • Swachh Bharat for sanitation',
                    '',
                    '🎯 SDG 7: CLEAN ENERGY:',
                    '  • Universal energy access',
                    '  • Increase renewable share',
                    '  • India: 500 GW renewable by 2030 target',
                    '  • Saubhagya - 100% electrification achieved',
                    '',
                    '🎯 SDG 13: CLIMATE ACTION:',
                    '  • Combat climate change',
                    '  • Strengthen resilience',
                    '  • India: NAPCC, Net Zero 2070',
                    '  • National Adaptation Fund'
                ]
            },
            {
                title: 'SDG Interlinkages',
                icon: '🔗',
                points: [
                    '🌐 SDGs ARE INTERCONNECTED:',
                    '',
                    '  📚 EDUCATION (SDG 4) connects to:',
                    '    • Poverty (SDG 1): Education reduces poverty',
                    '    • Gender (SDG 5): Girls\' education crucial',
                    '    • Health (SDG 3): Educated people healthier',
                    '    • Economy (SDG 8): Skills for jobs',
                    '',
                    '  💧 WATER (SDG 6) connects to:',
                    '    • Health (SDG 3): Clean water = less disease',
                    '    • Gender (SDG 5): Women fetch water in many places',
                    '    • Food (SDG 2): Irrigation for agriculture',
                    '    • Climate (SDG 13): Water scarcity from climate',
                    '',
                    '  ♀️ GENDER (SDG 5) connects to:',
                    '    • Economy (SDG 8): Women in workforce',
                    '    • Education (SDG 4): Girls\' education',
                    '    • Health (SDG 3): Maternal health',
                    '',
                    '⚠️ TRADE-OFFS ALSO EXIST:',
                    '  • Economic growth (SDG 8) vs Climate (SDG 13)',
                    '  • Industry (SDG 9) vs Life on Land (SDG 15)',
                    '  • Need careful balancing!',
                    '',
                    '🔑 KEY MESSAGE:',
                    '  • Cannot achieve one goal in isolation',
                    '  • Integrated approach needed',
                    '  • Synergies should be maximized'
                ]
            },
            {
                title: 'India\'s SDG Performance',
                icon: '🇮🇳',
                points: [
                    '📊 NITI AAYOG SDG INDIA INDEX:',
                    '  • Annual index tracking state performance',
                    '  • Score 0-100 for each goal',
                    '  • Categories: Aspirant (<50), Performer (50-65),',
                    '    Front Runner (65-99), Achiever (100)',
                    '',
                    '🏆 TOP PERFORMING STATES (2023-24):',
                    '  1. Kerala (76)',
                    '  2. Tamil Nadu (74)',
                    '  3. Goa (74)',
                    '  4. Himachal Pradesh (73)',
                    '  5. Uttarakhand (72)',
                    '',
                    '📉 LOWEST PERFORMING (2023-24):',
                    '  1. Bihar (52)',
                    '  2. Jharkhand (56)',
                    '  3. Arunachal Pradesh (57)',
                    '  4. Nagaland (58)',
                    '  5. Meghalaya (59)',
                    '',
                    '✅ INDIA STRENGTHS:',
                    '  • SDG 6 (Water): JJM progress',
                    '  • SDG 7 (Energy): Near 100% electrification',
                    '  • SDG 9 (Industry): Manufacturing growth',
                    '',
                    '❌ INDIA WEAKNESSES:',
                    '  • SDG 2 (Hunger): Malnutrition high',
                    '  • SDG 3 (Health): Healthcare access gaps',
                    '  • SDG 5 (Gender): Female labor participation low',
                    '  • SDG 13 (Climate): Emissions still rising',
                    '',
                    '📈 OVERALL INDIA SCORE: 66/100 (2023-24)',
                    '  • Improvement from 57 (2018)',
                    '  • Front Runner category'
                ]
            },
            {
                title: 'Global SDG Progress & Challenges',
                icon: '🌍',
                points: [
                    '📊 GLOBAL STATUS (2023 Report):',
                    '  • Only 15% of targets on track!',
                    '  • 37% showing no progress or regression',
                    '  • At current pace, won\'t meet 2030 deadline',
                    '',
                    '⚠️ SETBACKS:',
                    '  • COVID-19: Reversed progress on poverty, health',
                    '  • Ukraine war: Food, energy crisis',
                    '  • Climate change: Accelerating impacts',
                    '  • Inequality: Widening within and between countries',
                    '',
                    '📈 PROGRESS AREAS:',
                    '  • Access to electricity improved',
                    '  • Child mortality reduced',
                    '  • Some renewable energy growth',
                    '',
                    '📉 REGRESSION AREAS:',
                    '  • Extreme poverty increased (COVID)',
                    '  • Hunger worsened',
                    '  • Biodiversity loss continues',
                    '  • CO2 emissions rising again',
                    '',
                    '🎯 2030 OUTLOOK:',
                    '  • Unlikely to achieve most goals',
                    '  • Acceleration needed',
                    '  • $4 trillion/year investment gap',
                    '  • "Rescue plan" urgently needed',
                    '',
                    '🔄 POST-2030:',
                    '  • Discussions on post-2030 framework',
                    '  • Some goals may be extended',
                    '  • New global compact needed'
                ]
            }
        ],

        diagrams: [
            {
                title: 'SDG Wheel/Circle',
                type: 'diagram',
                description: 'Circular diagram with 17 colored segments, each representing one SDG. Official UN colors. Show interconnections with lines between related goals. Center: "2030 Agenda".'
            },
            {
                title: '5 Ps Framework',
                type: 'diagram',
                description: 'Five overlapping circles or pentagon: People (SDG 1-5), Planet (SDG 6, 12-15), Prosperity (SDG 7-11), Peace (SDG 16), Partnership (SDG 17). Show which goals under each P.'
            },
            {
                title: 'Wedding Cake Model',
                type: 'diagram',
                description: 'Three-tier cake: Bottom (largest) = Environment (SDGs 6, 13, 14, 15). Middle = Society (SDGs 1-5, 7, 11, 16). Top = Economy (SDGs 8, 9, 10, 12). Shows hierarchy - economy depends on society depends on environment.'
            },
            {
                title: 'India SDG State Performance Map',
                type: 'map',
                description: 'India map color-coded by SDG Index score. Green (high): Kerala, TN, Goa. Yellow (medium): Most states. Red (low): Bihar, Jharkhand, Northeast states. Show score legend.'
            },
            {
                title: 'MDGs vs SDGs Comparison',
                type: 'comparison-chart',
                description: 'Two columns: MDGs (2000-2015): 8 goals, developing countries, top-down, limited scope. SDGs (2015-2030): 17 goals, universal, participatory, comprehensive including environment and governance.'
            }
        ],

        quickFacts: [
            '📅 2015: SDGs adopted at UN Summit (Agenda 2030)',
            '📊 17 Goals, 169 Targets, 232 Indicators',
            '🌍 Universal - applies to ALL countries (unlike MDGs)',
            '🖐️ 5 Ps: People, Planet, Prosperity, Peace, Partnership',
            '📖 Theme: "Leave No One Behind"',
            '🔄 Replace MDGs (8 goals, 2000-2015)',
            '⚠️ Only 15% of targets on track globally (2023)',
            '🇮🇳 India SDG Index Score: 66/100 (2023-24)',
            '🏆 Kerala tops India SDG Index consistently',
            '📉 Bihar lowest in India SDG Index',
            '❌ India weak: Hunger (SDG 2), Gender (SDG 5)',
            '✅ India strong: Energy access (SDG 7), Water (SDG 6)',
            '💰 $4 trillion/year investment gap globally',
            '📊 NITI Aayog tracks India\'s SDG progress',
            '🎂 Wedding Cake Model: Environment → Society → Economy'
        ],

        upscTraps: [
            {
                trap: 'SDGs apply only to developing countries',
                clarity: 'FALSE! SDGs are UNIVERSAL - apply to ALL countries including developed ones. This was key difference from MDGs. USA, EU also have SDG commitments.'
            },
            {
                trap: 'There are 8 SDGs like MDGs',
                clarity: 'NO! There are 17 SDGs (not 8). MDGs had 8 goals. SDGs are more comprehensive - added environment (13, 14, 15), governance (16), inequality (10), sustainable consumption (12), etc.'
            },
            {
                trap: 'India is performing poorly on all SDGs',
                clarity: 'NOT entirely true! India performs WELL on SDG 7 (energy access), SDG 6 (water - improving), SDG 9 (industry). Weak on SDG 2 (hunger), SDG 5 (gender). Mixed performance overall.'
            },
            {
                trap: 'SDGs are legally binding',
                clarity: 'NO! SDGs are VOLUNTARY - not legally binding like treaties. Countries set own targets through Voluntary National Reviews (VNRs). No penalties for non-achievement.'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                '2015: 17 SDGs adopted (replacing 8 MDGs), deadline 2030',
                '5 Ps: People (1-5), Planet (6,12-15), Prosperity (7-11), Peace (16), Partnership (17)',
                'Key difference from MDGs: UNIVERSAL (all countries), more comprehensive',
                'Only 15% of targets on track globally - unlikely to achieve by 2030',
                'India score: 66/100 (2023-24); Kerala best, Bihar worst state',
                'India strengths: Energy (7), Water (6), Industry (9)',
                'India weaknesses: Hunger (2), Gender (5), Health (3)',
                'NITI Aayog SDG India Index tracks state performance annually'
            ]
        },

        pyqs: [
            {
                year: 2022,
                question: 'What are SDGs? How do they differ from MDGs? Discuss India\'s performance.',
                type: 'Mains'
            },
            {
                year: 2021,
                question: 'Discuss the interlinkages between different SDGs with examples.',
                type: 'Mains'
            },
            {
                year: 2020,
                question: 'How many Sustainable Development Goals are there?',
                type: 'Prelims',
                options: ['8', '12', '15', '17']
            },
            {
                year: 2019,
                question: 'Discuss India\'s progress on SDG 6 (Clean Water and Sanitation).',
                type: 'Mains'
            },
            {
                year: 2018,
                question: 'What is NITI Aayog SDG India Index? Discuss its methodology and findings.',
                type: 'Mains'
            },
            {
                year: 2023,
                question: 'Analyze the challenges in achieving SDGs by 2030 at global and national level.',
                type: 'Mains'
            }
        ]
    },

    // ============================================
    // TOPIC 4: PARIS AGREEMENT & UNFCCC
    // ============================================
    {
        id: 'paris-agreement',
        name: 'Paris Agreement & UNFCCC',
        icon: '🌍',
        category: 'environment',
        theme: 'climate_change',
        difficulty: 'high',
        upscRelevance: 'very-high',

        mindMap: {
            central: 'Paris Agreement',
            branches: [
                {
                    name: 'Key Goals',
                    color: '#3498DB',
                    children: [
                        'Limit warming to 2°C',
                        'Pursue efforts for 1.5°C',
                        'Climate finance $100bn/year',
                        'Technology transfer'
                    ]
                },
                {
                    name: 'Mechanisms',
                    color: '#27AE60',
                    children: [
                        'NDCs (Nationally Determined)',
                        '5-year review cycle',
                        'Global Stocktake',
                        'Transparency framework'
                    ]
                },
                {
                    name: 'India\'s NDC',
                    color: '#E67E22',
                    children: [
                        'Net Zero by 2070',
                        '50% non-fossil by 2030',
                        '45% intensity reduction',
                        '1 billion ton CO2 cut'
                    ]
                },
                {
                    name: 'Key Articles',
                    color: '#9B59B6',
                    children: [
                        'Article 2: Temperature goals',
                        'Article 4: Mitigation (NDCs)',
                        'Article 6: Carbon markets',
                        'Article 8: Loss & Damage'
                    ]
                },
                {
                    name: 'Challenges',
                    color: '#E74C3C',
                    children: [
                        'Current NDCs insufficient',
                        'Finance gap',
                        'Equity concerns',
                        'Implementation weak'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Paris Goals - 2-1.5-100',
                content: '2°C limit, 1.5°C aspiration, $100 billion/year finance. Just remember: 2-1.5-100!',
                icon: '🔢'
            },
            {
                type: 'comparison',
                title: 'Kyoto vs Paris',
                content: 'Kyoto: TOP-DOWN (imposed targets on developed). Paris: BOTTOM-UP (countries decide own NDCs). Kyoto = Strict teacher. Paris = Self-study with accountability.',
                icon: '⚖️'
            },
            {
                type: 'acronym',
                title: 'NDC Contents',
                content: 'NDC = Nationally Determined Contribution. Each country decides: What to reduce, How much, By when. Like personal fitness goals!',
                icon: '📝'
            },
            {
                type: 'visual',
                title: 'Ratchet Mechanism',
                content: 'Like a ratchet wrench - can only tighten, not loosen! Each 5 years, NDCs must be MORE ambitious. No going backwards allowed.',
                icon: '🔧'
            }
        ],

        conceptBlocks: [
            {
                title: 'UNFCCC Background',
                icon: '📜',
                points: [
                    '📅 1992: UNFCCC Established (Rio Earth Summit)',
                    '  • United Nations Framework Convention on Climate Change',
                    '  • Entered force: 1994',
                    '  • Parties: 198 (near universal)',
                    '',
                    '🎯 UNFCCC OBJECTIVE:',
                    '  "Stabilization of greenhouse gas concentrations',
                    '   at a level that prevents dangerous anthropogenic',
                    '   interference with the climate system"',
                    '',
                    '📊 KEY PRINCIPLES:',
                    '  • CBDR-RC (Common But Differentiated Responsibilities',
                    '    and Respective Capabilities)',
                    '  • Precautionary principle',
                    '  • Right to sustainable development',
                    '',
                    '🏛️ BODIES UNDER UNFCCC:',
                    '  • COP (Conference of Parties) - decision making',
                    '  • Subsidiary bodies (SBI, SBSTA)',
                    '  • Secretariat in Bonn, Germany',
                    '',
                    '📅 MAJOR AGREEMENTS UNDER UNFCCC:',
                    '  • 1997: Kyoto Protocol',
                    '  • 2015: Paris Agreement',
                    '  • Annual COPs for negotiations'
                ]
            },
            {
                title: 'Paris Agreement - Overview',
                icon: '🌍',
                points: [
                    '📅 ADOPTED: December 12, 2015 (COP21, Paris)',
                    '📅 ENTERED FORCE: November 4, 2016',
                    '📊 PARTIES: 195 signed, 194 ratified',
                    '',
                    '🎯 TEMPERATURE GOALS (Article 2):',
                    '  • Hold warming WELL BELOW 2°C above pre-industrial',
                    '  • PURSUE EFFORTS to limit to 1.5°C',
                    '  • (1.5°C added due to small island states\' demand)',
                    '',
                    '💡 KEY FEATURES:',
                    '  • UNIVERSAL: All countries participate',
                    '  • BOTTOM-UP: Countries set own targets (NDCs)',
                    '  • RATCHET: Targets only get more ambitious',
                    '  • 5-YEAR CYCLES: Submit/update NDCs every 5 years',
                    '  • LEGALLY BINDING: But NDCs themselves not binding',
                    '',
                    '🔄 HOW IT WORKS:',
                    '  1. Countries submit NDCs (own climate plans)',
                    '  2. Implement domestically',
                    '  3. Report progress transparently',
                    '  4. Global Stocktake every 5 years',
                    '  5. Update NDCs with increased ambition',
                    '',
                    '🏆 WHY SUCCESSFUL (vs Kyoto):',
                    '  • Inclusive (all countries)',
                    '  • Flexible (countries choose targets)',
                    '  • Allows for progression over time'
                ]
            },
            {
                title: 'Key Articles of Paris Agreement',
                icon: '📖',
                points: [
                    '🎯 ARTICLE 2 - PURPOSE:',
                    '  • Temperature goals (2°C/1.5°C)',
                    '  • Increase adaptation capacity',
                    '  • Finance flows consistent with low-carbon pathway',
                    '',
                    '🔽 ARTICLE 4 - MITIGATION:',
                    '  • Countries prepare, communicate, maintain NDCs',
                    '  • Global peaking "as soon as possible"',
                    '  • Net zero in second half of century',
                    '  • Progressive ambition ("ratchet")',
                    '',
                    '🔄 ARTICLE 6 - CARBON MARKETS:',
                    '  • Voluntary cooperation between countries',
                    '  • Carbon trading mechanisms',
                    '  • Internationally Transferred Mitigation Outcomes (ITMOs)',
                    '  • Rules finalized at COP26 Glasgow',
                    '',
                    '🛡️ ARTICLE 7 - ADAPTATION:',
                    '  • Global goal on adaptation',
                    '  • National Adaptation Plans',
                    '  • International support for vulnerable countries',
                    '',
                    '💥 ARTICLE 8 - LOSS AND DAMAGE:',
                    '  • Recognizes loss and damage from climate impacts',
                    '  • BUT: No liability or compensation (US insisted)',
                    '  • COP27: Loss and Damage FUND established!',
                    '',
                    '💰 ARTICLE 9 - FINANCE:',
                    '  • Developed countries provide finance',
                    '  • $100 billion/year by 2020 (not met!)',
                    '  • New collective goal being negotiated',
                    '',
                    '📊 ARTICLE 13 - TRANSPARENCY:',
                    '  • Common reporting framework',
                    '  • Track progress on NDCs',
                    '  • Review and verification',
                    '',
                    '🔍 ARTICLE 14 - GLOBAL STOCKTAKE:',
                    '  • Every 5 years assess collective progress',
                    '  • First: 2023 (COP28 Dubai)',
                    '  • Inform next round of NDCs'
                ]
            },
            {
                title: 'India\'s NDC & Commitments',
                icon: '🇮🇳',
                points: [
                    '📅 INDIA\'S NDC EVOLUTION:',
                    '  • 2015: First NDC submitted',
                    '  • 2022: Updated NDC (more ambitious)',
                    '',
                    '🎯 CURRENT COMMITMENTS (2022 NDC):',
                    '',
                    '  1️⃣ NET ZERO BY 2070:',
                    '    • Later than USA/EU (2050)',
                    '    • India argued: Equity, development needs',
                    '',
                    '  2️⃣ 50% NON-FOSSIL ENERGY BY 2030:',
                    '    • Earlier: 40% installed capacity',
                    '    • Now: 50% of installed capacity',
                    '    • Currently: ~43% (on track)',
                    '',
                    '  3️⃣ 45% EMISSIONS INTENSITY REDUCTION BY 2030:',
                    '    • From 2005 levels',
                    '    • Earlier target: 33-35%',
                    '    • Intensity = emissions per unit GDP',
                    '',
                    '  4️⃣ ADDITIONAL CARBON SINK OF 2.5-3 BILLION TONNES:',
                    '    • Through forests and trees',
                    '    • Green India Mission',
                    '',
                    '  5️⃣ 1 BILLION TONNES CO2 REDUCTION BY 2030:',
                    '    • From projected emissions',
                    '',
                    '🛤️ INDIA\'S APPROACH:',
                    '  • Not accepting binding emission caps',
                    '  • Intensity targets (not absolute)',
                    '  • Equity: Per capita emissions still low',
                    '  • Need for development space',
                    '  • CBDR principle strongly supported',
                    '',
                    '⚠️ CHALLENGES:',
                    '  • Coal still 70%+ of electricity',
                    '  • Finance needs: $10 trillion by 2070',
                    '  • Technology gaps',
                    '  • Just transition for coal workers'
                ]
            },
            {
                title: 'COP Milestones Post-Paris',
                icon: '📅',
                points: [
                    '📍 COP22 MARRAKECH (2016):',
                    '  • Paris Agreement entered force',
                    '  • "Marrakech Action Proclamation"',
                    '',
                    '📍 COP23 BONN (2017):',
                    '  • Fiji presidency (first island nation)',
                    '  • Talanoa Dialogue launched',
                    '',
                    '📍 COP24 KATOWICE (2018):',
                    '  • Paris Rulebook adopted',
                    '  • Implementation guidelines',
                    '',
                    '📍 COP25 MADRID (2019):',
                    '  • Article 6 unresolved',
                    '  • Chile presidency (moved due to protests)',
                    '',
                    '📍 COP26 GLASGOW (2021):',
                    '  • "Keep 1.5 alive"',
                    '  • COAL: Phase-down (not phase-out - India/China)',
                    '  • METHANE: Global Methane Pledge',
                    '  • ARTICLE 6: Rules finalized (carbon markets)',
                    '  • FORESTS: Halt deforestation by 2030',
                    '  • FINANCE: Double adaptation finance',
                    '',
                    '📍 COP27 SHARM EL-SHEIKH (2022):',
                    '  • LOSS AND DAMAGE FUND established! (Big win)',
                    '  • Implementation focus',
                    '  • "Breakthrough on Loss & Damage"',
                    '',
                    '📍 COP28 DUBAI (2023):',
                    '  • FIRST GLOBAL STOCKTAKE completed',
                    '  • "Transition away from fossil fuels" (historic!)',
                    '  • Triple renewable energy by 2030',
                    '  • Double energy efficiency by 2030',
                    '  • Loss & Damage fund operationalized'
                ]
            },
            {
                title: 'Challenges & Gaps',
                icon: '⚠️',
                points: [
                    '📊 EMISSIONS GAP:',
                    '  • Current NDCs lead to 2.4-2.8°C warming',
                    '  • Need 43% reduction by 2030 for 1.5°C',
                    '  • Gap between pledges and action',
                    '',
                    '💰 FINANCE GAP:',
                    '  • $100 billion/year target not met until 2022',
                    '  • Developing countries need $5.9 trillion by 2030',
                    '  • Most finance is loans, not grants',
                    '  • Adaptation finance very low',
                    '',
                    '⚖️ EQUITY CONCERNS:',
                    '  • Historical emissions by developed countries',
                    '  • Per capita: India 2 tons vs USA 15 tons',
                    '  • Who bears cost of transition?',
                    '  • Just transition for workers',
                    '',
                    '📋 IMPLEMENTATION GAPS:',
                    '  • Policies lag behind pledges',
                    '  • Enforcement weak',
                    '  • Short-term political cycles',
                    '',
                    '🔥 FOSSIL FUEL RESISTANCE:',
                    '  • Powerful industry lobbying',
                    '  • Oil-producing countries resist',
                    '  • COP28 hosted by UAE (petro-state!)',
                    '',
                    '❓ KEY DEBATES:',
                    '  • Phase-out vs phase-down of fossil fuels',
                    '  • Carbon capture/removal role',
                    '  • Nuclear energy status',
                    '  • Natural gas as "transition fuel"'
                ]
            }
        ],

        diagrams: [
            {
                title: 'Paris Agreement Framework',
                type: 'flowchart',
                description: 'Countries submit NDCs → Implement domestically → Report through transparency framework → Global Stocktake (every 5 years) → Update NDCs with more ambition → Repeat cycle. Show ratchet mechanism.'
            },
            {
                title: 'UNFCCC Timeline',
                type: 'timeline',
                description: '1992: UNFCCC adopted. 1997: Kyoto Protocol. 2005: Kyoto enters force. 2009: Copenhagen (failed). 2015: Paris Agreement. 2016: Paris enters force. 2021-23: Glasgow, Sharm, Dubai COPs. Mark key achievements.'
            },
            {
                title: 'India\'s NDC Targets Infographic',
                type: 'diagram',
                description: 'Five boxes showing India\'s commitments: (1) Net Zero 2070 (2) 50% non-fossil by 2030 (3) 45% intensity reduction (4) 2.5-3 billion tonnes carbon sink (5) 1 billion ton reduction. Use progress indicators.'
            },
            {
                title: 'Emissions Gap Visualization',
                type: 'graph',
                description: 'Y-axis: Global temperature rise. X-axis: Time to 2100. Show: Current policies path (3°C+), Current NDCs path (2.4-2.8°C), Paris target (1.5-2°C). Shade gap between them.'
            },
            {
                title: 'Climate Finance Flow',
                type: 'diagram',
                description: 'Show flow: Developed countries → (Green Climate Fund, Bilateral, MDBs) → Developing countries. Split: Mitigation vs Adaptation. Show $100 billion target vs actual delivery.'
            }
        ],

        quickFacts: [
            '📅 2015: Paris Agreement adopted at COP21',
            '🎯 Temperature goals: Well below 2°C, pursue 1.5°C',
            '💰 Finance: $100 billion/year by 2020 (not met until 2022)',
            '📊 NDC: Nationally Determined Contribution (each country\'s plan)',
            '🔄 5-year cycle: Update NDCs with increased ambition (ratchet)',
            '📍 Global Stocktake: First completed at COP28 (2023)',
            '🇮🇳 India Net Zero: 2070 (vs 2050 for USA/EU)',
            '🇮🇳 India: 50% non-fossil energy by 2030',
            '🇮🇳 India: 45% emissions intensity reduction by 2030',
            '📍 COP26 Glasgow: Article 6 rules, coal "phase-down"',
            '📍 COP27 Sharm: Loss and Damage fund established',
            '📍 COP28 Dubai: "Transition away from fossil fuels"',
            '📊 Current NDCs → 2.4-2.8°C (insufficient for 1.5°C)',
            '🔥 Need 43% emission reduction by 2030 for 1.5°C',
            '⚖️ CBDR: Common But Differentiated Responsibilities'
        ],

        upscTraps: [
            {
                trap: 'Paris Agreement sets binding emission targets',
                clarity: 'PARTIALLY TRUE! The Agreement itself is legally binding, BUT NDCs (targets) are NOT legally binding. Countries set their own targets voluntarily. Non-compliance has no penalty.'
            },
            {
                trap: '$100 billion climate finance goal was achieved on time',
                clarity: 'FALSE! The $100 billion/year by 2020 goal was NOT met. It was reportedly achieved only in 2022 (2 years late). And most was loans, not grants, and mainly for mitigation, not adaptation.'
            },
            {
                trap: 'India has committed to Net Zero by 2050',
                clarity: 'NO! India\'s Net Zero target is 2070, not 2050. India argued for equity - developed countries historically emitted more, so they should reach net zero earlier. India needs development space.'
            },
            {
                trap: 'COP27 achieved "phase-out" of fossil fuels',
                clarity: 'NO! COP26 Glasgow achieved "phase-DOWN" of coal (India/China changed from phase-out). COP28 Dubai got "transition AWAY from" fossil fuels - still not "phase-out". Language matters!'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                '1992: UNFCCC → 1997: Kyoto → 2015: Paris Agreement',
                'Paris Goals: Well below 2°C, pursue 1.5°C; $100bn/year finance',
                'Mechanism: NDCs (bottom-up) + 5-year review + Global Stocktake + Ratchet',
                'Key Articles: 2 (temp), 4 (mitigation), 6 (carbon markets), 8 (loss & damage), 9 (finance)',
                'India NDC: Net Zero 2070, 50% non-fossil, 45% intensity cut by 2030',
                'COP26: Article 6 rules, coal phase-down, methane pledge',
                'COP27: Loss & Damage FUND established (historic!)',
                'COP28: "Transition away from fossil fuels", first Global Stocktake'
            ]
        },

        pyqs: [
            {
                year: 2023,
                question: 'Discuss the key outcomes of COP28. How significant is the language on "transitioning away from fossil fuels"?',
                type: 'Mains'
            },
            {
                year: 2022,
                question: 'What are India\'s NDC commitments under the Paris Agreement? Discuss the challenges in achieving them.',
                type: 'Mains'
            },
            {
                year: 2021,
                question: 'What is Article 6 of Paris Agreement? Discuss its significance for carbon markets.',
                type: 'Mains'
            },
            {
                year: 2020,
                question: 'Paris Agreement aims to limit global warming to:',
                type: 'Prelims',
                options: ['1°C', '1.5°C', '2°C', '2.5°C']
            },
            {
                year: 2019,
                question: 'Compare and contrast Kyoto Protocol with Paris Agreement.',
                type: 'Mains'
            },
            {
                year: 2018,
                question: 'What is the principle of Common But Differentiated Responsibilities? How does India invoke it in climate negotiations?',
                type: 'Mains'
            }
        ]
    },

    // ============================================
    // TOPIC 5: DISASTER MANAGEMENT
    // ============================================
    {
        id: 'disaster-management',
        name: 'Disaster Management',
        icon: '🚨',
        category: 'environment',
        theme: 'climate_change',
        difficulty: 'high',
        upscRelevance: 'very-high',

        mindMap: {
            central: 'Disaster Management',
            branches: [
                {
                    name: 'Types of Disasters',
                    color: '#E74C3C',
                    children: [
                        'Natural: Earthquake, Flood, Cyclone',
                        'Man-made: Industrial, Nuclear',
                        'Biological: Pandemic, Epidemic',
                        'Climate-induced: Drought, Heat'
                    ]
                },
                {
                    name: 'DM Cycle',
                    color: '#3498DB',
                    children: [
                        'Prevention & Mitigation',
                        'Preparedness',
                        'Response',
                        'Recovery & Reconstruction'
                    ]
                },
                {
                    name: 'India Framework',
                    color: '#27AE60',
                    children: [
                        'DM Act 2005',
                        'NDMA (National)',
                        'SDMA (State)',
                        'DDMA (District)'
                    ]
                },
                {
                    name: 'Key Agencies',
                    color: '#9B59B6',
                    children: [
                        'NDRF (Response Force)',
                        'IMD (Weather)',
                        'INCOIS (Ocean)',
                        'GSI (Geological)'
                    ]
                },
                {
                    name: 'Recent Focus',
                    color: '#F39C12',
                    children: [
                        'Sendai Framework (2015-30)',
                        'Build Back Better',
                        'Community-based DRR',
                        'Early Warning Systems'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'DM Cycle - PPRR',
                content: 'Prevention, Preparedness, Response, Recovery = PPRR (like PPR but with extra R for Recovery!)',
                icon: '🔄'
            },
            {
                type: 'story',
                title: 'The 3 Bears Story',
                content: 'Before disaster (Prevention/Preparedness) = Papa Bear (planning). During disaster (Response) = Mama Bear (action). After disaster (Recovery) = Baby Bear (rebuilding). All three needed!',
                icon: '🐻'
            },
            {
                type: 'acronym',
                title: 'Sendai Priorities',
                content: 'URIC = Understanding risk, strengthening governance for Risk, Investing in DRR, enhancing preparedness for effective response (4 Sendai priorities)',
                icon: '🔤'
            },
            {
                type: 'visual',
                title: 'Disaster = Hazard × Vulnerability',
                content: 'Earthquake (hazard) in desert = minor. Earthquake in city = disaster! Same hazard, different VULNERABILITY. DM reduces vulnerability.',
                icon: '➗'
            }
        ],

        conceptBlocks: [
            {
                title: 'Basic Concepts',
                icon: '📖',
                points: [
                    '📝 DEFINITIONS:',
                    '',
                    '  🔶 HAZARD:',
                    '    • Event/phenomenon that may cause harm',
                    '    • Example: Earthquake, flood, chemical leak',
                    '',
                    '  🔶 VULNERABILITY:',
                    '    • Susceptibility to damage',
                    '    • Depends on: Exposure, sensitivity, coping capacity',
                    '',
                    '  🔶 RISK:',
                    '    • Probability of harmful consequences',
                    '    • Risk = Hazard × Vulnerability × Exposure',
                    '',
                    '  🔶 DISASTER:',
                    '    • When hazard meets vulnerable population',
                    '    • Causes widespread damage, disruption',
                    '    • Exceeds local coping capacity',
                    '',
                    '📊 TYPES OF DISASTERS:',
                    '',
                    '  🌍 NATURAL:',
                    '    • Geological: Earthquake, volcanic, landslide',
                    '    • Hydro-meteorological: Flood, cyclone, drought',
                    '    • Biological: Pandemic, epidemic',
                    '',
                    '  🏭 MAN-MADE/ANTHROPOGENIC:',
                    '    • Industrial: Bhopal gas, chemical spills',
                    '    • Nuclear: Chernobyl, Fukushima',
                    '    • Fire, building collapse',
                    '',
                    '  🌡️ CLIMATE-INDUCED:',
                    '    • Extreme heat/cold',
                    '    • Sea level rise',
                    '    • Changing rainfall patterns'
                ]
            },
            {
                title: 'Disaster Management Cycle',
                icon: '🔄',
                points: [
                    '📍 PHASE 1: PREVENTION & MITIGATION:',
                    '  • Actions to PREVENT disasters or REDUCE impacts',
                    '  • Long-term planning',
                    '  • Examples:',
                    '    - Building codes (earthquake resistant)',
                    '    - Land use planning (no building in flood plains)',
                    '    - Dams, embankments (flood control)',
                    '    - Afforestation (landslide prevention)',
                    '',
                    '📍 PHASE 2: PREPAREDNESS:',
                    '  • Getting READY for disaster',
                    '  • Planning, training, stockpiling',
                    '  • Examples:',
                    '    - Early warning systems',
                    '    - Evacuation plans',
                    '    - Mock drills',
                    '    - Emergency supplies stored',
                    '    - NDRF training',
                    '',
                    '📍 PHASE 3: RESPONSE:',
                    '  • IMMEDIATE actions during/after disaster',
                    '  • Save lives, meet basic needs',
                    '  • Examples:',
                    '    - Search and rescue',
                    '    - Medical care',
                    '    - Evacuation',
                    '    - Relief camps',
                    '    - Emergency food/water',
                    '',
                    '📍 PHASE 4: RECOVERY & RECONSTRUCTION:',
                    '  • Return to normalcy',
                    '  • Build back better (not just rebuild)',
                    '  • Examples:',
                    '    - Restoring infrastructure',
                    '    - Rehabilitation of affected',
                    '    - Livelihood restoration',
                    '    - Psychological support',
                    '    - Learning lessons for future'
                ]
            },
            {
                title: 'India\'s DM Framework',
                icon: '🇮🇳',
                points: [
                    '📜 DISASTER MANAGEMENT ACT, 2005:',
                    '  • First comprehensive DM law in India',
                    '  • Created 3-tier institutional structure',
                    '  • Shifted focus: Relief → Preparedness',
                    '',
                    '🏛️ INSTITUTIONAL STRUCTURE:',
                    '',
                    '  📍 NATIONAL LEVEL:',
                    '    • NDMA (National Disaster Management Authority)',
                    '    • Headed by: Prime Minister',
                    '    • National Executive Committee (NEC) - Cabinet Secy',
                    '    • National Plan',
                    '',
                    '  📍 STATE LEVEL:',
                    '    • SDMA (State Disaster Management Authority)',
                    '    • Headed by: Chief Minister',
                    '    • State Executive Committee',
                    '    • State Plan',
                    '',
                    '  📍 DISTRICT LEVEL:',
                    '    • DDMA (District Disaster Management Authority)',
                    '    • Headed by: District Collector/DM',
                    '    • District Plan',
                    '    • Most critical level for implementation!',
                    '',
                    '⚡ RESPONSE FORCES:',
                    '    • NDRF: National Disaster Response Force',
                    '      - 16 battalions (2024)',
                    '      - Specialized rescue operations',
                    '      - Under NDMA',
                    '    • SDRF: State Disaster Response Force',
                    '      - State-level teams'
                ]
            },
            {
                title: 'Key Agencies & Their Roles',
                icon: '🏢',
                points: [
                    '🌤️ IMD (India Meteorological Department):',
                    '  • Weather forecasting',
                    '  • Cyclone warnings',
                    '  • Heat wave alerts',
                    '  • Under Ministry of Earth Sciences',
                    '',
                    '🌊 INCOIS (Indian National Centre for Ocean Information):',
                    '  • Tsunami warnings',
                    '  • Ocean state forecasts',
                    '  • Under Ministry of Earth Sciences',
                    '',
                    '🏔️ GSI (Geological Survey of India):',
                    '  • Landslide hazard mapping',
                    '  • Seismic zonation',
                    '  • Under Ministry of Mines',
                    '',
                    '🛰️ ISRO:',
                    '  • Satellite imagery',
                    '  • Remote sensing for disaster monitoring',
                    '  • Communication support',
                    '',
                    '🔬 NIDM (National Institute of Disaster Management):',
                    '  • Training and capacity building',
                    '  • Research and documentation',
                    '  • Under MHA (Ministry of Home Affairs)',
                    '',
                    '🌾 CWC (Central Water Commission):',
                    '  • Flood forecasting',
                    '  • River monitoring',
                    '',
                    '🚨 CBRN (Chemical, Biological, Radiological, Nuclear):',
                    '  • Specialized teams within NDRF',
                    '  • Handle CBRN disasters'
                ]
            },
            {
                title: 'Sendai Framework 2015-2030',
                icon: '🌐',
                points: [
                    '📅 ADOPTED: March 2015 (Sendai, Japan)',
                    '📅 REPLACES: Hyogo Framework 2005-2015',
                    '🎯 GOAL: Substantial reduction of disaster risk and losses',
                    '',
                    '🎯 7 GLOBAL TARGETS:',
                    '  1. Reduce mortality',
                    '  2. Reduce affected people',
                    '  3. Reduce economic losses',
                    '  4. Reduce infrastructure damage',
                    '  5. Increase countries with DRR strategies',
                    '  6. Enhance international cooperation',
                    '  7. Increase early warning access',
                    '',
                    '📍 4 PRIORITIES FOR ACTION:',
                    '',
                    '  1️⃣ UNDERSTANDING DISASTER RISK:',
                    '    • Risk assessment, mapping',
                    '    • Data collection',
                    '    • Research and knowledge',
                    '',
                    '  2️⃣ STRENGTHENING GOVERNANCE:',
                    '    • Institutional frameworks',
                    '    • Policies, plans',
                    '    • Coordination mechanisms',
                    '',
                    '  3️⃣ INVESTING IN DRR:',
                    '    • Structural measures',
                    '    • Non-structural measures',
                    '    • Financial instruments',
                    '',
                    '  4️⃣ ENHANCING PREPAREDNESS:',
                    '    • Early warning systems',
                    '    • Build back better',
                    '    • Recovery planning',
                    '',
                    '🔑 KEY SHIFT:',
                    '  • From managing disasters TO managing RISKS',
                    '  • Prevention > Response'
                ]
            },
            {
                title: 'Major Disasters in India',
                icon: '📊',
                points: [
                    '🌊 FLOODS (Most frequent):',
                    '  • 40 million hectares flood-prone',
                    '  • Annual: Assam, Bihar, UP floods',
                    '  • 2013: Kedarnath flash floods (>5,000 deaths)',
                    '  • 2018: Kerala floods (massive devastation)',
                    '',
                    '🌀 CYCLONES:',
                    '  • East coast more vulnerable (Bay of Bengal)',
                    '  • 1999: Super Cyclone Odisha (>10,000 deaths)',
                    '  • 2020: Amphan (West Bengal)',
                    '  • 2021: Tauktae, Yaas',
                    '  • Improved early warning → reduced deaths',
                    '',
                    '🌏 EARTHQUAKES:',
                    '  • 59% of India in seismic zones',
                    '  • Zone V (very high): NE, Kashmir, Himachal, Uttarakhand',
                    '  • 2001: Bhuj earthquake (Gujarat, >20,000 deaths)',
                    '  • 2015: Nepal earthquake (affected India)',
                    '',
                    '🏔️ LANDSLIDES:',
                    '  • Himalayas, Western Ghats, NE India',
                    '  • Triggered by rain, earthquakes',
                    '  • 2021: Chamoli disaster (Uttarakhand)',
                    '',
                    '☀️ DROUGHTS:',
                    '  • 68% area drought-prone',
                    '  • Rajasthan, Maharashtra, Karnataka frequent',
                    '',
                    '🔥 HEAT WAVES:',
                    '  • Increasing due to climate change',
                    '  • 2015: Over 2,500 deaths',
                    '',
                    '🏭 INDUSTRIAL:',
                    '  • 1984: Bhopal Gas Tragedy (worst ever)',
                    '  • Visakhapatnam gas leak 2020'
                ]
            },
            {
                title: 'Recent Developments & Best Practices',
                icon: '🆕',
                points: [
                    '📱 TECHNOLOGY IN DM:',
                    '  • CAP (Common Alerting Protocol)',
                    '  • Cell broadcasting for alerts',
                    '  • AI for flood prediction',
                    '  • Drones for damage assessment',
                    '  • Satellite imagery (ISRO)',
                    '',
                    '🏠 COMMUNITY-BASED DRR:',
                    '  • Local knowledge important',
                    '  • Village disaster management plans',
                    '  • Community volunteers',
                    '  • Women\'s SHGs in DM',
                    '',
                    '🏗️ BUILD BACK BETTER:',
                    '  • Not just restore, IMPROVE',
                    '  • Resilient infrastructure',
                    '  • Post-2018 Kerala reconstruction example',
                    '',
                    '📋 RECENT POLICY:',
                    '  • National Disaster Management Plan 2019 (revised)',
                    '  • Coalition for Disaster Resilient Infrastructure (CDRI)',
                    '    - India initiative, launched 2019',
                    '    - Headquarters: New Delhi',
                    '  • Disaster resilient schools',
                    '  • Hospital safety programs',
                    '',
                    '💰 FINANCING:',
                    '  • SDRF (State Disaster Response Fund)',
                    '  • NDRF (National Disaster Response Fund)',
                    '  • Disaster insurance',
                    '  • PMFBY for crop insurance',
                    '',
                    '🌍 SUCCESS STORIES:',
                    '  • Odisha cyclone management (model)',
                    '  • FLIN (Flood Early Warning, India)',
                    '  • Heat Action Plans (Ahmedabad pioneer)'
                ]
            }
        ],

        diagrams: [
            {
                title: 'Disaster Management Cycle',
                type: 'diagram',
                description: 'Circular diagram with 4 phases: Prevention/Mitigation → Preparedness → Response → Recovery → back to Prevention. Show "Before", "During", "After" labels. Emphasize continuous nature.'
            },
            {
                title: 'India DM Institutional Structure',
                type: 'flowchart',
                description: 'Three-tier pyramid: Top: NDMA (PM chair) → Middle: SDMA (CM chair) → Bottom: DDMA (Collector chair). Show NDRF and NIDM as support agencies. Show NEC at national level.'
            },
            {
                title: 'India Seismic Zone Map',
                type: 'map',
                description: 'India map showing 4 seismic zones (II, III, IV, V). Zone V (highest): Kashmir, Himachal, Uttarakhand, NE, Kutch. Zone IV (high): Delhi, UP hills. Zone III (moderate): Most of India. Zone II (low): South India.'
            },
            {
                title: 'Disaster Risk Equation',
                type: 'diagram',
                description: 'Show: RISK = HAZARD × VULNERABILITY ÷ CAPACITY. Illustrate with examples: High hazard + High vulnerability = High risk (earthquake in slum). High hazard + Low vulnerability = Lower risk (earthquake in developed area with good buildings).'
            },
            {
                title: 'Sendai Framework 4 Priorities',
                type: 'flowchart',
                description: 'Four connected boxes: 1. Understand Risk → 2. Strengthen Governance → 3. Invest in DRR → 4. Enhance Preparedness. Show how they reinforce each other.'
            }
        ],

        quickFacts: [
            '📅 2005: Disaster Management Act enacted',
            '🏛️ NDMA headed by PM; SDMA by CM; DDMA by Collector',
            '⚡ NDRF: 16 battalions for specialized rescue',
            '🔄 DM Cycle: Prevention → Preparedness → Response → Recovery',
            '📝 Risk = Hazard × Vulnerability × Exposure',
            '📅 2015-30: Sendai Framework (replaces Hyogo 2005-15)',
            '🎯 Sendai shift: Managing disasters → Managing RISKS',
            '🌍 59% of India in seismic zones III-V',
            '🌊 40 million hectares flood-prone in India',
            '🌀 1999 Odisha cyclone: >10,000 deaths (led to reforms)',
            '🏭 1984 Bhopal: World\'s worst industrial disaster',
            '🏠 CDRI: Coalition for Disaster Resilient Infrastructure (India-led)',
            '📱 CAP: Common Alerting Protocol for multi-hazard warnings',
            '🏆 Odisha: Model for cyclone management (zero deaths goal)',
            '🌡️ Ahmedabad: Pioneer in Heat Action Plans'
        ],

        upscTraps: [
            {
                trap: 'NDRF is under Ministry of Defence',
                clarity: 'NO! NDRF is under Ministry of Home Affairs (MHA), not Defence. It is under NDMA. Armed forces can assist in disasters, but NDRF is the specialized force under MHA.'
            },
            {
                trap: 'India has 5 seismic zones',
                clarity: 'NO! India has 4 seismic zones (Zone II, III, IV, V). Zone I was merged with Zone II. Zone V = Very high risk (Kashmir, NE), Zone II = Low risk (South India).'
            },
            {
                trap: 'Sendai Framework came before Hyogo Framework',
                clarity: 'OPPOSITE! Hyogo Framework (2005-2015) came first. Sendai Framework (2015-2030) succeeded it. Sendai shifted focus from managing disasters to managing RISKS.'
            },
            {
                trap: 'Disaster Management is in Union List',
                clarity: 'NO! Disaster Management is in CONCURRENT List (after DM Act 2005). Earlier it was State subject. Centre and States both have roles. NDMA coordinates nationally.'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                'DM Act 2005: First comprehensive law; shifted relief → preparedness',
                'Structure: NDMA (PM) → SDMA (CM) → DDMA (Collector)',
                'NDRF: 16 battalions, specialized rescue, under MHA/NDMA',
                'DM Cycle: Prevention → Preparedness → Response → Recovery (PPRR)',
                'Risk = Hazard × Vulnerability ÷ Capacity',
                'Sendai 2015-30: 4 priorities, 7 targets, risk management focus',
                'India: 59% in seismic zones, 40M ha flood-prone, 68% drought-prone',
                'CDRI: India-led coalition for disaster-resilient infrastructure',
                'Success: Odisha cyclone management, Ahmedabad heat action plan'
            ]
        },

        pyqs: [
            {
                year: 2022,
                question: 'Discuss the institutional framework for disaster management in India. How effective has it been?',
                type: 'Mains'
            },
            {
                year: 2021,
                question: 'What is the Sendai Framework for Disaster Risk Reduction? Discuss its priorities.',
                type: 'Mains'
            },
            {
                year: 2020,
                question: 'NDMA is headed by:',
                type: 'Prelims',
                options: ['Home Minister', 'Prime Minister', 'President', 'Defence Minister']
            },
            {
                year: 2019,
                question: 'Explain the concept of "Build Back Better" in disaster recovery with examples from India.',
                type: 'Mains'
            },
            {
                year: 2018,
                question: 'Discuss India\'s vulnerability to various natural disasters and the measures taken to mitigate them.',
                type: 'Mains'
            },
            {
                year: 2023,
                question: 'What is CDRI? Discuss its significance for global disaster resilience.',
                type: 'Mains'
            }
        ]
    },

    // ============================================
    // TOPIC 6: HAZARD ZONES IN INDIA
    // ============================================
    {
        id: 'hazard-zones-india',
        name: 'Hazard Zones in India',
        icon: '🗺️',
        category: 'environment',
        theme: 'climate_change',
        difficulty: 'medium',
        upscRelevance: 'high',

        mindMap: {
            central: 'Hazard Zones India',
            branches: [
                {
                    name: 'Seismic Zones',
                    color: '#E74C3C',
                    children: [
                        'Zone V: Kashmir, NE, Himalayas',
                        'Zone IV: Delhi, Bihar plains',
                        'Zone III: Most of India',
                        'Zone II: Peninsular plateau'
                    ]
                },
                {
                    name: 'Flood Prone',
                    color: '#3498DB',
                    children: [
                        'Brahmaputra Valley',
                        'Ganga-Yamuna plains',
                        'North Bihar',
                        '40 million hectares'
                    ]
                },
                {
                    name: 'Cyclone Prone',
                    color: '#9B59B6',
                    children: [
                        'East coast > West coast',
                        'Odisha, AP, Tamil Nadu',
                        'Gujarat coast',
                        '7,500 km coastline'
                    ]
                },
                {
                    name: 'Drought Prone',
                    color: '#F39C12',
                    children: [
                        'Rajasthan desert',
                        'Deccan plateau',
                        'Rain shadow regions',
                        '68% area vulnerable'
                    ]
                },
                {
                    name: 'Landslide Zones',
                    color: '#27AE60',
                    children: [
                        'Himalayas',
                        'Western Ghats',
                        'NE hills',
                        'Triggered by rain/quakes'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Seismic Zone V States',
                content: 'KHAUN = Kashmir, Himachal, Arunachal, Uttarakhand, NE states. These are all in the HIGHEST risk Zone V!',
                icon: '🏔️'
            },
            {
                type: 'visual',
                title: 'Plate Boundary = High Risk',
                content: 'Himalayas = Collision zone (Indian + Eurasian plate). That\'s why Kashmir to Arunachal (along Himalayas) is Zone V. Peninsula is away from plate boundary = lower risk.',
                icon: '🌍'
            },
            {
                type: 'comparison',
                title: 'East vs West Coast Cyclones',
                content: 'East coast gets MORE cyclones (Bay of Bengal warmer, receives more disturbances). West coast safer EXCEPT Gujarat-Maharashtra during monsoon.',
                icon: '🌀'
            },
            {
                type: 'story',
                title: 'Bihar\'s Double Trouble',
                content: 'Poor Bihar! Zone IV for earthquakes AND most flood-prone state. Rivers from Nepal bring floods yearly. South Bihar is drought-prone. Triple hazard zone!',
                icon: '😢'
            }
        ],

        conceptBlocks: [
            {
                title: 'Seismic Zones of India',
                icon: '🌏',
                points: [
                    '📊 OVERVIEW:',
                    '  • India divided into 4 seismic zones (II, III, IV, V)',
                    '  • Zone I merged with Zone II in 2002',
                    '  • Based on: Historical earthquakes, tectonic features',
                    '  • 59% of India in zones III-V (moderate to very high)',
                    '',
                    '🔴 ZONE V (Very High Risk):',
                    '  • Most hazardous',
                    '  • Areas:',
                    '    - Entire Kashmir region',
                    '    - Himachal Pradesh',
                    '    - Uttarakhand',
                    '    - Northeastern states (entire)',
                    '    - Kutch region (Gujarat)',
                    '    - North Bihar',
                    '  • Why? Close to plate boundaries',
                    '',
                    '🟠 ZONE IV (High Risk):',
                    '  • Areas:',
                    '    - Delhi NCR',
                    '    - Jammu region',
                    '    - Parts of Bihar, UP',
                    '    - Northern parts of Punjab, Haryana',
                    '    - Parts of Maharashtra, Lakshadweep',
                    '',
                    '🟡 ZONE III (Moderate Risk):',
                    '  • Covers large part of India',
                    '  • Western Rajasthan, Gujarat plains',
                    '  • Coastal areas',
                    '  • Parts of Peninsular India',
                    '',
                    '🟢 ZONE II (Low Risk):',
                    '  • Peninsular plateau (stable shield)',
                    '  • Parts of Rajasthan, Karnataka, TN',
                    '  • Oldest rock formations (stable)',
                    '',
                    '📍 MAJOR EARTHQUAKE EVENTS:',
                    '  • 1897: Assam (8.1) - one of biggest ever',
                    '  • 1934: Bihar-Nepal (8.1)',
                    '  • 1950: Assam (8.6) - largest in India',
                    '  • 2001: Bhuj (7.7) - >20,000 deaths',
                    '  • 2005: Kashmir (7.6) - >80,000 deaths'
                ]
            },
            {
                title: 'Flood Prone Areas',
                icon: '🌊',
                points: [
                    '📊 OVERVIEW:',
                    '  • 40 million hectares flood-prone (12% of area)',
                    '  • Annual flood damage: ₹5,000-10,000 crores',
                    '  • 75% floods in July-September (monsoon)',
                    '',
                    '🔴 MOST VULNERABLE REGIONS:',
                    '',
                    '  📍 BRAHMAPUTRA VALLEY (Assam):',
                    '    • Most flood-prone region in India',
                    '    • Braided river, changes course',
                    '    • Annual flooding, bank erosion',
                    '    • Majuli shrinking due to floods',
                    '',
                    '  📍 NORTH BIHAR:',
                    '    • Rivers from Nepal (Kosi, Gandak)',
                    '    • Kosi = "Sorrow of Bihar"',
                    '    • Frequent course changes',
                    '',
                    '  📍 GANGA-YAMUNA PLAIN:',
                    '    • Eastern UP',
                    '    • Ghaghara, Rapti, Gomti rivers',
                    '',
                    '  📍 BRAHMAPUTRA-BARAK PLAIN:',
                    '    • Assam, NE India',
                    '',
                    '  📍 COASTAL AREAS:',
                    '    • Storm surge flooding',
                    '    • West Bengal, Odisha, AP, Gujarat',
                    '',
                    '💡 CAUSES:',
                    '  • Heavy monsoon rainfall',
                    '  • Deforestation in catchments',
                    '  • Encroachment on flood plains',
                    '  • Poor drainage in urban areas',
                    '  • Climate change intensifying rainfall'
                ]
            },
            {
                title: 'Cyclone Prone Areas',
                icon: '🌀',
                points: [
                    '📊 OVERVIEW:',
                    '  • 7,500 km coastline',
                    '  • 13 coastal states/UTs',
                    '  • ~5-6 cyclones/year',
                    '  • Bay of Bengal: More frequent than Arabian Sea',
                    '',
                    '🔴 EAST COAST (More Vulnerable):',
                    '  • Bay of Bengal cyclones',
                    '  • High frequency: Oct-Dec',
                    '  • States: Odisha, Andhra Pradesh, Tamil Nadu, West Bengal',
                    '  • Why more?',
                    '    - Bay of Bengal warmer',
                    '    - Gets remnants of Pacific typhoons',
                    '    - Receives tropical disturbances',
                    '',
                    '🟠 WEST COAST (Less Frequent):',
                    '  • Arabian Sea cyclones',
                    '  • Peak: June (pre-monsoon), Oct-Nov',
                    '  • States: Gujarat, Maharashtra, Kerala',
                    '  • Cyclones often weaken before landfall',
                    '',
                    '📍 SEVERE CYCLONE EVENTS:',
                    '  • 1999: Super Cyclone Odisha (>10,000 deaths)',
                    '  • 2004: Tsunami (>10,000 deaths in India)',
                    '  • 2013: Phailin (Odisha, managed well)',
                    '  • 2019: Fani (Odisha, < 100 deaths - success!)',
                    '  • 2020: Amphan (Bengal, severe damage)',
                    '',
                    '✅ IMPROVEMENTS:',
                    '  • Early warning systems much better',
                    '  • Odisha model of evacuation',
                    '  • Cyclone shelters built',
                    '  • Deaths drastically reduced'
                ]
            },
            {
                title: 'Drought Prone Areas',
                icon: '☀️',
                points: [
                    '📊 OVERVIEW:',
                    '  • 68% of India drought-prone',
                    '  • 35% chronically drought-prone',
                    '  • Affects 50 million people annually',
                    '',
                    '🔴 CHRONICALLY DROUGHT-PRONE:',
                    '',
                    '  📍 RAJASTHAN:',
                    '    • Western Rajasthan most vulnerable',
                    '    • Thar Desert region',
                    '    • <250 mm rainfall',
                    '',
                    '  📍 DECCAN PLATEAU:',
                    '    • Maharashtra (Vidarbha, Marathwada)',
                    '    • Karnataka (North, Central)',
                    '    • Telangana',
                    '    • Rain shadow of Western Ghats',
                    '',
                    '  📍 GUJARAT:',
                    '    • Kutch, Saurashtra',
                    '    • Semi-arid climate',
                    '',
                    '  📍 SOUTH INDIA:',
                    '    • Rayalaseema (AP)',
                    '    • Tamil Nadu (interior)',
                    '',
                    '💡 CAUSES:',
                    '  • Scanty rainfall',
                    '  • Rain shadow effect',
                    '  • Monsoon failure',
                    '  • Groundwater depletion',
                    '  • Poor water management',
                    '',
                    '⚠️ FARMER DISTRESS:',
                    '  • Drought linked to farmer suicides',
                    '  • Vidarbha, Marathwada, Telangana affected',
                    '  • Need: Irrigation, insurance, water conservation'
                ]
            },
            {
                title: 'Landslide Prone Areas',
                icon: '🏔️',
                points: [
                    '📊 OVERVIEW:',
                    '  • 15% of India landslide-prone',
                    '  • Covers 0.42 million sq km',
                    '  • Himalayan region most vulnerable',
                    '',
                    '🔴 HIGH-RISK ZONES:',
                    '',
                    '  📍 HIMALAYAS (Very High):',
                    '    • Uttarakhand',
                    '    • Himachal Pradesh',
                    '    • Jammu & Kashmir',
                    '    • Active tectonics',
                    '    • Heavy monsoon rainfall',
                    '    • Steep slopes',
                    '',
                    '  📍 NORTHEASTERN HILLS (High):',
                    '    • All NE states',
                    '    • Very high rainfall',
                    '    • Fragile geology',
                    '',
                    '  📍 WESTERN GHATS (Moderate-High):',
                    '    • Maharashtra (Mahabaleshwar, Konkan)',
                    '    • Karnataka (Coorg, Sakleshpur)',
                    '    • Kerala (Wayanad, Idukki)',
                    '    • High rainfall + steep slopes',
                    '',
                    '  📍 NILGIRIS & EASTERN GHATS:',
                    '    • Tamil Nadu hills',
                    '    • Odisha hills',
                    '',
                    '💡 TRIGGERS:',
                    '  • Heavy rainfall (primary)',
                    '  • Earthquakes',
                    '  • Deforestation',
                    '  • Road construction',
                    '  • Mining activities',
                    '',
                    '📍 RECENT EVENTS:',
                    '  • 2013: Kedarnath landslides + flash flood',
                    '  • 2018: Kerala landslides',
                    '  • 2021: Chamoli disaster (rock+ice avalanche)',
                    '  • 2023: Wayanad, Himachal landslides'
                ]
            },
            {
                title: 'Multi-Hazard Zones & Mapping',
                icon: '🗺️',
                points: [
                    '🔴 MULTI-HAZARD REGIONS:',
                    '',
                    '  📍 BIHAR:',
                    '    • Earthquake (Zone IV-V)',
                    '    • Floods (North Bihar)',
                    '    • Drought (South Bihar)',
                    '    • Most disaster-prone state!',
                    '',
                    '  📍 UTTARAKHAND:',
                    '    • Earthquake (Zone V)',
                    '    • Landslides',
                    '    • Flash floods',
                    '    • GLOFs',
                    '',
                    '  📍 NORTHEASTERN STATES:',
                    '    • Earthquake (Zone V)',
                    '    • Floods',
                    '    • Landslides',
                    '',
                    '  📍 ODISHA:',
                    '    • Cyclones',
                    '    • Floods',
                    '    • Drought (western parts)',
                    '',
                    '  📍 GUJARAT:',
                    '    • Earthquake (Kutch Zone V)',
                    '    • Cyclones (coast)',
                    '    • Drought (Kutch, Saurashtra)',
                    '',
                    '🗺️ HAZARD MAPPING:',
                    '  • GSI: Landslide hazard zonation',
                    '  • IMD: Cyclone tracking',
                    '  • CWC: Flood forecasting',
                    '  • ISRO: Multi-hazard mapping',
                    '  • NDMA: National hazard atlas',
                    '',
                    '📱 EARLY WARNING SYSTEMS:',
                    '  • Earthquake: Not predictable (preparedness focus)',
                    '  • Cyclone: 3-5 days advance warning',
                    '  • Flood: 3-7 days advance warning',
                    '  • Tsunami: Minutes to hours'
                ]
            }
        ],

        diagrams: [
            {
                title: 'India Seismic Zone Map',
                type: 'map',
                description: 'India map with 4 zones color-coded. Zone V (red): Kashmir, HP, UK, NE, Kutch. Zone IV (orange): Delhi, Bihar, UP hills. Zone III (yellow): Most of India. Zone II (green): Peninsular shield. Mark major earthquake locations.'
            },
            {
                title: 'Flood Prone Areas Map',
                type: 'map',
                description: 'India map highlighting flood-prone regions. Dark blue: Brahmaputra valley, North Bihar. Medium blue: Ganga plains. Light blue: Coastal areas. Mark major rivers causing floods.'
            },
            {
                title: 'Cyclone Tracks Map',
                type: 'map',
                description: 'India map showing typical cyclone tracks. Bay of Bengal cyclones (curved tracks from SE to NW, hitting Odisha, AP, TN, Bengal). Arabian Sea cyclones (SW to NE, hitting Gujarat, Maharashtra). Mark frequencies.'
            },
            {
                title: 'Multi-Hazard Vulnerability Matrix',
                type: 'comparison-chart',
                description: 'Table with states as rows, hazards (earthquake, flood, cyclone, drought, landslide) as columns. Use symbols (High/Medium/Low) to show vulnerability. Highlight Bihar, Uttarakhand, Gujarat as multi-hazard states.'
            },
            {
                title: 'Landslide Prone Areas Map',
                type: 'map',
                description: 'India map showing landslide zones. Dark brown: Himalayas (UK, HP, J&K). Medium brown: NE hills. Light brown: Western Ghats (Kerala, Karnataka, Maharashtra). Mark recent major landslide sites.'
            }
        ],

        quickFacts: [
            '🌏 59% of India in seismic zones III-V',
            '🔴 Zone V: Kashmir, Himachal, Uttarakhand, NE, Kutch',
            '🏙️ Delhi is in Zone IV (high risk)',
            '🌊 40 million hectares flood-prone (12% of India)',
            '😢 Kosi = "Sorrow of Bihar" (floods)',
            '🌀 Bay of Bengal: More cyclones than Arabian Sea',
            '🌀 Odisha most cyclone-prone state',
            '☀️ 68% of India drought-prone',
            '🏜️ Rajasthan, Marathwada, Vidarbha: Chronic drought',
            '🏔️ 15% of India landslide-prone',
            '⛰️ Himalayas + Western Ghats = Major landslide zones',
            '😰 Bihar: Multi-hazard (earthquake + flood + drought)',
            '📊 2001 Bhuj earthquake: >20,000 deaths',
            '📊 1999 Odisha cyclone: >10,000 deaths (led to reforms)',
            '✅ Odisha now model for cyclone management'
        ],

        upscTraps: [
            {
                trap: 'India has 5 seismic zones',
                clarity: 'NO! India has 4 seismic zones (II, III, IV, V). Zone I was merged with Zone II in 2002 revision. Don\'t confuse with Zone 5 (which is Zone V = highest risk).'
            },
            {
                trap: 'Western coast gets more cyclones than Eastern coast',
                clarity: 'OPPOSITE! Eastern coast (Bay of Bengal) gets MORE cyclones. Bay is warmer, gets more disturbances. Arabian Sea cyclones are less frequent but Gujarat/Maharashtra still affected.'
            },
            {
                trap: 'Peninsular India is earthquake-free',
                clarity: 'FALSE! Peninsula is in Zone II-III (low to moderate). Bhuj (Gujarat) was in Zone V and had massive earthquake. Koyna (Maharashtra) also had significant earthquake. Shield is more stable but not immune.'
            },
            {
                trap: 'All Himalayan states are equally earthquake-prone',
                clarity: 'MOSTLY true but some variation. Entire Himalayan belt is Zone IV-V. However, Kashmir, Uttarakhand, NE are in Zone V (highest). Some parts of Himachal are Zone IV. All high risk though.'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                'Seismic: 4 zones (II-V); Zone V = Kashmir, HP, UK, NE, Kutch',
                'Floods: 40M ha; Brahmaputra valley, N. Bihar, Ganga plains',
                'Cyclones: Bay of Bengal > Arabian Sea; Odisha most affected',
                'Drought: 68% vulnerable; Rajasthan, Deccan, Vidarbha, Marathwada',
                'Landslides: 15%; Himalayas, Western Ghats, NE hills',
                'Multi-hazard: Bihar (EQ+flood+drought), Uttarakhand (EQ+landslide+flood)',
                'Delhi in Zone IV; South India in Zone II-III',
                'Improvements: Cyclone deaths reduced (Odisha model), early warnings better'
            ]
        },

        pyqs: [
            {
                year: 2022,
                question: 'Discuss the seismic zonation of India. Why is the Himalayan region most vulnerable?',
                type: 'Mains'
            },
            {
                year: 2021,
                question: 'Why does the eastern coast of India receive more cyclones than the western coast?',
                type: 'Mains'
            },
            {
                year: 2020,
                question: 'Which seismic zone does Delhi fall under?',
                type: 'Prelims',
                options: ['Zone II', 'Zone III', 'Zone IV', 'Zone V']
            },
            {
                year: 2019,
                question: 'Discuss the multi-hazard vulnerability of the Himalayan states.',
                type: 'Mains'
            },
            {
                year: 2018,
                question: 'What are the reasons for frequent landslides in the Himalayas and Western Ghats?',
                type: 'Mains'
            },
            {
                year: 2023,
                question: 'Discuss the drought-prone regions of India and the measures to address water scarcity.',
                type: 'Mains'
            }
        ]
    },

    // ============================================
    // TOPIC 7: ENVIRONMENTAL ISSUES
    // ============================================
    {
        id: 'environmental-issues',
        name: 'Environmental Issues',
        icon: '⚠️',
        category: 'environment',
        theme: 'environment',
        difficulty: 'medium',
        upscRelevance: 'very-high',

        mindMap: {
            central: 'Environmental Issues',
            branches: [
                {
                    name: 'Air Pollution',
                    color: '#95A5A6',
                    children: [
                        'PM2.5, PM10',
                        'AQI monitoring',
                        'Stubble burning',
                        'Vehicular emissions'
                    ]
                },
                {
                    name: 'Water Pollution',
                    color: '#3498DB',
                    children: [
                        'Industrial effluents',
                        'Untreated sewage',
                        'Agricultural runoff',
                        'Groundwater contamination'
                    ]
                },
                {
                    name: 'Biodiversity Loss',
                    color: '#27AE60',
                    children: [
                        'Habitat destruction',
                        'Overexploitation',
                        'Invasive species',
                        '6th mass extinction'
                    ]
                },
                {
                    name: 'Deforestation',
                    color: '#8B4513',
                    children: [
                        'Agriculture expansion',
                        'Infrastructure',
                        'Logging',
                        'Mining'
                    ]
                },
                {
                    name: 'Waste Management',
                    color: '#E74C3C',
                    children: [
                        'Solid waste (MSW)',
                        'E-waste',
                        'Plastic pollution',
                        'Biomedical waste'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'Pollution Types - AWSN',
                content: 'Air, Water, Soil, Noise = AWSN (like "Awesome" but for pollution awareness!)',
                icon: '🔤'
            },
            {
                type: 'visual',
                title: 'AQI Colors',
                content: 'AQI like traffic lights: Green (Good, 0-50) → Yellow (Moderate, 51-100) → Orange (Unhealthy for sensitive, 101-200) → Red (Unhealthy, 201-300) → Purple (Very unhealthy, 301-400) → Maroon (Hazardous, 400+).',
                icon: '🚦'
            },
            {
                type: 'comparison',
                title: 'BOD vs COD',
                content: 'BOD = Biological Oxygen Demand (oxygen needed by microbes to break down organic matter). COD = Chemical Oxygen Demand (total oxygen for all oxidation). High BOD/COD = polluted water!',
                icon: '💧'
            },
            {
                type: 'story',
                title: 'The 6th Extinction',
                content: 'First 5 extinctions were natural (asteroids, volcanoes). The 6th is caused by US (humans). We\'re causing extinction 1000x faster than natural rate. This one we can STOP!',
                icon: '🦣'
            }
        ],

        conceptBlocks: [
            {
                title: 'Air Pollution',
                icon: '💨',
                points: [
                    '📊 KEY POLLUTANTS:',
                    '  • PM2.5, PM10 (Particulate Matter)',
                    '  • SO2, NOx, CO, Ozone',
                    '  • VOCs (Volatile Organic Compounds)',
                    '',
                    '🏭 SOURCES:',
                    '  • Vehicles (40% in cities)',
                    '  • Industries',
                    '  • Power plants (coal)',
                    '  • Crop stubble burning (seasonal)',
                    '  • Dust, construction',
                    '',
                    '📍 INDIA SCENARIO:',
                    '  • 21 of 30 most polluted cities are in India',
                    '  • Delhi consistently among worst',
                    '  • Indo-Gangetic plain worst region',
                    '  • 1.67 million deaths/year (air pollution)',
                    '',
                    '📈 AQI (Air Quality Index):',
                    '  • 0-50: Good (Green)',
                    '  • 51-100: Satisfactory (Yellow)',
                    '  • 101-200: Moderate (Orange)',
                    '  • 201-300: Poor (Red)',
                    '  • 301-400: Very Poor (Purple)',
                    '  • 400+: Severe (Maroon)',
                    '',
                    '🎯 INITIATIVES:',
                    '  • National Clean Air Programme (NCAP) 2019',
                    '  • Target: 20-30% reduction in PM by 2024',
                    '  • GRAP (Graded Response Action Plan) - Delhi',
                    '  • BS-VI emission norms (from 2020)',
                    '  • Odd-even scheme, Smog towers'
                ]
            },
            {
                title: 'Water Pollution',
                icon: '💧',
                points: [
                    '📊 KEY POLLUTANTS:',
                    '  • Organic matter (increases BOD)',
                    '  • Pathogens (bacteria, viruses)',
                    '  • Heavy metals (Hg, Pb, As, Cd)',
                    '  • Nutrients (N, P - eutrophication)',
                    '  • Pesticides, fertilizers',
                    '',
                    '🏭 SOURCES:',
                    '  • Industrial effluents',
                    '  • Untreated sewage (80% in India!)',
                    '  • Agricultural runoff',
                    '  • Open defecation',
                    '  • Solid waste dumping',
                    '',
                    '📍 CRITICAL RIVERS:',
                    '  • Ganga (Namami Gange launched)',
                    '  • Yamuna (most polluted stretch)',
                    '  • Gomti, Sabarmati, Mithi',
                    '',
                    '🔬 WATER QUALITY INDICATORS:',
                    '  • BOD (Biological Oxygen Demand): <3 mg/L good',
                    '  • COD (Chemical Oxygen Demand)',
                    '  • DO (Dissolved Oxygen): >6 mg/L good',
                    '  • Coliform count',
                    '  • pH, TDS',
                    '',
                    '💀 GROUNDWATER ISSUES:',
                    '  • Arsenic: Bengal, Bihar, UP',
                    '  • Fluoride: Rajasthan, AP, Gujarat',
                    '  • Nitrates: Punjab, Haryana (fertilizers)',
                    '',
                    '🎯 INITIATIVES:',
                    '  • Namami Gange Programme (₹20,000 cr)',
                    '  • Jal Jeevan Mission',
                    '  • STPs (Sewage Treatment Plants) expansion',
                    '  • Water (Prevention of Pollution) Act 1974'
                ]
            },
            {
                title: 'Biodiversity Loss',
                icon: '🦁',
                points: [
                    '📊 CURRENT STATUS:',
                    '  • 6th Mass Extinction ongoing',
                    '  • 1 million species at risk (IPBES)',
                    '  • Extinction rate 1000x natural rate',
                    '',
                    '💀 CAUSES (HIPPO):',
                    '  • H: Habitat loss (primary cause)',
                    '  • I: Invasive species',
                    '  • P: Pollution',
                    '  • P: Population growth',
                    '  • O: Overexploitation',
                    '',
                    '📍 INDIA CONTEXT:',
                    '  • Mega-diverse country (4 biodiversity hotspots)',
                    '  • Hotspots: Western Ghats, Eastern Himalayas,',
                    '    Indo-Burma, Sundaland (Nicobar)',
                    '  • 7-8% of world\'s species',
                    '',
                    '🔴 THREATENED SPECIES:',
                    '  • Tiger: ~3,000 (up from 1,400 in 2006)',
                    '  • Elephant: 27,000',
                    '  • Great Indian Bustard: <150 (critically endangered)',
                    '  • Gangetic dolphin: ~3,000',
                    '',
                    '🎯 CONSERVATION:',
                    '  • Wildlife Protection Act 1972',
                    '  • Project Tiger (1973), Project Elephant (1992)',
                    '  • Biological Diversity Act 2002',
                    '  • National Biodiversity Authority',
                    '  • Kunming-Montreal Framework (30x30 target)'
                ]
            },
            {
                title: 'Deforestation',
                icon: '🌳',
                points: [
                    '📊 GLOBAL:',
                    '  • 10 million hectares lost annually',
                    '  • Amazon, Congo, Southeast Asia worst',
                    '  • Contributes 10-15% of GHG emissions',
                    '',
                    '🇮🇳 INDIA:',
                    '  • Forest cover: 21.71% (2021)',
                    '  • Target: 33% (policy goal)',
                    '  • Northeast losing forest rapidly',
                    '  • Compensatory Afforestation Fund',
                    '',
                    '💀 CAUSES:',
                    '  • Agriculture expansion (main)',
                    '  • Infrastructure (roads, dams)',
                    '  • Mining',
                    '  • Logging (legal and illegal)',
                    '  • Urbanization',
                    '  • Forest fires',
                    '',
                    '📍 IMPACTS:',
                    '  • Biodiversity loss',
                    '  • Climate change (carbon release)',
                    '  • Soil erosion, landslides',
                    '  • Changed water cycle',
                    '  • Loss of livelihoods (tribals)',
                    '',
                    '🎯 INITIATIVES:',
                    '  • Forest Conservation Act 1980',
                    '  • Green India Mission (NAPCC)',
                    '  • CAMPA (Compensatory Afforestation)',
                    '  • REDD+ (international)',
                    '  • Joint Forest Management',
                    '  • Van Mahotsav'
                ]
            },
            {
                title: 'Waste Management',
                icon: '🗑️',
                points: [
                    '📊 SOLID WASTE (MSW):',
                    '  • India generates 62 million tonnes/year',
                    '  • Only 20% treated properly',
                    '  • Per capita: 0.5 kg/day (urban)',
                    '  • Solid Waste Management Rules 2016',
                    '  • Segregation at source mandatory',
                    '',
                    '📱 E-WASTE:',
                    '  • India 3rd largest generator globally',
                    '  • 3.2 million tonnes/year',
                    '  • Only 5% recycled formally',
                    '  • E-Waste Management Rules 2016, 2022',
                    '  • EPR (Extended Producer Responsibility)',
                    '',
                    '🥤 PLASTIC POLLUTION:',
                    '  • 3.5 million tonnes/year',
                    '  • Single-use plastics banned (2022)',
                    '  • Microplastics in food chain',
                    '  • Plastic Waste Management Rules',
                    '  • SUP ban includes: plates, cups, straws, stirrers',
                    '',
                    '🏥 BIOMEDICAL WASTE:',
                    '  • COVID increased this massively',
                    '  • Biomedical Waste Management Rules 2016',
                    '  • Color-coded bins mandatory',
                    '',
                    '🎯 SOLUTIONS:',
                    '  • 3Rs: Reduce, Reuse, Recycle',
                    '  • Extended Producer Responsibility (EPR)',
                    '  • Circular economy approach',
                    '  • Waste-to-energy plants',
                    '  • Swachh Bharat Mission'
                ]
            },
            {
                title: 'Other Environmental Issues',
                icon: '🔊',
                points: [
                    '🔊 NOISE POLLUTION:',
                    '  • Standards: Industrial 75 dB, Residential 55 dB',
                    '  • Sources: Traffic, industry, construction',
                    '  • Health: Hearing loss, stress, cardiovascular',
                    '  • Noise Pollution Rules 2000',
                    '',
                    '🏭 SOIL POLLUTION:',
                    '  • Heavy metals from industry',
                    '  • Pesticides, fertilizers',
                    '  • Improper waste disposal',
                    '  • Soil Health Card scheme',
                    '',
                    '☢️ RADIATION:',
                    '  • Nuclear facilities',
                    '  • Medical equipment',
                    '  • Natural (radon)',
                    '  • AERB regulations',
                    '',
                    '🌡️ THERMAL POLLUTION:',
                    '  • Power plant cooling water',
                    '  • Affects aquatic life',
                    '',
                    '💡 LIGHT POLLUTION:',
                    '  • Urban areas',
                    '  • Affects wildlife, human health',
                    '  • Energy waste',
                    '',
                    '⚠️ EMERGING ISSUES:',
                    '  • Microplastics',
                    '  • Pharmaceutical pollution in water',
                    '  • Endocrine disruptors',
                    '  • Space debris',
                    '  • Deep sea mining impacts'
                ]
            }
        ],

        diagrams: [
            {
                title: 'AQI Scale',
                type: 'diagram',
                description: 'Horizontal bar showing AQI categories: Good (0-50, green) → Satisfactory (51-100, yellow) → Moderate (101-200, orange) → Poor (201-300, red) → Very Poor (301-400, purple) → Severe (400+, maroon). Show health implications for each.'
            },
            {
                title: 'Water Pollution Sources',
                type: 'flowchart',
                description: 'Show river/water body receiving inputs from: Industries (chemicals), Cities (sewage), Farms (fertilizers, pesticides), Open defecation. All arrows pointing to polluted water body. Show DO decreasing, BOD increasing.'
            },
            {
                title: 'Biodiversity Loss Causes (HIPPO)',
                type: 'diagram',
                description: 'Hippo illustration with each letter representing: H-Habitat loss, I-Invasive species, P-Pollution, P-Population, O-Overexploitation. Show percentage contribution of each cause.'
            },
            {
                title: 'Waste Hierarchy Pyramid',
                type: 'diagram',
                description: 'Inverted pyramid (most preferred at top): Reduce (best) → Reuse → Recycle → Recover (energy) → Dispose (worst). Show circular economy concept.'
            },
            {
                title: 'India Environmental Issues Map',
                type: 'map',
                description: 'India map showing: Air pollution hotspots (Delhi, Indo-Gangetic), Polluted rivers (Ganga, Yamuna), Groundwater issues (arsenic-Bengal, fluoride-Rajasthan), Deforestation zones (NE India).'
            }
        ],

        quickFacts: [
            '💨 21 of 30 most polluted cities globally are in India',
            '📊 AQI 400+: Severe/Hazardous; 0-50: Good',
            '💧 80% of India\'s sewage is untreated',
            '🦁 1 million species at risk of extinction (IPBES)',
            '🐯 India has 70% of world\'s tigers (~3,000)',
            '🌳 India forest cover: 21.71% (target 33%)',
            '🗑️ India generates 62 million tonnes solid waste/year',
            '📱 India 3rd largest e-waste generator globally',
            '🥤 Single-use plastics banned in India (July 2022)',
            '💀 1.67 million deaths/year due to air pollution in India',
            '☠️ Arsenic in groundwater: Bengal, Bihar, UP',
            '🔵 Namami Gange: ₹20,000 crore programme',
            '🎯 NCAP target: 20-30% PM reduction by 2024',
            '📍 4 biodiversity hotspots in India',
            '🔊 Noise standards: Residential 55 dB, Industrial 75 dB'
        ],

        upscTraps: [
            {
                trap: 'India has 3 biodiversity hotspots',
                clarity: 'NO! India has 4 biodiversity hotspots: (1) Western Ghats (2) Eastern Himalayas (3) Indo-Burma (NE India) (4) Sundaland (Nicobar Islands). Don\'t forget Sundaland!'
            },
            {
                trap: 'BOD measures total pollution in water',
                clarity: 'NO! BOD (Biological Oxygen Demand) measures only ORGANIC pollution (biodegradable). COD (Chemical Oxygen Demand) measures total oxidizable matter. Both needed for complete picture.'
            },
            {
                trap: 'All single-use plastics are banned in India',
                clarity: 'NOT ALL! Ban covers specific items: plates, cups, cutlery, straws, stirrers, wrapping films, etc. (19 items). PET bottles, multi-layer packaging NOT banned. Thickness limits also apply.'
            },
            {
                trap: 'Tiger population has been declining',
                clarity: 'OPPOSITE! Tiger numbers have INCREASED from ~1,400 (2006) to ~3,000+ (2022). Project Tiger is a SUCCESS story. However, Great Indian Bustard, Gangetic dolphin are declining.'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                'Air: 21 of 30 most polluted cities in India; NCAP target 20-30% PM reduction',
                'Water: 80% sewage untreated; Arsenic (Bengal), Fluoride (Rajasthan)',
                'Biodiversity: 4 hotspots in India; HIPPO causes; 6th mass extinction ongoing',
                'Forest: 21.71% cover (target 33%); Green India Mission; CAMPA',
                'Waste: 62M tonnes MSW/year; Single-use plastics banned 2022; 3Rs + EPR',
                'E-waste: 3rd largest generator; only 5% formally recycled',
                'Noise: Residential 55 dB, Industrial 75 dB standards',
                'Major laws: Air 1981, Water 1974, Environment Protection 1986, Wildlife 1972'
            ]
        },

        pyqs: [
            {
                year: 2022,
                question: 'Discuss the major sources and impacts of air pollution in India. What measures are being taken to address it?',
                type: 'Mains'
            },
            {
                year: 2021,
                question: 'What are the causes of biodiversity loss? Discuss the concept of biodiversity hotspots with reference to India.',
                type: 'Mains'
            },
            {
                year: 2020,
                question: 'How many biodiversity hotspots are there in India?',
                type: 'Prelims',
                options: ['2', '3', '4', '5']
            },
            {
                year: 2019,
                question: 'Discuss the problem of e-waste in India and the measures being taken to manage it.',
                type: 'Mains'
            },
            {
                year: 2018,
                question: 'What are the main provisions of the Namami Gange Programme? Evaluate its progress.',
                type: 'Mains'
            },
            {
                year: 2023,
                question: 'Discuss the single-use plastics ban in India. What are its implications and challenges?',
                type: 'Mains'
            }
        ]
    },

    // ============================================
    // TOPIC 8: CONSERVATION STRATEGIES
    // ============================================
    {
        id: 'conservation-strategies',
        name: 'Conservation Strategies',
        icon: '🌿',
        category: 'environment',
        theme: 'environment',
        difficulty: 'medium',
        upscRelevance: 'high',

        mindMap: {
            central: 'Conservation Strategies',
            branches: [
                {
                    name: 'In-Situ Conservation',
                    color: '#27AE60',
                    children: [
                        'National Parks (106)',
                        'Wildlife Sanctuaries (567)',
                        'Biosphere Reserves (18)',
                        'Community Reserves'
                    ]
                },
                {
                    name: 'Ex-Situ Conservation',
                    color: '#3498DB',
                    children: [
                        'Zoos',
                        'Botanical Gardens',
                        'Seed Banks',
                        'Gene Banks'
                    ]
                },
                {
                    name: 'Species Conservation',
                    color: '#E74C3C',
                    children: [
                        'Project Tiger',
                        'Project Elephant',
                        'Vulture Conservation',
                        'Species Recovery Plans'
                    ]
                },
                {
                    name: 'Ecosystem Approach',
                    color: '#9B59B6',
                    children: [
                        'Wetland conservation',
                        'Coral reef protection',
                        'Mangrove restoration',
                        'Forest conservation'
                    ]
                },
                {
                    name: 'Community-Based',
                    color: '#F39C12',
                    children: [
                        'JFM (Joint Forest Mgmt)',
                        'CFR (Community Forest Rights)',
                        'Sacred groves',
                        'Indigenous knowledge'
                    ]
                }
            ]
        },

        memoryHooks: [
            {
                type: 'mnemonic',
                title: 'In-Situ vs Ex-Situ',
                content: 'IN-situ = IN natural habitat (national parks). EX-situ = EXternal/outside habitat (zoos). IN vs OUT!',
                icon: '📍'
            },
            {
                type: 'visual',
                title: 'Protected Area Categories',
                content: 'Strictest → Loosest: National Park (no human activities) → Wildlife Sanctuary (some activities allowed) → Biosphere Reserve (core + buffer + transition, people live there).',
                icon: '🏞️'
            },
            {
                type: 'story',
                title: 'Project Tiger Success',
                content: '1973: India had 1,827 tigers and falling fast. Started Project Tiger. 2022: Over 3,000 tigers! Numbers nearly doubled. India now has 70% of world\'s wild tigers. A conservation SUCCESS!',
                icon: '🐯'
            },
            {
                type: 'comparison',
                title: 'Ramsar vs World Heritage',
                content: 'Ramsar sites = WETLANDS (international importance). World Heritage = Natural OR Cultural sites (outstanding value). India has 75 Ramsar sites and 40 World Heritage sites (2024).',
                icon: '🌊'
            }
        ],

        conceptBlocks: [
            {
                title: 'In-Situ Conservation',
                icon: '🏞️',
                points: [
                    '📝 DEFINITION:',
                    '  • Conservation in natural habitat',
                    '  • Protecting species where they live',
                    '  • Most effective long-term strategy',
                    '',
                    '🏞️ PROTECTED AREA NETWORK (India):',
                    '',
                    '  📍 NATIONAL PARKS (106):',
                    '    • Highest protection level',
                    '    • No human activities allowed',
                    '    • No grazing, hunting, forestry',
                    '    • Declared under Wildlife Protection Act 1972',
                    '    • Example: Jim Corbett (first), Kaziranga, Ranthambore',
                    '',
                    '  📍 WILDLIFE SANCTUARIES (567):',
                    '    • Some human activities allowed',
                    '    • Grazing may be permitted',
                    '    • Rights of existing inhabitants recognized',
                    '    • Can be upgraded to National Park',
                    '    • Example: Bharatpur, Chilika',
                    '',
                    '  📍 BIOSPHERE RESERVES (18):',
                    '    • UNESCO Man and Biosphere Programme',
                    '    • Three zones: Core + Buffer + Transition',
                    '    • Humans can live in transition zone',
                    '    • Large areas for ecosystem conservation',
                    '    • 12 in World Biosphere Reserve Network',
                    '    • Example: Nilgiri (first in India), Sundarbans, Nanda Devi',
                    '',
                    '  📍 CONSERVATION & COMMUNITY RESERVES:',
                    '    • Added in 2003 amendment',
                    '    • Conservation reserve: Between protected areas',
                    '    • Community reserve: On community land',
                    '',
                    '📊 COVERAGE:',
                    '  • 5.26% of India\'s geographic area',
                    '  • Target: 30% by 2030 (Kunming-Montreal)'
                ]
            },
            {
                title: 'Ex-Situ Conservation',
                icon: '🏛️',
                points: [
                    '📝 DEFINITION:',
                    '  • Conservation outside natural habitat',
                    '  • Artificial conditions mimicking natural',
                    '  • Backup for threatened species',
                    '',
                    '🦁 ZOOS (Zoological Parks):',
                    '  • Central Zoo Authority governs all',
                    '  • 165+ recognized zoos in India',
                    '  • Conservation breeding programs',
                    '  • Education and awareness',
                    '  • Example: Delhi Zoo, Mysore Zoo',
                    '',
                    '🌺 BOTANICAL GARDENS:',
                    '  • Plant conservation',
                    '  • Research and education',
                    '  • Example: Indian Botanic Garden (Kolkata), NBG (Lucknow)',
                    '',
                    '🌱 SEED BANKS:',
                    '  • Store seeds at low temperature',
                    '  • Preserve genetic diversity',
                    '  • National Bureau of Plant Genetic Resources (NBPGR)',
                    '  • Svalbard Global Seed Vault (Norway) - world backup',
                    '',
                    '🧬 GENE BANKS:',
                    '  • Store genetic material (DNA, tissues)',
                    '  • Animal and plant genes',
                    '  • Cryopreservation techniques',
                    '',
                    '🥚 BREEDING PROGRAMS:',
                    '  • Captive breeding for reintroduction',
                    '  • Gharial breeding (Lucknow)',
                    '  • Vulture breeding (Pinjore)',
                    '  • Asiatic Lion breeding',
                    '',
                    '⚠️ LIMITATIONS:',
                    '  • Expensive',
                    '  • Limited space',
                    '  • Behavioral changes in captivity',
                    '  • Genetic bottleneck risk'
                ]
            },
            {
                title: 'Species Conservation Programs',
                icon: '🐯',
                points: [
                    '🐯 PROJECT TIGER (1973):',
                    '  • Started April 1, 1973',
                    '  • First 9 reserves, now 54 Tiger Reserves',
                    '  • National Tiger Conservation Authority (NTCA)',
                    '  • Success: 1,827 (1972) → 3,682 (2022)',
                    '  • India has 70% of world\'s wild tigers',
                    '',
                    '🐘 PROJECT ELEPHANT (1992):',
                    '  • Protect elephants and habitat',
                    '  • 33 Elephant Reserves',
                    '  • Address human-elephant conflict',
                    '  • Population: ~27,000 elephants',
                    '',
                    '🐊 CROCODILE CONSERVATION (1975):',
                    '  • Three species: Mugger, Gharial, Saltwater',
                    '  • Gharial was critically endangered',
                    '  • Breeding at Lucknow, Odisha',
                    '',
                    '🦅 VULTURE CONSERVATION:',
                    '  • Crash due to Diclofenac (veterinary drug)',
                    '  • Diclofenac banned for veterinary use',
                    '  • Captive breeding at Pinjore, Buxa',
                    '  • Vulture Safe Zones',
                    '',
                    '🦚 OTHER PROGRAMS:',
                    '  • Indian Bustard conservation',
                    '  • Snow Leopard Project',
                    '  • Dolphin conservation (Gangetic)',
                    '  • Turtle conservation (Olive Ridley)',
                    '',
                    '🔴 RED DATA BOOK (IUCN):',
                    '  • Extinct (EX)',
                    '  • Extinct in Wild (EW)',
                    '  • Critically Endangered (CR)',
                    '  • Endangered (EN)',
                    '  • Vulnerable (VU)',
                    '  • Near Threatened (NT)',
                    '  • Least Concern (LC)'
                ]
            },
            {
                title: 'Ecosystem Conservation',
                icon: '🌊',
                points: [
                    '🌿 WETLAND CONSERVATION:',
                    '  • Ramsar Convention (1971)',
                    '  • India: 75 Ramsar sites (2024)',
                    '  • Largest: Sundarbans (Bengal)',
                    '  • Most sites: Tamil Nadu (16)',
                    '  • National Wetland Conservation Programme',
                    '  • Wetland Rules 2017',
                    '',
                    '🪸 CORAL REEF CONSERVATION:',
                    '  • 4 major reef areas: Andaman, Gulf of Kutch,',
                    '    Gulf of Mannar, Lakshadweep',
                    '  • Threats: Bleaching, pollution, sedimentation',
                    '  • Marine Protected Areas',
                    '',
                    '🌴 MANGROVE CONSERVATION:',
                    '  • Sundarbans world\'s largest mangrove',
                    '  • Protects coast from cyclones',
                    '  • Carbon sink',
                    '  • National Mangrove Committee',
                    '',
                    '🏔️ ALPINE MEADOWS:',
                    '  • High altitude grasslands',
                    '  • Threat from overgrazing',
                    '  • Protected in many national parks',
                    '',
                    '🌐 INTERNATIONAL DESIGNATIONS:',
                    '  • Ramsar Sites: 75 in India',
                    '  • World Heritage Sites: 42 (including natural)',
                    '  • UNESCO Global Geoparks: 0 in India (working on it)',
                    '  • Important Bird Areas (IBAs)'
                ]
            },
            {
                title: 'Community-Based Conservation',
                icon: '👥',
                points: [
                    '🤝 JOINT FOREST MANAGEMENT (JFM):',
                    '  • Partnership: Forest Dept + Local Community',
                    '  • Started: 1990 (post 1988 Forest Policy)',
                    '  • Community protects forest, shares benefits',
                    '  • Van Panchayats, Village Forest Committees',
                    '  • Over 100,000 JFM committees in India',
                    '',
                    '📜 FOREST RIGHTS ACT 2006 (FRA):',
                    '  • Recognizes rights of forest-dwelling communities',
                    '  • Individual Forest Rights (IFR)',
                    '  • Community Forest Rights (CFR)',
                    '  • Right to collect minor forest produce',
                    '  • Right to protect and manage forests',
                    '  • Landmark legislation for tribal rights',
                    '',
                    '🌳 SACRED GROVES:',
                    '  • Traditional community-protected forests',
                    '  • Religious/cultural significance',
                    '  • ~100,000 sacred groves in India',
                    '  • Examples: Devvans (Maharashtra), Kavu (Kerala)',
                    '    Orans (Rajasthan), Sarna (Jharkhand)',
                    '  • Preserved biodiversity for centuries',
                    '',
                    '🐢 COMMUNITY CONSERVED AREAS:',
                    '  • Khonoma village (Nagaland) - self-declared PA',
                    '  • Thembang Bapu (Arunachal) - community conservation',
                    '  • Mendha Lekha (Maharashtra) - CFR success',
                    '',
                    '💡 INDIGENOUS KNOWLEDGE:',
                    '  • Traditional practices often sustainable',
                    '  • Ethno-botany, traditional medicine',
                    '  • Seed saving by farmers',
                    '  • Traditional water harvesting',
                    '',
                    '✅ ADVANTAGES:',
                    '  • Local ownership and commitment',
                    '  • Low cost, sustainable',
                    '  • Preserves traditional knowledge',
                    '  • Addresses livelihood concerns'
                ]
            },
            {
                title: 'Legal Framework',
                icon: '⚖️',
                points: [
                    '📜 WILDLIFE PROTECTION ACT, 1972:',
                    '  • Primary law for wildlife conservation',
                    '  • Established National Parks, Sanctuaries',
                    '  • Wildlife Crime Control Bureau',
                    '  • Schedules I-VI for species protection',
                    '  • Schedule I: Highest protection (tiger, elephant)',
                    '  • Amended multiple times (latest 2022)',
                    '',
                    '🌲 FOREST CONSERVATION ACT, 1980:',
                    '  • Restricts diversion of forest land',
                    '  • Central govt approval needed',
                    '  • Compensatory Afforestation mandatory',
                    '  • Amended 2023 (some exemptions added)',
                    '',
                    '🌍 ENVIRONMENT PROTECTION ACT, 1986:',
                    '  • Umbrella legislation',
                    '  • Post-Bhopal disaster',
                    '  • EIA notification under this',
                    '  • Coastal Regulation Zone (CRZ)',
                    '',
                    '🧬 BIOLOGICAL DIVERSITY ACT, 2002:',
                    '  • Access and Benefit Sharing (ABS)',
                    '  • National Biodiversity Authority (NBA)',
                    '  • State Biodiversity Boards',
                    '  • Biodiversity Management Committees',
                    '  • Implements CBD obligations',
                    '',
                    '🌐 INTERNATIONAL CONVENTIONS:',
                    '  • CBD (Convention on Biological Diversity) 1992',
                    '  • CITES (Trade in Endangered Species) 1975',
                    '  • CMS (Migratory Species) 1979',
                    '  • Ramsar (Wetlands) 1971',
                    '  • World Heritage Convention 1972',
                    '  • Nagoya Protocol (ABS) 2010',
                    '  • Kunming-Montreal Framework 2022'
                ]
            },
            {
                title: 'Recent Developments & Global Frameworks',
                icon: '🌐',
                points: [
                    '🎯 KUNMING-MONTREAL FRAMEWORK (2022):',
                    '  • COP15 of CBD (December 2022)',
                    '  • Replaces Aichi Targets (2010-2020)',
                    '  • Key targets for 2030:',
                    '',
                    '  📍 30x30 TARGET:',
                    '    • Protect 30% of land and 30% of ocean by 2030',
                    '    • Currently: 17% land, 8% ocean protected globally',
                    '    • India: ~5% protected area currently',
                    '',
                    '  📍 RESTORATION:',
                    '    • Restore 30% of degraded ecosystems',
                    '',
                    '  📍 FINANCE:',
                    '    • $200 billion/year for biodiversity by 2030',
                    '    • $30 billion/year from developed to developing',
                    '',
                    '  📍 INVASIVE SPECIES:',
                    '    • Reduce introduction rate by 50%',
                    '',
                    '  📍 PESTICIDES:',
                    '    • Reduce risk from pesticides by 50%',
                    '',
                    '🇮🇳 INDIA\'S NEW INITIATIVES:',
                    '  • Project Dolphin (2020)',
                    '  • MISHTI (Mangrove Initiative for Shoreline)',
                    '  • Amrit Dharohar (wetland conservation)',
                    '  • Green Credit Programme',
                    '  • PM PRANAM (sustainable agriculture)',
                    '',
                    '📊 CONSERVATION SUCCESS STORIES:',
                    '  • Tiger: 1,827 → 3,682',
                    '  • Rhino: Kaziranga success',
                    '  • Crocodile: Near extinction → stable',
                    '  • Lion: Gir population increasing',
                    '  • Olive Ridley: Mass nesting protected',
                    '',
                    '⚠️ ONGOING CHALLENGES:',
                    '  • Human-wildlife conflict',
                    '  • Funding gaps',
                    '  • Poaching and trafficking',
                    '  • Development vs conservation',
                    '  • Climate change impacts'
                ]
            }
        ],

        diagrams: [
            {
                title: 'Protected Area Categories',
                type: 'diagram',
                description: 'Nested circles showing strictness: Innermost = National Park (highest protection). Middle = Wildlife Sanctuary (some activities allowed). Outermost = Biosphere Reserve (core + buffer + transition zones). Show what activities allowed/prohibited in each.'
            },
            {
                title: 'In-Situ vs Ex-Situ Conservation',
                type: 'comparison-chart',
                description: 'Two columns: In-Situ (National Parks, Sanctuaries, Biosphere Reserves, Sacred Groves) vs Ex-Situ (Zoos, Botanical Gardens, Seed Banks, Gene Banks). Show advantages and limitations of each.'
            },
            {
                title: 'India Protected Areas Map',
                type: 'map',
                description: 'India map showing major protected areas: Tiger Reserves (54), Biosphere Reserves (18), Elephant Reserves (33). Mark major ones: Corbett, Kaziranga, Sundarbans, Nilgiri, Western Ghats.'
            },
            {
                title: 'IUCN Red List Categories',
                type: 'diagram',
                description: 'Funnel/gradient from worst to best: Extinct (EX) → Extinct in Wild (EW) → Critically Endangered (CR) → Endangered (EN) → Vulnerable (VU) → Near Threatened (NT) → Least Concern (LC). Give Indian examples for each.'
            },
            {
                title: 'Biosphere Reserve Zonation',
                type: 'diagram',
                description: 'Concentric zones: Core (strictly protected, no human activity) → Buffer (research, education, limited use) → Transition (sustainable use, human settlements). Show activities allowed in each zone.'
            }
        ],

        quickFacts: [
            '🏞️ India has 106 National Parks, 567 Wildlife Sanctuaries',
            '🌿 18 Biosphere Reserves in India (12 in World Network)',
            '🐯 54 Tiger Reserves under Project Tiger',
            '🐘 33 Elephant Reserves under Project Elephant',
            '🐯 Tiger population: 1,827 (1972) → 3,682 (2022)',
            '🌊 75 Ramsar Sites in India (2024); TN has most (16)',
            '📊 5.26% of India under Protected Area network',
            '🎯 30x30 Target: Protect 30% land & ocean by 2030',
            '📜 Wildlife Protection Act 1972: Primary wildlife law',
            '🌳 Forest Rights Act 2006: Tribal rights in forests',
            '🌱 ~100,000 sacred groves preserve biodiversity',
            '🦅 Diclofenac ban saved vultures from extinction',
            '🐊 Gharial breeding program: Near extinction → recovery',
            '🤝 JFM: Over 100,000 committees nationwide',
            '🌐 CBD, CITES, Ramsar, CMS: Key international conventions'
        ],

        upscTraps: [
            {
                trap: 'National Parks allow grazing and forestry',
                clarity: 'FALSE! National Parks have HIGHEST protection - NO grazing, hunting, or forestry allowed. Wildlife Sanctuaries allow some activities. Biosphere Reserves have multiple-use zones.'
            },
            {
                trap: 'Biosphere Reserves are declared under Wildlife Protection Act',
                clarity: 'NO! Biosphere Reserves are under UNESCO Man and Biosphere (MAB) Programme. National Parks and Wildlife Sanctuaries are under Wildlife Protection Act 1972. Different legal basis!'
            },
            {
                trap: 'India has more Wildlife Sanctuaries than National Parks',
                clarity: 'TRUE! India has 567 Wildlife Sanctuaries but only 106 National Parks. Sanctuaries are easier to declare (less restrictions), Parks have highest protection requirements.'
            },
            {
                trap: 'Ex-situ conservation is better than In-situ',
                clarity: 'GENERALLY FALSE! In-situ (natural habitat) is preferred as it preserves entire ecosystem, natural behavior, and evolutionary processes. Ex-situ is backup for critically endangered species or research.'
            }
        ],

        revisionBox: {
            title: '⚡ 30-Second Revision',
            points: [
                'In-situ: Conservation in natural habitat (NPs, WLS, BRs)',
                'Ex-situ: Outside habitat (Zoos, seed banks, gene banks)',
                'India: 106 NPs, 567 WLS, 18 BRs, 54 Tiger Reserves',
                'Project Tiger success: 1,827 (1972) → 3,682 (2022)',
                'Ramsar sites: 75 in India; TN has most (16)',
                'Community: JFM (100,000+ committees), FRA 2006, sacred groves',
                'Laws: WPA 1972, FCA 1980, EPA 1986, BDA 2002',
                'Global: CBD, CITES, Ramsar; 30x30 target by 2030'
            ]
        },

        pyqs: [
            {
                year: 2022,
                question: 'Distinguish between National Parks, Wildlife Sanctuaries, and Biosphere Reserves with examples.',
                type: 'Mains'
            },
            {
                year: 2021,
                question: 'Discuss the role of community participation in biodiversity conservation with reference to JFM and FRA.',
                type: 'Mains'
            },
            {
                year: 2020,
                question: 'How many Biosphere Reserves does India have?',
                type: 'Prelims',
                options: ['14', '16', '18', '20']
            },
            {
                year: 2019,
                question: 'What is the Kunming-Montreal Global Biodiversity Framework? Discuss its key targets.',
                type: 'Mains'
            },
            {
                year: 2018,
                question: 'Evaluate the success of Project Tiger in India.',
                type: 'Mains'
            },
            {
                year: 2023,
                question: 'Discuss the significance of Ramsar sites. How many Ramsar sites does India have?',
                type: 'Mains'
            }
        ]
    }

];

// ============================================
// FINAL EXPORT - COMPLETE ENVIRONMENT DATA
// ============================================

// Make data available globally
window.environmentData = environmentData;

console.log('🌍✅ Environment Data COMPLETE:', environmentData.length, 'topics');
console.log('📚 Topics loaded:', environmentData.map(t => t.name).join(', '));
