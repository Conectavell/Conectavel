import React from 'react'
import NavbarConfiguracoes from '../components/NavbarConfiguracoes'
import styled from 'styled-components'
import TrocarFotoConfiguracoes from '../components/TrocarFotoConfiguracoes'
import EditarInfoConfiguracoes from '../components/EditarInfoConfiguracoes'
import Footer from '../components/Footer'
import AlterarSenhaConfiguracoes from '../components/AlterarSenhaConfiguracoes'

const Box = styled.div`
    display: flex;
    justify-content: center;
    gap: 5rem;
    margin: 2rem 0;

    @media (max-width:992px){
        flex-direction: column;
        align-items: center;
    }
`

const SegurancaPage = () => {
    return (
        <>
            <NavbarConfiguracoes />
            <Box>
                {/* <TrocarFotoConfiguracoes /> */}
                {/* <EditarInfoConfiguracoes /> */}
                <AlterarSenhaConfiguracoes/>
            </Box>
            <Footer cor="azul" />
        </>
    )
}

export default SegurancaPage