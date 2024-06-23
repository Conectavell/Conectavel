import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import styled from 'styled-components'
import Formulario from '../components/Formulario'
import Grid from '../components/Grid'

const Container = styled.div`
    width: 100%;
    max-width: 800px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;
const Title =styled.h2``;


const PaginaTbUsuarios = () => {
  return (
    <div>
    <Container>
    <Title>USUARIOS</Title>
        <Formulario/>
        <Grid/>
    </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
    </div>
  )
}

export default PaginaTbUsuarios
