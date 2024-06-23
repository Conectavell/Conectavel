import { Box, Button } from '@mui/material'
import { useContext, useState } from 'react'
import ConectavelLogo from '../components/ConectavelLogo'
import InputsPessoais from '../components/InputsPessoais'
import CadastroContext from '../context/CadastroContext'
import axios from 'axios'
import Modal from '../components/ModalCadastro'


const PreencherClientePage = () => {
    const [openModal, setOpenModal] = useState(false)

    const {
        sobreUsuario,
        experienciaUsuario,
        nacionalidadeUsuario,
        identidadeUsuario,
        cepUsuario,
        numeroUsuario,
        complementoUsuario,
        celularUsuario,
        dataNascimentoUsuario,
        sexoUsuario,
        nomeUsuario,
        emailUsuario,
        senhaUsuario,
        sobrenomeUsuario,
        bairro,
        estado,
        logradouro,
    } = useContext(CadastroContext)


    function cadastrar() {
        axios.post('http://localhost:8080/API/salvarUsuario', {
            "nacionalidadeUsuario": `${nacionalidadeUsuario}`,
            "tipoDePerfilUsuario": 1,
            "nomeUsuario": `${nomeUsuario}`,
            "sobrenomeUsuario": `${sobrenomeUsuario}`,
            "emailUsuario": `${emailUsuario}`,
            "celularUsuario": `${celularUsuario}`,
            "senhaUsuario": `${senhaUsuario}`,
            "cpfUsuario": `${identidadeUsuario}`,
            "dataNascimentoUsuario": `${dataNascimentoUsuario}`,
            "sexoUsuario": `${sexoUsuario === "outro" ? "O" : sexoUsuario === "feminino" ? "F" : "M"}`,
            "sobreUsuario": `${sobreUsuario}`,
            "experienciaUsuario": `${experienciaUsuario}`,
            "enderecoDto": {
                "cep": `${cepUsuario}`,
                "logradouro": `${logradouro}`,
                "bairro": `${bairro}`,
                "complemento": `${complementoUsuario}`,
                "numero": `${numeroUsuario}`,
                "uf": `${estado}`
            },
        })
            .then(function (response) {
                console.log(response)
                setOpenModal(true)
            })
            .catch(function (error) {
                if (error.response) {
                    if (error.response.status === 401) {
                        console.log(error.response)
                        alert("Erro: Credenciais inválidas. Verifique seu email e senha.");
                    } else {
                        console.log(error.response)
                        alert(`Erro: ${error.response.status} - ${error.response.data}`);
                    }
                } else if (error.request) {
                    alert("Erro: Nenhuma resposta do servidor. Tente novamente mais tarde.");
                } else {
                    alert(`Erro: ${error.message}`);
                }
            })
    }



    return (
        <>
            <ConectavelLogo>
                <Box sx={{ width: '90%', margin: "auto" }}>
                    <Box sx={{ width: "100%", display: "flex", justifyContent: "center", flexDirection: "column" }}>
                        <InputsPessoais show={true} />
                        <Button
                            disabled={!(identidadeUsuario && cepUsuario && numeroUsuario && complementoUsuario && celularUsuario && dataNascimentoUsuario && sexoUsuario)}
                            style={{ width: "90%", margin: "1rem auto" }}
                            onClick={cadastrar}
                            variant="contained">Continuar</Button>
                    </Box>
                </Box>
            </ConectavelLogo>
            <Modal isOpen={openModal}/>
        </>
    )
}

export default PreencherClientePage