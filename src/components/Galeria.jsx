import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import CadastroContext from '../context/CadastroContext'
import circuito from '../assets/circuitopairafa.png'
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import '../styles/PortifolioStyle.css'
import { IconButton, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Galeria = ({ nome }) => {

    const Container = styled.div`
        width: 50vw;
        min-height: 50vh;
        background-color: white;
        box-shadow: 0 0 5px #0000003f;
        margin-top: 1rem;
        margin-bottom: 10rem;
        border-radius: 10px;
        padding: 1rem;
        
        img{
            border-radius: 38px;
            border: 10px solid var(--azul_principal);
        }

        @media (max-width:1200px){
            width: 90%;
        }
    `

    const Row = styled.div`
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-evenly;
        margin: 1rem auto;
        flex-wrap: wrap;
        gap: .8rem 0;
    `

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });
    const [Image, setImage] = useState();
    const { tipoPerfil, nomeUsuario } = useContext(CadastroContext)

    return (
        <>
            <Container>
                <h2>Galeria de {nome}</h2>
                <Row>
                    <img src={circuito} alt="circuito" width={300} />
                    <img src={circuito} alt="circuito" width={300} />
                </Row>

                {
                    tipoPerfil !== '2' && nomeUsuario === nome && (
                        <Row style={{ justifyContent: 'space-between' }}>
                            <Tooltip title="Em reparo...">
                                <Button
                                    component="label"
                                    role={undefined}
                                    variant="contained"
                                    tabIndex={-1}
                                    startIcon={<CloudUploadIcon />}
                                >
                                    Adicionar imagem
                                    <VisuallyHiddenInput onChange={(e) => {
                                        console.log(e.target.value)
                                    }} type="file" />
                                </Button>
                            </Tooltip>
                            <Tooltip title="Em reparo...">
                                <IconButton onClick={() => setImage(null)} aria-label="delete" size="large">
                                    <DeleteIcon fontSize="inherit" />
                                </IconButton>
                            </Tooltip>
                        </Row>
                    )
                }


            </Container >


        </>
    )
}

export default Galeria