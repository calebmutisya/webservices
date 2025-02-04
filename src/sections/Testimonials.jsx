import React, { useState, useEffect } from 'react';
import { ImQuotesRight } from "react-icons/im";

import { attestments } from '../constants/constants';

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % attestments.length);
    }, 6000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='testimonials'>
      <ImQuotesRight className='quotes' />
      <div className='testimonialscont'>
        <div className='singletestimony'>
          <p className='testimony'>{attestments[index].testimony}</p>
          <div>
              <h3>{attestments[index].name}</h3>
              <p className='position'>{attestments[index].position}</p>
          </div>
        </div>
      </div>
      <div className='pagination'>
        {attestments.map((_, i) => (
          <span 
            key={i} 
            className={i === index ? 'active' : ''} 
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </div>
  );
}
