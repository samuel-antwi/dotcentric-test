/* eslint-disable no-undef */
import ContactForm from '../components/ContactForm'
import CTA from '../components/CTA'
import Layout from '../components/Layout'
import Services from '../components/Services'
import Testimonials from '../components/Testimonial'

const Home = ({ services }) => {
  // Dummy data for testimonials
  const user = {
    name: 'Roy Barber',
    company: 'Dotcentric',
    company2: 'Damage',
    message:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit Soluta ratione sit ipsam expedita fuga aut veniam error aspernatur adipisicing',
  }
  return (
    <Layout>
      <CTA />
      <Services services={services} />
      <Testimonials
        name={user.name}
        company2={user.company2}
        company={user.company}
        message={user.message}
      />
      <ContactForm />
    </Layout>
  )
}

export default Home

// This function makes a request to the api
// at build time and returns  data which is
// then passed to the Home component as Props to pre-render the page
export const getStaticProps = async () => {
  const API = process.env.NEXT_PUBLIC_API_URL
  const res = await fetch(API)
  const { services } = await res.json()
  return {
    props: {
      services,
    },
  }
}
