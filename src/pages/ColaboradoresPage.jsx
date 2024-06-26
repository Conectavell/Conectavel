import BarraNavegacao from '../components/BarraNavegacao'
import styled from 'styled-components'
import jailson from '../assets/jailson.png'
import adriana from '../assets/adriana.png'
import martinha from '../assets/martinha.png'
import aurora from '../assets/aurora.png'
import debora from '../assets/debora.png'
import gabriel from '../assets/gabriel.png'
import Footer from '../components/Footer'
import SecaoColaboradores from '../components/SecaoColaboradores'
import Parceiros from '../components/Parceiros'

const ColaboradoresPage = () => {
    const Sub_heading = styled.p`
    font-size: 24px;
    font-weight: 400;
    color: #0B378D;
    text-align: center;
    
    @media (max-width: 992px){
        font-size: 20px;
    }

`
    const Heading_text = styled.h2`  
    width: 100%;
    font-size: 48px;
    font-weight: 400;
    text-align: center;
    
    @media (max-width: 992px){
        line-height: 100%;
        font-size: 38px;
        width: 100%;
    }
    `
    const Row = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;

        @media (max-width:992px){
            display: flex;
            flex-direction: column;
        }
    `

    const Box = styled.section`
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    `
    const Col = styled.section`
        margin: auto;
        margin-top: 1rem;

        p{
            text-align: center;
            font-weight: 500;
            font-size: 1.2em;
            margin-top: .5rem;
        }

        @media (max-width:992px){
            display: flex;
            flex-direction: column;
        }
    `

    return (
        <>
            <BarraNavegacao cor="azul" />
            <SecaoColaboradores />
            <Parceiros />
            <Footer cor="azul" />
        </>
    )
}

export default ColaboradoresPage