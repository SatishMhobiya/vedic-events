import React from 'react';
import { FaCheckCircle, FaPalette, FaHeadset, FaClock, FaAward, FaUsers, FaShieldAlt } from 'react-icons/fa';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <FaUsers />,
      title: "Friendly Team",
      description: "Where friendliness meets excellence - our team ensures you're comfortable throughout"
    },
    {
      icon: <FaPalette />,
      title: "The Best Venues",
      description: "Access to premium venues that elevate your event experience"
    },
    {
      icon: <FaHeadset />,
      title: "One Call Service",
      description: "Single point of contact for all your event needs - simple and efficient"
    },
    {
      icon: <FaCheckCircle />,
      title: "One Stop Solutions",
      description: "Complete end-to-end event management under one roof"
    },
    {
      icon: <FaPalette />,
      title: "Unique Scenarios",
      description: "Creative, customized themes that make your event truly distinctive"
    },
    {
      icon: <FaAward />,
      title: "Awesome Events",
      description: "Crafting unforgettable event experiences that exceed expectations"
    },
    {
      icon: <FaClock />,
      title: "Proven Track Record",
      description: "9+ years of excellence with 1000+ successfully executed events"
    },
    {
      icon: <FaShieldAlt />,
      title: "Trusted & Professional",
      description: "Reliable service backed by industry expertise and client satisfaction"
    }
  ];

  return (
    <section className="why-choose-section">
      <div className="section">
        <h2 className="section-title">Why Choose Vedic Events?</h2>
        <p className="section-subtitle">
          We're not just event planners – we're experience creators who bring your vision to life
        </p>

        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="reason-card">
              <div className="reason-icon-wrapper">
                <div className="reason-icon">{reason.icon}</div>
              </div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="cta-banner">
          <div className="cta-content">
            <h3>Ready to Plan Your Dream Event?</h3>
            <p>Let's create extraordinary experiences together. Book your free consultation today!</p>
            <div className="cta-buttons">
              <button className="cta-btn primary">Schedule Free Consultation</button>
              <button className="cta-btn secondary">Download Brochure</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

