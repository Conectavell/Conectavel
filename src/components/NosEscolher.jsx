import styled from 'styled-components'
import { Heading_text, Sub_heading } from './Inicio'
import escolher from '../assets/escolher.png'
import Qualidades from './Qualidades'
import { Button } from './Nav'

const Box = styled.div`
    width: 100%;
    background-color: #2196F3;
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
        margin-top: 8rem;
        padding: 1.3rem 3rem;
        border-radius: 100px;
    }
    .qualidades{
        width: 20vw;
        height: 50px;
    }
    img{
        margin: .5rem 0
    }
`

const NosEscolher = () => {
    return (
        <Box>
            <div>
                <Sub_heading style={{ color: '#394B21' }}>
                    PORQUE NOS ESCOLHER
                </Sub_heading>
                <Heading_text style={{ color: '#ffffff', width: '30%' }}>Serviço confiável e de qualidade</Heading_text>
            </div>
            <div className="row">
                <img src={escolher} alt="" />

                <div className="left">
                    <div className="qualidades">
                        <Qualidades title="Seguro" text="Receba sua tecnologia de volta em ótimo estado" />
                        <Qualidades title="Sustentável" text="Como profissional, você possui recursos para descartar corretamente eletrônicos" />
                        <Button className='button'>Get Started</Button>
                    </div>
                    <div className="qualidades">
                        <Qualidades title="Confiável" text="Alta tecnologia para garantir a segurança dos seus dados" />
                        <Qualidades title="Flexível" text="Como profissional, você pode escolher quais serviços você deseja assumir" />
                    </div>

                </div>
            </div>

        </Box >
    )
}

export default NosEscolher
