import React from 'react';
import { Link } from 'react-router-dom';
import "./css/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/logo.png" alt="Synnefo Solutions Logo" />
            <p>Empowering careers through quality education</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h3>Quick Links</h3>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/courses">Courses</Link></li>
                <li><Link to="/placements">Placements</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Courses</h3>
              <ul>
                <li><Link to="/courses/mern">MERN Stack</Link></li>
                <li><Link to="/courses/python">Python Full Stack</Link></li>
                <li><Link to="/courses/flutter">Flutter Development</Link></li>
                <li><Link to="/courses">View All</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Contact</h3>
              <ul className="contact-info">
                <li><a href="tel:+917736013411">+91 7736013411</a></li>
                <li><a href="mailto:info@synnefo.in">info@synnefo.in</a></li>
                <li>Synnefo Solutions, Kochi, Kerala</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Synnefo Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;