import styled from "styled-components"

import Galeria from "../components/Galeria"
import CardProfissional from "../components/CardProfissional"
import NavbarPerfis from "../components/NavbarPerfis"
import { useContext } from "react"
import CadastroContext from "../context/CadastroContext"

const Box = styled.section`
padding-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  margin: auto;
  flex-direction: column;
  overflow: scroll;
`

const PerfilProfissionalPage = () => {
    const {nomeUsuario, sobrenomeUsuario, experienciaUsuario, habilidadesUsuario, estado, bairro, fotoUsuario} = useContext(CadastroContext)
    return (
        <>
        <NavbarPerfis/>
        <Box>
           <CardProfissional
            nome={nomeUsuario}
            sobrenome={sobrenomeUsuario}
            bairro={bairro}
            estado={estado}
            experiencia={experienciaUsuario}
            habilidades={habilidadesUsuario}
            foto={fotoUsuario}
           />
            <Galeria nome={nomeUsuario}/>
        </Box>
        </>
    )
}

export default PerfilProfissionalPage