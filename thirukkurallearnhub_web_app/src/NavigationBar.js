import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './App.css';

// PUBLIC_INTERFACE
/**
 * A persistent, responsive Navigation Bar with branding/logo, links (Home, About, Quiz).
 * Collapses into a mobile menu (hamburger toggle) on small screens.
 */
function NavigationBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleToggle = () => setMobileOpen((open) => !open);
  const handleNavClick = () => setMobileOpen(false);

  return (
    <nav className="navbar">
      <div className="container nav-flex">
        <div className="logo" style={{ zIndex: 102 }}>
          <span className="logo-symbol">*</span> KAVIA AI
        </div>
        <button
          className="navbar-toggle"
          aria-label="Toggle navigation menu"
          onClick={handleToggle}
        >
          <span className="navbar-toggle-bar" />
          <span className="navbar-toggle-bar" />
          <span className="navbar-toggle-bar" />
        </button>
        <div className={`navbar-links ${mobileOpen ? 'open' : ''}`}>
          <Link
            to="/"
            className={`navbar-link${location.pathname === '/' ? ' active' : ''}`}
            onClick={handleNavClick}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`navbar-link${location.pathname === '/about' ? ' active' : ''}`}
            onClick={handleNavClick}
          >
            About
          </Link>
          <Link
            to="/quiz"
            className={`navbar-link${location.pathname === '/quiz' ? ' active' : ''}`}
            onClick={handleNavClick}
          >
            Quiz
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
