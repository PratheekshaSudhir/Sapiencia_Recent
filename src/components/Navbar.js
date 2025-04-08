import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar fixed-nav">
        <div className="navbar-left">
          <a href="/" className="navbar-logo">
            <img src="/no_backg_logo.jpeg" alt="Logo" className="navbar-logo-img" />
            <div className="company_name">Sapiencia.AI</div>
          </a>
        </div>

        <button className="navbar-toggle" onClick={toggleMenu}>
          ☰
        </button>

        <div className="navbar-links-desktop">
          <ul className="navbar-links">
            <li><Link to="/solutions">Solutions</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <div className="navbar-cta">
            <Link to="/contact" className="cta-button-demo">Request Demo</Link>
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      <div className={`navbar-dropdown ${isMenuOpen ? 'active' : ''}`}>
        <ul className="navbar-links-mobile">
          <li><Link to="/solutions" onClick={closeMenu}>Solutions</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
        <div className="navbar-cta-mobile">
          <Link to="/contact" className="cta-button-demo" onClick={closeMenu}>Request Demo</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
