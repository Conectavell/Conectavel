import React from 'react'
import styled from 'styled-components'
import ChatLateral from '../components/chatprofissional/ChatLateral'
import ChatCentral from '../components/chatprofissional/ChatCentral'
import PopUp from '../components/chatprofissional/PopUp'
import NavbarPerfis from '../components/NavbarPerfis'

const ChatProfissional = () => {
  
  const ContainerPai = styled.div`

  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 1200px){
    flex-direction: column;
  }
  /* height: 100vh; */
  
  `

  return (
    <>
    <NavbarPerfis usuario="profissional"/>
    <ContainerPai>
      <ChatLateral/>
      <ChatCentral/>
      <PopUp/>
    </ContainerPai>
    </>
  )
}
  
export default ChatProfissional




