import React from 'react';
import { FaPhone, FaEnvelope, FaComments } from 'react-icons/fa';
import './EventIdea.css';

const EventIdea = () => {
  return (
    <section className="event-idea-section">
      <div className="section">
        <div className="event-idea-content">
          <h2 className="event-idea-title">Let's Talk About Your Event Idea With Us</h2>
          <p className="event-idea-description">
            Engage in a conversation with us about your event concept, and we'll work closely with you 
            to transform your ideas into an unforgettable reality. At Vedic Events, we take pride in 
            our expertise and dedication to creating exceptional experiences.
          </p>
          <p className="event-idea-description">
            Whether it's a wedding, corporate event, conference, cultural celebration, or any other 
            special occasion, our team is committed to ensuring that every detail aligns with your vision, 
            leaving you with cherished memories and a successful event.
          </p>
          
          <div className="contact-methods">
            <div className="contact-method-card">
              <FaPhone className="contact-method-icon" />
              <h3>Call Us Now</h3>
              <p>+91 98765 43210</p>
              <button className="contact-method-btn">Call Now</button>
            </div>
            
            <div className="contact-method-card">
              <FaEnvelope className="contact-method-icon" />
              <h3>Email Us</h3>
              <p>info@vedicevents.com</p>
              <button className="contact-method-btn">Send Email</button>
            </div>
            
            <div className="contact-method-card">
              <FaComments className="contact-method-icon" />
              <h3>WhatsApp Us</h3>
              <p>Quick Response Guaranteed</p>
              <button className="contact-method-btn">Chat Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventIdea;

