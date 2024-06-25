import { Visibility, VisibilityOff } from "@mui/icons-material"
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material"
import axios from "axios";
import { useContext, useState } from "react";
import { Accordion, Card, useAccordionButton } from "react-bootstrap";
import styled from "styled-components";
import CadastroContext from "../context/CadastroContext";
import { useNavigate } from "react-router-dom";
import ModalPersonalizado from "./ModalPersonalizado";

const DetailText = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: center;

    p:first-child{
        font-size: 1.2em;
        font-weight: 500;
    }
`
const ContainerButtons = styled.div`
    display: flex;  
    flex-direction: row;
    justify-content: space-between;
    @media (max-width:992px){
        flex-direction: column;
        
    }
`


const AccordionApagarConta = () => {
    const { idUsuario, senhaUsuario } = useContext(CadastroContext)
    const [openModal, setOpenModal] = useState(false)

    const navigate = useNavigate()

    function CustomToggle({ children, eventKey }) {
        const decoratedOnClick = useAccordionButton(eventKey)
        return (
            <Button
                className="mt-3 mt-md-0"
                color="error"
                variant="contained"
                onClick={decoratedOnClick}>
                Deletar
            </Button>
        );
    }


    const [showPassword, setShowPassword] = useState(false);
    const [confirmarSenha, setConfirmarSenha] = useState('')
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    }

    function deletarConta() {
        try {
            axios.delete(`http://localhost:8080/API/usuarios/${idUsuario}`, {
                "idUsuario": `${idUsuario}`
            })
                // .then(res => console.log(res))
                // .then(alert('Sua conta foi deletada com sucesso!'))
                .then(setOpenModal(true))
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
    return (
        <>

            <Accordion defaultActiveKey={false}>
                <Card className="p-2 border-0">
                    <ContainerButtons>
                        <DetailText>
                            <p className="m-0">Deletar conta</p>
                            <p className="m-0">Delete de forma permanente sua conta</p>
                        </DetailText>
                        <CustomToggle eventKey={true} />
                    </ContainerButtons>
                    <Accordion.Collapse eventKey={true}>
                        <Card.Body className="p-0 pt-3">

                            <FormControl fullWidth variant="outlined">
                                <InputLabel
                                    required={true}
                                    htmlFor="outlined-adornment-password">Digite sua senha para confirmar</InputLabel>
                                <OutlinedInput
                                    value={confirmarSenha}
                                    onChange={e => {
                                        setConfirmarSenha(e.target.value)
                                        console.log(confirmarSenha)
                                    }}
                                    id="outlined-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end">
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Digite sua senha para confirmar"
                                />
                            </FormControl>

                            <Button disabled={confirmarSenha !== senhaUsuario ? true : false} sx={{ margin: "1rem 0" }} onClick={() => deletarConta()} fullWidth color="error" variant="contained">Deletar minha conta permanentemente</Button>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            <ModalPersonalizado isOpen={openModal} rota="/" button textButton="Fechar" text="Conta deletada com sucesso!" />

        </>
    )
}


export default AccordionApagarConta
