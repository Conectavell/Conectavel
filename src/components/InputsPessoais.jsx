import { Box } from '@mui/material'
import styled from 'styled-components'
import InputsIdentidade from './InputsIdentidade'
import InputCep from './InputCep'
import { InputBairro, InputLogradouro,InputCidade, InputComplemento, InputEstado,  InputNumeroEndereco } from './InputsEndereco'
import InputCelular from './InputCelular'
import InputSexo from './InputSexo'
import InputDataNascimento from './InputDataNascimento'
// inputs para o profissional, q pede dados pessoais para o cadastro

export const BoxInputPequeno = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem 4%;
`
export const FormCadastro = styled.form`
    overflow-y: scroll;
    height: 80%;
    width: 100%;
    padding: 1rem 0;

    &::-webkit-scrollbar{
        width: 0;
    }
    .submit{
        transition: .3s ease-in-out;
        background-color: var(--azul_principal);
        padding: .7rem 0;
        border-radius: .5rem;
        }
        .submit:hover{
        background-color: var(--laranja);
    }
`

const InputsPessoais = ({ show }) => {

    return (
        <FormCadastro style={{ overflow: "scroll", height: '80vh', display: `${show ? "" : "none"}` }}>
            <Box
                sx={{
                    width: "90%",
                    margin: "auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",

                }}>
                <h2>Complete suas informações</h2>

                <InputsIdentidade />
                <InputCep />
                <InputLogradouro />
                <InputBairro />

                <BoxInputPequeno sx={{ margin: "auto", }}>
                    <InputEstado />
                    <InputCidade />
                </BoxInputPequeno>
                <InputComplemento />


                <BoxInputPequeno sx={{ margin: "auto", }}>

                    <InputNumeroEndereco />
                    <InputCelular />
                    <InputSexo />
                    <InputDataNascimento />

                </BoxInputPequeno>
            </Box>
        </FormCadastro>
    )
}

export default InputsPessoais