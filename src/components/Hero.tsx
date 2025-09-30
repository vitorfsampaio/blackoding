'use client';

import { useState } from 'react';
import { FaPlay, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section id="hero" className="min-h-screen flex-center bg-black pt-16 sm:pt-18 lg:pt-20">
      <div className="hero-particles">
        <div className="particle" style={{ top: '20%', left: '10%' }}></div>
        <div className="particle" style={{ top: '60%', left: '80%' }}></div>
        <div className="particle" style={{ top: '30%', left: '70%' }}></div>
        <div className="particle" style={{ top: '80%', left: '20%' }}></div>
        <div className="particle" style={{ top: '40%', left: '50%' }}></div>
        <div className="particle" style={{ top: '70%', left: '60%' }}></div>
        <div className="particle" style={{ top: '10%', left: '90%' }}></div>
        <div className="particle" style={{ top: '90%', left: '40%' }}></div>
      </div>
      
      <div className="hero-grid"></div>
      <div className="hero-grid-secondary"></div>
      <div className="hero-grid-lines"></div>
      
      <div className="hero-container">
        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="hero-headline"
        >
          <h1 className="hero-title">
            Você não precisa aprender IA.<br />
            Precisa só da <span className="text-green-500">Blackoding</span>.
          </h1>
          
          <p className="hero-subtitle">
            Aqui, a inteligência artificial não é ferramenta, é entrega! Nossa equipe transforma o invisível em soluções prontas: sites, vídeos, fotos e sistemas que elevam sua marca com velocidade, acessibilidade e profissionalismo.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hero-buttons"
        >
          <a
            href="https://wa.me/5511999999999?text=Olá! Gostaria de contratar os serviços da Blackoding."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta"
          >
            COMEÇAR AGORA
          </a>
          
          <button
            onClick={() => setShowVideo(true)}
            className="btn-outline"
          >
            <FaPlay size={20} />
            ASSISTIR EXPLICAÇÃO
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hero-stats"
        >
          <div className="hero-stat">
            <div className="hero-stat-number">+500</div>
            <div className="hero-stat-label">PROJETOS ENTREGUES</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">72H</div>
            <div className="hero-stat-label">TEMPO DE ENTREGA</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">100%</div>
            <div className="hero-stat-label">SATISFAÇÃO</div>
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <FaTimes size={24} />
            </button>
            <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
              <p className="text-white text-lg">
                [Aqui seria inserido o vídeo VSL]
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}