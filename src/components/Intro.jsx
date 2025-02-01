import React, { useRef, useEffect } from 'react';import { banners } from '../constants/constants'
import '../main.css'
import SlickCarousel from '../sections/SlickCarousel';
import Services from '../sections/Services';
import RecentWork from '../sections/RecentWork';
function Intro() {
  return (
    <div className='intro'>

        <h1>Build beautiful websites.</h1>
        <SlickCarousel/>
        <Services/>
        <RecentWork/>
    </div>
  )
}

export default Intro
