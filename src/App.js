import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// Import your different page components
import Home from './pages/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ProsCons from './pages/ProsCons';
import Code from './pages/Code';
import NlpSql from './pages/NlpSql';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
        
          <Route path="/natural-lang-sql" element={<NlpSql />}
          />

          <Route path='/convert-code' element={<ProsCons/>} />
          <Route path='/code-explaination' element={<Code/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
