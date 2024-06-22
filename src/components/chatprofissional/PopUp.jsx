import React from 'react'
import styled from 'styled-components'

export const PopDadContainer = styled.div`
border: 2px solid #d8d5d5;
border-radius: 10px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6), 0 6px 20px rgba(0, 0, 0, 0.1);
max-width: 300px;
width: 100%;
max-height: 90%;
height: 360px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
position: relative;
left: 40px;
margin: 20px auto;
top: 70px;

h1 {
    margin-top: 20px;
    padding: 0;
    font-family: "Poppins", sans-serif;
    font-size: 20px;
    font-weight: 400;
    color: #222222;
}

@media (max-width: 600px) {
    width: 90%;
    h1 {
        font-size: 16px;
    }
}
`;

export const PopSonContainer = styled.div`
border: 2px solid #d8d5d5;
border-radius: 10px;
width: 90%;
max-width: 280px;
height: auto;
display: flex;
flex-direction: column;
align-items: start;
margin: 16px;

p {
    padding: 0;
    margin: 10px;
    font-family: "Poppins", sans-serif;
    font-size: 13px;
}
h2, h3, h4 {
    padding: 0;
    margin: 10px;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
}
h4 {
    font-weight: 600;
}
button {
    width: 90%;
    padding: 10px;
    border: none;
    border-radius: 10px;
    background-color: #175EC6;
    color: #fff;
    position: relative;
    left: 14px;
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
}

@media (max-width: 600px) {
    h2, h3, h4 {
        margin: 5px;
        font-size: 14px;
    }
    button {
        width: 100%;
        left: 0;
    }
}
`;

const PopUp = () => {
return (
<PopDadContainer>
<h1>Chamados</h1>
<PopSonContainer>
<h4>
<span className='alterblue'>Sarah Doe</span>
</h4>
<p>
Serviço: <span className='higlight'>Manutenção</span>
</p>
<p>
Prazo: <span className='higlight'>6-14 dias uteis</span>
</p>
<h3>
Valor: <span className='alterblue'>R$93,00</span>
</h3>
<button type="submit">Avaliar</button>
<h2>
Status: <span className='alterblue'>Aceito</span>
</h2>
</PopSonContainer>
</PopDadContainer>
)
}

export default PopUp;