import React, { useState } from 'react';
import './Hero.css';
import HeroImage from '../../Assets/hero-person.jpg';

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="hero-wrapper">
      {/* Navigation Bar */}
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

      {/* Main Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-left">
            <h1 className="hero-title">
              Fitness &<br />
              <span className="hero-highlight">Health Training</span>
            </h1>
            <p className="hero-subtext">
              Strong is the simplest, most intuitive workout tracking experience.<br />
              Trusted by over 3 million users worldwide.
            </p>
            <button className="hero-btn">Get Started</button>

            <div className="hero-stats">
              <div><strong>3.2k</strong><br />Happy User</div>
              <div><strong>350k</strong><br />Running Track</div>
              <div><strong>100+</strong><br />Workout Type</div>
            </div>
          </div>

          <div className="hero-right">
            <img src={HeroImage} alt="Fitness person" className="hero-img" />
          </div>
        </div>
      </section>
    </header>
  );
};

export default Hero;
