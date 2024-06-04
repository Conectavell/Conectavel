import React from 'react'
import { MdOutlineOpenInNew } from 'react-icons/md'
import styled from 'styled-components'

const Box = styled.section`
    width: 80%;
    height: 100vh;
    margin: auto;
    background-color: var(--verde_secundario);
    padding: 2rem 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`
const Sub_heading = styled.p`
    width: 100%;
    font-size: 24px;
    font-weight: 400;
    letter-spacing: 10%;
    color: #fff;
    text-align: center;
    

@media (max-width: 992px){
    font-size: 20px;
}
`

const Button = styled.a`
    text-decoration: none;
    color: white;
    background-color: var(--laranja);
    padding: .3rem .8rem;
    border-radius: .5rem;
    margin: auto;
    cursor: pointer;
    transition: .3s ease-in-out;

    &:hover{
        background-color: var(--azul_secundario);
    }
`


const Heading_text = styled.h2`  
    font-size: 48px;
    line-height: 140%;
    font-weight: 400;
    text-align: center;

    @media (max-width: 992px){
        line-height: 100%;
        font-size: 38px;
        margin-bottom: 1rem;
    }
    `

    const Mapa = styled.div`
        width: 909px;
        height: 488px;
        background-color: var(--azul_principal);
        border-radius: 10px;
        overflow: hidden;
        margin: 2rem 0;
    `

const PontosColeta = () => {

    return (
        <Box>
            <Sub_heading>
                ENCONTRE PONTOS DE COLETA
            </Sub_heading>
            <Heading_text>Samsung Recicla</Heading_text>

            <Mapa/>
            
            <Button><MdOutlineOpenInNew size={30} />  Veja todos os pontos de coleta</Button>
            
        </Box>
    )
}

export default PontosColeta
