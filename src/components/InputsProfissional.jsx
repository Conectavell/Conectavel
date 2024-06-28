import { useContext } from 'react'
import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import CadastroContext from '../context/CadastroContext'
import MultipleSelectCheckmarks from './InputHabilidades'
import InputHabilidades from './InputHabilidades'
// inputs para o profissional, q pede habilidades, experiencia, etc

const FormCadastro = styled.form`
    overflow-y: scroll;
    height: 80%;
    width: 100%;
    padding: 1rem 0;

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

const InputsProfissional = ({ show }) => {
    const {
        nacionalidadeUsuario, setNacionalidadeUsuario,
        sobreUsuario, setSobreUsuario,
        experienciaUsuario, setExperienciaUsuario,
        habilidadesUsuario, setHabilidadesUsuario,
    } = useContext(CadastroContext)



    return (
        <FormCadastro style={{ overflow: "hidden", display: `${show ? "" : "none"}` }}>
            <Box
                sx={{
                    width: "90%",
                    margin: "auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem"
                }}
            >
                <h2>Complete suas informações</h2>
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
                />
                <TextField
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

                <InputHabilidades />

                <FormControl>
                    <InputLabel
                        required={true}
                        id="demo-simple-select-label"
                    >Nacionalidade</InputLabel>
                    <Select
                        label="Nacionalidade"
                        required={true}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={nacionalidadeUsuario}
                        onChange={e => {
                            setNacionalidadeUsuario(e.target.value)
                            // console.log(nacionalidadeUsuario)
                        }}>
                        <MenuItem value="BR">Brasileira</MenuItem>
                        <MenuItem value="ES">Estadunidente</MenuItem>
                    </Select>
                </FormControl>

            </Box>
        </FormCadastro>
    )
}

export default InputsProfissional