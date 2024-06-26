import styled from "styled-components"
import AccordionApagarConta from "./AccordionApagarConta"

const Container = styled.div`
    width: 70vw;
    min-height: 21vh;
    background-color: white;
    box-shadow: 0 0  10px #00000051;
    border-radius: 10px;
    padding: 1rem;
    text-align: center;
    @media (max-width:992px){
        width: 90vw;
    }
`

const ApagarContaConfiguracoes = () => {
    return (
        <>

            <Container>
                <h2>Apagar conta</h2>
                <AccordionApagarConta />

            </Container>

        </>
    )
}

export default ApagarContaConfiguracoes