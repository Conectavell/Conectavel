import styled from "styled-components";
import Azul1 from '../assets/azulclaro.png'
import Azul2 from '../assets/azul.png'
import verde1 from '../assets/verde.png'
import verde2 from '../assets/verdeclaro.png'
import laranja from '../assets/laranja.png'
import branco from '../assets/branco.png'
import { Sub_heading } from '../components/Header'

const IdVisual = styled.div`
    padding: 2rem 0;
background: #175EC6;
`
const Texts = styled.p`
    background: #fff;
    width: 30%;
    padding: 1rem;
    border-radius: 20px;
    text-align: center;
    font-size: 18px;

    @media(max-width:1200px){
    width: 80%;
    margin-top: 2.4rem;
    }
    `

const Conteiner = styled.div`
    width: 65%;
    margin: 2rem auto;
    /*border: 1px solid red;*/
    display: flex;
    justify-content: space-between;

    @media(max-width:1200px){
width: 100%;
flex-direction: column;
align-items: center;
justify-content: center;
}
    `

const Imgs = styled.div`
    margin: auto;
background: #fff;
width: 70%;
border-radius: 28px;
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
gap: 4rem;
padding: 5rem;

@media(max-width:1200px){
    margin-top: 2rem;
    padding: 4rem;
    justify-content: center;
    align-items: center;
    border-radius: 0;
width: 100%;
flex-direction: column;
}
`


const Heading_text = styled.h2`  
    width: 100%;
    font-size: 48px;
    line-height: 140%;
    font-weight: 400;
    color: #fff;
    /* width: 50%; */
    text-align: center;
    
    @media (max-width: 1200px){
        width: 90%;
        margin: auto;
    }
`

const IdentidadeVisual = () => {
    return (
        <IdVisual>

            <Sub_heading style={{ color: "var(--verde_secundario)", width: "100%", textAlign: "center" }}>
                NOSSAS ESCOLHAS
            </Sub_heading>

            <Heading_text>
                Identidade visual
            </Heading_text>

            <Imgs>
                <img src={Azul2} alt="Azul " width="210px" height="300px" />
                <img src={verde1} alt="Identidade Visual" width="210px" height="300px" />
                <img src={verde2} alt="Identidade Visual" width="210px" height="300px" />
                <img src={laranja} alt="Identidade Visual" width="210px" height="300px" />
                <img src={Azul1} alt="Identidade Visual" width="210px" height="300px" />
                <img src={branco} alt="Identidade Visual" width="210px" height="300px" />
            </Imgs>

            <Conteiner>

                <Texts>
                    <h3 style={{ fontFamily: "Poppins, sans-serif" }}>Poppins</h3>
                    <p>Design acolhedor, sua visualização proporciona um acolhimento ao usuário</p>
                </Texts>

                <Texts>
                    <h3>Quantico</h3>
                    <p>Design moderno, sua forma demonstrar algo tecnológico e moderno</p>
                </Texts>

            </Conteiner>

        </IdVisual>
    )
}

export default IdentidadeVisual