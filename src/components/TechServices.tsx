import { motion } from 'motion/react';
import { Ruler, ShieldAlert, Truck, Box, Lightbulb, Workflow } from 'lucide-react';
import { Language } from '../types';
import { translations, solutions } from '../data';

interface TechServicesProps {
  currentLang: Language;
}

export default function TechServices({ currentLang }: TechServicesProps) {
  const t = translations[currentLang];

  const services = [
    {
      icon: Ruler,
      title: currentLang === 'zh' ? '千分毫米微公差核量' : '0.1mm Precise Laser Measuring',
      desc: currentLang === 'zh' 
        ? '派遣当地项目团队全套高级雷达激光仪器，针对高层沉降、墙体倾斜及地面贴合间隙进行精准锁定，确保门框零变形契合。' 
        : 'Deploying regional expert teams with heavy-load laser measuring kits to verify building settlement, frame deviation, and floor gaps down to the millimeter.'
    },
    {
      icon: Workflow,
      title: currentLang === 'zh' ? '3D 效果云端渲染匹配' : 'Seamless 3D CAD/BIM Synthesis',
      desc: currentLang === 'zh' 
        ? '将门体的艺术饰面高精度材质纹理与客户已有的别墅CAD剖面、BIM建筑效果图进行精密融汇，提供真实的虚实交融透视。' 
        : 'Placing custom material structures and finish grains directly inside your villa model. Seamless compatibility with AutoCAD, BIM and architectural formats.'
    },
    {
      icon: Truck,
      title: currentLang === 'zh' ? '跨洋专线尊享防震拼箱运输' : 'International shockproof ocean freight',
      desc: currentLang === 'zh' 
        ? '每一扇门通体均贴合高级防刮高洁PE护膜，外框使用多层阻尼硬橡胶固定，封钉坚固出口特种多层重组木箱。' 
        : 'Each gate is completely wrapped in double-layered anti-scratch PE film, secured with vibration dampers and protected inside ultra-sturdy custom wooden crates.'
    },
    {
      icon: Box,
      title: currentLang === 'zh' ? '十个工作年度整门质保服务' : '10-Year Global Structural Integrity',
      desc: currentLang === 'zh' 
        ? '自签订交付日起，所有门体框骨抗风变形、液压闭门缓冲、智能物联芯片更换享受全天候工程师远程指导及十年免费定检，售后无忧。' 
        : 'Full coverage of frame deformation, hydraulic hinge mechanical fatigue, smart lock sensor upgrades and global onsite technical assistance for 10 years.'
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-gray-400">
            {currentLang === 'zh' ? '智慧互联，高能落地' : 'Global Installations & Tech Support'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight font-sans">
            {t.solutionsTitle}
          </h2>
          <p className="text-gray-500 font-normal leading-relaxed text-sm md:text-base">
            {t.solutionsSubtitle}
          </p>
        </div>

        {/* SUB-SECTION 1: HIGH-END APPLICATIONS CARDS SHOWCASE */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {solutions.map((sol, index) => (
            <div
              key={sol.id}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100 group"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={sol.bgImage}
                  alt={sol.title[currentLang]}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/50 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 tracking-tight">
                    {sol.title[currentLang]}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed font-normal">
                    {sol.description[currentLang]}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {sol.tags[currentLang].map((tag, idx) => (
                    <span key={idx} className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded-md text-[9px] font-mono leading-none">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SUB-SECTION 2: CORE TECHNICAL SERVICES MATRIX */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200/40 shadow-xl space-y-10">
          <div className="max-w-xl">
            <span className="text-[10px] font-mono font-bold tracking-widest text-amber-600 bg-amber-50 uppercase px-2 py-0.5 rounded-md">
              HUZHIYI Technical Integration
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 mt-2 font-sans">
              {currentLang === 'zh' ? '全生命周期技术支撑体系' : 'Holistic Lifespan Technical Assistance'}
            </h3>
            <p className="text-xs text-gray-400 mt-1.5">
              {currentLang === 'zh' ? '我们绝非仅仅制造一扇门；更提供从立意探讨、参数复合验证到高规格抗震抗弯防盗维护的无缝工程方案。' : 'We do not simply produce gates. We provide an uninterrupted end-to-end engineering solution.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            {services.map((srv, index) => {
              const IconComp = srv.icon;
              return (
                <div key={index} className="flex space-x-4 items-start group">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-800 shrink-0 group-hover:bg-slate-950 group-hover:text-white transition-all duration-300">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="text-sm font-bold text-gray-900 tracking-tight">
                      {srv.title}
                    </h4>
                    <p className="text-xs text-gray-500 leading-relaxed font-normal">
                      {srv.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
