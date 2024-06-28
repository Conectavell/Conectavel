import React, { useContext } from 'react'
import kemilly from '../assets/kemilly.png'
import pedro from '../assets/pedroAlves.png'
import styled from 'styled-components'
import CadastroContext from '../context/CadastroContext'

const BemVindo = ({ usuario }) => {
    const { innerWidth: width, innerHeight: height } = window
    const { nomeUsuario, sobrenomeUsuario, tipoPerfil } = useContext(CadastroContext)

    const Container = styled.div`
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.5);
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.72rem 0.576rem;
    gap: 0.72rem;
    border: 1px solid #E8EFF7;

    width: 18rem;
    height: 3.5rem;

    p{
        margin: 0;
    }

    @media (max-width: 992px){
        width: 10rem;
        font-size: .8em;
        img{
            width: 2rem;
        }
    }
    `

    const Details = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 0;
    `

    const Nome = styled.p`
        font-size: 1.2em ;
        margin: 0;
        font-weight: 500;
    `


    return (
        <>
            <Container>
                <img src={tipoPerfil === 2 ? pedro : kemilly} width={45} alt="" />

                <Details>
                    {
                        width > 992 ? <p>Bem vindo de volta,</p>
                            : ''
                    }
                    <Nome>Kemilly Vitoria </Nome>
                </Details>
            </Container>
        </>
    )
}

export default BemVindo


