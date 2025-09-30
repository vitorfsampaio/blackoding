'use client';

import { motion } from 'framer-motion';
import { 
  FaCheck, 
  FaWhatsapp, 
  FaGlobe, 
  FaCamera, 
  FaVideo, 
  FaLaptop, 
  FaBullseye,
  FaBolt,
  FaFire,
  FaStar,
  FaArrowDown
} from 'react-icons/fa';

export default function PricingSection() {
  const features = [
    "Soluções profissionais em até 72 horas",
    "Qualidade que impressiona clientes e concorrentes",
    "Material que vende sozinho sem esforço extra",
    "Presença digital de autoridade que gera confiança",
    "Diferenciação real no seu mercado",
    "Suporte completo via WhatsApp",
    "Garantia de satisfação 100%"
  ];

  const ctaOptions = [
    {
      title: "QUERO UM SITE PROFISSIONAL",
      icon: FaGlobe
    },
    {
      title: "PRECISO DE UM ENSAIO FOTOGRÁFICO",
      icon: FaCamera
    },
    {
      title: "PRECISO DE FOTOS QUE VENDAM",
      icon: FaStar
    },
    {
      title: "QUERO UM VÍDEO INSTITUCIONAL",
      icon: FaVideo
    },
    {
      title: "TENHO UMA IDEIA DE SISTEMA",
      icon: FaLaptop
    },
    {
      title: "QUERO UM PROJETO PERSONALIZADO",
      icon: FaBullseye
    }
  ];

  return (
    <section id="precos" className="section-padding bg-black">
      <div className="container-centered">
        {/* Promise Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">
            NOSSA <span className="text-green-500">PROMESSA</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 flex-center gap-2">
            <FaBolt className="text-green-500" />
            EM ATÉ 72 HORAS, VOCÊ TEM:
          </p>
          
          <div className="pricing-features">
            {features.map((feature, index) => (
              <div key={index} className="pricing-feature">
                <FaCheck className="pricing-feature-icon" size={16} />
                <span className="pricing-feature-text">{feature}</span>
              </div>
            ))}
          </div>

          <div className="pricing-guarantee">
            <h3>
              <FaBullseye />
              NOSSA GARANTIA:
            </h3>
            <p>
              Não entregamos ferramentas. Entregamos resultados. Enquanto outros te ensinam a pescar, nós te entregamos o peixe pronto, temperado e no prato.
            </p>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex-center mb-16"
        >
          <div className="pricing-cta-box">
            <h3>
              <FaFire />
              PARE DE ADIAR SUA TRANSFORMAÇÃO
            </h3>
            <p>
              Cada dia que passa com uma imagem amadora é dinheiro saindo do seu bolso. Seus concorrentes não vão esperar. Seus clientes não vão esperar. Mas a solução está a um clique de distância.
            </p>
            
            <a
              href="https://wa.me/5511999999999?text=Olá! Quero meus resultados em 72h com a Blackoding."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta"
            >
              <FaWhatsapp size={20} />
              QUERO MEUS RESULTADOS EM 72H
            </a>
          </div>
        </motion.div>

        {/* CTA Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex-center-col"
        >
          <h3 className="text-2xl font-bold text-white mb-81 flex-center gap-2">
            <FaArrowDown />
            ESCOLHA SUA TRANSFORMAÇÃO:
          </h3>
          
          <div className="pricing-options">
            {ctaOptions.map((option, index) => (
              <a
                key={index}
                href={`https://wa.me/5511999999999?text=Olá! ${option.title}`}
                target="_blank"
                rel="noopener noreferrer"
                className="pricing-option"
              >
                <option.icon className="pricing-option-icon" size={32} />
                <p className="pricing-option-text">
                  {option.title}
                </p>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
