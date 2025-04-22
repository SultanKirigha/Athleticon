import React, { useState } from 'react';
import './Hero.css';
import HeroImage from '../../Assets/man-with-barbell.jpg'; // Make sure this is your actual image path

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
        <div className="hero-container">
          <div className="hero-left">
            <h1>Fitness &<br /><span>Health Training</span></h1>
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
            <img src={HeroImage} alt="Workout" />
          </div>
        </div>
      </section>
    </header>
  );
};

export default Hero;
