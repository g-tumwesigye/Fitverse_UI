import React from 'react'
import './about.css'

const about = () => {
  return (
    <div className='about'>
      <div className='about-content'>
         <h2>Why BMI Matters?</h2>
         <p>Body Mass Index (BMI) is a simple yet 
            powerful indicator of your overall health status. 
            It helps you understand if your weight is in a healthy
             range and can be a valuable tool in preventing 
             various health conditions.</p>
        
      </div>
      <div className='about-image'>
       <img src="/girl.png" alt="" />
      </div>
    </div>
  )
}

export default about
