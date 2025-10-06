import React, { useEffect, useState } from 'react';
import LogoImg from '../images/Logo.png';
import LogoImgDark from '../images/LogoDark.png';

export const Logo = ({ className = '' }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Detecta se o body tem a classe "dark"
  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.body.classList.contains('dark'));
    };

    // Checa imediatamente
    checkDarkMode();

    // Observa mudanças na classe do body
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    // Limpa o observer ao desmontar o componente
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`logo ${className}`}>
      <img
        src={isDarkMode ? LogoImgDark : LogoImg}
        alt="Logo AquaFast"
        className="logo1-img"
      />
    </div>
  );
};
