import styled from "styled-components";
import lartv from  '../assets/lartv.png'

const Box = styled.section`
    width: 100%;
    height: auto;
    margin-bottom: auto;
    background-color: var(--azul_principal);
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-bottom: 2rem;
    h2{
        font-size: 60;
        font-weight: 400;
        color: white;
    }
    
`

const Heading_text = styled.h2`  
width: 100%;
font-size: 48px;
font-weight: 400;
text-align: center;
margin: 2rem 0;

@media (max-width: 992px){
    line-height: 100%;
    font-size: 38px;
    width: 100%;
}
`

const ParceriasContainer = styled.div`
    margin: auto;
    width: 80%;
    display: flex;
    justify-content: center;
`

const Parceiros = () => {
    return(
        <Box>
            <Heading_text>Nossos parceiros</Heading_text>
            <ParceriasContainer>

                <img src={lartv} width={300} height={239.54} alt="" />
            </ParceriasContainer>
        </Box>
    )
}

export default Parceiros