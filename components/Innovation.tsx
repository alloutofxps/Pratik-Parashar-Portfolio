import React from 'react';
import { FileText, Clock, Zap, User, BrainCircuit, ArrowRight, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';

const Innovation: React.FC = () => {
  return (
    <section id="innovation" className="snap-section min-h-screen flex flex-col justify-center py-20 px-6 md:px-12 bg-cream dark:bg-forest text-olive dark:text-cream transition-colors duration-500">
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-5 space-y-8">
            {/* Featured Innovation Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-olive/5 dark:bg-white/10 border border-olive/10 dark:border-white/5 rounded-full backdrop-blur-sm">
              <Sparkles size={12} className="text-olive dark:text-pista" />
              <span className="text-[10px] font-bold tracking-widest uppercase text-olive dark:text-white">
                Featured Innovation
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight text-olive dark:text-cream">
              The 314-Page <br />
              <span className="italic text-olive dark:text-pista">Financial Statement Challenge.</span>
            </h2>
            
            <p className="font-serif text-lg text-olive/60 dark:text-cream/60 italic border-l-2 border-pista pl-4">
              2024 Consolidated Financial Statements: <br/>
              <span className="not-italic font-semibold text-olive dark:text-white">Van Lanschot Kempen.</span>
            </p>

            <div className="space-y-6 text-olive/80 dark:text-cream/80 font-light text-base leading-relaxed">
              <p>
                Engineered a custom <strong className="text-olive dark:text-white font-medium">GPT Agent</strong> and proprietary prompt logic to automate the technical review of a 314-page consolidated report.
              </p>
            </div>

            <button className="group flex items-center gap-3 px-6 py-3 bg-olive dark:bg-pista text-white dark:text-olive text-xs font-bold tracking-widest uppercase rounded-sm hover:opacity-90 transition-all shadow-lg hover:shadow-xl">
                See the Methodology
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Visual - Comparison Dashboard */}
          <div className="lg:col-span-7 relative">
            
            {/* Main Card */}
            <div className="bg-white dark:bg-forest-light rounded-2xl shadow-soft dark:shadow-none border border-black/5 dark:border-white/5 overflow-hidden">
                
                {/* Dashboard Header */}
                <div className="bg-white dark:bg-forest-light border-b border-black/5 dark:border-white/5 p-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="bg-cream dark:bg-forest p-2 rounded border border-black/5 dark:border-white/10">
                            <FileText size={20} className="text-olive dark:text-pista"/>
                        </div>
                        <div>
                            <div className="text-[10px] uppercase tracking-widest text-olive/50 dark:text-cream/50">Target Document</div>
                            <div className="font-serif text-sm text-olive dark:text-white">Van Lanschot Kempen Consol. FS 2024</div>
                        </div>
                    </div>
                    <div className="text-right hidden sm:block">
                        <div className="text-[10px] uppercase tracking-widest text-olive/50 dark:text-cream/50">Volume</div>
                        <div className="font-serif text-sm text-olive dark:text-white">314 Pages</div>
                    </div>
                </div>

                {/* Split View */}
                <div className="grid grid-cols-1 md:grid-cols-2 relative">
                    
                    {/* Left: Traditional */}
                    <div className="px-8 pt-8 pb-28 space-y-10 bg-white dark:bg-forest-light relative z-0">
                         {/* Header: Added min-h-[3.5rem] for alignment */}
                         <div className="flex items-center gap-2 mb-4 min-h-[3.5rem]">
                            <User size={16} className="text-gray-400 shrink-0" />
                            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 leading-tight">Traditional Senior Auditor Review</h4>
                         </div>
                         
                         <div className="space-y-10">
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm text-gray-500">Duration</span>
                                    <span className="font-serif text-xl text-gray-700 dark:text-gray-300">40+ Hours</span>
                                </div>
                                <div className="w-full h-1.5 bg-gray-100 dark:bg-white/10 rounded-full">
                                    <div className="w-full h-full bg-gray-300 dark:bg-gray-500 rounded-full"></div>
                                </div>
                            </div>
                            
                            <div className="space-y-3 pt-2">
                                <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                                    <AlertCircle size={14} className="shrink-0" />
                                    <span>Manual Cross-referencing</span>
                                </div>
                                <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                                    <AlertCircle size={14} className="shrink-0" />
                                    <span>High Fatigue Risk</span>
                                </div>
                            </div>
                         </div>
                    </div>

                    {/* Right: AI Advantage */}
                    <div className="px-8 pt-8 pb-28 space-y-10 bg-pista dark:bg-pista/20 relative z-0">
                        {/* Header: Added min-h-[3.5rem] for alignment */}
                        <div className="flex items-center gap-2 mb-4 min-h-[3.5rem]">
                            <BrainCircuit size={16} className="text-olive dark:text-pista shrink-0" />
                            <h4 className="text-xs font-bold uppercase tracking-widest text-olive dark:text-pista leading-tight">Architected AI Agent Review</h4>
                         </div>

                         <div className="space-y-10">
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm text-olive/70 dark:text-pista/70">Duration</span>
                                    <span className="font-serif text-xl text-olive dark:text-white">30 Minutes</span>
                                </div>
                                <div className="w-full h-1.5 bg-white/50 dark:bg-white/10 rounded-full">
                                    <div className="w-[2%] h-full bg-olive dark:bg-pista rounded-full relative">
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-olive dark:bg-pista rounded-full shadow-sm"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3 pt-2">
                                <div className="flex items-center gap-3 text-xs text-olive/90 dark:text-pista/90 font-medium">
                                    <CheckCircle2 size={14} className="shrink-0" />
                                    <span>Automated Anomaly Detection</span>
                                </div>
                                <div className="flex items-center gap-3 text-xs text-olive/90 dark:text-pista/90 font-medium">
                                    <CheckCircle2 size={14} className="shrink-0" />
                                    <span>100% Disclosure Coverage</span>
                                </div>
                            </div>
                         </div>
                    </div>

                    {/* Efficiency Badge - Centered Bottom */}
                    <div className="absolute left-1/2 bottom-8 -translate-x-1/2 z-10 hidden md:block">
                        <div className="bg-olive dark:bg-cream text-white dark:text-olive px-6 py-2.5 rounded-full shadow-xl flex items-center gap-2 border border-white/10 whitespace-nowrap transform hover:scale-105 transition-transform cursor-default">
                            <Zap size={14} className="text-pista dark:text-olive fill-current" />
                            <span className="text-xs font-bold tracking-widest uppercase">Efficiency Gain: 98.75%</span>
                        </div>
                    </div>

                </div>
            </div>
            
            {/* Mobile Efficiency Badge */}
            <div className="md:hidden mt-6 flex justify-center">
                 <div className="bg-olive dark:bg-cream text-white dark:text-olive px-5 py-2.5 rounded-full shadow-lg flex items-center gap-2">
                    <Zap size={14} className="text-pista dark:text-olive fill-current" />
                    <span className="text-[10px] font-bold tracking-widest uppercase">Efficiency Gain: 98.75%</span>
                </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Innovation;