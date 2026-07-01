import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="container">
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

      <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
        <NavLink to="/works" onClick={() => setIsOpen(false)}>Loyihalar</NavLink>
        <NavLink to="/blog" onClick={() => setIsOpen(false)}>Blog</NavLink>
        <NavLink to="/contact" onClick={() => setIsOpen(false)}>Aloqa</NavLink>
      </nav>
    </header>
  );
};

export default Header;
