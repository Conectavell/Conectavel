import styled from 'styled-components'
import { Sub_heading } from './Header'
import android from '../assets/visaoandroid.png'
import iphone from '../assets/visaoios.png'

const VisaoFuturo = () => {

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

    return (
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

export default VisaoFuturo