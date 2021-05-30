import { SpeechMarkIcon } from '../icons'

const Testimonials = () => {
  return (
    <main className='max-w-4xl px-5 mx-auto mb-20 xl:max-w-6xl'>
      <hr />
      <div className='flex max-w-2xl py-8 mx-auto md:py-12'>
        <SpeechMarkIcon />
        <span className='ml-5'>
          <p className='mb-4 '>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta ratione sit ipsam
            expedita fuga aut veniam, error aspernatur adipisicing.
          </p>
          <p className='hidden text-sm text-gray-600 md:block'>Roy Barber &#8212; Dotcentric</p>
          <p className='text-sm text-gray-600 md:hidden'>Roy Barber &#8212; Damage</p>
        </span>
      </div>
      <hr />
    </main>
  )
}

export default Testimonials
