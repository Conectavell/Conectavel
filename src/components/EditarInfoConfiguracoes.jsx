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
        idUsuario, tipoPerfil,
        setSenhaUsuario, setTipoPerfil
    } = useContext(CadastroContext)
    const [novoEmail, setNovoEmail] = useState("")
    const [novoNome, setNovoNome] = useState("")
    const [novoSobrenome, setNovoSobrenome] = useState("")
    const [novaExperiencia, setNovaExperiencia] = useState("")
    const [novaHabilidade, setNovaHabilidade] = useState("")
    const [novoSobre, setNovoSobre] = useState("")
    const [focused, setFocused] = useState(false)

    function atualizarInformacoes() {
        novoEmail.length ? atualizarEmail() : ''
        novoNome.length ? atualizarNome() : ''
        novoSobrenome.length ? atualizarSobrenome() : ''
        novaExperiencia.length ? atualizarExperiencia() : ''
        novaHabilidade.length ? atualizarHabilidades() : ''
        novoSobre.length ? atualizarSobre() : ''

        fetch(`http://localhost:8080/API/getUsuario/${idUsuario}`).then(res => res.json()).then(data => {
            setNomeUsuario(data.nomeUsuario)
            setEmailUsuario(data.emailUsuario)
            setSobrenomeUsuario(data.sobrenomeUsuario)
            setEmailUsuario(data.emailUsuario)
            setSenhaUsuario(data.senhaUsuario)
            setExperienciaUsuario(data.experienciaUsuario)
            setHabilidadesUsuario(data.habilidadeUsuario)
            setSobreUsuario(data.sobreUsuario)
            console.log(sobreUsuario)
            setTipoPerfil(data.tipoPerfil)
          })

        setEditarPerfil(!editarPerfil)
    }

    function atualizarEmail() {
        setEditarPerfil(false)
        console.log("foi")
        try {
            axios.put(`http://localhost:8080/API/${idUsuario}/atualizarEmail`, null, {
                params: {
                    "novoEmail": `${novoEmail}`
                }
            })
                // .then(res => console.log(res))
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

    function atualizarNome() {

        try {
            axios.put(`http://localhost:8080/API/${idUsuario}/atualizarNome`, null, {
                params: {
                    "novoNome": `${novoNome}`
                }
            })
                // .then(res => console.log(res))
                .then(setNomeUsuario(novoNome))
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
    //////////////////////////////////////////
    function atualizarSobrenome() {

        try {
            axios.put(`http://localhost:8080/API/${idUsuario}/atualizarSobrenome`, null, {
                params: {
                    "novoSobrenome": `${novoSobrenome}`
                }
            })
                // .then(res => console.log(res))
                .then(setSobrenomeUsuario(novoSobrenome))
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
    ////////////////////////////////////////////
    function atualizarSobre() {

        try {
            axios.put(`http://localhost:8080/API/${idUsuario}/atualizarSobre`, null, {
                params: {
                    "novoSobre": `${novoSobre}`
                }
            })
                // .then(res => console.log(res))
                .then(setSobreUsuario(novoSobre))
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
    ////////////////////////////////////////////////////
    function atualizarExperiencia() {

        try {
            axios.put(`http://localhost:8080/API/${idUsuario}/atualizarExperiencia`, null, {
                params: {
                    "novaExperiencia": `${novaExperiencia}`
                }
            })
                // .then(res => console.log(res))
                .then(setExperienciaUsuario(novaExperiencia))
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
    /////////////////////////////////////////////
    function atualizarHabilidades() {

        try {
            axios.put(`http://localhost:8080/API/${idUsuario}/atualizarHabilidade`, null, {
                params: {
                    "novaHabilidade": `${novaHabilidade}`
                }
            })
                // .then(res => console.log(res))
                .then(setHabilidadesUsuario(novaHabilidade))
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
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    label="Primeiro nome"
                    type='text'
                    fullWidth required={true}
                    id="fullWidth"
                    value={editarPerfil && focused ? novoNome : nomeUsuario}
                    placeholder={focused ? nomeUsuario : novoNome}
                    onChange={e => {
                        setNovoNome(e.target.value)
                        // console.log(nomeUsuario)
                    }}
                    disabled={editarPerfil ? false : true}

                />

                <TextField
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    label="Sobrenome"
                    type='text'
                    fullWidth required={true}
                    id="fullWidth"
                    value={editarPerfil && focused ? novoSobrenome : sobrenomeUsuario}
                    placeholder={focused ? sobrenomeUsuario : novoSobrenome}
                    onChange={e => {
                        setNovoSobrenome(e.target.value)
                        // console.log(sobrenomeUsuario)
                    }}
                    disabled={editarPerfil ? false : true}
                />


                {/* <InputSobrenome /> */}
                <TextField
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    label="E-mail"
                    type='email'
                    fullWidth
                    required={true}
                    id="fullWidth"
                    value={editarPerfil && focused ? novoEmail : emailUsuario}
                    placeholder={focused ? emailUsuario : novoEmail}
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
                                onFocus={() => setFocused(true)}
                                onBlur={() => setFocused(false)}
                                label="Conte-nos sobre você"
                                type='text'
                                fullWidth required={true}
                                id="fullWidth"
                                value={editarPerfil && focused ? novoSobre : sobreUsuario}
                                placeholder={focused ? sobreUsuario : novoSobre}
                                onChange={e => {
                                    setNovoSobre(e.target.value)
                                    // console.log(sobreUsuario)
                                }}
                                disabled={editarPerfil ? false : true}
                            />
                            <TextField
                                onFocus={() => setFocused(true)}
                                onBlur={() => setFocused(false)}
                                label="Habilidades"
                                type='text'
                                fullWidth
                                required={true}
                                value={editarPerfil && focused ? novaHabilidade : habilidadesUsuario}
                                placeholder={focused ? habilidadesUsuario : novaHabilidade}
                                onChange={e => {
                                    setNovaHabilidade(e.target.value)
                                    // console.log(habilidadesUsuario)
                                }}
                                disabled={editarPerfil ? false : true}
                                id="fullWidth" />
                            <TextField
                                onFocus={() => setFocused(true)}
                                onBlur={() => setFocused(false)}
                                disabled={editarPerfil ? false : true}
                                label="Experiência profissional"
                                type='text'
                                fullWidth
                                required={true}
                                value={editarPerfil && focused ? novaExperiencia : experienciaUsuario}
                                placeholder={focused ? experienciaUsuario : novaExperiencia}
                                onChange={e => {
                                    setNovaExperiencia(e.target.value)
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

