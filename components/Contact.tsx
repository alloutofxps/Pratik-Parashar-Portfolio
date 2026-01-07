import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: 'Financial Reporting & Compliance',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch("https://formspree.io/f/xeeoylod", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', interest: 'Financial Reporting & Compliance', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="snap-section min-h-screen flex flex-col justify-center py-20 px-6 md:px-12 bg-pista dark:bg-forest text-olive dark:text-cream transition-colors duration-500">
      <div className="max-w-3xl mx-auto w-full">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-olive dark:text-cream">Book a Consultation</h2>
          <p className="text-olive/80 dark:text-cream/80 font-light text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Ready to optimize your reporting cycle? Let's discuss your financial architecture.
          </p>
        </div>

        <div className="bg-white dark:bg-forest-light p-8 md:p-12 rounded-2xl shadow-soft dark:shadow-none min-h-[400px] flex items-center justify-center relative overflow-hidden transition-all duration-500">
            {status === 'success' ? (
                <div className="flex flex-col items-center justify-center text-center py-12 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 w-full">
                  <h3 className="text-3xl md:text-5xl font-serif text-olive dark:text-cream leading-tight">
                    Thank you.
                  </h3>
                  <p className="text-olive/80 dark:text-cream/80 font-light text-lg md:text-xl max-w-md mx-auto">
                    Pratik has received your inquiry and will reach out shortly.
                  </p>
                </div>
            ) : (
                <form className="space-y-8 w-full" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-[10px] uppercase tracking-widest text-olive/60 dark:text-cream/60 font-bold">Full Name</label>
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-cream dark:bg-forest border-none rounded-md px-4 py-4 text-olive dark:text-white placeholder-olive/30 dark:placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-pista transition-all"
                        placeholder=""
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-[10px] uppercase tracking-widest text-olive/60 dark:text-cream/60 font-bold">Email Address</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-cream dark:bg-forest border-none rounded-md px-4 py-4 text-olive dark:text-white placeholder-olive/30 dark:placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-pista transition-all"
                        placeholder=""
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="interest" className="text-[10px] uppercase tracking-widest text-olive/60 dark:text-cream/60 font-bold">Area of Interest</label>
                    <div className="relative">
                      <select 
                        id="interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        className="w-full bg-cream dark:bg-forest border-none rounded-md px-4 py-4 text-olive dark:text-white focus:outline-none focus:ring-2 focus:ring-pista transition-all appearance-none cursor-pointer"
                      >
                        <option>Financial Reporting & Compliance</option>
                        <option>AI Implementation Strategy</option>
                        <option>FP&A & Forecasting</option>
                        <option>Internal Controls</option>
                        <option>Other</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 1L5 5L9 1" stroke="#2F3624" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="dark:stroke-white"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-[10px] uppercase tracking-widest text-olive/60 dark:text-cream/60 font-bold">Message</label>
                    <textarea 
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full bg-cream dark:bg-forest border-none rounded-md px-4 py-4 text-olive dark:text-white placeholder-olive/30 dark:placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-pista transition-all resize-none"
                      placeholder=""
                    ></textarea>
                  </div>

                  {status === 'error' && (
                    <div className="p-3 bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-xs text-center rounded">
                      Something went wrong. Please try again.
                    </div>
                  )}

                  <button 
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full bg-olive dark:bg-pista text-white dark:text-olive font-bold tracking-[0.2em] text-xs uppercase py-5 rounded-md hover:opacity-90 transition-all duration-300 mt-4 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {status === 'sending' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      "Submit Inquiry"
                    )}
                  </button>
                </form>
            )}
        </div>

      </div>
    </section>
  );
};

export default Contact;