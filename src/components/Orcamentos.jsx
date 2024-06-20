import * as React from "react";
import styled from "styled-components";
import fotoPerfil from '../assets/fotoPerfil.png';

function Orcamentos() {

  const Container = styled.div`
  border-radius: 10px;
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.15);
  border-color: rgba(235, 235, 238, 1);
  border-style: solid;
  border-width: 2px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  margin: auto 0;
  padding: 22px 16px 80px;
  width: 65vw;
  justify-content: flex-start;
  align-items: flex-start
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Titulo = styled.div`
  color: rgba(34, 34, 34, 0.9);
  font: 500 24px Poppins, sans-serif;
 
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Orcamento = styled.div`
  border-radius: 10px;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.1);
  border-color: rgba(0, 0, 0, 0.15);
  border-style: solid;
  border-width: 1px;
  display: flex;
  margin-top: 37px;
  width: 97%;
  gap: 20px;
  justify-content: space-between;
  padding: 16px 13px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const Div23 = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  margin: auto 0;
`;

const BntPerfil = styled.div`
  justify-content: center;
  border-radius: 10px;
  background-color: #175ec6;
  align-self: stretch;
  color: #fff;
  margin: auto 0;
  padding: 15px 13px;
  font: 500 13px Poppins, sans-serif;
`;

const Img6 = styled.img`
  aspect-ratio: 1.06;
  object-fit: auto;
  object-position: center;
  width: 64px;
  align-self: stretch;
`;

const ContentPerfil = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  margin: auto 0;
`;

const Nome = styled.div`
  color: rgba(34, 34, 34, 0.9);
  font: 700 14px Poppins, sans-serif;
`;

const Descricao = styled.div`
  color: var(--Inactive-State-Color, rgba(73, 69, 79, 0.8));
  font-variant-numeric: lining-nums proportional-nums;
  font-feature-settings: "dlig" on;
  letter-spacing: 0.12px;
  margin-top: 13px;
  font: 600 12px Poppins, sans-serif;
`;

const Section02 = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 400;
`;

const DescricaoServico = styled.div`
  display: flex;
  gap: 11px;
  font-size: 13px;
  white-space: nowrap;
  letter-spacing: 0.13px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div30 = styled.div`
  color: #131922;
  font-variant-numeric: lining-nums proportional-nums;
  font-feature-settings: "dlig" on;
  font-family: Poppins, sans-serif;
  flex-grow: 1;
`;

const Div31 = styled.div`
  color: var(--Inactive-State-Color, rgba(73, 69, 79, 0.8));
  font-variant-numeric: lining-nums proportional-nums;
  font-feature-settings: "dlig" on;
  font-family: Poppins, sans-serif;
`;

const Div32 = styled.div`
  display: flex;
  margin-top: 12px;
  padding-left: 65px;
  flex-direction: column;
  align-items: start;
  font-size: 14px;
  @media (max-width: 991px) {
    padding-left: 20px;
  }
`;

const Valores = styled.div`
  display: flex;
  gap: 5px;
`;

const ValorTexto = styled.div`
  color: #000;
  font-family: Poppins, sans-serif;
  flex-grow: 1;
`;

const Valor = styled.div`
  color: #175ec6;
  font-family: Poppins, sans-serif;
`;

const Status = styled.div`
  color: #175ec6;
  font-family: Poppins, sans-serif;
  margin-top: 18px;
`;



    return (

        <Container>


        
        <Titulo>Meus orçamentos</Titulo>
        <Orcamento>

          <Div23>
            <BntPerfil>Ver perfil</BntPerfil>
            <Img6
              loading="lazy"
              srcSet={fotoPerfil}
            />
            <ContentPerfil>
              <Nome>Lucas Bonfim</Nome>
              <Descricao>Conserto eletrodomésticos e dispositivos móveis</Descricao>
            </ContentPerfil>
          </Div23>
          <Section02>
            <DescricaoServico>
              <Div30>Serviço:</Div30>
              <Div31>Manutenção</Div31>
            </DescricaoServico>
            <Div32>
              <Valores>
                <ValorTexto>Valor:</ValorTexto>
                <Valor>R$ 93</Valor>
              </Valores>
              <Status>Concluído</Status>
            </Div32>
          </Section02>
        </Orcamento>


        
      </Container>
    )
}

export default Orcamentos























