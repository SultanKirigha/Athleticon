import React from 'react';
import './InsightsSection.css';

import topImg from '../../Assets/drinking.jpg';
import middleImg from '../../Assets/Running.jpg';
import bottomImg from '../../Assets/Cardio.jpg';

const InsightsSection = () => {
  return (
    <section className="insights-section">
      <div className="insights-wrapper">

        {/* LEFT: Vertical Stacked Images */}
        <div className="insights-images">
          <img src={topImg} alt="Top" className="insight-img" />
          <img src={middleImg} alt="Middle" className="insight-img" />
          <img src={bottomImg} alt="Bottom" className="insight-img" />
        </div>

        {/* RIGHT: Text aligned to middle image */}
        <div className="insights-text">
          <small>Achieve your Goals</small>
          <div className="heading-row">
            <h2>
              Personalized Insights <br />
              and Recommendations
            </h2>
            <div className="arrow-controls">
              <button className="arrow left"></button>
              <button className="arrow right"></button>
            </div>
          </div>
          <p>
            Based on your body composition data, Fits offers personalized insights and
            recommendations tailored to your specific goals and needs.
          </p>
        </div>

      </div>
    </section>
  );
};

export default InsightsSection;