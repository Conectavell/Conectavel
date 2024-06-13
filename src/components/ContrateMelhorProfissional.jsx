import styled from "styled-components";
import PlacaMae from '../assets/Arrumando.jpg'
import Vantagens from './Vantagens'
import { useTranslation } from "react-i18next";

const ContratarWrapper = styled.section`
    width: 80%;
    display: flex;
    flex-direction: column;
    padding: 24px;
    gap: 28px;
    padding-bottom: 7rem;
    padding-top: 4rem;
    margin: auto;
    @media (max-width: 992px){
        width: 100%;
        padding: 2rem 24px;
    }
`

const CimaSection = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 1000px){
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
    }
`

const Title = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 1000px){
        width: 100%;
    }
`

const Sub_heading = styled.p`
    font-weight: 400;
    letter-spacing: 10%;
    font-size: 24px;
    color: var(--azul_principal);
    
    @media (max-width: 992px){
        font-size: 20px;
        text-align: center;
        width: 100%;
    }
    `

const Heading = styled.h2`
    font-weight: 400;
    font-size: 48px;
    line-height: 140%;
    width: 90%;
    
    @media (max-width: 992px){
        line-height: 130%;
        font-size: 38px;
        width: 100%;
        text-align: center;
    }
`

const ImgTopo = styled.div`
    width: 25vw;
    height: 40vh;
    background: url(${PlacaMae});
    background-position: center;
    background-size: cover;
    border-radius: 20px;
    margin-top: 2rem;

    @media only screen and (max-width: 1000px){
        width: 100%;
    }
`

const BaixoSection = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    gap: 30px;

    @media only screen and (max-width: 1000px){
        flex-direction: column;
        align-items: center;
    }
`



function ContrateMelhorProfissional() {
    const { innerWidth: width, innerHeight: height } = window
    const { t } = useTranslation()

    
    return (
        <ContratarWrapper>
            <CimaSection>
                <Title>
                    <Sub_heading>{t("contrateMelhorProfissional.subtitle")}</Sub_heading>
                    <Heading>{t("contrateMelhorProfissional.subtitle")}</Heading>
                </Title>
                {
                    width > 992 ? <ImgTopo /> : ''
                }
                
            </CimaSection>
            <BaixoSection>
                <Vantagens titulo={t("contrateMelhorProfissional.qualidades.qualidade1.title")} texto={t("contrateMelhorProfissional.qualidades.qualidade1.text")} />
                <Vantagens titulo={t("contrateMelhorProfissional.qualidades.qualidade2.title")} texto={t("contrateMelhorProfissional.qualidades.qualidade2.text")} />
                <Vantagens titulo={t("contrateMelhorProfissional.qualidades.qualidade3.title")} texto={t("contrateMelhorProfissional.qualidades.qualidade3.text")} />
            </BaixoSection>
        </ContratarWrapper>
    );
}

export default ContrateMelhorProfissional