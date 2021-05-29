// A re-usable NavLinks
import { useStateProvider } from '../context/StateContext'
import { useRouter } from 'next/router'
import Link from 'next/link'

const NavLinkItems = ({ href, label }) => {
  const router = useRouter()
  const { scroll } = useStateProvider()

  // This functions returns the pathname which is used to style the active link.
  const getPathName = (href) => {
    return router.pathname.includes(href)
  }

  return (
    <Link href={href}>
      <a
        className={`${getPathName(href) && 'bg-primary text-white'} ${
          scroll && 'text-gray-200'
        } capitalize  py-2 px-5 rounded-md  text-lg tracking-normal hover:bg-primary hover:text-white transition duration-300`}>
        {label}
      </a>
    </Link>
  )
}
export default NavLinkItems
