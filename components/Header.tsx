import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-soft sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-midnight-blue rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold text-lg">SCB</span>
            </div>
            <span className="text-midnight-blue font-semibold text-xl">SCB Data</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-charcoal-gray hover:text-warm-coral transition-colors font-medium">
              Services
            </a>
            <a href="#about" className="text-charcoal-gray hover:text-warm-coral transition-colors font-medium">
              About
            </a>
            <a href="#success-stories" className="text-charcoal-gray hover:text-warm-coral transition-colors font-medium">
              Success Stories
            </a>
            <a href="#contact" className="text-charcoal-gray hover:text-warm-coral transition-colors font-medium">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="bg-warm-coral hover:bg-warm-coral-dark text-white px-6 py-2 rounded-lg font-medium transition-colors shadow-soft"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`block h-0.5 w-6 bg-charcoal-gray transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-charcoal-gray transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-charcoal-gray transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-sage-green/30">
            <nav className="flex flex-col space-y-4">
              <a
                href="#services"
                className="text-charcoal-gray hover:text-warm-coral transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#about"
                className="text-charcoal-gray hover:text-warm-coral transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#success-stories"
                className="text-charcoal-gray hover:text-warm-coral transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Success Stories
              </a>
              <a
                href="#contact"
                className="text-charcoal-gray hover:text-warm-coral transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <a
                href="#contact"
                className="bg-warm-coral hover:bg-warm-coral-dark text-white px-6 py-3 rounded-lg font-medium transition-colors text-center mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
