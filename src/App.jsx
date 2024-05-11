import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Colaboradores from './components/Colaboradores'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <Colaboradores />
    </>
  )
}

export default App
