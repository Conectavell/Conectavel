import styled from "styled-components";
import FormCadastro from "../components/FormCadastro";
import { useContext, useState } from "react";
import FormCompletarInfoPrestador from "../components/FormCompletarInfoPrestador";
import logo_conectavel from "../assets/logo_conectavel.svg";
import CadastroContext from "../context/CadastroContext";
import Steper from "../components/Steper";
import FormCadastroProfissional from "../components/FormCadastroProfissional";

const ContainerDiv = styled.div`
  background-color: var(--azul_principal);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
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
  height: 100%;
  border-radius: 0px 0px 0px 100px;

  h2 {
    font-weight: 600;
    text-align: center;
    font-size: 40px;
    margin-bottom: 20px;
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

  .button_selec:focus{
    background-color: var(--azul_principal);
    color: #ffffff;
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
    /* .arrow_button {
      position: absolute;
    }
    .form-container {
      padding: 10%;
    }
    .justify-between {
      flex-direction: column;
      gap: 8px;
    } */
  }

   @media (max-width: 1100px) {
    h2 {
      font-size: 34px;
    }
    .arrow_button{
      margin-top: 0;
    margin-left: 0;
    }
  }
`;


const CadastroPage = () => {
  const { completarInfo, setCompletarInfo, infoPessoal } = useContext(CadastroContext)
  const [infoTrabalho, setInfoTrabalho] = useState(false);


  return (
    <>
      <ContainerDiv>
        <LogoDiv>
          <div>
            <img src={logo_conectavel} alt="Logo e Slogan" />
          </div>
        </LogoDiv>
        <FormDiv>
          {/* {
            completarInfo ? <FormCompletarInfoPrestador /> : <FormCadastro />
            } */}
          {
            infoPessoal ?

              <FormCadastroProfissional form="pessoal"/>
              :
              <FormCadastroProfissional form="experiencias"/>
          }


          {/* <Steper /> */}
        </FormDiv>

      </ContainerDiv>


    </>

  );
};

export default CadastroPage;