'use client';

import { motion } from 'framer-motion';
import { Clock, CheckCircle, Shield, Zap } from 'lucide-react';

export default function PromiseSection() {
  const promises = [
    "Soluções profissionais que elevam sua marca",
    "Qualidade que impressiona clientes e concorrentes",
    "Material que vende sozinho sem esforço extra",
    "Presença digital de autoridade que gera confiança",
    "Diferenciação real no seu mercado"
  ];

  return (
    <section className="section-padding bg-black">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            NOSSA <span className="gradient-text">PROMESSA</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 72 Hours Promise */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-green-900/30 to-blue-900/30 border border-green-500/30 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="text-green-500" size={28} />
                <h3 className="text-2xl font-bold">EM ATÉ 72 HORAS, VOCÊ TEM:</h3>
              </div>
              
              <div className="space-y-4">
                {promises.map((promise, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 p-3 bg-green-900/20 rounded-lg"
                  >
                    <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                    <span className="text-gray-300">{promise}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Guarantee */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="text-blue-500" size={28} />
                <h3 className="text-2xl font-bold">NOSSA GARANTIA:</h3>
              </div>
              
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                Não entregamos ferramentas. Entregamos resultados.
              </p>
              
              <div className="bg-black/50 border border-blue-500/30 rounded-lg p-4">
                <p className="text-blue-400 font-semibold text-lg">
                  Enquanto outros te ensinam a pescar, nós te entregamos o peixe pronto, temperado e no prato.
                </p>
              </div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <a
                href="https://wa.me/5511999999999?text=Olá! Quero meus resultados em 72h com a Blackoding"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xl px-12 py-4 inline-flex items-center gap-3"
              >
                QUERO MEUS RESULTADOS EM 72H
                <Clock size={20} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
