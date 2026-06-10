import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data';
import LanguageSelector from './LanguageSelector';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Navbar({ currentLang, onLanguageChange, activeSection, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[currentLang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'products', label: t.navProducts },
    { id: 'about', label: t.navAbout },
    { id: 'advantages', label: t.navAdvantages },
    { id: 'solutions', label: t.navSolutions },
    { id: 'news', label: t.navNews },
    { id: 'contact', label: t.navContact },
  ];

  const handleNavItemClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* LOGO */}
        <button
          onClick={() => handleNavItemClick('hero')}
          className="flex items-center space-x-3 cursor-pointer group text-left"
          id="nav-logo"
        >
          {/* High-Tech Wing & Door geometric logo */}
          <div className="relative w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:bg-slate-800">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 text-white transition-all duration-500 group-hover:rotate-6"
            >
              <path d="M4 3h16a2 2 0 0 1 2 2v16H2V5a2 2 0 0 1 2-2z" />
              <path d="M12 3v18" />
              {/* Wing lines */}
              <path d="M6 8h4" className="opacity-70" />
              <path d="M5 12h5" className="opacity-80" />
              <path d="M7 16h3" className="opacity-90" />
            </svg>
            {/* Ambient light streak */}
            <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          </div>
          <div>
            <span className="text-xl font-bold tracking-[0.25em] text-gray-900 block font-sans">
              HUZHIYI
            </span>
            <span className="text-[8px] tracking-[0.4em] font-mono text-gray-500 block uppercase">
              Premium Gateways
            </span>
          </div>
        </button>

        {/* DESKTOP NAV ITEMS */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavItemClick(item.id)}
              className={`text-sm font-medium tracking-wide transition-all duration-300 relative py-1 cursor-pointer ${
                activeSection === item.id
                  ? 'text-gray-900 font-semibold'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-gray-900 rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* LANGUAGE SELECTOR & CONTACT ACTION */}
        <div className="hidden lg:flex items-center space-x-6">
          <LanguageSelector currentLang={currentLang} onLanguageChange={onLanguageChange} />
          <button
            onClick={() => handleNavItemClick('contact')}
            className="flex items-center space-x-1.5 px-4 py-2 bg-gray-900 text-white rounded-full text-xs font-semibold tracking-wide hover:bg-slate-800 transition-all cursor-pointer shadow-sm shadow-gray-900/10"
          >
            <span>Inquire</span>
            <ArrowUpRight className="w-3 h-3" />
          </button>
        </div>

        {/* MOBILE TRIGGER */}
        <div className="flex items-center space-x-4 lg:hidden">
          <LanguageSelector currentLang={currentLang} onLanguageChange={onLanguageChange} />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-700 hover:text-gray-900 bg-gray-100 rounded-full cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl py-6 px-8 flex flex-col space-y-4 lg:hidden"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavItemClick(item.id)}
              className={`text-left text-base font-semibold py-2 transition-all cursor-pointer ${
                activeSection === item.id ? 'text-gray-900 pl-2 border-l-2 border-gray-900' : 'text-gray-500'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNavItemClick('contact')}
            className="w-full text-center py-3 bg-gray-900 text-white rounded-xl text-sm font-semibold tracking-wide hover:bg-slate-800 transition-all cursor-pointer"
          >
            {t.navContact}
          </button>
        </motion.div>
      )}
    </nav>
  );
}
