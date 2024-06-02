import React from 'react'
import BarraNavegacao from '../components/BarraNavegacao'
import styled from 'styled-components'

import jailson from '../assets/jailson.png'
import adriana from '../assets/adriana.png'
import martinha from '../assets/martinha.png'
import aurora from '../assets/aurora.png'
import debora from '../assets/debora.png'
import gabriel from '../assets/gabriel.png'

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
            <BarraNavegacao />

            <Box>
                <Sub_heading>
                    APOIO
                </Sub_heading>
                <Heading_text>Colaboradores</Heading_text>
                <Col>
                    <Row>
                        <Col>
                            <img src={jailson} width={300} alt="" />
                            <p>Jailson</p>
                        </Col>
                        <Col>
                            <img src={adriana} width={300} alt="" />
                            <p>Adriana</p>
                        </Col>
                        <Col>
                            <img src={aurora} width={300} alt="" />
                            <p>Aurora</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <img src={martinha} width={300} alt="" />
                            <p>Martinha</p>
                        </Col>
                        <Col>
                            <img src={gabriel} width={300} alt="" />
                            <p>Gabriel</p>
                        </Col>
                        <Col>
                            <img src={debora} width={300} alt="" />
                            <p>Debora</p>
                        </Col>
                    </Row>
                </Col>
            </Box>
        </>
    )
}

export default ColaboradoresPage