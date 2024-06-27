import styled from "styled-components";

const Box = styled.section`
    width: 100%;
    height: auto;
    margin: auto;
    background-color: var(--azul_principal);
    padding: 70px 0 100px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    p{
        margin-bottom: 40px;
        font-size: 32px;
        font-weight: 400;
        color: #E0FDA1;
    }
    h2{
        margin-bottom: 80px;
        font-size: 56px;
        font-weight: 400;
        color: white;
    }
    div{
        @media  (max-width: 1300px){
            img{
                width: 125px;
                height: auto;
            }
            .fase{
                width: 250px;
                height: auto;
            }
        }
        @media  (max-width: 1000px){
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 5px;
            img{
                width: 200px;
                height: auto;
            }
            .fase{
                width: 300px;
                height: auto;
            }
        }
    }
`

const NossoNegocio = () => {
    return(
        <Box>
        <p>NOSSAS ESCOLHAS</p>
        <h2>Nosso negócio</h2>
        <div>
            <img className="fase" src="src\assets\conectar.png" alt="Conectar" />
            <img src="src\assets\caboSoma.png" alt="soma" />
            <img className="fase" src="src\assets\sustentavel.png" alt="Sustentável" />
            <img src="src\assets\igual.png" alt="igual" width="200px"/>
            <img className="fase" src="src\assets\LogoNegocio.png" alt="Logo Conectável" />
        </div>
        </Box>
    )
}

export default NossoNegocio