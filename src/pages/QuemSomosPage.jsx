import BarraNavegacao from '../components/BarraNavegacao'
import Equipe from '../components/Equipe'
import FaleConosco from '../components/FaleConosco'

import Footer from '../components/Footer'
import FuturosPassos from '../components/FuturosPassos'
import IdentidadeVisual from '../components/IdentidadeVisual'
import NossoNegocio from '../components/NossoNegocio'



const QuemSomosPage = () => {

    return (
        <>
            <BarraNavegacao cor="azul" />
            <Equipe />
            <IdentidadeVisual/>
            <NossoNegocio/>
            <FuturosPassos/>
            <FaleConosco/>
            <Footer cor="azul"/>
        </>

    )
}

export default QuemSomosPage
