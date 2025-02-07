import React, { useRef, useEffect } from 'react';import { banners } from '../constants/constants'
import '../main.css'
import SlickCarousel from '../components/SlickCarousel';
import Services from './Services';
import RecentWork from './RecentWork';

function Intro() {
  return (
    <div className='intro'>
      <h1>Build beautiful websites.</h1>
      <SlickCarousel/>
    </div>
  )
}

export default Intro
