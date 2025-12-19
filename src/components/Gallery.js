import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      title: "Garden Wedding Setup",
      category: "Venue",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop"
    },
    {
      id: 2,
      title: "Haldi Ceremony",
      category: "Traditional",
      image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      title: "Mehndi Setup",
      category: "Traditional",
      image: "https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?w=800&h=600&fit=crop"
    },
    {
      id: 4,
      title: "Mahila Sangeet",
      category: "Entertainment",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=600&fit=crop"
    },
    {
      id: 5,
      title: "Catering Display",
      category: "Food",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&h=600&fit=crop"
    },
    {
      id: 6,
      title: "Grand Entry",
      category: "Decoration",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop"
    },
    {
      id: 7,
      title: "Mandap Decoration",
      category: "Decoration",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop"
    },
    {
      id: 8,
      title: "Wedding Reception",
      category: "Venue",
      image: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800&h=600&fit=crop"
    },
    {
      id: 9,
      title: "Floral Arrangements",
      category: "Decoration",
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop"
    }
  ];

  return (
    <section className="gallery-section" id="gallery">
      <div className="section">
        <h2 className="section-title">Our Beautiful Events</h2>
        <p className="section-subtitle">
          Glimpses of the magical moments we've created for our happy couples
        </p>

        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <div key={item.id} className="gallery-item">
              <div className="gallery-image-wrapper">
                <img 
                  src={item.image} 
                  alt={item.title}
                  loading="lazy"
                />
                <div className="gallery-overlay">
                  <h3>{item.title}</h3>
                  <p>{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-cta">
          <p>Want to see more of our work?</p>
          <button className="gallery-button">View Full Portfolio</button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

