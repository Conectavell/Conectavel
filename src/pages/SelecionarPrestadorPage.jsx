import { useContext } from "react";
import styled from "styled-components";
import Navbar from "../components/NavbarPerfis";
import CardMenu from "../components/CardMenus";
import ChatLateral from "../components/ChatLateral";
import lucas from '../assets/lucas.png'
import CadastroContext from "../context/CadastroContext";


const MainContainer = styled.div`
  display: flex;
  /* padding: 20px; */
`;

const CardsMenu = styled.div`
width: 100%;
height: 58vh;
padding-top: 1rem;
overflow-y: scroll;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
  /* gap: rem; */
`;

const MenuProfissionais = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px #ebebee solid;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);
  height: auto;
  margin: 0 0rem 0 1rem;
  padding: 1rem 0;
  flex-wrap: wrap;
  width: 75vw;

  h1 {
    font-size: 3rem;
    position: relative;
  }
`;


const Box = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  padding: 1rem;

  @media (max-width: 1200px){
    flex-direction: column;
  }
`





const SelecionarPrestador = () => {

  const { servicoEscolhido, allUsers } = useContext(CadastroContext)
  const filtered = allUsers.filter((user) => user.tipoPerfil === 2 && user.habilidadeUsuario == servicoEscolhido)
  // const [prestadores, setPrestadores] = useState([]);

  //   const retornaPrestadores = () => {
  //     axios.get('http://localhost:8080/API/filtarUsuario', {
  //         params: { valorHabilidade: servicoEscolhido }
  //     })
  //     .then(function (response) {
  //         setPrestadores(response.data);
  //     })
  //     .catch(function (error) {
  //         console.log(error);
  //     });
  // };

  // useEffect(() => {
  //   retornaPrestadores();
  // }, []);




  return (
    <div>
      <Navbar tipoUsuario={"1"} />

      <Box>
        <ChatLateral valueWidth={"25vw"} />

        <MainContainer>

          <MenuProfissionais>
            <h1>Profissionais Disponíveis</h1>
            <CardsMenu>
              {
                filtered.map(prestador => (
                  <CardMenu
                    id={prestador.idUsuario}
                    key={prestador.idUsuario}
                    nome={prestador.nomeUsuario}
                    descricao={prestador.habilidades}
                    foto={prestador.fotoPerfilPath}
                    avaliacoes={5}
                  />
                ))
              }

            </CardsMenu>
          </MenuProfissionais>
        </MainContainer>
      </Box>
    </div>
  )
}


export default SelecionarPrestador;
