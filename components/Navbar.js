import Link from 'next/link'
import { useRouter } from 'next/router'
import { FooterLogo, NavbarLogo } from '../icons'
import { CgMenu } from 'react-icons/cg'
import { useStateProvider } from '../context/StateContext'

const Navbar = () => {
  const { scroll } = useStateProvider()

  return (
    <nav
      className={`${
        scroll ? 'bg-[#0A090C] opacity-80 transition-all  duration-500' : 'bg-white transition-all  duration-700'
      } sticky top-0 py-5 md:px-14 px-5 z-10`}>
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
        <button className='md:hidden focus:outline-none' aria-label='Menu icon'>
          <CgMenu className={`${scroll && 'text-gray-100'}`} size={30} />
        </button>
      </div>
    </nav>
  )
}

const NavLinkItems = ({ href, label }) => {
  const router = useRouter()
  const { scroll } = useStateProvider()

  // This functions returns the pathname which is used to style the active link.
  const getPathName = (href) => {
    return router.pathname.includes(href)
  }

  return (
    <Link href={href}>
      <a
        className={`${getPathName(href) && 'bg-primary text-white'} ${
          scroll && 'text-gray-200'
        } capitalize  py-2 px-5 rounded-md  text-lg tracking-normal hover:bg-primary hover:text-white transition duration-300`}>
        {label}
      </a>
    </Link>
  )
}

export default Navbar
