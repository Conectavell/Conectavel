import React from 'react'
import styled from "styled-components";
import NavPerfil from "../components/NavPerfil";
import ChatComunidade from "../components/ChatComunidade";
import Community from "../components/Community";
import flechaVoltar from "../assets/flechaVoltar.png"
import NavbarPerfis from '../components/NavbarPerfis';



const Comunidade = () => {


  const MainContainer = styled.div`
display: flex;
flex-direction: column;
height: 0vh;
width: 100vw;

`;

  const ContentContainer = styled.div`
display: flex;
justify-content: space-evenly;
align-items: flex-start;
flex-direction: row;
width: 100vw;
/* padding: 10px; */
box-sizing: border-box;
/* gap: 40px; */
@media (max-width: 1200px) {
  flex-direction: column;
}
`;

  const ChatSection = styled.div`
/* flex: 0 0 10%; */
display: flex;
justify-content: center;
align-items: center;
margin-left: 2vw;
@media (max-width: 1200px) {
  width: 100vw;
}
`;

  const ComunidadeSection = styled.div`
flex: 0 0 10% ;
display: flex;
justify-content: center;
align-items: center;
@media (max-width: 1200px) {
  flex: 1 1 auto;
  width: 100%;
}
`;

  const Img = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 50px;
  align-self: start;
  justify-content: start;
  cursor: pointer;

`;



  return (

    <MainContainer>
      {/* <NavPerfil /> */}
      <NavbarPerfis usuario="profissional" />

      <ContentContainer>


        {/* <a href="#">
          <Img loading="seta" src={flechaVoltar} />
        </a> */}



        <ChatSection>
          <ChatComunidade />
        </ChatSection>

        <ComunidadeSection>
          <Community />
        </ComunidadeSection>

      </ContentContainer>
    </MainContainer>
  );
}

export default Comunidade




