// import logo from '../assets/logo.png'
// import logotipo from '../assets/logotipo.png'
// import engrenagem from '../assets/engrenagem.png'
// import sininho from '../assets/sininho.png'
// import reciclagem from '../assets/reciclagem.png'

// import * as React from "react";
// import styled from "styled-components";

// function NavPerfil() {

//     const Div = styled.div`
//     border-color: rgba(206, 206, 206, 1);
//     border-style: solid;
//     border-bottom-width: 1px;
//     background-color: #175ec6;
//     display: flex;
//     width: 100vw;
//     gap: 20px;
//     justify-content: space-around;
//     padding: 14px 50px;
//     @media (max-width: 991px) {
//       max-width: 100%;
//       flex-wrap: wrap;
//       padding: 0 20px;
//     }
//   `;
  
//   const h2 = styled.div`
//     display: flex;
//     gap: 0px;
//   `;
  
//   const Img = styled.img`
//     // aspect-ratio: 1.1;
//     object-fit: auto;
//     object-position: center;
//     width: 80px;
//   `;
  
//   const Img2 = styled.img`
//     aspect-ratio: 4.35;
//     object-fit: auto;
//     object-position: center;
//     width: 128px;
//     max-width: 100%;
//     margin: auto 0;
//   `;
  
//   const card1 = styled.div`
//     display: flex;
//     align-items: center;
//     gap: 20px;
//     color: #fff;
//     font-weight: 500;
//     justify-content: space-around;
//     margin: auto 0;
//     @media (max-width: 991px) {
//       flex-wrap: wrap;
//     }
//   `;
  
//   const cardTexto = styled.div`
//     align-self: stretch;
//     display: flex;
//     gap: 9px;
//     font-size: 16px;
//     white-space: nowrap;
//     letter-spacing: -0.16px;
//     margin: auto 0;
//     @media (max-width: 991px) {
//       white-space: initial;
//     }
//   `;
  
//   const Img3 = styled.img`
//     aspect-ratio: 1;
//     object-fit: auto;
//     object-position: center;
//     width: 25px;
//   `;
  
//   const h4 = styled.div`
//     font-family: Poppins, sans-serif;
//     flex-grow: 1;
//     flex-basis: auto;
//     margin: auto 0;
//   `;
  
//   const p = styled.div`
//     align-self: stretch;
//     display: flex;
//     gap: 6px;
//     font-size: 16px;
//     white-space: nowrap;
//     letter-spacing: -0.16px;
//     margin: auto 0;
//     @media (max-width: 991px) {
//       white-space: initial;
//     }
//   `;
  
//   const Img4 = styled.img`
//     aspect-ratio: 1;
//     object-fit: auto;
//     object-position: center;
//     width: 25px;
//   `;
  
//   const Div7 = styled.div`
//     font-family: Poppins, sans-serif;
//     margin: auto 0;
//   `;
  
//   const Div8 = styled.div`
//     align-self: stretch;
//     display: flex;
//     gap: 20px;
//     color: #373b5c;
//   `;
  
//   const Img5 = styled.img`
//     aspect-ratio: 1;
//     object-fit: auto;
//     object-position: center;
//     width: 24px;
//     margin: auto 0;
//   `;
  
//   const Div9 = styled.div`
//     border-radius: 9.212px;
//     border-color: rgba(232, 239, 247, 1);
//     border-style: solid;
//     border-width: 1px;
//     background-color: rgba(255, 255, 255, 0.5);
//     display: flex;
//     gap: 12px;
//     flex: 1;
//     padding: 12px 9px;
//   `;
  
//   const Img6 = styled.img`
//     aspect-ratio: 1;
//     object-fit: auto;
//     object-position: center;
//     width: 37px;
//     margin: auto 0;
//   `;
  
//   const Div10 = styled.div`
//     display: flex;
//     flex-direction: column;
//     flex: 1;
//   `;
  
//   const Div11 = styled.div`
//     font: 12px Poppins, sans-serif;
//   `;
  
//   const Div12 = styled.div`
//     font: 20px Poppins, sans-serif;
//   `;
  

//   return (
//     <Div>
//       <h2>
//         <Img
//           loading="lazy"
//           srcSet={logo}
//         />
//         <Img2
//           loading="lazy"
//           srcSet={logotipo}
//         />
//       </h2>
//       <card1>
//         <cardTexto>
//           <Img3
//             loading="lazy"
//             src={engrenagem}
//           />
//           <h4>Configurações</h4>
//         </cardTexto>
//         <p>
//           <Img4
//             loading="lazy"
//             src={reciclagem}
//           />
//           <Div7>Descarte</Div7>
//         </p>
//         <Div8>
//           <Img5
//             loading="lazy"
//             src={sininho}
//           />
//           <Div9>
//             <Img6
//               loading="lazy"
//               srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/14ceda8e57a852c28b933e111f1ac6aa704031faeb5bc729f1b80e0f857ed05d?apiKey=1aeb7b0691c842979fcde7487ae78091&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/14ceda8e57a852c28b933e111f1ac6aa704031faeb5bc729f1b80e0f857ed05d?apiKey=1aeb7b0691c842979fcde7487ae78091&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/14ceda8e57a852c28b933e111f1ac6aa704031faeb5bc729f1b80e0f857ed05d?apiKey=1aeb7b0691c842979fcde7487ae78091&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/14ceda8e57a852c28b933e111f1ac6aa704031faeb5bc729f1b80e0f857ed05d?apiKey=1aeb7b0691c842979fcde7487ae78091&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/14ceda8e57a852c28b933e111f1ac6aa704031faeb5bc729f1b80e0f857ed05d?apiKey=1aeb7b0691c842979fcde7487ae78091&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/14ceda8e57a852c28b933e111f1ac6aa704031faeb5bc729f1b80e0f857ed05d?apiKey=1aeb7b0691c842979fcde7487ae78091&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/14ceda8e57a852c28b933e111f1ac6aa704031faeb5bc729f1b80e0f857ed05d?apiKey=1aeb7b0691c842979fcde7487ae78091&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/14ceda8e57a852c28b933e111f1ac6aa704031faeb5bc729f1b80e0f857ed05d?apiKey=1aeb7b0691c842979fcde7487ae78091&"
//             />
//             <Div10>
//               <Div11>Bem vindo de volta,</Div11>
//               <Div12>Kemilly Vitoria</Div12>
//             </Div10>
//           </Div9>
//         </Div8>
//       </card1>
//     </Div>
//   );
// }


// export default NavPerfil

import logo from '../assets/logo.png';
import logotipo from '../assets/logotipo.png';
import engrenagem from '../assets/engrenagem.png';
import sininho from '../assets/sininho.png';
import reciclagem from '../assets/reciclagem.png';

import * as React from "react";
import styled from "styled-components";

const Header = styled.header`
  border-color: rgba(206, 206, 206, 1);
  border-style: solid;
  border-bottom-width: 1px;
  background-color: #175ec6;
  display: flex;
  width: 100vw;
  height: 100px
  gap: 20px;
  justify-content:space-between;
  padding: 14px 50px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    padding: 0 20px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 0px;
`;

const Logo = styled.img`
  width: 80px;
`;

const Logotipo = styled.img`
  aspect-ratio: 4.35;
  width: 128px;
  max-width: 100%;
  margin: auto 0;
`;

const Menu = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  color: #fff;
  font-weight: 500;
  justify-content: space-around;
  margin: auto 0;
  list-style: none;
  padding: 0 10vw;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const MenuItem = styled.li`
  display: flex;
  align-items: center;
  gap: 9px;
  font-size: 16px;
  white-space: nowrap;
  letter-spacing: -0.16px;
  margin: auto 0;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const MenuLink = styled.a`
  font-family: Poppins, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
  margin: auto 0;
  color: inherit;
  text-decoration: none;
`;

const Notification = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  color: #373b5c;
`;

const NotificationIcon = styled.img`
  width: 24px;
  margin: auto 0;
  cursor: pointer
`;

const UserProfile = styled.div`
  border-radius: 9.212px;
  border-color: rgba(232, 239, 247, 1);
  border-style: solid;
  border-width: 1px;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  gap: 12px;
  flex: 1;
  padding: 12px 9px;
  width: 200px
`;

const UserAvatar = styled.img`
  width: 37px;
  margin: auto 0;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const UserGreeting = styled.span`
  font: 12px Poppins, sans-serif;
`;

const UserName = styled.span`
  font: 20px Poppins, sans-serif;
`;

function NavPerfil() {
  return (
    <Header>
      <Nav>
        <Logo loading="lazy" src={logo} alt="Logo" />
        <Logotipo loading="lazy" src={logotipo} alt="Logotipo" />
      </Nav>
      <Menu>
        <MenuItem>
          <img loading="lazy" src={engrenagem} alt="Configurações" width="25" />
          <MenuLink href="#">Configurações</MenuLink>
        </MenuItem>
        <MenuItem>
          <img loading="lazy" src={reciclagem} alt="Descarte" width="25" />
          <MenuLink href="#">Descarte</MenuLink>
        </MenuItem>
        <Notification>
          <NotificationIcon loading="lazy" src={sininho} alt="Notificações" />
          <UserProfile>
            <UserAvatar loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/14ceda8e57a852c28b933e111f1ac6aa704031faeb5bc729f1b80e0f857ed05d?apiKey=1aeb7b0691c842979fcde7487ae78091&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/14ceda8e57a852c28b933e111f1ac6aa704031faeb5bc729f1b80e0f857ed05d?apiKey=1aeb7b0691c842979fcde7487ae78091&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/14ceda8e57a852c28b933e111f1ac6aa704031faeb5bc729f1b80e0f857ed05d?apiKey=1aeb7b0691c842979fcde7487ae78091&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/14ceda8e57a852c28b933e111f1ac6aa704031faeb5bc729f1b80e0f857ed05d?apiKey=1aeb7b0691c842979fcde7487ae78091&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/14ceda8e57a852c28b933e111f1ac6aa704031faeb5bc729f1b80e0f857ed05d?apiKey=1aeb7b0691c842979fcde7487ae78091&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/14ceda8e57a852c28b933e111f1ac6aa704031faeb5bc729f1b80e0f857ed05d?apiKey=1aeb7b0691c842979fcde7487ae78091&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/14ceda8e57a852c28b933e111f1ac6aa704031faeb5bc729f1b80e0f857ed05d?apiKey=1aeb7b0691c842979fcde7487ae78091&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/14ceda8e57a852c28b933e111f1ac6aa704031faeb5bc729f1b80e0f857ed05d?apiKey=1aeb7b0691c842979fcde7487ae78091&" alt="User Avatar" />
            <UserInfo>
              <UserGreeting>Bem vindo de volta,</UserGreeting>
              <UserName>Kemilly Vitoria</UserName>
            </UserInfo>
          </UserProfile>
        </Notification>
      </Menu>
    </Header>
  );
}

export default NavPerfil;
