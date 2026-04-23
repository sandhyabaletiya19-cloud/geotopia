/**
 * ═══════════════════════════════════════════════════════════════
 * DHARAVERSE UPSC MAPS — ENVIRONMENT MAPS
 * MAP 056 to MAP 064 | Pollution · Disasters · Erosion · Vulnerability
 * Complete UPSC Environment Geography Coverage
 * Version 2026 | Gateway to IAS
 * ═══════════════════════════════════════════════════════════════
 */

(function () {

  const DATA = {

    // ── AIR POLLUTION & AQI ──
    pollutedCities: [
      { name: 'Delhi', lat: 28.66, lng: 77.21, aqi: 'Severe (300-500)', pm25: '120-300 μg/m³', cause: 'Stubble burning (Punjab/Haryana), vehicles, industry, dust', upsc: 'World\'s most polluted capital city multiple years. GRAP (Graded Response Action Plan) activated seasonally. Odd-Even scheme. BS-VI fuel.' },
      { name: 'Ghaziabad', lat: 28.67, lng: 77.44, aqi: 'Very Poor (200-300)', pm25: '100-200 μg/m³', cause: 'Industrial, construction dust, vehicles', upsc: 'NCR city. Consistently in top 10 polluted cities globally. CPCB monitoring.' },
      { name: 'Kanpur', lat: 26.45, lng: 80.35, aqi: 'Very Poor', pm25: '90-180 μg/m³', cause: 'Leather tanning, textile mills, vehicles', upsc: 'Most polluted city of UP. Tannery effluents in Ganga too.' },
      { name: 'Lucknow', lat: 26.85, lng: 80.95, aqi: 'Poor-Very Poor', pm25: '80-150 μg/m³', cause: 'Vehicles, construction, biomass burning', upsc: 'State capital. UPPCB (UP Pollution Control Board) action plans.' },
      { name: 'Patna', lat: 25.60, lng: 85.14, aqi: 'Very Poor', pm25: '90-160 μg/m³', cause: 'Vehicles, brick kilns, biomass burning', upsc: 'Bihar capital. Ganga and Sone valley dust adds to AQI.' },
      { name: 'Faridabad', lat: 28.41, lng: 77.31, aqi: 'Very Poor-Severe', pm25: '100-220 μg/m³', cause: 'Industrial city, vehicles, NCR pollution', upsc: 'NCR industrial city. Among top polluted globally repeatedly.' },
      { name: 'Noida-Greater Noida', lat: 28.54, lng: 77.39, aqi: 'Very Poor', pm25: '90-180 μg/m³', cause: 'IT-Industrial mix, NCR overspill, construction', upsc: 'NCR tech hub. Construction dust major source.' },
      { name: 'Agra', lat: 27.18, lng: 78.01, aqi: 'Poor', pm25: '70-130 μg/m³', cause: 'Tourism vehicles, Foundry, leather, biomass', upsc: 'Taj Mahal under threat from air pollution. SC directives for clean fuel in Agra.' },
      { name: 'Mumbai', lat: 19.07, lng: 72.88, aqi: 'Moderate-Poor', pm25: '50-100 μg/m³', cause: 'Vehicles, industry, construction', upsc: 'Financial capital. Sea breeze helps. But construction boom worsening.' },
      { name: 'Kolkata', lat: 22.57, lng: 88.36, aqi: 'Poor', pm25: '70-120 μg/m³', cause: 'Vehicles, Hooghly industrial belt, biomass', upsc: 'Hooghly industrial corridor. Jute mills. Pollution improving slowly.' },
      { name: 'Ahmedabad', lat: 23.02, lng: 72.57, aqi: 'Poor', pm25: '65-120 μg/m³', cause: 'Textile, Chemical industries, vehicles', upsc: 'Gujarat industrial capital. Effluent discharge into Sabarmati.' },
      { name: 'Bangalore', lat: 12.97, lng: 77.59, aqi: 'Moderate', pm25: '40-80 μg/m³', cause: 'IT sector growth, construction, vehicles', upsc: 'IT city but rapid urbanization → traffic congestion → pollution rising.' },
      { name: 'Jodhpur', lat: 26.29, lng: 73.02, aqi: 'Poor', pm25: '70-130 μg/m³', cause: 'Desert dust, marble industry, vehicles', upsc: 'Thar dust storms. Marble mining in nearby Makrana.' },
      { name: 'Bhiwadi (Rajasthan)', lat: 28.21, lng: 76.85, aqi: 'Severe', pm25: '120-250 μg/m³', cause: 'Industrial area — auto, chemical plants', upsc: 'Ranked world\'s 2nd most polluted city multiple times (IQAir). NCR industrial zone.' }
    ],

    // ── AQI CATEGORIES ──
    aqiCategories: [
      { label: 'Good (0-50)', color: '#00FF88', pm25: '<12 μg/m³' },
      { label: 'Satisfactory (51-100)', color: '#ADFF2F', pm25: '12-35 μg/m³' },
      { label: 'Moderate (101-200)', color: '#FFD700', pm25: '35-55 μg/m³' },
      { label: 'Poor (201-300)', color: '#FFA500', pm25: '55-150 μg/m³' },
      { label: 'Very Poor (301-400)', color: '#FF4500', pm25: '150-250 μg/m³' },
      { label: 'Severe (401+)', color: '#8B0000', pm25: '>250 μg/m³' }
    ],

    // ── RIVER POLLUTION ──
    pollutedRivers: [
      {
        name: 'Ganga',
        course: [[30.09, 78.27], [29.96, 78.16], [26.85, 80.95], [25.43, 81.84], [25.32, 83.01], [25.60, 85.14], [22.57, 88.36]],
        pollutedStretch: [[26.85, 80.95], [25.43, 81.84], [25.32, 83.01]],
        pollution: 'Sewage, industrial effluents, tanneries, cremation',
        bod: 'BOD levels 5-30 mg/L (should be <3)',
        upsc: 'National River. Namami Gange Programme (₹20,000 crore). STPs being built. Kanpur tanneries banned. Allahabad High Court → river legal person (overturned by SC).',
        cities: 'Kanpur-Allahabad stretch worst. E. coli 100x above safe limits.'
      },
      {
        name: 'Yamuna',
        course: [[30.12, 78.0], [29.0, 77.5], [28.68, 77.21], [27.18, 78.01], [25.43, 81.84]],
        pollutedStretch: [[28.68, 77.21], [27.18, 78.01]],
        pollution: 'Delhi sewage, industrial discharge, Haryana drain water',
        bod: 'BOD 60-100 mg/L in Delhi (should be <3)',
        upsc: 'Receives 80% of Delhi\'s waste. Delhi-Agra stretch biologically dead. Yamuna Action Plan (I, II, III) failed. SC monitoring.',
        cities: 'Delhi stretch — 22 km receives 58% of Yamuna\'s total waste load.'
      },
      {
        name: 'Damodar',
        course: [[23.65, 84.95], [23.5, 85.5], [23.2, 86.5], [23.0, 87.5], [22.50, 88.00]],
        pollutedStretch: [[23.5, 85.5], [23.2, 86.5], [23.0, 87.5]],
        pollution: 'Coal mining effluents, thermal power ash, steel plant',
        upsc: '"Sorrow of Bengal" for both floods AND pollution. Jharia coal mines leaching into river. DVC (Damodar Valley Corporation).',
        cities: 'Asansol-Durgapur industrial belt'
      },
      {
        name: 'Mahanadi',
        course: [[20.72, 82.09], [21.00, 83.0], [21.20, 84.0], [20.80, 85.0], [20.32, 86.60]],
        pollutedStretch: [[21.20, 84.0], [20.80, 85.0]],
        pollution: 'Coal mine drainage, thermal power stations',
        upsc: 'Talcher coal field effluents. Angul-Talcher industrial area.',
        cities: 'Talcher-Angul belt'
      },
      {
        name: 'Sabarmati',
        course: [[24.50, 73.70], [23.50, 73.00], [23.02, 72.57], [22.00, 72.50]],
        pollutedStretch: [[23.02, 72.57], [22.00, 72.50]],
        pollution: 'Textile dyes, chemical effluents, urban sewage',
        upsc: 'Ahmedabad textile/chemical industry discharge. Narmada water revived it partly. Gandhi Ashram on its banks.',
        cities: 'Ahmedabad'
      },
      {
        name: 'Hooghly',
        course: [[24.0, 88.0], [22.57, 88.36], [21.62, 88.0]],
        pollutedStretch: [[22.57, 88.36], [21.62, 88.0]],
        pollution: 'Jute mills, tanneries, sewage, industrial effluents',
        upsc: 'Distributary of Ganga. Kolkata industrial belt. Sundarbans getting pollutants from Hooghly.',
        cities: 'Kolkata-Howrah'
      },
      {
        name: 'Periyar (Kerala)',
        course: [[10.10, 77.10], [10.05, 76.65], [9.93, 76.26]],
        pollutedStretch: [[10.05, 76.65], [9.93, 76.26]],
        pollution: 'Mercury contamination from chlor-alkali plant (Eloor)',
        upsc: 'Eloor industrial area discharged mercury into Periyar. One of worst industrial pollution cases in India. Hindustan Insecticides Ltd.',
        cities: 'Eloor near Kochi'
      }
    ],

    // ── DESERTIFICATION ──
    desertificationZones: [
      { name: 'Thar Desert Core', lat: 26, lng: 70, severity: 'Very High', area: '2,00,000 sq km', states: 'Rajasthan, Gujarat', upsc: '7th largest desert. 83 persons/sq km (dense!). Indira Gandhi Canal: green revolution in desert. But water table falling.' },
      { name: 'Aravalli Degraded Land', lat: 25, lng: 73.5, severity: 'High', states: 'Rajasthan, Haryana, Gujarat', upsc: 'Aravalli denuded → Thar expanding eastward toward Delhi. Mining & goat grazing.' },
      { name: 'Bundelkhand', lat: 25, lng: 79, severity: 'High', states: 'UP, MP', upsc: 'Chronic drought + overgrazing + soil degradation. Farmer migration. MGNREGA important here.' },
      { name: 'Marathwada-Vidarbha', lat: 19, lng: 76.5, severity: 'Moderate-High', states: 'Maharashtra', upsc: 'Black cotton soil eroded. Drought + cotton failure → farmer suicides. Jayakwadi Dam insufficient.' },
      { name: 'Rayalaseema', lat: 15, lng: 78, severity: 'Moderate-High', states: 'Andhra Pradesh', upsc: 'Semi-arid. Rain shadow. Historically drought-prone. Srisailam Dam provides some relief.' },
      { name: 'Gujarat Coast (Rann)', lat: 23.5, lng: 69.5, severity: 'High', states: 'Gujarat', upsc: 'Rann of Kachchh expanding. Salt encrustation. Climate change making it worse.' },
      { name: 'Deccan Interior Plateau', lat: 16, lng: 76, severity: 'Moderate', states: 'Karnataka, Telangana', upsc: 'Rain shadow + red soil erosion. Chambal-type ravines forming.' },
      { name: 'Chambal Ravines', lat: 25.5, lng: 77, severity: 'High (ravine)', states: 'MP, UP, Rajasthan', upsc: 'Chambal river ravines (bad lands). Extensive badland topography. Dacoit territory historically. Sheet & rill erosion.' }
    ],

    // ── EARTHQUAKE ZONES ──
    earthquakeZones: [
      {
        zone: 'Zone V (Very High Risk)',
        color: '#FF0000',
        description: 'MSK Intensity IX or more. Likely total destruction.',
        states: 'J&K, Ladakh, HP (N parts), Uttarakhand (N), NE India (entire), Gujarat (Kachchh), Andaman & Nicobar',
        coords: [
          [35, 74], [35, 88], [33, 93], [30, 97],
          [27, 97], [25, 96], [24, 93], [24, 91],
          [25, 88], [27, 87], [28, 85], [29.5, 80],
          [31, 77], [34, 75], [35, 74]
        ],
        examples: 'Bhuj 2001 (M7.7, 20,000 deaths), Assam 1897 & 1950 (M8.7), Uttarkashi 1991, Chamoli 1999'
      },
      {
        zone: 'Zone IV (High Risk)',
        color: '#FF6600',
        description: 'MSK Intensity VIII. Severe damage.',
        states: 'J&K (S), Himachal Pradesh, Uttarakhand (S), Delhi-NCR, Sikkim, Bihar (N), UP (N), West Bengal',
        coords: [
          [34, 75], [31, 77], [29.5, 80], [28, 85],
          [27, 87], [25, 88], [24, 91], [23, 88],
          [22.5, 87], [23, 86], [24, 84], [25, 81],
          [25, 78], [27, 77], [28, 75], [31, 74], [34, 75]
        ],
        examples: 'Delhi earthquake risk (active faults). Bihar 1934 (M8.1). Gorakhpur 1988.'
      },
      {
        zone: 'Zone III (Moderate Risk)',
        color: '#FFA500',
        description: 'MSK Intensity VII. Moderate damage to ordinary buildings.',
        states: 'Kerala, Goa, Lakshadweep, Odisha, MP, Rajasthan (E), Gujarat (except Kachchh), Maharashtra (W coast)',
        coords: [
          [27, 77], [25, 78], [25, 81], [24, 84],
          [23, 86], [22, 87], [20, 86], [18, 83],
          [16, 81], [14, 80], [12, 80], [10, 78],
          [8.5, 77.5], [10, 76], [14, 74], [17, 73.5],
          [20, 73], [22, 72], [23, 71], [25, 72],
          [27, 73], [28, 74], [28, 75], [27, 77]
        ],
        examples: 'Latur 1993 (M6.2, 9748 deaths, Deccan trap fault). Jabalpur 1997.'
      },
      {
        zone: 'Zone II (Low Risk)',
        color: '#FFD700',
        description: 'MSK Intensity VI or less. Minor damage.',
        states: 'Tamil Nadu (S), Haryana (S), Punjab (S), Andhra Pradesh (S)',
        coords: [],
        examples: 'Relatively stable. Peninsular shield rocks.'
      }
    ],

    // ── FAULT LINES ──
    faultLines: [
      { name: 'Main Frontal Thrust (MFT)', coords: [[32.5, 75.5], [30, 79], [28.5, 83], [27, 87], [26, 91], [27.5, 92.5]], color: '#FF0000', upsc: 'Southernmost Himalayan thrust. Along Shivalik-plains boundary. Most active fault in India.' },
      { name: 'Main Boundary Thrust (MBT)', coords: [[33, 75.5], [31, 78], [29.5, 82], [28, 86], [27, 90], [26, 92.5]], color: '#FF4400', upsc: 'Separates Lesser Himalayas from Siwalik. Active. Frequent micro-earthquakes.' },
      { name: 'Main Central Thrust (MCT)', coords: [[34, 76], [32, 79], [31, 83], [30, 87], [28, 91], [27, 95]], color: '#FF6600', upsc: 'Separates Greater from Lesser Himalayas. Ancient but reactivating. Uttarkashi, Chamoli on this zone.' },
      { name: 'Narmada-Son Fault Zone', coords: [[23.5, 73.5], [22.5, 75], [22, 77], [22.5, 79], [23, 81], [22.66, 81.75]], color: '#FF8800', upsc: 'Ancient rift zone. Narmada-Son-Damodar lineament. Separated Gondwana plates. Low level activity.' },
      { name: 'Kutch Fault System', coords: [[23.5, 69], [23.2, 70], [23, 71.5]], color: '#FFAA00', upsc: 'Bhuj 2001 earthquake here. Allah Bund fault. Seismically very active.' },
      { name: 'Andaman-Sumatra Subduction Zone', coords: [[13, 93.5], [10, 93], [7, 93.5]], color: '#CC0000', upsc: '2004 Indian Ocean Tsunami epicenter. M9.1-9.3. Oblique subduction of Indian plate.' }
    ],

    // ── FLOOD VULNERABILITY ──
    floodVulnerability: [
      { name: 'North Bihar (Kosi Belt)', lat: 26.2, lng: 86.5, risk: 'Extreme', rivers: 'Kosi, Gandak, Bagmati, Kamla', affected_area: '68,800 sq km', upsc: 'Kosi avulsed 120km westward since 1736. Annual flood cycle. 2008 breach killed 500+, displaced 3 million. Kosi Barrage Agreement with Nepal.' },
      { name: 'Assam (Brahmaputra Valley)', lat: 26.2, lng: 92, risk: 'Extreme', rivers: 'Brahmaputra, Barak, Kopili', affected_area: '31,500 sq km', upsc: 'Annual event. 2022 floods: 200+ deaths, 70 lakh affected. Kaziranga NP submerged annually. Char (river island) erosion displacing millions.' },
      { name: 'Eastern UP', lat: 26, lng: 83, risk: 'Very High', rivers: 'Ganga, Ghaghra, Rapti, Gandak', affected_area: '73,600 sq km', upsc: 'UP has highest flood-affected area nationally. Gorakhpur, Varanasi districts.' },
      { name: 'West Bengal', lat: 23, lng: 88, risk: 'Very High', rivers: 'Ganga-Hooghly, Damodar, Kangsabati', affected_area: '37,660 sq km', upsc: 'Cyclone + river flooding combo. DVC dams for flood moderation. Cyclone Amphan 2020 + flooding.' },
      { name: 'Odisha Coast', lat: 20.5, lng: 85, risk: 'Very High', rivers: 'Mahanadi, Brahmani, Baitarani', affected_area: '14,860 sq km', upsc: 'Cyclone + river floods. Hirakud Dam helps. 1999 Super Cyclone devastated coast. OSDMA model state.' },
      { name: 'Andhra Pradesh (Coastal)', lat: 16, lng: 81, risk: 'High', rivers: 'Godavari, Krishna', affected_area: '13,600 sq km', upsc: 'Delta flooding. Cyclones from Bay. Kazipet, Srikakulam floods. Krishna Water tribunal.' },
      { name: 'Punjab-Haryana', lat: 31, lng: 75, risk: 'Moderate', rivers: 'Sutlej, Beas, Ravi, Ghaggar', affected_area: '6,000 sq km', upsc: 'Dam releases cause flash floods. 1988 Sutlej floods. Pakistan blames India for deliberate release.' },
      { name: 'Konkan-Goa Coast', lat: 17, lng: 73.5, risk: 'Moderate-High', rivers: 'Short west-flowing rivers', affected_area: '3,500 sq km', upsc: 'Steep gradient rivers. Flash floods. 2005 Mumbai floods (944mm in 24hrs). Urban flooding.' },
      { name: 'Kerala', lat: 10, lng: 76.5, risk: 'High (increasing)', rivers: 'Periyar, Pamba, Chalakudy', affected_area: '14,000 sq km', upsc: '2018 Kerala floods: 483 deaths, 5.4 lakh displaced. Worst in 100 years. Dam mismanagement? Climate change debate. Idukki-Cheruthoni dams opened.' }
    ],

    // ── LANDSLIDE ZONES ──
    landslideZones: [
      { name: 'Western Himalayas (J&K-HP)', lat: 32, lng: 76, risk: 'Very High', triggers: 'Heavy rain, earthquakes, road cutting', upsc: 'NH-44 (Jammu-Srinagar) blocked 50+ times/year. Banihal pass. Landslide dams.' },
      { name: 'Uttarakhand', lat: 30.5, lng: 79, risk: 'Very High', triggers: 'Monsoon, earthquake, glacial melt', upsc: '2021 Chamoli disaster (glacial avalanche+landslide). Kedarnath 2013. Highway NH-58 blocked. Char Dham Yatra risk.' },
      { name: 'Darjeeling-Sikkim', lat: 27.2, lng: 88.2, risk: 'Very High', triggers: 'Heavy rainfall (>3000mm), earthquakes', upsc: '2023 Sikkim GLOF → landslides → Teesta dam collapse (Chungthang). 100+ deaths. NH-10 (Siliguri-Gangtok) blocked frequently.' },
      { name: 'Northeast States', lat: 25.5, lng: 93, risk: 'Very High', triggers: 'Highest rainfall + weak geology + earthquake zone', upsc: 'Arunachal, Nagaland, Manipur, Mizoram — all highly prone. Jiri-Koima road (Manipur) most blocked highway.' },
      { name: 'Western Ghats', lat: 14, lng: 75, risk: 'High', triggers: 'Very heavy SW monsoon rainfall', upsc: 'NH-748 (Bangalore-Mangalore) blocked. Amboli Ghat. 2018 Wayanad, 2021 Taluk landslides. Coffee plantations destabilize slopes.' },
      { name: 'Konkan Coast Ghats', lat: 17, lng: 73.5, risk: 'High', triggers: 'SW monsoon (highest rainfall)', upsc: 'Mumbai-Goa highway (NH-66) blocked. Poladpur, Khed section. 2021 Mahad (Pune) wall collapse in rain.' },
      { name: 'Nilgiris', lat: 11.5, lng: 76.5, risk: 'Moderate-High', triggers: 'NE + SW monsoon', upsc: '2009 major landslides. Tea plantation removal of natural vegetation. Ooty road closures.' }
    ],

    // ── COASTAL EROSION ──
    coastalErosion: [
      { name: 'West Bengal coast', lat: 21.5, lng: 88.5, condition: 'Eroding', rate: '5-10 m/yr', cause: 'Mangrove loss, cyclones, subsidence', upsc: 'Sundarbans losing 20 sq km/yr. Ghoramara island 70% submerged. Sagar Island at risk.' },
      { name: 'Odisha Coast', lat: 20, lng: 86.5, condition: 'Eroding', rate: '3-8 m/yr', cause: 'Cyclones, longshore drift, sand mining', upsc: 'Puri-Konark coastal stretch heavily eroded. Olive Ridley nesting beaches threatened.' },
      { name: 'Andhra Pradesh Coast', lat: 15, lng: 80.5, condition: 'Eroding', rate: '2-6 m/yr', cause: 'Wave action, delta alteration by dams', upsc: 'Krishna-Godavari delta: dams reduced sediment → shoreline retreating. Srikakulam.' },
      { name: 'Tamil Nadu (East)', lat: 11.5, lng: 79.9, condition: 'Eroding', rate: '2-5 m/yr', cause: 'NE monsoon waves, sand mining', upsc: 'Marina Beach Chennai: iconic beach but gradual erosion. Chennai port blocking natural sediment transport.' },
      { name: 'Kerala Coast', lat: 10, lng: 76, condition: 'Mixed', rate: '1-4 m/yr', cause: 'Monsoon waves, tourism, sea level rise', upsc: 'Chellanam, Munroe Island submerging. Kochi expanding → displacement of natural sediment. Backwater dredging.' },
      { name: 'Karnataka Coast', lat: 14, lng: 74.5, condition: 'Moderate erosion', rate: '1-3 m/yr', cause: 'SW monsoon waves, port infrastructure', upsc: 'New Mangalore Port → downstream erosion. Panambur beach.' },
      { name: 'Goa Coast', lat: 15.5, lng: 73.8, condition: 'Mixed (accretion+erosion)', rate: 'Variable', cause: 'Sand dune mining, tourism, monsoon', upsc: 'Illegal sand mining destroyed dunes. Morjim, Calangute eroding. Tourism pressure.' },
      { name: 'Gujarat (Saurashtra)', lat: 21.5, lng: 70, condition: 'Variable', rate: '1-5 m/yr', cause: 'Arabian Sea storms, port construction', upsc: 'Hazira port development changed coastal dynamics. Pipavav area.' }
    ],

    // ── SEA LEVEL RISE & VULNERABLE AREAS ──
    seaLevelRise: {
      rate: '1.3-3 mm/yr along Indian coast (IPCC)',
      vulnerable: [
        { name: 'Sundarbans Islands', lat: 21.8, lng: 88.8, threat: 'Extreme', upsc: 'Ghoramara Island — 70% area lost since 1975. Lohachara Island — FIRST inhabited island SUBMERGED globally (2006).' },
        { name: 'Lakshadweep', lat: 10.5, lng: 72.5, threat: 'Very High', upsc: 'Max elevation 4m. Will be submerged at 1m sea level rise. 36 atolls at risk.' },
        { name: 'Andaman (low islands)', lat: 11, lng: 92.5, threat: 'High', upsc: 'Low-lying islands at risk. Coral-based islands most vulnerable. Car Nicobar partially flooded in 2004 tsunami.' },
        { name: 'Mumbai Coast', lat: 19, lng: 72.8, threat: 'High (economic impact)', upsc: 'Dharavi, Bandra area at risk. Financial capital flooding. Storm surge + sea level rise combined threat.' },
        { name: 'Kolkata (Hooghly River)', lat: 22.5, lng: 88.3, threat: 'High', upsc: 'Below sea level in parts. Tidal bore. Cyclone surge + river flood. Embankments ageing.' },
        { name: 'Kochi Low-lying Areas', lat: 9.93, lng: 76.3, threat: 'Moderate-High', upsc: 'Fort Kochi area. Tidal flooding. Backwater salinization threatening freshwater.' }
      ]
    },

    // ── CLIMATE CHANGE VULNERABILITY INDEX ──
    climateVulnerability: [
      { name: 'Assam', lat: 26.5, lng: 92, vulnerability: 'Extreme', risk: 'Floods, glacial melt, temperature rise', upsc: 'Most climate-vulnerable state. Annual floods. Brahmaputra GLOF risk. Tea gardens affected. Farmer income at risk.' },
      { name: 'Bihar', lat: 25.8, lng: 85.5, vulnerability: 'Extreme', risk: 'Floods, droughts, heat waves', upsc: 'Climate paradox: floods in N Bihar, drought in S. 76% population in rural agriculture. No resilience infrastructure.' },
      { name: 'Jharkhand', lat: 23.5, lng: 85, vulnerability: 'Very High', risk: 'Drought, heat stress, declining forests', upsc: 'Tribal population most vulnerable. Forest loss → reduced rainfall. Groundwater crisis.' },
      { name: 'Odisha', lat: 20.5, lng: 85, vulnerability: 'Very High', risk: 'Cyclones, floods, sea level rise', upsc: 'But: OSDMA model. Cyclone deaths reduced dramatically post-1999. Green Odisha initiative.' },
      { name: 'Rajasthan', lat: 27, lng: 73, vulnerability: 'Very High', risk: 'Drought, desertification, extreme heat, water scarcity', upsc: 'ENSO-linked droughts. Camel herders losing livelihoods. Traditional water harvesting (johads) revival needed.' },
      { name: 'Uttar Pradesh', lat: 27, lng: 80, vulnerability: 'Very High', risk: 'Heat waves, floods, groundwater depletion', upsc: 'Largest population → huge adaptation challenge. Bundelkhand drought. Western UP groundwater crisis.' },
      { name: 'West Bengal', lat: 23, lng: 88, vulnerability: 'High', risk: 'Cyclones, Sundarbans loss, coastal flooding', upsc: 'Amphan 2020 showed vulnerability. Tea gardens in Darjeeling temperature sensitive.' },
      { name: 'Kerala', lat: 10.5, lng: 76.5, vulnerability: 'High', risk: 'Extreme rainfall, floods, sea level rise', upsc: '2018 was wake-up call. But Kerala\'s adaptive capacity better (HDI, education).' },
      { name: 'Maharashtra', lat: 19, lng: 76, vulnerability: 'High', risk: 'Drought (Marathwada), urban floods (Mumbai), farmer distress', upsc: 'Dueling extremes. Marathwada chronic drought → farmer suicides. Mumbai extreme rain events.' },
      { name: 'HP & Uttarakhand', lat: 31, lng: 78, vulnerability: 'High', risk: 'Glacier retreat, cloudbursts, landslides', upsc: 'Mountain states. Glacier retreat threatens perennial rivers. Tourism economy disrupted.' }
    ]
  };

  // ══════════════════════════════════════════════════════════════
  // MAP DEFINITIONS — ALL 9 MAPS
  // ══════════════════════════════════════════════════════════════

  const ENVIRONMENT_MAPS = [

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // MAP 056 — Pollution Map of India
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
      mapNum: 56,
      title: 'Pollution Map of India',
      subtitle: 'Most Polluted Cities · AQI Levels · Industrial Zones · River Pollution',
      mapConfig: { center: [23, 80], zoom: 5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'AQI Categories',
          items: DATA.aqiCategories.map(c => ({ color: c.color, label: `${c.label} — ${c.pm25}` }))
        },
        {
          sectionTitle: 'Pollution Sources',
          items: [
            { dot: '#FF69B4', label: 'Industrial Pollution Zone' },
            { line: '#8B0000', label: 'Highly Polluted River Stretch' }
          ]
        }
      ],
      info: [
        {
          title: 'INDIA AIR POLLUTION — FACTS',
          facts: [
            { label: 'WHO Report 2024', value: '83 of world\'s 100 most polluted cities are in India' },
            { label: 'Deaths', value: '1.67 million deaths/yr attributable to air pollution (Lancet 2020)' },
            { label: 'NAAQS', value: 'PM2.5: 60 μg/m³ (India); WHO: 15 μg/m³' },
            { label: 'CPCB', value: 'Central Pollution Control Board — monitors 342 stations' },
            { label: 'NCAP', value: 'National Clean Air Programme — 40% reduction in PM by 2026 target' }
          ]
        },
        {
          title: 'UPSC KEY LEGISLATIONS',
          items: [
            'Air (Prevention & Control of Pollution) Act 1981',
            'Environment Protection Act 1986 (umbrella legislation)',
            'National Green Tribunal Act 2010 — NGT for environmental cases',
            'BS-VI fuel norms — implemented April 2020 (leapfrogged BS-V)',
            'GRAP (Graded Response Action Plan) — Delhi winter emergency',
            'Stubble burning — 25% of Delhi winter pollution. Punjab/Haryana farmers.',
            'SAFAR (System of Air Quality & Weather Forecasting) — IITM Pune',
            'PRANA Portal — real-time AQI across India'
          ]
        }
      ],
      render(map, app) {
        // NCR winter smog zone
        const ncSmog = L.polygon([
          [30, 75], [30, 80], [27, 82], [26, 80],
          [27, 76], [28, 74], [30, 75]
        ], {
          color: '#8B0000',
          fillColor: '#8B0000',
          fillOpacity: 0.12,
          weight: 1.5,
          dashArray: '6,4'
        });
        ncSmog.bindPopup(app.buildPopup(
          '🌫 IGP Winter Smog Belt',
          'Indo-Gangetic Plain trapped by temperature inversion in winter. Nov-Feb. Vehicular + stubble + industrial.',
          ['Smog', 'Winter', 'IGP']
        ));
        app.addLayer(ncSmog);

        // Polluted cities
        DATA.pollutedCities.forEach(city => {
          const aqiLevel = city.aqi.split(' ')[0];
          const colorMap = {
            'Severe': '#8B0000',
            'Very': '#FF4500',
            'Poor': '#FFA500',
            'Moderate': '#FFD700',
            'Good': '#00FF88'
          };
          const color = colorMap[aqiLevel] || '#FF6347';
          const radius = aqiLevel === 'Severe' ? 12 : aqiLevel === 'Very' ? 10 : 8;

          const marker = L.circleMarker([city.lat, city.lng], {
            radius, color: '#000', fillColor: color, fillOpacity: 0.9, weight: 2
          });
          marker.bindPopup(app.buildPopup(
            `💨 ${city.name}`,
            `<b>AQI:</b> ${city.aqi}<br>
             <b>PM2.5:</b> ${city.pm25}<br>
             <b>Causes:</b> ${city.cause}<br>
             <b>UPSC:</b> ${city.upsc}`,
            ['AQI', city.aqi.split('(')[0]]
          ));
          marker.on('mouseover', function () { this.setRadius(radius + 3); this.bringToFront(); });
          marker.on('mouseout', function () { this.setRadius(radius); });
          app.addLayer(marker);
          app.addLayer(app.labelMarker([city.lat + 0.2, city.lng], `${city.name}\n${city.aqi.split('(')[0].trim()}`, color, '8px'));
        });

        // Polluted river stretches
        DATA.pollutedRivers.forEach(r => {
          if (r.pollutedStretch) {
            const line = L.polyline(r.pollutedStretch, {
              color: '#8B0000', weight: 4, opacity: 0.8
            });
            line.bindPopup(app.buildPopup(
              `🚫 ${r.name} (Polluted Stretch)`,
              `<b>Pollution:</b> ${r.pollution}<br>
               <b>BOD:</b> ${r.bod || 'High'}<br>
               <b>UPSC:</b> ${r.upsc}`,
              ['River Pollution', r.name]
            ));
            app.addLayer(line);
          }
        });

        // Industrial pollution zones
        const indPollZones = [
          { name: 'Damodar Valley Industrial Belt', lat: 23.5, lng: 86, upsc: 'Coal + steel + thermal power pollution' },
          { name: 'Vapi-Surat CETP Area', lat: 21, lng: 73, upsc: 'Chemical + textile effluents. CETP (Common Effluent Treatment Plant).' },
          { name: 'Kanpur Leather-Tanning', lat: 26.5, lng: 80.4, upsc: 'Chrome tannery discharge into Ganga. SC ban. 400+ tanneries.' },
          { name: 'Ludhiana Industrial', lat: 30.9, lng: 75.85, upsc: 'Hosiery + dyeing effluents into Buddha Nullah → Sutlej.' }
        ];
        indPollZones.forEach(z => {
          const marker = L.circleMarker([z.lat, z.lng], {
            radius: 10, color: '#FF69B4', fillColor: '#FF69B4', fillOpacity: 0.6, weight: 2
          });
          marker.bindPopup(app.buildPopup(`🏭 ${z.name}`, z.upsc, ['Industrial Pollution']));
          app.addLayer(marker);
          app.addLayer(app.labelMarker([z.lat + 0.2, z.lng], z.name, '#FF69B4', '8px'));
        });

        // NCR stubble burning arrows
        const stubble = [
          [[30.5, 76], [29.5, 77.2]],
          [[30.8, 75.5], [29.8, 76.8]],
          [[30.2, 76.5], [28.9, 77.3]]
        ];
        stubble.forEach(s => {
          const line = L.polyline(s, { color: '#FF8C00', weight: 2, dashArray: '4,3', opacity: 0.7 });
          line.bindPopup(app.buildPopup('🌾 Stubble Burning Wind', 'Punjab/Haryana stubble smoke drifts toward Delhi (Oct-Nov)', ['Stubble', 'Delhi']));
          app.addLayer(line);
        });
        app.addLayer(app.labelMarker([31, 75], '🌾 STUBBLE\nBURNING\n(Punjab/Haryana)', '#FF8C00', '9px'));

        app.showToast('MAP 056 — Pollution Map loaded', 'success');
      }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // MAP 057 — Desertification Map
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
      mapNum: 57,
      title: 'Desertification Map',
      subtitle: 'Desertification Prone Areas · Land Degradation · States Affected',
      mapConfig: { center: [23, 78], zoom: 5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Severity',
          items: [
            { color: '#8B0000', label: 'Very High Desertification' },
            { color: '#FF4500', label: 'High Desertification' },
            { color: '#FFA500', label: 'Moderate Desertification' },
            { color: '#FFD700', label: 'Low-Moderate (watch zone)' }
          ]
        }
      ],
      info: [
        {
          title: 'DESERTIFICATION IN INDIA',
          facts: [
            { label: 'Affected Area', value: '96.4 million hectares (29.3% of India) — ISRO 2021' },
            { label: 'Major Cause', value: 'Water erosion (83%), wind erosion, human-induced changes' },
            { label: 'Most Affected', value: 'Rajasthan (23%), Gujarat, MP, Jharkhand, Maharashtra' },
            { label: 'UNCCD', value: 'India committed to Land Degradation Neutrality by 2030' }
          ]
        },
        {
          title: 'UPSC KEY POINTS',
          items: [
            'Land Degradation Neutrality (LDN) — India target: restore 26 million hectares by 2030',
            'UNCCD COP 14 held in New Delhi (2019) — Great Green Wall of India proposed',
            'Aravalli denuded → Thar desert expanding toward Delhi',
            'Chambal ravines: badland topography (beehad). Gullying.',
            'Jharkhand deforestation → laterite soil exposure → degradation',
            'Over-irrigation → waterlogging + salinization → desertification',
            'Climate change → droughts more frequent → accelerating desertification',
            'MGNREGA most impactful scheme for reversing land degradation in rural India'
          ]
        }
      ],
      render(map, app) {
        DATA.desertificationZones.forEach(zone => {
          const colors = {
            'Very High': '#8B0000',
            'High': '#FF4500',
            'High (ravine)': '#FF6600',
            'Moderate-High': '#FFA500',
            'Moderate': '#FFD700'
          };
          const color = colors[zone.severity] || '#FFA500';
          const radius = zone.severity.includes('Very') ? 75000 : zone.severity === 'High' ? 65000 : 55000;

          const circle = L.circle([zone.lat, zone.lng], {
            radius, color, fillColor: color, fillOpacity: 0.3, weight: 2
          });
          circle.bindPopup(app.buildPopup(
            `🏜 ${zone.name}`,
            `<b>Severity:</b> ${zone.severity}<br>
             <b>States:</b> ${zone.states}<br>
             ${zone.area ? `<b>Area:</b> ${zone.area}<br>` : ''}
             <b>UPSC:</b> ${zone.upsc}`,
            ['Desertification', zone.severity]
          ));
          circle.on('mouseover', function () { this.setStyle({ fillOpacity: 0.5 }); });
          circle.on('mouseout', function () { this.setStyle({ fillOpacity: 0.3 }); });
          app.addLayer(circle);
          app.addLayer(app.labelMarker([zone.lat + 0.6, zone.lng], `${zone.name}\n(${zone.severity})`, color, '9px'));
        });

        // Thar desert label
        app.addLayer(app.labelMarker([26.5, 70], '🏜 THAR DESERT\n7th Largest Globally\n(Expanding Eastward)', '#FF4500', '10px'));

        // Aravalli degradation
        const aravalli = L.polyline([
          [24.5, 73.7], [25.5, 73.5], [26.5, 73.7], [27.5, 74.5], [28.6, 77.2]
        ], { color: '#FF8800', weight: 3, dashArray: '6,4', opacity: 0.7 });
        aravalli.bindPopup(app.buildPopup('⚠ Aravalli Range — Degraded', 'Mining + deforestation → barrier broken → Thar sands advancing toward Delhi', ['Aravalli', 'Degradation']));
        app.addLayer(aravalli);
        app.addLayer(app.labelMarker([26, 73.5], 'ARAVALLI\n(Degraded Barrier)', '#FF8800', '9px'));

        const statNote = L.divIcon({
          className: '',
          html: `<div style="background:rgba(0,0,0,0.85);border:1px solid #FFA500;
            border-radius:10px;padding:10px;font-size:9px;color:#FFA500;
            max-width:230px;line-height:1.6;font-family:Inter,sans-serif">
            <b style="color:#FFD700">📊 DESERTIFICATION: INDIA 2021</b><br>
            96.4 million ha affected (29.3%)<br>
            Water erosion: 83% of cases<br>
            Wind erosion: dominant in Rajasthan<br>
            Target: Restore 26 Mha by 2030<br>
            <span style="color:#aaa">Source: ISRO, NCAER</span>
          </div>`,
          iconAnchor: [0, 0]
        });
        app.addLayer(L.marker([8.5, 69], { icon: statNote, interactive: false }));
        app.showToast('MAP 057 — Desertification loaded', 'success');
      }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // MAP 058 — Earthquake Zones Map
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
      mapNum: 58,
      title: 'Earthquake Zones Map of India',
      subtitle: 'Zone II to Zone V · Fault Lines · BIS Classification',
      mapConfig: { center: [24, 82], zoom: 5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Seismic Zones (BIS)',
          items: [
            { color: '#FF0000', label: 'Zone V — Very High Risk (MSK IX+)' },
            { color: '#FF6600', label: 'Zone IV — High Risk (MSK VIII)' },
            { color: '#FFA500', label: 'Zone III — Moderate Risk (MSK VII)' },
            { color: '#FFD700', label: 'Zone II — Low Risk (MSK VI)' }
          ]
        },
        {
          sectionTitle: 'Fault Lines',
          items: [
            { line: '#FF0000', label: 'Main Frontal Thrust (MFT)' },
            { line: '#FF4400', label: 'Main Boundary Thrust (MBT)' },
            { line: '#FF6600', label: 'Main Central Thrust (MCT)' }
          ]
        }
      ],
      info: [
        {
          title: 'SEISMIC ZONES OF INDIA',
          facts: [
            { label: 'Zone V', value: 'J&K, HP(N), Uttarakhand(N), NE India, Kachchh, A&N Islands — PGA 0.36g' },
            { label: 'Zone IV', value: 'J&K(S), Delhi, HP, Uttarakhand(S), Sikkim, Bihar(N) — PGA 0.24g' },
            { label: 'Zone III', value: 'Kerala, MP, Rajasthan(E), Gujarat, Maharashtra(W) — PGA 0.16g' },
            { label: 'Zone II', value: 'Most of Peninsular India — PGA 0.10g' }
          ]
        },
        {
          title: 'MAJOR EARTHQUAKES — UPSC',
          items: [
            'Assam 1897 — M8.0. Brahmaputra valley. Changed river courses.',
            'Bihar 1934 — M8.1. Nepal border. 10,000+ deaths.',
            'Assam 1950 — M8.7. Strongest in India. Brahmaputra dammed temporarily.',
            'Latur 1993 — M6.2. 9748 deaths. Deccan trap region (unexpected). Maharashtra.',
            'Jabalpur 1997 — M6.0. Central India. Narmada fault.',
            'Bhuj 2001 — M7.7. 20,000+ deaths. Kachchh. ₹21,000 crore damage.',
            'Sikkim 2011 — M6.9. North Sikkim. Teesta valley dams damaged.',
            'Nepal 2015 — M7.8. 9000 deaths. India felt strongly in Gangetic plain.'
          ]
        }
      ],
      render(map, app) {
        DATA.earthquakeZones.filter(z => z.coords && z.coords.length > 0).forEach(zone => {
          const poly = L.polygon(zone.coords, {
            color: zone.color,
            fillColor: zone.color,
            fillOpacity: 0.3,
            weight: 2
          });
          poly.bindPopup(app.buildPopup(
            `⚡ ${zone.zone}`,
            `<b>Description:</b> ${zone.description}<br>
             <b>States:</b> ${zone.states}<br>
             <b>Examples:</b> ${zone.examples}`,
            [zone.zone, 'Seismic']
          ));
          poly.on('mouseover', function () { this.setStyle({ fillOpacity: 0.5, weight: 3 }); this.bringToFront(); });
          poly.on('mouseout', function () { this.setStyle({ fillOpacity: 0.3, weight: 2 }); });
          app.addLayer(poly);

          const centroid = zone.coords[Math.floor(zone.coords.length / 3)];
          app.addLayer(app.labelMarker(centroid, zone.zone, zone.color, '9px'));
        });

        // Fault lines
        DATA.faultLines.forEach(fault => {
          const line = L.polyline(fault.coords, {
            color: fault.color,
            weight: 3,
            opacity: 0.8,
            dashArray: '8,4'
          });
          line.bindPopup(app.buildPopup(
            `⚡ ${fault.name}`,
            `<b>UPSC:</b> ${fault.upsc}`,
            ['Fault', 'Seismic']
          ));
          app.addLayer(line);
          const midPt = fault.coords[Math.floor(fault.coords.length / 2)];
          app.addLayer(app.labelMarker([midPt[0] + 0.2, midPt[1]], fault.name, fault.color, '8px'));
        });

        // Major earthquake events
        const majorEarthquakes = [
          { name: 'Bhuj 2001', lat: 23.36, lng: 69.86, mag: 'M7.7', deaths: '20,000+', color: '#FF0000' },
          { name: 'Latur 1993', lat: 18.07, lng: 76.57, mag: 'M6.2', deaths: '9,748', color: '#FF6600' },
          { name: 'Bihar 1934', lat: 26.50, lng: 86.50, mag: 'M8.1', deaths: '10,000+', color: '#FF0000' },
          { name: 'Assam 1950', lat: 28.50, lng: 96.00, mag: 'M8.7', deaths: '1,526', color: '#FF0000' },
          { name: 'Uttarkashi 1991', lat: 30.78, lng: 78.77, mag: 'M6.8', deaths: '768', color: '#FF6600' },
          { name: 'Chamoli 1999', lat: 30.38, lng: 79.42, mag: 'M6.8', deaths: '103', color: '#FF6600' },
          { name: 'Sikkim 2011', lat: 27.72, lng: 88.15, mag: 'M6.9', deaths: '97', color: '#FFA500' }
        ];

        majorEarthquakes.forEach(eq => {
          const marker = L.marker([eq.lat, eq.lng], {
            icon: L.divIcon({
              className: '',
              html: `<div style="
                background:${eq.color};
                color:#fff;
                border-radius:50%;
                width:18px;height:18px;
                display:flex;align-items:center;justify-content:center;
                font-weight:bold;font-size:10px;
                border:2px solid #fff;
                box-shadow:0 0 10px ${eq.color};
              ">⚡</div>`,
              iconAnchor: [9, 9]
            })
          });
          marker.bindPopup(app.buildPopup(
            `⚡ ${eq.name}`,
            `<b>Magnitude:</b> ${eq.mag}<br><b>Deaths:</b> ${eq.deaths}`,
            ['Earthquake', eq.mag]
          ));
          app.addLayer(marker);
          app.addLayer(app.labelMarker([eq.lat + 0.25, eq.lng], `${eq.name}\n${eq.mag}`, eq.color, '8px'));
        });

        app.showToast('MAP 058 — Earthquake Zones loaded', 'success');
      }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // MAP 059 — Flood Vulnerability Map
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
      mapNum: 59,
      title: 'Flood Vulnerability Map',
      subtitle: 'Extreme · Very High · High Flood Risk Zones with Historical Events',
      mapConfig: { center: [25, 83], zoom: 5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Flood Risk',
          items: [
            { color: '#0000CC', label: 'Extreme Risk (Annual flooding)' },
            { color: '#0066FF', label: 'Very High Risk' },
            { color: '#00AAFF', label: 'High Risk' },
            { color: '#00CCFF', label: 'Moderate Risk' }
          ]
        }
      ],
      info: [
        {
          title: 'FLOOD STATISTICS INDIA',
          facts: [
            { label: 'Annual Avg Deaths', value: '~1600 (NDMA)' },
            { label: 'Affected Area', value: '~40 million ha (12.5% of total)' },
            { label: 'Annual Crop Loss', value: '>₹10,000 crore on average' },
            { label: 'Most Affected', value: 'Bihar (highest flood affected area), Assam, UP, WB' },
            { label: 'Flash Floods', value: 'Himachal, Uttarakhand, Kerala, Northeast — increasing' }
          ]
        },
        {
          title: 'UPSC KEY FLOOD EVENTS & POLICY',
          items: [
            'Kosi breach 2008 — 500 deaths, 3 million displaced, Bihar',
            'Assam 2022 — worst in decade. 200 deaths, 70 lakh affected.',
            'Kerala 2018 — worst flood in century. 483 deaths. Dam release controversy.',
            'Chennai 2015 — extreme urban flood. 500 deaths. Poor drainage.',
            'Uttarakhand 2013 — Kedarnath disaster. 5000+ deaths. Flash flood + landslide.',
            'CWC (Central Water Commission) — flood forecasting network',
            'NDMA flood guidelines: embankments, flood plain zoning, early warning',
            'Climate change intensifying flood events — more frequent, more severe'
          ]
        }
      ],
      render(map, app) {
        const riskColors = {
          'Extreme': '#0000CC',
          'Very High': '#0066FF',
          'High': '#00AAFF',
          'Moderate': '#00CCFF',
          'Moderate-High': '#0055DD',
          'High (increasing)': '#0088CC'
        };

        DATA.floodVulnerability.forEach(area => {
          const color = riskColors[area.risk] || '#00AAFF';
          const radius = area.risk === 'Extreme' ? 90000 : area.risk === 'Very High' ? 75000 : 60000;

          const circle = L.circle([area.lat, area.lng], {
            radius, color, fillColor: color, fillOpacity: 0.3, weight: 2
          });
          circle.bindPopup(app.buildPopup(
            `🌊 ${area.name}`,
            `<b>Risk:</b> ${area.risk}<br>
             <b>Rivers:</b> ${area.rivers}<br>
             <b>Affected:</b> ${area.affected_area}<br>
             <b>UPSC:</b> ${area.upsc}`,
            ['Flood', area.risk]
          ));
          circle.on('mouseover', function () { this.setStyle({ fillOpacity: 0.55 }); });
          circle.on('mouseout', function () { this.setStyle({ fillOpacity: 0.3 }); });
          app.addLayer(circle);
          app.addLayer(app.labelMarker(
            [area.lat + 0.5, area.lng],
            `${area.name}\n(${area.risk})`,
            color, '9px'
          ));
        });

        // Sorrow rivers markers
        const sorrows = [
          { name: 'Kosi — "Sorrow of Bihar"', lat: 26.2, lng: 86.8, color: '#FF0000' },
          { name: 'Damodar — "Sorrow of Bengal"', lat: 23.2, lng: 87.2, color: '#FF4400' }
        ];
        sorrows.forEach(r => {
          const m = L.circleMarker([r.lat, r.lng], {
            radius: 9, color: '#000', fillColor: r.color, fillOpacity: 1, weight: 2
          });
          m.bindPopup(app.buildPopup(`⚠ ${r.name}`, 'River notorious for devastating floods and course changes', ['Sorrow River']));
          app.addLayer(m);
          app.addLayer(app.labelMarker([r.lat - 0.3, r.lng], r.name, r.color, '9px'));
        });

        app.showToast('MAP 059 — Flood Vulnerability loaded', 'success');
      }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // MAP 060 — Landslide Prone Areas
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
      mapNum: 60,
      title: 'Landslide Prone Areas Map',
      subtitle: 'High Risk Zones · Northeast · Himalayas · Western Ghats',
      mapConfig: { center: [27, 83], zoom: 5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Landslide Risk',
          items: [
            { color: '#8B0000', label: 'Very High Risk (Frequent, severe)' },
            { color: '#FF4500', label: 'High Risk (Regular events)' },
            { color: '#FFA500', label: 'Moderate-High Risk' },
            { color: '#FFD700', label: 'Moderate Risk' }
          ]
        }
      ],
      info: [
        {
          title: 'LANDSLIDE FACTS INDIA',
          facts: [
            { label: 'Affected Area', value: '15% of India\'s land is landslide prone' },
            { label: 'Annual Deaths', value: '~1000 deaths (5th most affected country)' },
            { label: 'Most Vulnerable', value: 'Uttarakhand, NE India, HP, Darjeeling, W Ghats' },
            { label: 'Monitoring', value: 'GSI (Geological Survey of India) hazard mapping' }
          ]
        },
        {
          title: 'UPSC KEY EVENTS & POINTS',
          items: [
            'Kedarnath 2013: cloud burst + landslide + flash flood. 5000+ dead.',
            'Chamoli 2021: Glacial avalanche + rockslide. 200+ dead. Rishiganga dam destroyed.',
            'Wayanad 2024: massive landslide. 400+ deaths. Tragedy sparked debate on Western Ghats ESA.',
            'Darjeeling-Sikkim 2023: GLOF → multiple landslides → Teesta dam collapse.',
            'Joshimath 2023: Subsidence (sinking of Joshimath town). NTPC tunnel blamed.',
            'GSI landslide hazard zonation maps available for 100+ districts',
            'Road cutting in Himalayas: single largest cause of artificial landslides',
            'Deforestation of slopes: root removal → slope instability'
          ]
        }
      ],
      render(map, app) {
        const lsColors = {
          'Very High': '#8B0000',
          'High': '#FF4500',
          'Moderate-High': '#FFA500',
          'Moderate': '#FFD700'
        };

        DATA.landslideZones.forEach(zone => {
          const color = lsColors[zone.risk] || '#FFA500';
          const radius = zone.risk === 'Very High' ? 80000 : zone.risk === 'High' ? 70000 : 60000;

          const circle = L.circle([zone.lat, zone.lng], {
            radius, color, fillColor: color, fillOpacity: 0.3, weight: 2
          });
          circle.bindPopup(app.buildPopup(
            `⛰ ${zone.name}`,
            `<b>Risk:</b> ${zone.risk}<br>
             <b>Triggers:</b> ${zone.triggers}<br>
             <b>UPSC:</b> ${zone.upsc}`,
            ['Landslide', zone.risk]
          ));
          circle.on('mouseover', function () { this.setStyle({ fillOpacity: 0.55 }); });
          circle.on('mouseout', function () { this.setStyle({ fillOpacity: 0.3 }); });
          app.addLayer(circle);
          app.addLayer(app.labelMarker([zone.lat + 0.5, zone.lng], `${zone.name}\n(${zone.risk})`, color, '9px'));
        });

        // Critical events
        const critEvents = [
          { name: 'Kedarnath 2013', lat: 30.74, lng: 79.07, color: '#FF0000', desc: '5000+ dead. Cloud burst + landslide + flash flood.' },
          { name: 'Chamoli 2021', lat: 30.38, lng: 79.58, color: '#FF0000', desc: '200+ dead. Glacial avalanche. Rishiganga dam gone.' },
          { name: 'Joshimath 2023', lat: 30.56, lng: 79.57, color: '#FF6600', desc: 'Town sinking. NTPC tunnel blamed. 600+ houses cracked.' },
          { name: 'Wayanad 2024', lat: 11.60, lng: 76.09, color: '#FF0000', desc: '400+ dead. Western Ghats ESA protection debate sparked.' },
          { name: 'Sikkim-Teesta 2023', lat: 27.72, lng: 88.50, color: '#FF0000', desc: 'GLOF → Chungthang dam collapse. 100+ dead.' }
        ];

        critEvents.forEach(ev => {
          const marker = L.circleMarker([ev.lat, ev.lng], {
            radius: 10, color: '#FFD700', fillColor: ev.color, fillOpacity: 0.9, weight: 2
          });
          marker.bindPopup(app.buildPopup(`⚠ ${ev.name}`, ev.desc, ['Critical Event', 'Landslide']));
          app.addLayer(marker);
          app.addLayer(app.labelMarker([ev.lat + 0.2, ev.lng], ev.name, ev.color, '8px'));
        });

        app.showToast('MAP 060 — Landslide Areas loaded', 'success');
      }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // MAP 061 — Coastal Erosion Map
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
      mapNum: 61,
      title: 'Coastal Erosion Map',
      subtitle: 'Eroding Coastlines · Accretion Areas · Sea Level Rise Impact',
      mapConfig: { center: [16, 79], zoom: 5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Coastal Status',
          items: [
            { line: '#FF0000', label: 'Eroding Coast (losing land)' },
            { line: '#00FF88', label: 'Accreting Coast (gaining land)' },
            { line: '#FFD700', label: 'Stable / Mixed' },
            { dot: '#8B0000', label: 'Critical Erosion Hotspot' }
          ]
        }
      ],
      info: [
        {
          title: 'COASTAL EROSION — INDIA',
          facts: [
            { label: 'Eroding', value: '33% of India\'s coastline eroding (NCSCM 2018)' },
            { label: 'Stable', value: '27% stable' },
            { label: 'Accreting', value: '40% accreting (gaining sediment)' },
            { label: 'Worst', value: 'Sundarbans: 20 sq km/yr loss' }
          ]
        },
        {
          title: 'UPSC KEY POINTS',
          items: [
            'Lohachara Island (WB): First inhabited island submerged globally (2006)',
            'Ghoramara Island (WB): Lost 70% area since 1975',
            'ICZM — Integrated Coastal Zone Management Plan',
            'CRZ Notification 2019 — replaced 2011 rules. Allows more development.',
            'Sand mining — illegal but widespread → removes natural sediment buffer',
            'Sea level rise: 1.3-3mm/yr along India coast (rising)',
            'Dam construction reduces sediment → delta retreat (Godavari, Krishna)',
            'Coastal Regulation Zone (CRZ): 0-500m from high tide line — protected'
          ]
        }
      ],
      render(map, app) {
        // Eroding coasts
        const erodingCoasts = [
          { coords: [[21.5, 88.5], [21, 89], [20, 87.5], [19.5, 86.5]], color: '#FF0000', name: 'WB-Odisha Eroding Coast' },
          { coords: [[20, 86.5], [19, 85.5], [18, 84]], color: '#FF2200', name: 'Odisha Eroding Coast' },
          { coords: [[14, 80.2], [13.5, 80.0], [12, 80.0], [10, 79.7]], color: '#FF4400', name: 'Coromandel Eroding Coast' }
        ];

        erodingCoasts.forEach(coast => {
          const line = L.polyline(coast.coords, {
            color: coast.color, weight: 4, opacity: 0.8
          });
          line.bindPopup(app.buildPopup(`🌊 ${coast.name}`, 'Actively eroding coastline. Sea level rise + wave action.', ['Erosion']));
          app.addLayer(line);
        });

        // Stable/accreting coasts
        const accretingCoasts = [
          { coords: [[22, 71], [21, 72], [20, 73]], color: '#00FF88', name: 'Gujarat Accreting Coast' }
        ];
        accretingCoasts.forEach(coast => {
          const line = L.polyline(coast.coords, { color: coast.color, weight: 3, opacity: 0.7 });
          line.bindPopup(app.buildPopup(coast.name, 'Accreting coast — gaining sediment', ['Accretion']));
          app.addLayer(line);
        });

        DATA.coastalErosion.forEach(area => {
          const color = area.condition === 'Eroding' ? '#FF0000' :
            area.condition === 'Mixed (accretion+erosion)' ? '#FFD700' : '#FFA500';
          const marker = L.circleMarker([area.lat, area.lng], {
            radius: 9, color: '#000', fillColor: color, fillOpacity: 0.85, weight: 2
          });
          marker.bindPopup(app.buildPopup(
            `🌊 ${area.name}`,
            `<b>Condition:</b> ${area.condition}<br>
             <b>Rate:</b> ${area.rate}<br>
             <b>Cause:</b> ${area.cause}<br>
             <b>UPSC:</b> ${area.upsc}`,
            ['Coastal Erosion', area.condition]
          ));
          app.addLayer(marker);
          app.addLayer(app.labelMarker([area.lat + 0.2, area.lng], area.name, color, '8px'));
        });

        // Submerged island markers
        DATA.seaLevelRise.vulnerable.forEach(v => {
          const m = L.circleMarker([v.lat, v.lng], {
            radius: 10, color: '#FFD700', fillColor: '#8B0000', fillOpacity: 0.8, weight: 2, dashArray: '4,3'
          });
          m.bindPopup(app.buildPopup(
            `⚠ ${v.name}`,
            `<b>Threat:</b> ${v.threat}<br><b>UPSC:</b> ${v.upsc}`,
            ['Sea Level Rise', v.threat]
          ));
          app.addLayer(m);
          app.addLayer(app.labelMarker([v.lat + 0.25, v.lng], v.name, '#8B0000', '8px'));
        });

        app.showToast('MAP 061 — Coastal Erosion loaded', 'success');
      }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // MAP 062 — Air Quality Index Map
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
      mapNum: 62,
      title: 'Air Quality Index Map',
      subtitle: 'AQI by City · Seasonal Variation · Most Polluted vs Clean',
      mapConfig: { center: [25, 80], zoom: 5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'AQI Scale (India — CPCB)',
          items: DATA.aqiCategories.map(c => ({ color: c.color, label: `${c.label} — PM2.5 ${c.pm25}` }))
        }
      ],
      info: [
        {
          title: 'AQI — INDIA vs WHO',
          facts: [
            { label: 'India NAAQS PM2.5', value: 'Annual: 40 μg/m³; 24hr: 60 μg/m³' },
            { label: 'WHO Guideline', value: 'Annual: 5 μg/m³; 24hr: 15 μg/m³' },
            { label: 'India vs WHO', value: 'India standard is 8x more lenient than WHO' },
            { label: 'Bhiwadi AQI', value: 'Ranked 2nd most polluted city GLOBALLY (IQAir 2023)' },
            { label: 'NCAP 2019', value: 'National Clean Air Programme: 40% PM reduction by 2026' }
          ]
        },
        {
          title: 'UPSC POLLUTION SOURCES',
          items: [
            'Transport (vehicles): 30-40% in cities. BS-VI norms from 2020.',
            'Industry: 25-30%. Brick kilns, thermal power, cement.',
            'Biomass burning: 25%. Stubble + wood cooking. Rural.',
            'Construction dust: 15-20% in rapidly growing cities.',
            'Stubble burning: 25% of Delhi winter PM2.5 (IITM study).',
            'Diwali firecrackers: AQI doubles/triples on Diwali night.',
            'Temperature inversion: Cold air traps pollutants (winter IGP).',
            'SAFAR — System of Air Quality & Weather Forecasting (MoES).'
          ]
        }
      ],
      render(map, app) {
        // IGP pollution belt
        const igpBelt = L.polygon([
          [31, 74], [31, 80], [29, 85], [26, 90],
          [24, 88], [24, 84], [26, 80], [27, 77],
          [28, 74], [30, 73], [31, 74]
        ], {
          color: '#8B0000', fillColor: '#8B0000', fillOpacity: 0.1,
          weight: 1.5, dashArray: '6,4'
        });
        igpBelt.bindPopup(app.buildPopup('🌫 IGP Pollution Belt', 'Indo-Gangetic Plain: trapped by Himalayas + temperature inversion. Nov-Feb worst.', ['AQI', 'IGP']));
        app.addLayer(igpBelt);
        app.addLayer(app.labelMarker([29, 78], 'IGP POLLUTION\nBELT (Nov-Feb)', '#8B0000', '10px'));

        DATA.pollutedCities.forEach(city => {
          const aqiLevel = city.aqi.split('(')[0].trim();
          const colorMap = {
            'Severe': '#8B0000',
            'Very Poor': '#FF4500',
            'Poor': '#FFA500',
            'Moderate-Poor': '#FF8C00',
            'Moderate': '#FFD700'
          };
          const color = colorMap[aqiLevel] || '#FFA500';
          const radius = aqiLevel === 'Severe' ? 13 : aqiLevel === 'Very Poor' ? 11 : 9;

          const marker = L.circleMarker([city.lat, city.lng], {
            radius, color: '#000', fillColor: color, fillOpacity: 0.9, weight: 2
          });
          marker.bindPopup(app.buildPopup(
            `💨 ${city.name}`,
            `<b>AQI Category:</b> ${city.aqi}<br>
             <b>PM2.5:</b> ${city.pm25}<br>
             <b>Main Causes:</b> ${city.cause}<br>
             <b>UPSC:</b> ${city.upsc}`,
            ['AQI', aqiLevel]
          ));
          marker.on('mouseover', function () { this.setRadius(radius + 3); this.bringToFront(); });
          marker.on('mouseout', function () { this.setRadius(radius); });
          app.addLayer(marker);
          app.addLayer(app.labelMarker([city.lat + 0.2, city.lng], `${city.name}`, color, '8px'));
        });

        // Clean air cities comparison
        const cleanCities = [
          { name: 'Shillong', lat: 25.57, lng: 91.88, aqi: 'Good' },
          { name: 'Aizawl', lat: 23.73, lng: 92.71, aqi: 'Good' },
          { name: 'Port Blair', lat: 11.66, lng: 92.74, aqi: 'Satisfactory' }
        ];
        cleanCities.forEach(c => {
          const m = L.circleMarker([c.lat, c.lng], {
            radius: 7, color: '#000', fillColor: '#00FF88', fillOpacity: 0.9, weight: 2
          });
          m.bindPopup(app.buildPopup(`✅ ${c.name}`, `AQI: ${c.aqi}. Clean air city.`, ['Clean Air']));
          app.addLayer(m);
          app.addLayer(app.labelMarker([c.lat + 0.2, c.lng], `${c.name} ✅`, '#00FF88', '8px'));
        });

        app.showToast('MAP 062 — Air Quality Index loaded', 'success');
      }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // MAP 063 — River Pollution Map
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
      mapNum: 63,
      title: 'River Pollution Map',
      subtitle: 'Most Polluted Rivers · Critical Stretches · Industrial Discharge',
      mapConfig: { center: [24, 81], zoom: 5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'River Pollution Level',
          items: [
            { line: '#8B0000', label: 'Critically Polluted Stretch (BOD >6)' },
            { line: '#FF4500', label: 'Highly Polluted (BOD 3-6)' },
            { line: '#FFA500', label: 'Moderately Polluted' },
            { line: '#4169E1', label: 'Clean River Course' }
          ]
        }
      ],
      info: [
        {
          title: 'RIVER POLLUTION — KEY FACTS',
          facts: [
            { label: 'CPCB 2022', value: '603 polluted river stretches identified in India' },
            { label: 'Most Polluted', value: 'Yamuna (Delhi stretch): BOD 60-100 mg/L (should be <3)' },
            { label: 'Namami Gange', value: '₹20,000 crore mission. STPs, ghats, afforestation.' },
            { label: 'BOD', value: 'Biochemical Oxygen Demand. Measure of organic pollution.' }
          ]
        },
        {
          title: 'UPSC KEY POLLUTION SOURCES',
          items: [
            'Municipal sewage: 70% of river pollution. Most cities lack STPs.',
            'Industrial effluents: tanneries (Kanpur), textiles (Surat), chemicals (Vapi)',
            'Agricultural runoff: fertilizer + pesticide drainage → eutrophication',
            'Religious practices: idol immersion, cremation ash into rivers',
            'Yamuna: receives 22% of India\'s wastewater in 2% of river length',
            'Ganga Action Plan (1986): largely failed. Namami Gange (2014): better funded.',
            'NGT has taken suo motu cognizance of river pollution multiple times',
            'Supreme Court — Yamuna rejuvenation committee. Monthly progress reports.'
          ]
        }
      ],
      render(map, app) {
        DATA.pollutedRivers.forEach(r => {
          // Full river course
          if (r.course) {
            const fullLine = L.polyline(r.course, {
              color: '#4169E1', weight: 2, opacity: 0.5
            });
            fullLine.bindPopup(app.buildPopup(`🌊 ${r.name}`, 'River course', ['River']));
            app.addLayer(fullLine);
          }

          // Polluted stretch
          if (r.pollutedStretch) {
            const pollLine = L.polyline(r.pollutedStretch, {
              color: '#8B0000', weight: 5, opacity: 0.9
            });
            pollLine.bindPopup(app.buildPopup(
              `🚫 ${r.name} — POLLUTED STRETCH`,
              `<b>Pollution:</b> ${r.pollution}<br>
               <b>BOD:</b> ${r.bod || 'Very High'}<br>
               <b>Cities:</b> ${r.cities || '—'}<br>
               <b>UPSC:</b> ${r.upsc}`,
              ['Critically Polluted', r.name]
            ));
            app.addLayer(pollLine);

            const mid = r.pollutedStretch[Math.floor(r.pollutedStretch.length / 2)];
            app.addLayer(app.labelMarker([mid[0] + 0.3, mid[1]], `🚫 ${r.name}\n(Polluted)`, '#8B0000', '9px'));
          }
        });

        // Namami Gange note
        const gangaNote = L.divIcon({
          className: '',
          html: `<div style="background:rgba(0,0,0,0.85);border:2px solid #4169E1;
            border-radius:10px;padding:10px;font-size:9px;color:#87CEEB;
            max-width:230px;line-height:1.6;font-family:Inter,sans-serif">
            <b style="color:#FFD700">🌊 NAMAMI GANGE MISSION</b><br>
            Budget: ₹20,000 crore<br>
            170+ STPs being built<br>
            Ghats renovation: 73 ghats<br>
            Afforestation: 5-km buffer zone<br>
            E-flows: minimum flow maintained<br>
            <span style="color:#aaa">Article 21 — Right to clean water (SC)</span>
          </div>`,
          iconAnchor: [0, 0]
        });
        app.addLayer(L.marker([8.5, 69], { icon: gangaNote, interactive: false }));
        app.showToast('MAP 063 — River Pollution loaded', 'success');
      }
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // MAP 064 — Climate Change Vulnerability Map
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
      mapNum: 64,
      title: 'Climate Change Vulnerability Map',
      subtitle: 'Most Vulnerable States · Risk Factors · Sea Level · Agriculture',
      mapConfig: { center: [22, 82], zoom: 5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Vulnerability Level',
          items: [
            { color: '#8B0000', label: 'Extreme Vulnerability' },
            { color: '#FF4500', label: 'Very High Vulnerability' },
            { color: '#FFA500', label: 'High Vulnerability' },
            { color: '#FFD700', label: 'Moderate Vulnerability' }
          ]
        }
      ],
      info: [
        {
          title: 'INDIA & CLIMATE CHANGE',
          facts: [
            { label: 'Temperature Rise', value: '0.7°C rise since 1901. Projected +4.4°C by 2100.' },
            { label: 'Monsoon', value: 'Intensifying — more extreme rainfall events, longer dry spells' },
            { label: 'Sea Level', value: '1.3-3.3 mm/yr rise along Indian coast' },
            { label: 'Glacier Retreat', value: 'Gangotri retreating 22m/yr. 75% Himalayan glaciers shrinking.' },
            { label: 'Agriculture', value: 'Wheat yield may fall 6-25% by 2050 due to temperature rise' }
          ]
        },
        {
          title: 'INDIA\'S CLIMATE COMMITMENTS (NDC 2022)',
          items: [
            'Net Zero by 2070 (declared at COP26, Glasgow)',
            '500 GW non-fossil fuel capacity by 2030',
            'Reduce emission intensity of GDP by 45% by 2030 (vs 2005)',
            '50% cumulative electric power from renewables by 2030',
            '2.5-3 billion tonnes CO2 equivalent absorbed by forests by 2030',
            'LiFE Mission — Lifestyle for Environment (PM Modi initiative)',
            'International Solar Alliance (ISA) — India-France. 120 countries.',
            'Coalition for Disaster Resilient Infrastructure (CDRI) — India initiative.',
            'NAPCC — National Action Plan on Climate Change: 8 missions'
          ]
        }
      ],
      render(map, app) {
        const vulColors = {
          'Extreme': '#8B0000',
          'Very High': '#FF4500',
          'High': '#FFA500',
          'High (increasing)': '#FF6600',
          'Moderate': '#FFD700'
        };

        DATA.climateVulnerability.forEach(state => {
          const color = vulColors[state.vulnerability] || '#FFA500';
          const radius = state.vulnerability === 'Extreme' ? 85000 :
            state.vulnerability === 'Very High' ? 75000 : 65000;

          const circle = L.circle([state.lat, state.lng], {
            radius, color, fillColor: color, fillOpacity: 0.28, weight: 2
          });
          circle.bindPopup(app.buildPopup(
            `🌡 ${state.name}`,
            `<b>Vulnerability:</b> ${state.vulnerability}<br>
             <b>Risks:</b> ${state.risk}<br>
             <b>UPSC:</b> ${state.upsc}`,
            ['Climate Change', state.vulnerability]
          ));
          circle.on('mouseover', function () { this.setStyle({ fillOpacity: 0.5 }); });
          circle.on('mouseout', function () { this.setStyle({ fillOpacity: 0.28 }); });
          app.addLayer(circle);
          app.addLayer(app.labelMarker([state.lat + 0.5, state.lng], `${state.name}\n(${state.vulnerability})`, color, '9px'));
        });

        // Sea level rise vulnerable coasts
        DATA.seaLevelRise.vulnerable.forEach(v => {
          const m = L.circleMarker([v.lat, v.lng], {
            radius: 9, color: '#00BFFF', fillColor: '#00BFFF', fillOpacity: 0.7, weight: 2
          });
          m.bindPopup(app.buildPopup(`🌊 ${v.name}`, `<b>Threat:</b> ${v.threat}<br><b>UPSC:</b> ${v.upsc}`, ['Sea Level', v.threat]));
          app.addLayer(m);
        });

        // India climate commitments note
        const commitNote = L.divIcon({
          className: '',
          html: `<div style="background:rgba(0,0,0,0.88);border:2px solid #00FF88;
            border-radius:10px;padding:10px 12px;font-size:9px;color:#00FF88;
            max-width:240px;line-height:1.6;font-family:Inter,sans-serif">
            <b style="color:#FFD700;font-size:10px">🌍 INDIA NDC (2022)</b><br>
            Net Zero: <b>2070</b><br>
            500 GW renewable by 2030<br>
            45% emission intensity cut<br>
            50% non-fossil electricity 2030<br>
            Forest carbon sink: 2.5-3 Gt CO₂<br>
            <span style="color:#aaa">ISA · CDRI · LiFE Mission</span>
          </div>`,
          iconAnchor: [0, 0]
        });
        app.addLayer(L.marker([8, 69], { icon: commitNote, interactive: false }));

        // Temperature anomaly zones
        const tempZone = L.polygon([
          [30, 73], [30, 86], [26, 90], [22, 88],
          [20, 85], [24, 80], [25, 76], [28, 73], [30, 73]
        ], {
          color: '#FF4500', fillColor: '#FF4500', fillOpacity: 0.05,
          weight: 1.5, dashArray: '8,6'
        });
        tempZone.bindPopup(app.buildPopup('🌡 Warming Hotspot Zone', 'IGP experiencing higher warming than coastal areas. 0.7°C since 1901, accelerating.', ['Temperature', 'Warming']));
        app.addLayer(tempZone);

        app.showToast('MAP 064 — Climate Change Vulnerability loaded', 'success');
      }
    }

  ]; // END ENVIRONMENT_MAPS

  // ══════════════════════════════════════════════════════════════
  // REGISTER
  // ══════════════════════════════════════════════════════════════
  window.registerMaps('environment', ENVIRONMENT_MAPS);
  console.log('🌍 Environment Maps: 9 maps registered (MAP 056-064)');

})();
