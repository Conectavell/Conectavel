// Chat.js

import React from 'react';
import styled from 'styled-components';
import { BsFillSendFill } from "react-icons/bs";
import { FaPaperclip } from "react-icons/fa6";
import { RiRadioButtonLine } from "react-icons/ri";
import Usuaria from '../../assets/Usuaria.jpg';
import Usuario from '../../assets/Usuario.jpg';

const ChatContainer = styled.div`
  min-width: 634px;
  height: 534px;
  border: 2px solid #d8d5d5;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6), 0 6px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  position: relative;
  top: 88px;
  left: 60px;

  @media (max-width: 768px) {
    min-width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border: none;
    box-shadow: none;
    border-radius: 0;
  }
`;

const ChatHeader = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 5px;
    border-bottom: none;
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;

  h2 {
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 20px;
    padding: 0;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }

  p {
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 12px;
    padding: 0;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 10px;
    }
  }
`;

const UserInfoOnline = styled.div`
  display: flex;
  align-items: center;

  .only-content {
    width: 8%;
    color: #52e052;

    @media (max-width: 768px) {
      width: 5%;
    }
  }
`;

const UserAvatar = styled.img`
  border-radius: 12%;
  margin-right: 10px;
  border: 2px solid #7bf57b;

  @media (max-width: 768px) {
    width: 30px;
    height: auto;
    margin-right: 5px;
  }
`;

const ChatBody = styled.div`
  flex: 1;
  padding: 10px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 5px;
  }
`;

const Message = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 14px;
  margin: 5px 0;
  padding: 10px;
  border-radius: 10px;
  max-width: 70%;
  background-color: ${props => (props.sent ? '#0068D5' : '#f1f1f1')};
  color: ${props => (props.sent ? '#fff' : '#000')};
  align-self: ${props => (props.sent ? 'flex-end' : 'flex-start')};

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 5px;
    border-radius: 5px;
  }
`;

const ChatFooter = styled.div`
  padding: 20px;
  display: flex;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 12px;
  margin-right: 10px;

  @media (max-width: 768px) {
    padding: 5px;
    margin-right: 5px;
  }
`;

const Button = styled.button`
  padding: 15px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.1);
  transition: background-color 0.5s ease, transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2), 0 12px 40px rgba(0, 0, 0, 0.1);
  }

  &:active {
    background-color: #52e052;
    transform: translateY(0);
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    padding: 10px 10px;
  }
`;

const ClipDiv = styled.div`
  position: relative;
  display: flex;
  right: 10px;
  top: 10px;

  .clip-content {
    padding: 6px;
    color: #0068D5;

    @media (max-width: 768px) {
      padding: 3px;
    }
  }
`;

const BlockChatMundial = styled.div`
  display: flex;
  align-items: center;
`;

const AvatarChat = styled.img`
  width: 36px;
  height: 36px;
  background-color: #ccc;
  border-radius: 10px;
  margin-right: 14px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

const BlockChatMundial2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`;

const AvatarChat2 = styled.img`
  width: 36px;
  height: 36px;
  background-color: #ccc;
  border-radius: 10px;
  margin-left: 14px;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-bottom: 10px;
  }
`;

const ChatCentral = () => {
    return (
      <ChatContainer>
        <ChatHeader>
          <UserInfo>
            <UserAvatar src={Usuaria} alt="User" style={{ width: '50px', height: 'auto' }} />
            <div>
              <h2>Kemily Vitoria</h2>
              <UserInfoOnline>
                <RiRadioButtonLine className='only-content' />
                <p>Online</p>
              </UserInfoOnline>
            </div>
          </UserInfo>
        </ChatHeader>
        <ChatBody>
          <BlockChatMundial>
            <AvatarChat src={Usuaria} alt="User" style={{ width: '50px', height: 'auto' }} />
            <Message>Boa tarde!</Message>
          </BlockChatMundial>
          <BlockChatMundial2>
            <Message sent>Boa tarde! Como posso te ajudar?</Message>
            <AvatarChat2 src={Usuario} alt="User" style={{ width: '50px', height: 'auto' }} />
          </BlockChatMundial2>
          <BlockChatMundial>
            <AvatarChat src={Usuaria} alt="User" style={{ width: '50px', height: 'auto' }} />
            <Message>Gostaria de uma manutenção no meu liquidificador</Message>
          </BlockChatMundial>
          <BlockChatMundial2>
            <Message sent>Ok, deseja mais alguma coisa?</Message>
            <AvatarChat2 src={Usuario} alt="User" style={{ width: '50px', height: 'auto' }} />
          </BlockChatMundial2>
          <BlockChatMundial>
            <AvatarChat src={Usuaria} alt="User" style={{ width: '50px', height: 'auto' }} />
            <Message>No momento só isso mesmo</Message>
          </BlockChatMundial>
          <BlockChatMundial2>
            <Message sent>Consigo fazer por R$93. Tem interesse?</Message>
            <AvatarChat2 src={Usuario} alt="User" style={{ width: '50px', height: 'auto' }} />
          </BlockChatMundial2>
          <BlockChatMundial2>
            <Message sent>Orçamento enviado. Aguardando pagamento</Message>
            <AvatarChat2 src={Usuario} alt="User" style={{ width: '50px', height: 'auto' }} />
          </BlockChatMundial2>
        </ChatBody>
        <ChatFooter>
          <Input type="text" placeholder="Type a message" />
          <Button><BsFillSendFill /></Button>
        </ChatFooter>
      </ChatContainer>
    );
  };
  
  export default ChatCentral;
  
