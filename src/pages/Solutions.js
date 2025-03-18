import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';
import './Solutions.css';

const Solutions = () => {
  return (
    <div className="solutions-container">
      <AnimatedBackground />
      <Navbar />
      <div className="solutions-content">
        <h1>Our Solutions</h1>
        <p>
          Explore how Sapiencia.AI can help your organization leverage AI securely across 
          healthcare and defense operations.
        </p>

        <div className="solution-cards">
          <div className="solution-card">
            <h2>Healthcare AI Solutions</h2>
            <p>Advanced medical imaging, predictive analytics, and more.</p>
          </div>
          <div className="solution-card">
            <h2>Salus IAM for DoD</h2>
            <p>Zero trust identity & access management for mission-critical deployments.</p>
          </div>
          <div className="solution-card">
            <h2>Cybersecurity & AI Security</h2>
            <p>Penetration testing, AI-driven threat detection, compliance audits.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Solutions;
