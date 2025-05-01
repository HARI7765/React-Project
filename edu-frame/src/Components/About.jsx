import React from 'react';
import "./css/About.css";

const About = () => {
  return (
    <div className="about-page">
      {/* About Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1>About Synnefo Solutions</h1>
            <p>Empowering careers through quality education and industry-focused training</p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="our-story">
        <div className="container">
          <div className="story-content">
            <div className="story-image">
              <img src="/about-story.png" alt="Our Story" />
            </div>
            <div className="story-text">
              <h2 className="section-title">Our Story</h2>
              <p>Founded in 2018, Synnefo Solutions began with a simple mission: to bridge the gap between academic learning and industry requirements. Our founders, with extensive experience in IT and education, recognized the challenges faced by fresh graduates in meeting industry expectations.</p>
              <p>What started as a small training center with just two courses has now evolved into a comprehensive IT training institute offering multiple courses across various technologies. Today, we pride ourselves on having helped thousands of students transform their careers and secure positions in leading tech companies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="our-mission">
        <div className="container">
          <h2 className="section-title">Our Mission & Vision</h2>
          <div className="mission-vision-grid">
            <div className="mission-card">
              <h3>Mission</h3>
              <p>To provide industry-relevant IT training that prepares students for real-world challenges and opportunities, ensuring they become valuable assets to organizations worldwide.</p>
            </div>
            <div className="vision-card">
              <h3>Vision</h3>
              <p>To become the leading IT training institute in India, recognized for excellence in education, innovation in teaching methodologies, and exceptional placement records.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="our-team">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="team-intro">Our strength lies in our team of experienced professionals who are passionate about teaching and mentoring the next generation of tech talent.</p>
          
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <img src="/team-member1.png" alt="Team Member" />
              </div>
              <h3>Rajesh Kumar</h3>
              <p className="member-position">Founder & CEO</p>
              <p className="member-bio">With over 15 years of experience in software development and IT training, Rajesh leads our vision and strategic direction.</p>
            </div>
            
            <div className="team-member">
              <div className="member-image">
                <img src="/team-member2.png" alt="Team Member" />
              </div>
              <h3>Priya Nair</h3>
              <p className="member-position">Head of Training</p>
              <p className="member-bio">Priya brings 10+ years of expertise in full-stack development and has trained over 2000 students throughout her career.</p>
            </div>
            
            <div className="team-member">
              <div className="member-image">
                <img src="/team-member3.png" alt="Team Member" />
              </div>
              <h3>Sanjay Menon</h3>
              <p className="member-position">Placement Director</p>
              <p className="member-bio">Sanjay manages our industry partnerships and ensures our students find the right opportunities after training.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements">
        <div className="container">
          <h2 className="section-title">Our Achievements</h2>
          <div className="achievement-stats">
            <div className="stat-item">
              <div className="stat-number">5000+</div>
              <div className="stat-label">Students Trained</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">95%</div>
              <div className="stat-label">Placement Rate</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">200+</div>
              <div className="stat-label">Corporate Partners</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">12+</div>
              <div className="stat-label">Industry-Recognized Courses</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">What Our Students Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"The practical approach at Synnefo gave me confidence to face real-world challenges. Their mentorship helped me secure a position at a leading tech company."</p>
              </div>
              <div className="testimonial-author">
                <img src="/student2.png" alt="Student" />
                <div>
                  <h4>Anjali Menon</h4>
                  <p>React Developer @ Tech Innovations</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Transitioning from a non-IT background was challenging, but the structured curriculum and supportive faculty at Synnefo made it possible for me."</p>
              </div>
              <div className="testimonial-author">
                <img src="/student3.png" alt="Student" />
                <div>
                  <h4>Mohammed Ali</h4>
                  <p>Python Developer @ DataTech Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="contact-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Want to Know More About Us?</h2>
            <p>Reach out to our team or visit our center for a personal consultation</p>
            <a href="/contact" className="primary-btn">Contact Us Today</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;