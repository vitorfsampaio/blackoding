'use client';

import { FaWhatsapp, FaInstagram, FaLinkedin, FaClock, FaUserGraduate } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black section-padding">
      <div className="container-centered">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
              BLACKODING - IA SOLUTIONS
            </h3>
            <p className="text-gray-400 text-base md:text-lg mb-4">
              &ldquo;Você não precisa aprender IA. Precisa só da Blackoding.&rdquo;
            </p>
            <div className="flex flex-col gap-2 text-gray-400 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <FaWhatsapp className="text-green-500 flex-shrink-0" size={16} />
                <span>Atendimento via WhatsApp</span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="text-green-500 flex-shrink-0" size={16} />
                <span>Entrega em até 72 horas</span>
              </div>
              <div className="flex items-center gap-2">
                <FaUserGraduate className="text-green-500 flex-shrink-0" size={16} />
                <span>Transformando amadores em autoridades</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="footer-links">
            <h4 className="text-white font-semibold mb-4 text-sm md:text-base">LINKS</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">
                  Termo de Adesão
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="footer-links">
            <h4 className="text-white font-semibold mb-4 text-sm md:text-base">EMPRESA</h4>
            <ul className="space-y-2">
              <li>
                <a href="#solucoes" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">
                  Soluções
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#equipe" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">
                  Equipe
                </a>
              </li>
              <li>
                <a href="#contato" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Form */}
        <div className="footer-form">
          <h4 className="text-lg md:text-xl font-bold text-white text-center mb-6">
            PREENCHA COM SUAS<br />
            INFORMAÇÕES ABAIXO
          </h4>
          <form className="contact-form">
            <div className="form-row">
              <input
                type="text"
                placeholder="Nome completo"
                required
                className="form-input"
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="form-input"
              />
            </div>
            
            <div className="form-row">
              <input
                type="tel"
                placeholder="WhatsApp (com DDD)"
                required
                className="form-input"
              />
              <select
                required
                className="form-select"
              >
                <option value="">Tipo de projeto</option>
                <option value="site">Desenvolvimento de Site</option>
                <option value="video">Vídeo Institucional</option>
                <option value="fotos">Ensaio Fotográfico</option>
                <option value="imagens">Aprimoramento de Imagens</option>
                <option value="sistema">Desenvolvimento de Sistema</option>
                <option value="personalizado">Projeto Personalizado</option>
                <option value="consultoria">Consultoria</option>
              </select>
            </div>
            
            <div className="form-row">
              <select
                required
                className="form-select"
              >
                <option value="">Orçamento aproximado</option>
                <option value="ate-5k">Até R$ 5.000</option>
                <option value="5k-10k">R$ 5.000 - R$ 10.000</option>
                <option value="10k-25k">R$ 10.000 - R$ 25.000</option>
                <option value="25k-50k">R$ 25.000 - R$ 50.000</option>
                <option value="acima-50k">Acima de R$ 50.000</option>
              </select>
              <select
                required
                className="form-select"
              >
                <option value="">Prazo desejado</option>
                <option value="urgente">Urgente (até 72h)</option>
                <option value="1-semana">1 semana</option>
                <option value="2-semanas">2 semanas</option>
                <option value="1-mes">1 mês</option>
                <option value="flexivel">Flexível</option>
              </select>
            </div>
            
            <textarea
              placeholder="Descreva brevemente seu projeto ou necessidade..."
              rows={4}
              className="form-textarea"
            ></textarea>
            
            <button type="submit" className="form-submit">
              <FaWhatsapp size={20} />
              ENVIAR PROPOSTA
            </button>
          </form>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p className="text-sm md:text-base">
              BLACKODING 2025 © Todos os direitos reservados.
            </p>
            <p className="text-xs md:text-sm text-gray-500">
              CNPJ: 00.000.000/0001-00, com sede na Rua Exemplo, 123, São Paulo, SP.
            </p>
          </div>
          <div className="footer-social">
            <a
              href="https://instagram.com/blackoding"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-whatsapp w-10 h-10 md:w-12 md:h-12 flex items-center justify-center"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={20} />
            </a>
            <a
              href="https://linkedin.com/company/blackoding"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}