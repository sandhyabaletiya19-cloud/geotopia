/**
 * DHARAVERSE DAILY MAP MYSTERY
 * File: js/data.js
 * Purpose: 195 countries database with coordinates, 
 *          population, area, continent, capital
 * Used by: logic.js, state.js, ui.js, app.js
 * Version: 1.0
 */

'use strict';

// ═══════════════════════════════════════════
// COUNTRY DATA — 195 COUNTRIES
// Each entry: [name, lat, lng, area_km2, 
//              population_M, continent, capital,
//              flag_emoji, code_iso2]
// ═══════════════════════════════════════════

const COUNTRIES_RAW = [
  // ASIA (50 countries)
  ["Afghanistan",       33.93,   67.71,   652230,  41.1,  "Asia",          "Kabul",          "🇦🇫", "AF"],
  ["Armenia",           40.07,   45.04,    29743,   2.9,  "Asia",          "Yerevan",        "🇦🇲", "AM"],
  ["Azerbaijan",        40.14,   47.58,    86600,  10.1,  "Asia",          "Baku",           "🇦🇿", "AZ"],
  ["Bahrain",           26.00,   50.55,      765,   1.5,  "Asia",          "Manama",         "🇧🇭", "BH"],
  ["Bangladesh",        23.68,   90.36,   147570, 169.4,  "Asia",          "Dhaka",          "🇧🇩", "BD"],
  ["Bhutan",            27.51,   90.43,    38394,   0.8,  "Asia",          "Thimphu",        "🇧🇹", "BT"],
  ["Brunei",             4.94,  114.95,     5765,   0.4,  "Asia",          "Bandar Seri Begawan", "🇧🇳", "BN"],
  ["Cambodia",          12.57,  104.99,   181035,  16.7,  "Asia",          "Phnom Penh",     "🇰🇭", "KH"],
  ["China",             35.86,  104.20,  9596960,1412.0,  "Asia",          "Beijing",        "🇨🇳", "CN"],
  ["Cyprus",            35.13,   33.43,     9251,   1.2,  "Asia",          "Nicosia",        "🇨🇾", "CY"],
  ["Georgia",           42.32,   43.36,    69700,   3.7,  "Asia",          "Tbilisi",        "🇬🇪", "GE"],
  ["India",             20.59,   78.96,  3287263,1400.0,  "Asia",          "New Delhi",      "🇮🇳", "IN"],
  ["Indonesia",         -0.79,  113.92,  1904569, 277.5,  "Asia",          "Jakarta",        "🇮🇩", "ID"],
  ["Iran",              32.43,   53.69,  1648195,  86.8,  "Asia",          "Tehran",         "🇮🇷", "IR"],
  ["Iraq",              33.22,   43.68,   438317,  41.2,  "Asia",          "Baghdad",        "🇮🇶", "IQ"],
  ["Israel",            31.05,   34.85,    20770,   9.5,  "Asia",          "Jerusalem",      "🇮🇱", "IL"],
  ["Japan",             36.20,  138.25,   377975, 125.7,  "Asia",          "Tokyo",          "🇯🇵", "JP"],
  ["Jordan",            30.59,   36.24,    89342,  10.2,  "Asia",          "Amman",          "🇯🇴", "JO"],
  ["Kazakhstan",        48.02,   66.92,  2724900,  19.2,  "Asia",          "Astana",         "🇰🇿", "KZ"],
  ["Kuwait",            29.31,   47.48,    17818,   4.3,  "Asia",          "Kuwait City",    "🇰🇼", "KW"],
  ["Kyrgyzstan",        41.20,   74.77,   199951,   6.6,  "Asia",          "Bishkek",        "🇰🇬", "KG"],
  ["Laos",              19.86,  102.50,   236800,   7.4,  "Asia",          "Vientiane",      "🇱🇦", "LA"],
  ["Lebanon",           33.85,   35.86,    10452,   5.5,  "Asia",          "Beirut",         "🇱🇧", "LB"],
  ["Malaysia",           4.21,  101.98,   329847,  33.6,  "Asia",          "Kuala Lumpur",   "🇲🇾", "MY"],
  ["Maldives",           3.20,   73.22,      298,   0.5,  "Asia",          "Malé",           "🇲🇻", "MV"],
  ["Mongolia",          46.86,  103.85,  1564116,   3.3,  "Asia",          "Ulaanbaatar",    "🇲🇳", "MN"],
  ["Myanmar",           21.91,   95.96,   676578,  54.4,  "Asia",          "Naypyidaw",      "🇲🇲", "MM"],
  ["Nepal",             28.39,   84.12,   147181,  29.7,  "Asia",          "Kathmandu",      "🇳🇵", "NP"],
  ["North Korea",       40.34,  127.51,   120538,  25.9,  "Asia",          "Pyongyang",      "🇰🇵", "KP"],
  ["Oman",              21.47,   55.97,   309500,   4.5,  "Asia",          "Muscat",         "🇴🇲", "OM"],
  ["Pakistan",          30.38,   69.35,   881913, 231.4,  "Asia",          "Islamabad",      "🇵🇰", "PK"],
  ["Palestine",         31.95,   35.23,     6020,   5.3,  "Asia",          "Ramallah",       "🇵🇸", "PS"],
  ["Philippines",       12.88,  121.77,   342353, 113.9,  "Asia",          "Manila",         "🇵🇭", "PH"],
  ["Qatar",             25.35,   51.18,    11586,   2.9,  "Asia",          "Doha",           "🇶🇦", "QA"],
  ["Saudi Arabia",      23.89,   45.08,  2149690,  35.0,  "Asia",          "Riyadh",         "🇸🇦", "SA"],
  ["Singapore",          1.35,  103.82,      728,   5.9,  "Asia",          "Singapore",      "🇸🇬", "SG"],
  ["South Korea",       35.91,  127.77,    99720,  51.7,  "Asia",          "Seoul",          "🇰🇷", "KR"],
  ["Sri Lanka",          7.87,   80.77,    65610,  22.2,  "Asia",          "Colombo",        "🇱🇰", "LK"],
  ["Syria",             34.80,   38.99,   185180,  21.3,  "Asia",          "Damascus",       "🇸🇾", "SY"],
  ["Taiwan",            23.70,  120.96,    36193,  23.6,  "Asia",          "Taipei",         "🇹🇼", "TW"],
  ["Tajikistan",        38.86,   71.28,   143100,   9.9,  "Asia",          "Dushanbe",       "🇹🇯", "TJ"],
  ["Thailand",          15.87,  100.99,   513120,  71.6,  "Asia",          "Bangkok",        "🇹🇭", "TH"],
  ["Timor-Leste",       -8.87,  125.73,    14874,   1.3,  "Asia",          "Dili",           "🇹🇱", "TL"],
  ["Turkey",            38.96,   35.24,   783562,  84.3,  "Asia",          "Ankara",         "🇹🇷", "TR"],
  ["Turkmenistan",      38.97,   59.56,   488100,   6.1,  "Asia",          "Ashgabat",       "🇹🇲", "TM"],
  ["United Arab Emirates", 23.42, 53.85,  83600,  10.0,  "Asia",          "Abu Dhabi",      "🇦🇪", "AE"],
  ["Uzbekistan",        41.38,   64.59,   448978,  35.3,  "Asia",          "Tashkent",       "🇺🇿", "UZ"],
  ["Vietnam",           14.06,  108.28,   331212,  97.3,  "Asia",          "Hanoi",          "🇻🇳", "VN"],
  ["Yemen",             15.55,   48.52,   527968,  34.4,  "Asia",          "Sanaa",          "🇾🇪", "YE"],

  // AFRICA (54 countries)
  ["Algeria",           28.03,    1.66,  2381741,  44.9,  "Africa",        "Algiers",        "🇩🇿", "DZ"],
  ["Angola",           -11.20,   17.87,  1246700,  34.5,  "Africa",        "Luanda",         "🇦🇴", "AO"],
  ["Benin",              9.31,    2.32,   112622,  12.5,  "Africa",        "Porto-Novo",     "🇧🇯", "BJ"],
  ["Botswana",         -22.33,   24.68,   581730,   2.6,  "Africa",        "Gaborone",       "🇧🇼", "BW"],
  ["Burkina Faso",      12.36,   -1.54,   274222,  22.1,  "Africa",        "Ouagadougou",    "🇧🇫", "BF"],
  ["Burundi",           -3.37,   29.92,    27834,  12.6,  "Africa",        "Gitega",         "🇧🇮", "BI"],
  ["Cameroon",           3.85,   11.50,   475442,  27.2,  "Africa",        "Yaoundé",        "🇨🇲", "CM"],
  ["Cape Verde",        16.54,  -23.04,     4033,   0.6,  "Africa",        "Praia",          "🇨🇻", "CV"],
  ["Central African Republic", 6.61, 20.94, 622984, 5.0, "Africa",        "Bangui",         "🇨🇫", "CF"],
  ["Chad",              15.45,   18.73,  1284000,  17.4,  "Africa",        "N'Djamena",      "🇹🇩", "TD"],
  ["Comoros",           -11.87,  43.87,    2235,   0.9,  "Africa",        "Moroni",         "🇰🇲", "KM"],
  ["Congo",              -0.23,  15.83,   342000,   5.8,  "Africa",        "Brazzaville",    "🇨🇬", "CG"],
  ["DR Congo",           -4.04,  21.76,  2344858,  99.0,  "Africa",        "Kinshasa",       "🇨🇩", "CD"],
  ["Djibouti",           11.83,  42.59,    23200,   1.0,  "Africa",        "Djibouti",       "🇩🇯", "DJ"],
  ["Egypt",             26.82,   30.80,  1002450, 104.1,  "Africa",        "Cairo",          "🇪🇬", "EG"],
  ["Equatorial Guinea",  1.65,   10.27,    28051,   1.5,  "Africa",        "Malabo",         "🇬🇶", "GQ"],
  ["Eritrea",           15.18,   39.78,   117600,   3.6,  "Africa",        "Asmara",         "🇪🇷", "ER"],
  ["Eswatini",         -26.52,   31.47,    17364,   1.2,  "Africa",        "Mbabane",        "🇸🇿", "SZ"],
  ["Ethiopia",           9.15,   40.49,  1104300, 120.3,  "Africa",        "Addis Ababa",    "🇪🇹", "ET"],
  ["Gabon",             -0.80,   11.61,   267668,   2.3,  "Africa",        "Libreville",     "🇬🇦", "GA"],
  ["Gambia",            13.44,  -15.31,    11295,   2.6,  "Africa",        "Banjul",         "🇬🇲", "GM"],
  ["Ghana",              7.95,   -1.02,   238533,  32.4,  "Africa",        "Accra",          "🇬🇭", "GH"],
  ["Guinea",            11.00,  -10.94,   245857,  13.2,  "Africa",        "Conakry",        "🇬🇳", "GN"],
  ["Guinea-Bissau",     11.80,  -15.18,    36125,   2.0,  "Africa",        "Bissau",         "🇬🇼", "GW"],
  ["Ivory Coast",        7.54,   -5.55,   322463,  27.5,  "Africa",        "Yamoussoukro",   "🇨🇮", "CI"],
  ["Kenya",              0.02,   37.91,   580367,  54.0,  "Africa",        "Nairobi",        "🇰🇪", "KE"],
  ["Lesotho",          -29.61,   28.23,    30355,   2.2,  "Africa",        "Maseru",         "🇱🇸", "LS"],
  ["Liberia",            6.43,   -9.43,   111369,   5.2,  "Africa",        "Monrovia",       "🇱🇷", "LR"],
  ["Libya",             26.34,   17.23,  1759540,   6.9,  "Africa",        "Tripoli",        "🇱🇾", "LY"],
  ["Madagascar",       -18.77,   46.87,   587041,  27.7,  "Africa",        "Antananarivo",   "🇲🇬", "MG"],
  ["Malawi",           -13.25,   34.30,   118484,  19.9,  "Africa",        "Lilongwe",       "🇲🇼", "MW"],
  ["Mali",              17.57,   -3.99,  1240192,  22.4,  "Africa",        "Bamako",         "🇲🇱", "ML"],
  ["Mauritania",        21.01,  -10.94,  1030700,   4.6,  "Africa",        "Nouakchott",     "🇲🇷", "MR"],
  ["Mauritius",        -20.35,   57.55,     2040,   1.3,  "Africa",        "Port Louis",     "🇲🇺", "MU"],
  ["Morocco",           31.79,   -7.09,   446550,  37.1,  "Africa",        "Rabat",          "🇲🇦", "MA"],
  ["Mozambique",       -18.67,   35.53,   801590,  32.8,  "Africa",        "Maputo",         "🇲🇿", "MZ"],
  ["Namibia",          -22.96,   18.49,   824292,   2.6,  "Africa",        "Windhoek",       "🇳🇦", "NA"],
  ["Niger",             17.61,    8.08,  1267000,  25.0,  "Africa",        "Niamey",         "🇳🇪", "NE"],
  ["Nigeria",            9.08,    8.68,   923768, 218.5,  "Africa",        "Abuja",          "🇳🇬", "NG"],
  ["Rwanda",            -1.94,   29.87,    26338,  13.5,  "Africa",        "Kigali",         "🇷🇼", "RW"],
  ["São Tomé and Príncipe", 0.19, 6.61,     964,   0.2,  "Africa",        "São Tomé",       "🇸🇹", "ST"],
  ["Senegal",           14.50,  -14.45,   196722,  17.2,  "Africa",        "Dakar",          "🇸🇳", "SN"],
  ["Seychelles",        -4.68,   55.49,      452,   0.1,  "Africa",        "Victoria",       "🇸🇨", "SC"],
  ["Sierra Leone",       8.46,  -11.78,    71740,   8.2,  "Africa",        "Freetown",       "🇸🇱", "SL"],
  ["Somalia",            5.15,   46.20,   637657,  17.1,  "Africa",        "Mogadishu",      "🇸🇴", "SO"],
  ["South Africa",     -30.56,   22.94,  1219090,  60.1,  "Africa",        "Pretoria",       "🇿🇦", "ZA"],
  ["South Sudan",        6.88,   31.31,   619745,  11.4,  "Africa",        "Juba",           "🇸🇸", "SS"],
  ["Sudan",             12.86,   30.22,  1886068,  45.7,  "Africa",        "Khartoum",       "🇸🇩", "SD"],
  ["Tanzania",          -6.37,   34.89,   945087,  63.3,  "Africa",        "Dodoma",         "🇹🇿", "TZ"],
  ["Togo",               8.62,    0.82,    56785,   8.5,  "Africa",        "Lomé",           "🇹🇬", "TG"],
  ["Tunisia",           33.89,    9.54,   163610,  11.8,  "Africa",        "Tunis",          "🇹🇳", "TN"],
  ["Uganda",             1.37,   32.29,   241551,  47.1,  "Africa",        "Kampala",        "🇺🇬", "UG"],
  ["Zambia",           -13.13,   27.85,   752618,  19.5,  "Africa",        "Lusaka",         "🇿🇲", "ZM"],
  ["Zimbabwe",         -19.02,   29.15,   390757,  15.9,  "Africa",        "Harare",         "🇿🇼", "ZW"],

  // EUROPE (44 countries)
  ["Albania",           41.15,   20.17,    28748,   2.8,  "Europe",        "Tirana",         "🇦🇱", "AL"],
  ["Andorra",           42.55,    1.60,      468,   0.08, "Europe",        "Andorra la Vella","🇦🇩","AD"],
  ["Austria",           47.52,   14.55,    83871,   9.1,  "Europe",        "Vienna",         "🇦🇹", "AT"],
  ["Belarus",           53.71,   27.95,   207600,   9.4,  "Europe",        "Minsk",          "🇧🇾", "BY"],
  ["Belgium",           50.50,    4.47,    30528,  11.6,  "Europe",        "Brussels",       "🇧🇪", "BE"],
  ["Bosnia and Herzegovina", 44.16, 17.68, 51197,  3.3,  "Europe",        "Sarajevo",       "🇧🇦", "BA"],
  ["Bulgaria",          42.73,   25.49,   110879,   6.5,  "Europe",        "Sofia",          "🇧🇬", "BG"],
  ["Croatia",           45.10,   15.20,    56594,   3.9,  "Europe",        "Zagreb",         "🇭🇷", "HR"],
  ["Czech Republic",    49.82,   15.47,    78867,  10.9,  "Europe",        "Prague",         "🇨🇿", "CZ"],
  ["Denmark",           56.26,    9.50,    43094,   5.9,  "Europe",        "Copenhagen",     "🇩🇰", "DK"],
  ["Estonia",           58.60,   25.01,    45228,   1.3,  "Europe",        "Tallinn",        "🇪🇪", "EE"],
  ["Finland",           61.92,   25.75,   338424,   5.5,  "Europe",        "Helsinki",       "🇫🇮", "FI"],
  ["France",            46.23,    2.21,   551695,  68.0,  "Europe",        "Paris",          "🇫🇷", "FR"],
  ["Germany",           51.17,   10.45,   357114,  84.4,  "Europe",        "Berlin",         "🇩🇪", "DE"],
  ["Greece",            39.07,   21.82,   131957,  10.7,  "Europe",        "Athens",         "🇬🇷", "GR"],
  ["Hungary",           47.16,   19.50,    93028,   9.7,  "Europe",        "Budapest",       "🇭🇺", "HU"],
  ["Iceland",           64.96,  -19.02,   103000,   0.4,  "Europe",        "Reykjavík",      "🇮🇸", "IS"],
  ["Ireland",           53.41,   -8.24,    70273,   5.1,  "Europe",        "Dublin",         "🇮🇪", "IE"],
  ["Italy",             41.87,   12.57,   301340,  60.4,  "Europe",        "Rome",           "🇮🇹", "IT"],
  ["Kosovo",            42.60,   20.90,    10887,   1.8,  "Europe",        "Pristina",       "🇽🇰", "XK"],
  ["Latvia",            56.88,   24.60,    64589,   1.8,  "Europe",        "Riga",           "🇱🇻", "LV"],
  ["Liechtenstein",     47.17,    9.56,      160,   0.04, "Europe",        "Vaduz",          "🇱🇮", "LI"],
  ["Lithuania",         55.17,   23.88,    65300,   2.8,  "Europe",        "Vilnius",        "🇱🇹", "LT"],
  ["Luxembourg",        49.82,    6.13,     2586,   0.6,  "Europe",        "Luxembourg",     "🇱🇺", "LU"],
  ["Malta",             35.94,   14.38,      316,   0.5,  "Europe",        "Valletta",       "🇲🇹", "MT"],
  ["Moldova",           47.41,   28.37,    33846,   2.6,  "Europe",        "Chișinău",       "🇲🇩", "MD"],
  ["Monaco",            43.73,    7.40,        2,   0.04, "Europe",        "Monaco",         "🇲🇨", "MC"],
  ["Montenegro",        42.71,   19.37,    13812,   0.6,  "Europe",        "Podgorica",      "🇲🇪", "ME"],
  ["Netherlands",       52.13,    5.29,    41543,  17.7,  "Europe",        "Amsterdam",      "🇳🇱", "NL"],
  ["North Macedonia",   41.61,   21.75,    25713,   2.1,  "Europe",        "Skopje",         "🇲🇰", "MK"],
  ["Norway",            60.47,    8.47,   323802,   5.4,  "Europe",        "Oslo",           "🇳🇴", "NO"],
  ["Poland",            51.92,   19.15,   312679,  38.0,  "Europe",        "Warsaw",         "🇵🇱", "PL"],
  ["Portugal",          39.40,   -8.22,    92212,  10.3,  "Europe",        "Lisbon",         "🇵🇹", "PT"],
  ["Romania",           45.94,   24.97,   238397,  19.1,  "Europe",        "Bucharest",      "🇷🇴", "RO"],
  ["Russia",            61.52,  105.32, 17098242, 144.1,  "Europe",        "Moscow",         "🇷🇺", "RU"],
  ["San Marino",        43.94,   12.46,       61,   0.03, "Europe",        "San Marino",     "🇸🇲", "SM"],
  ["Serbia",            44.02,   21.01,    77474,   6.8,  "Europe",        "Belgrade",       "🇷🇸", "RS"],
  ["Slovakia",          48.67,   19.70,    49035,   5.5,  "Europe",        "Bratislava",     "🇸🇰", "SK"],
  ["Slovenia",          46.15,   14.99,    20273,   2.1,  "Europe",        "Ljubljana",      "🇸🇮", "SI"],
  ["Spain",             40.46,   -3.75,   505990,  47.4,  "Europe",        "Madrid",         "🇪🇸", "ES"],
  ["Sweden",            60.13,   18.64,   450295,  10.5,  "Europe",        "Stockholm",      "🇸🇪", "SE"],
  ["Switzerland",       46.82,    8.23,    41285,   8.7,  "Europe",        "Bern",           "🇨🇭", "CH"],
  ["Ukraine",           48.38,   31.17,   603550,  44.0,  "Europe",        "Kyiv",           "🇺🇦", "UA"],
  ["United Kingdom",    55.38,   -3.44,   242900,  67.7,  "Europe",        "London",         "🇬🇧", "GB"],
  ["Vatican City",      41.90,   12.45,      0.4,  0.001, "Europe",        "Vatican City",   "🇻🇦", "VA"],

  // NORTH AMERICA (23 countries)
  ["Antigua and Barbuda", 17.06, -61.80,    442,   0.1,  "North America", "Saint John's",   "🇦🇬", "AG"],
  ["Bahamas",            25.03,  -77.40,   13943,   0.4,  "North America", "Nassau",         "🇧🇸", "BS"],
  ["Barbados",           13.19,  -59.54,    430,   0.3,  "North America", "Bridgetown",     "🇧🇧", "BB"],
  ["Belize",             17.19,  -88.50,  22966,   0.4,  "North America", "Belmopan",       "🇧🇿", "BZ"],
  ["Canada",             56.13,  -106.35, 9984670,  38.2, "North America", "Ottawa",         "🇨🇦", "CA"],
  ["Costa Rica",         9.75,  -83.75,   51100,   5.2,  "North America", "San José",       "🇨🇷", "CR"],
  ["Cuba",              21.52,  -77.78,  109884,  11.3,  "North America", "Havana",         "🇨🇺", "CU"],
  ["Dominica",          15.41,  -61.37,    751,   0.07, "North America", "Roseau",         "🇩🇲", "DM"],
  ["Dominican Republic", 18.74, -70.16,  48671,  11.2,  "North America", "Santo Domingo",  "🇩🇴", "DO"],
  ["El Salvador",        13.79,  -88.90,  21041,   6.3,  "North America", "San Salvador",   "🇸🇻", "SV"],
  ["Grenada",            12.12,  -61.68,    344,   0.1,  "North America", "Saint George's", "🇬🇩", "GD"],
  ["Guatemala",          15.78,  -90.23,  108889,  17.2,  "North America", "Guatemala City", "🇬🇹", "GT"],
  ["Haiti",              18.97,  -72.29,  27750,  11.4,  "North America", "Port-au-Prince", "🇭🇹", "HT"],
  ["Honduras",           15.20,  -86.24,  112492,  10.3,  "North America", "Tegucigalpa",    "🇭🇳", "HN"],
  ["Jamaica",            18.11,  -77.30,  10991,   2.9,  "North America", "Kingston",       "🇯🇲", "JM"],
  ["Mexico",             23.63,  -102.55, 1964375, 130.3, "North America", "Mexico City",    "🇲🇽", "MX"],
  ["Nicaragua",          12.87,  -85.21,  130370,   6.7,  "North America", "Managua",        "🇳🇮", "NI"],
  ["Panama",              8.54,  -80.78,  75417,   4.4,  "North America", "Panama City",    "🇵🇦", "PA"],
  ["Saint Kitts and Nevis", 17.35, -62.78, 261,   0.05, "North America", "Basseterre",     "🇰🇳", "KN"],
  ["Saint Lucia",        13.91,  -60.98,   616,   0.2,  "North America", "Castries",       "🇱🇨", "LC"],
  ["Saint Vincent and the Grenadines", 13.25, -61.20, 389, 0.1, "North America", "Kingstown", "🇻🇨", "VC"],
  ["Trinidad and Tobago", 10.69, -61.22,  5128,   1.4,  "North America", "Port of Spain",  "🇹🇹", "TT"],
  ["United States",      37.09,  -95.71, 9372610, 331.4, "North America", "Washington D.C.","🇺🇸", "US"],

  // SOUTH AMERICA (12 countries)
  ["Argentina",         -38.42,  -63.62,  2780400,  45.2, "South America", "Buenos Aires",   "🇦🇷", "AR"],
  ["Bolivia",           -16.29,  -63.59,  1098581,  12.1, "South America", "Sucre",          "🇧🇴", "BO"],
  ["Brazil",            -14.24,  -51.93,  8515767, 215.3, "South America", "Brasília",       "🇧🇷", "BR"],
  ["Chile",             -35.68,  -71.54,   756102,  19.5, "South America", "Santiago",       "🇨🇱", "CL"],
  ["Colombia",            4.57,  -74.30,  1141748,  51.8, "South America", "Bogotá",         "🇨🇴", "CO"],
  ["Ecuador",            -1.83,  -78.18,   283561,  18.0, "South America", "Quito",          "🇪🇨", "EC"],
  ["Guyana",              4.86,  -58.93,   214969,   0.8, "South America", "Georgetown",     "🇬🇾", "GY"],
  ["Paraguay",          -23.44,  -58.44,   406752,   7.4, "South America", "Asunción",       "🇵🇾", "PY"],
  ["Peru",               -9.19,  -75.02,  1285216,  33.0, "South America", "Lima",           "🇵🇪", "PE"],
  ["Suriname",            3.92,  -56.03,   163820,   0.6, "South America", "Paramaribo",     "🇸🇷", "SR"],
  ["Uruguay",           -32.52,  -55.77,   176215,   3.5, "South America", "Montevideo",     "🇺🇾", "UY"],
  ["Venezuela",           6.42,  -66.59,   912050,  28.3, "South America", "Caracas",        "🇻🇪", "VE"],

  // OCEANIA (14 countries)
  ["Australia",         -25.27,  133.78,  7692024,  26.0, "Oceania",       "Canberra",       "🇦🇺", "AU"],
  ["Fiji",              -17.71,  178.06,   18274,   0.9,  "Oceania",       "Suva",           "🇫🇯", "FJ"],
  ["Kiribati",            1.87,  -157.36,    811,   0.1,  "Oceania",       "South Tarawa",   "🇰🇮", "KI"],
  ["Marshall Islands",    7.13,  171.18,    181,   0.04, "Oceania",       "Majuro",         "🇲🇭", "MH"],
  ["Micronesia",          6.89,  158.22,    702,   0.1,  "Oceania",       "Palikir",        "🇫🇲", "FM"],
  ["Nauru",              -0.53,  166.93,     21,   0.01, "Oceania",       "Yaren",          "🇳🇷", "NR"],
  ["New Zealand",       -40.90,  174.89,  268838,   5.1,  "Oceania",       "Wellington",     "🇳🇿", "NZ"],
  ["Palau",               7.52,  134.58,    459,   0.02, "Oceania",       "Ngerulmud",      "🇵🇼", "PW"],
  ["Papua New Guinea",   -6.31,  143.96,  462840,   9.9,  "Oceania",       "Port Moresby",   "🇵🇬", "PG"],
  ["Samoa",             -13.76,  -172.10,  2831,   0.2,  "Oceania",       "Apia",           "🇼🇸", "WS"],
  ["Solomon Islands",    -9.65,  160.16,  28896,   0.7,  "Oceania",       "Honiara",        "🇸🇧", "SB"],
  ["Tonga",             -21.18,  -175.20,   748,   0.1,  "Oceania",       "Nukuʻalofa",     "🇹🇴", "TO"],
  ["Tuvalu",             -7.11,  177.64,     26,   0.01, "Oceania",       "Funafuti",       "🇹🇻", "TV"],
  ["Vanuatu",           -15.38,  166.96,  12189,   0.3,  "Oceania",       "Port Vila",      "🇻🇺", "VU"],
];

// ═══════════════════════════════════════════
// DATA TRANSFORMATION
// Convert raw array to structured objects
// ═══════════════════════════════════════════

/**
 * @typedef {Object} Country
 * @property {string}  name        - Full country name
 * @property {number}  lat         - Latitude (center)
 * @property {number}  lng         - Longitude (center)
 * @property {number}  area        - Area in km²
 * @property {number}  population  - Population in millions
 * @property {string}  continent   - Continent name
 * @property {string}  capital     - Capital city name
 * @property {string}  flag        - Flag emoji
 * @property {string}  code        - ISO 3166-1 alpha-2 code
 * @property {string}  id          - Slug (lowercase, hyphenated)
 */

const COUNTRIES = COUNTRIES_RAW.map(c => ({
  name:       c[0],
  lat:        c[1],
  lng:        c[2],
  area:       c[3],
  population: c[4],
  continent:  c[5],
  capital:    c[6],
  flag:       c[7],
  code:       c[8],
  id:         c[0].toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
}));

// ═══════════════════════════════════════════
// LOOKUP HELPERS
// ═══════════════════════════════════════════

/**
 * Get country by exact name (case-insensitive)
 * @param {string} name
 * @returns {Country|null}
 */
function getCountryByName(name) {
  const normalized = name.trim().toLowerCase();
  return COUNTRIES.find(c => c.name.toLowerCase() === normalized) || null;
}

/**
 * Get country by ISO code
 * @param {string} code
 * @returns {Country|null}
 */
function getCountryByCode(code) {
  return COUNTRIES.find(c => c.code === code.toUpperCase()) || null;
}

/**
 * Get country by slug ID
 * @param {string} id
 * @returns {Country|null}
 */
function getCountryById(id) {
  return COUNTRIES.find(c => c.id === id) || null;
}

/**
 * Search countries by partial name match
 * @param {string} query
 * @param {number} [limit=10]
 * @returns {Country[]}
 */
function searchCountries(query, limit = 10) {
  if (!query || query.length < 1) return [];
  const normalized = query.trim().toLowerCase();
  
  // Priority: starts with > contains
  const startsWith = COUNTRIES.filter(c => 
    c.name.toLowerCase().startsWith(normalized)
  );
  const contains = COUNTRIES.filter(c => 
    !c.name.toLowerCase().startsWith(normalized) &&
    c.name.toLowerCase().includes(normalized)
  );
  
  return [...startsWith, ...contains].slice(0, limit);
}

/**
 * Get countries by continent
 * @param {string} continent
 * @returns {Country[]}
 */
function getCountriesByContinent(continent) {
  return COUNTRIES.filter(c => c.continent === continent);
}

/**
 * Get the country for a specific day number
 * Uses seeded selection so ALL users get same country daily
 * @param {number} dayNumber - Days since epoch (UTC)
 * @returns {Country}
 */
function getDailyCountry(dayNumber) {
  // Seeded shuffle using day number
  // This ensures: same day = same country globally
  const seed = dayNumber * 2654435761; // Knuth multiplicative hash
  const index = Math.abs(seed) % COUNTRIES.length;
  return COUNTRIES[index];
}

/**
 * Calculate today's day number (UTC)
 * Day 0 = Jan 1, 2025 (game launch)
 * @returns {number}
 */
function getTodayDayNumber() {
  const EPOCH = new Date('2025-01-01T00:00:00Z').getTime();
  const now = Date.now();
  return Math.floor((now - EPOCH) / (1000 * 60 * 60 * 24));
}

// ═══════════════════════════════════════════
// CONTINENT METADATA
// ═══════════════════════════════════════════

const CONTINENTS = {
  "Asia":          { emoji: "🌏", color: "#F5A623", hemisphere: "north" },
  "Africa":        { emoji: "🌍", color: "#00C896", hemisphere: "both"  },
  "Europe":        { emoji: "🌍", color: "#8B5CF6", hemisphere: "north" },
  "North America": { emoji: "🌎", color: "#EC4899", hemisphere: "north" },
  "South America": { emoji: "🌎", color: "#3B82F6", hemisphere: "south" },
  "Oceania":       { emoji: "🌏", color: "#06B6D4", hemisphere: "south" }
};

/**
 * Get hemisphere of a country
 * @param {Country} country
 * @returns {"north"|"south"}
 */
function getHemisphere(country) {
  return country.lat >= 0 ? "north" : "south";
}

// ═══════════════════════════════════════════
// SIZE CATEGORIES
// ═══════════════════════════════════════════

const SIZE_CATEGORIES = [
  { max: 1000,      label: "Tiny",       emoji: "🔬", desc: "Smaller than a city" },
  { max: 10000,     label: "Very Small", emoji: "🏙️",  desc: "City-state sized"    },
  { max: 100000,    label: "Small",      emoji: "🌆", desc: "Small nation"         },
  { max: 500000,    label: "Medium",     emoji: "🗺️",  desc: "Medium-sized country"},
  { max: 2000000,   label: "Large",      emoji: "🌎", desc: "Large country"        },
  { max: 10000000,  label: "Huge",       emoji: "🐘", desc: "Giant country"        },
  { max: Infinity,  label: "Massive",    emoji: "🌍", desc: "One of the biggest"   }
];

/**
 * Get size category for a country
 * @param {Country} country
 * @returns {Object} size category info
 */
function getSizeCategory(country) {
  return SIZE_CATEGORIES.find(s => country.area <= s.max) || SIZE_CATEGORIES[SIZE_CATEGORIES.length - 1];
}

// ═══════════════════════════════════════════
// POPULATION CATEGORIES
// ═══════════════════════════════════════════

const POPULATION_CATEGORIES = [
  { max: 0.1,   label: "Micro",       emoji: "👤"  },
  { max: 1,     label: "Tiny",        emoji: "👥"  },
  { max: 10,    label: "Small",       emoji: "🏘️"  },
  { max: 50,    label: "Medium",      emoji: "🏙️"  },
  { max: 100,   label: "Large",       emoji: "🌆"  },
  { max: 500,   label: "Very Large",  emoji: "🏛️"  },
  { max: Infinity, label: "Mega",     emoji: "🌍"  }
];

/**
 * Get population category for a country
 * @param {Country} country
 * @returns {Object}
 */
function getPopulationCategory(country) {
  return POPULATION_CATEGORIES.find(p => country.population <= p.max) 
    || POPULATION_CATEGORIES[POPULATION_CATEGORIES.length - 1];
}

// ═══════════════════════════════════════════
// STATISTICS
// ═══════════════════════════════════════════

const DATA_STATS = {
  totalCountries:  COUNTRIES.length,
  continentCounts: {},
  largestArea:     Math.max(...COUNTRIES.map(c => c.area)),
  smallestArea:    Math.min(...COUNTRIES.map(c => c.area)),
  largestPop:      Math.max(...COUNTRIES.map(c => c.population)),
  smallestPop:     Math.min(...COUNTRIES.map(c => c.population))
};

// Build continent counts
COUNTRIES.forEach(c => {
  DATA_STATS.continentCounts[c.continent] = 
    (DATA_STATS.continentCounts[c.continent] || 0) + 1;
});

// ═══════════════════════════════════════════
// EXPORTS — Names used by ALL other files
// ═══════════════════════════════════════════

// These exact names are imported by:
// - logic.js:  COUNTRIES, getDailyCountry, getTodayDayNumber,
//              getCountryByName, searchCountries, getHemisphere,
//              getSizeCategory, CONTINENTS
// - state.js:  getDailyCountry, getTodayDayNumber, COUNTRIES
// - ui.js:     COUNTRIES, searchCountries, getCountryByName,
//              CONTINENTS, getSizeCategory, getPopulationCategory
// - app.js:    getDailyCountry, getTodayDayNumber, COUNTRIES,
//              DATA_STATS
// - share.js:  (none directly — uses state output)
// - streak.js: getTodayDayNumber

window.DharaData = {
  // Core data
  COUNTRIES,
  CONTINENTS,
  SIZE_CATEGORIES,
  POPULATION_CATEGORIES,
  DATA_STATS,
  
  // Lookup functions
  getCountryByName,
  getCountryByCode,
  getCountryById,
  searchCountries,
  getCountriesByContinent,
  
  // Daily game functions
  getDailyCountry,
  getTodayDayNumber,
  
  // Category helpers
  getSizeCategory,
  getPopulationCategory,
  getHemisphere
};

// Also export for direct access (used in some inline scripts)
window.COUNTRIES        = COUNTRIES;
window.getDailyCountry  = getDailyCountry;
window.getTodayDayNumber = getTodayDayNumber;

console.log(`[DharaData] Loaded ${COUNTRIES.length} countries across ${Object.keys(DATA_STATS.continentCounts).length} continents`);
