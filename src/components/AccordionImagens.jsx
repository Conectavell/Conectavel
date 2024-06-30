import { useContext, useState } from "react";
import styled from "styled-components";
import CadastroContext from "../context/CadastroContext";
import Modal from 'react-bootstrap/Modal';
import { Button } from "@mui/material";


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


const AccordionImagens = () => {
    const { fotoUsuario, setFotoUsuario } = useContext(CadastroContext)


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

    function trocarImagem(img) {

        setFotoUsuario(img)
        console.log(img)
    }

    return (
        <>
            <Button variant="contained" onClick={handleShow}>
                Trocar foto de perfil
            </Button>
            <Modal
                centered={true}
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Body style={{ backgroundColor: "var(--azul_principal)", borderRadius:"7px" }}>
                    <ContainerImagens>
                        {
                            imagens.map((img, index) => {
                                return <Imagem onClick={() => trocarImagem(img)} src={img} key={index} alt="Foto de perfil" />
                            })
                        }
                    </ContainerImagens>


                </Modal.Body>
            </Modal>
        </>
    )
}


export default AccordionImagens
