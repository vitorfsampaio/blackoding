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
    <header className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/98 backdrop-blur-xl border-b border-gray-800/20 shadow-2xl' 
        : 'bg-black/95 backdrop-blur-lg'
    }`}>
      <div className="container-custom">
        <div className="flex-between h-16 sm:h-18 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-wider hover:text-green-400 transition-all duration-300 hover:scale-105"
            >
              BLACKODING
            </button>
          </div>

          {/* Desktop Navigation - Centralizado */}
          <nav className="hidden lg:flex flex-center flex-1 max-w-3xl mx-auto">
            <div className="flex-center gap-6 xl:gap-8">
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
          <div className="hidden lg:flex flex-center gap-3 flex-shrink-0">
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

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white hover:text-green-400 transition-all duration-300 p-2 hover:bg-white/10 rounded-lg"
          >
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-black/98 backdrop-blur-xl border-t border-gray-800/30 shadow-2xl">
            <div className="px-6 py-6 space-y-5">
              <div className="space-y-3">
                <button
                  onClick={() => scrollToSection('solucoes')}
                  className="block text-gray-300 hover:text-white transition-all duration-300 text-base font-medium py-3 text-left w-full hover:bg-white/5 rounded-lg px-4"
                >
                  Soluções
                </button>
                <button
                  onClick={() => scrollToSection('depoimentos')}
                  className="block text-gray-300 hover:text-white transition-all duration-300 text-base font-medium py-3 text-left w-full hover:bg-white/5 rounded-lg px-4"
                >
                  Depoimentos
                </button>
                <button
                  onClick={() => scrollToSection('equipe')}
                  className="block text-gray-300 hover:text-white transition-all duration-300 text-base font-medium py-3 text-left w-full hover:bg-white/5 rounded-lg px-4"
                >
                  Equipe
                </button>
                <button
                  onClick={() => scrollToSection('precos')}
                  className="block text-gray-300 hover:text-white transition-all duration-300 text-base font-medium py-3 text-left w-full hover:bg-white/5 rounded-lg px-4"
                >
                  Preços
                </button>
              </div>
              
              <div className="pt-5 space-y-3 border-t border-gray-800/50">
                <a
                  href="https://wa.me/5511999999999?text=Olá! Gostaria de contratar os serviços da Blackoding."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full"
                  onClick={toggleMenu}
                >
                  <FaWhatsapp size={16} />
                  CONTRATAR
                </a>
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="btn-secondary w-full"
                >
                  ENTRAR
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}