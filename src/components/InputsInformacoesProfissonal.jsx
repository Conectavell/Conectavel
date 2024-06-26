import { TextField } from '@mui/material'
import React, { useContext } from 'react'
import CadastroContext from '../context/CadastroContext'

export const InputHabilidades = () => {
    const {
        nacionalidadeUsuario, setNacionalidadeUsuario,
        sobreUsuario, setSobreUsuario,
        experienciaUsuario, setExperienciaUsuario,
        habilidadesUsuario, setHabilidadesUsuario,
    } = useContext(CadastroContext)

    return (
        <>
            <TextField
                label="Habilidades"
                type='text'
                fullWidth
                required={true}
                value={habilidadesUsuario}
                onChange={e => {
                    setHabilidadesUsuario(e.target.value)
                    // console.log(habilidadesUsuario)
                }}
                id="fullWidth" />
        </>
    )
}
