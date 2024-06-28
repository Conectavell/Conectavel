import BarraNavegacao from '../components/BarraNavegacao'
import Equipe from '../components/Equipe'
import FaleConosco from '../components/FaleConosco'

import Footer from '../components/Footer'
import IdentidadeVisual from '../components/IdentidadeVisual'



const QuemSomosPage = () => {

    return (
        <>
            <BarraNavegacao cor="azul" />
            <Equipe />
            <IdentidadeVisual/>
            <FaleConosco/>
            <Footer cor="azul"/>
        </>

    )
}

export default QuemSomosPage
