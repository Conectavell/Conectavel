import styled from 'styled-components'
import { Detail, Sub_heading } from './Header'
import Step from './Step'
import { useTranslation } from 'react-i18next'

export const Box = styled.header`
    width: 80%;
    margin: auto;
    position: relative;
    margin-bottom: 2rem;
`
export const SectionTitle = styled.section`
    margin: auto;
    text-align: center;
    width: 80%;
    @media (max-width: 768px){
        width: 100%;
        text-align: center;
    }
`
const Heading_text = styled.h2`
    width: 100%;
    font-size: 48px;
    font-weight: 400;
    
    @media (max-width: 992px){
        line-height: 100%;
        font-size: 38px;
        width: 100%;
        text-align: center;
    }
    `

export const TitleCenter = styled.h2`
    font-size: 3em;
    line-height: 140%;
    font-weight: 400;
    @media (max-width: 768px){
        width: 100%;
        text-align: center;
    }
`

const ComoFunciona = () => {
    // const { innerWidth: width, innerHeight: height } = window
    const { t } = useTranslation()


    return (
        <Box>
            <SectionTitle>
                <Sub_heading>{t("comoAcessar.subtitle")} </Sub_heading>
                <Heading_text>
                    {t("comoAcessar.title")}
                </Heading_text>
            </SectionTitle>

            <Detail style={{ textAlign: 'center', margin: '1rem auto', color: 'var(--azul_principal' }}>{t("comoAcessar.clientes.title")}</Detail>
            <Step

                titulo1={t("comoAcessar.clientes.passo1.title")}
                titulo2={t("comoAcessar.clientes.passo2.title")}
                titulo3={t("comoAcessar.clientes.passo3.title")}
                text1={t("comoAcessar.clientes.passo1.text")}
                text2={t("comoAcessar.clientes.passo2.text")}
                text3={t("comoAcessar.clientes.passo3.text")}  />
            <Detail style={{ textAlign: 'center', margin: '1rem auto',color: 'var(--azul_principal' }}>{t("comoAcessar.profissionais.title")}</Detail>
            <Step
                titulo1={t("comoAcessar.profissionais.passo1.title")}
                titulo2={t("comoAcessar.profissionais.passo2.title")}
                titulo3={t("comoAcessar.profissionais.passo3.title")}
                text1={t("comoAcessar.profissionais.passo1.text")}
                text2={t("comoAcessar.profissionais.passo2.text")}
                text3={t("comoAcessar.profissionais.passo3.text")}  />

        </Box>
    )
}

export default ComoFunciona