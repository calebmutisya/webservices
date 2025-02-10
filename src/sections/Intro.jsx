import React from 'react';
import SlickCarousel from '../components/SlickCarousel';
import clouds from '../assets/images/cloud2.png';

function Intro() {
  return (
    <div className='intro'>
      <img src={clouds}/>
      <h1>Let's Build You A Beautiful Website.</h1>
      <SlickCarousel/>
    </div>
  )
}

export default Intro
