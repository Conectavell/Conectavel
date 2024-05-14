import { IoSearch } from 'react-icons/io5'
import styled from 'styled-components'
import logo_alternativa from '../assets/logo-alternativa.png'
import bars from '../assets/bars.png'
import logotipo_alternativo from '../assets/logotipo-alternativo.png'
import Lang from './Lang'
import { useContext } from 'react'
import ExpandedNavContext from '../context/ExpandNavContext'
import ExpandedNav from './ExpandedNav'

export const Button = styled.button`
    padding: .8rem 1rem;
    border: none;
    outline: none;
    border-radius: 1.5rem;
    cursor: pointer;
    background-color: #06AB11;
    color: white;
    font-weight: bold;
    transition: all .3s linear;
    
    &:hover{
        background-color: #009788;
    }
    `

const Nav = () => {
    const navItems = ['Home', 'Serviços', 'Colaboradores', 'Descarte', 'Quem somos nós']
    const { innerWidth: width, innerHeight: height } = window
    const {expand, setExpand} = useContext(ExpandedNavContext)
    
    const Box = styled.nav`
    width: 77.05vw;
    margin: auto;
    padding: .5rem 3rem;
    margin-top: 1rem;
    height: 3rem;
    height: 3rem;
    background-color: #C7DCF7;
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
        width: 50px;
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

    @media (max-width: 1024px) {
        width: 90vw;
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
    cursor: pointer;

    &:hover{
        color: #009788;
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

    &:hover{
        color: #009788;
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
                            <img src={logo_alternativa} alt="" />
                            <img className='logotipo' src={logotipo_alternativo} alt="" />
                        </div>
                        {
                            width > 1161
                                ?
                                <>
                                    <ul>
                                        {navItems.map((item, index) => {
                                            return <ListItem key={index}>{item}</ListItem>
                                        })
                                        }
                                    </ul>
                                    <div className='bloco'>
                                        <IoSearch size='25px' />
                                        <Button>Cadastre-se</Button>
                                        <Login>Login</Login>
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