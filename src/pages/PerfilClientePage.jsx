import { ChatMiniNome } from '../components/ChatMini'
import Navbar from '../components/NavbarPerfis';
import ChatMini from '../components/ChatMini';
import Kemilly from '../assets/kemilly.png';
import React, { useContext, useState } from "react";
import { BsMoonStarsFill } from "react-icons/bs";
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
            <ItensInfo NovoServico>
              <p>
                Novo serviço<br></br>Solicitar reparo
              </p>
              <BotaoOrcamentos
                onClick={() => setShowTiposServicos((state) => !state)}
              />
            </ItensInfo>
            {showTiposServicos && (
              <div className="container">
                <div className="Container-servico">
                  <p id="P_container">Tipo de Serviço</p>
                  <label htmlFor="reparo">
                    <input
                      type="checkbox"
                      id="reparo"
                      name="tipoServico"
                      value="reparo"
                    />
                    <div className="checkmark"></div>
                    Reparo
                  </label>
                  <label htmlFor="manutencao">
                    <div class="checkmark"></div>
                    Reparo
                  </label>
                  <label for="manutencao">
                    <input
                      type="checkbox"
                      id="manutencao"
                      name="tipoServico"
                      value="manutencao"

                    />
                    <div className="checkmark"></div>
                    Manutenção
                  </label>
                  <label htmlFor="Instalação">
                    <div class="checkmark"></div>
                    Manutenção
                  </label>
                  <label for="Instalação">
                    <input
                      type="checkbox"
                      id="Instalação"
                      name="tipoServico"
                      value="Instalação"
                    />
                    <div className="checkmark"></div>
                    <div class="checkmark"></div>
                    Instalação
                  </label>

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
