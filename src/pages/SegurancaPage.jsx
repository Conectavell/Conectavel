import React from 'react'
import NavbarConfiguracoes from '../components/NavbarConfiguracoes'
import styled from 'styled-components'
import TrocarFotoConfiguracoes from '../components/TrocarFotoConfiguracoes'
import EditarInfoConfiguracoes from '../components/EditarInfoConfiguracoes'
import Footer from '../components/Footer'
import AlterarSenhaConfiguracoes from '../components/AlterarSenhaConfiguracoes'
import ApagarContaConfiguracoes from '../components/ApagarContaConfiguracoes'

const Box = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
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
                <ApagarContaConfiguracoes/>
            </Box>
            <Footer cor="azul" />
        </>
    )
}

export default SegurancaPage