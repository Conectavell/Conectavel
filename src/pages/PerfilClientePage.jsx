import { ChatMiniNome } from '../components/ChatMini'
import Navbar from '../components/NavbarPerfis';
import ChatMini from '../components/ChatMini';
import Kemilly from '../assets/kemilly.png';
import React, { useContext, useState } from "react";
import { BsMoonStarsFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { CiMoneyCheck1 } from "react-icons/ci";
import ChatLateral from '../components/ChatLateral';
import { useNavigate } from 'react-router-dom';

import {
  FotoEInfos,
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
import { Button } from '@mui/material';



const PerfilClientePage = () => {
  const [selectedService, setSelectedService] = useState('');
  const [showTiposServicos, setShowTiposServicos] = useState(false);
  const { nomeUsuario, sobrenomeUsuario, emailUsuario, celularUsuario,  } = useContext(CadastroContext)
  const navigate = useNavigate()

  const names = [
    'Manutenção de vídeo games',
    'Manutenção de celulares e telefones',
    'Manutenção de televisores',
    'Manutenção de aparelhos domésticos',
    'Manutenção de computadores',
  ];

  const handleCheckboxChange = (event) => {
    const { value } = event.target;
    setSelectedService(prevSelected => prevSelected === value ? '' : value);
  };

// valor do check box selecionado vai aparecer no console :)
  const handleSearch = () => {
    if (selectedService) {
      console.log(`Serviço selecionado: ${selectedService}`);
    } else {
      console.log('Nenhum serviço selecionado.');
    }
  };


  

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
                      <ChatMiniNome descricao>{`${nomeUsuario} ${sobrenomeUsuario}`}</ChatMiniNome>
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
              </FotoEInfos>
              <ItensInfo ClienteOrcamentos>
                <ItensInfo MeusOrcamentos>
                  <div>
                    <p>Meus orçamentos</p>
                  </div>
                  <BotaoOrcamentos />

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
              <BotaoOrcamentos />

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

                  {
                    names.map((servico, index) => {
                      return (
                        <label htmlFor={`reparo-${index}`} key={index}>
                          <input
                            type="checkbox"
                            id={`reparo-${index}`}
                            name="tipoServico"
                            value={servico}
                            checked={selectedService === servico}
                            onChange={handleCheckboxChange}
                          />
                          <div className="checkmark"></div>
                          {servico}
                        </label>
                      )
                    })
                  }
                </div>
                <Button className='mt-3' variant="contained" fullWidth onClick={handleSearch}>Buscar</Button>

              </div>
            )}
          </div>
        </PerfilPrestador>
      </SectionWrapper>
    </>
  );
};

export default PerfilClientePage;
