// HomePage.jsx
import React, { useState } from 'react';
import "./css/Home.css";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="home-page">
      {/* Navigation Bar */}
      <header>
        <div className="top-bar">
          <div className="container">
            <div className="contact-info">
              <a href="tel:+917736013411" className="phone">+91 7736013411</a>
            </div>
            <div className="top-links">
              <a href="/blog">Blog</a>
              <a href="/careers">Careers</a>
              <a href="/success-stories">Success Stories</a>
              <a href="/register" className="register-btn">Register Now</a>
            </div>
          </div>
        </div>
        
        <div className="main-nav">
          <div className="container">
            <div className="logo">
              <a href="/">
                <img src="/logo.png" alt="Synnefo Solutions Logo" />
              </a>
            </div>
            
            <button className="menu-toggle" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </button>
            
            <nav className={isMenuOpen ? 'nav-open' : ''}>
              <ul className="nav-menu">
                <li><a href="/about">About Us</a></li>
                <li><a href="/courses">Courses</a></li>
                <li><a href="/placements">Placements</a></li>
                <li><a href="/contact" className="contact-btn">Contact Us</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Transform Your Future with IT Training</h1>
            <p>Industry-leading courses in development, design, and technology</p>
            <div className="hero-buttons">
              <a href="/courses" className="primary-btn">Explore Courses</a>
              <a href="/contact" className="secondary-btn">Get in Touch</a>
            </div>
          </div>
          <div className="hero-image">
            <img src="/hero-image.png" alt="IT Training" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose Synnefo Solutions?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/icon-expert.png" alt="Expert Trainers" />
              </div>
              <h3>Expert Trainers</h3>
              <p>Learn from industry professionals with years of experience</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/icon-curriculum.png" alt="Updated Curriculum" />
              </div>
              <h3>Updated Curriculum</h3>
              <p>Stay ahead with courses that reflect the latest industry trends</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/icon-placement.png" alt="Placement Assistance" />
              </div>
              <h3>Placement Assistance</h3>
              <p>Get help finding your dream job after completing your course</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/icon-practical.png" alt="Practical Training" />
              </div>
              <h3>Practical Training</h3>
              <p>Hands-on projects to build a strong portfolio</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="courses">
        <div className="container">
          <h2 className="section-title">Our Popular Courses</h2>
          <div className="courses-grid">
            <div className="course-card">
              <div className="course-image">
                <img src="/course-mern.png" alt="MERN Stack" />
              </div>
              <div className="course-content">
                <h3>MERN Stack Development</h3>
                <p>Master MongoDB, Express, React, and Node.js</p>
                <a href="/courses/mern" className="course-btn">Learn More</a>
              </div>
            </div>
            <div className="course-card">
              <div className="course-image">
                <img src="/course-python.png" alt="Python" />
              </div>
              <div className="course-content">
                <h3>Python Full Stack</h3>
                <p>Comprehensive training in Python and related technologies</p>
                <a href="/courses/python" className="course-btn">Learn More</a>
              </div>
            </div>
            <div className="course-card">
              <div className="course-image">
                <img src="/course-flutter.png" alt="Flutter" />
              </div>
              <div className="course-content">
                <h3>Flutter Development</h3>
                <p>Build beautiful native apps for iOS and Android</p>
                <a href="/courses/flutter" className="course-btn">Learn More</a>
              </div>
            </div>
          </div>
          <div className="courses-cta">
            <a href="/courses" className="primary-btn">View All Courses</a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">What Our Students Say</h2>
          <div className="testimonials-carousel">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Synnefo helped me transition from a fresher to a professional developer in just 3 months. The practical training and placement support were exceptional."</p>
              </div>
              <div className="testimonial-author">
                <img src="/student1.png" alt="Student" />
                <div>
                  <h4>Rahul Sharma</h4>
                  <p>Full Stack Developer @ Tech Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners">
        <div className="container">
          <h2 className="section-title">Our Hiring Partners</h2>
          <div className="partners-grid">
            <div className="partner-logo">
              <img src="/partner1.png" alt="Partner Company" />
            </div>
            <div className="partner-logo">
              <img src="/partner2.png" alt="Partner Company" />
            </div>
            <div className="partner-logo">
              <img src="/partner3.png" alt="Partner Company" />
            </div>
            <div className="partner-logo">
              <img src="/partner4.png" alt="Partner Company" />
            </div>
            <div className="partner-logo">
              <img src="/partner5.png" alt="Partner Company" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="contact-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Career in Tech?</h2>
            <p>Join our next batch and transform your future</p>
            <a href="/register" className="primary-btn">Register Now</a>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                  <li><a href="/about">About Us</a></li>
                  <li><a href="/courses">Courses</a></li>
                  <li><a href="/placements">Placements</a></li>
                  <li><a href="/contact">Contact Us</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h3>Courses</h3>
                <ul>
                  <li><a href="/courses/mern">MERN Stack</a></li>
                  <li><a href="/courses/python">Python Full Stack</a></li>
                  <li><a href="/courses/flutter">Flutter Development</a></li>
                  <li><a href="/courses">View All</a></li>
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
            <p>&copy; 2025 Synnefo Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;