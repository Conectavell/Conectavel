import styled from "styled-components";

const Box = styled.section`
    width: 100%;
    height: auto;
    margin-bottom: auto;
    background-color: var(--azul_principal);
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 100px;
    h2{
        font-size: 60px;
        font-weight: 400;
        color: white;
        margin-bottom: 80px;
    }
    div{
        display: flex;
        gap: 200px;
    }
`

const Parceiros = () => {
    return(
        <Box>
            <h2>Nossos parceiros</h2>
            <div>
                <img src="src\assets\Lunna.png" alt="Lunna" />
                <img src="src\assets\LarTV.png" alt="Eletrônic Lar TV" />
            </div>
        </Box>
    )
}

export default Parceiros