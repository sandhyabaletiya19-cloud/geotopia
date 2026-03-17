/**
 * GEOTOPIA - Rivers Data File 6
 * Rivers 51-60 (Uruguay to Oka)
 * Uruguay, Snake, Churchill, Pilcomayo, Magdalena, Oka, Pecos, Godavari, Parnaíba, Red River North
 */

const RIVERS_DATA_6 = [
    // ========================================
    // 51. URUGUAY RIVER
    // ========================================
    {
        id: "uruguay",
        name: "Uruguay River",
        length: 1838,
        continent: "south-america",
        image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800",
        
        countries: [
            { name: "Brazil", flag: "🇧🇷" },
            { name: "Argentina", flag: "🇦🇷" },
            { name: "Uruguay", flag: "🇺🇾" }
        ],
        
        states: [
            "Santa Catarina", "Rio Grande do Sul",
            "Misiones", "Corrientes", "Entre Ríos",
            "Artigas", "Salto", "Paysandú", "Río Negro", "Soriano"
        ],
        
        source: {
            location: "Serra Geral, Santa Catarina, Brazil",
            type: "Mountain streams",
            elevation: "1,800 m",
            coordinates: [-28.0833, -50.2000]
        },
        
        mouth: {
            location: "Río de la Plata, Argentina/Uruguay",
            type: "Estuary",
            delta: "Joins Paraná to form Río de la Plata",
            coordinates: [-34.0000, -58.4000]
        },
        
        tributaries: {
            leftBank: [
                "Pelotas River",
                "Peixe River",
                "Ijuí River",
                "Ibicuí River"
            ],
            rightBank: [
                "Canoas River",
                "Chapecó River",
                "Pepirí Guazú River",
                "Aguapey River"
            ]
        },
        
        distributaries: [
            "Uruguay Delta channels"
        ],
        
        majorCities: [
            "Lages", "Chapecó", "São Borja", "Uruguaiana",
            "Paso de los Libres", "Concordia", "Salto",
            "Paysandú", "Fray Bentos", "Nueva Palmira"
        ],
        
        dams: [
            { name: "Salto Grande Dam", details: "Argentina/Uruguay, 1,890 MW, 1979" },
            { name: "Itá Dam", details: "Brazil, 1,450 MW, 2000" },
            { name: "Machadinho Dam", details: "Brazil, 1,140 MW, 2002" },
            { name: "Foz do Chapecó Dam", details: "Brazil, 855 MW, 2010" }
        ],
        
        basinArea: "365,000 km²",
        discharge: "4,500 m³/s",
        
        riverPath: [
            [-28.08, -50.20],   // Source - Serra Geral
            [-27.50, -50.50],
            [-27.50, -51.50],
            [-27.50, -52.50],
            [-28.00, -53.50],
            [-28.50, -54.50],
            [-29.00, -55.50],
            [-29.76, -57.09],   // Uruguaiana
            [-30.50, -57.50],
            [-31.23, -57.97],   // Salto
            [-31.50, -58.00],
            [-32.30, -58.08],   // Paysandú
            [-33.12, -58.30],   // Fray Bentos
            [-33.87, -58.42],   // Nueva Palmira
            [-34.00, -58.40]    // Río de la Plata (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Ibicuí River",
                path: [
                    [-29.50, -54.00],
                    [-29.50, -55.50],
                    [-29.60, -56.50]   // Confluence
                ]
            },
            {
                name: "Pepirí Guazú River",
                path: [
                    [-26.50, -53.50],
                    [-27.00, -53.80],
                    [-27.20, -54.00]   // Confluence
                ]
            },
            {
                name: "Río Negro (Uruguay)",
                path: [
                    [-32.50, -54.50],
                    [-33.00, -56.00],
                    [-33.20, -58.00]   // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Uruguay Estuary",
                path: [
                    [-33.90, -58.45],
                    [-34.00, -58.40]   // Río de la Plata
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Chapecó", coords: [-27.10, -52.62] },
            { name: "Uruguaiana", coords: [-29.76, -57.09] },
            { name: "Concordia", coords: [-31.39, -58.02] },
            { name: "Salto", coords: [-31.38, -57.97] },
            { name: "Paysandú", coords: [-32.32, -58.09] },
            { name: "Fray Bentos", coords: [-33.12, -58.30] }
        ],
        
        damCoordinates: [
            { name: "Salto Grande Dam", coords: [-31.27, -57.93], details: "1,890 MW - Argentina/Uruguay" },
            { name: "Itá Dam", coords: [-27.27, -52.38], details: "1,450 MW - Brazil" },
            { name: "Machadinho Dam", coords: [-27.52, -51.79], details: "1,140 MW - Brazil" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Serra Geral", icon: "🏔️", description: "Source in Brazilian highlands" },
            { progress: 0.15, name: "Itá Dam", icon: "🏗️", description: "Brazilian hydroelectric" },
            { progress: 0.25, name: "Brazil-Argentina Border", icon: "🛂", description: "River forms boundary" },
            { progress: 0.35, name: "Misiones Region", icon: "🌳", description: "Subtropical forest" },
            { progress: 0.50, name: "Uruguaiana/Paso de los Libres", icon: "🌉", description: "Twin border cities" },
            { progress: 0.60, name: "Argentina-Uruguay Border", icon: "🛂", description: "River changes boundary" },
            { progress: 0.70, name: "Salto Grande Dam", icon: "🏗️", description: "Binational hydroelectric" },
            { progress: 0.80, name: "Paysandú", icon: "🏙️", description: "Uruguayan city" },
            { progress: 0.90, name: "Fray Bentos", icon: "🏭", description: "Historic meat processing" },
            { progress: 1.0, name: "Río de la Plata", icon: "🌊", description: "Joins Paraná" }
        ],
        
        economicImportance: [
            "Hydroelectric power (Salto Grande binational)",
            "International boundary river",
            "Navigation corridor",
            "Irrigation for agriculture",
            "Fishing industry",
            "Tourism and recreation"
        ],
        
        environmentalIssues: [
            "Pulp mill controversy (Fray Bentos)",
            "Dam impacts on fish migration",
            "Agricultural runoff",
            "Invasive species",
            "Water quality concerns",
            "Flood management"
        ],
        
        waterDisputes: [
            {
                title: "Pulp Mill Dispute (2005-2010)",
                description: "Argentina sued Uruguay at ICJ over pulp mills on river; ruling allowed mills but required monitoring."
            },
            {
                title: "CARU Commission",
                description: "Administrative Commission of the Uruguay River (CARU) manages binational river since 1975."
            }
        ],
        
        historicalImportance: [
            {
                title: "Jesuit Missions",
                description: "The Uruguay basin was home to famous Jesuit reductions (missions) in the 17th-18th centuries."
            },
            {
                title: "Colonial Boundary",
                description: "The river was a contested boundary between Spanish and Portuguese colonial territories."
            },
            {
                title: "Uruguayan Independence",
                description: "Uruguay's name derives from the river; battles for independence were fought along its banks."
            }
        ]
    },

    // ========================================
    // 52. SNAKE RIVER
    // ========================================
    {
        id: "snake",
        name: "Snake River",
        length: 1735,
        continent: "north-america",
        image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800",
        
        countries: [
            { name: "United States", flag: "🇺🇸" }
        ],
        
        states: [
            "Wyoming", "Idaho", "Oregon", "Washington"
        ],
        
        source: {
            location: "Yellowstone National Park, Wyoming",
            type: "Mountain springs near Two Ocean Plateau",
            elevation: "2,743 m",
            coordinates: [44.1333, -110.4333]
        },
        
        mouth: {
            location: "Columbia River, Washington",
            type: "Confluence",
            delta: "Joins Columbia near Tri-Cities, Washington",
            coordinates: [46.2000, -119.0333]
        },
        
        tributaries: {
            leftBank: [
                "Henrys Fork",
                "Portneuf River",
                "Bruneau River",
                "Owyhee River"
            ],
            rightBank: [
                "Salt River",
                "Boise River",
                "Payette River",
                "Salmon River",
                "Clearwater River",
                "Grande Ronde River"
            ]
        },
        
        distributaries: [
            "Snake River Delta channels (Columbia confluence)"
        ],
        
        majorCities: [
            "Jackson", "Idaho Falls", "Pocatello", "Twin Falls",
            "Boise", "Ontario", "Lewiston", "Clarkston"
        ],
        
        dams: [
            { name: "Hells Canyon Dam", details: "Idaho/Oregon, 391 MW, 1967" },
            { name: "Lower Granite Dam", details: "Washington, 810 MW, 1975" },
            { name: "Little Goose Dam", details: "Washington, 810 MW, 1970" },
            { name: "Lower Monumental Dam", details: "Washington, 810 MW, 1969" },
            { name: "Ice Harbor Dam", details: "Washington, 603 MW, 1962" },
            { name: "American Falls Dam", details: "Idaho, 1927, irrigation" },
            { name: "Milner Dam", details: "Idaho, 1905, irrigation" }
        ],
        
        basinArea: "280,000 km²",
        discharge: "1,553 m³/s",
        
        riverPath: [
            [44.13, -110.43],   // Source - Yellowstone
            [43.50, -110.75],   // Jackson area
            [43.50, -111.50],
            [43.47, -112.03],   // Idaho Falls
            [42.87, -112.45],   // Pocatello
            [42.60, -114.46],   // Twin Falls
            [43.00, -115.50],
            [43.62, -116.21],   // Boise area
            [43.80, -117.00],
            [44.50, -117.00],
            [45.00, -117.00],
            [45.50, -116.80],
            [46.00, -117.00],
            [46.42, -117.04],   // Lewiston/Clarkston
            [46.30, -118.00],
            [46.20, -119.03]    // Columbia River (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Salmon River",
                path: [
                    [44.00, -114.50],   // Sawtooth Mountains
                    [45.00, -115.50],
                    [45.87, -116.80]    // Confluence
                ]
            },
            {
                name: "Clearwater River",
                path: [
                    [46.50, -114.50],
                    [46.40, -116.00],
                    [46.42, -117.00]    // Confluence at Lewiston
                ]
            },
            {
                name: "Boise River",
                path: [
                    [43.70, -115.50],
                    [43.60, -116.20],   // Boise
                    [43.62, -116.50]    // Confluence
                ]
            },
            {
                name: "Henrys Fork",
                path: [
                    [44.50, -111.30],
                    [43.90, -111.80],
                    [43.60, -112.00]    // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Snake-Columbia Confluence",
                path: [
                    [46.20, -118.90],
                    [46.20, -119.03]    // Columbia
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Jackson", coords: [43.48, -110.76] },
            { name: "Idaho Falls", coords: [43.47, -112.03] },
            { name: "Pocatello", coords: [42.87, -112.45] },
            { name: "Twin Falls", coords: [42.56, -114.46] },
            { name: "Boise", coords: [43.62, -116.21] },
            { name: "Lewiston", coords: [46.42, -117.01] }
        ],
        
        damCoordinates: [
            { name: "Hells Canyon Dam", coords: [45.24, -116.70], details: "391 MW - Deepest gorge in North America" },
            { name: "Lower Granite Dam", coords: [46.66, -117.43], details: "810 MW - Dam removal debate" },
            { name: "American Falls Dam", coords: [42.78, -112.87], details: "Major irrigation reservoir" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Yellowstone Source", icon: "🏔️", description: "Near Two Ocean Plateau" },
            { progress: 0.08, name: "Jackson Hole", icon: "🏔️", description: "Teton Valley" },
            { progress: 0.18, name: "Idaho Falls", icon: "🏙️", description: "Eastern Idaho city" },
            { progress: 0.30, name: "Shoshone Falls", icon: "💧", description: "Niagara of the West" },
            { progress: 0.40, name: "Twin Falls", icon: "🏙️", description: "Snake River Canyon" },
            { progress: 0.50, name: "Boise Area", icon: "🏙️", description: "Idaho's capital" },
            { progress: 0.65, name: "Hells Canyon", icon: "🏜️", description: "Deepest gorge in N. America" },
            { progress: 0.80, name: "Lewiston-Clarkston", icon: "🏙️", description: "Idaho port cities" },
            { progress: 0.90, name: "Lower Snake Dams", icon: "🏗️", description: "Controversial dams" },
            { progress: 1.0, name: "Columbia River", icon: "🌊", description: "Confluence" }
        ],
        
        economicImportance: [
            "Largest tributary of Columbia River",
            "Irrigation for Idaho agriculture (potatoes)",
            "Hydroelectric power generation",
            "Salmon and steelhead fisheries (diminished)",
            "River navigation to Lewiston (inland port)",
            "Recreation and tourism"
        ],
        
        environmentalIssues: [
            "Salmon and steelhead decline (90%+)",
            "Dam removal debate (4 lower Snake dams)",
            "Hatchery vs. wild fish controversy",
            "Temperature impacts on cold-water fish",
            "Agricultural runoff",
            "Endangered species listings"
        ],
        
        waterDisputes: [
            {
                title: "Lower Snake River Dam Removal",
                description: "Intense debate over removing four dams to restore salmon; tribes, environmentalists vs. farmers, shippers."
            },
            {
                title: "Idaho-Oregon Water Rights",
                description: "Complex water rights issues between states sharing the Snake River basin."
            }
        ],
        
        historicalImportance: [
            {
                title: "Lewis and Clark Expedition",
                description: "The Corps of Discovery traveled the Snake River in 1805, with assistance from Nez Perce people."
            },
            {
                title: "Oregon Trail",
                description: "The Snake River Plain was a major segment of the Oregon Trail for westward-bound pioneers."
            },
            {
                title: "Evel Knievel Jump",
                description: "In 1974, daredevil Evel Knievel attempted to jump the Snake River Canyon near Twin Falls."
            }
        ]
    },

    // ========================================
    // 53. CHURCHILL RIVER (HUDSON BAY)
    // ========================================
    {
        id: "churchill",
        name: "Churchill River",
        length: 1609,
        continent: "north-america",
        image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=800",
        
        countries: [
            { name: "Canada", flag: "🇨🇦" }
        ],
        
        states: [
            "Saskatchewan", "Manitoba"
        ],
        
        source: {
            location: "Methye Lake, Saskatchewan",
            type: "Lake outlet",
            elevation: "460 m",
            coordinates: [56.5000, -108.5000]
        },
        
        mouth: {
            location: "Hudson Bay, at Churchill, Manitoba",
            type: "Estuary",
            delta: "Churchill River Estuary - polar bear habitat",
            coordinates: [58.7667, -94.1833]
        },
        
        tributaries: {
            leftBank: [
                "Beaver River",
                "Reindeer River",
                "Cochrane River"
            ],
            rightBank: [
                "Sturgeon-weir River",
                "Burntwood River",
                "Little Churchill River"
            ]
        },
        
        distributaries: [
            "Churchill Estuary channels"
        ],
        
        majorCities: [
            "La Ronge", "Flin Flon", "Thompson",
            "Gillam", "Churchill"
        ],
        
        dams: [
            { name: "Island Falls Dam", details: "Saskatchewan, 1930, 111 MW" },
            { name: "Missi Falls Control Structure", details: "Manitoba, 1976, flow diversion" },
            { name: "Churchill River Diversion", details: "1977, diverts to Nelson River" }
        ],
        
        basinArea: "282,000 km²",
        discharge: "1,200 m³/s (reduced by diversion)",
        
        riverPath: [
            [56.50, -108.50],   // Source - Methye Lake
            [56.00, -107.50],
            [55.50, -106.50],
            [55.10, -105.28],   // La Ronge area
            [55.50, -104.50],
            [55.70, -103.50],
            [55.80, -102.50],
            [55.50, -101.50],
            [55.50, -100.50],
            [56.00, -99.50],
            [56.50, -98.50],
            [57.00, -97.50],
            [57.50, -96.50],
            [58.00, -95.50],
            [58.50, -94.50],
            [58.77, -94.18]     // Hudson Bay (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Reindeer River",
                path: [
                    [57.50, -102.50],   // Reindeer Lake
                    [56.50, -102.00],
                    [55.80, -102.00]    // Confluence
                ]
            },
            {
                name: "Burntwood River",
                path: [
                    [55.50, -98.00],    // Near Thompson
                    [56.00, -97.50],
                    [56.30, -97.00]     // Confluence
                ]
            },
            {
                name: "Little Churchill River",
                path: [
                    [58.00, -98.00],
                    [58.30, -96.00],
                    [58.50, -95.00]     // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Churchill Estuary",
                path: [
                    [58.70, -94.30],
                    [58.77, -94.18]     // Hudson Bay
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "La Ronge", coords: [55.10, -105.28] },
            { name: "Flin Flon", coords: [54.77, -101.88] },
            { name: "Thompson", coords: [55.74, -97.86] },
            { name: "Gillam", coords: [56.35, -94.71] },
            { name: "Churchill", coords: [58.77, -94.17] }
        ],
        
        damCoordinates: [
            { name: "Island Falls Dam", coords: [55.53, -102.35], details: "111 MW hydroelectric" },
            { name: "Churchill Diversion", coords: [56.36, -97.00], details: "Diverts to Nelson River" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Methye Lake", icon: "🌊", description: "Source lake" },
            { progress: 0.15, name: "La Ronge", icon: "🏘️", description: "Northern Saskatchewan hub" },
            { progress: 0.25, name: "Island Falls Dam", icon: "🏗️", description: "Historic dam" },
            { progress: 0.40, name: "Reindeer River", icon: "🔀", description: "Major tributary" },
            { progress: 0.55, name: "Churchill Diversion", icon: "🚿", description: "Water diverted to Nelson" },
            { progress: 0.70, name: "Gillam", icon: "🏘️", description: "Hydro town" },
            { progress: 0.85, name: "Subarctic Transition", icon: "🌲", description: "Treeline approach" },
            { progress: 0.95, name: "Churchill", icon: "🐻‍❄️", description: "Polar bear capital" },
            { progress: 1.0, name: "Hudson Bay", icon: "🌊", description: "Arctic estuary" }
        ],
        
        economicImportance: [
            "Historic fur trade route (Voyageurs)",
            "Hydroelectric power (diverted to Nelson system)",
            "Churchill port - Arctic shipping",
            "Polar bear tourism",
            "Sport fishing",
            "Indigenous subsistence"
        ],
        
        environmentalIssues: [
            "Churchill River Diversion reduced natural flow 75%",
            "Impacts on Lake Winnipeg (receiving diverted water)",
            "Estuarine habitat changes",
            "Climate change affecting permafrost",
            "Beluga whale habitat concerns",
            "Mercury in reservoirs"
        ],
        
        waterDisputes: [
            {
                title: "Churchill River Diversion",
                description: "1977 diversion reduced Churchill's flow by 75%, impacting downstream communities and creating Manitoba-Saskatchewan tensions."
            },
            {
                title: "Indigenous Rights",
                description: "First Nations communities affected by diversion have ongoing claims for compensation and mitigation."
            }
        ],
        
        historicalImportance: [
            {
                title: "Fur Trade Highway",
                description: "The Churchill was a vital fur trade route, with Methye Portage connecting it to the Athabasca system."
            },
            {
                title: "Hudson's Bay Company",
                description: "Churchill was established as a trading post in 1717, becoming a key HBC fort."
            },
            {
                title: "Polar Bear Capital",
                description: "Churchill is world-famous for polar bear viewing, with bears gathering at the river mouth in fall."
            }
        ]
    },

    // ========================================
    // 54. PILCOMAYO RIVER
    // ========================================
    {
        id: "pilcomayo",
        name: "Pilcomayo River",
        length: 1590,
        continent: "south-america",
        image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800",
        
        countries: [
            { name: "Bolivia", flag: "🇧🇴" },
            { name: "Argentina", flag: "🇦🇷" },
            { name: "Paraguay", flag: "🇵🇾" }
        ],
        
        states: [
            "Potosí Department", "Chuquisaca Department", "Tarija Department",
            "Formosa Province", "Salta Province",
            "Boquerón Department", "Presidente Hayes Department"
        ],
        
        source: {
            location: "Andes Mountains, near Potosí, Bolivia",
            type: "Andean streams",
            elevation: "3,900 m",
            coordinates: [-19.5000, -65.5000]
        },
        
        mouth: {
            location: "Paraguay River, near Asunción (variable)",
            type: "Confluence/Delta",
            delta: "Diffuse channels in Gran Chaco - often doesn't reach Paraguay River",
            coordinates: [-25.0000, -57.6667]
        },
        
        tributaries: {
            leftBank: [
                "Río Pilaya",
                "Río Tarairi"
            ],
            rightBank: [
                "Río Bermejo (parallel, not direct)",
                "Smaller Chaco streams"
            ]
        },
        
        distributaries: [
            "Multiple diffuse channels in Chaco",
            "Estero Patiño wetlands"
        ],
        
        majorCities: [
            "Potosí", "Sucre", "Villamontes", "Villa Montes",
            "Mariscal Estigarribia", "Filadelfia"
        ],
        
        dams: [
            { name: "No major dams", details: "River is largely unregulated, but heavily extracted for irrigation" }
        ],
        
        basinArea: "270,000 km²",
        discharge: "190 m³/s (highly variable, often zero downstream)",
        
        riverPath: [
            [-19.50, -65.50],   // Source - Andes near Potosí
            [-20.00, -65.00],
            [-20.50, -64.00],
            [-21.00, -63.50],
            [-21.26, -63.47],   // Villamontes
            [-21.50, -63.00],
            [-22.00, -62.50],
            [-22.27, -62.00],   // Bolivia-Argentina-Paraguay tripoint
            [-22.50, -61.50],
            [-23.00, -61.00],
            [-23.50, -60.50],
            [-24.00, -59.50],
            [-24.50, -58.50],
            [-25.00, -57.67]    // Paraguay River (Variable Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Río Pilaya",
                path: [
                    [-20.00, -64.00],
                    [-20.50, -64.20],
                    [-20.80, -64.00]   // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Estero Patiño",
                path: [
                    [-23.50, -60.00],
                    [-24.00, -59.00]   // Diffuse wetlands
                ]
            },
            {
                name: "Northern Channel (to Argentina)",
                path: [
                    [-23.00, -61.00],
                    [-24.00, -60.50]   // Formosa
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Potosí", coords: [-19.59, -65.75] },
            { name: "Villamontes", coords: [-21.26, -63.47] },
            { name: "Mariscal Estigarribia", coords: [-22.03, -60.62] },
            { name: "Filadelfia", coords: [-22.35, -60.03] }
        ],
        
        damCoordinates: [
            { name: "No Major Dams", coords: [-21.50, -63.00], details: "Largely unregulated flow" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Potosí Highlands", icon: "🏔️", description: "Andean source" },
            { progress: 0.15, name: "Bolivian Valleys", icon: "🏞️", description: "Descent from Andes" },
            { progress: 0.30, name: "Villamontes", icon: "🏙️", description: "Bolivian Chaco town" },
            { progress: 0.40, name: "Tripoint Border", icon: "🛂", description: "Bolivia-Argentina-Paraguay" },
            { progress: 0.55, name: "Gran Chaco", icon: "🌵", description: "Dry forest/savanna" },
            { progress: 0.70, name: "Channel Splitting", icon: "🔀", description: "River divides" },
            { progress: 0.85, name: "Estero Patiño", icon: "🌿", description: "Extensive wetlands" },
            { progress: 1.0, name: "Paraguay River (Variable)", icon: "🌊", description: "Often doesn't reach" }
        ],
        
        economicImportance: [
            "Mining water supply (Potosí silver region)",
            "Irrigation in Bolivian valleys",
            "Cattle ranching in Chaco",
            "International boundary river",
            "Indigenous communities' water source",
            "Groundwater recharge"
        ],
        
        environmentalIssues: [
            "Mining pollution (heavy metals from Potosí)",
            "Sedimentation blocking natural channels",
            "Over-extraction for irrigation",
            "Climate change and drought",
            "Channel migration and flooding",
            "Often fails to reach Paraguay River"
        ],
        
        waterDisputes: [
            {
                title: "Tripartite Commission",
                description: "Argentina, Bolivia, and Paraguay manage the river through a commission, dealing with changing course and water distribution."
            },
            {
                title: "Mining Pollution",
                description: "Downstream countries have raised concerns about heavy metal pollution from Bolivian mining operations."
            }
        ],
        
        historicalImportance: [
            {
                title: "Chaco War (1932-1935)",
                description: "The Pilcomayo region was the main theater of the Chaco War between Bolivia and Paraguay, one of the bloodiest South American conflicts."
            },
            {
                title: "Mennonite Colonies",
                description: "Mennonite settlers established colonies in the Paraguayan Chaco along the Pilcomayo in the 1920s-30s."
            },
            {
                title: "Indigenous Peoples",
                description: "Home to Wichí, Nivaclé, and other Chaco indigenous groups who depend on the river."
            }
        ]
    },

    // ========================================
    // 55. MAGDALENA RIVER
    // ========================================
    {
        id: "magdalena",
        name: "Magdalena River",
        length: 1528,
        continent: "south-america",
        image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800",
        
        countries: [
            { name: "Colombia", flag: "🇨🇴" }
        ],
        
        states: [
            "Huila", "Tolima", "Cundinamarca", "Boyacá",
            "Caldas", "Antioquia", "Santander", "Bolívar",
            "Cesar", "Magdalena", "Atlántico"
        ],
        
        source: {
            location: "Colombian Massif, Huila Department",
            type: "Páramo/Highland springs",
            elevation: "3,685 m",
            coordinates: [1.9333, -76.5833]
        },
        
        mouth: {
            location: "Caribbean Sea, at Barranquilla",
            type: "Delta",
            delta: "Bocas de Ceniza and Canal del Dique",
            coordinates: [11.0500, -74.8333]
        },
        
        tributaries: {
            leftBank: [
                "Río Saldaña",
                "Río Bogotá",
                "Río Negro",
                "Río Carare",
                "Río Sogamoso",
                "Río Lebrija",
                "Río Cesar"
            ],
            rightBank: [
                "Río Cabrera",
                "Río Sumapaz",
                "Río Opón",
                "Río Cimitarra",
                "Río Cauca",
                "Río San Jorge"
            ]
        },
        
        distributaries: [
            "Bocas de Ceniza (main)",
            "Canal del Dique",
            "Ciénaga Grande channels"
        ],
        
        majorCities: [
            "Neiva", "Girardot", "Honda", "La Dorada",
            "Puerto Berrío", "Barrancabermeja", "Magangué",
            "Mompox", "Barranquilla", "Cartagena"
        ],
        
        dams: [
            { name: "Betania Dam", details: "Huila, 540 MW, 1987" },
            { name: "El Quimbo Dam", details: "Huila, 400 MW, 2015, controversial" },
            { name: "Hidrosogamoso Dam", details: "Santander, 820 MW, 2014" }
        ],
        
        basinArea: "257,000 km²",
        discharge: "7,200 m³/s",
        
        riverPath: [
            [1.93, -76.58],     // Source - Colombian Massif
            [2.50, -75.50],
            [2.93, -75.29],     // Neiva
            [3.50, -75.00],
            [4.30, -74.80],     // Girardot
            [5.00, -74.50],
            [5.21, -74.74],     // Honda
            [5.50, -74.50],
            [6.00, -74.30],
            [6.50, -74.00],
            [7.07, -73.85],     // Barrancabermeja
            [8.00, -73.80],
            [8.50, -74.00],
            [9.00, -74.30],
            [9.24, -74.43],     // Mompox
            [10.00, -74.60],
            [10.50, -74.70],
            [10.96, -74.78],    // Barranquilla
            [11.05, -74.83]     // Caribbean Sea (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Río Cauca",
                path: [
                    [2.00, -77.00],    // Source
                    [3.50, -76.50],    // Cali
                    [6.50, -75.50],    // Medellín area
                    [8.00, -74.50],
                    [9.00, -74.50]     // Confluence
                ]
            },
            {
                name: "Río Bogotá",
                path: [
                    [4.70, -74.07],    // Near Bogotá
                    [4.80, -74.30],
                    [4.70, -74.50]     // Confluence
                ]
            },
            {
                name: "Río Sogamoso",
                path: [
                    [6.50, -73.00],
                    [7.00, -73.50],
                    [7.10, -73.90]     // Confluence
                ]
            },
            {
                name: "Río Cesar",
                path: [
                    [10.50, -73.00],   // Sierra Nevada
                    [9.50, -73.50],
                    [9.30, -74.00]     // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Canal del Dique",
                path: [
                    [10.00, -74.60],
                    [10.40, -75.50],   // Cartagena
                    [10.42, -75.53]    // Caribbean
                ]
            },
            {
                name: "Bocas de Ceniza",
                path: [
                    [10.96, -74.78],
                    [11.05, -74.83]    // Caribbean
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Neiva", coords: [2.93, -75.29] },
            { name: "Girardot", coords: [4.30, -74.80] },
            { name: "Honda", coords: [5.21, -74.74] },
            { name: "Barrancabermeja", coords: [7.07, -73.85] },
            { name: "Mompox", coords: [9.24, -74.43] },
            { name: "Barranquilla", coords: [10.96, -74.78] },
            { name: "Cartagena", coords: [10.39, -75.48] }
        ],
        
        damCoordinates: [
            { name: "Betania Dam", coords: [2.70, -75.45], details: "540 MW hydroelectric" },
            { name: "El Quimbo Dam", coords: [2.45, -75.60], details: "400 MW - Controversial displacement" },
            { name: "Hidrosogamoso Dam", coords: [6.85, -73.45], details: "820 MW hydroelectric" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Colombian Massif", icon: "🏔️", description: "Páramo source" },
            { progress: 0.10, name: "Neiva", icon: "🏙️", description: "Upper Magdalena" },
            { progress: 0.15, name: "Betania Dam", icon: "🏗️", description: "First major dam" },
            { progress: 0.25, name: "Girardot", icon: "🌡️", description: "Hot lands gateway" },
            { progress: 0.35, name: "Honda", icon: "🏛️", description: "Historic rapids town" },
            { progress: 0.50, name: "Barrancabermeja", icon: "🛢️", description: "Oil refinery city" },
            { progress: 0.60, name: "Cauca Confluence", icon: "🔀", description: "Major tributary joins" },
            { progress: 0.70, name: "Mompox", icon: "🏛️", description: "UNESCO colonial town" },
            { progress: 0.85, name: "Delta Wetlands", icon: "🌿", description: "Ciénaga Grande" },
            { progress: 0.95, name: "Barranquilla", icon: "🏙️", description: "Colombia's port city" },
            { progress: 1.0, name: "Caribbean Sea", icon: "🌊", description: "Bocas de Ceniza" }
        ],
        
        economicImportance: [
            "Colombia's principal river - 'River of the Nation'",
            "Historically main transport artery",
            "Oil industry (Barrancabermeja refineries)",
            "Hydroelectric power generation",
            "Agriculture and cattle ranching",
            "Ports and trade (Barranquilla)"
        ],
        
        environmentalIssues: [
            "Severe sedimentation from deforestation",
            "Oil industry pollution",
            "Municipal sewage discharge",
            "Fish population decline",
            "Wetland loss (Ciénaga Grande)",
            "Navigation channel deterioration"
        ],
        
        waterDisputes: [
            {
                title: "Dam Displacement",
                description: "El Quimbo Dam displaced thousands of people, leading to ongoing protests and legal battles."
            },
            {
                title: "Navigation Restoration",
                description: "Multi-billion dollar project to restore navigation on the Magdalena faces environmental opposition."
            }
        ],
        
        historicalImportance: [
            {
                title: "Spanish Conquest",
                description: "Conquistadors Gonzalo Jiménez de Quesada ascended the Magdalena in 1536 to found Bogotá."
            },
            {
                title: "Steamboat Era",
                description: "From the 1820s-1960s, steamboats on the Magdalena were Colombia's main transport, immortalized in García Márquez's novels."
            },
            {
                title: "Mompox",
                description: "This UNESCO World Heritage colonial town was a wealthy trading center on the Magdalena."
            },
            {
                title: "Simón Bolívar",
                description: "The Liberator traveled and died near the Magdalena; his last journey was down the river."
            }
        ]
    },
        // ========================================
    // 56. OKA RIVER
    // ========================================
    {
        id: "oka",
        name: "Oka River",
        length: 1500,
        continent: "europe",
        image: "https://images.unsplash.com/photo-1580502304784-8985b7eb7260?w=800",
        
        countries: [
            { name: "Russia", flag: "🇷🇺" }
        ],
        
        states: [
            "Oryol Oblast", "Tula Oblast", "Kaluga Oblast",
            "Moscow Oblast", "Ryazan Oblast", "Vladimir Oblast",
            "Nizhny Novgorod Oblast"
        ],
        
        source: {
            location: "Central Russian Upland, Oryol Oblast",
            type: "Springs",
            elevation: "226 m",
            coordinates: [52.3667, 36.2333]
        },
        
        mouth: {
            location: "Volga River, at Nizhny Novgorod",
            type: "Confluence",
            delta: "Joins Volga at historic Strelka (Arrow)",
            coordinates: [56.3283, 43.9833]
        },
        
        tributaries: {
            leftBank: [
                "Zusha River",
                "Upa River",
                "Zhizdra River",
                "Ugra River",
                "Protva River",
                "Nara River",
                "Lopasnya River"
            ],
            rightBank: [
                "Kroma River",
                "Tsna River",
                "Moksha River",
                "Klyazma River"
            ]
        },
        
        distributaries: [
            "Oka channels at Volga confluence"
        ],
        
        majorCities: [
            "Oryol", "Belev", "Kaluga", "Serpukhov",
            "Kashira", "Kolomna", "Ryazan", "Kasimov",
            "Murom", "Pavlovo", "Nizhny Novgorod"
        ],
        
        dams: [
            { name: "Kolomna Dam", details: "Navigation and water supply" },
            { name: "Beloomut Hydroelectric", details: "Small scale, navigation" },
            { name: "Various navigation locks", details: "Maintain shipping channel" }
        ],
        
        basinArea: "245,000 km²",
        discharge: "1,258 m³/s",
        
        riverPath: [
            [52.37, 36.23],    // Source - Oryol Oblast
            [52.50, 36.50],
            [52.97, 36.06],    // Oryol
            [53.50, 36.00],
            [53.80, 35.90],    // Belev
            [54.30, 36.10],
            [54.53, 36.28],    // Kaluga
            [54.90, 37.40],    // Serpukhov
            [54.83, 38.17],    // Kashira
            [55.10, 38.77],    // Kolomna
            [54.62, 39.73],    // Ryazan
            [54.50, 41.00],
            [54.94, 41.39],    // Kasimov
            [55.50, 42.00],
            [55.58, 42.05],    // Murom
            [55.90, 43.00],
            [56.10, 43.50],
            [56.33, 43.98]     // Volga River (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Moskva River",
                path: [
                    [55.75, 37.62],    // Moscow
                    [55.45, 38.50],
                    [55.10, 38.77]     // Confluence at Kolomna
                ]
            },
            {
                name: "Klyazma River",
                path: [
                    [56.00, 37.50],
                    [56.12, 40.40],    // Vladimir
                    [56.15, 43.00]     // Confluence
                ]
            },
            {
                name: "Moksha River",
                path: [
                    [53.50, 43.00],
                    [54.50, 42.50],
                    [55.00, 42.00]     // Confluence
                ]
            },
            {
                name: "Ugra River",
                path: [
                    [54.50, 34.50],
                    [54.40, 35.50],
                    [54.45, 36.00]     // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Oka-Volga Confluence",
                path: [
                    [56.30, 43.90],
                    [56.33, 43.98]     // Volga
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Oryol", coords: [52.97, 36.06] },
            { name: "Kaluga", coords: [54.53, 36.28] },
            { name: "Serpukhov", coords: [54.92, 37.41] },
            { name: "Kolomna", coords: [55.10, 38.77] },
            { name: "Ryazan", coords: [54.62, 39.73] },
            { name: "Murom", coords: [55.58, 42.05] },
            { name: "Nizhny Novgorod", coords: [56.33, 43.98] }
        ],
        
        damCoordinates: [
            { name: "Navigation Locks", coords: [55.20, 39.00], details: "Multiple locks for shipping" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Oryol Source", icon: "🏞️", description: "Central Russian Upland" },
            { progress: 0.10, name: "Oryol", icon: "🏙️", description: "Regional capital" },
            { progress: 0.25, name: "Kaluga", icon: "🏙️", description: "Space exploration history" },
            { progress: 0.35, name: "Ugra Confluence", icon: "🔀", description: "Historic battle site" },
            { progress: 0.45, name: "Serpukhov", icon: "🏘️", description: "Moscow Oblast" },
            { progress: 0.55, name: "Kolomna", icon: "🏰", description: "Historic kremlin" },
            { progress: 0.65, name: "Ryazan", icon: "🏙️", description: "Ancient principality" },
            { progress: 0.80, name: "Murom", icon: "🏛️", description: "Legendary city of Ilya Muromets" },
            { progress: 0.95, name: "Nizhny Novgorod", icon: "🏙️", description: "Volga-Oka confluence" },
            { progress: 1.0, name: "Volga River", icon: "🌊", description: "Strelka confluence" }
        ],
        
        economicImportance: [
            "Largest right tributary of the Volga",
            "Part of Unified Deep Water System of Russia",
            "Navigation for cargo transport",
            "Industrial water supply",
            "Fishing industry",
            "Tourism (Golden Ring cities)"
        ],
        
        environmentalIssues: [
            "Industrial pollution",
            "Agricultural runoff",
            "Urban wastewater discharge",
            "Eutrophication in reservoirs",
            "Low flow periods affecting navigation",
            "Dam impacts on fish migration"
        ],
        
        waterDisputes: [
            {
                title: "Water Quality Management",
                description: "Multiple oblasts coordinate on pollution control and water quality standards across the basin."
            }
        ],
        
        historicalImportance: [
            {
                title: "Great Stand on the Ugra (1480)",
                description: "The confrontation on the Ugra tributary ended Mongol-Tatar rule over Russia."
            },
            {
                title: "Russian Heartland",
                description: "The Oka basin was the core of the medieval Muscovite state and Russian Orthodox culture."
            },
            {
                title: "Ilya Muromets",
                description: "Legendary Russian folk hero came from Murom on the Oka, celebrated in epic bylina poems."
            },
            {
                title: "Nizhny Novgorod Fair",
                description: "The historic trade fair at the Oka-Volga confluence was the largest in Russia."
            }
        ]
    },

    // ========================================
    // 57. PECOS RIVER
    // ========================================
    {
        id: "pecos",
        name: "Pecos River",
        length: 1490,
        continent: "north-america",
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
        
        countries: [
            { name: "United States", flag: "🇺🇸" }
        ],
        
        states: [
            "New Mexico", "Texas"
        ],
        
        source: {
            location: "Sangre de Cristo Mountains, New Mexico",
            type: "Mountain springs",
            elevation: "3,596 m",
            coordinates: [35.7833, -105.6667]
        },
        
        mouth: {
            location: "Rio Grande, near Langtry, Texas",
            type: "Confluence",
            delta: "Joins Rio Grande at Amistad Reservoir",
            coordinates: [29.7833, -101.5333]
        },
        
        tributaries: {
            leftBank: [
                "Gallinas River",
                "Hondo River",
                "Felix River",
                "Penasco River"
            ],
            rightBank: [
                "Black River",
                "Delaware River",
                "Independence Creek"
            ]
        },
        
        distributaries: [
            "Pecos channels at Rio Grande confluence"
        ],
        
        majorCities: [
            "Pecos", "Santa Rosa", "Fort Sumner", "Roswell",
            "Artesia", "Carlsbad", "Pecos (Texas)", "Iraan"
        ],
        
        dams: [
            { name: "Santa Rosa Dam", details: "New Mexico, 1980, flood control" },
            { name: "Sumner Dam", details: "New Mexico, 1937, irrigation" },
            { name: "Brantley Dam", details: "New Mexico, 1988, irrigation" },
            { name: "Avalon Dam", details: "New Mexico, 1894, irrigation" },
            { name: "Red Bluff Dam", details: "Texas, 1936, irrigation" }
        ],
        
        basinArea: "115,000 km²",
        discharge: "18 m³/s (highly depleted)",
        
        riverPath: [
            [35.78, -105.67],   // Source - Sangre de Cristo
            [35.00, -105.00],
            [34.94, -104.68],   // Santa Rosa
            [34.47, -104.24],   // Fort Sumner
            [33.50, -104.00],
            [33.39, -104.52],   // Roswell
            [32.84, -104.40],   // Artesia
            [32.42, -104.23],   // Carlsbad
            [32.00, -104.00],
            [31.50, -103.80],
            [31.00, -103.50],
            [30.73, -103.12],   // Pecos, Texas
            [30.50, -102.50],
            [30.20, -102.00],
            [29.78, -101.53]    // Rio Grande (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Black River",
                path: [
                    [32.30, -104.80],
                    [32.35, -104.50],
                    [32.40, -104.30]   // Confluence
                ]
            },
            {
                name: "Delaware River",
                path: [
                    [32.00, -104.80],
                    [31.80, -104.20],
                    [31.70, -104.10]   // Confluence
                ]
            },
            {
                name: "Independence Creek",
                path: [
                    [30.50, -101.50],
                    [30.40, -101.70],
                    [30.20, -101.80]   // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Pecos-Rio Grande",
                path: [
                    [29.80, -101.55],
                    [29.78, -101.53]   // Rio Grande
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Santa Rosa", coords: [34.94, -104.68] },
            { name: "Fort Sumner", coords: [34.47, -104.24] },
            { name: "Roswell", coords: [33.39, -104.52] },
            { name: "Artesia", coords: [32.84, -104.40] },
            { name: "Carlsbad", coords: [32.42, -104.23] },
            { name: "Pecos", coords: [30.73, -103.12] }
        ],
        
        damCoordinates: [
            { name: "Santa Rosa Dam", coords: [35.00, -104.70], details: "Flood control reservoir" },
            { name: "Brantley Dam", coords: [32.55, -104.38], details: "Irrigation reservoir" },
            { name: "Red Bluff Dam", coords: [31.90, -103.93], details: "Texas irrigation" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Sangre de Cristo Mountains", icon: "🏔️", description: "Source in New Mexico" },
            { progress: 0.15, name: "Santa Rosa", icon: "🏘️", description: "Blue Hole diving" },
            { progress: 0.25, name: "Fort Sumner", icon: "🤠", description: "Billy the Kid buried here" },
            { progress: 0.40, name: "Roswell", icon: "👽", description: "UFO incident city" },
            { progress: 0.50, name: "Carlsbad", icon: "🦇", description: "Carlsbad Caverns nearby" },
            { progress: 0.60, name: "New Mexico-Texas Border", icon: "🛂", description: "State line crossing" },
            { progress: 0.75, name: "Pecos, Texas", icon: "🤠", description: "Wild West legend" },
            { progress: 0.90, name: "Amistad Reservoir", icon: "🌊", description: "International reservoir" },
            { progress: 1.0, name: "Rio Grande", icon: "🌊", description: "Confluence" }
        ],
        
        economicImportance: [
            "Irrigation for agriculture (pecans, cotton, alfalfa)",
            "Oil and gas industry water supply",
            "Carlsbad Caverns National Park tourism",
            "Cattle ranching",
            "Municipal water supply",
            "Recreation and fishing"
        ],
        
        environmentalIssues: [
            "Severely over-allocated - often dry",
            "Groundwater depletion",
            "Invasive salt cedar (tamarisk)",
            "Salinization",
            "Endangered species (Pecos bluntnose shiner)",
            "Climate change and drought"
        ],
        
        waterDisputes: [
            {
                title: "Pecos River Compact (1949)",
                description: "New Mexico and Texas compact governs water allocation; ongoing disputes and litigation over compliance."
            },
            {
                title: "Texas v. New Mexico",
                description: "Multiple lawsuits over New Mexico's failure to deliver required water to Texas."
            }
        ],
        
        historicalImportance: [
            {
                title: "Wild West Legend",
                description: "'West of the Pecos' became a phrase meaning lawless frontier territory; Judge Roy Bean held court here."
            },
            {
                title: "Billy the Kid",
                description: "The famous outlaw was killed and buried at Fort Sumner on the Pecos in 1881."
            },
            {
                title: "Cattle Drives",
                description: "The Pecos was a key watering point on the Goodnight-Loving Trail cattle drives."
            },
            {
                title: "Pueblo Peoples",
                description: "Pecos Pueblo, one of the largest pre-Columbian settlements, thrived on the river."
            }
        ]
    },

    // ========================================
    // 58. GODAVARI RIVER
    // ========================================
    {
        id: "godavari",
        name: "Godavari River",
        length: 1465,
        continent: "asia",
        image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800",
        
        countries: [
            { name: "India", flag: "🇮🇳" }
        ],
        
        states: [
            "Maharashtra", "Telangana", "Chhattisgarh",
            "Andhra Pradesh", "Odisha"
        ],
        
        source: {
            location: "Trimbakeshwar, Nashik, Maharashtra",
            type: "Sacred spring at Brahmagiri Hill",
            elevation: "920 m",
            coordinates: [19.9333, 73.5333]
        },
        
        mouth: {
            location: "Bay of Bengal, Andhra Pradesh",
            type: "Delta",
            delta: "Godavari Delta - 5,000 km², major rice region",
            coordinates: [16.7333, 82.2500]
        },
        
        tributaries: {
            leftBank: [
                "Pravara River",
                "Purna River",
                "Manjira River",
                "Manair River",
                "Kinnerasani River"
            ],
            rightBank: [
                "Darna River",
                "Kadva River",
                "Penganga River",
                "Wardha River",
                "Wainganga River",
                "Pranhita River",
                "Indravati River",
                "Sabari River"
            ]
        },
        
        distributaries: [
            "Gautami Godavari",
            "Vasishta Godavari",
            "Vainateyam",
            "Tulya"
        ],
        
        majorCities: [
            "Nashik", "Nanded", "Nizamabad", "Mancherial",
            "Rajahmundry", "Kakinada", "Bhimavaram", "Narasapur"
        ],
        
        dams: [
            { name: "Jayakwadi Dam", details: "Maharashtra, 1976, irrigation" },
            { name: "Sriramsagar Dam", details: "Telangana, 9 MW, 1970" },
            { name: "Dummugudem Barrage", details: "Telangana, navigation" },
            { name: "Polavaram Dam", details: "Andhra Pradesh, under construction, 960 MW" },
            { name: "Sir Arthur Cotton Barrage", details: "Andhra Pradesh, 1852, historic" }
        ],
        
        basinArea: "312,812 km²",
        discharge: "3,505 m³/s",
        
        riverPath: [
            [19.93, 73.53],    // Source - Trimbakeshwar
            [20.00, 74.50],
            [19.92, 75.32],    // Nashik area
            [19.50, 76.50],
            [19.15, 77.32],    // Nanded
            [18.50, 78.50],
            [18.67, 78.10],    // Nizamabad area
            [18.80, 79.50],
            [18.50, 80.00],
            [18.50, 80.50],
            [17.50, 81.00],
            [17.00, 81.70],    // Rajahmundry
            [16.75, 81.80],
            [16.73, 82.25]     // Bay of Bengal (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Pranhita River",
                path: [
                    [20.50, 79.50],    // Central India
                    [19.50, 80.00],
                    [18.90, 80.00]     // Confluence
                ]
            },
            {
                name: "Indravati River",
                path: [
                    [19.50, 82.50],    // Odisha
                    [19.00, 81.50],
                    [18.80, 80.50]     // Confluence
                ]
            },
            {
                name: "Manjira River",
                path: [
                    [18.00, 76.00],
                    [18.30, 77.50],
                    [18.50, 78.30]     // Confluence
                ]
            },
            {
                name: "Sabari River",
                path: [
                    [18.50, 82.50],
                    [17.50, 81.50],
                    [17.30, 81.40]     // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Gautami Godavari",
                path: [
                    [17.00, 81.70],
                    [16.85, 82.10]     // Bay of Bengal
                ]
            },
            {
                name: "Vasishta Godavari",
                path: [
                    [17.00, 81.70],
                    [16.55, 82.00]     // Bay of Bengal
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Nashik", coords: [19.99, 73.79] },
            { name: "Nanded", coords: [19.15, 77.32] },
            { name: "Nizamabad", coords: [18.67, 78.10] },
            { name: "Rajahmundry", coords: [17.00, 81.78] },
            { name: "Kakinada", coords: [16.94, 82.24] }
        ],
        
        damCoordinates: [
            { name: "Jayakwadi Dam", coords: [19.50, 75.38], details: "Maharashtra's largest reservoir" },
            { name: "Sriramsagar Dam", coords: [18.97, 78.35], details: "Telangana irrigation" },
            { name: "Sir Arthur Cotton Barrage", coords: [16.95, 81.75], details: "1852 - Historic British barrage" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Trimbakeshwar", icon: "🛕", description: "Sacred source, Jyotirlinga" },
            { progress: 0.10, name: "Nashik", icon: "🏙️", description: "Kumbh Mela city" },
            { progress: 0.25, name: "Jayakwadi Dam", icon: "🏗️", description: "Major reservoir" },
            { progress: 0.40, name: "Nanded", icon: "🛕", description: "Sikh holy city" },
            { progress: 0.50, name: "Telangana Reaches", icon: "🏞️", description: "Deccan Plateau" },
            { progress: 0.60, name: "Pranhita Confluence", icon: "🔀", description: "Major tributary" },
            { progress: 0.70, name: "Papikondalu Gorge", icon: "🏜️", description: "Scenic gorge" },
            { progress: 0.85, name: "Rajahmundry", icon: "🌉", description: "Delta gateway" },
            { progress: 0.95, name: "Godavari Delta", icon: "🌿", description: "Rich agricultural zone" },
            { progress: 1.0, name: "Bay of Bengal", icon: "🌊", description: "River mouth" }
        ],
        
        economicImportance: [
            "Second longest river in India (after Ganges)",
            "Called 'Dakshin Ganga' (Ganges of the South)",
            "Irrigation for major agricultural region",
            "Rice, sugarcane, and tobacco cultivation",
            "Hydroelectric and irrigation projects",
            "Religious tourism (Pushkaram festival)"
        ],
        
        environmentalIssues: [
            "Industrial pollution from upstream cities",
            "Agricultural runoff and pesticides",
            "Sand mining damaging river ecosystem",
            "Reduced flow due to dam diversions",
            "Encroachment on floodplains",
            "Flooding during monsoon"
        ],
        
        waterDisputes: [
            {
                title: "Godavari Water Disputes Tribunal",
                description: "Interstate tribunal resolved disputes between Maharashtra, Andhra Pradesh, Karnataka, Madhya Pradesh, and Odisha (1980)."
            },
            {
                title: "Polavaram Dam Controversy",
                description: "Massive dam project in Andhra Pradesh faces opposition from Telangana and Odisha over submergence."
            }
        ],
        
        historicalImportance: [
            {
                title: "Sacred River",
                description: "The Godavari is one of India's seven sacred rivers; bathing in it is believed to cleanse sins."
            },
            {
                title: "Ramayana Connection",
                description: "According to legend, Lord Rama lived in exile along the Godavari; Panchavati is near Nashik."
            },
            {
                title: "Kumbh Mela",
                description: "The Nashik Kumbh Mela, held every 12 years on the Godavari, attracts millions of pilgrims."
            },
            {
                title: "Sir Arthur Cotton",
                description: "British engineer Cotton built the famous barrage in 1852, revolutionizing delta irrigation."
            }
        ]
    },

    // ========================================
    // 59. PARNAÍBA RIVER
    // ========================================
    {
        id: "parnaiba",
        name: "Parnaíba River",
        length: 1485,
        continent: "south-america",
        image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800",
        
        countries: [
            { name: "Brazil", flag: "🇧🇷" }
        ],
        
        states: [
            "Minas Gerais", "Piauí", "Maranhão"
        ],
        
        source: {
            location: "Chapada das Mangabeiras, Piauí/Minas Gerais border",
            type: "Cerrado highland springs",
            elevation: "700 m",
            coordinates: [-10.4667, -45.9500]
        },
        
        mouth: {
            location: "Atlantic Ocean, Piauí/Maranhão border",
            type: "Delta",
            delta: "Parnaíba Delta - second largest delta in Brazil, 2,750 km²",
            coordinates: [-2.7667, -41.8167]
        },
        
        tributaries: {
            leftBank: [
                "Rio Balsas",
                "Rio das Balsas",
                "Rio Uruçuí-Preto"
            ],
            rightBank: [
                "Rio Gurgueia",
                "Rio Canindé",
                "Rio Piauí",
                "Rio Poti",
                "Rio Longá"
            ]
        },
        
        distributaries: [
            "Igaraçu Channel",
            "Santa Rosa Channel",
            "Melancieira Channel",
            "Caju Channel",
            "Tutóia Channel"
        ],
        
        majorCities: [
            "Corrente", "Bom Jesus", "Uruçuí", "Floriano",
            "Teresina", "União", "Parnaíba", "Luís Correia"
        ],
        
        dams: [
            { name: "Boa Esperança Dam", details: "Piauí, 237 MW, 1970" },
            { name: "Castelo Branco Dam", details: "Piauí, 1986, flood control" }
        ],
        
        basinArea: "344,112 km²",
        discharge: "763 m³/s",
        
        riverPath: [
            [-10.47, -45.95],   // Source - Chapada das Mangabeiras
            [-10.00, -45.50],
            [-9.50, -45.00],
            [-9.00, -44.50],
            [-8.00, -44.00],
            [-7.50, -43.50],
            [-6.77, -43.02],    // Floriano
            [-6.00, -42.50],
            [-5.09, -42.80],    // Teresina
            [-4.50, -42.50],
            [-4.00, -42.00],
            [-3.50, -41.80],
            [-3.08, -41.78],    // Parnaíba city
            [-2.77, -41.82]     // Atlantic Ocean (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Rio Poti",
                path: [
                    [-5.00, -40.50],   // Ceará border
                    [-5.05, -41.50],
                    [-5.08, -42.75]    // Confluence at Teresina
                ]
            },
            {
                name: "Rio Gurgueia",
                path: [
                    [-9.50, -44.00],
                    [-8.50, -43.80],
                    [-8.00, -43.50]    // Confluence
                ]
            },
            {
                name: "Rio Longá",
                path: [
                    [-4.00, -42.00],
                    [-3.50, -42.00],
                    [-3.20, -41.90]    // Confluence
                ]
            },
            {
                name: "Rio Canindé",
                path: [
                    [-7.00, -41.50],
                    [-6.50, -42.00],
                    [-6.00, -42.30]    // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Igaraçu Channel",
                path: [
                    [-2.80, -41.80],
                    [-2.70, -41.65]    // Atlantic
                ]
            },
            {
                name: "Santa Rosa Channel",
                path: [
                    [-2.80, -41.80],
                    [-2.60, -42.00]    // Atlantic
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Corrente", coords: [-10.44, -45.16] },
            { name: "Bom Jesus", coords: [-9.07, -44.36] },
            { name: "Floriano", coords: [-6.77, -43.02] },
            { name: "Teresina", coords: [-5.09, -42.80] },
            { name: "Parnaíba", coords: [-2.91, -41.78] },
            { name: "Luís Correia", coords: [-2.88, -41.67] }
        ],
        
        damCoordinates: [
            { name: "Boa Esperança Dam", coords: [-6.75, -43.57], details: "237 MW hydroelectric" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Chapada das Mangabeiras", icon: "🏔️", description: "Cerrado highlands source" },
            { progress: 0.15, name: "Cerrado Landscape", icon: "🌿", description: "Savanna biome" },
            { progress: 0.30, name: "Boa Esperança Dam", icon: "🏗️", description: "Hydroelectric reservoir" },
            { progress: 0.40, name: "Floriano", icon: "🏘️", description: "Mid-course city" },
            { progress: 0.55, name: "Poti Confluence", icon: "🔀", description: "Major tributary" },
            { progress: 0.60, name: "Teresina", icon: "🏙️", description: "Piauí capital" },
            { progress: 0.75, name: "Northern Reaches", icon: "🌴", description: "Coastal transition" },
            { progress: 0.85, name: "Parnaíba City", icon: "🏙️", description: "Delta gateway" },
            { progress: 0.95, name: "Parnaíba Delta", icon: "🏝️", description: "Islands and mangroves" },
            { progress: 1.0, name: "Atlantic Ocean", icon: "🌊", description: "Multiple mouths" }
        ],
        
        economicImportance: [
            "Only navigable river in northeast Brazil",
            "Hydroelectric power (Boa Esperança)",
            "Irrigation for agriculture",
            "Carnauba wax production",
            "Fishing industry",
            "Delta ecotourism"
        ],
        
        environmentalIssues: [
            "Deforestation in cerrado headwaters",
            "Soybean agriculture expansion",
            "Water extraction reducing flow",
            "Sedimentation affecting delta",
            "Urban pollution from Teresina",
            "Climate change and drought"
        ],
        
        waterDisputes: [
            {
                title: "Interstate Water Management",
                description: "Piauí and Maranhão coordinate on delta management and water allocation."
            }
        ],
        
        historicalImportance: [
            {
                title: "Colonial Settlement",
                description: "The Parnaíba was a key route for Portuguese colonization of Piauí in the 17th-18th centuries."
            },
            {
                title: "Cattle Economy",
                description: "The river valley was central to Brazil's northeastern cattle industry for centuries."
            },
            {
                title: "Carnauba Wax",
                description: "The Parnaíba region is famous for carnauba palm wax, called 'Tree of Life' by locals."
            }
        ]
    },

    // ========================================
    // 60. RED RIVER OF THE NORTH
    // ========================================
    {
        id: "red-river-north",
        name: "Red River of the North",
        length: 1360,
        continent: "north-america",
        image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800",
        
        countries: [
            { name: "United States", flag: "🇺🇸" },
            { name: "Canada", flag: "🇨🇦" }
        ],
        
        states: [
            "Minnesota", "North Dakota", "South Dakota",
            "Manitoba"
        ],
        
        source: {
            location: "Confluence of Bois de Sioux and Otter Tail Rivers, Minnesota/North Dakota",
            type: "River confluence",
            elevation: "287 m",
            coordinates: [46.2667, -96.6000]
        },
        
        mouth: {
            location: "Lake Winnipeg, Manitoba, Canada",
            type: "Lake inlet",
            delta: "Netley-Libau Marshes at Lake Winnipeg",
            coordinates: [50.4000, -96.8333]
        },
        
        tributaries: {
            leftBank: [
                "Wild Rice River",
                "Red Lake River",
                "Roseau River",
                "Rat River",
                "Seine River"
            ],
            rightBank: [
                "Bois de Sioux River",
                "Otter Tail River",
                "Sheyenne River",
                "Park River",
                "Pembina River",
                "Assiniboine River"
            ]
        },
        
        distributaries: [
            "Red River channels at Lake Winnipeg",
            "Netley Cut"
        ],
        
        majorCities: [
            "Wahpeton", "Breckenridge", "Fargo", "Moorhead",
            "Grand Forks", "East Grand Forks", "Pembina",
            "Emerson", "Morris", "Selkirk", "Winnipeg"
        ],
        
        dams: [
            { name: "Red River Floodway", details: "Manitoba, 1968, flood diversion channel" },
            { name: "Portage Diversion", details: "Manitoba, 1970, diverts to Lake Manitoba" },
            { name: "St. Andrews Lock and Dam", details: "Manitoba, 1910, navigation" }
        ],
        
        basinArea: "287,500 km²",
        discharge: "240 m³/s",
        
        riverPath: [
            [46.27, -96.60],    // Source - Breckenridge/Wahpeton
            [46.50, -96.80],
            [46.88, -96.79],    // Fargo/Moorhead
            [47.50, -97.00],
            [47.93, -97.03],    // Grand Forks
            [48.50, -97.10],
            [48.97, -97.24],    // Pembina (US-Canada border)
            [49.00, -97.25],    // Border
            [49.50, -97.10],
            [49.88, -97.13],    // Winnipeg
            [50.20, -96.90],
            [50.40, -96.83]     // Lake Winnipeg (Mouth)
        ],
        
        tributaryPaths: [
            {
                name: "Sheyenne River",
                path: [
                    [47.50, -99.00],   // North Dakota
                    [47.00, -97.50],
                    [46.95, -96.85]    // Confluence
                ]
            },
            {
                name: "Red Lake River",
                path: [
                    [48.00, -94.50],   // Red Lake, Minnesota
                    [47.80, -96.00],
                    [47.93, -97.00]    // Confluence at Grand Forks
                ]
            },
            {
                name: "Assiniboine River",
                path: [
                    [51.00, -101.00],  // Saskatchewan
                    [50.00, -99.00],
                    [49.88, -97.13]    // Confluence at Winnipeg
                ]
            },
            {
                name: "Pembina River",
                path: [
                    [49.00, -99.50],
                    [49.00, -98.00],
                    [48.97, -97.25]    // Confluence
                ]
            }
        ],
        
        distributaryPaths: [
            {
                name: "Netley Marsh",
                path: [
                    [50.35, -96.85],
                    [50.40, -96.83]    // Lake Winnipeg
                ]
            }
        ],
        
        cityCoordinates: [
            { name: "Wahpeton", coords: [46.27, -96.61] },
            { name: "Fargo", coords: [46.88, -96.79] },
            { name: "Moorhead", coords: [46.87, -96.77] },
            { name: "Grand Forks", coords: [47.93, -97.03] },
            { name: "Pembina", coords: [48.97, -97.24] },
            { name: "Winnipeg", coords: [49.90, -97.14] }
        ],
        
        damCoordinates: [
            { name: "Red River Floodway", coords: [49.77, -97.10], details: "48 km diversion channel" },
            { name: "St. Andrews Lock", coords: [50.08, -96.85], details: "Navigation lock and dam" }
        ],
        
        flightLandmarks: [
            { progress: 0, name: "Breckenridge-Wahpeton", icon: "🔀", description: "River formation" },
            { progress: 0.15, name: "Fargo-Moorhead", icon: "🏙️", description: "Twin cities on border" },
            { progress: 0.30, name: "Red River Valley", icon: "🌾", description: "Ancient Lake Agassiz bed" },
            { progress: 0.45, name: "Grand Forks", icon: "🏙️", description: "1997 flood city" },
            { progress: 0.55, name: "US-Canada Border", icon: "🛂", description: "49th parallel" },
            { progress: 0.65, name: "Pembina", icon: "🏘️", description: "Historic border crossing" },
            { progress: 0.75, name: "Assiniboine Confluence", icon: "🔀", description: "At Winnipeg" },
            { progress: 0.85, name: "Winnipeg", icon: "🏙️", description: "Manitoba capital" },
            { progress: 0.95, name: "Netley Marshes", icon: "🌿", description: "Wetland complex" },
            { progress: 1.0, name: "Lake Winnipeg", icon: "🌊", description: "River terminus" }
        ],
        
        economicImportance: [
            "Agricultural heartland (wheat, sugar beets, potatoes)",
            "International boundary river",
            "Winnipeg's water supply",
            "Flood control infrastructure",
            "Recreation and fishing",
            "Historic fur trade route"
        ],
        
        environmentalIssues: [
            "Severe flooding (1997 'Flood of the Century')",
            "Flat terrain causes extensive flood damage",
            "Agricultural runoff causing Lake Winnipeg algae",
            "Nutrient loading from fertilizers",
            "Climate change increasing flood frequency",
            "Wetland drainage in basin"
        ],
        
        waterDisputes: [
            {
                title: "International Joint Commission",
                description: "US-Canada IJC manages boundary waters including the Red River under the 1909 Boundary Waters Treaty."
            },
            {
                title: "Lake Winnipeg Pollution",
                description: "Manitoba blames US states for nutrient pollution causing massive algae blooms in Lake Winnipeg."
            }
        ],
        
        historicalImportance: [
            {
                title: "Fur Trade Highway",
                description: "The Red River was a main artery of the fur trade, connecting Hudson Bay to the interior."
            },
            {
                title: "Red River Rebellion (1869-1870)",
                description: "Louis Riel led the Métis resistance on the Red River, leading to Manitoba's creation."
            },
            {
                title: "1997 Flood",
                description: "The 'Flood of the Century' caused $3.5 billion damage and evacuated 25,000 Manitobans."
            },
            {
                title: "Lord Selkirk Settlers",
                description: "Scottish settlers established the Red River Colony in 1812, one of Canada's first agricultural settlements."
            }
        ]
    }
];

// ============================================================
// EXPORT RIVERS DATA 6
// ============================================================

if (typeof window !== 'undefined') {
    window.RIVERS_DATA_6 = RIVERS_DATA_6;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = RIVERS_DATA_6;
}

console.log('✅ Rivers Data 6 loaded:', RIVERS_DATA_6.length, 'rivers (51-60)');
  
