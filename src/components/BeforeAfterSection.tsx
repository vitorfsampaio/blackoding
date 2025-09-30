'use client';

import { motion } from 'framer-motion';
import { X, CheckCircle, ArrowRight } from 'lucide-react';

export default function BeforeAfterSection() {
  const beforeItems = [
    "Site amador ou inexistente",
    "Fotos que não vendem",
    "Vídeos sem impact",
    "Imagem que não passa confiança",
    "Perdendo clientes para concorrentes"
  ];

  const afterItems = [
    "Presença digital profissional",
    "Material que converte",
    "Autoridade no mercado",
    "Clientes impressionados",
    "Crescimento constante"
  ];

  return (
    <section id="resultados" className="section-padding bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            ANTES vs DEPOIS DA <span className="gradient-text">BLACKODING</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-red-900/20 border border-red-500/30 rounded-xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <X className="text-red-500" size={28} />
              <h3 className="text-2xl font-bold text-red-400">ANTES DA BLACKODING:</h3>
            </div>
            
            <div className="space-y-4">
              {beforeItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-3 bg-red-900/30 rounded-lg"
                >
                  <X className="text-red-500 flex-shrink-0" size={16} />
                  <span className="text-gray-300">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Arrow */}
          <div className="hidden lg:flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-red-500 to-green-500 rounded-full p-4"
            >
              <ArrowRight className="text-white" size={32} />
            </motion.div>
          </div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-green-900/20 border border-green-500/30 rounded-xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="text-green-500" size={28} />
              <h3 className="text-2xl font-bold text-green-400">DEPOIS DA BLACKODING:</h3>
            </div>
            
            <div className="space-y-4">
              {afterItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-3 bg-green-900/30 rounded-lg"
                >
                  <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                  <span className="text-gray-300">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mobile Arrow */}
        <div className="lg:hidden flex justify-center my-8">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-red-500 to-green-500 rounded-full p-4 rotate-90"
          >
            <ArrowRight className="text-white" size={32} />
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 border border-green-500/30 rounded-xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Qual lado você quer estar?
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              A escolha é sua: continuar perdendo oportunidades ou transformar sua marca em uma autoridade no mercado.
            </p>
            <a
              href="https://wa.me/5511999999999?text=Olá! Quero estar no lado DEPOIS da Blackoding"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-3"
            >
              QUERO ESTAR NO LADO DEPOIS
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
