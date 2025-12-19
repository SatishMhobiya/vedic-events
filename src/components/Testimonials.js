import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya & Rahul Sharma",
      image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=200&h=200&fit=crop&crop=faces",
      rating: 5,
      text: "Blissful Events made our dream wedding come true! From the stunning garden venue to the beautiful Haldi ceremony setup, everything was perfect. The team's attention to detail and professionalism is unmatched. Highly recommended!",
      event: "Garden Wedding - Mumbai",
      date: "December 2024"
    },
    {
      id: 2,
      name: "Anjali & Vikram Patel",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=200&h=200&fit=crop&crop=faces",
      rating: 5,
      text: "We couldn't have asked for a better wedding planner! The Mahila Sangeet was absolutely spectacular with perfect lighting and entertainment. The catering was exceptional and all our guests were amazed. Thank you for making our day so special!",
      event: "Destination Wedding - Jaipur",
      date: "November 2024"
    },
    {
      id: 3,
      name: "Neha & Arjun Mehta",
      image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=200&h=200&fit=crop&crop=faces",
      rating: 5,
      text: "Outstanding service from start to finish! The team handled everything professionally - from the Mehndi setup to the grand entry. They understood our vision perfectly and exceeded our expectations. Our wedding was magical thanks to Blissful Events!",
      event: "Luxury Wedding - Udaipur",
      date: "October 2024"
    },
    {
      id: 4,
      name: "Kavya & Aditya Singh",
      image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=200&h=200&fit=crop&crop=faces",
      rating: 5,
      text: "Amazing experience! The Gold package was worth every penny. The decorations were breathtaking and the food was delicious. They managed everything so smoothly that we could actually enjoy our own wedding without any stress!",
      event: "Garden Wedding - Delhi",
      date: "September 2024"
    },
    {
      id: 5,
      name: "Riya & Karan Gupta",
      image: "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?w=200&h=200&fit=crop&crop=faces",
      rating: 5,
      text: "Exceptional wedding planning service! They took care of every single detail and made sure everything was perfect. The team is creative, responsive, and genuinely cares about making your day special. We're so grateful!",
      event: "Traditional Wedding - Pune",
      date: "August 2024"
    },
    {
      id: 6,
      name: "Simran & Rohan Kapoor",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=200&h=200&fit=crop&crop=faces",
      rating: 5,
      text: "Best decision we made! From venue selection to the final goodbye, everything was flawlessly executed. The Platinum package gave us the luxury wedding we always dreamed of. Highly professional and talented team!",
      event: "Luxury Wedding - Goa",
      date: "July 2024"
    }
  ];

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="section">
        <h2 className="section-title">What Our Couples Say</h2>
        <p className="section-subtitle">
          Real stories from real couples whose dreams we helped bring to life
        </p>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <FaQuoteLeft className="quote-icon" />
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="star-icon" />
                ))}
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <img src={testimonial.image} alt={testimonial.name} />
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p className="event-type">{testimonial.event}</p>
                  <p className="event-date">{testimonial.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

