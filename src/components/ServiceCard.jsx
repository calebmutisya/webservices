import React from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

export default function ServiceCard({ title, icon, description, showDescription, onToggle }) {
  return (
    <div className='servicecard'>
      <img className='serviceicon' src={icon} alt={title} />
      <div className='content'>
        <div className='cardheader'>
          <div className='cardtitle'>{title}</div>
          <div onClick={onToggle} className='toggle-icon'>
            {showDescription ? <FaArrowUp /> : <FaArrowDown />}
          </div>
        </div>
        {showDescription && <p className='carddescription'>{description}</p>}
      </div>
    </div>
  );
}
