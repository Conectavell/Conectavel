import { useContext, useState } from 'react'
import CadastroContext from '../context/CadastroContext'
import { TextField } from '@mui/material'

const InputEmail = () => {
    const [emailUsuario, setEmailUsuario] = useState('')
    const context = useContext(CadastroContext)
    

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
                    context.email = emailUsuario
                    // console.log(context.email)
                }}
            />
        </>
    )
}

export default InputEmail