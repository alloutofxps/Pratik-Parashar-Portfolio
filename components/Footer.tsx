import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="snap-section bg-olive dark:bg-forest-dark border-t border-white/5 py-12 px-6 md:px-12 transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <h4 className="font-serif text-lg text-cream mb-1">Pratik Parashar</h4>
          <p className="text-xs text-cream/50">© 2026 Pratik Parashar. All rights reserved.</p>
        </div>

        <div className="flex gap-8">
          <a 
            href="https://www.linkedin.com/in/pratikparashar93/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-widest text-cream/60 hover:text-pista transition-colors"
          >
            LinkedIn
          </a>
          <a 
            href="mailto:parashar.pratik@gmail.com" 
            className="text-xs uppercase tracking-widest text-cream/60 hover:text-pista transition-colors"
          >
            Email
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;