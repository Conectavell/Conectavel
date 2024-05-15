import styled from "styled-components";
import { BiLogoLinkedin, BiLogoInstagram } from "react-icons/bi"
import { FaGithub } from 'react-icons/fa'
import logo from '../assets/LogoFooter.png'

const FooterWrapper = styled.footer`
    height: 240px;
    width: auto;
    background: rgb(94,196,96);
    background: linear-gradient(0deg, rgba(94,196,96,1) 0%, rgba(33,150,243,1) 100%);   
     display: flex;
    align-items: center;
`

const LadoEsquerdo_footer = styled.div`
    width: 50%;
    height: 133px;
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
    align-items: center;

    @media only screen and (max-width: 1000px){
        width: 100%;
    }
`

const LadoEsquerdo_footer_redes = styled.div`
    display: flex;
    gap: 34px;
    justify-content: center;

    @media only screen and (max-width: 1000px){
        .BiLogoLinkedin{
        
        }
    }
`

const LadoDireito_footer = styled.div`
    width: 50%;
    height: 133px;
    display: flex;
    gap: 30px;

    @media only screen and (max-width: 1000px){
        display: none;
    }
`

const OpcaoFooter = styled.p`
    font-size: 16px;
    color: #E0E3EA;
    line-height: 160%;
`

const CircuSustain = styled.p`
    font-size: 40px;
    color: #fff;
`

const DivOpcaoFooter = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

`

const DivLogo = styled.div`
    display: flex;
    gap: 10px;


`

const ImgLogo = styled.img`
    height: 59.81px;
`


function Footer() {
    return (
        <FooterWrapper>
            <LadoEsquerdo_footer>
                <LadoEsquerdo_footer_logo>
                    <DivLogo>
                        <ImgLogo src={logo} />
                        <CircuSustain>CircuSustain</CircuSustain>
                    </DivLogo>
                    <OpcaoFooter>Um ciclo que se renova.</OpcaoFooter>
                </LadoEsquerdo_footer_logo>
                <LadoEsquerdo_footer_redes>
                    <a href="https://www.linkedin.com/company/circusustain/" target="_blank"><BiLogoLinkedin size={24} color='#fff' /></a>
                    <a href="https://www.instagram.com/circusustain_/" target="_blank"><BiLogoInstagram size={24} color='#fff' /></a>
                    <a href="https://github.com/CircuSustain" target="_blank"><FaGithub size={24} color='#fff' /></a>

                </LadoEsquerdo_footer_redes>
            </LadoEsquerdo_footer>
            <LadoDireito_footer>
                <DivOpcaoFooter>
                    <OpcaoFooter>Sobre nós</OpcaoFooter>
                    <OpcaoFooter>Nossos serviços</OpcaoFooter>
                    <OpcaoFooter>Parcerias</OpcaoFooter>
                </DivOpcaoFooter>
                <DivOpcaoFooter>
                    <OpcaoFooter>Descarte eletrônico</OpcaoFooter>
                    <OpcaoFooter>Blog</OpcaoFooter>
                </DivOpcaoFooter>
                <DivOpcaoFooter>
                    <OpcaoFooter>Identidade visual</OpcaoFooter>
                    <OpcaoFooter>Colaboradores</OpcaoFooter>
                </DivOpcaoFooter>
            </LadoDireito_footer>
        </FooterWrapper>
    );
}

export default Footer