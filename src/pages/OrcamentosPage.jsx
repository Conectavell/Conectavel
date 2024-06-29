import React from 'react'
import Orcamentos from '../components/Orcamentos'
import NavbarPerfis from '../components/NavbarPerfis'
import ChatLateral from '../components/ChatLateral'
import styled from 'styled-components'

const OrcamentosPage = () => {
    const Container = styled.section`
        display: flex;
        height: 100%;
        width: 100%;
        padding: 2rem;
        @media (max-width: 1200px){
            padding: 2rem 1rem;
            gap: 2rem;
            flex-direction: column;
            justify-content: center;
        }
    `

    return (
        <>
            <NavbarPerfis />
            <Container>
                <ChatLateral valueWidth={"25%"} />
                <Orcamentos />
            </Container>
        </>
    )
}

export default OrcamentosPage