import { useState } from 'react'

const useForm = (validate) => {
  const [values, setValues] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })

  const [errors, setErrors] = useState({})

  // A function to track changes to the input fields
  const handleChange = (e) => {
    const { value, name } = e.target
    setValues({ ...values, [name]: value })
  }

  // Submit funcmtion
  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrors(validate(values))
  }

  return { handleChange, values, handleSubmit, errors }
}

export default useForm
