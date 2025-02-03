import React from 'react'
import { CiCalendar } from "react-icons/ci";
import { IoIosPricetags } from "react-icons/io";

export default function PriceCard({plan, description,deliveryperiod, pricerange}) {
  return (
    <div className='pricecard'>
      <h3 className='plan'>{plan}</h3>
      <div className='deliveryperiod'><CiCalendar className='pricecardicon' /> {deliveryperiod}</div>
      <div className='pricerange'><IoIosPricetags className='pricecardicon' /> {pricerange}</div>
      <p className='description'>{description}</p>
    </div>
  )
}
