import styled from 'styled-components'
import header1 from '../assets/header1.png'
import header2 from '../assets/header2.png'

const Box = styled.header`
    width: 80%;
    margin: auto;
    position: relative;
    margin-bottom: 2rem;

    .right{
        position: absolute;
        top: 0%;
        right: 0%;
    }
    .left{
        margin-top: 1rem;
    }

@media (max-width: 1024px){
    width: 90%;
}
@media (max-width: 768px){
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .right{
        position: static;
    }
}
`
export const Sub_heading = styled.p`
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 10%;
    color: #0B378D;

    @media (max-width: 768px){
        text-align: center;
    }

`

export const Heading_text = styled.h1`  
    width: 70%;
    font-size: 3em;
    line-height: 140%;
    font-weight: 400;
    
    @media (max-width: 768px){
        width: 100%;
        text-align: center;
    }
`
export const Detail = styled.p`  
    color: #95979C;
    @media (max-width: 768px){
        width: 80%;
        text-align: center;
    }
`

const Inicio = () => {
    const { innerWidth: width, innerHeight: height } = window

    return (
        <>
            <Box>
                <div>
                    <Sub_heading>
                        UM CICLO QUE SE RENOVA
                    </Sub_heading>
                    <Heading_text>Conserte seus<br /> equipamentos com<br /> qualidade</Heading_text>
                </div>
                <Detail style={{ marginTop: '1rem' }}>Obtenha rentabilidade e contribua para o descarte eletrônico<br /> correto</Detail>

                {
                    width > 768
                        ? <>
                            <img className='left' src={header2} alt="" />
                            <img className='right' src={header1} alt="" />
                        </>
                        :
                        <img className='right' width="90%" src={header1} alt="" />
                }

            </Box>
        </>
    )
}

export default Inicio
