import Nav from '../components/Nav'
import Header from '../components/Header'
import ComoFunciona from '../components/ComoFunciona'
import NosEscolher from '../components/NosEscolher'
import Footer from '../components/Footer'
import Colaboradores from '../components/Colaboradores'
import ContrateMelhorProfissional from '../components/ContrateMelhorProfissional'
import Contribua from '../components/Contribua'

const HomePage = () => {
  return (
    <>
      <Nav />
      <Header />
      <ComoFunciona />
      <NosEscolher />
      <ContrateMelhorProfissional />
      <Contribua />
      <Colaboradores />
      <Footer />
    </>
  )
}

export default HomePage