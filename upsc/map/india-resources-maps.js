/**
 * ═══════════════════════════════════════════════════════════════
 * DHARAVERSE UPSC MAPS — INDIA RESOURCES
 * MAP 034 to MAP 045 | Minerals · Coal · Oil · Power · Agriculture
 * Soils · Forests · Fishing · Industries · Nuclear · Renewable
 * Version 2026 | Gateway to IAS
 * ═══════════════════════════════════════════════════════════════
 */

(function () {

  const DATA = {

    // ── MINERAL DEPOSITS ──
    ironOre: [
      { name: 'Singhbhum (Noamundi)', lat: 22.15, lng: 85.50, state: 'Jharkhand', type: 'Hematite', production: 'Largest producer', upsc: 'Iron ore belt — Singhbhum-Keonjhar. TISCO at Jamshedpur.' },
      { name: 'Keonjhar', lat: 21.63, lng: 85.58, state: 'Odisha', type: 'Hematite', production: 'Major', upsc: 'Odisha — largest reserves of iron ore in India (33%).' },
      { name: 'Sundargarh', lat: 22.12, lng: 84.05, state: 'Odisha', type: 'Hematite', production: 'Major', upsc: 'Rourkela Steel Plant (SAIL).' },
      { name: 'Durg-Bastar (Bailadila)', lat: 18.67, lng: 81.22, state: 'Chhattisgarh', type: 'Hematite', production: 'Export quality', upsc: 'Bailadila mines — richest iron ore, exported to Japan.' },
      { name: 'Bellary-Hospet', lat: 15.35, lng: 76.39, state: 'Karnataka', type: 'Hematite', production: 'Major', upsc: 'Sandur hills. Illegal mining controversy.' },
      { name: 'Kudremukh', lat: 13.18, lng: 75.18, state: 'Karnataka', type: 'Magnetite', production: 'Major magnetite', upsc: 'SC closed mining here for environmental reasons.' },
      { name: 'Goa Mines', lat: 15.40, lng: 74.00, state: 'Goa', type: 'Low grade', production: 'Export', upsc: 'SC banned mining 2012. Shah Commission report.' },
      { name: 'Salem', lat: 11.65, lng: 78.16, state: 'Tamil Nadu', type: 'Magnetite', production: 'Moderate', upsc: 'Salem Steel Plant (stainless steel).' },
      { name: 'Mayurbhanj', lat: 21.90, lng: 86.73, state: 'Odisha', type: 'Hematite', production: 'Major', upsc: 'Part of Singhbhum-Keonjhar belt.' }
    ],

    coalFields: {
      gondwana: [
        { name: 'Raniganj', lat: 23.62, lng: 87.12, state: 'West Bengal', basin: 'Damodar Valley', upsc: 'First coal mine in India (1774). ECL operates.' },
        { name: 'Jharia', lat: 23.74, lng: 86.42, state: 'Jharkhand', basin: 'Damodar Valley', upsc: 'Largest coal field. Best coking coal. Underground fires since 1916.' },
        { name: 'Bokaro', lat: 23.79, lng: 85.97, state: 'Jharkhand', basin: 'Damodar Valley', upsc: 'Bokaro Steel Plant. CCL operates.' },
        { name: 'Karanpura', lat: 23.65, lng: 85.50, state: 'Jharkhand', basin: 'Damodar Valley', upsc: 'North & South Karanpura fields.' },
        { name: 'Singrauli', lat: 24.20, lng: 82.70, state: 'MP/UP', basin: 'Son Valley', upsc: 'Largest open-cast mines. Super thermal power station.' },
        { name: 'Korba', lat: 22.35, lng: 82.69, state: 'Chhattisgarh', basin: 'Mahanadi Valley', upsc: 'SECL operates. Super thermal power.' },
        { name: 'Talcher', lat: 20.95, lng: 85.23, state: 'Odisha', basin: 'Mahanadi Valley', upsc: 'Largest coal reserves in single field. MCL operates.' },
        { name: 'Godavari Valley', lat: 18.80, lng: 80.20, state: 'Telangana', basin: 'Godavari Valley', upsc: 'Singareni Collieries (SCCL). Only South Indian field of scale.' },
        { name: 'Wardha Valley', lat: 20.50, lng: 79.00, state: 'Maharashtra', basin: 'Wardha Valley', upsc: 'Non-coking coal. WCL operates.' },
        { name: 'Sohagpur', lat: 23.50, lng: 81.50, state: 'MP', basin: 'Son Valley', upsc: 'Coal bed methane extraction project.' }
      ],
      tertiary: [
        { name: 'Makum-Margherita', lat: 27.28, lng: 95.68, state: 'Assam', upsc: 'Oldest tertiary coalfield. Poor quality but only NE source.' },
        { name: 'Cherrapunji', lat: 25.27, lng: 91.73, state: 'Meghalaya', upsc: 'Rat-hole mining controversy. Banned by NGT but continues.' },
        { name: 'Arunachal', lat: 27.10, lng: 93.60, state: 'Arunachal Pradesh', upsc: 'Small deposits. NE region.' }
      ]
    },

    oilGas: {
      offshore: [
        { name: 'Mumbai High (Bombay High)', lat: 19.37, lng: 71.37, production: '65% of India\'s crude', upsc: 'Discovered 1974. ONGC. India\'s largest oilfield. Continental shelf of Arabian Sea.' },
        { name: 'Bassein', lat: 19.80, lng: 72.15, production: 'Major gas field', upsc: 'Natural gas field near Mumbai High.' },
        { name: 'Krishna-Godavari Basin (KG-D6)', lat: 16.00, lng: 81.50, production: 'Major gas', upsc: 'Reliance Industries. KG Basin — natural gas discovery. Supreme Court cases.' },
        { name: 'Panna-Mukta-Tapti', lat: 20.50, lng: 71.50, production: 'Moderate', upsc: 'JV of ONGC, Reliance, BG Group.' },
        { name: 'Ravva', lat: 16.50, lng: 81.80, production: 'Moderate', upsc: 'East coast offshore. Cairn India.' }
      ],
      onshore: [
        { name: 'Digboi', lat: 27.39, lng: 95.62, production: 'Historical', upsc: 'First oil well in Asia (1889). Oldest refinery. Assam. "Dig-Boy-Dig" legend.' },
        { name: 'Naharkatiya', lat: 27.28, lng: 95.35, production: 'Major', upsc: 'Assam oil field. OIL (Oil India Ltd) operates.' },
        { name: 'Moran-Hugrijan', lat: 27.15, lng: 94.92, production: 'Major', upsc: 'Assam. One of oldest producing fields.' },
        { name: 'Ankleshwar', lat: 21.63, lng: 73.02, production: 'Major', upsc: 'Gujarat. Discovered 1958. ONGC.' },
        { name: 'Cambay Basin', lat: 22.30, lng: 72.60, production: 'Moderate', upsc: 'Gujarat. Oil + gas. Mehsana, Ahmedabad fields.' },
        { name: 'Barmer-Sanchor (Rajasthan)', lat: 25.75, lng: 71.39, production: 'Growing', upsc: 'Cairn India. Mangala, Bhagyam, Aishwariya fields. Largest onshore discovery in 20 years.' },
        { name: 'Cauvery Basin', lat: 10.50, lng: 79.50, production: 'Small', upsc: 'Tamil Nadu onshore-offshore. Gas dominant.' }
      ],
      refineries: [
        { name: 'Jamnagar (Reliance)', lat: 22.47, lng: 69.07, capacity: 'World\'s largest (68.2 MTPA)', upsc: 'Mukesh Ambani\'s Reliance. Largest single-location refinery globally.' },
        { name: 'Mathura', lat: 27.50, lng: 77.67, capacity: '8 MTPA', upsc: 'IOCL. Near Taj Mahal — pollution controversy.' },
        { name: 'Panipat', lat: 29.39, lng: 76.97, capacity: '15 MTPA', upsc: 'IOCL. One of largest in India.' },
        { name: 'Mumbai (BPCL)', lat: 19.07, lng: 72.88, capacity: '12 MTPA', upsc: 'BPCL refinery. Privatization controversy.' },
        { name: 'Kochi', lat: 9.93, lng: 76.26, capacity: '15.5 MTPA', upsc: 'BPCL. Petrochemical complex.' },
        { name: 'Paradip', lat: 20.32, lng: 86.60, capacity: '15 MTPA', upsc: 'IOCL. Newest major refinery.' },
        { name: 'Digboi', lat: 27.39, lng: 95.62, capacity: '0.65 MTPA', upsc: 'Oldest refinery in world (1901). Heritage site.' },
        { name: 'Numaligarh', lat: 26.63, lng: 93.72, capacity: '3 MTPA', upsc: 'NRL. Assam Accord refinery. Expansion to 9 MTPA.' },
        { name: 'Mangalore', lat: 12.87, lng: 74.84, capacity: '15 MTPA', upsc: 'MRPL (ONGC subsidiary).' },
        { name: 'Vizag', lat: 17.68, lng: 83.22, capacity: '8.3 MTPA', upsc: 'HPCL. Strategic disinvestment debate.' }
      ]
    },

    // ── POWER PLANTS ──
    nuclearPlants: [
      { name: 'Tarapur', lat: 19.83, lng: 72.69, state: 'Maharashtra', capacity: '1400 MW', reactors: 4, upsc: 'First nuclear plant in India (1969). BWR + PHWR. US collaboration then India self-reliant.' },
      { name: 'Rawatbhata (RAPS)', lat: 24.88, lng: 75.58, state: 'Rajasthan', capacity: '1180 MW', reactors: 6, upsc: 'RAPS. Canadian CANDU technology initially. Expanded indigenously.' },
      { name: 'Kalpakkam (MAPS)', lat: 12.56, lng: 80.17, state: 'Tamil Nadu', capacity: '440 MW', reactors: 2, upsc: 'First fully indigenous plant. Prototype Fast Breeder Reactor (PFBR) here.' },
      { name: 'Narora', lat: 28.19, lng: 78.39, state: 'UP', capacity: '440 MW', reactors: 2, upsc: 'Only nuclear plant in UP. Safety upgraded after fire incident.' },
      { name: 'Kakrapar (KAPS)', lat: 21.24, lng: 73.35, state: 'Gujarat', capacity: '1540 MW', reactors: 4, upsc: 'Unit 3: India\'s first 700 MWe PHWR (2024). Indigenous design.' },
      { name: 'Kaiga', lat: 14.85, lng: 74.44, state: 'Karnataka', capacity: '880 MW', reactors: 4, upsc: 'World record for continuous operation (962 days Unit-1).' },
      { name: 'Kudankulam', lat: 8.17, lng: 77.71, state: 'Tamil Nadu', capacity: '2000 MW', reactors: 2, upsc: 'Russian VVER technology. Anti-nuclear protests. Largest in India.' },
      { name: 'Jaitapur (proposed)', lat: 17.02, lng: 73.22, state: 'Maharashtra', capacity: '9900 MW (proposed)', reactors: 6, upsc: 'French EPR reactors. If built, world\'s largest nuclear plant. Protests.' },
      { name: 'Gorakhpur (GHAVP)', lat: 27.97, lng: 76.67, state: 'Haryana', capacity: '2800 MW (under construction)', reactors: 4, upsc: 'Indigenous 700 MWe PHWRs. Near Delhi.' }
    ],

    renewableEnergy: {
      solar: [
        { name: 'Bhadla Solar Park', lat: 27.55, lng: 71.92, state: 'Rajasthan', capacity: '2245 MW', upsc: 'World\'s largest solar park. Jodhpur district. Thar desert sun.' },
        { name: 'Pavagada Solar Park', lat: 14.08, lng: 77.29, state: 'Karnataka', capacity: '2050 MW', upsc: '2nd largest. "Solar Township". Land lease model.' },
        { name: 'Rewa Solar Park', lat: 24.53, lng: 81.30, state: 'MP', capacity: '750 MW', upsc: 'PM Modi inaugurated. Supplies Delhi Metro.' },
        { name: 'Charanka Solar Park', lat: 23.90, lng: 71.19, state: 'Gujarat', capacity: '690 MW', upsc: 'Asia\'s first large solar park (2012).' },
        { name: 'Kamuthi Solar Park', lat: 9.35, lng: 78.37, state: 'Tamil Nadu', capacity: '648 MW', upsc: 'Was world\'s largest when built (2016).' },
        { name: 'Ananthapuramu', lat: 15.00, lng: 77.60, state: 'AP', capacity: '1500 MW', upsc: 'Ultra Mega Solar Park.' }
      ],
      wind: [
        { name: 'Muppandal', lat: 8.33, lng: 77.52, state: 'Tamil Nadu', capacity: '1500 MW', upsc: 'Largest wind farm in India. Kanyakumari district.' },
        { name: 'Jaisalmer', lat: 26.92, lng: 70.90, state: 'Rajasthan', capacity: '1064 MW', upsc: 'Thar desert wind corridor.' },
        { name: 'Kutch Wind Farm', lat: 23.50, lng: 69.50, state: 'Gujarat', capacity: '~1000 MW', upsc: 'Rann of Kutch wind zone.' },
        { name: 'Satara', lat: 17.68, lng: 74.00, state: 'Maharashtra', capacity: '~800 MW', upsc: 'Western Ghats wind corridor.' },
        { name: 'Chitradurga', lat: 14.23, lng: 76.40, state: 'Karnataka', capacity: '~600 MW', upsc: 'Karnataka wind belt.' },
        { name: 'Nagercoil', lat: 8.18, lng: 77.43, state: 'Tamil Nadu', capacity: '~500 MW', upsc: 'Tip of India — convergence zone winds.' }
      ]
    },

    // ── AGRICULTURE ZONES ──
    agriculture: {
      rice: [
        { name: 'West Bengal', lat: 23, lng: 88, production: 'Largest producer', upsc: 'Highest rice production. Aman, Boro, Aus seasons.' },
        { name: 'Punjab-Haryana', lat: 30, lng: 76, production: 'Major (Green Revolution)', upsc: 'High yield. Stubble burning problem. Depleting groundwater.' },
        { name: 'UP (East)', lat: 26, lng: 83, production: 'Major', upsc: 'Gangetic plain rice.' },
        { name: 'Andhra Pradesh', lat: 16, lng: 80, production: 'Major', upsc: 'Krishna-Godavari delta — granary of South.' },
        { name: 'Tamil Nadu', lat: 11, lng: 79, production: 'Major', upsc: 'Thanjavur — Rice Bowl of Tamil Nadu. Kaveri delta.' },
        { name: 'Assam', lat: 26, lng: 92, production: 'Moderate', upsc: 'Brahmaputra valley rice cultivation.' }
      ],
      wheat: [
        { name: 'UP', lat: 27, lng: 80, production: 'Largest producer', upsc: 'Highest wheat production but low productivity per hectare.' },
        { name: 'Punjab', lat: 31, lng: 75, production: 'Highest yield/hectare', upsc: 'Green Revolution state. MSP procurement dominant.' },
        { name: 'Haryana', lat: 29, lng: 76, production: 'Major', upsc: 'High yield. Wheat + rice rotation → water crisis.' },
        { name: 'MP', lat: 23, lng: 78, production: 'Growing fast', upsc: 'Now 2nd largest wheat producer. "Wheat Bowl of India".' },
        { name: 'Rajasthan', lat: 27, lng: 74, production: 'Major', upsc: 'Irrigated wheat in east Rajasthan.' }
      ],
      cotton: [
        { name: 'Gujarat', lat: 22, lng: 72, production: 'Largest producer', upsc: 'Bt cotton revolution. Black soil.' },
        { name: 'Maharashtra', lat: 20, lng: 76, production: 'Major', upsc: 'Vidarbha cotton. Farmer crisis. Black soil (regur).' },
        { name: 'Telangana', lat: 18, lng: 79, production: 'Major', upsc: 'Warangal cotton market.' },
        { name: 'Punjab-Haryana', lat: 30, lng: 75, production: 'Moderate', upsc: 'North Indian cotton belt.' },
        { name: 'Rajasthan', lat: 25, lng: 73, production: 'Growing', upsc: 'Southern Rajasthan.' }
      ],
      sugarcane: [
        { name: 'UP', lat: 27, lng: 80, production: 'Largest producer', upsc: '~50% of India\'s sugarcane. Most sugar mills. Farmer-mill payment issues.' },
        { name: 'Maharashtra', lat: 18, lng: 75, production: 'Major (high sucrose)', upsc: 'Higher sucrose content. Cooperative sugar mills. Sharad Pawar factor.' },
        { name: 'Karnataka', lat: 15, lng: 76, production: 'Major', upsc: 'Belgaum-Mandya belt. Second highest sucrose.' },
        { name: 'Tamil Nadu', lat: 11, lng: 79, production: 'Moderate', upsc: 'Kaveri delta region.' }
      ],
      teaCoffee: [
        { name: 'Assam (Tea)', lat: 26.5, lng: 93, crop: 'Tea', upsc: 'Largest tea producer. CTC tea. Brahmaputra valley gardens.' },
        { name: 'Darjeeling (Tea)', lat: 27.03, lng: 88.26, crop: 'Tea', upsc: 'GI tagged "Champagne of Teas". Orthodox tea. World famous.' },
        { name: 'Nilgiris (Tea)', lat: 11.4, lng: 76.7, crop: 'Tea', upsc: 'South Indian tea. Tamil Nadu.' },
        { name: 'Munnar (Tea)', lat: 10.09, lng: 77.06, crop: 'Tea', upsc: 'Kerala highlands. Tourism + tea.' },
        { name: 'Coorg (Coffee)', lat: 12.42, lng: 75.74, crop: 'Coffee', upsc: 'India\'s coffee capital. Arabica + Robusta. 70% of India\'s coffee from Karnataka.' },
        { name: 'Wayanad (Coffee)', lat: 11.60, lng: 76.08, crop: 'Coffee', upsc: 'Kerala. Second largest coffee region.' },
        { name: 'Chikmagalur (Coffee)', lat: 13.32, lng: 75.77, crop: 'Coffee', upsc: 'First coffee grown here by Baba Budan (17th century). Karnataka.' }
      ]
    },

    // ── SOIL TYPES ──
    soils: [
      {
        name: 'Alluvial Soil',
        color: '#DAA520',
        coverage: '43% of India',
        regions: 'Northern Plains, River valleys, Coastal plains',
        coords: [
          [30, 74], [30, 78], [27.5, 82], [27, 85], [26.5, 88], [25, 90],
          [23, 88], [22, 87], [24, 84], [24, 80], [25, 77], [28, 75], [30, 74]
        ],
        upsc: 'Most fertile. Rice, wheat, sugarcane. Bangar (old) & Khadar (new). Rich in potash, poor in phosphorus.'
      },
      {
        name: 'Black Soil (Regur)',
        color: '#1C1C1C',
        coverage: '15% of India',
        regions: 'Deccan Plateau, Maharashtra, Gujarat, MP, Karnataka',
        coords: [
          [23, 73], [24, 76], [23, 79], [22, 80],
          [20, 79], [18, 77], [16, 76], [15, 75],
          [17, 74], [19, 73], [21, 73], [23, 73]
        ],
        upsc: 'From Deccan Trap basalt. Self-ploughing (swells when wet, cracks when dry). Cotton soil. Rich in calcium, magnesium. Iron, lime, alumina.'
      },
      {
        name: 'Red Soil',
        color: '#CD5C5C',
        coverage: '18% of India',
        regions: 'Eastern & Southern Deccan, Odisha, Chhattisgarh, TN',
        coords: [
          [22, 80], [22, 84], [20, 86], [18, 84],
          [16, 82], [14, 80], [12, 79], [10, 78],
          [11, 77], [13, 76], [16, 76], [18, 77],
          [20, 79], [22, 80]
        ],
        upsc: 'From crystalline igneous rocks. Red due to iron oxide. Low fertility. Needs irrigation. Millets, pulses, groundnut.'
      },
      {
        name: 'Laterite Soil',
        color: '#B22222',
        coverage: '3.7% of India',
        regions: 'Kerala, Karnataka, parts of TN, Odisha, NE',
        coords: [],
        upsc: 'Formed by intense leaching in heavy rainfall areas. Brick-like when dry. Poor in nitrogen, potassium. Cashew, tea, coffee. Name from Latin "later" = brick.'
      },
      {
        name: 'Desert / Arid Soil',
        color: '#F4A460',
        coverage: '6.4% of India',
        regions: 'Western Rajasthan, parts of Gujarat, Haryana',
        coords: [
          [28, 70], [29, 72], [28, 73], [27, 74],
          [25, 73], [24, 72], [23, 71],
          [24, 69.5], [26, 69], [28, 70]
        ],
        upsc: 'Sandy. Low moisture. High salt content. Kankar (calcium carbonate). Fertile when irrigated (Indira Gandhi Canal). Bajra, jowar.'
      },
      {
        name: 'Mountain / Forest Soil',
        color: '#2E8B57',
        coverage: '7.7% of India',
        regions: 'Himalayan slopes, Western Ghats higher elevations',
        coords: [],
        upsc: 'High humus content. Acidic. Thin but rich in organic matter. Tea, coffee, spices, fruits. Varies with altitude.'
      }
    ],

    // ── FOREST TYPES ──
    forests: [
      { name: 'MP (Max forest cover)', lat: 23, lng: 79, cover: '77,414 sq km', percent: '25.14%', upsc: 'Largest forest cover (area) among states.' },
      { name: 'Mizoram (Max % cover)', lat: 23.5, lng: 92.7, cover: '17,820 sq km', percent: '84.53%', upsc: 'Highest % of area under forest.' },
      { name: 'Arunachal Pradesh', lat: 28, lng: 94, cover: '66,431 sq km', percent: '79.33%', upsc: '3rd largest forest cover.' },
      { name: 'Maharashtra', lat: 19, lng: 76, cover: '50,778 sq km', percent: '16.50%', upsc: 'Western Ghats forests.' },
      { name: 'Andaman & Nicobar', lat: 12, lng: 93, cover: '6,743 sq km', percent: '81.73%', upsc: 'Dense tropical evergreen.' },
      { name: 'Jharkhand', lat: 23.5, lng: 85, cover: '23,721 sq km', percent: '29.76%', upsc: 'Sal forests. Tribal areas.' },
      { name: 'Rajasthan (Least forest %)', lat: 27, lng: 73, cover: '16,572 sq km', percent: '4.84%', upsc: 'Desert state. Lowest forest % among large states.' }
    ],

    // ── INDUSTRIAL REGIONS ──
    industries: [
      { name: 'Mumbai-Pune Region', lat: 19.0, lng: 73.5, type: 'Diversified', products: 'Textiles, Petrochemicals, Pharmaceuticals, IT, Finance', upsc: 'Largest industrial region. Mumbai = financial capital. Pune = IT, auto.' },
      { name: 'Hooghly (Kolkata) Region', lat: 22.5, lng: 88.3, type: 'Traditional', products: 'Jute, Engineering, Steel, Leather', upsc: 'Oldest industrial region. Durgapur-Asansol steel belt. Jute mills along Hooghly.' },
      { name: 'Bangalore-Chennai Corridor', lat: 12.9, lng: 78.5, type: 'Modern/IT', products: 'IT/ITES, Aerospace, Auto, Electronics', upsc: 'Silicon Valley of India (Bangalore). Chennai = Detroit of India (auto). IT exports.' },
      { name: 'Chotanagpur Region', lat: 23.3, lng: 85.5, type: 'Heavy/Mineral', products: 'Steel, Coal, Heavy engineering, Locomotives', upsc: 'Mineral heartland. TISCO Jamshedpur. Bokaro Steel. HEC Ranchi. Coal mines.' },
      { name: 'Gujarat Region', lat: 22.5, lng: 72.5, type: 'Diversified', products: 'Textiles, Petrochemicals, Pharma, Dairy, Ports', upsc: 'Ahmedabad textiles. Jamnagar refinery. Amul dairy. Kandla port.' },
      { name: 'Delhi-Meerut Region', lat: 28.7, lng: 77.5, type: 'Consumer/Mixed', products: 'Electronics, Auto, FMCG, Handloom, IT', upsc: 'NCR industrial zone. Noida-Gurgaon IT. Sports goods (Meerut). Brass (Moradabad).' },
      { name: 'Vizag-Guntur Region', lat: 17.0, lng: 83.0, type: 'Heavy/Emerging', products: 'Steel (RINL), Shipbuilding, Pharma', upsc: 'Vizag Steel Plant (RINL). Hindustan Shipyard. Pharma hub.' },
      { name: 'Coimbatore Region', lat: 11.0, lng: 77.0, type: 'Engineering', products: 'Pumps, Motors, Textiles, Auto components', upsc: 'Manchester of South India. Pump city. Engineering goods.' }
    ],

    // ── FISHING ZONES ──
    fishing: [
      { name: 'Kerala Coast', lat: 9.5, lng: 76.0, type: 'Marine', species: 'Sardine, Mackerel, Prawns', upsc: 'Highest marine fish catch. Traditional fishermen.' },
      { name: 'Gujarat Coast', lat: 22, lng: 69, type: 'Marine', species: 'Bombay Duck, Hilsa, Prawns', upsc: '2nd in marine catch. Veraval — largest fishing port.' },
      { name: 'Tamil Nadu Coast', lat: 10, lng: 79.5, type: 'Marine', species: 'Tuna, Sharks, Prawns', upsc: 'Deep sea fishing. Rameshwaram fishermen — Sri Lanka issue.' },
      { name: 'West Bengal', lat: 22, lng: 88, type: 'Inland', species: 'Hilsa, Rohu, Catla', upsc: 'Largest inland fish producer. Hilsa — national fish of Bangladesh.' },
      { name: 'Andhra Pradesh', lat: 16, lng: 81, type: 'Aquaculture', species: 'Shrimp, Prawn', upsc: 'Largest aquaculture producer. Shrimp exports. Blue Revolution.' },
      { name: 'Odisha', lat: 19.7, lng: 85, type: 'Lagoon/Marine', species: 'Chilika fish, Mackerel', upsc: 'Chilika Lake fishery. Coastal fishing.' }
    ],

    // ── BAUXITE, COPPER, OTHER MINERALS ──
    otherMinerals: [
      { name: 'Bauxite — Odisha (Panchpatmali)', lat: 18.77, lng: 83.36, mineral: 'Bauxite', upsc: 'Largest bauxite reserves. NALCO. Koraput district.' },
      { name: 'Bauxite — Gujarat', lat: 21.5, lng: 72.5, mineral: 'Bauxite', upsc: 'Jamnagar, Junagadh districts.' },
      { name: 'Bauxite — Jharkhand', lat: 23.5, lng: 85, mineral: 'Bauxite', upsc: 'Ranchi-Lohardaga belt.' },
      { name: 'Copper — Khetri (Rajasthan)', lat: 28.0, lng: 75.8, mineral: 'Copper', upsc: 'Largest copper mines. Hindustan Copper Ltd.' },
      { name: 'Copper — Singhbhum (Jharkhand)', lat: 22.5, lng: 86.0, mineral: 'Copper', upsc: 'Mosabani mines. 2nd largest copper region.' },
      { name: 'Gold — Kolar (Karnataka)', lat: 12.95, lng: 78.28, mineral: 'Gold', upsc: 'Deepest gold mines (3 km). Now closed due to uneconomic. KGF.' },
      { name: 'Gold — Hutti (Karnataka)', lat: 16.20, lng: 76.68, mineral: 'Gold', upsc: 'Only active gold mine. Raichur district.' },
      { name: 'Manganese — Nagpur-Balaghat', lat: 21.5, lng: 80, mineral: 'Manganese', upsc: 'MP & Maharashtra. Used in steel alloys.' },
      { name: 'Mica — Jharkhand-Bihar', lat: 24.5, lng: 85.5, mineral: 'Mica', upsc: 'Koderma-Gaya belt. India = largest mica producer. Child labor issues.' },
      { name: 'Limestone — Andhra Pradesh', lat: 15, lng: 79, mineral: 'Limestone', upsc: 'Largest limestone reserves. Used in cement industry.' },
      { name: 'Monazite — Kerala Coast', lat: 9, lng: 76.5, mineral: 'Monazite (Thorium)', upsc: 'Beach sand minerals. India has world\'s largest thorium reserves. Strategic mineral.' }
    ]
  };

  // ══════════════════════════════════════════════════════════════
  // MAP DEFINITIONS — ALL 12 MAPS
  // ══════════════════════════════════════════════════════════════

  const INDIA_RESOURCES_MAPS = [

    // MAP 034 — Mineral Resources
    {
      mapNum: 34,
      title: 'Mineral Resources Map of India',
      subtitle: 'Iron · Coal · Bauxite · Copper · Gold · Manganese · Mica',
      mapConfig: { center: [22, 80], zoom: 5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Minerals',
          items: [
            { dot: '#CC0000', label: 'Iron Ore' },
            { dot: '#333333', label: 'Coal' },
            { dot: '#FF8C00', label: 'Bauxite' },
            { dot: '#B8860B', label: 'Copper' },
            { dot: '#FFD700', label: 'Gold' },
            { dot: '#8B4513', label: 'Manganese' },
            { dot: '#DDA0DD', label: 'Mica' },
            { dot: '#808080', label: 'Limestone' },
            { dot: '#FF69B4', label: 'Monazite (Thorium)' }
          ]
        }
      ],
      info: [
        {
          title: 'INDIA\'S MINERAL WEALTH',
          facts: [
            { label: 'Iron Ore', value: 'Reserves: 28 billion tonnes. Odisha (33%), Jharkhand, Chhattisgarh, Karnataka, Goa' },
            { label: 'Coal', value: '5th largest reserves globally. Jharkhand, Odisha, Chhattisgarh, WB, MP' },
            { label: 'Bauxite', value: 'Odisha, Gujarat, Jharkhand, Maharashtra, Chhattisgarh' },
            { label: 'Thorium', value: 'India has world\'s LARGEST thorium reserves (beach sands of Kerala)' }
          ]
        }
      ],
      render(map, app) {
        const mineralColors = { 'Iron Ore': '#CC0000', 'Coal': '#333333', 'Bauxite': '#FF8C00', 'Copper': '#B8860B', 'Gold': '#FFD700', 'Manganese': '#8B4513', 'Mica': '#DDA0DD', 'Limestone': '#808080', 'Monazite (Thorium)': '#FF69B4' };

        DATA.ironOre.forEach(d => {
          const m = L.circleMarker([d.lat, d.lng], { radius: 8, color: '#000', fillColor: '#CC0000', fillOpacity: 0.9, weight: 2 });
          m.bindPopup(app.buildPopup(`⛏ ${d.name}`, `<b>State:</b> ${d.state}<br><b>Type:</b> ${d.type}<br><b>UPSC:</b> ${d.upsc}`, ['Iron Ore', d.state]));
          app.addLayer(m);
          app.addLayer(app.labelMarker([d.lat + 0.2, d.lng], d.name, '#CC0000', '7px'));
        });

        DATA.coalFields.gondwana.slice(0, 6).forEach(d => {
          const m = L.circleMarker([d.lat, d.lng], { radius: 7, color: '#000', fillColor: '#555555', fillOpacity: 0.9, weight: 2 });
          m.bindPopup(app.buildPopup(`⛏ ${d.name}`, `<b>Basin:</b> ${d.basin}<br><b>UPSC:</b> ${d.upsc}`, ['Coal', d.state]));
          app.addLayer(m);
        });

        DATA.otherMinerals.forEach(d => {
          const color = mineralColors[d.mineral] || '#FFFFFF';
          const m = L.circleMarker([d.lat, d.lng], { radius: 7, color: '#000', fillColor: color, fillOpacity: 0.85, weight: 2 });
          m.bindPopup(app.buildPopup(`⛏ ${d.name}`, `<b>Mineral:</b> ${d.mineral}<br><b>UPSC:</b> ${d.upsc}`, [d.mineral]));
          app.addLayer(m);
          app.addLayer(app.labelMarker([d.lat + 0.2, d.lng], d.name.split('—')[1]?.trim() || d.name, color, '7px'));
        });

        app.addLayer(app.labelMarker([22.5, 85], '⛏ MINERAL\nHEARTLAND\n(Chotanagpur)', '#FFD700', '11px'));
      }
    },

    // MAP 035 — Coal Fields
    {
      mapNum: 35,
      title: 'Coal Fields Map of India',
      subtitle: 'Gondwana Coal · Tertiary Coal · All Major Mines',
      mapConfig: { center: [23, 83], zoom: 5.5, tileStyle: 'dark' },
      legend: [{ sectionTitle: 'Coal Fields', items: [{ dot: '#555555', label: 'Gondwana Coal (95% of India\'s coal)' }, { dot: '#8B4513', label: 'Tertiary Coal (NE India — 5%)' }] }],
      info: [{ title: 'COAL IN INDIA', facts: [{ label: 'Total Reserves', value: '~361 billion tonnes (5th globally)' }, { label: 'Gondwana', value: '96% — Damodar, Son, Mahanadi, Godavari valleys' }, { label: 'Best Coking Coal', value: 'Jharia, Jharkhand' }, { label: 'Coal India Ltd', value: 'World\'s largest coal producer. 8 subsidiaries.' }] }],
      render(map, app) {
        DATA.coalFields.gondwana.forEach(d => {
          const m = L.circleMarker([d.lat, d.lng], { radius: 9, color: '#000', fillColor: '#555555', fillOpacity: 0.9, weight: 2 });
          m.bindPopup(app.buildPopup(`⛏ ${d.name}`, `<b>State:</b> ${d.state}<br><b>Basin:</b> ${d.basin}<br><b>UPSC:</b> ${d.upsc}`, ['Gondwana', d.basin]));
          app.addLayer(m);
          app.addLayer(app.labelMarker([d.lat + 0.2, d.lng], d.name, '#AAAAAA', '8px'));
        });
        DATA.coalFields.tertiary.forEach(d => {
          const m = L.circleMarker([d.lat, d.lng], { radius: 7, color: '#000', fillColor: '#8B4513', fillOpacity: 0.9, weight: 2 });
          m.bindPopup(app.buildPopup(`⛏ ${d.name}`, `<b>State:</b> ${d.state}<br><b>UPSC:</b> ${d.upsc}`, ['Tertiary', 'NE']));
          app.addLayer(m);
          app.addLayer(app.labelMarker([d.lat + 0.2, d.lng], d.name, '#8B4513', '8px'));
        });
        app.addLayer(app.labelMarker([24, 86], 'DAMODAR VALLEY\n(Coal Capital)', '#AAAAAA', '11px'));
      }
    },

    // MAP 036 — Oil & Natural Gas
    {
      mapNum: 36,
      title: 'Oil & Natural Gas Map',
      subtitle: 'Offshore · Onshore · Pipelines · Refineries',
      mapConfig: { center: [22, 78], zoom: 5, tileStyle: 'dark' },
      legend: [{ sectionTitle: 'Oil & Gas', items: [{ dot: '#000000', label: 'Offshore Fields' }, { dot: '#8B0000', label: 'Onshore Fields' }, { dot: '#FF6347', label: 'Refineries' }] }],
      info: [{ title: 'INDIA OIL & GAS', facts: [{ label: 'Production', value: 'India produces ~15% of its oil need. 85% imported.' }, { label: 'Largest Field', value: 'Mumbai High (Bombay High) — 65% of domestic crude' }, { label: 'Largest Refinery', value: 'Jamnagar (Reliance) — 68.2 MTPA — world\'s largest' }, { label: 'Oldest', value: 'Digboi, Assam (1889) — first oil well in Asia' }] }],
      render(map, app) {
        DATA.oilGas.offshore.forEach(d => {
          const m = L.circleMarker([d.lat, d.lng], { radius: 9, color: '#FFD700', fillColor: '#000000', fillOpacity: 0.9, weight: 2 });
          m.bindPopup(app.buildPopup(`🛢 ${d.name}`, `<b>Production:</b> ${d.production}<br><b>UPSC:</b> ${d.upsc}`, ['Offshore']));
          app.addLayer(m);
          app.addLayer(app.labelMarker([d.lat + 0.3, d.lng], d.name, '#FFD700', '8px'));
        });
        DATA.oilGas.onshore.forEach(d => {
          const m = L.circleMarker([d.lat, d.lng], { radius: 8, color: '#000', fillColor: '#8B0000', fillOpacity: 0.9, weight: 2 });
          m.bindPopup(app.buildPopup(`🛢 ${d.name}`, `<b>Production:</b> ${d.production}<br><b>UPSC:</b> ${d.upsc}`, ['Onshore']));
          app.addLayer(m);
          app.addLayer(app.labelMarker([d.lat + 0.2, d.lng], d.name, '#CD5C5C', '8px'));
        });
        DATA.oilGas.refineries.forEach(d => {
          const m = L.circleMarker([d.lat, d.lng], { radius: 6, color: '#000', fillColor: '#FF6347', fillOpacity: 0.85, weight: 2 });
          m.bindPopup(app.buildPopup(`🏭 ${d.name} Refinery`, `<b>Capacity:</b> ${d.capacity}<br><b>UPSC:</b> ${d.upsc}`, ['Refinery']));
          app.addLayer(m);
        });
      }
    },

    // MAP 037 — Iron Ore Distribution
    {
      mapNum: 37,
      title: 'Iron Ore Distribution Map',
      subtitle: 'Hematite · Magnetite · Major Belts · Export Ports',
      mapConfig: { center: [19, 81], zoom: 5.5, tileStyle: 'dark' },
      legend: [{ sectionTitle: 'Iron Ore', items: [{ dot: '#CC0000', label: 'Hematite (Best quality — 60-70% Fe)' }, { dot: '#FF6347', label: 'Magnetite (Superior — 72% Fe, rare)' }] }],
      info: [{ title: 'IRON ORE', facts: [{ label: 'Reserves', value: '28 billion tonnes — 4th in world' }, { label: 'Top State', value: 'Odisha (33%), Jharkhand, Chhattisgarh, Karnataka' }, { label: 'Export', value: 'Through Paradip, Vizag, Goa ports' }] }],
      render(map, app) {
        DATA.ironOre.forEach(d => {
          const color = d.type === 'Magnetite' ? '#FF6347' : '#CC0000';
          const m = L.circleMarker([d.lat, d.lng], { radius: 10, color: '#000', fillColor: color, fillOpacity: 0.9, weight: 2 });
          m.bindPopup(app.buildPopup(`⛏ ${d.name}`, `<b>State:</b> ${d.state}<br><b>Type:</b> ${d.type}<br><b>Production:</b> ${d.production}<br><b>UPSC:</b> ${d.upsc}`, ['Iron Ore', d.type]));
          m.on('mouseover', function () { this.setRadius(13); });
          m.on('mouseout', function () { this.setRadius(10); });
          app.addLayer(m);
          app.addLayer(app.labelMarker([d.lat + 0.25, d.lng], `${d.name}\n(${d.type})`, color, '9px'));
        });
        const belt = L.polyline([[22.15, 85.5], [21.63, 85.58], [22.12, 84.05], [21.9, 86.73]], { color: '#CC0000', weight: 2, dashArray: '6,4', opacity: 0.5 });
        belt.bindPopup(app.buildPopup('Singhbhum-Keonjhar Iron Belt', 'Largest iron ore belt in India', ['Belt']));
        app.addLayer(belt);
      }
    },

    // MAP 038 — Power Plants
    {
      mapNum: 38,
      title: 'Power Plants Map of India',
      subtitle: 'Thermal · Hydro · Nuclear · Solar · Wind',
      mapConfig: { center: [22, 80], zoom: 5, tileStyle: 'dark' },
      legend: [{ sectionTitle: 'Power Plants', items: [{ dot: '#FFD700', label: '☢ Nuclear Power Plants' }, { dot: '#FF6347', label: '☀ Solar Parks' }, { dot: '#00BFFF', label: '🌬 Wind Farms' }] }],
      info: [{ title: 'POWER CAPACITY', facts: [{ label: 'Total Installed', value: '~425 GW (2024)' }, { label: 'Thermal', value: '~57% (coal dominant)' }, { label: 'Renewable', value: '~42% (solar + wind + hydro)' }, { label: 'Nuclear', value: '~2% (~7.5 GW)' }] }],
      render(map, app) {
        DATA.nuclearPlants.forEach(d => {
          const m = L.circleMarker([d.lat, d.lng], { radius: 10, color: '#FFD700', fillColor: '#FFD700', fillOpacity: 0.9, weight: 2 });
          m.bindPopup(app.buildPopup(`☢ ${d.name}`, `<b>State:</b> ${d.state}<br><b>Capacity:</b> ${d.capacity}<br><b>Reactors:</b> ${d.reactors}<br><b>UPSC:</b> ${d.upsc}`, ['Nuclear', d.state]));
          app.addLayer(m);
          app.addLayer(app.labelMarker([d.lat + 0.2, d.lng], d.name, '#FFD700', '8px'));
        });
        DATA.renewableEnergy.solar.forEach(d => {
          const m = L.circleMarker([d.lat, d.lng], { radius: 8, color: '#000', fillColor: '#FF6347', fillOpacity: 0.85, weight: 2 });
          m.bindPopup(app.buildPopup(`☀ ${d.name}`, `<b>State:</b> ${d.state}<br><b>Capacity:</b> ${d.capacity}<br><b>UPSC:</b> ${d.upsc}`, ['Solar']));
          app.addLayer(m);
          app.addLayer(app.labelMarker([d.lat + 0.2, d.lng], d.name, '#FF6347', '7px'));
        });
        DATA.renewableEnergy.wind.forEach(d => {
          const m = L.circleMarker([d.lat, d.lng], { radius: 7, color: '#000', fillColor: '#00BFFF', fillOpacity: 0.85, weight: 2 });
          m.bindPopup(app.buildPopup(`🌬 ${d.name}`, `<b>State:</b> ${d.state}<br><b>Capacity:</b> ${d.capacity}<br><b>UPSC:</b> ${d.upsc}`, ['Wind']));
          app.addLayer(m);
        });
      }
    },

    // MAP 039 — Nuclear Power Plants
    {
      mapNum: 39,
      title: 'Nuclear Power Plants Map',
      subtitle: 'All Reactors · State Locations · Capacity · Technology',
      mapConfig: { center: [18, 78], zoom: 5, tileStyle: 'dark' },
      legend: [{ sectionTitle: 'Nuclear Plants', items: [{ dot: '#FFD700', label: 'Operating' }, { dot: '#FF6347', label: 'Under Construction / Proposed' }] }],
      info: [{ title: 'INDIA NUCLEAR', facts: [{ label: 'Total Capacity', value: '~7.5 GW (22 reactors operational)' }, { label: 'Three Stage Program', value: 'Homi Bhabha: PHWR (U-238) → FBR (Pu-239) → Thorium (Th-232)' }, { label: 'DAE', value: 'Department of Atomic Energy — under PM directly' }, { label: 'NPCIL', value: 'Nuclear Power Corporation of India Ltd — operates all plants' }] }],
      render(map, app) {
        DATA.nuclearPlants.forEach(d => {
          const isProposed = d.name.includes('proposed') || d.name.includes('GHAVP');
          const color = isProposed ? '#FF6347' : '#FFD700';
          const m = L.circleMarker([d.lat, d.lng], { radius: 12, color: '#000', fillColor: color, fillOpacity: 0.9, weight: 2 });
          m.bindPopup(app.buildPopup(`☢ ${d.name}`, `<b>State:</b> ${d.state}<br><b>Capacity:</b> ${d.capacity}<br><b>Reactors:</b> ${d.reactors}<br><b>UPSC:</b> ${d.upsc}`, ['Nuclear']));
          m.on('mouseover', function () { this.setRadius(15); });
          m.on('mouseout', function () { this.setRadius(12); });
          app.addLayer(m);
          app.addLayer(app.labelMarker([d.lat + 0.3, d.lng], `☢ ${d.name}\n(${d.capacity})`, color, '9px'));
        });
        const note = L.divIcon({ className: '', html: `<div style="background:rgba(0,0,0,0.85);border:1px solid #FFD700;border-radius:10px;padding:10px;font-size:9px;color:#FFD700;max-width:220px;line-height:1.5;font-family:Inter,sans-serif"><b>☢ THREE STAGE NUCLEAR</b><br>Stage 1: PHWR (Natural U)<br>Stage 2: FBR (Plutonium)<br>Stage 3: Thorium (India largest reserves)<br><span style="color:#aaa">Homi Bhabha's vision</span></div>`, iconAnchor: [0, 0] });
        app.addLayer(L.marker([8, 73], { icon: note, interactive: false }));
      }
    },

    // MAP 040 — Renewable Energy
    {
      mapNum: 40,
      title: 'Renewable Energy Map',
      subtitle: 'Solar Parks · Wind Farms · Tidal · Geothermal Potential',
      mapConfig: { center: [22, 78], zoom: 5, tileStyle: 'dark' },
      legend: [{ sectionTitle: 'Renewable Energy', items: [{ dot: '#FF6347', label: '☀ Solar Parks' }, { dot: '#00BFFF', label: '🌬 Wind Farms' }, { color: '#FFD700', label: '☀ Solar Potential Zone' }, { color: '#00BFFF', label: '🌬 Wind Potential Zone' }] }],
      info: [{ title: 'RENEWABLE TARGETS', facts: [{ label: 'Target 2030', value: '500 GW non-fossil fuel capacity' }, { label: 'Solar Target', value: '280 GW by 2030' }, { label: 'Wind Target', value: '140 GW by 2030' }, { label: 'ISA', value: 'International Solar Alliance — India-France initiative, HQ Gurugram' }] }],
      render(map, app) {
        // Solar potential zone
        const solarZone = L.polygon([[28, 69], [29, 74], [27, 77], [24, 78], [22, 76], [20, 73], [21, 70], [24, 68], [28, 69]], { color: '#FFD700', fillColor: '#FFD700', fillOpacity: 0.12, weight: 1.5, dashArray: '5,5' });
        solarZone.bindPopup(app.buildPopup('☀ High Solar Irradiance Zone', 'Rajasthan, Gujarat — 5-7 kWh/sq m/day', ['Solar']));
        app.addLayer(solarZone);

        // Wind potential zone
        const windZone = L.polygon([[8, 77], [10, 78], [13, 80], [15, 80], [13, 78], [11, 77], [9, 76.5], [8, 77]], { color: '#00BFFF', fillColor: '#00BFFF', fillOpacity: 0.12, weight: 1.5, dashArray: '5,5' });
        windZone.bindPopup(app.buildPopup('🌬 Wind Corridor', 'Tamil Nadu coast — highest wind potential', ['Wind']));
        app.addLayer(windZone);

        DATA.renewableEnergy.solar.forEach(d => {
          const m = L.circleMarker([d.lat, d.lng], { radius: 10, color: '#000', fillColor: '#FF6347', fillOpacity: 0.9, weight: 2 });
          m.bindPopup(app.buildPopup(`☀ ${d.name}`, `<b>Capacity:</b> ${d.capacity}<br><b>State:</b> ${d.state}<br><b>UPSC:</b> ${d.upsc}`, ['Solar Park']));
          app.addLayer(m);
          app.addLayer(app.labelMarker([d.lat + 0.2, d.lng], `${d.name} (${d.capacity})`, '#FF6347', '8px'));
        });

        DATA.renewableEnergy.wind.forEach(d => {
          const m = L.circleMarker([d.lat, d.lng], { radius: 8, color: '#000', fillColor: '#00BFFF', fillOpacity: 0.9, weight: 2 });
          m.bindPopup(app.buildPopup(`🌬 ${d.name}`, `<b>Capacity:</b> ${d.capacity}<br><b>State:</b> ${d.state}<br><b>UPSC:</b> ${d.upsc}`, ['Wind Farm']));
          app.addLayer(m);
          app.addLayer(app.labelMarker([d.lat + 0.15, d.lng], d.name, '#00BFFF', '7px'));
        });
      }
    },

    // MAP 041 — Agriculture Zones
    {
      mapNum: 41,
      title: 'Agriculture Zones Map',
      subtitle: 'Rice · Wheat · Cotton · Sugarcane · Tea · Coffee',
      mapConfig: { center: [22, 80], zoom: 5, tileStyle: 'dark' },
      legend: [{ sectionTitle: 'Crops', items: [{ dot: '#00AA00', label: '🌾 Rice' }, { dot: '#FFD700', label: '🌾 Wheat' }, { dot: '#FFFFFF', label: '🌿 Cotton' }, { dot: '#FF69B4', label: '🌿 Sugarcane' }, { dot: '#228B22', label: '🍵 Tea' }, { dot: '#8B4513', label: '☕ Coffee' }] }],
      info: [{ title: 'AGRICULTURE FACTS', facts: [{ label: 'GDP Share', value: '~18% of GDP, 42% of employment' }, { label: 'Net Sown Area', value: '46% of total land' }, { label: 'Irrigation', value: '~55% of net sown area irrigated' }, { label: 'Green Revolution', value: 'Punjab, Haryana — wheat; later rice. 1960s-70s.' }] }],
      render(map, app) {
        const cropColors = { rice: '#00AA00', wheat: '#FFD700', cotton: '#FFFFFF', sugarcane: '#FF69B4', tea: '#228B22', coffee: '#8B4513' };

        const renderCrop = (items, cropName, color) => {
          items.forEach(d => {
            const m = L.circleMarker([d.lat, d.lng], { radius: 8, color: '#000', fillColor: color, fillOpacity: 0.85, weight: 2 });
            m.bindPopup(app.buildPopup(`🌾 ${d.name}`, `<b>Production:</b> ${d.production || d.crop || ''}<br><b>UPSC:</b> ${d.upsc}`, [cropName]));
            app.addLayer(m);
            app.addLayer(app.labelMarker([d.lat + 0.2, d.lng], d.name, color, '7px'));
          });
        };

        renderCrop(DATA.agriculture.rice, 'Rice', cropColors.rice);
        renderCrop(DATA.agriculture.wheat, 'Wheat', cropColors.wheat);
        renderCrop(DATA.agriculture.cotton, 'Cotton', cropColors.cotton);
        renderCrop(DATA.agriculture.sugarcane, 'Sugarcane', cropColors.sugarcane);

        DATA.agriculture.teaCoffee.forEach(d => {
          const color = d.crop === 'Tea' ? cropColors.tea : cropColors.coffee;
          const m = L.circleMarker([d.lat, d.lng], { radius: 7, color: '#000', fillColor: color, fillOpacity: 0.85, weight: 2 });
          m.bindPopup(app.buildPopup(`${d.crop === 'Tea' ? '🍵' : '☕'} ${d.name}`, `<b>Crop:</b> ${d.crop}<br><b>UPSC:</b> ${d.upsc}`, [d.crop]));
          app.addLayer(m);
          app.addLayer(app.labelMarker([d.lat + 0.15, d.lng], d.name, color, '7px'));
        });
      }
    },

    // MAP 042 — Soil Types
    {
      mapNum: 42,
      title: 'Soil Types Map of India',
      subtitle: 'Alluvial · Black · Red · Laterite · Desert · Mountain',
      mapConfig: { center: [22, 80], zoom: 5, tileStyle: 'dark' },
      legend: [{ sectionTitle: 'Soil Types', items: DATA.soils.map(s => ({ color: s.color, label: `${s.name} (${s.coverage})` })) }],
      info: [{ title: 'SOILS — UPSC KEY', facts: DATA.soils.map(s => ({ label: s.name, value: s.upsc })) }],
      render(map, app) {
        DATA.soils.forEach(soil => {
          if (soil.coords && soil.coords.length > 3) {
            const poly = L.polygon(soil.coords, { color: soil.color, fillColor: soil.color, fillOpacity: 0.4, weight: 2 });
            poly.bindPopup(app.buildPopup(soil.name, `<b>Coverage:</b> ${soil.coverage}<br><b>Regions:</b> ${soil.regions}<br><b>UPSC:</b> ${soil.upsc}`, ['Soil']));
            poly.on('mouseover', function () { this.setStyle({ fillOpacity: 0.65 }); this.bringToFront(); });
            poly.on('mouseout', function () { this.setStyle({ fillOpacity: 0.4 }); });
            app.addLayer(poly);
            const c = soil.coords[Math.floor(soil.coords.length / 3)];
            app.addLayer(app.labelMarker(c, soil.name, soil.color === '#1C1C1C' ? '#FFFFFF' : soil.color, '10px'));
          } else {
            // No polygon — just label
            const positions = { 'Laterite Soil': [10, 76], 'Mountain / Forest Soil': [31, 78] };
            const pos = positions[soil.name] || [20, 78];
            const m = L.circleMarker(pos, { radius: 12, color: soil.color, fillColor: soil.color, fillOpacity: 0.5, weight: 2 });
            m.bindPopup(app.buildPopup(soil.name, `<b>Coverage:</b> ${soil.coverage}<br><b>Regions:</b> ${soil.regions}<br><b>UPSC:</b> ${soil.upsc}`, ['Soil']));
            app.addLayer(m);
            app.addLayer(app.labelMarker([pos[0] + 0.3, pos[1]], soil.name, soil.color, '10px'));
          }
        });
      }
    },

    // MAP 043 — Forest Cover
    {
      mapNum: 43,
      title: 'Forest Cover Map of India',
      subtitle: 'State-wise Forest Cover · Dense · Open · Scrub',
      mapConfig: { center: [22, 82], zoom: 5, tileStyle: 'dark' },
      legend: [{ sectionTitle: 'Forest Cover', items: [{ dot: '#006400', label: 'Very High Cover (>60%)' }, { dot: '#228B22', label: 'High Cover (30-60%)' }, { dot: '#90EE90', label: 'Moderate Cover (15-30%)' }, { dot: '#FFD700', label: 'Low Cover (<15%)' }] }],
      info: [{ title: 'FOREST COVER', facts: [{ label: 'Total', value: '7,13,789 sq km (21.71% of area)' }, { label: 'Policy Target', value: '33% (National Forest Policy 1988)' }, { label: 'Max Area', value: 'MP — 77,414 sq km' }, { label: 'Max %', value: 'Mizoram — 84.53%' }, { label: 'Report', value: 'ISFR (India State of Forest Report) — biennial by FSI, Dehradun' }] }],
      render(map, app) {
        DATA.forests.forEach(d => {
          const pct = parseFloat(d.percent);
          let color = '#FFD700';
          if (pct >= 60) color = '#006400';
          else if (pct >= 30) color = '#228B22';
          else if (pct >= 15) color = '#90EE90';

          const m = L.circleMarker([d.lat, d.lng], { radius: Math.min(14, Math.max(6, pct / 6)), color: '#000', fillColor: color, fillOpacity: 0.85, weight: 2 });
          m.bindPopup(app.buildPopup(`🌳 ${d.name}`, `<b>Cover:</b> ${d.cover}<br><b>Percentage:</b> ${d.percent}<br><b>UPSC:</b> ${d.upsc}`, ['Forest']));
          app.addLayer(m);
          app.addLayer(app.labelMarker([d.lat + 0.3, d.lng], `${d.name}\n(${d.percent})`, color, '9px'));
        });
      }
    },

    // MAP 044 — Fishing Zones
    {
      mapNum: 44,
      title: 'Fishing Zones Map',
      subtitle: 'Marine · Inland · Aquaculture · EEZ · Major Ports',
      mapConfig: { center: [15, 78], zoom: 5, tileStyle: 'dark' },
      legend: [{ sectionTitle: 'Fishing', items: [{ dot: '#00BFFF', label: '🐟 Marine Fishing' }, { dot: '#228B22', label: '🐟 Inland Fishing' }, { dot: '#FF69B4', label: '🦐 Aquaculture' }] }],
      info: [{ title: 'FISHING FACTS', facts: [{ label: 'Global Rank', value: '3rd largest fish producer globally' }, { label: 'EEZ', value: '2.02 million sq km — exclusive fishing rights' }, { label: 'Blue Revolution', value: 'PM Matsya Sampada Yojana (PMMSY) — ₹20,050 crore' }, { label: 'Top Marine', value: 'Kerala, Gujarat, Tamil Nadu' }, { label: 'Top Inland', value: 'West Bengal, Andhra Pradesh' }] }],
      render(map, app) {
        const typeColors = { 'Marine': '#00BFFF', 'Inland': '#228B22', 'Aquaculture': '#FF69B4', 'Lagoon/Marine': '#00CED1' };
        DATA.fishing.forEach(d => {
          const color = typeColors[d.type] || '#FFFFFF';
          const m = L.circleMarker([d.lat, d.lng], { radius: 10, color: '#000', fillColor: color, fillOpacity: 0.85, weight: 2 });
          m.bindPopup(app.buildPopup(`🐟 ${d.name}`, `<b>Type:</b> ${d.type}<br><b>Species:</b> ${d.species}<br><b>UPSC:</b> ${d.upsc}`, ['Fishing', d.type]));
          app.addLayer(m);
          app.addLayer(app.labelMarker([d.lat + 0.2, d.lng], d.name, color, '9px'));
        });
        // EEZ line
        const eez = L.polyline([[8, 69], [5, 72], [3, 77], [5, 82], [8, 86], [12, 89], [16, 92], [20, 93]], { color: '#FFD700', weight: 2, dashArray: '8,6', opacity: 0.5 });
        eez.bindPopup(app.buildPopup('India EEZ (200 nautical miles)', '2.02 million sq km — exclusive economic zone', ['EEZ']));
        app.addLayer(eez);
      }
    },

    // MAP 045 — Industrial Regions
    {
      mapNum: 45,
      title: 'Industrial Regions Map',
      subtitle: 'Mumbai-Pune · Hooghly · Bangalore-Chennai · Chotanagpur · Gujarat',
      mapConfig: { center: [20, 79], zoom: 5, tileStyle: 'dark' },
      legend: [{ sectionTitle: 'Industrial Regions', items: [{ dot: '#FF6347', label: 'Major Industrial Region' }, { dot: '#FFD700', label: 'IT/Modern Industrial Region' }] }],
      info: [{ title: 'INDUSTRIAL GEOGRAPHY', facts: DATA.industries.map(d => ({ label: d.name, value: `${d.type}: ${d.products.substring(0, 60)}...` })) }],
      render(map, app) {
        DATA.industries.forEach(d => {
          const isIT = d.type.includes('IT') || d.type.includes('Modern');
          const color = isIT ? '#FFD700' : '#FF6347';
          const marker = L.circleMarker([d.lat, d.lng], { radius: 12, color: '#000', fillColor: color, fillOpacity: 0.85, weight: 2 });
          marker.bindPopup(app.buildPopup(`🏭 ${d.name}`, `<b>Type:</b> ${d.type}<br><b>Products:</b> ${d.products}<br><b>UPSC:</b> ${d.upsc}`, ['Industry', d.type]));
          marker.on('mouseover', function () { this.setRadius(16); });
          marker.on('mouseout', function () { this.setRadius(12); });
          app.addLayer(marker);
          app.addLayer(app.labelMarker([d.lat + 0.3, d.lng], d.name, color, '10px'));

          // Zone circle
          const zone = L.circle([d.lat, d.lng], { radius: 80000, color, fillColor: color, fillOpacity: 0.08, weight: 1.5, dashArray: '4,4' });
          app.addLayer(zone);
        });
      }
    }

  ]; // END

  window.registerMaps('india-resources', INDIA_RESOURCES_MAPS);
  console.log('⛏️ India Resources Maps: 12 maps registered (MAP 034-045)');

})();
