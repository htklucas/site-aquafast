import React, { useEffect, useState } from "react";
import { Logo } from "../components/Logo";

import brandingAquaFast from "../images/BrandingAquaFast.png";
import brandingAquaFastDARK from "../images/BrandingAquaFastDARK.png";

import IdeiaFoto from "../images/Caneca.png";
import Arduino from "../images/arduino.png";
import Sensor from "../images/sensordemedir.png";
import celular from "../images/celular1.png";
import Tela from "../images/tela.png";

import sobreImg from "../images/home/sobreEmpresa.png";
import sobreImgDARK from "../images/home/sobreEmpresaDARK.png";

import ContactSection from "../components/ContactSection";
import "./WorkPage.css";

const blocosProjeto = [
  {
    titulo: "Hardware do Arduino",
    texto: "O hardware do Arduino será essencial para o funcionamento do projeto, atuando como o centro de controle. Ele se conecta ao sensor de nível de água que mede a quantidade presente na caixa, e envia essas informações, em tempo real, para um aplicativo no celular ou computador do usuário.",
    imagem: Arduino,
  },
  {
    titulo: "Sensor para Medir Água",
    texto: "O sensor de nível de água estará conectado ao Arduino e também à caixa d'água. Com isso, quando a caixa estiver cheia, o sistema emitirá um sinal verde; se estiver pela metade, um sinal amarelo; e, se estiver vazia, um sinal vermelho.",
    imagem: Sensor,
  },
  {
    titulo: "Celular - App",
    texto: "No nosso aplicativo, você terá a liberdade de conhecer melhor o nosso produto, além de acessar diversas funcionalidades importantes. Entre elas, será possível acompanhar em tempo real o consumo de energia em diferentes locais da sua residência, ajudando no controle e na economia de energia.",
    imagem: celular,
  },
];

const ProjetoBloco = ({ titulo, texto, imagem }) => (
  <div className="projeto-bloco-item">
    <div className="projeto-bloco-imagem-wrapper">
      <div className="projeto-bloco-bg-color"></div>
      <img src={imagem} alt={titulo} className="projeto-bloco-imagem" />
    </div>
    <div className="projeto-bloco-texto-wrapper">
      <h3 className="projeto-bloco-titulo-bloco">{titulo}</h3>
      <p className="projeto-bloco-texto-bloco">{texto}</p>
    </div>
  </div>
);

const WorkPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.body.classList.contains("dark"));
    };

    checkDarkMode();

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <img
          src={isDarkMode ? brandingAquaFastDARK : brandingAquaFast}
          alt="Aquafast Logo"
          className="logo-img"
        />
      </section>

      {/* Nossa Ideia */}
      <section className="ContainerIdeia">
        <div className="nossaIdeia-Conteudo-Lado-a-Lado">
          <div className="Ideia-Imagem-wrapper">
            <img src={IdeiaFoto} alt="Caneca AquaFast" className="Ideia-Imagem" />
          </div>
          <div className="nossaIdeia-bloco-texto">
            <h2 className="nossaIdeia-Titulo">Nossa Ideia</h2>
            <div className="nossaIdeia-Texto">
              <p>
                A ideia da empresa AQUAFAST é desenvolver uma solução inovadora e sustentável para geração de energia limpa,
                aproveitando um recurso natural muitas vezes desperdiçado: a água da chuva. Nosso objetivo é transformar essa
                água em eletricidade, utilizando um sistema composto por turbinas de microgeração, alternadores e dispositivos
                de armazenamento de energia, como baterias de longa duração.
              </p>
              <p>
                O funcionamento do sistema é simples e eficiente: a água da chuva captada será direcionada para uma caixa,
                onde a pressão e o fluxo movimentarão pequenas turbinas, responsáveis por gerar energia mecânica. Essa energia
                será então convertida em energia elétrica por meio de alternadores, e, posteriormente, armazenada em baterias
                para uso posterior, mesmo quando não houver chuva.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Objetivo do Projeto */}
      <section className="ObjetivoProjeto">
        <div className="Objetivo">
          <h2 className="ObjetivoTitulo">Objetivo do Projeto</h2>
          <div className="ObjetivoTexto">
            <p>
              A AquaFast utiliza as ferramentas mais adequadas e acessíveis para desenvolver este projeto, que é grande,
              inovador e repleto de desafios. Nosso objetivo é garantir eficiência, qualidade e funcionalidade em cada
              etapa do desenvolvimento.
            </p>
          </div>
        </div>

        <div className="ContainerObjetivoBlocos">
          {blocosProjeto.map((bloco, index) => (
            <ProjetoBloco key={index} {...bloco} />
          ))}
        </div>
      </section>

      {/* Nosso Projeto */}
      <section className="ContainerNossoProjeto">
        <div className="projeto-conteudo-lado-a-lado">
          <div className="Projeto-Imagem-wrapper">
            <img src={Tela} alt="Código de Programação" className="Projeto-Imagem" />
          </div>

          <div className="projeto-bloco-texto">
            <h2 className="Projeto-Titulo">Nosso Projeto</h2>
            <div className="Projeto-Texto">
              <p>
                O projeto que estamos desenvolvendo envolve programação e o uso de Arduino. Com os conhecimentos que
                adquirimos, conseguimos criar este site e o aplicativo, que servirão para que os usuários conheçam os
                planos que vamos oferecer e as localizações da nossa empresa, proporcionando um atendimento mais eficiente.
              </p>
              <p>
                Por meio do site, as pessoas poderão instalar nosso aplicativo, desenvolvido especialmente para ajudar a
                comunidade a monitorar o consumo de energia e identificar maneiras mais eficientes de reduzi-lo no dia a
                dia. O aplicativo oferece informações úteis, dicas de economia e ferramentas de medição.
              </p>
              <p>
                Além disso, os usuários terão acesso ao nosso suporte diretamente pelo site, onde poderão tirar dúvidas,
                relatar problemas ou buscar orientações sempre que precisarem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <ContactSection />
    </>
  );
};

export default WorkPage;
