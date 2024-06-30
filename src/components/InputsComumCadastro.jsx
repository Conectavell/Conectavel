import { Box, Button } from '@mui/material'
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import styled from "styled-components";
import CadastroContext from '../context/CadastroContext';
import InputSenha from './InputSenha';
import SelectPerfil from './SelectPerfil';
import { InputPrimeiroNome, InputSobrenome } from './InputsNome';
import InputEmail from './InputEmail';
import AccordionImagens from './AccordionImagens';
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
    const navigate = useNavigate();
    const { tipoPerfil,fotoUsuario } = useContext(CadastroContext)


    const realizarCadastro = () => {
        tipoPerfil === "1" ? navigate("/Conectavel/preencherCliente") : navigate("/Conectavel/preencherPrestador")
    }
    const handleSubmit = (e) => {
        console.log(tipoPerfil)
        e.preventDefault()
        realizarCadastro()
    }

    return (
        <FormCadastro action="post" onSubmit={handleSubmit}>
            <Box
                sx={{
                    width: "90%",
                    margin: "auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem"
                }}>
                <h2>Cadastre-se</h2>

                <SelectPerfil />
                <InputPrimeiroNome />
                <InputSobrenome />
                <InputEmail />
                <InputSenha />
                <AccordionImagens cadastro={true}/>
                <Button disabled={!fotoUsuario ? true : false} type='submit' variant="contained">Cadastrar</Button>
            </Box>
        </FormCadastro>
    )
}

export default InputsComumCadastro