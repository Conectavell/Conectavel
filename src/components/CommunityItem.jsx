import * as React from "react";
import styled from "styled-components";
import fotoPerfil from '../assets/fotoPerfil.png';
import cfotoPerfil from '../assets/cfotoPerfil.png';

function CommunityItem(props) {

    const Feedback = styled.div`
  border-radius: 10px;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.1);
  border-color: rgba(0, 0, 0, 0.15);
  border-style: solid;
  border-width: 1px;
  display: flex;
  margin-top: 15px;
  gap: 11px;
  padding: 18px 80px 18px 15px;
  @media (max-width: 991px) {
    padding-right: 20px;
  }
`;

const FotoPerfil = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 37px;
  align-self: start;
`;

const Conteudo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Nome = styled.div`
  color: rgba(34, 34, 34, 0.9);
  font-family: Poppins, sans-serif;
`;

const Comentario = styled.div`
  color: var(--Inactive-State-Color, rgba(73, 69, 79, 0.8));
  font-variant-numeric: lining-nums proportional-nums;
  font-feature-settings: "dlig" on;
  font-family: Poppins, sans-serif;
  letter-spacing: 0.12px;
  margin-top: 6px;
`;
  return (

    <Feedback>
          <FotoPerfil
            loading="lazy"
            srcSet={cfotoPerfil}
          />
          <Conteudo>
            <Nome>John Doe</Nome>
            <Comentario>{props.texto}</Comentario>
          </Conteudo>
        </Feedback>


  )}

  export default CommunityItem




// import React from 'react';
// import styled from 'styled-components';

// const CommunityItem = () => {

// const CommunityItemImage = styled.img`
// width: 40px;
// height: 40px;
// margin-right: 10px;
// `;

// const CommunityItemTitle = styled.h3`
// font-weight: bold;
// margin-bottom: 5px;
// `;

// const CommunityItemText = styled.p`
// font-size: 14px;
// color: #666;
// `;

//   return (
//     <div className="community-item">
//       <img src="/user.svg" alt="Usuário" />
//       <div>
//         <h3>John Doe</h3>
//         <p>Troco cooler por SSD!</p>
//       </div>
//       <p>Preço: a combinar</p>
//     </div>
//   );
// };

// export default CommunityItem;