import Head from 'next/head'

const Layout = ({ children, title, description }) => {
  return (
    <div className='font-roboto'>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
        <title>{title}</title>
        <meta name='description' content={description} />
      </Head>
      <div className='md:pt-20 pt-5'>{children}</div>
    </div>
  )
}

export default Layout

Layout.defaultProps = {
  title: 'Frontend developer interview test for Samuel antwi',
  description:
    'This simple test is designed to test your thought process, standard code skills and ability to follow instruction.',
}
