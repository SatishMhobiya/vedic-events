import React from 'react';
import { FaLeaf, FaPalette, FaMusic, FaUtensils, FaDoorOpen, FaCheck, FaWhatsapp } from 'react-icons/fa';
import './Packages.css';

const Packages = () => {
  const handleWhatsAppClick = (packageName, packagePrice) => {
    const phoneNumber = process.env.REACT_APP_MOBILE_NUMBER; // Replace with actual WhatsApp number
    const message = `Hi Vedic Events! I'm interested in the ${packageName} (${packagePrice}). Please provide me with more details.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const packages = [
    {
      id: 1,
      name: "Silver Package",
      price: "₹2,50,000",
      description: "Perfect for intimate gatherings",
      icon: <FaLeaf />,
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=400&fit=crop",
      guests: "Up to 100 Guests",
      features: [
        "Beautiful Venue Setup & Decoration",
        "Basic Stage Setup with Lighting",
        "Multi-Cuisine Catering (3 Course Menu)",
        "Professional Entry Decor",
        "Standard Sound System",
        "Quality Chairs & Tables",
        "Event Coordination (3 Hours)",
        "Basic Photography Coverage"
      ],
      color: "#FF6B35"
    },
    {
      id: 2,
      name: "Gold Package",
      price: "₹5,00,000",
      description: "Most popular choice for perfect celebrations",
      icon: <FaPalette />,
      featured: true,
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop",
      guests: "Up to 200 Guests",
      features: [
        "Premium Venue with Custom Theming",
        "Elegant Stage Design with Advanced Lighting",
        "Gourmet Multi-Cuisine Catering (5 Course Menu)",
        "Grand Entry with Floral Decoration",
        "Professional Photography & Videography (8 hours)",
        "Live Entertainment & Music",
        "Premium Sound & Lighting System",
        "Designer Furniture & Linen",
        "Full Day Event Management",
        "Welcome Drinks & Refreshments",
        "Digital Invitations & Event Website"
      ],
      color: "#D4AF37"
    },
    {
      id: 3,
      name: "Platinum Package",
      price: "₹10,00,000+",
      description: "The ultimate luxury experience",
      icon: <FaMusic />,
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop",
      guests: "500+ Guests",
      features: [
        "Luxury Resort / Destination Venue",
        "Bespoke Designer Theme & Decor",
        "International Gourmet Catering (7 Course Menu)",
        "Celebrity Entertainment & Performances",
        "Cinematic Photography & Videography (Full Coverage)",
        "Live Band, DJ & Professional Performers",
        "Complete Event Management Team (15+ Members)",
        "Destination Event Planning & Coordination",
        "Premium Decor with Imported Materials",
        "Valet Parking & Guest Transportation",
        "Luxury Accommodation Arrangements",
        "Pre-Event Photoshoot & Video",
        "Custom Event Website & Digital Solutions",
        "VIP Guest Management Services"
      ],
      color: "#9D2235"
    }
  ];

  const services = [
    {
      icon: <FaLeaf />,
      title: "Venue Selection",
      description: "Premium venues ranging from outdoor gardens to luxury banquet halls"
    },
    {
      icon: <FaPalette />,
      title: "Event Design",
      description: "Custom themes and decor tailored to your vision and culture"
    },
    {
      icon: <FaMusic />,
      title: "Entertainment",
      description: "Professional entertainment including live music, DJ, and performances"
    },
    {
      icon: <FaUtensils />,
      title: "Catering Services",
      description: "Exquisite multi-cuisine menus crafted by expert chefs"
    },
    {
      icon: <FaDoorOpen />,
      title: "Full-Service Management",
      description: "End-to-end event coordination from planning to execution"
    }
  ];

  return (
    <section className="packages-section" id="packages">
      <div className="section">
        <h2 className="section-title">Our Event Packages</h2>
        <p className="section-subtitle">
          Choose from our carefully curated packages designed to make your event extraordinary
        </p>

        <div className="packages-grid">
          {packages.map((pkg) => (
            <div 
              key={pkg.id} 
              className={`package-card ${pkg.featured ? 'featured' : ''}`}
            >
              {pkg.featured && <div className="featured-badge">⭐ Most Popular</div>}
              <div className="package-image">
                <img src={pkg.image} alt={pkg.name} loading="lazy" />
                <div className="package-overlay">
                  <div className="package-icon" style={{ color: pkg.color }}>
                    {pkg.icon}
                  </div>
                </div>
              </div>
              <div className="package-content">
                <h3 className="package-name">{pkg.name}</h3>
                <p className="package-guests">{pkg.guests}</p>
                <p className="package-price">{pkg.price}</p>
                <p className="package-description">{pkg.description}</p>
                <ul className="package-features">
                  {pkg.features.map((feature, index) => (
                    <li key={index}>
                      <FaCheck className="check-icon" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  className="package-button whatsapp-button"
                  onClick={() => handleWhatsAppClick(pkg.name, pkg.price)}
                >
                  <FaWhatsapp className="whatsapp-icon" />
                  Contact on WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Scroll Hint */}
        <div className="scroll-hint-packages">
          <span>← Swipe to explore all packages →</span>
        </div>

        <div className="services-section">
          <h3 className="services-title">What We Offer</h3>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
          
          {/* Services Scroll Hint */}
          <div className="scroll-hint-services">
            <span>← Swipe to see all services →</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;

