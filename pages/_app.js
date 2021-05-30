import { StateContextProvider } from '../context/StateContext'
import '../styles/globals.css'
import '../styles/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    // StateContextProvider is wrapped on the App component
    // making state accessible in all other components
    <StateContextProvider>
      <Component {...pageProps} />
    </StateContextProvider>
  )
}

export default MyApp
