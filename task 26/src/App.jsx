import React, { useState } from 'react';
import './App.css'; 

function App() {
  return (
    <div>
      <Navbar />
      <Footer />
    </div>
  );
}

function Navbar() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="logo">
          MySite
        </a>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li className="dropdown">
            <a href="#" onClick={toggleDropdown}>Services</a>
            {dropdownVisible && (
              <ul className="dropdown-menu">
                <li><a href="/service1">Service 1</a></li>
                <li><a href="/service2">Service 2</a></li>
                <li><a href="/service3">Service 3</a></li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; 2025 MySite. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default App;
