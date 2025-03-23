import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  // const location = useLocation();
  // const isHome = location.pathname === '/';

  return (
    <nav className="navbar fixed-nav">
      <div className="navbar-logo">
        <a href="/">
        <img src="\no_backg_logo.jpeg" alt="Logo" className="navbar-logo-img" />
        Sapiencia.AI
        </a>
      </div>
      <ul className="navbar-links">
        <li><Link to="/solutions">Solutions</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="navbar-cta">
        <Link to="/contact" className="cta-button">Request Demo</Link>
      </div>
    </nav>
  );
};

export default Navbar;
