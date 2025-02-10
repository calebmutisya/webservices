import React, { useState, useEffect } from 'react';
import { CgMenuRightAlt } from "react-icons/cg";
import { RxCross1 } from "react-icons/rx";
import '../main.css';
import Button from '../components/Button';
import logo from '../assets/icons/logo.svg';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    const handleClickOutside = (event) => {
      if (showMenu && !event.target.closest(".sidemenu") && !event.target.closest(".hamburger")) {
        setShowMenu(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showMenu]);

  return (
    <>
      <nav className={scrolled ? 'scrolled' : ''}>
        <img className="logo" src={logo} alt="webcrafters" />
        <ul className="sections">
          <li>Services</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
        <div className="mybuttons">
          <Button text="Let's Talk" />
          <div className="hamburger" onClick={() => setShowMenu(true)}>
            <CgMenuRightAlt className="menuicon" />
          </div>
        </div>
      </nav>

      {/* Side Menu */}
      <div className={`sidemenu ${showMenu ? 'show' : ''}`} aria-hidden={!showMenu}>
        <div className="flex items-center justify-between p-[20px]">
          <img className="logo2" src={logo} alt="webcrafters" />
          <div className="closecont" onClick={() => setShowMenu(false)}>
            <RxCross1 className="closeicon" />
          </div>
        </div>
        <div className="about">
          <h3>About WebCrafters</h3>
          <p>Development of your website, a comprehensive guide to designing a website that converts visitors into customers in Flixta.</p>
        </div>
        <ul className="sidemenuitems">
          <li>Services</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </div>
    </>
  );
}

export default Header;
