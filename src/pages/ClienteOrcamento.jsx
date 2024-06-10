import React from 'react'
import styled from "styled-components";
import NavPerfil from "../components/NavPerfil";
import ChatPerfil from "../components/ChatPerfil";
import Orcamentos from "../components/Orcamentos";



const ClienteOrcamento = () => {

    
const MainContainer = styled.div`
display: flex;
flex-direction: column;
height: 0vh;
`;

const ContentContainer = styled.div`
display: flex;
flex: 1;
padding: 20px;
box-sizing: border-box;
@media (max-width: 991px) {
  flex-direction: column;
}
`;

const ChatSection = styled.div`
flex: 0 0 30%;
display: flex;
justify-content: center;
align-items: center;
@media (max-width: 991px) {
  flex: 1 1 auto;
  width: 100%;
}
`;

const OrcamentosSection = styled.div`
flex: 0 0 20% ;
display: flex;
justify-content: center;
align-items: center;
@media (max-width: 991px) {
  flex: 1 1 auto;
  width: 100%;
}
`;
  return (

    // <>
    // <NavPerfil/>
    // <ChatPerfil/>
    // <Orcamentos/>

    
    // </>

    

    <MainContainer>
      <NavPerfil />
      <ContentContainer>
        <ChatSection>
          <ChatPerfil />
        </ChatSection>
        <OrcamentosSection>
          <Orcamentos />
        </OrcamentosSection>
      </ContentContainer>
    </MainContainer>
  );
}

export default ClienteOrcamento


// const ClienteOrcamento = () => {
//     return (
//     <>
//     <NavPerfil/>
//     <ChatPerfil/>
//     <Orcamentos/>
//     </>
//     )
//   }
  
//   export default ClienteOrcamento