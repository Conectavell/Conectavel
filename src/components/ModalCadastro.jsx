import styled from 'styled-components'
import { Link } from 'react-router-dom';

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
    padding: 50px;
    background: #fff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;

`

const ModalTexto = styled.p`
    font-size: 18px;
    font-weight: bold;
    color: #FB8C00;
`

const ButtonModal = styled(Link)`
text-align: center;
        padding: .8rem 1rem;
    text-decoration: none;
    border: none;
    outline: none;
    border-radius: 1.5rem;
    cursor: pointer;
    background-color: var(--laranja);
    color: white !important;
    transition: all .3s linear;
    font-weight: 600;
    &:hover{
        background-color: var(--verde_principal);
    }
`


const ModalCadastro = ({ isOpen }) => {
    if (isOpen) {
        return (
            <BackgroundWrapper>
                <ModalStyle>
                    <ModalTexto>Cadastro realizado com sucesso!</ModalTexto>
                    <ButtonModal to="/Conectavel/login">Fazer login</ButtonModal>
                </ModalStyle>
            </BackgroundWrapper>
        )
    } else {
        return (
            null
        )
    }
}

export default ModalCadastro;