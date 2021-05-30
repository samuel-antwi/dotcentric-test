//  A re-usable heading component
const Heading = ({ title }) => {
  return (
    <h1 className='mx-auto mb-4 text-2xl text-gray-800 capitalize md:text-3xl md:w-auto w-60'>
      {title}
    </h1>
  )
}

export default Heading
