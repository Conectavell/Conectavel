import { Button, FormGroup, TextField } from '@mui/material'
import styled from 'styled-components'
import { useContext, useState } from 'react'
import CadastroContext from '../context/CadastroContext'
import axios from 'axios'


const ContainerButtons = styled.div`
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    `

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
const EditarInfoConfiguracoes = () => {
    const [editarPerfil, setEditarPerfil] = useState(false)
    const {
        sobreUsuario, setSobreUsuario,
        experienciaUsuario, setExperienciaUsuario,
        habilidadesUsuario, setHabilidadesUsuario,
        nomeUsuario, setNomeUsuario,
        emailUsuario, setEmailUsuario,
        sobrenomeUsuario, setSobrenomeUsuario,
        idUsuario, tipoPerfil
    } = useContext(CadastroContext)
    const [novoEmail, setNovoEmail] = useState("")

    function atualizarInformacoes() {
        setEditarPerfil(false)
        console.log("foi")
        try {
            axios.put(`http://localhost:8080/API/${idUsuario}/atualizarEmail`, null, {
                params: {
                    "novoEmail": `${novoEmail}`
                }
            })
                .then(res => console.log(res))
                .then(setEmailUsuario(novoEmail))

        } catch (error) {
            if (error.response) {
                if (error.response.status === 401) {
                    alert("Erro: Credenciais inválidas. Verifique seu email e senha.");
                } else {
                    alert(`Erro: ${error.response.status} - ${error.response.data}`);
                }
            } else if (error.request) {
                alert("Erro: Nenhuma resposta do servidor. Tente novamente mais tarde.");
            } else {
                alert(`Erro: ${error.message}`);
            }
        }
    }




    return (
        <Container>
            <h2>Edite suas informações</h2>
            <FormGroup sx={{ width: "100%", margin: "1rem 0", display: "flex", flexDirection: "column", gap: "1rem" }} >

                <TextField
                    label="Primeiro nome"
                    type='text'
                    fullWidth required={true}
                    id="fullWidth"
                    value={nomeUsuario}
                    onChange={e => {
                        setNomeUsuario(e.target.value)
                        // console.log(nomeUsuario)
                    }}
                    disabled={editarPerfil ? false : true}

                />

                <TextField
                    label="Sobrenome"
                    type='text'
                    fullWidth required={true}
                    id="fullWidth"
                    value={sobrenomeUsuario ? sobrenomeUsuario : "carregando..."}
                    onChange={e => {
                        setSobrenomeUsuario(e.target.value)
                        console.log(sobrenomeUsuario)
                    }}
                    disabled={editarPerfil ? false : true}
                />


                {/* <InputSobrenome /> */}
                <TextField
                    label="E-mail"
                    type='email'
                    fullWidth
                    required={true}
                    id="fullWidth"
                    value={editarPerfil ? novoEmail : emailUsuario}
                    onChange={e => {
                        setNovoEmail(e.target.value)
                        // console.log(novoEmail)
                    }}
                    disabled={editarPerfil ? false : true}
                />

                {
                    tipoPerfil === 2 ? (
                        <>

                            <TextField
                                label="Conte-nos sobre você"
                                type='text'
                                fullWidth required={true}
                                id="fullWidth"
                                value={sobreUsuario}
                                onChange={e => {
                                    setSobreUsuario(e.target.value)
                                    // console.log(sobreUsuario)
                                }}
                                disabled={editarPerfil ? false : true}
                            />
                            <TextField
                                label="Habilidades"
                                type='text'
                                fullWidth
                                required={true}
                                value={habilidadesUsuario}
                                onChange={e => {
                                    setHabilidadesUsuario(e.target.value)
                                    // console.log(habilidadesUsuario)
                                }}
                                disabled={editarPerfil ? false : true}
                                id="fullWidth" />
                            <TextField
                                disabled={editarPerfil ? false : true}
                                label="Experiência profissional"
                                type='text'
                                fullWidth
                                required={true}
                                value={experienciaUsuario}
                                onChange={e => {
                                    setExperienciaUsuario(e.target.value)
                                    // console.log(experienciaUsuario)
                                }}
                                id="fullWidth" />
                        </>
                    ) : ''
                }
                <ContainerButtons>
                    <Button onClick={() => setEditarPerfil(!editarPerfil)} variant='contained'>{editarPerfil ? "Cancelar" : "Editar perfil"}</Button>
                    <Button disabled={editarPerfil ? false : true} variant="contained" onClick={() => atualizarInformacoes()}>Enviar</Button>
                </ContainerButtons>
            </FormGroup>
        </Container>
    )
}

export default EditarInfoConfiguracoes

