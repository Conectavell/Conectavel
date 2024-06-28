import { useContext } from 'react'
import CadastroContext from '../context/CadastroContext'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'


const InputSexo = () => {
    const { sexoUsuario, setSexoUsuario } = useContext(CadastroContext)

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
                        // console.log(sexoUsuario)
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