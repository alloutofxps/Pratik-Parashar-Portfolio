import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Innovation from './components/Innovation';
import Credentials from './components/Credentials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Theme state: default to dark to match the primary screenshot vibe
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Apply theme class to html element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-sage selection:text-charcoal">
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      <main className="flex-grow">
        <Hero />
        <Services />
        <Innovation />
        <Credentials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;