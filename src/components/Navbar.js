import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className={`navbar ${isHome ? 'fixed-nav' : ''}`}>
      <div className="navbar-logo">
        <a href="/">
        <img src="\Sapiencia_Logo.png" alt="Logo" className="navbar-logo-img" />
        Sapiencia AI
        </a>
      </div>
      <ul className="navbar-links">
        <li><Link to="/solutions">Solutions</Link></li>
        <li><Link to="/healthcare-ai">Healthcare AI</Link></li>
        <li><Link to="/salus-iam">Salus IAM</Link></li>
        <li><Link to="/cybersecurity">Cybersecurity</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="navbar-cta">
        <Link to="/contact" className="cta-button">Request Demo</Link>
      </div>
    </nav>
  );
};

export default Navbar;
