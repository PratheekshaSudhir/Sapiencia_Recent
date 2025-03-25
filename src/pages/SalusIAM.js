import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';
import { FaShieldAlt, FaServer, FaCheckCircle, FaGlobe, FaLock, FaDatabase } from "react-icons/fa";
import './SalusIAM.css';
import { useState } from 'react';
import { FaFileAlt } from 'react-icons/fa';
import DownLoadForm from '../components/DownLoadForm';
const features = [
  {
    icon: <FaShieldAlt className="salus-feature-icon" />,
    title: "Zero Trust Security",
    description:
      "Identity-based access at every level, ensuring complete verification before granting access to resources.",
  },
  {
    icon: <FaServer className="salus-feature-icon" />,
    title: "Tactical Edge Deployment",
    description:
      "Works in disconnected, degraded environments (DDIL), perfect for tactical operations.",
  },
  {
    icon: <FaCheckCircle className="salus-feature-icon" />,
    title: "DoD-Specific Compliance",
    description:
      "IL5/IL6 authorization, NIST 800-53, DISA STIG compliant for immediate deployment.",
  },
  {
    icon: <FaGlobe className="salus-feature-icon" />,
    title: "Multi-Domain Federation",
    description:
      "Cross-agency identity integration for JADC2, enabling seamless collaboration.",
  },
  {
    icon: <FaLock className="salus-feature-icon" />,
    title: "Phishing-Resistant Authentication",
    description:
      "FIDO2, CAC/PIV integration for hardware-backed security tokens.",
  },
  {
    icon: <FaDatabase className="salus-feature-icon" />,
    title: "Flexible Deployment",
    description:
      "Cloud (AWS GovCloud, Azure Government) & On-Premises deployment options.",
  },
];
const whitepapers = [
  {
    title: "Zero Trust Architecture for DoD Systems",
    description: "Learn how Salus IAM implements Zero Trust principles across multi-domain operations for maximum security with minimal friction.",
  },
  {
    title: "Tactical IAM in Disconnected Environments",
    description: "Technical overview of how Salus IAM maintains security posture in degraded, disconnected, intermittent environments.",
  },
  {
    title: "DISA STIG Compliance Guide for Salus IAM",
    description: "Complete reference for Defense Information Systems Agency Security Technical Implementation Guide compliance with Salus IAM.",
  },
];

const SalusIAM = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWhitepaper, setSelectedWhitepaper] = useState("");

  const openModal = (title) => {
    setSelectedWhitepaper(title);
    setIsModalOpen(true);
  };
  return (
    <div className="salusiam-container">
      <AnimatedBackground />
      <Navbar />
      <section className="salus-container">
      <div className="salus-text">
        <h1>
          Salus <span className="highlight">IAM</span>
        </h1>
        <h2>Identity & Access Management for DoD</h2>
        <p>
          Secure your mission-critical deployments with our zero trust identity
          and access management platform. Built specifically for defense
          applications, Salus IAM provides continuous verification, granular
          access controls, and seamless integration with existing security
          infrastructure.
        </p>
        <div className="buttons">
          <button className="demo-btn">Contact Sales</button>
        </div>
      </div>
      <div className='salus-img-outer-container'>
        <div className="salus-image-container">
          <div className="nested-div-1">
            <div className="nested-div-2">
              <img src='/salus_image.png' alt="Salus IAM" className="salus-image" />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/*section salus features*/}
    <section className="salus-features-container">
      <h2 className="salus-features-title">Key Features</h2>
      <p className="salus-features-subtitle">
        Salus IAM delivers comprehensive identity and access management designed
        specifically for Department of Defense applications and requirements.
      </p>
      <div className="salus-features-grid">
        {features.map((feature, index) => (
          <div key={index} className="salus-feature-card">
            <div className="salus-icon-container">{feature.icon}</div>
            <div>
              <h3 className="salus-feature-title">{feature.title}</h3>
              <p className="salus-feature-description">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/*Techincal whitepaper*/}
    <section className="whitepapers-section">
      <h2 className="section-title">Technical Whitepapers</h2>
      <p className="section-subtitle">
        Access our comprehensive technical resources to learn more about Salus IAM's capabilities.
      </p>
      <div className="whitepapers-container">
        {whitepapers.map((wp, index) => (
          <div key={index} className="whitepaper-card">
            <div className="icon-container">
              <FaFileAlt className="file-icon" />
            </div>
            <h3 className="whitepaper-title">{wp.title}</h3>
            <p className="whitepaper-description">{wp.description}</p>
            <button className="download-btn" onClick={() => openModal(wp.title)}>
              <FaFileAlt className="download-icon" /> Download Whitepaper
            </button>
          </div>
        ))}
      </div>
      {isModalOpen && <DownLoadForm whitepaperTitle={selectedWhitepaper} closeModal={() => setIsModalOpen(false)} />}
    </section>
      <Footer />
    </div>
  );
};

export default SalusIAM;
