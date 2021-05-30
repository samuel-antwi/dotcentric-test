import { MdClose } from 'react-icons/md'
import NavLinkItems from './NavLinkItems'

const SideNav = ({ mobileMenu, toggleMobileMenu }) => {
  return (
    <div
      className={` ${
        mobileMenu ? '-translate-x-0' : '-translate-x-full'
      }  bg-secondary w-full p-8 text-blue-50  absolute inset-y-0 z-[20] md:relative md:hidden transition duration-500 left-0 transform h-[100vh] ease-in-out`}>
      <div>
        <div className='flex items-center justify-between'>
          <button aria-label='hide mobile nav' onClick={toggleMobileMenu}>
            <MdClose className='text-gray-100 hover:text-primary' size={25} />
          </button>
        </div>
        <div className='flex flex-col pt-10 '>
          <div className='m-auto'>
            <div className='flex flex-col space-y-3'>
              <NavLinkItems label='about us' href='/about-us' />
              <NavLinkItems label='about you' href='/about-you' />
              <NavLinkItems label='portfolio' href='/portfolio' />
              <NavLinkItems label='contact' href='/contact' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideNav
