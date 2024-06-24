import React, { useContext } from 'react'
import CadastroContext from '../context/CadastroContext'
import { TextField } from '@mui/material'

export const InputPrimeiroNome = () => {
    const { nomeUsuario, setNomeUsuario, } = useContext(CadastroContext)

    return (
        <>
            <TextField
                label="Primeiro nome"
                type='text'
                fullWidth required={true}
                id="fullWidth"
                value={nomeUsuario}
                onChange={e => {
                    setNomeUsuario(e.target.value)
                    // console.log(nomeUsuario)
                }}
            />
        </>
    )
}
export const InputSobrenome = () => {
    const { sobrenomeUsuario, setSobrenomeUsuario, } = useContext(CadastroContext)
    return (
        <>
            <TextField
                label="Sobrenome"
                type='text'
                fullWidth required={true}
                id="fullWidth"
                // value={sobrenomeUsuario}
                onChange={e => {
                    setSobrenomeUsuario(e.target.value)
                    console.log(sobrenomeUsuario)
                }}
            />
        </>
    )
}

