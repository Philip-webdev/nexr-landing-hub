
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="nexr-container flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="font-display text-2xl font-bold text-white">Nekst<span className="text-[RGB(0,131,208)]">Pei</span></div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="font-medium text-white hover:text-nexr-teal transition-colors">
            Features
          </a>
          <a href="#about" className="font-medium text-white hover:text-nexr-teal transition-colors">
            About
          </a>
          <a href="#contact" className="text-[RGB(0,131,208)] text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-nexr-teal/80 shadow-md hover:shadow-lg">
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-lg border-b border-white/30 shadow-lg py-4 animate-fade-in">
          <div className="nexr-container flex flex-col gap-4">
            <a
              href="#features"
              className="font-medium text-white hover:text-nexr-teal transition-colors px-4 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#about"
              className="font-medium text-white hover:text-nexr-teal transition-colors px-4 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="https://nexr-pi.vercel.app/"
              className="bg-nexr-teal text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-nexr-teal/80 shadow-md hover:shadow-lg text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
