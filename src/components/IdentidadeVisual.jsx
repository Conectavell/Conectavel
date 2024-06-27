import styled from "styled-components";

const Box = styled.section`
    width: 100%;
    height: auto;
    margin: auto;
    background-color: var(--azul_principal);
    padding: 70px 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    div{
        background-color: white;
        border-radius: 30px;
    }
    .maior{
        width: 1000px;
        padding: 120px 120px 60px;
        margin-bottom: 60px;
    }
    .grupo{
        background: none;
        display: flex;
        flex-direction: row;
        gap: 200px;
    }
    .grupo div{
        width: 400px;
        height: 200px;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 10px 30px;
    }
    p{
        font-size: 32px;
        font-weight: 400;
        color: #E0FDA1;
        margin-bottom: 30px;
    }
    h2{
        font-size: 58px;
        font-weight: 400;
        color: white;
        margin-bottom: 20px;
    }
    .title{
        font-size: 32px;
        font-weight: 400;
        color: var(--preto);
        margin-bottom: 20px;
    }
    h6{
        font-size: 32px;
        font-weight: 400;
        margin-bottom: 20px;
        color: var(--preto);
    }
    .paragrafoPoppins{
        font-size: 24px;
        font-weight: 400;
        color: var(--verde_principal);
        text-align: center;
    }
    .paragrafoQuantico{
        font-size: 24px;
        font-weight: 400;
        color: var(--azul_principal);
        text-align: center;
    }
`

const IdentidadeVisual = () => {
    return(
        <Box>
            <p>NOSSAS ESCOLHAS</p>
            <h2>Identidade visual</h2>
            <div className="maior">
                <img src="src\assets\palhetaCores.png" alt="Palheta de cores" />
            </div>
            <div className="grupo">
                <div>
                    <p className="title">Poppins</p>
                    <p className="paragrafoPoppins">Design acolhedor, sua visualização proporciona um acolhimento ao usuário</p>
                </div>
                <div>
                    <h6>Quantico</h6>
                    <p className="paragrafoQuantico">Design moderno, sua forma demonstrar algo tecnológico e moderno</p>
                </div>
            </div>
        </Box>
    )
}

export default IdentidadeVisual