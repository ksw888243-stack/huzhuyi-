import { Translations, Product, Advantage, NewsArticle, Solution, ContactInfo } from './types';

export const translations: Record<'en' | 'zh' | 'de', Translations> = {
  en: {
    navProducts: 'Products',
    navAbout: 'About Us',
    navAdvantages: 'Strengths',
    navSolutions: 'Applications',
    navNews: 'News',
    navContact: 'Contact',
    heroTagline: 'Architectural Masterpieces. High-Tech Security.',
    heroSubtitle: 'Elevate your home entry with HUZHIYI premium doors — combining custom art textures, aviation structural metal, and intelligent secure systems.',
    heroCtA: 'Explore Products',
    heroCtALearn: 'Technical Services',
    categoryPivot: 'Pivot Doors',
    categorySingle: 'Single Doors',
    categoryDouble: 'Double Doors',
    categoryIron: 'Wrought Iron Doors',
    categoryGarage: 'Garage Doors',
    specsDimensions: 'Max Dimension',
    specsMaterial: 'Core Material',
    specsLock: 'Locking System',
    specsThermal: 'Thermal U-Value',
    specsAcoustic: 'Acoustic Rating',
    advantagesTitle: 'Crafted Craftsmanship & Unique Artistry',
    advantagesSubtitle: 'Designed with precision engineering, integrating premium visual texture art, thermal-break mechanics, and future-ready smart locks.',
    aboutTitle: 'About HUZHIYI',
    aboutSubtitle: 'A world-class advanced manufacturing standard, high-aesthetic architectural showrooms, and international quality certified standards.',
    aboutOffice: 'Office Tower',
    aboutFactory: 'Smart Factory',
    aboutShowroom: 'Flagship Showroom',
    aboutCertificates: 'Certifications',
    solutionsTitle: 'Architectural Solutions & Applications',
    solutionsSubtitle: 'Our premium customized doors are selected by elite designers worldwide for luxury residencies, high-end landmarks, and smart homes.',
    newsTitle: 'Latest Insights',
    newsSubtitle: 'Explore modern architectural trends, security intelligence, and core updates of HUZHIYI doors.',
    contactTitle: 'Global Inquiries & Customizations',
    contactSubtitle: 'Ready to upgrade your architectural project? Get in touch with our commercial engineers for precise measurement guidance, material sampling, and custom configurations.',
    contactFormName: 'Your Full Name',
    contactFormEmail: 'Email Address',
    contactFormPhone: 'Phone / WhatsApp',
    contactFormDoorType: 'Interested Product Type',
    contactFormMessage: 'Your Message / Project Scope',
    contactFormSubmit: 'Submit Request',
    contactFormSuccess: 'Thank you! Our structural engineers will reach out to you in 24 hours with a preliminary 3D estimation.',
    customDesignHeading: 'Configure Your Dream Door',
    customDesignSubheading: 'Select materials, lock systems, and custom dimensions down to the millimeter.'
  },
  zh: {
    navProducts: '产品分类',
    navAbout: '关于我们',
    navAdvantages: '核心优势',
    navSolutions: '行业应用',
    navNews: '新闻动态',
    navContact: '联系我们',
    heroTagline: '融汇奢美艺术，淬炼顶格安全',
    heroSubtitle: '“HUZHIYI” 湖之翼 殿堂级高端入户门——将定制液态流体金属、航空特型装甲骨架与极智高频控制中枢完美融合。',
    heroCtA: '探索建筑臻品',
    heroCtALearn: '技术集成服务',
    categoryPivot: '偏轴大门(Pivot)',
    categorySingle: '极简单开门',
    categoryDouble: '奢华双开门',
    categoryIron: '现代铁艺门',
    categoryGarage: '隐藏式车库门',
    specsDimensions: '最大定制尺寸',
    specsMaterial: '核心基材及饰面',
    specsLock: '智能防盗锁体',
    specsThermal: '保温传热系数(U)',
    specsAcoustic: '隔音阻尼性能',
    advantagesTitle: '卓越制造工艺与独家肌理纹理艺术',
    advantagesSubtitle: '依托精密航天天工工艺，开发自主液态金属铸膜，并深度融合国际前沿热穿层断桥保温及5G物联网物联锁控系统。',
    aboutTitle: '关于“HUZHIYI”',
    aboutSubtitle: '配备世界级工业智造中心，沉浸式极简艺术美学展厅，全系产品通过严苛的国际质量防火防盗及环保证书认证。',
    aboutOffice: '办公大楼及环境',
    aboutFactory: '智能精细工厂',
    aboutShowroom: '品牌实地展厅',
    aboutCertificates: '权威材料证书',
    solutionsTitle: '全场景行业应用与技术服务',
    solutionsSubtitle: '服务全球高端别墅群、地标性豪华会所及智能高奢豪宅，提供从千分之一毫米精度复核到10年质保的全链路技术支持。',
    newsTitle: '行业前沿与新闻内容',
    newsSubtitle: '深度探索奢华住宅设计走向、尖端微波锁频技术革新与 HUZHIYI 品牌全球重大合伙人动态。',
    contactTitle: '全球项目咨询与定制通道',
    contactSubtitle: '无论您是个体别墅业主还是国际开发商、资深设计师，均可获得我们专家级工程师的免费 1v1 定制方案与物理传热参数验算。',
    contactFormName: '您的姓名',
    contactFormEmail: '电子邮箱',
    contactFormPhone: '手机号码 / WhatsApp / Skype',
    contactFormDoorType: '意向产品品类',
    contactFormMessage: '您的具体需求 / 门体定制尺寸',
    contactFormSubmit: '提交方案需求',
    contactFormSuccess: '感谢您的关注！我们的资深门墙集成系统设计师将在24小时内为您发送 preliminary 项目3D建模与物料报价清单。',
    customDesignHeading: '云端自定义您的高端门户',
    customDesignSubheading: '自由微调门扇饰面、锁具模块、声学等级与传热参数，生成高维效果图。'
  },
  de: {
    navProducts: 'Produkte',
    navAbout: 'Über Uns',
    navAdvantages: 'Stärken',
    navSolutions: 'Anwendungen',
    navNews: 'Aktuelles',
    navContact: 'Kontakt',
    heroTagline: 'Architektonische Meisterwerke. High-Tech-Sicherheit.',
    heroSubtitle: 'Heben Sie Ihr Heimeingangserlebnis mit HUZHIYI Premium-Türen auf ein neues Niveau – mit Flüssigmetallkunst, Luftfahrtaluminium und intelligenten Sensorsystemen.',
    heroCtA: 'Produkte Entdecken',
    heroCtALearn: 'Technische Dienste',
    categoryPivot: 'Pivot-Türen',
    categorySingle: 'Einzelflügeltüren',
    categoryDouble: 'Doppelflügelige Türen',
    categoryIron: 'Schmiedeeiserne Türen',
    categoryGarage: 'Garagentore',
    specsDimensions: 'Max. Abmessung',
    specsMaterial: 'Kernmaterial',
    specsLock: 'Schließsystem',
    specsThermal: 'U-Wert (Wärmeschutz)',
    specsAcoustic: 'Schallschutzwert',
    advantagesTitle: 'Handwerkskunst & Einzigartige Texturen',
    advantagesSubtitle: 'Gebaut mit deutscher Präzisionstechnologie, die flüssige Metallstrukturen, exzellenten Wärmeschutz und sichere Smart-Locks der Zukunft verbindet.',
    aboutTitle: 'Über HUZHIYI',
    aboutSubtitle: 'Fortschrittlicher Produktionsstandard, puristische Showrooms mit weltweiten Qualitätszertifikaten für höchsten Anspruch.',
    aboutOffice: 'Bürogebäude',
    aboutFactory: 'Intelligente Fabrik',
    aboutShowroom: 'Flagship-Showroom',
    aboutCertificates: 'Zertifikate & Prüfzeugnisse',
    solutionsTitle: 'Architektonische Lösungen & Anwendungen',
    solutionsSubtitle: 'Unsere maßgeschneiderten Premiumeingänge werden von renommierten Architekten für Villen, Luxushotels und moderne Smart Homes ausgewählt.',
    newsTitle: 'Einblicke & Trends',
    newsSubtitle: 'Bleiben Sie informiert über aktuelle Trends im High-End-Eingangsdesign, verbesserte Kältebrücken-Technologie und intelligente Zutrittssysteme.',
    contactTitle: 'Globale Anfragen & Beratung',
    contactSubtitle: 'Sind Sie bereit, Ihr architektonisches Projekt zu perfektionieren? Unsere Projektingenieure unterstützen Sie bei Aufmaß, Materialauswahl und Thermik.',
    contactFormName: 'Ihr Name',
    contactFormEmail: 'E-Mail-Adresse',
    contactFormPhone: 'Telefon / WhatsApp / Skype',
    contactFormDoorType: 'Interessierter Produkttyp',
    contactFormMessage: 'Ihre Nachricht / Projektdetails',
    contactFormSubmit: 'Anfrage Absenden',
    contactFormSuccess: 'Vielen Dank! Unsere Ingenieure werden sich innerhalb von 24 Stunden mit einer virtuellen 3D-Analyse und einem unverbindlichen Angebot bei Ihnen melden.',
    customDesignHeading: 'Konfigurieren Sie Ihr Wunschportal',
    customDesignSubheading: 'Wählen Sie Materialien, Zylindertypen, Oberflächen und Abmessungen millimetergenau.'
  }
};

export const products: Product[] = [
  {
    id: 'prod-pivot-h1',
    category: 'pivot',
    name: {
      en: 'Aero-Balance High-Performance Pivot Entrance',
      zh: '湖之翼 Aero-Balance 航空极境偏轴大门',
      de: 'Aero-Balance Hochleistungs-Pivot-Eingang'
    },
    description: {
      en: 'An architectural centerpiece engineered with a central offset rotating pivot hinge. Handles extreme custom leaf weights of up to 2 tons while maintaining silent micro-resistance operation.',
      zh: '专为奢华别墅及建筑地标设计的偏轴旋翼门，底盘选用航天特种承动力旋轴，最大支撑重达2吨的奢豪门板，仅需3g微力拉扯即可开启，如羽随行。',
      de: 'Ein architektonisches Prachtstück mit versetztem Drehpunkt. Meistert mühelos Türblattgewichte bis zu 2 Tonnen und lässt sich mit minimalem Widerstand flüsterleise öffnen.'
    },
    image: '/src/assets/images/pivot_door_1781078659366.png',
    features: {
      en: [
        'Hidden high-load hydraulic pivot hinge',
        'Multi-axis adjustable vector limit',
        'Biometric vein recognition integrated inside premium metal frame',
        'Continuous double sealing profiles for superior isolation'
      ],
      zh: [
        '隐式超强高载重进口液压旋底铰链，顺滑静音',
        '多维方向及俯仰夹角向量级精细微调',
        '5G物联网指静脉复合传感器，防伪性极强',
        '无缝密合多道特质航空密封条'
      ],
      de: [
        'Verstärkte, unsichtbare Hochleistungs-Pivot-Mechanik',
        'Mehrachsig justierbare Feineinstellung für makellosen Verzug',
        'Biometrische Handvenenerkennung im minimalistischen Designgriff',
        'Durchgehende, mehrfache Dichtungslinien für Spitzen-Isolationswerte'
      ]
    },
    specifications: {
      dimensions: {
        en: 'Width: 1500mm - 3000mm | Height: 2400mm - 4500mm',
        zh: '宽度: 1500mm - 3000mm | 高度: 2400mm - 4500mm 一体成型定制',
        de: 'Breite: 1500mm - 3000mm | Höhe: 2400mm - 4500mm maßgeschneidert'
      },
      material: {
        en: 'Space carbon-fiber composite core + Premium liquid bronze exterior texture',
        zh: '高强度大飞机碳纤维复合夹层 + 自研3D液态金雕肌理饰面',
        de: 'Kohlefaser-Kern aus der Raumfahrt + High-End-Flüssigbronze-Guss-Oberfläche'
      },
      lockType: {
        en: 'Intelligent Face-ID & Finger-Vein Dual-Frequency Encrypted Smart Lock',
        zh: '多核极速人脸雷达识别 + 指静脉双频道硬件加密锁中枢系统',
        de: 'Zwei-Faktoren-Verschlüsselung (Gesichtserkennung & Handvenen-Scan)'
      },
      thermalU: '0.58 W/(m²·K)',
      acousticDb: '48 dB'
    }
  },
  {
    id: 'prod-single-h1',
    category: 'single',
    name: {
      en: 'Vanguard Minimalist Single Armor Door',
      zh: '湖之翼 Vanguard 先锋系列智能极简单开装甲门',
      de: 'Vanguard Minimalistische Sicherheits-Einzeltür'
    },
    description: {
      en: 'Clean flat-surface aesthetics combined with ultra-dense steel reinforcement. Invisible built-in concealed hinges and flush architectural design provide a seamless flat visual experience.',
      zh: '将极致平齐美学与全天候防护装甲精密结合。全隐蔽式不锈钢重型承重合页，与侧边墙体实现齐平贴合并融入空间背景。',
      de: 'Ein extrem geradliniges Oberflächendesign gepaart mit hochfester Kernpanzerung. Unsichtbare, bündig eingelassene Scharniere sorgen für minimalistisch-perfekte Flächenbündigkeit.'
    },
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    features: {
      en: [
        'Flush-mount architectural frames',
        'Multi-point locking with heavy-duty solid steel bolts',
        'Textured organic mineral coating, anti-oxidation and UV resistant',
        'Smart system linkage with premium automation protocols'
      ],
      zh: [
        '门框门扇全齐平隐藏式构造设计',
        '多点联动加粗精钢金刚防撬锁舌组合',
        '高密度耐候性防晒氟碳有机矿物磨砂涂层',
        '与主流智能家居系统（KNX, Zigbee）零时延联动'
      ],
      de: [
        'Flächenbündiger Blockrahmen für nahtlose Integration',
        'Mehrfach-Verriegelung mit massiven Edelstahl-Tresorbolzen',
        'Mineralisch-matte Beschichtung für höchste UV- und Witterungsbeständigkeit',
        'Direktionskompatibel mit Smart-Home-Bussystemen (KNX, Loxone)'
      ]
    },
    specifications: {
      dimensions: {
        en: 'Width: 900mm - 1300mm | Height: 2100mm - 2800mm',
        zh: '宽度: 900mm - 1300mm | 高度: 2100mm - 2800mm 定制规格',
        de: 'Breite: 900mm - 1300mm | Höhe: 2100mm - 2800mm nach Maß'
      },
      material: {
        en: 'High-density multi-cavity thermal aluminum-alloy with titanium plate',
        zh: '多腔冷桥航空断桥铝钛合金基体 + 进口钛合金防弹装甲板',
        de: 'Aluminium-Titan-Legierung mit superdichtem thermischen Luftkammerprofil'
      },
      lockType: {
        en: 'Automatic motorized electromagnetic strike with keyless NFC and card sensor',
        zh: '全自动伺服电磁静音自动解锁电机 + 加密NFC穿透感应卡',
        de: 'Vollautomatisches Motorschloss mit leisem elektromagnetischem Riegel'
      },
      thermalU: '0.62 W/(m²·K)',
      acousticDb: '45 dB'
    }
  },
  {
    id: 'prod-double-h1',
    category: 'double',
    name: {
      en: 'Dynasty Majestic Double Entrance Suite',
      zh: '湖之翼 Dynasty 时代系列庄严奢华大尺度双开门',
      de: 'Dynasty Repräsentatives Doppelflügel-Eingangsportal'
    },
    description: {
      en: 'Symmetric grandeur designed for majestic main entrance halls. Features unmatched material weight carrying, dual leaf thermal block insulation, and symmetrical automated locks.',
      zh: '专为显赫宅邸正门大堂精工手作。对称式的大气造型，搭载同步咬合双联锁止机制，完美展现不凡气魄与极致声学保温屏障。',
      de: 'Symmetrische Grandeur für herrschaftliche Haupteingänge. Außerordentliche Tragkraft kombiniert mit vollintegriertem synchrongesteuertem Verriegelungsmechanismus beider Flügel.'
    },
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    features: {
      en: [
        'Symmetric active-passive auto synchronization locks',
        'Custom cast liquid copper skin with customized pattern carving',
        'Triple cold-stopping silicone gaskets at threshold joint',
        'Snoop-proof video intercom embedded directly in the structural column'
      ],
      zh: [
        '对称主副扇电驱自动同步咬合锁扣设计',
        '独创自研流体液雕纯铜浇铸表面，质感尊贵古朴',
        '门底自动下降式重型三重复合冷阻热密胶条',
        '门体外框内置军工级大视场抗暴红外夜视监控窗'
      ],
      de: [
        'Synchron laufende Treibriegel- und Schwenkriegelschlösser',
        'Kupfer-Flüssigmetallguss mit personalisierter Familien-Ornamentik',
        'Absenkbare Bodendichtung mit dreifacher Silikon-Dichtlippe',
        'Integriertes Weitwinkel-Kamerasystem mit manipulationssicherer Cloud-Zutrittskontrolle'
      ]
    },
    specifications: {
      dimensions: {
        en: 'Width: 1800mm - 3600mm | Height: 2400mm - 4500mm',
        zh: '宽度: 1800mm - 3600mm | 高度: 2400mm - 4500mm 厚重大规格定制',
        de: 'Breite: 1800mm - 3600mm | Höhe: 2400mm - 4500mm individuell'
      },
      material: {
        en: 'S355 high-strength composite structural carbon steel + Pure cast copper finishes',
        zh: 'S355高屈服强度多腔骨架碳钢 + 纯铜精工浇铸饰件面板',
        de: 'S355 Hochleistungsstahl-Kerngeometrie + Kupferplattierungs-Ornament'
      },
      lockType: {
        en: 'Smart Multi-Point Dual Motorized Bolt linkage system (compatible with KNX)',
        zh: '高能双驱多重联动多锁点电控装甲锁芯（无缝连通全智能家电）',
        de: 'Synchrone Doppelservomotoren-Mehrpunkt-Verriegelungsanlage'
      },
      thermalU: '0.65 W/(m²·K)',
      acousticDb: '46 dB'
    }
  },
  {
    id: 'prod-iron-h1',
    category: 'iron',
    name: {
      en: 'Gothic-Tech Modern Thermal break Wrought Iron Gateway',
      zh: '湖之翼 Gothic-Tech 现代断桥保热防结露铁艺门',
      de: 'Gothic-Tech Thermisch Getrennte Eisen-Glas-Tür'
    },
    description: {
      en: 'A perfect merging of classical artisan iron casting details with modern thermal break structures and low-E energy efficient windows.',
      zh: '传承欧式古典手作重铁锻切工艺，内置高端断桥隔热阻传合金内胆，兼配高透双银超低传热低辐射防弹玻璃组件。',
      de: 'Eine meisterhafte Symbiose aus handgeschmiedeter Eisen-Tradition und modernsten wärmegedämmten, einbruchhemmenden Low-E VSG-Glaselementen.'
    },
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80',
    features: {
      en: [
        'Artisanal hand-forged 18mm pure wrought iron grilles',
        'Openable glass panel structure for easy cleaning and ventilation',
        'Integrated multi-cavity thermal rubber profile barriers',
        'Special marine-grade anti-rust multi-layer electrostatic finish'
      ],
      zh: [
        '由老手艺人手作锤炼、抛光而成的18mm加粗精锻熟铁骨饰',
        '内含可独立限位开启的轻巧型玻璃小门页，兼顾日常清风与清扫',
        '内置高分子材料超密多腔冷隔离热阻胶体套盒',
        '整门历经二十一道船舶级超耐腐防锈多层静电防沙涂层'
      ],
      de: [
        'Kunstvoll handgeschmiedetes 18-mm-Schmiedeeisen-Ganzgitter',
        'Reinigungsfreundlicher, separat öffenbarer Glasflügel mit verdeckten Mini-Scharnieren',
        'Mehrkammer-Isolatorkern gegen winterliche Kondenswasserbildung',
        'Schiffsklasse-Korrosionsschutz durch mehrschichtige Einbrennlackierung'
      ]
    },
    specifications: {
      dimensions: {
        en: 'Width: 1000mm - 2000mm | Height: 2200mm - 3800mm',
        zh: '宽度: 1000mm - 2000mm | 高度: 2200mm - 3800mm 支持定制拱形顶',
        de: 'Breite: 1000mm - 2000mm | Höhe: 2200mm - 3800mm (auch Rundbogen)'
      },
      material: {
        en: 'Artisan forged structural carbon iron base + Triple insulated low-E bulletproof glass',
        zh: '老匠人手工精锻低碳熟铁构件骨架 + 三层双中空充氩低反低热值夹爆防弹玻璃',
        de: 'Handgeschmiedeter zäher Weicheisen-Verbund + Dreifach-Präzisions-Schallschutzglas'
      },
      lockType: {
        en: 'Heavy-duty integrated mechanical lock body paired with magnetic electric control',
        zh: '重型防爆防钻抗切五锁舌机械主锁体 + 面层极简隐式电磁智能密码指纹器',
        de: 'Hochfrequenz-Elektro-Magnetschloss sowie mechanisches Schwerlastzylinderschloss'
      },
      thermalU: '0.78 W/(m²·K)',
      acousticDb: '42 dB'
    }
  },
  {
    id: 'prod-garage-h1',
    category: 'garage',
    name: {
      en: 'Matrix Horizon Flush-Seamless Smart Garage Door',
      zh: '湖之翼 Matrix Horizon 隐藏无缝一体智慧静音车库门',
      de: 'Matrix Horizon Sektionaltor mit Bündig-Integration'
    },
    description: {
      en: 'Featuring coplanar seamless track alignment and ultra-quiet variable frequency hydraulic motor, turning your house facade into a futuristic bento block.',
      zh: '采用平面无凹槽全隐藏运行轨道与新型自适应变频平滑液压动力，与别墅整体外墙形成平稳立面，彰显高级科技底色。',
      de: 'Nahtlos bündige Wandintegration mit flüsterleisem, frequenzgeregeltem Antrieb – lässt Ihr Garagentor unsichtbar in der Fassadenfront verschmelzen.'
    },
    image: '/src/assets/images/garage_door_1781078724575.png',
    features: {
      en: [
        'Seismic and anti-drop hydraulic mechanical buffers',
        'Invisible panel joints, fully aligned with exterior cladding',
        'Infrared radar safety tracking array and emergency obstacle stops',
        'Smart vehicle RFID tracking automatic lift coordination'
      ],
      zh: [
        '特种抗震、防断钢丝航空级安全落体自锁缓冲齿轮',
        '无缝超耐磨转折板铰缝，与岩板、石材墙面完全平行对齐',
        '多轨道高频红外雷达动态人车防夹障安全保护栅格',
        '尊享车机RFID自动解码识别雷达自动感应缓升缓降协同'
      ],
      de: [
        'Federsicherungs- und Absturzsicherungs-Dämpfungskonstruktion',
        'Absolut spaltfreie Gliederverbindungen in Linienführung mit der Wandware',
        'Infrarot-Lichtgitter und Kollisionsschutzradar für lückenlose Überwachung',
        'Integrierter Funk-RFID-Transponder und Geofencing-Automatik für schrittweises Öffnen'
      ]
    },
    specifications: {
      dimensions: {
        en: 'Width: 2400mm - 6000mm | Height: 2000mm - 3200mm Custom Extra Wide',
        zh: '宽度: 2400mm - 6000mm 奢装超宽型 | 高度: 2000mm - 3200mm 定制规格',
        de: 'Breite: 2400mm - 6000mm Überbreite | Höhe: 2000mm - 3200mm'
      },
      material: {
        en: 'Integrated multi-layer polyurethane foam core + Architectural ultra-high performance concrete panel cladding',
        zh: '高压多重均匀聚氨酯环保超密发泡核心层 + 特性水泥岩板/航空碳纤维装饰饰面板',
        de: 'Injected Polyurethan-Thermokern + Dekton/Carbonfaser-Fassadenplatte'
      },
      lockType: {
        en: 'Double-side physical magnetic drop locks combined with motor brake lock',
        zh: '车库卷帘侧铰气动防撬双重物理解析限位扣 + 电机自反抗锁定机械拉力系统',
        de: 'Zweiseitige magnetische Zugriegelsicherung sowie automatische Motorbremse'
      },
      thermalU: '0.80 W/(m²·K)',
      acousticDb: '38 dB'
    }
  }
];

export const advantages: Advantage[] = [
  {
    id: 'adv-texture',
    title: {
      en: 'Liquid Metal Crafts & Carved Art Textures',
      zh: '流体液态金属重熔与手雕艺术肌理',
      de: 'Flüssigmetallguss & Handgearbeitete Reliefs'
    },
    description: {
      en: 'Using physical vapor deposition (PVD) and liquid metal atomic spraying, we craft non-replicable art textures on luxury door leaves, bringing heavy relief texture and majestic visual experience.',
      zh: '湖之翼独创流体金属高频重铸微结晶以及高级手雕雕刻模具复合工艺，在门板表面喷涂熔融铜镍合金，带来浮雕般苍劲的大师级视觉质感与永不褪色的金属色泽。',
      de: 'Mithilfe patentierter Flüssigmetallspritlung erzielen wir hochdetaillierte, nicht replizierbare taktile Oberflächen aus Bronze, Kupfer und Titan.'
    },
    icon: 'Sparkles',
    image: '/src/assets/images/metallic_texture_1781078707938.png',
    details: {
      en: [
        'Artisan hand-drawn texture lines, certified unique signatures',
        '21 layers of protective ultra-fine ceramic micro-glaze finishing',
        'Grade-8 hardness, resistant to high impact scratches, zero discoloration',
        'Self-cleaning anti-fingerprint surface treatment'
      ],
      zh: [
        '由资深雕刻艺术家手工绘制描边，每一扇皆是世间孤品',
        '二十一层微纳物理沉积高耐腐陶瓷高洁保护微晶铀釉层',
        '硬度高抗冲击，无任何户外紫外褪色隐患',
        '疏油抗污自清洁科技，指纹及汗渍零积留'
      ],
      de: [
        'Von Künstlern signierte, handgemalte Materialverläufe',
        'Mehrfach hauchdünne glaskeramische PVD-Schutzschichten',
        'Extremer Härtegrad, kratzfest, schlagzäh und witterungsstabil',
        'Oleophobe Veredelung für absolute Flecken- und Fingerabdrucksresistenz'
      ]
    }
  },
  {
    id: 'adv-structure',
    title: {
      en: 'Aviation structural Thermal Break System',
      zh: '航空多腔断桥结构与无边界保热隔阻',
      de: 'Hochisolierender Luftkammer-Profilrahmen'
    },
    description: {
      en: 'Crafted with premium cold-bridge insulating nylon barriers PA66GF25 and multi-cavity aviation Grade aluminum profiles to guarantee supreme thermodynamic heat-retaining capability.',
      zh: '主结构甄选航空级超厚壁铝钛合金，核心内嵌进口PA66GF25超密双级玻纤断桥隔热尼龙条，打破常规门墙极寒结露、传热漏寒壁垒。',
      de: 'Die Basis bildet eine hochfeste Thermotrennung aus schlagzähem Polyamid (PA66GF25) mit Glasfaser sowie extra wandstarken Aluzargen.'
    },
    icon: 'Cpu',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
    details: {
      en: [
        'Double thermal break composite chambers with polyurethane infill',
        'Premium EPDF aerospace-grade closing sealing rubber strips',
        'Successfully blocks outdoor frost up to -45°C',
        'Outstanding water tightness and air filtration indices'
      ],
      zh: [
        '主腔体填充定制阻燃超细聚氨酯保温吸音发泡胶料',
        '进口EPDM海绵发泡共挤三道连续气压密封条',
        '零下45°极严寒气候环境下无任何外结霜结冰现象',
        '水密性以及气密性通过顶级实验室指标验证'
      ],
      de: [
        'Doppelkammer-Flugzeugaluminium gefüllt mit Polyurethan-Hartschaum',
        'EPDM-Dichtungen mit speziellem Hohlkammerprofil für satten Anpressdruck',
        'Garantierte Frostbarriere selbst bei Extremtemperaturen von -45°C',
        'Beste Werte bei Windlastverhalten, Schlagregendichtheit und Fugendurchlass'
      ]
    }
  },
  {
    id: 'adv-smart',
    title: {
      en: 'Frequencies Encrypted Smart-Lock Integrations',
      zh: '多重波段加密智联生物门禁控制枢纽',
      de: 'Verschlüsselte Biometrie-Zutrittsysteme'
    },
    description: {
      en: 'Say goodbye to conventional keys. HUZHIYI integrates state-of-the-art biological security chips with direct cloud connectivity, biometric radar, and emergency safety redundancy.',
      zh: '彻底告别繁琐钥匙。湖之翼引入新一波段指静脉皮下毛细血管复合传感检测、35°广角微波人脸识别，配合银行超频数据芯片防护，极尽妥帖。',
      de: 'Abschied von Schlüsseln. HUZHIYI integriert modernste biologische Halbleitersensoren, Infrarot-Liveness-Gesichtserkennung und absolute Notstrom-Redundanz.'
    },
    icon: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80',
    details: {
      en: [
        'Internal solid-state battery bank with solar feedback recharge',
        'Aes-256 military-grade physical chip hardware encryption',
        'Emergency mechanical backup core with patented anti-pick cylinder',
        'Real-time HD monitoring with remote App interactive door-opening'
      ],
      zh: [
        '内置重型锂电安全防暴冗余电源，断电可持久坚守数月',
        '搭载AES-256军工物理安全认证加密防劫持芯片',
        '双向锁定安全备用超B级防暴防钻硬质合金叶片锁芯',
        '高品质大屏幕全天候AI微弱光猫眼摄像及App智控提醒'
      ],
      de: [
        'Intergrierter Notakku mit extrem langer Reservekapazität',
        'AES-256 hardwarebasierter Hochsicherheits-Kryptochip',
        'Verlaufssicheres mechanisches Notschloss mit patentiertem Zylinder',
        'KI-unterstützte Live-Bildübertragung zur Smartphone-App weltweit'
      ]
    }
  }
];

export const solutions: Solution[] = [
  {
    id: 'sol-villa',
    title: {
      en: 'Ultra-Luxury Custom Mansions',
      zh: '极奢豪宅与高端独栋私人联排别墅',
      de: 'Ultra-Luxus-Privatvillen'
    },
    description: {
      en: 'We provide personalized structural calculations and aesthetic custom designs for large-scale mansions. Our technical team ensures seamless alignment with ultra-high ceilings and heavy entry requirements.',
      zh: '针对大尺度超重主入口需求，资深结构工程师一对一对接计算受力。设计团队结合整体建筑幕墙材质，完美定制融合古铜、金属、天然岩板等多元门体。',
      de: 'Wir bieten maßgeschneiderte Statikprüfungen und exklusive Designberatung für großformatige Hoteleingänge und High-End Villen.',
    },
    bgImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    tags: {
      en: ['Offset Pivot', 'Aviation Strength', 'Architectural Integration'],
      zh: ['极值偏轴旋扭', '抗风压安全受力', '无缝立面匹配'],
      de: ['Pivotübergroß', 'Windlastzertifiziert', 'Architekturkonform']
    }
  },
  {
    id: 'sol-hotel',
    title: {
      en: 'High-End Landmarks & Corporate Facades',
      zh: '顶级酒店大堂、高档商业地标会所大门',
      de: 'Gewerbeobjekte & Luxushotels'
    },
    description: {
      en: 'Engineered for extremely high frequency of open-close cycles. Standard high-durability continuous pivot structures are fatigue tested for over 1 million smooth operations, keeping public flow safe.',
      zh: '面向超高开启频次的大流量公共中枢进行疲劳模拟与铰链优化，门底气动液压全自动平滑开闭，连续运行100万次零异响、零损伤。',
      de: 'Konzipiert für maximale Nutzungsfrequenz in anspruchsvollen Geschäftsportalen. Getestet auf über 1.000.000 flüsterleise automatische Öffnungszyklen.'
    },
    bgImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    tags: {
      en: ['1 Million Cycle Tested', 'Automated Servo Motor', 'Premium Fire-Rated'],
      zh: ['百万次开启安全测试', '伺服智能助力平开', '重型防火防盗高防护'],
      de: ['1 Mio. Zyklen geprüft', 'Integrierter Servomotor', 'Brandschutzklasse EW60']
    }
  },
  {
    id: 'sol-smart-home',
    title: {
      en: 'Modern Eco-Smart Connected Communities',
      zh: '高能科技断桥保热绿色AI社区',
      de: 'Nachhaltige Smart-Home-Siedlungen'
    },
    description: {
      en: 'Featuring record breaking low U-values supporting passive house energy requirements. Fully compatible with mainstream Matter and Apple HomeKit eco-system protocols.',
      zh: '行业内首次研发出符合北欧被动式低能耗建筑标准的极超低传热系数门芯系统，全面兼容全屋智能一键式布防，是顶奢绿色智慧社区的标配。',
      de: 'Trägt mit niedrigsten Wärmeverlustkoeffizienten zur Erfüllung von KfW-Effizienzhaus- oder Passivhausstandards bei. Kompatibel mit Apple HomeKit und Matter.'
    },
    bgImage: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80',
    tags: {
      en: ['Passive House Certified', 'Matter / HomeKit integration', 'Thermal Break Barrier'],
      zh: ['北欧被动房认证', 'Matter通用物联中枢', '多维腔体阻冷桥'],
      de: ['Passivhauszertifiziert', 'Smart Integration', 'Effizienzhaus-Standard']
    }
  }
];

export const newsArticles: NewsArticle[] = [
  {
    id: 'news-1',
    title: {
      en: 'HUZHIYI High-Security Biological Intel Lock Receives Top EU EN 1627 Certification',
      zh: '湖之翼硬核推出指静脉及微波雷达智能锁控系统，荣获欧盟最高等级防护认证',
      de: 'HUZHIYI Biometrie-Zutrittssystem erhält das begehrte europäische Sicherheitszertifikat EN 1627 RC4'
    },
    excerpt: {
      en: 'Our latest intelligent composite fingerprint and vein sensor chip lock successfully passed strict physical penetration and magnetic resistance testing under European standards.',
      zh: '湖之翼新一代重型防劫持自适应指静脉复合传感器硬件锁芯，以零故障率顺畅高分通过了欧盟苛刻的手工开撬及强电磁干涉防盗等综合考验。',
      de: 'In umfangreichen Sabotage- und Hacking-Tests hielt der neue bündige HUZHIYI-Verschlüsselungskern allen mechanischen und elektronischen Angriffsszenarien stand.'
    },
    date: '2026-05-18',
    category: {
      en: 'Product Technology',
      zh: '智能技术革新',
      de: 'Produkttechnologie'
    },
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80',
    content: {
      en: 'In the latest physical safety auditing, our core multi-bolt structural lock system demonstrated extreme persistence. Built-in biological sensors leverage subdermal capillary tracking rather than superficial prints, completely making 3D replicas useless. The physical lock cylinder features space-grade hard carbide plates protecting against drilling, sawing, and high-frequency wave decoding.',
      zh: '在最新一轮瑞典实验室进行的侵入物理抗爆测试中，本品牌引以为豪的自研重型全驱锁芯大放异彩。不同于表层皮肤纹理容易假冒或受汗水磨损，研发中心精妙利用了皮下指部血红蛋白吸收红外线的特性，高精度防伪克隆。锁芯外壁内置多层超高硬质硬质防爆金刚板，彻底隔阻特种机械冲击和高频射频干扰。',
      de: 'In den jüngsten physikalischen und digitalen Auditprüfungen schlug unser bio-kompatibler Riegel ein neues Sicherheitskapitel auf. Durch die Erfassung der tiefen Blutgefäße statt eines simplen Silikonabdrucks wird jede Art von Fälschungsversuch unmöglich gemacht. Zusätzlich schützt eine gepanzerte Bohr- und Ziehschutzrosette vor schweren Einbruchwerkzeugen.'
    }
  },
  {
    id: 'news-2',
    title: {
      en: 'The Ascent of Pivot Systems: Transforming entrance gateways in High-End Mansions',
      zh: '打破空间边界的艺术：为什么“大尺寸偏轴门”正在席卷国际高奢建筑圈',
      de: 'Die Renaissance der Dimensionen: Warum Pivot-Systeme weltweit die Premium-Villenarchitektur dominieren'
    },
    excerpt: {
      en: 'Architects and designers globally share how pivot doors redefine luxurious feelings at prime home entry vistas.',
      zh: '国际顶尖豪宅规划大师指出，偏轴旋转门以其浩瀚的体积张力与静谧无感的人性化开合，完全改写了传统大宅的礼宾体验。',
      de: 'Führende Architekten erklären, wie großformatige, drehbar gelagerte Türkonstruktionen ein neues Raum- und Repräsentationsgefühl schaffen.'
    },
    date: '2026-04-22',
    category: {
      en: 'Design Trends',
      zh: '建筑美学空间',
      de: 'Designtrends'
    },
    image: '/src/assets/images/pivot_door_1781078659366.png',
    content: {
      en: 'With architectural trends tilting towards massive double-height concrete facades, traditional side hinges simply lack the structural leverage required to carry enormous weights. HUZHIYI special aeronautical balancing technology redirects vertical forces into a heavy ground rotating node, meaning doors of up to 4.5 meters high can swing effortlessly like a floating leaf.',
      zh: '当现代建筑越来越推崇挑高双层中空、超大幅岩板和石材立面，常规侧边铰链的力臂和受重力学极限在超高超重门面前已无处施展。湖之翼革命性的地滚承重向量转移轴芯，将所有的竖向重力高效地转移至大地根基。这意味着高达4.5米的高耸大门也可以轻如落叶，只需一指之力便能顺畅自如开合。',
      de: 'Weil sich moderne Entwürfe oft durch doppelstöckige Glasfronten und schwere Massivholz- oder Betonflächen auszeichnen, kommen Seitenscharniere an statische Grenzen. HUZHIYI-Pivotlager leiten die gesamte Kraft senkrecht in den massiven Fundamentpunkt ab. Das Resultat ist ein majestätisches, sanft schwebendes Öffnungsverhalten trotz Übergröße.'
    }
  },
  {
    id: 'news-3',
    title: {
      en: 'Breaking Thermodynamic Frontiers: HUZHIYI achieves low insulation value of 0.58 W/(m²·K)',
      zh: '打破极寒纪录：湖之翼研发室实现入户门保温传热系数（U值）0.58的新突破',
      de: 'Kälterekord gebrochen: HUZHIYI-Eingänge erreichen überragenden Kälteschutzwert von U = 0,58'
    },
    excerpt: {
      en: 'Successfully integrating structural carbon composite foam cores with European high-molecular thermal break profiles, leading passive architectural door products.',
      zh: '多温区精工复合舱体系，内质加气超密惰性聚氨酯和航天复合保温骨料，实现了极寒环境下高能长效保热。',
      de: 'Durch die innovative Verbindung von CFK-Verbundstoff-Kernen mit mehrfachen Dämmzonen stoßen wir das Tor zur Premium-Passivhaus-Klassifizierung weit auf.'
    },
    date: '2026-03-05',
    category: {
      en: 'Green Energy',
      zh: '被动绿色环保',
      de: 'Nachhaltigkeit'
    },
    image: '/src/assets/images/factory_showroom_1781078674562.png',
    content: {
      en: 'Fitted inside architectural passive houses, standard metal entry doors can easily construct a dangerous cold bridge. Our engineering lab solved this by using carbon fiber composite structures and dual chambers. Combined with three endless lines of continuous premium silicone gasket profiles, HUZHIYI entrance keeps building warmth locked, cutting HVAC energy expenses massively.',
      zh: '对于高能效被动式节能建筑，金属入户门极易在大温差下形成恶性“透寒冷桥”。湖之翼热学研发团队通过在主龙骨嵌入自研阻漏腔，结合进口高分子连续发泡保热胶，切断了所有的金属传热路径。在多重气压冷热对冲测试下，产品锁热效果出色，为客户大幅削减冷暖能耗开支。',
      de: 'Herkömmliche Portale stellen bei tiefem Frost oft erhebliche thermische Schwachstellen dar. Unser Wärmeschutz-Labor hat dies gelöst, indem wir tragende Profile lückenlos entkoppelt und mit vakuumverwandten Füllstoffen bestückt haben. Gepaart mit drei lückenlosen Profildichtungsebenen spart die HUZHIYI-Tür dauerhaft spürbare Heiz- und Klimatechnik-Kosten.'
    }
  }
];

export const contactInfo: ContactInfo = {
  email: 'global@huzhiyidoors.com',
  phone: '+86-138-8888-2433',
  whatsapp: '+86-138-8888-2433 (Global Sales Chief)',
  skype: 'huzhiyi.architectural.gateway',
  address: {
    en: 'HUZHIYI Corporate Gateway Tower, High-Tech Industrial Zone, Floor 18 & Smart Manufacturing Base, Yard 6A',
    zh: 'HUZHIYI 湖之翼品牌中心大厦 18F ＆ 核心智能制造工厂基地 6A号院',
    de: 'HUZHIYI Corporate Gateway Tower, Hightech-Industriepark, Etage 18 & Intelligente Fabrik Werk 6A'
  }
};
