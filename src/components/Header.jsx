import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang, theme, setTheme, t } = useContext(AppContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleLanguageChange = (event) => {
    setLang(event.target.value);
    setIsOpen(false);
  };

  return (
    <header className="container">
      <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
        <NavLink to="/" onClick={() => setIsOpen(false)}>{t.nav.home}</NavLink>
        <NavLink to="/works" onClick={() => setIsOpen(false)}>{t.nav.works}</NavLink>
        <NavLink to="/blog" onClick={() => setIsOpen(false)}>{t.nav.blog}</NavLink>
        <NavLink to="/contact" onClick={() => setIsOpen(false)}>{t.nav.contact}</NavLink>
      </nav>

      <div className="header-actions">
        <div className="language-picker">
        
          <select id="language-select" value={lang} onChange={handleLanguageChange}>
            <option value="uz">{t.langNames.uz}</option>
            <option value="ru">{t.langNames.ru}</option>
            <option value="en">{t.langNames.en}</option>
          </select>
        </div>
        <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={`Toggle theme (current: ${theme})`}>
          <span className="theme-icon">{theme === 'dark' ? '🌙' : '☀️'}</span>
        </button>
        <button className="menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? (
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
