import { useState } from 'react'
import styled from 'styled-components'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material'

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
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    // const { setSenhaUsuario, senhaUsuario } = useContext(CadastroContext)
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    }

    return (
        <>

            <Container>
                <h2>Segurança</h2>

                <Box sx={{display: "flex", flexDirection:"column", gap: "1rem"}}>
                    <FormControl fullWidth variant="outlined">
                        <InputLabel
                            required={true}
                            htmlFor="outlined-adornment-password">Senha antiga</InputLabel>
                        <OutlinedInput
                            // value={senhaUsuario}
                            // onChange={e => {
                            //     setSenhaUsuario(e.target.value)
                            //     // console.log(senhaUsuario)
                            // }}
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
                            label="Senha"
                        />
                    </FormControl>


                    <FormControl fullWidth variant="outlined">
                        <InputLabel
                            required={true}
                            htmlFor="outlined-adornment-password">Nova senha</InputLabel>
                        <OutlinedInput
                            // value={senhaUsuario}
                            // onChange={e => {
                            //     setSenhaUsuario(e.target.value)
                            //     // console.log(senhaUsuario)
                            // }}
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
                            label="Senha"
                        />
                    </FormControl>


                    <FormControl fullWidth variant="outlined">
                        <InputLabel
                            required={true}
                            htmlFor="outlined-adornment-password">Confirme a senha</InputLabel>
                        <OutlinedInput
                            // value={senhaUsuario}
                            // onChange={e => {
                            //     setSenhaUsuario(e.target.value)
                            //     // console.log(senhaUsuario)
                            // }}
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
                            label="Senha"
                        />
                    </FormControl>

                    <ContainerButtons>
                    {/* <Button variant='contained'>Alterar senha</Button> */}
                    <Button disabled variant='contained'>Enviar alteração</Button>
                </ContainerButtons>
                </Box>
            </Container>
        </>
    )
}

export default AlterarSenhaConfiguracoes