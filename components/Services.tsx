import React from 'react';
import { FileText, PieChart, ShieldCheck, TrendingUp, Cpu, BarChart3 } from 'lucide-react';

const Services: React.FC = () => {
  const competencies = [
    {
      icon: <FileText className="w-5 h-5 text-gray-700" />,
      title: "Reporting & Compliance",
      description: "Mastery in IFRS, Dutch GAAP, and Ind AS across FMCG and Financial Services.",
      bgColor: "bg-pastel-coral"
    },
    {
      icon: <BarChart3 className="w-5 h-5 text-gray-700" />,
      title: "Strategic Control",
      description: "Managing the full reporting cycle and month-end closures with an owner-mindset.",
      bgColor: "bg-pastel-sky"
    },
    {
      icon: <Cpu className="w-5 h-5 text-gray-700" />,
      title: "AI-Driven Efficiency",
      description: "Leveraging custom AI agents to reduce manual workloads from weeks to minutes.",
      bgColor: "bg-pastel-lavender"
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-gray-700" />,
      title: "Risk Mitigation",
      description: "Identifying process gaps and strengthening internal controls for audit-ready precision.",
      bgColor: "bg-pastel-rose"
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-gray-700" />,
      title: "Complex Valuation",
      description: "Specialized expertise in private equity valuation (DCF) and NAV memo preparation.",
      bgColor: "bg-pastel-amber"
    },
    {
      icon: <PieChart className="w-5 h-5 text-gray-700" />,
      title: "FP&A & Forecasting",
      description: "Transforming historical data into actionable insights through robust budgeting and forecasting.",
      bgColor: "bg-pastel-mint"
    }
  ];

  return (
    <section id="expertise" className="snap-section min-h-screen flex flex-col justify-center py-20 px-6 md:px-12 bg-pista dark:bg-forest-light transition-colors duration-500 relative">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-xs font-bold tracking-[0.2em] text-olive/70 dark:text-pista uppercase mb-6">Core Competencies</p>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-olive dark:text-cream leading-[1.1] max-w-3xl">
              The Modern <br />
              <span className="italic opacity-90">Finance Architecture.</span>
            </h2>
            <div className="w-32 h-1 bg-white dark:bg-pista hidden lg:block mb-6 opacity-60"></div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competencies.map((item, index) => (
            <div 
              key={index}
              className="group p-8 md:p-10 bg-white dark:bg-forest border-none rounded-xl shadow-soft hover:shadow-xl dark:shadow-none transition-all duration-500 hover:-translate-y-1"
            >
              {/* Colorful Icon Circle */}
              <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 ${item.bgColor}`}>
                {item.icon}
              </div>
              
              <h3 className="text-2xl font-serif text-olive dark:text-cream mb-4 leading-tight">
                {item.title}
              </h3>
              
              <p className="text-sm text-olive/70 dark:text-cream/70 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;