import React from 'react'
import styled from 'styled-components'
import imagem from '../assets/crieSeuPerfil.png'
import { Sub_heading } from './Header'

const CrieSeuPerfil = () => {
    const Box = styled.section`
        width: 100vw;
        height: auto;
        display: flex;
        flex-direction: column;
        padding: 3rem 0;
        @media (max-width: 1200px){
            padding: 5rem 0;
    }
        
    `

    const ContainerImagem = styled.div`
    img{
        width: 27vw;
    }
    @media (max-width: 1200px){
        display: none;
    }
    `

    const ContainerTexto = styled.div`
        width: 30vw;
        height: 20vh;
        background-color: white;
        border: 3px solid var(--laranja);
        border-radius: 10px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        box-shadow: 0 0 15px #ffa73568;
        p{
            font-size: 1.5rem;
            margin: 0;
        }

        @media (max-width: 1200px){
            width: 80%;
            height: 24vh;
            margin: .5rem auto;
    }
    `

    const ColunaTexto = styled.div`
        display: flex;
        flex-direction: column;
        gap: 1.5rem 0;
    `

    const Heading_text = styled.h2`  
width: 100%;
font-size: 48px;
font-weight: 400;
color: #000000;
width: 50%;
text-align: center;
margin: auto;
margin-bottom: 3rem;

@media (max-width: 1200px){
    width: 90%;
    font-size: 38px;
}
`
    const Container = styled.div`
        display: flex;
        gap: 0 3rem;
        flex-direction: row;
        justify-content: center;
        @media (max-width: 1200px){
            flex-direction: column;
            align-items: center;
    }

`

    return (
        <>
            <Box>
                <Sub_heading style={{ color: 'var(--azul_principal)', textAlign: "center", margin: "auto" }}>
                    COMECE HOJE MESMO
                </Sub_heading>
                <Heading_text >Crie seu perfil </Heading_text>
                <Container>
                    <ColunaTexto>
                        <ContainerTexto>
                            <p>Contrate profissionais</p>
                        </ContainerTexto>
                        <ContainerTexto>
                            <p>Tenha seu equipamento eletrônico em bom estado novamente</p>
                        </ContainerTexto>
                        <ContainerTexto>
                            <p>Prestadores de serviço de qualidade</p>
                        </ContainerTexto>
                    </ColunaTexto>
                    <ContainerImagem>
                        <img src={imagem} alt="" />
                    </ContainerImagem>
                    <ColunaTexto>
                        <ContainerTexto>
                            <p>Exiba seu trabalho por meio do seu portifólio</p>
                        </ContainerTexto>
                        <ContainerTexto>
                            <p>Conecte-se em uma comunidade com outros trabalhadores</p>
                        </ContainerTexto>
                        <ContainerTexto>
                            <p>Negocie peças de uma maneira mais fácil</p>
                        </ContainerTexto>
                    </ColunaTexto>
                </Container>
            </Box>




        </>
    )
}

export default CrieSeuPerfil