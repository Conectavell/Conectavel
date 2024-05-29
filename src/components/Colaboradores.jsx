import styled from 'styled-components'
import Review from './Reviews'

const Seção = styled.section`
    height: 100%;
    width: 80%;
    margin: auto;
    background: #F2F4F8;
    padding: 3rem 24px;
    display: flex;
    flex-direction: column;
    gap: 31px;

`

const Title = styled.div`
    height: fit-content;
    width: fit-content;
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 1000px){
        text-align: center;
    }

`

const Sub_heading = styled.p`
    font-size: 32px;
    font-weight: 400;
    letter-spacing: 10%;
    color: var(--azul_principal);

    @media only screen and (max-width: 1000px){
        text-align: center;
    }
`

const Heading = styled.div`
    height: fit-content;
    width: fit-content;
`

const Heading_text = styled.h2`  
    font-size: 48px;
    line-height: 140%;
    font-weight: 400;

    @media only screen and (max-width: 1000px){
        width: 100%;
    }
`

const Reviews = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    @media only screen and (max-width: 1000px){
        gap: 40px;
    }
    
`

function Colaboradores() {
    return (
        <Seção>
            <Title>
                <Sub_heading>
                    COLABORADORES
                </Sub_heading>
                <Heading>
                    <Heading_text>O que falam do nosso serviço</Heading_text>
                </Heading>
            </Title>
            <Reviews>
                <Review nome="Walter Anderson" opiniao_title="Faulty Wiring in My Kitchen." data="March 15, 2023" />
                <Review nome="Susan Torres" opiniao_title="Circuit Breaker Tripping" data="April 5, 2023" />
                <Review nome="John Davis" opiniao_title="Flickering Lights in The Living Room" data="May 2, 2023" />
                <Review nome="Brandon Miller" opiniao_title="Power Outage Troubleshooting." data="July 7, 2023" />
                <Review nome="Gloria Williams" opiniao_title="Upgrading Lighting Fixtures." data="August 20, 2023" />
                <Review nome="Melissa Ross" opiniao_title="Installation of New Electrical Outlets." data="June 10, 2023" />
            </Reviews>
        </Seção>
    )
}

export default Colaboradores