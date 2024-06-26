import BarraNavegacao from '../components/BarraNavegacao'

import Parceiros from '../components/Parceiros'
import Footer from '../components/Footer'
import SecaoColaboradores from '../components/SecaoColaboradores'

const ColaboradoresPage = () => {
   
    return (
        <>
            <BarraNavegacao cor="azul" />

            <SecaoColaboradores/>
            <Parceiros/>
            <Footer/>
        </>
    )
}

export default ColaboradoresPage