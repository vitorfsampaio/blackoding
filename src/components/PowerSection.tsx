'use client';

import { motion } from 'framer-motion';
import { FaBullseye, FaBolt, FaClock, FaCheckCircle, FaStar, FaRocket } from 'react-icons/fa';

export default function PowerSection() {
  const differentials = [
    {
      icon: FaClock,
      title: "Velocidade",
      description: "Todas as soluções em até 72 horas"
    },
    {
      icon: FaStar,
      title: "Qualidade",
      description: "Padrão profissional que impressiona"
    },
    {
      icon: FaCheckCircle,
      title: "Simplicidade",
      description: "Você pede, nós entregamos"
    },
    {
      icon: FaBullseye,
      title: "Resultado",
      description: "Material que vende sozinho"
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            O PODER DA <span className="text-green-500">BLACKODING</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-green-900/30 to-blue-900/30 border border-green-500/30 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <FaBullseye className="text-green-500" size={24} />
                <h3 className="text-2xl font-bold text-white">NOSSA MISSÃO É SIMPLES:</h3>
              </div>
              <p className="text-xl text-gray-300 leading-relaxed">
                Transformar negócios amadores em marcas de autoridade.
              </p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <p className="text-gray-300 leading-relaxed">
                Enquanto o mercado te vende ferramentas complicadas, nós entregamos o poder
                da IA pronto, simples e profissional. Você não precisa aprender nada — apenas
                receber os resultados.
              </p>
            </div>
          </motion.div>

          {/* Differentials */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-8">
              <FaBolt className="text-green-500" size={24} />
              <h3 className="text-2xl font-bold text-white">NOSSO DIFERENCIAL:</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {differentials.map((differential, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-green-500/50 transition-all duration-300"
                >
                  <differential.icon className="text-green-500 mb-3" size={24} />
                  <h4 className="font-semibold text-white mb-2">
                    {differential.title}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {differential.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
