import styled from "styled-components"
import { useParams } from "react-router-dom";
import Galeria from "../components/Galeria"
import CardProfissional from "../components/CardProfissional"
import NavbarPerfis from "../components/NavbarPerfis"
import { useEffect, useState } from "react";
import axios from "axios";

const Box = styled.section`
padding-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  margin: auto;
  flex-direction: column;
  overflow: scroll;
`



const PerfilProfissionalPage = () => {
    const [profissional, setProfissional] = useState({
        nome: '',
        sobrenome: '',
        cidade: '',
        estado: '',
        habilidades: '',
        experiencia: '',
        foto: ''
    })

    async function getProfissional() {
        const request = await axios.get(`http://localhost:8080/API/getUsuario/${id}`)
        const response = await request.data

        setProfissional({
            nome: response.nomeUsuario,
            sobrenome: response.sobrenomeUsuario,
            bairro: response.endereco.bairro,
            estado: response.endereco.uf,
            habilidades: response.habilidades,
            experiencia: response.experienciaUsuario,
            foto: response.fotoPerfilPath
        })
        // console.log(profissional)
    }

    const { id } = useParams()

    useEffect(() => {
        getProfissional()
    }, [])



    return (
        <>
            <NavbarPerfis />
            <Box>
                {profissional.nome !== '' && (
                    <>
                        <CardProfissional
                            nome={profissional.nome}
                            sobrenome={profissional.sobrenome}
                            bairro={profissional.bairro}
                            estado={profissional.estado}
                            experiencia={profissional.experiencia}
                            habilidades={profissional.habilidades}
                            foto={profissional.foto}
                        />
                        <Galeria nome={profissional.nome} />
                    </>
                )}
            </Box>
        </>
    )
}

export default PerfilProfissionalPage