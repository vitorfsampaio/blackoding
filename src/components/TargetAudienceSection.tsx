'use client';

import { motion } from 'framer-motion';
import { 
  Building2, 
  TrendingUp, 
  Utensils, 
  Lightbulb, 
  Scale, 
  Store 
} from 'lucide-react';

export default function TargetAudienceSection() {
  const targetAudiences = [
    {
      icon: Building2,
      title: "Empresários e profissionais liberais",
      description: "que não têm estrutura de marketing consolidada"
    },
    {
      icon: TrendingUp,
      title: "Pequenas e médias empresas",
      description: "que querem parecer grandes e transmitir mais credibilidade"
    },
    {
      icon: Utensils,
      title: "Restaurantes, clínicas, escritórios",
      description: "que precisam melhorar a imagem para vender mais"
    },
    {
      icon: Lightbulb,
      title: "Startups e empreendedores",
      description: "que têm ideias digitais mas não sabem como tirar do papel"
    },
    {
      icon: Scale,
      title: "Advogados, médicos, consultores",
      description: "que querem ser vistos como autoridade"
    },
    {
      icon: Store,
      title: "Lojas físicas",
      description: "que precisam de presença digital profissional"
    }
  ];

  return (
    <section id="publico" className="section-padding bg-black">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            PARA QUEM É A <span className="gradient-text">BLACKODING</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            ✅ VOCÊ ESTÁ NO LUGAR CERTO SE:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {targetAudiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300 card-hover group"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{audience.emoji}</span>
                <audience.icon className="text-green-500" size={20} />
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-2">
                ● {audience.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                {audience.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 border border-green-500/30 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Se você se identificou com algum desses perfis,
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              a Blackoding é exatamente o que você precisa para transformar sua presença digital.
            </p>
            <a
              href="https://wa.me/5511999999999?text=Olá! Me identifiquei com o público da Blackoding e gostaria de saber mais"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-3"
            >
              QUERO SABER MAIS
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
