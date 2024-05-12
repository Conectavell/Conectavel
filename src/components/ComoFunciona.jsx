import styled from 'styled-components'
import { Detail, Sub_heading } from './Inicio'
import Step from './Step'

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
`

export const TitleCenter = styled.h2`
    font-size: 3em;
    line-height: 140%;
    font-weight: 400;
`

const ComoFunciona = () => {
    return (
        <Box>
            <SectionTitle>
                <Sub_heading>COMO FUNCIONA </Sub_heading>
                <TitleCenter>
                    Como acessar nosso <br/> serviço
                </TitleCenter>
            </SectionTitle>

            <Detail style={{ textAlign: 'center', margin: '1rem auto' }}>Para clientes</Detail>
            <Step
                titulo1="Crie sua conta"
                titulo2="Selecione um profissional"
                titulo3="Contrate"
                text1="Preencha todas as informações para garantir seu serviço."
                text2="Indique o serviço desejado e busque pelo profissional adequado."
                text3="Antes de contratar você pode tirar suas dúvidas com o profissional pelo chat." />
            <Detail style={{ textAlign: 'center', margin: '1rem auto' }}>Para profissionais</Detail>
            <Step
                titulo1="Crie sua conta"
                titulo2="Escolha um plano"
                titulo3="Ofereça seus serviços"
                text1="Preencha todas as informações e aguarde nossa análise."
                text2="Para desfrutar dos nossos serviços é necessário realizar a assinatura."
                text3="No seu perfil você pode exibir suas experiências anteriores para atrair clientes." />

        </Box>
    )
}

export default ComoFunciona