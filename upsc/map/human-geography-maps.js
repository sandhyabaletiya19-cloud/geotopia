(function () {
  'use strict';

  // ═══════════════════════════════════════════════════════════════
  // DATA: HUMAN GEOGRAPHY — MAPS 104-113
  // ═══════════════════════════════════════════════════════════════

  var DATA = {

    worldPopulation: [
      { name: 'India', coords: [22.0, 78.0], pop: 1435, color: '#00FF88', rank: 1, note: 'Most populous 2023 (UN), TFR ~2.0' },
      { name: 'China', coords: [35.0, 105.0], pop: 1425, color: '#FF6B6B', rank: 2, note: 'Population declining since 2022' },
      { name: 'USA', coords: [39.0, -98.0], pop: 340, color: '#4FC3F7', rank: 3, note: 'Immigration-driven growth' },
      { name: 'Indonesia', coords: [-2.0, 118.0], pop: 277, color: '#FFEB3B', rank: 4, note: 'Largest SE Asian nation' },
      { name: 'Pakistan', coords: [30.0, 69.0], pop: 240, color: '#FFEB3B', rank: 5, note: 'High TFR ~3.5' },
      { name: 'Nigeria', coords: [9.5, 7.5], pop: 230, color: '#FFEB3B', rank: 6, note: 'Africa most populous, projected #3 by 2050' },
      { name: 'Brazil', coords: [-10.0, -52.0], pop: 216, color: '#FFEB3B', rank: 7, note: 'Declining growth rate' },
      { name: 'Bangladesh', coords: [24.0, 90.0], pop: 173, color: '#FFEB3B', rank: 8, note: 'TFR ~2.0, fast decline' },
      { name: 'Russia', coords: [62.0, 100.0], pop: 144, color: '#4FC3F7', rank: 9, note: 'Declining population' },
      { name: 'Ethiopia', coords: [9.0, 39.5], pop: 130, color: '#FFEB3B', rank: 10, note: 'High growth Africa' },
      { name: 'Japan', coords: [36.5, 138.0], pop: 123, color: '#FF6B6B', rank: 11, note: 'Rapid ageing, TFR 1.2' },
      { name: 'Philippines', coords: [12.0, 122.0], pop: 117, color: '#FFEB3B', rank: 12, note: 'Young population' },
      { name: 'Egypt', coords: [26.0, 30.0], pop: 112, color: '#FFEB3B', rank: 13, note: 'Nile-concentrated settlement' },
      { name: 'Germany', coords: [51.0, 10.0], pop: 84, color: '#FF6B6B', rank: 14, note: 'Ageing, immigration reliant' },
      { name: 'South Korea', coords: [36.5, 127.5], pop: 52, color: '#FF6B6B', rank: 28, note: 'Lowest TFR globally ~0.7' }
    ],

    megacities: [
      { name: 'Tokyo', coords: [35.68, 139.69], pop: '37.4M', color: '#4FC3F7' },
      { name: 'Delhi', coords: [28.61, 77.2], pop: '33.8M', color: '#00FF88', note: '2nd largest UA globally' },
      { name: 'Shanghai', coords: [31.23, 121.47], pop: '29.2M', color: '#4FC3F7' },
      { name: 'São Paulo', coords: [-23.55, -46.63], pop: '22.8M', color: '#4FC3F7' },
      { name: 'Mumbai', coords: [19.08, 72.88], pop: '21.7M', color: '#00FF88' },
      { name: 'Cairo', coords: [30.04, 31.24], pop: '22.6M', color: '#4FC3F7' },
      { name: 'Dhaka', coords: [23.81, 90.41], pop: '23.9M', color: '#4FC3F7' },
      { name: 'Beijing', coords: [39.9, 116.4], pop: '21.5M', color: '#4FC3F7' },
      { name: 'Mexico City', coords: [19.43, -99.13], pop: '22.3M', color: '#4FC3F7' },
      { name: 'Osaka', coords: [34.69, 135.5], pop: '19.0M', color: '#4FC3F7' },
      { name: 'Kolkata', coords: [22.57, 88.36], pop: '15.6M', color: '#FFEB3B' },
      { name: 'Bengaluru', coords: [12.97, 77.59], pop: '14.0M', color: '#FFEB3B' },
      { name: 'Chennai', coords: [13.08, 80.27], pop: '11.5M', color: '#FFEB3B' },
      { name: 'Hyderabad', coords: [17.38, 78.49], pop: '11.0M', color: '#FFEB3B' },
      { name: 'Lagos', coords: [6.45, 3.4], pop: '16.6M', color: '#FFA500', note: 'Fastest growing megacity Africa' },
      { name: 'Istanbul', coords: [41.01, 28.98], pop: '16.0M', color: '#4FC3F7' },
      { name: 'Karachi', coords: [24.86, 67.0], pop: '17.5M', color: '#4FC3F7' },
      { name: 'Jakarta', coords: [-6.21, 106.85], pop: '11.2M', color: '#4FC3F7' }
    ],

    indiaPopulationRegions: [
      { name: 'Uttar Pradesh', coords: [27.0, 80.5], pop: '~241M', density: 828, tfr: 2.4, literacy: 73, color: '#FF7043', note: 'Most populous state' },
      { name: 'Maharashtra', coords: [19.5, 76.0], pop: '~130M', density: 365, tfr: 1.7, literacy: 84, color: '#66BB6A' },
      { name: 'Bihar', coords: [25.6, 85.5], pop: '~131M', density: 1106, tfr: 3.0, literacy: 62, color: '#FF7043', note: 'Highest TFR, lowest literacy' },
      { name: 'West Bengal', coords: [23.0, 87.5], pop: '~100M', density: 1029, tfr: 1.6, literacy: 78, color: '#66BB6A' },
      { name: 'Madhya Pradesh', coords: [23.5, 78.5], pop: '~87M', density: 236, tfr: 2.0, literacy: 73, color: '#FFEB3B' },
      { name: 'Tamil Nadu', coords: [11.0, 78.5], pop: '~78M', density: 555, tfr: 1.4, literacy: 82, color: '#66BB6A' },
      { name: 'Rajasthan', coords: [26.5, 73.5], pop: '~81M', density: 201, tfr: 2.0, literacy: 69, color: '#FFEB3B' },
      { name: 'Karnataka', coords: [14.5, 76.0], pop: '~68M', density: 319, tfr: 1.7, literacy: 78, color: '#66BB6A' },
      { name: 'Gujarat', coords: [22.5, 71.5], pop: '~71M', density: 308, tfr: 1.9, literacy: 82, color: '#66BB6A' },
      { name: 'Andhra Pradesh', coords: [16.0, 80.0], pop: '~53M', density: 304, tfr: 1.7, literacy: 67, color: '#66BB6A' },
      { name: 'Odisha', coords: [20.5, 84.0], pop: '~47M', density: 270, tfr: 1.8, literacy: 73, color: '#FFEB3B' },
      { name: 'Kerala', coords: [10.0, 76.5], pop: '~35M', density: 860, tfr: 1.5, literacy: 94, color: '#4FC3F7', note: 'Highest literacy, low TFR' },
      { name: 'Jharkhand', coords: [23.5, 85.5], pop: '~39M', density: 414, tfr: 2.3, literacy: 68, color: '#FF7043' },
      { name: 'Assam', coords: [26.2, 92.5], pop: '~36M', density: 398, tfr: 1.9, literacy: 73, color: '#FFEB3B' },
      { name: 'Punjab', coords: [31.0, 75.5], pop: '~31M', density: 551, tfr: 1.6, literacy: 77, color: '#66BB6A' },
      { name: 'Delhi', coords: [28.7, 77.2], pop: '~20M', density: 11320, tfr: 1.5, literacy: 88, color: '#4FC3F7', note: 'Highest density, high HDI' }
    ],

    urbanCorridors: [
      { name: 'Delhi-Meerut-Panipat (NCR)', coords: [[28.61, 77.2], [28.98, 77.7], [29.39, 76.97]], color: '#00FF88', note: 'NCR expansion corridor' },
      { name: 'Mumbai-Pune-Nashik', coords: [[19.07, 72.87], [18.52, 73.86], [19.99, 73.79]], color: '#00FF88', note: 'Industrial belt' },
      { name: 'Bengaluru-Chennai', coords: [[12.97, 77.59], [13.08, 80.27]], color: '#00FF88', note: 'IT + auto corridor' },
      { name: 'Hyderabad-Warangal', coords: [[17.38, 78.49], [17.98, 79.59]], color: '#FFA500', note: 'Growth axis' },
      { name: 'Ahmedabad-Surat-Vadodara', coords: [[23.02, 72.57], [22.31, 73.18], [21.17, 72.83]], color: '#00FF88', note: 'Gujarat industrial belt' }
    ],

    smartCities: [
      { name: 'Bhubaneswar', coords: [20.3, 85.82], color: '#4FC3F7' },
      { name: 'Pune', coords: [18.52, 73.86], color: '#4FC3F7' },
      { name: 'Jaipur', coords: [26.92, 75.78], color: '#4FC3F7' },
      { name: 'Surat', coords: [21.17, 72.83], color: '#4FC3F7' },
      { name: 'Indore', coords: [22.72, 75.86], color: '#4FC3F7' },
      { name: 'Coimbatore', coords: [11.0, 76.97], color: '#4FC3F7' },
      { name: 'Varanasi', coords: [25.32, 83.01], color: '#4FC3F7' },
      { name: 'Lucknow', coords: [26.85, 80.91], color: '#4FC3F7' },
      { name: 'Visakhapatnam', coords: [17.69, 83.22], color: '#4FC3F7' },
      { name: 'Agartala', coords: [23.83, 91.28], color: '#4FC3F7' }
    ],

    tier2Boom: [
      { name: 'Surat', coords: [21.17, 72.83], sector: 'Diamonds, Textiles', color: '#00FF88' },
      { name: 'Coimbatore', coords: [11.0, 76.97], sector: 'Engineering, IT', color: '#00FF88' },
      { name: 'Indore', coords: [22.72, 75.86], sector: 'IT, Pharma', color: '#00FF88' },
      { name: 'Lucknow', coords: [26.85, 80.91], sector: 'IT, Defence', color: '#00FF88' },
      { name: 'Nagpur', coords: [21.15, 79.09], sector: 'Logistics hub', color: '#00FF88' },
      { name: 'Kochi', coords: [9.97, 76.27], sector: 'IT, Port', color: '#00FF88' },
      { name: 'Chandigarh', coords: [30.73, 76.78], sector: 'IT, Education', color: '#00FF88' },
      { name: 'Jaipur', coords: [26.92, 75.78], sector: 'IT, Tourism', color: '#00FF88' },
      { name: 'Bhopal', coords: [23.26, 77.41], sector: 'IT, Manufacturing', color: '#00FF88' },
      { name: 'Thiruvananthapuram', coords: [8.52, 76.94], sector: 'IT, Space', color: '#00FF88' }
    ],

    migrationIndia: {
      corridors: [
        { from: [25.6, 85.5], to: [19.07, 72.87], label: 'Bihar→Mumbai', volume: 'Very High', color: '#FF7043' },
        { from: [27.0, 80.5], to: [28.61, 77.2], label: 'UP→Delhi-NCR', volume: 'Very High', color: '#FF7043' },
        { from: [27.0, 80.5], to: [19.07, 72.87], label: 'UP→Mumbai', volume: 'High', color: '#FFA726' },
        { from: [25.6, 85.5], to: [28.61, 77.2], label: 'Bihar→Delhi', volume: 'High', color: '#FFA726' },
        { from: [23.5, 85.5], to: [22.57, 88.36], label: 'Jharkhand→Kolkata', volume: 'High', color: '#FFA726' },
        { from: [20.5, 84.0], to: [21.17, 72.83], label: 'Odisha→Gujarat', volume: 'Medium', color: '#FFEB3B' },
        { from: [23.5, 78.5], to: [23.02, 72.57], label: 'MP→Gujarat', volume: 'Medium', color: '#FFEB3B' },
        { from: [22.5, 71.5], to: [19.07, 72.87], label: 'Gujarat internal', volume: 'Medium', color: '#FFEB3B' },
        { from: [26.2, 92.5], to: [12.97, 77.59], label: 'NE→Bengaluru', volume: 'Growing', color: '#00FF88' },
        { from: [26.2, 92.5], to: [28.61, 77.2], label: 'NE→Delhi', volume: 'Growing', color: '#00FF88' }
      ],
      destinations: [
        { name: 'Mumbai', coords: [19.07, 72.87], type: 'Mega Destination' },
        { name: 'Delhi-NCR', coords: [28.61, 77.2], type: 'Mega Destination' },
        { name: 'Bengaluru', coords: [12.97, 77.59], type: 'IT Hub' },
        { name: 'Hyderabad', coords: [17.38, 78.49], type: 'IT Hub' },
        { name: 'Surat', coords: [21.17, 72.83], type: 'Industrial' },
        { name: 'Chennai', coords: [13.08, 80.27], type: 'Industrial + IT' },
        { name: 'Pune', coords: [18.52, 73.86], type: 'IT + Manufacturing' }
      ]
    },

    worldMigration: {
      remittanceCenters: [
        { name: 'India', coords: [22.0, 78.0], amount: '$120B', color: '#00FF88', rank: 1, note: 'Largest remittance receiver globally 2024-25' },
        { name: 'Mexico', coords: [23.5, -102.0], amount: '$63B', color: '#FFEB3B', rank: 2 },
        { name: 'China', coords: [35.0, 105.0], amount: '$50B', color: '#FFEB3B', rank: 3 },
        { name: 'Philippines', coords: [12.0, 122.0], amount: '$38B', color: '#FFEB3B', rank: 4 },
        { name: 'Egypt', coords: [26.0, 30.0], amount: '$24B', color: '#FFEB3B', rank: 5 },
        { name: 'Pakistan', coords: [30.0, 69.0], amount: '$27B', color: '#FFEB3B', rank: 6 },
        { name: 'Bangladesh', coords: [24.0, 90.0], amount: '$22B', color: '#FFEB3B', rank: 7 }
      ],
      crisisZones: [
        { name: 'Ukraine (6M+ displaced)', coords: [49.0, 32.0], color: '#FF6B6B', note: 'Largest European displacement since WWII' },
        { name: 'Syria (10+ yr refugee crisis)', coords: [35.0, 38.0], color: '#FF6B6B' },
        { name: 'Rohingya (Myanmar→Bangladesh)', coords: [21.5, 92.0], color: '#FF6B6B' },
        { name: 'Sundarbans (climate migration)', coords: [21.9, 89.2], color: '#FFA500', note: 'Climate migrants emerging' },
        { name: 'Sub-Saharan Africa outflow', coords: [5.0, 20.0], color: '#FFA500' },
        { name: 'Central America→USA', coords: [15.0, -87.0], color: '#FFA500' }
      ],
      newCorridors: [
        { from: [22.0, 78.0], to: [-25.0, 135.0], label: 'India→Australia', color: '#00FF88', note: 'Education migration boom' },
        { from: [22.0, 78.0], to: [56.0, -96.0], label: 'India→Canada', color: '#00FF88', note: 'Education + work migration' },
        { from: [22.0, 78.0], to: [24.0, 54.0], label: 'India→Gulf', color: '#FFEB3B', note: 'Shifting to skilled workforce' }
      ]
    },

    languagesIndia: {
      scheduled: [
        { name: 'Hindi', coords: [27.0, 80.0], speakers: '~57%', color: '#FF7043', belt: 'Hindi Belt' },
        { name: 'Bengali', coords: [23.5, 88.0], speakers: '~8.9%', color: '#42A5F5' },
        { name: 'Marathi', coords: [19.5, 76.0], speakers: '~7.5%', color: '#FFA726' },
        { name: 'Telugu', coords: [16.0, 79.5], speakers: '~6.9%', color: '#AB47BC' },
        { name: 'Tamil', coords: [11.0, 78.5], speakers: '~5.9%', color: '#E53935' },
        { name: 'Gujarati', coords: [22.5, 71.5], speakers: '~4.7%', color: '#66BB6A' },
        { name: 'Kannada', coords: [14.5, 76.0], speakers: '~3.6%', color: '#FFEB3B' },
        { name: 'Odia', coords: [20.5, 84.0], speakers: '~3.3%', color: '#26C6DA' },
        { name: 'Malayalam', coords: [10.0, 76.5], speakers: '~3.0%', color: '#EF5350' },
        { name: 'Punjabi', coords: [31.0, 75.5], speakers: '~2.7%', color: '#8D6E63' },
        { name: 'Assamese', coords: [26.2, 92.5], speakers: '~1.3%', color: '#78909C' },
        { name: 'Urdu', coords: [25.5, 82.0], speakers: '~5.0%', color: '#9C27B0' }
      ],
      classical: [
        { name: 'Tamil', year: 2004, coords: [11.0, 78.5], color: '#E53935' },
        { name: 'Sanskrit', year: 2005, coords: [28.6, 77.2], color: '#FFD700' },
        { name: 'Kannada', year: 2008, coords: [14.5, 76.0], color: '#FFEB3B' },
        { name: 'Telugu', year: 2008, coords: [16.0, 79.5], color: '#AB47BC' },
        { name: 'Malayalam', year: 2013, coords: [10.0, 76.5], color: '#EF5350' },
        { name: 'Odia', year: 2014, coords: [20.5, 84.0], color: '#26C6DA' },
        { name: 'Marathi', year: 2024, coords: [19.5, 76.0], color: '#00FF88' },
        { name: 'Bengali', year: 2024, coords: [23.5, 88.0], color: '#00FF88' },
        { name: 'Assamese', year: 2024, coords: [26.2, 92.5], color: '#00FF88' },
        { name: 'Pali', year: 2024, coords: [25.0, 85.0], color: '#00FF88' }
      ],
      tribalHotspots: [
        { name: 'Gondi', coords: [20.0, 79.0], color: '#FFA500' },
        { name: 'Bhili', coords: [22.5, 74.0], color: '#FFA500' },
        { name: 'Santali', coords: [23.0, 86.5], color: '#FFA500' },
        { name: 'Khasi', coords: [25.5, 91.8], color: '#FFA500' },
        { name: 'Mizo', coords: [23.2, 92.8], color: '#FFA500' },
        { name: 'Naga languages', coords: [26.0, 94.5], color: '#FFA500' },
        { name: 'Bodo', coords: [26.5, 91.0], color: '#FFA500' }
      ]
    },

    religionIndia: [
      { name: 'Hindu majority belt', coords: [24.0, 80.0], pct: '79.8%', color: '#FFA726' },
      { name: 'Muslim concentration — UP', coords: [27.5, 80.0], pct: 'significant', color: '#66BB6A' },
      { name: 'Muslim concentration — WB', coords: [24.0, 88.5], pct: 'significant', color: '#66BB6A' },
      { name: 'Christian — NE India', coords: [25.5, 93.5], pct: 'majority in some states', color: '#42A5F5' },
      { name: 'Christian — Kerala', coords: [9.5, 76.5], pct: '~18%', color: '#42A5F5' },
      { name: 'Christian — Goa', coords: [15.4, 74.0], pct: '~25%', color: '#42A5F5' },
      { name: 'Sikh — Punjab', coords: [31.5, 75.0], pct: '~58%', color: '#FFEB3B' },
      { name: 'Buddhist — Maharashtra', coords: [19.0, 77.0], pct: '~6%', color: '#AB47BC' },
      { name: 'Buddhist — Ladakh', coords: [34.0, 77.5], pct: 'majority', color: '#AB47BC' },
      { name: 'Buddhist — Sikkim', coords: [27.5, 88.5], pct: '~27%', color: '#AB47BC' },
      { name: 'Jain — Rajasthan/Gujarat', coords: [24.5, 73.0], pct: '~0.4% nationally', color: '#E91E63' },
      { name: 'Tribal religions — Central', coords: [22.0, 82.0], pct: 'Scattered', color: '#8D6E63' }
    ],

    pilgrimageCircuits: [
      { name: 'Ram Mandir Ayodhya', coords: [26.8, 82.2], color: '#00FF88', note: 'Opened Jan 2024, major tourism impact' },
      { name: 'Char Dham (Uttarakhand)', coords: [30.7, 79.0], color: '#FFA726', note: 'Kedarnath, Badrinath, Gangotri, Yamunotri' },
      { name: 'Varanasi', coords: [25.32, 83.01], color: '#FFA726', note: 'Kashi Vishwanath Corridor completed' },
      { name: 'Somnath', coords: [20.9, 70.4], color: '#FFA726' },
      { name: 'Tirupati', coords: [13.63, 79.42], color: '#FFA726' },
      { name: 'Amritsar (Golden Temple)', coords: [31.62, 74.88], color: '#FFEB3B' },
      { name: 'Bodh Gaya', coords: [24.7, 85.0], color: '#AB47BC' },
      { name: 'Velankanni', coords: [10.68, 79.85], color: '#42A5F5' }
    ],

    hdiIndia: {
      high: [
        { name: 'Kerala', coords: [10.0, 76.5], hdi: 0.782, color: '#4FC3F7' },
        { name: 'Delhi', coords: [28.7, 77.2], hdi: 0.746, color: '#4FC3F7' },
        { name: 'Himachal Pradesh', coords: [31.5, 77.0], hdi: 0.725, color: '#4FC3F7' },
        { name: 'Goa', coords: [15.4, 74.0], hdi: 0.761, color: '#4FC3F7' },
        { name: 'Chandigarh', coords: [30.73, 76.78], hdi: 0.775, color: '#4FC3F7' }
      ],
      medium: [
        { name: 'Tamil Nadu', coords: [11.0, 78.5], hdi: 0.708, color: '#66BB6A' },
        { name: 'Maharashtra', coords: [19.5, 76.0], hdi: 0.696, color: '#66BB6A' },
        { name: 'Punjab', coords: [31.0, 75.5], hdi: 0.690, color: '#66BB6A' },
        { name: 'Gujarat', coords: [22.5, 71.5], hdi: 0.672, color: '#66BB6A' },
        { name: 'Karnataka', coords: [14.5, 76.0], hdi: 0.682, color: '#66BB6A' },
        { name: 'West Bengal', coords: [23.0, 87.5], hdi: 0.641, color: '#FFEB3B' }
      ],
      low: [
        { name: 'Bihar', coords: [25.6, 85.5], hdi: 0.574, color: '#FF7043' },
        { name: 'Jharkhand', coords: [23.5, 85.5], hdi: 0.599, color: '#FF7043' },
        { name: 'Uttar Pradesh', coords: [27.0, 80.5], hdi: 0.596, color: '#FF7043' },
        { name: 'Madhya Pradesh', coords: [23.5, 78.5], hdi: 0.606, color: '#FF7043' },
        { name: 'Odisha', coords: [20.5, 84.0], hdi: 0.606, color: '#FF7043' },
        { name: 'Chhattisgarh', coords: [21.5, 82.0], hdi: 0.613, color: '#FF7043' },
        { name: 'Assam', coords: [26.2, 92.5], hdi: 0.614, color: '#FF7043' }
      ]
    },

    literacyIndia: [
      { name: 'Kerala', coords: [10.0, 76.5], literacy: 94, color: '#4FC3F7', note: 'Highest state literacy' },
      { name: 'Delhi', coords: [28.7, 77.2], literacy: 88, color: '#4FC3F7' },
      { name: 'Lakshadweep', coords: [10.5, 72.5], literacy: 92, color: '#4FC3F7' },
      { name: 'Mizoram', coords: [23.2, 92.8], literacy: 91, color: '#4FC3F7' },
      { name: 'Goa', coords: [15.4, 74.0], literacy: 89, color: '#4FC3F7' },
      { name: 'Himachal Pradesh', coords: [31.5, 77.0], literacy: 83, color: '#66BB6A' },
      { name: 'Maharashtra', coords: [19.5, 76.0], literacy: 84, color: '#66BB6A' },
      { name: 'Tamil Nadu', coords: [11.0, 78.5], literacy: 82, color: '#66BB6A' },
      { name: 'Gujarat', coords: [22.5, 71.5], literacy: 82, color: '#66BB6A' },
      { name: 'Rajasthan', coords: [26.5, 73.5], literacy: 69, color: '#FFA726' },
      { name: 'UP', coords: [27.0, 80.5], literacy: 73, color: '#FFA726' },
      { name: 'Jharkhand', coords: [23.5, 85.5], literacy: 68, color: '#FF7043' },
      { name: 'Bihar', coords: [25.6, 85.5], literacy: 62, color: '#FF7043', note: 'Lowest large state' },
      { name: 'Andhra Pradesh', coords: [16.0, 80.0], literacy: 67, color: '#FF7043' },
      { name: 'Arunachal Pradesh', coords: [27.5, 94.5], literacy: 66, color: '#FF7043' },
      { name: 'Alirajpur (MP)', coords: [22.6, 74.35], literacy: 37, color: '#E53935', note: 'Lowest district ~37%' }
    ],

    uccState: { name: 'Uttarakhand', coords: [30.3, 79.0], color: '#00FF88', note: 'First state to pass UCC 2024' }
  };

  // ═══════════════════════════════════════════════════════════════
  // MAPS ARRAY
  // ═══════════════════════════════════════════════════════════════

  var MAPS = [

    // ─────────────────────────────────────────────────────────────
    // MAP 104 — WORLD POPULATION DISTRIBUTION
    // ─────────────────────────────────────────────────────────────
    {
      mapNum: 104,
      title: 'World Population Distribution',
      subtitle: 'India most populous 2023, megacities, demographic shifts',
      mapConfig: { center: [20.0, 30.0], zoom: 2, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Population Scale',
          items: [
            { dot: '#00FF88', label: 'India (#1 since 2023)' },
            { dot: '#FF6B6B', label: 'Declining Population' },
            { dot: '#4FC3F7', label: 'Developed Nation' },
            { dot: '#FFEB3B', label: 'Emerging / High Growth' },
            { dot: '#FFA500', label: 'Fastest Growing (Africa)' }
          ]
        },
        {
          sectionTitle: 'Current Affairs',
          items: [
            { dot: '#00FF88', label: 'New 2024-25' },
            { dot: '#FF6B6B', label: 'Demographic Decline' }
          ]
        }
      ],
      info: [
        {
          title: 'Key Facts',
          facts: [
            { label: 'World population (2025)', value: '~8.1 billion' },
            { label: 'India population', value: '~1.43+ billion (#1)' },
            { label: 'China population', value: '~1.42 billion (declining)' },
            { label: 'India TFR (NFHS-5)', value: '~2.0 (near replacement)' },
            { label: 'World TFR (2024 UN)', value: '2.3' },
            { label: 'Megacities globally', value: '35+ (>10M people)' },
            { label: 'S. Korea TFR', value: '~0.7 (world\'s lowest)' }
          ]
        },
        {
          title: 'UPSC Key Points',
          items: [
            'India overtook China as world\'s most populous country in 2023 (UN)',
            'India TFR ~2.0 (NFHS-5): near replacement level but regional variation huge',
            'North India (UP, Bihar): TFR > 2.5 | South India: TFR < 1.7',
            'China population declining since 2022 — demographic inversion',
            'South Korea: world\'s lowest TFR (~0.7) — severe population crisis',
            '35+ megacities globally; Delhi 2nd largest urban agglomeration',
            'Africa\'s population: projected to double by 2050, youngest continent'
          ]
        },
        {
          title: 'Current Affairs 2023-26',
          items: [
            '2023: India becomes world\'s most populous (UN DESA)',
            'India Census 2021 delayed — no new demographic data since 2011',
            'China negative population growth since 2022, accelerating decline',
            'S. Korea TFR drops to 0.72 (2023) — world record low',
            'Japan TFR ~1.2, population below 123M, rapid ageing',
            'Nigeria projected to become 3rd most populous by 2050',
            'Global ageing: developed world → migration pressure shifts'
          ]
        }
      ],
      render: function (map, app) {
        // World population markers
        DATA.worldPopulation.forEach(function (c) {
          var radius = Math.max(6, Math.sqrt(c.pop / 10) * 2);
          var marker = L.circleMarker(c.coords, {
            radius: radius,
            color: '#000',
            fillColor: c.color,
            fillOpacity: 0.85,
            weight: 2
          }).addTo(map);

          marker.bindPopup(app.buildPopup(
            c.name + ' (#' + c.rank + ')',
            'Population: ~' + c.pop + 'M<br>' + c.note,
            c.color === '#00FF88' ? ['2023', 'India', '#1'] :
            c.color === '#FF6B6B' ? ['declining', 'ageing'] :
            ['population']
          ));

          marker.on('mouseover', function () {
            this.setRadius(radius + 4);
            this.setStyle({ fillOpacity: 1, weight: 3 });
          });
          marker.on('mouseout', function () {
            this.setRadius(radius);
            this.setStyle({ fillOpacity: 0.85, weight: 2 });
          });

          if (c.rank <= 10) {
            app.addLayer(app.labelMarker(
              [c.coords[0] + 3, c.coords[1]],
              c.name + ' ' + c.pop + 'M',
              c.color,
              c.rank <= 3 ? '11px' : '9px'
            ));
          }
        });

        // Megacities
        DATA.megacities.forEach(function (mc) {
          var m = L.circleMarker(mc.coords, {
            radius: 5,
            color: mc.color,
            fillColor: mc.color,
            fillOpacity: 0.6,
            weight: 1.5
          }).addTo(map);
          m.bindPopup(app.buildPopup(
            '🏙 ' + mc.name,
            'Urban Agglomeration: ' + mc.pop + (mc.note ? '<br>' + mc.note : ''),
            ['megacity']
          ));
          m.on('mouseover', function () { this.setRadius(9); });
          m.on('mouseout', function () { this.setRadius(5); });
          app.addLayer(m);
        });

        // India #1 info box
        app.addLayer(app.infoBox([28.0, 85.0],
          '<b style="color:#00FF88">🇮🇳 India #1 Most Populous (2023)</b><br>' +
          '~1.43+ billion people<br>' +
          'TFR ~2.0 (near replacement)<br>' +
          '<span style="color:#FFD700">North: >2.5 TFR | South: <1.7</span>'
        ));

        // China decline info
        app.addLayer(app.infoBox([42.0, 110.0],
          '<b style="color:#FF6B6B">China Declining</b><br>' +
          'Population falling since 2022<br>' +
          'One-child legacy → ageing crisis<br>' +
          'Demographic dividend ending'
        ));

        // Africa growth
        app.addLayer(app.infoBox([0, 20.0],
          '<b style="color:#FFEB3B">Africa Rising</b><br>' +
          'Population to double by 2050<br>' +
          'Youngest continent globally<br>' +
          'Nigeria projected #3 by 2050'
        ));

        // S. Korea extreme
        app.addLayer(app.infoBox([33.0, 130.0],
          '<b style="color:#FF6B6B">S. Korea TFR 0.7</b><br>' +
          'World\'s lowest fertility rate<br>' +
          'Population crisis emergency<br>' +
          'Japan TFR ~1.2 — rapid ageing'
        ));

        // Delhi megacity label
        app.addLayer(app.labelMarker([26.0, 77.2], 'Delhi: 33.8M (2nd globally)', '#00FF88', '10px'));

        app.showToast('Map 104: World Population Distribution loaded', 'success');
      }
    },

    // ─────────────────────────────────────────────────────────────
    // MAP 105 — INDIA POPULATION & DENSITY
    // ─────────────────────────────────────────────────────────────
    {
      mapNum: 105,
      title: 'India — Population Distribution & Density',
      subtitle: 'State populations, density, TFR, North-South demographic divide',
      mapConfig: { center: [22.0, 80.0], zoom: 5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Population Growth',
          items: [
            { dot: '#FF7043', label: 'High TFR / Growth (>2.0)' },
            { dot: '#FFEB3B', label: 'Medium TFR (~2.0)' },
            { dot: '#66BB6A', label: 'Low TFR / Stable (<2.0)' },
            { dot: '#4FC3F7', label: 'Very Low TFR / High Dev' }
          ]
        },
        {
          sectionTitle: 'Current Affairs',
          items: [
            { dot: '#00FF88', label: 'New 2024-25' },
            { dot: '#FF6B6B', label: 'Concern Areas' }
          ]
        }
      ],
      info: [
        {
          title: 'Key Facts',
          facts: [
            { label: 'India population (2025)', value: '~1.43+ billion' },
            { label: 'India TFR (NFHS-5)', value: '~2.0' },
            { label: 'Most populous state', value: 'UP (~241M)' },
            { label: 'Highest density', value: 'Delhi (11,320/km²)' },
            { label: 'Lowest density', value: 'Arunachal Pradesh (17/km²)' },
            { label: 'Highest TFR', value: 'Bihar (~3.0)' },
            { label: 'Lowest TFR', value: 'Tamil Nadu (~1.4)' }
          ]
        },
        {
          title: 'UPSC Key Points',
          items: [
            'India: world\'s most populous since 2023, ~1.43+ billion',
            'National TFR 2.0 (NFHS-5): at replacement level but huge regional variation',
            'North-South demographic divide: UP/Bihar high growth vs Kerala/TN ageing',
            'Census 2021 delayed — last complete data from Census 2011',
            'BIMARU states (Bihar, MP, Rajasthan, UP): still high growth pockets',
            'Southern states: below replacement TFR, ageing population emerging',
            'Demographic dividend window: 2020-2055 (median age ~28 in 2025)'
          ]
        },
        {
          title: 'Current Affairs 2023-26',
          items: [
            '2023: India officially most populous nation (UN DESA)',
            'Census 2021 still pending (2025) — major data gap',
            'NFHS-5 data: TFR 2.0, IMR declining, child malnutrition improving',
            'North-South divide widening → resource sharing debates (Finance Commission)',
            'Demographic dividend: India median age ~28 vs China ~39',
            'MPI declining: India lifted 135M+ out of multidimensional poverty (2015-21)',
            'Population policy debates: calls for national population control law'
          ]
        }
      ],
      render: function (map, app) {
        // State population markers
        DATA.indiaPopulationRegions.forEach(function (s) {
          var radius = Math.max(7, Math.min(16, Math.sqrt(parseInt(s.pop.replace(/[^0-9]/g, '')) / 5)));
          var marker = L.circleMarker(s.coords, {
            radius: radius,
            color: '#000',
            fillColor: s.color,
            fillOpacity: 0.8,
            weight: 2
          }).addTo(map);

          marker.bindPopup(app.buildPopup(
            s.name,
            'Population: ' + s.pop +
            '<br>Density: ' + s.density + '/km²' +
            '<br>TFR: ' + s.tfr +
            '<br>Literacy: ' + s.literacy + '%' +
            (s.note ? '<br><b style="color:#FFD700">' + s.note + '</b>' : ''),
            s.tfr > 2.0 ? ['high growth', 'BIMARU'] : s.tfr < 1.7 ? ['low TFR', 'ageing'] : ['moderate']
          ));

          marker.on('mouseover', function () {
            this.setRadius(radius + 4);
            this.setStyle({ fillOpacity: 1, weight: 3 });
          });
          marker.on('mouseout', function () {
            this.setRadius(radius);
            this.setStyle({ fillOpacity: 0.8, weight: 2 });
          });

          app.addLayer(app.labelMarker(
            [s.coords[0] + 0.5, s.coords[1] + 0.5],
            s.name + ' (TFR:' + s.tfr + ')',
            s.color,
            '9px'
          ));
        });

        // North-South divide line
        var divideLine = L.polyline(
          [[22.0, 68.0], [22.0, 97.0]],
          { color: '#FFD700', weight: 2, opacity: 0.5, dashArray: '10,6' }
        ).addTo(map);
        divideLine.bindPopup(app.buildPopup('North-South Demographic Divide', 'North: High TFR >2.0, younger, higher growth<br>South: Low TFR <1.7, ageing, higher development', ['demographic divide']));
        app.addLayer(divideLine);
        app.addLayer(app.labelMarker([22.0, 68.5], '← North: High TFR', '#FF7043', '10px'));
        app.addLayer(app.labelMarker([21.3, 68.5], '← South: Low TFR', '#66BB6A', '10px'));

        // Demographic dividend info box
        app.addLayer(app.infoBox([32.0, 74.0],
          '<b style="color:#00FF88">Demographic Dividend</b><br>' +
          'Window: 2020-2055<br>' +
          'Median age: ~28 years (2025)<br>' +
          '<span style="color:#FFD700">65% pop under 35</span>'
        ));

        // BIMARU label
        app.addLayer(app.infoBox([26.0, 83.0],
          '<b style="color:#FF7043">BIMARU States</b><br>' +
          'Bihar, MP, Rajasthan, UP<br>' +
          'High TFR, lower HDI<br>' +
          'Still significant growth pockets'
        ));

        // Census delay note
        app.addLayer(app.infoBox([16.0, 73.0],
          '<b style="color:#FF6B6B">⚠ Census 2021 Pending</b><br>' +
          'Last completed: Census 2011<br>' +
          'Major demographic data gap<br>' +
          'NFHS-5 (2019-21) used as proxy'
        ));

        app.showToast('Map 105: India Population & Density loaded', 'success');
      }
    },

    // ─────────────────────────────────────────────────────────────
    // MAP 106 — URBANIZATION IN INDIA
    // ─────────────────────────────────────────────────────────────
    {
      mapNum: 106,
      title: 'Urbanization in India',
      subtitle: 'Urban corridors, smart cities, tier-2 boom, metro rail expansion',
      mapConfig: { center: [22.0, 80.0], zoom: 5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Urban Features',
          items: [
            { dot: '#FF7043', label: 'Megacity (>10M)' },
            { dot: '#FFEB3B', label: 'Major Urban Centre' },
            { dot: '#4FC3F7', label: 'Smart City Mission' },
            { dot: '#00FF88', label: 'Tier-2 Boom City (New)' },
            { line: '#00FF88', label: 'Urban Growth Corridor' },
            { line: '#AB47BC', label: 'Metro Rail City' }
          ]
        },
        {
          sectionTitle: 'Current Affairs',
          items: [
            { dot: '#00FF88', label: 'New 2024-25' },
            { dot: '#FFA500', label: 'Under Development' }
          ]
        }
      ],
      info: [
        {
          title: 'Key Facts',
          facts: [
            { label: 'Urban population', value: '~36% (2023), ~40% by 2030' },
            { label: 'Delhi UA', value: '33M+ (2nd largest globally)' },
            { label: 'Mumbai UA', value: '21M+' },
            { label: 'Smart Cities Mission', value: '100 cities (implementation)' },
            { label: 'AMRUT 2.0', value: '500 cities water security' },
            { label: 'Metro rail cities', value: '20+ operational/under construction' },
            { label: 'Growth pattern', value: 'Corridor-based, not city-centric' }
          ]
        },
        {
          title: 'UPSC Key Points',
          items: [
            'India urban: ~36% (2023), approaching 40% by 2030 — rapid peri-urbanization',
            'Growth is CORRIDOR-BASED: DMIC, CBIC, IT corridors driving urban expansion',
            'Tier-2 cities boom: Surat, Coimbatore, Indore, Lucknow — economic diversification',
            'Smart Cities Mission: 100 cities, implementation ongoing, mixed results',
            'AMRUT 2.0: 500 cities — water security, sewerage, urban transport',
            'Metro rail: 20+ cities with operational/under-construction systems',
            'Transit-Oriented Development (TOD): emerging policy framework'
          ]
        },
        {
          title: 'Current Affairs 2023-26',
          items: [
            '2024-25: Smart Cities Mission — implementation phase, outcomes reviewed',
            '2024: Metro rail operational in Delhi, Mumbai, Bengaluru, Chennai, Kolkata, Hyderabad, Kochi, Jaipur, Lucknow, Nagpur, Pune, Ahmedabad, and more',
            '2024: Namo Bharat (RRTS) Delhi-Meerut partially operational',
            '2024: Urban flooding events — climate resilience planning urgency',
            'Tier-2 cities: Surat, Indore, Coimbatore seeing IT/startup boom',
            'PM Gati Shakti: integrated spatial planning tool for cities',
            'Peri-urbanization accelerating: villages → urban fringes rapidly'
          ]
        }
      ],
      render: function (map, app) {
        // Megacities in India
        var indiaMegacities = [
          { name: 'Delhi', coords: [28.61, 77.2], pop: '33.8M', color: '#FF7043' },
          { name: 'Mumbai', coords: [19.07, 72.87], pop: '21.7M', color: '#FF7043' },
          { name: 'Kolkata', coords: [22.57, 88.36], pop: '15.6M', color: '#FF7043' },
          { name: 'Bengaluru', coords: [12.97, 77.59], pop: '14.0M', color: '#FF7043' },
          { name: 'Chennai', coords: [13.08, 80.27], pop: '11.5M', color: '#FF7043' },
          { name: 'Hyderabad', coords: [17.38, 78.49], pop: '11.0M', color: '#FF7043' },
          { name: 'Ahmedabad', coords: [23.02, 72.57], pop: '8.8M', color: '#FFEB3B' },
          { name: 'Pune', coords: [18.52, 73.86], pop: '8.0M', color: '#FFEB3B' },
          { name: 'Jaipur', coords: [26.92, 75.78], pop: '4.1M', color: '#FFEB3B' },
          { name: 'Lucknow', coords: [26.85, 80.91], pop: '3.9M', color: '#FFEB3B' }
        ];

        indiaMegacities.forEach(function (mc) {
          var popNum = parseFloat(mc.pop);
          var rad = Math.max(7, popNum / 2.5);
          var marker = L.circleMarker(mc.coords, {
            radius: rad,
            color: '#000',
            fillColor: mc.color,
            fillOpacity: 0.85,
            weight: 2
          }).addTo(map);

          marker.bindPopup(app.buildPopup(
            '🏙 ' + mc.name,
            'Urban Agglomeration: ' + mc.pop,
            ['megacity', 'urbanization']
          ));

          marker.on('mouseover', function () {
            this.setRadius(rad + 4);
            this.setStyle({ fillOpacity: 1, weight: 3 });
          });
          marker.on('mouseout', function () {
            this.setRadius(rad);
            this.setStyle({ fillOpacity: 0.85, weight: 2 });
          });

          app.addLayer(app.labelMarker(
            [mc.coords[0] + 0.5, mc.coords[1] + 0.5],
            mc.name + ' ' + mc.pop,
            mc.color,
            popNum > 15 ? '11px' : '9px'
          ));
        });

        // Urban growth corridors
        DATA.urbanCorridors.forEach(function (cor) {
          var line = L.polyline(cor.coords, {
            color: cor.color,
            weight: 4,
            opacity: 0.8,
            dashArray: '8,4'
          }).addTo(map);
          line.bindPopup(app.buildPopup(
            '🔄 Urban Corridor: ' + cor.name,
            cor.note,
            ['corridor', 'urbanization', '2024']
          ));
          app.addLayer(line);

          var mid = Math.floor(cor.coords.length / 2);
          app.addLayer(app.labelMarker(
            [cor.coords[mid][0] + 0.3, cor.coords[mid][1] + 1],
            cor.name,
            cor.color,
            '9px'
          ));
        });

        // Smart Cities (subset)
        DATA.smartCities.forEach(function (sc) {
          var m = L.circleMarker(sc.coords, {
            radius: 5,
            color: '#000',
            fillColor: sc.color,
            fillOpacity: 0.75,
            weight: 1.5
          }).addTo(map);
          m.bindPopup(app.buildPopup('Smart City: ' + sc.name, 'Part of Smart Cities Mission (100 cities)', ['smart city']));
          m.on('mouseover', function () { this.setRadius(9); });
          m.on('mouseout', function () { this.setRadius(5); });
          app.addLayer(m);
        });

        // Tier-2 boom cities
        DATA.tier2Boom.forEach(function (t) {
          var outerRing = L.circleMarker(t.coords, {
            radius: 12,
            color: t.color,
            fillColor: t.color,
            fillOpacity: 0.12,
            weight: 2,
            dashArray: '4,4'
          }).addTo(map);
          app.addLayer(outerRing);

          var m = L.circleMarker(t.coords, {
            radius: 6,
            color: '#000',
            fillColor: t.color,
            fillOpacity: 0.9,
            weight: 2
          }).addTo(map);
          m.bindPopup(app.buildPopup(
            '📈 Tier-2 Boom: ' + t.name,
            'Key sectors: ' + t.sector + '<br>Rapid economic + population growth',
            ['tier-2', '2024', 'boom']
          ));
          m.on('mouseover', function () { this.setRadius(10); });
          m.on('mouseout', function () { this.setRadius(6); });
          app.addLayer(m);
        });

        // Metro rail cities markers
        var metroCities = [
          { name: 'Delhi Metro', coords: [28.61, 77.2] },
          { name: 'Mumbai Metro', coords: [19.07, 72.87] },
          { name: 'Bengaluru Metro', coords: [12.97, 77.59] },
          { name: 'Chennai Metro', coords: [13.08, 80.27] },
          { name: 'Kolkata Metro', coords: [22.57, 88.36] },
          { name: 'Hyderabad Metro', coords: [17.38, 78.49] },
          { name: 'Kochi Metro', coords: [9.97, 76.27] },
          { name: 'Jaipur Metro', coords: [26.92, 75.78] },
          { name: 'Lucknow Metro', coords: [26.85, 80.91] },
          { name: 'Nagpur Metro', coords: [21.15, 79.09] },
          { name: 'Pune Metro', coords: [18.52, 73.86] },
          { name: 'Ahmedabad Metro', coords: [23.02, 72.57] }
        ];

        metroCities.forEach(function (mc) {
          var ring = L.circleMarker(mc.coords, {
            radius: 14,
            color: '#AB47BC',
            fillColor: 'transparent',
            fillOpacity: 0,
            weight: 1.5,
            dashArray: '3,5'
          }).addTo(map);
          ring.bindPopup(app.buildPopup('🚇 ' + mc.name, 'Operational metro rail system', ['metro', 'urban']));
          app.addLayer(ring);
        });

        // Info boxes
        app.addLayer(app.infoBox([32.0, 72.0],
          '<b style="color:#00FF88">India Urban 2025</b><br>' +
          '~36% urban population<br>' +
          'Approaching 40% by 2030<br>' +
          '<span style="color:#FFD700">Corridor-based growth pattern</span>'
        ));

        app.addLayer(app.infoBox([15.0, 84.0],
          '<b style="color:#4FC3F7">Smart Cities Mission</b><br>' +
          '100 cities selected<br>' +
          'Implementation phase ongoing<br>' +
          'AMRUT 2.0: 500 cities water security'
        ));

        app.addLayer(app.infoBox([8.0, 78.0],
          '<b style="color:#AB47BC">Metro Rail Expansion</b><br>' +
          '20+ cities operational/under construction<br>' +
          'Delhi Metro: largest network (391 km)<br>' +
          'TOD policy emerging in metros'
        ));

        app.showToast('Map 106: Urbanization in India loaded', 'success');
      }
    },

    // ─────────────────────────────────────────────────────────────
    // MAP 107 — MIGRATION IN INDIA
    // ─────────────────────────────────────────────────────────────
    {
      mapNum: 107,
      title: 'Internal Migration in India',
      subtitle: 'Major migration corridors, source-destination flows, seasonal patterns',
      mapConfig: { center: [23.0, 80.0], zoom: 5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Migration Flows',
          items: [
            { line: '#FF7043', label: 'Very High Volume' },
            { line: '#FFA726', label: 'High Volume' },
            { line: '#FFEB3B', label: 'Medium Volume' },
            { line: '#00FF88', label: 'Growing (NE→Mainland)' },
            { dot: '#E53935', label: 'Major Source Region' },
            { dot: '#4FC3F7', label: 'Major Destination' }
          ]
        },
        {
          sectionTitle: 'Current Affairs',
          items: [
            { dot: '#00FF88', label: 'New 2024-25' },
            { dot: '#FFA500', label: 'Circular Migration Zone' }
          ]
        }
      ],
      info: [
        {
          title: 'Key Facts',
          facts: [
            { label: 'Internal migrants', value: '~450 million (est.)' },
            { label: 'Top source state', value: 'UP & Bihar' },
            { label: 'Top destinations', value: 'Maharashtra, Delhi, Gujarat' },
            { label: 'Dominant pattern', value: 'East → West, Rural → Urban' },
            { label: 'Seasonal migrants', value: '~100+ million' },
            { label: 'Gig economy workers', value: 'Growing rapidly 2024-25' },
            { label: 'Post-COVID impact', value: 'Circular migration ↑, reverse flow partial' }
          ]
        },
        {
          title: 'UPSC Key Points',
          items: [
            'Internal migration: ~450M+ (Census 2011 est.), data gap due to delayed census',
            'Dominant flow: East→West (Bihar/UP → Maharashtra/Gujarat/Delhi)',
            'Rural→Urban migration dominant: construction, services, informal sector',
            'Seasonal/circular migration: construction workers, agricultural labor',
            'Post-COVID: partial reverse migration, gig economy growth in smaller cities',
            'NE India: increasing migration toward mainland metros (Bengaluru, Delhi)',
            'Migration clusters around ports (Mumbai), IT hubs (Bengaluru), industrial belts (Gujarat)'
          ]
        },
        {
          title: 'Current Affairs 2023-26',
          items: [
            'Post-COVID legacy: circular migration replacing permanent relocation',
            'Gig economy + platform jobs growing in tier-2 cities (Swiggy, Zomato, Ola)',
            'e-Shram portal: 30 crore+ unorganized workers registered (2024)',
            'One Nation One Ration Card: portability for migrant workers',
            'NE→mainland migration increasing: education, employment-driven',
            'Urban flooding 2023-24 → temporary reverse migration events',
            'Ayushman Bharat portability for migrant healthcare'
          ]
        }
      ],
      render: function (map, app) {
        // Migration flow arrows
        DATA.migrationIndia.corridors.forEach(function (cor) {
          var line = L.polyline([cor.from, cor.to], {
            color: cor.color,
            weight: cor.volume === 'Very High' ? 4 : cor.volume === 'High' ? 3 : 2,
            opacity: 0.8
          }).addTo(map);

          line.bindPopup(app.buildPopup(
            '→ ' + cor.label,
            'Flow Volume: ' + cor.volume,
            cor.color === '#00FF88' ? ['NE', 'growing', '2024'] : ['migration']
          ));

          // Arrow decoration at destination
          var destLat = cor.to[0];
          var destLng = cor.to[1];
          var arrowHead = L.circleMarker([destLat, destLng], {
            radius: 4,
            color: cor.color,
            fillColor: cor.color,
            fillOpacity: 1,
            weight: 0
          }).addTo(map);
          app.addLayer(arrowHead);

          // Label
          var midLat = (cor.from[0] + cor.to[0]) / 2;
          var midLng = (cor.from[1] + cor.to[1]) / 2;
          app.addLayer(app.labelMarker(
            [midLat + 0.5, midLng],
            cor.label,
            cor.color,
            '8px'
          ));
          app.addLayer(line);
        });

        // Source regions
        var sources = [
          { name: 'Bihar (Major Source)', coords: [25.6, 85.5], color: '#E53935' },
          { name: 'UP (Major Source)', coords: [27.0, 80.5], color: '#E53935' },
          { name: 'Jharkhand (Source)', coords: [23.5, 85.5], color: '#E53935' },
          { name: 'Odisha (Source)', coords: [20.5, 84.0], color: '#E53935' },
          { name: 'MP (Source)', coords: [23.5, 78.5], color: '#E53935' },
          { name: 'Rajasthan (Source)', coords: [26.5, 73.5], color: '#E53935' },
          { name: 'NE India (Source)', coords: [26.2, 92.5], color: '#FFA500' }
        ];

        sources.forEach(function (s) {
          var m = L.circleMarker(s.coords, {
            radius: 9,
            color: '#000',
            fillColor: s.color,
            fillOpacity: 0.7,
            weight: 2
          }).addTo(map);
          m.bindPopup(app.buildPopup(s.name, 'Major out-migration region', ['source', 'migration']));
          m.on('mouseover', function () { this.setRadius(13); });
          m.on('mouseout', function () { this.setRadius(9); });
          app.addLayer(m);
        });

        // Destination markers
        DATA.migrationIndia.destinations.forEach(function (d) {
          var m = L.circleMarker(d.coords, {
            radius: 10,
            color: '#000',
            fillColor: '#4FC3F7',
            fillOpacity: 0.9,
            weight: 2
          }).addTo(map);
          m.bindPopup(app.buildPopup('📍 Destination: ' + d.name, 'Type: ' + d.type, ['destination', 'migration']));
          m.on('mouseover', function () { this.setRadius(14); this.setStyle({ weight: 3 }); });
          m.on('mouseout', function () { this.setRadius(10); this.setStyle({ weight: 2 }); });
          app.addLayer(m);

          app.addLayer(app.labelMarker(
            [d.coords[0] - 0.6, d.coords[1]],
            '📍 ' + d.name,
            '#4FC3F7',
            '10px'
          ));
        });

        // Seasonal migration zones
        var seasonalZones = [
          { name: 'Brick kilns (seasonal)', coords: [28.0, 77.5], color: '#FFA500' },
          { name: 'Sugarcane harvest', coords: [18.0, 75.0], color: '#FFA500' },
          { name: 'Construction labor', coords: [22.5, 72.0], color: '#FFA500' }
        ];

        seasonalZones.forEach(function (sz) {
          var m = L.circleMarker(sz.coords, {
            radius: 6,
            color: '#000',
            fillColor: sz.color,
            fillOpacity: 0.7,
            weight: 1.5
          }).addTo(map);
          m.bindPopup(app.buildPopup('Seasonal: ' + sz.name, 'Circular migration pattern', ['seasonal', 'circular']));
          m.on('mouseover', function () { this.setRadius(10); });
          m.on('mouseout', function () { this.setRadius(6); });
          app.addLayer(m);
        });

        // Info boxes
        app.addLayer(app.infoBox([30.0, 84.0],
          '<b style="color:#FF7043">East→West Flow</b><br>' +
          'Bihar/UP → Maharashtra/Gujarat/Delhi<br>' +
          'Dominant migration corridor<br>' +
          '<span style="color:#FFEB3B">~450M+ internal migrants</span>'
        ));

        app.addLayer(app.infoBox([15.0, 73.0],
          '<b style="color:#00FF88">Post-COVID Trends</b><br>' +
          'Circular migration increasing<br>' +
          'Gig economy in tier-2 cities<br>' +
          'e-Shram: 30 crore+ registered<br>' +
          'One Nation One Ration Card'
        ));

        app.addLayer(app.infoBox([24.0, 94.0],
          '<b style="color:#00FF88">NE Migration Growing</b><br>' +
          'NE→Delhi, Bengaluru, Pune<br>' +
          'Education + employment driven<br>' +
          'Services + hospitality sector'
        ));

        app.showToast('Map 107: Internal Migration in India loaded', 'success');
      }
    },

    // ─────────────────────────────────────────────────────────────
    // MAP 108 — WORLD MIGRATION & REMITTANCES
    // ─────────────────────────────────────────────────────────────
    {
      mapNum: 108,
      title: 'World Migration, Refugees & Remittances',
      subtitle: 'India #1 remittance receiver, refugee crises, new corridors',
      mapConfig: { center: [20.0, 30.0], zoom: 2, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Migration',
          items: [
            { dot: '#00FF88', label: 'India (#1 Remittances $120B)' },
            { dot: '#FFEB3B', label: 'Top Remittance Receivers' },
            { dot: '#FF6B6B', label: 'Refugee/Displacement Crisis' },
            { dot: '#FFA500', label: 'Climate Migration Zone' },
            { line: '#00FF88', label: 'New Migration Corridor' },
            { line: '#FFEB3B', label: 'Traditional Corridor (Gulf)' }
          ]
        },
        {
          sectionTitle: 'Current Affairs',
          items: [
            { dot: '#00FF88', label: 'New 2024-25' },
            { dot: '#FF6B6B', label: 'Crisis Zone' }
          ]
        }
      ],
      info: [
        {
          title: 'Key Facts',
          facts: [
            { label: 'India remittances', value: '~$120B (2024-25, #1 globally)' },
            { label: 'Global remittances', value: '~$860 billion (2024)' },
            { label: 'International migrants', value: '~281 million (2024 UN)' },
            { label: 'Refugees globally', value: '~117+ million displaced' },
            { label: 'Ukraine displaced', value: '6M+ within Europe' },
            { label: 'India→Canada/Australia', value: 'Education migration boom' },
            { label: 'Climate migrants', value: 'Sundarbans, coastal zones emerging' }
          ]
        },
        {
          title: 'UPSC Key Points',
          items: [
            'India: largest remittance receiver globally ~$120B (2024-25 est.)',
            'India→Gulf migration: stabilizing, shift toward skilled workforce',
            'New corridors: India→Australia, India→Canada (education migration boom)',
            'Ukraine war: 6M+ displaced Europeans — largest since WWII',
            'Rohingya crisis ongoing: Myanmar→Bangladesh, some in India',
            'Climate migration emerging: Sundarbans, coastal Odisha, Bangladesh',
            'Europe tightening migration: border controls, asylum rule changes'
          ]
        },
        {
          title: 'Current Affairs 2023-26',
          items: [
            '2024-25: India receives ~$120B in remittances (World Bank)',
            '2024: India→Canada migration controversy — diplomatic tensions',
            '2024: Europe tightening migration policies (EU Migration Pact)',
            'Ukraine displacement: 6M+ in Europe (2022-ongoing)',
            'Rohingya: 1M+ in Bangladesh, no repatriation progress',
            'Syria: 10+ year refugee crisis continuing',
            'Climate migration: Sundarbans islanders relocating (erosion + flooding)'
          ]
        }
      ],
      render: function (map, app) {
        // Remittance centers
        DATA.worldMigration.remittanceCenters.forEach(function (r) {
          var rad = r.rank === 1 ? 14 : Math.max(6, 14 - r.rank * 1.2);
          var marker = L.circleMarker(r.coords, {
            radius: rad,
            color: '#000',
            fillColor: r.color,
            fillOpacity: 0.85,
            weight: 2
          }).addTo(map);

          marker.bindPopup(app.buildPopup(
            '💰 ' + r.name + ' (#' + r.rank + ')',
            'Remittances: ' + r.amount + (r.note ? '<br>' + r.note : ''),
            r.color === '#00FF88' ? ['2024', '#1', 'remittance'] : ['remittance']
          ));

          marker.on('mouseover', function () {
            this.setRadius(rad + 4);
            this.setStyle({ fillOpacity: 1, weight: 3 });
          });
          marker.on('mouseout', function () {
            this.setRadius(rad);
            this.setStyle({ fillOpacity: 0.85, weight: 2 });
          });

          app.addLayer(app.labelMarker(
            [r.coords[0] + 3, r.coords[1]],
            r.name + ' ' + r.amount,
            r.color,
            r.rank <= 3 ? '11px' : '9px'
          ));
        });

        // Crisis zones
        DATA.worldMigration.crisisZones.forEach(function (cz) {
          var cir = L.circle(cz.coords, {
            radius: 300000,
            color: cz.color,
            fillColor: cz.color,
            fillOpacity: 0.15,
            weight: 2,
            dashArray: '6,4'
          }).addTo(map);
          cir.bindPopup(app.buildPopup(
            '⚠ ' + cz.name,
            cz.note || 'Major displacement/refugee zone',
            cz.color === '#FF6B6B' ? ['crisis', 'refugees'] : ['climate', 'migration']
          ));
          app.addLayer(cir);

          app.addLayer(app.labelMarker(
            [cz.coords[0] + 3, cz.coords[1]],
            cz.name,
            cz.color,
            '9px'
          ));
        });

        // New migration corridors
        DATA.worldMigration.newCorridors.forEach(function (nc) {
          var line = L.polyline([nc.from, nc.to], {
            color: nc.color,
            weight: 2.5,
            opacity: 0.7,
            dashArray: '8,6'
          }).addTo(map);
          line.bindPopup(app.buildPopup(
            nc.label,
            nc.note,
            ['migration', '2024', 'new']
          ));
          app.addLayer(line);

          var midLat = (nc.from[0] + nc.to[0]) / 2;
          var midLng = (nc.from[1] + nc.to[1]) / 2;
          app.addLayer(app.labelMarker([midLat + 2, midLng], nc.label, nc.color, '9px'));
        });

        // India #1 info box
        app.addLayer(app.infoBox([28.0, 85.0],
          '<b style="color:#00FF88">🇮🇳 India: #1 Remittances</b><br>' +
          '~$120 billion (2024-25)<br>' +
          'Top sources: Gulf, USA, UK<br>' +
          '<span style="color:#FFD700">Education migration boom → Canada, Australia</span>'
        ));

        // Ukraine crisis
        app.addLayer(app.infoBox([55.0, 30.0],
          '<b style="color:#FF6B6B">Ukraine Displacement</b><br>' +
          '6M+ displaced across Europe<br>' +
          'Largest since WWII<br>' +
          'Ongoing since Feb 2022'
        ));

        // Climate migration
        app.addLayer(app.infoBox([18.0, 92.0],
          '<b style="color:#FFA500">Climate Migration</b><br>' +
          'Sundarbans: erosion, flooding<br>' +
          'Coastal Odisha, Bangladesh<br>' +
          'Emerging UPSC theme'
        ));

        app.showToast('Map 108: World Migration & Remittances loaded', 'success');
      }
    },

    // ─────────────────────────────────────────────────────────────
    // MAP 109 — LANGUAGES OF INDIA
    // ─────────────────────────────────────────────────────────────
    {
      mapNum: 109,
      title: 'Languages of India',
      subtitle: 'Scheduled languages, classical languages (2024 additions), tribal languages',
      mapConfig: { center: [22.0, 80.0], zoom: 5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Language Categories',
          items: [
            { dot: '#FF7043', label: 'Hindi Belt' },
            { dot: '#42A5F5', label: 'Scheduled Language (major)' },
            { dot: '#FFD700', label: 'Classical Language (pre-2024)' },
            { dot: '#00FF88', label: 'Classical Language (2024 new)' },
            { dot: '#FFA500', label: 'Tribal/Endangered Language' }
          ]
        },
        {
          sectionTitle: 'Current Affairs',
          items: [
            { dot: '#00FF88', label: 'New Classical 2024' },
            { dot: '#FFA500', label: '8th Schedule Demands' }
          ]
        }
      ],
      info: [
        {
          title: 'Key Facts',
          facts: [
            { label: 'Scheduled languages', value: '22 (Eighth Schedule)' },
            { label: 'Classical languages', value: '10 (after 2024 additions)' },
            { label: 'Total languages (Census)', value: '~19,500 mother tongues → 121 languages' },
            { label: 'Hindi speakers', value: '~57% (including dialects)' },
            { label: 'NEP 2020', value: 'Mother tongue education push' },
            { label: '2024 Classical additions', value: 'Marathi, Bengali, Assamese, Pali' },
            { label: '8th Schedule demands', value: 'Bhojpuri, Rajasthani pending' }
          ]
        },
        {
          title: 'UPSC Key Points',
          items: [
            '22 Scheduled Languages: 8th Schedule of Constitution',
            'Classical Language status: Tamil (2004), Sanskrit (2005), Kannada (2008), Telugu (2008), Malayalam (2013), Odia (2014)',
            '2024 additions: Marathi, Bengali, Assamese, Pali — now 10 classical languages',
            'NEP 2020: mother tongue as medium of instruction up to Class 5 (preferably 8)',
            'Three-language formula: implementation varies across states',
            'Tribal languages: Gondi, Bhili, Santali etc. — preservation programs expanded',
            'Digital language content: regional language internet usage surging'
          ]
        },
        {
          title: 'Current Affairs 2023-26',
          items: [
            '2024: Marathi, Bengali, Assamese, Pali given classical language status',
            '2023-25: NEP 2020 implementation — mother tongue education push',
            'Regional language digital content growing rapidly (internet)',
            'Tribal language preservation: documentation programs expanded',
            '8th Schedule demands: Bhojpuri, Rajasthani, Tulu pending inclusion',
            'AI + translation: reducing language barriers in governance',
            'NIPUN Bharat: foundational literacy & numeracy mission'
          ]
        }
      ],
      render: function (map, app) {
        // Scheduled languages
        DATA.languagesIndia.scheduled.forEach(function (lang) {
          var marker = L.circleMarker(lang.coords, {
            radius: 9,
            color: '#000',
            fillColor: lang.color,
            fillOpacity: 0.85,
            weight: 2
          }).addTo(map);

          marker.bindPopup(app.buildPopup(
            '🗣 ' + lang.name,
            'Speakers: ' + lang.speakers + (lang.belt ? '<br>Region: ' + lang.belt : ''),
            ['language', 'scheduled']
          ));

          marker.on('mouseover', function () { this.setRadius(13); this.setStyle({ fillOpacity: 1 }); });
          marker.on('mouseout', function () { this.setRadius(9); this.setStyle({ fillOpacity: 0.85 }); });

          app.addLayer(app.labelMarker(
            [lang.coords[0] + 0.5, lang.coords[1] + 0.5],
            lang.name + ' ' + lang.speakers,
            lang.color,
            '9px'
          ));
        });

        // Classical languages with 2024 new markers
        DATA.languagesIndia.classical.forEach(function (cl) {
          if (cl.year === 2024) {
            var ring = L.circleMarker(cl.coords, {
              radius: 15,
              color: '#00FF88',
              fillColor: '#00FF88',
              fillOpacity: 0.12,
              weight: 2,
              dashArray: '4,4'
            }).addTo(map);
            app.addLayer(ring);

            var m = L.circleMarker(cl.coords, {
              radius: 7,
              color: '#000',
              fillColor: '#00FF88',
              fillOpacity: 0.95,
              weight: 2
            }).addTo(map);
            m.bindPopup(app.buildPopup(
              '🆕 Classical: ' + cl.name + ' (' + cl.year + ')',
              'Newly added as classical language in 2024',
              ['classical', '2024', 'new']
            ));
            m.on('mouseover', function () { this.setRadius(11); });
            m.on('mouseout', function () { this.setRadius(7); });
            app.addLayer(m);
          }
        });

        // Tribal language hotspots
        DATA.languagesIndia.tribalHotspots.forEach(function (tl) {
          var m = L.circleMarker(tl.coords, {
            radius: 6,
            color: '#000',
            fillColor: tl.color,
            fillOpacity: 0.75,
            weight: 1.5
          }).addTo(map);
          m.bindPopup(app.buildPopup('Tribal Language: ' + tl.name, 'Preservation programs expanded<br>Documentation + education inclusion', ['tribal', 'language']));
          m.on('mouseover', function () { this.setRadius(10); });
          m.on('mouseout', function () { this.setRadius(6); });
          app.addLayer(m);

          app.addLayer(app.labelMarker([tl.coords[0] - 0.5, tl.coords[1] + 0.5], tl.name, tl.color, '8px'));
        });

        // Hindi belt shading
        var hindiBelt = L.polygon([
          [33.0, 74.0], [33.0, 88.0], [25.0, 88.0], [22.0, 84.0],
          [22.0, 77.0], [24.0, 72.0], [27.0, 70.0], [30.0, 73.0]
        ], {
          color: '#FF7043',
          fillColor: '#FF7043',
          fillOpacity: 0.08,
          weight: 1.5,
          dashArray: '6,4'
        }).addTo(map);
        hindiBelt.bindPopup(app.buildPopup('Hindi Belt', '~57% of India\'s speakers<br>Includes dialects: Bhojpuri, Maithili, Chhattisgarhi etc.', ['Hindi', 'belt']));
        app.addLayer(hindiBelt);
        app.addLayer(app.labelMarker([28.0, 78.0], 'Hindi Belt', '#FF7043', '12px'));

        // Info boxes
        app.addLayer(app.infoBox([32.0, 84.0],
          '<b style="color:#00FF88">🆕 Classical Languages 2024</b><br>' +
          'Marathi, Bengali, Assamese, Pali<br>' +
          'Total classical: now 10<br>' +
          '<span style="color:#FFD700">Benefits: university, archives, awards</span>'
        ));

        app.addLayer(app.infoBox([15.0, 71.0],
          '<b style="color:#FFD700">NEP 2020 Language Policy</b><br>' +
          'Mother tongue up to Class 5-8<br>' +
          'Three-language formula<br>' +
          'NIPUN Bharat: foundational literacy'
        ));

        app.addLayer(app.infoBox([19.0, 87.0],
          '<b style="color:#FFA500">8th Schedule Demands</b><br>' +
          'Bhojpuri, Rajasthani, Tulu<br>' +
          'Demand for inclusion pending<br>' +
          'Currently: 22 scheduled languages'
        ));

        app.showToast('Map 109: Languages of India loaded', 'success');
      }
    },

    // ─────────────────────────────────────────────────────────────
    // MAP 110 — RELIGION IN INDIA
    // ─────────────────────────────────────────────────────────────
    {
      mapNum: 110,
      title: 'Religion in India — Distribution & Pilgrimage',
      subtitle: 'Religious demography, pilgrimage circuits, UCC 2024',
      mapConfig: { center: [22.0, 80.0], zoom: 5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Religious Groups',
          items: [
            { dot: '#FFA726', label: 'Hindu majority belt' },
            { dot: '#66BB6A', label: 'Muslim concentration' },
            { dot: '#42A5F5', label: 'Christian concentration' },
            { dot: '#FFEB3B', label: 'Sikh concentration' },
            { dot: '#AB47BC', label: 'Buddhist concentration' },
            { dot: '#E91E63', label: 'Jain concentration' },
            { dot: '#8D6E63', label: 'Tribal religions' }
          ]
        },
        {
          sectionTitle: 'Current Affairs',
          items: [
            { dot: '#00FF88', label: 'Ram Mandir 2024' },
            { dot: '#00FF88', label: 'UCC Uttarakhand 2024' },
            { dot: '#FFA726', label: 'Pilgrimage Circuit' }
          ]
        }
      ],
      info: [
        {
          title: 'Key Facts',
          facts: [
            { label: 'Hindu', value: '79.8% (Census 2011)' },
            { label: 'Muslim', value: '14.2%' },
            { label: 'Christian', value: '2.3%' },
            { label: 'Sikh', value: '1.7%' },
            { label: 'Buddhist', value: '0.7%' },
            { label: 'Jain', value: '0.4%' },
            { label: 'Census 2021', value: 'Delayed — no new religion data' }
          ]
        },
        {
          title: 'UPSC Key Points',
          items: [
            'India: multi-religious, secular republic — freedom of religion (Art 25-28)',
            'Census 2011 religion data: last available (Census 2021 pending)',
            'NE India: Christian majority in Nagaland, Mizoram, Meghalaya',
            'Punjab: Sikh majority (~58%)',
            'Ladakh, Sikkim: significant Buddhist populations',
            'Pilgrimage tourism: growing economic impact (Char Dham, Ram Mandir)',
            'UCC debate: Uttarakhand first state to pass (2024)'
          ]
        },
        {
          title: 'Current Affairs 2023-26',
          items: [
            '2024: Ram Mandir Ayodhya inaugurated (Jan 2024) — massive tourism + spatial impact',
            '2024: Uttarakhand passes UCC (Uniform Civil Code) — first state',
            '2023-25: Char Dham all-weather road development continuing',
            'Kashi Vishwanath Corridor completed — Varanasi transformation',
            'Religious demography: stable overall (Census delayed)',
            'Pilgrimage circuits expanding — spiritual tourism economic boost',
            'AI + digital platform for temple management (e.g., Tirupati online darshan)'
          ]
        }
      ],
      render: function (map, app) {
        // Religious distribution markers
        DATA.religionIndia.forEach(function (r) {
          var marker = L.circleMarker(r.coords, {
            radius: 8,
            color: '#000',
            fillColor: r.color,
            fillOpacity: 0.75,
            weight: 2
          }).addTo(map);

          marker.bindPopup(app.buildPopup(
            r.name,
            'Proportion: ' + r.pct,
            ['religion', 'India']
          ));

          marker.on('mouseover', function () { this.setRadius(12); this.setStyle({ fillOpacity: 1 }); });
          marker.on('mouseout', function () { this.setRadius(8); this.setStyle({ fillOpacity: 0.75 }); });

          app.addLayer(app.labelMarker(
            [r.coords[0] + 0.4, r.coords[1] + 0.4],
            r.name.split('—')[0].trim(),
            r.color,
            '9px'
          ));
        });

        // Pilgrimage circuits
        DATA.pilgrimageCircuits.forEach(function (pc) {
          var ringColor = pc.color;
          var ring = L.circleMarker(pc.coords, {
            radius: 14,
            color: ringColor,
            fillColor: ringColor,
            fillOpacity: 0.15,
            weight: 2,
            dashArray: pc.color === '#00FF88' ? null : '4,4'
          }).addTo(map);
          app.addLayer(ring);

          var marker = L.circleMarker(pc.coords, {
            radius: 7,
            color: '#000',
            fillColor: ringColor,
            fillOpacity: 0.95,
            weight: 2
          }).addTo(map);

          marker.bindPopup(app.buildPopup(
            '🛕 ' + pc.name,
            pc.note || 'Major pilgrimage site',
            pc.color === '#00FF88' ? ['2024', 'Ram Mandir', 'new'] : ['pilgrimage']
          ));

          marker.on('mouseover', function () { this.setRadius(11); });
          marker.on('mouseout', function () { this.setRadius(7); });

          app.addLayer(app.labelMarker(
            [pc.coords[0] - 0.6, pc.coords[1] + 0.5],
            pc.name,
            ringColor,
            pc.color === '#00FF88' ? '11px' : '9px'
          ));
        });

        // UCC Uttarakhand marker
        var uccMarker = L.circleMarker(DATA.uccState.coords, {
          radius: 10,
          color: '#000',
          fillColor: DATA.uccState.color,
          fillOpacity: 0.9,
          weight: 2
        }).addTo(map);
        uccMarker.bindPopup(app.buildPopup(
          '⚖ UCC: ' + DATA.uccState.name,
          DATA.uccState.note + '<br>First state to implement Uniform Civil Code',
          ['UCC', '2024', 'new', 'landmark']
        ));
        uccMarker.on('mouseover', function () { this.setRadius(14); });
        uccMarker.on('mouseout', function () { this.setRadius(10); });
        app.addLayer(uccMarker);

        // Ram Mandir info box
        app.addLayer(app.infoBox([28.5, 84.0],
          '<b style="color:#00FF88">🛕 Ram Mandir Ayodhya</b><br>' +
          'Inaugurated January 2024<br>' +
          'Massive tourism + spatial impact<br>' +
          '<span style="color:#FFD700">5+ lakh daily visitors</span>'
        ));

        // UCC info box
        app.addLayer(app.infoBox([32.0, 80.0],
          '<b style="color:#00FF88">⚖ UCC Uttarakhand 2024</b><br>' +
          'First state to pass UCC<br>' +
          'Uniform Civil Code<br>' +
          'National debate ongoing'
        ));

        // Census delay note
        app.addLayer(app.infoBox([15.0, 73.0],
          '<b style="color:#FF6B6B">Census 2011 Data</b><br>' +
          'Last available religion data<br>' +
          'Census 2021 delayed<br>' +
          'Religious demography: stable overall'
        ));

        // Char Dham info
        app.addLayer(app.infoBox([31.5, 82.0],
          '<b style="color:#FFA726">Char Dham Development</b><br>' +
          'All-weather road project<br>' +
          'Kedarnath, Badrinath, Gangotri,<br>' +
          'Yamunotri — ongoing development'
        ));

        app.showToast('Map 110: Religion in India loaded', 'success');
      }
    },

    // ─────────────────────────────────────────────────────────────
    // MAP 111 — HDI IN INDIA
    // ─────────────────────────────────────────────────────────────
    {
      mapNum: 111,
      title: 'Human Development Index — India',
      subtitle: 'State-level HDI, North-South divide, UNDP rankings 2023-24',
      mapConfig: { center: [22.0, 80.0], zoom: 5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'HDI Level',
          items: [
            { dot: '#4FC3F7', label: 'High HDI (>0.7)' },
            { dot: '#66BB6A', label: 'Medium-High (0.65-0.7)' },
            { dot: '#FFEB3B', label: 'Medium (0.6-0.65)' },
            { dot: '#FF7043', label: 'Low HDI (<0.6)' }
          ]
        },
        {
          sectionTitle: 'Current Affairs',
          items: [
            { dot: '#00FF88', label: 'Improvement 2024-25' },
            { dot: '#FF6B6B', label: 'Concern/Low Area' }
          ]
        }
      ],
      info: [
        {
          title: 'Key Facts',
          facts: [
            { label: 'India HDI rank', value: '134/193 (UNDP 2023-24)' },
            { label: 'India HDI value', value: '0.644 (Medium)' },
            { label: 'Life expectancy', value: '67.7 years' },
            { label: 'Mean years schooling', value: '6.57 years' },
            { label: 'GNI per capita', value: '$6,951 (PPP)' },
            { label: 'Highest state HDI', value: 'Kerala (0.782)' },
            { label: 'Lowest state HDI', value: 'Bihar (0.574)' }
          ]
        },
        {
          title: 'UPSC Key Points',
          items: [
            'India HDI: 0.644 → Medium Human Development category (UNDP 2023-24)',
            'Components: Life expectancy + Education + Income (GNI per capita)',
            'Regional inequality: Kerala (0.782) vs Bihar (0.574) — wide gap',
            'North-South divide in HDI mirrors demographic divide',
            'MPI: India\'s multidimensional poverty declining significantly (NITI Aayog)',
            'Gender Inequality Index: 0.437 — significant gender gap persists',
            'Digital inclusion emerging as new development dimension'
          ]
        },
        {
          title: 'Current Affairs 2023-26',
          items: [
            '2023-24: India HDI 0.644, rank 134/193 (UNDP HDR)',
            'MPI declining: 135M+ lifted out of multidimensional poverty (2015-21)',
            'Life expectancy improving: 67.7 years (pre-COVID was lower)',
            'Education years increasing: NEP 2020 implementation boost',
            'Gender gap reducing slowly: female literacy, employment improving',
            'Digital divide: rural vs urban, male vs female gaps persist',
            'Climate vulnerability linked to HDI — lower HDI states more vulnerable'
          ]
        }
      ],
      render: function (map, app) {
        // High HDI states
        DATA.hdiIndia.high.forEach(function (s) {
          var marker = L.circleMarker(s.coords, {
            radius: 10,
            color: '#000',
            fillColor: s.color,
            fillOpacity: 0.9,
            weight: 2
          }).addTo(map);

          marker.bindPopup(app.buildPopup(
            '📊 ' + s.name,
            'HDI: ' + s.hdi + '<br>Category: High',
            ['HDI', 'high']
          ));

          marker.on('mouseover', function () { this.setRadius(14); this.setStyle({ weight: 3 }); });
          marker.on('mouseout', function () { this.setRadius(10); this.setStyle({ weight: 2 }); });

          app.addLayer(app.labelMarker(
            [s.coords[0] + 0.5, s.coords[1] + 0.5],
            s.name + ' ' + s.hdi,
            s.color,
            '10px'
          ));
        });

        // Medium HDI states
        DATA.hdiIndia.medium.forEach(function (s) {
          var marker = L.circleMarker(s.coords, {
            radius: 9,
            color: '#000',
            fillColor: s.color,
            fillOpacity: 0.85,
            weight: 2
          }).addTo(map);

          marker.bindPopup(app.buildPopup(
            '📊 ' + s.name,
            'HDI: ' + s.hdi + '<br>Category: Medium-High',
            ['HDI', 'medium']
          ));

          marker.on('mouseover', function () { this.setRadius(13); });
          marker.on('mouseout', function () { this.setRadius(9); });

          app.addLayer(app.labelMarker(
            [s.coords[0] + 0.5, s.coords[1] + 0.5],
            s.name + ' ' + s.hdi,
            s.color,
            '9px'
          ));
        });

        // Low HDI states
        DATA.hdiIndia.low.forEach(function (s) {
          var marker = L.circleMarker(s.coords, {
            radius: 9,
            color: '#000',
            fillColor: s.color,
            fillOpacity: 0.85,
            weight: 2
          }).addTo(map);

          marker.bindPopup(app.buildPopup(
            '📊 ' + s.name,
            'HDI: ' + s.hdi + '<br>Category: Low',
            ['HDI', 'low', 'concern']
          ));

          marker.on('mouseover', function () { this.setRadius(13); this.setStyle({ fillOpacity: 1 }); });
          marker.on('mouseout', function () { this.setRadius(9); this.setStyle({ fillOpacity: 0.85 }); });

          app.addLayer(app.labelMarker(
            [s.coords[0] + 0.5, s.coords[1] + 0.5],
            s.name + ' ' + s.hdi,
            s.color,
            '9px'
          ));
        });

        // North-South HDI divide line
        var hdiDivide = L.polyline(
          [[22.0, 68.0], [22.0, 97.0]],
          { color: '#FFD700', weight: 2, opacity: 0.5, dashArray: '10,6' }
        ).addTo(map);
        hdiDivide.bindPopup(app.buildPopup('HDI North-South Divide', 'Southern states: higher HDI, better health/education<br>Northern BIMARU states: lower HDI, development gaps', ['divide']));
        app.addLayer(hdiDivide);

        // Gradient zone labels
        app.addLayer(app.labelMarker([22.5, 68.0], '↑ Lower HDI belt', '#FF7043', '10px'));
        app.addLayer(app.labelMarker([21.5, 68.0], '↓ Higher HDI belt', '#4FC3F7', '10px'));

        // National HDI info box
        app.addLayer(app.infoBox([32.0, 73.0],
          '<b style="color:#FFEB3B">India HDI 2023-24</b><br>' +
          'Rank: 134/193 | Value: 0.644<br>' +
          'Category: Medium Development<br>' +
          '<span style="color:#00FF88">MPI: 135M+ lifted from poverty</span>'
        ));

        // Kerala vs Bihar comparison
        app.addLayer(app.infoBox([13.0, 79.5],
          '<b style="color:#4FC3F7">Kerala: 0.782</b><br>' +
          'vs <b style="color:#FF7043">Bihar: 0.574</b><br>' +
          'Gap: 0.208 — enormous inequality<br>' +
          'Same country, different worlds'
        ));

        // Gender inequality
        app.addLayer(app.infoBox([17.0, 71.0],
          '<b style="color:#FF6B6B">Gender Inequality Index</b><br>' +
          'India: 0.437 (2023-24)<br>' +
          'Female literacy improving slowly<br>' +
          'Labour force participation: low'
        ));

        app.showToast('Map 111: HDI in India loaded', 'success');
      }
    },

    // ─────────────────────────────────────────────────────────────
    // MAP 112 — LITERACY IN INDIA
    // ─────────────────────────────────────────────────────────────
    {
      mapNum: 112,
      title: 'Literacy in India',
      subtitle: 'State literacy, gender gap, digital literacy, NEP 2020',
      mapConfig: { center: [22.0, 80.0], zoom: 5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Literacy Rate',
          items: [
            { dot: '#4FC3F7', label: 'Very High (>85%)' },
            { dot: '#66BB6A', label: 'High (75-85%)' },
            { dot: '#FFA726', label: 'Medium (65-75%)' },
            { dot: '#FF7043', label: 'Low (<65%)' },
            { dot: '#E53935', label: 'Very Low (<40%)' }
          ]
        },
        {
          sectionTitle: 'Current Affairs',
          items: [
            { dot: '#00FF88', label: 'Digital Literacy Push' },
            { dot: '#FF6B6B', label: 'Gender Gap Concern' }
          ]
        }
      ],
      info: [
        {
          title: 'Key Facts',
          facts: [
            { label: 'India literacy (est. 2025)', value: '~77-80%' },
            { label: 'NFHS-5 literacy', value: '77.7%' },
            { label: 'Male literacy', value: '84.7%' },
            { label: 'Female literacy', value: '70.3%' },
            { label: 'Highest state', value: 'Kerala (94%+)' },
            { label: 'Lowest large state', value: 'Bihar (~62%)' },
            { label: 'Lowest district', value: 'Alirajpur MP (~37%)' }
          ]
        },
        {
          title: 'UPSC Key Points',
          items: [
            'India literacy: ~77-80% (2025 est.) — improving but gaps persist',
            'Gender gap: Male 84.7% vs Female 70.3% — reducing slowly',
            'Regional disparity: Kerala (94%) vs Bihar (62%) — 32 percentage point gap',
            'Alirajpur (MP): lowest district literacy at ~37%',
            'NEP 2020: NIPUN Bharat for foundational literacy & numeracy',
            'Digital literacy: smartphone-driven education transforming access',
            'Digital divide persists: urban vs rural, male vs female, tribal regions lagging'
          ]
        },
        {
          title: 'Current Affairs 2023-26',
          items: [
            '2023-25: NEP 2020 rollout — NIPUN Bharat foundational literacy',
            'Digital literacy surge: DIKSHA platform, rural internet penetration rising',
            'Smartphone-driven education: ~70% internet users in rural India by 2025',
            'Samagra Shiksha Abhiyan: integrated school education scheme continuing',
            'New Literacy Programme (ULLAS): adult education + digital literacy',
            'Gender gap reducing: female enrollment rates improving K-12',
            'Tribal education: Eklavya Model Residential Schools (EMRS) expansion'
          ]
        }
      ],
      render: function (map, app) {
        // State literacy markers
        DATA.literacyIndia.forEach(function (s) {
          var radius = Math.max(7, s.literacy / 8);
          var marker = L.circleMarker(s.coords, {
            radius: radius,
            color: '#000',
            fillColor: s.color,
            fillOpacity: 0.85,
            weight: 2
          }).addTo(map);

          marker.bindPopup(app.buildPopup(
            '📚 ' + s.name,
            'Literacy: ' + s.literacy + '%' + (s.note ? '<br><b style="color:#FFD700">' + s.note + '</b>' : ''),
            s.literacy < 65 ? ['low', 'concern'] : s.literacy > 85 ? ['high', 'model'] : ['literacy']
          ));

          marker.on('mouseover', function () {
            this.setRadius(radius + 4);
            this.setStyle({ fillOpacity: 1, weight: 3 });
          });
          marker.on('mouseout', function () {
            this.setRadius(radius);
            this.setStyle({ fillOpacity: 0.85, weight: 2 });
          });

          app.addLayer(app.labelMarker(
            [s.coords[0] + 0.5, s.coords[1] + 0.5],
            s.name + ' ' + s.literacy + '%',
            s.color,
            '9px'
          ));
        });

        // Alirajpur special marker (lowest district)
        var alirajpur = DATA.literacyIndia.find(function (s) { return s.name === 'Alirajpur (MP)'; });
        if (alirajpur) {
          var ring = L.circleMarker(alirajpur.coords, {
            radius: 16,
            color: '#E53935',
            fillColor: '#E53935',
            fillOpacity: 0.15,
            weight: 2,
            dashArray: '4,4'
          }).addTo(map);
          app.addLayer(ring);
        }

        // Gender gap visualization
        var genderGapStates = [
          { name: 'Rajasthan', coords: [26.5, 73.5], male: 80, female: 57, gap: 23 },
          { name: 'Bihar', coords: [25.6, 85.5], male: 73, female: 52, gap: 21 },
          { name: 'UP', coords: [27.0, 80.5], male: 82, female: 63, gap: 19 },
          { name: 'Kerala', coords: [10.0, 76.5], male: 96, female: 92, gap: 4 }
        ];

        genderGapStates.forEach(function (gg) {
          var gapCircle = L.circleMarker(gg.coords, {
            radius: gg.gap / 2,
            color: '#FF6B6B',
            fillColor: '#FF6B6B',
            fillOpacity: 0.2,
            weight: 1.5,
            dashArray: '3,3'
          }).addTo(map);
          gapCircle.bindPopup(app.buildPopup(
            'Gender Gap: ' + gg.name,
            'Male: ' + gg.male + '% | Female: ' + gg.female + '%<br>Gap: ' + gg.gap + ' percentage points',
            ['gender gap', 'literacy']
          ));
          app.addLayer(gapCircle);
        });

        // Digital literacy markers
        var digitalHubs = [
          { name: 'DIKSHA Platform', coords: [28.61, 77.2], color: '#00FF88' },
          { name: 'Digital Village', coords: [25.0, 83.0], color: '#00FF88' },
          { name: 'Smart Classroom', coords: [12.97, 77.59], color: '#00FF88' }
        ];

        digitalHubs.forEach(function (dh) {
          var m = L.circleMarker(dh.coords, {
            radius: 5,
            color: '#000',
            fillColor: dh.color,
            fillOpacity: 0.8,
            weight: 1.5
          }).addTo(map);
          m.bindPopup(app.buildPopup('📱 ' + dh.name, 'Digital literacy initiative', ['digital', '2024']));
          m.on('mouseover', function () { this.setRadius(9); });
          m.on('mouseout', function () { this.setRadius(5); });
          app.addLayer(m);
        });

        // Info boxes
        app.addLayer(app.infoBox([32.0, 73.0],
          '<b style="color:#FFEB3B">India Literacy 2025</b><br>' +
          'National: ~77-80%<br>' +
          'Male: 84.7% | Female: 70.3%<br>' +
          '<span style="color:#FF6B6B">Gender gap: ~14 percentage points</span>'
        ));

        app.addLayer(app.infoBox([8.0, 78.0],
          '<b style="color:#4FC3F7">Kerala Model</b><br>' +
          'Literacy: 94%+ (highest)<br>' +
          'Near-total female literacy<br>' +
          'Gender gap: only ~4%'
        ));

        app.addLayer(app.infoBox([17.0, 71.0],
          '<b style="color:#00FF88">NEP 2020 + Digital</b><br>' +
          'NIPUN Bharat: foundational literacy<br>' +
          'DIKSHA: digital learning platform<br>' +
          'ULLAS: adult education program<br>' +
          '<span style="color:#FFD700">Smartphone education transforming access</span>'
        ));

        app.addLayer(app.infoBox([23.0, 74.0],
          '<b style="color:#E53935">Alirajpur (MP): ~37%</b><br>' +
          'India\'s lowest literacy district<br>' +
          'Tribal population dominant<br>' +
          'EMRS expansion targeting'
        ));

        app.showToast('Map 112: Literacy in India loaded', 'success');
      }
    },

    // ─────────────────────────────────────────────────────────────
    // MAP 113 — DEMOGRAPHIC TRANSITION MODEL (WORLD)
    // ─────────────────────────────────────────────────────────────
    {
      mapNum: 113,
      title: 'Demographic Transition — World Overview',
      subtitle: 'DTM stages, India at Stage 3→4, world TFR patterns',
      mapConfig: { center: [20.0, 30.0], zoom: 2, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'DTM Stages',
          items: [
            { dot: '#FF7043', label: 'Stage 2 (Falling DR, high BR)' },
            { dot: '#FFEB3B', label: 'Stage 3 (Falling BR)' },
            { dot: '#66BB6A', label: 'Stage 4 (Low BR + DR)' },
            { dot: '#4FC3F7', label: 'Stage 5 (Below replacement)' },
            { dot: '#00FF88', label: 'India (Stage 3→4 transition)' }
          ]
        },
        {
          sectionTitle: 'Current Affairs',
          items: [
            { dot: '#00FF88', label: 'TFR Changes 2024-25' },
            { dot: '#FF6B6B', label: 'Population Decline' }
          ]
        }
      ],
      info: [
        {
          title: 'Key Facts',
          facts: [
            { label: 'World TFR (2024 UN)', value: '2.3' },
            { label: 'India TFR', value: '~2.0 (Stage 3→4)' },
            { label: 'S. Korea TFR', value: '~0.7 (Stage 5 extreme)' },
            { label: 'Japan TFR', value: '~1.2 (Stage 5)' },
            { label: 'Sub-Saharan Africa', value: 'TFR >4.0 (Stage 2)' },
            { label: 'Bangladesh TFR', value: '~2.0 (faster than India)' },
            { label: 'Replacement TFR', value: '2.1' }
          ]
        },
        {
          title: 'UPSC Key Points',
          items: [
            'DTM: 5 stages based on birth rate and death rate transitions',
            'Stage 1: Pre-industrial (high BR + DR) — no country currently',
            'Stage 2: Falling DR, high BR → Sub-Saharan Africa (population explosion)',
            'Stage 3: Falling BR → India (TFR 2.0), Bangladesh, Brazil, Mexico',
            'Stage 4: Low BR + DR → China, EU, USA, Australia',
            'Stage 5: Below replacement → Japan, S. Korea, Italy, Germany (TFR <1.5)',
            'India regional variation: TFR South <1.7 (Stage 4) vs North >2.5 (Stage 3)'
          ]
        },
        {
          title: 'Current Affairs 2023-26',
          items: [
            'India TFR 2.0 (NFHS-5): approaching replacement level',
            'India South vs North: TFR <1.7 vs >2.5 — Stage 3/4 coexistence',
            'Bangladesh TFR 2.0: transitioned faster than expected',
            'S. Korea TFR 0.72 (2023): unprecedented demographic crisis',
            'Japan: population below 123M, shrinking workforce',
            'China: negative growth since 2022 → entering Stage 5',
            'Sub-Saharan Africa: last region in Stage 2 (TFR >4.0)'
          ]
        }
      ],
      render: function (map, app) {
        // Stage-wise country markers
        var dtmCountries = [
          // Stage 5 (below replacement)
          { name: 'Japan', coords: [36.5, 138.0], stage: 5, tfr: 1.2, color: '#4FC3F7', note: 'Rapid ageing, shrinking' },
          { name: 'South Korea', coords: [36.5, 127.5], stage: 5, tfr: 0.7, color: '#4FC3F7', note: 'World lowest TFR' },
          { name: 'Italy', coords: [42.5, 12.5], stage: 5, tfr: 1.2, color: '#4FC3F7', note: 'Ageing Europe' },
          { name: 'Germany', coords: [51.0, 10.0], stage: 5, tfr: 1.4, color: '#4FC3F7', note: 'Immigration-reliant' },
          { name: 'Spain', coords: [40.0, -3.7], stage: 5, tfr: 1.2, color: '#4FC3F7' },
          { name: 'China', coords: [35.0, 105.0], stage: 5, tfr: 1.0, color: '#FF6B6B', note: 'Population declining since 2022' },

          // Stage 4 (low BR + DR)
          { name: 'USA', coords: [39.0, -98.0], stage: 4, tfr: 1.6, color: '#66BB6A' },
          { name: 'UK', coords: [54.0, -2.0], stage: 4, tfr: 1.6, color: '#66BB6A' },
          { name: 'France', coords: [46.5, 2.5], stage: 4, tfr: 1.8, color: '#66BB6A' },
          { name: 'Australia', coords: [-25.0, 135.0], stage: 4, tfr: 1.6, color: '#66BB6A' },
          { name: 'Russia', coords: [62.0, 100.0], stage: 4, tfr: 1.5, color: '#66BB6A' },
          { name: 'Thailand', coords: [15.0, 100.0], stage: 4, tfr: 1.3, color: '#66BB6A' },

          // Stage 3 (falling BR)
          { name: 'India', coords: [22.0, 78.0], stage: 3, tfr: 2.0, color: '#00FF88', note: 'Transitioning Stage 3→4' },
          { name: 'Bangladesh', coords: [24.0, 90.0], stage: 3, tfr: 2.0, color: '#FFEB3B', note: 'Faster transition than India' },
          { name: 'Brazil', coords: [-10.0, -52.0], stage: 3, tfr: 1.7, color: '#FFEB3B' },
          { name: 'Mexico', coords: [23.5, -102.0], stage: 3, tfr: 1.8, color: '#FFEB3B' },
          { name: 'Indonesia', coords: [-2.0, 118.0], stage: 3, tfr: 2.2, color: '#FFEB3B' },
          { name: 'Vietnam', coords: [16.0, 107.5], stage: 3, tfr: 1.9, color: '#FFEB3B' },
          { name: 'Egypt', coords: [26.0, 30.0], stage: 3, tfr: 2.8, color: '#FFEB3B' },
          { name: 'Philippines', coords: [12.0, 122.0], stage: 3, tfr: 2.5, color: '#FFEB3B' },

          // Stage 2 (falling DR, high BR)
          { name: 'Nigeria', coords: [9.5, 7.5], stage: 2, tfr: 5.1, color: '#FF7043', note: 'Stage 2 → high pop growth' },
          { name: 'DRC Congo', coords: [-3.0, 23.0], stage: 2, tfr: 5.6, color: '#FF7043' },
          { name: 'Ethiopia', coords: [9.0, 39.5], stage: 2, tfr: 4.0, color: '#FF7043' },
          { name: 'Uganda', coords: [1.5, 32.0], stage: 2, tfr: 4.5, color: '#FF7043' },
          { name: 'Mali', coords: [17.5, -4.0], stage: 2, tfr: 5.8, color: '#FF7043' },
          { name: 'Niger', coords: [17.5, 8.0], stage: 2, tfr: 6.8, color: '#FF7043', note: 'Highest TFR globally' },
          { name: 'Afghanistan', coords: [34.5, 69.0], stage: 2, tfr: 4.0, color: '#FF7043' },
          { name: 'Pakistan', coords: [30.0, 69.0], stage: 2, tfr: 3.5, color: '#FF7043' }
        ];

        dtmCountries.forEach(function (c) {
          var radius = c.name === 'India' ? 12 : Math.max(6, 14 - c.stage * 2);
          var marker = L.circleMarker(c.coords, {
            radius: radius,
            color: '#000',
            fillColor: c.color,
            fillOpacity: 0.85,
            weight: 2
          }).addTo(map);

          marker.bindPopup(app.buildPopup(
            c.name + ' — Stage ' + c.stage,
            'TFR: ' + c.tfr + (c.note ? '<br>' + c.note : ''),
            c.color === '#00FF88' ? ['India', 'Stage 3-4', 'transition'] :
            c.color === '#FF6B6B' ? ['declining', 'Stage 5'] :
            ['DTM', 'Stage ' + c.stage]
          ));

          marker.on('mouseover', function () {
            this.setRadius(radius + 4);
            this.setStyle({ fillOpacity: 1, weight: 3 });
          });
          marker.on('mouseout', function () {
            this.setRadius(radius);
            this.setStyle({ fillOpacity: 0.85, weight: 2 });
          });

          if (c.stage <= 2 || c.name === 'India' || c.name === 'China' || c.name === 'South Korea' || c.name === 'Japan' || c.name === 'USA') {
            app.addLayer(app.labelMarker(
              [c.coords[0] + 2.5, c.coords[1]],
              c.name + ' TFR:' + c.tfr,
              c.color,
              c.name === 'India' ? '11px' : '9px'
            ));
          }
        });

        // India internal divide
        var indiaInternalDivide = [
          { name: 'South India (Stage 4)', coords: [12.0, 78.0], tfr: '<1.7', color: '#66BB6A' },
          { name: 'North India (Stage 3)', coords: [27.0, 80.0], tfr: '>2.5', color: '#FFEB3B' }
        ];

        indiaInternalDivide.forEach(function (id) {
          var m = L.circleMarker(id.coords, {
            radius: 8,
            color: id.color,
            fillColor: id.color,
            fillOpacity: 0.3,
            weight: 2,
            dashArray: '4,4'
          }).addTo(map);
          m.bindPopup(app.buildPopup(id.name, 'TFR: ' + id.tfr, ['India', 'internal', 'DTM']));
          app.addLayer(m);
        });

        // Replacement level line label
        app.addLayer(app.infoBox([55.0, -30.0],
          '<b style="color:#FFD700">Replacement TFR = 2.1</b><br>' +
          'Below this → population decline<br>' +
          'India: 2.0 (just below)<br>' +
          'World: 2.3 (2024 UN)'
        ));

        // India transition info
        app.addLayer(app.infoBox([28.0, 85.0],
          '<b style="color:#00FF88">🇮🇳 India: Stage 3→4</b><br>' +
          'TFR: 2.0 (NFHS-5)<br>' +
          'South: already Stage 4<br>' +
          'North: still Stage 3<br>' +
          '<span style="color:#FFD700">Demographic dividend window open</span>'
        ));

        // Stage 5 crisis
        app.addLayer(app.infoBox([42.0, 125.0],
          '<b style="color:#FF6B6B">Stage 5 Crisis</b><br>' +
          'S. Korea TFR: 0.7 (lowest ever)<br>' +
          'Japan TFR: 1.2 (shrinking)<br>' +
          'China: declining since 2022<br>' +
          'Ageing → economic burden'
        ));

        // Africa Stage 2
        app.addLayer(app.infoBox([2.0, 12.0],
          '<b style="color:#FF7043">Sub-Saharan Africa</b><br>' +
          'Last major Stage 2 region<br>' +
          'TFR: 4.0-6.8 (Niger highest)<br>' +
          'Population to double by 2050'
        ));

        app.showToast('Map 113: Demographic Transition Model loaded', 'success');
      }
    }

  ];

  // ═══════════════════════════════════════════════════════════════
  // REGISTER
  // ═══════════════════════════════════════════════════════════════

  window.registerMaps('human-geography', MAPS);
  console.log('human-geography-maps.js: registered ' + MAPS.length + ' maps');

})();
