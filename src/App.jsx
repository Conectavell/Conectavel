import { useState } from 'react'
import ExpandedNavContext from './context/ExpandNavContext.jsx'
import Routes from './Routes.jsx'
import CadastroContext from './context/CadastroContext.jsx'

function App() {
  const [expand, setExpand] = useState(false)
  const [completarInfo, setCompletarInfo] = useState(false)
  const [infoTrabalho, setInfoTrabalho] = useState(false)
  const [infoPessoal, setInfoPessoal] = useState(true)
  const [value, setValue] = useState(0)

  return (
    // Aplicação dos Providers dos contextos
    <CadastroContext.Provider value={{ completarInfo, setCompletarInfo, infoTrabalho, setInfoTrabalho, infoPessoal, setInfoPessoal,value, setValue }}>
      <ExpandedNavContext.Provider value={{ expand, setExpand }}>
        <Routes />
      </ExpandedNavContext.Provider>
    </CadastroContext.Provider>
  )
}

export default App
