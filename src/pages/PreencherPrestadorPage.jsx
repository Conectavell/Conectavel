import { Box, Button } from '@mui/material'
import { useContext } from 'react';
import CadastroContext from '../context/CadastroContext';
import InputsPessoais from '../components/InputsPessoais';
import InputsProfissional from '../components/InputsProfissional';
import ConectavelLogo from '../components/ConectavelLogo';
import axios from 'axios';
import Tabs, { BoxBars } from '../components/Tabs';
import Modal from '../components/ModalCadastro'
import { useState } from 'react';
// condicional de inputs cadastro profissional

const PreencherPrestadorPage = () => {
    const [openModal, setOpenModal] = useState(false)
// condicional de inputs cadastro profissional

    const {
        sobreUsuario,
        experienciaUsuario,
        // habilidadesUsuario,
        nacionalidadeUsuario,
        identidadeUsuario,
        cepUsuario,
        numeroUsuario,
        complementoUsuario,
        celularUsuario,
        dataNascimentoUsuario,
        sexoUsuario,
        nextTab, setNextTab,
        nomeUsuario,
        emailUsuario,
        senhaUsuario,
        sobrenomeUsuario,
        bairro,
        estado,
        logradouro,
        setFill
    } = useContext(CadastroContext)

    function cadastrar() {
        axios.post('http://localhost:8080/API/salvarUsuario', {
            "nacionalidadeUsuario": `${nacionalidadeUsuario}`,
            "tipoDePerfilUsuario": 2,
            "nomeUsuario": `${nomeUsuario}`,
            "sobrenomeUsuario": `${sobrenomeUsuario}`,
            "emailUsuario": `${emailUsuario}`,
            "celularUsuario":`${celularUsuario}`,
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
                // alert(`Você está logado ${nomeUsuario} ${sobrenomeUsuario}!`)
            })
            .catch(function (error) {
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
            })
    }

    return (
        <ConectavelLogo>
            <Box sx={{ width: '90%', margin: "auto" }}>
                {nextTab === 0 ?
                    <>
                        <InputsPessoais show={true} />
                        <InputsProfissional show={false} />
                        <BoxBars>
                            <Button
                                disabled={!(identidadeUsuario && cepUsuario && numeroUsuario && complementoUsuario && celularUsuario && dataNascimentoUsuario && sexoUsuario)}
                                style={{ width: "90%", margin: "1rem auto" }}
                                onClick={() => {
                                    setNextTab(1)
                                    setFill(false)
                                }}

                                variant="contained">Continuar</Button>
                        </BoxBars>
                    </>
                    :
                    <>
                        <InputsPessoais show={false} />
                        <InputsProfissional show={true} />

                        <BoxBars>
                            {/* botão que envia todos os dados */}
                            <Button
                                disabled={!(identidadeUsuario && cepUsuario && numeroUsuario && complementoUsuario && celularUsuario && dataNascimentoUsuario && sexoUsuario)}
                                style={{ width: "90%", margin: "1rem auto" }}
                                onClick={cadastrar}
                                variant="contained">Enviar informações</Button>
                        </BoxBars>
                    </>
                }<>
                    <Tabs />
                </>
            </Box>
            <Modal isOpen={openModal}/>
        </ConectavelLogo>
    )
}

export default PreencherPrestadorPage