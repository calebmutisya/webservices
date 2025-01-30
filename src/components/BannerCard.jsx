import React from 'react'
import banner1 from '../assets/banners/banner1.png'
import { BiWorld } from "react-icons/bi";

export default function BannerCard({image, url}) {
  return (
    <div className='banner'>
      <img src={image} alt="" />
      <a href={url} className='linklabel' target="_blank" rel="noopener noreferrer"> <BiWorld className='icon' /> Visit Site</a>
    </div>
  )
}
