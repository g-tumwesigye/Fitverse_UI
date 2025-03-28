import React from 'react';
import './rev.css';

const Rev = () => {
  return (
    <div className='rev'>
      <h2>What Our Users Say</h2>
      <div className='rev-card'>
        <div className='card'>
          <div className='user-info'>
            <img src="/pass1.jfif" alt="Sarah Johnson" className='user-img' />
            <div className='user-details'>
              <h4>Sarah Johnson</h4>
              <p className='title'>Fitness Trainer</p>
            </div>
          </div>
          <p className='review-text'>
            FitVerse has become an essential tool in my fitness coaching practice. The accuracy and ease of use make it perfect for quick assessments.
          </p>
        </div>

        <div className='card'>
          <div className='user-info'>
            <img src="/pass2.jfif" alt="Michael Chen" className='user-img' />
            <div className='user-details'>
              <h4>Michael Chen</h4>
              <p className='title'>Healthcare Professional</p>
            </div>
          </div>
          <p className='review-text'>
            As a healthcare professional, I appreciate FitVerse precision and reliability. It’s become my go-to recommendation for patients tracking their health progress.
          </p>
        </div>

        <div className='card'>
          <div className='user-info'>
            <img src="/pass3.jfif" alt="Emma Williams" className='user-img' />
            <div className='user-details'>
              <h4>Emma Williams</h4>
              <p className='title'>Nutritionist</p>
            </div>
          </div>
          <p className='review-text'>
            FitVerse interface is clean, results are precise and the health insights are invaluable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rev;
