import { RiLogoutBoxRFill } from 'react-icons/ri'
import { Link, useNavigate } from 'react-router-dom'
import CadastroContext from '../context/CadastroContext'
import { useContext, useState } from 'react'
import ModalPersonalizado from './ModalPersonalizado'

const Deslogar = ({ size }) => {
    const {
        setNomeUsuario,
        setEmailUsuario,
        setSobrenomeUsuario,
        setSenhaUsuario,
        setExperienciaUsuario,
        setHabilidadesUsuario,
        setSobreUsuario,
        setTipoPerfil,
    } = useContext(CadastroContext)
    function deslogarUsuario() {
        setTipoPerfil('')
        setNomeUsuario('')
        setEmailUsuario('')
        setSobrenomeUsuario('')
        setEmailUsuario('')
        setSenhaUsuario('')
        setExperienciaUsuario('')
        setHabilidadesUsuario('')
        setSobreUsuario('')
        sessionStorage.clear();
        window.location.reload()
    }

    return (
        <>
            <Link>
                <RiLogoutBoxRFill onClick={() => deslogarUsuario()} color="white" size={size} />
            </Link>
        </>
    )
}

export default Deslogar