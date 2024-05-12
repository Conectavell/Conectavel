import styled from 'styled-components'
import icon from '../assets/iconQualidades.png'

const Box = styled.div`
    display: flex;
    flex-direction: column;
    img{
        width: 48px;
    }
`
const Title = styled.p`
    color: white;
    font-size: 24px;
    `
const Text = styled.p`
    color: white;
    font-size: 16px;
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