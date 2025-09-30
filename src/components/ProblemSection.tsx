'use client';

import { motion } from 'framer-motion';
import { FaTimes, FaExclamationTriangle, FaArrowDown, FaGlobe, FaCamera, FaVideo, FaUsers, FaExclamationCircle } from 'react-icons/fa';

export default function ProblemSection() {
  const problems = [
    {
      icon: FaGlobe,
      text: "Seu site é ultrapassado ou nem existe"
    },
    {
      icon: FaCamera,
      text: "Suas fotos não despertam desejo nem confiança"
    },
    {
      icon: FaVideo,
      text: "Seus vídeos não transmitem o valor real da sua marca"
    },
    {
      icon: FaUsers,
      text: "Você perde clientes para concorrentes mais preparados"
    },
    {
      icon: FaExclamationCircle,
      text: "Sua presença digital grita \"amadorismo\""
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            PARE DE PARECER <span className="text-green-500">AMADOR</span>
          </h2>
          <p className="text-xl text-gray-300">
            Por que sua empresa ainda não decola?
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Problems List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-4 bg-gray-900/50 border border-gray-700 rounded-lg hover:border-red-500/50 transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <problem.icon className="text-red-500" size={20} />
                </div>
                <p className="text-gray-300">{problem.text}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Truth Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-500/30 rounded-xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <FaExclamationTriangle className="text-red-500" size={24} />
              <h3 className="text-2xl font-bold text-red-400">A verdade é dura:</h3>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              Não importa quão bom seja seu produto ou serviço. Se sua imagem não passa
              credibilidade, você será descartado antes mesmo de ter a chance de mostrar seu
              valor.
            </p>
            
            <div className="bg-black/50 rounded-lg p-4 border border-green-500/30">
              <p className="text-green-400 font-bold text-lg">
                Mas isso acaba hoje.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Arrow pointing down */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block"
          >
            <FaArrowDown className="text-green-500" size={32} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
