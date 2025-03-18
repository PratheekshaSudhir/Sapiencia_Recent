import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';
import './HealthcareAI.css';

const HealthcareAI = () => {
  return (
    <div className="healthcareai-container">
      <AnimatedBackground />
      <Navbar />
      <div className="healthcareai-content">
        <h1>Healthcare AI Solutions</h1>
        <p>
          Sapiencia.AI provides AI-driven medical imaging, predictive analytics, and secure data 
          platforms to enhance patient outcomes and streamline healthcare operations.
        </p>

        <div className="healthcareai-section">
          <h2>AI-Driven Medical Imaging</h2>
          <p>Early disease detection, anomaly identification, and advanced diagnostic support.</p>
        </div>

        <div className="healthcareai-section">
          <h2>Predictive Analytics</h2>
          <p>Reduce hospital readmissions, optimize resource utilization, and forecast patient volumes.</p>
        </div>

        <div className="healthcareai-section">
          <h2>Anomaly Detection</h2>
          <p>Identify rare diseases, detect adverse events, and improve patient safety.</p>
        </div>

        <div className="healthcareai-section">
          <h2>Regulatory Compliance</h2>
          <p>Fully compliant with HIPAA, FDA guidelines, and secure data interoperability.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HealthcareAI;
