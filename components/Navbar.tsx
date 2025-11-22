import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Height of the fixed header + some padding
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-dark-900/90 backdrop-blur-lg border-b border-slate-800 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a 
          href="#about" 
          onClick={(e) => handleNavClick(e, '#about')}
          className="flex items-center gap-2 text-2xl font-display font-bold text-primary tracking-tighter"
        >
          <Terminal className="w-8 h-8" />
          <span>Jubin<span className="text-white">.dev</span></span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-slate-400 hover:text-primary font-medium transition-colors text-sm uppercase tracking-widest cursor-pointer"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="px-5 py-2 bg-primary/10 text-primary border border-primary/20 rounded hover:bg-primary hover:text-dark-900 transition-all font-bold cursor-pointer"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-300" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-900 border-b border-slate-800 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-300 hover:text-primary text-lg font-medium cursor-pointer"
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="inline-block text-center mt-2 px-5 py-3 bg-primary/10 text-primary border border-primary/20 rounded hover:bg-primary hover:text-dark-900 transition-all font-bold"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;