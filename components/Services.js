import Heading from './Heading'
import Image from 'next/image'

const Services = ({ services }) => {
  return (
    <main className='flex justify-center max-w-4xl mx-auto mb-2 md:mb-20 xl:max-w-6xl md:px-0'>
      <div className='px-5 md:px-0'>
        <div className='max-w-xl mx-auto mb-8 text-center md:mb-20 '>
          <Heading title='we do really awesome things' />
          <p className='text-sm text-gray-500 md:text-lg'>
            Lorem ipsum dolor sit,{' '}
            <a
              className='mr-1 text-primary'
              href='https://www.dotcentric.co.uk/'
              target='_blank'
              rel='noreferrer noopener'>
              link
            </a>
            amet consectetur adipisicing elit. Soluta ratione sit ipsam expedita fuga aut veniam,
            error aspernatur.
          </p>
        </div>
        <div className='grid-cols-3 gap-10 md:grid'>
          {services.map((service, index) => {
            const serviceImage =
              (index === 0 && '/images/service-badge-1.png') ||
              (index === 1 && '/images/service-badge-2.png') ||
              (index === 2 && '/images/service-badge-3.png')
            return (
              <div className='col-span-1 mb-8 md:mb-0' key={service.id}>
                <div className='flex justify-center mb-2'>
                  <Image src={serviceImage} width={120} height={120} alt='Service Baner' />
                </div>
                <span className='text-center'>
                  <h1 className='mb-3 text-xl'>{service.name}</h1>
                  <p className='text-sm text-gray-600'>{service.description}</p>
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}

export default Services
