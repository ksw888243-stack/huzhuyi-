import { useState, useRef, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MessageSquare, Send, Check, Copy, HelpCircle } from 'lucide-react';
import { Language } from '../types';
import { translations, contactInfo } from '../data';

interface ContactFormProps {
  currentLang: Language;
  preSelectedProductType?: string;
}

export default function ContactForm({ currentLang, preSelectedProductType }: ContactFormProps) {
  const t = translations[currentLang];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    doorType: preSelectedProductType || 'pivot',
    message: ''
  });
  
  const [isCopied, setIsCopied] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setIsCopied(id);
    setTimeout(() => setIsCopied(null), 2000);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert(currentLang === 'zh' ? '请完整填写所有必填字段。' : 'Please fill out all required fields.');
      return;
    }
    setIsSubmitted(true);
  };

  const contactOptions = [
    { id: 'email', label: 'Email Address', val: contactInfo.email, icon: Mail, copyVal: contactInfo.email },
    { id: 'phone', label: 'Direct Hotline (Tel)', val: contactInfo.phone, icon: Phone, copyVal: contactInfo.phone },
    { id: 'whatsapp', label: 'WhatsApp Messenger', val: contactInfo.whatsapp, icon: MessageSquare, copyVal: '+8613888882433' },
    { id: 'skype', label: 'Skype Link', val: contactInfo.skype, icon: MessageSquare, copyVal: contactInfo.skype },
  ];

  return (
    <section id="contact" className="py-24 bg-slate-50 relative">
      <div className="absolute top-[30%] right-[-10%] w-[50%] h-[50%] rounded-full bg-slate-200/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* ROW 1: HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-gray-400">
            {currentLang === 'zh' ? '国际咨询，专属配置' : 'VIP Bespoke Portal'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight font-sans">
            {t.contactTitle}
          </h2>
          <p className="text-gray-500 font-normal leading-relaxed text-sm md:text-base">
            {t.contactSubtitle}
          </p>
        </div>

        {/* ROW 2: SPLIT SCREEN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: CONTACT CARDS & DETAILS */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl space-y-6">
              <h3 className="text-lg font-bold text-gray-900 tracking-tight font-sans">
                {currentLang === 'zh' ? '大宗工程合作与尊聘专线' : 'Enterprise Inquiry Desks'}
              </h3>
              
              <div className="space-y-4">
                {contactOptions.map((opt) => {
                  const IconComp = opt.icon;
                  return (
                    <div
                      key={opt.id}
                      className="group flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-50/50 rounded-2xl border border-transparent hover:border-gray-100 transition-all duration-300"
                    >
                      <div className="flex items-center space-x-3.5">
                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-gray-800 shadow-xs border border-gray-100 shrink-0">
                          <IconComp className="w-4.5 h-4.5" />
                        </div>
                        <div>
                          <p className="text-[10px] font-mono text-gray-400 tracking-wider">
                            {opt.label}
                          </p>
                          <p className="text-xs md:text-sm font-semibold text-gray-800 select-all">
                            {opt.val}
                          </p>
                        </div>
                      </div>
                      
                      <button
                        onClick={() => copyToClipboard(opt.copyVal, opt.id)}
                        className="p-2 bg-white rounded-full text-gray-400 hover:text-gray-900 shadow-xs cursor-pointer border border-gray-100 shrink-0"
                      >
                        {isCopied === opt.id ? (
                          <Check className="w-4.5 h-4.5 text-emerald-500" />
                        ) : (
                          <Copy className="w-4.5 h-4.5 text-gray-400" />
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Verified Physical Location Info */}
              <div className="pt-6 border-t border-gray-200/50 space-y-1.5 text-xs text-gray-500">
                <span className="font-mono uppercase tracking-widest text-[9px] font-bold block text-gray-400">
                  {currentLang === 'zh' ? '品牌研发制造总部' : 'GLOBAL R&D BASE'}
                </span>
                <p className="font-medium text-gray-700 leading-relaxed">
                  {contactInfo.address[currentLang]}
                </p>
              </div>
            </div>
            
            {/* Simple Help Note badge */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-md flex items-start space-x-4">
              <HelpCircle className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="text-xs font-bold font-sans tracking-wide">
                  {currentLang === 'zh' ? '材质样品免费配发' : 'Samples Air-Freight'}
                </h4>
                <p className="text-[10px] text-gray-400 leading-relaxed">
                  {currentLang === 'zh' 
                    ? '我们的销售部会在24小时内联系您，免费向您配发20cm×20cm的实木和手雕金属门芯实体触控样块（含PVD色板）。'
                    : 'A 20x20cm authentic physical core texture sample kit will be dispatched via express air courier directly on verification.'}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: INTERACTIVE LEAD FORM */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="lead-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl space-y-6"
                >
                  <div className="border-b border-gray-100 pb-4">
                    <h3 className="text-xl font-bold tracking-tight text-gray-900 font-sans">
                      {t.customDesignHeading}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      {t.customDesignSubheading}
                    </p>
                  </div>

                  {/* Form fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400 block">
                        {t.contactFormName} *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe / 张三"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-100 focus:border-gray-900 focus:bg-white text-xs sm:text-sm rounded-xl outline-none transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400 block">
                        {t.contactFormEmail} *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="example@yourdomain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-100 focus:border-gray-900 focus:bg-white text-xs sm:text-sm rounded-xl outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Phone / WA / Skype */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400 block">
                        {t.contactFormPhone} *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Phone / WhatsApp ID"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-100 focus:border-gray-900 focus:bg-white text-xs sm:text-sm rounded-xl outline-none transition-all"
                      />
                    </div>

                    {/* Door type */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400 block">
                        {t.contactFormDoorType}
                      </label>
                      <select
                        value={formData.doorType}
                        onChange={(e) => setFormData({ ...formData, doorType: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-100 focus:border-gray-900 focus:bg-white text-xs sm:text-sm rounded-xl outline-none transition-all cursor-pointer"
                      >
                        <option value="pivot">{t.categoryPivot}</option>
                        <option value="single">{t.categorySingle}</option>
                        <option value="double">{t.categoryDouble}</option>
                        <option value="iron">{t.categoryIron}</option>
                        <option value="garage">{t.categoryGarage}</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400 block">
                      {t.contactFormMessage}
                    </label>
                    <textarea
                      rows={4}
                      placeholder={currentLang === 'zh' ? '如：门扇预估宽 2100mm × 高 3400mm，喜欢雕铜拉丝饰面等。' : 'Explain sizing details or texture preferences here.'}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-100 focus:border-gray-900 focus:bg-white text-xs sm:text-sm rounded-xl outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center space-x-2 py-4 bg-gray-900 hover:bg-slate-800 text-white rounded-xl text-sm font-semibold tracking-wide cursor-pointer transition-all shadow-md shadow-gray-900/5"
                  >
                    <span>{t.contactFormSubmit}</span>
                    <Send className="w-4 h-4 ml-1" />
                  </button>
                </motion.form>
              ) : (
                /* Dynamic Success response panel */
                <motion.div
                  key="submit-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-white rounded-3xl p-10 border border-emerald-100 shadow-xl text-center space-y-6 flex flex-col items-center py-16"
                >
                  <div className="w-16 h-16 bg-emerald-50 border border-emerald-200 text-emerald-600 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/10">
                    <Check className="w-8 h-8 font-extrabold" />
                  </div>
                  
                  <div className="space-y-2 max-w-md">
                    <h3 className="text-xl font-bold tracking-tight text-gray-900 font-sans">
                      {currentLang === 'zh' ? '高科技方案预审激活' : 'Custom Config Registered'}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed font-normal">
                      {t.contactFormSuccess}
                    </p>
                  </div>

                  {/* Summary receipt box */}
                  <div className="bg-slate-50 border border-gray-100 p-5 rounded-2xl w-full max-w-sm text-left text-xs font-mono text-gray-500 space-y-2">
                    <div className="flex justify-between">
                      <span>CLIENT:</span>
                      <span className="text-gray-900 font-bold">{formData.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>CONTACT:</span>
                      <span className="text-gray-900 font-bold">{formData.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>MODEL INTERFACE:</span>
                      <span className="text-gray-900 font-bold capitalize">{formData.doorType} Selection</span>
                    </div>
                    <div className="flex justify-between pt-1 border-t border-gray-200/50">
                      <span>EST. PRE-REPLY:</span>
                      <span className="text-emerald-600 font-bold font-sans">Within 24 Hours</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', doorType: 'pivot', message: '' });
                    }}
                    className="px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-xl text-xs font-bold tracking-wide transition-all cursor-pointer"
                  >
                    {currentLang === 'zh' ? '重新配置新门' : 'Configure Another Gateway'}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
