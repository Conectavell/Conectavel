import styled from "styled-components";
import { FaStar, FaRegStar } from "react-icons/fa";
import axios from "axios";
import { useContext } from "react";
import CadastroContext from "../context/CadastroContext";
import { Navigate, useNavigate } from "react-router-dom";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  /* margin: 10px; */
  width: 250px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;

  &:hover {
    border-color: var(--azul_secundario);
    transform: scale(1.03);
  }
  .perfil_button {
    background-color: var(--azul_principal);
    padding: 5px;
    border-radius: 8px;
    border: none;
    color: #ffffff;
    font-size: 14px;
  }
`;

const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
  border-radius: 10px;
`;

const Name = styled.h2`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

const Description = styled.p`
  text-align: center;
  border-radius: 40px;
  background-color: #b2b2b23c;
  margin-top: 10px;
`;

const Stars = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Avaliacoes = styled.span`
  font-size: 0.9rem;
  margin-left: 5px;
  color: var(--azul_secundario);
`;

const CardMenu = ({ foto, nome, descricao, avaliacoes, id }) => {
  const navigate = useNavigate()
  const renderStars = () => {

    const totalStars = 5;
    const starsFilled = Math.round((avaliacoes / 5) * totalStars);
    const starsArray = [];

    for (let i = 0; i < totalStars; i++) {
      if (i < starsFilled) {
        starsArray.push(<FaStar key={i} color="gold" />);
      } else {
        starsArray.push(<FaRegStar key={i} color="gold" />);
      }
    }

    return starsArray;
  };

  const escolherProfissional = (idProfissional) => {
    navigate(`/Conectavel/${idProfissional}`)
  }

  return (
    <Card>
      <Name>{nome}</Name>
      <ProfileImage src={foto} alt={nome} />

      <Stars>
        {renderStars()}
        <Avaliacoes>{avaliacoes}</Avaliacoes>
      </Stars>
      <Description>{descricao}</Description>

      <button  className="perfil_button w-100" onClick={() => escolherProfissional(id)}>Ver perfil</button>
    </Card>
  );
};

export default CardMenu;
