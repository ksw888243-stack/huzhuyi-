import { Language } from '../types';

interface LanguageSelectorProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export default function LanguageSelector({ currentLang, onLanguageChange }: LanguageSelectorProps) {
  const options: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'EN', flag: '🇺🇸' },
    { code: 'zh', label: '中文', flag: '🇨🇳' },
    { code: 'de', label: 'DE', flag: '🇩🇪' }
  ];

  return (
    <div className="flex items-center space-x-1 bg-gray-100/80 backdrop-blur-md p-1 rounded-full border border-gray-200/50">
      {options.map((opt) => (
        <button
          key={opt.code}
          onClick={() => onLanguageChange(opt.code)}
          className={`px-3 py-1 text-xs font-medium rounded-full cursor-pointer transition-all duration-300 ${
            currentLang === opt.code
              ? 'bg-white text-gray-900 shadow-sm font-semibold'
              : 'text-gray-500 hover:text-gray-900'
          }`}
          aria-label={`Switch language to ${opt.label}`}
        >
          <span className="mr-1 inline-block">{opt.flag}</span>
          <span>{opt.label}</span>
        </button>
      ))}
    </div>
  );
}
