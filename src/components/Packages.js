import React from 'react';
import { FaLeaf, FaPalette, FaMusic, FaUtensils, FaDoorOpen, FaCheck } from 'react-icons/fa';
import './Packages.css';

const Packages = () => {
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
        "Beautiful Garden Venue Setup",
        "Basic Haldi & Mehndi Decoration",
        "Simple Stage Setup with Basic Lighting",
        "Vegetarian Catering (3 Course Menu)",
        "Traditional Entry Decor",
        "Basic Sound System",
        "Standard Chairs & Tables",
        "3 Hours Event Coordination"
      ],
      color: "#C0C0C0"
    },
    {
      id: 2,
      name: "Gold Package",
      price: "₹5,00,000",
      description: "Most popular choice for perfect weddings",
      icon: <FaPalette />,
      featured: true,
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop",
      guests: "Up to 200 Guests",
      features: [
        "Premium Garden Venue with Landscaping",
        "Elegant Haldi & Mehndi Setup with Props & Seating",
        "Grand Mahila Sangeet Stage with Professional Lighting",
        "Premium Multi-Cuisine Catering (5 Course Menu)",
        "Royal Entry Gate with Fresh Floral Decoration",
        "Professional Photography (8 hours) + 300 Edited Photos",
        "Live Music Band for Sangeet",
        "Premium Sound & Lighting System",
        "Designer Chairs, Tables & Linen",
        "Full Day Event Coordination",
        "Welcome Drinks & Refreshments"
      ],
      color: "#FFD700"
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
        "Luxury Garden Resort / Destination Venue",
        "Designer Theme-Based Haldi & Mehndi Setup",
        "Grand Mahila Sangeet with Celebrity Performance",
        "International Multi-Cuisine Catering (7 Course Gourmet)",
        "Magnificent Entry with Car/Elephant Decoration",
        "Cinematic Photography & Videography (Full Coverage)",
        "Live Band, DJ & Professional Dancers",
        "Complete Event Management Team (10+ Members)",
        "Destination Wedding Planning & Coordination",
        "Premium Decor with Imported Flowers",
        "Valet Parking & Guest Transportation",
        "Luxury Accommodation Arrangements",
        "Pre-Wedding Photoshoot",
        "Wedding Website & Digital Invitations"
      ],
      color: "#E5E4E2"
    }
  ];

  const services = [
    {
      icon: <FaLeaf />,
      title: "Garden Venues",
      description: "Beautiful outdoor settings with lush greenery and scenic beauty"
    },
    {
      icon: <FaPalette />,
      title: "Haldi & Mehndi",
      description: "Traditional setups with vibrant colors, comfortable seating, and authentic decor"
    },
    {
      icon: <FaMusic />,
      title: "Mahila Sangeet",
      description: "Grand stage setup with professional lighting, sound system, and dance floor"
    },
    {
      icon: <FaUtensils />,
      title: "Catering Services",
      description: "Delicious multi-cuisine menu prepared by expert chefs"
    },
    {
      icon: <FaDoorOpen />,
      title: "Grand Entry",
      description: "Spectacular entrance decorations that make a lasting impression"
    }
  ];

  return (
    <section className="packages-section" id="packages">
      <div className="section">
        <h2 className="section-title">Our Wedding Packages</h2>
        <p className="section-subtitle">
          Choose from our carefully curated packages designed to make your special day unforgettable
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
                <button className="package-button">Choose Package</button>
              </div>
            </div>
          ))}
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
        </div>
      </div>
    </section>
  );
};

export default Packages;

