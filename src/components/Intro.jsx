import React, { useRef, useEffect } from 'react';import { banners } from '../constants/constants'
import '../main.css'
import SlickCarousel from './SlickCarousel';
import Services from './Services';
function Intro() {
  return (
    <div className='intro'>

        <h1>Build beautiful websites.</h1>
        <SlickCarousel/>
        <Services/>
    </div>
  )
}

export default Intro
