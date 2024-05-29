import styled from 'styled-components'
import icon from '../assets/iconQualidades.png'

const Box = styled.div`
    display: flex;
    flex-direction: column;
    img{
        width: 48px;
    }

    @media (max-width: 768px){
        align-items: center;
        justify-content: center;
        text-align: center;

        img{
            width: 48px !important;
        }
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
        <img src={icon} alt="" />
        <Title>{title}</Title>
        <Text>{text}</Text>
    </Box>
  )
}

export default Qualidades