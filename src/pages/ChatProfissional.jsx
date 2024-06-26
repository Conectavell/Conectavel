import React from 'react'
import styled from 'styled-components'
import NavbarPerfis from '../components/NavbarPerfis'
import ChatCentral from '../components/ChatCentral'
import PopUp from '../components/PopUp'
import ChatLateral from '../components/ChatLateral'

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
  `

  return (
    <>
      <NavbarPerfis />
      <ContainerPai>
        <ChatLateral valueWidth={"25%"}/>
        <ChatCentral />
        <PopUp />
      </ContainerPai>
    </>
  )
}

export default ChatProfissional




