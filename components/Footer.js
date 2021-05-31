import { FooterLogo } from '../icons'

const Footer = () => {
  // A function to get the current year
  const getCurrentYear = new Date().getFullYear()

  return (
    <main className='py-5 text-gray-200 bg-secondary'>
      <div className='flex flex-col items-center justify-between max-w-4xl px-5 mx-auto xl:max-w-6xl md:flex-row'>
        <p className='order-last mx-0 text-center w-46 md:text-start md:w-auto md:order-first'>
          {getCurrentYear} &#169; <span className='text-primary'>Dotcentric</span> Code Test &#8211;
          All rights reseved <span className='hidden md:inline-block'>&#8211;</span>{' '}
          <span className='block md:inline-block'>Call 01234432123</span>
        </p>
        <div className='flex justify-center mb-5 md:mb-0 '>
          <FooterLogo />
        </div>
      </div>
    </main>
  )
}

export default Footer
