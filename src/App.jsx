import { useState } from 'react'
import ExpandedNavContext from './context/ExpandNavContext.jsx'
import Routes from './Routes.jsx'
import CadastroContext from './context/CadastroContext.jsx'

function App() {
  const [expand, setExpand] = useState(false)
  const [nacionalidadeUsuario, setNacionalidadeUsuario] = useState('');
  const [identidadeUsuario, setIdentidadeUsuario] = useState('');
  const [cepUsuario, setCepUsuario] = useState('');
  const [numeroUsuario, setNumeroUsuario] = useState('');
  const [complementoUsuario, setComplementoUsuario] = useState('');
  const [celularUsuario, setCelularUsuario] = useState('');
  const [estadoCivilUsuario, setEstadoCivilUsuario] = useState('');
  const [dataNascimentoUsuario, setDataNascimentoUsuario] = useState('');
  const [sexoUsuario, setSexoUsuario] = useState('')
  const [sobreUsuario, setSobreUsuario] = useState('')
  const [experienciaUsuario, setExperienciaUsuario] = useState('')
  const [habilidadesUsuario, setHabilidadesUsuario] = useState('')
  const [nextTab, setNextTab] = useState(0)


  return (
    // Aplicação dos Providers dos contextos
    <CadastroContext.Provider value={{
      nacionalidadeUsuario, setNacionalidadeUsuario,
      identidadeUsuario, setIdentidadeUsuario,
      cepUsuario, setCepUsuario,
      numeroUsuario, setNumeroUsuario,
      complementoUsuario, setComplementoUsuario,
      celularUsuario, setCelularUsuario,
      estadoCivilUsuario, setEstadoCivilUsuario,
      dataNascimentoUsuario, setDataNascimentoUsuario,
      sexoUsuario, setSexoUsuario,
      sobreUsuario, setSobreUsuario,
      experienciaUsuario, setExperienciaUsuario,
      habilidadesUsuario, setHabilidadesUsuario,
      nextTab, setNextTab
    }}>
      <ExpandedNavContext.Provider value={{ expand, setExpand }}>
        <Routes />
      </ExpandedNavContext.Provider>
    </CadastroContext.Provider>
  )
}

export default App
