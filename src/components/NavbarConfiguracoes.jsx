import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../styles/NavbarPerfis.css"
import { FaBarsStaggered } from 'react-icons/fa6';
import { RiHome2Line } from 'react-icons/ri';
import { FaUserCircle } from 'react-icons/fa';
import { IoLockClosed } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import CadastroContext from '../context/CadastroContext';


const NavbarConfiguracoes = () => {
    const { tipoPerfil } = useContext(CadastroContext)
    return (
        <Navbar expand="lg" className="navbar-perfil p-3">
            <Container className='navbar__container'>

                <Navbar.Toggle className='m-auto mb-2' aria-controls="basic-navbar-nav ">
                    <FaBarsStaggered color='white' />
                </Navbar.Toggle>
                <Navbar.Collapse className='text-center' id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <Nav.Link  ><Link className='navbar__container__collapse__text' to={`/Conectavel/${tipoPerfil === 1 ? "perfilcliente" : "perfilprestador"}`}><RiHome2Line size={25} /> </Link></Nav.Link>
                        <Nav.Link  ><Link className='navbar__container__collapse__text' to="/Conectavel/configuracoes"><FaUserCircle size={25} /> Gerenciar configurações</Link></Nav.Link>
                        <Nav.Link  ><Link className='navbar__container__collapse__text' to="/Conectavel/configuracoes/seguranca"><IoLockClosed size={25} /> Segurança</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    )
}

export default NavbarConfiguracoes