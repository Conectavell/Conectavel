import BarraNavegacao from '../components/BarraNavegacao'
import NossoNegocio from '../components/NossoNegocio'
import Equipe from '../components/Equipe'
import FaleConosco from '../components/FaleConosco'
import Footer from '../components/Footer'
import VisaoFuturo from '../components/VisaoFuturo'
import IdVisual from '../components/IdVisual'

const QuemSomosPage = () => {
    return (
        <>
            <BarraNavegacao cor="azul" />
            <Equipe />
            <IdVisual/>
            <NossoNegocio/>
            <VisaoFuturo/>
            <FaleConosco/>
            <Footer cor="azul"/>
        </>

    )
}

export default QuemSomosPage
