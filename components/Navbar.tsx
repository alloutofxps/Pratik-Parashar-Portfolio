import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Expertise', href: '#expertise' },
    { name: 'AI Innovation', href: '#innovation' },
    { name: 'Credentials', href: '#credentials' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-cream/90 dark:bg-forest/90 backdrop-blur-md py-4 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl md:text-2xl font-serif font-bold tracking-widest text-olive dark:text-cream uppercase transition-colors duration-500">
          Pratik Parashar
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleScrollTo(link.href)}
              className="text-xs uppercase tracking-widest font-medium text-olive/70 dark:text-cream/70 hover:text-olive dark:hover:text-pista transition-colors duration-300"
            >
              {link.name}
            </button>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-olive/5 dark:hover:bg-cream/10 transition-colors text-olive dark:text-cream"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Consult Button */}
          <button
            onClick={() => handleScrollTo('#contact')}
            className="bg-pista hover:bg-pista-dim text-olive dark:bg-cream dark:text-forest dark:hover:bg-pista font-bold text-xs uppercase tracking-widest px-6 py-2.5 transition-all duration-300 rounded-sm"
          >
            Consult
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
           <button
            onClick={toggleTheme}
            className="p-2 text-olive dark:text-cream"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-olive dark:text-cream"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-cream dark:bg-forest border-b border-olive/10 dark:border-white/10 py-6 px-6 shadow-lg flex flex-col space-y-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleScrollTo(link.href)}
              className="text-left text-sm uppercase tracking-widest font-medium text-olive dark:text-cream hover:text-pista transition-colors py-2"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => handleScrollTo('#contact')}
            className="w-full text-center bg-pista dark:bg-cream text-olive dark:text-forest text-xs uppercase tracking-widest py-3 mt-4 font-bold"
          >
            Consult
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;