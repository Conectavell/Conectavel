import styled from "styled-components";
import Orcamentos from "../components/Orcamentos";
import NavbarPerfis from '../components/NavbarPerfis';
import ChatLateral from '../components/ChatLateral'



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
justify-content: center;
align-items: flex-start;
@media (max-width: 1200px) {
  flex-direction: column;
}
`;
const OrcamentosSection = styled.div`
margin: auto;
display: flex;
@media (max-width: 1200px) {
  margin: auto;
  width: 100%;
}
`;
  return (

    <MainContainer>
      <NavbarPerfis  />
      <ContentContainer>
          <ChatLateral valueWidth={"30%"}/>
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