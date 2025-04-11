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
            {/* <motion.span
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
            >
                IL5/IL6
            </motion.span> */}
            <motion.span
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
            >
                HIPAA
            </motion.span>
            {/* <motion.span
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
            >
                FedRAMP
            </motion.span> */}
          </div>
        </motion.div>
      </header>

      {/* Core Offerings Section */}
      <section className="core-offerings">
        <motion.div
            className="section-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 ,delay: 0.2}}
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
              <p>AI-driven medical imaging, predictive analytics, and secure data platforms for healthcare providers handling sensitive patient information.</p>
              <Link to="/healthcare-ai" className="learn-more-button">Learn More</Link>
            </motion.div>

            <motion.div
              className="offering-card"
              whileHover={{ scale: 1.05 }}
            >
              <h3>Salus IAM for DoD</h3>
              <p>Zero Trust identity &amp; access management for tactical edge deployments with military-grade encryption and secure authentication.</p>
              <Link to="/salus-iam" className="learn-more-button">Learn More</Link>
            </motion.div>

            <motion.div
              className="offering-card"
              whileHover={{ scale: 1.05 }}
            >
              <h3>Cybersecurity &amp; AI Security</h3>
              <p>Comprehensive penetration testing, AI-driven threat detection, and compliance audits for federal and healthcare systems.</p>
              <Link to="/cybersecurity" className="learn-more-button">Learn More</Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Why Us Section */}
      <section className="why-us-section">
        <motion.div
          className="section-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{once:false,amount:0.6}}
        >
          <h1 className='why-us-head'>Why Choose Sapiencia.AI?</h1>
          <p className="why-us-intro">
            Our unique combination of government security expertise and healthcare AI innovation
            sets us apart in a crowded marketplace.
          </p>
          
          <div className="why-us-cards">
            <motion.div 
              className="why-us-card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{once:false,amount:0.6}}
            >
              <div className="why-us-icon security-icon"></div>
              <h3>Military-Grade Security</h3>
              <p>
                Built from the ground up with DoD-level security protocols and 
                compliance frameworks to protect the most sensitive data.
              </p>
            </motion.div>
            
            <motion.div 
              className="why-us-card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{once:false,amount:0.6}}
            >
              <div className="why-us-icon deployment-icon"></div>
              <h3>Rapid Deployment</h3>
              <p>
                Our solutions can be deployed in secure, air-gapped environments with 
                minimal infrastructure requirements, even at the tactical edge.
              </p>
            </motion.div>
            
            <motion.div 
              className="why-us-card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{once:false,amount:0.6}}
            >
              <div className="why-us-icon compliance-icon"></div>
              <h3>Built-in Compliance</h3>
              <p>
                Solutions that meet HIPAA, DISA STIG, FedRAMP, and other critical 
                compliance requirements out of the box.
              </p>
            </motion.div>
          </div>
          
        </motion.div>
      </section>

      {/* Security Standards */}
      <section className="security-standards">
        <motion.div
            className="section-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 ,delay: 0.2}}
            viewport={{once:false,amount:0.6}}
          >
          <h2>Meeting the Highest Security Standards</h2>
          <p>
            Our solutions comply with the most stringent federal security requirements
            and are designed for classified environments.
          </p>
          <div className="standards-list">
            <motion.span whileHover={{ scale: 1.1, y: -5 }} transition={{ duration: 0.3 }}>DISA STIG</motion.span>
            <motion.span whileHover={{ scale: 1.1, y: -5 }} transition={{ duration: 0.3 }}>NIST 800-53</motion.span>
            {/* <motion.span whileHover={{ scale: 1.1, y: -5 }} transition={{ duration: 0.3 }}>IL5/IL6</motion.span> */}
            <motion.span whileHover={{ scale: 1.1, y: -5 }} transition={{ duration: 0.3 }}>HIPAA</motion.span>
            {/* <motion.span whileHover={{ scale: 1.1, y: -5 }} transition={{ duration: 0.3 }}>FedRAMP</motion.span> */}
            {/* <motion.span whileHover={{ scale: 1.1, y: -5 }} transition={{ duration: 0.3 }}>CMMC</motion.span> */}
            <motion.span whileHover={{ scale: 1.1, y: -5 }} transition={{ duration: 0.3 }}>Section 508</motion.span>
            <motion.span whileHover={{ scale: 1.1, y: -5 }} transition={{ duration: 0.3 }}>FIPS 140-2</motion.span>
            <motion.span whileHover={{ scale: 1.1, y: -5 }} transition={{ duration: 0.3 }}>CSF</motion.span>
            <motion.span whileHover={{ scale: 1.1, y: -5 }} transition={{ duration: 0.3 }}>FISMA</motion.span>
          </div>
        </motion.div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <motion.div
            className="section-content"
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
            <Link to="/contact" className="cta-button">Contact Sales</Link>
            {/* <a href="/whitepaper.pdf" className="outline-button" target="_blank" rel="noopener noreferrer">
              Download Whitepaper
            </a> */}
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;