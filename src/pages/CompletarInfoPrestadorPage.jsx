import React from 'react';
import styled, { css } from 'styled-components';
import Navbar from '../components/NavbarPerfis';
import ChatMini from '../components/ChatMini';
import Kemilly from '../assets/kemilly.png'

const SectionWrapper = styled.section`
  width: 100%;
  height: fit-content;
  padding: 12px;
  display: flex;
  gap: 12px;
`

const ChatLateral = styled.div`
  width: 313px;
  height: 100%;
  padding: 12px;
  border: 2px #EBEBEE solid;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);
`

const ChatLateralH1 = styled.h1`
  font-size: 24px;
  color: #222222;
`

const ChatLateralChats = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const PerfilPrestador = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

`

const BannerPerfil = styled.div`
  height: 184px;
  width: 100%;
  background: #175EC6;
  border-radius: 10px;
  padding: 12px;
  position: relative;

  p{
    font-size: 12px;
    font-weight: 500;
    color: #FFFFFF;
  }
`

const Informacoes = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 12px
`

const InfoPrincipais = styled.div`
  width: 393px;
  height: 623px;
  border-radius: 10px;
  background: #FFFFFF;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);
  position: relative;
  bottom: 100px;
  left: 150px;

  ${props => props.infoSecundaria && css`
        width: 313px;
        height: 542px;
        bottom: 50px;
    `}
`

const CompletarInfoPrestadorPage = () => {
  return (
    <>
      <Navbar />
      <SectionWrapper>
        <ChatLateral>
          <ChatLateralH1>Chat</ChatLateralH1>
          <ChatLateralChats>
            <ChatMini foto={Kemilly} nome={"Sarah Doe"} descricao={"Muito obrigada pelo reparo!"} />
            <ChatMini foto={Kemilly} nome={"Sarah Doe"} descricao={"Muito obrigada pelo reparo!"} />
            <ChatMini foto={Kemilly} nome={"Sarah Doe"} descricao={"Muito obrigada pelo reparo!"} />
            <ChatMini foto={Kemilly} nome={"Sarah Doe"} descricao={"Muito obrigada pelo reparo!"} />
          </ChatLateralChats>
        </ChatLateral>
        <PerfilPrestador>
          <BannerPerfil>
            <p>MEU PERFIL</p>
          </BannerPerfil>
          <Informacoes>
            <InfoPrincipais></InfoPrincipais>
            <InfoPrincipais infoSecundaria></InfoPrincipais>
          </Informacoes>
        </PerfilPrestador>
      </SectionWrapper>
    </>
  )
}

export default CompletarInfoPrestadorPage