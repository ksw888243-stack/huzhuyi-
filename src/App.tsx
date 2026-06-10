import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Globe, ArrowUpRight, CheckCircle } from 'lucide-react';
import { Language } from './types';

// Importing Custom Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCatalog from './components/ProductCatalog';
import AboutUs from './components/AboutUs';
import AdvantageSection from './components/AdvantageSection';
import TechServices from './components/TechServices';
import NewsSection from './components/NewsSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import PivotExplorer from './components/PivotExplorer';

export default function App() {
  // Brand Default Language set to Simplified Chinese (ZH), switchable to global EN/DE
  const [currentLang, setCurrentLang] = useState<Language>('zh');
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [inquiryProduct, setInquiryProduct] = useState<string>('pivot');
  const [isPivotExplorerOpen, setIsPivotExplorerOpen] = useState<boolean>(false);

  // Multi-Language notification flags
  const [showWelcome, setShowWelcome] = useState(true);

  // Auto detect active section based on scroll heights
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'products', 'about', 'advantages', 'solutions', 'news', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigationChange = (sectionId: string) => {
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Pre-select product from catalog and scroll to inquiry form
  const handleInquiryRedirect = (productName: string) => {
    setInquiryProduct(productName);
    handleNavigationChange('contact');
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-amber-100 selection:text-amber-900 scroll-smooth antialiased">
      
      {/* Floating Interactive Toast (Welcome / Brand Banner) */}
      <AnimatePresence>
        {showWelcome && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="fixed bottom-6 left-6 z-50 max-w-sm bg-gray-950 text-white rounded-2xl p-4 shadow-2xl border border-gray-800 flex items-start space-x-3.5"
          >
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
              <Globe className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <p className="text-xs font-bold font-sans">
                {currentLang === 'zh' ? '欢迎光临 HUZHIYI 湖之翼' : 'Welcome to HUZHIYI'}
              </p>
              <p className="text-[10px] text-gray-400 leading-normal">
                {currentLang === 'zh' 
                  ? '极致扁平科技美学。右上角或底部多语言一键切换，尽显国际格调。'
                  : 'Bespoke entry architecture. Change languages at the top selector for complete translation.'}
              </p>
              <button
                onClick={() => setShowWelcome(false)}
                className="text-[10px] font-bold text-amber-400 hover:text-amber-300 mt-1 cursor-pointer block"
              >
                {currentLang === 'zh' ? '知道了' : 'Dismiss'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* STICKY HEADER / NAVBAR */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={(lang) => setCurrentLang(lang)}
        activeSection={activeSection}
        onNavigate={handleNavigationChange}
      />

      {/* CORE LAYOUT */}
      <main className="relative">
        {/* HERO INTRO */}
        <Hero 
          currentLang={currentLang} 
          onNavigate={handleNavigationChange} 
          onOpenPivotExplorer={() => setIsPivotExplorerOpen(true)} 
        />

        {/* 1. PRODUCT CATEGORIES & SPECS CATALOG */}
        <ProductCatalog 
          currentLang={currentLang} 
          onInquire={handleInquiryRedirect} 
          onOpenPivotExplorer={() => setIsPivotExplorerOpen(true)}
        />

        {/* 2. CORE ADVANTAGES (CRAFTS & MATERIAL GRACE) */}
        <AdvantageSection currentLang={currentLang} />

        {/* 3. ABOUT US (FACTORY, HQ, SHOWROOM & CERTIFICATES) */}
        <AboutUs currentLang={currentLang} />

        {/* 4. TECHNICAL SERVICES & MULTI-USE APPLICATIONS */}
        <TechServices currentLang={currentLang} />

        {/* 5. NEWS ARTICLES & FEEDS */}
        <NewsSection currentLang={currentLang} />

        {/* 6. GLOBAL BESPOKE CONTACT INQUIRY FORMS */}
        <ContactForm currentLang={currentLang} preSelectedProductType={inquiryProduct} />
      </main>

      {/* FOOTER METADATA */}
      <Footer currentLang={currentLang} onNavigate={handleNavigationChange} />

      {/* Immersive Pivot Spec & Craftsmanship Explorer Page */}
      <PivotExplorer 
        currentLang={currentLang}
        isOpen={isPivotExplorerOpen}
        onClose={() => setIsPivotExplorerOpen(false)}
        onSelectProduct={(name) => handleInquiryRedirect(name)}
      />

    </div>
  );
}
