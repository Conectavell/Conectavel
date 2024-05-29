import { useState } from 'react'
import ExpandedNavContext from './context/ExpandNavContext.jsx'
import Routes from './Routes.jsx'

function App() {
  const [expand, setExpand] = useState(false)
  
  return(
    // Aplicação dos Providers dos contextos
    <ExpandedNavContext.Provider value={{expand, setExpand}}>
      <Routes/>
    </ExpandedNavContext.Provider>
  )
}

export default App
