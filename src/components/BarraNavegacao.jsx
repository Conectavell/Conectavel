import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png'
import logotipo from '../assets/logotipo.png'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaBarsStaggered } from "react-icons/fa6";
import Lang from './Lang';
import '../styles/navbar.css'


export const Button = styled.button`
    padding: .8rem 1rem;
    border: none;
    outline: none;
    border-radius: 1.5rem;
    cursor: pointer;
    background-color: var(--laranja);
    color: white;
    transition: all .3s linear;
    font-weight: 600;
    &:hover{
        background-color: var(--verde_principal);
    }
    `
const BarraNavegacao = () => {
    const navItems = ['Home', 'Serviços', 'Colaboradores', 'Descarte', 'Quem somos']

    const ListItem = styled.p`
    list-style-type: none;
    font-size: .9em;
    font-weight: 500;
    margin: 0 .5rem;

    @media (max-width: 992px) {
        margin: .5rem auto;
    }
`
    const StyledLink = styled(Link)`
    cursor: pointer;
    text-decoration: none;
    color: #fff;
    &:hover{
        color: var(--laranja);
        transition: all .3s linear;
}
`
    const Login = styled.button`
    border-radius: 1.5rem;
    padding: .8rem 1rem;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: transparent;
    font-weight: 600;
    color: white;

    &:hover{
        color: var(--laranja);
        transition: all .3s linear;
    }
`

    const NavSection = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    flex-direction: row;
    margin: auto;
    width: 100%;
    @media (max-width: 992px) {
        flex-direction: column;
        margin-bottom: 1rem;
    }
    `

    return (
        <Navbar expand="lg" className='navbar' style={{ marginBottom: '2rem' }}>
            <Container fluid className='navbar__container'>
                <Navbar.Brand href="#">
                    <img width={60} src={logo} />
                    <img width={119} src={logotipo} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <FaBarsStaggered color='white' />
                </Navbar.Toggle>
                <Navbar.Collapse id="navbarScroll">
                    <NavSection>
                        <Nav style={{ margin: 'auto', }} className="me-auto my-2 my-lg-0">
                            {navItems.map((item, index) => {
                                return (
                                    <ListItem key={index}>
                                        <StyledLink to={
                                            item === "Home" ? "/Conectavel" : item === "Quem somos" ? "/Conectavel/QuemSomos" : `/Conectavel/${item}`
                                        }>
                                            {item}
                                        </StyledLink>
                                    </ListItem>
                                )
                            })}
                        </Nav>
                        <div >
                            <Button>Cadastre-se</Button>
                            <Login>Login</Login>
                            <Lang />
                        </div>
                    </NavSection>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default BarraNavegacao





