import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../styles/NavbarPerfis.css"
import { FaBarsStaggered } from 'react-icons/fa6';
import { RiHome2Line } from 'react-icons/ri';
import { FaUserCircle } from 'react-icons/fa';
import { IoLockClosed } from 'react-icons/io5';


const NavbarConfiguracoes = () => {

    return (
        <Navbar expand="lg" className="navbar-perfil p-3">
            <Container className='navbar__container'>

                <Navbar.Toggle className='m-auto mb-2' aria-controls="basic-navbar-nav ">
                    <FaBarsStaggered color='white' />
                </Navbar.Toggle>
                <Navbar.Collapse className='text-center' id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <Nav.Link className='navbar__container__collapse__text' ><RiHome2Line  size={25} /> </Nav.Link>
                        <Nav.Link className='navbar__container__collapse__text' ><FaUserCircle size={25} /> Gerenciar configurações</Nav.Link>
                        <Nav.Link className='navbar__container__collapse__text' ><IoLockClosed  size={25} /> Segurança</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    )
}

export default NavbarConfiguracoes