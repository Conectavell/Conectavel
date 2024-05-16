import styled, { css } from "styled-components";
import Cima from '../assets/cima.png';
import Baixo from '../assets/baixo.png';
import ImgPlanta from '../assets/ImgPlanta.png'
import ImgLuz from '../assets/ImgLuz.png'
import ImgArvores from '../assets/ImgArvores.png'
import { useState } from "react";

const ContribuaWrapper = styled.section`
    height: 100%;
    width: auto;
    background: #188b6b;
    display: flex;
    padding: 24px;

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
    gap: 40px;

    @media only screen and (max-width: 1000px){
        width: 100%;
    }
`

const SubHeading = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 10%;
    color: #A6DFFC;

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
    width: 600px;
    height: 600px;
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


    function mudaImagem(lado){
        if(lado == "cima"){
            i++
            if(i > 2){
                i = 0
            }
        }else if(lado == "baixo"){
            i--
            if(i < 0){
                i = 2
            }
        }
        console.log(i)
        setImagem(imagens[i])
    }

    const [imagem, setImagem] = useState(imagens[i])

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
                <Botão esquerdo><ImgSeta src={Cima} alt="Cima" onClick={() => mudaImagem("cima")}/></Botão>
                <ImgP src={imagem} alt="Planta"/>
                <Botão direita><ImgSeta src={Baixo} alt="Baixo" onClick={() => mudaImagem("baixo")}/></Botão>
            </LadoDireito>
        </ContribuaWrapper>
    )
}

export default Section5