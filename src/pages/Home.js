import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <AnimatedBackground />
      <Navbar />
      <header className="hero-section">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{once:false,amount:0.6}}
          
        >
          <h1>AI-Driven Security &amp; Intelligence for Healthcare &amp; Defense</h1>
          <p>
            Sapiencia.AI delivers cutting-edge AI solutions with military-grade security
            for federal agencies and healthcare organizations.
          </p>
          <div className="hero-cta">
            <Link to="/solutions" className="cta-button">Explore Our Solutions</Link>
            <Link to="/contact" className="outline-button">Contact Us for Federal Contracts</Link>
          </div>
          
          <div className="compliance-badges">
        <motion.span
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
        >
            DISA STIG
        </motion.span>
        <motion.span
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
        >
            NIST 800-53
        </motion.span>
        <motion.span
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
        >
            IL5/IL6
        </motion.span>
        <motion.span
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
        >
            HIPAA
        </motion.span>
        <motion.span
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
        >
            FedRAMP
        </motion.span>
    </div>
          
    </motion.div>
    </header>

      {/* Core Offerings Section */}
      <section className="core-offerings">
      <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{once:false,amount:0.6}}
          
        >
        <h2>Federal-Grade AI &amp; Security Solutions</h2>
        <p>
          Our solutions are designed specifically for federal agencies and healthcare organizations
          with the highest security and compliance requirements.
        </p>
        
        <div className="offerings-grid">
          <motion.div
            className="offering-card"
            whileHover={{ scale: 1.05 }}
          >
            <h3>Healthcare AI Solutions</h3>
            <p>AI-driven medical imaging, predictive analytics, and secure data platforms.</p>
            <Link to="/healthcare-ai">View Details</Link>
            
          </motion.div>

          <motion.div
            className="offering-card"
            whileHover={{ scale: 1.05 }}
          >
            <h3>Salus IAM for DoD</h3>
            <p>Zero Trust identity &amp; access management for tactical edge deployments.</p>
            <Link to="/salus-iam">View Details</Link>
          </motion.div>

          <motion.div
            className="offering-card"
            whileHover={{ scale: 1.05 }}
          >
            <h3>Cybersecurity &amp; AI Security</h3>
            <p>Penetration testing, AI-driven threat detection, and compliance audits.</p>
            <Link to="/cybersecurity">View Details</Link>
          </motion.div>
        </div>
        </motion.div>
      </section>

      {/* Security Standards */}
      <section className="security-standards">
      <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{once:false,amount:0.6}}
          
        >
        <h2>Meeting the Highest Security Standards</h2>
        <p>
          Our solutions comply with the most stringent federal security requirements
          and are designed for classified environments.
        </p>
        <div className="standards-list">
          <span>DISA STIG</span>
          <span>NIST 800-53</span>
          <span>IL5/IL6</span>
          <span>HIPAA</span>
          <span>FedRAMP</span>
          <span>CMMC</span>
          <span>Section 508</span>
          <span>FIPS 140-2</span>
          <span>CSF</span>
          <span>FISMA</span>
        </div>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
      <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{once:false,amount:0.6}}
          
        >
        <h2>Trusted by Defense &amp; Healthcare Leaders</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>
              “Sapiencia.AI’s secure IAM solution has transformed our operations, 
              providing military-grade security and exceptional ease of deployment.”
            </p>
            <h4>Col. James Harding</h4>
            <span>Chief Information Security Officer, US Defense Contractor</span>
          </div>
          <div className="testimonial-card">
            <p>
              “Their healthcare AI platform helped us reduce readmission rates by 28% 
              while maintaining the highest level of data privacy.”
            </p>
            <h4>Dr. Sarah Chen</h4>
            <span>Director of Healthcare Innovations, National Medical Center</span>
          </div>
          <div className="testimonial-card">
            <p>
              “Implementing Sapiencia.AI’s zero-trust architecture has strengthened our 
              security posture across all sites. Their compliance expertise was invaluable.”
            </p>
            <h4>Michael Torres</h4>
            <span>IT Director, Major Health System</span>
          </div>
        </div>
        </motion.div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
      <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{once:false,amount:0.6}}
          
        >
        <h2>Ready for AI-Powered Security?</h2>
        <p>
          Deploy cutting-edge AI solutions with the highest security standards for your federal agency
          or healthcare organization.
        </p>
        <div className="final-cta-buttons">
          <Link to="/contact" className="cta-button">Request Demo</Link>
          <a href="/whitepaper.pdf" className="outline-button" target="_blank" rel="noopener noreferrer">
            Download Whitepaper
          </a>
        </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
