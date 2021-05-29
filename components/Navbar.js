import Link from 'next/link'
import { FooterLogo, NavbarLogo } from '../icons'
import { CgMenu } from 'react-icons/cg'
import { useStateProvider } from '../context/StateContext'
import MobileNav from './MobileNav'
import { useEffect, useState } from 'react'
import NavLinkItems from './NavLinkItems'

const Navbar = () => {
  const { scroll } = useStateProvider()
  const [mobileMenu, setMobileMenu] = useState(false)

  const [isBrowser, setIsBrowser] = useState(false)

  // This code executes on the client side only after the components mounts
  useEffect(() => {
    setIsBrowser(true)
  }, [])

  // Function to open the mobile menu
  const openSideMenu = () => {
    if (isBrowser) {
      document.body.style.overflow = 'hidden'
    }
    setMobileMenu(true)
  }

  const closeSideMenu = () => {
    setMobileMenu(false)
    if (isBrowser) {
      document.body.style.overflow = 'scroll'
    }
  }

  return (
    <div>
      <nav
        className={`${
          scroll
            ? 'bg-gray-900 transition-all  duration-500'
            : 'bg-white transition-all  duration-700'
        } fixed w-full top-0 py-5 md:px-14 px-5 z-10`}>
        <div className='flex items-center justify-between max-w-4xl mx-auto xl:max-w-6xl'>
          <Link href='/'>
            <a>{scroll ? <FooterLogo /> : <NavbarLogo />}</a>
          </Link>
          <div className='hidden md:block'>
            <div className='flex items-center space-x-2 text-gray-800 lg:space-x-8'>
              <NavLinkItems label='about us' href='/about-us' />
              <NavLinkItems label='about you' href='/about-you' />
              <NavLinkItems label='portfolio' href='/portfolio' />
              <NavLinkItems label='contact' href='/contact' />
            </div>
          </div>
          <button
            onClick={openSideMenu}
            className='md:hidden focus:outline-none'
            aria-label='Open mobile navs'>
            <CgMenu className={`${scroll && 'text-gray-100'}`} size={30} />
          </button>
        </div>
      </nav>
      <MobileNav mobileMenu={mobileMenu} closeSideMenu={closeSideMenu} />
    </div>
  )
}

export default Navbar
