import React from "react";
import { Button } from "../components/Button";
import NavbarPerfis from "../components/NavbarPerfis";

const ClienteAvaliacao = () => {
    const usuario = "Cliente "; 

    return (
        <div>
            <NavbarPerfis usuario={usuario} />
            <div className="container-coment">
                <Button>Enviar</Button>
            </div>
        </div>
    );
}

export default ClienteAvaliacao;
