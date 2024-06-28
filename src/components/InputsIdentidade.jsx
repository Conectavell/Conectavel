import { useContext, useState, } from 'react'
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import CadastroContext from '../context/CadastroContext'
import ReactInputMask from 'react-input-mask'

const InputsIdentidade = () => {
    const { identidadeUsuario, setIdentidadeUsuario } = useContext(CadastroContext)
    const [tipoIdentidade, setTipoIdentidade] = useState('')

    return (
        <>
            <FormControl>
                <InputLabel
                    required={true}
                    id="demo-simple-select-label"
                >Identidade</InputLabel>
                <Select
                    label="Identidade"
                    required={true}
                    value={tipoIdentidade}
                    onChange={e => {
                        setTipoIdentidade(e.target.value)
                        // console.log(tipoIdentidade)
                    }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                >
                    <MenuItem value="cpf">CPF</MenuItem>
                    <MenuItem value="cnpj">CNPJ</MenuItem>
                </Select>
            </FormControl>

            {
                tipoIdentidade === "" ? "" : tipoIdentidade === "cpf" ?
                    (
                        <ReactInputMask
                            mask="999.999.999-99"
                            value={identidadeUsuario}
                            onChange={e => {
                                setIdentidadeUsuario(e.target.value)
                                // console.log(identidadeUsuario)
                            }}
                            disabled={false}
                            maskChar=" "
                        >
                            {() => (
                                <TextField
                                    label="CPF"
                                    InputProps={{ inputProps: { max: 14 } }}
                                    type='text'
                                    fullWidth required={true}
                                    id="fullWidth"


                                />
                            )}
                        </ReactInputMask>

                    )
                    : (
                        <ReactInputMask
                            mask="99.999.999/9999-99"
                            value={identidadeUsuario}
                            onChange={e => {
                                setIdentidadeUsuario(e.target.value)
                                console.log(identidadeUsuario)
                            }}
                            disabled={false}
                            maskChar=" "
                        >
                            {() => (
                                <TextField
                                    label="CNPJ"
                                    InputProps={{ inputProps: { max: 18 } }}
                                    type='text'
                                    fullWidth required={true}
                                    id="fullWidth"
                                />
                            )}
                        </ReactInputMask>
                    )
            }
        </>
    )
}

export default InputsIdentidade