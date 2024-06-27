import ReactInputMask from 'react-input-mask'
import CadastroContext from '../context/CadastroContext'
import { TextField } from '@mui/material'
import { useContext, useState } from 'react'


const InputCelular = () => {
    const [celularUsuario, setCelularUsuario] = useState('') 
    const context = useContext(CadastroContext)
    return (
        <>
            <ReactInputMask
                mask="(99) 99999-9999"
                value={celularUsuario}
                onChange={e => {
                    setCelularUsuario(e.target.value)
                    context.celular = celularUsuario
                    // console.log(context.celular)
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
        </>
    )
}

export default InputCelular
