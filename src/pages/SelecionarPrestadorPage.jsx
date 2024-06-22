import React from "react";
import styled from "styled-components";
import Navbar from "../components/NavbarPerfis";
import ChatMini from "../components/ChatMini";
import Kemilly from "../assets/kemilly.png";
import {
  ChatLateral,
  ChatLateralH1,
  ChatLateralChats,
} from "../styles/InfoClientePageStyle";
import CardMenu from "../components/CardMenus";


const MainContainer = styled.div`
  display: flex;
  padding: 20px;
`;

const CardsMenu = styled.div`
  display: flex;
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
  flex-direction: column;
  margin-right: 20px;
  margin-left: 20px;
`;

const SelecionarPrestador = () => {
  return (
    <div>
      <Navbar tipoUsuario={"cliente"} />

      <MainContainer>
        <ChatContainer>
          <ChatLateral>
            <ChatLateralH1>Chat</ChatLateralH1>
            <ChatLateralChats>
              <ChatMini
                foto={Kemilly}
                nome={"Sarah Doe"}
                descricao={"Muito obrigada pelo reparo!"}
              />
              <ChatMini
                foto={Kemilly}
                nome={"Sarah Doe"}
                descricao={"Muito obrigada pelo reparo!"}
              />
              <ChatMini
                foto={Kemilly}
                nome={"Sarah Doe"}
                descricao={"Muito obrigada pelo reparo!"}
              />
              <ChatMini
                foto={Kemilly}
                nome={"Sarah Doe"}
                descricao={"Muito obrigada pelo reparo!"}
              />
            </ChatLateralChats>
          </ChatLateral>
        </ChatContainer>

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
              nome={"Jane Smith"}
              foto={Kemilly}
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
