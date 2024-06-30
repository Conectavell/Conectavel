import { useContext, useState, useEffect } from 'react';
import { ChatMiniNome } from '../components/ChatMini'
import Navbar from '../components/NavbarPerfis';
import Kemilly from '../assets/kemilly.png';
import { BsPersonVcardFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { WrapperItemInfo, EstrelasDiv, AvaliacoesDiv, AvaliacoesWrapper, BoxDireita, BoxExperienciaInter, BoxExperiencia, TextoExperiencia, ExperienciaWrapper, SectionWrapper, PerfilPrestador, BannerPerfil, Informacoes, InfoPrincipais, FotoPrincipalPerfil, ItensInfo, ItemInfo, Textos, Habilidades, HabilidadesBox, ItemHabilidade, DatalhesProfissionais } from '../styles/InfoPrestadorPageStyle';
import CadastroContext from '../context/CadastroContext';
import { IoBagRemoveSharp } from 'react-icons/io5';
import ChatLateral from '../components/ChatLateral';
import pedroAlves from '../assets/pedroAlves.png'

const PerfilPrestadorPage = () => {
  const {
    nomeUsuario, sobrenomeUsuario,
    emailUsuario, celularUsuario,
    sobreUsuario, experienciaUsuario, tipoPerfil,
    habilidadesUsuario, fotoUsuario
  } = useContext(CadastroContext)
  
  const[habilidades, setHabilidades] = useState(habilidadesUsuario || [])

  useEffect(() => {
    if (Array.isArray(habilidadesUsuario)) {
      setHabilidades(habilidadesUsuario);
    } else {
      setHabilidades([]);
    }
  }, [habilidadesUsuario]);

  return (
    <>
      <Navbar />
      <SectionWrapper>
        <ChatLateral valueWidth={"30%"} />
        <PerfilPrestador>
          <BannerPerfil>
            <p>MEU PERFIL</p>
          </BannerPerfil>
          <Informacoes>
            <InfoPrincipais>
              <FotoPrincipalPerfil src={tipoPerfil === "2" ? pedroAlves : Kemilly} />
              <ItensInfo>
                <ItemInfo>
                  <WrapperItemInfo>
                    <ChatMiniNome>Seu Nome</ChatMiniNome>
                    <ChatMiniNome descricao>{nomeUsuario || sobrenomeUsuario ? (nomeUsuario + " " + sobrenomeUsuario) : '-----'}</ChatMiniNome>
                  </WrapperItemInfo>

                </ItemInfo>
                <ItemInfo>
                  <WrapperItemInfo>
                    <ChatMiniNome>E-mail</ChatMiniNome>
                    <ChatMiniNome descricao>{emailUsuario ? emailUsuario : '-----'}</ChatMiniNome>
                  </WrapperItemInfo>

                </ItemInfo>
                <ItemInfo>
                  <WrapperItemInfo>
                    <ChatMiniNome>Celular</ChatMiniNome>
                    <ChatMiniNome descricao>{celularUsuario ? celularUsuario : '-----'}</ChatMiniNome>
                  </WrapperItemInfo>
                </ItemInfo>
              </ItensInfo>
              <ItensInfo Sobre>
                <ChatMiniNome descricao>
                  <Textos>Sobre</Textos>
                  {sobreUsuario ? sobreUsuario : "--------"}
                </ChatMiniNome>
              </ItensInfo>
              <Habilidades>
                <ChatMiniNome>Habilidades em</ChatMiniNome>
                <HabilidadesBox>
                {habilidades.map(hab => 
                      <ItemHabilidade><p>{hab.nomeHabilidade}</p></ItemHabilidade>
                  )}
                </HabilidadesBox>
              </Habilidades>
            </InfoPrincipais>


            <InfoPrincipais infoSecundaria>
              <DatalhesProfissionais>
                <p>Detalhes profissionais</p>
                <BsPersonVcardFill color="gray" size={40} />
              </DatalhesProfissionais>
              <ExperienciaWrapper>
                <TextoExperiencia>
                  Experiência
                </TextoExperiencia>
                <BoxExperiencia>
                  <BoxExperienciaInter>
                    <TextoExperiencia Desc>
                      {experienciaUsuario ? experienciaUsuario : '------'}
                    </TextoExperiencia>
                  </BoxExperienciaInter>
                  <BoxDireita $primary >
                    <IoBagRemoveSharp size={'1.5em'} color="white" />
                  </BoxDireita>
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
                  <BoxDireita >
                    <FaStar size={'1.5em'} color="white" />
                  </BoxDireita>
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

            </InfoPrincipais>
          </Informacoes>
        </PerfilPrestador>
      </SectionWrapper>
    </>
  )
}

export default PerfilPrestadorPage;