import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="main-navbar">
      <div className="logo">
        <img src="/health.png" alt="Logo" />
      </div>
      <div className={`links ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Technology</a></li>
          <li><a href="">Reviews</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </div>
      <div className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Navbar;