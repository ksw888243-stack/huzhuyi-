import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Tag, ArrowRight, X, Clock } from 'lucide-react';
import { Language, NewsArticle } from '../types';
import { translations, newsArticles } from '../data';

interface NewsSectionProps {
  currentLang: Language;
}

export default function NewsSection({ currentLang }: NewsSectionProps) {
  const t = translations[currentLang];
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);

  return (
    <section id="news" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-gray-400">
            {currentLang === 'zh' ? '新闻内容与前沿动态' : 'HUZHIYI Dynamic Feed'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight font-sans">
            {t.newsTitle}
          </h2>
          <p className="text-gray-500 font-normal leading-relaxed text-sm md:text-base">
            {t.newsSubtitle}
          </p>
        </div>

        {/* ARTICLES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((art) => (
            <div
              key={art.id}
              className="bg-slate-50 rounded-3xl overflow-hidden border border-gray-100 flex flex-col h-full hover:bg-slate-50/50 hover:shadow-lg hover:border-gray-200/50 transition-all duration-300 group"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={art.image}
                  alt={art.title[currentLang]}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-gray-900 font-mono text-[9px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-md border border-gray-200">
                  {art.category[currentLang]}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-[10px] text-gray-400 font-mono font-semibold">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{art.date}</span>
                    </div>
                    <span className="text-gray-300">•</span>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>5 min read</span>
                    </div>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-gray-900 line-clamp-2 leading-snug tracking-tight group-hover:text-amber-600 transition-colors">
                    {art.title[currentLang]}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-3 leading-relaxed font-normal">
                    {art.excerpt[currentLang]}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedArticle(art)}
                  className="inline-flex items-center space-x-1.5 text-xs font-bold tracking-wide text-gray-900 group-hover:text-amber-600 cursor-pointer text-left self-start"
                >
                  <span>{currentLang === 'zh' ? '阅读完整文章' : 'Read Article'}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* DETAILED ARTICLE MODAL DRAWER */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
              className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full max-h-[85vh] flex flex-col relative z-10 shadow-2xl border border-gray-100"
            >
              {/* Image banner */}
              <div className="aspect-[16/7] relative overflow-hidden shrink-0">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title[currentLang]}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/50 via-transparent to-transparent pointer-events-none" />
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm p-2 rounded-full text-gray-800 hover:text-gray-950 shadow-md cursor-pointer border border-gray-100"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Scrollable text details */}
              <div className="p-6 md:p-8 overflow-y-auto space-y-4">
                <div className="flex items-center space-x-3 text-[10px] text-gray-400 font-mono font-semibold">
                  <span className="px-2 py-0.5 bg-gray-100 rounded text-gray-600">
                    {selectedArticle.category[currentLang]}
                  </span>
                  <span>{selectedArticle.date}</span>
                </div>

                <h3 className="text-lg md:text-xl font-bold tracking-tight text-gray-900 leading-tight">
                  {selectedArticle.title[currentLang]}
                </h3>

                <blockquote className="border-l-3 border-amber-400 pl-4 text-xs text-gray-500 italic leading-relaxed py-1">
                  {selectedArticle.excerpt[currentLang]}
                </blockquote>

                <p className="text-gray-600 text-xs md:text-sm leading-relaxed font-normal pt-2">
                  {selectedArticle.content[currentLang]}
                </p>
                
                {/* Simulated signature closure */}
                <div className="pt-6 border-t border-gray-100 flex items-center justify-between text-[11px] font-mono text-gray-400">
                  <span>HUZHIYI GLOBAL NEWSROOM</span>
                  <span>AUTHORIZED PUBLICATION</span>
                </div>
              </div>

            </motion.div>

          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
