import styled from "styled-components";
import Cima from '../assets/cima.png';
import Baixo from '../assets/baixo.png';
import ImgPlanta from '../assets/ImgPlanta.png'

const ContribuaWrapper = styled.section`
    width: auto;
    height: 100%;
    background: #188b6b;
    display: flex;
    padding: 24px;
`

const LadoEsquerdo = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 40px
`

const SubHeading = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 10%;
    color: #A6DFFC;
`

const Topo = styled.div`
    height: 50%;
    width: 100%;
    display: flex;
    flex-direction: column;
`

const Heading = styled.h2`
    font-size: 56px;
    font-weight: 400;
    line-height: 140%;
    color: #FFFFFF;
`

const Textao = styled.p`
    font-size: 25px;
    font-weight: 400;
    color: #ffffff;
    text-align: center;
`

const LadoDireito = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
`

const ImgSeta = styled.img`
    width: auto;
    height: 22.5px;
`

const ImgP = styled.img`
    width: 600px;
    height: 600px;
`


function Section5() {
    return (
        <ContribuaWrapper>
            <LadoEsquerdo>
                <Topo>
                    <SubHeading>CONTRIBUA</SubHeading>
                    <Heading>O descarte correto transforma</Heading>
                </Topo>
                <Textao>
                    Quando o lixo eletrônico entra em contato com a natureza, desencadeia uma série de impactos ambientais significativos. Os componentes tóxicos presentes nos dispositivos eletrônicos, como chumbo, mercúrio e cádmio, contaminam o solo e a água, comprometendo a qualidade dos ecossistemas. Essa contaminação afeta a biodiversidade, causando danos à flora e à fauna, e também representa uma ameaça à saúde humana através da cadeia alimentar.
                </Textao>
            </LadoEsquerdo>
            <LadoDireito>
                    <ImgSeta src={Cima} alt="Cima"/>
                    <ImgP src={ImgPlanta} alt="Planta"/>
                    <ImgSeta src={Baixo} alt="Cima"/>
            </LadoDireito>
        </ContribuaWrapper>
    )
}

export default Section5