import React, { useContext } from 'react'
import styled from "styled-components";
import logo_conectavel from "../assets/logo_conectavel.svg";
import Input from "../components/Input";
import { Button } from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import Google_logo from "../assets/Google_logo.svg";
import { ButtonLogin } from "../components/ButtonLogin";
import Facebook_logo from "../assets/Facebook_logo.svg";
import Arrow_button from "../assets/Arrow_button.svg";
import Steper from "../components/Steper";
import CadastroContext from '../context/CadastroContext';

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

// Div do lado Direito com as informaçoes de login/cadastro.


const StyledLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: #fff;
`;

const FormCadastro = () => {
    const navigate = useNavigate();
    const { completarInfo, setCompletarInfo } = useContext(CadastroContext)


    return (

        <>
            <button onClick={() => navigate(-1)} className="arrow_button">
                <img src={Arrow_button} alt="Botão Voltar" />
            </button>

            <div className="form-container">
                <h2>Cadastre-se</h2>

                <div className="button_container">
                    <button className="button_selec">Cliente</button>
                    <button className="button_selec">Profissional</button>
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

                    <Button type='submit' onClick={()=> setCompletarInfo(true)} >Cadastrar</Button>
                </form>
                <div className="center-text">
                    <br />
                    <span
                        style={{ fontSize: "20px", display: "block", marginTop: "-28px" }}
                    >
                        Ou
                    </span>
                </div>
                <div style={{ display: "flex", gap: "28px" }}>
                    <ButtonLogin>
                        <img src={Google_logo} width={40} alt="Google Icon" />
                        <span>Cadastrar com Google</span>
                    </ButtonLogin>
                    <ButtonLogin>
                        <img src={Facebook_logo} width={40} alt="Facebook Icon" />
                        <span>Cadastrar com Facebook</span>
                    </ButtonLogin>
                </div>
            </div>
        </>
    )
}

export default FormCadastro