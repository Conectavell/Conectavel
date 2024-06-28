import styled, { css } from 'styled-components'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState} from 'react';
import img1 from '../assets/imageD1.png';
import img2 from '../assets/imageD2.png';
import img3 from '../assets/imageD3.png';

const HeaderWrapper = styled.div`
    width: 100vw;
    background: #fff;
    display: flex;
    flex-direction: column;
    gap: 14px;
    padding: 1rem 0 2rem 0;
`

const TextosTopo = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Titulo = styled.p`
    color: #00796A;
    font-size: 24px;
    font-weight: 400;
    letter-spacing: 10%;
    margin: 0;
    text-align: center;
    @media (max-width:1200px){
            font-size: 20px;

        }

    ${props => props.TextoDois && css`
        font-family: "Quantico", sans-serif;
        font-size: 48px;
        color: #151515;
        @media (max-width:1200px){
            font-size: 32px;

        }
    `}
`

const CarroselWrapper = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px
`

const ItemList = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    gap: 10px
`

const Item = styled.div`
    width: 50px;
    height: 8px;
    background: ${props => props.Selecionado ? "#000000" : "#7f7f7f"};    
    @media (max-width: 1200px){
        width: 40px;
        height: 5px;

    }
`

const CarroselImagens = styled.div`
        width: 100%;
        height: fit-content;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
`

const ImagensDiv = styled.img`
        width: 70%;
        height: 90%;
        object-fit: cover;
`

const BotaoTrocadorImagem = styled.button`
    width: fit-content;
    height: fit-content;
    border: none;
    background: none;
`

const TextoFinal = styled.p`
        font-size: 20px;
        font-weight: 500;
        text-align: center;
        width:65%;
        margin: 0;
        @media (max-width:1200px){
            font-size: 18px;

        }
`




const DescarteHeader = () => {
    const [imagem, setImagem] = useState([img1, img2, img3])
    const [indice, setIndice] = useState(0)

    const FazTeste = (lado) => {
        if (lado == "direita") {
            if (indice >= imagem.length - 1) {
                setIndice(0)
            } else {
                setIndice(indice + 1)
            }
        } else if (lado == "esquerda") {
            if (indice <= 0) {
                setIndice(imagem.length - 1)
            } else {
                setIndice(indice - 1)
            }
        }
        console.log(indice)
    }

    const [mx, setMx] = useState([0,1,2])


    return (
        <HeaderWrapper>
            <TextosTopo>
                <Titulo>UM CICLO QUE SE RENOVA</Titulo>
                <Titulo TextoDois>Descarte eletrônico correto</Titulo>
            </TextosTopo>
            <CarroselWrapper>
                <ItemList>
                    {
                        mx.map(i => ((i == indice) ? <Item Selecionado></Item> : <Item></Item>))
                    }
                </ItemList>
                <CarroselImagens>
                    <BotaoTrocadorImagem>
                        <IoIosArrowBack size={43} onClick={() => FazTeste('esquerda')} />
                    </BotaoTrocadorImagem>
                    <ImagensDiv src={imagem[indice]} />
                    <BotaoTrocadorImagem onClick={() => FazTeste('direita')}>
                        <IoIosArrowForward size={43} />
                    </BotaoTrocadorImagem>
                </CarroselImagens>
                {indice == 0 ? 
                    (<TextoFinal>
                    Apenas o Brasil descartou, em 2019, mais de 2 milhões de toneladas de resíduos eletrônicos, sendo que menos de 3% foram reciclados.
                    </TextoFinal>)
                    : indice == 1 ? 
                    (<TextoFinal>
                        O Brasil é o quinto maior produtor de lixo eletrônico no mundo - são cerca de dois milhões de toneladas por ano. A maior parte desse material é descartada de maneira irregular.
                    </TextoFinal>) : 
                    (<TextoFinal>
                        A partir da reciclagem de lixo, 900 bilhões de kg não são escavados da natureza e 52 bilhões de kg de CO2 deixam de serem emitidos.
                    </TextoFinal>)}
            </CarroselWrapper>
        </HeaderWrapper>
    )
}

export default DescarteHeader;