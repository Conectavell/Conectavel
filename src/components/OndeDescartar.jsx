import styled from "styled-components";
import React, { useState, useEffect } from 'react';

const Box = styled.section`
    width: 100%;
    height: auto;
    margin: auto;
    background-color: var(--verde_secundario);
    padding: 2rem 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    p{
         font-size: 32px;
        font-weight: 400;
        color: #00796A;
    }
    h2{
        font-weight: 400;
        font-size: 58px;
        color: #151515;
    }
`
const ImgsContainer = styled.div`
    display: flex;
    gap: 93px;
    margin-top: 100px;
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 60px;
        cursor: pointer;
        position: relative;
    }
    img{
        border-radius: 50%;
        border: 10px solid #131922;
        box-shadow: 0 40px 40px rgba(0, 0, 0, 0.25);
    }
    .ge{
        border: 10px solid white;
    }
    p{
        font-size: 16px;
        text-align: center;
        width: 280px;
        font-weight: 400;
        color: white;
        position: absolute;
        top: 40%;           
        left: 50%;         
        transform: translate(-50%, -50%);
        opacity: 0;
    }
    .clicked img{
      filter: brightness(50%);
    }
    .clicked p{
      opacity: 1;
    }
    h6{
        font-weight: 400;
        font-size: 24px;
        color: black;
    }
    @media  (max-width: 1300px){
        img{
            width: 320px;
            height: auto;
        }
        div{
            gap: 100px;
        }
        gap: 15px;
        p{
            margin-top: -15px;
        }
    }
    @media  (max-width: 990px){
        flex-direction: column;
        img{
            width: 360px;
            height: auto;
        }
        div{
            gap: 20px;
        }
        p{
            margin-top: 15px;
        }
    }
`
 

const OndeDescartar = () => {
    const [clicked, setClicked] = useState([false, false, false]);

    const toggleOverlay = (index) => {
        const newClicked = [...clicked];
        newClicked[index] = !newClicked[index];
        setClicked(newClicked);
    };
    
    const handleClickOutside = (event) => {
        if (event.target.closest('.image-container')) return;
        setClicked([false, false, false]);
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return(
        <Box>
            <p>COLABORE</p>
            <h2>Onde descartar</h2>
            <ImgsContainer>
                <div className={`image-container ${clicked[0] ? 'clicked' : ''}`} onClick={() => toggleOverlay(0)}>
                    <img src="src/assets/samsungDescarte.jpg" alt="Sansung Recicla" width="360" height="360" />
                    <p> O Programa de Reciclagem Samsung Recicla oferece descarte gratuito e ecologicamente correto para produtos eletroeletrônicos e eletrodomésticos de qualquer marca, tais como baterias, celulares, notebooks, refrigeradores, máquinas de lavar e demais produtos quebrados, usados ou sem uso.</p>
                    <h6>Sansung Recicla</h6>
                </div>
                <div className={`image-container ${clicked[1] ? 'clicked' : ''}`} onClick={() => toggleOverlay(1)}>
                    <img src="src/assets/greenEletronDescarte.jpg" alt="Green Eletron" width="360" height="360" className="ge"/>
                    <p>Green Eletron é uma empresa de logística reversa que disponibiliza pontos de coleta em estabelecimentos e instituições para as pessoas descartarem resíduos eletrônicos de forma voluntária. Ela tem foco em pequenos e médios resíduos.</p>
                    <h6>Green Eletron</h6>
                </div>
                <div className={`image-container ${clicked[2] ? 'clicked' : ''}`} onClick={() => toggleOverlay(2)}>
                    <img src="src/assets/abreeDescarte.jpg" alt="ABREE" width="360" height="360"/>
                    <p>A ABREE, Associação Brasileira de Reciclagem de Eletroeletrônicos e Eletrodomésticos, foi fundada em 29 de junho de 2011, sendo uma associação sem fins lucrativos, tendo o objetivo de gestão de logística reversa de produtos eletrônicos e eletrodomésticos pós consumo no Brasil.</p>
                    <h6>ABREE</h6>
                </div>
            </ImgsContainer>
        </Box>
    )
}
export default OndeDescartar;
