import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components'
import Formulario from '../components/Formulario'
import Grid from '../components/Grid'

const Body = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: #f2f2f2;
`;

const Container = styled.div`
    width: 100%;
    max-width: 800px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;
const Title =styled.h2`
  font-family: "poppins" sans-serif;
`;


const PaginaTbUsuarios = () => {
  
  

  return (
    <Body>
    <Container>
    <Title>USUARIOS</Title>
        <Formulario/>
        <Grid/>
    </Container>
      <ToastContainer autoClose={3000} position="bottom-left" />
    </Body>
  )
}

export default PaginaTbUsuarios
