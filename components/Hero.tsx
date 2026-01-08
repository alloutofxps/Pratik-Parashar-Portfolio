import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Hero: React.FC = () => {
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="snap-section relative min-h-screen flex items-center justify-center px-6 pt-32 pb-12 overflow-hidden bg-cream dark:bg-forest transition-colors duration-500">
      
      {/* Clean Background - Removed blobs for editorial look */}
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center relative z-10">
        
        {/* Text Content */}
        <div className="lg:col-span-8 space-y-10 md:space-y-12">
          {/* Badge */}
          <div className="inline-block bg-pista/30 dark:bg-forest-light border border-pista/50 dark:border-white/10 px-4 py-1.5 rounded-sm">
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-olive dark:text-pista uppercase">
              Finance • Technology • Strategy
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] xl:text-[7.5rem] font-serif text-olive dark:text-cream leading-[0.95] tracking-tight">
            <span className="block italic font-light">Precision</span>
            <span className="block font-normal">Accounting.</span>
            <span className="block font-normal">Strategic</span>
            <span className="block italic text-pista dark:text-pista opacity-100 font-light">Solutions.</span>
          </h1>

          {/* Description & Buttons */}
          <div className="md:max-w-xl space-y-8 pt-4">
            <p className="text-lg md:text-xl text-olive/80 dark:text-cream/80 font-light leading-relaxed text-balance">
              Harnessing 6+ years of <strong className="text-olive dark:text-white font-medium">Big 4 pedigree</strong> and advanced <strong className="text-olive dark:text-white font-medium">AI implementation</strong> to solve complex financial challenges with editorial clarity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="group relative px-8 py-4 bg-pista text-olive font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 overflow-hidden hover:bg-pista-dim transition-all rounded-sm shadow-sm"
              >
                <span>Book Consultation</span>
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
              
              <button 
                onClick={() => scrollToSection('expertise')}
                className="px-8 py-4 border border-olive/20 dark:border-white/20 text-olive dark:text-cream font-medium uppercase tracking-widest text-xs flex items-center justify-center hover:bg-olive hover:text-white dark:hover:bg-cream dark:hover:text-forest transition-all rounded-sm"
              >
                Explore Expertise
              </button>
            </div>
          </div>
        </div>

        {/* Hero Visual/Abstract */}
        <div className="lg:col-span-4 relative hidden lg:block h-full min-h-[500px] flex items-center justify-center">
            <div className="relative w-64 h-80 bg-white dark:bg-forest-light shadow-soft dark:shadow-none border border-pista/20 dark:border-white/5 p-6 flex flex-col justify-between rotate-3 hover:rotate-0 transition-transform duration-700 ease-out rounded-sm">
                {/* Inner Content */}
                <div className="text-right border-b border-olive/10 dark:border-white/10 pb-4">
                     <p className="font-serif text-lg text-olive dark:text-cream">Pratik Parashar</p>
                     <p className="text-[10px] uppercase tracking-widest text-olive/60 dark:text-pista">Portfolio</p>
                </div>
                
                <div className="space-y-4">
                    <div className="h-full w-full overflow-hidden rounded-sm">
                      <img 
                        src="/pratik.jpg" 
                        alt="Pratik Parashar" 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div className="flex justify-between items-end">
                        <div className="text-[10px] text-olive tracking-widest">2026</div>
                        <div className="w-8 h-8 rounded-full bg-pista/30 flex items-center justify-center text-olive">
                            <ArrowUpRight size={14} />
                        </div>
                    </div>
                </div>

                {/* Decorative background box - Pista color */}
                <div className="absolute top-8 -right-8 w-64 h-80 bg-pista/30 -z-10 rounded-sm"></div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
