import React, { useEffect, useState } from 'react';
import './MembersPage.css';
import mockapmembros from '../images/MockapMembros.png'; 
import trevisanImg from '../images/Trevisan.png';
import poletoImg from '../images/Poleto.png';
import martinsImg from '../images/Martins.png';
import lucasImg from '../images/Lucas.png';
import ContactSection from "../components/ContactSection";

import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

import brandingAquaFast from "../images/BrandingAquaFast.png";
import brandingAquaFastDARK from "../images/BrandingAquaFastDARK.png";

const teamMembers = [
  {
    name: 'Matheus Trevisan Ribeiro',
    role: 'Sou o líder do grupo neste projeto. Responsável por fornecer as principais diretrizes, organizar as tarefas de cada membro e acompanhar de perto o andamento do trabalho para garantir que os objetivos sejam cumpridos dentro do prazo.',
    image: trevisanImg,
    email: 'mailto:matheus.ribeiro@example.com',
    linkedin: 'https://www.linkedin.com/in/matheustrevisan/',
  },
  {
    name: 'Gabriel Alves Poleto',
    role: 'Sou o vice-líder do grupo neste projeto. Auxilio o líder nas decisões e possuo a tarefa também de monitorar o uso dos recursos e garantir que tudo esteja fluindo para o bom andamento do trabalho.',
    image: poletoImg,
    email: 'mailto:gabriel.poleto@example.com',
    linkedin: 'https://www.linkedin.com/in/gabrielpoleto/',
  },
  {
    name: 'Gustavo Martins Fideles',
    role: 'Sou o designer do grupo e contribuí com a criação da logo, suas variações e a identidade visual do projeto, além de definir e aplicar a paleta de cores em todos os elementos visuais utilizados.',
    image: martinsImg,
    email: 'mailto:gustavo.fideles@example.com',
    linkedin: 'https://www.linkedin.com/in/gustavofideles/',
  },
  {
    name: 'Lucas Josué Maia',
    role: 'Sou o programador do grupo. Divido as responsabilidades da programação com meus colegas, ofereço suporte técnico sempre que necessário e também colaboro em outras atividades importantes do projeto.',
    image: lucasImg,
    email: 'mailto:lucas.maia@example.com',
    linkedin: 'https://www.linkedin.com/in/lucasmaia/',
  },
];

const MembersPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Detecta quando o tema muda (igual na Home)
  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.body.classList.contains('dark'));
    };

    checkDarkMode();

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="page-wrapper">
        {/* Branding AquaFast (troca automática) */}
        <div className="imagem">
          <img
            src={isDarkMode ? brandingAquaFastDARK : brandingAquaFast}
            alt="Logo AquaFast"
            className="page-logo"
          />
        </div>

        <div className="members-container">
          <h2 className="members-title">Membros da Equipe</h2>
          <div className="members-grid">
            {teamMembers.map((member, index) => (
              <div className="member-card" key={index}>
                <img src={member.image} alt={member.name} className="member-image" />
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <div className="member-social-links">
                  <a
                    href={member.email}
                    className="social-link-box"
                    aria-label={`Enviar email para ${member.name}`}
                  >
                    <FaEnvelope size={20} />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link-box"
                    aria-label={`LinkedIn de ${member.name}`}
                  >
                    <FaLinkedin size={20} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mockup */}
        <div className="mockup-section">
          <img src={mockapmembros} alt="Mockup de Membros" className="mockup-image" />
        </div>
      </div>

      {/* Contato */}
      <ContactSection />
    </>
  );
};

export default MembersPage;
