import styled from "styled-components";
import android from '../assets/visaoandroid.png'
import iphone from '../assets/visaoios.png'
import { Sub_heading } from "./Header";

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

const VisaoFuturo = styled.div`
    padding: 2rem 0;
    margin: auto;
    flex-wrap: wrap;

    @media(max-width:1200px){
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    }
    `
    const Img2 = styled.div`
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media(max-width:1200px){
width: 100%;
flex-direction: column;
}
`
const Heading_text = styled.h2`  
    width: 100%;
    font-size: 48px;
    line-height: 140%;
    font-weight: 400;
    color: #fff;
    /* width: 50%; */
    text-align: center;
    
    @media (max-width: 1200px){
        width: 90%;
        margin: auto;
    }
`

const FuturosPassos = () => {
    return(
        <VisaoFuturo>

                <Sub_heading style={{ width: "100%", textAlign: "center" }}>
                    E NÃO PARA POR AI
                </Sub_heading>

                <Heading_text style={{ color: '#FB8C00' }}>
                    Futuros passos
                </Heading_text>

                <Img2>

                    <div>
                        <img src={iphone} alt="Aplicativo Mobile IOS" />
                        <p style={{ color: '#175EC6', textAlign: "center", fontSize: '1.8em' }} >IOS</p>
                    </div>

                    <p style={{ textAlign: "center", fontSize: '1.4em' }}>Um aplicativo para dispositivos móveis, tanto para o sistema Android como IOS.</p>

                    <div>
                        <img src={android} alt="Aplicativo Mobile Android" />
                        <p style={{ color: '#2CB87B', textAlign: "center", fontSize: '1.8em' }} >Android</p>
                    </div>

                </Img2>

            </VisaoFuturo>
    )
}

export default FuturosPassos