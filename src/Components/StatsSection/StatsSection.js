import React from 'react';
import './StatsSection.css';
import avatar1 from '../../Assets/avatar1.jpg';
import avatar2 from '../../Assets/avatar2.jpg';
import avatar3 from '../../Assets/avatar3.jpg';
import { FaStar } from 'react-icons/fa';

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stat-box">
          <div className="stat-head">
            <img src={avatar1} alt="user" className="avatar" />
            <img src={avatar2} alt="user" className="avatar" />
            <img src={avatar3} alt="user" className="avatar" />
            <span className="stat-number">120K+</span>
          </div>
          <p>Thousands trust it for a reason. Join team and discover the benefits!</p>
        </div>

        <div className="stat-box">
          <div className="stat-head">
            <FaStar className="icon star" />
            <span className="stat-number">4.8</span>
          </div>
          <p>Positive ratings by pulse users around the world! Check the review here.</p>
        </div>

        <div className="stat-box">
          <span className="stat-number">100+</span>
          <p>A lot of workouts available now and still counting more!</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
