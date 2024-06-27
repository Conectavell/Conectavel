import { useContext, useState } from 'react'
import CadastroContext from '../context/CadastroContext'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'


const InputSexo = () => {
    const [sexoUsuario, setSexoUsuario ] = useState('')
    const context = useContext(CadastroContext)

    return (
        <>
            <FormControl
                style={{ width: "48%" }}>
                <InputLabel required={true} id="demo-simple-select-label">
                    Sexo
                </InputLabel >

                <Select
                    label="Sexo"
                    required={true}
                    value={sexoUsuario}
                    onChange={e => {
                        setSexoUsuario(e.target.value)
                        context.sexo = sexoUsuario
                        // console.log(context.sexo)
                    }}>

                    <MenuItem value="feminino">Feminino</MenuItem>
                    <MenuItem value="masculino">Masculino</MenuItem>
                    <MenuItem value="outro">Outro</MenuItem>
                </Select>
            </FormControl >

        </>
    )
}

export default InputSexo