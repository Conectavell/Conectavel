import React from 'react'
import BarraNavegacao from '../components/BarraNavegacao'
import styled from 'styled-components'
import Integrante from '../components/Integrante'
import ana from '../assets/ana.png'
import rafaella from '../assets/rafaella.png'
import bruno from '../assets/bruno.png'
import pedro from '../assets/pedro.png'
import gabriel from '../assets/gabrielA.png'
import kevyn from '../assets/kevyn.png'
import julia from '../assets/julia.png'
import gustavo from '../assets/gustavo.png'



const QuemSomosPage = () => {
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
    const BoxEquipe = styled.section`
        width: 80%;
        margin: auto;
    `

    const Row = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 1rem 0;

        @media (max-width: 992px){
            flex-direction: column;
            gap: 1rem;
        }
`
    return (
        <>
            <BarraNavegacao />

            <Sub_heading>
                QUEM SOMOS
            </Sub_heading>
            <Heading_text>Nossa equipe</Heading_text>

            <BoxEquipe>
                <Row>
                    <Integrante
                        img={bruno}
                        nome="Bruno Carlos"
                        funcao="Front-end | PO"
                        linkedinLink="https://www.linkedin.com/in/devanarodrigues"
                        linkedin="/in/devanarodrigues"
                        githubLink="https://github.com/devanarodrigues"
                        github="devanarodrigues"
                    />
                    <Integrante
                        invert={true}
                        img={rafaella}
                        nome="Rafaella Costa"
                        funcao="Front-end | Scrum Master | Social Media"
                        linkedinLink="https://www.linkedin.com/in/devanarodrigues"
                        linkedin="/in/devanarodrigues"
                        githubLink="https://github.com/devanarodrigues"
                        github="devanarodrigues"
                    />
                </Row>
                <Row>
                    <Integrante
                        img={pedro}
                        nome="Pedro Xavier"
                        funcao="Fullstack | Financeiro"
                        linkedinLink="https://www.linkedin.com/in/devanarodrigues"
                        linkedin="/in/devanarodrigues"
                        githubLink="https://github.com/devanarodrigues"
                        github="devanarodrigues"
                    />
                    <Integrante
                        img={gustavo}
                        invert={true}
                        nome="Gustavo Oliveira"
                        funcao="Fullstack"
                        linkedinLink="https://www.linkedin.com/in/devanarodrigues"
                        linkedin="/in/devanarodrigues"
                        githubLink="https://github.com/devanarodrigues"
                        github="devanarodrigues"
                    />
                </Row>
                <Row>

                    <Integrante
                        img={ana}
                        nome="Ana Rodrigues"
                        funcao="Fullstack | UI/UX"
                        linkedinLink="https://www.linkedin.com/in/devanarodrigues"
                        linkedin="/in/devanarodrigues"
                        githubLink="https://github.com/devanarodrigues"
                        github="devanarodrigues"
                    />
                    <Integrante
                        img={julia}
                        invert={true}
                        nome="Julia De Jesus"
                        funcao="Front-end | UI/UX"
                        linkedinLink="https://www.linkedin.com/in/devanarodrigues"
                        linkedin="/in/devanarodrigues"
                        githubLink="https://github.com/devanarodrigues"
                        github="devanarodrigues"
                    />
                </Row>
                <Row>

                    <Integrante
                        img={kevyn}
                        nome="Kevyn Rodrigues"
                        funcao="Back-end | Social Media"
                        linkedinLink="https://www.linkedin.com/in/devanarodrigues"
                        linkedin="/in/devanarodrigues"
                        githubLink="https://github.com/devanarodrigues"
                        github="devanarodrigues"
                    />
                    <Integrante
                        img={gabriel}
                        invert={true}
                        nome="Gabriel Amorim"
                        funcao="Back-end | Social Media"
                        linkedinLink="https://www.linkedin.com/in/devanarodrigues"
                        linkedin="/in/devanarodrigues"
                        githubLink="https://github.com/devanarodrigues"
                        github="devanarodrigues"
                    />
                </Row>


            </BoxEquipe>

        </>
    )
}

export default QuemSomosPage
