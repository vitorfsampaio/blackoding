'use client';

import { motion } from 'framer-motion';

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Saí de um negócio amador para uma empresa que já está nos 6 dígitos. A Blackoding transformou completamente minha presença digital.",
      author: "GABRIEL ANDRADE",
      role: "Cliente Blackoding há 7 meses"
    },
    {
      quote: "Tudo que de fato eu sei sobre presença digital, veio através deles. Foi a minha virada de chave.",
      author: "GUSTAVO SEXTARO",
      role: "Cliente Blackoding há 6 meses"
    },
    {
      quote: "Consegui através dos materiais criados pela Blackoding, bater os 50 mil reais mensais com recorrência.",
      author: "LEONARDO NEGRÃO",
      role: "Cliente Blackoding há 6 meses"
    },
    {
      quote: "Conheci minha equipe através da Blackoding. O ambiente foi essencial para que eu conseguisse me desenvolver.",
      author: "GABRIEL MOURA",
      role: "Cliente Blackoding há 8 meses"
    },
    {
      quote: "Tudo que eles entregam, eu aplico e funciona, realmente tem me gerado muito resultado.",
      author: "ADRIANO BRUNNER",
      role: "Cliente Blackoding há 5 meses"
    },
    {
      quote: "Entregam muito mais do que prometem. Estou me desenvolvendo e aprendendo constantemente.",
      author: "GABRIEL GONÇALVES",
      role: "Cliente Blackoding há 3 meses"
    }
  ];

  return (
    <section id="depoimentos" className="section-padding bg-gray-900">
      <div className="container-centered">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">
            DEPOIMENTOS
          </h2>
          <p className="section-subtitle">
            Estão falando de nós. E bem.
          </p>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              viewport={{ once: true }}
              className="testimonial-card"
            >
              <p className="testimonial-quote">
                {testimonial.quote}
              </p>
              <div className="testimonial-divider"></div>
              <div className="mt-auto">
                <div className="testimonial-author">
                  {testimonial.author}
                </div>
                <div className="testimonial-role">
                  {testimonial.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
