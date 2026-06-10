import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Cpu, ShieldCheck, ChevronRight, HelpCircle } from 'lucide-react';
import { Language } from '../types';
import { translations, advantages } from '../data';

interface AdvantageSectionProps {
  currentLang: Language;
}

export default function AdvantageSection({ currentLang }: AdvantageSectionProps) {
  const t = translations[currentLang];
  const [selectedAdvantage, setSelectedAdvantage] = useState<string>(advantages[0].id);

  const activeAdv = advantages.find((a) => a.id === selectedAdvantage) || advantages[0];

  // Map icon strings to Lucide components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-amber-500" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-indigo-500" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-emerald-500" />;
      default:
        return <HelpCircle className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <section id="advantages" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-gray-400">
            {currentLang === 'zh' ? '尊贵大作，匠心立业' : 'Craft & Engineering Standards'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight font-sans">
            {t.advantagesTitle}
          </h2>
          <p className="text-gray-500 font-normal leading-relaxed text-sm md:text-base">
            {t.advantagesSubtitle}
          </p>
        </div>

        {/* INTERACTIVE BENTO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* COLUMN 1: INTERACTIVE BUTTON SWITCHER list (Bento items) */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            {advantages.map((adv) => (
              <button
                key={adv.id}
                onClick={() => setSelectedAdvantage(adv.id)}
                className={`p-6 rounded-2xl border text-left cursor-pointer transition-all duration-300 relative group flex items-start space-x-4 ${
                  selectedAdvantage === adv.id
                    ? 'bg-gray-950 text-white border-gray-900 shadow-xl'
                    : 'bg-slate-50 text-gray-800 border-gray-100 hover:bg-slate-100'
                }`}
              >
                <div className={`p-3 rounded-xl shrink-0 ${
                  selectedAdvantage === adv.id ? 'bg-white/10 text-white' : 'bg-white text-gray-900 shadow-xs'
                }`}>
                  {getIcon(adv.icon)}
                </div>
                <div className="space-y-1.5 flex-1">
                  <h3 className={`text-sm font-bold tracking-tight ${selectedAdvantage === adv.id ? 'text-white' : 'text-gray-900'}`}>
                    {adv.title[currentLang]}
                  </h3>
                  <p className={`text-xs line-clamp-2 ${selectedAdvantage === adv.id ? 'text-gray-400' : 'text-gray-500'}`}>
                    {adv.description[currentLang]}
                  </p>
                </div>
                <div className="self-center">
                  <ChevronRight className={`w-4 h-4 transition-transform ${
                    selectedAdvantage === adv.id ? 'text-amber-400 translate-x-1' : 'text-gray-400 group-hover:translate-x-1'
                  }`} />
                </div>
              </button>
            ))}
          </div>

          {/* COLUMN 2: ANIMATED DETAIL DEMO PANEL */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedAdvantage}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="bg-slate-50 border border-gray-100 rounded-3xl p-8 relative overflow-hidden grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
              >
                
                {/* Visual Image Bubble */}
                <div className="md:col-span-5">
                  <div className="aspect-square rounded-2xl overflow-hidden bg-slate-200 border border-gray-200/50 relative shadow-md">
                    <img
                      src={activeAdv.image}
                      alt={activeAdv.title[currentLang]}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Bullet parameters explanations */}
                <div className="md:col-span-7 space-y-4">
                  <div>
                    <span className="text-[9px] font-mono font-bold tracking-widest text-amber-600 bg-amber-50 uppercase px-2 py-0.5 rounded-md">
                      HUZHIYI Technology Core
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 tracking-tight mt-1.5">
                      {activeAdv.title[currentLang]}
                    </h3>
                  </div>
                  
                  <div className="space-y-3">
                    {activeAdv.details[currentLang].map((detail, idx) => (
                      <div key={idx} className="flex items-start space-x-2.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-900 mt-2 shrink-0" />
                        <span className="text-xs text-gray-600 font-medium leading-relaxed">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
