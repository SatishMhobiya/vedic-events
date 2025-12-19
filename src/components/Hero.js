import React from 'react';
import { FaHeart, FaStar, FaAward } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Your Dream Wedding Awaits</h1>
        <p className="hero-subtitle">
          Creating Magical Moments & Unforgettable Celebrations
        </p>
        <p className="hero-description">
          From intimate garden ceremonies to grand celebrations, we bring your vision to life with elegance and perfection
        </p>
        <div className="hero-buttons">
          <button className="hero-btn primary">Explore Packages</button>
          <button className="hero-btn secondary">Get Free Quote</button>
        </div>
        
        <div className="hero-stats">
          <div className="stat">
            <FaHeart className="stat-icon" />
            <h3>500+</h3>
            <p>Happy Couples</p>
          </div>
          <div className="stat">
            <FaStar className="stat-icon" />
            <h3>4.9/5</h3>
            <p>Client Rating</p>
          </div>
          <div className="stat">
            <FaAward className="stat-icon" />
            <h3>50+</h3>
            <p>Awards Won</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

