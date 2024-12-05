import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import Navbar
import Home from './components/Home';
import About from './components/About';
import Coffees from './components/Coffees';
import Tables from './components/Tables';
import './App.css'

function App() {
  return (
    <Router>
      <Navbar /> 
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/coffees" element={<Coffees />} />
          <Route path="/tables" element={<Tables />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
