import styled from "styled-components";
import Carrosel from "./Carrosel";

const ContribuaWrapper = styled.section`
    width: 100%;
    background: var(--verde_principal);
`
const Content = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    padding: 3rem;
    flex-direction: column;
    margin: auto;
    .carrossel{
        display: flex;
        justify-self: center;
        margin: auto;
    }
    @media only screen and (max-width: 992px){
        width: 100%;
        gap: 24px;
        padding: 2rem 0rem;
        height: 80vh;
        }
        `
const ContainerCarrosel = styled.div`
        display: flex;
        justify-content: center;

        p{
            margin: auto;
            width: 60%;
            font-size: 1.2em;
        }
`

const SubHeading = styled.p`
    font-weight: 400;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: 10%;
    color: var(--azul_principal);
    @media (max-width: 992px){
        font-size: 20px;
        text-align: center;
    }
`

const Topo = styled.div`
    height: 50%;
    width: 100%;
    display: flex;
    flex-direction: column;
`

const Heading = styled.h2`
    font-size: 48px;
    width: 100%;
    font-weight: 400;
    line-height: 140%;
    color: #FFFFFF;
    @media (max-width: 992px){
        line-height: 100%;
        font-size: 38px;
        width: 100%;
        text-align: center;
    }
`

function Section5() {

    return (
        <ContribuaWrapper>
            <Content>
                <Topo>
                    <SubHeading>CONTRIBUA</SubHeading>
                    <Heading>O descarte correto transforma</Heading>
                </Topo>
                <ContainerCarrosel>
                    <Carrosel />
                </ContainerCarrosel>
            </Content>
        </ContribuaWrapper>
    )
}

export default Section5