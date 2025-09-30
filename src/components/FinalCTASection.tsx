'use client';

import { motion } from 'framer-motion';
import { 
  Globe, 
  Camera, 
  Image, 
  Video, 
  Code, 
  Lightbulb,
  Clock,
  AlertTriangle
} from 'lucide-react';

export default function FinalCTASection() {
  const ctaOptions = [
    {
      icon: Globe,
      title: "QUERO UM SITE PROFISSIONAL",
      description: "Transforme sua presença digital"
    },
    {
      icon: Camera,
      title: "PRECISO DE UM ENSAIO FOTOGRÁFICO",
      description: "Imagens que vendem e impressionam"
    },
    {
      icon: Image,
      title: "PRECISO DE FOTOS QUE VENDAM",
      description: "Aprimoramento profissional de imagens"
    },
    {
      icon: Video,
      title: "QUERO UM VÍDEO INSTITUCIONAL",
      description: "Vídeos que transmitem autoridade"
    },
    {
      icon: Code,
      title: "TENHO UMA IDEIA DE SISTEMA",
      description: "Desenvolvimento sob medida"
    },
    {
      icon: Lightbulb,
      title: "QUERO UM PROJETO PERSONALIZADO",
      description: "Soluções exclusivas para sua marca"
    }
  ];

  return (
    <section className="section-padding bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <AlertTriangle className="text-red-500" size={32} />
            <h2 className="text-3xl md:text-5xl font-bold text-red-400">
              PARE DE ADIAR SUA TRANSFORMAÇÃO
            </h2>
          </div>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Cada dia que passa com uma imagem amadora é dinheiro saindo do seu bolso.
          </p>
          
          <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 max-w-2xl mx-auto">
            <p className="text-red-400 font-semibold text-lg mb-2">
              Seus concorrentes não vão esperar. Seus clientes não vão esperar.
            </p>
            <p className="text-white text-lg">
              Mas a solução está a um clique de distância.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold text-white mb-8" style={{marginTop: 20}}>
            ESCOLHA SUA TRANSFORMAÇÃO:
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {ctaOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <a
                href={`https://wa.me/5511999999999?text=Olá! ${option.title.replace(/QUERO|PRECISO/, 'quero/preciso')} - ${option.description}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300 card-hover h-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  <option.icon className="text-green-500 group-hover:text-green-400 transition-colors" size={24} />
                  <div className="flex-1">
                    <h4 className="font-semibold text-white text-sm mb-1">
                      {option.title}
                    </h4>
                    <p className="text-gray-400 text-xs">
                      {option.description}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-green-500 text-sm font-medium">
                    WhatsApp →
                  </span>
                  <Clock className="text-gray-500" size={16} />
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 border border-green-500/30 rounded-xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              A transformação da sua marca começa agora.
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              Não deixe mais um dia passar com uma imagem que não representa o valor real do seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5511999999999?text=Olá! Quero transformar minha marca com a Blackoding AGORA"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-8 py-3"
              >
                TRANSFORMAR AGORA
              </a>
              <a
                href="https://wa.me/5511999999999?text=Olá! Tenho dúvidas sobre os serviços da Blackoding"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-lg px-8 py-3"
              >
                TIRAR DÚVIDAS
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
