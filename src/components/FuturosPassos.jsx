import styled from "styled-components";

const Box = styled.section`
    width: 100%;
    height: auto;
    margin: auto;
    padding: 80px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    div{
        height: 730px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    p{
        margin-bottom: 10px;
        font-size: 30px;
        font-weight: 400;
        text-align: center;
    }
    h2{
        margin-bottom: 170px;
        font-size: 60px;
        font-weight: 400;
        color: var(--laranja);
    }
    .text{
        font-size: 24px;
        text-align: center;
    }
    h6{
        margin-top: -30px; 
        margin-left: 40px;
        font-size: 30px;
        font-weight: 400;
        color: var(--azul_principal);
    }
    .an{
        margin-right: 115px;
        margin-top: -65px;
        color: var(--verde_principal);
    }
    @media  (max-width: 1330px){
        img{
            width: 400px;
            height: auto;
        }
        h2{
            font-size: 50px;
            width: 180px;
            margin-bottom: 120px;
        }
        p{
            font-size: 24px;
        }
        .text{
            font-size: 20px;
        }
        div{
            height: 660px;
        }
    }
    @media  (max-width: 1000px){
        img{
            width: 300px;
            height: auto;
        }
        h2{
            font-size: 40px;
            margin-bottom: 80px;
            width: 145px;
        }
        h6{
        margin-top: -20px; 
        
        }
        .an{
            margin-top: -46px;
        }
        div{
            height: 500px;
        }
    }
`

const FuturosPassos = () => {
    return(
        <Box>
            <div>
                <img src="src\assets\appIos.jpg" alt="Aplicativo mobile" />
                <h6>IOS</h6>
            </div>
            <div>
                <p>E NÃO PARA POR AÍ</p>
                <h2>Futuros passos</h2>
                <p className="text">Um aplicativo para dispositiveis moveis,<br/> tanto para o sistema Android como IOS</p>
            </div>
            <div>
                <img src="src\assets\appAndroid.jpg" alt="Aplicativo movile" height="700px"/>
                <h6 className="an">Android</h6>
            </div>
        </Box>
    )
}

export default FuturosPassos