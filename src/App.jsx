import { useState } from 'react'
import './App.css'
import Colaboradores from './components/Colaboradores'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Colaboradores />
    </>
  )
}

export default App
