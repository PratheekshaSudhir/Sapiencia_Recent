import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import HealthcareAI from './pages/HealthcareAI';
import SalusIAM from './pages/SalusIAM';
import Cybersecurity from './pages/Cybersecurity';
import Solutions from './pages/Solutions';
import Contact from './pages/Contact';

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
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

