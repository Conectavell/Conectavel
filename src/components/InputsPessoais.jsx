import { useContext, useEffect, } from 'react'
import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import CadastroContext from '../context/CadastroContext'
import axios from "axios";
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
    const { register, formState: { errors } } = useForm();
    const {
        identidadeUsuario, setIdentidadeUsuario,
        cepUsuario, setCepUsuario,
        numeroUsuario, setNumeroUsuario,
        complementoUsuario, setComplementoUsuario,
        celularUsuario, setCelularUsuario,
        dataNascimentoUsuario, setDataNascimentoUsuario,
        sexoUsuario, setSexoUsuario,
        logradouro, setLogradouro,
        bairro, setBairro,
        estado, setEstado,
        cidade, setCidade
    } = useContext(CadastroContext)

    async function getCEP() {
        const baseURL = `https://viacep.com.br/ws/${cepUsuario}/json/`
        const res = await axios.get(baseURL)
        const data = await res.data
        console.log(data.logradouro)
        setLogradouro(data.logradouro)
        setBairro(data.bairro)
        setEstado(data.uf)
        setCidade(data.localidade)
        setCepUsuario(data.cep)
    }

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

                <TextField
                    label="CPF/CNPJ"
                    {...register("cpf", { required: "First Name is required." })}
                    type='number'
                    fullWidth required={true}
                    id="fullWidth"
                    error={Boolean(errors.firstName)}

                    value={identidadeUsuario}
                    onChange={e => {
                        setIdentidadeUsuario(e.target.value)
                        console.log(identidadeUsuario)
                    }}
                />
                <TextField
                    label="CEP"
                    {...register("cep", { required: "First Name is required." })}
                    error={Boolean(errors.firstName)}
                    type='text'
                    fullWidth
                    required={true}
                    onBlur={() => getCEP(cepUsuario)}
                    value={cepUsuario}
                    onChange={e => {
                        setCepUsuario(e.target.value)
                        console.log(cepUsuario)
                    }}
                    id="fullWidth" />

                <TextField
                    label="Logradouro"
                    {...register("logradouro", { required: "First Name is required." })}
                    error={Boolean(errors.firstName)}
                    type='text'
                    fullWidth
                    required={true}
                    placeholder="Placeholder"
                    value={logradouro ? logradouro : ""}
                    onChange={e => {
                        setLogradouro(e.target.value)
                        console.log(logradouro)
                    }}
                    id="fullWidth" />
                <TextField
                    label="Bairro"
                    {...register("bairro", { required: "First Name is required." })}
                    error={Boolean(errors.firstName)}
                    type='text'
                    fullWidth
                    required={true}
                    value={bairro ? bairro : ""}
                    onChange={e => {
                        setBairro(e.target.value)
                        console.log(bairro)
                    }}
                    id="fullWidth" />

                <BoxInputPequeno sx={{ margin: "auto", }}>
                    <TextField
                        label="Estado"
                        {...register("estado", { required: "First Name is required." })}
                        error={Boolean(errors.firstName)}
                        type='text'
                        style={{ width: "48%" }}
                        required={true}
                        value={estado ? estado : ""}
                        onChange={e => {
                            setEstado(e.target.value)
                            console.log(estado)
                        }}/>
                    <TextField
                        label="Cidade"
                        {...register("cidade", { required: "First Name is required." })}
                        error={Boolean(errors.firstName)}
                        type='text'
                        style={{ width: "48%" }}
                        required={true}
                        value={cidade ? cidade : ""}
                        onChange={e => {
                            setCidade(e.target.value)
                            console.log(cidade)
                        }}/>
                </BoxInputPequeno>

                <TextField
                    label="Complemento"
                    {...register("complemento", { required: "First Name is required." })}
                    error={Boolean(errors.firstName)}
                    fullWidth
                    required={true}
                    value={complementoUsuario}
                    onChange={e => {
                        setComplementoUsuario(e.target.value)
                        console.log(complementoUsuario)
                    }}
                    id="fullWidth" />

                <BoxInputPequeno sx={{ margin: "auto", }}>
                    <TextField
                        label="Número do endereço"
                        required={true} {...register("numeroEndereco", { required: "First Name is required." })}
                        error={Boolean(errors.firstName)}
                        type='number'
                        style={{ width: "48%" }}
                        id="outlined-basic"
                        value={numeroUsuario}
                        onChange={e => {
                            setNumeroUsuario(e.target.value)
                            console.log(numeroUsuario)
                        }}
                        variant="outlined" />
                    <TextField
                        label="Celular"
                        required={true} {...register("celular", { required: "First Name is required." })}
                        error={Boolean(errors.firstName)}
                        type='number'
                        style={{ width: "48%" }}
                        id="outlined-basic"
                        value={celularUsuario}
                        onChange={e => {
                            setCelularUsuario(e.target.value)
                            console.log(celularUsuario)
                        }}
                        variant="outlined" />

                    <FormControl
                        style={{ width: "48%" }}>
                        <InputLabel
                            required={true}
                            id="demo-simple-select-label"

                        >Sexo</InputLabel>
                        <Select
                            label="Sexo"
                            {...register("sexo", { required: "First Name is required." })}
                            error={Boolean(errors.firstName)}
                            required={true}
                            value={sexoUsuario}
                            onChange={e => {
                                setSexoUsuario(e.target.value)
                                console.log(sexoUsuario)
                            }}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                        >
                            <MenuItem value="feminino">Feminino</MenuItem>
                            <MenuItem value="masculino">Masculino</MenuItem>
                            <MenuItem value="outro">Outro</MenuItem>
                        </Select>
                    </FormControl>

                    <TextField
                        type='date'
                        {...register("dataNascimento", { required: "First Name is required." })}
                        error={Boolean(errors.firstName)}
                        required={true}
                        style={{ width: "48%" }}
                        value={dataNascimentoUsuario}
                        onChange={e => {
                            setDataNascimentoUsuario(e.target.value)
                            console.log(dataNascimentoUsuario)
                        }}
                        fullWidth id="fullWidth" />
                </BoxInputPequeno>
            </Box>
        </FormCadastro>
    )
}

export default InputsPessoais