import styled, { css } from "styled-components";
import { BiLogoLinkedin, BiLogoInstagram } from "react-icons/bi"
import { FaGithub } from 'react-icons/fa'
import logo from '../assets/logo.png'
import logotipo from '../assets/logotipo.png'



const LadoEsquerdo_footer = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media only screen and (max-width: 1000px){
        width: 100%;
    }
`

const LadoEsquerdo_footer_logo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;

    @media only screen and (max-width: 1000px){
        width: 100%;
    }
`

const LadoEsquerdo_footer_redes = styled.div`
    display: flex;
    gap: 34px;
    justify-content: flex-start;


`

const LadoDireito_footer = styled.div`
    width: 40%;
    height: 133px;
    display: flex;
    flex-direction: row;
    gap: 3rem;

    @media only screen and (max-width: 1000px){
        flex-direction: column;
        height: fit-content;
        gap: 2px
    }
`

const OpcaoFooter = styled.p`
    font-size: 16px;
    color: #E0E3EA;
    line-height: 160%;
    cursor: pointer;

    @media only screen and (max-width: 1000px){
        text-align: center;
    }

    ${props => props.final && css`
        margin: 10px;
    `}
`

const CircuSustain = styled.div`
    align-items: center;
    display: flex;
`

const DivOpcaoFooter = styled.div`
    display: flex;
    flex-direction: column;
`

const DivLogo = styled.div`
    display: flex;
    gap: 10px;
`

const ImgLogo = styled.img`
    width: 85px;
`

const DivFooter = styled.div`
    width: 80%;
    height: 100%;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20%;

    @media only screen and (max-width: 1000px){
        flex-direction: column;
        height: fit-content;
        gap: 10px;
    }
`

function Footer({ cor }) {

    const FooterWrapper = styled.footer`
    height: fit-content;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 2rem;
    background:
    ${cor === "azul"
            ? "linear-gradient(90deg, #175EC6 0%, rgba(33, 150, 243, 0.5) 100%), #175EC6"
            : "linear-gradient(90deg, #77DD77 0%, rgba(44, 184, 123, 0.5) 100%), #77DD77"
        };
`


    return (
        <FooterWrapper>
            <DivFooter>
                <LadoEsquerdo_footer>
                    <LadoEsquerdo_footer_logo>
                        <DivLogo>
                            <ImgLogo src={logo} />
                            <CircuSustain><img src={logotipo} width='198px' alt="" /></CircuSustain>
                        </DivLogo>
                        <OpcaoFooter>Um ciclo que se renova.</OpcaoFooter>
                    </LadoEsquerdo_footer_logo>

                    <LadoEsquerdo_footer_redes>
                        <a href="https://www.linkedin.com/company/circusustain/" target="_blank"><BiLogoLinkedin size={24} color='#fff' /></a>
                        <a href="https://www.instagram.com/conectavel_/" target="_blank"><BiLogoInstagram size={24} color='#fff' /></a>
                        <a href="https://github.com/Conectavell" target="_blank"><FaGithub size={24} color='#fff' /></a>

                    </LadoEsquerdo_footer_redes>
                </LadoEsquerdo_footer>

                <LadoDireito_footer>
                    <DivOpcaoFooter>
                        <OpcaoFooter>Sobre nós</OpcaoFooter>
                        <OpcaoFooter>Nossos serviços</OpcaoFooter>
                        <OpcaoFooter>Parcerias</OpcaoFooter>
                    </DivOpcaoFooter>

                    <DivOpcaoFooter>
                        <OpcaoFooter>Identidade visual</OpcaoFooter>
                        <OpcaoFooter>Colaboradores</OpcaoFooter>
                    </DivOpcaoFooter>

                    <DivOpcaoFooter>
                        <OpcaoFooter>Descarte eletrônico</OpcaoFooter>
                    </DivOpcaoFooter>
                </LadoDireito_footer>
            </DivFooter>
            <OpcaoFooter final>Copyright @ 2024 Conectável</OpcaoFooter>
        </FooterWrapper>

    );
}

export default Footer

