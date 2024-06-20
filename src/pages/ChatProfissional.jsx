import React from 'react'
import styled from 'styled-components'
import ChatLateral from '../components/chatprofissional/ChatLateral'
import ChatCentral from '../components/chatprofissional/ChatCentral'
import PopUp from '../components/chatprofissional/PopUp'

const ChatProfissional = () => {
  
  const ContainerPai = styled.div`

  display: flex;
  max-width: 100%;
  height: 100vh;
  
  `

  return (
    <ContainerPai>
      <ChatLateral/>
      <ChatCentral/>
      <PopUp/>
    </ContainerPai>
  )
}
  
export default ChatProfissional




