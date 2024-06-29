import { RiLogoutBoxRFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
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
        setIdUsuario,
        setTipoPerfil,
    } = useContext(CadastroContext)
    const [isOpen, setIsOpen] = useState(false)
    function deslogarUsuario() {
        sessionStorage.clear();
        setNomeUsuario('')
        setEmailUsuario('')
        setSobrenomeUsuario('')
        setEmailUsuario('')
        setSenhaUsuario('')
        setExperienciaUsuario('')
        setHabilidadesUsuario('')
        setSobreUsuario('')
        setIdUsuario('')
        setTipoPerfil('')
        
        setIsOpen(true)
    }
    
    return (
        <>
            <Link>
                <RiLogoutBoxRFill onClick={() => deslogarUsuario()} color="white" size={size} />
                    <ModalPersonalizado isOpen={isOpen} text="Desconectado com sucesso!" button textButton={"Sair"} rota="/" />
            </Link>
        </>
    )
}

export default Deslogar