import React from 'react'
import { Sub_heading } from './Header'
import styled from 'styled-components'
import { Button, Tooltip } from '@mui/material'

const Assinaturas = () => {
    const Heading_text = styled.h2`  
    width: 100%;
    font-size: 48px;
    line-height: 140%;
    font-weight: 400;
    color: white;
    width: 50%;
    
    @media (max-width: 992px){
        width: 90%;
        text-align: center;
        margin: auto;
    }
`
    const Background = styled.section`
    width: 100%;
    height: auto;
    background-color: var(--azul_principal);
    padding: 1rem 3rem;
    @media (max-width: 1200px){
        padding: 1rem ;
    }
`

    const ContainerPlanos = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 2rem;

    @media (max-width: 1200px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`
    const Analogico = styled.div`
    width: 31%;
    height: 73vh;
    background-color: var(--verde_principal);
    padding: 1rem;
    box-shadow: 0 0px 10px #00000046;
    cursor: pointer;
    border: 5px solid var(--verde_principal);
    transition: .2s ease-in-out;

    &:hover{
        background-color: transparent;
        transform: scale(1.02);
    }
    @media (max-width: 1200px){
        width: 100%;
        margin: 1rem 0;
    }
`
    const Digital = styled.div`
    width: 31%;
    height: 73vh;
    background-color: var(--azul_secundario);
    padding: 1rem;
    box-shadow: 0 0px 10px #00000046;
    cursor: pointer;
    border: 5px solid var(--azul_secundario);
    transition: .2s ease-in-out;

    &:hover{
        background-color: transparent;
        transform: scale(1.02);
    }
    @media (max-width: 1200px){
        width: 100%;
        margin: 1rem 0;
    }
`
    const Hd = styled.div`
    width: 31%;
    height: 73vh;
    background-color: var(--laranja);
    padding: 1rem;
    box-shadow: 0 0px 10px #00000046;
    cursor: pointer;
    border: 5px solid var(--laranja);
    transition: .2s ease-in-out;

    &:hover{
        background-color: transparent;
        transform: scale(1.02);
    }
    @media (max-width: 1200px){
        width: 100%;
        margin: 1rem 0;
        height: 75vh;
    }
`

    const Titutlo = styled.p`
    font-size: 1.8rem;
    color: white;
    font-weight: bold;
    text-align: center;
`
    const Subtitulo = styled.p`
    color: white;
    font-weight: 600;
    margin: 1.3rem 0;
`
    const Preco = styled.p`
    color: white;
    font-weight: 600;
    font-size: 1.4em;
`
    const Divisor = styled.div`
    width: 90%;
    height: 3px;
    background-color: white;
    box-shadow: 0 3px 5px #00000046;
`
    const Lista = styled.ul`
    color: white;
    font-weight: 600;
`
    const Item = styled.li`
    margin: .5rem 0;
`



    return (
        <>
            <Background>
                <Sub_heading style={{ color: "var(--verde_secundario)" }}>ASSINATURAS</Sub_heading>
                <Heading_text>Explore os diversos meios de ampliar sua rentabilidade</Heading_text>

                <ContainerPlanos>
                    <Analogico>
                        <Titutlo>Plano analógico</Titutlo>
                        <Subtitulo style={{ margin: '0' }}>Mensalidade</Subtitulo>
                        <Preco>39,99</Preco>
                        <Divisor />
                        <Subtitulo >Informações</Subtitulo>
                        <Lista>
                            <Item>Exibe mais informações sobre seu perfil</Item>
                            <Item>Galeria de serviços</Item>
                        </Lista>
                            <Tooltip title="Em reparo...">
                                <Button fullWidth variant="contained" sx={{ backgroundColor: 'transparent', fontWeight: 'bold', border: '2px solid white', marginTop: '38%' }} disableElevation>
                                    Assinar
                                </Button>
                            </Tooltip>
                    </Analogico>
                    <Digital>
                        <Titutlo>Plano digital</Titutlo>
                        <Subtitulo style={{ margin: '0' }}>Mensalidade</Subtitulo>
                        <Preco>79,99</Preco>
                        <Divisor />
                        <Subtitulo>Informações</Subtitulo>
                        <Lista>
                            <Item>Exibe mais informações sobre seu perfil</Item>
                            <Item>Galeria de serviços</Item>
                        </Lista>
                        <Divisor />
                        <Subtitulo>Divulgação dentro da plataforma</Subtitulo>
                        <Tooltip title="Em reparo...">
                            <Button fullWidth variant="contained" sx={{ backgroundColor: 'transparent', fontWeight: 'bold', border: '2px solid white',marginTop: '19%' }} disableElevation>
                                Assinar
                            </Button>
                        </Tooltip>
                    </Digital>
                    <Hd>
                        <Titutlo>Plano HD</Titutlo>
                        <Subtitulo style={{ margin: '0' }}>Mensalidade</Subtitulo>
                        <Preco>109,99</Preco>
                        <Divisor />
                        <Subtitulo>Informações</Subtitulo>
                        <Lista>
                            <Item>Exibe mais informações sobre seu perfil</Item>
                            <Item>Galeria de serviços</Item>
                        </Lista>
                        <Divisor />
                        <Subtitulo>Divulgação dentro da plataforma</Subtitulo>
                        <Divisor />
                        <Subtitulo>Assessoria</Subtitulo>
                        <Tooltip title="Em reparo...">
                            <Button fullWidth variant="contained" sx={{ backgroundColor: 'transparent', fontWeight: 'bold', border: '2px solid white' }} disableElevation>
                                Assinar
                            </Button>
                        </Tooltip>
                    </Hd>

                </ContainerPlanos>

            </Background>

        </>
    )
}

export default Assinaturas