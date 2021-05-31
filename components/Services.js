import Heading from './Heading'
import xcls from 'xcls'

const Services = ({ services }) => {
  return (
    <main
      className={xcls(
        'flex justify-center max-w-4xl ',
        'mx-auto mb-2 md:mb-20 xl:max-w-6xl md:px-0'
      )}>
      <div className='px-5 md:px-0'>
        <div className='max-w-2xl mx-auto mb-8 text-center md:mb-20 '>
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
            return (
              <div className='col-span-1 mb-8 md:px-5 md:mb-0 ' key={service.id}>
                <div
                  className={xcls(
                    'flex w-40 h-40 mx-auto  relative ',
                    'p-3 mb-2 bg-[#D9DEE2] rounded-full'
                  )}>
                  <img width={150} height={150} src={service.image} alt='Service Baner' />
                  <ServiceNumber index={index} />
                </div>
                <span className='text-center'>
                  <h1 className='mb-3 text-2xl tracking-wide text-gray-800'>{service.name}</h1>
                  <p className='text-gray-600 '>{service.description}</p>
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}

// Put the service image number into a component for readability
const ServiceNumber = ({ index }) => {
  return (
    <p
      className={xcls(
        'absolute right-3 flex items-center justify-center',
        'w-8 h-8 text-gray-100 -mt-4 text-xl rounded-full bg-primary'
      )}>
      {index + 1}
    </p>
  )
}

export default Services
