import styled, { css } from "styled-components";

const ChatMiniWrapper = styled.div`
    width: 100%;
    height: 80px;
    border-radius: 10px;
    border: 2px rgba(0, 0, 0, 0.15) solid;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    padding: 12px;
    gap: 12px;
    cursor: pointer;
`

const ChatMiniIMG = styled.img`
    height: 36.85px;
    width: 36.85px;
    border-radius: 7.68px;
    
`

const ChatMiniInfos = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

export const ChatMiniNome = styled.p`
    font-size: 12px;
    font-weight: bold;
    color: #222222;
    margin: 0

    ${props => props.descricao && css`
        font-weight: 400;
        color: rgba(73, 69, 79, 0.8);
    `}
`



const ChatMiniMensagem = styled.p

const ChatMini = (props) => {
    return (
        <ChatMiniWrapper>
            <ChatMiniIMG src={props.foto} alt="foto de perfil"/>
            <ChatMiniInfos>
                <ChatMiniNome>{props.nome}</ChatMiniNome>
                <ChatMiniNome descricao>{props.descricao}</ChatMiniNome>
            </ChatMiniInfos>
        </ChatMiniWrapper>
    )
}

export default ChatMini;