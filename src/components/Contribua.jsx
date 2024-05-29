import styled, { css } from "styled-components";
import cima from '../assets/cima.png';
import baixo from '../assets/baixo.png';
import ImgPlanta from '../assets/ImgPlanta.png'
import ImgLuz from '../assets/ImgLuz.png'
import ImgArvores from '../assets/ImgArvores.png'
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ContribuaWrapper = styled.section`
    height: 100%;
    width: 100%;
    background: var(--verde_principal);
`
const Content = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    padding: 3rem;
    margin: auto;

    @media only screen and (max-width: 1000px){
        flex-direction: column-reverse;
        gap: 24px;
    }
`

const LadoEsquerdo = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    @media only screen and (max-width: 1000px){
        width: 100%;
    }
`

const SubHeading = styled.p`
    font-weight: 400;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: 10%;
    color: var(--azul_principal);

    @media only screen and (max-width: 1000px){
        text-align: center;
    }
`

const Topo = styled.div`
    height: 50%;
    width: 100%;
    display: flex;
    flex-direction: column;
`

const Heading = styled.h2`
    font-size: 48px;
    width: 100%;
    font-weight: 400;
    line-height: 140%;
    color: #FFFFFF;
    @media only screen and (max-width: 1000px){
        text-align: center;
    }
`

const Textao = styled.p`
    font-size: 25px;
    font-weight: 400;
    color: #ffffff;
    text-align: center;
    @media only screen and (max-width: 1000px){
        text-align: justify;
    }
`

const LadoDireito = styled.div`
    height: 100%;
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;

    
    @media only screen and (max-width: 1000px){
        width: 100%;
        flex-direction: row;
        justify-content: center;
    }
`

const ImgSeta = styled.img`
    width: auto;
    height: 22.5px;
`

const ImgP = styled.img`
    width: 500px;
    height: 500px;
    transition: width 2s, height 2s, transform 2s;

    @media only screen and (max-width: 1000px){
        width: 75%;
        height: 75%;
    }
`

const Botão = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    width: fit-content;
    height: fit-content;

    ${props => props.esquerdo && css`
        transform: rotate(-90deg);
    `}

    ${props => props.direita && css`
        transform: rotate(-90deg);
    `}
`

function Section5() {
    const imagens = [ImgArvores, ImgLuz, ImgPlanta];
    var i = 0;


    function mudaImagem(lado) {
        if (lado == "cima") {
            i++
            if (i > 2) {
                i = 0
            }
        } else if (lado == "baixo") {
            i--
            if (i < 0) {
                i = 2
            }
        }
        console.log(i)
        setImagem(imagens[i])
    }

    const [imagem, setImagem] = useState(imagens[i])
    const { innerWidth: width, innerHeight: height } = window

    return (
        <ContribuaWrapper>
            <Content>
                <LadoEsquerdo>
                    <Topo>
                        <SubHeading>CONTRIBUA</SubHeading>
                        <Heading>O descarte correto transforma</Heading>
                    </Topo>
                    {
                        width > 954
                            ?
                            ''
                            :
                            <LadoDireito>
                                <Botão esquerdo><ImgSeta src={cima} alt="Cima" onClick={() => mudaImagem("cima")} /></Botão>
                                <ImgP src={imagem} alt="Planta" />
                                <Botão direita><ImgSeta src={baixo} alt="Baixo" onClick={() => mudaImagem("baixo")} /></Botão>
                            </LadoDireito>
                    }
                    <Textao>
                        Quando o lixo eletrônico entra em contato com a natureza, desencadeia uma série de impactos ambientais significativos. Os componentes tóxicos presentes nos dispositivos eletrônicos, como chumbo, mercúrio e cádmio, contaminam o solo e a água, comprometendo a qualidade dos ecossistemas. Essa contaminação afeta a biodiversidade, causando danos à flora e à fauna, e também representa uma ameaça à saúde humana através da cadeia alimentar.
                    </Textao>
                </LadoEsquerdo>
                {
                    width > 954
                        ?
                        <LadoDireito>
                            <Botão direita><IoIosArrowForward size='2.5rem' color='var(--azul_principal)' onClick={() => mudaImagem("cima")} /></Botão>
                            <ImgP src={imagem} alt="Planta" />
                            <Botão esquerdo><IoIosArrowBack size='2.5rem' color='var(--azul_principal)' onClick={() => mudaImagem("baixo")} />  </Botão>
                        </LadoDireito>
                        :
                        ''
                }
            </Content>
        </ContribuaWrapper>
    )
}

export default Section5