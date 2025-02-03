import React from 'react'
import { pricing } from '../constants/constants'
import PriceCard from '../components/PriceCard'

export default function Pricing() {
  return (
    <div className='pricing'>
      <h2>Pricing</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Necessitatibus in officia earum nobis obcaecati!</p>
      <div className='pricingcont'>
        {
            pricing.map((plan, index) => (
                <PriceCard key={index} plan={plan.plan} description={plan.description} deliveryperiod={plan.deliveryperiod} pricerange={plan.pricerange} />
            ))
        }
      </div>
    </div>
  )
}
