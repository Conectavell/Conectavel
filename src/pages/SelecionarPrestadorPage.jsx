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
import Arrow_Laranja from "../assets/Arrow_Laranja.svg";

const MainContainer = styled.div`
  display: flex;
  padding: 10px;
`;

const CardsMenu = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 30px;
  justify-items: center;
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
  margin-top: 150px;

  h1 {
    font-size: 3rem;
  }

  .titulo {
    border: 1px solid rgba(128, 128, 128, 0.5);
    border-radius: 30px;
    padding: 4px;
    text-align: center;
  }
`;

const ChatContainer = styled.div`
  display: flex;
  margin-right: 20px;
  margin-left: 20px;
  margin-top: 10px;
`;

const ButtonReturn = styled.button`
  cursor: pointer;
  width: 50px;
  height: 50px;

  border: none;
  background: transparent;
  outline: none;
  margin-left: 30px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.2);
  }

  img {
    width: 100%;
    height: auto;
  }
`;

const SelecionarPrestador = () => {
  return (
    <div>
      <Navbar tipoUsuario={"cliente"} />
      <ButtonReturn className="button_return">
        <img src={Arrow_Laranja} alt="voltar" />
      </ButtonReturn>

      <MainContainer>
        <ChatContainer>
          <ChatLateral>
            <ChatLateralH1>Chat</ChatLateralH1>
            <ChatLateralChats>
              <ChatMini
                foto={Kemilly}
                nome={"Sarah Doe"}
                descricao={"Seu Televisor está pronto!"}
              />
              <ChatMini foto={Kemilly} nome={"Sarah Doe"} descricao={"Ok!"} />
              <ChatMini
                foto={Kemilly}
                nome={"Sarah Doe"}
                descricao={"Vou verificar e te falo!"}
              />
              <ChatMini
                foto={Kemilly}
                nome={"Sarah Doe"}
                descricao={"Obrigado pela confiança!"}
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
              nome={"Anna Brown"}
              foto={Kemilly}
              descricao={"Especialista em Reparo de computador."}
              avaliacoes={3.2}
            />
            <CardMenu
              nome={"Anna Brown"}
              foto={Kemilly}
              descricao={"Especialista em Reparo de computador."}
              avaliacoes={3.2}
            />
            <CardMenu
              nome={"Anna Brown"}
              foto={Kemilly}
              descricao={"Especialista em Reparo de computador."}
              avaliacoes={3.2}
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
