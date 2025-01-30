import React, { useRef, useEffect } from 'react';import { banners } from '../constants/constants'
import BannerCard from './BannerCard'
import '../main.css'
function Intro() {
  return (
    <div className='intro'>

        <h1>Build beautiful websites.</h1>

        {/* Image Carousel */}
        <div className='card-carousel'>
            {banners.map((banner, index) => (
                <BannerCard key={index} image={banner.image} url={banner.url}/>
            ))}
        </div>
        
    </div>
  )
}

export default Intro
