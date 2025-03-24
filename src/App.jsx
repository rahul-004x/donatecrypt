import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

import FAQ from './pages/FAQ';
import NGOs from './pages/NGOs';
import Profile from './pages/Profile';

import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      
        <Route path="/faq" element={<FAQ />} />
        <Route path="/ngos" element={<NGOs />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
