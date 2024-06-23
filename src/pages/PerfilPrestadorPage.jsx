import React, { useContext } from 'react';
import { ChatMiniNome } from '../components/ChatMini'
import Navbar from '../components/NavbarPerfis';
import ChatMini from '../components/ChatMini';
import Kemilly from '../assets/kemilly.png';
import { BsMoonStarsFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { BotaoEditar,WrapperItemInfo, EstrelasDiv, AvaliacoesDiv, AvaliacoesWrapper, BoxDireita, BoxExperienciaInter, BoxExperiencia, TextoExperiencia, ExperienciaWrapper, SectionWrapper, ChatLateral, ChatLateralH1, ChatLateralChats, PerfilPrestador, BannerPerfil, Informacoes, InfoPrincipais, FotoPrincipalPerfil, ItensInfo, ItemInfo, Textos, Habilidades, HabilidadesBox, ItemHabilidade, DatalhesProfissionais } from '../styles/InfoPrestadorPageStyle';
import CadastroContext from '../context/CadastroContext';

const PerfilPrestadorPage = () => {
  const context = useContext(CadastroContext)

  return (
    <>
      <Navbar tipoUsuario={"profissional"} />
      <SectionWrapper>
        <ChatLateral>
          <ChatLateralH1>Chat</ChatLateralH1>
          <ChatLateralChats>
            <ChatMini foto={Kemilly} nome={"Sarah Doe"} descricao={"Muito obrigada pelo reparo!"} />
            <ChatMini foto={Kemilly} nome={"Sarah Doe"} descricao={"Muito obrigada pelo reparo!"} />
            <ChatMini foto={Kemilly} nome={"Sarah Doe"} descricao={"Muito obrigada pelo reparo!"} />
            <ChatMini foto={Kemilly} nome={"Sarah Doe"} descricao={"Muito obrigada pelo reparo!"} />
          </ChatLateralChats>
        </ChatLateral>
        <PerfilPrestador>
          <BannerPerfil>
            <p>MEU PERFIL</p>
          </BannerPerfil>
          <Informacoes>
            <InfoPrincipais>
              <FotoPrincipalPerfil src={Kemilly} />
              <ItensInfo>
                <ItemInfo>
                  <WrapperItemInfo>
                    <ChatMiniNome>Seu Nome</ChatMiniNome>
                    <ChatMiniNome descricao>{context.nomeUsuario}</ChatMiniNome>
                  </WrapperItemInfo>
                  <WrapperItemInfo>
                    <BotaoEditar>
                      Editar
                    </BotaoEditar>
                  </WrapperItemInfo>
                </ItemInfo>
                <ItemInfo>
                  <WrapperItemInfo>
                    <ChatMiniNome>E-mail</ChatMiniNome>
                    <ChatMiniNome descricao>{context.emailUsuario}</ChatMiniNome>
                  </WrapperItemInfo>
                  <WrapperItemInfo>
                    <BotaoEditar>
                      Editar
                    </BotaoEditar>
                  </WrapperItemInfo>
                </ItemInfo>
                <ItemInfo>
                  <WrapperItemInfo>
                    <ChatMiniNome>Celular</ChatMiniNome>
                    <ChatMiniNome descricao>+91 49652845732a</ChatMiniNome>
                  </WrapperItemInfo>
                  <WrapperItemInfo>
                    <BotaoEditar>
                      Editar
                    </BotaoEditar>
                  </WrapperItemInfo>
                </ItemInfo>
              </ItensInfo>
              <ItensInfo Sobre>
                <Textos>Sobre Kemilly Teixeira</Textos>
                <ChatMiniNome descricao>Lorem ipsum dolor sit amet consectetur. Erat auctor a aliquam vel congue luctus. Leo diam cras neque mauris ac arcu elit ipsum dolor sit amet consectetur.</ChatMiniNome>
              </ItensInfo>
              <Habilidades>
                <ChatMiniNome>Habilidades em</ChatMiniNome>
                <HabilidadesBox>
                  <ItemHabilidade><p>🎮​ Reparo de Vídeo Games</p></ItemHabilidade>
                  <ItemHabilidade><p>🎮​ Reparo de Vídeo Games</p></ItemHabilidade>
                  <ItemHabilidade><p>🎮​ Reparo de Vídeo Games</p></ItemHabilidade>
                  <ItemHabilidade><p>🎮​ Reparo de Vídeo Games</p></ItemHabilidade>
                  <ItemHabilidade><p>🎮​ Reparo de Vídeo Games</p></ItemHabilidade>
                  <ItemHabilidade><p>🎮​ Reparo de Vídeo Games</p></ItemHabilidade>
                </HabilidadesBox>
              </Habilidades>
            </InfoPrincipais>
            <InfoPrincipais infoSecundaria>
              <DatalhesProfissionais>
                <p>Detalhes profissionais</p>
                <BsMoonStarsFill size={54} />
              </DatalhesProfissionais>
              <ExperienciaWrapper>
                <TextoExperiencia>
                  Experiência
                </TextoExperiencia>
                <BoxExperiencia>
                  <BoxExperienciaInter>
                    <TextoExperiencia>
                      7 Anos
                    </TextoExperiencia>
                    <TextoExperiencia Desc>
                      de total experiência
                    </TextoExperiencia>
                  </BoxExperienciaInter>
                  <BoxDireita $primary />
                </BoxExperiencia>
              </ExperienciaWrapper>
              <ExperienciaWrapper>
                <TextoExperiencia>
                  Ratings
                </TextoExperiencia>
                <BoxExperiencia>
                  <BoxExperienciaInter>
                    <TextoExperiencia>
                      4 Estrelas
                    </TextoExperiencia>
                    <TextoExperiencia Desc>
                      De 34 clientes
                    </TextoExperiencia>
                  </BoxExperienciaInter>
                  <BoxDireita />
                </BoxExperiencia>
              </ExperienciaWrapper>
              <AvaliacoesWrapper>
                <TextoExperiencia>
                  Avaliações de clientes
                </TextoExperiencia>
                <AvaliacoesDiv>
                  <TextoExperiencia NomeUsuario>
                    Ankit Srivastava
                  </TextoExperiencia>
                  <EstrelasDiv>
                    <FaStar size={22} color='orange' />
                    <FaStar size={22} color='orange' />
                    <FaStar size={22} color='orange' />
                    <FaStar size={22} color='orange' />
                    <FaStar size={22} />
                  </EstrelasDiv>
                  <TextoExperiencia Desc>
                    excelent conversation with him.. very knowledgeble personhappy to talk towith him
                  </TextoExperiencia>
                </AvaliacoesDiv>
              </AvaliacoesWrapper>
              <TextoExperiencia SeeAll>
                Veja todas as avaliações -
              </TextoExperiencia>
            </InfoPrincipais>
          </Informacoes>
        </PerfilPrestador>
      </SectionWrapper>
    </>
  )
}

export default PerfilPrestadorPage;