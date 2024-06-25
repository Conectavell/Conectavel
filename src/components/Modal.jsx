import React from 'react';
import styled from 'styled-components';

const BackgroundStyle = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalStyle = styled.div`
    width: 500px;
    max-width: 100%;
    height: 200px;
    max-height: 100%;
    position: fixed;
    top: 50%;
    left: 50%;
    background-color: #fff;
    border-radius: 10px;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px 10px;
    background-color: #ccc;
    border: none;
    border-radius: 5px;
    font-weight: 800;
    cursor: pointer;
`;

export const ActionButton = styled.button`
    padding: 10px 20px;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 0 10px;

    ${({ color }) => color === 'red' && `
        background-color: #f32323;
    `}
    ${({ color }) => color === 'yellow' && `
        background-color: #f3c623;
    `}
    ${({ color }) => color === 'blue' && `
        background-color: #2c73d2;
    `}
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

const Modal = ({ isOpen, isClose, children }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <BackgroundStyle>
            <ModalStyle>
                <CloseButton onClick={isClose}>X</CloseButton>
                <ButtonContainer>
                    <ActionButton color="red">Deletar</ActionButton>
                    <ActionButton color="yellow">Suspender</ActionButton>
                    <ActionButton color="blue">Visualizar</ActionButton>
                </ButtonContainer>
            </ModalStyle>
        </BackgroundStyle>
    );
}

export default Modal;

