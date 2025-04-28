import React, { useState } from 'react';
import './Maintain.css';
import personImage from '../../Assets/about-img.png'; // Replace with your smiling image

const Maintain = () => {
  const [system, setSystem] = useState('imperial');
  const [heightFt, setHeightFt] = useState('');
  const [heightIn, setHeightIn] = useState('');
  const [weightLbs, setWeightLbs] = useState('');
  const [heightCm, setHeightCm] = useState('');
  const [weightKg, setWeightKg] = useState('');
  const [bmiResult, setBmiResult] = useState(null);
  const [bmiCategory, setBmiCategory] = useState('');

  const calculateBMI = () => {
    let bmi = 0;
    if (system === 'imperial') {
      const totalInches = (parseFloat(heightFt) * 12) + parseFloat(heightIn);
      bmi = (parseFloat(weightLbs) / (totalInches * totalInches)) * 703;
    } else {
      const heightMeters = parseFloat(heightCm) / 100;
      bmi = parseFloat(weightKg) / (heightMeters * heightMeters);
    }
    const roundedBmi = bmi.toFixed(1);
    setBmiResult(roundedBmi);

    // Determine BMI Category
    if (bmi < 18.5) {
      setBmiCategory('underweight');
    } else if (bmi >= 18.5 && bmi < 25) {
      setBmiCategory('normal');
    } else if (bmi >= 25 && bmi < 30) {
      setBmiCategory('overweight');
    } else {
      setBmiCategory('obese');
    }
  };

  return (
    <section className="maintain-section">
      <div className="maintain-wrapper">
        {/* LEFT IMAGE */}
        <div className="maintain-left">
          <img src={personImage} alt="Healthy Person" />
        </div>

        {/* RIGHT TEXT CONTENT */}
        <div className="maintain-right">
          <small>About Us</small>
          <h2>Workout Program Made For You.</h2>
          <p>
            Venatis iaculis. Donec a mi enim. Morbi euismod vel dolor vitae congue. 
            Proin vel dui semper, bibendum leo in, pellentesque magna. 
            Duis convallis sodales magna. Fusce eu nisi interdum, molestie nisi eu, pretium dolor.
          </p>

          <div className="features">
            <div className="feature-item">
              <div className="feature-icon">
                <i className="fas fa-apple-alt"></i> {/* Nutrition icon */}
              </div>
              <div className="feature-title">Nutrition Plans</div>
              <div className="feature-description">Get personalized healthy meal planning tips for better living.</div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <i className="fas fa-dumbbell"></i> {/* Exercise icon */}
              </div>
              <div className="feature-title">Exercise Daily</div>
              <div className="feature-description">Stay active daily with easy-to-follow workouts tailored to your goals.</div>
            </div>
          </div>
        </div>
      </div>

      {/* BMI CALCULATOR SECTION */}
      <div className="bmi-section">
        <h3>BMI Calculator</h3>
        <div className="bmi-form">
          <div className="bmi-toggle">
            <button
              className={system === 'imperial' ? 'active' : ''}
              onClick={() => setSystem('imperial')}
            >
              Imperial
            </button>
            <button
              className={system === 'metric' ? 'active' : ''}
              onClick={() => setSystem('metric')}
            >
              Metric
            </button>
          </div>

          {/* Imperial System Inputs */}
          {system === 'imperial' ? (
            <>
              <input
                type="number"
                placeholder="Height (ft)"
                value={heightFt}
                onChange={(e) => setHeightFt(e.target.value)}
              />
              <input
                type="number"
                placeholder="Height (in)"
                value={heightIn}
                onChange={(e) => setHeightIn(e.target.value)}
              />
              <input
                type="number"
                placeholder="Weight (lbs)"
                value={weightLbs}
                onChange={(e) => setWeightLbs(e.target.value)}
              />
            </>
          ) : (
            <>
              {/* Metric System Inputs */}
              <input
                type="number"
                placeholder="Height (cm)"
                value={heightCm}
                onChange={(e) => setHeightCm(e.target.value)}
              />
              <input
                type="number"
                placeholder="Weight (kg)"
                value={weightKg}
                onChange={(e) => setWeightKg(e.target.value)}
              />
            </>
          )}

          <button className="calculate-btn" onClick={calculateBMI}>Calculate</button>
        </div>

        {/* BMI Result */}
        {bmiResult && (
          <div className={`bmi-result ${bmiCategory}`}>
            Your BMI is: <strong>{bmiResult}</strong>
          </div>
        )}
      </div>
    </section>
  );
};

export default Maintain;
