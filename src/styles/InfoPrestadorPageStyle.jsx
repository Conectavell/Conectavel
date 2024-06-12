import styled, { css } from "styled-components"

export const SectionWrapper = styled.section`
  width: 100%;
  height: fit-content;
  padding: 12px;
  display: flex;
  gap: 12px;
`

export const ChatLateral = styled.div`
  width: 313px;
  height: 100%;
  padding: 12px;
  border: 2px #EBEBEE solid;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);

  @media screen and (max-width: 1000px) {
    display: none;
  } 
`

export const ChatLateralH1 = styled.h1`
  font-size: 24px;
  color: #222222;
`

export const ChatLateralChats = styled.div`
  width: 100%;
  height: 500px;
  padding-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const PerfilPrestador = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

`

export const BannerPerfil = styled.div`
  height: 184px;
  width: 100%;
  background: #175EC6;
  border-radius: 10px;
  padding: 12px;
  position: relative;

  p{
    font-size: 12px;
    font-weight: 500;
    color: #FFFFFF;
  }
`

export const Informacoes = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 12px;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  } 
`

export const InfoPrincipais = styled.div`
  width: 393px;
  height: 623px;
  border-radius: 10px;
  background: #FFFFFF;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);
  position: relative;
  bottom: 100px;
  left: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px;
  gap: 18px;

  ${props => props.infoSecundaria && css`
        width: 313px;
        height: 542px;
        bottom: 50px;
    `}

  @media screen and (max-width: 1000px) {
    box-shadow: 0px 2.85px 4.27px 0px rgba(0, 0, 0, 0.15);
    width: 95%;
    position: relative;
    bottom: 100px;
    left: 0px;
  } 
`

export const FotoPrincipalPerfil = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`

export const ItensInfo = styled.div`
  width: 100%;
  height: 190px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 5px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);

  ${props => props.Sobre && css`
        height: 124px;
    `}
`

export const ItemInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const WrapperItemInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const BotaoEditar = styled.button`
  width: fit-content;
  height: fit-content;
  border-radius: 51.77px;
  color: #1F1F1F;
  font-size: 12px;
  padding: 3px;
  border: none;
  background: #F0EFFA;
  opacity: 0;

  @media screen and (max-width: 1000px) {
    opacity: 1;
  } 

  &:hover{
    cursor: pointer;
    background: darkgray;
  }
`

export const Textos = styled.p`
        font-size: 16px;
        color: #000000;
        margin: 0
`

export const Habilidades = styled.div`
    width: 100%;
    height: 100%;
    overflow: auto;

    p{
      margin: 0;
    }
`

export const HabilidadesBox = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 10px;
    align-items: center;
    

`

export const ItemHabilidade = styled.div`
    width: fit-content;
    height: 30px;
    border-radius: 30px;
    border: #CECECE 1px solid;
    padding: 5px;

    p{
      font-size: 14px;
      color: #49454F;
      font-weight: 500;
    }
`

export const DatalhesProfissionais = styled.div`
    height: 80px;
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.15);
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    padding: 0px 67px;
    

    p{
      font-size: 12px;
      margin: 0;
    }
`

export const ExperienciaWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const TextoExperiencia = styled.p`
    font-size: 12px;
    font-weight: 500;
    margin: 0;

    ${props => props.Desc && css`
        color: #49454F;
    `}

    ${props => props.NomeUsuario && css`
    font-size: 13.29px;
        color: #413B89;
    `}

    ${props => props.SeeAll && css`
        font-size: 12px;
        color: #06208E;
        cursor: pointer
    `}
`

export const BoxExperiencia = styled.div`
width: 100%;
height: 53px;
border-radius: 10px;
border: 1px solid rgba(0, 0, 0, 0.15);
box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);
display: flex;
`

export const BoxExperienciaInter = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px;
`

export const BoxDireita = styled.div`
      width: 53px;
      height: 100%;
      background: #175EC6;
      background: ${props => props.$primary ? "#175EC6" : "#FB8C00"};
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;

`

export const AvaliacoesWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const AvaliacoesDiv = styled.div`
  width: 100%;
  height: 138.6px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
`

export const EstrelasDiv = styled.div`
      width: 100%;
      height: 23px;
      display: flex;
      gap: 5px;
`


