import styled from 'styled-components'

const Seção = styled.section`
    height: 100%;
    width: 100%;
    background: #F2F4F8;
    padding: 24px;
`

const Title = styled.div`
    height: fit-content;
    width: fit-content;
    display: flex;
    flex-direction: column;
    gap: 30px;
`

const Sub_heading = styled.p`
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 10%;
    color: #0B378D;
`

const Heading = styled.div`
    height: fit-content;
    width: fit-content;
`

const Heading_text = styled.p`  
    width: 510px;
    font-size: 56px;
    line-height: 140%;
    font-weight: 400;
`

const Reviews = styled.div`
    height: 100%;
    width: auto;
    display: flex;
    flex-wrap: wrap;
`

const Review = styled.div`
    background: #ffffff;
    height: fit-content;
    width: fit-content;
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 34px;
`

const ImageBox = styled.div`
    
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
                <Review>

                </Review>
            </Reviews>
        </Seção>
    )
}

export default Colaboradores