import { useContext, useState } from 'react'
import CadastroContext from '../context/CadastroContext'
import { TextField } from '@mui/material'

const InputDataNascimento = () => {
    const [dataNascimentoUsuario, setDataNascimentoUsuario] = useState('')
    const context = useContext(CadastroContext)
    return (
        <>
            <TextField
                InputProps={{ inputProps: { min: 0, max: "9999-12-31" } }}
                type='date'
                required={true}
                style={{ width: "48%" }}
                value={dataNascimentoUsuario}
                onChange={e => {
                    setDataNascimentoUsuario(e.target.value)
                    context.dataNascimento = dataNascimentoUsuario
                    // console.log(context.dataNascimento)
                }}
                fullWidth id="fullWidth" />
        </>
    )
}

export default InputDataNascimento