import React from 'react'
import { ModeToggle } from '../ui/ModeToggle'
import Logo from "/my-logo transparent.png"

const Navbar = () => {



  const flexStyle = "flex justify-between items-center"

  return (
    <header>
      <nav className={`${flexStyle} w-300 mx-auto py-5`}>
        <div className='w-20'>
          <img src={Logo} alt="logo"/>
        </div>
        
        <div className={`${flexStyle} gap-5`}>
          <ul className='flex items-center gap-10'>
            <li>Project</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <ModeToggle/>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
