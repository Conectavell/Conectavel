import Container from 'react-bootstrap/Container';
import  { useContext } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../styles/NavbarPerfis.css"
import logo from '../assets/logo.png'
import logotipo from '../assets/logotipo.png'
import { BiRecycle } from 'react-icons/bi';
import { AiOutlineSetting } from 'react-icons/ai';
import BemVindo from './BemVindo';
import { HiOutlineChatBubbleBottomCenterText } from 'react-icons/hi2';
import { PiUsersThree } from 'react-icons/pi';
import { FaBarsStaggered } from 'react-icons/fa6';
import CadastroContext from '../context/CadastroContext';
import { RiHome2Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const NavbarPerfis = () => {
    const { innerWidth: width } = window
    const { tipoPerfil } = useContext(CadastroContext)


    return (
        <Navbar expand="lg" className="navbar-perfil background">
            <Container className='navbar__container'>
                <Navbar.Brand href="#home">
                    <Link to="/Conectavel">
                    <img width={70} src={logo} alt="" />
                    <img width={129} src={logotipo} alt="" />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <FaBarsStaggered color='white' />
                </Navbar.Toggle>
                <Navbar.Collapse className='navbar__container__collapse' id="basic-navbar-nav">
                    <Nav className="me-auto navbar__container__collapse__content">
                        <Nav.Link ><Link className='navbar__container__collapse__text' to={`/Conectavel/${tipoPerfil === 1 ? "perfilcliente" : "perfilprestador"}`}><RiHome2Line  size={25} /></Link></Nav.Link>
                        {
                            width > 992 ?
                                ''
                                :
                                <Nav.Link> <Link className='navbar__container__collapse__text'><BemVindo  /></Link></Nav.Link>
                        }
                        {tipoPerfil === 2 ?
                            <>
                                <Nav.Link> <Link className='navbar__container__collapse__text' to="/Conectavel/chatprofissional"><HiOutlineChatBubbleBottomCenterText size={25} /> Chat</Link></Nav.Link>
                                <Nav.Link> <Link className='navbar__container__collapse__text' to="/Conectavel/comunidade"><PiUsersThree size={25} /> Comunidade</Link></Nav.Link>
                            </> : ""}

                        <Nav.Link><Link className='navbar__container__collapse__text' to="/Conectavel/configuracoes"><AiOutlineSetting size={25}  /> Configurações</Link></Nav.Link>
                        <Nav.Link> <Link className='navbar__container__collapse__text' to="/Conectavel/descarte"><BiRecycle size={25} /> Descarte</Link></Nav.Link>


                    </Nav>
                </Navbar.Collapse>
                {
                    width > 992 ?
                        <BemVindo  />
                        : ''
                }
            </Container>
        </Navbar>
    )
}

export default NavbarPerfis
