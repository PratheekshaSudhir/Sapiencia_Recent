import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';
import './Cybersecurity.css';

const Cybersecurity = () => {
  return (
    <div className="cybersecurity-container">
      <AnimatedBackground />
      <Navbar />
      <div className="cybersecurity-content">
        <h1>Cybersecurity &amp; AI System Security</h1>
        <p>
          Protect your organization with AI-driven threat detection, penetration testing, 
          and cybersecurity audits designed for federal standards.
        </p>

        <div className="cybersecurity-section">
          <h2>Penetration Testing</h2>
          <p>Simulated cyberattacks to identify vulnerabilities in AI-driven systems.</p>
        </div>

        <div className="cybersecurity-section">
          <h2>Cybersecurity Auditing</h2>
          <p>Ensures AI models and infrastructure meet security & compliance standards.</p>
        </div>

        <div className="cybersecurity-section">
          <h2>AI-Driven Threat Detection</h2>
          <p>Real-time defense against adversarial AI threats and zero-day exploits.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cybersecurity;
