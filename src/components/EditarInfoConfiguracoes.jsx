import { Button, FormControl, TextField } from '@mui/material'
import styled from 'styled-components'

const EditarInfoConfiguracoes = () => {
    const Container = styled.div`
        width: 70%;
        /* height: 70vh; */
        box-shadow: 0 0  10px #00000051;
        border-radius: 10px;
        padding: 1rem;
        text-align: center;

        @media (max-width:992px){
            width: 90%;
    }
        
    `

    const ContainerButtons = styled.div`
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    `

    return (
        <Container>
            <h2>Edite suas informações</h2>
            <FormControl sx={{ width: "100%", margin: "1rem 0", display: "flex", flexDirection: "column", gap: "1rem" }}>

                <TextField
                    id="outlined-basic"
                    label="Nome"
                    variant="outlined"
                    fullWidth
                />
                <TextField
                    id="outlined-basic"
                    label="Sobre mim"
                    variant="outlined"
                    fullWidth
                />
                <TextField
                    id="outlined-basic"
                    label="Habilidades"
                    variant="outlined"
                    fullWidth
                />
                <TextField
                    id="outlined-basic"
                    label="Experiências"
                    variant="outlined"
                    fullWidth
                />
                <ContainerButtons>
                    <Button variant='contained'>Editar perfil</Button>
                    <Button disabled variant='contained'>Enviar</Button>
                </ContainerButtons>

            </FormControl>
        </Container>
    )
}

export default EditarInfoConfiguracoes