import styled from "styled-components";

const VantagensWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px;
    background: #F2F4F8;
    border-radius: 20px;
`

const T_Vantagens = styled.p`
    font-size: 26px;
`

const P_Vantagens = styled.p`
    font-weight: 400;
    font-size: 19px;
    color: #95979C;
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