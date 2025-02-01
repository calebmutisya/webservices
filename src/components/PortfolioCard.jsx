import React from 'react'
import { BiWorld } from "react-icons/bi";

import banner1 from '../assets/banners/banner1.png'


export default function PortfolioCard({url, image, title, description}) {
  return (
    <div className='portfoliocard'>
        <img src={image} alt="" />
        <div className='portfoliocontent'>
            <a href={url} target="_blank" rel="noopener noreferrer"  >
            <h3>{title} <BiWorld className='cardlink' /></h3>
            </a>
            <p>{description}</p>
        </div>
    </div>
  )
}
