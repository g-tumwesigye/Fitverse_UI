import React, { useState } from 'react';
import { IoMdArrowForward } from 'react-icons/io';
import './hero.css';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRetrainModalOpen, setIsRetrainModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    weight: '',
    height: '',
    age: '',
    BMI: '',
    gender: ''
  });
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [retrainFile, setRetrainFile] = useState(null);
  const [retrainResult, setRetrainResult] = useState(null);
  const [retrainError, setRetrainError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePredict = async () => {
    const { weight, height, age, BMI, gender } = formData;
    if (!weight || !height || !age || !BMI || !gender) {
      setError('Please fill in all fields.');
      setPrediction(null);
      return;
    }

    setIsLoading(true);
    setError(null);
    setPrediction(null);

    try {
      const payload = {
        Weight: parseFloat(weight),
        Height: parseFloat(height),
        BMI: parseFloat(BMI),
        Age: parseFloat(age),
        Gender: gender
      };

      const response = await fetch('https://fitverse-q8be.onrender.com/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setPrediction(result.predicted_bmi_case);
    } catch (err) {
      console.error('Error during prediction:', err);
      setError(err.message || 'Failed to get prediction. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileChange = (e) => {
    setRetrainFile(e.target.files[0]);
  };

  const handleRetrain = async () => {
    if (!retrainFile) {
      setRetrainError('Please upload a CSV file.');
      return;
    }

    setIsLoading(true);
    setRetrainError(null);
    setRetrainResult(null);

    const formData = new FormData();
    formData.append('file', retrainFile);

    try {
      const response = await fetch('https://fitverse-q8be.onrender.com/retrain', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setRetrainResult(result); // Use the full response from the backend
    } catch (err) {
      console.error('Error during retraining:', err);
      setRetrainError(err.message || 'Failed to retrain model. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='hero'>
      <div className='hero-content'>
        <h1>FitVerse, your journey to a better health starts here</h1>
        <p>Experience the future of health monitoring with our cutting-edge machine learning technology. Get precise BMI classifications and personalized insights.</p>
        <div className='button-container'>
          <button onClick={() => setIsModalOpen(true)}>
            Predict <IoMdArrowForward />
          </button>
          <button onClick={() => setIsRetrainModalOpen(true)}>
            Retrain
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>BMI Case Prediction</h2>
            <div className="form-group">
              <label>Weight (kg):</label>
              <input
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleInputChange}
                placeholder="e.g. 78"
                min="0"
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
                min="0"
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
                min="0"
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
                min="0"
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
              <button onClick={handlePredict} disabled={isLoading}>
                {isLoading ? 'Predicting...' : 'Predict BMI Case'}
              </button>
              <button onClick={() => setIsModalOpen(false)} disabled={isLoading}>
                Close
              </button>
            </div>
            {prediction && (
              <div className="prediction-result">
                <h3>Prediction Result</h3>
                <p>Your predicted BMI case is: <strong>{prediction}</strong></p>
              </div>
            )}
            {error && (
              <div className="error-message">
                <p>{error}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {isRetrainModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content retrain-modal">
            <h2>Retrain Model</h2>
            <div className="form-group">
              <label>Upload New Dataset (.csv):</label>
              <input
                type="file"
                accept=".csv"
                onChange={handleFileChange}
              />
            </div>
            <div className="modal-buttons">
              <button onClick={handleRetrain} disabled={isLoading}>
                {isLoading ? 'Retraining...' : 'Retrain Model'}
              </button>
              <button onClick={() => setIsRetrainModalOpen(false)} disabled={isLoading}>
                Close
              </button>
            </div>
            {retrainResult && (
              <div className="retrain-result">
                <h3>Retraining Results</h3>
                <p><strong>Message:</strong> {retrainResult.message}</p>
                {retrainResult.metrics && (
                  <>
                    <h4>Performance Metrics</h4>
                    <ul>
                      <li><strong>Test Loss:</strong> {retrainResult.metrics.test_loss.toFixed(4)}</li>
                      <li><strong>Accuracy:</strong> {retrainResult.metrics.accuracy.toFixed(4)}</li>
                      <li><strong>Precision:</strong> {retrainResult.metrics.precision.toFixed(4)}</li>
                      <li><strong>Recall:</strong> {retrainResult.metrics.recall.toFixed(4)}</li>
                      <li><strong>F1 Score:</strong> {retrainResult.metrics.f1_score.toFixed(4)}</li>
                    </ul>
                  </>
                )}
                {retrainResult.confusion_matrix && (
                  <div>
                    <h4>Confusion Matrix</h4>
                    <img src={`data:image/png;base64,${retrainResult.confusion_matrix}`} alt="Confusion Matrix" />
                  </div>
                )}
                {retrainResult.loss_plot && (
                  <div>
                    <h4>Training vs Validation Loss</h4>
                    <img src={`data:image/png;base64,${retrainResult.loss_plot}`} alt="Loss Plot" />
                  </div>
                )}
              </div>
            )}
            {retrainError && (
              <div className="error-message">
                <p>{retrainError}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
