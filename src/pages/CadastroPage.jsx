import React from "react";
import styled from "styled-components";
import logo_conectavel from "../assets/logo_conectavel.svg";
import Input from "../components/Input";
import { Button } from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import Google_logo from "../assets/Google_logo.svg";
import { ButtonLogin } from "../components/ButtonLogin";
import Facebook_logo from "../assets/Facebook_logo.svg";
import Arrow_button from "../assets/Arrow_button.svg";

const ContainerDiv = styled.div`
  background-color: var(--azul_principal);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;
// Div do lado Esquerdo com a logo.
const LogoDiv = styled.div`
  width: 100%;
  height: 100%;
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

// Div do lado Direito com as informaçoes de login/cadastro.

const FormDiv = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  border-radius: 0px 0px 0px 100px;
  min-height: 100vh;

  // Interatividade na tela.

  .form-container {
    padding: 0% 10% 10% 10%;
    max-width: 700px;
    margin: 0 auto;
  }

  h2 {
    color: var(--laranja);
    text-align: center;
    font-size: 60px;
    margin-bottom: 40px;
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
    margin-top: 20px;
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
    padding: 20px 60px 20px 60px;
    border-radius: 15px;
    border: solid var(--azul_principal);
    font-size: 17px;
    margin-bottom: 20px;
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
      font-size: 62px;
    }
  }
  @media (max-width: 682px) {
    h2 {
      font-size: 48px;
      margin-bottom: 12px;
    }
  }
`;

const StyledLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: #fff;
`;

const CadastroPage = () => {
  const navigate = useNavigate();
  return (
    <ContainerDiv>
      <LogoDiv>
        <div>
          <img src={logo_conectavel} alt="Logo e Slogan" />
        </div>
      </LogoDiv>

      <FormDiv>
        <button onClick={() => navigate(-1)} className="arrow_button">
          <img src={Arrow_button} alt="Botão Voltar" />
        </button>

        <div className="form-container">
          <h2>Cadastre-se</h2>

          <div className="button_container">
            <button className="button_selec">Cliente</button>
            <button className="button_selec">Prestador de Serviço</button>
          </div>

          <form action="">
            <Input
              name="Nome completo"
              label="Nome completo"
              placeholder="Digite seu Nome aqui"
            />
            <Input
              name="email"
              label="E-mail"
              placeholder="Digite seu e-mail aqui"
              type="email"
            />
            <Input
              name="senha"
              label="Senha"
              placeholder="Digite sua senha aqui"
              type="password"
            />
            <div className="center-text">
              <span>
                Já possui uma conta? &nbsp;
                <StyledLink to="/Conectavel/Login">Entrar</StyledLink>
              </span>
            </div>

            <Button>Cadastrar</Button>
          </form>
          <div className="center-text">
            <br />
            <span
              style={{ fontSize: "30px", display: "block", marginTop: "-18px" }}
            >
              Ou
            </span>
          </div>
          <div style={{ display: "flex", gap: "28px" }}>
            <ButtonLogin>
              <img src={Google_logo} alt="Google Icon" />
              <span>Cadastrar com Google</span>
            </ButtonLogin>
            <ButtonLogin>
              <img src={Facebook_logo} alt="Facebook Icon" />
              <span>Cadastrar com Facebook</span>
            </ButtonLogin>
          </div>
        </div>
      </FormDiv>
    </ContainerDiv>
  );
};

export default CadastroPage;
