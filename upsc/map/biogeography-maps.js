/**
 * ═══════════════════════════════════════════════════════════════
 * DHARAVERSE UPSC MAPS — BIOGEOGRAPHY
 * MAP 046 to MAP 055 | Vegetation · Wildlife · Biosphere Reserves
 * Mangroves · Coral Reefs · Migratory Birds · Endangered Species
 * Version 2026 | Gateway to IAS
 * ═══════════════════════════════════════════════════════════════
 */

(function () {
  'use strict';
  
  var DATA = {

    vegetationZones: [
      {
        name: 'Tropical Evergreen Forest', color: '#006400', code: 'TEF',
        rainfall: '>200 cm', regions: 'Western Ghats, NE India, Andaman & Nicobar',
        trees: 'Mahogany, Ebony, Rosewood, Rubber, Bamboo',
        coords: [
          [8.5,76.5],[10,76.0],[11,75.5],[12,75.0],[13,74.5],[14,74.5],
          [15,74.0],[16,73.8],[17,73.5],[17.5,73.2],[17.5,74.8],
          [16,76.0],[14,76.5],[12,76.5],[10,77.5],[8.5,77.5],[8.5,76.5]
        ],
        upsc: 'Dense multi-layered canopy. No seasonality. UNESCO Heritage. W Ghats + NE India biodiversity hotspots. Champion & Seth Type 1.'
      },
      {
        name: 'Tropical Semi-Evergreen', color: '#228B22', code: 'TSE',
        rainfall: '150-200 cm', regions: 'Transition zones W Ghats, NE India, Odisha hills',
        trees: 'White Cedar, Semul, Kusum',
        coords: [
          [17.5,74.8],[18,74.5],[20,74],[21,73.5],[21,74.5],
          [20,75.5],[18,75.5],[17.5,75.5],[17.5,74.8]
        ],
        upsc: 'Mix of evergreen & deciduous. Transition zone. Important biodiversity corridors.'
      },
      {
        name: 'Tropical Moist Deciduous', color: '#32CD32', code: 'TMD',
        rainfall: '100-200 cm', regions: 'E Himalayan foothills, NE, Odisha, WB, MP, TN',
        trees: 'Teak, Sal, Arjun, Mulberry',
        coords: [
          [22,73],[22,78],[22,82],[22,86],[20,87],[19,85],[18,83],
          [17,82],[16,80],[14,80],[12,80],[10,79.5],[10,78],[11,77],
          [13,76.5],[16,76.5],[18,76],[20,74.5],[22,74],[22,73]
        ],
        upsc: 'Most widespread. Teak & Sal most commercially important. Champion & Seth Type 3A.'
      },
      {
        name: 'Tropical Dry Deciduous', color: '#90EE90', code: 'TDD',
        rainfall: '70-100 cm', regions: 'UP, Bihar, Rajasthan E, Telangana, Karnataka',
        trees: 'Tendu, Palas, Neem, Mahua, Ber',
        coords: [
          [27,77],[25,80],[24,82],[23,83],[22,82],[22,78],
          [23,76],[25,75],[27,75],[27,77]
        ],
        upsc: 'Open forest. Tendu leaves for bidi. Mahua tribal livelihood. Fire-adapted.'
      },
      {
        name: 'Tropical Thorn Forest', color: '#F4A460', code: 'TTF',
        rainfall: '<50 cm', regions: 'NW India, Rajasthan, Gujarat, Punjab, Haryana, MP',
        trees: 'Acacia, Euphorbias, Cacti, Khejri (Rajasthan state tree)',
        coords: [
          [28,70],[29,73],[28,75],[27,74],[25,73],[24,72],
          [23,71],[22,71],[22,70],[24,69.5],[26,69.5],[28,70]
        ],
        upsc: 'Adapted to extreme drought. Deep tap roots. Khejri (Prosopis cineraria) — Bishnoi community sacred tree.'
      },
      {
        name: 'Montane Forests', color: '#4682B4', code: 'MON',
        rainfall: 'Varies (snow at top)', regions: 'Himalayan slopes, W Ghats peaks, NE hills',
        trees: 'Pine, Cedar, Rhododendron, Fir, Spruce, Oak',
        coords: [
          [35,74],[35,86],[33,92],[30,96],[27,95],[26.5,92],
          [27,88],[28,84],[29.5,80],[31,77],[33,75],[35,74]
        ],
        upsc: '900-1800m: Subtropical; 1800-2800m: Temperate oak/rhododendron; 2800-3500m: Alpine (Bugyals); >3500m: Tundra.'
      }
    ],

    allNationalParks: [
      // ANDHRA PRADESH
      { name: 'Sri Venkateswara NP', lat: 13.63, lng: 79.42, state: 'Andhra Pradesh', area: '353', animal: 'Sloth Bear, Leopard', year: 1989 },
      { name: 'Papikonda NP', lat: 17.23, lng: 81.45, state: 'Andhra Pradesh', area: '1012.85', animal: 'Tiger, Gaur', year: 2008 },
      // ARUNACHAL PRADESH
      { name: 'Molling NP', lat: 28.65, lng: 95.03, state: 'Arunachal Pradesh', area: '483', animal: 'Snow Leopard, Tiger', year: 1986 },
      { name: 'Namdapha NP', lat: 27.50, lng: 96.50, state: 'Arunachal Pradesh', area: '1985.23', animal: 'All 4 Big Cats', year: 1983, important: true },
      // ASSAM
      { name: 'Kaziranga NP', lat: 26.58, lng: 93.37, state: 'Assam', area: '858.98', animal: 'One-horned Rhino', year: 1974, important: true, unesco: true },
      { name: 'Manas NP', lat: 26.70, lng: 91.00, state: 'Assam', area: '500', animal: 'Golden Langur, Pygmy Hog', year: 1990, important: true, unesco: true },
      { name: 'Nameri NP', lat: 26.96, lng: 92.79, state: 'Assam', area: '200', animal: 'Tiger, Elephant', year: 1998 },
      { name: 'Dibru-Saikhowa NP', lat: 27.65, lng: 95.20, state: 'Assam', area: '340', animal: 'Feral Horse, Dolphin', year: 1999 },
      { name: 'Orang NP', lat: 26.65, lng: 92.00, state: 'Assam', area: '78.81', animal: 'Rhino, Tiger', year: 1999 },
      { name: 'Dehing Patkai NP', lat: 27.38, lng: 95.75, state: 'Assam', area: '231.65', animal: 'Clouded Leopard', year: 2021 },
      // BIHAR
      { name: 'Valmiki NP', lat: 27.50, lng: 84.25, state: 'Bihar', area: '898.45', animal: 'Tiger, Elephant', year: 1989 },
      // CHHATTISGARH
      { name: 'Indravati NP', lat: 18.70, lng: 81.00, state: 'Chhattisgarh', area: '1258.37', animal: 'Wild Buffalo, Tiger', year: 1981 },
      { name: 'Kanger Valley NP', lat: 19.04, lng: 81.97, state: 'Chhattisgarh', area: '200', animal: 'Hill Myna, Bastar Hill Myna', year: 1982 },
      { name: 'Guru Ghasidas NP', lat: 23.50, lng: 82.50, state: 'Chhattisgarh', area: '1440.71', animal: 'Tiger, Wolf', year: 1981 },
      // GUJARAT
      { name: 'Gir NP', lat: 21.12, lng: 70.79, state: 'Gujarat', area: '258.71', animal: 'Asiatic Lion', year: 1975, important: true },
      { name: 'Blackbuck NP (Velavadar)', lat: 21.97, lng: 71.93, state: 'Gujarat', area: '34.08', animal: 'Blackbuck', year: 1976 },
      { name: 'Marine NP (Gulf of Kachchh)', lat: 22.50, lng: 69.80, state: 'Gujarat', area: '162.89', animal: 'Coral, Dugong', year: 1982, important: true },
      { name: 'Vansda NP', lat: 20.77, lng: 73.49, state: 'Gujarat', area: '23.99', animal: 'Leopard, Sloth Bear', year: 1979 },
      // HARYANA
      { name: 'Kalesar NP', lat: 30.36, lng: 77.54, state: 'Haryana', area: '100.88', animal: 'Elephant, Tiger', year: 2003 },
      { name: 'Sultanpur NP', lat: 28.42, lng: 76.88, state: 'Haryana', area: '1.43', animal: 'Migratory Birds', year: 1989 },
      // HIMACHAL PRADESH
      { name: 'Pin Valley NP', lat: 32.00, lng: 77.90, state: 'Himachal Pradesh', area: '675', animal: 'Snow Leopard', year: 1987 },
      { name: 'Great Himalayan NP', lat: 31.90, lng: 77.50, state: 'Himachal Pradesh', area: '754.4', animal: 'Snow Leopard, Western Tragopan', year: 1984, important: true, unesco: true },
      { name: 'Khirganga NP', lat: 32.30, lng: 77.30, state: 'Himachal Pradesh', area: '710', animal: 'Snow Leopard, Brown Bear', year: 2010 },
      { name: 'Inderkilla NP', lat: 32.0, lng: 77.0, state: 'Himachal Pradesh', area: '104', animal: 'Leopard', year: 2010 },
      { name: 'Simbalbara NP', lat: 30.46, lng: 77.35, state: 'Himachal Pradesh', area: '27.88', animal: 'Chital, Sambar', year: 2010 },
      // JHARKHAND
      { name: 'Betla NP', lat: 23.97, lng: 84.10, state: 'Jharkhand', area: '231.67', animal: 'Tiger, Elephant', year: 1986 },
      // JAMMU & KASHMIR
      { name: 'Dachigam NP', lat: 34.10, lng: 74.80, state: 'J&K', area: '141', animal: 'Hangul (Kashmir Stag)', year: 1981, important: true },
      { name: 'Kishtwar NP', lat: 33.50, lng: 75.75, state: 'J&K', area: '425', animal: 'Snow Leopard', year: 1981 },
      { name: 'Salim Ali NP', lat: 34.18, lng: 75.28, state: 'J&K', area: '9', animal: 'Musk Deer, Snow Leopard', year: 1992 },
      // KARNATAKA
      { name: 'Bandipur NP', lat: 11.67, lng: 76.64, state: 'Karnataka', area: '874.2', animal: 'Tiger, Elephant', year: 1974, important: true },
      { name: 'Kudremukh NP', lat: 13.23, lng: 75.23, state: 'Karnataka', area: '600.32', animal: 'Lion-tailed Macaque', year: 1987 },
      { name: 'Nagarhole NP', lat: 12.10, lng: 76.15, state: 'Karnataka', area: '643.39', animal: 'Tiger, Elephant, Leopard', year: 1988, important: true },
      { name: 'Anshi (Dandeli-Anshi) NP', lat: 15.08, lng: 74.37, state: 'Karnataka', area: '417.37', animal: 'Tiger, Black Panther', year: 1987 },
      // KERALA
      { name: 'Eravikulam NP', lat: 10.25, lng: 77.07, state: 'Kerala', area: '97', animal: 'Nilgiri Tahr', year: 1978, important: true },
      { name: 'Silent Valley NP', lat: 11.08, lng: 76.43, state: 'Kerala', area: '237.52', animal: 'Lion-tailed Macaque', year: 1984, important: true },
      { name: 'Periyar NP', lat: 9.53, lng: 77.13, state: 'Kerala', area: '350', animal: 'Tiger, Elephant', year: 1982 },
      { name: 'Mathikettan Shola NP', lat: 10.18, lng: 77.13, state: 'Kerala', area: '12.82', animal: 'Nilgiri Marten', year: 2003 },
      { name: 'Pampadum Shola NP', lat: 10.11, lng: 77.16, state: 'Kerala', area: '1.32', animal: 'Grizzled Giant Squirrel', year: 2003 },
      { name: 'Anamudi Shola NP', lat: 10.19, lng: 77.12, state: 'Kerala', area: '7.5', animal: 'Nilgiri Marten', year: 2003 },
      // LADAKH
      { name: 'Hemis NP', lat: 33.90, lng: 77.60, state: 'Ladakh', area: '4400', animal: 'Snow Leopard', year: 1981, important: true },
      // MADHYA PRADESH
      { name: 'Bandhavgarh NP', lat: 23.72, lng: 80.97, state: 'Madhya Pradesh', area: '446', animal: 'Tiger (highest density)', year: 1968, important: true },
      { name: 'Kanha NP', lat: 22.30, lng: 80.65, state: 'Madhya Pradesh', area: '940', animal: 'Tiger, Barasingha', year: 1955, important: true },
      { name: 'Panna NP', lat: 24.72, lng: 80.20, state: 'Madhya Pradesh', area: '542.67', animal: 'Tiger (reintroduced)', year: 1981 },
      { name: 'Pench NP', lat: 21.75, lng: 79.35, state: 'Madhya Pradesh', area: '292.85', animal: 'Tiger (Jungle Book)', year: 1975 },
      { name: 'Satpura NP', lat: 22.47, lng: 78.43, state: 'Madhya Pradesh', area: '585.17', animal: 'Tiger, Wild Dog', year: 1981 },
      { name: 'Sanjay NP', lat: 23.87, lng: 82.83, state: 'Madhya Pradesh', area: '466.58', animal: 'Tiger, Wild Dog', year: 1981 },
      { name: 'Madhav NP', lat: 25.43, lng: 77.68, state: 'Madhya Pradesh', area: '375.22', animal: 'Chinkara, Nilgai', year: 1958 },
      { name: 'Van Vihar NP', lat: 23.26, lng: 77.41, state: 'Madhya Pradesh', area: '4.45', animal: 'Tiger, Lion (captive)', year: 1983 },
      { name: 'Mandla Fossil Fauna & Flora NP', lat: 22.85, lng: 80.43, state: 'Madhya Pradesh', area: '0.27', animal: 'Fossil Park', year: 1983 },
      { name: 'Katera NP', lat: 25.0, lng: 77.5, state: 'Madhya Pradesh', area: '278', animal: 'Tiger', year: 1981 },
      // MAHARASHTRA
      { name: 'Navegaon NP', lat: 20.98, lng: 79.77, state: 'Maharashtra', area: '133.88', animal: 'Wild Dog, Tiger', year: 1975 },
      { name: 'Tadoba NP', lat: 20.30, lng: 79.40, state: 'Maharashtra', area: '625.4', animal: 'Tiger', year: 1955, important: true },
      { name: 'Sanjay Gandhi NP', lat: 19.22, lng: 72.92, state: 'Maharashtra', area: '104', animal: 'Leopard (inside Mumbai)', year: 1983, important: true },
      { name: 'Chaprala WLS (as NP)', lat: 19.50, lng: 79.70, state: 'Maharashtra', area: '134.78', animal: 'Wild Dog', year: 1986 },
      { name: 'Gugamal NP', lat: 21.38, lng: 77.13, state: 'Maharashtra', area: '361.28', animal: 'Tiger, Wild Dog', year: 1975 },
      { name: 'Pench NP (MH)', lat: 21.58, lng: 79.35, state: 'Maharashtra', area: '257.26', animal: 'Tiger', year: 1975 },
      // MANIPUR
      { name: 'Keibul Lamjao NP', lat: 24.60, lng: 93.82, state: 'Manipur', area: '40', animal: 'Sangai Deer', year: 1977, important: true },
      // MEGHALAYA
      { name: 'Nokrek NP', lat: 25.43, lng: 90.65, state: 'Meghalaya', area: '47.48', animal: 'Red Panda, Citrus', year: 1986, important: true },
      { name: 'Balpakram NP', lat: 25.50, lng: 90.60, state: 'Meghalaya', area: '220', animal: 'Clouded Leopard', year: 1987 },
      // MIZORAM
      { name: 'Phawngpui NP (Blue Mountain)', lat: 22.50, lng: 92.85, state: 'Mizoram', area: '50', animal: 'Serow, Clouded Leopard', year: 1992 },
      { name: 'Murlen NP', lat: 23.57, lng: 93.35, state: 'Mizoram', area: '200', animal: 'Hoolock Gibbon', year: 1991 },
      // NAGALAND
      { name: 'Intanki NP', lat: 26.03, lng: 94.55, state: 'Nagaland', area: '202.02', animal: 'Hoolock Gibbon, Tiger', year: 1993 },
      // ODISHA
      { name: 'Bhitarkanika NP', lat: 20.75, lng: 86.87, state: 'Odisha', area: '145', animal: 'Saltwater Crocodile, Olive Ridley', year: 1988, important: true },
      { name: 'Simlipal NP', lat: 21.85, lng: 86.28, state: 'Odisha', area: '845.7', animal: 'Melanistic Tiger, Elephant', year: 1980, important: true },
      // RAJASTHAN
      { name: 'Desert NP', lat: 27.00, lng: 70.50, state: 'Rajasthan', area: '3162', animal: 'Great Indian Bustard', year: 1980, important: true },
      { name: 'Ranthambore NP', lat: 26.00, lng: 76.50, state: 'Rajasthan', area: '392', animal: 'Tiger', year: 1980, important: true },
      { name: 'Keoladeo NP (Bharatpur)', lat: 27.16, lng: 77.52, state: 'Rajasthan', area: '28.73', animal: 'Migratory Birds', year: 1981, important: true, unesco: true },
      { name: 'Sariska NP', lat: 27.35, lng: 76.37, state: 'Rajasthan', area: '273.8', animal: 'Tiger (reintroduced)', year: 1992, important: true },
      { name: 'Mukundra Hills NP', lat: 25.00, lng: 76.30, state: 'Rajasthan', area: '759.99', animal: 'Tiger, Leopard', year: 2006 },
      { name: 'Darrah NP', lat: 24.72, lng: 76.42, state: 'Rajasthan', area: '250', animal: 'Leopard, Wolf', year: 1955 },
      // SIKKIM
      { name: 'Khangchendzonga NP', lat: 27.70, lng: 88.30, state: 'Sikkim', area: '1784', animal: 'Snow Leopard, Red Panda', year: 1977, important: true, unesco: true },
      // TAMIL NADU
      { name: 'Gulf of Mannar Marine NP', lat: 9.10, lng: 79.00, state: 'Tamil Nadu', area: '560', animal: 'Dugong, Coral', year: 1980, important: true },
      { name: 'Mudumalai NP', lat: 11.58, lng: 76.64, state: 'Tamil Nadu', area: '321', animal: 'Tiger, Elephant', year: 1990 },
      { name: 'Anamalai NP (Indira Gandhi)', lat: 10.58, lng: 76.97, state: 'Tamil Nadu', area: '958.59', animal: 'Tiger, Elephant', year: 1989 },
      { name: 'Guindy NP', lat: 13.01, lng: 80.23, state: 'Tamil Nadu', area: '2.82', animal: 'Spotted Deer (inside Chennai)', year: 1977 },
      { name: 'Mukurthi NP', lat: 11.15, lng: 76.47, state: 'Tamil Nadu', area: '78.46', animal: 'Nilgiri Tahr', year: 2001 },
      // TELANGANA
      { name: 'Mrugavani NP', lat: 17.38, lng: 78.42, state: 'Telangana', area: '3.6', animal: 'Sloth Bear, Leopard', year: 1994 },
      // TRIPURA
      { name: 'Clouded Leopard NP', lat: 23.63, lng: 91.34, state: 'Tripura', area: '5.08', animal: 'Clouded Leopard', year: 2007 },
      { name: 'Bison (Rajbari) NP', lat: 23.70, lng: 91.40, state: 'Tripura', area: '31.63', animal: 'Gaur, Elephant', year: 2007 },
      // UTTARAKHAND
      { name: 'Jim Corbett NP', lat: 29.53, lng: 78.78, state: 'Uttarakhand', area: '520.82', animal: 'Tiger (first tiger reserve 1973)', year: 1936, important: true },
      { name: 'Rajaji NP', lat: 30.03, lng: 78.20, state: 'Uttarakhand', area: '820.42', animal: 'Elephant, Tiger', year: 1983 },
      { name: 'Gangotri NP', lat: 30.90, lng: 79.10, state: 'Uttarakhand', area: '2390.02', animal: 'Snow Leopard, Himalayan Monal', year: 1989 },
      { name: 'Govind Pashu Vihar NP', lat: 31.14, lng: 78.24, state: 'Uttarakhand', area: '472.08', animal: 'Snow Leopard, Musk Deer', year: 1990 },
      { name: 'Nanda Devi NP', lat: 30.38, lng: 79.96, state: 'Uttarakhand', area: '630.33', animal: 'Snow Leopard', year: 1982, important: true, unesco: true },
      { name: 'Valley of Flowers NP', lat: 30.73, lng: 79.60, state: 'Uttarakhand', area: '87.5', animal: 'Himalayan Monal, Fauna', year: 1982, important: true, unesco: true },
      // UTTAR PRADESH
      { name: 'Dudhwa NP', lat: 28.50, lng: 80.85, state: 'Uttar Pradesh', area: '490.29', animal: 'Tiger, Rhino (introduced)', year: 1977, important: true },
      // WEST BENGAL
      { name: 'Sundarbans NP', lat: 21.95, lng: 89.18, state: 'West Bengal', area: '1330.12', animal: 'Royal Bengal Tiger', year: 1984, important: true, unesco: true },
      { name: 'Buxa NP', lat: 26.73, lng: 89.53, state: 'West Bengal', area: '117.1', animal: 'Tiger, Elephant', year: 1992 },
      { name: 'Gorumara NP', lat: 26.73, lng: 89.02, state: 'West Bengal', area: '79.45', animal: 'One-horned Rhino', year: 1994 },
      { name: 'Singalila NP', lat: 27.07, lng: 88.10, state: 'West Bengal', area: '78.6', animal: 'Red Panda', year: 1986 },
      { name: 'Neora Valley NP', lat: 27.05, lng: 88.80, state: 'West Bengal', area: '88', animal: 'Red Panda, Clouded Leopard', year: 1986 },
      { name: 'Jaldapara NP', lat: 26.68, lng: 89.48, state: 'West Bengal', area: '216.34', animal: 'One-horned Rhino', year: 2012 },
      // ANDAMAN & NICOBAR
      { name: 'Saddle Peak NP', lat: 13.19, lng: 92.97, state: 'A&N Islands', area: '32.54', animal: 'A&N Hill Myna', year: 1979 },
      { name: 'Mt. Harriet NP', lat: 11.70, lng: 92.76, state: 'A&N Islands', area: '46.62', animal: 'Andaman Pig, Deer', year: 1979 },
      { name: 'Mahatma Gandhi Marine NP', lat: 12.02, lng: 92.74, state: 'A&N Islands', area: '281.5', animal: 'Coral, Dugong, Sea Turtle', year: 1983 },
      { name: 'Campbell Bay NP', lat: 7.00, lng: 93.84, state: 'A&N Islands', area: '426.23', animal: 'Leatherback Turtle, Mega fauna', year: 1992 },
      { name: 'Galathea NP', lat: 7.10, lng: 93.90, state: 'A&N Islands', area: '110', animal: 'Leatherback Sea Turtle', year: 1992 },
      { name: 'Rani Jhansi Marine NP', lat: 12.90, lng: 92.80, state: 'A&N Islands', area: '256.14', animal: 'Coral Reefs', year: 1996 }
    ],

    allWLS: [
      { name: 'Gir WLS', lat: 21.00, lng: 70.90, state: 'Gujarat', animal: 'Asiatic Lion', important: true },
      { name: 'Wild Ass WLS (Rann of Kachchh)', lat: 23.58, lng: 71.25, state: 'Gujarat', animal: 'Indian Wild Ass', important: true },
      { name: 'Velavadar WLS', lat: 21.97, lng: 71.93, state: 'Gujarat', animal: 'Blackbuck', important: true },
      { name: 'Nal Sarovar WLS', lat: 22.78, lng: 72.01, state: 'Gujarat', animal: 'Flamingo, Migratory Birds', important: true },
      { name: 'Chilika WLS', lat: 19.72, lng: 85.32, state: 'Odisha', animal: 'Irrawaddy Dolphin', important: true },
      { name: 'Gahirmatha Marine WLS', lat: 20.70, lng: 86.90, state: 'Odisha', animal: 'Olive Ridley Sea Turtle', important: true },
      { name: 'Periyar WLS', lat: 9.53, lng: 77.13, state: 'Kerala', animal: 'Tiger, Elephant', important: true },
      { name: 'Wayanad WLS', lat: 11.70, lng: 76.20, state: 'Kerala', animal: 'Elephant, Gaur', important: false },
      { name: 'Chinnar WLS', lat: 10.40, lng: 77.25, state: 'Kerala', animal: 'Grizzled Giant Squirrel', important: true },
      { name: 'Sariska WLS', lat: 27.35, lng: 76.37, state: 'Rajasthan', animal: 'Tiger (reintroduced)', important: true },
      { name: 'Ranthambore WLS', lat: 26.00, lng: 76.47, state: 'Rajasthan', animal: 'Tiger', important: true },
      { name: 'National Chambal Sanctuary', lat: 26.40, lng: 78.50, state: 'UP/MP/Rajasthan', animal: 'Gharial, Dolphin', important: true },
      { name: 'Pilibhit WLS', lat: 28.65, lng: 80.60, state: 'Uttar Pradesh', animal: 'Tiger, Elephant', important: false },
      { name: 'Katerniaghat WLS', lat: 27.73, lng: 81.58, state: 'Uttar Pradesh', animal: 'Gangetic Dolphin, Tiger', important: true },
      { name: 'Hastinapur WLS', lat: 29.15, lng: 78.02, state: 'Uttar Pradesh', animal: 'Swamp Deer', important: false },
      { name: 'Okhla Bird Sanctuary', lat: 28.54, lng: 77.34, state: 'Uttar Pradesh/Delhi', animal: 'Migratory Birds', important: false },
      { name: 'Vedanthangal WLS', lat: 12.47, lng: 79.87, state: 'Tamil Nadu', animal: 'Open-billed Stork', important: true },
      { name: 'Point Calimere WLS', lat: 10.30, lng: 79.85, state: 'Tamil Nadu', animal: 'Flamingo, Blackbuck', important: true },
      { name: 'Pulicat Lake WLS', lat: 13.65, lng: 80.22, state: 'Andhra Pradesh', animal: 'Flamingo', important: true },
      { name: 'Coringa WLS', lat: 16.77, lng: 82.27, state: 'Andhra Pradesh', animal: 'Fishing Cat, Otter', important: true },
      { name: 'Koundinya WLS', lat: 13.68, lng: 78.82, state: 'Andhra Pradesh', animal: 'Elephant', important: false },
      { name: 'Talchapar WLS', lat: 27.98, lng: 75.00, state: 'Rajasthan', animal: 'Blackbuck, Demoiselle Crane', important: false },
      { name: 'Phulwari ki Nal WLS', lat: 23.65, lng: 73.55, state: 'Rajasthan', animal: 'Leopard', important: false },
      { name: 'Sitamata WLS', lat: 24.00, lng: 74.30, state: 'Rajasthan', animal: 'Flying Squirrel', important: false },
      { name: 'Ramgarh Vishdhari WLS', lat: 25.45, lng: 75.85, state: 'Rajasthan', animal: 'Tiger', important: false },
      { name: 'Jessore WLS', lat: 24.25, lng: 72.70, state: 'Gujarat', animal: 'Sloth Bear', important: false },
      { name: 'Barda WLS', lat: 21.80, lng: 70.00, state: 'Gujarat', animal: 'Leopard', important: false },
      { name: 'Narayan Sarovar WLS', lat: 23.50, lng: 68.85, state: 'Gujarat', animal: 'Chinkara', important: false },
      { name: 'Dehing Patkai WLS', lat: 27.38, lng: 95.75, state: 'Assam', animal: 'Clouded Leopard', important: false },
      { name: 'Chakrashila WLS', lat: 26.43, lng: 90.13, state: 'Assam', animal: 'Golden Langur', important: true },
      { name: 'Pobitora WLS', lat: 26.24, lng: 91.96, state: 'Assam', animal: 'One-horned Rhino (highest density)', important: true },
      { name: 'Eaglenest WLS', lat: 27.15, lng: 92.40, state: 'Arunachal Pradesh', animal: 'Snow Leopard, Tiger', important: true },
      { name: 'Pakke WLS', lat: 27.07, lng: 93.40, state: 'Arunachal Pradesh', animal: 'Tiger, Hornbills', important: true },
      { name: 'Dampa WLS', lat: 23.70, lng: 92.80, state: 'Mizoram', animal: 'Tiger', important: false },
      { name: 'Trishna WLS', lat: 23.55, lng: 91.58, state: 'Tripura', animal: 'Brow-antlered Deer', important: false },
      { name: 'Fakim WLS', lat: 25.84, lng: 95.10, state: 'Nagaland', animal: 'Hoolock Gibbon', important: false },
      { name: 'Khokana WLS', lat: 27.65, lng: 85.27, state: 'Nepal-border', animal: 'Migratory Birds', important: false },
      { name: 'Pong Dam WLS', lat: 32.00, lng: 76.15, state: 'Himachal Pradesh', animal: 'Migratory Birds', important: true },
      { name: 'Renuka WLS', lat: 30.60, lng: 77.45, state: 'Himachal Pradesh', animal: 'Chital, Sambar', important: false },
      { name: 'Chail WLS', lat: 30.95, lng: 77.20, state: 'Himachal Pradesh', animal: 'Chital', important: false },
      { name: 'Harike WLS', lat: 31.17, lng: 74.95, state: 'Punjab', animal: 'Migratory Ducks, Geese', important: true },
      { name: 'Kathiaravan WLS', lat: 30.50, lng: 75.75, state: 'Punjab', animal: 'Blackbuck, Hog Deer', important: false },
      { name: 'Abohar WLS', lat: 30.15, lng: 74.20, state: 'Punjab', animal: 'Blackbuck (Bishnoi)', important: false },
      { name: 'Nahar WLS', lat: 28.28, lng: 76.57, state: 'Haryana', animal: 'Chital', important: false },
      { name: 'Bhindawas WLS', lat: 28.50, lng: 76.23, state: 'Haryana', animal: 'Migratory Birds', important: false },
      { name: 'Rohtak WLS', lat: 28.95, lng: 76.56, state: 'Haryana', animal: 'Birds', important: false },
      { name: 'Rajaji WLS', lat: 30.03, lng: 78.20, state: 'Uttarakhand', animal: 'Elephant, Tiger', important: false },
      { name: 'Kedarnath WLS', lat: 30.44, lng: 79.08, state: 'Uttarakhand', animal: 'Musk Deer, Snow Leopard', important: false },
      { name: 'Binsar WLS', lat: 29.71, lng: 79.61, state: 'Uttarakhand', animal: 'Leopard, Himalayan Black Bear', important: false },
      { name: 'Sonanadi WLS', lat: 29.43, lng: 78.98, state: 'Uttarakhand', animal: 'Elephant, Tiger', important: false },
      { name: 'Nandadevi WLS', lat: 30.38, lng: 79.96, state: 'Uttarakhand', animal: 'Snow Leopard', important: false },
      { name: 'Mahabaleshawar WLS', lat: 17.93, lng: 73.68, state: 'Maharashtra', animal: 'Leopard, Sambar', important: false },
      { name: 'Bhimashankar WLS', lat: 19.07, lng: 73.55, state: 'Maharashtra', animal: 'Giant Squirrel', important: true },
      { name: 'Radhanagari WLS', lat: 16.42, lng: 73.82, state: 'Maharashtra', animal: 'Gaur, Leopard', important: false },
      { name: 'Koyna WLS', lat: 17.45, lng: 73.80, state: 'Maharashtra', animal: 'Tiger, Gaur', important: false },
      { name: 'Tipeshwar WLS', lat: 20.15, lng: 78.29, state: 'Maharashtra', animal: 'Tiger', important: false },
      { name: 'Agasthyavanam WLS', lat: 8.62, lng: 77.31, state: 'Kerala', animal: 'Nilgiri Tahr', important: false },
      { name: 'Peppara WLS', lat: 8.72, lng: 77.17, state: 'Kerala', animal: 'Elephant, Tiger', important: false },
      { name: 'Neyyar WLS', lat: 8.53, lng: 77.18, state: 'Kerala', animal: 'Elephant, Crocodile', important: false },
      { name: 'Shendurney WLS', lat: 8.85, lng: 77.22, state: 'Kerala', animal: 'Lion-tailed Macaque', important: false },
      { name: 'Cauvery WLS', lat: 12.27, lng: 77.15, state: 'Karnataka', animal: 'Tiger, Elephant', important: false },
      { name: 'Biligiri Rangaswamy Temple WLS', lat: 11.98, lng: 77.15, state: 'Karnataka', animal: 'Tiger, Elephant', important: true },
      { name: 'Melghat WLS', lat: 21.60, lng: 77.15, state: 'Maharashtra', animal: 'Tiger', important: true },
      { name: 'Sahyadri WLS', lat: 17.22, lng: 73.63, state: 'Maharashtra', animal: 'Tiger, Leopard', important: false },
      { name: 'Terai WLS cluster', lat: 28.55, lng: 80.10, state: 'UP/Uttarakhand', animal: 'Tiger, Elephant', important: false },
      { name: 'Mahananda WLS', lat: 26.83, lng: 88.33, state: 'West Bengal', animal: 'Elephant, Red Panda', important: false },
      { name: 'Vikramshila Gangetic Dolphin Sanctuary', lat: 25.40, lng: 87.30, state: 'Bihar', animal: 'Gangetic Dolphin', important: true },
      { name: 'Valmiki WLS', lat: 27.50, lng: 84.20, state: 'Bihar', animal: 'Tiger, Elephant', important: false },
      { name: 'Kawal WLS', lat: 19.25, lng: 79.60, state: 'Telangana', animal: 'Tiger, Wild Dog', important: false },
      { name: 'Amrabad WLS', lat: 16.28, lng: 78.93, state: 'Telangana', animal: 'Tiger, Leopard', important: false },
      { name: 'Pocharam WLS', lat: 18.55, lng: 78.27, state: 'Telangana', animal: 'Gaur, Sambar', important: false },
      { name: 'Rohit (Morachi Chincholi)', lat: 18.98, lng: 74.29, state: 'Maharashtra', animal: 'Peacock', important: false },
      { name: 'Nagi-Nakti WLS', lat: 24.50, lng: 86.01, state: 'Bihar', animal: 'Migratory Birds', important: false },
      { name: 'Rajgir WLS', lat: 25.00, lng: 85.37, state: 'Bihar', animal: 'Wild Boar, Leopard', important: false }
    ],

    tigerReserves: [
      { name: 'Jim Corbett TR', lat: 29.53, lng: 78.78, state: 'Uttarakhand', year: 1973, tigers: 'Highest count in India', note: 'First TR of India (1973). Project Tiger started here.' },
      { name: 'Ranthambore TR', lat: 26.00, lng: 76.50, state: 'Rajasthan', year: 1973, note: 'Famous for tigers in daylight. Rajasthan iconic.' },
      { name: 'Kanha TR', lat: 22.30, lng: 80.65, state: 'Madhya Pradesh', year: 1973, note: 'Barasingha (Swamp Deer) saved here. Jungle Book inspiration.' },
      { name: 'Manas TR', lat: 26.70, lng: 91.00, state: 'Assam', year: 1973, note: 'UNESCO WHS + Tiger Reserve + BR.' },
      { name: 'Palamau TR', lat: 23.80, lng: 84.10, state: 'Jharkhand', year: 1973, note: 'First aerial survey of tigers.' },
      { name: 'Simlipal TR', lat: 21.85, lng: 86.28, state: 'Odisha', year: 1973, note: 'Melanistic (black) tigers. Odisha.' },
      { name: 'Sundarbans TR', lat: 21.95, lng: 89.18, state: 'West Bengal', year: 1973, note: 'Swimming tigers. UNESCO.' },
      { name: 'Bandipur TR', lat: 11.67, lng: 76.64, state: 'Karnataka', year: 1973, note: 'Part of Nilgiri Biosphere.' },
      { name: 'Melghat TR', lat: 21.60, lng: 77.15, state: 'Maharashtra', year: 1973, note: 'Maharashtra. Satpura range.' },
      { name: 'Bori TR', lat: 22.47, lng: 78.43, state: 'Madhya Pradesh', year: 1973, note: 'Satpura complex.' },
      { name: 'Pench TR', lat: 21.75, lng: 79.35, state: 'MP/Maharashtra', year: 1992, note: 'Jungle Book by Kipling.' },
      { name: 'Tadoba-Andhari TR', lat: 20.30, lng: 79.40, state: 'Maharashtra', year: 1994, note: 'Highest tiger density in Maharashtra.' },
      { name: 'Bandhavgarh TR', lat: 23.72, lng: 80.97, state: 'Madhya Pradesh', year: 1993, note: 'Highest tiger density globally.' },
      { name: 'Panna TR', lat: 24.72, lng: 80.20, state: 'Madhya Pradesh', year: 1994, note: 'Tiger returned after extinction. Ken-Betwa controversy.' },
      { name: 'Dampa TR', lat: 23.70, lng: 92.80, state: 'Mizoram', year: 1994, note: 'Mizoram. Remote.' },
      { name: 'Indravati TR', lat: 18.70, lng: 81.00, state: 'Chhattisgarh', year: 1982, note: 'Wild Buffalo. Bastar.' },
      { name: 'Nagarahole TR (Rajiv Gandhi)', lat: 12.10, lng: 76.15, state: 'Karnataka', year: 1999, note: 'Part of Nilgiri Biosphere.' },
      { name: 'Valmiki TR', lat: 27.50, lng: 84.25, state: 'Bihar', year: 1989, note: 'Bihar. Nepal border.' },
      { name: 'Periyar TR', lat: 9.53, lng: 77.13, state: 'Kerala', year: 1978, note: 'Periyar Lake inside.' },
      { name: 'Kalakad-Mundanthurai TR', lat: 8.72, lng: 77.35, state: 'Tamil Nadu', year: 1988, note: 'Western Ghats hotspot.' },
      { name: 'Sariska TR', lat: 27.35, lng: 76.37, state: 'Rajasthan', year: 1978, note: 'First tiger reintroduction.' },
      { name: 'Buxa TR', lat: 26.73, lng: 89.53, state: 'West Bengal', year: 1983, note: 'Bengal-Bhutan border.' },
      { name: 'Nameri TR', lat: 26.96, lng: 92.79, state: 'Assam', year: 1999, note: 'Assam. Elephant too.' },
      { name: 'Pakke TR', lat: 27.07, lng: 93.40, state: 'Arunachal Pradesh', year: 2001, note: 'Hornbill conservation.' },
      { name: 'Namdapha TR', lat: 27.50, lng: 96.50, state: 'Arunachal Pradesh', year: 1982, note: 'All 4 big cats.' },
      { name: 'Satpura TR', lat: 22.47, lng: 78.43, state: 'Madhya Pradesh', year: 1999, note: 'Wild Dog, Tiger.' },
      { name: 'Anamalai (Indira Gandhi) TR', lat: 10.58, lng: 76.97, state: 'Tamil Nadu', year: 2008, note: 'Tamil Nadu.' },
      { name: 'Bhadra TR', lat: 13.53, lng: 75.67, state: 'Karnataka', year: 1998, note: 'Western Ghats.' },
      { name: 'Biligiri Rangaswamy TR', lat: 11.98, lng: 77.15, state: 'Karnataka', year: 2010, note: 'Unique — connects W Ghats & E Ghats.' },
      { name: 'Kudremukh TR', lat: 13.23, lng: 75.23, state: 'Karnataka', year: 1999, note: 'Western Ghats.' },
      { name: 'Sanjay-Dubri TR', lat: 23.87, lng: 82.83, state: 'Madhya Pradesh', year: 2008, note: 'Vindhyan forests.' },
      { name: 'Kaziranga TR', lat: 26.58, lng: 93.37, state: 'Assam', year: 2006, note: 'UNESCO. Rhino + Tiger.' },
      { name: 'Achanakmar TR', lat: 22.66, lng: 81.75, state: 'Chhattisgarh', year: 2009, note: 'Source of Narmada.' },
      { name: 'Dudhwa TR', lat: 28.50, lng: 80.85, state: 'Uttar Pradesh', year: 1987, note: 'Rhino introduced.' },
      { name: 'Pilibhit TR', lat: 28.65, lng: 80.60, state: 'Uttar Pradesh', year: 2014, note: 'Terai.' },
      { name: 'Rajaji TR', lat: 30.03, lng: 78.20, state: 'Uttarakhand', year: 2015, note: 'Elephant + Tiger.' },
      { name: 'Mudumalai TR', lat: 11.58, lng: 76.64, state: 'Tamil Nadu', year: 2007, note: 'Part of Nilgiri Biosphere.' },
      { name: 'Mukandra Hills TR', lat: 25.00, lng: 76.30, state: 'Rajasthan', year: 2013, note: 'Rajasthan.' },
      { name: 'Orang TR', lat: 26.65, lng: 92.00, state: 'Assam', year: 2016, note: 'Smallest tiger reserve.' },
      { name: 'Kamlang TR', lat: 27.90, lng: 96.30, state: 'Arunachal Pradesh', year: 2016, note: 'Arunachal.' },
      { name: 'Guru Ghasidas TR', lat: 23.50, lng: 82.50, state: 'Chhattisgarh', year: 2021, note: 'New 2021.' },
      { name: 'Kawal TR', lat: 19.25, lng: 79.60, state: 'Telangana', year: 2012, note: 'Telangana.' },
      { name: 'Amrabad TR', lat: 16.28, lng: 78.93, state: 'Telangana', year: 2014, note: 'Largest in South India.' },
      { name: 'Srivilliputhur-Megamalai TR', lat: 9.65, lng: 77.50, state: 'Tamil Nadu', year: 2021, note: 'Tamil Nadu. New.' },
      { name: 'Ramgarh Vishdhari TR', lat: 25.45, lng: 75.85, state: 'Rajasthan', year: 2021, note: 'New 2021.' },
      { name: 'Sitamata WLS (TR)', lat: 24.00, lng: 74.30, state: 'Rajasthan', year: 2021, note: 'New.' },
      { name: 'Ranipur TR', lat: 25.00, lng: 79.48, state: 'Uttar Pradesh', year: 2022, note: 'New 2022.' },
      { name: 'Veerangana Durgavati TR', lat: 23.62, lng: 79.97, state: 'Madhya Pradesh', year: 2023, note: 'New 2023.' },
      { name: 'Dholpur-Karauli TR', lat: 26.70, lng: 77.00, state: 'Rajasthan', year: 2023, note: 'New 2023. 53rd TR.' }
    ],

    biosphereReserves: [
      { name: 'Nilgiri BR', lat: 11.40, lng: 76.70, state: 'TN, Kerala, Karnataka', year: 1986, unesco: true, area: 5520, upsc: 'First BR of India. Largest. Nilgiri Tahr.' },
      { name: 'Nanda Devi BR', lat: 30.38, lng: 79.96, state: 'Uttarakhand', year: 1988, unesco: true, area: 2236, upsc: 'UNESCO WHS. Snow leopard. Valley of Flowers inside.' },
      { name: 'Nokrek BR', lat: 25.43, lng: 90.65, state: 'Meghalaya', year: 1988, unesco: true, area: 820, upsc: 'UNESCO. Citrus gene center. Red Panda.' },
      { name: 'Sundarbans BR', lat: 21.95, lng: 88.90, state: 'West Bengal', year: 1989, unesco: true, area: 9630, upsc: 'UNESCO WHS. Largest mangrove. Royal Bengal Tiger.' },
      { name: 'Gulf of Mannar BR', lat: 9.10, lng: 79.00, state: 'Tamil Nadu', year: 1989, unesco: true, area: 10500, upsc: 'UNESCO. Dugong habitat. Coral. 3600 species.' },
      { name: 'Manas BR', lat: 26.70, lng: 91.00, state: 'Assam', year: 1989, unesco: true, area: 2837, upsc: 'UNESCO WHS. Golden langur. Pygmy hog.' },
      { name: 'Great Nicobar BR', lat: 7.00, lng: 93.84, state: 'A&N Islands', year: 1989, unesco: true, area: 885, upsc: 'UNESCO. Southernmost. Giant leatherback turtle. Port project controversial 2024.' },
      { name: 'Simlipal BR', lat: 21.85, lng: 86.28, state: 'Odisha', year: 1994, unesco: true, area: 4374, upsc: 'UNESCO. Melanistic tigers. Elephant, Gaur.' },
      { name: 'Dibru-Saikhowa BR', lat: 27.65, lng: 95.20, state: 'Assam', year: 1986, unesco: false, area: 765, upsc: 'Feral horses. Gangetic river dolphin.' },
      { name: 'Dehang-Dibang BR', lat: 28.50, lng: 95.50, state: 'Arunachal Pradesh', year: 1998, unesco: false, area: 5112, upsc: 'All 4 big cats. Part of Namdapha landscape.' },
      { name: 'Pachmarhi BR', lat: 22.47, lng: 78.43, state: 'Madhya Pradesh', year: 1999, unesco: true, area: 4981, upsc: 'UNESCO. Only BR of MP. Giant squirrel.' },
      { name: 'Khangchendzonga BR', lat: 27.70, lng: 88.30, state: 'Sikkim', year: 2000, unesco: true, area: 2620, upsc: 'UNESCO WHS (2016). First mixed WHS India.' },
      { name: 'Agasthyamalai BR', lat: 8.62, lng: 77.31, state: 'Kerala, TN', year: 2001, unesco: true, area: 3500, upsc: 'UNESCO. Rich plant diversity. Kaani tribe.' },
      { name: 'Achanakmar-Amarkantak BR', lat: 22.66, lng: 81.75, state: 'MP, Chhattisgarh', year: 2005, unesco: false, area: 3835, upsc: 'Source of Narmada & Sone. Baiga tribe.' },
      { name: 'Great Rann of Kachchh BR', lat: 23.85, lng: 70.00, state: 'Gujarat', year: 2008, unesco: false, area: 12454, upsc: 'Indian Wild Ass. Flamingo nesting. Largest BR.' },
      { name: 'Cold Desert BR', lat: 32.50, lng: 77.50, state: 'Himachal Pradesh', year: 2009, unesco: false, area: 7770, upsc: 'Pin Valley. Snow leopard. Spiti. Cold desert.' },
      { name: 'Seshachalam BR', lat: 13.67, lng: 79.37, state: 'Andhra Pradesh', year: 2010, unesco: false, area: 4756, upsc: 'Red Sanders. Tirupati forests. Slender loris.' },
      { name: 'Panna BR', lat: 24.72, lng: 80.20, state: 'Madhya Pradesh', year: 2011, unesco: false, area: 2998, upsc: 'Ken river. Diamond mines. Ken-Betwa controversy. Tiger returned.' }
    ],

    biodiversityHotspots: [
      {
        name: 'Western Ghats & Sri Lanka',
        coords: [[8.0,76.5],[8.5,77.5],[10,77.5],[12,76.5],[13,74.5],[15,74.0],[16,73.8],[17,73.5],[18,73.2],[18,74.8],[16,76.0],[14,76.5],[12,76.5],[10,77.5],[8.5,77.5],[8.0,77.5],[8.0,76.5]],
        color: '#FFD700',
        totalSpp: '5000+ plants, 139 mammals, 508 birds',
        endemic: '325 globally threatened species',
        threat: 'Deforestation, mining, plantations',
        upsc: '1 of 36 global hotspots. UNESCO WHS. 30% forest loss. Nilgiri Tahr, Lion-tailed Macaque, Malabar Giant Squirrel.'
      },
      {
        name: 'Himalaya (Eastern Himalaya Hotspot)',
        coords: [[27,88],[27,96],[30,96],[32,90],[30,84],[28,84],[27,88]],
        color: '#00BFFF',
        totalSpp: '10,000 plants, 300+ mammals',
        endemic: '3160 endemic plants',
        threat: 'Hydroelectric projects, climate change, infrastructure',
        upsc: 'Includes Bhutan, NE India, Nepal. Biodiversity concentration highest in subtropical Himalayas.'
      },
      {
        name: 'Indo-Burma Hotspot',
        coords: [[20,92],[23,95],[26,97],[28,97],[28,93],[25,90],[22,92],[20,92]],
        color: '#FF69B4',
        totalSpp: '13,500 plants, 430 mammals',
        endemic: '2185 endemic plants',
        threat: 'Agriculture, logging, hunting',
        upsc: 'Covers NE India, Myanmar, Thailand, China SW. Hoolock Gibbon, Tiger, Golden Langur.'
      },
      {
        name: 'Sundaland',
        coords: [[-8,95],[0,100],[5,102],[5,115],[-3,115],[-8,108],[-8,95]],
        color: '#FF6347',
        totalSpp: '25,000 plants, 701 birds',
        endemic: '15,000 endemic plants',
        threat: 'Palm oil, logging',
        upsc: 'Borneo-Sumatra centered. Partially in Andaman-Nicobar zone. Orangutan habitat.'
      }
    ],

    mangroves: [
      { name: 'Sundarbans', lat: 21.95, lng: 88.90, state: 'West Bengal + Bangladesh', area: '4267 sq km (India)', mainSpecies: 'Sundari, Goran, Gewa', upsc: 'World\'s largest. UNESCO. Royal Bengal Tiger. Sea level rise threat.' },
      { name: 'Godavari-Krishna Delta', lat: 16.50, lng: 81.50, state: 'Andhra Pradesh', area: '~1000 sq km', mainSpecies: 'Avicennia, Rhizophora', upsc: 'Coringa WLS. 2nd largest. Fishing Cat, Otters.' },
      { name: 'Mahanadi-Bhitarkanika', lat: 20.50, lng: 86.60, state: 'Odisha', area: '~220 sq km', mainSpecies: 'Avicennia, Excoecaria', upsc: 'Bhitarkanika. Olive Ridley turtle. Saltwater crocodile.' },
      { name: 'Gulf of Kachchh', lat: 22.80, lng: 70.20, state: 'Gujarat', area: '~600 sq km', mainSpecies: 'Avicennia marina', upsc: 'Expanding due to conservation. Flamingos. Marine NP.' },
      { name: 'Andaman & Nicobar', lat: 12.00, lng: 92.80, state: 'A&N Islands', area: '~800 sq km', mainSpecies: 'Rhizophora, Bruguiera, Sonneratia', upsc: 'Rich biodiversity. Dugong. Remote, pristine.' },
      { name: 'Pichavaram', lat: 11.42, lng: 79.77, state: 'Tamil Nadu', area: '~43 sq km', mainSpecies: 'Avicennia, Rhizophora', upsc: '2nd largest after Sundarbans. Near Chidambaram.' },
      { name: 'Muthupet', lat: 10.40, lng: 79.50, state: 'Tamil Nadu', area: '~68 sq km', mainSpecies: 'Avicennia marina', upsc: 'Bird sanctuary. Tamil Nadu.' },
      { name: 'Vembanad', lat: 9.62, lng: 76.52, state: 'Kerala', area: '~50 sq km', mainSpecies: 'Avicennia, Rhizophora', upsc: 'Backwater ecosystem. Ramsar site.' },
      { name: 'Lakshadweep Mangroves', lat: 10.56, lng: 72.64, state: 'Lakshadweep', area: '~4 sq km', mainSpecies: 'Rhizophora', upsc: 'Small but ecologically unique. Atoll-associated.' },
      { name: 'Ratnagiri-Devgad', lat: 16.60, lng: 73.50, state: 'Maharashtra', area: '~23 sq km', mainSpecies: 'Avicennia, Sonneratia', upsc: 'Maharashtra coast. Mango-mangrove area.' }
    ],

    coralReefs: [
      { name: 'Lakshadweep', lat: 10.56, lng: 72.64, type: 'Atoll reefs', condition: 'Moderate bleaching', state: 'Lakshadweep', upsc: 'Largest coral reef in India. 1998 El Nino bleaching. MNP protection.' },
      { name: 'Gulf of Mannar', lat: 9.10, lng: 79.00, type: 'Fringing + Patch', condition: 'Declining', state: 'Tamil Nadu', upsc: 'First Marine BR. 21 islands. Dugong habitat. UNESCO.' },
      { name: 'Andaman & Nicobar', lat: 11.00, lng: 92.80, type: 'Fringing reefs', condition: 'Mostly healthy', state: 'A&N Islands', upsc: 'Most diverse. Remote. Bleaching events increasing.' },
      { name: 'Gulf of Kachchh', lat: 22.50, lng: 69.80, type: 'Patch reefs', condition: 'Recovering', state: 'Gujarat', upsc: 'Marine NP (first in India — 1982). Northernmost reefs.' },
      { name: 'Malvan Marine', lat: 16.05, lng: 73.46, type: 'Patch reefs', condition: 'Degraded', state: 'Maharashtra', upsc: 'Maharashtra only reef. Restricted growth.' }
    ],

    migratoryBirds: {
      centralAsianFlyway: {
        name: 'Central Asian Flyway (CAF)',
        color: '#00BFFF',
        path: [[70,90],[65,85],[58,82],[50,80],[43,77],[38,74],[34,72],[28,75],[25,78],[22,80],[18,83]],
        birds: 'Bar-headed Goose, Demoiselle Crane, Flamingo, Siberian Crane',
        upsc: 'One of 9 global flyways. Connects Arctic/Central Asia to South Asia.'
      },
      keyWintering: [
        { name: 'Bharatpur (Keoladeo)', lat: 27.16, lng: 77.52, birds: 'Siberian Crane (historical), ducks, geese', upsc: 'UNESCO WHS. Siberian Crane now absent. Climate change.' },
        { name: 'Chilika Lake', lat: 19.72, lng: 85.32, birds: 'Flamingo, 1M+ waterfowl', upsc: 'Asia\'s largest wintering site. Ramsar.' },
        { name: 'Nal Sarovar', lat: 22.78, lng: 72.01, birds: 'Flamingo, pelican, ducks', upsc: 'Gujarat. Ramsar.' },
        { name: 'Point Calimere', lat: 10.30, lng: 79.85, birds: 'Flamingo, shorebirds', upsc: 'TN. Ramsar.' },
        { name: 'Pulicat Lake', lat: 13.65, lng: 80.22, birds: 'Flamingo, Pelican', upsc: '2nd lagoon. AP/TN.' },
        { name: 'Vedanthangal', lat: 12.47, lng: 79.87, birds: 'Open-billed Stork, Spoonbill', upsc: 'Oldest bird sanctuary 1798.' },
        { name: 'Sambhar Lake', lat: 26.92, lng: 75.08, birds: 'Flamingo (18000 died 2019)', upsc: 'Rajasthan saline lake. Avian cholera 2019.' },
        { name: 'Wular Lake', lat: 34.30, lng: 74.55, birds: 'Migratory ducks, Osprey', upsc: 'J&K largest freshwater.' },
        { name: 'Deepor Beel', lat: 26.13, lng: 91.66, birds: 'Greater Adjutant Stork', upsc: 'Assam. Ramsar. Adjutant stork.' },
        { name: 'Doyang Lake', lat: 25.60, lng: 93.50, birds: 'Amur Falcon (100,000+)', upsc: 'Nagaland. World largest raptor gathering.' }
      ]
    },

    endangeredSpecies: [
      { name: 'Bengal Tiger', lat: 22.0, lng: 80.5, status: 'Vulnerable', population: '~3682 (2022)', habitat: 'Terai, C India, Sundarbans', iucnCode: 'VU', upsc: 'Project Tiger 1973. 53 tiger reserves. NTCA.' },
      { name: 'Asiatic Lion', lat: 21.12, lng: 70.79, status: 'Endangered', population: '~700 (2023)', habitat: 'Gir Forest ONLY', iucnCode: 'EN', upsc: 'Gir only habitat. SC rejected Kuno transfer.' },
      { name: 'One-horned Rhinoceros', lat: 26.58, lng: 93.37, status: 'Vulnerable', population: '~4000 globally', habitat: 'Kaziranga, Manas', iucnCode: 'VU', upsc: 'Kaziranga 70% world pop. Project Rhino.' },
      { name: 'Snow Leopard', lat: 32.50, lng: 77.50, status: 'Vulnerable', population: '400-700 in India', habitat: 'Ladakh, HP, Uttarakhand, Sikkim, AP', iucnCode: 'VU', upsc: 'Project Snow Leopard. Climate change threat.' },
      { name: 'African Cheetah (Reintroduced)', lat: 24.0, lng: 78.0, status: 'Extinct in India', population: '0 native; 20+ reintroduced', habitat: 'Kuno NP, MP', iucnCode: 'EX-IN', upsc: 'Project Cheetah 2022. Namibia+SA origin. Controversy.' },
      { name: 'Gharial', lat: 27.50, lng: 80.50, status: 'Critically Endangered', population: '~650-900', habitat: 'Chambal, Gandak', iucnCode: 'CR', upsc: 'Fish-eating crocodilian. Chambal Sanctuary.' },
      { name: 'Indian Vulture', lat: 25.0, lng: 79.0, status: 'Critically Endangered', population: 'Crashed 99%', habitat: 'N & C India', iucnCode: 'CR', upsc: 'Diclofenac collapse. Jatayu Conservation Centers.' },
      { name: 'Great Indian Bustard', lat: 25.0, lng: 72.0, status: 'Critically Endangered', population: '~100', habitat: 'Desert NP Rajasthan, Gujarat', iucnCode: 'CR', upsc: 'SC ordered underground cables. State bird Rajasthan.' },
      { name: 'Gangetic Dolphin', lat: 26.0, lng: 84.0, status: 'Endangered', population: '~2500-3000', habitat: 'Ganga, Brahmaputra, Chambal', iucnCode: 'EN', upsc: 'National Aquatic Animal. Vikramshila Sanctuary.' },
      { name: 'Irrawaddy Dolphin', lat: 19.72, lng: 85.32, status: 'Endangered', population: '<100 in Chilika', habitat: 'Chilika Lake only', iucnCode: 'EN', upsc: 'Only marine dolphin India. Chilika.' },
      { name: 'Lion-tailed Macaque', lat: 11.08, lng: 76.43, status: 'Endangered', population: '~3000-4000', habitat: 'Silent Valley, W Ghats', iucnCode: 'EN', upsc: 'Endemic W Ghats. Flagship of Silent Valley.' },
      { name: 'Hangul (Kashmir Stag)', lat: 34.10, lng: 74.80, status: 'Critically Endangered', population: '~300', habitat: 'Dachigam NP only', iucnCode: 'CR', upsc: 'State animal J&K. Only red deer S Asia.' },
      { name: 'Blackbuck', lat: 14.22, lng: 76.66, status: 'Least Concern', population: '~50,000', habitat: 'Velavadar, Tal Chhapar', iucnCode: 'LC', upsc: 'Salman Khan case. Bishnoi community protects.' },
      { name: 'Dugong', lat: 9.10, lng: 79.00, status: 'Vulnerable', population: '<200 in India', habitat: 'Gulf of Mannar, Andaman', iucnCode: 'VU', upsc: 'Only marine herbivore India. Seagrass feeder.' },
      { name: 'Red Panda', lat: 27.70, lng: 88.50, status: 'Endangered', population: '~5000-10000 globally', habitat: 'Sikkim, Arunachal Pradesh', iucnCode: 'EN', upsc: 'State animal Sikkim. Bamboo dependent. Climate threat.' },
      { name: 'Golden Langur', lat: 26.70, lng: 90.50, status: 'Endangered', population: '<6500 globally', habitat: 'Assam-Bhutan border', iucnCode: 'EN', upsc: 'One of most endangered primates. Manas, Chakrashila.' },
      { name: 'Pygmy Hog', lat: 26.65, lng: 91.00, status: 'Endangered', population: '<250', habitat: 'Manas (only wild pop)', iucnCode: 'EN', upsc: 'Rarest pig globally. Manas NP. Captive breeding Assam.' },
      { name: 'Olive Ridley Sea Turtle', lat: 20.40, lng: 86.70, status: 'Vulnerable', population: 'Mass nesting (Gahirmatha)', habitat: 'Odisha coast (Gahirmatha, Rushikulya)', iucnCode: 'VU', upsc: 'Largest turtle mass nesting globally. Gahirmatha beach.' },
      { name: 'Indian Wild Ass (Ghudkhur)', lat: 23.58, lng: 71.25, status: 'Near Threatened', population: '~6000', habitat: 'Rann of Kachchh only', iucnCode: 'NT', upsc: 'Only wild ass in India. Wild Ass WLS Gujarat.' },
      { name: 'Nilgiri Tahr', lat: 10.25, lng: 77.07, status: 'Endangered', population: '~3000', habitat: 'Eravikulam NP, Nilgiri hills', iucnCode: 'EN', upsc: 'Endemic W Ghats. State animal Kerala. Eravikulam NP.' }
    ],

    ramsar: [
      { name: 'Chilika Lake', lat: 19.72, lng: 85.32, state: 'Odisha', year: 1981, area: '1100 sq km', upsc: 'Largest coastal lagoon Asia. Irrawaddy dolphin.' },
      { name: 'Keoladeo (Bharatpur)', lat: 27.16, lng: 77.52, state: 'Rajasthan', year: 1981, area: '29 sq km', upsc: 'UNESCO WHS. Bird sanctuary. Man-made.' },
      { name: 'Loktak Lake', lat: 24.52, lng: 93.78, state: 'Manipur', year: 1990, area: '266 sq km', upsc: 'Largest freshwater lake NE India. Phumdis. Sangai.' },
      { name: 'Wular Lake', lat: 34.30, lng: 74.55, state: 'J&K', year: 1990, area: '189 sq km', upsc: 'Largest freshwater lake India. J&K.' },
      { name: 'Harike Wetland', lat: 31.17, lng: 74.95, state: 'Punjab', year: 1990, area: '41 sq km', upsc: 'Punjab. Migratory birds.' },
      { name: 'Sambhar Lake', lat: 26.92, lng: 75.08, state: 'Rajasthan', year: 1990, area: '240 sq km', upsc: 'Largest saline lake India. Flamingo mass death 2019.' },
      { name: 'Deepor Beel', lat: 26.13, lng: 91.66, state: 'Assam', year: 2002, area: '40 sq km', upsc: 'Greater Adjutant Stork. Assam.' },
      { name: 'Pong Dam Wetland', lat: 32.00, lng: 76.15, state: 'H.P.', year: 2002, area: '307 sq km', upsc: 'HP. Migratory waterfowl.' },
      { name: 'Ropar Wetland', lat: 30.96, lng: 76.52, state: 'Punjab', year: 2002, area: '13.6 sq km', upsc: 'Punjab. On Sutlej.' },
      { name: 'Kanwar Lake', lat: 25.92, lng: 86.30, state: 'Bihar', year: 2002, area: '67.5 sq km', upsc: 'Asia\'s largest freshwater oxbow lake.' },
      { name: 'Nal Sarovar', lat: 22.78, lng: 72.01, state: 'Gujarat', year: 2012, area: '123 sq km', upsc: 'Gujarat. Flamingo, Pelicans.' },
      { name: 'Vembanad-Kol', lat: 9.62, lng: 76.52, state: 'Kerala', year: 2002, area: '1512 sq km', upsc: 'Largest Ramsar India. Backwaters. Kerala.' },
      { name: 'Bhoj Wetland', lat: 23.26, lng: 77.34, state: 'Madhya Pradesh', year: 2002, area: '32 sq km', upsc: 'Bhopal Lakes. MP.' },
      { name: 'Point Calimere', lat: 10.30, lng: 79.85, state: 'Tamil Nadu', year: 2002, area: '21.2 sq km', upsc: 'Flamingo. Blackbuck.' },
      { name: 'East Kolkata Wetland', lat: 22.53, lng: 88.45, state: 'West Bengal', year: 2002, area: '12.5 sq km', upsc: 'Sewage farming. Ramsar. Urban wetland.' },
      { name: 'Sundarbans', lat: 21.95, lng: 88.90, state: 'West Bengal', year: 2019, area: '4230 sq km', upsc: 'UNESCO. Ramsar. Tiger.' },
      { name: 'Nanda Lake', lat: 15.45, lng: 73.91, state: 'Goa', year: 2022, area: '0.42 sq km', upsc: 'Smallest Ramsar India. Goa.' },
      { name: 'Ankasamudra Bird Conservation Reserve', lat: 14.45, lng: 76.25, state: 'Karnataka', year: 2022, area: '1.32 sq km', upsc: 'Karnataka. 2022 addition.' },
      { name: 'Aghanashini Estuary', lat: 14.23, lng: 74.57, state: 'Karnataka', year: 2022, area: '1566 sq km', upsc: 'Karnataka mangroves.' },
      { name: 'Magadi Kere', lat: 13.02, lng: 77.23, state: 'Karnataka', year: 2022, area: '0.80 sq km', upsc: 'Karnataka.' },
      { name: 'Karikili Bird Sanctuary', lat: 12.34, lng: 79.98, state: 'Tamil Nadu', year: 2022, area: '0.61 sq km', upsc: 'TN. 2022.' },
      { name: 'Pallikaranai Marsh', lat: 12.93, lng: 80.22, state: 'Tamil Nadu', year: 2022, area: '5.95 sq km', upsc: 'Chennai marsh. Urban threat.' },
      { name: 'Pichavaram Mangrove', lat: 11.42, lng: 79.77, state: 'Tamil Nadu', year: 2022, area: '14.79 sq km', upsc: '2nd largest mangrove TN.' },
      { name: 'Sakhya Sagar', lat: 24.14, lng: 78.40, state: 'Madhya Pradesh', year: 2022, area: '248 sq km', upsc: 'MP.' },
      { name: 'Sirpur', lat: 22.94, lng: 75.65, state: 'Madhya Pradesh', year: 2022, area: '161 sq km', upsc: 'Indore, MP.' },
      { name: 'Vedanthangal', lat: 12.47, lng: 79.87, state: 'Tamil Nadu', year: 2022, area: '0.74 sq km', upsc: 'Oldest bird sanctuary 1798.' },
      { name: 'Udhayamarthandapuram', lat: 10.80, lng: 79.32, state: 'Tamil Nadu', year: 2022, area: '0.74 sq km', upsc: 'TN.' },
      { name: 'Kanjli Wetland', lat: 31.28, lng: 75.47, state: 'Punjab', year: 2002, area: '1.82 sq km', upsc: 'Punjab.' },
      { name: 'Tsomoriri', lat: 32.90, lng: 78.30, state: 'Ladakh', year: 2002, area: '120 sq km', upsc: 'Highest altitude Ramsar India. Bar-headed Goose.' },
      { name: 'Renuka Lake', lat: 30.60, lng: 77.45, state: 'Himachal Pradesh', year: 2005, area: '0.2 sq km', upsc: 'Smallest lake HP. Ramsar.' },
      { name: 'Rudrasagar', lat: 23.51, lng: 91.44, state: 'Tripura', year: 2005, area: '2.4 sq km', upsc: 'Tripura. Neermahal palace.' },
      { name: 'Surinsar-Mansar Lakes', lat: 32.70, lng: 74.99, state: 'J&K', year: 2005, area: '3.5 sq km', upsc: 'J&K.' },
      { name: 'Hokera Wetland', lat: 34.17, lng: 74.66, state: 'J&K', year: 2005, area: '13.75 sq km', upsc: 'J&K.' },
      { name: 'Beas Conservation Reserve', lat: 31.72, lng: 75.08, state: 'Punjab', year: 2019, area: '64.3 sq km', upsc: 'Punjab. Indus River Dolphin here.' },
      { name: 'Nangal Wetland', lat: 31.38, lng: 76.38, state: 'Punjab', year: 2019, area: '1.16 sq km', upsc: 'Punjab.' },
      { name: 'Keshopur-Miani', lat: 31.73, lng: 75.27, state: 'Punjab', year: 2019, area: '3.43 sq km', upsc: 'Punjab.' },
      { name: 'Lonar Lake', lat: 19.98, lng: 76.51, state: 'Maharashtra', year: 2020, area: '3.84 sq km', upsc: 'Meteorite crater lake. Alkaline-saline. Unique ecosystem.' },
      { name: 'Sur Sarovar (Keetham Lake)', lat: 27.16, lng: 77.99, state: 'Uttar Pradesh', year: 2020, area: '4.31 sq km', upsc: 'UP near Agra.' }
    ],

    conservationProjects: [
      { name: 'Project Tiger', year: 1973, target: 'Royal Bengal Tiger', reserves: 53, upsc: 'Started at Jim Corbett. 9 reserves initially. Now 53. NTCA. 3682 tigers (2022).' },
      { name: 'Project Elephant', year: 1992, target: 'Indian Elephant', reserves: 30, upsc: '30 elephant reserves. Corridors. Human-elephant conflict. Gaj Yatra campaign.' },
      { name: 'Project Snow Leopard', year: 2009, target: 'Snow Leopard', reserves: 5, upsc: '5 states — Ladakh, HP, Uttarakhand, Sikkim, Arunachal. Camera trapping.' },
      { name: 'Project Cheetah', year: 2022, target: 'African Cheetah (reintroduced)', reserves: 1, upsc: '20 African cheetahs. Kuno NP MP. Namibia (8) + SA (12). 5+ deaths. Controversy: should use Iranian cheetah.' },
      { name: 'Project Vulture', year: 2006, target: 'Indian Vulture', reserves: 9, upsc: 'Diclofenac ban. Jatayu Conservation Breeding Centers. 9 species affected.' },
      { name: 'Project Dolphin', year: 2020, target: 'Gangetic + Irrawaddy Dolphin', reserves: 0, upsc: 'PM Modi announced 2020. Vikramshila Sanctuary Bihar. National Aquatic Animal.' },
      { name: 'Project Rhino', year: 2005, target: 'One-horned Rhinoceros', reserves: 0, upsc: 'Indian Rhino Vision 2020. Kaziranga, Manas, Pobitora. Translocation program.' },
      { name: 'Project Gharial', year: 1975, target: 'Gharial', reserves: 4, upsc: 'Chambal, Gandak. Critically Endangered. Only fish-eating crocodilian.' },
      { name: 'Sea Turtle Conservation', year: 1999, target: 'Olive Ridley + Leatherback', reserves: 0, upsc: 'Gahirmatha (world largest nesting). Bhitarkanika. OMFRA tag program.' },
      { name: 'Red Panda Conservation', year: 2014, target: 'Red Panda', reserves: 0, upsc: 'Sikkim, Arunachal. Padamchen Conservation Area. Climate change threat.' }
    ]
  };

  // ═══════════════════════════════════════════════════════════════
  // MAPS ARRAY
  // ═══════════════════════════════════════════════════════════════

  var MAPS = [

    // ─────────────────────────────────────────────────────────────
    // MAP 046 — VEGETATION ZONES
    // ─────────────────────────────────────────────────────────────
    {
      mapNum: 46,
      title: 'Vegetation Zones of India',
      subtitle: 'Tropical Evergreen · Deciduous · Thorn · Montane · Mangrove · Alpine',
      mapConfig: { center: [22, 80], zoom: 5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Vegetation Types',
          items: [
            { color: '#006400', label: 'TEF — Tropical Evergreen' },
            { color: '#228B22', label: 'TSE — Semi-Evergreen' },
            { color: '#32CD32', label: 'TMD — Moist Deciduous' },
            { color: '#90EE90', label: 'TDD — Dry Deciduous' },
            { color: '#F4A460', label: 'TTF — Thorn Forest' },
            { color: '#4682B4', label: 'MON — Montane Forests' },
            { dot: '#2E8B57', label: 'Mangrove Sites' },
            { dot: '#9370DB', label: 'Alpine Meadows (Bugyals)' }
          ]
        },
        { sectionTitle: 'Current Affairs', items: [{ dot: '#00FF88', label: 'New 2024-25' }, { dot: '#FF6B6B', label: 'Threatened Zone' }] }
      ],
      info: [
        {
          title: 'Key Facts',
          facts: [
            { label: 'Forest Cover India', value: '21.71% (ISFR 2021)' },
            { label: 'Target', value: '33% under National Forest Policy' },
            { label: 'Champion & Seth (1968)', value: '16 major forest types' },
            { label: 'Most widespread', value: 'Tropical Moist Deciduous (Teak, Sal)' },
            { label: 'Most valuable timber', value: 'Teak (deciduous), Sal (2nd most important)' },
            { label: 'Mangrove rank', value: '3rd largest globally' },
            { label: 'Biodiversity hotspots', value: 'Western Ghats + Eastern Himalayas' }
          ]
        },
        {
          title: 'UPSC Key Points',
          items: [
            'Tropical Evergreen: >200 cm rainfall. Multi-layered. No seasonal leaf fall. W Ghats, NE India.',
            'Tropical Moist Deciduous: Most widespread. Teak + Sal key species. Shed leaves April-June.',
            'Thorn Forests: <50 cm rain. Rajasthan, Gujarat. Khejri — Rajasthan state tree.',
            'Montane belts: 900m→1800m→2800m→3500m→Tundra. Distinct zones.',
            'Bugyals: alpine meadows >3500m. Uttarakhand. Valley of Flowers.',
            'Mangroves: pneumatophores, viviparous seeds, salt tolerant. Coastal protection.',
            'Forest Rights Act 2006: tribal rights over forest land recognized.'
          ]
        },
        {
          title: 'Current Affairs 2023-26',
          items: [
            'ISFR 2023: forest cover slightly increased (net), mangroves increasing since 2019',
            'Forest Rights Act implementation: 23 lakh+ titles distributed (2024)',
            'Climate change: treeline moving upward in Himalayas (+60m/decade)',
            'Bugyals shrinking: snow cover reduction, tourism pressure, climate change',
            'Western Ghats ESA: Supreme Court orders on Kasturirangan report implementation',
            'Van Dhan Vikas Kendras: tribal forest produce value chain (MFP Mission)',
            'CAMPA funds: compensatory afforestation — Rs 50,000+ crore available'
          ]
        }
      ],
      render: function (map, app) {
        DATA.vegetationZones.forEach(function (zone) {
          if (zone.coords && zone.coords.length > 3) {
            var poly = L.polygon(zone.coords, {
              color: zone.color, fillColor: zone.color, fillOpacity: 0.35, weight: 2
            }).addTo(map);
            poly.bindPopup(app.buildPopup(
              '🌿 ' + zone.name,
              '<b>Code:</b> ' + zone.code + '<br><b>Rainfall:</b> ' + zone.rainfall +
              '<br><b>Regions:</b> ' + zone.regions + '<br><b>Trees:</b> ' + zone.trees +
              '<br><b>UPSC:</b> ' + zone.upsc,
              [zone.code, 'Vegetation']
            ));
            poly.on('mouseover', function () { this.setStyle({ fillOpacity: 0.65, weight: 3 }); this.bringToFront(); });
            poly.on('mouseout', function () { this.setStyle({ fillOpacity: 0.35, weight: 2 }); });
            app.addLayer(poly);
            var centroid = zone.coords[Math.floor(zone.coords.length / 3)];
            app.addLayer(app.labelMarker(centroid, zone.code + ' ' + zone.name.split(' ')[1], zone.color, '9px'));
          }
        });

        DATA.mangroves.slice(0, 5).forEach(function (m) {
          var dot = L.circleMarker([m.lat, m.lng], { radius: 7, color: '#000', fillColor: '#2E8B57', fillOpacity: 0.9, weight: 2 }).addTo(map);
          dot.bindPopup(app.buildPopup('🌱 ' + m.name, '<b>State:</b> ' + m.state + '<br><b>Area:</b> ' + m.area + '<br><b>UPSC:</b> ' + m.upsc, ['Mangrove']));
          dot.on('mouseover', function () { this.setRadius(11); }); dot.on('mouseout', function () { this.setRadius(7); });
          app.addLayer(dot);
        });

        var bugyal = L.circleMarker([30.5, 79.5], { radius: 8, color: '#000', fillColor: '#9370DB', fillOpacity: 0.85, weight: 2 }).addTo(map);
        bugyal.bindPopup(app.buildPopup('⛰ Bugyals (Alpine Meadows)', 'Above 3500m. Uttarakhand. Valley of Flowers. Brahmakamal. Threatened by climate change.', ['Alpine']));
        bugyal.on('mouseover', function () { this.setRadius(12); }); bugyal.on('mouseout', function () { this.setRadius(8); });
        app.addLayer(bugyal);
        app.addLayer(app.labelMarker([30.8, 79.5], 'Bugyals', '#9370DB', '9px'));

        app.addLayer(app.infoBox([32.0, 73.0],
          '<b style="color:#32CD32">Forest Cover India</b><br>' +
          '21.71% (ISFR 2021)<br>Target: 33%<br>' +
          'Champion & Seth: 16 types<br>' +
          '<span style="color:#FFD700">Teak + Sal most important</span>'
        ));

        app.showToast('Map 046: Vegetation Zones loaded', 'success');
      }
    },

    // ─────────────────────────────────────────────────────────────
    // MAP 047 — ALL NATIONAL PARKS (106)
    // ─────────────────────────────────────────────────────────────
    {
      mapNum: 47,
      title: 'National Parks of India — All 106',
      subtitle: 'Complete list · State-wise · UNESCO · Flagship Species · Important NPs',
      mapConfig: { center: [22, 80], zoom: 5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'National Parks',
          items: [
            { dot: '#FFD700', label: 'UNESCO World Heritage Site NP' },
            { dot: '#FF6347', label: 'Highly Important NP (UPSC)' },
            { dot: '#4FC3F7', label: 'Other National Parks' }
          ]
        },
        { sectionTitle: 'Current Affairs', items: [{ dot: '#00FF88', label: 'Recent (2020-25)' }, { dot: '#FF6B6B', label: 'Threat/Controversy' }] }
      ],
      info: [
        {
          title: 'Key Facts',
          facts: [
            { label: 'Total NPs', value: '106 National Parks (2024)' },
            { label: 'First NP', value: 'Jim Corbett NP, 1936' },
            { label: 'Largest NP', value: 'Hemis NP, Ladakh (4,400 sq km)' },
            { label: 'Smallest NP', value: 'South Button Island NP, A&N (0.03 sq km)' },
            { label: 'Highest density', value: 'Madhya Pradesh (most NPs)' },
            { label: 'Unique', value: 'Keibul Lamjao NP — only floating NP globally' },
            { label: 'Legal status', value: 'Wildlife Protection Act 1972 — strictest protection' }
          ]
        },
        {
          title: 'UPSC Key National Parks',
          items: [
            'Corbett NP (UK): First NP (1936). First Tiger Reserve (1973). Ramganga river.',
            'Kaziranga NP (Assam): UNESCO. 70% world one-horned rhinos.',
            'Keibul Lamjao (Manipur): World\'s only floating NP. On phumdis.',
            'Namdapha (Arunachal): Only park with ALL 4 big cats.',
            'Hemis NP (Ladakh): Largest NP. Snow leopard.',
            'Keoladeo/Bharatpur (Rajasthan): UNESCO. Bird sanctuary.',
            'Sanjay Gandhi NP (Mumbai): Only NP inside a metro city. Leopards.'
          ]
        },
        {
          title: 'Current Affairs 2023-26',
          items: [
            'Dehing Patkai NP: Assam — Coal mining controversy, NGT orders',
            'Great Nicobar BR: Port + trans-shipment hub proposed — environment vs development',
            'Kuno NP: Project Cheetah — 20 African cheetahs, 5+ deaths, monitoring ongoing',
            'Valley of Flowers: Climate change altering flower composition',
            'Corbett NP: Tiger census — highest tiger count in India',
            'Hemis NP (Ladakh): Snow leopard tourism growing',
            'Sundarbans NP: Sea level rise — 4 islands submerged since 1970s'
          ]
        }
      ],
      render: function (map, app) {
        DATA.allNationalParks.forEach(function (np) {
          var color = np.unesco ? '#FFD700' : np.important ? '#FF6347' : '#4FC3F7';
          var rad = np.unesco ? 9 : np.important ? 8 : 5;

          var marker = L.circleMarker([np.lat, np.lng], {
            radius: rad, color: '#000', fillColor: color, fillOpacity: 0.85, weight: 2
          }).addTo(map);

          marker.bindPopup(app.buildPopup(
            '🏞 ' + np.name,
            '<b>State:</b> ' + np.state + '<br><b>Area:</b> ' + np.area + ' sq km' +
            '<br><b>Animal:</b> ' + np.animal + '<br><b>Est.:</b> ' + np.year +
            (np.unesco ? '<br><b style="color:#FFD700">★ UNESCO World Heritage Site</b>' : ''),
            [np.animal, np.state, np.unesco ? 'UNESCO' : 'NP']
          ));

          marker.on('mouseover', function () { this.setRadius(rad + 3); this.setStyle({ fillOpacity: 1, weight: 3 }); });
          marker.on('mouseout', function () { this.setRadius(rad); this.setStyle({ fillOpacity: 0.85, weight: 2 }); });
          app.addLayer(marker);

          if (np.important || np.unesco) {
            app.addLayer(app.labelMarker([np.lat + 0.3, np.lng], np.name.split('(')[0].trim(), color, '8px'));
          }
        });

        app.addLayer(app.infoBox([34.0, 72.0],
          '<b style="color:#FFD700">India: 106 National Parks</b><br>' +
          'First: Corbett NP (1936)<br>' +
          'Largest: Hemis NP (4,400 km²)<br>' +
          'Smallest: S. Button Island (0.03 km²)<br>' +
          '<span style="color:#FF6347">Unique: Keibul Lamjao — floating NP</span>'
        ));

        app.addLayer(app.infoBox([8.0, 70.0],
          '<b style="color:#4FC3F7">UNESCO WHS NPs</b><br>' +
          'Kaziranga, Manas, Keoladeo<br>' +
          'Sundarbans, Nanda Devi<br>' +
          'Valley of Flowers<br>' +
          'Khangchendzonga (2016)<br>' +
          'Great Himalayan NP (2014)'
        ));

        app.showToast('Map 047: All 106 National Parks loaded', 'success');
      }
    },

    // ─────────────────────────────────────────────────────────────
    // MAP 048 — WILDLIFE SANCTUARIES (Important)
    // ─────────────────────────────────────────────────────────────
    {
      mapNum: 48,
      title: 'Wildlife Sanctuaries of India',
      subtitle: '567 WLS + Tiger Reserves · Key Sanctuaries · Conservation Status',
      mapConfig: { center: [22, 80], zoom: 5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Protected Areas',
          items: [
            { dot: '#FF6B6B', label: 'Tiger Reserve (53)' },
            { dot: '#FF6347', label: 'Important WLS (UPSC)' },
            { dot: '#FFA500', label: 'Other WLS' }
          ]
        },
        { sectionTitle: 'Current Affairs', items: [{ dot: '#00FF88', label: 'New TR 2021-25' }, { dot: '#FF6B6B', label: 'Poaching Concern' }] }
      ],
      info: [
        {
          title: 'Key Facts',
          facts: [
            { label: 'Wildlife Sanctuaries', value: '567 (India, 2024)' },
            { label: 'Tiger Reserves', value: '53 (as of 2023-24)' },
            { label: 'Latest Tiger Reserve', value: 'Dholpur-Karauli (Rajasthan, 2023, 53rd)' },
            { label: 'Project Tiger', value: '1973, Jim Corbett — first TR' },
            { label: 'Tiger count 2022', value: '3682 tigers' },
            { label: 'India share', value: '70% of world tiger population' },
            { label: 'NTCA', value: 'National Tiger Conservation Authority' }
          ]
        },
        {
          title: 'UPSC Key WLS',
          items: [
            'Gir WLS + NP: ONLY wild Asiatic Lion globally. ~700 lions.',
            'Chilika WLS: Largest coastal lagoon Asia. Irrawaddy dolphin.',
            'Gahirmatha Marine WLS: Largest Olive Ridley nesting globally.',
            'National Chambal Sanctuary: Gharial, Gangetic Dolphin, Skimmer.',
            'Vikramshila Gangetic Dolphin Sanctuary: Bihar. National Aquatic Animal.',
            'Wild Ass WLS (Kachchh): Indian Wild Ass. Only in India.',
            'Pobitora WLS: Highest density one-horned rhino in world. Assam.'
          ]
        },
        {
          title: 'Current Affairs 2023-26',
          items: [
            '2023: 53rd Tiger Reserve — Dholpur-Karauli, Rajasthan',
            '2022: Ranipur (UP) added as 52nd Tiger Reserve',
            '2022: Tiger census — 3682 tigers, UP has highest increase',
            '2024: Tiger deaths: 100+ annually (poaching, habitat loss, vehicle hit)',
            'Project Cheetah update: 20 African cheetahs, Kuno NP, mixed results',
            'Amrabad TR (Telangana): Largest tiger reserve in South India',
            '2024: NTCA reports human-wildlife conflict increasing near tiger reserves'
          ]
        }
      ],
      render: function (map, app) {
        DATA.tigerReserves.forEach(function (tr) {
          var marker = L.circleMarker([tr.lat, tr.lng], {
            radius: 8, color: '#000', fillColor: '#FF6B6B', fillOpacity: 0.85, weight: 2
          }).addTo(map);
          marker.bindPopup(app.buildPopup(
            '🐯 Tiger Reserve: ' + tr.name,
            '<b>State:</b> ' + tr.state + '<br><b>Est.:</b> ' + tr.year +
            (tr.tigers ? '<br><b>Tigers:</b> ' + tr.tigers : '') +
            '<br><b>Note:</b> ' + tr.note,
            ['Tiger Reserve', 'Project Tiger']
          ));
          marker.on('mouseover', function () { this.setRadius(12); this.setStyle({ fillOpacity: 1, weight: 3 }); });
          marker.on('mouseout', function () { this.setRadius(8); this.setStyle({ fillOpacity: 0.85, weight: 2 }); });
          app.addLayer(marker);
          app.addLayer(app.labelMarker([tr.lat + 0.25, tr.lng], tr.name.replace(' TR', '').replace(' Tiger Reserve', ''), '#FF6B6B', '7px'));
        });

        DATA.allWLS.filter(function (w) { return w.important; }).forEach(function (wls) {
          var marker = L.circleMarker([wls.lat, wls.lng], {
            radius: 6, color: '#000', fillColor: '#FF6347', fillOpacity: 0.8, weight: 2
          }).addTo(map);
          marker.bindPopup(app.buildPopup(
            '🦁 WLS: ' + wls.name,
            '<b>State:</b> ' + wls.state + '<br><b>Flagship:</b> ' + wls.animal,
            ['WLS', wls.animal]
          ));
          marker.on('mouseover', function () { this.setRadius(10); });
          marker.on('mouseout', function () { this.setRadius(6); });
          app.addLayer(marker);
        });

        app.addLayer(app.infoBox([32.0, 72.0],
          '<b style="color:#FF6B6B">Project Tiger Stats</b><br>' +
          '53 Tiger Reserves (2024)<br>' +
          '3682 tigers (Census 2022)<br>' +
          'India: 70% world tigers<br>' +
          '<span style="color:#00FF88">53rd TR: Dholpur-Karauli 2023</span>'
        ));

        app.addLayer(app.infoBox([8.5, 70.0],
          '<b style="color:#FF6347">Key WLS Highlights</b><br>' +
          'Gir: ~700 Asiatic Lions<br>' +
          'Gahirmatha: Olive Ridley nesting<br>' +
          'Chilika: Irrawaddy Dolphin<br>' +
          'Wild Ass WLS: Indian Wild Ass<br>' +
          'Pobitora: Highest rhino density'
        ));

        app.showToast('Map 048: Wildlife Sanctuaries loaded', 'success');
      }
    },

    // ─────────────────────────────────────────────────────────────
    // MAP 049 — BIOSPHERE RESERVES
    // ─────────────────────────────────────────────────────────────
    {
      mapNum: 49,
      title: 'Biosphere Reserves of India — All 18',
      subtitle: '18 BRs · 12 UNESCO MAB · Core-Buffer-Transition Zones',
      mapConfig: { center: [22, 80], zoom: 5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Biosphere Reserves',
          items: [
            { dot: '#FFD700', label: 'UNESCO MAB Recognized (12)' },
            { dot: '#00FF88', label: 'Non-UNESCO BR (6)' }
          ]
        },
        { sectionTitle: 'Current Affairs', items: [{ dot: '#FF6B6B', label: 'Under Threat' }] }
      ],
      info: [
        {
          title: 'Key Facts',
          facts: [
            { label: 'Total BRs India', value: '18 Biosphere Reserves' },
            { label: 'UNESCO MAB', value: '12 under Man & Biosphere Programme' },
            { label: 'First BR', value: 'Nilgiri BR (1986)' },
            { label: 'Largest', value: 'Great Rann of Kachchh (12,454 sq km)' },
            { label: 'Latest', value: 'Panna BR (2011)' },
            { label: 'Zones', value: '3: Core (strict) + Buffer (limited) + Transition (human use)' },
            { label: 'MAB Programme', value: 'UNESCO Man & Biosphere since 1971' }
          ]
        },
        {
          title: 'UPSC Key Points',
          items: [
            'Nilgiri BR (1986): First + Largest. TN+Kerala+KA. Nilgiri Tahr.',
            'Gulf of Mannar BR: First Marine BR. UNESCO. Dugong. 21 islands.',
            'Great Nicobar: UNESCO. Southernmost. Leatherback turtle. Port project controversy 2024.',
            'Simlipal BR: Melanistic (black) tigers. UNESCO. Odisha.',
            'Pachmarhi BR: Only MP. UNESCO. Giant squirrel. Satpura.',
            'Khangchendzonga: UNESCO WHS. First mixed WHS India (2016). Sikkim.',
            'Great Rann of Kachchh: Largest BR. Indian Wild Ass. Flamingo.'
          ]
        },
        {
          title: 'Current Affairs 2023-26',
          items: [
            '2024: Great Nicobar BR — trans-shipment port project controversy, MoEF clearance',
            '2024: Simlipal — melanistic tiger conservation program',
            '2023: Gulf of Mannar — dugong population declining, seagrass loss',
            'Agasthyamalai BR: Kaani tribe, traditional knowledge, Jeevani herb',
            'Nokrek BR: Citrus species gene bank — climate change threat to wild citrus',
            'Panna BR: Tiger reintroduced — Ken-Betwa Link Project controversy',
            'Cold Desert BR: Spiti Valley — tourism pressure, climate vulnerability'
          ]
        }
      ],
      render: function (map, app) {
        DATA.biosphereReserves.forEach(function (br) {
          var color = br.unesco ? '#FFD700' : '#00FF88';
          var rad = br.unesco ? 10 : 8;

          var ring = L.circleMarker([br.lat, br.lng], {
            radius: rad + 5, color: color, fillColor: color, fillOpacity: 0.1, weight: 1.5, dashArray: '4,4'
          }).addTo(map);
          app.addLayer(ring);

          var marker = L.circleMarker([br.lat, br.lng], {
            radius: rad, color: '#000', fillColor: color, fillOpacity: 0.9, weight: 2
          }).addTo(map);
          marker.bindPopup(app.buildPopup(
            '🌿 ' + br.name,
            '<b>State:</b> ' + br.state + '<br><b>Year:</b> ' + br.year +
            '<br><b>Area:</b> ' + br.area + ' sq km' +
            '<br><b>UNESCO:</b> ' + (br.unesco ? '✅ MAB Recognized' : '❌ Not yet') +
            '<br><b>UPSC:</b> ' + br.upsc,
            [br.unesco ? 'UNESCO MAB' : 'National BR', br.state]
          ));
          marker.on('mouseover', function () { this.setRadius(rad + 3); this.setStyle({ fillOpacity: 1 }); });
          marker.on('mouseout', function () { this.setRadius(rad); this.setStyle({ fillOpacity: 0.9 }); });
          app.addLayer(marker);
          app.addLayer(app.labelMarker([br.lat + 0.3, br.lng], br.name + (br.unesco ? ' 🌐' : ''), color, '8px'));
        });

        app.addLayer(app.infoBox([32.0, 72.0],
          '<b style="color:#FFD700">Biosphere Reserves: 18</b><br>' +
          'UNESCO MAB: 12<br>Non-UNESCO: 6<br>' +
          'First: Nilgiri (1986)<br>' +
          'Largest: Rann of Kachchh<br>' +
          '<span style="color:#aaa">Core + Buffer + Transition zones</span>'
        ));

        app.showToast('Map 049: Biosphere Reserves loaded', 'success');
      }
    },

    // ─────────────────────────────────────────────────────────────
    // MAP 050 — MANGROVES & CORAL REEFS
    // ─────────────────────────────────────────────────────────────
    {
      mapNum: 50,
      title: 'Mangroves & Coral Reefs of India',
      subtitle: 'Sundarbans · Pichavaram · Bhitarkanika · Lakshadweep · Gulf of Mannar',
      mapConfig: { center: [15, 78], zoom: 5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Mangroves',
          items: [
            { dot: '#006400', label: 'Sundarbans (World Largest)' },
            { dot: '#228B22', label: 'Major Mangroves' },
            { dot: '#90EE90', label: 'Minor Mangroves' }
          ]
        },
        {
          sectionTitle: 'Coral Reefs',
          items: [
            { dot: '#FF6347', label: 'Declining Reefs' },
            { dot: '#FFA500', label: 'Moderate Bleaching' },
            { dot: '#00FF88', label: 'Mostly Healthy' },
            { dot: '#00BFFF', label: 'Recovering' }
          ]
        }
      ],
      info: [
        {
          title: 'Key Facts — Mangroves',
          facts: [
            { label: 'Total area India', value: '4,992 sq km (ISFR 2021)' },
            { label: 'Global rank', value: '3rd largest' },
            { label: 'Trend', value: 'Increasing since 2019' },
            { label: 'Sundarbans', value: 'World largest mangrove — 10,000 sq km (total)' },
            { label: 'Blue Carbon', value: 'Mangroves store 3-5x more carbon than tropical forests' },
            { label: 'Legal protection', value: 'Coastal Regulation Zone (CRZ) notifications' }
          ]
        },
        {
          title: 'UPSC Key Points — Coral',
          items: [
            'Coral bleaching: SST rise >1°C above normal → expels zooxanthellae → whitens.',
            'Zooxanthellae: photosynthetic algae providing 90% coral nutrition.',
            'Ocean acidification: CO2 → carbonic acid → dissolves aragonite skeleton.',
            'Lakshadweep: 1998 El Nino bleached 70-90% coral.',
            'Gulf of Kachchh: First Marine NP (1982). Northernmost reefs.',
            'A&N most pristine due to remoteness.',
            'Seagrass meadows: habitat for dugong. Declining globally.'
          ]
        },
        {
          title: 'Current Affairs 2023-26',
          items: [
            '2024: Mass coral bleaching event — Indian Ocean SST record highs',
            'Lakshadweep 2024: 4th global bleaching event declared by ICRI',
            'Sundarbans: 4 islands submerged since 1970s due to sea level rise',
            'Bhitarkanika mangroves expanding — successful conservation',
            'CRZ Notification 2019: diluted mangrove protection — controversy ongoing',
            'Mangrove Alliance for Climate (MAC): India joined 2022',
            'Odisha Olive Ridley: Record 6.97 lakh turtles nested at Rushikulya 2024'
          ]
        }
      ],
      render: function (map, app) {
        DATA.mangroves.forEach(function (m) {
          var isSundar = m.name === 'Sundarbans';
          var color = isSundar ? '#006400' : (m.area && parseInt(m.area) > 500) ? '#228B22' : '#90EE90';
          var rad = isSundar ? 14 : 9;

          var marker = L.circleMarker([m.lat, m.lng], {
            radius: rad, color: '#000', fillColor: color, fillOpacity: 0.9, weight: 2
          }).addTo(map);
          marker.bindPopup(app.buildPopup(
            '🌱 ' + m.name,
            '<b>State:</b> ' + m.state + '<br><b>Area:</b> ' + m.area +
            '<br><b>Species:</b> ' + m.mainSpecies + '<br><b>UPSC:</b> ' + m.upsc,
            ['Mangrove', m.state]
          ));
          marker.on('mouseover', function () { this.setRadius(rad + 4); this.setStyle({ fillOpacity: 1, weight: 3 }); });
          marker.on('mouseout', function () { this.setRadius(rad); this.setStyle({ fillOpacity: 0.9, weight: 2 }); });
          app.addLayer(marker);
          app.addLayer(app.labelMarker([m.lat + 0.4, m.lng], m.name, color, '8px'));
        });

        var condColors = { 'Mostly healthy': '#00FF88', 'Moderate bleaching': '#FFA500', 'Declining': '#FF6347', 'Recovering': '#00BFFF', 'Degraded': '#FF6347' };
        DATA.coralReefs.forEach(function (reef) {
          var color = condColors[reef.condition] || '#FFF';
          var marker = L.circleMarker([reef.lat, reef.lng], {
            radius: 11, color: '#000', fillColor: color, fillOpacity: 0.9, weight: 2
          }).addTo(map);
          marker.bindPopup(app.buildPopup(
            '🪸 ' + reef.name,
            '<b>Type:</b> ' + reef.type + '<br><b>Condition:</b> ' + reef.condition +
            '<br><b>State:</b> ' + reef.state + '<br><b>UPSC:</b> ' + reef.upsc,
            ['Coral', reef.condition]
          ));
          marker.on('mouseover', function () { this.setRadius(15); });
          marker.on('mouseout', function () { this.setRadius(11); });
          app.addLayer(marker);
          app.addLayer(app.labelMarker([reef.lat - 0.6, reef.lng], reef.name, color, '8px'));
        });

        var sundPoly = L.polygon([
          [22.5,88.0],[22.5,89.5],[21.5,90.0],[21.0,89.5],[21.0,88.5],[22.0,88.0],[22.5,88.0]
        ], { color: '#006400', fillColor: '#006400', fillOpacity: 0.12, weight: 2, dashArray: '5,5' }).addTo(map);
        sundPoly.bindPopup(app.buildPopup('🌱 Sundarbans', "World's Largest Mangrove. UNESCO WHS. Royal Bengal Tiger. Sea level rise threat.", ['UNESCO', 'Tiger']));
        app.addLayer(sundPoly);

        app.addLayer(app.infoBox([26.0, 71.0],
          '<b style="color:#228B22">Mangroves: 4,992 km²</b><br>' +
          '3rd globally. Increasing trend.<br>' +
          'Sundarbans: world largest<br>' +
          '<span style="color:#FFD700">Blue Carbon: 5x tropical forest</span>'
        ));

        app.addLayer(app.infoBox([7.0, 68.0],
          '<b style="color:#FFA500">🪸 Coral Bleaching 2024</b><br>' +
          '4th global bleaching event (ICRI)<br>' +
          'Lakshadweep severely affected<br>' +
          'SST record high Indian Ocean'
        ));

        app.showToast('Map 050: Mangroves & Coral Reefs loaded', 'success');
      }
    },

    // ─────────────────────────────────────────────────────────────
    // MAP 051 — RAMSAR SITES & WETLANDS
    // ─────────────────────────────────────────────────────────────
    {
      mapNum: 51,
      title: 'Ramsar Sites & Wetlands of India',
      subtitle: '40+ Ramsar Sites · Chilika · Sundarbans · Lonar Lake · Vembanad',
      mapConfig: { center: [22, 80], zoom: 5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Wetland Types',
          items: [
            { dot: '#4FC3F7', label: 'Ramsar Site (lake/lagoon)' },
            { dot: '#66BB6A', label: 'Ramsar (mangrove/coastal)' },
            { dot: '#FFCA28', label: 'Ramsar (floodplain/marsh)' },
            { dot: '#AB47BC', label: 'Ramsar (mountain/high altitude)' }
          ]
        },
        { sectionTitle: 'Current Affairs', items: [{ dot: '#00FF88', label: 'Added 2020-25' }, { dot: '#FF6B6B', label: 'Under Threat' }] }
      ],
      info: [
        {
          title: 'Key Facts',
          facts: [
            { label: 'India Ramsar Sites', value: '75+ (2024, India has most in Asia)' },
            { label: 'First Ramsar', value: 'Chilika (1981) + Keoladeo (1981)' },
            { label: 'Largest Ramsar', value: 'Chilika Lake (1,100 sq km)' },
            { label: 'Largest Ramsar (India)', value: 'Vembanad-Kol (1,512 sq km)' },
            { label: 'Ramsar Convention', value: '1971 (Iran). Entered force 1975.' },
            { label: 'India joined', value: '1981' },
            { label: 'Smallest Ramsar', value: 'Nanda Lake, Goa (0.42 sq km)' }
          ]
        },
        {
          title: 'UPSC Key Ramsar Sites',
          items: [
            'Chilika Lake (Odisha): Asia\'s largest coastal lagoon. Irrawaddy dolphin.',
            'Keoladeo/Bharatpur: UNESCO WHS. Siberian Crane wintering (now absent).',
            'Loktak Lake (Manipur): Largest freshwater NE India. Phumdis. Sangai.',
            'Wular Lake (J&K): Largest freshwater India.',
            'Vembanad-Kol (Kerala): Largest Ramsar. Backwaters. Kuttanad below sea level.',
            'Lonar Lake (Maharashtra): Meteorite crater lake. Alkaline-saline. Unique.',
            'Tsomoriri (Ladakh): Highest altitude Ramsar. Bar-headed Goose.'
          ]
        },
        {
          title: 'Current Affairs 2023-26',
          items: [
            '2022: India added 26 new Ramsar sites (largest single-year addition)',
            '2024: India total Ramsar sites 75+ (most in Asia)',
            'East Kolkata Wetland: threatened by urbanization — Ramsar heritage site',
            'Pallikaranai (Chennai marsh): urban encroachment, flooding buffer',
            'Lonar Lake: unique alkaline lake, ecology study UNESCO designation',
            'Wular Lake (J&K): Encroachment, siltation, Jhelum connectivity issues',
            'World Wetlands Day: Feb 2 — Ramsar Convention (1971)'
          ]
        }
      ],
      render: function (map, app) {
        DATA.ramsar.forEach(function (r, idx) {
          var isNew = r.year >= 2020;
          var isCoastal = r.name.includes('Mangrove') || r.name.includes('Estuary') || r.name.includes('Vembanad');
          var isMountain = r.name.includes('Tsomoriri') || r.name.includes('Renuka') || r.name.includes('Pong');
          var color = isNew ? '#00FF88' : isCoastal ? '#66BB6A' : isMountain ? '#AB47BC' : '#4FC3F7';
          var rad = isNew ? 7 : (r.name.includes('Chilika') || r.name.includes('Vembanad') || r.name.includes('Sundarbans') ? 10 : 6);

          var marker = L.circleMarker([r.lat, r.lng], {
            radius: rad, color: '#000', fillColor: color, fillOpacity: 0.85, weight: 2
          }).addTo(map);
          marker.bindPopup(app.buildPopup(
            '💧 ' + r.name,
            '<b>State:</b> ' + r.state + '<br><b>Ramsar Year:</b> ' + r.year +
            '<br><b>Area:</b> ' + r.area + '<br><b>UPSC:</b> ' + r.upsc,
            ['Ramsar', r.state]
          ));
          marker.on('mouseover', function () { this.setRadius(rad + 3); this.setStyle({ fillOpacity: 1 }); });
          marker.on('mouseout', function () { this.setRadius(rad); this.setStyle({ fillOpacity: 0.85 }); });
          app.addLayer(marker);

          if (rad >= 8 || isNew) {
            app.addLayer(app.labelMarker([r.lat + 0.25, r.lng], r.name, color, '7px'));
          }
        });

        app.addLayer(app.infoBox([32.0, 72.0],
          '<b style="color:#4FC3F7">India Ramsar 2024</b><br>' +
          '75+ sites (most in Asia)<br>' +
          'First: Chilika + Keoladeo (1981)<br>' +
          '<span style="color:#00FF88">2022: 26 sites added (record)</span><br>' +
          'World Wetlands Day: Feb 2'
        ));

        app.addLayer(app.infoBox([8.5, 70.0],
          '<b style="color:#AB47BC">Unique Ramsar Sites</b><br>' +
          'Tsomoriri: highest altitude<br>' +
          'Lonar: meteorite crater lake<br>' +
          'East Kolkata: urban sewage wetland<br>' +
          'Nanda, Goa: smallest (0.42 km²)'
        ));

        app.showToast('Map 051: Ramsar Sites loaded', 'success');
      }
    },

    // ─────────────────────────────────────────────────────────────
    // MAP 052 — BIODIVERSITY HOTSPOTS & MIGRATORY BIRDS
    // ─────────────────────────────────────────────────────────────
    {
      mapNum: 52,
      title: 'Biodiversity Hotspots & Migratory Bird Routes',
      subtitle: '4 Hotspots in India · Central Asian Flyway · Key Wintering Sites',
      mapConfig: { center: [22, 80], zoom: 4, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Biodiversity Hotspots',
          items: [
            { color: '#FFD700', label: 'Western Ghats & Sri Lanka' },
            { color: '#00BFFF', label: 'Eastern Himalaya' },
            { color: '#FF69B4', label: 'Indo-Burma' },
            { color: '#FF6347', label: 'Sundaland (marginal)' }
          ]
        },
        {
          sectionTitle: 'Migratory Birds',
          items: [
            { line: '#00BFFF', label: 'Central Asian Flyway' },
            { dot: '#FFD700', label: 'Key Wintering Sites' },
            { dot: '#FF6347', label: 'Amur Falcon Site' }
          ]
        }
      ],
      info: [
        {
          title: 'Key Facts — Biodiversity Hotspots',
          facts: [
            { label: 'Global hotspots', value: '36 (as of 2024)' },
            { label: 'India hotspots', value: '4 (W Ghats, E Himalaya, Indo-Burma, Sundaland)' },
            { label: 'Criteria', value: '>1500 endemic plant species + lost 70%+ primary vegetation' },
            { label: 'W Ghats rank', value: 'One of 8 "hottest hotspots" globally' },
            { label: 'CEPF', value: 'Critical Ecosystem Partnership Fund manages' }
          ]
        },
        {
          title: 'UPSC Key Points',
          items: [
            'Norman Myers (1988): concept of biodiversity hotspots',
            'Criteria: 1500+ endemic plants + <30% original vegetation remaining',
            'W Ghats: 5000+ plants, 139 mammals, 508 birds. Nilgiri Tahr, Lion-tailed Macaque.',
            'E Himalaya: 3160 endemic plants. Snow Leopard. Includes Bhutan, Nepal, NE India.',
            'Indo-Burma: Hoolock Gibbon, Golden Langur, Tiger. Nagaland, Manipur.',
            'Central Asian Flyway: connects Siberia/Arctic to South Asia. 500+ species.',
            'Amur Falcon: Doyang Lake, Nagaland. 100,000+ gather. Largest raptor gathering.'
          ]
        },
        {
          title: 'Current Affairs 2023-26',
          items: [
            '2024: 4th global coral bleaching event — all 4 India hotspots impacted',
            'W Ghats: Kasturirangan Report implementation — Eco-Sensitive Area demarcation',
            'Eastern Himalaya: GLOFs increasing. Teesta GLOF Oct 2023 (Sikkim).',
            'Amur Falcon: Doyang Lake conservation model — community-led, awarded',
            'Siberian Crane: No sighting at Bharatpur for many years — possibly lost route',
            'Flamingo mass death Sambhar 2019: Avian cholera, discussed in 2023-24 exams',
            'Great Indian Bustard: SC ordered underground power cables in critical habitat'
          ]
        }
      ],
      render: function (map, app) {
        DATA.biodiversityHotspots.forEach(function (hs) {
          var poly = L.polygon(hs.coords, {
            color: hs.color, fillColor: hs.color, fillOpacity: 0.15, weight: 2.5, dashArray: '6,4'
          }).addTo(map);
          poly.bindPopup(app.buildPopup(
            '🌿 Hotspot: ' + hs.name,
            '<b>Species:</b> ' + hs.totalSpp + '<br><b>Endemic:</b> ' + hs.endemic +
            '<br><b>Threat:</b> ' + hs.threat + '<br><b>UPSC:</b> ' + hs.upsc,
            ['Biodiversity Hotspot', hs.name]
          ));
          poly.on('mouseover', function () { this.setStyle({ fillOpacity: 0.3, weight: 3 }); });
          poly.on('mouseout', function () { this.setStyle({ fillOpacity: 0.15, weight: 2.5 }); });
          app.addLayer(poly);
          var mid = hs.coords[Math.floor(hs.coords.length / 2)];
          app.addLayer(app.labelMarker(mid, hs.name.split('&')[0].trim(), hs.color, '10px'));
        });

        var cafLine = L.polyline(DATA.migratoryBirds.centralAsianFlyway.path, {
          color: '#00BFFF', weight: 3, opacity: 0.7, dashArray: '8,4'
        }).addTo(map);
        cafLine.bindPopup(app.buildPopup('✈ Central Asian Flyway', 'Connects Siberia/Arctic to South Asia<br>500+ species use this route', ['Flyway']));
        app.addLayer(cafLine);

        DATA.migratoryBirds.keyWintering.forEach(function (site) {
          var isAmur = site.name.includes('Doyang');
          var color = isAmur ? '#FF6347' : '#FFD700';
          var rad = isAmur ? 10 : 7;

          var marker = L.circleMarker([site.lat, site.lng], {
            radius: rad, color: '#000', fillColor: color, fillOpacity: 0.9, weight: 2
          }).addTo(map);
          marker.bindPopup(app.buildPopup(
            '🦢 ' + site.name,
            '<b>Birds:</b> ' + site.birds + '<br><b>UPSC:</b> ' + site.upsc,
            ['Wintering Site']
          ));
          marker.on('mouseover', function () { this.setRadius(rad + 3); });
          marker.on('mouseout', function () { this.setRadius(rad); });
          app.addLayer(marker);
          app.addLayer(app.labelMarker([site.lat + 0.3, site.lng], site.name, color, '8px'));
        });

        app.addLayer(app.infoBox([34.0, 73.0],
          '<b style="color:#FFD700">36 Global Hotspots</b><br>' +
          'India has 4 hotspots<br>' +
          'W Ghats: 8 "hottest" globally<br>' +
          '<span style="color:#aaa">Criteria: 1500 endemic plants + 70%+ loss</span>'
        ));

        app.showToast('Map 052: Biodiversity Hotspots loaded', 'success');
      }
    },

    // ─────────────────────────────────────────────────────────────
    // MAP 053 — ENDANGERED SPECIES OF INDIA
    // ─────────────────────────────────────────────────────────────
    {
      mapNum: 53,
      title: 'Endangered Species of India',
      subtitle: 'CR · EN · VU · Extinct in India · IUCN Status · Conservation Projects',
      mapConfig: { center: [22, 80], zoom: 5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'IUCN Status',
          items: [
            { dot: '#FF0000', label: 'Critically Endangered (CR)' },
            { dot: '#FF6347', label: 'Endangered (EN)' },
            { dot: '#FFA500', label: 'Vulnerable (VU)' },
            { dot: '#AAAAAA', label: 'Extinct in India (reintroduced)' },
            { dot: '#00FF88', label: 'Recovering/Least Concern' }
          ]
        },
        { sectionTitle: 'Current Affairs', items: [{ dot: '#00FF88', label: 'Project Success 2024' }, { dot: '#FF6B6B', label: 'New Threat 2024' }] }
      ],
      info: [
        {
          title: 'Key Facts',
          facts: [
            { label: 'IUCN CR in India', value: 'Gharial, Great Indian Bustard, Hangul, Indian Vulture' },
            { label: 'IUCN EN', value: 'Asiatic Lion, Gangetic Dolphin, Red Panda, Golden Langur, Pygmy Hog' },
            { label: 'IUCN VU', value: 'Bengal Tiger, Snow Leopard, One-horned Rhino, Dugong, Olive Ridley' },
            { label: 'Extinct in India', value: 'Asiatic Cheetah (20 African cheetahs reintroduced 2022)' },
            { label: 'National Aquatic Animal', value: 'Gangetic River Dolphin' },
            { label: 'Project Tiger', value: '3682 tigers (2022 census)' }
          ]
        },
        {
          title: 'UPSC Key Species',
          items: [
            'Great Indian Bustard (CR): ~100 left. Desert NP Rajasthan. SC: underground cables.',
            'Gharial (CR): Chambal only. Fish-eating. Only long snout crocodilian.',
            'Hangul/Kashmir Stag (CR): ~300. Dachigam NP only. J&K state animal.',
            'Indian Vulture (CR): 99% crash due to Diclofenac. Jatayu conservation centers.',
            'Gangetic Dolphin (EN): National Aquatic Animal. Vikramshila Sanctuary.',
            'Red Panda (EN): Sikkim state animal. Bamboo-dependent. Climate threat.',
            'Pygmy Hog (EN): Rarest pig. <250. Manas NP. Captive breeding program Assam.'
          ]
        },
        {
          title: 'Current Affairs 2023-26',
          items: [
            '2022-25: Project Cheetah — 20 African cheetahs, Kuno NP. Deaths > 5. Debate ongoing.',
            'Great Indian Bustard: Supreme Court 2021 + 2024 orders on power line cables.',
            'Tiger 2022 census: 3682 tigers — highest ever. UP saw largest increase.',
            '2024: Nilgiri Tahr population increasing — Eravikulam NP protection.',
            '2024: Golden Langur — Chakrashila WLS community conservation praised.',
            '2023: Olive Ridley record nesting — Rushikulya, Gahirmatha (Odisha)',
            'Vulture: Diclofenac ban, Meloxicam substitute — population slowly recovering'
          ]
        }
      ],
      render: function (map, app) {
        var iucnColors = {
          'Critically Endangered': '#FF0000', 'Endangered': '#FF6347',
          'Vulnerable': '#FFA500', 'Least Concern': '#00FF88',
          'Near Threatened': '#FFEB3B', 'Extinct in India': '#AAAAAA'
        };

        DATA.endangeredSpecies.forEach(function (sp) {
          var color = iucnColors[sp.status] || '#FFF';
          var rad = sp.status === 'Critically Endangered' ? 11 : sp.status === 'Endangered' ? 9 : 7;

          var marker = L.circleMarker([sp.lat, sp.lng], {
            radius: rad, color: '#000', fillColor: color, fillOpacity: sp.status === 'Extinct in India' ? 0.5 : 0.9, weight: 2
          }).addTo(map);
          marker.bindPopup(app.buildPopup(
            '🦁 ' + sp.name,
            '<b>IUCN:</b> ' + sp.status + ' (' + sp.iucnCode + ')' +
            '<br><b>Population:</b> ' + sp.population +
            '<br><b>Habitat:</b> ' + sp.habitat +
            '<br><b>UPSC:</b> ' + sp.upsc,
            [sp.status, sp.iucnCode]
          ));
          marker.on('mouseover', function () { this.setRadius(rad + 4); this.setStyle({ fillOpacity: 1, weight: 3 }); });
          marker.on('mouseout', function () { this.setRadius(rad); this.setStyle({ fillOpacity: sp.status === 'Extinct in India' ? 0.5 : 0.9, weight: 2 }); });
          app.addLayer(marker);
          app.addLayer(app.labelMarker([sp.lat + 0.35, sp.lng], sp.name, color, '8px'));
        });

        app.addLayer(app.infoBox([33.0, 72.0],
          '<b style="color:#FF0000">Critically Endangered</b><br>' +
          'Gharial (~650-900)<br>Great Indian Bustard (~100)<br>' +
          'Hangul Kashmir Stag (~300)<br>Indian Vulture (99% crashed)<br>' +
          '<span style="color:#FFD700">All need URGENT action</span>'
        ));

        app.addLayer(app.infoBox([8.5, 70.0],
          '<b style="color:#AAAAAA">Project Cheetah 2022</b><br>' +
          '20 African cheetahs at Kuno NP<br>' +
          'Deaths: 5+ (disease, territory)<br>' +
          '<span style="color:#FFA500">Debate: African vs Iranian cheetah</span>'
        ));

        app.showToast('Map 053: Endangered Species loaded', 'success');
      }
    },

    // ─────────────────────────────────────────────────────────────
    // MAP 054 — CONSERVATION PROJECTS & PROGRAMMES
    // ─────────────────────────────────────────────────────────────
    {
      mapNum: 54,
      title: 'Conservation Projects & Programmes',
      subtitle: 'Project Tiger · Elephant · Snow Leopard · Cheetah · Vulture · Dolphin',
      mapConfig: { center: [22, 80], zoom: 5, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Conservation Projects',
          items: [
            { dot: '#FF6B6B', label: 'Project Tiger (53 reserves)' },
            { dot: '#4FC3F7', label: 'Project Elephant (30 reserves)' },
            { dot: '#AB47BC', label: 'Project Snow Leopard' },
            { dot: '#AAAAAA', label: 'Project Cheetah (Kuno NP)' },
            { dot: '#FFCA28', label: 'Project Vulture' },
            { dot: '#00BFFF', label: 'Project Dolphin' },
            { dot: '#00FF88', label: 'Sea Turtle Conservation' }
          ]
        },
        { sectionTitle: 'Current Affairs', items: [{ dot: '#00FF88', label: 'New 2022-25' }, { dot: '#FF6B6B', label: 'Under Review' }] }
      ],
      info: [
        {
          title: 'Key Conservation Projects',
          facts: [
            { label: 'Project Tiger', value: '1973. 53 TRs. NTCA. 3682 tigers (2022).' },
            { label: 'Project Elephant', value: '1992. 30 ERs. Human-elephant conflict.' },
            { label: 'Project Snow Leopard', value: '2009. 5 states. Camera trapping.' },
            { label: 'Project Cheetah', value: '2022. Kuno NP MP. 20 African cheetahs.' },
            { label: 'Project Vulture', value: '2006. Diclofenac ban. 9 CR species.' },
            { label: 'Project Dolphin', value: '2020. Gangetic + Irrawaddy.' },
            { label: 'Sea Turtle', value: '1999. Gahirmatha + Bhitarkanika.' }
          ]
        },
        {
          title: 'UPSC Key Points',
          items: [
            'NTCA: National Tiger Conservation Authority (statutory body under WPA).',
            'CZA: Central Zoo Authority. Controls zoos + captive breeding.',
            'Wildlife Crime Control Bureau (WCCB): under MoEF.',
            'TRAFFIC: monitors wildlife trade — India partner.',
            'CITES: Convention on International Trade in Endangered Species.',
            'CBD: Convention on Biological Diversity. Kunming-Montreal GBF 2022.',
            'WPA 1972: India\'s main wildlife protection law. Schedules I-VI.'
          ]
        },
        {
          title: 'Current Affairs 2023-26',
          items: [
            'Kunming-Montreal GBF (Dec 2022): 30x30 target — protect 30% land & ocean by 2030',
            'Project Cheetah 2022-25: 20 released, 5+ deaths, monitoring intensive',
            'Tiger Census 2022: 3682 — UP overtook Uttarakhand in growth rate',
            '2024: Wild Life Protection (Amendment) Act review ongoing',
            'Gaj Utsav 2023: Elephant corridors — 101 notified across India',
            '2024: Snow Leopard census — India initiating first full survey',
            'One Health approach: human-wildlife-animal health integrated (post-COVID)'
          ]
        }
      ],
      render: function (map, app) {
        var projectColors = {
          'Project Tiger': '#FF6B6B', 'Project Elephant': '#4FC3F7',
          'Project Snow Leopard': '#AB47BC', 'Project Cheetah': '#AAAAAA',
          'Project Vulture': '#FFCA28', 'Project Dolphin': '#00BFFF',
          'Sea Turtle Conservation': '#00FF88', 'Project Rhino': '#FFA500',
          'Project Gharial': '#FF69B4', 'Red Panda Conservation': '#EF5350'
        };

        DATA.conservationProjects.forEach(function (proj) {
          var color = projectColors[proj.name] || '#FFD700';

          // Draw representative markers for each project
          var locations = {
            'Project Tiger': [[29.53, 78.78], [22.30, 80.65], [21.95, 89.18], [11.67, 76.64], [26.70, 91.00]],
            'Project Elephant': [[28.50, 80.85], [9.53, 77.13], [26.73, 89.53], [11.67, 76.64]],
            'Project Snow Leopard': [[33.90, 77.60], [31.90, 77.50], [30.38, 79.96], [27.70, 88.30], [28.0, 94.5]],
            'Project Cheetah': [[24.0, 78.0]],
            'Project Vulture': [[25.0, 79.0], [28.65, 77.2], [17.4, 78.5]],
            'Project Dolphin': [[26.0, 84.0], [19.72, 85.32], [25.40, 87.30]],
            'Sea Turtle Conservation': [[20.70, 86.90], [20.25, 86.65], [7.0, 93.84]],
            'Project Rhino': [[26.58, 93.37], [26.70, 91.00], [26.24, 91.96]],
            'Project Gharial': [[26.40, 78.50], [27.50, 80.50]],
            'Red Panda Conservation': [[27.70, 88.50], [27.50, 94.5]]
          };

          var locs = locations[proj.name] || [[22, 80]];
          locs.forEach(function (loc) {
            var m = L.circleMarker(loc, {
              radius: 8, color: '#000', fillColor: color, fillOpacity: 0.85, weight: 2
            }).addTo(map);
            m.bindPopup(app.buildPopup(
              '🔬 ' + proj.name,
              '<b>Started:</b> ' + proj.year + '<br><b>Target:</b> ' + proj.target +
              '<br><b>Reserves:</b> ' + proj.reserves + '<br><b>UPSC:</b> ' + proj.upsc,
              [proj.name, proj.year.toString()]
            ));
            m.on('mouseover', function () { this.setRadius(12); this.setStyle({ fillOpacity: 1, weight: 3 }); });
            m.on('mouseout', function () { this.setRadius(8); this.setStyle({ fillOpacity: 0.85, weight: 2 }); });
            app.addLayer(m);
          });
        });

        // Project labels
        app.addLayer(app.labelMarker([29.53, 79.0], 'Project Tiger\n(53 TRs)', '#FF6B6B', '9px'));
        app.addLayer(app.labelMarker([10.0, 77.0], 'Project Elephant', '#4FC3F7', '9px'));
        app.addLayer(app.labelMarker([33.0, 76.0], 'Project Snow Leopard', '#AB47BC', '9px'));
        app.addLayer(app.labelMarker([24.5, 78.5], 'Project Cheetah\n(Kuno NP)', '#AAAAAA', '9px'));
        app.addLayer(app.labelMarker([25.5, 80.0], 'Project Dolphin', '#00BFFF', '9px'));
        app.addLayer(app.labelMarker([20.0, 87.0], 'Sea Turtle (Gahirmatha)', '#00FF88', '9px'));

        app.addLayer(app.infoBox([33.0, 84.0],
          '<b style="color:#FFD700">Key Conservation Laws</b><br>' +
          'WPA 1972: Wildlife Protection Act<br>' +
          'EPA 1986: Environment Protection<br>' +
          'FCA 1980: Forest Conservation<br>' +
          'FRA 2006: Forest Rights Act<br>' +
          '<span style="color:#00FF88">BD Act 2002: Biological Diversity</span>'
        ));

        app.addLayer(app.infoBox([8.5, 70.0],
          '<b style="color:#FFD700">Global Conventions</b><br>' +
          'CITES: Wildlife trade<br>' +
          'CBD: Biological Diversity<br>' +
          'Ramsar: Wetlands<br>' +
          'WHC: World Heritage<br>' +
          '<span style="color:#00FF88">KM-GBF: 30x30 by 2030</span>'
        ));

        app.showToast('Map 054: Conservation Projects loaded', 'success');
      }
    },

    // ─────────────────────────────────────────────────────────────
    // MAP 055 — MIGRATORY BIRDS & INVASIVE SPECIES
    // ─────────────────────────────────────────────────────────────
    {
      mapNum: 55,
      title: 'Migratory Birds & Invasive Species',
      subtitle: 'Flyways · Wintering Sites · Amur Falcon · Invasive Plants & Animals',
      mapConfig: { center: [25, 80], zoom: 4, tileStyle: 'dark' },
      legend: [
        {
          sectionTitle: 'Migratory Birds',
          items: [
            { line: '#00BFFF', label: 'Central Asian Flyway' },
            { dot: '#FFD700', label: 'Key Wintering Sites' },
            { dot: '#FF6347', label: 'Amur Falcon (Nagaland)' }
          ]
        },
        {
          sectionTitle: 'Invasive Species',
          items: [
            { dot: '#FF69B4', label: 'Invasive Plants (Lantana, Prosopis)' },
            { dot: '#8B4513', label: 'Invasive Animals (Common Myna, Tilapia)' },
            { dot: '#FF6B6B', label: 'Ecological Damage Zone' }
          ]
        }
      ],
      info: [
        {
          title: 'Key Facts — Migratory Birds',
          facts: [
            { label: 'Global flyways', value: '9 flyways recognized globally' },
            { label: 'India flyway', value: 'Central Asian Flyway (CAF)' },
            { label: 'Species using CAF', value: '500+ migratory species' },
            { label: 'Amur Falcon', value: 'Doyang Lake, Nagaland — 100,000+ gather' },
            { label: 'World Migratory Bird Day', value: '2nd Saturday May & October' },
            { label: 'AEWA', value: 'African-Eurasian Waterbird Agreement — India signatory' }
          ]
        },
        {
          title: 'UPSC Key Invasive Species',
          items: [
            'Lantana camara: Invasive shrub replacing native undergrowth. Major threat to forests.',
            'Prosopis juliflora (Vilayati Babool): Invasive in Rajasthan grasslands. Displaces native plants.',
            'Water Hyacinth (Eichhornia crassipes): Chokes freshwater bodies. Blocks light. Ramsar threat.',
            'Parthenium hysterophorus: Invasive weed. Allergy-causing. Replaced native grasses.',
            'Common Myna: Listed among world\'s 100 worst invasive species (IUCN).',
            'Red-eared Slider Turtle: Introduced as pets. Competing with native turtles.',
            'Suckermouth Catfish (Devil Fish): Invasive in Indian rivers. ICAR concern.'
          ]
        },
        {
          title: 'Current Affairs 2023-26',
          items: [
            'Convention on Migratory Species (CMS) COP14 2024: Samarkand. India party.',
            'Amur Falcon: Doyang Lake community model — International recognition',
            'Siberian Crane: No confirmed sighting Bharatpur 15+ years — practically extinct from India route',
            'Water Hyacinth: Dal Lake, Loktak, Chilika — management challenge',
            'Lantana removal: Project Elephant corridors clearing lantana thickets',
            'Common Myna: IUCN notes spread accelerating in urban India',
            'Suckermouth Catfish: ICAR 2024 report on spread in Ganga, Cauvery, Krishna'
          ]
        }
      ],
      render: function (map, app) {
        // Central Asian Flyway
        var cafLine = L.polyline(DATA.migratoryBirds.centralAsianFlyway.path, {
          color: '#00BFFF', weight: 4, opacity: 0.75, dashArray: '10,5'
        }).addTo(map);
        cafLine.bindPopup(app.buildPopup('✈ Central Asian Flyway', '500+ species. Siberia→South Asia.', ['Flyway']));
        app.addLayer(cafLine);

        // Directional arrows
        DATA.migratoryBirds.centralAsianFlyway.path.forEach(function (pt, idx) {
          if (idx % 2 === 0 && idx > 0) {
            var arrow = L.divIcon({ className: '', html: '<div style="color:#00BFFF;font-size:16px">▼</div>', iconAnchor: [8, 8] });
            app.addLayer(L.marker(pt, { icon: arrow, interactive: false }));
          }
        });

        // Wintering sites
        DATA.migratoryBirds.keyWintering.forEach(function (site) {
          var isAmur = site.name.includes('Doyang');
          var color = isAmur ? '#FF6347' : '#FFD700';
          var rad = isAmur ? 11 : 7;

          var marker = L.circleMarker([site.lat, site.lng], {
            radius: rad, color: '#000', fillColor: color, fillOpacity: 0.9, weight: 2
          }).addTo(map);
          marker.bindPopup(app.buildPopup(
            '🦢 ' + site.name,
            '<b>Birds:</b> ' + site.birds + '<br><b>UPSC:</b> ' + site.upsc,
            ['Wintering']
          ));
          marker.on('mouseover', function () { this.setRadius(rad + 4); });
          marker.on('mouseout', function () { this.setRadius(rad); });
          app.addLayer(marker);
          app.addLayer(app.labelMarker([site.lat + 0.3, site.lng], site.name, color, '8px'));
        });

        // Invasive species zones
        var invasiveSpecies = [
          { name: 'Lantana camara (Invasive)', lat: 22.0, lng: 79.0, color: '#FF69B4', note: 'Replaces native forest understory. Major forest threat.' },
          { name: 'Prosopis juliflora (Vilayati Babool)', lat: 26.5, lng: 72.0, color: '#FF69B4', note: 'Rajasthan grasslands. Displaces native plants. Water-intensive.' },
          { name: 'Water Hyacinth (Chilika)', lat: 19.72, lng: 85.32, color: '#FF69B4', note: 'Chokes Chilika Lake. Blocks migratory bird habitat.' },
          { name: 'Parthenium (N India)', lat: 28.6, lng: 77.2, color: '#FF69B4', note: 'Allergic weed. Replaced native grasses. Spreading rapidly.' },
          { name: 'Eichhornia (Dal Lake)', lat: 34.0, lng: 74.8, color: '#FF69B4', note: 'Water hyacinth choking Dal Lake. J&K concern.' },
          { name: 'Common Myna (Urban India)', lat: 19.07, lng: 72.87, color: '#8B4513', note: 'IUCN: 100 worst invasives. Competes with native birds.' },
          { name: 'Suckermouth Catfish (Ganga)', lat: 26.0, lng: 82.0, color: '#8B4513', note: 'Devil fish. Invasive rivers. ICAR 2024 alert.' },
          { name: 'Red-eared Slider Turtle', lat: 13.08, lng: 80.27, color: '#8B4513', note: 'Pet trade escape. Competes with native turtles.' },
          { name: 'Tilapia Fish (S India)', lat: 11.0, lng: 77.0, color: '#8B4513', note: 'Invasive in rivers. Threatens native fish.' }
        ];

        invasiveSpecies.forEach(function (inv) {
          var marker = L.circleMarker([inv.lat, inv.lng], {
            radius: 7, color: '#000', fillColor: inv.color, fillOpacity: 0.8, weight: 2
          }).addTo(map);
          marker.bindPopup(app.buildPopup(
            '⚠ Invasive: ' + inv.name,
            inv.note,
            ['Invasive Species']
          ));
          marker.on('mouseover', function () { this.setRadius(11); });
          marker.on('mouseout', function () { this.setRadius(7); });
          app.addLayer(marker);
          app.addLayer(app.labelMarker([inv.lat + 0.3, inv.lng], inv.name.split('(')[0].trim(), inv.color, '8px'));
        });

        // Siberian Crane absence note
        var absent = L.circleMarker([27.16, 77.52], {
          radius: 12, color: '#FF0000', fillColor: '#FF0000', fillOpacity: 0.1,
          weight: 3, dashArray: '6,4'
        }).addTo(map);
        absent.bindPopup(app.buildPopup(
          '⚠ Siberian Crane — Absent',
          'Once wintered at Bharatpur/Keoladeo<br>Now absent for 15+ years<br>Critically Endangered globally<br>Possible extinction of India route',
          ['Siberian Crane', 'Extinction']
        ));
        app.addLayer(absent);
        app.addLayer(app.labelMarker([27.5, 77.52], '⚠ Siberian Crane ABSENT', '#FF0000', '9px'));

        app.addLayer(app.infoBox([35.0, 84.0],
          '<b style="color:#00BFFF">Central Asian Flyway</b><br>' +
          '500+ migratory species<br>' +
          'Siberia/Arctic → South Asia<br>' +
          '<span style="color:#FFD700">Amur Falcon: 100,000+ at Doyang</span>'
        ));

        app.addLayer(app.infoBox([8.5, 70.0],
          '<b style="color:#FF69B4">⚠ Top Invasive Species</b><br>' +
          'Lantana camara (forest)<br>' +
          'Water Hyacinth (water bodies)<br>' +
          'Prosopis juliflora (grassland)<br>' +
          'Parthenium (allergic weed)<br>' +
          '<span style="color:#8B4513">Common Myna (urban birds)</span>'
        ));

        app.addLayer(app.infoBox([18.0, 69.0],
          '<b style="color:#FFD700">CMS COP14 (2024)</b><br>' +
          'Convention on Migratory Species<br>' +
          'Samarkand, Uzbekistan<br>' +
          'India party since 1983<br>' +
          '<span style="color:#00FF88">World Migratory Bird Day: 2nd Sat May & Oct</span>'
        ));

        app.showToast('Map 055: Migratory Birds & Invasive Species loaded', 'success');
      }
    }

  ];

  // ═══════════════════════════════════════════════════════════════
  // REGISTER
  // ═══════════════════════════════════════════════════════════════

  window.registerMaps('biogeography', MAPS);
  console.log('biogeography-maps.js: registered ' + MAPS.length + ' maps (MAP 046-055)');

})();
