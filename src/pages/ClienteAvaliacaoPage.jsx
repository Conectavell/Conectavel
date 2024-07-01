import React from "react";
import { Button } from "../components/Button";
import NavbarPerfis from "../components/NavbarPerfis";
import EstrelasAvaliacao from "../components/EstrelasAvaliacao";




//=======
import ClienteAvaliacaoProps from '../components/ClienteAvaliacaoProps.jsx'
// import './clienteAvaliacao.css'
import '../styles/clienteAvaliacao.css'
// import arrowLeft from '../../assets/sininho.png'
import John from '../assets/julia.png'
import NavbarPerfis from '../components/NavbarPerfis.jsx'
import ChatLateral from '../components/ChatLateral.jsx'

export default function ClienteAvaliacaoPage() {

    return (
        <div>
            <h1>oi</h1>
            <EstrelasAvaliacao initialRating={3} />
        </div>
    );
}

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