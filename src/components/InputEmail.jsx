import { useContext } from 'react'
import CadastroContext from '../context/CadastroContext'
import { TextField } from '@mui/material'

const InputEmail = () => {
    const { emailUsuario, setEmailUsuario, } = useContext(CadastroContext)

    return (
        <>
            <TextField
                label="E-mail"
                type='email'
                fullWidth required={true}
                id="fullWidth"
                value={emailUsuario}
                onChange={e => {
                    setEmailUsuario(e.target.value)
                    // console.log(emailUsuario)
                }}
            />
        </>
    )
}

export default InputEmail