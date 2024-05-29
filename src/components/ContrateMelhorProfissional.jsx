import styled from "styled-components";
import PlacaMae from '../assets/Arrumando.jpg'
import Vantagens from './Vantagens'

const ContratarWrapper = styled.section`
    height: 100%;
    width: auto;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    padding: 24px;
    gap: 28px;
    padding-bottom: 7rem;
    padding-top: 4rem;

`

const CimaSection = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 1000px){
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
    }
`

const Title = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 1000px){
        width: 100%;
    }
`

const Sub_heading = styled.p`
    font-weight: 400;
    letter-spacing: 10%;
    font-size: 24px;
    color: var(--azul_principal);
    
    @media only screen and (max-width: 1000px){
        text-align: center;
    }
    `

const Heading = styled.h2`
    font-weight: 400;
    color: #151515;
    font-size: 48px;
    line-height: 140%;
    width: 90%;

    @media only screen and (max-width: 1000px){
        font-size: 3rem;
        width: 100%;
        text-align: center;
    }
`

const ImgTopo = styled.div`
    width: 500px;
    height: 281.16px;
    background: url(${PlacaMae});
    background-position: center;
    background-size: cover;
    border-radius: 20px;
    margin-top: 2rem;

    @media only screen and (max-width: 1000px){
        width: 100%;
    }
`

const BaixoSection = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    gap: 30px;

    @media only screen and (max-width: 1000px){
        flex-direction: column;
        align-items: center;
    }
`



function ContrateMelhorProfissional() {
    return (
        <ContratarWrapper>
            <CimaSection>
                <Title>
                    <Sub_heading>CONTRATE O MELHOR PROFISSIONAL</Sub_heading>
                    <Heading>Contrate o melhor profissional de eletrônica da cidade.</Heading>
                </Title>
                <ImgTopo />
            </CimaSection>
            <BaixoSection>
                <Vantagens titulo="Agilidade" texto="Contrate o serviço desejado com poucos clicks." />
                <Vantagens titulo="Profissionalismo e conhecimento" texto="Nos certificamos de analisar de maneira eficiente perfis de profissionais." />
                <Vantagens titulo="Qualidade" texto="Selecionamos profissionais que irão te entregar efetivamente seu serviço." />
            </BaixoSection>
        </ContratarWrapper>
    );
}

export default ContrateMelhorProfissional