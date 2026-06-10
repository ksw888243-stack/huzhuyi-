import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Shield, Layers, HelpCircle, Thermometer, Volume2, ArrowRight } from 'lucide-react';
import { Language, CategoryType, Product } from '../types';
import { translations, products } from '../data';

interface ProductCatalogProps {
  currentLang: Language;
  onInquire: (doorType: string) => void;
  onOpenPivotExplorer?: () => void;
}

export default function ProductCatalog({ currentLang, onInquire, onOpenPivotExplorer }: ProductCatalogProps) {
  const t = translations[currentLang];
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('pivot');
  
  // High-Tech Simulator State
  const [customWidth, setCustomWidth] = useState<number>(2000);
  const [customHeight, setCustomHeight] = useState<number>(3200);

  const categories: { type: CategoryType; label: string }[] = [
    { type: 'pivot', label: t.categoryPivot },
    { type: 'single', label: t.categorySingle },
    { type: 'double', label: t.categoryDouble },
    { type: 'iron', label: t.categoryIron },
    { type: 'garage', label: t.categoryGarage },
  ];

  const activeProduct = products.find((p) => p.category === selectedCategory) || products[0];

  // Simulator calculations (weight estimate depending on surface area)
  const densityMultiplier = selectedCategory === 'pivot' ? 120 
                        : selectedCategory === 'single' ? 75 
                        : selectedCategory === 'double' ? 95 
                        : selectedCategory === 'iron' ? 140 
                        : 80; // kg per m^2
  const areaSqM = (customWidth * customHeight) / 1000000;
  const estimatedWeight = Math.round(areaSqM * densityMultiplier);
  const estimatedUVal = (parseFloat(activeProduct.specifications.thermalU) * (1 - (areaSqM * 0.015))).toFixed(2);

  return (
    <section id="products" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-gray-400">
            {currentLang === 'zh' ? '建筑立面智臻系列' : 'Curated Portfolio'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight font-sans">
            {currentLang === 'zh' ? '大师量身定制入户门户系统' : 'Architectural Gateway Collections'}
          </h2>
          <p className="text-gray-500 font-normal leading-relaxed text-sm md:text-base">
            {currentLang === 'zh' 
              ? '湖之翼产品涵盖偏轴门、单开防暴门、庄重双开门、手作精工断桥铁艺门与极简岩板车库门。所有门扇支持定制化尺寸、表面机理以及全套五级微波智能锁定芯片。'
              : 'Discover HUZHIYI high-security entrance models, engineering to adapt and protect grand villas. Select products below to evaluate mechanical performance parameters.'}
          </p>
        </div>

        {/* CATEGORY SWIPER CAPLE */}
        <div className="flex justify-start md:justify-center overflow-x-auto pb-6 scrollbar-none mb-12 -mx-6 px-6">
          <div className="flex bg-gray-100 p-1.5 rounded-2xl border border-gray-200/50 space-x-1 shrink-0">
            {categories.map((cat) => (
              <button
                key={cat.type}
                onClick={() => setSelectedCategory(cat.type)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat.type
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* MAIN SELECTED PRODUCT WRAPPER */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
          >
            {/* Visual Section */}
            <div className="lg:col-span-6 space-y-6">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-slate-100 border border-gray-200/40 relative shadow-lg group">
                <img
                  src={activeProduct.image}
                  alt={activeProduct.name[currentLang]}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-gray-950/90 backdrop-blur-md text-white font-mono text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-md border border-gray-800">
                  {categories.find((c) => c.type === activeProduct.category)?.label}
                </div>
              </div>

              {/* Unique Features Card List */}
              <div className="bg-slate-50 border border-gray-100 rounded-3xl p-6 space-y-4">
                <h4 className="text-sm font-bold text-gray-800 tracking-wide uppercase font-mono">
                  {currentLang === 'zh' ? '该品类工艺技术亮点' : 'Technological Highlights'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {activeProduct.features[currentLang].map((feat, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5">
                      <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      </div>
                      <span className="text-xs text-gray-600 font-medium leading-relaxed">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Technical Parameters Section */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 leading-tight">
                  {activeProduct.name[currentLang]}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {activeProduct.description[currentLang]}
                </p>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Core materials */}
                <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-xs hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-2.5 mb-2 text-gray-400">
                    <Layers className="w-4 h-4 text-violet-500" />
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider">
                      {t.specsMaterial}
                    </span>
                  </div>
                  <p className="text-gray-800 text-xs font-semibold leading-relaxed">
                    {activeProduct.specifications.material[currentLang]}
                  </p>
                </div>

                {/* Dimension limits */}
                <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-xs">
                  <div className="flex items-center space-x-2.5 mb-2 text-gray-400">
                    <HelpCircle className="w-4 h-4 text-indigo-500" />
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider">
                      {t.specsDimensions}
                    </span>
                  </div>
                  <p className="text-gray-800 text-xs font-semibold leading-relaxed">
                    {activeProduct.specifications.dimensions[currentLang]}
                  </p>
                </div>

                {/* Safe Locking mechanism */}
                <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-xs">
                  <div className="flex items-center space-x-2.5 mb-2 text-gray-400">
                    <Shield className="w-4 h-4 text-amber-500" />
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider">
                      {t.specsLock}
                    </span>
                  </div>
                  <p className="text-gray-800 text-xs font-semibold leading-relaxed">
                    {activeProduct.specifications.lockType[currentLang]}
                  </p>
                </div>

                {/* Thermal and Acoustics insulation */}
                <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-xs">
                  <div className="flex items-center space-x-2.5 mb-2 text-gray-400">
                    <Thermometer className="w-4 h-4 text-emerald-500" />
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider">
                      {currentLang === 'zh' ? '高科技阻断能效指标' : 'Thermal & Acoustics'}
                    </span>
                  </div>
                  <div className="flex space-x-4 text-xs font-semibold text-gray-800 mt-1">
                    <div className="flex items-center space-x-1">
                      <Thermometer className="w-3.5 h-3.5 text-orange-500" />
                      <span>U={activeProduct.specifications.thermalU}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Volume2 className="w-3.5 h-3.5 text-blue-500" />
                      <span>{activeProduct.specifications.acousticDb}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3D TECHNOLOGY DIMENSIONAL SIMULATOR */}
              <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-800 rounded-full blur-2xl opacity-50" />
                
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold tracking-wider font-mono uppercase text-amber-300">
                        {currentLang === 'zh' ? 'HUZHIYI 高精度量体复算模拟器' : 'Dimensional Weight Real-time Estimator'}
                      </h4>
                      <p className="text-[10px] text-gray-400 mt-0.5">
                        {currentLang === 'zh' ? '滑动可调整定制长宽，自动预算门板受力重量' : 'Drag sliders to calculate architectural loads & estimated U-Value.'}
                      </p>
                    </div>
                  </div>

                  {/* Sliders */}
                  <div className="space-y-3.5">
                    {/* Width slider */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs font-mono text-gray-300">
                        <span>{currentLang === 'zh' ? '模块宽度 (Width)' : 'Custom Width'}</span>
                        <span className="text-white font-bold">{customWidth} mm</span>
                      </div>
                      <input
                        type="range"
                        min={selectedCategory === 'garage' ? 2400 : 900}
                        max={selectedCategory === 'garage' ? 6000 : 3000}
                        value={customWidth}
                        onChange={(e) => setCustomWidth(Number(e.target.value))}
                        className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                      />
                    </div>

                    {/* Height slider */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs font-mono text-gray-300">
                        <span>{currentLang === 'zh' ? '模块高度 (Height)' : 'Custom Height'}</span>
                        <span className="text-white font-bold">{customHeight} mm</span>
                      </div>
                      <input
                        type="range"
                        min={2000}
                        max={selectedCategory === 'pivot' || selectedCategory === 'double' ? 4500 : 3200}
                        value={customHeight}
                        onChange={(e) => setCustomHeight(Number(e.target.value))}
                        className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                      />
                    </div>
                  </div>

                  {/* Output calculation layout */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800 mt-2">
                    <div className="text-center bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                      <p className="text-[9px] font-mono tracking-widest text-gray-400 uppercase">
                        {currentLang === 'zh' ? '面积计算' : 'SURFACE AREA'}
                      </p>
                      <p className="text-sm font-semibold font-mono text-white mt-1">
                        {areaSqM.toFixed(2)} m²
                      </p>
                    </div>
                    <div className="text-center bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                      <p className="text-[9px] font-mono tracking-widest text-gray-400 uppercase">
                        {currentLang === 'zh' ? '承载估重' : 'EST. WEIGHT'}
                      </p>
                      <p className="text-sm font-semibold font-mono text-amber-300 mt-1">
                        ~{estimatedWeight} kg
                      </p>
                    </div>
                    <div className="text-center bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                      <p className="text-[9px] font-mono tracking-widest text-gray-400 uppercase">
                        {currentLang === 'zh' ? '变动抗温系' : 'DYNAMIC U-VAL'}
                      </p>
                      <p className="text-sm font-semibold font-mono text-cyan-300 mt-1">
                        {estimatedUVal} W/m²K
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Specialized Explored Pivot Style Integration */}
              {selectedCategory === 'pivot' && onOpenPivotExplorer && (
                <button
                  onClick={onOpenPivotExplorer}
                  type="button"
                  className="w-full flex items-center justify-center space-x-2.5 py-4 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 text-indigo-700 rounded-xl text-sm font-semibold tracking-wide cursor-pointer transition-all uppercase font-sans mb-3 group"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                  </span>
                  <span>
                    {currentLang === 'zh' ? '进入3D偏轴门艺术工艺与高精纹理品鉴厅' : 'Immersive 3D Pivot Craft & Texture Explorer'}
                  </span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              )}

              {/* Inquiry Action */}
              <button
                onClick={() => onInquire(activeProduct.name[currentLang])}
                className="w-full flex items-center justify-center space-x-2.5 py-4 bg-gray-900 hover:bg-slate-800 text-white rounded-xl text-sm font-semibold tracking-wide cursor-pointer shadow-md shadow-gray-900/5 transition-all group"
              >
                <span>
                  {currentLang === 'zh' ? `开辟定制方案咨询：${categories.find(c => c.type === selectedCategory)?.label}` : 'Request Custom Configuration & Material Specs'}
                </span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
