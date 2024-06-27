// import IdentidadeVisual from '../IdentidadeVisual/Identidadevisual'
import BarraNavegacao from '../components/BarraNavegacao'
import IdentidadeVisual from '../components/IdentidadeVisual'
import NossoNegocio from '../components/NossoNegocio'
import FuturosPassos from '../components/FuturosPassos'
import Equipe from '../components/Equipe'
import FaleConosco from '../components/FaleConosco'
import Footer from '../components/Footer'



const QuemSomosPage = () => {
    return (
        <>
            <BarraNavegacao cor="azul" />
            <Equipe />
            <IdentidadeVisual />
            <NossoNegocio />
            <FuturosPassos />
            <FaleConosco />
            <Footer cor="azul" />
        </>

    )
}

export default QuemSomosPage
