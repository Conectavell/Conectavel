import styled from 'styled-components'
import { FaSquareWhatsapp } from "react-icons/fa6";
import wpp from '../assets/wpp.png'
import { useState } from 'react';
import { Button, IconButton, Popover, Tooltip, Typography } from '@mui/material';

const Sub_heading = styled.p`
    font-size: 24px;
    font-weight: 400;
    color: var(--azul_principal);
    text-align: center;
    
    @media (max-width: 992px){
        font-size: 20px;
        text-align: center;
    }
    `
const Heading_text = styled.h2`  
    text-align: center;
    width: 100%;
    font-size: 48px;
    font-weight: 400;
    
    @media (max-width: 992px){
        line-height: 100%;
        font-size: 38px;
        width: 100%;
        text-align: center;
    }
    `
const Box = styled.header`
width: 80%;
margin: 3rem auto;
position: relative;
margin-bottom: 2rem;
display: flex;
flex-direction: column;
`
const ContainerContato = styled.div`
    width: 60%;
    min-height: 40vh;
    padding: 1rem 0;
    margin: 1rem auto;
    border-radius: 14px;
    background-color: var(--azul_principal);
    
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    img{
        margin: .5rem 0;
    }
    @media (max-width: 992px){
        text-align: center;
        width: 100%;

        img{
            width: 25%;
        }
    }
`

const TitleContainerContato = styled.h3`
    color: white;
    font-size: 1.8em;
    `
const TextContainerContato = styled.p`
    color: white;
`


const FaleConosco = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined

    return (
        <Box>
            <Sub_heading>
                CONTATO
            </Sub_heading>
            <Heading_text>Fale conosco</Heading_text>

            <ContainerContato>
                <TitleContainerContato>
                    Vamos conversar
                </TitleContainerContato>
                <TextContainerContato>Estamos aqui por você! Como podemos ajudar?</TextContainerContato>


                <Button aria-describedby={id} onClick={handleClick}>
                    <img src={wpp} width="90rem" alt="" />
                </Button>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                >
                    <Typography sx={{ p: 2 }}>Em breve</Typography>
                </Popover>

                <TextContainerContato>Entre em contato conosco pelo WhatsApp</TextContainerContato>
            </ContainerContato>
        </Box>
    )
}

export default FaleConosco