import { RiLogoutBoxRFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import CadastroContext from '../context/CadastroContext'
import { useContext } from 'react'

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

    function deslogarUsuario() {
        sessionStorage.removeItem("idUsuario")
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
    }

    return (
        <>
            <Link to="/Conectavel">
                <RiLogoutBoxRFill onClick={() => deslogarUsuario()} color="white" size={size} />
            </Link>
        </>
    )
}

export default Deslogar