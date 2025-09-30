'use client';

import { motion } from 'framer-motion';
import { 
  FaGlobe, 
  FaVideo, 
  FaCamera, 
  FaImage, 
  FaLightbulb, 
  FaCode,
  FaArrowRight,
  FaWhatsapp,
  FaArrowRight as FaArrowRightIcon
} from 'react-icons/fa';

export default function SolutionsSection() {
  const solutions = [
    {
      icon: FaGlobe,
      title: "DESENVOLVIMENTO DE SITES",
      description: "Deixe de parecer amador e conquiste confiança desde o primeiro clique. Sites profissionais, rápidos, modernos e estratégicos que convertem visitantes em clientes.",
      benefit: "Sua marca deixa de ser amadora e passa a jogar no time dos grandes."
    },
    {
      icon: FaVideo,
      title: "VÍDEOS INSTITUCIONAIS",
      description: "Apresente sua marca com impacto e clareza. Vídeos com qualidade de propaganda que elevam a percepção da sua empresa.",
      benefit: "Sua marca se torna memorável na cabeça do cliente."
    },
    {
      icon: FaCamera,
      title: "ENSAIOS FOTOGRÁFICOS",
      description: "Construa autoridade com imagens reais e autênticas. Ensaios fotográficos modernos e autênticos que conquistam credibilidade.",
      benefit: "Ninguém vai dizer \"parece fake\", porque é você — só que na sua melhor versão."
    },
    {
      icon: FaImage,
      title: "APRIMORAMENTO DE IMAGENS",
      description: "Deixe de perder vendas por fotos ruins. Transformamos imagens comuns em fotos irresistíveis que despertam desejo.",
      benefit: "Ideal para restaurantes, lojas e marcas que precisam que o cliente compre no olhar."
    },
    {
      icon: FaLightbulb,
      title: "PROJETOS PERSONALIZADOS",
      description: "Sua ideia, nossa execução. Projetos exclusivos, soluções sob medida com inteligência e criatividade.",
      benefit: "Se você pensa, a Blackoding realiza."
    },
    {
      icon: FaCode,
      title: "DESENVOLVIMENTO DE SISTEMAS",
      description: "Sua ideia de sistema não fica no papel. Transformamos sua ideia em um produto rentável e escalável.",
      benefit: "Sua ideia não fica no papel. Vira negócio."
    }
  ];

  return (
    <section id="solucoes" className="section-padding bg-black">
      <div className="container-centered">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">
            NOSSAS <span className="text-green-500">SOLUÇÕES</span>
          </h2>
          <p className="section-subtitle">
            Transformamos sua presença digital com soluções profissionais que vendem sozinhas
          </p>
        </motion.div>

        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="solution-card"
            >
              <div className="solution-header">
                <div className="solution-icon">
                  <solution.icon size={24} />
                </div>
                <h3 className="solution-title">
                  {solution.title}
                </h3>
              </div>
              
              <p className="solution-description">
                {solution.description}
              </p>
              
              <div className="solution-benefit">
                <p className="solution-benefit-text">
                  <FaArrowRightIcon className="solution-benefit-icon" size={14} />
                  {solution.benefit}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="solutions-cta"
        >
          <a
            href="https://wa.me/5511999999999?text=Olá! Quero transformar minha marca com a Blackoding."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta"
          >
            <FaWhatsapp size={20} />
            QUERO TRANSFORMAR MINHA MARCA
            <FaArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}