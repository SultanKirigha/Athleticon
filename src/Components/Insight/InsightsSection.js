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
      </div>
    </section>
  );
};

export default InsightsSection;