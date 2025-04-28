// TestimonialSection.js (updated)

import React, { useEffect, useState } from 'react';
import './TestimonialSection.css';

import scribbleLine from '../../Assets/shape-img01.png';
import avocadoPlate from '../../Assets/avacado.png';

import davidImg from '../../Assets/before-after-img03.jpg';
import annaImg from '../../Assets/anna.jpg';
import simonImg from '../../Assets/after.jpg';

const testimonials = [
  {
    quote: "Vestibulum quis enim viverra massa blandit accumsan in placerat libero. Nulla dapibus aliquam augue ut egestas.",
    name: "David Kim",
    position: "Fitness Coach",
    image: davidImg,
  },
  {
    quote: "Phasellus at purus eu lorem condimentum vestibulum. Aenean eu lectus id ipsum posuere finibus.",
    name: "Anna Lee",
    position: "Nutritionist",
    image: annaImg,
  },
  {
    quote: "Msnenatis iaculis. Donec a mi enim. Morbi euismod vel dolor vitae congue. Proin vel dui semper.",
    name: "Simon Amour",
    position: "Manager",
    image: simonImg,
  },
];

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonial-section">
      {/* <img src={scribbleLine} alt="Scribble" className="scribble-bg" /> */}

      <div className="testimonial-container">
        <div className="testimonial-image">
          <img
            src={testimonials[activeIndex].image}
            alt={testimonials[activeIndex].name}
            className="fade-in"
          />
        </div>

        <div className="testimonial-content">
          <h3>Story of Success</h3>
          <p className="quote">{testimonials[activeIndex].quote}</p>
          <p className="name">{testimonials[activeIndex].name}</p>
          <p className="position">{testimonials[activeIndex].position}</p>

          <div className="dots">
            {testimonials.map((_, idx) => (
              <span
                key={idx}
                className={`dot ${idx === activeIndex ? 'active' : ''}`}
              ></span>
            ))}
          </div>
        </div>
      </div>

      {/* <img src={avocadoPlate} alt="Plate" className="plate-bg" /> */}
    </section>
  );
};

export default TestimonialSection;
