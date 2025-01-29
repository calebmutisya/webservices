import React from 'react'
import '../main.css'
import Button from './Button'
import logo from '../assets/icons/logo.svg'

function Header() {
  return (
    <>
      <nav>
        <img className='logo' src={logo} alt="webcrafters" />
        <ul className='sections'>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
        < Button text="Let's Talk" />
      </nav>
    </>
  )
}

export default Header
