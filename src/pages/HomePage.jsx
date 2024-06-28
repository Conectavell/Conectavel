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
      <BarraNavegacao  cor="azul"/>
      <Header />
      <ComoFunciona />
      <NosEscolher />
      <ContrateMelhorProfissional />
      <Contribua />
      <Footer cor="azul"/>
    </>
  )
}

export default HomePage