import React from 'react'

function Header() {
  return (
    <div className='bg-sky-300 text-base font-sans font-medium px-[10vw] h-[62px]
    flex justify-between items-center
    '>
      <h1 className='text-2xl'>LOGO</h1>
      <ul className='flex gap-[4vw]'>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <div>
        Let's Talk
      </div>
    </div>
  )
}

export default Header
