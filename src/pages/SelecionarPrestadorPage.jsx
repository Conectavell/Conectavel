import styled from "styled-components";
import Navbar from "../components/NavbarPerfis";
import pedroAlves from "../assets/pedroAlves.png";
import CardMenu from "../components/CardMenus";
import Arrow_Laranja from "../assets/Arrow_Laranja.svg";
import ChatLateral from "../components/ChatLateral";
import { IoIosArrowBack } from "react-icons/io";
import lucas from '../assets/lucas.png'
import brunoo from '../assets/brunoo.png'
import leonardo from '../assets/leonardo.png'

const CardsMenu = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media (max-width:1200px){
    justify-content: center;
  }
`;

const MenuProfissionais = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px #ebebee solid;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);
  width: 76%;
  height: auto;
  margin: 0 1rem;
  padding: 23px;
  /* margin-top: 150px; */
  flex-wrap: wrap;

  h1 {
    font-size: 3rem;
  }

  .titulo {
    border: 1px solid rgba(128, 128, 128, 0.5);
    border-radius: 30px;
    padding: 4px;
    text-align: center;
  }

  @media (max-width:1200px){
    width: 90%;
    justify-content: center;
    gap: 0;
  }
`;

const ButtonReturn = styled.button`
  cursor: pointer;
  width: 50px;
  height: 50px;

  border: none;
  background: transparent;
  outline: none;
  margin-left: 30px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.2);
  }

  img {
    width: 100%;
    height: auto;
  }
`;

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: flex-start;
  
  @media (max-width:1200px){
    align-items: center;
    flex-direction: column;
  }
`

const SelecionarPrestador = () => {
  
  return (
    <>
      <Navbar tipoUsuario={"cliente"} />
      <ButtonReturn className="button_return">
      <IoIosArrowBack size={54}/>
      </ButtonReturn>
      <Box>
          <ChatLateral valueWidth={"20%"} />
        <MenuProfissionais>
          <h2>Profissionais Disponíveis</h2>
          <CardsMenu>
            <CardMenu
              nome={"Pedro Alves"}
              foto={pedroAlves}
              descricao={"Especialista em eletrônica."}
              avaliacoes={4.3}
            />
            <CardMenu

              nome={"Lucas Bonfim"}
              foto={lucas}
              descricao={"Especialista em Reparo de computador."}
              avaliacoes={4.2}
            />
            <CardMenu
              nome={"Bruno Ferreira"}
              foto={brunoo}
              descricao={"Especialista em Reparo de computador."}
              avaliacoes={4.6}
            />
            <CardMenu
              nome={"Leonardo Tavares"}
              foto={leonardo}
              descricao={"Especialista em Reparo de computador."}
              avaliacoes={4.4}
            />
          </CardsMenu>
        </MenuProfissionais>
      </Box>
    </>
  );
};

export default SelecionarPrestador;
