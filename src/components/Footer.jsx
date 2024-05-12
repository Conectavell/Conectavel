import styled from "styled-components";
import logo from '../assets/Logo.png'
import { BiLogoLinkedin, BiLogoInstagram } from "react-icons/bi"
import { FaGithub } from 'react-icons/fa'

const FooterWrapper = styled.footer`
    height: 240px;
    width: auto;
    background: gray;
    display: flex;

`

const LadoEsquerdo_footer = styled.div`
    width: 50%;
    height: 133px;
    display: flex;
    flex-direction: column;
    

    p{
        color: #fff;
        font-size: 16px;
        font-weight: 400;
        line-height: 160%;
    }
`

const LadoEsquerdo_footer_logo = styled.div`
    display: flex;
`

const LadoEsquerdo_footer_redes = styled.div`
    display: flex;
    gap: 34px;
`

const LadoDireito_footer = styled.div`
    width: 27%;
    height: 133px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`

const listaOpcao = ["Sobre nós", "Descarte eletrônico", "Identidade visual", "Nossos serviços", "Blog", "Colaboradores", "Parcerias"]
const p_opcao = listaOpcao.map(opcao => <p>{opcao}</p>)

function Footer() {
    return (
        <FooterWrapper>
            <LadoEsquerdo_footer>
                <LadoEsquerdo_footer_logo>

                    <p>Um ciclo que se renova.</p>
                </LadoEsquerdo_footer_logo>
                <LadoEsquerdo_footer_redes>
                    <BiLogoLinkedin size={24} color='#fff' />
                    <BiLogoInstagram size={24} color='#fff' />
                    <FaGithub size={24} color='#fff' />
                </LadoEsquerdo_footer_redes>
            </LadoEsquerdo_footer>
            <LadoDireito_footer>
                {p_opcao}
            </LadoDireito_footer>
        </FooterWrapper>
    );
}

export default Footer