import React from 'react';
import { Logo } from '../components/Logo';

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
                <img
            src="https://media.discordapp.net/attachments/1092992349388414976/1422698443914219672/Aquafast.png?ex=68dd9ead&is=68dc4d2d&hm=c3bb5571b81296ac567d5afa455e7bd46d5b48aa5d9ebd4446bd2f09168896ea&=&format=webp&quality=lossless&width=731&height=534"
            alt="Aquafast Logo"
            className="logo-img"
        />

      </section>

      {/* About Us Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-image-wrapper">
              <img
                src=""
                alt="Fachada do escritório AquaFast"
                className="about-image"
              />
              <div className="about-image-overlay">
                  <Logo className="logo-overlay"/>
              </div>
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
      {/* Objectives Section */}
      <section className="objectives-section">
        <div className="container">
          <h2 className="objectives-title">Nossos Principais Objetivos</h2>
          <p className="objectives-subtitle">
            A AquaFast está comprometida em oferecer soluções inteligentes, acessíveis e sustentáveis para todas as pessoas que desejam economizar recursos, cuidar do meio ambiente e viver de forma mais consciente.
          </p>
          <div className="objectives-grid">
            <div className="objective-card">
              <img src="https://media.istockphoto.com/id/1316134499/pt/foto/a-concept-image-of-a-magnifying-glass-on-blue-background-with-a-word-example-zoom-inside-the.jpg?s=612x612&w=0&k=20&c=raTXPP4qnJy_svR1J6dOYeoonbJOWeezfvGd9mAE5vo=" alt="Missão" className="objective-image" />
              <h3 className="objective-title">Missão</h3>
              <p className="objective-text">
                É uma empresa que busca ajudar a comunidade encontrando formas inteligentes de transformar a água da chuva em energia elétrica. Queremos ajudar a comunidade com o nosso dispositivo e aplicativo.
              </p>
            </div>
            <div className="objective-card">
              <img src="https://media.istockphoto.com/id/1316134499/pt/foto/a-concept-image-of-a-magnifying-glass-on-blue-background-with-a-word-example-zoom-inside-the.jpg?s=612x612&w=0&k=20&c=raTXPP4qnJy_svR1J6dOYeoonbJOWeezfvGd9mAE5vo=" alt="Visão" className="objective-image" />
              <h3 className="objective-title">Visão</h3>
              <p className="objective-text">
                É uma empresa que busca ajudar a comunidade encontrando formas inteligentes de transformar a água da chuva em energia elétrica. Queremos ajudar a comunidade com o nosso dispositivo e aplicativo.
              </p>
            </div>
            <div className="objective-card">
              <img src="https://media.istockphoto.com/id/1316134499/pt/foto/a-concept-image-of-a-magnifying-glass-on-blue-background-with-a-word-example-zoom-inside-the.jpg?s=612x612&w=0&k=20&c=raTXPP4qnJy_svR1J6dOYeoonbJOWeezfvGd9mAE5vo=" alt="Valores" className="objective-image" />
              <h3 className="objective-title">Valores</h3>
              <p className="objective-text">
                Busca constante por novas tecnologias e soluções criativas para ajudar a comunidade a medir e reduzir o consumo de água e eletricidade de maneira eficiente.
              </p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default HomePage;
