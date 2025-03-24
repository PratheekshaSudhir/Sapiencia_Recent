import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';
import './HealthcareAI.css';
import { useState } from 'react';
import { ShieldCheck, Lock, Users } from "lucide-react";

const solutions_health = [
  {
    icon: "🔍",
    title: "AI-Driven Medical Imaging",
    description:
      "Early disease detection, anomaly identification, and advanced diagnostic support through state-of-the-art computer vision.",
  },
  {
    icon: "📈",
    title: "Predictive Analytics",
    description:
      "Reduce hospital readmissions, optimize resource utilization, and forecast patient volumes with precision machine learning models.",
  },
  {
    icon: "⚕️",
    title: "Anomaly Detection",
    description:
      "Identify rare diseases, detect adverse events, and improve patient safety through pattern recognition and anomaly detection.",
  },
  {
    icon: "🔒",
    title: "Regulatory Compliance",
    description:
      "Fully compliant with HIPAA, FDA guidelines, and secure data interoperability to maintain privacy and security standards.",
  },
];

const HealthcareAI = () => {
 
  return (
    <div className="healthcareai-container">
      <AnimatedBackground />
      <Navbar />
      <section className="healthcare-section">
      <h2>AI Solutions for Healthcare</h2>
      <p>
        Our AI solutions provide healthcare professionals with powerful tools to
        improve patient outcomes, reduce costs, and enhance operational
        efficiency.
      </p>
      <div className="solutions-health-container">
        {solutions_health.map((solution, index) => (
          <div className="solution-health-card" key={index}>
            <div className="icon">{solution.icon}</div>
            <h3>{solution.title}</h3>
            <p>{solution.description}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="compliance-section">
      <h2 className="section-title">Compliance & Security</h2>
      <p className="section-subtitle">
        Our solutions adhere to the highest standards of security and regulatory compliance.
      </p>

      <div className="compliance-container">
        {/* Comprehensive Compliance */}
        <div className="compliance-card">
          <h3>Comprehensive Compliance</h3>
          <ul className="compliance-list">
            <div className='list'>
              <div className='list-key'>
                <span className="check-icon">✔</span>
                <strong>HIPAA Compliance</strong> 
              </div>
              <div className='list-val'>
                Our systems are fully HIPAA compliant, ensuring patient data privacy and security.
              </div>
            </div>

            <div className='list'>
              <div className='list-key'>
                <span className="check-icon">✔</span>
                <strong>FDA Guidelines</strong> 
              </div>
              <div className='list-val'>
              All medical AI solutions adhere to FDA guidelines for AI/ML in healthcare.
              </div>
            </div>

            <div className='list'>
              <div className='list-key'>
                <span className="check-icon">✔</span>
                <strong>GDPR Ready</strong> <br />
              </div>
              <div className='list-val'>
              Built with GDPR compliance in mind for international deployment.
              </div>
            </div>

            <div className='list'>
              <div className='list-key'>
                <span className="check-icon">✔</span>
                <strong>SOC 2 Certified</strong> 
              </div>
              <div className='list-val'>
              SOC 2 Type II certified infrastructure ensures data security and availability.
              </div>
            </div>
          </ul>
        </div>

        {/* Secure Infrastructure */}
        <div className="compliance-card">
          <h3>Secure Infrastructure</h3>
          <div className="secure-feature">
            <div className="secure-icon"><Lock size={24} /></div>
            <div>
              <strong>End-to-End Encryption</strong>
              <p>All data is encrypted at rest and in transit with AES-256 encryption.</p>
            </div>
          </div>
          <div className="secure-feature">
            <div className="secure-icon"><ShieldCheck size={24} /></div>
            <div>
              <strong>Secure Interoperability</strong>
              <p>FHIR-compliant APIs ensure secure data exchange with existing systems.</p>
            </div>
          </div>
          <div className="secure-feature">
            <div className="secure-icon"><Users size={24} /></div>
            <div>
              <strong>Role-Based Access Control</strong>
              <p>Granular permissions ensure data access only to authorized personnel.</p>
            </div>
          </div>
        </div>
      </div>
    </section>


      <Footer />
    </div>
  );
};

export default HealthcareAI;
