import React, { useState } from 'react';
import './Hero.css';
import HeroImage from '../../Assets/man-with-barbell.jpg';
import DecorTop from '../../Assets/hero-lift.jpg';
import DecorBottom from '../../Assets/women-exercising-treadmill.jpg';

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="hero-wrapper">
      <nav className="hero-nav">
        <div className="hero-logo">🏋️‍♂️ Athleticon</div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        <ul className={`hero-nav-links ${menuOpen ? 'open' : ''}`}>
          <li>Home</li>
          <li>Exercise</li>
          <li>Features</li>
          <li>Services</li>
          <li>Premium</li>
        </ul>
      </nav>

      <section className="hero-section">
        <div className="hero-container content-wrapper">
          <div className="hero-left">
            <h1>
              Fitness &<br />
              <span>Health Training</span>
            </h1>
            <p>
              Strong is the simplest, most intuitive workout tracking experience.<br />
              Trusted by over 3 million users worldwide.
            </p>
            <button>Get Started</button>
            <div className="hero-stats">
              <div><strong>3.2k</strong><br />Happy Users</div>
              <div><strong>350k</strong><br />Running Tracks</div>
              <div><strong>100+</strong><br />Workout Types</div>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-image-wrapper">
              <img src={HeroImage} alt="Workout" className="main-hero-img" />
              <img src={DecorTop} alt="Top Decor" className="hero-decor top-right" />
              <img src={DecorBottom} alt="Bottom Decor" className="hero-decor bottom-left" />
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Hero;
