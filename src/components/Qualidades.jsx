import styled from 'styled-components'
import icon from '../assets/iconQualidades.png'
import { LuUsers } from 'react-icons/lu'

const Box = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2rem auto;

    @media (max-width: 768px){
        align-items: center;
        justify-content: center;
        text-align: center;
    }
`
const Title = styled.p`
    color: white;
    font-size: 24px;
    @media (max-width: 768px){
        align-items: center;
        justify-content: center;
    }
    `
const Text = styled.p`
    color: white;
    font-size: 16px;
    @media (max-width: 768px){
        width: 100;
        align-items: center;
        justify-content: center;
    }
`



const Qualidades = ({title, text}) => {
    
  return (
    <Box>
        <LuUsers size="50px" color='var(--laranja)' />
        <Title>{title}</Title>
        <Text>{text}</Text>
    </Box>
  )
}

export default Qualidades