import header from '../assets/headerservicos.png'
import headerServicoMobile from '../assets/headerServicoMobile.png'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'


const ServicosHeader = () => {
    const Container = styled.div`
        width: 100vw;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: relative;
        @media (max-width:1200px){
            .desktop{
                display: none;
            }
            padding: 0;
            min-height: auto;
            margin-bottom: 1vh;
    }
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
    @media (max-width:1200px){
        width: 90%;
        bottom: 4rem;
    }
`
    const Cliente = styled.button`
    outline: none;
    border: none;
    background-color: var(--laranja);
    color: white;
    font-size: 1.5rem;
    padding: 1rem 2rem;
    border-radius: 10px;
    @media (max-width:1200px){
        padding: .8rem 1.6rem;
        font-size: 1.3rem;
        bottom: 3rem;
    }
`
    const Profissional = styled.button`
    outline: none;
    border: none;
    background-color: var(--verde_principal);
    color: white;
    font-size: 1.5rem;
    padding: 1rem 2rem;
    border-radius: 10px;
    @media (max-width:1200px){
        padding: .8rem 1.6rem;
        font-size: 1.3rem;
        bottom: 3rem;
    }
`
    const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: auto;
    @media (max-width:1200px){
        width: 95%;
    }
`

    const ImagemMobile = styled.img`
    display: none;
    height: 100vh;
    width: 100vw;
    position: absolute;
    
    @media (max-width:1200px){
        display: block;
        position: initial;
    }
`
    const navigate = useNavigate()

    return (

        <>
            <Container>

                <ImagemMobile width={"100%"} src={headerServicoMobile} />
                <img className='desktop' style={{ position: 'absolute', top: "0" }} width={"100%"} src={header} alt="" />
                <Card>
                    <h2>Venha fazer parte da nossa plataforma, sendo cliente ou prestador de serviços. </h2>
                    <Buttons>
                        <Cliente onClick={() => navigate("/Conectavel/cadastro")}>Cliente</Cliente>
                        <Profissional onClick={() => navigate("/Conectavel/cadastro")}>Profissional</Profissional>
                    </Buttons>
                </Card>

            </Container>
        </>
    )
}

export default ServicosHeader