import styled from 'styled-components'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'

const Integrante = ({ img, nome, funcao, linkedinLink, githubLink, linkedin, github, invert }) => {
    const { innerWidth: width, innerHeight: height } = window

    
    const Box = styled.div`
        display: flex;
        gap: 1rem;
        text-align: ${invert && width > 992  ? "right" : ''};

        @media (max-width:992px){
            flex-direction: column;
            text-align: center;
            justify-content: center;
            align-items: center;
        }
    `

    const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    p{
        max-width: 250px;
    }
    @media (max-width:992px){
            text-align: center;
        }
    `

    const Nome = styled.p`
    font-size: 1.5em;
    font-weight: 600;
    margin: 0;
    @media (max-width:992px){
            text-align: center;
        }
    `
    const Funcao =styled.p`
        font-size: 1.1em;
    `

    const Row = styled.div`
            margin: .3rem 0;
            a{
                text-decoration: none;
                color: black;
            }

            a:hover{
                color: var(--laranja);
                transition: .3s ease-in-out;
            }
            @media (max-width:992px){
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin: 0;
                text-align: center;
                a{
                    margin-bottom: .9rem;
                }
        }
    `

    return (
        <Box>
            {invert && width > 992
                ?
                <>
                    <Info>
                        <Row>
                            <Nome>{nome}</Nome>
                            <Funcao>{funcao}</Funcao>
                        </Row>
                        <div>
                            <Row>
                                <a href={linkedinLink}> {linkedin} <FaLinkedin color="#175EC6" size={30} /> </a>
                            </Row>
                            <Row>
                                <a href={githubLink}>{github} <FaGithub color='black' size={30} /> </a>
                            </Row>
                        </div>
                    </Info>
                    <img src={img} width={250} alt="" />

                </>
                :
                <>
                    <img src={img} width={250} alt="" />
                    <Info>
                        <Row>
                            <Nome>{nome}</Nome>
                            <Funcao>{funcao}</Funcao>
                        </Row>
                        <div>
                            <Row>
                                <a href={linkedinLink}><FaLinkedin color="#175EC6" size={30} /> {linkedin}</a>
                            </Row>
                            <Row>
                                <a href={githubLink}><FaGithub color='black' size={30} /> {github}</a>
                            </Row>
                        </div>
                    </Info>
                </>
            }




        </Box>


    )
}

export default Integrante