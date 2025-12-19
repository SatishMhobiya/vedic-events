import React from 'react';
import { FaHeart, FaAward, FaUsers, FaStar } from 'react-icons/fa';
import './About.css';

const About = () => {
  const stats = [
    {
      icon: <FaHeart />,
      number: "500+",
      label: "Weddings Planned",
      color: "#F4D03F"
    },
    {
      icon: <FaUsers />,
      number: "1000+",
      label: "Happy Clients",
      color: "#2D5016"
    },
    {
      icon: <FaStar />,
      number: "4.9",
      label: "Average Rating",
      color: "#F4D03F"
    },
    {
      icon: <FaAward />,
      number: "50+",
      label: "Industry Awards",
      color: "#2D5016"
    }
  ];

  return (
    <section className="about-section" id="about">
      <div className="section">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title-left">Creating Dream Weddings Since 2015</h2>
            <p className="about-description">
              At <strong>Blissful Events</strong>, we believe that every love story deserves a perfect celebration. 
              With over 8 years of experience in wedding planning and event management, we have transformed 
              countless dreams into reality.
            </p>
            <p className="about-description">
              Our team of expert planners, decorators, and coordinators work tirelessly to ensure every detail 
              of your special day is executed flawlessly. From intimate garden ceremonies to grand destination 
              weddings, we handle it all with professionalism, creativity, and love.
            </p>
            <div className="about-features">
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <div>
                  <h4>Expert Planning Team</h4>
                  <p>Certified wedding planners with years of experience</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <div>
                  <h4>End-to-End Service</h4>
                  <p>From venue selection to final send-off</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <div>
                  <h4>Personalized Approach</h4>
                  <p>Custom packages tailored to your vision and budget</p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=1000&fit=crop" 
              alt="Wedding Planning" 
            />
            <div className="image-overlay">
              <p>Your Dream Wedding Awaits</p>
            </div>
          </div>
        </div>

        <div className="stats-container">
          {stats.map((stat, index) => (
            <div key={index} className="stat-box">
              <div className="stat-icon" style={{ color: stat.color }}>
                {stat.icon}
              </div>
              <h3 className="stat-number">{stat.number}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

