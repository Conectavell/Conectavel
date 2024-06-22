// Minhas importações
import styled from 'styled-components';
import Cliente2 from '../../assets/Cliente2.jpg'
import Cliente3 from '../../assets/Cliente3.jpg'

// Styled components
// Styled components
export const ContainerChat = styled.section`
  background: #fafafa;
  width: 100%;
  max-width: 313px;
  height: 532px;
  border-radius: 10px;
  border: 2px solid #d8d5d5;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6), 0 6px 20px rgba(0, 0, 0, 0.1);
  padding: 0;
  margin: 0; // Centraliza o container
  position: relative;
  left: 20px;
  top: 90px;
  overflow-y: auto;

  // Responsividade
  @media (max-width: 768px) {
    height: 100%; // Ajusta a altura para ocupar toda a tela em dispositivos móveis
    max-width: 80%; // Permite que o container ocupe toda a largura em dispositivos móveis
    box-shadow: none; // Remove a sombra em dispositivos móveis para simplificar o design
    border-radius: 12px;
  }
`;

export const BlockChat = styled.div`
display: flex;
align-items: center;
border: 1px solid #a3a3a3;
border-radius: 10px;
margin: 20px;
padding: 14px;
background-color: #ffffff;
box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.1);
cursor: pointer;
transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

&:hover
{
transform: translateY(-5px);
box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2), 0 12px 40px rgba(0, 0, 0, 0.1);
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

@media (max-width: 768px) {
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
background-color: #ccc;
border: 2px solid #ccc;
border-radius: 10px;
margin-right: 14px;

@media (max-width: 768px) {
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
<Avatar src={Cliente2} alt="User" style={{ width: '40px', height: '30px' }} />
<div>
<h6>Bruno</h6>
<p>Olá, eu me chamo Bruno</p>
</div>
</BlockChat>
<BlockChat>
<Avatar src={Cliente3} alt="User" style={{ width: '40px', height: '30px' }} />
<div>
<h6>Pedro Alves</h6>
<p>Olá, eu me chamo Pedro</p>
</div>
</BlockChat>
<BlockChat>
<Avatar src={Cliente2} alt="User" style={{ width: '40px', height: '30px' }} />
<div>
<h6>Lucas Bonfim</h6>
<p>Olá, eu me chamo Lucas</p>
</div>
</BlockChat>
<BlockChat>
<Avatar src={Cliente3} alt="User" style={{ width: '40px', height: '30px' }} />
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