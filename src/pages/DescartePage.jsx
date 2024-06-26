import BarraNavegacao from '../components/BarraNavegacao'
import OndeDescartar from '../components/OndeDescartar'
import PontosColeta from '../components/PontosColeta'
import Footer from '../components/Footer'
import Header from '../components/DescarteHeader'

const DescartePage = () => {
  return (
    <>
       
        <BarraNavegacao cor="verde"/>
        <Header/>
        <OndeDescartar/>
        <PontosColeta/>
        <Footer cor="verde"/>
    </>
  )
}

export default DescartePage