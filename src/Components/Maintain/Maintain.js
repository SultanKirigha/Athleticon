import React from 'react';
import './Maintain.css';
import person from '../../Assets/image.png';
import fruit from '../../Assets/fruit.avif';
import veggie from '../../Assets/vegetables.webp';
import protein from '../../Assets/Adobe Express - file (6).png';
import water from '../../Assets/water.webp'; // 💧 your new water image


const MaintainSection = () => {
  return (
    <section className="maintain-section">
      <div className="maintain-container content-wrapper">
        {/* LEFT SIDE */}
        <div className="maintain-left">
          <h2>Move to <br />Maintain your <br />Health</h2>
          <p>
            Energize your lifestyle, embrace movement for a healthier you.
            Get motivated, stay active, and reap the benefits of a vibrant, well-nurtured body.
          </p>
        </div>

        {/* RIGHT VISUAL */}
        <div className="maintain-visual">
          <div className="circle-wrapper">
            <img src={person} alt="Fit Person" className="fit-person" />

            <div className="food-circle food-top">
              <img src={fruit} alt="Fruit" />
            </div>
            <div className="food-circle food-left">
              <img src={veggie} alt="Veggie" />
            </div>
            <div className="food-circle food-right">
              <img src={protein} alt="Protein" />
            </div>
            <div className="food-circle food-bottom">
            <img src={water} alt="Water" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default MaintainSection;
