import React, { useState, useEffect } from 'react';
import { CgMenuRightAlt } from "react-icons/cg";
import { RxCross1 } from "react-icons/rx";
import '../main.css'
import Button from '../components/Button'
import logo from '../assets/icons/logo.svg'

function Header() {

  const [scrolled, setScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

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
        <div className='mybuttons'>
          <Button text="Let's Talk" />
          <div className='hamburger' onClick={() => setShowMenu(!showMenu)}>
            <CgMenuRightAlt className='menuicon' />
          </div>
        </div>
      </nav>
      {/* Side Menu */}
      {showMenu && 
        <div className='sidemenu'>
          <div className='flex items-center justify-between p-[20px]'>
            <img className='logo2' src={logo} alt="webcrafters" />
            <div className='closecont' onClick={() => setShowMenu(!showMenu)}>
              <RxCross1  className='closeicon' />
            </div>
          </div>
          <div className='about'>
            <h3>About WebCrafters</h3>
            <p>Development your website, a comprehensive guide to designing a website that converts visitors into customers in Flixta.</p>
          </div>
          <ul className='sidemenuitems'>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
        </div>
      }
    </>
  )
}

export default Header
