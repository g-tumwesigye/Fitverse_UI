import React from 'react'
import './about.css'

const about = () => {
  return (
    <div className='about'>
      <div className='about-content'>
         <h2>Why BMI Case Matters?</h2>
         <p>State-of-the-art machine learning algorithms ensure accurate BMI classifications tailored to individual profiles.</p>
        
      </div>
      <div className='about-image'>
       <img src="/girl.png" alt="" />
      </div>
    </div>
  )
}

export default about
