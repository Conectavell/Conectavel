import { useContext, useState } from 'react'
import styled from 'styled-components'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material'
import CadastroContext from '../context/CadastroContext'
import axios from 'axios'

const Container = styled.div`
    width: 70vw;
    min-height: 35vh;
    background-color: white;
    box-shadow: 0 0  10px #00000051;
    border-radius: 10px;
    padding: 1rem;
    text-align: center;
    @media (max-width:992px){
        width: 90vw;
    }
`
const ContainerButtons = styled.div`
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    `

const AlterarSenhaConfiguracoes = () => {
    const { senhaUsuario, setSenhaUsuario, idUsuario } = useContext(CadastroContext)
    const [senhaAntiga, setSenhaAntiga] = useState('')
    const [novaSenha, setNovaSenha] = useState('')
    const [confirmarNovaSenha, setConfirmarNovaSenha] = useState('')
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    }

    function atualizarSenha() {

        try {
            axios.put(`http://localhost:8080/API/${idUsuario}/atualizarSenha`, null, {
                params: {
                    "novaSenha": `${novaSenha}`
                }
            })
                .then(res => console.log(res))
                .then(setSenhaUsuario(novaSenha))
                .then(() => {
                    setSenhaAntiga('')
                    setNovaSenha('')
                    setConfirmarNovaSenha('')
                })
                .then(() => window.location.reload())
                .then(alert('Senha alterada com sucesso!'))
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
        <>

            <Container>
                <h2>Segurança</h2>

                <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <FormControl fullWidth variant="outlined">
                        <InputLabel
                            required={true}
                            htmlFor="outlined-adornment-password">Senha antiga</InputLabel>
                        <OutlinedInput
                            value={senhaAntiga}
                            onChange={e => {
                                setSenhaAntiga(e.target.value)
                                // console.log(senhaUsuario)
                            }}
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end">
                                        {showPassword ? <VisibilityOff /> : <Visibility />}

                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Senha antiga"
                        />
                    </FormControl>


                    <FormControl fullWidth variant="outlined">
                        <InputLabel
                            required={true}
                            htmlFor="outlined-adornment-password">Nova senha</InputLabel>
                        <OutlinedInput
                            value={novaSenha}
                            onChange={e => {
                                setNovaSenha(e.target.value)
                                // console.log(senhaUsuario)
                            }}
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end">
                                        {showPassword ? <VisibilityOff /> : <Visibility />}

                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Nova senha"
                        />
                    </FormControl>

                    <FormControl fullWidth variant="outlined">
                        <InputLabel
                            required={true}
                            htmlFor="outlined-adornment-password">Confirme a senha</InputLabel>
                        <OutlinedInput
                            value={confirmarNovaSenha}
                            onChange={e => {
                                setConfirmarNovaSenha(e.target.value)
                                // console.log(senhaUsuario)
                            }}
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end">
                                        {showPassword ? <VisibilityOff /> : <Visibility />}

                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Confirme a senha"
                        />
                    </FormControl>

                    <ContainerButtons>
                        {/* <Button variant='contained'>Alterar senha</Button> */}
                        <Button disabled={
                            senhaUsuario === senhaAntiga && novaSenha === confirmarNovaSenha && (novaSenha && confirmarNovaSenha) !== ''
                                ? false : true
                        } variant='contained' onClick={() => atualizarSenha()}>Enviar alteração</Button>
                    </ContainerButtons>
                </Box>
            </Container>
        </>
    )
}

export default AlterarSenhaConfiguracoes