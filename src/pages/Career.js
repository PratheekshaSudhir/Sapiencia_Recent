import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';
import { motion } from 'framer-motion';
import './Career.css';
import { Link } from "react-router-dom";

const ExploreCareers = () => {
  return (
    <div className="careers-container">
      <AnimatedBackground />
      <Navbar />
      
      <header className="careers-hero">
        <motion.div
          className="careers-hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Join Our Team and Shape the Future</h1>
          <div className="separator"></div>
        </motion.div>
      </header>

      <section className="careers-list">
        <div className="careers-grid">
          <motion.div 
            className="career-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2>Software Engineer</h2>
            <p>Build and maintain cutting-edge applications.</p>
            <button className="apply-button">Apply Now</button>
          </motion.div>

          <motion.div 
            className="career-card"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2>UI/UX Designer</h2>
            <p>Design seamless user experiences and stunning visuals.</p>
            <button className="apply-button">Apply Now</button>
          </motion.div>
        </div>
      </section>

      <section className="careers-cta">
        <motion.div 
          className="cta-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>Be a Part of Something Bigger</h2>
          <p>We invite you to bring your talent, passion, and curiosity to our team and help shape the future.</p>
          <div className="cta-buttons">
            <Link to="/about" className="cta-button">About Us</Link>
            <a href="/contact" className="outline-button">Contact Us</a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default ExploreCareers;
