import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png'
import logotipo from '../assets/logotipo.png'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaBarsStaggered } from "react-icons/fa6";
import '../styles/navbar.css'
import { useTranslation } from 'react-i18next';
import SelectLang from './SelectLang';
import { FaUserAlt } from 'react-icons/fa';
import { useContext } from 'react';
import CadastroContext from '../context/CadastroContext';
import Deslogar from './Deslogar';
import logoFundoAzul from '../assets/logoFundoAzul.png'


//

const BarraNavegacao = ({ cor }) => {
    const navItems = ['Home', 'Quem somos', 'Colaboradores', 'Descarte',]
    const { tipoPerfil, idUsuario } = useContext(CadastroContext)

    const Button = styled(Link)`
    padding: .8rem 1rem;
    text-align: center;
    text-decoration: none;
    border: none;
    outline: none;
    border-radius: 1.5rem;
    cursor: pointer;
    background-color: var(--laranja);
    color: white;
    transition: all .3s linear;
    font-weight: 600;
    &:hover{
        background-color: ${cor === "azul" ? "var(--verde_principal)" : "var(--azul_principal)"};
    }
    `

    const ListItem = styled.p`
    white-space: nowrap;
    list-style-type: none;
    font-size: .9em;
    font-weight: 500;
    margin: 0 .5rem;
    color: white;
    cursor: pointer;

    @media (max-width:  1200px) {
        margin: .5rem auto;
    }
    &:hover{
        color: var(--laranja);
        transition: all .3s linear;
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
    const Login = styled(Link)`
    border-radius: 1.5rem;
    padding: .8rem 1rem;
    text-decoration: none;
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
    @media (max-width:  1200px) {
        flex-direction: column;
        margin-bottom: 1rem;
    }
    `
    const Block = styled.div`
        width: auto;
        display: flex;
        align-items: center; 
    `

    const { t } = useTranslation()
    return (
        <Navbar expand="xl" className='navbar' style={{
            marginBottom: '2rem',
            backgroundColor: cor === "azul"
                ? "var(--azul_principal)"
                : "var(--verde_principal)"
        }}>
            <Container fluid className='navbar__container'>
                <Navbar.Brand href="#">
                    <img width={60} src={cor === "azul" ? logo : logoFundoAzul }/>
                    <img width={119} src={logotipo} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <FaBarsStaggered color='white' />
                </Navbar.Toggle>
                <Navbar.Collapse id="navbarScroll">
                    <NavSection>
                        <Nav style={{ margin: 'auto', }} className="me-auto my-2 my-xl-0">
                            {navItems.map((item, index) => {
                                return (
                                    <ListItem key={index}>
                                        <StyledLink to={
                                            item === "Home" ? "/Conectavel" : item === "Quem somos" ? "/Conectavel/QuemSomos" : `/Conectavel/${item}`
                                        }>
                                            {t(`navbar.${item}`)}
                                        </StyledLink>
                                    </ListItem>
                                )
                            })}
                            <ListItem>
                                {t("navbar.Serviços")}
                            </ListItem>
                        </Nav>
                        <Block >
                            {
                                idUsuario ?
                                    <>
                                        <Login to={tipoPerfil === 1 ? "/Conectavel/perfilcliente" : "/Conectavel/perfilprestador"} ><FaUserAlt size={'1.5rem'} /></Login>
                                        <Login to="/Conectavel" ><Deslogar size="1.5rem"/></Login>
                                    </>
                                    :
                                    <>
                                        <Button to="/Conectavel/cadastro">{t("navbar.btncadastro")}</Button>
                                        <Login to="/Conectavel/login" >{t("navbar.btnlogin")}</Login>
                                    </>
                            }

                            <SelectLang />
                        </Block>
                    </NavSection>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default BarraNavegacao;



