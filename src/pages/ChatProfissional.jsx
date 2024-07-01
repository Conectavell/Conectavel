import styled from 'styled-components'
import NavbarPerfis from '../components/NavbarPerfis'
import PopUp from '../components/PopUp'
import ChatLateral from '../components/ChatLateral'
import ChatCentralComCliente from '../components/ChatCentralComCliente'

const ChatProfissional = () => {

  const ContainerPai = styled.div`

  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  /* align-items: flex-start; */
  margin-top: 1rem;
  @media (max-width: 1200px){
    flex-direction: column;
  }
  `

  return (
    <>
      <NavbarPerfis />
      <ContainerPai>
        <ChatLateral valueWidth={"25%"}/>
        <ChatCentralComCliente />
        <PopUp />
      </ContainerPai>
    </>
  )
}

export default ChatProfissional




