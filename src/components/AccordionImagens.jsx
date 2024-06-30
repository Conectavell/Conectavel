import { useContext, useState } from "react";
import styled from "styled-components";
import CadastroContext from "../context/CadastroContext";
import Modal from 'react-bootstrap/Modal';
import { Button } from "@mui/material";
import axios from "axios";


const Imagem = styled.img`
    width: 100px;
    overflow: hidden;
    border-radius: 50%;
    cursor: pointer;
    transition: .3s ease-in-out;
    box-shadow: 0 0 5px #00000035;

    &:hover{
        transform: translateY(-10px);
    }
`

const ContainerImagens = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    background-color: var(--azul_principal);
    padding: 1rem .5rem;
    justify-content: center;
    border-radius: 10px;
`


const AccordionImagens = ({ cadastro }) => {
    const { fotoUsuario, setFotoUsuario, sexoUsuario, idUsuario } = useContext(CadastroContext)


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const imagens = [
        "/Conectavel/src/assets/fotosPerfil/mulher1.png",
        "/Conectavel/src/assets/fotosPerfil/mulher2.png",
        "/Conectavel/src/assets/fotosPerfil/mulher3.png",
        "/Conectavel/src/assets/fotosPerfil/mulher4.png",
        "/Conectavel/src/assets/fotosPerfil/homem1.png",
        "/Conectavel/src/assets/fotosPerfil/homem2.png",
        "/Conectavel/src/assets/fotosPerfil/homem3.png",
        "/Conectavel/src/assets/fotosPerfil/homem4.png",
    ]
    const mulher = [
        "/Conectavel/src/assets/fotosPerfil/mulher1.png",
        "/Conectavel/src/assets/fotosPerfil/mulher2.png",
        "/Conectavel/src/assets/fotosPerfil/mulher3.png",
        "/Conectavel/src/assets/fotosPerfil/mulher4.png"
    ]
    const homem = [
        "/Conectavel/src/assets/fotosPerfil/homem1.png",
        "/Conectavel/src/assets/fotosPerfil/homem2.png",
        "/Conectavel/src/assets/fotosPerfil/homem3.png",
        "/Conectavel/src/assets/fotosPerfil/homem4.png",
    ]

    function trocarImagem(img) {

        try {
            axios.put(`http://localhost:8080/API/${idUsuario}/atualizarFoto`, null, {
                params: {
                    "novaFoto": `${img}`
                }
            })
                .then(res => console.log(res))
                .then(setFotoUsuario(img))
        } catch (error) {
            if (error.response) {
                if (error.response.status === 401) {
                    alert("Erro: Credenciais inválidas. Verifique seu email e senha.");
                } else {
                    alert(`Erro: ${error.response.status} - ${error.response.data}`);
                }
            } else if (error.request) {
                alert("Erro: Nenhuma resposta do servidor. Tente novamente mais tarde.");
            } else {
                alert(`Erro: ${error.message}`);
            }
        }
    }

    function cadastrarFoto(img) {
        setFotoUsuario(img)
        handleClose()
    }

    return (
        <>
            <Button variant="contained" onClick={handleShow}>
                {cadastro ? "Selecionar foto de perfil" : "Trocar foto de perfil"}
            </Button>
            <Modal
                centered={true}
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Body style={{ backgroundColor: "var(--azul_principal)", borderRadius: "7px" }}>
                    <ContainerImagens>
                        {
                            (sexoUsuario === 'F' ? mulher : sexoUsuario === "M" ? homem : imagens).map((img, index) => {
                                return <Imagem onClick={() => { cadastro ? cadastrarFoto(img) : trocarImagem(img) }} src={img} key={index} alt="Foto de perfil" />
                            })
                        }
                    </ContainerImagens>


                </Modal.Body>
            </Modal>
        </>
    )
}


export default AccordionImagens
