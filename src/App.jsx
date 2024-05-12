import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Colaboradores from './components/Colaboradores'
import Inicio from './components/Inicio'
import ComoFunciona from './components/ComoFunciona'
import NosEscolher from './components/NosEscolher'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <Inicio/>
      <ComoFunciona/>
      <NosEscolher/>
      <Colaboradores />
    </>
  )
}

export default App
