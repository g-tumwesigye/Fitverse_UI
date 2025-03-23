import React, { useState } from 'react';
import { IoMdArrowForward } from 'react-icons/io';
import './hero.css';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    weight: '',
    height: '',
    age: '',
    BMI: '',
    gender: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateBMI = () => {
    const bmi = (formData.weight / (formData.height * formData.height)).toFixed(1);
    console.log('Calculated BMI:', bmi);
    // You can add more logic here to handle the result
    setIsModalOpen(false);
  };

  return (
    <div className='hero'>
      <div className='hero-content'>
        <h1>Your Journey to Better Health Starts Here</h1>
        <p>Discover your body mass index with our advanced 
           BMI calculator. Take the first step towards a healthier
           lifestyle with personalized insights and recommendations.</p>
        <div className='button-container'>
          <button onClick={() => setIsModalOpen(true)}>
            Calculate now <IoMdArrowForward />
          </button>
          <button>
            Retrain
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>BMI Calculator</h2>
            <div className="form-group">
              <label>Weight (kg):</label>
              <input
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleInputChange}
                placeholder="e.g. 78"
              />
            </div>
            <div className="form-group">
              <label>Height (m):</label>
              <input
                type="number"
                name="height"
                value={formData.height}
                onChange={handleInputChange}
                placeholder="e.g. 1.78"
                step="0.01"
              />
            </div>
            <div className="form-group">
              <label>Age:</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                placeholder="e.g. 31"
              />
            </div>
            <div className="form-group">
              <label>BMI:</label>
              <input
                type="number"
                name="BMI"
                value={formData.BMI}
                onChange={handleInputChange}
                placeholder="e.g. 22"
                step="0.01"
              />
            </div>
            <div className="form-group">
              <label>Gender:</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="modal-buttons">
              <button onClick={calculateBMI}>Calculate BMI</button>
              <button onClick={() => setIsModalOpen(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;