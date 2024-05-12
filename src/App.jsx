import { useState } from 'react'
import './App.css'
import Colaboradores from './components/Colaboradores'
import Footer from './components/Footer'
import Section5 from './components/Section5.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Section5/>
      <Colaboradores />
      <Footer />
    </>
  )
}

export default App
