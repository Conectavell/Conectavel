import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { IoIosClose } from "react-icons/io";    
import { useState } from 'react';


const BackgroundWrapper = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgb(0,0,0,0.5);
    z-index: 1000;
`

const ModalStyle = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    height: 500px;
    padding: 10px;
    background: #fff;
    border-radius: 10px; 
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const ModalTexto = styled.p`
    font-size: 18px;
    font-weight: bold;
    color: #FB8C00;
`

const HeaderModal = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p{
        margin: 0;
    }
`

const CloseButton = styled.button`
    background: none;
    border: none;
`


const Modal_Admin = ({ isOpen, setOpenModal, children }) => {

    if (isOpen) {
        return (
            <BackgroundWrapper>
                <ModalStyle>
                    <HeaderModal>
                        <ModalTexto>Tela de Opções </ModalTexto>
                        <CloseButton onClick={setOpenModal}>
                            <IoIosClose size={24} color='#FB8C00' />
                        </CloseButton>
                    </HeaderModal>
                    {children}
                </ModalStyle>
            </BackgroundWrapper>
        )
    } else {
        return (
            null
        )
    }
}

export default Modal_Admin;