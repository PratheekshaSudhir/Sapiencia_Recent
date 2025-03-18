import React from 'react';
import './Footer.css';

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
          <p>federal@sapiencia.ai</p>
          <p>+1 (800) 555-1234</p>
          <p>1000 Defense Plaza, Suite 300, Arlington, VA 22209</p>
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
