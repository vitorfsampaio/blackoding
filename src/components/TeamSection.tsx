'use client';

import { motion } from 'framer-motion';

export default function TeamSection() {
  const teamMembers = [
    {
      name: "GABRIEL SOIER",
      role: "Está na Blackoding falando sobre Desenvolvimento Web e IA.",
      image: "/api/placeholder/300/300"
    },
    {
      name: "GUILHERME TOSONI",
      role: "Está na Blackoding falando sobre Marketing Digital e Conversão.",
      image: "/api/placeholder/300/300"
    },
    {
      name: "ALEX ALVES",
      role: "Está na Blackoding falando sobre Design e Branding.",
      image: "/api/placeholder/300/300"
    },
    {
      name: "VINÍCIUS TRONCOSO",
      role: "Está na Blackoding falando sobre Sistemas e Automação.",
      image: "/api/placeholder/300/300"
    },
    {
      name: "MINEIRO DAS VENDAS",
      role: "Está na Blackoding falando sobre Vendas e Negociação.",
      image: "/api/placeholder/300/300"
    },
    {
      name: "IGOR KADOOKA",
      role: "Está na Blackoding falando sobre Estratégia e Growth.",
      image: "/api/placeholder/300/300"
    }
  ];

  const skills = [
    "Desenvolvimento Web",
    "Inteligência Artificial",
    "Design Gráfico",
    "Marketing Digital",
    "Fotografia",
    "Vídeo Marketing",
    "Sistemas Personalizados",
    "Automação"
  ];

  return (
    <section id="equipe" className="section-padding bg-gray-900">
      <div className="container-centered">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">
            EQUIPE
          </h2>
          <p className="section-subtitle">
            Conecte-se com os maiores, networking na palma da mão.
          </p>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="team-skills"
        >
          <h3 className="team-skills-title">
            O que você quer aprender hoje?
          </h3>
          <div className="team-skills-list">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="team-skill-tag"
              >
                {skill}
              </motion.span>
            ))}
          </div>
          <p className="team-skills-description">
            Na Blackoding, você desenvolve novas habilidades dentro do mercado digital. Tudo isso e muito mais, na nossa área de membros.
          </p>
        </motion.div>

        {/* Team Members */}
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="team-card"
            >
              <div className="team-avatar"></div>
              <h3 className="team-name">
                {member.name}
              </h3>
              <p className="team-role">
                {member.role}
              </p>
              <button className="team-button">
                CONHECER
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="team-cta"
        >
          <a
            href="https://wa.me/5511999999999?text=Olá! Quero fazer parte da Blackoding."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta"
          >
            COMEÇAR AGORA
          </a>
        </motion.div>
      </div>
    </section>
  );
}
