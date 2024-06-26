import React, { useContext, useState } from 'react';
import { ChatMiniNome } from '../components/ChatMini'
import Navbar from '../components/NavbarPerfis';
import ChatMini from '../components/ChatMini';
import Kemilly from '../assets/kemilly.png';
import { FaStar } from "react-icons/fa";
import { CiMoneyCheck1 } from "react-icons/ci";
import {
  FotoEInfos,
  BotaoEditar,
  WrapperItemInfo,
  SectionWrapper,
  
  PerfilPrestador,
  BannerPerfil,
  Informacoes,
  InfoPrincipais,
  FotoPrincipalPerfil,
  ItensInfo,
  ItemInfo,
  BotaoOrcamentos,
  DivEstrelas,
  DivUsuarioAvaliado,
} from "../styles/InfoClientePageStyle";
import CadastroContext from '../context/CadastroContext';
import { Button, Radio } from '@mui/material';
import ChatLateral from '../components/ChatLateral';
import { useNavigate } from 'react-router-dom';

const PerfilClientePage = () => {
  const [showTiposServicos, setShowTiposServicos] = useState(false);
  const { nomeUsuario, sobrenomeUsuario, emailUsuario, celularUsuario } = useContext(CadastroContext)
  const navigate = useNavigate()

  const names = [
    'Manutenção de vídeo games',
    'Manutenção de celulares e telefones',
    'Manutenção de televisores',
    'Manutenção de aparelhos domésticos',
    'Manutenção de computadores',
  ]

  return (
    <>
      <Navbar />
      <SectionWrapper>
        <ChatLateral valueWidth={"30%"}/>
        <PerfilPrestador>
          <BannerPerfil>
            <p>MEU PERFIL</p>
          </BannerPerfil>
          <Informacoes>
            <InfoPrincipais>
              <FotoEInfos>
                <FotoPrincipalPerfil src={Kemilly} />
                <ItensInfo>
                  <ItemInfo>
                    <WrapperItemInfo>
                      <ChatMiniNome>Seu Nome</ChatMiniNome>
                      <ChatMiniNome descricao>Kemilly Vitoria</ChatMiniNome>
                    </WrapperItemInfo>
                  </ItemInfo>
                  <ItemInfo>
                    <WrapperItemInfo>
                      <ChatMiniNome>E-mail</ChatMiniNome>
                      <ChatMiniNome descricao>kemilly@gmail.com</ChatMiniNome>
                    </WrapperItemInfo>

                  </ItemInfo>
                  <ItemInfo>
                    <WrapperItemInfo>
                      <ChatMiniNome>Celular</ChatMiniNome>
                      <ChatMiniNome descricao>11967442957</ChatMiniNome>
                    </WrapperItemInfo>

                  </ItemInfo>
                </ItensInfo>
              </FotoEInfos>
              <ItensInfo ClienteOrcamentos>
                <ItensInfo MeusOrcamentos>
                  <div>
                    <p>Meus orçamentos</p>
                  </div>

                  <BotaoOrcamentos onClick={() => navigate("/Conectavel/orcamento")} >
                  <CiMoneyCheck1 color="white" size={40}/>
                  </BotaoOrcamentos>
                </ItensInfo>
                <WrapperItemInfo>
                  <p>Avaliação de trabalhadores</p>
                  <ItensInfo MinhasAvaliacoes>
                    <DivUsuarioAvaliado>
                      <p>Gabriela D. Souza </p>
                      <DivEstrelas>
                        <FaStar size={22} color="orange" />
                        <FaStar size={22} color="orange" />
                        <FaStar size={22} color="orange" />
                        <FaStar size={22} color="orange" />
                        <FaStar size={22} />
                      </DivEstrelas>
                    </DivUsuarioAvaliado>
                    <small>Uma ótima cliente! </small>
                  </ItensInfo>
                </WrapperItemInfo>
                {/* <p>Veja todas as avaliações -</p> */}
              </ItensInfo>
            </InfoPrincipais>
          </Informacoes>
          <div className="servico-container">
            <ItensInfo onClick={() => setShowTiposServicos((state) => !state)} NovoServico>
              <p>
                Novo serviço<br></br>Solicitar reparo
              </p>
              <BotaoOrcamentos

              />
            </ItensInfo>
            {showTiposServicos && (
              <div className="container">
                <div className="Container-servico">
                  <p id="P_container">Tipo de Serviço</p>

                  {
                    names.map((servico, index) => {
                      return (
                        <label htmlFor="reparo" key={index}>
                          <input
                            type="checkbox"
                            id="reparo"
                            name="tipoServico"
                            value="reparo"
                          />
                          <div className="checkmark"></div>
                          {servico}
                        </label>
                      )
                    })
                  }
                </div>
                <Button onClick={()=> navigate("/Conectavel/selecionarprofissional")} className='mt-3' variant="contained" fullWidth>Buscar</Button>
              </div>
            )}
          </div>
        </PerfilPrestador>
      </SectionWrapper>
    </>
  );
};

export default PerfilClientePage;
