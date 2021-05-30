import useForm from '../hook/useForm'
import validate from '../lib/validate'
import Heading from './Heading'
import { MdWarning } from 'react-icons/md'
import { CgAsterisk } from 'react-icons/cg'
import xcls from 'xcls'

const ContactForm = () => {
  const { handleChange, values, handleSubmit, errors } = useForm(validate)

  return (
    <main className='max-w-xl mx-auto mb-20'>
      <div className='px-5'>
        <Heading title='contact about awesomeness' />
        <p className='mb-10 text-center text-gray-500'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, adipisci, minus eius
          cumque nulla ipsum fugiat enim?
        </p>
        <div className='max-w-md mx-auto'>
          <form onSubmit={handleSubmit}>
            <InputField
              label='Your name'
              name='name'
              type='text'
              placeholder='Please enter your name'
              handleChange={handleChange}
              value={values.name}
              errors={errors?.name}
            />
            <InputField
              label='Your Telephone Number'
              name='phone'
              type='text'
              placeholder='Please enter your phone number'
              handleChange={handleChange}
              value={values.phone}
              errors={errors?.phone}
            />
            <InputField
              label='Your email'
              name='email'
              type='text'
              placeholder='Error: Please enter a valid email'
              handleChange={handleChange}
              value={values.email}
              errors={errors?.email}
            />
            <InputField
              label='Your message'
              name='message'
              type='textarea'
              placeholder='Please enter your message'
              handleChange={handleChange}
              value={values.message}
              errors={errors?.message}
            />
            <div className='flex justify-end mt-5'>
              <button
                className={xcls(
                  'bg-secondary hover:bg-[#0C111D] ',
                  'transition duration-300 w-full md:w-auto',
                  'text-gray-100 py-2 px-5 rounded font-light text-sm'
                )}
                type='submit'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}

export default ContactForm

const InputField = ({ name, values, type, label, placeholder, errors, handleChange }) => {
  return (
    <div className='flex flex-col mb-5 '>
      <label className='mb-1 text-sm text-gray-700 '>{label}</label>
      <div className='relative flex items-center justify-between'>
        {type === 'text' ? (
          <input
            className={`${
              errors ? 'border border-red-500' : 'border-gray-300'
            } flex-1 text-sm placeholder-gray-400`}
            placeholder={placeholder}
            type={type}
            name={name}
            value={values?.name}
            onChange={handleChange}
          />
        ) : (
          <textarea
            className={`${
              errors ? 'border border-red-500' : 'border-gray-300'
            } flex-1 text-sm placeholder-gray-400`}
            placeholder={placeholder}
            type={type}
            name={name}
            value={values?.name}
            onChange={handleChange}
            rows='6'
          />
        )}
        {errors ? (
          <MdWarning className={` text-red-500 mx-3 absolute right-1 bottom-2.5`} />
        ) : (
          <CgAsterisk className={` text-red-500 mx-3 absolute right-1 bottom-2.5`} />
        )}
      </div>
      {errors && <small className='text-red-500'>{errors}</small>}
    </div>
  )
}
