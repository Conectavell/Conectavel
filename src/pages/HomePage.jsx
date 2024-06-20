import Header from '../components/Header'
import ComoFunciona from '../components/ComoFunciona'
import NosEscolher from '../components/NosEscolher'
import Footer from '../components/Footer'
import Colaboradores from '../components/Colaboradores'
import ContrateMelhorProfissional from '../components/ContrateMelhorProfissional'
import Contribua from '../components/Contribua'
import BarraNavegacao from '../components/BarraNavegacao'

const HomePage = () => {
  return (
    <>
      <BarraNavegacao />
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