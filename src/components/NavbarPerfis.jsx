import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../styles/NavbarPerfis.css"
import logo from '../assets/logo.png'
import logotipo from '../assets/logotipo.png'
import { BiRecycle } from 'react-icons/bi';
import { VscBellDot } from 'react-icons/vsc';
import { AiOutlineSetting } from 'react-icons/ai';
import BemVindo from './BemVindo';
import { HiOutlineChatBubbleBottomCenterText } from 'react-icons/hi2';
import { PiUsersThree } from 'react-icons/pi';

const NavbarPerfis = ({ usuario }) => {

    // para exibir a as opções e fotos do profissional
    // esse componente deve ser renderizado com a seguinte props
    // usuario="profissional"
    // caso queira opções e fotos do usuario:
    // usuario="usuario"
    
    return (
        <Navbar expand="lg" className="navbar">
            <Container className='navbar__container'>
                <Navbar.Brand href="#home">
                    <img width={70} src={logo} alt="" />
                    <img width={129} src={logotipo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className='navbar__container__collapse' id="basic-navbar-nav">
                    <Nav className="me-auto navbar__container__collapse__content">

                        {usuario === "profissional" ?
                            <>
                                <Nav.Link className='navbar__container__collapse__text' ><HiOutlineChatBubbleBottomCenterText size={25} /> Chat</Nav.Link>
                                <Nav.Link className='navbar__container__collapse__text' ><PiUsersThree size={25} /> Comunidade</Nav.Link>
                            </> : ""}

                        <Nav.Link className='navbar__container__collapse__text' ><AiOutlineSetting size={25} /> Configurações</Nav.Link>
                        <Nav.Link className='navbar__container__collapse__text' ><BiRecycle size={25} /> Descarte</Nav.Link>
                        <Nav.Link className='navbar__container__collapse__text' ><VscBellDot size={25} /></Nav.Link>

                    </Nav>
                </Navbar.Collapse>
                <BemVindo usuario={usuario} />
            </Container>
        </Navbar>
    )
}

export default NavbarPerfis
