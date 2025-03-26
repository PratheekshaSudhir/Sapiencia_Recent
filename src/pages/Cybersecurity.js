import React from "react";
import Navbar from "../components/Navbar";
import AnimatedBackground from "../components/AnimatedBackground";
import "./Cybersecurity.css";
import Footer from "../components/Footer";
import { FaCheck } from "react-icons/fa";

const Cybersecurity = () => {
  return (
    <div className="cybersecurity-container">
      <Navbar />
      <AnimatedBackground />

      <div className="cybersecurity-section">
        <h1 className="cybersecurity-title">
          Cybersecurity & AI System Security Services
        </h1>
        <p className="cybersecurity-description">
          Protect your AI systems and sensitive data with our comprehensive
          cybersecurity solutions. We offer advanced services tailored to the
          unique challenges of securing AI-powered environments.
        </p>

        <h2 className="cybersecurity-subtitle">Our Core Security Services</h2>

        <div className="cybersecurity-solutions-container">
          {services.map((service, index) => (
            <div key={index} className="cybersecurity-card">
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="list-check">
                {service.points.map((point, idx) => (
                  <li key={idx} className="check-item">
                    <FaCheck className="cyber-check-icon" /> {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

const services = [
  {
    title: "Penetration Testing",
    icon: "🛡️",
    description:
      "Our expert team conducts simulated cyberattacks specifically designed to identify vulnerabilities in AI-driven systems and infrastructure.",
    points: [
      "AI model attack simulations",
      "Data poisoning resistance tests",
      "Model extraction defense validation",
    ],
  },
  {
    title: "Cybersecurity Auditing",
    icon: "🔍",
    description:
      "Comprehensive audits to ensure your AI models and systems meet industry security standards and compliance requirements.",
    points: [
      "Regulatory compliance verification",
      "Security architecture assessment",
      "Privacy controls evaluation",
    ],
  },
  {
    title: "AI-Driven Threat Detection",
    icon: "⚡",
    description:
      "Real-time defense systems powered by our proprietary AI algorithms to protect against sophisticated and adversarial AI threats.",
    points: [
      "Automated threat monitoring",
      "Anomaly detection systems",
      "Predictive vulnerability analysis",
    ],
  },
];

export default Cybersecurity;
