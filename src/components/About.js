import React from 'react';
import { FaHeart, FaAward, FaUsers, FaStar } from 'react-icons/fa';
import './About.css';

const About = () => {
  const stats = [
    {
      icon: <FaHeart />,
      number: "1000+",
      label: "Events Delivered",
      color: "#D4AF37"
    },
    {
      icon: <FaUsers />,
      number: "2500+",
      label: "Happy Clients",
      color: "#9D2235"
    },
    {
      icon: <FaStar />,
      number: "4.9",
      label: "Average Rating",
      color: "#D4AF37"
    },
    {
      icon: <FaAward />,
      number: "50+",
      label: "Industry Awards",
      color: "#9D2235"
    }
  ];

  return (
    <section className="about-section" id="about">
      <div className="section">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title-left">Get An Unforgettable Event Experience With Us</h2>
            <p className="about-description">
              At <strong>Vedic Events</strong>, we take immense pride in our position as a leading event management company, 
              specializing in weddings, corporate events, and cultural celebrations. Since our establishment in 2015, 
              we have successfully executed over <strong>1000+ memorable events</strong>, leaving behind a trail of 
              delighted clients across the country.
            </p>
            <p className="about-description">
              Our experienced team of planners, decorators, and coordinators work tirelessly to ensure every detail 
              is executed flawlessly. We don't just plan events – we create experiences that resonate with your vision 
              and exceed your expectations. Your smiling satisfaction is our ultimate goal.
            </p>
            <div className="about-features">
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <div>
                  <h4>Your Vision, Our Awesome Execution</h4>
                  <p>Expert team transforming your ideas into reality</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <div>
                  <h4>Where Awesome Happens, Every Occasion</h4>
                  <p>Creating unforgettable moments for all celebrations</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <div>
                  <h4>Experienced Team - Your Smiling Support</h4>
                  <p>9+ years of excellence with 1000+ successful events</p>
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
              <p>Excellence in Every Event</p>
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

