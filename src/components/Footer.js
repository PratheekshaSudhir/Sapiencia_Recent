import React from 'react';
import './Footer.css';

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-company">
          <h3>Sapiencia.AI</h3>
          <p>
            AI-Driven Security &amp; Intelligence for Healthcare &amp; Defense,<br />
            ensuring the highest level of compliance and protection.
          </p>

          
        </div>
                

        <div className="footer-links">
          <h4>Solutions</h4>
          <ul>
            <li>Healthcare AI</li>
            <li>Salus IAM for DoD</li>
            <li>Cybersecurity &amp; AI Security</li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>dabis.camero@sapiencia.ai</p>
          <p>operations@sapiencia.ai</p>
          <p>+1 (223) 225-0608</p>
          <p> 1200 Market Street, Unit 17, PMB # 184, Lemoyne, Pennsylvania 17043, United States</p>

          {/* Social Icons Container */}
        <div className="social-media-icon-container">
            <a href="https://www.facebook.com/sapiencia.artificial.intelligence"><FaFacebookF className="w-5 h-5" /></a>
            <a href="#"><img src="/logo-white.png" alt='X-icon' className='xicon-logo'></img></a>
            <a href="https://github.com/dcsapienciaai/Sapiencia.AI"><FaLinkedin className="w-5 h-5" /></a>
            <a href="#"><FaInstagram className="w-5 h-5" /></a>
          </div>

        </div>

        


      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Sapiencia.AI. All rights reserved.</p>
        <p>Privacy Policy | Terms of Service</p>
      </div>
    </footer>
  );
};

export default Footer;
