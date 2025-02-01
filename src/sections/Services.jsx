import React from 'react'
import '../main.css'
import services from '../assets/images/services.png'

import { myservices } from '../constants/constants'
import ServiceCard from '../components/ServiceCard'

export default function Services() {
  return (
    <div className='services'>
      <h2>My Quality Services</h2>
      <p>Development your website, a comprehensive guide to designing a website that converts visitors into customers in Flixta.</p>
      <div className='servicecont'>
        <div>
          <img className='servicesimg' src={services} alt="services"/>
        </div>
        <div>
            {
                myservices.map((service, index) => (
                    <ServiceCard key={index} title={service.title} icon={service.icon} description={service.description} />
                ))
            }
        </div>
      </div>
    </div>
  )
}
