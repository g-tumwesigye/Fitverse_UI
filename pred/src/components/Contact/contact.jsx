// contact.jsx
import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section: Logo and Tagline */}
        <div className="footer-section">
          <h2 className="footer-logo">HealthBMI</h2>
          <p className="footer-tagline">
            Your trusted partner in health monitoring and wellness journey.
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
            <li>Email: contact@healthbmi.com</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Address: 123 Health Street, Wellness City</li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>&copy; 2025 HealthBMI. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Contact;