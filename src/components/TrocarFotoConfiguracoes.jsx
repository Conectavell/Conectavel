import { Button } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const TrocarFotoConfiguracoes = () => {
    const Box = styled.div`
        width: 20%;
        height: 60vh;
        background-color: white;
        box-shadow: 0 0  10px #00000051;
        border-radius: 10px;

        /* margin: 10rem; */
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;
        align-items: center;
    `

    const Imagem = styled.div`
        width: 70%;
        height: 50%;
        border-radius: 50%;
        background-color: red;
        overflow: hidden;

        display: flex;
        justify-content: center;
        align-items: center;
    `

    return (
        <>
            <Box>
                <Imagem>
                    {/* <img src={img} alt="imagem usuario" /> */}
                    imagem
                </Imagem>

                <Button variant="contained">Trocar foto</Button>
            </Box>
        </>
    )
}

export default TrocarFotoConfiguracoes