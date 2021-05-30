//A  Layout component wrapper that provides navigation and footer to all the pages

import Navbar from './Navbar'
import Head from 'next/head'
import Footer from './Footer'

const Layout = ({ children, title, description }) => {
  return (
    <div className='font-roboto'>
      <Navbar />
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
        <title>{title}</title>
        <meta name='description' content={description} />
      </Head>
      <div className='pt-10 md:pt-40'>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout

// Default title and description
// This gets overwritten if custom title and desscription are provided in individual pages.
Layout.defaultProps = {
  title: 'Frontend developer interview test for Samuel antwi',
  description:
    'This simple test is designed to test your thought process, standard code skills and ability to follow instruction.',
}
