import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        {/* <div className="footer-section"> */}
          {/* <img src={logo} alt="Vedic Events Logo" className="footer-logo-image" />
          <p className="footer-description">
            Your trusted partner in creating unforgettable event experiences. 
            We turn your vision into reality with elegance and perfection.
          </p> */}
          {/* <div className="social-links">
            <a href="https://facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://instagram.com" className="social-icon" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com" className="social-icon" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://wa.me/919876543210" className="social-icon" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          </div> */}
        {/* </div> */}

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#packages">Packages</a></li>
            <li><a href="#gallery">Gallery</a></li>

            <li><a href="#about">About Us</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Our Services</h4>
          <ul className="footer-links">
            <li><a href="#packages">Corporate Events</a></li>
            <li><a href="#packages">Wedding Planning</a></li>
            <li><a href="#packages">Cultural Celebrations</a></li>
            <li><a href="#packages">Venue Management</a></li>
            <li><a href="#packages">Catering Services</a></li>
            <li><a href="#packages">Complete Event Solutions</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Get In Touch</h4>
          <div className="contact-info">
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <span>+{process.env.REACT_APP_MOBILE_NUMBER}</span>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <span>info@vedicevents.com</span>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <span>123 Wedding Street, Mumbai, India</span>
            </div>
          </div>
          {/* <button className="footer-cta">Schedule Consultation</button> */}
        </div>
        
      </div>

      <div className="footer-bottom">
      <div className="social-links">
            <a href="https://facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://instagram.com" className="social-icon" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com" className="social-icon" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://wa.me/919876543210" className="social-icon" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          </div>
        <p>&copy; 2025 Vedic Events. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="/privacy-policy">Privacy Policy</a>
          <span>|</span>
          <a href="/terms-of-service">Terms of Service</a>
          <span>|</span>
          <a href="/cookie-policy">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

