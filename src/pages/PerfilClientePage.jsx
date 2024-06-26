import { ChatMiniNome } from '../components/ChatMini'
import Navbar from '../components/NavbarPerfis';
import ChatMini from '../components/ChatMini';
import Kemilly from '../assets/kemilly.png';
import React, { useContext, useEffect, useRef, useState } from "react";
import { BsMoonStarsFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { CiMoneyCheck1, CiSquarePlus } from "react-icons/ci";
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
  const { nomeUsuario, sobrenomeUsuario, emailUsuario, celularUsuario, setServicoEscolhido } = useContext(CadastroContext)
  const navigate = useNavigate()
  const ref = useRef()


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
    console.log(value)
  };

  // valor do check box selecionado vai aparecer no console :)
  const handleSearch = () => {
    if (selectedService === 'Manutenção de vídeo games') {
      setServicoEscolhido(1)
    } else if (selectedService === 'Manutenção de celulares e telefones') {
      setServicoEscolhido(2)
    } else if (selectedService === 'Manutenção de televisores') {
      setServicoEscolhido(3)
    } else if (selectedService === 'Manutenção de aparelhos domésticos') {
      setServicoEscolhido(4)
    } else if (selectedService === 'Manutenção de computadores') {
      setServicoEscolhido(5)
    } else {
      console.log('Nenhum serviço selecionado.');
    }
    navigate("/Conectavel/selecionarprofissional")
  };

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
          <div className="servico-container" >
            <div onClick={() => {
              setShowTiposServicos(!showTiposServicos)
              setTimeout(() => {
                ref.current.scrollIntoView({ behavior: "smooth" })
              }, 10);

            }}>
              <ItensInfo NovoServico >
                <p style={{ fontSize: '1em' }}>
                  <b style={{ fontWeight: '500' }}> Novo serviço</b><br></br>Solicitar reparo
                </p>
                <BotaoOrcamentos >
                  <CiSquarePlus color="white" size={40} />
                </BotaoOrcamentos>

              </ItensInfo>
            </div>
            {showTiposServicos && (
              <div className="container" >
                <div className="Container-servico" >


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
                <Button disabled={!selectedService ? true : false} className='mt-1' variant="contained" ref={ref} fullWidth onClick={handleSearch}>Buscar</Button>

              </div>
            )}
          </div>
        </PerfilPrestador>
      </SectionWrapper >
    </>
  );
};

export default PerfilClientePage;
