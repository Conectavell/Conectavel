import styled from 'styled-components'
import headerImage from '../assets/headerImage.png'
import headerImage2 from '../assets/headerImage2.png'

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
    letter-spacing: 10%;
    color: #0B378D;

    @media (max-width: 768px){
        text-align: center;
    }

`

const Heading_text = styled.h1`  
    width: 100%;
    font-size: 48px;
    line-height: 140%;
    font-weight: 400;
    
    @media (max-width: 768px){
        width: 100%;
        text-align: center;
    }
`
export const Detail = styled.p`  
    color: var(--verde_principal);
    font-size: 20px;
    margin-bottom: 1rem;
    @media (max-width: 768px){
        width: 80%;
        text-align: center;
    }
`

const Header = () => {
    const { innerWidth: width, innerHeight: height } = window

    return (
        <>
            <Box>
                {/* <div> */}
                <Sub_heading>
                    UM CICLO QUE SE RENOVA
                </Sub_heading>
                <Heading_text>Conserte seus equipamentos com qualidade</Heading_text>
                {/* </div> */}
                <Detail style={width > 768 ? { marginTop: '1rem' } : { marginTop: '1rem', marginBottom: '1rem' }}>Obtenha rentabilidade e contribua para o descarte eletrônico<br /> correto</Detail>

                {/* {
                    width > 768
                        ? <>
                            <img className='left' src={header2} alt="" />
                            <img className='right' src={header1} alt="" />
                        </>
                        :
                        <img className='right' width="90%" src={header1} alt="" />
                } */}
                <div style={{alignSelf: 'center'}}>
                    <img src={headerImage} style={{marginRight: '5rem'}} width="636px" alt="" />
                    <img src={headerImage2} width="430px" alt="" />
                </div>
            </Box>
        </>
    )
}

export default Header
