import React, { useState } from 'react';
import { FaBirthdayCake, FaHeart, FaHandHoldingHeart, FaPaintBrush, FaWhatsapp, FaTimes, FaChevronLeft, FaChevronRight, FaPlay, FaImage } from 'react-icons/fa';
import './MiniPackages.css';

const MiniPackages = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  // WhatsApp number (replace with your actual number)
  const whatsappNumber = '919876543210'; // Replace with actual number

  const miniPackages = [
    {
      id: 1,
      name: "Birthday Celebration",
      price: "₹2,999",
      priceValue: 2999,
      icon: <FaBirthdayCake />,
      color: "#FF6B9D",
      thumbnail: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=600&fit=crop",
      description: "Make your birthday memorable with our special package",
      features: [
        "Birthday Decoration",
        "Cake Table Setup",
        "Balloons & Banners",
        "Basic Photography"
      ],
      media: [
        {
          type: "image",
          url: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&h=900&fit=crop",
          title: "Birthday Party Setup"
        },
        {
          type: "image",
          url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&h=900&fit=crop",
          title: "Cake Table Decoration"
        },
        {
          type: "image",
          url: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=1200&h=900&fit=crop",
          title: "Birthday Celebration"
        },
        {
          type: "video",
          url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          title: "Birthday Event Highlights"
        }
      ]
    },
    {
      id: 2,
      name: "Anniversary",
      price: "₹3,499",
      priceValue: 3499,
      icon: <FaHeart />,
      color: "#E74C3C",
      thumbnail: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop",
      description: "Celebrate your love story with elegance",
      features: [
        "Romantic Decoration",
        "Flower Arrangements",
        "Candle Light Setup",
        "Photo Booth"
      ],
      media: [
        {
          type: "image",
          url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=900&fit=crop",
          title: "Anniversary Decoration"
        },
        {
          type: "image",
          url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&h=900&fit=crop",
          title: "Romantic Setup"
        },
        {
          type: "image",
          url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&h=900&fit=crop",
          title: "Anniversary Celebration"
        },
        {
          type: "video",
          url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          title: "Anniversary Event Video"
        }
      ]
    },
    {
      id: 3,
      name: "Haldi Ceremony",
      price: "₹4,999",
      priceValue: 4999,
      icon: <FaHandHoldingHeart />,
      color: "#F39C12",
      thumbnail: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&h=600&fit=crop",
      description: "Traditional Haldi ceremony with vibrant decorations",
      features: [
        "Traditional Yellow Decor",
        "Flower & Marigold Setup",
        "Seating Arrangements",
        "Traditional Props"
      ],
      media: [
        {
          type: "image",
          url: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1200&h=900&fit=crop",
          title: "Haldi Ceremony Setup"
        },
        {
          type: "image",
          url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&h=900&fit=crop",
          title: "Traditional Decoration"
        },
        {
          type: "image",
          url: "https://images.unsplash.com/photo-1587271449307-c3a96a778f73?w=1200&h=900&fit=crop",
          title: "Haldi Function"
        },
        {
          type: "video",
          url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          title: "Haldi Ceremony Video"
        }
      ]
    },
    {
      id: 4,
      name: "Mehndi Ceremony",
      price: "₹4,499",
      priceValue: 4499,
      icon: <FaPaintBrush />,
      color: "#16A085",
      thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
      description: "Colorful Mehndi celebration with traditional vibes",
      features: [
        "Colorful Themed Decor",
        "Seating & Cushion Setup",
        "Traditional Props",
        "Photo Corner"
      ],
      media: [
        {
          type: "image",
          url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&h=900&fit=crop",
          title: "Mehndi Decoration"
        },
        {
          type: "image",
          url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=900&fit=crop",
          title: "Colorful Setup"
        },
        {
          type: "image",
          url: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1200&h=900&fit=crop",
          title: "Mehndi Function"
        },
        {
          type: "video",
          url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          title: "Mehndi Ceremony Video"
        }
      ]
    }
  ];

  const openLightbox = (pkg) => {
    setSelectedPackage(pkg);
    setCurrentMediaIndex(0);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedPackage(null);
    setCurrentMediaIndex(0);
    document.body.style.overflow = 'unset';
  };

  const nextMedia = () => {
    if (selectedPackage) {
      setCurrentMediaIndex((prev) => 
        prev === selectedPackage.media.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevMedia = () => {
    if (selectedPackage) {
      setCurrentMediaIndex((prev) => 
        prev === 0 ? selectedPackage.media.length - 1 : prev - 1
      );
    }
  };

  const handleWhatsApp = (pkg, e) => {
    e.stopPropagation();
    const message = `Hi! I'm interested in the ${pkg.name} package (${pkg.price}). I would like to know more details about this package.`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="mini-packages-section" id="mini-packages">
      <div className="section">
        <h2 className="section-title">Mini Event Packages</h2>
        <p className="section-subtitle">
          Affordable packages for your special moments - Starting from just ₹2,999
        </p>

        {/* Horizontal Scrollable Package Cards */}
        <div className="mini-packages-container">
          <div className="mini-packages-scroll">
            {miniPackages.map((pkg) => (
              <div 
                key={pkg.id} 
                className="mini-package-card"
                onClick={() => openLightbox(pkg)}
              >
                <div className="mini-package-image">
                  <img src={pkg.thumbnail} alt={pkg.name} loading="lazy" />
                  <div className="mini-package-overlay">
                    <div className="package-icon" style={{ color: pkg.color }}>
                      {pkg.icon}
                    </div>
                  </div>
                  <div className="view-gallery-badge">
                    <FaImage /> View Gallery
                  </div>
                </div>

                <div className="mini-package-content">
                  <h3 className="mini-package-name">{pkg.name}</h3>
                  <p className="mini-package-price">{pkg.price}</p>
                  <p className="mini-package-description">{pkg.description}</p>
                  
                  <ul className="mini-package-features">
                    {pkg.features.map((feature, index) => (
                      <li key={index}>✓ {feature}</li>
                    ))}
                  </ul>

                  <button 
                    className="whatsapp-button"
                    onClick={(e) => handleWhatsApp(pkg, e)}
                    style={{ backgroundColor: pkg.color }}
                  >
                    <FaWhatsapp /> WhatsApp Inquiry
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Scroll Hint */}
        <div className="scroll-hint">
          <span>← Swipe to see more packages →</span>
        </div>
      </div>

      {/* Lightbox Modal for Gallery */}
      {lightboxOpen && selectedPackage && (
        <div className="mini-lightbox-overlay" onClick={closeLightbox}>
          <div className="mini-lightbox-container" onClick={(e) => e.stopPropagation()}>
            <button className="mini-lightbox-close" onClick={closeLightbox}>
              <FaTimes />
            </button>

            <div className="mini-lightbox-header">
              <h3>{selectedPackage.name}</h3>
              <p>{selectedPackage.price}</p>
            </div>

            <div className="mini-lightbox-content">
              {/* Navigation Buttons */}
              {selectedPackage.media.length > 1 && (
                <>
                  <button className="nav-button prev" onClick={prevMedia}>
                    <FaChevronLeft />
                  </button>
                  <button className="nav-button next" onClick={nextMedia}>
                    <FaChevronRight />
                  </button>
                </>
              )}

              {/* Media Display */}
              <div className="media-wrapper">
                {selectedPackage.media[currentMediaIndex].type === 'image' ? (
                  <img 
                    src={selectedPackage.media[currentMediaIndex].url} 
                    alt={selectedPackage.media[currentMediaIndex].title}
                  />
                ) : (
                  <div className="video-container">
                    <iframe
                      src={selectedPackage.media[currentMediaIndex].url}
                      title={selectedPackage.media[currentMediaIndex].title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
              </div>

              {/* Media Info */}
              <div className="media-info">
                <p className="media-title">{selectedPackage.media[currentMediaIndex].title}</p>
                <p className="media-counter">
                  {currentMediaIndex + 1} / {selectedPackage.media.length}
                </p>
              </div>

              {/* Thumbnail Navigation */}
              <div className="thumbnail-navigation">
                {selectedPackage.media.map((item, index) => (
                  <div 
                    key={index}
                    className={`thumbnail ${index === currentMediaIndex ? 'active' : ''}`}
                    onClick={() => setCurrentMediaIndex(index)}
                  >
                    {item.type === 'video' && (
                      <div className="thumbnail-play-icon">
                        <FaPlay />
                      </div>
                    )}
                    <img 
                      src={item.type === 'image' ? item.url : selectedPackage.thumbnail} 
                      alt={item.title}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp Button in Lightbox */}
            <div className="lightbox-action">
              <button 
                className="whatsapp-button-large"
                onClick={(e) => {
                  handleWhatsApp(selectedPackage, e);
                  closeLightbox();
                }}
                style={{ backgroundColor: selectedPackage.color }}
              >
                <FaWhatsapp /> Book This Package via WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MiniPackages;
