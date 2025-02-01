import React from 'react'
import { porfolio } from '../constants/constants'
import PortfolioCard from '../components/PortfolioCard'

export default function RecentWork() {
  return (
    <div className='recentwork'>
      <h2>My Recent Work</h2>
      <p>Development your website, a comprehensive guide to designing a website that converts visitors into customers in Flixta.</p>
      <div className='portfoliocont'>
        {
            porfolio.map((portfolio, index) => (
                <PortfolioCard key={index} url={portfolio.url} image={portfolio.image} title={portfolio.title} description={portfolio.description} />
            ))
        }
      </div>
    </div>
  )
}
