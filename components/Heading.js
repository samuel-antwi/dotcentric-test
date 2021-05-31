//  A re-usable heading component
const Heading = ({ title }) => {
  return (
    <h1 className='mx-auto mb-4 text-3xl text-gray-800 capitalize w-60 md:w-auto md:text-5xl'>
      {title}
    </h1>
  )
}

export default Heading
