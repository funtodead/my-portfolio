import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './styles/base.css';

// Page(s)
import Home from './sections/home.jsx'; // <- adjust if your file is elsewhere

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* add more routes here if/when you add pages */}
      </Routes>
    </Router>
  );
}

export default App;
