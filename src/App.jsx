import { useState } from 'react'
import './App.css'

import Section4 from './components/Section4.jsx'
import Section5 from './components/Section5.jsx'
import Section6 from './components/Section6.jsx'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Section4/>
      <Section5/>
      <Section6 />
      <Footer />
    </>
  )
}

export default App
