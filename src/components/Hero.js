import React, { useState, useEffect } from 'react';
import { FaHeart, FaStar, FaAward } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const taglines = [
    "Where Excellence Meets Celebration",
    "Elevate Your Events to Perfection",
    "Crafting Unforgettable Experiences",
    "Your Vision, Our Flawless Execution"
  ];

  const [currentTagline, setCurrentTagline] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [taglines.length]);

  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Elevate Your Events to Excellence</h1>
        <p className="hero-subtitle hero-tagline-animated">
          {taglines[currentTagline]}
        </p>
        <p className="hero-description">
          From corporate conferences to grand weddings, cultural celebrations to intimate gatherings – we bring your vision to life with unmatched elegance and precision
        </p>
        <div className="hero-buttons">
          <button className="hero-btn primary">Explore Packages</button>
          <button className="hero-btn secondary">Get Free Quote</button>
        </div>
        
        <div className="hero-stats">
          <div className="stat">
            <FaHeart className="stat-icon" />
            <h3>1000+</h3>
            <p>Events Executed</p>
          </div>
          <div className="stat">
            <FaStar className="stat-icon" />
            <h3>4.9/5</h3>
            <p>Client Rating</p>
          </div>
          <div className="stat">
            <FaAward className="stat-icon" />
            <h3>50+</h3>
            <p>Industry Awards</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

