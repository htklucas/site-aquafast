import React from 'react';
import { Logo } from './Logo';
import { ThemeToggle } from './ThemeToggle';

const Header = ({ theme, toggleTheme, currentPage, setPage }) => {

  // Função para mudar a página e ir para o topo
  const handleSetPage = (page) => {
    setPage(page);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); // scroll suave para o topo
  };

  const NavButton = ({ page, label }) => (
    <li>
      <button
        onClick={() => handleSetPage(page)}
        className={`nav-link ${currentPage === page ? 'active' : ''}`}
      >
        {label}
      </button>
    </li>
  );

  return (
    <header className="header">
      <nav className="container header-nav">
        <button 
          onClick={() => handleSetPage('home')} 
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            display: 'inline-flex'
          }}
        >
           <Logo />
        </button>
        <div className="header-links">
          <ul>
            <NavButton page="home" label="Página inicial" />
            <NavButton page="membros" label="Membros" />
            <NavButton page="trabalho" label="Trabalho" />
          </ul>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
