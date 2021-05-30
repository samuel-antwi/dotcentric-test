import { SpeechMarkIcon } from '../icons'

const Testimonials = ({ name, message, company, company2 }) => {
  return (
    <main className='max-w-4xl px-5 mx-auto mb-10 xl:max-w-6xl md:mb-20'>
      <hr />
      <div className='flex max-w-2xl py-8 mx-auto md:py-12'>
        <SpeechMarkIcon />
        <span className='ml-5'>
          <p className='mb-4 '>{message}</p>
          <p className='hidden text-sm text-gray-600 md:block'>
            {name} &#8212; {company}
          </p>
          <p className='text-sm text-gray-600 md:hidden'>
            {name} &#8212; {company2}
          </p>
        </span>
      </div>
      <hr />
    </main>
  )
}

export default Testimonials
