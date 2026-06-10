import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown, Check, Sparkles, MoveRight, Eye } from 'lucide-react';
import { Language } from '../types';

interface HeroProps {
  currentLang: Language;
  onNavigate: (sectionId: string) => void;
  onOpenPivotExplorer?: () => void;
}

export default function Hero({ currentLang, onNavigate, onOpenPivotExplorer }: HeroProps) {
  // Local state to show active product preview inside the card on hover or click
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activePreview, setActivePreview] = useState<string | null>(null);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-32 pb-8 px-6 md:px-12 bg-[#F4F5F8] overflow-hidden select-none"
    >
      {/* Absolute Ambient Background Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-200/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-200/20 blur-3xl pointer-events-none" />

      {/* Hero Outer Frame Grid */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto relative z-10">
        
        {/* LEFT COLUMN: HERO ESSENTIAL TYPOGRAPHY */}
        <div className="lg:col-span-7 flex flex-col space-y-8 text-left">
          
          {/* Micro green active indicator badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex self-start items-center space-x-2 bg-white/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-black/[0.04] shadow-xs"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
            <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-slate-500 uppercase">
              {currentLang === 'zh' ? '预约通道开合中 / 极奢装甲门定制' : 'AVAILABLE FOR ARCHITECTURAL ENGAGEMENT'}
            </span>
          </motion.div>

          {/* Majestic Hero Display Title */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-5xl sm:text-7xl md:text-[80px] lg:text-[88px] font-extrabold text-[#111318] leading-[0.95] tracking-tight font-sans uppercase"
            >
              Huzhiyi
              <br />
              <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-fuchsia-500 bg-clip-text text-transparent">
                Gateways
              </span>
            </motion.h1>
            
            {/* Descriptive subtex explicitly bolding key terms */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-slate-600 text-sm md:text-base max-w-xl font-normal leading-relaxed font-sans"
            >
              {currentLang === 'zh' ? (
                <>
                  探寻极致工艺。湖之翼致力于为全球地标庄园精研{' '}
                  <strong className="text-gray-900 font-semibold underline decoration-indigo-500 decoration-2 underline-offset-2">高端偏轴入口大门</strong>
                  ，完美重融{' '}
                  <strong className="text-gray-900 font-semibold">液态铸造金属艺术肌理</strong>
                  ，集成{' '}
                  <strong className="text-gray-900 font-semibold">欧盟RC4防撬物理防护</strong>
                  、极智静脉生物控制与{' '}
                  <strong className="text-gray-900 font-semibold">0.58 W/(m²•K) 阻冷物理断桥系统</strong>
                  。
                </>
              ) : (
                <>
                  Crafting architectural master portals. We specialize in designing{' '}
                  <strong className="text-gray-900 font-semibold underline decoration-indigo-500 decoration-2 underline-offset-2">bespoke entry gateways</strong>
                  {' '}that seamlessly merge{' '}
                  <strong className="text-gray-900 font-semibold">micro-sculpted liquid metal textures</strong>
                  {' '}with military-grade{' '}
                  <strong className="text-gray-900 font-semibold">EN 1627 RC4 physical security</strong>
                  {' '}and ultra-low thermal transmittance structures.
                </>
              )}
            </motion.p>
          </div>

          {/* Pill Action Button & Metadata */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-wrap items-center gap-6 pt-3"
          >
            <button
              onClick={() => onNavigate('products')}
              className="group relative flex items-center justify-center space-x-2.5 px-8 py-4 bg-[#111318] hover:bg-slate-800 text-white rounded-full text-xs font-bold font-mono tracking-widest uppercase transition-all duration-300 cursor-pointer shadow-lg shadow-gray-900/10 hover:scale-[1.03]"
            >
              <span>{currentLang === 'zh' ? '在线品鉴大门' : 'View Showreel'}</span>
              <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-indigo-400" />
            </button>

            <div className="text-[10px] sm:text-xs font-mono text-slate-400 leading-tight border-l border-slate-350 pl-4 py-1.5 space-y-0.5">
              <span className="block text-slate-800 font-bold">MANUFACTURING BASE</span>
              <span className="opacity-80">Zurich / Munich / Shanghai</span>
            </div>
          </motion.div>

        </div>

        {/* RIGHT COLUMN: DOUBLE FLOATING Minimal cards */}
        <div className="lg:col-span-5 flex flex-col md:flex-row lg:flex-col xl:flex-row gap-6 items-stretch justify-center relative w-full pt-8 lg:pt-0">
          
          {/* CARD 1: Aero-Pivot Model */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.85 }}
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => {
              if (onOpenPivotExplorer) {
                onOpenPivotExplorer();
              } else {
                setActivePreview(activePreview === 'pivot' ? null : 'pivot');
              }
            }}
            className={`flex-1 relative bg-white border border-slate-200/80 rounded-[32px] p-8 shadow-xs md:shadow-[0_20px_40px_rgba(0,0,0,0.02)] transition-all duration-500 cursor-pointer overflow-hidden ${
              hoveredCard === 1 ? 'shadow-xl shadow-indigo-500/5 -translate-y-2 border-indigo-200' : ''
            }`}
          >
            {/* Visual background gradient reflection */}
            <div className={`absolute inset-0 bg-linear-to-tr from-indigo-50/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 ${hoveredCard === 1 ? 'opacity-100' : ''}`} />

            <div className="relative space-y-12 z-10">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-widest text-[#5C6472] uppercase font-bold">
                  2026 / CHASSIS
                </span>
                <Sparkles className={`w-4 h-4 transition-colors ${hoveredCard === 1 ? 'text-indigo-500' : 'text-slate-300'}`} />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#111318] tracking-tight font-sans">
                  Etheros Pivot
                </h3>
                <p className="text-xs text-slate-400 leading-normal font-sans">
                  {currentLang === 'zh' ? '航空承垂承重系统，2吨重门只需3g指力。' : 'Next-gen offset load distribution structure.'}
                </p>
              </div>

              {/* Interaction Call for Door Rendering */}
              <div className="pt-2 flex items-center space-x-1.5 text-[10px] font-mono font-bold text-indigo-600">
                <Eye className="w-3.5 h-3.5" />
                <span>{currentLang === 'zh' ? '点击/悬停 动态门型预览' : 'CLICK TO VIEW GATEWAY Blueprint'}</span>
              </div>
            </div>

            {/* Micro Blueprint Overlay when hovered/active */}
            <AnimatePresence>
              {(hoveredCard === 1 || activePreview === 'pivot') && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="absolute inset-0 bg-gray-950/95 flex flex-col justify-between p-6 text-white z-20"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[8px] font-mono text-indigo-400 tracking-wider">AERO-PIOT SPECIFICATION</span>
                      <h4 className="text-md font-bold">Model 4.5m Signature</h4>
                    </div>
                    <span className="px-2 py-0.5 bg-indigo-500 text-[8px] font-mono rounded">RC4 CERTIFIED</span>
                  </div>
                  
                  <div className="w-full flex justify-center py-4">
                    <img 
                      src="/src/assets/images/pivot_door_1781078659366.png" 
                      alt="Pivot Door Blueprint" 
                      className="h-44 object-contain rounded-lg border border-white/10"
                    />
                  </div>

                  <div className="flex justify-between text-[9px] font-mono text-slate-400 border-t border-white/10 pt-2">
                    <span>U-VALUE: 0.58</span>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onOpenPivotExplorer) {
                          onOpenPivotExplorer();
                        } else {
                          onNavigate('products');
                        }
                      }}
                      className="text-indigo-400 hover:underline flex items-center space-x-1 cursor-pointer"
                    >
                      <span>{currentLang === 'zh' ? '交互详绘与纹理品鉴' : 'Full Specs & Explored Textures'}</span>
                      <MoveRight className="w-2.5 h-2.5" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* CARD 2: Biometric capillar module */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.45, duration: 0.85 }}
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => setActivePreview(activePreview === 'biometric' ? null : 'biometric')}
            className={`flex-1 relative bg-white border border-slate-200/80 rounded-[32px] p-8 shadow-xs md:shadow-[0_20px_40px_rgba(0,0,0,0.02)] transition-all duration-500 cursor-pointer overflow-hidden ${
              hoveredCard === 2 ? 'shadow-xl shadow-fuchsia-500/5 -translate-y-2 border-fuchsia-200' : ''
            }`}
          >
            {/* Visual background gradient reflection */}
            <div className={`absolute inset-0 bg-linear-to-tr from-fuchsia-50/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 ${hoveredCard === 2 ? 'opacity-100' : ''}`} />

            <div className="relative space-y-12 z-10">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-widest text-[#5C6472] uppercase font-bold">
                  2026 / BIO-TECH
                </span>
                <span className={`w-2 h-2 rounded-full transition-all duration-500 ${hoveredCard === 2 ? 'bg-fuchsia-500 animate-pulse' : 'bg-slate-300'}`} />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#111318] tracking-tight font-sans">
                  Lumina Vein
                </h3>
                <p className="text-xs text-slate-400 leading-normal font-sans">
                  {currentLang === 'zh' ? '三维皮下静脉识别，不受指纹磨损、汗水干扰限制。' : 'Subcutaneous biological infrared map encoding.'}
                </p>
              </div>

              <div className="pt-2 flex items-center space-x-1.5 text-[10px] font-mono font-bold text-fuchsia-600">
                <Eye className="w-3.5 h-3.5" />
                <span>{currentLang === 'zh' ? '查看芯片控制中枢' : 'VIEW CHIP METRICS'}</span>
              </div>
            </div>

            {/* Micro Bio-Intercom Blueprint Overlay when hovered/active */}
            <AnimatePresence>
              {(hoveredCard === 2 || activePreview === 'biometric') && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="absolute inset-0 bg-gray-950/95 flex flex-col justify-between p-6 text-white z-20"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[8px] font-mono text-fuchsia-400 tracking-wider font-bold">LUMINA SYSTEM SECURE</span>
                      <h4 className="text-md font-bold">{currentLang === 'zh' ? '微波人脸雷达' : 'Cognitive Wave Detector'}</h4>
                    </div>
                    <span className="px-2 py-0.5 bg-fuchsia-500 text-[8px] font-mono rounded">AES-256 ENCRYPTED</span>
                  </div>

                  <div className="py-4 space-y-2.5 text-xs text-slate-300">
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>{currentLang === 'zh' ? '防克隆假脸射流传感检测' : '3D Capillary live scan'}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>{currentLang === 'zh' ? '抗50G高频射频多波段干涉' : 'RFID vehicle auto sync'}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>{currentLang === 'zh' ? '光流雷达感应自启动锁舌' : 'Matter / KNX Smart grid'}</span>
                    </div>
                  </div>

                  <div className="flex justify-between text-[9px] font-mono text-slate-400 border-t border-white/10 pt-2">
                    <span>BATTERY ALIGN: 180 DAYS</span>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        onNavigate('advantages');
                      }}
                      className="text-fuchsia-400 hover:underline flex items-center space-x-1"
                    >
                      <span>{currentLang === 'zh' ? '详细芯片参数' : 'Learn Tech'}</span>
                      <MoveRight className="w-2.5 h-2.5" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>

      </div>

      {/* METADATA LOWER MARGIN ROW - EVOKING THE SPACED MONO METRIC FEELS */}
      <div className="max-w-7xl mx-auto w-full border-t border-black/[0.08] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#5C6472] text-[10px] sm:text-[11px] font-mono tracking-widest relative z-10 uppercase font-bold">
        
        {/* Left segment */}
        <div className="flex items-center space-x-2 text-slate-500">
          <button 
            onClick={() => onNavigate('products')}
            className="hover:text-[#111318] flex items-center space-x-1 cursor-pointer transition-all"
          >
            <span>SCROLL</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce text-indigo-500" />
            <span>DOWN TO EXPLORE</span>
          </button>
        </div>

        {/* Center segment (Main technical chassis metrics) */}
        <div className="hidden md:flex items-center space-x-6 text-[#7B8390] font-sans font-semibold normal-case">
          <div className="flex items-center space-x-1.5">
            <span className="w-1.5 h-1.5 bg-black rounded-full" />
            <span>EN 1627 RC4 Protective Class</span>
          </div>
          <span>•</span>
          <div className="flex items-center space-x-1.5">
            <span className="w-1.5 h-1.5 bg-black rounded-full" />
            <span>0.58 W/(m²•K) Passive Insulation</span>
          </div>
        </div>

        {/* Right segment */}
        <div className="text-slate-450 font-bold tracking-widest">
          {currentLang === 'zh' ? '© 2026 HUZHIYI • 殿堂入口美学系统' : '© 2026 HUZHIYI • MASTER ENTRANCES'}
        </div>

      </div>
    </section>
  );
}
