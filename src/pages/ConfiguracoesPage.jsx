import Footer from '../components/Footer'
import NavbarConfiguracoes from '../components/NavbarConfiguracoes'
import TrocarFotoConfiguracoes from '../components/TrocarFotoConfiguracoes'
import EditarInfoConfiguracoes from '../components/EditarInfoConfiguracoes'
import styled from 'styled-components'

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

const ConfiguracoesPage = () => {
    
    
    return (
        <>
            <NavbarConfiguracoes />
            <Box>
                <TrocarFotoConfiguracoes />
                <EditarInfoConfiguracoes />
            </Box>
            <Footer cor="azul" />
        </>
    )
}

export default ConfiguracoesPage