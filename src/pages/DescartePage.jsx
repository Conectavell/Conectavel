import BarraNavegacao from '../components/BarraNavegacao'
import PontosColeta from '../components/PontosColeta'
import Footer from '../components/Footer'
import Header from '../components/DescarteHeader'

const DescartePage = () => {
  return (
    <>
        <BarraNavegacao cor="verde"/>
        <Header/>
        <PontosColeta/>
        <Footer cor="verde"/>
    </>
  )
}

export default DescartePage