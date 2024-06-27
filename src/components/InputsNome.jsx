import React, { useContext, useState } from 'react'
import CadastroContext from '../context/CadastroContext'
import { TextField } from '@mui/material'

export const InputPrimeiroNome = () => {
    const context = useContext(CadastroContext)
    const [nomeUser, setNomeUser] = useState('')

    return (
        <>
            <TextField
                label="Primeiro nome"
                type='text'
                fullWidth required={true}
                id="fullWidth"
                value={nomeUser}
                onChange={e => {
                    setNomeUser(e.target.value)
                    context.nome = nomeUser
                }}
            />
        </>
    )
}
export const InputSobrenome = () => {
    const context = useContext(CadastroContext)
    const [sobrenomeUser, setSobrenomeUser] = useState('')
    return (
        <>
            <TextField
                label="Sobrenome"
                type='text'
                fullWidth required={true}
                id="fullWidth"
                value={sobrenomeUser}
                onChange={e => {
                    setSobrenomeUser(e.target.value)
                    context.sobrenome = sobrenomeUser
                    // console.log(context.sobrenome)
                }}
            />
        </>
    )
}

