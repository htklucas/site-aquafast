import React, { useEffect, useState } from "react";
import { Logo } from "../components/Logo";

import missaoImg from "../images/home/missaoEmpresa.png";
import missaoImgDARK from "../images/home/missaoEmpresaDARK.png";

import visaoImg from "../images/home/visaoEmpresa.png";
import valoresImg from "../images/home/valoresEmpresa.png";

import sobreImg from "../images/home/sobreEmpresa.png";
import sobreImgDARK from "../images/home/sobreEmpresaDARK.png";

import cartazAquaFast from "../images/home/cartazAquaFast.png";
import cartazAquaFastDARK from "../images/home/cartazAquaFastDARK.png";

import googlePlayImg from "../images/home/googlePlay.png";
import appStoreImg from "../images/home/appStore.png";
import qrCodeImg from "../images/home/qrcodeEmpresa.png";
import phoneImg from "../images/home/phone.png";

import brandingAquaFast from "../images/BrandingAquaFast.png";
import brandingAquaFastDARK from "../images/BrandingAquaFastDARK.png";


import ContactSection from "../components/ContactSection";

const HomePage = () => {
  // ✅ Estado que controla se o tema atual é "dark"
  const [isDarkMode, setIsDarkMode] = useState(false);

  // ✅ Detecta mudanças na classe do body (tema claro/escuro)
  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.body.classList.contains("dark"));
    };

    // Executa uma vez ao carregar
    checkDarkMode();

    // Escuta mudanças no atributo "class" do body
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <img src={isDarkMode ? brandingAquaFastDARK : brandingAquaFast} alt="Aquafast Logo" className="logo-img" />
      </section>  

      {/* Sobre Nós */}
      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-image-wrapper">
              <img
                src={isDarkMode ? sobreImgDARK : sobreImg}
                alt="Fachada do escritório AquaFast"
                className="about-image"
              />
            </div>
            <div className="about-content">
              <h2 className="about-title">Sobre Nós</h2>
              <div className="about-text">
                <p>
                  AquaFast é uma empresa inovadora que surge com o propósito de impactar positivamente a comunidade por meio do uso consciente e sustentável dos recursos naturais. Nosso principal objetivo é ajudar as pessoas a monitorarem e controlarem o consumo de água e eletricidade em suas residências ou comércios, promovendo economia e sustentabilidade.
                </p>
                <p>
                  Por meio de tecnologia acessível e inteligente, a AquaFast irá oferecer dispositivos capazes de medir em tempo real o nível de uso da água e da energia elétrica, permitindo que o usuário visualize seus padrões de consumo e identifique oportunidades para reduzir desperdícios.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objetivos */}
      <section className="objectives-section">
        <div className="container">
          <h2 className="objectives-title">Nossos Principais Objetivos</h2>
          <p className="objectives-subtitle">
            A AquaFast está comprometida em oferecer soluções inteligentes, acessíveis e sustentáveis para todas as pessoas que desejam economizar recursos, cuidar do meio ambiente e viver de forma mais consciente.
          </p>
          <div className="objectives-grid">
            <div className="objective-card">
              <img src={isDarkMode ? missaoImgDARK : missaoImg} alt="Missão" className="objective-image" />
              <h3 className="objective-title">Missão</h3>
              <p className="objective-text">
                É uma empresa que busca ajudar a comunidade encontrando formas inteligentes de transformar a água da chuva em energia elétrica. Queremos ajudar a comunidade com o nosso dispositivo e aplicativo.
              </p>
            </div>
            <div className="objective-card">
              <img src={visaoImg} alt="Visão" className="objective-image" />
              <h3 className="objective-title">Visão</h3>
              <p className="objective-text">
                É uma empresa que busca ajudar a comunidade encontrando formas inteligentes de transformar a água da chuva em energia elétrica. Queremos ajudar a comunidade com o nosso dispositivo e aplicativo.
              </p>
            </div>
            <div className="objective-card">
              <img src={valoresImg} alt="Valores" className="objective-image" />
              <h3 className="objective-title">Valores</h3>
              <p className="objective-text">
                Busca constante por novas tecnologias e soluções criativas para ajudar a comunidade a medir e reduzir o consumo de água e eletricidade de maneira eficiente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cartaz */}
      <section className="cartaz-section">
        <img
          src={isDarkMode ? cartazAquaFastDARK : cartazAquaFast}
          alt="Cartaz AquaFast na rua"
          className="cartaz-image"
        />
      </section>

      {/* App Download */}
      <section className="download-section">
        <div className="container download-container">
          <div className="download-content">
            <h2 className="download-title">Nosso Aplicativo</h2>
            <p className="download-text">
              É uma empresa que busca ajudar a comunidade encontrando formas inteligentes de transformar a água da chuva em energia elétrica. Queremos ajudar a comunidade com o nosso app
              vai além do simples controle: ele oferece dicas personalizadas de economia, mostra relatórios de uso e alerta quando há desperdícios.
              Um dos nossos diferenciais é o acompanhamento do sistema que transforma água da chuva em eletricidade — uma solução sustentável que está sendo desenvolvida para tornar o uso da energia mais acessível e consciente. O dispositivo e aplicativo
            </p>

            <div className="download-buttons">
              <img src={googlePlayImg} alt="Google Play" className="store-badge" />
              <img src={appStoreImg} alt="App Store" className="store-badge" />
              <img src={qrCodeImg} alt="QR Code" className="qr-code" />
            </div>
          </div>

          <div className="download-image-wrapper">
            <img src={phoneImg} alt="App no celular" className="download-image" />
          </div>
        </div>
      </section>

      {/* Contato */}
      <ContactSection />
    </>
  );
};

export default HomePage;
