import React from 'react';
import './ObjectivesSection.css';

const ObjectivesSection = () => {
  return (
    <section className="objectives-section">
      <h2>Achieve your Health <br />Objectives in 1-2-3</h2>

      <div className="objectives-wrapper">
        {/* LEFT COLUMN (stacked) */}
        <div className="left-column">
          <div className="objective-card pink">
            <div className="icon-circle">🎯</div>
            <h3>Smarter Training</h3>
            <p>
              Turn your phone or smartwatch into your coach—track your workouts and get tons of data and tips to help you run better.
            </p>
          </div>

          <div className="objective-card yellow">
            <div className="icon-circle">📍</div>
            <h3>Custom Workouts</h3>
            <p>
              Marathon? 5K? Get tailored training plans created just for you — wherever you're at.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="right-column objective-card green">
          <div className="icon-circle">🟢</div>
          <h3>Strong Community</h3>
          <p>
            Create your own custom challenges to push yourself and your friends. For extra motivation, reach out and find support from the entire community.
          </p>

          <div className="info-card">
            <span>🌅 Morning Entry</span>
            <small>Added</small>
          </div>
          <div className="info-card">
            <span>🌙 Evening Reflection</span>
            <small>Not yet added</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObjectivesSection;
