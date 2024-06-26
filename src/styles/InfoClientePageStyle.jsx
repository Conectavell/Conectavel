import styled, { css } from "styled-components";
import React, { useState } from "react";

export const SectionWrapper = styled.section`
  width: 100%;
  height: fit-content;
  padding: 12px;
  display: flex;
  gap: 12px;
`;

export const ChatLateral = styled.div`
  width: 313px;
  height: 100%;
  padding: 12px;
  border: 2px #ebebee solid;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const ChatLateralH1 = styled.h1`
  font-size: 24px;
  color: #222222;
`;

export const ChatLateralChats = styled.div`
  width: 100%;
  height: 500px;
  padding-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const PerfilPrestador = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  

  .servico-container {
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
    cursor: pointer;
    

    .Container-servico {
      /* height: 180px; */
      margin-top: 16px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border-radius: 10px;
      border: 1px solid rgba(77, 89, 89, 0.5);
      padding: 8px;
      
    }
    #P_container {
      text-align: center;
      font-size: 12px;
      color: var(--azul_principal);
      font-weight: bold
    }

    label {
      padding: 3px;
      border: 1px solid rgba(77, 89, 89, 0.5);
      border-radius: 9.21px;
      cursor: pointer;
      font-size: 20px;
      margin: .4rem 0;
    }

  label:hover{
    border: 2px solid var(--azul_principal);
  }
  
    label input[type="checkbox"] {
      margin-right: 5px;
      float: right;
    }

    .Container-servico input {
   
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }

    .container {
      display: block;
      position: relative;
      cursor: pointer;
      font-size: 20px;
      user-select: none;
      
    }
    .checkmark {
     
      float: right;
      margin-right: 5px;
      height: 1.3em;
      width: 1.3em;
      background-color: #ccc;
      border-radius: 50%;
      transition: 0.4s;
    }

    .checkmark:hover {
      box-shadow: inset 17px 17px 16px #b3b3b3, inset -17px -17px 16px #ffffff;
    }

    .container input:checked ~ .checkmark {
      box-shadow: none;
      background-color: var(--azul_principal);
      transform: rotateX(360deg);
    }
    .container input:checked ~ .checkmark:hover {
      box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
    }
    .checkmark:after {
      content: "";
      position: absolute;
      display: none;
    }
    .container input:checked ~ .checkmark:after {
      display: block;
    }
    .container .checkmark:after {
      left: 0.56em;
      top: 0.3em;
      width: 0.25em;
      height: 0.5em;
      border: solid white;
      border-width: 0 0.15em 0.15em 0;
      box-shadow: 0.1em 0.1em 0em 0 rgba(0, 0, 0, 0.3);
      transform: rotate(45deg);
    }
    label input[type="checkbox"] {
      float: right;
      margin-right: 5px;
    }
  
  }
`;

export const BannerPerfil = styled.div`
  height: 184px;
  width: 100%;
  background: #175ec6;
  border-radius: 10px;
  padding: 12px;
  position: relative;

  p {
    font-size: 12px;
    font-weight: 500;
    color: #ffffff;
  }
`;

export const Informacoes = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 12px;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const InfoPrincipais = styled.div`
  width: 786px;
  height: 417px;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);
  position: relative;
  bottom: 100px;
  left: 150px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 12px;

  ${(props) =>
    props.infoSecundaria &&
    css`
      width: 313px;
      height: 542px;
      bottom: 50px;
    `}

  @media screen and (max-width: 1000px) {
    box-shadow: 0px 2.85px 4.27px 0px rgba(0, 0, 0, 0.15);
    width: 95%;
    height: fit-content;
    gap: 10px;
    position: relative;
    bottom: 100px;
    left: 0px;
    flex-direction: column;
  }
`;

export const FotoPrincipalPerfil = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50px;

  &:hover {
    filter: grayscale(100%);
    cursor: pointer;
  }
`;

export const ItensInfo = styled.div`
  width: 333px;
  height: 190px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 5px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);

  ${(props) =>
    props.Sobre &&
    css`
      height: 124px;
    `}

  ${(props) =>
    props.ClienteOrcamentos &&
    css`
      width: 313px;
      height: 341px;
      border-radius: 10px;

      p {
        color: #06208e;
        font-size: 12px;
      }

      @media screen and (max-width: 1000px) {
        width: 100%;
      }
    `}

  ${(props) =>
    props.MeusOrcamentos &&
    css`
      width: 100%;
      height: 53px;
      border-radius: 10px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 0px;

      p {
        font-size: 12px;
        margin: 0;
        color: #222222;
        padding: 10px;
      }
    `}

  ${(props) =>
    props.NovoServico &&
    css`
      width: 100%;
      height: 53px;
      border-radius: 10px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 0px;
      left: 25%;
      bottom: 75px;

      p {
        font-size: 12px;
        margin: 0;
        color: #222222;
        padding: 10px;
      }

      @media screen and (max-width: 1000px) {
        width: 100%;
        left: 0%;
      }
    `}

  ${(props) =>
    props.MinhasAvaliacoes &&
    css`
      height: 138.6px;
      width: 100%;
      border-radius: 10px;
      gap: 10px;

      p {
        font-size: 13px;
        color: #413b89;
        font-weight: 500;
      }

      small {
        font-size: 13px;
        color: #49454f;
      }
    `}
`;

export const DivUsuarioAvaliado = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DivEstrelas = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  gap: 5px;
`;

export const ItemInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const WrapperItemInfo = styled.div`
  display: flex;
  flex-direction: column;

  p {
    margin: 0;
    font-size: 12px;
  }
`;

export const BotaoEditar = styled.button`
  width: fit-content;
  height: fit-content;
  border-radius: 51.77px;
  color: #1f1f1f;
  font-size: 12px;
  padding: 3px;
  border: none;
  background: #f0effa;
  opacity: 0;

  @media screen and (max-width: 1000px) {
    opacity: 1;
  }

  &:hover {
    cursor: pointer;
    background: darkgray;
  }
`;

export const FotoEInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: fit-content;
  height: 100%;
`;

export const Textos = styled.p`
  font-size: 16px;
  color: #000000;
  margin: 0;
`;

export const BotaoOrcamentos = styled.button`
  height: 100%;
  width: 53.89px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background: #175ec6;
  border: none;
 
`;
