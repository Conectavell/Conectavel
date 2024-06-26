import styled from "styled-components";

const Box = styled.section`
    width: 100%;
    height: auto;
    margin-bottom: auto;
    background-color: var(--azul_principal);
    display: flex;
    align-items: center;
    flex-direction: column;
    p{
        font-size: 32px;
        font-weight: 400;
        color: #E0FDA1;
    }
    h2{
        font-size: 60;
        font-weight: 400;
        color: white;
    }
    div{
        height: 500px;
    }
`

const Parceiros = () => {
    return(
        <Box>
            <p>Apoiadores</p>
            <h2>Parceiros</h2>
            <div></div>
        </Box>
    )
}

export default Parceiros