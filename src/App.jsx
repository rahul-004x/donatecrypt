import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import FAQ from './pages/FAQ';
import NGOs from './pages/NGOs';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import Donate from './pages/Donate';

import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/ngos" element={<NGOs />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
    </Router>
  );
};

export default App;
