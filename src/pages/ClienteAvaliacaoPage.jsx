import React from "react";
import { Button } from "../components/Button";
import NavbarPerfis from "../components/NavbarPerfis";
import EstrelasAvaliacao from "../components/EstrelasAvaliacao";





const ClienteAvaliacao = () => {
    const usuario = "Cliente "; 

    return (
        <div>
            <h1>oi</h1>
            <EstrelasAvaliacao initialRating={3} />
        </div>
    );
}

export default ClienteAvaliacao;
