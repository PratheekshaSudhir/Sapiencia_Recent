import React from "react";
import Navbar from "../components/Navbar";
import AnimatedBackground from "../components/AnimatedBackground";
import "./Cybersecurity.css";
import Footer from "../components/Footer";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cybersecurity = () => {
  return (
    <div className="cybersecurity-container">
      <Navbar />
      <AnimatedBackground />

      <section className="cybersecurity-section">
        <h1 className="cybersecurity-title">
          Cybersecurity & AI System Security Services
        </h1>
        <p className="cybersecurity-description">
          Protect your AI systems and sensitive data with our comprehensive
          cybersecurity solutions. We offer advanced services tailored to the
          unique challenges of securing AI-powered environments.
        </p>
      </section>
      <section>
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
      </section>
            {/* Resources & Offerings Section */}
      <section className="cyber-resources-container">
      <h2 className="cyber-section-title">Resources & Offerings</h2>

      <div className="cyber-cards-container">
        {/* Expert Whitepapers Card */}
        <div className="cyber-card">
          <div className="cyber-card-icon">
            📄 {/* Replace with an actual icon if needed */}
          </div>
          <h3 className="cyber-card-title">Expert Whitepapers</h3>
          <p className="cyber-card-description">
            Access our detailed technical reports and guides on securing AI
            systems and protecting against emerging threats in the AI security
            landscape.
          </p>
          <button className="cyber-download-button">Download Whitepaper ⬇</button>
        </div>

        {/* Free Security Assessment Card */}
        <div className="cyber-card">
          <div className="cyber-card-icon">🛡️</div>
          <h3 className="cyber-card-title">Free Security Assessment</h3>
          <p className="cyber-card-description">
            Request a preliminary security assessment of your AI infrastructure.
            Our experts will identify potential vulnerabilities and provide
            recommendations.
          </p>
          <div className="cyber-free-assessment-button">
          <Link to="/contact" className="cyber-request-button">Request Free Assessment →</Link>
          </div>
          
        </div>
      </div>

      {/* Call to Action */}
      <div className="cyber-cta-container">
        <h3 className="cyber-cta-title">Ready to Secure Your AI Systems?</h3>
        <p className="cyber-cta-description">
          Contact our team of AI security experts today to discuss your
          specific security needs and discover how Sapiencia.AI can help
          protect your most valuable AI assets.
        </p>
        <div className="cyber-cta-request-demo">
        <Link to="/contact" className="cyber-cta-button">Request Demo →</Link>
        </div>
        
      </div>
    </section>

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
