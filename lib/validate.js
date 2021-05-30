const validate = (values) => {
  let errors = {}

  if (!values.name.trim()) {
    errors.name = 'Please enter your name'
  }

  if (!values.phone.trim()) {
    errors.phone = 'Please enter your phone number'
  }

  if (!values.message.trim()) {
    errors.message = 'Please enter your message'
  }

  if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Error: Please enter a valid email'
  }

  return errors
}

export default validate
