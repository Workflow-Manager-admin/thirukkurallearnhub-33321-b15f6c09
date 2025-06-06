import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './App.css';

// PUBLIC_INTERFACE
/**
 * A persistent, responsive Navigation Bar with branding/logo, links (Home, About, Quiz).
 * Always shows all nav links regardless of device size, no collapsing or extra clicks.
 */
function NavigationBar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="container nav-flex">
        <div className="logo" style={{ zIndex: 102 }}>
          <span className="logo-symbol">*</span> KAVIA AI
        </div>
        {/* Always expanded nav links, no toggler on mobile */}
        <div className="navbar-links navbar-links-always">
          <Link
            to="/"
            className={`navbar-link${location.pathname === '/' ? ' active' : ''}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`navbar-link${location.pathname === '/about' ? ' active' : ''}`}
          >
            About
          </Link>
          <Link
            to="/quiz"
            className={`navbar-link${location.pathname === '/quiz' ? ' active' : ''}`}
          >
            Quiz
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
