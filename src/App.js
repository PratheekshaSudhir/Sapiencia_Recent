import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import HealthcareAI from './pages/HealthcareAI';
import SalusIAM from './pages/SalusIAM';
import Cybersecurity from './pages/Cybersecurity';
import Solutions from './pages/Solutions';
import Contact from './pages/Contact';
import Career from './pages/Career';
import Chatbot from './pages/Chatbot';

function App() {
  return (
    <Router>
      <Routes>
        {/* Home page */}
        <Route path="/" element={<Home />} />
        
        {/* Dedicated Pages */}
        <Route path="/healthcare-ai" element={<HealthcareAI />} />
        <Route path="/salus-iam" element={<SalusIAM />} />
        <Route path="/cybersecurity" element={<Cybersecurity />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Career />} />
        {/* <Route path="/chatbot" element={<Chatbot />} /> */}
      </Routes>
      < Chatbot/>
    </Router>
  );
}

export default App;

