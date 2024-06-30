import styled from "styled-components"
import { useParams } from "react-router-dom";
import Galeria from "../components/Galeria"
import CardProfissional from "../components/CardProfissional"
import NavbarPerfis from "../components/NavbarPerfis"

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
    const { id } = useParams();

    // console.log(id)
    
    return (
        <>
        <NavbarPerfis/>
        <Box>
           {/* <CardProfissional/>
            <Galeria/> */}
        </Box>
        </>
    )
}

export default PerfilProfissionalPage