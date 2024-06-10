import { IoSearch } from 'react-icons/io5'
import styled from 'styled-components'
import logo from '../assets/logo.png'
import bars from '../assets/bars.png'
import logotipo from '../assets/logotipo.png'
import Lang from './Lang'
import { useContext } from 'react'
import ExpandedNavContext from '../context/ExpandNavContext'
import ExpandedNav from './ExpandedNav'
import { Link } from 'react-router-dom'

export const Button = styled.button`
    padding: .8rem 1rem;
    border: none;
    outline: none;
    border-radius: 1.5rem;
    cursor: pointer;
    background-color: var(--laranja);
    color: white;
    font-weight: bold;
    transition: all .3s linear;
    
    &:hover{
        background-color: #fff;
        color: black;
    }
    `

const Nav = () => {
    const navItems = ['Home', 'Serviços', 'Colaboradores', 'Descarte', 'Quem somos']
    const { innerWidth: width, innerHeight: height } = window
    const { expand, setExpand } = useContext(ExpandedNavContext)

    const Box = styled.nav`
    width: 77.05vw;
    margin: auto;
    margin-top: 1rem;
    height: 3rem;
    height: 3rem;
    background-color: var(--azul_principal);
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 4rem;
    ul{
        display: flex;
        flex-direction: row;
        gap: 1rem;
    }
    img{
        width: 60px;
    }
    .bloco{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
    }
    .logotipo{
        width: 119px;
    }
    
    @media (min-width: 1024px) {
        padding: .5rem 3rem;
    }
    @media (max-width: 1024px) {
        width: 80vw;
        padding: .2rem 1rem;
    }
    @media (max-width: 768px){
        ul{
            flex-direction: column;
        }
    }
`
    const ListItem = styled.li`
    list-style-type: none;
    font-size: 13px;
    font-weight: 500;
    
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
    font-weight: bold;
    color: white;
    
    &:hover{
        color: var(--laranja);
        transition: all .3s linear;
    }
`

    return (
        <>
            {
                expand
                    ?
                    <ExpandedNav />

                    :
                    <Box>
                        <div style={{ alignItems: 'center', display: 'flex' }}>
                            <img src={logo} alt="" />
                            <img className='logotipo' src={logotipo} alt="" />
                        </div>
                        {
                            width > 1161
                                ?
                                <>
                                    <ul>
                                        {navItems.map((item, index) => {
                                            return (
                                                <ListItem key={index}>
                                                    <StyledLink to={`/${item === "Home" ? "CircuSustain" : item}`}>
                                                        {item}
                                                    </StyledLink>
                                                </ListItem>

                                            )
                                        })
                                        }
                                    </ul>
                                    <div className='bloco'>
                                        <IoSearch color='white' size='25px' />
                                      <Link to="/Conectavel/Cadastro"><Button>Cadastre-se</Button></Link>  
                                        <Link to="/Conectavel/Login"><Login>Login</Login></Link>
                                          <Link to="/Conectavel/Cadastro"><Button>Cadastre-se</Button></Link>  
                                        <Link to="/Conectavel/Login"><Login>Login</Login></Link>
                                        <Lang />
                                    </div>
                                </>
                                :
                                <img onClick={() => setExpand(!expand)} src={bars} alt="" />
                        }
                    </Box>
            }

        </>
    )
}

export default Nav
