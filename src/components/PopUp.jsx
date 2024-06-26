import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'

export const PopDadContainer = styled.div`

border-radius: 10px;
box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.15);
  border-color: rgba(0, 0, 0, 0.15);
  border-style: solid;
  border-width: 1px;
/* max-width: 300px; */
width: 22%;
/* max-height: 90%; */
height: 30%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 20px auto;

h2 {
    margin-top: 20px;
    padding: 0;
    font-family: "Poppins", sans-serif;
    font-size: 20px;
    font-weight: 400;
    color: #222222;
}

@media (max-width: 1200px) {
    width: 90vw;
}
`;

export const PopSonContainer = styled.div`
border: 2px solid #d8d5d5;
border-radius: 10px;
width: 90%;
/* max-width: 280px; */
height: auto;
display: flex;
flex-direction: column;
align-items: start;
margin: 16px;
padding: .5rem;

p {
    padding: 0;
    font-family: "Poppins", sans-serif;
    font-size: 13px;
}
h2, h3, h4 {
    padding: 0;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
}
h4 {
    font-weight: 600;
}
button {
    width: 100%;
    margin: .5rem 0;
    padding: 10px;
    border: none;
    border-radius: 10px;
    background-color: #175EC6;
    color: #fff;
    position: relative;
    font-family: "Poppins", sans-serif;
    cursor: pointer;
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

&:hover {
transform: translateY( 0px);
box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2), 0 12px 40px rgba(0, 0, 0, 0.1);
}


&:active {
transform: translateY(0);
box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.1);
}
}
.higlight{
color: #49454fea;
}
.alterblue{
color: #0068D5;
font-size: .8em;
font-weight: 400;
}

@media (max-width: 600px) {
    h2, h3, h4 {
        font-size: 14px;
    }
    button {
        width: 100%;
        left: 0;
    }
}
`;

const PopUp = () => {
    const navigate = useNavigate()

    return (
        <PopDadContainer>
            <h2>Chamados</h2>
            <PopSonContainer>
                <h4>
                    <span className='alterblue'>Kemily Vitoria</span>
                </h4>
                <p>
                    Serviço: <span className='higlight'>Manutenção de eletrodomésticos</span>
                </p>
                <p>
                    Prazo: <span className='higlight'>6-14 dias uteis</span>
                </p>
                <h5>
                    Valor: <span className='alterblue'>R$93,00</span>
                </h5>
                <button onClick={() => navigate('/Conectavel/avaliacaocliente')} type="submit">Avaliar</button>
            </PopSonContainer>
        </PopDadContainer>
    )
}

export default PopUp;