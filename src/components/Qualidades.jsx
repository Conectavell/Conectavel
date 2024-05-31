import styled from 'styled-components'
import { LuUsers } from 'react-icons/lu'

const Box = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2rem auto;
    

    @media (max-width: 992px){
        align-items: center;
        justify-content: center;
        text-align: center;
        margin: 1rem auto;
    }
`
const Title = styled.p`
    color: white;
    font-size: 28px;
    @media (max-width: 992px){
        align-items: center;
        justify-content: center;
    }
    `
const Text = styled.p`
    color: #e1e2e4;
    font-size: 20px;
    @media (max-width: 992px){
        width: 100%;
        align-items: center;
        justify-content: center;
    }
`

const Qualidades = ({ title, text }) => {

    return (
        <Box>
            <LuUsers size="50px" color='var(--laranja)' />
            <Title>{title}</Title>
            <Text>{text}</Text>
        </Box>
    )
}

export default Qualidades