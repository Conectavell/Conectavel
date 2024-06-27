import { useContext, useState } from 'react'
import CadastroContext from '../context/CadastroContext'
import { TextField } from '@mui/material'
import EnderecoContext from '../context/EnderecoContext'



export const InputBairro = () => {
    const context = useContext(CadastroContext)
    const { bairro, setBairro } = useContext(EnderecoContext)

    return (
        <>
            <TextField
                label="Bairro"
                type='text'
                fullWidth
                required={true}
                value={bairro}
                onChange={e => {
                    setBairro(e.target.value)
                    context.bairro = bairro
                    // console.log(bairro)
                }}
                id="fullWidth" />
        </>
    )
}

export const InputLogradouro = () => {
    const context = useContext(CadastroContext)
    const { logradouro, setLogradouro } = useContext(EnderecoContext)
    return (
        <>
            <TextField
                label="Logradouro"
                type='text'
                fullWidth
                required={true}
                placeholder="Placeholder"
                value={logradouro ? logradouro : ''}
                onChange={e => {
                    setLogradouro(e.target.value)
                    context.logradouro = logradouro
                }}
                id="fullWidth" />
        </>
    )
}

export const InputEstado = () => {
    const context = useContext(CadastroContext)
    const { estado, setEstado } = useContext(EnderecoContext)
    return (
        <>
            <TextField
                label="Estado"
                type='text'
                style={{ width: "48%" }}
                required={true}
                value={estado ? estado : ""}
                onChange={e => {
                    setEstado(e.target.value)
                    context.estado = estado
                    // console.log(estado)
                }} />
        </>
    )
}

export const InputCidade = () => {
    const context = useContext(CadastroContext)
    const { cidade, setCidade } = useContext(EnderecoContext)
    return (
        <>
            <TextField
                label="Cidade"
                type='text'
                style={{ width: "48%" }}
                required={true}
                value={cidade ? cidade : ""}
                onChange={e => {
                    setCidade(e.target.value)
                    context.cidade = cidade
                    // console.log(cidade)
                }} />
        </>
    )
}

export const InputComplemento = () => {
    const context = useContext(CadastroContext)
    const { complementoUsuario, setComplementoUsuario } = useContext(EnderecoContext)
    return (
        <>
            <TextField
                label="Complemento"
                fullWidth
                required={true}
                value={complementoUsuario ? complementoUsuario : ''}
                onChange={e => {
                    setComplementoUsuario(e.target.value)
                    context.complemento = complementoUsuario
                    // console.log(context.complemento)
                }}
                id="fullWidth" />
        </>
    )
}

export const InputNumeroEndereco = () => {
    const context = useContext(CadastroContext)
    const { numeroUsuario, setNumeroUsuario } = useContext(EnderecoContext)
    return (
        <>
            <TextField
                label="Número do endereço"
                required={true}
                type='number'
                style={{ width: "48%" }}
                id="outlined-basic"
                value={numeroUsuario ? numeroUsuario : ''}
                onChange={e => {
                    setNumeroUsuario(e.target.value)
                    context.numero = numeroUsuario
                    // console.log(context.numero)
                }}
                variant="outlined" />
        </>
    )
}
