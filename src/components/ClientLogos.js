import React from 'react';
import './ClientLogos.css';

const ClientLogos = () => {
  const clients = [
    "Corporate Clients",
    "Government Organizations", 
    "Educational Institutions",
    "Healthcare Sector",
    "Banking & Finance",
    "Manufacturing",
    "Hospitality",
    "IT & Technology"
  ];

  return (
    <section className="client-logos-section">
      <div className="section">
        <h2 className="section-title">Our Valued Corporate Clients</h2>
        <p className="section-subtitle">
          Trusted by leading organizations across diverse industries
        </p>
        
        <div className="clients-grid">
          {clients.map((client, index) => (
            <div key={index} className="client-badge">
              <div className="client-icon">🏢</div>
              <p>{client}</p>
            </div>
          ))}
        </div>

        <div className="client-stats">
          <div className="client-stat-item">
            <h3>200+</h3>
            <p>Corporate Clients</p>
          </div>
          <div className="client-stat-item">
            <h3>500+</h3>
            <p>Corporate Events</p>
          </div>
          <div className="client-stat-item">
            <h3>100%</h3>
            <p>Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;

