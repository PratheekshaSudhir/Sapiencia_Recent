import React from 'react';
import { Link } from 'react-router-dom';
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
        <h1 className="solutions-heading">Our Solutions</h1>
        <p className="solutions-description">
          Explore how Sapiencia.AI can help your organization leverage AI securely across 
          healthcare and defense operations.
        </p>

        <div className="solution-cards">
          <div className="solution-card">
            <h2>Healthcare AI Solutions</h2>
            <p>
              Revolutionize patient care with our advanced medical imaging analytics, 
              predictive health monitoring, and clinical decision support systems. 
              Our AI solutions are designed to enhance diagnostic accuracy while 
              maintaining the highest standards of data privacy.
            </p>
            <Link to="/healthcare-ai" className="learn-more-btn">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
          
          <div className="solution-card">
            <h2>Salus IAM for DoD</h2>
            <p>
              Secure your mission-critical deployments with our zero trust identity 
              and access management platform. Built specifically for defense applications, 
              Salus IAM provides continuous verification, granular access controls, 
              and seamless integration with existing security infrastructure.
            </p>
            <Link to="/salus-iam" className="learn-more-btn">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
          
          <div className="solution-card">
            <h2>Cybersecurity & AI Security</h2>
            <p>
              Protect your AI systems and sensitive data with our comprehensive 
              cybersecurity solutions. We offer advanced penetration testing, 
              AI-driven threat detection, compliance audits, and security assessments 
              tailored to your organization's unique requirements.
            </p>
            <Link to="/cybersecurity" className="learn-more-btn">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )};

export default Solutions;
