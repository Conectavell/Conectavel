import styled from "styled-components";
import FormCadastro from "../components/FormCadastro";
import { useContext, useState } from "react";
import FormCompletarInfoPrestador from "../components/FormCompletarInfoPrestador";
import logo_conectavel from "../assets/logo_conectavel.svg";
import CadastroContext from "../context/CadastroContext";
import Steper from "../components/Steper";

const ContainerDiv = styled.div`
  background-color: var(--azul_principal);
  display: flex;
  justify-content: center;
  align-items: center;
`;
// Div do lado Esquerdo com a logo.
const LogoDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 992px) {
    & {
      display: none;
    }
  }
  @media (max-width: 1100px) {
    img {
      width: 300px;
    }
  }
`;
const FormDiv = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 100vh;
  border-radius: 0px 0px 0px 100px;
  overflow: hidden;
  padding: 0 5rem;
  
  
  // Interatividade na tela.
  
  .form-container {
    padding: 0% 10% 10% 10%;
    /* padding-top: 50%; */
    margin: auto;
    justify-content: center;
    display: flex;
    flex-direction: column;
    /* overflow-y: scroll; */
    height: 95vh;
  }


  h2 {
    font-weight: 600;
    text-align: center;
    font-size: 48px;
    margin-bottom: 20px;
    margin-top: -73px;
  }

  .justify-between {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 35px;
  }
  a {
    color: var(--azul_secundario);
    text-decoration: none;
  }

  .center-text {
    text-align: center;
    margin-top: 10px;
    margin-bottom: 5px;
  }

  // Estilização botão Arrow

  .arrow_button {
    cursor: pointer;
    width: 50px;
    height: 50px;
    padding: 0;
    border: none;
    background: url() no-repeat center center;
    background-size: cover;
    outline: none;
    margin-top: 48px;
    margin-left: 30px;
  }

  // estilização dos Botoes Clientes e Prestadores de serviço

  .button_container {
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
  }

  .button_selec {
    background-color: #ffffff;
    color: #131922;
    padding: .7rem ;
    border-radius: 15px;
    border: solid var(--azul_principal);
    font-size: 17px;
    flex-grow: 1;
  }

  .button_selec:hover {
    background-color: var(--azul_principal);
    cursor: pointer;
    transform: scale(0.9, 0.9);
    transition: transform 0.6s;
    font-weight: bold;
    color: #ffffff;
  }

  //Responsividade da tela de  cadastro.

  @media (max-width: 992px) {
    & {
      border-radius: unset;
      position: relative;
    }
    .arrow_button {
      position: absolute;
    }
    .form-container {
      padding: 10%;
    }
    .justify-between {
      flex-direction: column;
      gap: 8px;
    }
  }

  @media (max-width: 1100px) {
    h2 {
      margin-top: 0;
      font-size: 62px;
    }
    .arrow_button{
      margin-top: 0;
    margin-left: 0;
    }
  }
  @media (max-width: 682px) {
    h2 {
      font-size: 48px;
      margin-bottom: 12px;
    }
  }
`;


const CadastroPage = () => {
  const {completarInfo, setCompletarInfo} = useContext(CadastroContext)

  return (
    <>
      <ContainerDiv>
        <LogoDiv>
          <div>
            <img src={logo_conectavel} alt="Logo e Slogan" />
          </div>
        </LogoDiv>
        <FormDiv>
          {
            completarInfo ? <FormCompletarInfoPrestador /> : <FormCadastro />
          }

        <Steper/>
        </FormDiv>

      </ContainerDiv>


    </>

  );
};

export default CadastroPage;
