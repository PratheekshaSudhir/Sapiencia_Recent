import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <AnimatedBackground />
      <Navbar />
      
      <header className="about-hero">
        <motion.div
          className="about-hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Pioneering AI-driven security solutions for healthcare and defense sectors</h1>
          <div className="separator"></div>
          
        </motion.div>
      </header>

      <section className="about-mission">
        <div className="about-grid">
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            
            <div className="image-placeholder animated-bg">
            <img 
              src="/logo_motion.gif" 
              alt="Animated representation" 
              className="about-gif"
              />
              {/* <div className="floating-shape "></div>
              <div className="floating-shape "></div>
              <div className="floating-shape "></div>*/}
              </div> 
             
          </motion.div>
         
          <motion.div 
            className="about-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2>Our Mission</h2>
            <div className="underline"></div>
            <p>At Sapiencia.AI, our mission is to harness the power of artificial intelligence to solve critical security challenges for healthcare providers and defense agencies. We are dedicated to developing AI solutions that protect sensitive information, enhance operational efficiency, and ultimately save lives.</p>
            <p>Founded by a team of security experts and AI researchers, we bring together deep technical expertise with a profound understanding of the unique requirements of federal agencies and healthcare organizations.</p>
          </motion.div>
        </div>
      </section>

      <section className="about-values">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          Our Core Values
        </motion.h2>
        <div className="values-grid">
          <motion.div 
            className="value-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: false, amount: 0.3 }}
            whileHover={{ y: -10 }}
          >
            <div className="value-icon security"></div>
            <h3>Security First</h3>
            <p>We build products with security as the foundation, not an afterthought. Every decision we make prioritizes the protection of sensitive data and critical infrastructure.</p>
          </motion.div>
          
          <motion.div 
            className="value-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            whileHover={{ y: -10 }}
          >
            <div className="value-icon innovation"></div>
            <h3>Ethical Innovation</h3>
            <p>We push the boundaries of AI while maintaining the highest ethical standards. Our innovations are designed to enhance human capabilities, not replace them.</p>
          </motion.div>
          
          <motion.div 
            className="value-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
            whileHover={{ y: -10 }}
          >
            <div className="value-icon compliance"></div>
            <h3>Regulatory Excellence</h3>
            <p>We excel at navigating complex regulatory landscapes, ensuring our solutions exceed compliance requirements while remaining adaptable to evolving standards.</p>
          </motion.div>
          
          <motion.div 
            className="value-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: false, amount: 0.3 }}
            whileHover={{ y: -10 }}
          >
            <div className="value-icon impact"></div>
            <h3>Meaningful Impact</h3>
            <p>We measure our success by the tangible difference our technology makes for our clients and the people they serve, from patients to military personnel.</p>
          </motion.div>
        </div>
      </section>

      <section className="about-team">
        <motion.div 
          className="team-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>Leadership Team</h2>
          <div className="underline"></div>
          <p>Our leadership team brings together decades of experience in artificial intelligence, cybersecurity, healthcare IT, and defense technology. With backgrounds ranging from the Department of Defense and intelligence agencies to leading research institutions and healthcare organizations, our team understands the critical intersection of security, compliance, and innovation.</p>
        </motion.div>
        
        <div className="team-grid">
          <motion.div 
            className="team-member"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            whileHover={{ y: -5 }}
          >
            <div className="member-photo"></div>
            <h3>Dabis Camero</h3>
            <p>Innovative Leader in AI/ML, Cybersecurity, and IAM Solutions </p>
            <span>AI/ML and Cybersecurity expert specializing in IAM, IGA, and next-gen security solutions.</span>
          </motion.div>
          
          <motion.div 
            className="team-member"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: false, amount: 0.3 }}
            whileHover={{ y: -5 }}
          >
            <div className="member-photo"></div>
            <h3>Dr. Jason Elroy Martis</h3>
            <p>Associate Professor</p>
            <span>Expert in Deep Learning, Computer Vision, and AI with 15+ years of research and teaching experience.</span>
          </motion.div>
          
          <motion.div 
            className="team-member"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            whileHover={{ y: -5 }}
          >
            <div className="member-photo"></div>
            <h3>Dr. Sannidhan M S</h3>
            <p>Associate Professor</p>
            <span>Expert in Image Processing, Machine Learning, and Quantum AI, with a strong passion for research and teaching.</span>
          </motion.div>
        </div>
      </section>

      <section className="about-approach">
        <motion.div 
          className="approach-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>Our Approach</h2>
          <div className="underline"></div>
          <p>We believe that true security comes from a deep understanding of both the technological landscape and the human elements at play. Our approach combines:</p>
          
          <div className="approach-points">
            <motion.div 
              className="approach-point"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <span>01</span>
              <div>
                <h3>Rigorous AI Ethics</h3>
                <p>Every solution we build undergoes extensive ethical review to ensure responsible AI deployment.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="approach-point"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <span>02</span>
              <div>
                <h3>Security by Design</h3>
                <p>Security isn't an add-on—it's woven into every line of code and every system architecture decision.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="approach-point"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <span>03</span>
              <div>
                <h3>Human-Centered Solutions</h3>
                <p>We design for the people who use our systems, ensuring intuitive interfaces that enhance decision-making.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="approach-point"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <span>04</span>
              <div>
                <h3>Continuous Adaptation</h3>
                <p>Our solutions evolve with the threat landscape, continuously learning and improving.</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="about-cta">
        <motion.div 
          className="cta-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>Join Us in Our Mission</h2>
          <p>Whether you're looking to secure your healthcare data, enhance defense operations, or join our team, we invite you to be part of our journey toward a more secure future.</p>
          <div className="cta-buttons">
            <a href="/contact" className="cta-button">Contact Us</a>
            <a href="/careers" className="outline-button">Explore Careers</a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default About;