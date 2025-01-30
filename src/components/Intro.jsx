import React, { useRef, useEffect } from 'react';import { banners } from '../constants/constants'
import BannerCard from './BannerCard'
import '../main.css'
import SlickCarousel from './SlickCarousel';
function Intro() {
  return (
    <div className='intro'>

        <h1>Build beautiful websites.</h1>
        <SlickCarousel/>
    </div>
  )
}

export default Intro
