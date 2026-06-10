import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, Check, ShieldCheck, Thermometer, Layers, 
  RotateCw, ArrowRight, Sparkles, Sliders, Info, Zap
} from 'lucide-react';
import { Language } from '../types';

interface PivotExplorerProps {
  currentLang: Language;
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (productName: string) => void;
}

interface PivotStyle {
  id: string;
  name: Record<Language, string>;
  tagline: Record<Language, string>;
  image: string;
  badge: Record<Language, string>;
  designer: string;
  materials: Record<Language, string>;
  textureDescription: Record<Language, string>;
  details: Record<Language, string[]>;
  uValue: string;
  weightLimit: string;
  offsetPercentage: string; // Pivot axis distance from frame
  color: Record<Language, string>;
  craftMethod: Record<Language, string>;
}

export default function PivotExplorer({ currentLang, isOpen, onClose, onSelectProduct }: PivotExplorerProps) {
  const [activeStyleId, setActiveStyleId] = useState<string>('hzy-036');
  const [rotationDegrees, setRotationDegrees] = useState<number>(0);
  const [activeDetailTab, setActiveDetailTab] = useState<'craft' | 'texture' | 'security'>('craft');

  const pivotStyles: PivotStyle[] = [
    {
      id: 'hzy-036',
      name: {
        zh: 'HZY-036 铸液鎏金叠装偏轴门',
        en: 'HZY-036 Etheros Signature Gold Pivot',
        de: 'HZY-036 Etheros Signature Gold-Pivot'
      },
      tagline: {
        zh: '传世金石与黑金液态艺术折射的多维影壁',
        en: 'Staggered antique brass sheets reflecting dynamic architectural shadows',
        de: 'Versetzte Messingbleche, die dynamische architektonische Schatten werfen'
      },
      image: '/src/assets/images/pivot_door_1781078659366.png',
      badge: {
        zh: '殿堂旗舰 PORTAL FLAGSHIP',
        en: 'SIGNATURE SHADOW',
        de: 'SIGNATUR-SCHATTEN'
      },
      designer: 'Studio K. (Zürich)',
      color: {
        zh: '复古拉丝古铜金 与 哑光玄金黑 (Antigravity Brass Gold & Obsidian Black)',
        en: 'Antique Brushed Brass Gold & Obsidian Matte Black',
        de: 'Antikes Messing-Gold & Obsidian-Mattschwarz'
      },
      craftMethod: {
        zh: '五金叠板错位扣咬 + 手工微晶阳极氧化拉丝 + 氟碳防酸高能保护涂装',
        en: 'Precision louver step-cladding + micro-crystalline electroplate brushing + acid-proof paint seals',
        de: 'Präzisions-Lamellenstufen-Cladding + Mikrokristalline Bürstung + Säureschutz-Flüssiglack'
      },
      materials: {
        zh: '航空断桥轻型不锈钢芯 + 3.0mm 手工抛光抗拉丝鎏金黄铜板 + 浮凸液态氟碳钢',
        en: 'Aviation-grade composite stainless core + 3.0mm customized gold brass lamellas + protective liquid-cast steel plates',
        de: 'Edelstahl-Verbundkern + 3,0 mm maßgeschneiderte Messinglamellen + Flüssigguss-Stahlplatten'
      },
      textureDescription: {
        zh: '冷峻的玄色金属氟碳护条与温暖的磨砂金属铜页阶梯错落，每次晨昏日光投射都会产生雕塑般的几何灰度阴影。',
        en: 'Staggered columns of black and warm bronze metal tiles shift expressions beautifully as morning sun ray angles transition.',
        de: 'Versetzte Kolonnen schwarzer und warmer Bronzeplatten verändern ihre Wirkung mit dem Sonnenlicht.'
      },
      details: {
        zh: [
          '重力偏轴分配系数：85% 支撑力下沉到底盘，一指推开吨级重门',
          '配置 Lumina Integrated 专属手作金边隐形嵌入式拉手',
          '通过欧洲 RC4 防盗物理防护极限测试，铰链隐去更具纯粹张力'
        ],
        en: [
          'Pivot offset load efficiency: 85% mass channeled to ground level, effortless push',
          'Includes custom flush Lumina grip frame in gold-anodized finish',
          'Tested and fully compliant with EN 1627 RC4 burglary-proof standards'
        ],
        de: [
          'Schwerkraft-Lastverteilung: 85 % des Gewichts werden in den Boden abgeleitet',
          'Ausgestattet mit flächenbündigem Lumina-Griffrahmen in Gold eloxiert',
          'Geprüft und zertifiziert nach EN 1627 RC4 Einbruchschutzstandards'
        ]
      },
      uValue: '0.58 W/(m²•K)',
      weightLimit: '2000 kg',
      offsetPercentage: '25% / 15%'
    },
    {
      id: 'hzy-037',
      name: {
        zh: 'HZY-037 极境原木通高偏轴尊门',
        en: 'HZY-037 Tall Timber Monument',
        de: 'HZY-037 Monumentales Massivholz-Portal'
      },
      tagline: {
        zh: '一木贯顶，极致奢华威严的传世原木屏障',
        en: 'Bespoke floor-to-ceiling single-timber slab structure for monumental heights',
        de: 'Bodenbündiges Massivholz-Portal für monumentale architektonische Raumhöhen'
      },
      image: '/src/assets/images/pivot_carbon_wood_1781080143675.png',
      badge: {
        zh: '庄园尊享 ESTATELY ONLY',
        en: 'HISTORICAL OAK',
        de: 'PALAST-HOLZ'
      },
      designer: 'A. Morosini (Milano)',
      color: {
        zh: '琥珀金丝暖橡木色 与 亚光玄炭拉丝拉手 (Warm Amber Oak & Brushed Obsidian Handle)',
        en: 'Warm Amber Oak Timber & Brushed Charcoal Graphite',
        de: 'Warmes Bernstein-Eichenholz & gebürstetes Kohlegrafit'
      },
      craftMethod: {
        zh: '超高通体无拼接天然拼缝对纹贴合 + 六重奥地利自然植物木蜡油涂布渗透',
        en: 'Master book-matched wood veneers + 6-layer organic protective oil treatment',
        de: 'Echtholz-Furnier mit Buchmatch-Muster + 6-lagiges biologisches Naturöl-Finishing'
      },
      materials: {
        zh: '实木多层纵防变形阻断背骨 + A级自然烘干300年寿龄白栎木皮面板 + 静音液压自动闭门器',
        en: 'Solid anti-warp timber core + age-matured European oak veneer casing + integrated silent closer',
        de: 'Vollholz-Kern gegen Verzug + europäisches Eichen-Furnier + integrierter geräuschloser Türschließer'
      },
      textureDescription: {
        zh: '极其温润连续的天然山形橡木纹理，散发芬多精的原木自然呼吸张力，在现代简约高旷豪宅中彰显不可复制的奢尊本色。',
        en: 'Pure continuous warm oak wood grains extending upward without horizontal segments, radiating grand organic status.',
        de: 'Durchgehende, vertikale Eichenmaserung ohne optische Absätze strahlt majestätische Wärme aus.'
      },
      details: {
        zh: [
          '通高拼接防潮断桥结构，阻挡户外潮湿侵害变形',
          '嵌入式重力液压轴承，无暴露合页极简利落',
          '0.61 W/(m²•K) 极低传热，兼具超级静音阻绝表现'
        ],
        en: [
          'Full-height moisture-barrier core stabilizes natural wood fibers completely',
          'Heavy-duty fluid-damped concealed pivot anchor sits embedded flush in concrete',
          'Superb acoustic insulation certified up to 45dB acoustic dampening'
        ],
        de: [
          'Durchgehender Feuchtigkeitsschutz stabilisiert die Holzfasern vollständig',
          'Concealed Heavy-Duty-Bodenlager für flächenbündiges, rahmenloses Design',
          'Hervorragende Schalldämmung nachweisbar bis 45 dB Rauschpegelreduktion'
        ]
      },
      uValue: '0.61 W/(m²•K)',
      weightLimit: '1500 kg',
      offsetPercentage: '30% / 20%'
    },
    {
      id: 'hzy-038',
      name: {
        zh: 'HZY-038 晨光视界侧玻橡木偏轴门',
        en: 'HZY-038 Nordic Slit Oak Glass Pivot',
        de: 'HZY-038 Nordisches Schlitz-Glas-Eichenportal'
      },
      tagline: {
        zh: '雕琢水平光流，内嵌防爆长光显视窗',
        en: 'Precision line routing integrated with tinted privacy security viewing strip',
        de: 'Präzisions-Fräsrillen im Holz integriert mit Sicherheits-Sichtschlitz'
      },
      image: '/src/assets/images/pivot_carbon_wood_1781080143675.png',
      badge: {
        zh: '艺术极简 SCANDINAVIAN',
        en: 'LIGHT SLIT ARCH',
        de: 'SCHLITZLICHT'
      },
      designer: 'H. Gessner (München)',
      color: {
        zh: '极简北欧浅白橡木配幽邃黑玻璃 (Nordic Pale Oak & Shadow Glass)',
        en: 'Scandinavian Pale Natural Oak & Tinted Security View Glass',
        de: 'Nordische Natureiche & getöntes Sicherheits-Sichtglas'
      },
      craftMethod: {
        zh: '双向高周波横向水平精密刨铣刻槽 + 内中空超防爆隔热隔音晶硅玻璃固嵌',
        en: 'Horizontal CNC routing channels + high-vacuum thermal acoustic glass sealing',
        de: 'Horizontale CNC-Fräser-Rillen + Hochvakuum-Isolierglas-Dichtband'
      },
      materials: {
        zh: '德国环保浅橡木防晒防护贴面 + 单向窥探防弹多层中空玻璃 + 特制碳灰极窄边条框饰',
        en: 'Nordic weather-proof Oak skin + bullet-resistant structural insulating glazing + charcoal aluminum seals',
        de: 'Nordisches, wetterbeständiges Eichenholz + schusshemmende Doppelverglasung + eloxierter Aluminiumrahmen'
      },
      textureDescription: {
        zh: '浅色垂直原木纹理与干脆利落的水平刀槽交错。左侧内嵌一束修长的黑色暗影防弹玻璃窄窗，可在玄关投射微弱通透曦光。',
        en: 'Pale vertical grains intersect crisp horizontal laser cuts, housing an elegant dark vertical security vision aperture.',
        de: 'Helle vertikale Maserung trifft auf horizontale Rillen, die ein elegantes schmales Glasfenster umschließen.'
      },
      details: {
        zh: [
          '玻璃窗口具备防砸防砸、全单向保密视线保护',
          '微凹水平沟线有效分散热胀应力，经年不翘曲',
          '全自动静音阻尼锁舌，极致静谧不打扰'
        ],
        en: [
          'High-privacy security glass allows interior light viewing without outside exposure',
          'Precision groove channels isolate tension offsets under heat expansions',
          'Whisper-quiet magnetic closing mechanics ensures soft, automated latching'
        ],
        de: [
          'Maximale Privatsphäre: Durchblick nur von innen nach außen möglich',
          'Präzise Nut fräst Materialspannungen bei starker Sonneneinstrahlung weg',
          'Flüsterleise Magnet-Verriegelung für sanfteste Türschließ-Geräusche'
        ]
      },
      uValue: '0.60 W/(m²•K)',
      weightLimit: '1300 kg',
      offsetPercentage: '20% / 15%'
    },
    {
      id: 'hzy-039',
      name: {
        zh: 'HZY-039 积木嵌拉手意式偏轴门',
        en: 'HZY-039 Interlocking Toy Block Wood Portal',
        de: 'HZY-039 Toy Block Italienisches Echtholzportal'
      },
      tagline: {
        zh: '积木式错位咬合适配双重立体拉手盒',
        en: 'Conceptual overlapping geometry featuring organic block handle structures',
        de: 'Konzeptuelle Geometrie-Überlappung mit massiven hölzernen Blockgriffen'
      },
      image: '/src/assets/images/pivot_carbon_wood_1781080143675.png',
      badge: {
        zh: '米兰高定 MILAN DESIGN',
        en: 'MILANO CONCEPT',
        de: 'MILANO-STIL'
      },
      designer: 'A. Morosini (Milano)',
      color: {
        zh: '优雅原色黄金胡桃木 夹 摩卡黑金砂雕塑盒 (Golden Wild Walnut & Sand Cast Charcoal Box)',
        en: 'Golden Wild Walnut Timber & Textured Mocha Dark Bronze Grip Box',
        de: 'Wildnuss-Naturholz & strukturierte Mokka-Dunkelbronze-Gripbox'
      },
      craftMethod: {
        zh: '三维实木拼接榫卯缝咬工艺 + 浮凸拉手异型铸造成型 + 2.0重型氟碳磨砂金喷塑保护',
        en: '3D interlocking joint carving + sculptural cast solid steel grip frame integration',
        de: '3D-Schlitz-Zapfen-Verbindung + eingegossener massiver Metall-Griffrahmen'
      },
      materials: {
        zh: '百年级野放黄金生长黑胡桃木 + 不锈钢防风级冷压抗剪核心 + 智能全磁性感应机械锁体',
        en: 'Aged wild-grain walnut hardwood + structural non-warping high-carbon stabilization core + invisible lock cylinder',
        de: 'Gealtertes Wild-Walnussholz + verzugsfreie Stahl-Stabilisierungsschichten + unsichtbarer Schlosszylinder'
      },
      textureDescription: {
        zh: '胡桃木原始粗犷的不规则结痂在表面跃动。拉手处两个方正交错的积木盒巧妙扣咬，营造出无与伦比的三维厚重雕塑感。',
        en: 'Wild knotted walnut wood meets bold solid interlocking blocks forming a geometric tactile touch handle.',
        de: 'Wilde Ast-Maserung trifft auf schwere, blockartige Massivraster, die einen plastischen Tunnelgriff bilden.'
      },
      details: {
        zh: [
          '积木手形完美融入手部人体工学，每次探握指力顺滑过渡',
          '原木部分选用米兰定制超低敏感零漆感自然透气保护蜡',
          '双核全维自吸能减速系统，彻底杜绝夹手震动'
        ],
        en: [
          'Block grip frame meticulously ergonomicized to support natural grasping angles',
          'Surface protected with Italian water-repellent eco-finish for zero-volatile organic emissions',
          'Dual air-hydraulic deceleration prevents any fingers trapping during rapid swings'
        ],
        de: [
          'Blockgriff mechanisch ergonomisch geformt für komfortables Zugreifen',
          'Oberflächenversiegelung mit lösemittelfreiem, mattem Lack für maximale Langlebigkeit',
          'Die doppelte hydraulische Dämpfung verhindert verlässlich Quetschungen'
        ]
      },
      uValue: '0.62 W/(m²•K)',
      weightLimit: '1400 kg',
      offsetPercentage: '28% / 18%'
    },
    {
      id: 'hzy-040',
      name: {
        zh: 'HZY-040 几何对角拼接液铜偏轴门',
        en: 'HZY-040 Diagonal Copper & Walnut Portal',
        de: 'HZY-040 Diagonales Kupfer-Holz-Verbundportal'
      },
      tagline: {
        zh: '液态赤铜与黑胡桃原木以对角黄金线进行力量分割',
        en: 'Striking diagonal tension splitting natural wood and micro-fused organic copper',
        de: 'Markante diagonale Trennung aus Echtholz und spritzgegossenem Kupfer'
      },
      image: '/src/assets/images/pivot_liquid_gold_1781080158102.png',
      badge: {
        zh: '艺术新锐 AVANT-GARDE',
        en: 'DYNAMIC METEOR',
        de: 'KUPFER-DYNAMIK'
      },
      designer: 'Studio K. (Zürich)',
      color: {
        zh: '复古微焦黑胡桃木色 与 三维抛光红铜色 (Scorched Walnut & Burnished Red Flame Copper)',
        en: 'Scorched Roasted Walnut Wood & Burnished Red Flame Copper',
        de: 'Gebürstetes Walnussholz & Flammrot-Kupferlegierung'
      },
      craftMethod: {
        zh: '高能阳离子氧化拉丝饰面 + 45度角精密重卡拼接拼咬 + 异型一体成型亚光涂层长执手',
        en: 'Diagonal book-matching metal seam lock + direct vacuum organic metal sintering',
        de: 'Diagonale Gehrungsschloss-Verbindung + metallgespritzte Oberflächenhärtung'
      },
      materials: {
        zh: '多层航天装甲级三断桥防盗铝合金 + 手工微雕防酸氧化纯紫铜极质贴面 + 超耐候抗紫外线稳定漆膜',
        en: 'Triple-thermal break core + micro-sculptured acid-proof pure red copper sheets + anti-UV scratch shields',
        de: 'Dreifach-Thermokernträger + mikroskulptiertes Anti-Säure-Kupferblech + kratzfester UV-Schutzlack'
      },
      textureDescription: {
        zh: '对角分界线粗旷而充满力量。一边是天然火山爆裂液态斑驳赤铜，一边是手工打磨细腻温润的黑胡桃，两种温差材质的绝对碰撞。',
        en: 'A high-contrast diagonal boundary separates highly textured rustic volcano-copper sheets from smooth hand-waxed dark walnut.',
        de: 'Eine kontrastreiche Diagonale trennt grobes, raues Flammkupfer von feinstem, handgewachstem Walnussholz.'
      },
      details: {
        zh: [
          '表面液态铜层历经12道手工防落色固化氧化，历久而色泽愈加温润',
          '纯粹隐形锁体搭载人脸微波感应解锁，安全无外露结构',
          '欧盟 RC4 防盗最高安全测试，完美兼顾绝对隔热性能与防盗防护'
        ],
        en: [
          'Surface copper tiles undergoes heavy oxidative baking for lifetime anti-fading grace',
          'Hidden biomechanical frame allows facial proximity auto unlocking seamlessly',
          'Strictly proven to withstand continuous physical drills and impacts to RC4 benchmark level'
        ],
        de: [
          'Kupferplatten durchlaufen Hitzeoxidations-Härtungen für dauerhaften Farbschatz',
          'Lumina-Gesichtserkennung entriegelt die immense Tür berührungslos',
          'Erstklassiger Schutz nach RC4-Prüfung schützt vor Einbruchversuchen mit Elektrowerkzeug'
        ]
      },
      uValue: '0.57 W/(m²•K)',
      weightLimit: '1900 kg',
      offsetPercentage: '25% / 15%'
    },
    {
      id: 'hzy-041',
      name: {
        zh: 'HZY-041 悬浮中置积木手柄偏轴木门',
        en: 'HZY-041 Floating Central Block Oak Portal',
        de: 'HZY-041 Flächenbündiges Zentralblock-Portal'
      },
      tagline: {
        zh: '纯粹对称，中置悬浮厚重极简木锁盒拉手',
        en: 'Bold symmetry featuring a solid central box grab handle representing static gravity',
        de: 'Perfekte Symmetrie mit schwerem Holzblock-Griff für unvergleichliche Haptik'
      },
      image: '/src/assets/images/pivot_carbon_wood_1781080143675.png',
      badge: {
        zh: '经典重现 MONUMENTAL',
        en: 'STATIC SYMMETRY',
        de: 'SYM-METRIE'
      },
      designer: 'Inoue & Partners (Tokyo)',
      color: {
        zh: '烟熏胡桃木暗咖色 与 焦糖磨砂烤漆扣握拉手 (Smoked Walnut Dark Coffee & Caramel Matte)',
        en: 'Smoked Wild Walnut & Caramel Brown Matte Grip Accents',
        de: 'Räucherwalnuss-Dunkelbraun & Karamelldekor-Gripbox'
      },
      craftMethod: {
        zh: '百年老橡硬木双向微距直纹对拼 + 偏心中下置拉手盒隐形机械锁扣集成',
        en: 'Age-matured vertical wood block cladding + offset central cavity lock Integration',
        de: 'Vertikale Massivholzlamellen-Verschalung + integrierte Zentralblock-Gripbox'
      },
      materials: {
        zh: '白冷杉抗拉抗剪稳定结构基加层 + 3.0mm 超厚北美烘干黑胡桃木 + 三维强力闭锁液控弹簧轴心',
        en: 'White Fir multi-ply core + 3.0mm thick kiln-dried walnut face layers + structural heavy-duty load springs',
        de: 'Kiefer-Mehrschichten-Verbundkern + 3,0 mm getrocknete Walnussdecklage + Schwerlast-Bodenspiralzapfen'
      },
      textureDescription: {
        zh: '烟熏质感的深褐色直纹路贯通通体，正中央安置的方形积木浮凸拉手机构，极致弱化科技痕迹，静谧得犹如一块太古丰碑。',
        en: 'Minimal vertical grains are punctuated by a singular floating monumental block, completely concealing smart sensors.',
        de: 'Extrem reduzierte Optik: Ein monolithisch wirkendes Massivholztor mit einem mittig schwebenden Griffblock.'
      },
      details: {
        zh: [
          '极其厚重的三维执手，完美的平衡重心抓地感，推拉气势磅礴',
          '双阻尼阻尼铰链，开启摆动毫无金属偏向摩擦噪声',
          '通过欧盟20万次极限开摆无损测试，传家级工程表现'
        ],
        en: [
          'Symmetric handle acts as the visual and structural mass center for elegant physics control',
          'Fluidic double pivot dampeners eliminates any heavy metallic creaks or resistance',
          'Rated for 200,000 cycles with zero performance loss, guaranteed generations value'
        ],
        de: [
          'Der massive Griff bildet das ausbalancierte Kraftzentrum für spielend leichtes Pendeln',
          'Spezielle Strömungsventile in den Bodenlagern unterdrücken jegliche Reibungsgeräusche',
          'Verschleißfrei getestet auf 200.000 Türöffnungen für Generationen'
        ]
      },
      uValue: '0.59 W/(m²•K)',
      weightLimit: '1600 kg',
      offsetPercentage: '20% / 10%'
    },
    {
      id: 'hzy-042',
      name: {
        zh: 'HZY-042 裂变金丝绶带嵌装木大门',
        en: 'HZY-042 Golden Ribbon Split Inlay Portal',
        de: 'HZY-042 Golden-Strip Holz-Verbundportal'
      },
      tagline: {
        zh: '极致极窄铜带拉丝嵌入深色木体，纵深无限奢华',
        en: 'Sleek brass ribbon strip embedded deep into organic dark-stained oak',
        de: 'Messing-Schmucklinie perfekt bündig in Natureichenholz eingearbeitet'
      },
      image: '/src/assets/images/pivot_carbon_wood_1781080143675.png',
      badge: {
        zh: '奢雅定制 BESPOKE ROYAL',
        en: 'ROYAL RIBBON',
        de: 'MESSINGBAND'
      },
      designer: 'Studio K. (Zürich)',
      color: {
        zh: '意式沉稳摩卡咖木色 配 镜面拉丝24K极窄金条 (Mocha Charcoal Oak & 24K Brushed Brass Gold)',
        en: 'Deep Mocha Charcoal Wood & Brushed 24K Electroplate Brass Gold',
        de: 'Mocha-Eichendekor-Dunkelbraun & Feingebürstetes 24K-Messing-Gold'
      },
      craftMethod: {
        zh: '数控精密凹型榫开槽 + 纯黄铜T字金属条冷缩液嵌 + 边缘重卡无指纹固油密封',
        en: 'Precision vertical channel routing + cold T-groove brass bar shrinkage lock + nano sealer',
        de: 'Präzisions-T-Nutenfräsung + eingepresstes massives T-Messingprofil + Antifingerprint-Ölversiegelung'
      },
      materials: {
        zh: '高韧超重双冷拉不锈钢防暴骨架 + A级耐紫外线烟熏橡木皮 + 实心拉丝航空黄铜条框',
        en: 'High-alloy stabilization chassis + smoked prime oak face layers + solid brushed hardware seals',
        de: 'Verstärktes Stahlgitter-Sicherheitschassis + geräucherte Mooreiche + Messingband-Inlays'
      },
      textureDescription: {
        zh: '深沉优雅如同夜色一般的摩卡橡木表面，一根极其璀璨、笔直的拉丝真金带条冷峻划过，让沉重的大门平添无上的极度优雅华贵度。',
        en: 'Deep charcoal-dyed timber is cut vertically by an extremely thin, flawless line of highly reflected brass, giving royal grace.',
        de: 'Mittelbraune Räuchereiche wird durchbrochen von einem filigranen, glänzenden Band aus edlem Echtmessing.'
      },
      details: {
        zh: [
          '纳米级无指纹真金条保护电镀保护，无论手汗触摸绝不氧化腐蚀发乌',
          '微型无形人体工学扣握手柄隐形集成在金丝绶带一侧，浑然天成',
          '0.58 欧盟被动房断桥传热极优等级，完美隔断外部冰冷热流'
        ],
        en: [
          'Anti-fingerprint nano surface sealing prevents any patina buildup on brass parts',
          'Micro vertical handle pocket sits carved adjacent to the ribbon for flawless flow',
          'Exquisite thermal performance of 0.58 U-value keeps high mountain winter cold out'
        ],
        de: [
          'Antifingerprint-Beschichtung verhindert Flecken oder Anlaufen des Messing-Inlays',
          'Filigraner, unauffälliger Griffschlitz schmiegt sich bündig an die Metalllinie an',
          'Exzellente Thermoisolierung sorgt für minimale Wärmeverluste bei arktischen Wintern'
        ]
      },
      uValue: '0.58 W/(m²•K)',
      weightLimit: '1700 kg',
      offsetPercentage: '25% / 15%'
    },
    {
      id: 'hzy-043',
      name: {
        zh: 'HZY-043 意式粗砺红木扁平偏轴门',
        en: 'HZY-043 Aged Redwood Armor Gateway',
        de: 'HZY-043 Toskanisches Altholz-Verbundportal'
      },
      tagline: {
        zh: '托斯卡纳重型厚原木质与极厚钛钢侧装拉手的绝对守御',
        en: 'Chunky rustic heavy redwood logs contrasted by titanium-grey vertical bars',
        de: 'Toskanisches, sonnengetrocknetes Rotholz mit massivem Titangriff'
      },
      image: '/src/assets/images/pivot_carbon_wood_1781080143675.png',
      badge: {
        zh: '中世纪回响 CLASSIC SOLID',
        en: 'RAW REDWOOD',
        de: 'ALPEN-PINIE'
      },
      designer: 'A. Morosini (Milano)',
      color: {
        zh: '天然陈年红松木色 与 亚光玄金喷砂拉手 (Aged Tuscan Redwood & Textured Lava Grey Steel)',
        en: 'Natural Sonnengetrocknet Redwood & Textured Lava Grey Steel Bar',
        de: 'Natur-Rotholz mit antiker Struktur & Sandgestrahltes Lavagrau-Metall'
      },
      craftMethod: {
        zh: '直条原木高温控湿熟成碳化 + 重防腐红铜密封底漆 + 手作多维木纹深度雕刻',
        en: 'Kiln-roasted timber aging stabilization + heavy copper-infused sealing primer + dimensional routing',
        de: 'Ofengetrocknetes Massivholz mit Flammschutz-Kupfergrundierung + 3D-Frästechniken'
      },
      materials: {
        zh: '重型抗剪高回弹内部防撬核心钢梁 + 3寸超厚精切天然红木板 + 1.2米特长热压不锈钢执手',
        en: 'Heavy structural anti-flex steel skeleton + 3-inch block-cut natural sturdy redwood + giant slab handle',
        de: 'Stahl-Rahmensicherheitskern + 3 Zoll massive Toskana-Kiefer-Dielen + 1,2 Meter massiver Edelstahlgriff'
      },
      textureDescription: {
        zh: '高山红木特有的厚重赤红色泽，带有些许粗粝的微孔，搭配修长笔直的火山岩灰不锈钢立板拉手，传递极度沉稳、厚实、安心的大宅底蕴。',
        en: 'Warm rust-tinted redwood slabs run full length, offset by a robust slab bar handle that defines high security.',
        de: 'Rötliche Holzdielen treffen auf einen klobigen, mattschwarzen Block-Zuggriff, der pure Sicherheit vermittelt.'
      },
      details: {
        zh: [
          '天然红木历经真空压力脱水防蛀防霉处理，风吹日晒历久弥新',
          '1.2 米熔模一体铸造拉手，内置生物特征三维皮下静脉雷达',
          '2.2吨的极限铰链抗断强承重结构设计，永不松脱下沉变型'
        ],
        en: [
          'Redwood panels dry-cured inside high-vacuum chambers to suppress cracking forever',
          'Bespoke slab handle integrates subcutaneous biometric vein-mapping scanner invisible',
          'Engineered to accept up to 2.2 metric tons without pivot axis alignment deviation'
        ],
        de: [
          'Vakuumgetrocknete Holzdielen unterbinden Risse oder Fäulnis dauerhaft',
          'Sicherheitsgriff enthält nahtlos integrierten biotischen Venen-Scanner zur Erkennung',
          'Enorme Tragkraft: Hält Lasten von bis zu 2,2 Tonnen verzugssicher stand'
        ]
      },
      uValue: '0.61 W/(m²•K)',
      weightLimit: '2200 kg',
      offsetPercentage: '30% / 15%'
    },
    {
      id: 'hzy-044',
      name: {
        zh: 'HZY-044 钛银水平流线断桥偏轴门',
        en: 'HZY-044 Horizontal Glazed Steel Portal',
        de: 'HZY-044 Horizontale Glanzstahl-Glaselemente'
      },
      tagline: {
        zh: '科技银水平线流，极简建筑的完美延伸',
        en: 'Laser-scored horizontal gridlines forming a futuristic architectural grid',
        de: 'Lasergeriffeltes, horizontales Aluminiumgitter für puristische Villen'
      },
      image: '/src/assets/images/pivot_concrete_stone_1781080170561.png',
      badge: {
        zh: '未来别墅 FUTURISTIC',
        en: 'GRIDLINE MINIMAL',
        de: 'MESSINGLINIEN'
      },
      designer: 'H. Gessner (München)',
      color: {
        zh: '磨砂宇宙钛钢灰 配 银白拉丝防撬装饰线条 (Obsidian Space Slate Grey & Silver Accents)',
        en: 'Space Slate Grey & Brushed Anodized Silver Contrast Striping',
        de: 'Space-Schiefergrau Matt & Kontrastlinien aus gebürstetem Silber'
      },
      craftMethod: {
        zh: '断桥阳极极速冷氧化 + 数控三维多温等分横切铣刨槽 + 微缝隐蔽金边框合',
        en: 'Anodic cool-oxidation paint sealant + 5-axis CNC horizontal grooves alignment + sub-millimeter metal framing',
        de: 'Kaltanodische Oberflächenoxidierung + 5-Achs-CNC-Querfräsnuten + Mikrometer-Alurahmen'
      },
      materials: {
        zh: '冷锻合金板高刚断桥心 + 纳米二氧化硅防刮不褪色氟碳表面 + 钛钢防窥隐形立拉执手',
        en: 'Cold-forged heavy structural alloy + SiO2 self-healing fluorine lacquer finishes + recessed vertical flush light-bar handles',
        de: 'Kaltgeschmiedete Leichtmetallplatte + SiO2 selbstheilender Fluorcarbon-Speziallack + flächenbündiger Vertikalgriff'
      },
      textureDescription: {
        zh: '具有磨砂质感的太空钛钢灰色表面。四条锋美利落的等宽水平银白槽线横贯，极具未来科幻和数码数字韵律，是现代灰度大建筑的主入口绝配。',
        en: 'Obsidian powder texturing meets perfectly divided bright horizontal line breaks, expressing modular technical order.',
        de: 'Dunkelgraue Lackierung wird rhythmisch aufgelockert durch perfekt abgemessene horizontale Metallschnitte.'
      },
      details: {
        zh: [
          '抗变色、抗风沙击打，具备自我修复微小刮擦涂层功能',
          '右侧全内嵌发光LED光流手柄槽，在暗夜指引归家礼序',
          '0.55 W/(m²•K) 极致保温断桥表现，契合低能耗被动房标准'
        ],
        en: [
          'High abrasion resistance with self-healing topcoat protection against dust storms',
          'Recessed light-bar handle illuminates gently at night as proximity check satisfies',
          'Passive house thermal level of 0.55 keeps warm room climatization sealed in'
        ],
        de: [
          'Hohe Beständigkeit: Kratzfester Speziallack schützt vor sandigen Winden oder Hagel',
          'Flächenbündiger LED-Lichtkanal erleichtert abends ein komfortables Aufziehen',
          'Passivhaus-Dämmung von 0,55 spart Energiekosten und wehrt extreme Sommerhitze'
        ]
      },
      uValue: '0.55 W/(m²•K)',
      weightLimit: '1800 kg',
      offsetPercentage: '20% / 10%'
    },
    {
      id: 'hzy-045',
      name: {
        zh: 'HZY-045 极昼拼色拉丝铝钛偏轴门',
        en: 'HZY-045 Dual-Tone Titanium Silver Pivot',
        de: 'HZY-045 Bi-Color Titan-Silber-Riesenportal'
      },
      tagline: {
        zh: '上下双重极昼异色，用绝对水平割线打破平庸',
        en: 'Sharp dual-colored horizontal splitting that re-defines avant-garde geometry',
        de: 'Bicolor-Teilung mit extremer Breitenwirkung sprengt traditionelle Formeln'
      },
      image: '/src/assets/images/pivot_concrete_stone_1781080170561.png',
      badge: {
        zh: '极地未来 SPACE AVANT',
        en: 'BINARY BI-COLOR',
        de: 'BI-COLOR'
      },
      designer: 'Inoue & Partners (Tokyo)',
      color: {
        zh: '上体极光拉丝钛银 与 下部哑光石墨钛炭 (Aurora Brushed Silver & Slate Carbon Graphite)',
        en: 'Aurora Brushed Silver (Upper Half) & Carbon Slate Graphite (Lower Half)',
        de: 'Brushed Polar-Silber (Obere Hälfte) & Graphit-Schiefer (Untere Hälfte)'
      },
      craftMethod: {
        zh: '高精度无感横向咬合裁切拼缝 + 阳极氧化钛合金双硬表面硬核加封',
        en: 'Seamless binary lock segmenting + titanium alloy hard anodization sealing',
        de: 'Nahtloses Zusammenpressen zweier Sektionen + extreme Titan-Anodisierung'
      },
      materials: {
        zh: '100% 航空级环保轻量铝硅合金心骨 + 二氧化硅热风自愈自洁漆膜 + 高密真空离子溅镀执手轴心',
        en: '100% light density aerospace alu-sil alloy structure + SiO2 hydrophobic anti-graffiti coat + PVD vacuum gold components',
        de: '100 % Luftfahrt-Aluminiumträger + hydrophobe Nanobeschichtung + PVD-vakuumvergoldete Verbindungsteile'
      },
      textureDescription: {
        zh: '上方呈波浪拉丝银色光彩，下方则是沉稳冷静的深石墨黑。完美的中界拼接缝上金光磨毛，让极现代派的主体富含高傲的对立美学。',
        en: 'Brushed aurora silver upper slab directly contrasts with dark volcanic ash grey bottom block, separated by thin gold trim.',
        de: 'Brilliant gebürstetes Polar-Silber im Kontrast zu mattem Schiefergrau, getrennt durch ein filigranes Gold-Inlay.'
      },
      details: {
        zh: [
          '上部极光拉丝不惧指纹划痕，下部哑光耐脏防泥污',
          '配备特制电磁空气力轴：极度开启自限位闭闭减速阀',
          '0.56 W/(m²•K) 德国北欧标准的极低阻冷断桥传流热值'
        ],
        en: [
          'Upper brushed shield deters grease fingerprints completely, bottom resists mud and rain kicks',
          'Equipped with custom gas-hydraulic axis dampening that locks swing speeds strictly',
          'German peak rating Certified 0.56 Passive heat-break efficiency'
        ],
        de: [
          'Unempfindliche Brushed-Oberfläche weist Schweiß und Regen verlässlich ab',
          'Hydropneumatische Lagerbremse reguliert sanft die immense Türträgheit ab 90°',
          'Deutsches Dämmstoff-Zertifikat 0,56 dämmt Schall als auch Außentemperaturen'
        ]
      },
      uValue: '0.56 W/(m²•K)',
      weightLimit: '1900 kg',
      offsetPercentage: '33% / 15%'
    },
    {
      id: 'hzy-046',
      name: {
        zh: 'HZY-046 极极白晶脉冲呼吸灯偏轴门',
        en: 'HZY-046 Aurora Pure Pulse White Pivot',
        de: 'HZY-046 Aura Pure White LED-Schluchtportal'
      },
      tagline: {
        zh: '纯白如雪，幽静中绽放指引归途的蓝色脉动呼吸灯',
        en: 'Pristine arctic white block displaying a comforting blue breathing light canyon',
        de: 'Schneeweißer Mineralblock mit atmendem blauen LED-Koronagriff'
      },
      image: '/src/assets/images/pivot_concrete_stone_1781080170561.png',
      badge: {
        zh: '极简无瑕 SILENT WHITE',
        en: 'AURORA BREATH',
        de: 'LICHTSCHLUCHT'
      },
      designer: 'Studio K. (Zürich)',
      color: {
        zh: '极地无瑕纯白色 与 幽邃幻夜脉冲深海蓝 (Polar Pure Alpine White & Deep Pulse Ocean Blue Glow)',
        en: 'Polar Alpine Pure White & Deep Pulse Ocean Blue Illumination',
        de: 'Alpinweiß Hochglanz & Deep-Ozeanblau Interaktions-Beleuchtung'
      },
      craftMethod: {
        zh: '多层纳米高氟碳粉末静电熔喷固封 + 无缝内聚防潮中置手柄槽深度冲模成型 + 脉冲柔光导光板集成',
        en: 'Electrostatic powder melt curing + seamless recessed handle cup mold casting + LED light-guide encapsulation',
        de: 'Elektrostatische Pulvereinbrennlackierung + nahtlos gefalteter Griffschlucht-Einguss + LED-Lichtleiter-Modul'
      },
      materials: {
        zh: '极低热抗膨胀铝蜂窝绝缘断桥层 + 超高密纤维微珠抗裂合成基底 + 亚微米智能控制交互芯片板',
        en: 'Alu-honeycomb insulation layer + high-rigidity ultra-fine dense compound matrix + intelligent smart controller',
        de: 'Alu-Wabenkern-Dämmplatte + hochelastischer, rissfreier Faserverbundstoff + Mikrosensor-Rechenplatine'
      },
      textureDescription: {
        zh: '犹如一整块自极寒极圈切取的巨大白冰，不留一丝烟火气。深槽中呼吸脉冲的幽幽蓝光，仿佛建筑本身的温柔心跳，极富未来神性美。',
        en: 'A monolithic pristine arctic white entry block featuring a recessed portal handle pulsing gently with organic blue LED wavelengths.',
        de: 'Ein schneeweißer Monolith. Aus dem tiefen Griffkrater pulsiert ein geheimnisvolles, blaues LED-Licht wie der Herzschlag des Hauses.'
      },
      details: {
        zh: [
          '抗菌自洁自修复超耐候白车漆表层，即便风雨泥尘高压水枪一冲即白',
          '微波自控芯片：业主距离大门 1.5 米处时，呼吸灯由舒缓呼吸自动切换为恒亮引导握持解锁',
          '极臻0.55传热阻冷值，通过严苛的超长防火抗寒冷极劣考验'
        ],
        en: [
          'Anti-pollution scratch-healing premium fluorocarbon coating washes pristine clean with water',
          'Microwave radar sensor: detects authorized owner at 1.5m to transit light from breath pulse to static guidance glow',
          'Phenomenal 0.55 thermal efficiency rating resists severe arctic blizzards flawlessly'
        ],
        de: [
          'Selbstreinigender Lotuseffekt: Weißer Speziallack lässt Regen- und Schmutzwasser abperlen',
          'Smart-Radar: Schaltet bei Annäherung auf 1,5 Meter das blaue Pulsieren auf ein statisches Führungslicht',
          'Konsequente Kältebrücken-Vermeidung mit exzellentem 0,55 U-Wert schützt vor Schneestürmen'
        ]
      },
      uValue: '0.55 W/(m²•K)',
      weightLimit: '2100 kg',
      offsetPercentage: '20% / 10%'
    }
  ];

  const activeStyle = pivotStyles.find(p => p.id === activeStyleId) || pivotStyles[0];

  if (!isOpen) return null;

  const handleInquiryRedirect = () => {
    onSelectProduct(activeStyle.name[currentLang]);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-[#F4F5F8]/98 backdrop-blur-xl flex flex-col min-h-screen">
        
        {/* UPPER NAVIGATION BAR */}
        <header className="sticky top-0 z-30 bg-white/70 backdrop-blur-md border-b border-gray-200/60 px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase">
                {currentLang === 'zh' ? '湖之翼 • 偏轴门高定品鉴厅' : 'HUZHIYI • PIVOT EXP DETAILED HUB'}
              </span>
              <span className="hidden sm:inline bg-indigo-100 text-indigo-700 text-[10px] font-mono font-bold px-2 py-0.5 rounded-full uppercase">
                Interactive Studio
              </span>
            </div>
            
            {/* CLOSE BUTTON */}
            <button
              onClick={onClose}
              className="flex items-center space-x-1 px-3 py-1.5 bg-black hover:bg-slate-800 text-white text-xs font-bold font-mono rounded-full tracking-wider uppercase transition-colors cursor-pointer"
            >
              <X className="w-3.5 h-3.5 mr-1" />
              <span>{currentLang === 'zh' ? '返回展厅' : 'Back to Gallery'}</span>
            </button>
          </div>
        </header>

        {/* CORE GRID LAYOUT */}
        <div id="pivot-explorer-container" className="max-w-7xl mx-auto w-full px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 flex-1 items-stretch">
          
          {/* LEFT PANEL: ROTATING DOOR VISUALIZER & MULTIPLE STYLE ROW */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            
            {/* LARGE ROTATING RENDER VIEWPORT */}
            <div className="bg-white rounded-[32px] border border-gray-200/80 p-8 shadow-xs relative overflow-hidden flex flex-col justify-between min-h-[460px] md:min-h-[520px]">
              {/* Background specs grid decoration */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#eef0f5_1px,transparent_1px),linear-gradient(to_bottom,#eef0f5_1px,transparent_1px)] bg-[size:30px_30px] opacity-60 pointer-events-none" />

              <div className="relative z-10 flex justify-between items-start">
                <div>
                  <span className="inline-block bg-[#111318] text-amber-300 text-[8px] font-mono tracking-widest uppercase font-bold px-3.5 py-1.5 rounded-md mb-2">
                    {activeStyle.badge[currentLang]}
                  </span>
                  <div className="text-[10px] text-gray-400 font-mono">
                    DESIGNBY: <span className="text-gray-800 font-bold">{activeStyle.designer}</span>
                  </div>
                </div>

                {/* Simulated Rotator Slider HUD */}
                <div className="bg-[#F4F5F8] p-2.5 rounded-xl border border-gray-200/60 text-right space-y-0.5 max-w-[140px]">
                  <span className="block text-[8px] font-mono text-slate-500 tracking-wider">AXIS POSITION</span>
                  <span className="block text-xs font-semibold text-gray-800 font-mono">OFFSET {activeStyle.offsetPercentage}</span>
                </div>
              </div>

              {/* RENDER STAGE WITH ROTATION TRANSLATION */}
              <div className="relative my-6 flex items-center justify-center flex-1 h-64 md:h-76">
                
                {/* Visual door shadow perspective floor */}
                <div className="absolute bottom-4 w-60 h-4 bg-black/5 rounded-full blur-xs transform scale-y-50" />

                {/* Active model rendering frame */}
                <motion.div
                  key={activeStyleId}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    perspective: 1200,
                  }}
                  className="relative cursor-grab active:cursor-grabbing w-full h-full flex justify-center items-center"
                >
                  <motion.div
                    animate={{ rotateY: rotationDegrees }}
                    transition={{ type: 'spring', stiffness: 45, damping: 15 }}
                    style={{ transformOrigin: '25% 50%' }}
                    className="relative max-h-full h-full flex justify-center"
                  >
                    <img 
                      src={activeStyle.image} 
                      alt={activeStyle.name[currentLang]} 
                      className="h-full max-h-60 sm:max-h-72 object-contain rounded-lg shadow-2xl border border-gray-200/50"
                    />

                    {/* Integrated smart lock LED pulsing beacon on the door */}
                    {activeStyleId === 'aura-volcanic' && (
                      <div className="absolute top-[48%] left-[21%] w-4 h-4 bg-emerald-400 rounded-full border border-white animate-ping opacity-75 pointer-events-none" />
                    )}
                  </motion.div>
                </motion.div>

              </div>

              {/* INTERACTIVE CONTROLS HUD */}
              <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-2">
                  <Sliders className="w-4 h-4 text-indigo-500" />
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest font-semibold">
                    {currentLang === 'zh' ? '仿真开合摆角调整' : 'Simultaneous Rotation Angle'}
                  </span>
                </div>

                <div className="flex w-full sm:w-auto items-center space-x-4">
                  <span className="text-xs font-mono font-bold text-gray-850 w-8">{rotationDegrees}°</span>
                  <input
                    type="range"
                    min="-45"
                    max="90"
                    value={rotationDegrees}
                    onChange={(e) => setRotationDegrees(Number(e.target.value))}
                    className="flex-1 sm:w-44 h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                  />
                  <button 
                    onClick={() => setRotationDegrees(0)}
                    title="Reset Angle"
                    className="p-1 px-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded text-[9px] font-bold font-mono transition-colors"
                  >
                    RESET
                  </button>
                </div>
              </div>

            </div>

            {/* STYLE HORIZONTAL SLIDER / SELECTION ITEMS (MINIMAL) */}
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#7B8390] block">
                {currentLang === 'zh' ? '设计流派与真品高精纹理库 (点击切换不同款式)' : 'CHOOSE SPECIFIC SURFACE TEXTURE STYLE (Click to switch)'}
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-h-[220px] overflow-y-auto pr-1">
                {pivotStyles.map((style) => (
                  <button
                    key={style.id}
                    onClick={() => {
                      setActiveStyleId(style.id);
                      setRotationDegrees(0); // Reset for transition comfort
                    }}
                    className={`p-3 rounded-2xl border text-left flex flex-col space-y-2 transition-all duration-350 relative overflow-hidden cursor-pointer ${
                      activeStyleId === style.id 
                        ? 'bg-white border-indigo-600 shadow-xl ring-2 ring-indigo-600/20' 
                        : 'bg-white/50 hover:bg-white border-gray-200'
                    }`}
                  >
                    <div className="aspect-[5/3] rounded-lg overflow-hidden bg-slate-100 relative">
                      <img 
                        src={style.image} 
                        alt={style.name[currentLang]} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <span className="text-[10px] md:text-xs font-extrabold text-gray-900 tracking-tight leading-tight truncate">
                      {style.name[currentLang].split(' ')[0]}
                    </span>
                    <span className="text-[8px] font-mono text-gray-400 capitalize truncate">
                      {style.badge[currentLang]}
                    </span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT PANEL: DETAILS, DESIGN CONCEPT, CRAFTSMANSHIP & ACTION COUPLING */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8 bg-white rounded-[32px] border border-gray-200/80 p-8 md:p-10 shadow-xs">
            
            {/* HEADER DESIGN INTRO */}
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold text-indigo-600 tracking-widest uppercase">
                {activeStyle.badge[currentLang]} • PIVOT GATEWAY
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#111318] tracking-tight leading-none uppercase font-sans">
                {activeStyle.name[currentLang]}
              </h2>
              <p className="text-slate-500 font-sans italic text-sm md:text-base leading-relaxed border-l-2 border-indigo-600 pl-4 py-1">
                「 {activeStyle.tagline[currentLang]} 」
              </p>
            </div>

            {/* THREE TECHNICAL SPECS MINI BOARD */}
            <div className="grid grid-cols-3 gap-4 border-y border-gray-150 py-6 my-2">
              <div className="space-y-1">
                <span className="block text-[8px] font-mono font-bold uppercase tracking-widest text-[#7B8390]">阻冷阻系数</span>
                <div className="flex items-center space-x-1">
                  <Thermometer className="w-4 h-4 text-emerald-500" />
                  <span className="text-xs font-extrabold font-mono text-gray-850">{activeStyle.uValue}</span>
                </div>
              </div>
              <div className="space-y-1">
                <span className="block text-[8px] font-mono font-bold uppercase tracking-widest text-[#7B8390]">极限承力重量</span>
                <div className="flex items-center space-x-1">
                  <Layers className="w-4 h-4 text-indigo-500" />
                  <span className="text-xs font-extrabold font-mono text-gray-850">{activeStyle.weightLimit}</span>
                </div>
              </div>
              <div className="space-y-1">
                <span className="block text-[8px] font-mono font-bold uppercase tracking-widest text-[#7B8390]">旋转几何比例</span>
                <div className="flex items-center space-x-1">
                  <RotateCw className="w-3.5 h-3.5 text-amber-500" />
                  <span className="text-xs font-extrabold font-mono text-gray-850">{activeStyle.offsetPercentage}</span>
                </div>
              </div>
            </div>

            {/* SEGMENT TAB BED */}
            <div className="space-y-4 flex-1">
              {/* Tabs list */}
              <div className="flex border-b border-gray-100 text-xs font-mono font-bold">
                <button
                  onClick={() => setActiveDetailTab('craft')}
                  className={`pb-3 pr-4 border-b-2 tracking-wider transition-colors uppercase cursor-pointer ${
                    activeDetailTab === 'craft' ? 'border-[#111318] text-[#111318]' : 'border-transparent text-[#7B8390]'
                  }`}
                >
                  {currentLang === 'zh' ? '偏轴传世工艺' : 'AXIS CRAFT'}
                </button>
                <button
                  onClick={() => setActiveDetailTab('texture')}
                  className={`pb-3 px-4 border-b-2 tracking-wider transition-colors uppercase cursor-pointer ${
                    activeDetailTab === 'texture' ? 'border-[#111318] text-[#111318]' : 'border-transparent text-[#7B8390]'
                  }`}
                >
                  {currentLang === 'zh' ? '艺术微雕纹理' : 'SCULPTED TEXTURES'}
                </button>
                <button
                  onClick={() => setActiveDetailTab('security')}
                  className={`pb-3 px-4 border-b-2 tracking-wider transition-colors uppercase cursor-pointer ${
                    activeDetailTab === 'security' ? 'border-[#111318] text-[#111318]' : 'border-transparent text-[#7B8390]'
                  }`}
                >
                  {currentLang === 'zh' ? '物理及极臻守护' : 'MILITARY SECURITY'}
                </button>
              </div>

              {/* Tab render details */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDetailTab}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-5"
                >
                  {activeDetailTab === 'craft' && (
                    <div className="space-y-4">
                      {/* Color & Craft Highlight Box as explicitly requested */}
                      <div className="p-4 bg-indigo-50/60 rounded-2xl border border-indigo-100/80 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-0.5">
                          <span className="text-[9px] font-mono uppercase text-indigo-600 block font-bold tracking-wider">
                            {currentLang === 'zh' ? '● 高定表面色彩 (Color)' : '● Bespoke Color'}
                          </span>
                          <p className="text-xs text-slate-800 font-bold font-sans leading-tight">{activeStyle.color[currentLang]}</p>
                        </div>
                        <div className="space-y-0.5">
                          <span className="text-[9px] font-mono uppercase text-indigo-600 block font-bold tracking-wider">
                            {currentLang === 'zh' ? '● 传世定段工法 (Craft)' : '● Bespoke Craftsmanship'}
                          </span>
                          <p className="text-xs text-slate-800 font-bold font-sans leading-tight">{activeStyle.craftMethod[currentLang]}</p>
                        </div>
                      </div>

                      <div className="p-4 bg-[#F4F5F8] rounded-2xl border border-gray-200/50">
                        <span className="text-[10px] font-mono uppercase text-[#7B8390] block mb-1">主板基底与结构</span>
                        <p className="text-xs text-slate-700 leading-relaxed font-sans">{activeStyle.materials[currentLang]}</p>
                      </div>

                      <div className="space-y-2">
                        {activeStyle.details[currentLang].map((det, index) => (
                          <div key={index} className="flex items-start space-x-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2 shrink-0" />
                            <span className="text-xs text-[#5C6472] font-medium leading-relaxed font-sans">{det}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeDetailTab === 'texture' && (
                    <div className="space-y-4">
                      <div className="p-4 bg-gradient-to-br from-indigo-50/20 to-fuchsia-50/20 rounded-2xl border border-gray-200/50">
                        <span className="text-[10px] font-mono uppercase text-indigo-500 block mb-1">材质美学感知报告</span>
                        <p className="text-xs text-slate-700 leading-relaxed font-sans">{activeStyle.textureDescription[currentLang]}</p>
                      </div>
                      <div className="space-y-2.5 text-xs text-[#5C6472] font-medium">
                        <div className="flex justify-between border-b border-gray-100 pb-2">
                          <span className="text-slate-400 font-mono text-[10px] uppercase">表面工艺级别</span>
                          <span className="text-gray-900 font-bold font-sans">{currentLang === 'zh' ? '大师级纯手工定制表面处理' : 'Cast Molded Bespoke Patterning'}</span>
                        </div>
                        <div className="flex justify-between border-b border-gray-100 pb-2">
                          <span className="text-slate-400 font-mono text-[10px] uppercase">核心定调原色</span>
                          <span className="text-indigo-600 font-bold font-sans">{activeStyle.color[currentLang]}</span>
                        </div>
                        <div className="flex justify-between border-b border-gray-100 pb-2">
                          <span className="text-slate-400 font-mono text-[10px] uppercase">表面工艺手法</span>
                          <span className="text-gray-900 font-bold font-sans">{activeStyle.craftMethod[currentLang]}</span>
                        </div>
                        <div className="flex justify-between pb-1">
                          <span className="text-slate-400 font-mono text-[10px] uppercase">防护科技等级</span>
                          <span className="text-gray-900 font-bold font-sans">9H Hardness Nano-ceramic Coated Self-Healing</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeDetailTab === 'security' && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-slate-900 text-white rounded-2xl border border-slate-800 space-y-1">
                          <ShieldCheck className="w-4 h-4 text-emerald-400" />
                          <span className="text-[10px] font-mono uppercase text-amber-300 block">防翻窃级别</span>
                          <span className="text-xs font-bold leading-normal block">EN 1627 RC4 Protective Limit</span>
                        </div>
                        <div className="p-4 bg-slate-900 text-white rounded-2xl border border-slate-800 space-y-1">
                          <Zap className="w-4 h-4 text-indigo-400" />
                          <span className="text-[10px] font-mono uppercase text-indigo-300 block">智能极速锁定</span>
                          <span className="text-xs font-bold leading-normal block">0.3s Micro-Radar Electro-Lock</span>
                        </div>
                      </div>

                      <div className="text-xs text-slate-500 leading-relaxed space-y-2.5 font-sans">
                        <p>
                          {currentLang === 'zh' 
                            ? '中控由 LGC 多环不锈钢极重装甲系统支撑，在偏度合页锁紧的一瞬间，全电控三维不锈钢钢舌将在 0.3 秒内迅速探出。' 
                            : 'Reinforced with thick solid carbon steel frames and deep internal active drive bars. The instant the structural core meets its closing margin, the security bolts deploy.'}
                        </p>
                        <p>
                          {currentLang === 'zh'
                            ? '带有全天候抗暴防爆自锁能力，彻底消除常规外露铰链可能发生的结构性剪切侵入破坏。'
                            : 'Ensures absolute protection. No exposed hinges means no physical structural entry points can be targeted by typical leverage break tools.'}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ACTION FOOTER */}
            <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-0.5 text-center sm:text-left">
                <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest font-bold">ARCHITECTURAL BESPOKE PRICING</span>
                <span className="block text-xs font-extrabold text-indigo-600 font-mono select-none">
                  {currentLang === 'zh' ? '针对定制庄园规格估价' : 'Bespoke Quote Upon Detailed Request'}
                </span>
              </div>

              <button
                onClick={handleInquiryRedirect}
                className="w-full sm:w-auto flex items-center justify-center space-x-2.5 px-8 py-4 bg-[#111318] hover:bg-indigo-700 text-white hover:text-white rounded-full text-xs font-bold font-mono tracking-widest uppercase transition-all cursor-pointer shadow-lg hover:scale-105"
              >
                <span>{currentLang === 'zh' ? '预约及索取偏轴门技术样本' : 'Configure This Pivot Design'}</span>
                <ArrowRight className="w-4 h-4 text-amber-300" />
              </button>
            </div>

          </div>

        </div>

        {/* METRICS BOTTOM HUD ROW */}
        <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-6 px-6 relative z-10 selection:bg-slate-800">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-mono uppercase font-semibold">
            <div>
              <span>HUZHIYI HIGH-CENTRIFUGAL GRAVITY MASS AGENT: ACTIVE</span>
            </div>
            <div className="flex items-center space-x-6">
              <span>DESIGN COUPLING STATUS: SYNCHRONIZED</span>
              <span>GERMAN INSULATION REGULATION EN 10077-1</span>
            </div>
          </div>
        </footer>

      </div>
    </AnimatePresence>
  );
}
