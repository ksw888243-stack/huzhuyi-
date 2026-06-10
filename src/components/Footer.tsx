import { ArrowUp, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data';

interface FooterProps {
  currentLang: Language;
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ currentLang, onNavigate }: FooterProps) {
  const t = translations[currentLang];

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800 relative select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
        
        {/* COLUMN 1: BRAND METADATA */}
        <div className="md:col-span-4 space-y-6">
          <div className="flex items-center space-x-3.5">
            <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center border border-white/5">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-5 h-5 text-amber-400">
                <path d="M4 3h16a2 2 0 0 1 2 2v16H2V5a2 2 0 0 1 2-2z" />
                <path d="M12 3v18" />
              </svg>
            </div>
            <div>
              <span className="text-lg font-bold tracking-[0.25em] block font-sans">
                HUZHIYI
              </span>
              <span className="text-[8px] tracking-[0.4em] font-mono text-gray-400 block uppercase">
                Premium Gateways
              </span>
            </div>
          </div>
          
          <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
            {currentLang === 'zh' 
              ? '湖之翼（HUZHIYI）殿堂级入户门，将液态艺术微雕纹理与极智控制科技融于一身，专为尊显宅邸精研高端入口美学阻冷系统。' 
              : 'HUZHIYI premium door systems seamlessly fuse artistic hand-sculpted metal skin, thermal insulated profiles, and high-security biometric control nodes.'}
          </p>

          <div className="flex items-center space-x-2 text-[10px] text-slate-400 font-mono">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{currentLang === 'zh' ? '全球设计师推崇之选' : 'Architectural Choice Worldwide'}</span>
          </div>
        </div>

        {/* COLUMN 2: QUICK LINKS */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="text-xs font-bold font-mono tracking-widest text-slate-400 uppercase">
            {currentLang === 'zh' ? '快捷导航' : 'SITE NAV'}
          </h4>
          <div className="grid grid-cols-2 gap-3 text-xs text-slate-300">
            <button onClick={() => onNavigate('products')} className="text-left hover:text-white cursor-pointer transition-colors">
              {t.navProducts}
            </button>
            <button onClick={() => onNavigate('about')} className="text-left hover:text-white cursor-pointer transition-colors">
              {t.navAbout}
            </button>
            <button onClick={() => onNavigate('advantages')} className="text-left hover:text-white cursor-pointer transition-colors">
              {t.navAdvantages}
            </button>
            <button onClick={() => onNavigate('solutions')} className="text-left hover:text-white cursor-pointer transition-colors">
              {t.navSolutions}
            </button>
            <button onClick={() => onNavigate('news')} className="text-left hover:text-white cursor-pointer transition-colors">
              {t.navNews}
            </button>
            <button onClick={() => onNavigate('contact')} className="text-left hover:text-white cursor-pointer transition-colors">
              {t.navContact}
            </button>
          </div>
        </div>

        {/* COLUMN 3: CORPORATE ADVISOR FOOTNOTE */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="text-xs font-bold font-mono tracking-widest text-slate-400 uppercase">
            {currentLang === 'zh' ? '前沿智造基地' : 'TECHNICAL STANDARDS'}
          </h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            {currentLang === 'zh' 
              ? '全线通过欧盟 EN 1627 RC4 物理极限防护测试认证 & ISO9001 质量管理，提供符合德国/北欧标准的极低 0.58 W/(m²•K) 阻冷断桥传热系数。' 
              : 'Formally tested to comply with strict European standard EN 1627 RC4 burglar performance & ISO 9001. Leading passive-house thermal coefficient certified.'}
          </p>
          <div className="pt-2 text-[10px] font-mono text-slate-400">
            <span>© 2026 HUZHIYI Co., Ltd. All Rights Reserved.</span>
          </div>
        </div>

      </div>

      {/* FOOTER BOTTOM METRIC & FLOAT ACTIONS */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 text-slate-500 text-[10px] font-mono">
        <div>
          <span>SYSTEM CHASSIS RECOVERY: ACTIVE</span>
        </div>
        <div className="flex items-center space-x-6">
          <span>REALTIME UTC: 2026-06-10 08:03:34</span>
          
          <button
            onClick={handleBackToTop}
            className="p-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-full transition-all cursor-pointer shadow-md"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
