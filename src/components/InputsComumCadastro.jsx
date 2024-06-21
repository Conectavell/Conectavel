import { Box, Button, TextField, ToggleButton, ToggleButtonGroup } from '@mui/material'
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import styled from "styled-components";
import CadastroContext from '../context/CadastroContext';
// inputs tela de cadastro para selecionar tipo de perfil

const FormCadastro = styled.form`
    overflow-y: scroll;
    height: 80%;
    width: 100%;
    padding: 1rem 0;
    .Mui-focusVisible.Mui-selected{
        background-color: red;
    }
`
const InputsComumCadastro = () => {

    const realizarCadastro = (tipoPerfil, nomeUsuario, emailUsuario, senhaUsuario) => {
        if (tipoPerfil === "cliente") {
            navigate("/Conectavel/preenchercliente", {
                state: {
                    tipoPerfil: tipoPerfil,
                    nomeUsuario: nomeUsuario,
                    emailUsuario: emailUsuario,
                    senhaUsuario: senhaUsuario
                }
            })
        } else {
            navigate("/Conectavel/preencherprestador", {
                state: {
                    tipoPerfil,
                    nomeUsuario,
                    emailUsuario,
                    senhaUsuario
                }
            })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        realizarCadastro(tipoPerfil, nomeUsuario, emailUsuario, senhaUsuario)
    }

    const { register, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const { tipoPerfil, setTipoPerfil,
        nomeUsuario, setNomeUsuario,
        emailUsuario, setEmailUsuario,
        senhaUsuario, setSenhaUsuario } = useContext(CadastroContext)

    const handleChange = (event, perfil) => {
        setTipoPerfil(perfil)
    };

    return (
        <FormCadastro action="post" onSubmit={handleSubmit}>

            <Box
                sx={{
                    width: "90%",
                    margin: "auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem"
                }}
            >
                <h2>Cadastre-se</h2>

                <ToggleButtonGroup

                    color="primary"
                    value={tipoPerfil}
                    exclusive
                    onChange={handleChange}
                    aria-label="Platform"
                >
                    <ToggleButton style={{ margin: "1rem", border: "4px solid var(--azul_principal)", padding: ".8rem 0rem", width: "100%", borderRadius: "10px" }} value="cliente">Cliente</ToggleButton>
                    <ToggleButton style={{ margin: "1rem", border: "4px solid var(--azul_principal)", padding: ".8rem 0rem", width: "100%", borderRadius: "10px" }} value="profissional">Profissional</ToggleButton>
                </ToggleButtonGroup>

                <TextField
                    label="Nome completo"
                    {...register("nome", { required: "First Name is required." })}
                    type='text'
                    fullWidth required={true}
                    id="fullWidth"
                    error={Boolean(errors.firstName)}
                    value={nomeUsuario}
                    onChange={e => {
                        setNomeUsuario(e.target.value)
                        console.log(nomeUsuario)
                    }}
                />
                <TextField
                    label="E-mail"
                    {...register("email", { required: "First Name is required." })}
                    type='email'
                    fullWidth required={true}
                    id="fullWidth"
                    error={Boolean(errors.firstName)}
                    value={emailUsuario}
                    onChange={e => {
                        setEmailUsuario(e.target.value)
                        console.log(emailUsuario)
                    }}
                />
                <TextField
                    label="Senha"
                    {...register("senha", { required: "First Name is required." })}
                    error={Boolean(errors.firstName)}
                    type='password'
                    fullWidth
                    required={true}
                    value={senhaUsuario}
                    onChange={e => {
                        setSenhaUsuario(e.target.value)
                        console.log(senhaUsuario)
                    }}
                    id="fullWidth" />
                <Button type='submit' variant="contained">Cadastrar</Button>
            </Box>
        </FormCadastro>
    )
}

export default InputsComumCadastro