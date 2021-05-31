import Link from 'next/link'
import { FooterLogo, NavbarLogo } from '../icons'
import { useStateProvider } from '../context/StateContext'
import MobileNav from './MobileNav'
import { useState } from 'react'
import NavLinkItems from './NavLinkItems'

const Navbar = () => {
  const { scroll } = useStateProvider()
  const [mobileMenu, setMobileMenu] = useState(false)

  // Function to open and close the mobile menu
  const toggleMobileMenu = () => {
    setMobileMenu((menu) => !menu)
  }

  return (
    <div>
      <nav
        className={`${
          scroll
            ? 'md:bg-gray-900 transition-all  duration-500'
            : 'bg-white transition-all  duration-700'
        } md:fixed w-full top-0 py-5 md:px-14 px-5 z-10`}>
        <div className='flex items-center justify-between max-w-4xl mx-auto xl:max-w-6xl'>
          <Link href='/'>
            <a>{scroll ? <FooterLogo /> : <NavbarLogo />} </a>
          </Link>
          <div className='hidden md:block'>
            <div className='flex items-center space-x-2 text-gray-800'>
              <NavLinkItems label='about us' href='/about-us' />
              <NavLinkItems label='about you' href='/about-you' />
              <NavLinkItems label='portfolio' href='/portfolio' />
              <NavLinkItems label='contact' href='/contact' />
            </div>
          </div>
          <button
            onClick={toggleMobileMenu}
            className='md:hidden focus:outline-none'
            aria-label='Open mobile navs'>
            <img src='/assets/img/menu.png' alt='Menu bar' />
          </button>
        </div>
      </nav>
      <MobileNav mobileMenu={mobileMenu} toggleMobileMenu={toggleMobileMenu} />
    </div>
  )
}

export default Navbar
