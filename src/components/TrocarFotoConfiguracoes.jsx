import { Button } from '@mui/material'
import styled from 'styled-components'
import img from '../assets/lucas.png'

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
        @media (max-width:992px){
            width: 90%;
    }
    `

    const Imagem = styled.div`
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background-color: red;
        overflow: hidden;
        
        display: flex;
        justify-content: center;
        align-items: center;
        @media (max-width:992px){
            width: 200px;
            height: 200px;
            /* height: 55%; */
    }

    img{
        width: 100%;
        height: 100%;
    }
    `

    return (
        <>
            <Box>
                <Imagem>
                    <img src={img} alt="imagem usuario" />
                    {/* imagem */}
                </Imagem>

                <Button sx={{ width: "80%" }} variant="contained">Trocar foto</Button>
            </Box>
        </>
    )
}

export default TrocarFotoConfiguracoes