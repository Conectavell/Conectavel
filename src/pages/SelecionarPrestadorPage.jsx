import React from "react";
import styled from "styled-components";
import Navbar from "../components/NavbarPerfis";
import ChatMini from "../components/ChatMini";
import Kemilly from "../assets/kemilly.png";
import CardMenu from "../components/CardMenus";
import Arrow_Laranja from "../assets/Arrow_Laranja.svg";
import ChatLateral from "../components/ChatLateral";
import { IoIosArrowBack } from "react-icons/io";
import lucas from '../assets/lucas.png'
import brunoo from '../assets/brunoo.png'
import leonardo from '../assets/leonardo.png'


const MainContainer = styled.div`
  display: flex;
  /* padding: 20px; */
`;

const CardsMenu = styled.div`
width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 20px;
  /* gap: rem; */
`;

const MenuProfissionais = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px #ebebee solid;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);
  height: auto;
  margin: 0 0rem 0 1rem;
  padding: 1rem 0;
  flex-wrap: wrap;
  /* width: 100%; */
  width: 75vw;

  /* padding: 23px; */
  /* margin-top: 50px; */

  h1 {
    font-size: 3rem;
    position: relative;
  }
`;

const ChatContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: flex-start;
  margin-top: 1.5rem;
  
  @media (max-width:1200px){
    align-items: center;
    flex-direction: column;
  }
`
// flex-direction: column;
//margin-right: 20px;
//margin-left: 20px;

const Box = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 1rem;

  @media (max-width: 1200px){
    flex-direction: column;
  }
`


const SelecionarPrestador = () => {
  return (
    <div>
      <Navbar tipoUsuario={"1"} />

      <Box>
        <ChatLateral valueWidth={"25vw"} />

        <MainContainer>

          <MenuProfissionais>
            <h1>Profissionais Disponíveis</h1>
            <CardsMenu>
              <CardMenu
                nome={"John Doe"}
                foto={Kemilly}
                descricao={"Especialista em eletrônica."}
                avaliacoes={4.3}
              />
              <CardMenu
                nome={"Lucas Bonfim"}
                foto={lucas}
                descricao={"Especialista em Reparo de computador."}
                avaliacoes={4.2}
              />
              <CardMenu
                nome={"Bruno Ferreira"}
                foto={brunoo}
                descricao={"Especialista em Reparo de computador."}
                avaliacoes={4.6}
              />
              <CardMenu
                nome={"Leonardo Tavares"}
                foto={leonardo}
                descricao={"Especialista em Televisores."}
                avaliacoes={5.0}
              />
            </CardsMenu>
          </MenuProfissionais>
        </MainContainer>
      </Box>
    </div>
  )
}


export default SelecionarPrestador;
