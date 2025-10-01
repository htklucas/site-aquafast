import React from 'react';
import { Logo } from './Logo';
import { ThemeToggle } from './ThemeToggle';

const Header = ({ theme, toggleTheme, currentPage, setPage }) => {

  const NavButton = ({ page, label }) => (
    <li>
      <button
        onClick={() => setPage(page)}
        className={`nav-link ${currentPage === page ? 'active' : ''}`}
      >
        {label}
      </button>
    </li>
  );

  return (
    <header className="header">
      <nav className="container header-nav">
        <button onClick={() => setPage('home')} style={{background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'inline-flex'}}>
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
