import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';
import logo from '../assets/images/vedic_events_logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo" onClick={() => scrollToSection('home')}>
          <img src={logo} alt="Vedic Events Logo" className="logo-image" />
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li><button type="button" onClick={() => scrollToSection('home')}>Home</button></li>
            <li><button type="button" onClick={() => scrollToSection('about')}>About</button></li>
            <li><button type="button" onClick={() => scrollToSection('packages')}>Packages</button></li>
            <li><button type="button" onClick={() => scrollToSection('gallery')}>Gallery</button></li>
            <li><button type="button" onClick={() => scrollToSection('testimonials')}>Testimonials</button></li>
            <li><button type="button" onClick={() => scrollToSection('contact')}>Contact</button></li>
          </ul>
        </nav>

        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <button className="cta-button">Book Consultation</button>
      </div>
    </header>
  );
};

export default Header;

