import styled from 'styled-components'

const Seção = styled.section`
    height: 100%;
    width: 100%;
    background: #F2F4F8;
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
    
`

function Colaboradores() {
    return (
        <Seção>
            <Title>
                <Sub_heading>
                    COLABORADORES
                </Sub_heading>
            </Title>
        </Seção>
    )
}

export default Colaboradores