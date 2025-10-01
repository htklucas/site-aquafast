import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import MembersPage from './pages/MembersPage';
import WorkPage from './pages/WorkPage';
import Header from './components/Header';
import { useTheme } from './hooks/useTheme';

const App = () => {
  const { theme, toggleTheme } = useTheme();
  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch (page) {
      case 'membros':
        return <MembersPage />;
      case 'trabalho':
        return <WorkPage />;
      case 'home':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="app">
      <Header
        theme={theme}
        toggleTheme={toggleTheme}
        currentPage={page}
        setPage={setPage}
      />
      <main>{renderPage()}</main>
    </div>
  );
};

export default App;