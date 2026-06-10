import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Award, MapPin, Building, ToggleLeft, Users, FileCheck } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data';

interface AboutUsProps {
  currentLang: Language;
}

type TabType = 'office' | 'factory' | 'showroom' | 'certificates';

export default function AboutUs({ currentLang }: AboutUsProps) {
  const t = translations[currentLang];
  const [activeTab, setActiveTab] = useState<TabType>('showroom');

  const tabs: { id: TabType; label: string; icon: any }[] = [
    { id: 'showroom', label: t.aboutShowroom, icon: MapPin },
    { id: 'factory', label: t.aboutFactory, icon: ToggleLeft },
    { id: 'office', label: t.aboutOffice, icon: Building },
    { id: 'certificates', label: t.aboutCertificates, icon: Award },
  ];

  // Data content based on selected visual tab
  const getTabContent = () => {
    switch (activeTab) {
      case 'office':
        return {
          title: currentLang === 'zh' ? 'HUZHIYI 全球艺术与总部办公中心' : 'HUZHIYI Corporate HQ & Design Tower',
          desc: currentLang === 'zh'
            ? '坐落于高科技产业园区核心，由知名建筑师设计，集结了全球大宗材料工程研发队伍、高端定制物联软硬件极客专家以及极简工业图形美学大师。开放透明的办公区域融汇大面积环幕落地玻璃和绿意盎然的建筑小品。'
            : 'Situated at the vibrant core of the High-tech District, our state-of-the-art global design headquarters houses leading structural structural engineers, material science researchers, and micro-electronic security geeks. A fully localized workspace designed for grand-scale creative projects.',
          image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
          stats: [
            { label: currentLang === 'zh' ? '设计研发极客' : 'R&D Engineers', val: '45+' },
            { label: currentLang === 'zh' ? '全球分支合作机构' : 'Global Partners', val: '120+' },
            { label: currentLang === 'zh' ? '专利技术累积' : 'Tech Patents', val: '80+' },
          ]
        };
      case 'factory':
        return {
          title: currentLang === 'zh' ? '世界级恒温精细智造车间' : 'Automated Robotic Fabrication Hub',
          desc: currentLang === 'zh'
            ? '配置工业4.0重载柔性伺服加工中心、德国数控双头精切锯床和恒温恒湿气凝固化烤漆箱。通过高精度机械臂确保每扇门叶平直度公差不超过千分之一毫米，从根源规避温差变形。'
            : 'Fitted with advanced industrial 4.0 servo-controlled robotic cutters, German-engineered heavy-load welding lines, and automated dust-free painting ovens. Maintaining dimensional manufacturing tolerance strictly within 0.1 millimeters to guarantee zero thermo-deformation under continuous test environments.',
          image: '/src/assets/images/factory_showroom_1781078674562.png',
          stats: [
            { label: currentLang === 'zh' ? '自动化程度' : 'Automation degree', val: '92%' },
            { label: currentLang === 'zh' ? '常温零误差仓数' : 'Tolerance index', val: '≤0.1mm' },
            { label: currentLang === 'zh' ? '年产高端装甲数' : 'Annual capacity', val: '50k+' },
          ]
        };
      case 'showroom':
        return {
          title: currentLang === 'zh' ? '沉浸式实地产品艺术展厅' : 'Sublime Spatial Material Museum',
          desc: currentLang === 'zh'
            ? '位于总部枢纽，占地1500平米，是由天然水泥、古朴原木和极奢流体铜金属筑造的展示博物馆。在这，客户可亲身实地触碰二十一种高难度雕刻工艺肌理，并在全息声敏暗室检验48分贝顶级声学阻尼气动隔热效果。'
            : 'Spanning over 1,500 square meters, our structural showroom is a museum-grade playground showcasing physical door models, hand-melted finishes, and heavy-duty structural cross-sections. Experience true 48 dB acoustic absorption tests inside our hyperbaric lab spaces.',
          image: '/src/assets/images/showroom_office_1781078692330.png',
          stats: [
            { label: currentLang === 'zh' ? '展厅总坪数' : 'Exhibition area', val: '1,500m²' },
            { label: currentLang === 'zh' ? '日常艺术门品展示' : 'Active models', val: '40+' },
            { label: currentLang === 'zh' ? '年平均到访设计师' : 'Annual visitors', val: '2,500+' },
          ]
        };
      case 'certificates':
        return {
          title: currentLang === 'zh' ? '国际通用材料与防火防暴证书' : 'Authentic Global Standards & Certificates',
          desc: currentLang === 'zh'
            ? '湖之翼从源头精挑不含重金属的无害环保基体，全面经受欧洲最高防护标准EN 1627 RC4级别开防爆破坏测试、国际IS09001严密规范体系以及被动式绿色建筑节能阻热参数达标。'
            : 'We treat structural safety and environmental friendliness with zero compromise. All raw metals, polymers, and locking controllers hold formal test certifications validating compliance with EU security standards, structural non-toxicity certificates, and thermal transfer norms.',
          image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
          stats: [
            { label: currentLang === 'zh' ? '通过权威评级' : 'Global Certs', val: '14+' },
            { label: currentLang === 'zh' ? '防撬RC防护等级' : 'Intruder Class', val: 'RC4' },
            { label: currentLang === 'zh' ? '零有害气味检测' : 'Green Index', val: 'E0 / Clean' },
          ]
        };
    }
  };

  const activeContent = getTabContent();

  const mockCertificates = [
    { title: 'EU CE EN 1627 RC4', desc: currentLang === 'zh' ? '欧洲最高等级防爆物理防暴标志' : 'Highest Grade European Intrusion Security Seal' },
    { title: 'ISO 9001:2015 Quality System', desc: currentLang === 'zh' ? '全流程智能制造精密工厂合规标志' : 'International Standard Production Integrity Seal' },
    { title: 'PASSIVE HOUSE CERTIFIED', desc: currentLang === 'zh' ? '德国低能耗被动式长效保温冷阻标准' : 'German Low-Energy Passive-House Thermal Standard' },
    { title: 'SGS HEAVY METAL EMISSION LABS', desc: currentLang === 'zh' ? '超硬表面不含任何游离铅与异味认证' : 'SGS Tested Non-toxic Multi-layer Ceramic Seal' },
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* ROW 1: HEADER & CORE MISSION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-gray-400">
              {currentLang === 'zh' ? '关于 HUZHIYI 湖之翼' : 'CORPORATE HERITAGE'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight font-sans">
              {t.aboutTitle}
            </h2>
            <div className="w-16 h-[3px] bg-gray-900 rounded-full" />
          </div>
          <div className="lg:col-span-7">
            <p className="text-gray-600 leading-relaxed text-sm md:text-base font-normal">
              {t.aboutSubtitle}
              {currentLang === 'zh' 
                ? ' 经过团队二十载对建筑声学、精密热惰性阻冷桥及大件高压力承重结构孜孜不倦的考究，“HUZHIYI” 入户门现已成功跃居行业一流行列。我们打破传统的死板装甲设计，旨在为全球设计师创造能够完美呼应艺术美学的殿堂，彰显屋主超然品味。'
                : ' HUZHIYI dedicates itself to creating non-replicable architectural front gates. By treating entrance door as a master structural artwork rather than simple metal plate, we harmonize security, thermal efficiency and fluid aesthetics to safeguard prestigious families for generations.'}
            </p>
          </div>
        </div>

        {/* ROW 2: INTERACTIVE TAB SELECTOR BAR */}
        <div className="flex overflow-x-auto pb-4 scrollbar-none border-b border-gray-200/60 mb-12">
          <div className="flex space-x-6 shrink-0">
            {tabs.map((tab) => {
              const IconComp = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2.5 pb-4 font-semibold text-sm cursor-pointer transition-all duration-300 relative ${
                    activeTab === tab.id
                      ? 'text-gray-950 font-bold'
                      : 'text-gray-400 hover:text-gray-900'
                  }`}
                >
                  <IconComp className={`w-4 h-4 ${activeTab === tab.id ? 'text-gray-950' : 'text-gray-400'}`} />
                  <span>{tab.label}</span>
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="aboutTabIndicator"
                      className="absolute bottom-0 left-0 w-full h-[3px] bg-gray-900 rounded-full"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ROW 3: TABBED CONTENT VIEWER */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            {/* Visual Screen Display */}
            <div className="lg:col-span-6 relative">
              <div className="aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border border-gray-200/40 relative">
                {activeTab === 'certificates' ? (
                  /* Special Certified Card list rendering */
                  <div className="w-full h-full bg-slate-900 p-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-white overflow-y-auto">
                    {mockCertificates.map((cert, idx) => (
                      <div key={idx} className="bg-slate-800/80 border border-slate-700/60 p-4 rounded-xl flex flex-col justify-between">
                        <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400">
                          <Award className="w-5 h-5" />
                        </div>
                        <div className="mt-4">
                          <h4 className="text-xs font-bold font-mono tracking-wider text-white">
                            {cert.title}
                          </h4>
                          <p className="text-[10px] text-gray-400 mt-1 leading-normal">
                            {cert.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <img
                    src={activeContent.image}
                    alt={activeContent.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </div>

            {/* Explanatory description card */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white border border-gray-100 rounded-full text-[10px] font-mono uppercase tracking-wider text-gray-500">
                  <FileCheck className="w-3.5 h-3.5 text-gray-800" />
                  <span>Verified Entity Showcase</span>
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight font-sans">
                  {activeContent.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed font-normal">
                  {activeContent.desc}
                </p>
              </div>

              {/* Verified metrics columns */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200/60">
                {activeContent.stats.map((stat, idx) => (
                  <div key={idx} className="space-y-1">
                    <p className="text-2xl font-extrabold font-sans text-gray-900 tracking-tight">
                      {stat.val}
                    </p>
                    <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider leading-none">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
