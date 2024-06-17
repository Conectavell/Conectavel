import BarraNavegacao from '../components/BarraNavegacao'
import styled from 'styled-components'
import Integrante from '../components/Integrante'
import ana from '../assets/ana.png'
import rafaella from '../assets/rafaella.png'
import bruno from '../assets/bruno.png'
import pedro from '../assets/pedro.png'
import gabriel from '../assets/gabrielA.png'
import kevyn from '../assets/kevyn.png'
import julia from '../assets/julia.png'
import gustavo from '../assets/gustavo.png'
import Footer from '../components/Footer'
import './Nosso-negocio.svg'



const QuemSomosPage = () => {
    const Sub_heading = styled.p`
    font-size: 24px;
    font-weight: 400;
    color: #0B378D;
    text-align: center;
    
    @media (max-width: 992px){
        font-size: 20px;
    }

`
    const Heading_text = styled.h2`
    width: 100%;
    font-size: 48px;
    font-weight: 400;
    text-align: center;
    
    @media (max-width: 992px){
        line-height: 100%;
        font-size: 38px;
        width: 100%;
    }
    `
    const BoxEquipe = styled.section`
        width: 80%;
        margin: auto;
    `

    const Row = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 1rem 0;

        @media (max-width: 992px){
            flex-direction: column;
            gap: 1rem;
        }
            `

    function IdentVisual() {
        const IdVisual = styled.div`
    margin: 0;
    `
    }

    const NossoNegocio = styled.div`
        `

    const VisaoFuturo = styled.div`
        `

    const tittles = styled.div`
        `

    const texts = styled.p`
        `

    const imgs = styled.img`
    margin: 0;
    `

    return (
        <>
            <BarraNavegacao />

            <Sub_heading>
                QUEM SOMOS
            </Sub_heading>
            <Heading_text>Nossa equipe</Heading_text>

            <BoxEquipe>
                <Row>
                    <Integrante
                        img={bruno}
                        nome="Bruno Carlos"
                        funcao="Front-end | PO"
                        linkedinLink="https://www.linkedin.com/in/bruno-carlos-soares"
                        linkedin="/in/bruno-carlos-soares"
                        githubLink="https://github.com/BrunoCSoares"
                        github="BrunoCSoares"
                    />
                    <Integrante
                        invert={true}
                        img={rafaella}
                        nome="Rafaella Costa"
                        funcao="Front-end | Scrum Master | Social Media"
                        linkedinLink="https://www.linkedin.com/in/rafaella-costa2"
                        linkedin="/in/rafaella-costa2"
                        githubLink="https://github.com/Rafaella-Costa2"
                        github="Rafaella-Costa2"
                    />
                </Row>
                <Row>
                    <Integrante
                        img={pedro}
                        nome="Pedro Xavier"
                        funcao="Fullstack | Financeiro"
                        linkedinLink="https://www.linkedin.com/in/xavier-pedro"
                        linkedin="/in/xavier-pedro"
                        githubLink="https://github.com/pedroopon"
                        github="pedroopon"
                    />
                    <Integrante
                        img={gustavo}
                        invert={true}
                        nome="Gustavo Oliveira"
                        funcao="Fullstack"
                        linkedinLink="https://www.linkedin.com/in/0liverg/"
                        linkedin="/in/0liverg/"
                        githubLink="https://github.com/0Iiver79"
                        github="0Iiver79"
                    />
                </Row>
                <Row>

                    <Integrante
                        img={ana}
                        nome="Ana Rodrigues"
                        funcao="Fullstack | UI/UX"
                        linkedinLink="https://www.linkedin.com/in/devanarodrigues"
                        linkedin="/in/devanarodrigues"
                        githubLink="https://github.com/devanarodrigues"
                        github="devanarodrigues"
                    />
                    <Integrante
                        img={julia}
                        invert={true}
                        nome="Julia De Jesus"
                        funcao="Front-end | UI/UX"
                        linkedinLink="https://www.linkedin.com/in/juoliv"
                        linkedin="/in/juoliv"
                        githubLink="https://github.com/J0li"
                        github="J0li"
                    />
                </Row>
                <Row>

                    <Integrante
                        img={kevyn}
                        nome="Kevyn Rodrigues"
                        funcao="Back-end | Social Media"
                        linkedinLink="https://www.linkedin.com/in/kevynrodriguês"
                        linkedin="/in/kevynrodriguês"
                        githubLink="https://github.com/kevynProa"
                        github="kevynProa"
                    />
                    <Integrante
                        img={gabriel}
                        invert={true}
                        nome="Gabriel Amorim"
                        funcao="Back-end | Social Media"
                        linkedinLink="https://www.linkedin.com/in/gabrielfav"
                        linkedin="/in/gabrielfav"
                        githubLink="https://github.com/Bieelogrom"
                        github="Bieelogrom"
                    />
                </Row>


            </BoxEquipe>

            <IdVisual>

                <tittles>
                    <h3>nossas escolhas</h3>
                    <H2>Identidade visual</H2>
                </tittles>

                <imgs>
                    <img src="Cores.svg" alt="Identidade Visual" />
                </imgs>

                <texts>
                    <h3>Poppis</h3>
                    <p>Design acolhedor, sua visualização proporciona um acolhimento ao usuário</p>
                </texts>

                <texts>
                    <h3>Quantico</h3>
                    <p>Design moderno, sua forma demonstrar algo tecnológico e moderno</p>
                </texts>

            </IdVisual>

            <NossoNegocio>

                <tittles>
                    <h3>nossas escolhas</h3>
                    <H2>Nosso negócio</H2>
                </tittles>

                <imgs>
                <img src={Nosso-negocio.svg} alt="Nosso negocio" />
                </imgs>

            </NossoNegocio>

            <img src="Cores.svg" alt="" />

        </div >

        </d >

    <Footer />
        </>
    )
}

export default QuemSomosPage
