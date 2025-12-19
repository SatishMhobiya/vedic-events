import React, { useState } from 'react';
import { FaPlay, FaImage, FaVideo, FaTh, FaTimes } from 'react-icons/fa';
import './Gallery.css';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: "Corporate Conference 2024",
      category: "Corporate",
      type: "image",
      thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
      media: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=900&fit=crop"
    },
    {
      id: 2,
      title: "Wedding Ceremony Highlights",
      category: "Wedding",
      type: "video",
      thumbnail: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop",
      media: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 3,
      title: "Grand Wedding Reception",
      category: "Wedding",
      type: "image",
      thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
      media: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=900&fit=crop"
    },
    {
      id: 4,
      title: "Product Launch Event",
      category: "Corporate",
      type: "video",
      thumbnail: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop",
      media: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 5,
      title: "Traditional Haldi Ceremony",
      category: "Wedding",
      type: "image",
      thumbnail: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&h=600&fit=crop",
      media: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1200&h=900&fit=crop"
    },
    {
      id: 6,
      title: "Birthday Celebration Party",
      category: "Social",
      type: "image",
      thumbnail: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=600&fit=crop",
      media: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&h=900&fit=crop"
    },
    {
      id: 7,
      title: "Corporate Gala Dinner",
      category: "Corporate",
      type: "image",
      thumbnail: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop",
      media: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&h=900&fit=crop"
    },
    {
      id: 8,
      title: "Cultural Festival Event",
      category: "Cultural",
      type: "video",
      thumbnail: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=600&fit=crop",
      media: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 9,
      title: "Sangeet Night Performance",
      category: "Wedding",
      type: "video",
      thumbnail: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=600&fit=crop",
      media: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 10,
      title: "Elegant Mandap Decoration",
      category: "Wedding",
      type: "image",
      thumbnail: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop",
      media: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&h=900&fit=crop"
    },
    {
      id: 11,
      title: "Anniversary Celebration",
      category: "Social",
      type: "image",
      thumbnail: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop",
      media: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&h=900&fit=crop"
    },
    {
      id: 12,
      title: "Team Building Event",
      category: "Corporate",
      type: "image",
      thumbnail: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop",
      media: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1200&h=900&fit=crop"
    }
  ];

  const categories = ['all', 'images', 'videos', 'wedding', 'corporate', 'social', 'cultural'];

  const filteredItems = galleryItems.filter(item => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'images') return item.type === 'image';
    if (activeFilter === 'videos') return item.type === 'video';
    return item.category.toLowerCase() === activeFilter;
  });

  const openLightbox = (item) => {
    setSelectedItem(item);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedItem(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section className="gallery-section" id="gallery">
      <div className="section">
        <h2 className="section-title">Our Event Portfolio</h2>
        <p className="section-subtitle">
          Glimpses of the extraordinary experiences we've crafted for our valued clients
        </p>

        {/* Filter Buttons */}
        <div className="gallery-filters">
          <button
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            <FaTh /> All Events
          </button>
          <button
            className={`filter-btn ${activeFilter === 'images' ? 'active' : ''}`}
            onClick={() => setActiveFilter('images')}
          >
            <FaImage /> Images
          </button>
          <button
            className={`filter-btn ${activeFilter === 'videos' ? 'active' : ''}`}
            onClick={() => setActiveFilter('videos')}
          >
            <FaVideo /> Videos
          </button>
          <button
            className={`filter-btn ${activeFilter === 'wedding' ? 'active' : ''}`}
            onClick={() => setActiveFilter('wedding')}
          >
            Weddings
          </button>
          <button
            className={`filter-btn ${activeFilter === 'corporate' ? 'active' : ''}`}
            onClick={() => setActiveFilter('corporate')}
          >
            Corporate
          </button>
          <button
            className={`filter-btn ${activeFilter === 'social' ? 'active' : ''}`}
            onClick={() => setActiveFilter('social')}
          >
            Social
          </button>
          <button
            className={`filter-btn ${activeFilter === 'cultural' ? 'active' : ''}`}
            onClick={() => setActiveFilter('cultural')}
          >
            Cultural
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="gallery-item"
              onClick={() => openLightbox(item)}
            >
              <div className="gallery-image-wrapper">
                <img 
                  src={item.thumbnail} 
                  alt={item.title}
                  loading="lazy"
                />
                {item.type === 'video' && (
                  <div className="video-play-icon">
                    <FaPlay />
                  </div>
                )}
                <div className="gallery-overlay">
                  <h3>{item.title}</h3>
                  <p>{item.category}</p>
                  <span className="media-type-badge">
                    {item.type === 'video' ? <FaVideo /> : <FaImage />}
                    {item.type === 'video' ? 'Video' : 'Photo'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredItems.length === 0 && (
          <div className="no-results">
            <p>No items found in this category.</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="gallery-cta">
          <p>Want to see more of our work?</p>
          <button className="gallery-button">View Full Portfolio</button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && selectedItem && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              <FaTimes />
            </button>
            <div className="lightbox-content">
              {selectedItem.type === 'image' ? (
                <img src={selectedItem.media} alt={selectedItem.title} />
              ) : (
                <div className="video-container">
                  <iframe
                    src={selectedItem.media}
                    title={selectedItem.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
              <div className="lightbox-info">
                <h3>{selectedItem.title}</h3>
                <p>{selectedItem.category}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;

