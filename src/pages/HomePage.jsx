import Nav from '../components/Nav'
import Inicio from '../components/Inicio'
import ComoFunciona from '../components/ComoFunciona'
import NosEscolher from '../components/NosEscolher'
import Section4 from '../components/Section4'
import Section5 from '../components/Section5'
import Footer from '../components/Footer'
import Colaboradores from '../components/Colaboradores'

const HomePage = () => {
  return (
    <>
      <Nav />
      <Inicio />
      <ComoFunciona />
      <NosEscolher />
      <Section4 />
      <Section5 />
      <Colaboradores />
      <Footer />
    </>
  )
}

export default HomePage