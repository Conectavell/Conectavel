import header from '../assets/headerservicos.png'
import styled from 'styled-components'
import BarraNavegacao from './BarraNavegacao'
import { useNavigate } from 'react-router-dom'

const ServicosHeader = () => {
    const Container = styled.div`
        width: 100vw;
        min-height: 100vh;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    margin-bottom: 11vh;
    `
    const Card = styled.div`
    width: 40%;
    height: 40vh;
    background-color: var(--azul_principal);
    border-radius: 10px;
    position: absolute;
    bottom: 0;
    z-index: 999;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    color: white;
`
    const Cliente = styled.button`
    outline: none;
    border: none;
    background-color: var(--laranja);
    color: white;
    font-size: 1.5rem;
    padding: 1rem 2rem;
    border-radius: 10px;
`
    const Profissional = styled.button`
    outline: none;
    border: none;
    background-color: var(--verde_principal);
    color: white;
    font-size: 1.5rem;
    padding: 1rem 2rem;
    border-radius: 10px;
`
const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: auto;
`
const navigate = useNavigate()

    return (

        <>
            <Container>


                <img style={{ position: 'absolute', top: "0" }} width={"100%"} src={header} alt="" />
                <Card>
                    <h2>Venha fazer parte da nossa plataforma, sendo cliente ou prestador de serviços. </h2>
                    <Buttons>
                        <Cliente onClick={()=> navigate("/Conectavel/cadastro")}>Cliente</Cliente>
                        <Profissional onClick={()=> navigate("/Conectavel/cadastro")}>Profissional</Profissional>
                    </Buttons>
                </Card>

            </Container>
        </>
    )
}

export default ServicosHeader