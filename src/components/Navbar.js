import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-heading">TransCode</h1>
      <ul className="navbar-options">
        <li className="navbar-option">
          <Link to="/">Home</Link>
          <a href="https://medani-tripathi.vercel.app/">About</a>
          <a href="https://www.linkedin.com/">LinkedIn</a>
          <a href="https://github.com/">GitHub</a>

        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
