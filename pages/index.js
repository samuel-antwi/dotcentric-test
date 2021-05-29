/* eslint-disable no-undef */
import CTA from '../components/CTA'
import Layout from '../components/Layout'
import Services from '../components/Services'
import Testimonials from '../components/Testimonial'

const Home = ({ services }) => {
  return (
    <Layout>
      <CTA />
      <Services services={services} />
      <Testimonials />
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
