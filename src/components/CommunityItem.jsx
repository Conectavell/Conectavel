import * as React from "react";
import styled from "styled-components";
import cfotoPerfil from '../assets/cfotoPerfil.png';

function CommunityItem(props) {

  const Feedback = styled.div`
  border-radius: 10px;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.1);
  border-color: rgba(0, 0, 0, 0.15);
  border-style: solid;
  border-width: 1px;
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  gap: 11px;
  /* padding: 18px 80px 18px 15px; */
  padding: 1rem;
  cursor: pointer;
  transition: .2s ease-in-out;
  @media (max-width: 1200px) {
    padding-right: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &:hover
{
transform: translateY(-5px);
  box-shadow: 0 0px 2px rgba(0, 0, 0, 0.164);
}
`;

  const FotoPerfil = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 60px;
  align-self: start;

  @media (max-width:1200px){
    align-self: center;
  }
`;

  const Conteudo = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width:1200px){
    text-align: center;
  }
`;

  const Nome = styled.div`
  color: rgba(34, 34, 34, 0.9);
  font-family: Poppins, sans-serif;
  font-weight: 600;
  font-size: 1.3em;

`;

  const Comentario = styled.div`
  color: var(--Inactive-State-Color, rgba(73, 69, 79, 0.8));
  font-variant-numeric: lining-nums proportional-nums;
  font-feature-settings: "dlig" on;
  font-family: Poppins, sans-serif;
  letter-spacing: 0.12px;
  margin-top: 6px;
  font-size: 1.2em;
`;

  const Esquerda = styled.div`
  display: flex;
  gap: .5rem;

  @media (max-width:1200px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
  const Direita = styled.div`
  display: flex;
gap: .3rem;

p{
  font-size: 1.1em;
}
@media (max-width: 1200px) {
  flex-direction: column;
  gap: 0;
  text-align: center;
  }
`
  const Preco = styled.p`
  font-weight: 600;
  font-size: 1.2em;
`
  return (

    <Feedback>
      <Esquerda>
        <FotoPerfil
          loading="lazy"
          srcSet={cfotoPerfil}
        />

        <Conteudo>
          <Nome>John Doe</Nome>
          <Comentario>{props.texto}</Comentario>
        </Conteudo>
      </Esquerda>
      {
        props.preco && (
          <Direita>
            <Preco>Preço:</Preco>
            <p>A combinar</p>
          </Direita>
        )
      }


    </Feedback>


  )
}

export default CommunityItem




