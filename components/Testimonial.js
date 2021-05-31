const Testimonials = ({ name, message, company, company2 }) => {
  return (
    <main className='max-w-4xl px-5 mx-auto mb-10 xl:max-w-6xl md:mb-20'>
      <hr />
      <div className='flex items-start max-w-4xl py-8 mx-auto md:py-12'>
        <img className='pt-1' src='images/quotationmark.svg' alt='Quotation mark' />
        <div className='ml-4 md:ml-5'>
          <p className='mb-4 md:text-[1.7rem] text-xl text-gray-800 '>{message}</p>
          <p className='hidden text-gray-600 md:block'>
            {name} &#8212; {company}
          </p>
          <p className='text-gray-600 md:hidden'>
            {name} &#8212; {company2}
          </p>
        </div>
      </div>
      <hr />
    </main>
  )
}

export default Testimonials
