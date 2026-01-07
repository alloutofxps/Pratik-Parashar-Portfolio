import React from 'react';
import { Award, BookOpen, CheckCircle2 } from 'lucide-react';

const Credentials: React.FC = () => {
  return (
    <section id="credentials" className="snap-section min-h-screen flex flex-col justify-center py-20 px-6 md:px-12 bg-pista dark:bg-forest-light text-olive dark:text-cream transition-colors duration-500">
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="text-center mb-20 space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif">Credentials & Background</h2>
          <p className="text-olive/80 dark:text-cream/80 font-light text-lg max-w-2xl mx-auto">Built on a foundation of rigorous testing and global standards.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          
          {/* Card 1 */}
          <div className="bg-white dark:bg-forest p-10 rounded-xl shadow-soft dark:shadow-none hover:-translate-y-1 transition-all duration-500 flex flex-col h-full">
            <div>
                <div className="mb-8 p-3 bg-pista/20 dark:bg-pista/10 rounded-full w-fit text-olive dark:text-pista">
                    <Award className="w-8 h-8 stroke-[1.5]" />
                </div>
                <h3 className="text-2xl font-serif mb-3">Senior Auditor</h3>
            </div>
            
            <div className="mt-auto">
                <p className="text-[10px] uppercase tracking-widest text-olive/60 dark:text-cream/60 mb-8 font-medium min-h-[2.5rem] flex items-center">
                    KPMG Netherlands & Deloitte
                </p>
                <div className="w-12 h-px bg-olive/10 dark:bg-white/10 mb-8"></div>
                <p className="text-sm text-olive/70 dark:text-cream/70 italic font-light">"Big 4 Pedigree"</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-forest p-10 rounded-xl shadow-soft dark:shadow-none hover:-translate-y-1 transition-all duration-500 flex flex-col h-full">
            <div>
                <div className="mb-8 p-3 bg-pista/20 dark:bg-pista/10 rounded-full w-fit text-olive dark:text-pista">
                    <BookOpen className="w-8 h-8 stroke-[1.5]" />
                </div>
                <h3 className="text-2xl font-serif mb-3">ACCA Candidate</h3>
            </div>

            <div className="mt-auto">
                <p className="text-[10px] uppercase tracking-widest text-olive/60 dark:text-cream/60 mb-8 font-medium min-h-[2.5rem] flex items-center">
                    Association of Chartered Certified Accountants
                </p>
                <div className="w-12 h-px bg-olive/10 dark:bg-white/10 mb-8"></div>
                <p className="text-sm text-olive/70 dark:text-cream/70 italic font-light">"9 of 13 Papers Completed"</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white dark:bg-forest p-10 rounded-xl shadow-soft dark:shadow-none hover:-translate-y-1 transition-all duration-500 flex flex-col h-full">
            <div>
                <div className="mb-8 p-3 bg-pista/20 dark:bg-pista/10 rounded-full w-fit text-olive dark:text-pista">
                    <CheckCircle2 className="w-8 h-8 stroke-[1.5]" />
                </div>
                <h3 className="text-2xl font-serif mb-3">CA Finalist</h3>
            </div>

            <div className="mt-auto">
                <p className="text-[10px] uppercase tracking-widest text-olive/60 dark:text-cream/60 mb-8 font-medium min-h-[2.5rem] flex items-center">
                    Institute of Chartered Accountants of India
                </p>
                <div className="w-12 h-px bg-olive/10 dark:bg-white/10 mb-8"></div>
                <p className="text-sm text-olive/70 dark:text-cream/70 italic font-light">
                    "Final examination stage; comprehensive expertise."
                </p>
            </div>
          </div>

        </div>

        {/* Logos/Footer of Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-xs md:text-sm text-olive/60 dark:text-pista tracking-[0.2em] uppercase">
            <span>Formerly with</span>
            <span className="font-bold mx-2 text-olive dark:text-white">KPMG</span>
            <span>and</span>
            <span className="font-bold mx-2 text-olive dark:text-white">Deloitte</span>
        </div>

      </div>
    </section>
  );
};

export default Credentials;