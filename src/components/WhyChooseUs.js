import React from 'react';
import { FaCheckCircle, FaPalette, FaHeadset, FaMoneyBillWave, FaClock, FaAward, FaUsers, FaShieldAlt } from 'react-icons/fa';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <FaCheckCircle />,
      title: "100% Satisfaction Guarantee",
      description: "We don't stop until you're completely satisfied with every detail of your wedding"
    },
    {
      icon: <FaPalette />,
      title: "Creative Excellence",
      description: "Innovative designs and themes that make your wedding unique and memorable"
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Support",
      description: "Round-the-clock assistance throughout your wedding planning journey"
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Best Value Packages",
      description: "Competitive pricing without compromising on quality and luxury"
    },
    {
      icon: <FaClock />,
      title: "Timely Execution",
      description: "Punctual setup and flawless execution on your special day"
    },
    {
      icon: <FaAward />,
      title: "Award-Winning Team",
      description: "Industry-recognized planners with 50+ awards and accolades"
    },
    {
      icon: <FaUsers />,
      title: "Experienced Professionals",
      description: "8+ years of experience with 500+ successfully planned weddings"
    },
    {
      icon: <FaShieldAlt />,
      title: "Trusted & Reliable",
      description: "Licensed, insured, and committed to making your day perfect"
    }
  ];

  return (
    <section className="why-choose-section">
      <div className="section">
        <h2 className="section-title">Why Choose Blissful Events?</h2>
        <p className="section-subtitle">
          We're not just wedding planners – we're dream makers who turn your vision into reality
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
            <h3>Ready to Plan Your Dream Wedding?</h3>
            <p>Let's create magical moments together. Book your free consultation today!</p>
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

