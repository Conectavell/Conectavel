import * as React from "react";
import styled from "styled-components";
import Chat from "../components/Chat";
import CommunityItem from "../components/CommunityItem"


function ChatComunidade() {

    const Div = styled.div`
  align-self: center;
  display: flex;
  margin-top: 18px;
//   gap: 20px;
//   justify-content: space-between;
  padding: 0 10px;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;


const ChatsP = styled.div`
width: 35vw;
  border-radius: 10px;
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.15);
  border-color: rgba(235, 235, 238, 1);
  border-style: solid;
  border-width: 2px;
  background-color: #fff;
  display: flex;
  margin-top: 11px;
  flex-direction: column;
  font-size: 12px;
  font-weight: 400;
  padding: 21px 16px 80px;
`;

const Div3 = styled.div`
  color: rgba(34, 34, 34, 0.9);
  font: 24px Poppins, sans-serif;
`;

  return (
    <Div>

     
      <ChatsP>
        <Div3>Chat</Div3>
        <CommunityItem texto="Negócio fechado."/>
        <CommunityItem texto="Consigo ir buscar no domingo"/>
        
    
      </ChatsP>
      
    </Div>
  );
}









export default ChatComunidade
