import * as React from "react";
import styled from "styled-components";
import Chat from "../components/Chat";

function ChatPerfil() {

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

  // const Img = styled.img`
  //   aspect-ratio: 1;
  //   object-fit: auto;
  //   object-position: center;
  //   width: 50px;
  //   align-self: start;
  // `;

  const ChatsP = styled.div`
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

      {/* <Img
        loading="seta"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/af26d4025568ec2a179f11647dc9fa5ee8510df8cba3dbf7d7bab3c30c01c8a7?apiKey=1aeb7b0691c842979fcde7487ae78091&"
      />  */}

      <ChatsP>
        <Div3>Chat</Div3>
        <Chat />
        <Chat />
        <Chat />

      </ChatsP>

    </Div>
  );
}









export default ChatPerfil