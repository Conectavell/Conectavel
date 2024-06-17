import styled from 'styled-components'
import headerImage from '../assets/headerImage.png'

const Box = styled.header`
    width: 80%;
    margin: auto;
    position: relative;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;

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
    .left{
        display: none;
    }
}
`
export const Sub_heading = styled.p`
    font-size: 24px;
    font-weight: 400;
    color: var(--azul_principal);
    
    @media (max-width: 992px){
        font-size: 20px;
        text-align: center;
    }

`

const Heading_text = styled.h2`
    width: 100%;
    font-size: 48px;
    font-weight: 400;
    
    @media (max-width: 992px){
        line-height: 100%;
        font-size: 38px;
        width: 100%;
        text-align: center;
    }
    `
export const Detail = styled.p`
    color: var(--verde_principal);
    font-size: 20px;
    margin-bottom: 1rem;
    margin-top: 1rem;
    @media (max-width: 992px){
        font-size: 17px;
        text-align: center;
        margin-bottom: 1rem;
    }
    `
const Image = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    
    img{
        width: 70%;
    }
    @media (max-width: 992px){
        img{
            width: 100%;
        }
    }
`

const Header = () => {
    return (
        <>
            <Box>
                <Sub_heading>
                    UM CICLO QUE SE RENOVA
                </Sub_heading>
                <Heading_text>Conserte seus equipamentos com qualidade</Heading_text>
                <Detail >Obtenha rentabilidade e contribua para o descarte eletrônico correto</Detail>

                <Image >
                    <img src={headerImage} />
                </Image>
            </Box>
        </>
    )
}

export default Header
