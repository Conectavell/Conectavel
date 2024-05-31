import styled from 'styled-components'
import { Sub_heading } from './Header'
import escolher from '../assets/escolher.png'
import Qualidades from './Qualidades'
import { Button } from './BarraNavegacao'

const Box = styled.div`
    width: 100%;
    background-color: var(--azul_principal);
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
    .left{
        display: flex;
        flex-direction: row;
        position: absolute;
        left: 50vw;
        top: 40vh;
    }
    .button{
        padding: 1.3rem 3rem;
        border-radius: 100px;
    }
    .qualidades{
        width: 20vw;
    }
    img{
        margin: .5rem 0;
        width: 40%;
    }
    
    @media (max-width: 992px){
        padding: 1rem .5rem;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img{
            width: 70%;
        }
        .row{
            justify-content: center;
            gap: 0;
            align-items: center;
        }
        .left{
            flex-direction: column;
            position: unset;
            left: auto;
            top: auto;
        }
        .qualidades{
            width: 50vw;
        }
        .button{
            margin-top: 1rem;
        }
    }
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

const NosEscolher = () => {
    const { innerWidth: width, innerHeight: height } = window

    return (
        <Box>
            <Sub_heading style={{ color: 'var(--laranja)' }}>
                PORQUE NOS ESCOLHER
            </Sub_heading>
            <Heading_text >Serviço confiável e de qualidade</Heading_text>

            <div className="row">
                {
                    width > 992 ? <img src={escolher} /> : ''
                }

                <div className="left">
                    <div className="qualidades">
                        <Qualidades title="Seguro" text="Receba sua tecnologia de volta em ótimo estado" />
                        <Qualidades title="Sustentável" text="Como profissional, você possui recursos para descartar corretamente eletrônicos" />
                        {
                            width > 992 ? <Button className='button'>Começar agora</Button> : ''
                        }

                    </div>
                    <div className="qualidades">
                        <Qualidades title="Confiável" text="Alta tecnologia para garantir a segurança dos seus dados" />
                        <Qualidades title="Flexível" text="Como profissional, você pode escolher quais serviços você deseja assumir" />
                    </div>
                </div>
            </div>
            {
                width > 992 ? '' : <Button className='button'>Começar agora</Button>
            }
        </Box >
    )
}

export default NosEscolher
