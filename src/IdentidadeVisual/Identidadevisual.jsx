import Azul1 from './assets/175EC6.png'
import Azul2 from './assets/2196F3.png'
import verde1 from './assets/2CB87B.png'
import verde2 from './assets/77DD77.png'
import laranja from './assets/FB8C00.png'
import branco from './assets/ffffff.png'
import android from './assets/app android v2.png'
import iphone from  './assets/app ios.png'
import styled from 'styled-components'


function IdentVisual() {
    const IdVisual = styled.div`
background: #175EC6;
`


    const VisaoFuturo = styled.div`
    margin: auto;
    flex-wrap: wrap;

    @media(max-width:1200px){
    width: 100%
    flex-direction: column;
    align-items: center;
    justify-content: center;
    }
    `

    const Tittles = styled.div`
    font-size: 48px;
    text-align: center;
    `

    const SubTittle = styled.div`
    font-size: 28px;
    text-align: center;
    `

    const Texts = styled.p`
    background: #fff;
    width: 30%;
    border-radius: 20px;
    text-align: center;
    font-size: 18px;
    `

    const Conteiner = styled.div`
    width: 65%;
    margin: 2rem auto;
    /*border: 1px solid red;*/
    display: flex;
    justify-content: space-between;

    @media(max-width:1200px;){
width: 100%;
flex-direction: column;
align-items: center;
justify-content: center;
}
    `

    const Imgs = styled.div`
    margin: auto;
background: #fff;
width: 60%;
border-radius: 28px;
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
gap: 4rem;
padding: 5rem;

@media(max-width:1200px;){
width: 100%;
flex-direction: column;
}
`

    const Img2 = styled.div`
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media(max-width:1200px;){
width: 100%;
flex-direction: column;
}
`


    return (
        <div>
            <IdVisual>

                <SubTittle >
                    <h3 style={{ color: '#E0FDA1' }}>nossas escolhas</h3>
                </SubTittle>

                <Tittles>
                    <h2 style={{ color: '#fff' }}>Identidade visual</h2>
                </Tittles>

                <Imgs>
                    <img src={Azul2} alt="Azul " width="210px" height="300px" />
                    <img src={verde1} alt="Identidade Visual" width="210px" height="300px" />
                    <img src={verde2} alt="Identidade Visual" width="210px" height="300px" />
                    <img src={laranja} alt="Identidade Visual" width="210px" height="300px" />
                    <img src={Azul1} alt="Identidade Visual" width="210px" height="300px" />
                    <img src={branco} alt="Identidade Visual" width="210px" height="300px" />
                </Imgs>

                <Conteiner>

                    <Texts>
                        <h3>Poppis</h3>
                        <p>Design acolhedor, sua visualização proporciona um acolhimento ao usuário</p>
                    </Texts>

                    <Texts>
                        <h3>Quantico</h3>
                        <p>Design moderno, sua forma demonstrar algo tecnológico e moderno</p>
                    </Texts>

                </Conteiner>

            </IdVisual>

            <VisaoFuturo>

                <SubTittle>
                    <h3 style={{ color: '#000' }}>E não para por aí</h3>
                </SubTittle>

                <Tittles>
                    <h2 style={{ color: '#FB8C00' }}>Futuros passos</h2>
                </Tittles>

                <Img2>

                    <div>
                        <img src={iphone} alt="Aplicativo Mobile IOS" />
                        <p style={{ color: '#175EC6' }} >IOS</p>
                    </div>

                    <p>Um aplicativo para dispositiveis moveis, tanto para o sistema android como IOS</p>

                    <div>
                        <img src={android} alt="Aplicativo Mobile Android" />
                        <p style={{ color: '#2CB87B' }} >Android</p>
                    </div>

                </Img2>

            </VisaoFuturo>

        </div>
    )
}

export default IdentVisual;