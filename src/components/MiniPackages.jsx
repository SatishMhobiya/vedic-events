import React, { useState } from 'react';
import { FaBirthdayCake, FaHeart, FaHandHoldingHeart, FaPaintBrush, FaWhatsapp, FaTimes, FaChevronLeft, FaChevronRight, FaPlay, FaImage } from 'react-icons/fa';
import './MiniPackages.css';

const MiniPackages = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [selectedPackage, setSelectedPackage] = useState(null);
    const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

    // WhatsApp number (replace with your actual number)
    const whatsappNumber = process.env.REACT_APP_MOBILE_NUMBER; // Replace with actual number

    const miniPackages = [
        {
            id: 1,
            name: "Birthday Celebration",
            price: "₹2,999",
            priceValue: 2999,
            icon: <FaBirthdayCake />,
            color: "#FF6B9D",
            thumbnail: "https://res.cloudinary.com/ddktwy6ee/image/upload/v1767793782/birthday3_dnbgyf.jpg",
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
                    url: "https://res.cloudinary.com/ddktwy6ee/image/upload/v1767793874/birthday6_m89z5s.jpg",
                    title: "Birthday Party Setup"
                },
                {
                    type: "image",
                    url: "https://res.cloudinary.com/ddktwy6ee/image/upload/v1767793782/birthday3_dnbgyf.jpg",
                    title: "Cake Table Decoration"
                },
                {
                    type: "image",
                    url: "https://res.cloudinary.com/ddktwy6ee/image/upload/v1767793782/birthday2_hiikiw.jpg",
                    title: "Birthday Celebration"
                },
                {
                    type: "video",
                    url: "https://res.cloudinary.com/ddktwy6ee/video/upload/v1767793879/birthdayVideo1_ab7pkj.mp4",
                    title: "Birthday Event Highlights"
                },
                {
                    type: "image",
                    url: "https://res.cloudinary.com/ddktwy6ee/image/upload/v1767793781/birthday5_j4ma78.jpg",
                    title: "Birthday Party Setup"
                },
                {
                    type: "image",
                    url: "https://res.cloudinary.com/ddktwy6ee/image/upload/v1767793579/birhday4_lzpjcw.jpg",
                    title: "Cake Table Decoration"
                },
                {
                    type: "image",
                    url: "https://res.cloudinary.com/ddktwy6ee/image/upload/v1767793662/birthday1_wbumvl.jpg",
                    title: "Birthday Celebration"
                },
                {
                    type: "video",
                    url: "https://res.cloudinary.com/ddktwy6ee/video/upload/v1767793673/birhdayVideo2_viybmr.mp4",
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
            thumbnail: "https://res.cloudinary.com/ddktwy6ee/image/upload/v1767795927/anni3_bsz0ly.jpg",
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
                    url: "https://res.cloudinary.com/ddktwy6ee/image/upload/v1767795969/anni5_cv8lcc.jpg",
                    title: "Anniversary Decoration"
                },
                {
                    type: "video",
                    url: "https://res.cloudinary.com/ddktwy6ee/video/upload/v1767796042/anniVid1_i7uuow.mp4",
                    title: "Anniversary Event Video"
                },
                {
                    type: "image",
                    url: "https://res.cloudinary.com/ddktwy6ee/image/upload/v1767795927/anni3_bsz0ly.jpg",
                    title: "Romantic Setup"
                },
                {
                    type: "image",
                    url: "https://res.cloudinary.com/ddktwy6ee/image/upload/v1767795926/anni2_ere64n.jpg",
                    title: "Anniversary Celebration"
                },

                {
                    type: "image",
                    url: "https://res.cloudinary.com/ddktwy6ee/image/upload/v1767795926/anni1_bnnrjo.jpg",
                    title: "Romantic Setup"
                },
                {
                    type: "video",
                    url: "https://res.cloudinary.com/ddktwy6ee/video/upload/v1767796185/anniVid2_vnitgy.mp4",
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
            thumbnail: "https://res.cloudinary.com/ddktwy6ee/image/upload/v1767797309/haldi3_vkffbs.jpg",
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
                    url: "https://res.cloudinary.com/ddktwy6ee/image/upload/v1767797307/haldi1_vdkdig.jpg",
                    title: "Haldi Ceremony Setup"
                },
                {
                    type: "video",
                    url: "https://res.cloudinary.com/ddktwy6ee/video/upload/v1767797353/haldiVid1_tcokxh.mp4",
                    title: "Haldi Ceremony Video"
                },
                {
                    type: "image",
                    url: "https://res.cloudinary.com/ddktwy6ee/image/upload/v1767797309/haldi3_vkffbs.jpg",
                    title: "Traditional Decoration"
                },
                {
                    type: "image",
                    url: "https://res.cloudinary.com/ddktwy6ee/image/upload/v1767797308/haldi4_ylts8p.jpg",
                    title: "Haldi Function"
                },
                {
                    type: "image",
                    url: "https://res.cloudinary.com/ddktwy6ee/image/upload/v1767797311/haldi2_abgjkb.jpg",
                    title: "Haldi Function"
                },
                
            ]
        },
        {
            id: 4,
            name: "Mehndi Ceremony",
            price: "₹4,499",
            priceValue: 4499,
            icon: <FaPaintBrush />,
            color: "#16A085",
            thumbnail: "https://res.cloudinary.com/ddktwy6ee/image/upload/v1767799241/mehndi3_lsk7r0.jpg",
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
                    url: "https://res.cloudinary.com/ddktwy6ee/image/upload/v1767799241/mehndi3_lsk7r0.jpg",
                    title: "Mehndi Decoration"
                },
                {
                    type: "image",
                    url: "https://res.cloudinary.com/ddktwy6ee/image/upload/v1767799241/mehndi2_lwu75v.jpg",
                    title: "Colorful Setup"
                },
                {
                    type: "video",
                    url: "https://res.cloudinary.com/ddktwy6ee/video/upload/v1767799320/mehndiVid1_fa8qga.mp4",
                    title: "Mehndi Function"
                },
                {
                    type: "image",
                    url: "https://res.cloudinary.com/ddktwy6ee/image/upload/v1767799241/mehndi3_lsk7r0.jpg",
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
