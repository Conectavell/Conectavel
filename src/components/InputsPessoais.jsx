import { useContext, } from 'react'
import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import styled from 'styled-components'
import CadastroContext from '../context/CadastroContext'
import ReactInputMask from 'react-input-mask'
import InputsIdentidade from './InputsIdentidade'
import InputCep from './InputCep'
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
    const {
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
                <InputCep/>

                <TextField
                    label="Logradouro"
                    type='text'
                    fullWidth
                    required={true}
                    placeholder="Placeholder"
                    value={logradouro ? logradouro : ""}
                    onChange={e => {
                        setLogradouro(e.target.value)
                        // console.log(logradouro)
                    }}
                    id="fullWidth" />
                <TextField
                    label="Bairro"
                    type='text'
                    fullWidth
                    required={true}
                    value={bairro ? bairro : ""}
                    onChange={e => {
                        setBairro(e.target.value)
                        // console.log(bairro)
                    }}
                    id="fullWidth" />

                <BoxInputPequeno sx={{ margin: "auto", }}>
                    <TextField
                        label="Estado"
                        type='text'
                        style={{ width: "48%" }}
                        required={true}
                        value={estado ? estado : ""}
                        onChange={e => {
                            setEstado(e.target.value)
                            // console.log(estado)
                        }} />
                    <TextField
                        label="Cidade"
                        type='text'
                        style={{ width: "48%" }}
                        required={true}
                        value={cidade ? cidade : ""}
                        onChange={e => {
                            setCidade(e.target.value)
                            // console.log(cidade)
                        }} />
                </BoxInputPequeno>

                <TextField
                    label="Complemento"
                    fullWidth
                    required={true}
                    value={complementoUsuario}
                    onChange={e => {
                        setComplementoUsuario(e.target.value)
                        // console.log(complementoUsuario)
                    }}
                    id="fullWidth" />

                <BoxInputPequeno sx={{ margin: "auto", }}>
                    <TextField
                        label="Número do endereço"
                        required={true}
                        type='number'
                        style={{ width: "48%" }}
                        id="outlined-basic"
                        value={numeroUsuario}
                        onChange={e => {
                            setNumeroUsuario(e.target.value)
                            // console.log(numeroUsuario)
                        }}
                        variant="outlined" />

                    <ReactInputMask
                        mask="(99) 99999-9999"
                        value={celularUsuario}
                        onChange={e => {
                            setCelularUsuario(e.target.value)
                            // console.log(celularUsuario)
                        }}
                        disabled={false}
                        maskChar=" "
                    >
                        {() => (
                            <TextField
                                label="Celular"
                                required={true}
                                InputProps={{ inputProps: { min: 0, max: 11 } }}
                                type='text'
                                style={{ width: "48%" }}
                                id="outlined-basic"
                                variant="outlined"
                            />
                        )}
                    </ReactInputMask>

                    <FormControl
                        style={{ width: "48%" }}>
                        <InputLabel
                            required={true}
                            id="demo-simple-select-label"

                        >Sexo</InputLabel>
                        <Select
                            label="Sexo"
                            required={true}
                            value={sexoUsuario}
                            onChange={e => {
                                setSexoUsuario(e.target.value)
                                // console.log(sexoUsuario)
                            }}
                        >
                            <MenuItem value="feminino">Feminino</MenuItem>
                            <MenuItem value="masculino">Masculino</MenuItem>
                            <MenuItem value="outro">Outro</MenuItem>
                        </Select>
                    </FormControl>

                    <TextField
                        InputProps={{ inputProps: { min: 0, max: "9999-12-31" } }}
                        type='date'
                        required={true}
                        style={{ width: "48%" }}
                        value={dataNascimentoUsuario}
                        onChange={e => {
                            setDataNascimentoUsuario(e.target.value)
                            // console.log(dataNascimentoUsuario)
                        }}
                        fullWidth id="fullWidth" />
                </BoxInputPequeno>
            </Box>
        </FormCadastro>
    )
}

export default InputsPessoais