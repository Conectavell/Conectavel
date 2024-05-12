import styled from "styled-components";

const VantagensWrapper = styled.div`
    height: fit-content;
    width: fit-content;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 40px;
    background: #F2F4F8;
    border-radius: 20px;
`

const T_Vantagens = styled.p`
    font-size: 24px;
    font-weight: 400;
    line-height: 140%;
    color: #151515;
    width: 284px;
`

const P_Vantagens = styled.p`
    font-family: 'Arial';
    font-weight: 400;
    font-size: 16px;
    color: #95979C;
    line-height: 160%;
    width: 284px;
`

function Vantagens(props){
    return (
    <VantagensWrapper>
        <T_Vantagens>{props.titulo}</T_Vantagens>
        <P_Vantagens>{props.texto}</P_Vantagens>
    </VantagensWrapper>  
    )
}

export default Vantagens