import { Box, Button } from '@mui/material'
import styled from 'styled-components';
import { useContext, useState } from 'react';
import CadastroContext from '../context/CadastroContext';
import InputsPessoais from '../components/InputsPessoais';
import InputsProfissional from '../components/InputsProfissional';
import ConectavelLogo from '../components/ConectavelLogo';
import axios from 'axios';
// condicional de inputs cadastro profissional

const Bar = styled.div`
    border-radius: 3px;
    width: 43.5%;
    height: 15px;
    background-color: ${(props) => props.fill ? "var(--azul_principal)" : "transparent"} ;
    border: 2px solid var(--azul_principal);
    cursor: pointer;
    margin: 1rem 0;
`
const BoxBars = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
`

const PreencherPrestadorPage = () => {
    const [fill, setFill] = useState(true)
    const { sobreUsuario,
        experienciaUsuario,
        habilidadesUsuario,
        nacionalidadeUsuario,
        identidadeUsuario,
        cepUsuario,
        numeroUsuario,
        complementoUsuario,
        celularUsuario,
        dataNascimentoUsuario,
        sexoUsuario,
        nextTab, setNextTab,
        tipoPerfil,
        nomeUsuario,
        emailUsuario,
        senhaUsuario,
        sobrenomeUsuario,
        bairro,
        estadoUsuario
    } = useContext(CadastroContext)

    function cadastrar() {
        axios.post('http://localhost:8080/API/salvarUsuario', {
            "nomeUsuario": `${nomeUsuario}`,
            "sobrenomeUsuario": `${sobrenomeUsuario}`,
            "emailUsuario": `${emailUsuario}`,
            "senhaUsuario": `${senhaUsuario}`,
            "cpfUsuario": `${identidadeUsuario}`,
            "dataNascimentoUsuario": `${dataNascimentoUsuario}`,
            "sexoUsuario": `${sexoUsuario === "feminino" ? "F" : sexoUsuario === "masculino" ? "M" : "O"}`,
            "nacionalidadeUsuario": `${nacionalidadeUsuario}`,
            "tipoDePerfilUsuario": `${tipoPerfil}`,
            "enderecoDto": null,
            // "enderecoDto": {
            //     "cep": `${cepUsuario}`,
            //     "logradouro":`${cepUsuario}`,
            //     "bairro":`${bairro}`,
            //     "complemento":`${complementoUsuario}`,
            //     "uf":`${estadoUsuario}`,
            // },
            "sobreUsuario": `${sobreUsuario}`,
            "experienciaUsuario": `${experienciaUsuario}`
        })
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    return (
        <ConectavelLogo>
            <Box sx={{ width: '90%', margin: "auto" }}>

                {
                    nextTab === 0 ?
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
                    <BoxBars>
                        <Bar fill={fill} onClick={() => {
                            setNextTab(0)
                            setFill(true)
                        }} />
                        <Bar fill={!fill} onClick={() => {
                            setNextTab(1)
                            setFill(false)
                        }} />
                    </BoxBars>
                </>
            </Box>

        </ConectavelLogo>
    )
}

export default PreencherPrestadorPage