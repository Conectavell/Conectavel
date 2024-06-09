import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/NavbarPerfis';
import ChatMini from '../components/ChatMini';
import Kemilly from '../assets/kemilly.png'

const SectionWrapper = styled.section`
  width: 100%;
  height: 100%;
  padding: 12px;
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

const CompletarInfoPrestadorPage = () => {
  return (
    <>
      <Navbar />
      <SectionWrapper>
        <ChatLateral>
          <ChatLateralH1>Chat</ChatLateralH1>
          <ChatLateralChats>
            <ChatMini foto={Kemilly} nome={"Sarah Doe"} descricao={"Muito obrigada pelo reparo!"}/>
            <ChatMini foto={Kemilly} nome={"Sarah Doe"} descricao={"Muito obrigada pelo reparo!"}/>
            <ChatMini foto={Kemilly} nome={"Sarah Doe"} descricao={"Muito obrigada pelo reparo!"}/>
            <ChatMini foto={Kemilly} nome={"Sarah Doe"} descricao={"Muito obrigada pelo reparo!"}/>
          </ChatLateralChats>
        </ChatLateral>
      </SectionWrapper>
    </>
  )
}

export default CompletarInfoPrestadorPage