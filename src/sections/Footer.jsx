import React from 'react'
import logo from '../assets/icons/logo.svg'

function Footer() {
  return (
    <div className='footer'>
      <img className='logo' src={logo} alt="webcrafters" />
      <ul className='footerlinks'>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <div className='copyright'>
        <p>Copyright © 2025 Webcrafters</p>
      </div>
    </div>
  )
}

export default Footer
