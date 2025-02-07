import React, { useState, useEffect } from 'react';
import '../main.css'
import Button from '../components/Button'
import logo from '../assets/icons/logo.svg'

function Header() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={scrolled ? 'scrolled' : ''}>
        <img className='logo' src={logo} alt="webcrafters" />
        <ul className='sections'>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
        <Button text="Let's Talk" />
      </nav>
    </>
  )
}

export default Header
