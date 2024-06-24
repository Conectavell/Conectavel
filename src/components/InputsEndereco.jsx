import { useContext } from 'react'
import CadastroContext from '../context/CadastroContext'
import { TextField } from '@mui/material'

export const InputLogradouro = () => {
    const {
        logradouro, setLogradouro,
    } = useContext(CadastroContext)
    return (
        <>
            <TextField
                label="Logradouro"
                type='text'
                fullWidth
                required={true}
                placeholder="Placeholder"
                value={logradouro ? logradouro : ""}
                onChange={e => {
                    setLogradouro(e.target.value)
                    // console.log(logradouro)
                }}
                id="fullWidth" />
        </>
    )
}

export const InputBairro = () => {
    const {
        bairro, setBairro,
    } = useContext(CadastroContext)
    return (
        <>
            <TextField
                label="Bairro"
                type='text'
                fullWidth
                required={true}
                value={bairro ? bairro : ""}
                onChange={e => {
                    setBairro(e.target.value)
                    // console.log(bairro)
                }}
                id="fullWidth" />
        </>
    )
}

export const InputEstado = () => {
    const {
        estado, setEstado,
    } = useContext(CadastroContext)
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
                    // console.log(estado)
                }} />
        </>
    )
}

export const InputCidade = () => {
    const {
        cidade, setCidade
    } = useContext(CadastroContext)
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
                    // console.log(cidade)
                }} />
        </>
    )
}

export const InputComplemento = () => {
    const {
        complementoUsuario, setComplementoUsuario,
    } = useContext(CadastroContext)
    return (
        <>
            <TextField
                label="Complemento"
                fullWidth
                required={true}
                value={complementoUsuario}
                onChange={e => {
                    setComplementoUsuario(e.target.value)
                    // console.log(complementoUsuario)
                }}
                id="fullWidth" />
        </>
    )
}

export const InputNumeroEndereco = () => {
    const {
        numeroUsuario, setNumeroUsuario,
    } = useContext(CadastroContext)
    return (
        <>
            <TextField
                label="Número do endereço"
                required={true}
                type='number'
                style={{ width: "48%" }}
                id="outlined-basic"
                value={numeroUsuario}
                onChange={e => {
                    setNumeroUsuario(e.target.value)
                    // console.log(numeroUsuario)
                }}
                variant="outlined" />
        </>
    )
}
