import ClienteAvaliacaoProps from '../components/ClienteAvaliacaoProps.jsx'
// import './clienteAvaliacao.css'
import '../styles/clienteAvaliacao.css'
// import arrowLeft from '../../assets/sininho.png'
import John from '../assets/julia.png'
import NavbarPerfis from '../components/NavbarPerfis.jsx'
import ChatLateral from '../components/ChatLateral.jsx'

export default function ClienteAvaliacaoPage() {

    return (

        <>
            <NavbarPerfis />
            <div className='body'>
                <ChatLateral valueWidth={"25%"} />
                <div className='novaAvaliacao'>

                    <div className='comentario'>
                        <input className='texto' type="text" />
                        <button className='enviar'>Enviar</button>
                    </div>

                </div>
            </div>

        </>

    )
}