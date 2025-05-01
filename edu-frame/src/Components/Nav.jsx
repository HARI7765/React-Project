import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Nav.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="top-bar">
        <div className="container">
          <div className="contact-info">
            <a href="tel:+917736013411" className="phone">+91 7736013411</a>
          </div>
          <div className="top-links">
            <Link to="/blog">Blog</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/success-stories">Success Stories</Link>
            <Link to="/register" className="register-btn">Register Now</Link>
          </div>
        </div>
      </div>
      
      <div className="main-nav">
        <div className="container">
          <div className="logo">
            <Link to="/">
              <img src="/logo.png" alt="Synnefo Solutions Logo" />
            </Link>
          </div>
          
          <button className="menu-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <nav className={isMenuOpen ? 'nav-open' : ''}>
            <ul className="nav-menu">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/course">Courses</Link></li>
              <li><Link to="/placements">Placements</Link></li>
              <li><Link to="/contact" className="contact-btn">Contact Us</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;