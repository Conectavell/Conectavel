// Minhas importações
import styled from 'styled-components';
import Cliente2 from '../../assets/Cliente2.jpg'
import Cliente3 from '../../assets/Cliente3.jpg'

// Styled components
// Styled components
export const ContainerChat = styled.section`
  background: #fafafa;
  width: 25%;
  /* max-width: 313px; */ 
  /* height: 532px; */
  border-radius: 10px;
  border: 2px solid #d8d5d5;
  box-shadow: 0 0px 8px rgba(0, 0, 0, 0.164);
  margin: 1rem auto;
  overflow-y: auto;

  // Responsividade
  @media (max-width: 1200px) {
    height: 100%; // Ajusta a altura para ocupar toda a tela em dispositivos móveis
    width: 90vw; // Permite que o container ocupe toda a largura em dispositivos móveis
    box-shadow: none; // Remove a sombra em dispositivos móveis para simplificar o design
    border-radius: 12px;
  }
`;

export const BlockChat = styled.div`
display: flex;
align-items: center;
border: 1px solid #a3a3a373;
border-radius: 10px;
margin: 20px;
padding: 14px;
background-color: #ffffff;
  box-shadow: 0 0px 2px rgba(0, 0, 0, 0.164);
cursor: pointer;
transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

&:hover
{
transform: translateY(-5px);
  box-shadow: 0 0px 2px rgba(0, 0, 0, 0.164);
}

h6{
color: #000;
font-family: "Poppins", sans-serif;
margin: 0;
padding: 0;
}
p{
margin: 0;
padding: 0;
color: #000;
font-family: "Poppins", sans-serif;
font-size: 12px;
font-weight: 400;
}

@media (max-width: 1200px) {
display: flex;
flex-direction: column; // Alinha os elementos verticalmente em dispositivos móveis
align-items: flex-start;
margin: 10px;
padding: 10px;
}
`;

export const Avatar = styled.img`
width: 36px;
height: 36px;
border-radius: 5px;
margin-right: 14px;

@media (max-width: 1200px) {
margin-right: 0;
margin-bottom: 10px; // Adiciona espaço entre o avatar e o texto em dispositivos móveis
}
`;

export const HeaderChat = styled.header`
//background-color: purple;
width: 100%;
padding: 0;
display: flex; // Centraliza o título
align-items: center;

h2 {
font-family: "Quantico", sans-serif;
//border: 1px solid #000;
font-size: 24px;
font-weight: 500;
color: #000;
margin: 20px;
padding: 0; // Adiciona preenchimento para um melhor espaçamento
}
`;

export const Block = styled.div`

`

// Função do componente
const ChatLateral = () => {

  return (
    <ContainerChat>
      <HeaderChat>
        <h2>Chat</h2>
      </HeaderChat>
      <BlockChat>
        <Avatar src={Cliente2} alt="User"  />
        <div>
          <h6>Bruno</h6>
          <p>Olá, eu me chamo Bruno</p>
        </div>
      </BlockChat>
      <BlockChat>
        <Avatar src={Cliente3} alt="User"  />
        <div>
          <h6>Pedro Alves</h6>
          <p>Olá, eu me chamo Pedro</p>
        </div>
      </BlockChat>
      <BlockChat>
        <Avatar src={Cliente2} alt="User"  />
        <div>
          <h6>Lucas Bonfim</h6>
          <p>Olá, eu me chamo Lucas</p>
        </div>
      </BlockChat>
      <BlockChat>
        <Avatar src={Cliente3} alt="User"  />
        <div>
          <h6>Leonardo Tavares</h6>
          <p>Olá, eu me chamo Leo...</p>
        </div>
      </BlockChat>
    </ContainerChat>
  );
};

// Exportação do componente
export default ChatLateral;