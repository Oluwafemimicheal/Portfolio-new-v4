import React, { useEffect, useState } from 'react'
import { ModeToggle } from '../ui/ModeToggle'
import Logo from "/my-logo transparent.png"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import { Menu } from 'lucide-react'

const links = [
  {
    id: "project",
    title: "Project"
  },
  {
    id: "how-i-work",
    title: "How i work"
  },
  {
    id: "faq",
    title: "FAQ's"
  },
  {
    id: "contact",
    title: "Contact"
  }
]

const Navbar = () => {
  const [scroll, setScroll] = useState(false)

  const flexStyle = "flex justify-between items-center"


  useEffect(() => {
    function scroll() {
      return window.scrollY < 150 ? setScroll(true) : setScroll(false)
    }

    window.addEventListener("scroll", scroll)

    return () => {
      window.removeEventListener("scroll", scroll)
    }

  }, [])

  return (
    <header className={`${scroll ? "sticky" : "fixed backdrop-blur-sm"} top-0 left-0 w-full z-99`}>
      <nav className={`${flexStyle} px-5 lg:px-0 lg:w-300 mx-auto py-2`}>
        <div className='w-14 lg:w-20'>
          <img src={Logo} alt="logo"/>
        </div>
        
        <div className={`${flexStyle} gap-5`}>
          <ul className='hidden lg:flex items-center gap-10'>
            {
              links.map((link) => (
                <li key={link.id}><a href={`#${link.id}`}>{link.title}</a></li>
              ))
            }
          </ul>



          <div className='lg:hidden block space-x-2'>
            <DropdownMenu className="">
              <DropdownMenuTrigger render={<Button variant="outline" />}>
                <Menu />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuGroup>
                  {
                    links.map((link) => (
                      <DropdownMenuItem key={link.id}><a href={`#${link.id}`}>{link.title}</a></DropdownMenuItem>
                    ))
                  }
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <ModeToggle />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
