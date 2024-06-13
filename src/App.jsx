import { useState } from 'react'
import ExpandedNavContext from './context/ExpandNavContext.jsx'
import Routes from './Routes.jsx'
import CadastroContext from './context/CadastroContext.jsx'

function App() {
  const [expand, setExpand] = useState(false)
  const [completarInfo, setCompletarInfo] = useState(false)

  return (
    // Aplicação dos Providers dos contextos
    <CadastroContext.Provider value={{ completarInfo, setCompletarInfo }}>
      <ExpandedNavContext.Provider value={{ expand, setExpand }}>
        <Routes />
      </ExpandedNavContext.Provider>
    </CadastroContext.Provider>
  )
}

export default App
