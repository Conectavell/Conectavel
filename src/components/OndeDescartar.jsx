import styled from "styled-components";

const Box = styled.section`
    width: 100%;
    height: auto;
    margin: auto;
    background-color: var(--verde_secundario);
    padding: 2rem 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    p{
         font-size: 32px;
        font-weight: 400;
        color: #00796A;
    }
    h2{
        font-weight: 400;
        font-size: 58px;
        color: #151515;
    }
`
const ImgsContainer = styled.div`
    display: flex;
    gap: 93px;
    margin-top: 100px;
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 60px;
    }
    img{
        border-radius: 50%;
        border: 10px solid #131922;
        box-shadow: 0 40px 40px rgba(0, 0, 0, 0.25);
    }
    .ge{
        border: 10px solid white;
    }
    h6{
        font-weight: 400;
        font-size: 24px;
        color: black;
    }
    @media  (max-width: 990px){
        flex-direction: column;
    }
`
 

const OndeDescartar = () => {
    return(
        <Box>
            <p>COLABORE</p>
            <h2>Onde descartar</h2>
            <ImgsContainer>
                <div>
                    <img src="src\assets\samsungDescarte.jpg" alt="Sansung Recicla" width="360" height="360" />
                    <h6>Sansung Recicla</h6>
                </div>
                <div>
                    <img src="src\assets\greenEletronDescarte.jpg" alt="Green Eletron" width="360" height="360" className="ge"/>
                    <h6>Green Eletron</h6>
                </div>
                <div>
                    <img src="src\assets\abreeDescarte.jpg" alt="ABREE" width="360" height="360"/>
                    <h6>ABREE</h6>
                </div>
            </ImgsContainer>
        </Box>
    )
}
export default OndeDescartar
