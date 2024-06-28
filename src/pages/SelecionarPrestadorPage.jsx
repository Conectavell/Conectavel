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
  padding: 20px;
`;

const CardsMenu = styled.div`
width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`;

const MenuProfissionais = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px #ebebee solid;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);
  width: 78%;
  height: auto;
  margin: 0 0rem 0 1rem;
  padding: 1rem 0;
  flex-wrap: wrap;
  width: 100%;

  padding: 23px;
  margin-top: 50px;

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
`;

const SelecionarPrestador = () => {
  return (
    <div>
      <Navbar tipoUsuario={"cliente"} />
      
      <Box>
          <ChatLateral valueWidth={"20%"} />

      <MainContainer>
       

        <MenuProfissionais>
          <h1>Profissionais Disponíveis</h1>
          <CardsMenu>
            <CardMenu
              nome={"John Doe"}
              foto={Kemilly}
              descricao={"Especialista em eletrônica."}
              avaliacoes={1.3}
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
            <CardMenu
              foto={Kemilly}
              nome={"Mike Johnson"}
              descricao={"Especialista em reparo de iphone."}
              avaliacoes={2.5}
            />
            <CardMenu
              nome={"Anna Brown"}
              foto={Kemilly}
              descricao={"Especialista em Reparo de computador."}
              avaliacoes={3.2}
             
            />
          </CardsMenu>
        </MenuProfissionais>
      </MainContainer>
    </div>
  );
};

export default SelecionarPrestador;
