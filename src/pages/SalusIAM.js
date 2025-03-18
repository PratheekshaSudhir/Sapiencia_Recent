import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';
import './SalusIAM.css';

const SalusIAM = () => {
  return (
    <div className="salusiam-container">
      <AnimatedBackground />
      <Navbar />
      <div className="salusiam-content">
        <h1>Salus IAM for DoD</h1>
        <p>
          Zero Trust Security – Identity-based access at every level. 
          Designed for disconnected, degraded, intermittent, and limited-bandwidth (DDIL) environments.
        </p>

        <div className="salusiam-section">
          <h2>Zero Trust Architecture</h2>
          <p>Identity-based access control with continuous verification for every request.</p>
        </div>

        <div className="salusiam-section">
          <h2>Tactical Edge Deployment</h2>
          <p>Works seamlessly in DDIL scenarios, ensuring mission continuity.</p>
        </div>

        <div className="salusiam-section">
          <h2>DoD-Specific Compliance</h2>
          <p>IL5/IL6 authorization, NIST 800-53, DISA STIG compliance.</p>
        </div>

        <div className="salusiam-section">
          <h2>Phishing-Resistant Authentication</h2>
          <p>FIDO2, CAC/PIV integration, and cross-agency identity federation for JADC2.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SalusIAM;
