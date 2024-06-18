import styled from 'styled-components'
import { Sub_heading } from './Header'
import escolher from '../assets/escolher.png'
import Qualidades from './Qualidades'
import { Button } from './BarraNavegacao'
import { useTranslation } from 'react-i18next'
//
import { Link } from 'react-router-dom'
// import { Button } from './BarraNavegacao'

const Box = styled.div`
    width: 100vw;
    background-color: var(--azul_principal);
    height: auto;
    margin: auto;
    padding-top: 0;
    padding-bottom: 0;
    padding: 3% 10%;
    position: relative;
    .row{
        display: flex;
        flex-direction: row;
        gap: 4rem;
    }
    .row img{
        width: 30vw;
        display: block;
    }
    .button{
        padding: 1.3rem 3rem;
        border-radius: 100px;
    }
    
    @media (max-width: 992px){
        padding: 1rem .5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .row{
            justify-content: center;
            gap: 0;
            align-items: center;
        }
        .button{
            margin-top: 1rem;
            display: block;
        }
    }

    @media (max-width: 1284px){
    min-height: 100vh;

        img{
            width: 30vw;
        }}

    @media (max-width: 1170px){
        img{
        display: none;
    }}
`
const Heading_text = styled.h2`  
    width: 100%;
    font-size: 48px;
    line-height: 140%;
    font-weight: 400;
    color: #fff;
    width: 50%;
    
    @media (max-width: 992px){
        width: 90%;
        text-align: center;
    }
`
const Button = styled(Link)`
    padding: .8rem 1rem;
    text-decoration: none;
    border: none;
    outline: none;
    border-radius: 1.5rem;
    cursor: pointer;
    background-color: var(--laranja);
    
    color: white;
    transition: all .3s linear;
    font-weight: 600;
    &:hover{
        background-color: var(--verde_principal);
    }
    `

const Container = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    `
const ContainerLeft = styled.div`
        display: flex;
        flex-direction: row;

        @media (max-width: 992px){
            flex-direction: column;
        }
        `
const ContainerQualidades = styled.div`
    width: 22vw;
    @media (max-width: 992px){
            width: 90vw;
        }
`
const NosEscolher = () => {
    const { innerWidth: width, innerHeight: height } = window

    return (
        <Box>
            <Sub_heading style={{ color: 'var(--laranja)' }}>
                PORQUE NOS ESCOLHER
            </Sub_heading>
            <Heading_text >Serviço confiável e de qualidade</Heading_text>

            <Container >
                <img src={escolher} />

                <ContainerLeft>
                    <ContainerQualidades>
                        <Qualidades title="Seguro" text="Receba sua tecnologia de volta em ótimo estado" />
                        <Qualidades title="Sustentável" text="Como profissional, você possui recursos para descartar corretamente eletrônicos" />
                        {
                            width > 992 ? <Button className='button'>Começar agora</Button> : ''
                        }

                    </ContainerQualidades>
                    <ContainerQualidades>
                        <Qualidades title="Confiável" text="Alta tecnologia para garantir a segurança dos seus dados" />
                        <Qualidades title="Flexível" text="Como profissional, você pode escolher quais serviços você deseja assumir" />
                    </ContainerQualidades>
                </ContainerLeft>
            </Container>
            {
                width > 992 ? '' : <Button className='button'>Começar agora</Button>
            }
        </Box >
    )
}

export default NosEscolher
