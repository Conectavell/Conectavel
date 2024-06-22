import { Box } from '@mui/material'
import Footer from '../components/Footer'
import NavbarConfiguracoes from '../components/NavbarConfiguracoes'
import TrocarFotoConfiguracoes from '../components/TrocarFotoConfiguracoes'
import EditarInfoConfiguracoes from '../components/EditarInfoConfiguracoes'

const ConfiguracoesPage = () => {
    return (
        <>
            <NavbarConfiguracoes />
            <Box
                sx={{
                    display:'flex',
                    justifyContent: "center",
                    gap: "5rem",
                    margin: "2rem 0"
                }}>
                <TrocarFotoConfiguracoes />
                <EditarInfoConfiguracoes />
            </Box>
            <Footer cor="azul" />
        </>
    )
}

export default ConfiguracoesPage