import styled from "styled-components";
import logo_conectavel from "../assets/logo_conectavel.svg";

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

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

  @media (max-width: 992px) {
    & {
      border-radius: unset;
      position: relative;
    }

   @media (max-width: 1100px) {
    h2 {
      font-size: 34px;
    }
  }
}`

const ConectavelLogo = ({children}) => {
    return (
        <ContainerDiv>
            <LogoDiv>
                <div>
                    <img src={logo_conectavel} alt="Logo e Slogan" />
                </div>
            </LogoDiv>
            <FormDiv>
                {children}
            </FormDiv>

        </ContainerDiv>
    )
}

export default ConectavelLogo