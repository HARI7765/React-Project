// CoursesPage.jsx
import React, { useState } from 'react';
import "./css/Courses.css";

const CoursesPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const filterByCategory = (category) => {
    setActiveCategory(category);
  };

  // Course data - in a real application, this would likely come from an API
  const courses = [
    {
      id: 1,
      title: "MERN Stack Development",
      category: "web",
      image: "/course-mern.png",
      description: "Master MongoDB, Express, React, and Node.js to build modern web applications.",
      duration: "3 months",
      level: "Intermediate",
      price: "₹49,999"
    },
    {
      id: 2,
      title: "Python Full Stack",
      category: "web",
      image: "/course-python.png",
      description: "Comprehensive training in Python, Django, and related technologies for backend development.",
      duration: "4 months",
      level: "Beginner to Advanced",
      price: "₹59,999"
    },
    {
      id: 3,
      title: "Flutter Development",
      category: "mobile",
      image: "/course-flutter.png",
      description: "Build beautiful native apps for iOS and Android using Flutter and Dart.",
      duration: "2.5 months",
      level: "Intermediate",
      price: "₹45,999"
    },
    {
      id: 4,
      title: "DevOps Engineering",
      category: "cloud",
      image: "/course-devops.png",
      description: "Learn CI/CD pipelines, Docker, Kubernetes, and cloud infrastructure management.",
      duration: "3 months",
      level: "Advanced",
      price: "₹65,999"
    },
    {
      id: 5,
      title: "UI/UX Design",
      category: "design",
      image: "/course-uiux.png",
      description: "Master user interface and experience design principles using Figma and Adobe tools.",
      duration: "2 months",
      level: "Beginner",
      price: "₹39,999"
    },
    {
      id: 6,
      title: "Data Science with Python",
      category: "data",
      image: "/course-datascience.png",
      description: "Analyze data, build models and visualize insights using Python libraries.",
      duration: "4 months",
      level: "Intermediate",
      price: "₹69,999"
    },
    {
      id: 7,
      title: "AWS Cloud Architect",
      category: "cloud",
      image: "/course-aws.png",
      description: "Design and deploy scalable, highly available systems on Amazon Web Services.",
      duration: "3 months",
      level: "Advanced",
      price: "₹59,999"
    },
    {
      id: 8,
      title: "React Native Development",
      category: "mobile",
      image: "/course-reactnative.png",
      description: "Create cross-platform mobile applications using React Native framework.",
      duration: "2.5 months",
      level: "Intermediate",
      price: "₹49,999"
    },
    {
      id: 9,
      title: "Angular Development",
      category: "web",
      image: "/course-angular.png",
      description: "Build dynamic web applications with Angular framework and TypeScript.",
      duration: "3 months",
      level: "Intermediate",
      price: "₹47,999"
    }
  ];

  // Filter courses based on active category
  const filteredCourses = activeCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === activeCategory);

  return (
    <div className="courses-page">
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
                <li><a href="/courses" className="active">Courses</a></li>
                <li><a href="/placements">Placements</a></li>
                <li><a href="/contact" className="contact-btn">Contact Us</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Page Banner */}
      <section className="page-banner">
        <div className="container">
          <h1>Our Courses</h1>
          <p>Comprehensive training programs designed to kick-start your career in technology</p>
        </div>
      </section>

      {/* Course Categories Filter */}
      <section className="course-filter">
        <div className="container">
          <div className="filter-buttons">
            <button 
              className={activeCategory === 'all' ? 'active' : ''} 
              onClick={() => filterByCategory('all')}
            >
              All Courses
            </button>
            <button 
              className={activeCategory === 'web' ? 'active' : ''} 
              onClick={() => filterByCategory('web')}
            >
              Web Development
            </button>
            <button 
              className={activeCategory === 'mobile' ? 'active' : ''} 
              onClick={() => filterByCategory('mobile')}
            >
              Mobile Development
            </button>
            <button 
              className={activeCategory === 'cloud' ? 'active' : ''} 
              onClick={() => filterByCategory('cloud')}
            >
              Cloud & DevOps
            </button>
            <button 
              className={activeCategory === 'design' ? 'active' : ''} 
              onClick={() => filterByCategory('design')}
            >
              Design
            </button>
            <button 
              className={activeCategory === 'data' ? 'active' : ''} 
              onClick={() => filterByCategory('data')}
            >
              Data Science
            </button>
          </div>
        </div>
      </section>

      {/* All Courses Grid */}
      <section className="courses-listing">
        <div className="container">
          <div className="courses-grid">
            {filteredCourses.map(course => (
              <div className="course-card" key={course.id}>
                <div className="course-image">
                  <img src={course.image} alt={course.title} />
                  <div className="course-overlay">
                    <span className="course-level">{course.level}</span>
                  </div>
                </div>
                <div className="course-content">
                  <h3>{course.title}</h3>
                  <p className="course-desc">{course.description}</p>
                  <div className="course-meta">
                    <div className="meta-item">
                      <i className="icon-clock"></i>
                      <span>{course.duration}</span>
                    </div>
                    <div className="meta-item">
                      <i className="icon-tag"></i>
                      <span>{course.price}</span>
                    </div>
                  </div>
                  <div className="course-actions">
                    <a href={`/courses/${course.id}`} className="course-btn">View Details</a>
                    <a href="/register" className="enroll-btn">Enroll Now</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredCourses.length === 0 && (
            <div className="no-courses">
              <p>No courses found in this category. Please check back later or contact us for custom training options.</p>
            </div>
          )}
        </div>
      </section>

      {/* Course Benefit Section */}
      <section className="course-benefits">
        <div className="container">
          <h2 className="section-title">Why Our Courses Stand Out</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <img src="/icon-industry.png" alt="Industry Relevant" />
              </div>
              <h3>Industry Relevant</h3>
              <p>Curriculum designed in collaboration with industry experts to meet current market demands</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <img src="/icon-project.png" alt="Project Based" />
              </div>
              <h3>Project Based Learning</h3>
              <p>Work on real-world projects to build a strong portfolio that stands out to employers</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <img src="/icon-certificate.png" alt="Certification" />
              </div>
              <h3>Recognized Certification</h3>
              <p>Receive industry-recognized certifications upon course completion</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <img src="/icon-support.png" alt="Support" />
              </div>
              <h3>Lifetime Support</h3>
              <p>Access to learning materials and community support even after course completion</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>What are the prerequisites for joining these courses?</h3>
              <p>Most of our beginner courses require basic computer knowledge. Intermediate and advanced courses may have specific prerequisites mentioned in the course details.</p>
            </div>
            <div className="faq-item">
              <h3>Do you provide placement assistance?</h3>
              <p>Yes, we provide comprehensive placement assistance including resume building, interview preparation, and connecting you with our hiring partners.</p>
            </div>
            <div className="faq-item">
              <h3>Are these online or offline courses?</h3>
              <p>We offer both online and offline (classroom) options for most of our courses. You can choose the mode that suits you best.</p>
            </div>
            <div className="faq-item">
              <h3>What happens if I miss a class?</h3>
              <p>All our sessions are recorded and made available to enrolled students. You can catch up at your convenience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="contact-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Have Questions About Our Courses?</h2>
            <p>Our education counselors are here to guide you in choosing the right career path</p>
            <div className="cta-buttons">
              <a href="/contact" className="primary-btn">Contact Us</a>
              <a href="tel:+917736013411" className="secondary-btn">Call Us Now</a>
            </div>
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

export default CoursesPage;