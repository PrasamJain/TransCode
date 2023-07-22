import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// Import your different page components
import Home from './pages/Home';
import Grammar from './pages/Grammar';
import TextAnalyzer from './pages/TextAnalyzer';
import Service1 from './pages/services-1';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service-1" element={ <Service1/> } />
          <Route
            path="/service-2"
            element={<Grammar />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
