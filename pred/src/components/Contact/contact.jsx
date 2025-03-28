// contact.jsx
import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section: Logo and Tagline */}
        <div className="footer-section">
          <h2 className="footer-logo">FitVerse</h2>
          <p className="footer-tagline">
            FitVerse, your trusted partner in health monitoring and wellness journey.
          </p>
        </div>

        {/* Middle Section: Quick Links */}
        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/tech">Technology</a></li>
            <li><a href="/reviews">Reviews</a></li>
          </ul>
        </div>

        {/* Right Section: Contact Info */}
        <div className="footer-section">
          <h3 className="footer-heading">Contact Info</h3>
          <ul className="footer-contact">
            <li>Email: g.tumwesigye@alustudent.com</li>
            <li>Phone: +250 78--</li>
            <li>Address: Kigali, Rwanda</li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>&copy; 2025 FitVerse/Geofrey Tumwesigye. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Contact;
