'use client';

import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Header */}
      <header className={`header-mobile ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-content">
          <button 
            onClick={() => scrollToSection('hero')}
            className="header-logo"
          >
            BLACKODING
          </button>

          <button
            onClick={toggleMenu}
            className="mobile-menu-button"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-content">
            <nav className="mobile-nav-links">
              <button
                onClick={() => scrollToSection('solucoes')}
                className="mobile-nav-link"
              >
                Soluções
              </button>
              <button
                onClick={() => scrollToSection('depoimentos')}
                className="mobile-nav-link"
              >
                Depoimentos
              </button>
              <button
                onClick={() => scrollToSection('equipe')}
                className="mobile-nav-link"
              >
                Equipe
              </button>
              <button
                onClick={() => scrollToSection('precos')}
                className="mobile-nav-link"
              >
                Preços
              </button>
            </nav>
            
            <div className="mobile-cta-buttons">
              <a
                href="https://wa.me/5511999999999?text=Olá! Gostaria de contratar os serviços da Blackoding."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                onClick={toggleMenu}
              >
                <FaWhatsapp size={16} />
                CONTRATAR
              </a>
              <button 
                onClick={() => scrollToSection('hero')}
                className="btn-secondary"
              >
                ENTRAR
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Desktop Header */}
      <header className={`hidden lg:block fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/98 backdrop-blur-xl border-b border-gray-800/20 shadow-2xl' 
          : 'bg-black/95 backdrop-blur-lg'
      }`}>
        <div className="container-custom">
          <div className="flex-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-2xl font-bold text-white tracking-wider hover:text-green-400 transition-all duration-300 hover:scale-105"
              >
                BLACKODING
              </button>
            </div>

            {/* Desktop Navigation - Centralizado */}
            <nav className="flex-center flex-1 max-w-3xl mx-auto">
              <div className="flex-center gap-8">
                <button 
                  onClick={() => scrollToSection('solucoes')}
                  className="text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium relative group px-3 py-2"
                >
                  Soluções
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
                </button>
                <button 
                  onClick={() => scrollToSection('depoimentos')}
                  className="text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium relative group px-3 py-2"
                >
                  Depoimentos
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
                </button>
                <button 
                  onClick={() => scrollToSection('equipe')}
                  className="text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium relative group px-3 py-2"
                >
                  Equipe
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
                </button>
                <button 
                  onClick={() => scrollToSection('precos')}
                  className="text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium relative group px-3 py-2"
                >
                  Preços
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
                </button>
              </div>
            </nav>

            {/* CTA Buttons */}
            <div className="flex-center gap-3 flex-shrink-0">
              <a
                href="https://wa.me/5511999999999?text=Olá! Gostaria de contratar os serviços da Blackoding."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <FaWhatsapp size={14} />
                CONTRATAR
              </a>
              <button 
                onClick={() => scrollToSection('hero')}
                className="btn-secondary"
              >
                ENTRAR
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}