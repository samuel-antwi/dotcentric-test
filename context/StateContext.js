// React context ApI
// This context hook provides state to the whole application
// In this situation, the only state is scroll which determines if a user has scrolled the apge
import { useState, useEffect, createContext, useContext } from 'react'

// Initialise context
const StateContext = createContext({})

export const StateContextProvider = ({ children }) => {
  const [scroll, setScroll] = useState(false)

  // Listen to a scroll event when the component first mounts
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 300 ? setScroll(true) : setScroll(false)
    })
  }, [])

  return <StateContext.Provider value={{ scroll }}>{children}</StateContext.Provider>
}

export const useStateProvider = () => useContext(StateContext)
