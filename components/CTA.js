import Image from 'next/image'
import Heading from './Heading'
import xcls from 'xcls'

const CTA = () => {
  return (
    <div className='mb-10 md:mb-20'>
      <div className='max-w-5xl mx-auto xl:max-w-6x '>
        <div className='max-w-xl mx-auto mb-8 text-center md:mb-20 '>
          <Heading title=' we do awesome things' />
          <p className='px-4 text-sm text-gray-500 md:px-0 md:text-lg'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta ratione sit ipsam
            expedita fuga aut veniam, error aspernatur.
          </p>
        </div>
        <div className='px-4 mx-auto xl:max-w-6xl md:max-w-4xl xl:px-0 md:px-20'>
          <Image
            src='/images/cta.jpg'
            width={1828}
            height={1110}
            alt='CTA Banner'
            priority={true}
            loading='eager'
          />
        </div>
      </div>
      <div className='py-4 -mt-2 text-white bg-primary'>
        <div className='items-center justify-between max-w-4xl px-5 mx-auto md:flex xl:max-w-6xl'>
          <p
            className={xcls(
              'w-40 mx-auto mb-3 text-center text-gray-100 ',
              'md:mx-0 md:text-start md:mb-0 md:w-auto'
            )}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit!
          </p>
          <a href='tel: 01234432123'>
            <button
              className={xcls(
                'font-light block bg-[#0e3757]  hover:bg-[#0C111D] transition',
                'duration-300  md:w-auto w-full py-2 px-5 rounded capitalize'
              )}
              aria-label='Call now'>
              Call now
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default CTA
